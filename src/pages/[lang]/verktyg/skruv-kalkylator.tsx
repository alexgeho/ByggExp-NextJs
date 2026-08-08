import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import SkruvKalkylatorTool from '../../../components/LeadMagnet/SkruvKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur många skruvar går det åt per m²?', answer: 'Det beror på infästning och c/c-avstånd. För gips är cirka 15–20 skruvar per m² vanligt. Ange värdet i kalkylatorn.' },
  { question: 'Hur många skruvar i en ask?', answer: 'Det står på förpackningen och varierar (ofta 100–500 st). Ange antalet per ask så räknas antal askar ut.' },
  { question: 'Gäller det både skruv och spik?', answer: 'Ja, principen är densamma – justera åtgången per m² efter det du använder.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/skruv-kalkylator`;
  const title = 'Skruv- och spikåtgång kalkylator – antal & askar | ByggExp';
  const description = 'Räkna ut åtgång av skruv och spik: antal och antal askar utifrån yta och åtgång per m². Gratis kalkylator, utan konto.';

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
        title='Skruv- och spikåtgång'
        intro='Fyll i ytan och åtgången per m² så räknar vi ut antal skruvar/spikar och antal askar. Åtgången beror på infästning och c/c.'
        tool={<SkruvKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/skruv-preview.webp"
            alt='Förhandsvisning av skruv- och spikåtgång'
            caption='Så ser skruv- och spikåtgång ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut åtgången', body: (<><ol><li>Räkna ut ytan i m².</li><li>Ange åtgång per m².</li><li>Ange antal per ask.</li><li>Se antal skruvar och antal askar.</li></ol></>) },
          { id: 'info', heading: 'Räkna med marginal', body: (<><p>Det går snabbt åt fler skruvar än man tror vid hörn, kortlingar och komplicerade infästningar. Ta gärna en ask extra.</p></>) },
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
          { href: `/${LOCALE}/verktyg/gips-kalkylator`, label: 'Gipsberäknare' },
          { href: `/${LOCALE}/verktyg/reglar-kalkylator`, label: 'Reglar & virke' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
