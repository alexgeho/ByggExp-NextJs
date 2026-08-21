import type { BlogPost } from '../../types/blog';
import { SITE_URL } from './site-url';

const AMP_HTML = `
<p>En arbetsmiljöplan (AMP) är inte bara en pärm som ska finnas – den är ofta ett lagkrav, och saknas den när Arbetsmiljöverket kommer på besök kan det bli sanktionsavgift. Här är när en AMP krävs, vad den ska innehålla och vem som ansvarar (byggherre, BAS-P och BAS-U).</p>
<p><a href="/sv/verktyg/skyddsrond-mall">Skapa ett skyddsrondsprotokoll med vår gratis mall (PDF & Excel) -&gt;</a></p>

<h2>Vad är en arbetsmiljöplan (AMP)?</h2>
<p>En arbetsmiljöplan är ett dokument som beskriver hur arbetsmiljön ska hanteras på en byggarbetsplats: vilka risker som finns, vilka regler som gäller och vilka åtgärder som ska vidtas. Reglerna finns i Arbetsmiljöverkets föreskrifter <strong>AFS 2023:3</strong> (som ersatt den tidigare strukturen).</p>

<h2>När krävs en arbetsmiljöplan?</h2>
<p>En AMP krävs i två situationer:</p>
<ul>
<li><strong>Arbete med särskild risk</strong> enligt kap 11 §12 i AFS 2023:3 – till exempel risk för fall från höjd, arbete i schakt, rivning av bärande konstruktioner eller arbete med asbest. Då krävs en AMP <strong>från dag ett</strong>, oavsett projektets storlek.</li>
<li><strong>När förhandsanmälan krävs</strong> – arbete som pågår längre än 30 arbetsdagar med fler än 20 personer samtidigt, eller mer än 500 persondagar totalt.</li>
</ul>
<p>Som tumregel bör en arbetsmiljöplan finnas på plats innan bygget startar.</p>

<h2>Vem ansvarar – byggherre, BAS-P och BAS-U?</h2>
<ul>
<li><strong>Byggherren</strong> har det övergripande ansvaret och utser byggarbetsmiljösamordnare.</li>
<li><strong>BAS-P</strong> (samordnare för planering och projektering) ansvarar för att upprätta arbetsmiljöplanen.</li>
<li><strong>BAS-U</strong> (samordnare för utförande) ansvarar för att AMP:n hålls aktuell och uppdateras under byggets gång.</li>
</ul>

<h2>Vad ska en arbetsmiljöplan innehålla?</h2>
<ul>
<li>De regler som ska tillämpas på arbetsplatsen</li>
<li>Beskrivning av arbeten med särskild risk och åtgärder för dem</li>
<li>Hur arbetsmiljöarbetet organiseras (ansvar, rutiner)</li>
<li>Gemensamma skyddsåtgärder, ordning och tillträde</li>
<li>Uppdateras löpande när nya risker eller moment tillkommer</li>
</ul>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Skapa AMP:n och glömma den.</strong> Den ska hållas aktuell under hela projektet – det är BAS-U:s ansvar.</li>
<li><strong>Generisk mall utan projektets risker.</strong> Planen ska spegla de faktiska riskerna på just den arbetsplatsen.</li>
<li><strong>Otydliga roller.</strong> BAS-P och BAS-U ska vara utsedda och kända.</li>
<li><strong>Ingen koppling till egenkontroll.</strong> Kontroller och åtgärder bör dokumenteras löpande – se <a href="/sv/blog/egenkontroll">egenkontroll</a>.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>När måste man ha en arbetsmiljöplan?</h3>
<p>Vid arbete med särskild risk (kap 11 §12 AFS 2023:3) krävs den från dag ett, och när förhandsanmälan krävs (över 30 dagar med fler än 20 personer, eller över 500 persondagar).</p>
<h3>Vem upprättar arbetsmiljöplanen?</h3>
<p>BAS-P upprättar planen; BAS-U håller den aktuell under utförandet. Byggherren har det övergripande ansvaret.</p>
<h3>Vad är skillnaden mellan BAS-P och BAS-U?</h3>
<p>BAS-P samordnar arbetsmiljön i planering och projektering; BAS-U samordnar under utförandet på plats.</p>

<h2>Kom igång</h2>
<p>Håll arbetsmiljön, kontroller och dokumentation samlat och aktuellt. <a href="/sv/blog/egenkontroll">Läs om egenkontroll och KMA</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll och KMA</a> · <a href="/sv/blog/personalliggare">Personalliggare</a></p>
`.trim();

const AMP: BlogPost = {
  _id: 'code-arbetsmiljoplan',
  title: 'Arbetsmiljöplan (AMP) – när krävs den och vem ansvarar',
  slug: 'arbetsmiljoplan',
  locale: 'sv',
  excerpt:
    'När krävs en arbetsmiljöplan, vad ska den innehålla och vem ansvarar (byggherre, BAS-P, BAS-U)? Guide enligt AFS 2023:3 – med särskild risk och förhandsanmälan.',
  tag: 'Arbetsmiljö',
  coverImageUrl: '/landing/features/3personal.webp',
  contentHtml: AMP_HTML,
  seoTitle: 'Arbetsmiljöplan (AMP) – krav, BAS-P & BAS-U | ByggExp',
  seoDescription:
    'När krävs en arbetsmiljöplan (AMP) enligt AFS 2023:3? Särskild risk, förhandsanmälan, vad den ska innehålla och ansvar för byggherre, BAS-P och BAS-U.',
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T15:30:00.000Z',
  createdAt: '2026-08-12T15:30:00.000Z',
  updatedAt: '2026-08-12T15:30:00.000Z',
};

const HETA_ARBETEN_HTML = `
<p>Heta arbeten är en av de vanligaste orsakerna till bränder på arbetsplatser – och ett moment där försäkringsbolagen ställer hårda krav. Saknas rätt certifikat eller brandvakt kan försäkringen sättas ur spel. Här är vad heta arbeten är, vilka roller som krävs och vad som gäller kring certifikat och tillstånd.</p>
<figure class="article-diagram"><img src="/landing/diagrams/heta-arbeten.webp" alt="Diagram: heta arbeten – rollerna tillståndsansvarig, hetarbetare och brandvakt" width="720" height="380" loading="lazy"><figcaption>Tre roller med giltig behörighet: tillståndsansvarig utfärdar tillstånd, hetarbetaren utför och brandvakten bevakar – även efter avslutat arbete.</figcaption></figure>

<h2>Vad är heta arbeten?</h2>
<p>Heta arbeten är tillfälliga arbeten som utförs på en tillfällig arbetsplats och som medför brandfara – till exempel svetsning, skärning, lödning, arbete med rondell eller andra verktyg som alstrar värme eller gnistor. Eftersom risken för brand är påtaglig finns särskilda säkerhetsregler och krav på behörighet.</p>

<h2>Certifikat och försäkringskrav</h2>
<ul>
<li>Ett certifikat <strong>Heta Arbeten®</strong> är giltigt i <strong>5 år</strong> från godkänd certifiering.</li>
<li>Försäkringsbolagen kräver att den som utför heta arbeten, är brandvakt eller utfärdar tillstånd har <strong>giltigt certifikat</strong>.</li>
<li>Certifikaten ska kunna styrkas <strong>innan arbetet påbörjas</strong>.</li>
</ul>

<h2>Rollerna: tillståndsansvarig, hetarbetare och brandvakt</h2>
<ul>
<li><strong>Tillståndsansvarig</strong> – utfärdar tillstånd, bedömer risken och ställer krav på skyddsåtgärder. Behöver utbildning och praktisk erfarenhet av brandskydd.</li>
<li><strong>Hetarbetare (utförare)</strong> – den som utför det heta arbetet.</li>
<li><strong>Brandvakt</strong> – bevakar brandrisken under och efter arbetet.</li>
</ul>
<p>Samtliga ska ha giltigt certifikat. Det finns ett undantag: den som är tillståndsansvarig vid högst tre tillfällen under en tolvmånadersperiod kan undantas från kravet på personcertifikat.</p>

<h2>Så går det till i praktiken</h2>
<ol>
<li>Tillståndsansvarig bedömer risken och utfärdar ett skriftligt tillstånd med villkor.</li>
<li>Skyddsåtgärder ordnas – släckutrustning, rensning av brännbart material, m.m.</li>
<li>Hetarbetaren utför arbetet, brandvakten bevakar.</li>
<li>Efterbevakning görs enligt tillståndet innan platsen lämnas.</li>
</ol>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Ogiltigt certifikat.</strong> Kolla giltigheten (5 år) innan arbetet – annars kan försäkringen falla.</li>
<li><strong>Ingen brandvakt.</strong> Bevakning under och efter arbetet är ett krav, inte en formalitet.</li>
<li><strong>Muntligt tillstånd.</strong> Tillståndet ska vara skriftligt med tydliga villkor.</li>
<li><strong>Ingen efterbevakning.</strong> Många bränder startar efter att arbetet avslutats.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Hur länge gäller ett Heta Arbeten-certifikat?</h3>
<p>Fem år från godkänd certifiering. Därefter behöver det förnyas.</p>
<h3>Vilka behöver certifikat?</h3>
<p>Tillståndsansvarig, hetarbetare och brandvakt ska ha giltigt certifikat, och det ska kunna styrkas innan arbetet börjar.</p>
<h3>Måste tillståndet vara skriftligt?</h3>
<p>Ja. Tillståndsansvarig utfärdar ett skriftligt tillstånd med villkor och skyddsåtgärder.</p>

<h2>Kom igång</h2>
<p>Håll koll på behörigheter, tillstånd och arbetsmiljö på ett ställe. Använd vår gratis <a href="/sv/verktyg/riskbedomning-mall">mall för riskbedömning</a>, <a href="/sv/blog/arbetsmiljoplan">läs om arbetsmiljöplan</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan (AMP)</a> · <a href="/sv/blog/egenkontroll">Egenkontroll och KMA</a></p>
`.trim();

const HETA_ARBETEN: BlogPost = {
  _id: 'code-heta-arbeten',
  title: 'Heta arbeten – certifikat, tillståndsansvarig och brandvakt',
  slug: 'heta-arbeten',
  locale: 'sv',
  excerpt:
    'Vad heta arbeten är, försäkringskraven, certifikatets giltighet (5 år) och rollerna tillståndsansvarig, hetarbetare och brandvakt – plus vanliga misstag.',
  tag: 'Arbetsmiljö',
  coverImageUrl: '/landing/features/6verktyg.webp',
  contentHtml: HETA_ARBETEN_HTML,
  seoTitle: 'Heta arbeten – certifikat, tillstånd & brandvakt | ByggExp',
  seoDescription:
    'Heta arbeten: certifikat Heta Arbeten® (5 år), försäkringskrav, rollerna tillståndsansvarig, hetarbetare och brandvakt, skriftligt tillstånd och efterbevakning.',
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T17:30:00.000Z',
  createdAt: '2026-08-12T17:30:00.000Z',
  updatedAt: '2026-08-12T17:30:00.000Z',
};

const ARBMILJO_HTML = `
<p>Det finns en seglivad missuppfattning i branschen: att du som ensamföretagare eller familjeföretagare utan anställda på något sätt <em>slipper</em> arbetsmiljöansvaret på bygget. Det stämmer inte. När du utför byggnads- och anläggningsarbete omfattas du av i praktiken samma byggregler som en arbetsgivare med hundra anställda. Sedan Arbetsmiljöverkets nya regelstruktur trädde i kraft den 1 januari 2025 har dessutom hänvisningarna ändrats – och gamla mallar kan peka på föreskrifter som inte längre gäller. Här går vi igenom vad du faktiskt ansvarar för som egenföretagare på bygget 2026, och hur du dokumenterar det så att det håller vid en olycka eller en kontroll.</p>

<p>Ett bra första steg är att strukturera din egen dokumentation från start – ladda ner <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a> och använd den som grund för varje uppdrag.</p>

<h2>Kort om lagen – vad ändrades 1 januari 2025</h2>
<p>Den 1 januari 2025 gick Arbetsmiljöverket över till en helt ny regelstruktur. 67 tidigare föreskrifter ersattes av 15 nya. För dig som arbetar på bygget är det främst två som gäller: <strong>AFS 2023:3</strong> om projektering och byggarbetsmiljösamordning, som innehåller de grundläggande skyldigheterna, samt <strong>AFS 2023:13</strong> om risker vid vissa typer av arbeten, där kapitlet om byggnads- och anläggningsarbete finns. Den gamla AFS 1999:3, som många i branschen känner till utantill, är upphävd. Innehållet lever i stort vidare, men paragrafhänvisningar och kapitelnummer är nya. Har du egna checklistor, riskbedömningsmallar eller arbetsmiljöplaner som hänvisar till gamla AFS-nummer bör du uppdatera dem – annars riskerar du att luta dig mot text som inte längre är giltig.</p>

<h2>Har du som ensamföretagare arbetsmiljöansvar? Ja</h2>
<p>Kärnan finns i arbetsmiljölagen 3 kap. 5 §: den som ensam eller tillsammans med familjemedlem driver verksamhet är skyldig att följa reglerna om tekniska anordningar och farliga ämnen, och att inte utsätta andra för risk på ett gemensamt arbetsställe. Reglerna om byggnads- och anläggningsarbete i AFS 2023:13 gäller för <strong>alla aktörer</strong> på bygget – även ensam- och familjeföretagare. I praktiken har du tre kärnplikter:</p>
<ul>
<li><strong>Riskbedöm ditt eget arbete</strong> innan du börjar.</li>
<li><strong>Vidta förebyggande åtgärder</strong> mot de risker du identifierat.</li>
<li><strong>Skada inte andra</strong> – ditt arbete får inte skapa olycksrisk för dem som rör sig på den gemensamma byggarbetsplatsen.</li>
</ul>
<p>En viktig nyansering: du behöver inte bedriva fullt systematiskt arbetsmiljöarbete (SAM) på samma sätt som en arbetsgivare, eftersom SAM-kraven riktar sig mot arbetsgivare med anställda. Men det betyder inte att du är fri från dokumentation – på bygget uppstår kraven ändå, via riskbedömning, arbetsmiljöplan och samordningen med Bas-U.</p>

<h2>På den gemensamma byggarbetsplatsen – ditt ansvar mot Bas-U och andra</h2>
<p>Så snart det finns fler entreprenörer på plats blir bygget ett gemensamt arbetsställe, och då tillkommer ett samordningsansvar. På en fast byggarbetsplats sköts det av Bas-U (byggarbetsmiljösamordnare för utförandet). Som egenföretagare och underentreprenör har du flera konkreta skyldigheter gentemot Bas-U och de andra på plats:</p>
<ul>
<li><strong>Samråda</strong> med övriga entreprenörer om arbetet.</li>
<li><strong>Följa Bas-U:s anvisningar</strong> och de ordnings- och skyddsregler som gäller på arbetsplatsen.</li>
<li><strong>Lämna information till Bas-U</strong> om de risker ditt arbete skapar för andra, och särskilt om du ska utföra något av arbetena med särskild risk.</li>
<li><strong>Vänta på klartecken</strong> från Bas-U innan du startar ett riskfyllt moment.</li>
</ul>
<p>Här gör många fel: man tror att eftersom det finns en Bas-U så ligger allt arbetsmiljöansvar där. Så är det inte. Bas-U:s samordningsansvar <strong>fråntar inte</strong> dig ditt eget arbetsmiljöansvar för det arbete du själv utför. Samordningen lägger sig ovanpå ditt ansvar – den ersätter det inte.</p>

<h2>När krävs arbetsmiljöplan – även för en enmansfirma</h2>
<p>En arbetsmiljöplan (AMP) krävs nästan alltid, även i små projekt där bara en ensamföretagare är verksam. Kravet slår till om <strong>något</strong> av arbetena med särskild risk förekommer, <strong>eller</strong> om projektets storlek gör att förhandsanmälan krävs. Bland de arbeten med särskild risk (AFS 2023:3) som är vanligast för hantverkare finns:</p>
<ul>
<li>fall till lägre nivå där nivåskillnaden är två meter eller mer</li>
<li>tunga byggelement som ska monteras eller demonteras</li>
<li>risk att begravas under jordmassor eller rasrisk</li>
<li>arbete med kemiska eller biologiska ämnen</li>
<li>arbete nära passerande fordonstrafik</li>
</ul>
<p>Rollfördelningen är tydlig: Bas-P upprättar planen under projekteringen, Bas-U håller den uppdaterad under utförandet, och byggherren ansvarar för att den finns och är tillgänglig på arbetsplatsen. Din uppgift som egenföretagare är att läsa planen, följa den och kvittera att du tagit del av den.</p>

<h2>Förhandsanmälan och sanktionsavgifter du bör känna till</h2>
<p>Byggherren är skyldig att göra en förhandsanmälan till Arbetsmiljöverket när arbetet beräknas pågå längre än 30 arbetsdagar och mer än 20 personer sysselsätts samtidigt vid något tillfälle, <strong>eller</strong> när det totala antalet persondagar beräknas bli fler än 500. Även om detta är byggherrens ansvar påverkar det dig, eftersom förhandsanmälan i sin tur utlöser AMP-kravet. Sanktionsavgifterna är kännbara: utebliven förhandsanmälan kan leda till sanktionsavgift. Saknas arbetsmiljöplanen, eller är den inte tillgänglig, blir avgiften 50 000 kr i projekt som kräver förhandsanmälan och annars 10 000 kr. Ingen avgift tas ut om hela bygg- eller anläggningsarbetet pågår i högst två dagar i följd.</p>

<h2>Personalliggare 2026 – gäller det dig?</h2>
<p>Elektronisk personalliggare krävs när den sammanlagda bygg- och materialkostnaden överstiger 4 prisbasbelopp. Prisbasbeloppet för 2026 är fastställt till 59 200 kr, vilket ger gränsen <strong>236 800 kr</strong>. Undantag gäller när byggherren är privatperson och bygger för privat bruk. Uppgifterna – namn, personnummer samt in- och utcheckningstider – ska föras dagligen, sparas i 2 år och kunna visas vid en oanmäld kontroll från Skatteverket. Varje entreprenör för sin egen del av liggaren, så du för din. Notera att det inte finns något lagkrav på just ID06; lagen säger bara att uppgifterna ska vara elektroniska och korrekta – systemvalet är fritt. ID06 är dock den dominerande branschstandarden och det de flesta beställare förväntar sig.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att samla arbetsmiljödokumentationen på ett ställe i stället för i lösa papper och mobilbilder. Med <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> bygger du en riskbedömning per uppdrag och sparar den som PDF, klar att visa upp för beställare, Bas-U eller vid en inspektion. Du kan dokumentera egenkontroll av utrustning, ställningar och fallskydd, kvittera att du tagit del av arbetsmiljöplanen, och lägga undan Bas-U:s anvisningar och klartecken kopplat till rätt projekt. Poängen är spårbarhet: när något händer eller någon frågar kan du visa vad du bedömde och vad du gjorde. ByggExp ersätter inte ditt omdöme på bygget, men gör det enkelt att få dokumentationen gjord och sparad.</p>

<h2>Praktisk checklista – så dokumenterar du ditt ansvar</h2>
<ol>
<li>Gör en egen riskbedömning för varje uppdrag innan du börjar.</li>
<li>Läs och kvittera arbetsmiljöplanen samt ordnings- och skyddsreglerna.</li>
<li>Spara Bas-U:s anvisningar och klartecken för riskfyllda moment.</li>
<li>Dokumentera egenkontroll av utrustning, ställningar och fallskydd.</li>
<li>För personalliggare för din del om projektet omfattas.</li>
<li>Rapportera tillbud och olyckor – och spara det du rapporterat.</li>
</ol>

<h2>Vanliga frågor</h2>
<h3>Har en enmansfirma arbetsmiljöansvar på bygget?</h3>
<p>Ja. När du utför byggnads- och anläggningsarbete gäller reglerna i AFS 2023:13 för alla aktörer, även ensam- och familjeföretagare. Enligt arbetsmiljölagen 3 kap. 5 § ska du riskbedöma ditt eget arbete, vidta åtgärder och inte utsätta andra på det gemensamma arbetsstället för risk.</p>
<h3>Måste ensamföretagare ha arbetsmiljöplan?</h3>
<p>En arbetsmiljöplan krävs om något av arbetena med särskild risk förekommer, eller om projektets storlek kräver förhandsanmälan – och det gäller även när bara en ensamföretagare är verksam. Bas-P upprättar planen, Bas-U uppdaterar den och byggherren ansvarar för att den finns tillgänglig.</p>
<h3>Behöver jag personalliggare som egenföretagare 2026?</h3>
<p>Ja, om den sammanlagda bygg- och materialkostnaden överstiger 4 prisbasbelopp, vilket 2026 motsvarar 236 800 kr. Undantag gäller när byggherren är privatperson som bygger för privat bruk. Uppgifterna ska föras dagligen, sparas i 2 år och kunna visas vid oanmäld kontroll.</p>
<h3>Måste jag följa Bas-U om jag är underentreprenör?</h3>
<p>Ja. Du ska samråda med övriga entreprenörer, följa Bas-U:s anvisningar, informera om risker ditt arbete skapar och invänta klartecken innan riskfyllda moment startar. Bas-U:s samordningsansvar tar däremot inte bort ditt eget arbetsmiljöansvar för det arbete du utför.</p>

<h2>Kom igång</h2>
<p>Du har fullt arbetsmiljöansvar även som soloföretagare – och rätt dokumentation skyddar dig både vid en olycka och vid en kontroll. Kom igång med <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> och bygg en riskbedömning för ditt nästa uppdrag. Vill du se hur du samlar all arbetsmiljödokumentation i ett system? <a href="/sv/contact">Boka en demo</a> så visar vi hur det fungerar i praktiken.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoplan">Så upprättar du en arbetsmiljöplan</a> och <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt – så gör du</a>.</p>
`.trim();

const ARBMILJO: BlogPost = {
  _id: "code-"+"arbetsmiljoansvar-egenforetagare",
  title: "Arbetsmiljöansvar för egenföretagare på bygget – vad gäller 2026",
  slug: "arbetsmiljoansvar-egenforetagare",
  locale: "sv",
  excerpt: "Tror du att en enmansfirma slipper arbetsmiljöansvar på bygget? Så ser reglerna ut 2026 – och så dokumenterar du ditt ansvar rätt.",
  tag: "Arbetsmiljö",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp",
  contentHtml: ARBMILJO_HTML,
  seoTitle: "Arbetsmiljöansvar egenföretagare | ByggExp",
  seoDescription: "Som ensamföretagare på bygget har du fullt arbetsmiljöansvar. Så gäller reglerna 2026 – riskbedömning, arbetsmiljöplan, Bas-U och dokumentation.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-18T12:30:00.000Z",
  createdAt: "2026-08-18T12:30:00.000Z",
  updatedAt: "2026-08-18T12:30:00.000Z",
};

const BASPBASU_HTML = `
<p>Byggherren måste utse en BAS-P och en BAS-U för varje bygg- eller anläggningsarbete – men vad är egentligen skillnaden? Kort svar: BAS-P samordnar arbetsmiljön i projekteringen, BAS-U samordnar den i utförandet, och byggherren utser båda men blir aldrig helt av med sitt eget ansvar. För dig som driver ett mindre byggföretag är det just den sista meningen som gör att en till synes enkel underskrift kan bli dyr.</p>

<p>Grunden i samordningen är dokumentation – att arbetsmiljöplanen lever och att egenkontrollerna faktiskt görs. Ett enkelt sätt att komma igång är med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a> som du kan använda direkt på arbetsplatsen.</p>

<h2>Snabbsvaret – skillnaden mellan BAS-P och BAS-U</h2>
<p>Bokstaven avslöjar var i projektet rollen sitter. BAS-P står för Byggarbetsmiljösamordnare för <strong>Planering och projektering</strong> – ritbordsfasen. BAS-U står för samordnare för <strong>Utförandet</strong> – den bemannade byggarbetsplatsen. Så här hänger kedjan ihop:</p>
<ul>
<li><strong>Byggherren</strong> – beställer arbetet, utser båda samordnarna, avsätter tid och resurser och följer upp.</li>
<li><strong>BAS-P</strong> – samordnar projektörerna, bygger bort förutsebara risker och <strong>upprättar arbetsmiljöplanen</strong> innan bygget startar.</li>
<li><strong>BAS-U</strong> – tar över på plats, håller arbetsmiljöplanen uppdaterad mot verkligheten och samordnar alla som arbetar samtidigt.</li>
</ul>
<p>BAS-P lämnar alltså över ett underlag; BAS-U förvaltar och uppdaterar det när grävmaskinen väl är på plats.</p>

<h2>Byggherrens roll – kedjan börjar och slutar här</h2>
<p>Enligt Arbetsmiljölagen 3 kap. 6 § är byggherren skyldig att utse en <em>lämplig</em> BAS-P och en <em>lämplig</em> BAS-U. Att peka ut en samordnare befriar dock inte byggherren från ansvar. Byggherren måste fortfarande organisera resurser, ge projektet tillräckligt med tid, klargöra vem som gör vad, följa upp samordnarnas arbete och se till att arbetsmiljöplanen lämnas över korrekt.</p>
<p>Byggherren ansvarar också för <strong>förhandsanmälan</strong> till Arbetsmiljöverket. Den ska skickas innan arbetet påbörjas om antingen jobbet beräknas pågå mer än 30 arbetsdagar med fler än 20 personer sysselsatta samtidigt någon gång, eller om det totalt beräknas överstiga 500 persondagar.</p>

<h2>BAS-P i projekteringen – bygga bort riskerna på ritbordet</h2>
<p>BAS-P:s uppdrag regleras i AML 3 kap 7 a § och i 3 kap AFS 2023:3. Uppgifterna handlar om att förebygga innan spaden sätts i marken:</p>
<ul>
<li>Samordna projektörernas arbete så att arbetsmiljön i både bygg- och driftskedet vägs in.</li>
<li>Se till att förutsebara risker konstrueras bort redan i projekteringen.</li>
<li>Upprätta arbetsmiljöplanen och identifiera om något av de 13 <strong>särskilt farliga arbetena</strong> förekommer.</li>
</ul>
<p>Till de särskilt farliga arbetena hör bland annat fallrisk där höjdskillnaden är 2 meter eller mer, arbete nära högspänningsledningar, rivning av bärande konstruktioner, arbete med asbest eller andra farliga material, arbete i schakt och tunnlar, drunkningsrisk och arbete med sprängämnen. Förekommer något av dem måste en arbetsmiljöplan finnas innan arbetsplatsen etableras – oavsett projektets storlek.</p>

<h2>BAS-U i utförandet – samordning på plats</h2>
<p>BAS-U:s uppdrag regleras i AML 3 kap 7 b § och i 4 kap AFS 2023:3. Här handlar det om den levande arbetsplatsen:</p>
<ul>
<li>Hålla arbetsmiljöplanen uppdaterad mot de faktiska förhållandena.</li>
<li>Förhindra farliga samtidiga arbeten – att en aktör inte utsätter en annan för risk.</li>
<li>Organisera gemensamma skyddsanordningar som ställningar, hissar och trafikleder.</li>
<li>Genomföra skyddsronder, arbetsmiljöintroduktioner och samverka med skyddsombud.</li>
</ul>
<p>Viktigt: BAS-U:s samordning tar inte över varje enskild entreprenörs eget arbetsmiljöansvar för sina egna anställda. Samordnarrollen och arbetsgivarrollen löper parallellt – som underentreprenör ansvarar du fortfarande för dina egna medarbetare.</p>

<h2>Kompetenskrav – räcker en tvådagarskurs?</h2>
<p>Det finns ingen lagstadgad, obligatorisk kurs för att bli BAS-P eller BAS-U. Däremot måste samordnaren ha den utbildning, kompetens och erfarenhet som krävs i förhållande till projektets storlek, komplexitet och risknivå – och byggherren ska kunna styrka det, till exempel med intyg. Det finns inget exakt lagkrav på utbildningens längd, men det är just vägledning och inte ett lagkrav. Ett litet renoveringsjobb och ett komplext anläggningsprojekt ställer helt olika krav.</p>

<h2>Fällan för småföretag – när du tar samordnarrollen på pappret</h2>
<p>Här sitter de flesta problemen för mindre byggföretag. Det finns två vanliga fällor:</p>
<ol>
<li><strong>Du skriver under fel avtal.</strong> Enligt AML 3 kap 7 c § kan byggherrens 6 §-skyldigheter överföras till en uppdragstagare – men bara om två villkor är uppfyllda: du har anlitats för att självständigt sköta projekteringen eller utförandet, <em>och</em> det avtalas skriftligt att ansvaret går över. Saknas det skriftliga avtalet, eller är du inte verkligt självständig, stannar ansvaret hos byggherren. Baksidan är att ett tydligt formulerat avtal kan flytta hela byggherreansvaret till dig utan att du fattat vidden av det.</li>
<li><strong>Du står som BAS-U utan förutsättningar.</strong> Att ta samordnaransvaret utan tid, personal eller dokumenterad kompetens innebär att du bär ett ansvar du inte kan leva upp till – och det är på arbetsplatsen olyckorna sker.</li>
</ol>

<h2>Sanktionsavgifter och personligt ansvar</h2>
<p>AFS 2023:3, som gäller sedan 1 januari 2025 , är förenad med konkreta sanktionsavgifter:</p>
<ul>
<li>Utebliven förhandsanmälan: <strong>5 000 kr</strong>.</li>
<li>Utebliven arbetsmiljöplan: <strong>10 000 kr</strong> när förhandsanmälan inte krävs, och <strong>50 000 kr</strong> när den krävs.</li>
</ul>
<p>Avgiften för arbetsmiljöplanen kan tas ut <em>separat</em> på byggherren, på BAS-P och på BAS-U. Med andra ord kan du som samordnare drabbas personligen, parallellt med byggherren. Ingen avgift tas ut om hela arbetet pågår i högst två sammanhängande dagar. Vid en allvarlig olycka kan det dessutom bli fråga om straffansvar – sanktionsavgiften är bara golvet.</p>

<h2>Checklista innan du tackar ja till BAS-P eller BAS-U</h2>
<ul>
<li>Har du ett skriftligt uppdrag som tydligt anger vilken roll du tar?</li>
<li>Framgår gränsen för ditt ansvar – tar du samordnarrollen eller hela byggherreansvaret enligt 7 c §?</li>
<li>Finns en arbetsmiljöplan, och vem har upprättat den?</li>
<li>Är förhandsanmälan gjord om tröskeln passeras?</li>
<li>Har du faktisk tid att vara på plats och samordna?</li>
<li>Har du kompetens och intyg som står i proportion till projektets risknivå?</li>
<li>Hur samordnas underentreprenörerna och deras samtidiga arbeten?</li>
<li>Hur dokumenteras skyddsronder, introduktioner och avvikelser?</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>Samordnaransvaret står och faller med dokumentationen – att arbetsmiljöplanen är uppdaterad och att egenkontrollerna faktiskt utförs och sparas. I ByggExp håller du kontrollerna samlade och spårbara, så att du vid en skyddsrond eller en inspektion kan visa vad som gjorts, när och av vem. Det ersätter inte kompetensen som BAS-P eller BAS-U kräver, men det gör det lättare att leva upp till rollen i praktiken och att spara underlagen så länge du behöver dem.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan BAS-P och BAS-U?</h3>
<p>BAS-P samordnar arbetsmiljön under planering och projektering och upprättar arbetsmiljöplanen. BAS-U samordnar arbetsmiljön under utförandet på den bemannade arbetsplatsen och håller planen uppdaterad. P sitter vid ritbordet, U på bygget.</p>
<h3>Kan samma person vara både BAS-P och BAS-U?</h3>
<p>Ja, lagen hindrar inte det, förutsatt att personen har den utbildning, kompetens och erfarenhet som krävs för båda faserna i förhållande till projektets storlek, komplexitet och risknivå. I mindre projekt är det vanligt att rollerna samlas hos en person.</p>
<h3>Slipper byggherren ansvar genom att utse en BAS?</h3>
<p>Nej. Byggherren måste fortfarande organisera resurser, ge tillräckligt med tid, klargöra vem som gör vad och följa upp samordnarnas arbete. Ansvaret kan bara flyttas till en uppdragstagare via ett skriftligt avtal enligt AML 3 kap 7 c §, och bara om denne självständigt sköter arbetet.</p>
<h3>Vad kostar det att sakna arbetsmiljöplan?</h3>
<p>Sanktionsavgiften är 10 000 kr när förhandsanmälan inte krävs och 50 000 kr när den krävs. Avgiften kan tas ut separat på byggherren, BAS-P och BAS-U. Saknad förhandsanmälan kostar 5 000 kr.</p>

<h2>Kom igång</h2>
<p>Börja med att få dokumentationen på plats. Använd <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a> för att komma igång med kontrollerna redan idag, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du håller arbetsmiljöplan och samordning samlat i praktiken.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan – när krävs den och vad ska ingå</a> och <a href="/sv/blog/arbetsmiljoansvar-egenforetagare">Arbetsmiljöansvar för egenföretagare</a>.</p>
`.trim();

const BASPBASU: BlogPost = {
  _id: "code-"+"bas-p-bas-u",
  title: "BAS-P och BAS-U – vem ansvarar för vad?",
  slug: "bas-p-bas-u",
  locale: "sv",
  excerpt: "Vem gör vad i kedjan byggherre, BAS-P och BAS-U – och varför du som småföretagare bör tänka efter innan du skriver under samordnaruppdraget.",
  tag: "Arbetsmiljö",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp",
  contentHtml: BASPBASU_HTML,
  seoTitle: "BAS-P och BAS-U – skillnaden | ByggExp",
  seoDescription: "BAS-P samordnar arbetsmiljön i projekteringen, BAS-U i utförandet. Så skiljer sig rollerna – och riskerna när småföretag tar samordnaransvaret.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`,
  canonicalUrl: "",
  noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T14:00:00.000Z", createdAt: "2026-08-18T14:00:00.000Z", updatedAt: "2026-08-18T14:00:00.000Z",
};

const A_KVARTSDAMM_REGLER_BYGG_HTML = `
<p>Kvartsdamm är byggbranschens tysta yrkessjukdom. Varje gång ni bilar, slipar, kapar eller borrar i betong, tegel eller puts frigörs respirabel kristallin kiseldioxid – partiklar så små att de når djupt ner i lungorna utan att synas. Med den skärpta regelstrukturen 2025–2026 är slarv inte längre bara en hälsorisk för montörerna, utan en direkt efterlevnadsrisk för firman. Den här guiden går igenom kvartsdamm, reglerna, kraven och byggbranschens praktiska compliance: gränsvärdet, den dokumenterade riskbedömningen, åtgärdstrappan och varför M-klassad dammsugare är minimikravet.</p>

<p>Ett strukturerat sätt att fånga riskbedömning, kontroller och åtgärder är att dokumentera dem löpande – börja med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall &rarr;</a> och bygg vidare därifrån.</p>

<h2>Vad är kvartsdamm och varför är det farligt</h2>
<p>Kvarts finns i de flesta material ni arbetar i dagligen: betong, tegel, puts, murbruk och natursten. Så länge materialet är intakt är kvartsen bunden, men vid bearbetning frigörs den som damm. De moment som dammar mest är bilning, slipning, kapning, borrning och rivning – tänk en helt vanlig kök- eller badrumsrenovering där kakel kapas och betong bilas i ett trångt utrymme.</p>
<p>Den farliga fraktionen är den respirabla, alltså de finaste partiklarna som andas ner i lungblåsorna. Långvarig inandning kan orsaka silikos (stendammlunga), KOL och lungcancer. Därför är respirabelt kvarts CMR-klassat, och Arbetsmiljöverket hanterar det med samma stränga logik som cancerframkallande kemikalier.</p>

<h2>Gränsvärdet och regelverket 2026</h2>
<p>Det hygieniska gränsvärdet (nivågränsvärdet) för respirabelt kvarts är <strong>0,1 mg/m³</strong>, mätt som medelvärde över en åttatimmars arbetsdag. Det framgår av AFS 2023:14 om gränsvärden för luftvägsexponering.</p>
<p>Regelverket byggdes om från och med 1 januari 2025. Den gamla AFS 2015:2 om kvarts och stendamm är utfasad och ska inte längre refereras som gällande. Kvartskraven ligger nu utspridda i den nya strukturen: AFS 2023:10 (risker i arbetsmiljön, kemiska risker), AFS 2023:14 (gränsvärden) och AFS 2023:15 (medicinska kontroller).</p>
<p>Skärpningen fortsatte med ändringsföreskriften AFS 2025:1 (ändring i AFS 2023:10), som trädde i kraft 9 april 2026. Den förtydligar en viktig princip: arbete där kvartsdamm bildas får inte utföras om det är tekniskt möjligt att ta bort orsaken till exponeringen. Kvarts ska alltså hanteras enligt substitutions- och åtgärdstrappan, precis som en cancerframkallande kemikalie. I praktiken betyder det att ni först måste fråga er om momentet kan göras på ett sätt som inte alls dammar.</p>

<h2>Riskbedömning – firmans utgångspunkt</h2>
<p>Arbetsgivaren ska göra en <strong>dokumenterad riskbedömning innan arbetet påbörjas</strong>. Det är inte en formalitet i efterhand utan grunden för hela hanteringen. Bedömningen ska besvara:</p>
<ul>
<li>Vilka moment i jobbet frigör kvartsdamm?</li>
<li>Hur länge pågår de dammande momenten?</li>
<li>Hur många personer exponeras, och vilka?</li>
<li>Vilka skyddsåtgärder väljs, och räcker de för att hålla er under gränsvärdet?</li>
</ul>
<p>När det är oklart om exponeringen ligger under 0,1 mg/m³ kan en luftmätning behövas för att fastställa nivån. På gemensamma byggen med flera aktörer måste bedömningen dessutom samordnas med BAS-U, så att inte en firmas bilning dammar ner nästa firmas montörer. Ju konkretare ni är i riskbedömningen, desto enklare blir det att välja rätt utrustning och att visa efterlevnad vid en inspektion.</p>

<h2>Åtgärdstrappan: begränsa dammet vid källan</h2>
<p>Personlig skyddsutrustning kommer sist, inte först. Regelverket kräver att dammet begränsas vid källan innan ni faller tillbaka på andningsskydd. Den praktiska ordningen är:</p>
<ol>
<li>Välj en metod eller ett material som dammar mindre.</li>
<li>Fånga dammet vid källan – integrerat utsug direkt på verktyget eller vattenbegjutning som binder dammet.</li>
<li>Säkerställ god allmänventilation i utrymmet.</li>
<li>Komplettera med personlig skyddsutrustning, i praktiken andningsskydd FFP3, när övriga åtgärder inte räcker.</li>
</ol>
<p>Städningen är ett eget riskmoment. Kvartshaltigt damm ska sugas upp med rätt klassad utrustning eller hanteras vått. Torrsopning och avblåsning med tryckluft är uttryckligen förbjudet – det virvlar bara upp de farligaste partiklarna igen. FFP3-masken är ett komplement, aldrig huvudlösningen.</p>

<h2>Rätt dammsugarklass – M-klass i fokus</h2>
<p>Dammsugare för byggdamm delas in i tre klasser efter filtreringsgrad:</p>
<ul>
<li><strong>L-klass</strong> – för lågfarligt damm. Räcker inte för kvarts.</li>
<li><strong>M-klass</strong> – tätad maskin med minst 99,9 % filtrering, avsedd för hälsofarligt men icke-cancerogent byggdamm som betong, gips, sten och kvarts. Detta är branschstandard och minimikravet vid kvartsarbete.</li>
<li><strong>H-klass</strong> – minst 99,995 % filtrering och högst 0,005 % genomsläpp. Krävs för asbest, bly och de farligaste cancerogena dammtyperna.</li>
</ul>
<p>Här finns en nyans värd att förstå: kvarts är visserligen cancerogent, men för byggkvarts accepteras M-klass. H-klass reserveras för asbest och bly. En vanlig verkstadssug eller L-klassad maskin uppfyller alltså inte kraven vid kvartsarbete. Praktiska tips: använd rätt filter, koppla verktyget direkt till utsuget, hantera dammpåse och säck så att inget virvlar upp vid tömning, och kontrollera funktionen. Utsug, ventilation och dammbegränsande utrustning ska nämligen kontrolleras och funktionen dokumenteras med <strong>högst sex månaders mellanrum</strong>.</p>

<h2>Medicinska kontroller och tjänstbarhetsintyg</h2>
<p>Enligt AFS 2023:15 krävs medicinska kontroller med bedömning för tjänstbarhetsintyg när en person exponeras för respirabelt kvarts vid halt som är minst halva gränsvärdet – alltså <strong>0,05 mg/m³</strong> – och samtidigt arbetar mer än 20 timmar per vecka i minst tre månader per år. Undersökningen ska göras innan arbetet påbörjas och därefter med högst tre års intervall, och omfattar bland annat lungor och hjärta. Tjänstbarhetsintyget är en förutsättning för fortsatt arbete i miljön. Det är arbetsgivaren som ansvarar för att kontrollerna genomförs och står för kostnaden. Arbetstagarna ska dessutom ha information och utbildning om riskerna och skyddsåtgärderna.</p>

<h2>Compliance-checklista för firman</h2>
<ul>
<li>Dokumenterad riskbedömning klar innan arbetet startar.</li>
<li>Damm fångat vid källan med utsug eller våthantering.</li>
<li>Minst M-klassad dammsugare vid kvartsarbete och städning.</li>
<li>FFP3-andningsskydd som komplement vid behov.</li>
<li>Ingen torrsopning och ingen tryckluft.</li>
<li>Funktionskontroll av utsug och utrustning var sjätte månad, dokumenterad.</li>
<li>Utbildning och information till alla exponerade.</li>
<li>Medicinska kontroller när tröskeln för exponering och arbetstid nås.</li>
<li>Rutinerna uppdaterade mot AFS 2023:10 med ändringen AFS 2025:1.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>Kvartsdamm-efterlevnad står och faller med dokumentationen: riskbedömningen innan arbetet, den återkommande funktionskontrollen var sjätte månad och spårbarheten om Arbetsmiljöverket knackar på. I ByggExp samlar ni de kontrollerna på ett ställe i stället för i lösa papper och telefonbilder. Med egenkontroll-mallen skapar ni en återanvändbar rutin per projekt, och kontrollerna knyts till rätt jobb med datum och ansvarig. Verktyget ersätter inte en luftmätning eller en företagshälsovård, men det gör det enkelt att visa att rutinerna faktiskt följs – vilket ofta är just det som saknas vid en inspektion.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är gränsvärdet för kvartsdamm?</h3>
<p>Nivågränsvärdet för respirabelt kvarts är 0,1 mg/m³ mätt som medelvärde över en åttatimmars arbetsdag, enligt AFS 2023:14. Medicinska kontroller kan bli aktuella redan vid halva det värdet, 0,05 mg/m³, i kombination med lång arbetstid.</p>
<h3>Räcker en vanlig byggdammsugare för kvarts?</h3>
<p>Nej, inte en L-klassad maskin eller en verkstadssug. Minimikravet vid kvartsarbete är en M-klassad dammsugare med minst 99,9 % filtrering. H-klass behövs bara för de farligaste dammtyperna som asbest och bly.</p>
<h3>Gäller fortfarande AFS 2015:2 för kvarts?</h3>
<p>Nej. Den gamla föreskriften om kvarts och stendamm är utfasad sedan 1 januari 2025. Kraven finns nu i AFS 2023:10, 2023:14 och 2023:15, med den skärpande ändringen AFS 2025:1 som trädde i kraft 9 april 2026.</p>
<h3>Får vi sopa eller blåsa rent efter kvartsarbete?</h3>
<p>Nej. Torrsopning och avblåsning med tryckluft är förbjudet eftersom det virvlar upp de farligaste partiklarna. Kvartshaltigt damm ska sugas upp med minst M-klassad utrustning eller hanteras vått.</p>

<h2>Kom igång</h2>
<p>Börja med att systematisera riskbedömning och funktionskontroller i <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a>, så har ni dokumentationen på plats innan nästa dammande jobb. Vill ni se hur det fungerar för hela firman kan ni <a href="/sv/contact">boka en demo</a>. Detta är förenklad vägledning och inte juridisk rådgivning – kontrollera alltid gällande AFS för ert specifika arbete.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan</a> och <a href="/sv/blog/egenkontroll">Egenkontroll i bygg</a>.</p>
`;

const A_KVARTSDAMM_REGLER_BYGG: BlogPost = {
  _id: "code-"+"kvartsdamm-regler-bygg",
  title: "Kvartsdamm på bygget: regler, gränsvärde och rätt dammsugarklass 2026", slug: "kvartsdamm-regler-bygg", locale: "sv",
  excerpt: "Så uppfyller din firma kvartsdamm-reglerna 2026: gränsvärde, dokumenterad riskbedömning, åtgärdstrappa och varför M-klass är minimikravet vid städning.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_KVARTSDAMM_REGLER_BYGG_HTML,
  seoTitle: "Kvartsdamm regler och krav 2026 | ByggExp", seoDescription: "Gränsvärde 0,1 mg/m³, ny AFS-struktur 2025–2026, riskbedömning och M-klass. Praktisk guide till kvartsdamm-reglerna för byggfirmor.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:27:00.000Z", createdAt: "2026-08-18T18:27:00.000Z", updatedAt: "2026-08-18T18:27:00.000Z",
};

const A_BYGGSTALLNING_REGLER_KRAV_HTML = `
<p>Fall från höjd hör till de vanligaste orsakerna till dödsolyckor i byggbranschen, och ställningar är ett av de områden där Arbetsmiljöverket kan gå direkt på sanktionsavgift utan omväg via föreläggande. Saknar en av dina montörer giltigt utbildningsbevis för höjden ni bygger på kostar det pengar per anställd – oavsett om något faktiskt hänt. Sedan 1 januari 2025 gäller dessutom nya föreskrifter, och det är lätt att missa vad som ändrats.</p>

<p>Innan ni tar en ställning i bruk bör den kontrolleras och dokumenteras – strukturera egenkontrollen enkelt med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall &rarr;</a> så att kontrolldokumentet finns signerat och tillgängligt vid en inspektion.</p>

<h2>Vilka regler gäller 2026?</h2>
<p>Uppförande, användning och utbildning kring ställningar styrs sedan 1 januari 2025 av <strong>AFS 2023:11, kapitel 8</strong>. Reglerna för produkt- och typkontroll av prefabricerade ställningar och komponenter ligger i en egen föreskrift, <strong>AFS 2023:9</strong> (Stegar, ställningar och viss annan utrustning för arbete på höjd). Båda ersatte den tidigare AFS 2013:4 &quot;Ställningar&quot;.</p>
<p>Viktigt att veta: utbildningsbevis som utfärdats enligt de gamla reglerna gäller fortfarande. De hänvisar numera till den nya föreskriften i stället, men du behöver inte skicka om personal som redan har giltiga bevis. Själva kompetenskraven och nivåerna fördes över i sak.</p>

<h2>Utbildningskraven – rätt nivå efter höjd</h2>
<p>Kravet på utbildning trappas efter ställningens höjd upp till arbetsplanet. Fyra nivåer gäller:</p>
<ul>
<li><strong>Upp till 2 m</strong> – Särskild information om hantverkarställningar, för begränsat arbete enligt en generell monteringsinstruktion. <em>Inget utbildningsbevis krävs</em>, men informationen ska vara given.</li>
<li><strong>Rull- och hantverkarställningar upp till 5 m</strong> – Särskild information om rullställningar. <strong>Bevis krävs.</strong></li>
<li><strong>Upp till 9 m</strong> (fyra bomlagshöjder) – Allmän utbildning om ställningar. <strong>Bevis krävs.</strong></li>
<li><strong>Över 9 m eller mer komplexa konstruktioner</strong> – Särskild utbildning om ställningar. <strong>Bevis krävs.</strong></li>
</ul>
<p>Utöver grundnivåerna finns tilläggsutbildningar: <strong>Tilläggsutbildning om väderskydd</strong> (bygger på Särskild utbildning) för väderskydd, och <strong>Tilläggsutbildning om speciella ställningskonstruktioner</strong> (bygger på Allmän utbildning). Tänk också på att en väsentlig ändring – att flytta ett plank eller ta bort en förankring – räknas som ställningsarbete och kräver dokumenterad kompetens enligt bilagan om utbildning. Det är inte bara den som reser ställningen från grunden som behöver rätt bevis.</p>
<p>Genomförd ställningsutbildning registreras av STIB/Ställningsföretagen i ID06 kompetensdatabas. Det är där du som arbetsgivare eller beställare kan verifiera att en montörs bevis faktiskt gäller för höjden.</p>

<h2>Sanktionsavgifter – vad det kostar att sakna bevis</h2>
<p>Sanktionsavgiften tas ut <strong>per anställd</strong> som du inte kan visa giltig utbildningsdokumentation för. Beloppen är:</p>
<ul>
<li>Särskild information om rullställningar: <strong>5 000 kr</strong></li>
<li>Allmän utbildning: <strong>10 000 kr</strong></li>
<li>Särskild utbildning: <strong>20 000 kr</strong></li>
<li>Tilläggsutbildning om väderskydd: <strong>10 000 kr</strong></li>
<li>Tilläggsutbildning om speciella konstruktioner: <strong>10 000 kr</strong></li>
</ul>
<p>Krävs en tilläggsutbildning men varken grund- eller tilläggsbeviset kan visas upp, tas avgiften ut för <em>båda</em> bristerna. Med några montörer på plats blir det snabbt stora summor. Poängen med reglerna är enkel: dokumentationen måste kunna visas upp vid inspektion – ligger den hemma på kontoret hjälper det inte i stunden.</p>

<h2>Skyddsräcke och fallskydd – tvåmetersgränsen</h2>
<p>Ett skyddsräcke krävs där det finns risk att falla två meter eller mer. Vid lägre fallhöjd kan räcke ändå behövas om det finns en särskild risk. Räcket ska bestå av <strong>överledare, mellanledare och fotlist</strong>, normalt vara minst 1,00 m högt mätt vinkelrätt mot arbetsplanet, och sitta så att inget farligt mellanrum uppstår mellan plan och räcke (enligt SS-EN 12811-1).</p>
<p>Under montage, ändring och demontering där fallhöjden är två meter eller mer gäller en tydlig åtgärdshierarki:</p>
<ol>
<li>Ha det ordinarie räcket på plats så långt det går innan du når den högre nivån.</li>
<li>Använd ett temporärt räckessystem.</li>
<li>Först som sista utväg – personlig fallskyddsutrustning (sele).</li>
</ol>
<p>Sele är alltså inte förstahandsvalet, utan det du faller tillbaka på när kollektivt skydd inte är möjligt.</p>

<h2>Kontroll, besiktning och överlämning</h2>
<p>Arbetsgivaren ska kontrollera ställningen eller väderskyddet <strong>innan det tas i bruk</strong> och <strong>fortlöpande</strong> medan den används. Har den brister av arbetsmiljöbetydelse får den inte användas förrän de är åtgärdade. Extra kontroll krävs efter hård vind och när en ställning stått oanvänd under lång tid.</p>
<p>Kontrollen före ibruktagande ska dokumenteras i en särskild handling, helst signerad av både montör och användare – foton stärker dokumentationen. Vid överlämning ska montören lämna över underlagen: planen för uppförande, användning och nedmontering, dimensioneringsunderlag, kontrolldokumentation, väderskyddsinformation och prefab-monteringsinstruktioner.</p>
<p>På arbetsplatser med flera arbetsgivare ska kopior av ställningsdokumentationen lämnas till byggarbetsmiljösamordnaren för utförandet (<strong>Bas-U</strong>) innan första användning. Bas-U har tillsyn över att dokumenten finns tillgängliga på plats under den löpande kontrollen.</p>

<h2>Checklista innan du klättrar upp</h2>
<ul>
<li>Giltigt utbildningsbevis för den aktuella höjden – kontrollerat i ID06.</li>
<li>Plan för uppförande, användning och nedmontering finns och är tillgänglig.</li>
<li>Räcket är komplett: överledare, mellanledare <strong>och fotlist</strong>, minst 1,00 m.</li>
<li>Förankring och underpallning är kontrollerade.</li>
<li>Kontrolldokumentet är ifyllt och signerat före ibruktagande.</li>
<li>Avgränsning och skyltning finns vid pågående montage.</li>
<li>Inga lösa stegar på arbetsplanet, luckor stängda, ställningen inte använd som återledare vid svetsning.</li>
</ul>

<h2>Vanliga misstag som ger böter</h2>
<p>De flesta anmärkningar handlar inte om att ställningen rasat, utan om formalia som saknas: montör med bevis för 5 m som jobbar på 7, fotlist som &quot;glömts&quot; på ett plan, kontrolldokument som aldrig signerats, eller kopior som aldrig nått Bas-U. Lös stege på arbetsplanet och öppna åtgärdsluckor är också klassiker – båda är uttryckligt förbjudna på fasad-, rull- och hantverkarställningar.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte utbildningsbeviset eller certifierad montör – kompetensen måste finnas hos personalen. Det vi hjälper till med är dokumentationen runt omkring, så att den faktiskt finns när inspektören frågar. Med egenkontroll-mallen strukturerar du kontrollen före ibruktagande och den fortlöpande kontrollen, samlar foton och signaturer digitalt, och håller kontrolldokumenten tillgängliga för både användare och Bas-U på fleraarbetsgivarplatser. Kort sagt: rätt kompetens gör jobbet lagligt, dokumentationen gör det bevisbart.</p>

<h2>Vanliga frågor</h2>
<h3>Vilken utbildning krävs för en ställning på 6 meter?</h3>
<p>Sex meter till arbetsplanet ligger över 5 m-gränsen för rull- och hantverkarställningar, så det krävs Allmän utbildning om ställningar (giltig upp till 9 m) med utbildningsbevis. Rullställningsinformation räcker inte.</p>

<h3>Gäller mina gamla utbildningsbevis efter regeländringen 2025?</h3>
<p>Ja. Bevis utfärdade enligt de tidigare reglerna gäller fortfarande och hänvisar numera till AFS 2023:11 kapitel 8. Kompetenskraven fördes över, så du behöver inte utbilda om personal som redan har giltiga bevis för rätt höjd.</p>

<h3>Hur hög måste sanktionsavgiften bli?</h3>
<p>Den tas ut per anställd utan giltig dokumentation: 5 000 kr för rullställningsinformation, 10 000 kr för Allmän utbildning och 20 000 kr för Särskild utbildning. Saknas både grund- och tilläggsutbildning debiteras båda bristerna.</p>

<h3>När måste en ställning kontrolleras på nytt?</h3>
<p>Alltid före ibruktagande och fortlöpande under användning. Extra kontroll krävs efter hård vind och när ställningen stått oanvänd länge. Har den brister av arbetsmiljöbetydelse får den inte användas förrän de åtgärdats.</p>

<h2>Kom igång</h2>
<p>Sätt rutinen på plats innan nästa ställning reses: strukturera kontrollen med <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen &rarr;</a> så att dokumentationen finns signerad och sökbar när den behövs. Vill du se hur det fungerar i en skarp arbetsflöde? <a href="/sv/contact">Boka en demo &rarr;</a> så visar vi upplägget.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan – när krävs den och vad ska ingå</a> och <a href="/sv/blog/arbetsmiljoansvar-egenforetagare">Arbetsmiljöansvar för egenföretagare</a>.</p>
`;

const A_BYGGSTALLNING_REGLER_KRAV: BlogPost = {
  _id: "code-"+"byggstallning-regler-krav",
  title: "Byggställning 2026: regler, utbildningskrav och besiktning innan du klättrar upp", slug: "byggstallning-regler-krav", locale: "sv",
  excerpt: "Ställningar är ett sanktionsbelagt område – här är utbildningskraven, skyddsräckesreglerna och kontrollen du måste ha på plats innan första bomlaget tas i bruk.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_BYGGSTALLNING_REGLER_KRAV_HTML,
  seoTitle: "Byggställning regler & krav 2026 | ByggExp", seoDescription: "AFS 2023:11, utbildningsnivåer efter höjd, sanktionsavgifter, skyddsräcke och besiktning. Så klarar du inspektionen innan du klättrar upp på ställningen.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:45:00.000Z", createdAt: "2026-08-18T18:45:00.000Z", updatedAt: "2026-08-18T18:45:00.000Z",
};

const A_ARBETSMILJOVERKET_NYA_REGLER_2026_BYGG_HTML = `
<p>Sedan den 1 januari 2025 gäller Arbetsmiljöverkets omstrukturerade regelverk fullt ut. För byggföretag betyder det att i stort sett varje AFS-nummer du har hänvisat till i arbetsmiljöplaner, SAM-rutiner och egenkontroller är gammalt. Skyddskraven är desamma – men dokumenten pekar på föreskrifter som inte längre finns. Inför 2026 är det dags att städa i KMA-pärmen på riktigt.</p>

<p>Ett strukturerat sätt att fånga upp vilka dokument som behöver uppdateras är att gå igenom dina rutiner med en checklista – använd gärna <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a> som utgångspunkt för inventeringen.</p>

<h2>Vad hände 1 januari 2025?</h2>
<p>Arbetsmiljöverket samlade hela den tidigare spridda regelmassan i 15 nya föreskriftshäften med beteckningarna AFS 2023:1 till och med AFS 2023:15. Samtidigt upphörde de gamla föreskrifterna att gälla – bland annat AFS 2001:1 om systematiskt arbetsmiljöarbete och AFS 1999:3 om byggnads- och anläggningsarbete, som varit centrala för byggbranschen i decennier.</p>
<p>Det är viktigt att förstå vad omstruktureringen <em>inte</em> var: den var inte en skärpning eller uppluckring av skyddsnivån. Syftet var att göra regelverket mer överskådligt. De materiella skyddskraven är i huvudsak oförändrade. Det som ändras för dig som byggföretag är hänvisningar, AFS-nummer och paragrafstruktur i dina egna dokument, mallar och rutiner. Innehållet i ryggmärgen sitter kvar – etiketterna på det gör inte det.</p>

<h2>De AFS byggföretag måste kunna 2026</h2>
<p>Det som förr rymdes i en enda föreskrift ligger nu fördelat på flera häften. Det innebär att du behöver läsa fler AFS för att täcka samma område. De centrala för bygg- och anläggningsföretag är:</p>
<ul>
<li><strong>AFS 2023:1</strong> – Systematiskt arbetsmiljöarbete, grundläggande skyldigheter för dig med arbetsgivaransvar. Ersätter gamla AFS 2001:1 (SAM) och styr grundstrukturen i din arbetsmiljödokumentation.</li>
<li><strong>AFS 2023:2</strong> – Planering och organisering av arbetsmiljöarbete. Kompletterar 2023:1 och reglerar hur arbetet ska planeras och fördelas.</li>
<li><strong>AFS 2023:3</strong> – Projektering och byggarbetsmiljösamordning, grundläggande skyldigheter. Här ligger byggherrens ansvar, projektörernas ansvar, rollerna Bas-P och Bas-U samt kraven på arbetsmiljöplan och förhandsanmälan.</li>
<li><strong>AFS 2023:10</strong> – Risker i arbetsmiljön.</li>
<li><strong>AFS 2023:11</strong> – Arbetsutrustning och personlig skyddsutrustning, säker användning.</li>
<li><strong>AFS 2023:12</strong> – Utformning av arbetsplatser.</li>
<li><strong>AFS 2023:13</strong> – Risker vid vissa typer av arbeten.</li>
</ul>
<p>Mycket av det som tidigare låg samlat i AFS 1999:3 hittar du numera i 2023:10–13. Den exakta paragrafmappningen bör du alltid dubbelkolla mot gällande AFS-text på av.se innan du skriver in nya hänvisningar i dina dokument.</p>

<h2>Bas-P, Bas-U och arbetsmiljöplan i nya AFS 2023:3</h2>
<p>För den som driver byggprojekt är AFS 2023:3 den viktigaste att ha koll på. Observera att den redan har ändrats en gång, genom AFS 2024:1 – så hänvisar dina mallar till 2023:3 måste du kontrollera att formuleringarna stämmer med den senaste lydelsen.</p>
<p>Rollerna är oförändrade i sak:</p>
<ul>
<li><strong>Byggherren</strong> har det övergripande ansvaret och ska utse byggarbetsmiljösamordnare.</li>
<li><strong>Bas-P</strong> (för planering och projektering) samordnar arbetsmiljöfrågor under projekteringen och ansvarar för att arbetsmiljöplanen upprättas.</li>
<li><strong>Bas-U</strong> (för utförande) samordnar arbetsmiljöarbetet på byggarbetsplatsen och håller arbetsmiljöplanen aktuell under hela byggskedet.</li>
</ul>
<p>Formellt ska en arbetsmiljöplan finnas innan arbetet påbörjas när något av lagens kriterier är uppfyllt, och förhandsanmälan ska skickas till Arbetsmiljöverket för större eller längre projekt. Kraven på när planen behövs har inte ändrats av omstruktureringen – bara var i regelverket de står.</p>

<h2>Checklista: så uppdaterar du KMA-dokumenten</h2>
<p>Gå igenom dokumenten systematiskt istället för att skriva om allt på en gång. En rimlig arbetsordning:</p>
<ol>
<li><strong>Arbetsmiljöplanens mall</strong> – byt hänvisningar från AFS 1999:3 till AFS 2023:3 (med ändringen i AFS 2024:1) och kontrollera att rollbeskrivningarna för Bas-P och Bas-U stämmer.</li>
<li><strong>SAM-rutiner och arbetsmiljöpolicy</strong> – ersätt AFS 2001:1 med AFS 2023:1 och 2023:2.</li>
<li><strong>Riskbedömningsmallar</strong> – uppdatera hänvisningar till 2023:10 och 2023:13 för risker vid arbetet.</li>
<li><strong>Egenkontroller och skyddsronder</strong> – kontrollera referenser till utrustning och skyddsutrustning (2023:11) och arbetsplatsens utformning (2023:12).</li>
<li><strong>Underentreprenörsavtal och beställningsvillkor</strong> – där ni hänvisar till gällande arbetsmiljöföreskrifter, se till att texten pekar på rätt AFS.</li>
<li><strong>Introduktions- och utbildningsmaterial</strong> – platschefer och skyddsombud behöver känna igen de nya numren.</li>
</ol>

<h2>Vanliga misstag och fallgropar</h2>
<p>De vanligaste felen vi ser handlar mer om slarv än om okunskap:</p>
<ul>
<li><strong>Att tro att kraven ändrats.</strong> Många lägger tid på att tolka om skyddsnivåer som i praktiken är desamma. Fokusera på hänvisningarna, inte på att uppfinna nya rutiner.</li>
<li><strong>Fel AFS-nummer i dokument.</strong> En arbetsmiljöplan som hänvisar till en upphävd föreskrift ser oseriös ut vid en inspektion – även om innehållet är korrekt.</li>
<li><strong>Att glömma Bas-U och arbetsmiljöplan på mindre projekt.</strong> Kraven gäller även för mindre arbeten som uppfyller kriterierna; de försvinner inte för att projektet är litet.</li>
<li><strong>Att uppdatera huvudmallen men missa kopior.</strong> Gamla versioner lever ofta kvar i pärmar och delade mappar. Ha en enda källa som är den gällande.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte det juridiska ansvaret – du måste fortfarande läsa gällande AFS-text – men verktygen hjälper dig hålla dokumentationen samlad och aktuell. Med <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> får du en struktur som är enkel att uppdatera med rätt AFS-hänvisningar, och du slipper leta i lösa Word-filer. Med <a href="/sv/verktyg/byggdagbok-mall">byggdagboks-mallen</a> dokumenterar du löpande vad som skett på arbetsplatsen, vilket är underlag både för egenkontrollen och vid en eventuell inspektion. Poängen är att ha en gällande version på ett ställe – inte tio kopior med olika AFS-nummer.</p>

<h2>Vanliga frågor</h2>
<h3>Har skyddskraven skärpts i de nya reglerna?</h3>
<p>Nej. Omstruktureringen som trädde i kraft 1 januari 2025 syftade till att göra regelverket mer överskådligt, inte att ändra skyddsnivån. De materiella kraven är i huvudsak oförändrade – det är AFS-numren och paragrafstrukturen som är nya.</p>
<h3>Vilken föreskrift ersätter gamla AFS 1999:3 om byggnadsarbete?</h3>
<p>Det finns inte längre en enda motsvarighet. Byggarbetsmiljösamordning och arbetsmiljöplan regleras i AFS 2023:3, medan de specifika reglerna om själva arbetet är fördelade på bland annat AFS 2023:10–13. Du behöver alltså läsa flera häften.</p>
<h3>Måste jag skriva om hela KMA-pärmen?</h3>
<p>Nej, men du behöver uppdatera hänvisningarna. Eftersom kraven i sak är desamma räcker det oftast att byta AFS-nummer och kontrollera rollbeskrivningarna, inte att bygga om rutinerna från grunden.</p>
<h3>Gäller de nya reglerna även små byggprojekt?</h3>
<p>Ja. Kraven på arbetsmiljöplan, Bas-P och Bas-U utgår från projektets art, inte enbart storleken. Uppfylls kriterierna gäller reglerna oavsett om projektet är stort eller litet.</p>

<h2>Kom igång</h2>
<p>Börja med att inventera dina dokument, byt ut AFS-hänvisningarna mot de nya numren och se till att platsledningen känner igen dem. Ladda ner <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> för att strukturera arbetet, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du håller arbetsmiljödokumentationen samlad. Läs alltid gällande AFS-text på Arbetsmiljöverket (av.se) innan du fastställer hänvisningar.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan – krav och innehåll</a>, <a href="/sv/blog/bas-p-bas-u">Bas-P och Bas-U – roller och ansvar</a>, <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a>.</p>
`;

const A_ARBETSMILJOVERKET_NYA_REGLER_2026_BYGG: BlogPost = {
  _id: "code-"+"arbetsmiljoverket-nya-regler-2026-bygg",
  title: "Arbetsmiljöverkets nya regler 2026 för bygg – så uppdaterar du KMA-pärmen", slug: "arbetsmiljoverket-nya-regler-2026-bygg", locale: "sv",
  excerpt: "Arbetsmiljöverket har samlat regelmassan i 15 nya föreskrifter – här är AFS-numren byggföretag måste byta ut i arbetsmiljöplan, SAM-rutiner och egenkontroller inför 2026.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_ARBETSMILJOVERKET_NYA_REGLER_2026_BYGG_HTML,
  seoTitle: "Nya AFS-regler 2026 bygg | ByggExp", seoDescription: "Arbetsmiljöverkets omstrukturerade regelverk gäller sedan 2025. Se vilka AFS byggföretag måste kunna 2026 och hur du uppdaterar KMA-dokumenten rätt.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T20:06:00.000Z", createdAt: "2026-08-18T20:06:00.000Z", updatedAt: "2026-08-18T20:06:00.000Z",
};

const A_NYA_ASBESTREGLER_2026_HTML = `
<p>Om du driver ett byggföretag eller jobbar som hantverkare är de nya asbestreglerna något du behöver ha koll på under 2026. Reglerna trädde formellt i kraft redan 19 december 2025, men det är i vardagen ute på jobben de börjar märkas nu. Två förändringar sticker ut: det hygieniska gränsvärdet sänks tiofaldigt, från 0,1 till 0,01 fiber per kubikcentimeter luft, och utbildningskravet utökas så att det nu träffar även målare, elektriker och VVS-tekniker — inte bara den som river asbest.</p>

<p>Ett bra första steg är att strukturera hur du dokumenterar risker och skyddsåtgärder på varje projekt. Använd gärna <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a> för att fånga upp asbestrisker redan i riskbedömningen.</p>

<h2>Det nya gränsvärdet — 0,01 fiber/cm³</h2>
<p>Det hygieniska gränsvärdet anger den högsta genomsnittliga halten asbestfibrer i luften som en arbetstagare får utsättas för. Att värdet sänks tiofaldigt, från 0,1 till 0,01 fiber/cm³, är ingen kosmetisk justering. Det innebär i praktiken att arbetsmetoder, dammkontroll och andningsskydd som tidigare klarade gränsen inte längre gör det med samma marginal.</p>
<p>Konsekvensen blir hårdare krav på inkapsling, undertrycksventilation och punktutsug, samt på att andningsskyddet har rätt skyddsfaktor för den aktuella exponeringen. Sänkningen följer skärpta krav på EU-nivå och speglar den samlade kunskapen om att det inte finns någon säker nivå av asbestexponering. För dig som arbetsgivare betyder det att gamla arbetsberedningar behöver granskas mot det nya värdet.</p>

<h2>Vilka AFS-föreskrifter styr?</h2>
<p>De hygieniska gränsvärdena för luftvägsexponering regleras i AFS 2023:14. Reglerna om risker vid asbestarbete och om medicinska kontroller finns i Arbetsmiljöverkets övriga föreskrifter i 2023 års regelstruktur. Kraven på asbest har skärpts genom ändringsföreskrifter som beslutats under 2025 — däribland AFS 2025:6 — och som tillsammans genomför det sänkta gränsvärdet, de utökade utbildningskraven och de skärpta medicinska kontrollerna. Kontrollera alltid de exakta föreskriftsnumren och senaste lydelsen direkt hos Arbetsmiljöverket innan du bygger dina rutiner på dem.</p>
<p>En vanlig missuppfattning är att reglerna gäller från 1 januari 2026. Det stämmer inte — de trädde i kraft 19 december 2025, och det finns ingen övergångsperiod. Kraven gäller alltså fullt ut redan nu. Att de ofta kallas "2026-reglerna" beror på att det är under 2026 de får fullt genomslag i det dagliga arbetet.</p>

<h2>Utökade utbildningskrav — nu berörs målare, el och VVS</h2>
<p>Här ligger kärnan i förändringen. Tidigare krävdes formell asbestutbildning i huvudsak av dem som direkt hanterade asbest. Nu måste även den som riskerar att exponeras för asbesthaltigt damm ha utbildning — även om personen aldrig aktivt river asbest. Arbetsmiljöverket pekar uttryckligen ut målare, elektriker, VVS-tekniker, byggnadsarbetare och fastighetsskötare.</p>
<p>Tänk på de konkreta situationerna i äldre byggnader:</p>
<ul>
<li><strong>Målaren</strong> som slipar gammalt spackel eller fönsterkitt som kan innehålla asbest.</li>
<li><strong>Elektrikern</strong> som drar kabel genom äldre bjälklag, väggar eller kanaler med asbesthaltigt material.</li>
<li><strong>VVS-teknikern</strong> som kapar eller demonterar rör med asbesthaltig isolering.</li>
</ul>
<p>Utbildningen ska vara anpassad till arbetsuppgiften, innehålla både teori och praktik och avslutas med ett kunskapsprov. Omfattningen styrs av arbetsuppgiften snarare än av ett fast antal timmar — teoridelen kombineras med arbetsgivarledd praktisk instruktion. Utbildningsintyget ska nu också innehålla utökad information.</p>

<h2>Skärpta medicinska kontroller</h2>
<p>Tidigare fanns ett undantag som innebar att arbetstagare med mindre än 50 timmars asbestexponering per år slapp medicinsk kontroll. Det undantaget är nu borttaget. Alla som omfattas av ett asbesttillstånd, samt de som utför "annat arbete" med exponering för asbesthaltigt damm, ska genomgå medicinsk kontroll och tjänstbarhetsbedömning.</p>
<p>För dig som arbetsgivare betyder det att kontrollprogrammet måste uppdateras så att fler medarbetare fångas upp — inte bara rivningspersonal utan även de yrkesgrupper som nu omfattas av utbildningskravet. Se till att bokningarna och intygen dokumenteras och följs upp löpande.</p>

<h2>Tillstånd och intyg — behåller du dem?</h2>
<p>En positiv nyhet: tillstånd som utfärdats före 19 december 2025 gäller fortfarande. Du behöver alltså inte ansöka på nytt enbart på grund av regeländringen, och tidigare genomförd asbestutbildning accepteras även framöver. Det är ingen automatisk omansökan.</p>
<p>Men — och det är viktigt — verksamheten måste ändå leva upp till de nya kraven. Det innebär att du behöver säkerställa dammkontroll, andningsskydd, riskbedömningar och medicinska program enligt de skärpta reglerna, även om själva tillståndet ligger fast.</p>

<h2>Checklista för arbetsgivare 2026</h2>
<p>Asbest förbjöds i byggmaterial i Sverige 1982. Allt som byggdes eller renoverades före dess är potentiellt riskabelt. Så här kommer du i gång:</p>
<ol>
<li>Inventera byggnader uppförda före 1982 innan arbetet startar.</li>
<li>Uppdatera riskbedömningar och arbetsberedningar mot det nya gränsvärdet 0,01 fiber/cm³.</li>
<li>Boka utbildning även för indirekt exponerad personal — målare, el, VVS.</li>
<li>Se över andningsskydd och övrig personlig skyddsutrustning så skyddsfaktorn räcker.</li>
<li>Uppdatera det medicinska kontrollprogrammet nu när 50-timmarsundantaget är borta.</li>
<li>Dokumentera allt — inventering, riskbedömning, utbildningsintyg och kontroller.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte utbildning eller mätningar — men verktyget hjälper dig att hålla ihop dokumentationen som de nya reglerna kräver. Med egenkontroll- och riskbedömningsmallar kan du fånga upp asbestrisker per projekt, notera vilka byggår som gäller och koppla åtgärder till rätt medarbetare. Du samlar egenkontroller, riskbedömningar och intyg på ett ställe, vilket gör det enklare att visa upp underlag vid en inspektion. Tänk på att sparkraven skiljer sig åt: allmän bokföring och affärsunderlag ska sparas i minst sju år, men register över asbestexponerade arbetstagare och resultaten från de medicinska kontrollerna ska bevaras betydligt längre — minst 40 år efter att exponeringen upphört.</p>

<h2>Vanliga frågor</h2>
<h3>Gäller reglerna även småföretag och enmansfirmor?</h3>
<p>Ja. Kraven på gränsvärde, utbildning och medicinska kontroller gäller oavsett företagets storlek. Även den som driver enmansfirma och riskerar exponeras för asbesthaltigt damm omfattas av utbildnings- och kontrollkraven.</p>
<h3>Måste ROT-jobb i äldre villor riskbedömas?</h3>
<p>Om villan är byggd eller renoverad före asbestförbudet 1982 finns en reell risk för asbesthaltigt material i exempelvis kitt, spackel, isolering och golv. Sådana jobb ska riskbedömas innan arbetet påbörjas, och åtgärder vidtas om asbest kan förekomma.</p>
<h3>Hur länge måste vi spara underlagen om asbestexponering?</h3>
<p>Register över vilka arbetstagare som exponerats för asbest och resultaten från de medicinska kontrollerna ska bevaras länge — minst 40 år efter att exponeringen upphört. Det är väsentligt längre än de sju år som gäller för vanlig bokföring, eftersom asbestrelaterad sjukdom kan visa sig först efter många decennier.</p>
<h3>Vad händer vid en inspektion från Arbetsmiljöverket?</h3>
<p>Brister i utbildning, riskbedömning, skyddsutrustning eller medicinska kontroller kan leda till krav på åtgärder och i vissa fall sanktionsavgifter. Dokumenterade rutiner och intyg är din bästa försäkring — de visar att verksamheten uppfyller kraven.</p>

<h2>Kom igång</h2>
<p>2026 är året kraven märks i vardagen. Boka utbildning för berörd personal, inventera dina äldre projekt och uppdatera riskbedömningarna redan nu. Kom i gång med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a> för att strukturera dokumentationen, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du håller ihop arbetsmiljöunderlaget per projekt.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoansvar-egenforetagare">Arbetsmiljöansvar som egenföretagare</a> och <a href="/sv/blog/heta-arbeten">Heta arbeten — regler och tillstånd</a>.</p>
`;

const A_NYA_ASBESTREGLER_2026: BlogPost = {
  _id: "code-"+"nya-asbestregler-2026",
  title: "Nya asbestregler 2026 – det här gäller för byggföretag", slug: "nya-asbestregler-2026", locale: "sv",
  excerpt: "De skärpta asbestreglerna märks i vardagen 2026: sänkt gränsvärde, utbildningskrav för fler yrken och tuffare medicinska kontroller. Så förbereder du företaget.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_NYA_ASBESTREGLER_2026_HTML,
  seoTitle: "Nya asbestregler 2026: guide för bygg | ByggExp", seoDescription: "Asbestreglerna skärptes dec 2025: gränsvärdet sänks till 0,01 fiber/cm³, fler yrken kräver utbildning och medicinska kontroller. Guide för byggföretag 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:09:00.000Z", createdAt: "2026-08-19T05:09:00.000Z", updatedAt: "2026-08-19T05:09:00.000Z",
};

const A_FALLSKYDD_KRAV_BYGG_HTML = `
<p>Fall från höjd är den enskilt vanligaste dödsorsaken på svenska byggarbetsplatser, och saknat fallskydd är också något Arbetsmiljöverket kan slå ner på direkt i plånboken. Utförs arbete med en fallhöjd på 2 meter eller mer utan föreskrivet fallskydd kan bolaget påföras en <strong>sanktionsavgift på mellan 40 000 och 400 000 kronor</strong> – utan domstol, utan diskussion. Reglerna byttes dessutom ut vid årsskiftet, så många hantverkare googlar fortfarande paragrafer som inte längre gäller. Här får du de konkreta 2026-kraven: 2-metersregeln, varför kollektivt fallskydd alltid går före selen, och exakt hur avgiften räknas ut.</p>
<p><a href="/sv/verktyg/riskbedomning-mall">Gör en skriftlig riskbedömning med vår gratis mall (PDF & Excel) -&gt;</a></p>

<p>Bygg in fallskyddskontrollen i ditt löpande arbetsmiljöarbete med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall &rarr;</a> så att räcken, hål och förankringspunkter dokumenteras innan arbetet på höjd påbörjas.</p>

<h2>Nya regler 2025/2026 – gamla paragrafer gäller inte längre</h2>
<p>Den 1 januari 2025 upphävdes den gamla <em>AFS 1999:3 Byggnads- och anläggningsarbete</em>. Fallskyddskraven för bygg- och anläggningsarbete finns nu i <strong>AFS 2023:13 &quot;Risker vid vissa typer av arbeten&quot;</strong>, i kapitlet om bygg- och anläggningsarbete (kapitel 5). Föreskriften har redan hunnit ändras två gånger, genom AFS 2025:6 och AFS 2025:8.</p>
<p>Det praktiska problemet är att en stor del av det material som ligger högt i sökresultaten – checklistor, mallar, gamla utbildningsunderlag – fortfarande hänvisar till AFS 1999:3. Refererar din arbetsmiljöplan eller dina rutiner till upphävda paragrafer signalerar det bristande koll om Arbetsmiljöverket gör ett besök. Se till att interna dokument pekar på rätt föreskrift innan du bygger vidare på dem.</p>

<h2>2-metersregeln förklarad</h2>
<p>Huvudregeln är enkel att formulera men lätt att slarva med: <strong>när fallhöjden är 2 meter eller mer ska fallrisken normalt förebyggas</strong> med gemensamma (kollektiva) fallskyddsanordningar. Det är vid den gränsen sanktionsavgiften slår till.</p>
<p>Men 2-metersgränsen är inte en frikort-nivå under sig. Föreskriften slår också fast att <strong>risk för fall till lägre nivå alltid ska förebyggas – även under 2 meter</strong>. Ett fall på en dryg meter ner mot utstickande armeringsjärn, ner i ett schakt eller mot en betongkant kan vara minst lika allvarligt som ett högre fall mot plan mark. Bedöm konsekvensen, inte bara höjden. Den som mekaniskt tänker &quot;under två meter, alltså inget skydd&quot; missar både lagkravet och den faktiska risken.</p>

<h2>Kollektivt före personligt – prioritetsordningen</h2>
<p>Det här är den vanligaste feltolkningen på svenska byggen. Föreskriften ställer en tydlig prioritetsordning. Fallrisken ska i första hand förebyggas med <strong>gemensamma fallskyddsanordningar</strong>:</p>
<ul>
<li>Skyddsräcken</li>
<li>Mobila eller fasta arbetsplattformar</li>
<li>Arbetskorgar</li>
<li>Ställningar med skyddsräcken</li>
<li>Fallskyddsnät</li>
</ul>
<p>Personligt fallskydd i form av sele är <strong>inte ett likvärdigt alternativ</strong>. Personligt fallskydd får användas bara &quot;om gemensamma fallskyddsanordningar inte kan användas på grund av arbetets art&quot;. Selen är alltså sista utvägen, inte en genväg du får välja för att det går snabbare att spänna på sig en sele än att resa ett räcke.</p>
<p>Just den genvägen är det klassiska felet: laget börjar i selen för att komma igång, trots att ett skyddsräcke eller en plattform hade fungerat utmärkt. Det är en överträdelse även om ingen faller. Kom också ihåg att stegar och ställningar regleras separat, i <strong>AFS 2023:9</strong> (stegar, ställningar och viss annan utrustning för arbete på höjd).</p>

<h2>Så ska skyddsräcket se ut</h2>
<p>Ett skyddsräcke som inte uppfyller kraven räknas i praktiken inte som fallskydd. Föreskriften anger att skyddsräcken ska vara <strong>hållfasta och minst 1 meter höga</strong>, och ha <strong>fotlist, mellanledare och överledare</strong> – eller ge motsvarande skydd. Ett enkelt snöre eller en ensam överledare duger alltså inte.</p>
<p>Vid takarbete krävs skyddsräcke <strong>även på takkanten vid gavel</strong>, inte bara längs takfoten. Öppningar och hål ska förses med skyddstäckning eller skyddsräcken, och ytor med genomtrampningsrisk ska spärras av. Föreskriften anger även att arbete med transport upp och ner från plan som ligger mer än 2 meter över markplanet ska ordnas så att skyddsräcke eller annan skyddsanordning <strong>inte behöver tas bort</strong> – ett tillfälligt borttaget räcke &quot;bara en stund&quot; är precis det scenario reglerna vill stoppa.</p>

<h2>Takarbete: när selen faktiskt är tillåten</h2>
<p>Tak är det tydligaste undantaget, men det är villkorat. Personligt fallskydd får väljas framför kollektivt bara efter en dokumenterad <strong>rimlighetsbedömning</strong> som väger tre saker mot varandra:</p>
<ul>
<li>Tiden för hela takarbetet</li>
<li>Riskerna med att välja personligt fallskydd</li>
<li>Tiden det tar att montera skyddsräcke eller motsvarande utrustning</li>
</ul>
<p>Bedrivs takarbetet på en begränsad yta räcker det med fallskydd inom den ytan, förutsatt att resten av taket är <strong>tydligt och hållbart avspärrat</strong>. Väljer du sele ställs krav på själva utrustningen: den ska bestå av en sele kopplad till lämpliga fallskyddskomponenter och vara förankrad i en säker förankringspunkt, så att ett fall antingen förhindras eller stoppas och bromsas. En sele som hänger i en osäker infästning ger falsk trygghet, inte skydd.</p>

<h2>Böteshotet: så räknas sanktionsavgiften</h2>
<p>Det är sanktionsavgiftsbestämmelsen i kapitel 5 som gör fallskydd till en ekonomisk fråga, inte bara en säkerhetsfråga. Utförs arbete med fallhöjd 2 meter eller mer och föreskrivet fallskydd saknas, <strong>ska sanktionsavgift betalas</strong>. Lägsta avgift är 40 000 kr, högsta 400 000 kr.</p>
<p>Så räknas beloppet (nivåer enligt ändringen i AFS 2025:6):</p>
<ul>
<li><strong>500 eller fler sysselsatta:</strong> 400 000 kr.</li>
<li><strong>Färre än 500 sysselsatta:</strong> 40 000 kr + (antal sysselsatta − 1) × 721 kr, avrundat nedåt till närmaste hundratal.</li>
</ul>
<p>Den avgörande detaljen: antalet sysselsatta räknas över <strong>verksamhetens samtliga arbetsställen</strong> – inte bara laget som står på det aktuella bygget – och avser läget dagen för överträdelsen. Både anställda och inhyrd arbetskraft räknas in. Ett litet företag på plats kan alltså få en avgift baserad på hela bolagets storlek. Överträder man dessutom flera bestämmelser för samma arbete kan avgift påföras för var och en.</p>
<p><strong>Räkneexempel:</strong> ett byggföretag med 12 sysselsatta totalt, där en snickare arbetar utan räcke på 3 meters höjd. Avgiften blir 40 000 + (12 − 1) × 721 = 40 000 + 7 931 = 47 931, avrundat nedåt till <strong>47 900 kr</strong>. För ett räcke som hade tagit en halvtimme att montera.</p>

<h2>Checklista: undvik avgiften</h2>
<ul>
<li>Projektera kollektivt fallskydd redan i arbetsmiljöplanen – inte i efterhand.</li>
<li>Res räcken kompletta (minst 1 m, fotlist + mellanledare + överledare) <strong>innan</strong> arbete på höjd påbörjas.</li>
<li>Sätt gavelräcke vid takarbete, inte bara vid takfoten.</li>
<li>Täck eller räcka in alla hål och öppningar; spärra av genomtrampningsytor.</li>
<li>Använd sele endast efter en dokumenterad rimlighetsbedömning.</li>
<li>Kontrollera förankringspunkter innan selen kopplas in.</li>
<li>Ordna transporter så att räcken inte behöver demonteras tillfälligt.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte räcket – men det hjälper dig bevisa att kontrollen faktiskt gjordes. Med egenkontroll-mallen bygger du en återkommande rutin där räcken, hål, avspärrningar och förankringspunkter kryssas av innan arbetet startar, med datum och ansvarig. Underlaget kopplas till projektets arbetsmiljöplan, så att prioritetsordningen kollektivt-före-personligt och eventuella takbedömningar finns dokumenterade om Arbetsmiljöverket frågar. Du får inget automatiskt skydd mot avgifter, men du får ordning och spårbarhet – vilket är precis det som skiljer ett skött bygge från ett som chansar.</p>

<h2>Vanliga frågor</h2>
<h3>Vid vilken höjd krävs fallskydd på bygget?</h3>
<p>Fallskydd med gemensamma anordningar krävs normalt när fallhöjden är 2 meter eller mer. Men risk för fall till lägre nivå ska alltid förebyggas, även under 2 meter, om konsekvensen kan bli allvarlig – till exempel fall mot armeringsjärn eller ner i ett schakt.</p>
<h3>Får jag använda sele istället för räcke?</h3>
<p>Bara som sista utväg. Personligt fallskydd får användas när gemensamma fallskyddsanordningar inte kan användas på grund av arbetets art. Vid takarbete krävs dessutom en dokumenterad rimlighetsbedömning. Att välja selen för att det går snabbare är inte tillåtet.</p>
<h3>Hur mycket blir sanktionsavgiften om fallskydd saknas?</h3>
<p>Lägst 40 000 kr och högst 400 000 kr. För företag med färre än 500 sysselsatta räknas 40 000 kr + (antal sysselsatta − 1) × 721 kr, avrundat nedåt till närmaste hundratal. Antalet räknas över alla arbetsställen och inkluderar inhyrd personal.</p>
<h3>Vilken föreskrift gäller för fallskydd 2026?</h3>
<p>AFS 2023:13 &quot;Risker vid vissa typer av arbeten&quot;, kapitel 5 om byggnads- och anläggningsarbete. Den ersatte AFS 1999:3 den 1 januari 2025 och har ändrats genom AFS 2025:6 och AFS 2025:8. Stegar och ställningar regleras separat i AFS 2023:9.</p>

<h2>Kom igång</h2>
<p>Kollektivt fallskydd är nästan alltid både billigare och juridiskt säkrare än att chansa på selen – ett räcke kostar timmar, en sanktionsavgift kostar tiotusentals kronor. Sätt upp en fallskyddskontroll som rutin med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du kopplar kontrollen till arbetsmiljöplanen för hela projektet.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan – krav och innehåll</a> och <a href="/sv/blog/arbetsmiljoansvar-egenforetagare">Arbetsmiljöansvar för egenföretagare</a>.</p>
`;

const A_FALLSKYDD_KRAV_BYGG: BlogPost = {
  _id: "code-"+"fallskydd-krav-bygg",
  title: "Fallskydd på bygget 2026 – krav, regler och sanktionsavgift", slug: "fallskydd-krav-bygg", locale: "sv",
  excerpt: "Saknat fallskydd kan kosta 40 000–400 000 kr i sanktionsavgift utan domstol. Här är 2026-kraven: 2-metersregeln, kollektivt före sele och hur avgiften räknas.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_FALLSKYDD_KRAV_BYGG_HTML,
  seoTitle: "Fallskydd på bygget 2026 – krav | ByggExp", seoDescription: "Fallskyddskrav på bygget 2026: 2-metersregeln, kollektivt fallskydd före sele och sanktionsavgift 40 000–400 000 kr enligt AFS 2023:13. Så undviker du boten.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:12:00.000Z", createdAt: "2026-08-19T05:12:00.000Z", updatedAt: "2026-08-19T05:12:00.000Z",
};

const A_KMA_PLAN_MALL_HTML = `
<p>KMA står för <strong>Kvalitet, Miljö och Arbetsmiljö</strong> – de tre områden en KMA-plan (ibland kallad kvalitetsplan) binder ihop till ett dokument. För många mindre byggföretag dyker kravet upp först när en beställare begär en KMA-plan i upphandlingen, och då gäller det att ha något att visa. Den goda nyheten: planen behöver inte vara tjock. Den ska vara konkret, spegla hur ni faktiskt jobbar och gå att uppdatera per projekt. Här går vi igenom vad den måste innehålla enligt PBL, Miljöbalken och Arbetsmiljölagen – och hur du bygger en nedbantad variant som håller.</p>
<p><a href="/sv/verktyg/kvalitetsplan-mall">Ladda ner en färdig kvalitetsplan-mall (PDF & Excel) -&gt;</a></p>
<p><a href="/sv/verktyg/avvikelserapport-mall">Dokumentera avvikelser med vår gratis avvikelserapport-mall (PDF & Excel) -&gt;</a></p>

<p>Grunden i kvalitetsbenet är egenkontrollen. Börja med att ladda ner <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a> och bygg vidare därifrån.</p>

<h2>Vad är en KMA-plan – och måste du ha en?</h2>
<p>KMA är inget eget lagbegrepp. Det finns ingen paragraf som säger att du ska ha ett dokument som heter "KMA-plan". Kravet uppstår i stället när du lägger ihop tre regelverk: <strong>PBL</strong> (Plan- och bygglagen) för kvalitet och kontroll, <strong>Miljöbalken</strong> för miljö och avfall, och <strong>Arbetsmiljölagen med tillhörande AFS-föreskrifter</strong> för arbetsmiljön. En KMA-plan är helt enkelt ett samlat sätt att visa att du har koll på alla tre.</p>
<p>Det innebär två sorters krav. Vissa delar är <strong>lagkrav</strong> oavsett vad kunden tycker – till exempel dokumenterade riskbedömningar och en arbetsmiljöplan när ett projekt är tillräckligt stort eller innehåller riskfyllt arbete. Andra delar är <strong>beställarkrav</strong>: byggherren eller huvudentreprenören kräver en samlad KMA-plan som villkor för att anlita dig. Skilj på de två så vet du vad som är förhandlingsbart och vad som inte är det.</p>

<h2>De tre benen din KMA-plan måste täcka</h2>

<h3>Kvalitet</h3>
<p>Kvalitetsbenet vilar på PBL (2010:900, 10 kap.) och kontrollplanen. Byggherren ansvarar för att alla krav uppfylls, och i lov- och anmälningspliktiga projekt krävs normalt en <strong>kontrollansvarig (KA)</strong>. Den kontrollmetod som anges i kontrollplanen är oftast <strong>egenkontroll</strong> – att du som entreprenör kontrollerar och dokumenterar att arbetet uppfyller kraven. Egenkontrollen är därför det naturliga kvalitetsbenet i din KMA-plan.</p>

<h3>Miljö</h3>
<p>Miljöbenet styrs av Miljöbalken (1998:808) och Avfallsförordningen (2020:614). Sedan <strong>1 augusti 2020</strong> gäller skärpta krav på utsortering av bygg- och rivningsavfall: minst fraktionerna <strong>trä, mineral (betong, tegel, klinker, keramik, sten), metall, glas, plast och gips</strong> ska sorteras var för sig direkt vid källan. Till miljödelen hör också hantering av farligt avfall och kemikalier. En kort avfalls- och miljöplan per projekt räcker långt.</p>

<h3>Arbetsmiljö</h3>
<p>Arbetsmiljöbenet har två delar. Det löpande <strong>systematiska arbetsmiljöarbetet (SAM)</strong> – att undersöka, riskbedöma, åtgärda och följa upp – regleras sedan 1 januari 2025 i AFS 2023:1. Riskbedömningar, handlingsplaner och den årliga uppföljningen ska dokumenteras skriftligt oavsett företagets storlek; en skriftlig arbetsmiljöpolicy och skriftliga rutiner krävs vid 10 eller fler arbetstagare.</p>
<p>Den projektspecifika delen är <strong>arbetsmiljöplanen</strong>, som numera regleras av AFS 2023:3 (ersatte AFS 1999:3). En arbetsmiljöplan är obligatorisk i förväg om arbetet pågår mer än <strong>30 arbetsdagar med fler än 20 personer</strong> samtidigt vid något tillfälle, eller om det totalt överstiger <strong>500 persondagar</strong>. Den krävs dessutom <strong>alltid</strong> – oavsett storlek, även för en ensam hantverkare – om något av de 13 särskilt riskfyllda arbetena förekommer, till exempel fallrisk på två meter eller mer, risk att begravas i schakt eller arbete med tunga byggelement. Byggherren ansvarar för att planen finns; BAS-P upprättar den under projekteringen och BAS-U håller den uppdaterad på plats.</p>

<h2>Vad en nedbantad KMA-plan ska innehålla</h2>
<p>För ett mindre företag räcker en checklista som denna, uppdelad i företagsnivå och projektnivå:</p>
<ul>
<li><strong>Policyer</strong> – korta kvalitets-, miljö- och arbetsmiljöpolicyer på företagsnivå.</li>
<li><strong>Ansvarsfördelning</strong> – vem som är BAS-U, kontrollansvarig, miljöansvarig och vem som beslutar om åtgärder.</li>
<li><strong>Rutiner</strong> – hur ni gör riskbedömning, egenkontroll, avvikelsehantering och avfallssortering.</li>
<li><strong>Projektspecifik arbetsmiljöplan</strong> – ordnings- och skyddsregler, organisation och åtgärder för de riskfyllda arbeten som förekommer.</li>
<li><strong>Egenkontrollmallar</strong> – kontrollpunkter kopplade till kontrollplanen.</li>
<li><strong>Avfalls- och miljöplan</strong> – fraktioner, hämtning och hantering av farligt avfall.</li>
</ul>

<h2>Så bygger du KMA-planen steg för steg</h2>
<ol>
<li><strong>Företagsövergripande ledningssystem.</strong> Samla policyer och rutiner på ett ställe. För byggbranschen finns <strong>BF9K</strong> från Byggföretagen, ett certifierbart ledningssystem som integrerar kvalitet, miljö och arbetsmiljö och som kartlägger mot PBL – ett lättare alternativ än att köra separata ISO 9001, ISO 14001 och ISO 45001.</li>
<li><strong>Ta fram mallar.</strong> Skapa återanvändbara mallar för egenkontroll, riskbedömning och avfallsplan så du slipper börja om vid varje projekt.</li>
<li><strong>Bygg den projektspecifika delen.</strong> Fyll i arbetsmiljöplan och kontrollpunkter utifrån det aktuella projektets risker.</li>
<li><strong>Genomför egenkontrollerna.</strong> Dokumentera löpande under produktionen, inte i efterhand.</li>
<li><strong>Följ upp och revidera.</strong> Gör den årliga uppföljningen av SAM och uppdatera mallarna med det ni lärt er.</li>
</ol>

<h2>Företagsnivå vs projektnivå</h2>
<p>Nyckeln till en KMA-plan som faktiskt används är att skilja på det som gäller hela företaget och det som är unikt för varje projekt. Policyer och rutiner skriver du en gång. Arbetsmiljöplan, egenkontroller och avfallsplan skapas per projekt utifrån de gemensamma mallarna. Då blir varje ny plan en ifyllnadsövning i stället för ett skrivarbete från noll – och du kan bevisa spårbarhet mot beställaren.</p>

<h2>Vanliga misstag att undvika</h2>
<ul>
<li>Skriva en tjock plan som ingen läser i stället för korta, konkreta rutiner.</li>
<li>Tro att en liten firma slipper arbetsmiljöplan – de 13 riskfyllda arbetena gäller även soloföretagare.</li>
<li>Dokumentera egenkontroller i efterhand i stället för löpande.</li>
<li>Glömma avfallssorteringens sex fraktioner och farligt avfall i miljödelen.</li>
<li>Blanda ihop företagsnivå och projektnivå så planen måste skrivas om varje gång.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp lägger du upp dina egenkontroller som mallar en gång och kopplar dem sedan till varje projekt. Uppgifter och kontrollpunkter fördelas per projekt så att rätt person ansvarar för rätt kontroll, och dokumentationen samlas där arbetet utförs i stället för i lösa pappersblanketter. Det gör att kvalitetsbenet i din KMA-plan blir spårbart och lätt att visa upp för beställaren. ByggExp ersätter inte det juridiska ansvaret enligt PBL, Miljöbalken eller Arbetsmiljölagen – men det gör det enklare att hålla ordning på egenkontroller och uppgifter projekt för projekt.</p>

<h2>Vanliga frågor</h2>
<h3>Är en KMA-plan ett lagkrav?</h3>
<p>Nej, KMA-plan är inget eget lagbegrepp och ingen enskild lag kräver just det dokumentet. Kravet uppstår genom att kombinera PBL, Miljöbalken och Arbetsmiljölagen, och en samlad KMA-plan begärs ofta av beställaren i upphandlingen snarare än direkt av lagstiftaren.</p>
<h3>Måste ett litet företag ha en arbetsmiljöplan?</h3>
<p>Ja, i vissa fall. Arbetsmiljöplan krävs alltid – oavsett storlek, även för en ensam hantverkare – om något av de 13 särskilt riskfyllda arbetena förekommer, till exempel fallrisk på två meter eller mer. Annars krävs den när arbetet överstiger 30 arbetsdagar med fler än 20 personer samtidigt, eller totalt 500 persondagar.</p>
<h3>Vad är skillnaden mellan egenkontroll och kontrollplan?</h3>
<p>Kontrollplanen enligt PBL beskriver vilka kontroller som ska göras i projektet och beslutas i bygglovsprocessen. Egenkontrollen är den metod du som entreprenör använder för att kontrollera och dokumentera att arbetet uppfyller de kraven. Egenkontrollen är därmed kvalitetsbenet i KMA-planen.</p>
<h3>Räcker det med mallar, eller behöver jag ett ledningssystem?</h3>
<p>Mallar räcker för att komma igång, men ett företagsövergripande ledningssystem gör arbetet mer hållbart. För mindre byggföretag är Byggföretagens BF9K ett smidigt alternativ som integrerar kvalitet, miljö och arbetsmiljö utan att du behöver tre separata ISO-system.</p>

<h2>Kom igång</h2>
<p>Börja med <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> och bygg vidare med fler mallar i vår <a href="/sv/verktyg">verktygssamling</a>. Vill du se hur egenkontroller och uppgifter kopplas per projekt i praktiken? <a href="/sv/contact">Boka en demo</a> så visar vi hur du får KMA-planen att leva i vardagen i stället för i en pärm.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan – när krävs den och vad ska den innehålla</a>, <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a> och <a href="/sv/blog/bas-p-bas-u">BAS-P och BAS-U – roller och ansvar</a>.</p>
`;

const A_KMA_PLAN_MALL: BlogPost = {
  _id: "code-"+"kma-plan-mall",
  title: "KMA-plan mall: så bygger du en nedbantad plan som håller", slug: "kma-plan-mall", locale: "sv",
  excerpt: "KMA-plan behöver inte vara tjock. Så täcker du kvalitet, miljö och arbetsmiljö med korta rutiner och återanvändbara mallar per projekt.", tag: "Kvalitet & arbetsmiljö",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_KMA_PLAN_MALL_HTML,
  seoTitle: "KMA-plan mall för byggföretag | ByggExp", seoDescription: "Så bygger du en nedbantad KMA-plan som täcker kvalitet, miljö och arbetsmiljö enligt PBL, Miljöbalken och Arbetsmiljölagen – med mallar per projekt.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:33:00.000Z", createdAt: "2026-08-19T05:33:00.000Z", updatedAt: "2026-08-19T05:33:00.000Z",
};

const A_NYA_GRANSVARDEN_2026_DIISOCYANATER_HTML = `
<p>Från och med senast 9 april 2026 gäller skärpta hygieniska gränsvärden för diisocyanater i svensk arbetsmiljö. Det berör i praktiken alla som jobbar med PU-skum, härdplastfärg, tvåkomponentslim och golvbeläggningar – alltså en stor del av landets målare, golvläggare, isolerare och snickare. De nya värdena kommer från EU-direktivet (EU) 2024/869 och genomförs i den svenska föreskriften AFS 2023:14. Här går vi igenom de exakta siffrorna, datumen och vad ditt företag konkret måste göra.</p>

<p>Ett strukturerat sätt att fånga upp de här kraven i det dagliga arbetet är att bygga in dem i egenkontrollen – börja gärna med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a> och komplettera den med kemikalie- och exponeringsrutinerna nedan.</p>

<h2>Vad är diisocyanater och var i bygget möter du dem?</h2>
<p>Diisocyanater är en grupp reaktiva kemikalier som används för att härda polyuretan. De vanligaste är MDI, TDI, HDI och IPDI. Du möter dem i fler produkter än du kanske tror:</p>
<ul>
<li>Fogskum och isolerskum (PU-skum) på burk eller i tvåkomponentssystem.</li>
<li>Tvåkomponents PU-lim och PU-lack.</li>
<li>Härdplastfärg och rostskyddsfärg.</li>
<li>Golvbeläggningar, tätskikt och gjuthartser.</li>
</ul>
<p>Problemet är hälsorisken. Diisocyanater är kraftigt luftvägssensibiliserande och räknas som en av de vanligaste orsakerna till arbetsrelaterad astma i byggbranschen. Den som en gång blivit allergisk kan reagera på mycket låga halter – det finns ingen säker tröskel för en redan sensibiliserad person. Därför är hela regelverket byggt kring att minska exponeringen så långt det går.</p>

<h2>De nya gränsvärdena 2026 – exakta siffror</h2>
<p>Direktiv (EU) 2024/869 inför ett bindande yrkeshygieniskt gränsvärde för diisocyanater, mätt som NCO-grupper i luft. Det är viktigt att skilja på övergångsvärdet och slutvärdet:</p>
<ul>
<li><strong>Övergångsvärde (gäller till 31 december 2028):</strong> nivågränsvärde 10 µg NCO/m³ (8 timmar) och korttidsgränsvärde 20 µg NCO/m³ (15 minuter).</li>
<li><strong>Slutvärde (bindande från 1 januari 2029):</strong> nivågränsvärde 6 µg NCO/m³ (8 timmar) och korttidsgränsvärde 12 µg NCO/m³ (15 minuter).</li>
</ul>
<p>Sverige, liksom övriga medlemsstater, ska ha genomfört direktivet i nationell rätt senast <strong>9 april 2026</strong> (artikel 3). Det är det centrala 2026-datumet. Gränsvärdena implementeras i AFS 2023:14 &quot;Gränsvärden för luftvägsexponering i arbetsmiljön&quot; – den föreskrift som ersatte tidigare AFS 2018:1 i den nya regelstrukturen som gäller från 1 januari 2025.</p>
<p>Samma direktiv skärper även gränsvärdena för bly (0,03 mg/m³ över 8 timmar och biologiskt gränsvärde 30 µg Pb/100 ml blod fram till 31 december 2028, därefter 15 µg Pb/100 ml från 2029). Direktiv (EU) 2024/869 omfattar enligt sin titel enbart bly och diisocyanater – gränsvärdet för krom (VI) har fastställts i tidigare EU-direktiv och berörs alltså inte av den här ändringen. Arbetar du med rivning, blästring eller heta arbeten på gamla ytor kan även bly-värdena beröra dig.</p>

<h2>Varför sänks värdena?</h2>
<p>Bakgrunden är EU:s arbete med att minska exponeringen för cancerframkallande, mutagena och reproduktionsstörande ämnen samt sensibiliserande kemikalier. Diisocyanaternas dokumenterade hälsorisk – astma, kontaktallergi och luftvägsbesvär – tillsammans med att skyddet ska vara likvärdigt i hela unionen ligger bakom skärpningen. Gränsvärdena för bly och diisocyanater sänks som en direkt följd av EU-direktivet (EU) 2024/869.</p>

<h2>Utbildningskravet enligt REACH – redan i kraft</h2>
<p>Många glömmer att ett hårt krav redan gäller. Sedan 24 augusti 2023 kräver REACH-restriktionen (post 74 i bilaga XVII, förordning (EU) 2020/1149) dokumenterad utbildning för <strong>all</strong> industriell och yrkesmässig användning av produkter som innehåller mer än 0,1 viktprocent diisocyanater. Utbildningen ska förnyas minst vart femte år.</p>
<p>Det gäller alltså redan idag för de flesta fogskum, PU-lim och härdplastprodukter – och det omfattar även proffs och egenföretagare, inte bara stora företag. Utbildningen ska ge kunskap om riskerna, säker hantering, rätt skyddsutrustning och hur man agerar vid exponering. Kan du inte visa upp giltigt utbildningsbevis får produkten formellt inte användas.</p>

<h2>Vad måste ditt företag göra konkret?</h2>
<p>De nya gränsvärdena betyder att din riskbedömning måste räknas om mot lägre tal. Gör så här:</p>
<ul>
<li>Uppdatera riskbedömningen enligt AFS och stäm av exponeringen mot övergångsvärdet 10/20 µg NCO/m³ redan nu.</li>
<li>Planera exponeringsmätningar där arbetet kan ligga nära gränsvärdet, exempelvis vid större skumnings- eller lackeringsjobb i slutna utrymmen.</li>
<li>Prioritera tekniska åtgärder: punktutsug och god ventilation kommer alltid före personligt skydd.</li>
<li>Använd rätt andningsskydd när halten inte kan sänkas tillräckligt – kombinationsfilter A mot organiska gaser plus partikelfilter, eller friskluftsmatat skydd vid sprutning.</li>
<li>Överväg substitution: finns det ett vattenbaserat eller diisocyanatfritt alternativ för uppgiften?</li>
<li>Hantera fogskum med särskild försiktighet – skydda hud och andningsvägar även vid små punktinsatser, eftersom sensibilisering kan ske vid låga halter.</li>
<li>Dokumentera allt: produkter, säkerhetsdatablad, mätningar, utbildningsbevis och vidtagna åtgärder. Handlingar ska kunna visas upp vid tillsyn.</li>
</ul>

<h2>Medicinska kontroller och härdplastutbildning</h2>
<p>Utöver REACH-utbildningen gäller svenska regler om medicinska kontroller vid arbete med härdplaster. För arbete som innebär exponering för diisocyanater krävs som regel läkarundersökning och en bedömning av tjänstbarhet innan arbetet påbörjas, och därefter periodiska kontroller. Den som har eller utvecklar astma eller luftvägsallergi kan behöva omplaceras. Se till att intyg och kontrolldatum finns dokumenterade och bevakas – här passar det bra att koppla in samma egenkontrollrutin som du använder för övrig kvalitets- och arbetsmiljödokumentation. Kom ihåg att resultat av medicinska kontroller och tjänstbarhetsbedömningar ska sparas så länge Arbetsmiljöverkets föreskrifter kräver – för den här typen av exponering handlar det om betydligt längre tid än vanlig bokföring, så förvara intygen säkert och långsiktigt.</p>

<h2>Checklista inför 9 april 2026</h2>
<ol>
<li>Inventera alla produkter som kan innehålla diisocyanater (skum, lim, lack, färg, tätskikt).</li>
<li>Läs säkerhetsdatabladen och notera halt av diisocyanater samt rekommenderat skydd.</li>
<li>Säkra att alla som hanterar produkterna har giltiga REACH-utbildningsbevis.</li>
<li>Uppdatera riskbedömningen mot de nya gränsvärdena.</li>
<li>Planera in exponeringsmätningar där det behövs.</li>
<li>Se över ventilation, punktutsug och andningsskydd.</li>
<li>Kontrollera att medicinska kontroller och tjänstbarhetsbedömningar är aktuella.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp löser inte kemikaliemätningarna åt dig, men verktyget hjälper dig att hålla ihop dokumentationen som tillsynen efterfrågar. Med egenkontroll-mallen bygger du återkommande punkter för kemikaliehantering, skyddsutrustning och utbildningsbevis, och du kan koppla riskbedömning och kontrollpunkter till rätt projekt. På så sätt ligger inte utbildningsdatum och mätningar i en pärm som ingen tittar i, utan blir en naturlig del av jobbrutinen som är lätt att visa upp om Arbetsmiljöverket knackar på.</p>

<h2>Vanliga frågor</h2>
<h3>När börjar de nya gränsvärdena gälla?</h3>
<p>Sverige ska ha genomfört direktivet senast 9 april 2026. Övergångsvärdet 10/20 µg NCO/m³ gäller till 31 december 2028, och de strängare värdena 6/12 µg NCO/m³ blir fullt bindande från 1 januari 2029.</p>
<h3>Räcker det att jobba som förr utan andningsskydd vid små fogskumsjobb?</h3>
<p>Nej. Diisocyanater kan orsaka sensibilisering även vid låga halter och små insatser. Riskbedömningen avgör skyddsnivån, men försiktighet och rätt skydd krävs även vid punktinsatser.</p>
<h3>Omfattas enmansföretag av kraven?</h3>
<p>Ja. REACH-utbildningskravet gäller all yrkesmässig användning, även egenföretagare. Har du inget giltigt utbildningsbevis får produkter med mer än 0,1 viktprocent diisocyanater formellt inte användas.</p>
<h3>Vad är skillnaden mellan övergångsvärde och slutvärde?</h3>
<p>Övergångsvärdet (10/20 µg NCO/m³) är en högre, tillfällig nivå som gäller fram till 31 december 2028. Slutvärdet (6/12 µg NCO/m³) är den strängare nivå som blir bindande från 1 januari 2029.</p>

<h2>Kom igång</h2>
<p>Börja med att inventera dina produkter och samla utbildningsbevisen – och lägg in kemikalie- och skyddskontrollerna i <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a>. Vill du se hur riskbedömning och dokumentation kan hänga ihop i ett flöde är du välkommen att <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoansvar-egenforetagare">Arbetsmiljöansvar för egenföretagare</a> och <a href="/sv/blog/arbetsmiljoplan">Så skriver du en arbetsmiljöplan</a>.</p>
`;

const A_NYA_GRANSVARDEN_2026_DIISOCYANATER: BlogPost = {
  _id: "code-"+"nya-gransvarden-2026-diisocyanater",
  title: "Nya gränsvärden 2026 för diisocyanater – vad byggföretag måste göra", slug: "nya-gransvarden-2026-diisocyanater", locale: "sv",
  excerpt: "Från senast 9 april 2026 gäller skärpta gränsvärden för diisocyanater. Här är de exakta siffrorna, datumen och vad ditt byggföretag konkret måste göra.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_NYA_GRANSVARDEN_2026_DIISOCYANATER_HTML,
  seoTitle: "Nya gränsvärden 2026: diisocyanater | ByggExp", seoDescription: "Skärpta gränsvärden för diisocyanater gäller senast 9 april 2026. Exakta siffror, datum, REACH-utbildning och checklista för hantverkare och byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:36:00.000Z", createdAt: "2026-08-19T05:36:00.000Z", updatedAt: "2026-08-19T05:36:00.000Z",
};

const A_SKYDDSROND_BYGG_CHECKLISTA_HTML = `
<p>Skyddsronden är navet i det systematiska arbetsmiljöarbetet på byggarbetsplatsen. Det är på ronden ni fångar riskerna innan de blir tillbud – lösa räcken, en ställning som inte är komplett, dammspridning eller el som dragits provisoriskt. Från 1 januari 2025 moderniserades regelverket: AFS 2001:1 ersattes av <strong>AFS 2023:1</strong> (systematiskt arbetsmiljöarbete) och bygg fick dessutom nya <strong>AFS 2023:3</strong> om projektering och byggarbetsmiljösamordning. Om du söker en tydlig <em>skyddsrond bygg checklista</em> och vill veta hur ofta ni ska gå, vem som deltar och vad som ska protokollföras – här är den praktiska genomgången.</p>

<p>Vill du komma igång direkt kan du ladda ner och fylla i <a href="/sv/verktyg/skyddsrond-mall">vår gratis mall för skyddsrondsprotokoll –&gt;</a> och ha den med på nästa rond.</p>

<h2>Vad är en skyddsrond – och vad säger lagen 2026?</h2>
<p>Ordet "skyddsrond" står faktiskt inte i lagtexten. Det är däremot den etablerade metoden för att uppfylla det lagkrav som finns: arbetsgivaren ska <strong>regelbundet undersöka arbetsmiljön och bedöma riskerna</strong>. I AFS 2023:1 nämns planerade skyddsronder, dagliga kontroller, mätningar och intervjuer som exempel på hur den undersökningen kan gå till.</p>
<p>Det centrala kravet är att riskbedömningen alltid ska <strong>dokumenteras skriftligt</strong>. Dokumentationen ska visa vilka riskerna är och om de är allvarliga. På bygg- och anläggningsprojekt gäller dessutom AFS 2023:3, som reglerar ansvaret för byggherre, projektörer och de två samordnarrollerna Bas-P (planering och projektering) och Bas-U (utförandet). Skyddsronden är alltså inte en formalitet – den är själva beviset på att ni undersöker och åtgärdar arbetsmiljön löpande.</p>

<h2>Hur ofta ska ni gå skyddsrond?</h2>
<p>Lagen sätter inget universellt intervall. Frekvensen är <strong>riskbaserad</strong> – ju högre risk, desto oftare. För byggverksamhet, som hör till de mer riskfyllda branscherna, innebär det i praktiken täta ronder: ofta månadsvis, och gärna vid varje ny fas eller etapp där förutsättningarna på platsen ändras. En lågriskarbetsplats kan klara sig med glesare ronder, ner mot en gång per år.</p>
<p>Poängen är att <strong>ni bestämmer intervallet själva – men valet måste kunna motiveras och dokumenteras</strong>. Ett rimligt upplägg på ett bygge: planerad skyddsrond varje månad, kompletterad med skyddsmöten och dagliga koll av det arbetsledaren och yrkesarbetarna ser på plats. När ni går över från stomme till stomkomplettering, eller drar igång rivning, bör en extra rond läggas in eftersom riskbilden blir en annan.</p>

<h2>Vem deltar?</h2>
<p>Skyddsronden går sällan ensam. På ett normalt bygge är följande roller inblandade:</p>
<ul>
<li><strong>Arbetsledare eller chef</strong> – bär arbetsgivaransvaret och är den som beslutar om åtgärder och resurser.</li>
<li><strong>Skyddsombud</strong> – ska utses på arbetsplatser med minst 5 anställda och går normalt ronden tillsammans med arbetsledaren.</li>
<li><strong>Bas-U</strong> – på en arbetsplats med flera entreprenörer samordnar Bas-U det löpande skyddsarbetet, inklusive skyddsronder, stickprov och skyddsmöten. Bas-U ger klartecken innan arbete startar, ser till att alla får introduktion och håller arbetsmiljöplanen uppdaterad.</li>
<li><strong>Skyddskommitté</strong> – vid 50 eller fler anställda ska en skyddskommitté finnas utöver skyddsombud. Där blir rondens resultat och handlingsplanen naturliga punkter på dagordningen.</li>
</ul>
<p>En viktig befogenhet att känna till: Bas-U får <strong>stoppa arbetet vid omedelbar och allvarlig fara</strong>. Det är inte en förhandlingsfråga på plats – det är ett verktyg för att skydda liv och hälsa direkt.</p>

<h2>Vad ska protokollföras?</h2>
<p>Skyddsronden dokumenteras i ett protokoll, och det är här den blir juridiskt hållbar. Varje observation ska kopplas till tre saker:</p>
<ol>
<li><strong>Bristen</strong> – vad är fel eller riskabelt?</li>
<li><strong>Ansvarig person</strong> – vem ska åtgärda det?</li>
<li><strong>Åtgärd och deadline</strong> – vad ska göras och när ska det vara klart?</li>
</ol>
<p>Tillsammans bildar det en <strong>handlingsplan</strong> som är en del av det systematiska arbetsmiljöarbetet. En vanlig mallmodell använder ja/nej-svar per kontrollpunkt och en kolumn som automatiskt genererar åtgärdslistan för de punkter som fått "nej". Protokollet ska <strong>undertecknas av arbetsgivarrepresentant och skyddsombud</strong> och delges deltagarna. På nästa rond eller skyddsmöte följer ni upp att åtgärderna faktiskt är utförda – annars fyller dokumentationen ingen funktion.</p>

<h2>Praktisk skyddsrond-checklista för byggarbetsplatsen</h2>
<p>Använd den här listan som stomme och anpassa efter projektets fas. Branschspecifika checklistor finns också fritt hos Byggnads och Prevent:</p>
<ul>
<li><strong>Fallskydd och räcken</strong> – kompletta räcken vid kanter, håltäckningar, säkra öppningar.</li>
<li><strong>Ställningar</strong> – godkänd och komplett montering, spirakort/skyltning, säker tillträdesväg.</li>
<li><strong>Maskiner och lyft</strong> – besiktning, säkerhetsanordningar, lyftredskap och kättinglängor.</li>
<li><strong>El och tillfälliga installationer</strong> – jordfelsbrytare, hela kablar, provisorisk belysning.</li>
<li><strong>Ordning och städning</strong> – fria transportvägar, hantering av spill och avfall.</li>
<li><strong>Personlig skyddsutrustning</strong> – hjälm, skyddsskor, ögonskydd, används den?</li>
<li><strong>Damm och kvarts</strong> – utsug, vattenbegjutning, andningsskydd vid slipning och kapning.</li>
<li><strong>Buller</strong> – bullrande moment, hörselskydd tillgängliga.</li>
<li><strong>Kemiska produkter</strong> – förvaring, märkning och säkerhetsdatablad (SDB) på plats.</li>
<li><strong>Brand och utrymning</strong> – släckutrustning, heta arbeten-rutiner, fria utrymningsvägar.</li>
<li><strong>Första hjälpen</strong> – utrustning, uppmärkning, utsedd person.</li>
<li><strong>Väder och kyla</strong> – halka, värmestugor, anpassning vid kyla och blåst.</li>
</ul>

<h2>5 vanliga misstag att undvika</h2>
<ul>
<li><strong>Rond utan uppföljning</strong> – åtgärder noteras men kollas aldrig av på nästa rond.</li>
<li><strong>Otydligt ansvar</strong> – en brist utan namngiven ansvarig blir sällan åtgärdad.</li>
<li><strong>Ingen skriftlig riskbedömning</strong> – muntliga överenskommelser räcker inte enligt AFS 2023:1.</li>
<li><strong>Fast intervall utan motivering</strong> – samma frekvens oavsett fas, trots att riskbilden ändras.</li>
<li><strong>Skyddsombudet utanför</strong> – ronden går utan den som ska företräda arbetstagarna.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp fyller ni i skyddsrondsprotokollet digitalt direkt på plats, med ja/nej per kontrollpunkt. De punkter som får "nej" blir automatiskt en handlingsplan med ansvarig och deadline, så inget faller mellan stolarna. Protokollet sparas med datum och kan delges deltagarna, och kompletterar er löpande <a href="/sv/verktyg/egenkontroll-mall">egenkontroll</a>. Dokumentationen ligger samlad så att den finns tillgänglig om Arbetsmiljöverket frågar – ni behöver inte leta i pärmar eller mejltrådar. ByggExp ersätter inte skyddsombudets bedömning eller Bas-U:s ansvar, men gör själva dokumentationen och uppföljningen snabb och spårbar.</p>

<h2>Vanliga frågor</h2>
<h3>Är skyddsrond lagstadgat?</h3>
<p>Själva ordet står inte i lagen, men kravet gör det. Enligt AFS 2023:1 ska arbetsgivaren regelbundet undersöka arbetsmiljön och bedöma riskerna skriftligt, och skyddsronden är den etablerade metoden för att uppfylla det.</p>
<h3>Hur ofta ska skyddsrond göras på ett bygge?</h3>
<p>Intervallet är riskbaserat och något ni bestämmer själva, men det måste kunna motiveras. På byggarbetsplatser innebär det ofta månadsvis, plus en extra rond vid varje ny fas eller etapp när riskbilden förändras.</p>
<h3>Vem ska skriva under skyddsrondsprotokollet?</h3>
<p>Protokollet undertecknas av en arbetsgivarrepresentant och skyddsombudet, och delges sedan deltagarna. Varje brist ska kopplas till ansvarig person, åtgärd och deadline – det blir en handlingsplan som följs upp på nästa rond.</p>
<h3>Vad är skillnaden mot Bas-U:s ansvar?</h3>
<p>Bas-U samordnar det löpande skyddsarbetet på en arbetsplats med flera entreprenörer, inklusive att organisera skyddsronder och skyddsmöten, och får stoppa arbete vid omedelbar allvarlig fara. Skyddsronden är ett av verktygen Bas-U använder för att fullgöra den samordningen.</p>

<h2>Kom igång</h2>
<p>Ladda ner <a href="/sv/verktyg/skyddsrond-mall">vår mall för skyddsrondsprotokoll</a> och ta med den på nästa rond, eller boka en <a href="/sv/contact">demo</a> så visar vi hur ni får handlingsplanen och uppföljningen på plats digitalt.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan på bygget</a>, <a href="/sv/blog/bas-p-bas-u">Bas-P och Bas-U – roller och ansvar</a>, <a href="/sv/blog/fallskydd-krav-bygg">Fallskydd – krav på bygget</a>.</p>
`;

const A_SKYDDSROND_BYGG_CHECKLISTA: BlogPost = {
  _id: "code-"+"skyddsrond-bygg-checklista",
  title: "Skyddsrond på bygget – checklista, intervall och protokoll (2026)", slug: "skyddsrond-bygg-checklista", locale: "sv",
  excerpt: "Praktisk guide till skyddsronden på bygget: riskbaserat intervall, roller, protokoll och en färdig checklista enligt de nya reglerna 2025–2026.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_SKYDDSROND_BYGG_CHECKLISTA_HTML,
  seoTitle: "Skyddsrond bygg: checklista 2026 | ByggExp", seoDescription: "Hur ofta ska ni gå skyddsrond, vem deltar och vad ska protokollföras? Praktisk checklista för byggarbetsplatsen enligt AFS 2023:1 och 2023:3.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T11:00:00.000Z", createdAt: "2026-08-19T11:00:00.000Z", updatedAt: "2026-08-19T11:00:00.000Z",
};

const A_RISKBEDOMNING_BYGGARBETSPLATS_MALL_HTML = `
<p>En skriftlig riskbedömning innan varje riskfyllt moment är inte en rekommendation – det är ett lagkrav som gäller alla arbetsgivare, oavsett om du har trettio anställda eller är en enmansfirma med en lärling. Många firmor kör fortfarande på gamla mallar som hänvisar till föreskrifter som inte längre finns, och det blir ett problem den dag Arbetsmiljöverket eller en byggherre granskar dokumentationen.</p>

<p>Vill du komma igång direkt kan du utgå från vår gratis riskbedömningsmall &rarr; <a href="/sv/verktyg/riskbedomning-mall">/sv/verktyg/riskbedomning-mall</a> och anpassa den efter de moment du faktiskt utför.</p>

<h2>Vad säger lagen 2026?</h2>
<p>Sedan 1 januari 2025 gäller Arbetsmiljöverkets nya regelstruktur. De tidigare cirka 67 föreskrifterna (AFS) är omgrupperade till 15 nya, mer omfattande föreskrifter. Det innebär bland annat att gamla AFS 2001:1 om systematiskt arbetsmiljöarbete och AFS 1999:3 om byggnads- och anläggningsarbete inte längre gäller. Om din mall eller pärm hänvisar till de numren är den föråldrad.</p>
<p>Kravet på riskbedömning finns nu i <strong>AFS 2023:1</strong> (systematiskt arbetsmiljöarbete). Riskbedömningen ska <strong>alltid vara skriftlig</strong> och gäller alla arbetsgivare oavsett antal anställda. Det skiljer sig från exempelvis skriftlig fördelning av arbetsmiljöuppgifter, som bara krävs vid tio eller fler anställda. Skriftlighetskravet för riskbedömning är alltså universellt – även den lilla firman med en anställd träffas.</p>

<h2>Riskbedömning vs. arbetsmiljöplan – reda ut begreppen</h2>
<p>Två dokument blandas ofta ihop, men de har olika hemvist och olika syfte:</p>
<ul>
<li><strong>Riskbedömning</strong> är din interna genomgång av riskerna per arbetsmoment, enligt AFS 2023:1. Den ägs av dig som arbetsgivare och beskriver hur just ditt arbete ska utföras säkert.</li>
<li><strong>Arbetsmiljöplan (AMP)</strong> är byggarbetsplatsens gemensamma dokument enligt <strong>AFS 2023:3</strong> (projektering och byggarbetsmiljösamordning). Byggherren ansvarar för att den upprättas.</li>
</ul>
<p>De hänger ihop – dina riskbedömningar är ofta underlag till AMP:n – men de är inte samma sak. En AMP ersätter inte kravet på att du gör egna riskbedömningar för dina moment, och en riskbedömning ersätter inte AMP:n.</p>

<h2>När krävs skriftlig riskbedömning – och när krävs AMP?</h2>
<p>Skriftlig riskbedömning krävs alltid, innan arbetet påbörjas och innan varje förändring: nytt moment, ny maskin, ny metod eller ny bemanning.</p>
<p>För bygg- och anläggningsarbete ska byggherren dessutom se till att en skriftlig arbetsmiljöplan upprättas <em>innan</em> första byggnads- eller anläggningsarbetet påbörjas, om minst ett villkor är uppfyllt: något av de tretton arbetena med särskild risk förekommer, eller förhandsanmälan krävs.</p>
<p>Tretton-punktslistan omfattar bland annat:</p>
<ul>
<li>fallrisk med nivåskillnad på 2 meter eller mer</li>
<li>risk för ras eller att begravas i jordmassor</li>
<li>montering och demontering av tunga byggelement</li>
<li>arbete med hälsofarliga kemiska eller biologiska ämnen</li>
<li>rivning av bärande konstruktioner</li>
<li>arbete nära högspänningsledningar</li>
<li>arbete där passerande fordonstrafik förekommer</li>
<li>sprängning, dykeriarbete, arbete i brunnar och tunnlar, samt drunkningsrisk</li>
</ul>
<p>Eftersom fallrisk över 2 meter förekommer i nästan varje takarbete, ställningsarbete eller fasadjobb behöver en AMP i praktiken nästan alltid upprättas – även när bara en ensamföretagare arbetar. Ett litet projekt befriar alltså inte från AMP-kravet om ett moment på listan förekommer.</p>
<p>Förhandsanmälan till Arbetsmiljöverket krävs när arbetet beräknas pågå längre än 30 arbetsdagar <strong>och</strong> mer än 20 personer sysselsätts samtidigt vid något tillfälle, eller när det totala antalet persondagar beräknas överstiga 500.</p>

<h2>Så gör du riskbedömningen steg för steg</h2>
<p>Gör bedömningen innan momentet startar, inte efteråt. Processen enligt Arbetsmiljöverket är fem steg:</p>
<ol>
<li><strong>Identifiera riskerna</strong> per arbetsmoment – gå igenom vad som faktiskt ska göras och var det kan gå fel.</li>
<li><strong>Bedöm allvarligheten</strong> med sannolikhet gånger konsekvens, ofta med en enkel riskmatris (låg/medel/hög).</li>
<li><strong>Åtgärda allvarliga risker omedelbart.</strong> Vid riskfyllt arbete ska det finnas skriftliga instruktioner för hur arbetet utförs säkert.</li>
<li><strong>Handlingsplan</strong> för det som inte åtgärdas direkt: vad ska göras, vem ansvarar och när ska det vara klart. Den ska vara skriftlig.</li>
<li><strong>Kontrollera och följ upp</strong> att åtgärderna fungerar och att riskerna faktiskt minskat.</li>
</ol>

<h2>Vad en enkel mall för liten firma bör innehålla</h2>
<p>AFS 2023:3 upprepar att kraven ska motsvara byggprojektets storlek, komplexitet och risknivå. Det innebär proportionalitet: en liten firma kan hålla riskbedömning och AMP kortfattade, men de måste finnas, vara skriftliga och vara aktuella för de moment som faktiskt utförs. En användbar mall innehåller:</p>
<ul>
<li>Projekt och plats, datum, och vem som är ansvarig</li>
<li>Arbetsmoment (rad för rad)</li>
<li>Identifierad risk per moment</li>
<li>Bedömd allvarlighet (sannolikhet x konsekvens)</li>
<li>Åtgärd samt ansvarig och klardatum</li>
<li>Signatur</li>
</ul>
<p>Exempel på en rad: momentet <em>takarbete på 4 meters höjd</em> &rarr; risk <em>fall från hög höjd</em> &rarr; allvarlighet <em>hög</em> &rarr; åtgärd <em>ställning med skyddsräcke, personlig fallskyddsutrustning, skriftlig arbetsinstruktion</em> &rarr; ansvarig <em>arbetsledare</em> &rarr; klart <em>innan momentet startar</em>.</p>

<h2>Vanliga misstag och vad de kostar</h2>
<p>De dyraste felen handlar sällan om ont uppsåt utan om att dokumentet aldrig upprättades. Sanktionsavgifterna är fasta:</p>
<ul>
<li>Saknad arbetsmiljöplan: <strong>50 000 kr</strong> om projektet är så stort att förhandsanmälan krävs, och <strong>10 000 kr</strong> om projektet är mindre.</li>
<li>Saknad förhandsanmälan: <strong>5 000 kr</strong> för byggherren.</li>
</ul>
<p>Ett konkret exempel: hösten 2025 beslutade Arbetsmiljöverket om 10 000 kr för saknad AMP vid ett hotellbygge i Södertälje. Utöver avgiften finns arbetsgivaransvaret vid en olycka – där en dokumenterad, uppföljd riskbedömning är skillnaden mellan att ha gjort sitt jobb och att stå utan skydd.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp utgår du från en färdig riskbedömningsmall som är byggd på den nuvarande AFS-strukturen, så att du slipper hänvisningar till upphävda föreskrifter. Du fyller i moment, risk, allvarlighet och åtgärd, och får ut ett skriftligt dokument med datum och signatur som du kan visa upp vid granskning. Riskbedömningen kopplas naturligt ihop med din löpande <a href="/sv/verktyg/egenkontroll-mall">egenkontroll</a>, så att undersökning, åtgärd och uppföljning hänger samman i stället för att ligga i lösa papper. Verktygen tar inte över ansvaret – bedömningen måste alltid göras av dig som känner arbetet – men de gör att dokumentationen faktiskt blir gjord och sparad.</p>

<h2>Vanliga frågor</h2>
<h3>Måste även en enmansfirma göra skriftlig riskbedömning?</h3>
<p>Ja, om du har minst en anställd. Skriftlighetskravet i AFS 2023:1 gäller alla arbetsgivare oavsett storlek. Det är en av få saker där den lilla firman behandlas exakt som den stora.</p>
<h3>Behöver jag arbetsmiljöplan för ett litet takjobb?</h3>
<p>Oftast ja. Fallrisk med nivåskillnad på 2 meter eller mer finns på tretton-punktslistan över arbeten med särskild risk, och då ska en AMP upprättas innan arbetet påbörjas – även vid små projekt och även när bara en ensamföretagare arbetar.</p>
<h3>När måste jag göra förhandsanmälan till Arbetsmiljöverket?</h3>
<p>När arbetet beräknas pågå längre än 30 arbetsdagar och mer än 20 personer sysselsätts samtidigt vid något tillfälle, eller när det totala antalet persondagar överstiger 500. Ansvaret ligger på byggherren.</p>
<h3>Duger våra gamla mallar från 2001:1 och 1999:3?</h3>
<p>Nej. De föreskrifterna gäller inte längre sedan 1 januari 2025. Innehållet finns nu i AFS 2023:1 och AFS 2023:3, och en mall som hänvisar till de gamla numren är föråldrad och bör bytas ut.</p>

<h2>Kom igång</h2>
<p>Ladda ner och anpassa vår <a href="/sv/verktyg/riskbedomning-mall">gratis riskbedömningsmall</a> och koppla den till din <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmall</a> för en komplett rutin. Vill du se hur riskbedömning, egenkontroll och dokumentation hänger ihop i praktiken? <a href="/sv/contact">Boka en demo</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan (AMP) – krav och innehåll</a>, <a href="/sv/blog/fallskydd-krav-bygg">Fallskydd – krav på bygget</a>, <a href="/sv/blog/heta-arbeten">Heta arbeten – regler och tillstånd</a>.</p>
`;

const A_RISKBEDOMNING_BYGGARBETSPLATS_MALL: BlogPost = {
  _id: "code-"+"riskbedomning-byggarbetsplats-mall",
  title: "Riskbedömning på byggarbetsplats – mall och krav enligt AFS (2026)", slug: "riskbedomning-byggarbetsplats-mall", locale: "sv",
  excerpt: "Skriftlig riskbedömning innan riskfyllda moment är lagkrav för alla arbetsgivare – så gör du den rätt enligt den nya AFS-strukturen, även som liten firma.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_RISKBEDOMNING_BYGGARBETSPLATS_MALL_HTML,
  seoTitle: "Riskbedömning byggarbetsplats mall | ByggExp", seoDescription: "Skriftlig riskbedömning innan varje riskfyllt moment är lagkrav – även för småfirmor. Så gör du enligt AFS 2023:1 och 2023:3. Ladda ner gratis mall.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T11:24:00.000Z", createdAt: "2026-08-19T11:24:00.000Z", updatedAt: "2026-08-19T11:24:00.000Z",
};

const A_SYSTEMATISKT_ARBETSMILJOARBETE_LITET_BYGGFORETAG_HTML = `
<p>Många små byggföretag tror att systematiskt arbetsmiljöarbete (SAM) är något för de stora aktörerna med HR-avdelning och pärmar i hyllmeter. Det stämmer inte. SAM gäller <strong>alla</strong> arbetsgivare enligt AFS 2023:1 – även enmansföretag med en enda anställd. Den goda nyheten är att kraven på hur mycket ni faktiskt måste skriva ner skiljer sig beroende på hur många ni är. Under tio anställda slipper ni en hel del papper, om ni bara vet var gränsen går.</p>

<p>Den här artikeln reder ut exakt vad ett byggföretag med två, tre eller fem anställda måste dokumentera – och vad som räcker att ha muntligt. Ett effektivt sätt att komma igång med den skriftliga delen är att utgå från en färdig struktur: testa <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll- och riskbedömningsmall &rarr;</a> och slipp bygga allt från noll.</p>

<h2>Vad är SAM och vad ändrades 2025?</h2>
<p>Den 1 januari 2025 trädde AFS 2023:1 – &quot;Systematiskt arbetsmiljöarbete – grundläggande skyldigheter för dig med arbetsgivaransvar&quot; – i kraft och ersatte den gamla AFS 2001:1. Samtidigt sorterade Arbetsmiljöverket om cirka 2 300 paragrafer i de tidigare föreskrifterna till 15 nya, tydligare strukturerade regelverk (AFS 2023:1–15).</p>
<p>Det viktiga att förstå: <strong>grundkraven är i sak oförändrade</strong>. Det har alltså inte tillkommit någon ny administrativ börda – det är främst paragrafnumrering och struktur som är ny. SAM-metoden är densamma cykliska som tidigare:</p>
<ul>
<li><strong>Undersöka</strong> arbetsmiljön löpande</li>
<li><strong>Riskbedöma</strong> det ni hittar</li>
<li><strong>Åtgärda</strong> riskerna – omgående eller via en handlingsplan</li>
<li><strong>Kontrollera och följa upp</strong> att åtgärderna fungerar, minst en gång per år</li>
</ul>
<p>Kärnan är att arbetsmiljöarbetet ska vara en naturlig del av den dagliga driften, inte en engångsövning inför en inspektion.</p>

<h2>10-anställdagränsen: vad måste vara skriftligt – och vad räcker muntligt?</h2>
<p>Här ligger själva poängen för det lilla byggföretaget. Fyra saker behöver bara dokumenteras <strong>skriftligt om ni har tio eller fler anställda</strong>:</p>
<ul>
<li><strong>Arbetsmiljöpolicy</strong> (7 §)</li>
<li><strong>Rutiner</strong> för arbetsmiljöarbetet (8 §)</li>
<li><strong>Fördelning av arbetsmiljöuppgifter</strong> – vem som ansvarar för vad (9 §)</li>
<li><strong>Resultatet av den årliga uppföljningen</strong> (14 §)</li>
</ul>
<p>Har ni färre än tio anställda får dessa fyra vara muntliga. Men läs den här meningen en gång till: undantaget gäller <strong>formen</strong>, inte skyldigheten. Ni måste fortfarande <em>ha</em> en arbetsmiljöpolicy, <em>ha</em> rutiner, faktiskt <em>fördela</em> arbetsmiljöuppgifterna och <em>göra</em> en årlig uppföljning – det behöver bara inte vara nedskrivet. I praktiken är det ofta ändå enklast att skriva några rader, eftersom en muntlig uppgiftsfördelning är svår att bevisa om Arbetsmiljöverket eller en skadad medarbetare frågar.</p>

<h2>Detta måste ALLTID dokumenteras – även med 2–3 anställda</h2>
<p>Oavsett hur få ni är finns det tre saker som alltid måste finnas skriftligt:</p>
<ul>
<li><strong>Riskbedömningar</strong> (11 §) – det ni kommer fram till när ni undersöker arbetsmiljön</li>
<li><strong>Handlingsplan</strong> (13 §) för åtgärder som inte genomförs omgående, med <strong>vad</strong> som ska göras, <strong>vem</strong> som ansvarar och <strong>när</strong> det ska vara klart</li>
<li><strong>Instruktioner</strong> (10 §) för arbete med allvarliga risker</li>
</ul>
<p>Det här gäller alltså även ett byggföretag med två eller tre anställda. Några konkreta byggexempel:</p>
<ul>
<li><strong>Takarbete:</strong> skriftlig riskbedömning av fallrisk, plus en instruktion för hur fallskydd och förankring ska användas.</li>
<li><strong>Rivning:</strong> riskbedömning av damm, asbestmisstanke och rasrisk, med instruktion om andningsskydd och avspärrning.</li>
<li><strong>Ställningsmontage:</strong> riskbedömning och instruktion om vem som får montera, kontrollera och märka ställningen.</li>
</ul>
<p>Kan ni fixa risken direkt? Gör det och notera att den är åtgärdad. Kan ni inte det – till exempel för att ni väntar på material eller utbildning – då ska det in i handlingsplanen med datum och ansvarig.</p>

<h2>Byggspecifika krav ovanpå SAM: arbetsmiljöplan, BAS-P/BAS-U och förhandsanmälan</h2>
<p>SAM enligt AFS 2023:1 är basen, men på en byggarbetsplats tillkommer AFS 2023:3 (Projektering och byggarbetsmiljösamordning), som från 1 januari 2025 ersatte AFS 1999:3. Den kräver att ni utser <strong>byggarbetsmiljösamordnare</strong> – BAS-P för planering och projektering och BAS-U för utförandet – och att det finns en <strong>arbetsmiljöplan (AMP)</strong>.</p>
<p>Arbetsmiljöplanen ska vara framtagen <strong>innan</strong> byggarbetsplatsen etableras och hållas uppdaterad under hela byggtiden. Den krävs bland annat när arbete med särskild risk förekommer – till exempel fallrisk över två meter, arbete nära högspänning eller rasrisk – eller när förhandsanmälan behövs.</p>
<p><strong>Förhandsanmälan</strong> till Arbetsmiljöverket krävs innan byggstart när arbetet beräknas pågå längre än 30 arbetsdagar och mer än 20 personer sysselsätts samtidigt, <strong>eller</strong> när det totala antalet persondagar överstiger 500.</p>
<p>Ta det här på allvar: sanktionsavgiften för en saknad arbetsmiljöplan är <strong>50 000 kr</strong> vid projekt som kräver förhandsanmälan och <strong>10 000 kr</strong> vid övriga projekt som omfattas av kravet. Avgiften tas ut vid tillsyn oavsett om en olycka har skett. Det enda undantaget är om hela bygg- eller anläggningsarbetet pågår i högst två dagar i följd.</p>

<h2>Glöm inte OSA och arbetsanpassning (AFS 2023:2)</h2>
<p>Många missar att den organisatoriska och sociala arbetsmiljön (OSA) numera ligger i AFS 2023:2 (Planering och organisering av arbetsmiljöarbete), som också gäller från 1 januari 2025 och ska integreras i ert SAM. Där hamnade även arbetsanpassning, första hjälpen, våld och hot samt ensamarbete.</p>
<p>OSA – stress, arbetsbelastning, arbetstid och kränkande särbehandling – är alltså en <strong>obligatorisk</strong> del även för små byggföretag. Ensamarbete är särskilt relevant i branschen: en snickare som ensam gör ett takjobb eller en servicetekniker ute på uppdrag omfattas. Ta med det när ni riskbedömer.</p>

<h2>Så bygger ni ett SAM utan pappersberg – 6 steg</h2>
<ol>
<li><strong>Skriv en enkel policy.</strong> Några meningar om att ni prioriterar en säker arbetsplats räcker långt – även om ni formellt slipper skriva den under tio anställda.</li>
<li><strong>Fördela uppgifterna.</strong> Bestäm vem som ansvarar för vad och skriv ner det på en halv sida.</li>
<li><strong>Gör en skriftlig riskbedömning per projekt eller riskfyllt moment.</strong> Detta är obligatoriskt oavsett storlek – återanvänd en mall.</li>
<li><strong>Upprätta en handlingsplan</strong> för det som inte fixas direkt, med vad, vem och när.</li>
<li><strong>Ha en rutin för tillbud och olyckor</strong> så alla vet hur de rapporterar och vad som händer sen.</li>
<li><strong>Boka in den årliga uppföljningen i kalendern.</strong> En timme en gång om året där ni går igenom vad som hänt och vad som ska förbättras.</li>
</ol>
<p>Tricket är att återanvända samma mallar projekt efter projekt och samla allt digitalt i stället för i lösa papper.</p>

<h2>Vanliga misstag och hur ni undviker dem</h2>
<ul>
<li><strong>Att tro att SAM inte gäller små företag.</strong> Det gör det – från första anställd.</li>
<li><strong>Att strunta i skriftlig riskbedömning</strong> med argumentet &quot;vi är för få&quot;. Den är alltid obligatorisk.</li>
<li><strong>Att sakna arbetsmiljöplan på bygget.</strong> Sanktionsavgiften kommer oavsett om något gått fel.</li>
<li><strong>Att glömma OSA och ensamarbete.</strong> Stress och ensamjobb ska riskbedömas som vilken risk som helst.</li>
<li><strong>Att göra allt en gång och sedan lägga det i byrålådan.</strong> SAM är cykliskt – uppföljningen varje år är själva poängen.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper er att hålla ordning på den dokumentation som faktiskt är obligatorisk – riskbedömningar, handlingsplaner och instruktioner – utan att bygga ett eget system från grunden. Med färdiga mallar för egenkontroll och riskbedömning fyller ni i vad, vem och när, sparar dokumentet digitalt per projekt och återanvänder samma struktur nästa gång i stället för att börja om. Ni får ett samlat ställe att lägga arbetsmiljöplanen och de skriftliga riskbedömningarna, så att allt finns framme om Arbetsmiljöverket frågar. ByggExp fattar inga beslut åt er om vilka risker som gäller på just ert bygge – men verktyget gör det enkelt att dokumentera det ni kommer fram till och att spara det digitalt så länge ni behöver ha det tillgängligt.</p>

<h2>Vanliga frågor</h2>
<h3>Måste ett byggföretag med bara två anställda ha systematiskt arbetsmiljöarbete?</h3>
<p>Ja. SAM enligt AFS 2023:1 gäller alla arbetsgivare oavsett storlek, även ett företag med en enda anställd. Skillnaden för små företag är att fyra saker – policy, rutiner, uppgiftsfördelning och resultatet av den årliga uppföljningen – får vara muntliga under tio anställda. Riskbedömningar, handlingsplan och instruktioner för allvarliga risker måste dock alltid vara skriftliga.</p>
<h3>Vad måste alltid dokumenteras skriftligt även under 10 anställda?</h3>
<p>Tre saker: riskbedömningar (11 §), handlingsplan för åtgärder som inte genomförs omgående med vad, vem och när (13 §), samt instruktioner för arbete med allvarliga risker (10 §). Detta gäller oavsett hur få ni är.</p>
<h3>När krävs en arbetsmiljöplan och vad kostar det att sakna den?</h3>
<p>En arbetsmiljöplan krävs bland annat när arbete med särskild risk förekommer eller när förhandsanmälan behövs. Saknas den blir sanktionsavgiften 50 000 kr vid projekt som kräver förhandsanmälan och 10 000 kr vid övriga projekt som omfattas av kravet. Undantag gäller bara om hela arbetet pågår i högst två dagar i följd.</p>
<h3>Behöver små byggföretag jobba med OSA och stress?</h3>
<p>Ja. Organisatorisk och social arbetsmiljö ligger i AFS 2023:2 och ska integreras i ert SAM. Stress, arbetsbelastning, kränkande särbehandling och ensamarbete ska hanteras även i det lilla byggföretaget.</p>

<h2>Kom igång</h2>
<p>Börja med det som alltid är obligatoriskt: en skriftlig riskbedömning per projekt. Utgå från <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll- och riskbedömningsmall &rarr;</a> så har ni en struktur att fylla i direkt. Vill ni se hur ni samlar arbetsmiljödokumentationen digitalt per projekt, <a href="/sv/contact">boka en demo av ByggExp här</a>.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoansvar-egenforetagare">Arbetsmiljöansvar för egenföretagare</a>, <a href="/sv/blog/arbetsmiljoplan">Så skriver du en arbetsmiljöplan</a> och <a href="/sv/blog/arbetsmiljoverket-nya-regler-2026-bygg">Arbetsmiljöverkets nya regler 2026 för bygg</a>.</p>
`;

const A_SYSTEMATISKT_ARBETSMILJOARBETE_LITET_BYGGFORETAG: BlogPost = {
  _id: "code-"+"systematiskt-arbetsmiljoarbete-litet-byggforetag",
  title: "Systematiskt arbetsmiljöarbete för litet byggföretag – så mycket måste du dokumentera", slug: "systematiskt-arbetsmiljoarbete-litet-byggforetag", locale: "sv",
  excerpt: "SAM gäller alla arbetsgivare enligt AFS 2023:1 – även enmansföretag. Så vet ett litet byggföretag vad som måste dokumenteras skriftligt och vad som får vara muntligt.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_SYSTEMATISKT_ARBETSMILJOARBETE_LITET_BYGGFORETAG_HTML,
  seoTitle: "SAM för litet byggföretag – vad måste dokumenteras | ByggExp", seoDescription: "SAM enligt AFS 2023:1 gäller alla byggföretag – även med två anställda. Så vet du vad som måste vara skriftligt och vad som räcker muntligt under tio anställda.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T12:30:00.000Z", createdAt: "2026-08-19T12:30:00.000Z", updatedAt: "2026-08-19T12:30:00.000Z",
};

const A_APD_PLAN_ARBETSPLATSDISPOSITION_BYGG_HTML = `
<p>En dåligt planerad byggarbetsplats kostar timmar varje dag: material som flyttas fram och tillbaka, lastbilar som blockerar varandra, kranlyft som stoppas för att en gångväg ligger fel. En genomtänkt <strong>APD-plan</strong> är verktyget som förhindrar det. För dig som driver ett litet eller medelstort byggföretag, är platschef eller entreprenör är arbetsplatsdispositionen ofta skillnaden mellan ett bygge som flyter och ett som ständigt hackar. Här går vi igenom vad en APD-plan bygg-mässigt ska innehålla, vad reglerna kräver 2026 och hur du ritar upp den steg för steg.</p>

<p>Vill du komma igång direkt hittar du underlag och checklistor bland <a href="/sv/verktyg">våra gratis byggverktyg -&gt;</a> som du kan använda som stomme när du planerar etableringen.</p>

<h2>Vad är en APD-plan och är den lagkrav?</h2>
<p>APD-plan står för arbetsplatsdispositionsplan och är en ritning eller karta över byggarbetsplatsen. Den visar var etablering (bodar, containrar, parkering), materialupplag, transportvägar, kranpositioner, in- och utfarter, personalutrymmen, materialintag, brandredskap och första hjälpen samt el- och VA-ledningar är placerade. Det är inte en fri konstform utan ett produktions- och arbetsmiljöverktyg – varje placering ska ha ett syfte.</p>
<p>APD-planen är inte i sig ett i lag namngivet dokument. Men Arbetsmiljöverket anger att det på större byggarbetsplatser bör finnas en översiktsplan över området vid infarten, som vägleder leverantörer och tillfälliga besökare så att de inte utsätter sig själva eller de som arbetar för risker. I praktiken fungerar APD-planen som ett naturligt underlag och en bilaga till arbetsmiljöplanen (AMP). Den är ett levande dokument som uppdateras allteftersom bygget fortskrider.</p>

<h2>Regelläget 2026: AFS 2023:3, AMP och roller</h2>
<p>Sedan 1 januari 2025 gäller <strong>AFS 2023:3</strong> (Projektering och byggarbetsmiljösamordning – grundläggande skyldigheter). Den ersatte gamla AFS 1999:3 och delar av AFS 2020:1. Det är en ny föreskrift med ny struktur, inte bara en uppdatering, och det är den regelbas som styr byggarbetsplatsens planering 2026.</p>
<p>Ansvaret är fördelat så här:</p>
<ul>
<li><strong>Byggherren</strong> har det övergripande ansvaret och uppfyller det genom att utse kompetenta samordnare.</li>
<li><strong>Bas-P</strong> upprättar den skriftliga arbetsmiljöplanen innan det första byggnads- eller anläggningsarbetet påbörjas och lämnar över den till Bas-U.</li>
<li><strong>Bas-U</strong> ansvarar för att uppdatera AMP:n under produktion – och därmed hålla APD-planen aktuell.</li>
</ul>
<p>AMP:n ska finnas tillgänglig på arbetsplatsen. Kom också ihåg <strong>förhandsanmälan</strong> till Arbetsmiljöverket: den krävs när arbetet beräknas pågå längre än 30 arbetsdagar och mer än 20 personer vid något tillfälle arbetar samtidigt, eller när det totala antalet persondagar beräknas överstiga 500. Kopian ska anslås väl synligt på arbetsplatsen och hållas uppdaterad. Saknas förhandsanmälan blir det en sanktionsavgift på 5 000 kr.</p>

<h2>Så ritar du upp planen, steg för steg</h2>
<p>Utgå från platsens förutsättningar – tomtgränser, in- och utfarter, befintliga ledningar och grannförhållanden – och bygg upp planen i lager.</p>
<h3>Etablering</h3>
<p>Placera bodar, kontor och personalutrymmen så att de stödjer produktionen utan att blockera det bästa åtkomstläget för material och lyft. En bod på fel plats låser hela logistiken i månader.</p>
<h3>Upplag och materialintag</h3>
<p>Avsätt tillräcklig yta för att ta emot och lagra byggprodukter utan onödig omflyttning och med bibehållen ordning. Lägg upplagen nära intaget för respektive byggskede så att material inte behöver bäras kors och tvärs.</p>
<h3>Transportvägar</h3>
<p>Rita in vägar för in- och utfart samt lossning så att lastbilar inte blockerar produktionsflödet eller varandra. Planera för att minimera backning – backande fordon är en av de vanligaste påkörningsriskerna.</p>
<h3>Kran och lyft</h3>
<p>Ange kranens placering på APD-planen. Säkra markens bärighet och bedöm lyftets riskområde så att lyftet inte skapar risker för andra. Nära luftburna kraftledningar styr Elsäkerhetsverket (ELSÄK-FS 2022:1) skyddsavstånden: riktvärdet för horisontellt avstånd till ledning på högst 55 kV är minst 5 meter, och för spänning över 55 kV gäller större avstånd (till exempel minst 10 meter inom detaljplan). Vid arbete nära ledning ska du alltid kontakta ledningsägaren.</p>
<h3>Skyddsavstånd och separation fordon/gående</h3>
<p>Fordonstrafik ska skiljas från gång- och cykelstråk. Anpassa skyddsavståndet mellan körvägar och gångvägar till fordonens faktiska hastighet, och inför interna hastighetsgränser där det behövs. Varje arbetsplats ska ha en säker tillträdesled; vid nivåskillnader över 10 meter med frekvent trapptrafik bör hiss övervägas.</p>

<h2>Ledningar, avgränsning och skyltning</h2>
<p>Alla el-, gas-, vatten- och avloppsledningar ska identifieras och märkas ut innan arbetet påbörjas. Använd den kostnadsfria tjänsten Ledningskollen för att få ledningsinformation innan du gräver. Kablar ska skyddas mot skador från fordonstrafik och får inte utgöra snubbelrisk – detta ska framgå av APD-planen.</p>
<p>Byggarbetsplatsen ska dessutom vara tydligt avgränsad och skyltad enligt arbetsmiljöregler och lokala ordningsföreskrifter, med en robusthet anpassad till omgivningen och mängden allmänhet i närheten. Ju mer folk i rörelse runt bygget, desto stabilare inhägnad.</p>

<h2>APD-planen är ett levande dokument</h2>
<p>Etableringen ser inte likadan ut under grundläggning som under stomresning, takarbete eller invändig fas. Revidera planen per byggskede: när kranen flyttas, när upplagen byter plats eller när en ny in-/utfart öppnas ska ritningen följa med. Kommunicera ändringarna vid morgonmöten och i introduktionen av ny personal och nya underentreprenörer, och uppdatera AMP:n parallellt. En APD-plan som hänger kvar från byggstart och aldrig ändras är i praktiken felaktig.</p>

<h2>Vanliga misstag att undvika</h2>
<ul>
<li>Boden placeras där den passar just nu, inte där produktionen behöver den under hela bygget.</li>
<li>Transportvägar ritas utan att tänka på backning och möten mellan fordon och gående.</li>
<li>Ledningskollen glöms bort innan grävning – med skador och stopp som följd.</li>
<li>Kranens riskområde och skyddsavstånd till kraftledning kontrolleras inte mot ELSÄK-FS 2022:1.</li>
<li>Planen uppdateras aldrig efter byggstart, trots att förutsättningarna ändras för varje skede.</li>
<li>Förhandsanmälan missas vid trösklarna – onödig sanktionsavgift på 5 000 kr.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte ett CAD-program för själva ritningen, men samlar det som ska hänga ihop med APD-planen på ett ställe. Du kopplar planen till arbetsmiljöplanen och egenkontrollen, håller versioner uppdaterade per byggskede och gör dem tillgängliga för alla på plats. Med vår <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mall</a> dokumenterar du att skyddsåtgärder, avgränsning och utmärkning faktiskt är på plats – så att planen inte bara är en ritning utan något som följs upp i produktion.</p>

<h2>Vanliga frågor</h2>
<h3>Är en APD-plan lagkrav?</h3>
<p>Nej, APD-plan är inte ett i lag namngivet dokument. Men Arbetsmiljöverket anger att det på större byggarbetsplatser bör finnas en översiktsplan vid infarten, och i praktiken fungerar APD-planen som underlag och bilaga till arbetsmiljöplanen som är obligatorisk.</p>
<h3>Vad är skillnaden mellan APD-plan och arbetsmiljöplan?</h3>
<p>Arbetsmiljöplanen (AMP) är det skriftliga dokument som ska upprättas innan första byggarbetet påbörjas och som beskriver risker och åtgärder. APD-planen är den ritning som visar var etablering, upplag, transportvägar och skyddsåtgärder är placerade, och den utgör ett naturligt underlag och bilaga till AMP:n.</p>
<h3>Vem ansvarar för APD-planen?</h3>
<p>Bas-P upprättar arbetsmiljöplanen före byggstart och Bas-U ansvarar för att uppdatera den under produktion. Byggherren har det övergripande ansvaret genom att utse kompetenta samordnare. APD-planen följer samma logik och hålls levande av Bas-U.</p>
<h3>När krävs förhandsanmälan till Arbetsmiljöverket?</h3>
<p>När arbetet beräknas pågå längre än 30 arbetsdagar och mer än 20 personer vid något tillfälle arbetar samtidigt, eller när det totala antalet persondagar överstiger 500. Kopian ska anslås väl synligt på arbetsplatsen. Saknas den blir sanktionsavgiften 5 000 kr.</p>

<h2>Kom igång</h2>
<p>Börja med en tydlig APD-plan och håll den uppdaterad genom hela bygget. Minimikraven att bocka av: AMP klar före byggstart, förhandsanmälan gjord vid trösklarna, och en aktuell APD-plan synlig på plats. Använd <a href="/sv/verktyg">våra gratis byggverktyg</a> som stomme, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du kopplar plan, arbetsmiljö och egenkontroll i ett flöde.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan (AMP) – så gör du</a>, <a href="/sv/blog/startmote-byggprojekt-checklista">Startmöte i byggprojekt: checklista</a>, <a href="/sv/blog/bas-p-bas-u">Bas-P och Bas-U: roller och ansvar</a>.</p>
`;

const A_APD_PLAN_ARBETSPLATSDISPOSITION_BYGG: BlogPost = {
  _id: "code-"+"apd-plan-arbetsplatsdisposition-bygg",
  title: "APD-plan: så ritar du upp etablering, upplag och transportvägar på bygget", slug: "apd-plan-arbetsplatsdisposition-bygg", locale: "sv",
  excerpt: "En genomtänkt APD-plan avgör om bygget flyter eller kaosar – så ritar du upp etablering, upplag, transportvägar och skyddsavstånd rätt.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_APD_PLAN_ARBETSPLATSDISPOSITION_BYGG_HTML,
  seoTitle: "APD-plan för bygget | ByggExp", seoDescription: "APD-plan bygg: så planerar du etablering, upplag, transportvägar, kran och skyddsavstånd. Regelläget 2026 (AFS 2023:3), roller och en färdig checklista.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T13:03:00.000Z", createdAt: "2026-08-19T13:03:00.000Z", updatedAt: "2026-08-19T13:03:00.000Z",
};

const A_ARBETSBEREDNING_MALL_BYGG_HTML = `
<p>De flesta allvarliga olyckorna på en byggarbetsplats sker inte i rutinarbetet – de sker i moment som aldrig planerades i detalj. Schakten som skulle gå snabbt, det tunga elementet som lyftes utan riktig rigg, rivningen av en bärande vägg där ingen visste vad som satt bakom. Arbetsberedningen är bryggan mellan den övergripande arbetsmiljöplanen och det faktiska handgreppet: en konkret plan för <em>ett</em> kritiskt moment, gjord innan spaden går i marken.</p>

<p>Vill du komma igång direkt kan du använda <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll- och beredningsmall →</a> och anpassa den för det moment du står inför.</p>

<h2>Vad är en arbetsberedning – och skillnaden mot arbetsmiljöplanen (AMP)</h2>
<p>En arbetsberedning är en detaljerad, stegvis plan för ett specifikt arbetsmoment. Den beskriver metoden, bryter ner momentet i delsteg, identifierar risken i varje steg och sätter konkreta skyddsåtgärder – allt <strong>innan</strong> arbetet startar. Det är alltså inte samma sak som en arbetsmiljöplan (AMP), som är projektets övergripande plan. AMP:n svarar på hur hela arbetsplatsen ska fungera säkert; arbetsberedningen zoomar in på det enskilda kritiska handgreppet.</p>
<p>Kopplingen till lagen går via det systematiska arbetsmiljöarbetet. AFS 2023:1 (SAM) ställer krav på att arbete med allvarliga risker ska ha skriftliga instruktioner för hur det utförs säkert. Arbetsberedningen är det praktiska sättet att uppfylla det kravet – dokumentet som gör den abstrakta instruktionen konkret för laget som ska stå där och jobba.</p>

<h2>Måste man ha arbetsberedning? Vad 2025 års regler säger</h2>
<p>Vid årsskiftet 2025 trädde ett omarbetat regelverk i kraft. Arbetsmiljöverket slog ihop och slimmade sina föreskrifter från 67 till 15. De tre som är mest relevanta här är AFS 2023:1 (systematiskt arbetsmiljöarbete), AFS 2023:3 (projektering och byggarbetsmiljösamordning, som ersatte gamla AFS 1999:3) och AFS 2023:13 (risker vid vissa typer av arbeten).</p>
<p>Ordet arbetsberedning står inte utpekat som en egen lagstadgad skyldighet. Men <strong>riskbedömning före arbete eller ändring, och skriftlig dokumentation av den, är lagkrav</strong> enligt AFS 2023:1. Arbetsberedningen är det verktyg som gör att du faktiskt lever upp till kravet i praktiken. Dessutom har Bas-U ett samordningsansvar enligt AFS 2023:3: att se till att arbetsberedningar finns för riskfyllda moment och att de stämmer med andra entreprenörers arbete på platsen.</p>

<h2>När ska du göra en arbetsberedning?</h2>
<p>Tänk i två spår. Det första spåret är de lagstadgade särskilda riskerna. En arbetsmiljöplan är obligatorisk från dag ett – oavsett projektets storlek, antal arbetare eller längd – så snart något av de 13 arbetena med särskild risk förekommer. Just de momenten är också de självklara kandidaterna för en skriftlig arbetsberedning. De vanligaste är:</p>
<ul>
<li>Fallrisk där höjdskillnaden är 2 meter eller mer.</li>
<li>Risk att begravas i jordmassor eller sjunka ner i lös mark – schakt är ett klassiskt exempel.</li>
<li>Arbete nära högspänningsledningar.</li>
<li>Arbete där fordonstrafik passerar.</li>
<li>Arbete med sprängämnen.</li>
<li>Arbete i brunnar, tunnlar eller under jord.</li>
<li>Rivning av bärande konstruktioner eller hälsofarliga material.</li>
</ul>
<p>En praktisk tumregel för schaktning: schakt djupare än 1 meter ska släntas eller stämpas/stöttas på grund av ras- och begravningsrisken. Det är en typisk utlösare för en skriftlig arbetsberedning.</p>
<p>Det andra spåret är omdöme. Även utanför de 13 punkterna bör du göra en arbetsberedning för moment som är <strong>nya, riskfyllda, tidspressade eller komplicerade och otypiska</strong>. Det behöver inte vara livsfarligt för att förtjäna tio minuters strukturerad planering – det räcker att laget gör något de inte gjort förut.</p>

<h2>Så här ser en komplett arbetsberedning ut – innehåll och mall</h2>
<p>En fullständig arbetsberedning dokumenterar normalt:</p>
<ol>
<li><strong>Moment och omfattning</strong> – vad ska göras, var och när.</li>
<li><strong>Metodbeskrivning steg för steg</strong> – hur momentet faktiskt utförs.</li>
<li><strong>Resurser</strong> – personal, maskiner och material.</li>
<li><strong>APD-plan och etablering</strong> – hur ytan disponeras, avspärrningar, transportvägar.</li>
<li><strong>Risk per steg med åtgärd</strong> – bedömd via en riskmatris, sannolikhet gånger konsekvens.</li>
<li><strong>Behörighet och kompetens</strong> – vilka certifikat och utbildningar som krävs.</li>
<li><strong>Kontroll och kvalitetskrav</strong> – vad som ska kontrolleras och godkännas.</li>
<li><strong>Kommunikation</strong> – vem informerar vem, och vilka avstämningar som gäller.</li>
</ol>
<p>När du sätter åtgärder, följ åtgärdshierarkin: försök först eliminera risken helt. Går det inte, minimera den – tekniska åtgärder före personliga och organisatoriska, och personlig skyddsutrustning som sista led, inte första.</p>
<p><strong>Exempel – schakt 1,8 m för ledningsdragning.</strong> Steg: etablering och utsättning, grävning, arbete i schakt, återfyllning. Risk i grävsteget: ras (sannolikhet medel, konsekvens allvarlig). Åtgärd: slänta enligt jordart eller stämpa; ingen får vistas i schakt under grävning; avspärrning mot fordonstrafik. Risk i schaktsteget: fall från kant över 2 m samt påkörning – åtgärd: skyddsräcke vid kant, stege var tionde meter, vakt vid trafik. Behörighet: maskinförare med rätt utbildning. Kontroll: schaktbotten och släntlutning kontrolleras innan någon går ner.</p>

<h2>Vem gör den – och varför yrkesarbetaren måste vara med</h2>
<p>Ansvaret för att ta fram arbetsberedningen ligger på arbetsgivaren – entreprenören – och i praktiken på arbetsledare eller platschef. Men den ska göras <strong>tillsammans med yrkesarbetarna</strong> som ska utföra jobbet. Deras handfasta erfarenhet är avgörande för att upptäcka riskerna och välja rätt metod; en beredning som skrivs ensam bakom ett skrivbord missar det som bara den som stått i schakten vet.</p>
<p>Beredningen gås igenom med laget precis före start, ofta som en kort skyddsrond eller genomgång. Och den är ett levande dokument: ändras förutsättningarna – ny jordart, väderomslag, en maskin som inte dök upp – uppdateras beredningen innan arbetet fortsätter.</p>

<h2>Vanliga misstag att undvika</h2>
<ul>
<li>Att kopiera en gammal beredning rakt av utan att anpassa den till dagens moment och plats.</li>
<li>Att skriva den utan yrkesarbetarna och tappa den praktiska riskkännedomen.</li>
<li>Att sätta PPE som första åtgärd i stället för att först försöka bygga bort risken.</li>
<li>Att låta den ligga orörd när förhållandena ändras.</li>
<li>Att glömma samordningen med andra entreprenörer – Bas-U:s ansvar.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp arbetar du med beredning och egenkontroll i samma flöde som resten av projektet. Du utgår från en mall, bryter ner momentet i steg och kopplar risker och åtgärder direkt till arbetet – i stället för lösa Word-filer som ingen hittar. Dokumentationen sparas digitalt så att du kan visa upp riskbedömning och skriftliga instruktioner om Arbetsmiljöverket frågar, och laget når genomgången i mobilen ute på plats. Verktyget ersätter inte ditt omdöme eller Bas-U:s ansvar – men det gör att inget kritiskt moment glider igenom oplanerat.</p>

<h2>Vanliga frågor</h2>
<h3>Är arbetsberedning ett lagkrav?</h3>
<p>Ordet arbetsberedning står inte utpekat i föreskrifterna. Men riskbedömning före arbete och skriftlig dokumentation av den är lagkrav enligt AFS 2023:1, och arbetsberedningen är det praktiska sättet att uppfylla kravet på skriftliga instruktioner för arbete med allvarliga risker.</p>
<h3>Vad är skillnaden mellan arbetsberedning och arbetsmiljöplan?</h3>
<p>Arbetsmiljöplanen (AMP) är projektets övergripande plan. Arbetsberedningen är en detaljerad, stegvis plan för ett enskilt kritiskt moment – metod, resurser och skyddsåtgärder steg för steg.</p>
<h3>När krävs förhandsanmälan till Arbetsmiljöverket?</h3>
<p>Förhandsanmälan krävs när arbetet väntas pågå i mer än 30 arbetsdagar med fler än 20 personer sysselsatta samtidigt, eller när det omfattar mer än 500 persondagar. Behövs förhandsanmälan krävs alltid även en arbetsmiljöplan.</p>
<h3>Vem ansvarar för att arbetsberedningen görs?</h3>
<p>Arbetsgivaren, i praktiken arbetsledare eller platschef, men den ska tas fram tillsammans med yrkesarbetarna. Bas-U har samordningsansvaret för att beredningar finns för riskfyllda moment och stämmer med andra entreprenörers arbete.</p>

<h2>Kom igång</h2>
<p>Börja med att ladda ner och anpassa <a href="/sv/verktyg/egenkontroll-mall">vår kostnadsfria beredningsmall</a>, eller bläddra bland fler <a href="/sv/verktyg">gratis verktyg för byggföretag</a>. Vill du se hur beredning, egenkontroll och projektdokumentation hänger ihop i ett flöde? <a href="/sv/contact">Boka en demo →</a></p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a>, <a href="/sv/blog/kma-plan-mall">KMA-plan mall</a> och <a href="/sv/blog/startmote-byggprojekt-checklista">Checklista för startmöte i byggprojekt</a>.</p>
`;

const A_ARBETSBEREDNING_MALL_BYGG: BlogPost = {
  _id: "code-"+"arbetsberedning-mall-bygg",
  title: "Arbetsberedning mall bygg – så planerar du riskfyllda moment innan spaden i marken", slug: "arbetsberedning-mall-bygg", locale: "sv",
  excerpt: "En praktisk guide till arbetsberedning för hantverkare och byggföretag – planera metod, resurser och säkerhet innan det kritiska momentet startar.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_ARBETSBEREDNING_MALL_BYGG_HTML,
  seoTitle: "Arbetsberedning mall bygg | ByggExp", seoDescription: "Så gör du en arbetsberedning för riskfyllda moment: metod, resurser och säkerhet steg för steg. Mall, innehåll och krav enligt AFS 2023.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T13:06:00.000Z", createdAt: "2026-08-19T13:06:00.000Z", updatedAt: "2026-08-19T13:06:00.000Z",
};

const A_PERSONLIG_SKYDDSUTRUSTNING_KRAV_BYGG_HTML = `
<p>Den 1 januari 2025 byttes hela AFS-strukturen ut: 67 gamla föreskrifter ersattes av 15 nya häften. För dig som driver byggföretag eller är arbetsledare betyder det bland annat att de gamla reglerna om personlig skyddsutrustning i AFS 2001:3 är upphävda och att kraven nu ligger i två nya föreskrifter. Men huvudbudskapet är oförändrat och lika absolut som förr: arbetsgivaren ska tillhandahålla den skyddsutrustning som arbetet kräver, och den ska vara kostnadsfri för arbetstagaren. Här går vi igenom vad som gäller på bygget 2026 — vilken PPE som är obligatorisk, vem som betalar och var den vanligaste förväxlingen uppstår.</p>

<p>Vill du bygga in PPE-kontrollen i det löpande arbetet direkt? Använd <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a> för att dokumentera att rätt skyddsutrustning finns på plats och används.</p>

<h2>Vad säger lagen 2026?</h2>
<p>Regelverket hänger ihop i tre delar, och det är lätt att blanda ihop dem:</p>
<ul>
<li><strong>Arbetsmiljölagen 2 kap. 7 §</strong> — grunden. Arbetsgivaren ska tillhandahålla den personliga skyddsutrustning som behövs, och det ska ske utan kostnad för arbetstagaren. Att "tillhandahålla" innebär att arbetsgivaren betalar.</li>
<li><strong>AFS 2023:11 kapitel 15</strong> (Arbetsutrustning och personlig skyddsutrustning — säker användning). Här finns reglerna om <em>val</em>, <em>användning</em> och <em>underhåll</em> av PPE. Det är denna föreskrift som ersatte AFS 2001:3.</li>
<li><strong>AFS 2023:13</strong> (Risker vid vissa typer av arbeten), kapitlet om byggnads- och anläggningsarbete. Här står de <em>konkreta</em> PPE-kraven för just bygg. Observera att kraven inte ligger i AFS 2023:11 eller i AFS 2023:3 — den sistnämnda gäller projektering och byggarbetsmiljösamordning.</li>
</ul>
<p>Med andra ord: AML säger <em>att</em> och <em>att det ska vara gratis</em>, AFS 2023:11 säger <em>hur</em> utrustningen väljs och sköts, och AFS 2023:13 säger <em>vad</em> som krävs på just en byggarbetsplats.</p>

<h2>Obligatorisk PPE på bygget</h2>
<p>På ett bygge ska arbetsgivaren se till att följande används — om inte riskbedömningen visar att det är uppenbart onödigt:</p>
<ul>
<li><strong>Skyddshjälm med hakrem.</strong></li>
<li><strong>Skyddsskor med skyddståhätta och spiktrampskydd.</strong></li>
<li><strong>Varselklädsel (hi-vis).</strong></li>
</ul>
<p>Utöver dessa tre ska annan skyddsutrustning användas <em>i den utsträckning arbetsförhållandena kräver</em>. Det handlar om:</p>
<ul>
<li><strong>Hörselskydd</strong> vid buller.</li>
<li><strong>Ögon- och ansiktsskydd</strong> vid kapning, slipning, svetsning.</li>
<li><strong>Andningsskydd</strong> vid damm — se vår guide om <a href="/sv/blog/kvartsdamm-regler-bygg">reglerna kring kvartsdamm</a>.</li>
<li><strong>Fallskydd</strong> vid arbete på höjd — läs mer om <a href="/sv/blog/fallskydd-krav-bygg">fallskyddskraven på bygget</a>.</li>
<li><strong>Skyddshandskar</strong> vid hantering av kemikalier, vassa material eller kyla.</li>
</ul>
<p>Vad som krävs styrs av riskbedömningen på just din arbetsplats. Ett rivningsjobb, ett takarbete och en inomhusetapp har helt olika behov, och det är arbetsgivaren som ska göra bedömningen och dokumentera den.</p>

<h2>Vem betalar?</h2>
<p>Kärnfrågan har ett kort svar: <strong>arbetsgivaren, alltid.</strong> Enligt 2 kap. 7 § AML ska den personliga skyddsutrustningen tillhandahållas kostnadsfritt. Du kan inte dra av kostnaden på lönen, kräva att den anställde köper sina egna skyddsskor eller villkora anställningen mot att hjälmen bekostas privat.</p>
<p>På en byggarbetsplats med flera aktörer aktualiseras dessutom samordningsansvaret: den som ansvarar för samordningen ska se till att alla på plats — även inhyrd personal och underentreprenörer — har och använder rätt skydd. Varje arbetsgivare svarar dock för sina egna anställdas utrustning. Är du <strong>egenföretagare utan anställda</strong> bekostar du din egen PPE, men kravet på att använda den gäller lika fullt.</p>

<h2>Skyddsutrustning vs arbetskläder — den vanliga förväxlingen</h2>
<p>Här går många fel. Det finns en juridisk skillnad mellan <em>skyddsutrustning</em> och <em>vanliga arbetskläder</em>:</p>
<ul>
<li><strong>Personlig skyddsutrustning (PPE)</strong> — hjälm, skyddsskor, hi-vis, hörselskydd, ögonskydd, andningsskydd, fallskydd, skyddshandskar. Detta <strong>måste</strong> arbetsgivaren tillhandahålla gratis enligt AML.</li>
<li><strong>Vanliga arbetskläder</strong> — byxor, jacka, t-shirt utan skyddsfunktion. Här finns <strong>inget lagkrav</strong> på att arbetsgivaren betalar. Det regleras i stället ofta i kollektivavtal, till exempel Byggavtalet mellan parterna på Byggnads område.</li>
</ul>
<p>Kort sagt: skyddsfunktionen avgör. En varseljacka som är godkänd skyddsklädsel är PPE och ska vara gratis. En vanlig arbetsbyxa utan skyddsklassning är arbetskläder och styrs av avtal, inte av arbetsmiljölagen.</p>

<h2>Skatt och bokföring</h2>
<p>Skattemässigt är fri skydds- och säkerhetsutrustning enkel: den <strong>förmånsbeskattas inte</strong>, utan jämställs med arbetsredskap. Den anställde beskattas alltså aldrig för att få hjälm, skyddsskor eller hörselskydd.</p>
<p>För <em>arbetskläder</em> är det mer nyanserat. De är skattefria om de är särskilt anpassade för arbetet och olämpliga för privat bruk. Skatteverket lyfter dessutom fram att yrkesgrupper med hårt slitage och kraftig nedsmutsning — som betongarbetare, murare och svetsare — inte beskattas för fria arbetskläder. Vanliga "fria kläder" utan den kopplingen är däremot en skattepliktig förmån. Bokför utrustningen korrekt och spara underlagen; räkenskapsinformation ska bevaras i sju år.</p>

<h2>Arbetstagarens och arbetsgivarens ansvar</h2>
<p>Ansvaret är delat men inte jämnt fördelat:</p>
<ul>
<li><strong>Arbetsgivaren</strong> ska göra riskbedömningen som styr valet av PPE, tillhandahålla utrustningen kostnadsfritt, se till att den underhålls och byts vid behov, samt instruera och utöva tillsyn över att den faktiskt används.</li>
<li><strong>Arbetstagaren</strong> är skyldig att använda den skyddsutrustning som tillhandahålls och att vårda den så att den fortsätter fungera.</li>
</ul>
<p>Saknas PPE, eller ser arbetsgivaren mellan fingrarna på att den inte används, kan Arbetsmiljöverket ingripa vid inspektion. Dokumentation — riskbedömning, utkvittering och egenkontroll — är det som visar att du har gjort rätt.</p>

<h2>PPE-checklista för byggarbetsplatsen 2026</h2>
<ol>
<li>Skyddshjälm med hakrem finns till alla på plats.</li>
<li>Skyddsskor med tåhätta och spiktrampskydd är utdelade.</li>
<li>Godkänd varselklädsel (hi-vis) används av alla i arbetsområdet.</li>
<li>Hörsel-, ögon-, andnings- och fallskydd finns tillgängligt utifrån riskbedömningen.</li>
<li>Riskbedömningen är dokumenterad och uppdaterad för aktuell etapp.</li>
<li>All PPE är kostnadsfri för de anställda — inga avdrag på lön.</li>
<li>Rutin för underhåll, kontroll och byte av utrustning finns.</li>
<li>Inhyrd personal och underentreprenörer omfattas via samordningsansvaret.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte skyddsutrustningen, men hjälper dig hålla ordning på att den finns och används. Med egenkontroll- och dokumentationsmallar kan du bygga in PPE-punkterna i den löpande kontrollen på varje projekt, så att utkvittering, kontroller och avvikelser samlas på ett ställe i stället för i lösa papper. Det gör det enkelt att visa vid en inspektion att kraven i AFS 2023:11 och 2023:13 är uppfyllda. Verktygen ger inte juridisk rådgivning — de ger dig strukturen att dokumentera det arbete du redan är skyldig att göra.</p>

<h2>Vanliga frågor</h2>
<h3>Måste arbetsgivaren betala för skyddsskorna?</h3>
<p>Ja. Skyddsskor med tåhätta och spiktrampskydd är personlig skyddsutrustning, och enligt 2 kap. 7 § arbetsmiljölagen ska sådan tillhandahållas kostnadsfritt av arbetsgivaren. Du får inte dra kostnaden från lönen.</p>
<h3>Gäller fortfarande AFS 2001:3?</h3>
<p>Nej. AFS 2001:3 upphörde att gälla den 1 januari 2025. Reglerna om val och användning av PPE finns nu i kapitel 15 i AFS 2023:11, och de konkreta byggkraven i AFS 2023:13. Uppdatera dina arbetsmiljödokument mot de nya numren.</p>
<h3>Måste arbetsgivaren betala vanliga arbetskläder också?</h3>
<p>Nej, inte enligt lag. Vanliga arbetskläder utan skyddsfunktion omfattas inte av AML utan regleras oftast i kollektivavtal, till exempel Byggavtalet. Det är skyddsfunktionen som avgör om plagget är gratis-pliktig PPE eller inte.</p>
<h3>Vad gäller för mig som är egenföretagare utan anställda?</h3>
<p>Du bekostar din egen skyddsutrustning, men kravet på att faktiskt använda hjälm, skyddsskor och hi-vis på bygget gäller lika fullt. Har du inhyrd eller egen personal blir du arbetsgivare och ska då tillhandahålla PPE kostnadsfritt.</p>

<h2>Kom igång</h2>
<p>Se över att din PPE-rutin och dina arbetsmiljödokument pekar mot de nya AFS-numren, och lägg in kontrollpunkterna i den löpande egenkontrollen. Börja med <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a> eller bläddra bland <a href="/sv/verktyg">alla gratis verktyg för byggföretag</a>. Vill du se hur dokumentationen fungerar i praktiken för dina projekt kan du <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/fallskydd-krav-bygg">Fallskydd på bygget — krav och regler</a>, <a href="/sv/blog/kvartsdamm-regler-bygg">Kvartsdamm — regler och gränsvärden</a>, <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan — så gör du</a>.</p>
`;

const A_PERSONLIG_SKYDDSUTRUSTNING_KRAV_BYGG: BlogPost = {
  _id: "code-"+"personlig-skyddsutrustning-krav-bygg",
  title: "Personlig skyddsutrustning på bygget 2026 — vad arbetsgivaren måste hålla med och vem som betalar", slug: "personlig-skyddsutrustning-krav-bygg", locale: "sv",
  excerpt: "Guide för byggföretag om vilken PPE arbetsgivaren måste tillhandahålla kostnadsfritt enligt AML och nya AFS 2023:11 och 2023:13 — och skillnaden mot vanliga arbetskläder.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_PERSONLIG_SKYDDSUTRUSTNING_KRAV_BYGG_HTML,
  seoTitle: "PPE-krav på bygget 2026 | ByggExp", seoDescription: "Vilken personlig skyddsutrustning måste du som arbetsgivare hålla med på bygget — hjälm, skyddsskor, hi-vis — och vem betalar? Uppdaterat mot nya AFS 2023.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T18:06:00.000Z", createdAt: "2026-08-19T18:06:00.000Z", updatedAt: "2026-08-19T18:06:00.000Z",
};

const A_TILLBUD_ARBETSSKADA_ANMALAN_BYGG_HTML = `
<p>Bygg är fortsatt en av de mest olycksdrabbade branscherna. Under 2024 registrerades runt 2 051 arbetsolyckor med frånvaro i byggindustrin, olycksfrekvensen låg på 10,5 per 1 000 sysselsatta och åtta personer omkom i privat bygg- och anläggning – över tioårssnittet trots att olyckorna totalt minskade. När något händer på arbetsplatsen är rätt anmälan både ett lagkrav och grunden för att slippa nästa olycka. Problemet är att många byggföretag anmäler till fel myndighet, för sent, eller struntar i uppföljningen. Här får du en konkret steg-för-steg-guide.</p>

<p>Underlaget för utredning och uppföljning börjar redan innan olyckan – med en tillbudsrapport och en dokumenterad riskbedömning. Använd gärna <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll- och checklistemall -></a> som stomme för att fånga tillbud direkt på arbetsplatsen.</p>

<h2>Tillbud vs. arbetsskada – vad är skillnaden?</h2>
<p>Begreppen blandas ofta ihop, men de styr helt olika anmälningsvägar. Håll isär dem:</p>
<ul>
<li><strong>Tillbud</strong> – en händelse som <em>kunnat</em> leda till personskada, men där ingen skadades. Exempel: ett verktyg faller från en ställning utan att träffa någon.</li>
<li><strong>Allvarligt tillbud</strong> – ett tillbud som inneburit allvarlig fara för liv eller hälsa. Bara allvarliga tillbud anmäls till Arbetsmiljöverket.</li>
<li><strong>Arbetsolycka</strong> – en plötslig händelse som gav en fysisk skada, till exempel fall från höjd eller klämskada.</li>
<li><strong>Arbetssjukdom</strong> – skada som utvecklats över tid av arbetet, som belastningsskador, vibrationsskador eller hörselnedsättning.</li>
<li><strong>Färdolycka</strong> – olycka på väg till eller från arbetet, som normalt inte räknas som arbetsolycka men ändå kan anmälas.</li>
</ul>
<p>Bedömningen av vad som är allvarligt gör du som arbetsgivare själv. Vid tveksamhet är regeln enkel: hellre anmäla en gång för mycket än en gång för lite.</p>

<h2>Vart anmäler du – två myndigheter, en portal</h2>
<p>Det finns två mottagare men bara en gemensam e-tjänst. Allvarliga olyckor och tillbud går till <strong>Arbetsmiljöverket</strong>, medan arbetsskador som ger sjukfrånvaro anmäls till <strong>Försäkringskassan</strong>. Båda anmälningarna görs via portalen anmalarbetsskada.se, som de två myndigheterna driver tillsammans.</p>
<p>Utöver myndighetsanmälan finns ett tredje, kollektivavtalat spår: <strong>TFA hos AFA Försäkring</strong>. Det är en separat anmälan som den skadade behöver för att få ersättning. Missar du den kan den anställde gå miste om pengar även om myndighetsanmälan är korrekt gjord.</p>

<h2>Anmälan till Arbetsmiljöverket enligt 3 kap. 3 a § AML</h2>
<p>Enligt 3 kap. 3 a § arbetsmiljölagen ska du som arbetsgivare <strong>utan dröjsmål</strong> anmäla till Arbetsmiljöverket vid:</p>
<ul>
<li>dödsfall</li>
<li>svårare personskada</li>
<li>skador som drabbat flera arbetstagare samtidigt</li>
<li>allvarligt tillbud som inneburit allvarlig fara för liv eller hälsa</li>
</ul>
<p>"Utan dröjsmål" betyder att anmälan helst ska ske samma dag som händelsen inträffade. Att underlåta att anmäla i tid är straffbelagt – arbetsgivaren kan dömas till <strong>böter</strong> enligt 8 kap. 2 § AML. Till skillnad från sanktionsavgifter har böter inget förutbestämt belopp, utan bestäms av åklagare eller domstol efter begäran från Arbetsmiljöverket. Det är alltså inte en avgift du kan räkna hem – det är en brottspåföljd.</p>

<h2>Anmälan till Försäkringskassan – arbetsskada</h2>
<p>En arbetsskada som leder till sjukfrånvaro utöver den dag skadan inträffade ska anmälas till Försäkringskassan <strong>senast en månad</strong> efter att du som arbetsgivare fick kännedom om skadan. Anmälan ska göras i samråd med skyddsombud och den drabbade, och den skadade ska få en kopia.</p>
<p>Det här är lätt att slarva med när skadan verkar liten från början men sedan drar ut på tiden. Räkna en månad från kännedom, inte från när sjukskrivningen råkar bli lång.</p>

<h2>Glöm inte TFA hos AFA Försäkring</h2>
<p>TFA (Trygghetsförsäkring vid arbetsskada) är kollektivavtalad och hanteras av AFA Försäkring. Har företaget kollektivavtal – till exempel Byggavtalet – omfattas den anställde. TFA bygger på en no-fault-princip, alltså att ersättning kan betalas ut oavsett vem som orsakade skadan. Det är en egen anmälan, skild från myndighetsanmälan.</p>
<p>Preskriptionstiderna är generösa men inte oändliga: en arbetsolycka ska anmälas till AFA inom <strong>10 år</strong> från skadedagen (arbetssjukdom inom 10 år från Försäkringskassans beslut om godkänd arbetsskada), och ansökan om ersättning för inkomstförlust med mera ska göras inom <strong>6 år</strong>. Påminn den skadade om att göra sin anmälan – det är den som ger pengar tillbaka i plånboken.</p>

<h2>Dokumentera och följ upp – SAM enligt AFS 2023:1</h2>
<p>Sedan 1 januari 2025 gäller den nya regelstrukturen där AFS 2023:1 om systematiskt arbetsmiljöarbete ersatte gamla AFS 2001:1. Kravet är tydligt: tillbud och olyckor ska utredas, och riskbedömningar ska alltid <strong>dokumenteras skriftligt</strong> som underlag för åtgärder och uppföljning.</p>
<p>I praktiken innebär det att du efter en händelse ska utreda orsaken, göra en skriftlig riskbedömning, ta fram en åtgärdsplan, återkoppla till skyddsombudet och spara underlaget. Detta är både ett lagkrav och ditt bästa skydd mot att samma olycka upprepas. En muntlig genomgång på fikarasten räcker inte vid en inspektion.</p>

<h2>Steg-för-steg checklista vid en händelse på arbetsplatsen</h2>
<ol>
<li><strong>Säkra platsen</strong> – ge första hjälpen, larma 112 vid behov och avspärra så att ingen mer skadas.</li>
<li><strong>Bedöm allvaret</strong> – dödsfall, svårare skada, flera drabbade eller allvarlig fara? Då gäller anmälan till Arbetsmiljöverket.</li>
<li><strong>Anmäl till Arbetsmiljöverket samma dag</strong> om händelsen är allvarlig, via anmalarbetsskada.se.</li>
<li><strong>Anmäl till Försäkringskassan inom en månad</strong> om skadan gett frånvaro, i samråd med skyddsombud och den drabbade.</li>
<li><strong>Anmäl TFA till AFA Försäkring</strong> om företaget har kollektivavtal.</li>
<li><strong>Utred och dokumentera</strong> orsak, riskbedömning och åtgärder skriftligt enligt AFS 2023:1.</li>
<li><strong>Följ upp</strong> att åtgärderna genomförts och återkoppla till berörda.</li>
</ol>

<h2>Vanliga misstag som kostar</h2>
<ul>
<li>Att bara anmäla till Försäkringskassan och missa den skyndsamma anmälan till Arbetsmiljöverket vid allvarliga händelser.</li>
<li>Att vänta med anmälan och passera "utan dröjsmål" – risk för böter.</li>
<li>Att glömma TFA så att den skadade går miste om ersättning.</li>
<li>Att utreda muntligt utan skriftlig dokumentation – kravet i AFS 2023:1 uppfylls inte.</li>
<li>Att aldrig fånga tillbuden innan de blir olyckor.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att fånga och dokumentera tillbud och egenkontroller direkt ute på arbetsplatsen, med mallar som blir sökbara underlag i stället för lösa papperslappar. Du samlar riskbedömningar, checklistor och åtgärder på ett ställe så att uppföljningen enligt AFS 2023:1 finns dokumenterad när Arbetsmiljöverket frågar. Själva myndighetsanmälan gör du fortfarande via anmalarbetsskada.se och TFA-anmälan hos AFA – ByggExp ersätter inte myndigheternas e-tjänster, men ser till att din interna dokumentation och uppföljning håller.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag anmäla alla tillbud till Arbetsmiljöverket?</h3>
<p>Nej. Bara allvarliga tillbud – händelser som inneburit allvarlig fara för liv eller hälsa – ska anmälas till Arbetsmiljöverket. Vanliga tillbud ska du ändå utreda och dokumentera internt, men de anmäls inte. Bedömningen gör du själv, och vid tveksamhet är det bättre att anmäla.</p>
<h3>Hur snabbt måste jag anmäla en allvarlig olycka?</h3>
<p>Enligt 3 kap. 3 a § arbetsmiljölagen ska det ske utan dröjsmål, vilket i praktiken betyder samma dag. Att anmäla för sent är straffbelagt och kan leda till böter enligt 8 kap. 2 § AML.</p>
<h3>Vad är skillnaden mellan anmälan till Försäkringskassan och TFA hos AFA?</h3>
<p>Anmälan till Försäkringskassan är en myndighetsanmälan av arbetsskadan och ska göras senast en månad efter kännedom vid frånvaro. TFA hos AFA Försäkring är en separat, kollektivavtalad försäkringsanmälan som ger den skadade ersättning enligt en no-fault-princip. Du behöver oftast göra båda.</p>
<h3>Hur länge ska dokumentationen sparas?</h3>
<p>Riskbedömningar, utredningar och åtgärdsplaner ska dokumenteras skriftligt enligt AFS 2023:1 och bevaras som underlag för uppföljning. TFA-anmälan har långa preskriptionstider – upp till 10 år för en arbetsolycka – så spara underlagen med god marginal.</p>

<h2>Kom igång</h2>
<p>Börja med att strukturera hur ni fångar tillbud och gör egenkontroller på arbetsplatsen med <a href="/sv/verktyg/egenkontroll-mall">vår kostnadsfria egenkontroll-mall</a>, och se fler verktyg i <a href="/sv/verktyg">verktygslådan</a>. Vill du se hur dokumentation och uppföljning fungerar i praktiken? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoansvar-egenforetagare">Arbetsmiljöansvar för egenföretagare</a>, <a href="/sv/blog/arbetsmiljoplan">Så skriver du en arbetsmiljöplan</a> och <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a>.</p>
`;

const A_TILLBUD_ARBETSSKADA_ANMALAN_BYGG: BlogPost = {
  _id: "code-"+"tillbud-arbetsskada-anmalan-bygg",
  title: "Så anmäler du tillbud och arbetsskador rätt på bygget (2026)", slug: "tillbud-arbetsskada-anmalan-bygg", locale: "sv",
  excerpt: "En konkret guide för byggföretag: vart och när du anmäler tillbud och arbetsskador, vilka tidsfrister som gäller och hur du dokumenterar för uppföljning.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_TILLBUD_ARBETSSKADA_ANMALAN_BYGG_HTML,
  seoTitle: "Anmäla arbetsskada och tillbud bygg | ByggExp", seoDescription: "Steg-för-steg: så anmäler du tillbud och arbetsskador till Arbetsmiljöverket, Försäkringskassan och AFA – med rätt tidsfrister och dokumentation enligt AFS 2023:1.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T18:09:00.000Z", createdAt: "2026-08-19T18:09:00.000Z", updatedAt: "2026-08-19T18:09:00.000Z",
};

const A_ARBETSMILJOVERKET_INSPEKTION_BYGG_2026_HTML = `
<p>April till december 2026 driver Arbetsmiljöverket en riktad, nationell inspektionsinsats mot byggprojekt och granskar cirka 600 företag och organisationer över hela landet. Fokus ligger på tidiga skeden – hur arbetsmiljörisker hanteras redan under planering och projektering – och insatsen riktas i första hand mot byggherrar, byggarbetsmiljösamordnare för planering (Bas-P) och projektörer. Blir ni granskade är det dokumentationen som avgör hur det går, inte hur välstädad arbetsplatsen ser ut den dagen inspektören kommer.</p>

<p>Den enklaste förberedelsen är att gå igenom era rutiner mot en strukturerad mall innan Arbetsmiljöverket hör av sig – använd gärna <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a> som utgångspunkt och komplettera med checklistan längre ner.</p>

<h2>Vad är den riktade insatsen 2026 – och varför nu?</h2>
<p>Granskningen bygger på de nya reglerna AFS 2023:3 (Projektering och byggarbetsmiljösamordning – grundläggande skyldigheter) som trädde i kraft 1 januari 2025. Reglerna förtydligar roller och ansvar för byggherrar, projektörer, byggarbetsmiljösamordnare och tillverkare av monteringsfärdiga byggnader. Bakgrunden är dyster: byggbranschen står för ungefär tio dödsolyckor per år och omkring 4 500 arbetsskador med sjukfrånvaro årligen i Sverige.</p>
<p>Insatsen är väl förberedd. Under november och december 2025 genomförde Arbetsmiljöverket en pilotverksamhet för att testa nytt inspektionsstöd och ny metodik, riktad mot större byggherrar som löpande driver byggprojekt. Med andra ord är inspektörerna 2026 tränade på ett standardiserat sätt att läsa er dokumentation.</p>
<p>Parallellt pågår två andra nationella insatser som byggföretag berörs av: en tillsyn av fallrisker kopplat till ställningar, hissar och arbetsutrustning där 1 400 arbetsställen ska inspekteras, samt en insats med fokus på belastningsergonomi mellan maj 2026 och april 2027. Belastningsskador är en av de vanligaste orsakerna till sjukskrivning i landet.</p>

<h2>Vem granskas och vad tittar inspektören på?</h2>
<p>Till skillnad från en klassisk skyddsrond ute på bygget riktar 2026 års insats blicken uppåt i kedjan – mot dem som fattar besluten tidigt. De centrala rollerna är:</p>
<ul>
<li><strong>Byggherren</strong> – har det yttersta ansvaret för att lagen följs. En ställföreträdare kan utses för vissa uppgifter, men ansvaret stannar alltid hos byggherren.</li>
<li><strong>Bas-P</strong> – byggarbetsmiljösamordnare för planering och projektering, ansvarar bland annat för att arbetsmiljöplanen upprättas.</li>
<li><strong>Bas-U</strong> – byggarbetsmiljösamordnare för utförandet på plats.</li>
<li><strong>Projektörer och konstruktörer</strong> – ska bygga in säkerhet i lösningarna redan på ritbordet.</li>
</ul>
<p>Inspektören vill se att det systematiska arbetsmiljöarbetet (SAM) faktiskt fungerar och att samverkan sker tidigt. Samma juridiska eller fysiska person kan vara både Bas-P och Bas-U, men det måste alltid vara tydligt utpekat vem som är vilken – och utpekandet ska vara dokumenterat, inte muntligt.</p>

<h2>Dokumentationen som ska finnas på plats</h2>
<p>Det här är kärnan i granskningen. Följande handlingar bör finnas framme och vara aktuella:</p>
<ul>
<li><strong>Skriftlig arbetsmiljöplan (AMP)</strong> – ska upprättas innan det första byggnads- eller anläggningsarbetet påbörjas. Bas-P ansvarar för att ta fram den under planering och projektering; byggherren ansvarar för att den finns, är tillgänglig på arbetsplatsen och uppdateras vid förändringar.</li>
<li><strong>Förhandsanmälan till Arbetsmiljöverket</strong> – ska lämnas av byggherren innan arbetet startar när arbetet beräknas pågå längre än 30 arbetsdagar och mer än 20 personer sysselsätts samtidigt vid något tillfälle, eller när det totala antalet persondagar beräknas bli fler än 500.</li>
<li><strong>Skriftliga utnämningar</strong> av Bas-P och Bas-U.</li>
<li><strong>Riskbedömningar</strong> för arbeten med särskild risk.</li>
<li><strong>SAM-rutiner</strong> – hur ni undersöker, riskbedömer, åtgärdar och följer upp.</li>
<li><strong>Uppdateringslogg för AMP</strong> som visar att planen är ett levande dokument.</li>
</ul>

<h2>Checklista – 10 punkter före inspektionen</h2>
<p>Gå igenom listan projekt för projekt och bocka av det som är på plats:</p>
<ol>
<li>Arbetsmiljöplanen är upprättad, aktuell och fysiskt eller digitalt tillgänglig på arbetsplatsen.</li>
<li>Förhandsanmälan är inskickad och uppdaterad om förutsättningarna ändrats.</li>
<li>Bas-P och Bas-U är skriftligt utsedda och kända för alla på bygget.</li>
<li>Riskbedömningar för arbeten med särskild risk är dokumenterade och kopplade till åtgärder.</li>
<li>Fallskydd och ställningar är kontrollerade och besiktade – detta granskas dessutom i den parallella fallrisk-tillsynen.</li>
<li>Personlig skyddsutrustning finns och används enligt AFS 2023:11.</li>
<li>Introduktion och instruktion av personal är genomförd och kan styrkas.</li>
<li>Rutin för tillbuds- och olycksrapportering finns och används.</li>
<li>Samordningsansvaret på gemensamt arbetsställe är tydligt utpekat.</li>
<li>Egenkontroll av belastningsergonomi görs – i linje med insatsen som pågår maj 2026 till april 2027.</li>
</ol>

<h2>Vanliga brister Arbetsmiljöverket hittar (och sanktioner)</h2>
<p>De återkommande bristerna handlar ofta om fallskydd och ställningar som inte är korrekt monterade eller besiktade, och om tunga, ergonomiskt olämpliga arbetsmoment som aldrig riskbedömts. Lika vanligt är rent formella luckor: en arbetsmiljöplan som aldrig uppdaterats sedan projektstart, eller roller som utsetts muntligt men inte skriftligt.</p>
<p>Konsekvenserna varierar. Arbetsmiljöverket kan ställa krav på åtgärder, meddela förbud mot fortsatt arbete, förena beslut med vite och i vissa fall ta ut en sanktionsavgift direkt. Att ha ordning på dokumentationen är därför inte bara en formsak – det är det som skiljer ett påpekande från ett kostsamt ingripande.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp samlar ni egenkontroller, riskbedömningar och rutiner på ett ställe så att de blir sökbara när inspektören frågar. Ni kan använda mallar som utgångspunkt, dokumentera vem som är ansvarig och när något senast uppdaterades, och undvika att viktiga handlingar bara ligger som lösa pdf:er i en mejlkedja. Verktyget ersätter inte byggherrens eller Bas-P:s ansvar enligt AFS 2023:3, men det gör det enklare att visa att arbetet faktiskt utförs och följs upp löpande.</p>

<h2>Vanliga frågor</h2>
<h3>När pågår Arbetsmiljöverkets riktade bygginspektion 2026?</h3>
<p>Den nationella insatsen mot byggprojekt pågår april till december 2026 och omfattar cirka 600 företag och organisationer. Parallellt löper en fallrisk-tillsyn av 1 400 arbetsställen och en insats om belastningsergonomi som sträcker sig till april 2027.</p>
<h3>Vem har ansvaret om vi anlitar en byggarbetsmiljösamordnare?</h3>
<p>Byggherren kan utse en ställföreträdare och en Bas-P eller Bas-U tar över vissa uppgifter, men det yttersta ansvaret för att lagen följs stannar alltid hos byggherren. Rollerna måste vara tydligt och skriftligt utpekade.</p>
<h3>När måste förhandsanmälan lämnas in?</h3>
<p>Byggherren ska lämna förhandsanmälan innan arbetet startar när arbetet beräknas pågå längre än 30 arbetsdagar och mer än 20 personer sysselsätts samtidigt vid något tillfälle, eller när det totala antalet persondagar beräknas bli fler än 500.</p>
<h3>Måste arbetsmiljöplanen finnas innan bygget börjar?</h3>
<p>Ja. En skriftlig arbetsmiljöplan ska upprättas innan det första byggnads- eller anläggningsarbetet påbörjas. Bas-P tar fram den under projekteringen, och byggherren ansvarar för att den finns, är tillgänglig på plats och uppdateras vid förändringar.</p>

<h2>Kom igång</h2>
<p>Börja med att gå igenom era projekt mot checklistan ovan och säkra att arbetsmiljöplanen är ett levande dokument. Utgå från <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a> eller bläddra bland fler <a href="/sv/verktyg">gratis byggverktyg</a>. Vill ni se hur ByggExp håller dokumentationen samlad inför en inspektion, <a href="/sv/contact">boka en kort demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/skyddsrond-bygg-checklista">Skyddsrond på bygget – checklista</a>, <a href="/sv/blog/riskbedomning-byggarbetsplats-mall">Riskbedömning på byggarbetsplats – mall</a> och <a href="/sv/blog/systematiskt-arbetsmiljoarbete-litet-byggforetag">Systematiskt arbetsmiljöarbete för det lilla byggföretaget</a>.</p>
`;

const A_ARBETSMILJOVERKET_INSPEKTION_BYGG_2026: BlogPost = {
  _id: "code-"+"arbetsmiljoverket-inspektion-bygg-2026",
  title: "Arbetsmiljöverkets riktade bygginspektioner 2026 – checklista och dokumentationskrav", slug: "arbetsmiljoverket-inspektion-bygg-2026", locale: "sv",
  excerpt: "Arbetsmiljöverket driver en nationell insats mot byggprojekt 2026 – här är vad de granskar och dokumentationen ni behöver ha på plats.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_ARBETSMILJOVERKET_INSPEKTION_BYGG_2026_HTML,
  seoTitle: "Bygginspektion 2026: checklista | ByggExp", seoDescription: "Arbetsmiljöverket granskar ca 600 byggprojekt april–december 2026. Se vad de tittar på, vilken dokumentation som krävs och gå igenom vår checklista.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T20:15:00.000Z", createdAt: "2026-08-19T20:15:00.000Z", updatedAt: "2026-08-19T20:15:00.000Z",
};

const A_ENSAMARBETE_BYGG_REGLER_HTML = `
<p>Många hantverkare och små byggfirmor jobbar ensamma stora delar av arbetsdagen – ensam i källaren, ensam på ett tak, ensam ute på ett servicejobb. Ensamarbete är inte förbjudet, men det är villkorat: du får ordna det bara om risken kan hanteras. Från 1 januari 2025 bytte dessutom reglerna hem. Den gamla föreskriften AFS 1982:3 om ensamarbete är upphävd, och kraven finns nu i AFS 2023:2, 6 kap. Skriver du eller din arbetsledare rutiner för 2026 är det den nya föreskriften som gäller.</p>

<p>Vill du komma igång direkt med dokumentationen kan du använda vår gratis <a href="/sv/verktyg/egenkontroll-mall">egenkontroll- och checklistmall</a> för att skriva ned vilka moment som får utföras ensam och hur snabb hjälp ska nås.</p>

<h2>Vad räknas som ensamarbete?</h2>
<p>Enligt AFS 2023:2, 6 kap. 1 § är ensamarbete arbete i fysisk eller social isolering. Skillnaden är viktig eftersom båda formerna omfattas.</p>
<ul>
<li><strong>Fysisk isolering</strong> innebär att den som arbetar behöver teknisk kommunikationsutrustning, till exempel en telefon, för att nå andra människor. Ett klassiskt byggexempel är arbete ensam i en källare, ett kryputrymme eller ett schakt där ingen finns inom syn- eller hörhåll.</li>
<li><strong>Social isolering</strong> innebär att det finns människor i närheten, men att den som arbetar inte kan vara säker på att få hjälp i en kritisk situation. Det gäller till exempel den som jobbar ensam i en avlägsen del av en stor arbetsplats, där en olycka inte skulle uppmärksammas i tid.</li>
</ul>
<p>Poängen är att ensamarbete inte bara handlar om att vara helt själv på plats. Även den som har kollegor på samma bygge kan i praktiken utföra ensamarbete om ingen skulle märka att något hänt.</p>

<h2>Vad säger reglerna om ensamarbete på bygget 2026?</h2>
<p>Reglerna kring ensamarbete och bygg hänger ihop med en större regelreform. Arbetsmiljöverkets cirka 67 äldre föreskrifter slogs 1 januari 2025 samman till 15 nya AFS i 2023-serien. AFS 2023:2 ersatte åtta gamla föreskrifter, däribland ensamarbete, OSA samt våld och hot. Grundregeln i 6 kap. 4 § är enkel att komma ihåg: arbetet ska ordnas så att den som jobbar ensam inte löper större risk att skadas än om flera hade utfört arbetet tillsammans.</p>
<p>De byggspecifika kraven ligger dock i andra föreskrifter. Byggnads- och anläggningsarbete regleras i AFS 2023:13, kap 5, och projektering samt byggarbetsmiljösamordning i AFS 2023:3. AFS 2023:13 har redan ändrats en gång genom AFS 2025:6, så kontrollera alltid den senaste konsoliderade versionen innan du fastställer en rutin.</p>

<h2>När är ensamarbete tillåtet – och när inte?</h2>
<p>Utgångspunkten är att ensamarbete är tillåtet om inte en särskild regel begränsar det. Men det finns tydliga gränser:</p>
<ul>
<li><strong>Tillåtet</strong> när risken har bedömts och kan hanteras med rimliga åtgärder.</li>
<li><strong>Direktkontakt ska eftersträvas</strong> (6 kap. 5 §) om arbetet innebär stark psykisk påfrestning – arbetstagaren ska då kunna nå kollegor eller andra.</li>
<li><strong>Snabb hjälp krävs</strong> (6 kap. 6 §) om det finns påtaglig risk för kroppsskada genom olycksfall.</li>
<li><strong>Inte tillåtet som ensamarbete</strong> (6 kap. 7 §) om påtaglig skaderisk finns och tillräcklig säkerhet, alltså snabb hjälp, inte kan ordnas. Då måste momentet utföras med fler personer.</li>
<li><strong>Förbjudet</strong> när arbetet innebär påtaglig risk för våld eller hot om våld.</li>
<li><strong>Minderåriga</strong> får inte utföra ensamarbete som innebär psykisk påfrestning, skaderisk eller risk för våld.</li>
</ul>
<p>Konkreta byggmoment där ensamarbete ofta faller bort är takarbete med fallhöjd, arbete i djupa schakt med rasrisk, arbete i slutna utrymmen och heta arbeten – där en skada snabbt blir livshotande om ingen kan ingripa. Du är också skyldig att informera skyddsombudet när du ordnar ensamarbete som omfattas av bestämmelserna om psykisk påfrestning och skaderisk.</p>

<h2>Riskbedömning steg för steg</h2>
<p>Innan ensamarbete ordnas måste du undersöka arbetsmiljön, bedöma riskerna och vidta åtgärder – det följer av det systematiska arbetsmiljöarbetet (SAM) i AFS 2023:1. En praktisk gång för byggmoment:</p>
<ol>
<li><strong>Undersök</strong> momentet: fallhöjd, ras- och schaktrisk, avskilt läge, mobiltäckning, tid på dygnet och den enskilda personens förutsättningar och erfarenhet.</li>
<li><strong>Bedöm</strong> hur allvarlig en skada kan bli och hur snabbt hjälp faktiskt skulle nå fram.</li>
<li><strong>Åtgärda</strong> genom att antingen ordna snabb hjälp eller besluta att momentet inte får utföras ensam.</li>
<li><strong>Följ upp</strong> och dokumentera bedömningen, och informera skyddsombudet.</li>
</ol>
<p>En strukturerad mall gör det enklare att göra bedömningen likadant varje gång. Se även vår guide till <a href="/sv/blog/riskbedomning-byggarbetsplats-mall">riskbedömning på byggarbetsplatsen</a>.</p>

<h2>Larmrutiner och snabb hjälp i praktiken</h2>
<p>Kravet på snabb hjälp i 6 kap. 6 § kan lösas på flera sätt. Accepterade lösningar är bland annat:</p>
<ul>
<li><strong>Personlarm</strong>, ofta med GPS-positionering, som larmar automatiskt eller manuellt.</li>
<li><strong>Regelbundna avstämningar</strong> och incheckningar med en utsedd kontaktperson vid överenskomna tider.</li>
<li><strong>Mans-down- eller dödmansgrepp</strong> och rörelsesensorer som larmar om personen blir liggande stilla.</li>
<li><strong>Övervakningskamera</strong> i tydliga riskzoner.</li>
</ul>
<p>En viktig sak att förstå: en mobiltelefon i fickan räcker inte som larmrutin. Om personen blir skadad och inte kan använda telefonen ger den ingen hjälp. Larmet måste fungera även när den som arbetar inte själv kan larma.</p>

<h2>Särskilda regler för enmans- och familjeföretag</h2>
<p>AFS 2023:13 innehåller egna skyldigheter för ensamföretagare och familjeföretagare på bygget. Att du driver ett enmansföretag befriar dig alltså inte från kraven. När du hyrs in på någon annans byggarbetsplats gäller dessutom samordningsansvaret, och du ska följa de rutiner som byggarbetsmiljösamordnaren satt upp. Vid arbete i inneslutningar med luftsluss ställs särskilda krav på den ensamarbetandes beredskap för nödsituationer.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte en juridisk bedömning, men gör det praktiska arbetet enklare. I ByggExp kan du samla dina egenkontroller, checklistor och riskbedömningar på ett ställe, koppla dem till rätt projekt och exportera dem som PDF när en beställare eller Arbetsmiljöverket frågar. En återkommande ensamarbetsrutin blir en mall du fyller i på plats i mobilen i stället för lösa papper. Du bestämmer själv innehållet – verktyget hjälper dig att dokumentera och hålla ordning, inte att avgöra vad som är säkert.</p>

<h2>Vanliga frågor</h2>
<h3>Är ensamarbete förbjudet på bygget?</h3>
<p>Nej. Ensamarbete är tillåtet så länge risken kan hanteras. Det blir otillåtet enligt AFS 2023:2, 6 kap. 7 § om det finns påtaglig risk för kroppsskada och snabb hjälp inte kan ordnas, och det är förbjudet vid påtaglig risk för våld eller hot.</p>
<h3>Vilken AFS gäller för ensamarbete 2026?</h3>
<p>Den gamla AFS 1982:3 är upphävd sedan 1 januari 2025. Reglerna finns nu i AFS 2023:2, 6 kap. Byggspecifika krav ligger i AFS 2023:13 och AFS 2023:3.</p>
<h3>Måste jag ha personlarm?</h3>
<p>Inte alltid. Personlarm är en av flera accepterade lösningar för att uppfylla kravet på snabb hjälp. Regelbundna avstämningar, mans-down-funktion eller kamera i riskzon kan också fungera. Kravet är att hjälp ska nå fram snabbt även om personen inte själv kan larma.</p>
<h3>Gäller reglerna för enmansföretag?</h3>
<p>Ja. AFS 2023:13 innehåller särskilda skyldigheter för ensam- och familjeföretagare, och samordningsansvaret gäller när du hyrs in på annans byggarbetsplats.</p>

<h2>Kom igång</h2>
<p>Börja med att lista vilka moment som får respektive inte får utföras ensam, utse en kontaktperson och sätt ett incheckningsintervall. Dokumentera bedömningen med vår <a href="/sv/verktyg/egenkontroll-mall">egenkontroll- och checklistmall</a>, eller utforska fler gratisverktyg i <a href="/sv/verktyg">ByggExp verktygslåda</a>. Vill du se hur rutinerna fungerar samlat i ett system? <a href="/sv/contact">Boka en demo</a> så visar vi dig.</p>

<p>Relaterat: <a href="/sv/blog/riskbedomning-byggarbetsplats-mall">Riskbedömning på byggarbetsplats – mall</a>, <a href="/sv/blog/systematiskt-arbetsmiljoarbete-litet-byggforetag">Systematiskt arbetsmiljöarbete i litet byggföretag</a>, <a href="/sv/blog/skyddsrond-bygg-checklista">Skyddsrond på bygget – checklista</a>.</p>
`;

const A_ENSAMARBETE_BYGG_REGLER: BlogPost = {
  _id: "code-"+"ensamarbete-bygg-regler",
  title: "Ensamarbete på bygget – reglerna 2026: när det är tillåtet, riskbedömning och larmrutiner", slug: "ensamarbete-bygg-regler", locale: "sv",
  excerpt: "Ensamarbete är tillåtet på bygget – men bara om risken kan hanteras. Här är reglerna 2026, riskbedömningen och larmrutinerna du behöver.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_ENSAMARBETE_BYGG_REGLER_HTML,
  seoTitle: "Ensamarbete bygg – regler 2026 | ByggExp", seoDescription: "Ensamarbete på bygget är inte förbjudet men villkorat. Så gäller reglerna 2026 (AFS 2023:2), riskbedömning och larmrutiner för små byggfirmor.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T08:18:00.000Z", createdAt: "2026-08-20T08:18:00.000Z", updatedAt: "2026-08-20T08:18:00.000Z",
};

const A_MASKINFORARBEVIS_HJULLASTARE_BYGG_HTML = `
<p>Frågan "vilket maskinförarbevis behövs för hjullastare?" har inget enkelt svar – och det beror på att många blandar ihop två helt skilda regelsystem. Det ena är tvingande lag och gäller alla arbetsgivare. Det andra är ett branschkrav som bara gäller om arbetsplatsen omfattas av kollektivavtal. Att förväxla dem kostar antingen pengar i onödan eller innebär att ni saknar behörighet ni faktiskt är skyldiga att ha. Oavsett vilket är det arbetsgivaren – inte föraren – som bär ansvaret.</p>

<p>Behöver ni ordning på kompetens, riskbedömningar och kontroller? Börja med <a href="/sv/verktyg">våra gratis verktyg för byggföretag →</a> och bygg in behörighetskontrollen i era rutiner.</p>

<h2>Två skilda regelsystem – lag och kollektivavtal</h2>
<p>Svensk rätt kring maskinförare har två lager som ofta förväxlas:</p>
<ul>
<li><strong>Lagkravet</strong> kommer från Arbetsmiljöverkets föreskrifter. Arbetsgivaren måste säkerställa att föraren har tillräckliga, dokumenterade teoretiska och praktiska kunskaper – och ge ett skriftligt tillstånd att köra maskinen (körtillstånd). Detta gäller alla, oavsett avtal.</li>
<li><strong>Branschkravet</strong> kommer från kollektivavtalen. Här handlar det om yrkesbevis, ofta kallat "gult kort". Yrkesbevis är alltså <strong>inte</strong> ett lagkrav utan ett avtalskrav.</li>
</ul>
<p>Det ena kan gälla utan det andra. Ett litet företag utan bindande bygg- eller anläggningsavtal måste ändå uppfylla lagkravet på dokumenterad kunskap och körtillstånd – men behöver inte nödvändigtvis yrkesbevis. Ett företag på en avtalsbunden byggarbetsplats måste uppfylla båda.</p>

<h2>Vad lagen kräver – arbetsgivarens ansvar enligt AFS 2023:11</h2>
<p>Sedan 1 januari 2025 gäller den nya samlingsföreskriften AFS 2023:11 "Arbetsutrustning och personlig skyddsutrustning – säker användning". Den ersätter bland annat de äldre föreskrifterna om truckar (AFS 2006:5) och arbetsutrustning (AFS 2006:4), men själva grundprincipen lever kvar.</p>
<p>Arbetsgivaren ska:</p>
<ul>
<li>riskbedöma hur maskinen används i den aktuella verksamheten,</li>
<li>säkerställa att föraren har dokumenterade teoretiska och praktiska kunskaper för just den maskintypen,</li>
<li>ge ett skriftligt tillstånd (körtillstånd) som anger vad och var föraren får köra.</li>
</ul>
<p>Notera att "dokumenterad kunskap" inte är samma sak som ett externt kursintyg. Det är arbetsgivarens ansvar att kunna visa att kunskapen finns och att tillståndet är utfärdat – ett muntligt "du kan väl köra?" räcker inte om Arbetsmiljöverket frågar.</p>

<h2>Truck vs maskin – var lagkravet på bevis är hårdast</h2>
<p>Här skiljer sig reglerna åt beroende på maskintyp, och det är värt att förstå nyansen.</p>
<p>För <strong>truck</strong> är kravet på dokumenterade kunskaper plus skriftligt tillstånd ett uttryckligt lagkrav. Utbildningsbeviset – exempelvis en TLP10-baserad truckutbildning – ska inte förväxlas med arbetsgivarens tillstånd. Beviset visar att föraren har kompetens; tillståndet ger tillåtelse och anger godsslag samt vilka lokaler eller områden som gäller. Man behöver båda.</p>
<p>För <strong>hjullastare och grävmaskin</strong> är lagen mer generell: kravet gäller "tillräckliga kunskaper" och skriftligt körtillstånd, men det finns inget lagstadgat specifikt bevis av trucktyp. Det betyder inte att kravet är mildare i praktiken – dokumentationskravet gäller fullt ut – men lagen pekar inte ut ett bestämt kort.</p>

<h2>Vad kollektivavtalet kräver – yrkesbevis och 1 500 kg / 10 tonmeter</h2>
<p>På arbetsplatser som omfattas av bygg- eller anläggningsavtal skärps kraven. Där krävs utbildning och behörighet – yrkesbevis – för förare som framför maskin med <strong>totalvikt över 1 500 kg</strong> eller <strong>lyftkapacitet över 10 tonmeter</strong>. En vanlig hjullastare på ett bygge ligger normalt över den gränsen. Kollektivavtalen berör bland annat Byggnads, Seko och Transport.</p>
<p>Det är alltså här yrkesbeviset blir obligatoriskt – inte via arbetsmiljölagen, utan via avtalet. Omfattas ni av ett sådant avtal och saknar yrkesbevis för en förare över tröskeln är ni i praktiken avtalsbrutna, även om ni uppfyllt lagens kunskaps- och tillståndskrav.</p>

<h2>Utbildningsbevis, yrkesbevis och körtillstånd – tre olika dokument</h2>
<p>Tre dokument som ständigt förväxlas:</p>
<ul>
<li><strong>Utbildningsbevis ("svart kort")</strong> – utfärdas efter godkänd maskinförarutbildning och kompetensprov. Visar grundläggande kompetens. Utfärdas inom branschsystemet.</li>
<li><strong>Yrkesbevis ("gult kort")</strong> – kräver omfattande praktik: minst 30 månader eller 4 000 timmar med maskinen. Svart kort växlas upp till gult när tillräcklig erfarenhet uppnåtts. ME anger en kvalificeringsperiod på cirka 24 månader under lärlingstiden. Yrkesbevis för bygg och anläggning utfärdas av BYN (Byggbranschens yrkesnämnd); truck- och maskinbevis inom transportsektorn hanteras av TYA.</li>
<li><strong>Körtillstånd</strong> – arbetsgivarens egna skriftliga tillstånd enligt AFS 2023:11. Det är detta dokument som ger föraren tillåtelse att köra en viss maskin på just er arbetsplats.</li>
</ul>
<p>Har en förare yrkesbevis för en maskintyp – säg grävmaskin – och vill lägga till hjullastare, görs det via kompetensprov eller kompletterande utbildning. Man börjar alltså inte om från noll.</p>

<h2>Körkort på allmän väg – motorredskap klass I och II</h2>
<p>En hjullastare räknas som motorredskap. Körkortskravet på allmän väg beror på registreringen:</p>
<ul>
<li><strong>Motorredskap klass II</strong> (max 30 km/h) får köras med traktorkort eller valfritt bilkörkort (B).</li>
<li><strong>Motorredskap klass I</strong> (byggd för över 30 km/h, får framföras i högst 50 km/h) kräver minst B-körkort – oavsett om den körs på eller vid vägen.</li>
</ul>
<p>På en <strong>inhägnad eller avstängd byggarbetsplats</strong> som inte är allmän väg krävs inget körkort för själva framförandet. Där styr arbetsmiljöreglerna – dokumenterad kunskap och körtillstånd – samt eventuellt kollektivavtalets yrkesbeviskrav. Körkort eller traktorkort blir relevant först vid färd på allmän väg. Tänk också på åldersgränsen: minderåriga under 18 år får som huvudregel inte självständigt framföra motordrivna arbetsmaskiner, enligt Arbetsmiljöverkets föreskrifter om minderårigas arbetsmiljö.</p>

<h2>Glöm inte beställarkraven</h2>
<p>Utöver lag och kollektivavtal ställer enskilda beställare egna krav som gäller oavsett vad arbetsmiljölagen eller avtalet säger. Trafikverket kräver "Arbete på väg", elsektorn kräver ofta EBR. Kontrollera alltid upphandlings- och kontraktsvillkoren innan ni sätter en förare på uppdraget.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte utbildningar eller yrkesbevis – men systemet hjälper er att hålla ordning på det arbetsgivaren faktiskt måste kunna visa. Ni kan samla riskbedömningar, dokumentera kunskap och koppla körtillstånd till rätt person och maskin, så att underlaget finns när en beställare eller Arbetsmiljöverket frågar. Använd gärna <a href="/sv/verktyg/egenkontroll-mall">vår mall för egenkontroll</a> som en enkel startpunkt för att strukturera behörighets- och kompetenskontrollen på arbetsplatsen.</p>

<h2>Vanliga frågor</h2>
<h3>Räcker ett truckkort eller maskinförarutbildning som körtillstånd?</h3>
<p>Nej. Ett utbildnings- eller truckbevis visar kompetens, men körtillståndet är arbetsgivarens eget skriftliga beslut som anger vad och var föraren får köra. Ni behöver båda delarna.</p>

<h3>Måste alla hjullastarförare ha yrkesbevis?</h3>
<p>Bara om arbetsplatsen omfattas av bygg- eller anläggningsavtal och maskinen har totalvikt över 1 500 kg eller lyftkapacitet över 10 tonmeter. Yrkesbevis är ett avtalskrav, inte ett lagkrav.</p>

<h3>Behöver föraren körkort på byggarbetsplatsen?</h3>
<p>Inte för att framföra maskinen på en inhägnad, avstängd arbetsplats. Körkort eller traktorkort krävs först vid färd på allmän väg, och då styr motorredskapets klass vilken behörighet som behövs.</p>

<h3>Vem har ansvaret om en förare saknar rätt behörighet?</h3>
<p>Arbetsgivaren. Det är arbetsgivaren som ska riskbedöma, säkerställa dokumenterad kunskap och utfärda skriftligt körtillstånd – och som kan hållas ansvarig om det brister.</p>

<h2>Kom igång</h2>
<p>Samla behörigheter, kompetensintyg och körtillstånd på ett ställe och slipp leta i pärmar. Testa <a href="/sv/verktyg">våra gratis verktyg</a> eller <a href="/sv/contact">boka en demo</a> så visar vi hur ni bygger in behörighetskontrollen i era rutiner.</p>

<p>Relaterat: <a href="/sv/blog/byggstallning-regler-krav">Byggställning – regler och krav</a>, <a href="/sv/blog/personlig-skyddsutrustning-krav-bygg">Krav på personlig skyddsutrustning på bygget</a> och <a href="/sv/blog/systematiskt-arbetsmiljoarbete-litet-byggforetag">Systematiskt arbetsmiljöarbete i det lilla byggföretaget</a>.</p>
`;

const A_MASKINFORARBEVIS_HJULLASTARE_BYGG: BlogPost = {
  _id: "code-"+"maskinforarbevis-hjullastare-bygg",
  title: "Maskinförarbevis för hjullastare på bygget – vad krävs egentligen 2026?", slug: "maskinforarbevis-hjullastare-bygg", locale: "sv",
  excerpt: "En genomgång av skillnaden mellan lagstadgat körtillstånd, yrkesbevis enligt kollektivavtal och körkort på allmän väg – och vad arbetsgivaren faktiskt måste dokumentera.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_MASKINFORARBEVIS_HJULLASTARE_BYGG_HTML,
  seoTitle: "Maskinförarbevis hjullastare | ByggExp", seoDescription: "Vilka förarbevis krävs för hjullastare, grävmaskin och truck på bygget? Skilj lagkrav från kollektivavtal – och se arbetsgivarens ansvar 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T08:21:00.000Z", createdAt: "2026-08-20T08:21:00.000Z", updatedAt: "2026-08-20T08:21:00.000Z",
};

const A_LIFTUTBILDNING_KRAV_BYGG_HTML = `
<p>Mobila arbetsplattformar hör till de mest reglerade maskinerna på en byggarbetsplats – och samtidigt de där missförstånden är som störst. Många tror att ett giltigt liftkort räcker för att köra, andra tror att småliftar är undantagna. Båda har fel. Sedan 1 januari 2025 gäller dessutom ett nytt regelverk, AFS 2023:11, som ersatte den gamla AFS 2006:6. Kraven i sak är i stort desamma, men om du inte kan visa dokumenterad kompetens och ett skriftligt körtillstånd vid en inspektion riskerar företaget en sanktionsavgift. Efter den här genomgången vet du exakt vad du behöver kunna bevisa för varje liftförare på bygget.</p>

<p>Behöver du samla dokumentationen på ett ställe hittar du våra gratis mallar och verktyg för byggföretag här: <a href="/sv/verktyg">vår verktygslåda för hantverkare och byggföretag -&gt;</a></p>

<h2>Vad säger lagen 2026? Från AFS 2006:6 till AFS 2023:11</h2>
<p>Fram till årsskiftet 2024/2025 reglerades liftanvändning av AFS 2006:6 om användning av lyftanordningar. Från 1 januari 2025 gäller i stället AFS 2023:11 "Arbetsutrustning och personlig skyddsutrustning – säker användning". Regelverket är nytt, men substansen kring liftar är oförändrad: en mobil arbetsplattform får bara användas av någon som är väl förtrogen med arbetet och har <strong>dokumenterad teoretisk och praktisk kunskap</strong> för säker användning.</p>
<p>Det nya är tydligheten kring bevisbördan. Kompetensen ska kunna styrkas med ett utbildningsbevis, och det är arbetsgivaren som ansvarar för att föraren både har kunskapen och att den finns dokumenterad. Kravet riktar sig alltså mot två parter: föraren, som ska ha kompetensen, och arbetsgivaren, som ska säkerställa och dokumentera den. Skriver du "AFS 2006:6" i era rutiner eller egenkontroller är det dags att uppdatera – hänvisa till AFS 2023:11 i allt som gäller från 2025 och framåt.</p>

<h2>Liftkort vs körtillstånd: två olika saker</h2>
<p>Detta är den enskilt vanligaste missuppfattningen. Utbildningsbeviset – "liftkortet" – och körtillståndet är två separata dokument med olika funktion.</p>
<p>Utbildningsbeviset visar att föraren har genomgått en godkänd utbildning och har den teoretiska och praktiska kompetensen. Men det ger <strong>inte i sig rätten att köra</strong>. För att föraren faktiskt ska få använda en lift på bygget krävs dessutom ett skriftligt <strong>körtillstånd</strong> från arbetsgivaren. Körtillståndet är arbetsplats- och maskinspecifikt: det namnger föraren och vilka typer av liftar hen får framföra.</p>
<p>Den som utfärdar körtillståndet – oftast arbetsledaren eller platschefen – måste själv kunna visa att hen har tillräcklig utbildning för att bedöma förarens kompetens. Ett vanligt fel vid inspektion är att liftkortet finns, men körtillståndet saknas eller aldrig har skrivits ut. Då är ni inte compliant, oavsett hur gedigen utbildningen var. Rutinen bör vara: giltigt utbildningsbevis in, körtillstånd ut – innan föraren rör spakarna.</p>

<h2>Lift-kategorierna A1, A3, B1, B3 – vad du faktiskt får köra</h2>
<p>Utbildning och certifiering följer standarden SS-ISO 18878:2013 och delar in liftar i kompetenskategorier. Logiken är enkel när man kan koden:</p>
<ul>
<li><strong>A</strong> = plattformen håller sig inom chassits stödyta (vertikallyft: pelarlift, saxlift).</li>
<li><strong>B</strong> = plattformen sträcker sig utanför chassit (bomlift).</li>
<li><strong>Typ 1</strong> = statisk, ingen förflyttning med upphöjd plattform.</li>
<li><strong>Typ 3</strong> = mobil, kan köras med upphöjd plattform.</li>
</ul>
<p>Det ger de fyra vanliga kategorierna: <strong>A1</strong> statisk vertikallift, <strong>A3</strong> mobil vertikallift (saxlift), <strong>B1</strong> statisk bomlift och <strong>B3</strong> självgående bomlift. Kortet gäller bara de kategorier föraren har utbildats och examinerats på. Har någon bara A3 får hen inte hoppa in i en bomlift för att "det bara är en liten grej". Kontrollera därför alltid att förarens kategorier matchar de maskiner som faktiskt finns på arbetsplatsen innan körtillståndet skrivs.</p>

<h2>Giltighet, repetition och SS-ISO 18878</h2>
<p>Utbildningen bygger på den branschgemensamma Liftläroplanen (LLP) som förvaltas av Liftutbildningsrådet (LUR), och på ISO-standarden ovan. Ett utbildningsbevis har en <strong>rekommenderad giltighet på 5 år</strong>. Därefter rekommenderas en kortare repetitionsutbildning för att hålla kunskapen aktuell. Observera att femårsgränsen är en branschrekommendation och standard – inte ett hårt lagstadgat utgångsdatum. Kravet i AFS 2023:11 är att kunskapen ska vara aktuell och dokumenterad, och en förnyad utbildning är det enklaste sättet att styrka det. Ett giltigt utbildningsbevis ska visa förarens namn, vilka kategorier som omfattas, utfärdare och datum, så att både innehåll och aktualitet går att kontrollera.</p>

<h2>Fallskydd i lift: när krävs helkroppssele?</h2>
<p>Om helkroppssele krävs avgörs av en <strong>riskbedömning</strong>, inte av en tumregel. I praktiken:</p>
<ul>
<li><strong>Bomlift (B-typ):</strong> personligt fallskydd krävs normalt, eftersom det finns risk att slungas ur korgen vid ryck eller stötar.</li>
<li><strong>Saxlift (A3):</strong> sele krävs ofta inte om skyddsräcket är helt och används rätt.</li>
</ul>
<p>När fallskydd används ska det alltid vara en <strong>helkroppssele</strong> kopplad till avsedd förankringspunkt i korgen – aldrig ett midjebälte. Dokumentera riskbedömningen så att valet går att motivera. Vill du läsa mer om regelverket kring personligt fallskydd finns en fördjupning i vår artikel om <a href="/sv/blog/fallskydd-krav-bygg">fallskydd och krav på bygget</a>.</p>

<h2>Arbetsgivarens ansvar och sanktionsavgifter</h2>
<p>Arbetsgivaren bär ansvaret för att föraren har rätt kunskap och för att dokumentationen på den teoretiska och praktiska kompetensen finns bevarad. Vid en inspektion kontrolleras typiskt: giltigt utbildningsbevis per kategori, skriftligt körtillstånd på plats, och att den som utfärdat tillståndet själv är utbildad.</p>
<p>Brister kan leda till en <strong>sanktionsavgift</strong> – en direkt avgift utan domstolsprövning. Modellen i 2023 års regelverk för arbetsgivare med färre än 500 anställda är: 15 000 kr + (antal anställda − 1) × 271 kr, avrundat nedåt till närmaste hundratal, med lägst 15 000 kr och högst 150 000 kr. Från 500 anställda är avgiften 150 000 kr. Kontrollera dock alltid vilka specifika bestämmelser som är sanktionsbelagda kontra vad som "bara" ger ett inspektionskrav innan du utgår från exakta belopp. Utöver avgiften finns en försäkrings- och ansvarsrisk: sker en olycka med en förare utan körtillstånd står företaget svagt.</p>

<h2>Checklista: så är du compliant på bygget 2026</h2>
<ul>
<li>Giltigt utbildningsbevis för varje förare – och för rätt kategorier (A1/A3/B1/B3).</li>
<li>Skriftligt, namngivet körtillstånd på plats för varje förare och maskintyp.</li>
<li>Den som utfärdar körtillstånd är själv utbildad.</li>
<li>Daglig kontroll av liften före användning.</li>
<li>Dokumenterad riskbedömning som avgör om helkroppssele krävs.</li>
<li>All dokumentation bevarad och tillgänglig vid inspektion.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>Kraven faller ofta på just dokumentationen – inte på att kompetensen saknas, utan på att den inte går att visa upp. I ByggExp kan du samla utbildningsbevis, körtillstånd och riskbedömningar per projekt och medarbetare, så att rätt underlag finns framme när Arbetsmiljöverket eller beställaren frågar. Du kan bygga en återkommande egenkontroll för liftanvändning med vår <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mall</a> och koppla den till varje arbetsplats. Verktyget ersätter inte utbildningen eller din juridiska bedömning – men det gör det enklare att hålla ordning på bevisen och att fånga ett utgående liftkort innan det blir ett problem på bygget.</p>

<h2>Vanliga frågor</h2>
<h3>Hur länge gäller liftkortet?</h3>
<p>Utbildningsbeviset har en rekommenderad giltighet på 5 år. Därefter rekommenderas en repetitionsutbildning. Det är en branschstandard snarare än ett hårt lagstadgat utgångsdatum, men kunskapen ska enligt AFS 2023:11 alltid vara aktuell och dokumenterad.</p>
<h3>Måste jag ha körtillstånd även med giltigt liftkort?</h3>
<p>Ja. Liftkortet visar kompetens, men ger inte rätten att köra. Arbetsgivaren måste dessutom utfärda ett skriftligt, arbetsplats- och maskinspecifikt körtillstånd som namnger föraren. Utan det är ni inte compliant.</p>
<h3>Krävs sele i saxlift?</h3>
<p>Det avgörs av riskbedömningen. I saxlift (A3) krävs ofta ingen sele om räcket är helt, medan bomlift normalt kräver personligt fallskydd. Används fallskydd ska det alltid vara en helkroppssele.</p>
<h3>Gäller kravet små liftar?</h3>
<p>Ja. Kravet på dokumenterad utbildning gäller alla mobila arbetsplattformar oavsett höjd eller storlek. Det finns inget undantag för små saxliftar eller korta jobb.</p>

<h2>Kom igång</h2>
<p>Börja med att inventera vilka förare, kategorier och maskiner ni har – och stäm av mot checklistan ovan. Bygg sedan en rutin för utbildningsbevis, körtillstånd och egenkontroll i <a href="/sv/verktyg">vår verktygslåda</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du samlar all liftdokumentation per projekt i ByggExp.</p>

<p>Relaterat: <a href="/sv/blog/fallskydd-krav-bygg">Fallskydd – krav på bygget</a>, <a href="/sv/blog/byggstallning-regler-krav">Byggställning: regler och krav</a>, <a href="/sv/blog/personlig-skyddsutrustning-krav-bygg">Personlig skyddsutrustning – krav på bygget</a>.</p>
`;

const A_LIFTUTBILDNING_KRAV_BYGG: BlogPost = {
  _id: "code-"+"liftutbildning-krav-bygg",
  title: "Liftutbildning – krav på bygget 2026: liftkort, körtillstånd och AFS 2023:11", slug: "liftutbildning-krav-bygg", locale: "sv",
  excerpt: "Så uppfyller ditt byggföretag kraven på liftutbildning 2026 – skillnaden mellan liftkort och körtillstånd, lift-kategorierna och arbetsgivarens dokumentationsansvar enligt AFS 2023:11.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_LIFTUTBILDNING_KRAV_BYGG_HTML,
  seoTitle: "Liftutbildning krav bygg 2026 | ByggExp", seoDescription: "Liftkort, körtillstånd och AFS 2023:11 förklarat för byggföretag 2026 – kategorierna A1, A3, B1, B3, giltighet, fallskydd och sanktionsavgifter.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T08:24:00.000Z", createdAt: "2026-08-20T08:24:00.000Z", updatedAt: "2026-08-20T08:24:00.000Z",
};

const A_BULLER_VIBRATIONER_BYGG_GRANSVARDE_HTML = `
<p>Buller vibrationer bygg gränsvärde är inte bara en juridisk detalj – det är två av de vanligaste dolda arbetsmiljöriskerna på en byggarbetsplats, och de ger skador som märks först efter åratal: hörselnedsättning, tinnitus och vita fingrar (HAVS). Sedan 1 januari 2025 finns reglerna samlade i AFS 2023:10 "Risker i arbetsmiljön", inte längre i de gamla föreskrifterna AFS 2005:15 och 2005:16. Här går vi igenom exakta gränsvärden, mät- och kontrollkrav som gäller 2026.</p>

<p>Bygg in kontrollpunkterna i ditt systematiska arbetsmiljöarbete med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall &rarr;</a> så att buller- och vibrationsbedömningen blir en rutin, inte en efterhandskonstruktion.</p>

<h2>Vilka regler gäller 2026?</h2>
<p>Buller och vibrationer i arbetslivet regleras i AFS 2023:10 "Risker i arbetsmiljön": kapitel 2 tar upp buller och kapitel 3 vibrationer. De medicinska kontrollerna ligger i en egen föreskrift, AFS 2023:15 "Medicinska kontroller i arbetslivet", kapitel 3. De gamla AFS 2005:16 (buller) och AFS 2005:15 (vibrationer) är upphävda. Praktiskt innebär det att alla mallar, checklistor och rutiner som fortfarande hänvisar till 2005-numren måste uppdateras – både för att de pekar på fel författning och för att en granskare snabbt ser att dokumentationen inte är underhållen.</p>

<h2>Gränsvärden för buller: 80, 85 och 135 dB</h2>
<p>Buller regleras på två nivåer: <strong>insatsvärden</strong> som bedöms utan hänsyn till hörselskydd, och <strong>gränsvärden</strong> som bedöms med hörselskyddens dämpning inräknad. Det är en viktig skillnad – insatsvärdet mäter den faktiska ljudmiljön, gränsvärdet mäter vad örat faktiskt utsätts för.</p>
<ul>
<li><strong>Undre insatsvärde:</strong> LEX,8h = 80 dB. Arbetsgivaren ska informera och tillhandahålla hörselskydd (tillgång).</li>
<li><strong>Övre insatsvärde:</strong> LEX,8h = 85 dB och LpAFmax = 115 dB. Hörselskydd ska användas – obligatoriskt – och arbetstagaren är skyldig att bära dem. Krav på påbudsskylt "Hörselskydd måste användas" och att området om möjligt avgränsas.</li>
<li><strong>Toppvärde:</strong> LpCpeak = 135 dB (gäller både som insats- och gränsvärde).</li>
<li><strong>Gränsvärde:</strong> LEX,8h = 85 dB, LpAFmax = 115 dB, LpCpeak = 135 dB – med hörselskydd inräknat.</li>
</ul>
<p>Observera att det svenska gränsvärdet är 85 dB, inte EU-minimidirektivets 87 dB, och toppvärdet 135 dB, inte 140 dB. Det är ett vanligt faktafel. Vid övre insatsvärdet ska arbetsgivaren utreda orsaken och sänka exponeringen. Gränsvärdet 85 dB får aldrig överskridas – händer det ändå krävs omedelbara åtgärder, orsaksutredning och åtgärder mot upprepning.</p>

<h2>Gränsvärden för hand- och armvibrationer (och helkropp)</h2>
<p>Vibrationer bedöms som daglig exponering A(8) – dosen normerad till åtta timmar. Gränsvärdena i AFS 2023:10 Bilaga 4 är:</p>
<ul>
<li><strong>Hand- och armvibrationer:</strong> insatsvärde 2,5 m/s², gränsvärde 5,0 m/s².</li>
<li><strong>Helkroppsvibrationer:</strong> insatsvärde 0,5 m/s², gränsvärde 1,1 m/s².</li>
</ul>
<p>Tiden är avgörande. Ett verktyg som deklareras till cirka 5 m/s² passerar insatsvärdet 2,5 m/s² redan efter ungefär 2 timmars användning, och gränsvärdet 5,0 m/s² efter cirka 8 timmar. Ett dubbelt så högt vibrationsvärde fjärdedelar tiden till samma dos. På bygget handlar det om bilningshammare, tigersåg, vinkelslip och vibroplatta. Tänk också på att vibrationsskador kan uppstå redan under insatsvärdet på grund av individuell känslighet, och att kyla och fukt förvärrar hand-armvibrationsskador – vita fingrar (HAVS) drabbar oftare den som jobbar utomhus vintertid.</p>

<h2>Mätning och riskbedömning – så gör du rätt</h2>
<p>Exponeringen ska bedömas och vid behov mätas för att klarlägga om insats- eller gränsvärdena nås. Börja med en bedömning; mät när du är osäker eller nära en nivå. Standarderna att luta sig mot är:</p>
<ul>
<li>Buller: SS-EN ISO 9612.</li>
<li>Hand- och armvibrationer: SS-EN ISO 5349-1.</li>
<li>Helkroppsvibrationer: SS-ISO 2631-1.</li>
</ul>
<p>Vibrationsexponering får uppskattas utifrån tillverkarens deklarerade vibrationsvärden, men de är typiskt lägre än den faktiska exponeringen – slitna verktyg, hårt underlag och fel teknik driver upp värdet. Ligger du nära insatsvärdet bör du mäta. Riskbedömningen ska särskilt beakta samverkanseffekter: buller tillsammans med ototoxiska ämnen (vissa lösningsmedel) och buller tillsammans med vibrationer förstärker skaderisken. Dokumentera bedömning, mätvärden och slutsatser i det systematiska arbetsmiljöarbetet.</p>

<h2>Medicinska kontroller och hörselundersökning</h2>
<p>Hörselundersökning ska <strong>erbjudas</strong> arbetstagare som exponeras för ljud lika med eller över övre insatsvärdet 85 dB, och även vid undre insatsvärdet 80 dB om riskbedömningen visar risk för hörselskada. Undersökningen görs av läkare eller kvalificerad person på läkares ansvar, och intervallet anpassas efter exponeringen.</p>
<p>För vibrationer är medicinsk kontroll <strong>obligatorisk att anordna</strong> när exponeringen överstiger insatsvärdet för hand- och armvibrationer 2,5 m/s², eller vid misstanke om ohälsa. Enligt AFS 2023:15 kap. 3 ska den genomföras:</p>
<ol>
<li>Innan arbetstagaren börjar arbetet.</li>
<li>Återkommande med högst 3 års mellanrum.</li>
<li>Inom 1 månad efter att en ny eller förvärrad vibrationsskada blivit känd.</li>
</ol>
<p>Glöm inte handintensivt arbete – repetitivt hand- och fingerkraftsarbete som armering, plattsättning och arbete med spikpistol. Det har egna krav på medicinsk kontroll i AFS 2023:15: inom 3 år efter start, därefter högst vart 3:e år, och inom 1 månad vid tecken på besvär. Det gäller även när den rena vibrationsexponeringen är låg.</p>

<h2>Åtgärdstrappan: sänk exponeringen vid källan</h2>
<p>Både buller och vibrationer följer åtgärdstrappan – källan före skyddet. Prioritera i denna ordning:</p>
<ul>
<li>Eliminera momentet eller tysta/dämpa vid källan (annan metod, förborrning, kapa på verkstad).</li>
<li>Välj lågvibrerande och tystare maskiner – jämför deklarerade värden vid inköp.</li>
<li>Tekniska åtgärder: dämpade handtag, vibrationsdämpade säten på maskiner, underhåll och skarpa verktyg.</li>
<li>Organisatoriska åtgärder: rotera arbetsuppgifter, planera in pauser, begränsa sammanhängande exponeringstid.</li>
<li>Utbildning i teknik och risker.</li>
</ul>
<p>Hörselskydd och andra personliga skydd är sista utvägen, inte första åtgärden – de skyddar bäraren men löser inte grundproblemet.</p>

<h2>Checklista för arbetsgivaren</h2>
<ul>
<li>Inventera verktyg och notera deklarerade vibrationsvärden.</li>
<li>Beräkna A(8) för de mest exponerade momenten.</li>
<li>Mät buller vid tvekan enligt SS-EN ISO 9612.</li>
<li>Sätt upp påbudsskylt och avgränsa vid 85 dB.</li>
<li>Boka hörsel- och vibrationskontroller för dem som når insatsvärdena.</li>
<li>Dokumentera i det systematiska arbetsmiljöarbetet.</li>
<li>Följ upp och upprepa – vibrationskontroller minst vart 3:e år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte en bullermätning eller en läkarundersökning, men det håller ihop dokumentationen som visar att du gjort rätt. I <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> lägger du in buller- och vibrationsbedömningen som återkommande kontrollpunkter, kopplar dem till rätt verktyg och moment och sparar underlaget så att det finns tillgängligt vid en granskning. Fler stöd för arbetsmiljö och kalkyl hittar du bland <a href="/sv/verktyg">våra gratis verktyg</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Är gränsvärdet för buller 85 eller 87 dB?</h3>
<p>Det svenska gränsvärdet är LEX,8h = 85 dB, bedömt med hörselskyddens dämpning inräknad. EU:s minimidirektiv anger 87 dB, men Sverige har en strängare nivå. Toppvärdet är LpCpeak = 135 dB, inte 140 dB.</p>
<h3>När måste vi ordna medicinsk kontroll för vibrationer?</h3>
<p>När den dagliga exponeringen A(8) överstiger insatsvärdet 2,5 m/s² för hand- och armvibrationer, eller vid misstanke om skada. Kontrollen görs innan arbetet börjar, sedan med högst 3 års mellanrum, och inom 1 månad efter att en ny eller förvärrad vibrationsskada blivit känd.</p>
<h3>Räcker tillverkarens deklarerade vibrationsvärden?</h3>
<p>De får användas för att uppskatta exponeringen, men de underskattar ofta den verkliga nivån eftersom slitage, underlag och teknik påverkar. Ligger du nära insats- eller gränsvärdet bör du komplettera med mätning enligt SS-EN ISO 5349-1.</p>
<h3>Gäller fortfarande AFS 2005:15 och 2005:16?</h3>
<p>Nej. Sedan 1 januari 2025 är de upphävda och ersatta av AFS 2023:10 "Risker i arbetsmiljön". Uppdatera alla rutiner och mallar som fortfarande hänvisar till de gamla numren.</p>

<h2>Kom igång</h2>
<p>Lägg buller- och vibrationskontrollen på plats innan nästa projekt drar igång. Bygg in kontrollpunkterna med <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> och utforska övriga <a href="/sv/verktyg">verktyg</a>. Vill du se hur det fungerar i praktiken, boka en <a href="/sv/contact">demo</a> så visar vi hur du håller ihop dokumentationen.</p>

<p>Relaterat: <a href="/sv/blog/kvartsdamm-regler-bygg">Kvartsdamm – regler på bygget</a>, <a href="/sv/blog/riskbedomning-byggarbetsplats-mall">Riskbedömning på byggarbetsplats (mall)</a>, <a href="/sv/blog/personlig-skyddsutrustning-krav-bygg">Personlig skyddsutrustning – krav på bygget</a>.</p>
`;

const A_BULLER_VIBRATIONER_BYGG_GRANSVARDE: BlogPost = {
  _id: "code-"+"buller-vibrationer-bygg-gransvarde",
  title: "Buller och vibrationer på bygget: gränsvärden 2026, mätning och medicinska kontroller", slug: "buller-vibrationer-bygg-gransvarde", locale: "sv",
  excerpt: "Så tolkar du buller- och vibrationsgränsvärdena i AFS 2023:10, mäter rätt och håller koll på hörsel- och vibrationskontrollerna på bygget 2026.", tag: "Arbetsmiljö",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_BULLER_VIBRATIONER_BYGG_GRANSVARDE_HTML,
  seoTitle: "Buller & vibrationer bygg: gränsvärde | ByggExp", seoDescription: "Gränsvärden för buller och hand-armvibrationer på bygget enligt AFS 2023:10 – 80, 85 och 135 dB, 2,5/5,0 m/s², mätning och medicinska kontroller 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T08:27:00.000Z", createdAt: "2026-08-20T08:27:00.000Z", updatedAt: "2026-08-20T08:27:00.000Z",
};

export const ARBETSMILJO_ARTICLES: BlogPost[] = [
  AMP,
  HETA_ARBETEN,
  ARBMILJO,
  BASPBASU,
  A_KVARTSDAMM_REGLER_BYGG,
  A_BYGGSTALLNING_REGLER_KRAV,
  A_ARBETSMILJOVERKET_NYA_REGLER_2026_BYGG,
  A_NYA_ASBESTREGLER_2026,
  A_FALLSKYDD_KRAV_BYGG,
  A_KMA_PLAN_MALL,
  A_NYA_GRANSVARDEN_2026_DIISOCYANATER,
  A_SKYDDSROND_BYGG_CHECKLISTA,
  A_RISKBEDOMNING_BYGGARBETSPLATS_MALL,
  A_SYSTEMATISKT_ARBETSMILJOARBETE_LITET_BYGGFORETAG,
  A_APD_PLAN_ARBETSPLATSDISPOSITION_BYGG,
  A_ARBETSBEREDNING_MALL_BYGG,
  A_PERSONLIG_SKYDDSUTRUSTNING_KRAV_BYGG,
  A_TILLBUD_ARBETSSKADA_ANMALAN_BYGG,
  A_ARBETSMILJOVERKET_INSPEKTION_BYGG_2026,
  A_ENSAMARBETE_BYGG_REGLER,
  A_MASKINFORARBEVIS_HJULLASTARE_BYGG,
  A_LIFTUTBILDNING_KRAV_BYGG,
  A_BULLER_VIBRATIONER_BYGG_GRANSVARDE,
];
