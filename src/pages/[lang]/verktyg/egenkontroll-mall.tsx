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

// sv-only lead magnet — see content-value-strategy. Served on /sv, 404 elsewhere.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är skillnaden på byggherrens och entreprenörens egenkontroll?',
    answer:
      'I plan- och bygglagen (PBL) avses byggherrens egenkontroll, som dokumenteras i en kontrollplan. Inom entreprenadjuridiken menar man entreprenörens egenkontroll av kvalitet, miljö och arbetsmiljö. Den här mallen gäller entreprenörens egenkontroll.',
  },
  {
    question: 'Vad ska en egenkontroll innehålla?',
    answer:
      'Titel, projekt, ansvarig och datum samt kontrollpunkter med resultat (godkänd, anmärkning eller ej aktuellt) och eventuell kommentar. Kontrollerna görs ofta mot BBR och projektets krav.',
  },
  {
    question: 'Måste egenkontroll vara digital?',
    answer:
      'Nej, men det underlättar. Du kan fylla i mallen ovan och spara som PDF, eller göra egenkontroller löpande i ByggExp med färdiga mallar för el, VVS, bygg och skyddsrond.',
  },
  {
    question: 'Vem ansvarar för att egenkontrollen görs?',
    answer:
      'Den som utför arbetet ansvarar för sin egenkontroll, och en ansvarig person signerar. I byggherrens kontrollplan enligt PBL pekas kontrollansvarig (KA) ut för de kontroller som krävs där.',
  },
  {
    question: 'Vad menas med "Anmärkning" i en egenkontroll?',
    answer:
      'Anmärkning betyder att kontrollpunkten inte är godkänd och behöver åtgärdas. Notera avvikelsen i kommentaren, åtgärda och följ upp – dokumentationen visar att felet hanterats.',
  },
  {
    question: 'Hur länge ska egenkontroller sparas?',
    answer:
      'Spara dem under ansvarstiden för arbetet. Enligt AB 04 är garantitiden normalt fem år och ansvarstiden tio år från godkänd entreprenad, så egenkontrollerna bör sparas i minst tio år som bevis.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function EgenkontrollMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/egenkontroll-mall`;

  const title = 'Egenkontroll mall – gratis PDF & Excel | ByggExp';
  const description =
    'Ladda ner en gratis egenkontroll-mall för kvalitet, miljö och arbetsmiljö som PDF eller Excel – eller fyll i online. Guide till egenkontroll enligt PBL och BBR.';

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
        title="Egenkontroll – gratis mall att fylla i online"
        intro="Fyll i en egenkontroll för kvalitet, miljö och arbetsmiljö och ladda ner den som PDF eller Excel – gratis och utan konto. Nytt: låt AI föreslå rätt kontrollpunkter för just ditt moment, så slipper du börja från ett tomt blad."
        tool={<EgenkontrollTool />}
        leadForm={<ToolLeadForm tool="egenkontroll-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/egenkontroll-preview.webp"
            alt="Förhandsvisning av ifylld egenkontroll-mall (el) som PDF"
            caption="Så ser en ifylld egenkontroll ut som PDF"
            width={1000}
            height={548}
          />
        }
        sections={[
          {
            id: 'vad-ar-egenkontroll',
            heading: 'Vad är en egenkontroll?',
            body: (
              <>
                <p>
                  En egenkontroll är entreprenörens egen dokumenterade kontroll av att arbetet uppfyller
                  kraven – inom kvalitet, miljö och arbetsmiljö. Den visar vad som kontrollerats, av vem
                  och med vilket resultat, och blir ett bevis på utfört och godkänt arbete.
                </p>
                <p>
                  Poängen är enkel: den som utför arbetet intygar själv, punkt för punkt, att momentet
                  är rätt utfört. En elektriker bekräftar att jordfelsbrytaren fungerar, en snickare att
                  måtten stämmer mot ritning. Blir något inte godkänt noteras en anmärkning som ska
                  åtgärdas. På så sätt fångas fel tidigt – innan de byggs in och blir dyra att rätta.
                </p>
              </>
            ),
          },
          {
            id: 'vad-ska-egenkontroll-innehalla',
            heading: 'Vad ska en egenkontroll innehålla?',
            body: (
              <ul>
                <li>Titel och kategori (kvalitet, miljö eller arbetsmiljö)</li>
                <li>Projekt, ansvarig och datum</li>
                <li>Kontrollpunkter – vad som ska kontrolleras</li>
                <li>Resultat: godkänd, anmärkning eller ej aktuellt</li>
                <li>Kommentar och underskrift av ansvarig</li>
              </ul>
            ),
          },
          {
            id: 'sa-fyller-du-i-egenkontroll',
            heading: 'Så fyller du i egenkontrollen steg för steg',
            body: (
              <ol>
                <li>
                  Välj en färdig mall ovan (el, VVS, bygg/stomme eller skyddsrond) så fylls
                  kontrollpunkterna i automatiskt – eller skriv egna punkter.
                </li>
                <li>Fyll i titel, projekt, ansvarig och datum.</li>
                <li>Gå igenom varje kontrollpunkt och sätt resultat: godkänd, anmärkning eller ej aktuellt.</li>
                <li>Skriv en kommentar där det behövs – särskilt vid anmärkningar och avvikelser.</li>
                <li>Ladda ner egenkontrollen som PDF och signera.</li>
                <li>Åtgärda eventuella anmärkningar och följ upp att de är avklarade.</li>
              </ol>
            ),
          },
          {
            id: 'vanliga-misstag-egenkontroll',
            heading: 'Vanliga misstag att undvika',
            body: (
              <ul>
                <li>
                  <strong>För generella punkter.</strong> Anpassa kontrollpunkterna efter projektets
                  risker – fokusera på de kritiska momenten, inte en lång lista onödiga kontroller.
                </li>
                <li>
                  <strong>Ingen koppling till norm.</strong> Ange referens (t.ex. BBR eller en
                  SS-standard) där kontrollen görs mot ett krav.
                </li>
                <li>
                  <strong>Anmärkningar utan uppföljning.</strong> En anmärkning som inte åtgärdas och
                  följs upp är värdelös som bevis.
                </li>
                <li>
                  <strong>Egenkontrollen görs i efterhand.</strong> Fyll i löpande medan arbetet pågår,
                  inte veckor senare.
                </li>
              </ul>
            ),
          },
          {
            id: 'exempel-egenkontroll-el',
            heading: 'Exempel: egenkontroll för en elinstallation',
            body: (
              <>
                <p>
                  Säg att du precis dragit klart el i en lägenhet. En egenkontroll för elinstallation
                  kan då innehålla punkter som:
                </p>
                <ul>
                  <li>Jordfelsbrytare testad och fungerar – <em>Godkänd</em></li>
                  <li>Märkning av gruppcentral komplett – <em>Godkänd</em></li>
                  <li>Isolationsmätning utförd (SS 436 40 00) – <em>Godkänd</em></li>
                  <li>Skyddsledare anslutna – <em>Anmärkning: saknas i dosa i hall, åtgärdas</em></li>
                  <li>Dosor och uttag täta och fastsatta – <em>Godkänd</em></li>
                </ul>
                <p>
                  Väljer du mallen «Egenkontroll El» ovan fylls just de här punkterna i automatiskt –
                  du behöver bara sätta resultat och kommentar. Anmärkningen på skyddsledaren åtgärdas
                  och följs upp, och den färdiga PDF:en signeras och sparas i projektet som bevis.
                </p>
              </>
            ),
          },
          {
            id: 'egenkontroll-olika-yrken',
            heading: 'Egenkontroll för olika yrken',
            body: (
              <>
                <p>
                  Kontrollpunkterna skiljer sig mellan yrken. Med mallarna ovan får du en färdig
                  utgångspunkt för de vanligaste:
                </p>
                <ul>
                  <li>
                    <strong>
                      <a href={`/${LOCALE}/verktyg/egenkontroll-el-mall`}>Egenkontroll el</a>
                    </strong>{' '}
                    – jordfelsbrytare, isolationsmätning, märkning av gruppcentral och skyddsledare,
                    ofta mot SS 436 40 00.
                  </li>
                  <li>
                    <strong>Egenkontroll VVS</strong> – täthetsprovning, avstängningsventiler, isolering
                    av rör och kontroll av fall på avlopp.
                  </li>
                  <li>
                    <strong>
                      <a href={`/${LOCALE}/verktyg/egenkontroll-bygg-mall`}>Egenkontroll bygg / stomme</a>
                    </strong>{' '}
                    – måttkontroll mot ritning, infästningar, fuktkontroll och brandtätning enligt BBR.
                  </li>
                  <li>
                    <strong>Skyddsrond (arbetsmiljö)</strong> – fallskydd, ordning och reda, skyddsutrustning
                    och besiktigade ställningar.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 'egenkontroll-pbl-bbr',
            heading: 'Egenkontroll och lagen – PBL och BBR',
            body: (
              <p>
                Begreppet egenkontroll finns i <strong>plan- och bygglagen (PBL)</strong>, men avser då
                byggherrens egenkontroll som dokumenteras i en <strong>kontrollplan</strong> – den
                beskriver vad som ska kontrolleras, av vem och mot vad, ofta med{' '}
                <strong>BBR (Boverkets byggregler)</strong> som referens. Entreprenörens egenkontroll,
                som den här mallen gäller, är det praktiska sättet att visa att arbetet uppfyller de
                kraven moment för moment.
              </p>
            ),
          },
          {
            id: 'egenkontroll-kontrollplan-ka',
            heading: 'Egenkontroll, kontrollplan och kontrollansvarig',
            body: (
              <p>
                Tre begrepp hänger ihop men är inte samma sak. <strong>Kontrollplanen</strong> enligt PBL
                beskriver vad som ska kontrolleras i ett byggprojekt, av vem och mot vad. Den{' '}
                <strong>kontrollansvarige (KA)</strong> är en certifierad person som hjälper byggherren
                att se till att kontrollplanen följs. <strong>Egenkontrollen</strong> är det praktiska
                verktyget – den enskilda hantverkarens eller entreprenörens dokumenterade kontroll av
                att ett moment är rätt utfört. Egenkontrollerna blir ofta det underlag som visar att
                punkterna i kontrollplanen faktiskt uppfyllts.
              </p>
            ),
          },
          {
            id: 'hur-lange-spara-egenkontroll',
            heading: 'Hur länge ska egenkontroller sparas?',
            body: (
              <p>
                Spara egenkontrollerna under hela ansvarstiden för arbetet. Enligt AB 04 är garantitiden
                normalt fem år och ansvarstiden tio år från godkänd entreprenad – och en egenkontroll är
                just den typ av dokumentation som kan avgöra en tvist om ett fel upptäcks flera år
                senare. En signerad PDF eller en digital egenkontroll är enkel att arkivera och hitta
                tillbaka till.
              </p>
            ),
          },
          {
            id: 'digital-egenkontroll-fordelar',
            heading: 'Digital egenkontroll – fördelar',
            body: (
              <p>
                Med papperslistor är det lätt att kontroller görs olika, tappas bort eller fylls i i
                efterhand. Digitala egenkontroller med färdiga mallar gör att alla följer samma
                punkter, att anmärkningar går att följa upp och att allt samlas per projekt. Du fyller i
                på plats, markerar resultat och har dokumentationen redo när beställare eller besiktning
                frågar.
              </p>
            ),
          },
          {
            id: 'tips-egenkontroll',
            heading: 'Tips för en effektiv egenkontroll',
            body: (
              <ul>
                <li>Utgå från en färdig mall och anpassa punkterna efter projektets risker.</li>
                <li>Ange referens (BBR eller relevant standard) där kontrollen görs mot ett krav.</li>
                <li>Fyll i på plats direkt när momentet är klart – inte i efterhand.</li>
                <li>Åtgärda anmärkningar och dokumentera uppföljningen, inte bara felet.</li>
                <li>Signera och spara egenkontrollen samlat per projekt.</li>
              </ul>
            ),
          },
          {
            id: 'egenkontroll-i-byggexp',
            heading: 'Så gör du egenkontroller i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. I ByggExp finns färdiga egenkontroll-mallar för el,
                VVS, bygg/stomme och skyddsrond – du fyller i på plats, markerar resultat och samlar
                alla kontroller per projekt. Du kan skapa egna mallar för återkommande kontroller, se
                vilka som är godkända och vilka som har anmärkning, och ha hela dokumentationen redo
                när beställaren eller besiktningsmannen frågar. Eftersom egenkontrollerna ligger
                tillsammans med byggdagbok, foton och tid får du en samlad bild av kvaliteten i
                projektet – inte spridda listor i olika pärmar.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om egenkontroll"
        faq={FAQ}
        cta={{
          heading: 'Gör egenkontroller i ByggExp',
          text: 'Färdiga mallar för el, VVS, bygg och skyddsrond – ifyllda på plats och samlade per projekt. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/blog/nya-vatrumsregler-2026`, label: 'Nya våtrumsregler 2026 (BBV/GVK)' },
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport – gratis mall' },
          { href: `/${LOCALE}/blog/dokumentera-med-foton-pa-bygget`, label: 'Dokumentera med foton på bygget' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
