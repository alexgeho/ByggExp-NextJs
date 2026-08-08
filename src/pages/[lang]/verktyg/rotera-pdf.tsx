import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import RoteraPdfTool from '../../../components/LeadMagnet/RoteraPdfTool';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Roteras alla sidor?',
    answer: 'Ja, valt gradtal appliceras på alla sidor i dokumentet.',
  },
  {
    question: 'Laddas min PDF upp någonstans?',
    answer: 'Nej. Rotationen sker lokalt i din webbläsare – filen skickas aldrig till någon server.',
  },
  {
    question: 'Blir kvaliteten sämre?',
    answer: 'Nej. Rotationen ändrar bara sidans orientering, inte innehållet eller kvaliteten.',
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

export default function RoteraPdfPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/rotera-pdf`;
  const title = 'Rotera PDF – vrid sidor gratis online | ByggExp';
  const description =
    'Rotera en PDF 90, 180 eller 270 grader gratis och direkt i webbläsaren. Inget konto, ingen uppladdning: filen stannar på din dator.';

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
        title="Rotera PDF – vrid sidorna rätt"
        intro="Vrid alla sidor i en PDF 90, 180 eller 270 grader. Allt sker lokalt i din webbläsare – filen laddas aldrig upp. Gratis och utan konto."
        tool={<RoteraPdfTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/rotera-preview.webp"
            alt="Illustration: rotera PDF"
            caption="Rotera sidorna i en PDF"
            width={1000}
            height={360}
          />
        }
        sections={[
          {
            id: 'sa-gor-du',
            heading: 'Så roterar du en PDF – steg för steg',
            body: (
              <ol>
                <li>Välj din PDF-fil.</li>
                <li>Välj hur mycket den ska roteras (90, 180 eller 270 grader).</li>
                <li>Klicka på «Rotera PDF» – den roterade filen laddas ner direkt.</li>
              </ol>
            ),
          },
          {
            id: 'nar-behovs-det',
            heading: 'När behöver du rotera en PDF?',
            body: (
              <p>
                Ofta när en ritning eller ett inskannat dokument hamnat liggande eller upp och ner.
                Med en rotation blir dokumentet läsbart och prydligt innan du skickar det vidare till
                kund, beställare eller myndighet.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om att rotera PDF"
        faq={FAQ}
        cta={{
          heading: 'Håll ordning på dokumenten i ByggExp',
          text: 'Samla ritningar, offerter och intyg per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/verktyg/sla-ihop-pdf`, label: 'Slå ihop PDF' },
          { href: `/${LOCALE}/verktyg/dela-pdf`, label: 'Dela PDF' },
          { href: `/${LOCALE}/verktyg/ta-bort-sidor-pdf`, label: 'Ta bort sidor ur PDF' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
