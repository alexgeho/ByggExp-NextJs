import type { BlogPost } from '../../types/blog';
import { SITE_URL } from './site-url';

const BEMANNING_HTML = `
<p>Rätt person, på rätt plats, vid rätt tid – låter enkelt, men bemanning är ofta det som gör eller stjälper marginalen i ett byggföretag. En sjukanmälan på fel dag eller en dubbelbokad snickare kan välta hela veckans plan. Här går vi igenom hur du planerar bemanningen så att projekten flyter.</p>

<h2>Vad är bemanning och personalplanering i bygg?</h2>
<p>Bemanning handlar om att fördela rätt personal och kompetens över projekt och dagar. Personalplanering är det löpande pusslet: vem jobbar var, vilka pass gäller, vem är ledig eller sjuk, och räcker kompetensen för det som ska göras. Målet är hög beläggning utan att någon blir överbelastad – och utan luckor som kostar tid.</p>

<h2>Varför bemanning är svårt</h2>
<ul>
<li><strong>Flera projekt samtidigt.</strong> Personal ska delas mellan arbetsplatser utan krockar.</li>
<li><strong>Frånvaro dyker upp.</strong> Sjukdom, VAB och semester rubbar planen med kort varsel.</li>
<li><strong>Rätt kompetens.</strong> Vissa moment kräver behörighet – fel person på plats stoppar jobbet.</li>
<li><strong>Överblick saknas.</strong> Planeras det i huvudet eller i spridda kalkylark blir det lätt fel.</li>
</ul>

<h2>Så planerar du bemanningen steg för steg</h2>
<ol>
<li>Lägg in alla projekt och deras behov – antal personer och kompetens per period.</li>
<li>Fördela personalen på pass och projekt med en tydlig, delad översikt.</li>
<li>Markera frånvaro (sjuk, VAB, semester) så att luckor syns direkt.</li>
<li>Justera löpande när något ändras – och låt laget se sitt schema.</li>
<li>Följ upp beläggning mot plan för att hitta över- och underbeläggning.</li>
</ol>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Planera i huvudet.</strong> Utan en delad plan uppstår dubbelbokningar och luckor.</li>
<li><strong>Glömma kompetenskravet.</strong> Rätt antal personer räcker inte om behörigheten saknas.</li>
<li><strong>Ingen frånvaroöversikt.</strong> Frånvaro som inte syns i planen ställer till det på plats.</li>
<li><strong>Sena besked till laget.</strong> Oklara scheman skapar spilltid och irritation.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp planerar du bemanningen visuellt: fördela personal på projekt och pass, se frånvaro och beläggning i en delad vy, och låt medarbetarna se sitt schema i mobilen. Eftersom bemanning, närvaro, tid och ekonomi ligger i samma app hänger planen ihop med verkligheten – planerade timmar följer med hela vägen till <a href="/sv/blog/loneunderlag-for-byggforetag">löneunderlaget</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan bemanning och schemaläggning?</h3>
<p>Bemanning handlar om att fördela rätt personal och kompetens över projekt; schemaläggning är att lägga de konkreta passen. I praktiken hänger de ihop.</p>
<h3>Hur hanterar jag frånvaro i planeringen?</h3>
<p>Markera sjuk, VAB och semester i planen så att luckor syns direkt och kan täckas i tid. Se även <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">närvaro och incheckning</a>.</p>
<h3>Behöver jag ett verktyg för bemanning?</h3>
<p>Vid ett projekt går det i huvudet – vid flera blir en delad, digital plan snabbt nödvändig för att undvika krockar och spilltid.</p>

<h2>Kom igång</h2>
<p>Sluta pussla i huvudet. Planera bemanningen i en delad vy, se frånvaro direkt och koppla planen till tid och lön. <a href="/sv/blog/dagsplanering-och-planeringsmoten">Läs om dagsplanering</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/dagsplanering-och-planeringsmoten">Dagsplanering och planeringsmöten</a> · <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">Närvaro och incheckning</a> · <a href="/sv/blog/app-for-tidrapportering-bygg">App för tidrapportering</a></p>
`.trim();

const BEMANNING: BlogPost = {
  _id: 'code-bemanning',
  title: 'Bemanning och personalplanering i bygg – så gör du rätt',
  slug: 'bemanning-och-personalplanering',
  locale: 'sv',
  excerpt:
    'Rätt person på rätt plats vid rätt tid. Så planerar du bemanning över flera projekt, hanterar frånvaro och kompetens – steg för steg, med vanliga misstag att undvika.',
  tag: 'Bemanning',
  coverImageUrl: '/landing/features/5planering.webp',
  contentHtml: BEMANNING_HTML,
  seoTitle: 'Bemanning & personalplanering i bygg – guide | ByggExp',
  seoDescription:
    'Så planerar du bemanning och personal i byggföretag: fördela rätt kompetens över flera projekt, hantera frånvaro och undvik dubbelbokningar. Steg för steg.',
  seoImageUrl: `${SITE_URL}/landing/features/5planering.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T14:00:00.000Z',
  createdAt: '2026-08-12T14:00:00.000Z',
  updatedAt: '2026-08-12T14:00:00.000Z',
};

const FRANVARO_HTML = `
<p>Frånvaro är oundvikligt – sjukdom, vård av barn och semester kommer alltid. Det som skiljer är hur snabbt du ser det och hur rätt det landar i planeringen och lönen. Här går vi igenom de vanligaste frånvarotyperna, vad som gäller kring sjuklön och karensavdrag, och hur du håller ordning på frånvaron i ett byggföretag.</p>

<h2>Vanliga typer av frånvaro</h2>
<ul>
<li><strong>Sjukfrånvaro</strong> – den anställde är sjuk och kan inte arbeta.</li>
<li><strong>VAB</strong> – vård av sjukt barn (tillfällig föräldrapenning).</li>
<li><strong>Semester</strong> – betald ledighet enligt semesterlagen.</li>
<li><strong>Föräldraledighet</strong> och annan lagstadgad ledighet.</li>
</ul>

<h2>Sjuklön och karensavdrag – så funkar det</h2>
<ul>
<li>Arbetsgivaren betalar <strong>sjuklön under de första 14 dagarna</strong> (sjuklöneperioden). Sjuklönen är 80 % av lönen.</li>
<li>Ett <strong>karensavdrag</strong> görs – 20 % av en genomsnittlig veckolön – en gång per sjukperiod.</li>
<li>Insjuknar den anställde igen inom <strong>fem kalenderdagar</strong> räknas det som samma sjukperiod, så inget nytt karensavdrag görs.</li>
<li>Genom det allmänna högriskskyddet kan karensavdrag göras högst tio gånger under en tolvmånadersperiod.</li>
<li><strong>Från dag 15</strong> anmäler arbetsgivaren sjukfallet till Försäkringskassan, som betalar sjukpenning.</li>
</ul>

<h2>VAB och semester</h2>
<p>Vid <strong>VAB</strong> betalar Försäkringskassan tillfällig föräldrapenning efter anmälan från den anställde – det är alltså inte arbetsgivaren som betalar. <strong>Semester</strong> regleras av semesterlagen; det viktiga för dig som arbetsgivare är att planera uttaget så att det inte krockar med bemanningen i projekten.</p>

<h2>Varför frånvaro måste synas direkt</h2>
<p>På ett bygge får frånvaro omedelbara konsekvenser: en lucka i <a href="/sv/blog/bemanning-och-personalplanering">bemanningen</a> måste täckas, och timmarna ska bli rätt i <a href="/sv/blog/loneunderlag-for-byggforetag">löneunderlaget</a>. Om frånvaron rapporteras sent eller på lappar blir både planen och lönen fel.</p>

<h2>Så håller du ordning på frånvaron i ByggExp</h2>
<ol>
<li>Medarbetaren anmäler frånvaro direkt i appen – sjuk, VAB eller ledig.</li>
<li>Frånvaron syns direkt i planeringen så luckor kan täckas i tid.</li>
<li>Rätt avdrag och ersättning följer med till löneunderlaget – utan handpåläggning.</li>
<li>Du får överblick över frånvaro per person och projekt.</li>
</ol>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Frånvaro på lappar och sms.</strong> Det försvinner och blir fel i lön och plan.</li>
<li><strong>Fel karensavdrag.</strong> Missa inte femdagarsregeln vid återinsjuknande.</li>
<li><strong>Ingen koppling till bemanning.</strong> Frånvaro som inte syns i planen ställer till det på plats.</li>
<li><strong>Sen anmälan till Försäkringskassan.</strong> Håll koll på dag 15-gränsen vid längre sjukdom.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Hur länge betalar arbetsgivaren sjuklön?</h3>
<p>Under de första 14 dagarna av sjukperioden (sjuklöneperioden), med 80 % av lönen efter ett karensavdrag. Från dag 15 tar Försäkringskassan över med sjukpenning.</p>
<h3>Vem betalar vid VAB?</h3>
<p>Försäkringskassan betalar tillfällig föräldrapenning vid VAB, efter anmälan från den anställde.</p>
<h3>Hur stort är karensavdraget?</h3>
<p>20 % av en genomsnittlig veckolön, och görs en gång per sjukperiod.</p>

<h2>Kom igång</h2>
<p>Håll frånvaron samlad, kopplad till plan och lön. <a href="/sv/blog/bemanning-och-personalplanering">Läs om bemanning</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/bemanning-och-personalplanering">Bemanning och personalplanering</a> · <a href="/sv/blog/loneunderlag-for-byggforetag">Löneunderlag</a> · <a href="/sv/blog/app-for-tidrapportering-bygg">App för tidrapportering</a></p>
`.trim();

const FRANVARO: BlogPost = {
  _id: 'code-franvaro',
  title: 'Frånvaro i byggföretag – sjuk, VAB, semester och sjuklön',
  slug: 'franvaro-i-byggforetag',
  locale: 'sv',
  excerpt:
    'Frånvarotyper, sjuklön och karensavdrag, VAB via Försäkringskassan och hur du håller ordning på frånvaron så att bemanning och löneunderlag blir rätt.',
  tag: 'Personal',
  coverImageUrl: '/landing/features/12salary.webp',
  contentHtml: FRANVARO_HTML,
  seoTitle: 'Frånvaro i byggföretag – sjuklön, karensavdrag & VAB | ByggExp',
  seoDescription:
    'Sjuklön dag 1–14, karensavdrag 20 %, femdagarsregeln, VAB via Försäkringskassan och semester. Så håller du ordning på frånvaron i ett byggföretag.',
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T17:00:00.000Z',
  createdAt: '2026-08-12T17:00:00.000Z',
  updatedAt: '2026-08-12T17:00:00.000Z',
};

const ANSTALLA_HTML = `
<p>Orderböckerna är fulla men du hinner inte med själv. Att gå från ensam hantverkare till arbetsgivare är ett av de största stegen du tar som byggföretagare — men det är fullt hanterbart om du vet vad som gäller. Många drar sig för det första anställningssteget för att det känns dyrt och byråkratiskt. Kostnaden är ofta lägre än du tror tack vare Växa-stödet, förutsatt att formalian sitter rätt.</p>

<p>Innan du landar en lönenivå bör du räkna hem vad medarbetaren faktiskt måste dra in per timme — testa <a href="/sv/verktyg/timpris-kalkylator">vår gratis timpris-kalkylator -&gt;</a> så ser du direkt hur lön, avgifter och overhead påverkar ditt pris ut mot kund.</p>

<h2>Innan du anställer: räkna på den verkliga kostnaden</h2>

<p>Bruttolönen är bara en del av kostnaden. Ovanpå lönen tillkommer arbetsgivaravgifter på 31,42 % (2026), semesterersättning (minst 12 %) samt tjänstepension och försäkringar om du har eller tecknar kollektivavtal. En medarbetare med 30 000 kr i månadslön kostar därför snabbt runt 40 000 kr per månad innan du ens räknat in verktyg, arbetskläder och overhead.</p>

<p>Det är den här kalkylen som avgör vilket timpris du måste ta ut för att gå med vinst. Räkna igenom den innan du skriver under något avtal — annars äter den nya lönen upp din marginal i stället för att bygga den.</p>

<h2>Växa-stödet 2026 — så halverar du avgiften på första anställningen</h2>

<p>Växa-stödet är det viktigaste verktyget för dig som anställer för första gången. I stället för full arbetsgivaravgift på 31,42 % betalar du bara ålderspensionsavgiften 10,21 % på lönen — på den del som ligger under takbeloppet. Stödet gäller i upp till 24 sammanhängande kalendermånader.</p>

<ul>
<li><strong>Vem får det:</strong> enskild firma, aktiebolag eller handelsbolag med högst två delägare, som inte haft någon anställd (eller högst en) sedan årets ingång.</li>
<li><strong>Vem du får anställa:</strong> personen får inte ha varit anställd hos dig eller närstående företag under kalenderåret eller de tre föregående kalenderåren.</li>
<li><strong>Takbelopp:</strong> 35 000 kr/månad för anställda som tillträtt efter 30 april 2024 (25 000 kr för äldre anställningar). Lön över taket beläggs med full avgift.</li>
<li><strong>Två anställda:</strong> sedan 1 maj 2024 kan stödet omfatta både en första och en andra anställd — den andra bara om den första fortfarande är kvar.</li>
</ul>

<p><strong>Viktig ändring 2026:</strong> från och med redovisningsperioden januari 2026 får du inte längre nedsättningen automatiskt i arbetsgivardeklarationen. Du måste själv <em>ansöka om återbetalning</em> av de överskjutande arbetsgivaravgifterna hos Skatteverket. Missar du det betalar du full avgift i onödan — bygg in ansökan i din månadsrutin.</p>

<p><strong>Räkneexempel:</strong> på en lön om 35 000 kr är full arbetsgivaravgift cirka 11 000 kr/månad. Med Växa-stödet blir avgiften cirka 3 570 kr — en besparing på runt 7 400 kr i månaden, eller nära 180 000 kr över hela stödperioden på 24 månader.</p>

<h2>Registrering och skatt hos Skatteverket</h2>

<p>Innan första lönen betalas måste du registrera dig som arbetsgivare hos Skatteverket. Därefter gäller tre återkommande skyldigheter varje månad:</p>

<ol>
<li>Gör skatteavdrag (preliminärskatt) på lönen enligt rätt skattetabell.</li>
<li>Lämna arbetsgivardeklaration på individnivå (AGI) — senast den 12:e månaden efter löneutbetalningen.</li>
<li>Betala in avdragen skatt och arbetsgivaravgifter till Skatteverket.</li>
</ol>

<p>AGI-rapporteringen på individnivå betyder att varje anställds lön och skatt redovisas separat. Här lönar det sig att ha ordning på underlaget från start, så att löner och tidrapporter stämmer överens.</p>

<h2>Anställningsavtalet — vad det måste innehålla</h2>

<p>Enligt LAS är tillsvidareanställning (fast anställning) normen. Du kan inleda med provanställning i högst sex månader. Använder du särskild visstidsanställning övergår den till tillsvidareanställning efter sammanlagt tolv månader inom en femårsperiod.</p>

<p>Du är skyldig att lämna skriftlig information om de väsentliga anställningsvillkoren — de viktigaste inom 7 dagar från anställningens start, resterande inom en månad. Se till att avtalet minst innehåller:</p>

<ul>
<li>Lön och när den betalas ut</li>
<li>Arbetstid och eventuell övertidsersättning</li>
<li>Anställningsform och uppsägningstid</li>
<li>Arbetsuppgifter och arbetsort</li>
<li>Semestervillkor och eventuellt kollektivavtal</li>
</ul>

<h2>Kollektivavtal och försäkringar i byggbranschen</h2>

<p>Kollektivavtal är inte ett lagkrav, men det är mycket vanligt i bygg — Byggavtalet med Byggnads är branschstandard. Tecknar du avtalet binder du dig att betala avtalsenlig lön och att ordna de kopplade försäkringarna via Fora och AFA: tjänstepension (Avtalspension SAF-LO), arbetsskadeförsäkring (TFA), livförsäkring (TGL) samt AGB/AGS.</p>

<p>Står du utanför kollektivavtal är dessa försäkringar inte automatiska. Då bör du teckna motsvarande tjänstepension och försäkringar frivilligt — både för att vara en attraktiv arbetsgivare och för att skydda dig själv om något händer på arbetsplatsen.</p>

<h2>Bygg-specifika krav: ID06, personalliggare och arbetsmiljö</h2>

<p>På byggarbetsplatser gäller extra regler. Elektronisk personalliggare är obligatorisk när den totala kostnaden för byggverksamheten väntas överstiga 4 prisbasbelopp — 4 × 59 200 = 236 800 kr under 2026. Byggherren anmäler normalt byggarbetsplatsen till Skatteverket, och varje företag loggar in sina egna arbetare.</p>

<p>Sköts inte liggaren riskerar du kontrollavgift: 12 500 kr om liggaren saknas eller är bristfällig, plus 2 500 kr per person på plats som inte är registrerad. ID06 — registrerat ID-kort med elektronisk närvaroregistrering — är det verktyg branschen använder för att uppfylla kravet i praktiken. Ordna ID06-kort till din nya medarbetare innan hen går ut på jobb.</p>

<p>Som arbetsgivare bär du dessutom arbetsmiljöansvaret enligt arbetsmiljölagen och ska bedriva systematiskt arbetsmiljöarbete (SAM, AFS 2023:1). På en byggarbetsplats är det inte pappersexercis — det handlar om att förebygga fall, tunga lyft och maskinolyckor.</p>

<h2>Checklista: allt du måste ha på plats</h2>

<ul>
<li>Registrerad som arbetsgivare hos Skatteverket</li>
<li>Skriftligt anställningsavtal med väsentliga villkor</li>
<li>Ansökan om återbetalning via Växa-stödet inplanerad i månadsrutinen</li>
<li>Tjänstepension och försäkringar (via kollektivavtal eller egna avtal)</li>
<li>ID06-kort till medarbetaren</li>
<li>Personalliggare på plats där bygget överstiger tröskeln</li>
<li>Rutiner för systematiskt arbetsmiljöarbete</li>
<li>Lönehantering och AGI-rapportering senast den 12:e varje månad</li>
</ul>

<h2>Så gör du i ByggExp</h2>

<p>ByggExp tar inte över din lönekörning eller din Skatteverket-rapportering, men samlar underlaget som gör den enkel. Med tidrapportering per medarbetare och projekt får du exakta timmar att lönesätta och fakturera vidare, och du ser direkt vad varje anställd kostar och drar in per projekt. Frånvaro och närvaro loggas löpande, så att du har ordning inför både lönekörning och personalliggare. Kort sagt: du får kontroll på kostnaden och timmarna, så att steget från ensam hantverkare till arbetsgivare blir ett räknat beslut i stället för en magkänsla.</p>

<h2>Vanliga frågor</h2>

<h3>Hur mycket sänker Växa-stödet kostnaden?</h3>
<p>Du betalar 10,21 % i ålderspensionsavgift i stället för 31,42 % i full arbetsgivaravgift, på lön upp till takbeloppet 35 000 kr/månad. Det motsvarar en besparing på runt 7 400 kr per månad på en heltidslön, i upp till 24 månader.</p>

<h3>Måste jag ha kollektivavtal för att anställa?</h3>
<p>Nej, kollektivavtal är inte ett lagkrav. Det är dock vanligt i bygg och styr lön samt ger tjänstepension och försäkringar via Fora/AFA. Utan avtal måste du teckna motsvarande pension och försäkringar själv.</p>

<h3>Vad är den stora ändringen för Växa-stödet 2026?</h3>
<p>Från och med redovisningsperioden januari 2026 får du inte längre nedsättningen automatiskt i arbetsgivardeklarationen. Du måste aktivt ansöka om återbetalning av de överskjutande arbetsgivaravgifterna hos Skatteverket.</p>

<h3>När krävs elektronisk personalliggare?</h3>
<p>När den totala kostnaden för byggverksamheten väntas överstiga 4 prisbasbelopp, vilket 2026 är 236 800 kr. Byggherren anmäler arbetsplatsen och varje företag loggar in sina egna arbetare, i praktiken via ID06.</p>

<h2>Kom igång</h2>

<p>Kostnaden för din första medarbetare är lägre än många tror tack vare Växa-stödet — men formalian måste sitta. Börja med att räkna hem timpriset i <a href="/sv/verktyg/timpris-kalkylator">vår gratis timpris-kalkylator</a>, så vet du vilken lönenivå och beläggning som faktiskt går ihop. Vill du se hur tidrapportering och kostnadskontroll fungerar i praktiken? <a href="/sv/contact">Boka en demo</a> så visar vi hur du får ordning från första anställningen.</p>

<p>Relaterat: <a href="/sv/blog/timpris-hantverkare">Sätta timpris som hantverkare</a>, <a href="/sv/blog/tidrapportering">Tidrapportering i byggföretag</a>, <a href="/sv/blog/franvaro-i-byggforetag">Hantera frånvaro i byggföretaget</a>.</p>
`.trim();

const ANSTALLA: BlogPost = {
  _id: "code-"+"anstalla-personal-byggforetag",
  title: "Anställa personal i byggföretaget: checklista för första medarbetaren 2026", slug: "anstalla-personal-byggforetag", locale: "sv",
  excerpt: "En konkret checklista för din första anställning i byggföretaget: Växa-stödet som sänker avgiften, anställningsavtalet och de bygg-specifika kraven du inte får missa.", tag: "Personal",
  coverImageUrl: "/landing/verktyg/timpris-preview.webp", contentHtml: ANSTALLA_HTML,
  seoTitle: "Anställa personal byggföretag | ByggExp", seoDescription: "Ska du anställa din första medarbetare? Så funkar Växa-stödet 2026, anställningsavtalet, ID06 och allt du måste ha på plats. Konkret checklista.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/timpris-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T16:30:00.000Z", createdAt: "2026-08-18T16:30:00.000Z", updatedAt: "2026-08-18T16:30:00.000Z",
};

const A_INHYRD_PERSONAL_REGLER_HTML = `
<p>Att hyra in personal är ett självklart verktyg för de flesta byggföretag. När ett stort projekt drar igång, en sjukskrivning slår hål i laget eller orderboken plötsligt svämmar över, är bemanning ofta snabbaste vägen till full kapacitet. Men inhyrning är inte samma sak som att köpa en tjänst i lösvikt – regelverket lägger ett tydligt ansvar på dig som kundföretag, och missar kan bli dyra i form av skadestånd eller en tillsvidareanställning du aldrig planerade för.</p>

<p>Innan du skriver på nästa bemanningsavtal: kartlägg ditt personalbehov och håll ordning på tid och driftsenheter med <a href="/sv/verktyg">våra gratis verktyg för byggföretag -></a>. God dokumentation är själva grunden för att klara reglerna nedan.</p>

<h2>Vad är Uthyrningslagen?</h2>
<p>Reglerna för inhyrd personal styrs av Uthyrningslagen – <strong>Lag (2012:854) om uthyrning av arbetstagare</strong>. Den genomför EU:s bemanningsdirektiv (2008/104/EG) i svensk rätt och sätter ramarna för hela branschen.</p>
<p>Lagen skiljer på två roller. <strong>Bemanningsföretaget</strong> är den som har arbetstagare anställda i syfte att hyra ut dem. <strong>Kundföretaget</strong> är den för vilken, och under vars kontroll och ledning, de uthyrda faktiskt arbetar (5 §). Det innebär en viktig sak i praktiken: även om den inhyrda snickaren har sin anställning hos bemanningsbolaget, är det du som kundföretag som har arbetsledningsansvaret på bygget. Du leder, fördelar och styr arbetet – och tar därmed också ett arbetsmiljöansvar för personen på plats.</p>

<h2>Likabehandlingsprincipen – samma villkor som egen personal</h2>
<p>Kärnan i lagen är likabehandlingsprincipen (6 §). En inhyrd arbetstagare ska ha minst de grundläggande arbets- och anställningsvillkor som skulle ha gällt om hen hade anställts direkt av dig för samma arbete. Det handlar inte bara om lön, utan om ett helt paket:</p>
<ul>
<li>arbetstidens längd och förläggning</li>
<li>övertid, raster och vila</li>
<li>nattarbete</li>
<li>semester och helgdagar</li>
<li>lön</li>
</ul>
<p>Tanken är att inhyrning inte ska bli ett sätt att pressa villkoren under det som gäller för din egen personal. En inhyrd yrkesarbetare ska alltså i grunden inte ha sämre villkor än den fast anställda som står bredvid och gör samma jobb.</p>

<h2>Kollektivavtalets roll – varför bemanningsavtalet oftast styr lönen</h2>
<p>Här finns ett viktigt undantag. Enligt 8 § får man göra avsteg från likabehandlingen – framför allt när det gäller lön – genom kollektivavtal, förutsatt att avtalet respekterar det övergripande skydd för arbetstagare som direktivet kräver. I praktiken innebär det att bemanningsbranschens kollektivavtal (till exempel Kompetensföretagens avtal med LO-förbunden) ersätter 6 §:s löneregel för uthyrd personal.</p>
<p>Slutsatsen för dig som byggföretag: hyr in från <strong>seriösa, kollektivavtalsanslutna bemanningsföretag</strong>. Då vet du att lönen regleras enligt ett känt avtal, att villkoren är ordnade och att du minskar risken för tvister om vad den inhyrda egentligen skulle ha haft betalt. Auktoriserade leverantörer är regel, inte undantag, för en trygg inhyrning.</p>

<h2>24-månadersregeln steg för steg</h2>
<p>Sedan 1 oktober 2022 gäller den så kallade 24-månadersregeln (12 a §). Har en inhyrd varit placerad på <strong>en och samma driftsenhet</strong> hos dig i sammanlagt <strong>mer än 24 månader under en period om 36 månader</strong>, måste du som kundföretag agera. Du ska antingen:</p>
<ol>
<li>erbjuda arbetstagaren en tillsvidareanställning hos dig, eller</li>
<li>betala en ersättning motsvarande <strong>två månadslöner</strong> till arbetstagaren.</li>
</ol>
<p>Oavsett vilket alternativ du väljer ska det ske inom <strong>en månad</strong> efter att gränsen passerats. Regeln finns för att inhyrning inte ska bli en permanent lösning som kringgår vanliga anställningsförhållanden.</p>
<p><strong>Räkneexempel:</strong> Du hyr in en betongarbetare till din driftsenhet i Västerås. Personen jobbar hos dig 14 månader, är borta ett halvår på annat uppdrag, och kommer tillbaka i 11 månader – allt inom en och samma 36-månadersperiod. Totalt blir det 25 månader, alltså över gränsen. Nu har du en månad på dig att antingen erbjuda tillsvidareanställning eller betala två månadslöner. Poängen: det är den <em>sammanlagda</em> tiden på samma driftsenhet som räknas, inte en sammanhängande period.</p>
<p>Notera att det finns undantag (12 b §). 24-månadersregeln gäller inte arbetstagare som är anställda med särskilt anställningsstöd, i skyddat arbete eller med lönebidrag för utveckling. Motsvarande undantag från likabehandling finns i 7–8 §§.</p>

<h2>Förhandlingsskyldigheten enligt MBL 38 §</h2>
<p>Innan du hyr in personal räcker det inte att skriva avtal med bemanningsbolaget. Enligt <strong>MBL 38 §</strong> måste du som arbetsgivare påkalla och genomföra primär förhandling med den kollektivavtalsbärande fackliga organisationen – på bygget oftast Byggnads – innan inhyrningen beslutas.</p>
<p>Facket har dessutom en vetorätt (39 §). Under vissa förutsättningar kan de lägga in veto om den planerade inhyrningen skulle strida mot lag eller kollektivavtal, till exempel om leverantören saknar avtal eller inte sköter sina åtaganden. Att förhandla i god tid är alltså inte bara en formalitet – det är en förutsättning för att inhyrningen ska vara laglig.</p>

<h2>På bygget – ID06, personalliggare och arbetsmiljö</h2>
<p>På en byggarbetsplats tillkommer praktiska krav som gäller <em>all</em> personal, även inhyrda. Varje person ska vara <strong>ID06-registrerad</strong> och föras in i den elektroniska <strong>personalliggaren</strong>. Kravet på personalliggare i byggbranschen följer av skatteförfarandelagen och kontrolleras av Skatteverket vid oanmälda besök – saknas den inhyrda i liggaren riskerar du kontrollavgift.</p>
<p>Eftersom du har arbetsledningen på plats bär du också ett arbetsmiljöansvar för den inhyrda under arbetet. Introduktion, skyddsutrustning och riskgenomgångar gäller lika mycket för bemanningspersonalen som för ditt eget lag.</p>

<h2>Sanktioner om du gör fel</h2>
<p>Regelverket har tänder. Enligt 13–14 §§ medför brott mot Uthyrningslagen skadeståndsskyldighet – både ersättning för den faktiska förlust arbetstagaren lidit och ersättning för den kränkning som skett. Till det kommer den ekonomiska risken i 24-månadersregeln: missar du att bevaka gränsen kan du plötsligt stå med en oplanerad tillsvidareanställning eller ett krav på två månadslöner. Det är kostnader som är fullt möjliga att undvika med ordning och framförhållning.</p>

<h2>Checklista: så hyr du in personal rätt</h2>
<ul>
<li>Välj ett seriöst, kollektivavtalsanslutet (gärna auktoriserat) bemanningsföretag.</li>
<li>Genomför primär förhandling enligt MBL 38 § med Byggnads innan inhyrningen.</li>
<li>Säkerställ att den inhyrda är ID06-registrerad och förs in i personalliggaren.</li>
<li>Dokumentera vilken driftsenhet personen jobbar på och exakt hur länge.</li>
<li>Bevaka den sammanlagda tiden mot 24-månadersgränsen inom rullande 36 månader.</li>
<li>Ge introduktion och skyddsutrustning – arbetsmiljöansvaret är ditt på plats.</li>
<li>Spara underlag och avtal i minst 7 år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte bemanningsavtalet eller den fackliga förhandlingen – men systemet ger dig kontrollen som gör att du klarar reglerna. Med tidrapportering per person och projekt ser du hur länge en inhyrd faktiskt har arbetat hos dig, vilket gör 24-månadersgränsen möjlig att bevaka innan den överraskar dig. Du håller ordning på vilka som är på vilken arbetsplats, samlar avtal och underlag på ett ställe och får spårbarhet som håller vid en granskning. Kort sagt: ByggExp gör det administrativa så pass enkelt att du hinner ta beslutet i tid i stället för i efterhand.</p>

<h2>Vanliga frågor</h2>
<h3>Räknas semester och frånvaro in i 24-månadersperioden?</h3>
<p>Det är den tid arbetstagaren varit placerad på din driftsenhet som räknas mot gränsen mer än 24 månader under 36 månader. Kortare avbrott gör inte att räkningen nollställs – det är den sammanlagda placeringstiden som är avgörande. Är du osäker på hur en längre frånvaro ska bedömas, stäm av med bemanningsföretaget och er fackliga motpart.</p>
<h3>Gäller reglerna vid entreprenad och underentreprenad?</h3>
<p>Uthyrningslagen gäller just uthyrning av arbetstagare – att du leder och fördelar arbetet för personal som är anställd hos någon annan. En äkta entreprenad, där underentreprenören själv leder sitt arbete och ansvarar för resultatet, är något annat och omfattas inte på samma sätt. Gränsen kan i praktiken vara hårfin, och det avgörande är vem som faktiskt har arbetsledningen. Bygger upplägget på att du styr personerna dagligen talar mycket för att det är inhyrning.</p>
<h3>Vem betalar de två månadslönerna om gränsen passeras?</h3>
<p>Det är kundföretaget – alltså ditt byggföretag som hyr in – som ansvarar för att antingen erbjuda tillsvidareanställning eller betala ersättningen motsvarande två månadslöner, inom en månad. Skyldigheten ligger på dig som kundföretag, inte på bemanningsbolaget.</p>
<h3>Måste vi verkligen förhandla med facket före varje inhyrning?</h3>
<p>Ja, huvudregeln enligt MBL 38 § är att du ska påkalla primär förhandling med den kollektivavtalsbärande organisationen innan du beslutar om inhyrning. Rutiner för hur ofta och i vilken form kan regleras i ert kollektivavtal, men skyldigheten att förhandla går inte att hoppa över.</p>

<h2>Kom igång</h2>
<p>Bygg upp rutiner som gör inhyrningen trygg – börja med att strukturera personal- och tidsuppgifter i <a href="/sv/verktyg">ByggExps gratis verktyg</a>. Vill du se hur systemet håller koll på inhyrd tid och driftsenheter i praktiken? <a href="/sv/contact">Boka en demo här</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/bemanning-och-personalplanering">Bemanning och personalplanering för byggföretag</a> och <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag – guide</a>.</p>
`;

const A_INHYRD_PERSONAL_REGLER: BlogPost = {
  _id: "code-"+"inhyrd-personal-regler",
  title: "Inhyrd personal – reglerna varje byggföretag måste ha koll på 2026", slug: "inhyrd-personal-regler", locale: "sv",
  excerpt: "Bemanning löser toppar i produktionen – men fel hantering kan ge skadestånd och tvingade tillsvidareanställningar. Här är reglerna byggföretaget måste kunna.", tag: "Personal",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_INHYRD_PERSONAL_REGLER_HTML,
  seoTitle: "Inhyrd personal regler 2026 | ByggExp", seoDescription: "Uthyrningslagen, likabehandlingsprincipen och 24-månadersregeln – så hyr ditt byggföretag in personal rätt och undviker skadestånd och tvingade anställningar.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:12:00.000Z", createdAt: "2026-08-18T19:12:00.000Z", updatedAt: "2026-08-18T19:12:00.000Z",
};

const A_ARBETSTIDSLAGEN_BYGG_HTML = `
<p>En missad dygnsvila eller ett överskridet övertidstak kan kosta ditt byggföretag en sanktionsavgift – även om medarbetaren själv ville jobba de extra timmarna. Arbetstidslagen (1982:673) lägger ansvaret för att reglerna hålls på arbetsgivaren, inte på den anställde. I byggbranschen med tidiga starter, resor, jourutryckningar och intensiva projektfaser är det lätt att tappa kontrollen på dygns- och veckovila om ingen dokumenterar timmarna löpande.</p>

<p>Grunden för att klara detta är ordning i tiderna. Ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> och börja registrera arbetad tid, övertid och vila per medarbetare redan idag.</p>

<h2>Så mycket får man jobba – ordinarie arbetstid</h2>
<p>Ordinarie arbetstid enligt arbetstidslagens 5 § är högst 40 timmar per vecka. Går verksamheten inte att lägga jämnt – vilket sällan är fallet i bygg – får snittet på 40 timmar räknas ut över en period på högst fyra veckor. Det här är grundnivån innan någon övertid alls kommer in i bilden, och det är utifrån den du mäter allt annat. Om en anställd jobbar 45 timmar en vecka måste det balanseras av kortare veckor så att fyraveckorssnittet landar på 40.</p>

<h2>Dygnsvila: 11 timmar sammanhängande</h2>
<p>Varje arbetstagare ska ha minst 11 timmars sammanhängande ledighet under varje 24-timmarsperiod (13 §). Perioden mellan klockan 00.00 och 05.00 ska normalt ingå i dygnsvilan – nattvilan. Avvikelser är bara tillåtna vid tillfälliga och oförutsedda händelser, inte som en planerad del av schemat.</p>
<p>Räkna på ett vanligt byggexempel: en snickare slutar klockan 19.00 efter en lång dag. Då får nästa arbetspass tidigast börja klockan 06.00 morgonen efter för att de 11 timmarna ska hållas. Planeras en tidig start klockan 05.30 samma vecka måste kvällen innan avslutas senast 18.30. Det låter enkelt men brister ofta vid restid till avlägsna arbetsplatser, jour och akuta insatser.</p>

<h2>Veckovila: 36 timmar per sjudagarsperiod</h2>
<p>Utöver dygnsvilan ska varje arbetstagare ha minst 36 timmars sammanhängande ledighet under varje sjudagarsperiod (14 §). Veckovilan ska så långt det är möjligt förläggas till veckoslut. Fallgropen dyker upp i intensiva slutspurter och vid helgarbete: tar man in personal en lördag utan att säkra en sammanhängande ledig period om 36 timmar någon annan gång under sjudagarsperioden, bryter man mot lagen. Här räcker det inte att titta på enskilda dygn – du måste se hela veckans mönster.</p>

<h2>Övertidstaket du måste hålla</h2>
<p>Övertid är tillåten, men bara inom tydliga ramar. Håll koll på samtliga dessa tak samtidigt:</p>
<ul>
<li><strong>Allmän övertid:</strong> högst 200 timmar per kalenderår och medarbetare.</li>
<li><strong>Kortperiodtaket:</strong> högst 48 timmars övertid under en period om fyra veckor, alternativt högst 50 timmar per kalendermånad.</li>
<li><strong>Extra övertid:</strong> ytterligare 150 timmar per kalenderår får tas ut om det finns särskilda skäl och situationen inte gått att lösa på annat rimligt sätt. Den totala övertiden (allmän plus extra) får ändå aldrig överstiga 48 timmar per fyra veckor eller 50 timmar per kalendermånad.</li>
<li><strong>Totaltaket:</strong> ordinarie arbetstid plus övertid får i genomsnitt vara högst 48 timmar per vecka under en beräkningsperiod på fyra månader (EU:s arbetstidsdirektiv).</li>
</ul>
<p>Det sista taket är det som oftast förbises. Även om varje enskild månad ser rimlig ut kan snittet över fyra månader krypa över 48 timmar per vecka, och då är gränsen passerad oavsett hur timmarna fördelats.</p>

<h2>Byggavtalet slår igenom</h2>
<p>Ett kollektivavtal kan ersätta arbetstidslagens regler helt eller delvis, så länge EU:s miniminivå hålls. Har ditt företag Byggavtalet 2025–2027 (Byggföretagen–Byggnads, gäller 1 maj 2025 till 30 april 2027) är det avtalet du ska läsa, inte bara lagtexten. Byggavtalet bygger på minst 11 timmars dygnsvila och har egna regler för när och hur extra övertid får tas ut, ofta efter överenskommelse med facket. Exakta ramar, villkor och eventuella gränser per dygn står i avtalstexten – kontrollera den innan du planerar extra övertid eller avvikande arbetstid.</p>
<p>Avtalet innehåller också arbetstidsförkortning: vid 40-timmarsvecka finns 6 dagars arbetstidsförkortning per intjänandeår från och med 31 mars 2026. Slutsatsen är enkel – kolla ditt avtal, inte bara lagen, innan du planerar övertid och skift.</p>

<h2>Tidregistrering är arbetsgivarens ansvar</h2>
<p>Arbetsgivaren är skyldig att föra anteckningar (journal) över jourtid, övertid och mertid för varje arbetstagare enligt 11 § arbetstidslagen. Hur anteckningarna ska föras regleras närmare i Arbetsmiljöverkets gällande föreskrifter. Anteckningarna ska vara tydliga, hållas tillgängliga på arbetsstället och bevaras så länge de gällande föreskrifterna kräver. Arbetstagaren och facket har rätt att ta del av dem. Det här är en lagstadgad skyldighet som ligger helt på företaget.</p>
<p>Blanda inte ihop detta med den elektroniska personalliggaren, men koppla ihop rutinerna. Personalliggare krävs på byggarbetsplats där byggverksamhet bedrivs och den sammanlagda kostnaden överstiger fyra prisbasbelopp exklusive moms. Prisbasbeloppet 2026 är 59 200 kr, vilket ger gränsen 236 800 kr. Alla som är verksamma på platsen ska registreras dagligen med namn, personnummer och tider för in- och utcheckning. Uppgifterna ska vara elektroniska, kunna visas vid oanmäld kontroll och sparas i två år. Notera att ID06 inte är ett lagkrav – Skatteverket kräver elektronisk registrering av namn, personnummer och tider, inte ett specifikt system.</p>

<h2>Vad det kostar att göra fel</h2>
<p>Den gamla övertidsavgiften i arbetstidslagen ersattes den 1 juli 2014 av sanktionsavgifter. Arbetsmiljöverket utövar tillsyn, kan göra inspektioner och besluta om förelägganden, förbud och sanktions- eller straffavgifter vid brott mot exempelvis övertidstaket och anteckningsskyldigheten. På personalliggarsidan kan Skatteverket ta ut kontrollavgifter om liggaren saknas eller är bristfällig. Ansvaret ligger genomgående hos arbetsgivaren – att en medarbetare frivilligt jobbade över friar inte företaget.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp samlar tidregistreringen på ett ställe så att du slipper räkna dygns- och veckovila i huvudet. Medarbetarna rapporterar arbetad tid per dag och projekt, och du får underlaget som krävs för journalen över övertid och mertid enligt 11 §. Timmarna blir sökbara och sparbara under de år lagen kräver, och samma data ligger till grund för lön och fakturering. ByggExp är inget juridiskt kontrollsystem som automatiskt godkänner ditt schema mot avtalet – men med löpande och korrekt dokumenterade tider är det enkelt att se när en medarbetare närmar sig ett tak och att visa upp underlaget vid en kontroll. Börja med vår <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> och gå vidare till digital rapportering när flödet sitter.</p>

<h2>Vanliga frågor</h2>
<h3>Hur många timmars dygnsvila måste jag ge?</h3>
<p>Minst 11 timmars sammanhängande ledighet under varje 24-timmarsperiod, och nattvilan mellan 00.00 och 05.00 ska normalt ingå. Avvikelser är bara tillåtna vid tillfälliga, oförutsedda händelser. Har ni Byggavtalet gäller samma minimum om 11 timmar.</p>
<h3>Hur mycket övertid är tillåten per år?</h3>
<p>Allmän övertid är högst 200 timmar per kalenderår. Vid särskilda skäl kan ytterligare 150 timmar extra övertid tas ut. Oavsett detta får övertiden aldrig överstiga 48 timmar under fyra veckor eller 50 timmar per kalendermånad, och den totala arbetstiden får i snitt vara högst 48 timmar per vecka över fyra månader.</p>
<h3>Är ID06 ett lagkrav?</h3>
<p>Nej. Lagen kräver elektronisk personalliggare med registrering av namn, personnummer och in- och utcheckningstider på byggarbetsplatser över 236 800 kr (2026). Skatteverket kräver inte ett specifikt system, så lösningar utan ID06-kort kan uppfylla lagkravet.</p>
<h3>Vem ansvarar för tidregistreringen?</h3>
<p>Arbetsgivaren. Skyldigheten att föra journal över jour-, över- och mertid ligger på företaget enligt 11 § arbetstidslagen, med de närmare reglerna i Arbetsmiljöverkets gällande föreskrifter. Anteckningarna ska hållas tillgängliga och bevaras enligt föreskrifterna. Att en anställd själv ville jobba mer ändrar inte ansvaret.</p>

<h2>Kom igång</h2>
<p>Bygg en rutin där varje timme registreras löpande, så att dygnsvila, veckovila och övertidstak blir synliga innan de bryts. Starta med vår <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a>, och vill du se hur digital tidregistrering fungerar för ditt byggföretag – <a href="/sv/contact">boka en demo</a> så visar vi upplägget.</p>

<p>Relaterat: <a href="/sv/blog/tidrapportering">Tidrapportering i byggföretag</a> och <a href="/sv/blog/franvaro-i-byggforetag">Frånvaro i byggföretag</a>.</p>
`;

const A_ARBETSTIDSLAGEN_BYGG: BlogPost = {
  _id: "code-"+"arbetstidslagen-bygg",
  title: "Arbetstidslagen i byggbranschen: dygnsvila, övertid och tidregistrering", slug: "arbetstidslagen-bygg", locale: "sv",
  excerpt: "Dygnsvila, veckovila, övertidstak och tidregistrering enligt arbetstidslagen – en praktisk genomgång för byggföretag, med Byggavtalets regler och sanktionsavgifterna du vill undvika.", tag: "Arbetsrätt",
  coverImageUrl: "/landing/verktyg/tidrapport-preview.webp", contentHtml: A_ARBETSTIDSLAGEN_BYGG_HTML,
  seoTitle: "Arbetstidslagen i bygg: vila & övertid | ByggExp", seoDescription: "Dygnsvila 11 h, veckovila 36 h och övertidstaken – så håller ditt byggföretag arbetstidslagen och sköter tidregistreringen rätt enligt 11 §.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/tidrapport-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:03:00.000Z", createdAt: "2026-08-19T05:03:00.000Z", updatedAt: "2026-08-19T05:03:00.000Z",
};

const A_ANSTALLNINGSAVTAL_MALL_BYGG_HTML = `
<p>Ett slarvigt anställningsavtal är en av de dyraste genvägar ett byggföretag kan ta. Fel anställningsform, en glömd deadline eller en missad punkt i den lagstadgade informationen kan innebära att en tänkt visstidsanställd plötsligt är fast anställd — eller att företaget blir skadeståndsskyldigt. Efter LAS-reformen 2022 är kraven dessutom hårdare och deadlinerna kortare än många byggchefer tror. Den här guiden går igenom vilka anställningsformer som gäller i bygg, vad avtalet måste innehålla och var företag oftast snubblar.</p>

<p>Vill du komma igång direkt hittar du en ifyllbar anställningsavtal-mall för bygg bland <a href="/sv/verktyg">våra gratis verktyg och mallar -&gt;</a>.</p>
<p><a href="/sv/verktyg/anstallningsavtal-mall">Fyll i och ladda ner ett anställningsavtal för byggföretag (PDF & Excel) -&gt;</a></p>

<h2>Tillsvidare är huvudregeln — välj anställningsform medvetet</h2>
<p>Enligt LAS §4 gäller en anställning tills vidare om inget annat har avtalats. Det betyder att om ni tar in en yrkesarbetare utan att aktivt komma överens om en annan form, så är personen fast anställd från dag ett. Fast anställning är alltså inte något ni behöver skriva ett särskilt avtal om — det är det ni får om ni inte gör något annat.</p>
<p>För byggföretag är tre tidsbegränsade former relevanta att känna till, utöver tillsvidareanställningen:</p>
<ul>
<li><strong>Provanställning</strong> — för att pröva en ny yrkesarbetare, max sex månader.</li>
<li><strong>Särskild visstidsanställning (SÄVA)</strong> — för arbetstopp och projektbehov.</li>
<li><strong>Vikariat</strong> — när någon ersätter en frånvarande anställd.</li>
</ul>
<p>Väljer ni en tidsbegränsad form måste det framgå tydligt av avtalet. Otydlighet tolkas nästan alltid till arbetstagarens fördel.</p>

<h2>Provanställning i byggbranschen — max 6 månader</h2>
<p>Provanställning regleras i LAS §6 och får vara i högst sex månader. Syftet är att pröva om yrkesarbetaren fungerar i verksamheten. Avslutas provanställningen inte i tid övergår den <strong>automatiskt</strong> till en tillsvidareanställning — det är exakt så oplanerade fastanställningar uppstår.</p>
<p>Vill arbetsgivaren avbryta provanställningen i förtid eller inte låta den övergå i fast anställning, ska besked lämnas till den anställde minst två veckor (14 dagar) i förväg. Är arbetsplatsen kollektivansluten ska även den berörda fackliga organisationen varslas enligt LAS §31. Det vanliga upplägget i bygg är därför: sex månaders prov, med ett bevakat beslutsdatum runt vecka 22–23, och därefter övergång till tillsvidare.</p>

<h2>SÄVA — de nya reglerna du måste räkna dagar på</h2>
<p>Särskild visstidsanställning (SÄVA) ersatte den gamla allmänna visstidsanställningen (ALVA) den 1 oktober 2022 och reglerna skärptes rejält. Enligt LAS §5a övergår en SÄVA till tillsvidareanställning när den anställde varit anställd i SÄVA i sammanlagt mer än <strong>tolv månader under en femårsperiod</strong>. Tidigare gick gränsen vid 24 månader — nu är den halverad.</p>
<p>Dessutom inträder företrädesrätt till återanställning tidigare för SÄVA: redan efter sammanlagt mer än nio månader, mot tolv månader för andra visstidsformer. För projektdrivna byggföretag som återkommande tar in samma personer mellan projekt är detta en fälla. Varje SÄVA-dag räknas in i femårsfönstret, och när tröskeln passeras sker övergången automatiskt — utan att någon behöver skriva under något nytt.</p>
<p>Ett vikariat har en egen gräns: det övergår till tillsvidareanställning när den anställde varit vikarie i sammanlagt mer än två år under en femårsperiod (LAS §5a). Håll SÄVA-dagar och vikariatsdagar isär i era register.</p>

<h2>Vad avtalet MÅSTE innehålla enligt LAS §6c</h2>
<p>Sedan LAS-reformen 2022, som genomför EU:s arbetsvillkorsdirektiv (2019/1152), är arbetsgivaren skyldig att lämna skriftlig information om alla villkor av väsentlig betydelse. Detta gäller <strong>alla</strong> anställningar, oavsett form. De centrala uppgifterna ska lämnas senast den sjunde kalenderdagen efter att anställningen påbörjats, resten senast en månad efter. Informationskravet omfattar omkring 13 punkter:</p>
<ul>
<li>Arbetsgivarens och arbetstagarens namn och adress</li>
<li>Tillträdesdag</li>
<li>Anställningsform (och vid visstid: slutdag eller villkor för att den upphör)</li>
<li>Arbetsuppgifter, yrkesbenämning eller titel</li>
<li>Lön, förmåner och hur lönen betalas ut</li>
<li>Arbetstidens längd — normal arbetsdag eller arbetsvecka</li>
<li>Regler för övertid och mertid samt ersättning för dessa</li>
<li>Betald semester</li>
<li>Uppsägningstider eller reglerna för hur anställningen upphör</li>
<li>Eventuell provanställnings längd och villkor</li>
<li>Tillämpligt kollektivavtal</li>
<li>Rätt till kompetensutveckling som arbetsgivaren erbjuder</li>
<li>Uppgifter om arbetsgivaravgifter och socialt skydd (i tillämpliga fall)</li>
</ul>
<p>Ett anställningsavtal är i sig giltigt även muntligt — det finns inget formkrav för själva avtalet. Men den skriftliga informationen enligt §6c är obligatorisk oavsett, och att strunta i den kan medföra skadestånd. I praktiken samlar de flesta byggföretag därför allt i ett och samma skriftliga avtal.</p>

<h2>Kollektivavtalet styr — Byggavtalet</h2>
<p>Är byggföretaget bundet av kollektivavtal måste anställningsavtalet hänvisa till rätt avtal. För byggnadsarbetare — yrkesarbetare, lärlingar med flera — är Byggavtalet mellan Byggföretagen och Byggnads det centrala. Avtalet styr bland annat lönebestämmelser (utgångslön och prestationslön, samt lärlingslön i procent av yrkesarbetarlönen), arbetstidsregler och avtalsförsäkringar.</p>
<p>Det räcker alltså inte att skriva en lön ni tycker känns rimlig: en lärlings lön följer en procentsats, och avtalets försäkringar och tillägg gäller vare sig de står i det enskilda avtalet eller inte. Referera rätt kollektivavtal i anställningsavtalet så att villkoren blir spårbara.</p>

<h2>Praktiskt — registrering, skatt och arbetsgivaransvar</h2>
<p>Innan första lönen betalas ut måste byggföretaget registrera sig som arbetsgivare hos Skatteverket. Därefter gäller:</p>
<ul>
<li>Göra skatteavdrag på lönen enligt den anställdes skattetabell.</li>
<li>Betala arbetsgivaravgifter på <strong>31,42 %</strong> av bruttolönen (fullt uttag, 2026).</li>
<li>Rapportera skatt och avgifter månadsvis via arbetsgivardeklaration på individnivå (AGI).</li>
<li>Ta arbetsmiljöansvar på byggarbetsplatsen — introduktion, skyddsutrustning och säkra arbetssätt.</li>
</ul>
<p>Vill du räkna på vad en anställd faktiskt kostar utöver bruttolönen, se den relaterade artikeln längst ned.</p>

<h2>6 vanliga misstag byggföretag gör (och hur mallen undviker dem)</h2>
<ol>
<li><strong>Ingen skriven form alls</strong> — personen blir fast anställd enligt §4. Mallen tvingar er att kryssa i anställningsform.</li>
<li><strong>Missad provanställningsdeadline</strong> — glömt 14-dagarsbesked, prov övergår automatiskt i tillsvidare. Mallen påminner om beslutsdatum.</li>
<li><strong>Tappar räkningen på SÄVA-dagar</strong> — passerar tolvmånadersgränsen oavsiktligt. Notera datum och dokumentera i systemet.</li>
<li><strong>Ofullständig §6c-information</strong> — någon av de 13 punkterna saknas, risk för skadestånd. Mallen har alla fält.</li>
<li><strong>Fel eller inget kollektivavtal angivet</strong> — otydlighet om lön och försäkringar. Mallen har fält för Byggavtalet.</li>
<li><strong>Ingen dokumentation sparad</strong> — inget att luta sig mot vid tvist. Spara avtal och besked strukturerat.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp fyller du i anställningsavtal-mallen för bygg direkt på skärmen och laddar ner den som färdig PDF. Mallen är byggd kring LAS §6c-punkterna och har fält för anställningsform, provanställningens längd, tillämpligt kollektivavtal och lön — så att du inte missar något obligatoriskt. Du anpassar den efter form och Byggavtalet, skriver ut eller signerar, och sparar dokumentationen tillsammans med företagets övriga underlag. ByggExp ersätter inte juridisk rådgivning, men ger dig en korrekt struktur att utgå från och en samlad plats för avtalen.</p>

<h2>Vanliga frågor</h2>
<h3>Måste ett anställningsavtal för byggföretag vara skriftligt?</h3>
<p>Själva avtalet är giltigt även muntligt — det finns inget formkrav. Men den skriftliga informationen om anställningsvillkoren enligt LAS §6c är obligatorisk oavsett, och att inte lämna den kan ge skadestånd. I praktiken bör allt därför skrivas ned i ett avtal.</p>
<h3>Hur länge får en provanställning i bygg vara?</h3>
<p>Högst sex månader enligt LAS §6. Avslutas den inte i tid övergår den automatiskt till en tillsvidareanställning. Vill ni avbryta ska besked lämnas minst 14 dagar i förväg, och facket varslas om arbetsplatsen är kollektivansluten.</p>
<h3>När blir en SÄVA en fast anställning?</h3>
<p>När den anställde varit anställd i särskild visstidsanställning i sammanlagt mer än tolv månader under en femårsperiod (LAS §5a). Företrädesrätt till återanställning inträder redan efter mer än nio månader för SÄVA.</p>
<h3>Vilket kollektivavtal ska anställningsavtalet hänvisa till?</h3>
<p>För byggnadsarbetare är det Byggavtalet mellan Byggföretagen och Byggnads. Avtalet styr lönebestämmelser, arbetstid och avtalsförsäkringar, och ska anges i anställningsavtalet om företaget är bundet av kollektivavtal.</p>

<h2>Kom igång</h2>
<p>Ladda ner den ifyllbara anställningsavtal-mallen för bygg bland <a href="/sv/verktyg">våra gratis verktyg</a>, anpassa den efter anställningsform och Byggavtalet och spara dokumentationen. Vill du se hur ByggExp samlar avtal, tidrapportering och fakturering på ett ställe kan du <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag</a> och <a href="/sv/blog/vad-kostar-en-anstalld-byggforetag">Vad kostar en anställd i ett byggföretag?</a></p>
`;

const A_ANSTALLNINGSAVTAL_MALL_BYGG: BlogPost = {
  _id: "code-"+"anstallningsavtal-mall-bygg",
  title: "Anställningsavtal mall för bygg — så gör du rätt enligt LAS", slug: "anstallningsavtal-mall-bygg", locale: "sv",
  excerpt: "Guide till anställningsavtal i bygg: anställningsformer, provanställning, SÄVA-reglerna och vad avtalet måste innehålla enligt LAS §6c — plus gratis mall.", tag: "Anställning",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_ANSTALLNINGSAVTAL_MALL_BYGG_HTML,
  seoTitle: "Anställningsavtal mall bygg | ByggExp", seoDescription: "Anställningsavtal-mall för byggföretag: anställningsformer, provanställning, SÄVA och LAS §6c-kraven efter 2022 års reform. Ladda ner gratis mall.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:15:00.000Z", createdAt: "2026-08-19T05:15:00.000Z", updatedAt: "2026-08-19T05:15:00.000Z",
};

const A_MASTE_HA_KOLLEKTIVAVTAL_BYGG_HTML = `
<p>Ska du anställa din första yrkesarbetare och undrar om du måste teckna kollektivavtal med Byggnads? Kort svar: nej, det finns inget lagkrav i Sverige på att ett byggföretag ska ha kollektivavtal. Du får anställa och driva verksamhet helt utan – det är juridiskt tillåtet. Men frånvaron av lagkrav betyder inte att frågan är ointressant, för det finns flera praktiska och kommersiella skäl att teckna ändå.</p>

<p>Innan du anställer bör du ha ordning på grunderna. Skriv ett korrekt anställningsavtal med <a href="/sv/verktyg/anstallningsavtal-mall">vår gratis anställningsavtal-mall -&gt;</a> så att villkoren är dokumenterade oavsett om du har kollektivavtal eller inte.</p>

<h2>Kort svar: lagen kräver inget – men verkligheten kan göra det</h2>
<p>Att inget lagkrav finns är utgångspunkten. Men tre saker gör att många byggföretag ändå tecknar avtal:</p>
<ul>
<li><strong>Facket kan agera.</strong> Har du anställda utan kollektivavtal kan Byggnads vidta stridsåtgärder – ta ut personal i strejk eller sätta företaget i blockad – för att tvinga fram ett avtal. Det är fackets huvudsakliga påtryckningsmedel just eftersom lag saknas.</li>
<li><strong>Beställare kräver det ofta.</strong> Som underentreprenör kan huvudentreprenören eller beställaren avtalsvägen kräva att du har kollektivavtal, även om lagen inte gör det. Vid större entreprenader och offentlig upphandling är det ofta ett inträdeskrav.</li>
<li><strong>Avtalsförsäkringar följer inte automatiskt.</strong> Utan kollektivavtal saknar du avtalspension och avtalsförsäkringar – något som kan påverka din förmåga att rekrytera och behålla folk.</li>
</ul>

<h2>Vad är ett kollektivavtal – och skillnaden mot hängavtal?</h2>
<p>Ett kollektivavtal är ett avtal mellan arbetsgivarsidan och facket som reglerar löner, försäkringar, arbetstider och yrkesregler för en hel bransch. Det finns två vägar att bindas av ett sådant avtal:</p>
<ol>
<li><strong>Medlemskap i en arbetsgivarorganisation.</strong> Går du med i exempelvis Byggföretagen blir du automatiskt bunden av branschavtalet.</li>
<li><strong>Hängavtal direkt med Byggnads.</strong> Du tecknar ett hängavtal med Byggnads lokala region och förbinder dig att följa samma kollektivavtal – utan att vara medlem i någon arbetsgivarorganisation.</li>
</ol>
<p>Byggavtalet är Byggnads största kollektivavtal och omfattar cirka 100 000 yrkesarbetare. Men det finns fler avtal beroende på vad ditt företag gör: Glasmästeriavtalet, Entreprenadmaskinavtalet, Plåt- och Ventilationsavtalet, Teknikinstallationsavtalet VVS &amp; Kyl, Måleriavtalet, Månadslöneavtalet (Fastigo) och Bemanningsavtalet. Rätt avtal beror på vilket yrke och vilken verksamhet du bedriver – en målerifirma och en VVS-installatör hamnar inte under samma avtal.</p>

<h2>Kan du anställa utan kollektivavtal?</h2>
<p>Ja. Det är fullt lagligt att ha anställda utan att teckna kollektivavtal. Men du behöver känna till vad som ändå gäller:</p>
<ul>
<li><strong>Facket kan sätta press.</strong> Som nämnts kan Byggnads ta till strejk eller blockad för att förmå dig att teckna avtal.</li>
<li><strong>MBL gäller ändå.</strong> Även utan kollektivavtal måste du förhandla med facket enligt medbestämmandelagen om en anställd är fackligt ansluten och frågor uppstår om anställningen.</li>
<li><strong>Grundskyddet finns kvar.</strong> Lagstadgat skydd via Försäkringskassan – sjukdom, arbetsskada, föräldraledighet – gäller alla som bor, arbetar och betalar skatt i Sverige, oavsett kollektivavtal.</li>
<li><strong>Inga avtalsförsäkringar.</strong> Du har ingen skyldighet att teckna tjänstepension eller avtalsförsäkringar – men de uppstår inte heller automatiskt.</li>
</ul>

<h2>Vad innebär det att teckna kollektivavtal eller hängavtal?</h2>
<p>Tecknar du avtal binder du dig till en rad skyldigheter. Lönerna följer Byggavtalet 2025–2027, som gäller 1 maj 2025 till 30 april 2027 och tecknades i maj 2025 mellan Byggnads och Byggföretagen. Avtalet följer märket med totalt 6,4 % löneökning över två år – 3,4 % första året och 3,0 % andra året – och pensionsavsättningen höjs med 0,1 procentenheter per år. Genomsnittslönen anges till 39 775 kr per månad och ökar med cirka 2 504 kr över perioden.</p>
<p>Utöver lön blir du skyldig att teckna avtalsförsäkringar och avtalspension – Avtalspension SAF-LO samt AFA-försäkringar – via Fora. Du betalar premien till Fora, som förmedlar den vidare till AFA Försäkring. Detta är obligatoriskt så snart kollektivavtal eller hängavtal finns. Du binder dig också till avtalets ordnings- och yrkesregler. För att teckna hängavtal kontaktar du Byggnads region där verksamheten finns.</p>

<h2>Utan kollektivavtal – vad gäller för försäkringar och pension?</h2>
<p>Ett företag utan kollektivavtal har ingen lagstadgad skyldighet att teckna tjänstepension eller avtalsförsäkringar. Du kan dock frivilligt teckna ett försäkringsavtal med Fora – men då utan omställningsstöd och omställningsförsäkring, som ingår för den som har kollektivavtal.</p>
<p>Tänk på att förmåner du erbjuder frivilligt är ensidiga utfästelser. De kan ändras eller dras in, till skillnad från kollektivavtalade villkor. Många byggföretag väljer ändå att teckna Fora-avtal frivilligt just för att kunna erbjuda konkurrenskraftig pension och attrahera personal i en bransch där kompetens är svår att hitta.</p>

<h2>Egenföretagare och underentreprenörer</h2>
<p>Är du egenföretagare utan egna anställda omfattas du inte av något krav på kollektivavtal. Men när en byggherre eller huvudentreprenör anlitar dig som UE gäller andra regler på arbetsplatsen. Alla som är fysiskt verksamma på bygget ska registreras i den elektroniska personalliggaren – ett krav från Skatteverket enligt skatteförfarandelagen som hanteras via ID06 och avser individer, inte företag. Huvudentreprenören för dessutom en egen förteckning över anlitade underentreprenörer (UE-lista). Inget av detta anmäls till Byggnads – det är skatte- och entreprenadregler, inte fackliga krav.</p>
<p>Och som underentreprenör kan beställaren kräva att du har kollektivavtal via avtalet, för att slippa egna arbetskonflikter på arbetsplatsen. Vid stora projekt och offentlig upphandling är det därför ofta i praktiken en förutsättning för att över huvud taget få uppdraget – oavsett vad lagen säger.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp tar inte ställning för dig i avtalsfrågan – men vi ser till att din arbetsgivardokumentation är i ordning oavsett hur du väljer. I ByggExp samlar du anställningsavtal, tidrapporter och personaluppgifter på ett ställe, så att du snabbt kan visa villkor och arbetad tid om Byggnads, en beställare eller Skatteverket frågar. Har du kollektivavtal blir det enklare att hålla koll på att rapporterad tid och lön stämmer mot avtalets nivåer. Har du inte det, får du ändå ordning på det lagstadgade – korrekta avtal och spårbar tidredovisning – som gäller alla arbetsgivare i byggbranschen.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag ha kollektivavtal för att anställa i byggbranschen?</h3>
<p>Nej. Det finns inget lagkrav på kollektivavtal i Sverige. Du får anställa och driva byggföretag helt utan – men Byggnads kan vidta stridsåtgärder och beställare kräver ofta avtal vid större uppdrag.</p>
<h3>Vad är skillnaden mellan kollektivavtal och hängavtal?</h3>
<p>Blir du medlem i en arbetsgivarorganisation som Byggföretagen binds du automatiskt av branschavtalet. Ett hängavtal tecknar du direkt med Byggnads region och förbinder dig då att följa samma kollektivavtal utan att vara medlem i arbetsgivarorganisationen.</p>
<h3>Kan Byggnads tvinga mig att teckna avtal?</h3>
<p>Byggnads kan inte tvinga fram ett avtal via lag, men kan använda stridsåtgärder som strejk eller blockad som påtryckning om du har anställda. Det är fackets huvudsakliga verktyg just eftersom lagkrav saknas.</p>
<h3>Måste jag betala tjänstepension utan kollektivavtal?</h3>
<p>Nej, det finns ingen lagstadgad skyldighet. Du kan frivilligt teckna försäkringsavtal med Fora, men då utan omställningsstöd. Det lagstadgade grundskyddet via Försäkringskassan gäller dina anställda oavsett.</p>

<h2>Kom igång</h2>
<p>Oavsett om du tecknar kollektivavtal eller inte behöver varje anställning ett tydligt avtal. Börja med <a href="/sv/verktyg/anstallningsavtal-mall">vår gratis anställningsavtal-mall</a> och få villkoren på plats direkt. Vill du se hur ByggExp håller ordning på avtal, tid och personal? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag</a>, <a href="/sv/blog/anstallningsavtal-mall-bygg">Anställningsavtal mall för bygg</a>, <a href="/sv/blog/arbetstidslagen-bygg">Arbetstidslagen i byggbranschen</a>.</p>
`;

const A_MASTE_HA_KOLLEKTIVAVTAL_BYGG: BlogPost = {
  _id: "code-"+"maste-ha-kollektivavtal-bygg",
  title: "Måste man ha kollektivavtal i byggbranschen?", slug: "maste-ha-kollektivavtal-bygg", locale: "sv",
  excerpt: "Det finns inget lagkrav på kollektivavtal i byggbranschen. Men facket kan vidta stridsåtgärder och beställare kräver ofta avtal – här är vad som faktiskt gäller.", tag: "Arbetsgivare",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_MASTE_HA_KOLLEKTIVAVTAL_BYGG_HTML,
  seoTitle: "Måste bygg ha kollektivavtal? | ByggExp", seoDescription: "Finns det lagkrav på kollektivavtal för byggföretag? Nej – men Byggnads kan agera och beställare kräver det ofta. Så fungerar kollektivavtal, hängavtal och Fora.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T09:03:00.000Z", createdAt: "2026-08-19T09:03:00.000Z", updatedAt: "2026-08-19T09:03:00.000Z",
};

const A_PROVANSTALLNING_BYGG_REGLER_HTML = `
<p>Provanställning är byggföretagets vanligaste sätt att testa en ny yrkesarbetare innan den fasta anställningen. Men reglerna missförstås ofta – särskilt efter LAS-reformen 2022, där många tror att kravet på "sakliga skäl" plötsligt gäller även provanställda. Det gör det inte. Här reder vi ut vad Byggavtalet och LAS faktiskt säger om längd, avbrytande och varsel, så att du inte råkar binda upp dig fel.</p>

<p>Ett tydligt underlag för arbetade timmar gör det enklare att bedöma en provanställd och att dokumentera perioden korrekt – använd gärna vår <a href="/sv/verktyg/tidrapport-mall">gratis tidrapport-mall -&gt;</a> från dag ett.</p>

<h2>Vad är en provanställning – och varför den skiljer sig från tillsvidare</h2>
<p>Syftet med en provanställning är enkelt: både arbetsgivare och arbetstagare ska kunna pröva samarbetet under en begränsad tid utan att binda sig långsiktigt. Det är själva poängen med anställningsformen att den ska vara lätt att avsluta. Varken du som arbetsgivare eller den anställde behöver ange något skäl för att avbryta – till skillnad från en tillsvidareanställning, där det krävs sakliga skäl för uppsägning.</p>
<p>Det viktiga att komma ihåg är att en provanställning inte tar slut av sig själv. Om ingen part agerar övergår den automatiskt i en tillsvidareanställning dagen efter att prövotiden löpt ut. Passivitet leder alltså till fast anställning, inte till att anställningen upphör.</p>

<h2>Hur lång får provanställningen vara?</h2>
<p>Enligt LAS 6 § får en provanställning pågå i högst sex månader. Den tiden är ett tak, inte en rekommendation, och den kan inte förlängas i efterhand. Du kan alltså inte i månad fem bestämma att provperioden ska pågå ytterligare en tid för att du är osäker.</p>
<p>Två saker är dessutom uttryckligen otillåtna:</p>
<ul>
<li>Att förlänga en pågående provanställning utöver sex månader genom att i efterhand komma överens om mer prövotid.</li>
<li>Att lägga en ny provanställning ovanpå en gammal hos samma arbetsgivare för i huvudsak samma arbetsuppgifter – så kallad dubbel provanställning.</li>
</ul>
<p>För vanliga yrkesarbetare följer Byggavtalet LAS här: sex månaders provanställning som kan avbrytas med minst två veckors underrättelse, utan angiven grund. Vissa kollektivavtal tillåter att provperioden räknas om vid längre frånvaro, till exempel föräldraledighet eller sjukdom över 30 dagar, men om det gäller i Byggavtalet måste du kontrollera mot den aktuella avtalstexten – det är ingen generell rätt du kan förutsätta.</p>

<h3>Särregel för lärlingar</h3>
<p>Via Yrkesutbildningsavtalet (YUA) gäller andra tidsgränser för lärlingar. En lärlings provanställning kan pågå upp till tolv månader. För en provanställning som pågår mellan sex och tolv månader måste arbetsgivaren skriftligen underrätta lärlingen och informera BYN-regionen två månader i förväg om att den ska avbrytas. Blanda alltså inte ihop lärlingsreglerna med reglerna för ordinarie yrkesarbetare.</p>

<h2>Att avbryta i förtid – varsel, besked och tidsfrister</h2>
<p>Vill du avbryta provanställningen i förtid, eller avsluta den så att den inte övergår i tillsvidareanställning, ska den anställde enligt LAS 31 § underrättas minst två veckor i förväg. Är personen fackligt organiserad ska du samtidigt varsla den lokala arbetstagarorganisationen. Både den anställde och facket har rätt till överläggning.</p>
<p>Beskedet om att provanställningen upphör ska vara skriftligt och lämnas senast vid prövotidens utgång. Missar du den fristen övergår anställningen automatiskt i tillsvidare. Notera skillnaden mellan parterna: arbetstagaren är inte bunden av någon varseltid. Lagen reglerar inte den anställdes förtida avslut, så en provanställd kan i princip sluta samma dag om ni inte avtalat något annat.</p>
<p>En avtalad uppsägningstid under provanställningen tar som huvudregel inte bort rätten att avbryta i förtid. Rätten att avbryta kvarstår om ni inte uttryckligen har avtalat bort den – något du sällan tjänar på att göra.</p>

<h2>"Sakliga skäl" och LAS – vad gäller egentligen?</h2>
<p>Här sitter det största missförståndet. LAS-reformen som trädde i kraft 1 oktober 2022 bytte formuleringen "saklig grund" mot "sakliga skäl" vid uppsägning av tillsvidareanställda. Den ändringen rörde inte provanställningen. En provanställning kunde aldrig avbrytas mot ett krav på sakliga skäl, och gör det fortfarande inte.</p>
<p>Med andra ord: kravet på sakliga skäl gäller uppsägning av fast anställda, inte avbrytande av en provanställning. Det finns ändå gränser. Avbrytandet får inte vara diskriminerande enligt diskrimineringslagen och det får inte kränka föreningsrätten. Du behöver inte motivera ett avbrytande, men beslutet får inte bottna i ett förbjudet skäl.</p>

<h2>Vad automatisk övergång till tillsvidare innebär</h2>
<p>Glömmer du att lämna skriftligt besked i tid blir den provanställde tillsvidareanställd dagen efter prövotidens slut. Då gäller full uppsägningsrätt: nu krävs sakliga skäl, längre uppsägningstider och eventuellt omplaceringsutredning innan du kan avsluta anställningen. Skillnaden mellan att agera i vecka 24 och att missa den är alltså mycket stor rent juridiskt.</p>
<p>Därför är en kalenderpåminnelse några veckor före prövotidens slut det enskilt viktigaste administrativa greppet. Det ger dig marginal att hinna med både underrättelse och eventuell överläggning innan tiden går ut.</p>

<h2>Checklista för byggföretaget</h2>
<ol>
<li>Skriv ett tydligt anställningsavtal som anger att det är en provanställning och när prövotiden börjar och slutar.</li>
<li>Sätt en påminnelse tre till fyra veckor före prövotidens slut.</li>
<li>Dokumentera löpande – arbetade timmar, närvaro och hur samarbetet fungerar.</li>
<li>Lämna skriftligt besked senast vid prövotidens utgång om anställningen inte ska fortsätta.</li>
<li>Varsla facket samtidigt om den anställde är organiserad, och erbjud överläggning.</li>
<li>Kontrollera Byggavtalets och YUA:s särregler – särskilt om det gäller en lärling.</li>
</ol>
<p>Kom ihåg att en provanställd har rätt till samma lön och villkor som en tillsvidareanställd i motsvarande roll från dag ett. Kollektivavtalets minimilöner gäller fullt ut under hela prövotiden.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte ditt anställningsavtal eller din juridiska rådgivning, men verktyget gör dokumentationen kring en provanställning enklare. Med tidrapporteringen samlar du arbetade timmar per medarbetare och projekt, vilket ger ett konkret underlag när du ska bedöma om en provanställd ska gå vidare till fast anställning. Du får ordning på närvaro och arbetad tid utan lösa papper, och underlaget finns kvar om du senare behöver visa hur perioden sett ut. Själva besluten om avbrytande, varsel och besked hanterar du enligt LAS och Byggavtalet – ByggExp håller ihop faktaunderlaget.</p>

<h2>Vanliga frågor</h2>
<h3>Kan man förlänga en provanställning?</h3>
<p>Nej, inte utöver sex månader och inte i efterhand. LAS 6 § sätter taket till sex månader och du kan inte komma överens om mer prövotid när perioden väl löper. För lärlingar gäller en särregel via YUA där provanställningen kan pågå upp till tolv månader.</p>
<h3>Måste man ange skäl för att avbryta?</h3>
<p>Nej. Varken arbetsgivare eller arbetstagare behöver ange något skäl för att avbryta en provanställning. Kravet på sakliga skäl gäller bara uppsägning av tillsvidareanställda. Avbrytandet får dock inte vara diskriminerande eller föreningsrättskränkande.</p>
<h3>Vad händer om jag glömmer att lämna besked?</h3>
<p>Då övergår provanställningen automatiskt i en tillsvidareanställning dagen efter prövotidens slut. Därefter krävs sakliga skäl och full uppsägningstid för att avsluta anställningen. Skriftligt besked ska lämnas senast vid prövotidens utgång, med underrättelse minst två veckor i förväg.</p>
<h3>Gäller andra regler för lärlingar?</h3>
<p>Ja. Enligt YUA kan en lärlings provanställning pågå upp till tolv månader. Ska den avbrytas när den pågått mellan sex och tolv månader måste arbetsgivaren skriftligen underrätta lärlingen och informera BYN-regionen två månader i förväg.</p>

<h2>Kom igång</h2>
<p>Börja med att sätta upp ordning på arbetad tid från första dagen med vår <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a>, och verifiera alltid detaljerna mot den aktuella avtalstexten i Byggavtalet 2025–2027 innan du fattar beslut om avbrytande. Vill du se hur ByggExp håller ihop tidrapporter och underlag för hela laget? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/anstallningsavtal-mall-bygg">Anställningsavtal för byggföretag – mall och regler</a> och <a href="/sv/blog/anstalla-personal-byggforetag">Så anställer du personal i ditt byggföretag</a>.</p>
`;

const A_PROVANSTALLNING_BYGG_REGLER: BlogPost = {
  _id: "code-"+"provanstallning-bygg-regler",
  title: "Provanställning i byggbranschen – så använder du den rätt enligt Byggavtalet och LAS (2026)", slug: "provanstallning-bygg-regler", locale: "sv",
  excerpt: "En rak guide till hur byggföretag använder provanställning enligt Byggavtalet och LAS – längd, avbrytande, varsel och vad som faktiskt gäller mot kravet på sakliga skäl.", tag: "Arbetsrätt",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_PROVANSTALLNING_BYGG_REGLER_HTML,
  seoTitle: "Provanställning byggavtalet regler | ByggExp", seoDescription: "Provanställning enligt Byggavtalet och LAS: längd, avbrytande, varsel och myten om sakliga skäl. Konkret guide för byggföretag 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T11:15:00.000Z", createdAt: "2026-08-19T11:15:00.000Z", updatedAt: "2026-08-19T11:15:00.000Z",
};

const A_VISSTIDSANSTALLNING_SAVA_BYGG_HTML = `
<p>Det som gör visstidsanställningar riskabla i ett byggföretag är inte att någon säger upp sig – det är att en anställd du trodde var tillfällig plötsligt är fast anställd, utan att du fattat ett enda beslut om det. En särskild visstidsanställning (SÄVA) omvandlas nämligen automatiskt till en tillsvidareanställning när personen har jobbat i SÄVA i mer än 12 månader inom en femårsperiod. Klockan tickar i bakgrunden, och den kan inte avtalas bort. Missar du dagarna har du en fast anställd du kanske inte planerat för – med allt vad det innebär vid nästa svacka i orderboken.</p>

<p>Det enklaste sättet att inte tappa räkningen är att logga varje anställningsperiod per person från dag ett. Använd <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapport-mall →</a> som utgångspunkt och för in start- och slutdatum för varje visstid, så har du underlaget när du behöver räkna dagarna.</p>

<h2>Vad är SÄVA?</h2>
<p>Särskild visstidsanställning ersatte den gamla allmänna visstidsanställningen (ALVA) den 1 oktober 2022 som en del av "nya LAS". Anställningsformen fungerar i grunden likadant: du kan tidsbegränsa en anställning utan att ange något särskilt skäl – till skillnad från vikariat eller säsongsarbete behöver du ingen förklaring. Det passar bra när du tar in extra folk för ett projekt eller för att täcka en tillfällig belastning. Men SÄVA har en inbyggd klocka, och det största som förändrades 2022 var just hur snabbt den klockan går innan anställningen blir permanent.</p>

<h2>12-månadersregeln: när SÄVA blir fast anställning</h2>
<p>Huvudregeln finns i LAS 5 a §. En SÄVA övergår automatiskt till en tillsvidareanställning när arbetstagaren har varit anställd i SÄVA hos dig i mer än 12 månader under en femårsperiod. Omvandlingen sker av sig själv, kräver inget beslut och kan inte avtalas bort mellan dig och den anställde.</p>
<p>Har du lärt dig den gamla regeln behöver du uppdatera din mentala modell: ALVA krävde 24 månader (två år) inom fem år innan omvandling. SÄVA halverade det till 12 månader. Det är den enskilt viktigaste praktiska förändringen för dig som arbetsgivare att hålla reda på – gränsen slår över dubbelt så fort som förr.</p>

<h2>Så räknas dagarna – det som ställer till det</h2>
<p>Hur de tolv månaderna räknas beror på om anställningen är sammanhängande eller inte, och det är här de flesta går vilse. Det finns tre sätt:</p>
<ul>
<li><strong>Sammanhängande anställning som börjar den 1:a i en månad</strong> – då räknas hela kalendermånader.</li>
<li><strong>Sammanhängande anställning som börjar mitt i en månad</strong> – då används lagens tidsberäkning: månaden löper ut samma datum påföljande månad.</li>
<li><strong>Ej sammanhängande anställning (flera perioder med glapp)</strong> – då räknas 360 dagar totalt, där varje månad räknas som 30 dagar (12 × 30 = 360). Omvandlingen inträffar på dag 361.</li>
</ul>
<p>Ett konkret exempel: du tar in en snickare på flera korta SÄVA under ett par år. När hans sammanlagda SÄVA-tid passerar 360 dagar är han fast anställd från och med dag 361 – oavsett att ingen enskild period varit lång, och oavsett att du aldrig skrev något om tillsvidare. Det är summan av dagarna över femårsfönstret som avgör, inte den enskilda kontraktslängden.</p>

<h2>Kedjeregeln och glappen</h2>
<p>Ett vanligt missförstånd är att man kan "nollställa" klockan genom att stapla korta kontrakt med luckor emellan. Det stämmer inte. Har en arbetstagare haft tre eller fler SÄVA som börjat eller slutat inom samma kalendermånad, räknas även tiden i glappen mellan anställningarna som SÄVA-tid. Glapptiden räknas dessutom med om personen under mellanperioden varit anställd hos dig i en annan tidsbegränsad form, till exempel vikariat eller säsong.</p>
<p>Med andra ord: att korta ned kontrakten och lägga in luckor skyddar dig inte. Räknar du bara de "aktiva" dagarna och glömmer glappen och vikariaten kan du ligga långt närmare gränsen än du tror.</p>

<h2>Företrädesrätt redan vid 9 månader</h2>
<p>Innan omvandlingen slår till finns en tidigare fälla. Företrädesrätt till återanställning inträder enligt LAS 25 § när arbetstagaren varit anställd hos dig i mer än 9 månader (270 dagar) under en treårsperiod. Det ligger alltså före 12-månadersgränsen och är lätt att missa.</p>
<p>Konsekvensen: har en tidigare SÄVA-anställd passerat 270 dagar och du sedan nyanställer till en likvärdig tjänst, kan han ha förtur framför en extern kandidat. Håll koll på 9-månadersgränsen separat – den påverkar hur du får rekrytera, inte bara om en anställning omvandlas.</p>

<h2>Kollektivavtalet slår igenom</h2>
<p>Här kommer den viktigaste varningen: förlita dig inte blint på LAS-siffran. Kollektivavtal får avvika från LAS när det gäller tidsbegränsade anställningar, och byggavtalen gör det.</p>
<ul>
<li>Under Byggnadsämnesförbundets avtal tillåts tidsbegränsad anställning (allmän visstid) i upp till 2 år inom en femårsperiod innan omvandling.</li>
<li>Byggföretagens tjänstemannaavtal övergår till tillsvidare efter mer än 3 års fri visstid plus vikariat inom fem år.</li>
<li>Provanställning i byggbranschen får vara i högst 6 månader. Ger ingen part besked innan prövotiden löper ut övergår den automatiskt till en tillsvidareanställning.</li>
</ul>
<p>Det gällande Byggavtalet mellan Byggföretagen och Byggnads löper 2025-05-01 till 2027-04-30 och är alltså det styrande avtalet under 2026. Kolla vilket avtal ditt företag är bundet av innan du planerar en visstidsanställning – tidsgränsen som gäller för just dig kan vara en annan än de 12 månaderna i LAS.</p>

<h2>Så håller du koll i praktiken</h2>
<p>Poängen är att fatta ett aktivt beslut i god tid – förlänga, avsluta i tid eller fast anställa – i stället för att drabbas av en automatisk omvandling. En enkel rutin:</p>
<ol>
<li>Dokumentera start- och slutdatum för varje visstid, per person.</li>
<li>Logga <strong>alla</strong> anställningsformer, även vikariat och säsong, eftersom de kan räknas in i glappen.</li>
<li>Summera dagarna löpande mot både 360-dagarsgränsen och 270-dagarsgränsen.</li>
<li>Sätt en påminnelse i god tid före dag 361 och före 9-månadersgränsen, inte veckan innan.</li>
<li>Stäm av mot ditt kollektivavtal om annan tidsgräns gäller.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ordning på tiden per anställd och projekt, så att underlaget för hur länge någon jobbat inte ligger utspritt i olika kalkylblad. När du samlar tidrapporter och anställningsperioder på ett ställe blir det enkelt att se hur många dagar en visstidsanställd faktiskt loggat och när du behöver fatta beslut. ByggExp ger dig inte juridisk rådgivning och räknar inte automatiskt LAS-gränserna åt dig – men verktyget ger dig det samlade underlaget du behöver för att göra det själv, eller för att stämma av med din arbetsgivarorganisation innan en gräns passeras.</p>

<h2>Vanliga frågor</h2>
<h3>När omvandlas en SÄVA till fast anställning?</h3>
<p>När arbetstagaren har varit anställd i särskild visstidsanställning i mer än 12 månader inom en femårsperiod, enligt LAS 5 a §. Vid ej sammanhängande anställning räknas det som 360 dagar (12 × 30), och omvandlingen sker på dag 361. Övergången är automatisk och kan inte avtalas bort.</p>
<h3>Vad är skillnaden mot den gamla ALVA-regeln?</h3>
<p>ALVA (allmän visstidsanställning) krävde 24 månader inom fem år innan omvandling. SÄVA ersatte ALVA den 1 oktober 2022 och halverade gränsen till 12 månader. Många utgår fortfarande från den gamla tvåårsgränsen, vilket är en vanlig och kostsam felkälla.</p>
<h3>Räknas glappen mellan korta kontrakt in?</h3>
<p>Ja, i vissa fall. Har personen haft tre eller fler SÄVA som börjat eller slutat inom samma kalendermånad räknas mellantiden med. Glapptiden räknas också in om personen under glappet varit anställd i en annan tidsbegränsad form, som vikariat eller säsong. Att stapla korta kontrakt nollställer alltså inte klockan.</p>
<h3>Gäller LAS-gränsen alltid, eller kan kollektivavtalet ändra den?</h3>
<p>Kollektivavtal får avvika från LAS om tidsbegränsade anställningar, och byggavtalen gör det. Under Byggnadsämnesförbundets avtal tillåts till exempel upp till 2 år innan omvandling. Kolla alltid vilket avtal ditt företag är bundet av – LAS-siffran är utgångspunkten, inte hela svaret.</p>

<h2>Kom igång</h2>
<p>Börja med att samla anställningsperioderna på ett ställe. Ladda ner <a href="/sv/verktyg/tidrapport-mall">tidrapport-mallen</a> eller titta i vår samling av <a href="/sv/verktyg">gratis verktyg för byggföretag</a>, och <a href="/sv/contact">boka en demo</a> om du vill se hur ByggExp samlar tid och personaluppgifter i ett flöde.</p>

<p>Relaterat: <a href="/sv/blog/anstallningsavtal-mall-bygg">Anställningsavtal – mall för byggföretag</a>, <a href="/sv/blog/anstalla-personal-byggforetag">Så anställer du personal i byggföretaget</a> och <a href="/sv/blog/uppsagning-arbetsbrist-bygg">Uppsägning på grund av arbetsbrist i byggbranschen</a>.</p>
`;

const A_VISSTIDSANSTALLNING_SAVA_BYGG: BlogPost = {
  _id: "code-"+"visstidsanstallning-sava-bygg",
  title: "Visstidsanställning i byggföretaget: så håller du koll på SÄVA-dagarna", slug: "visstidsanstallning-sava-bygg", locale: "sv",
  excerpt: "En särskild visstidsanställning kan bli en tillsvidareanställning bakom ryggen på dig – här är reglerna som avgör när klockan slår över, och hur du håller koll på dagarna.", tag: "Personal",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_VISSTIDSANSTALLNING_SAVA_BYGG_HTML,
  seoTitle: "Visstidsanställning bygg: SÄVA-regler | ByggExp", seoDescription: "SÄVA blir fast anställning efter mer än 12 månader inom 5 år. Så räknas dagarna, kedjeregeln och företrädesrätten – och hur du undviker automatisk omvandling.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T13:15:00.000Z", createdAt: "2026-08-19T13:15:00.000Z", updatedAt: "2026-08-19T13:15:00.000Z",
};

const A_VADERSTOPP_PERMITTERING_BYGGAVTALET_HTML = `
<p>Vinteravbrott är en normal del av svensk bygg. Kyla, blåst, is och snö gör att arbeten på tak, ställning och betong ibland måste avbrytas. Frågan som skapar mest osäkerhet är inte <em>om</em> arbetet stoppas — utan vem som bär kostnaden. Svaret är avtalsberoende: Byggavtalet reglerar väderstopp, men exakt hur lönen påverkas beror på situationen och på formuleringarna i ditt gällande avtal och eventuella lokala överenskommelser.</p>

<p>Ett bra sätt att hålla ordning på timmar, avbrott och ersättningsgrunder är att logga arbetstiden noggrant redan från start. Använd gärna vår <a href="/sv/verktyg/tidrapport-mall">gratis tidrapport-mall -&gt;</a> för att dokumentera väderavbrott, omfördelad tid och inomhusarbete på ett spårbart sätt.</p>

<h2>Väderstopp vs. permittering — två olika saker</h2>
<p>Först behöver du skilja på tre begrepp som ofta blandas ihop:</p>
<ul>
<li><strong>Väderstopp (väderstillestånd)</strong> — ett kortare avbrott när arbetet inte kan utföras på grund av otjänligt väder. Regleras i Byggavtalets avsnitt 5.3.1. Det här är vad de allra flesta "vinterstopp" handlar om.</li>
<li><strong>Permittering</strong> — en formell åtgärd enligt LAS och avtal där arbetsgivaren tillfälligt tar arbetstagaren ur arbete. Betydligt tyngre process än en kall dag.</li>
<li><strong>Korttidsarbete</strong> — statligt stöttat korttidsarbete som kräver lokalt avtal med facket. Ett verktyg för längre nedgångar, inte för en enskild snödag.</li>
</ul>
<p>En vanlig missuppfattning är att en dålig väderdag automatiskt innebär permittering eller obetald ledighet. Så är det sällan.</p>

<h2>Vad Byggavtalet 5.3.1 säger om otjänligt väder</h2>
<p>Enligt Byggavtalet 5.3.1 ska arbetet avbrytas när det inte kan utföras på grund av otjänligt väder. En arbetstagare som vill avbryta för otjänligt väder eller annat hinder ska anmäla det till arbetsgivaren — men det är <strong>arbetsgivaren som beslutar</strong> om arbetet ska stoppas.</p>
<p>Det finns ingen fast lagstadgad temperaturgräns som tvingar fram ett stopp. Varken arbetsmiljölagen eller AFS anger en lägsta temperatur. I praktiken brukar minus 20°C nämnas som en pratpunkt, men det är en riskbedömning och en bedömningsfråga — inte en hård regel. Bedömningen görs lämpligen tillsammans med skyddsombudet.</p>
<p>Vid oenighet om faran har skyddsombudet dessutom rätt att lägga ett <strong>skyddsombudsstopp</strong> i väntan på beslut från Arbetsmiljöverket. Det är en separat rättslig hävstång, skild från arbetsgivarens väderbeslut enligt 5.3.1.</p>

<h2>Behåller man lönen vid väderstopp?</h2>
<p>Här ligger den avgörande nyansen. Att arbetet stoppas betyder inte per automatik att arbetstagaren går hem obetalt. Närvaroskyldigheten kvarstår: om inte arbetsgivaren uttryckligen släpper hem arbetstagaren ska personen stanna kvar på arbetsplatsen. Därför är "stoppa arbetet" inte samma sak som "gå hem utan lön".</p>
<p>Rätten till lön vid permittering följer av en uttrycklig lagregel. Enligt <strong>LAS 21 §</strong> har en arbetstagare som har permitterats rätt till samma lön och andra anställningsförmåner som om arbetstagaren hade fått behålla sina arbetsuppgifter. Samma paragraf innehåller dock ett viktigt undantag: rätten gäller <em>inte</em> om permitteringen är en följd av att arbetet är säsongbetonat eller till sin natur inte sammanhängande. Just den karaktären kan aktualiseras vid väderberoende byggmoment, så undantaget är inte enbart teoretiskt — men det tillämpas restriktivt. LAS 21 § är dessutom semidispositiv: kollektivavtalet kan justera vad som gäller, dock inte fritt sätta principen ur spel. En arbetsgivare kan därför normalt inte bara sluta betala för att det snöar — men bedömningen måste väga in både lagens säsongsundantag och det egna avtalet.</p>
<p><strong>Friskrivning om belopp:</strong> exakt hur mycket lön som behålls, och vilken grundlönsnivå eller procentsats som gäller vid en formell permittering, är avtalsberoende. Innan du förlitar dig på en viss ersättningsnivå måste du kontrollera den faktiska avtalstexten i det Byggavtal som gäller (nuvarande utgåva löper 2025-05-01 till 2027-04-30) samt eventuell lokal överenskommelse. Gissa inte på kronor eller procent.</p>

<h2>När permittering eller korttidsarbete blir aktuellt</h2>
<p>Vid längre avbrott kan de tyngre verktygen bli aktuella — men de skiljer sig åt:</p>
<ul>
<li><strong>Permittering:</strong> arbetsgivaren beslutar ensidigt vilka som permitteras efter att ha underrättat facket via det förenklade förfarandet. Under permitteringen utgår en reducerad avtalslön (grundlönsnivå), inte full lön. I praktiken är permittering ovanligt i bygg — den ger arbetsgivaren liten reell besparing eftersom utgångspunkten enligt LAS 21 § är att lön och förmåner behålls och avtalet bara delvis kan justera det.</li>
<li><strong>Korttidsarbete:</strong> kräver lokalt avtal med facket och ger delvis statlig ersättning för lönekostnaderna, med ett lönetak på 44 000 kr/månad. Det är åtgärden för en utdragen nedgång — inte för en enskild väderdag.</li>
</ul>
<p>För ett kort vinterstopp är alltså väderstopp enligt 5.3.1 den normala ramen, medan permittering och korttidsarbete hör hemma vid mer långvariga situationer.</p>

<h2>Arbetsgivarens ansvar i kylan</h2>
<p>Reglerna för utomhus- och kylarbete finns numera i Arbetsmiljöverkets föreskrifter om utformning av arbetsplatser (AFS 2023:12), det samlade regelpaketet som gäller från 2025-01-01 och som kräver att utomhusarbetsplatser skyddar arbetstagarna mot väder och vind. Reglerna fanns tidigare i AFS 2009:2 §29 och därefter i AFS 2020:1 (Arbetsplatsens utformning) innan de fördes in i 2023:12 — de äldre lydelserna citeras fortfarande i många artiklar. Konkret innebär arbetsgivarens ansvar i kyla:</p>
<ul>
<li>Tillhandahålla varma ytterkläder och isolerade skor som skyddar mot kyla.</li>
<li>Ordna uppvärmd rast-/värmelokal där personalen kan värma sig, med möjlighet att torka kläder.</li>
<li>Genomföra en riskbedömning tillsammans med skyddsombudet.</li>
</ul>
<p>Personlig skyddsutrustning mot kyla — varma ytterkläder, fodrade byxor och isolerade skor — ska arbetsgivaren tillhandahålla utan kostnad för arbetstagaren. Underställ och strumpor räknas i regel som den anställdes eget ansvar, men om de skyddskläder arbetsgivaren tillhandahåller saknar foder kan arbetsgivaren behöva bekosta även underställ så att kläderna kan användas utan risk för ohälsa.</p>

<h2>Så hanterar du avbrottet praktiskt som arbetsgivare</h2>
<ol>
<li>Dokumentera väderbeslutet — vem beslutade, när och på vilken grund.</li>
<li>Kommunicera tydligt om personalen ska gå hem eller stanna kvar och omfördelas.</li>
<li>Planera inomhusarbete i förväg så att stopptid inte automatiskt blir förlorad lön.</li>
<li>Logga timmarna löpande, inklusive avbrott och omfördelad tid.</li>
<li>Ta kontakt med facket tidigt om ett längre stopp närmar sig.</li>
<li>Läs din specifika avtalstext om permitteringslön <em>innan</em> du förlitar dig på den.</li>
</ol>
<p>Kom också ihåg att ta sig till arbetet i snö och trafikstörningar är arbetstagarens ansvar. En arbetsgivare kan i princip göra löneavdrag för sen ankomst som orsakats av väder eller kollektivtrafik — det är något helt annat än ett arbetsgivarinitierat väderstopp på plats.</p>

<h2>Vanliga misstag att undvika</h2>
<ul>
<li>Att anta att ett väderstopp automatiskt betyder obetald ledighet.</li>
<li>Att skicka hem folk utan att beslutet är tydligt och dokumenterat.</li>
<li>Att tro på en fast temperaturgräns — det finns ingen i lag.</li>
<li>Att blanda ihop permittering med korttidsarbete.</li>
<li>Att luta sig mot en viss permitteringslön utan att ha läst det egna avtalet.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ordning på timmarna när vädret ställer till det. I tidrapporteringen loggar dina anställda arbetad tid, avbrott och omfördelat inomhusarbete på projekt- och personnivå, så att du har ett spårbart underlag när du ska bedöma lön, fakturera kund eller diskutera ett avbrott med facket. ByggExp fattar inga avtalsbeslut åt dig och räknar inte ut permitteringslön — den delen kräver din avtalstext — men systemet ger dig den dokumentation och de timunderlag som besluten vilar på.</p>

<h2>Vanliga frågor</h2>
<h3>Får arbetstagaren behålla lönen vid väderstopp?</h3>
<p>Ofta ja, eftersom närvaroskyldigheten kvarstår tills arbetsgivaren uttryckligen släpper hem personen, och utgångspunkten enligt LAS 21 § är att lön och förmåner behålls vid permittering. Ett undantag finns för säsongbetonat eller icke sammanhängande arbete. Exakt utfall beror på situationen och ditt gällande avtal — kontrollera avtalstexten.</p>
<h3>Finns det en temperaturgräns när bygg måste stoppas?</h3>
<p>Nej. Varken arbetsmiljölagen eller AFS anger en lägsta temperatur. Minus 20°C nämns ibland som pratpunkt, men beslutet är en riskbedömning enligt Byggavtalet 5.3.1, inte en fast gräns.</p>
<h3>Kan jag permittera personal på grund av en kall dag?</h3>
<p>I praktiken sällan. Permittering ger liten besparing eftersom lön och förmåner enligt LAS 21 § till stor del behålls, och ett enskilt väderstopp hanteras normalt via 5.3.1 — inte via formell permittering eller korttidsarbete.</p>
<h3>Vem betalar för vinterkläderna?</h3>
<p>Arbetsgivaren ska utan kostnad tillhandahålla varma ytterkläder och isolerade skor som skyddar mot kyla, samt en uppvärmd värmelokal. Underställ och strumpor är i regel den anställdes eget ansvar — men saknar de tillhandahållna skyddskläderna foder kan arbetsgivaren behöva bekosta även understället så att de kan användas utan risk för ohälsa.</p>

<h2>Kom igång</h2>
<p>Börja med att göra dokumentationen enkel och spårbar. Ladda ner vår <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> för att logga avbrott och omfördelad tid, eller <a href="/sv/contact">boka en demo</a> så visar vi hur ByggExp ger dig timunderlagen du behöver när vädret ställer till det.</p>

<p><em>Detta är allmän vägledning, inte juridisk rådgivning. Väderstopp regleras i Byggavtalet 5.3.1, men löneutfallet beror på ditt exakta avtal och den konkreta situationen — verifiera alltid aktuell avtalstext och stäm av med Byggföretagen eller facket.</em></p>

<p>Relaterat: <a href="/sv/blog/korttidsarbete-permittering-byggforetag">Korttidsarbete och permittering i byggföretag</a>, <a href="/sv/blog/maste-ha-kollektivavtal-bygg">Kollektivavtal i byggbranschen</a>, <a href="/sv/blog/franvaro-i-byggforetag">Frånvaro i byggföretag</a>.</p>
`;

const A_VADERSTOPP_PERMITTERING_BYGGAVTALET: BlogPost = {
  _id: "code-"+"vaderstopp-permittering-byggavtalet",
  title: "Väderstopp och permittering enligt Byggavtalet", slug: "vaderstopp-permittering-byggavtalet", locale: "sv",
  excerpt: "Kyla, is och snö stoppar bygget – men vem bär kostnaden? Så skiljer du väderstopp, permittering och korttidsarbete, och vad lagen säger om lönen.", tag: "Arbetsrätt",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_VADERSTOPP_PERMITTERING_BYGGAVTALET_HTML,
  seoTitle: "Väderstopp och permittering i bygg | ByggExp", seoDescription: "Vem betalar vid väderstopp i bygg? Så funkar Byggavtalet 5.3.1, lönerätt enligt LAS 21 § och skillnaden mot permittering och korttidsarbete.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T10:03:00.000Z", createdAt: "2026-08-20T10:03:00.000Z", updatedAt: "2026-08-20T10:03:00.000Z",
};

export const PERSONAL_ARTICLES: BlogPost[] = [
  BEMANNING,
  FRANVARO,
  ANSTALLA,
  A_INHYRD_PERSONAL_REGLER,
  A_ARBETSTIDSLAGEN_BYGG,
  A_ANSTALLNINGSAVTAL_MALL_BYGG,
  A_MASTE_HA_KOLLEKTIVAVTAL_BYGG,
  A_PROVANSTALLNING_BYGG_REGLER,
  A_VISSTIDSANSTALLNING_SAVA_BYGG,
  A_VADERSTOPP_PERMITTERING_BYGGAVTALET,
];
