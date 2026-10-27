// Batch B of /sv/funktioner/<slug>: offert & kalkyl, fakturering, lön, ÄTA.
// Registered with one spread in funktion-pages.ts (FUNKTION_PAGES + ILLU_HEIGHT).
// Self-contained on purpose: funktion-pages.ts imports this file, so nothing
// here may read values from it at module load (types only).
//
// Claims are code-checked 2026-10-27 (ByggExp-BackEnd offers/, invoices/,
// payroll/, ata/; byggexp-admin ProjectAtaTab.jsx, offerToInvoice.js) on top of
// docs/seo/product-facts-verified.md. Respect the NO list: no ROT on offers, no
// digital signing, no offer → project, no ÄTA PDF or customer approval, no hours
// summed per ÄTA, no invoice "from logged time", no Fortnox/Visma either way, no
// SIE4 for payroll, no automatic Byggavtalet calculation, no timtyp factors in
// the payroll run. Packages = ByggExp-BackEnd/src/company/modules.ts: Koll på
// pengarna has offers, invoices, payroll, budget, profitability, projektkalkyl
// but NOT shifts; Koll på jobbet has shifts but no economy.

import type { FunktionPage } from './funktion-pages';
import { FAKTURA_PRICE, PROJEKT_PRICE } from '../components/Pricing/Pricing';

const KOMPLETT_PRICE = 990;
const ADDON_PRICE = 199;

export const ILLU_HEIGHT_B: Record<string, number> = {
  'offert-kalkyl-hero': 1214,
  'offert-kalkyl-skicka': 856,
  'offert-kalkyl-marginal': 1181,
  'offert-kalkyl-matning': 1035,
  'offert-kalkyl-material': 850,
  'fakturering-skicka': 814,
  'fakturering-rot': 836,
  'fakturering-omvand': 923,
  'fakturering-arkiv': 1129,
  'fakturering-forfallo': 761,
  'lon-lonekorning': 1142,
  'lon-attest': 851,
  'lon-timlon': 1230,
  'lon-stampla': 1611,
  'lon-period': 1210,
  'ata-upptackt': 787,
  'ata-dagrapport': 1153,
  'ata-ritning': 1120,
  'ata-godkand': 1217,
  'ata-faktura': 1201,
};

const IMG_DIR = '/landing/funktioner';
function illu(name: string, alt: string): string {
  const src = (w: number) => `${IMG_DIR}/${name}-${w}.webp`;
  return `<figure class="fn-illu"><img src="${src(1200)}" srcset="${src(640)} 640w, ${src(1200)} 1200w" sizes="(max-width: 760px) 100vw, 560px" width="1200" height="${ILLU_HEIGHT_B[name]}" loading="lazy" decoding="async" alt="${alt}"></figure>`;
}

const ext = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const SKV_ROT =
  'https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html';
const SKV_OMVAND_MOMS =
  'https://www.skatteverket.se/foretag/moms/sarskildamomsregler/byggverksamhet/omvandbetalningsskyldighetinombyggsektorn.4.47eb30f51122b1aaad28000545.html';
const SKV_AGI =
  'https://www.skatteverket.se/foretag/arbetsgivare/lamnaarbetsgivardeklaration.4.41f1c61d16193087d7fcaeb.html';
const SKV_SKATTETABELLER =
  'https://www.skatteverket.se/foretag/arbetsgivare/arbetsgivaravgifterochskatteavdrag/skattetabeller.4.96cca41179bad4b1aa8a46.html';
const SKV_TRAKTAMENTE_BYGG =
  'https://www.skatteverket.se/download/18.1522bf3f19aea8075ba3da6/1768986614741/traktamenten-mm-i-byggbranschen-skv353-utgava15.pdf';
const BYGGAVTALET =
  'https://www.byggnads.se/49ec78/siteassets/kollektivavtal/byggavtalet-2025-digital-utgava-1.pdf';
const KONSUMENTTJANSTLAGEN =
  'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/konsumenttjanstlag-1985716_sfs-1985-716/';
const RANTELAGEN =
  'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/rantelag-1975635_sfs-1975-635/';

/* ------------------------------------------------------------------------- */
/* 1. Kalkylprogram bygg – offert och kalkyl                                  */
/* ------------------------------------------------------------------------- */

const OFFERT_KALKYL: FunktionPage = {
  slug: 'offert-kalkyl',
  plan: 'faktura',
  priceIncluded: 'Offerter, projektkalkyl och fakturor ingår',
  heroCheck: 'Offert som PDF med logotyp',
  title: 'Kalkylprogram bygg – offert och kalkyl i ett | ByggExp',
  description:
    'Kalkylprogram för bygg: projektkalkyl med marginal, offert med artiklar och moms, PDF med logotyp och offert till faktura. 14 dagar gratis.',
  name: 'Kalkylprogram för bygg',
  h1: 'Kalkylprogram för bygg.',
  h1Accent: 'Från kalkyl till skickad offert.',
  lead: 'Räkna på jobbet, skicka offerten och fakturera från den.',
  hero: {
    name: 'offert-kalkyl-hero',
    alt: 'Hantverkare i keps sitter vid en laptop och skriver, bredvid ett papper med en bild av ett hus bakom en byggställning och en penna',
  },
  stepsHeading: ['Kalkyl, offert', 'och faktura'],
  steps: [
    {
      title: 'Skapa offerten',
      text: 'Rader med artiklar, antal, à-pris och moms. Giltig till-datum.',
      bullets: ['PDF med logotyp', 'Skickas till kunden via e-post', 'Status: skickad, accepterad eller avvisad'],
      img: '/landing/features/7offerter-1200.webp',
      alt: 'Ny offert i ByggExp med kund, giltig till-datum och offertrader i webben och i mobilen',
    },
    {
      title: 'Gör om till faktura',
      text: 'Den accepterade offerten blir ett fakturautkast med samma rader.',
      img: '/landing/features/8fakturor-1200.webp',
      alt: 'Ny faktura i ByggExp med kund, datum och fakturarader i webben och i mobilen',
    },
    {
      title: 'Följ marginalen',
      text: 'Budget, kostnader och marginal per projekt.',
      img: '/landing/features/9ekonomi-1200.webp',
      alt: 'Projektets ekonomi i ByggExp: timmar, kostnader, material, fakturerat och marginal mot budget',
    },
  ],
  body: `
<p>Ett kalkylprogram för bygg ska svara på två frågor innan offerten går iväg: vad kostar jobbet för oss, och vad ska kunden betala? I ByggExp räknar du på intäkter och kostnader i en projektkalkyl, bygger offerten av rader från ditt artikelregister och skickar den som PDF. När kunden har sagt ja blir offerten ett fakturautkast, och under projektets gång ser du om marginalen håller. Här går vi igenom flödet och hur du gör kalkylen träffsäker.</p>

<h2>Kalkylen först, offerten sedan</h2>
<p>Många småföretag skriver offerten direkt och räknar i huvudet. Det fungerar tills ett jobb går med förlust utan att någon ser varför. Skilj därför på de två stegen:</p>
<ul>
<li><strong>Kalkylen är din.</strong> Den visar alla kostnader: material, löner, underentreprenörer, maskinhyra och det som brukar glömmas, som avfall, frakt och resor. Kunden ser den aldrig.</li>
<li><strong>Offerten är kundens.</strong> Den visar vad som ingår, priset och villkoren. Den ska vara lätt att läsa och svår att missförstå.</li>
</ul>
<p>När kalkylen är klar vet du vilket pris som ger den marginal du behöver. Då blir offerten ett beslut, inte en gissning.</p>

${illu('offert-kalkyl-matning', 'Hantverkare i hjälm mäter ett badrumsgolv med måttband medan kunden står bredvid med en surfplatta, med kakelplattor och en hink på golvet')}

<h2>Så fungerar projektkalkylen i ByggExp</h2>
<p>Projektkalkylen är ett kalkylblad byggt för byggföretag. Du ställer intäkter mot kostnader och ser direkt vad som blir kvar:</p>
<ol>
<li><strong>Intäktssidan.</strong> Tabeller för intäkter, till exempel från privatkunder med 25 % moms och från byggföretag med omvänd moms. Moms anges per tabell eller per rad.</li>
<li><strong>Kostnadssidan.</strong> Tabeller för material, löner och andra kostnader, med de kolumner du själv vill ha.</li>
<li><strong>Sammanfattningen.</strong> Kostnader mot vinst, marginal i procent och hur stor andel av intäkterna som går till kostnader.</li>
</ol>
<p>Kalkylen kan kopplas till ett projekt, sparas som mall och användas igen nästa gång du räknar på ett liknande jobb. Den kan exporteras som PDF eller Excel, och har du redan räknat i Excel läser du in filen. Behöver en kollega eller revisorn titta på siffrorna skapar du en läslänk som slutar gälla efter en timme, och den som får länken kan lämna kommentarer.</p>

<h3>Räkneexempel: badrumsrenovering</h3>
<p>Säg att ett badrum på sex kvadratmeter ger följande kostnader i kalkylen: material 38 000 kr, 70 timmar arbete med en lönekostnad på 420 kr per timme (29 400 kr), plattsättare som underentreprenör 18 000 kr och container och frakt 3 500 kr. Summan blir 88 900 kr. Vill du ha 20 % marginal på priset delar du kostnaden med 0,8 och får 111 125 kr exkl. moms. Lägger du bara på 20 % på kostnaden blir priset 106 680 kr, och marginalen bara knappt 17 %. Skillnaden mellan påslag och marginal är ett av de vanligaste räknefelen i byggofferter. Kontrollera dina egna siffror med <a href="/sv/verktyg/paslag-marginal-kalkylator">påslag- och marginalkalkylatorn</a>.</p>

${illu('offert-kalkyl-material', 'Hantverkare vid ett skrivbord med laptop och en mugg, bredvid en trave skivor och en pall med block')}

<h2>Bygg offerten av rader du redan har</h2>
<p>En offert i ByggExp består av rader med artikelnummer, beskrivning, antal, enhet, à-pris, rabatt och moms. Momsen är 25 % som standard och kan ändras per rad. Summorna räknas ut automatiskt.</p>
<ul>
<li><strong>Artikelregistret.</strong> Lägg upp material och arbete du ofta säljer, med inköpspris, försäljningspris, enhet och moms. När du väljer en artikel på offertraden fylls namn, pris och moms i. Prislistor från grossisten kan läsas in, så att du slipper skriva in dem för hand.</li>
<li><strong>Giltig till.</strong> Ange hur länge offerten gäller. Datumet skrivs ut på PDF:en, och du slipper bli bunden av ett pris som gav dig ett halvår gammalt materialpris.</li>
<li><strong>Logotyp.</strong> PDF:en får företagets logotyp, så offerten ser likadan ut oavsett vem i firman som skapar den.</li>
<li><strong>Kopiera en tidigare offert.</strong> Gör du ofta samma typ av jobb kopierar du en gammal offert och justerar antal och priser. Det blir din egen mall offert bygg, med dina egna priser.</li>
</ul>
<p>Är du inte redo för ett program ännu? Ladda ner vår gratis <a href="/sv/verktyg/offert-mall">offertmall för bygg</a> och läs guiden om hur du <a href="/sv/blog/skriva-offert">skriver en offert</a> som håller.</p>

<h2>Skicka, följ upp och fakturera</h2>
<p>När offerten är klar skickar du den till kunden via e-post direkt från ByggExp, med PDF:en bifogad. Offerten får status skickad. När kunden svarar ändrar du status till accepterad eller avvisad. I listan filtrerar du på status och ser vilka offerter som väntar på svar, så att ingen förfrågan blir liggande utan uppföljning.</p>
<p>När jobbet är beställt skapar du ett fakturautkast från offerten. Raderna, kundens namn och e-post följer med, och ordreferensen blir offertens nummer. Du justerar det som har ändrats och skickar fakturan. Hur fakturan fungerar, med ROT-avdrag och omvänd byggmoms, beskriver vi på sidan om <a href="/sv/funktioner/fakturering">fakturaprogram för bygg</a>.</p>

${illu('offert-kalkyl-skicka', 'Ett dokument flyger som ett pappersflygplan från en laptop till en person som står i ett hus och tittar i mobilen')}

<h2>Vad offerten bör innehålla</h2>
<p>En offert som är tydlig från början sparar diskussioner när fakturan kommer. Gå igenom listan innan du skickar:</p>
<div class="article-table"><table>
<thead><tr><th>Punkt</th><th>Varför</th><th>I ByggExp</th></tr></thead>
<tbody>
<tr><td><strong>Vad som ingår</strong></td><td>Det kunden inte ser på offerten tror kunden ändå ingår</td><td>Beskrivning och rader per moment</td></tr>
<tr><td><strong>Vad som inte ingår</strong></td><td>Undviker tvist om rivning, bortforsling och el</td><td>Egen textrad i beskrivningen</td></tr>
<tr><td><strong>Pris och moms</strong></td><td>Privatpersoner jämför priser inklusive moms</td><td>Moms per rad, summor räknas automatiskt</td></tr>
<tr><td><strong>Giltighetstid</strong></td><td>Materialpriser ändras</td><td>Giltig till på PDF:en</td></tr>
<tr><td><strong>Hur ändringar hanteras</strong></td><td>Extraarbete ska kunna faktureras</td><td>Skriv in villkoren för ÄTA i beskrivningen</td></tr>
<tr><td><strong>Betalningsvillkor</strong></td><td>Styr när pengarna kommer</td><td>Sätts på fakturan, standard från kunden</td></tr>
</tbody>
</table></div>
<p>Gäller jobbet en privatperson och ROT-avdrag? Räkna på kundens del med <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylatorn</a> och skriv i offerten att priset gäller före avdrag. Själva avdraget görs på fakturan.</p>
<p>Ett fast pris är bara så bra som det du har skrivit in i offerten. Ändringar och tillägg som kunden vill ha under jobbets gång hanterar du som ÄTA, och en godkänd ÄTA kan också bli en faktura. Läs mer på sidan om <a href="/sv/funktioner/ata">ÄTA-hantering</a>.</p>

<h2>Efterkalkylen gör nästa offert bättre</h2>
<p>Kalkylen är en prognos. Det är först när jobbet är klart som du vet om den höll. I ByggExp hamnar fakturor, leverantörsfakturor och skannade kvitton på projektet, och under projektets ekonomi ser du budget, kostnader och marginal. I Lönsamhet jämför du marginalen mellan projekten.</p>
<p>Gör det till en vana att efter varje större jobb ställa tre frågor:</p>
<ol>
<li><strong>Höll timmarna?</strong> Om ni räknade med 70 timmar och använde 90 behöver nästa kalkyl ett annat timantal för samma moment.</li>
<li><strong>Höll materialet?</strong> Spill, prisökningar och kompletteringsköp syns först i efterhand.</li>
<li><strong>Vad blev inte fakturerat?</strong> Extraarbete som aldrig blev ÄTA är förlorade pengar.</li>
</ol>
<p>Spara sedan den uppdaterade kalkylen som mall. Efter några jobb har du kalkyler som bygger på verkliga siffror i stället för på minnet. Vill du göra efterkalkylen i ett eget dokument finns en gratis <a href="/sv/verktyg/efterkalkyl-mall">mall för efterkalkyl</a>.</p>

${illu('offert-kalkyl-marginal', 'Person vid ett skrivbord framför en skärm med ett cirkeldiagram och en stigande pil')}

<h2>Kalkylprogram, kalkylatorer eller Excel?</h2>
<p>De flesta hantverkare börjar i Excel, och det är inget fel med det. Ett eget kalkylprogram blir värt det när någon av de här punkterna stämmer:</p>
<ul>
<li>Fler än en person skriver offerter och priserna ska vara desamma.</li>
<li>Du vill se vilka offerter som väntar på svar utan att leta i mejlen.</li>
<li>Du skriver om samma rader från offerten till fakturan.</li>
<li>Du vet inte förrän bokslutet om ett jobb gick med vinst.</li>
</ul>
<p>För enskilda mängder är kalkylatorerna snabbast: räkna ut <a href="/sv/verktyg/betong-kalkylator">betong</a>, <a href="/sv/verktyg/gips-kalkylator">gips</a> eller <a href="/sv/verktyg/kvadratmeter-kalkylator">kvadratmeter</a> och för in resultatet i kalkylen. Vad timmen behöver kosta räknar du ut med <a href="/sv/verktyg/timpris-kalkylator">timpriskalkylatorn</a>. Fler tips om att välja system finns i guiden om <a href="/sv/blog/kalkylprogram-bygg">kalkylprogram för bygg</a>.</p>

<h2>Kom igång</h2>
<p>Offerter, projektkalkyl och fakturor ingår i Koll på pengarna för ${FAKTURA_PRICE} kr/mån exkl. moms, för upp till två användare. Behöver hela laget tidrapportering och projekt, välj Full koll. De första 14 dagarna är gratis med alla funktioner, utan startavgift och utan bindningstid. Har du dina priser och kunder i ett annat system hjälper vi dig att flytta över dem utan kostnad.</p>
`.trim(),
  faq: [
    {
      question: 'Vad kostar ett kalkylprogram för bygg?',
      answer: `I ByggExp ingår projektkalkyl, offerter och fakturor i Koll på pengarna för ${FAKTURA_PRICE} kr/mån exkl. moms, för upp till två användare. Full koll med tidrapportering och projekt kostar ${KOMPLETT_PRICE} kr/mån med 10 användare. Du testar gratis i 14 dagar.`,
    },
    {
      question: 'Finns det ett gratis kalkylprogram för bygg?',
      answer:
        'Vår offertmall och kalkylatorerna för material, timpris och marginal är gratis. Ett komplett program med kalkyl, offert och faktura kostar en månadsavgift, men du kan testa ByggExp gratis i 14 dagar.',
    },
    {
      question: 'Kan jag använda en mall för offerter?',
      answer:
        'Ja. Du kopierar en tidigare offert och ändrar antal och priser. Projektkalkylen kan sparas som mall. Vill du hellre arbeta i Word eller Excel finns vår gratis offertmall för bygg.',
    },
    {
      question: 'Kan jag lägga ROT-avdrag på offerten?',
      answer:
        'ROT-avdraget görs på fakturan, inte på offerten. Skriv i offerten att priset gäller före ROT-avdrag och räkna gärna fram kundens del med ROT-kalkylatorn.',
    },
    {
      question: 'Kan kunden signera offerten digitalt?',
      answer:
        'Nej. Offerten skickas som PDF via e-post och kunden svarar som vanligt. När kunden har accepterat ändrar du status på offerten i ByggExp.',
    },
    {
      question: 'Vad är skillnaden mellan påslag och marginal?',
      answer:
        'Påslaget räknas på kostnaden och marginalen på priset. 20 % påslag på en kostnad på 100 000 kr ger priset 120 000 kr och en marginal på knappt 17 %. För 20 % marginal behöver priset vara 125 000 kr.',
    },
    {
      question: 'Kan offerten bli en faktura?',
      answer:
        'Ja. Från offerten skapar du ett fakturautkast där raderna, kunden och offertnumret redan är ifyllda. Du justerar det som har ändrats och skickar fakturan.',
    },
  ],
  related: [
    { href: '/sv/blog/kalkylprogram-bygg', label: 'Guide: kalkylprogram för bygg' },
    { href: '/sv/blog/offertprogram-byggforetag', label: 'Offertprogram för byggföretag' },
    { href: '/sv/blog/skriva-offert', label: 'Så skriver du en offert' },
    { href: '/sv/blog/efterkalkyl-bygg-kalkyluppfoljning', label: 'Efterkalkyl och kalkyluppföljning' },
    { href: '/sv/verktyg/offert-mall', label: 'Gratis offertmall' },
    { href: '/sv/verktyg/paslag-marginal-kalkylator', label: 'Påslag- och marginalkalkylator' },
    { href: '/sv/funktioner/fakturering', label: 'Fakturaprogram för bygg' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 2. Fakturaprogram bygg                                                      */
/* ------------------------------------------------------------------------- */

const FAKTURERING: FunktionPage = {
  slug: 'fakturering',
  plan: 'faktura',
  priceIncluded: 'Fakturor med ROT och omvänd moms ingår',
  heroCheck: 'ROT och omvänd byggmoms',
  title: 'Fakturaprogram bygg – ROT, omvänd moms och ÄTA | ByggExp',
  description:
    'Fakturaprogram för bygg: ROT-avdrag, omvänd byggmoms, OCR, logotyp, à conto från betalningsplanen och faktura från godkänd ÄTA. 14 dagar gratis.',
  name: 'Fakturaprogram för bygg',
  h1: 'Fakturaprogram för bygg.',
  h1Accent: 'ROT och byggmoms rätt från början.',
  lead: 'Fakturor med ROT, omvänd moms och OCR – skickade från samma ställe.',
  hero: {
    name: 'fakturering-skicka',
    alt: 'Hantverkare i hjälm vid en laptop där ett papper flyger ut mot ett litet hus med blått tak',
  },
  stepsHeading: ['Faktura, kvitto', 'och betalning'],
  steps: [
    {
      title: 'Skapa fakturan',
      text: 'Rader med moms, ROT-avdrag eller omvänd byggmoms.',
      bullets: ['Logotyp, OCR och bankgiro', 'Skickas som PDF via e-post', 'Från offert, ÄTA eller betalningsplan'],
      img: '/landing/features/8fakturor-1200.webp',
      alt: 'Ny faktura i ByggExp med fakturarader och val för ROT-avdrag i webben och i mobilen',
    },
    {
      title: 'Kostnader på projektet',
      text: 'Kvitton och leverantörsfakturor skannas och hamnar på rätt projekt.',
      img: '/landing/features/11costs-1200.webp',
      alt: 'Utlägg i ByggExp: skannat kvitto med leverantör, belopp, moms och projekt i mobilen och i webben',
    },
    {
      title: 'Följ betalningarna',
      text: 'Betalningsplan, fakturerat och marginal per projekt.',
      img: '/landing/features/9ekonomi-1200.webp',
      alt: 'Projektets ekonomi i ByggExp: budget, fakturerat, kostnader och betalningsplan',
    },
  ],
  body: `
<p>Ett fakturaprogram för bygg måste klara det som vanliga fakturaprogram ofta gör krångligt: ROT-avdrag, omvänd byggmoms, delfakturor mot en betalningsplan och tillägg som ska faktureras separat. I ByggExp skapar du fakturan med företagets logotyp, OCR-nummer och rätt moms, och skickar den som PDF direkt till kunden. Fakturan kan utgå från en offert, en godkänd ÄTA eller en rad i projektets betalningsplan. Här är flödet, reglerna du behöver hålla koll på och hur du får betalt i tid.</p>

<h2>Vad en byggfaktura måste innehålla</h2>
<p>En faktura ska ha vissa uppgifter för att kunden ska kunna dra av momsen och för att Skatteverket ska godta ett ROT-avdrag. Det här ger ByggExp dig på varje faktura:</p>
<ul>
<li><strong>Logotyp.</strong> Företagets logotyp, så att fakturan ser likadan ut oavsett vem som skapar den.</li>
<li><strong>Löpande fakturanummer och OCR.</strong> OCR-numret räknas fram från fakturanumret med kontrollsiffra, så att betalningen kan matchas.</li>
<li><strong>Bankgiro eller plusgiro.</strong> När det finns angivet skrivs en betal-QR-kod ut, som kunden kan skanna i bankappen.</li>
<li><strong>Datum och villkor.</strong> Fakturadatum, leveransdatum, förfallodatum, betalningsvillkor och text om dröjsmålsränta.</li>
<li><strong>Rader med moms.</strong> Antal, enhet, à-pris, rabatt och moms per rad. Textrader för rubriker och förklaringar.</li>
<li><strong>Referenser.</strong> Er referens, kundens referens och ordernummer, till exempel offertens nummer.</li>
</ul>
<p>En genomgång av alla krav finns i guiden <a href="/sv/blog/vad-ska-faktura-innehalla-bygg">vad en faktura ska innehålla</a>, och vill du börja med en enkel fil finns vår <a href="/sv/verktyg/faktura-mall">fakturamall</a>.</p>

<h2>ROT-avdrag på fakturan</h2>
<p>När kunden är en privatperson som har rätt till ROT-avdrag drar du av avdraget direkt på fakturan och begär resten från Skatteverket. I ByggExp slår du på ROT-avdrag på fakturan och anger arbetskostnaden. Avdraget räknas som 30 % av arbetskostnaden, och ByggExp håller det inom taket på 50 000 kr. Fakturan har fält för kundens personnummer och fastighetsbeteckning eller bostadsrättsförening.</p>
<p>Tre saker att kontrollera innan du skickar:</p>
<ol>
<li><strong>Arbetskostnaden är rätt avgränsad.</strong> Material, resor och maskinhyra ger inte avdrag. Anger du hela beloppet som arbete blir avdraget för stort och Skatteverket kan neka ansökan.</li>
<li><strong>Kunden har utrymme kvar.</strong> Taket gäller per person och år, och kunden kan redan ha använt en del hos någon annan.</li>
<li><strong>Kunden har betalat sin del.</strong> Du begär utbetalningen först när kunden har betalat.</li>
</ol>
<p>Läs reglerna hos ${ext(SKV_ROT, 'Skatteverket')} och räkna på kundens del med <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylatorn</a>.</p>

${illu('fakturering-rot', 'Ett par står framför ett hus med blått tak och byggställning medan en hantverkare i hjälm räcker över ett papper')}

<h2>Omvänd byggmoms</h2>
<p>Säljer du byggtjänster till ett företag som själv säljer byggtjänster gäller ${ext(SKV_OMVAND_MOMS, 'omvänd betalningsskyldighet')}. Då ska du inte ta ut moms på fakturan, utan köparen redovisar den. I ByggExp väljer du omvänd moms på fakturan, och PDF:en får texten att omvänd skattskyldighet för byggtjänster gäller. Arbetar du ofta som underentreprenör åt samma byggföretag sparar du omvänd moms som standard på kunden, så att det blir rätt varje gång.</p>
<p>Vanligast är misstaget åt andra hållet: att omvänd moms används mot en privatperson eller ett företag som inte säljer byggtjänster. Fråga kunden om du är osäker. Mer om reglerna finns i guiden om <a href="/sv/blog/omvand-byggmoms-underentreprenor">omvänd byggmoms för underentreprenörer</a>.</p>

${illu('fakturering-omvand', 'Två personer skakar hand framför en byggställning och en lyftkran, den ena i hjälm med en surfplatta')}

<h2>Delfakturor, ÄTA och vidarefakturering</h2>
<p>Ett byggprojekt faktureras sällan med en enda faktura. ByggExp har tre vägar till fakturan utöver att skriva den från början:</p>
<ul>
<li><strong>Betalningsplanen.</strong> I projektets betalningsplan lägger du in delbetalningar som fasta belopp eller procent av kontraktssumman. När en etapp är klar skapar du ett förifyllt fakturautkast från raden, och raden markeras som fakturerad. Så fungerar <a href="/sv/blog/a-conto-fakturering-bygg">à conto-fakturering</a> utan att du behöver hålla reda på vad som är fakturerat i ett separat ark.</li>
<li><strong>Godkänd ÄTA.</strong> När en ÄTA är godkänd skapar du en faktura från den. Projekt, ordreferens med ÄTA-numret och en rad med beloppet fylls i. Läs mer om <a href="/sv/funktioner/ata">ÄTA-hantering</a>.</li>
<li><strong>Accepterad offert.</strong> Offertens rader, kund och nummer följer med till fakturautkastet. Se <a href="/sv/funktioner/offert-kalkyl">offert och kalkyl</a>.</li>
</ul>
<p>Har du köpt in material eller tjänster som kunden ska betala kan du vidarefakturera leverantörsfakturan med ett påslag i procent. Inkommande fakturor kan skickas till en egen e-postadress och skannas, så att de hamnar på rätt projekt.</p>

<h2>Kreditfaktura och ändringar</h2>
<p>Blev något fel på en skickad faktura ska den inte ändras i efterhand. Skapa i stället en kreditfaktura för hela beloppet eller en del av det, och skicka en ny faktura om det behövs. Då stämmer fakturaserien och bokföringen, och kunden ser tydligt vad som gäller.</p>

${illu('fakturering-arkiv', 'Person i hjälm lägger ett papper i en stor blå mapp med en husikon')}

<h2>Få betalt i tid</h2>
<p>Varje faktura har en status: utkast, skickad, betald, förfallen eller makulerad. När förfallodatum har passerat markeras fakturan som förfallen, och du markerar den som betald när pengarna har kommit in. Betalningsvillkoren hämtas från kunden när du skapar fakturan.</p>
<p>När en kund inte betalar skickar du en betalningspåminnelse via e-post med PDF. Påminnelsen räknar fram dröjsmålsränta och lägger på en påminnelseavgift. Enligt ${ext(RANTELAGEN, 'räntelagen')} är dröjsmålsräntan referensräntan plus åtta procentenheter om ni inte har avtalat något annat, och en påminnelseavgift får bara tas ut om den är avtalad i förväg. Skriv därför in den i offerten eller avtalet. Räkna på räntan med <a href="/sv/verktyg/drojsmalsranta-kalkylator">dröjsmålsräntekalkylatorn</a>, och läs vad du gör när <a href="/sv/blog/kunden-betalar-inte-fakturan">kunden inte betalar fakturan</a>.</p>
<p>Under Ekonomi ser du också påminnelser om dina egna kommande betalningar, så att leverantörsfakturorna inte förfaller.</p>

${illu('fakturering-forfallo', 'Person i keps går förbi en rad mappar med husikoner mot en stor blå kalender')}

<h2>Tre fakturor från vardagen</h2>
<h3>Köksrenovering hos en privatperson</h3>
<p>Jobbet är klart och kunden har rätt till ROT-avdrag. Du skapar fakturan från den accepterade offerten, lägger material och arbete på separata rader, slår på ROT och anger arbetskostnaden. Kunden betalar sin del via OCR eller QR-koden, och därefter ansöker du om resten hos Skatteverket.</p>
<h3>Underentreprenad åt ett byggföretag</h3>
<p>Du sätter gips åt en entreprenör som själv säljer byggtjänster. Kunden har omvänd moms som standard, så fakturan blir rätt från början, och PDF:en anger att köparen redovisar momsen. Betalningsvillkoren är de ni har avtalat och hämtas från kunden.</p>
<h3>Tillbyggnad i fyra etapper</h3>
<p>Kontraktet säger 30 % vid start, 30 % när stommen är rest, 30 % vid tätt hus och 10 % efter slutbesiktning. Etapperna ligger i projektets betalningsplan. När stommen är klar skapar du fakturan från raden, och du ser direkt vad som återstår att fakturera. En godkänd ÄTA om ett extra fönster faktureras för sig eller tillsammans med nästa etapp.</p>

<h2>Bokföringen</h2>
<p>Med tillägget Integrationer (${ADDON_PRICE} kr/mån) exporterar du kund- och leverantörsfakturor som en SIE4-fil, med omvänd moms, ROT-fordran och öresavrundning, och läser in den i bokföringsprogrammet. Då behöver ingen skriva av fakturorna en gång till.</p>

<h2>Checklista: välj fakturaprogram för bygg</h2>
<div class="article-table"><table>
<thead><tr><th>Krav</th><th>Varför</th><th>ByggExp</th></tr></thead>
<tbody>
<tr><td><strong>ROT-avdrag</strong></td><td>Privatkunder förväntar sig avdraget på fakturan</td><td>30 % av arbetskostnaden, tak 50 000 kr</td></tr>
<tr><td><strong>Omvänd byggmoms</strong></td><td>Krav vid försäljning till byggföretag</td><td>Val på fakturan, standard per kund</td></tr>
<tr><td><strong>OCR och QR-kod</strong></td><td>Betalningen matchas rätt</td><td>OCR med kontrollsiffra, QR med bankgiro</td></tr>
<tr><td><strong>Delfakturor</strong></td><td>Stora jobb faktureras i etapper</td><td>Från projektets betalningsplan</td></tr>
<tr><td><strong>ÄTA</strong></td><td>Tillägg ska inte glömmas</td><td>Faktura från godkänd ÄTA</td></tr>
<tr><td><strong>Kreditfaktura</strong></td><td>Fel rättas utan att serien bryts</td><td>Hel eller delvis kreditering</td></tr>
<tr><td><strong>Påminnelser</strong></td><td>Pengarna ska komma in</td><td>Påminnelse med ränta och avgift via e-post</td></tr>
<tr><td><strong>Bokföring</strong></td><td>Samma siffror i bokföringen</td><td>SIE4-fil (tillägg ${ADDON_PRICE} kr/mån)</td></tr>
</tbody>
</table></div>
<p>Fakturering ingår i Koll på pengarna för ${FAKTURA_PRICE} kr/mån exkl. moms, för upp till två användare, och i Full koll tillsammans med tidrapportering och projekt. Testa gratis i 14 dagar, utan startavgift och utan bindningstid.</p>
`.trim(),
  faq: [
    {
      question: 'Vad kostar ett fakturaprogram för bygg?',
      answer: `Fakturering ingår i Koll på pengarna för ${FAKTURA_PRICE} kr/mån exkl. moms, för upp till två användare. Med fler användare och tidrapportering väljer du Full koll för ${KOMPLETT_PRICE} kr/mån med 10 användare. De första 14 dagarna är gratis.`,
    },
    {
      question: 'Hur gör jag ROT-avdrag på fakturan?',
      answer:
        'Slå på ROT-avdrag på fakturan, ange arbetskostnaden och fyll i kundens personnummer och fastighet. Avdraget räknas som 30 % av arbetskostnaden. När kunden har betalat sin del ansöker du om utbetalning hos Skatteverket.',
    },
    {
      question: 'När ska jag använda omvänd byggmoms?',
      answer:
        'När du säljer byggtjänster till ett företag som själv säljer byggtjänster. Då tar du inte ut moms och fakturan ska ange att omvänd betalningsskyldighet gäller. Mot privatpersoner gäller vanlig moms.',
    },
    {
      question: 'Kan jag fakturera direkt från tidrapporten?',
      answer:
        'Timmarna från tidrapporten för du själv in på fakturan, eller fakturerar via betalningsplanen, en offert eller en godkänd ÄTA. Tidrapporten för projektet kan exporteras som PDF och bifogas fakturan.',
    },
    {
      question: 'Kan fakturorna föras över till bokföringen?',
      answer: `Ja, som SIE4-fil med tillägget Integrationer (${ADDON_PRICE} kr/mån). Filen innehåller kund- och leverantörsfakturor och läses in i bokföringsprogrammet.`,
    },
    {
      question: 'Kan jag skicka betalningspåminnelser?',
      answer:
        'Ja. Påminnelsen skickas via e-post med PDF och räknar fram dröjsmålsränta och påminnelseavgift. Påminnelseavgiften får bara tas ut om den är avtalad i förväg.',
    },
    {
      question: 'Hur många användare ingår?',
      answer:
        'Koll på pengarna är för upp till två användare. Är ni fler som behöver ByggExp, eller vill ni även tidrapportera, väljer ni Full koll med 10 användare inkluderade.',
    },
  ],
  related: [
    { href: '/sv/blog/faktureringsprogram-bygg', label: 'Guide: faktureringsprogram för bygg' },
    { href: '/sv/blog/vad-ska-faktura-innehalla-bygg', label: 'Vad ska en faktura innehålla?' },
    { href: '/sv/blog/faktura-med-rotavdrag', label: 'Faktura med ROT-avdrag' },
    { href: '/sv/blog/a-conto-fakturering-bygg', label: 'À conto-fakturering' },
    { href: '/sv/verktyg/faktura-mall', label: 'Gratis fakturamall' },
    { href: '/sv/verktyg/rot-avdrag-kalkylator', label: 'ROT-kalkylator' },
    { href: '/sv/funktioner/offert-kalkyl', label: 'Kalkylprogram för bygg' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 3. Löneunderlag bygg                                                        */
/* ------------------------------------------------------------------------- */

const LON: FunktionPage = {
  slug: 'lon',
  plan: 'komplett',
  priceIncluded: 'Tidrapport, lönekörning och AGI-underlag ingår',
  heroCheck: 'Lönespec och AGI-underlag',
  title: 'Löneunderlag bygg – från tidrapport till lön | ByggExp',
  description:
    'Löneunderlag för bygg: timmar från appen, attest, lönekörning med skatteavdrag, lönespecifikation och AGI-underlag som CSV. 14 dagar gratis.',
  name: 'Löneunderlag för bygg',
  h1: 'Löneunderlag för bygg.',
  h1Accent: 'Från tidrapport till lönespec.',
  lead: 'Attesterade timmar blir lönekörning, lönespec och AGI-underlag.',
  hero: {
    name: 'lon-lonekorning',
    alt: 'Kvinna vid ett skrivbord framför en skärm med stapeldiagram och en klocka, med en hög guldmynt bredvid tangentbordet',
  },
  stepsHeading: ['Från timmar', 'till lön'],
  steps: [
    {
      title: 'Timmar från appen',
      text: 'Laget stämplar in. Timtyp, restid och traktamente på passet.',
      img: '/landing/features/1arbetspass-1200.webp',
      alt: 'Arbetspass i ByggExp: timmar per medarbetare och dag i webben och i mobilappen',
    },
    {
      title: 'Granska och attestera',
      text: 'Planerat, GPS och manuellt – per medarbetare och dag.',
      img: '/landing/funktioner/screen-tidrapport-1200.webp',
      alt: 'Tidrapport i ByggExp: timmar per medarbetare och dag för två veckor, filtrerat på planerat, GPS och manuellt',
    },
    {
      title: 'Lönekörning',
      text: 'Brutto, skatt och netto per medarbetare.',
      bullets: ['Lönespecifikation per medarbetare', 'Godkänn och markera som betald', 'Löne-CSV och AGI-underlag'],
      img: '/landing/features/12salary-1200.webp',
      alt: 'Löner i ByggExp: timmar, timlön, brutto, skatt och netto per medarbetare med export av CSV och AGI-underlag',
    },
  ],
  body: `
<p>Lönen i ett byggföretag är aldrig bättre än underlaget. Saknas en kväll, står restiden på fel projekt eller har ingen kontrollerat övertiden blir det fel på lönebeskedet, och då ringer medarbetaren på måndagen. I ByggExp kommer timmarna från mobilappen, arbetsledaren attesterar dem och perioden skickas till en lönekörning med skatteavdrag och lönespecifikation. Därefter exporterar du löne- och AGI-underlaget. Här är hela kedjan och de kontroller som gör löneunderlaget rätt.</p>

<h2>Vad ett löneunderlag för bygg ska innehålla</h2>
<p>Löneunderlaget är listan som lönen räknas fram ur. För ett byggföretag behöver den mer än summan timmar per person:</p>
<ul>
<li><strong>Timmar per medarbetare och dag.</strong> Grunden för allt annat.</li>
<li><strong>Timtyp.</strong> Normal tid, övertid eller OB, eftersom de ersätts olika.</li>
<li><strong>Restid.</strong> Kilometer och minuter, för restidsersättning och milersättning.</li>
<li><strong>Traktamente.</strong> Helt, halvt eller inget, per dag.</li>
<li><strong>Frånvaro.</strong> Semester, sjukdom och annan ledighet som påverkar lönen.</li>
<li><strong>Attest.</strong> Vem som har godkänt underlaget och när.</li>
</ul>
<p>I ByggExp registreras timmar, timtyp, restid och traktamente på arbetspasset i mobilappen, och frånvaro söks och godkänns i Frånvaro. Det betyder att underlaget byggs upp under perioden, inte på lönedagen.</p>

${illu('lon-stampla', 'Byggarbetare i hjälm och hängselbyxor håller upp en mobil med en klocka på skärmen')}

<h2>Steg för steg: från stämpling till lönespec</h2>
<ol>
<li><strong>Medarbetaren stämplar in.</strong> Med GPS i appen, eller manuellt per projekt och dag för den som inte vill dela sin position. Timtypen väljs på passet.</li>
<li><strong>Arbetsledaren attesterar.</strong> Admin eller projektadmin går igenom passen och godkänner dem. Här kontrolleras att övertiden var beordrad och att traktamentet stämmer.</li>
<li><strong>Perioden skickas till lön.</strong> I tidrapporten markerar du perioden och skickar timmarna till en lönekörning. Du väljer om underlaget ska vara planerade timmar, GPS-timmar eller manuellt registrerade timmar.</li>
<li><strong>Lönekörningen räknas fram.</strong> Varje medarbetare får en rad med timmar, timlön, bruttolön, skatteavdrag och nettolön.</li>
<li><strong>Du godkänner och betalar.</strong> Lönekörningen godkänns, lönespecifikationerna skapas och körningen markeras som betald när lönen är utbetald.</li>
<li><strong>Underlaget exporteras.</strong> Löne-CSV till lönebyrån eller lönesystemet, och AGI-underlaget till arbetsgivardeklarationen.</li>
</ol>
<p>Gör attesten till en fast rutin, till exempel varje fredag. Det är mycket lättare att minnas en övertidskväll efter tre dagar än efter tre veckor.</p>

${illu('lon-attest', 'Arbetsledare med surfplatta med bockar medan två byggarbetare bär en stor skiva förbi')}

<h2>Timlön, skatteavdrag och lönespecifikation</h2>
<p>Timlönen läggs in på varje medarbetare. När lönekörningen räknas fram blir bruttolönen timmar gånger timlön, och skatteavdraget görs per medarbetare. Har medarbetaren en skattetabell angiven används den, annars en schablon på 30 %. Tabellerna publiceras av ${ext(SKV_SKATTETABELLER, 'Skatteverket')} varje år, så kontrollera att rätt tabell och kolumn ligger på varje person när året byter.</p>
<p>Lönespecifikationen skapas per medarbetare och visar period, timmar, brutto, skatt och netto. Den laddas ner som PDF, och medarbetaren får samma siffror som ligger i underlaget.</p>
<p>Vad en anställd kostar utöver lönen, med arbetsgivaravgifter och semester, räknar du ut med <a href="/sv/verktyg/anstalld-kostnad-kalkylator">kalkylatorn för anställningskostnad</a>.</p>

${illu('lon-timlon', 'Kvinna vid en dator med tre medarbetarprofiler och hjälmikoner bredvid skärmen')}

<h2>OB, övertid och Byggavtalet</h2>
<p>För företag som följer ${ext(BYGGAVTALET, 'Byggavtalet')} styr avtalet vad som räknas som övertid och vilka tillägg som gäller för obekväm arbetstid. I ByggExp väljer medarbetaren timtyp på varje pass och arbetsledaren kontrollerar den vid attesten. Ni avgör alltså själva vad som är övertid utifrån avtalet och det som har beordrats.</p>
<p>Hämta satserna ur den aktuella utgåvan av avtalet, eftersom de ändras mellan avtalsperioderna. Räkna på en enskild vecka med <a href="/sv/verktyg/ob-overtid-kalkylator">OB- och övertidskalkylatorn</a>, och läs om <a href="/sv/blog/semesterlon-semesterersattning-byggavtalet">semesterlön enligt Byggavtalet</a> och <a href="/sv/blog/sjuklon-karensavdrag-vab-byggforetag">sjuklön och karensavdrag</a>.</p>

<h2>Restid och traktamente</h2>
<p>Restid och traktamente är de poster som oftast blir fel i ett byggföretags lön. När de registreras på passet samma dag som resan görs behöver ingen rekonstruera dem i efterhand. Skatteverket har särskilda regler för ${ext(SKV_TRAKTAMENTE_BYGG, 'traktamenten i byggbranschen')}, bland annat om tillfälligt arbete och avstånd från bostaden, så kontrollera att förutsättningarna är uppfyllda innan traktamentet betalas ut skattefritt. Restidsersättningen räknar du på med <a href="/sv/verktyg/restidsersattning-kalkylator">restidskalkylatorn</a>.</p>

<h2>AGI-underlaget varje månad</h2>
<p>Varje månad lämnar arbetsgivaren en ${ext(SKV_AGI, 'arbetsgivardeklaration')} med lön och skatteavdrag per anställd. I ByggExp exporterar du AGI-underlaget från lönekörningen som CSV. Underlaget är per medarbetare, och siffrorna är desamma som på lönespecifikationerna.</p>
<p>Tre kontroller innan du lämnar deklarationen:</p>
<ul>
<li>Stämmer antalet medarbetare med de som har fått lön under perioden?</li>
<li>Är summan av skatteavdragen densamma som i lönekörningen?</li>
<li>Har förmåner och ersättningar som inte går via lönekörningen kommit med?</li>
</ul>

${illu('lon-period', 'Person vid ett skrivbord med laptop, en lista med blå rader och en klocka i bakgrunden')}

<h2>En löneperiod i fem datum</h2>
<p>Det som gör lönen stressig är sällan själva räknandet, utan att allt ska hinnas med samtidigt. Lägg upp perioden med fasta datum, så vet alla vad som gäller:</p>
<ol>
<li><strong>Periodens sista dag.</strong> Timmar som registreras därefter hamnar i nästa period. Säg det tydligt till laget.</li>
<li><strong>Attest två dagar senare.</strong> Arbetsledarna går igenom passen och rättar det som saknas, medan medarbetarna fortfarande minns veckan.</li>
<li><strong>Lönekörning.</strong> Perioden skickas till lön, raderna kontrolleras och körningen godkänns.</li>
<li><strong>Utbetalning.</strong> Lönen betalas ut, körningen markeras som betald och lönespecifikationerna finns kvar i ByggExp.</li>
<li><strong>Arbetsgivardeklarationen.</strong> AGI-underlaget exporteras och deklarationen lämnas till Skatteverket. För de flesta arbetsgivare är sista dagen den 12:e i månaden efter utbetalningen.</li>
</ol>
<p>Blir något fel efter att lönen är betald, rätta det i nästa period och skriv en anteckning om varför. Då går det att följa vad som hände även ett år senare.</p>

<h2>Vanliga fel i löneunderlaget</h2>
<div class="article-table"><table>
<thead><tr><th>Fel</th><th>Orsak</th><th>Så undviker du det</th></tr></thead>
<tbody>
<tr><td><strong>Timmar saknas</strong></td><td>Medarbetaren glömde stämpla</td><td>Manuell registrering per projekt och dag, kontroll vid attesten</td></tr>
<tr><td><strong>Fel timtyp</strong></td><td>Övertid registrerad som normal tid, eller tvärtom</td><td>Timtyp på varje pass, kontrolleras mot det som beordrades</td></tr>
<tr><td><strong>Restid glöms</strong></td><td>Ingen skrev upp resan</td><td>Kilometer och minuter på passet samma dag</td></tr>
<tr><td><strong>Fel skatt</strong></td><td>Gammal skattetabell på medarbetaren</td><td>Gå igenom tabellerna vid varje årsskifte</td></tr>
<tr><td><strong>Fel timlön</strong></td><td>Lönehöjningen lades inte in</td><td>Uppdatera timlönen på medarbetaren innan körningen</td></tr>
</tbody>
</table></div>

<h2>Checklista för en ny medarbetare</h2>
<p>De flesta lönefel för en nyanställd uppstår redan första månaden. Gå igenom det här innan den första lönekörningen:</p>
<ol>
<li><strong>Lägg upp medarbetaren</strong> med namn och roll, och be hen ladda ner appen till iPhone eller Android.</li>
<li><strong>Ange timlönen</strong> enligt anställningsavtalet.</li>
<li><strong>Ange skattetabellen</strong> enligt det besked medarbetaren har fått från Skatteverket.</li>
<li><strong>Lägg in ID06 och certifikat</strong> med utgångsdatum, så att du ser när de behöver förnyas.</li>
<li><strong>Visa hur timtyp, restid och traktamente väljs</strong> på passet. Fem minuter första dagen sparar många rättelser senare.</li>
</ol>

<h2>Lönebyrå eller lön i ByggExp?</h2>
<div class="article-table"><table>
<thead><tr><th>Ni har</th><th>Så gör ni</th><th>Det får ni</th></tr></thead>
<tbody>
<tr><td><strong>Lönebyrå</strong></td><td>Attestera i ByggExp, skicka löne-CSV och tidrapport som Excel</td><td>Byrån får timmar per medarbetare i stället för lappar</td></tr>
<tr><td><strong>Eget lönesystem</strong></td><td>Exportera underlaget som CSV och läs in det</td><td>Timmarna skrivs inte om för hand</td></tr>
<tr><td><strong>Ingen lönelösning</strong></td><td>Kör lönen i ByggExp</td><td>Lönespec, skatteavdrag och AGI-underlag på samma ställe</td></tr>
</tbody>
</table></div>
<p>Oavsett väg är det samma attesterade timmar som går vidare. Det är där de flesta lönefel uppstår, och där tid sparas. Fler frågor att ställa inför valet finns i guiden om <a href="/sv/blog/loneprogram-bygg">löneprogram för bygg</a>, och tidrapporteringen beskriver vi på sidan om <a href="/sv/funktioner/tidrapporteringssystem-bygg">tidrapporteringssystem för bygg</a>.</p>

<h2>Kom igång</h2>
<p>Hela kedjan från stämpling till lönekörning ingår i Full koll för ${KOMPLETT_PRICE} kr/mån exkl. moms med 10 användare. Behöver ni bara tidrapportering och löneunderlag som fil räcker Koll på jobbet för ${PROJEKT_PRICE} kr/mån. Testa gratis i 14 dagar. Låt gärna laget stämpla i appen under en löneperiod medan den gamla rutinen finns kvar, och jämför underlagen innan ni byter.</p>
`.trim(),
  faq: [
    {
      question: 'Vad kostar lönehantering i ByggExp?',
      answer: `Tidrapportering, lönekörning och AGI-underlag ingår i Full koll för ${KOMPLETT_PRICE} kr/mån exkl. moms med 10 användare. Tidrapportering med export av löneunderlag ingår i Koll på jobbet för ${PROJEKT_PRICE} kr/mån. Du testar gratis i 14 dagar.`,
    },
    {
      question: 'Räknas OB och övertid enligt Byggavtalet automatiskt?',
      answer:
        'Nej. Medarbetaren väljer timtyp på varje pass och arbetsledaren kontrollerar den vid attesten. Satserna och reglerna i Byggavtalet tillämpar ni själva.',
    },
    {
      question: 'Vad är skillnaden mellan löneunderlag och lönespecifikation?',
      answer:
        'Löneunderlaget är det som lönen räknas fram ur: timmar, timtyp, restid, traktamente och frånvaro. Lönespecifikationen är resultatet som medarbetaren får, med brutto, skatt och netto.',
    },
    {
      question: 'Kan jag skicka löneunderlaget till min lönebyrå?',
      answer:
        'Ja. Exportera löneunderlaget som CSV och tidrapporten som Excel eller PDF. Byrån får timmar per medarbetare för hela perioden.',
    },
    {
      question: 'Lämnar ByggExp arbetsgivardeklarationen åt mig?',
      answer:
        'Nej. Du exporterar AGI-underlaget som CSV och lämnar deklarationen hos Skatteverket. Siffrorna är desamma som i lönekörningen.',
    },
    {
      question: 'Kan lönen bokföras via SIE4?',
      answer:
        'SIE4-filen i tillägget Integrationer omfattar kund- och leverantörsfakturor. Löner exporteras som löne-CSV och AGI-underlag.',
    },
    {
      question: 'Hur räknas skatteavdraget?',
      answer:
        'Skatteavdraget görs per medarbetare enligt den skattetabell som är angiven på personen, annars med en schablon på 30 %. Kontrollera tabellen varje år när Skatteverket publicerar nya tabeller.',
    },
  ],
  related: [
    { href: '/sv/blog/loneprogram-bygg', label: 'Löneprogram för bygg' },
    { href: '/sv/blog/loneunderlag-for-byggforetag', label: 'Löneunderlag för byggföretag' },
    { href: '/sv/blog/semesterlon-semesterersattning-byggavtalet', label: 'Semesterlön enligt Byggavtalet' },
    { href: '/sv/blog/ob-overtid-byggavtalet-rakna', label: 'OB och övertid enligt Byggavtalet' },
    { href: '/sv/verktyg/anstalld-kostnad-kalkylator', label: 'Vad kostar en anställd?' },
    { href: '/sv/verktyg/ob-overtid-kalkylator', label: 'OB- och övertidskalkylator' },
    { href: '/sv/funktioner/tidrapporteringssystem-bygg', label: 'Tidrapporteringssystem för bygg' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 4. ÄTA-hantering bygg                                                       */
/* ------------------------------------------------------------------------- */

const ATA: FunktionPage = {
  slug: 'ata',
  plan: 'komplett',
  priceIncluded: 'ÄTA, tidrapport och faktura ingår',
  heroCheck: 'ÄTA i appen och i webben',
  title: 'ÄTA-hantering bygg – från tillägg till faktura | ByggExp',
  description:
    'ÄTA-hantering för bygg: registrera ÄTA per projekt, koppla arbetsdagar i appen, följ godkänt belopp och fakturera godkänd ÄTA. 14 dagar gratis.',
  name: 'ÄTA-hantering för bygg',
  h1: 'ÄTA-hantering för bygg.',
  h1Accent: 'Varje tillägg till fakturan.',
  lead: 'Ändringar och tillägg registrerade, godkända och fakturerade.',
  hero: {
    name: 'ata-upptackt',
    alt: 'Snickare i hjälm har lyft upp en golvskiva i ett badrum och visar rören under för en kund som böjer sig fram',
  },
  stepsHeading: ['Registrera, godkänn', 'och fakturera'],
  steps: [
    {
      title: 'Märk dagen med ÄTA',
      text: 'I appen kopplas arbetsdagen till rätt ÄTA på projektet.',
      img: '/landing/features/1arbetspass-1200.webp',
      alt: 'Arbetspass i ByggExp: timmar per medarbetare och dag i webben och i mobilappen',
    },
    {
      title: 'Följ ÄTA-beloppen',
      text: 'Godkänt, fakturerat och väntande per projekt.',
      img: '/landing/features/9ekonomi-1200.webp',
      alt: 'Projektets ekonomi i ByggExp: budget, kostnader, fakturerat och marginal',
    },
    {
      title: 'Fakturera ÄTA:n',
      text: 'Godkänd ÄTA blir en förifylld faktura.',
      img: '/landing/features/8fakturor-1200.webp',
      alt: 'Ny faktura i ByggExp med kund, datum och fakturarader i webben och i mobilen',
    },
  ],
  body: `
<p>ÄTA står för ändrings-, tilläggs- och avgående arbeten: det som ändras i ett projekt efter att avtalet är skrivet. Det är här byggföretag oftast tappar pengar, inte för att arbetet inte blev gjort, utan för att det aldrig blev registrerat, godkänt eller fakturerat. ÄTA-hantering i ByggExp samlar varje ÄTA på projektet med typ, belopp och status, låter laget koppla arbetsdagar till ÄTA:n i appen och gör en godkänd ÄTA till en förifylld faktura. Så här ser flödet ut och så minskar du risken för tvist.</p>

<h2>Ändring, tillägg eller avgående?</h2>
<ul>
<li><strong>Ändringsarbete.</strong> Något i det avtalade utförs på ett annat sätt, till exempel en annan golvbrunn än den i ritningen.</li>
<li><strong>Tilläggsarbete.</strong> Något som inte ingick läggs till, till exempel ett extra eluttag eller en vägg som ska flyttas.</li>
<li><strong>Avgående arbete.</strong> Något som ingick utgår, och priset ska minska.</li>
</ul>
<p>Alla tre registreras i ByggExp. Ett avgående arbete får ett negativt belopp, så att projektets summa stämmer åt båda hållen. Bakgrunden och hur ÄTA regleras i standardavtalen beskriver vi i guiden om <a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a>.</p>

${illu('ata-ritning', 'Projektledare och kund står vid ett bord med en utrullad planritning, kunden pekar på ett rum och en hjälm ligger på bordet')}

<h2>Så fungerar ÄTA i ByggExp</h2>
<ol>
<li><strong>ÄTA:n registreras på projektet.</strong> Under projektets ÄTA-flik skapar du en ny ÄTA. Den får ett löpnummer inom projektet, typ, titel, beskrivning, datum, belopp exkl. moms och anteckningar.</li>
<li><strong>Kunden får beskedet.</strong> Du meddelar kunden ändringen och priset, till exempel via e-post, och sätter status till skickad.</li>
<li><strong>Kunden svarar.</strong> När kunden har godkänt sätter du status till godkänd, annars avvisad. Godkännandet görs av admin eller projektadmin i ByggExp.</li>
<li><strong>Laget utför arbetet.</strong> I mobilappen kopplar medarbetaren sin arbetsdag till ÄTA:n, så att det syns vilka dagar som hörde till tillägget.</li>
<li><strong>ÄTA:n faktureras.</strong> Från en godkänd ÄTA skapar du en faktura. Projektet, ordreferensen med ÄTA-numret och titeln och en rad med beloppet fylls i, och ÄTA:n får status fakturerad.</li>
</ol>
<p>Statusen gör att du alltid vet var varje ÄTA står: registrerad, skickad, godkänd, avvisad eller fakturerad.</p>

${illu('ata-dagrapport', 'Byggarbetare i hjälm trycker på mobilen framför en nybyggd vägg, med en platsmarkör och en klocka ovanför')}

<h2>Följ ÄTA-beloppen per projekt</h2>
<p>På ÄTA-fliken summeras projektets ÄTA: hur mycket som är godkänt eller fakturerat, och hur mycket som fortfarande väntar på besked. Samma summering syns i mobilappens vy för projektets ekonomi, så att projektledaren ser läget även ute på bygget.</p>
<p>Summan av väntande ÄTA är en siffra att hålla koll på. Ju längre en ÄTA står utan svar, desto svårare blir det att få betalt för den. Ta upp den på nästa byggmöte och skriv in den i protokollet. En gratis <a href="/sv/verktyg/byggmotesprotokoll-mall">mall för byggmötesprotokoll</a> finns bland våra verktyg.</p>

<h2>Skriftligt innan arbetet börjar</h2>
<p>Den viktigaste regeln i ÄTA-hantering är enkel: få ett skriftligt besked innan du gör jobbet. Muntliga överenskommelser på bygget är svåra att bevisa när slutfakturan ifrågasätts. Ett kort mejl räcker ofta, så länge det framgår vad som ska göras, vad det kostar och att kunden har sagt ja.</p>
<p>Mot privatpersoner gäller ${ext(KONSUMENTTJANSTLAGEN, 'konsumenttjänstlagen')}. Behövs tilläggsarbete ska du underrätta konsumenten och be om besked innan du utför det. Lagen begränsar också hur mycket ett ungefärligt pris får överskridas. Skriv därför in i offerten hur ändringar och tillägg hanteras, och använd vår <a href="/sv/verktyg/ata-mall">ÄTA-mall</a> om du vill skicka ändringen som ett eget dokument för underskrift.</p>

${illu('ata-godkand', 'Kund och byggarbetare skakar hand, med ett dokument med en bock ovanför dem')}

<h2>Tre ÄTA i samma badrum</h2>
<p>Ett exempel från en badrumsrenovering till fast pris visar hur ändringar uppstår och hur de registreras:</p>
<ul>
<li><strong>Tillägg: rör bakom väggen.</strong> När väggen öppnas visar sig avloppsröret vara i dåligt skick. Snickaren visar kunden, projektledaren registrerar en tilläggs-ÄTA med pris och skickar beskedet via e-post. När kunden har svarat ja sätts status till godkänd, och de dagar som arbetet tar kopplas till ÄTA:n i appen.</li>
<li><strong>Ändring: annat kakel.</strong> Kunden väljer en större platta än den som var offererad. Den kräver mer tid att sätta och är dyrare. Ändringen registreras med mellanskillnaden som belopp.</li>
<li><strong>Avgående: ingen inbyggd hylla.</strong> Kunden stryker en nisch med hylla som ingick i offerten. Den registreras som avgående med negativt belopp.</li>
</ul>
<p>När badrummet är klart visar ÄTA-fliken tre poster med status och summa. Slutfakturan blir begriplig för kunden, eftersom varje förändring redan är känd och godkänd.</p>

<h2>Vem gör vad</h2>
<div class="article-table"><table>
<thead><tr><th>Roll</th><th>Gör</th><th>Var</th></tr></thead>
<tbody>
<tr><td><strong>Yrkesarbetare</strong></td><td>Upptäcker ändringen, meddelar arbetsledaren, kopplar arbetsdagen till ÄTA:n</td><td>Mobilappen</td></tr>
<tr><td><strong>Projektledare</strong></td><td>Registrerar ÄTA:n, sätter pris, meddelar kunden och sätter status</td><td>Webben</td></tr>
<tr><td><strong>Kund eller beställare</strong></td><td>Godkänner eller avvisar skriftligt</td><td>E-post eller ÄTA-mallen</td></tr>
<tr><td><strong>Ekonomi</strong></td><td>Skapar fakturan från godkänd ÄTA</td><td>Webben</td></tr>
</tbody>
</table></div>

<h2>Prissätt ÄTA:n rätt</h2>
<p>En ÄTA prissätts ofta i stressen på bygget, och då blir den för billig. Räkna med samma delar som i en vanlig kalkyl:</p>
<ul>
<li><strong>Arbete.</strong> Timmar gånger timpris, inklusive tid för att ställa om och planera om.</li>
<li><strong>Material.</strong> Inköpspris med ditt vanliga påslag.</li>
<li><strong>Påverkan på resten av jobbet.</strong> Väntetid, flyttade moment och förlängd hyra av ställning eller container.</li>
<li><strong>Underentreprenörer.</strong> Extra besök från el, VVS eller plattsättare.</li>
</ul>
<p>Räkna fram timpriset med <a href="/sv/verktyg/timpris-kalkylator">timpriskalkylatorn</a> och påslaget med <a href="/sv/verktyg/paslag-marginal-kalkylator">påslag- och marginalkalkylatorn</a>. Vid avtal på löpande räkning är timmarna själva underlaget. Kopplingen mellan arbetsdag och ÄTA i appen visar då vilka dagar som gällde tillägget.</p>

<h2>ÄTA vid fast pris och löpande räkning</h2>
<p>Hur viktig ÄTA-hanteringen är beror på hur jobbet är prissatt:</p>
<ul>
<li><strong>Fast pris.</strong> Allt som inte står i offerten är en ÄTA. Utan registrering och godkännande gör du jobbet gratis, eller får diskutera det vid slutfakturan. Här är ett pris på varje ÄTA innan arbetet börjar det viktigaste.</li>
<li><strong>Löpande räkning.</strong> Timmarna faktureras ändå, men ÄTA:n visar kunden varför de blev fler än beräknat. Arbetsdagar kopplade till ÄTA:n i appen gör det lätt att förklara vilka dagar som gällde tillägget.</li>
</ul>
<p>Påverkar ändringen tidplanen, skriv det i ÄTA:ns beskrivning eller anteckningar: hur många dagar projektet förskjuts och varför. En ÄTA som flyttar slutdatumet utan att det är dokumenterat kan senare bli en fråga om förseningsvite. Räkna på vad en försening kan kosta med <a href="/sv/verktyg/forseningsvite-kalkylator">förseningsvitekalkylatorn</a>.</p>

<h2>Fakturera ÄTA rätt</h2>
<p>En godkänd ÄTA som inte faktureras är det dyraste misstaget av alla. Med ByggExp skapar du fakturan direkt från ÄTA:n, och raden får 25 % moms som standard. Gäller jobbet ett byggföretag med omvänd byggmoms, eller en privatperson med ROT-avdrag, ändrar du det på fakturan innan du skickar den. Du kan fakturera varje ÄTA för sig när den är klar, eller ta med den i nästa delfaktura. Hur fakturan fungerar beskriver vi på sidan om <a href="/sv/funktioner/fakturering">fakturaprogram för bygg</a>.</p>

${illu('ata-faktura', 'Projektledare vid ett skrivbord lägger ett papper med en bock på laptopen, bredvid en hög guldmynt och en modell av en husutbyggnad med byggställning')}

<h2>Vanliga fel i ÄTA-hanteringen</h2>
<div class="article-table"><table>
<thead><tr><th>Fel</th><th>Följd</th><th>Så undviker du det</th></tr></thead>
<tbody>
<tr><td><strong>Muntligt ja på bygget</strong></td><td>Kunden bestrider i slutfakturan</td><td>Skriftligt besked, status skickad och godkänd</td></tr>
<tr><td><strong>ÄTA utan pris</strong></td><td>Diskussion i efterhand</td><td>Belopp på varje ÄTA innan arbetet börjar</td></tr>
<tr><td><strong>Avgående glöms</strong></td><td>Kunden upptäcker det själv</td><td>Registrera avgående med negativt belopp</td></tr>
<tr><td><strong>Godkänd men ofakturerad</strong></td><td>Förlorade intäkter</td><td>Faktura direkt från godkänd ÄTA</td></tr>
<tr><td><strong>Ingen koll på väntande</strong></td><td>Tillägg blir liggande utan svar</td><td>Summering per projekt, uppe på byggmötet</td></tr>
</tbody>
</table></div>
<p>Mer om hur du dokumenterar och följer upp finns i guiden om <a href="/sv/blog/ata-hantering-mall">ÄTA-hantering med mall</a>.</p>

<h2>Kom igång</h2>
<p>Hela flödet, med ÄTA på projektet, arbetsdagar i appen och faktura från godkänd ÄTA, ingår i Full koll för ${KOMPLETT_PRICE} kr/mån exkl. moms med 10 användare. Testa gratis i 14 dagar, utan startavgift och utan bindningstid.</p>
`.trim(),
  faq: [
    {
      question: 'Vad betyder ÄTA?',
      answer:
        'ÄTA står för ändrings-, tilläggs- och avgående arbeten, alltså förändringar i ett byggprojekt efter att avtalet har skrivits. Ändrings- och tilläggsarbeten höjer normalt priset, avgående arbeten sänker det.',
    },
    {
      question: 'Vad kostar ÄTA-hantering i ByggExp?',
      answer: `Hela flödet med ÄTA, tidrapportering och faktura ingår i Full koll för ${KOMPLETT_PRICE} kr/mån exkl. moms med 10 användare. Du testar gratis i 14 dagar.`,
    },
    {
      question: 'Kan kunden godkänna ÄTA:n i ByggExp?',
      answer:
        'Nej. Kunden godkänner skriftligt, till exempel via e-post eller med vår ÄTA-mall, och därefter sätter admin eller projektadmin status till godkänd i ByggExp.',
    },
    {
      question: 'Summeras timmarna per ÄTA automatiskt?',
      answer:
        'Nej. Arbetsdagar kopplas till ÄTA:n i appen så att det syns vilka dagar som hörde till den, men ÄTA:ns pris anges som ett belopp. Vid löpande räkning räknar du timmarna från tidrapporten.',
    },
    {
      question: 'Kan jag skriva ut en ÄTA som PDF?',
      answer:
        'Nej, ÄTA:n finns i ByggExp men har ingen egen PDF. Behöver du ett dokument att skicka för underskrift använder du vår gratis ÄTA-mall.',
    },
    {
      question: 'Måste ÄTA godkännas skriftligt?',
      answer:
        'Det är inte alltid ett lagkrav, men det är det säkraste sättet att få betalt. Mot privatpersoner ska du enligt konsumenttjänstlagen underrätta kunden och be om besked innan tilläggsarbete utförs.',
    },
    {
      question: 'Hur fakturerar jag en ÄTA?',
      answer:
        'Från en godkänd ÄTA skapar du en faktura där projekt, ÄTA-nummer och belopp redan är ifyllda. Kontrollera momsen, eller välj omvänd byggmoms eller ROT-avdrag, och skicka fakturan.',
    },
  ],
  related: [
    { href: '/sv/blog/ata-arbeten', label: 'Guide: ÄTA-arbeten' },
    { href: '/sv/blog/ata-hantering-mall', label: 'ÄTA-hantering med mall' },
    { href: '/sv/verktyg/ata-mall', label: 'Gratis ÄTA-mall' },
    { href: '/sv/verktyg/byggmotesprotokoll-mall', label: 'Byggmötesprotokoll-mall' },
    { href: '/sv/blog/bestriden-faktura-bygg-tvist', label: 'Bestriden faktura' },
    { href: '/sv/funktioner/fakturering', label: 'Fakturaprogram för bygg' },
    { href: '/sv/funktioner/offert-kalkyl', label: 'Kalkylprogram för bygg' },
  ],
};

export const FUNKTION_PAGES_B: FunktionPage[] = [OFFERT_KALKYL, FAKTURERING, LON, ATA];
export const FUNKTION_PAGES_B_SLUGS = new Set(FUNKTION_PAGES_B.map((p) => p.slug));
