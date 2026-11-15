// Short list of feature pages for site-wide link blocks: the footer row (R21)
// and the block on /sv/verktyg (R22). Kept in its own small module so the
// footer does not pull the long page texts of funktion-pages*.ts into every
// page bundle. `name` must equal the page's `name` in the page data —
// funktion-pages.ts and funksjon-pages-nb.ts check that at build time.

export type FunktionLink = { slug: string; name: string };

export const FUNKTION_LINKS_SV: FunktionLink[] = [
  { slug: 'tidrapporteringssystem-bygg', name: 'Tidrapporteringssystem för bygg' },
  { slug: 'projekthantering', name: 'Projekthantering för bygg' },
  { slug: 'schemalaggning', name: 'Schemaläggningssystem för bygg' },
  { slug: 'offert-kalkyl', name: 'Kalkylprogram för bygg' },
  { slug: 'fakturering', name: 'Fakturaprogram för bygg' },
  { slug: 'lon', name: 'Löneunderlag för bygg' },
  { slug: 'byggdagbok', name: 'Digital byggdagbok' },
  { slug: 'egenkontroll', name: 'Egenkontroll för bygg' },
];

export const FUNKSJON_LINKS_NB: FunktionLink[] = [
  { slug: 'timeregistrering-app', name: 'Timeregistreringsapp' },
  { slug: 'prosjektstyringsverktoy', name: 'Prosjektstyringsverktøy' },
  { slug: 'bemanningsplan', name: 'Bemanningsplan' },
  { slug: 'tilbudsprogram', name: 'Tilbudsprogram' },
  { slug: 'ks-system', name: 'KS-system' },
  { slug: 'hms-system', name: 'HMS-system' },
];

/** Build-time guard: every link must point to an existing page with the same name. */
export function assertFunktionLinks(links: FunktionLink[], pages: { slug: string; name: string }[]): void {
  links.forEach((link) => {
    const page = pages.find((p) => p.slug === link.slug);
    if (!page || page.name !== link.name) {
      throw new Error(`funktion-links.ts: "${link.slug}" / "${link.name}" does not match the page data`);
    }
  });
}
