import { APP_CTA } from '../../config/cta';
import { gaEvent } from '../../lib/analytics';

// AI egenkontroll banner on the egenkontroll pages (replaces the generic
// ProductBanner there). Self-serve sign-up on the solo plan, or a demo.
const SIGNUP_URL = 'https://admin.byggexp.se/register?plan=egenkontroll';

// Mini preview of a filled-in egenkontroll (pure CSS, no images).
const PREVIEW = [
  { text: 'Tätskikt enligt GVK', done: true },
  { text: 'Golvbrunn monterad', done: true },
  { text: 'Fall mot brunn', done: false },
] as const;

export default function AiEgenkontrollBanner({ tool }: { tool: string }) {
  return (
    <aside className="lm-ai-banner" aria-label="AI-egenkontroll i ByggExp">
      <div className="lm-ai-copy">
        <span className="lm-ai-pill">Nyhet</span>
        <h2 className="lm-ai-headline">Egenkontrollen som fyller i sig själv</h2>
        <p className="lm-ai-text">Ladda upp avtalet, fota – AI bockar av.</p>
        <div className="lm-ai-actions">
          <a
            className="lm-ai-primary"
            href={SIGNUP_URL}
            onClick={() => gaEvent('cta_click', { tool, action: 'signup_egenkontroll', placement: 'ai_banner' })}
          >
            Prova gratis – 49 kr/mån
          </a>
          <a
            className="lm-ai-secondary"
            href={APP_CTA.href}
            onClick={() => gaEvent('cta_click', { tool, action: 'demo', placement: 'ai_banner' })}
          >
            {APP_CTA.label}
          </a>
        </div>
      </div>

      <div className="lm-ai-preview" aria-hidden="true">
        {PREVIEW.map((row) => (
          <div key={row.text} className={`lm-ai-row${row.done ? ' is-done' : ''}`}>
            <span className="lm-ai-check">{row.done ? '✓' : ''}</span>
            <span className="lm-ai-row__text">{row.text}</span>
            {row.done ? <span className="lm-ai-photo" /> : null}
          </div>
        ))}
      </div>
    </aside>
  );
}
