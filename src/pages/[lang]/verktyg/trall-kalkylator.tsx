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
    metaTitle: 'Trallberäknare – räkna löpmeter och brädor | ByggExp',
    description:
      'Räkna ut hur mycket trall du behöver: löpmeter och antal brädor utifrån altanens yta, brädbredd och springa. Gratis trallberäknare, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Trallberäknare',
    intro:
      'Fyll i altanens yta, brädans bredd och springan mellan brädorna så räknar vi ut hur många löpmeter trall och antal brädor du behöver, inkl. spill.',
    previewAlt: 'Förhandsvisning av trallberäknare',
    previewCaption: 'Så ser trallberäknare ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Så räknar du ut trallen', body: (<><ol><li>Räkna ut altanens yta i m².</li><li>Ange brädans bredd och springan.</li><li>Ange brädans längd och spill.</li><li>Se löpmeter och antal brädor.</li></ol></>) },
      { id: 'info', heading: 'Glöm inte underlaget', body: (<><p>Utöver trallbrädorna behöver du reglar/bärlina, plintar eller grund och infästning. Köp gärna någon bräda extra för kap och framtida byten.</p></>) },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur mycket trall går det åt per m²?', answer: 'Det beror på brädans bredd och springan. Med 95 mm bräda och 4 mm springa täcker varje bräda ca 99 mm, vilket ger drygt 10 löpmeter per m².' },
      { question: 'Hur stor springa ska jag ha?', answer: 'Ofta 3–6 mm beroende på virkets fukthalt – trä rör sig. Ange springan i kalkylatorn så påverkas åtgången.' },
      { question: 'Ingår reglar under trallen?', answer: 'Nej, kalkylatorn räknar trallbrädorna. Räkna virke till reglar/bärlina separat, ofta med c/c 600 mm.' },
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
      { question: 'Er bjelkelaget under terrassebordene inkludert?', answer: 'Nei, kalkulatoren regner terrassebordene. Regn trelast til bjelkelag separat, ofte med c/c 600 mm.' },
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
        tool={<TrallKalkylatorTool />}
        leadForm={<ToolLeadForm tool="trall-kalkylator" />}
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
