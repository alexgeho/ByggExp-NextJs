import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import KontrollplanMallTool from '../../../components/LeadMagnet/KontrollplanMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är en kontrollplan?',
    answer:
      'En kontrollplan enligt plan- och bygglagen (PBL) beskriver vilka kontroller som ska göras under ett byggprojekt, mot vilka krav, med vilken metod och av vem. Den ligger till grund för byggnadsnämndens slutbesked.',
  },
  {
    question: 'När behövs en kontrollansvarig?',
    answer:
      'För enklare åtgärder kan byggherren själv upprätta kontrollplanen. Vid mer omfattande projekt krävs en certifierad kontrollansvarig (KA). Byggnadsnämnden avgör i lovet om KA krävs.',
  },
  {
    question: 'Vad är skillnaden på egenkontroll och certifierad sakkunnig?',
    answer:
      'En egenkontroll gör du eller entreprenören själv och dokumenterar. Vissa kontroller ska i stället göras av en certifierad sakkunnig – till exempel en certifierad funktionskontrollant för OVK. I mallen anger du för varje rad vilket som gäller.',
  },
  {
    question: 'Ska bygg- och rivningsavfall vara med?',
    answer:
      'Ja. Kontrollplanen ska visa hur bygg- och rivningsavfall hanteras och sorteras. Mallen har ett fält för detta.',
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

export default function KontrollplanMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/kontrollplan-mall`;
  const title = 'Kontrollplan mall (PBL) gratis PDF & Excel | ByggExp';
  const description =
    'Ladda ner en gratis kontrollplan-mall enligt PBL för bygglov och anmälan. Tabell med vad, hur, mot vilket underlag, vem och egenkontroll eller sakkunnig – plus anmälningar och arbetsplatsbesök. Ladda ner som PDF.';

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
        title="Kontrollplan enligt PBL – gratis mall"
        intro="Fyll i projektuppgifter och en rad per kontroll – vad, hur, mot vilket underlag, vem och om det är egenkontroll eller certifierad sakkunnig – och ladda ner en färdig kontrollplan som PDF eller Excel. Passar enklare bygglov och anmälningsärenden – för större projekt krävs en kontrollansvarig."
        tool={<KontrollplanMallTool />}
        leadForm={<ToolLeadForm tool="kontrollplan-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/kontrollplan-preview.webp"
            alt="Förhandsvisning av kontrollplan-mallen"
            caption="Så ser kontrollplan-mallen ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'vad-ska-med',
            heading: 'Vad ska en kontrollplan innehålla?',
            body: (
              <ul>
                <li>Fastighetsbeteckning, åtgärd och byggherre.</li>
                <li>Kontrollpunkter: vad som kontrolleras, hur, mot vilket underlag och av vem.</li>
                <li>Om varje kontroll görs som egenkontroll eller av certifierad sakkunnig.</li>
                <li>Datum och signatur när kontrollen är utförd.</li>
                <li>Vilka anmälningar som ska göras till byggnadsnämnden och nämndens arbetsplatsbesök.</li>
                <li>Hantering och utsortering av bygg- och rivningsavfall.</li>
                <li>Underlag som lämnas till byggnadsnämnden för slutbesked.</li>
              </ul>
            ),
          },
          {
            id: 'riskbaserad',
            heading: 'Gör kontrollplanen projektspecifik',
            body: (
              <p>
                En bra kontrollplan är riskbaserad och anpassad till det enskilda projektet – inte en generell lista som
                bockas av på slutet. Fokusera på de moment där fel får störst konsekvenser, till exempel tätskikt, bärande
                konstruktion och brandskydd.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om kontrollplan"
        faq={FAQ}
        cta={{
          heading: 'Egenkontroller och dokumentation i ByggExp',
          text: 'Koppla egenkontroller och uppgifter till rätt projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/kontrollplan-mall-bygglov`, label: 'Guide: kontrollplan för bygglov' },
          { href: `/${LOCALE}/blog/egenkontroll`, label: 'Egenkontroll' },
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll-mall (PDF)' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
