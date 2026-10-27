import type { GetStaticPaths, GetStaticProps } from "next";

import InfoPage from "../../components/InfoPage/InfoPage";
import { PROJEKT_PRICE } from "../../components/Pricing/Pricing";
import { extC, illuC } from "../../content/funktion-pages-c";

// /sv/byt-system — switching from another time-reporting / business system
// (Swedish only). Verified fact (owner 2026-10-20, product-facts-verified.md):
// we help the customer move data from the old system for free. Never name
// other systems; the export advice stays generic.

type Props = { lang: "sv" };

export const getStaticPaths: GetStaticPaths<Props> = async () => ({
  paths: [{ params: { lang: "sv" } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { lang: "sv" },
});

const BOKFORINGSLAGEN =
  "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/bokforingslag-19991078_sfs-1999-1078/";

const BODY = `
<p>Att byta tidrapporteringssystem eller affärssystem känns ofta större än det är. Det som oroar är sällan själva programmet, utan risken att timmar försvinner mitt i en löneperiod eller att laget slutar rapportera. Med en tydlig plan går bytet att göra utan avbrott. Hos ByggExp hjälper vi er dessutom att flytta över datan från det gamla systemet, utan kostnad. Här går vi igenom stegen, vad ni ska exportera, en rimlig tidsplan och hur ni får med laget.</p>

<h2>Så går bytet till</h2>
<ol>
<li><strong>Genomgång.</strong> Vi går igenom hur ni arbetar i dag: hur tiden rapporteras, hur lönen tas fram och hur ni fakturerar. Därefter väljer ni paket och vi sätter upp kontot.</li>
<li><strong>Export ur det gamla systemet.</strong> Ni tar ut listor över personal, kunder och projekt, oftast som Excel eller CSV. Längre ner finns en lista över vad som är bra att ha med.</li>
<li><strong>Vi flyttar över datan.</strong> Vi går igenom filerna och lägger in det som ska med, till exempel projekt och personal. Flytten är gratis.</li>
<li><strong>Laget börjar använda appen.</strong> Medarbetarna laddar ner appen till iPhone eller Android och stämplar in på de projekt som redan ligger på plats.</li>
<li><strong>Parallellkörning.</strong> Under en löneperiod finns den gamla rutinen kvar som reserv. Ni jämför underlaget från båda innan ni släpper det gamla.</li>
<li><strong>Uppsägning.</strong> När lönen har gått igenom med ByggExp säger ni upp det gamla systemet och sparar exporterna som arkiv.</li>
</ol>

${illuC("byt-system-genomgang", "Kvinna vid en stor skärm visar två byggarbetare i hjälm som sitter med var sin mobil")}

<h2>Vad ni ska exportera ur det gamla systemet</h2>
<p>Gör exporten innan ni säger upp avtalet, så att ni fortfarande har åtkomst. Allt behöver inte flyttas. En del ska bara sparas som arkiv.</p>
<div class="article-table"><table>
<thead><tr><th>Uppgift</th><th>Varför</th><th>Flytta eller arkivera</th></tr></thead>
<tbody>
<tr><td><strong>Personal</strong></td><td data-label="Varför">Namn, kontaktuppgifter och roller behövs för att alla ska kunna logga in</td><td data-label="Flytta eller arkivera">Flytta</td></tr>
<tr><td><strong>Pågående projekt</strong></td><td data-label="Varför">Laget ska kunna stämpla på rätt projekt från första dagen</td><td data-label="Flytta eller arkivera">Flytta</td></tr>
<tr><td><strong>Kunder</strong></td><td data-label="Varför">Behövs för offerter och fakturor</td><td data-label="Flytta eller arkivera">Flytta</td></tr>
<tr><td><strong>Artiklar och prislistor</strong></td><td data-label="Varför">Sparar tid i nästa offert</td><td data-label="Flytta eller arkivera">Flytta det ni använder</td></tr>
<tr><td><strong>Öppna offerter och obetalda fakturor</strong></td><td data-label="Varför">Ska följas upp till de är klara</td><td data-label="Flytta eller arkivera">Avsluta i det gamla systemet</td></tr>
<tr><td><strong>Tidrapporter och lönehistorik</strong></td><td data-label="Varför">Underlag för tidigare löner och eventuella frågor</td><td data-label="Flytta eller arkivera">Arkivera</td></tr>
<tr><td><strong>Avslutade projekt</strong></td><td data-label="Varför">Bra för efterkalkyl och garantiärenden</td><td data-label="Flytta eller arkivera">Arkivera</td></tr>
</tbody>
</table></div>
<p>Exportera hellre för mycket än för lite. En fil som ligger i en arkivmapp kostar ingenting, men en uppgift som inte gick att hämta ut efter uppsägningen kan vara svår att få tag på.</p>
<p>Enligt ${extC(BOKFORINGSLAGEN, "bokföringslagen")} ska räkenskapsinformation sparas i sju år. Ta därför ut tidrapporter, löneunderlag och fakturor som pdf eller Excel och spara dem på ett ställe som ni har kvar efter bytet.</p>

<h2>En rimlig tidsplan</h2>
<p>Hur lång tid ett byte tar beror mest på hur ofta ni kör lön. Ett vanligt upplägg för ett byggföretag med månadslön ser ut så här:</p>
<div class="article-table"><table>
<thead><tr><th>När</th><th>Vad som händer</th><th>Vem</th></tr></thead>
<tbody>
<tr><td><strong>Vecka 1</strong></td><td data-label="Vad som händer">Genomgång, val av paket och export ur det gamla systemet</td><td data-label="Vem">Ni och vi</td></tr>
<tr><td><strong>Vecka 2</strong></td><td data-label="Vad som händer">Datan flyttas över, appen installeras och några medarbetare testar</td><td data-label="Vem">Vi, sedan laget</td></tr>
<tr><td><strong>Nästa löneperiod</strong></td><td data-label="Vad som händer">Hela laget stämplar i ByggExp, den gamla rutinen finns kvar som reserv</td><td data-label="Vem">Laget och kontoret</td></tr>
<tr><td><strong>Efter första lönen</strong></td><td data-label="Vad som händer">Underlagen jämförs, det gamla systemet sägs upp och arkiveras</td><td data-label="Vem">Kontoret</td></tr>
</tbody>
</table></div>
<p>Börja gärna i början av en löneperiod. Då slipper ni slå ihop timmar från två system för samma månad.</p>

<h2>Kontrollera avtalet med nuvarande leverantör</h2>
<ul>
<li><strong>Uppsägningstid.</strong> Hur lång är den, och till vilket datum löper avtalet?</li>
<li><strong>Åtkomst efter uppsägning.</strong> Hur länge kan ni logga in och ta ut data?</li>
<li><strong>Exportformat.</strong> Går det att ta ut listor som Excel eller CSV, och rapporter som pdf?</li>
<li><strong>Kopplingar.</strong> Finns det kopplingar till lön eller bokföring som behöver ersättas?</li>
</ul>
<p>Med svaren på de fyra frågorna vet ni när bytet senast måste vara klart. Hos ByggExp finns ingen bindningstid, så samma fråga behöver ni inte ställa nästa gång.</p>

<h2>Byta affärssystem: tid, faktura och lön i ett</h2>
<p>Många byggföretag har ett system för tid, ett för fakturor och ett tredje för lön, och samma timmar förs över för hand mellan dem. Byter ni ändå kan det vara läge att samla allt. I paketet Full koll blir attesterade timmar underlag för lön och faktura, och fotade kvitton, tidrapporter och in- och utgående fakturor räknas in i projektets ekonomi.</p>
<p>Bokföringen behöver inte flytta. Med tillägget Integrationer skapar ni en SIE4-fil som läses in i bokföringsprogrammet, och löneunderlag och AGI-underlag kan exporteras som CSV. Läs mer om vad ett <a href="/sv/blog/affarssystem-byggforetag">affärssystem för byggföretag</a> ska klara och se vad som ingår på sidan <a href="/sv/priser">priser</a>.</p>

${illuC("byt-system-parallellt", "Kvinna vid ett skrivbord med två skärmar, en grå tabell på den ena och en blå app på den andra")}

<h2>Få med laget från första dagen</h2>
<p>Ett nytt system lyckas när medarbetarna faktiskt använder det. Några saker som brukar göra skillnad:</p>
<ul>
<li><strong>Visa appen på ett morgonmöte.</strong> Det tar några minuter att visa hur man stämplar in, väljer projekt och fotar ett kvitto.</li>
<li><strong>Låt projekten ligga på plats.</strong> När projekten redan finns i appen första dagen behöver ingen skriva in något själv.</li>
<li><strong>Låt var och en välja GPS eller manuell tid.</strong> Den som inte vill dela sin position registrerar tiden manuellt per projekt och dag.</li>
<li><strong>Följ upp första veckan.</strong> Arbetsledaren tittar i översikten på vem som är på jobbet och hör av sig till den som inte har kommit igång.</li>
</ul>
<p>Vill ni börja med tidrapporteringen och ta faktura och lön senare går det också. Koll på jobbet för ${PROJEKT_PRICE} kr/mån innehåller <a href="/sv/funktioner/tidrapporteringssystem-bygg">tidrapporteringssystemet</a>, planering och byggdagbok. De första 14 dagarna är gratis med alla funktioner.</p>
`.trim();

const FAQ = [
  {
    question: "Vad kostar det att byta till ByggExp?",
    answer:
      "Flytten av data är gratis och det finns ingen startavgift. Ni betalar bara månadspriset för paketet ni väljer, och de första 14 dagarna är gratis.",
  },
  {
    question: "Hur lång tid tar det att byta tidrapporteringssystem?",
    answer:
      "Det beror mest på hur ofta ni kör lön. Ett vanligt upplägg är en till två veckor för genomgång, export och flytt, följt av en löneperiod med parallellkörning.",
  },
  {
    question: "Vilken data hjälper ni till att flytta?",
    answer:
      "Vi går igenom era exportfiler och flyttar över det som behövs för att komma igång, till exempel projekt och personal. Historik som gamla tidrapporter och lönekörningar sparar ni som arkiv i stället för att flytta.",
  },
  {
    question: "Kan vi köra det gamla och nya systemet parallellt?",
    answer:
      "Ja, och vi rekommenderar det under en löneperiod. Då kan ni jämföra underlaget innan ni säger upp det gamla systemet.",
  },
  {
    question: "Måste vi byta allt på en gång?",
    answer:
      "Nej. Många börjar med tidrapporteringen i Koll på jobbet och lägger till faktura och lön senare.",
  },
  {
    question: "Vad händer med bokföringen när vi byter affärssystem?",
    answer:
      "Bokföringen kan ligga kvar i ert bokföringsprogram. Med tillägget Integrationer exporterar ni en SIE4-fil dit.",
  },
  {
    question: "Har ByggExp bindningstid om vi vill byta igen?",
    answer:
      "Nej. Det finns ingen bindningstid vid månadsbetalning. Tidrapporter kan exporteras som pdf och Excel och löneunderlag som CSV.",
  },
];

const RELATED = [
  { href: "/sv/priser", label: "Priser och paket" },
  { href: "/sv/blog/affarssystem-byggforetag", label: "Affärssystem för byggföretag" },
  { href: "/sv/blog/digitalisera-byggforetag-projektstyrning", label: "Från Excel till ett system" },
  { href: "/sv/blog/tidrapporteringssystem-bygg", label: "Välj tidrapporteringssystem" },
  { href: "/sv/funktioner/tidrapporteringssystem-bygg", label: "Tidrapporteringssystem för bygg" },
  { href: "/sv/verktyg/tidrapport-mall", label: "Gratis tidrapportmall" },
];

export default function BytSystemPage() {
  return (
    <InfoPage
      path="byt-system"
      title="Byta tidrapporteringssystem – gratis flytt av data | ByggExp"
      description="Byta tidrapporteringssystem eller affärssystem för bygg? Vi flyttar er data gratis. Så går bytet till, steg för steg och utan avbrott. 14 dagar gratis."
      name="Byta tidrapporteringssystem"
      h1="Byta tidrapporteringssystem."
      h1Accent="Vi flyttar er data gratis."
      lead="Steg för steg, utan avbrott i lönen."
      hero={{
        name: "byt-system-flytt",
        alt: "Kontorsarbetare bär en låda med pärmar från ett arkivskåp till en dator med blå mappar på skärmen",
      }}
      heroCheck="Gratis flytt av data"
      body={BODY}
      faq={FAQ}
      related={RELATED}
    />
  );
}
