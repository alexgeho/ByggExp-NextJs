import type { GetServerSideProps } from 'next';

import { fetchPublishedBlogPosts } from '../lib/blog-api';
import { getCodeArticles } from '../content/code-articles';
import { landingLanguageCodes } from '../locales/languages';

// Static routes that exist under every landing locale (besides the home page).
const LOCALE_STATIC_PATHS = [
  'blog',
  'contact',
  'villkor',
  'integritetspolicy',
  'dpa',
  'underbitraden',
];

// Swedish-market-only pages (lead-magnet tools) — served on /sv only.
const SV_ONLY_PATHS = [
  'verktyg',
  'verktyg/byggdagbok-mall',
  'verktyg/tidrapport-mall',
  'verktyg/egenkontroll-mall',
  'verktyg/sla-ihop-pdf',
  'verktyg/dela-pdf',
  'verktyg/bild-till-pdf',
  'verktyg/rotera-pdf',
  'verktyg/ta-bort-sidor-pdf',
  'verktyg/vattenstampel-pdf',
  'verktyg/signera-pdf',
  'verktyg/pdf-till-jpg',
  'verktyg/rot-avdrag-kalkylator',
  'verktyg/moms-kalkylator',
  'verktyg/timpris-kalkylator',
  'verktyg/paslag-marginal-kalkylator',
  'verktyg/offert-mall',
  'verktyg/faktura-mall',
  'verktyg/betong-kalkylator',
  'verktyg/tak-kalkylator',
  'verktyg/farg-kalkylator',
  'verktyg/kvadratmeter-kalkylator',
  'verktyg/golv-kalkylator',
  'verktyg/tapet-kalkylator',
  'verktyg/reglar-kalkylator',
  'verktyg/grus-kalkylator',
  'verktyg/gips-kalkylator',
  'verktyg/isolering-kalkylator',
  'verktyg/trappa-kalkylator',
  'verktyg/fall-kalkylator',
  'verktyg/murbruk-kalkylator',
  'verktyg/skruv-kalkylator',
  'verktyg/armering-kalkylator',
  'verktyg/golvvarme-kalkylator',
  'verktyg/trall-kalkylator',
  'verktyg/staket-kalkylator',
  'verktyg/takstolar-kalkylator',
  'verktyg/kakelfix-kalkylator',
];

type SitemapUrl = { loc: string; lastmod?: string };

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const urls: SitemapUrl[] = [];

  landingLanguageCodes.forEach((lang) => {
    urls.push({ loc: `${siteUrl}/${lang}` });
    LOCALE_STATIC_PATHS.forEach((path) => {
      urls.push({ loc: `${siteUrl}/${lang}/${path}` });
    });
  });

  SV_ONLY_PATHS.forEach((path) => {
    urls.push({ loc: `${siteUrl}/sv/${path}` });
  });

  const posts = await Promise.all(
    landingLanguageCodes.map(async (lang) => {
      try {
        return await fetchPublishedBlogPosts(lang);
      } catch {
        return [];
      }
    }),
  );

  // CMS posts + code-published articles (real, indexable).
  const codeArticles = landingLanguageCodes.flatMap((lang) => getCodeArticles(lang));
  [...posts.flat(), ...codeArticles].forEach((post) => {
    if (post.noIndex) {
      return;
    }
    urls.push({
      loc: `${siteUrl}/${post.locale}/blog/${encodeURIComponent(post.slug)}`,
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
