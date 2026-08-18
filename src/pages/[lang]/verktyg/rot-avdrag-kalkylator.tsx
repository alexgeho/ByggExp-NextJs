import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import RotKalkylatorTool from '../../../components/LeadMagnet/RotKalkylatorTool';
import EmbedSnippet from '../../../components/LeadMagnet/EmbedSnippet';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur mycket är ROT-avdraget 2026?',
    answer:
      'Från och med 1 januari 2026 är ROT-avdraget 30 % av arbetskostnaden, med ett tak på 50 000 kr per person och år. Under senare delen av 2025 gällde tillfälligt 50 %.',
  },
  {
    question: 'Räknas material in i ROT-avdraget?',
    answer:
      'Nej. ROT-avdraget gäller bara arbetskostnaden – inte material, resor eller maskiner. Därför är det viktigt att arbetskostnaden är tydligt specificerad på fakturan.',
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
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function RotKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/rot-avdrag-kalkylator`;
  const title = 'ROT-avdrag kalkylator 2026 – räkna ut gratis | ByggExp';
  const description =
    'Räkna ut ROT-avdraget gratis enligt reglerna 2026: 30 % av arbetskostnaden, max 50 000 kr per person. Se direkt vad kunden betalar efter ROT.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQ.map((item) => ({
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
        badge="Gratis kalkylator"
        title="ROT-avdrag kalkylator 2026"
        intro="Räkna ut ROT-avdraget och se vad kunden betalar efter avdrag. Enligt Skatteverkets regler 2026: 30 % av arbetskostnaden, max 50 000 kr per person och år."
        tool={<RotKalkylatorTool />}
        leadForm={<ToolLeadForm tool="rot-avdrag-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/rot-avdrag-preview.webp"
            alt="Förhandsvisning av ROT-avdrag kalkylator"
            caption="Så ser ROT-avdrag kalkylatorn ut"
            width={1000}
            height={474}
          />
        }
        sections={[
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
          {
            id: 'badda-in',
            heading: 'Bädda in kalkylatorn gratis på din sajt',
            body: <EmbedSnippet slug="rot-avdrag-kalkylator" title="ROT-avdrag kalkylator" />,
          },
        ]}
        faqHeading="Vanliga frågor om ROT-avdrag"
        faq={FAQ}
        cta={{
          heading: 'Skapa offerter med ROT i ByggExp',
          text: 'Markera ROT på offert och faktura så räknas kundens del ut automatiskt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport – gratis mall' },
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
