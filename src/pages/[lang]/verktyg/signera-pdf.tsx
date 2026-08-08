import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import SignPdfTool from '../../../components/LeadMagnet/SignPdfTool';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Är detta en juridiskt bindande e-signatur?',
    answer:
      'Nej. Verktyget lägger en visuell signatur (en bild) på PDF:en. För en juridiskt bindande e-signering används BankID eller en e-signeringstjänst – det är något annat.',
  },
  {
    question: 'Laddas min PDF upp någonstans?',
    answer:
      'Nej. Både PDF:en och signaturen behandlas lokalt i din webbläsare och skickas aldrig till någon server.',
  },
  {
    question: 'Kan jag välja var signaturen hamnar?',
    answer: 'Ja. Du väljer sida, placering (nere till höger, vänster eller mitten) och storlek.',
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

export default function SigneraPdfPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/signera-pdf`;
  const title = 'Signera PDF – rita din signatur gratis online | ByggExp';
  const description =
    'Signera en PDF genom att rita din signatur och placera den på dokumentet – gratis och direkt i webbläsaren. Inget konto, ingen uppladdning. Visuell signatur, ej BankID.';

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
        title="Signera PDF – rita din signatur"
        intro="Ladda upp en PDF, rita din signatur och placera den på dokumentet. Allt sker lokalt i din webbläsare – filen laddas aldrig upp. Gratis och utan konto. (Visuell signatur, inte BankID.)"
        tool={<SignPdfTool />}
        sections={[
          {
            id: 'sa-gor-du',
            heading: 'Så signerar du en PDF – steg för steg',
            body: (
              <ol>
                <li>Välj din PDF-fil.</li>
                <li>Rita din signatur i rutan med musen eller fingret.</li>
                <li>Välj sida, placering och storlek.</li>
                <li>Klicka på «Signera och ladda ner» – den signerade PDF:en laddas ner direkt.</li>
              </ol>
            ),
          },
          {
            id: 'visuell-vs-bankid',
            heading: 'Visuell signatur och BankID – vad är skillnaden?',
            body: (
              <p>
                Det här verktyget lägger en <strong>visuell signatur</strong> (en bild av din
                namnteckning) på PDF:en. Det räcker ofta internt eller för enklare dokument. För avtal
                som kräver en <strong>juridiskt bindande e-signering</strong> används BankID eller en
                e-signeringstjänst, som knyter signaturen till din identitet på ett säkert sätt – det
                är en annan typ av lösning.
              </p>
            ),
          },
          {
            id: 'anvandningsomraden',
            heading: 'Vanliga användningsområden',
            body: (
              <ul>
                <li>Signera en enklare bekräftelse eller intern blankett snabbt.</li>
                <li>Lägg din namnteckning på en egenkontroll eller ett protokoll.</li>
                <li>Skriv under ett dokument utan att först skriva ut och skanna det.</li>
              </ul>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om att signera PDF"
        faq={FAQ}
        cta={{
          heading: 'Samla och signera dokument i ByggExp',
          text: 'Håll offerter, protokoll och egenkontroller samlade per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/verktyg/vattenstampel-pdf`, label: 'Vattenstämpel i PDF' },
          { href: `/${LOCALE}/verktyg/sla-ihop-pdf`, label: 'Slå ihop PDF' },
          { href: `/${LOCALE}/verktyg/bild-till-pdf`, label: 'Bild till PDF' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
