import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import UvardeKalkylatorTool from '../../../components/LeadMagnet/UvardeKalkylatorTool';
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
    metaTitle: 'U-värde kalkylator – räkna ut U-värde gratis | ByggExp',
    description:
      'Räkna ut U-värde för vägg, tak eller golv gratis. Lägg in materiallagren med tjocklek och lambda så får du värmemotstånd och U-värde (W/m²K) direkt.',
    badge: 'Gratis kalkylator',
    h1: 'U-värde – räkna ut värmegenomgången',
    intro:
      'Ska du efterisolera eller välja rätt isolertjocklek? Bygg upp väggen, taket eller golvet lager för lager, så ser du hur bra konstruktionen håller värmen. Du får värmemotståndet och U-värdet (W/m²K) direkt på skärmen – utan att räkna för hand.',
    previewAlt: 'Förhandsvisning av U-värde-kalkylator',
    previewCaption: 'Så ser U-värde-kalkylatorn ut',
    sections: [
      {
        id: 'sa-fungerar-u-varde',
        heading: 'Så fungerar U-värde',
        body: (
          <>
            <p>
              U-värdet beskriver hur mycket värme som passerar genom en konstruktion per kvadratmeter och grad
              temperaturskillnad. Ju lägre värde, desto bättre isolering. Det räknas ut från summan av alla
              materiallagers värmemotstånd plus ytmotstånden på in- och utsidan.
            </p>
            <p>
              Varje lagers motstånd är <strong>R = tjocklek (m) ÷ λ</strong>. Ett tjockare eller mer isolerande
              skikt (lägre λ) ger högre R och därmed lägre U-värde.
            </p>
          </>
        ),
      },
      {
        id: 'koldbryggor',
        heading: 'Tänk på köldbryggorna',
        body: (
          <p>
            Vid isolering mellan träreglar leder reglarna mer värme än isoleringen. Den här kalkylatorn räknar på
            homogena skikt – för en regelvägg blir det verkliga U-värdet något högre. Använd tillverkarens
            U-värdesunderlag eller λ-metoden när det ska vara exakt.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om U-värde',
    faq: [
      {
        question: 'Hur räknar man ut U-värde?',
        answer:
          'U-värdet är 1 delat med det totala värmemotståndet: U = 1 / (Rsi + ΣR + Rse). Varje materiallagers motstånd R är tjockleken (i meter) delat med lambdavärdet (λ), och ytmotstånden Rsi och Rse läggs till för in- och utsida.',
      },
      {
        question: 'Vad är ett bra U-värde?',
        answer:
          'Lägre är bättre. En välisolerad yttervägg ligger ofta runt 0,15–0,18 W/m²K och moderna fönster runt 0,9–1,2 W/m²K (Uw för hela fönstret). Kontrollera aktuella krav hos Boverket för din åtgärd.',
      },
      {
        question: 'Vad är skillnaden på Uw och Ug för fönster?',
        answer:
          'Ug avser bara glaset, Uw hela fönstret inklusive karm och båge. Uw är alltid högre (sämre) än Ug – jämför alltid Uw mot Uw när du utvärderar fönster.',
      },
      {
        question: 'Kostar kalkylatorn något?',
        answer: 'Nej, den är gratis och kräver inget konto.',
      },
    ],
    ctaHeading: 'Kalkylera hela bygget i ByggExp',
    ctaText: 'Samla materialåtgång, offert och projekt på ett ställe. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Relaterat',
    related: [
      { href: '/sv/blog/berakna-u-varde-isolering', label: 'Guide: beräkna U-värde' },
      { href: '/sv/blog/fonster-u-varde-2026', label: 'Fönster och U-värde' },
      { href: '/sv/verktyg/isolering-kalkylator', label: 'Isolering-kalkylator' },
      { href: '/sv/verktyg', label: 'Alla gratis verktyg' },
    ],
  },
  en: {
    metaTitle: 'U-value calculator – work out the U-value free | ByggExp',
    description:
      'Work out the U-value for a wall, roof or floor free. Add the material layers with thickness and lambda and get the thermal resistance and U-value (W/m²K) instantly.',
    badge: 'Free calculator',
    h1: 'U-value – work out the heat transmission',
    intro:
      'Planning to add insulation or pick the right insulation thickness? Build the wall, roof or floor up layer by layer and see how well the construction holds the heat. You get the thermal resistance and U-value (W/m²K) on screen – no hand calculation needed.',
    previewAlt: 'Preview of the U-value calculator',
    previewCaption: 'This is how the U-value calculator looks',
    sections: [
      {
        id: 'sa-fungerar-u-varde',
        heading: 'How the U-value works',
        body: (
          <>
            <p>
              The U-value describes how much heat passes through a construction per square metre and degree of
              temperature difference. The lower the value, the better the insulation. It is calculated from the sum
              of all material layers’ thermal resistance plus the surface resistances on the inside and outside.
            </p>
            <p>
              Each layer’s resistance is <strong>R = thickness (m) ÷ λ</strong>. A thicker or more insulating layer
              (lower λ) gives a higher R and therefore a lower U-value.
            </p>
          </>
        ),
      },
      {
        id: 'koldbryggor',
        heading: 'Mind the thermal bridges',
        body: (
          <p>
            With insulation between timber studs, the studs conduct more heat than the insulation. This calculator
            works on homogeneous layers – for a stud wall the real U-value is somewhat higher. Use the
            manufacturer’s U-value data or the λ-method when it needs to be exact.
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about the U-value',
    faq: [
      {
        question: 'How do you calculate the U-value?',
        answer:
          'The U-value is 1 divided by the total thermal resistance: U = 1 / (Rsi + ΣR + Rse). Each material layer’s resistance R is the thickness (in metres) divided by the lambda value (λ), and the surface resistances Rsi and Rse are added for the inside and outside.',
      },
      {
        question: 'What is a good U-value?',
        answer:
          'Lower is better. A well-insulated external wall is often around 0.15–0.18 W/m²K and modern windows around 0.9–1.2 W/m²K (Uw for the whole window). Check the current requirements at Boverket for your work.',
      },
      {
        question: 'What is the difference between Uw and Ug for windows?',
        answer:
          'Ug is the glass only, Uw the whole window including frame and sash. Uw is always higher (worse) than Ug – always compare Uw to Uw when evaluating windows.',
      },
      {
        question: 'Does the calculator cost anything?',
        answer: 'No, it is free and requires no account.',
      },
    ],
    ctaHeading: 'Estimate the whole build in ByggExp',
    ctaText: 'Gather material need, quotes and projects in one place. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'Related',
    related: [
      { href: '/en/verktyg/isolering-kalkylator', label: 'Insulation calculator' },
      { href: '/en/verktyg/reglar-kalkylator', label: 'Studs & timber' },
      { href: '/en/verktyg', label: 'All free tools' },
    ],
  },
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lang = params?.lang;
  if (lang !== 'sv' && lang !== 'en') return { notFound: true };
  return { props: { lang } };
};

export default function UvardeKalkylatorPage({ lang }: { lang: L }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${lang}/verktyg/u-varde-kalkylator`;

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
        tool={<UvardeKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="u-varde-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/u-varde-preview.webp"
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
