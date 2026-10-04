import { type FormEvent, useState } from 'react';

import { API_URL } from '../../config/api';
import { gaEvent } from '../../lib/analytics';

// "Kommer snart" teaser for AI-driven egenkontroll (upload contract / work
// description → photos from site → checkpoints ticked off with dates). The
// feature is NOT built yet, so the banner only collects early-access signups:
// one contact field, posted to the demo-request endpoint with its own source so
// sales can count interest before we build it.
const STEPS = [
  { n: '1', title: 'Ladda upp avtalet', text: 'eller arbetsbeskrivningen – kontrollpunkterna skapas automatiskt.' },
  { n: '2', title: 'Fota på bygget', text: 'som vanligt i appen, medan arbetet pågår.' },
  { n: '3', title: 'Klart', text: 'AI bockar av utförda punkter, sätter datum och bifogar fotot som bevis.' },
] as const;

export default function AiEgenkontrollBanner({ tool }: { tool: string }) {
  const [contact, setContact] = useState('');
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
          'f-name': '',
          'f-email': isEmail ? c : '',
          'f-phone': isEmail ? '' : c,
          'f-source': `verktyg:${tool}:ai-egenkontroll-waitlist`,
          'f-message': 'Vill ha tidig tillgång till AI-egenkontroll (foto + avtal).',
        }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('done');
      gaEvent('ai_egenkontroll_waitlist', { tool });
    } catch {
      setStatus('error');
    }
  }

  return (
    <aside className="lm-ai-banner" aria-label="AI-egenkontroll i ByggExp – kommer snart">
      <p className="lm-ai-eyebrow">
        <span className="lm-ai-pill">Nyhet</span> Kommer snart i ByggExp-appen
      </p>
      <h2 className="lm-ai-headline">Egenkontrollen som fyller i sig själv – från dina foton</h2>
      <ol className="lm-ai-steps">
        {STEPS.map((s) => (
          <li key={s.n}>
            <span className="lm-ai-num">{s.n}</span>
            <span>
              <strong>{s.title}</strong> {s.text}
            </span>
          </li>
        ))}
      </ol>

      {status === 'done' ? (
        <p className="lm-ai-thanks">Tack! Du står på listan – vi hör av oss när funktionen är klar.</p>
      ) : (
        <form className="lm-ai-form" onSubmit={handleSubmit}>
          <input
            value={contact}
            onChange={(e) => setContact(e.currentTarget.value)}
            placeholder="E-post eller telefon"
            aria-label="E-post eller telefon"
            autoComplete="email"
            required
          />
          <button type="submit" disabled={status === 'sending' || !contact.trim()}>
            {status === 'sending' ? 'Skickar…' : 'Få tidig tillgång'}
          </button>
        </form>
      )}
      {status === 'error' ? (
        <p className="lm-ai-micro lm-ai-error">Något gick fel – försök igen eller mejla info@byggexp.se.</p>
      ) : status !== 'done' ? (
        <p className="lm-ai-micro">Gratis att testa först. Vi använder uppgiften bara för att meddela dig.</p>
      ) : null}
    </aside>
  );
}
