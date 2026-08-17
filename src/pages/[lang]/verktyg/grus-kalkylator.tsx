import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import GrusKalkylatorTool from '../../../components/LeadMagnet/GrusKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur räknar jag ut hur mycket grus jag behöver?', answer: 'Volymen är längd × bredd × djup i meter. En yta på 10 × 3 m med 10 cm djup blir 3 m³. Vikten är volymen gånger densiteten.' },
  { question: 'Hur mycket väger en kubik grus?', answer: 'Grus och makadam väger ofta cirka 1,5–1,8 ton per m³, matjord ca 1,2–1,5. Ange densiteten i kalkylatorn.' },
  { question: 'Grus säljs i ton eller kubik?', answer: 'Ofta i ton vid leverans och i kubik vid uppskattning – därför visar kalkylatorn båda.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/grus-kalkylator`;
  const title = 'Grus & makadam kalkylator – m³ och ton | ByggExp';
  const description = 'Räkna ut hur mycket grus, makadam eller matjord du behöver: volym i kubikmeter och vikt i ton utifrån yta och djup. Gratis kalkylator, utan konto.';

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
        title='Grus & makadam'
        intro='Fyll i yta och djup så räknar vi ut volymen i kubikmeter och vikten i ton. Fungerar för grus, makadam, matjord och sand – justera densiteten efter materialet.'
        tool={<GrusKalkylatorTool />}
        leadForm={<ToolLeadForm tool="grus-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/grus-preview.webp"
            alt='Förhandsvisning av grus & makadam'
            caption='Så ser grus & makadam ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut mängden', body: (<><ol><li>Mät ytans längd och bredd i meter.</li><li>Ange djupet i centimeter.</li><li>Välj materialets densitet (ton/m³).</li><li>Se volymen i m³ och vikten i ton.</li></ol></>) },
          { id: 'info', heading: 'Tänk på packning', body: (<><p>Material packar ihop sig efter läggning, så räkna med lite extra om djupet ska hålla efter packning. Densiteten skiljer sig mellan material – fråga leverantören.</p></>) },
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
          { href: `/${LOCALE}/verktyg/betong-kalkylator`, label: 'Betongberäknare' },
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
