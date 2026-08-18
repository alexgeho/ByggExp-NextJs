import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import GolvKalkylatorTool from '../../../components/LeadMagnet/GolvKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
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
  related: { slug: string; label: string }[];
};

const CONTENT: Record<Locale, ToolContent> = {
  sv: {
    metaTitle: 'Golv- & kakelkalkylator – förpackningar & fästmassa | ByggExp',
    description:
      'Räkna ut golv, laminat och kakel: m² inkl. spill (rak/diagonal), antal förpackningar och – för kakel – fästmassa i kg och säckar. Gratis kalkylator, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Golv- och kakelkalkylator',
    intro:
      'Välj material och läggningssätt så räknar vi ut m² inkl. spill och antal förpackningar – för golv, laminat, klinker och kakel. För kakel får du även åtgången fästmassa i kg och säckar.',
    previewAlt: 'Förhandsvisning av golv- och kakelberäknare',
    previewCaption: 'Så ser golv- och kakelberäknare ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Så räknar kalkylatorn',
        body: (
          <ul>
            <li><strong>Material:</strong> ytan × (1 + spill) ÷ m² per förpackning = antal paket.</li>
            <li><strong>Spill:</strong> väljs efter läggning – rak ca 8 %, diagonal ca 12 %.</li>
            <li><strong>Fästmassa (kakel):</strong> ytan × kg/m² → kg och säckar (20 kg).</li>
          </ul>
        ),
      },
      {
        id: 'kakel-fastmassa',
        heading: 'Kakel: fästmassa och fog',
        body: (
          <p>
            Fästmassans åtgång beror på tandning och plattstorlek – räkna med ca 3–6 kg/m²
            (riktvärde 4 kg/m²). Stora plattor och grov tandning drar mer. Utöver fästmassan
            tillkommer fogbruk, som beror på fogbredd och plattstorlek – ha alltid lite extra.
          </p>
        ),
      },
      {
        id: 'info',
        heading: 'Tänk på detta',
        body: (
          <p>
            Köp gärna en förpackning extra – material ur samma parti kan vara svårt att få tag på
            senare, och du vill ha reserv om något går sönder. Kontrollera alltid m² per
            förpackning och fästmassans åtgång på produkten.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur mycket golv eller kakel ska jag köpa?', answer: 'Räkna ytan i m² och lägg på spill – rak läggning ofta 5–8 %, diagonal 10–15 %. Dela sedan på förpackningens m² för antal paket. Kalkylatorn väljer spill efter läggningssätt och räknar ut det åt dig.' },
      { question: 'Hur mycket fästmassa går det åt till kakel?', answer: 'Räkna med ca 3–6 kg fästmassa per m² beroende på tandning och plattstorlek (ett vanligt riktvärde är 4 kg/m²). Välj "Kakel/klinker" i kalkylatorn så räknas kg och antal säckar (20 kg) ut. Fogbruk tillkommer och beror på fogbredd.' },
      { question: 'Hur mycket spill vid diagonal läggning?', answer: 'Diagonal läggning och rum med många vinklar ger mer kap – räkna med 10–15 % i stället för 5–8 %. Ha alltid några plattor/brädor extra ur samma parti för framtida behov.' },
      { question: 'Hur många m² är en förpackning?', answer: 'Det varierar per produkt och står på förpackningen – ange värdet i kalkylatorn så räknas antal paket ut.' },
      { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberäknare' },
      { slug: 'farg-kalkylator', label: 'Färgåtgång' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Gulv- & fliskalkulator – pakker & flislim | ByggExp',
    description:
      'Regn ut gulv, laminat og fliser: m² inkl. svinn (rett/diagonal), antall pakker og – for fliser – flislim i kg og sekker. Gratis kalkulator, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Gulv- og fliskalkulator',
    intro:
      'Velg materiale og leggemåte, så regner vi ut m² inkl. svinn og antall pakker – for gulv, laminat, gulvfliser og veggfliser. For fliser får du også forbruket av flislim i kg og sekker.',
    previewAlt: 'Forhåndsvisning av gulv- og flisberegner',
    previewCaption: 'Slik ser gulv- og flisberegneren ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Slik regner kalkulatoren',
        body: (
          <ul>
            <li><strong>Materiale:</strong> arealet × (1 + svinn) ÷ m² per pakke = antall pakker.</li>
            <li><strong>Svinn:</strong> velges etter legging – rett ca. 8 %, diagonal ca. 12 %.</li>
            <li><strong>Flislim (fliser):</strong> arealet × kg/m² → kg og sekker (20 kg).</li>
          </ul>
        ),
      },
      {
        id: 'kakel-fastmassa',
        heading: 'Fliser: flislim og fug',
        body: (
          <p>
            Flislimforbruket avhenger av tanning og flisstørrelse – regn med ca. 3–6 kg/m²
            (veiledende 4 kg/m²). Store fliser og grov tanning drar mer. I tillegg til flislimet
            kommer fugemasse, som avhenger av fugebredde og flisstørrelse – ha alltid litt ekstra.
          </p>
        ),
      },
      {
        id: 'info',
        heading: 'Tenk på dette',
        body: (
          <p>
            Kjøp gjerne en pakke ekstra – materiale fra samme parti kan være vanskelig å få tak i
            senere, og du vil ha reserve om noe går i stykker. Kontroller alltid m² per
            pakke og flislimforbruket på produktet.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvor mye gulv eller fliser skal jeg kjøpe?', answer: 'Regn arealet i m² og legg på svinn – rett legging ofte 5–8 %, diagonal 10–15 %. Del deretter på pakkens m² for antall pakker. Kalkulatoren velger svinn etter leggemåte og regner det ut for deg.' },
      { question: 'Hvor mye flislim går det med til fliser?', answer: 'Regn med ca. 3–6 kg flislim per m² avhengig av tanning og flisstørrelse (et vanlig veiledende tall er 4 kg/m²). Velg "Fliser" i kalkulatoren, så regnes kg og antall sekker (20 kg) ut. Fugemasse kommer i tillegg og avhenger av fugebredde.' },
      { question: 'Hvor mye svinn ved diagonal legging?', answer: 'Diagonal legging og rom med mange vinkler gir mer kapp – regn med 10–15 % i stedet for 5–8 %. Ha alltid noen fliser/bord ekstra fra samme parti for fremtidig behov.' },
      { question: 'Hvor mange m² er en pakke?', answer: 'Det varierer per produkt og står på pakken – angi verdien i kalkulatoren, så regnes antall pakker ut.' },
      { question: 'Koster det noe?', answer: 'Nei, kalkulatoren er gratis og krever ingen konto.' },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberegner' },
      { slug: 'farg-kalkylator', label: 'Malingsforbruk' },
      { slug: '', label: 'Alle gratis verktøy' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/golv-kalkylator`;

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
        embedSlug="golv-kalkylator"
        embedTitle={c.h1}
        tool={<GolvKalkylatorTool />}
        leadForm={<ToolLeadForm tool="golv-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/golv-preview.webp"
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
