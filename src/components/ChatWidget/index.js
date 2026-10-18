import React, {useCallback, useEffect, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './widget.css';

const SUGGESTIONS = [
  'What is RAG?',
  'Python loops samjhao',
  'Week 20 mein kya parhaya jata hai?',
];

/* ---------- tiny, safe markdown renderer (no dangerouslySetInnerHTML) ---------- */
function renderInline(text, keyPrefix) {
  const parts = [];
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('**')) parts.push(<strong key={`${keyPrefix}-${i++}`}>{tok.slice(2, -2)}</strong>);
    else parts.push(<code key={`${keyPrefix}-${i++}`} className="cw-inline-code">{tok.slice(1, -1)}</code>);
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function RichText({text}) {
  const blocks = text.split(/```/);
  return (
    <>
      {blocks.map((block, bi) => {
        if (bi % 2 === 1) {
          const code = block.replace(/^[a-zA-Z0-9_+-]*\n/, '').replace(/\n$/, '');
          return (
            <pre key={bi} className="cw-code">
              <code>{code}</code>
            </pre>
          );
        }
        const lines = block.split('\n');
        const out = [];
        let list = [];
        const flushList = () => {
          if (list.length) {
            out.push(
              <ul key={`ul-${bi}-${out.length}`} className="cw-list">
                {list.map((li, k) => (
                  <li key={k}>{renderInline(li, `li-${bi}-${k}`)}</li>
                ))}
              </ul>,
            );
            list = [];
          }
        };
        lines.forEach((line, li) => {
          const bullet = line.match(/^\s*(?:[-*•]|\d+\.)\s+(.*)$/);
          if (bullet) {
            list.push(bullet[1]);
          } else {
            flushList();
            if (line.trim()) out.push(<p key={`p-${bi}-${li}`}>{renderInline(line, `p-${bi}-${li}`)}</p>);
          }
        });
        flushList();
        return <React.Fragment key={bi}>{out}</React.Fragment>;
      })}
    </>
  );
}

/* ---------- icons ---------- */
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20.5l1.6-5A8.5 8.5 0 1 1 21 11.5Z" />
    <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth="2.6" />
  </svg>
);
const SparkIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.2 6.3L20.5 10.5l-6.3 2.2L12 19l-2.2-6.3L3.5 10.5l6.3-2.2L12 2Z" />
    <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" opacity=".8" />
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
const SendIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M3.4 20.4 21 12 3.4 3.6 3.3 10l12.6 2-12.6 2 .1 6.4Z" />
  </svg>
);

export default function ChatWidget() {
  const {siteConfig} = useDocusaurusContext();
  const {book, chatApiUrl} = siteConfig.customFields;
  const theme = book.theme || 'aurora';

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: `Assalam o Alaikum! I am the ${book.botName}. Ask me anything about this book, in English or Roman Urdu, and I will explain it with examples.`,
    },
  ]);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const lastQuestion = useRef('');

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, loading, open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  // Lets other parts of the site (e.g. the homepage button) open the chat
  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener('cw:open', openChat);
    return () => window.removeEventListener('cw:open', openChat);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const ask = useCallback(
    async (question) => {
      const q = question.trim();
      if (!q || loading) return;
      lastQuestion.current = q;
      const history = messages
        .filter((m) => !m.error)
        .slice(-6)
        .map((m) => ({role: m.role === 'bot' ? 'model' : 'user', text: m.text}));
      setMessages((prev) => [...prev, {role: 'user', text: q}]);
      setInput('');
      setLoading(true);
      try {
        const res = await fetch(chatApiUrl, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({message: q, history}),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || 'The tutor is busy right now.');
        setMessages((prev) => [...prev, {role: 'bot', text: data.answer, sources: data.sources}]);
      } catch (err) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'bot',
            error: true,
            text: `${err.message || 'Something went wrong.'} Please try again in a few seconds.`,
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [loading, messages, chatApiUrl],
  );

  const onSubmit = (e) => {
    e.preventDefault();
    ask(input);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      ask(input);
    }
  };

  const clearChat = () => {
    setMessages([{role: 'bot', text: 'Chat cleared. What would you like to learn next?'}]);
  };

  const showChips = messages.length <= 1;

  return (
    <div className="cw-root" data-cw-theme={theme}>
      {open && (
        <section className="cw-panel" role="dialog" aria-label={book.botName}>
          <header className="cw-header">
            <div className="cw-avatar" aria-hidden="true">
              {theme === 'bloom' ? <SparkIcon /> : <ChatIcon />}
            </div>
            <div className="cw-title">
              <strong>{book.botName}</strong>
              <span>
                <i className="cw-dot" /> English &amp; Roman Urdu
              </span>
            </div>
            <button type="button" className="cw-clear" onClick={clearChat} title="Clear chat">
              Clear
            </button>
            <button type="button" className="cw-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <CloseIcon />
            </button>
          </header>

          <div className="cw-messages" ref={listRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`cw-msg cw-${m.role}${m.error ? ' cw-error' : ''}`}>
                <div className="cw-bubble">
                  <RichText text={m.text} />
                  {m.error && (
                    <button type="button" className="cw-retry" onClick={() => ask(lastQuestion.current)}>
                      Try again
                    </button>
                  )}
                  {m.sources && m.sources.length > 0 && (
                    <div className="cw-sources">
                      {m.sources.map((s) => (
                        <a key={s.url} href={s.url}>
                          {s.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="cw-msg cw-bot">
                <div className="cw-bubble cw-typing" aria-label="Typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            {showChips && (
              <div className="cw-chips">
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" onClick={() => ask(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="cw-form" onSubmit={onSubmit}>
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              maxLength={600}
              placeholder="Type your question..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label="Your question"
            />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send">
              <SendIcon />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className={`cw-fab${open ? ' cw-fab-open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close AI tutor' : 'Open AI tutor'}
        aria-expanded={open}
      >
        <span className="cw-fab-icon">{open ? <CloseIcon /> : theme === 'bloom' ? <SparkIcon /> : <ChatIcon />}</span>
        {!open && <span className="cw-fab-label">Ask AI</span>}
      </button>
    </div>
  );
}
