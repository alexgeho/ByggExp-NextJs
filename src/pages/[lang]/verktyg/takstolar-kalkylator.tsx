import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import TakstolarKalkylatorTool from '../../../components/LeadMagnet/TakstolarKalkylatorTool';
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
    metaTitle: 'Beräkna takstolar – kalkylator för antal utifrån c/c | ByggExp',
    description:
      'Beräkna takstolar gratis: räkna ut antal takstolar utifrån takets längd och centrumavstånd (c/c). Enkel kalkylator för takstolsberäkning, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Beräkna takstolar',
    intro:
      'Beräkna antal takstolar snabbt: fyll i takets längd och centrumavstånd (c/c) så gör kalkylatorn takstolsberäkningen åt dig – gratis och utan konto.',
    previewAlt: 'Förhandsvisning av takstolar',
    previewCaption: 'Så ser takstolar ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Så beräknar du antal takstolar', body: (<><p>Beräkningen av takstolar bygger på en enkel formel: <strong>antal = takets längd / c/c + 1</strong>. Den extra takstolen är för att både gavlarna ska få en takstol.</p><ol><li>Mät takets längd i meter.</li><li>Ange centrumavstånd (c/c) i mm.</li><li>Se antal takstolar direkt.</li></ol></>) },
      { id: 'exempel', heading: 'Exempel på takstolsberäkning', body: (<><p>Ett tak som är 10 meter långt med c/c 1200 mm: 10 000 / 1200 = 8,33, avrundat uppåt till 9, plus 1 = <strong>10 takstolar</strong>. Med tätare c/c 600 mm blir det i stället cirka 18 takstolar för samma tak – centrumavståndet styr alltså både antal och materialåtgång.</p></>) },
      { id: 'cc-avstand', heading: 'Vilket c/c-avstånd ska takstolarna ha?', body: (<><p>Centrumavståndet (c/c) beror på taktäckning, underlagstak och snölast. Vanliga avstånd är 1200 mm för prefabricerade fackverkstakstolar, men tätare c/c (t.ex. 600–900 mm) förekommer vid tung taktäckning eller hög snölast. Använd alltid det c/c som konstruktören angett för ditt tak.</p></>) },
      { id: 'info', heading: 'Antal vs. dimensionering av takstolar', body: (<><p>Den här kalkylatorn gör en <strong>beräkning av antal takstolar</strong> – inte en hållfasthetsberäkning. <strong>Dimensionering av takstolar</strong> (val av virkesdimensioner, spännvidd och infästning utifrån snö- och vindlast) ska göras av en konstruktör enligt Eurokod. Använd antalet härifrån för material och offert, och följ alltid konstruktörens ritning för utförandet.</p></>) },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur beräknar man antal takstolar?', answer: 'Beräkning av takstolar: ta takets längd delat med centrumavståndet (c/c) och lägg till 1. Ett 10 m tak med c/c 1200 mm ger 9 takstolar. Kalkylatorn räknar ut det åt dig.' },
      { question: 'Hur många takstolar behöver jag?', answer: 'Antal = takets längd delat med centrumavståndet (c/c) + 1. Ett 10 m tak med c/c 1200 mm ger 9 takstolar.' },
      { question: 'Vilket c/c-avstånd har takstolar?', answer: 'Vanligt är 1200 mm, men det beror på taktäckning, snölast och dimensionering. Följ konstruktörens uppgift.' },
      { question: 'Vad är skillnaden på att beräkna antal och att dimensionera takstolar?', answer: 'Den här kalkylatorn beräknar antal takstolar utifrån c/c. Dimensionering – att bestämma virkesdimensioner utifrån spännvidd och snölast – görs av en konstruktör enligt gällande last.' },
      { question: 'Ingår gavelspetsar och kortlingar?', answer: 'Nej, kalkylatorn räknar de vanliga takstolarna. Gavelkonstruktion och avväxlingar tillkommer.' },
      { question: 'Kostar det något?', answer: 'Nej, kalkylatorn för takstolar är gratis och kräver inget konto.' },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'tak-kalkylator', label: 'Takberäknare' },
      { slug: 'reglar-kalkylator', label: 'Reglar & virke' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Beregne takstoler – kalkulator for antall ut fra c/c | ByggExp',
    description:
      'Beregn takstoler gratis: regn ut antall takstoler ut fra takets lengde og senteravstand (c/c). Enkel kalkulator for takstolberegning, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Beregne takstoler',
    intro:
      'Beregn antall takstoler raskt: fyll inn takets lengde og senteravstand (c/c), så gjør kalkulatoren takstolberegningen for deg – gratis og uten konto.',
    previewAlt: 'Forhåndsvisning av takstoler',
    previewCaption: 'Slik ser takstoler ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Slik beregner du antall takstoler', body: (<><p>Beregningen av takstoler bygger på en enkel formel: <strong>antall = takets lengde / c/c + 1</strong>. Den ekstra takstolen er for at begge gavlene også skal få en takstol.</p><ol><li>Mål takets lengde i meter.</li><li>Angi senteravstand (c/c) i mm.</li><li>Se antall takstoler med en gang.</li></ol></>) },
      { id: 'exempel', heading: 'Eksempel på takstolberegning', body: (<><p>Et tak som er 10 meter langt med c/c 1200 mm: 10 000 / 1200 = 8,33, rundet opp til 9, pluss 1 = <strong>10 takstoler</strong>. Med tettere c/c 600 mm blir det i stedet cirka 18 takstoler for samme tak – senteravstanden styrer altså både antall og materialforbruk.</p></>) },
      { id: 'cc-avstand', heading: 'Hvilken c/c-avstand skal takstolene ha?', body: (<><p>Senteravstanden (c/c) avhenger av taktekking, undertak og snølast. Vanlige avstander er 1200 mm for prefabrikkerte fagverkstakstoler, men tettere c/c (f.eks. 600–900 mm) forekommer ved tung taktekking eller høy snølast. Bruk alltid den c/c-avstanden som konstruktøren har angitt for ditt tak.</p></>) },
      { id: 'info', heading: 'Antall vs. dimensjonering av takstoler', body: (<><p>Denne kalkulatoren gjør en <strong>beregning av antall takstoler</strong> – ikke en styrkeberegning. <strong>Dimensjonering av takstoler</strong> (valg av trelastdimensjoner, spennvidde og innfesting ut fra snø- og vindlast) skal gjøres av en konstruktør etter Eurokode. Bruk antallet herfra til materialer og tilbud, og følg alltid konstruktørens tegning for utførelsen.</p></>) },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvordan beregner man antall takstoler?', answer: 'Beregning av takstoler: ta takets lengde delt på senteravstanden (c/c) og legg til 1. Et tak på 10 m med c/c 1200 mm gir 9 takstoler. Kalkulatoren regner det ut for deg.' },
      { question: 'Hvor mange takstoler trenger jeg?', answer: 'Antall = takets lengde delt på senteravstanden (c/c) + 1. Et tak på 10 m med c/c 1200 mm gir 9 takstoler.' },
      { question: 'Hvilken c/c-avstand har takstoler?', answer: 'Vanlig er 1200 mm, men det avhenger av taktekking, snølast og dimensjonering. Følg konstruktørens angivelse.' },
      { question: 'Hva er forskjellen på å beregne antall og å dimensjonere takstoler?', answer: 'Denne kalkulatoren beregner antall takstoler ut fra c/c. Dimensjonering – å bestemme trelastdimensjoner ut fra spennvidde og snølast – gjøres av en konstruktør etter gjeldende last.' },
      { question: 'Er gavlspisser og kortlinger inkludert?', answer: 'Nei, kalkulatoren regner de vanlige takstolene. Gavlkonstruksjon og utvekslinger kommer i tillegg.' },
      { question: 'Koster det noe?', answer: 'Nei, kalkulatoren for takstoler er gratis og krever ingen konto.' },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'tak-kalkylator', label: 'Takberegner' },
      { slug: 'reglar-kalkylator', label: 'Stendere & trelast' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/takstolar-kalkylator`;

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
        tool={<TakstolarKalkylatorTool />}
        leadForm={<ToolLeadForm tool="takstolar-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/takstolar-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="takstolar-kalkylator"
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
