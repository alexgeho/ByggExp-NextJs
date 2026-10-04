import { APP_CTA } from '../../config/cta';
import { gaEvent } from '../../lib/analytics';

// AI egenkontroll banner on the egenkontroll pages (replaces the generic
// ProductBanner there), told as an equation:
//   contract + (the app + photos from site) = finished egenkontroll.
// Photos: Recraft (realistic, background removed); app = real screenshot.
// Product not public yet: visitors book a consultation (no self-serve signup).
const IMG = '/landing/egenkontroll-ai';

export default function AiEgenkontrollBanner({ tool }: { tool: string }) {
  return (
    <aside className="lm-ai-banner" aria-label="AI-egenkontroll i ByggExp">
      <div className="lm-ai-eq">
        <figure className="lm-ai-eq__item">
          <img src={`${IMG}/avtal-foto.webp`} alt="Entreprenadavtal" width={420} height={402} loading="lazy" />
          <figcaption><span className="lm-ai-eq__n">1</span>Ladda upp avtal</figcaption>
        </figure>
        <span className="lm-ai-eq__op">+</span>
        <figure className="lm-ai-eq__item lm-ai-eq__app">
          <span className="lm-ai-eq__phone">
            <img src={`${IMG}/app-egenkontroll.webp`} alt="Egenkontroll i ByggExp-appen" width={300} height={650} loading="lazy" />
          </span>
          <img className="lm-ai-eq__photo lm-ai-eq__photo--1" src={`${IMG}/foto-objekt-1.webp`} alt="" width={240} height={240} loading="lazy" />
          <img className="lm-ai-eq__photo lm-ai-eq__photo--2" src={`${IMG}/foto-objekt-2.webp`} alt="" width={240} height={240} loading="lazy" />
          <figcaption><span className="lm-ai-eq__n">2</span>Fota utfört arbete</figcaption>
        </figure>
        <span className="lm-ai-eq__op">=</span>
        <figure className="lm-ai-eq__item">
          <img src={`${IMG}/egenkontroll-foto.webp`} alt="Färdig egenkontroll" width={316} height={420} loading="lazy" />
          <figcaption><span className="lm-ai-eq__n">3</span>Färdig egenkontroll</figcaption>
        </figure>
      </div>

      <p className="lm-ai-how">
        AI läser avtalet och gör kontrollpunkter av arbetet. När du fotar känner den igen vad
        som är gjort och bockar av punkten med datum och foto som bevis.
      </p>

      <div className="lm-ai-actions">
        <a
          className="lm-ai-primary"
          href={`${APP_CTA.href}?amne=egenkontroll`}
          onClick={() => {
            // Dedicated, directly countable GA4 event (+ Meta Pixel via gaEvent).
            gaEvent('egenkontroll_boka_demo', { tool });
            gaEvent('cta_click', { tool, action: 'demo_egenkontroll', placement: 'ai_banner' });
          }}
        >
          {APP_CTA.label}
        </a>
      </div>
    </aside>
  );
}
