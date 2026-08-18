import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import SignPdfTool from '../../../components/LeadMagnet/SignPdfTool';
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
    metaTitle: 'Signera PDF – rita din signatur gratis online | ByggExp',
    description:
      'Signera en PDF genom att rita din signatur och placera den på dokumentet – gratis och direkt i webbläsaren. Inget konto, ingen uppladdning. Visuell signatur, ej BankID.',
    badge: 'Gratis verktyg',
    h1: 'Signera PDF – rita din signatur',
    intro:
      'Ladda upp en PDF, rita din signatur och placera den på dokumentet. Allt sker lokalt i din webbläsare – filen laddas aldrig upp. Gratis och utan konto. (Visuell signatur, inte BankID.)',
    previewAlt: 'Illustration: signera PDF',
    previewCaption: 'Signera en PDF med din namnteckning',
    sections: [
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
    ],
    faqHeading: 'Vanliga frågor om att signera PDF',
    faq: [
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
    ],
    ctaHeading: 'Samla och signera dokument i ByggExp',
    ctaText: 'Håll offerter, protokoll och egenkontroller samlade per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler gratis verktyg',
    related: [
      { slug: 'vattenstampel-pdf', label: 'Vattenstämpel i PDF' },
      { slug: 'sla-ihop-pdf', label: 'Slå ihop PDF' },
      { slug: 'bild-till-pdf', label: 'Bild till PDF' },
    ],
  },
  nb: {
    metaTitle: 'Signere PDF – tegn signaturen din gratis online | ByggExp',
    description:
      'Signer en PDF ved å tegne signaturen din og plassere den på dokumentet – gratis og direkte i nettleseren. Ingen konto, ingen opplasting. Visuell signatur, ikke BankID.',
    badge: 'Gratis verktøy',
    h1: 'Signere PDF – tegn signaturen din',
    intro:
      'Last opp en PDF, tegn signaturen din og plasser den på dokumentet. Alt skjer lokalt i nettleseren din – filen lastes aldri opp. Gratis og uten konto. (Visuell signatur, ikke BankID.)',
    previewAlt: 'Illustrasjon: signere PDF',
    previewCaption: 'Signer en PDF med signaturen din',
    sections: [
      {
        id: 'sa-gor-du',
        heading: 'Slik signerer du en PDF – steg for steg',
        body: (
          <ol>
            <li>Velg PDF-filen din.</li>
            <li>Tegn signaturen din i ruten med musen eller fingeren.</li>
            <li>Velg side, plassering og størrelse.</li>
            <li>Klikk på «Signer og last ned» – den signerte PDF-en lastes ned med en gang.</li>
          </ol>
        ),
      },
      {
        id: 'visuell-vs-bankid',
        heading: 'Visuell signatur og BankID – hva er forskjellen?',
        body: (
          <p>
            Dette verktøyet legger en <strong>visuell signatur</strong> (et bilde av signaturen
            din) på PDF-en. Det holder ofte internt eller for enklere dokumenter. For avtaler
            som krever en <strong>juridisk bindende e-signering</strong> brukes BankID eller en
            e-signeringstjeneste, som knytter signaturen til identiteten din på en sikker måte – det
            er en annen type løsning.
          </p>
        ),
      },
      {
        id: 'anvandningsomraden',
        heading: 'Vanlige bruksområder',
        body: (
          <ul>
            <li>Signer en enklere bekreftelse eller internt skjema raskt.</li>
            <li>Legg signaturen din på en egenkontroll eller en protokoll.</li>
            <li>Skriv under et dokument uten å først skrive ut og skanne det.</li>
          </ul>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om å signere PDF',
    faq: [
      {
        question: 'Er dette en juridisk bindende e-signatur?',
        answer:
          'Nei. Verktøyet legger en visuell signatur (et bilde) på PDF-en. For en juridisk bindende e-signering brukes BankID eller en e-signeringstjeneste – det er noe annet.',
      },
      {
        question: 'Lastes PDF-en min opp noe sted?',
        answer:
          'Nei. Både PDF-en og signaturen behandles lokalt i nettleseren din og sendes aldri til noen server.',
      },
      {
        question: 'Kan jeg velge hvor signaturen havner?',
        answer: 'Ja. Du velger side, plassering (nede til høyre, venstre eller midten) og størrelse.',
      },
      {
        question: 'Koster det noe?',
        answer: 'Nei, verktøyet er gratis og krever ingen konto.',
      },
    ],
    ctaHeading: 'Samle og signer dokumenter i ByggExp',
    ctaText: 'Hold tilbud, protokoller og egenkontroller samlet per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere gratis verktøy',
    related: [
      { slug: 'vattenstampel-pdf', label: 'Vannmerke i PDF' },
      { slug: 'sla-ihop-pdf', label: 'Slå sammen PDF' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/signera-pdf`;

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
        tool={<SignPdfTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/signera-preview.webp"
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
