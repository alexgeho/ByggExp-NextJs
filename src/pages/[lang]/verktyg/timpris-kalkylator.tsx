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
import { calcLocaleEnabled, type CalcLocale } from '../../../lib/locale';
import { localeOrigin } from '../../../lib/seo';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv served on byggexp.se, nb served on byggexp.no (Norway expansion). Content is
// keyed by locale; the page renders whichever the [lang] segment asks for. nb is
// gated by NB_LIVE (see lib/locale) until byggexp.no goes live.
type Locale = CalcLocale;

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
      'Många hantverkare sätter timpriset på känsla och märker för sent att pengarna inte räcker. Här utgår du istället från vad du vill ha kvar i lön och ser direkt vilket timpris det kräver – både exklusive och inklusive moms.',
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
          'Det finns ingen fast siffra som passar alla. Priset måste bära din lön, alla omkostnader och en vinst, fördelat på de timmar du faktiskt kan fakturera. Fyll i din önskade lön i kalkylatorn så ser du vad just din verksamhet kräver – i stället för att gissa utifrån vad andra tar.',
      },
      {
        question: 'Varför är timpriset så mycket högre än min lön per timme?',
        answer:
          'För att priset ska bära hela verksamheten, inte bara din lön. Ovanpå lönen ligger sociala avgifter, alla omkostnader och den tid som inte går att fakturera – och företaget ska dessutom gå med vinst. Din lön är bara en del av vad varje debiterbar timme måste dra in.',
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
  en: {
    metaTitle: 'Hourly rate calculator – what to charge per hour | ByggExp',
    description:
      'Work out the hourly rate you need to charge as a tradesperson. Start from your desired salary, employer contributions, overhead and profit – free calculator, no account.',
    badge: 'Free calculator',
    h1: 'Hourly rate calculator – what should you charge?',
    intro:
      'Plenty of tradespeople set their rate on gut feeling and only later find the money doesn’t add up. Here you start from the take-home pay you actually want and see straight away what hourly rate that demands – both excluding and including VAT.',
    previewAlt: 'Preview of the hourly rate calculator',
    previewCaption: 'This is how the hourly rate calculator looks',
    sections: [
      {
        id: 'sa-fungerar-det',
        heading: 'How the hourly rate is calculated',
        body: (
          <ol>
            <li>Start from your desired gross salary per month.</li>
            <li>Add employer contributions (about 31.42%) – the cost of having you employed.</li>
            <li>Add overhead: tools, vehicle, insurance, premises and admin.</li>
            <li>Add a profit margin so the business breaks even and can grow.</li>
            <li>Divide the total by your billable hours – that gives the hourly rate.</li>
          </ol>
        ),
      },
      {
        id: 'debiterbara-timmar',
        heading: 'Don’t forget the non-billable hours',
        body: (
          <p>
            A common mistake is to count all working hours as if they were billable. In reality, time
            goes to quotes, purchasing, travel and administration. If you assume too many billable
            hours the hourly rate comes out too low and you earn less than you think.
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about hourly rate',
    faq: [
      {
        question: 'What should I charge per hour as a tradesperson?',
        answer:
          'There is no single figure that fits everyone. The rate has to carry your salary, all your overhead and a profit, spread across the hours you can actually bill. Enter your desired salary in the calculator and you’ll see what your own business needs – instead of guessing from what others charge.',
      },
      {
        question: 'Why is the hourly rate so much higher than my salary per hour?',
        answer:
          'Because the rate has to carry the whole business, not just your pay. On top of salary sit employer contributions, all your overhead and the time you can’t bill – and the company still needs to turn a profit. Your wage is only one slice of what each billable hour has to bring in.',
      },
      {
        question: 'What are billable hours?',
        answer:
          'The hours you can actually bill a customer. Travel, quotes, admin and other non-billable work don’t count – so they are often clearly fewer than your total working time.',
      },
      {
        question: 'Is VAT included in the hourly rate?',
        answer:
          'The calculator shows the hourly rate both excluding and including VAT (25%). For private individuals you usually state the price including VAT.',
      },
    ],
    ctaHeading: 'See profitability per project in ByggExp',
    ctaText: 'Follow time, costs and margin per project in real time. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More free tools',
    related: [
      { href: '/verktyg/paslag-marginal-kalkylator', label: 'Markup & margin' },
      { href: '/verktyg/rot-avdrag-kalkylator', label: 'ROT deduction calculator' },
      { href: '/verktyg/moms-kalkylator', label: 'VAT calculator' },
      { href: '/verktyg', label: 'All free tools' },
    ],
  },
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lang = params?.lang;
  if (!calcLocaleEnabled(lang)) {
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
        locale={lang}
        tool={<TimprisKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="timpris-kalkylator" locale={lang} />}
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
