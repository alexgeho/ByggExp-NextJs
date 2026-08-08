import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import BildTillPdfTool from '../../../components/LeadMagnet/BildTillPdfTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vilka bildformat kan jag använda?',
    answer: 'JPG (JPEG) och PNG. Varje bild blir en egen sida i PDF:en.',
  },
  {
    question: 'Laddas mina bilder upp någonstans?',
    answer:
      'Nej. Allt sker lokalt i din webbläsare – bilderna skickas aldrig till någon server.',
  },
  {
    question: 'Kan jag bestämma ordningen på sidorna?',
    answer: 'Ja. Flytta bilderna upp och ner i listan innan du skapar PDF:en.',
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

export default function BildTillPdfPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/bild-till-pdf`;
  const title = 'Bild till PDF – JPG & PNG till PDF gratis | ByggExp';
  const description =
    'Konvertera JPG- och PNG-bilder till PDF gratis och direkt i webbläsaren – en bild per sida. Inget konto, ingen uppladdning: bilderna stannar på din dator.';

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
        title="Bild till PDF – gör en PDF av dina bilder"
        intro="Konvertera JPG- och PNG-bilder till en enda PDF, en bild per sida. Allt sker lokalt i din webbläsare – bilderna laddas aldrig upp. Gratis och utan konto."
        tool={<BildTillPdfTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/bild-till-pdf-preview.webp"
            alt="Illustration: bild till PDF"
            caption="Gör en PDF av dina bilder"
            width={1000}
            height={360}
          />
        }
        sections={[
          {
            id: 'sa-gor-du',
            heading: 'Så gör du en PDF av bilder – steg för steg',
            body: (
              <ol>
                <li>Klicka på «Välj bilder» och lägg till dina JPG- eller PNG-filer.</li>
                <li>Ordna bilderna i rätt ordning med pilarna.</li>
                <li>Klicka på «Skapa PDF» – filen laddas ner direkt.</li>
              </ol>
            ),
          },
          {
            id: 'anvandningsomraden',
            heading: 'Vanliga användningsområden',
            body: (
              <ul>
                <li>Samla fotograferade kvitton till en PDF för bokföringen.</li>
                <li>Gör en PDF av bilder från bygget till dokumentationen.</li>
                <li>Skicka flera foton som ett prydligt dokument i stället för lösa bilder.</li>
              </ul>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om bild till PDF"
        faq={FAQ}
        cta={{
          heading: 'Dokumentera bygget i ByggExp',
          text: 'Ta foton direkt i appen och koppla dem till rätt projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/verktyg/sla-ihop-pdf`, label: 'Slå ihop PDF' },
          { href: `/${LOCALE}/verktyg/dela-pdf`, label: 'Dela PDF' },
          { href: `/${LOCALE}/verktyg/rotera-pdf`, label: 'Rotera PDF' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
