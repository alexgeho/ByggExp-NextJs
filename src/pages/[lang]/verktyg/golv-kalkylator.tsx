import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import GolvKalkylatorTool from '../../../components/LeadMagnet/GolvKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur mycket golv ska jag köpa?', answer: 'Räkna ytan i m² och lägg på spill – ofta 5–10 %, mer vid diagonal läggning. Dela sedan på förpackningens m² för antal paket. Kalkylatorn gör det åt dig.' },
  { question: 'Hur mycket spill för kakel?', answer: 'Vid rak läggning räcker ofta 5–10 %, vid diagonal eller mycket vinklar räkna med mer. Ha alltid några extra plattor för framtida behov.' },
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
  const title = 'Golvberäknare – material till golv & kakel gratis | ByggExp';
  const description = 'Räkna ut hur mycket golv, laminat eller kakel du behöver: kvadratmeter inkl. spill och antal förpackningar. Gratis kalkylator, utan konto.';

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
        title='Golv- och kakelberäknare'
        intro='Fyll i ytan, spill och förpackningsstorlek så räknar vi ut hur många kvadratmeter och förpackningar du behöver – för golv, laminat, klinker och kakel.'
        tool={<GolvKalkylatorTool />}
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
          { id: 'sa-raknar-du', heading: 'Så räknar du ut materialet', body: (<><ol><li>Räkna ut ytan i kvadratmeter.</li><li>Lägg på spill för kap och svinn.</li><li>Ange m² per förpackning.</li><li>Se behovet och antal förpackningar.</li></ol></>) },
          { id: 'info', heading: 'Tänk på detta', body: (<><p>Köp gärna en förpackning extra – material ur samma parti kan vara svårt att få tag på senare, och du vill ha reserv om något går sönder.</p></>) },
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
