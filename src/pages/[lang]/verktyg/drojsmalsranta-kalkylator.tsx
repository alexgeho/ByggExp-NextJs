import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import DrojsmalsrantaKalkylatorTool from '../../../components/LeadMagnet/DrojsmalsrantaKalkylatorTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv on byggexp.se, en on /en for parity. Sweden-specific interest law, no nb.
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
    metaTitle: 'Dröjsmålsränta kalkylator – räkna ut räntan gratis | ByggExp',
    description:
      'Räkna ut dröjsmålsränta på en obetald faktura gratis: referensränta + 8 %, antal dagar och lagstadgade påminnelse- och inkassoavgifter. Direkt totalsumma.',
    badge: 'Gratis kalkylator',
    h1: 'Dröjsmålsränta – räkna ut räntan på en obetald faktura',
    intro:
      'En obetald faktura kostar dig ränta för varje dag den ligger kvar. Kalkylatorn räknar ut exakt hur mycket dröjsmålsränta du har rätt till och lägger på lagstadgad påminnelse- och inkassoavgift, så du ser hela summan att kräva.',
    previewAlt: 'Förhandsvisning av dröjsmålsränta-kalkylatorn',
    previewCaption: 'Så ser dröjsmålsränta-kalkylatorn ut',
    sections: [
      {
        id: 'sa-raknas-drojsmalsranta',
        heading: 'Så räknas dröjsmålsränta',
        body: (
          <>
            <p>
              Dröjsmålsräntan är enkel ränta och beräknas på det obetalda beloppet inklusive moms:
              <strong> belopp × räntesats ÷ 365 × antal dagar</strong>. Räntesatsen enligt räntelagen är
              Riksbankens referensränta plus 8 procentenheter.
            </p>
            <p>
              Exempel: en faktura på 50&nbsp;000 kr som betalas 30 dagar för sent, med referensränta 2 %
              (dröjsmålsränta 10 %), ger 50&nbsp;000 × 0,10 ÷ 365 × 30 ≈ <strong>411 kr</strong> i ränta.
            </p>
          </>
        ),
      },
      {
        id: 'referensrantan',
        heading: 'Referensräntan ändras två gånger om året',
        body: (
          <p>
            Riksbanken fastställer referensräntan den 1 januari och den 1 juli. Eftersom nivån ändras
            behöver du kontrollera den aktuella referensräntan och lägga in den i kalkylatorn – då blir
            dröjsmålsräntan rätt.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om dröjsmålsränta',
    faq: [
      {
        question: 'Hur hög är dröjsmålsräntan?',
        answer:
          'Enligt räntelagen är den referensräntan plus 8 procentenheter, om ni inte avtalat en annan ränta. Har ni kommit överens om en högre avtalsränta gäller den i stället.',
      },
      {
        question: 'Från vilken dag räknas dröjsmålsräntan?',
        answer:
          'Har ni ett förfallodatum löper räntan från dagen efter förfallodagen. Saknas förfallodag får du ta ut dröjsmålsränta tidigast 30 dagar efter att du skickat fakturan eller krav på betalning.',
      },
      {
        question: 'Får jag ta ut påminnelse- och inkassoavgift?',
        answer:
          'Ja. Om det framgår av avtalet eller fakturan får du ta ut lagstadgad påminnelseavgift (60 kr) och inkassoavgift (180 kr). Kryssa i dem i kalkylatorn för att lägga till dem i totalsumman.',
      },
      {
        question: 'Kostar kalkylatorn något?',
        answer: 'Nej, den är gratis och kräver inget konto.',
      },
    ],
    ctaHeading: 'Slipp jaga betalningar i ByggExp',
    ctaText: 'Fakturera med tydliga betalningsvillkor och håll koll på förfallodatum. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Relaterat',
    related: [
      { href: '/sv/blog/drojsmalsranta-2026', label: 'Guide: dröjsmålsränta 2026' },
      { href: '/sv/blog/kunden-betalar-inte-fakturan', label: 'När kunden inte betalar' },
      { href: '/sv/verktyg/faktura-mall', label: 'Faktura-mall (PDF)' },
      { href: '/sv/verktyg', label: 'Alla gratis verktyg' },
    ],
  },
  en: {
    metaTitle: 'Late-payment interest calculator – work out the interest free | ByggExp',
    description:
      'Work out late-payment interest on an unpaid invoice free: reference rate + 8%, number of days and statutory reminder and debt-collection fees. Instant total.',
    badge: 'Free calculator',
    h1: 'Late-payment interest – work out the interest on an unpaid invoice',
    intro:
      'An unpaid invoice costs you interest for every day it goes unpaid. The calculator works out exactly how much late-payment interest you are owed and adds the statutory reminder and debt-collection fees, so you see the full amount to claim.',
    previewAlt: 'Preview of the late-payment interest calculator',
    previewCaption: 'This is how the late-payment interest calculator looks',
    sections: [
      {
        id: 'sa-raknas-drojsmalsranta',
        heading: 'How late-payment interest is calculated',
        body: (
          <>
            <p>
              Late-payment interest is simple interest calculated on the unpaid amount incl. VAT:
              <strong> amount × rate ÷ 365 × number of days</strong>. Per the Interest Act the rate is
              Riksbanken’s reference rate plus 8 percentage points.
            </p>
            <p>
              Example: an invoice of 50,000 kr paid 30 days late, with a reference rate of 2%
              (late-payment interest 10%), gives 50,000 × 0.10 ÷ 365 × 30 ≈ <strong>411 kr</strong> in interest.
            </p>
          </>
        ),
      },
      {
        id: 'referensrantan',
        heading: 'The reference rate changes twice a year',
        body: (
          <p>
            Riksbanken sets the reference rate on 1 January and 1 July. Because the level changes, check the
            current reference rate and enter it in the calculator – then the late-payment interest is correct.
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about late-payment interest',
    faq: [
      {
        question: 'How high is the late-payment interest?',
        answer:
          'Per the Interest Act it is the reference rate plus 8 percentage points, unless you have agreed another rate. If you have agreed a higher contractual rate, that applies instead.',
      },
      {
        question: 'From which day is the interest counted?',
        answer:
          'If you have a due date, interest runs from the day after the due date. Without a due date you may charge late-payment interest at the earliest 30 days after you sent the invoice or demand for payment.',
      },
      {
        question: 'May I charge reminder and debt-collection fees?',
        answer:
          'Yes. If it is stated in the agreement or invoice you may charge the statutory reminder fee (60 kr) and debt-collection fee (180 kr). Tick them in the calculator to add them to the total.',
      },
      {
        question: 'Does the calculator cost anything?',
        answer: 'No, it is free and requires no account.',
      },
    ],
    ctaHeading: 'Stop chasing payments in ByggExp',
    ctaText: 'Invoice with clear payment terms and keep track of due dates. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'Related',
    related: [
      { href: '/en/verktyg/moms-kalkylator', label: 'VAT calculator' },
      { href: '/en/verktyg/timpris-kalkylator', label: 'Hourly rate calculator' },
      { href: '/en/verktyg', label: 'All free tools' },
    ],
  },
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lang = params?.lang;
  if (lang !== 'sv' && lang !== 'en') return { notFound: true };
  return { props: { lang } };
};

export default function DrojsmalsrantaKalkylatorPage({ lang }: { lang: L }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${lang}/verktyg/drojsmalsranta-kalkylator`;

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
        tool={<DrojsmalsrantaKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="drojsmalsranta-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/drojsmalsranta-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="drojsmalsranta-kalkylator"
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
