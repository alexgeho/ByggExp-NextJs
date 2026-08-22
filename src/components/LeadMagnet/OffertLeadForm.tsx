import { type FormEvent, useState } from 'react';

import { API_URL } from '../../config/api';
import { gaEvent } from '../../lib/analytics';

// B2C offert-request form: a homeowner describes a project and we capture the
// lead (routed/sold to construction firms). Posts to the same lead endpoint as
// the other forms, with f-source='offert-b2c' + a structured message so leads
// are easy to route. Locale-aware (sv/nb). `source` lets callers tag which page
// the lead came from (e.g. rot-avdrag, attefallshus).
type Locale = 'sv' | 'nb';

const COPY = {
  sv: {
    projectLabel: 'Vad ska göras?',
    projects: ['Renovering kök', 'Renovering badrum', 'Tillbyggnad / attefallshus', 'Altan / trädäck', 'Staket', 'Tak', 'El / VVS', 'Annat byggarbete'],
    placeArea: 'Ort eller postnummer',
    desc: 'Beskriv kort vad du vill ha gjort',
    timing: 'När vill du börja?',
    timings: ['Så snart som möjligt', 'Inom 1–3 månader', 'Om 3–6 månader', 'Vet inte än'],
    name: 'Namn', email: 'E-post', phone: 'Telefon',
    submit: 'Få 3 offerter – gratis',
    sending: 'Skickar…',
    doneTitle: 'Tack! Vi förmedlar din förfrågan.',
    doneText: 'Byggföretag hör av sig med offert. Det är kostnadsfritt och du väljer själv om du vill gå vidare.',
    error: 'Något gick fel – försök igen eller mejla info@byggexp.se.',
    fine: 'Din förfrågan förmedlas till byggföretag som kan utföra jobbet. Kostnadsfritt och utan förpliktelser.',
  },
  nb: {
    projectLabel: 'Hva skal gjøres?',
    projects: ['Renovering kjøkken', 'Renovering bad', 'Tilbygg', 'Terrasse', 'Gjerde', 'Tak', 'Elektro / VVS', 'Annet byggearbeid'],
    placeArea: 'Sted eller postnummer',
    desc: 'Beskriv kort hva du vil ha gjort',
    timing: 'Når vil du starte?',
    timings: ['Så snart som mulig', 'Innen 1–3 måneder', 'Om 3–6 måneder', 'Vet ikke ennå'],
    name: 'Navn', email: 'E-post', phone: 'Telefon',
    submit: 'Få 3 tilbud – gratis',
    sending: 'Sender…',
    doneTitle: 'Takk! Vi formidler forespørselen din.',
    doneText: 'Byggefirmaer tar kontakt med tilbud. Det er gratis, og du velger selv om du vil gå videre.',
    error: 'Noe gikk galt – prøv igjen eller send e-post til info@byggexp.se.',
    fine: 'Forespørselen din formidles til byggefirmaer som kan utføre jobben. Gratis og uforpliktende.',
  },
} as const;

export default function OffertLeadForm({
  lang = 'sv',
  source = 'offert',
}: {
  lang?: Locale;
  source?: string;
}) {
  const t = COPY[lang] || COPY.sv;
  const [project, setProject] = useState('');
  const [area, setArea] = useState('');
  const [desc, setDesc] = useState('');
  const [timing, setTiming] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !phone.trim() || !project) return;
    setStatus('sending');
    const message = [
      `Projekt: ${project}`,
      area.trim() && `Ort: ${area.trim()}`,
      timing && `Start: ${timing}`,
      desc.trim() && `Beskrivning: ${desc.trim()}`,
    ].filter(Boolean).join(' · ');
    try {
      const res = await fetch(`${API_URL}/mail/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'f-name': name.trim(),
          'f-email': email.trim(),
          'f-phone': phone.trim(),
          'f-source': `offert-b2c:${source}`,
          'f-message': message,
        }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('done');
      gaEvent('offert_lead_submit', { source, project });
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="lm-tool lm-leadform">
        <h2 className="lm-tool-title">{t.doneTitle}</h2>
        <p className="lm-tool-sub">{t.doneText}</p>
      </div>
    );
  }

  return (
    <div className="lm-tool lm-leadform">
      <form onSubmit={handleSubmit}>
        <div className="lm-tool-grid">
          <label className="lm-tool-field">
            <span>{t.projectLabel}</span>
            <select value={project} onChange={(e) => setProject(e.currentTarget.value)} required>
              <option value="" disabled>—</option>
              {t.projects.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </label>
          <label className="lm-tool-field">
            <span>{t.placeArea}</span>
            <input value={area} onChange={(e) => setArea(e.currentTarget.value)} autoComplete="postal-code" />
          </label>
          <label className="lm-tool-field">
            <span>{t.timing}</span>
            <select value={timing} onChange={(e) => setTiming(e.currentTarget.value)}>
              <option value="">—</option>
              {t.timings.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </label>
        </div>

        <label className="lm-tool-field" style={{ marginTop: 12, display: 'block' }}>
          <span>{t.desc}</span>
          <textarea value={desc} onChange={(e) => setDesc(e.currentTarget.value)} rows={3} style={{ width: '100%' }} />
        </label>

        <div className="lm-tool-grid" style={{ marginTop: 12 }}>
          <label className="lm-tool-field">
            <span>{t.name}</span>
            <input value={name} onChange={(e) => setName(e.currentTarget.value)} autoComplete="name" required />
          </label>
          <label className="lm-tool-field">
            <span>{t.email}</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} autoComplete="email" />
          </label>
          <label className="lm-tool-field">
            <span>{t.phone}</span>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.currentTarget.value)} autoComplete="tel" required />
          </label>
        </div>

        <div className="lm-tool-actions" style={{ marginTop: 14 }}>
          <button type="submit" className="lm-tool-button" disabled={status === 'sending'}>
            {status === 'sending' ? t.sending : t.submit}
          </button>
          {status === 'error' ? (
            <span className="lm-result-fine" style={{ color: '#d64545' }}>{t.error}</span>
          ) : null}
        </div>
        <p className="lm-result-fine" style={{ marginTop: 10 }}>{t.fine}</p>
      </form>
    </div>
  );
}
