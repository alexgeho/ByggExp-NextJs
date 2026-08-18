import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import SplitPdfTool from '../../../components/LeadMagnet/SplitPdfTool';
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
    metaTitle: 'Dela PDF – extrahera sidor gratis online | ByggExp',
    description:
      'Dela upp en PDF och plocka ut valfria sidor (t.ex. 1,3,5-7) – gratis och direkt i webbläsaren. Inget konto, ingen uppladdning: filen stannar på din dator.',
    badge: 'Gratis verktyg',
    h1: 'Dela PDF – plocka ut de sidor du behöver',
    intro:
      'Ladda upp en PDF och extrahera valfria sidor till en ny fil – t.ex. 1,3,5-7. Allt sker lokalt i din webbläsare, filen laddas aldrig upp någonstans. Gratis och utan konto.',
    previewAlt: 'Illustration: dela PDF och plocka ut sidor',
    previewCaption: 'Plocka ut valfria sidor ur en PDF',
    sections: [
      {
        id: 'sa-delar-du-pdf',
        heading: 'Så delar du en PDF – steg för steg',
        body: (
          <ol>
            <li>Välj din PDF-fil – antalet sidor visas direkt.</li>
            <li>Ange vilka sidor du vill ha, t.ex. 1,3,5-7.</li>
            <li>Klicka på «Extrahera sidor» – den nya PDF:en laddas ner direkt.</li>
          </ol>
        ),
      },
      {
        id: 'filen-stannar-hos-dig',
        heading: 'Filen stannar på din dator',
        body: (
          <p>
            Inget laddas upp till en server – hela bearbetningen körs i din webbläsare. Det gör det
            tryggt att dela upp offerter, avtal och ritningar utan att skicka dem vidare på nätet.
          </p>
        ),
      },
      {
        id: 'anvandningsomraden-bygg',
        heading: 'Vanliga användningsområden',
        body: (
          <ul>
            <li>Plocka ut rätt ritningssidor att skicka till en underentreprenör.</li>
            <li>Extrahera en enskild faktura eller ett intyg ur ett större dokument.</li>
            <li>Dela upp en stor projektpärm i mindre delar per moment.</li>
          </ul>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om att dela PDF',
    faq: [
      {
        question: 'Hur anger jag vilka sidor jag vill ha?',
        answer:
          'Skriv sidnumren separerade med komma, och använd bindestreck för intervall. Till exempel 1,3,5-7 plockar ut sidorna 1, 3, 5, 6 och 7.',
      },
      {
        question: 'Laddas min PDF upp någonstans?',
        answer:
          'Nej. Filen behandlas lokalt i din webbläsare och skickas aldrig till någon server – tryggt även för känsliga dokument.',
      },
      {
        question: 'Kan jag plocka ut en enda sida?',
        answer:
          'Ja. Ange bara ett sidnummer, t.ex. 4, så får du en PDF med just den sidan.',
      },
      {
        question: 'Kostar det något?',
        answer:
          'Nej, verktyget är gratis och kräver inget konto. Vill du samla alla projektdokument på ett ställe kan du testa ByggExp.',
      },
    ],
    ctaHeading: 'Samla projektdokumenten i ByggExp',
    ctaText: 'Offerter, fakturor, foton och egenkontroller per projekt – i en app från offert till lön. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler gratis verktyg',
    related: [
      { slug: 'sla-ihop-pdf', label: 'Slå ihop PDF' },
      { slug: 'byggdagbok-mall', label: 'Byggdagbok – gratis mall' },
      { slug: 'egenkontroll-mall', label: 'Egenkontroll – gratis mall' },
    ],
  },
  nb: {
    metaTitle: 'Dele PDF – trekk ut sider gratis online | ByggExp',
    description:
      'Del opp en PDF og trekk ut valgfrie sider (f.eks. 1,3,5-7) – gratis og direkte i nettleseren. Ingen konto, ingen opplasting: filen forlater aldri datamaskinen din.',
    badge: 'Gratis verktøy',
    h1: 'Dele PDF – trekk ut sidene du trenger',
    intro:
      'Last opp en PDF og trekk ut valgfrie sider til en ny fil – f.eks. 1,3,5-7. Alt skjer lokalt i nettleseren din, filen lastes aldri opp noe sted. Gratis og uten konto.',
    previewAlt: 'Illustrasjon: dele PDF og trekke ut sider',
    previewCaption: 'Trekk ut valgfrie sider fra en PDF',
    sections: [
      {
        id: 'sa-delar-du-pdf',
        heading: 'Slik deler du en PDF – steg for steg',
        body: (
          <ol>
            <li>Velg PDF-filen din – antall sider vises med en gang.</li>
            <li>Angi hvilke sider du vil ha, f.eks. 1,3,5-7.</li>
            <li>Klikk på «Trekk ut sider» – den nye PDF-en lastes ned med en gang.</li>
          </ol>
        ),
      },
      {
        id: 'filen-stannar-hos-dig',
        heading: 'Filen forlater aldri datamaskinen din',
        body: (
          <p>
            Ingenting lastes opp til en server – hele behandlingen kjøres i nettleseren din. Det gjør det
            trygt å dele opp tilbud, avtaler og tegninger uten å sende dem videre på nettet.
          </p>
        ),
      },
      {
        id: 'anvandningsomraden-bygg',
        heading: 'Vanlige bruksområder',
        body: (
          <ul>
            <li>Trekk ut riktige tegningssider å sende til en underentreprenør.</li>
            <li>Trekk ut en enkelt faktura eller et sertifikat fra et større dokument.</li>
            <li>Del opp en stor prosjektperm i mindre deler per fase.</li>
          </ul>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om å dele PDF',
    faq: [
      {
        question: 'Hvordan angir jeg hvilke sider jeg vil ha?',
        answer:
          'Skriv sidetallene atskilt med komma, og bruk bindestrek for intervaller. For eksempel 1,3,5-7 trekker ut sidene 1, 3, 5, 6 og 7.',
      },
      {
        question: 'Lastes PDF-en min opp noe sted?',
        answer:
          'Nei. Filen behandles lokalt i nettleseren din og sendes aldri til noen server – trygt også for sensitive dokumenter.',
      },
      {
        question: 'Kan jeg trekke ut en enkelt side?',
        answer:
          'Ja. Angi bare ett sidetall, f.eks. 4, så får du en PDF med akkurat den siden.',
      },
      {
        question: 'Koster det noe?',
        answer:
          'Nei, verktøyet er gratis og krever ingen konto. Vil du samle alle prosjektdokumenter på ett sted kan du teste ByggExp.',
      },
    ],
    ctaHeading: 'Samle prosjektdokumentene i ByggExp',
    ctaText: 'Tilbud, fakturaer, bilder og egenkontroller per prosjekt – i én app fra tilbud til lønn. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere gratis verktøy',
    related: [
      { slug: 'sla-ihop-pdf', label: 'Slå sammen PDF' },
      { slug: 'byggdagbok-mall', label: 'Byggedagbok – gratis mal' },
      { slug: 'egenkontroll-mall', label: 'Egenkontroll – gratis mal' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/dela-pdf`;

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
        tool={<SplitPdfTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/dela-preview.webp"
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
