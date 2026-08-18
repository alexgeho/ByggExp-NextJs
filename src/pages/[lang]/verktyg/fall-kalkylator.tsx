import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import FallKalkylatorTool from '../../../components/LeadMagnet/FallKalkylatorTool';
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
    metaTitle: 'Fall & lutning – räkna ut höjdskillnad gratis | ByggExp',
    description:
      'Räkna ut fall och lutning: höjdskillnad, procent och förhållande (1:X) utifrån längd och fall i mm/m. Bra för avlopp, mark och tak. Gratis, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Fall & lutning',
    intro:
      'Fyll i längden och fallet i mm per meter så räknar vi ut total höjdskillnad, lutning i procent och som förhållande (1:X). Bra för avlopp, mark och tak.',
    previewAlt: 'Förhandsvisning av fall & lutning',
    previewCaption: 'Så ser fall & lutning ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Så räknar du ut fallet', body: (<><ol><li>Ange längden i meter.</li><li>Ange önskat fall i mm per meter.</li><li>Se höjdskillnaden, lutningen i procent och som 1:X.</li></ol></>) },
      { id: 'info', heading: 'Riktvärden', body: (<><p>Fall uttrycks på flera sätt: mm per meter, procent och förhållande (1:X). 20 mm/m är samma sak som 2 % och 1:50. Använd det mått som gäller för din tillämpning.</p></>) },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur räknar jag ut fall?', answer: 'Fall anges ofta i mm per meter. Höjdskillnaden är längden gånger fallet: 6 m med 15 mm/m ger 90 mm. Kalkylatorn visar även procent och förhållande.' },
      { question: 'Vilket fall ska avloppet ha?', answer: 'Riktvärden är ofta 10–20 mm per meter för avloppsrör, men det beror på rördimension och tillämpning. Följ gällande branschregler.' },
      { question: 'Hur mycket fall från husgrunden?', answer: 'Marken bör luta bort från huset, ofta minst 15 mm per meter (1:50) de första metrarna, för att leda bort vatten.' },
      { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'trappa-kalkylator', label: 'Trappberäknare' },
      { slug: 'grus-kalkylator', label: 'Grus & makadam' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Fall & helling – regn ut høydeforskjell gratis | ByggExp',
    description:
      'Regn ut fall og helling: høydeforskjell, prosent og forhold (1:X) ut fra lengde og fall i mm/m. Bra for avløp, terreng og tak. Gratis, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Fall & helling',
    intro:
      'Fyll inn lengden og fallet i mm per meter, så regner vi ut total høydeforskjell, helling i prosent og som forhold (1:X). Bra for avløp, terreng og tak.',
    previewAlt: 'Forhåndsvisning av fall & helling',
    previewCaption: 'Slik ser fall & helling ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Slik regner du ut fallet', body: (<><ol><li>Angi lengden i meter.</li><li>Angi ønsket fall i mm per meter.</li><li>Se høydeforskjellen, hellingen i prosent og som 1:X.</li></ol></>) },
      { id: 'info', heading: 'Veiledende verdier', body: (<><p>Fall uttrykkes på flere måter: mm per meter, prosent og forhold (1:X). 20 mm/m er det samme som 2 % og 1:50. Bruk det målet som gjelder for din anvendelse.</p></>) },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvordan regner jeg ut fall?', answer: 'Fall angis ofte i mm per meter. Høydeforskjellen er lengden ganger fallet: 6 m med 15 mm/m gir 90 mm. Kalkulatoren viser også prosent og forhold.' },
      { question: 'Hvilket fall skal avløpet ha?', answer: 'Veiledende verdier er ofte 10–20 mm per meter for avløpsrør, men det avhenger av rørdimensjon og anvendelse. Følg gjeldende bransjeregler.' },
      { question: 'Hvor mye fall fra husgrunnen?', answer: 'Terrenget bør helle bort fra huset, ofte minst 15 mm per meter (1:50) de første metrene, for å lede bort vann.' },
      { question: 'Koster det noe?', answer: 'Nei, kalkulatoren er gratis og krever ingen konto.' },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'trappa-kalkylator', label: 'Trappeberegner' },
      { slug: 'grus-kalkylator', label: 'Grus & pukk' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/fall-kalkylator`;

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
        tool={<FallKalkylatorTool />}
        leadForm={<ToolLeadForm tool="fall-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/fall-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="fall-kalkylator"
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
