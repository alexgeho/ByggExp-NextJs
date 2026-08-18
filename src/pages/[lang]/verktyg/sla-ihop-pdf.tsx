import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import MergePdfTool from '../../../components/LeadMagnet/MergePdfTool';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
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
    metaTitle: 'Slå ihop PDF – gratis online utan uppladdning | ByggExp',
    description:
      'Slå ihop flera PDF-filer (och bilder) till en enda PDF – gratis och direkt i webbläsaren. Inget konto, ingen uppladdning: filerna stannar på din dator.',
    badge: 'Gratis verktyg',
    h1: 'Slå ihop PDF – gratis och direkt i webbläsaren',
    intro:
      'Kombinera flera PDF-filer, eller PDF och bilder, till ett enda dokument. Allt sker lokalt i din webbläsare – filerna laddas aldrig upp någonstans. Gratis och utan konto.',
    previewAlt: 'Illustration: slå ihop flera PDF till en',
    previewCaption: 'Slå ihop flera PDF till en',
    sections: [
      {
        id: 'sa-slar-du-ihop-pdf',
        heading: 'Så slår du ihop PDF – steg för steg',
        body: (
          <ol>
            <li>Klicka på «Välj filer» och lägg till de PDF:er eller bilder du vill kombinera.</li>
            <li>Ordna filerna i rätt ordning med pilarna.</li>
            <li>Klicka på «Slå ihop till PDF» – den färdiga filen laddas ner direkt.</li>
          </ol>
        ),
      },
      {
        id: 'filerna-stannar-hos-dig',
        heading: 'Dina filer stannar på din dator',
        body: (
          <p>
            Till skillnad från många andra tjänster laddas ingenting upp till en server. Hela
            sammanslagningen körs i din webbläsare, vilket gör verktyget snabbt och tryggt även för
            offerter, ritningar och avtal som du inte vill skicka runt på nätet.
          </p>
        ),
      },
      {
        id: 'anvandningsomraden-bygg',
        heading: 'Vanliga användningsområden för byggföretag',
        body: (
          <ul>
            <li>Slå ihop offert, ritningar och bilder till ett dokument innan du skickar till kund.</li>
            <li>Samla alla fakturor för ett projekt i en fil.</li>
            <li>Kombinera fotograferade kvitton (bilder) till en PDF för bokföringen.</li>
            <li>Lägg ihop egenkontroller och intyg till en komplett projektpärm.</li>
          </ul>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om att slå ihop PDF',
    faq: [
      {
        question: 'Laddas mina filer upp någonstans?',
        answer:
          'Nej. Hela sammanslagningen sker lokalt i din webbläsare – filerna skickas aldrig till någon server. Det gör verktyget snabbt och tryggt även för känsliga dokument.',
      },
      {
        question: 'Kan jag slå ihop bilder och PDF till samma fil?',
        answer:
          'Ja. Du kan blanda PDF-filer och bilder (PNG/JPG) – varje bild läggs som en egen sida i den sammanslagna PDF:en.',
      },
      {
        question: 'Kan jag bestämma ordningen på sidorna?',
        answer:
          'Ja. Flytta filerna upp och ner i listan innan du slår ihop dem, så hamnar sidorna i den ordning du vill.',
      },
      {
        question: 'Kostar det något?',
        answer:
          'Nej, verktyget är gratis och kräver inget konto. Behöver du hantera dokument, offerter och fakturor samlat kan du testa ByggExp.',
      },
    ],
    ctaHeading: 'Håll ordning på dokumenten i ByggExp',
    ctaText: 'Samla offerter, fakturor, foton och egenkontroller per projekt – i en app från offert till lön. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler gratis verktyg',
    related: [
      { slug: 'dela-pdf', label: 'Dela PDF – extrahera sidor' },
      { slug: 'byggdagbok-mall', label: 'Byggdagbok – gratis mall' },
      { slug: 'tidrapport-mall', label: 'Tidrapport – gratis mall' },
    ],
  },
  nb: {
    metaTitle: 'Slå sammen PDF – gratis online uten opplasting | ByggExp',
    description:
      'Slå sammen flere PDF-filer (og bilder) til én enkelt PDF – gratis og direkte i nettleseren. Ingen konto, ingen opplasting: filene forlater aldri datamaskinen din.',
    badge: 'Gratis verktøy',
    h1: 'Slå sammen PDF – gratis og direkte i nettleseren',
    intro:
      'Kombiner flere PDF-filer, eller PDF og bilder, til ett enkelt dokument. Alt skjer lokalt i nettleseren din – filene lastes aldri opp noe sted. Gratis og uten konto.',
    previewAlt: 'Illustrasjon: slå sammen flere PDF til én',
    previewCaption: 'Slå sammen flere PDF til én',
    sections: [
      {
        id: 'sa-slar-du-ihop-pdf',
        heading: 'Slik slår du sammen PDF – steg for steg',
        body: (
          <ol>
            <li>Klikk på «Velg filer» og legg til de PDF-ene eller bildene du vil kombinere.</li>
            <li>Ordne filene i riktig rekkefølge med pilene.</li>
            <li>Klikk på «Slå sammen til PDF» – den ferdige filen lastes ned med en gang.</li>
          </ol>
        ),
      },
      {
        id: 'filerna-stannar-hos-dig',
        heading: 'Filene dine forlater aldri datamaskinen din',
        body: (
          <p>
            I motsetning til mange andre tjenester lastes ingenting opp til en server. Hele
            sammenslåingen kjøres i nettleseren din, noe som gjør verktøyet raskt og trygt også for
            tilbud, tegninger og avtaler som du ikke vil sende rundt på nettet.
          </p>
        ),
      },
      {
        id: 'anvandningsomraden-bygg',
        heading: 'Vanlige bruksområder for byggefirmaer',
        body: (
          <ul>
            <li>Slå sammen tilbud, tegninger og bilder til ett dokument før du sender til kunde.</li>
            <li>Samle alle fakturaene for et prosjekt i én fil.</li>
            <li>Kombiner fotograferte kvitteringer (bilder) til en PDF for regnskapet.</li>
            <li>Legg sammen egenkontroller og sertifikater til en komplett prosjektperm.</li>
          </ul>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om å slå sammen PDF',
    faq: [
      {
        question: 'Lastes filene mine opp noe sted?',
        answer:
          'Nei. Hele sammenslåingen skjer lokalt i nettleseren din – filene sendes aldri til noen server. Det gjør verktøyet raskt og trygt også for sensitive dokumenter.',
      },
      {
        question: 'Kan jeg slå sammen bilder og PDF til samme fil?',
        answer:
          'Ja. Du kan blande PDF-filer og bilder (PNG/JPG) – hvert bilde legges som en egen side i den sammenslåtte PDF-en.',
      },
      {
        question: 'Kan jeg bestemme rekkefølgen på sidene?',
        answer:
          'Ja. Flytt filene opp og ned i listen før du slår dem sammen, så havner sidene i den rekkefølgen du vil.',
      },
      {
        question: 'Koster det noe?',
        answer:
          'Nei, verktøyet er gratis og krever ingen konto. Trenger du å håndtere dokumenter, tilbud og fakturaer samlet kan du teste ByggExp.',
      },
    ],
    ctaHeading: 'Hold orden på dokumentene i ByggExp',
    ctaText: 'Samle tilbud, fakturaer, bilder og egenkontroller per prosjekt – i én app fra tilbud til lønn. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere gratis verktøy',
    related: [
      { slug: 'dela-pdf', label: 'Dele PDF – trekk ut sider' },
      { slug: 'byggdagbok-mall', label: 'Byggedagbok – gratis mal' },
      { slug: 'tidrapport-mall', label: 'Timeliste – gratis mal' },
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
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/sla-ihop-pdf`;

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
        tool={<MergePdfTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/sla-ihop-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={360}
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
