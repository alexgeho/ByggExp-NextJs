import { APP_CTA } from '../../config/cta';
import { gaEvent } from '../../lib/analytics';

// AI egenkontroll banner on the egenkontroll pages (replaces the generic
// ProductBanner there). Self-serve sign-up on the solo plan, or a demo.
const SIGNUP_URL = 'https://admin.byggexp.se/register?plan=egenkontroll';

const STEPS = [
  { title: 'Ladda upp avtalet', text: 'eller arbetsbeskrivningen – kontrollpunkterna skapas automatiskt.' },
  { title: 'Fota på bygget', text: 'i appen medan arbetet pågår.' },
  { title: 'Klart', text: 'AI bockar av utförda punkter med datum och foto som bevis. Du signerar.' },
] as const;

export default function AiEgenkontrollBanner({ tool }: { tool: string }) {
  return (
    <aside className="lm-ai-banner" aria-label="AI-egenkontroll i ByggExp">
      <p className="lm-ai-eyebrow">
        <span className="lm-ai-pill">Nyhet</span> ByggExp Egenkontroll
      </p>
      <h2 className="lm-ai-headline">Egenkontrollen som fyller i sig själv – från dina foton</h2>
      <ol className="lm-ai-steps">
        {STEPS.map((s, i) => (
          <li key={s.title}>
            <span className="lm-ai-num">{i + 1}</span>
            <span>
              <strong>{s.title}</strong> {s.text}
            </span>
          </li>
        ))}
      </ol>
      <div className="lm-ai-actions">
        <a
          className="lm-ai-primary"
          href={SIGNUP_URL}
          onClick={() => gaEvent('cta_click', { tool, action: 'signup_egenkontroll', placement: 'ai_banner' })}
        >
          Prova gratis
        </a>
        <a
          className="lm-ai-secondary"
          href={APP_CTA.href}
          onClick={() => gaEvent('cta_click', { tool, action: 'demo', placement: 'ai_banner' })}
        >
          {APP_CTA.label}
        </a>
        <span className="lm-ai-micro">49 kr/mån · 14 dagar gratis · ingen bindningstid</span>
      </div>
    </aside>
  );
}
