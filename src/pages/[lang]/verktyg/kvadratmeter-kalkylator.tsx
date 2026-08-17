import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import KvadratmeterKalkylatorTool from '../../../components/LeadMagnet/KvadratmeterKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur räknar jag ut kvadratmeter?',
    answer:
      'Multiplicera längd × bredd i meter. Ett rum på 4 × 3 meter är 12 m². Har du flera rum eller ytor lägger du till en rad per yta så summeras allt.',
  },
  {
    question: 'Hur mycket spill ska jag räkna med?',
    answer:
      'För golv och kakel brukar man lägga på cirka 5–10 % för kap och spill, mer vid diagonal läggning eller mycket vinklar. Ange spillprocenten så visar kalkylatorn hur mycket du bör beställa.',
  },
  {
    question: 'Kan jag räkna ut ytan för flera rum?',
    answer:
      'Ja. Lägg till en rad per rum eller yta – kalkylatorn summerar den totala kvadratmetern.',
  },
  {
    question: 'Kan jag se materialkostnaden?',
    answer:
      'Ja. Fyll i pris per m² (valfritt) så räknar kalkylatorn ut en uppskattad materialkostnad på ytan inklusive spill – bra för en snabb budget eller offert.',
  },
  {
    question: 'Kostar det något?',
    answer: 'Nej, kalkylatorn är gratis och kräver inget konto.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function KvadratmeterKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/kvadratmeter-kalkylator`;
  const title = 'Kvadratmeterberäknare – räkna ut m² gratis | ByggExp';
  const description =
    'Räkna ut kvadratmeter (m²) för ett eller flera rum utifrån längd och bredd, med spill för material som golv och kakel. Gratis kalkylator, utan konto.';

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
        title="Kvadratmeterberäknare – räkna ut ytan"
        intro="Fyll i längd och bredd för ett eller flera utrymmen så summeras ytan i kvadratmeter. Lägg till spill när du ska beställa golv, kakel, färg eller annat material – och ett pris per m² om du vill se materialkostnaden direkt."
        tool={<KvadratmeterKalkylatorTool />}
        leadForm={<ToolLeadForm tool="kvadratmeter-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/kvadratmeter-preview.webp"
            alt="Förhandsvisning av kvadratmeterberäknare"
            caption="Så ser kvadratmeterberäknaren ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-raknar-du',
            heading: 'Så räknar du ut kvadratmeter',
            body: (
              <ol>
                <li>Mät längd och bredd på rummet eller ytan i meter.</li>
                <li>Lägg till en rad per utrymme om du har flera.</li>
                <li>Ange spill i procent om du ska beställa material.</li>
                <li>Se den totala ytan och hur mycket du bör beställa.</li>
              </ol>
            ),
          },
          {
            id: 'anvandning',
            heading: 'När behöver du räkna ut ytan?',
            body: (
              <p>
                Kvadratmeter är grunden för att beräkna material till golv, kakel, målning, isolering
                och mycket annat – och för att prissätta arbete per m². Med rätt yta och lite spill
                slipper du både beställa för lite och betala för mycket.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om kvadratmeter"
        faq={FAQ}
        cta={{
          heading: 'Prissätt och följ projekt i ByggExp',
          text: 'Från ytor och material till offert, faktura och lönsamhet per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler byggkalkylatorer"
        related={[
          { href: `/${LOCALE}/verktyg/farg-kalkylator`, label: 'Färgåtgång' },
          { href: `/${LOCALE}/verktyg/betong-kalkylator`, label: 'Betongberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
