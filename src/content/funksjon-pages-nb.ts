// Norwegian (nb) commercial feature pages for byggexp.no, /nb/funksjoner/<slug>.
// Rendered by src/pages/[lang]/funksjoner/[slug].tsx with the same template as
// /sv/funktioner/<slug> (components/FunktionPage/FunktionPageView.tsx).
//
// Keywords: docs/seo/keywords-norway-funksjoner-2026-11.md (Keyword Planner, NO).
// Claims ONLY from docs/seo/product-facts-verified.md incl. the section
// "Verified for NO feature pages (2026-11-01)" (code-checked file:line).
// Never on these pages: Swedish-only things (ROT, AGI, SIE4, Fortnox/Visma,
// Skatteverket, ID06, traktamente, personalliggare, omvänd byggmoms), any
// Norwegian integration (none exist), mannskapsliste/HMS-kort reader (not
// shipped), offline mode, digital signing of offers, competitor names.
// Prices: same numbers as Pricing.tsx, in NOK (owner 2026-11-01).
//
// Regulation links (all opened and checked 2026-11-01):
// - Arbeidsmiljøloven kap. 10 (§ 10-7 oversikt over arbeidstid, § 10-6 overtid):
//   https://lovdata.no/lov/2005-06-17-62
// - Internkontrollforskriften § 5 (systematisk HMS-arbeid, skriftlig dokumentasjon):
//   https://lovdata.no/forskrift/1996-12-06-1127
// - SAK10 § 10-1 (kvalitetssikringsrutiner, bokstav d: identifisere, behandle og
//   lukke avvik) og § 12-4 (ansvarlig utførende: utførelsen kvalitetssikret):
//   https://lovdata.no/forskrift/2010-03-26-488
// - TEK17 (tekniske krav som egenkontrollen dokumenterer):
//   https://lovdata.no/forskrift/2017-06-19-840

import { PROJEKT_PRICE } from '../components/Pricing/Pricing';
import { localeOrigin } from '../lib/seo';
import { ext, illu, labelTables, type FunktionPage } from './funktion-pages';

const KOMPLETT_PRICE = 990;
const EXTRA_USER_PRICE = 69;

const LOV_AML = 'https://lovdata.no/lov/2005-06-17-62';
const LOV_IK = 'https://lovdata.no/forskrift/1996-12-06-1127';
const LOV_SAK10 = 'https://lovdata.no/forskrift/2010-03-26-488';

export type FunksjonPageNb = FunktionPage & {
  /** sv feature page with the same intent → reciprocal hreflang sv ↔ nb. */
  svPair?: string;
};

// Wave 3 (2026-11-01). Skipped, see docs/TASKS.md: hms-system (no avvik module
// with saksgang/risk analysis in the product) and tilbudsprogram (offer and
// invoice PDFs are Swedish-only, invoice PDF prints SEK/Bankgiro).
const PAGES: FunksjonPageNb[] = [];

export const FUNKSJON_PAGES_NB: FunksjonPageNb[] = PAGES.map((page) => ({
  ...page,
  body: labelTables(page.body),
}));

export const FUNKSJON_PAGE_SLUGS_NB = FUNKSJON_PAGES_NB.map((p) => p.slug);

export function getFunksjonPageNb(slug: string): FunksjonPageNb | undefined {
  return FUNKSJON_PAGES_NB.find((p) => p.slug === slug);
}

/** hreflang alternates (incl. self) for a feature page, sv ↔ nb pairs only. */
export function funksjonHreflang(
  lang: string,
  slug: string,
): { hrefLang: string; href: string }[] {
  const nb =
    lang === 'nb'
      ? getFunksjonPageNb(slug)
      : FUNKSJON_PAGES_NB.find((p) => p.svPair === slug);
  if (!nb?.svPair) return [];
  return [
    { hrefLang: 'sv', href: `${localeOrigin('sv')}/sv/funktioner/${nb.svPair}` },
    { hrefLang: 'nb', href: `${localeOrigin('nb')}/nb/funksjoner/${nb.slug}` },
  ];
}
