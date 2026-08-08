import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import MergePdfTool from '../../../components/LeadMagnet/MergePdfTool';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Laddas mina filer upp någonstans?',
    answer:
      'Nej. Hela sammanslagningen sker lokalt i din webbläsare – filerna skickas aldrig till någon server. Det gör verktyget snabbt och tryggt även för känsliga dokument.',
  },
  {
    question: 'Kan jag slå ihop bilder och PDF till samma fil?',
    answer:
      'Ja. Du kan blanda PDF-filer och bilder (PNG/JPG) – varje bild läggs som en egen sida i den sammanslagna PDF:en.',
  },
  {
    question: 'Kan jag bestämma ordningen på sidorna?',
    answer:
      'Ja. Flytta filerna upp och ner i listan innan du slår ihop dem, så hamnar sidorna i den ordning du vill.',
  },
  {
    question: 'Kostar det något?',
    answer:
      'Nej, verktyget är gratis och kräver inget konto. Behöver du hantera dokument, offerter och fakturor samlat kan du testa ByggExp.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function SlaIhopPdfPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/sla-ihop-pdf`;

  const title = 'Slå ihop PDF – gratis online utan uppladdning | ByggExp';
  const description =
    'Slå ihop flera PDF-filer (och bilder) till en enda PDF – gratis och direkt i webbläsaren. Inget konto, ingen uppladdning: filerna stannar på din dator.';

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
        title="Slå ihop PDF – gratis och direkt i webbläsaren"
        intro="Kombinera flera PDF-filer, eller PDF och bilder, till ett enda dokument. Allt sker lokalt i din webbläsare – filerna laddas aldrig upp någonstans. Gratis och utan konto."
        tool={<MergePdfTool />}
        sections={[
          {
            id: 'sa-slar-du-ihop-pdf',
            heading: 'Så slår du ihop PDF – steg för steg',
            body: (
              <ol>
                <li>Klicka på «Välj filer» och lägg till de PDF:er eller bilder du vill kombinera.</li>
                <li>Ordna filerna i rätt ordning med pilarna.</li>
                <li>Klicka på «Slå ihop till PDF» – den färdiga filen laddas ner direkt.</li>
              </ol>
            ),
          },
          {
            id: 'filerna-stannar-hos-dig',
            heading: 'Dina filer stannar på din dator',
            body: (
              <p>
                Till skillnad från många andra tjänster laddas ingenting upp till en server. Hela
                sammanslagningen körs i din webbläsare, vilket gör verktyget snabbt och tryggt även för
                offerter, ritningar och avtal som du inte vill skicka runt på nätet.
              </p>
            ),
          },
          {
            id: 'anvandningsomraden-bygg',
            heading: 'Vanliga användningsområden för byggföretag',
            body: (
              <ul>
                <li>Slå ihop offert, ritningar och bilder till ett dokument innan du skickar till kund.</li>
                <li>Samla alla fakturor för ett projekt i en fil.</li>
                <li>Kombinera fotograferade kvitton (bilder) till en PDF för bokföringen.</li>
                <li>Lägg ihop egenkontroller och intyg till en komplett projektpärm.</li>
              </ul>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om att slå ihop PDF"
        faq={FAQ}
        cta={{
          heading: 'Håll ordning på dokumenten i ByggExp',
          text: 'Samla offerter, fakturor, foton och egenkontroller per projekt – i en app från offert till lön. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/verktyg/dela-pdf`, label: 'Dela PDF – extrahera sidor' },
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport – gratis mall' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
