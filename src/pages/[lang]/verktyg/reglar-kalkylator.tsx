import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import ReglarKalkylatorTool from '../../../components/LeadMagnet/ReglarKalkylatorTool';
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
    metaTitle: 'Reglar & virke kalkylator – antal reglar (c/c) | ByggExp',
    description:
      'Räkna ut antal reglar och löpmeter virke utifrån väggens längd och centrumavstånd (c/c). Gratis kalkylator för regelvägg och stomme, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Reglar & virke',
    intro:
      'Fyll i väggens längd och centrumavstånd (c/c) så räknar vi ut antal reglar och totalt antal löpmeter virke.',
    previewAlt: 'Förhandsvisning av reglar & virke',
    previewCaption: 'Så ser reglar & virke ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Så räknar du ut virket', body: (<><figure className="lm-diagram"><img src="/landing/diagrams/reglar.webp" alt="Diagram: reglar med c/c-avstånd och gipsskiva" width={720} height={380} loading="lazy" /><figcaption>Regelavståndet ska matcha skivbredden: 900 mm gips → c/c 450, 1200 mm → c/c 600.</figcaption></figure><ol><li>Mät väggens längd i meter.</li><li>Välj centrumavstånd (c/c) i mm.</li><li>Ange regelns längd/höjd.</li><li>Se antal reglar och totalt löpmeter.</li></ol></>) },
      { id: 'info', heading: 'Glöm inte', body: (<><p>Utöver de stående reglarna behövs syll och hammarband, samt kortlingar och extra reglar vid dörrar, fönster och hörn.</p></>) },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur räknar jag antal reglar?', answer: 'Antal stående reglar = längd ÷ centrumavstånd (c/c) + 1. En 6 m vägg med c/c 600 mm ger 6000 ÷ 600 + 1 = 11 reglar.' },
      { question: 'Vilket c/c-avstånd ska jag ha?', answer: 'Vanliga avstånd är 450 eller 600 mm beroende på skiv- och isoleringsmått samt krav. 600 mm är vanligast för innerväggar.' },
      { question: 'Ingår syll och hammarband?', answer: 'Nej, kalkylatorn räknar de stående reglarna. Lägg till virke för syll (nedtill) och hammarband (upptill) separat.' },
      { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'takstolar-kalkylator', label: 'Beräkna takstolar' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberäknare' },
      { slug: 'betong-kalkylator', label: 'Betongberäknare' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Stendere & trelast kalkulator – antall stendere (c/c) | ByggExp',
    description:
      'Regn ut antall stendere og løpemeter trelast ut fra veggens lengde og senteravstand (c/c). Gratis kalkulator for bindingsverk og reisverk, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Stendere & trelast',
    intro:
      'Fyll inn veggens lengde og senteravstand (c/c), så regner vi ut antall stendere og totalt antall løpemeter trelast.',
    previewAlt: 'Forhåndsvisning av stendere & trelast',
    previewCaption: 'Slik ser stendere & trelast ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Slik regner du ut trelasten', body: (<><ol><li>Mål veggens lengde i meter.</li><li>Velg senteravstand (c/c) i mm.</li><li>Angi stenderens lengde/høyde.</li><li>Se antall stendere og totalt løpemeter.</li></ol></>) },
      { id: 'info', heading: 'Ikke glem', body: (<><p>I tillegg til de stående stenderne trengs svill og toppsvill, samt kubbing og ekstra stendere ved dører, vinduer og hjørner.</p></>) },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvordan regner jeg antall stendere?', answer: 'Antall stående stendere = lengde ÷ senteravstand (c/c) + 1. En 6 m vegg med c/c 600 mm gir 6000 ÷ 600 + 1 = 11 stendere.' },
      { question: 'Hvilken c/c-avstand skal jeg ha?', answer: 'Vanlige avstander er 450 eller 600 mm avhengig av plate- og isolasjonsmål samt krav. 600 mm er vanligst for innervegger.' },
      { question: 'Er svill og toppsvill inkludert?', answer: 'Nei, kalkulatoren regner de stående stenderne. Legg til trelast for svill (nederst) og toppsvill (øverst) separat.' },
      { question: 'Koster det noe?', answer: 'Nei, kalkulatoren er gratis og krever ingen konto.' },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'takstolar-kalkylator', label: 'Beregne takstoler' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberegner' },
      { slug: 'betong-kalkylator', label: 'Betongberegner' },
      { slug: '', label: 'Alle gratis verktøy' },
    ],
  },
  en: {
    metaTitle: 'Studs & timber calculator – number of studs (c/c) | ByggExp',
    description:
      'Work out the number of studs and linear metres of timber from the wall length and stud spacing (c/c). Free calculator for stud walls and framing, no account.',
    badge: 'Free calculator',
    h1: 'Studs & timber',
    intro:
      'Enter the wall length and stud spacing (c/c) and we work out the number of studs and the total linear metres of timber.',
    previewAlt: 'Preview of studs & timber',
    previewCaption: 'This is how studs & timber looks',
    sections: [
      { id: 'sa-raknar-du', heading: 'How to work out the timber', body: (<><figure className="lm-diagram"><img src="/landing/diagrams/reglar.webp" alt="Diagram: studs with c/c spacing and plasterboard" width={720} height={380} loading="lazy" /><figcaption>Stud spacing should match the board width: 900 mm board → c/c 450, 1200 mm → c/c 600.</figcaption></figure><ol><li>Measure the wall length in metres.</li><li>Choose the stud spacing (c/c) in mm.</li><li>Enter the stud length/height.</li><li>See the number of studs and total linear metres.</li></ol></>) },
      { id: 'info', heading: 'Don’t forget', body: (<><p>Besides the vertical studs you need bottom and top plates, plus noggins and extra studs at doors, windows and corners.</p></>) },
    ],
    faqHeading: 'Frequently asked questions',
    faq: [
      { question: 'How do I work out the number of studs?', answer: 'Number of vertical studs = length ÷ stud spacing (c/c) + 1. A 6 m wall at c/c 600 mm gives 6000 ÷ 600 + 1 = 11 studs.' },
      { question: 'Which c/c spacing should I use?', answer: 'Common spacings are 450 or 600 mm depending on board and insulation dimensions and requirements. 600 mm is the most common for interior walls.' },
      { question: 'Are the plates included?', answer: 'No, the calculator counts the vertical studs. Add timber for the bottom plate (sole) and top plate separately.' },
      { question: 'Does it cost anything?', answer: 'No, the calculator is free and requires no account.' },
    ],
    ctaHeading: 'Calculate material and time in ByggExp',
    ctaText: 'Keep track of material, time and costs per project. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More construction calculators',
    related: [
      { slug: 'takstolar-kalkylator', label: 'Roof trusses calculator' },
      { slug: 'kvadratmeter-kalkylator', label: 'Square-metre calculator' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/reglar-kalkylator`;

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
        locale={lang}
        tool={<ReglarKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="reglar-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/reglar-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="reglar-kalkylator"
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
