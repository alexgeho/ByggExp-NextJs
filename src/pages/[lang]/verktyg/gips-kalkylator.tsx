import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import GipsKalkylatorTool from '../../../components/LeadMagnet/GipsKalkylatorTool';
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
    metaTitle: 'Gipskalkylator – gipsskivor, reglar & skruv 2026 | ByggExp',
    description:
      'Räkna ut hela materiallistan för en gipsvägg: antal gipsskivor, reglar (rätt c/c), syll/hammarband, isolering och skruv – utifrån väggens mått. Gratis, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Gipskalkylator',
    intro:
      'Ange väggens mått så får du hela materiallistan för en regelvägg: gipsskivor, reglar, syll och hammarband, isolering och skruv. Skivbredden styr regelavståndet (c/c) enligt Gyprocs handbok.',
    previewAlt: 'Förhandsvisning av gipsberäknare',
    previewCaption: 'Så ser gipsberäknare ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Så räknar kalkylatorn',
        body: (
          <ul>
            <li><strong>Gips:</strong> vägglängd × höjd × antal sidor × lager, plus spill, delat på skivans yta.</li>
            <li><strong>Reglar:</strong> vägglängd ÷ c/c + 1. Stommen räknas en gång även när båda sidor kläs.</li>
            <li><strong>Syll + hammarband:</strong> 2 × vägglängd i löpmeter (upp och ned).</li>
            <li><strong>Skruv:</strong> ca 20 st per m² och gipslager.</li>
            <li><strong>Isolering:</strong> väggytan en gång, eftersom den fyller stommen.</li>
          </ul>
        ),
      },
      {
        id: 'skivbredd-cc',
        heading: 'Skivbredd styr regelavståndet (c/c)',
        body: (
          <ul>
            <li>Skiva <strong>1200 mm</strong> bred → reglar <strong>c/c 600 mm</strong>.</li>
            <li>Skiva <strong>900 mm</strong> bred → reglar <strong>c/c 450 mm</strong>.</li>
            <li>Skarven mellan två skivor ska alltid landa mitt på en regel – därför hänger måtten ihop.</li>
          </ul>
        ),
      },
      {
        id: 'lager-skruv',
        heading: 'Lager, skruv och isolering',
        body: (
          <p>
            Ett lager räcker för de flesta innerväggar. Två lager ger bättre ljud-
            och brandmotstånd och krävs ibland enligt konstruktionen. Skruva i kant
            tätare (ca c200 mm) än i fält (ca c300 mm), och skruva det yttre lagret
            tätare än det inre. Ska väggen ljud- eller värmeisoleras fyller du
            stommen med isolering motsvarande väggytan.
          </p>
        ),
      },
      {
        id: 'info',
        heading: 'Tänk på',
        body: (
          <p>
            Lägg på spill för kap runt fönster, dörrar och hörn – köp hellre någon
            skiva extra. Måtten här följer Gyprocs monteringshandbok; kontrollera
            alltid skiv- och regeltyp samt infästning mot leverantörens anvisning
            för just din väggtyp (t.ex. våtrum, brand- eller ljudklassad vägg).
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Vilket c/c-avstånd ska reglarna ha?', answer: 'Det styrs av skivbredden. Är gipsskivan 1200 mm bred sätts reglarna c/c 600 mm, är skivan 900 mm bred gäller c/c 450 mm. Kalkylatorn väljer rätt c/c automatiskt när du anger skivbredden.' },
      { question: 'Räknas gips på båda sidor av väggen?', answer: 'En regelvägg kläs normalt på båda sidor. Välj "Dubbelsidig" så dubblas gips- och skruvmängden, medan stommen (reglar, syll, hammarband) räknas en gång – den delas ju av båda sidorna.' },
      { question: 'Hur många skruv går det åt?', answer: 'Räkna med ca 20 skruv per m² och gipslager. Gyproc anger tätare infästning i kanten (ca c200 mm) än i fält (ca c300 mm), och yttre lagret skruvas tätare än det inre.' },
      { question: 'Ett eller två lager gips?', answer: 'Två lager ger bättre ljud- och brandmotstånd och krävs ibland enligt konstruktionen. Välj antal lager per sida i kalkylatorn så räknas skivor och skruv om.' },
      { question: 'Hur stor är en gipsskiva?', answer: 'Vanliga mått är 1200 × 2600 mm (ca 3,1 m²) och 900 × 2600 mm (ca 2,3 m²). Välj skivbredd och skivlängd i kalkylatorn.' },
      { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'reglar-kalkylator', label: 'Reglar & virke' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberäknare' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Gipskalkulator – gipsplater, stendere & skruer 2026 | ByggExp',
    description:
      'Regn ut hele materiallisten for en gipsvegg: antall gipsplater, stendere (riktig c/c), svill/toppsvill, isolasjon og skruer – ut fra veggens mål. Gratis, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Gipskalkulator',
    intro:
      'Angi veggens mål så får du hele materiallisten for et bindingsverk: gipsplater, stendere, svill og toppsvill, isolasjon og skruer. Platebredden styrer stenderavstanden (c/c) etter Gyprocs håndbok.',
    previewAlt: 'Forhåndsvisning av gipsberegner',
    previewCaption: 'Slik ser gipsberegner ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Slik regner kalkulatoren',
        body: (
          <ul>
            <li><strong>Gips:</strong> vegglengde × høyde × antall sider × lag, pluss svinn, delt på platens flate.</li>
            <li><strong>Stendere:</strong> vegglengde ÷ c/c + 1. Reisverket regnes én gang selv når begge sider kles.</li>
            <li><strong>Svill + toppsvill:</strong> 2 × vegglengde i løpemeter (opp og ned).</li>
            <li><strong>Skruer:</strong> ca 20 stk per m² og gipslag.</li>
            <li><strong>Isolasjon:</strong> veggflaten én gang, siden den fyller reisverket.</li>
          </ul>
        ),
      },
      {
        id: 'skivbredd-cc',
        heading: 'Platebredden styrer stenderavstanden (c/c)',
        body: (
          <ul>
            <li>Plate <strong>1200 mm</strong> bred → stendere <strong>c/c 600 mm</strong>.</li>
            <li>Plate <strong>900 mm</strong> bred → stendere <strong>c/c 450 mm</strong>.</li>
            <li>Skjøten mellom to plater skal alltid lande midt på en stender – derfor henger målene sammen.</li>
          </ul>
        ),
      },
      {
        id: 'lager-skruv',
        heading: 'Lag, skruer og isolasjon',
        body: (
          <p>
            Ett lag holder for de fleste innervegger. To lag gir bedre lyd-
            og brannmotstand og kreves noen ganger etter konstruksjonen. Skru tettere i kant
            (ca c200 mm) enn i felt (ca c300 mm), og skru det ytre laget
            tettere enn det indre. Skal veggen lyd- eller varmeisoleres fyller du
            reisverket med isolasjon tilsvarende veggflaten.
          </p>
        ),
      },
      {
        id: 'info',
        heading: 'Tenk på',
        body: (
          <p>
            Legg på svinn for kapp rundt vinduer, dører og hjørner – kjøp heller en
            plate ekstra. Målene her følger Gyprocs monteringshåndbok; kontroller
            alltid plate- og stendertype samt innfesting mot leverandørens anvisning
            for akkurat din veggtype (f.eks. våtrom, brann- eller lydklasset vegg).
          </p>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvilken c/c-avstand skal stenderne ha?', answer: 'Det styres av platebredden. Er gipsplaten 1200 mm bred settes stenderne c/c 600 mm, er platen 900 mm bred gjelder c/c 450 mm. Kalkulatoren velger riktig c/c automatisk når du angir platebredden.' },
      { question: 'Regnes gips på begge sider av veggen?', answer: 'Et bindingsverk kles normalt på begge sider. Velg "Dobbeltsidig" så dobles gips- og skruemengden, mens reisverket (stendere, svill, toppsvill) regnes én gang – det deles jo av begge sidene.' },
      { question: 'Hvor mange skruer går det med?', answer: 'Regn med ca 20 skruer per m² og gipslag. Gyproc angir tettere innfesting i kanten (ca c200 mm) enn i felt (ca c300 mm), og det ytre laget skrus tettere enn det indre.' },
      { question: 'Ett eller to lag gips?', answer: 'To lag gir bedre lyd- og brannmotstand og kreves noen ganger etter konstruksjonen. Velg antall lag per side i kalkulatoren så regnes plater og skruer om.' },
      { question: 'Hvor stor er en gipsplate?', answer: 'Vanlige mål er 1200 × 2600 mm (ca 3,1 m²) og 900 × 2600 mm (ca 2,3 m²). Velg platebredde og platelengde i kalkulatoren.' },
      { question: 'Koster det noe?', answer: 'Nei, kalkulatoren er gratis og krever ingen konto.' },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'reglar-kalkylator', label: 'Stendere & trelast' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberegner' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/gips-kalkylator`;

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
        tool={<GipsKalkylatorTool />}
        leadForm={<ToolLeadForm tool="gips-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/gips-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="gips-kalkylator"
        embedTitle={c.h1}
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
