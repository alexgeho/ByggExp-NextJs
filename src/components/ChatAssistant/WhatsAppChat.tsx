import { useRouter } from 'next/router';
import { useState } from 'react';

import { API_URL } from '../../config/api';
import { gaEvent } from '../../lib/analytics';
import { languages } from '../../locales/languages';

// Chat-style widget that forwards the visitor's message to the owner's WhatsApp.
// No backend, no cost: on send we open wa.me with the message pre-filled, so the
// visitor continues in WhatsApp and the owner answers from their phone.
//
// Set the number in international format WITHOUT + or spaces, e.g. '46701234567'.
// Leave empty to hide the widget entirely.
const WHATSAPP_NUMBER = '46707577575';

type Copy = {
  title: string; sub: string; greeting: string; placeholder: string;
  contact: string; send: string; open: string; done: string;
};
const COPY: Record<string, Copy> = {
  sv: {
    title: 'Chatta med oss',
    sub: 'Svar via WhatsApp',
    greeting: 'Hej! Skriv din fråga här så fortsätter vi i WhatsApp – eller lämna e-post/telefon så hör vi av oss.',
    placeholder: 'Skriv ditt meddelande …',
    contact: 'E-post eller telefon (om du inte har WhatsApp)',
    send: 'Skicka',
    open: 'Öppna chatten',
    done: 'Tack! Vi hör av oss så snart vi kan.',
  },
  nb: {
    title: 'Chat med oss',
    sub: 'Svar via WhatsApp',
    greeting: 'Hei! Skriv spørsmålet ditt her, så fortsetter vi i WhatsApp – eller legg igjen e-post/telefon.',
    placeholder: 'Skriv meldingen din …',
    contact: 'E-post eller telefon (om du ikke har WhatsApp)',
    send: 'Send',
    open: 'Åpne chatten',
    done: 'Takk! Vi hører fra oss snart.',
  },
  en: {
    title: 'Chat with us',
    sub: 'Reply via WhatsApp',
    greeting: 'Hi! Write your question here and we’ll continue on WhatsApp – or leave an email/phone.',
    placeholder: 'Type your message …',
    contact: 'Email or phone (if you don’t use WhatsApp)',
    send: 'Send',
    open: 'Open chat',
    done: 'Thanks! We’ll get back to you shortly.',
  },
  ru: {
    title: 'Написать нам',
    sub: 'Ответ в WhatsApp',
    greeting: 'Здравствуйте! Напишите вопрос — продолжим в WhatsApp, или оставьте email/телефон.',
    placeholder: 'Ваше сообщение …',
    contact: 'Email или телефон (если нет WhatsApp)',
    send: 'Отправить',
    open: 'Открыть чат',
    done: 'Спасибо! Мы скоро свяжемся.',
  },
};

export default function WhatsAppChat() {
  const router = useRouter();
  const langParam = router.query.lang;
  const lang = typeof langParam === 'string' && langParam in languages ? langParam : 'sv';
  const copy = COPY[lang] || COPY.sv;

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [contact, setContact] = useState('');
  const [sent, setSent] = useState(false);

  if (!WHATSAPP_NUMBER) return null;

  const send = () => {
    const text = msg.trim();
    if (!text) return;
    const c = contact.trim();

    // Best-effort: also deliver the message to us by email/lead so visitors who
    // don't use WhatsApp aren't lost. Fire-and-forget — never blocks WhatsApp.
    const isEmail = c.includes('@');
    void fetch(`${API_URL}/mail/demo-request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'f-name': 'Chattbesökare',
        'f-email': isEmail ? c : '',
        'f-phone': isEmail ? '' : c,
        'f-source': 'chat-widget',
        'f-message': text,
      }),
    }).catch(() => {});
    gaEvent('chat_message_sent', { has_contact: c ? 'yes' : 'no' });

    // Open WhatsApp with the message pre-filled for those who have it.
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    );
    setSent(true);
  };

  return (
    <>
      {!open ? (
        <button type="button" className="wa-fab" onClick={() => setOpen(true)} aria-label={copy.open}>
          <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.6 1.4 5.7 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.9.9.9-4.8-.2-.4c-1-1.6-1.5-3.4-1.5-5.3 0-5.6 4.6-10.2 10.2-10.2S26.2 9.4 26.2 15 21.6 24.8 16 24.8zm5.7-7.6c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2c-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z" />
          </svg>
        </button>
      ) : null}

      {open ? (
        <div className="wa-panel" role="dialog" aria-label={copy.title}>
          <div className="wa-header">
            <div>
              <strong>{copy.title}</strong>
              <span className="wa-header-sub">{copy.sub}</span>
            </div>
            <button type="button" className="wa-close" onClick={() => setOpen(false)} aria-label="Stäng">✕</button>
          </div>
          <div className="wa-body">
            <p className="wa-greeting">{sent ? copy.done : copy.greeting}</p>
          </div>
          {!sent ? (
            <form
              className="wa-form"
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
              <input type="text" value={msg} placeholder={copy.placeholder} aria-label={copy.placeholder} onChange={(e) => setMsg(e.target.value)} />
              <input type="text" value={contact} placeholder={copy.contact} aria-label={copy.contact} autoComplete="email" onChange={(e) => setContact(e.target.value)} />
              <button type="submit" className="wa-send" disabled={msg.trim() === ''}>{copy.send}</button>
            </form>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
