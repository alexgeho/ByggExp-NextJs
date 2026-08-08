import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import ArmeringKalkylatorTool from '../../../components/LeadMagnet/ArmeringKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur många armeringsnät behöver jag?', answer: 'Ytan delat med mattans yta, plus påslag för överlapp. En vanlig matta är 2 × 5 m (10 m²). Kalkylatorn räknar ut antalet.' },
  { question: 'Hur mycket ska armeringsnät överlappa?', answer: 'Näten ska överlappa, ofta ett par rutor. Ange överlappet i procent – följ konstruktörens anvisning.' },
  { question: 'Vilken nättyp ska jag ha?', answer: 'Det bestäms av konstruktionen (t.ex. platta, bjälklag). Fråga konstruktören om nättyp och överlapp.' },
  { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function Page() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/armering-kalkylator`;
  const title = 'Armeringsnät kalkylator – antal mattor | ByggExp';
  const description = 'Räkna ut antal armeringsnät (mattor) utifrån ytan som ska armeras, mattans storlek och överlapp. Gratis kalkylator för armering, utan konto.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQ.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            }),
          }}
        />
      </Head>

      <Header headerT={headerT} />

      <LeadMagnetPage
        badge="Gratis kalkylator"
        title='Armeringsnät'
        intro='Fyll i ytan som ska armeras och mattans storlek så räknar vi ut antal armeringsnät, med påslag för överlapp.'
        tool={<ArmeringKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/armering-preview.webp"
            alt='Förhandsvisning av armeringsnät'
            caption='Så ser armeringsnät ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut antal mattor', body: (<><ol><li>Räkna ut ytan som ska armeras (m²).</li><li>Ange mattans yta.</li><li>Lägg på överlapp i procent.</li><li>Se behovet och antal mattor.</li></ol></>) },
          { id: 'info', heading: 'Tänk på överlapp', body: (<><p>Glöm inte att armeringsnät måste överlappa för att fungera som en sammanhängande armering. Ett för litet påslag ger för få mattor.</p></>) },
        ]}
        faqHeading="Vanliga frågor"
        faq={FAQ}
        cta={{
          heading: 'Räkna material och tid i ByggExp',
          text: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler byggkalkylatorer"
        related={[
          { href: `/${LOCALE}/verktyg/betong-kalkylator`, label: 'Betongberäknare' },
          { href: `/${LOCALE}/verktyg/grus-kalkylator`, label: 'Grus & makadam' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
