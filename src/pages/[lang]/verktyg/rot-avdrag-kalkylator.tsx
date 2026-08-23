import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import RotKalkylatorTool from '../../../components/LeadMagnet/RotKalkylatorTool';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv on byggexp.se, en on /en for parity. ROT is Sweden-specific, so no nb.
type L = 'sv' | 'en';

type Content = {
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
  related: { href: string; label: string }[];
};

const CONTENT: Record<L, Content> = {
  sv: {
    metaTitle: 'ROT-avdrag kalkylator 2026 – räkna ut gratis | ByggExp',
    description:
      'Räkna ut ROT-avdraget gratis enligt reglerna 2026: 30 % av arbetskostnaden, max 50 000 kr per person. Se direkt vad kunden betalar efter ROT.',
    badge: 'Gratis kalkylator',
    h1: 'ROT-avdrag kalkylator 2026',
    intro:
      'Slå in arbetskostnaden och se på sekunden hur stort ROT-avdraget blir och vad kunden faktiskt betalar. Ett snabbt sätt att ge raka besked redan i offerten.',
    previewAlt: 'Förhandsvisning av ROT-avdrag kalkylator',
    previewCaption: 'Så ser ROT-avdrag kalkylatorn ut',
    sections: [
      {
        id: 'vad-ar-rot',
        heading: 'Vad är ROT-avdrag?',
        body: (
          <p>
            ROT-avdrag är en skattereduktion som privatpersoner får för arbetskostnaden vid
            reparation, om- och tillbyggnad av sin bostad. I praktiken drar hantverkaren av ROT
            direkt på fakturan, och begär sedan tillbaka beloppet från Skatteverket. Kunden betalar
            alltså mindre på en gång.
          </p>
        ),
      },
      {
        id: 'sa-raknas-rot-2026',
        heading: 'Så räknas ROT-avdraget 2026',
        body: (
          <ul>
            <li>Avdraget är <strong>30 %</strong> av arbetskostnaden (inkl. moms).</li>
            <li>Taket är <strong>50 000 kr per person och år</strong>.</li>
            <li>Det gäller <strong>bara arbetskostnaden</strong> – inte material, resor eller maskiner.</li>
            <li>Två ägare kan dela på avdraget och dubbla taket till 100 000 kr.</li>
            <li>ROT och RUT har ett <strong>gemensamt tak på 75 000 kr</strong>, varav högst 50 000 kr ROT.</li>
          </ul>
        ),
      },
      {
        id: 'rakna-sjalv-pa-mobilen',
        heading: 'Räkna ut ROT själv på mobilen',
        body: (
          <>
            <p>
              Du behöver bara arbetskostnaden (exkl. material) och mobilens miniräknare.
              Tre steg:
            </p>
            <ol>
              <li>
                <strong>ROT-avdraget:</strong> arbetskostnad <strong>× 0,30</strong>.
                <br />Ex: 60 000 × 0,30 = <strong>18 000 kr</strong>.
              </li>
              <li>
                <strong>Kolla taket:</strong> blir svaret mer än <strong>50 000 kr</strong> per person,
                räkna med 50 000 kr (100 000 kr om två ägare delar).
              </li>
              <li>
                <strong>Vad kunden betalar för arbetet:</strong> arbetskostnad <strong>× 0,70</strong>
                (samma sak som arbetskostnaden minus ROT).
                <br />Ex: 60 000 × 0,70 = <strong>42 000 kr</strong>. Lägg sedan till materialet – på det blir det ingen ROT.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: 'exempel',
        heading: 'Exempel',
        body: (
          <p>
            En badrumsrenovering har en arbetskostnad på 60 000 kr och material för 40 000 kr.
            ROT-avdraget blir 30 % av 60 000 = 18 000 kr. Kunden betalar då 42 000 kr för arbetet
            plus 40 000 kr i material – totalt 82 000 kr i stället för 100 000 kr. Ligger avdraget
            över takbeloppet begränsas det till 50 000 kr per person.
          </p>
        ),
      },
      {
        id: 'rot-pa-offert-och-faktura',
        heading: 'ROT på offert och faktura',
        body: (
          <p>
            För att kunden ska få ROT måste arbetskostnaden vara tydligt specificerad och avdraget
            redovisas rätt. I ByggExp kan du markera ROT direkt när du skapar offerten och fakturan
            – då räknas kundens del ut automatiskt och underlaget blir rätt mot Skatteverket.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om ROT-avdrag',
    faq: [
      {
        question: 'Hur mycket är ROT-avdraget 2026?',
        answer:
          'Från och med 1 januari 2026 är ROT-avdraget 30 % av arbetskostnaden, med ett tak på 50 000 kr per person och år. Under senare delen av 2025 gällde tillfälligt 50 %.',
      },
      {
        question: 'Räknas material in i ROT-avdraget?',
        answer:
          'Nej, bara arbetskostnaden ger ROT. Material, resor och maskiner räknas bort. Har du satt en klumpsumma för hela jobbet måste du dela upp den på fakturan, annars kan Skatteverket neka avdraget.',
      },
      {
        question: 'Kan flera personer dela på avdraget?',
        answer:
          'Ja. Äger ni bostaden tillsammans kan ni dela på ROT-avdraget, vilket dubblar taket till 100 000 kr. Väljer du 2 ägare i kalkylatorn räknas det taket.',
      },
      {
        question: 'Finns det ett gemensamt tak för ROT och RUT?',
        answer:
          'Ja. ROT och RUT har ett gemensamt tak på 75 000 kr per person och år, varav högst 50 000 kr får vara ROT. Har kunden redan använt avdrag under året påverkar det hur mycket ROT som finns kvar.',
      },
    ],
    ctaHeading: 'Skapa offerter med ROT i ByggExp',
    ctaText: 'Markera ROT på offert och faktura så räknas kundens del ut automatiskt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler gratis verktyg',
    related: [
      { href: '/sv/verktyg/tidrapport-mall', label: 'Tidrapport – gratis mall' },
      { href: '/sv/verktyg/byggdagbok-mall', label: 'Byggdagbok – gratis mall' },
      { href: '/sv/verktyg', label: 'Alla gratis verktyg' },
    ],
  },
  en: {
    metaTitle: 'ROT deduction calculator 2026 – work out free | ByggExp',
    description:
      'Work out the ROT deduction free per the 2026 rules: 30% of the labour cost, max 50,000 kr per person. See instantly what the customer pays after ROT.',
    badge: 'Free calculator',
    h1: 'ROT deduction calculator 2026',
    intro:
      'Enter the labour cost and see in seconds how large the ROT deduction is and what the customer actually pays. A quick way to give a straight answer already in the quote.',
    previewAlt: 'Preview of the ROT deduction calculator',
    previewCaption: 'This is how the ROT deduction calculator looks',
    sections: [
      {
        id: 'vad-ar-rot',
        heading: 'What is the ROT deduction?',
        body: (
          <p>
            ROT (ROT-avdrag) is a Swedish tax reduction that private individuals get on the labour
            cost for repair, renovation and extension of their home. In practice the tradesperson
            deducts ROT directly on the invoice and then claims the amount back from Skatteverket, so
            the customer pays less up front.
          </p>
        ),
      },
      {
        id: 'sa-raknas-rot-2026',
        heading: 'How the ROT deduction is calculated in 2026',
        body: (
          <ul>
            <li>The deduction is <strong>30%</strong> of the labour cost (incl. VAT).</li>
            <li>The cap is <strong>50,000 kr per person and year</strong>.</li>
            <li>It applies to <strong>the labour cost only</strong> – not material, travel or machinery.</li>
            <li>Two owners can share the deduction and double the cap to 100,000 kr.</li>
            <li>ROT and RUT share a <strong>combined cap of 75,000 kr</strong>, of which at most 50,000 kr is ROT.</li>
          </ul>
        ),
      },
      {
        id: 'rakna-sjalv-pa-mobilen',
        heading: 'Work out ROT yourself on your phone',
        body: (
          <>
            <p>
              You only need the labour cost (excl. material) and your phone’s calculator. Three steps:
            </p>
            <ol>
              <li>
                <strong>The ROT deduction:</strong> labour cost <strong>× 0.30</strong>.
                <br />E.g. 60,000 × 0.30 = <strong>18,000 kr</strong>.
              </li>
              <li>
                <strong>Check the cap:</strong> if the answer exceeds <strong>50,000 kr</strong> per person,
                use 50,000 kr (100,000 kr if two owners share).
              </li>
              <li>
                <strong>What the customer pays for the work:</strong> labour cost <strong>× 0.70</strong>
                (the same as the labour cost minus ROT).
                <br />E.g. 60,000 × 0.70 = <strong>42,000 kr</strong>. Then add the material – there is no ROT on that.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: 'exempel',
        heading: 'Example',
        body: (
          <p>
            A bathroom renovation has a labour cost of 60,000 kr and material for 40,000 kr. The ROT
            deduction is 30% of 60,000 = 18,000 kr. The customer then pays 42,000 kr for the work plus
            40,000 kr in material – 82,000 kr in total instead of 100,000 kr. If the deduction exceeds
            the cap it is limited to 50,000 kr per person.
          </p>
        ),
      },
      {
        id: 'rot-pa-offert-och-faktura',
        heading: 'ROT on quotes and invoices',
        body: (
          <p>
            For the customer to get ROT, the labour cost must be clearly itemised and the deduction
            reported correctly. In ByggExp you can flag ROT directly when you create the quote and
            invoice – the customer’s share is then calculated automatically and the documentation is
            correct for Skatteverket.
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about ROT',
    faq: [
      {
        question: 'How much is the ROT deduction in 2026?',
        answer:
          'From 1 January 2026 the ROT deduction is 30% of the labour cost, with a cap of 50,000 kr per person and year. During the latter part of 2025 a temporary 50% applied.',
      },
      {
        question: 'Is material included in the ROT deduction?',
        answer:
          'No, only the labour cost qualifies for ROT. Material, travel and machinery are excluded. If you quote a single lump sum for the whole job you have to split it out on the invoice, or Skatteverket can reject the deduction.',
      },
      {
        question: 'Can several people share the deduction?',
        answer:
          'Yes. If you own the home together you can share the ROT deduction, which doubles the cap to 100,000 kr. Choose 2 owners in the calculator to use that cap.',
      },
      {
        question: 'Is there a combined cap for ROT and RUT?',
        answer:
          'Yes. ROT and RUT share a cap of 75,000 kr per person and year, of which at most 50,000 kr may be ROT. If the customer has already used deductions this year it affects how much ROT is left.',
      },
    ],
    ctaHeading: 'Create quotes with ROT in ByggExp',
    ctaText: 'Flag ROT on quotes and invoices and the customer’s share is calculated automatically. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More free tools',
    related: [
      { href: '/en/verktyg/timpris-kalkylator', label: 'Hourly rate calculator' },
      { href: '/en/verktyg/moms-kalkylator', label: 'VAT calculator' },
      { href: '/en/verktyg', label: 'All free tools' },
    ],
  },
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lang = params?.lang;
  if (lang !== 'sv' && lang !== 'en') return { notFound: true };
  return { props: { lang } };
};

export default function RotKalkylatorPage({ lang }: { lang: L }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${lang}/verktyg/rot-avdrag-kalkylator`;

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
        tool={<RotKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="rot-avdrag-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/rot-avdrag-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="rot-avdrag-kalkylator"
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
        related={c.related}
      />

      <Footer footerT={footerT} />
    </>
  );
}
