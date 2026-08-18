import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PaslagKalkylatorTool from '../../../components/LeadMagnet/PaslagKalkylatorTool';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är skillnaden på påslag och marginal?',
    answer:
      'Påslag räknas på självkostnaden, marginal räknas på försäljningspriset. Ett påslag på 30 % ger en marginal på cirka 23 % – samma vinst i kronor, men olika procent beroende på vad du räknar på.',
  },
  {
    question: 'Hur räknar jag ut försäljningspriset?',
    answer:
      'Med påslag: självkostnad × (1 + påslag). Med marginal: självkostnad ÷ (1 − marginal). Kalkylatorn gör båda och visar vinst, påslag och marginal.',
  },
  {
    question: 'Vilket påslag ska jag ha på material?',
    answer:
      'Det varierar per bransch och företag, men ett påslag på material täcker hantering, spill, lagerhållning och risk. Använd kalkylatorn för att se vad ett visst påslag ger i marginal.',
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

export default function PaslagKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/paslag-marginal-kalkylator`;
  const title = 'Påslag & marginal kalkylator – räkna ut pris gratis | ByggExp';
  const description =
    'Räkna ut försäljningspris från självkostnad med påslag eller marginal – och se skillnaden mellan påslag och marginal. Gratis kalkylator, utan konto.';

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
        title="Påslag & marginal – räkna ut pris och vinst"
        intro="Fyll i din självkostnad och antingen ett påslag eller en önskad marginal. Se försäljningspriset, vinsten och skillnaden mellan påslag och marginal direkt."
        tool={<PaslagKalkylatorTool />}
        leadForm={<ToolLeadForm tool="paslag-marginal-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/paslag-preview.webp"
            alt="Förhandsvisning av påslag- och marginalkalkylator"
            caption="Så ser påslag- och marginalkalkylatorn ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'paslag-vs-marginal',
            heading: 'Påslag och marginal – vad är skillnaden?',
            body: (
              <>
                <p>
                  De blandas ofta ihop men räknas på olika sätt:
                </p>
                <ul>
                  <li><strong>Påslag</strong> räknas på självkostnaden: vinst ÷ självkostnad.</li>
                  <li><strong>Marginal</strong> räknas på försäljningspriset: vinst ÷ försäljningspris.</li>
                </ul>
                <p>
                  Därför blir marginalen alltid ett lägre procenttal än påslaget för samma pris – ett
                  påslag på 30 % motsvarar till exempel en marginal på cirka 23 %.
                </p>
              </>
            ),
          },
          {
            id: 'sa-satter-du-pris',
            heading: 'Så sätter du rätt pris',
            body: (
              <p>
                Räkna alltid med din verkliga självkostnad – inte bara inköpspriset, utan även
                hantering, spill och risk. Utgå sedan från vilken marginal du behöver för att
                verksamheten ska gå ihop, och kontrollera att priset är rimligt mot marknaden.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om påslag och marginal"
        faq={FAQ}
        cta={{
          heading: 'Se marginalen per projekt i ByggExp',
          text: 'Följ intäkter, kostnader och marginal per projekt i realtid. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/blog/paslag-pa-material`, label: 'Guide: materialpåslag för hantverkare' },
          { href: `/${LOCALE}/verktyg/timpris-kalkylator`, label: 'Timpris-kalkylator' },
          { href: `/${LOCALE}/verktyg/moms-kalkylator`, label: 'Momskalkylator' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
