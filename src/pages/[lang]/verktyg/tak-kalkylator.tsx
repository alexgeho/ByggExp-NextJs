import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import TakKalkylatorTool from '../../../components/LeadMagnet/TakKalkylatorTool';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur räknar jag ut takytan?',
    answer:
      'För ett sadeltak är takytan grundytan delat med cosinus av taklutningen: takyta = (längd × bredd) ÷ cos(lutning). Ju brantare tak, desto större yta än grundytan. Kalkylatorn gör beräkningen åt dig.',
  },
  {
    question: 'Hur många takpannor går det per kvadratmeter?',
    answer:
      'Det beror på pannmodellen – ofta runt 9–15 pannor per m². Ange pannor per m² från leverantören i kalkylatorn så får du en uppskattning av antalet.',
  },
  {
    question: 'Varför lägga på överhäng och spill?',
    answer:
      'Takfoten och gavelöverhäng ökar ytan jämfört med grundytan, och det blir alltid lite kap och spill. Ett påslag ger en säkrare materialmängd.',
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

export default function TakKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/tak-kalkylator`;
  const title = 'Takberäknare – räkna ut takyta och takpannor | ByggExp';
  const description =
    'Räkna ut takytan för ett sadeltak utifrån byggnadens mått och taklutning, plus antal takpannor. Gratis takberäknare, utan konto.';

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
        title="Takberäknare – räkna ut takytan"
        intro="Fyll i byggnadens mått och taklutning så räknar vi ut takytan för ett sadeltak och uppskattar antalet takpannor. Bra inför omläggning eller offert."
        tool={<TakKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/tak-preview.webp"
            alt="Förhandsvisning av takberäknare"
            caption="Så ser takberäknaren ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-raknar-du',
            heading: 'Så räknar du ut takytan',
            body: (
              <ol>
                <li>Mät byggnadens längd och bredd (grundytan).</li>
                <li>Ange taklutningen i grader.</li>
                <li>Lägg på ett påslag för överhäng och spill.</li>
                <li>Se takytan och en uppskattning av antalet takpannor.</li>
              </ol>
            ),
          },
          {
            id: 'formeln',
            heading: 'Formeln bakom',
            body: (
              <p>
                För ett symmetriskt sadeltak är takytan grundytan delat med cosinus av taklutningen.
                Ett brantare tak ger större yta – vid 45° är takytan cirka 1,4 gånger grundytan. För
                platta eller komplexa tak behöver du dela upp taket i delytor.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om takyta"
        faq={FAQ}
        cta={{
          heading: 'Skapa takofferter i ByggExp',
          text: 'Bygg offerter med material och arbete, och följ projektet från offert till faktura. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler byggkalkylatorer"
        related={[
          { href: `/${LOCALE}/verktyg/betong-kalkylator`, label: 'Betongberäknare' },
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
