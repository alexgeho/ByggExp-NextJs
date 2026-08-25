import { type FormEvent, useState } from 'react';

import { API_URL } from '../../config/api';
import { gaEvent } from '../../lib/analytics';
import type { CalcLocale } from '../../lib/locale';

// Contextual lead form shown under a calculator: the visitor can ask ByggExp to
// help take the calculation further (offert, material, next steps). Only the
// contact field (e-post OR phone in one cell) is required; name and message are
// optional. Posts to the same demo-request endpoint the contact form uses;
// `tool` and the message ride along so sales sees which calculator the lead came
// from. Bilingual: sv default, en for /en/verktyg; nb falls back to sv text.
export default function ToolLeadForm({
  tool,
  summary,
  locale = 'sv',
}: {
  tool: string;
  summary?: string;
  locale?: CalcLocale | 'ru';
}) {
  const en = locale === 'en';
  const ru = locale === 'ru';
  const t = ru
    ? {
        heading: 'Нужна помощь дальше?',
        sub: 'Коротко опишите, что нужно, и мы поможем со сметой, материалом и следующими шагами — бесплатно. Обязательно только поле контакта.',
        message: 'Сообщение',
        messagePh: 'Коротко опишите проект или вопрос …',
        contact: 'E-mail или телефон',
        contactPh: 'имя@пример.se или +46…',
        name: 'Имя',
        send: 'Отправить',
        sending: 'Отправка…',
        error: 'Что-то пошло не так — попробуйте снова или напишите info@byggexp.se.',
        privacy: 'Мы используем ваши данные только чтобы связаться с вами по вашему запросу.',
        thanks: 'Спасибо! Мы свяжемся с вами.',
        thanksSub: 'Мы ответим по e-mail или телефону и поможем продолжить расчёт.',
      }
    : en
    ? {
        heading: 'Want help taking this further?',
        sub: 'Briefly describe what you need and we’ll help you with a quote, material and next steps – free of charge. Only the contact field is required.',
        message: 'Message',
        messagePh: 'Briefly describe your project or question …',
        contact: 'Email or phone',
        contactPh: 'name@example.com or +46…',
        name: 'Name',
        send: 'Send',
        sending: 'Sending…',
        error: 'Something went wrong – try again or email info@byggexp.se.',
        privacy: 'We only use your details to contact you about your enquiry.',
        thanks: 'Thanks! We’ll be in touch.',
        thanksSub: 'We’ll get back to you by email or phone and help you take your calculation further.',
      }
    : {
        heading: 'Vill du ha hjälp vidare?',
        sub: 'Beskriv kort vad du behöver så hjälper vi dig med offert, material och nästa steg – utan kostnad. Bara kontaktfältet är obligatoriskt.',
        message: 'Meddelande',
        messagePh: 'Beskriv kort ditt projekt eller din fråga …',
        contact: 'E-post eller telefon',
        contactPh: 'namn@exempel.se eller 070…',
        name: 'Namn',
        send: 'Skicka',
        sending: 'Skickar…',
        error: 'Något gick fel – försök igen eller mejla info@byggexp.se.',
        privacy: 'Vi använder uppgifterna endast för att kontakta dig om din förfrågan.',
        thanks: 'Tack! Vi hör av oss.',
        thanksSub: 'Vi återkommer på e-post eller telefon och hjälper dig vidare med din beräkning.',
      };

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState(''); // e-post eller telefon
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const c = contact.trim();
    if (!c) return;
    const isEmail = c.includes('@');
    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/mail/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'f-name': name.trim(),
          'f-email': isEmail ? c : '',
          'f-phone': isEmail ? '' : c,
          'f-source': `verktyg:${tool}`,
          'f-message': [message.trim(), summary].filter(Boolean).join(' — '),
        }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('done');
      gaEvent('tool_lead_submit', { tool });
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="lm-tool lm-leadform">
        <h2 className="lm-tool-title">{t.thanks}</h2>
        <p className="lm-tool-sub">{t.thanksSub}</p>
      </div>
    );
  }

  return (
    <div className="lm-tool lm-leadform">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">{t.heading}</h2>
        <p className="lm-tool-sub">{t.sub}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="lm-tool-field" style={{ display: 'block', margin: '16px 0' }}>
          <span>{t.message}</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            rows={3}
            placeholder={t.messagePh}
            style={{ width: '100%' }}
          />
        </label>

        <div className="lm-tool-grid">
          <label className="lm-tool-field">
            <span>{t.contact} <span className="lm-req">*</span></span>
            <input value={contact} onChange={(e) => setContact(e.currentTarget.value)} placeholder={t.contactPh} autoComplete="email" required />
          </label>
          <label className="lm-tool-field">
            <span>{t.name}</span>
            <input value={name} onChange={(e) => setName(e.currentTarget.value)} autoComplete="name" />
          </label>
        </div>

        <div className="lm-tool-actions" style={{ marginTop: 14 }}>
          <button type="submit" className="lm-tool-button" disabled={status === 'sending' || !contact.trim()}>
            {status === 'sending' ? t.sending : t.send}
          </button>
          {status === 'error' ? (
            <span className="lm-result-fine" style={{ color: '#d64545' }}>
              {t.error}
            </span>
          ) : null}
        </div>
        <p className="lm-result-fine" style={{ marginTop: 10 }}>
          {t.privacy}
        </p>
      </form>
    </div>
  );
}
