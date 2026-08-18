import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import TimprisKalkylatorTool from '../../../components/LeadMagnet/TimprisKalkylatorTool';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
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
  // href is locale-relative (path after /${lang}); some links point outside /verktyg.
  related: { href: string; label: string }[];
};

const CONTENT: Record<Locale, ToolContent> = {
  sv: {
    metaTitle: 'Timpris-kalkylator – vad ska du ta betalt i timmen | ByggExp',
    description:
      'Räkna ut vilket timpris du behöver ta betalt som hantverkare. Utgå från önskad lön, sociala avgifter, omkostnader och vinst – gratis kalkylator, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Timpris-kalkylator – vad ska du ta betalt?',
    intro:
      'Räkna baklänges från vad du vill tjäna till vilket timpris du behöver ta betalt. Kalkylatorn lägger på sociala avgifter, dina omkostnader och en vinstmarginal och delar på dina debiterbara timmar.',
    previewAlt: 'Förhandsvisning av timpris-kalkylator',
    previewCaption: 'Så ser timpris-kalkylatorn ut',
    sections: [
      {
        id: 'sa-fungerar-det',
        heading: 'Så räknas timpriset ut',
        body: (
          <ol>
            <li>Utgå från din önskade bruttolön per månad.</li>
            <li>Lägg på sociala avgifter (ca 31,42 %) – det är kostnaden för att ha dig anställd.</li>
            <li>Lägg på omkostnader: verktyg, bil, försäkringar, lokal och admin.</li>
            <li>Lägg på en vinstmarginal så att företaget går runt och kan växa.</li>
            <li>Dela summan på dina debiterbara timmar – då får du timpriset.</li>
          </ol>
        ),
      },
      {
        id: 'debiterbara-timmar',
        heading: 'Glöm inte de icke debiterbara timmarna',
        body: (
          <p>
            Ett vanligt misstag är att räkna med alla arbetstimmar som om de vore fakturerbara. I
            verkligheten går tid åt till offerter, inköp, restid och administration. Räknar du med
            för många debiterbara timmar blir timpriset för lågt och du tjänar mindre än du tror.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om timpris',
    faq: [
      {
        question: 'Vad ska jag ta betalt per timme som hantverkare?',
        answer:
          'Det beror på din önskade lön, dina omkostnader och hur många timmar du kan fakturera. Utgå från lönen, lägg på sociala avgifter (ca 31,42 %), omkostnader och en vinstmarginal och dela på debiterbara timmar – det gör kalkylatorn åt dig.',
      },
      {
        question: 'Varför är timpriset så mycket högre än min lön per timme?',
        answer:
          'För att timpriset ska täcka mer än lönen: sociala avgifter, verktyg, bil, försäkringar, admin och tid som inte är debiterbar, plus vinst. Alla timmar du jobbar går inte att fakturera.',
      },
      {
        question: 'Vad är debiterbara timmar?',
        answer:
          'De timmar du faktiskt kan fakturera en kund. Restid, offerter, admin och annat ofakturerbart räknas inte – därför är de ofta klart färre än din totala arbetstid.',
      },
      {
        question: 'Ingår moms i timpriset?',
        answer:
          'Kalkylatorn visar timpris både exklusive och inklusive moms (25 %). Till privatpersoner anger du oftast pris inklusive moms.',
      },
    ],
    ctaHeading: 'Se lönsamheten per projekt i ByggExp',
    ctaText: 'Följ tid, kostnader och marginal per projekt i realtid. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler gratis verktyg',
    related: [
      { href: '/blog/timpris-hantverkare', label: 'Guide: vad ska du ta betalt per timme?' },
      { href: '/verktyg/paslag-marginal-kalkylator', label: 'Påslag & marginal' },
      { href: '/verktyg/rot-avdrag-kalkylator', label: 'ROT-avdrag kalkylator' },
      { href: '/verktyg', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Timepris-kalkulator – hva skal du ta betalt per time | ByggExp',
    description:
      'Regn ut hvilken timepris du må ta betalt som håndverker. Ta utgangspunkt i ønsket lønn, arbeidsgiveravgift, omkostninger og fortjeneste – gratis kalkulator, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Timepris-kalkulator – hva skal du ta betalt?',
    intro:
      'Regn baklengs fra hva du vil tjene til hvilken timepris du må ta betalt. Kalkulatoren legger på arbeidsgiveravgift, dine omkostninger og en fortjenestemargin og deler på dine fakturerbare timer.',
    previewAlt: 'Forhåndsvisning av timepris-kalkulator',
    previewCaption: 'Slik ser timepris-kalkulatoren ut',
    sections: [
      {
        id: 'sa-fungerar-det',
        heading: 'Slik regnes timeprisen ut',
        body: (
          <ol>
            <li>Ta utgangspunkt i ønsket bruttolønn per måned.</li>
            <li>Legg på arbeidsgiveravgift – det er kostnaden ved å ha deg ansatt.</li>
            <li>Legg på omkostninger: verktøy, bil, forsikringer, lokale og administrasjon.</li>
            <li>Legg på en fortjenestemargin slik at bedriften går rundt og kan vokse.</li>
            <li>Del summen på dine fakturerbare timer – da får du timeprisen.</li>
          </ol>
        ),
      },
      {
        id: 'debiterbara-timmar',
        heading: 'Ikke glem de ikke-fakturerbare timene',
        body: (
          <p>
            En vanlig feil er å regne med alle arbeidstimer som om de var fakturerbare. I
            virkeligheten går tid med til tilbud, innkjøp, reisetid og administrasjon. Regner du med
            for mange fakturerbare timer blir timeprisen for lav og du tjener mindre enn du tror.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om timepris',
    faq: [
      {
        question: 'Hva skal jeg ta betalt per time som håndverker?',
        answer:
          'Det avhenger av ønsket lønn, dine omkostninger og hvor mange timer du kan fakturere. Ta utgangspunkt i lønnen, legg på arbeidsgiveravgift, omkostninger og en fortjenestemargin og del på fakturerbare timer – det gjør kalkulatoren for deg.',
      },
      {
        question: 'Hvorfor er timeprisen så mye høyere enn lønnen min per time?',
        answer:
          'Fordi timeprisen skal dekke mer enn lønnen: arbeidsgiveravgift, verktøy, bil, forsikringer, administrasjon og tid som ikke er fakturerbar, pluss fortjeneste. Ikke alle timene du jobber kan faktureres.',
      },
      {
        question: 'Hva er fakturerbare timer?',
        answer:
          'De timene du faktisk kan fakturere en kunde. Reisetid, tilbud, administrasjon og annet ikke-fakturerbart teller ikke – derfor er de ofte klart færre enn din totale arbeidstid.',
      },
      {
        question: 'Er mva inkludert i timeprisen?',
        answer:
          'Kalkulatoren viser timepris både uten og med mva (25 %). Til privatpersoner oppgir du vanligvis pris inkludert mva.',
      },
    ],
    ctaHeading: 'Se lønnsomheten per prosjekt i ByggExp',
    ctaText: 'Følg tid, kostnader og margin per prosjekt i sanntid. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere gratis verktøy',
    related: [
      { href: '/blog/timpris-hantverkare', label: 'Guide: hva skal du ta betalt per time?' },
      { href: '/verktyg/paslag-marginal-kalkylator', label: 'Påslag & margin' },
      { href: '/verktyg/rot-avdrag-kalkylator', label: 'ROT-fradrag kalkulator' },
      { href: '/verktyg', label: 'Alle gratis verktøy' },
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

export default function TimprisKalkylatorPage({ lang }: { lang: Locale }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/timpris-kalkylator`;

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
        embedSlug="timpris-kalkylator"
        embedTitle={c.h1}
        tool={<TimprisKalkylatorTool />}
        leadForm={<ToolLeadForm tool="timpris-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/timpris-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
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
          href: `/${lang}${r.href}`,
          label: r.label,
        }))}
      />

      <Footer footerT={footerT} />
    </>
  );
}
