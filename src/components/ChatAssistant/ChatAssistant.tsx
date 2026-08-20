import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react';

import { languages } from '../../locales/languages';

type Msg = { role: 'user' | 'assistant'; content: string };

const COPY: Record<string, {
  title: string;
  subtitle: string;
  placeholder: string;
  greeting: string;
  disclaimer: string;
  open: string;
  send: string;
  error: string;
}> = {
  sv: {
    title: 'Fråga ByggExp',
    subtitle: 'AI-assistent',
    placeholder: 'Ställ en fråga om bygg, ekonomi, regler …',
    greeting: 'Hej! Fråga mig om ROT, ÄTA, kalkyler, regler eller något annat – jag svarar utifrån ByggExp:s artiklar.',
    disclaimer: 'Svar genereras av AI utifrån våra artiklar och kan innehålla fel. Dubbelkolla mot gällande regler.',
    open: 'Öppna AI-assistenten',
    send: 'Skicka',
    error: 'Något gick fel. Försök igen om en stund.',
  },
  nb: {
    title: 'Spør ByggExp',
    subtitle: 'AI-assistent',
    placeholder: 'Still et spørsmål om bygg, økonomi, regler …',
    greeting: 'Hei! Spør meg om kalkyler, regler eller noe annet – jeg svarer ut fra ByggExp sine artikler.',
    disclaimer: 'Svar genereres av AI ut fra artiklene våre og kan inneholde feil. Dobbeltsjekk mot gjeldende regler.',
    open: 'Åpne AI-assistenten',
    send: 'Send',
    error: 'Noe gikk galt. Prøv igjen om litt.',
  },
  en: {
    title: 'Ask ByggExp',
    subtitle: 'AI assistant',
    placeholder: 'Ask about construction, finance, rules …',
    greeting: 'Hi! Ask me anything — I answer based on ByggExp’s articles.',
    disclaimer: 'Answers are AI-generated from our articles and may be wrong. Verify against current rules.',
    open: 'Open the AI assistant',
    send: 'Send',
    error: 'Something went wrong. Please try again shortly.',
  },
  ru: {
    title: 'Спросить ByggExp',
    subtitle: 'AI-ассистент',
    placeholder: 'Задайте вопрос о стройке, финансах, правилах …',
    greeting: 'Привет! Спрашивайте — я отвечаю на основе статей ByggExp.',
    disclaimer: 'Ответы генерируются ИИ на основе наших статей и могут содержать ошибки. Проверяйте по актуальным правилам.',
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
  const lines = text.split('\n');
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
      // eslint-disable-next-line no-constant-condition
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
      {!open ? (
        <button
          type="button"
          className="chat-fab"
          onClick={() => setOpen(true)}
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
            <div>
              <strong>{copy.title}</strong>
              <span className="chat-header-sub">{copy.subtitle}</span>
            </div>
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
            <button type="submit" disabled={streaming || input.trim() === ''}>
              {copy.send}
            </button>
          </form>
          <p className="chat-disclaimer">{copy.disclaimer}</p>
        </div>
      ) : null}
    </>
  );
}
