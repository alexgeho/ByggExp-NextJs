import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import StaketKalkylatorTool from '../../../components/LeadMagnet/StaketKalkylatorTool';
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
    metaTitle: 'Staketberäknare – antal stolpar och sektioner | ByggExp',
    description:
      'Räkna ut antal stolpar och sektioner för ett staket utifrån längden och avståndet mellan stolparna. Gratis staketberäknare, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Staketberäknare',
    intro:
      'Fyll i staketets längd och avståndet mellan stolparna (c/c) så räknar vi ut antal stolpar och sektioner.',
    previewAlt: 'Förhandsvisning av staketberäknare',
    previewCaption: 'Så ser staketberäknare ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Så räknar du ut staketet', body: (<><ol><li>Mät staketets längd i meter.</li><li>Ange avståndet mellan stolparna (c/c).</li><li>Se antal stolpar och sektioner.</li></ol></>) },
      { id: 'info', heading: 'Tänk på stabiliteten', body: (<><p>Kortare stolpavstånd ger ett stadigare staket, särskilt för höga plank eller blåsiga lägen. Gräv ner eller gjut fast stolparna ordentligt.</p></>) },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur många stolpar behöver jag till staketet?', answer: 'Antal sektioner är längden delat med stolpavståndet, avrundat uppåt. Antal stolpar är sektioner + 1.' },
      { question: 'Vilket avstånd mellan staketstolpar?', answer: 'Ofta 2–2,5 meter, men det beror på staketets typ och vindlast. Tätare avstånd ger stadigare staket.' },
      { question: 'Ingår grinden?', answer: 'Nej, räkna grind och eventuella hörnstolpar separat.' },
      { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'reglar-kalkylator', label: 'Reglar & virke' },
      { slug: 'grus-kalkylator', label: 'Grus & makadam' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Gjerdeberegner – antall stolper og seksjoner | ByggExp',
    description:
      'Regn ut antall stolper og seksjoner for et gjerde ut fra lengden og avstanden mellom stolpene. Gratis gjerdeberegner, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Gjerdeberegner',
    intro:
      'Fyll inn gjerdets lengde og avstanden mellom stolpene (c/c), så regner vi ut antall stolper og seksjoner.',
    previewAlt: 'Forhåndsvisning av gjerdeberegner',
    previewCaption: 'Slik ser gjerdeberegneren ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Slik regner du ut gjerdet', body: (<><ol><li>Mål gjerdets lengde i meter.</li><li>Angi avstanden mellom stolpene (c/c).</li><li>Se antall stolper og seksjoner.</li></ol></>) },
      { id: 'info', heading: 'Tenk på stabiliteten', body: (<><p>Kortere stolpeavstand gir et stødigere gjerde, særlig for høye plank eller værutsatte steder. Grav ned eller støp fast stolpene skikkelig.</p></>) },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvor mange stolper trenger jeg til gjerdet?', answer: 'Antall seksjoner er lengden delt på stolpeavstanden, rundet opp. Antall stolper er seksjoner + 1.' },
      { question: 'Hvilken avstand mellom gjerdestolper?', answer: 'Ofte 2–2,5 meter, men det avhenger av gjerdets type og vindlast. Tettere avstand gir stødigere gjerde.' },
      { question: 'Er grinden inkludert?', answer: 'Nei, regn grind og eventuelle hjørnestolper separat.' },
      { question: 'Koster det noe?', answer: 'Nei, kalkulatoren er gratis og krever ingen konto.' },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'reglar-kalkylator', label: 'Stendere & trelast' },
      { slug: 'grus-kalkylator', label: 'Grus & pukk' },
      { slug: '', label: 'Alle gratis verktøy' },
    ],
  },
  en: {
    metaTitle: 'Fence calculator – number of posts and sections | ByggExp',
    description:
      'Work out the number of posts and sections for a fence from the length and the spacing between posts. Free fence calculator, no account.',
    badge: 'Free calculator',
    h1: 'Fence calculator',
    intro:
      'Enter the fence length and the spacing between posts (c/c) and we work out the number of posts and sections.',
    previewAlt: 'Preview of the fence calculator',
    previewCaption: 'This is how the fence calculator looks',
    sections: [
      { id: 'sa-raknar-du', heading: 'How to work out the fence', body: (<><ol><li>Measure the fence length in metres.</li><li>Enter the spacing between posts (c/c).</li><li>See the number of posts and sections.</li></ol></>) },
      { id: 'info', heading: 'Think about stability', body: (<><p>A shorter post spacing gives a sturdier fence, especially for tall panels or windy spots. Dig in or concrete the posts properly.</p></>) },
    ],
    faqHeading: 'Frequently asked questions',
    faq: [
      { question: 'How many posts do I need for the fence?', answer: 'The number of sections is the length divided by the post spacing, rounded up. The number of posts is sections + 1.' },
      { question: 'What spacing between fence posts?', answer: 'Often 2–2.5 metres, but it depends on the fence type and wind load. Closer spacing gives a sturdier fence.' },
      { question: 'Is the gate included?', answer: 'No, count the gate and any corner posts separately.' },
      { question: 'Does it cost anything?', answer: 'No, the calculator is free and requires no account.' },
    ],
    ctaHeading: 'Calculate material and time in ByggExp',
    ctaText: 'Keep track of material, time and costs per project. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More construction calculators',
    related: [
      { slug: 'reglar-kalkylator', label: 'Studs & timber' },
      { slug: 'grus-kalkylator', label: 'Gravel & crushed stone' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/staket-kalkylator`;

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
        tool={<StaketKalkylatorTool locale={lang} />}
        leadForm={<OffertLeadForm source="staket-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/staket-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="staket-kalkylator"
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
