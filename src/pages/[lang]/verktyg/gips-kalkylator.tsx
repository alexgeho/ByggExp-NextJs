import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import GipsKalkylatorTool from '../../../components/LeadMagnet/GipsKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur många gipsskivor behöver jag?', answer: 'Räkna väggytan i m², multiplicera med antal lager och lägg på spill. Dela sedan på skivans m². En vanlig skiva (1200 × 2600 mm) är ca 3,1 m².' },
  { question: 'Hur stor är en gipsskiva?', answer: 'Vanliga mått är 1200 × 2600 mm (ca 3,1 m²) och 1200 × 2500 mm (3,0 m²). Ange skivans m² i kalkylatorn.' },
  { question: 'Ska jag ha ett eller två lager?', answer: 'Två lager gips ger bättre ljud och brandmotstånd och krävs ibland enligt konstruktion. Välj antal lager i kalkylatorn.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/gips-kalkylator`;
  const title = 'Gipsberäknare – antal gipsskivor gratis | ByggExp';
  const description = 'Räkna ut hur många gipsskivor du behöver utifrån väggyta, antal lager och skivstorlek, inkl. spill. Gratis gipsberäknare, utan konto.';

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
        badge='Gratis kalkylator'
        title='Gipsberäknare'
        intro='Fyll i väggytan, antal lager och skivans storlek så räknar vi ut hur många gipsskivor du behöver, inklusive spill.'
        tool={<GipsKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/gips-preview.webp"
            alt='Förhandsvisning av gipsberäknare'
            caption='Så ser gipsberäknare ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut antal skivor', body: (<><ol><li>Räkna ut ytan som ska skivas (m²).</li><li>Välj antal lager.</li><li>Ange skivans yta.</li><li>Se behovet och antal gipsskivor.</li></ol></>) },
          { id: 'info', heading: 'Tänk på', body: (<><p>Lägg på spill för kap runt fönster, dörrar och hörn. Köp gärna någon skiva extra – det går snabbt åt fler än man tror vid komplicerade väggar.</p></>) },
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
          { href: `/${LOCALE}/verktyg/reglar-kalkylator`, label: 'Reglar & virke' },
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
