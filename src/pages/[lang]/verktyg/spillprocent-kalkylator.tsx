import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import SpillprocentKalkylatorTool from '../../../components/LeadMagnet/SpillprocentKalkylatorTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur mycket spill ska jag räkna med?',
    answer:
      'Det beror på material och ytans komplexitet. Vanliga riktvärden är 5 % för enkla ytor och gjutning, 8–10 % för trall, klinker och gips, och upp till 15 % för komplexa tak och plåt med många skärningar.',
  },
  {
    question: 'Hur räknas bruttoåtgången?',
    answer:
      'Bruttoåtgång = nettoåtgång × (1 + spillprocent). 120 m² netto med 10 % spill blir 120 × 1,10 = 132 m² att beställa.',
  },
  {
    question: 'Varför behöver jag räkna med spill?',
    answer:
      'Kapspill, skärningar mot hörn och kassation gör att du alltid går åt mer material än den rena ytan. Räknar du utan spill riskerar du produktionsstopp och dyra efterbeställningar i fel bränning eller kulör.',
  },
  {
    question: 'Kostar kalkylatorn något?',
    answer: 'Nej, den är gratis och kräver inget konto.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function SpillprocentKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/spillprocent-kalkylator`;
  const title = 'Spillprocent kalkylator – räkna materialåtgång med spill | ByggExp';
  const description =
    'Räkna ut materialåtgång med spill gratis: ange nettoåtgång och välj material eller eget spillpåslag så får du bruttomängden att beställa. Riktvärden 5–15 %.';

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
        title="Spillprocent – räkna materialåtgång med spill"
        intro="Ange nettoåtgången och välj material eller ett eget spillpåslag. Kalkylatorn räknar ut hur mycket du behöver beställa när kapspill och kassation räknats in."
        tool={<SpillprocentKalkylatorTool />}
        leadForm={<ToolLeadForm tool="spillprocent-kalkylator" />}
        sections={[
          {
            id: 'riktvarden-spill',
            heading: 'Riktvärden för spill per material',
            body: (
              <ul>
                <li><strong>5 %</strong> – betong/gjutning, isolering, enkla rektangulära ytor.</li>
                <li><strong>8–10 %</strong> – trall, golvbräda, klinker, kakel, gips.</li>
                <li><strong>10–15 %</strong> – tak med kupor och valmar, plåt med många skärningar.</li>
              </ul>
            ),
          },
          {
            id: 'sa-minskar-du-spill',
            heading: 'Så håller du nere spillet',
            body: (
              <p>
                Planera läggningsriktning och skarvar, beställ rätt längder och samordna kap. Runda ändå alltid upp
                till hel förpackning – en pall för mycket är billigare än ett produktionsstopp och en efterleverans
                som riskerar att skilja sig i kulör eller bränning.
              </p>
            ),
          },
        ]}
        embedSlug="spillprocent-kalkylator"
        embedTitle="Spillprocent-kalkylator"
        faqHeading="Vanliga frågor om spill"
        faq={FAQ}
        cta={{
          heading: 'Kalkylera hela bygget i ByggExp',
          text: 'Samla materialåtgång, offert och inköp på ett ställe. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/spillprocent-bygg-material`, label: 'Guide: spillprocent' },
          { href: `/${LOCALE}/blog/rakna-material-till-bygget`, label: 'Räkna material till bygget' },
          { href: `/${LOCALE}/verktyg/betong-kalkylator`, label: 'Betong-kalkylator' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
