import type { GetServerSideProps } from 'next';

import { fetchPublishedBlogPosts } from '../lib/blog-api';
import { getCodeArticles } from '../content/code-articles';
import { VERKTYG_GROUPS } from '../content/verktyg-list';
import { landingLanguageCodes, svEnLocales } from '../locales/languages';
import { EN_CALC_SLUGS } from '../lib/locale';
import { localeOrigin } from '../lib/seo';

// Static routes that exist under every landing locale (besides the home page).
const LOCALE_STATIC_PATHS = [
  'blog',
  'funktioner',
  'contact',
];

// Legal pages are only written in sv + en; the /ru copies serve the en text and
// canonicalise to /en (see LegalDocument). Listing those /ru URLs in the sitemap
// submits non-canonical pages and feeds GSC "Duplicate without user-selected
// canonical", so we only emit them for the locales they actually have content in.
const LEGAL_STATIC_PATHS = [
  'villkor',
  'integritetspolicy',
  'dpa',
  'underbitraden',
  // Trust pages — written in sv + en, /ru canonicalises to /en (same shell as
  // the legal pages), so they follow the same sv+en-only emission rule.
  'om-oss',
  'faq',
];

// Swedish-market-only pages (lead-magnet tools) — served on /sv only.
// Derived from the single tool inventory (content/verktyg-list.ts) so adding a
// tool there automatically adds it here; 'verktyg' is the hub page itself.
const SV_ONLY_PATHS = [
  'verktyg',
  ...VERKTYG_GROUPS.flatMap((group) =>
    group.items.map((item) => `verktyg/${item.slug}`),
  ),
];

// Calculators additionally serve English (/en/verktyg/...) — see CalcLocale in
// lib/locale. Templates (mall) and PDF utilities remain sv-only, and the
// labour/wage calculators (ackord, ob-overtid, restidsersattning, …) are
// Swedish-agreement specific and 404 on /en — so we emit /en ONLY for the calc
// slugs that actually ship English content (EN_CALC_SLUGS), plus the /en/verktyg
// hub. Emitting /en for a sv-only calc = advertising a 404 (GSC "Not found").
const CALC_PATHS = [
  'verktyg',
  ...VERKTYG_GROUPS.flatMap((group) =>
    group.items
      .filter((item) => EN_CALC_SLUGS.has(item.slug))
      .map((item) => `verktyg/${item.slug}`),
  ),
];

type SitemapUrl = { loc: string; lastmod?: string };

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  // ccTLD split: byggexp.no lists only nb URLs, byggexp.se lists sv/en/ru. This
  // keeps each domain's sitemap to its own locale so Google never sees the same
  // page on two hosts. localeOrigin() puts each URL on the right ccTLD.
  const host = (req.headers.host || '').toLowerCase().split(':')[0].replace(/^www\./, '');
  const isNo = host === 'byggexp.no';
  const locales = isNo
    ? (['nb'] as const)
    : (landingLanguageCodes.filter((l) => l !== 'nb') as ('sv' | 'en' | 'ru')[]);
  const urls: SitemapUrl[] = [];

  locales.forEach((lang) => {
    const origin = localeOrigin(lang);
    urls.push({ loc: `${origin}/${lang}` });
    LOCALE_STATIC_PATHS.forEach((path) => {
      urls.push({ loc: `${origin}/${lang}/${path}` });
    });
    // Legal pages: only the locales that have real content (sv + en). On
    // byggexp.no the nb legal pages are separate, so skip legal there entirely.
    if (svEnLocales.includes(lang as (typeof svEnLocales)[number])) {
      LEGAL_STATIC_PATHS.forEach((path) => {
        urls.push({ loc: `${origin}/${lang}/${path}` });
      });
    }
  });

  // Free tools. byggexp.se lists the full sv inventory; byggexp.no lists the
  // nb tools hub (individual nb calculators are crawled via the hub's links).
  if (isNo) {
    urls.push({ loc: `${localeOrigin('nb')}/nb/verktyg` });
    urls.push({ loc: `${localeOrigin('nb')}/nb/fa-offert` });
  } else {
    urls.push({ loc: `${localeOrigin('sv')}/sv/fa-offert` });
    SV_ONLY_PATHS.forEach((path) => {
      urls.push({ loc: `${localeOrigin('sv')}/sv/${path}` });
    });
    // English calculators (calculators only; mall/PDF tools stay sv-only).
    CALC_PATHS.forEach((path) => {
      urls.push({ loc: `${localeOrigin('en')}/en/${path}` });
    });
  }

  const posts = await Promise.all(
    locales.map(async (lang) => {
      try {
        return await fetchPublishedBlogPosts(lang);
      } catch {
        return [];
      }
    }),
  );

  // CMS posts + code-published articles (real, indexable).
  const codeArticles = locales.flatMap((lang) => getCodeArticles(lang));
  [...posts.flat(), ...codeArticles].forEach((post) => {
    if (post.noIndex) {
      return;
    }
    urls.push({
      loc: `${localeOrigin(post.locale)}/${post.locale}/blog/${encodeURIComponent(post.slug)}`,
      lastmod: post.updatedAt || post.publishedAt || post.createdAt || undefined,
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => {
      const lastmod = url.lastmod
        ? `<lastmod>${escapeXml(formatLastmod(url.lastmod))}</lastmod>`
        : '';
      return `  <url><loc>${escapeXml(url.loc)}</loc>${lastmod}</url>`;
    })
    .join('\n')}\n</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(xml);
  res.end();
  return { props: {} };
};

function formatLastmod(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toISOString();
}

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  })[character] || character);
}

export default function Sitemap() {
  return null;
}
