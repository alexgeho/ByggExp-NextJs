import { APP_CTA } from '../../config/cta';
import { gaEvent } from '../../lib/analytics';

// Contextual product banner shown on every tool/mall page (via LeadMagnetPage).
// The visitor is using a free tool → this points them at the product, with a
// headline matched to the tool's topic so it reads as relevant, not generic.
//
// Layout note: the reading column is `.container-narrow` (max 980px), so a true
// non-overlapping right rail isn't possible without a full layout rewrite (even
// at 1400px viewport a 980px column + 300px rail collide). We therefore render a
// prominent in-flow dark band directly under the intro — horizontal on desktop,
// stacked on mobile — which is the standard non-breaking pattern and satisfies
// the "noticeable but unobtrusive, contextual, Boka demo" goal.

const BULLETS = [
  'Projektledning & dagbok',
  'Tidrapportering & lön',
  'Offert & fakturering',
  'Egenkontroller & KMA',
] as const;

// Map the tool slug (embedSlug) to a contextual headline.
export function productBannerHeadline(slug: string): string {
  const s = (slug || '').toLowerCase();
  if (s.includes('egenkontroll') || s.includes('kvalitet') || s.includes('kma') || s.includes('riskanalys'))
    return 'Egenkontroller ingår i ByggExp';
  if (s.includes('faktura') || s.includes('offert') || s.includes('avtal') || s.includes('kontrakt') || s.includes('entreprenad') || s.includes('anbud'))
    return 'Offert & fakturering i ByggExp';
  if (s.includes('tidrapport') || s.includes('stampelklocka') || s.includes('tidredovisning') || s.includes('restidsersattning') || s.includes('ackord') || s.includes('ob-overtid'))
    return 'Tidrapportering & lön i ByggExp';
  if (s.includes('schema') || s.includes('planering') || s.includes('bemanning') || s.includes('gantt'))
    return 'Planering & bemanning i ByggExp';
  if (s.includes('projekt') || s.includes('dagbok') || s.includes('arbetsberedning') || s.includes('arbetsorder'))
    return 'Projektledning & dagbok i ByggExp';
  if (s.includes('kalkyl') || s.includes('ekonomi') || s.includes('moms') || s.includes('rot') || s.includes('kostnad') || s.includes('timpris') || s.includes('paslag'))
    return 'Ekonomi & kalkyl i ByggExp';
  return 'Allt för bygget i ett system';
}

export default function ProductBanner({ tool }: { tool: string }) {
  const headline = productBannerHeadline(tool);
  return (
    <aside className="lm-product-banner" aria-label="ByggExp – boka demo">
      <div className="lm-pb-body">
        <p className="lm-pb-eyebrow">ByggExp</p>
        <h2 className="lm-pb-headline">{headline}</h2>
        <ul className="lm-pb-list">
          {BULLETS.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
      <div className="lm-pb-action">
        <a
          className="lm-pb-button"
          href={APP_CTA.href}
          onClick={() =>
            gaEvent('cta_click', { tool, action: 'demo', placement: 'product_banner' })
          }
        >
          {APP_CTA.label}
        </a>
        <p className="lm-pb-micro">14 dagar gratis efteråt</p>
      </div>
    </aside>
  );
}
