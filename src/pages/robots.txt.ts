import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const noindex = process.env.SITE_NOINDEX === 'true';
  res.setHeader('Content-Type', 'text/plain');
  if (noindex) {
    // Keep the whole site out of search engines while in review.
    res.write(`User-agent: *\nDisallow: /\n`);
  } else {
    res.write(`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
  }
  res.end();
  return { props: {} };
};

export default function Robots() {
  return null;
}
