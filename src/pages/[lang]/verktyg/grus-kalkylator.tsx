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
    metaTitle: 'Grus & makadam kalkylator – m³ och ton | ByggExp',
    description:
      'Räkna ut hur mycket grus, makadam eller matjord du behöver: volym i kubikmeter och vikt i ton utifrån yta och djup. Gratis kalkylator, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Grus & makadam',
    intro:
      'Beställ rätt mängd på en gång. Kalkylatorn räknar om ytan till både färdig volym och den lösare mängd du faktiskt behöver beställa – med packningspåslag – och ger vikten i ton för grus, makadam, matjord eller sand.',
    previewAlt: 'Förhandsvisning av grus & makadam',
    previewCaption: 'Så ser grus & makadam ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Så räknar du ut mängden', body: (<><figure className="lm-diagram"><img src="/landing/diagrams/grus.webp" alt="Diagram: grusvolym som yta gånger tjocklek med packningspåslag" width={720} height={380} loading="lazy" /><figcaption>Volym = yta × tjocklek, plus ett påslag för packning.</figcaption></figure><ol><li>Mät ytans längd och bredd i meter.</li><li>Ange djupet i centimeter.</li><li>Välj materialets densitet (ton/m³).</li><li>Se volymen i m³ och vikten i ton.</li></ol></>) },
      { id: 'info', heading: 'Tänk på packning', body: (<><p>Material packar ihop sig efter läggning, så räkna med lite extra om djupet ska hålla när ytan är färdigpackad. Kalkylatorn gör det åt dig: raden ”att beställa” visar den lösa mängden, som alltid är större än den färdiga volymen.</p></>) },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur räknar jag ut hur mycket grus jag behöver?', answer: 'Volymen är längd × bredd × djup i meter. En yta på 10 × 3 m med 10 cm djup blir 3 m³. Vikten är volymen gånger densiteten.' },
      { question: 'Hur mycket väger en kubik grus?', answer: 'Grus och makadam väger ofta cirka 1,5–1,8 ton per m³, matjord ca 1,2–1,5. Ange densiteten i kalkylatorn.' },
      { question: 'Säljs grus i ton eller kubik?', answer: 'Ofta i ton vid leverans och i kubik vid uppskattning – därför visar kalkylatorn båda.' },
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
  en: {
    metaTitle: 'Gravel & crushed stone calculator – m³ and tonnes | ByggExp',
    description:
      'Work out how much gravel, crushed stone or topsoil you need: volume in cubic metres and weight in tonnes from area and depth. Free calculator, no account.',
    badge: 'Free calculator',
    h1: 'Gravel & crushed stone',
    intro:
      'Order the right amount the first time. The calculator turns your area into both the finished volume and the looser quantity you actually order – compaction included – and gives the weight in tonnes for gravel, crushed stone, topsoil or sand.',
    previewAlt: 'Preview of gravel & crushed stone',
    previewCaption: 'This is how gravel & crushed stone looks',
    sections: [
      { id: 'sa-raknar-du', heading: 'How to work out the quantity', body: (<><figure className="lm-diagram"><img src="/landing/diagrams/grus.webp" alt="Diagram: gravel volume as area times thickness with a compaction allowance" width={720} height={380} loading="lazy" /><figcaption>Volume = area × thickness, plus an allowance for compaction.</figcaption></figure><ol><li>Measure the area’s length and width in metres.</li><li>Enter the depth in centimetres.</li><li>Choose the material’s density (t/m³).</li><li>See the volume in m³ and the weight in tonnes.</li></ol></>) },
      { id: 'info', heading: 'Allow for compaction', body: (<><p>Material compacts after laying, so allow a little extra if the depth must hold once the surface is settled. The calculator does this for you: the “to order” figure is the loose quantity, always larger than the finished volume.</p></>) },
    ],
    faqHeading: 'Frequently asked questions',
    faq: [
      { question: 'How do I work out how much gravel I need?', answer: 'The volume is length × width × depth in metres. A 10 × 3 m area at 10 cm depth is 3 m³. The weight is the volume times the density.' },
      { question: 'How much does a cubic metre of gravel weigh?', answer: 'Gravel and crushed stone often weigh about 1.5–1.8 tonnes per m³, topsoil about 1.2–1.5. Enter the density in the calculator.' },
      { question: 'Is gravel sold in tonnes or cubic metres?', answer: 'Often in tonnes on delivery and in cubic metres when estimating – so the calculator shows both.' },
      { question: 'Does it cost anything?', answer: 'No, the calculator is free and requires no account.' },
    ],
    ctaHeading: 'Calculate material and time in ByggExp',
    ctaText: 'Keep track of material, time and costs per project. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More construction calculators',
    related: [
      { slug: 'betong-kalkylator', label: 'Concrete calculator' },
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
        wide
        badge={c.badge}
        title={c.h1}
        intro={c.intro}
        locale={lang}
        tool={<GrusKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="grus-kalkylator" locale={lang} />}
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
