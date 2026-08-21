import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import TrappaKalkylatorTool from '../../../components/LeadMagnet/TrappaKalkylatorTool';
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
    metaTitle: 'Trappberäknare – antal steg och stegmått | ByggExp',
    description:
      'Räkna ut antal steg, steghöjd och stegdjup för en trappa utifrån den totala höjden. Gratis trappberäknare enligt bekvämlighetsregeln, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Trappberäknare',
    intro:
      'Fyll i den totala höjden så räknar vi ut antal steg, steghöjd och ett rekommenderat stegdjup enligt bekvämlighetsregeln 2 × steghöjd + stegdjup ≈ 630 mm.',
    previewAlt: 'Förhandsvisning av trappberäknare',
    previewCaption: 'Så ser trappberäknare ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Så räknar du ut trappan', body: (<><figure className="lm-diagram"><img src="/landing/diagrams/trappa.webp" alt="Diagram: steghöjd och stegdjup i en trappa enligt trappformeln" width={720} height={380} loading="lazy" /><figcaption>Bekvämlighetsregeln: 2 × steghöjd + stegdjup ≈ 630 mm. Steghöjd ofta ca 175 mm.</figcaption></figure><ol><li>Mät den totala höjden trappan ska överbrygga (mm).</li><li>Ange en önskad steghöjd (ofta ca 175 mm).</li><li>Se antal steg, faktisk steghöjd och rekommenderat stegdjup.</li></ol></>) },
      { id: 'info', heading: 'Bekvämlighetsregeln', body: (<><p>En trappa upplevs bekväm när 2 × steghöjd + stegdjup är ungefär 630 mm. Blir stegen för höga eller för grunda känns trappan obekväm och kan bli osäker.</p></>) },
    ],
    faqHeading: 'Vanliga frågor',
    faq: [
      { question: 'Hur räknar jag ut antal steg i en trappa?', answer: 'Dela den totala höjden med önskad steghöjd (ofta ca 175 mm) och avrunda. Den faktiska steghöjden blir höjden delat med antal steg.' },
      { question: 'Vad är en bekväm steghöjd?', answer: 'Ofta 150–180 mm. En vanlig tumregel är att 2 × steghöjd + stegdjup ska bli ungefär 600–640 mm för en bekväm trappa.' },
      { question: 'Vilka krav finns på trappor?', answer: 'Boverkets byggregler (BBR) ställer krav på bland annat steghöjd, stegdjup och bredd. Kontrollera kraven för din typ av trappa.' },
      { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
    ],
    ctaHeading: 'Räkna material och tid i ByggExp',
    ctaText: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'fall-kalkylator', label: 'Fall & lutning' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberäknare' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Trappberegner – antall trinn og trinnmål | ByggExp',
    description:
      'Regn ut antall trinn, opptrinn og inntrinn for en trapp ut fra den totale høyden. Gratis trappberegner etter bekvemmelighetsregelen, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Trappberegner',
    intro:
      'Fyll inn den totale høyden så regner vi ut antall trinn, opptrinn og et anbefalt inntrinn etter bekvemmelighetsregelen 2 × opptrinn + inntrinn ≈ 630 mm.',
    previewAlt: 'Forhåndsvisning av trappberegner',
    previewCaption: 'Slik ser trappberegner ut',
    sections: [
      { id: 'sa-raknar-du', heading: 'Slik regner du ut trappen', body: (<><ol><li>Mål den totale høyden trappen skal overbygge (mm).</li><li>Angi et ønsket opptrinn (ofte ca 175 mm).</li><li>Se antall trinn, faktisk opptrinn og anbefalt inntrinn.</li></ol></>) },
      { id: 'info', heading: 'Bekvemmelighetsregelen', body: (<><p>En trapp oppleves bekvem når 2 × opptrinn + inntrinn er omtrent 630 mm. Blir trinnene for høye eller for grunne føles trappen ubekvem og kan bli usikker.</p></>) },
    ],
    faqHeading: 'Vanlige spørsmål',
    faq: [
      { question: 'Hvordan regner jeg ut antall trinn i en trapp?', answer: 'Del den totale høyden med ønsket opptrinn (ofte ca 175 mm) og rund av. Det faktiske opptrinnet blir høyden delt på antall trinn.' },
      { question: 'Hva er et bekvemt opptrinn?', answer: 'Ofte 150–180 mm. En vanlig tommelfingerregel er at 2 × opptrinn + inntrinn skal bli omtrent 600–640 mm for en bekvem trapp.' },
      { question: 'Hvilke krav finnes for trapper?', answer: 'Byggreglene stiller krav til blant annet opptrinn, inntrinn og bredde. Kontroller kravene for din type trapp.' },
      { question: 'Koster det noe?', answer: 'Nei, kalkulatoren er gratis og krever ingen konto.' },
    ],
    ctaHeading: 'Regn ut materialer og tid i ByggExp',
    ctaText: 'Hold styr på materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'fall-kalkylator', label: 'Fall & helling' },
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberegner' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/trappa-kalkylator`;

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
        tool={<TrappaKalkylatorTool />}
        leadForm={<ToolLeadForm tool="trappa-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/trappa-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        embedSlug="trappa-kalkylator"
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
