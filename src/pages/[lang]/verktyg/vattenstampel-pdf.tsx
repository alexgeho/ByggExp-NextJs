import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import WatermarkPdfTool from '../../../components/LeadMagnet/WatermarkPdfTool';
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
    metaTitle: 'Vattenstämpel i PDF – lägg till watermark gratis | ByggExp',
    description:
      'Lägg till en vattenstämpel (t.ex. UTKAST eller KOPIA) på alla sidor i en PDF – gratis och direkt i webbläsaren. Inget konto, ingen uppladdning.',
    badge: 'Gratis verktyg',
    h1: 'Vattenstämpel i PDF – gratis online',
    intro:
      'Lägg en diagonal vattenstämpel som UTKAST eller KOPIA på alla sidor i en PDF. Allt sker lokalt i din webbläsare – filen laddas aldrig upp. Gratis och utan konto.',
    previewAlt: 'Illustration: vattenstämpel i PDF',
    previewCaption: 'Lägg en vattenstämpel på en PDF',
    sections: [
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
    ],
    faqHeading: 'Vanliga frågor om vattenstämpel i PDF',
    faq: [
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
    ],
    ctaHeading: 'Skapa proffsiga offerter i ByggExp',
    ctaText:
      'Bygg offerter, fakturor och dokument med företagets logotyp – samlat per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler gratis verktyg',
    related: [
      { slug: 'sla-ihop-pdf', label: 'Slå ihop PDF' },
      { slug: 'rotera-pdf', label: 'Rotera PDF' },
      { slug: 'bild-till-pdf', label: 'Bild till PDF' },
    ],
  },
  nb: {
    metaTitle: 'Vannmerke i PDF – legg til watermark gratis | ByggExp',
    description:
      'Legg til et vannmerke (f.eks. UTKAST eller KOPI) på alle sidene i en PDF – gratis og direkte i nettleseren. Ingen konto, ingen opplasting.',
    badge: 'Gratis verktøy',
    h1: 'Vannmerke i PDF – gratis online',
    intro:
      'Legg et diagonalt vannmerke som UTKAST eller KOPI på alle sidene i en PDF. Alt skjer lokalt i nettleseren din – filen lastes aldri opp. Gratis og uten konto.',
    previewAlt: 'Illustrasjon: vannmerke i PDF',
    previewCaption: 'Legg et vannmerke på en PDF',
    sections: [
      {
        id: 'sa-gor-du',
        heading: 'Slik legger du til et vannmerke – steg for steg',
        body: (
          <ol>
            <li>Velg PDF-filen din.</li>
            <li>Velg en ferdig tekst eller skriv en egen.</li>
            <li>Klikk på «Legg til vannmerke» – filen lastes ned med en gang.</li>
          </ol>
        ),
      },
      {
        id: 'nar-behovs-det',
        heading: 'Når er et vannmerke nyttig?',
        body: (
          <p>
            Merk et tilbud som UTKAST før det er godkjent, stemple en faktura som BETALT, eller
            merk sensitive tegninger som KONFIDENSIELT. Vannmerket gjør det tydelig hvordan et
            dokument skal tolkes og reduserer risikoen for misforståelser.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om vannmerke i PDF',
    faq: [
      {
        question: 'Legges vannmerket på alle sidene?',
        answer: 'Ja, den valgte teksten stemples diagonalt på hver side i dokumentet.',
      },
      {
        question: 'Lastes PDF-en min opp noe sted?',
        answer: 'Nei. Alt skjer lokalt i nettleseren din – filen sendes aldri til noen server.',
      },
      {
        question: 'Kan jeg velge egen tekst?',
        answer:
          'Ja. Skriv valgfri tekst, eller velg en ferdig som UTKAST, KOPI, KONFIDENSIELT eller BETALT.',
      },
      {
        question: 'Koster det noe?',
        answer: 'Nei, verktøyet er gratis og krever ingen konto.',
      },
    ],
    ctaHeading: 'Lag profesjonelle tilbud i ByggExp',
    ctaText:
      'Bygg tilbud, fakturaer og dokumenter med firmaets logo – samlet per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere gratis verktøy',
    related: [
      { slug: 'sla-ihop-pdf', label: 'Slå sammen PDF' },
      { slug: 'rotera-pdf', label: 'Rotere PDF' },
      { slug: 'bild-till-pdf', label: 'Bilde til PDF' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/vattenstampel-pdf`;

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
        tool={<WatermarkPdfTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/vattenstampel-preview.webp"
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
