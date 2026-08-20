import type { BlogLocale, BlogPost } from '../types/blog';
import { GENERATED_BLOG_COVER_SLUGS } from './generated-blog-covers';
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
].sort(byPublishedDesc);

// Keyed by locale — Swedish-market articles only exist on sv.
const CODE_ARTICLES: Record<BlogLocale, BlogPost[]> = {
  sv: SV_ARTICLES,
  en: [],
  ru: [],
  nb: [],
};

// Articles that originally shared a stock cover get a unique, on-brand
// generated card at /landing/blog/<slug>.webp (see scripts/gen-blog-covers.js).
// Applied here so every consumer — listing, article hero and OG image — uses
// the unique cover without editing each article object.
function withGeneratedCover(post: BlogPost): BlogPost {
  if (!GENERATED_BLOG_COVER_SLUGS.has(post.slug)) {
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

export function isCodeArticleSlug(slug: string): boolean {
  return Object.values(CODE_ARTICLES).some((posts) =>
    posts.some((post) => post.slug === slug),
  );
}
