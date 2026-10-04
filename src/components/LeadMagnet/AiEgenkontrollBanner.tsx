import { APP_CTA } from '../../config/cta';
import { gaEvent } from '../../lib/analytics';

// AI egenkontroll banner on the egenkontroll pages (replaces the generic
// ProductBanner there). Self-serve sign-up on the solo plan, or a demo.
const SIGNUP_URL = 'https://admin.byggexp.se/register?plan=egenkontroll';


// How it works, in three icons: contract → photos in the app → done.
const ICON = {
  doc: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6',
  camera: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  check: 'M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4 12 14l-3-3',
} as const;

const FLOW = [
  { icon: ICON.doc, label: 'Ladda upp avtal' },
  { icon: ICON.camera, label: 'Fota i appen' },
  { icon: ICON.check, label: 'Egenkontroll klar' },
] as const;

export default function AiEgenkontrollBanner({ tool }: { tool: string }) {
  return (
    <aside className="lm-ai-banner" aria-label="AI-egenkontroll i ByggExp">
      <div>
        <h2 className="lm-ai-headline">Egenkontrollen fyller i sig själv</h2>
        <ol className="lm-ai-flow">
          {FLOW.map((step) => (
            <li key={step.label}>
              <span className="lm-ai-flow__icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={step.icon} />
                </svg>
              </span>
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
    </aside>
  );
}
