import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import FargKalkylatorTool from '../../../components/LeadMagnet/FargKalkylatorTool';
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
    metaTitle: 'Färgkalkylator – räkna färgåtgång (liter) | ByggExp',
    description:
      'Räkna ut färgåtgången i liter: yta, antal strykningar och täckförmåga per färgtyp (vägg, tak, träfasad, puts) – med avdrag för fönster och dörrar. Gratis, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Färgkalkylator',
    intro:
      'Köp för lite färg och du står där mitt i jobbet utan täckning; köp för mycket och resten torkar in i garaget. Ange yta och antal strykningar för vägg, tak, träfasad eller puts, så får du litertalet direkt – med marginal för spill inräknad.',
    previewAlt: 'Förhandsvisning av färgåtgång-kalkylator',
    previewCaption: 'Så ser färgåtgång-kalkylatorn ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Så räknas färgåtgången',
        body: (
          <p>
            Formeln är: (yta − fönster/dörrar) × antal strykningar ÷ täckförmåga (m²/l), plus spill.
            En vägg på 40 m² med två strykningar och 7 m²/l ger 40 × 2 ÷ 7 ≈ 11,4 liter, plus
            marginal – alltså ungefär 12 liter.
          </p>
        ),
      },
      {
        id: 'tackformaga',
        heading: 'Täckförmåga per färgtyp',
        body: (
          <ul>
            <li><strong>Innervägg / tak:</strong> ca 6–8 m² per liter och strykning.</li>
            <li><strong>Träfasad:</strong> ca 5 m² per liter – grövre, sugande underlag.</li>
            <li><strong>Putsad fasad:</strong> ca 4 m² per liter.</li>
            <li>Kalkylatorn föreslår ett värde per typ; exakt siffra står på burken.</li>
          </ul>
        ),
      },
      {
        id: 'tips',
        heading: 'Tips för rätt mängd',
        body: (
          <p>
            Runda alltid uppåt – lite färg över är billigare än ett extra inköp mitt i jobbet, och
            en skvätt kvar räcker till bättringsmålning. Köp helst hela mängden i samma batch;
            kulören kan skilja aningen mellan tillverkningsomgångar även med samma benämning.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om färgåtgång',
    faq: [
      {
        question: 'Hur mycket färg går det åt per kvadratmeter?',
        answer:
          'Räkna baklänges från täckförmågan: en liter räcker till ungefär 6–8 m² innervägg per strykning, mindre på sugande fasad. Med två strykningar halveras ytan en liter når. Fyll i ytan så gör kalkylatorn om det till liter åt dig.',
      },
      {
        question: 'Hur många strykningar behöver jag?',
        answer:
          'Oftast två strykningar för ett jämnt resultat, ibland tre på sugande eller kraftigt kulört underlag. Kalkylatorn räknar med det antal du anger.',
      },
      {
        question: 'Ska jag dra av fönster och dörrar?',
        answer:
          'Ja, för en mer exakt mängd. Ange den sammanlagda ytan för fönster och dörrar i fältet "Avdrag" så räknas de bort innan färgåtgången beräknas.',
      },
      {
        question: 'Varför går det åt mer färg än beräknat?',
        answer:
          'Sugande, grova eller obehandlade underlag drar mer, och ett mörkt-till-ljust kulörbyte kan kräva en extra strykning eller grundfärg. Räkna gärna med lite marginal.',
      },
      {
        question: 'Kostar det något?',
        answer: 'Nej, kalkylatorn är gratis och kräver inget konto.',
      },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberäknare' },
      { slug: 'betong-kalkylator', label: 'Betongberäknare' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Malingskalkulator – regn ut malingsforbruk (liter) | ByggExp',
    description:
      'Regn ut malingsforbruket i liter: areal, antall strøk og dekkevne per malingstype (vegg, tak, trefasade, puss) – med fradrag for vinduer og dører. Gratis, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Malingskalkulator',
    intro:
      'Velg malingstype – innervegg, tak, trefasade eller puss – angi arealet og antall strøk, så regner vi ut hvor mange liter maling du trenger, med fradrag for vinduer og dører. Dekkevnen settes etter malingstype og kan justeres.',
    previewAlt: 'Forhåndsvisning av malingsforbruk-kalkulator',
    previewCaption: 'Slik ser malingsforbruk-kalkulatoren ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Slik regnes malingsforbruket',
        body: (
          <p>
            Formelen er: (areal − vinduer/dører) × antall strøk ÷ dekkevne (m²/l), pluss svinn.
            En vegg på 40 m² med to strøk og 7 m²/l gir 40 × 2 ÷ 7 ≈ 11,4 liter, pluss
            margin – altså omtrent 12 liter.
          </p>
        ),
      },
      {
        id: 'tackformaga',
        heading: 'Dekkevne per malingstype',
        body: (
          <ul>
            <li><strong>Innervegg / tak:</strong> ca. 6–8 m² per liter og strøk.</li>
            <li><strong>Trefasade:</strong> ca. 5 m² per liter – grovere, sugende underlag.</li>
            <li><strong>Pusset fasade:</strong> ca. 4 m² per liter.</li>
            <li>Kalkulatoren foreslår en verdi per type; eksakt tall står på spannet.</li>
          </ul>
        ),
      },
      {
        id: 'tips',
        heading: 'Tips for riktig mengde',
        body: (
          <p>
            Grunning kan trengs på nye eller sugende underlag, og et tredje strøk kreves
            iblant ved store fargeforskjeller. Litt ekstra maling er billigere enn et ekstra innkjøp midt
            i jobben – og samme base/farge kan variere litt mellom batcher.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om malingsforbruk',
    faq: [
      {
        question: 'Hvor mye maling går det med per kvadratmeter?',
        answer:
          'Det avhenger av malingstypen. Inne ligger vegg- og takmaling ofte på ca. 6–8 m² per liter og strøk, trefasade rundt 5 m²/l og pusset fasade rundt 4 m²/l. Kalkulatoren foreslår en verdi per malingstype som du kan justere etter spannet.',
      },
      {
        question: 'Hvor mange strøk trenger jeg?',
        answer:
          'Som oftest to strøk for et jevnt resultat, iblant tre på sugende eller kraftig farget underlag. Kalkulatoren regner med det antallet du angir.',
      },
      {
        question: 'Skal jeg trekke fra vinduer og dører?',
        answer:
          'Ja, for en mer eksakt mengde. Angi det samlede arealet for vinduer og dører i feltet "Fradrag", så trekkes de fra før malingsforbruket beregnes.',
      },
      {
        question: 'Hvorfor går det med mer maling enn beregnet?',
        answer:
          'Sugende, grove eller ubehandlede underlag drar mer, og et mørkt-til-lyst fargeskifte kan kreve et ekstra strøk eller grunning. Regn gjerne med litt margin.',
      },
      {
        question: 'Koster det noe?',
        answer: 'Nei, kalkulatoren er gratis og krever ingen konto.',
      },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberegner' },
      { slug: 'betong-kalkylator', label: 'Betongberegner' },
      { slug: '', label: 'Alle gratis verktøy' },
    ],
  },
  en: {
    metaTitle: 'Paint calculator – work out paint (litres) | ByggExp',
    description:
      'Work out paint consumption in litres: area, number of coats and coverage per paint type (wall, ceiling, wood façade, render) – with a deduction for windows and doors. Free, no account.',
    badge: 'Free calculator',
    h1: 'Paint calculator',
    intro:
      'Buy too little paint and you are back at the shop mid-job; buy too much and the rest dries out in the garage. Enter the area and number of coats for a wall, ceiling, wood façade or render, and you get the litres straight away – with a margin for waste already included.',
    previewAlt: 'Preview of the paint calculator',
    previewCaption: 'This is how the paint calculator looks',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'How paint consumption is calculated',
        body: (
          <p>
            The formula is: (area − windows/doors) × number of coats ÷ coverage (m²/l), plus waste.
            A 40 m² wall with two coats and 7 m²/l gives 40 × 2 ÷ 7 ≈ 11.4 litres, plus a margin –
            so about 12 litres.
          </p>
        ),
      },
      {
        id: 'tackformaga',
        heading: 'Coverage per paint type',
        body: (
          <ul>
            <li><strong>Interior wall / ceiling:</strong> about 6–8 m² per litre and coat.</li>
            <li><strong>Wood façade:</strong> about 5 m² per litre – rougher, absorbent surface.</li>
            <li><strong>Rendered façade:</strong> about 4 m² per litre.</li>
            <li>The calculator suggests a value per type; the exact figure is on the can.</li>
          </ul>
        ),
      },
      {
        id: 'tips',
        heading: 'Tips for the right amount',
        body: (
          <p>
            Always round up – a little paint left over is cheaper than a second trip mid-job, and the
            remainder covers touch-ups later. Buy the full amount in one batch where you can; the shade
            can differ slightly between production runs even under the same name.
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about paint consumption',
    faq: [
      {
        question: 'How much paint is used per square metre?',
        answer:
          'Work back from the coverage: a litre reaches about 6–8 m² of interior wall per coat, less on an absorbent façade. Two coats halve the area a litre covers. Enter your area and the calculator turns that into litres for you.',
      },
      {
        question: 'How many coats do I need?',
        answer:
          'Usually two coats for an even result, sometimes three on absorbent or strongly coloured surfaces. The calculator uses the number you enter.',
      },
      {
        question: 'Should I deduct windows and doors?',
        answer:
          'Yes, for a more accurate amount. Enter the combined area of windows and doors in the "Deduct" field and they are removed before the consumption is calculated.',
      },
      {
        question: 'Why is more paint used than calculated?',
        answer:
          'Absorbent, rough or untreated surfaces use more, and a dark-to-light colour change may need an extra coat or primer. Allow a little margin.',
      },
      {
        question: 'Does it cost anything?',
        answer: 'No, the calculator is free and requires no account.',
      },
    ],
    ctaHeading: 'Calculate material and time in ByggExp',
    ctaText: 'Keep track of material, time and costs per project. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More construction calculators',
    related: [
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/farg-kalkylator`;

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
        embedSlug="farg-kalkylator"
        embedTitle={c.h1}
        locale={lang}
        tool={<FargKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="farg-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/farg-preview.webp"
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
