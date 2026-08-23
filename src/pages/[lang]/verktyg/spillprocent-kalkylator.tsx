import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import SpillprocentKalkylatorTool from '../../../components/LeadMagnet/SpillprocentKalkylatorTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv on byggexp.se, en on /en for parity.
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
    metaTitle: 'Spillprocent kalkylator – räkna materialåtgång med spill | ByggExp',
    description:
      'Räkna ut materialåtgång med spill gratis: ange nettoåtgång och välj material eller eget spillpåslag så får du bruttomängden att beställa. Riktvärden 5–15 %.',
    badge: 'Gratis kalkylator',
    h1: 'Spillprocent – räkna materialåtgång med spill',
    intro:
      'Ange nettoåtgången och välj material eller ett eget spillpåslag. Kalkylatorn räknar ut hur mycket du behöver beställa när kapspill och kassation räknats in.',
    previewAlt: 'Förhandsvisning av spillprocent-kalkylatorn',
    previewCaption: 'Så ser spillprocent-kalkylatorn ut',
    sections: [
      {
        id: 'riktvarden-spill',
        heading: 'Riktvärden för spill per material',
        body: (
          <ul>
            <li><strong>5 %</strong> – betong/gjutning, isolering, enkla rektangulära ytor.</li>
            <li><strong>8–10 %</strong> – trall, golvbräda, klinker, kakel, gips.</li>
            <li><strong>10–15 %</strong> – tak med kupor och valmar, plåt med många skärningar.</li>
          </ul>
        ),
      },
      {
        id: 'sa-minskar-du-spill',
        heading: 'Så håller du nere spillet',
        body: (
          <p>
            Planera läggningsriktning och skarvar, beställ rätt längder och samordna kap. Runda ändå alltid upp
            till hel förpackning – en pall för mycket är billigare än ett produktionsstopp och en efterleverans
            som riskerar att skilja sig i kulör eller bränning.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om spill',
    faq: [
      {
        question: 'Hur mycket spill ska jag räkna med?',
        answer:
          'Det beror på material och ytans komplexitet. Vanliga riktvärden är 5 % för enkla ytor och gjutning, 8–10 % för trall, klinker och gips, och upp till 15 % för komplexa tak och plåt med många skärningar.',
      },
      {
        question: 'Hur räknas bruttoåtgången?',
        answer:
          'Bruttoåtgång = nettoåtgång × (1 + spillprocent). 120 m² netto med 10 % spill blir 120 × 1,10 = 132 m² att beställa.',
      },
      {
        question: 'Varför behöver jag räkna med spill?',
        answer:
          'Kapspill, skärningar mot hörn och kassation gör att du alltid går åt mer material än den rena ytan. Räknar du utan spill riskerar du produktionsstopp och dyra efterbeställningar i fel bränning eller kulör.',
      },
      {
        question: 'Kostar kalkylatorn något?',
        answer: 'Nej, den är gratis och kräver inget konto.',
      },
    ],
    ctaHeading: 'Kalkylera hela bygget i ByggExp',
    ctaText: 'Samla materialåtgång, offert och inköp på ett ställe. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Relaterat',
    related: [
      { href: '/sv/blog/spillprocent-bygg-material', label: 'Guide: spillprocent' },
      { href: '/sv/blog/rakna-material-till-bygget', label: 'Räkna material till bygget' },
      { href: '/sv/verktyg/betong-kalkylator', label: 'Betong-kalkylator' },
      { href: '/sv/verktyg', label: 'Alla gratis verktyg' },
    ],
  },
  en: {
    metaTitle: 'Waste percentage calculator – material need with waste | ByggExp',
    description:
      'Work out material need with waste free: enter the net need and choose a material or your own waste allowance to get the gross quantity to order. Guide values 5–15%.',
    badge: 'Free calculator',
    h1: 'Waste percentage – material need with waste',
    intro:
      'Enter the net need and choose a material or your own waste allowance. The calculator works out how much you need to order once cutting waste and rejects are included.',
    previewAlt: 'Preview of the waste percentage calculator',
    previewCaption: 'This is how the waste percentage calculator looks',
    sections: [
      {
        id: 'riktvarden-spill',
        heading: 'Guide values for waste per material',
        body: (
          <ul>
            <li><strong>5%</strong> – concrete/casting, insulation, simple rectangular areas.</li>
            <li><strong>8–10%</strong> – decking, floorboard, floor and wall tiles, plasterboard.</li>
            <li><strong>10–15%</strong> – roofs with dormers and hips, sheet metal with many cuts.</li>
          </ul>
        ),
      },
      {
        id: 'sa-minskar-du-spill',
        heading: 'How to keep waste down',
        body: (
          <p>
            Plan the laying direction and joints, order the right lengths and coordinate cuts. Still always
            round up to a whole pack – one pallet too many is cheaper than a production stop and a re-order
            that risks differing in colour or batch.
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about waste',
    faq: [
      {
        question: 'How much waste should I allow?',
        answer:
          'It depends on the material and the complexity of the area. Common guide values are 5% for simple areas and casting, 8–10% for decking, tiles and plasterboard, and up to 15% for complex roofs and sheet metal with many cuts.',
      },
      {
        question: 'How is the gross need calculated?',
        answer:
          'Gross need = net need × (1 + waste percentage). 120 m² net with 10% waste becomes 120 × 1.10 = 132 m² to order.',
      },
      {
        question: 'Why do I need to allow for waste?',
        answer:
          'Cutting waste, cuts at corners and rejects mean you always use more material than the clean area. Without waste you risk a production stop and expensive re-orders in the wrong batch or colour.',
      },
      {
        question: 'Does the calculator cost anything?',
        answer: 'No, it is free and requires no account.',
      },
    ],
    ctaHeading: 'Estimate the whole build in ByggExp',
    ctaText: 'Gather material need, quotes and purchasing in one place. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'Related',
    related: [
      { href: '/en/verktyg/betong-kalkylator', label: 'Concrete calculator' },
      { href: '/en/verktyg/kvadratmeter-kalkylator', label: 'Square-metre calculator' },
      { href: '/en/verktyg', label: 'All free tools' },
    ],
  },
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lang = params?.lang;
  if (lang !== 'sv' && lang !== 'en') return { notFound: true };
  return { props: { lang } };
};

export default function SpillprocentKalkylatorPage({ lang }: { lang: L }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${lang}/verktyg/spillprocent-kalkylator`;

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
        tool={<SpillprocentKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="spillprocent-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/spillprocent-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="spillprocent-kalkylator"
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
