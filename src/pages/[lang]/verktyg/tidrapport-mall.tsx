import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import TidrapportTool from '../../../components/LeadMagnet/TidrapportTool';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only lead magnet — see content-value-strategy. Served on /sv, 404 elsewhere.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska en tidrapport innehålla?',
    answer:
      'Normalt vem som arbetat, vilket projekt, datum och antal timmar per dag samt en summering. Mallen ovan räknar ut totalen automatiskt.',
  },
  {
    question: 'Kan jag använda tidrapporten som underlag för lön och fakturering?',
    answer:
      'Ja. En ifylld tidrapport med timmar per projekt fungerar som underlag för både löneberäkning och fakturering av nedlagd tid.',
  },
  {
    question: 'Kan jag rapportera tid automatiskt?',
    answer:
      'Ja. I ByggExp kan tiden samlas automatiskt via GPS-incheckning per projekt, så att du slipper fylla i timmar för hand och kan exportera direkt.',
  },
  {
    question: 'Är arbetsgivaren skyldig att föra anteckningar om arbetstid?',
    answer:
      'Ja. Enligt arbetstidslagen (ATL) ska arbetsgivare föra anteckningar om jourtid, övertid och mertid. De ska sparas på arbetsstället under innevarande år och de två följande kalenderåren och kan vara på papper eller digitala.',
  },
  {
    question: 'Vad är skillnaden mellan tidrapport och personalliggare?',
    answer:
      'Personalliggaren är en lagstadgad närvaroregistrering (ID06/Skatteverket) som visar vem som är på plats. Tidrapporten visar arbetade timmar per projekt och är underlag för lön och fakturering. Du behöver båda.',
  },
  {
    question: 'Hur ofta bör man tidrapportera?',
    answer:
      'Helst dagligen, eller åtminstone i slutet av varje arbetspass medan timmarna är färska. Löpande rapportering ger korrekta underlag och gör att inget glöms bort till löne- eller faktureringstillfället.',
  },
  {
    question: 'Ska jag välja dags-, vecko- eller månadsmall?',
    answer:
      'Veckomallen (en rad per dag måndag–söndag) passar de flesta hantverkare. Dagsmallen är bra när du vill fånga varje pass för sig, och månadsmallen fungerar som samlat underlag inför lön och månadsfakturering. Du byter period med ett klick i mallen ovan.',
  },
  {
    question: 'Kan jag ladda ner tidrapporten i Excel?',
    answer:
      'Ja. Utöver PDF kan du ladda ner tidrapporten som Excel (CSV) direkt från mallen ovan och bearbeta den vidare eller föra in den i lönesystemet.',
  },
  {
    question: 'Är tidredovisning och tidrapport samma sak?',
    answer:
      'I praktiken används orden synonymt. Tidredovisning betonar redovisningen av nedlagd tid per projekt, medan tidrapport ofta syftar på själva dokumentet. Mallen ovan fungerar för båda – du redovisar arbetade timmar per projekt och laddar ner som PDF eller Excel.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function TidrapportMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/tidrapport-mall`;

  const title = 'Tidrapport mall – gratis i PDF & Excel | ByggExp';
  const description =
    'Gratis tidrapport-mall för bygg – dag, vecka eller månad. Fyll i online och ladda ner som PDF eller Excel. Summera timmar per projekt automatiskt, underlag för lön och faktura.';

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
        title="Tidrapport – gratis mall att fylla i online"
        intro="Med den här gratis tidrapport-mallen fyller du i arbetstimmar per dag, vecka eller månad och laddar ner en färdig PDF eller Excel – summan räknas ut automatiskt. Perfekt som underlag för lön och fakturering i byggföretag."
        tool={<TidrapportTool />}
        leadForm={<ToolLeadForm tool="tidrapport-mall" />}
        preview={
          <>
            <PreviewImage
              src="/landing/verktyg/tidrapport-preview.webp"
              alt="Förhandsvisning av ifylld tidrapport-mall som PDF"
              caption="Så ser en ifylld tidrapport ut som PDF"
              width={1000}
              height={482}
            />
            <PreviewImage
              src="/landing/verktyg/tidrapport-vecka-preview.webp"
              alt="Veckotidrapport-mall med en rad per dag måndag till söndag"
              caption="Veckomall: en rad per dag måndag–söndag"
              width={1000}
              height={650}
            />
          </>
        }
        sections={[
          {
            id: 'vad-ar-tidrapport',
            heading: 'Vad är en tidrapport?',
            body: (
              <>
                <p>
                  En tidrapport – eller <strong>tidredovisning</strong> som det också kallas – är en
                  sammanställning av arbetad tid: vem som jobbat, på vilket projekt och hur många timmar
                  per dag. Den är underlag för både löneberäkning och för att fakturera kunden rätt antal
                  timmar.
                </p>
                <p>
                  För ett byggföretag är tidrapporten ett av de viktigaste underlagen som finns. Den
                  styr hur mycket personalen får i lön, hur mycket kunden faktureras och hur du ser om
                  ett projekt faktiskt går med vinst. Är tiden fel eller ofullständig följer felen med
                  hela vägen till lön och faktura – därför lönar det sig att rapportera löpande och
                  korrekt.
                </p>
              </>
            ),
          },
          {
            id: 'vad-ska-tidrapport-innehalla',
            heading: 'Vad ska en tidrapport innehålla?',
            body: (
              <ul>
                <li>Anställd och projekt</li>
                <li>Datum för varje arbetspass</li>
                <li>Antal timmar per dag</li>
                <li>Eventuell anteckning (t.ex. moment eller övertid)</li>
                <li>Summering av totalt antal timmar</li>
              </ul>
            ),
          },
          {
            id: 'vem-behover-tidrapportera',
            heading: 'Vem behöver tidrapportera?',
            body: (
              <p>
                Alla som utför arbete på ett projekt behöver rapportera sin tid – både anställda
                hantverkare och du som driver företaget. För arbetsledaren är tidrapporterna underlag
                för att följa hur mycket tid som lagts per projekt, och för ekonomifunktionen är de
                grunden för både lön och kundfaktura. Även om du fakturerar fast pris är tiden viktig
                för att veta om projektet är lönsamt.
              </p>
            ),
          },
          {
            id: 'daglig-vecko-manadstidrapport',
            heading: 'Daglig, vecko- eller månadstidrapport?',
            body: (
              <>
                <p>
                  Hur ofta du sammanställer tiden beror på hur ni jobbar och hur ofta ni fakturerar och
                  kör lön. Med mallen ovan väljer du period med ett klick:
                </p>
                <ul>
                  <li>
                    <strong>Daglig tidrapport</strong> – en rad för dagens arbete. Bra när du vill fånga
                    varje pass separat, t.ex. med olika moment eller projekt samma dag.
                  </li>
                  <li>
                    <strong>Veckotidrapport</strong> – en rad per dag måndag–söndag. Den vanligaste
                    formen för hantverkare, enkel att stämma av varje fredag.
                  </li>
                  <li>
                    <strong>Månadstidrapport</strong> – en rad per dag i månaden, bra som samlat underlag
                    inför lönekörning och månadsfakturering.
                  </li>
                </ul>
                <p>
                  Oavsett period räknas timmarna ihop automatiskt, och du laddar ner samma underlag som
                  PDF eller Excel.
                </p>
              </>
            ),
          },
          {
            id: 'sa-fyller-du-i-tidrapport',
            heading: 'Så fyller du i tidrapporten steg för steg',
            body: (
              <ol>
                <li>Ange anställd och vilket projekt tiden gäller.</li>
                <li>Lägg till en rad per arbetsdag med datum och antal timmar.</li>
                <li>Skriv en kort anteckning vid behov, t.ex. moment eller övertid.</li>
                <li>Se summan räknas ut automatiskt längst ner.</li>
                <li>Ladda ner tidrapporten som PDF och signera.</li>
              </ol>
            ),
          },
          {
            id: 'vanliga-misstag-tidrapport',
            heading: 'Vanliga misstag att undvika',
            body: (
              <ul>
                <li>
                  <strong>Rapportera i klump i slutet av månaden.</strong> Fyll i löpande så blir
                  timmarna rätt och inget glöms.
                </li>
                <li>
                  <strong>Ingen koppling till projekt.</strong> Timmar utan projekt går inte att
                  fakturera eller följa upp korrekt.
                </li>
                <li>
                  <strong>Missa övertid och OB.</strong> Notera avvikande tider så att lönen blir rätt.
                </li>
              </ul>
            ),
          },
          {
            id: 'tidrapport-lon-fakturering',
            heading: 'Tidrapport för lön och fakturering',
            body: (
              <>
                <p>
                  En tidrapport har två syften. Det första är <strong>lön</strong>: de rapporterade
                  timmarna, inklusive övertid och OB, blir underlag för löneberäkningen. Det andra är{' '}
                  <strong>fakturering</strong>: tid som lagts på ett projekt ska faktureras kunden, och
                  då måste timmarna vara kopplade till rätt projekt.
                </p>
                <p>
                  Därför är det viktigt att varje rad har både datum, antal timmar och vilket projekt
                  tiden gäller. Med ett korrekt ifyllt underlag blir både lönekörningen och
                  kundfakturan rätt – utan efterforskning i efterhand.
                </p>
              </>
            ),
          },
          {
            id: 'tidrapport-arbetstidslagen',
            heading: 'Tidrapport och arbetstidslagen (ATL)',
            body: (
              <p>
                Utöver lön och fakturering finns ett lagkrav i bakgrunden. Enligt arbetstidslagen (ATL)
                ska arbetsgivare föra anteckningar om jourtid, övertid och mertid. Det finns inget krav
                på exakt format – det kan vara på papper eller digitalt – men anteckningarna ska vara
                tydliga och sparas på arbetsstället under innevarande år och de två följande
                kalenderåren. En ordnad tidrapportering hjälper dig att uppfylla kravet och fungerar
                som bevis om det uppstår en tvist om arbetstid.
              </p>
            ),
          },
          {
            id: 'vad-raknas-som-arbetstid',
            heading: 'Vad räknas som arbetstid?',
            body: (
              <>
                <p>
                  Innan du fyller i timmarna är det bra att veta vad som faktiskt ska räknas. Som
                  huvudregel är arbetstid den tid du står till arbetsgivarens förfogande och utför
                  arbete. Några vanliga gränsfall:
                </p>
                <ul>
                  <li>
                    <strong>Raster</strong> räknas normalt inte som arbetstid och ska inte tas med i
                    timmarna.
                  </li>
                  <li>
                    <strong>Restid</strong> till och från arbetsplatsen hanteras olika beroende på avtal –
                    stäm av vad som gäller hos er.
                  </li>
                  <li>
                    <strong>Förberedelser och städning</strong> på arbetsplatsen är oftast arbetstid.
                  </li>
                </ul>
                <p>
                  Att vara konsekvent med vad som räknas gör att både lön och fakturering blir rättvis
                  och att timmarna går att jämföra mellan projekt.
                </p>
              </>
            ),
          },
          {
            id: 'ob-overtid-mertid',
            heading: 'OB, övertid och mertid i tidrapporten',
            body: (
              <p>
                För byggföretag räcker det sällan med enbart antal timmar. Obekväm arbetstid (OB),
                övertid och mertid ersätts olika enligt kollektivavtalet och behöver därför framgå av
                tidrapporten. Notera avvikande tider i anteckningsfältet – till exempel arbete på
                kvällar och helger – så att lönen blir rätt och rätt ersättning betalas ut. Tydliga
                noteringar minskar också risken för efterhandsdiskussioner om vad som faktiskt
                arbetades.
              </p>
            ),
          },
          {
            id: 'tidrapport-vs-personalliggare',
            heading: 'Tidrapport eller personalliggare?',
            body: (
              <p>
                De två blandas ofta ihop men mäter olika saker. Personalliggaren är en lagstadgad
                närvaroregistrering (kopplad till ID06 och Skatteverket) som visar vem som är på
                arbetsplatsen just nu. Tidrapporten visar hur många timmar som arbetats per projekt och
                är underlag för lön och fakturering. Du behöver alltså båda – närvaron för
                personalliggaren och de arbetade timmarna i tidrapporten.
              </p>
            ),
          },
          {
            id: 'tidrapport-format-pdf-excel-papper',
            heading: 'Tidrapport i PDF, Excel eller papper?',
            body: (
              <>
                <p>Vilket format som passar beror på hur du vill arbeta vidare med underlaget:</p>
                <ul>
                  <li>
                    <strong>PDF</strong> – en färdig, snygg tidrapport som är lätt att skriva ut,
                    signera och skicka. Bra som slutligt underlag och för arkiv.
                  </li>
                  <li>
                    <strong>Excel (CSV)</strong> – öppnas i Excel eller Google Sheets och är enkel att
                    bearbeta vidare, summera och föra in i lönesystemet. Ladda ner den direkt från mallen
                    ovan.
                  </li>
                  <li>
                    <strong>Papper</strong> – skriv ut PDF:en och fyll i för hand om du hellre gör det på
                    plats.
                  </li>
                </ul>
                <p>
                  Nackdelen med både Excel och papper är det manuella arbetet: timmarna måste samlas in
                  från alla, summeras och föras över till lön och faktura – med risk för fel i varje steg.
                  Vill du slippa det samlar en app in tiden per projekt automatiskt.
                </p>
              </>
            ),
          },
          {
            id: 'branschspecifik-tidrapport-bygg',
            heading: 'Branschspecifik tidrapport för bygg',
            body: (
              <p>
                En tidrapport för byggbranschen har några saker som skiljer den från en vanlig
                timregistrering. Timmarna behöver kopplas till rätt <strong>projekt</strong> för att kunna
                faktureras och för att du ska se lönsamheten. <strong>OB, övertid och mertid</strong> ska
                framgå eftersom de ersätts enligt kollektivavtalet, och arbetar ni på{' '}
                <strong>ackord</strong> behöver underlaget stämma med ackordsredovisningen. Dessutom finns
                närvaron separat i <strong>personalliggaren</strong> kopplad till ID06. En bra
                tidrapport för bygg tar höjd för allt detta – inte bara antal timmar.
              </p>
            ),
          },
          {
            id: 'digital-tidrapport-fordelar',
            heading: 'Digital tidrapportering – fördelar',
            body: (
              <p>
                En tidrapport i Excel eller på papper fungerar, men blir snabbt tidskrävande att samla
                in, summera och föra över till lön. Med digital tidrapportering registreras timmarna per
                projekt direkt, summeras automatiskt och kan exporteras till lön och faktura utan
                dubbelarbete. Risken för fel minskar och du får dessutom en aktuell bild av hur mycket
                tid som lagts på varje projekt.
              </p>
            ),
          },
          {
            id: 'fran-tidrapport-till-lon-faktura',
            heading: 'Från tidrapport till lön och faktura',
            body: (
              <>
                <p>
                  Tidrapporten är sällan slutmålet – den är underlaget som driver två processer vidare:
                </p>
                <ol>
                  <li>
                    <strong>Lön:</strong> timmarna, med OB och övertid, blir löneunderlag. Med rätt
                    ifylld rapport kan uppgifterna föras över eller exporteras till lönesystemet utan att
                    någon räknar för hand.
                  </li>
                  <li>
                    <strong>Faktura:</strong> tid som lagts på ett kundprojekt faktureras – ofta
                    tillsammans med material och ÄTA. Är timmarna kopplade till rätt projekt blir
                    fakturan korrekt direkt.
                  </li>
                </ol>
                <p>
                  Poängen med en strukturerad tidrapport är att samma uppgift bara behöver registreras
                  en gång och sedan kan användas på båda ställena.
                </p>
              </>
            ),
          },
          {
            id: 'hur-lange-spara-tidrapport',
            heading: 'Hur länge ska du spara tidrapporten?',
            body: (
              <p>
                Det finns två skäl att spara tidrapporter. Enligt arbetstidslagen ska anteckningar om
                jourtid, övertid och mertid sparas under innevarande år och de två följande
                kalenderåren. Fungerar tidrapporten dessutom som underlag för fakturering eller lön blir
                den räkenskapsinformation, och då gäller bokföringslagens krav på att bevara underlaget
                i minst sju år. Spara därför tidrapporterna i minst sju år för att vara på den säkra
                sidan – digitalt är det enkelt.
              </p>
            ),
          },
          {
            id: 'tidrapport-underentreprenor',
            heading: 'Tidrapport för underentreprenörer och inhyrd personal',
            body: (
              <p>
                Anlitar du underentreprenörer (UE) eller inhyrd personal behöver deras tid ofta
                rapporteras in till huvudentreprenören som underlag för fakturering mellan företagen. Då
                är det extra viktigt att varje rad har datum, antal timmar och vilket projekt tiden
                gäller, så att alla parter är överens om vad som utförts. En tydlig tidrapport per UE
                minskar diskussioner och gör avstämningen mot fakturan enkel.
              </p>
            ),
          },
          {
            id: 'tips-tidrapport',
            heading: 'Tips för rätt tidrapport',
            body: (
              <ul>
                <li>Rapportera löpande – helst dagligen – i stället för i klump i slutet av månaden.</li>
                <li>Koppla alltid timmarna till rätt projekt så att fakturan blir rätt.</li>
                <li>Notera OB, övertid och mertid separat så att lönen blir korrekt.</li>
                <li>Var konsekvent med enheter – timmar och minuter, inte «en halv dag».</li>
                <li>Stäm av summan innan du skickar underlaget till lön eller fakturering.</li>
              </ul>
            ),
          },
          {
            id: 'tidrapport-i-byggexp',
            heading: 'Så slipper du fylla i tidrapporten för hand',
            body: (
              <p>
                Mallen ovan är gratis att använda. I ByggExp kan tidrapporteringen ske automatiskt:
                med GPS-incheckning samlas timmarna per projekt, och du exporterar dem direkt som
                underlag för lön och fakturering – utan dubbelarbete. Eftersom tiden ligger i samma
                app som projekt, offert och faktura ser du dessutom direkt hur många timmar som lagts
                på varje jobb och om det är lönsamt. För dig som arbetsledare försvinner insamlandet av
                lappar och Excel-filer, och risken för fel i överföringen till lön minskar.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om tidrapport"
        faq={FAQ}
        cta={{
          heading: 'Automatisk tidrapportering i ByggExp',
          text: 'Låt GPS-incheckningen samla timmarna och exportera direkt till lön och faktura. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/blog/tidrapportering`, label: 'Guide: tidrapportering i byggföretag' },
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
          { href: `/${LOCALE}/blog/automatisk-tidrapportering-och-export`, label: 'Automatisk tidrapportering' },
          { href: `/${LOCALE}/blog/loneunderlag-for-byggforetag`, label: 'Löneunderlag för byggföretag' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
