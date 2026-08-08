import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import WatermarkPdfTool from '../../../components/LeadMagnet/WatermarkPdfTool';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Läggs vattenstämpeln på alla sidor?',
    answer: 'Ja, den valda texten stämplas diagonalt på varje sida i dokumentet.',
  },
  {
    question: 'Laddas min PDF upp någonstans?',
    answer: 'Nej. Allt sker lokalt i din webbläsare – filen skickas aldrig till någon server.',
  },
  {
    question: 'Kan jag välja egen text?',
    answer:
      'Ja. Skriv valfri text, eller välj en färdig som UTKAST, KOPIA, KONFIDENTIELLT eller BETALD.',
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

export default function VattenstampelPdfPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/vattenstampel-pdf`;
  const title = 'Vattenstämpel i PDF – lägg till watermark gratis | ByggExp';
  const description =
    'Lägg till en vattenstämpel (t.ex. UTKAST eller KOPIA) på alla sidor i en PDF – gratis och direkt i webbläsaren. Inget konto, ingen uppladdning.';

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
        title="Vattenstämpel i PDF – gratis online"
        intro="Lägg en diagonal vattenstämpel som UTKAST eller KOPIA på alla sidor i en PDF. Allt sker lokalt i din webbläsare – filen laddas aldrig upp. Gratis och utan konto."
        tool={<WatermarkPdfTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/vattenstampel-preview.webp"
            alt="Illustration: vattenstämpel i PDF"
            caption="Lägg en vattenstämpel på en PDF"
            width={1000}
            height={360}
          />
        }
        sections={[
          {
            id: 'sa-gor-du',
            heading: 'Så lägger du till en vattenstämpel – steg för steg',
            body: (
              <ol>
                <li>Välj din PDF-fil.</li>
                <li>Välj en färdig text eller skriv en egen.</li>
                <li>Klicka på «Lägg till vattenstämpel» – filen laddas ner direkt.</li>
              </ol>
            ),
          },
          {
            id: 'nar-behovs-det',
            heading: 'När är en vattenstämpel bra?',
            body: (
              <p>
                Markera en offert som UTKAST innan den är godkänd, stämpla en faktura som BETALD, eller
                märk känsliga ritningar som KONFIDENTIELLT. Vattenstämpeln gör det tydligt hur ett
                dokument ska tolkas och minskar risken för missförstånd.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om vattenstämpel i PDF"
        faq={FAQ}
        cta={{
          heading: 'Skapa proffsiga offerter i ByggExp',
          text: 'Bygg offerter, fakturor och dokument med företagets logotyp – samlat per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/verktyg/sla-ihop-pdf`, label: 'Slå ihop PDF' },
          { href: `/${LOCALE}/verktyg/rotera-pdf`, label: 'Rotera PDF' },
          { href: `/${LOCALE}/verktyg/bild-till-pdf`, label: 'Bild till PDF' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
