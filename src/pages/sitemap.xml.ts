import type { GetServerSideProps } from 'next';

import { fetchPublishedBlogPosts } from '../lib/blog-api';
import { getCodeArticles } from '../content/code-articles';
import { VERKTYG_GROUPS } from '../content/verktyg-list';
import { landingLanguageCodes } from '../locales/languages';
import { localeOrigin } from '../lib/seo';

// Static routes that exist under every landing locale (besides the home page).
const LOCALE_STATIC_PATHS = [
  'blog',
  'funktioner',
  'contact',
  'villkor',
  'integritetspolicy',
  'dpa',
  'underbitraden',
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
  });

  // Free tools: sv-market only, listed under /sv on byggexp.se. (Norwegian
  // tools are reached via the /nb/verktyg hub for now.)
  if (!isNo) {
    SV_ONLY_PATHS.forEach((path) => {
      urls.push({ loc: `${localeOrigin('sv')}/sv/${path}` });
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
