import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import GolvKalkylatorTool from '../../../components/LeadMagnet/GolvKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur mycket golv eller kakel ska jag köpa?', answer: 'Räkna ytan i m² och lägg på spill – rak läggning ofta 5–8 %, diagonal 10–15 %. Dela sedan på förpackningens m² för antal paket. Kalkylatorn väljer spill efter läggningssätt och räknar ut det åt dig.' },
  { question: 'Hur mycket fästmassa går det åt till kakel?', answer: 'Räkna med ca 3–6 kg fästmassa per m² beroende på tandning och plattstorlek (ett vanligt riktvärde är 4 kg/m²). Välj "Kakel/klinker" i kalkylatorn så räknas kg och antal säckar (20 kg) ut. Fogbruk tillkommer och beror på fogbredd.' },
  { question: 'Hur mycket spill vid diagonal läggning?', answer: 'Diagonal läggning och rum med många vinklar ger mer kap – räkna med 10–15 % i stället för 5–8 %. Ha alltid några plattor/brädor extra ur samma parti för framtida behov.' },
  { question: 'Hur många m² är en förpackning?', answer: 'Det varierar per produkt och står på förpackningen – ange värdet i kalkylatorn så räknas antal paket ut.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/golv-kalkylator`;
  const title = 'Golv- & kakelkalkylator – förpackningar & fästmassa | ByggExp';
  const description = 'Räkna ut golv, laminat och kakel: m² inkl. spill (rak/diagonal), antal förpackningar och – för kakel – fästmassa i kg och säckar. Gratis kalkylator, utan konto.';

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
        title='Golv- och kakelkalkylator'
        intro='Välj material och läggningssätt så räknar vi ut m² inkl. spill och antal förpackningar – för golv, laminat, klinker och kakel. För kakel får du även åtgången fästmassa i kg och säckar.'
        embedSlug="golv-kalkylator"
        embedTitle="Golv & kakel"
        tool={<GolvKalkylatorTool />}
        leadForm={<ToolLeadForm tool="golv-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/golv-preview.webp"
            alt='Förhandsvisning av golv- och kakelberäknare'
            caption='Så ser golv- och kakelberäknare ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-raknar-du',
            heading: 'Så räknar kalkylatorn',
            body: (
              <ul>
                <li><strong>Material:</strong> ytan × (1 + spill) ÷ m² per förpackning = antal paket.</li>
                <li><strong>Spill:</strong> väljs efter läggning – rak ca 8 %, diagonal ca 12 %.</li>
                <li><strong>Fästmassa (kakel):</strong> ytan × kg/m² → kg och säckar (20 kg).</li>
              </ul>
            ),
          },
          {
            id: 'kakel-fastmassa',
            heading: 'Kakel: fästmassa och fog',
            body: (
              <p>
                Fästmassans åtgång beror på tandning och plattstorlek – räkna med ca 3–6 kg/m²
                (riktvärde 4 kg/m²). Stora plattor och grov tandning drar mer. Utöver fästmassan
                tillkommer fogbruk, som beror på fogbredd och plattstorlek – ha alltid lite extra.
              </p>
            ),
          },
          {
            id: 'info',
            heading: 'Tänk på detta',
            body: (
              <p>
                Köp gärna en förpackning extra – material ur samma parti kan vara svårt att få tag på
                senare, och du vill ha reserv om något går sönder. Kontrollera alltid m² per
                förpackning och fästmassans åtgång på produkten.
              </p>
            ),
          },
        ]}
        faqHeading='Vanliga frågor'
        faq={FAQ}
        cta={{
          heading: 'Räkna material och tid i ByggExp',
          text: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler byggkalkylatorer"
        related={[
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg/farg-kalkylator`, label: 'Färgåtgång' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
