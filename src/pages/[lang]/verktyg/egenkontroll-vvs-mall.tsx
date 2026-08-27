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

// sv-only lead magnet — see content-value-strategy. Dedicated VVS-page completing
// the egenkontroll trade set (el + bygg + vvs): the tool opens pre-filled with
// the VVS preset and every section talks VVS.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska en egenkontroll för VVS innehålla?',
    answer:
      'Projekt, ansvarig och datum samt kontrollpunkter med resultat (godkänd, anmärkning eller ej aktuellt). Typiska punkter för VVS är täthetsprovning av rör, monterade och märkta avstängningsventiler, komplett rörisolering, kontrollerat fall på avloppsledningar och kontrollerat vattentryck.',
  },
  {
    question: 'Är egenkontroll för VVS samma sak som säker vatten?',
    answer:
      'Nej, men de hänger ihop. Branschregler Säker Vatten ställer krav på hur installationen utförs för att undvika vatten- och fuktskador. Egenkontrollen är din dokumenterade kontroll av att momenten är rätt utförda – ofta mot just Säker Vatten och tillverkarnas anvisningar.',
  },
  {
    question: 'Måste täthetsprovningen dokumenteras?',
    answer:
      'Ja – täthetsprovning (tryckprovning) av rörsystemet är en central kontroll och bör alltid noteras i egenkontrollen, gärna med tryck och tid. Det är ofta det underlag som efterfrågas om en läcka eller fuktskada utreds i efterhand.',
  },
  {
    question: 'Vem ansvarar för egenkontrollen av VVS-installationen?',
    answer:
      'Den VVS-montör som utför arbetet ansvarar för sin egenkontroll och en ansvarig person signerar. Dokumentationen sparas som bevis på att installationen kontrollerats och är tät.',
  },
  {
    question: 'Hur länge ska en egenkontroll för VVS sparas?',
    answer:
      'Spara den under ansvarstiden. Enligt AB 04 är garantitiden normalt fem år och ansvarstiden tio år – och vid en vatten- eller fuktskada är egenkontrollen den dokumentation som visar att installationen var tät och fackmässigt utförd.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function EgenkontrollVvsMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/egenkontroll-vvs-mall`;

  const title = 'Egenkontroll VVS – gratis mall (PDF) | ByggExp';
  const description =
    'Gratis egenkontroll-mall för VVS. Fyll i täthetsprovning, avstängningsventiler, rörisolering, fall på avlopp och vattentryck online och ladda ner som PDF – utan konto.';

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
        title="Egenkontroll VVS – gratis mall att fylla i online"
        intro="Färdig egenkontroll för VVS-installation – täthetsprovning, avstängningsventiler, rörisolering, fall på avlopp och vattentryck ligger redan ifyllda. Sätt resultat, kommentera eventuella anmärkningar och ladda ner som PDF. Gratis och utan konto."
        tool={<EgenkontrollTool defaultPreset="vvs" />}
        leadForm={<ToolLeadForm tool="egenkontroll-vvs-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/egenkontroll-preview.webp"
            alt="Förhandsvisning av ifylld egenkontroll för VVS-installation som PDF"
            caption="Så ser en ifylld egenkontroll för VVS ut som PDF"
            width={1000}
            height={548}
          />
        }
        sections={[
          {
            id: 'vad-ar-egenkontroll-vvs',
            heading: 'Vad är en egenkontroll för VVS?',
            body: (
              <>
                <p>
                  En egenkontroll för VVS är montörens egen dokumenterade kontroll av att
                  installationen är rätt och tät. Den visar vad som kontrollerats, av vem och med vilket
                  resultat – och blir beviset på att rör, ventiler och avlopp är fackmässigt utförda
                  innan systemet tas i drift.
                </p>
                <p>
                  Poängen är enkel: den som gör jobbet intygar själv, punkt för punkt, att momentet är
                  klart. Rören är tryckprovade, ventilerna monterade och märkta, avloppet har rätt fall.
                  Blir något inte godkänt noteras en anmärkning som ska åtgärdas och följas upp innan
                  konstruktionen sluts.
                </p>
              </>
            ),
          },
          {
            id: 'kontrollpunkter-egenkontroll-vvs',
            heading: 'Kontrollpunkter i en egenkontroll för VVS',
            body: (
              <>
                <p>Mallen ovan öppnar redan ifylld med de vanligaste punkterna för en VVS-installation:</p>
                <ul>
                  <li>
                    <strong>Täthetsprovning av rör utförd</strong> – tryckprovning som visar att systemet
                    är tätt.
                  </li>
                  <li>
                    <strong>Avstängningsventiler monterade och märkta</strong> – rätt placerade och lätta
                    att identifiera.
                  </li>
                  <li>
                    <strong>Isolering av rör komplett</strong> – mot värmeförluster och kondens.
                  </li>
                  <li>
                    <strong>Fall på avloppsledningar kontrollerat</strong> – rätt lutning så att avloppet
                    rinner.
                  </li>
                  <li>
                    <strong>Vattentryck kontrollerat</strong> – att trycket ligger inom rätt intervall.
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
            id: 'sa-fyller-du-i-egenkontroll-vvs',
            heading: 'Så fyller du i egenkontrollen för VVS steg för steg',
            body: (
              <ol>
                <li>Kontrollpunkterna för VVS ligger redan i tabellen ovan – lägg till egna vid behov.</li>
                <li>Fyll i projekt, ansvarig montör och datum.</li>
                <li>Gå igenom varje punkt och sätt resultat: godkänd, anmärkning eller ej aktuellt.</li>
                <li>Skriv en kommentar vid anmärkningar – t.ex. «avstängningsventil i wc omärkt, åtgärdas».</li>
                <li>Ladda ner egenkontrollen som PDF och signera.</li>
                <li>Åtgärda anmärkningar och följ upp att de är avklarade innan systemet byggs in.</li>
              </ol>
            ),
          },
          {
            id: 'exempel-egenkontroll-vvs',
            heading: 'Exempel: egenkontroll efter en VVS-installation i badrum',
            body: (
              <>
                <p>Säg att du precis dragit klart rör i ett badrum. Den ifyllda egenkontrollen kan då se ut så här:</p>
                <ul>
                  <li>Täthetsprovning av rör utförd – <em>Godkänd</em></li>
                  <li>Avstängningsventiler monterade och märkta – <em>Godkänd</em></li>
                  <li>Isolering av rör komplett – <em>Godkänd</em></li>
                  <li>Fall på avloppsledningar kontrollerat – <em>Anmärkning: för lågt fall vid golvbrunn, justeras</em></li>
                  <li>Vattentryck kontrollerat – <em>Godkänd</em></li>
                </ul>
                <p>
                  Anmärkningen på avloppsfallet åtgärdas och följs upp, och den färdiga PDF:en signeras
                  och sparas i projektet som bevis på att installationen kontrollerats och är tät.
                </p>
              </>
            ),
          },
          {
            id: 'egenkontroll-vvs-och-saker-vatten',
            heading: 'Egenkontroll VVS och Säker Vatten',
            body: (
              <p>
                Kontrollerna görs ofta mot branschreglerna <strong>Säker Vatten</strong> och mot
                tillverkarnas monteringsanvisningar. Täthetsprovning och kontroll av att installationen
                är utförd så att risken för vatten- och fuktskador minimeras är kärnan. Egenkontrollen
                ersätter inte ett Säker Vatten-intyg, men den är det praktiska underlaget som visar att
                kontrollerna faktiskt gjorts och att systemet är tätt innan det byggs in.
              </p>
            ),
          },
          {
            id: 'vanliga-misstag-egenkontroll-vvs',
            heading: 'Vanliga misstag att undvika',
            body: (
              <ul>
                <li>
                  <strong>Ingen täthetsprovning dokumenterad.</strong> Notera tryckprovningen – gärna med
                  tryck och tid.
                </li>
                <li>
                  <strong>Omärkta ventiler.</strong> Avstängningsventiler som inte är märkta gör framtida
                  service onödigt svår.
                </li>
                <li>
                  <strong>Anmärkning utan uppföljning.</strong> Ett för lågt avloppsfall som noteras men
                  inte åtgärdas är värdelöst som bevis.
                </li>
                <li>
                  <strong>Egenkontrollen görs i efterhand.</strong> Fyll i löpande medan momentet pågår,
                  innan väggar och golv sluts.
                </li>
              </ul>
            ),
          },
          {
            id: 'egenkontroll-vvs-i-byggexp',
            heading: 'Så gör du egenkontroller för VVS i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. I ByggExp finns färdiga egenkontroll-mallar för el,
                VVS, bygg/stomme och skyddsrond – du fyller i på plats, markerar resultat och samlar alla
                kontroller per projekt. Du kan skapa egna VVS-mallar för återkommande kontroller, se
                vilka installationer som är godkända och vilka som har anmärkning, och ha hela
                dokumentationen redo när beställaren eller besiktningsmannen frågar. Eftersom
                egenkontrollerna ligger tillsammans med byggdagbok, foton och tid får du en samlad bild
                av kvaliteten i projektet.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om egenkontroll för VVS"
        faq={FAQ}
        cta={{
          heading: 'Gör egenkontroller för VVS i ByggExp',
          text: 'Färdiga mallar för el, VVS, bygg och skyddsrond – ifyllda på plats och samlade per projekt. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll – mall för alla yrken' },
          { href: `/${LOCALE}/verktyg/egenkontroll-el-mall`, label: 'Egenkontroll el – gratis mall' },
          { href: `/${LOCALE}/verktyg/egenkontroll-bygg-mall`, label: 'Egenkontroll bygg – gratis mall' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
