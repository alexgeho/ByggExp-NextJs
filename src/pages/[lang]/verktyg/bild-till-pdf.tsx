import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import BildTillPdfTool from '../../../components/LeadMagnet/BildTillPdfTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
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
    metaTitle: 'Bild till PDF – JPG & PNG till PDF gratis | ByggExp',
    description:
      'Konvertera JPG- och PNG-bilder till PDF gratis och direkt i webbläsaren – en bild per sida. Inget konto, ingen uppladdning: bilderna stannar på din dator.',
    badge: 'Gratis verktyg',
    h1: 'Bild till PDF – gör en PDF av dina bilder',
    intro:
      'Konvertera JPG- och PNG-bilder till en enda PDF, en bild per sida. Allt sker lokalt i din webbläsare – bilderna laddas aldrig upp. Gratis och utan konto.',
    previewAlt: 'Illustration: bild till PDF',
    previewCaption: 'Gör en PDF av dina bilder',
    sections: [
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
    ],
    faqHeading: 'Vanliga frågor om bild till PDF',
    faq: [
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
    ],
    ctaHeading: 'Dokumentera bygget i ByggExp',
    ctaText: 'Ta foton direkt i appen och koppla dem till rätt projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler gratis verktyg',
    related: [
      { slug: 'sla-ihop-pdf', label: 'Slå ihop PDF' },
      { slug: 'dela-pdf', label: 'Dela PDF' },
      { slug: 'rotera-pdf', label: 'Rotera PDF' },
    ],
  },
  nb: {
    metaTitle: 'Bilde til PDF – JPG & PNG til PDF gratis | ByggExp',
    description:
      'Konverter JPG- og PNG-bilder til PDF gratis og direkte i nettleseren – ett bilde per side. Ingen konto, ingen opplasting: bildene forlater aldri datamaskinen din.',
    badge: 'Gratis verktøy',
    h1: 'Bilde til PDF – lag en PDF av bildene dine',
    intro:
      'Konverter JPG- og PNG-bilder til én enkelt PDF, ett bilde per side. Alt skjer lokalt i nettleseren din – bildene lastes aldri opp. Gratis og uten konto.',
    previewAlt: 'Illustrasjon: bilde til PDF',
    previewCaption: 'Lag en PDF av bildene dine',
    sections: [
      {
        id: 'sa-gor-du',
        heading: 'Slik lager du en PDF av bilder – steg for steg',
        body: (
          <ol>
            <li>Klikk på «Velg bilder» og legg til JPG- eller PNG-filene dine.</li>
            <li>Ordne bildene i riktig rekkefølge med pilene.</li>
            <li>Klikk på «Lag PDF» – filen lastes ned med en gang.</li>
          </ol>
        ),
      },
      {
        id: 'anvandningsomraden',
        heading: 'Vanlige bruksområder',
        body: (
          <ul>
            <li>Samle fotograferte kvitteringer til en PDF for regnskapet.</li>
            <li>Lag en PDF av bilder fra byggeplassen til dokumentasjonen.</li>
            <li>Send flere bilder som ett ryddig dokument i stedet for løse bilder.</li>
          </ul>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om bilde til PDF',
    faq: [
      {
        question: 'Hvilke bildeformater kan jeg bruke?',
        answer: 'JPG (JPEG) og PNG. Hvert bilde blir en egen side i PDF-en.',
      },
      {
        question: 'Lastes bildene mine opp noe sted?',
        answer:
          'Nei. Alt skjer lokalt i nettleseren din – bildene sendes aldri til noen server.',
      },
      {
        question: 'Kan jeg bestemme rekkefølgen på sidene?',
        answer: 'Ja. Flytt bildene opp og ned i listen før du lager PDF-en.',
      },
      {
        question: 'Koster det noe?',
        answer: 'Nei, verktøyet er gratis og krever ingen konto.',
      },
    ],
    ctaHeading: 'Dokumenter byggeplassen i ByggExp',
    ctaText: 'Ta bilder direkte i appen og koble dem til riktig prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere gratis verktøy',
    related: [
      { slug: 'sla-ihop-pdf', label: 'Slå sammen PDF' },
      { slug: 'dela-pdf', label: 'Dele PDF' },
      { slug: 'rotera-pdf', label: 'Rotere PDF' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/bild-till-pdf`;

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
        tool={<BildTillPdfTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/bild-till-pdf-preview.webp"
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
