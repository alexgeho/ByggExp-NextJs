import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import ByggdagbokTool from '../../../components/LeadMagnet/ByggdagbokTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// This lead magnet targets the Swedish market only (see content-value-strategy):
// no en/ru versions, so the page is served on /sv/... and 404s elsewhere, and
// emits a self-canonical with no hreflang alternates.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Är en byggdagbok ett krav?',
    answer:
      'I entreprenader enligt AB 04 ska entreprenören föra dagbok över förhållanden av betydelse för entreprenaden och löpande delge beställaren innehållet. Vad dagboken bör innehålla styrs ofta av AMA AF (AF AMA 07).',
  },
  {
    question: 'Vad ska en byggdagbok innehålla?',
    answer:
      'Vanligtvis datum, väder och temperatur, vilka som var på plats och ansvarig, utfört arbete, avvikelser och hinder, ÄTA och ändringar, leveranser och material samt kontroller. Vår mall täcker alla dessa fält.',
  },
  {
    question: 'Kan jag föra byggdagbok digitalt?',
    answer:
      'Ja. Du kan fylla i mallen ovan och spara som PDF, eller föra byggdagbok löpande i ByggExp där varje inlägg kopplas till rätt projekt med foton.',
  },
  {
    question: 'Är byggdagbok samma sak som personalliggare?',
    answer:
      'Nej. Personalliggaren är en lagstadgad närvaroregistrering kopplad till ID06 och Skatteverket och visar vilka som är på plats. Byggdagboken dokumenterar vad som gjorts – arbete, väder, avvikelser och ÄTA. Du behöver oftast båda.',
  },
  {
    question: 'Hur länge bör jag spara byggdagboken?',
    answer:
      'Spara den under hela ansvarstiden. Enligt AB 04 är garantitiden normalt fem år och ansvarstiden tio år från godkänd entreprenad, så dagboken bör sparas i minst tio år som bevisunderlag.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function ByggdagbokMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/byggdagbok-mall`;

  const title = 'Byggdagbok mall – gratis PDF & Excel | ByggExp';
  const description =
    'Ladda ner en gratis byggdagbok-mall som PDF eller Excel, eller fyll i direkt online. Guide till vad en byggdagbok ska innehålla enligt AB 04 och AMA AF.';

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
        title="Byggdagbok – gratis mall att fylla i online"
        intro="Med den här gratis byggdagbok-mallen dokumenterar du dagens arbete på några minuter: väder, bemanning, utfört arbete, avvikelser och ÄTA. Fyll i formuläret och ladda ner den som PDF eller Excel – eller för byggdagbok digitalt i ByggExp."
        tool={<ByggdagbokTool />}
        leadForm={<ToolLeadForm tool="byggdagbok-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/byggdagbok-preview.webp"
            alt="Förhandsvisning av ifylld byggdagbok-mall som PDF"
            caption="Så ser en ifylld byggdagbok ut som PDF"
            width={1000}
            height={596}
          />
        }
        sections={[
          {
            id: 'vad-ar-byggdagbok',
            heading: 'Vad är en byggdagbok?',
            body: (
              <p>
                En byggdagbok är en löpande dokumentation av vad som händer på bygget dag för dag –
                utfört arbete, vilka som var på plats, väder, avvikelser och ändringar. Den fungerar
                som ett gemensamt minne för projektet och som underlag vid besiktning, fakturering
                eller en eventuell tvist.
              </p>
            ),
          },
          {
            id: 'vad-ska-byggdagbok-innehalla',
            heading: 'Vad ska en byggdagbok innehålla?',
            body: (
              <>
                <p>
                  Det finns ingen fast lista, men en komplett byggdagbok innehåller normalt följande –
                  och det är precis fälten i mallen ovan:
                </p>
                <ul>
                  <li>Datum och projekt / arbetsplats</li>
                  <li>Väder och temperatur</li>
                  <li>Antal på plats och vilka som arbetade</li>
                  <li>Utfört arbete under dagen</li>
                  <li>Avvikelser och hinder</li>
                  <li>ÄTA-arbeten och ändringar</li>
                  <li>Leveranser och material</li>
                  <li>Kontroller och övriga anteckningar</li>
                </ul>
              </>
            ),
          },
          {
            id: 'vem-for-byggdagbok',
            heading: 'Vem för byggdagbok?',
            body: (
              <p>
                I praktiken är det ofta arbetsledaren eller platschefen som ansvarar för byggdagboken,
                men vem som helst i laget kan bidra med anteckningar och foton under dagen. Det viktiga
                är att den förs kontinuerligt och av någon som var på plats – då blir innehållet
                trovärdigt om det senare behöver användas som underlag. I entreprenader enligt AB 04 är
                det entreprenören som ska föra dagbok och löpande delge beställaren innehållet.
              </p>
            ),
          },
          {
            id: 'byggdagbok-vs-personalliggare',
            heading: 'Byggdagbok, dagrapport och personalliggare – vad är skillnaden?',
            body: (
              <>
                <p>
                  Begreppen blandas ofta ihop, men de fyller olika syften:
                </p>
                <ul>
                  <li>
                    <strong>Byggdagbok</strong> – dokumenterar vad som hände på bygget: arbete, väder,
                    avvikelser, ÄTA och händelser dag för dag.
                  </li>
                  <li>
                    <strong>Dagrapport</strong> – en enklare daglig rapport, ofta fokuserad på utfört
                    arbete och timmar.
                  </li>
                  <li>
                    <strong>Personalliggare</strong> – en lagstadgad närvaroregistrering (kopplad till
                    ID06 och Skatteverket) som visar vilka som är på arbetsplatsen, inte vad som gjorts.
                  </li>
                </ul>
                <p>
                  Du behöver alltså oftast både en personalliggare för närvaron och en byggdagbok för
                  själva arbetet – de ersätter inte varandra.
                </p>
              </>
            ),
          },
          {
            id: 'sa-fyller-du-i-byggdagbok',
            heading: 'Så fyller du i byggdagboken steg för steg',
            body: (
              <ol>
                <li>Ange projekt och dagens datum.</li>
                <li>Fyll i väder och temperatur – viktigt om tidplanen ifrågasätts.</li>
                <li>Notera antal på plats och vilka som arbetade.</li>
                <li>Beskriv utfört arbete och eventuella avvikelser eller hinder.</li>
                <li>Registrera ÄTA, ändringar samt leveranser och material.</li>
                <li>Ladda ner dagen som PDF – eller fyll i nästa dag och bygg en historik.</li>
              </ol>
            ),
          },
          {
            id: 'vanliga-misstag-byggdagbok',
            heading: 'Vanliga misstag att undvika',
            body: (
              <ul>
                <li>
                  <strong>Fylla i i efterhand.</strong> Skriv samma dag – detaljer om väder, bemanning
                  och händelser glöms snabbt.
                </li>
                <li>
                  <strong>Hoppa över avvikelser.</strong> Det är ofta just avvikelser och hinder du
                  behöver kunna bevisa senare.
                </li>
                <li>
                  <strong>Glömma ÄTA.</strong> Notera tilläggsarbeten direkt så att de kan faktureras.
                </li>
                <li>
                  <strong>Foton utan koppling.</strong> Bilder som inte hör till rätt dag och projekt
                  tappar sitt bevisvärde.
                </li>
              </ul>
            ),
          },
          {
            id: 'byggdagbok-lag-ab04-ama-af',
            heading: 'Vad säger lagen – AB 04 och AMA AF',
            body: (
              <p>
                I entreprenader enligt standardavtalet <strong>AB 04</strong> ska entreprenören föra
                dagbok över omständigheter av betydelse för entreprenaden och fortlöpande delge
                beställaren innehållet. Hur dagboken utformas styrs ofta av{' '}
                <strong>AMA AF (AF AMA 07)</strong>, som anger vilka uppgifter som förväntas. En väl
                förd byggdagbok blir därför både ett avtalskrav och ett viktigt bevisunderlag om
                tidplan, ÄTA eller ansvar ifrågasätts i efterhand.
              </p>
            ),
          },
          {
            id: 'byggdagbok-bevis-ata-tvist',
            heading: 'Byggdagboken som bevis vid ÄTA och tvist',
            body: (
              <>
                <p>
                  Det är oftast i efterhand som byggdagboken visar sitt värde. Blir det diskussion om en
                  försening kan noteringar om väder och uteblivna leveranser förklara varför. Ifrågasätts
                  ett tilläggsarbete visar dagbokens ÄTA-notering när och varför det utfördes. Och vid en
                  tvist om ett fel kan dokumentationen visa exakt vad som gjordes, av vem och under vilka
                  förutsättningar.
                </p>
                <p>
                  Just därför är det värt att vara noggrann med avvikelser, hinder, ÄTA och foton medan
                  arbetet pågår. En tom eller slarvigt förd dagbok hjälper ingen – en komplett dagbok kan
                  vara skillnaden mellan att få betalt eller inte.
                </p>
              </>
            ),
          },
          {
            id: 'hur-lange-spara-byggdagbok',
            heading: 'Hur länge ska du spara byggdagboken?',
            body: (
              <p>
                Spara byggdagboken så länge du kan bli ansvarig för arbetet. Enligt AB 04 är
                garantitiden normalt fem år för entreprenörens arbete, och ansvarstiden är tio år från
                det att entreprenaden godkänts. Eftersom en tvist kan dyka upp flera år efter avslutat
                jobb bör dagboken sparas under hela den perioden – det är då den blir värd mest som
                bevis. En digital byggdagbok är enkel att arkivera och söka i även långt efteråt.
              </p>
            ),
          },
          {
            id: 'digital-byggdagbok-eller-papper',
            heading: 'Digital byggdagbok eller papper?',
            body: (
              <p>
                En pappersdagbok fungerar, men tappas lätt bort, blir svår att läsa och saknar foton. En
                digital byggdagbok fylls i på plats i mobilen, kopplar bilder till rätt dag och projekt
                och sparas automatiskt. Du kan söka tillbaka, dela med beställaren och slipper tolka
                blöta anteckningar från fickan. För de flesta byggföretag väger fördelarna med digitalt
                tungt – särskilt när dokumentationen ska hålla i flera år.
              </p>
            ),
          },
          {
            id: 'tips-byggdagbok',
            heading: 'Tips för en byggdagbok som håller',
            body: (
              <ul>
                <li>Skriv samma dag – korta, konkreta noteringar slår långa i efterhand.</li>
                <li>Ta foton på både framsteg och problem och koppla dem till rätt dag.</li>
                <li>Var extra noggrann med väder, avvikelser och ÄTA – det är dessa som ifrågasätts.</li>
                <li>Håll en jämn nivå varje dag, även när det «inte hände något särskilt».</li>
                <li>Spara dagboken samlat per projekt så att den är lätt att hitta år senare.</li>
              </ul>
            ),
          },
          {
            id: 'byggdagbok-i-byggexp',
            heading: 'Så för du byggdagbok i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. Vill du slippa lösa PDF:er kan du föra byggdagbok
                löpande i ByggExp: varje inlägg kopplas till rätt projekt, du bifogar foton direkt
                från mobilen och bygger en komplett historik dag för dag – utan papper. Eftersom
                dagboken ligger i samma app som tid, uppgifter och ekonomi hänger allt ihop: en
                avvikelse eller ett ÄTA du noterar kan följas hela vägen till fakturan. Och när ett
                projekt är klart finns hela historiken kvar, redo att tas fram om en fråga dyker upp
                flera år senare.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om byggdagbok"
        faq={FAQ}
        cta={{
          heading: 'För byggdagbok automatiskt i ByggExp',
          text: 'Dokumentera bygget, tiden och ekonomin i en app – från offert till lön. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport – gratis mall' },
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll – gratis mall' },
          { href: `/${LOCALE}/blog/dokumentera-med-foton-pa-bygget`, label: 'Dokumentera med foton på bygget' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
