import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import FargKalkylatorTool from '../../../components/LeadMagnet/FargKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur mycket färg går det åt per kvadratmeter?',
    answer:
      'Det beror på färgens täckförmåga, som ofta är 6–8 m² per liter och strykning. Med två strykningar går det alltså åt ungefär dubbelt så mycket. Täckförmågan står på burken.',
  },
  {
    question: 'Hur många strykningar behöver jag?',
    answer:
      'Oftast två strykningar för ett jämnt resultat, ibland tre på sugande eller kraftigt kulört underlag. Kalkylatorn räknar med det antal du anger.',
  },
  {
    question: 'Varför går det åt mer färg än beräknat?',
    answer:
      'Sugande, ojämna eller obehandlade underlag drar mer färg. Räkna gärna med lite marginal så att du inte får slut mitt i jobbet.',
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

export default function FargKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/farg-kalkylator`;
  const title = 'Färgåtgång kalkylator – hur mycket färg behöver du | ByggExp';
  const description =
    'Räkna ut färgåtgången: hur många liter färg du behöver utifrån yta, antal strykningar och täckförmåga. Gratis kalkylator för målning, utan konto.';

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
        title="Färgåtgång – hur mycket färg behöver du?"
        intro="Fyll i ytan, antal strykningar och färgens täckförmåga så räknar vi ut hur många liter färg du behöver. Bra inför både inomhus- och utomhusmålning."
        tool={<FargKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/farg-preview.webp"
            alt="Förhandsvisning av färgåtgång-kalkylator"
            caption="Så ser färgåtgång-kalkylatorn ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-raknar-du',
            heading: 'Så räknar du ut färgåtgången',
            body: (
              <ol>
                <li>Räkna ut ytan som ska målas i kvadratmeter.</li>
                <li>Ange antal strykningar (oftast två).</li>
                <li>Fyll i färgens täckförmåga (m² per liter) – står på burken.</li>
                <li>Se hur många liter du behöver och köp med lite marginal.</li>
              </ol>
            ),
          },
          {
            id: 'tips',
            heading: 'Tips för rätt mängd',
            body: (
              <p>
                Dra av stora fönster och dörrar från ytan om du vill vara exakt. Kom ihåg att grundfärg
                kan behövas på nytt eller sugande underlag, och att en tredje strykning kan krävas vid
                stora färgskillnader. Lite extra färg är billigare än ett extra inköp mitt i jobbet.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om färgåtgång"
        faq={FAQ}
        cta={{
          heading: 'Räkna material och tid i ByggExp',
          text: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler byggkalkylatorer"
        related={[
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg/betong-kalkylator`, label: 'Betongberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
