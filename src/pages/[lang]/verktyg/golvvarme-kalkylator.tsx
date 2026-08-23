import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import GolvvarmeKalkylatorTool from '../../../components/LeadMagnet/GolvvarmeKalkylatorTool';
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
    metaTitle: 'Golvvärme kalkylator – slinglängd och antal slingor | ByggExp',
    description:
      'Räkna ut slinglängd och antal slingor för vattenburen golvvärme utifrån yta och centrumavstånd (c/c). Gratis kalkylator, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Golvvärme',
    intro:
      'Fyll i ytan och centrumavståndet (c/c) mellan rören så räknar vi ut ungefärlig slinglängd och antal slingor.',
    previewAlt: 'Förhandsvisning av golvvärme',
    previewCaption: 'Så ser golvvärme ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Så räknar du ut golvvärmen', body: (<><ol><li>Räkna ut ytan i m².</li><li>Ange c/c-avstånd mellan rören.</li><li>Ange max slinglängd per slinga.</li><li>Se ungefärlig slinglängd och antal slingor.</li></ol></>) },
      { id: 'info', heading: 'Glöm inte tillopp och retur', body: (<><p>Slinglängden ovan är för själva golvytan. Räkna med extra rör fram och tillbaka till fördelaren, och håll dig inom maxlängden per slinga för ett jämnt flöde.</p></>) },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur lång slinga behöver jag för golvvärme?', answer: 'Ungefär ytan delat med c/c-avståndet: 20 m² med c/c 200 mm ger cirka 100 meter rör. Lägg till rör för tillopp och retur.' },
      { question: 'Hur långt kan en slinga vara?', answer: 'Ofta max cirka 100–120 meter per slinga beroende på rördimension. Ange max slinglängd så räknas antal slingor ut.' },
      { question: 'Vilket c/c-avstånd ska jag ha?', answer: 'Vanligt är 150–300 mm beroende på rum och värmebehov. Tätare c/c ger mer rör men jämnare värme.' },
      { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberäknare' },
      { slug: 'reglar-kalkylator', label: 'Reglar & virke' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Gulvvarme kalkulator – sløyfelengde og antall sløyfer | ByggExp',
    description:
      'Regn ut sløyfelengde og antall sløyfer for vannbåren gulvvarme ut fra areal og senteravstand (c/c). Gratis kalkulator, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Gulvvarme',
    intro:
      'Fyll inn arealet og senteravstanden (c/c) mellom rørene, så regner vi ut omtrentlig sløyfelengde og antall sløyfer.',
    previewAlt: 'Forhåndsvisning av gulvvarme',
    previewCaption: 'Slik ser gulvvarme ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Slik regner du ut gulvvarmen', body: (<><ol><li>Regn ut arealet i m².</li><li>Angi senteravstand mellom rørene.</li><li>Angi maks sløyfelengde per sløyfe.</li><li>Se omtrentlig sløyfelengde og antall sløyfer.</li></ol></>) },
      { id: 'info', heading: 'Ikke glem tilførsel og retur', body: (<><p>Sløyfelengden ovenfor er for selve gulvflaten. Regn med ekstra rør frem og tilbake til fordeleren, og hold deg innenfor makslengden per sløyfe for en jevn strømning.</p></>) },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvor lang sløyfe trenger jeg for gulvvarme?', answer: 'Omtrent arealet delt på senteravstanden: 20 m² med c/c 200 mm gir cirka 100 meter rør. Legg til rør for tilførsel og retur.' },
      { question: 'Hvor lang kan en sløyfe være?', answer: 'Ofte maks cirka 100–120 meter per sløyfe avhengig av rørdimensjon. Angi maks sløyfelengde, så regnes antall sløyfer ut.' },
      { question: 'Hvilken c/c-avstand skal jeg ha?', answer: 'Vanlig er 150–300 mm avhengig av rom og varmebehov. Tettere c/c gir mer rør, men jevnere varme.' },
      { question: 'Koster det noe?', answer: 'Nei, kalkulatoren er gratis og krever ingen konto.' },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberegner' },
      { slug: 'reglar-kalkylator', label: 'Stendere & trelast' },
      { slug: '', label: 'Alle gratis verktøy' },
    ],
  },
  en: {
    metaTitle: 'Underfloor heating calculator – loop length and loops | ByggExp',
    description:
      'Work out the loop length and number of loops for water-based underfloor heating from area and pipe spacing (c/c). Free calculator, no account.',
    badge: 'Free calculator',
    h1: 'Underfloor heating',
    intro:
      'Enter the area and the pipe spacing (c/c) and we work out the approximate loop length and number of loops.',
    previewAlt: 'Preview of underfloor heating',
    previewCaption: 'This is how underfloor heating looks',
    sections: [
      { id: 'sa-raknar-du', heading: 'How to work out underfloor heating', body: (<><ol><li>Work out the area in m².</li><li>Enter the c/c spacing between the pipes.</li><li>Enter the max loop length per loop.</li><li>See the approximate loop length and number of loops.</li></ol></>) },
      { id: 'info', heading: 'Don’t forget supply and return', body: (<><p>The loop length above is for the floor area itself. Allow extra pipe to and from the manifold, and stay within the max length per loop for even flow.</p></>) },
    ],
    faqHeading: 'Frequently asked questions',
    faq: [
      { question: 'How long a loop do I need for underfloor heating?', answer: 'Roughly the area divided by the c/c spacing: 20 m² at c/c 200 mm gives about 100 metres of pipe. Add pipe for supply and return.' },
      { question: 'How long can a loop be?', answer: 'Often a max of about 100–120 metres per loop depending on pipe dimension. Enter the max loop length and the number of loops is calculated.' },
      { question: 'Which c/c spacing should I use?', answer: 'Common is 150–300 mm depending on the room and heat demand. Closer c/c means more pipe but more even heat.' },
      { question: 'Does it cost anything?', answer: 'No, the calculator is free and requires no account.' },
    ],
    ctaHeading: 'Calculate material and time in ByggExp',
    ctaText: 'Keep track of material, time and costs per project. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More construction calculators',
    related: [
      { slug: 'kvadratmeter-kalkylator', label: 'Square-metre calculator' },
      { slug: 'reglar-kalkylator', label: 'Studs & timber' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/golvvarme-kalkylator`;

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
        tool={<GolvvarmeKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="golvvarme-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/golvvarme-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="golvvarme-kalkylator"
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
