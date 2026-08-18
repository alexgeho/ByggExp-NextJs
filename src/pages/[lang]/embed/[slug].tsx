import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ComponentType } from 'react';

import MomsKalkylatorTool from '../../../components/LeadMagnet/MomsKalkylatorTool';
import RotKalkylatorTool from '../../../components/LeadMagnet/RotKalkylatorTool';
import TakstolarKalkylatorTool from '../../../components/LeadMagnet/TakstolarKalkylatorTool';

// Bare, embeddable calculator pages meant to be dropped into other sites via an
// <iframe>. No site chrome, noindex, and a visible attribution link back to the
// full tool on byggexp.se. The copy-paste snippet (shown on the tool page) also
// carries an attribution <a> in the host page's DOM — that link is the backlink.

const LOCALE = 'sv';
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';

const TOOLS: Record<string, { Tool: ComponentType; title: string }> = {
  'rot-avdrag-kalkylator': { Tool: RotKalkylatorTool, title: 'ROT-avdrag kalkylator' },
  'moms-kalkylator': { Tool: MomsKalkylatorTool, title: 'Momskalkylator' },
  'takstolar-kalkylator': { Tool: TakstolarKalkylatorTool, title: 'Beräkna takstolar' },
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;
  if (params?.lang !== LOCALE || typeof slug !== 'string' || !(slug in TOOLS)) {
    return { notFound: true };
  }
  return { props: { slug } };
};

export default function EmbedPage({ slug }: { slug: string }) {
  const { Tool, title } = TOOLS[slug];
  const href = `${SITE}/${LOCALE}/verktyg/${slug}`;

  return (
    <>
      <Head>
        <title>{`${title} – ByggExp`}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="lead-magnet embed-page">
        <Tool />
        <p className="embed-credit">
          <a href={href} target="_blank" rel="noopener">
            Kalkylator av ByggExp →
          </a>
        </p>
      </div>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          background: #f4f6fa;
        }
        .embed-page {
          background: transparent;
          padding: 12px;
          max-width: 560px;
          margin: 0 auto;
        }
        .embed-credit {
          text-align: center;
          font: 13px/1.4 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif;
          margin: 12px 0 4px;
        }
        .embed-credit a {
          color: #1c6cf3;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
