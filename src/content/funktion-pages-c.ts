// Feature pages batch C: /sv/funktioner/utlagg and /sv/funktioner/verktygshantering.
// Registered in funktion-pages.ts (FUNKTION_PAGES + ILLU_HEIGHT spreads). Only
// type imports from there, so there is no runtime import cycle.
//
// Claims are checked against the code (2026-10-27):
// - Utlägg: ByggExp-BackEnd/src/expenses (statuses submitted/approved/rejected/
//   reimbursed, paidBy own/company, project link, receipt + attachments, zip of
//   originals, per-project summary), scanning.service.ts (supplier, date, total,
//   VAT, currency), byggexp-admin features/purchases/ExpenseListPage.jsx (drop
//   one or many receipts, manual entry, approve/reject/mark reimbursed),
//   approvalsStore.js (submitted expenses under Mitt arbete), mobile
//   Camera/ExpenseReviewSheet.jsx (project from the active shift, else picked).
//   Package: "expenses" is in Koll på pengarna (faktura) and Full koll, NOT in
//   Koll på jobbet. Shifts are not in Koll på pengarna → "(Full koll)".
// - Verktyg: ByggExp-BackEnd/src/tools (statuses available/occupied/in_repair/
//   broken, qrId label, location, current holder, hand-off, inspection with
//   condition ok/needs_service/broken, last/next inspection, history),
//   byggexp-admin features/tools, mobile ToolScanScreen + ToolActionSheet
//   (Ta över / Lämna tillbaka / Historik). Package: "tools" is in Koll på jobbet.

import { FAKTURA_PRICE, PROJEKT_PRICE } from '../components/Pricing/Pricing';
import type { FunktionPage } from './funktion-pages';

const EXTRA_USER_PRICE = 69;
const KOMPLETT_PRICE = 990;
const KOMPLETT_EXTRA = 119;

export const ILLU_HEIGHT_C: Record<string, number> = {
  'utlagg-kvitto': 1249,
  'utlagg-mapp': 1126,
  'utlagg-attest': 1216,
  'utlagg-ersattning': 987,
  'utlagg-bygghandel': 1017,
  'verktygshantering-qr': 1190,
  'verktygshantering-skanna': 1202,
  'verktygshantering-register': 897,
  'verktygshantering-overlamning': 1083,
  'verktygshantering-service': 1170,
  // Used by /sv/priser and /sv/byt-system (not funktioner pages, same image set).
  'priser-ekonomi': 1030,
  'priser-lonsamhet': 1188,
  'priser-tid': 951,
  'byt-system-flytt': 721,
  'byt-system-genomgang': 980,
  'byt-system-parallellt': 1215,
};

const IMG_DIR = '/landing/funktioner';
const src = (name: string, w: 640 | 1200) => `${IMG_DIR}/${name}-${w}.webp`;

export function illuC(name: string, alt: string): string {
  return `<figure class="fn-illu"><img src="${src(name, 1200)}" srcset="${src(name, 640)} 640w, ${src(name, 1200)} 1200w" sizes="(max-width: 760px) 100vw, 560px" width="1200" height="${ILLU_HEIGHT_C[name]}" loading="lazy" decoding="async" alt="${alt}"></figure>`;
}

export const extC = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const BOKFORINGSLAGEN =
  'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/bokforingslag-19991078_sfs-1999-1078/';
const AFS_2023_11 =
  'https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-202311/';

/* ------------------------------------------------------------------------- */
/* Utlägg                                                                     */
/* ------------------------------------------------------------------------- */

const UTLAGG: FunktionPage = {
  slug: 'utlagg',
  plan: 'faktura',
  priceIncluded: 'Utlägg och kvittoskanning ingår',
  heroCheck: 'iPhone och Android',
  title: 'Utläggsapp för bygg – kvitton, attest och ersättning | ByggExp',
  description:
    'Utlägg i appen för byggföretag: fota kvittot, belopp och moms läses av, utlägget attesteras och betalas tillbaka på rätt projekt. 14 dagar gratis.',
  name: 'Utläggsapp för bygg',
  h1: 'Utläggsapp för bygg.',
  h1Accent: 'Fotat, attesterat, återbetalt.',
  lead: 'Kvittot fotas i kassan och hamnar på rätt projekt.',
  hero: {
    name: 'utlagg-kvitto',
    alt: 'Byggarbetare i hjälm fotar ett kvitto med mobilen utanför en butik',
  },
  stepsHeading: ['Från kvitto', 'till projekt'],
  steps: [
    {
      title: 'Fota kvittot',
      text: 'Leverantör, datum, belopp och moms läses av. Skriv kategori och välj projekt.',
      bullets: ['Mobilkameran i appen', 'Flera valutor', 'Projekt förvalt från arbetspasset (Full koll)'],
      img: '/landing/features/11costs-1200.webp',
      alt: 'Utlägg i ByggExp: lista över utlägg i webben och ett nytt utlägg med fotat kvitto i mobilappen',
    },
    {
      title: 'Attestera',
      text: 'Inskickade utlägg godkänns eller avvisas i webben.',
      bullets: ['Egna pengar eller företagskort', 'Markera som utbetald', 'Ladda ner originalen'],
      img: '/landing/funktioner/screen-utlagg-1200.webp',
      alt: 'Utlägg i ByggExp: statusflikar och en lista med leverantör, totalt, kategori och projekt',
    },
    {
      title: 'Följ kostnaden',
      text: 'Utläggen räknas in i projektets kostnader och marginal.',
      img: '/landing/features/9ekonomi-1200.webp',
      alt: 'Projektekonomi i ByggExp: budget, kostnader och marginal för ett projekt',
    },
  ],
  body: `
<p>Ett utlägg på bygget är oftast litet: en ask skruv, en kapskiva, en tank diesel till servicebilen. Men många små kvitton blir snabbt mycket pengar, och den som har lagt ut av egen ficka vill ha tillbaka dem. I ByggExp fotar medarbetaren kvittot i appen, uppgifterna läses av automatiskt och kontoret attesterar och betalar tillbaka. Kostnaden hamnar samtidigt på rätt projekt. Här går vi igenom hela flödet, skillnaden mellan egna pengar och företagskort och vad ett kvitto behöver visa för att duga som underlag.</p>

<h2>Så fungerar utlägg i ByggExp</h2>
<ol>
<li><strong>Medarbetaren fotar kvittot.</strong> I appen för iPhone eller Android öppnar man kameran och fotar kvittot direkt vid kassan, innan det hamnar i handskfacket.</li>
<li><strong>Uppgifterna läses av.</strong> Leverantör, datum, totalbelopp, moms och valuta fylls i automatiskt. Medarbetaren kontrollerar uppgifterna, skriver en kategori, till exempel Material eller Drivmedel, och väljer projekt. Har medarbetaren ett pågående arbetspass är projektet redan valt (Full koll).</li>
<li><strong>Utlägget skickas in.</strong> Det får status Inskickad och syns för kontoret under Utlägg och i Mitt arbete.</li>
<li><strong>Kontoret attesterar.</strong> Den som ansvarar för ekonomin godkänner eller avvisar utlägget i webben. Originalbilden öppnas med ett klick, så att beloppet kan jämföras med kvittot.</li>
<li><strong>Pengarna betalas tillbaka.</strong> Är utlägget betalt med egna pengar markerar ni det som utbetalt när ersättningen har gått ut. Är det betalt med företagskort behövs ingen ersättning.</li>
<li><strong>Kostnaden ligger på projektet.</strong> Utläggen räknas in i projektets kostnader tillsammans med inköpsfakturor och, med Full koll, arbetstiden, så att marginalen stämmer.</li>
</ol>
<p>Medarbetaren behöver alltså bara fota och välja projekt. Allt annat sköts i webben av den som har hand om ekonomin.</p>

${illuC('utlagg-attest', 'Kontorsarbetare vid ett skrivbord med dator, bredvid en lista och en klocka')}

<h2>Egna pengar eller företagskort</h2>
<p>Det viktigaste fältet på ett utlägg är vem som har betalat. Det avgör om någon ska ha pengar tillbaka eller om kvittot bara är ett underlag för bokföringen.</p>
<div class="article-table"><table>
<thead><tr><th>Betalat av</th><th>Vad som händer</th><th>Sista status</th></tr></thead>
<tbody>
<tr><td><strong>Egna pengar</strong></td><td>Medarbetaren har lagt ut och ska få ersättning. Efter attesten betalar ni tillbaka beloppet.</td><td>Utbetald</td></tr>
<tr><td><strong>Företagskort</strong></td><td>Företaget har redan betalat. Kvittot behövs som underlag och kostnaden ska till projektet.</td><td>Godkänd</td></tr>
<tr><td><strong>Fel eller dubblett</strong></td><td>Kvittot hör inte till firman eller är redan registrerat.</td><td>Avvisad</td></tr>
</tbody>
</table></div>
<p>Flikarna Alla, Inskickad, Godkänd, Utbetald och Avvisad visar läget med en blick. Vid månadens slut räcker det att öppna fliken Godkänd och se vilka utlägg med egna pengar som ännu inte är återbetalda.</p>

<h2>Kvitton som kommer till kontoret</h2>
<p>Alla kvitton fotas inte på bygget. Ibland ligger en hög på skrivbordet, eller så kommer de som pdf i mejlen. I webben släpper du ett eller flera kvitton på en gång i Utlägg, och leverantör, datum och belopp läses av på samma sätt som i appen. Saknas ett fotografi kan utlägget skrivas in manuellt.</p>
<p>Till ett utlägg kan du lägga flera filer, till exempel kvittot och en följesedel. När revisorn eller redovisningsbyrån vill ha underlagen markerar du utläggen och laddar ner originalen i en fil, i stället för att leta i mobilernas bildgalleri.</p>
<p>Inkommande leverantörsfakturor hanteras i en egen del, Inköpsfakturor, och kan skickas in via en egen e-postadress för skanning. På så sätt hålls fakturor som ska betalas isär från utlägg som redan är betalda.</p>

${illuC('utlagg-mapp', 'Person lägger ett papper i en blå mapp med ett husmärke, en böjd pil visar vägen ner i mappen')}

<h2>Vad kvittot ska visa</h2>
<p>Ett fotat kvitto är bara värt något om det duger som underlag. Kontrollera därför att bilden är skarp och att följande går att läsa:</p>
<ul>
<li><strong>Säljarens namn</strong> och gärna organisationsnummer.</li>
<li><strong>Datum</strong> för köpet.</li>
<li><strong>Vad som köpts</strong>, så att det går att avgöra om kostnaden hör till verksamheten.</li>
<li><strong>Totalbelopp och moms.</strong> Momsen behövs för att ni ska kunna dra av den. Vid mindre köp räcker ofta en förenklad faktura, det vanliga kassakvittot, när beloppet inklusive moms är högst 4 000 kronor.</li>
</ul>
<p>Enligt ${extC(BOKFORINGSLAGEN, 'bokföringslagen')} ska underlagen sparas till och med sjunde året efter utgången av det kalenderår då räkenskapsåret avslutades. Sedan den 1 juli 2024 får ett pappersunderlag förstöras när det har förts över till elektronisk form, om bilden är fullständig och går att läsa. Kontrollera med er redovisningskonsult hur ni vill arkivera. Det fotograferade originalet sparas på utlägget och kan laddas ner när som helst.</p>
<p>Köpte medarbetaren något utomlands sparas beloppet i den valuta som står på kvittot, till exempel euro eller norska kronor, så att inget räknas om i fel kurs på vägen. Vill du dubbelkolla momsen på ett kvitto? Använd <a href="/sv/verktyg/moms-kalkylator">momskalkylatorn</a>.</p>

${illuC('utlagg-bygghandel', 'Byggarbetare i hjälm vid kassan i en bygghandel med betalkort och kvitto i händerna, bredvid en kundvagn med virke och en hink')}

<h2>Tre situationer från vardagen</h2>
<h3>Skruv på vägen till bygget</h3>
<p>Klockan sju stannar snickaren vid bygghandeln för en ask fasadskruv. Kvittot fotas i kassakön, projektet är redan valt eftersom arbetspasset har startat, och kvittot kan slängas när bilden är kontrollerad. När ekonomiansvarig attesterar på eftermiddagen ligger skruven redan som kostnad på rätt projekt.</p>
<h3>Diesel med företagskortet</h3>
<p>Servicebilen tankas med företagets kort och kvittot fotas i appen. Vid attesten ändrar kontoret Betalat av till Företagskort. Ingen ska ha ersättning, men kvittot finns som underlag och kostnaden syns på det projekt bilen kördes till.</p>
<h3>Månadsslut på kontoret</h3>
<p>Den som sköter ekonomin öppnar Inskickad, går igenom kvittona ett i taget och godkänner dem. Två utlägg betalade med egna pengar betalas tillbaka och markeras som utbetalda. Ett kvitto är en dubblett och avvisas. Därefter laddas originalen ner och skickas till redovisningsbyrån. Arbetet tar minuter i stället för en eftermiddag med kuvert och tejp.</p>

${illuC('utlagg-ersattning', 'Kontorsarbetare vid skrivbordet räcker över en hög guldmynt till en byggarbetare i hjälm som håller i ett kvitto')}

<h2>Kategorier som gör uppföljningen enkel</h2>
<p>Kategorin skrivs på varje utlägg och syns som en egen kolumn i listan. Håll er till ett fåtal kategorier som alla i laget förstår, så går det att se vart pengarna tar vägen utan att öppna varje kvitto. Ett förslag för ett byggföretag:</p>
<ul>
<li><strong>Material</strong> – skruv, lim, fogmassa och annat som byggs in i projektet.</li>
<li><strong>Förbrukning</strong> – klingor, slipband, tejp och skyddsplast.</li>
<li><strong>Drivmedel</strong> – diesel och bensin till bilar och maskiner.</li>
<li><strong>Hyra</strong> – maskiner och utrustning som hyrs per dag.</li>
<li><strong>Mat och dryck</strong> – till exempel fika på ett byggmöte.</li>
<li><strong>Underentreprenör</strong> – mindre tjänster som betalas på plats.</li>
</ul>
<p>Bestäm också vem som får använda företagskortet och till vad. När både kategori och betalsätt står på varje utlägg blir det enkelt att se om en viss typ av kostnad växer, och om något borde beställas på faktura till projektet i stället för att köpas i kassan.</p>

<h2>Utlägg i projektets ekonomi</h2>
<p>Ett utlägg som bara blir en rad i bokföringen säger ingenting om hur projektet går. I ByggExp räknas utläggen in i projektets kostnader tillsammans med inköpsfakturor och arbetskostnad (Full koll). Under fliken Ekonomi ser du budget, kostnader och marginal, och i Lönsamhet jämför du projekten med varandra.</p>
<p>Det gör det lättare att se när småköpen börjar äta upp marginalen, till exempel när samma material köps i bygghandeln gång på gång i stället för att beställas till projektet. Läs mer om <a href="/sv/blog/projektekonomi-och-lonsamhet">projektekonomi och lönsamhet</a> och om <a href="/sv/blog/kostnadskontroll-byggprojekt-marginal">kostnadskontroll i byggprojekt</a>, eller jämför kalkyl mot utfall med <a href="/sv/verktyg/efterkalkyl-mall">efterkalkylmallen</a>.</p>

<h2>Få med laget på rutinen</h2>
<p>Den bästa utläggsrutinen är den som laget följer utan att tänka på den. Visa appen på ett morgonmöte och fota ett riktigt kvitto tillsammans, så att alla ser hur kort steget är. Bestäm sedan tre saker och säg dem högt: att kvittot fotas innan man lämnar kassan, att projektet alltid väljs och att utlägg med egna pengar betalas tillbaka vid en bestämd tidpunkt, till exempel med nästa lön.</p>
<p>Den sista punkten är viktigast. När medarbetarna märker att pengarna kommer tillbaka i tid blir det självklart att fota kvittot direkt. Följ upp den första månaden genom att titta på fliken Inskickad och påminn den som har kvitton som ännu inte är registrerade.</p>

<h2>Checklista: en rutin för utlägg som håller</h2>
<div class="article-table"><table>
<thead><tr><th>Rutin</th><th>Varför</th><th>I ByggExp</th></tr></thead>
<tbody>
<tr><td><strong>Kvittot registreras samma dag</strong></td><td>Papperskvitton bleknar och försvinner</td><td>Fotas i appen vid kassan</td></tr>
<tr><td><strong>Varje utlägg har ett projekt</strong></td><td>Annars syns kostnaden inte där den hör hemma</td><td>Projekt väljs på utlägget</td></tr>
<tr><td><strong>Betalsätt är tydligt</strong></td><td>Bara egna pengar ska ersättas</td><td>Egna pengar eller företagskort</td></tr>
<tr><td><strong>En person attesterar</strong></td><td>Någon ansvarar för att kostnaden är rätt</td><td>Godkänn eller avvisa i webben</td></tr>
<tr><td><strong>Ersättning följs upp</strong></td><td>Ingen ska vänta på sina pengar</td><td>Status Utbetald</td></tr>
<tr><td><strong>Underlagen sparas</strong></td><td>Krav i bokföringslagen</td><td>Original på utlägget, nedladdning i en fil</td></tr>
</tbody>
</table></div>
<p>Skriv ner rutinen och gå igenom den med laget en gång. Det viktigaste är att kvittot fotas direkt, resten blir en vana när alla ser att pengarna kommer tillbaka snabbare.</p>

<h2>Kom igång</h2>
<ol>
<li><strong>Boka en genomgång.</strong> Vi sätter upp kontot, projekten och kategorierna ni använder.</li>
<li><strong>Låt laget ladda ner appen.</strong> Första kvittot fotas på några sekunder.</li>
<li><strong>Attestera första veckan tillsammans.</strong> Då ser ni direkt hur kvittona landar på projekten.</li>
</ol>
<p>Utlägg ingår i Koll på pengarna (${FAKTURA_PRICE} kr/mån, max 2 användare) och i Full koll (${KOMPLETT_PRICE} kr/mån, 10 användare ingår). De första 14 dagarna är gratis med alla funktioner, utan startavgift och utan bindningstid. Hur kvitton och material används i fakturan till kunden läser du om under <a href="/sv/funktioner/tidrapportering-hantverkare">tidrapportering för hantverkare</a>.</p>
`.trim(),
  faq: [
    {
      question: 'Vad kostar en utläggsapp för byggföretag?',
      answer: `I ByggExp ingår utlägg i Koll på pengarna för ${FAKTURA_PRICE} kr/mån exkl. moms, för upp till 2 användare och 100 skannade kvitton per månad. Ska hela laget fota kvitton passar Full koll för ${KOMPLETT_PRICE} kr/mån med 10 användare, därefter ${KOMPLETT_EXTRA} kr per extra användare. De första 14 dagarna är gratis.`,
    },
    {
      question: 'Läser appen av beloppet och momsen automatiskt?',
      answer:
        'Ja. När kvittot fotas läses leverantör, datum, totalbelopp, moms och valuta av. Medarbetaren kontrollerar uppgifterna och kan rätta dem innan utlägget sparas.',
    },
    {
      question: 'Kan jag skanna flera kvitton på en gång?',
      answer:
        'Ja, i webben. Släpp ett eller flera kvitton i Utlägg så läses uppgifterna av för vart och ett. I appen fotas ett kvitto i taget.',
    },
    {
      question: 'Hur betalar man tillbaka ett utlägg till en anställd?',
      answer:
        'Utlägget attesteras först. Själva utbetalningen gör ni som vanligt, till exempel med lönen eller som en separat överföring, och markerar sedan utlägget som utbetalt i ByggExp. Systemet betalar inte ut pengar självt.',
    },
    {
      question: 'Behöver jag spara papperskvittot?',
      answer:
        'Sedan den 1 juli 2024 får pappersunderlag förstöras enligt bokföringslagen när de har förts över till elektronisk form, om bilden är fullständig och går att läsa. Underlagen ska sparas till och med sjunde året efter utgången av det kalenderår då räkenskapsåret avslutades. Fråga er redovisningskonsult om ni har särskilda rutiner.',
    },
    {
      question: 'Kan ett utlägg ha flera bilagor?',
      answer:
        'Ja. Utöver kvittot kan du lägga till fler filer på samma utlägg, till exempel en följesedel. Alla följer med när originalen laddas ner.',
    },
    {
      question: 'Fungerar det med kvitton i euro?',
      answer:
        'Ja. Valutan läses av från kvittot och beloppet sparas i den valutan, till exempel EUR, NOK eller USD.',
    },
  ],
  related: [
    { href: '/sv/blog/utlagg-app-bygg', label: 'Guide: utlägg och kvitton' },
    { href: '/sv/blog/fota-kvitton-och-hantera-utlagg', label: 'Fota kvitton och hantera utlägg' },
    { href: '/sv/blog/projektekonomi-och-lonsamhet', label: 'Projektekonomi och lönsamhet' },
    { href: '/sv/blog/moms-hantverkare', label: 'Moms för hantverkare' },
    { href: '/sv/verktyg/moms-kalkylator', label: 'Momskalkylator' },
    { href: '/sv/funktioner/tidrapportering-hantverkare', label: 'Tidrapportering för hantverkare' },
    { href: '/sv/priser', label: 'Priser och paket' },
  ],
};

/* ------------------------------------------------------------------------- */
/* Verktygshantering                                                          */
/* ------------------------------------------------------------------------- */

const VERKTYG: FunktionPage = {
  slug: 'verktygshantering',
  plan: 'projekt',
  priceIncluded: 'Verktygsregister med QR-koder ingår',
  heroCheck: 'QR-kod på varje verktyg',
  title: 'Verktygshantering för bygg – app med QR-kod | ByggExp',
  description:
    'Verktygshantering i appen: QR-kod på varje verktyg, status, vem som har det och var det finns, överlämning och kontroller med historik. 14 dagar gratis.',
  name: 'Verktygshantering för bygg',
  h1: 'Verktygshantering för bygg.',
  h1Accent: 'Vem har vad, och var.',
  lead: 'Skanna QR-koden och se vem som har verktyget.',
  hero: {
    name: 'verktygshantering-qr',
    alt: 'Hantverkare på knä håller en blå skruvdragare och en QR-etikett, en verktygslåda och en cirkelsåg på hyllan bakom',
  },
  stepsHeading: ['Register', 'med QR-kod'],
  steps: [
    {
      title: 'Registrera verktygen',
      text: 'Namn, foto, plats och anteckningar. Koppla till projekt och medarbetare.',
      bullets: ['I webben eller appen', 'QR-etikett per verktyg', 'Skriv ut flera etiketter på en gång'],
      img: '/landing/features/6verktyg-1200.webp',
      alt: 'Verktyg i ByggExp: verktygslista med status, QR-kod, innehavare och projekt i webben och verktygslistan i mobilappen',
    },
    {
      title: 'Se vem som har vad',
      text: 'Status, QR-kod, innehavare och projekt i en lista.',
      bullets: ['Tillgänglig, Används, På reparation, Trasig', 'Filtrera per projekt', 'Historik per verktyg'],
      img: '/landing/funktioner/screen-verktyg-1200.webp',
      alt: 'Verktygslista i ByggExp med statusflikar, QR-kod, vem som har verktyget och projekt',
    },
  ],
  body: `
<p>Varje byggföretag känner igen frågan i telefonen: vem har lasern? Verktyg och maskiner flyttas mellan bilar, bodar och projekt, och den som senast hade dem har ofta redan glömt det. Ett verktygsregister i appen ger svaret direkt. I ByggExp får varje verktyg en QR-kod, en status och en historik, och den som tar över ett verktyg skannar koden med mobilen. Här går vi igenom hur registret byggs upp, hur överlämning och kontroller fungerar och hur ni kommer igång utan att behöva inventera hela förrådet en lördag.</p>

<h2>Så fungerar verktygshanteringen i ByggExp</h2>
<ol>
<li><strong>Verktyget registreras.</strong> I webben eller appen anger du namn, foton, plats och anteckningar, till exempel serienummer eller tillbehör som ska följa med.</li>
<li><strong>Verktyget får en QR-kod.</strong> Koden skapas med ett klick och skrivs ut som etikett. Har du många verktyg skriver du ut alla etiketter på en gång.</li>
<li><strong>Verktyget kopplas.</strong> Koppla verktyget till de projekt där det används och till de medarbetare som brukar ha det.</li>
<li><strong>Medarbetaren skannar koden.</strong> I appen syns direkt om verktyget finns i förrådet, är utlånat eller redan är ditt.</li>
<li><strong>Verktyget byter händer.</strong> Med Ta över blir du ansvarig. Med Lämna tillbaka går verktyget tillbaka till förrådet.</li>
<li><strong>Allt hamnar i historiken.</strong> Registrering, överlämningar, återlämningar, kontroller, reparationer och statusändringar sparas med datum och person.</li>
</ol>

${illuC('verktygshantering-skanna', 'Byggarbetare i hjälm på knä riktar mobilen mot en QR-etikett på en blå cirkelsåg')}

<h2>Fyra statusar som säger allt</h2>
<p>Varje verktyg har en av fyra statusar. Listan kan filtreras på status och på projekt, och antalet per status syns överst.</p>
<div class="article-table"><table>
<thead><tr><th>Status</th><th>Betyder</th><th>Typisk åtgärd</th></tr></thead>
<tbody>
<tr><td><strong>Tillgänglig</strong></td><td>Verktyget ligger i förrådet och kan lånas</td><td>Skanna och ta över</td></tr>
<tr><td><strong>Används</strong></td><td>En medarbetare har verktyget</td><td>Ring rätt person direkt</td></tr>
<tr><td><strong>På reparation</strong></td><td>Verktyget är på service eller lagning</td><td>Planera in ersättare</td></tr>
<tr><td><strong>Trasig</strong></td><td>Verktyget får inte användas</td><td>Laga eller skrota</td></tr>
</tbody>
</table></div>
<p>Kolumnen Innehas av visar antingen en person eller Förråd. Fältet Plats beskriver var verktyget finns, till exempel platsboden på ett projekt eller en viss servicebil. Tillsammans svarar de på frågan var verktyget är, utan att någon behöver ringa runt.</p>

<h2>Överlämning utan pärm</h2>
<p>Den svaga punkten i de flesta verktygsrutiner är överlämningen. En pärm i förrådet fylls i den första veckan och glöms sedan bort, och ett verktyg som lämnas direkt mellan två bilar registreras aldrig.</p>
<p>I ByggExp skannar den som tar emot verktyget QR-koden och trycker Ta över. Det fungerar lika bra ute på bygget som i förrådet. I webben kan arbetsledaren registrera samma sak: välj vem verktyget lämnas över till, eller lämna fältet tomt för att verktyget ska gå tillbaka till förrådet. Överlämningen sparas med vem som lämnade, vem som tog emot och vilket projekt det gällde.</p>
<p>Ett tips är att sätta etiketten där den syns även när verktyget ligger i sin väska, till exempel på väskans handtag och på själva maskinen. Då går det fortare att skanna än att skriva en rad i en pärm, och då blir det också gjort.</p>

${illuC('verktygshantering-overlamning', 'Två byggarbetare i hjälm vid en grå låda på bygget, den ena håller en blå borrmaskin med QR-etikett och den andra skannar med mobilen')}

<h2>Kontroller och service</h2>
<p>Elverktyg, stegar, lyftredskap och fallskydd behöver ses över regelbundet. Enligt ${extC(AFS_2023_11, 'Arbetsmiljöverkets')} regler ska arbetsgivaren se till att arbetsutrustning är säker att använda, och det kräver att någon faktiskt kontrollerar den och vet när det är dags igen.</p>
<p>På varje verktyg registrerar du en kontroll med skick (OK, Behöver service eller Trasig) och en anteckning. Datum för senaste och nästa kontroll står på verktyget, så det går att se vilka som snart ska ses över. När ett verktyg skickas på lagning sätter du status På reparation, och när det kommer tillbaka står hela förloppet i historiken.</p>
<p>Historiken är också ett bra underlag när ni ska bestämma om en maskin ska lagas en gång till eller bytas ut. Läs mer om att <a href="/sv/blog/leasa-eller-kopa-maskiner-byggforetag">leasa eller köpa maskiner</a> och om <a href="/sv/blog/verktyg-direktavdrag-eller-avskrivning">direktavdrag eller avskrivning för verktyg</a>. Kontroller av utrustning passar också in i <a href="/sv/verktyg/skyddsrond-mall">skyddsronden</a>.</p>

${illuC('verktygshantering-service', 'Tekniker vid en arbetsbänk kontrollerar en blå vinkelslip med en skruvmejsel, på hyllan bakom står en verktygslåda och en cirkelsåg')}

<h2>Tre situationer från vardagen</h2>
<h3>Lasern som saknas</h3>
<p>Arbetsledaren ska sätta ut höjder på ett nytt projekt och lasern ligger inte i förrådet. Listan visar att den används och vem som har den, och på vilket projekt. Ett samtal senare är den på väg, i stället för en förmiddag av letande.</p>
<h3>Ny medarbetare börjar</h3>
<p>En ny snickare får skruvdragare, cirkelsåg och fallskydd första dagen. Verktygen kopplas till medarbetaren och lämnas över i appen. Den dagen anställningen tar slut syns i listan vilka verktyg som ska lämnas tillbaka.</p>
<h3>Projektet avslutas</h3>
<p>När sista dagen på ett projekt närmar sig filtrerar arbetsledaren listan på projektet och ser vilka verktyg som fortfarande står där. Allt som ska hem lämnas tillbaka till förrådet, och det som är trasigt märks direkt i stället för att upptäckas vid nästa jobb.</p>

<h2>Etiketter som håller på bygget</h2>
<p>En QR-kod som inte går att läsa hjälper ingen. Etiketten sitter på verktyg som skakar, blir dammiga, regnas på och slängs in i bilen, så några enkla val gör stor skillnad:</p>
<ul>
<li><strong>Välj tåligt material.</strong> Plastetiketter eller laminerade etiketter klarar väder och smuts bättre än papper.</li>
<li><strong>Sätt etiketten på en plan yta.</strong> En böjd eller strukturerad yta gör koden svårare att läsa.</li>
<li><strong>Märk både väska och maskin.</strong> Då går det att skanna även när maskinen ligger nedpackad.</li>
<li><strong>Byt ut slitna etiketter.</strong> Skriv ut en ny från verktyget i webben och sätt den över den gamla.</li>
</ul>
<p>Varje kod är kopplad till ett verktyg, så en ny etikett för samma verktyg tar några sekunder att skriva ut.</p>

<h2>Verktyg, projekt och medarbetare hänger ihop</h2>
<p>Ett verktyg kan kopplas till ett eller flera projekt och till de medarbetare som brukar använda det. Det ger två vyer som arbetsledaren har nytta av varje vecka.</p>
<p>Den första är projektet: filtrera listan på ett projekt och se vilka maskiner som står där just nu. Det hjälper när ett nytt moment ska börja och du vill veta om rätt utrustning redan finns på plats, eller om något måste hämtas från ett annat bygge.</p>
<p>Den andra är medarbetaren: i kolumnen Innehas av ser du vem som har vad. Det gör det enklare att fördela utrustning rättvist och att veta vad som ska lämnas tillbaka när någon slutar eller byter lag.</p>
<p>Fler fält än så behövs sällan. Ett register som är enkelt att hålla aktuellt slår ett detaljerat register som ingen orkar uppdatera.</p>

<h2>Hyrd och lånad utrustning</h2>
<p>Ställningar, lyftar, byggtorkar och större maskiner hyrs ofta per dag eller vecka. Det är dyr utrustning att tappa bort, och hyran tickar så länge den inte är återlämnad. Registrera den hyrda utrustningen som ett verktyg med QR-etikett precis som er egen, och skriv i anteckningen vem den är hyrd från och när den ska tillbaka.</p>
<p>Koppla den till projektet där den används. Då ser arbetsledaren i projektets verktygslista vad som står på bygget, och när momentet är klart går det snabbt att se vad som ska skickas tillbaka. Samma sak gäller utrustning som ni lånar ut till eller lånar av en samarbetspartner: en överlämning i appen visar vem som har den.</p>

<h2>Inventering en gång om året</h2>
<p>Även med ett register som används varje dag är det klokt att stämma av en gång om året, gärna inför bokslutet. Gå igenom förrådet och bilarna och skanna varje verktyg. Det som inte hittas syns direkt i listan, med den senaste personen som hade det i historiken. Verktyg som är trasiga sedan länge kan skrotas och tas bort ur registret, så att listan visar det ni faktiskt har.</p>
<p>Inventeringen ger också ett bra underlag för nästa års inköp: vilka maskiner används hela tiden, vilka står mest i förrådet och vilka går ofta på reparation.</p>

<h2>Vem gör vad</h2>
<div class="article-table"><table>
<thead><tr><th>Roll</th><th>Gör</th><th>Var</th></tr></thead>
<tbody>
<tr><td><strong>Yrkesarbetare</strong></td><td>Skannar QR-koden, tar över och lämnar tillbaka verktyg</td><td>Mobilappen</td></tr>
<tr><td><strong>Arbetsledare</strong></td><td>Ser vem som har vad, registrerar överlämningar och kontroller</td><td>Webben och appen</td></tr>
<tr><td><strong>Ansvarig för förrådet</strong></td><td>Registrerar verktyg, skriver ut etiketter, sätter status</td><td>Webben</td></tr>
</tbody>
</table></div>

${illuC('verktygshantering-register', 'Kvinna vid en bärbar dator bredvid en lista med medarbetare, verktyg och platsmarkörer')}

<h2>Kom igång utan stor inventering</h2>
<p>Ni behöver inte registrera allt på en gång. Börja med det som kostar mest att tappa bort:</p>
<ol>
<li><strong>De dyra maskinerna först.</strong> Laser, borrhammare, kapsåg och mätinstrument. Fota, namnge och sätt QR-etikett.</li>
<li><strong>En bil i taget.</strong> När en servicebil ändå är inne, registrera det som ligger i den och sätt bilen som plats.</li>
<li><strong>Kör i två veckor.</strong> Låt laget skanna vid varje överlämning. Därefter fyller ni på med resten.</li>
<li><strong>Lägg in kontrolldatum.</strong> För utrustning som ska ses över regelbundet anger ni nästa kontroll direkt.</li>
</ol>
<p>Verktygshantering ingår i Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms, med 10 användare, tidrapportering och planering. Varje extra användare kostar ${EXTRA_USER_PRICE} kr/mån. Vem som är på vilket projekt planerar du i <a href="/sv/funktioner/resursplanering">resursplaneringen</a>, som ingår i samma paket. De första 14 dagarna är gratis, utan bindningstid.</p>
`.trim(),
  faq: [
    {
      question: 'Vad kostar verktygshantering i ByggExp?',
      answer: `Verktygshantering ingår i Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms, inklusive 10 användare. Extra användare kostar ${EXTRA_USER_PRICE} kr/mån. Vid årsbetalning får du 15 % rabatt, och de första 14 dagarna är gratis.`,
    },
    {
      question: 'Hur fungerar QR-koderna?',
      answer:
        'Varje verktyg får en egen kod som skrivs ut som etikett. Medarbetaren skannar koden med appen och ser direkt om verktyget finns i förrådet eller vem som har det, och kan ta över eller lämna tillbaka det.',
    },
    {
      question: 'Behöver jag köpa särskilda etiketter eller skannrar?',
      answer:
        'Nej. Etiketterna skrivs ut från webben och skannas med mobilkameran i appen. Välj gärna tåliga etiketter som klarar väder och smuts.',
    },
    {
      question: 'Kan jag se historiken för ett verktyg?',
      answer:
        'Ja. Registrering, överlämningar, återlämningar, kontroller, reparationer och statusändringar sparas med datum och person.',
    },
    {
      question: 'Kan ByggExp påminna om service och besiktning?',
      answer:
        'Datum för senaste och nästa kontroll står på varje verktyg. Det skickas ingen automatisk påminnelse om kontrollen, men du kan lägga en uppgift med påminnelse för den som ansvarar.',
    },
    {
      question: 'Fungerar det för maskiner och hyrd utrustning?',
      answer:
        'Ja, registret fungerar för all utrustning som ska följas: handverktyg, maskiner, mätinstrument eller hyrd utrustning. Ange i anteckningen om något är hyrt och när det ska tillbaka.',
    },
    {
      question: 'Vad är skillnaden mellan verktygshantering och inventarieförteckning?',
      answer:
        'En inventarieförteckning visar vad företaget äger. Verktygshantering visar dessutom var utrustningen är, vem som har den och i vilket skick den är, och uppdateras varje gång något byter händer.',
    },
  ],
  related: [
    { href: '/sv/blog/verktygshantering-app', label: 'Guide: koll på verktygen' },
    { href: '/sv/blog/hantera-verktyg-och-utrustning', label: 'Hantera verktyg och utrustning' },
    { href: '/sv/blog/leasa-eller-kopa-maskiner-byggforetag', label: 'Leasa eller köpa maskiner' },
    { href: '/sv/blog/verktyg-direktavdrag-eller-avskrivning', label: 'Direktavdrag eller avskrivning' },
    { href: '/sv/verktyg/skyddsrond-mall', label: 'Skyddsrond-mall' },
    { href: '/sv/funktioner/resursplanering', label: 'Resursplanering' },
    { href: '/sv/priser', label: 'Priser och paket' },
  ],
};

export const FUNKTION_PAGES_C: FunktionPage[] = [UTLAGG, VERKTYG];
