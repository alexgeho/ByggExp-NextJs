import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import GanttSchemaMallTool from '../../../components/LeadMagnet/GanttSchemaMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är ett Gantt-schema?',
    answer:
      'Ett Gantt-schema är en tidsplan där projektets aktiviteter visas över tid med start, slut och beroenden. Det gör det lätt att se vilka moment som styr slutdatumet – den kritiska linjen.',
  },
  {
    question: 'Hur gör jag en tidsplan för bygget?',
    answer:
      'Lista aktiviteterna i ordning, sätt start- och slutdatum, ange ansvarig och markera beroenden (vad som måste vara klart först). Mallen ger dig en färdig struktur att fylla i.',
  },
  {
    question: 'Vad är kritisk linje?',
    answer:
      'Den kritiska linjen är kedjan av aktiviteter som direkt påverkar projektets slutdatum. Blir en av dem försenad flyttas hela slutdatumet. Håll extra koll på dem.',
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

export default function GanttSchemaMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/gantt-schema-mall`;
  const title = 'Gantt-schema & tidsplan mall bygg (gratis) | ByggExp';
  const description =
    'Ladda ner en gratis tidsplan/Gantt-mall för byggprojekt. Fyll i aktiviteter, ansvarig, start och slut och få en färdig tidsplan som PDF eller Excel.';

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
        title="Tidsplan & Gantt-schema – gratis mall"
        intro="Fyll i projektets aktiviteter med ansvarig, start och slut och ladda ner en färdig tidsplan som PDF eller Excel. Ett enkelt sätt att planera bygget och se vilka moment som styr slutdatumet."
        tool={<GanttSchemaMallTool />}
        leadForm={<ToolLeadForm tool="gantt-schema-mall" />}
        sections={[
          {
            id: 'sa-gor-du-tidsplan',
            heading: 'Så gör du en tidsplan som håller',
            body: (
              <ul>
                <li>Bryt ner projektet i tydliga aktiviteter i rätt ordning.</li>
                <li>Sätt realistiska start- och slutdatum och ansvarig per aktivitet.</li>
                <li>Markera beroenden – vad som måste vara klart innan nästa moment kan börja.</li>
                <li>Identifiera den kritiska linjen och lägg in buffert för väderberoende moment.</li>
              </ul>
            ),
          },
          {
            id: 'levande-tidsplan',
            heading: 'Håll planen levande',
            body: (
              <p>
                En tidsplan i ett Excel-ark blir snabbt inaktuell. I ByggExp planerar du projektet i etapper och uppgifter med
                procent klart, så att planen uppdateras i takt med att arbetet fortskrider – och alla ser samma bild.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om tidsplan och Gantt-schema"
        faq={FAQ}
        cta={{
          heading: 'Planera projektet i ByggExp',
          text: 'Etapper, uppgifter och procent klart i stället för ett löst Excel-ark. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/gantt-schema-mall-bygg`, label: 'Guide: Gantt-schema för bygg' },
          { href: `/${LOCALE}/blog/bemanning-och-personalplanering`, label: 'Bemanning och personalplanering' },
          { href: `/${LOCALE}/funktioner`, label: 'Funktioner i ByggExp' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
