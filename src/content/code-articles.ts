import type { BlogLocale, BlogPost } from '../types/blog';
import { GENERATED_BLOG_COVER_SLUGS } from './generated-blog-covers';
import { PHOTO_COVER_SLUGS } from './photo-covers';
import { SITE_URL } from './articles/site-url';

// Real, indexable SEO articles served from code (not the CMS). Used for
// Swedish-market articles we publish without the CMS. Unlike blog-mock.ts
// (noIndex demo content shown only when the CMS is empty), these are always
// live, indexable, listed in /blog and included in the sitemap.
//
// The articles themselves live in ./articles/<cluster>.ts, split by topic so no
// single file is enormous. Add a new article to the matching cluster file; the
// order in the blog listing is derived from publishedAt (newest first), so there
// is no manual ordering to maintain here.
import { EKONOMI_ARTICLES } from './articles/ekonomi';
import { KALKYL_ARTICLES } from './articles/kalkyl';
import { ARBETSMILJO_ARTICLES } from './articles/arbetsmiljo';
import { JURIDIK_ARTICLES } from './articles/juridik';
import { REGELVERK_ARTICLES } from './articles/regelverk';
import { PERSONAL_ARTICLES } from './articles/personal';
import { KVALITET_ARTICLES } from './articles/kvalitet';
import { TILLVAXT_ARTICLES } from './articles/tillvaxt';
import { FEATURE_ARTICLES } from './articles/features';
import { FEATURE_ARTICLES_EN } from './articles/features-en';
import { FEATURE_ARTICLES_PL } from './articles/features-pl';
import { FEATURE_ARTICLES_RU } from './articles/features-ru';
import { FEATURE_ARTICLES_NB } from './articles/features-nb';
import { NB_ARTICLES } from './articles/nb-timeregistrering';

// Newest first — a stable, self-maintaining order (no hand-kept array).
function byPublishedDesc(a: BlogPost, b: BlogPost): number {
  return (b.publishedAt || '').localeCompare(a.publishedAt || '');
}

const SV_ARTICLES: BlogPost[] = [
  ...EKONOMI_ARTICLES,
  ...KALKYL_ARTICLES,
  ...ARBETSMILJO_ARTICLES,
  ...JURIDIK_ARTICLES,
  ...REGELVERK_ARTICLES,
  ...PERSONAL_ARTICLES,
  ...KVALITET_ARTICLES,
  ...TILLVAXT_ARTICLES,
  ...FEATURE_ARTICLES,
].sort(byPublishedDesc);

// Feature pages ("Funktioner") exist in the main languages (sv/en/pl/ru/nb) so
// the homepage/funktioner links resolve to a real localized page. Other content
// clusters are still sv-only. nb also keeps its own time-registration articles.
const NB_SORTED = [...NB_ARTICLES, ...FEATURE_ARTICLES_NB].sort(byPublishedDesc);

const CODE_ARTICLES: Record<BlogLocale, BlogPost[]> = {
  sv: SV_ARTICLES,
  en: [...FEATURE_ARTICLES_EN].sort(byPublishedDesc),
  ru: [...FEATURE_ARTICLES_RU].sort(byPublishedDesc),
  nb: NB_SORTED,
  pl: [...FEATURE_ARTICLES_PL].sort(byPublishedDesc),
  uk: [],
  fi: [],
  et: [],
  lt: [],
  lv: [],
};

// Articles that originally shared a stock cover get a unique, on-brand
// generated card at /landing/blog/<slug>.webp (see scripts/gen-blog-covers.js).
// Applied here so every consumer — listing, article hero and OG image — uses
// the unique cover without editing each article object.
function withGeneratedCover(post: BlogPost): BlogPost {
  // Real photo covers (PHOTO_COVER_SLUGS) and generated text-card covers
  // (GENERATED_BLOG_COVER_SLUGS) both live at /landing/blog/<slug>.webp — the
  // photo file simply replaces the card. Routing photos here independently of
  // the text-card manifest keeps them working even if that manifest is rebuilt.
  if (!PHOTO_COVER_SLUGS.has(post.slug) && !GENERATED_BLOG_COVER_SLUGS.has(post.slug)) {
    return post;
  }
  const cover = `/landing/blog/${post.slug}.webp`;
  return { ...post, coverImageUrl: cover, seoImageUrl: `${SITE_URL}${cover}` };
}

export function getCodeArticles(locale: BlogLocale): BlogPost[] {
  return (CODE_ARTICLES[locale] ?? []).map(withGeneratedCover);
}

export function getCodeArticle(
  locale: BlogLocale,
  slug: string,
): BlogPost | null {
  return getCodeArticles(locale).find((post) => post.slug === slug) ?? null;
}

// Locales that actually publish this slug. hreflang must only ever point at
// locales where the article exists — advertising an alternate that 404s is
// exactly what filled GSC's "Not found (404)" report. Deriving it here (instead
// of a hand-kept sv-only denylist) means a new article, or a new site language,
// can never reintroduce hreflang-to-404.
export function getCodeArticleLocales(slug: string): BlogLocale[] {
  return (Object.keys(CODE_ARTICLES) as BlogLocale[]).filter((locale) =>
    CODE_ARTICLES[locale].some((post) => post.slug === slug),
  );
}

export function isCodeArticleSlug(slug: string): boolean {
  return Object.values(CODE_ARTICLES).some((posts) =>
    posts.some((post) => post.slug === slug),
  );
}
