import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import MomsKalkylatorTool from '../../../components/LeadMagnet/MomsKalkylatorTool';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv on byggexp.se, en on /en for parity. This is a Sweden-specific VAT (moms)
// tool, so no nb version.
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
    metaTitle: 'Momskalkylator – räkna ut moms gratis | ByggExp',
    description:
      'Räkna ut moms gratis: lägg på eller räkna baklänges från ett belopp med 25, 12 eller 6 % moms. Se belopp exkl. moms, momsen och inkl. moms direkt.',
    badge: 'Gratis kalkylator',
    h1: 'Momskalkylator – räkna ut moms',
    intro:
      'Lägg på moms eller räkna baklänges från ett pris. Välj 25, 12 eller 6 % så ser du beloppet exklusive moms, själva momsen och beloppet inklusive moms.',
    previewAlt: 'Förhandsvisning av momskalkylator',
    previewCaption: 'Så ser momskalkylatorn ut',
    sections: [
      {
        id: 'rakna-sjalv-pa-mobilen',
        heading: 'Räkna ut moms själv på mobilen (25 %)',
        body: (
          <>
            <figure className="lm-diagram">
              <img src="/landing/diagrams/moms.webp" alt="Diagram: moms från netto till brutto, netto × 1,25 = brutto" width={720} height={380} loading="lazy" />
              <figcaption>Netto × 1,25 = brutto (25 % moms). Baklänges: brutto ÷ 1,25 = netto.</figcaption>
            </figure>
            <p>
              Har du bara mobilens miniräknare räcker tre enkla knapptryck. Exemplen
              utgår från 25 % moms – den vanligaste satsen för byggtjänster.
            </p>
            <ul>
              <li>
                <strong>Lägga på moms:</strong> pris exkl. moms <strong>× 1,25</strong> = pris inkl. moms.
                <br />Ex: 10 000 × 1,25 = <strong>12 500 kr</strong>.
              </li>
              <li>
                <strong>Ta bort moms (baklänges):</strong> pris inkl. moms <strong>× 0,8</strong> = pris exkl. moms.
                <br />Ex: 12 500 × 0,8 = <strong>10 000 kr</strong>. (Att dela med 1,25 ger samma svar.)
              </li>
              <li>
                <strong>Bara själva momsen:</strong> pris inkl. moms <strong>× 0,2</strong> = momsen.
                <br />Ex: 12 500 × 0,2 = <strong>2 500 kr</strong>.
              </li>
            </ul>
            <p>
              Genvägarna ×&nbsp;0,8 och ×&nbsp;0,2 gäller just 25 %. Vid 12 % delar du i stället
              med 1,12 för att ta bort momsen, och vid 6 % med 1,06.
            </p>
          </>
        ),
      },
      {
        id: 'momssatser',
        heading: 'Momssatser i Sverige',
        body: (
          <ul>
            <li><strong>25 %</strong> – standard, gäller de flesta byggtjänster.</li>
            <li><strong>12 %</strong> – t.ex. livsmedel, hotell och restaurang.</li>
            <li><strong>6 %</strong> – t.ex. böcker, persontransport och kultur.</li>
          </ul>
        ),
      },
      {
        id: 'omvand-byggmoms',
        heading: 'Omvänd byggmoms',
        body: (
          <p>
            Mellan byggföretag gäller ofta omvänd skattskyldighet (omvänd byggmoms): säljaren
            fakturerar utan moms och köparen redovisar momsen. Kalkylatorn hjälper dig ändå att se
            vilket momsbelopp det handlar om.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om moms',
    faq: [
      {
        question: 'Hur räknar jag ut moms på ett belopp?',
        answer:
          'Är beloppet exklusive moms multiplicerar du med momssatsen (t.ex. 0,25 för 25 %). Är beloppet inklusive moms delar du med 1,25 för att få beloppet exklusive moms – kalkylatorn gör båda automatiskt.',
      },
      {
        question: 'Vilken momssats gäller för byggtjänster?',
        answer:
          'För de flesta byggtjänster är momsen 25 %. Vissa varor och tjänster har 12 % eller 6 %. Notera att omvänd byggmoms kan gälla mellan byggföretag.',
      },
      {
        question: 'Hur räknar jag baklänges från ett pris inklusive moms?',
        answer:
          'Välj «Inklusive moms» i kalkylatorn. Med 25 % moms blir beloppet exklusive moms priset delat med 1,25, och momsen är skillnaden.',
      },
      {
        question: 'Kostar det något?',
        answer: 'Nej, kalkylatorn är gratis och kräver inget konto.',
      },
    ],
    ctaHeading: 'Fakturera med rätt moms i ByggExp',
    ctaText: 'Skapa offert och faktura där moms och ROT räknas ut automatiskt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler gratis verktyg',
    related: [
      { href: '/sv/blog/moms-hantverkare', label: 'Guide: moms & omvänd byggmoms' },
      { href: '/sv/verktyg/rot-avdrag-kalkylator', label: 'ROT-avdrag kalkylator' },
      { href: '/sv/verktyg/tidrapport-mall', label: 'Tidrapport – gratis mall' },
      { href: '/sv/verktyg', label: 'Alla gratis verktyg' },
    ],
  },
  en: {
    metaTitle: 'VAT calculator – work out VAT for free | ByggExp',
    description:
      'Work out VAT for free: add on or reverse-calculate from an amount at 25, 12 or 6% VAT. See the amount excl. VAT, the VAT and incl. VAT instantly.',
    badge: 'Free calculator',
    h1: 'VAT calculator – work out VAT',
    intro:
      'Add VAT or reverse-calculate from a price. Choose 25, 12 or 6% and see the amount excluding VAT, the VAT itself and the amount including VAT.',
    previewAlt: 'Preview of the VAT calculator',
    previewCaption: 'This is how the VAT calculator looks',
    sections: [
      {
        id: 'rakna-sjalv-pa-mobilen',
        heading: 'Work out VAT yourself on your phone (25%)',
        body: (
          <>
            <figure className="lm-diagram">
              <img src="/landing/diagrams/moms.webp" alt="Diagram: VAT from net to gross, net × 1.25 = gross" width={720} height={380} loading="lazy" />
              <figcaption>Net × 1.25 = gross (25% VAT). Reverse: gross ÷ 1.25 = net.</figcaption>
            </figure>
            <p>
              With just your phone’s calculator, three taps are enough. The examples use 25% VAT –
              the most common rate for construction services.
            </p>
            <ul>
              <li>
                <strong>Add VAT:</strong> price excl. VAT <strong>× 1.25</strong> = price incl. VAT.
                <br />E.g. 10,000 × 1.25 = <strong>12,500 kr</strong>.
              </li>
              <li>
                <strong>Remove VAT (reverse):</strong> price incl. VAT <strong>× 0.8</strong> = price excl. VAT.
                <br />E.g. 12,500 × 0.8 = <strong>10,000 kr</strong>. (Dividing by 1.25 gives the same answer.)
              </li>
              <li>
                <strong>Just the VAT:</strong> price incl. VAT <strong>× 0.2</strong> = the VAT.
                <br />E.g. 12,500 × 0.2 = <strong>2,500 kr</strong>.
              </li>
            </ul>
            <p>
              The shortcuts ×&nbsp;0.8 and ×&nbsp;0.2 apply to 25% only. At 12% divide by 1.12 to
              remove the VAT, and at 6% by 1.06.
            </p>
          </>
        ),
      },
      {
        id: 'momssatser',
        heading: 'VAT rates in Sweden',
        body: (
          <ul>
            <li><strong>25%</strong> – standard, applies to most construction services.</li>
            <li><strong>12%</strong> – e.g. food, hotels and restaurants.</li>
            <li><strong>6%</strong> – e.g. books, passenger transport and culture.</li>
          </ul>
        ),
      },
      {
        id: 'omvand-byggmoms',
        heading: 'Reverse-charge VAT in construction',
        body: (
          <p>
            Between construction companies, reverse charge (omvänd byggmoms) often applies: the
            seller invoices without VAT and the buyer accounts for it. The calculator still helps
            you see the VAT amount involved.
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about VAT',
    faq: [
      {
        question: 'How do I work out VAT on an amount?',
        answer:
          'If the amount is excluding VAT, multiply by the rate (e.g. 0.25 for 25%). If it is including VAT, divide by 1.25 to get the amount excluding VAT – the calculator does both automatically.',
      },
      {
        question: 'Which VAT rate applies to construction services?',
        answer:
          'For most construction services VAT is 25%. Some goods and services are 12% or 6%. Note that reverse-charge VAT may apply between construction companies.',
      },
      {
        question: 'How do I reverse-calculate from a price including VAT?',
        answer:
          'Choose "Including VAT" in the calculator. At 25% VAT, the amount excluding VAT is the price divided by 1.25, and the VAT is the difference.',
      },
      {
        question: 'Does it cost anything?',
        answer: 'No, the calculator is free and requires no account.',
      },
    ],
    ctaHeading: 'Invoice with the right VAT in ByggExp',
    ctaText: 'Create quotes and invoices where VAT and ROT are calculated automatically. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More free tools',
    related: [
      { href: '/en/verktyg/rot-avdrag-kalkylator', label: 'ROT deduction calculator' },
      { href: '/en/verktyg/timpris-kalkylator', label: 'Hourly-rate calculator' },
      { href: '/en/verktyg', label: 'All free tools' },
    ],
  },
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lang = params?.lang;
  if (lang !== 'sv' && lang !== 'en') return { notFound: true };
  return { props: { lang } };
};

export default function MomsKalkylatorPage({ lang }: { lang: L }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${lang}/verktyg/moms-kalkylator`;

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
        tool={<MomsKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="moms-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/moms-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="moms-kalkylator"
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
