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

// sv-only lead magnet — see content-value-strategy. Dedicated el-page so the
// query "egenkontroll el mall gratis" (top impression driver) lands on a page
// that is 110% about elinstallation: the tool opens pre-filled with the el
// preset and every section talks el, not generic egenkontroll.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska en egenkontroll för el innehålla?',
    answer:
      'Projekt, ansvarig elektriker och datum samt kontrollpunkter med resultat (godkänd, anmärkning eller ej aktuellt). Typiska punkter är testad jordfelsbrytare, komplett märkning av gruppcentral, isolationsmätning enligt SS 436 40 00, anslutna skyddsledare samt täta och fastsatta dosor och uttag.',
  },
  {
    question: 'Är egenkontroll samma sak som en installationsintyg?',
    answer:
      'Nej. Egenkontrollen är elektrikerns dokumenterade kontroll av att installationen är rätt utförd. Installationsintyget (och för behörighetsarbeten anmälan till Elsäkerhetsverket) är separata dokument, men egenkontrollen är det praktiska underlag som visar att kontrollerna faktiskt gjorts.',
  },
  {
    question: 'Måste en egenkontroll för el göras enligt en standard?',
    answer:
      'Kontrollen görs mot gällande normer, framför allt elinstallationsreglerna SS 436 40 00. Isolationsmätning och funktionsprov av jordfelsbrytare är exempel på kontroller som kopplas direkt till standarden – ange gärna referensen i egenkontrollen.',
  },
  {
    question: 'Vem ansvarar för egenkontrollen av elinstallationen?',
    answer:
      'Den elektriker som utför arbetet ansvarar för sin egenkontroll, och en ansvarig person (t.ex. elinstallatör för regelefterlevnad) signerar. Dokumentationen sparas som bevis på att installationen kontrollerats och godkänts.',
  },
  {
    question: 'Hur länge ska en egenkontroll för el sparas?',
    answer:
      'Spara egenkontrollen under ansvarstiden för arbetet. Enligt AB 04 är garantitiden normalt fem år och ansvarstiden tio år – och vid en elrelaterad tvist eller skada är just egenkontrollen den dokumentation som visar att arbetet var fackmässigt utfört.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function EgenkontrollElMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/egenkontroll-el-mall`;

  const title = 'Egenkontroll el – gratis mall (PDF) | ByggExp';
  const description =
    'Gratis egenkontroll-mall för elinstallation. Fyll i jordfelsbrytare, isolationsmätning (SS 436 40 00), märkning och skyddsledare online och ladda ner som PDF – utan konto.';

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
        title="Egenkontroll el – gratis mall att fylla i online"
        intro="Färdig egenkontroll för elinstallation – jordfelsbrytare, isolationsmätning, märkning och skyddsledare ligger redan ifyllda. Sätt resultat, kommentera eventuella anmärkningar och ladda ner som PDF. Gratis och utan konto."
        tool={<EgenkontrollTool defaultPreset="el" />}
        leadForm={<ToolLeadForm tool="egenkontroll-el-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/egenkontroll-preview.webp"
            alt="Förhandsvisning av ifylld egenkontroll för elinstallation som PDF"
            caption="Så ser en ifylld egenkontroll för el ut som PDF"
            width={1000}
            height={548}
          />
        }
        sections={[
          {
            id: 'vad-ar-egenkontroll-el',
            heading: 'Vad är en egenkontroll för el?',
            body: (
              <>
                <p>
                  En egenkontroll för el är elektrikerns egen dokumenterade kontroll av att
                  elinstallationen är rätt och säkert utförd. Den visar vad som kontrollerats, av vem och
                  med vilket resultat – och blir beviset på att installationen är fackmässig och testad
                  innan den tas i drift.
                </p>
                <p>
                  Poängen är enkel: den som drar elen intygar själv, punkt för punkt, att momentet är
                  klart. Jordfelsbrytaren är testad och löser ut, gruppcentralen är märkt,
                  isolationsmätningen är utförd. Blir något inte godkänt – till exempel en skyddsledare
                  som saknas i en dosa – noteras en anmärkning som ska åtgärdas och följas upp.
                </p>
              </>
            ),
          },
          {
            id: 'kontrollpunkter-egenkontroll-el',
            heading: 'Kontrollpunkter i en egenkontroll för el',
            body: (
              <>
                <p>Mallen ovan öppnar redan ifylld med de vanligaste punkterna för en elinstallation:</p>
                <ul>
                  <li>
                    <strong>Jordfelsbrytare testad och fungerar</strong> – funktionsprov med testknapp
                    och att den löser ut som den ska.
                  </li>
                  <li>
                    <strong>Märkning av gruppcentral komplett</strong> – alla grupper märkta och lätta
                    att identifiera.
                  </li>
                  <li>
                    <strong>Isolationsmätning utförd (SS 436 40 00)</strong> – kontroll av
                    isolationsresistans enligt elinstallationsreglerna.
                  </li>
                  <li>
                    <strong>Skyddsledare anslutna</strong> – att skyddsjord är dragen och ansluten i
                    dosor, uttag och central.
                  </li>
                  <li>
                    <strong>Dosor och uttag täta och fastsatta</strong> – mekaniskt infästa och täta
                    mot omgivningen.
                  </li>
                </ul>
                <p>
                  Du behöver bara sätta resultat (godkänd, anmärkning eller ej aktuellt) och skriva en
                  kommentar där det behövs – lägg till egna punkter för projektets specifika risker.
                </p>
              </>
            ),
          },
          {
            id: 'sa-fyller-du-i-egenkontroll-el',
            heading: 'Så fyller du i egenkontrollen för el steg för steg',
            body: (
              <ol>
                <li>Kontrollpunkterna för el ligger redan i tabellen ovan – lägg till egna vid behov.</li>
                <li>Fyll i projekt, ansvarig elektriker och datum.</li>
                <li>Gå igenom varje punkt och sätt resultat: godkänd, anmärkning eller ej aktuellt.</li>
                <li>Skriv en kommentar vid anmärkningar – t.ex. «skyddsledare saknas i dosa i hall».</li>
                <li>Ladda ner egenkontrollen som PDF och signera.</li>
                <li>Åtgärda anmärkningar och följ upp att de är avklarade.</li>
              </ol>
            ),
          },
          {
            id: 'exempel-egenkontroll-el',
            heading: 'Exempel: egenkontroll efter en elinstallation i lägenhet',
            body: (
              <>
                <p>
                  Säg att du precis dragit klart el i en lägenhet. Den ifyllda egenkontrollen kan då se
                  ut så här:
                </p>
                <ul>
                  <li>Jordfelsbrytare testad och fungerar – <em>Godkänd</em></li>
                  <li>Märkning av gruppcentral komplett – <em>Godkänd</em></li>
                  <li>Isolationsmätning utförd (SS 436 40 00) – <em>Godkänd</em></li>
                  <li>Skyddsledare anslutna – <em>Anmärkning: saknas i dosa i hall, åtgärdas</em></li>
                  <li>Dosor och uttag täta och fastsatta – <em>Godkänd</em></li>
                </ul>
                <p>
                  Anmärkningen på skyddsledaren åtgärdas och följs upp, och den färdiga PDF:en signeras
                  och sparas i projektet som bevis på att installationen kontrollerats.
                </p>
              </>
            ),
          },
          {
            id: 'egenkontroll-el-och-normer',
            heading: 'Egenkontroll el och elinstallationsreglerna',
            body: (
              <p>
                Kontrollerna görs mot gällande normer, framför allt{' '}
                <strong>elinstallationsreglerna SS 436 40 00</strong>. Isolationsmätning och funktionsprov
                av jordfelsbrytare är exempel på kontroller som kopplas direkt till standarden. Egen­kontrollen
                ersätter inte installationsintyg eller anmälan till Elsäkerhetsverket för
                behörighetsarbeten – men den är det praktiska underlaget som visar att kontrollerna
                faktiskt gjorts och att installationen är säker att ta i drift.
              </p>
            ),
          },
          {
            id: 'vanliga-misstag-egenkontroll-el',
            heading: 'Vanliga misstag att undvika',
            body: (
              <ul>
                <li>
                  <strong>Ingen mätning dokumenterad.</strong> Notera att isolationsmätningen är utförd –
                  gärna med referens till SS 436 40 00.
                </li>
                <li>
                  <strong>Anmärkning utan uppföljning.</strong> En saknad skyddsledare som noteras men
                  aldrig följs upp är värdelös som bevis.
                </li>
                <li>
                  <strong>Egenkontrollen görs i efterhand.</strong> Fyll i löpande medan arbetet pågår,
                  inte veckor senare.
                </li>
                <li>
                  <strong>Bristfällig märkning.</strong> Omärkt gruppcentral gör felsökning och framtida
                  arbete onödigt svårt.
                </li>
              </ul>
            ),
          },
          {
            id: 'egenkontroll-el-i-byggexp',
            heading: 'Så gör du egenkontroller för el i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. I ByggExp finns färdiga egenkontroll-mallar för el,
                VVS, bygg/stomme och skyddsrond – du fyller i på plats, markerar resultat och samlar alla
                kontroller per projekt. Du kan skapa egna el-mallar för återkommande kontroller, se vilka
                installationer som är godkända och vilka som har anmärkning, och ha hela dokumentationen
                redo när beställaren eller besiktningsmannen frågar. Eftersom egenkontrollerna ligger
                tillsammans med byggdagbok, foton och tid får du en samlad bild av kvaliteten i projektet.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om egenkontroll för el"
        faq={FAQ}
        cta={{
          heading: 'Gör egenkontroller för el i ByggExp',
          text: 'Färdiga mallar för el, VVS, bygg och skyddsrond – ifyllda på plats och samlade per projekt. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll – mall för alla yrken' },
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport – gratis mall' },
          { href: `/${LOCALE}/blog/dokumentera-med-foton-pa-bygget`, label: 'Dokumentera med foton på bygget' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
