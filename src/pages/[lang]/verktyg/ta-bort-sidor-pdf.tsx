import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import TaBortSidorTool from '../../../components/LeadMagnet/TaBortSidorTool';
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
    metaTitle: 'Ta bort sidor ur PDF – gratis online | ByggExp',
    description:
      'Ta bort valfria sidor ur en PDF (t.ex. 2,4) gratis och direkt i webbläsaren. Inget konto, ingen uppladdning: filen stannar på din dator.',
    badge: 'Gratis verktyg',
    h1: 'Ta bort sidor ur en PDF',
    intro:
      'Välj en PDF och ta bort de sidor du inte behöver – resten behålls som en ny fil. Allt sker lokalt i din webbläsare, filen laddas aldrig upp. Gratis och utan konto.',
    previewAlt: 'Illustration: ta bort sidor ur PDF',
    previewCaption: 'Ta bort sidor ur en PDF',
    sections: [
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
    ],
    faqHeading: 'Vanliga frågor om att ta bort sidor',
    faq: [
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
    ],
    ctaHeading: 'Samla projektdokumenten i ByggExp',
    ctaText: 'Offerter, fakturor, foton och egenkontroller per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler gratis verktyg',
    related: [
      { slug: 'dela-pdf', label: 'Dela PDF – extrahera sidor' },
      { slug: 'sla-ihop-pdf', label: 'Slå ihop PDF' },
      { slug: 'rotera-pdf', label: 'Rotera PDF' },
    ],
  },
  nb: {
    metaTitle: 'Fjerne sider fra PDF – gratis online | ByggExp',
    description:
      'Fjern valgfrie sider fra en PDF (f.eks. 2,4) gratis og direkte i nettleseren. Ingen konto, ingen opplasting: filen forblir på datamaskinen din.',
    badge: 'Gratis verktøy',
    h1: 'Fjerne sider fra en PDF',
    intro:
      'Velg en PDF og fjern sidene du ikke trenger – resten beholdes som en ny fil. Alt skjer lokalt i nettleseren din, filen lastes aldri opp. Gratis og uten konto.',
    previewAlt: 'Illustrasjon: fjerne sider fra PDF',
    previewCaption: 'Fjerne sider fra en PDF',
    sections: [
      {
        id: 'sa-gor-du',
        heading: 'Slik fjerner du sider – steg for steg',
        body: (
          <ol>
            <li>Velg PDF-filen din – antall sider vises med en gang.</li>
            <li>Angi hvilke sider som skal fjernes, f.eks. 2,4.</li>
            <li>Klikk på «Fjern sider» – den nye PDF-en lastes ned med en gang.</li>
          </ol>
        ),
      },
      {
        id: 'anvandningsomraden',
        heading: 'Vanlige bruksområder',
        body: (
          <ul>
            <li>Fjern en tom eller feil side fra et innskannet dokument.</li>
            <li>Rydd bort interne sider før du sender et tilbud til kunde.</li>
            <li>Kort ned en stor prosjektperm til det som er relevant.</li>
          </ul>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om å fjerne sider',
    faq: [
      {
        question: 'Hvordan angir jeg hvilke sider som skal fjernes?',
        answer:
          'Skriv sidetallene med komma, og bindestrek for intervall. For eksempel fjerner 2,4 sidene 2 og 4, mens 5-8 fjerner sidene 5 til 8.',
      },
      {
        question: 'Lastes PDF-en min opp noe sted?',
        answer: 'Nei. Alt skjer lokalt i nettleseren din – filen sendes aldri til noen server.',
      },
      {
        question: 'Hva skjer med resten av sidene?',
        answer: 'De beholdes i sin rekkefølge og lastes ned som en ny PDF.',
      },
      {
        question: 'Koster det noe?',
        answer: 'Nei, verktøyet er gratis og krever ingen konto.',
      },
    ],
    ctaHeading: 'Samle prosjektdokumentene i ByggExp',
    ctaText: 'Tilbud, fakturaer, bilder og egenkontroller per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere gratis verktøy',
    related: [
      { slug: 'dela-pdf', label: 'Dele PDF – hente ut sider' },
      { slug: 'sla-ihop-pdf', label: 'Slå sammen PDF' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/ta-bort-sidor-pdf`;

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
        tool={<TaBortSidorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/ta-bort-sidor-preview.webp"
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
