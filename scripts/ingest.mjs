
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import rag from '../lib/rag.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(root, 'docs');
const c = rag.config();
const DRY = process.argv.includes('--dry');
if (c.missing.length && !DRY) {
  console.error('Missing environment variables:', c.missing.join(', '));
  console.error('Copy .env.example to .env and fill it in.');
  process.exit(1);
}

const stripPrefix = (s) => s.replace(/^\d+[-_.]\s*/, '');

function urlFor(file) {
  const rel = path.relative(docsDir, file).replace(/\\/g, '/').replace(/\.md$/, '');
  const parts = rel.split('/').map(stripPrefix);
  if (parts[parts.length - 1] === 'welcome' && parts.length === 1) return '/docs/';
  if (parts[parts.length - 1] === 'index') parts.pop();
  return '/docs/' + parts.join('/');
}

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
  });
}

function clean(text) {
  return text
    .replace(/^:::tip[\s\S]*?^:::$/gm, '')
    .replace(/^:::\w+\s*(.*)$/gm, (_, t) => (t ? `${t}:` : ''))
    .replace(/^:::$/gm, '')
    .replace(/\*\*/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function chunksFor(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  const title = (fm?.[1].match(/^title:\s*"?(.*?)"?\s*$/m) || [])[1] || path.basename(file);
  const body = raw.replace(/^---\n[\s\S]*?\n---\n/, '');
  const sections = body.split(/^## /m);
  const out = [];
  sections.forEach((sec, i) => {
    const heading = i === 0 ? 'Overview' : sec.split('\n')[0].trim();
    const text = clean(i === 0 ? sec.replace(/^# .*$/m, '') : sec.split('\n').slice(1).join('\n'));
    if (text.length < 30) return;
    // split long sections on blank lines
    let buf = '';
    const flush = () => {
      if (buf.trim()) out.push({title, heading, text: buf.trim()});
      buf = '';
    };
    for (const para of text.split('\n\n')) {
      if ((buf + '\n\n' + para).length > 1400) flush();
      buf += (buf ? '\n\n' : '') + para;
    }
    flush();
  });
  return out.map((ch, k) => ({...ch, url: urlFor(file), key: `${urlFor(file)}#${k}`}));
}

const uuid = (s) => {
  const h = crypto.createHash('md5').update(s).digest('hex');
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20, 32)}`;
};

const chunks = walk(docsDir).flatMap(chunksFor);
console.log(`Found ${chunks.length} chunks from docs/. Collection: ${c.collection}`);

if (DRY) {
  console.log('Dry run: no network calls. Sample chunk:\n', JSON.stringify(chunks[40], null, 2));
  process.exit(0);
}

await rag.recreateCollection(c);
console.log('Collection ready. Embedding and uploading...');

const BATCH = 24;
for (let i = 0; i < chunks.length; i += BATCH) {
  const batch = chunks.slice(i, i + BATCH);
  const vectors = await rag.embed(
    c,
    batch.map((b) => `${b.title} - ${b.heading}\n${b.text}`),
    'RETRIEVAL_DOCUMENT',
  );
  await rag.upsert(
    c,
    batch.map((b, j) => ({
      id: uuid(b.key),
      vector: vectors[j],
      payload: {title: b.title, heading: b.heading, url: b.url, text: b.text},
    })),
  );
  console.log(`  uploaded ${Math.min(i + BATCH, chunks.length)} / ${chunks.length}`);
  await new Promise((r) => setTimeout(r, 400));
}
console.log('Done. Your chatbot now knows the book.');
