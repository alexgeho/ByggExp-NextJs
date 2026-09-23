import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import ByggmotesprotokollMallTool from '../../../components/LeadMagnet/ByggmotesprotokollMallTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only lead magnet — see content-value-strategy. Serves "byggmötesprotokoll
// mall" / "byggmöte dagordning": the blog article of the same name promises a
// free template, this is it. Agenda mirrors that article.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska ett byggmötesprotokoll innehålla?',
    answer:
      'Mötesnummer, projekt, datum, tid och plats, vilka som närvarade, justering av föregående protokoll och sedan samma dagordning varje gång: ekonomi, tidplan, ÄTA-arbeten, hinder och förseningar, arbetsmiljö och KMA, kvalitet och besiktningar, beslut med ansvarig och datum samt nästa möte.',
  },
  {
    question: 'Vem skriver byggmötesprotokollet?',
    answer:
      'Det bestäms i kontraktet eller vid startmötet – ofta beställarens projektledare eller entreprenörens platschef. Det viktiga är att det är tydligt vem som för protokollet och att det justeras, så att alla parter står bakom innehållet.',
  },
  {
    question: 'Varför numrera byggmötena?',
    answer:
      'Med numrering (BM 1, BM 2, BM 3 …) kan ni alltid hänvisa till exakt rätt protokoll, till exempel när ett beslut om ÄTA eller en hinderanmälan ska styrkas i efterhand.',
  },
  {
    question: 'Räcker det att skriva att en fråga diskuterades?',
    answer:
      'Nej. Varje punkt bör avslutas med ett beslut, en ansvarig och ett datum. «Ansvarig: entreprenören, klart till nästa möte» är värt betydligt mer än en notering om att frågan togs upp.',
  },
  {
    question: 'Kostar mallen något?',
    answer: 'Nej, den är gratis och kräver inget konto. Fyll i online och ladda ner som PDF eller Excel.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function ByggmotesprotokollMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/byggmotesprotokoll-mall`;
  const title = 'Byggmötesprotokoll mall – gratis med dagordning (PDF) | ByggExp';
  const description =
    'Gratis byggmötesprotokoll-mall med färdig dagordning: ekonomi, tidplan, ÄTA, hinder, KMA, kvalitet och beslut med ansvarig. Fyll i online och ladda ner som PDF – utan konto.';

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
        title="Byggmötesprotokoll – gratis mall med dagordning"
        intro="Färdig mall för byggmötet med fast dagordning – ekonomi, tidplan, ÄTA-arbeten, hinder, arbetsmiljö och KMA, kvalitet och beslut med ansvarig. Fyll i online och ladda ner protokollet som PDF eller Excel. Gratis och utan konto."
        tool={<ByggmotesprotokollMallTool />}
        leadForm={<ToolLeadForm tool="byggmotesprotokoll-mall" />}
        preview={
          <PreviewImage
            src="/landing/blog/byggmotesprotokoll-mall.webp"
            alt="Byggmöte på arbetsplatsen där protokollet förs"
            caption="Byggmötet – med samma dagordning varje gång"
            width={1000}
            height={571}
          />
        }
        sections={[
          {
            id: 'dagordning-byggmote',
            heading: 'Dagordning för byggmötet',
            body: (
              <>
                <p>
                  Mallen följer samma dagordning varje gång, så att inget faller bort mellan mötena:
                </p>
                <ol>
                  <li><strong>Formalia</strong> – mötesnummer, projekt, datum, tid och plats.</li>
                  <li><strong>Närvaro</strong> – vilka parter och roller som deltar.</li>
                  <li><strong>Föregående protokoll</strong> – justering och eventuella invändningar.</li>
                  <li><strong>Ekonomi</strong> – fakturering, betalningar, prognos mot budget.</li>
                  <li><strong>Tidplan</strong> – status, avvikelser och åtgärder.</li>
                  <li><strong>ÄTA-arbeten</strong> – beställda, pågående och begärda ändringar och tillägg.</li>
                  <li><strong>Hinder och förseningar</strong> – anmälda hinder och konsekvenser för tidplanen.</li>
                  <li><strong>Arbetsmiljö och KMA</strong> – kvalitet, miljö och arbetsmiljö.</li>
                  <li><strong>Kvalitet och besiktningar</strong> – egenkontroller och kommande besiktningar.</li>
                  <li><strong>Beslut och åtgärder</strong> – vad, ansvarig och klart till.</li>
                  <li><strong>Nästa möte</strong> – datum, tid och plats.</li>
                </ol>
              </>
            ),
          },
          {
            id: 'sa-anvander-du-mallen',
            heading: 'Så använder du mallen',
            body: (
              <ol>
                <li>Fyll i projekt, mötesnummer, datum och vilka som närvarar.</li>
                <li>Börja med att justera föregående protokoll.</li>
                <li>Gå igenom punkterna i ordning och skriv ett beslut under varje punkt.</li>
                <li>Samla besluten med ansvarig och datum under «Beslut och åtgärder».</li>
                <li>Ladda ner protokollet som PDF, skicka ut det och låt det justeras.</li>
              </ol>
            ),
          },
          {
            id: 'protokollet-som-bevis',
            heading: 'Protokollet som bevis',
            body: (
              <p>
                Byggmötesprotokollet är ofta det dokument som visar vad parterna faktiskt kommit överens
                om – beställda ÄTA-arbeten, anmälda hinder och ändrade tider. Därför ska det numreras,
                justeras och sparas per projekt. Läs mer om dagordning, ansvar och skriftlighetskrav i
                artikeln <a href={`/${LOCALE}/blog/byggmotesprotokoll-mall`}>Byggmötesprotokoll – mall,
                dagordning och ansvar</a>.
              </p>
            ),
          },
          {
            id: 'byggmote-i-byggexp',
            heading: 'Så följer du upp besluten i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis. I ByggExp lägger du in besluten från protokollet som uppgifter med
                ansvarig person och påminnelser, så att inget vilar på minnet mellan mötena. ÄTA-arbeten,
                tidplan och dokumentation ligger samlat per projekt – på nästa byggmöte ser ni direkt vad
                som är klart och vad som släpar.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om byggmötesprotokoll"
        faq={FAQ}
        cta={{
          heading: 'Följ upp mötesbesluten i ByggExp',
          text: 'Beslut blir uppgifter med ansvarig och påminnelser – samlat per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/verktyg/ata-mall`, label: 'ÄTA – gratis mall' },
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
          { href: `/${LOCALE}/verktyg/gantt-schema-mall`, label: 'Gantt-schema – gratis mall' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
