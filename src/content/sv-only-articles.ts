// Market-specific blog articles that are published in Swedish only (byggdagbok,
// ROT, ÄTA, ID06, egenkontroll/KMA, AB 04 / AMA AF, lead-magnet templates …).
// For these slugs the article page must NOT emit en/ru hreflang alternates,
// since those locale URLs don't exist and would be hreflang-to-404.
//
// Add a slug here when you publish an sv-only article in the CMS.
export const SV_ONLY_ARTICLE_SLUGS = new Set<string>([
  'byggdagbok',
  'egenkontroll',
  'ata-arbeten',
  'personalliggare',
  'rot-avdrag',
  'id06',
  'bemanning-och-personalplanering',
  'ab-04-och-abt-06',
  'arbetsmiljoplan',
  'attestering',
  'franvaro-i-byggforetag',
  'heta-arbeten',
  'slutbesiktning',
  'timpris-hantverkare',
  'skriva-offert',
  'moms-hantverkare',
  'tidrapportering',
  'fakturera-som-hantverkare',
  'rakna-material-till-bygget',
  'paslag-pa-material',
  'nya-vatrumsregler-2026',
  'e-faktura-obligatorisk-byggforetag',
  'berakna-u-varde-isolering',
]);

export function isSvOnlyArticle(slug: string): boolean {
  return SV_ONLY_ARTICLE_SLUGS.has(slug);
}
