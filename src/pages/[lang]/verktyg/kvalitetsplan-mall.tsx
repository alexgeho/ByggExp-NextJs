import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import KvalitetsplanMallTool from '../../../components/LeadMagnet/KvalitetsplanMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är en kvalitetsplan?',
    answer:
      'En kvalitetsplan beskriver hur kvaliteten säkras, kontrolleras och dokumenteras i ett byggprojekt – krav och standarder, egenkontroll, avvikelsehantering, materialkontroll och överlämning. Den är kvalitetsdelen av en KMA-plan.',
  },
  {
    question: 'Måste ett litet byggföretag ha kvalitetsplan?',
    answer:
      'Beställare kräver ofta en kvalitetsplan i entreprenaden, och den hänger ihop med egenkontrollen enligt PBL. För mindre firmor räcker en nedbantad plan – det viktiga är att den faktiskt används.',
  },
  {
    question: 'Skillnaden mot en KMA-plan?',
    answer:
      'KMA står för Kvalitet, Miljö och Arbetsmiljö. Kvalitetsplanen är K-delen. Många mindre företag samlar allt i ett dokument, men kan lika gärna hålla isär kvalitet, miljö och arbetsmiljö.',
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

export default function KvalitetsplanMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/kvalitetsplan-mall`;
  const title = 'Kvalitetsplan mall bygg gratis (PDF & Excel) | ByggExp';
  const description =
    'Ladda ner en gratis kvalitetsplan-mall för bygg. Fyll i kvalitetsmål, egenkontroll, avvikelsehantering och dokumentation och få en färdig plan som PDF – nedbantad för mindre firmor.';

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
        title="Kvalitetsplan – gratis mall"
        intro="Fyll i projektets kvalitetsrutiner och ladda ner en färdig kvalitetsplan som PDF eller Excel. En nedbantad plan som täcker krav, egenkontroll, avvikelser, material och dokumentation – anpassad för mindre byggföretag."
        tool={<KvalitetsplanMallTool />}
        leadForm={<ToolLeadForm tool="kvalitetsplan-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/kvalitetsplan-preview.webp"
            alt="Förhandsvisning av kvalitetsplan-mallen"
            caption="Så ser kvalitetsplan-mallen ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'vad-ska-med',
            heading: 'Vad ska kvalitetsplanen innehålla?',
            body: (
              <ul>
                <li>Omfattning och kvalitetsmål för projektet.</li>
                <li>Krav och standarder som gäller (BBR, AMA, kontrakt).</li>
                <li>Egenkontroll och kontrollpunkter.</li>
                <li>Avvikelsehantering och materialkontroll.</li>
                <li>Dokumentation och överlämning.</li>
              </ul>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om kvalitetsplan"
        faq={FAQ}
        cta={{
          heading: 'Egenkontroll och kvalitet i ByggExp',
          text: 'Koppla egenkontroller, avvikelser och dokument till rätt projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/kma-plan-mall`, label: 'KMA-plan' },
          { href: `/${LOCALE}/blog/egenkontroll`, label: 'Egenkontroll' },
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll-mall' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
