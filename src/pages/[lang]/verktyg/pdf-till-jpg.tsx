import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PdfTillJpgTool from '../../../components/LeadMagnet/PdfTillJpgTool';
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
    metaTitle: 'PDF till JPG – konvertera PDF till bilder gratis | ByggExp',
    description:
      'Konvertera PDF till JPG gratis och direkt i webbläsaren – en bild per sida, flera sidor som zip. Inget konto, ingen uppladdning: filen stannar på din dator.',
    badge: 'Gratis verktyg',
    h1: 'PDF till JPG – gör bilder av dina PDF-sidor',
    intro:
      'Konvertera en PDF till JPG-bilder, en bild per sida. Allt sker lokalt i din webbläsare – filen laddas aldrig upp. Gratis och utan konto.',
    previewAlt: 'Illustration: PDF till JPG',
    previewCaption: 'Konvertera PDF till bilder',
    sections: [
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
    ],
    faqHeading: 'Vanliga frågor om PDF till JPG',
    faq: [
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
    ],
    ctaHeading: 'Håll ordning på dokumenten i ByggExp',
    ctaText: 'Samla ritningar, offerter och foton per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler gratis verktyg',
    related: [
      { slug: 'bild-till-pdf', label: 'Bild till PDF' },
      { slug: 'sla-ihop-pdf', label: 'Slå ihop PDF' },
      { slug: 'dela-pdf', label: 'Dela PDF' },
    ],
  },
  nb: {
    metaTitle: 'PDF til JPG – konverter PDF til bilder gratis | ByggExp',
    description:
      'Konverter PDF til JPG gratis og direkte i nettleseren – ett bilde per side, flere sider som zip. Ingen konto, ingen opplasting: filen forblir på datamaskinen din.',
    badge: 'Gratis verktøy',
    h1: 'PDF til JPG – lag bilder av PDF-sidene dine',
    intro:
      'Konverter en PDF til JPG-bilder, ett bilde per side. Alt skjer lokalt i nettleseren din – filen lastes aldri opp. Gratis og uten konto.',
    previewAlt: 'Illustrasjon: PDF til JPG',
    previewCaption: 'Konverter PDF til bilder',
    sections: [
      {
        id: 'sa-gor-du',
        heading: 'Slik konverterer du PDF til JPG – steg for steg',
        body: (
          <ol>
            <li>Velg PDF-filen din.</li>
            <li>Velg bildekvalitet.</li>
            <li>Klikk på «Konverter til JPG» – bildet (eller zip-filen) lastes ned med en gang.</li>
          </ol>
        ),
      },
      {
        id: 'anvandningsomraden',
        heading: 'Vanlige bruksområder',
        body: (
          <ul>
            <li>Legg en tegningsside som bilde i en e-post eller et tilbud.</li>
            <li>Publiser en PDF-side som bilde på nettet eller i sosiale medier.</li>
            <li>Hent ut en side som bilde når mottakeren ikke kan åpne PDF.</li>
          </ul>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om PDF til JPG',
    faq: [
      {
        question: 'Hva skjer hvis PDF-en har flere sider?',
        answer:
          'Hver side blir et eget JPG-bilde. En enkelt side lastes ned som en .jpg, flere sider pakkes sammen i en .zip-fil.',
      },
      {
        question: 'Lastes PDF-en min opp noe sted?',
        answer:
          'Nei. Hele konverteringen skjer lokalt i nettleseren din – filen sendes aldri til noen server.',
      },
      {
        question: 'Kan jeg velge bildekvalitet?',
        answer: 'Ja. Velg standard, høy eller svært høy kvalitet – høyere kvalitet gir større filer.',
      },
      {
        question: 'Koster det noe?',
        answer: 'Nei, verktøyet er gratis og krever ingen konto.',
      },
    ],
    ctaHeading: 'Hold orden på dokumentene i ByggExp',
    ctaText: 'Samle tegninger, tilbud og bilder per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere gratis verktøy',
    related: [
      { slug: 'bild-till-pdf', label: 'Bilde til PDF' },
      { slug: 'sla-ihop-pdf', label: 'Slå sammen PDF' },
      { slug: 'dela-pdf', label: 'Dele PDF' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/pdf-till-jpg`;

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
        tool={<PdfTillJpgTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/pdf-till-jpg-preview.webp"
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
