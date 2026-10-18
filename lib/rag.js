// Shared helpers for the RAG chatbot: Gemini (embeddings + answers) and Qdrant (vector search).
// Only uses fetch, so there are no extra npm dependencies.
'use strict';

const env = (k, d) => (process.env[k] && process.env[k].trim()) || d;

function config() {
  const c = {
    geminiKey: env('GEMINI_API_KEY'),
    model: env('GEMINI_MODEL', 'gemini-2.5-flash'),
    fallbackModel: env('GEMINI_FALLBACK_MODEL', 'gemini-2.5-flash-lite'),
    embedModel: env('GEMINI_EMBED_MODEL', 'gemini-embedding-001'),
    embedDim: parseInt(env('EMBED_DIM', '768'), 10),
    qdrantUrl: (env('QDRANT_URL', '') || '').replace(/\/+$/, ''),
    qdrantKey: env('QDRANT_API_KEY'),
    collection: env('QDRANT_COLLECTION'),
    botName: env('BOT_NAME', 'AI Tutor'),
    bookName: env('BOOK_NAME', 'AI & Data Science book'),
  };
  const missing = [];
  if (!c.geminiKey) missing.push('GEMINI_API_KEY');
  if (!c.qdrantUrl) missing.push('QDRANT_URL');
  if (!c.qdrantKey) missing.push('QDRANT_API_KEY');
  if (!c.collection) missing.push('QDRANT_COLLECTION');
  c.missing = missing;
  return c;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Retries temporary failures (429 / 5xx / network). This is what fixes the
// intermittent "AI service busy" error: Gemini often succeeds on the 2nd or 3rd try.
async function fetchRetry(url, options, {tries = 4, baseDelay = 700} = {}) {
  let lastErr;
  for (let attempt = 0; attempt < tries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (res.ok) return res;
      const retryable = res.status === 429 || res.status >= 500;
      const body = await res.text().catch(() => '');
      lastErr = new Error(`HTTP ${res.status}: ${body.slice(0, 300)}`);
      lastErr.status = res.status;
      if (!retryable) throw lastErr;
    } catch (err) {
      lastErr = err;
      if (err.status && err.status < 500 && err.status !== 429) throw err;
    }
    if (attempt < tries - 1) await sleep(baseDelay * 2 ** attempt + Math.random() * 300);
  }
  throw lastErr;
}

/* ---------------- Gemini ---------------- */
const GEMINI = (process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com/v1beta').replace(/\/+$/, '');

function normalize(v) {
  const n = Math.sqrt(v.reduce((s, x) => s + x * x, 0)) || 1;
  return v.map((x) => x / n);
}

// taskType: 'RETRIEVAL_DOCUMENT' when ingesting, 'RETRIEVAL_QUERY' for questions
async function embed(c, texts, taskType) {
  const res = await fetchRetry(`${GEMINI}/models/${c.embedModel}:batchEmbedContents`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'x-goog-api-key': c.geminiKey},
    body: JSON.stringify({
      requests: texts.map((text) => ({
        model: `models/${c.embedModel}`,
        content: {parts: [{text}]},
        taskType,
        outputDimensionality: c.embedDim,
      })),
    }),
  });
  const data = await res.json();
  return data.embeddings.map((e) => normalize(e.values));
}

async function generateWith(c, model, system, contents) {
  const body = {
    systemInstruction: {parts: [{text: system}]},
    contents,
    generationConfig: {temperature: 0.4, maxOutputTokens: 2048},
  };
  if (process.env.GEMINI_THINKING_BUDGET !== undefined && process.env.GEMINI_THINKING_BUDGET !== '') {
    body.generationConfig.thinkingConfig = {thinkingBudget: parseInt(process.env.GEMINI_THINKING_BUDGET, 10)};
  }
  const res = await fetchRetry(
    `${GEMINI}/models/${model}:generateContent`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'x-goog-api-key': c.geminiKey},
      body: JSON.stringify(body),
    },
    {tries: 3},
  );
  const data = await res.json();
  const text = (data.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('').trim();
  if (!text) throw new Error('Empty answer from model');
  return text;
}

// Try the main model (with retries), then the lighter fallback model
async function generate(c, system, contents) {
  try {
    return await generateWith(c, c.model, system, contents);
  } catch (err) {
    if (!c.fallbackModel || c.fallbackModel === c.model) throw err;
    return await generateWith(c, c.fallbackModel, system, contents);
  }
}

/* ---------------- Qdrant ---------------- */
async function qdrant(c, path, method = 'GET', body) {
  const res = await fetchRetry(`${c.qdrantUrl}${path}`, {
    method,
    headers: {'Content-Type': 'application/json', 'api-key': c.qdrantKey},
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

async function recreateCollection(c) {
  try {
    await qdrant(c, `/collections/${c.collection}`, 'DELETE');
  } catch (_) {
    /* collection did not exist */
  }
  await qdrant(c, `/collections/${c.collection}`, 'PUT', {
    vectors: {size: c.embedDim, distance: 'Cosine'},
  });
}

async function upsert(c, points) {
  return qdrant(c, `/collections/${c.collection}/points?wait=true`, 'PUT', {points});
}

async function search(c, vector, limit = 5) {
  const data = await qdrant(c, `/collections/${c.collection}/points/search`, 'POST', {
    vector,
    limit,
    with_payload: true,
  });
  return data.result || [];
}

module.exports = {config, embed, generate, recreateCollection, upsert, search, fetchRetry};
