import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PdfTillJpgTool from '../../../components/LeadMagnet/PdfTillJpgTool';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad händer om PDF:en har flera sidor?',
    answer:
      'Varje sida blir en egen JPG-bild. En enda sida laddas ner som en .jpg, flera sidor packas ihop i en .zip-fil.',
  },
  {
    question: 'Laddas min PDF upp någonstans?',
    answer:
      'Nej. Hela konverteringen sker lokalt i din webbläsare – filen skickas aldrig till någon server.',
  },
  {
    question: 'Kan jag välja bildkvalitet?',
    answer: 'Ja. Välj standard, hög eller mycket hög kvalitet – högre kvalitet ger större filer.',
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

export default function PdfTillJpgPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/pdf-till-jpg`;
  const title = 'PDF till JPG – konvertera PDF till bilder gratis | ByggExp';
  const description =
    'Konvertera PDF till JPG gratis och direkt i webbläsaren – en bild per sida, flera sidor som zip. Inget konto, ingen uppladdning: filen stannar på din dator.';

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
        title="PDF till JPG – gör bilder av dina PDF-sidor"
        intro="Konvertera en PDF till JPG-bilder, en bild per sida. Allt sker lokalt i din webbläsare – filen laddas aldrig upp. Gratis och utan konto."
        tool={<PdfTillJpgTool />}
        sections={[
          {
            id: 'sa-gor-du',
            heading: 'Så konverterar du PDF till JPG – steg för steg',
            body: (
              <ol>
                <li>Välj din PDF-fil.</li>
                <li>Välj bildkvalitet.</li>
                <li>Klicka på «Konvertera till JPG» – bilden (eller zip-filen) laddas ner direkt.</li>
              </ol>
            ),
          },
          {
            id: 'anvandningsomraden',
            heading: 'Vanliga användningsområden',
            body: (
              <ul>
                <li>Lägg en ritningssida som bild i ett mejl eller en offert.</li>
                <li>Publicera en PDF-sida som bild på webben eller i sociala medier.</li>
                <li>Plocka ut en sida som bild när mottagaren inte kan öppna PDF.</li>
              </ul>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om PDF till JPG"
        faq={FAQ}
        cta={{
          heading: 'Håll ordning på dokumenten i ByggExp',
          text: 'Samla ritningar, offerter och foton per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/verktyg/bild-till-pdf`, label: 'Bild till PDF' },
          { href: `/${LOCALE}/verktyg/sla-ihop-pdf`, label: 'Slå ihop PDF' },
          { href: `/${LOCALE}/verktyg/dela-pdf`, label: 'Dela PDF' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
