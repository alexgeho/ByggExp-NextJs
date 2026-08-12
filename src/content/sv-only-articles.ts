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
]);

export function isSvOnlyArticle(slug: string): boolean {
  return SV_ONLY_ARTICLE_SLUGS.has(slug);
}
