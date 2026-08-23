import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import TakKalkylatorTool from '../../../components/LeadMagnet/TakKalkylatorTool';
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
    metaTitle: 'Takkalkylator 2026 – takyta, takpannor & läkt | ByggExp',
    description:
      'Räkna ut takytan för sadel- eller pulpettak och hela materialet: takpannor, bärläkt i löpmeter och underlagspapp. Gratis takkalkylator, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Takkalkylator',
    intro:
      'Ange byggnadens mått, taklutning och taktäckning så räknar vi ut takytan och materialet: takpannor, bärläkt i löpmeter och underlagspapp. Takytan räknas per takfall – bra inför omläggning eller offert.',
    previewAlt: 'Förhandsvisning av takberäknare',
    previewCaption: 'Så ser takberäknaren ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Det här räknar kalkylatorn ut',
        body: (
          <ul>
            <li><strong>Takyta:</strong> grundyta (inkl. utsprång) ÷ cos(taklutning), per takfall.</li>
            <li><strong>Takpannor:</strong> takyta × pannor per m² + spill.</li>
            <li><strong>Bärläkt:</strong> takyta ÷ läktavstånd (löpmeter).</li>
            <li><strong>Underlagspapp:</strong> takyta + ca 10 % överlapp.</li>
          </ul>
        ),
      },
      {
        id: 'formeln',
        heading: 'Takyta = grundyta ÷ cos(taklutning)',
        body: (
          <p>
            Ett brantare tak ger större yta än huset mäter på marken – vid 27° är takytan ca 1,12
            gånger grundytan, vid 45° ca 1,4 gånger. Glöm inte takutsprånget vid takfot och gavel,
            det ökar ytan ytterligare. För valmade eller komplexa tak delar du upp taket i delytor.
          </p>
        ),
      },
      {
        id: 'pannor-lakt',
        heading: 'Pannor och läkt beror på modellen',
        body: (
          <p>
            Betongpannor ligger ofta på ca 9–11 st/m² och tegelpannor på ca 12–15 st/m². Läktavståndet
            (ofta 320–345 mm) styrs av pannmodellens längd och takets lutning. Kalkylatorn använder
            typvärden per pannetyp – kontrollera alltid tillverkarens läggningsanvisning innan köp.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om takyta',
    faq: [
      {
        question: 'Hur räknar jag ut takytan?',
        answer:
          'Takytan är grundytan (inkl. takutsprång) delat med cosinus av taklutningen: takyta = grundyta ÷ cos(lutning). Ju brantare tak, desto större yta än grundytan – vid 45° är takytan ca 1,4 gånger grundytan. Kalkylatorn gör det åt dig för både sadel- och pulpettak.',
      },
      {
        question: 'Hur många takpannor går det per kvadratmeter?',
        answer:
          'En betongpanna ligger ofta på ca 9–11 st/m² och en tegelpanna på ca 12–15 st/m². Kalkylatorn föreslår ett standardvärde per pannetyp som du kan justera efter din modell – kontrollera alltid tillverkarens läggningsanvisning.',
      },
      {
        question: 'Hur mycket bärläkt behöver jag?',
        answer:
          'Bärläkten löper vågrätt med ett läktavstånd som beror på pannmodellen (ofta 320–345 mm). Löpmetern blir takytan delat med läktavståndet. Räkna även med ströläkt (stående) och en marginal för kap.',
      },
      {
        question: 'Räknar den plåt- och papptak?',
        answer:
          'Ja. Väljer du plåt eller papp visar kalkylatorn takytan inkl. överlapp i m² i stället för antal pannor – dessa material säljs på rulle eller i skivor med överlapp.',
      },
      {
        question: 'Kostar det något?',
        answer: 'Nej, kalkylatorn är gratis och kräver inget konto.',
      },
    ],
    ctaHeading: 'Skapa takofferter i ByggExp',
    ctaText:
      'Bygg offerter med material och arbete, och följ projektet från offert till faktura. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'takstolar-kalkylator', label: 'Beräkna takstolar' },
      { slug: 'betong-kalkylator', label: 'Betongberäknare' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberäknare' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Takkalkulator 2026 – takflate, takstein & lekter | ByggExp',
    description:
      'Regn ut takflaten for saltak eller pulttak og hele materialet: takstein, lekter i løpemeter og undertakspapp. Gratis takkalkulator, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Takkalkulator',
    intro:
      'Angi byggets mål, takfall og taktekking, så regner vi ut takflaten og materialet: takstein, lekter i løpemeter og undertakspapp. Takflaten regnes per takflate – bra før omlegging eller tilbud.',
    previewAlt: 'Forhåndsvisning av takberegner',
    previewCaption: 'Slik ser takberegneren ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Dette regner kalkulatoren ut',
        body: (
          <ul>
            <li><strong>Takflate:</strong> grunnflate (inkl. utstikk) ÷ cos(takfall), per takflate.</li>
            <li><strong>Takstein:</strong> takflate × stein per m² + svinn.</li>
            <li><strong>Lekter:</strong> takflate ÷ lekteavstand (løpemeter).</li>
            <li><strong>Undertakspapp:</strong> takflate + ca. 10 % overlapp.</li>
          </ul>
        ),
      },
      {
        id: 'formeln',
        heading: 'Takflate = grunnflate ÷ cos(takfall)',
        body: (
          <p>
            Et brattere tak gir større flate enn huset måler på bakken – ved 27° er takflaten ca. 1,12
            ganger grunnflaten, ved 45° ca. 1,4 ganger. Ikke glem takutstikket ved takfot og gavl,
            det øker flaten ytterligere. For valmede eller komplekse tak deler du taket opp i delflater.
          </p>
        ),
      },
      {
        id: 'pannor-lakt',
        heading: 'Takstein og lekter avhenger av modellen',
        body: (
          <p>
            Betongstein ligger ofte på ca. 9–11 stk/m² og teglstein på ca. 12–15 stk/m². Lekteavstanden
            (ofte 320–345 mm) styres av steinmodellens lengde og takets fall. Kalkulatoren bruker
            typiske verdier per steintype – kontroller alltid produsentens leggeanvisning før kjøp.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om takflate',
    faq: [
      {
        question: 'Hvordan regner jeg ut takflaten?',
        answer:
          'Takflaten er grunnflaten (inkl. takutstikk) delt på cosinus av takfallet: takflate = grunnflate ÷ cos(fall). Jo brattere tak, desto større flate enn grunnflaten – ved 45° er takflaten ca. 1,4 ganger grunnflaten. Kalkulatoren gjør det for deg for både saltak og pulttak.',
      },
      {
        question: 'Hvor mange takstein går det per kvadratmeter?',
        answer:
          'En betongstein ligger ofte på ca. 9–11 stk/m² og en teglstein på ca. 12–15 stk/m². Kalkulatoren foreslår en standardverdi per steintype som du kan justere etter din modell – kontroller alltid produsentens leggeanvisning.',
      },
      {
        question: 'Hvor mye lekter trenger jeg?',
        answer:
          'Lektene løper vannrett med en lekteavstand som avhenger av steinmodellen (ofte 320–345 mm). Løpemeteren blir takflaten delt på lekteavstanden. Regn også med sløyfer (stående) og en margin for kapp.',
      },
      {
        question: 'Regner den platetak og papptak?',
        answer:
          'Ja. Velger du plate eller papp, viser kalkulatoren takflaten inkl. overlapp i m² i stedet for antall stein – disse materialene selges på rull eller i plater med overlapp.',
      },
      {
        question: 'Koster det noe?',
        answer: 'Nei, kalkulatoren er gratis og krever ingen konto.',
      },
    ],
    ctaHeading: 'Lag taktilbud i ByggExp',
    ctaText:
      'Bygg tilbud med materialer og arbeid, og følg prosjektet fra tilbud til faktura. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'takstolar-kalkylator', label: 'Beregne takstoler' },
      { slug: 'betong-kalkylator', label: 'Betongberegner' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberegner' },
      { slug: '', label: 'Alle gratis verktøy' },
    ],
  },
  en: {
    metaTitle: 'Roof calculator 2026 – roof area, tiles & battens | ByggExp',
    description:
      'Work out the roof area for a gable or mono-pitch roof and the whole material bill: tiles, battens in linear metres and underlay felt. Free roof calculator, no account.',
    badge: 'Free calculator',
    h1: 'Roof calculator',
    intro:
      'Enter the building dimensions, roof pitch and covering and we work out the roof area and material: tiles, battens in linear metres and underlay felt. The roof area is figured per slope – handy before a re-roof or a quote.',
    previewAlt: 'Preview of the roof calculator',
    previewCaption: 'This is how the roof calculator looks',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'What the calculator works out',
        body: (
          <ul>
            <li><strong>Roof area:</strong> footprint (incl. overhang) ÷ cos(pitch), per slope.</li>
            <li><strong>Tiles:</strong> roof area × tiles per m² + waste.</li>
            <li><strong>Battens:</strong> roof area ÷ batten spacing (linear metres).</li>
            <li><strong>Underlay felt:</strong> roof area + about 10% overlap.</li>
          </ul>
        ),
      },
      {
        id: 'formeln',
        heading: 'Roof area = footprint ÷ cos(pitch)',
        body: (
          <p>
            A steeper roof gives a larger area than the house measures on the ground – at 27° the roof
            area is about 1.12 times the footprint, at 45° about 1.4 times. Don’t forget the overhang at
            the eaves and gable, which adds further area. For hipped or complex roofs, split the roof
            into sub-areas.
          </p>
        ),
      },
      {
        id: 'pannor-lakt',
        heading: 'Tiles and battens depend on the model',
        body: (
          <p>
            Concrete tiles are often about 9–11 pcs/m² and clay tiles about 12–15 pcs/m². The batten
            spacing (often 320–345 mm) is set by the tile model’s length and the roof pitch. The
            calculator uses typical values per tile type – always check the manufacturer’s laying
            instructions before buying.
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about roof area',
    faq: [
      {
        question: 'How do I calculate the roof area?',
        answer:
          'The roof area is the footprint (incl. overhang) divided by the cosine of the pitch: roof area = footprint ÷ cos(pitch). The steeper the roof, the larger the area versus the footprint – at 45° the roof area is about 1.4 times the footprint. The calculator does it for both gable and mono-pitch roofs.',
      },
      {
        question: 'How many roof tiles are there per square metre?',
        answer:
          'A concrete tile is often about 9–11 pcs/m² and a clay tile about 12–15 pcs/m². The calculator suggests a standard value per tile type that you can adjust for your model – always check the manufacturer’s laying instructions.',
      },
      {
        question: 'How many battens do I need?',
        answer:
          'The tiling battens run horizontally with a spacing that depends on the tile model (often 320–345 mm). The linear metres are the roof area divided by the batten spacing. Also allow for counter battens (vertical) and a margin for cuts.',
      },
      {
        question: 'Does it handle sheet-metal and felt roofs?',
        answer:
          'Yes. If you choose sheet metal or felt, the calculator shows the roof area incl. overlap in m² instead of a tile count – these materials are sold on rolls or in sheets with overlap.',
      },
      {
        question: 'Does it cost anything?',
        answer: 'No, the calculator is free and requires no account.',
      },
    ],
    ctaHeading: 'Create roofing quotes in ByggExp',
    ctaText:
      'Build quotes with material and labour, and follow the project from quote to invoice. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More construction calculators',
    related: [
      { slug: 'takstolar-kalkylator', label: 'Roof trusses calculator' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/tak-kalkylator`;

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
        embedSlug="tak-kalkylator"
        embedTitle={c.h1}
        locale={lang}
        tool={<TakKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="tak-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/tak-preview.webp"
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
