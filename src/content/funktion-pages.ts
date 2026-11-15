// Commercial product/feature pages under /sv/funktioner/<slug> (Swedish only).
// Rendered by src/pages/[lang]/funktioner/[slug].tsx with the same template as
// /sv/tidrapportering-app. Every product claim is backed by
// docs/seo/product-facts-verified.md and PRODUCT-FEATURES.md — respect the NO
// lists there (no offline, no automatic Byggavtalet calculation, dagbok is web
// only with no PDF export / customer access / GPS, planning has no machines,
// subcontractors or drag-and-drop). Don't claim anything about Fortnox either
// way. Packages = ByggExp-BackEnd/src/company/modules.ts: Koll på jobbet has
// projects, tasks, dagbok, kma, shifts, schedule, bemanning, leave, tools — NOT
// budget, profitability, invoices, expenses or payroll (Koll på pengarna / Full
// koll). "Gratis" = the 14-day trial. Each page has its own angle.

import { FAKTURA_PRICE, PROJEKT_PRICE } from '../components/Pricing/Pricing';
import { FUNKTION_PAGES_A, ILLU_HEIGHT_A } from './funktion-pages-a';
import { FUNKTION_PAGES_B, ILLU_HEIGHT_B } from './funktion-pages-b';
import { FUNKTION_PAGES_C, ILLU_HEIGHT_C } from './funktion-pages-c';
import { assertFunktionLinks, FUNKTION_LINKS_SV } from './funktion-links';

const EXTRA_USER_PRICE = 69;
const KOMPLETT_PRICE = 990;
const ADDON_PRICE = 199;

export type FunktionImage = { name: string; alt: string };

export type FunktionStep = {
  title: string;
  text: string;
  bullets?: string[];
  img: string;
  alt: string;
};

export type FunktionPlan = 'faktura' | 'projekt' | 'komplett';

export type FunktionPage = {
  slug: string;
  /** Package shown in the price block + JSON-LD offer. */
  plan: FunktionPlan;
  /** Page-specific line in the price block, e.g. "Byggdagbok ingår". */
  priceIncluded: string;
  /** Third hero check (after "14 dagar gratis" and "Ingen bindningstid"). */
  heroCheck: string;
  /** <title> — exact main keyword first. */
  title: string;
  /** Meta description, ≤ 155 characters. */
  description: string;
  /** Breadcrumb / card name. */
  name: string;
  h1: string;
  h1Accent: string;
  lead: string;
  hero: FunktionImage;
  stepsHeading: [string, string];
  /** R28: one line under the steps heading. */
  stepsLead: string;
  steps: FunktionStep[];
  /** Long content (HTML, styled by .blog-article-content). */
  body: string;
  faq: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

// 3D illustrations live in /public/landing/funktioner as <name>-1200.webp and
// <name>-640.webp (white background, trimmed to the subject). Height at 1200 px:
export const ILLU_HEIGHT: Record<string, number> = {
  'tidrapporteringssystem-incheckning': 1175,
  'tidrapporteringssystem-attest': 1152,
  'tidrapporteringssystem-lon': 1175,
  'hantverkare-servicebil': 927,
  'hantverkare-flera-kunder': 733,
  'hantverkare-faktura': 1030,
  'byggdagbok-platskontor': 1277,
  'byggdagbok-foto': 1159,
  'byggdagbok-leverans': 924,
  'resursplanering-gantt': 1205,
  'resursplanering-bemanning': 1030,
  'resursplanering-franvaro': 718,
  'tidrapporteringssystem-kvallsgjutning': 900,
  'tidrapporteringssystem-id06': 740,
  'hantverkare-kvitto': 1069,
  'hantverkare-anstallda': 1007,
  'byggdagbok-vader': 1179,
  'byggdagbok-tillbyggnad': 900,
  'resursplanering-egenkontroll': 926,
  'resursplanering-vinter': 802,
  // feat-* (feature-article 3D images) used on the nb feature pages.
  'feat-uppgifter-morgonmote': 911,
  'feat-uppgifter-klar': 1424,
  'feat-ekonomi-veckoavstamning': 1033,
  'feat-tid-restid': 911,
  'feat-foto-ror-i-vagg': 1147,
  'feat-narvaro-samling': 916,
  ...ILLU_HEIGHT_A,
  ...ILLU_HEIGHT_B,
  ...ILLU_HEIGHT_C,
};
const IMG_DIR = '/landing/funktioner';
export const illuSrc = (name: string, w: 640 | 1200 = 1200) => `${IMG_DIR}/${name}-${w}.webp`;
export const illuSrcSet = (name: string) => `${illuSrc(name, 640)} 640w, ${illuSrc(name, 1200)} 1200w`;

export function illu(name: string, alt: string): string {
  return `<figure class="fn-illu"><img src="${illuSrc(name)}" srcset="${illuSrcSet(name)}" sizes="(max-width: 760px) 100vw, 560px" width="1200" height="${ILLU_HEIGHT[name]}" loading="lazy" decoding="async" alt="${alt}"></figure>`;
}

const BYGGAVTALET =
  'https://www.byggnads.se/49ec78/siteassets/kollektivavtal/byggavtalet-2025-digital-utgava-1.pdf';
const ARBETSTIDSLAGEN =
  'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/arbetstidslag-1982673_sfs-1982-673/';
const SKV_TRAKTAMENTE_BYGG =
  'https://www.skatteverket.se/download/18.1522bf3f19aea8075ba3da6/1768986614741/traktamenten-mm-i-byggbranschen-skv353-utgava15.pdf';
const SKV_ROT =
  'https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html';
const SKV_OMVAND_MOMS =
  'https://www.skatteverket.se/foretag/moms/sarskildamomsregler/byggverksamhet/omvandbetalningsskyldighetinombyggsektorn.4.47eb30f51122b1aaad28000545.html';

export const PLAN_PRICE: Record<FunktionPlan, { price: number; extra: number }> = {
  faktura: { price: FAKTURA_PRICE, extra: 0 },
  projekt: { price: PROJEKT_PRICE, extra: EXTRA_USER_PRICE },
  komplett: { price: KOMPLETT_PRICE, extra: 69 },
};

// Mobile: 3-column tables become stacked cards (blog-article-content CSS). Each
// cell after the first gets its column name as data-label.
export function labelTables(html: string): string {
  return html.replace(/<table>([\s\S]*?)<\/table>/g, (table, inner: string) => {
    const heads = [...inner.matchAll(/<th>([\s\S]*?)<\/th>/g)].map((m) => m[1]);
    if (heads.length < 3) return table;
    const body = inner.replace(/<tr>([\s\S]*?)<\/tr>/g, (row, cells: string) => {
      let i = 0;
      return `<tr>${cells.replace(/<td>/g, () => {
        const label = heads[i++];
        return i === 1 ? '<td>' : `<td data-label="${label}">`;
      })}</tr>`;
    });
    return `<table>${body}</table>`;
  });
}

export const ext = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

/* ------------------------------------------------------------------------- */
/* 1. Tidrapporteringssystem bygg                                             */
/* ------------------------------------------------------------------------- */

const TIDSYSTEM: FunktionPage = {
  slug: 'tidrapporteringssystem-bygg',
  plan: 'projekt',
  priceIncluded: 'Tidrapportering och attest ingår',
  heroCheck: 'iPhone och Android',
  title: 'Tidrapporteringssystem bygg – tid, attest och lön | ByggExp',
  description:
    'Tidrapporteringssystem för bygg: stämpla in med GPS, timtyp per pass, attest och export till lön och SIE4. iPhone och Android. 14 dagar gratis.',
  name: 'Tidrapporteringssystem för bygg',
  h1: 'Tidrapporteringssystem för bygg.',
  h1Accent: 'Från stämpling till lön.',
  lead: 'Timmar per projekt, attesterade och klara för lön.',
  hero: {
    name: 'tidrapporteringssystem-incheckning',
    alt: 'Byggarbetare i hjälm checkar in med mobilen vid en byggarbetsplats med ställning och en platsmarkör',
  },
  stepsHeading: ['Tre steg', 'till lön'],
  stepsLead: 'Stämpla in på bygget, granska timmarna och exportera.',
  steps: [
    {
      title: 'Stämpla in på bygget',
      text: 'GPS-incheckning i appen. Passet pausas när man lämnar arbetsplatsen.',
      bullets: ['Timmar per projekt', 'Normal, övertid eller OB per pass', 'Restid och traktamente'],
      img: '/landing/features/1arbetspass-1200.webp',
      alt: 'Arbetspass i ByggExp: timmar per medarbetare och dag i webben och i mobilappen',
    },
    {
      title: 'Granska timmarna',
      text: 'Planerat, GPS och manuellt – per medarbetare och dag.',
      img: '/landing/funktioner/screen-tidrapport-1200.webp',
      alt: 'Tidrapport i ByggExp: timmar per medarbetare och dag för två veckor, filtrerat på planerat, GPS och manuellt',
    },
    {
      title: 'Attestera och exportera',
      text: 'Godkänn passen och exportera underlaget.',
      bullets: ['Tidrapport som PDF och Excel', 'Löne-CSV och AGI-underlag', 'Lönekörning direkt från tidrapporten'],
      img: '/landing/features/12salary-1200.webp',
      alt: 'Löner i ByggExp: timmar och timlön per medarbetare, export av CSV och AGI-underlag',
    },
  ],
  body: `
<p>Ett tidrapporteringssystem för bygg ska få in rätt timmar på rätt projekt, utan att någon renskriver lappar på fredagen. I ByggExp stämplar medarbetarna in och ut i mobilen, timtypen väljs på passet och arbetsledaren attesterar i webben. Därefter går underlaget vidare till lön och bokföring. Här ser du hur flödet fungerar steg för steg, hur OB och övertid hanteras och vad du bör kontrollera innan du väljer system.</p>

<h2>Så fungerar tidrapporteringen i ByggExp</h2>
<ol>
<li><strong>Du lägger upp projekt och personal.</strong> I webbadmin skapar du projekten med plats och lägger upp medarbetarna. Var och en laddar ner appen till iPhone eller Android.</li>
<li><strong>Medarbetaren stämplar in på arbetsplatsen.</strong> Incheckningen görs med GPS. Lämnar medarbetaren projektområdet pausas passet automatiskt, så att ärendet till bygghandeln inte blir arbetstid på fel projekt. Vill någon hellre fylla i timmarna själv går det att registrera tiden manuellt per projekt och dag.</li>
<li><strong>Passet får rätt timtyp.</strong> På varje pass väljs normal tid, övertid eller OB. Restid läggs till i kilometer och minuter, och traktamente som helt, halvt eller inget.</li>
<li><strong>Extraarbeten märks direkt.</strong> Timmar som hör till en ÄTA kopplas till ÄTA:n på passet och kan faktureras separat.</li>
<li><strong>Arbetsledaren attesterar.</strong> Admin eller projektadmin går igenom passen och godkänner dem.</li>
<li><strong>Underlaget går vidare.</strong> Tidrapporten exporteras som PDF eller Excel, löneunderlaget och AGI-underlaget som CSV. Med tillägget Integrationer skapar du dessutom en SIE4-fil för Fortnox, Visma eller BL.</li>
</ol>
<p>Medarbetaren behöver alltså bara två saker: checka in när dagen börjar och välja rätt timtyp. Resten sköts i webben av den som har ansvar för lön och projekt.</p>

${illu('tidrapporteringssystem-attest', 'Kvinna vid skrivbordet arbetar vid en dator som visar ett veckoschema och en klocka')}

<h2>OB och övertid enligt Byggavtalet</h2>
<p>För byggföretag med kollektivavtal styr ${ext(BYGGAVTALET, 'Byggavtalet')} vad som räknas som ordinarie arbetstid, när övertid uppstår och vilka tillägg som gäller för obekväm arbetstid. Satserna ändras mellan avtalsperioderna, så hämta dem ur den aktuella utgåvan i stället för ur en gammal tabell.</p>
<p>I ByggExp väljer medarbetaren timtyp för varje pass: normal, övertid eller OB. Systemet räknar inte fram avtalets regler automatiskt. Det betyder att ni själva avgör vad som är övertid, till exempel när arbetsledaren har beordrat den, och att attesten blir kontrollpunkten. I lönekörningen anger ni sedan en faktor per timtyp, och bruttolönen räknas som timmar × timlön × faktor. Faktor 1 betyder vanlig tid.</p>
<p>Övertiden har också ett tak i lag. ${ext(ARBETSTIDSLAGEN, 'Arbetstidslagen')} tillåter högst 200 timmar allmän övertid per anställd och kalenderår, och kollektivavtal kan ha egna regler. När timtypen finns på varje pass ser du snabbt vem som närmar sig gränsen.</p>
<p>Vill du räkna på en enskild vecka? Använd <a href="/sv/verktyg/ob-overtid-kalkylator">OB- och övertidskalkylatorn</a> eller läs guiden <a href="/sv/blog/ob-overtid-byggavtalet-rakna">så räknar du OB och övertid enligt Byggavtalet</a>.</p>

${illu('tidrapporteringssystem-kvallsgjutning', 'Betongbil gjuter en platta i kvällsljus under en arbetslampa, en byggarbetare drar av betongen och en arbetsledare tittar i mobilen')}

<h2>Restid, traktamente och ÄTA på samma pass</h2>
<p>Grundtimmarna blir sällan fel i en byggtidrapport. Det som faller bort är allt runt omkring:</p>
<ul>
<li><strong>Restid.</strong> Kilometer och minuter registreras på passet och blir underlag för restidsersättning. Räkna på beloppen med <a href="/sv/verktyg/restidsersattning-kalkylator">restidskalkylatorn</a>.</li>
<li><strong>Traktamente.</strong> Helt eller halvt traktamente väljs per pass. Skatteverket har särskilda regler för ${ext(SKV_TRAKTAMENTE_BYGG, 'traktamenten i byggbranschen')}, så kontrollera att förutsättningarna är uppfyllda innan ni betalar ut skattefritt.</li>
<li><strong>ÄTA.</strong> Timmarna märks med rätt ÄTA på passet. När ÄTA:n är godkänd kan du skapa en förifylld faktura från den (Full koll), så att extraarbetet inte glöms bort i slutfakturan.</li>
</ul>

<h2>Från attest till lön och bokföring</h2>
<p>När perioden är attesterad har du tre vägar vidare, beroende på hur ni sköter lönen i dag:</p>
<ul>
<li><strong>Ni har en lönebyrå eller ett eget lönesystem.</strong> Exportera löneunderlaget som CSV och tidrapporten som Excel eller PDF. Byrån får timmar per medarbetare och timtyp i stället för inskannade lappar.</li>
<li><strong>Ni kör lönen i ByggExp.</strong> I Löner gör du en lönekörning per period med timmar per medarbetare och timtyp, bruttolön, skatteavdrag per rad och lönespecifikation. AGI-underlaget exporteras som CSV. Lönekörningen startar från tidrapporten.</li>
<li><strong>Bokföringen ligger i Fortnox, Visma eller BL.</strong> Med tillägget Integrationer (${ADDON_PRICE} kr/mån) skapar du en SIE4-fil som läses in i bokföringsprogrammet.</li>
</ul>

${illu('tidrapporteringssystem-lon', 'Attesterade tidkort och klockor flyttas till en kontorsarbetare vid datorn som tar fram löneunderlaget')}

<h2>Tre situationer från vardagen</h2>
<h3>Laget byter arbetsplats mitt på dagen</h3>
<p>Snickarna börjar på ett radhusprojekt och ska efter lunch till en tillbyggnad i grannkommunen. De checkar ut på det första projektet och in på det andra, och restiden läggs på passet. På kvällen ligger förmiddagen och eftermiddagen på var sitt projekt, utan att någon behövt komma ihåg fördelningen.</p>
<h3>Beordrad kvällsgjutning</h3>
<p>Betongbilen kommer sent och arbetsledaren beordrar övertid. Medarbetarna väljer övertid på kvällspasset. Vid attesten kontrollerar arbetsledaren att timtypen stämmer med det som beordrades, och övertidstillägget enligt avtalet räknar ni själva i lönen.</p>
<h3>Projektledaren vill veta hur timmarna ligger till</h3>
<p>Mitt i projektet undrar projektledaren om timbudgeten håller. Under fliken Tid och personal syns timmarna per medarbetare, och med Full koll även budget, kostnader och marginal under Ekonomi. Frågan går att besvara samma dag, inte först när projektet är slutfakturerat.</p>

<h2>Vem gör vad i systemet</h2>
<p>Ett tidrapporteringssystem fungerar när varje roll bara gör sin del, och gör den i rätt verktyg:</p>
<div class="article-table"><table>
<thead><tr><th>Roll</th><th>Gör</th><th>Var</th></tr></thead>
<tbody>
<tr><td><strong>Yrkesarbetare</strong></td><td>Checkar in och ut, väljer timtyp, lägger restid, traktamente och ÄTA på passet</td><td>Mobilappen</td></tr>
<tr><td><strong>Arbetsledare</strong></td><td>Ser vem som är på jobbet, går igenom passen och attesterar</td><td>Webben och appen</td></tr>
<tr><td><strong>Projektledare</strong></td><td>Följer timmarna per projekt, med Full koll även budget och marginal</td><td>Webben</td></tr>
<tr><td><strong>Lön och ekonomi</strong></td><td>Exporterar löneunderlag, AGI-underlag och SIE4, eller kör lönen i Löner</td><td>Webben</td></tr>
</tbody>
</table></div>
<p>Den som stämplar behöver aldrig öppna webben. I översikten ser kontoret under dagen hur många som är på jobbet och hur många timmar som har registrerats.</p>
<p>På varje medarbetare kan du också lägga ID06 och andra certifikat med utgångsdatum. Då ser du i god tid vem som behöver förnya ett kort före nästa jobb på en arbetsplats som kräver det.</p>

${illu('tidrapporteringssystem-id06', 'Byggarbetare i hjälm visar sitt ID-kort för en arbetsledare med surfplatta vid grinden till ett inhägnat bygge med byggställning')}

<h2>Checklista: välj tidrapporteringssystem för bygg</h2>
<p>Gå igenom listan med era egna rutiner framför dig. Det är sällan antalet funktioner som avgör, utan om systemet täcker det ni faktiskt gör varje vecka.</p>
<div class="article-table"><table>
<thead><tr><th>Krav</th><th>Varför det spelar roll</th><th>ByggExp</th></tr></thead>
<tbody>
<tr><td><strong>Stämpling i mobilen</strong></td><td>Tiden registreras där jobbet görs</td><td>Ja, iPhone och Android med GPS</td></tr>
<tr><td><strong>Automatisk paus</strong></td><td>Tid utanför arbetsplatsen hamnar inte på projektet</td><td>Ja, när man lämnar projektområdet</td></tr>
<tr><td><strong>Manuell registrering</strong></td><td>Alla vill inte dela sin position</td><td>Ja, per projekt och dag</td></tr>
<tr><td><strong>Timtyp per pass</strong></td><td>Grunden för OB och övertid</td><td>Ja, väljs av medarbetaren</td></tr>
<tr><td><strong>Restid och traktamente</strong></td><td>Vanliga fel i byggtidrapporter</td><td>Ja, på passet</td></tr>
<tr><td><strong>ÄTA-märkning</strong></td><td>Extraarbete ska kunna faktureras</td><td>Ja, ÄTA kopplas till passet</td></tr>
<tr><td><strong>Attest</strong></td><td>Någon ansvarar för att timmarna stämmer</td><td>Admin eller projektadmin godkänner</td></tr>
<tr><td><strong>Lön</strong></td><td>Underlaget ska gå vidare utan omskrivning</td><td>Löne-CSV, AGI-underlag, lönekörning från tidrapporten</td></tr>
<tr><td><strong>Bokföring</strong></td><td>Samma siffror i bokföringen</td><td>SIE4-fil (tillägg ${ADDON_PRICE} kr/mån)</td></tr>
<tr><td><strong>ID06 och certifikat</strong></td><td>Vet vem som får arbeta var</td><td>Utgångsdatum på varje medarbetare</td></tr>
</tbody>
</table></div>
<p>Fråga också hur priset växer med laget. I ByggExp ingår 10 användare i grundpriset och varje extra användare kostar ${EXTRA_USER_PRICE} kr i månaden. Medarbetare som bara använder mobilappen räknas bara när de har stämplat in de senaste 30 dagarna.</p>

<h2>Byt system utan avbrott</h2>
<ol>
<li><strong>Boka en genomgång.</strong> Vi tittar på hur ni rapporterar i dag och sätter upp kontot.</li>
<li><strong>Vi flyttar över datan.</strong> Projekt och personal från ert gamla system flyttar vi utan kostnad.</li>
<li><strong>Kör parallellt en löneperiod.</strong> Låt laget stämpla i appen medan den gamla rutinen finns kvar, och jämför underlaget innan ni släpper den.</li>
</ol>
<p>De första 14 dagarna är gratis med alla funktioner. Det finns ingen startavgift och ingen bindningstid. Vill du först se själva appen? Läs om <a href="/sv/tidrapportering-app">tidrapportering i mobilen</a>, eller jämför med en enkel <a href="/sv/verktyg/tidrapport-mall">tidrapportmall</a> om ni är två–tre personer.</p>
`.trim(),
  faq: [
    {
      question: 'Vad kostar ett tidrapporteringssystem för bygg?',
      answer: `I ByggExp ingår tidrapporteringen i paketet Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms, inklusive 10 användare. Därefter kostar varje extra användare ${EXTRA_USER_PRICE} kr. Vid årsbetalning får du 15 % rabatt, och de första 14 dagarna är gratis.`,
    },
    {
      question: 'Räknar systemet OB och övertid enligt Byggavtalet automatiskt?',
      answer:
        'Nej. Medarbetaren väljer timtyp per pass – normal, övertid eller OB – och arbetsledaren kontrollerar vid attesten. I lönekörningen räknas bruttolönen som timmar gånger timlön, och OB- och övertidstillägg enligt avtalet räknar ni själva.',
    },
    {
      question: 'Kan tidrapporten föras över till Fortnox eller Visma?',
      answer: `Ja, som SIE4-fil med tillägget Integrationer (${ADDON_PRICE} kr/mån). Löneunderlaget går också att exportera som CSV.`,
    },
    {
      question: 'Måste medarbetarna dela sin position?',
      answer:
        'Nej. GPS-incheckning är ett alternativ. Den som inte vill dela sin position registrerar timmarna manuellt per projekt och dag, och de hamnar i samma tidrapport.',
    },
    {
      question: 'Fungerar appen utan mobiltäckning?',
      answer:
        'ByggExp har inget offlineläge, så appen behöver uppkoppling. Saknas täckning på en arbetsplats kan timmarna registreras manuellt i efterhand.',
    },
    {
      question: 'Hur attesterar man tidrapporter i ByggExp?',
      answer:
        'Admin eller projektadmin går igenom arbetspassen i webben och godkänner dem. Efter attesten exporterar du tidrapport, löneunderlag och AGI-underlag.',
    },
    {
      question: 'Vilket tidrapporteringssystem passar ett mindre byggföretag?',
      answer:
        'Ett system som laget använder varje dag utan utbildning, som hanterar timtyp, restid och ÄTA på passet och som ger ett färdigt löneunderlag. Testa med era egna projekt under provperioden innan ni bestämmer er.',
    },
  ],
  related: [
    { href: '/sv/tidrapportering-app', label: 'Tidrapporteringsappen' },
    { href: '/sv/blog/enkelt-tidrapporteringssystem', label: 'Enkelt tidrapporteringssystem' },
    { href: '/sv/blog/ob-overtid-byggavtalet-rakna', label: 'OB och övertid enligt Byggavtalet' },
    { href: '/sv/blog/loneprogram-bygg', label: 'Löneprogram för bygg' },
    { href: '/sv/verktyg/tidrapport-mall', label: 'Gratis tidrapportmall' },
    { href: '/sv/funktioner/tidrapportering-hantverkare', label: 'Tidrapportering för hantverkare' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 2. Tidrapportering hantverkare                                             */
/* ------------------------------------------------------------------------- */

const HANTVERKARE: FunktionPage = {
  slug: 'tidrapportering-hantverkare',
  plan: 'komplett',
  priceIncluded: 'Tid, ROT-faktura och kvitton ingår',
  heroCheck: 'iPhone och Android',
  title: 'Tidrapportering hantverkare – tid till faktura | ByggExp',
  description:
    'Tidrapportering för hantverkare: timmar per kund i mobilen, restid och ÄTA på passet, ROT-faktura och kvitton på rätt jobb. 14 dagar gratis.',
  name: 'Tidrapportering för hantverkare',
  h1: 'Tidrapportering för hantverkare.',
  h1Accent: 'Varje timme till fakturan.',
  lead: 'Timmar per kund i mobilen – klara att fakturera.',
  hero: {
    name: 'hantverkare-servicebil',
    alt: 'Hantverkare med verktygsbälte och hjälm tittar i mobilen bredvid sin servicebil med öppna bakdörrar',
  },
  stepsHeading: ['Jobb, kvitto', 'och faktura'],
  stepsLead: 'Tid per kund, kvitton på rätt jobb och faktura med ROT.',
  steps: [
    {
      title: 'Tid per kund',
      text: 'Ett pass per jobb. Restid och ÄTA på samma pass.',
      img: '/landing/features/1arbetspass-1200.webp',
      alt: 'Arbetspass i ByggExp: timmar per medarbetare och projekt i webben och i mobilen',
    },
    {
      title: 'Kvitton på rätt jobb',
      text: 'Skanna kvittot med mobilen och välj projekt.',
      img: '/landing/features/11costs-1200.webp',
      alt: 'Utlägg i ByggExp: skannat kvitto med leverantör, belopp, moms och projekt i mobilen och i webben',
    },
    {
      title: 'Faktura med ROT',
      text: 'Logotyp, moms och ROT-avdrag på fakturan.',
      img: '/landing/features/8fakturor-1200.webp',
      alt: 'Ny faktura i ByggExp med fakturarader och val för ROT-avdrag i mobilen och i webben',
    },
  ],
  body: `
<p>För en hantverkare är timmen varan. Lönen, kundfakturan och ROT-avdraget bygger på den, och varje timme som inte skrivs upp är en timme du har jobbat gratis. Tidrapportering för hantverkare handlar därför om att fånga tiden per kund medan du är kvar på jobbet, och om att få den hela vägen till fakturan utan att skriva av den en gång till. Så här ser flödet ut i ByggExp för en firma med en till tio personer.</p>

<h2>En dag med tre kunder</h2>
<p>Här skiljer sig en hantverkares vardag från ett stort byggprojekt: dagen består av flera korta jobb hos olika kunder. Ett exempel:</p>
<ol>
<li><strong>07.00 – köksrenovering i Hägersten.</strong> Du checkar in på projektet när du kommer. Kunden vill ha en extra hylla i skafferiet, och du märker de timmarna som ÄTA på passet.</li>
<li><strong>11.30 – droppande blandare hos en återkommande kund.</strong> Du checkar ut från köket och in på servicejobbet. Restiden mellan adresserna läggs på passet i kilometer och minuter.</li>
<li><strong>14.00 – tillbaka i köket.</strong> Ett nytt pass på samma projekt. På vägen köpte du lister, och kvittot skannar du med mobilen direkt på köksprojektet.</li>
<li><strong>16.30 – dagen är slut.</strong> Tre pass på två kunder, restiden och ett kvitto ligger redan rätt. Ingenting behöver föras in på kvällen.</li>
</ol>
<p>Lämnar du arbetsplatsen utan att checka ut pausas passet automatiskt. Den halvtimme du står i kö på bygghandeln hamnar alltså inte på kundens timmar.</p>

<h3>Räkneexempel: en glömd halvtimme om dagen</h3>
<p>Säg att en hantverkare tappar en halvtimme per dag – ett kort besök som aldrig skrevs upp, eller restid som rundades bort. Med 220 arbetsdagar blir det 110 timmar på ett år. Med ett timpris på 550 kr exkl. moms är det drygt 60 000 kr som aldrig faktureras, per person. Siffrorna är ett exempel, men räkna gärna på din egen firma med ditt eget timpris.</p>

${illu('hantverkare-flera-kunder', 'Hantverkare monterar ett köksskåp och registrerar tid i mobilen, med tre små hus på en prickad väg i bakgrunden')}

<h2>Så sätter du upp tidrapporteringen i en hantverksfirma</h2>
<ul>
<li><strong>Ett projekt per kund eller jobb.</strong> Större uppdrag får ett eget projekt. Många små servicejobb kan samlas under ett projekt per kund, så att fakturaunderlaget blir rätt.</li>
<li><strong>Personalen laddar ner appen.</strong> ByggExp finns för iPhone och Android. Den som inte vill använda GPS fyller i sina timmar manuellt per projekt och dag.</li>
<li><strong>Bestäm vem som attesterar.</strong> I en liten firma är det ofta ägaren. Admin eller projektadmin godkänner passen i webben.</li>
<li><strong>Välj en fast dag för genomgång.</strong> En kvart varje fredag räcker för att attestera veckan och se vilka jobb som är klara att fakturera.</li>
</ul>

<h2>Från timmar till ROT-faktura</h2>
<p>När veckan är attesterad visar tidrapporten per projekt hur många timmar du ska fakturera varje kund. Fakturan skapar du i ByggExp med företagets logotyp, moms per rad och ROT-avdrag:</p>
<ul>
<li><strong>ROT-avdrag.</strong> Avdraget räknas som 30 % av arbetskostnaden. Lägg därför arbete och material på separata rader. Reglerna för vem som har rätt till avdraget och hur stort det får bli finns hos ${ext(SKV_ROT, 'Skatteverket')}.</li>
<li><strong>Omvänd byggmoms.</strong> Säljer du byggtjänster till ett företag som själv säljer byggtjänster gäller ${ext(SKV_OMVAND_MOMS, 'omvänd betalningsskyldighet')}. Den kan du välja på fakturan.</li>
<li><strong>Extraarbeten.</strong> En godkänd ÄTA kan bli en förifylld faktura (Full koll), så att tillägget faktureras även om huvudjobbet har fast pris.</li>
</ul>
<p>Fakturerar du på löpande räkning kan du exportera tidrapporten för projektet som PDF och skicka den med fakturan. Kunden ser då datum och timmar för varje pass, och frågor om ”hur kunde det bli så många timmar” blir färre. Samma PDF är ditt underlag om fakturan ifrågasätts.</p>
<p>Läs mer om hur du <a href="/sv/blog/faktureringsprogram-bygg">fakturerar som hantverkare</a> eller räkna på avdraget med <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylatorn</a>.</p>

${illu('hantverkare-faktura', 'Hantverkare med hammare lägger guldmynt i en glasburk bredvid ett hus under byggnad')}

<h2>Löpande räkning eller fast pris</h2>
<p>Tidrapporten gör olika nytta beroende på hur jobbet är prissatt:</p>
<ul>
<li><strong>Löpande räkning.</strong> Timmarna är själva fakturaunderlaget. Kunden betalar för det du har rapporterat, så varje missad halvtimme är förlorad intäkt. Här är det viktigast att korta besök och restid kommer med.</li>
<li><strong>Fast pris.</strong> Kunden betalar samma belopp oavsett tid, men timmarna visar om kalkylen höll. Gick badrummet på 60 timmar i stället för 45 vet du att nästa offert behöver se annorlunda ut. Extraarbeten utanför det avtalade faktureras ändå, och då behövs ÄTA-märkningen.</li>
</ul>
<p>Efter några månader har du facit för olika typer av jobb. Under Lönsamhet (Full koll) ser du marginalen per projekt, och med <a href="/sv/verktyg/timpris-kalkylator">timpriskalkylatorn</a> räknar du fram vad timmen behöver kosta för att jobben ska löna sig.</p>

<h2>Kvitton och material på rätt jobb</h2>
<p>Material som köps på vägen till jobbet är lätt att glömma i fakturan. I ByggExp skannar du kvittot med mobilkameran och kopplar det till projektet direkt i kassakön. Inkommande leverantörsfakturor kan skickas in via e-post och skannas på samma sätt. På så sätt ligger både timmar och material på kundens projekt när du ska fakturera, och projektets ekonomi (Full koll) visar vad jobbet faktiskt kostade.</p>
<p>Är du ensam i firman och mest behöver fakturor, kvitton och påminnelser? Då kan paketet för <a href="/sv/enmansforetag">enmansföretag</a> räcka.</p>

${illu('hantverkare-kvitto', 'Hantverkare i hjälm fotograferar ett kvitto med mobilen bredvid en vagn med brädor och färghink i en byggvaruhandel')}

<h2>Återbesök och servicejobb som inte glöms</h2>
<p>En stor del av en hantverkares dag är småjobb som är lätta att lova och lätta att glömma: ett återbesök för att justera en dörr, en kompletterande leverans, en garantifråga. I Uppgifter skapar du en uppgift med datum och tid, tilldelar den dig själv eller en anställd och väljer hur ofta appen ska påminna. Påminnelsen upprepas tills uppgiften är markerad som klar, och återkommande jobb – till exempel en årlig service – skapas på nytt när det förra är avslutat.</p>
<p>När du sedan kör till kunden checkar du in på projektet som vanligt, och tiden hamnar där den ska.</p>

<h2>När du har anställda</h2>
<p>Så fort du har en eller två anställda blir tidrapporten också löneunderlag. Varje pass har en timtyp – normal, övertid eller OB – och traktamente kan väljas som helt eller halvt. Passen attesteras och löneunderlaget exporteras som CSV. Är firman ansluten till Byggavtalet behöver timtyperna stämma med avtalets regler. Hur det fungerar för större lag beskriver vi på sidan om <a href="/sv/funktioner/tidrapporteringssystem-bygg">tidrapporteringssystem för bygg</a>.</p>
<p>Behöver anställda visa ID06 eller andra behörigheter? Certifikaten läggs på varje medarbetare med utgångsdatum, så att du ser vem som behöver förnya.</p>

${illu('hantverkare-anstallda', 'Hantverkare visar en anställd hur en kakelplatta ska sättas på en delvis kaklad vägg, med en hink fix, en tandspackel och en verktygslåda på golvet')}

<h2>Vad ska ett tidrapporteringssystem för hantverkare klara?</h2>
<p>Hantverksfirmor behöver något annat än stora entreprenörer. Ställ de här frågorna innan du väljer:</p>
<ul>
<li><strong>Klarar det flera kunder per dag?</strong> Det ska vara enkelt att checka ut på ett jobb och in på nästa.</li>
<li><strong>Kommer restiden med?</strong> Annars faktureras den aldrig.</li>
<li><strong>Kan extraarbete märkas på plats?</strong> Det är ÄTA som oftast glöms bort i fakturan.</li>
<li><strong>Kan du fakturera med ROT i samma system?</strong> Då slipper du föra över timmarna för hand.</li>
<li><strong>Kommer kvittona med?</strong> Material ska hamna på rätt kund.</li>
<li><strong>Vad kostar det med två eller tre användare?</strong> Ett pris per användare kan bli dyrt när firman växer.</li>
<li><strong>Finns det bindningstid?</strong> En liten firma ska kunna sluta när den vill.</li>
</ul>

<h2>Pris för en hantverksfirma</h2>
<p>Tidrapporteringen ingår i Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms, med 10 användare inkluderade. Vill du även fakturera med ROT, skanna kvitton och köra lön i ByggExp väljer du Full koll för ${KOMPLETT_PRICE} kr/mån, också med 10 användare. Med tillägget Integrationer (${ADDON_PRICE} kr/mån) exporterar du en SIE4-fil till bokföringen. Alla paket går att testa gratis i 14 dagar, utan startavgift och utan bindningstid.</p>
`.trim(),
  faq: [
    {
      question: 'Vilket är det enklaste sättet för en hantverkare att rapportera tid?',
      answer:
        'Att checka in och ut i mobilen per kund eller jobb. Då registreras timmarna medan du är på plats, och restid och ÄTA läggs på samma pass. Inget behöver skrivas av på kvällen.',
    },
    {
      question: 'Behöver en liten hantverksfirma ett tidrapporteringssystem?',
      answer:
        'Har du flera jobb per dag eller en anställd lönar det sig ofta snabbt, eftersom korta besök, restid och extraarbeten annars faller bort. Är du ensam räcker ibland en tidrapportmall.',
    },
    {
      question: 'Kan jag fakturera med ROT-avdrag i ByggExp?',
      answer:
        'Ja. Fakturan räknar ROT-avdraget som 30 % av arbetskostnaden. Lägg arbete och material på separata rader. Fakturering ingår i paketen Koll på pengarna och Full koll.',
    },
    {
      question: 'Kan jag rapportera tid i efterhand?',
      answer:
        'Ja. Timmar kan registreras manuellt per projekt och dag i appen, till exempel om du glömt att checka in. De hamnar i samma tidrapport som GPS-passen.',
    },
    {
      question: 'Hur får jag med restiden mellan kunderna?',
      answer:
        'Restid läggs på arbetspasset i kilometer och minuter. Den blir underlag för restidsersättning och syns i tidrapporten per projekt.',
    },
    {
      question: 'Vad kostar tidrapportering för hantverkare?',
      answer: `Koll på jobbet kostar ${PROJEKT_PRICE} kr/mån exkl. moms med 10 användare inkluderade. Full koll, med fakturering, kvitton och lön, kostar ${KOMPLETT_PRICE} kr/mån. Båda testar du gratis i 14 dagar.`,
    },
    {
      question: 'Finns det en gratis tidrapport för hantverkare?',
      answer:
        'Ja, vår tidrapportmall är gratis att fylla i och ladda ner. ByggExp har ingen gratisversion, men du kan testa alla funktioner gratis i 14 dagar.',
    },
  ],
  related: [
    { href: '/sv/blog/tidrapportering-hantverkare', label: 'Guide: tidrapportering för hantverkare' },
    { href: '/sv/blog/faktureringsprogram-bygg', label: 'Fakturera som hantverkare' },
    { href: '/sv/blog/timpris-hantverkare', label: 'Timpris för hantverkare' },
    { href: '/sv/verktyg/tidrapport-mall', label: 'Gratis tidrapportmall' },
    { href: '/sv/verktyg/rot-avdrag-kalkylator', label: 'ROT-kalkylator' },
    { href: '/sv/tidrapportering-app', label: 'Tidrapporteringsappen' },
    { href: '/sv/enmansforetag', label: 'ByggExp för enmansföretag' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 3. Byggdagbok                                                              */
/* ------------------------------------------------------------------------- */

const BYGGDAGBOK: FunktionPage = {
  slug: 'byggdagbok',
  plan: 'projekt',
  priceIncluded: 'Byggdagbok ingår',
  heroCheck: 'Foton från mobilen',
  title: 'Digital byggdagbok – väder, bemanning och foton | ByggExp',
  description:
    'Digital byggdagbok per projekt och dag: väder, bemanning, utfört arbete, avvikelser, material och foton – i samma system som tid. 14 dagar gratis.',
  name: 'Digital byggdagbok',
  h1: 'Digital byggdagbok.',
  h1Accent: 'Varje dag, per projekt.',
  lead: 'Väder, bemanning, arbete och foton – samlat i projektet.',
  hero: {
    name: 'byggdagbok-platskontor',
    alt: 'Arbetsledare i platskontoret skriver dagens anteckning vid datorn, med en byggkran och ett väderikon utanför fönstret',
  },
  stepsHeading: ['Dagboken', 'i projektet'],
  stepsLead: 'Dagens anteckning, foton från bygget och vilka som var på plats.',
  steps: [
    {
      title: 'Dagens anteckning',
      text: 'Väder, bemanning, utfört arbete och avvikelser i fasta fält.',
      img: '/landing/funktioner/screen-dagbok-1200.webp',
      alt: 'Dagboksanteckning i ByggExp med väder, temperatur, bemanning, personal, utfört arbete, avvikelser, leveranser och foton',
    },
    {
      title: 'Foton från bygget',
      text: 'Bilderna från appen hamnar i projektet med datum och person.',
      img: '/landing/features/4foto-1200.webp',
      alt: 'Projektets fotoflik i ByggExp med bilder från arbetsplatsen i webben och i mobilappen',
    },
    {
      title: 'Vilka var på plats',
      text: 'Vem som är på jobbet, per projekt.',
      img: '/landing/features/3personal-1200.webp',
      alt: 'Personal i ByggExp: vilka medarbetare som är på jobbet och på vilket projekt',
    },
  ],
  body: `
<p>En digital byggdagbok ska vara så snabb att föra att den faktiskt skrivs samma dag. I ByggExp för du dagboken i webben, en anteckning per projekt och dag, med fasta fält för det som behövs när en försening eller ett fel ska redas ut i efterhand. Foton från mobilappen hamnar i samma projekt, och dagboken ligger bredvid tidrapporterna och ÄTA-underlaget. Här ser du vad du fyller i och hur en rimlig rutin ser ut.</p>

<h2>Det här fyller du i varje dag</h2>
<p>Dagbokens fält följer det som brukar efterfrågas när en byggdagbok ska användas som underlag:</p>
<div class="article-table"><table>
<thead><tr><th>Fält</th><th>Vad du skriver</th></tr></thead>
<tbody>
<tr><td><strong>Väder och temperatur</strong></td><td>Till exempel ”Regn, +3 °C”. Du skriver in det själv.</td></tr>
<tr><td><strong>Bemanning</strong></td><td>Antal på plats och vilka som var där.</td></tr>
<tr><td><strong>Utfört arbete</strong></td><td>Moment och var i byggnaden.</td></tr>
<tr><td><strong>Avvikelser</strong></td><td>Hinder, fel, väntan och skador.</td></tr>
<tr><td><strong>Material</strong></td><td>Leveranser som kom, saknades eller var skadade.</td></tr>
<tr><td><strong>Anteckningar</strong></td><td>Besök, beslut och övrigt.</td></tr>
<tr><td><strong>Foton</strong></td><td>Bilder som laddas upp till dagens anteckning.</td></tr>
</tbody>
</table></div>
<p>Vill du se hela listan över vad standardavtalen och AMA AF tar upp, och ett ifyllt exempel, finns det i guiden <a href="/sv/blog/byggdagbok">byggdagbok – vad den ska innehålla</a>.</p>

<h2>Så för du byggdagboken i ByggExp</h2>
<ol>
<li><strong>Öppna Dagbok i webben</strong> och välj projekt och datum.</li>
<li><strong>Fyll i väder och temperatur</strong> när dagen börjar, särskilt inför gjutning, målning eller tätskikt.</li>
<li><strong>Skriv bemanningen.</strong> Under Personal ser du vilka som är på jobbet och på vilket projekt, så du behöver inte gissa.</li>
<li><strong>Skriv utfört arbete och avvikelser</strong> innan du går för dagen. Några korta, konkreta rader räcker.</li>
<li><strong>Ladda upp foton</strong> på det som kan behöva visas senare: dolda installationer, skador och avvikande förutsättningar.</li>
</ol>
<p>Ute på bygget använder laget mobilappen. Där kan man lägga en kort dagsanteckning på arbetspasset och ta foton som kopplas till passet. Bilderna hamnar i projektets fotoflik med datum och vem som tog dem. Själva dagboken skrivs alltså i webben, medan underlaget samlas in från mobilerna under dagen.</p>

${illu('byggdagbok-foto', 'Byggarbetare i hjälm fotograferar en vägg av block med mobilen')}

<h2>Svag och stark anteckning</h2>
<p>En dagboksanteckning ska kunna läsas av någon som inte var där. Jämför:</p>
<div class="article-table"><table>
<thead><tr><th>Fält</th><th>Svag</th><th>Stark</th></tr></thead>
<tbody>
<tr><td><strong>Väder</strong></td><td>Kallt</td><td>Klart, −4 °C på morgonen, +1 °C kl 14</td></tr>
<tr><td><strong>Bemanning</strong></td><td>Laget</td><td>4 snickare, 1 lärling, elektriker 2 personer från kl 10</td></tr>
<tr><td><strong>Utfört arbete</strong></td><td>Jobbat med väggar</td><td>Regling innerväggar plan 2, lägenhet 3 och 4 klar</td></tr>
<tr><td><strong>Avvikelser</strong></td><td>Lite strul</td><td>Ventilationsritning rev. C saknades, väntade 2 h på besked</td></tr>
<tr><td><strong>Material</strong></td><td>Leverans kom</td><td>Gips 13 mm, 120 skivor kl 08.15, 4 skadade, foto taget</td></tr>
</tbody>
</table></div>
<p>Den starka varianten tar en minut längre att skriva. Den är också den enda som går att använda om en försening eller ett ersättningskrav ska bedömas ett halvår senare.</p>

<h2>Fem minuter om dagen</h2>
<p>En byggdagbok behöver inte ta lång tid. Med fasta fält skriver arbetsledaren väder och bemanning på morgonen och utfört arbete, avvikelser och material innan arbetsdagen slutar. Fotona har laget redan tagit under dagen. Det som tar tid är att rekonstruera en vecka i efterhand, och det är just det en daglig rutin undviker.</p>

${illu('byggdagbok-vader', 'Arbetsledare i hjälm skriver i mobilen bredvid en termometer på en stolpe, med sol och moln ovanför och en betongblandare vid en trave skivor')}

<h2>Vem skriver – och när?</h2>
<p>Den vanligaste orsaken till en tunn byggdagbok är att ingen äger den. Bestäm därför:</p>
<ul>
<li><strong>En ansvarig per projekt.</strong> Oftast arbetsledaren. Är arbetsledaren borta tar någon annan över samma dag, inte i efterhand.</li>
<li><strong>En fast tidpunkt.</strong> Väder på morgonen, resten innan arbetsdagen slutar. En anteckning som skrivs en vecka senare väger lätt.</li>
<li><strong>Foton från alla.</strong> Låt hela laget fotografera i appen. Den som skriver dagboken plockar sedan de bilder som ska med.</li>
<li><strong>Genomgång på byggmötet.</strong> Enligt AB 04 och ABT 06 ska beställaren löpande ta del av dagboken. Gå igenom veckans anteckningar på byggmötet och för in dem i <a href="/sv/verktyg/byggmotesprotokoll-mall">protokollet</a>.</li>
</ul>

<h2>Exempel: en vecka på en tillbyggnad</h2>
<p>Så kan fem dagar se ut i dagboken för ett mindre projekt, kort men konkret. Varje rad är en sammanfattning av dagens anteckning:</p>
<div class="article-table"><table>
<thead><tr><th>Dag</th><th>Anteckning</th></tr></thead>
<tbody>
<tr><td><strong>Måndag</strong></td><td>Mulet, +6 °C. 3 snickare. Syllar och bjälklag monterade. Leverans av konstruktionsvirke kl 07.30, komplett.</td></tr>
<tr><td><strong>Tisdag</strong></td><td>Regn från kl 11, +5 °C. 3 snickare. Väggresning påbörjad, avbruten kl 13 på grund av regn. Arbetet täckt med presenning, foto taget.</td></tr>
<tr><td><strong>Onsdag</strong></td><td>Uppehåll, +7 °C. 3 snickare. Väggar rest och stagade. Beställaren besökte bygget och frågade om ett extra fönster mot trädgården.</td></tr>
<tr><td><strong>Torsdag</strong></td><td>Sol, +9 °C. 3 snickare, 1 elektriker. Takstolar monterade. Elektrikern drog rör i väggarna innan isoleringen.</td></tr>
<tr><td><strong>Fredag</strong></td><td>Mulet, +8 °C. 2 snickare. Råspont och underlagspapp på taket. Foton på infästningar innan de byggs in.</td></tr>
</tbody>
</table></div>
<p>Ingen av raderna tar mer än ett par minuter att skriva. Ändå svarar veckan på de frågor som brukar komma senare: varför väggresningen tog en dag extra, när frågan om fönstret kom upp och hur infästningarna såg ut innan de byggdes in. Frågan om fönstret är ett tillägg som ska hanteras som ÄTA – dagboken visar bara när den kom upp.</p>

${illu('byggdagbok-tillbyggnad', 'Beställare pekar på en öppning i en regelvägg till en tillbyggnad medan en snickare i hjälm antecknar i mobilen')}

<h2>Tre dagar som avgörs av dagboken</h2>
<h3>Frost före gjutningen</h3>
<p>Natten före en planerad gjutning sjunker temperaturen under noll. Arbetsledaren skriver väder och temperatur på morgonen och noterar att gjutningen skjuts upp. När tidplanen senare diskuteras finns orsaken dokumenterad samma dag, med siffror. Behöver du begära tidsförlängning finns en mall för <a href="/sv/verktyg/hindersanmalan-mall">hindersanmälan</a>.</p>
<h3>Skadad leverans</h3>
<p>Två av tjugo gipsskivor är trasiga när bilen lossat. Leveransen skrivs under Material, skadan under Avvikelser och bilderna laddas upp till dagens anteckning. Reklamationen till leverantören bygger på samma underlag.</p>
<h3>Väntan på en underentreprenör</h3>
<p>Snickarna kan inte stänga väggarna eftersom elinstallationen inte är klar. Dagboken visar vilka dagar laget fick vänta och vad som gjordes i stället. Leder väntan till extra kostnader, dokumentera dem separat med en <a href="/sv/verktyg/ata-mall">ÄTA-mall</a> – en dagboksanteckning är ingen beställning.</p>

${illu('byggdagbok-leverans', 'Lastbil lossar pallar med byggmaterial medan en arbetsledare med surfplatta noterar leveransen och en kollega bär material')}

<h2>Stora och små uppdrag</h2>
<p>Hur mycket dagbok ett projekt behöver beror på uppdraget:</p>
<ul>
<li><strong>Entreprenad med AB 04 eller ABT 06.</strong> Skriv varje arbetsdag, även när inget särskilt har hänt. En tom dag är också information, eftersom den visar att bygget gick som planerat.</li>
<li><strong>Renovering åt en privatperson.</strong> Det formella kravet saknas oftast, men en kort anteckning de dagar något avviker – dolda skador, ändrade önskemål, leveransproblem – gör det betydligt enklare att förklara en slutfaktura.</li>
<li><strong>Servicejobb på några timmar.</strong> Här räcker ofta tidrapporten och några foton på arbetspasset.</li>
</ul>
<p>Oavsett storlek gäller samma princip: skriv samma dag och skriv så att någon annan förstår.</p>

<h2>Checklista: digital byggdagbok</h2>
<ul>
<li>Finns det egna fält för väder, bemanning, utfört arbete, avvikelser och material?</li>
<li>Kopplas foton till rätt projekt och dag, eller hamnar de i en lös bildmapp?</li>
<li>Ligger dagboken i samma system som tidrapporter och ÄTA?</li>
<li>Hur delar du innehållet med beställaren om kontraktet kräver det?</li>
<li>Kan laget bidra från mobilen även om dagboken skrivs av en person?</li>
<li>Vad kostar det per projekt eller per användare?</li>
</ul>
<p>Behöver du en dagbok som PDF för ett enskilt uppdrag finns vår gratis <a href="/sv/verktyg/byggdagbok-mall">byggdagboksmall</a>.</p>
<p>Dagboken hänger ihop med resten av kvalitetsarbetet. Egenkontroller gör du i KMA-modulen, och underlag för en <a href="/sv/blog/fotodokumentation-byggprojekt-bevis">fotodokumentation som håller som bevis</a> samlas i projektets fotoflik.</p>
`.trim(),
  faq: [
    {
      question: 'Vad är en digital byggdagbok?',
      answer:
        'En byggdagbok som förs i ett system i stället för i en pärm: en anteckning per projekt och dag med väder, bemanning, utfört arbete, avvikelser, material och foton, sökbar i efterhand.',
    },
    {
      question: 'Kan jag föra byggdagboken i mobilen?',
      answer:
        'Dagboken i ByggExp skrivs i webben. I mobilappen lägger laget en kort dagsanteckning på arbetspasset och tar foton, som hamnar i projektets fotoflik med datum och person.',
    },
    {
      question: 'Hämtas vädret automatiskt?',
      answer:
        'Nej. Du skriver in väder och temperatur själv. Skriv gärna med siffror, till exempel ”Regn, +3 °C”, så att uppgiften går att använda vid en försening.',
    },
    {
      question: 'Kan beställaren läsa dagboken?',
      answer:
        'Det finns ingen inloggning för beställaren. Enligt AB 04 och ABT 06 ska beställaren löpande ta del av dagboken. Gå igenom veckans anteckningar på byggmötet och för in dem i protokollet.',
    },
    {
      question: 'Kan jag exportera byggdagboken som PDF?',
      answer:
        'Inte i dag. Behöver du en PDF för ett enskilt uppdrag kan du fylla i vår gratis byggdagboksmall och ladda ner den som PDF.',
    },
    {
      question: 'Är byggdagbok ett krav?',
      answer:
        'Det finns inget generellt lagkrav. Gäller AB 04 eller ABT 06 ska entreprenören föra dagbok enligt kap. 3 § 13, och AMA AF anger innehållet om handlingarna hänvisar till den.',
    },
    {
      question: 'Vem ska föra byggdagboken?',
      answer:
        'Enligt AB 04 och ABT 06 är det entreprenören som för dagbok. I praktiken skriver arbetsledaren eller platschefen anteckningen, medan resten av laget bidrar med foton från appen.',
    },
    {
      question: 'Vad kostar den digitala byggdagboken?',
      answer: `Dagboken ingår i paketet Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms, med 10 användare och tidrapportering. Du testar gratis i 14 dagar, utan bindningstid.`,
    },
  ],
  related: [
    { href: '/sv/blog/byggdagbok', label: 'Guide: byggdagbok' },
    { href: '/sv/verktyg/byggdagbok-mall', label: 'Gratis byggdagboksmall' },
    { href: '/sv/blog/fotodokumentation-byggprojekt-bevis', label: 'Fotodokumentation som bevis' },
    { href: '/sv/blog/ata-arbeten', label: 'ÄTA-arbeten' },
    { href: '/sv/verktyg/ata-mall', label: 'ÄTA-mall' },
    { href: '/sv/verktyg/egenkontroll-mall', label: 'Egenkontroll-mall' },
    { href: '/sv/funktioner/egenkontroll', label: 'Egenkontroll för bygg' },
    { href: '/sv/tidrapportering-app', label: 'Tidrapporteringsappen' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 4. Resursplanering                                                         */
/* ------------------------------------------------------------------------- */

const RESURSPLANERING: FunktionPage = {
  slug: 'resursplanering',
  plan: 'projekt',
  priceIncluded: 'Planering och bemanning ingår',
  heroCheck: 'iPhone och Android',
  title: 'Resursplanering bygg – Gantt och bemanning | ByggExp',
  description:
    'Resursplanering för bygg: Gantt per personal eller projekt, bemanning per dag, frånvaro i planen och varning vid överbokning. 14 dagar gratis.',
  name: 'Resursplanering för bygg',
  h1: 'Resursplanering för bygg.',
  h1Accent: 'Rätt lag på rätt bygge.',
  lead: 'Alla projekt och hela laget i en plan.',
  hero: {
    name: 'resursplanering-gantt',
    alt: 'Planerare pekar på en stor tavla med ett Gantt-schema med blå staplar, en bygghjälm på golvet',
  },
  stepsHeading: ['Planera', 'och följ upp'],
  stepsLead: 'Bemanning dag för dag, Gantt för alla projekt och uppföljning med timmar.',
  steps: [
    {
      title: 'Bemanning dag för dag',
      text: 'Medarbetare och dagar i ett rutnät.',
      img: '/landing/funktioner/screen-bemanning-1200.webp',
      alt: 'Bemanning i ByggExp: veckans rutnät med medarbetare, dagar och projekt med 8 timmar per dag',
    },
    {
      title: 'Gantt för alla projekt',
      text: 'Per personal eller per projekt.',
      bullets: ['2 veckor, månad eller eget intervall', 'Ändringslogg'],
      img: '/landing/features/5planering-1200.webp',
      alt: 'Planering i ByggExp: Gantt-schema per personal med projekt över månaden i webben och i mobilen',
    },
    {
      title: 'Följ upp med timmar',
      text: 'Laget stämplar in – du ser timmarna per projekt.',
      img: '/landing/features/1arbetspass-1200.webp',
      alt: 'Arbetspass i ByggExp: rapporterade timmar per medarbetare och dag',
    },
  ],
  body: `
<p>Ett resursplaneringsverktyg för bygg ska svara på en fråga varje morgon: vem är var, och räcker folket till? När flera projekt pågår samtidigt räcker det inte att varje projektledare har koll på sitt. Samma snickarlag blir lovat till två arbetsplatser, och semestern som godkändes i våras syns först när någon saknas. I ByggExp planerar du personalen över alla projekt i samma vy: ett Gantt-schema för veckorna framåt och en bemanningsvy för de enskilda dagarna. Här ser du hur verktygen fungerar, hur en planeringsvecka kan se ut och var gränserna går.</p>

<h2>Två vyer: Planering och Bemanning</h2>
<p>Resursplanen i ByggExp består av två delar som kompletterar varandra.</p>
<h3>Planering – Gantt-schema för veckorna framåt</h3>
<p>I Planering lägger du upp planen i ett Gantt-schema. Du väljer att planera <strong>per personal</strong>, när du vill se vad varje person gör, eller <strong>per projekt</strong>, när du vill se vilka som är inbokade på ett bygge. Vyn växlar mellan 2 veckor, månad och ett eget datumintervall. Varje förändring sparas i en ändringslogg, så att det går att se vem som flyttade vad och när.</p>
<h3>Bemanning – vem är var, dag för dag</h3>
<p>Bemanning är ett rutnät med medarbetarna som rader och veckans dagar som kolumner. Du klickar i en ruta och väljer vilket projekt personen ska vara på. Godkänd frånvaro från modulen Frånvaro syns direkt i rutnätet, och bokar du någon på mer än åtta timmar samma dag markeras dagen som överbokad.</p>

${illu('resursplanering-bemanning', 'Planerare placerar en arbetare i hjälm i en ruta på en stor bemanningstavla med medarbetare och dagar')}

<h2>En planeringsvecka i praktiken</h2>
<ol>
<li><strong>Torsdag: titta två veckor framåt.</strong> Öppna Planering per projekt och kontrollera att varje bygge har folk de kommande två veckorna. Luckor syns som tomma perioder.</li>
<li><strong>Fredag: lägg nästa vecka i Bemanning.</strong> Fördela laget dag för dag. Frånvaro som är godkänd ligger redan i rutnätet, så du planerar runt den.</li>
<li><strong>Måndag morgon: justera.</strong> Någon är sjuk eller en leverans är sen. Flytta personen i Bemanning och kontrollera att ingen blir överbokad.</li>
<li><strong>Under veckan: följ upp.</strong> Laget stämplar in i mobilappen och timmarna hamnar på projektet. Du ser om planen höll, och var den inte gjorde det.</li>
</ol>
<p>Medarbetarna ser sina uppgifter och projektets tidplan i appen. Bemanningsrutnätet används i webben av den som planerar.</p>

<h2>När planen inte håller</h2>
<h3>Sjukanmälan en måndag</h3>
<p>En plattsättare ringer sig sjuk. I Bemanning ser du vilka som är inplanerade på andra projekt samma dag. Du flyttar en person, och varningen visar om den nya dagen blir längre än åtta timmar.</p>
<h3>Ett projekt försenas en vecka</h3>
<p>Stommen är inte klar och snickarna kan inte börja. I Planering per personal ser du vilka som var bokade på projektet veckan framåt och kan lägga dem på ett annat bygge. Ändringsloggen visar senare varför planen ändrades.</p>
<h3>Ett nytt jobb ska klämmas in</h3>
<p>En kund vill ha ett badrum klart före jul. Planering per projekt visar vilka veckor ni har kapacitet. Är det fullt vet du det innan du lovar ett datum, inte efter.</p>

${illu('resursplanering-franvaro', 'Projektledare vid skrivbordet framför en stor kalender, en kollega går på semester med resväska och en annan i hjälm kommer in')}

<h2>Vem planerar vad</h2>
<p>Resursplanering i bygg går snett när alla planerar i var sitt verktyg. Fördela ansvaret så här:</p>
<ul>
<li><strong>Planeraren eller arbetschefen</strong> äger helheten: alla projekt och hela personalen i Planering, veckan framåt i Bemanning.</li>
<li><strong>Projektledaren</strong> tittar på sitt projekt i Planering per projekt och säger till i tid när behovet ändras.</li>
<li><strong>Arbetsledaren</strong> stämmer av dag för dag på bygget och hanterar sjukanmälningar och förseningar.</li>
<li><strong>Medarbetaren</strong> stämplar in i appen och ser sina uppgifter där.</li>
</ul>
<p>Eftersom ändringsloggen visar vem som flyttade vem behöver ni inte diskutera i efterhand varför ett lag hamnade fel.</p>

<h2>Uppgifter kompletterar planen</h2>
<p>Bemanningen säger var folk ska vara. Uppgifterna säger vad som ska göras där. I Uppgifter ger du en person eller hela projektteamet en uppgift med prioritet, start- och förfallodatum. Påminnelser skickas med det intervall du väljer, och efter ett antal påminnelser kan chefen meddelas automatiskt. Så missas inte det som måste vara klart innan nästa lag kan börja, till exempel en egenkontroll före igenbyggnad.</p>

${illu('resursplanering-egenkontroll', 'Byggarbetare i hjälm håller en surfplatta med bockar framför en öppen regelvägg medan en kollega bär fram en gipsskiva')}

<h2>Frånvaro i samma plan</h2>
<p>Semester, VAB och sjukdom avgör hur många som faktiskt finns att planera med. I ByggExp registreras ledighet i Frånvaro. När den är godkänd syns den i Bemanning, så att ingen blir inbokad en dag med ledighet.</p>
<p>Vill du räkna på kapacitet och övertid över längre tid beskriver vi resurshistogram och utjämning i guiden om <a href="/sv/blog/resursplanering-bygg">resursplanering i bygg</a>.</p>

<h2>Planera säsongen, inte bara veckan</h2>
<p>Byggåret har toppar och dalar som går att se i förväg. Med det egna datumintervallet i Planering kan du lägga upp en längre period och se hela säsongen i samma schema:</p>
<ul>
<li><strong>Sommaren.</strong> Lägg in godkänd semester tidigt och kontrollera vilka projekt som har folk under juli. Det är ofta där en leveransvecka spricker.</li>
<li><strong>Vintern.</strong> Moment som är känsliga för kyla, som gjutning och utvändig målning, behöver planeras med marginal. Planera inomhusarbete för lagen som annars blir stående.</li>
<li><strong>Projektstarter som krockar.</strong> Två projekt som startar samma vecka behöver var sitt startlag. Planering per projekt visar krocken månader innan den inträffar.</li>
</ul>
<p>Kortsiktigt arbetar du sedan i Bemanning, dag för dag, medan den långa planen ligger kvar som ram.</p>

<p>Ett tips: gå igenom den långa planen en gång i månaden tillsammans med projektledarna. Det tar en halvtimme och fångar de flesta krockar medan de fortfarande går att lösa genom att flytta en start en vecka.</p>

${illu('resursplanering-vinter', 'Två byggarbetare i hjälm lägger en isoleringsmatta över en nygjuten betongplatta i snön, bredvid ett värmeaggregat')}

<h2>Vad du planerar – och vad du inte planerar – i ByggExp</h2>
<div class="article-table"><table>
<thead><tr><th>Behov</th><th>I ByggExp</th></tr></thead>
<tbody>
<tr><td><strong>Personal över alla projekt</strong></td><td>Ja, i Planering och Bemanning</td></tr>
<tr><td><strong>Vy per person och per projekt</strong></td><td>Ja</td></tr>
<tr><td><strong>Dag för dag</strong></td><td>Ja, i Bemanning</td></tr>
<tr><td><strong>Godkänd frånvaro i planen</strong></td><td>Ja</td></tr>
<tr><td><strong>Varning vid överbokning</strong></td><td>Ja, över 8 timmar per dag</td></tr>
<tr><td><strong>Ändringslogg</strong></td><td>Ja</td></tr>
<tr><td><strong>Uppföljning mot rapporterade timmar</strong></td><td>Ja, tidrapporteringen finns i samma system</td></tr>
<tr><td><strong>Maskiner och utrustning i planen</strong></td><td>Nej. Verktyg och utrustning registreras i Verktyg med status, innehavare och projekt</td></tr>
<tr><td><strong>Underentreprenörer i planen</strong></td><td>Nej</td></tr>
<tr><td><strong>Dra och släpp</strong></td><td>Nej, du klickar i rutan och väljer projekt</td></tr>
</tbody>
</table></div>
<p>Planerar ni kranar och grävmaskiner lika noga som folk kan en enkel bokningslista vid sidan om räcka. Lägg den gärna i samma <a href="/sv/verktyg/gantt-schema-mall">Gantt-mall</a> som tidplanen.</p>

<h2>Från Excel till resursplaneringsverktyg</h2>
<p>Ett kalkylark fungerar så länge en person planerar och laget är litet. Det blir svårt när flera projektledare ändrar i samma fil, när frånvaron ligger i en annan lista och när ingen ser vem som ändrade senast. Så kommer du igång:</p>
<ul>
<li><strong>Lägg upp pågående projekt och personal.</strong> Vi flyttar över data från ert gamla system utan kostnad.</li>
<li><strong>Börja med två veckor.</strong> Planera bara den närmaste perioden i Bemanning och bygg ut Planering när rutinen sitter.</li>
<li><strong>Registrera frånvaro i Frånvaro</strong> i stället för i en separat lista.</li>
<li><strong>Låt laget stämpla in.</strong> Först när timmarna kommer in ser du om planen stämmer med verkligheten.</li>
</ul>
<p>Planering av projekt och personal ingår i paketet Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms med 10 användare, och du testar gratis i 14 dagar. Läs också om <a href="/sv/blog/personalplanering-bygg">bemanningsplanering</a> och <a href="/sv/blog/schemalaggningssystem-bygg">schemaläggning</a>.</p>
`.trim(),
  faq: [
    {
      question: 'Vad är ett resursplaneringsverktyg?',
      answer:
        'Ett verktyg där du fördelar personal och annan begränsad kapacitet på projektens moment, så att ingen är dubbelbokad. I ByggExp planerar du personal över alla projekt i ett Gantt-schema och dag för dag i Bemanning.',
    },
    {
      question: 'Hur gör man en resursplan för ett byggprojekt?',
      answer:
        'Utgå från tidplanen, räkna ut hur många personer varje moment behöver, dra av känd frånvaro och fördela laget vecka för vecka. Stäm av planen varje vecka mot rapporterade timmar.',
    },
    {
      question: 'Kan jag planera maskiner och underentreprenörer i ByggExp?',
      answer:
        'Nej, planeringen gäller personal. Verktyg och utrustning registreras i Verktyg med status, innehavare och projekt. Underentreprenörer kan läggas i en separat lista eller Gantt-mall.',
    },
    {
      question: 'Syns semester och sjukdom i planen?',
      answer:
        'Ja. Ledighet registreras i Frånvaro, och när den är godkänd syns den i bemanningsvyn.',
    },
    {
      question: 'Ser medarbetarna planen i mobilen?',
      answer:
        'I appen ser medarbetarna sina uppgifter och projektets tidplan. Bemanningsrutnätet används i webben av den som planerar.',
    },
    {
      question: 'Vad är skillnaden mellan resursplanering och bemanning?',
      answer:
        'Resursplaneringen ser veckor och månader framåt och svarar på om ni har folk nog för projekten. Bemanningen är den dagliga fördelningen: vem som är på vilket bygge i morgon. I ByggExp motsvaras de av Planering och Bemanning.',
    },
    {
      question: 'Vad kostar resursplanering i ByggExp?',
      answer: `Planering av projekt och personal ingår i Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms, med 10 användare och tidrapportering. Extra användare kostar ${EXTRA_USER_PRICE} kr/mån. Du testar gratis i 14 dagar.`,
    },
    {
      question: 'Finns det en gratis resursplan i Excel?',
      answer:
        'Ja, vår Gantt-mall är gratis. Den räcker för ett lag och ett par projekt. Med flera projektledare och roterande lag blir frånvaro och ändringar svåra att hålla aktuella i en fil.',
    },
  ],
  related: [
    { href: '/sv/blog/resursplanering-bygg', label: 'Guide: resursplanering i bygg' },
    { href: '/sv/verktyg/gantt-schema-mall', label: 'Gratis Gantt-mall' },
    { href: '/sv/verktyg/schema-mall', label: 'Arbetsschema-mall' },
    { href: '/sv/blog/personalplanering-bygg', label: 'Bemanningsplanering' },
    { href: '/sv/blog/sjuklon-karensavdrag-vab-byggforetag', label: 'Sjuklön, karens och VAB' },
    { href: '/sv/tidrapportering-app', label: 'Tidrapporteringsappen' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 5. Egenkontroll                                                            */
/* ------------------------------------------------------------------------- */

// Claims: docs/seo/product-facts-verified.md «Egenkontroll / sjekklister» (YES
// lines, not the nb-only ones). Checked in byggexp-admin 2026-11-15 for the
// Swedish product: PDF export (features/kma/KmaPage.jsx «Exportera PDF») and
// the four standard templates (features/kma/starterTemplates.js). Starting
// without a template and typing the points works in the APP only (web needs a
// template: NewChecklistForm.jsx canSave) — keep step 2 worded that way. NOT claimed:
// sending a checklist to the customer, EXIF time/GPS on photos, AI draft from a
// contract, deviations (avvik) created from a remark, ÄTA link.
const BOVERKET_KONTROLLPLAN_PBL =
  'https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollplan/';

const EGENKONTROLL: FunktionPage = {
  slug: 'egenkontroll',
  plan: 'projekt',
  priceIncluded: 'Egenkontroller och byggdagbok ingår',
  heroCheck: 'Foto per kontrollpunkt',
  title: 'Egenkontroll bygg – digital egenkontroll i appen | ByggExp',
  description:
    'Egenkontroll för bygg i appen: egna mallar, resultat och foto per kontrollpunkt, anmärkning med åtgärd och signering per projekt. 14 dagar gratis.',
  name: 'Egenkontroll för bygg',
  h1: 'Egenkontroll för bygg.',
  h1Accent: 'Ifylld på plats, signerad per projekt.',
  lead: 'Egna mallar, foto per kontrollpunkt och signerad kontroll i projektet.',
  hero: {
    name: 'resursplanering-egenkontroll',
    alt: 'Byggarbetare i hjälm håller en surfplatta med bockar framför en öppen regelvägg medan en kollega bär fram en gipsskiva',
  },
  stepsHeading: ['Dokumentera', 'kvaliteten'],
  stepsLead: 'Foton från bygget, byggdagbok och uppgifter med deadline.',
  steps: [
    {
      title: 'Foton från bygget',
      text: 'Bilderna tas i appen och hamnar i projektet med datum och person.',
      img: '/landing/features/4foto-1200.webp',
      alt: 'Projektets fotoflik i ByggExp med bilder från arbetsplatsen i webben och i mobilappen',
    },
    {
      title: 'Byggdagbok',
      text: 'Utfört arbete, bemanning, väder och avvikelser per dag.',
      img: '/landing/funktioner/screen-dagbok-1200.webp',
      alt: 'Dagboksanteckning i ByggExp med väder, temperatur, bemanning, personal, utfört arbete, avvikelser, leveranser och foton',
    },
    {
      title: 'Uppgifter med deadline',
      text: 'Ansvarig, förfallodatum och påminnelser tills det är klart.',
      img: '/landing/features/2uppgift-1200.webp',
      alt: 'Uppgift i ett byggprojekt i ByggExp: projekt, ansvarig, startdatum, förfallodatum och påminnelser, och påminnelsen i mobilen',
    },
  ],
  body: `
<p>En egenkontroll inom bygg ska göras när momentet är klart och väggen fortfarande står öppen, inte rekonstrueras kvällen före slutbesiktningen. I ByggExp bygger du egna mallar med kontrollpunkter och fyller i egenkontrollen på plats i appen, med foto per punkt. När alla punkter är besvarade signeras kontrollen. Kontrollen ligger sedan på projektet, tillsammans med dagbok, foton och dokument. Här ser du hur den digitala egenkontrollen fungerar, vad som sparas på varje punkt och hur den hänger ihop med kontrollplan och egenkontrollprogram.</p>

<h2>Vad är en egenkontroll inom bygg?</h2>
<p>En egenkontroll är entreprenörens egen, dokumenterade kontroll av att ett arbete är utfört enligt handlingar och gällande krav. Den görs av den som utför eller leder arbetet, och den ska kunna visas för beställaren, kontrollansvarig eller besiktningsmannen.</p>
<p>Plan- och bygglagen kräver ingen särskild blankett av byggföretaget. Det är byggherren som ansvarar för att kraven uppfylls, och projektets ${ext(BOVERKET_KONTROLLPLAN_PBL, 'kontrollplan')} anger vilka kontroller som ska göras – ofta med egenkontroll som metod. I praktiken behöver du som entreprenör tre saker för varje kontroll: vad som kontrollerades, vad resultatet blev och vem som stod för det.</p>

<h2>Så gör du en egenkontroll i ByggExp</h2>
<ol>
<li><strong>Skapa mallen.</strong> I webben lägger du upp en mall med kontrollpunkter. Varje punkt har en text och en referens, till exempel en ritning, en standard eller ett avsnitt i BBR.</li>
<li><strong>Starta egenkontrollen på projektet.</strong> I webben väljer du projekt och mall och anger datum och ansvarig. I appen kan du i stället skriva kontrollpunkterna direkt när du startar kontrollen.</li>
<li><strong>Fyll i på plats.</strong> I appen går du igenom punkterna och sätter resultat: godkänd, anmärkning eller ej aktuellt.</li>
<li><strong>Fota punkten.</strong> Bilden tas i appen och sparas på just den kontrollpunkten, så att det syns vad som kontrollerades.</li>
<li><strong>Åtgärda anmärkningarna.</strong> Skriv vilken åtgärd som krävs och ange datum när den är utförd.</li>
<li><strong>Signera.</strong> När alla punkter är besvarade signerar admin eller projektadmin med namn och datum.</li>
</ol>
<p>Kontrollen går också att fylla i och signera i webben, till exempel när arbetsledaren går igenom veckans egenkontroller från kontoret. Bilderna från appen syns då på respektive punkt.</p>

${illu('feat-foto-ror-i-vagg', 'Byggarbetare i hjälm fotograferar rör och kablar i en öppen vägg med mobilen, med en gipsskiva lutad mot väggen')}

<h2>Det här sparas på varje kontrollpunkt</h2>
<p>En bock i en ruta säger inte mycket ett år senare. Därför har varje punkt egna fält för det som brukar efterfrågas:</p>
<div class="article-table"><table>
<thead><tr><th>Fält</th><th>Vad du anger</th></tr></thead>
<tbody>
<tr><td><strong>Kontrollpunkt</strong></td><td>Vad som ska kontrolleras, till exempel ”Fuktkvot i syll”.</td></tr>
<tr><td><strong>Referens och krav</strong></td><td>Handlingen eller kravet som punkten kontrolleras mot.</td></tr>
<tr><td><strong>Metod</strong></td><td>Hur kontrollen görs: mätning, okulär kontroll eller provning.</td></tr>
<tr><td><strong>Mätvärde och enhet</strong></td><td>Det uppmätta värdet, till exempel 14 %.</td></tr>
<tr><td><strong>Resultat</strong></td><td>Godkänd, anmärkning eller ej aktuellt.</td></tr>
<tr><td><strong>Kontrollerad av och datum</strong></td><td>Vem som gjorde kontrollen och när.</td></tr>
<tr><td><strong>Foto</strong></td><td>En eller flera bilder på punkten, tagna i appen.</td></tr>
<tr><td><strong>Kommentar och åtgärd</strong></td><td>Vad som avvek, vad som ska göras och när det blev klart.</td></tr>
</tbody>
</table></div>
<p>Metod, krav, mätvärde och åtgärd fyller du i när du gör kontrollen i appen. I webben anger du resultat, datum och kommentar per punkt.</p>

<h2>Egna mallar för återkommande kontroller</h2>
<p>De flesta byggföretag gör samma kontroller i projekt efter projekt. Lägg därför tiden på mallen en gång. En mall i ByggExp har ett namn, en kategori – kvalitet, miljö, arbetsmiljö eller övrigt – och sina kontrollpunkter med referens.</p>
<p>Vill du inte börja från ett tomt blad finns standardmallar att lägga till: egenkontroll el, VVS och bygg/stomme samt skyddsrond. Se dem som en utgångspunkt. Stryk det som inte gäller era arbeten och lägg till de punkter som era beställare brukar fråga efter.</p>
<p>Håll mallarna korta. Tio punkter som faktiskt kontrolleras är värda mer än fyrtio som bockas av på rutin. Dela hellre upp arbetet i flera kontroller, till exempel en före igenbyggnad och en efter färdigställt ytskikt. Punktförslag per yrke finns i våra gratis <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmallar</a>.</p>

${illu('projekthantering-ritning', 'Projektledare och byggarbetare i hjälm tittar tillsammans på en blå ritning på ett arbetsbord på bygget')}

<h2>Anmärkning, åtgärd och uppföljning</h2>
<p>En egenkontroll där allt är godkänt varje gång väcker frågor. Värdet ligger i att felen syns medan de är billiga att rätta till. När en punkt får resultatet anmärkning skriver du vad som avvek och vilken åtgärd som krävs. När åtgärden är utförd anger du datumet. En anmärkning utan klardatum räknas som öppen, så det syns vad som återstår innan nästa lag går in.</p>
<p>Ska någon annan rätta till felet lägger du upp åtgärden som en uppgift i projektet, med ansvarig, förfallodatum och påminnelser tills den är klar. Större avvikelser – sådant som påverkar tid, kostnad eller beställarens handlingar – hör dessutom hemma i byggdagboken samma dag.</p>

<h2>Signering låser egenkontrollen</h2>
<p>En kontroll som går att ändra i efterhand är svag som underlag. I ByggExp signeras egenkontrollen med namn och datum av admin eller projektadmin, och det går först när varje punkt har ett resultat. Efter signeringen är kontrollen låst och kan bara läsas.</p>
<p>Det ger en tydlig ordning: den som utför arbetet fyller i, och den som ansvarar för projektet granskar och signerar. Saknas ett svar på en punkt märks det innan kontrollen lämnas vidare, inte på besiktningen.</p>

${illu('byggdagbok-foto', 'Byggarbetare i hjälm fotograferar en vägg av block med mobilen')}

<h2>Exempel: egenkontroll före igenbyggnad</h2>
<p>Så kan en kort egenkontroll se ut för en innervägg med installationer, innan gipsen sätts:</p>
<div class="article-table"><table>
<thead><tr><th>Kontrollpunkt</th><th>Krav och metod</th><th>Resultat</th></tr></thead>
<tbody>
<tr><td><strong>Reglar c/c och infästning</strong></td><td>Enligt ritning, mätning</td><td>Godkänd, c/c 450 mm</td></tr>
<tr><td><strong>Fuktkvot i syll</strong></td><td>Enligt handlingarnas gränsvärde, fuktkvotsmätare</td><td>Godkänd, 14 %</td></tr>
<tr><td><strong>Rör och elrör klamrade</strong></td><td>Enligt installatörens anvisning, okulärt</td><td>Anmärkning: ett rör saknar klammer. Åtgärdat samma dag.</td></tr>
<tr><td><strong>Kortlingar för inredning</strong></td><td>Enligt ritning, okulärt</td><td>Godkänd, foto taget</td></tr>
<tr><td><strong>Brandtätning i genomföringar</strong></td><td>Enligt brandskyddsbeskrivningen</td><td>Ej aktuellt i den här väggen</td></tr>
</tbody>
</table></div>
<p>Fem punkter, några foton och en signatur tar några minuter. När väggen är stängd finns inget annat sätt att visa hur det såg ut bakom gipsen.</p>

<h2>Egenkontrollprogram, kontrollplan och egenkontroll</h2>
<p>Tre begrepp blandas ofta ihop:</p>
<ul>
<li><strong>Kontrollplanen</strong> hör till bygglovet eller anmälan. Den tas fram av byggherren och anger vilka kontroller som ska göras, av vem och mot vad. En mall finns i vårt verktyg för <a href="/sv/verktyg/kontrollplan-mall">kontrollplan</a>.</li>
<li><strong>Egenkontrollprogrammet</strong> är företagets egna rutiner: vilka kontroller ni gör, vem som ansvarar och hur de dokumenteras. För elinstallationsföretag är det ett lagkrav enligt elsäkerhetslagen. Läs mer i guiden om <a href="/sv/blog/egenkontrollprogram">egenkontrollprogram</a>.</li>
<li><strong>Egenkontrollen</strong> är det ifyllda protokollet i ett enskilt projekt – beviset på att kontrollen gjordes.</li>
</ul>
<p>I ByggExp motsvarar mallarna den praktiska delen av programmet, eftersom de bestämmer vilka punkter som kontrolleras i varje jobb. De signerade egenkontrollerna är protokollen. Själva programtexten, med ansvar och kompetenskrav, skriver ni som ett eget dokument och laddar upp bland projektets dokument, i webben eller i appen.</p>

<h2>Papper, Excel eller app?</h2>
<div class="article-table"><table>
<thead><tr><th>Fråga</th><th>Papper eller Excel</th><th>Egenkontroll i appen</th></tr></thead>
<tbody>
<tr><td><strong>När fylls den i?</strong></td><td>Ofta i efterhand, på kontoret</td><td>På plats, när momentet är klart</td></tr>
<tr><td><strong>Var hamnar fotot?</strong></td><td>I någons bildrulle</td><td>På kontrollpunkten</td></tr>
<tr><td><strong>Vem har signerat?</strong></td><td>Oläslig signatur eller ingen alls</td><td>Namn och datum, därefter låst</td></tr>
<tr><td><strong>Vad är öppet?</strong></td><td>Svårt att se utan att bläddra</td><td>Anmärkningar utan klardatum</td></tr>
<tr><td><strong>Var finns den om ett år?</strong></td><td>I en pärm eller en mapp</td><td>På projektet</td></tr>
</tbody>
</table></div>
<p>Papper fungerar för enstaka uppdrag. Gör ni egenkontroller varje vecka blir det snabbt dyrare att leta än att dokumentera. För ett enskilt jobb kan du fylla i vår gratis <a href="/sv/verktyg/egenkontroll-bygg-mall">mall för egenkontroll bygg</a> och spara den som PDF.</p>

<h2>Checklista: välja egenkontroll-app</h2>
<ul>
<li>Kan ni bygga egna mallar, eller är ni låsta till leverantörens punkter?</li>
<li>Sparas fotot på kontrollpunkten eller i en allmän bildmapp?</li>
<li>Går det att ange metod, krav och mätvärde, inte bara en bock?</li>
<li>Syns det vilka anmärkningar som fortfarande är öppna?</li>
<li>Låses kontrollen när den är signerad?</li>
<li>Ligger egenkontrollen på samma projekt som dagbok, foton och timmar?</li>
<li>Kan ni ta ut kontrollen som PDF när beställaren frågar?</li>
<li>Vad kostar det per användare när hela laget ska med?</li>
</ul>

<h2>Kom igång med digital egenkontroll</h2>
<p>Börja med en mall för det moment ni gör oftast och låt ett lag använda den i ett pågående projekt. Efter ett par veckor vet ni vilka punkter som behövs och vilka som kan strykas. De signerade egenkontrollerna exporterar du som PDF från webben när de ska lämnas över.</p>

${illu('projekthantering-overlamning', 'Projektledare i hjälm lämnar över nycklarna till ett glatt par framför ett nybyggt vitt hus')}

<p>Egenkontroller ingår i paketet Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms med 10 användare, tillsammans med <a href="/sv/funktioner/byggdagbok">digital byggdagbok</a>, <a href="/sv/funktioner/projekthantering">projekthantering</a> och tidrapportering. Du testar gratis i 14 dagar, utan bindningstid.</p>
`.trim(),
  faq: [
    {
      question: 'Vad är en digital egenkontroll?',
      answer:
        'En egenkontroll som du fyller i via app eller webb i stället för på papper: kontrollpunkter med resultat, foto, kommentar och signatur, sparade på projektet.',
    },
    {
      question: 'Kan jag göra egenkontrollen i mobilen?',
      answer:
        'Ja. I appen sätter du resultat per kontrollpunkt, tar foton och anger metod, krav, mätvärde och åtgärd. Kontrollen går också att fylla i och signera i webben.',
    },
    {
      question: 'Kan jag använda egna mallar?',
      answer:
        'Ja. Du skapar egna mallar med kontrollpunkter, referens och kategori. Det finns också standardmallar för el, VVS, bygg/stomme och skyddsrond att utgå från.',
    },
    {
      question: 'Vem signerar egenkontrollen?',
      answer:
        'Admin eller projektadmin signerar med namn och datum. Det går först när alla punkter är besvarade, och efter signeringen är kontrollen låst.',
    },
    {
      question: 'Kan beställaren få egenkontrollen?',
      answer:
        'Det finns ingen inloggning för beställaren och kontrollen skickas inte från systemet. Du exporterar den signerade egenkontrollen som PDF och lämnar över den själv.',
    },
    {
      question: 'Är egenkontroll ett lagkrav inom bygg?',
      answer:
        'Plan- och bygglagen kräver inget egenkontrollprogram av byggföretaget, men kontrollplanen anger ofta egenkontroll som metod. Elinstallationsföretag måste ha ett egenkontrollprogram enligt elsäkerhetslagen.',
    },
    {
      question: 'Vad är skillnaden mellan egenkontroll och egenkontrollprogram?',
      answer:
        'Egenkontrollprogrammet beskriver företagets rutiner för kontroll och dokumentation. Egenkontrollen är det ifyllda protokollet i ett enskilt projekt.',
    },
    {
      question: 'Vad kostar egenkontroll i ByggExp?',
      answer: `Egenkontroller ingår i paketet Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms, med 10 användare, byggdagbok och tidrapportering. Du testar gratis i 14 dagar, utan bindningstid.`,
    },
  ],
  related: [
    { href: '/sv/blog/egenkontrollprogram', label: 'Guide: egenkontrollprogram' },
    { href: '/sv/verktyg/egenkontroll-mall', label: 'Gratis egenkontrollmall' },
    { href: '/sv/verktyg/egenkontroll-bygg-mall', label: 'Egenkontroll bygg – mall' },
    { href: '/sv/verktyg/kontrollplan-mall', label: 'Kontrollplan-mall' },
    { href: '/sv/blog/fotodokumentation-byggprojekt-bevis', label: 'Fotodokumentation som bevis' },
    { href: '/sv/funktioner/byggdagbok', label: 'Digital byggdagbok' },
    { href: '/sv/funktioner/projekthantering', label: 'Projekthantering för bygg' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 6. Arbetsorder                                                             */
/* ------------------------------------------------------------------------- */

// Claims: docs/seo/product-facts-verified.md «Arbetsorder / Uppgifter (verified
// 2026-11-15, sv)», YES lines only. Main story = the web calendar window
// «Ny bokning → Arbetsorder» (in production, confirmed by owner 2026-11-15):
// saving creates a project (Ordertyp Service) with customer, address, order
// reference, documents and one booking per person and day. Uppgifter are the
// follow-up part. Keep honest: the WORKER does not see the booking or its
// clock times in the app (calendar = management roles) — he sees the order as
// a project (name, status, start, «Plats»), its documents, its tasks, and
// stamps time on it; customer contact, order reference and article are web
// only. No drag-and-drop of bookings. «Orderreferens» is free text, not a
// generated number. NOT claimed: customer signature, PDF / sending the order,
// ÄTA, time per task, push when booked, which package the customer / article
// register belongs to, booking from the app.
const ARBETSORDER: FunktionPage = {
  slug: 'arbetsorder',
  plan: 'projekt',
  priceIncluded: 'Kalender, projekt och uppgifter ingår',
  heroCheck: 'Påminnelser tills det är klart',
  title: 'Arbetsorder bygg – digital arbetsorder för hantverkare | ByggExp',
  description:
    'Arbetsorder för bygg och hantverkare: boka jobbet i kalendern med kund, adress, underlag, tid och personal. Följ upp med påminnelser. 14 dagar gratis.',
  name: 'Arbetsorder för bygg',
  h1: 'Arbetsorder för bygg.',
  h1Accent: 'Rätt jobb till rätt person.',
  lead: 'Boka jobbet i kalendern: kund, adress, underlag, tid och personal.',
  hero: {
    name: 'feat-uppgifter-klar',
    alt: 'Hantverkare i hjälm och förkläde trycker på mobilen bredvid en blå ruta med en vit bock',
  },
  stepsHeading: ['Boka', 'jobben'],
  stepsLead: 'Boka i kalendern, samla underlaget på ordern och påminn tills det är klart.',
  steps: [
    {
      title: 'Boka i kalendern',
      text: 'Beskrivning, kund, adress, tid och personal i ett fönster.',
      bullets: ['Dokument och foton som underlag', 'Orderreferens på ordern'],
      img: '/landing/features/5planering-1200.webp',
      alt: 'Planering i ByggExp: Gantt-schema per personal med projekt över månaden i webben och i mobilen',
    },
    {
      title: 'Ordern sparas med allt på ett ställe',
      text: 'Dokument, foton och arbetspass på samma ställe.',
      bullets: ['Budget och kostnader i Koll på pengarna och Full koll'],
      img: '/landing/features/project.webp',
      alt: 'Projektkort i ByggExp: budget och resurser, betalningsplan, uppgifter och deadlines och arbetspass för ett projekt',
    },
    {
      title: 'Uppgift med påminnelser',
      text: 'Deadline och påminnelser tills jobbet är klart.',
      bullets: ['Till alla i ordern eller en person'],
      img: '/landing/features/2uppgift-1200.webp',
      alt: 'Uppgift i ett byggprojekt i ByggExp: projekt, ansvarig, startdatum, förfallodatum och påminnelser, och påminnelsen i mobilen',
    },
  ],
  body: `
<p>En arbetsorder för bygg ska svara på fyra frågor: vad som ska göras, var, av vem och när. I ByggExp skapar du arbetsordern som en bokning i kalendern. Beskrivning, kund och adress, orderreferens, underlag, tid och personal fylls i på ett ställe.</p>
<p>När du sparar finns ordern som en egen order i ByggExp. De som är bokade hittar det i appen, med adress och bifogade dokument, och stämplar sin tid på det. Här ser du hur du skapar en arbetsorder, vad hantverkaren ser i mobilen och hur du följer upp med uppgifter och påminnelser.</p>

<h2>Vad är en arbetsorder inom bygg?</h2>
<p>En arbetsorder är beskedet till den som ska utföra ett jobb: byt blandaren hos kunden på tisdag, dra fram el till laddboxen, laga fuktskadan i trapphuset. I små byggföretag går beskedet ofta via sms, ett samtal i bilen eller en lapp på instrumentbrädan. Det fungerar tills två jobb krockar, eller tills någon frågar vad som egentligen blev gjort.</p>
<p>En digital arbetsorder är samma besked på en plats där kontoret och den som utför jobbet ser samma sak: vad som är beställt, hos vem, när och vilket underlag som gäller.</p>

<h2>Så skapar du en arbetsorder i kalendern</h2>
<p>Öppna Planering i webben och välj vecka eller två veckor. Dra över en ledig tid i kalendern, så öppnas fönstret Ny bokning med dag och klockslag ifyllda. Överst ligger avsnittet Arbetsorder.</p>
<ol>
<li><strong>Beskriv jobbet.</strong> Skriv en beskrivning, till exempel ”Byta jordfelsbrytare”. Det är det enda fältet som måste fyllas i, och det blir orderns namn.</li>
<li><strong>Ange orderreferens.</strong> Ett fritextfält för kundens referens eller ert eget ordernummer.</li>
<li><strong>Bifoga dokument och foton.</strong> Beställningen, en ritning eller bilder från besöket hos kunden. Du kan bifoga bilder, pdf, Word- och Excel-filer.</li>
<li><strong>Lägg in kunden.</strong> Privatperson eller företag, med namn, telefon, e-post och adress. Välj en befintlig kund eller skriv in en ny direkt i fönstret. Kundens adress blir orderns adress.</li>
<li><strong>Sätt tiden.</strong> Från och till, med datum och klockslag. Sträcker sig jobbet över flera dagar kan du välja att bara boka vardagar.</li>
<li><strong>Välj personal.</strong> En eller flera personer. Saknas någon skriver du in namn och e-post i fönstret, och personen får en inbjudan.</li>
</ol>
<p>När du trycker på Skapa sparas arbetsordern som en egen order med ordertypen Service. Kund, adress och orderreferens sparas på ordern, filerna hamnar bland orderns dokument och varje person får en bokning per dag i kalendern.</p>
<p>Hör jobbet till en order som redan finns väljer du den under Lägg till i befintlig order. Har ni artiklar upplagda kan du också välja en artikel, och då fylls beskrivningen i med artikelns namn.</p>

${illu('feat-uppgifter-morgonmote', 'Tre byggarbetare i hjälm står vid en stor checklista med bockar medan en av dem pekar på listan')}

<h2>Det här står på arbetsordern</h2>
<div class="article-table"><table>
<thead><tr><th>Det här står på ordern</th><th>Så anges det i ByggExp</th></tr></thead>
<tbody>
<tr><td><strong>Vad som ska göras</strong></td><td>Beskrivningen, som blir orderns namn.</td></tr>
<tr><td><strong>Kund</strong></td><td>Privatperson eller företag, med telefon och e-post. För företag även kontaktperson.</td></tr>
<tr><td><strong>Adress</strong></td><td>Kundens adress, som blir orderns adress.</td></tr>
<tr><td><strong>Orderreferens</strong></td><td>Fritext som sparas på ordern.</td></tr>
<tr><td><strong>Underlag</strong></td><td>Dokument och foton, sparade bland orderns dokument.</td></tr>
<tr><td><strong>När</strong></td><td>Från och till, med datum och klockslag.</td></tr>
<tr><td><strong>Vem som utför</strong></td><td>En eller flera personer, en bokning per person och dag.</td></tr>
<tr><td><strong>Status</strong></td><td>Planering, pågår, avslutat eller pausat.</td></tr>
<tr><td><strong>Uppföljning</strong></td><td>Uppgifter med deadline och påminnelser.</td></tr>
</tbody>
</table></div>

<h2>Arbetsorder i appen för hantverkare</h2>
<p>Den som bokas på en ny arbetsorder läggs in på ordern. I appen ligger ordern under Projekt, som ett kort med namn, status, startdatum och plats, märkt Service.</p>
<p>I ordern finns flikarna Uppgifter, Dokument och Foton. Under Dokument öppnar hantverkaren ritningen eller bilderna som kontoret bifogade. Hen kan också själv lägga till dokument och foton från jobbet.</p>
<p>Tiden stämplas på ordern, så timmarna hamnar på rätt jobb. Appen finns för iPhone och Android, se <a href="/sv/funktioner/tidrapportering-hantverkare">tidrapportering för hantverkare</a>.</p>
<p>Kalendern med klockslagen är en vy för den som planerar. Medarbetaren ser inte bokningen i appen, och kundens telefonnummer och orderreferensen visas i webben. Vill du att hantverkaren ser tiden i mobilen lägger du en uppgift till de bokade: tiden står som deadline, och appen påminner när den har passerat.</p>

${illu('hantverkare-servicebil', 'Hantverkare med verktygsbälte och hjälm tittar i mobilen bredvid sin servicebil med öppna bakdörrar')}

<h2>Uppgift med påminnelser till de bokade</h2>
<p>I bokningsfönstret finns knappen Uppgift med påminnelser. Skriv vad som ska göras, välj om uppgiften gäller alla i ordern eller en person och sätt en deadline. Den är förifylld med bokningens starttid.</p>
<p>Sedan väljer du hur uppgiften ska påminna: var 15:e minut, var 30:e minut, varje timme eller varje dag. Påminnelserna börjar när deadline har passerat och fortsätter tills uppgiften är markerad som klar. De kommer som en avisering i mobilen, och ett tryck öppnar uppgiften.</p>
<p>Hantverkaren ser uppgiften under Uppgifter i appen och markerar den som klar när jobbet är gjort. En uppgift är öppen, försenad eller klar, och filtren i appen visar läget med ett tryck.</p>

<h2>Återkommande jobb och besked till chefen</h2>
<p>Uppgifter skapar du också under Uppgifter, i webben eller i appen. Där kan en uppgift upprepas varje dag, varje vardag, varje vecka, varannan vecka eller varje månad. När den markeras som klar skapas nästa tillfälle automatiskt. Det passar filterbyten, ronderingar och andra avtalsjobb för elfirman, VVS-firman och servicesnickaren.</p>
<p>För jobb som inte får bli liggande finns fältet Meddela chefen efter. Där anger du efter hur många påminnelser projektledaren eller ägaren ska få besked. Mer om uppgifter finns i guiden <a href="/sv/blog/hantera-uppgifter-i-byggprojekt">uppgifter i byggprojekt</a>.</p>

${illu('projekthantering-uppgifter', 'Byggarbetare i hjälm bockar av en checklista på en stor skrivplatta, med en ringande klocka och en väggklocka bredvid')}

<h2>Exempel: en tisdag med servicejobb</h2>
<p>Så kan arbetsorder se ut i en firma med två montörer:</p>
<div class="article-table"><table>
<thead><tr><th>Arbetsorder</th><th>Kund och adress</th><th>Tid och personal</th><th>Uppgiftens status</th></tr></thead>
<tbody>
<tr><td><strong>Byta jordfelsbrytare</strong></td><td>Privatperson, villa i Täby</td><td>Tisdag 08.00–10.00, Tomas</td><td>Klar</td></tr>
<tr><td><strong>Montera laddbox</strong></td><td>Bostadsrättsförening, garaget</td><td>Tisdag 10.30–15.00, Tomas och Anna</td><td>Öppen</td></tr>
<tr><td><strong>Felsöka golvvärme i badrum</strong></td><td>Privatperson, lägenhet i Vasastan</td><td>Måndag 13.00–16.00, Anna</td><td>Försenad, påminnelse varje timme</td></tr>
</tbody>
</table></div>
<p>Kontoret ser direkt att golvvärmen blev kvar från i går, utan att ringa någon.</p>

<h2>Ändra eller ta bort en arbetsorder</h2>
<p>Klicka på bokningen i kalendern, så öppnas samma fönster med orderns alla personer och dagar. Där ändrar du tiden, lägger till eller tar bort personal och byter status. Bara det du ändrar uppdateras. En bokning flyttas genom att du ändrar tiden i fönstret, inte genom att dra den i kalendern.</p>
<p>Med Ta bort ordern försvinner ordern och alla dess bokningar. Blev det fel trycker du på Ångra i raden som visas direkt efteråt.</p>

<h2>Arbetsordersystem för bygg: överblick på kontoret</h2>
<p>I kalendern är varje bokning ett block med person, order och klockslag. I listan under Projekt syns ordern med ordertyp och kund. Öppnar du ordern ligger uppgifter, dokument, foton och arbetspass på samma ställe. Mer om det finns på sidan om <a href="/sv/funktioner/projekthantering">projekthantering för bygg</a>.</p>
<p>Alla uppgifter finns dessutom i en egen lista som du filtrerar på projekt och status. Under Mina uppgifter ser du det som är tilldelat dig själv, uppdelat på försenat, att göra och klart.</p>

<h2>Papper, sms eller digital arbetsorder?</h2>
<div class="article-table"><table>
<thead><tr><th>Fråga</th><th>Sms eller papper</th><th>Digital arbetsorder</th></tr></thead>
<tbody>
<tr><td><strong>Vem har jobbet?</strong></td><td>Den som svarade sist i tråden</td><td>Namngiven personal på bokningen</td></tr>
<tr><td><strong>När ska det göras?</strong></td><td>”I veckan”</td><td>Datum och klockslag i kalendern</td></tr>
<tr><td><strong>Var finns underlaget?</strong></td><td>I olika telefoner</td><td>Bland orderns dokument, även i appen</td></tr>
<tr><td><strong>Vad är försenat?</strong></td><td>Märks när kunden ringer</td><td>Uppgifter med status Försenad och påminnelser</td></tr>
<tr><td><strong>Vad blev gjort förra månaden?</strong></td><td>Svårt att få fram</td><td>Order, tid och foton per projekt</td></tr>
</tbody>
</table></div>
<p>Hur du inför rutinen steg för steg, och vilka misstag som är vanligast, går vi igenom i guiden <a href="/sv/blog/arbetsorder-app-bygg">så inför du digitala arbetsorder</a>.</p>

<h2>Checklista: välja arbetsorder-app</h2>
<ul>
<li>Står kund, adress och underlag på själva ordern?</li>
<li>Bokas jobbet på person, dag och klockslag?</li>
<li>Ser hantverkaren ordern och dokumenten i mobilen?</li>
<li>Hamnar tid och foton på samma order?</li>
<li>Påminner systemet av sig självt när en deadline har passerat?</li>
<li>Ser kontoret vad som är bokat och vad som är försenat utan att ringa runt?</li>
<li>Vad kostar det per användare när hela laget ska med?</li>
</ul>

<h2>Kom igång med digitala arbetsorder</h2>
<p>Börja med veckans servicejobb. Boka dem i kalendern med kund, adress och personal, och lägg en uppgift med påminnelse på de jobb som inte får glömmas. Efter en vecka ser ni vilka jobb som brukar bli försenade.</p>

${illu('hantverkare-anstallda', 'Hantverkare visar en anställd hur en kakelplatta ska sättas på en delvis kaklad vägg, med en hink fix, en tandspackel och en verktygslåda på golvet')}

<p>Kalendern, projekten och uppgifterna ingår i paketet Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms med 10 användare, tillsammans med <a href="/sv/funktioner/schemalaggning">schemaläggning</a> och tidrapportering. Du testar gratis i 14 dagar, utan bindningstid.</p>
`.trim(),
  faq: [
    {
      question: 'Vad är en digital arbetsorder?',
      answer:
        'Ett jobb som läggs ut i ett system i stället för via sms eller papper: vad som ska göras, hos vem, när och av vem. I ByggExp skapar du arbetsordern som en bokning i kalendern, och den sparas som en egen order.',
    },
    {
      question: 'Finns det en arbetsorder-app för hantverkare?',
      answer:
        'Ja. I ByggExp-appen för iPhone och Android ser den som bokas på en ny order den under Projekt, med adress och bifogade dokument, och stämplar sin tid på den.',
    },
    {
      question: 'Var skapar jag en arbetsorder?',
      answer:
        'I webben, under Planering. Dra över en ledig tid i kalendern, så öppnas fönstret Ny bokning med avsnittet Arbetsorder. Bara beskrivningen måste fyllas i.',
    },
    {
      question: 'Finns kund, adress och ordernummer på arbetsordern?',
      answer:
        'Ja. Du väljer en befintlig kund eller lägger in en ny med adress, och kundens adress blir orderns adress. Orderreferens är ett fritextfält där du skriver kundens referens eller ert eget nummer. ByggExp skapar inget löpnummer automatiskt.',
    },
    {
      question: 'Kan jag bifoga foton och ritningar till arbetsordern?',
      answer:
        'Ja. I bokningsfönstret bifogar du bilder, pdf, Word- och Excel-filer. De sparas bland orderns dokument, och hantverkaren öppnar dem under Dokument i appen.',
    },
    {
      question: 'Ser hantverkaren bokningen i en kalender i appen?',
      answer:
        'Nej. Kalendern är en vy för den som planerar. Medarbetaren ser ordern under Projekt i appen. Vill du ge klockslaget i mobilen lägger du en uppgift med påminnelser till de bokade – de hittar den under Uppgifter i appen.',
    },
    {
      question: 'Rapporteras tiden på arbetsordern?',
      answer:
        'Ja. Varje arbetsorder är en egen order, och tiden stämplas på den. Tid rapporteras inte per enskild uppgift.',
    },
    {
      question: 'Kan kunden signera arbetsordern?',
      answer:
        'Nej. Det finns ingen kundsignatur och ingen inloggning för kunden. Arbetsordern är ett internt verktyg för att boka och följa upp jobb.',
    },
    {
      question: 'Passar ByggExp som arbetsordersystem för el och VVS?',
      answer:
        'Ja, för firmor som vill boka servicejobb på person och tid och följa upp dem per order. Återkommande jobb läggs upp som uppgifter som upprepas varje dag, vecka eller månad.',
    },
    {
      question: 'Vad kostar arbetsorder i ByggExp?',
      answer: `Kalendern, projekten och uppgifterna ingår i paketet Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms, med 10 användare. Varje extra användare kostar ${EXTRA_USER_PRICE} kr. Du testar gratis i 14 dagar, utan bindningstid.`,
    },
  ],
  related: [
    { href: '/sv/blog/arbetsorder-app-bygg', label: 'Guide: inför digitala arbetsorder' },
    { href: '/sv/funktioner/schemalaggning', label: 'Schemaläggningssystem för bygg' },
    { href: '/sv/funktioner/projekthantering', label: 'Projekthantering för bygg' },
    { href: '/sv/blog/hantera-uppgifter-i-byggprojekt', label: 'Uppgifter i byggprojekt' },
    { href: '/sv/funktioner/tidrapportering-hantverkare', label: 'Tidrapportering för hantverkare' },
    { href: '/sv/blog/hantverkarapp', label: 'App för hantverkare' },
  ],
};

export const FUNKTION_PAGES: FunktionPage[] = [
  TIDSYSTEM,
  HANTVERKARE,
  BYGGDAGBOK,
  RESURSPLANERING,
  EGENKONTROLL,
  ARBETSORDER,
  ...FUNKTION_PAGES_A,
  ...FUNKTION_PAGES_B,
  ...FUNKTION_PAGES_C,
].map(
  (page) => ({ ...page, body: labelTables(page.body) }),
);

// Footer row and /sv/verktyg block (R21, R22) use the same names as the pages.
assertFunktionLinks(FUNKTION_LINKS_SV, FUNKTION_PAGES);

export const FUNKTION_PAGE_SLUGS = FUNKTION_PAGES.map((p) => p.slug);

export function getFunktionPage(slug: string): FunktionPage | undefined {
  return FUNKTION_PAGES.find((p) => p.slug === slug);
}
