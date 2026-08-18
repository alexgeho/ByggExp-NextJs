import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import IsoleringKalkylatorTool from '../../../components/LeadMagnet/IsoleringKalkylatorTool';
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
  // slug → /verktyg/<slug>; path → /<path> for non-verktyg links (e.g. blog).
  related: { slug: string; label: string; path?: string }[];
};

const CONTENT: Record<Locale, ToolContent> = {
  sv: {
    metaTitle: 'Isoleringskalkylator – förpackningar, m³ & U-värde | ByggExp',
    description:
      'Räkna ut isolering: antal förpackningar, volym (m³) och ett ungefärligt U-värde utifrån yta, tjocklek och lambda. Gratis isoleringskalkylator, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Isoleringskalkylator',
    intro:
      'Ange ytan och isoleringstjockleken så räknar vi ut antal förpackningar, volym i m³ och ett ungefärligt U-värde för isolerskiktet. Standard är mineralull med lambda 0,036 W/mK.',
    previewAlt: 'Förhandsvisning av isoleringsberäknare',
    previewCaption: 'Så ser isoleringsberäknare ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Det här räknar kalkylatorn ut',
        body: (
          <ul>
            <li><strong>Behov:</strong> ytan plus spill (m²).</li>
            <li><strong>Förpackningar:</strong> behovet delat på m² per förpackning.</li>
            <li><strong>Volym:</strong> yta × tjocklek (m³).</li>
            <li><strong>U-värde (ca):</strong> lambda ÷ tjocklek – för enbart isolerskiktet.</li>
          </ul>
        ),
      },
      {
        id: 'tjocklek-uvarde',
        heading: 'Tjocklek, lambda och U-värde',
        body: (
          <p>
            Samma förpackning täcker färre m² ju tjockare isolering du väljer. Tjockare skikt och
            lägre lambda ger lägre U-värde (bättre). Grovt: 10 cm mineralull ≈ U 0,4, 20 cm ≈ 0,2
            och 40 cm ≈ 0,1 W/m²K. Kontrollera vilken tjocklek din konstruktion (vind, vägg, golv)
            kräver innan du beställer.
          </p>
        ),
      },
      {
        id: 'reglar',
        heading: 'Reglar, skivbredd och köldbryggor',
        body: (
          <p>
            Isolerskivor på 560 mm passar reglar med c/c 600 mm. Lägg gärna isoleringen i två
            korsande skikt så att reglarna inte bildar genomgående köldbryggor – det ger en märkbart
            bättre vägg i praktiken än U-värdet för enbart isolerskiktet antyder.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur mycket isolering går det åt?', answer: 'Det beror på ytan och hur många m² en förpackning täcker vid vald tjocklek – ju tjockare isolering, desto färre m² per förpackning. Kalkylatorn räknar även ut volymen (m³) och antal förpackningar inkl. spill.' },
      { question: 'Vad betyder lambda och U-värde?', answer: 'Lambda (W/mK) är materialets värmeledningsförmåga – mineralull ligger på ca 0,033–0,037. U-värdet beskriver hur mycket värme som släpps igenom: lägre är bättre. Kalkylatorn visar ett ungefärligt U-värde för enbart isolerskiktet (U ≈ lambda ÷ tjocklek).' },
      { question: 'Vilket U-värde ger olika tjocklek?', answer: 'Grovt räknat ger ca 10 cm mineralull U ≈ 0,4, 20 cm ≈ 0,2 och 40 cm ≈ 0,1 W/m²K för isolerskiktet. Ett korrekt U-värde för hela väggen tar även hänsyn till reglar, skivor och köldbryggor.' },
      { question: 'Vilket c/c ska reglarna ha?', answer: 'Skivor som är 560 mm breda passar reglar med c/c 600 mm (de kläms lätt ihop och sitter kvar av friktion). Lägg gärna isoleringen i två korsande skikt för att bryta köldbryggor.' },
      { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: '', label: 'Guide: beräkna U-värde', path: 'blog/berakna-u-varde-isolering' },
      { slug: 'reglar-kalkylator', label: 'Reglar & virke' },
      { slug: 'gips-kalkylator', label: 'Gipsberäknare' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Isolasjonskalkulator – pakker, m³ & U-verdi | ByggExp',
    description:
      'Regn ut isolasjon: antall pakker, volum (m³) og en omtrentlig U-verdi ut fra flate, tykkelse og lambda. Gratis isolasjonskalkulator, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Isolasjonskalkulator',
    intro:
      'Angi flaten og isolasjonstykkelsen så regner vi ut antall pakker, volum i m³ og en omtrentlig U-verdi for isolasjonssjiktet. Standard er mineralull med lambda 0,036 W/mK.',
    previewAlt: 'Forhåndsvisning av isolasjonsberegner',
    previewCaption: 'Slik ser isolasjonsberegner ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Dette regner kalkulatoren ut',
        body: (
          <ul>
            <li><strong>Behov:</strong> flaten pluss svinn (m²).</li>
            <li><strong>Pakker:</strong> behovet delt på m² per pakke.</li>
            <li><strong>Volum:</strong> flate × tykkelse (m³).</li>
            <li><strong>U-verdi (ca):</strong> lambda ÷ tykkelse – for kun isolasjonssjiktet.</li>
          </ul>
        ),
      },
      {
        id: 'tjocklek-uvarde',
        heading: 'Tykkelse, lambda og U-verdi',
        body: (
          <p>
            Samme pakke dekker færre m² jo tykkere isolasjon du velger. Tykkere sjikt og
            lavere lambda gir lavere U-verdi (bedre). Grovt: 10 cm mineralull ≈ U 0,4, 20 cm ≈ 0,2
            og 40 cm ≈ 0,1 W/m²K. Kontroller hvilken tykkelse din konstruksjon (loft, vegg, gulv)
            krever før du bestiller.
          </p>
        ),
      },
      {
        id: 'reglar',
        heading: 'Stendere, platebredde og kuldebroer',
        body: (
          <p>
            Isolasjonsplater på 560 mm passer stendere med c/c 600 mm. Legg gjerne isolasjonen i to
            kryssende sjikt så stenderne ikke danner gjennomgående kuldebroer – det gir en merkbart
            bedre vegg i praksis enn U-verdien for kun isolasjonssjiktet antyder.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvor mye isolasjon går det med?', answer: 'Det avhenger av flaten og hvor mange m² en pakke dekker ved valgt tykkelse – jo tykkere isolasjon, desto færre m² per pakke. Kalkulatoren regner også ut volumet (m³) og antall pakker inkl. svinn.' },
      { question: 'Hva betyr lambda og U-verdi?', answer: 'Lambda (W/mK) er materialets varmeledningsevne – mineralull ligger på ca 0,033–0,037. U-verdien beskriver hvor mye varme som slippes gjennom: lavere er bedre. Kalkulatoren viser en omtrentlig U-verdi for kun isolasjonssjiktet (U ≈ lambda ÷ tykkelse).' },
      { question: 'Hvilken U-verdi gir ulik tykkelse?', answer: 'Grovt regnet gir ca 10 cm mineralull U ≈ 0,4, 20 cm ≈ 0,2 og 40 cm ≈ 0,1 W/m²K for isolasjonssjiktet. En korrekt U-verdi for hele veggen tar også hensyn til stendere, plater og kuldebroer.' },
      { question: 'Hvilken c/c skal stenderne ha?', answer: 'Plater som er 560 mm breie passer stendere med c/c 600 mm (de klemmes lett sammen og sitter av friksjon). Legg gjerne isolasjonen i to kryssende sjikt for å bryte kuldebroer.' },
      { question: 'Koster det noe?', answer: 'Nei, kalkulatoren er gratis og krever ingen konto.' },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: '', label: 'Guide: beregne U-verdi', path: 'blog/berakna-u-varde-isolering' },
      { slug: 'reglar-kalkylator', label: 'Stendere & trelast' },
      { slug: 'gips-kalkylator', label: 'Gipsberegner' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/isolering-kalkylator`;

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
        tool={<IsoleringKalkylatorTool />}
        leadForm={<ToolLeadForm tool="isolering-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/isolering-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="isolering-kalkylator"
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
          href: r.path
            ? `/${lang}/${r.path}`
            : `/${lang}/verktyg${r.slug ? `/${r.slug}` : ''}`,
          label: r.label,
        }))}
      />

      <Footer footerT={footerT} />
    </>
  );
}
