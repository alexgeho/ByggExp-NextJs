import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import GrusKalkylatorTool from '../../../components/LeadMagnet/GrusKalkylatorTool';
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
    metaTitle: 'Grus & makadam kalkylator – m³ och ton | ByggExp',
    description:
      'Räkna ut hur mycket grus, makadam eller matjord du behöver: volym i kubikmeter och vikt i ton utifrån yta och djup. Gratis kalkylator, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Grus & makadam',
    intro:
      'Fyll i yta och djup så räknar vi ut volymen i kubikmeter och vikten i ton. Fungerar för grus, makadam, matjord och sand – justera densiteten efter materialet.',
    previewAlt: 'Förhandsvisning av grus & makadam',
    previewCaption: 'Så ser grus & makadam ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Så räknar du ut mängden', body: (<><figure className="lm-diagram"><img src="/landing/diagrams/grus.webp" alt="Diagram: grusvolym som yta gånger tjocklek med packningspåslag" width={720} height={380} loading="lazy" /><figcaption>Volym = yta × tjocklek, plus packningspåslag. 1 m³ grus väger ca 1,5–1,8 ton.</figcaption></figure><ol><li>Mät ytans längd och bredd i meter.</li><li>Ange djupet i centimeter.</li><li>Välj materialets densitet (ton/m³).</li><li>Se volymen i m³ och vikten i ton.</li></ol></>) },
      { id: 'info', heading: 'Tänk på packning', body: (<><p>Material packar ihop sig efter läggning, så räkna med lite extra om djupet ska hålla efter packning. Densiteten skiljer sig mellan material – fråga leverantören.</p></>) },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur räknar jag ut hur mycket grus jag behöver?', answer: 'Volymen är längd × bredd × djup i meter. En yta på 10 × 3 m med 10 cm djup blir 3 m³. Vikten är volymen gånger densiteten.' },
      { question: 'Hur mycket väger en kubik grus?', answer: 'Grus och makadam väger ofta cirka 1,5–1,8 ton per m³, matjord ca 1,2–1,5. Ange densiteten i kalkylatorn.' },
      { question: 'Grus säljs i ton eller kubik?', answer: 'Ofta i ton vid leverans och i kubik vid uppskattning – därför visar kalkylatorn båda.' },
      { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'betong-kalkylator', label: 'Betongberäknare' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberäknare' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Grus & pukk kalkulator – m³ og tonn | ByggExp',
    description:
      'Regn ut hvor mye grus, pukk eller matjord du trenger: volum i kubikkmeter og vekt i tonn ut fra flate og dybde. Gratis kalkulator, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Grus & pukk',
    intro:
      'Fyll inn flate og dybde, så regner vi ut volumet i kubikkmeter og vekten i tonn. Fungerer for grus, pukk, matjord og sand – juster densiteten etter materialet.',
    previewAlt: 'Forhåndsvisning av grus & pukk',
    previewCaption: 'Slik ser grus & pukk ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Slik regner du ut mengden', body: (<><ol><li>Mål flatens lengde og bredde i meter.</li><li>Angi dybden i centimeter.</li><li>Velg materialets densitet (tonn/m³).</li><li>Se volumet i m³ og vekten i tonn.</li></ol></>) },
      { id: 'info', heading: 'Tenk på pakking', body: (<><p>Materialer pakker seg sammen etter legging, så regn med litt ekstra hvis dybden skal holde etter pakking. Densiteten varierer mellom materialer – spør leverandøren.</p></>) },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvordan regner jeg ut hvor mye grus jeg trenger?', answer: 'Volumet er lengde × bredde × dybde i meter. En flate på 10 × 3 m med 10 cm dybde blir 3 m³. Vekten er volumet ganget med densiteten.' },
      { question: 'Hvor mye veier en kubikk grus?', answer: 'Grus og pukk veier ofte cirka 1,5–1,8 tonn per m³, matjord ca 1,2–1,5. Angi densiteten i kalkulatoren.' },
      { question: 'Selges grus i tonn eller kubikk?', answer: 'Ofte i tonn ved levering og i kubikk ved estimering – derfor viser kalkulatoren begge.' },
      { question: 'Koster det noe?', answer: 'Nei, kalkulatoren er gratis og krever ingen konto.' },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'betong-kalkylator', label: 'Betongberegner' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/grus-kalkylator`;

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
        tool={<GrusKalkylatorTool />}
        leadForm={<ToolLeadForm tool="grus-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/grus-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="grus-kalkylator"
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
