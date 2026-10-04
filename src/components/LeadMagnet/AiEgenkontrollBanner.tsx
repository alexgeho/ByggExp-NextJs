import { APP_CTA } from '../../config/cta';
import { gaEvent } from '../../lib/analytics';

// AI egenkontroll banner on the egenkontroll pages (replaces the generic
// ProductBanner there): contract → photos in the app → finished egenkontroll.
// 3D glass images: Recraft, recoloured to #2394FF / #45B36B (see worklog).
const SIGNUP_URL = 'https://admin.byggexp.se/register?plan=egenkontroll';
const IMG = '/landing/egenkontroll-ai';

const FLOW = [
  { img: `${IMG}/avtal.webp`, label: 'Ladda upp avtal' },
  { img: `${IMG}/foto.webp`, label: 'Fota i appen' },
  { img: `${IMG}/klar.webp`, label: 'Egenkontroll klar' },
] as const;

export default function AiEgenkontrollBanner({ tool }: { tool: string }) {
  return (
    <aside className="lm-ai-banner" aria-label="AI-egenkontroll i ByggExp">
      <div>
        <h2 className="lm-ai-headline">Egenkontrollen fyller i sig själv</h2>
        <ol className="lm-ai-flow">
          {FLOW.map((step) => (
            <li key={step.label}>
              <img src={step.img} alt="" width={54} height={54} loading="lazy" />
              {step.label}
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
        </div>
      </div>
      <img
        className="lm-ai-visual"
        src={`${IMG}/egenkontroll-klar.webp`}
        alt="Färdig egenkontroll med godkända punkter och foton"
        width={560}
        height={560}
        loading="lazy"
      />
    </aside>
  );
}
