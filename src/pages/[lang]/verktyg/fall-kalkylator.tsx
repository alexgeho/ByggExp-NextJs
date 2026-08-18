import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import FallKalkylatorTool from '../../../components/LeadMagnet/FallKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur räknar jag ut fall?', answer: 'Fall anges ofta i mm per meter. Höjdskillnaden är längden gånger fallet: 6 m med 15 mm/m ger 90 mm. Kalkylatorn visar även procent och förhållande.' },
  { question: 'Vilket fall ska avloppet ha?', answer: 'Riktvärden är ofta 10–20 mm per meter för avloppsrör, men det beror på rördimension och tillämpning. Följ gällande branschregler.' },
  { question: 'Hur mycket fall från husgrunden?', answer: 'Marken bör luta bort från huset, ofta minst 15 mm per meter (1:50) de första metrarna, för att leda bort vatten.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/fall-kalkylator`;
  const title = 'Fall & lutning – räkna ut höjdskillnad gratis | ByggExp';
  const description = 'Räkna ut fall och lutning: höjdskillnad, procent och förhållande (1:X) utifrån längd och fall i mm/m. Bra för avlopp, mark och tak. Gratis, utan konto.';

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
        title='Fall & lutning'
        intro='Fyll i längden och fallet i mm per meter så räknar vi ut total höjdskillnad, lutning i procent och som förhållande (1:X). Bra för avlopp, mark och tak.'
        embedSlug="fall-kalkylator"
        embedTitle="Fall & lutning"
        tool={<FallKalkylatorTool />}
        leadForm={<ToolLeadForm tool="fall-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/fall-preview.webp"
            alt='Förhandsvisning av fall & lutning'
            caption='Så ser fall & lutning ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          { id: 'sa-raknar-du', heading: 'Så räknar du ut fallet', body: (<><ol><li>Ange längden i meter.</li><li>Ange önskat fall i mm per meter.</li><li>Se höjdskillnaden, lutningen i procent och som 1:X.</li></ol></>) },
          { id: 'info', heading: 'Riktvärden', body: (<><p>Fall uttrycks på flera sätt: mm per meter, procent och förhållande (1:X). 20 mm/m är samma sak som 2 % och 1:50. Använd det mått som gäller för din tillämpning.</p></>) },
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
          { href: `/${LOCALE}/verktyg/trappa-kalkylator`, label: 'Trappberäknare' },
          { href: `/${LOCALE}/verktyg/grus-kalkylator`, label: 'Grus & makadam' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
