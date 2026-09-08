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

// sv-only lead magnet — dedicated våtrum/tätskikt page so "egenkontroll våtrum"
// lands on a page that is all about tätskikt: the tool opens pre-filled with the
// våtrum preset and every section talks våtrum.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska en egenkontroll för våtrum innehålla?',
    answer:
      'Projekt, ansvarig och datum samt kontrollpunkter med resultat. Typiska punkter är fuktmätning i underlag före tätskikt, tätskikt applicerat enligt tillverkarens anvisning (BBV/GVK), kontrollerat fall mot golvbrunn, rätt monterad golvbrunn i nivå med tätskiktet och täta genomföringar.',
  },
  {
    question: 'Vad betyder BBV och GVK?',
    answer:
      'BBV (Byggkeramikrådets Branschregler för Våtrum) och GVK (Golvbranschens våtrumskontroll) är branschreglerna för tätskikt i våtrum. Tätskiktet ska appliceras enligt tillverkarens monteringsanvisning inom ramen för dessa regler – ange gärna vilken branschregel som gäller i egenkontrollen.',
  },
  {
    question: 'Varför är fuktmätning viktig innan tätskikt?',
    answer:
      'Ett för fuktigt underlag kan ge vidhäftningsproblem och fuktskador bakom tätskiktet. Fuktmätningen dokumenterar att underlaget var tillräckligt torrt när tätskiktet applicerades – ett viktigt bevis vid en framtida fuktskada.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function EgenkontrollVatrumMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/egenkontroll-vatrum-mall`;

  const title = 'Egenkontroll våtrum – gratis mall (PDF) | ByggExp';
  const description =
    'Gratis egenkontroll-mall för våtrum och tätskikt. Fyll i fuktmätning, tätskikt (BBV/GVK), fall mot golvbrunn och genomföringar online och ladda ner som PDF – utan konto.';

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
        title="Egenkontroll våtrum – gratis mall att fylla i online"
        intro="Färdig egenkontroll för våtrum och tätskikt – fuktmätning, tätskikt enligt BBV/GVK, fall mot golvbrunn och genomföringar ligger redan ifyllda. Sätt resultat, kommentera anmärkningar och ladda ner som PDF. Gratis och utan konto."
        tool={<EgenkontrollTool defaultPreset="vatrum" />}
        leadForm={<ToolLeadForm tool="egenkontroll-vatrum-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/egenkontroll-preview.webp"
            alt="Förhandsvisning av ifylld egenkontroll för våtrum som PDF"
            caption="Så ser en ifylld egenkontroll för våtrum ut som PDF"
            width={1000}
            height={548}
          />
        }
        sections={[
          {
            id: 'vad-ar-egenkontroll-vatrum',
            heading: 'Vad är en egenkontroll för våtrum?',
            body: (
              <p>
                En egenkontroll för våtrum är hantverkarens egen dokumenterade kontroll av att tätskikt
                och våtrum är rätt utfört enligt branschreglerna (BBV/GVK). Den visar att underlaget var
                torrt, att tätskiktet applicerats rätt och att fall och genomföringar är täta – beviset
                som håller vid en framtida fuktskada eller tvist.
              </p>
            ),
          },
          {
            id: 'kontrollpunkter-egenkontroll-vatrum',
            heading: 'Kontrollpunkter i en egenkontroll för våtrum',
            body: (
              <>
                <p>Mallen ovan öppnar redan ifylld med de vanligaste punkterna:</p>
                <ul>
                  <li><strong>Fuktmätning i underlag utförd</strong> – före tätskikt.</li>
                  <li><strong>Tätskikt enligt tillverkarens anvisning</strong> – inom BBV/GVK.</li>
                  <li><strong>Fall mot golvbrunn kontrollerat</strong> – vatten rinner rätt.</li>
                  <li><strong>Golvbrunn rätt monterad</strong> – i nivå med tätskiktet.</li>
                  <li><strong>Genomföringar täta</strong> – rör och andra genomföringar.</li>
                </ul>
                <p>Sätt resultat (godkänd, anmärkning eller ej aktuellt) och lägg till egna punkter för projektets krav.</p>
              </>
            ),
          },
          {
            id: 'sa-fyller-du-i-egenkontroll-vatrum',
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
            id: 'egenkontroll-vatrum-i-byggexp',
            heading: 'Så gör du egenkontroller för våtrum i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. I ByggExp finns färdiga egenkontroll-mallar för
                våtrum, el, VVS, bygg och skyddsrond – du fyller i på plats, markerar resultat och samlar
                alla kontroller per projekt tillsammans med byggdagbok, foton och tid.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om egenkontroll för våtrum"
        faq={FAQ}
        cta={{
          heading: 'Gör egenkontroller för våtrum i ByggExp',
          text: 'Färdiga mallar för våtrum, el, VVS, bygg och skyddsrond – ifyllda på plats och samlade per projekt. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll – mall för alla yrken' },
          { href: `/${LOCALE}/verktyg/egenkontroll-vvs-mall`, label: 'Egenkontroll VVS – gratis mall' },
          { href: `/${LOCALE}/verktyg/egenkontroll-el-mall`, label: 'Egenkontroll el – gratis mall' },
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
