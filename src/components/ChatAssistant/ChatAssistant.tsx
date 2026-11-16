import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react';

import { languages } from '../../locales/languages';

type Msg = { role: 'user' | 'assistant'; content: string };

const COPY: Record<string, {
  title: string;
  placeholder: string;
  greeting: string;
  open: string;
  teaser: string;
  send: string;
  error: string;
}> = {
  sv: {
    title: 'Fråga ByggExp',
    placeholder: 'Ställ en fråga om bygg, ekonomi, regler …',
    greeting: 'Hej! Jag hjälper dig att hitta det du kom hit för.',
    teaser: 'Behöver du hjälp? Fråga oss om ByggExp.',
    open: 'Öppna AI-assistenten',
    send: 'Skicka',
    error: 'Något gick fel. Försök igen om en stund.',
  },
  nb: {
    title: 'Spør ByggExp',
    placeholder: 'Still et spørsmål om bygg, økonomi, regler …',
    greeting: 'Hei! Jeg hjelper deg å finne det du kom hit for.',
    teaser: 'Trenger du hjelp? Spør oss om ByggExp.',
    open: 'Åpne AI-assistenten',
    send: 'Send',
    error: 'Noe gikk galt. Prøv igjen om litt.',
  },
  en: {
    title: 'Ask ByggExp',
    placeholder: 'Ask about construction, finance, rules …',
    greeting: 'Hi! I’ll help you find what you came here for.',
    teaser: 'Need help? Ask us about ByggExp.',
    open: 'Open the AI assistant',
    send: 'Send',
    error: 'Something went wrong. Please try again shortly.',
  },
  ru: {
    title: 'Спросить ByggExp',
    placeholder: 'Задайте вопрос о стройке, финансах, правилах …',
    greeting: 'Здравствуйте! Помогу найти то, зачем вы пришли.',
    teaser: 'Нужна помощь? Спросите нас о ByggExp.',
    open: 'Открыть AI-ассистента',
    send: 'Отправить',
    error: 'Что-то пошло не так. Попробуйте позже.',
  },
};

// Render assistant text with minimal markdown: [label](url) links and line
// breaks. Everything else is plain text (React escapes it), so there is no
// dangerouslySetInnerHTML and no injection surface.
function renderContent(text: string): ReactNode {
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  // Models sometimes add **bold** despite the prompt; show it as plain text.
  const lines = text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/^#{1,6}\s+/gm, '').split('\n');
  return lines.map((line, li) => {
    const parts: ReactNode[] = [];
    let last = 0;
    let m: RegExpExecArray | null;
    linkRe.lastIndex = 0;
    while ((m = linkRe.exec(line)) !== null) {
      if (m.index > last) parts.push(line.slice(last, m.index));
      const label = m[1];
      const href = m[2];
      const safe = href.startsWith('/') || /^https?:\/\//.test(href);
      parts.push(
        safe ? (
          <Link key={`${li}-${m.index}`} href={href}>
            {label}
          </Link>
        ) : (
          label
        ),
      );
      last = m.index + m[0].length;
    }
    if (last < line.length) parts.push(line.slice(last));
    return (
      <Fragment key={li}>
        {parts}
        {li < lines.length - 1 ? <br /> : null}
      </Fragment>
    );
  });
}

export default function ChatAssistant() {
  const router = useRouter();
  const langParam = router.query.lang;
  const lang =
    typeof langParam === 'string' && langParam in languages ? langParam : 'sv';
  const copy = COPY[lang] || COPY.sv;

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([]);
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [teaser, setTeaser] = useState(false);

  // Proactive help offer (owner, 2026-11-16): after 15 s the chat opens by
  // itself on desktop; on phones, where the panel would cover the page, a
  // small bubble by the button offers help instead. Once per 24 h per visitor,
  // never on the contact page (the form is the point there), and never again
  // after the visitor closed it in this session. Opening costs nothing — the
  // model is called only when a question is sent.
  useEffect(() => {
    if (router.pathname.includes('/contact')) return;
    const KEY = 'byggexp.chat.offer';
    let last = 0;
    try {
      last = Number(window.localStorage.getItem(KEY) || 0);
    } catch {
      /* storage blocked */
    }
    if (Date.now() - last < 24 * 3600_000) return;
    const timer = window.setTimeout(() => {
      try {
        window.localStorage.setItem(KEY, String(Date.now()));
      } catch {
        /* storage blocked */
      }
      if (window.matchMedia('(max-width: 840px)').matches) setTeaser(true);
      else setOpen(true);
    }, 15_000);
    return () => window.clearTimeout(timer);
  }, [router.pathname]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || streaming) return;
    const nextMessages: Msg[] = [...messages, { role: 'user', content: text }];
    setMessages([...nextMessages, { role: 'assistant', content: '' }]);
    setInput('');
    setStreaming(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages, lang }),
      });
      if (!res.ok || !res.body) throw new Error('bad response');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copyMsgs = prev.slice();
          copyMsgs[copyMsgs.length - 1] = { role: 'assistant', content: acc };
          return copyMsgs;
        });
      }
    } catch {
      setMessages((prev) => {
        const copyMsgs = prev.slice();
        copyMsgs[copyMsgs.length - 1] = { role: 'assistant', content: copy.error };
        return copyMsgs;
      });
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      {!open && teaser ? (
        <div className="chat-teaser">
          <button type="button" className="chat-teaser-text" onClick={() => { setTeaser(false); setOpen(true); }}>
            {copy.teaser}
          </button>
          <button type="button" className="chat-teaser-close" aria-label="Stäng" onClick={() => setTeaser(false)}>
            ✕
          </button>
        </div>
      ) : null}

      {!open ? (
        <button
          type="button"
          className="chat-fab"
          onClick={() => { setTeaser(false); setOpen(true); }}
          aria-label={copy.open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 12a8 8 0 0 1-8 8H7l-3 3v-4a8 8 0 1 1 17-7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : null}

      {open ? (
        <div className="chat-panel" role="dialog" aria-label={copy.title}>
          <div className="chat-header">
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Stäng"
            >
              ✕
            </button>
          </div>

          <div className="chat-messages" ref={scrollRef}>
            <div className="chat-msg chat-msg--assistant">{copy.greeting}</div>
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg chat-msg--${m.role}`}>
                {m.role === 'assistant' ? (
                  m.content ? (
                    renderContent(m.content)
                  ) : (
                    <span className="chat-typing">…</span>
                  )
                ) : (
                  m.content
                )}
              </div>
            ))}
          </div>

          <form
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={copy.placeholder}
              aria-label={copy.placeholder}
            />
            <button type="submit" disabled={streaming || input.trim() === ''} aria-label={copy.send}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
