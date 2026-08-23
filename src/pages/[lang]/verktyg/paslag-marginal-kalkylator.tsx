import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PaslagKalkylatorTool from '../../../components/LeadMagnet/PaslagKalkylatorTool';
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
    metaTitle: 'Påslag & marginal kalkylator – räkna ut pris gratis | ByggExp',
    description:
      'Räkna ut försäljningspris från självkostnad med påslag eller marginal – och se skillnaden mellan påslag och marginal. Gratis kalkylator, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Påslag & marginal – räkna ut pris och vinst',
    intro:
      'Fyll i din självkostnad och antingen ett påslag eller en önskad marginal. Se försäljningspriset, vinsten och skillnaden mellan påslag och marginal direkt.',
    previewAlt: 'Förhandsvisning av påslag- och marginalkalkylator',
    previewCaption: 'Så ser påslag- och marginalkalkylatorn ut',
    sections: [
      {
        id: 'paslag-vs-marginal',
        heading: 'Påslag och marginal – vad är skillnaden?',
        body: (
          <>
            <p>
              De blandas ofta ihop men räknas på olika sätt:
            </p>
            <ul>
              <li><strong>Påslag</strong> räknas på självkostnaden: vinst ÷ självkostnad.</li>
              <li><strong>Marginal</strong> räknas på försäljningspriset: vinst ÷ försäljningspris.</li>
            </ul>
            <p>
              Därför blir marginalen alltid ett lägre procenttal än påslaget för samma pris – ett
              påslag på 30 % motsvarar till exempel en marginal på cirka 23 %.
            </p>
          </>
        ),
      },
      {
        id: 'sa-satter-du-pris',
        heading: 'Så sätter du rätt pris',
        body: (
          <p>
            Räkna alltid med din verkliga självkostnad – inte bara inköpspriset, utan även
            hantering, spill och risk. Utgå sedan från vilken marginal du behöver för att
            verksamheten ska gå ihop, och kontrollera att priset är rimligt mot marknaden.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om påslag och marginal',
    faq: [
      {
        question: 'Vad är skillnaden på påslag och marginal?',
        answer:
          'Påslag räknas på självkostnaden, marginal räknas på försäljningspriset. Ett påslag på 30 % ger en marginal på cirka 23 % – samma vinst i kronor, men olika procent beroende på vad du räknar på.',
      },
      {
        question: 'Hur räknar jag ut försäljningspriset?',
        answer:
          'Med påslag: självkostnad × (1 + påslag). Med marginal: självkostnad ÷ (1 − marginal). Kalkylatorn gör båda och visar vinst, påslag och marginal.',
      },
      {
        question: 'Vilket påslag ska jag ha på material?',
        answer:
          'Det varierar per bransch och företag, men ett påslag på material täcker hantering, spill, lagerhållning och risk. Använd kalkylatorn för att se vad ett visst påslag ger i marginal.',
      },
      {
        question: 'Kostar det något?',
        answer: 'Nej, kalkylatorn är gratis och kräver inget konto.',
      },
    ],
    ctaHeading: 'Se marginalen per projekt i ByggExp',
    ctaText: 'Följ intäkter, kostnader och marginal per projekt i realtid. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler gratis verktyg',
    related: [
      { href: '/blog/paslag-pa-material', label: 'Guide: materialpåslag för hantverkare' },
      { href: '/verktyg/timpris-kalkylator', label: 'Timpris-kalkylator' },
      { href: '/verktyg/moms-kalkylator', label: 'Momskalkylator' },
      { href: '/verktyg', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Påslag & margin kalkulator – regn ut pris gratis | ByggExp',
    description:
      'Regn ut salgspris fra selvkost med påslag eller margin – og se forskjellen mellom påslag og margin. Gratis kalkulator, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Påslag & margin – regn ut pris og fortjeneste',
    intro:
      'Fyll inn din selvkost og enten et påslag eller en ønsket margin. Se salgsprisen, fortjenesten og forskjellen mellom påslag og margin med en gang.',
    previewAlt: 'Forhåndsvisning av påslag- og marginkalkulator',
    previewCaption: 'Slik ser påslag- og marginkalkulatoren ut',
    sections: [
      {
        id: 'paslag-vs-marginal',
        heading: 'Påslag og margin – hva er forskjellen?',
        body: (
          <>
            <p>
              De blandes ofte sammen, men regnes på ulike måter:
            </p>
            <ul>
              <li><strong>Påslag</strong> regnes på selvkosten: fortjeneste ÷ selvkost.</li>
              <li><strong>Margin</strong> regnes på salgsprisen: fortjeneste ÷ salgspris.</li>
            </ul>
            <p>
              Derfor blir marginen alltid et lavere prosenttall enn påslaget for samme pris – et
              påslag på 30 % tilsvarer for eksempel en margin på cirka 23 %.
            </p>
          </>
        ),
      },
      {
        id: 'sa-satter-du-pris',
        heading: 'Slik setter du riktig pris',
        body: (
          <p>
            Regn alltid med din reelle selvkost – ikke bare innkjøpsprisen, men også
            håndtering, svinn og risiko. Ta deretter utgangspunkt i hvilken margin du trenger for at
            virksomheten skal gå rundt, og sjekk at prisen er rimelig mot markedet.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om påslag og margin',
    faq: [
      {
        question: 'Hva er forskjellen på påslag og margin?',
        answer:
          'Påslag regnes på selvkosten, margin regnes på salgsprisen. Et påslag på 30 % gir en margin på cirka 23 % – samme fortjeneste i kroner, men ulik prosent avhengig av hva du regner på.',
      },
      {
        question: 'Hvordan regner jeg ut salgsprisen?',
        answer:
          'Med påslag: selvkost × (1 + påslag). Med margin: selvkost ÷ (1 − margin). Kalkulatoren gjør begge og viser fortjeneste, påslag og margin.',
      },
      {
        question: 'Hvilket påslag skal jeg ha på materialer?',
        answer:
          'Det varierer per bransje og bedrift, men et påslag på materialer dekker håndtering, svinn, lagerhold og risiko. Bruk kalkulatoren for å se hva et bestemt påslag gir i margin.',
      },
      {
        question: 'Koster det noe?',
        answer: 'Nei, kalkulatoren er gratis og krever ingen konto.',
      },
    ],
    ctaHeading: 'Se marginen per prosjekt i ByggExp',
    ctaText: 'Følg inntekter, kostnader og margin per prosjekt i sanntid. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere gratis verktøy',
    related: [
      { href: '/blog/paslag-pa-material', label: 'Guide: materialpåslag for håndverkere' },
      { href: '/verktyg/timpris-kalkylator', label: 'Timepris-kalkulator' },
      { href: '/verktyg/moms-kalkylator', label: 'Mva-kalkulator' },
      { href: '/verktyg', label: 'Alle gratis verktøy' },
    ],
  },
  en: {
    metaTitle: 'Markup & margin calculator – work out price free | ByggExp',
    description:
      'Work out the selling price from cost using markup or margin – and see the difference between markup and margin. Free calculator, no account.',
    badge: 'Free calculator',
    h1: 'Markup & margin – work out price and profit',
    intro:
      'Enter your cost price and either a markup or a target margin. See the selling price, the profit and the difference between markup and margin instantly.',
    previewAlt: 'Preview of the markup and margin calculator',
    previewCaption: 'This is how the markup and margin calculator looks',
    sections: [
      {
        id: 'paslag-vs-marginal',
        heading: 'Markup and margin – what’s the difference?',
        body: (
          <>
            <p>
              They are often confused but calculated differently:
            </p>
            <ul>
              <li><strong>Markup</strong> is calculated on the cost: profit ÷ cost.</li>
              <li><strong>Margin</strong> is calculated on the selling price: profit ÷ selling price.</li>
            </ul>
            <p>
              That’s why the margin is always a lower percentage than the markup for the same price –
              a 30% markup equals, for example, a margin of about 23%.
            </p>
          </>
        ),
      },
      {
        id: 'sa-satter-du-pris',
        heading: 'How to set the right price',
        body: (
          <p>
            Always use your real cost price – not just the purchase price, but also handling, waste
            and risk. Then start from the margin you need for the business to break even, and check
            that the price is reasonable against the market.
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about markup and margin',
    faq: [
      {
        question: 'What is the difference between markup and margin?',
        answer:
          'Markup is calculated on the cost, margin on the selling price. A 30% markup gives a margin of about 23% – the same profit in currency, but a different percentage depending on what you calculate on.',
      },
      {
        question: 'How do I work out the selling price?',
        answer:
          'With markup: cost × (1 + markup). With margin: cost ÷ (1 − margin). The calculator does both and shows profit, markup and margin.',
      },
      {
        question: 'What markup should I have on material?',
        answer:
          'It varies by industry and company, but a markup on material covers handling, waste, storage and risk. Use the calculator to see what a given markup gives in margin.',
      },
      {
        question: 'Does it cost anything?',
        answer: 'No, the calculator is free and requires no account.',
      },
    ],
    ctaHeading: 'See the margin per project in ByggExp',
    ctaText: 'Follow revenue, costs and margin per project in real time. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More free tools',
    related: [
      { href: '/verktyg/timpris-kalkylator', label: 'Hourly rate calculator' },
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

export default function PaslagKalkylatorPage({ lang }: { lang: Locale }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/paslag-marginal-kalkylator`;

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
        embedSlug="paslag-marginal-kalkylator"
        embedTitle={c.h1}
        locale={lang}
        tool={<PaslagKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="paslag-marginal-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/paslag-preview.webp"
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
