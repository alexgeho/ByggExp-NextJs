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
// the "noticeable but unobtrusive, contextual, Boka gratis konsultation" goal.

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

// Norwegian copy for byggexp.no (nb calculators). sv output is unchanged.
const NB_BULLETS = [
  'Prosjektstyring og dagbok',
  'Timeregistrering og lønn',
  'Tilbud og fakturering',
  'Egenkontroller og HMS',
] as const;

const NB_HEADLINES: Record<string, string> = {
  'Egenkontroller ingår i ByggExp': 'Egenkontroller er inkludert i ByggExp',
  'Offert & fakturering i ByggExp': 'Tilbud og fakturering i ByggExp',
  'Tidrapportering & lön i ByggExp': 'Timeregistrering og lønn i ByggExp',
  'Planering & bemanning i ByggExp': 'Planlegging og bemanning i ByggExp',
  'Projektledning & dagbok i ByggExp': 'Prosjektstyring og dagbok i ByggExp',
  'Ekonomi & kalkyl i ByggExp': 'Økonomi og kalkyle i ByggExp',
  'Allt för bygget i ett system': 'Alt for byggeprosjektet i ett system',
};

export default function ProductBanner({ tool, locale = 'sv' }: { tool: string; locale?: string }) {
  const nb = locale === 'nb';
  const svHeadline = productBannerHeadline(tool);
  const headline = nb ? NB_HEADLINES[svHeadline] || svHeadline : svHeadline;
  const bullets: readonly string[] = nb ? NB_BULLETS : BULLETS;
  const cta = nb ? { href: '/nb/contact', label: 'Bestill gratis konsultasjon' } : APP_CTA;
  return (
    <aside className="lm-product-banner" aria-label={nb ? 'ByggExp – bestill konsultasjon' : 'ByggExp – boka demo'}>
      <div className="lm-pb-body">
        <p className="lm-pb-eyebrow">ByggExp</p>
        <h2 className="lm-pb-headline">{headline}</h2>
        <ul className="lm-pb-list">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
      <div className="lm-pb-action">
        <a
          className="lm-pb-button"
          href={cta.href}
          onClick={() => {
            // Dedicated, directly-countable GA4 event (visible in GA4 → Events as
            // "product_banner_click" without needing a custom dimension) + the
            // generic funnel event. Both also forward to Meta Pixel via gaEvent.
            gaEvent('product_banner_click', { tool });
            gaEvent('cta_click', { tool, action: 'demo', placement: 'product_banner' });
          }}
        >
          {cta.label}
        </a>
        <p className="lm-pb-micro">{nb ? 'Deretter 14 dager gratis' : 'Sedan 14 dagar gratis'}</p>
      </div>
    </aside>
  );
}
