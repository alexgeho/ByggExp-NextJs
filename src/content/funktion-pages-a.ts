// Funktioner pages, batch A: stämpelklocka, schemaläggning, projekthantering,
// projektplanering. Same template and claim rules as funktion-pages.ts (see the
// header there): every product claim is backed by
// docs/seo/product-facts-verified.md and PRODUCT-FEATURES.md. All four features
// are in Koll på jobbet (modules shifts, schedule, bemanning, leave, projects,
// tasks, dagbok, kma, tools). Planering (Gantt) shows one bar per project
// (start → slut) or staffing per person — no moment-level tidplan, no
// dependencies, no drag-and-drop; moments are tasks with start/due dates.
// Registered with one spread line in FUNKTION_PAGES / ILLU_HEIGHT.

import type { FunktionPage } from './funktion-pages';
import { PROJEKT_PRICE } from '../components/Pricing/Pricing';

const EXTRA_USER_PRICE = 69;
const ADDON_PRICE = 199;

// 3D illustrations in /public/landing/funktioner (<name>-1200.webp / -640.webp).
// Height at 1200 px width:
export const ILLU_HEIGHT_A: Record<string, number> = {
  'stampelklocka-incheckning': 1456,
  'stampelklocka-terminal': 1523,
  'stampelklocka-projektbyte': 1164,
  'stampelklocka-attest': 1146,
  'stampelklocka-kvall': 1083,
  'schemalaggning-klart': 1256,
  'schemalaggning-vecka': 1193,
  'schemalaggning-vila': 1173,
  'schemalaggning-lag': 890,
  'schemalaggning-sjuk': 938,
  'projekthantering-oversikt': 1077,
  'projekthantering-ritning': 1137,
  'projekthantering-uppgifter': 1372,
  'projekthantering-nytt-projekt': 1145,
  'projekthantering-overlamning': 993,
  'projektplanering-gantt': 1128,
  'projektplanering-moment': 1165,
  'projektplanering-startmote': 853,
  'projektplanering-app': 1255,
  'projektplanering-leverans': 1176,
};

const IMG_DIR = '/landing/funktioner';
const src = (name: string, w: 640 | 1200) => `${IMG_DIR}/${name}-${w}.webp`;

function illu(name: string, alt: string): string {
  return `<figure class="fn-illu"><img src="${src(name, 1200)}" srcset="${src(name, 640)} 640w, ${src(name, 1200)} 1200w" sizes="(max-width: 760px) 100vw, 560px" width="1200" height="${ILLU_HEIGHT_A[name]}" loading="lazy" decoding="async" alt="${alt}"></figure>`;
}

const ext = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const ARBETSTIDSLAGEN =
  'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/arbetstidslag-1982673_sfs-1982-673/';
const BYGGAVTALET =
  'https://www.byggnads.se/49ec78/siteassets/kollektivavtal/byggavtalet-2025-digital-utgava-1.pdf';
const SKV_PERSONALLIGGARE =
  'https://www.skatteverket.se/foretag/arbetsgivare/personalliggare/personalliggarebyggbranschen.4.7be5268414bea0646949797.html';
const BOVERKET_KONTROLLPLAN =
  'https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollplan/';
const AV_BAS_P =
  'https://www.av.se/produktion-industri-och-logistik/bygg/vem-ar-ansvarig-for-vad-i-ett-byggprojekt/bas-p/';

/* ------------------------------------------------------------------------- */
/* 1. Stämpelklocka                                                           */
/* ------------------------------------------------------------------------- */

const STAMPELKLOCKA: FunktionPage = {
  slug: 'stampelklocka',
  plan: 'projekt',
  priceIncluded: 'Stämpelklocka och tidrapport ingår',
  heroCheck: 'iPhone och Android',
  title: 'Stämpelklocka app för bygg – GPS-incheckning | ByggExp',
  description:
    'Stämpelklocka i mobilen: laget stämplar in med GPS på bygget, du ser vem som är på jobbet och attesterar timmarna. iPhone och Android. 14 dagar gratis.',
  name: 'Stämpelklocka för bygg',
  h1: 'Stämpelklocka för bygg.',
  h1Accent: 'I mobilen, med GPS.',
  lead: 'Laget stämplar in på bygget. Du ser vem som är på jobbet.',
  hero: {
    name: 'stampelklocka-incheckning',
    alt: 'Byggarbetare i hjälm och overall stämplar in med mobilen framför en byggnad med ställning, med en blå platsmarkör ovanför',
  },
  stepsHeading: ['Stämpla in', 'och se läget'],
  steps: [
    {
      title: 'Se vem som är på jobbet',
      text: 'Status, timmar i dag och projekt per medarbetare.',
      img: '/landing/funktioner/screen-personaloversikt.webp',
      alt: 'Personalöversikt i ByggExp: varje medarbetare med status På jobbet eller Inte på jobbet, timmar i dag och projekt',
    },
    {
      title: 'Stämpla in i appen',
      text: 'GPS-incheckning på projektet. Passet pausas när man lämnar området.',
      bullets: ['Timmar per projekt', 'Normal, övertid eller OB per pass', 'Manuell registrering som alternativ'],
      img: '/landing/features/1arbetspass-1200.webp',
      alt: 'Stämplade arbetspass i ByggExp: timmar per medarbetare och dag i webben, och stämpelklockan i mobilappen',
    },
    {
      title: 'Attestera timmarna',
      text: 'Planerat, GPS och manuellt – per medarbetare och dag.',
      img: '/landing/funktioner/screen-tidrapport-1200.webp',
      alt: 'Attest av stämplade timmar i ByggExp: timmar per medarbetare och dag för två veckor, med växling mellan planerat, GPS och manuellt',
    },
  ],
  body: `
<p>En stämpelklocka registrerar när arbetsdagen börjar och slutar. På en fabrik sitter den på väggen vid entrén. I bygg finns det ingen fast entré: laget börjar på ett radhusbygge, kör till en tillbyggnad efter lunch och avslutar dagen i en lägenhet som renoveras. Därför ligger stämpelklockan i ByggExp i mobilen. Medarbetaren stämplar in på projektet med GPS, du ser vem som är på jobbet just nu och timmarna hamnar på rätt projekt utan att någon behöver skriva av en lapp. Här går vi igenom hur det fungerar, vad positionen används till och hur du kommer igång.</p>

<h2>Så fungerar stämpelklockan i ByggExp</h2>
<ol>
<li><strong>Projektet får en plats.</strong> När du lägger upp ett projekt i webbadmin anger du var arbetsplatsen ligger. Det är mot den platsen som incheckningen kontrolleras.</li>
<li><strong>Medarbetaren stämplar in.</strong> I appen för iPhone eller Android väljer medarbetaren projektet och checkar in. GPS-positionen bekräftar att incheckningen sker på arbetsplatsen.</li>
<li><strong>Passet följer arbetsplatsen.</strong> Lämnar medarbetaren projektområdet pausas passet automatiskt. Ärendet till bygghandeln eller lunchen hemma räknas alltså inte som tid på projektet.</li>
<li><strong>Byte av arbetsplats.</strong> Ska laget vidare till nästa projekt checkar man ut på det första och in på det andra. Förmiddag och eftermiddag hamnar på var sitt projekt.</li>
<li><strong>Passet får rätt timtyp.</strong> Normal tid, övertid eller OB väljs per pass. Restid anges i kilometer och minuter, och traktamente som helt, halvt eller inget.</li>
<li><strong>Arbetsledaren attesterar.</strong> I webben ser admin eller projektadmin passen per medarbetare och dag och godkänner dem.</li>
</ol>
<p>Den som hellre vill fylla i timmarna själv kan registrera tiden manuellt per projekt och dag. Båda sätten hamnar i samma tidrapport.</p>

${illu('stampelklocka-terminal', 'Byggarbetare i hjälm går förbi en gammal stämpelklocka på väggen och stämplar in i mobilen i stället')}

<h2>Stämpelklocka på väggen eller i mobilen</h2>
<p>Många byggföretag har prövat både papperslappar och en terminal i boden. Skillnaden syns först när laget arbetar på flera ställen samma vecka:</p>
<div class="article-table"><table>
<thead><tr><th>Behov</th><th>Väggterminal</th><th>Stämpelklocka i appen</th></tr></thead>
<tbody>
<tr><td><strong>Var man stämplar</strong></td><td>Där terminalen sitter</td><td>På varje arbetsplats</td></tr>
<tr><td><strong>Koppling till projekt</strong></td><td>Registreras separat</td><td>Projektet väljs vid incheckningen</td></tr>
<tr><td><strong>Två arbetsplatser samma dag</strong></td><td>Kräver anteckningar vid sidan om</td><td>Ut på det ena, in på det andra</td></tr>
<tr><td><strong>Hårdvara</strong></td><td>En terminal per arbetsplats</td><td>Medarbetarens telefon</td></tr>
<tr><td><strong>Underlag till lön</strong></td><td>Sammanställs i efterhand</td><td>Attesterade pass, klara att exportera</td></tr>
</tbody>
</table></div>
<p>En terminal kan fungera för en verkstad med en fast adress. För ett byggföretag med rörliga lag är telefonen den enda stämpelklocka som alltid finns på plats.</p>

<h2>GPS på incheckningen</h2>
<p>Positionen gör två saker. Vid incheckningen bekräftar den att medarbetaren är på arbetsplatsen. Under passet används den för att se om medarbetaren är kvar inom projektområdet, så att passet kan pausas när man lämnar det. Det betyder färre diskussioner om timmar i efterhand och en tidrapport som går att lita på vid attesten.</p>
<p>Berätta för laget innan ni börjar vad positionen används till och vem som ser den. Det är god sed, och enligt dataskyddsreglerna ska medarbetarna få information om hur deras personuppgifter behandlas. Den som inte vill dela sin position kan registrera timmarna manuellt.</p>

${illu('stampelklocka-projektbyte', 'Byggarbetare i hjälm kliver ur en servicebil vid ett hus med ställning och tittar i mobilen, med en blå platsmarkör ovanför')}

<h2>Se vem som är på jobbet just nu</h2>
<p>En stämpelklocka ger inte bara timmar till lönen. Den ger också en bild av läget i dag. På översikten i ByggExp ser du hur många som är på jobbet, hur många projekt som är aktiva och hur många timmar som har arbetats hittills under dagen. Personalöversikten visar varje medarbetare med status, timmar i dag och projekt, och du kan filtrera på ett enskilt projekt.</p>
<p>Status per medarbetare finns både i webben och i appen. Arbetsledaren som står på ett bygge ser alltså lika snabbt som kontoret om laget på nästa arbetsplats har kommit igång.</p>
<p>Det är användbart när en leverans kommer tidigare än väntat och du behöver veta vem som är närmast, eller när en beställare ringer och frågar om det är folk på plats. Svaret finns i telefonen eller på datorn, utan att du behöver ringa runt.</p>

<h2>Stämpelklockan och arbetstidslagen</h2>
<p>Enligt ${ext(ARBETSTIDSLAGEN, 'arbetstidslagen')} ska arbetsgivaren föra anteckningar om jourtid, övertid och mertid, och medarbetarna har rätt att ta del av dem. Lagen sätter också ett tak för allmän övertid på 200 timmar per kalenderår. När varje pass har en timtyp finns anteckningarna redan i tidrapporten, och du ser hur mycket övertid varje medarbetare har gjort.</p>
<p>För företag med kollektivavtal styr ${ext(BYGGAVTALET, 'Byggavtalet')} vad som räknas som övertid och vilka tillägg som gäller. I ByggExp väljer medarbetaren timtyp per pass, och arbetsledaren kontrollerar vid attesten att den stämmer med det som var beordrat. Vill du räkna på en enskild vecka finns <a href="/sv/verktyg/ob-overtid-kalkylator">OB- och övertidskalkylatorn</a>.</p>
<p>Anteckningar om arbetstid är en sak, personalliggaren på byggarbetsplatsen en annan. Den har egna regler hos ${ext(SKV_PERSONALLIGGARE, 'Skatteverket')} om vilka uppgifter som ska registreras och när.</p>

${illu('stampelklocka-attest', 'Platschef i hjälm vid skrivbordet godkänner arbetspass på en stor skärm med blå staplar och bockar')}

<h2>Tre situationer från vardagen</h2>
<h3>Två arbetsplatser på en dag</h3>
<p>En snickare börjar med att sätta dörrar i ett flerbostadshus och åker sedan till en villa för att montera en trappa. Incheckningen på det andra projektet görs när snickaren kommer fram, och restiden registreras på passet. I tidrapporten ligger timmarna på rätt projekt, och projektledaren för villan ser exakt hur lång tid trappan tog.</p>
<h3>Någon glömmer att stämpla ut</h3>
<p>Arbetsdagen är slut och en medarbetare kör hem utan att checka ut. När telefonen lämnar projektområdet pausas passet, så kvällen hemma blir inte arbetstid. Vid attesten ser arbetsledaren passet och kan stämma av det med medarbetaren innan timmarna går vidare till lön.</p>
<h3>Ny medarbetare första dagen</h3>
<p>En ny betongarbetare börjar på måndag. Hen laddar ner appen, loggar in och ser de projekt hen är kopplad till. Första incheckningen görs på arbetsplatsen samma morgon, utan utbildning och utan nyckel till någon terminal.</p>

<h2>En vecka med stämpelklockan</h2>
<p>Så här kan en vanlig vecka se ut för ett lag på åtta personer och tre projekt:</p>
<div class="article-table"><table>
<thead><tr><th>Dag</th><th>Vad händer</th><th>Vem</th></tr></thead>
<tbody>
<tr><td><strong>Måndag 06.45</strong></td><td>Laget stämplar in på sina projekt. På översikten syns vilka som är på jobbet.</td><td>Medarbetarna, arbetsledaren</td></tr>
<tr><td><strong>Tisdag</strong></td><td>Två snickare byter projekt efter lunch. De checkar ut och in, och restiden läggs på passet.</td><td>Snickarna</td></tr>
<tr><td><strong>Onsdag kväll</strong></td><td>Beordrad övertid vid en gjutning. Kvällspasset får timtypen övertid.</td><td>Betonglaget</td></tr>
<tr><td><strong>Torsdag</strong></td><td>En medarbetare som inte vill dela sin position registrerar timmarna manuellt.</td><td>Medarbetaren</td></tr>
<tr><td><strong>Fredag</strong></td><td>Arbetsledaren går igenom veckans pass och attesterar dem.</td><td>Arbetsledaren</td></tr>
</tbody>
</table></div>
<p>Arbetet för kontoret begränsas till fredagens attest. Ingen behöver jaga lappar på måndag morgon, och timmarna ligger redan på rätt projekt när löneperioden stängs.</p>

<h2>Vem gör vad med stämpelklockan</h2>
<ul>
<li><strong>Medarbetaren</strong> stämplar in och ut i appen, väljer timtyp och lägger till restid och traktamente.</li>
<li><strong>Arbetsledaren eller projektadmin</strong> ser vem som är på jobbet, stämmer av avvikelser och attesterar passen.</li>
<li><strong>Den som sköter lönen</strong> exporterar underlaget eller gör lönekörningen när perioden är attesterad.</li>
</ul>

<h2>Från stämpling till lön</h2>
<p>När perioden är attesterad exporterar du tidrapporten som PDF eller Excel och löneunderlaget och AGI-underlaget som CSV. Kör ni lönen i ByggExp? Lönekörningen startar du från tidrapporten i Full koll. Med tillägget Integrationer (${ADDON_PRICE} kr/mån) skapar du en SIE4-fil för bokföringen. Hela flödet från stämpling till lön och bokföring beskriver vi på sidan om <a href="/sv/funktioner/tidrapporteringssystem-bygg">tidrapporteringssystem för bygg</a>.</p>

${illu('stampelklocka-kvall', 'Byggarbetare i hjälm går från bygget med en verktygslåda och tittar i mobilen, en månskära på himlen')}

<h2>Kom igång på en vecka</h2>
<ol>
<li><strong>Lägg upp pågående projekt med plats.</strong> Vi flyttar över projekt och personal från ert gamla system utan kostnad.</li>
<li><strong>Bjud in laget.</strong> Var och en laddar ner appen till iPhone eller Android och loggar in.</li>
<li><strong>Kör en vecka parallellt.</strong> Låt laget stämpla i appen medan den gamla rutinen finns kvar och jämför timmarna på fredagen.</li>
<li><strong>Attestera och exportera.</strong> När siffrorna stämmer gör du nästa löneunderlag direkt från ByggExp.</li>
</ol>
<p>Stämpelklockan ingår i paketet Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms med 10 användare, och du testar gratis i 14 dagar. Läs mer om appen för <a href="/sv/blog/stampelklocka-app-iphone">iPhone</a> och <a href="/sv/blog/stampelklocka-app-android">Android</a>, eller om <a href="/sv/blog/stampelklocka-app-gps-bygg">stämpelklocka med GPS</a> och <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">närvaro på bygget</a>.</p>
`.trim(),
  faq: [
    {
      question: 'Vad kostar en stämpelklocka-app för bygg?',
      answer: `I ByggExp ingår stämpelklockan i Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms, inklusive 10 användare. Varje extra användare kostar ${EXTRA_USER_PRICE} kr/mån. Det finns ingen hårdvara att köpa, och de första 14 dagarna är gratis.`,
    },
    {
      question: 'Finns det en gratis stämpelklocka?',
      answer:
        'Du kan testa ByggExp gratis i 14 dagar med alla funktioner. Är ni bara ett par personer kan vår gratis tidrapportmall räcka en tid, men den kopplar inte timmarna till plats och projekt.',
    },
    {
      question: 'Fungerar stämpelklockan på iPhone och Android?',
      answer:
        'Ja. ByggExp-appen finns för både iPhone och Android med samma funktioner, så hela laget stämplar in på samma sätt oavsett telefon.',
    },
    {
      question: 'Måste medarbetarna dela sin position?',
      answer:
        'Nej. GPS-incheckning är ett alternativ. Den som inte vill dela sin position registrerar timmarna manuellt per projekt och dag, och de hamnar i samma tidrapport.',
    },
    {
      question: 'Fungerar stämpelklockan utan mobiltäckning?',
      answer:
        'ByggExp har inget offlineläge, så appen behöver uppkoppling för att stämpla in. Saknas täckning på en arbetsplats kan timmarna registreras manuellt i efterhand.',
    },
    {
      question: 'Är stämpelklockan en elektronisk personalliggare?',
      answer:
        'Nej. Personalliggaren i byggbranschen har egna krav från Skatteverket, bland annat på vilka uppgifter som ska registreras och hur de ska kunna visas vid en kontroll. Läs Skatteverkets regler innan ni startar ett projekt som kräver personalliggare.',
    },
    {
      question: 'Kan man stämpla in på flera projekt samma dag?',
      answer:
        'Ja. Medarbetaren checkar ut på det första projektet och in på nästa. Timmarna hamnar på respektive projekt, och restiden kan läggas till på passet.',
    },
    {
      question: 'Räknar stämpelklockan ut OB och övertid automatiskt?',
      answer:
        'Nej. Medarbetaren väljer timtyp per pass – normal, övertid eller OB – och arbetsledaren kontrollerar den vid attesten. Satserna enligt Byggavtalet räknas inte fram automatiskt.',
    },
  ],
  related: [
    { href: '/sv/blog/stampelklocka-app-gps-bygg', label: 'Stämpelklocka med GPS' },
    { href: '/sv/blog/stampelklocka-app-iphone', label: 'Stämpelklocka för iPhone' },
    { href: '/sv/blog/stampelklocka-app-android', label: 'Stämpelklocka för Android' },
    { href: '/sv/blog/narvaro-och-incheckning-pa-bygget', label: 'Närvaro och incheckning' },
    { href: '/sv/verktyg/tidrapport-mall', label: 'Gratis tidrapportmall' },
    { href: '/sv/funktioner/tidrapporteringssystem-bygg', label: 'Tidrapporteringssystem för bygg' },
    { href: '/sv/tidrapportering-app', label: 'Tidrapporteringsappen' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 2. Schemaläggning                                                          */
/* ------------------------------------------------------------------------- */

const SCHEMALAGGNING: FunktionPage = {
  slug: 'schemalaggning',
  plan: 'projekt',
  priceIncluded: 'Schemaläggning och bemanning ingår',
  heroCheck: 'Frånvaro i schemat',
  title: 'Schemaläggningssystem för bygg och personal | ByggExp',
  description:
    'Schemaläggning för bygg: schema per medarbetare och dag, frånvaro i schemat, varning vid överbokning och uppföljning mot stämplad tid. 14 dagar gratis.',
  name: 'Schemaläggningssystem för bygg',
  h1: 'Schemaläggningssystem för bygg.',
  h1Accent: 'Schemat klart till måndag.',
  lead: 'Schemaläggning av personal: vem som jobbar var, dag för dag.',
  hero: {
    name: 'schemalaggning-klart',
    alt: 'Nöjd planerare lutar sig tillbaka i kontorsstolen bredvid en stor kalender med en bock',
  },
  stepsHeading: ['Lägg schemat', 'och följ upp'],
  steps: [
    {
      title: 'Planerade timmar per person',
      text: 'Schemat i timmar – dag för dag, med summa per period.',
      img: '/landing/funktioner/screen-planerat-1200.webp',
      alt: 'Timmar enligt planerat i ByggExp: schemalagda timmar per medarbetare och dag för två veckor, med totalt planerat per person',
    },
    {
      title: 'Schema dag för dag',
      text: 'Klicka i rutan och välj projekt.',
      bullets: ['Godkänd frånvaro syns i schemat', 'Varning över 8 timmar per dag'],
      img: '/landing/funktioner/screen-bemanning-1200.webp',
      alt: 'Personalschema i ByggExp: veckans rutnät med medarbetare, dagar och projekt med 8 timmar per dag',
    },
    {
      title: 'Uppgifter med tid',
      text: 'Start, deadline och påminnelser till laget.',
      img: '/landing/features/2uppgift-1200.webp',
      alt: 'Schemalagd uppgift i ByggExp: startdatum, förfallodatum och påminnelser i webben, och påminnelsen i medarbetarens mobil',
    },
  ],
  body: `
<p>Schemaläggning i bygg handlar om två frågor: vem arbetar vilka dagar, och på vilket bygge? I en butik är arbetsplatsen densamma varje dag. I ett byggföretag flyttar laget mellan projekt, en gjutning styr starttiden och en sen leverans kan ändra hela veckan. Ett schemaläggningssystem för bygg behöver därför visa personal, dagar och projekt i samma vy, ta hänsyn till frånvaro och gå att följa upp mot de timmar som faktiskt arbetades. Så fungerar det i ByggExp.</p>

<h2>Så lägger du schemat i ByggExp</h2>
<ol>
<li><strong>Registrera frånvaro först.</strong> Semester, VAB och sjukdom läggs i Frånvaro. När ledigheten är godkänd syns den i schemat, så att du planerar runt den från början.</li>
<li><strong>Fördela veckan i Bemanning.</strong> Medarbetarna är rader och dagarna kolumner. Du klickar i en ruta och väljer projekt. Blir någon bokad på mer än åtta timmar samma dag markeras dagen som överbokad.</li>
<li><strong>Titta längre fram i Planering.</strong> Gantt-schemat visar personalen över två veckor, en månad eller ett eget datumintervall. Där ser du luckor och krockar innan de blir ett problem.</li>
<li><strong>Ge laget uppgifterna.</strong> I Uppgifter anger du vad som ska göras, med startdatum och starttid, förfallodatum och ansvarig person eller hela projektteamet.</li>
<li><strong>Följ upp.</strong> Laget stämplar in i appen. I tidrapporten ser du timmarna per medarbetare och dag som planerat, GPS eller manuellt, och jämför plan med utfall.</li>
</ol>
<p>Ändringar i schemat sparas i en ändringslogg, så det går att se vem som flyttade vem och när.</p>

${illu('schemalaggning-vecka', 'Planerare vid datorn med ett veckoschema i rutnät på skärmen och en klocka på väggen')}

<h2>Regler som styr byggschemat</h2>
<p>Ett schema är inte bara logistik. ${ext(ARBETSTIDSLAGEN, 'Arbetstidslagen')} sätter ramarna, och kollektivavtal som ${ext(BYGGAVTALET, 'Byggavtalet')} kan ersätta delar av den med egna regler. Det här är de punkter som oftast påverkar ett byggschema:</p>
<ul>
<li><strong>Ordinarie arbetstid.</strong> Högst 40 timmar i veckan, eller 40 timmar i genomsnitt under högst fyra veckor.</li>
<li><strong>Dygnsvila.</strong> Minst elva timmars sammanhängande ledighet under varje period om 24 timmar.</li>
<li><strong>Veckovila.</strong> Minst 36 timmars sammanhängande ledighet under varje period om sju dagar.</li>
<li><strong>Raster.</strong> Ingen ska arbeta mer än fem timmar i följd utan rast.</li>
<li><strong>Besked om ändringar.</strong> Ändras den ordinarie arbetstidens förläggning ska medarbetarna få besked minst två veckor i förväg, om inte verksamheten eller oförutsedda händelser kräver annat.</li>
<li><strong>Övertid.</strong> Allmän övertid får vara högst 200 timmar per kalenderår.</li>
</ul>
<p>I ByggExp väljs timtyp per pass – normal, övertid eller OB – så att du ser hur mycket övertid varje medarbetare har gjort. Varningen vid överbokning hjälper dig att inte planera fler än åtta timmar för samma person samma dag. Mer om reglerna finns i guiden om <a href="/sv/blog/arbetstidslagen-bygg">arbetstidslagen i bygg</a>.</p>

${illu('schemalaggning-vila', 'Byggarbetare i hjälm sitter avslappnad på en bänk vid bygget i soluppgången och dricker ur en mugg')}

<h2>Tre vanliga schemaproblem – och hur du löser dem</h2>
<h3>Samma person på två byggen</h3>
<p>Två projektledare lovar samma plattsättare till var sitt projekt på tisdag. När båda bokningarna läggs i Bemanning blir dagen överbokad och markeras. Konflikten syns när schemat läggs, inte när plattsättaren ringer från bilen och undrar vart hen ska åka.</p>
<h3>Semestern som ingen kom ihåg</h3>
<p>En snickare har fått tre veckors semester godkänd i april. I juli är hen ändå inplanerad på ett takbyte. Eftersom ledigheten är registrerad i Frånvaro syns den i schemat, och du planerar någon annan på taket redan när du lägger veckan.</p>
<h3>Kvällsgjutningen och morgondagen</h3>
<p>Betongen kommer sent och laget arbetar till tio på kvällen. Dygnsvilan betyder att samma personer inte ska börja klockan sex nästa morgon. Flytta deras start i schemat, eller låt ett annat lag ta morgonen, och märk kvällstimmarna som övertid på passet.</p>

${illu('schemalaggning-sjuk', 'Arbetsledare pratar i telefon framför en tavla med porträtt av byggarbetare där en plats är tom')}

<h2>Schemat i laget</h2>
<p>Ett schema gör nytta först när laget följer det. I ByggExp-appen för iPhone och Android ser medarbetarna sina uppgifter och projektens tidplan i en Gantt-vy. De får påminnelser om uppgifterna med det intervall du väljer, och efter ett antal påminnelser kan chefen meddelas automatiskt. När dagen börjar stämplar de in på projektet, och timmarna hamnar där de hör hemma.</p>
<p>Ett tips är att lägga veckans viktigaste händelser som uppgifter med starttid: leveranser, besiktningar och gjutningar. Då vet laget när något händer, och påminnelsen kommer i telefonen i stället för att någon måste ringa runt kvällen innan.</p>
<p>Sjukanmälningar och ändringar hanterar du i webben: flytta personen i Bemanning, kontrollera att ingen blir överbokad och ge den som hoppar in en uppgift med starttid. Medarbetaren får uppgiften i appen.</p>

${illu('schemalaggning-lag', 'Tre leende byggarbetare i hjälm, en med borrmaskin, en med en stor mobil med blå staplar och en med vattenpass')}

<h2>Schemaläggning, bemanning och resursplanering</h2>
<p>Orden används ofta om varandra. Schemaläggningen svarar på när och var varje person arbetar, dag för dag och vecka för vecka. Resursplaneringen tittar längre fram och svarar på om ni har tillräckligt med folk för projekten de kommande månaderna. Hur ni planerar kapacitet över säsongen beskriver vi på sidan om <a href="/sv/funktioner/resursplanering">resursplanering för bygg</a>, och hur tidplanen för själva projekten läggs i <a href="/sv/funktioner/projektplanering">projektplanering med Gantt-schema</a>.</p>

<h2>Plan mot utfall – veckans viktigaste kontroll</h2>
<p>Ett schema säger vad som var tänkt. Stämplingen visar vad som faktiskt hände. När båda finns i samma system kan du jämföra dem varje fredag, och det är där du lär dig att lägga bättre scheman. I tidrapporten växlar du mellan planerat, GPS och manuellt per medarbetare och dag. Tre saker är värda att titta på:</p>
<ul>
<li><strong>Dagar där utfallet avviker mycket från planen.</strong> Ofta en sen leverans eller ett moment som tog längre tid än beräknat – bra att veta inför nästa liknande jobb.</li>
<li><strong>Övertid som inte var planerad.</strong> Timtypen på passet visar vem som har arbetat över och hur ofta det sker.</li>
<li><strong>Personer som byter projekt mitt på dagen.</strong> Om det händer ofta kan schemat behöva lägga laget mer sammanhållet.</li>
</ul>

<h2>Exempel: plan mot utfall för en vecka</h2>
<p>Ett lag på fyra personer är schemalagt på en villa och ett badrum. Så här kan veckan se ut när planerade timmar jämförs med stämplade:</p>
<div class="article-table"><table>
<thead><tr><th>Medarbetare</th><th>Planerat</th><th>Stämplat</th></tr></thead>
<tbody>
<tr><td><strong>Snickare 1, villan</strong></td><td>40 h</td><td>40 h</td></tr>
<tr><td><strong>Snickare 2, villan</strong></td><td>40 h</td><td>44 h, varav 4 h övertid onsdag</td></tr>
<tr><td><strong>Plattsättare, badrummet</strong></td><td>32 h</td><td>24 h, materialet kom en dag sent</td></tr>
<tr><td><strong>Lärling, villan och badrummet</strong></td><td>40 h</td><td>38 h, gick tidigare en dag</td></tr>
</tbody>
</table></div>
<p>Av veckan lär du dig två saker. Badrummet behöver en dags marginal för leveranser, och villan behöver en person till under onsdagarna, när gjutningen styr dagen. Nästa schema blir bättre, och övertiden syns innan den blir en vana.</p>

<h2>Så inför du schemaläggningen i företaget</h2>
<ol>
<li><strong>Bestäm vem som äger schemat.</strong> En person lägger veckan, projektledarna lämnar sina behov senast en bestämd dag.</li>
<li><strong>Lägg in frånvaron.</strong> Börja med semester och ledighet som redan är beviljad, så att schemat utgår från rätt antal personer.</li>
<li><strong>Planera två veckor i taget.</strong> Det räcker för att se krockar utan att planen behöver göras om varje dag.</li>
<li><strong>Låt laget stämpla in från första dagen.</strong> Först när timmarna kommer in kan du följa upp schemat.</li>
</ol>

<h2>Gratis schemaläggningsprogram eller system?</h2>
<p>Ett schema i Excel kostar ingenting och räcker för ett lag på några personer med ett projekt i taget. Börja gärna med vår <a href="/sv/verktyg/schema-mall">schemamall</a>. Behovet av ett system kommer när flera personer planerar i samma fil, när frånvaron ligger i en annan lista och när ni vill jämföra schemat med de timmar som faktiskt stämplades. Då sparar ett schemaläggningssystem tid varje vecka.</p>

<h2>Checklista: det här ska ett schemaläggningssystem för bygg klara</h2>
<ul>
<li>Schema per medarbetare och dag, med projekt i varje ruta.</li>
<li>Godkänd frånvaro direkt i schemat.</li>
<li>Varning när någon blir bokad på för många timmar samma dag.</li>
<li>Översikt över veckorna framåt, per person och per projekt.</li>
<li>Uppgifter med starttid, deadline och påminnelser till laget.</li>
<li>Stämpling i mobilen och uppföljning av plan mot utfall.</li>
<li>Ändringslogg över vem som ändrade vad.</li>
</ul>
<p>Allt i listan ingår i Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms med 10 användare, och du testar gratis i 14 dagar. Läs också guiderna om <a href="/sv/blog/schemalaggningssystem-bygg">att välja schemaläggningssystem</a>, <a href="/sv/blog/schemalaggning-bygg">schemaläggning för byggföretag</a> och <a href="/sv/blog/personalplanering-bygg">bemanningsplanering</a>.</p>
`.trim(),
  faq: [
    {
      question: 'Vad är ett schemaläggningssystem?',
      answer:
        'Ett program där du lägger arbetsschemat för personalen: vem som arbetar vilka dagar och var. För bygg behöver det också visa projekt, frånvaro och de timmar som faktiskt arbetades.',
    },
    {
      question: 'Vad kostar ett schemaläggningssystem för bygg?',
      answer: `I ByggExp ingår schemaläggning, bemanning och frånvaro i Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms, inklusive 10 användare och tidrapportering. Extra användare kostar ${EXTRA_USER_PRICE} kr/mån. Du testar gratis i 14 dagar.`,
    },
    {
      question: 'Finns det ett gratis schemaläggningsprogram?',
      answer:
        'Du kan testa ByggExp gratis i 14 dagar med alla funktioner. Vill du hellre börja i Excel är vår schemamall gratis och räcker för ett mindre lag.',
    },
    {
      question: 'Ser medarbetarna schemat i appen?',
      answer:
        'I appen ser medarbetarna sina uppgifter och projektens tidplan i en Gantt-vy. Bemanningsrutnätet används i webben av den som planerar.',
    },
    {
      question: 'Kan systemet lägga schemat automatiskt?',
      answer:
        'Nej. Du väljer själv vem som ska vara på vilket projekt. Systemet visar frånvaro och varnar när någon blir överbokad, men fördelningen gör du.',
    },
    {
      question: 'Kan jag schemalägga maskiner och underentreprenörer?',
      answer:
        'Nej, schemat gäller er egen personal. Verktyg och utrustning registreras i Verktyg med status, innehavare och projekt.',
    },
    {
      question: 'Hur långt i förväg ska schemat vara klart?',
      answer:
        'Enligt arbetstidslagen ska besked om ändrad förläggning av den ordinarie arbetstiden lämnas minst två veckor i förväg, om inte oförutsedda händelser gör det omöjligt. Kollektivavtal kan ha egna regler.',
    },
    {
      question: 'Vad är skillnaden mellan schemaläggning och resursplanering?',
      answer:
        'Schemaläggningen är den dagliga och veckovisa fördelningen av personal. Resursplaneringen ser månader framåt och svarar på om ni har folk nog för projekten.',
    },
  ],
  related: [
    { href: '/sv/blog/schemalaggningssystem-bygg', label: 'Guide: schemaläggningssystem' },
    { href: '/sv/blog/schemalaggning-bygg', label: 'Schemaläggning för byggföretag' },
    { href: '/sv/blog/personalplanering-bygg', label: 'Bemanningsplanering' },
    { href: '/sv/verktyg/schema-mall', label: 'Gratis schemamall' },
    { href: '/sv/blog/franvaro-i-byggforetag', label: 'Frånvaro i byggföretag' },
    { href: '/sv/funktioner/resursplanering', label: 'Resursplanering för bygg' },
    { href: '/sv/funktioner/stampelklocka', label: 'Stämpelklocka för bygg' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 3. Projekthantering                                                        */
/* ------------------------------------------------------------------------- */

const PROJEKTHANTERING: FunktionPage = {
  slug: 'projekthantering',
  plan: 'projekt',
  priceIncluded: 'Projekt, uppgifter och dagbok ingår',
  heroCheck: 'iPhone och Android',
  title: 'Projekthantering bygg – alla projekt i ett system | ByggExp',
  description:
    'Projekthantering för bygg: projekt, uppgifter med påminnelser, dagbok, egenkontroller, foton och timmar på ett ställe, i webben och appen. 14 dagar gratis.',
  name: 'Projekthantering för bygg',
  h1: 'Projekthantering för bygg.',
  h1Accent: 'Hela projektet på ett ställe.',
  lead: 'Från första uppgiften till överlämningen.',
  hero: {
    name: 'projekthantering-oversikt',
    alt: 'Projektledare står vid en stor översiktspanel med kort och diagram framför ett hus under uppbyggnad med ställning',
  },
  stepsHeading: ['Allt om projektet', 'på ett ställe'],
  steps: [
    {
      title: 'Allt om projektet',
      text: 'Översikt, uppgifter och arbetspass i projektkortet.',
      bullets: ['Budget och kostnader i Koll på pengarna och Full koll'],
      img: '/landing/features/project.webp',
      alt: 'Projektkort i ByggExp: budget och resurser, betalningsplan, uppgifter och deadlines och arbetspass för ett projekt',
    },
    {
      title: 'Uppgifter till laget',
      text: 'Ansvarig, deadline och automatiska påminnelser.',
      bullets: ['Hela projektteamet eller en person', 'Återkommande uppgifter'],
      img: '/landing/features/2uppgift-1200.webp',
      alt: 'Uppgift i ett byggprojekt i ByggExp: projekt, ansvarig, startdatum, förfallodatum och påminnelser, och påminnelsen i mobilen',
    },
    {
      title: 'Foton per projekt',
      text: 'Bilder från appen hamnar i projektets fotoflik.',
      img: '/landing/features/4foto-1200.webp',
      alt: 'Projektets fotoflik i ByggExp med bilder från bygget i webben, och kameran i mobilappen',
    },
  ],
  body: `
<p>Projekthantering i bygg betyder att hålla ihop allt som händer i ett projekt: vem som gör vad, när det ska vara klart, vad som har dokumenterats och hur många timmar som har gått åt. I många byggföretag ligger det i dag i ett kalkylark, en gruppchatt, en pärm i bilen och projektledarens huvud. Det fungerar tills projekten blir fler än ett par. I ByggExp har varje projekt ett eget kort där uppgifter, foton, dokument och timmar samlas, och dagbok och egenkontroller kopplas till samma projekt – i webben för kontoret och i appen för laget.</p>

<h2>Det här samlas i projektet</h2>
<p>När du lägger upp ett projekt anger du projektledare, plats, kund, start- och slutdatum. Projektet har en status – Planering, Pågår, Pausat eller Avslutat – så att listan visar vad som är aktivt. Till projektet hör:</p>
<div class="article-table"><table>
<thead><tr><th>Del</th><th>Innehåll</th></tr></thead>
<tbody>
<tr><td><strong>Allmänt</strong></td><td>Projektöversikt, team, uppgifter och deadlines</td></tr>
<tr><td><strong>Tid och personal</strong></td><td>Timmar per medarbetare från arbetspassen</td></tr>
<tr><td><strong>Filer</strong></td><td>Dokument, ritningar och foton</td></tr>
<tr><td><strong>Dagbok (kopplad till projektet)</strong></td><td>Anteckningar per dag med väder, bemanning, utfört arbete och avvikelser</td></tr>
<tr><td><strong>Egenkontroller i KMA (kopplade till projektet)</strong></td><td>Kontroller med punkter och status, från egna mallar</td></tr>
<tr><td><strong>Ekonomi (Koll på pengarna och Full koll)</strong></td><td>Budget, betalningsplan, kostnader och marginal</td></tr>
</tbody>
</table></div>

${illu('projekthantering-ritning', 'Projektledare och byggarbetare i hjälm tittar tillsammans på en blå ritning på ett arbetsbord på bygget')}

<h2>Uppgifter som inte glöms bort</h2>
<p>Det mesta som går fel i ett byggprojekt är inte svårt. Det är något som skulle ha gjorts men glömdes bort: en beställning, en egenkontroll före igenbyggnad, ett besked till beställaren. I ByggExp blir sådant uppgifter med en ansvarig och ett datum:</p>
<ul>
<li><strong>Ansvarig.</strong> Tilldela en person eller hela projektteamet.</li>
<li><strong>Tid.</strong> Startdatum och förfallodatum, med klockslag om det behövs.</li>
<li><strong>Prioritet.</strong> Låg, normal eller hög.</li>
<li><strong>Påminnelser.</strong> Välj intervall, till exempel var 15:e minut. Påminnelserna fortsätter efter deadline tills uppgiften är markerad som klar.</li>
<li><strong>Eskalering.</strong> Efter det antal påminnelser du anger meddelas chefen automatiskt.</li>
<li><strong>Återkommande uppgifter.</strong> En uppgift som upprepas skapar nästa förekomst när den första är klar, till exempel en veckovis städrunda eller kontroll av ställningen.</li>
</ul>
<p>Medarbetaren ser uppgiften i appen och får påminnelserna i telefonen. Projektledaren ser vad som är öppet utan att ringa runt.</p>

${illu('projekthantering-uppgifter', 'Byggarbetare i hjälm bockar av en checklista på en stor skrivplatta, med en ringande klocka och en väggklocka bredvid')}

<h2>Dokumentationen under bygget</h2>
<p>Ett projekt som är väl dokumenterat är lättare att leverera, fakturera och försvara om något blir ifrågasatt. I ByggExp dokumenterar du på fyra sätt:</p>
<ul>
<li><strong>Dagbok.</strong> I webben skriver du en anteckning per projekt och dag med väder, temperatur, antal personer, utfört arbete, avvikelser, material och foton. Läs mer om den <a href="/sv/funktioner/byggdagbok">digitala byggdagboken</a>.</li>
<li><strong>Egenkontroller.</strong> I KMA skapar du egenkontroller från egna mallar, med kategori, kontrollpunkter och status. En gratis <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmall</a> finns som utgångspunkt.</li>
<li><strong>Foton.</strong> Bilder som tas i appen kopplas till arbetspasset och hamnar i projektets fotoflik med datum och person.</li>
<li><strong>Dokument och ritningar.</strong> Filerna ligger i projektet, så att alla arbetar mot samma version.</li>
</ul>
<p>Egenkontrollerna är också ditt underlag när ni ska visa att punkterna i projektets ${ext(BOVERKET_KONTROLLPLAN, 'kontrollplan')} har följts.</p>

<h2>Översikten för den som leder flera projekt</h2>
<p>En arbetschef eller ägare behöver sällan gå in i varje projekt. På översikten i ByggExp ser du hur många projekt som är aktiva, hur många som är på jobbet, hur många uppgifter som är öppna och hur många timmar som har arbetats i dag. Kommande deadlines listas, och personalöversikten visar vilka som är på vilket projekt just nu.</p>
<p>Verktyg och utrustning hanteras i samma system. Varje verktyg får en QR-kod och en status – tillgänglig, används, på reparation eller trasig – och du ser vem som har det och på vilket projekt.</p>

${illu('projekthantering-nytt-projekt', 'Kvinna vid skrivbordet lägger till ett nytt projekt på datorskärmen')}

<h2>Från kalkylark och gruppchatt till ett system</h2>
<p>Flytten behöver inte göras på en gång. Så här brukar det gå bäst:</p>
<ul>
<li><strong>Vecka 1.</strong> Lägg upp de pågående projekten med projektledare, kund och datum. Data från ert gamla system flyttar vi över utan kostnad.</li>
<li><strong>Vecka 2.</strong> Låt laget stämpla in och ta foton i appen. Sluta skicka bilder i gruppchatten – de hamnar i projektet ändå.</li>
<li><strong>Vecka 3.</strong> Lägg uppgifter med påminnelser i stället för att skriva dem på whiteboarden i boden.</li>
<li><strong>Vecka 4.</strong> Börja föra dagboken och göra egenkontrollerna i systemet.</li>
</ul>
<p>Efter en månad finns allt som rör ett projekt på ett ställe, och kalkylarket behövs bara för det ni själva väljer att ha kvar där.</p>

<h2>Projektet i mobilen</h2>
<p>Laget behöver inte webben. I appen för iPhone och Android finns det som används ute på bygget: incheckning på projektet, uppgifterna med påminnelser, projektens tidplan och kameran. Ett foto av en färdig håltagning eller en leverans hamnar direkt i projektets fotoflik, kopplat till arbetspasset, datumet och personen som tog det. Projektledaren på kontoret ser bilden i projektet och behöver inte be om den i en gruppchatt.</p>
<p>För den som leder projektet räcker telefonen långt också: se vem som är på jobbet och gå igenom uppgifterna inför morgondagen.</p>

<h2>Vem gör vad i systemet</h2>
<div class="article-table"><table>
<thead><tr><th>Roll</th><th>I webben</th><th>I appen</th></tr></thead>
<tbody>
<tr><td><strong>Administratör</strong></td><td>Lägger upp projekt och personal, ser alla projekt och översikten</td><td>Ser vem som är på jobbet</td></tr>
<tr><td><strong>Projektledare</strong></td><td>Team, uppgifter, dagbok, egenkontroller och attest av timmarna i sina projekt</td><td>Följer uppgifter och tidplan ute på bygget</td></tr>
<tr><td><strong>Medarbetare</strong></td><td>–</td><td>Stämplar in, ser uppgifter och projektens tidplan, tar foton som kopplas till passet</td></tr>
</tbody>
</table></div>
<p>Rollerna styr vad var och en ser. Medarbetaren får ett enkelt verktyg för dagen, och projektledaren och administratören får helheten.</p>
<p>Eftersom alla arbetar i samma projekt behöver ingen skicka vidare information via sms eller e-post.</p>

<h2>Projektets gång i fem faser</h2>
<ol>
<li><strong>Start.</strong> Lägg upp projektet med status Planering, koppla teamet och skapa de första uppgifterna. En <a href="/sv/blog/startmote-byggprojekt-checklista">checklista för startmötet</a> hjälper dig att inte missa något.</li>
<li><strong>Produktion.</strong> Laget stämplar in och tar foton, och dagboken förs varje dag. Ändra status till Pågår.</li>
<li><strong>Kvalitet.</strong> Egenkontrollerna görs i takt med att momenten blir klara, till exempel före igenbyggnad.</li>
<li><strong>Ändringar.</strong> Timmar för extraarbeten märks med rätt ÄTA på arbetspasset. Dokumentera beställningen med en <a href="/sv/verktyg/ata-mall">ÄTA-mall</a>. Med Koll på pengarna eller Full koll skapar du en förifylld faktura från en godkänd ÄTA.</li>
<li><strong>Avslut.</strong> När projektet är klart ligger dagbok, egenkontroller, foton och timmar samlade inför slutbesiktning och överlämning. Sätt status Avslutat.</li>
</ol>

${illu('projekthantering-overlamning', 'Projektledare i hjälm lämnar över nycklarna till ett glatt par framför ett nybyggt vitt hus')}

<h2>Tre situationer från vardagen</h2>
<h3>Beställaren frågar hur det går</h3>
<p>En bostadsrättsförening vill veta om stambytet håller tidplanen. Projektledaren öppnar projektet och ser vilka uppgifter som är klara, vad dagboken säger om den senaste veckan och hur många timmar som har lagts. Svaret går att ge samma dag, med foton från bygget som underlag.</p>
<h3>Arbetsledaren blir sjuk</h3>
<p>Den som brukar hålla i ett projekt är borta en vecka. Uppgifterna, dokumenten och dagboken ligger i projektet, inte i någons telefon. Den som tar över ser vad som är öppet och vem som är ansvarig, och påminnelserna fortsätter att gå ut som vanligt.</p>
<h3>Kontroller som återkommer varje vecka</h3>
<p>Ställningen ska kontrolleras regelbundet och arbetsplatsen ska städas varje fredag. Lägg dem som återkommande uppgifter. När veckans kontroll är markerad som klar skapas nästa automatiskt, och ingen behöver komma ihåg att lägga in den igen.</p>

<h2>Checklista innan du väljer projekthanteringssystem</h2>
<ul>
<li>Alla projekt i en lista med status, projektledare och kund.</li>
<li>Uppgifter med ansvarig, deadline, påminnelser och eskalering.</li>
<li>Dagbok, egenkontroller, foton och dokument per projekt.</li>
<li>Tidrapportering i mobilen, kopplad till projektet.</li>
<li>Planering av projekt och personal i samma system.</li>
<li>En app för iPhone och Android som laget använder utan utbildning.</li>
</ul>
<p>Behöver ni också budget, lönsamhet, offerter och fakturor finns de i Koll på pengarna och Full koll. Hur du följer upp marginalen under projektets gång beskriver vi i guiden om <a href="/sv/blog/projektuppfoljning-bygg">projektuppföljning</a>.</p>

<h2>Kom igång</h2>
<p>Lägg upp de projekt som pågår nu och börja med uppgifter och stämpling. Dagbok och egenkontroller kan du ta in när rutinen sitter. Data från ert gamla system flyttar vi över utan kostnad. Projekthantering ingår i Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms med 10 användare, och du testar gratis i 14 dagar. Läs också om <a href="/sv/blog/projekthantering-byggforetag">projekthantering för byggföretag</a>, <a href="/sv/blog/projektledning-byggforetag">projektledning</a> och <a href="/sv/blog/app-for-byggprojekt">appen för byggprojekt</a>.</p>
`.trim(),
  faq: [
    {
      question: 'Vad är ett projekthanteringssystem för bygg?',
      answer:
        'Ett system där alla projekt samlas med uppgifter, dokumentation, personal och timmar. För bygg behöver det också fungera i mobilen på arbetsplatsen, inte bara på kontoret.',
    },
    {
      question: 'Vad kostar projekthantering i ByggExp?',
      answer: `Projekthantering ingår i Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms, inklusive 10 användare. Extra användare kostar ${EXTRA_USER_PRICE} kr/mån. Budget, lönsamhet och fakturor ingår i Koll på pengarna och Full koll. Du testar gratis i 14 dagar.`,
    },
    {
      question: 'Vad är skillnaden mellan projekthantering och projektledning?',
      answer:
        'Projektledning är arbetet att leda projektet: planera, fatta beslut och ta ansvar för resultatet. Projekthantering är det praktiska stödet för det arbetet – var uppgifter, dokument och timmar finns och hur de följs upp.',
    },
    {
      question: 'Ingår budget och lönsamhet per projekt?',
      answer:
        'Inte i Koll på jobbet. Budget, betalningsplan, kostnader och marginal per projekt ingår i Koll på pengarna och Full koll.',
    },
    {
      question: 'Vad kan laget göra i appen?',
      answer:
        'Stämpla in och ut med GPS, registrera timmar manuellt, se och bocka av uppgifter, se projektens tidplan och ta foton som kopplas till projektet. Dagboken förs i webben.',
    },
    {
      question: 'Kan underentreprenörer använda systemet?',
      answer:
        'Det finns ingen särskild roll för underentreprenörer. Systemet är byggt för ert eget team: administratör, projektledare och medarbetare.',
    },
    {
      question: 'Fungerar appen utan mobiltäckning?',
      answer:
        'Nej, ByggExp har inget offlineläge. Saknas täckning på arbetsplatsen kan timmar registreras manuellt i efterhand.',
    },
    {
      question: 'Kan vi flytta över projekt från vårt gamla system?',
      answer:
        'Ja. Vi hjälper er att flytta över data från det gamla systemet utan kostnad.',
    },
  ],
  related: [
    { href: '/sv/blog/projekthantering-byggforetag', label: 'Guide: projekthantering för byggföretag' },
    { href: '/sv/blog/projektledning-byggforetag', label: 'Projektledning i byggföretag' },
    { href: '/sv/blog/app-for-byggprojekt', label: 'App för byggprojekt' },
    { href: '/sv/blog/hantera-uppgifter-i-byggprojekt', label: 'Uppgifter i byggprojekt' },
    { href: '/sv/blog/projektuppfoljning-bygg', label: 'Projektuppföljning' },
    { href: '/sv/funktioner/byggdagbok', label: 'Digital byggdagbok' },
    { href: '/sv/funktioner/projektplanering', label: 'Projektplanering med Gantt-schema' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 4. Projektplanering (Gantt / tidplan)                                      */
/* ------------------------------------------------------------------------- */

const PROJEKTPLANERING: FunktionPage = {
  slug: 'projektplanering',
  plan: 'projekt',
  priceIncluded: 'Planering och uppgifter ingår',
  heroCheck: 'Tidplanen i appen',
  title: 'Gantt-schema för bygg – tidplan för alla projekt | ByggExp',
  description:
    'Gantt-schema för bygg: alla projekt med start och slut i en tidslinje, moment som uppgifter med datum och tidplanen i appen för laget. 14 dagar gratis.',
  name: 'Projektplanering med Gantt-schema',
  h1: 'Projektplanering med Gantt-schema.',
  h1Accent: 'Alla projekt i en tidslinje.',
  lead: 'Start, slut och moment – för varje bygge.',
  hero: {
    name: 'projektplanering-gantt',
    alt: 'Projektledare pekar på en stor tavla med ett Gantt-schema där blå staplar ligger på var sin rad, med en kontorsstol bakom',
  },
  stepsHeading: ['Tidplan', 'från start till slut'],
  steps: [
    {
      title: 'Projekten vecka för vecka',
      text: 'Vilket projekt laget arbetar på, dag för dag.',
      img: '/landing/funktioner/screen-veckoplan.webp',
      alt: 'Veckoplan i ByggExp: medarbetare och dagar i vecka 43 med projekten Lgh-renovering Vasastan och Villa Solsidan',
    },
    {
      title: 'Alla projekt i en tidslinje',
      text: 'Gantt-schema per projekt eller per personal.',
      bullets: ['2 veckor, månad eller eget intervall', 'Status per projekt'],
      img: '/landing/features/5planering-1200.webp',
      alt: 'Tidplan i ByggExp: Gantt-schema med staplar över månaden i webben och tidslinjen i mobilappen',
    },
    {
      title: 'Moment som uppgifter',
      text: 'Startdatum, förfallodatum och ansvarig.',
      img: '/landing/features/2uppgift-1200.webp',
      alt: 'Moment i tidplanen som uppgift i ByggExp: startdatum, förfallodatum och påminnelser, och påminnelsen i mobilen',
    },
  ],
  body: `
<p>Ett Gantt-schema är det vanligaste sättet att visa en tidplan i bygg: varje moment är en stapel på en tidslinje, och du ser direkt vad som pågår samtidigt och vad som måste vara klart innan nästa steg kan börja. För ett byggföretag med flera projekt finns det två nivåer att planera. Den ena är tidplanen inom ett projekt. Den andra är alla projekt tillsammans – när de startar, när de ska vara klara och om de krockar. ByggExp fungerar som ett tidplaneringsprogram för bygg: du planerar projekten i ett Gantt-schema, bryter ner dem i moment med datum och ger laget tidplanen i appen. I webben är varje projekt en stapel; momenten läggs som uppgifter och syns i appens tidslinje.</p>

<h2>Vad är ett Gantt-schema?</h2>
<p>Schemat har tiden på den vågräta axeln och aktiviteterna på den lodräta. Varje aktivitet blir en stapel från startdatum till slutdatum. Läser du schemat uppifrån och ned ser du projektets ordning, och läser du det från vänster till höger ser du vad som händer varje vecka. Vill du veta mer om hur ett Gantt-schema byggs upp, med beroenden och kritisk linje, finns guiden om <a href="/sv/blog/gantt-schema-mall-bygg">Gantt-schema för bygg</a>.</p>

<h2>Tidplanen i ByggExp – tre nivåer</h2>
<h3>1. Projekten</h3>
<p>Varje projekt har ett startdatum, ett slutdatum och en status: Planering, Pågår, Pausat eller Avslutat. I Planering väljer du vyn <strong>per projekt</strong>, och varje projekt blir en stapel på tidslinjen. Du växlar mellan 2 veckor, månad och ett eget datumintervall, så att du kan se allt från nästa vecka till hela säsongen.</p>
<h3>2. Momenten</h3>
<p>Inom projektet lägger du momenten som uppgifter: etablering, grund, stomme, tak och så vidare. Varje uppgift har startdatum och förfallodatum, med klockslag om det behövs, och en ansvarig person eller hela projektteamet. Påminnelser skickas med det intervall du väljer, så att ett moment inte passerar sitt datum utan att någon märker det.</p>
<h3>3. Bemanningen</h3>
<p>Till sist fördelar du personalen. I vyn <strong>per personal</strong> och i Bemanning ser du vem som är på vilket projekt, dag för dag. Hur du planerar kapaciteten över alla projekt beskriver vi på sidan om <a href="/sv/funktioner/resursplanering">resursplanering för bygg</a>.</p>

${illu('projektplanering-moment', 'Byggarbetare i hjälm lyfter en skiva på plats i en vägg, med en blå tidsstapel ovanför')}

<h2>Så bygger du tidplanen för ett nytt projekt</h2>
<ol>
<li><strong>Lägg upp projektet.</strong> Ange start- och slutdatum och sätt status Planering. Projektet syns direkt i Gantt-schemat bredvid de andra.</li>
<li><strong>Bryt ner det i moment.</strong> Utgå från kalkylen och lista momenten i den ordning de ska utföras. Skapa en uppgift per moment med datum och ansvarig.</li>
<li><strong>Lägg in ledtiderna.</strong> Material med lång leveranstid, besiktningar och myndighetsbeslut styr när momenten kan börja. Sätt datumen efter dem, inte efter hur fort laget kan arbeta.</li>
<li><strong>Kontrollera ordningen.</strong> Se till att varje moment har förfallodatum innan nästa startar, till exempel att egenkontrollen före igenbyggnad är klar innan gipsningen börjar.</li>
<li><strong>Bemanna.</strong> Lägg personalen på projektet i Bemanning och kontrollera att ingen blir överbokad.</li>
<li><strong>Starta.</strong> Ändra status till Pågår när arbetet börjar och stäm av tidplanen varje vecka mot uppgifterna och de rapporterade timmarna.</li>
</ol>

${illu('projektplanering-startmote', 'Startmöte i byggboden: projektledare, arbetsledare i hjälm och beställare vid ett bord med en lång tidplan med blå staplar')}

<h2>Exempel: tidplan för en tillbyggnad</h2>
<p>Så här kan momenten för en tillbyggnad på 25 kvadratmeter läggas upp som uppgifter i projektet. Veckorna är ett exempel – din kalkyl och dina ledtider styr.</p>
<div class="article-table"><table>
<thead><tr><th>Moment</th><th>Vecka</th><th>Ansvarig</th></tr></thead>
<tbody>
<tr><td><strong>Etablering och utsättning</strong></td><td>1</td><td>Arbetsledare</td></tr>
<tr><td><strong>Grund och platta</strong></td><td>1–2</td><td>Betonglaget</td></tr>
<tr><td><strong>Stomme och takstolar</strong></td><td>3–4</td><td>Snickarna</td></tr>
<tr><td><strong>Tak, fönster och dörrar</strong></td><td>5</td><td>Snickarna</td></tr>
<tr><td><strong>El och VVS</strong></td><td>6</td><td>Installatörerna</td></tr>
<tr><td><strong>Egenkontroll före igenbyggnad</strong></td><td>6</td><td>Arbetsledare</td></tr>
<tr><td><strong>Isolering, gips och ytskikt</strong></td><td>7–8</td><td>Snickarna och målarna</td></tr>
<tr><td><strong>Slutbesiktning</strong></td><td>9</td><td>Projektledare</td></tr>
</tbody>
</table></div>
<p>Varje rad blir en uppgift med start- och förfallodatum. Projektets start- och slutdatum täcker hela perioden, så att tillbyggnaden syns som en stapel i Gantt-schemat bredvid de andra projekten.</p>

<h2>Ledtider som styr tidplanen</h2>
<p>De flesta förseningar i bygg beror inte på att laget arbetar för långsamt. De beror på att något annat inte var klart. Ta med det här i tidplanen från början:</p>
<ul>
<li><strong>Startbesked.</strong> Åtgärder som kräver bygglov eller anmälan får inte påbörjas förrän byggnadsnämnden har gett startbesked. I samband med det fastställs projektets ${ext(BOVERKET_KONTROLLPLAN, 'kontrollplan')}.</li>
<li><strong>Arbetsmiljöplan.</strong> En ${ext(AV_BAS_P, 'arbetsmiljöplan')} ska finnas innan byggarbetsplatsen etableras. Den tas fram av byggarbetsmiljösamordnaren för planering och projektering, BAS-P.</li>
<li><strong>Beställningar.</strong> Fönster, takstolar och specialbeställda material har leveranstider som behöver räknas bakåt från det datum de ska monteras.</li>
<li><strong>Väder och årstid.</strong> Gjutning i kyla och utvändig målning behöver marginal under vinterhalvåret.</li>
<li><strong>Andra yrkesgrupper.</strong> Snickarna kan inte stänga väggarna innan el och VVS har dragit sina installationer.</li>
</ul>

${illu('projektplanering-leverans', 'Lastbil med kran lastar av takstolar under en klocka, en arbetsledare i hjälm tittar i mobilen och gör tummen upp')}

<h2>Tidplanen för hela laget</h2>
<p>En tidplan som bara finns på projektledarens dator hjälper inte laget. I ByggExp-appen för iPhone och Android ser medarbetarna en Gantt-vy med projektens tidplan och sina uppgifter. De kan filtrera på projekt och status. När ett moment närmar sig sitt datum kommer påminnelsen i telefonen.</p>
<p>Det gör startmötet och veckomötet kortare. Alla har sett samma plan innan, och mötet kan handla om det som har ändrats. Använd gärna vår mall för <a href="/sv/verktyg/byggmotesprotokoll-mall">byggmötesprotokoll</a> för att dokumentera besluten.</p>

${illu('projektplanering-app', 'Arbetsledare i hjälm framför en husstomme håller en surfplatta med blå staplar på en tidslinje')}

<h2>Vem äger tidplanen</h2>
<p>En tidplan som alla får ändra i blir snabbt otydlig. Fördela ansvaret så här:</p>
<ul>
<li><strong>Projektledaren</strong> äger projektets start- och slutdatum och bestämmer när ett moment får flyttas. Det är också projektledaren som pratar med beställaren när tidplanen ändras.</li>
<li><strong>Arbetsledaren</strong> bryter ner veckans moment i uppgifter med ansvarig och datum och säger till i tid när något inte hinns med.</li>
<li><strong>Planeraren eller arbetschefen</strong> ser alla projekt i Gantt-schemat och ser till att två projekt inte behöver samma lag samma vecka.</li>
<li><strong>Laget</strong> ser tidplanen och sina uppgifter i appen och bockar av uppgifterna när de är klara.</li>
</ul>
<p>När ansvaret är tydligt blir veckomötet en avstämning av avvikelser i stället för en genomgång av hela planen.</p>

<h2>Veckoavstämning på tio minuter</h2>
<p>En tidplan håller bara om den stäms av. Gör det på samma sätt varje vecka:</p>
<ol>
<li><strong>Öppna Planering per projekt.</strong> Kontrollera att varje pågående projekt fortfarande har rätt slutdatum.</li>
<li><strong>Gå igenom veckans uppgifter.</strong> Vilka moment skulle ha varit klara, och är de det?</li>
<li><strong>Jämför med timmarna.</strong> Under Tid och personal ser du hur många timmar projektet har tagit hittills, jämfört med kalkylen.</li>
<li><strong>Justera direkt.</strong> Flytta datum på uppgifter som påverkas och ändra bemanningen för nästa vecka.</li>
</ol>

<h2>När tidplanen ändras</h2>
<h3>Ett moment blir försenat</h3>
<p>Takstolarna kommer en vecka senare än beställt. Flytta datumen på takuppgiften och de moment som följer, och flytta laget till ett annat projekt i Bemanning under tiden. Om förseningen ger rätt till mer tid gentemot beställaren behöver den anmälas – det finns en mall för <a href="/sv/verktyg/hindersanmalan-mall">hindersanmälan</a>.</p>
<h3>Projektet pausas</h3>
<p>Beställaren behöver vänta på ett beslut. Sätt projektet i status Pausat, så syns det tydligt i listan och i tidslinjen, och ingen planerar folk dit av misstag.</p>
<h3>Ett extraarbete tillkommer</h3>
<p>Beställaren vill ha ett extra fönster. Skapa en ny uppgift med datum för momentet, och dokumentera beställningen med en <a href="/sv/verktyg/ata-mall">ÄTA-mall</a>. Timmarna märks med rätt ÄTA på arbetspasset.</p>

<h2>Gantt-mall eller tidplaneringsprogram för bygg?</h2>
<p>För en detaljerad tidplan inom ett enskilt projekt, med beroenden mellan momenten och kritisk linje, fungerar vår gratis <a href="/sv/verktyg/gantt-schema-mall">Gantt-schema-mall</a> bra. ByggExp passar när flera projekt pågår samtidigt och laget ska se planen i mobilen. Många byggföretag använder båda: den detaljerade tidplanen i mallen och projektens datum, moment och bemanning i ByggExp, där laget ser dem varje dag.</p>
<p>Planering av projekt och personal ingår i Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms med 10 användare, och du testar gratis i 14 dagar. Läs också guiden om <a href="/sv/blog/projektplanering-bygg">projektplanering för byggprojekt</a>.</p>
`.trim(),
  faq: [
    {
      question: 'Vad är ett Gantt-schema?',
      answer:
        'En tidplan där varje aktivitet visas som en stapel från startdatum till slutdatum på en tidslinje. Du ser vad som pågår samtidigt och i vilken ordning momenten kommer.',
    },
    {
      question: 'Hur gör man en tidplan för ett byggprojekt?',
      answer:
        'Lista momenten i ordning, uppskatta tiden för varje moment utifrån kalkylen, lägg in ledtider för material, besiktningar och startbesked och sätt datum. Bemanna sedan planen och stäm av den varje vecka.',
    },
    {
      question: 'Finns det ett gratis Gantt-schema för bygg?',
      answer:
        'Ja, vår Gantt-schema-mall är gratis. Vill du se alla projekt i en tidslinje och ge laget planen i mobilen kan du testa ByggExp gratis i 14 dagar.',
    },
    {
      question: 'Kan jag lägga beroenden mellan momenten i ByggExp?',
      answer:
        'Nej. Momenten läggs som uppgifter med start- och förfallodatum. Beroenden och kritisk linje för ett enskilt projekt passar bättre i en detaljerad Gantt-mall.',
    },
    {
      question: 'Kan jag dra och släppa staplarna i Gantt-schemat?',
      answer:
        'Nej. I webben ändrar du datumen i projektet eller uppgiften, och schemat uppdateras.',
    },
    {
      question: 'Ser laget tidplanen i mobilen?',
      answer:
        'Ja. I appen ser medarbetarna en Gantt-vy med projektens tidplan och sina uppgifter, och de kan filtrera på projekt och status.',
    },
    {
      question: 'Vad är skillnaden mellan projektplanering och resursplanering?',
      answer:
        'Projektplaneringen bestämmer när projekten och momenten ska utföras. Resursplaneringen fördelar personalen så att planen går att genomföra.',
    },
    {
      question: 'Vad kostar projektplanering i ByggExp?',
      answer: `Planering av projekt och personal ingår i Koll på jobbet för ${PROJEKT_PRICE} kr/mån exkl. moms, med 10 användare. Extra användare kostar ${EXTRA_USER_PRICE} kr/mån. Du testar gratis i 14 dagar.`,
    },
  ],
  related: [
    { href: '/sv/verktyg/gantt-schema-mall', label: 'Gratis Gantt-schema-mall' },
    { href: '/sv/blog/projektplanering-bygg', label: 'Guide: projektplanering' },
    { href: '/sv/blog/gantt-schema-mall-bygg', label: 'Gantt-schema för bygg' },
    { href: '/sv/blog/startmote-byggprojekt-checklista', label: 'Checklista för startmötet' },
    { href: '/sv/funktioner/resursplanering', label: 'Resursplanering för bygg' },
    { href: '/sv/funktioner/projekthantering', label: 'Projekthantering för bygg' },
    { href: '/sv/funktioner/schemalaggning', label: 'Schemaläggningssystem för bygg' },
  ],
};

export const FUNKTION_PAGES_A: FunktionPage[] = [STAMPELKLOCKA, SCHEMALAGGNING, PROJEKTHANTERING, PROJEKTPLANERING];
