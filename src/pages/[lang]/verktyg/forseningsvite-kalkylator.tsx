import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import ForseningsviteKalkylatorTool from '../../../components/LeadMagnet/ForseningsviteKalkylatorTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv on byggexp.se, en on /en for parity. AB 04/ABT 06 is Sweden-specific, no nb.
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
    metaTitle: 'Förseningsvite kalkylator – räkna ut vitet gratis | ByggExp',
    description:
      'Räkna ut förseningsvite i en entreprenad gratis: procent av kontraktssumman per påbörjad vecka, med valfritt takbelopp. Se vitet direkt enligt AB 04/ABT 06.',
    badge: 'Gratis kalkylator',
    h1: 'Förseningsvite – räkna ut vitet i entreprenaden',
    intro:
      'Blir entreprenaden försenad kan förseningsvitet bli dyrt. Kalkylatorn visar direkt vad det landar på – per påbörjad vecka och totalt – och kapar summan om ni har avtalat ett takbelopp. Gratis och utan inloggning.',
    previewAlt: 'Förhandsvisning av förseningsvite-kalkylatorn',
    previewCaption: 'Så ser förseningsvite-kalkylatorn ut',
    sections: [
      {
        id: 'sa-fungerar-forseningsvite',
        heading: 'Så fungerar förseningsvite',
        body: (
          <>
            <p>
              Förseningsvite är ett i förväg bestämt belopp som utgår när entreprenaden blir försenad. I
              AB 04 och ABT 06 anges vitet som en procentsats av kontraktssumman per påbörjad vecka.
              Fördelen är att beställaren slipper bevisa sin faktiska skada – vitet ersätter skadeståndet.
            </p>
            <p>
              Exempel: en kontraktssumma på 1&nbsp;000&nbsp;000 kr, 1 % per vecka och 4 veckors försening ger
              1&nbsp;000&nbsp;000 × 0,01 × 4 = <strong>40&nbsp;000 kr</strong> i vite.
            </p>
          </>
        ),
      },
      {
        id: 'fallan',
        heading: 'Vanliga fällor',
        body: (
          <ul>
            <li>Vite måste vara <strong>skriftligt avtalat</strong> för att gälla.</li>
            <li>Kontrollera från vilken tidpunkt förseningen räknas (kontraktstid + eventuell tidsförlängning för ÄTA och hinder).</li>
            <li>Har ni avtalat ett takbelopp begränsas det totala vitet, oavsett hur lång förseningen blir.</li>
          </ul>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om förseningsvite',
    faq: [
      {
        question: 'Hur mycket är förseningsvite?',
        answer:
          'Vitet är det som avtalats – ofta en procentsats av kontraktssumman per påbörjad förseningsvecka, vanligen mellan 0,5 och 2 %. Är inget vite avtalat utgår i stället ersättning för styrkt skada.',
      },
      {
        question: 'Räknas påbörjad vecka som hel vecka?',
        answer:
          'Ja, vite beräknas normalt per påbörjad vecka. En försening på nio dagar räknas alltså som två veckor. Kalkylatorn rundar upp till hel vecka automatiskt.',
      },
      {
        question: 'Finns det ett tak för vitet?',
        answer:
          'Parterna kan avtala om ett takbelopp, ofta en procentandel av kontraktssumman. Fyll i takbeloppet i kalkylatorn så begränsas summan automatiskt.',
      },
      {
        question: 'Måste vitet skrivas in i avtalet?',
        answer:
          'Ja. Vite gäller bara om det uttryckligen avtalats. Saknas en vitesklausul måste beställaren styrka sin faktiska skada för att få ersättning för förseningen.',
      },
    ],
    ctaHeading: 'Håll koll på tider och ÄTA i ByggExp',
    ctaText: 'Dokumentera tidsförlängning, hinder och ÄTA så att vitesdiskussionen blir enkel. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Relaterat',
    related: [
      { href: '/sv/blog/forseningsvite-entreprenad', label: 'Guide: förseningsvite' },
      { href: '/sv/blog/ab-04-och-abt-06', label: 'AB 04 och ABT 06' },
      { href: '/sv/verktyg/ata-mall', label: 'ÄTA-mall (PDF)' },
      { href: '/sv/verktyg', label: 'Alla gratis verktyg' },
    ],
  },
  en: {
    metaTitle: 'Delay penalty calculator – work out the penalty free | ByggExp',
    description:
      'Work out the delay penalty (liquidated damages) in a construction contract free: percent of the contract sum per commenced week, with an optional cap. Per AB 04/ABT 06.',
    badge: 'Free calculator',
    h1: 'Delay penalty – work out the liquidated damages',
    intro:
      'When a project runs late, the delay penalty can add up fast. The calculator shows what it lands on – per commenced week and in total – and caps the amount if you’ve agreed a limit. Free, no sign-up.',
    previewAlt: 'Preview of the delay penalty calculator',
    previewCaption: 'This is how the delay penalty calculator looks',
    sections: [
      {
        id: 'sa-fungerar-forseningsvite',
        heading: 'How the delay penalty works',
        body: (
          <>
            <p>
              A delay penalty (förseningsvite) is a pre-agreed amount that applies when a project is
              delayed. In AB 04 and ABT 06 the penalty is stated as a percentage of the contract sum per
              commenced week. The advantage is that the client doesn’t have to prove actual loss – the
              penalty replaces damages.
            </p>
            <p>
              Example: a contract sum of 1,000,000 kr, 1% per week and 4 weeks of delay gives
              1,000,000 × 0.01 × 4 = <strong>40,000 kr</strong> in penalty.
            </p>
          </>
        ),
      },
      {
        id: 'fallan',
        heading: 'Common pitfalls',
        body: (
          <ul>
            <li>The penalty must be <strong>agreed in writing</strong> to apply.</li>
            <li>Check from which point the delay is counted (contract time + any extension for variations and hindrances).</li>
            <li>If you have agreed a cap, the total penalty is limited no matter how long the delay runs.</li>
          </ul>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about the delay penalty',
    faq: [
      {
        question: 'How much is the delay penalty?',
        answer:
          'The penalty is whatever has been agreed – often a percentage of the contract sum per commenced week of delay, usually between 0.5 and 2%. If no penalty is agreed, compensation for proven loss applies instead.',
      },
      {
        question: 'Is a commenced week counted as a whole week?',
        answer:
          'Yes, the penalty is normally calculated per commenced week. A delay of nine days therefore counts as two weeks. The calculator rounds up to a whole week automatically.',
      },
      {
        question: 'Is there a cap on the penalty?',
        answer:
          'The parties can agree a cap, often a percentage of the contract sum. Enter the cap in the calculator and the amount is limited automatically.',
      },
      {
        question: 'Must the penalty be written into the contract?',
        answer:
          'Yes. A penalty only applies if it is expressly agreed. Without a penalty clause, the client must prove actual loss to be compensated for the delay.',
      },
    ],
    ctaHeading: 'Track schedules and variations in ByggExp',
    ctaText: 'Document time extensions, hindrances and variations so the penalty discussion is simple. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'Related',
    related: [
      { href: '/en/verktyg/drojsmalsranta-kalkylator', label: 'Late-payment interest' },
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

export default function ForseningsviteKalkylatorPage({ lang }: { lang: L }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${lang}/verktyg/forseningsvite-kalkylator`;

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
        tool={<ForseningsviteKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="forseningsvite-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/forseningsvite-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="forseningsvite-kalkylator"
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
