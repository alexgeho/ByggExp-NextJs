import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import AnstalldKostnadKalkylatorTool from '../../../components/LeadMagnet/AnstalldKostnadKalkylatorTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv on byggexp.se, en on /en for parity. Sweden-specific employer costs, no nb.
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
    metaTitle: 'Vad kostar en anställd? Kalkylator (2026) | ByggExp',
    description:
      'Räkna ut vad en anställd verkligen kostar: bruttolön + arbetsgivaravgift + semester + omkostnader, plus kostnad per debiterbar timme. Gratis kalkylator för byggföretag.',
    badge: 'Gratis kalkylator',
    h1: 'Vad kostar en anställd? – kalkylator',
    intro:
      'Fyll i månadslönen så räknar kalkylatorn ut den verkliga kostnaden för en anställd: arbetsgivaravgift, semester och omkostnader – och vad den kostar per debiterbar timme. Alla procentsatser går att justera.',
    previewAlt: 'Förhandsvisning av kalkylator för vad en anställd kostar',
    previewCaption: 'Så ser kalkylatorn ut',
    sections: [
      {
        id: 'sa-mycket-mer-an-lonen',
        heading: 'Kostnaden är mycket mer än lönen',
        body: (
          <ul>
            <li><strong>Arbetsgivaravgift</strong> – 31,42 % av bruttolönen 2026.</li>
            <li><strong>Semesterlön</strong> – ofta 12 % (beror på kollektivavtal).</li>
            <li><strong>Omkostnader</strong> – försäkring, avtalspension, arbetskläder, verktyg och utbildning.</li>
            <li><strong>Ej debiterbar tid</strong> – restid, möten och ställtid som ändå ska betalas.</li>
          </ul>
        ),
      },
      {
        id: 'satt-ratt-timpris',
        heading: 'Använd kostnaden för att sätta rätt timpris',
        body: (
          <p>
            När du vet kostnaden per debiterbar timme kan du lägga på önskad marginal och få ett timpris som faktiskt
            bär företaget. Räknar du bara på lönen blir priset för lågt och marginalen försvinner.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om vad en anställd kostar',
    faq: [
      {
        question: 'Vad kostar en anställd egentligen?',
        answer:
          'Mer än lönen. Ovanpå bruttolönen tillkommer arbetsgivaravgifter (31,42 % för de flesta 2026), semesterlön (ofta 12 %) och omkostnader som försäkring, arbetskläder och verktyg. En månadslön på 34 000 kr landar ofta runt 50 000 kr i verklig månadskostnad.',
      },
      {
        question: 'Hur räknar jag kostnad per timme?',
        answer:
          'Dela den totala månadskostnaden med antalet debiterbara timmar per månad. Alla timmar är inte debiterbara – restid, möten och ställtid ingår inte, så räkna realistiskt (ofta 120–140 h/månad).',
      },
      {
        question: 'Hur hög är arbetsgivaravgiften 2026?',
        answer:
          'Den generella arbetsgivaravgiften är 31,42 % av bruttolönen. Vissa åldersgrupper kan ha nedsatt avgift – justera procentsatsen i kalkylatorn om det gäller din anställda.',
      },
      {
        question: 'Kostar kalkylatorn något?',
        answer: 'Nej, den är gratis och kräver inget konto.',
      },
    ],
    ctaHeading: 'Håll koll på tid och lönekostnad i ByggExp',
    ctaText: 'Tidrapportering och personal samlat, så att du ser vad varje timme kostar. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Relaterat',
    related: [
      { href: '/sv/blog/vad-kostar-en-anstalld-byggforetag', label: 'Guide: vad kostar en anställd' },
      { href: '/sv/blog/anstalla-personal-byggforetag', label: 'Anställa personal' },
      { href: '/sv/verktyg/timpris-kalkylator', label: 'Timpris-kalkylator' },
      { href: '/sv/verktyg', label: 'Alla gratis verktyg' },
    ],
  },
  en: {
    metaTitle: 'What does an employee cost? Calculator (2026) | ByggExp',
    description:
      'Work out what an employee really costs: gross salary + employer contributions + holiday pay + overhead, plus the cost per billable hour. Free calculator for construction firms.',
    badge: 'Free calculator',
    h1: 'What does an employee cost? – calculator',
    intro:
      'Enter the monthly salary and the calculator works out the real cost of an employee: employer contributions, holiday pay and overhead – and what it costs per billable hour. All percentages are adjustable.',
    previewAlt: 'Preview of the employee-cost calculator',
    previewCaption: 'This is how the calculator looks',
    sections: [
      {
        id: 'sa-mycket-mer-an-lonen',
        heading: 'The cost is much more than the salary',
        body: (
          <ul>
            <li><strong>Employer contributions</strong> – 31.42% of the gross salary in 2026.</li>
            <li><strong>Holiday pay</strong> – often 12% (depends on the collective agreement).</li>
            <li><strong>Overhead</strong> – insurance, occupational pension, work clothes, tools and training.</li>
            <li><strong>Non-billable time</strong> – travel, meetings and setup that must still be paid.</li>
          </ul>
        ),
      },
      {
        id: 'satt-ratt-timpris',
        heading: 'Use the cost to set the right hourly rate',
        body: (
          <p>
            Once you know the cost per billable hour you can add the margin you want and get an hourly
            rate that actually sustains the business. If you calculate on the salary alone, the price
            comes out too low and the margin disappears.
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about employee cost',
    faq: [
      {
        question: 'What does an employee really cost?',
        answer:
          'More than the salary. On top of the gross salary come employer contributions (31.42% for most in 2026), holiday pay (often 12%) and overhead such as insurance, work clothes and tools. A monthly salary of 34,000 kr often lands around 50,000 kr in real monthly cost.',
      },
      {
        question: 'How do I calculate the cost per hour?',
        answer:
          'Divide the total monthly cost by the number of billable hours per month. Not every hour is billable – travel, meetings and setup don’t count, so be realistic (often 120–140 h/month).',
      },
      {
        question: 'How high are employer contributions in 2026?',
        answer:
          'The general employer contribution is 31.42% of the gross salary. Some age groups may have a reduced rate – adjust the percentage in the calculator if it applies to your employee.',
      },
      {
        question: 'Does the calculator cost anything?',
        answer: 'No, it is free and requires no account.',
      },
    ],
    ctaHeading: 'Track time and labour cost in ByggExp',
    ctaText: 'Time reporting and staff in one place, so you see what every hour costs. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'Related',
    related: [
      { href: '/en/verktyg/timpris-kalkylator', label: 'Hourly rate calculator' },
      { href: '/en/verktyg/paslag-marginal-kalkylator', label: 'Markup & margin' },
      { href: '/en/verktyg', label: 'All free tools' },
    ],
  },
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lang = params?.lang;
  if (lang !== 'sv' && lang !== 'en') return { notFound: true };
  return { props: { lang } };
};

export default function AnstalldKostnadKalkylatorPage({ lang }: { lang: L }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${lang}/verktyg/anstalld-kostnad-kalkylator`;

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
        tool={<AnstalldKostnadKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="anstalld-kostnad-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/anstalld-kostnad-preview.webp"
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
        related={c.related}
      />

      <Footer footerT={footerT} />
    </>
  );
}
