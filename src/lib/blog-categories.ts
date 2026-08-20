// Blog categories. The ~40 raw article tags collapse into a small set of
// top-level categories used for the blog filter bar and the generated cover
// cards (keep this mapping in sync with scripts/gen-blog-covers.js). Labels are
// Swedish since the code-published articles are the Swedish market's.

export type BlogCategoryKey =
  | 'ekonomi'
  | 'kalkyl'
  | 'arbetsmiljo'
  | 'juridik'
  | 'regelverk'
  | 'personal'
  | 'kvalitet'
  | 'tillvaxt';

export type BlogCategory = {
  key: BlogCategoryKey;
  label: string;
  color: string;
};

// Fixed display order for the filter bar.
export const BLOG_CATEGORIES: BlogCategory[] = [
  { key: 'ekonomi', label: 'Ekonomi & skatt', color: '#1f9d6b' },
  { key: 'kalkyl', label: 'Kalkyl & material', color: '#2563c9' },
  { key: 'juridik', label: 'Juridik & avtal', color: '#5a52d9' },
  { key: 'arbetsmiljo', label: 'Arbetsmiljö', color: '#e08512' },
  { key: 'regelverk', label: 'Regelverk', color: '#8a3afd' },
  { key: 'personal', label: 'Personal & lön', color: '#c8447a' },
  { key: 'kvalitet', label: 'Kvalitet & projekt', color: '#0e9bb0' },
  { key: 'tillvaxt', label: 'Marknad & tillväxt', color: '#d09a1a' },
];

const BY_KEY = new Map(BLOG_CATEGORIES.map((c) => [c.key, c]));

export function blogCategory(key: BlogCategoryKey): BlogCategory {
  return BY_KEY.get(key) as BlogCategory;
}

// Map a raw article tag to its top-level category. Falls back to 'kvalitet'
// (egenkontroll, dokumentation, projektledning, byggdagbok, tidrapport …).
export function categoryForTag(tag: string | null | undefined): BlogCategoryKey {
  const t = (tag || '').toLowerCase();
  if (/(ekonomi|skatt|rot|avdrag|företagande|likvid|moms|faktur)/.test(t)) return 'ekonomi';
  if (/(kalkyl|beräkn|material)/.test(t)) return 'kalkyl';
  if (/(arbetsmilj)/.test(t)) return 'arbetsmiljo';
  if (/(juridik|entreprenad|avtal|äta|besiktning|tvist)/.test(t)) return 'juridik';
  if (/(regel|bygglov|id06|personalliggare|behörighet|kompetens)/.test(t)) return 'regelverk';
  if (/(personal|anställ|lön|arbetsrätt|bemanning|arbetsgivare)/.test(t)) return 'personal';
  if (/(marknad|seo|digitali)/.test(t)) return 'tillvaxt';
  return 'kvalitet';
}
