import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import RiskbedomningMallTool from '../../../components/LeadMagnet/RiskbedomningMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'När ska en riskbedömning göras?',
    answer:
      'Innan riskfyllda arbetsmoment påbörjas och när förhållandena ändras. Riskbedömningen är en del av det systematiska arbetsmiljöarbetet och ligger till grund för vilka skyddsåtgärder som behövs.',
  },
  {
    question: 'Vad ska en riskbedömning innehålla?',
    answer:
      'Arbetsmomentet, riskkällorna, en bedömning av sannolikhet och konsekvens, vilka åtgärder som ska vidtas, vem som är ansvarig och hur det följs upp. Mallen har fält för allt detta.',
  },
  {
    question: 'Måste små byggföretag göra riskbedömning?',
    answer:
      'Ja. Kravet gäller oavsett storlek. Vid särskilt riskfyllda arbeten (t.ex. arbete på hög höjd, rivning med asbestrisk) ska bedömningen dessutom vara skriftlig.',
  },
  {
    question: 'Kostar mallen något?',
    answer: 'Nej, den är gratis och kräver inget konto. Fyll i och ladda ner PDF eller Excel.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function RiskbedomningMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/riskbedomning-mall`;
  const title = 'Riskbedömning mall bygg gratis (PDF & Excel) | ByggExp';
  const description =
    'Ladda ner en gratis riskbedömning-mall för byggarbetsplatsen. Fyll i moment, risker, åtgärder och ansvarig och få en färdig skriftlig riskbedömning som PDF.';

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
        badge="Gratis mall"
        title="Riskbedömning – gratis mall"
        intro="Fyll i arbetsmoment och risker och ladda ner en färdig skriftlig riskbedömning som PDF eller Excel. Görs innan riskfyllda moment och ligger till grund för rätt skyddsåtgärder på bygget."
        tool={<RiskbedomningMallTool />}
        leadForm={<ToolLeadForm tool="riskbedomning-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/riskbedomning-preview.webp"
            alt="Förhandsvisning av riskbedömning-mallen"
            caption="Så ser riskbedömning-mallen ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-gor-du',
            heading: 'Så gör du riskbedömningen',
            body: (
              <ul>
                <li>Beskriv arbetsmomentet och identifiera riskkällorna.</li>
                <li>Bedöm sannolikhet och konsekvens för varje risk.</li>
                <li>Bestäm åtgärd, ansvarig och när den ska vara klar.</li>
                <li>Gå igenom bedömningen med laget före start och uppdatera vid ändringar.</li>
              </ul>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om riskbedömning"
        faq={FAQ}
        cta={{
          heading: 'Arbetsmiljö och egenkontroll i ByggExp',
          text: 'Koppla riskbedömningar och åtgärder till rätt projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/arbetsmiljoplan`, label: 'Arbetsmiljöplan (AMP)' },
          { href: `/${LOCALE}/blog/fallskydd-krav-bygg`, label: 'Fallskydd på bygget' },
          { href: `/${LOCALE}/verktyg/skyddsrond-mall`, label: 'Skyddsrond-mall' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
