import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import SplitPdfTool from '../../../components/LeadMagnet/SplitPdfTool';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur anger jag vilka sidor jag vill ha?',
    answer:
      'Skriv sidnumren separerade med komma, och använd bindestreck för intervall. Till exempel 1,3,5-7 plockar ut sidorna 1, 3, 5, 6 och 7.',
  },
  {
    question: 'Laddas min PDF upp någonstans?',
    answer:
      'Nej. Filen behandlas lokalt i din webbläsare och skickas aldrig till någon server – tryggt även för känsliga dokument.',
  },
  {
    question: 'Kan jag plocka ut en enda sida?',
    answer:
      'Ja. Ange bara ett sidnummer, t.ex. 4, så får du en PDF med just den sidan.',
  },
  {
    question: 'Kostar det något?',
    answer:
      'Nej, verktyget är gratis och kräver inget konto. Vill du samla alla projektdokument på ett ställe kan du testa ByggExp.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function DelaPdfPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/dela-pdf`;

  const title = 'Dela PDF – extrahera sidor gratis online | ByggExp';
  const description =
    'Dela upp en PDF och plocka ut valfria sidor (t.ex. 1,3,5-7) – gratis och direkt i webbläsaren. Inget konto, ingen uppladdning: filen stannar på din dator.';

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
        badge="Gratis verktyg"
        title="Dela PDF – plocka ut de sidor du behöver"
        intro="Ladda upp en PDF och extrahera valfria sidor till en ny fil – t.ex. 1,3,5-7. Allt sker lokalt i din webbläsare, filen laddas aldrig upp någonstans. Gratis och utan konto."
        tool={<SplitPdfTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/dela-preview.webp"
            alt="Illustration: dela PDF och plocka ut sidor"
            caption="Plocka ut valfria sidor ur en PDF"
            width={1000}
            height={360}
          />
        }
        sections={[
          {
            id: 'sa-delar-du-pdf',
            heading: 'Så delar du en PDF – steg för steg',
            body: (
              <ol>
                <li>Välj din PDF-fil – antalet sidor visas direkt.</li>
                <li>Ange vilka sidor du vill ha, t.ex. 1,3,5-7.</li>
                <li>Klicka på «Extrahera sidor» – den nya PDF:en laddas ner direkt.</li>
              </ol>
            ),
          },
          {
            id: 'filen-stannar-hos-dig',
            heading: 'Filen stannar på din dator',
            body: (
              <p>
                Inget laddas upp till en server – hela bearbetningen körs i din webbläsare. Det gör det
                tryggt att dela upp offerter, avtal och ritningar utan att skicka dem vidare på nätet.
              </p>
            ),
          },
          {
            id: 'anvandningsomraden-bygg',
            heading: 'Vanliga användningsområden',
            body: (
              <ul>
                <li>Plocka ut rätt ritningssidor att skicka till en underentreprenör.</li>
                <li>Extrahera en enskild faktura eller ett intyg ur ett större dokument.</li>
                <li>Dela upp en stor projektpärm i mindre delar per moment.</li>
              </ul>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om att dela PDF"
        faq={FAQ}
        cta={{
          heading: 'Samla projektdokumenten i ByggExp',
          text: 'Offerter, fakturor, foton och egenkontroller per projekt – i en app från offert till lön. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/verktyg/sla-ihop-pdf`, label: 'Slå ihop PDF' },
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll – gratis mall' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
