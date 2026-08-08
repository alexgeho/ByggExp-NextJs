import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import TaBortSidorTool from '../../../components/LeadMagnet/TaBortSidorTool';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur anger jag vilka sidor som ska tas bort?',
    answer:
      'Skriv sidnumren med komma, och bindestreck för intervall. Till exempel 2,4 tar bort sidorna 2 och 4, medan 5-8 tar bort sidorna 5 till 8.',
  },
  {
    question: 'Laddas min PDF upp någonstans?',
    answer: 'Nej. Allt sker lokalt i din webbläsare – filen skickas aldrig till någon server.',
  },
  {
    question: 'Vad händer med resten av sidorna?',
    answer: 'De behålls i sin ordning och laddas ner som en ny PDF.',
  },
  {
    question: 'Kostar det något?',
    answer: 'Nej, verktyget är gratis och kräver inget konto.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function TaBortSidorPdfPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/ta-bort-sidor-pdf`;
  const title = 'Ta bort sidor ur PDF – gratis online | ByggExp';
  const description =
    'Ta bort valfria sidor ur en PDF (t.ex. 2,4) gratis och direkt i webbläsaren. Inget konto, ingen uppladdning: filen stannar på din dator.';

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
        title="Ta bort sidor ur en PDF"
        intro="Välj en PDF och ta bort de sidor du inte behöver – resten behålls som en ny fil. Allt sker lokalt i din webbläsare, filen laddas aldrig upp. Gratis och utan konto."
        tool={<TaBortSidorTool />}
        sections={[
          {
            id: 'sa-gor-du',
            heading: 'Så tar du bort sidor – steg för steg',
            body: (
              <ol>
                <li>Välj din PDF-fil – antalet sidor visas direkt.</li>
                <li>Ange vilka sidor som ska tas bort, t.ex. 2,4.</li>
                <li>Klicka på «Ta bort sidor» – den nya PDF:en laddas ner direkt.</li>
              </ol>
            ),
          },
          {
            id: 'anvandningsomraden',
            heading: 'Vanliga användningsområden',
            body: (
              <ul>
                <li>Ta bort en tom eller felaktig sida ur ett inskannat dokument.</li>
                <li>Rensa bort interna sidor innan du skickar en offert till kund.</li>
                <li>Korta ner en stor projektpärm till det som är relevant.</li>
              </ul>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om att ta bort sidor"
        faq={FAQ}
        cta={{
          heading: 'Samla projektdokumenten i ByggExp',
          text: 'Offerter, fakturor, foton och egenkontroller per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/verktyg/dela-pdf`, label: 'Dela PDF – extrahera sidor' },
          { href: `/${LOCALE}/verktyg/sla-ihop-pdf`, label: 'Slå ihop PDF' },
          { href: `/${LOCALE}/verktyg/rotera-pdf`, label: 'Rotera PDF' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
