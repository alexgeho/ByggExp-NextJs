import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import KvadratmeterKalkylatorTool from '../../../components/LeadMagnet/KvadratmeterKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
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
  related: { slug: string; label: string }[];
};

const CONTENT: Record<Locale, ToolContent> = {
  sv: {
    metaTitle: 'Kvadratmeterberäknare – räkna ut m² gratis | ByggExp',
    description:
      'Räkna ut kvadratmeter (m²) för ett eller flera rum utifrån längd och bredd, med spill för material som golv och kakel. Gratis kalkylator, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Kvadratmeterberäknare – räkna ut ytan',
    intro:
      'Rätt kvadratmeter är skillnaden mellan att beställa lagom och att stå med en halv pall kakel över. Räkna ihop ytan för flera rum på en gång, lägg på spill för kap och få en materialkostnad direkt – underlag du kan ta rakt in i en offert.',
    previewAlt: 'Förhandsvisning av kvadratmeterberäknare',
    previewCaption: 'Så ser kvadratmeterberäknaren ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Så räknar du ut kvadratmeter',
        body: (
          <>
            <figure className="lm-diagram">
              <img src="/landing/diagrams/kvadratmeter.webp" alt="Diagram: yta som längd gånger bredd, summera flera delytor" width={720} height={380} loading="lazy" />
              <figcaption>Yta = längd × bredd. Flera rum? Summera delytorna och lägg på spill.</figcaption>
            </figure>
            <ol>
              <li>Mät längd och bredd på rummet eller ytan i meter.</li>
              <li>Lägg till en rad per utrymme om du har flera.</li>
              <li>Ange spill i procent om du ska beställa material.</li>
              <li>Se den totala ytan och hur mycket du bör beställa.</li>
            </ol>
          </>
        ),
      },
      {
        id: 'anvandning',
        heading: 'När behöver du räkna ut ytan?',
        body: (
          <p>
            Kvadratmeter är grunden för att beräkna material till golv, kakel, målning, isolering
            och mycket annat – och för att prissätta arbete per m². Med rätt yta och lite spill
            slipper du både beställa för lite och betala för mycket.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om kvadratmeter',
    faq: [
      {
        question: 'Hur räknar jag ut kvadratmeter?',
        answer:
          'Multiplicera längd × bredd i meter. Ett rum på 4 × 3 meter blir alltså 12 m².',
      },
      {
        question: 'Hur mycket spill ska jag räkna med?',
        answer:
          'För golv och kakel lägger man normalt på 5–10 % för kap och spill, mer vid diagonal läggning eller många vinklar. Fyll i din spillprocent så justerar kalkylatorn beställningsmängden.',
      },
      {
        question: 'Kan jag räkna ut ytan för flera rum?',
        answer:
          'Ja. Lägg till en rad per rum eller yta – kalkylatorn summerar den totala kvadratmetern.',
      },
      {
        question: 'Kan jag se materialkostnaden?',
        answer:
          'Ja. Fyll i pris per m² (valfritt) så räknar kalkylatorn ut en uppskattad materialkostnad på ytan inklusive spill – bra för en snabb budget eller offert.',
      },
      {
        question: 'Kostar det något?',
        answer: 'Nej, kalkylatorn är gratis och kräver inget konto.',
      },
    ],
    ctaHeading: 'Prissätt och följ projekt i ByggExp',
    ctaText: 'Från ytor och material till offert, faktura och lönsamhet per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'farg-kalkylator', label: 'Färgåtgång' },
      { slug: 'betong-kalkylator', label: 'Betongberäknare' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Kvadratmeterberegner – regn ut m² gratis | ByggExp',
    description:
      'Regn ut kvadratmeter (m²) for ett eller flere rom ut fra lengde og bredde, med svinn for materialer som gulv og fliser. Gratis kalkulator, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Kvadratmeterberegner – regn ut arealet',
    intro:
      'Fyll inn lengde og bredde for ett eller flere rom, så summeres arealet i kvadratmeter. Legg til svinn når du skal bestille gulv, fliser, maling eller annet materiale – og en pris per m² om du vil se materialkostnaden med en gang.',
    previewAlt: 'Forhåndsvisning av kvadratmeterberegner',
    previewCaption: 'Slik ser kvadratmeterberegneren ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Slik regner du ut kvadratmeter',
        body: (
          <ol>
            <li>Mål lengde og bredde på rommet eller flaten i meter.</li>
            <li>Legg til en rad per rom om du har flere.</li>
            <li>Angi svinn i prosent om du skal bestille materiale.</li>
            <li>Se det totale arealet og hvor mye du bør bestille.</li>
          </ol>
        ),
      },
      {
        id: 'anvandning',
        heading: 'Når trenger du å regne ut arealet?',
        body: (
          <p>
            Kvadratmeter er grunnlaget for å beregne materialer til gulv, fliser, maling, isolasjon
            og mye annet – og for å prissette arbeid per m². Med riktig areal og litt svinn
            slipper du både å bestille for lite og å betale for mye.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om kvadratmeter',
    faq: [
      {
        question: 'Hvordan regner jeg ut kvadratmeter?',
        answer:
          'Multipliser lengde × bredde i meter. Et rom på 4 × 3 meter er 12 m². Har du flere rom eller flater, legger du til en rad per flate, så summeres alt.',
      },
      {
        question: 'Hvor mye svinn skal jeg regne med?',
        answer:
          'For gulv og fliser pleier man å legge på cirka 5–10 % for kapp og svinn, mer ved diagonal legging eller mange vinkler. Angi svinnprosenten, så viser kalkulatoren hvor mye du bør bestille.',
      },
      {
        question: 'Kan jeg regne ut arealet for flere rom?',
        answer:
          'Ja. Legg til en rad per rom eller flate – kalkulatoren summerer den totale kvadratmeteren.',
      },
      {
        question: 'Kan jeg se materialkostnaden?',
        answer:
          'Ja. Fyll inn pris per m² (valgfritt), så regner kalkulatoren ut en anslått materialkostnad på arealet inkludert svinn – bra for et raskt budsjett eller tilbud.',
      },
      {
        question: 'Koster det noe?',
        answer: 'Nei, kalkulatoren er gratis og krever ingen konto.',
      },
    ],
    ctaHeading: 'Prissett og følg prosjekter i ByggExp',
    ctaText: 'Fra flater og materialer til tilbud, faktura og lønnsomhet per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'farg-kalkylator', label: 'Malingsforbruk' },
      { slug: 'betong-kalkylator', label: 'Betongberegner' },
      { slug: '', label: 'Alle gratis verktøy' },
    ],
  },
  en: {
    metaTitle: 'Square-metre calculator – work out m² for free | ByggExp',
    description:
      'Work out square metres (m²) for one or more rooms from length and width, with waste for materials like flooring and tiles. Free calculator, no account.',
    badge: 'Free calculator',
    h1: 'Square-metre calculator – work out the area',
    intro:
      'The right square-metre figure is the difference between ordering just enough and being left with half a pallet of tiles. Add up the area of several rooms at once, allow for cutting waste and get a material cost straight away – figures you can carry into a quote.',
    previewAlt: 'Preview of the square-metre calculator',
    previewCaption: 'This is how the square-metre calculator looks',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'How to work out square metres',
        body: (
          <>
            <figure className="lm-diagram">
              <img src="/landing/diagrams/kvadratmeter.webp" alt="Diagram: area as length times width, summing several sub-areas" width={720} height={380} loading="lazy" />
              <figcaption>Area = length × width. Several rooms? Sum the sub-areas and add waste.</figcaption>
            </figure>
            <ol>
              <li>Measure the length and width of the room or area in metres.</li>
              <li>Add one row per space if you have several.</li>
              <li>Enter waste as a percentage if you are ordering material.</li>
              <li>See the total area and how much you should order.</li>
            </ol>
          </>
        ),
      },
      {
        id: 'anvandning',
        heading: 'When do you need to work out the area?',
        body: (
          <p>
            Square metres are the basis for estimating material for flooring, tiles, painting,
            insulation and much more – and for pricing work per m². With the right area and a little
            waste you avoid both ordering too little and paying too much.
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about square metres',
    faq: [
      {
        question: 'How do I work out square metres?',
        answer:
          'Multiply length × width in metres. A room of 4 × 3 metres works out to 12 m².',
      },
      {
        question: 'How much waste should I allow?',
        answer:
          'For flooring and tiles you usually add about 5–10% for cuts and waste, more for diagonal laying or lots of angles. Enter your waste percentage and the calculator adjusts the amount to order.',
      },
      {
        question: 'Can I work out the area for several rooms?',
        answer:
          'Yes. Add one row per room or area – the calculator sums the total square metres.',
      },
      {
        question: 'Can I see the material cost?',
        answer:
          'Yes. Enter a price per m² (optional) and the calculator estimates the material cost for the area including waste – handy for a quick budget or quote.',
      },
      {
        question: 'Does it cost anything?',
        answer: 'No, the calculator is free and requires no account.',
      },
    ],
    ctaHeading: 'Price and track projects in ByggExp',
    ctaText: 'From areas and material to quote, invoice and profitability per project. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More construction calculators',
    related: [
      { slug: 'farg-kalkylator', label: 'Paint coverage' },
      { slug: 'betong-kalkylator', label: 'Concrete calculator' },
      { slug: '', label: 'All free tools' },
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

export default function Page({ lang }: { lang: Locale }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/kvadratmeter-kalkylator`;

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
        wide
        badge={c.badge}
        title={c.h1}
        intro={c.intro}
        embedSlug="kvadratmeter-kalkylator"
        embedTitle={c.h1}
        locale={lang}
        tool={<KvadratmeterKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="kvadratmeter-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/kvadratmeter-preview.webp"
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
          href: `/${lang}/verktyg${r.slug ? `/${r.slug}` : ''}`,
          label: r.label,
        }))}
      />

      <Footer footerT={footerT} />
    </>
  );
}
