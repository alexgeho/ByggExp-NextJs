import type { BlogPost } from '../../types/blog';
import { SITE_URL } from './site-url';

const A_HITTA_KUNDER_BYGGFIRMA_HTML = `
<p>Tomma luckor i orderboken beror sällan på att du är för dyr. Oftare handlar det om synlighet och förtroende: kunden hittar inte din firma när hon söker, eller hon vågar inte välja er framför en konkurrent hon vet mer om. Den goda nyheten är att kundanskaffning för en byggfirma inte kräver stor marknadsföringsbudget – det kräver ett par kanaler som sköts systematiskt. Den här guiden ger dig en konkret plan, kanal för kanal, som du kan börja jobba efter redan i veckan.</p>

<p>Ett bra första steg är att göra det enkelt för intresserade kunder att få pris snabbt. Använd gärna <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a> så att du kan skicka ett proffsigt, tydligt underlag samma dag som förfrågan kommer in – snabb respons vinner ofta jobbet.</p>

<h2>Börja med Google Företagsprofil – din viktigaste gratiskanal</h2>
<p>När någon söker "snickare i [ort]" eller "takläggare nära mig" är det Google Företagsprofil (Google Business Profile) som avgör om din firma syns i kartan och de lokala träffarna. Profilen är kostnadsfri och är den enskilt viktigaste kanalen för lokal synlighet. Se till att den är komplett:</p>
<ul>
<li>Verifiera företaget och välj rätt kategori (t.ex. byggföretag, snickare, takläggare).</li>
<li>Ange tjänsteområde – de orter du faktiskt tar jobb i.</li>
<li>Fyll i öppettider, telefon och länk till webbplatsen.</li>
<li>Ladda upp riktiga bilder på färdiga jobb, inte stockbilder. Före/efter fungerar bäst.</li>
<li>Svara på meddelanden och frågor snabbt – svarstiden syns för kunden.</li>
</ul>
<p>En profil som ligger och skräpar halvfärdig kostar dig jobb varje vecka utan att du märker det. Sätt av en timme och gör den klar.</p>

<h2>Recensioner som säljverktyg</h2>
<p>Stjärnbetyg och omdömen påverkar både hur högt du rankas i lokala sökresultat och om kunden väljer just dig. Skillnaden mellan 3,8 och 4,6 i snitt är många förlorade förfrågningar. Bygg därför in en recensionsrutin i varje avslutat jobb:</p>
<ul>
<li>Be alltid om ett omdöme direkt när kunden är nöjd – vid slutbesiktning eller när du tar farväl på plats.</li>
<li>Gör det friktionsfritt: lägg en direktlänk eller QR-kod till din Google-profil på slutfakturan eller i ett uppföljningssms.</li>
<li>Svara professionellt på alla recensioner, även de sura. Ett sakligt, lösningsinriktat svar på ett dåligt omdöme övertygar nästa läsare mer än fem femmor.</li>
<li>Sikta på ett snitt runt 4,5 eller högre och ett jämnt inflöde – tjugo färska omdömen väger tyngre än hundra tre år gamla.</li>
</ul>

<h2>Sälj in ROT-avdraget rätt – och gör det till ett säljargument</h2>
<p>Många privatkunder underskattar hur mycket ROT drar ner nettopriset. Räkna åt dem, så blir avdraget ditt säljargument i stället för en administrativ fotnot. Fakta att luta dig mot:</p>
<ul>
<li>ROT ger skattereduktion på <strong>30 % av arbetskostnaden</strong>. Endast arbetet är avdragsgillt – material, resekostnader och övriga kostnader ger inget avdrag.</li>
<li>Avdraget är max <strong>50 000 kr per person och år</strong>. Tillsammans med RUT (som ger 50 %) är taket 75 000 kr per person och år.</li>
<li>Två makar eller sambor kan dela på avdraget. Ett hushåll kan alltså ha upp till 100 000 kr i ROT-utrymme per år – värt att lyfta vid större renoveringar.</li>
<li>Kunden får bara ROT om din firma har godkänd F-skatt (eller FA-skatt). Du drar av avdraget direkt på fakturan och begär resten från Skatteverket via fakturamodellen.</li>
</ul>
<p>Exempel: ett badrumsjobb med 80 000 kr i arbetskostnad. ROT ger 30 % = 24 000 kr i reduktion. Kunden betalar 56 000 kr för arbetet i stället för 80 000 kr. Skriv ut den siffran i offerten – "ditt pris efter ROT" – så konkurrerar du på netto, inte på brutto.</p>

<h2>Leads och plattformar</h2>
<p>Tjänster som Offerta, Servicefinder och Byggstart matchar dig med förfrågningar mot betalning – antingen per lead eller per abonnemang. De kan fylla orderboken snabbt när du är ny eller har en glugg, men räkna alltid på kostnad per faktiskt vunnet jobb, inte per lead. Du delar ofta samma förfrågan med flera firmor, och marginalen äts upp om konverteringen är låg. Använd plattformarna som komplement medan du bygger ditt eget varumärke – en egen kanal (Google-profil, recensioner, rekommendationer) kostar inget per lead och blir starkare över tid.</p>

<h2>Bygg förtroende och synliggör seriositet</h2>
<p>Privat- och företagskunder sållar bort osäkra alternativ innan de ens ringer. Gör det lätt att lita på dig genom att visa upp seriositetssignalerna öppet på webben och i offerten:</p>
<ul>
<li>Medlemskap i Byggföretagen (branschorganisationen har cirka 4 000 medlemsföretag och beskriver dem som seriösa bygg-, anläggnings- och specialföretag) och kollektivavtal.</li>
<li>ID06 – branschens system för legitimation och närvaroregistrering är i praktiken ett krav från många beställare och en tydlig seriositetsmarkör.</li>
<li>Godkänd F-skatt, ansvarsförsäkring och tydliga garantivillkor.</li>
</ul>
<p>Registrering sker via verksamt.se – Bolagsverkets, Skatteverkets och Tillväxtverkets gemensamma tjänst – där du också ansöker om F-skatt innan du kan fakturera med ROT.</p>

<h2>Egen webbplats och lokal SEO</h2>
<p>Din webbplats behöver inte vara stor, men den ska vara mobilanpassad och snabb. Skapa ortsspecifika sidor för dina viktigaste tjänster och områden ("takläggare + ort", "badrumsrenovering + ort"), bädda in dina Google-recensioner och gör kontaktvägen glasklar. Ett enkelt offertformulär direkt på sidan fångar förfrågningar dygnet runt – varje klick som inte leder någonstans är en förlorad kund.</p>

<h2>Nöjda kunder ger nya kunder</h2>
<p>Rekommendationer är fortfarande byggbranschens starkaste kanal. Be aktivt om vidarehänvisning när ett jobb är klart, dokumentera referensjobb med bild (med kundens tillåtelse) och håll kontakten för återkommande underhåll. En kund som är nöjd och blir ihågkommen ringer dig först nästa gång – och tipsar grannen.</p>

<h2>Mät och prioritera</h2>
<p>Fråga varje ny kund kort: "Hur hittade du oss?" Efter några månader ser du varifrån jobben faktiskt kommer och vad varje kanal kostar per vunnen kund. Dubbla ner på det som fungerar och lägg ner det som inte gör det – de flesta byggfirmor slösar tid på tre kanaler i stället för att bli riktigt bra på en.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att omvandla förfrågningar till vunna jobb. Med offertmallen skickar du ett tydligt, professionellt underlag snabbt – med separerad arbets- och materialkostnad så att ROT-avdraget och nettopriset syns direkt för kunden. Ett snyggt, begripligt offertunderlag är i sig en förtroendesignal och gör att fler tackar ja. Verktyget ersätter inte din marknadsföring, men det ser till att de leads du redan får inte rinner ut i sanden på grund av sen eller rörig respons.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är den billigaste kanalen för att hitta kunder till byggfirman?</h3>
<p>En komplett Google Företagsprofil är gratis och ger mest tillbaka för lokal synlighet. Kombinera den med en systematisk recensionsrutin, så har du en stark grund utan kostnad per lead.</p>

<h3>Hur mycket sänker ROT-avdraget kundens pris?</h3>
<p>ROT ger 30 % rabatt på arbetskostnaden, max 50 000 kr per person och år. Bara arbetet är avdragsgillt – inte material eller resor. Visa alltid nettopriset efter ROT i offerten.</p>

<h3>Krävs F-skatt för att kunden ska få ROT?</h3>
<p>Ja. Din firma måste ha godkänd F-skatt (eller FA-skatt) för att kunden ska kunna utnyttja ROT. Du drar av avdraget på fakturan och begär resten från Skatteverket via fakturamodellen.</p>

<h3>Lönar sig betalda lead-plattformar?</h3>
<p>De kan fylla luckor snabbt, men räkna på kostnad per vunnet jobb, inte per lead. Använd dem som komplement medan du bygger egna kanaler som Google-profil och rekommendationer.</p>

<h2>Kom igång</h2>
<p>Börja med tre steg den här veckan: gör Google-profilen komplett, sätt en fast rutin för att be om recensioner efter varje jobb, och skriv ut nettopriset efter ROT i varje offert. Skapa ett proffsigt underlag på minuter med <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du får fler förfrågningar att bli vunna jobb.</p>

<p>Relaterat: <a href="/sv/blog/skriva-offert">Så skriver du en offert som vinner jobbet</a>.</p>
`;

const A_HITTA_KUNDER_BYGGFIRMA: BlogPost = {
  _id: "code-"+"hitta-kunder-byggfirma",
  title: "Hitta kunder till byggfirman: en konkret kanalplan", slug: "hitta-kunder-byggfirma", locale: "sv",
  excerpt: "En konkret kanalplan för att hitta fler kunder till byggfirman – Google Företagsprofil, recensioner, ROT som säljargument och lokal SEO, utan stor budget.", tag: "Marknadsföring",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_HITTA_KUNDER_BYGGFIRMA_HTML,
  seoTitle: "Hitta kunder till byggfirma | ByggExp", seoDescription: "Konkret plan för hur din byggfirma hittar fler kunder: Google-profil, recensioner, ROT som säljargument, lead-plattformar och lokal SEO. Börja i veckan.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:24:00.000Z", createdAt: "2026-08-19T05:24:00.000Z", updatedAt: "2026-08-19T05:24:00.000Z",
};

const A_DIGITALISERA_BYGGFORETAG_PROJEKTSTYRNING_HTML = `
<p>Sverige hade 123 741 byggföretag 2025, och 88 procent av dem har högst fyra anställda. I praktiken betyder det att ägaren själv sitter med kvällsadministrationen: kvitton i handskfacket, tider på papperslappar, offerter i Word och fakturor i ett Excelark som ingen riktigt litar på. Varje steg lever i sitt eget verktyg, och samma uppgifter matas in om och om igen. Det kostar timmar varje vecka – och ännu mer i glömd fakturering och fel som upptäcks för sent.</p>

<p>Vill du se hur digital tidmätning ser ut i praktiken kan du börja med vår gratis tidrapport-mall -&gt; <a href="/sv/verktyg/tidrapport-mall">/sv/verktyg/tidrapport-mall</a>. Den här artikeln visar vad som faktiskt går att digitalisera i en liten byggfirma, och varför regelläget 2026 gör det digitala till minsta motståndets väg.</p>

<h2>Var tiden faktiskt försvinner i en liten byggfirma</h2>
<p>Adminkedjan i ett byggprojekt ser i grunden likadan ut oavsett storlek: projekt -&gt; tidrapport -&gt; offert -&gt; faktura -&gt; bokföring. Problemet är inte att varje enskilt steg tar lång tid. Problemet är dubbelarbetet som uppstår när stegen inte hänger ihop. Timmarna skrivs på papper, förs över till ett Excelark, sammanställs manuellt till en faktura och prickas sedan av mot bokföringen – samma siffror, fyra gånger.</p>
<p>Varje överföring är en felkälla. En glömd papperslapp blir en icke-fakturerad arbetsdag. Ett kundnamn som stavas olika i offert och faktura blir en försenad betalning. Och den offert som skickades i februari återfinns i mejlkorgen först när kunden invänder mot fakturan i maj. Den största kostnaden är alltså inte tidsåtgången i sig, utan pengarna som aldrig faktureras och felen som ingen fångar.</p>

<h2>2026 gör digitalt till standard, inte lyx</h2>
<p>Flera regler pekar nu åt samma håll. Elektronisk personalliggare krävs på en byggarbetsplats när den totala byggkostnaden väntas överstiga fyra prisbasbelopp, vilket 2026 motsvarar 236 800 kr (prisbasbeloppet är fastställt till 59 200 kr). Kravet gäller från första arbetsdagen, och byggherren ska anmäla till Skatteverket var och när verksamheten påbörjas. Viktigt att veta: Skatteverket kräver inget specifikt system. ID06-kort är inte lagkrav – en app eller läsare som dokumenterar namn, personnummer och tider räcker.</p>
<p>Samtidigt är e-faktura till offentlig sektor obligatorisk sedan 1 april 2019. Fakturerar din firma en kommun, region eller statlig myndighet måste fakturan skickas elektroniskt, till exempel via Peppol. Något generellt B2B-krav finns ännu inte 2026, men EU:s ViDA gör e-faktura obligatorisk för gränsöverskridande B2B inom EU från 2030. På bokföringssidan har det dessutom blivit enklare: sedan 1 juli 2024 får pappersunderlag kastas så snart informationen förts över korrekt till elektronisk form – det gamla kravet att spara originalet i minst tre år är borta. Fullt digital arkivering är alltså möjlig, så länge du sparar räkenskapsinformationen i sju år.</p>

<h3>Tidrapport som håller för både Skatteverket och Byggavtalet</h3>
<p>Personalliggare och intern tidrapport överlappar men är inte samma sak. Personalliggaren dokumenterar vem som är och har varit på plats. Tidrapporten är underlaget för lön och fakturering. När tiden registreras digitalt kan samma uppgift direkt bli underlag för både – och för korrekt löneberäkning enligt Byggavtalet, som gäller 2025-05-01 till 2027-04-30 och rymmer både prestationslön (ackord) och tidlön. Rätt ackord kräver rätt tidmätning. Slarv med personalliggaren är dessutom dyrt: Skatteverket kan ta ut kontrollavgift på 2 500, 12 500 eller 25 000 kr beroende på överträdelse, plus 2 500 kr per person som inte är antecknad vid kontroll.</p>

<h2>Offert och faktura i samma flöde</h2>
<p>En digital offert kan bli order och sedan faktura utan omtag – kunduppgifter, projekt och rader följer med hela vägen. Det är särskilt värdefullt eftersom en fullständig faktura enligt momslagen måste innehålla en rad obligatoriska uppgifter:</p>
<ul>
<li>Fakturadatum och ett unikt löpnummer</li>
<li>Säljarens momsregistreringsnummer</li>
<li>Säljarens och köparens namn och adress</li>
<li>Tjänstens art och omfattning (eller varornas mängd och art)</li>
<li>Leveransdatum</li>
<li>Beloppet exklusive moms per momssats samt momssats och momsbelopp</li>
</ul>
<p>Ett system fyller de här fälten automatiskt från offerten, så att inget glöms. Förenklad faktura är bara tillåten när beloppet är högst 4 000 kr inklusive moms – för de flesta byggjobb krävs alltså den fullständiga varianten. Här hjälper våra mallar för <a href="/sv/verktyg/offert-mall">offert</a> och <a href="/sv/verktyg/faktura-mall">faktura</a> dig att få med allt från start.</p>
<p>ROT-avdraget är från 1 januari 2026 tillbaka på 30 procent av arbetskostnaden, med tak på 50 000 kr per person och år (ROT och RUT tillsammans högst 75 000 kr). Företaget måste vara godkänt för F-skatt och begär avdraget via fakturamodellen hos Skatteverket. När fakturan hanteras digitalt blir uppdelningen av arbetskostnad och material – och ansökan mot Skatteverket – betydligt enklare att få rätt.</p>

<h2>Allt i ett vs. lösa appar</h2>
<p>Man kan digitalisera med en app för tid, en för offert och en för faktura. Vinsten blir dock större när de delar data. När tidrapport, offert och faktura bygger på samma kund, samma projekt och samma timmar minskar dubbelinmatningen, färre fakturor missas och spårbarheten blir sammanhängande – vilket är precis vad du behöver vid en tvist eller en kontroll. Frågan är alltså inte antalet verktyg, utan om de hänger ihop.</p>

<h2>Så mycket admin kan en liten firma spara</h2>
<p>Exakt hur mycket beror på hur firman jobbar idag, men storleksordningen är tydlig. Digitala flöden ger färre kvällar med pappersarbete, snabbare betalt eftersom fakturan kan gå iväg samma dag som jobbet är klart, och mindre risk för både räknefel och sanktionsavgifter. Rama in vinsten som timmar per vecka i sparad admin plus kortare tid från utfört arbete till pengar på kontot – två effekter som märks direkt i en fåmansfirma där ägaren är sin egen ekonomiavdelning.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp samlar tidrapport, offert och faktura i ett flöde som delar samma kund- och projektdata. Tid som registreras på ett jobb kan bli underlag för lön och för fakturan, offerten kan omvandlas till faktura utan att uppgifterna skrivs om, och de obligatoriska momsuppgifterna följer med automatiskt. Målet är att ta bort dubbelinmatningen mellan stegen. ByggExp ersätter inte din revisor eller ett dedikerat personalliggarsystem, men ger dig ett sammanhängande underlag – och du bör alltid stämma av personalliggare, ROT och arkiveringskrav mot Skatteverket och ditt kollektivavtal.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag ha ID06 för att uppfylla kravet på elektronisk personalliggare?</h3>
<p>Nej. Skatteverket kräver inte ett specifikt system, och ID06-kort är inte lagkrav. Det som krävs är att liggaren är elektronisk och dokumenterar vem som är och har varit på plats, med namn, personnummer och tider. En app eller läsare som fångar de uppgifterna räcker.</p>
<h3>När krävs elektronisk personalliggare på ett bygge?</h3>
<p>När den totala byggkostnaden på arbetsplatsen väntas överstiga fyra prisbasbelopp, vilket 2026 motsvarar 236 800 kr. Kravet gäller från första arbetsdagen, och byggherren ska anmäla till Skatteverket var och när verksamheten påbörjas samt tillhandahålla utrustning för att föra liggaren.</p>
<h3>Hur länge måste jag spara fakturor och underlag?</h3>
<p>Räkenskapsinformation ska sparas i sju år efter utgången av det kalenderår då räkenskapsåret avslutades. Sedan 1 juli 2024 får du dock kasta pappersunderlaget så snart informationen förts över korrekt till elektronisk form – vilket gör helt digital arkivering möjlig.</p>
<h3>Hur mycket är ROT-avdraget 2026?</h3>
<p>Från 1 januari 2026 är ROT tillbaka på 30 procent av arbetskostnaden, med tak på 50 000 kr per person och år. Företaget måste vara godkänt för F-skatt och begär avdraget via fakturamodellen hos Skatteverket.</p>

<h2>Kom igång</h2>
<p>Börja med det som blöder mest – oftast fakturering eller tidrapportering – och digitalisera ett flöde i taget. Testa vår <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> för att se hur digital tid blir underlag för både lön och faktura. Vill du se hela kedjan samlad kan du boka en visning via <a href="/sv/contact">/sv/contact</a>. Regelverket 2026 belönar redan digitala firmor; den som fortfarande kör papper och Excel betalar med sin egen tid.</p>

<p>Relaterat: <a href="/sv/blog/tidrapportering">Tidrapportering i byggbranschen</a>, <a href="/sv/blog/resursplanering-bygg">Resursplanering för byggföretag</a> och <a href="/sv/blog/offert-till-betald-faktura-flode">Från offert till betald faktura</a>.</p>
`;

const A_DIGITALISERA_BYGGFORETAG_PROJEKTSTYRNING: BlogPost = {
  _id: "code-"+"digitalisera-byggforetag-projektstyrning",
  title: "Från papperslappar och Excel till ett system – så mycket admin sparar en liten byggfirma", slug: "digitalisera-byggforetag-projektstyrning", locale: "sv",
  excerpt: "Så digitaliserar en liten byggfirma kedjan projekt–tidrapport–offert–faktura och sparar timmar admin varje vecka, samtidigt som 2026 års regler gör digitalt till minsta motståndets väg.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/5planering.webp", contentHtml: A_DIGITALISERA_BYGGFORETAG_PROJEKTSTYRNING_HTML,
  seoTitle: "Digitalisera byggföretag | ByggExp", seoDescription: "Tidrapport, offert och faktura i ett flöde. Så digitaliserar en liten byggfirma projektledningen och sparar timmar admin varje vecka – och möter 2026 års krav.",
  seoImageUrl: `${SITE_URL}/landing/features/5planering.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T10:15:00.000Z", createdAt: "2026-08-19T10:15:00.000Z", updatedAt: "2026-08-19T10:15:00.000Z",
};

const A_SKAFFA_RECENSIONER_OMDOMEN_BYGGFIRMA_HTML = `
<p>Ett bra omdöme från en nöjd kund är en av de billigaste marknadsföringskanaler en byggfirma har. När nästa kund söker efter en hantverkare i området är det stjärnorna på Google och de verifierade recensionerna på Reco som avgör om de hör av sig till dig eller till konkurrenten. Men 2026 räcker det inte att bara be alla kunder om en femma – både marknadsföringslagen och Google har skärpt reglerna, och ett felsteg kan i värsta fall kosta dig hela profilen eller en dyr avgift.</p>

<p>Ett proffsigt intryck börjar redan i offertskedet – kunder som får en tydlig och förtroendeingivande offert är också de som gärna lämnar ett gott omdöme efteråt. Använd gärna <a href="/sv/verktyg/offert-mall">vår gratis offertmall -&gt;</a> för att lägga grunden till ett projekt som slutar med en nöjd kund.</p>

<h2>Vad lagen faktiskt kräver av dig</h2>
<p>Sedan Omnibus-direktivet införlivades i marknadsföringslagen (i kraft sedan 1 september 2022) är det uttryckligen förbjudet att lägga ut falska eller manipulerade konsumentrecensioner. Om du visar omdömen på din egen hemsida måste du dessutom informera om, och hur, du kontrollerar att recensionerna kommer från verkliga kunder – samt upplysa om enbart positiva omdömen publiceras eller om någon recension är sponsrad.</p>
<p>Kravet på dig som företag är att vidta "rimliga och proportionerliga åtgärder" för att säkerställa att omdömena är äkta, till exempel genom att verifiera att personen faktiskt varit kund. Du ansvarar däremot inte för äktheten hos recensioner på tredjepartsplattformar som du inte kontrollerar, som Google eller Reco. Men bevisbördan för dina egna kontrollrutiner ligger på dig.</p>
<p>Ta det här på allvar. Sanktionen skärptes samtidigt: marknadsstörningsavgiften kan numera bestämmas till upp till 4 % av företagets globala årsomsättning – det tidigare taket på 10 miljoner kronor är borttaget. Redan oaktsamhet räcker för avgift, det behövs alltså inget uppsåt, och det är Patent- och marknadsdomstolen som beslutar på talan av Konsumentombudsmannen.</p>

<h2>Google 2026: det här får du inte göra längre</h2>
<p>Googles reviewpolicy uppdaterades den 16–17 april 2026 och förbjuder nu uttryckligen flera saker som många byggfirmor tidigare tog för givna. Se det som en checklista över vad du ska sluta med direkt:</p>
<ul>
<li><strong>Inga incitament.</strong> Du får inte erbjuda rabatt, gratistjänst, present eller lotteri i utbyte mot en recension – oavsett om omdömet blir positivt eller negativt.</li>
<li><strong>Ingen "review gating".</strong> Du får inte selektivt be bara nöjda kunder om ett Google-omdöme. Frågan måste ställas likadant till alla.</li>
<li><strong>Fråga inte på plats.</strong> Att be om ett omdöme medan kunden står framför dig – muntligt, via surfplatta eller kiosk – är inte längre tillåtet.</li>
<li><strong>Inga kvoter eller namn.</strong> Du får inte sätta recensionskvoter för personalen eller uppmana kunder att nämna en specifik anställd vid namn.</li>
</ul>
<p>Underskatta inte efterlevnaden. Enforcement är automatiserad och AI-baserad: Google blockerade eller tog bort 292 miljoner policybrytande recensioner under 2025, och de nya klausulerna tillämpas retroaktivt på befintliga profiler. Det kan innebära borttagna omdömen, nollställt stjärnbetyg eller begränsningar på din profil – även för sådant du gjorde innan reglerna ändrades.</p>

<h2>Så ber du ändå – utan att verka påträngande</h2>
<p>Det finns fortfarande gott om utrymme att be om omdömen, så länge du gör det systematiskt och neutralt. Nyckeln är timing och enkelhet:</p>
<ol>
<li><strong>Fråga vid rätt tillfälle.</strong> Skicka förfrågan efter godkänd slutbesiktning eller när projektet är avslutat och kunden är nöjd – inte mitt i jobbet när det fortfarande kan gå snett.</li>
<li><strong>Fråga alla likadant.</strong> Använd samma formulering till varje kund, oavsett hur du tror att omdömet blir. Det håller dig inom Googles regler och ger en mer rättvisande bild.</li>
<li><strong>Gör länken enkel.</strong> Lägg en kort direktlänk eller QR-kod i ett uppföljande mejl eller sms – aldrig på plats. Ju färre klick, desto fler svar.</li>
<li><strong>En vänlig påminnelse.</strong> Skicka på sin höjd en enda neutral påminnelse. Mer än så blir påträngande.</li>
</ol>
<p>En enkel formulering som fungerar: "Hej [namn], tack för att vi fick utföra [projekt] åt dig. Om du är nöjd med resultatet uppskattar vi om du vill dela din upplevelse – det hjälper oss och andra som letar hantverkare. Här är länken: [länk]. Tack på förhand!"</p>

<h2>Reco vs Google: bygg på båda, men olika</h2>
<p>De två plattformarna fyller olika funktioner. Reco.se bygger sin verifiering på integration med företagets ekonomi- och faktureringssystem: förfrågningar skickas bara till personer som faktiskt är kunder, vilket gör att omdömena kan äkthetsmärkas som "verifierat företag". Det ger tyngre bevisvärde än fritt inkomna omdömen – något som väger extra tungt i byggbranschen. Google, å andra sidan, syns i lokalt sök och på Maps där kunderna faktiskt letar.</p>
<p>Ett bra upplägg är att välja en primär plattform per kund så att du inte splittrar omdömena för tunt, och samtidigt bygga upp egna case och referenser på din hemsida. Tänk på att om du använder en kunds namn, foto eller projekt i din egen marknadsföring kräver GDPR ett dokumenterat, aktivt och frivilligt samtycke – till exempel en signering eller en ibockad ruta – och du måste kunna visa att samtycket finns.</p>

<h2>Hantera negativa omdömen rätt</h2>
<p>Ett negativt omdöme är inte världens undergång – hur du svarar säger ofta mer om ditt företag än själva klagomålet. Svara alltid sakligt och snabbt, håll det professionellt offentligt och ta detaljerna i dialogen privat. Erbjud aldrig pengar eller rabatt för att få kunden att ändra eller ta bort ett omdöme; det bryter mot Googles regler och riskerar att räknas som otillbörlig marknadsföring enligt MFL. Är ett omdöme uppenbart falskt eller regelstridigt – till exempel från någon som aldrig varit kund – kan du flagga det för granskning i stället för att ge dig in i en offentlig strid.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att bygga den rutin som gör recensioner till en naturlig del av varje projektavslut i stället för något du glömmer bort. Med en tydlig offert- och projektstruktur vet du exakt när ett jobb är godkänt och avslutat – rätt tillfälle att skicka din förfrågan. Du samlar kunduppgifter på ett ställe, vilket gör det enkelt att skicka samma neutrala förfrågan till alla och att hålla ordning på vilka referenser du har dokumenterat samtycke för. ByggExp skickar inte omdömena åt dig och kan inte garantera att kunder svarar, men verktyget ger dig den ordning och de mallar som krävs för att göra det rätt, konsekvent och inom reglerna.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag ge rabatt till kunder som lämnar en recension?</h3>
<p>Nej. Googles policy från april 2026 förbjuder uttryckligen alla former av incitament – rabatt, gratistjänst, present eller lotteri – i utbyte mot en recension, oavsett om omdömet blir positivt eller negativt. Det kan leda till att omdömen tas bort och att din profil begränsas.</p>
<h3>Får jag bara be nöjda kunder om ett Google-omdöme?</h3>
<p>Nej. Så kallad "review gating", där du selektivt frågar bara nöjda kunder, är förbjudet enligt Googles uppdaterade policy. Ställ samma fråga till alla kunder på samma sätt.</p>
<h3>Ansvarar jag för att recensionerna på min Google-profil är äkta?</h3>
<p>Du ansvarar inte för äktheten hos omdömen på plattformar du inte kontrollerar, som Google och Reco. Men om du visar omdömen på din egen hemsida måste du kunna redogöra för hur du kontrollerar att de kommer från verkliga kunder, och bevisbördan för dina rutiner ligger på dig.</p>
<h3>Måste jag ha tillstånd för att använda en kund som referens på min hemsida?</h3>
<p>Ja. Att använda en kunds namn, foto eller projekt i din egen marknadsföring kräver enligt GDPR ett dokumenterat, aktivt och frivilligt samtycke, och du måste kunna visa att samtycket finns.</p>

<h2>Kom igång</h2>
<p>Ärlighet och rutin slår genvägar varje gång. Börja med att lägga grunden för ett proffsigt projekt med <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a>, och utforska fler verktyg för din byggfirma bland <a href="/sv/verktyg">alla våra gratisverktyg</a>. Vill du se hur ByggExp kan bygga in recensionsrutinen i ditt arbetsflöde? <a href="/sv/contact">Boka en demo</a> så visar vi hur det fungerar.</p>

<p>Relaterat: <a href="/sv/blog/hitta-kunder-byggfirma">Så hittar du fler kunder till din byggfirma</a></p>
`;

const A_SKAFFA_RECENSIONER_OMDOMEN_BYGGFIRMA: BlogPost = {
  _id: "code-"+"skaffa-recensioner-omdomen-byggfirma",
  title: "Så får din byggfirma fler recensioner på Google och Reco – utan att bryta reglerna", slug: "skaffa-recensioner-omdomen-byggfirma", locale: "sv",
  excerpt: "Referenser vinner nästa jobb – men att be om recensioner 2026 kräver mer eftertanke än förr, efter att både lagen och Google skärpt reglerna.", tag: "Marknadsföring",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_SKAFFA_RECENSIONER_OMDOMEN_BYGGFIRMA_HTML,
  seoTitle: "Få recensioner byggfirma | ByggExp", seoDescription: "Så ber du kunder om omdömen på Google och Reco utan att verka påträngande – och håller dig inom lagen efter Googles skärpta regler 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T15:06:00.000Z", createdAt: "2026-08-19T15:06:00.000Z", updatedAt: "2026-08-19T15:06:00.000Z",
};

const A_GOOGLE_FORETAGSPROFIL_LOKAL_SEO_BYGGFIRMA_HTML = `
<p>En kund i grannkvarteret behöver byta ett tak, laga en läcka eller bygga altan. Hon skriver "snickare Enköping" eller "byggfirma nära mig" i mobilen. Google svarar inte med din hemsida — den svarar med tre företag i en kartruta högst upp. Det där är Local Pack, och det är där de flesta lokala jobb faktiskt avgörs. Kunden ringer ett av de tre företagen innan hon ens scrollar vidare. Den här synligheten är gratis. Ändå gör de flesta byggfirmor sin Google Företagsprofil halvdant: fyller i namn och telefon, glömmer kategori, samlar aldrig recensioner och undrar sedan varför konkurrenten ligger överst. Den här guiden går igenom hur du tar plats i kartrutan, steg för steg.</p>

<p>Innan du börjar: samla dina företagsuppgifter och en genomtänkt offertrutin på ett ställe med <a href="/sv/verktyg">våra gratis verktyg för byggföretag &rarr;</a>. En proffsig första kundkontakt är det som gör en recension till fem stjärnor.</p>

<h2>De tre sakerna Google faktiskt rankar på</h2>
<p>Google är öppen med sina lokala rankingfaktorer. Det finns tre: <strong>relevans</strong> (hur väl din profil matchar det kunden söker), <strong>avstånd</strong> (hur nära du är den som söker) och <strong>prominens</strong> (hur känt och aktivt ditt företag är). Avståndet kan du inte styra, och det väger tungt — för lokala sökningar utan varumärkesnamn placerar Google ofta det närmaste relevanta företaget högst, gata för gata. Ett företag några kvarter bort slår regelmässigt ett som ligger flera kilometer längre bort. Men relevans och prominens bygger du själv.</p>
<p>Bland det du faktiskt kan påverka rankar branschstudierna (som Whitesparks Local Search Ranking Factors) signalerna ungefär i den här ordningen: själva Google Företagsprofilen är den tyngsta gruppen, följt av on-page-innehåll och citeringar (omnämnanden av ditt företag på andra sajter), och därefter recensionssignaler — vars betydelse dessutom har ökat de senaste åren. Slutsatsen är enkel — profilen är din viktigaste enskilda tillgång, och den kostar ingenting att optimera.</p>

<h2>Steg 1 — Skapa och verifiera profilen (annars är du osynlig)</h2>
<p>En overifierad profil hamnar aldrig i kartrutan. Verifiering är obligatoriskt, och 2026 sker den ofta via <strong>videoverifiering</strong>: du filmar lokalen, skylten, en bil med logga eller dina verktyg för att bevisa att företaget är på riktigt. Vykort och telefon förekommer fortfarande. Räkna med några dagar innan verifieringen går igenom — men utan den är resten bortkastad tid.</p>
<p>Vanligt problem: någon, ofta Google själv eller en tidigare ägare, har redan skapat en profil på din adress. Sök upp den, gör anspråk på ("claim") och verifiera i stället för att skapa en dubblett. Två profiler för samma företag förvirrar Google och splittrar dina recensioner.</p>

<h2>Steg 2 — Rätt kategori = rätt sökord</h2>
<p>Den <strong>primära kategorin</strong> är enligt 2026 års Local Search Ranking Factors-undersökning den enskilt viktigaste lokala rankingfaktorn. Den avgör vilka sökningar du ens är med och tävlar om. Välj den mest specifika kategori som stämmer: "Snickare", "Rörmokare", "Takläggare", "Elektriker" — inte den luddiga "Hantverkare". När kunden söker "snickare + ort" är det din primära kategori som matchar ordet "snickare".</p>
<p>Du kan lägga till upp till 10 kategorier totalt. Använd dem för sidotjänster du faktiskt utför — men låt den primära vara ditt kärnyrke. En byggfirma som gör allt kan till exempel ha "Byggföretag" som primär och "Snickare", "Takläggare" och "Renoveringsföretag" som sekundära.</p>

<h2>Steg 3 — Serviceområde och NAP som stämmer överallt</h2>
<p>Åker du ut till kund i stället för att ta emot besök? Då är du ett <strong>tjänsteområdesföretag</strong>. Dölj gatuadressen och ange i stället de kommuner och orter du täcker — det är de orterna Google kopplar dig till i lokala sökningar. Lista de faktiska områden du jobbar i, inte hela Sverige.</p>
<p>Sedan kommer detaljen som förvånansvärt många missar: <strong>NAP</strong> — Namn, Adress, Telefonnummer — måste vara identiskt tecken för tecken överallt. På Google-profilen, hemsidan, Hitta.se, Eniro och sociala medier. Samma förkortningar, samma skiljetecken, samma format på telefonnumret. "Byggfirman AB, Storgatan 3B" på ett ställe och "Byggfirman Aktiebolag, Storg. 3 B" på ett annat skapar "NAP-brus" som gör Google osäker på om det är samma företag — och sänker din ranking.</p>

<h2>Steg 4 — Recensioner: mängd och färskhet slår femma i betyg</h2>
<p>Det här är där de flesta byggfirmor tappar. En profil med 4,8 i betyg och 200 recensioner rankar i regel före en med 5,0 och 5 recensioner. <strong>Volym och färskhet väger tyngre än ett perfekt snitt.</strong> I svenska mellanstora städer tenderar företag med 40+ recensioner och 4,5+ i betyg att dominera Local Pack. Ett par gamla femmor räcker inte.</p>
<p>Lösningen är en rutin: be alltid om en recension direkt efter avslutat jobb, medan kunden är nöjd och minnet är färskt. Google har ett eget verktyg som skapar en recensionslänk och QR-kod — skicka den via SMS eller mejl, eller sätt QR-koden på fakturan. Svara sedan på <strong>alla</strong> recensioner, både beröm och kritik. Ett sakligt svar på en sur recension imponerar ofta mer på nästa kund än de positiva.</p>
<p><strong>Viktigt — det här får du aldrig göra:</strong> att erbjuda rabatt, pengar, presenter eller gratis tjänster i utbyte mot en recension räknas som "falskt engagemang" och är strikt förbjudet. Samma sak gäller att muta någon för att ändra eller ta bort ett negativt omdöme. Googles automatiska system upptäcker misstänkta recensioner, tar bort dem och kan stänga av hela profilen. Du får be om en recension — men aldrig styra betyget eller innehållet.</p>

<h2>Steg 5 — Håll profilen levande (foton, inlägg, Frågor &amp; svar)</h2>
<p>Aktivitet är en prominenssignal. Profiler med bilder får ungefär 42 % fler förfrågningar om vägbeskrivning. Ladda upp riktiga bilder på dina jobb — före/efter, teamet, bilar och skyltar. Omslagsbild 1080×608 px, logga 250×250 px. Google gynnar nyligen uppladdade bilder, så byt ut och fyll på regelbundet i stället för att lägga upp allt en gång och glömma bort det.</p>
<p>Publicera dessutom <strong>Google-inlägg minst en gång i veckan</strong> — ett avslutat projekt, en säsongstjänst, en kort nyhet. Svara på frågor i Frågor &amp; svar innan kunderna svarar åt dig med felaktig information. Den här veckorutinen — nya bilder, ett inlägg, svar på recensioner — är precis den aktivitet som bygger prominens över tid.</p>

<h2>Vad du realistiskt kan förvänta dig</h2>
<p>Var ärlig mot dig själv om tidslinjen. Grundläggande optimering — verifiering, rätt kategori, ifylld profil, första bilderna — ger ofta mätbart fler visningar och klick inom <strong>4–8 veckor</strong>. Att bygga verklig prominens via recensioner och kontinuerlig aktivitet tar <strong>3–6 månader</strong> på konkurrensutsatta orter. Följ upp i profilens Insikter: visningar, samtal, vägbeskrivningar, och skillnaden mellan kategorisökningar (nya kunder som hittar dig) och direktsökningar (folk som redan känner till dig). Det är kategorisökningarna du vill se växa.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp sköter inte din Google-profil åt dig — men vi gör allt runt omkring så proffsigt att recensionerna kommer av sig själva. En tydlig <a href="/sv/verktyg/offert-mall">offertmall</a> ger kunden ett gott första intryck, och en organiserad hantering av jobb, tider och fakturor gör att du hinner med veckorutinen på profilen i stället för att drunkna i pappersarbete. Nöjda kunder som fått snygga offerter och korrekta fakturor är de som gladast klickar fem stjärnor när du skickar recensionslänken.</p>

<h2>Vanliga frågor</h2>
<h3>Kostar Google Företagsprofil något?</h3>
<p>Nej. Att skapa, verifiera och optimera profilen är helt gratis. Det är just därför den är så kraftfull — lokalt slår en välskött gratisprofil ofta betald annonsering, eftersom kunder litar mer på kartrutan och recensionerna än på annonser.</p>
<h3>Får jag bjuda kunden på rabatt om de lämnar en recension?</h3>
<p>Nej. Att erbjuda rabatt, pengar eller presenter för recensioner är förbjudet och kan leda till att recensionerna tas bort eller att profilen stängs av. Du får däremot alltid be om en recension och skicka en länk eller QR-kod efter avslutat jobb — så länge du inte styr betyget.</p>
<h3>Kan jag synas i flera orter än där jag har adress?</h3>
<p>Ja. Ställ in profilen som tjänsteområdesföretag, dölj gatuadressen och lägg in de kommuner och orter du faktiskt jobbar i. Då kopplas du till lokala sökningar i hela ditt serviceområde, inte bara på hemadressen.</p>
<h3>Varför syns inte min profil i kartrutan?</h3>
<p>Vanligaste orsakerna är att profilen inte är verifierad, saknar primär kategori, eller har för få och för gamla recensioner. Kontrollera verifieringen först — en overifierad profil är i praktiken osynlig i Local Pack.</p>

<h2>Kom igång</h2>
<p>Sätt av en timme den här veckan: verifiera profilen, sätt rätt primär kategori, lägg in serviceområdet och skicka recensionslänken till dina tre senaste kunder. Bygg sedan en fast veckorutin. Börja med en proffsig kundkontakt via <a href="/sv/verktyg">våra gratis byggverktyg</a>, och vill du se hur ByggExp kan avlasta administrationen så du hinner sköta synligheten — <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/hitta-kunder-byggfirma">Hitta kunder till byggfirman</a> och <a href="/sv/blog/starta-byggforetag-2026">Starta byggföretag 2026</a>.</p>
`;

const A_GOOGLE_FORETAGSPROFIL_LOKAL_SEO_BYGGFIRMA: BlogPost = {
  _id: "code-"+"google-foretagsprofil-lokal-seo-byggfirma",
  title: "Google Företagsprofil: lokal SEO för byggfirmor", slug: "google-foretagsprofil-lokal-seo-byggfirma", locale: "sv",
  excerpt: "De flesta lokala byggjobb avgörs i Googles kartruta. Här är steg-för-steg-guiden till att ranka i Local Pack — verifiering, kategori, serviceområde och recensioner.", tag: "Lokal SEO",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_GOOGLE_FORETAGSPROFIL_LOKAL_SEO_BYGGFIRMA_HTML,
  seoTitle: "Google Företagsprofil för byggfirmor | ByggExp", seoDescription: "Så tar din byggfirma plats i Googles kartruta (Local Pack): verifiering, rätt kategori, NAP och recensioner — steg för steg, gratis och för 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T17:06:00.000Z", createdAt: "2026-08-19T17:06:00.000Z", updatedAt: "2026-08-19T17:06:00.000Z",
};

const A_FAKTURERINGSPROGRAM_BYGG_HTML = `
<p>Ett faktureringsprogram för bygg ska göra mer än att skapa en PDF – det ska ta dig från nedlagda timmar till betald faktura utan dubbelarbete, och hantera ROT-avdraget rätt. Här går vi igenom vad ett faktureringsprogram för byggföretag bör klara, vad du ska titta på när du väljer, och hur ByggExp löser hela kedjan.</p>

<h2>Vad ska ett faktureringsprogram för bygg klara?</h2>
<ul>
<li><strong>ROT-fakturering</strong> – räkna och redovisa <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdraget</a> automatiskt så att kunden ser vad hen betalar och du får rätt underlag till Skatteverket.</li>
<li><strong>Från offert till faktura</strong> – en accepterad offert ska bli faktura med ett klick, inte skrivas om. Se <a href="/sv/blog/offert-till-betald-faktura-flode">hela flödet offert → faktura</a>.</li>
<li><strong>Timmar → faktura</strong> – vid löpande räkning ska registrerade timmar bli fakturarader utan att någon räknar för hand.</li>
<li><strong>Rätt fakturainnehåll</strong> – allt som en <a href="/sv/blog/vad-ska-faktura-innehalla-bygg">byggfaktura ska innehålla</a> enligt lag, med logga och betalningsvillkor.</li>
<li><strong>Påminnelser</strong> – automatisk påminnelse när kunden inte betalar i tid.</li>
</ul>

<h2>Faktureringsprogram, mall eller Excel?</h2>
<ul>
<li><strong>Enstaka fakturor</strong> – en <a href="/sv/verktyg/faktura-mall">faktura-mall</a> räcker och är gratis att börja med.</li>
<li><strong>Fakturor varje vecka</strong> – ett program sparar tid genom ROT-hantering, koppling offert→faktura→timmar och automatiska påminnelser, och minskar fel.</li>
</ul>

<h2>Så gör ByggExp det</h2>
<p>I ByggExp hänger offert, tid och faktura ihop: du <strong>skapar offerter</strong>, förvandlar dem till <strong>fakturor</strong>, och de timmar som teamet registrerar i mobilen blir fakturaunderlag automatiskt. ROT hanteras i flödet, och samma timmar används även till <a href="/sv/blog/tidrapportering">tidrapportering</a> och löneunderlag – du registrerar en gång och använder datan flera gånger.</p>
<p><a href="/sv/contact">Boka en demo av ByggExp</a> så visar vi hela kedjan från offert till betald faktura, eller <a href="/sv/funktioner">se alla funktioner</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Fint fakturaprogram, men frånkopplat.</strong> Om fakturan inte hämtar offert och timmar skriver du allt två gånger.</li>
<li><strong>ROT för hand.</strong> Manuell ROT-beräkning ger fel och nekade avdrag – låt systemet räkna.</li>
<li><strong>Ingen påminnelserutin.</strong> Obetalda fakturor som ingen bevakar blir dyra – se <a href="/sv/blog/kunden-betalar-inte-fakturan">vad du gör när kunden inte betalar</a>.</li>
</ul>

<p>Rätt faktureringsprogram sparar tid och pengar – men värdet ligger i att offert, tid och faktura sitter ihop och att ROT sköts automatiskt. Testa gratis med mallen, väx in i ett system när volymen kräver det.</p>
`;

const A_FAKTURERINGSPROGRAM_BYGG: BlogPost = {
  _id: "code-"+"faktureringsprogram-bygg",
  title: "Faktureringsprogram för bygg – ROT, offert och timmar i ett flöde", slug: "faktureringsprogram-bygg", locale: "sv",
  excerpt: "Vad ett faktureringsprogram för byggföretag bör klara – ROT-fakturering, offert→faktura, timmar→faktura och påminnelser – och hur ByggExp löser hela kedjan.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/8fakturor.webp", contentHtml: A_FAKTURERINGSPROGRAM_BYGG_HTML,
  seoTitle: "Faktureringsprogram för bygg – ROT & offert i ett | ByggExp", seoDescription: "Faktureringsprogram för byggföretag: ROT-fakturering, offert→faktura, timmar→faktura och automatiska påminnelser. Så väljer du – och så gör ByggExp det i ett flöde.",
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T17:00:00.000Z", createdAt: "2026-08-20T17:00:00.000Z", updatedAt: "2026-08-20T17:00:00.000Z",
};

const A_TIDRAPPORTERING_APP_BYGGFORETAG_HTML = `
<p>Det här är guiden för dig som har <strong>anställda</strong> och ska välja tidrapportering för hela laget – inte bara för egen del. Vill du först förstå grunderna i hur en app fungerar, läs <a href="/sv/blog/app-for-tidrapportering-bygg">app för tidrapportering i bygg</a>; här fokuserar vi på företagsperspektivet: flera medarbetare, roller, attestering och vägen till lön och faktura.</p>
<p>En tidrapporterings-app för byggföretag ska ta bort papperslapparna och Excel-krånglet: teamet stämplar tid i mobilen där jobbet sker, arbetsledaren attesterar, och timmarna blir direkt underlag för lön och faktura. Här går vi igenom vad en bra tidrapporterings-app ska klara för ett företag med anställda och hur ByggExp gör det.</p>

<h2>Vad ska en tidrapporterings-app för bygg klara?</h2>
<ul>
<li><strong>Registrering i mobilen</strong> – på plats, i realtid, kopplat till rätt projekt – inte i efterhand.</li>
<li><strong>Projektkoppling</strong> – varje timme bokförs på rätt projekt så du kan följa marginalen och fakturera rätt.</li>
<li><strong>OB, övertid och restid</strong> – <a href="/sv/blog/ob-overtid-byggavtalet-rakna">OB och övertid</a> och <a href="/sv/blog/restidsersattning-byggavtalet">restid</a> ska hanteras enligt Byggavtalet.</li>
<li><strong>Export till lön</strong> – timmarna ska bli löneunderlag och kunna exporteras (t.ex. Excel) utan handpåläggning.</li>
<li><strong>Underlag för faktura</strong> – vid löpande räkning blir samma timmar fakturarader.</li>
</ul>
<p>Läs mer om grunderna i guiden om <a href="/sv/blog/tidredovisning-byggforetag">tidredovisning i byggföretag</a> (och skillnaden mot <a href="/sv/blog/personalliggare">personalliggare</a>, som är ett separat lagkrav).</p>

<h2>Så gör ByggExp det</h2>
<p>ByggExp samlar in arbetstid automatiskt i mobilen och exporterar timmarna till Excel – och samma timmar blir både <strong>löneunderlag</strong> och <strong>fakturaunderlag</strong>. Du ser dessutom arbetslagen i en live-översikt och kan koppla foto och uppgifter till arbetspasset. Registrera en gång, använd datan till lön, faktura och uppföljning.</p>
<p><a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>. Vill du börja enkelt finns en gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a>.</p>

<h2>Vad byggföretaget vinner</h2>
<div class="article-table"><table>
<thead><tr><th>Område</th><th>Före (papper/Excel)</th><th>Med app</th></tr></thead>
<tbody>
<tr><td><strong>Lönekörning</strong></td><td>Pussel med lappar varje månad</td><td>Löneunderlag klart, export med ett klick</td></tr>
<tr><td><strong>Fakturering</strong></td><td>Timmar renskrivs för hand</td><td>Loggad tid blir fakturarader</td></tr>
<tr><td><strong>Marginal</strong></td><td>Syns först efteråt</td><td>Följs mot budget i realtid</td></tr>
<tr><td><strong>Fel &amp; tvister</strong></td><td>Vanliga – ord mot ord</td><td>Färre – spårbart underlag</td></tr>
</tbody>
</table></div>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Rapportering i efterhand.</strong> Tid som fylls i en vecka senare blir gissningar.</li>
<li><strong>Ingen projektkod.</strong> Utan koppling till projekt går det inte att följa marginal eller fakturera rätt.</li>
<li><strong>Dubbelarbete mot lönen.</strong> Om timmarna inte blir löneunderlag räknar någon om allt manuellt.</li>
</ul>

<p>En tidrapporterings-app tjänar in sig snabbt: rätt lön, rätt faktura och koll på lönsamheten – utan papperslappar och utan pusslet vid varje lönekörning.</p>

<h2>Vanliga frågor</h2>
<h3>Vad ska en tidrapporterings-app för byggföretag klara?</h3>
<p>Registrering i mobilen kopplad till projekt, hantering av OB, övertid och restid enligt byggavtalet, samt export av timmarna till både löneunderlag och fakturaunderlag – utan att mata in samma siffror flera gånger.</p>
<h3>Kan timmarna bli både lön och faktura?</h3>
<p>Ja. Samma registrerade timmar blir löneunderlag och fakturarader, och räknas in i projektets marginal – du registrerar en gång och använder datan överallt.</p>
<h3>Är en tidrapporterings-app samma sak som personalliggare?</h3>
<p>Nej. Tidrapportering handlar om arbetstid för lön och faktura. Personalliggare är ett separat lagkrav om närvaro på arbetsplatsen – men samma incheckning kan mata båda.</p>
`;

const A_TIDRAPPORTERING_APP_BYGGFORETAG: BlogPost = {
  _id: "code-"+"tidrapportering-app-byggforetag",
  title: "Tidrapportering-app för byggföretag – timmar till lön och faktura", slug: "tidrapportering-app-byggforetag", locale: "sv",
  excerpt: "Vad en tidrapporterings-app för bygg bör klara: registrering i mobilen, projektkoppling, OB/övertid/restid och export till lön och faktura. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/1arbetspass.webp", contentHtml: A_TIDRAPPORTERING_APP_BYGGFORETAG_HTML,
  seoTitle: "Tidrapportering-app för byggföretag – lön & faktura | ByggExp", seoDescription: "Tidrapportering-app för bygg: stämpla tid i mobilen, koppla till projekt, hantera OB/övertid/restid och exportera timmarna till lön och faktura. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/1arbetspass.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T17:05:00.000Z", createdAt: "2026-08-20T17:05:00.000Z", updatedAt: "2026-08-20T17:05:00.000Z",
};

const A_BYGGPROGRAM_FOR_BYGGFORETAG_HTML = `
<p>Ett byggprogram (program för byggföretag) ska samla det som annars ligger utspritt i papper, Excel och sms: tid, projekt, offert, faktura, foto och dokument – på ett ställe. Här går vi igenom vad ett bra byggprogram ska klara och hur ByggExp täcker hela kedjan.</p>

<h2>Vad ska ett byggprogram klara?</h2>
<ul>
<li><strong>Tid och lön</strong> – <a href="/sv/blog/tidrapportering-app-byggforetag">tidrapportering i mobilen</a> som blir löneunderlag automatiskt.</li>
<li><strong>Offert och faktura</strong> – <a href="/sv/blog/offertprogram-byggforetag">offerter</a> och <a href="/sv/blog/faktureringsprogram-bygg">fakturor med ROT</a> i samma flöde.</li>
<li><strong>Projekt- och personalplanering</strong> – vem gör vad, var och när.</li>
<li><strong>Fotodokumentation</strong> kopplad till arbetspass och projekt – bevis om något ifrågasätts.</li>
<li><strong>Dokument och kostnader</strong> – alla projektdokument, utlägg och kostnader samlade.</li>
<li><strong>Verktyg och utrustning</strong> – koll på var maskinerna är.</li>
</ul>

<h2>Byggprogram, appar eller lösa verktyg?</h2>
<p>Många börjar med lösa <a href="/sv/verktyg">gratis verktyg</a> (kalkyler, mallar) och växer in i ett samlat system när flera personer och projekt ska hänga ihop. Poängen med ett byggprogram är att du <strong>registrerar en gång</strong> – tid, foto, kostnad – och använder samma data till lön, faktura och uppföljning, i stället för att mata in allt flera gånger.</p>

<h2>Så gör ByggExp det</h2>
<p>ByggExp är byggt för byggföretag och hantverkare: automatisk arbetstid, uppgifter med uppföljning, live-översikt över arbetslagen, fotodokumentation per arbetspass, projekt- och personalplanering, verktygshantering, offert, faktura, projektdokument, utlägg och löner – ur samma timmar. Allt hänger ihop så att kontoret och bygget jobbar mot samma bild.</p>
<p><a href="/sv/contact">Boka en demo av ByggExp</a> eller <a href="/sv/funktioner">se alla funktioner</a>.</p>

<h2>Vad du ska titta på när du väljer</h2>
<ul>
<li><strong>Hänger delarna ihop?</strong> Tid, offert, faktura och lön ska dela data – annars blir det öar.</li>
<li><strong>Funkar det i mobilen på bygget?</strong> Om det bara funkar på kontoret används det inte.</li>
<li><strong>ROT och svenska regler.</strong> Ett byggprogram ska hantera ROT och svensk fakturastandard.</li>
</ul>

<p>Rätt byggprogram gör att en registrering räcker – och att kontoret slipper jaga papper. Börja med gratis verktyg, väx in i ett samlat system när volymen kräver det.</p>
`;

const A_BYGGPROGRAM_FOR_BYGGFORETAG: BlogPost = {
  _id: "code-"+"byggprogram-for-byggforetag",
  title: "Byggprogram för byggföretag – allt från tid till faktura i ett", slug: "byggprogram-for-byggforetag", locale: "sv",
  excerpt: "Vad ett byggprogram (program för byggföretag) bör klara: tid, lön, offert, faktura med ROT, projekt- och personalplanering, foto och dokument – i ett system. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_BYGGPROGRAM_FOR_BYGGFORETAG_HTML,
  seoTitle: "Byggprogram för byggföretag – tid, offert & faktura | ByggExp", seoDescription: "Byggprogram för byggföretag: samla tid, lön, offert, faktura med ROT, projekt- och personalplanering, fotodokumentation och dokument i ett system. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T17:10:00.000Z", createdAt: "2026-08-20T17:10:00.000Z", updatedAt: "2026-08-20T17:10:00.000Z",
};

const A_ARBETSORDER_APP_BYGG_HTML = `
<p>En arbetsorder-app ska ta bort sms:en och lapparna: rätt person får rätt jobb med all info, och du ser vad som är gjort – i realtid. Här går vi igenom vad en arbetsorder-app för byggföretag bör klara och hur ByggExp löser det.</p>

<h2>Vad ska en arbetsorder-app för bygg klara?</h2>
<ul>
<li><strong>Skapa och tilldela</strong> – lägg ut jobb på rätt person eller lag, med adress, beskrivning och deadline.</li>
<li><strong>Automatisk uppföljning</strong> – se status utan att ringa runt; påminnelser när något inte är klart.</li>
<li><strong>Kopplat till projekt</strong> – varje order hör till ett projekt så tid, foto och kostnad hamnar rätt.</li>
<li><strong>Foto och noteringar</strong> – <a href="/sv/blog/fotodokumentation-app-bygg">bevis och anteckningar</a> direkt på ordern.</li>
<li><strong>Fungerar i mobilen</strong> – på bygget, inte bara på kontoret.</li>
</ul>

<h2>Så gör ByggExp det</h2>
<p>ByggExp har <strong>uppgifter med automatisk uppföljning</strong> och en <strong>live-översikt över arbetslagen</strong>: du delar ut jobb, ser vad som pågår och vad som är klart, och kopplar tid och foto till rätt projekt. Samma data blir sedan underlag för <a href="/sv/blog/faktureringsprogram-bygg">faktura</a> och lön.</p>
<p><a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Order via sms.</strong> Utan ett system tappas jobb och detaljer bort.</li>
<li><strong>Ingen projektkoppling.</strong> Då hamnar tid och kostnad på fel ställe.</li>
<li><strong>Ingen uppföljning.</strong> Du märker att något missats först när kunden ringer.</li>
</ul>

<p>Rätt arbetsorder-app gör att inget jobb faller mellan stolarna – och att kontoret ser läget utan att ringa runt.</p>
`;

const A_ARBETSORDER_APP_BYGG: BlogPost = {
  _id: "code-"+"arbetsorder-app-bygg",
  title: "Arbetsorder-app för byggföretag – slut på sms och lappar", slug: "arbetsorder-app-bygg", locale: "sv",
  excerpt: "Vad en arbetsorder-app för bygg bör klara: skapa och tilldela jobb, automatisk uppföljning, projektkoppling och foto – i mobilen. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/2uppgift.webp", contentHtml: A_ARBETSORDER_APP_BYGG_HTML,
  seoTitle: "Arbetsorder-app för byggföretag – jobb & uppföljning | ByggExp", seoDescription: "Arbetsorder-app för bygg: skapa och tilldela jobb, automatisk uppföljning, projektkoppling och foto – i mobilen. Så slutar jobb falla mellan stolarna med ByggExp.",
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T18:00:00.000Z", createdAt: "2026-08-20T18:00:00.000Z", updatedAt: "2026-08-20T18:00:00.000Z",
};

const A_PROJEKTHANTERING_BYGGFORETAG_HTML = `
<p>Projekthantering för byggföretag handlar om att hålla ihop tid, personal, uppgifter, foto och ekonomi per projekt – så att du ser marginalen medan projektet pågår, inte efteråt. Här går vi igenom vad ett projektverktyg för bygg bör klara och hur ByggExp gör det.</p>

<h2>Vad ska ett projektverktyg för bygg klara?</h2>
<ul>
<li><strong>Projekt- och personalplanering</strong> – vem gör vad, var och när.</li>
<li><strong>Tid per projekt</strong> – timmar bokförs på rätt projekt för <a href="/sv/blog/kostnadskontroll-byggprojekt-marginal">kostnadskontroll och marginal</a>.</li>
<li><strong>Uppgifter och uppföljning</strong> – <a href="/sv/blog/arbetsorder-app-bygg">arbetsorder</a> kopplade till projektet.</li>
<li><strong>Foto och dokument</strong> – all dokumentation samlad per projekt.</li>
<li><strong>Ekonomi</strong> – offert, faktura, utlägg och kostnader på projektet.</li>
</ul>

<h2>Så gör ByggExp det</h2>
<p>ByggExp samlar <strong>projekt- och personalplanering</strong>, tid, uppgifter, <strong>fotodokumentation</strong>, dokument, utlägg och fakturering per projekt. Eftersom timmar och kostnader bokförs på projektet ser du lönsamheten löpande – och kontoret och bygget jobbar mot samma bild. Se även guiden om att <a href="/sv/blog/digitalisera-byggforetag-projektstyrning">digitalisera projektstyrningen</a>.</p>
<p><a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>.</p>

<h2>Vad du ska titta på</h2>
<ul>
<li><strong>Ser du marginalen löpande?</strong> Ett projektverktyg ska visa nedlagd tid mot kalkyl i realtid.</li>
<li><strong>Hänger tid, foto och ekonomi ihop?</strong> Annars blir det öar av data.</li>
<li><strong>Funkar det i mobilen på bygget?</strong> Det är där projektet händer.</li>
</ul>

<p>Rätt projekthantering gör att du styr projektet medan det pågår – och slipper överraskningar i efterkalkylen.</p>
`;

const A_PROJEKTHANTERING_BYGGFORETAG: BlogPost = {
  _id: "code-"+"projekthantering-byggforetag",
  title: "Projekthantering för byggföretag – tid, personal och marginal i ett", slug: "projekthantering-byggforetag", locale: "sv",
  excerpt: "Vad ett projektverktyg för bygg bör klara: projekt- och personalplanering, tid per projekt, uppgifter, foto och ekonomi – med marginalen synlig löpande. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/5planering.webp", contentHtml: A_PROJEKTHANTERING_BYGGFORETAG_HTML,
  seoTitle: "Projekthantering för byggföretag – projektverktyg | ByggExp", seoDescription: "Projekthantering / projektverktyg för byggföretag: planering, tid per projekt, uppgifter, foto och ekonomi med marginalen synlig löpande. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/5planering.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T18:05:00.000Z", createdAt: "2026-08-20T18:05:00.000Z", updatedAt: "2026-08-20T18:05:00.000Z",
};

const A_ROT_FAKTURERING_PROGRAM_HTML = `
<p>ROT-fakturering är där många byggföretag tappar tid och pengar: fel uträknat avdrag, krångel med Skatteverkets begäran och underlag som inte stämmer. Ett program som sköter ROT i fakturaflödet tar bort både felen och handpåläggningen. Här går vi igenom hur ROT-fakturering bör fungera och hur ByggExp gör det.</p>

<h2>Vad ROT-fakturering ska klara</h2>
<ul>
<li><strong>Rätt avdrag automatiskt</strong> – 30 % av arbetskostnaden, med taket per person. Räkna först i vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylator</a>.</li>
<li><strong>Tydligt för kunden</strong> – fakturan visar vad hen betalar efter avdrag.</li>
<li><strong>Underlag till Skatteverket</strong> – rätt uppgifter så begäran om utbetalning går igenom.</li>
<li><strong>Arbete särskilt från material</strong> – ROT gäller bara arbetskostnaden.</li>
</ul>
<p>Läs mer om fallgroparna i guiderna om <a href="/sv/blog/skatteverket-nekar-rotavdrag-forbehall">när Skatteverket nekar ROT</a> och att <a href="/sv/blog/kontrollera-kundens-rotutrymme">kontrollera kundens ROT-utrymme</a>.</p>

<h2>Så gör ByggExp det</h2>
<p>I ByggExp hanteras ROT i flödet från <strong>offert till faktura</strong>: arbetskostnaden särskiljs, avdraget räknas och kunden ser rätt belopp – och du får underlaget till Skatteverket utan att räkna för hand. Se hela <a href="/sv/blog/faktureringsprogram-bygg">faktureringsflödet</a>.</p>
<p><a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>ROT för hand.</strong> Manuell uträkning ger fel och nekade avdrag.</li>
<li><strong>Material med i avdraget.</strong> ROT gäller bara arbete – blanda inte in material.</li>
<li><strong>Fel kunduppgifter.</strong> Saknas rätt underlag fastnar utbetalningen.</li>
</ul>

<p>Rätt ROT-fakturering sparar tid och undviker nekade avdrag – nyckeln är att arbetet särskiljs och att avdraget räknas i systemet, inte i huvudet. Vill du se ett konkret räkneexempel steg för steg? Läs <a href="/sv/blog/faktura-med-rotavdrag">faktura med rotavdrag – exempel och mall</a>.</p>
`;

const A_ROT_FAKTURERING_PROGRAM: BlogPost = {
  _id: "code-"+"rot-fakturering-program",
  title: "ROT-fakturering – så gör du rätt avdrag i fakturan", slug: "rot-fakturering-program", locale: "sv",
  excerpt: "Hur ROT-fakturering bör fungera: rätt avdrag automatiskt, tydligt för kunden och rätt underlag till Skatteverket – utan handpåläggning. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/8fakturor.webp", contentHtml: A_ROT_FAKTURERING_PROGRAM_HTML,
  seoTitle: "ROT-fakturering – rätt avdrag i fakturan | ByggExp", seoDescription: "ROT-fakturering för byggföretag: rätt avdrag automatiskt (30 % av arbetet, tak per person), tydligt för kunden och rätt underlag till Skatteverket. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T18:10:00.000Z", createdAt: "2026-08-20T18:10:00.000Z", updatedAt: "2026-08-20T18:10:00.000Z",
};

const A_FOTODOKUMENTATION_APP_BYGG_HTML = `
<p>Fotodokumentation är byggföretagets billigaste försäkring: bilder som visar vad som gjorts och hur det såg ut – tidsstämplade och kopplade till rätt projekt. En app gör att bilderna faktiskt hamnar rätt i stället för att ligga kvar i mobilens kamerarulle. Här går vi igenom vad en fotodokumentations-app för bygg bör klara.</p>

<h2>Vad ska en fotodokumentations-app klara?</h2>
<ul>
<li><strong>Foto kopplat till projekt och arbetspass</strong> – inte en lös bildmapp, utan bevis på rätt plats.</li>
<li><strong>Tidsstämpel</strong> – när bilden togs, för spårbarhet vid tvist eller besiktning.</li>
<li><strong>Noteringar</strong> – kort text till bilden (vad, var, varför).</li>
<li><strong>Tillgängligt för kontoret</strong> – samlat, sökbart, inte spritt i olika telefoner.</li>
</ul>
<p>Varför det lönar sig: se guiden om <a href="/sv/blog/fotodokumentation-byggprojekt-bevis">fotodokumentation som bevis</a>.</p>

<h2>Så gör ByggExp det</h2>
<p>ByggExp har <strong>fotodokumentation kopplad till arbetspass</strong> och projekt: teamet fotar på plats, bilderna hamnar automatiskt på rätt projekt och kontoret kommer åt dem. Samma projekt håller ihop tid, uppgifter, foto och ekonomi.</p>
<p><a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Bilder i kamerarullen.</strong> Utan koppling till projekt går de inte att hitta när de behövs.</li>
<li><strong>Ingen tidsstämpel.</strong> Ett foto utan datum är svagt som bevis.</li>
<li><strong>Bara i en telefon.</strong> Kontoret kommer inte åt det som ligger lokalt hos en snickare.</li>
</ul>

<p>Rätt fotodokumentation kostar några sekunder per bild men kan avgöra en tvist – förutsatt att bilderna hamnar rätt, tidsstämplade och kopplade till projektet.</p>
`;

const A_FOTODOKUMENTATION_APP_BYGG: BlogPost = {
  _id: "code-"+"fotodokumentation-app-bygg",
  title: "Fotodokumentation-app för bygg – bevis kopplat till projektet", slug: "fotodokumentation-app-bygg", locale: "sv",
  excerpt: "Vad en fotodokumentations-app för bygg bör klara: foto kopplat till projekt och arbetspass, tidsstämpel, noteringar och åtkomst för kontoret. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/4foto.webp", contentHtml: A_FOTODOKUMENTATION_APP_BYGG_HTML,
  seoTitle: "Fotodokumentation-app för bygg – bevis per projekt | ByggExp", seoDescription: "Fotodokumentation-app för byggföretag: foto kopplat till projekt och arbetspass, tidsstämplat, med noteringar och åtkomst för kontoret. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/4foto.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T18:15:00.000Z", createdAt: "2026-08-20T18:15:00.000Z", updatedAt: "2026-08-20T18:15:00.000Z",
};

const A_LONEPROGRAM_BYGG_HTML = `
<p>Ett löneprogram för byggföretag ska göra en jobbig sak enkel: förvandla registrerade timmar till rätt lön – med OB, övertid och restid enligt Byggavtalet – utan att någon räknar för hand. Här går vi igenom vad ett löneprogram för bygg bör klara och hur ByggExp löser det.</p>

<h2>Vad ska ett löneprogram för bygg klara?</h2>
<ul>
<li><strong>Timmar → löneunderlag</strong> – registrerad tid blir underlag direkt, utan att skrivas om.</li>
<li><strong>OB, övertid och restid</strong> – <a href="/sv/blog/ob-overtid-byggavtalet-rakna">OB och övertid</a> och <a href="/sv/blog/restidsersattning-byggavtalet">restid</a> enligt Byggavtalet.</li>
<li><strong>Semesterlön</strong> – rätt påslag hanteras i underlaget.</li>
<li><strong>Export</strong> – underlaget ska kunna exporteras (t.ex. Excel) till lönesystemet utan handpåläggning.</li>
<li><strong>Projektkoppling</strong> – timmarna hör till rätt projekt så du också ser kostnaden per projekt.</li>
</ul>

<h2>Så gör ByggExp det</h2>
<p>I ByggExp samlas arbetstid automatiskt i mobilen och blir <strong>löneunderlag ur samma timmar</strong> – samma data används även till <a href="/sv/blog/faktureringsprogram-bygg">fakturering</a> och <a href="/sv/blog/projekthantering-byggforetag">projektuppföljning</a>. Du registrerar en gång och slipper pussla ihop lönen från lappar och Excel varje månad.</p>
<p><a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>. Vill du börja enkelt finns en gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Räkna om tiden manuellt.</strong> Dubbelarbete och fel vid varje lönekörning.</li>
<li><strong>OB/övertid för hand.</strong> Lätt att missa tillägg enligt avtalet.</li>
<li><strong>Ingen projektkod.</strong> Då syns inte lönekostnaden per projekt.</li>
</ul>

<p>Ett löneprogram som bygger på de timmar teamet redan registrerar sparar tid varje månad – och ger rätt lön utan handräkning.</p>
`;

const A_LONEPROGRAM_BYGG: BlogPost = {
  _id: "code-"+"loneprogram-bygg",
  title: "Löneprogram för byggföretag – från timmar till rätt lön", slug: "loneprogram-bygg", locale: "sv",
  excerpt: "Vad ett löneprogram för bygg bör klara: timmar → löneunderlag, OB/övertid/restid enligt Byggavtalet, semesterlön och export till lönesystemet. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_LONEPROGRAM_BYGG_HTML,
  seoTitle: "Löneprogram för byggföretag – timmar till lön | ByggExp", seoDescription: "Löneprogram för byggföretag: registrerade timmar blir löneunderlag med OB, övertid, restid och semesterlön – exporterbart till lönesystemet. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T19:00:00.000Z", createdAt: "2026-08-20T19:00:00.000Z", updatedAt: "2026-08-20T19:00:00.000Z",
};

const A_UTLAGG_APP_BYGG_HTML = `
<p>Skrynkliga kvitton i handskfacket och utlägg som glöms bort kostar byggföretag pengar varje månad. En utläggs-app löser det: fota kvittot direkt, koppla det till rätt projekt, och få med kostnaden i kalkyl och faktura. Här går vi igenom vad en utläggs-/kvitto-app för bygg bör klara.</p>

<h2>Vad ska en utläggs-app för bygg klara?</h2>
<ul>
<li><strong>Fota kvittot på plats</strong> – i mobilen, direkt när du handlar, innan det tappas bort.</li>
<li><strong>Koppla till projekt</strong> – utlägget hamnar på rätt projekt för rätt marginal och fakturering.</li>
<li><strong>Moms och belopp</strong> – registrera summa och moms så bokföringen blir rätt.</li>
<li><strong>Samlat för kontoret</strong> – alla kvitton sökbara på ett ställe, inte spridda i telefoner.</li>
</ul>

<h2>Så gör ByggExp det</h2>
<p>ByggExp har <strong>utlägg och kostnader</strong> kopplade till projekt: du fotar kvittot i appen, det bokförs på rätt projekt och syns i kostnadsbilden – samma projekt som håller ihop tid, <a href="/sv/blog/fotodokumentation-app-bygg">foto</a>, offert och faktura.</p>
<p><a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Kvitton på papper.</strong> De försvinner och avdraget uteblir.</li>
<li><strong>Inget projekt.</strong> Utan koppling syns inte kostnaden där den hör hemma.</li>
<li><strong>Registrera i efterhand.</strong> Glömda utlägg är förlorade pengar.</li>
</ul>

<p>En utläggs-app tjänar in sig snabbt: inga borttappade kvitton, rätt kostnad på rätt projekt och mindre pyssel i bokföringen.</p>
`;

const A_UTLAGG_APP_BYGG: BlogPost = {
  _id: "code-"+"utlagg-app-bygg",
  title: "Utläggs-app för bygg – fota kvittot, koppla till projektet", slug: "utlagg-app-bygg", locale: "sv",
  excerpt: "Vad en utläggs-/kvitto-app för byggföretag bör klara: fota kvittot på plats, koppla till projekt, registrera moms och samla allt för kontoret. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_UTLAGG_APP_BYGG_HTML,
  seoTitle: "Utläggs-app för bygg – kvitton per projekt | ByggExp", seoDescription: "Utläggs-/kvitto-app för byggföretag: fota kvittot på plats, koppla till projekt, registrera moms och samla allt sökbart för kontoret. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T19:05:00.000Z", createdAt: "2026-08-20T19:05:00.000Z", updatedAt: "2026-08-20T19:05:00.000Z",
};

const A_KALKYLPROGRAM_BYGG_HTML = `
<p>Ett kalkylprogram för bygg ska göra offerten både snabb och lönsam: rätt materialåtgång, rätt påslag och en tydlig väg från kalkyl till offert och faktura. Här går vi igenom vad ett kalkylprogram för byggföretag bör klara och hur du kommer igång gratis idag.</p>
<figure class="article-diagram"><img src="/landing/diagrams/kalkyl-flode.webp" alt="Diagram: från materialåtgång och påslag till offert med ROT och efterkalkyl" width="720" height="380" loading="lazy"><figcaption>Flödet i ett kalkylprogram: räkna materialåtgång, lägg rätt påslag, skapa offert och följ upp med efterkalkyl – ett underlag hela vägen.</figcaption></figure>

<h2>Vad ska ett kalkylprogram för bygg klara?</h2>
<ul>
<li><strong>Materialåtgång</strong> – räkna betong, tak, gips, färg m.m. Testa våra gratis <a href="/sv/verktyg">byggkalkylatorer</a>.</li>
<li><strong>Rätt påslag och marginal</strong> – <a href="/sv/blog/paslag-pa-material">påslag vs marginal</a> så att kalkylen faktiskt är lönsam.</li>
<li><strong>ROT</strong> – visa <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdraget</a> för kunden.</li>
<li><strong>Från kalkyl till offert</strong> – en materialkalkyl ska bli en färdig <a href="/sv/blog/offertprogram-byggforetag">offert</a> med ett klick.</li>
<li><strong>Uppföljning</strong> – jämför kalkyl mot utfall i <a href="/sv/blog/efterkalkyl-bygg-kalkyluppfoljning">efterkalkylen</a>.</li>
</ul>

<h2>Kalkylprogram, kalkylatorer eller Excel?</h2>
<p>Börja gärna med lösa <a href="/sv/verktyg">gratis kalkylatorer</a> (betong, tak, gips, färg …) och väx in i ett samlat flöde när du offererar ofta. Poängen är att materialkalkylen och offerten hänger ihop – och att offerten sedan blir order och faktura utan dubbelarbete.</p>

<h2>Så gör ByggExp det</h2>
<p>Från våra materialkalkylatorer kan du <strong>skapa en offert direkt</strong>, och i ByggExp hänger offert, tid och faktura ihop – inklusive ROT. Du räknar en gång och använder underlaget hela vägen. <a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>.</p>

<h2>Finns det gratis kalkylprogram för bygg?</h2>
<p>Ja – du behöver inte betala för att komma igång. ByggExps <a href="/sv/verktyg">byggkalkylatorer</a> är gratis och täcker de vanligaste momenten: betong, tak, gips, reglar, färg, grus med mera. De räknar materialåtgång direkt i webbläsaren, utan konto. När du väl offererar ofta och vill att kalkyl, offert, tid och faktura ska hänga ihop väljer du ett samlat system – men börja gratis med kalkylatorerna och väx in i det när volymen kräver.</p>

<h2>Bästa kalkylprogram för bygg – vad du ska titta efter</h2>
<p>"Bäst" är det program laget faktiskt använder och som skyddar marginalen. Bedöm efter:</p>
<div class="article-table"><table>
<thead><tr><th>Kriterium</th><th>Varför det avgör</th></tr></thead>
<tbody>
<tr><td><strong>Rätt materialåtgång</strong></td><td>Grunden – med spillmarginal, annars blir kalkylen för låg</td></tr>
<tr><td><strong>Påslag &amp; marginal</strong></td><td>Ett program hjälper inte mot fel påslag – det ska räknas rätt</td></tr>
<tr><td><strong>Kalkyl → offert</strong></td><td>Materialkalkylen ska bli offert utan dubbelarbete</td></tr>
<tr><td><strong>ROT</strong></td><td>Visa avdraget för kunden direkt</td></tr>
<tr><td><strong>Efterkalkyl</strong></td><td>Jämför kalkyl mot utfall så nästa offert blir bättre</td></tr>
<tr><td><strong>Enkelhet</strong></td><td>Ett program ingen använder är värdelöst oavsett funktioner</td></tr>
</tbody>
</table></div>
<p>Se även <a href="/sv/blog/basta-byggprogram-2026">bästa byggprogram 2026</a> för helheten och <a href="/sv/blog/byggprogram-pris">vad ett byggprogram kostar</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Snygg offert, fel påslag.</strong> Börja i kalkylen – ett program hjälper inte mot fel marginal.</li>
<li><strong>Glömma spill.</strong> Materialåtgång utan spillmarginal blir för låg.</li>
<li><strong>Ingen efterkalkyl.</strong> Utan uppföljning upprepas samma fel i nästa offert.</li>
</ul>

<p>Rätt kalkylprogram sparar tid och skyddar marginalen – men börja i kalkylen och ett tydligt flöde. Testa gratis med kalkylatorerna, väx in i ett system när volymen kräver det.</p>

<h2>Vanliga frågor</h2>
<h3>Finns det gratis kalkylprogram för bygg?</h3>
<p>Ja. ByggExps byggkalkylatorer är gratis och räknar materialåtgång (betong, tak, gips, färg m.m.) direkt i webbläsaren utan konto. Du kan börja gratis och väx in i ett samlat system när du offererar ofta.</p>
<h3>Vilket är det bästa kalkylprogrammet för bygg?</h3>
<p>Det som laget faktiskt använder och som skyddar marginalen – med rätt materialåtgång inklusive spill, rätt påslag, väg från kalkyl till offert, ROT och efterkalkyl. Enkelhet slår oftast många funktioner.</p>
<h3>Behöver jag ett kalkylprogram eller räcker Excel?</h3>
<p>Excel fungerar för enstaka kalkyler, men blir fel och tidskrävande när du offererar ofta. Ett program där kalkyl, offert och faktura hänger ihop tar bort dubbelarbetet och minskar marginalfelen.</p>
`;

const A_KALKYLPROGRAM_BYGG: BlogPost = {
  _id: "code-"+"kalkylprogram-bygg",
  title: "Kalkylprogram för bygg – från materialkalkyl till lönsam offert", slug: "kalkylprogram-bygg", locale: "sv",
  excerpt: "Vad ett kalkylprogram för byggföretag bör klara: materialåtgång, rätt påslag/marginal, ROT och vägen från kalkyl till offert och faktura. Kom igång gratis.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_KALKYLPROGRAM_BYGG_HTML,
  seoTitle: "Kalkylprogram för bygg – gratis kalkyl till offert | ByggExp", seoDescription: "Kalkylprogram för byggföretag: materialåtgång, rätt påslag och marginal, ROT och vägen från kalkyl till offert. Finns det gratis? Så väljer du bästa – kom igång gratis.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T19:10:00.000Z", createdAt: "2026-08-20T19:10:00.000Z", updatedAt: "2026-08-20T19:10:00.000Z",
};

const A_HANTVERKARAPP_HTML = `
<p>En app för hantverkare ska samla det du gör varje dag – tid, jobb, foto, offert och faktura – på ett ställe, i mobilen, där jobbet sker. Här går vi igenom vad en bra hantverkarapp bör klara och hur ByggExp täcker hela kedjan.</p>

<h2>Vad ska en app för hantverkare klara?</h2>
<ul>
<li><strong>Tidrapportering i mobilen</strong> – <a href="/sv/blog/tidrapportering-app-byggforetag">stämpla tid</a> på plats, kopplat till projekt.</li>
<li><strong>Jobb och uppföljning</strong> – <a href="/sv/blog/arbetsorder-app-bygg">arbetsorder</a> med status, slut på sms.</li>
<li><strong>Foto och utlägg</strong> – <a href="/sv/blog/fotodokumentation-app-bygg">fota</a> och <a href="/sv/blog/utlagg-app-bygg">registrera kvitton</a> direkt.</li>
<li><strong>Offert och faktura</strong> – <a href="/sv/blog/faktureringsprogram-bygg">offert och faktura med ROT</a> i samma flöde.</li>
<li><strong>Funkar på bygget</strong> – enkelt i mobilen, inte bara på kontoret.</li>
</ul>

<h2>Så gör ByggExp det</h2>
<p>ByggExp är byggt för hantverkare och byggföretag: automatisk arbetstid, uppgifter med uppföljning, foto per arbetspass, utlägg, offert, faktura och löner – ur samma timmar. Du registrerar en gång och kontoret ser samma bild som bygget. Se hela paketet i guiden om <a href="/sv/blog/byggprogram-for-byggforetag">byggprogram</a>.</p>
<p><a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>. Börja gärna med våra <a href="/sv/verktyg">gratis verktyg</a>.</p>

<h2>Vad du ska titta på</h2>
<ul>
<li><strong>Funkar det i mobilen?</strong> En hantverkarapp som bara funkar på kontoret används inte.</li>
<li><strong>Hänger delarna ihop?</strong> Tid, foto, offert och faktura ska dela data.</li>
<li><strong>Svenska regler och ROT.</strong> Appen ska hantera ROT och svensk fakturastandard.</li>
</ul>

<p>Rätt hantverkarapp gör vardagen enklare: en registrering räcker, och pappersarbetet på kontoret krymper. Börja med gratis verktyg, väx in i ett samlat system när det behövs.</p>
`;

const A_HANTVERKARAPP: BlogPost = {
  _id: "code-"+"hantverkarapp",
  title: "App för hantverkare – tid, jobb, offert och faktura i mobilen", slug: "hantverkarapp", locale: "sv",
  excerpt: "Vad en app för hantverkare bör klara: tidrapportering, arbetsorder, foto, utlägg samt offert och faktura med ROT – i mobilen på bygget. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_HANTVERKARAPP_HTML,
  seoTitle: "App för hantverkare – allt i mobilen | ByggExp", seoDescription: "App för hantverkare: tidrapportering, arbetsorder, foto, utlägg samt offert och faktura med ROT – allt i mobilen på bygget. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T19:15:00.000Z", createdAt: "2026-08-20T19:15:00.000Z", updatedAt: "2026-08-20T19:15:00.000Z",
};

const A_DOKUMENTHANTERING_BYGG_HTML = `
<p>Dokumenthantering för byggföretag handlar om att slippa leta: ritningar, avtal, egenkontroller, foton och protokoll ska ligga samlat per projekt – tillgängligt både på bygget och på kontoret. Här går vi igenom vad ett system för byggdokumentation bör klara och hur ByggExp gör det.</p>

<h2>Vad ska dokumenthantering för bygg klara?</h2>
<ul>
<li><strong>Samlat per projekt</strong> – alla dokument på rätt projekt, inte spridda i mejl och telefoner.</li>
<li><strong>Rätt sorters underlag</strong> – ritningar, avtal, <a href="/sv/blog/egenkontroll">egenkontroller</a>, <a href="/sv/blog/fotodokumentation-byggprojekt-bevis">foton</a> och protokoll.</li>
<li><strong>Åtkomst för både bygge och kontor</strong> – i mobilen på plats, samlat på kontoret.</li>
<li><strong>Sökbart</strong> – hitta rätt dokument snabbt när det behövs, t.ex. vid <a href="/sv/blog/slutbesiktning">besiktning</a> eller tvist.</li>
</ul>

<h2>Så gör ByggExp det</h2>
<p>ByggExp samlar <strong>alla projektdokument på ett ställe</strong> – kopplat till samma projekt som håller ihop tid, foto, offert och faktura. Bygget lägger till foto och underlag på plats, kontoret hittar allt samlat. Bra dokumentation är dessutom din bästa försäkring om något ifrågasätts – se guiden om <a href="/sv/blog/fotodokumentation-byggprojekt-bevis">fotodokumentation som bevis</a>.</p>
<p><a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Dokument i mejl och telefoner.</strong> Utan koppling till projekt går de inte att hitta.</li>
<li><strong>Ingen struktur.</strong> Rätt underlag på rätt projekt sparar timmar vid besiktning och tvist.</li>
<li><strong>Bara på kontoret.</strong> Bygget behöver komma åt ritningar och underlag på plats.</li>
</ul>

<p>Rätt dokumenthantering gör att du hittar underlaget på sekunder – och står starkt om kvaliteten ifrågasätts. Samla allt per projekt, tillgängligt för både bygge och kontor.</p>
`;

const A_DOKUMENTHANTERING_BYGG: BlogPost = {
  _id: "code-"+"dokumenthantering-bygg",
  title: "Dokumenthantering för byggföretag – allt samlat per projekt", slug: "dokumenthantering-bygg", locale: "sv",
  excerpt: "Vad dokumenthantering för byggföretag bör klara: ritningar, avtal, egenkontroller, foton och protokoll samlade per projekt – tillgängligt för bygge och kontor. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/project.webp", contentHtml: A_DOKUMENTHANTERING_BYGG_HTML,
  seoTitle: "Dokumenthantering för byggföretag – per projekt | ByggExp", seoDescription: "Dokumenthantering för byggföretag: ritningar, avtal, egenkontroller, foton och protokoll samlade per projekt, sökbart och tillgängligt för bygge och kontor. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/project.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T19:20:00.000Z", createdAt: "2026-08-20T19:20:00.000Z", updatedAt: "2026-08-20T19:20:00.000Z",
};

const A_PERSONALPLANERING_BYGG_HTML = `
<p>Personalplanering i byggföretag handlar om att rätt person är på rätt plats vid rätt tid – utan dubbelbokningar, glapp eller sena sms. Ett bra bemanningssystem ger både kontoret och bygget samma bild av vem som gör vad. Här går vi igenom vad personalplanering för bygg bör klara och hur ByggExp gör det.</p>

<h2>Vad ska personalplanering för bygg klara?</h2>
<ul>
<li><strong>Vem, var och när</strong> – planera personal och lag på projekt, utan dubbelbokning.</li>
<li><strong>Koppling till projekt och tid</strong> – planerad tid hänger ihop med <a href="/sv/blog/tidrapportering-app-byggforetag">registrerad tid</a> och projektets marginal.</li>
<li><strong>Live-läge</strong> – se var lagen är just nu, inte bara i ett schema på papper.</li>
<li><strong>Enkelt att ändra</strong> – flytta personal när något ändras och alla ser det direkt.</li>
</ul>
<p>Se även guiden om <a href="/sv/blog/resursplanering-bygg">resursplanering</a> och att <a href="/sv/blog/bemanning-och-personalplanering">bemanna och planera personal</a>.</p>

<h2>Så gör ByggExp det</h2>
<p>ByggExp har <strong>projekt- och personalplanering</strong> plus en <strong>live-översikt över arbetslagen</strong>: du planerar vem som jobbar var, ser läget i realtid och kopplar det till tid och projekt. Samma data blir sedan underlag för <a href="/sv/blog/loneprogram-bygg">lön</a> och <a href="/sv/blog/faktureringsprogram-bygg">faktura</a>.</p>
<p><a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Schema på papper/whiteboard.</strong> Ändringar når inte bygget i tid.</li>
<li><strong>Ingen koppling till tid.</strong> Planerad och verklig tid glider isär utan att någon märker det.</li>
<li><strong>Sena sms.</strong> Utan ett gemensamt läge blir det telefonpassning i stället för planering.</li>
</ul>

<p>Rätt personalplanering minskar glapp och dubbelbokningar – och ger kontoret och bygget samma bild i realtid.</p>
`;

const A_PERSONALPLANERING_BYGG: BlogPost = {
  _id: "code-"+"personalplanering-bygg",
  title: "Personalplanering för byggföretag – rätt person, rätt plats, rätt tid", slug: "personalplanering-bygg", locale: "sv",
  excerpt: "Vad personalplanering / bemanning för byggföretag bör klara: planera lag på projekt utan dubbelbokning, koppling till tid och en live-översikt över arbetslagen. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/5planering.webp", contentHtml: A_PERSONALPLANERING_BYGG_HTML,
  seoTitle: "Personalplanering för byggföretag – bemanning | ByggExp", seoDescription: "Personalplanering / bemanning för byggföretag: planera lag på projekt utan dubbelbokning, koppla till tid och se arbetslagen live. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/5planering.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-21T09:00:00.000Z", createdAt: "2026-08-21T09:00:00.000Z", updatedAt: "2026-08-21T09:00:00.000Z",
};

const A_VERKTYGSHANTERING_APP_HTML = `
<p>Var är slagborren? Vem har lasern? Verktyg och maskiner som försvinner mellan projekt kostar både tid och pengar. En app för verktygshantering ger koll på vad du äger, var det finns och vem som har det. Här går vi igenom vad verktygs- och maskinhantering för bygg bör klara.</p>

<h2>Vad ska verktygshantering för bygg klara?</h2>
<ul>
<li><strong>Inventarie</strong> – en lista på verktyg och maskiner du äger eller hyr.</li>
<li><strong>Var och hos vem</strong> – vilket projekt eller person som har utrustningen just nu.</li>
<li><strong>Enkelt i mobilen</strong> – kvittera ut och in på plats, inte i en pärm på kontoret.</li>
<li><strong>Koppling till projekt</strong> – så maskinkostnaden hamnar rätt.</li>
</ul>

<h2>Så gör ByggExp det</h2>
<p>ByggExp har <strong>hantering av verktyg och utrustning</strong>: du ser vad du har och var det finns, kopplat till projekt och personal – i samma system som håller ihop <a href="/sv/blog/tidrapportering-app-byggforetag">tid</a>, foto, offert och faktura. Slut på att leta efter maskiner mellan bilar och bodar.</p>
<p><a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>. Ska du köpa eller hyra? Se guiden om att <a href="/sv/blog/leasa-eller-kopa-maskiner-byggforetag">leasa eller köpa maskiner</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Ingen inventarie.</strong> Du vet inte vad du äger – och köper dubbelt.</li>
<li><strong>Ingen utkvittering.</strong> När ingen vet vem som har vad försvinner utrustning.</li>
<li><strong>Pärm på kontoret.</strong> Det som inte funkar i mobilen på bygget används inte.</li>
</ul>

<p>Rätt verktygshantering betalar sig snabbt: mindre letande, färre förlorade maskiner och rätt maskinkostnad på rätt projekt.</p>
`;

const A_VERKTYGSHANTERING_APP: BlogPost = {
  _id: "code-"+"verktygshantering-app",
  title: "Verktygshantering-app för bygg – koll på maskiner och utrustning", slug: "verktygshantering-app", locale: "sv",
  excerpt: "Vad verktygs- och maskinhantering för byggföretag bör klara: inventarie, var och hos vem utrustningen finns, utkvittering i mobilen och koppling till projekt. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/tools.webp", contentHtml: A_VERKTYGSHANTERING_APP_HTML,
  seoTitle: "Verktygshantering-app för bygg – maskiner & utrustning | ByggExp", seoDescription: "Verktygs- och maskinhantering för byggföretag: inventarie, var och hos vem utrustningen finns, utkvittering i mobilen och koppling till projekt. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/tools.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-21T09:05:00.000Z", createdAt: "2026-08-21T09:05:00.000Z", updatedAt: "2026-08-21T09:05:00.000Z",
};

const A_BYGG_APP_HTML = `
<p>En bygg-app ska samla vardagen på bygget i mobilen: tid, jobb, foto, utlägg, offert och faktura – på ett ställe, för både snickaren på plats och kontoret. Här går vi igenom vad en bygg-app bör klara och hur ByggExp täcker hela kedjan.</p>

<h2>Vad ska en bygg-app klara?</h2>
<ul>
<li><strong>Tid i mobilen</strong> – <a href="/sv/blog/tidrapportering-app-byggforetag">stämpla tid</a> på plats, kopplat till projekt.</li>
<li><strong>Jobb och uppföljning</strong> – <a href="/sv/blog/arbetsorder-app-bygg">arbetsorder</a> med status.</li>
<li><strong>Foto och utlägg</strong> – <a href="/sv/blog/fotodokumentation-app-bygg">fota</a> och <a href="/sv/blog/utlagg-app-bygg">registrera kvitton</a> direkt.</li>
<li><strong>Offert och faktura</strong> – <a href="/sv/blog/faktureringsprogram-bygg">med ROT</a>, i samma flöde.</li>
<li><strong>Ett läge för alla</strong> – kontoret och bygget ser samma bild.</li>
</ul>

<h2>Så gör ByggExp det</h2>
<p>ByggExp är en bygg-app byggd för byggföretag och hantverkare: automatisk arbetstid, uppgifter, foto per arbetspass, utlägg, planering, offert, faktura och löner – ur samma timmar. Du registrerar en gång och använder datan hela vägen. Se hela paketet i guiden om <a href="/sv/blog/byggprogram-for-byggforetag">byggprogram</a> eller <a href="/sv/blog/hantverkarapp">app för hantverkare</a>.</p>
<p><a href="/sv/contact">Boka en demo</a> eller <a href="/sv/funktioner">se alla funktioner</a>. Testa gärna våra <a href="/sv/verktyg">gratis verktyg</a> först.</p>

<h2>Vad du ska titta på</h2>
<ul>
<li><strong>Funkar det på bygget?</strong> En bygg-app som bara funkar på kontoret används inte.</li>
<li><strong>Hänger delarna ihop?</strong> Tid, foto, offert och faktura ska dela data.</li>
<li><strong>Svenska regler och ROT.</strong> Appen ska hantera ROT och svensk fakturastandard.</li>
</ul>

<p>Rätt bygg-app gör en registrering nog – och krymper pappersarbetet på kontoret. Börja med gratis verktyg, väx in i en samlad app när det behövs.</p>
`;

const A_BYGG_APP: BlogPost = {
  _id: "code-"+"bygg-app",
  title: "Bygg-app – tid, jobb, offert och faktura i mobilen", slug: "bygg-app", locale: "sv",
  excerpt: "Vad en bygg-app bör klara: tidrapportering, arbetsorder, foto, utlägg samt offert och faktura med ROT – i mobilen för både bygget och kontoret. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/live.webp", contentHtml: A_BYGG_APP_HTML,
  seoTitle: "Bygg-app – allt i mobilen för byggföretag | ByggExp", seoDescription: "Bygg-app för byggföretag och hantverkare: tidrapportering, arbetsorder, foto, utlägg samt offert och faktura med ROT – i mobilen. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/live.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-21T09:10:00.000Z", createdAt: "2026-08-21T09:10:00.000Z", updatedAt: "2026-08-21T09:10:00.000Z",
};

const A_BYGGPROGRAM_PRIS_HTML = `
<p>&quot;Vad kostar ett byggprogram?&quot; är en av de vanligaste frågorna – och svaret är: det beror på. Här går vi igenom vad som styr priset på ett byggprogram, hur du räknar hem det, och hur du kan börja gratis innan du bestämmer dig.</p>

<h2>Vad styr priset?</h2>
<ul>
<li><strong>Antal användare</strong> – de flesta byggprogram tar betalt per användare och månad, så priset växer med teamet.</li>
<li><strong>Vilka funktioner</strong> – enbart tidrapportering kostar mindre än ett helt system med offert, faktura, lön och planering.</li>
<li><strong>Bindningstid och support</strong> – månadsvis vs. årsavtal, och vilken hjälp som ingår.</li>
<li><strong>Onboarding</strong> – uppstart och import kan tillkomma.</li>
</ul>

<h2>Räkna hem det – inte bara priset</h2>
<p>Ett byggprogram ska tjäna in sig, inte bara kosta. Väg priset mot vad du sparar: mindre tid på lön och fakturering, färre <a href="/sv/blog/kunden-betalar-inte-fakturan">missade fakturor</a>, rätt <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT</a>, och koll på <a href="/sv/blog/kostnadskontroll-byggprojekt-marginal">marginalen per projekt</a>. Ofta räcker några sparade timmar i månaden för att betala abonnemanget.</p>

<h2>Börja gratis</h2>
<p>Du behöver inte betala för att komma igång. Testa våra <a href="/sv/verktyg">gratis verktyg</a> (kalkyler, offert- och faktura-mallar) och se hur flödet fungerar. Vill du se pris och paket för ByggExp – <a href="/sv#pricing">se priser</a> eller <a href="/sv/contact">boka en demo</a> så går vi igenom vad som passar din verksamhet.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Titta bara på månadspriset.</strong> Räkna på vad du sparar, inte bara vad det kostar.</li>
<li><strong>Köpa för mycket.</strong> Betala för funktioner du faktiskt använder.</li>
<li><strong>Hoppa över testet.</strong> Prova gratis innan du binder dig.</li>
</ul>

<p>Priset på ett byggprogram beror på användare och funktioner – men den viktigare frågan är vad det sparar. Börja gratis, räkna på nyttan, välj paket därefter.</p>
`;

const A_BYGGPROGRAM_PRIS: BlogPost = {
  _id: "code-"+"byggprogram-pris",
  title: "Vad kostar ett byggprogram? Så tänker du på priset", slug: "byggprogram-pris", locale: "sv",
  excerpt: "Vad styr priset på ett byggprogram – användare, funktioner, bindningstid och onboarding – och hur du räknar hem det. Börja gratis och välj paket därefter.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_BYGGPROGRAM_PRIS_HTML,
  seoTitle: "Vad kostar ett byggprogram? Pris & paket | ByggExp", seoDescription: "Vad kostar ett byggprogram? Priset styrs av antal användare, funktioner, bindningstid och onboarding. Så räknar du hem det – och börjar gratis. Se priser hos ByggExp.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-21T09:15:00.000Z", createdAt: "2026-08-21T09:15:00.000Z", updatedAt: "2026-08-21T09:15:00.000Z",
};

const A_BASTA_BYGGPROGRAM_HTML = `
<p>Att välja &quot;bästa byggprogram&quot; handlar inte om en topplista – det bästa programmet är det som passar just din verksamhet. Här är en checklista för hur du väljer rätt byggprogram 2026, och vad som skiljer ett bra system från ett som bara blir en kostnad.</p>

<h2>7 saker att bedöma</h2>
<ul>
<li><strong>Hänger delarna ihop?</strong> Tid, offert, faktura och lön ska dela data – annars blir det öar och dubbelarbete.</li>
<li><strong>Funkar det i mobilen på bygget?</strong> Om det bara funkar på kontoret används det inte.</li>
<li><strong>Svenska regler och ROT.</strong> <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT</a> och svensk fakturastandard ska hanteras rätt.</li>
<li><strong>Från offert till faktura.</strong> En accepterad <a href="/sv/blog/offertprogram-byggforetag">offert</a> ska bli <a href="/sv/blog/faktureringsprogram-bygg">faktura</a> utan att skrivas om.</li>
<li><strong>Timmar till lön.</strong> Registrerad tid ska bli <a href="/sv/blog/loneprogram-bygg">löneunderlag</a> automatiskt.</li>
<li><strong>Enkelt att komma igång.</strong> Onboarding och support som gör att teamet faktiskt börjar använda det.</li>
<li><strong>Pris mot nytta.</strong> Räkna på vad det <a href="/sv/blog/byggprogram-pris">sparar</a>, inte bara vad det kostar.</li>
</ul>

<h2>Så testar du</h2>
<p>Börja med det du känner mest smärta i – ofta tid, offert eller faktura – och prova det i praktiken innan du bestämmer dig. Testa gärna våra <a href="/sv/verktyg">gratis verktyg</a> för att se hur flödet fungerar, och läs guiden om <a href="/sv/blog/byggprogram-for-byggforetag">byggprogram för byggföretag</a> för vad ett samlat system ska klara.</p>

<h2>Så gör ByggExp det</h2>
<p>ByggExp är byggt för svenska byggföretag och hantverkare och täcker hela kedjan: tid, uppgifter, foto, planering, utlägg, offert, faktura (med ROT) och löner – ur samma timmar. <a href="/sv/contact">Boka en demo</a> så visar vi om det passar din verksamhet, eller <a href="/sv/funktioner">se alla funktioner</a>.</p>

<p>Det &quot;bästa&quot; byggprogrammet är det som hänger ihop, funkar på bygget och räknar hem sig. Utgå från din vardag, testa i praktiken och välj därefter.</p>
`;

const A_BASTA_BYGGPROGRAM: BlogPost = {
  _id: "code-"+"basta-byggprogram-2026",
  title: "Bästa byggprogram 2026 – så väljer du rätt (checklista)", slug: "basta-byggprogram-2026", locale: "sv",
  excerpt: "Hur du väljer bästa byggprogram 2026: 7 saker att bedöma – hänger delarna ihop, funkar det i mobilen, ROT, offert→faktura, timmar→lön, onboarding och pris mot nytta. Så gör ByggExp det.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_BASTA_BYGGPROGRAM_HTML,
  seoTitle: "Bästa byggprogram 2026 – så väljer du rätt | ByggExp", seoDescription: "Bästa byggprogram 2026: checklista med 7 saker att bedöma – integration, mobil, ROT, offert→faktura, timmar→lön, onboarding och pris mot nytta. Så gör ByggExp det.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-21T09:20:00.000Z", createdAt: "2026-08-21T09:20:00.000Z", updatedAt: "2026-08-21T09:20:00.000Z",
};

// --- Tidrapportering keyword-funnel cluster (see memory) ---------------------

const A_APP_TIDRAPPORTERING_BYGG_HTML = `
<p>Papperslappar i fickan, timmar som skrivs av minnet på fredagen och en administratör som jagar underlag – manuell tidrapportering kostar byggföretag både pengar och nerver. En app för tidrapportering löser det: personalen stämplar in och ut i mobilen, timmarna hamnar automatiskt på rätt projekt, och du får ett färdigt underlag till lön och faktura utan efterarbete. Här går vi igenom vad en app för tidrapportering i bygg ska klara, hur digital tidrapportering fungerar i praktiken och hur du kommer igång. (Tidrapportering stavas ibland tidsrapportering och kallas även tidsregistrering – det handlar om samma sak: att fånga arbetstiden digitalt.)</p>

<p>Vill du testa direkt? Ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> eller läs mer om <a href="/sv/blog/automatisk-tidrapportering-och-export">automatisk tidrapportering i ByggExp</a>.</p>
<figure class="article-diagram"><img src="/landing/diagrams/tidrapportering-flode.webp" alt="Diagram: digital tidrapportering – checka in, timmar på projekt, granska, export till lön och faktura" width="720" height="380" loading="lazy"><figcaption>Flödet: checka in på bygget, timmarna hamnar på rätt projekt, granska i webbadmin och exportera till lön och faktura.</figcaption></figure>

<h2>Varför en app för tidrapportering i byggföretag</h2>
<p>Tidrapportering i bygg skiljer sig från ett vanligt kontorsjobb: personalen är utspridd på olika arbetsplatser, byter projekt under dagen och sitter sällan vid en dator. Därför måste tidrapporteringen ske i mobilen – där jobbet utförs. En app för tidrapport ger dig:</p>
<ul>
<li><strong>Rätt timmar på rätt projekt</strong> – ingen gissning i efterhand.</li>
<li><strong>Mindre administration</strong> – underlaget skapas automatiskt, inget renskrivande.</li>
<li><strong>Snabbare fakturering och lön</strong> – timmarna är redan strukturerade och redo att exporteras.</li>
<li><strong>Bättre koll på projektekonomin</strong> – du ser nedlagd tid mot budget i realtid.</li>
</ul>

<h2>Manuell vs digital tidrapportering</h2>
<p>Skillnaden märks tydligast i veckoslutet, när underlaget ska bli lön och faktura:</p>
<div class="article-table"><table>
<thead><tr><th>&nbsp;</th><th>Papperslapp / Excel</th><th>App för tidrapportering</th></tr></thead>
<tbody>
<tr><td><strong>När tiden registreras</strong></td><td>I efterhand, av minnet</td><td>När passet sker</td></tr>
<tr><td><strong>Rätt projekt</strong></td><td>Gissning i efterhand</td><td>Väljs vid incheckning</td></tr>
<tr><td><strong>OB, övertid, restid</strong></td><td>Räknas för hand</td><td>Räknas automatiskt</td></tr>
<tr><td><strong>Fakturaunderlag</strong></td><td>Renskrivs manuellt</td><td>Blir fakturarader direkt</td></tr>
<tr><td><strong>Risk för fel</strong></td><td>Hög</td><td>Låg</td></tr>
<tr><td><strong>Tid för administration</strong></td><td>Timmar varje vecka</td><td>Minuter</td></tr>
</tbody>
</table></div>

<h2>Så fungerar digital tidrapportering i mobilen</h2>
<p>Digital tidrapportering betyder att arbetstiden registreras direkt i en app i stället för på papper eller i Excel. I ByggExp går det till så här:</p>
<ol>
<li>Administratören lägger upp projektet och medarbetarna i webbadmin.</li>
<li>Teamet laddar ner appen och checkar in på bygget – GPS bekräftar att de är på plats.</li>
<li>Vid dagens slut checkar var och en ut, och timmarna bokförs automatiskt på projektet.</li>
<li>På kontoret granskas passen och exporteras till lön eller faktura med ett klick.</li>
</ol>
<p>Samma app fungerar på både iPhone och Android, så hela laget kan rapportera tid i mobilen oavsett telefon. Har laget iPhone? Se guiden om <a href="/sv/blog/tidrapport-app-iphone">tidrapport-app för iPhone</a>.</p>

<h2>OB, övertid och restid – räknas rätt automatiskt</h2>
<p>I byggbranschen är det sällan bara ”åtta timmar” som ska rapporteras. Byggavtalet har regler för OB-tillägg, övertid och restidsersättning, och räknar man dem för hand smyger felen in – oftast till företagets nackdel. En app för tidrapportering som känner till reglerna kan flagga övertid, lägga på rätt OB och skilja restid från arbetstid utan att arbetsledaren räknar manuellt. Det ger både korrekt lön och ett fakturaunderlag som håller om beställaren ifrågasätter timmarna.</p>

<h2>Från tid till lön och faktura – ett flöde</h2>
<p>Poängen med digital tidrapportering är att samma timme bara matas in en gång och sedan används överallt. De granskade och attesterade passen blir <a href="/sv/blog/loneunderlag-for-byggforetag">löneunderlag</a>, <a href="/sv/blog/fakturera-fran-byggexp">fakturarader</a> och en post i <a href="/sv/blog/projektekonomi-och-lonsamhet">projektuppföljningen</a> samtidigt. Ska du välja verktyg för hela kedjan? Läs vår guide om <a href="/sv/blog/tidrapporteringssystem-bygg">tidrapporteringssystem för bygg</a>.</p>

<h2>Tidrapportering för hantverkare och entreprenad</h2>
<p>För hantverkare och underentreprenörer är tidrapporteringen ofta grunden för både lön och kundfaktura. En app som kopplar tid till projekt gör att du kan fakturera på loggad tid utan dubbelarbete – timmarna blir automatiskt fakturarader. Läs mer om hur tid blir faktura i vår guide om <a href="/sv/blog/fakturera-fran-byggexp">fakturering från ByggExp</a>.</p>

<h2>Vad du bör titta efter i en app för tidrapport</h2>
<ul>
<li><strong>Enkel in-/utcheckning i mobilen</strong> – hela laget måste orka använda den varje dag.</li>
<li><strong>GPS-stämpling</strong> som bekräftar närvaro på arbetsplatsen.</li>
<li><strong>Koppling till projekt</strong> så timmarna hamnar rätt automatiskt.</li>
<li><strong>Export till lön och faktura</strong> – annars flyttar du bara pappersarbetet.</li>
<li><strong>Fungerar på iPhone och Android.</strong></li>
</ul>

<h2>Kom igång</h2>
<p>Vill du se hur digital tidrapportering fungerar för just ditt byggföretag? <a href="/sv/blog/automatisk-tidrapportering-och-export">Läs om automatisk tidrapportering</a>, ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är en app för tidrapportering?</h3>
<p>En app där personalen registrerar arbetstid direkt i mobilen – checkar in och ut på bygget – så att timmarna automatiskt hamnar på rätt projekt och blir underlag för lön och faktura, utan papperslappar.</p>
<h3>Fungerar tidrapportering i mobilen på både iPhone och Android?</h3>
<p>Ja. ByggExp-appen finns för både iPhone och Android, så hela laget kan rapportera tid oavsett telefon.</p>
<h3>Vad är skillnaden mellan digital tidrapportering och Excel?</h3>
<p>I Excel skrivs timmarna in manuellt i efterhand, ofta av minnet. Digital tidrapportering registrerar tiden när den sker, kopplar den till projekt och skapar underlaget automatiskt – mindre fel och mindre administration.</p>
<h3>Kan tidrapporteringen kopplas till lön och faktura?</h3>
<p>Ja. I ByggExp blir loggade timmar automatiskt underlag för både löneunderlag och fakturarader, så du slipper mata in samma siffror flera gånger.</p>
<h3>Kostar det något att komma igång?</h3>
<p>Du kan ladda ner tidrapport-mallen gratis och boka en kostnadsfri demo för att se hur appen fungerar för ditt företag.</p>
<h3>Hanterar appen OB, övertid och restid?</h3>
<p>Ja. Timmarna kan räknas med rätt OB-tillägg, övertid och restid enligt byggavtalet automatiskt, så att både lön och fakturaunderlag blir korrekta utan handräkning.</p>
<h3>Kräver appen att alla har samma sorts telefon?</h3>
<p>Nej. Appen fungerar på både iPhone och Android med samma funktioner, så hela laget kan rapportera tid oavsett modell.</p>
`.trim();

const A_APP_TIDRAPPORTERING_BYGG: BlogPost = {
  _id: "code-app-for-tidrapportering-bygg",
  title: "App för tidrapportering i byggföretag – så funkar digital tidrapport", slug: "app-for-tidrapportering-bygg", locale: "sv",
  excerpt: "App för tidrapportering i bygg: personalen stämplar in och ut i mobilen, timmarna hamnar på rätt projekt och blir underlag för lön och faktura. Så fungerar digital tidrapportering.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/1arbetspass.webp", contentHtml: A_APP_TIDRAPPORTERING_BYGG_HTML,
  seoTitle: "App för tidrapportering i bygg – GPS, mobil & export | ByggExp", seoDescription: "App för tidrapportering i byggföretag: in- och utcheckning i mobilen med GPS, timmar på rätt projekt, export till lön och faktura. Digital tidrapport för hantverkare och entreprenad.",
  seoImageUrl: `${SITE_URL}/landing/features/1arbetspass.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T09:00:00.000Z", createdAt: "2026-08-22T09:00:00.000Z", updatedAt: "2026-08-22T09:00:00.000Z",
};

const A_STAMPELKLOCKA_APP_GPS_HTML = `
<p>En stämpelklocka på väggen fungerar dåligt när personalen är ute på olika byggen. En stämpelklocka som app löser samma sak i mobilen: medarbetaren stämplar in och ut direkt på arbetsplatsen, och GPS bekräftar att det sker där jobbet utförs. Här går vi igenom hur en stämpelklocka-app med GPS fungerar för byggföretag, och vad du ska tänka på oavsett om laget kör Android eller iPhone.</p>

<p>Vill du se hur det fungerar i praktiken? Läs om <a href="/sv/blog/automatisk-tidrapportering-och-export">automatisk tidrapportering</a> eller <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">närvaro och incheckning på bygget</a>.</p>
<figure class="article-diagram"><img src="/landing/diagrams/stampelklocka-gps.webp" alt="Diagram: stämpelklocka app med GPS – checka in i mobilen, GPS bekräftar arbetsplatsen, närvaro registrerad" width="720" height="380" loading="lazy"><figcaption>Checka in i mobilen, GPS bekräftar arbetsplatsen och närvaron registreras – på både Android och iPhone.</figcaption></figure>

<h2>Vad är en stämpelklocka-app?</h2>
<p>En stämpelklocka-app ersätter den fysiska stämpelklockan med mobilen. I stället för att dra ett kort vid en terminal trycker medarbetaren "Checka in" i appen när arbetsdagen börjar och "Checka ut" när den slutar. Tiden registreras automatiskt och kopplas till rätt projekt.</p>

<h2>Varför GPS på stämpelklockan</h2>
<p>GPS-funktionen bekräftar att incheckningen sker på arbetsplatsen och inte hemifrån soffan. Det ger både arbetsledaren trygghet i att timmarna stämmer och medarbetaren ett enkelt, ärligt sätt att visa närvaro. För byggföretag med personal på flera projekt är GPS-stämpling det som gör mobilstämpling pålitlig.</p>
<ul>
<li>Incheckning knyts till plats – du ser var passet startade.</li>
<li>Närvaron kan användas som underlag för uppföljning och personalliggare.</li>
<li>Mindre diskussion om timmar i efterhand.</li>
</ul>

<h2>Väggterminal, papper eller app – en jämförelse</h2>
<p>Byggföretag har historiskt löst tidsstämplingen på tre sätt. Så här står de sig mot varandra när personalen jobbar på flera arbetsplatser:</p>
<div class="article-table"><table>
<thead><tr><th>&nbsp;</th><th>Papper / Excel</th><th>Väggterminal</th><th>Stämpelklocka-app (ByggExp)</th></tr></thead>
<tbody>
<tr><td><strong>Stämpla var som helst</strong></td><td>Ja, men i efterhand</td><td>Nej – bunden till terminalen</td><td>Ja, direkt på arbetsplatsen</td></tr>
<tr><td><strong>Bekräftad närvaro (GPS)</strong></td><td>Nej</td><td>Bara vid terminalen</td><td>Ja, GPS på incheckning</td></tr>
<tr><td><strong>Koppling till projekt</strong></td><td>Manuell</td><td>Ofta ingen</td><td>Automatisk</td></tr>
<tr><td><strong>Underlag för lön &amp; faktura</strong></td><td>Renskrivs för hand</td><td>Export krävs</td><td>Skapas automatiskt</td></tr>
<tr><td><strong>Kostnad för hårdvara</strong></td><td>Ingen</td><td>Hög (terminal per plats)</td><td>Ingen – telefonen räcker</td></tr>
<tr><td><strong>Passar rörlig byggpersonal</strong></td><td>Delvis</td><td>Dåligt</td><td>Ja</td></tr>
</tbody>
</table></div>
<p>Slutsatsen för de flesta byggföretag är enkel: en app i mobilen ger samma kontroll som en väggterminal utan hårdvara, och till skillnad från papper skapar den underlaget åt dig.</p>

<h2>Stämpelklocka-app för Android och iPhone</h2>
<p>Ett byggteam har sällan samma telefon. Därför ska stämpelklockan finnas för både Android och iPhone, med samma funktion oavsett modell. ByggExp-appen fungerar på båda, så alla i laget kan stämpla in på samma sätt.</p>

<h2>Från stämpling till lön och faktura</h2>
<p>En stämpelklocka är bara halva jobbet – värdet kommer när timmarna används. I ByggExp blir de stämplade timmarna automatiskt underlag för <a href="/sv/blog/loneunderlag-for-byggforetag">löneunderlag</a> och <a href="/sv/blog/fakturera-fran-byggexp">fakturering</a>, och räknas in i <a href="/sv/blog/projektekonomi-och-lonsamhet">projektets ekonomi</a>. Registrera en gång, använd överallt.</p>

<h2>Stämpelklocka och personalliggare</h2>
<p>På bygg- och renoveringsarbetsplatser krävs ofta en <a href="/sv/blog/personalliggare-bygg-app">elektronisk personalliggare</a> där alla som arbetar registreras löpande. En stämpelklocka-app med GPS gör dubbel nytta: samma incheckning som bokför arbetstiden håller också liggaren aktuell i realtid – tillgänglig om Skatteverket gör ett oanmält besök. Kombinerar du det med <a href="/sv/blog/id06-nya-krav-2026-legitimering">ID06</a> har du både korrekt tid och en liggare som klarar en kontroll, utan dubbel administration. Slarv med liggaren är dyrt: läs om <a href="/sv/blog/kontrollavgift-personalliggare">kontrollavgiften för personalliggare</a>.</p>

<h2>Fungerar stämplingen utan täckning?</h2>
<p>Bygg innebär källare, nybyggen och platser med dålig mobiltäckning. En stämpelklocka-app för bygg måste därför kunna registrera in- och utcheckning offline och synka när telefonen får uppkoppling igen. Annars tappar du precis de pass som är svårast att rekonstruera i efterhand.</p>

<h2>Kom igång</h2>
<p>Vill du byta väggklockan mot en app? Ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a>, läs om <a href="/sv/blog/automatisk-tidrapportering-och-export">automatisk tidrapportering</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>. Vill du jämföra alternativ först? Se vår guide om <a href="/sv/blog/tidrapporteringssystem-bygg">tidrapporteringssystem för bygg</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är en stämpelklocka-app?</h3>
<p>En app som ersätter den fysiska stämpelklockan – medarbetaren checkar in och ut i mobilen och tiden registreras automatiskt på rätt projekt.</p>
<h3>Hur fungerar GPS i en stämpelklocka-app?</h3>
<p>När medarbetaren checkar in bekräftar GPS-positionen att det sker på arbetsplatsen. Det gör mobilstämpling pålitlig och minskar diskussioner om timmar i efterhand.</p>
<h3>Finns stämpelklocka-app för både Android och iPhone?</h3>
<p>Ja. ByggExp-appen finns för både Android och iPhone med samma funktion, så hela laget kan stämpla in oavsett telefon.</p>
<h3>Kan stämplad tid användas till lön och faktura?</h3>
<p>Ja. De stämplade timmarna blir automatiskt underlag för löneunderlag och fakturarader och räknas in i projektekonomin.</p>
<h3>Fungerar en stämpelklocka-app som personalliggare?</h3>
<p>Incheckningen kan hålla den elektroniska personalliggaren aktuell i realtid. Tillsammans med ID06 får du både korrekt arbetstid och en liggare som klarar en kontroll från Skatteverket.</p>
<h3>Går det att stämpla in utan mobiltäckning?</h3>
<p>Ja. Stämplingen registreras lokalt i appen och synkas automatiskt när telefonen får uppkoppling igen, så inga pass tappas på platser med dålig täckning.</p>
`.trim();

const A_STAMPELKLOCKA_APP_GPS: BlogPost = {
  _id: "code-stampelklocka-app-gps-bygg",
  title: "Stämpelklocka app med GPS för byggföretag", slug: "stampelklocka-app-gps-bygg", locale: "sv",
  excerpt: "Stämpelklocka som app: personalen checkar in och ut i mobilen och GPS bekräftar närvaron på arbetsplatsen. För både Android och iPhone. Så fungerar det för byggföretag.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_STAMPELKLOCKA_APP_GPS_HTML,
  seoTitle: "Stämpelklocka app med GPS för bygg (Android & iPhone) | ByggExp", seoDescription: "Stämpelklocka som app med GPS för byggföretag: in- och utcheckning i mobilen, närvaro bekräftad på arbetsplatsen, för Android och iPhone. Timmarna blir lön och faktura.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T09:10:00.000Z", createdAt: "2026-08-22T09:10:00.000Z", updatedAt: "2026-08-22T09:10:00.000Z",
};

const A_TIDRAPPORTERINGSSYSTEM_BYGG_HTML = `
<p>När företaget växer räcker det inte längre med lappar och Excel. Ett tidrapporteringssystem samlar all tidsregistrering på ett ställe: timmarna registreras i mobilen, samlas per projekt och medarbetare, och blir färdig tidredovisning för lön, faktura och uppföljning. Här går vi igenom vad ett tidrapporteringssystem för bygg bör klara – och varför "enkelt" ofta slår "avancerat".</p>

<p>Vill du komma igång snabbt? Ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> eller läs om <a href="/sv/blog/automatisk-tidrapportering-och-export">automatisk tidrapportering och export</a>.</p>
<figure class="article-diagram"><img src="/landing/diagrams/tidrapporteringssystem.webp" alt="Diagram: tidsregistrering, tidrapportering och tidredovisning i tre steg" width="720" height="380" loading="lazy"><figcaption>Tre steg i ett system: tidsregistrering (stämpling), tidrapportering (koppling till projekt) och tidredovisning (underlag för lön och faktura).</figcaption></figure>

<h2>Vad är ett tidrapporteringssystem?</h2>
<p>Ett tidrapporteringssystem är verktyget som hanterar hela flödet från registrerad tid till färdigt underlag. Skillnaden mot en enskild stämpelklocka är att systemet också strukturerar, summerar och exporterar tiden – tidsregistrering, tidrapportering och tidredovisning i samma kedja.</p>

<h2>Tidsregistrering, tidrapportering och tidredovisning – vad är skillnaden?</h2>
<ul>
<li><strong>Tidsregistrering</strong> – själva stämplingen: när någon börjar och slutar arbeta.</li>
<li><strong>Tidrapportering</strong> – timmarna kopplas till projekt och aktivitet.</li>
<li><strong>Tidredovisning</strong> – det sammanställda underlaget som går till lön, faktura och uppföljning.</li>
</ul>
<p>Ett bra system tar dig genom alla tre stegen utan att du matar in samma siffra två gånger.</p>

<h2>Varför ett enkelt tidrapporteringssystem oftast vinner</h2>
<p>Det mest avancerade systemet är värdelöst om laget inte orkar använda det. Ett enkelt tidrapporteringssystem – där man bara checkar in och ut i mobilen – får hög följsamhet, och det är följsamheten som avgör om siffrorna stämmer. Leta efter appar som personalen kan börja använda samma dag, utan utbildning.</p>

<h2>Tecken på att du vuxit ur Excel</h2>
<p>En <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> räcker långt för den minsta firman. Men flera av de här signalerna betyder att det är dags för ett riktigt system:</p>
<ul>
<li>Du lägger timmar varje vecka på att renskriva och räkna ihop tid.</li>
<li>Timmar hamnar på fel projekt – eller glöms bort helt.</li>
<li>Du kan inte se nedlagd tid mot budget förrän projektet är klart.</li>
<li>Löne- och fakturaunderlaget bygger på minne i stället för data.</li>
<li>Fler än ett par personer ska rapportera, på olika arbetsplatser.</li>
</ul>

<h2>Kalkylark vs tidrapporteringssystem</h2>
<div class="article-table"><table>
<thead><tr><th>&nbsp;</th><th>Excel / mall</th><th>Tidrapporteringssystem</th></tr></thead>
<tbody>
<tr><td><strong>Registrering</strong></td><td>Manuell, i efterhand</td><td>I mobilen, när passet sker</td></tr>
<tr><td><strong>Projektkoppling</strong></td><td>Skrivs in för hand</td><td>Automatisk</td></tr>
<tr><td><strong>Sammanställning</strong></td><td>Formler du underhåller</td><td>Klar per medarbetare och period</td></tr>
<tr><td><strong>Lön &amp; faktura</strong></td><td>Kopiera och klistra</td><td>Export med ett klick</td></tr>
<tr><td><strong>Tid mot budget</strong></td><td>Svår att få fram</td><td>I realtid</td></tr>
<tr><td><strong>Skalar med teamet</strong></td><td>Nej</td><td>Ja</td></tr>
</tbody>
</table></div>

<h2>Så byter du från Excel till ett system</h2>
<p>Bytet behöver inte vara dramatiskt. Lägg upp pågående projekt och medarbetare i webbadmin, låt laget ladda ner appen och börja checka in – och kör mallen parallellt någon vecka tills alla är trygga. Eftersom ett enkelt system inte kräver utbildning är övergången oftast klar på dagar, inte månader.</p>

<h2>Vad ett tidrapporteringssystem för bygg bör klara</h2>
<ul>
<li>Enkel tidsregistrering i mobilen (iPhone och Android), gärna med GPS.</li>
<li>Automatisk koppling till rätt projekt.</li>
<li>Sammanställd tidredovisning per medarbetare och period.</li>
<li>Export till lön och faktura.</li>
<li>Koppling till <a href="/sv/blog/projektekonomi-och-lonsamhet">projektekonomin</a> så du ser tid mot budget.</li>
</ul>

<h2>Kom igång</h2>
<p>Vill du se ett enkelt tidrapporteringssystem för bygg i praktiken? <a href="/sv/blog/automatisk-tidrapportering-och-export">Läs om automatisk tidrapportering</a>, ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är ett tidrapporteringssystem?</h3>
<p>Ett verktyg som hanterar hela flödet från registrerad tid till färdigt underlag – tidsregistrering, tidrapportering och tidredovisning på ett ställe, med export till lön och faktura.</p>
<h3>Vad är skillnaden mellan tidsregistrering och tidredovisning?</h3>
<p>Tidsregistrering är själva stämplingen (när man börjar och slutar). Tidredovisning är det sammanställda underlaget som går till lön, faktura och uppföljning. Ett tidrapporteringssystem kopplar ihop dem.</p>
<h3>Behöver ett litet byggföretag ett tidrapporteringssystem?</h3>
<p>Ja, ofta redan från ett par anställda. Ett enkelt system minskar administration och fel, och ger korrekt underlag för lön och faktura direkt.</p>
<h3>Vad kännetecknar ett enkelt tidrapporteringssystem?</h3>
<p>Att personalen bara checkar in och ut i mobilen utan utbildning. Hög följsamhet är viktigare än många funktioner – det är det som gör att siffrorna stämmer.</p>
<h3>När ska man byta från Excel till ett tidrapporteringssystem?</h3>
<p>När du lägger tid varje vecka på att renskriva timmar, när timmar hamnar fel eller glöms, eller när fler än ett par personer ska rapportera från olika arbetsplatser. Då tjänar ett system snabbt in sig.</p>
<h3>Hur lång tid tar det att komma igång?</h3>
<p>Ett enkelt system kräver ingen utbildning – lägg upp projekt och medarbetare, låt laget ladda ner appen och börja checka in. Övergången är oftast klar på dagar.</p>
`.trim();

const A_TIDRAPPORTERINGSSYSTEM_BYGG: BlogPost = {
  _id: "code-tidrapporteringssystem-bygg",
  title: "Tidrapporteringssystem för bygg – tidsregistrering och tidredovisning", slug: "tidrapporteringssystem-bygg", locale: "sv",
  excerpt: "Ett tidrapporteringssystem samlar tidsregistrering, tidrapportering och tidredovisning på ett ställe – timmar i mobilen, färdigt underlag för lön och faktura. Så väljer du rätt.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/1arbetspass.webp", contentHtml: A_TIDRAPPORTERINGSSYSTEM_BYGG_HTML,
  seoTitle: "Tidrapporteringssystem för bygg – tidsregistrering | ByggExp", seoDescription: "Tidrapporteringssystem för byggföretag: tidsregistrering i mobilen, tidredovisning per projekt och export till lön och faktura. Så väljer du ett enkelt system som laget använder.",
  seoImageUrl: `${SITE_URL}/landing/features/1arbetspass.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T09:20:00.000Z", createdAt: "2026-08-22T09:20:00.000Z", updatedAt: "2026-08-22T09:20:00.000Z",
};

const A_PROJEKTUPPFOLJNING_BYGG_HTML = `
<p>Ett byggprojekt kan se lönsamt ut ända till slutfakturan – och sedan visa sig ha ätit upp marginalen i övertid och extra material. Projektuppföljning handlar om att se det i tid: följa tid, kostnader och lönsamhet löpande i stället för i efterhand. Här går vi igenom hur du följer upp byggprojekt i praktiken och vilka siffror du bör hålla koll på.</p>

<p>Grunden för bra uppföljning är korrekt indata. Se till att laget loggar tid via <a href="/sv/blog/automatisk-tidrapportering-och-export">automatisk tidrapportering</a> och registrerar <a href="/sv/blog/fota-kvitton-och-hantera-utlagg">kvitton och utlägg</a> löpande.</p>
<figure class="article-diagram"><img src="/landing/diagrams/projektuppfoljning.webp" alt="Diagram: projektuppföljning – följ timmar, kostnader, fakturerat och marginal mot budget i realtid" width="720" height="380" loading="lazy"><figcaption>Följ timmar, kostnader, fakturerat och marginal mot budget löpande – så hinner du agera innan budgettaket.</figcaption></figure>

<h2>Vad är projektuppföljning i bygg?</h2>
<p>Projektuppföljning betyder att du löpande jämför utfall mot plan: nedlagda timmar mot budgeterade, kostnader mot budget och fakturerat mot kontrakt. Målet är att upptäcka avvikelser medan du fortfarande kan agera – inte när projektet är klart.</p>

<h2>Siffrorna du bör följa</h2>
<div class="article-table"><table>
<thead><tr><th>Nyckeltal</th><th>Vad det visar</th><th>Varningssignal</th></tr></thead>
<tbody>
<tr><td><strong>Timmar mot budget</strong></td><td>Andel av planerad tid som är förbrukad</td><td>Timmarna springer ifrån färdigställandegraden</td></tr>
<tr><td><strong>Kostnader mot budget</strong></td><td>Arbete, material och utlägg mot plan</td><td>Materialkostnaden överstiger kalkylen</td></tr>
<tr><td><strong>Fakturerat mot kontrakt</strong></td><td>Andel av kontraktssumman som fakturerats</td><td>Nedlagt arbete är inte fakturerat</td></tr>
<tr><td><strong>Marginal</strong></td><td>Fakturerat minus kostnader, kr och %</td><td>Marginalen krymper projekt för projekt</td></tr>
</tbody>
</table></div>

<h2>Så följer du upp projekt i realtid</h2>
<p>Poängen med digital projektuppföljning är att siffrorna uppdateras av det laget redan gör. När tid, material och kvitton registreras löpande i mobilen ser du <a href="/sv/blog/projektekonomi-och-lonsamhet">projektets ekonomi</a> mot budget i realtid – utan att sammanställa något manuellt. Då hinner du agera på projekt som närmar sig budgettaket: justera bemanning, ÄTA-fakturera eller stämma av med kunden.</p>

<h2>Från uppföljning till bättre kalkyler</h2>
<p>Uppföljningen är också din bästa lärdom inför nästa anbud. När projektet är klart jämför du utfallet mot kalkylen i en <a href="/sv/blog/efterkalkyl-bygg-kalkyluppfoljning">efterkalkyl</a> – då ser du vilka moment som konsekvent kostar mer än planerat och kan prisa nästa jobb rätt. Bra tidrapportering är förutsättningen: utan korrekta timmar blir efterkalkylen en gissning.</p>

<h2>Kom igång</h2>
<p>Vill du följa dina byggprojekt i realtid? Läs om <a href="/sv/blog/projektekonomi-och-lonsamhet">projektekonomi och lönsamhet</a>, ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är projektuppföljning i bygg?</h3>
<p>Att löpande jämföra utfall mot plan – timmar, kostnader och fakturerat mot budget och kontrakt – så att du upptäcker avvikelser medan du fortfarande kan påverka resultatet.</p>
<h3>Vilka siffror är viktigast att följa i ett byggprojekt?</h3>
<p>Timmar mot budget, kostnader mot budget, fakturerat mot kontrakt och marginalen i kronor och procent.</p>
<h3>Hur får jag projektuppföljning i realtid?</h3>
<p>Genom att tid, material och kvitton registreras löpande i mobilen. Då uppdateras projektekonomin automatiskt och du ser utfall mot budget utan manuell sammanställning.</p>
<h3>Vad är kopplingen mellan tidrapportering och projektuppföljning?</h3>
<p>Tidrapporteringen är den viktigaste indatan. Utan korrekta timmar per projekt går det inte att följa timmar mot budget eller räkna marginal – därför är bra tidrapportering förutsättningen för uppföljning i realtid.</p>
`.trim();

const A_PROJEKTUPPFOLJNING_BYGG: BlogPost = {
  _id: "code-projektuppfoljning-bygg",
  title: "Projektuppföljning i bygg – tid, kostnader och lönsamhet i realtid", slug: "projektuppfoljning-bygg", locale: "sv",
  excerpt: "Projektuppföljning i bygg: följ timmar mot budget, kostnader och marginal löpande i stället för i efterhand. Så följer du upp byggprojekt i realtid och räddar marginalen.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_PROJEKTUPPFOLJNING_BYGG_HTML,
  seoTitle: "Projektuppföljning bygg – följ tid, kostnad & marginal | ByggExp", seoDescription: "Projektuppföljning i bygg: följ timmar mot budget, kostnader och marginal i realtid. Upptäck avvikelser i tid och rädda lönsamheten i dina byggprojekt.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T09:30:00.000Z", createdAt: "2026-08-22T09:30:00.000Z", updatedAt: "2026-08-22T09:30:00.000Z",
};

// --- Supporting articles for the tidrapportering cluster ---------------------

const S_TIDRAPPORTERING_HANTVERKARE_HTML = `
<p>För en hantverkare är timmarna själva grunden för intäkten – både lönen och kundfakturan bygger på dem. Ändå förs tiden ofta på lappar eller i minnet, och då läcker det pengar. Tidrapportering för hantverkare handlar om att fånga varje timme där jobbet görs och koppla den till rätt kund, så att du kan fakturera allt du faktiskt arbetat. Den här guiden är skriven för mindre firmor och enmansföretagare.</p>
<p>Läs den större bilden i vår guide om <a href="/sv/blog/app-for-tidrapportering-bygg">app för tidrapportering i bygg</a>, eller ladda ner en gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a>.</p>

<figure class="article-diagram"><img src="/landing/diagrams/tidrapportering-flode.webp" alt="Diagram: digital tidrapportering – checka in, timmar på projekt, granska, export till lön och faktura" width="720" height="380" loading="lazy"><figcaption>Från incheckning till faktura: timmarna hamnar på rätt kund och blir underlag för lön och ROT-faktura.</figcaption></figure>
<h2>Varför tidrapportering är extra viktigt för hantverkare</h2>
<p>Som hantverkare är du ofta både utförare och fakturerare. Missar du en timme finns ingen administratör som fångar den – den är bara borta. Med tidrapportering i mobilen registreras timmarna löpande, per kund och jobb, så att inget faller mellan stolarna.</p>

<h2>Var de debiterbara timmarna läcker</h2>
<p>De flesta hantverkare underdebiterar utan att märka det. Timmarna försvinner på små ställen som summerar till mycket pengar över ett år:</p>
<div class="article-table"><table>
<thead><tr><th>Tidstjuv</th><th>Vad som händer</th></tr></thead>
<tbody>
<tr><td><strong>Kort besök</strong></td><td>En halvtimme hos kund glöms bort helt</td></tr>
<tr><td><strong>Restid</strong></td><td>Körning mellan jobb faktureras inte</td></tr>
<tr><td><strong>Fredagsminnet</strong></td><td>Veckans timmar skrivs av minnet – rundas nedåt</td></tr>
<tr><td><strong>Fel kund</strong></td><td>Timmar hamnar på fel jobb och faktureras aldrig</td></tr>
<tr><td><strong>Extraarbete/ÄTA</strong></td><td>Tillägg utförs men glöms i fakturan</td></tr>
</tbody>
</table></div>
<p>Med incheckning per jobb i mobilen fångas varje timme där den sker – och blir fakturerbar.</p>

<h2>Från timme till ROT-faktura</h2>
<p>När tiden är kopplad till kund och jobb kan den bli fakturarad direkt – inklusive underlag för <a href="/sv/blog/rot-avdrag">ROT-avdrag</a>. Du slipper räkna ihop lappar på kvällen och kan skicka fakturan samma vecka som jobbet är klart. Läs mer om <a href="/sv/blog/fakturera-fran-byggexp">fakturering från loggad tid</a>.</p>

<h2>Enkelt nog att laget faktiskt använder det</h2>
<p>För en liten firma är följsamhet allt. Välj en app där man bara checkar in och ut – ingen utbildning, ingen dator. Fungerar på både iPhone och Android.</p>

<h2>Kom igång</h2>
<p>Vill du fånga varje debiterbar timme? Läs om <a href="/sv/blog/app-for-tidrapportering-bygg">app för tidrapportering</a>, ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> eller <a href="/sv/contact">boka en demo</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Hur sköter en enmansföretagare tidrapportering enklast?</h3>
<p>Genom att checka in och ut i mobilen per jobb. Då registreras timmarna löpande och blir automatiskt underlag för både lön och kundfaktura, utan lappar.</p>
<h3>Kan tidrapporteringen kopplas till ROT-avdrag?</h3>
<p>Ja. När timmarna är kopplade till kund och jobb blir de underlag för fakturan, inklusive ROT, så du kan fakturera rätt belopp direkt.</p>
<h3>Behöver jag en dator för att rapportera tid?</h3>
<p>Nej. Allt sker i mobilen – du checkar in på plats och ser dina timmar direkt. Uppföljning och export kan sedan göras i webben.</p>
<h3>Hur mycket tid tjänar en enmansfirma på digital tidrapportering?</h3>
<p>Dels sparad administration – ingen ihopräkning på kvällen – dels fler fakturerade timmar, eftersom korta besök, restid och ÄTA inte längre glöms bort. För många firmor är det den mest lönsamma effekten.</p>
`.trim();

const S_TIDRAPPORTERING_HANTVERKARE: BlogPost = {
  _id: "code-tidrapportering-hantverkare",
  title: "Tidrapportering för hantverkare – fånga varje debiterbar timme", slug: "tidrapportering-hantverkare", locale: "sv",
  excerpt: "Tidrapportering för hantverkare och enmansföretag: registrera timmar i mobilen per kund och jobb, och gör dem till lön och ROT-faktura utan lappar.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/1arbetspass.webp", contentHtml: S_TIDRAPPORTERING_HANTVERKARE_HTML,
  seoTitle: "Tidrapportering för hantverkare – app för timmar & ROT | ByggExp", seoDescription: "Tidrapportering för hantverkare: fånga varje debiterbar timme i mobilen, koppla till kund och jobb och gör den till lön och ROT-faktura. Enkelt för mindre firmor.",
  seoImageUrl: `${SITE_URL}/landing/features/1arbetspass.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T10:00:00.000Z", createdAt: "2026-08-22T10:00:00.000Z", updatedAt: "2026-08-22T10:00:00.000Z",
};

const S_TIDRAPPORTERING_ENTREPRENAD_HTML = `
<p>I en entreprenad passerar timmarna flera händer: underentreprenören rapporterar, huvudentreprenören attesterar och beställaren vill se underlag. Tidrapportering för entreprenad handlar om att göra den kedjan spårbar – rätt timmar, rätt projekt, rätt godkännande. Här går vi igenom hur du håller ordning på tid i entreprenader.</p>
<p>Se helheten i vår guide om <a href="/sv/blog/app-for-tidrapportering-bygg">app för tidrapportering i bygg</a>.</p>

<figure class="article-diagram"><img src="/landing/diagrams/projektuppfoljning.webp" alt="Diagram: projektuppföljning – följ timmar, kostnader, fakturerat och marginal mot budget" width="720" height="380" loading="lazy"><figcaption>Rapporterade timmar räknas in i projektuppföljningen – tid mot budget medan entreprenaden pågår.</figcaption></figure>
<h2>Tid som underlag i entreprenader</h2>
<p>När flera aktörer arbetar på samma projekt måste tiden gå att härleda: vem, när, vilket projekt. Digital tidrapportering med incheckning och koppling till projekt ger dig det underlaget automatiskt – användbart både för fakturering på löpande räkning och för avstämning med beställaren.</p>

<h2>Löpande räkning ställer högre krav på tiden</h2>
<p>Faktureras entreprenaden på löpande räkning är tidsunderlaget själva fakturan – då måste varje timme kunna styrkas. Beställare granskar ofta underlag noggrant, och saknas spårbarhet kan timmar strykas. Digitalt registrerade timmar per projekt, med tidpunkt och person, ger ett underlag som håller. Detsamma gäller <a href="/sv/blog/ata-hantering-mall">ÄTA-arbeten</a>: extra arbete som inte kopplas till rätt post riskerar att aldrig bli betalt.</p>

<h2>Attestering och kontroll</h2>
<p>Innan timmar faktureras eller betalas bör de attesteras. Ett system där arbetsledaren granskar och godkänner passen innan de låses ger kontroll och minskar tvister om timmar i efterhand.</p>

<h2>Koppling till projektekonomi</h2>
<p>Rapporterade timmar bör räknas in i <a href="/sv/blog/projektuppfoljning-bygg">projektuppföljningen</a> så att du ser nedlagd tid mot budget medan projektet pågår, inte efteråt.</p>

<h2>Kom igång</h2>
<p>Vill du ha spårbar tidrapportering i dina entreprenader? Läs om <a href="/sv/blog/automatisk-tidrapportering-och-export">automatisk tidrapportering</a> eller <a href="/sv/contact">boka en demo</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Hur hanteras tidrapportering mellan huvud- och underentreprenör?</h3>
<p>Genom att varje aktör rapporterar sina timmar kopplade till projektet, och arbetsledaren attesterar innan de låses. Då blir underlaget spårbart för både fakturering och avstämning.</p>
<h3>Kan rapporterad tid användas som underlag mot beställaren?</h3>
<p>Ja. Digitalt registrerade och attesterade timmar per projekt fungerar som underlag vid löpande räkning och avstämning med beställaren.</p>
<h3>Hur säkerställer man att ÄTA-timmar faktureras?</h3>
<p>Genom att koppla tiden till rätt post redan vid registreringen och attestera den. Då blir extra arbete spårbart och glöms inte bort när fakturan för entreprenaden ställs ut.</p>
`.trim();

const S_TIDRAPPORTERING_ENTREPRENAD: BlogPost = {
  _id: "code-tidrapportering-entreprenad",
  title: "Tidrapportering för entreprenad – spårbara timmar och attestering", slug: "tidrapportering-entreprenad", locale: "sv",
  excerpt: "Tidrapportering i entreprenader: rapportera per projekt, attestera innan låsning och få spårbart underlag för fakturering och avstämning med beställaren.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: S_TIDRAPPORTERING_ENTREPRENAD_HTML,
  seoTitle: "Tidrapportering för entreprenad – attestering | ByggExp", seoDescription: "Tidrapportering för entreprenad: spårbara timmar per projekt, attestering före låsning och underlag för fakturering på löpande räkning och avstämning med beställaren.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T10:05:00.000Z", createdAt: "2026-08-22T10:05:00.000Z", updatedAt: "2026-08-22T10:05:00.000Z",
};

const S_MOBIL_TIDRAPPORTERING_HTML = `
<p>Bygglaget sitter inte vid en dator – de är på taket, i schaktet eller på väg till nästa jobb. Därför måste tidrapporteringen ske i mobilen. Mobil tidrapportering betyder att timmarna registreras där och när jobbet görs, i stället för att skrivas av minnet på kontoret. Här går vi igenom varför mobilen slår både papper och terminal.</p>
<p>Se hela bilden i vår guide om <a href="/sv/blog/app-for-tidrapportering-bygg">app för tidrapportering i bygg</a>.</p>

<figure class="article-diagram"><img src="/landing/diagrams/tidrapportering-flode.webp" alt="Diagram: mobil tidrapportering – checka in, timmar på projekt, granska, export" width="720" height="380" loading="lazy"><figcaption>Allt sker i mobilen: checka in på bygget, timmarna kopplas till projektet och exporteras till lön och faktura.</figcaption></figure>
<h2>Varför mobilen slår papper och väggterminal</h2>
<ul>
<li><strong>Tiden fångas när den sker</strong> – inte i efterhand, färre fel.</li>
<li><strong>Fungerar på alla arbetsplatser</strong> – ingen terminal att gå till.</li>
<li><strong>Hela laget rapporterar likadant</strong> – på både iPhone och Android.</li>
<li><strong>GPS bekräftar närvaro</strong> på plats.</li>
</ul>

<h2>Så fungerar tidrapportering i mobilen</h2>
<p>Medarbetaren checkar in vid arbetsdagens start och ut vid slutet. Timmarna kopplas automatiskt till projektet och blir underlag för lön och faktura. Läs mer om <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">närvaro och incheckning</a>.</p>

<h2>Så får du hela laget att rapportera</h2>
<p>Mobil tidrapportering står och faller med följsamheten – rapporterar bara halva laget är siffrorna värdelösa. Nyckeln är att göra det så enkelt att ingen kan skylla på krångel: två tryck för in- och utcheckning, ingen inloggning varje gång, och påminnelse om man glömmer checka ut. Börja med ett projekt, visa laget att timmarna hamnar rätt, och rulla ut brett först när flödet sitter.</p>

<h2>Vad byggföretaget vinner</h2>
<p>När tiden fångas i mobilen minskar administrationen på kontoret, fakturor kan skickas snabbare och du ser nedlagd tid mot budget medan projektet pågår – inte efteråt. Det är samma data som driver <a href="/sv/blog/loneunderlag-for-byggforetag">löneunderlaget</a> och <a href="/sv/blog/projektuppfoljning-bygg">projektuppföljningen</a>.</p>

<h2>Kom igång</h2>
<p>Vill du flytta tidrapporteringen till mobilen? Ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> eller <a href="/sv/contact">boka en demo</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är mobil tidrapportering?</h3>
<p>Att arbetstiden registreras direkt i mobilen där jobbet utförs – medarbetaren checkar in och ut – i stället för på papper eller vid en terminal.</p>
<h3>Fungerar mobil tidrapportering utan täckning?</h3>
<p>Incheckningen kan göras i appen och synkas när telefonen får uppkoppling, så att timmarna inte tappas bort på platser med dålig täckning.</p>
<h3>Hur får man hela laget att faktiskt rapportera i mobilen?</h3>
<p>Genom att göra det så enkelt som möjligt – två tryck för in- och utcheckning, ingen inloggning varje gång och påminnelser. Börja med ett projekt och rulla ut brett först när flödet sitter.</p>
`.trim();

const S_MOBIL_TIDRAPPORTERING: BlogPost = {
  _id: "code-mobil-tidrapportering",
  title: "Mobil tidrapportering – rapportera tid i mobilen på bygget", slug: "mobil-tidrapportering", locale: "sv",
  excerpt: "Mobil tidrapportering: registrera arbetstid i mobilen där jobbet görs i stället för på papper eller terminal. Varför mobilen slår båda – för hela bygglaget.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/1arbetspass.webp", contentHtml: S_MOBIL_TIDRAPPORTERING_HTML,
  seoTitle: "Mobil tidrapportering för bygg – tid i mobilen | ByggExp", seoDescription: "Mobil tidrapportering för bygg: registrera arbetstid i mobilen där jobbet görs, med GPS och koppling till projekt. Slår både papper och väggterminal.",
  seoImageUrl: `${SITE_URL}/landing/features/1arbetspass.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T10:10:00.000Z", createdAt: "2026-08-22T10:10:00.000Z", updatedAt: "2026-08-22T10:10:00.000Z",
};

const S_STAMPELKLOCKA_ANDROID_HTML = `
<p>Kör laget Android-telefoner? Då vill du ha en stämpelklocka-app som fungerar smidigt på Android, med GPS och koppling till projekt. Här går vi igenom vad du ska tänka på när du väljer en stämpelklocka-app för Android till byggföretaget.</p>
<p>Se hela guiden om <a href="/sv/blog/stampelklocka-app-gps-bygg">stämpelklocka app med GPS</a>.</p>

<figure class="article-diagram"><img src="/landing/diagrams/stampelklocka-gps.webp" alt="Diagram: stämpelklocka app med GPS – checka in i mobilen, GPS bekräftar arbetsplatsen" width="720" height="380" loading="lazy"><figcaption>Checka in i mobilen, GPS bekräftar arbetsplatsen – samma flöde på Android som på iPhone.</figcaption></figure>
<h2>Stämpelklocka-app på Android</h2>
<p>På Android laddar medarbetaren ner appen, loggar in och checkar in med ett tryck. GPS bekräftar arbetsplatsen. Eftersom byggteam ofta blandar telefonmodeller är det viktigt att appen fungerar likadant på alla Android-enheter – och på iPhone för dem som har det.</p>

<h2>Så kommer du igång på Android</h2>
<ol>
<li>Ladda ner ByggExp från Google Play.</li>
<li>Logga in med kontot du fått av arbetsledaren.</li>
<li>Tillåt platsåtkomst så GPS kan bekräfta arbetsplatsen vid incheckning.</li>
<li>Tryck "Checka in" när passet börjar – och "Checka ut" när det slutar.</li>
</ol>
<p>Ett tips på Android: undanta appen från aggressiv batterioptimering på vissa telefonmodeller, så att incheckning och synk inte stoppas i bakgrunden.</p>

<h2>Att tänka på</h2>
<ul>
<li>Enkel in-/utcheckning – hela laget måste orka använda den.</li>
<li>GPS-stämpling som bekräftar närvaro.</li>
<li>Koppling till projekt så timmarna hamnar rätt.</li>
<li>Fungerar offline och synkar när täckningen kommer tillbaka.</li>
<li>Export till lön och faktura.</li>
</ul>
<p>Vill du förstå hela flödet? Se guiden om <a href="/sv/blog/stampelklocka-app-gps-bygg">stämpelklocka app med GPS</a> och om <a href="/sv/blog/tidsregistrering-app-bygg">tidsregistrering-app för bygg</a>.</p>

<h2>Kom igång</h2>
<p>Läs mer om <a href="/sv/blog/stampelklocka-app-gps-bygg">stämpelklocka med GPS</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Finns det en stämpelklocka-app för Android?</h3>
<p>Ja. ByggExp-appen finns för Android och låter medarbetaren checka in och ut med GPS, med timmarna kopplade till rätt projekt.</p>
<h3>Fungerar samma app om någon i laget har iPhone?</h3>
<p>Ja. Appen finns för både Android och iPhone med samma funktion, så hela laget kan stämpla in oavsett telefon.</p>
<h3>Varför ska jag tillåta platsåtkomst på Android?</h3>
<p>Platsåtkomsten låter GPS bekräfta att incheckningen sker på arbetsplatsen. Positionen används vid stämplingstillfället för att styrka närvaro, inte för löpande spårning.</p>
`.trim();

const S_STAMPELKLOCKA_ANDROID: BlogPost = {
  _id: "code-stampelklocka-app-android",
  title: "Stämpelklocka app för Android – för byggföretag", slug: "stampelklocka-app-android", locale: "sv",
  excerpt: "Stämpelklocka-app för Android: checka in och ut i mobilen med GPS, timmar kopplade till projekt. Så väljer du rätt app för bygglaget.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: S_STAMPELKLOCKA_ANDROID_HTML,
  seoTitle: "Stämpelklocka app för Android – bygg, med GPS | ByggExp", seoDescription: "Stämpelklocka-app för Android till byggföretag: in- och utcheckning i mobilen med GPS och koppling till projekt. Fungerar även på iPhone.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T10:15:00.000Z", createdAt: "2026-08-22T10:15:00.000Z", updatedAt: "2026-08-22T10:15:00.000Z",
};

const S_STAMPELKLOCKA_IPHONE_HTML = `
<p>Har laget iPhone? Då vill du ha en stämpelklocka-app som känns hemma på iOS och som checkar in med GPS. Här går vi igenom vad som är viktigt när du väljer en stämpelklocka-app för iPhone till byggföretaget.</p>
<p>Se hela guiden om <a href="/sv/blog/stampelklocka-app-gps-bygg">stämpelklocka app med GPS</a>.</p>

<figure class="article-diagram"><img src="/landing/diagrams/stampelklocka-gps.webp" alt="Diagram: stämpelklocka app med GPS på iPhone – checka in, GPS bekräftar arbetsplatsen" width="720" height="380" loading="lazy"><figcaption>Checka in i mobilen, GPS bekräftar arbetsplatsen – samma flöde på iPhone som på Android.</figcaption></figure>
<h2>Stämpelklocka-app på iPhone</h2>
<p>På iPhone laddar medarbetaren ner appen från App Store, loggar in och checkar in med ett tryck. GPS bekräftar att incheckningen sker på arbetsplatsen. Timmarna kopplas till projektet och blir underlag för lön och faktura.</p>

<h2>Så kommer du igång på iPhone</h2>
<ol>
<li>Ladda ner ByggExp från App Store.</li>
<li>Logga in med kontot du fått av arbetsledaren.</li>
<li>Välj "Tillåt när appen används" för platstjänster så GPS kan bekräfta arbetsplatsen.</li>
<li>Tryck "Checka in" när passet börjar – och "Checka ut" när det slutar.</li>
</ol>
<p>På iPhone räcker det att tillåta platstjänster medan appen används – appen behöver inte spåra din position i bakgrunden för att stämplingen ska fungera.</p>

<h2>Att tänka på</h2>
<ul>
<li>Enkel in-/utcheckning direkt i appen.</li>
<li>GPS-stämpling som bekräftar närvaro.</li>
<li>Samma funktion även på Android för dem i laget som har det.</li>
<li>Fungerar offline och synkar när täckningen kommer tillbaka.</li>
<li>Export till lön och faktura.</li>
</ul>
<p>Vill du förstå hela flödet? Se guiden om <a href="/sv/blog/stampelklocka-app-gps-bygg">stämpelklocka app med GPS</a> och om <a href="/sv/blog/tidrapport-app-iphone">tidrapport-app för iPhone</a>.</p>

<h2>Kom igång</h2>
<p>Läs mer om <a href="/sv/blog/stampelklocka-app-gps-bygg">stämpelklocka med GPS</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Finns det en stämpelklocka-app för iPhone?</h3>
<p>Ja. ByggExp-appen finns för iPhone och låter medarbetaren checka in och ut med GPS, med timmarna kopplade till rätt projekt.</p>
<h3>Fungerar samma app på Android?</h3>
<p>Ja. Appen finns för både iPhone och Android med samma funktion, så hela laget kan stämpla in oavsett telefon.</p>
<h3>Vilken platsbehörighet behöver appen på iPhone?</h3>
<p>Det räcker med "Tillåt när appen används". GPS bekräftar arbetsplatsen vid incheckning – appen behöver inte spåra positionen i bakgrunden.</p>
`.trim();

const S_STAMPELKLOCKA_IPHONE: BlogPost = {
  _id: "code-stampelklocka-app-iphone",
  title: "Stämpelklocka app för iPhone – för byggföretag", slug: "stampelklocka-app-iphone", locale: "sv",
  excerpt: "Stämpelklocka-app för iPhone: checka in och ut i mobilen med GPS, timmar kopplade till projekt. Så väljer du rätt app för bygglaget.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: S_STAMPELKLOCKA_IPHONE_HTML,
  seoTitle: "Stämpelklocka app för iPhone – bygg, med GPS | ByggExp", seoDescription: "Stämpelklocka-app för iPhone till byggföretag: in- och utcheckning i mobilen med GPS och koppling till projekt. Fungerar även på Android.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T10:20:00.000Z", createdAt: "2026-08-22T10:20:00.000Z", updatedAt: "2026-08-22T10:20:00.000Z",
};

const S_TIDSREGISTRERING_APP_BYGG_HTML = `
<p>Tidsregistrering är själva grunden: att fånga när personalen börjar och slutar arbeta. För byggföretag måste det ske i mobilen, ute på arbetsplatsen. En app för tidsregistrering ger korrekta arbetstider utan lappar – underlag som sedan blir lön, faktura och uppföljning. Här går vi igenom vad en tidsregistrering-app för bygg bör klara.</p>
<p>Se helheten i vår guide om <a href="/sv/blog/tidrapporteringssystem-bygg">tidrapporteringssystem för bygg</a>.</p>

<figure class="article-diagram"><img src="/landing/diagrams/tidrapporteringssystem.webp" alt="Diagram: tidsregistrering, tidrapportering och tidredovisning i tre steg" width="720" height="380" loading="lazy"><figcaption>Tidsregistrering är första steget: stämpling → rapportering → redovisning.</figcaption></figure>
<h2>Vad är tidsregistrering?</h2>
<p>Tidsregistrering är att registrera arbetstidens början och slut. Det är första steget i kedjan tidsregistrering → tidrapportering → tidredovisning. I en app sker det med in- och utcheckning i mobilen, gärna med GPS.</p>

<h2>Tidsregistrering app för bygg – vad som är viktigt</h2>
<div class="article-table"><table>
<thead><tr><th>Funktion</th><th>Varför den behövs på bygg</th></tr></thead>
<tbody>
<tr><td><strong>In-/utcheckning i mobilen</strong></td><td>Personalen är på arbetsplatsen, inte vid en dator</td></tr>
<tr><td><strong>GPS på incheckning</strong></td><td>Bekräftar närvaro där jobbet utförs</td></tr>
<tr><td><strong>Offline-läge</strong></td><td>Källare och nybyggen saknar ofta täckning</td></tr>
<tr><td><strong>Projektkoppling</strong></td><td>Timmarna hamnar rätt utan efterarbete</td></tr>
<tr><td><strong>OB &amp; övertid</strong></td><td>Räknas enligt byggavtalet automatiskt</td></tr>
<tr><td><strong>Export till lön &amp; faktura</strong></td><td>Registrera en gång, använd överallt</td></tr>
</tbody>
</table></div>

<h2>Tidsregistrering och arbetstidslagen</h2>
<p>Korrekt tidsregistrering är inte bara bra för ekonomin – det gör det också enklare att följa <a href="/sv/blog/arbetstidslagen-bygg">arbetstidslagen</a>. När arbetstid, raster och övertid registreras löpande har du underlag om dygns- eller veckovila ifrågasätts, och du ser tidigt om någon närmar sig gränserna för övertid.</p>

<h2>GPS och integritet – vad gäller?</h2>
<p>GPS på incheckningen behandlar personuppgifter, så det kräver en laglig grund och att personalen informeras. I praktiken registreras positionen vid stämplingstillfället för att bekräfta närvaro på arbetsplatsen – inte en löpande spårning av var någon befinner sig. Var tydlig med vad som samlas in och varför; det både uppfyller kraven och ökar acceptansen i laget.</p>

<h2>Kom igång</h2>
<p>Läs om <a href="/sv/blog/automatisk-tidrapportering-och-export">automatisk tidrapportering</a>, ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> eller <a href="/sv/contact">boka en demo</a>. Vill du fånga varje debiterbar timme? Se <a href="/sv/blog/tidrapportering-hantverkare">tidrapportering för hantverkare</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan tidsregistrering och tidrapportering?</h3>
<p>Tidsregistrering är själva stämplingen – när man börjar och slutar. Tidrapportering är när timmarna kopplas till projekt och aktivitet. De hänger ihop i ett tidrapporteringssystem.</p>
<h3>Behöver en app för tidsregistrering GPS?</h3>
<p>GPS gör registreringen pålitlig genom att bekräfta att incheckningen sker på arbetsplatsen, vilket minskar diskussioner om timmar i efterhand.</p>
<h3>Är GPS-stämpling tillåtet enligt GDPR?</h3>
<p>Ja, om du har en laglig grund och informerar personalen. Positionen registreras vid incheckning för att bekräfta närvaro, inte som löpande spårning – var tydlig med vad som samlas in och varför.</p>
<h3>Fungerar tidsregistreringen utan mobiltäckning?</h3>
<p>Ja. Stämplingen sparas lokalt och synkas när telefonen får uppkoppling igen, så inga pass tappas i källare eller på nybyggen.</p>
`.trim();

const S_TIDSREGISTRERING_APP_BYGG: BlogPost = {
  _id: "code-tidsregistrering-app-bygg",
  title: "Tidsregistrering app för bygg – korrekt arbetstid i mobilen", slug: "tidsregistrering-app-bygg", locale: "sv",
  excerpt: "Tidsregistrering-app för bygg: fånga arbetstidens början och slut i mobilen med GPS, kopplat till projekt. Grunden för lön, faktura och uppföljning.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/1arbetspass.webp", contentHtml: S_TIDSREGISTRERING_APP_BYGG_HTML,
  seoTitle: "Tidsregistrering app för bygg – arbetstid i mobilen | ByggExp", seoDescription: "Tidsregistrering-app för bygg: fånga arbetstidens början och slut i mobilen med GPS. Första steget före tidrapportering och tidredovisning. Fungerar offline.",
  seoImageUrl: `${SITE_URL}/landing/features/1arbetspass.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T10:25:00.000Z", createdAt: "2026-08-22T10:25:00.000Z", updatedAt: "2026-08-22T10:25:00.000Z",
};

const S_TIDREDOVISNING_APP_HTML = `
<p>Tidredovisning är sista steget: att sammanställa de registrerade timmarna till ett underlag som går till lön, faktura och bokföring. En app för tidredovisning gör det automatiskt – du slipper renskriva och summera manuellt. Här går vi igenom vad en tidredovisning-app bör klara.</p>
<p>Se helheten i vår guide om <a href="/sv/blog/tidrapporteringssystem-bygg">tidrapporteringssystem för bygg</a>.</p>

<figure class="article-diagram"><img src="/landing/diagrams/tidrapporteringssystem.webp" alt="Diagram: tidsregistrering, tidrapportering och tidredovisning i tre steg" width="720" height="380" loading="lazy"><figcaption>Tidredovisning är sista steget: det sammanställda underlaget för lön, faktura och uppföljning.</figcaption></figure>
<h2>Vad är tidredovisning?</h2>
<p>Tidredovisning är den sammanställda rapporten över nedlagd tid – per medarbetare, projekt och period. Det är underlaget som lön, faktura och uppföljning bygger på.</p>

<h2>Vad en app för tidredovisning ska klara</h2>
<ul>
<li>Sammanställa timmar per medarbetare och period automatiskt.</li>
<li>Räkna OB och övertid enligt era regler.</li>
<li>Exportera till lönesystem eller lönebyrå.</li>
<li>Ge underlag för fakturering på loggad tid.</li>
</ul>

<h2>Vad tidredovisningen används till</h2>
<p>Samma sammanställning tjänar flera syften – därför lönar det sig att den skapas automatiskt i stället för att byggas om för varje mottagare:</p>
<div class="article-table"><table>
<thead><tr><th>Används till</th><th>Vad underlaget ger</th></tr></thead>
<tbody>
<tr><td><strong>Lön</strong></td><td>Timmar, OB och övertid per medarbetare och period</td></tr>
<tr><td><strong>Fakturering</strong></td><td>Debiterbar tid per projekt och kund</td></tr>
<tr><td><strong>Projektuppföljning</strong></td><td>Nedlagd tid mot budget</td></tr>
<tr><td><strong>Lönebyrå</strong></td><td>Exportfil redo att läsas in</td></tr>
</tbody>
</table></div>

<h2>Attestera innan perioden låses</h2>
<p>Innan redovisningen går vidare bör passen granskas och attesteras av arbetsledaren. Då fångas felstämplingar och glömda utcheckningar innan de blir fel i lön eller faktura – och underlaget blir något du kan stå för om det ifrågasätts.</p>

<h2>Kom igång</h2>
<p>Läs om <a href="/sv/blog/automatisk-tidrapportering-och-export">automatisk tidrapportering och export</a> eller <a href="/sv/blog/loneunderlag-for-byggforetag">löneunderlag för byggföretag</a>. Vill du se hela kedjan? Se <a href="/sv/blog/tidrapporteringssystem-bygg">tidrapporteringssystem för bygg</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är tidredovisning?</h3>
<p>Den sammanställda rapporten över nedlagd tid per medarbetare, projekt och period – underlaget för lön, faktura och uppföljning.</p>
<h3>Kan en tidredovisning-app exportera till lönesystem?</h3>
<p>Ja. ByggExp summerar timmar, OB och övertid och exporterar underlaget som fil till ert lönesystem eller er lönebyrå.</p>
<h3>Vad är skillnaden mellan tidrapportering och tidredovisning?</h3>
<p>Tidrapportering är att timmarna registreras och kopplas till projekt. Tidredovisning är den sammanställda rapporten som blir underlag för lön, faktura och uppföljning – steget efter.</p>
`.trim();

const S_TIDREDOVISNING_APP: BlogPost = {
  _id: "code-tidredovisning-app",
  title: "Tidredovisning app – sammanställ timmar till lön och faktura", slug: "tidredovisning-app", locale: "sv",
  excerpt: "Tidredovisning-app: sammanställ registrerade timmar per medarbetare och period, räkna OB och övertid och exportera till lön och faktura – automatiskt.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: S_TIDREDOVISNING_APP_HTML,
  seoTitle: "Tidredovisning app – timmar till lön och faktura | ByggExp", seoDescription: "Tidredovisning-app för bygg: sammanställ timmar per medarbetare och period, räkna OB och övertid och exportera till lönesystem. Underlag för lön och faktura.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T10:30:00.000Z", createdAt: "2026-08-22T10:30:00.000Z", updatedAt: "2026-08-22T10:30:00.000Z",
};

const S_PERSONALLIGGARE_APP_HTML = `
<p>Elektronisk personalliggare är ett lagkrav på de flesta byggarbetsplatser, och en app gör kravet enkelt att uppfylla: personalen registrerar närvaro i mobilen, och liggaren finns alltid tillgänglig för Skatteverket. Här går vi igenom hur en personalliggare-app fungerar för byggföretag.</p>
<p>Vill du ha hela regelverket? Läs vår guide om <a href="/sv/blog/personalliggare">personalliggare i byggbranschen</a>.</p>

<figure class="article-diagram"><img src="/landing/diagrams/personalliggare.webp" alt="Diagram: personalliggare – vilka som registreras och Skatteverkets kontrollavgifter" width="720" height="380" loading="lazy"><figcaption>Alla som arbetar registreras – även UE och inhyrda. Appen håller liggaren korrekt i realtid.</figcaption></figure>
<h2>Personalliggare som app</h2>
<p>I stället för en pärm eller terminal registrerar varje person närvaro i mobilen – ofta kopplat till incheckning på bygget. Alla som arbetar registreras, även underentreprenörer och inhyrda. Liggaren uppdateras i realtid och kan visas direkt vid en kontroll.</p>

<h2>Vad personalliggaren ska innehålla</h2>
<div class="article-table"><table>
<thead><tr><th>Uppgift</th><th>Kommentar</th></tr></thead>
<tbody>
<tr><td><strong>Företagets uppgifter</strong></td><td>Organisationsnummer</td></tr>
<tr><td><strong>Person som är verksam</strong></td><td>Namn och personnummer</td></tr>
<tr><td><strong>Tider</strong></td><td>När arbetet påbörjas och avslutas, per person och dag</td></tr>
<tr><td><strong>Vilka omfattas</strong></td><td>Alla verksamma – anställda, UE och inhyrda</td></tr>
<tr><td><strong>Tillgänglighet</strong></td><td>Ska kunna visas för Skatteverket på plats</td></tr>
</tbody>
</table></div>
<p>En app fyller i det mesta automatiskt vid incheckning, så du slipper föra uppgifterna för hand.</p>

<h2>Koppling till ID06 och närvaro</h2>
<p>En personalliggare-app hänger ihop med <a href="/sv/blog/id06">ID06</a> och med <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">närvaro och incheckning</a> – samma incheckning som registrerar arbetstid kan föra personalliggaren.</p>

<h2>Skatteverkets kontroll och kontrollavgift</h2>
<p>Skatteverket får göra oanmälda besök på arbetsplatsen och begära att liggaren visas direkt. Saknas den, eller är den bristfällig, utgår en kontrollavgift – en fast grundavgift plus ett belopp per person som inte är registrerad. Det kan snabbt bli dyrt på ett bygge med flera lag och underentreprenörer, och är hela poängen med att låta en app hålla liggaren korrekt automatiskt. Aktuella belopp och undantag går vi igenom i guiden om <a href="/sv/blog/kontrollavgift-personalliggare">kontrollavgift för personalliggare</a>, och hela regelverket i <a href="/sv/blog/personalliggare">personalliggare i byggbranschen</a>.</p>

<h2>En incheckning – både tid och liggare</h2>
<p>Det stora med en app är att samma incheckning löser två saker: den registrerar <a href="/sv/blog/tidsregistrering-app-bygg">arbetstiden</a> som blir lön och faktura, och den för personalliggaren som klarar en kontroll. Ingen dubbel registrering, inga glömda poster. Läs mer om hur tiden blir underlag i <a href="/sv/blog/automatisk-tidrapportering-och-export">automatisk tidrapportering</a>.</p>

<h2>Kom igång</h2>
<p>Läs om <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">närvaro och incheckning på bygget</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Kan man föra personalliggare i en app?</h3>
<p>Ja. Personalen registrerar närvaro i mobilen och liggaren uppdateras i realtid och finns tillgänglig för Skatteverket vid kontroll.</p>
<h3>Måste underentreprenörer registreras i personalliggaren?</h3>
<p>Ja. Alla som arbetar på arbetsplatsen ska registreras, även underentreprenörer och inhyrd personal.</p>
<h3>Hänger personalliggare-appen ihop med tidrapporteringen?</h3>
<p>Ja. Samma incheckning som registrerar arbetstid kan föra personalliggaren, så du slipper dubbel registrering.</p>
<h3>Vad kostar det om personalliggaren saknas vid en kontroll?</h3>
<p>Skatteverket tar ut en kontrollavgift – en fast grundavgift plus ett belopp per oregistrerad person. Aktuella belopp finns i vår guide om kontrollavgift för personalliggare.</p>
`.trim();

const S_PERSONALLIGGARE_APP: BlogPost = {
  _id: "code-personalliggare-bygg-app",
  title: "Personalliggare app för bygg – närvaro i mobilen", slug: "personalliggare-bygg-app", locale: "sv",
  excerpt: "Personalliggare som app: registrera närvaro i mobilen, liggaren uppdateras i realtid och finns tillgänglig för Skatteverket. Så uppfyller du lagkravet enkelt.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: S_PERSONALLIGGARE_APP_HTML,
  seoTitle: "Personalliggare app för bygg – närvaro i mobilen | ByggExp", seoDescription: "Personalliggare-app för byggföretag: registrera närvaro i mobilen, håll liggaren korrekt i realtid och tillgänglig för Skatteverket. Kopplad till ID06 och tidrapportering.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T10:35:00.000Z", createdAt: "2026-08-22T10:35:00.000Z", updatedAt: "2026-08-22T10:35:00.000Z",
};

// --- Software-intent cluster 2: system/CRM/service/schema -------------------

const A_AFFARSSYSTEM_BYGGFORETAG_HTML = `
<p>Många byggföretag kör tid i en app, fakturor i en annan och lönen i ett tredje system – och lägger timmar varje vecka på att flytta siffror mellan dem. Ett affärssystem för byggföretag samlar allt i ett: tid, projekt, offert, faktura, lön och ekonomi hänger ihop, så att en registrering räcker. Här går vi igenom vad ett affärssystem (ibland kallat ERP) för bygg bör klara och varför ett molnbaserat, samlat system slår lösa öar.</p>
<p>Vill du se hur delarna hänger ihop? Läs om <a href="/sv/blog/projektekonomi-och-lonsamhet">projektekonomi</a> och <a href="/sv/blog/automatisk-tidrapportering-och-export">automatisk tidrapportering</a>.</p>
<figure class="article-diagram"><img src="/landing/diagrams/affarssystem.webp" alt="Diagram: affärssystem – tid, projekt, offert, faktura, lön och ekonomi i en plattform" width="720" height="380" loading="lazy"><figcaption>Allt i en plattform: tid, projekt, offert, faktura, lön och ekonomi delar samma data – en registrering räcker.</figcaption></figure>

<h2>Vad är ett affärssystem för byggföretag?</h2>
<p>Ett affärssystem är den gemensamma plattform där hela verksamheten körs: projekt, personal, tid, material, offert, faktura och ekonomi. Skillnaden mot enskilda appar är att allt delar samma data – loggad tid blir automatiskt både löneunderlag och fakturarad och räknas in i projektets resultat.</p>

<h2>Molnbaserat – tillgängligt på bygget och kontoret</h2>
<p>Ett molnbaserat byggprogram körs i webbläsaren och i appen, utan installation eller egen server. Snickaren rapporterar i mobilen på bygget, kontoret ser samma siffror i realtid. Det är förutsättningen för att data ska vara aktuell och samlad.</p>

<h2>Vad ett affärssystem för bygg bör täcka</h2>
<ul>
<li><a href="/sv/blog/automatisk-tidrapportering-och-export">Tidrapportering</a> och närvaro</li>
<li><a href="/sv/blog/hantera-uppgifter-i-byggprojekt">Projekt- och uppgiftshantering</a></li>
<li><a href="/sv/blog/skapa-offert-i-byggexp">Offert</a> och <a href="/sv/blog/fakturera-fran-byggexp">faktura</a></li>
<li><a href="/sv/blog/loneunderlag-for-byggforetag">Löneunderlag</a></li>
<li><a href="/sv/blog/projektekonomi-och-lonsamhet">Projektekonomi och uppföljning</a></li>
</ul>

<h2>Ett samlat system vs flera lösa appar</h2>
<p>Lösa appar verkar billiga var för sig, men dubbelinmatning, exportfiler och fel mellan systemen kostar tid och pengar. Ett samlat affärssystem tar bort skarvarna – och ger en sann bild av ekonomin per projekt.</p>

<h2>Kom igång</h2>
<p>Vill du se ett samlat affärssystem för byggföretag? <a href="/sv/contact">Boka en demo av ByggExp</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan ett affärssystem och en bygg-app?</h3>
<p>En bygg-app löser ofta ett moment (t.ex. tid). Ett affärssystem samlar hela verksamheten – tid, projekt, offert, faktura, lön och ekonomi – i en gemensam plattform där data delas, så att en registrering räcker.</p>
<h3>Behöver ett litet byggföretag ett affärssystem?</h3>
<p>Ja, ofta redan från ett par anställda. Vinsten är mindre dubbelarbete och en korrekt bild av ekonomin per projekt – inte antalet funktioner.</p>
<h3>Vad betyder molnbaserat?</h3>
<p>Att systemet körs i webbläsaren och appen utan installation eller egen server. Alla ser samma aktuella data, på bygget och på kontoret.</p>
`.trim();

const A_AFFARSSYSTEM_BYGGFORETAG: BlogPost = {
  _id: "code-affarssystem-byggforetag",
  title: "Affärssystem för byggföretag – allt i ett, molnbaserat", slug: "affarssystem-byggforetag", locale: "sv",
  excerpt: "Ett affärssystem för byggföretag samlar tid, projekt, offert, faktura, lön och ekonomi i en molnbaserad plattform – en registrering räcker. Så väljer du rätt.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_AFFARSSYSTEM_BYGGFORETAG_HTML,
  seoTitle: "Affärssystem för byggföretag – allt i ett, molnbaserat | ByggExp", seoDescription: "Affärssystem för byggföretag: samla tid, projekt, offert, faktura, lön och ekonomi i en molnbaserad plattform. Slipp dubbelinmatning mellan lösa appar.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T11:00:00.000Z", createdAt: "2026-08-22T11:00:00.000Z", updatedAt: "2026-08-22T11:00:00.000Z",
};

const A_CRM_BYGGFORETAG_HTML = `
<p>Offerter i huvudet, kundkontakter på lappar och uppföljningar som glöms bort – så tappar byggföretag affärer utan att märka det. Ett CRM för byggföretag håller ordning på kunder, förfrågningar och offerter så att inget faller mellan stolarna och fler förfrågningar blir jobb. Här går vi igenom vad ett CRM för bygg bör klara.</p>
<p>Snabb respons vinner ofta jobbet – börja med att kunna skicka <a href="/sv/blog/skapa-offert-i-byggexp">offert direkt</a> när förfrågan kommer in.</p>
<figure class="article-diagram"><img src="/landing/diagrams/crm-bygg.webp" alt="Diagram: CRM – från förfrågan till offert, uppföljning och vunnet projekt" width="720" height="380" loading="lazy"><figcaption>Från förfrågan till vunnet projekt: samla förfrågningar, skicka offert, följ upp med påminnelser – inget tappas.</figcaption></figure>

<h2>Vad är ett CRM för byggföretag?</h2>
<p>CRM (kundhantering) samlar allt om varje kund och affär på ett ställe: kontaktuppgifter, förfrågningar, skickade offerter, status och nästa steg. För byggföretag är det bryggan mellan en förfrågan och ett vunnet projekt.</p>

<h2>Från förfrågan till vunnet projekt</h2>
<ul>
<li>Samla alla förfrågningar på ett ställe – inget tappas.</li>
<li>Koppla offert till kund och följ status (skickad, accepterad).</li>
<li>Påminnelser om uppföljning så heta förfrågningar inte kallnar.</li>
<li>När kunden tackar ja blir offerten grund för projekt och <a href="/sv/blog/fakturera-fran-byggexp">faktura</a>.</li>
</ul>

<h2>CRM som hänger ihop med resten</h2>
<p>Störst nytta gör kundhanteringen när den sitter ihop med produktionen: en vunnen offert blir ett projekt med tid, material och ekonomi – utan att mata in kunden igen. Det är skillnaden mot ett fristående CRM.</p>

<h2>Kom igång</h2>
<p>Vill du fånga fler förfrågningar och följa upp dem systematiskt? <a href="/sv/contact">Boka en demo av ByggExp</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är ett CRM för byggföretag?</h3>
<p>Ett system som samlar kunder, förfrågningar och offerter på ett ställe och hjälper dig följa upp dem – så att fler förfrågningar blir vunna projekt.</p>
<h3>Behöver ett mindre byggföretag CRM?</h3>
<p>Ja. Även med få kunder tappas affärer när uppföljningar glöms. Ett enkelt CRM med påminnelser gör att heta förfrågningar inte kallnar.</p>
<h3>Vad är fördelen med ett CRM som är kopplat till offert och faktura?</h3>
<p>En vunnen offert blir direkt ett projekt med tid, material och faktura – ingen dubbelinmatning av kunduppgifter, och full spårbarhet från förfrågan till betald faktura.</p>
`.trim();

const A_CRM_BYGGFORETAG: BlogPost = {
  _id: "code-crm-byggforetag",
  title: "CRM för byggföretag – från förfrågan till vunnet projekt", slug: "crm-byggforetag", locale: "sv",
  excerpt: "Ett CRM för byggföretag samlar kunder, förfrågningar och offerter så att inget tappas och fler förfrågningar blir jobb. Så väljer du rätt kundhantering.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_CRM_BYGGFORETAG_HTML,
  seoTitle: "CRM för byggföretag – kundhantering & offert | ByggExp", seoDescription: "CRM för byggföretag: samla kunder, förfrågningar och offerter, följ upp med påminnelser och gör fler förfrågningar till vunna projekt. Kopplat till offert och faktura.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T11:10:00.000Z", createdAt: "2026-08-22T11:10:00.000Z", updatedAt: "2026-08-22T11:10:00.000Z",
};

const A_SERVICEHANTERING_BYGG_HTML = `
<p>Serviceuppdrag och mindre jobb är annorlunda än stora projekt: många korta besök, olika adresser, snabb fakturering. Utan system tappas timmar och material, och faktureringen släpar. Ett system för servicehantering (serviceorder) håller ordning på uppdragen från beställning till betald faktura. Här går vi igenom vad en serviceorder-app för bygg bör klara.</p>
<p>Grunden är att fånga tid och material på plats – se <a href="/sv/blog/automatisk-tidrapportering-och-export">tidrapportering</a> och <a href="/sv/blog/fota-kvitton-och-hantera-utlagg">kvitton och utlägg</a>.</p>
<figure class="article-diagram"><img src="/landing/diagrams/servicehantering.webp" alt="Diagram: servicehantering – arbetsorder, tid och material på plats, foto, snabb faktura" width="720" height="380" loading="lazy"><figcaption>Serviceflödet: skapa arbetsorder, registrera tid och material på plats, dokumentera med foto och fakturera snabbt.</figcaption></figure>

<h2>Vad är servicehantering?</h2>
<p>Servicehantering är att styra serviceuppdrag och arbetsorder: vem gör vad, var, med vilken tid och vilket material – och hur det blir faktura. För service- och underhållsjobb med hög volym är det avgörande att inget uppdrag glöms eller faktureras för lågt.</p>

<h2>Från serviceorder till faktura</h2>
<ul>
<li>Skapa en arbetsorder med kund, adress och vad som ska göras.</li>
<li>Teknikern ser uppdraget i appen och registrerar tid och material på plats.</li>
<li>Foton och noteringar dokumenterar utfört arbete.</li>
<li>Uppdraget blir faktureringsunderlag – fakturera snabbt, medan jobbet är färskt.</li>
</ul>

<h2>Serviceavtal och återkommande jobb</h2>
<p>För återkommande underhåll är det värdefullt att koppla uppdrag till <a href="/sv/blog/serviceavtal-underhallsavtal-byggforetag">serviceavtal</a>, så att planering och fakturering sköts löpande.</p>

<h2>Kom igång</h2>
<p>Vill du få ordning på serviceuppdragen från order till faktura? <a href="/sv/contact">Boka en demo av ByggExp</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är servicehantering i bygg?</h3>
<p>Att styra serviceuppdrag och arbetsorder – vem, var, tid och material – och göra dem till faktureringsunderlag, så att inget uppdrag glöms eller faktureras för lågt.</p>
<h3>Vad är skillnaden mot vanlig projekthantering?</h3>
<p>Service handlar om många korta uppdrag på olika adresser med snabb fakturering, till skillnad från stora, långa projekt. Flödet order → utförande → faktura måste vara snabbt.</p>
<h3>Kan tekniker registrera tid och material på plats?</h3>
<p>Ja. I appen ser teknikern uppdraget och registrerar tid, material och foton direkt, vilket blir underlag för fakturan.</p>
`.trim();

const A_SERVICEHANTERING_BYGG: BlogPost = {
  _id: "code-servicehantering-bygg",
  title: "Servicehantering för bygg – från serviceorder till faktura", slug: "servicehantering-bygg", locale: "sv",
  excerpt: "Servicehantering (serviceorder) för byggföretag: styr serviceuppdrag från beställning till betald faktura, med tid, material och foto på plats i appen.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/2uppgift.webp", contentHtml: A_SERVICEHANTERING_BYGG_HTML,
  seoTitle: "Servicehantering bygg – serviceorder-app till faktura | ByggExp", seoDescription: "Servicehantering för byggföretag: serviceorder från beställning till faktura, med tid, material och foto på plats. Håll ordning på service- och underhållsjobb.",
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T11:20:00.000Z", createdAt: "2026-08-22T11:20:00.000Z", updatedAt: "2026-08-22T11:20:00.000Z",
};

const A_SCHEMALAGGNING_BYGG_HTML = `
<p>Att pussla vem som ska vara var, vilken dag, på vilket projekt – med semestrar och sjukdom i beräkningen – tar tid och blir lätt fel i huvudet eller i Excel. Ett verktyg för schemaläggning och personalplanering ger dig en delad vy över hela laget, kopplad till projekt och tid. Här går vi igenom vad schemaläggning för byggföretag bör klara.</p>
<p>Planeringen hänger ihop med <a href="/sv/blog/dagsplanering-och-planeringsmoten">dagsplanering</a>, <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">närvaro</a> och <a href="/sv/blog/automatisk-tidrapportering-och-export">tidrapportering</a>.</p>
<figure class="article-diagram"><img src="/landing/diagrams/schemalaggning.webp" alt="Diagram: schemaläggning – hela laget per dag i en delad vy" width="720" height="380" loading="lazy"><figcaption>Hela laget i en vy: planera per person eller projekt över veckan, med frånvaro och överbokning synligt direkt.</figcaption></figure>

<h2>Vad är schemaläggning för byggföretag?</h2>
<p>Schemaläggning (personalplanering) är att fördela personal på projekt och dagar så att rätt kompetens finns på rätt plats. En bra vy visar hela laget över veckorna, med lediga och överbokade direkt synliga.</p>

<h2>Vad ett schemaläggningsverktyg bör klara</h2>
<ul>
<li>Delad vy över hela laget per vecka eller månad.</li>
<li>Planera per person eller per projekt.</li>
<li>Se frånvaro (semester, sjuk) direkt i planen.</li>
<li>Planen syns i appen för alla berörda och uppdateras i realtid.</li>
</ul>

<h2>Från plan till faktisk tid</h2>
<p>Störst nytta gör schemat när det kopplas till verkligheten: planerad tid jämförs med <a href="/sv/blog/automatisk-tidrapportering-och-export">loggad tid</a>, och avvikelser syns i <a href="/sv/blog/projektuppfoljning-bygg">projektuppföljningen</a>.</p>

<h2>Kom igång</h2>
<p>Vill du sluta pussla i huvudet? <a href="/sv/contact">Boka en demo av ByggExp</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är schemaläggning för byggföretag?</h3>
<p>Att fördela personal på projekt och dagar i en delad vy, så att rätt kompetens finns på rätt plats och lediga eller överbokade syns direkt.</p>
<h3>Vad är skillnaden mot dagsplanering?</h3>
<p>Schemaläggning är den längre planeringen över veckor/månader; dagsplaneringen är den konkreta genomgången av dagens jobb. De hänger ihop och delar samma plan.</p>
<h3>Ser personalen sitt schema i mobilen?</h3>
<p>Ja. Planen delas till appen och uppdateras i realtid, så alla berörda ser sitt schema och eventuella ändringar direkt.</p>
`.trim();

const A_SCHEMALAGGNING_BYGG: BlogPost = {
  _id: "code-schemalaggning-bygg",
  title: "Schemaläggning för byggföretag – personalplanering i en vy", slug: "schemalaggning-bygg", locale: "sv",
  excerpt: "Schemaläggning och personalplanering för byggföretag: en delad vy över hela laget, kopplad till projekt, frånvaro och tid. Sluta pussla i huvudet och Excel.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/5planering.webp", contentHtml: A_SCHEMALAGGNING_BYGG_HTML,
  seoTitle: "Schemaläggning för byggföretag – personalplanering | ByggExp", seoDescription: "Schemaläggning och personalplanering för byggföretag: delad vy över laget per vecka, planera per person eller projekt, se frånvaro och koppla till tid.",
  seoImageUrl: `${SITE_URL}/landing/features/5planering.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-22T11:30:00.000Z", createdAt: "2026-08-22T11:30:00.000Z", updatedAt: "2026-08-22T11:30:00.000Z",
};

const S_TIDRAPPORT_APP_IPHONE_HTML = `
<p>Har du eller laget iPhone och vill rapportera tid direkt i mobilen? En tidrapport-app för iPhone låter dig checka in och ut på jobbet, koppla timmarna till rätt kund eller projekt och göra dem till underlag för lön och faktura – utan papperslappar. Här går vi igenom hur tidrapportering på iPhone fungerar och vad du ska tänka på.</p>
<p>Se hela bilden i vår guide om <a href="/sv/blog/app-for-tidrapportering-bygg">app för tidrapportering i bygg</a>, eller läs om <a href="/sv/blog/automatisk-tidrapportering-och-export">automatisk tidrapportering och export</a>.</p>

<figure class="article-diagram"><img src="/landing/diagrams/tidrapportering-flode.webp" alt="Diagram: tidrapport app på iPhone – checka in, timmar på projekt, granska, export till lön och faktura" width="720" height="380" loading="lazy"><figcaption>Från incheckning på iPhone till färdigt underlag: timmarna kopplas till projektet och exporteras till lön och faktura.</figcaption></figure>

<h2>Tidrapportering på iPhone – så fungerar det</h2>
<p>Du laddar ner appen från App Store, loggar in och checkar in när arbetsdagen börjar. Timmarna registreras löpande och kopplas till rätt projekt eller kund. Vid dagens slut checkar du ut, och tiden blir underlag för både lön och faktura. Allt sker i mobilen – ingen dator behövs på plats.</p>

<h2>Vad du bör titta efter i en tidrapport-app för iPhone</h2>
<ul>
<li>Enkel in-/utcheckning – gärna med GPS som bekräftar arbetsplatsen.</li>
<li>Koppling till kund och projekt så timmarna hamnar rätt.</li>
<li>Hantering av OB, övertid och restid enligt byggavtalet.</li>
<li>Underlag för ROT-faktura direkt från loggad tid.</li>
<li>Fungerar offline och synkar när täckningen kommer tillbaka.</li>
<li>Samma app även för Android, så hela laget kan rapportera lika.</li>
</ul>

<h2>Rätt platsbehörighet på iPhone</h2>
<p>För att GPS ska kunna bekräfta arbetsplatsen räcker det att välja "Tillåt när appen används" när iPhone frågar om platstjänster. Positionen registreras vid incheckning för att styrka närvaro – appen behöver inte spåra dig i bakgrunden.</p>

<h2>Från timme till lön och faktura</h2>
<p>Poängen med att rapportera tid på iPhone är att samma timme bara matas in en gång. De loggade timmarna blir <a href="/sv/blog/loneunderlag-for-byggforetag">löneunderlag</a> och <a href="/sv/blog/fakturera-fran-byggexp">fakturarader</a> och räknas in i <a href="/sv/blog/projektuppfoljning-bygg">projektuppföljningen</a>. Vill du bara stämpla närvaro? Se <a href="/sv/blog/stampelklocka-app-iphone">stämpelklocka-app för iPhone</a>.</p>

<h2>Kom igång</h2>
<p>Vill du rapportera tid på iPhone? Ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a>, läs om <a href="/sv/blog/tidsregistrering-app-bygg">tidsregistrering-app för bygg</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Finns det en app för tidrapport på iPhone?</h3>
<p>Ja. ByggExp-appen finns för iPhone i App Store och låter dig checka in och ut, koppla timmarna till projekt och göra dem till underlag för lön och faktura.</p>
<h3>Fungerar tidrapporteringen på iPhone även för ROT?</h3>
<p>Ja. När timmarna är kopplade till kund och jobb blir de underlag för fakturan inklusive ROT-avdrag, så du kan fakturera rätt belopp direkt.</p>
<h3>Vilken platsbehörighet behöver appen på iPhone?</h3>
<p>Det räcker med "Tillåt när appen används". GPS bekräftar arbetsplatsen vid incheckning – ingen spårning i bakgrunden.</p>
<h3>Fungerar samma app om någon i laget har Android?</h3>
<p>Ja. Appen finns för både iPhone och Android med samma funktioner, så hela laget kan rapportera tid oavsett telefon.</p>
`.trim();

const S_TIDRAPPORT_APP_IPHONE: BlogPost = {
  _id: "code-tidrapport-app-iphone",
  title: "Tidrapport app för iPhone – rapportera tid i mobilen", slug: "tidrapport-app-iphone", locale: "sv",
  excerpt: "Tidrapport-app för iPhone: checka in och ut i mobilen, koppla timmarna till projekt och gör dem till underlag för lön och ROT-faktura. Så fungerar tidrapportering på iPhone.", tag: "Digitalisering",
  coverImageUrl: "/landing/features/1arbetspass.webp", contentHtml: S_TIDRAPPORT_APP_IPHONE_HTML,
  seoTitle: "Tidrapport app för iPhone – timmar i mobilen | ByggExp", seoDescription: "Tidrapport-app för iPhone: registrera arbetstid i mobilen med GPS, koppla till projekt och exportera till lön och ROT-faktura. Fungerar även på Android.",
  seoImageUrl: `${SITE_URL}/landing/features/1arbetspass.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-25T09:00:00.000Z", createdAt: "2026-08-25T09:00:00.000Z", updatedAt: "2026-08-25T09:00:00.000Z",
};

export const TILLVAXT_ARTICLES: BlogPost[] = [
  A_AFFARSSYSTEM_BYGGFORETAG,
  A_CRM_BYGGFORETAG,
  A_SERVICEHANTERING_BYGG,
  A_SCHEMALAGGNING_BYGG,
  A_APP_TIDRAPPORTERING_BYGG,
  A_STAMPELKLOCKA_APP_GPS,
  A_TIDRAPPORTERINGSSYSTEM_BYGG,
  A_PROJEKTUPPFOLJNING_BYGG,
  S_TIDRAPPORTERING_HANTVERKARE,
  S_TIDRAPPORTERING_ENTREPRENAD,
  S_MOBIL_TIDRAPPORTERING,
  S_STAMPELKLOCKA_ANDROID,
  S_STAMPELKLOCKA_IPHONE,
  S_TIDRAPPORT_APP_IPHONE,
  S_TIDSREGISTRERING_APP_BYGG,
  S_TIDREDOVISNING_APP,
  S_PERSONALLIGGARE_APP,
  A_PERSONALPLANERING_BYGG,
  A_VERKTYGSHANTERING_APP,
  A_BYGG_APP,
  A_BYGGPROGRAM_PRIS,
  A_BASTA_BYGGPROGRAM,
  A_LONEPROGRAM_BYGG,
  A_UTLAGG_APP_BYGG,
  A_KALKYLPROGRAM_BYGG,
  A_HANTVERKARAPP,
  A_DOKUMENTHANTERING_BYGG,
  A_HITTA_KUNDER_BYGGFIRMA,
  A_DIGITALISERA_BYGGFORETAG_PROJEKTSTYRNING,
  A_SKAFFA_RECENSIONER_OMDOMEN_BYGGFIRMA,
  A_GOOGLE_FORETAGSPROFIL_LOKAL_SEO_BYGGFIRMA,
  A_FAKTURERINGSPROGRAM_BYGG,
  A_TIDRAPPORTERING_APP_BYGGFORETAG,
  A_BYGGPROGRAM_FOR_BYGGFORETAG,
  A_ARBETSORDER_APP_BYGG,
  A_PROJEKTHANTERING_BYGGFORETAG,
  A_ROT_FAKTURERING_PROGRAM,
  A_FOTODOKUMENTATION_APP_BYGG,
];
