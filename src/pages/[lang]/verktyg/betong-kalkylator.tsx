import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import BetongKalkylatorTool from '../../../components/LeadMagnet/BetongKalkylatorTool';
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
    question: 'Hur räknar jag ut betongvolym?',
    answer:
      'För en platta är volymen längd × bredd × tjocklek i meter (5 × 4 × 0,10 = 2 m³). För en balk/grundmur längd × bredd × höjd, och för runda plintar π × radie² × djup × antal. Kalkylatorn väljer rätt formel utifrån vad du gjuter och lägger på spill.',
  },
  {
    question: 'Hur många säckar betong går det på en kubik?',
    answer:
      'En 25 kg säck torrbetong ger ofta ca 12,5 liter färdig betong, så en kubikmeter (1000 liter) motsvarar ungefär 80 säckar. En storsäck om 1000 kg ger ca 520 liter. Kontrollera alltid värdet på din förpackning.',
  },
  {
    question: 'Glöm inte kantbalken på en platta på mark',
    answer:
      'Den förtjockade kanten (kantbalken) rymmer förvånansvärt mycket betong. Välj "Kantbalk: Ja" och ange dess bredd och höjd så läggs volymen runt hela plattans omkrets till automatiskt.',
  },
  {
    question: 'Hur mycket vatten behöver jag blanda i?',
    answer:
      'Räkna med ca 3–4 liter vatten per 25 kg-säck. Kalkylatorn visar ett riktvärde för hela mängden – följ produktens anvisning för exakt konsistens.',
  },
  {
    question: 'När ska jag beställa färdig betong i stället för säck?',
    answer:
      'Från ungefär 1–2 m³ blir fabriksbetong (färdig betong som levereras med bil) oftast både billigare och enklare än att blanda många säckar för hand. För mindre jobb räcker säckbetong bra.',
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

export default function BetongKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/betong-kalkylator`;
  const title = 'Betongkalkylator 2026 – volym, säckar & vatten | ByggExp';
  const description =
    'Räkna ut betong för platta, grundbalk eller plintar: volym i m³, antal säckar torrbetong, blandningsvatten och armeringsnät. Gratis betongkalkylator, utan konto.';

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
        title="Betongkalkylator"
        intro="Välj vad du gjuter – platta, grundbalk eller plintar – så räknar vi ut betongvolym i kubikmeter, antal säckar torrbetong, blandningsvatten och armeringsnät. En säck 25 kg ger ca 12,5 liter färdig betong."
        tool={<BetongKalkylatorTool />}
        leadForm={<ToolLeadForm tool="betong-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/betong-preview.webp"
            alt="Förhandsvisning av betongberäknare"
            caption="Så ser betongberäknaren ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-raknar-du',
            heading: 'Så räknas volymen – per gjutning',
            body: (
              <ul>
                <li><strong>Platta / golv:</strong> längd × bredd × tjocklek. Med kantbalk läggs omkrets × kantbalkens bredd × höjd till.</li>
                <li><strong>Grundmur / balk:</strong> längd × bredd × höjd.</li>
                <li><strong>Plintar / stolphål (runda):</strong> π × radie² × djup, gånger antal hål.</li>
              </ul>
            ),
          },
          {
            id: 'volym-till-sackar',
            heading: 'Från volym till säckar och vatten',
            body: (
              <ul>
                <li>1 m³ = <strong>1000 liter</strong> betong.</li>
                <li>En säck <strong>25 kg</strong> torrbetong ≈ 12,5 liter → ca <strong>80 säckar per m³</strong>.</li>
                <li>En <strong>storsäck 1000 kg</strong> ≈ 520 liter.</li>
                <li>Blandningsvatten: ca <strong>3–4 liter per säck</strong>.</li>
              </ul>
            ),
          },
          {
            id: 'platta-kantbalk',
            heading: 'Platta på mark: glöm inte kantbalken',
            body: (
              <p>
                Den förtjockade kanten rymmer mer betong än man tror. Ett garage på 5 × 10 m ger
                ca 5 m³ i själva plattan men nästan 1 m³ till i kantbalken – räkna alltid med den,
                annars beställer du för lite.
              </p>
            ),
          },
          {
            id: 'sack-eller-fabriksbetong',
            heading: 'Säckbetong eller fabriksbetong?',
            body: (
              <p>
                För mindre jobb är säckbetong smidigt. Från ungefär 1–2 m³ blir fabriksbetong
                (färdig betong som levereras med bil) oftast både billigare och enklare än att
                blanda många säckar för hand – och du hinner gjuta innan betongen börjar binda.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om betong"
        faq={FAQ}
        cta={{
          heading: 'Håll koll på material och ekonomi i ByggExp',
          text: 'Följ material, tid och kostnader per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler byggkalkylatorer"
        related={[
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg/tak-kalkylator`, label: 'Takberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
