import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import TakKalkylatorTool from '../../../components/LeadMagnet/TakKalkylatorTool';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur räknar jag ut takytan?',
    answer:
      'Takytan är grundytan (inkl. takutsprång) delat med cosinus av taklutningen: takyta = grundyta ÷ cos(lutning). Ju brantare tak, desto större yta än grundytan – vid 45° är takytan ca 1,4 gånger grundytan. Kalkylatorn gör det åt dig för både sadel- och pulpettak.',
  },
  {
    question: 'Hur många takpannor går det per kvadratmeter?',
    answer:
      'En betongpanna ligger ofta på ca 9–11 st/m² och en tegelpanna på ca 12–15 st/m². Kalkylatorn föreslår ett standardvärde per pannetyp som du kan justera efter din modell – kontrollera alltid tillverkarens läggningsanvisning.',
  },
  {
    question: 'Hur mycket bärläkt behöver jag?',
    answer:
      'Bärläkten löper vågrätt med ett läktavstånd som beror på pannmodellen (ofta 320–345 mm). Löpmetern blir takytan delat med läktavståndet. Räkna även med ströläkt (stående) och en marginal för kap.',
  },
  {
    question: 'Räknar den plåt- och papptak?',
    answer:
      'Ja. Väljer du plåt eller papp visar kalkylatorn takytan inkl. överlapp i m² i stället för antal pannor – dessa material säljs på rulle eller i skivor med överlapp.',
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
  const title = 'Takkalkylator 2026 – takyta, takpannor & läkt | ByggExp';
  const description =
    'Räkna ut takytan för sadel- eller pulpettak och hela materialet: takpannor, bärläkt i löpmeter och underlagspapp. Gratis takkalkylator, utan konto.';

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
        title="Takkalkylator"
        intro="Ange byggnadens mått, taklutning och taktäckning så räknar vi ut takytan och materialet: takpannor, bärläkt i löpmeter och underlagspapp. Takytan räknas per takfall – bra inför omläggning eller offert."
        tool={<TakKalkylatorTool />}
        leadForm={<ToolLeadForm tool="tak-kalkylator" />}
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
            heading: 'Det här räknar kalkylatorn ut',
            body: (
              <ul>
                <li><strong>Takyta:</strong> grundyta (inkl. utsprång) ÷ cos(taklutning), per takfall.</li>
                <li><strong>Takpannor:</strong> takyta × pannor per m² + spill.</li>
                <li><strong>Bärläkt:</strong> takyta ÷ läktavstånd (löpmeter).</li>
                <li><strong>Underlagspapp:</strong> takyta + ca 10 % överlapp.</li>
              </ul>
            ),
          },
          {
            id: 'formeln',
            heading: 'Takyta = grundyta ÷ cos(taklutning)',
            body: (
              <p>
                Ett brantare tak ger större yta än huset mäter på marken – vid 27° är takytan ca 1,12
                gånger grundytan, vid 45° ca 1,4 gånger. Glöm inte takutsprånget vid takfot och gavel,
                det ökar ytan ytterligare. För valmade eller komplexa tak delar du upp taket i delytor.
              </p>
            ),
          },
          {
            id: 'pannor-lakt',
            heading: 'Pannor och läkt beror på modellen',
            body: (
              <p>
                Betongpannor ligger ofta på ca 9–11 st/m² och tegelpannor på ca 12–15 st/m². Läktavståndet
                (ofta 320–345 mm) styrs av pannmodellens längd och takets lutning. Kalkylatorn använder
                typvärden per pannetyp – kontrollera alltid tillverkarens läggningsanvisning innan köp.
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
          { href: `/${LOCALE}/verktyg/takstolar-kalkylator`, label: 'Beräkna takstolar' },
          { href: `/${LOCALE}/verktyg/betong-kalkylator`, label: 'Betongberäknare' },
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
