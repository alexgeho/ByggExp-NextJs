import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import BetongKalkylatorTool from '../../../components/LeadMagnet/BetongKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur räknar jag ut betongvolym?',
    answer:
      'Volymen är längd × bredd × tjocklek i meter. En platta på 5 × 4 m med 10 cm tjocklek blir 5 × 4 × 0,10 = 2 m³. Kalkylatorn gör det åt dig och lägger på spill.',
  },
  {
    question: 'Hur många säckar betong går det på en kubik?',
    answer:
      'Det beror på säckens volym. En 25 kg säck ger ofta ca 12,5 liter färdig betong, så en kubikmeter (1000 liter) motsvarar ungefär 80 säckar. Kontrollera värdet på din förpackning.',
  },
  {
    question: 'När ska jag beställa färdig betong i stället för säck?',
    answer:
      'Vid större gjutningar blir färdig betong (fabriksbetong) oftast både billigare och enklare än att blanda många säckar. För mindre jobb räcker säckbetong bra.',
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
  const title = 'Betongberäknare – räkna ut betong (m³ & säckar) | ByggExp';
  const description =
    'Räkna ut hur mycket betong du behöver: volym i kubikmeter och antal säckar utifrån mått. Gratis betongberäknare för platta, grund och gjutning. Utan konto.';

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
        title="Betongberäknare – räkna ut betong"
        intro="Fyll i längd, bredd och tjocklek så räknar vi ut betongvolymen i kubikmeter och antalet säckar. Perfekt för platta, grund och mindre gjutningar."
        tool={<BetongKalkylatorTool />}
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
            heading: 'Så räknar du ut betongåtgången',
            body: (
              <ol>
                <li>Mät längd och bredd på ytan som ska gjutas.</li>
                <li>Ange tjockleken i centimeter.</li>
                <li>Lägg på lite spill för svinn och ojämnt underlag.</li>
                <li>Se volymen i kubikmeter och antal säckar – justera säckens volym efter din produkt.</li>
              </ol>
            ),
          },
          {
            id: 'sack-eller-fabriksbetong',
            heading: 'Säckbetong eller fabriksbetong?',
            body: (
              <p>
                För mindre jobb är säckbetong smidigt. Vid större gjutningar – till exempel en hel
                platta eller grund – blir fabriksbetong (färdig betong som levereras) oftast både
                billigare och enklare än att blanda många säckar för hand.
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
