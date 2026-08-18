import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import RoteraPdfTool from '../../../components/LeadMagnet/RoteraPdfTool';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { toolLocaleEnabled, type ToolLocale } from '../../../lib/locale';
import { localeOrigin } from '../../../lib/seo';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv served on byggexp.se, nb served on byggexp.no (Norway expansion). Content is
// keyed by locale; the page renders whichever the [lang] segment asks for. nb is
// gated by NB_LIVE (see lib/locale) until byggexp.no goes live.
type Locale = ToolLocale;

type ToolContent = {
  metaTitle: string;
  description: string;
  badge: string;
  h1: string;
  intro: string;
  previewAlt: string;
  previewCaption: string;
  sections: { id: string; heading: string; body: ReactNode }[];
  faqHeading: string;
  faq: LeadMagnetFaqItem[];
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
  relatedHeading: string;
  related: { slug: string; label: string }[];
};

const CONTENT: Record<Locale, ToolContent> = {
  sv: {
    metaTitle: 'Rotera PDF – vrid sidor gratis online | ByggExp',
    description:
      'Rotera en PDF 90, 180 eller 270 grader gratis och direkt i webbläsaren. Inget konto, ingen uppladdning: filen stannar på din dator.',
    badge: 'Gratis verktyg',
    h1: 'Rotera PDF – vrid sidorna rätt',
    intro:
      'Vrid alla sidor i en PDF 90, 180 eller 270 grader. Allt sker lokalt i din webbläsare – filen laddas aldrig upp. Gratis och utan konto.',
    previewAlt: 'Illustration: rotera PDF',
    previewCaption: 'Rotera sidorna i en PDF',
    sections: [
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
    ],
    faqHeading: 'Vanliga frågor om att rotera PDF',
    faq: [
      {
        question: 'Roteras alla sidor?',
        answer: 'Ja, valt gradtal appliceras på alla sidor i dokumentet.',
      },
      {
        question: 'Laddas min PDF upp någonstans?',
        answer:
          'Nej. Rotationen sker lokalt i din webbläsare – filen skickas aldrig till någon server.',
      },
      {
        question: 'Blir kvaliteten sämre?',
        answer: 'Nej. Rotationen ändrar bara sidans orientering, inte innehållet eller kvaliteten.',
      },
      {
        question: 'Kostar det något?',
        answer: 'Nej, verktyget är gratis och kräver inget konto.',
      },
    ],
    ctaHeading: 'Håll ordning på dokumenten i ByggExp',
    ctaText: 'Samla ritningar, offerter och intyg per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler gratis verktyg',
    related: [
      { slug: 'sla-ihop-pdf', label: 'Slå ihop PDF' },
      { slug: 'dela-pdf', label: 'Dela PDF' },
      { slug: 'ta-bort-sidor-pdf', label: 'Ta bort sidor ur PDF' },
    ],
  },
  nb: {
    metaTitle: 'Rotere PDF – dreie sider gratis online | ByggExp',
    description:
      'Roter en PDF 90, 180 eller 270 grader gratis og direkte i nettleseren. Ingen konto, ingen opplasting: filen forblir på datamaskinen din.',
    badge: 'Gratis verktøy',
    h1: 'Rotere PDF – dreie sidene riktig',
    intro:
      'Drei alle sidene i en PDF 90, 180 eller 270 grader. Alt skjer lokalt i nettleseren din – filen lastes aldri opp. Gratis og uten konto.',
    previewAlt: 'Illustrasjon: rotere PDF',
    previewCaption: 'Rotere sidene i en PDF',
    sections: [
      {
        id: 'sa-gor-du',
        heading: 'Slik roterer du en PDF – steg for steg',
        body: (
          <ol>
            <li>Velg PDF-filen din.</li>
            <li>Velg hvor mye den skal roteres (90, 180 eller 270 grader).</li>
            <li>Klikk på «Roter PDF» – den roterte filen lastes ned med en gang.</li>
          </ol>
        ),
      },
      {
        id: 'nar-behovs-det',
        heading: 'Når trenger du å rotere en PDF?',
        body: (
          <p>
            Ofte når en tegning eller et innskannet dokument har havnet liggende eller opp ned.
            Med en rotasjon blir dokumentet lesbart og ryddig før du sender det videre til
            kunde, oppdragsgiver eller myndighet.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om å rotere PDF',
    faq: [
      {
        question: 'Roteres alle sidene?',
        answer: 'Ja, valgt gradtall brukes på alle sidene i dokumentet.',
      },
      {
        question: 'Lastes PDF-en min opp noe sted?',
        answer:
          'Nei. Rotasjonen skjer lokalt i nettleseren din – filen sendes aldri til noen server.',
      },
      {
        question: 'Blir kvaliteten dårligere?',
        answer: 'Nei. Rotasjonen endrer bare sidens orientering, ikke innholdet eller kvaliteten.',
      },
      {
        question: 'Koster det noe?',
        answer: 'Nei, verktøyet er gratis og krever ingen konto.',
      },
    ],
    ctaHeading: 'Hold orden på dokumentene i ByggExp',
    ctaText: 'Samle tegninger, tilbud og attester per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere gratis verktøy',
    related: [
      { slug: 'sla-ihop-pdf', label: 'Slå sammen PDF' },
      { slug: 'dela-pdf', label: 'Dele PDF' },
      { slug: 'ta-bort-sidor-pdf', label: 'Fjerne sider fra PDF' },
    ],
  },
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lang = params?.lang;
  if (!toolLocaleEnabled(lang)) {
    return { notFound: true };
  }
  return { props: { lang } };
};

export default function Page({ lang }: { lang: Locale }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/rotera-pdf`;

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.description} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: c.faq.map((item) => ({
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
        badge={c.badge}
        title={c.h1}
        intro={c.intro}
        tool={<RoteraPdfTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/rotera-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={360}
          />
        }
        sections={c.sections}
        faqHeading={c.faqHeading}
        faq={c.faq}
        cta={{
          heading: c.ctaHeading,
          text: c.ctaText,
          buttonLabel: c.ctaButton,
          href: `/${lang}/contact`,
        }}
        relatedHeading={c.relatedHeading}
        related={c.related.map((r) => ({
          href: `/${lang}/verktyg${r.slug ? `/${r.slug}` : ''}`,
          label: r.label,
        }))}
      />

      <Footer footerT={footerT} />
    </>
  );
}
