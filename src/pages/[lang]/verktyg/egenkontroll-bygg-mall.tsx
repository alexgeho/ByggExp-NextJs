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

// sv-only lead magnet — see content-value-strategy. Dedicated bygg-page: the
// "egenkontroll bygg mall pdf/gratis" queries are the biggest egenkontroll
// impression driver, so this lands them on a page that is entirely about
// byggkonstruktion – the tool opens pre-filled with the bygg/stomme preset.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska en egenkontroll för bygg innehålla?',
    answer:
      'Projekt, ansvarig och datum samt kontrollpunkter med resultat (godkänd, anmärkning eller ej aktuellt). Typiska punkter för bygg och stomme är måttkontroll mot ritning, kontroll av infästningar och förankringar, fuktkontroll, brandtätning enligt BBR och dokumenterade avvikelser.',
  },
  {
    question: 'Görs egenkontroll för bygg mot BBR?',
    answer:
      'Ofta ja. Kontrollpunkter för brand, fukt och konstruktion kopplas normalt till Boverkets byggregler (BBR) och till projektets ritningar och beskrivningar. Ange gärna referensen i egenkontrollen så syns det vilket krav kontrollen görs mot.',
  },
  {
    question: 'Vad är skillnaden mot byggherrens kontrollplan?',
    answer:
      'Byggherrens kontrollplan enligt PBL beskriver vad som ska kontrolleras i projektet, av vem och mot vad. Entreprenörens egenkontroll – som den här mallen gäller – är det praktiska verktyget som visar att de enskilda momenten faktiskt kontrollerats och godkänts.',
  },
  {
    question: 'Vem ansvarar för egenkontrollen på bygget?',
    answer:
      'Den som utför arbetet ansvarar för sin egenkontroll och en ansvarig person signerar. Egenkontrollerna blir ofta det underlag som visar att punkterna i byggherrens kontrollplan uppfyllts.',
  },
  {
    question: 'Hur länge ska egenkontroller för bygg sparas?',
    answer:
      'Spara dem under ansvarstiden. Enligt AB 04 är garantitiden normalt fem år och ansvarstiden tio år – och en egenkontroll är just den dokumentation som kan avgöra en tvist om ett fel i konstruktionen upptäcks flera år senare.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function EgenkontrollByggMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/egenkontroll-bygg-mall`;

  const title = 'Egenkontroll bygg – gratis mall (PDF) | ByggExp';
  const description =
    'Gratis egenkontroll-mall för bygg och stomme. Fyll i måttkontroll, infästningar, fuktkontroll och brandtätning (BBR) online och ladda ner som PDF – utan konto.';

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
        title="Egenkontroll bygg – gratis mall att fylla i online"
        intro="Färdig egenkontroll för bygg och stomme – måttkontroll mot ritning, infästningar, fuktkontroll och brandtätning ligger redan ifyllda. Sätt resultat, kommentera eventuella anmärkningar och ladda ner som PDF. Gratis och utan konto."
        tool={<EgenkontrollTool defaultPreset="bygg" />}
        leadForm={<ToolLeadForm tool="egenkontroll-bygg-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/egenkontroll-preview.webp"
            alt="Förhandsvisning av ifylld egenkontroll för bygg/stomme som PDF"
            caption="Så ser en ifylld egenkontroll för bygg ut som PDF"
            width={1000}
            height={548}
          />
        }
        sections={[
          {
            id: 'vad-ar-egenkontroll-bygg',
            heading: 'Vad är en egenkontroll för bygg?',
            body: (
              <>
                <p>
                  En egenkontroll för bygg är entreprenörens egen dokumenterade kontroll av att
                  byggkonstruktionen är rätt utförd – att måtten stämmer mot ritning, att infästningar
                  och förankringar sitter som de ska och att fukt och brand hanterats enligt kraven. Den
                  blir beviset på att momentet är rätt utfört innan det byggs in.
                </p>
                <p>
                  Poängen är enkel: den som utför arbetet intygar själv, punkt för punkt, att det är rätt
                  gjort. Blir något inte godkänt – till exempel en avvikelse mot ritning – noteras en
                  anmärkning som ska åtgärdas och följas upp innan nästa moment startar.
                </p>
              </>
            ),
          },
          {
            id: 'kontrollpunkter-egenkontroll-bygg',
            heading: 'Kontrollpunkter i en egenkontroll för bygg/stomme',
            body: (
              <>
                <p>Mallen ovan öppnar redan ifylld med de vanligaste punkterna för bygg och stomme:</p>
                <ul>
                  <li>
                    <strong>Måttkontroll mot ritning</strong> – att mått och placering stämmer med
                    handlingarna.
                  </li>
                  <li>
                    <strong>Infästningar och förankringar kontrollerade</strong> – rätt typ, antal och
                    utförande.
                  </li>
                  <li>
                    <strong>Fuktkontroll utförd</strong> – fuktkvot och att inget byggs in för blött.
                  </li>
                  <li>
                    <strong>Brandtätning genomförd (BBR)</strong> – genomföringar och avskiljningar
                    täta enligt Boverkets byggregler.
                  </li>
                  <li>
                    <strong>Avvikelser dokumenterade</strong> – noterade, åtgärdade och uppföljda.
                  </li>
                </ul>
                <p>
                  Du behöver bara sätta resultat (godkänd, anmärkning eller ej aktuellt) och skriva en
                  kommentar där det behövs – lägg till egna punkter för projektets specifika krav.
                </p>
              </>
            ),
          },
          {
            id: 'sa-fyller-du-i-egenkontroll-bygg',
            heading: 'Så fyller du i egenkontrollen för bygg steg för steg',
            body: (
              <ol>
                <li>Kontrollpunkterna för bygg/stomme ligger redan i tabellen ovan – lägg till egna vid behov.</li>
                <li>Fyll i projekt, ansvarig och datum.</li>
                <li>Gå igenom varje punkt och sätt resultat: godkänd, anmärkning eller ej aktuellt.</li>
                <li>Skriv en kommentar vid anmärkningar – t.ex. «mått avviker 15 mm mot ritning, justeras».</li>
                <li>Ladda ner egenkontrollen som PDF och signera.</li>
                <li>Åtgärda anmärkningar och följ upp att de är avklarade innan nästa moment.</li>
              </ol>
            ),
          },
          {
            id: 'exempel-egenkontroll-bygg',
            heading: 'Exempel: egenkontroll av en stomme',
            body: (
              <>
                <p>Säg att du precis rest en del av stommen. Den ifyllda egenkontrollen kan då se ut så här:</p>
                <ul>
                  <li>Måttkontroll mot ritning – <em>Godkänd</em></li>
                  <li>Infästningar och förankringar kontrollerade – <em>Godkänd</em></li>
                  <li>Fuktkontroll utförd – <em>Godkänd</em></li>
                  <li>Brandtätning genomförd (BBR) – <em>Anmärkning: genomföring i schakt otät, åtgärdas</em></li>
                  <li>Avvikelser dokumenterade – <em>Godkänd</em></li>
                </ul>
                <p>
                  Anmärkningen på brandtätningen åtgärdas och följs upp, och den färdiga PDF:en signeras
                  och sparas i projektet som bevis på att stommen kontrollerats.
                </p>
              </>
            ),
          },
          {
            id: 'egenkontroll-bygg-och-bbr',
            heading: 'Egenkontroll bygg, BBR och kontrollplan',
            body: (
              <p>
                Kontrollpunkterna för bygg kopplas ofta till{' '}
                <strong>BBR (Boverkets byggregler)</strong> och till projektets ritningar. Begreppet
                egenkontroll finns även i <strong>plan- och bygglagen (PBL)</strong>, men avser då
                byggherrens egenkontroll som dokumenteras i en kontrollplan. Entreprenörens egenkontroll
                – som den här mallen gäller – är det praktiska sättet att visa att arbetet uppfyller de
                kraven moment för moment, och den blir ofta underlaget som styrker punkterna i
                kontrollplanen.
              </p>
            ),
          },
          {
            id: 'vanliga-misstag-egenkontroll-bygg',
            heading: 'Vanliga misstag att undvika',
            body: (
              <ul>
                <li>
                  <strong>Ingen koppling till ritning eller BBR.</strong> Ange referens där kontrollen
                  görs mot ett krav.
                </li>
                <li>
                  <strong>Fukt byggs in.</strong> Dokumentera fuktkontrollen innan konstruktionen sluts.
                </li>
                <li>
                  <strong>Anmärkning utan uppföljning.</strong> En avvikelse som noteras men inte
                  åtgärdas är värdelös som bevis.
                </li>
                <li>
                  <strong>Egenkontrollen görs i efterhand.</strong> Fyll i löpande medan momentet pågår,
                  inte veckor senare.
                </li>
              </ul>
            ),
          },
          {
            id: 'egenkontroll-bygg-i-byggexp',
            heading: 'Så gör du egenkontroller för bygg i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. I ByggExp finns färdiga egenkontroll-mallar för el,
                VVS, bygg/stomme och skyddsrond – du fyller i på plats, markerar resultat och samlar alla
                kontroller per projekt. Du kan skapa egna mallar för återkommande kontroller, se vilka
                moment som är godkända och vilka som har anmärkning, och ha hela dokumentationen redo när
                beställaren eller besiktningsmannen frågar. Eftersom egenkontrollerna ligger tillsammans
                med byggdagbok, foton och tid får du en samlad bild av kvaliteten i projektet.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om egenkontroll för bygg"
        faq={FAQ}
        cta={{
          heading: 'Gör egenkontroller för bygg i ByggExp',
          text: 'Färdiga mallar för el, VVS, bygg och skyddsrond – ifyllda på plats och samlade per projekt. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll – mall för alla yrken' },
          { href: `/${LOCALE}/verktyg/egenkontroll-el-mall`, label: 'Egenkontroll el – gratis mall' },
          { href: `/${LOCALE}/verktyg/arbetsberedning-mall`, label: 'Arbetsberedning – gratis mall' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
