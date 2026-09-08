import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import EgenkontrollTool from '../../../components/LeadMagnet/EgenkontrollTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only lead magnet — dedicated tak page so "egenkontroll tak" lands on a page
// that is all about takarbete: the tool opens pre-filled with the tak preset.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska en egenkontroll för tak innehålla?',
    answer:
      'Projekt, ansvarig och datum samt kontrollpunkter med resultat. Typiska punkter är hel och rätt lagd underlagstäckning, infästning enligt vindlastkrav, täta genomföringar och anslutningar, kontrollerat fall och avvattning samt monterad taksäkerhet (snörasskydd och fästen).',
  },
  {
    question: 'Varför är infästning enligt vindlast viktig?',
    answer:
      'Taket utsätts för stora vindlaster. Rätt antal och rätt typ av infästningar enligt vindlastkravet (BBR/EKS) är avgörande för att takytan ska sitta kvar. Dokumentera att infästningen är utförd enligt projekteringen i egenkontrollen.',
  },
  {
    question: 'Ingår taksäkerhet i egenkontrollen?',
    answer:
      'Ja. Snörasskydd, fästen och annan taksäkerhet ska vara monterad enligt kraven. Ta med taksäkerheten som en kontrollpunkt så att den inte glöms bort innan taket godkänns.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function EgenkontrollTakMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/egenkontroll-tak-mall`;

  const title = 'Egenkontroll tak – gratis mall (PDF) | ByggExp';
  const description =
    'Gratis egenkontroll-mall för takarbete. Fyll i underlagstäckning, infästning (vindlast), täta genomföringar, fall och taksäkerhet online och ladda ner som PDF – utan konto.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
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
        badge="Gratis mall"
        title="Egenkontroll tak – gratis mall att fylla i online"
        intro="Färdig egenkontroll för takarbete – underlagstäckning, infästning enligt vindlast, genomföringar, fall och taksäkerhet ligger redan ifyllda. Sätt resultat, kommentera anmärkningar och ladda ner som PDF. Gratis och utan konto."
        tool={<EgenkontrollTool defaultPreset="tak" />}
        leadForm={<ToolLeadForm tool="egenkontroll-tak-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/egenkontroll-preview.webp"
            alt="Förhandsvisning av ifylld egenkontroll för tak som PDF"
            caption="Så ser en ifylld egenkontroll för tak ut som PDF"
            width={1000}
            height={548}
          />
        }
        sections={[
          {
            id: 'vad-ar-egenkontroll-tak',
            heading: 'Vad är en egenkontroll för tak?',
            body: (
              <p>
                En egenkontroll för tak är takläggarens egen dokumenterade kontroll av att takarbetet är
                rätt utfört: underlagstäckningen är hel, infästningen klarar vindlasten, genomföringar är
                täta och taksäkerheten är monterad. Den blir beviset på att taket är kontrollerat och
                tätt innan det godkänns.
              </p>
            ),
          },
          {
            id: 'kontrollpunkter-egenkontroll-tak',
            heading: 'Kontrollpunkter i en egenkontroll för tak',
            body: (
              <>
                <p>Mallen ovan öppnar redan ifylld med de vanligaste punkterna:</p>
                <ul>
                  <li><strong>Underlagstäckning hel och rätt lagd</strong> – inga skador eller fel.</li>
                  <li><strong>Infästning enligt vindlastkrav</strong> – rätt antal och typ (BBR/EKS).</li>
                  <li><strong>Genomföringar och anslutningar täta</strong> – inga otätheter.</li>
                  <li><strong>Fall och avvattning kontrollerat</strong> – vatten leds bort rätt.</li>
                  <li><strong>Taksäkerhet monterad</strong> – snörasskydd och fästen.</li>
                </ul>
                <p>Sätt resultat (godkänd, anmärkning eller ej aktuellt) och lägg till egna punkter för projektets krav.</p>
              </>
            ),
          },
          {
            id: 'sa-fyller-du-i-egenkontroll-tak',
            heading: 'Så fyller du i egenkontrollen steg för steg',
            body: (
              <ol>
                <li>Kontrollpunkterna ligger redan i tabellen ovan – lägg till egna vid behov.</li>
                <li>Fyll i projekt, ansvarig och datum.</li>
                <li>Sätt resultat på varje punkt och kommentera anmärkningar.</li>
                <li>Ladda ner egenkontrollen som PDF och signera.</li>
                <li>Åtgärda anmärkningar och följ upp att de är avklarade.</li>
              </ol>
            ),
          },
          {
            id: 'egenkontroll-tak-i-byggexp',
            heading: 'Så gör du egenkontroller för tak i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. I ByggExp finns färdiga egenkontroll-mallar för tak,
                el, VVS, bygg och skyddsrond – du fyller i på plats, markerar resultat och samlar alla
                kontroller per projekt tillsammans med byggdagbok, foton och tid.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om egenkontroll för tak"
        faq={FAQ}
        cta={{
          heading: 'Gör egenkontroller för tak i ByggExp',
          text: 'Färdiga mallar för tak, el, VVS, bygg och skyddsrond – ifyllda på plats och samlade per projekt. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll – mall för alla yrken' },
          { href: `/${LOCALE}/verktyg/egenkontroll-bygg-mall`, label: 'Egenkontroll bygg – gratis mall' },
          { href: `/${LOCALE}/verktyg/egenkontroll-el-mall`, label: 'Egenkontroll el – gratis mall' },
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
