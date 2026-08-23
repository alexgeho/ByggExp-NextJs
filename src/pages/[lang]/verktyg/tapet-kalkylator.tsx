import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import TapetKalkylatorTool from '../../../components/LeadMagnet/TapetKalkylatorTool';
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
    metaTitle: 'Tapetberäknare – hur många rullar tapet | ByggExp',
    description:
      'Räkna ut hur många rullar tapet du behöver utifrån väggytan och rullens storlek, inkl. spill för mönsterpassning. Gratis kalkylator, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Tapetberäknare',
    intro:
      'Fyll i väggytan och rullens yta så räknar vi ut hur många tapetrullar du behöver, med påslag för mönsterpassning och spill.',
    previewAlt: 'Förhandsvisning av tapetberäknare',
    previewCaption: 'Så ser tapetberäknare ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Så räknar du ut antal rullar', body: (<><ol><li>Räkna ut väggytan som ska tapetseras (m²).</li><li>Ange rullens yta (ofta ca 5 m²).</li><li>Lägg på spill för mönsterpassning.</li><li>Se hur många rullar du behöver.</li></ol></>) },
      { id: 'info', heading: 'Tips', body: (<><p>Köp alla rullar ur samma parti (samma batchnummer) så att färgen stämmer, och ta gärna en rulle extra som reserv.</p></>) },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur många m² täcker en tapetrulle?', answer: 'En standardrulle täcker ofta cirka 5 m², men det varierar – kontrollera på tapeten och ange värdet i kalkylatorn.' },
      { question: 'Varför behöver jag extra för mönster?', answer: 'Tapeter med mönster kräver att mönstret passas mellan våderna, vilket ger mer spill. Ju större mönster, desto större påslag.' },
      { question: 'Ska jag dra av fönster och dörrar?', answer: 'Vid små ytor kan du räkna bruttoväggytan för marginal. Vid stora öppningar kan du dra av dem, men ha alltid lite reserv.' },
      { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'farg-kalkylator', label: 'Färgåtgång' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberäknare' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Tapetberegner – hvor mange ruller tapet | ByggExp',
    description:
      'Regn ut hvor mange ruller tapet du trenger ut fra veggarealet og rullens størrelse, inkl. svinn for mønstertilpasning. Gratis kalkulator, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Tapetberegner',
    intro:
      'Fyll inn veggarealet og rullens areal, så regner vi ut hvor mange tapetruller du trenger, med påslag for mønstertilpasning og svinn.',
    previewAlt: 'Forhåndsvisning av tapetberegner',
    previewCaption: 'Slik ser tapetberegneren ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Slik regner du ut antall ruller', body: (<><ol><li>Regn ut veggarealet som skal tapetseres (m²).</li><li>Angi rullens areal (ofte ca. 5 m²).</li><li>Legg på svinn for mønstertilpasning.</li><li>Se hvor mange ruller du trenger.</li></ol></>) },
      { id: 'info', heading: 'Tips', body: (<><p>Kjøp alle rullene fra samme parti (samme batchnummer), så fargen stemmer, og ta gjerne en rull ekstra som reserve.</p></>) },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvor mange m² dekker en tapetrull?', answer: 'En standardrull dekker ofte cirka 5 m², men det varierer – kontroller på tapeten og angi verdien i kalkulatoren.' },
      { question: 'Hvorfor trenger jeg ekstra for mønster?', answer: 'Tapeter med mønster krever at mønsteret tilpasses mellom banene, noe som gir mer svinn. Jo større mønster, desto større påslag.' },
      { question: 'Skal jeg trekke fra vinduer og dører?', answer: 'Ved små arealer kan du regne brutto veggareal for margin. Ved store åpninger kan du trekke dem fra, men ha alltid litt reserve.' },
      { question: 'Koster det noe?', answer: 'Nei, kalkulatoren er gratis og krever ingen konto.' },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'farg-kalkylator', label: 'Malingsforbruk' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberegner' },
      { slug: '', label: 'Alle gratis verktøy' },
    ],
  },
  en: {
    metaTitle: 'Wallpaper calculator – how many rolls of wallpaper | ByggExp',
    description:
      'Work out how many rolls of wallpaper you need from the wall area and roll size, incl. waste for pattern matching. Free calculator, no account.',
    badge: 'Free calculator',
    h1: 'Wallpaper calculator',
    intro:
      'Enter the wall area and the roll’s area and we work out how many wallpaper rolls you need, with an allowance for pattern matching and waste.',
    previewAlt: 'Preview of the wallpaper calculator',
    previewCaption: 'This is how the wallpaper calculator looks',
    sections: [
      { id: 'sa-raknar-du', heading: 'How to work out the number of rolls', body: (<><ol><li>Work out the wall area to be papered (m²).</li><li>Enter the roll’s area (often about 5 m²).</li><li>Add waste for pattern matching.</li><li>See how many rolls you need.</li></ol></>) },
      { id: 'info', heading: 'Tips', body: (<><p>Buy all rolls from the same batch (same batch number) so the colour matches, and take an extra roll as a reserve.</p></>) },
    ],
    faqHeading: 'Frequently asked questions',
    faq: [
      { question: 'How many m² does a roll of wallpaper cover?', answer: 'A standard roll often covers about 5 m², but it varies – check the wallpaper and enter the value in the calculator.' },
      { question: 'Why do I need extra for the pattern?', answer: 'Patterned wallpaper needs the pattern matched between drops, which creates more waste. The larger the pattern, the larger the allowance.' },
      { question: 'Should I deduct windows and doors?', answer: 'For small areas you can use the gross wall area for margin. For large openings you can deduct them, but always keep some reserve.' },
      { question: 'Does it cost anything?', answer: 'No, the calculator is free and requires no account.' },
    ],
    ctaHeading: 'Calculate material and time in ByggExp',
    ctaText: 'Keep track of material, time and costs per project. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More construction calculators',
    related: [
      { slug: 'farg-kalkylator', label: 'Paint coverage' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/tapet-kalkylator`;

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
        embedSlug="tapet-kalkylator"
        embedTitle={c.h1}
        locale={lang}
        tool={<TapetKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="tapet-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/tapet-preview.webp"
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
