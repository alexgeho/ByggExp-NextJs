import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import SchemaMallTool from '../../../components/LeadMagnet/SchemaMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only lead magnet — see content-value-strategy. Served on /sv, 404 elsewhere.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Kan jag ladda ner en tom schema-mall?',
    answer:
      'Ja. Klicka på "Ladda ner tom mall" ovan så får du ett färdigt, tomt veckoschema som PDF (eller Excel) att skriva ut och fylla i för hand.',
  },
  {
    question: 'Vad ska ett arbetsschema innehålla?',
    answer:
      'Vem som jobbar, vilka dagar och vilka tider (pass), gärna kopplat till avdelning eller projekt. Mallen ovan har en rad per person och en kolumn per veckodag, måndag till söndag.',
  },
  {
    question: 'Vad är skillnaden mellan arbetsschema och tidrapport?',
    answer:
      'Arbetsschemat är planen framåt – vem som ska jobba när. Tidrapporten är utfallet i efterhand – hur många timmar som faktiskt arbetades, som underlag för lön och faktura. Du behöver båda.',
  },
  {
    question: 'Kan jag ladda ner schemat i Excel?',
    answer:
      'Ja. Utöver PDF kan du ladda ner arbetsschemat som Excel (CSV) direkt från mallen ovan och redigera det vidare.',
  },
  {
    question: 'Hur gör jag ett veckoschema för personalen?',
    answer:
      'Fyll i namn på varje medarbetare och skriv passet (t.ex. 07–16) under respektive dag. Summera vid behov och skriv ut. I ByggExp kan schemat i stället delas digitalt till hela laget och kopplas till projekt och tid.',
  },
  {
    question: 'Passar mallen för ett rullande schema?',
    answer:
      'Ja. Skriv ut ett veckoschema per vecka i rotationen, eller ladda ner flera tomma mallar och fyll i veckorna. För ett återkommande rullande schema över flera veckor är ett schemaläggningssystem smidigare än en pappersmall.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function SchemaMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/schema-mall`;

  const title = 'Schema-mall – gratis arbetsschema i PDF & Excel | ByggExp';
  const description =
    'Gratis schema-mall (veckoschema) för personal – fyll i namn och pass per dag och ladda ner som PDF eller Excel. Eller ladda ner en tom schema-mall att fylla i för hand.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
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
        title="Schema-mall – gratis arbetsschema för veckan"
        intro="Gör ett veckoschema för personalen: skriv namn och pass per dag och ladda ner som PDF eller Excel. Vill du hellre skriva för hand? Ladda ner en tom schema-mall och fyll i på papper."
        tool={<SchemaMallTool />}
        leadForm={<ToolLeadForm tool="schema-mall" />}
        sections={[
          {
            id: 'vad-ar-arbetsschema',
            heading: 'Vad är ett arbetsschema?',
            body: (
              <>
                <p>
                  Ett arbetsschema (eller veckoschema) är planen för vem som jobbar när: en rad per
                  medarbetare och en kolumn per dag, med passet ifyllt. Det ger hela laget samma bild av
                  veckan och gör det enkelt att se att varje dag är bemannad – utan dubbelbokningar.
                </p>
                <p>
                  För ett byggföretag hänger schemat ihop med både bemanning och tid: rätt personer ska
                  vara på rätt bygge, och de planerade timmarna ska sedan gå att stämma av mot de som
                  faktiskt loggas.
                </p>
              </>
            ),
          },
          {
            id: 'vad-ska-schema-innehalla',
            heading: 'Vad ska ett arbetsschema innehålla?',
            body: (
              <ul>
                <li>Namn på varje medarbetare.</li>
                <li>En kolumn per veckodag, måndag till söndag.</li>
                <li>Passet eller arbetstiden per dag, till exempel 07–16.</li>
                <li>Vilken vecka schemat gäller.</li>
                <li>Gärna avdelning eller projekt, om ni kör flera samtidigt.</li>
              </ul>
            ),
          },
          {
            id: 'tips-schemalaggning',
            heading: 'Tips för schemaläggning',
            body: (
              <ul>
                <li>Planera hela veckan i förväg så att laget vet vad som gäller redan på måndag.</li>
                <li>Markera frånvaro (semester, sjuk) så att ingen bokas som är ledig.</li>
                <li>Kontrollera att samma person inte hamnar på två ställen samtidigt.</li>
                <li>Dela schemat i tid – ett schema som når fram sent skapar bara missförstånd.</li>
              </ul>
            ),
          },
          {
            id: 'schema-i-byggexp',
            heading: 'Så slipper du pussla schemat för hand',
            body: (
              <p>
                Mallen ovan är gratis att använda. När laget växer blir pappersschemat snabbt rörigt – då
                är ett{' '}
                <a href={`/${LOCALE}/blog/schemalaggningssystem-bygg`}>schemaläggningssystem</a> smidigare:
                du planerar{' '}
                <a href={`/${LOCALE}/blog/personalplanering-bygg`}>bemanningen</a> per projekt, ser{' '}
                <a href={`/${LOCALE}/blog/resursplanering-bygg`}>beläggningen</a> tvärs över byggena och
                delar planen direkt till mobilen. Dessutom kan du jämföra planerad tid med den som
                faktiskt rapporteras, så att schemat och verkligheten hänger ihop.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om schema-mall"
        faq={FAQ}
        cta={{
          heading: 'Digital schemaläggning i ByggExp',
          text: 'Planera personal per projekt, dela schemat till laget i mobilen och koppla det till tiden. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/blog/schemalaggningssystem-bygg`, label: 'Schemaläggningssystem för bygg' },
          { href: `/${LOCALE}/blog/personalplanering-bygg`, label: 'Bemanning & personalplanering' },
          { href: `/${LOCALE}/verktyg/gantt-schema-mall`, label: 'Gantt-schema / tidsplan – mall' },
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport – gratis mall' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
