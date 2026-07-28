import type { GetServerSideProps } from 'next';

import { fetchPublishedBlogPosts } from '../lib/blog-api';
import { landingLanguageCodes } from '../locales/languages';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const urls = landingLanguageCodes.map((lang) => ({ loc: `${siteUrl}/${lang}` }));

  const posts = await Promise.all(
    landingLanguageCodes.map(async (lang) => {
      try {
        return await fetchPublishedBlogPosts(lang);
      } catch {
        return [];
      }
    }),
  );

  posts.flat().forEach((post) => {
    urls.push({
      loc: `${siteUrl}/${post.locale}/blog/${encodeURIComponent(post.slug)}`,
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${escapeXml(url.loc)}</loc></url>`)
    .join('\n')}\n</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(xml);
  res.end();
  return { props: {} };
};

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
