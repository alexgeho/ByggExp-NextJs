import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import AvvikelserapportMallTool from '../../../components/LeadMagnet/AvvikelserapportMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är en avvikelserapport?',
    answer:
      'En avvikelserapport dokumenterar när något avviker från krav, ritning eller handling – vad som hänt, orsaken, åtgärden och hur den verifierats. Den är en central del av egenkontrollen och KMA-arbetet.',
  },
  {
    question: 'Varför ska jag dokumentera avvikelser?',
    answer:
      'För att kunna åtgärda rätt, förhindra upprepning och stå starkt vid en tvist eller reklamation. En spårbar avvikelsehantering visar att ni tar kvalitet och kontroll på allvar.',
  },
  {
    question: 'Vad ska en avvikelserapport innehålla?',
    answer:
      'Projekt, plats, beskrivning av avvikelsen, orsak, omedelbar och korrigerande åtgärd, ansvarig, tidpunkt och verifiering. Mallen har fält för allt detta.',
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

export default function AvvikelserapportMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/avvikelserapport-mall`;
  const title = 'Avvikelserapport mall bygg gratis (PDF & Excel) | ByggExp';
  const description =
    'Ladda ner en gratis avvikelserapport-mall för bygg. Dokumentera avvikelse, orsak, åtgärd och verifiering och få en färdig rapport som PDF eller Excel. Del av egenkontroll och KMA.';

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
        title="Avvikelserapport – gratis mall"
        intro="Dokumentera avvikelsen, orsaken, åtgärden och verifieringen och ladda ner en färdig avvikelserapport som PDF eller Excel. En spårbar avvikelsehantering skyddar dig mot vite och reklamation."
        tool={<AvvikelserapportMallTool />}
        leadForm={<ToolLeadForm tool="avvikelserapport-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/avvikelserapport-preview.webp"
            alt="Förhandsvisning av avvikelserapport-mallen"
            caption="Så ser avvikelserapport-mallen ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'kedjan',
            heading: 'Kedjan som håller: avvikelse → åtgärd → verifiering',
            body: (
              <p>
                Det räcker inte att notera att något blev fel. En hållbar avvikelsehantering visar orsaken, den
                korrigerande åtgärden och att åtgärden faktiskt verifierats. Det är den kedjan som gör dokumentationen
                användbar både internt och vid en tvist.
              </p>
            ),
          },
          {
            id: 'del-av-egenkontroll',
            heading: 'En del av egenkontrollen och KMA',
            body: (
              <p>
                Avvikelserapporten hör ihop med egenkontrollen och kvalitets-/KMA-planen. Låt återkommande avvikelser
                bli nya kontrollpunkter, så förbättras arbetet över tid i stället för att samma fel upprepas.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om avvikelserapport"
        faq={FAQ}
        cta={{
          heading: 'Egenkontroll och avvikelser i ByggExp',
          text: 'Koppla egenkontroller, avvikelser och uppgifter till rätt projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/egenkontroll`, label: 'Egenkontroll' },
          { href: `/${LOCALE}/blog/kontrollplan-mall-bygglov`, label: 'Kontrollplan för bygglov' },
          { href: `/${LOCALE}/blog/kma-plan-mall`, label: 'KMA-plan' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
