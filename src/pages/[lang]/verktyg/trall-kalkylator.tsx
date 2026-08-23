import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import TrallKalkylatorTool from '../../../components/LeadMagnet/TrallKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import OffertLeadForm from '../../../components/LeadMagnet/OffertLeadForm';
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
    metaTitle: 'Trallberäknare – räkna löpmeter och brädor | ByggExp',
    description:
      'Räkna ut hur mycket trall du behöver: löpmeter och antal brädor utifrån altanens yta, brädbredd och springa. Gratis trallberäknare, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Trallberäknare',
    intro:
      'Planerar du en ny altan? Slå in ytan i trallberäknaren så får du löpmeter och antal brädor direkt – rätt siffror innan du beställer virket. Springa och spill räknas med, så du inte står en bräda kort på leveransdagen.',
    previewAlt: 'Förhandsvisning av trallberäknare',
    previewCaption: 'Så ser trallberäknaren ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Så räknar du ut trallen', body: (<><ol><li>Räkna ut altanens yta i m².</li><li>Ange brädans bredd och springan.</li><li>Ange brädans längd och spill.</li><li>Se löpmeter och antal brädor.</li></ol></>) },
      { id: 'info', heading: 'Glöm inte underlaget', body: (<><p>Underlaget avgör hur länge altanen håller. Utöver trall och reglar behöver du plintar eller grund och infästning. Köp gärna någon bräda extra för kap och framtida byten.</p></>) },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur mycket trall går det åt per m²?', answer: 'Det beror på brädans bredd och springan. Med 95 mm bräda och 4 mm springa täcker varje bräda ca 99 mm, vilket ger drygt 10 löpmeter per m².' },
      { question: 'Hur stor springa ska jag ha?', answer: 'Ofta 3–6 mm beroende på virkets fukthalt – trä sväller och krymper. Torrt virke lägger du tätare, färskt virke glesare.' },
      { question: 'Räknar kalkylatorn även reglar och bärlina?', answer: 'Ja, du får löpmeter reglar/bärlina vid valt c/c – som standard 600 mm. Bygger du tätare sänker du c/c, så uppdateras längden.' },
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
    metaTitle: 'Terrassebordberegner – regn løpemeter og bord | ByggExp',
    description:
      'Regn ut hvor mye terrassebord du trenger: løpemeter og antall bord ut fra terrassens areal, bordbredde og spalte. Gratis terrassebordberegner, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Terrassebordberegner',
    intro:
      'Fyll inn terrassens areal, bordets bredde og spalten mellom bordene, så regner vi ut hvor mange løpemeter terrassebord og antall bord du trenger, inkl. svinn.',
    previewAlt: 'Forhåndsvisning av terrassebordberegner',
    previewCaption: 'Slik ser terrassebordberegneren ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Slik regner du ut terrassebordene', body: (<><ol><li>Regn ut terrassens areal i m².</li><li>Angi bordets bredde og spalten.</li><li>Angi bordets lengde og svinn.</li><li>Se løpemeter og antall bord.</li></ol></>) },
      { id: 'info', heading: 'Ikke glem underlaget', body: (<><p>I tillegg til terrassebordene trenger du bjelkelag, plinter eller fundament og innfesting. Kjøp gjerne et bord ekstra til kapp og fremtidige utskiftninger.</p></>) },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvor mye terrassebord går med per m²?', answer: 'Det avhenger av bordets bredde og spalten. Med 95 mm bord og 4 mm spalte dekker hvert bord ca. 99 mm, noe som gir drøyt 10 løpemeter per m².' },
      { question: 'Hvor stor spalte skal jeg ha?', answer: 'Ofte 3–6 mm avhengig av trelastens fuktighet – tre beveger seg. Angi spalten i kalkulatoren, så påvirkes forbruket.' },
      { question: 'Regner kalkulatoren også bjelkelag?', answer: 'Ja, du får løpemeter bjelkelag ved valgt c/c – 600 mm som standard. Bygger du tettere senker du c/c, så oppdateres lengden. Legg til stolper/plinter og innfesting separat.' },
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
  en: {
    metaTitle: 'Decking calculator – linear metres and boards | ByggExp',
    description:
      'Work out how much decking you need: linear metres and number of boards from the deck area, board width and gap. Free decking calculator, no account.',
    badge: 'Free calculator',
    h1: 'Decking calculator',
    intro:
      'Planning a new deck? The decking calculator turns your area into linear metres and board counts in seconds – the right numbers before you order the timber. Gap and waste are built in, so you won’t come up a board short on delivery day.',
    previewAlt: 'Preview of the decking calculator',
    previewCaption: 'This is how the decking calculator looks',
    sections: [
      { id: 'sa-raknar-du', heading: 'How to work out the decking', body: (<><ol><li>Work out the deck area in m².</li><li>Enter the board width and the gap.</li><li>Enter the board length and waste.</li><li>See the linear metres and number of boards.</li></ol></>) },
      { id: 'info', heading: 'Don’t forget the substructure', body: (<><p>The substructure decides how long the deck lasts. Beyond the boards and joists you’ll still need piers or a foundation and fixings. Buy a board or two extra for cuts and future replacements.</p></>) },
    ],
    faqHeading: 'Frequently asked questions',
    faq: [
      { question: 'How much decking is used per m²?', answer: 'It depends on the board width and the gap. With a 95 mm board and a 4 mm gap, each board covers about 99 mm, giving a little over 10 linear metres per m².' },
      { question: 'How big a gap should I have?', answer: 'Often 3–6 mm depending on the timber’s moisture content – wood swells and shrinks. Lay dry timber tighter and fresh timber wider.' },
      { question: 'Does the calculator include the joists and bearers?', answer: 'Yes, you get linear metres of joists/bearers at your chosen c/c – 600 mm by default. Building tighter? Lower the c/c and the length updates.' },
      { question: 'Does it cost anything?', answer: 'No, the calculator is free and requires no account.' },
    ],
    ctaHeading: 'Calculate material and time in ByggExp',
    ctaText: 'Keep track of material, time and costs per project. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More construction calculators',
    related: [
      { slug: 'reglar-kalkylator', label: 'Studs & timber' },
      { slug: 'kvadratmeter-kalkylator', label: 'Square-metre calculator' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/trall-kalkylator`;

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
        tool={<TrallKalkylatorTool locale={lang} />}
        leadForm={<OffertLeadForm source="trall-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/trall-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="trall-kalkylator"
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
