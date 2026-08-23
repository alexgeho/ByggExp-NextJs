import { type FormEvent, useState } from 'react';

import { API_URL } from '../../config/api';
import { gaEvent } from '../../lib/analytics';

// Contextual lead form shown under a calculator: the visitor can ask ByggExp to
// help take the calculation further (offert, material, next steps). Only e-post
// is required; name, phone and message are optional. Posts to the same
// demo-request endpoint the contact form uses; `tool` and the message ride along
// so sales sees which calculator the lead came from.
export default function ToolLeadForm({
  tool,
  summary,
}: {
  tool: string;
  summary?: string;
}) {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/mail/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'f-name': name.trim(),
          'f-email': email.trim(),
          'f-phone': phone.trim(),
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
        <h2 className="lm-tool-title">Tack! Vi hör av oss.</h2>
        <p className="lm-tool-sub">
          Vi återkommer på e-post eller telefon och hjälper dig vidare med din
          beräkning.
        </p>
      </div>
    );
  }

  return (
    <div className="lm-tool lm-leadform">
      <div className="lm-tool-head">
        <h2 className="lm-tool-title">Vill du ha hjälp vidare?</h2>
        <p className="lm-tool-sub">
          Beskriv kort vad du behöver så hjälper vi dig med offert, material och
          nästa steg – utan kostnad. Bara e-post är obligatoriskt.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="lm-tool-field" style={{ display: 'block', marginBottom: 12 }}>
          <span>Meddelande</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            rows={3}
            placeholder="Beskriv kort ditt projekt eller din fråga …"
            style={{ width: '100%' }}
          />
        </label>

        <div className="lm-tool-grid">
          <label className="lm-tool-field">
            <span>E-post <span className="lm-req">*</span></span>
            <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} autoComplete="email" required />
          </label>
          <label className="lm-tool-field">
            <span>Telefon</span>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.currentTarget.value)} autoComplete="tel" />
          </label>
          <label className="lm-tool-field">
            <span>Namn</span>
            <input value={name} onChange={(e) => setName(e.currentTarget.value)} autoComplete="name" />
          </label>
        </div>

        <div className="lm-tool-actions" style={{ marginTop: 14 }}>
          <button type="submit" className="lm-tool-button" disabled={status === 'sending' || !email.trim()}>
            {status === 'sending' ? 'Skickar…' : 'Skicka'}
          </button>
          {status === 'error' ? (
            <span className="lm-result-fine" style={{ color: '#d64545' }}>
              Något gick fel – försök igen eller mejla info@byggexp.se.
            </span>
          ) : null}
        </div>
        <p className="lm-result-fine" style={{ marginTop: 10 }}>
          Vi använder uppgifterna endast för att kontakta dig om din förfrågan.
        </p>
      </form>
    </div>
  );
}
