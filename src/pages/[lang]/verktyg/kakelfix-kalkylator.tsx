import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import KakelfixKalkylatorTool from '../../../components/LeadMagnet/KakelfixKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur mycket kakelfix går det åt per m²?', answer: 'Ofta 3–6 kg per m² beroende på tandad spackel och plattstorlek – större plattor och grövre tandning drar mer. Ange värdet i kalkylatorn.' },
  { question: 'Hur många säckar fix behöver jag?', answer: 'Total mängd i kg delat med säckens vikt, avrundat uppåt. Lägg på lite spill.' },
  { question: 'Gäller det både golv och vägg?', answer: 'Ja, men åtgången skiljer sig – golvplattor är ofta större och drar mer fix. Justera kg per m².' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/kakelfix-kalkylator`;
  const title = 'Kakelfix kalkylator – åtgång fästmassa | ByggExp';
  const description = 'Räkna ut åtgången av kakelfix (fästmassa): total mängd i kg och antal säckar utifrån yta och åtgång per m². Gratis kalkylator, utan konto.';

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
        title='Kakelfix – fästmassa'
        intro='Fyll i ytan och åtgången i kg per m² så räknar vi ut hur mycket fästmassa du behöver och antal säckar. Åtgången beror på tandning och plattstorlek.'
        tool={<KakelfixKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/kakelfix-preview.webp"
            alt='Förhandsvisning av kakelfix – fästmassa'
            caption='Så ser kakelfix – fästmassa ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut fixen', body: (<><ol><li>Räkna ut ytan i m².</li><li>Ange åtgången i kg per m² (från säcken).</li><li>Lägg på spill och säckens vikt.</li><li>Se total mängd och antal säckar.</li></ol></>) },
          { id: 'info', heading: 'Tandning och plattstorlek', body: (<><p>Större plattor och grövre tandad spackel kräver mer fästmassa. Följ tillverkarens rekommenderade tandning och åtgång för din plattstorlek.</p></>) },
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
          { href: `/${LOCALE}/verktyg/golv-kalkylator`, label: 'Golv & kakel' },
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
