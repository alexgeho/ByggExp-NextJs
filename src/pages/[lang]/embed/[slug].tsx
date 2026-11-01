import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ComponentType } from 'react';

import { NB_LIVE, type CalcLocale } from '../../../lib/locale';

import AnstalldKostnadKalkylatorTool from '../../../components/LeadMagnet/AnstalldKostnadKalkylatorTool';
import BetongKalkylatorTool from '../../../components/LeadMagnet/BetongKalkylatorTool';
import DrojsmalsrantaKalkylatorTool from '../../../components/LeadMagnet/DrojsmalsrantaKalkylatorTool';
import ForseningsviteKalkylatorTool from '../../../components/LeadMagnet/ForseningsviteKalkylatorTool';
import SpillprocentKalkylatorTool from '../../../components/LeadMagnet/SpillprocentKalkylatorTool';
import FallKalkylatorTool from '../../../components/LeadMagnet/FallKalkylatorTool';
import FargKalkylatorTool from '../../../components/LeadMagnet/FargKalkylatorTool';
import GipsKalkylatorTool from '../../../components/LeadMagnet/GipsKalkylatorTool';
import GolvKalkylatorTool from '../../../components/LeadMagnet/GolvKalkylatorTool';
import GolvvarmeKalkylatorTool from '../../../components/LeadMagnet/GolvvarmeKalkylatorTool';
import GrusKalkylatorTool from '../../../components/LeadMagnet/GrusKalkylatorTool';
import IsoleringKalkylatorTool from '../../../components/LeadMagnet/IsoleringKalkylatorTool';
import KvadratmeterKalkylatorTool from '../../../components/LeadMagnet/KvadratmeterKalkylatorTool';
import MomsKalkylatorTool from '../../../components/LeadMagnet/MomsKalkylatorTool';
import PaslagKalkylatorTool from '../../../components/LeadMagnet/PaslagKalkylatorTool';
import ReglarKalkylatorTool from '../../../components/LeadMagnet/ReglarKalkylatorTool';
import RotKalkylatorTool from '../../../components/LeadMagnet/RotKalkylatorTool';
import StaketKalkylatorTool from '../../../components/LeadMagnet/StaketKalkylatorTool';
import TakKalkylatorTool from '../../../components/LeadMagnet/TakKalkylatorTool';
import UvardeKalkylatorTool from '../../../components/LeadMagnet/UvardeKalkylatorTool';
import TakstolarKalkylatorTool from '../../../components/LeadMagnet/TakstolarKalkylatorTool';
import TapetKalkylatorTool from '../../../components/LeadMagnet/TapetKalkylatorTool';
import TimprisKalkylatorTool from '../../../components/LeadMagnet/TimprisKalkylatorTool';
import TrallKalkylatorTool from '../../../components/LeadMagnet/TrallKalkylatorTool';
import TrappaKalkylatorTool from '../../../components/LeadMagnet/TrappaKalkylatorTool';

// Bare, embeddable calculator pages meant to be dropped into other sites via an
// <iframe>. No site chrome, noindex, and a visible attribution link back to the
// full tool on byggexp.se. The copy-paste snippet (shown on the tool page) also
// carries an attribution <a> in the host page's DOM — that link is the backlink.

const LOCALE = 'sv';
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
const NO_SITE = 'https://byggexp.no';

const TOOLS: Record<string, { Tool: ComponentType<{ locale?: CalcLocale }>; title: string }> = {
  'rot-avdrag-kalkylator': { Tool: RotKalkylatorTool, title: 'ROT-avdrag kalkylator' },
  'moms-kalkylator': { Tool: MomsKalkylatorTool, title: 'Momskalkylator' },
  'takstolar-kalkylator': { Tool: TakstolarKalkylatorTool, title: 'Beräkna takstolar' },
  'betong-kalkylator': { Tool: BetongKalkylatorTool, title: 'Betongberäknare' },
  'tak-kalkylator': { Tool: TakKalkylatorTool, title: 'Takberäknare' },
  'farg-kalkylator': { Tool: FargKalkylatorTool, title: 'Färgåtgång' },
  'kvadratmeter-kalkylator': { Tool: KvadratmeterKalkylatorTool, title: 'Kvadratmeter' },
  'golv-kalkylator': { Tool: GolvKalkylatorTool, title: 'Golv & kakel' },
  'tapet-kalkylator': { Tool: TapetKalkylatorTool, title: 'Tapet' },
  'reglar-kalkylator': { Tool: ReglarKalkylatorTool, title: 'Reglar & virke' },
  'grus-kalkylator': { Tool: GrusKalkylatorTool, title: 'Grus & makadam' },
  'gips-kalkylator': { Tool: GipsKalkylatorTool, title: 'Gips' },
  'isolering-kalkylator': { Tool: IsoleringKalkylatorTool, title: 'Isolering' },
  'trappa-kalkylator': { Tool: TrappaKalkylatorTool, title: 'Trappa' },
  'fall-kalkylator': { Tool: FallKalkylatorTool, title: 'Fall & lutning' },
  'golvvarme-kalkylator': { Tool: GolvvarmeKalkylatorTool, title: 'Golvvärme' },
  'trall-kalkylator': { Tool: TrallKalkylatorTool, title: 'Trall & altan' },
  'staket-kalkylator': { Tool: StaketKalkylatorTool, title: 'Staket' },
  'timpris-kalkylator': { Tool: TimprisKalkylatorTool, title: 'Timpris-kalkylator' },
  'paslag-marginal-kalkylator': { Tool: PaslagKalkylatorTool, title: 'Påslag & marginal' },
  'drojsmalsranta-kalkylator': { Tool: DrojsmalsrantaKalkylatorTool, title: 'Dröjsmålsränta-kalkylator' },
  'forseningsvite-kalkylator': { Tool: ForseningsviteKalkylatorTool, title: 'Förseningsvite-kalkylator' },
  'spillprocent-kalkylator': { Tool: SpillprocentKalkylatorTool, title: 'Spillprocent-kalkylator' },
  'anstalld-kostnad-kalkylator': { Tool: AnstalldKostnadKalkylatorTool, title: 'Vad kostar en anställd' },
  'u-varde-kalkylator': { Tool: UvardeKalkylatorTool, title: 'U-värde-kalkylator' },
};

// Norwegian widgets (byggexp.no): only the calculators that ship nb UI text.
const NB_TITLES: Record<string, string> = {
  'takstolar-kalkylator': 'Beregne takstoler',
  'betong-kalkylator': 'Betongkalkulator',
  'tak-kalkylator': 'Takberegner',
  'farg-kalkylator': 'Malingforbruk',
  'kvadratmeter-kalkylator': 'Kvadratmeter',
  'reglar-kalkylator': 'Stendere og trelast',
  'grus-kalkylator': 'Grus og pukk',
  'gips-kalkylator': 'Gips',
  'trappa-kalkylator': 'Trapp',
  'fall-kalkylator': 'Fall og helning',
  'golvvarme-kalkylator': 'Gulvvarme',
  'trall-kalkylator': 'Terrasse og platting',
  'staket-kalkylator': 'Gjerde',
  'timpris-kalkylator': 'Timepris-kalkulator',
  'paslag-marginal-kalkylator': 'Påslag og margin',
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;
  const lang = params?.lang;
  if (typeof slug !== 'string' || !(slug in TOOLS)) {
    return { notFound: true };
  }
  if (lang === 'nb' && NB_LIVE && slug in NB_TITLES) {
    return { props: { slug, lang } };
  }
  if (lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: { slug } };
};

export default function EmbedPage({ slug, lang }: { slug: string; lang?: 'nb' }) {
  const nb = lang === 'nb';
  const { Tool } = TOOLS[slug];
  const title = nb ? NB_TITLES[slug] : TOOLS[slug].title;
  const href = nb ? `${NO_SITE}/nb/verktyg/${slug}` : `${SITE}/${LOCALE}/verktyg/${slug}`;

  return (
    <>
      <Head>
        <title>{`${title} – ByggExp`}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="lead-magnet embed-page">
        {nb ? <Tool locale="nb" /> : <Tool />}
        <p className="embed-credit">
          <a href={href} target="_blank" rel="noopener">
            {nb ? 'Kalkulator fra ByggExp →' : 'Kalkylator av ByggExp →'}
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
