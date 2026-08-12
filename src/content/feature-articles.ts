// The blog articles that document a product feature ("Funktioner"). These are
// treated as a distinct content type from ordinary blog posts — in the content
// admin they get their own filter, and on the public site they render the
// custom feature hero / body mockups.
//
// Keep this list in sync as feature articles are added.
export const FEATURE_ARTICLE_SLUGS = new Set<string>([
  'skapa-offert-i-byggexp',
  'fakturera-fran-byggexp',
  'loneunderlag-for-byggforetag',
  'projektekonomi-och-lonsamhet',
  'automatisk-tidrapportering-och-export',
  'narvaro-och-incheckning-pa-bygget',
  'hantera-uppgifter-i-byggprojekt',
  'paminnelser-uppgifter-och-deadlines',
  'dagsplanering-och-planeringsmoten',
  'dokumentera-med-foton-pa-bygget',
  'fota-kvitton-och-hantera-utlagg',
  'hantera-verktyg-och-utrustning',
]);

export function isFeatureArticle(slug: string): boolean {
  return FEATURE_ARTICLE_SLUGS.has(slug);
}
