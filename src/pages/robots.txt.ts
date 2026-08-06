import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  // Default: block all indexing (site is in pre-launch review).
  // Set SITE_ALLOW_INDEX=true on the server to open the site to search engines.
  const allowIndex = process.env.SITE_ALLOW_INDEX === 'true';
  res.setHeader('Content-Type', 'text/plain');
  if (allowIndex) {
    res.write(`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
  } else {
    res.write(`User-agent: *\nDisallow: /\n`);
  }
  res.end();
  return { props: {} };
};

export default function Robots() {
  return null;
}
