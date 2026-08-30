import type { BlogPost } from '../../types/blog';
import { SITE_URL } from './site-url';

const BYGGDAGBOK_HTML = `
<p>En byggdagbok är ett av de enklaste sätten att skydda sig när något går snett i ett projekt. Ändå förs den ofta på lösa lappar eller inte alls. Här går vi igenom vad en byggdagbok är, vad den ska innehålla, vad AB 04 säger – och hur du för den på några minuter om dagen.</p>
<figure class="article-diagram"><img src="/landing/diagrams/byggdagbok.webp" alt="Diagram: byggdagbok – datum och väder, personal, utfört arbete, leveranser, ÄTA och avvikelser" width="720" height="380" loading="lazy"><figcaption>För in datum, väder, personal, utfört arbete, leveranser och ÄTA varje dag – dagboken blir ditt bevis vid en tvist.</figcaption></figure>

<p><a href="/sv/verktyg/byggdagbok-mall">Ladda ner en gratis byggdagbok-mall (PDF) →</a></p>

<h2>Vad är en byggdagbok?</h2>
<p>En byggdagbok är en löpande dagbok där du dokumenterar &quot;omständigheter av betydelse&quot; på arbetsplatsen – dag för dag. Syftet är att hålla beställaren informerad om hur arbetet fortskrider och att skapa ett tidsstämplat underlag om det senare uppstår diskussioner om tid, ÄTA-arbeten, hinder eller kostnader. Dagboken är ofta det enda samlade beviset på vad som faktiskt hände på bygget, och när.</p>

<h2>Vad säger lagen och avtalen?</h2>
<p>Det finns ingen generell lag som tvingar alla att föra byggdagbok. Kravet följer i stället av standardavtalen:</p>
<ul>
<li>I <strong>AB 04</strong> och <strong>ABT 06</strong> (entreprenader där beställaren är ett företag) framgår av <strong>kap 3 § 13</strong> att entreprenören ska föra dagbok.</li>
<li>I standardavtalen för konsumententreprenader – <strong>ABS 18</strong> och <strong>Hantverkarformuläret 17</strong> – finns inget motsvarande krav. Där behöver dagbok bara föras om beställaren och entreprenören avtalat om det.</li>
</ul>
<p>Vill du veta mer i detalj regleras dagbokens innehåll även i <strong>AMA AF under kod AFC.37</strong>, som räknar upp vad den bör omfatta. Oavsett om det är ett formellt krav eller inte är en förd dagbok nästan alltid till entreprenörens fördel om en tvist uppstår.</p>

<h2>Vad ska en byggdagbok innehålla?</h2>
<p>Kärnan är alltid <strong>utfört arbete</strong>. Utöver det förs dagboken &quot;i tillämpliga delar&quot; med de uppgifter som har betydelse för projektet:</p>
<ul>
<li><strong>Datum</strong> och vilket projekt/arbetsplats noteringen gäller</li>
<li><strong>Väder och temperatur</strong> – viktigt vid gjutning, målning och andra temperaturkänsliga moment</li>
<li><strong>Bemanning</strong> – antal personer och vilka yrkesgrupper som varit på plats</li>
<li><strong>Utfört arbete</strong> – vad som gjorts under dagen</li>
<li><strong>Material och leveranser</strong> – vad som levererats eller saknats</li>
<li><strong>Utförda kontroller</strong> och egenkontroller</li>
<li><strong>ÄTA-arbeten</strong> och beställarens direktiv</li>
<li><strong>Avvikande förutsättningar, hinder och störningar</strong> som påverkat tidplanen</li>
<li><strong>Besök</strong> på arbetsplatsen (beställare, besiktningsman, myndighet)</li>
<li><strong>Olycksfall och tillbud</strong></li>
<li><strong>Foton</strong> som styrker läget på plats</li>
</ul>
<p>Du behöver inte fylla i allt varje dag – men det som är av betydelse för just den dagen ska med.</p>

<h2>Exempel: en ifylld byggdagbok</h2>
<p>Så här kan en tydlig notering se ut för en dag – kort, men med rätt saker:</p>
<ul>
<li><strong>Datum:</strong> 2026-05-14 · Projekt: Nybyggnad villa, Bäckvägen 12</li>
<li><strong>Väder:</strong> Molnigt, 9 °C, uppehåll</li>
<li><strong>Bemanning:</strong> 3 snickare + 1 lärling (kl 07–16)</li>
<li><strong>Utfört arbete:</strong> Rest ytterväggar plan 2, monterat takstolar sektion A–C</li>
<li><strong>Leveranser:</strong> Takstolar (28 st) kl 08:30 – 2 st skadade, reklamerade</li>
<li><strong>Hinder:</strong> Kranbil försenad 2 h → takmontage flyttat till eftermiddag</li>
<li><strong>ÄTA:</strong> Beställaren beställde extra eluttag i garage (ÄTA nr 4)</li>
<li><strong>Kontroller:</strong> Egenkontroll infästning takstolar godkänd</li>
<li><strong>Foton:</strong> 4 bilder på monterade takstolar</li>
</ul>
<p>Poängen är inte att skriva långt – utan att skriva rätt. En utomstående ska kunna förstå dagen i efterhand.</p>

<h2>Vanliga misstag som gör dagboken svag</h2>
<ul>
<li><strong>Skriva i efterhand.</strong> En dagbok som förs veckor senare väger lätt vid en tvist – för den löpande, samma dag.</li>
<li><strong>För vaga noteringar.</strong> &quot;Jobbat på taket&quot; säger inget. Skriv vad, var och hur mycket.</li>
<li><strong>Glömma hinder och ÄTA.</strong> Det är förseningar, störningar och ändringar som kostar pengar – de måste med.</li>
<li><strong>Lösa lappar.</strong> De försvinner. Håll allt samlat, tidsstämplat och kopplat till projektet.</li>
<li><strong>Inga foton.</strong> En bild styrker läget bättre än en mening.</li>
</ul>

<h2>Så för du byggdagbok i ByggExp</h2>
<p>I ByggExp för du dagboken direkt i mobilen, kopplad till rätt projekt, så att inget skrivs av på lappar i efterhand:</p>
<ol>
<li>Öppna projektet och lägg till en ny dagboksnotering för dagens datum.</li>
<li>Fyll i väder och temperatur, bemanning och antal personer på plats.</li>
<li>Beskriv utfört arbete, eventuella avvikelser samt material och leveranser.</li>
<li>Lägg till foton från arbetsplatsen direkt i noteringen.</li>
<li>Allt sparas tidsstämplat i projektet – hela teamet ser samma underlag och du kan exportera det när det behövs.</li>
</ol>
<p>Vill du börja på papper eller Excel först? <a href="/sv/verktyg/byggdagbok-mall">Ladda ner vår gratis byggdagbok-mall</a> och fyll i den online – du får en färdig PDF att spara eller skriva ut.</p>

<h2>Vanliga frågor</h2>
<h3>Är byggdagbok ett lagkrav?</h3>
<p>Nej, det finns ingen generell lag. Men i AB 04 och ABT 06 (kap 3 § 13) ska entreprenören föra dagbok. Vid konsumententreprenader (ABS 18, Hantverkarformuläret 17) krävs det bara om parterna avtalat om det.</p>
<h3>Vad är skillnaden mellan byggdagbok och egenkontroll?</h3>
<p>Byggdagboken beskriver vad som hände på arbetsplatsen dag för dag. Egenkontrollen dokumenterar att specifika moment utförts och kontrollerats enligt krav. De kompletterar varandra – många för båda i samma system.</p>
<h3>Hur länge ska en byggdagbok sparas?</h3>
<p>Spara dagboken så länge det kan uppstå ansvars- eller garantifrågor i projektet. Eftersom dagboken kan bli avgörande vid en tvist är rekommendationen att spara den väl efter slutbesiktning.</p>
<h3>Vem ska föra byggdagboken?</h3>
<p>Normalt entreprenören, ofta genom platschef eller arbetsledare. Det viktiga är att den förs löpande och samlat – inte i efterhand.</p>

<h2>Kom igång</h2>
<p>Sluta jaga uppgifter i efterhand. För byggdagbok direkt på plats, koppla den till projektet och ha allt samlat när det gäller. <a href="/sv/verktyg/byggdagbok-mall">Ladda ner gratis byggdagbok-mall (PDF)</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterade mallar: <a href="/sv/verktyg/tidrapport-mall">Tidrapport-mall</a> · <a href="/sv/verktyg/egenkontroll-mall">Egenkontroll-mall</a></p>
`.trim();

const BYGGDAGBOK: BlogPost = {
  _id: 'code-byggdagbok',
  title: 'Byggdagbok – vad den ska innehålla och hur du för den rätt',
  slug: 'byggdagbok',
  locale: 'sv',
  excerpt:
    'Vad en byggdagbok ska innehålla, vad AB 04 kräver och hur du för den utan krångel – plus en gratis mall att ladda ner.',
  tag: 'Byggdagbok',
  coverImageUrl: '/landing/verktyg/byggdagbok-preview.webp',
  contentHtml: BYGGDAGBOK_HTML,
  seoTitle: 'Byggdagbok – krav, innehåll och gratis mall | ByggExp',
  seoDescription:
    'Vad är en byggdagbok, vad säger AB 04 och vad ska den innehålla? Ladda ner en gratis byggdagbok-mall (PDF) och för dagbok enkelt i ByggExp.',
  seoImageUrl: `${SITE_URL}/landing/verktyg/byggdagbok-preview.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T09:00:00.000Z',
  createdAt: '2026-08-12T09:00:00.000Z',
  updatedAt: '2026-08-12T09:00:00.000Z',
};

const EGENKONTROLL_HTML = `
<p>Egenkontroll är det som styrker att jobbet är gjort rätt – och det som räddar dig när någon i efterhand ifrågasätter kvaliteten. Men ordet betyder faktiskt två olika saker, och det är här många går vilse. Här reder vi ut vad en egenkontroll är, vad den ska innehålla, hur den hänger ihop med KMA – och hur du gör den utan pappersstrul.</p>
<figure class="article-diagram"><img src="/landing/diagrams/egenkontroll-cykel.webp" alt="Diagram: egenkontrollens cykel – planera, kontrollera, dokumentera, åtgärda avvikelse" width="720" height="380" loading="lazy"><figcaption>Egenkontrollen är en cykel: planera kontrollpunkterna, kontrollera, dokumentera med signatur och datum, åtgärda avvikelser.</figcaption></figure>

<p><a href="/sv/verktyg/egenkontroll-mall">Skapa en egenkontroll med AI för ditt moment – eller ladda ner en gratis mall (PDF) →</a></p>

<h2>Vad är en egenkontroll?</h2>
<p>En egenkontroll är din egen dokumenterade kontroll av att arbetet uppfyller kraven – ritningar, Boverkets byggregler (BBR) och gällande branschregler. Den ska innehålla tillräckligt för att någon annan ska kunna följa <em>vad</em> som kontrollerades, <em>mot vilket krav</em> och <em>med vilket resultat</em>. Egenkontrollen är ofta det enda beviset på att ett dolt moment – till exempel tätskikt eller infästning – faktiskt utfördes korrekt.</p>

<h2>Två olika &quot;egenkontroll&quot; – blanda inte ihop dem</h2>
<p>Detta är den vanligaste förvirringen, och Boverket varnar själva för den:</p>
<ul>
<li><strong>Entreprenörens egenkontroll (avtalsrätt).</strong> Din kontroll av att det du bygger uppfyller kontraktshandlingar och regler. Det är den här du gör dagligen på bygget.</li>
<li><strong>Byggherrens egenkontroll enligt PBL (offentlig rätt).</strong> En del av <strong>kontrollplanen enligt plan- och bygglagen (PBL) 10 kap</strong>. Ansvaret ligger på byggherren, med stöd av en <strong>kontrollansvarig (KA)</strong>, och handlar om att styrka kraven mot samhället i bygglovsprocessen.</li>
</ul>
<p>Samma ord, olika syfte. I praktiken används ofta entreprenörens egenkontroller som den metod som anges i kontrollplanen för att styrka att kraven är uppfyllda.</p>

<h2>Vad ska en egenkontroll innehålla?</h2>
<p>En användbar egenkontroll har alltid dessa delar per kontrollpunkt:</p>
<ul>
<li><strong>Kontrollpunkt</strong> – vad som kontrolleras (t.ex. infästning, fall mot brunn, fuktkvot)</li>
<li><strong>Krav / mot vad</strong> – ritning, BBR, monteringsanvisning eller branschregel</li>
<li><strong>Kontrollmetod</strong> – mätning, okulär kontroll, protokoll</li>
<li><strong>Resultat</strong> – godkänd / ej godkänd (gärna med värde, t.ex. &quot;fuktkvot 8 %&quot;)</li>
<li><strong>Avvikelse och åtgärd</strong> – om något inte höll måttet, vad gjordes</li>
<li><strong>Datum och signatur</strong> – vem kontrollerade och när</li>
<li><strong>Foto</strong> – särskilt viktigt för moment som byggs in och inte syns sedan</li>
</ul>

<h2>Exempel: en ifylld egenkontroll</h2>
<p>Så här kan en rad i en egenkontroll se ut:</p>
<ul>
<li><strong>Kontrollpunkt:</strong> Tätskikt i våtrum, golv</li>
<li><strong>Krav:</strong> BBR + tillverkarens monteringsanvisning, GVK</li>
<li><strong>Metod:</strong> Okulär + kontroll av skikttjocklek och uppvik</li>
<li><strong>Resultat:</strong> Godkänd – uppvik 150 mm, inga blåsor</li>
<li><strong>Avvikelse:</strong> Ingen</li>
<li><strong>Datum / sign:</strong> 2026-05-14 / A. Nilsson</li>
<li><strong>Foto:</strong> 2 bilder på färdigt tätskikt före plattsättning</li>
</ul>

<h2>Egenkontroll och KMA</h2>
<p><strong>KMA</strong> står för <strong>Kvalitet, Miljö och Arbetsmiljö</strong>. Egenkontrollen är kvalitetsdelen i praktiken – det är så du visar att arbetet håller måttet. Skilj på nivåerna: en <strong>KMA-handbok</strong> beskriver hur företaget arbetar med KMA övergripande, medan en <strong>KMA-plan</strong> beskriver hur KMA hanteras i ett specifikt projekt. Egenkontroller, riskbedömningar och avvikelsehantering är verktygen som fyller planen med innehåll.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Kryssa &quot;godkänd&quot; utan krav.</strong> En bock utan referens till ritning eller BBR bevisar ingenting.</li>
<li><strong>Fylla i i efterhand.</strong> Egenkontroll som skrivs vid slutbesiktning tappar sitt värde – gör den när momentet utförs.</li>
<li><strong>Inga foton på dolda moment.</strong> Tätskikt, armering och infästningar byggs in – utan bild finns inget bevis.</li>
<li><strong>Blanda ihop med kontrollplanen enligt PBL.</strong> De hänger ihop men har olika ansvar och syfte.</li>
<li><strong>Samma mall till allt.</strong> Kontrollpunkterna ska matcha det aktuella momentet, inte en generisk lista.</li>
</ul>

<h2>Så gör du egenkontroll i ByggExp</h2>
<ol>
<li>Välj projekt och lägg till en egenkontroll för aktuellt moment.</li>
<li>Använd färdiga kontrollpunkter eller lägg till egna med krav och metod.</li>
<li>Markera resultat, notera eventuell avvikelse och åtgärd.</li>
<li>Lägg till foton direkt – särskilt på det som byggs in.</li>
<li>Signera och spara – allt ligger tidsstämplat i projektet och kan exporteras som underlag.</li>
</ol>
<p>Vill du börja enkelt? <a href="/sv/verktyg/egenkontroll-mall">Ladda ner vår gratis egenkontroll-mall</a> och fyll i den online – du får en färdig PDF.</p>

<h2>Egenkontroll per yrke – färdiga mallar</h2>
<p>Kontrollpunkterna skiljer sig mellan yrken. Välj en färdig mall som öppnar ifylld med rätt punkter för ditt moment:</p>
<ul>
<li><strong><a href="/sv/verktyg/egenkontroll-el-mall">Egenkontroll el</a></strong> – jordfelsbrytare, isolationsmätning (SS 436 40 00), märkning och skyddsledare.</li>
<li><strong><a href="/sv/verktyg/egenkontroll-bygg-mall">Egenkontroll bygg / stomme</a></strong> – måttkontroll mot ritning, infästningar, fuktkontroll och brandtätning (BBR).</li>
<li><strong><a href="/sv/verktyg/egenkontroll-vvs-mall">Egenkontroll VVS</a></strong> – täthetsprovning, avstängningsventiler, rörisolering och fall på avlopp.</li>
</ul>
<p>Behöver du planera själva momentet först? Se även <a href="/sv/verktyg/arbetsberedning-mall">arbetsberedning-mallen</a> och <a href="/sv/verktyg/riskbedomning-mall">riskbedömning-mallen</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Är egenkontroll ett lagkrav?</h3>
<p>För åtgärder som kräver en kontrollplan enligt PBL är egenkontroll normalt den metod som anges för att styrka kraven. I entreprenader regleras egenkontroll dessutom ofta i kontraktshandlingarna. Oavsett är den din bästa försäkring om kvaliteten ifrågasätts.</p>
<h3>Vad är skillnaden mellan egenkontroll och kontrollplan?</h3>
<p>Kontrollplanen enligt PBL är byggherrens övergripande plan för vilka kontroller som ska göras i projektet. Egenkontrollerna är de faktiska, dokumenterade kontrollerna som ofta utförs av entreprenören och som styrker punkterna i planen.</p>
<h3>Vem ska skriva egenkontrollen?</h3>
<p>Den som utför arbetet ansvarar för sin egenkontroll. På bygget är det oftast hantverkaren eller arbetsledaren för respektive moment.</p>
<h3>Vad är skillnaden mellan egenkontroll och KMA?</h3>
<p>KMA är helheten – kvalitet, miljö och arbetsmiljö. Egenkontrollen är ett av verktygen inom kvalitetsdelen, det du använder för att dokumentera att kraven är uppfyllda.</p>

<h2>Kom igång</h2>
<p>Gör egenkontrollen där arbetet sker, med foto och signatur, kopplad till projektet. <a href="/sv/verktyg/egenkontroll-mall">Ladda ner gratis egenkontroll-mall (PDF)</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterade mallar: <a href="/sv/verktyg/byggdagbok-mall">Byggdagbok-mall</a> · <a href="/sv/blog/byggdagbok">Guide: byggdagbok</a></p>
`.trim();

const EGENKONTROLL: BlogPost = {
  _id: 'code-egenkontroll',
  title: 'Egenkontroll i bygg – vad den ska innehålla, mall och exempel',
  slug: 'egenkontroll',
  locale: 'sv',
  excerpt:
    'Vad en egenkontroll ska innehålla, de två betydelserna av ordet, kopplingen till KMA och kontrollplan enligt PBL – plus ifyllt exempel och gratis mall.',
  tag: 'Egenkontroll',
  coverImageUrl: '/landing/verktyg/egenkontroll-preview.webp',
  contentHtml: EGENKONTROLL_HTML,
  seoTitle: 'Egenkontroll bygg – innehåll, mall och exempel | ByggExp',
  seoDescription:
    'Vad ska en egenkontroll innehålla? Skillnaden mot kontrollplan enligt PBL och KMA, ett ifyllt exempel och en gratis egenkontroll-mall (PDF).',
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T10:00:00.000Z',
  createdAt: '2026-08-12T10:00:00.000Z',
  updatedAt: '2026-08-12T10:00:00.000Z',
};

const TIDRAPPORTERING_HTML = `
<p>Tidrapportering känns som en administrativ börda – men det är faktiskt en av de mest lönsamma vanorna ett byggföretag kan ha. Rätt förd tid ger korrekt lön, säkrare fakturor, färre tvister och svaret på den viktigaste frågan av alla: hur stor andel av arbetstiden kan du egentligen fakturera? Här går vi igenom vad en tidrapport ska innehålla, skillnaden mot personalliggare, och hur du för tid utan pappersstrul.</p>

<p><a href="/sv/verktyg/tidrapport-mall">Ladda ner en gratis tidrapport-mall (PDF/Excel) →</a></p>

<h2>Varför tidrapportera?</h2>
<p>Tidrapporten är underlag för flera saker på en gång:</p>
<ul>
<li><strong>Lön</strong> – rätt timmar, OB, övertid och mertid till rätt person.</li>
<li><strong>Fakturering</strong> – vid löpande räkning är tiden det du tar betalt för; oregistrerad tid är förlorad intäkt.</li>
<li><strong>Debiteringsgrad</strong> – hur stor andel av tiden som faktiskt gick att fakturera. Nyckeltalet som avgör om ditt timpris håller (se <a href="/sv/blog/timpris-hantverkare">guiden om timpris</a>).</li>
<li><strong>Projektuppföljning</strong> – lade ni fler timmar än ni tog betalt för? Då blödde projektet.</li>
</ul>

<h2>Vad en tidrapport ska innehålla</h2>
<ul>
<li><strong>Datum</strong> och vem tiden gäller</li>
<li><strong>Projekt/arbetsplats</strong> – gärna även moment eller kostnadsställe</li>
<li><strong>Start- och sluttid</strong> eller antal timmar</li>
<li><strong>Rast</strong> som dras av</li>
<li><strong>OB, övertid och mertid</strong> noterat separat så lönen blir rätt</li>
<li><strong>Restid och ställtid</strong> – även om den inte debiteras påverkar den debiteringsgraden</li>
</ul>
<p>Registrera gärna varje pass för sig när samma person jobbar på flera projekt eller moment samma dag.</p>

<h2>Tidrapport vs personalliggare – inte samma sak</h2>
<p>Många blandar ihop dem, men de har olika syften:</p>
<ul>
<li><strong>Tidrapport</strong> är ditt <em>interna</em> underlag för lön och fakturering. Formen bestämmer du själv.</li>
<li><strong>Personalliggare</strong> är ett <em>lagkrav</em> från Skatteverket på de flesta byggarbetsplatser: en löpande förteckning över vilka som är på plats, kopplad till ID06. Den handlar om närvaro för Skatteverkets kontroll – inte om hur många timmar du fakturerar.</li>
</ul>
<p>Du behöver alltså oftast <strong>båda</strong>. Läs mer om <a href="/sv/blog/personalliggare">personalliggare</a> och <a href="/sv/blog/id06">ID06</a>.</p>

<h2>OB, övertid och mertid</h2>
<p>För att lönen ska bli rätt behöver tidrapporten skilja på vanlig tid och tillägg. OB (obekväm arbetstid), övertid (utöver ordinarie tid för heltid) och mertid (för deltidsanställda) styrs av kollektivavtal – notera dem separat direkt när tiden registreras, annars blir det gissningar vid lönekörningen.</p>

<h2>Så för du tid i ByggExp</h2>
<p>I ByggExp stämplar teamet tid direkt i mobilen, kopplat till rätt projekt – så att inget skrivs av på lappar i efterhand:</p>
<ol>
<li>Varje medarbetare startar och stoppar tid per projekt och moment.</li>
<li>OB, övertid och restid registreras med tiden – klart för lön.</li>
<li>Du ser nedlagd tid per projekt och din verkliga debiteringsgrad.</li>
<li>Tiden blir direkt underlag för fakturan, med ROT och moms uträknat.</li>
</ol>
<p>Vill du börja på papper eller i Excel? <a href="/sv/verktyg/tidrapport-mall">Ladda ner tidrapport-mallen</a> – den finns för dag, vecka och månad, med PDF- och Excel-export.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan tidrapport och personalliggare?</h3>
<p>Tidrapporten är ditt interna underlag för lön och fakturering och formen bestämmer du själv. Personalliggaren är ett lagkrav från Skatteverket – en närvaroförteckning kopplad till ID06 på byggarbetsplatsen. Du behöver oftast båda.</p>
<h3>Är tidrapportering ett lagkrav?</h3>
<p>Själva tidrapporten är inget uttryckligt lagkrav, men du behöver den för korrekt lön, fakturering och som underlag i bokföringen (sparas i sju år). Personalliggare är däremot lagkrav på de flesta byggarbetsplatser.</p>
<h3>Hur räknar jag ut debiteringsgraden?</h3>
<p>Dela de fakturerbara timmarna med de totalt arbetade. Registrerar du all tid – även restid och admin – ser du hur stor andel som faktiskt gick att debitera, vilket är avgörande för att sätta rätt timpris.</p>
<h3>Måste OB och övertid stå med?</h3>
<p>Ja, om de ska betalas rätt. Notera OB, övertid och mertid separat direkt vid registreringen så att lönen blir korrekt enligt kollektivavtalet.</p>

<h2>Kom igång</h2>
<p>Gör tidrapporteringen till en vana som betalar sig. <a href="/sv/verktyg/tidrapport-mall">Ladda ner en gratis tidrapport-mall</a>, eller <a href="/sv/contact">boka en demo av ByggExp</a> och stämpla tid direkt i mobilen – kopplat till projekt, lön och faktura.</p>

<p>Relaterat: <a href="/sv/blog/personalliggare">Personalliggare</a> · <a href="/sv/blog/id06">ID06</a> · <a href="/sv/blog/timpris-hantverkare">Timpris</a> · <a href="/sv/verktyg/tidrapport-mall">Tidrapport-mall</a></p>
`.trim();

const TIDRAPPORTERING: BlogPost = {
  _id: 'code-tidrapportering',
  title: 'Tidrapportering i byggföretag – så gör du rätt (och varför det lönar sig)',
  slug: 'tidrapportering',
  locale: 'sv',
  excerpt:
    'Vad en tidrapport ska innehålla, skillnaden mot personalliggare, OB/övertid och hur tiden ger dig debiteringsgraden – plus en gratis tidrapport-mall.',
  tag: 'Tidrapportering',
  coverImageUrl: '/landing/verktyg/tidrapport-preview.webp',
  contentHtml: TIDRAPPORTERING_HTML,
  seoTitle: 'Tidrapportering i byggföretag – guide & mall | ByggExp',
  seoDescription:
    'Vad ska en tidrapport innehålla, hur skiljer den sig från personalliggare och hur ger tiden dig debiteringsgraden? Guide för byggföretag + gratis tidrapport-mall.',
  seoImageUrl: `${SITE_URL}/landing/verktyg/tidrapport-preview.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-17T12:00:00.000Z',
  createdAt: '2026-08-17T12:00:00.000Z',
  updatedAt: '2026-08-17T12:00:00.000Z',
};

const VATRUM_HTML = `
<p>Vid årsskiftet 2025/2026 uppdaterades tre samordnade regelverk för våtrum samtidigt: BBV 26:1 från Byggkeramikrådet, Säkra Våtrum 2026 från GVK och Säker Vatteninstallation 2026:1. Det är ingen revolution – men rörmått, falltoleranser och våtzoner har ändrats, och för dig som utför jobbet är detaljerna det som räknas. Vid en framtida vattenskada är det sällan själva plattsättningen som fäller entreprenören, utan avsaknaden av dokumentation som visar att arbetet gjorts enligt gällande branschregler. Här går vi igenom förändringarna ur utförarperspektiv och hur du säkrar bevisningen.</p>

<p>Bygg din dokumentation från start i <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall –&gt;</a> så att varje kritiskt moment fångas medan du fortfarande står på plats.</p>

<h2>Vad som faktiskt ändrats 2026 – kortversion för entreprenören</h2>
<ul>
<li>BBV 26:1 trädde i kraft <strong>1 januari 2026</strong> och ersätter BBV 21:1.</li>
<li>GVK:s Säkra Våtrum uppdaterades till <strong>2026-versionen</strong> samma datum. Inga stora omkastningar, men flera viktiga förtydliganden.</li>
<li>Reglerna är samordnade mellan BKR, GVK, Säker Vatten och MVK – de drar åt samma håll.</li>
<li>De nya reglerna gäller <strong>arbeten och installationer som påbörjas efter 2026-01-01</strong>.</li>
<li>Övergångsregel: projekt med <strong>bygglov beviljat före 1 januari 2026</strong> får tillämpa de äldre reglerna (BBV 21:1 / Säkra Våtrum 2021) även om arbetet startar efter årsskiftet.</li>
</ul>
<p>Första praktiska steget blir alltså administrativt: kontrollera bygglovsdatum innan du bestämmer vilken regelversion jobbet ska följa. Det avgör allt annat.</p>

<h2>Nya rörmått – 60 mm är den nya normen</h2>
<p>Den tydligaste hantverksmässiga förändringen sitter i rörgenomföringarna. Minsta avstånd mellan rörgenomföring och tak är nu <strong>60 mm</strong> – tidigare 100 mm. Samtliga mått mellan rör och vägg, golv respektive tak har harmoniserats till 60 mm.</p>
<ul>
<li>Rörgenomföringar med dimension <strong>≤ 32 mm</strong> ska ha minst <strong>60 mm centrumavstånd (c/c)</strong>.</li>
<li>Rör större än 32 mm ska ha minst 60 mm <em>mellan</em> rören.</li>
<li>Röret ska sticka ut <strong>cirka 60 mm</strong> från väggens tätskikt.</li>
<li>Rörgenomföringen ska monteras <strong>vinkelrätt (90°)</strong> mot väggen.</li>
</ul>
<p>Konsekvensen märks mest i trånga schakt och vid tät blandarplacering. Med 60 mm som genomgående mått får du något mer marginal mot taket, men c/c-kravet gör att slarvig utsättning av två närliggande genomföringar snabbt blir ett underkännande. Planera rör-i-rör, fördelarskåp och blandarhöjder tidigt i projekteringen istället för att lösa det på väggen – ett felplacerat rör efter att tätskiktet sitter är ett dyrt misstag.</p>

<h2>Nya falltoleranser för golvlutning</h2>
<p>Det tillåtna intervallet för golvlutning i duschplats eller motsvarande är nu <strong>minst 7 mm/m och max 30 mm/m</strong>. Tidigare låg övre gränsen på 20 mm/m. Rekommenderat riktvärde vid projektering är cirka <strong>15 mm/m</strong> i själva duschplatsen.</p>
<p>Höjningen av taket till 30 mm/m är gjord för att passa moderna produktlösningar – linjeavlopp och golvbrunnar som kräver mer fall för god avrinning. Det ger dig mer utrymme, men frihet innebär också ansvar: ett för brant fall blir besvärligt vid stora plattformat, som spjälkar eller vippar på en kraftig lutning, och kan skapa problem för tillgänglighet och rullstolsåtkomst. Sätt fallet medvetet mot brunnen, dokumentera det uppmätta värdet och håll dig inom 7–30 mm/m även när produkten skulle tillåta mer.</p>

<h2>Våtzon 1 och våtzon 2 – hela dusch- och badutrymmet ska tätskiktas</h2>
<p>Ett förtydligande som är lätt att missa: hela utrymmet med plats för bad eller dusch – <strong>både våtzon 1 och våtzon 2</strong> – ska bekläs med tätskikt på golv och väggar. Det står nu tydligare i både text och illustrationer.</p>
<ul>
<li><strong>Våtzon 1</strong> omfattar hela golvet, vägg inom cirka 1 meter från dusch- eller badplatsen samt väggen direkt ovanför badplatsen.</li>
<li><strong>Våtzon 2</strong> är övriga väggytor – och kräver alltså också tätskikt.</li>
</ul>
<p>Behöver du snabbt räkna ut hur mycket tätskikt och plattor som går åt över hela ytan tar du måtten i <a href="/sv/verktyg/kvadratmeter-kalkylator">vår kvadratmeter-kalkylator</a> innan du beställer material. BBV 26:1 innehåller dessutom uppdaterade krav på klinkerramen – kanten mot vägg och golvbrunn – presenterade i ett tydligare format, samt förtydliganden om tätning vid genomföringar. Kontrollera de exakta produkt- och tätningskraven i den senaste utgåvan av BBV 26:1 innan du börjar. Gå igenom dina infästningar och genomföringar: allt som bryter tätskiktet ska tätas enligt anvisning.</p>

<h2>Så dokumenterar du utförandet – egenkontroll och kvalitetsdokument</h2>
<p>Egenkontroller kan idag göras direkt i en mobilapp och kvalitetsdokumentet signeras elektroniskt av ansvarig våtrumsledare, med namn på den behörige plattsättaren som utfört tätskiktsarbetet. Det är den här kedjan – rätt utförande plus spårbar dokumentation – som håller vid en skadereglering.</p>
<p>Kvalitetsdokumentet och våtrumsintyget bör innehålla:</p>
<ul>
<li>Intyg om att arbetet följer <strong>BBV 26:1 och Säkra Våtrum 2026</strong>.</li>
<li>Genomförda egenkontroller för <strong>tätskikt, golvlutning och rörgenomföringar</strong>.</li>
<li><strong>Fotodokumentation</strong> från kritiska moment – appliceringen av tätskikt, brunnsanslutning, rörgenomföringar och fall mot brunn.</li>
<li>En <strong>produkt- och materialförteckning</strong>: tätskiktssystem, golvbrunn och blandare.</li>
</ul>
<p>Poängen med foto är att det är svårt att rekonstruera i efterhand. Ett tätskikt syns inte när klinkern sitter uppe, så bilden tagen i rätt ögonblick är ofta ditt enda bevis på att momentet är korrekt utfört.</p>

<h2>Behörighet och ansvar – varför det lönar sig att göra rätt</h2>
<p>Att jobba i behörigt företag och följa branschreglerna är inte byråkrati för dess egen skull. Både beställare och försäkringsbolag utgår från branschreglerna när ansvar och ersättning ska bedömas efter en skada. Ett komplett kvalitetsdokument är det som avgör om skadan hanteras som ett produktfel eller landar på entreprenören. För en privatkund med ROT-jobb är intyget dessutom en konkret trygghet – ett kvitto på att våtrummet är gjort fackmässigt av ett behörigt företag. Kort sagt: rätt utförande och rätt dokumentation är samma affär som lägre risk.</p>

<h2>Checklista inför nästa våtrumsjobb 2026</h2>
<ol>
<li>Verifiera vilken regelversion som gäller mot <strong>bygglovsdatumet</strong>.</li>
<li>Uppdatera dina mallar för egenkontroll så de refererar BBV 26:1 och Säkra Våtrum 2026.</li>
<li>Kontrollera <strong>rörmått (60 mm, c/c 60 mm, 90°)</strong> redan vid projekteringen.</li>
<li>Sätt fallet inom <strong>7–30 mm/m</strong>, med riktvärde cirka 15 mm/m i duschen.</li>
<li>Säkerställ tätskikt över <strong>både våtzon 1 och 2</strong>, golv och vägg.</li>
<li>Fota löpande vid kritiska moment.</li>
<li>Signera kvalitetsdokumentet digitalt när jobbet är klart.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du egenkontrollen digitalt medan jobbet pågår: du bockar av tätskikt, golvlutning och rörgenomföringar, bifogar foton direkt från mobilen till rätt kontrollpunkt och samlar produkt- och materialförteckningen på ett ställe. När allt är ifyllt har du ett samlat underlag att bifoga kvalitetsdokumentet. ByggExp utfärdar inte det formella våtrumsintyget åt dig – det ansvaret ligger hos den behörige våtrumsledaren och plattsättaren – men verktyget ser till att ingen egenkontroll eller bild saknas när intyget ska skrivas.</p>

<h2>Vanliga frågor</h2>
<h3>När börjar de nya våtrumsreglerna 2026 att gälla?</h3>
<p>BBV 26:1 och Säkra Våtrum 2026 trädde i kraft 1 januari 2026 och gäller arbeten och installationer som påbörjas efter det datumet. De ersätter BBV 21:1 respektive Säkra Våtrum 2021.</p>
<h3>Måste jag följa BBV 26:1 om bygglovet är från 2025?</h3>
<p>Nej. Övergångsregeln innebär att projekt med bygglov beviljat före 1 januari 2026 får tillämpa de äldre reglerna, även om själva arbetet startar efter årsskiftet. Kontrollera bygglovsdatumet innan du väljer regelversion.</p>
<h3>Vad är det nya rörmåttet i Säkra Våtrum 2026?</h3>
<p>Minsta avstånd mellan rörgenomföring och tak är nu 60 mm istället för 100 mm. Alla mått mellan rör och vägg, golv och tak är 60 mm, rör ≤ 32 mm ska ha minst 60 mm centrumavstånd, och röret ska sticka ut cirka 60 mm ur tätskiktet och monteras vinkelrätt mot väggen.</p>
<h3>Vad ska dokumentationen av ett våtrumsjobb innehålla?</h3>
<p>Kvalitetsdokumentet bör innehålla intyg om att arbetet följer BBV 26:1 och Säkra Våtrum 2026, genomförda egenkontroller för tätskikt, golvlutning och rörgenomföringar, fotodokumentation från kritiska moment samt en produkt- och materialförteckning med tätskiktssystem, golvbrunn och blandare. Det signeras elektroniskt av ansvarig våtrumsledare.</p>

<h2>Kom igång</h2>
<p>Sätt upp dokumentationen innan spadtaget: börja i <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a> och räkna material med <a href="/sv/verktyg/kvadratmeter-kalkylator">kvadratmeter-kalkylatorn</a>. Vill du se hur egenkontroll, foton och kvalitetsdokument hänger ihop i praktiken? <a href="/sv/contact">Boka en demo</a> så visar vi flödet. Ladda även ner de fullständiga regelverken hos BKR, GVK och Säker Vatten – den här artikeln ersätter inte källtexterna.</p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a> och <a href="/sv/blog/byggdagbok">Byggdagbok – så för du den rätt</a>.</p>
`.trim();

const VATRUM: BlogPost = {
  _id: "code-nya-vatrumsregler-2026",
  title: "Nya våtrumsregler 2026: så påverkas ditt jobb av BBV 26:1 och GVK Säkra Våtrum",
  slug: "nya-vatrumsregler-2026",
  locale: "sv",
  excerpt: "Rörmått, falltoleranser och våtzoner ändrades vid årsskiftet – här är vad BBV 26:1 och Säkra Våtrum 2026 betyder för dig som utför våtrumsjobbet, och hur du dokumenterar rätt.",
  tag: "Regler",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp",
  contentHtml: VATRUM_HTML,
  seoTitle: "Nya våtrumsregler 2026 (BBV) | ByggExp",
  seoDescription: "BBV 26:1 och GVK Säkra Våtrum 2026: nya rörmått (60 mm), falltoleranser 7–30 mm/m och våtzoner. Så dokumenterar du utförandet med egenkontroll.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-18T09:30:00.000Z",
  createdAt: "2026-08-18T09:30:00.000Z",
  updatedAt: "2026-08-18T09:30:00.000Z",
};

const KONTRAVG_HTML = `
<p>Skatteverket gör oanmälda kontrollbesök på byggarbetsplatser. På några minuter jämför inspektören vilka som faktiskt arbetar på plats mot vad personalliggaren visar. Stämmer det inte – eller om liggaren inte ens finns tillgänglig – börjar avgifterna ticka direkt, per person. Det mesta av detta är fullt undvikbart. En digital liggare som alltid är uppdaterad och kan visas på sekunden gör skillnaden mellan en normal arbetsdag och en oväntad räkning på tiotusentals kronor. I den här artikeln går vi igenom exakt vad en miss kostar 2026 och hur du bygger bort risken.</p>

<p>Ett smidigt sätt att komma igång är att först få ordning på tidregistreringen med <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapport-mall -&gt;</a> och sedan gå över till en digital liggare som loggar in- och utcheckning i realtid.</p>

<h2>Vad är personalliggare i byggverksamhet – och vem ansvarar?</h2>
<p>Personalliggare i byggbranschen regleras av skatteförfarandelagen (2011:1244). Reglerna som infördes 2016 gäller i sak oförändrat för 2026. Kravet är att alla verksamma på arbetsplatsen ska vara dokumenterade i realtid, och att liggaren omedelbart kan visas för Skatteverket vid ett kontrollbesök.</p>
<p>Ansvaret är delat. <strong>Byggherren</strong> ska anmäla byggarbetsplatsen till Skatteverket innan arbetet påbörjas (7 kap. 2 a §) och tillhandahålla utrustning för den elektroniska liggaren. Det ansvaret kan genom skriftligt avtal föras över till en entreprenör som självständigt driver en avgränsad del av arbetsplatsen. Oavsett detta är varje arbetsgivare alltid skyldig att logga sin egen personal i realtid – även underentreprenörernas folk måste finnas i liggaren.</p>
<p>ID06 är den marknadsstandard som i praktiken används och som ofta krävs enligt Byggföretagens standardavtal. Men det är viktigt att förstå: det juridiska kravet står i skatteförfarandelagen, inte i ID06. Vilken godkänd elektronisk lösning som helst duger enligt lagen – ID06-kravet är avtalsmässigt, inte lagstadgat.</p>

<h2>När gäller kravet? Tröskeln på fyra prisbasbelopp</h2>
<p>Skyldigheten att föra personalliggare inträder först när den sammanlagda kostnaden för byggverksamheten på arbetsplatsen kan antas överstiga fyra prisbasbelopp. Prisbasbeloppet för 2026 är 59 200 kr, vilket ger en tröskel på <strong>4 × 59 200 = 236 800 kr</strong>. Under den nivån gäller inte kravet, och en privatperson som bygger utanför näringsverksamhet omfattas aldrig.</p>
<p>Notera att tröskeln flyttar sig varje år eftersom prisbasbeloppet räknas upp. Ett projekt som låg precis under gränsen ett år kan hamna över nästa. Räkna på hela projektet, inte på en enskild faktura – det är den totala byggkostnaden som avgör.</p>

<h2>Så mycket kostar en miss – kontrollavgifterna 2026</h2>
<p>Avgifterna framgår av 50 kap. 4 § skatteförfarandelagen. De är fasta belopp och adderas:</p>
<ul>
<li><strong>12 500 kr per kontrolltillfälle</strong> om personalliggaren inte förs, eller inte kan göras tillgänglig för Skatteverket i verksamhetslokalen eller på byggarbetsplatsen.</li>
<li><strong>2 500 kr för varje person</strong> som är verksam vid kontrollen men inte är dokumenterad i en tillgänglig personalliggare.</li>
<li><strong>25 000 kr</strong> om byggarbetsplatsen inte har anmälts till Skatteverket innan arbetet påbörjades (byggherrens anmälningsplikt).</li>
</ul>
<p>Ett konkret exempel: ett litet arbetslag på fyra personer arbetar på en plats där liggaren av misstag inte är tillgänglig när Skatteverket kommer. Grundavgiften blir 12 500 kr. Ovanpå det läggs 2 500 kr per odokumenterad person, alltså 4 × 2 500 = 10 000 kr. Totalt <strong>22 500 kr</strong> för ett enda besök. Var även platsen oanmäld tillkommer 25 000 kr – och notan landar på 47 500 kr. Per-person-avgiften gör att kostnaden skenar snabbt på en välbemannad plats.</p>

<h2>Upprepning inom ett år: när 12 500 blir 25 000</h2>
<p>Har Skatteverket redan tagit ut en kontrollavgift och en ny blir aktuell för en överträdelse inom ett år från det tidigare beslutet, höjs grundbeloppet från 12 500 kr till <strong>25 000 kr</strong> (50 kap. 4 § 2 st). Per-person-avgiften på 2 500 kr ligger kvar.</p>
<p>Samtidigt finns en rättelseregel i 50 kap. 6 §: när en kontrollavgift väl beslutats ska bristen åtgärdas inom skälig tid, och ingen ny avgift får tas ut för <em>samma</em> brist under den perioden. Men en ny, separat brist vid ett senare kontrolltillfälle utlöser den nu högre upprepningsavgiften. Två kontroller nära varandra kan därför bli betydligt dyrare än summan av två fristående missar.</p>

<h2>Den dolda kostnaden: avgiften är inte avdragsgill</h2>
<p>En kontrollavgift är en sanktionsavgift, och sanktionsavgifter är inte avdragsgilla enligt inkomstskattelagen (9 kap. 9 §). Det betyder att bruttobeloppet är den verkliga kostnaden – ingen skattelättnad mildrar smällen. En avgift på 22 500 kr är alltså 22 500 kr rakt av, inte en avdragsgill kostnad.</p>
<p>Lägg till de indirekta kostnaderna: avbrutet arbete under kontrollen, tid som går åt till att reda ut och överklaga, och en försämrad position vid upphandlingar där dokumenterad ordning på personalliggaren väger tungt. För en huvudentreprenör kan brister hos en underentreprenör dessutom bli ett problem för hela projektets rykte.</p>

<h2>Vanliga misstag som utlöser avgift</h2>
<ul>
<li>Personal checkar inte in och ut i realtid – de gör det i efterhand eller glömmer bort det.</li>
<li>Underentreprenörernas anställda saknas i liggaren, trots att alla verksamma ska registreras.</li>
<li>Pappersliggaren ligger på kontoret i stället för på arbetsplatsen, och kan inte visas vid besöket.</li>
<li>Tröskeln på fyra prisbasbelopp felbedöms så att kravet missas tills projektet redan passerat gränsen.</li>
<li>Byggarbetsplatsen har inte anmälts till Skatteverket innan arbetet startade.</li>
</ul>

<h2>Så undviker digital personalliggare avgiften</h2>
<p>En digital liggare tar bort de vanligaste orsakerna till avgift. In- och utcheckning sker i realtid direkt i mobilen, ofta med samma disciplin som ett ID06-kort ger. Lösningen fungerar även offline på platser med dålig täckning och synkar när uppkopplingen är tillbaka. Alla underentreprenörer samlas i en och samma liggare, så att ingen faller mellan stolarna.</p>
<p>Vid ett kontrollbesök kan liggaren visas direkt på Skatteverkets läsplatta eller mobil – ingen letande efter en pärm på fel plats. Och eftersom varje in- och utcheckning tidsstämplas finns en spårbar logg som styrker att liggaren förts korrekt. Det är precis den bevisning som gör skillnaden när inspektören står på plats.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp registrerar personalen sin arbetstid löpande, vilket ger dig ett tidsstämplat underlag för vilka som varit verksamma på varje projekt. Underlaget håller ordning på arbetslaget och gör det enkelt att sammanställa vem som arbetat var och när – grunden för både korrekt fakturering och för att kunna redogöra för verksamma personer. ByggExp ersätter inte i sig en godkänd elektronisk personalliggare enligt skatteförfarandelagen, men det ger dig strukturen och realtidsvanan som gör att liggaren faktiskt blir förd rätt. Vill du börja i det lilla kan du testa flödet med vår kostnadsfria tidrapport-mall och därifrån ta steget till löpande digital registrering.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket är kontrollavgiften för personalliggare 2026?</h3>
<p>12 500 kr per kontrolltillfälle om liggaren inte förs eller inte kan visas, plus 2 500 kr för varje verksam person som saknas i en tillgänglig liggare. Har platsen inte anmälts till Skatteverket tillkommer 25 000 kr. Vid upprepning inom ett år höjs grundbeloppet till 25 000 kr.</p>
<h3>När måste jag föra personalliggare?</h3>
<p>När den sammanlagda kostnaden för byggverksamheten på arbetsplatsen kan antas överstiga fyra prisbasbelopp. För 2026 motsvarar det 236 800 kr (4 × 59 200 kr). En privatperson som bygger utanför näringsverksamhet omfattas aldrig.</p>
<h3>Vem ansvarar – byggherren eller entreprenören?</h3>
<p>Byggherren ska anmäla arbetsplatsen och tillhandahålla utrustning för liggaren, men ansvaret kan skriftligen föras över till en entreprenör som självständigt driver en avgränsad del. Varje arbetsgivare är dock alltid skyldig att logga sin egen personal i realtid.</p>
<h3>Är kontrollavgiften avdragsgill?</h3>
<p>Nej. Kontrollavgiften är en sanktionsavgift och är inte avdragsgill enligt inkomstskattelagen 9 kap. 9 §. Bruttobeloppet är den faktiska kostnaden, utan skattelättnad.</p>

<h2>Kom igång</h2>
<p>Börja med att strama upp tidregistreringen med <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapport-mall -&gt;</a>, och utforska fler kostnadsfria hjälpmedel i <a href="/sv/verktyg">vår verktygslåda för hantverkare</a>. Vill du se hur löpande digital registrering fungerar i praktiken? <a href="/sv/contact">Boka en demo</a> så visar vi flödet från incheckning till färdigt underlag.</p>

<p>Relaterat: <a href="/sv/blog/personalliggare">Personalliggare i byggbranschen – kraven i korthet</a> och <a href="/sv/blog/id06">ID06 – vad det är och hur det hänger ihop med personalliggaren</a>.</p>
`.trim();

const KONTRAVG: BlogPost = {
  _id: "code-"+"kontrollavgift-personalliggare",
  title: "Kontrollavgift för personalliggare – vad en miss vid Skatteverkets kontroll faktiskt kostar (2026)",
  slug: "kontrollavgift-personalliggare",
  locale: "sv",
  excerpt: "Skatteverkets oanmälda kontrollbesök kan bli dyra – här är avgiftsnivåerna för 2026 och hur en alltid uppdaterad digital personalliggare stänger risken.",
  tag: "Regler",
  coverImageUrl: "/landing/verktyg/tidrapport-preview.webp",
  contentHtml: KONTRAVG_HTML,
  seoTitle: "Kontrollavgift personalliggare 2026 | ByggExp",
  seoDescription: "Vad kostar en miss vid Skatteverkets kontroll av personalliggaren? Se avgifterna 2026 – 12 500 kr, 2 500 kr/person, 25 000 kr – och hur du undviker dem.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/tidrapport-preview.webp`,
  canonicalUrl: "",
  noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T13:30:00.000Z", createdAt: "2026-08-18T13:30:00.000Z", updatedAt: "2026-08-18T13:30:00.000Z",
};

const A_BYGGMOTESPROTOKOLL_MALL_HTML = `
<p>Ett byggmötesprotokoll ser vid första anblick ut som en enkel sammanfattning av vad som sades på mötet. I praktiken är det något helt annat: enligt branschstandardavtalen AB 04 och ABT 06 är protokollet ett dokument som kan avgöra en framtida tvist. En anteckning om en beställd ÄTA eller ett anmält hinder som hamnar i protokollet uppfyller avtalets skriftlighetskrav – och det som inte protokollförs riskerar att aldrig ha hänt när diskussionen om betalning kommer. Söker du en <strong>byggmötesprotokoll mall</strong> som håller juridiskt behöver du därför förstå både strukturen och rutinerna runt den.</p>

<p>Den här guiden går igenom dagordning, mötesfrekvens och ansvar – och hur ni följer upp besluten efteråt. Vill du se hur projekt, uppgifter och etapper hänger ihop kan du utforska <a href="/sv/funktioner">våra funktioner för byggprojekt</a>.</p>

<h2>Vad är ett byggmöte – och skillnaden mot startmöte och projektmöte</h2>

<p>Ett byggmöte är ett återkommande möte under entreprenadtiden mellan beställare och en eller flera entreprenörer. Här behandlas ekonomi, förseningar mot tidsplanen, avvikelser i mark- och förhållanden, behov av ÄTA-arbeten och beställarens ställningstaganden. Det är projektets formella styrmöte.</p>

<p>Det ska inte förväxlas med <strong>projektmötet</strong>, som är ett internt möte mellan nyckelpersoner och ofta hålls veckovis för att driva det dagliga arbetet framåt. Innan de reguljära byggmötena drar igång hålls ett <strong>startmöte</strong> – en kick-off där organisation, rutiner och kontaktvägar sätts. I en totalentreprenad enligt ABT 06 tillkommer dessutom <strong>projekteringsmöten</strong> för att styra själva projekteringen.</p>

<p>Vilken avtalsform ni arbetar under påverkar mötesbilden. AB 04 gäller utförandeentreprenad, där beställaren står för handlingarna, medan ABT 06 gäller totalentreprenad, där entreprenören ansvarar för både projektering och utförande. Kapitel 3 (Organisation) i båda avtalen reglerar mötena, men det är branschstandard från Byggandets Kontraktskommitté – inte lag.</p>

<h2>Hur ofta bör ni hålla byggmöte?</h2>

<p>AB 04 och ABT 06 anger att möten ska hållas ”i den omfattning som erfordras”. Det finns alltså ingen lagstadgad eller avtalsfast frekvens – det är upp till parterna att bestämma vad projektet kräver.</p>

<p>I praktiken sätts frekvensen i de administrativa föreskrifterna (AF), som upprättas enligt AMA AF. Vanligast är byggmöte en gång per månad. Större och mer komplexa projekt håller tätare möten, ibland varannan vecka, medan lugnare skeden kan klara sig med glesare intervall.</p>

<p>För mindre hantverks- och byggföretag räcker ofta ett månadsvis byggmöte, kompletterat med korta interna avstämningar däremellan. Det viktiga är att intervallet är bestämt i förväg och att alla vet när nästa möte hålls – det är själva förutsättningen för att protokollen ska kunna justeras i tid.</p>

<h2>Vem ansvarar för protokollet?</h2>

<p>Enligt AB 04 och ABT 06 är det <strong>beställaren</strong> som ska föra protokollet. Beställaren ansvarar också för att protokollet skickas till entreprenören utan dröjsmål och i god tid före nästa möte, så att det hinner granskas.</p>

<p>Entreprenören ska <strong>justera</strong> protokollet – alltså granska och godkänna det. Om något är felaktigt eller ofullständigt antecknat måste entreprenören invända utan dröjsmål, och senast innan nästa möte. Uteblir invändningen står protokollanteckningen kvar som parternas gemensamma bild av vad som beslutats, och den kan användas som bevis i en senare tvist.</p>

<p>Den enkla men avgörande rutinen: börja varje byggmöte med att formellt godkänna föregående protokoll. Då tvingas eventuella oklarheter upp till ytan medan de fortfarande går att korrigera, i stället för att dyka upp som en obehaglig överraskning ett år senare.</p>

<h2>Dagordning – vad ska med i ett byggmötesprotokoll</h2>

<p>Ett tydligt protokoll ska innehålla mötesnummer och projektnamn, datum, tid och plats, samt vilka parter som närvarade – byggherre, entreprenör och projektledare. Numrera varje möte separat (BM1, BM2, BM3 …) så att det alltid går att hänvisa exakt till rätt protokoll. Använd samma dagordning varje gång, så att inget faller bort mellan mötena.</p>

<ol>
<li><strong>Formalia</strong> – mötesnummer, projekt, datum/tid/plats</li>
<li><strong>Närvaro</strong> – vilka parter och roller som deltar</li>
<li><strong>Godkännande av föregående protokoll</strong> – justering och eventuella invändningar</li>
<li><strong>Ekonomi</strong> – fakturering, betalningar, prognos mot budget</li>
<li><strong>Tidsplan</strong> – status, avvikelser och åtgärder</li>
<li><strong>ÄTA-arbeten</strong> – beställda, pågående och begärda ändringar och tillägg</li>
<li><strong>Hinder och förseningar</strong> – anmälda hinder och konsekvenser för tidplanen</li>
<li><strong>Arbetsmiljö och KMA</strong> – kvalitet, miljö och arbetsmiljöfrågor</li>
<li><strong>Kvalitet och besiktningar</strong> – egenkontroller, kommande besiktningar</li>
<li><strong>Nästa möte</strong> – datum, tid och öppna punkter att bevaka</li>
</ol>

<p>Varje punkt bör dokumenteras med ett tydligt beslut och en ansvarig person – inte bara ett konstaterande. Ett protokoll där det står ”ansvarig: entreprenören, klart: nästa möte” är värt betydligt mer än ett som bara noterar att en fråga ”diskuterades”.</p>

<h2>Protokollet som juridiskt bevis – skriftlighetskravet</h2>

<p>Både AB 04 och ABT 06 ställer krav på skriftlig form för flera typer av meddelanden mellan parterna. En anteckning i byggmötesprotokollet uppfyller det kravet. Det gäller bland annat beställning av ÄTA-arbeten (AB 04 kap 2 § 6) och underrättelse om hinder och förseningar.</p>

<p>Konsekvensen är konkret: om en ÄTA beställs muntligt på mötet men aldrig hamnar i protokollet, riskerar entreprenören att stå utan skriftligt underlag för sin ersättning. Samma sak med ett hinder som inte anmäls i tid – rätten till tidsförlängning kan gå förlorad. Därför ska varje ÄTA, hinder och förbehåll noteras i protokollet, och entreprenören ska kontrollera att de faktiskt kom med när protokollet justeras.</p>

<p>Ett välfört byggmötesprotokoll är alltså inte byråkrati utan er starkaste dokumentation den dag ekonomin ifrågasätts.</p>

<h2>Så följer ni upp mötesbesluten i ByggExp</h2>

<p>Ett protokoll är bara så bra som uppföljningen. I ByggExp skapar ni ett projekt och lägger in besluten från protokollet som Uppgifter (Tasks) med ansvarig person och påminnelser, så att inget vilar enbart på minnet mellan mötena. ÄTA-arbeten och deadlines kopplas till Mål och etapper, vilket gör det lätt att se på nästa byggmöte vad som är avklarat och vad som släpar. På så vis blir varje protokollpunkt en spårbar åtgärd i stället för en bortglömd notering. Behöver ni en startpunkt kan ni ladda ner vår <a href="/sv/verktyg/byggdagbok-mall">byggdagboksmall</a> och koppla den dagliga dokumentationen till mötesbesluten.</p>

<h2>Vanliga frågor</h2>

<h3>Är byggmötesprotokoll lagstadgat?</h3>
<p>Nej. Kravet kommer från branschstandardavtalen AB 04 och ABT 06, kapitel 3, inte från lag. Men om ni avtalat om AB 04 eller ABT 06 i entreprenaden är protokollföringen bindande mellan parterna, och protokollets bevisvärde är fullt reellt i en tvist.</p>

<h3>Hur ofta ska man hålla byggmöte?</h3>
<p>Avtalen säger ”i den omfattning som erfordras”, alltså ingen fast frekvens. I praktiken bestäms intervallet i de administrativa föreskrifterna och är vanligen en gång per månad. Större eller mer komplexa projekt håller tätare möten.</p>

<h3>Vem skriver byggmötesprotokollet?</h3>
<p>Beställaren för protokollet och skickar det i god tid före nästa möte. Entreprenören justerar det och måste invända utan dröjsmål om något är felaktigt antecknat, annars står anteckningen kvar som gemensam bild.</p>

<h3>Vad händer om en ÄTA inte protokollförs?</h3>
<p>Då saknas ofta det skriftliga underlag som avtalet kräver. Entreprenören riskerar att inte få ersättning för arbetet. Kontrollera därför alltid att beställda ÄTA och anmälda hinder finns med innan protokollet godkänns.</p>

<h2>Kom igång</h2>

<p>Sätt en fast dagordning, numrera protokollen och godkänn alltid föregående protokoll först på varje möte – då har ni ordning på både projektet och bevisningen. Ladda ner <a href="/sv/verktyg/byggdagbok-mall">byggdagboksmallen</a> och utforska <a href="/sv/funktioner">funktionerna i ByggExp</a> för att koppla mötesbesluten till uppgifter och etapper. Vill ni se det i ert eget projekt kan ni <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/byggdagbok">Byggdagbok – så dokumenterar ni rätt</a> och <a href="/sv/blog/egenkontroll">Egenkontroll i bygg – mall och rutiner</a>.</p>
`;

const A_BYGGMOTESPROTOKOLL_MALL: BlogPost = {
  _id: "code-"+"byggmotesprotokoll-mall",
  title: "Byggmötesprotokoll – mall, dagordning och ansvar", slug: "byggmotesprotokoll-mall", locale: "sv",
  excerpt: "Byggmötesprotokollet är mer än en anteckning – det är ett juridiskt dokument enligt AB 04 och ABT 06. Här är dagordning, ansvar och en färdig mallstruktur.", tag: "Projektledning",
  coverImageUrl: "/landing/features/tasks.webp", contentHtml: A_BYGGMOTESPROTOKOLL_MALL_HTML,
  seoTitle: "Byggmötesprotokoll mall | ByggExp", seoDescription: "Så skriver ni ett byggmötesprotokoll enligt AB 04 och ABT 06: dagordning, startmöte, hur ofta ni bör mötas och vem som ansvarar. Mall och rutiner.",
  seoImageUrl: `${SITE_URL}/landing/features/tasks.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:21:00.000Z", createdAt: "2026-08-18T18:21:00.000Z", updatedAt: "2026-08-18T18:21:00.000Z",
};

const A_GANTT_SCHEMA_MALL_BYGG_HTML = `
<p>Tidsplanen är den handling som avgör om entreprenaden går med vinst eller förlust. En vecka för sent kan kosta i förseningsvite, tvinga fram övertid och binda likviditet i ett projekt som skulle ha varit fakturerat. Ett Gantt-schema visar projektets aktiviteter som staplar på en tidslinje, med start, längd och inbördes ordning – ett verktyg för att se hur momenten hänger ihop och var det inte finns någon marginal kvar.</p>

<p>Vill du komma igång direkt planerar du hela projektet i etapper och uppgifter i <a href="/sv/funktioner">ByggExps funktioner för projektplanering -&gt;</a> i stället för i ett kalkylark som ingen på bygget håller uppdaterat.</p>

<h2>Vad är ett Gantt-schema och när behövs det?</h2>
<p>Ett Gantt-schema skiljer sig från en enkel att-göra-lista på en avgörande punkt: det visar tid och beroenden. En checklista säger <em>vad</em> som ska göras, men ett Gantt-schema säger <em>när</em> och i vilken ordning, och vad som händer med slutdatumet om ett moment glider. För minsta serviceuppdrag räcker en lista, men så fort flera yrkesgrupper ska samordnas på samma yta över flera veckor behövs en riktig tidsplan.</p>
<p>I standardavtalen AB 04 och ABT 06 är tidplanen dessutom en central kontraktshandling. Förseningsvite utgår inte automatiskt – det måste avtalas enligt AB 04 kap 5 § 3, och en vanlig branschnivå är omkring 1 % av kontraktssumman per påbörjad förseningsvecka. Saknas avtalat vite kan beställaren i stället kräva skadestånd. Tidsplanen är alltså inte bara ett internt planeringsdokument utan en handling du kan bli bunden av.</p>

<h2>Steg 1 – Bryt ner projektet i aktiviteter</h2>
<p>Börja med en nedbrytning av arbetet, en enkel WBS. Lista de moment som faktiskt utförs på bygget, till exempel rivning, schakt och grund, stomme, tak, tätt hus, installationer (el, VS, ventilation), ytskikt och slutbesiktning. Gruppera dem sedan i etapper eller mål i stället för en lång platt lista på trettio rader. En etappindelning gör schemat läsbart och gör det möjligt att följa upp en avgränsad del av projektet i taget.</p>

<h2>Steg 2 – Uppskatta tid och resurser per aktivitet</h2>
<p>Sätt varaktighet på varje aktivitet utifrån erfarenhetsdata: mängd gånger tidsåtgång per enhet, justerat för hur många man du faktiskt kan sätta in. Glöm inte de tider som inte är arbete men ändå styr kalendern – torktid för betong och avjämningsmassa, härdning innan ytskikt, och leveranstider på beställningsvaror som fönster, kök och specialbeslag. Det är ofta torktider och leveranser, inte själva hantverket, som blir flaskhalsen.</p>

<h2>Steg 3 – Lägg in beroenden mellan aktiviteter</h2>
<p>Nu kopplar du ihop aktiviteterna. Den vanligaste kopplingen är färdigställande-start (FS): betongplattan måste ha härdat innan reglarna reses. Ibland behövs start-start (SS), där två moment kan löpa parallellt med viss förskjutning. Var sparsam med hårda kopplingar – varje onödigt beroende gör schemat stelare än verkligheten och skapar falska förseningar. Koppla bara det som fysiskt måste ske i en viss ordning.</p>

<h2>Steg 4 – Identifiera den kritiska linjen</h2>
<p>Den kritiska linjen är den längsta sammanhängande kedjan av beroende aktiviteter – den som styr projektets slutdatum. En försening på den kritiska linjen skjuter hela projektet framåt, medan en aktivitet med slack kan glida utan att det märks på slutdatum. När du vet var den kritiska linjen går vet du också var du ska lägga din uppmärksamhet, var förseningar är dyrast och var det är värt att sätta in extra resurser. Lägg in realistiska buffertar där osäkerheten är störst, hellre än en enda stor slutmarginal som lätt slösas bort tidigt.</p>

<h2>Steg 5 – Lägg in milstolpar och lagkrav i schemat</h2>
<p>Ett byggschema ska inte bara innehålla arbetsmoment utan även kontrollpunkter och regulatoriska krav. Lägg in dem som milstolpar så att de inte glöms bort i produktionsstressen:</p>
<ul>
<li><strong>Arbetsmiljöplan och BAS-U på plats.</strong> Byggherren ska utse byggarbetsmiljösamordnare för både planering (BAS-P) och utförande (BAS-U) i praktiskt taget alla bygg- och anläggningsprojekt, och en arbetsmiljöplan ska vara framtagen innan byggarbetsplatsen etableras när riskfyllt arbete förekommer.</li>
<li><strong>Förhandsanmälan till Arbetsmiljöverket.</strong> Krävs när arbetet beräknas pågå längre än 30 arbetsdagar och mer än 20 personer sysselsätts samtidigt vid något tillfälle, eller om det totala antalet persondagar överstiger 500.</li>
<li><strong>Elektronisk personalliggare igång.</strong> Skyldigheten inträder när byggherrens sammanlagda kostnad för byggverksamheten förväntas överstiga fyra prisbasbelopp. Med 2026 års prisbasbelopp på 59 200 kr innebär det 236 800 kr. Byggherren ansvarar för att anmäla arbetsplatsen och tillhandahålla utrustning, medan varje näringsidkare för in sin egen personal.</li>
<li><strong>Tätt hus och besiktningar.</strong> Markera dem som milstolpar – de är naturliga avstämningspunkter både mot beställaren och internt.</li>
</ul>
<p>Att missa personalliggaren är dyrt: Skatteverkets kontrollavgift är 12 500 kr om liggare inte förs eller inte kan visas, plus 2 500 kr för varje person som är på plats men inte dokumenterad, och grundavgiften höjs till 25 000 kr vid upprepad förseelse inom ett år.</p>

<h2>Steg 6 – Följ upp med % klart och revidera löpande</h2>
<p>En tidsplan är en färskvara. Stäm av verkligt läge mot plan varje vecka och ange procent klart per aktivitet, så ser du tidigt om ett moment på den kritiska linjen börjar halka. Här kommer också ÄTA in i bilden: ändrings- och tilläggsarbeten ger entreprenören rätt till tidsförlängning enligt AB 04 kap 4. Den rätten är värd lite om du inte reviderar tidsplanen när ÄTA tillkommer – låt inte ursprungsschemat bli inaktuellt, för då tappar du både överblick och den dokumentation du behöver om vitesfrågan kommer upp.</p>

<h2>Excel-arket kontra ett riktigt planeringsverktyg</h2>
<p>Ett löst Excel-schema har två svagheter. Det blir snabbt inaktuellt eftersom uppdateringen ligger på en person, och det är osynligt för teamet ute på bygget som jobbar mot en utskrift från förra månaden. En genomtänkt kritisk linje är värdelös om ingen ser den aktuella versionen. Poängen med tidsplanen är att den är levande och delad – inte att den ser prydlig ut vid projektstart.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp planerar du projektet i etapper och mål med underliggande uppgifter, i stället för i ett fristående kalkylark. Varje uppgift har ansvarig och procent klart, och statusen är synlig för alla i projektet i realtid – inte inlåst i en fil på en dator. När du stämmer av veckovis uppdaterar du procent klart direkt där arbetet planeras, så att planen speglar verkligt läge. Vi lovar inte att verktyget räknar den kritiska linjen åt dig automatiskt, men det gör nedbrytningen i etapper, uppföljningen och synligheten till en naturlig del av hur projektet drivs – och det är där de flesta Excel-scheman fallerar. Underlaget kan du också knyta ihop med din <a href="/sv/verktyg/offert-mall">offert</a> så att kalkyl och tidsplan bygger på samma aktiviteter.</p>
<p><a href="/sv/verktyg/gantt-schema-mall">Gör en tidsplan/Gantt-schema för bygget med vår gratis mall (PDF & Excel) -&gt;</a></p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan ett Gantt-schema och en tidsplan?</h3>
<p>Tidsplan är det övergripande begreppet för hur projektet fördelas över tid. Gantt-schemat är ett visuellt sätt att visa tidsplanen, där aktiviteterna ritas som staplar på en tidslinje med sina beroenden. I praktiken använder många orden synonymt.</p>

<h3>Är tidsplanen bindande enligt AB 04?</h3>
<p>Tidplanen är en central handling i AB 04 och ABT 06. Förseningsvite utgår dock inte automatiskt utan måste avtalas (AB 04 kap 5 § 3); en vanlig nivå är cirka 1 % av kontraktssumman per påbörjad förseningsvecka. Utan avtalat vite kan beställaren i stället kräva skadestånd.</p>

<h3>Vad är den kritiska linjen?</h3>
<p>Det är den längsta kedjan av beroende aktiviteter i projektet, den som styr slutdatumet. Blir en aktivitet på den kritiska linjen försenad förskjuts hela projektet, medan aktiviteter med slack kan glida utan att slutdatumet påverkas.</p>

<h3>Hur ofta ska tidsplanen uppdateras?</h3>
<p>Stäm av minst en gång i veckan och revidera vid varje ÄTA som påverkar tid. En plan som inte uppdateras tappar snabbt sitt värde både som styrverktyg och som underlag i en eventuell vitesdiskussion.</p>

<h2>Kom igång</h2>
<p>Bryt ner ditt nästa projekt i etapper och uppgifter i <a href="/sv/funktioner">ByggExps projektfunktioner</a> och lämna det lösa kalkylarket bakom dig. Vill du se hur planering, uppföljning och fakturering hänger ihop i praktiken? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/bemanning-och-personalplanering">Bemanning och personalplanering</a> och <a href="/sv/verktyg/offert-mall">gratis offertmall</a>.</p>
`;

const A_GANTT_SCHEMA_MALL_BYGG: BlogPost = {
  _id: "code-"+"gantt-schema-mall-bygg",
  title: "Gantt-schema och tidsplan för byggprojekt: aktiviteter, beroenden och kritisk linje", slug: "gantt-schema-mall-bygg", locale: "sv",
  excerpt: "En genomtänkt tidsplan avgör lönsamheten i entreprenaden – så bryter du ner projektet i aktiviteter, lägger beroenden och följer den kritiska linjen.", tag: "Projektledning",
  coverImageUrl: "/landing/features/5planering.webp", contentHtml: A_GANTT_SCHEMA_MALL_BYGG_HTML,
  seoTitle: "Gantt-schema mall bygg | ByggExp", seoDescription: "Så bygger du en tidsplan för byggprojektet: aktiviteter, beroenden, kritisk linje och lagkrav i schemat. Från löst Excel-ark till uppföljning i etapper.",
  seoImageUrl: `${SITE_URL}/landing/features/5planering.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:06:00.000Z", createdAt: "2026-08-18T19:06:00.000Z", updatedAt: "2026-08-18T19:06:00.000Z",
};

const A_BBV_ELLER_GVK_VATRUM_HTML = `
<p>Frågan "BBV eller GVK" har ett kort svar: det beror på vilken typ av tätskikt du jobbar med. Kakel och klinker styrs av Byggkeramikrådets regler (BBV), plastmatta och rollat tätskikt av GVK, och rör och golvbrunnar av Säker Vatten. Från och med 1 januari 2026 gäller uppdaterade och avsiktligt samordnade branschregler – BBV 26:1, GVK Säkra Våtrum 2026 och Säker Vatteninstallation 2026:1 – för alla arbeten som påbörjas efter årsskiftet. Väljer du fel regelverk eller saknar giltigt behörighetsbevis blir intyget ogiltigt, och då står du utan skydd när försäkringsbolaget granskar en vattenskada.</p>

<p>Innan du tackar ja till nästa våtrumsjobb: strukturera bevisningen från dag ett med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall &rarr;</a> så att rätt dokumentation finns på plats när den behövs.</p>

<h2>Kort svar först – vilken regel gäller vad?</h2>
<p>De fyra regelverken har tydligt avgränsade roller. Tumregeln:</p>
<ul>
<li><strong>Kakel och klinker &rarr; BBV.</strong> Byggkeramikrådets regler täcker keramiskt ytskikt och tätskiktet bakom och under plattorna. Det är plattsättarens regelverk.</li>
<li><strong>Plastmatta eller foliebaserat/rollat tätskikt &rarr; GVK.</strong> GVK Säkra Våtrum styr tätskikt i huvudsak av plastmatta, folie och membran på golv och vägg.</li>
<li><strong>Rör och golvbrunn &rarr; Säker Vatten.</strong> Säker Vatteninstallation omfattar VVS, rör, golvbrunnar, kranar, blandare och vattenanslutningar.</li>
<li><strong>Målat våtrum &rarr; MVK.</strong> Målade och målningsbehandlade våtrum har sitt eget regelverk.</li>
</ul>
<p>I praktiken berörs ett vanligt kaklat badrum med rördragning av alla tre huvudregelverken samtidigt: plattsättaren utfärdar BBV-kvalitetsdokument för tätskiktet under kaklet, medan VVS-företaget svarar för Säker Vatten-delen. Det är därför inte antingen eller – det är rätt regelverk för varje moment.</p>

<h2>Är branschreglerna lag?</h2>
<p>Nej. Branschreglerna är inte lag utan en praktisk tillämpning av fuktavsnittet i Boverkets byggregler (BBR). Det är en viktig distinktion, men den betyder inte att du kan strunta i dem. Det verkliga tvånget kommer från försäkringsbolagen: de flesta kräver att våtrummet är utfört enligt de branschregler som gällde vid installationstillfället, och de kräver i ökande grad dokumentation i form av kvalitetsdokument. Saknas det giltiga papper sänks eller uteblir ersättningen vid en vattenskada. Med tanke på vad en fuktskada i ett badrum kostar är det där den ekonomiska risken ligger – inte i något myndighetskrav.</p>

<h2>Vad som är nytt 2026</h2>
<p>Det stora med 2026 är samordningen. BBV 26:1, GVK Säkra Våtrum 2026 och Säker Vatteninstallation 2026:1 har harmoniserats för att undvika motstridiga krav mellan yrkesgrupperna. Reglerna gäller installationer och arbeten som påbörjas efter 2026-01-01 – avgörande är alltså startdatum, inte när jobbet slutförs. Bland de konkreta tekniska ändringarna:</p>
<ul>
<li><strong>Golvfall i dusch</strong> ändras till minst 7 mm/m och max 30 mm/m (tidigare 7–20 mm/m) – ett bredare tillåtet intervall som ger mer marginal i utförandet.</li>
<li><strong>Minsta avstånd mellan rörgenomföring och tak eller hörn</strong> sänks från 100 mm till 60 mm, vilket ger mer flexibilitet vid trånga installationer.</li>
<li><strong>Våtzoner förtydligas:</strong> hela utrymmet med plats för bad eller dusch – både våtzon 1 och våtzon 2 – ska förses med tätskikt på golv och väggar.</li>
</ul>
<p>BBV 26:1 ersätter BBV 21:1, som gällde till och med 2025-12-31. Jobbar du på gränsen mellan åren, dokumentera startdatumet noga så att det är entydigt vilket regelverk som tillämpats.</p>

<h2>Vad ett giltigt behörighetsbevis kräver – BBV</h2>
<p>För BBV måste det behöriga företaget ha minst en behörig arbetsledare och minst en behörig plattsättare anställd. Plattsättaren ska ha svenskt yrkesbevis eller motsvarande – minst tre års heltid som plattsättare – och ha gått Byggkeramikrådets Grundkurs (kurs 1) och Tätskiktskurs (kurs 3) med godkänt prov. Behörigheten kräver omcertifiering vart femte år, och plattsättaren ska bära giltig fotolegitimation utfärdad av Byggkeramikrådet och arbeta under en våtrumsansvarig arbetsledare.</p>
<p>Beviset på fackmässigt tätskiktsarbete är BBV-kvalitetsdokumentet, Bilaga A. Det utfärdas av det behöriga företag vars personal utfört jobbet och signeras digitalt av den våtrumsansvariga arbetsledaren. Sedan 2020 kan dokumentet endast signeras och utfärdas via BankID. Utan giltigt kvalitetsdokument – alltså behörig plattsättare, arbete enligt BBV och korrekt BankID-signering – är intyget inte giltigt. Missbruk av dokument eller undermåligt arbete kan leda till indragen behörighet.</p>

<h2>Vad ett giltigt behörighetsbevis kräver – GVK och Säker Vatten</h2>
<p>GVK-auktorisation finns i tre varianter: enbart plastmaterial (matta), enbart tätskikt bakom och under keramik, eller båda (utökad auktorisation). Både arbetsledare och montörer ska gå GVK:s utbildning, och montörens behörighet uppnås efter godkänt prov. Kontrollera att företagets auktorisation faktiskt täcker den tätskiktstyp jobbet kräver – en matt-auktorisation räcker inte för ett kaklat badrum.</p>
<p>Säker Vattens branschlegitimation för VVS-montör kräver dokumenterad yrkesutbildning med branschcertifikat (eller godkänd validering), anställning på ett auktoriserat VVS-företag och giltig utbildning i Säker Vatteninstallation. Legitimationen är kopplad till det auktoriserade företaget, visas digitalt via Säker Vattens app med BankID och är giltig i fem år från godkänd utbildning. Nytt för 2026:1 är att ett auktoriserat VVS-företag ska ha minst en heltidsanställd montör med certifikat eller validering, och att en sex månaders prövotid införs för alla företag vars auktorisationsansökan godkänns från och med 2026-01-01.</p>

<h2>Vem utfärdar vilket intyg på ett vanligt badrum?</h2>
<p>På ett riktigt kaklat badrum med rördragning delas ansvaret så här: plattsättaren utfärdar BBV-kvalitetsdokumentet för tätskikt och kakel, och VVS-företaget svarar för Säker Vatten-delen med sin branschlegitimation. Som beställare – eller som huvudentreprenör som anlitar underentreprenörer – bör du kräva båda dokumenten. Ett BBV-intyg utan motsvarande Säker Vatten-underlag lämnar en lucka som kan bli dyr vid en skada.</p>

<h2>Vanliga misstag som kostar dig ersättningen</h2>
<ul>
<li>Fel regelverk för tätskiktstypen – ett GVK-intyg utfärdat för ett jobb som skulle följt BBV, eller tvärtom.</li>
<li>Kvalitetsdokument som saknar BankID-signering eller är signerat av någon utan våtrumsansvar.</li>
<li>Behörighet som gått ut – omcertifiering vart femte år har missats.</li>
<li>Bara ett av flera intyg samlas in på ett badrum som berör både tätskikt och rör.</li>
<li>Startdatum kring årsskiftet 2025/2026 som inte dokumenterats, så att det är oklart om BBV 21:1 eller 26:1 gällde.</li>
</ul>

<h2>Checklista före du tackar ja till jobbet</h2>
<ol>
<li>Bekräfta vilken tätskiktstyp jobbet gäller och därmed vilket regelverk som styr – BBV, GVK eller båda.</li>
<li>Kontrollera att företaget har rätt behörighet eller auktorisation, och att montörens legitimation är giltig (foto-leg, GVK-prov eller Säker Vatten-app).</li>
<li>Säkerställ att kvalitetsdokument utfärdas och signeras via BankID av rätt ansvarig person.</li>
<li>Dokumentera startdatum så att rätt regelversion – BBV 26:1 respektive 21:1 – är entydig.</li>
<li>Spara samtliga intyg, egenkontroller och foton från utförandet i minst sju år.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp utfärdar inte branschintyg – det gör bara behöriga plattsättare, GVK-montörer och Säker Vatten-legitimerade VVS-montörer. Det ByggExp gör är att hålla ihop dokumentationen runt jobbet: egenkontroller, foton och noteringar om utförande, startdatum och vilket regelverk som tillämpats, samlat per projekt. När försäkringsbolaget eller beställaren begär underlag efter en vattenskada har du allt på ett ställe i stället för utspritt i telefonens kamerarulle och lösa papper. Kombinera det med de formella kvalitetsdokumenten från respektive fackman så är kedjan komplett.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan BBV och GVK?</h3>
<p>BBV är Byggkeramikrådets branschregler och gäller keramiskt ytskikt samt tätskikt bakom och under kakel och klinker – plattsättarens regelverk. GVK Säkra Våtrum gäller tätskikt i huvudsak av plastmatta, folie och membran. Avgörande för vilket som gäller är alltså vilken typ av tätskikt som används, inte rummet i sig.</p>
<h3>Måste jag följa branschreglerna enligt lag?</h3>
<p>Nej, branschreglerna är inte lag utan en praktisk tillämpning av fuktavsnittet i Boverkets byggregler. Men de flesta försäkringsbolag kräver att våtrummet är utfört enligt gällande branschregler och att det finns dokumentation, annars sänks eller uteblir ersättningen vid en vattenskada.</p>
<h3>Vilket regelverk gäller ett kaklat badrum med nya rör?</h3>
<p>Alla tre huvudregelverken berörs. Plattsättaren utfärdar BBV-kvalitetsdokument för tätskikt och kakel, och VVS-företaget svarar för rör och golvbrunn enligt Säker Vatten. Som beställare bör du kräva båda intygen.</p>
<h3>Hur vet jag att ett kvalitetsdokument är giltigt?</h3>
<p>Ett giltigt BBV-kvalitetsdokument (Bilaga A) kräver att arbetet utförts av en behörig plattsättare enligt BBV och att dokumentet signerats digitalt via BankID av den våtrumsansvariga arbetsledaren. Saknas någon av delarna är intyget inte giltigt.</p>

<h2>Kom igång</h2>
<p>Bygg upp bevisningen redan under jobbet med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall &rarr;</a>, så att egenkontroller, foton och regeluppgifter finns dokumenterade när ersättningsfrågan ställs. Vill du se hur ByggExp samlar allt underlag per projekt? <a href="/sv/contact">Boka en demo &rarr;</a> så visar vi upplägget.</p>

<p>Relaterat: <a href="/sv/blog/vatrumscertifikat-behorighet-gvk">Våtrumscertifikat och behörighet – GVK</a>, <a href="/sv/blog/nya-vatrumsregler-2026">Nya våtrumsregler 2026</a>, <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a>.</p>
`;

const A_BBV_ELLER_GVK_VATRUM: BlogPost = {
  _id: "code-"+"bbv-eller-gvk-vatrum",
  title: "BBV eller GVK – vilka branschregler gäller ditt våtrumsjobb 2026?", slug: "bbv-eller-gvk-vatrum", locale: "sv",
  excerpt: "Kakel, plastmatta eller rör – vilket regelverk styr ditt våtrumsjobb, och varför fel regel gör kvalitetsdokumentet ogiltigt.", tag: "Kvalitet",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_BBV_ELLER_GVK_VATRUM_HTML,
  seoTitle: "BBV eller GVK – vilken gäller? | ByggExp", seoDescription: "BBV, GVK eller Säker Vatten? Så vet du vilket regelverk som gäller ditt våtrumsjobb 2026 – och vad ett giltigt behörighetsbevis faktiskt kräver.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T07:09:00.000Z", createdAt: "2026-08-19T07:09:00.000Z", updatedAt: "2026-08-19T07:09:00.000Z",
};

const A_MOTTAGNINGSKONTROLL_MATERIAL_BYGG_HTML = `
<p>Varje leverans som kommer in på bygget är en risk tills den är kontrollerad. Fel produkt, transportskadat virke eller fuktskadad gips som byggs in kostar långt mer att åtgärda i efterhand än den kvart det tar att kontrollera vid mottagandet. <strong>Mottagningskontroll</strong> är den systematiska granskning du gör när materialet anländer: stämmer leveransen mot beställningen, är produkten oskadad, och finns rätt dokumentation som CE-märkning och prestandadeklaration? Enligt PBL är detta byggherrens ansvar och det ska alltid göras – även när du bygger med CE-märkta produkter. Den här guiden går igenom regler, skillnaden mellan CE och DoP, en konkret checklista och hur du hanterar avvikelser.</p>

<p>Vill du komma igång direkt bygger du in kontrollen i din egenkontroll med vår <a href="/sv/verktyg/egenkontroll-mall">gratis egenkontroll-mall -&gt;</a>.</p>

<h2>Vad säger reglerna? Byggherrens ansvar enligt PBL</h2>
<p>Boverket är tydlig: byggherren är juridiskt ansvarig för att byggprodukter kontrolleras vid mottagandet så att de har de egenskaper som förutsattes när byggnaden projekterades. Ansvaret försvinner inte för att du anlitar en entreprenör som tar emot materialet, och det försvinner inte heller för att produkten är CE-märkt.</p>
<p>En vanlig missuppfattning är att CE-märkning är ett godkännande. Det stämmer inte. CE-märkning betyder att du kan lita på tillverkarens redovisade prestanda – den säger ingenting om att produkten är <em>lämplig</em> för just din byggnad. Den bedömningen måste byggherren alltid göra själv, genom att jämföra produktens deklarerade egenskaper mot vad dimensioneringen och bygghandlingarna kräver.</p>

<h2>CE-märkning och prestandadeklaration (DoP) – vad är skillnaden?</h2>
<p>Sedan den 1 juli 2013 är CE-märkning obligatorisk för byggprodukter som omfattas av en harmoniserad standard (hEN). En sådan CE-märkt produkt ska alltid åtföljas av en <strong>prestandadeklaration</strong> (DoP, Declaration of Performance).</p>
<ul>
<li><strong>CE-märkningen</strong> visar att produkten får säljas på EU:s inre marknad och att tillverkaren tagit ansvar för att prestandan är redovisad enligt reglerna.</li>
<li><strong>DoP:en</strong> är tillverkarens faktiska redovisning av produktens prestanda för de väsentliga egenskaperna. Den ska innehålla en unik produkt-/typidentifikation, avsedd användning enligt standarden, tillverkarens namn och adress, vilket AVCP-system som använts, den harmoniserade standarden eller ETA:n samt eventuellt anmält organ, och de deklarerade prestandavärdena.</li>
</ul>
<p>Där en egenskap inte deklarerats står <strong>NPD</strong> (No Performance Determined). Det är en signal till dig – om den egenskapen är kritisk i din konstruktion måste den verifieras på annat sätt. Tillverkaren, eller den som sätter produkten på marknaden i eget namn, upprättar och signerar DoP:en och ska spara den och den tekniska dokumentationen i tio år.</p>

<h2>Så gör du mottagningskontrollen mot DoP och CE</h2>
<p>För CE-märkta produkter är kontrollen förenklad. Det räcker att du som byggherre, med hjälp av DoP:en eller CE-märkningen, kontrollerar att produktens deklarerade egenskaper matchar det som förutsattes i dimensioneringen och står angivet i bygghandlingarna. I praktiken:</p>
<ol>
<li>Ta fram bygghandlingen eller konstruktörens krav för den aktuella produkten.</li>
<li>Läs av DoP:ens deklarerade prestanda för de egenskaper som är kritiska – bärförmåga, brandklass, värmeledning, täthet.</li>
<li>Jämför värde mot krav. Stämmer det, godkänn och dokumentera. Avviker det, stoppa inbyggnad tills konstruktören tagit ställning.</li>
<li>Kontrollera samtidigt identitet, mängd och skador enligt checklistan längre ner.</li>
</ol>

<h2>Produkter utan harmoniserad standard – ETA, typgodkännande eller egen provning</h2>
<p>CE-märkning och DoP krävs bara för produkter som omfattas av en harmoniserad standard eller som fått en europeisk teknisk bedömning (ETA). Saknas harmoniserad standard får produkten inte CE-märkas som byggprodukt i det avseendet, och då måste egenskaperna verifieras på annat sätt. Alternativen är typgodkännande, provningsintyg eller tillverkarens egen dokumenterade provning.</p>
<p>Finns ingen bedömning alls – ingen DoP, CE, typgodkännande eller provningsintyg – är det byggherren som måste ordna egen provning för att verifiera egenskaperna innan produkten byggs in. Bygg aldrig in en produkt vars kritiska egenskaper är okända.</p>

<h2>Checklista för mottagningskontroll</h2>
<p>Gå igenom punkterna vid varje leverans och dokumentera resultatet:</p>
<ul>
<li>Beställning mot följesedel – rätt produkt, rätt artikel.</li>
<li>Mängd och identitet – antal, dimensioner, batch/märkning.</li>
<li>Transportskador – deformationer, sprickor, brott.</li>
<li>Fuktskador – särskilt gips, virke, isolering.</li>
<li>Emballagets skick – brutna pallar, trasig plast, väta.</li>
<li>Teknisk dokumentation – DoP, CE-märkning, intyg, provningsprotokoll.</li>
<li>Montageanvisning och säkerhetsdatablad medföljer där det krävs.</li>
<li>DoP:ens värden mot bygghandlingarnas krav (se ovan).</li>
<li>Dokumentera datum, leverantör, produkt, resultat och ansvarig person.</li>
<li>Attestera – godkänn formellt innan materialet får användas.</li>
</ul>

<h2>Hantera avvikelser rätt</h2>
<p>Avvikande material ska omedelbart skiljas från godkänt lager. Rutinen är enkel men måste följas varje gång:</p>
<ul>
<li><strong>Separera och isolera</strong> materialet fysiskt från godkänt.</li>
<li><strong>Märk</strong> tydligt så ingen råkar bygga in det.</li>
<li><strong>Dokumentera</strong> avvikelsen med foto, datum och beskrivning.</li>
<li><strong>Bedöm</strong> enligt projektets rutin – returneras, provas om eller omklassas det?</li>
<li>Reklamera mot leverantören med underlaget som stöd.</li>
</ul>
<p>Regeln är absolut: ej godkänt material får aldrig byggas in.</p>

<h2>Nytt 2026: nya byggproduktförordningen CPR (EU) 2024/3110</h2>
<p>En ny byggproduktförordning, CPR (EU) 2024/3110, trädde i kraft den 7 januari 2025 och börjar tillämpas från den 8 januari 2026. Den ersätter gradvis nuvarande CPR (EU) 305/2011 i takt med att de harmoniserade standarderna revideras, med en övergångsperiod på upp till 15 år. På sikt kommer CE-märkningen att omfatta både teknisk prestanda och miljöpåverkan, till exempel klimatdata enligt EN 15804, och informationen ska göras tillgänglig via ett digitalt produktpass (DPP).</p>
<p>I praktiken innebär det att två DoP-mallar samexisterar under övergången: CPR 2011 (Annex III) för befintliga standarder och CPR 2024/3110 (Annex V) för nya och reviderade. Var beredd att stöta på båda formaten i dokumentationen de närmaste åren.</p>

<h2>Rutin som håller i praktiken – tips för mindre företag</h2>
<p>En kontroll som bara sker "när man hinner" är ingen kontroll. Bygg in mottagningskontrollen i din egenkontroll eller KMA-plan så att den blir en fast del av flödet:</p>
<ul>
<li>Använd en digital checklista som ansvarig fyller i vid varje leverans.</li>
<li>Fota alltid skador och märkning direkt – bilder är starka underlag vid reklamation.</li>
<li>Spara DoP och intyg samlat per projekt, inte i en pärm som försvinner.</li>
<li>Utse en ansvarig per leverans så att attesten aldrig hamnar mellan stolarna.</li>
</ul>

<h2>Vanliga misstag att undvika</h2>
<ul>
<li>Att tro att CE-märkning ersätter den egna lämplighetsbedömningen.</li>
<li>Att inte jämföra DoP:ens värden mot bygghandlingarnas krav.</li>
<li>Att missa NPD-poster på egenskaper som är kritiska i konstruktionen.</li>
<li>Att bygga in material innan dokumentationen kontrollerats.</li>
<li>Att sakna spårbarhet – ingen vet vem som tog emot vad, när.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp samlar du mottagningskontrollen i samma egenkontroll som resten av projektets kvalitetsarbete. Du skapar en kontrollpunkt per leverans eller materialtyp, bockar av checklistan, laddar upp DoP och foton, och attesterar med datum och ansvarig. Underlaget är sökbart per projekt, så när en beställare eller besiktningsman frågar efter dokumentationen finns den samlad – inte utspridd i mejl och pärmar. Verktyget utför förstås ingen fysisk kontroll åt dig, men det gör att rutinen faktiskt följs och att spårbarheten håller hela vägen till slutbesiktning.</p>

<h2>Vanliga frågor</h2>
<h3>Måste mottagningskontroll alltid göras?</h3>
<p>Ja. Enligt Boverket är byggherren ansvarig för att byggprodukter kontrolleras vid mottagandet så att de har de egenskaper som förutsattes vid projekteringen. Ansvaret kvarstår även om en entreprenör utför kontrollen och även när produkterna är CE-märkta.</p>
<h3>Räcker CE-märkning som godkännande?</h3>
<p>Nej. CE-märkning betyder att du kan lita på tillverkarens redovisade prestanda, men den är inget godkännande och ingen garanti för att produkten passar din byggnad. Byggherren måste alltid bedöma om produkten är lämplig för den avsedda användningen genom att jämföra DoP:ens värden mot bygghandlingarna.</p>
<h3>Vad gör jag om produkten saknar DoP?</h3>
<p>DoP krävs bara för produkter som omfattas av en harmoniserad standard eller har en ETA. Saknas det måste egenskaperna verifieras på annat sätt – typgodkännande, provningsintyg eller egen provning. Är egenskaperna helt obedömda måste byggherren ordna egen provning innan produkten byggs in.</p>
<h3>Hur länge ska dokumentationen sparas?</h3>
<p>Tillverkaren ska spara DoP:en och den tekniska dokumentationen i tio år efter att produkten släpptes på marknaden. Som byggherre bör du arkivera kontrollunderlag och dokumentation samlat per projekt så att det finns tillgängligt vid besiktning och eventuella reklamationer.</p>

<h2>Kom igång</h2>
<p>Bygg in mottagningskontrollen i din kvalitetsrutin med vår <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mall</a> och gör kontrollen till en fast del av varje leverans. Vill du se hur det fungerar i praktiken för ditt företag? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a> och <a href="/sv/blog/leverantorsfaktura-bygg-projekt">Leverantörsfakturor i byggprojekt</a>.</p>
`;

const A_MOTTAGNINGSKONTROLL_MATERIAL_BYGG: BlogPost = {
  _id: "code-"+"mottagningskontroll-material-bygg",
  title: "Mottagningskontroll av byggmaterial – så säkrar du leverans, CE-märkning och DoP", slug: "mottagningskontroll-material-bygg", locale: "sv",
  excerpt: "Praktisk guide till mottagningskontroll av byggmaterial – kontrollera leverans, CE-märkning och DoP mot bygghandlingarna, med checklista och rutin.", tag: "Kvalitet",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_MOTTAGNINGSKONTROLL_MATERIAL_BYGG_HTML,
  seoTitle: "Mottagningskontroll bygg – CE & DoP | ByggExp", seoDescription: "Så gör du mottagningskontroll av byggmaterial: kontrollera leverans, CE-märkning och prestandadeklaration (DoP). Checklista, rutin och byggherrens ansvar.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T07:15:00.000Z", createdAt: "2026-08-19T07:15:00.000Z", updatedAt: "2026-08-19T07:15:00.000Z",
};

const A_STARTMOTE_BYGGPROJEKT_CHECKLISTA_HTML = `
<p>Startmötet är det billigaste tillfället i hela byggprojektet att undvika dyra tvister. Här enas beställare och entreprenör om mål, roller och spelregler innan första spadtaget – och här läggs grunden för hur tidplan, ekonomi och ÄTA ska hanteras. Obesvarade frågor om vem som ansvarar för vad, hur ändringar beställs och när betalningar sker blir sällan billigare med tiden. Tvärtom: de dyker upp igen som konflikter mitt i produktionen. Mötet ska protokollföras, och varje beslut ska bli en uppföljningsbar uppgift med ansvarig och deadline – annars är beslutet i praktiken bara en anteckning.</p>

<p>Med rätt struktur på uppstartsmötet slipper du gissa senare. Se hur du samlar agenda, protokoll och uppgifter på ett ställe med <a href="/sv/funktioner">ByggExp funktioner för projektstyrning -&gt;</a></p>

<h2>Varför startmötet är projektets viktigaste möte</h2>
<p>Ett byggprojekt kör aldrig fast på grund av en enskild detalj – det kör fast på grund av oklara förväntningar. Startmötet finns till för att skapa samsyn om projektets mål, om vem som har vilken roll och om vilka spelregler som gäller. När alla parter lämnar mötet med samma bild av tidplan, ansvar och rutiner minskar risken för missförstånd drastiskt.</p>
<p>Men att fatta beslut räcker inte. Ett beslut utan ansvarig och datum är ingen styrning, bara en förhoppning. Poängen med ett protokollfört startmöte är att varje punkt ska gå att följa upp till avslut. Det som klargörs på mötet – kvalitet, tidplan, kostnader – måste dokumenteras och stämmas av löpande under hela projektet.</p>

<h2>Innan mötet – förbered underlagen</h2>
<p>Ett bra startmöte förbereds. Ha följande på plats innan ni sätter er ner:</p>
<ul>
<li>Kontraktshandlingar och tillämpligt standardavtal (AB 04 eller ABT 06)</li>
<li>Aktuella ritningar och tekniska handlingar</li>
<li>Preliminär tidplan med kritiska hållpunkter</li>
<li>Kontaktlista med ombud och behörigheter</li>
<li>KMA-plan samt arbetsmiljöplan</li>
<li>Betalningsplan och budget</li>
</ul>
<p>Kalla rätt personer. Minst byggherrens ombud, entreprenörens platschef, BAS-U och representanter för de viktigaste underentreprenörerna bör vara med. Fattas en nyckelperson blir besluten inte förankrade – och då förlorar mötet sitt värde.</p>

<h2>Agenda för startmötet – punkt för punkt</h2>
<ol>
<li><strong>Närvaro, roller och behörigheter.</strong> Vilka ombud har parterna utsett, och vad får de besluta om?</li>
<li><strong>Kontrakt och handlingarnas rangordning.</strong> Vad gäller när handlingar motsäger varandra?</li>
<li><strong>Tidplan och kritiska hållpunkter.</strong> Milstolpar, beroenden och sanktioner vid försening.</li>
<li><strong>Ekonomi och betalningsplan.</strong> Fakturarutiner, betalningsvillkor och eventuell omvänd byggmoms.</li>
<li><strong>ÄTA-rutin och formkrav.</strong> Hur beställs och dokumenteras ändrings- och tilläggsarbeten?</li>
<li><strong>KMA – kvalitet, miljö och arbetsmiljö.</strong> Ansvar, planer och kontroller.</li>
<li><strong>Mötesstruktur och rapportering.</strong> Byggmötesintervall, protokoll och statusrapporter.</li>
</ol>
<p>En stram, numrerad agenda gör att inget hamnar mellan stolarna – och att protokollet blir enkelt att följa upp punkt för punkt.</p>

<h2>KMA och arbetsmiljö – lagkraven du måste bocka av</h2>
<p>Arbetsmiljön är inte en punkt att skjuta upp. En arbetsmiljöplan ska upprättas innan byggarbetsplatsen etableras. BAS-P ansvarar för att ta fram planen under projekteringen, medan BAS-U ansvarar för att den följs och uppdateras under utförandet – och för att hålla en introduktion för alla som ska arbeta på plats.</p>
<p>Rollerna BAS-P och BAS-U samt byggherrens ansvar regleras i <strong>AFS 2023:3</strong> (med ändringen AFS 2024:1), som trädde i kraft den 1 januari 2025 och ersätter tidigare AFS 1999:3. För större projekt ska byggherren dessutom lämna en förhandsanmälan till Arbetsmiljöverket innan det första praktiska arbetet startar. Kopian ska anslås väl synligt på arbetsplatsen och hållas uppdaterad. Bocka av vem som ansvarar för vad redan på startmötet.</p>

<h2>Personalliggare och anmälningar</h2>
<p>Elektronisk personalliggare krävs på byggarbetsplatser där den sammanlagda kostnaden för byggverksamheten förväntas överstiga fyra prisbasbelopp. För 2026 innebär det <strong>236 800 kr</strong> (4 × 59 200 kr), och kravet gäller från första arbetsdagen. Det är byggherren som ansvarar för att arbetsplatsen anmäls och avanmäls till Skatteverket och för att utrustning för personalliggare finns – men ansvaret kan överföras till en entreprenör genom skriftligt avtal, till exempel till en totalentreprenör.</p>
<p>Att slarva blir dyrt. Kontrollavgifterna är 12 500 kr i grundavgift plus 2 500 kr per person som är verksam men inte registrerad, 25 000 kr om byggherren inte anmält byggstart och plats till Skatteverket, och 12 500 kr om utrustning för att föra liggare saknas. Ta därför ett tydligt beslut på startmötet om vem som för liggaren och vem som svarar för anmälan.</p>

<h2>ÄTA-rutinen ni måste enas om på mötet</h2>
<p>ÄTA – ändrings-, tilläggs- och avgående arbeten – är där betalningar oftast går förlorade. Enligt AB 04 (2 kap 6 §) ska beställning av ÄTA-arbete som huvudregel vara skriftlig innan arbetet påbörjas, och entreprenören ska underrätta beställaren <em>utan dröjsmål</em> när ett arbete anses vara ÄTA. Uteblir underrättelsen riskerar rätten till ersättning och tidsförlängning att gå förlorad.</p>
<p>Enligt ABT 06 finns inget uttryckligt krav på skriftlig beställning – en muntlig order kan räcka – men underrättelse- och formaliakrav gäller ändå. Oavsett standardavtal bör ni fastställa en gemensam, skriftlig ÄTA-rutin: vilken blankett som används, vem som får beställa, vilka svarstider som gäller och hur allt dokumenteras. En färdig struktur får du i <a href="/sv/verktyg/ata-mall">vår gratis ÄTA-mall -&gt;</a></p>

<h2>Checklista – 12 punkter att bocka av på startmötet</h2>
<ul>
<li>Ombud och behörigheter fastställda för båda parter</li>
<li>Handlingarnas rangordning genomgången</li>
<li>Tidplan med kritiska hållpunkter godkänd</li>
<li>Betalningsplan och fakturarutiner bekräftade</li>
<li>Momshantering klarlagd (omvänd byggmoms vid B2B mellan byggföretag)</li>
<li>ÄTA-rutin, blankett och svarstider överenskomna</li>
<li>Arbetsmiljöplan upprättad före etablering</li>
<li>BAS-P och BAS-U utsedda enligt AFS 2023:3</li>
<li>Förhandsanmälan till Arbetsmiljöverket hanterad</li>
<li>Personalliggare: ansvar och anmälan till Skatteverket beslutade</li>
<li>Byggmötesintervall och rapportering fastställda</li>
<li>Protokoll upprättat – varje beslut har ansvarig och datum</li>
</ul>

<h2>Från beslut till uppgift – så följer ni upp</h2>
<p>Det avgörande steget kommer efter mötet. Varje protokollpunkt ska få en ansvarig och ett datum, annars rinner besluten ut i sanden. I ByggExp blir mötesbesluten spårbara uppgifter som tilldelas en person och följs upp ända till avslut. Du ser direkt vilka punkter från startmötet som är klara, pågår eller förfallit – och du slipper leta i gamla mejltrådar för att minnas vad som bestämdes. Tidplanen kan du planera visuellt med <a href="/sv/verktyg/gantt-schema-mall">vår gratis Gantt-schema-mall -&gt;</a> och sedan koppla ihop med uppgifterna.</p>

<h2>Vanliga misstag att undvika</h2>
<p>De vanligaste felen är att kalla för få personer, att fatta beslut utan att skriva ner vem som ansvarar, och att lämna ÄTA-rutinen odefinierad tills första ändringen dyker upp. Lika vanligt är att KMA-punkterna och personalliggaren behandlas som en formalitet i stället för som lagkrav med reell kontrollavgift. Ett protokoll som saknar ansvariga och datum är inget styrverktyg – det är bara ett referat. Undvik det, så sätter startmötet projektet rätt.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp samlar du agenda, protokoll och uppgifter för startmötet på ett ställe. Du skriver protokoll direkt i systemet, och varje beslut blir en uppgift med ansvarig och deadline som följs upp till avslut. Tidplan, ÄTA och byggmöten hänger ihop, så att det som bestäms på startmötet faktiskt genomförs. Vi lovar inte att systemet fattar besluten åt dig – men det ser till att inget beslut tappas bort på vägen.</p>

<h2>Vanliga frågor</h2>
<h3>Vad ska ett startmöte i ett byggprojekt innehålla?</h3>
<p>Genomgång av roller och behörigheter, handlingarnas rangordning, tidplan, ekonomi och betalningsplan, ÄTA-rutin, KMA och arbetsmiljö samt mötesstruktur. Mötet ska protokollföras och besluten dokumenteras med ansvarig och datum.</p>
<h3>När krävs elektronisk personalliggare?</h3>
<p>När den sammanlagda kostnaden för byggverksamheten förväntas överstiga fyra prisbasbelopp, vilket för 2026 är 236 800 kr. Kravet gäller från första arbetsdagen, och byggherren ansvarar för anmälan och utrustning om inte ansvaret överförts skriftligt.</p>
<h3>Måste en ÄTA-beställning vara skriftlig?</h3>
<p>Enligt AB 04 ska beställningen som huvudregel vara skriftlig innan arbetet påbörjas. Enligt ABT 06 finns inget uttryckligt skriftlighetskrav, men underrättelse ska ändå ske utan dröjsmål. Fastställ alltid en gemensam skriftlig rutin på startmötet.</p>
<h3>Vem ansvarar för arbetsmiljöplanen?</h3>
<p>BAS-P ansvarar för att ta fram arbetsmiljöplanen under projekteringen, och den ska finnas innan byggarbetsplatsen etableras. BAS-U ansvarar sedan för att den följs och uppdateras under utförandet, enligt AFS 2023:3.</p>

<h2>Kom igång</h2>
<p>Förbered nästa uppstartsmöte med en tydlig agenda och en checklista som håller. Planera tidplanen i <a href="/sv/verktyg/gantt-schema-mall">Gantt-schema-mallen</a>, sätt ÄTA-rutinen med <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a> och samla besluten som uppgifter i <a href="/sv/funktioner">ByggExp</a>. Vill du se hur det fungerar i praktiken? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/byggmotesprotokoll-mall">Byggmötesprotokoll – mall och struktur</a>, <a href="/sv/blog/gantt-schema-mall-bygg">Gantt-schema för byggprojekt</a>, <a href="/sv/blog/ata-hantering-mall">ÄTA-hantering – rutin och mall</a>.</p>
`;

const A_STARTMOTE_BYGGPROJEKT_CHECKLISTA: BlogPost = {
  _id: "code-"+"startmote-byggprojekt-checklista",
  title: "Startmöte i byggprojekt – agenda och checklista som sätter projektet rätt", slug: "startmote-byggprojekt-checklista", locale: "sv",
  excerpt: "Så bygger du en agenda och checklista för startmötet som klargör ansvar, tidplan, KMA och ÄTA-rutin – och gör besluten till uppföljningsbara uppgifter.", tag: "Projektledning",
  coverImageUrl: "/landing/features/tasks.webp", contentHtml: A_STARTMOTE_BYGGPROJEKT_CHECKLISTA_HTML,
  seoTitle: "Startmöte byggprojekt: checklista | ByggExp", seoDescription: "Agenda och checklista för uppstartsmötet i byggprojekt: ansvar, tidplan, KMA, personalliggare och ÄTA-rutin. 12 punkter att bocka av – och följa upp.",
  seoImageUrl: `${SITE_URL}/landing/features/tasks.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T07:21:00.000Z", createdAt: "2026-08-19T07:21:00.000Z", updatedAt: "2026-08-19T07:21:00.000Z",
};

const A_RESURSPLANERING_BYGG_HTML = `
<p>Så länge firman kör ett eller två projekt bor resursplaneringen i huvudet på arbetsledaren eller i ett Excel-ark. Det fungerar — tills det inte gör det. När ni växer till en portfölj av samtidiga projekt blir det manuella schemat den vanligaste källan till dubbelbokning: samma lag utlovas till två projektledare, kranföraren står inbokad på två adresser samma morgon och plötsligt är resursplaneringen i bygget det som bromsar hela företaget. Det här är en genomgång av hur du får kontroll med resurshistogram och resursutjämning — och var lagen sätter gränserna.</p>

<p>Vill du börja i det konkreta kan du lägga upp projektens aktiviteter i vår gratis <a href="/sv/verktyg/gantt-schema-mall">Gantt-schema-mall</a> och sedan lägga resurserna ovanpå tidplanen.</p>

<h2>Skillnaden mellan projektplanering och resursplanering</h2>
<p>Projektplanering svarar på <em>vad</em> som ska göras och <em>när</em>: aktiviteter, beroenden och slutdatum i en tidplan. Resursplanering svarar på en annan fråga — <em>vem eller vilken maskin</em> som utför varje aktivitet. De två hänger ihop men är inte samma sak, och det är i glappet mellan dem dubbelbokningarna uppstår.</p>
<p>En resurs är allt som har begränsad kapacitet: yrkesarbetare, hela lag, underentreprenörer, maskiner, kranar och ställningar. Så länge varje projekt planeras för sig ser tidplanen fin ut — men ingen ser att samma resurs är intecknad på tre håll samtidigt. Poängen med riktig resursplanering är att beläggningen blir synlig tvärs över hela projektportföljen, inte bara inom ett projekt i taget.</p>

<h2>Resurshistogram — se beläggningen mot kapaciteten</h2>
<p>Ett resurshistogram är en stapelvy som summerar beläggningen per resurs eller lag över tid och ställer den mot tillgänglig kapacitet. Varje stapel visar hur många timmar som är inbokade en given vecka; en vågrät linje visar kapacitetstaket. Stiger stapeln över linjen har du överbeläggning — ni har lovat bort mer arbete än laget hinner med.</p>
<p>Kapacitetstaket är inte en gissning, det går att räkna. Enligt Byggavtalet (i kraft 2025-05-01 till 2027-04-30) är ordinarie arbetstid 40 timmar i veckan, vilket ger 160 timmar per fyraveckorsperiod, förlagd flexibelt mellan 06.00 och 18.00 måndag till fredag. Från slutet av mars 2026 tillkommer 6 dagars arbetstidsförkortning för den som jobbar 40-timmarsvecka, där arbetsgivaren ensidigt får lägga ut en av dagarna i anslutning till en helg. Räkna även bort semester och annan frånvaro. Det som återstår är den faktiska kapaciteten histogrammet ska mätas mot — inte en teoretisk maxsiffra.</p>

<h2>Resursutjämning: smoothing och leveling</h2>
<p>När histogrammet visar en topp finns det två sätt att jämna ut den. Resursutjämning handlar om att flytta aktiviteter som inte ligger på kritiska linjen inom sitt slack — det tidsutrymme de kan förskjutas utan att påverka annat.</p>
<ul>
<li><strong>Resource smoothing</strong> — du jämnar ut belastningen utan att flytta projektets slutdatum. Du utnyttjar bara det slack som redan finns i icke-kritiska aktiviteter.</li>
<li><strong>Resource leveling</strong> — kapaciteten räcker helt enkelt inte, och du accepterar att slutdatumet flyttas för att inte överbelägga laget.</li>
</ul>
<p>Praktiskt börjar du med att skydda kritiska linjen, fördela om lag mellan projekt och tidigare- eller senarelägga moment som tål det. Målet är att kapa toppen innan den blir övertid — inte att lösa den med övertid.</p>

<h2>Lagen sätter taket för hur långt du får tänja</h2>
<p>Det är frestande att se övertid som ventilen som löser all överbeläggning. Det är den inte. Arbetstidslagen (1982:673) sätter hårda tak som ett resursschema aldrig får bryta mot:</p>
<ul>
<li>Allmän övertid: högst <strong>200 timmar per anställd och kalenderår</strong>, med ytterligare 150 timmar extra övertid.</li>
<li>Högst <strong>48 timmar övertid per fyraveckorsperiod</strong>, eller 50 timmar per kalendermånad.</li>
<li><strong>Dygnsvila</strong>: minst 11 sammanhängande timmars vila per 24-timmarsperiod.</li>
<li><strong>Veckovila</strong>: minst 36 sammanhängande timmar per sjudagarsperiod.</li>
</ul>
<p>Vilotiderna är särskilt lömska när firman växer. Att köra ett lag rakt från ett projekt in i nästa, eller dubbelboka en besättning över två arbetsplatser, kan bryta mot dygns- eller veckovilan även när veckans totala timmar ser rimliga ut. Histogrammet måste alltså hålla sig under både kapacitetstaket och lagtaket samtidigt.</p>

<h2>Dubbelbokning tvärs projekt — det klassiska växtvärkproblemet</h2>
<p>Det verkliga tillväxtproblemet är inte överbeläggning inom ett projekt, utan dubbelbokning mellan projekt: samma lag, kranförare eller maskin lovad till två projektledare som var för sig inte ser den andres plan. Här är det värt att reda ut vad personalliggaren gör och inte gör.</p>
<p>Elektronisk personalliggare är obligatorisk på byggarbetsplatser. Kravet gäller inte när beställaren är en privatperson som bygger för privat bruk, eller när den beräknade byggkostnaden på platsen understiger 4 prisbasbelopp. För 2026 är prisbasbeloppet 59 200 kr, vilket ger en gräns på 4 × 59 200 = 236 800 kr, alltså cirka 237 000 kr. Byggherren ska anmäla till Skatteverket innan arbetet startar. Notera att lagen inte kräver ID06 specifikt — kravet är bara att liggaren är elektronisk och visar vem som varit på plats och när. ID06 är marknadsstandard, inte ett lagkrav.</p>
<p>Men personalliggaren visar vem som <em>faktiskt</em> var på plats i efterhand — den hindrar ingen dubbelbokning i förväg. Därför räcker inte liggaren som planeringsverktyg. Du behöver en central resursvy <em>före</em> arbetet, inte bara en liggare <em>efter</em>.</p>

<h2>Så bygger du processen i praktiken</h2>
<ol>
<li>Inventera kapaciteten per lag och maskin — faktiska tillgängliga timmar, inte teoretiska.</li>
<li>Lägg alla projekt i EN delad resursvy, inte separata scheman per projektledare.</li>
<li>Läs av histogrammet varje vecka och leta efter staplar över kapacitetslinjen.</li>
<li>Utjämna topparna med smoothing eller leveling innan de blir övertid.</li>
<li>Hantera underentreprenörer och maskiner som egna resurser med egen kapacitet.</li>
</ol>

<h2>Varför just nu — marknaden 2026</h2>
<p>Byggföretagens prognos pekar på att bygginvesteringarna vänder uppåt med runt 4 procent under 2026 och att bostadsstarterna stiger till omkring 30 500 från bottenåret 2024. Samtidigt rapporterar branschen brist på ungefär 700 yrkesarbetare med rätt kompetens, och kompetensbristen flaggas som en risk som kan bromsa återhämtningen. Slutsatsen är enkel: när varje yrkesarbetare är en bristvara kostar dålig resursplanering dubbelt — en böjd tidplan och bränd personal på samma gång.</p>

<h2>Så gör du i ByggExp</h2>
<p>Som resursplaneringsverktyg planerar ByggExp resurser per projekt, men beläggningen syns aggregerat tvärs över hela portföljen. Det betyder att när ett lag redan är intecknat på ett projekt fångas överbeläggningen upp tidigt i stället för att upptäckas när två arbetsledare bråkar om samma besättning på måndag morgon. Du kopplar tidrapporterna till planen så att utfall och plan lever i samma system — börja gärna med vår <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> för att fånga faktiska timmar per lag. ByggExp trollar inte bort kapacitetsbrist, men det gör den synlig i tid så att du hinner utjämna innan det blir övertid eller dubbelbokning.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är ett resursplaneringsverktyg?</h3>
<p>Ett resursplaneringsverktyg samlar alla projekt i en delad vy och ställer beläggningen per lag och maskin mot kapaciteten, så att överbeläggning och dubbelbokning syns innan de blir övertid. Skillnaden mot ett Excel-schema är att beläggningen räknas ihop tvärs över hela portföljen – inte ett projekt i taget.</p>
<h3>Vad är skillnaden mellan resurshistogram och Gantt-schema?</h3>
<p>Gantt-schemat visar aktiviteter över tid — vad som görs när. Resurshistogrammet visar summerad beläggning per resurs mot kapacitet — om laget faktiskt räcker till för alla aktiviteter samtidigt. Du behöver båda: tidplanen för sekvensen, histogrammet för att se överbeläggning.</p>
<h3>Kan jag lösa överbeläggning med övertid?</h3>
<p>Bara till en gräns. Arbetstidslagen tillåter högst 200 timmars allmän övertid per anställd och år, max 48 timmar per fyraveckorsperiod, samt kräver 11 timmars dygnsvila och 36 timmars veckovila. Övertid är en ventil, inte en lösning på strukturell överbeläggning.</p>
<h3>Räcker personalliggaren för att undvika dubbelbokning?</h3>
<p>Nej. Personalliggaren är elektronisk och visar vem som varit på plats i efterhand — den är obligatorisk över 4 prisbasbelopp (cirka 237 000 kr 2026). Men den planerar ingenting framåt. För att undvika dubbelbokning behöver du en central resursvy före arbetet.</p>
<h3>Vad är skillnaden mellan resource smoothing och leveling?</h3>
<p>Smoothing jämnar ut belastningen utan att flytta slutdatumet, genom att utnyttja slack i icke-kritiska aktiviteter. Leveling tillåter att slutdatumet flyttas när kapaciteten helt enkelt inte räcker till.</p>

<h2>Kom igång</h2>
<p>Gå från Excel och huvudräkning till en delad resursvy per projekt. Lägg upp tidplanen i vår <a href="/sv/verktyg/gantt-schema-mall">Gantt-schema-mall</a>, koppla på timmarna via <a href="/sv/verktyg/tidrapport-mall">tidrapport-mallen</a> — och vill du se hur resursplaneringen fungerar över hela portföljen i praktiken, <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/bemanning-och-personalplanering">Bemanning och personalplanering</a>, <a href="/sv/blog/gantt-schema-mall-bygg">Gantt-schema för bygge</a>, <a href="/sv/blog/tidrapportering">Tidrapportering i byggprojekt</a>.</p>
`;

const A_RESURSPLANERING_BYGG: BlogPost = {
  _id: "code-"+"resursplanering-bygg",
  title: "Resursplanering i bygg — så undviker du överbeläggning och dubbelbokade lag", slug: "resursplanering-bygg", locale: "sv",
  excerpt: "Så använder du resurshistogram och resursutjämning för att undvika överbeläggning och dubbelbokade lag och maskiner när byggfirman växer från några projekt till en hel portfölj.", tag: "Planering",
  coverImageUrl: "/landing/features/5planering.webp", contentHtml: A_RESURSPLANERING_BYGG_HTML,
  seoTitle: "Resursplaneringsverktyg för bygg – undvik dubbelbokning | ByggExp", seoDescription: "Resursplaneringsverktyg för bygg: med resurshistogram och resursutjämning slipper firman överbeläggning och dubbelbokade lag och maskiner när ni växer.",
  seoImageUrl: `${SITE_URL}/landing/features/5planering.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:18:00.000Z", createdAt: "2026-08-19T08:18:00.000Z", updatedAt: "2026-08-19T08:18:00.000Z",
};

const A_FUKTSAKERHETSPLAN_BYGGAF_HTML = `
<p>Fuktskador hör till de dyraste och vanligaste orsakerna till reklamationer i svenskt byggande. En felaktigt uttorkad betongplatta, ett tätskikt som lagts på för fuktig grund eller en obruten köldbrygga kan bli en tvist som kostar långt mer än själva åtgärden. ByggaF är branschens etablerade svar – en metod för att säkra, dokumentera och kommunicera fuktsäkerhet genom hela byggprocessen, och den kravställs allt oftare i avtal och offentlig upphandling.</p>

<p>Kärnan i ByggaF är kontroll och spårbar dokumentation. Ett bra sätt att komma igång med de löpande kontrollerna på bygget är <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall &rarr;</a>, som du kan använda som underlag för fuktronder och avvikelsehantering.</p>

<h2>Vad är ByggaF?</h2>
<p>ByggaF är en branschstandard och metod som utvecklats och förvaltas av Fuktcentrum vid Lunds tekniska högskola (LTH). Metoden säkrar, dokumenterar och kommunicerar fuktsäkerheten genom hela byggprocessen – från planering och projektering till produktion och förvaltning. Den är inte lag i sig, utan en frivillig branschstandard. Men i praktiken har den blivit de facto-standard eftersom den är det etablerade sättet att uppfylla myndigheternas fuktkrav.</p>
<p>Den ursprungliga branschstandarden publicerades i version 2013-05-08, med senare uppdaterade checklistor och mallar. Metoden förvaltas fortlöpande av Fuktcentrum. Sedan 1 juli 2025 gäller dessutom nya byggregler som ersätter BBR och EKS. Övergångsperioden, då byggherren kunde välja gamla eller nya regler, löpte ut 30 juni 2026 – nu gäller Boverkets nya regler. De nya reglerna är funktionsbaserade – de anger vilket resultat som ska uppnås, inte vilken lösning du ska välja.</p>

<h2>Regelkravet bakom planen – vad reglerna faktiskt kräver</h2>
<p>Även om ByggaF är frivilligt är det underliggande fuktkravet det inte. Byggreglerna ställer krav på att fukttillståndet i byggnaden inte får överskrida materialens högsta tillåtna fukttillstånd, och kräver fuktsäkerhetsprojektering. ByggaF är den etablerade metoden för att visa att du uppfyller detta.</p>
<p>En viktig regel att känna till: om det kritiska fukttillståndet för ett material inte är väl undersökt och dokumenterat ska relativ fuktighet (RF) 75 % användas som kritiskt fukttillstånd. Hänsyn ska dessutom tas till osäkerhet i beräkningsmodell, ingångsparametrar och mätmetoder. Det innebär att du inte kan gissa dig till marginaler – de ska räknas hem och dokumenteras.</p>

<h2>Rollerna i ByggaF – vem gör vad</h2>
<p>ByggaF definierar tre nyckelroller, och en vanlig orsak till att fuktarbetet havererar är att rollerna aldrig utses tydligt:</p>
<ul>
<li><strong>Fuktsakkunnig</strong> – oftast beställarens eller byggherrens roll, med i hela processen och den som ska kallas till samtliga fuktronder.</li>
<li><strong>Fuktsäkerhetsansvarig projektering</strong> – varje projektör utser sin egen, ansvarig för fuktriskvärderingen i sin del.</li>
<li><strong>Fuktsäkerhetsansvarig produktion</strong> – entreprenörens roll, den som upprättar och driver fuktsäkerhetsplanen på bygget.</li>
</ul>
<p>Fuktcentrum LTH håller certifieringskurser, till exempel Fuktsäkerhetsansvarig Produktion, med kursomgång 2026. För dig som byggföretag som ofta möter fuktkrav i upphandling kan certifiering vara en konkret konkurrensfördel.</p>

<h2>Dokumentkedjan steg för steg</h2>
<p>ByggaF bygger på en sammanhängande kedja av dokument. Ett steg som saknas bryter spårbarheten:</p>
<ol>
<li><strong>Fuktsäkerhetsbeskrivning</strong> – byggherrens krav, formuleras i tidigt skede.</li>
<li><strong>Fuktsäkerhetsprojektering</strong> med fuktriskvärdering – projektörerna identifierar kritiska konstruktioner.</li>
<li><strong>Fuktsäkerhetsplan produktion</strong> – entreprenörens styrande dokument för utförandet.</li>
<li><strong>Fuktrondsprotokoll och avvikelserapporter</strong> – den löpande kontrollen under bygget.</li>
<li><strong>Samlad fuktsäkerhetsdokumentation</strong> – överlämnas vid slutet och följer med in i förvaltningen.</li>
</ol>

<h2>Fuktsäkerhetsplanen i produktion – vad den ska innehålla</h2>
<p>Fuktsäkerhetsplanen är ett styrande dokument som upprättas av fuktsäkerhetsansvarig produktion. Den beskriver de aktiviteter och kontroller som ska utföras i produktion för att uppfylla kraven i fuktsäkerhetsbeskrivningen och fuktsäkerhetsprojekteringen. En användbar plan konkretiserar minst följande:</p>
<ul>
<li><strong>Kritiska konstruktioner</strong> – vilka konstruktionsdelar som har störst fuktrisk.</li>
<li><strong>Uttorkningskrav och mätning</strong> – till exempel betongens RF-krav innan tätskikt och golv får läggas, och hur mätningen ska gå till.</li>
<li><strong>Väderskydd</strong> – hur stommen och materialet skyddas mot nederbörd under byggtiden.</li>
<li><strong>Materialhantering och lagring</strong> – hur fuktkänsligt material tas emot och förvaras torrt.</li>
<li><strong>Kontrollpunkter, ansvar och tidpunkter</strong> – vem som kontrollerar vad, och när.</li>
</ul>

<h2>Fuktronden – den praktiska kontrollen på bygget</h2>
<p>En fuktrond är en systematisk, återkommande inspektion av byggarbetsplatsen för att identifiera och åtgärda fuktrisker innan de byggs in. Beställarens fuktsakkunnig ska kallas till samtliga fuktronder. Ronderna dokumenteras i fuktrondsprotokoll med tydlig avvikelsehantering: vad som noterats, vem som ansvarar för åtgärd och när uppföljning sker. Det är just den här löpande, daterade dokumentationen som senare blir ditt bevis om en fuktfråga ifrågasätts.</p>

<h2>Så minskar ByggaF dina reklamationer</h2>
<p>Fördelen är både teknisk och juridisk. Tidig riskidentifiering är nästan alltid billigare än efterlagning – att torka ut en platta rätt kostar en bråkdel av att riva upp ett färdigt golv. Samtidigt ger dokumentkedjan en spårbar historik som fungerar som bevis vid tvist om vem som gjorde vad och när. Och eftersom fuktsäkerhetsarbetet ofta kravställs i AF/AMA och i offentlig upphandling – Upphandlingsmyndighetens hållbarhetskriterier ställer krav på fuktsäkerhetsansvar i produktion, vilket i praktiken gör ByggaF-arbetssättet obligatoriskt i många offentliga projekt – blir en fungerande fuktprocess också en förutsättning för att över huvud taget få uppdragen.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte ByggaF-metoden, men vi gör den löpande kontrollen och dokumentationen enklare att hålla i ordning. Med en digital egenkontroll- och kontrollmall samlar du fuktrondens noteringar, avvikelser och åtgärder på ett ställe, med datum och ansvarig. Det gör det enkelt att kalla rätt person, följa upp öppna punkter och plocka fram underlaget vid överlämning eller om en fråga skulle uppstå. Du bygger själva fuktsäkerhetsplanen enligt ByggaF – vi hjälper dig att hålla protokollen samlade och spårbara.</p>

<h2>Vanliga frågor</h2>
<h3>Är ByggaF ett lagkrav?</h3>
<p>Nej, ByggaF är en frivillig branschstandard. Men byggreglerna kräver fuktsäkerhetsprojektering och att materialens högsta tillåtna fukttillstånd inte överskrids, och ByggaF är den etablerade metoden för att uppfylla det. Dessutom kravställs metoden ofta i avtal och offentlig upphandling.</p>
<h3>Vem betalar för fuktsakkunnig?</h3>
<p>Fuktsakkunnig är oftast beställarens eller byggherrens roll och bekostas normalt av dem. Entreprenören ansvarar i stället för fuktsäkerhetsansvarig produktion. Fördelningen bör regleras tydligt i avtalet så att ingen roll faller mellan stolarna.</p>
<h3>Räcker det med en fuktrond?</h3>
<p>Nej. En fuktrond är en återkommande inspektion, inte en engångskontroll. Ronderna ska genomföras systematiskt under hela produktionen så att fuktrisker fångas innan de byggs in, och fuktsakkunnig ska kallas till samtliga ronder.</p>
<h3>Vad gäller efter 30 juni 2026?</h3>
<p>Den ettåriga övergångsperioden löper ut 30 juni 2026. Fram till dess kan byggherren välja att tillämpa de gamla reglerna (BBR/EKS) eller de nya, funktionsbaserade reglerna. Därefter gäller de nya reglerna. Kontrollera alltid vilket regelverk som är avtalat för just ditt projekt.</p>

<h2>Kom igång</h2>
<p>Börja med att utse rollerna tidigt, skriv in ByggaF i avtalet, boka in fuktronder i tidplanen, säkra betonguttorkning innan tätskikt och golv, och arkivera dokumentationen. Ett enkelt första steg är att sätta upp en löpande kontroll med <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a>. Vill du se hur ByggExp samlar fuktronder och avvikelser i ett flöde? <a href="/sv/contact">Boka en demo</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/nya-vatrumsregler-2026">Nya våtrumsregler 2026</a>, <a href="/sv/blog/egenkontroll">Egenkontroll i bygg</a>, <a href="/sv/blog/kontrollplan-mall-bygglov">Kontrollplan och mall för bygglov</a>.</p>
`;

const A_FUKTSAKERHETSPLAN_BYGGAF: BlogPost = {
  _id: "code-"+"fuktsakerhetsplan-byggaf",
  title: "Fuktsäkerhetsplan och fuktrond enligt ByggaF – så slipper du fuktreklamationer", slug: "fuktsakerhetsplan-byggaf", locale: "sv",
  excerpt: "En praktisk genomgång av ByggaF-metoden: fuktsäkerhetsplan, fuktrond och dokumentkedjan som skyddar dig mot fuktskador och reklamationer.", tag: "Kvalitet",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_FUKTSAKERHETSPLAN_BYGGAF_HTML,
  seoTitle: "Fuktsäkerhetsplan ByggaF | ByggExp", seoDescription: "Så bygger du en fuktsäkerhetsplan och genomför fuktronder enligt ByggaF-metoden – dokumentkedjan, rollerna och BBR-kraven som stoppar fuktreklamationer.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:27:00.000Z", createdAt: "2026-08-19T08:27:00.000Z", updatedAt: "2026-08-19T08:27:00.000Z",
};

const A_NYA_BYGGREGLER_2026_ENERGI_ISOLERING_HTML = `
<p>Få frågor skapar lika mycket förvirring på byggmötena just nu som Boverkets nya energiregler. Det cirkulerar flera datum, ett EU-direktiv och en remiss med preliminära siffror – och som hantverkare eller byggföretag behöver du veta en enda sak: vad gäller för <em>just det här</em> projektet? Huvuddatumet att hålla fast vid är att Boverkets nya föreskrifter om energihushållning och värmeisolering planeras träda i kraft 1 oktober 2026. Från det datumet är samtliga äldre BBR-regler ersatta av det nya regelverket.</p>

<p>Innan du projekterar klimatskalet lönar det sig att räkna på isoleringen tidigt – testa vår gratis <a href="/sv/verktyg/isolering-kalkylator">isolering-kalkylator</a> för att se hur vägguppbyggnaden står sig mot skärpta krav.</p>

<h2>Tidslinjen du behöver hålla isär</h2>
<p>Mycket av oredan beror på att flera regeländringar landar tätt inpå varandra under 2025 och 2026. Energidelen är den sista pusselbiten i det som kallas Möjligheternas byggregler. Så här ser de viktigaste hållpunkterna ut:</p>
<ul>
<li><strong>1 juli 2025</strong> – första etappen av Boverkets nya byggregler träder i kraft, med egen övergångstid.</li>
<li><strong>25 maj 2026</strong> – ändringar i föreskrifterna om energideklaration (BED) träder i kraft. Detta är ett separat datum från energihushållningsföreskrifterna.</li>
<li><strong>29 maj 2026</strong> – EU:s tidsfrist för att införliva energidelen i det omarbetade direktivet om byggnaders energiprestanda (EPBD). Från denna dag gäller även kravet på solklara byggnader vid nya bygglov.</li>
<li><strong>1 oktober 2026</strong> – de nya energihushållningsföreskrifterna träder i kraft. Detta är det svenska ikraftträdandet, som ofta förväxlas med EU-datumet 29 maj.</li>
<li><strong>30 september 2027</strong> – övergångstiden löper ut. Efter detta datum gäller enbart de nya reglerna.</li>
</ul>
<p>Poängen: EU-fristen 29 maj och det svenska ikraftträdandet 1 oktober är två olika saker. Blanda inte ihop dem när du planerar projektet.</p>

<h2>Övergångsregeln avgör vilket regelverk som gäller</h2>
<p>Det här är den viktigaste praktiska detaljen. Fram till och med 30 september 2027 gäller en övergångstid där byggherren får välja att tillämpa antingen de nya energireglerna eller de upphävda reglerna i BBR och BEN. Vilket regelverk som styr ett projekt avgörs alltså av byggherrens val – inte automatiskt av när bygglovet söktes.</p>
<p>Det betyder att du som entreprenör måste stämma av valet med byggherren tidigt, för det påverkar dimensionering, energiberäkning och kostnad. Ett pågående projekt som redan är projekterat mot dagens BBR-nivå kan i regel fortsätta på de upphävda reglerna under övergångstiden. Ett projekt som ändå siktar högt energimässigt kan lika gärna gå direkt på de nya reglerna. Oavsett vad ni väljer: dokumentera valet i projektet så att det inte blir en diskussion vid slutbesked.</p>

<h2>Vad skärps för energin</h2>
<p>De nya reglerna innebär en generell åtstramning. I Boverkets förslag, som var på remiss under februari till 17 april 2026, skärps energikraven med cirka 10 procent jämfört med dagens nivåer. Observera att den siffran var ett remissförslag – den slutliga nivån kan avvika, så verifiera alltid mot Boverket innan projektering.</p>
<p>Utöver skärpta tal förändras även begreppen och klassningen:</p>
<ul>
<li>Begreppet <strong>primärenergital (EPpet)</strong> föreslås ersättas av <strong>energiprestandatal</strong>.</li>
<li>Klassningen läggs om så att <strong>energiklass A föreslås bli ny byggnadsstandard</strong>, i stället för dagens klass C.</li>
<li>En ny klass <strong>A0 för nollemissionsbyggnader</strong> införs. En A0-byggnad ska ha energiprestanda i klass A, får inte till någon del värmas av fossila bränslen på plats, och installationssystemen ska kunna svara på externa styrsignaler och anpassa energianvändningen.</li>
</ul>

<h2>Dagens kravnivåer som referens</h2>
<p>För att förstå hur mycket det stramas åt är det bra att ha utgångsläget klart för sig. Dagens krav på högsta primärenergital (BBR tabell 9:2a) ligger på ungefär:</p>
<ul>
<li><strong>Ca 90 kWh/m² Atemp och år</strong> för småhus större än 130 m².</li>
<li><strong>75 kWh/m²</strong> för flerbostadshus.</li>
<li><strong>70 kWh/m²</strong> för lokaler.</li>
</ul>
<p>Kravet justeras dessutom för geografiskt läge med en geografisk justeringsfaktor (Fgeo, tabell 9:2c). Vid sidan av energitalet finns krav på installerad eleffekt för uppvärmning, genomsnittlig värmegenomgångskoefficient (Um) och luftläckning i tabell 9:2a och 9:2b. Se de här talen som utgångsläget som nu skärps – och räkna med att de nya talen ännu kan justeras innan de slutgiltigt fastställs.</p>

<h2>Isolering, klimatskal och fukt</h2>
<p>När energiprestandatalet skärps blir klimatskalet det som avgör om projektet klarar kraven. Värmeisoleringen (Um), lufttätheten och köldbryggorna får större betydelse, samtidigt som de nya reglerna även skärper fuktkraven. I praktiken innebär det:</p>
<ul>
<li>Tjockare eller mer högpresterande isolering i vägg, tak och grund för att pressa ned Um.</li>
<li>Noggrannare detaljlösningar vid anslutningar, syllar och fönstersmygar för att minska köldbryggor.</li>
<li>Fönster och dörrar med lägre U-värde, eftersom de ofta är den svaga länken i klimatskalet.</li>
<li>Tätare klimatskal – men balanserat mot fuktkraven, så att en tätare konstruktion inte ger fuktproblem.</li>
</ul>
<p>Här blir energiberäkningen och U-värdesberäkningen en integrerad del av projekteringen, inte en efterhandskontroll.</p>

<h2>Solceller och byggnaden som del av energisystemet</h2>
<p>De nya reglerna ser byggnaden som en aktiv del av energisystemet. Kravet på <strong>solklara byggnader</strong> – rätt taklutning, bärighet och förberedda dragningar för solceller – gäller nya byggnader där bygglov söks efter 29 maj 2026. Faktisk solcellsinstallation krävs på nya offentliga byggnader och kommersiella fastigheter större än 250 m² senast 31 december 2026, medan solkraven för nya bostadshus gäller först från 2029.</p>
<p>För lokaler skärps även kraven på fastighetsautomation och styrsystem. Gränsen för krav på byggnadsautomation sänks från nominell effekt på ca 290 kW mot 70 kW inom några år, och FX/FTX-ventilation samt värmeåtervinning betonas.</p>

<h2>Checklista: vad gäller för mitt projekt nu?</h2>
<ol>
<li>När söks bygglov – före eller efter 29 maj 2026?</li>
<li>Vilket regelverk väljer byggherren under övergångstiden (nya reglerna eller upphävda BBR/BEN)?</li>
<li>Är energiberäkningen gjord mot rätt kravnivå för det valda regelverket?</li>
<li>Är byggnaden solklar om bygglov söks efter 29 maj 2026?</li>
<li>Gäller solcellskrav (offentlig eller kommersiell byggnad över 250 m²)?</li>
<li>Är valet av regelverk dokumenterat i projekthandlingarna?</li>
<li>Har ni verifierat den slutliga kravnivån mot Boverket och kommunen innan projektering?</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte Boverkets föreskrifter, men vi hjälper dig hålla ordning på underlaget. Med våra kalkylverktyg räknar du snabbt på isolering och U-värden i ett tidigt skede, så att du ser om klimatskalet står sig mot skärpta krav innan du binder upp dig i en offert. Kalkyler och projektunderlag samlas per projekt, vilket gör det enklare att dokumentera vilket regelverk byggherren valt och att ha beräkningarna tillgängliga vid kontrollplan och slutbesked. De exakta kravtalen kontrollerar du alltid mot Boverket – ByggExp gör räknandet och dokumentationen runt omkring smidigare.</p>

<h2>Vanliga frågor</h2>
<h3>När träder de nya energireglerna i kraft?</h3>
<p>Boverkets nya föreskrifter om energihushållning och värmeisolering planeras träda i kraft 1 oktober 2026. Från det datumet är de äldre BBR-reglerna ersatta av det nya regelverket.</p>
<h3>Måste jag använda de nya reglerna direkt?</h3>
<p>Nej. En övergångstid gäller till och med 30 september 2027. Under den perioden får byggherren välja att tillämpa antingen de nya energireglerna eller de upphävda reglerna i BBR och BEN. Valet ska dokumenteras i projektet.</p>
<h3>Stämmer det att kraven skärps med 10 procent?</h3>
<p>Cirka 10 procent var nivån i Boverkets remissförslag under våren 2026. Det är ett förslag – den slutliga skärpningen kan avvika, så kontrollera alltid det fastställda kravtalet mot Boverket innan du projekterar.</p>
<h3>Vad är skillnaden mellan 29 maj och 1 oktober 2026?</h3>
<p>29 maj 2026 är EU:s tidsfrist för att införliva energidelen i EPBD-direktivet, och datumet då kravet på solklara byggnader börjar gälla vid nya bygglov. 1 oktober 2026 är det svenska ikraftträdandet av energihushållningsföreskrifterna. De två datumen förväxlas ofta.</p>

<h2>Kom igång</h2>
<p>Börja med att stämma av tidigt med kommun och energiberäknare, och sätt regelverksvalet på pränt redan i projekteringsstarten. Räkna på klimatskalet med vår <a href="/sv/verktyg/isolering-kalkylator">isolering-kalkylator</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du samlar kalkyler och underlag per projekt. Kom ihåg att reglernas exakta kravtal kan ändras – kontrollera alltid mot Boverket.</p>

<p>Relaterat: <a href="/sv/blog/berakna-u-varde-isolering">Beräkna U-värde för isolering</a>, <a href="/sv/blog/nya-byggregler-2026-entreprenad">Nya byggregler 2026 och entreprenaden</a>, <a href="/sv/blog/boverkets-nya-byggregler-2026-kontrollplan">Boverkets nya byggregler 2026 och kontrollplanen</a>.</p>
`;

const A_NYA_BYGGREGLER_2026_ENERGI_ISOLERING: BlogPost = {
  _id: "code-"+"nya-byggregler-2026-energi-isolering",
  title: "Nya byggregler 2026: vad ändras för energi och isolering – och vad gäller för ditt projekt?", slug: "nya-byggregler-2026-energi-isolering", locale: "sv",
  excerpt: "En genomgång av Boverkets nya energi- och isoleringsregler 2026 – datumen du måste hålla isär, övergångsregeln som avgör vilket regelverk som gäller, och vad som skärps.", tag: "Regler",
  coverImageUrl: "/landing/verktyg/isolering-preview.webp", contentHtml: A_NYA_BYGGREGLER_2026_ENERGI_ISOLERING_HTML,
  seoTitle: "Nya byggregler 2026 energi | ByggExp", seoDescription: "Energiföreskrifterna träder i kraft 1 okt 2026. Så reder du ut datumen, övergångsregeln och vad som skärps för energi och isolering i ditt projekt.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/isolering-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T09:23:00.000Z", createdAt: "2026-08-19T09:23:00.000Z", updatedAt: "2026-08-19T09:23:00.000Z",
};

const A_AVVIKELSEHANTERING_BYGG_MALL_HTML = `
<p>Ett fel som fångas när gipset sitter uppe är billigt att rätta. Samma fel som upptäcks vid besiktning eller av kunden efter inflytt är dyrt – och skadar förtroendet. En avvikelse i ett byggprojekt är arbete som inte stämmer med ritning, beskrivning, kontrollplan, avtal eller gällande krav. Skillnaden mellan ett projekt som blöder pengar och ett som går i mål ligger ofta i hur systematiskt ni fångar och hanterar dessa avvikelser.</p>

<p>Den här artikeln ger dig en färdig rutin i fem steg och en rapportmall du kan börja använda i nästa vecka. Bygg den på strukturen i <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a> så hänger avvikelsehanteringen ihop med kontrollplanen redan från start.</p>

<h2>Vad räknas som en avvikelse?</h2>
<p>Grundprincipen är enkel: ingen avvikelse är för liten för att noteras. Det som känns obetydligt idag kan vara mönstret ni behöver se om ett halvår. Avvikelser brukar delas in i sex typer:</p>
<ul>
<li><strong>Tekniska</strong> – utförande som avviker från ritning, konstruktion eller monteringsanvisning.</li>
<li><strong>Tidsavvikelser</strong> – aktiviteter som ligger efter tidplan och påverkar efterföljande moment.</li>
<li><strong>Kostnadsavvikelser</strong> – budgetöverskridande, ÄTA-arbeten som inte hanterats.</li>
<li><strong>Kvalitetsavvikelser</strong> – utförande som inte når avtalad eller föreskriven kvalitet.</li>
<li><strong>Arbetsmiljö och miljö</strong> – risker, tillbud, hantering av farligt avfall.</li>
<li><strong>Administrativa</strong> – saknad dokumentation, uteblivna intyg, felaktig märkning.</li>
</ul>
<p>Att kategorisera redan vid rapporteringen gör att ni senare kan trenda vad som faktiskt går fel – och var pengarna läcker.</p>

<h2>Vad lagen och standarderna kräver 2026</h2>
<p>Enligt PBL 10 kap. ska byggherren se till att det finns en kontrollplan för de flesta lov- och anmälningspliktiga åtgärder. Kontrollplanen anger vilka kontroller som ska göras, vad de avser, vem som utför dem och hur. Kontrollen sker huvudsakligen genom byggherrens dokumenterade egenkontroll – och avvikelsehanteringen är en central del av det interna kvalitetssystemet.</p>
<p>Den certifierade kontrollansvarige (KA) ska dokumentera sina iakttagelser och notera avvikelser från kontrollplanen eller gällande regler, informera byggherren och – om en avvikelse inte rättas – anmäla den till byggnadsnämnden. Före slutbesked lämnar KA ett skriftligt utlåtande om att kontrollplanen följts och att eventuella avvikelser är åtgärdade.</p>
<p>Sedan 1 juli 2026 gäller Boverkets nya byggregler fullt ut. Övergångsperioden, då byggherren fick välja gamla eller nya regler, avslutades 30 juni 2026. Det nya regelverket är uppdelat i flera separata grundförfattningar och bygger i högre grad på funktionskrav. I praktiken betyder det att byggherren måste kunna <strong>visa</strong> att valda lösningar uppfyller föreskrifterna genom projektering, verifiering och dokumentation. Kontrollansvaret förtydligas och kontroller ska utföras fackmässigt och dokumenteras. Utan spårbar avvikelsehantering blir det svårt att belägga.</p>
<p>Är företaget certifierat enligt ISO 9001:2015 finns kraven svart på vitt. Klausul 8.7 styr att avvikande produkt eller tjänst identifieras och åtgärdas så att den inte oavsiktligt levereras. Klausul 10.2 kräver att ni reagerar, korrigerar, fastställer grundorsaken och inför korrigerande åtgärd för att förhindra att felet återkommer.</p>

<h2>Skillnaden mellan korrigering och korrigerande åtgärd</h2>
<p>Här faller många projekt. ISO 9001:2015 skiljer på två saker som låter lika men inte är det:</p>
<ul>
<li><strong>Korrigering (correction)</strong> – du åtgärdar symptomet nu. Fönstret sitter fel, du monterar om det.</li>
<li><strong>Korrigerande åtgärd (corrective action)</strong> – du eliminerar grundorsaken så att felet inte återkommer. Varför satt fönstret fel? Fel mått på ritningen som gick ut till hela laget – rätta ritningen och informera alla.</li>
</ul>
<p>Om ni bara lagar symptomet dyker samma fel upp på nästa fönster, nästa våning, nästa projekt. Båda ska dokumenteras, men det är den korrigerande åtgärden som betalar sig över tid.</p>

<h2>Rutinen i fem steg</h2>
<ol>
<li><strong>Rapportera direkt och blame-free.</strong> Den som ser felet noterar det med en gång, oavsett vem som orsakade det. Rädsla för skäll gör att avvikelser göms – och gömda fel är dyrast.</li>
<li><strong>Bedöm allvarlighetsgrad och stoppa vid behov.</strong> En kosmetisk skavank hanteras löpande. En bärande konstruktion som avviker kan kräva omedelbart stopp tills den är utredd.</li>
<li><strong>Grundorsaksanalys.</strong> Ställ &quot;fem varför&quot; tills ni når orsaken, inte symptomet. Var det materialet, rutinen, tidsbristen eller informationen som brast?</li>
<li><strong>Korrigerande och förebyggande åtgärd.</strong> Skriv ner vad som ska göras, vem som är ansvarig och vilken deadline som gäller. Utan namn och datum händer ingenting.</li>
<li><strong>Följ upp och stäng.</strong> Kontrollera att åtgärden är genomförd och verifierad innan avvikelsen stängs. En öppen avvikelse är en tickande post inför slutbesiktningen.</li>
</ol>

<h2>Rapportmallen – fälten du inte får hoppa över</h2>
<p>En avvikelse som inte går att söka fram är nästan värdelös vid en tvist eller besiktning. En användbar avvikelserapport innehåller:</p>
<ul>
<li>Unikt avvikelsenummer och datum</li>
<li>Projekt och plats</li>
<li>Rapportör</li>
<li>Beskrivning av avvikelsen</li>
<li>Kategori och allvarlighetsgrad</li>
<li>Omedelbar korrigering</li>
<li>Grundorsak</li>
<li>Korrigerande och förebyggande åtgärd</li>
<li>Ansvarig och deadline</li>
<li>Status och uppföljning (öppen/stängd)</li>
</ul>
<p>Papper fungerar, men digital rapportering vinner så fort projektet växer – då kan flera personer rapportera från plats, och avvikelserna går att filtrera och trenda. Koppla ihop rapporten med <a href="/sv/verktyg/byggdagbok-mall">byggdagboken</a> så att händelsen finns i den löpande dokumentationen samma dag den inträffar.</p>

<h2>Från avvikelse till slutbesked</h2>
<p>Avvikelser lever inte i ett eget stuprör – de hänger direkt ihop med kontrollplanen. Åtgärdade och stängda avvikelser är en förutsättning för att KA ska kunna lämna sitt utlåtande och för byggnadsnämndens slutbesked. Kan ni visa en komplett kedja – avvikelse noterad, orsak utredd, åtgärd genomförd, uppföljning klar – står ni starkt både vid besiktning och vid en eventuell tvist. Spårbarheten är er försäkring.</p>

<h2>Erfarenhetsåterföring – bär lärdomen till nästa projekt</h2>
<p>Det mest underskattade steget är att lyfta blicken. Håll regelbundna avvikelsemöten där rapporterade händelser granskas och kategoriseras. Ser ni samma typ av fel återkomma – fuktskador i samma detalj, fel material levererat från samma leverantör, samma moment som spricker i tidplanen – då har ni hittat en trend som är värd att stoppa vid källan.</p>
<p>Använd trenderna till att uppdatera checklistor, egenkontroller och inköpsrutiner. Det är precis den ständiga förbättring som ISO 9001 efterfrågar, och den skiljer ett företag som lär av sina projekt från ett som gör om samma misstag varje gång.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp samlar du kontrollplan, egenkontroll och avvikelser på ett ställe så att kedjan hänger ihop. Du rapporterar en avvikelse med nummer, kategori, ansvarig och deadline, kopplar den till rätt projekt och kontrollpunkt, och följer den till stängning. Eftersom allt ligger digitalt kan du filtrera på kategori och plocka fram återkommande fel mellan projekt – underlaget du behöver för avvikelsemötet och för KA:s utlåtande finns redan samlat. Verktyget ersätter inte ert omdöme eller er kontrollansvarige, men det tar bort pappersletandet och gör att inga avvikelser tappas på vägen.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan en avvikelse och ett ÄTA-arbete?</h3>
<p>En avvikelse är arbete som inte stämmer med ritning, beskrivning, kontrollplan, avtal eller krav – något som bör rättas. Ett ÄTA-arbete är en ändring, tilläggs- eller avgående arbete som beställaren begär eller godkänner. Ibland leder en avvikelse till en ÄTA, men de hanteras och dokumenteras var för sig.</p>
<h3>Måste vi ha en avvikelserutin även utan ISO-certifiering?</h3>
<p>Ja, i praktiken. PBL kräver dokumenterad egenkontroll och att avvikelser från kontrollplanen noteras och åtgärdas, och de nya byggreglerna från 1 juli 2026 kräver att ni kan verifiera och dokumentera att lösningarna uppfyller kraven. ISO 9001 formaliserar rutinen, men behovet finns oavsett certifiering.</p>
<h3>Vem får rapportera en avvikelse?</h3>
<p>Alla på arbetsplatsen bör kunna rapportera, och rutinen ska vara blame-free. Ju lägre tröskel, desto tidigare fångas felen. Utredning, beslut om åtgärd och stängning styrs sedan av arbetsledning, kontrollant eller KA beroende på allvarlighetsgrad.</p>
<h3>Hur länge ska vi spara avvikelserapporterna?</h3>
<p>Behandla dem som en del av projektets dokumentation och spara dem tillsammans med kontrollplan och egenkontroller. Bokförings- och underlagshandlingar ska bevaras i sju år, och avvikelsehistoriken är dessutom ovärderlig om en garantibesiktning eller tvist dyker upp senare.</p>

<h2>Kom igång</h2>
<p>Inför rutinen i tre steg: (1) ladda ner och anpassa <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> med ett avsnitt för avvikelser, (2) bestäm vem som äger avvikelsemötet och hur ofta det hålls, (3) börja rapportera varje avvikelse med nummer, ansvarig och deadline. Vill du se hur kontrollplan, egenkontroll och avvikelser hänger ihop digitalt? <a href="/sv/contact">Boka en demo av ByggExp -&gt;</a> så visar vi flödet på ett verkligt projekt.</p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll enligt PBL</a>, <a href="/sv/blog/kma-plan-mall">KMA-plan mall</a> och <a href="/sv/blog/mottagningskontroll-material-bygg">Mottagningskontroll av material</a>.</p>
`;

const A_AVVIKELSEHANTERING_BYGG_MALL: BlogPost = {
  _id: "code-"+"avvikelsehantering-bygg-mall",
  title: "Avvikelsehantering på bygget – rutin och mall som fångar fel tidigt", slug: "avvikelsehantering-bygg-mall", locale: "sv",
  excerpt: "En färdig rutin i fem steg och en rapportmall för avvikelser på bygget – fånga fel innan de når slutbesked och för erfarenheten vidare.", tag: "Kvalitet",
  coverImageUrl: "/landing/features/2uppgift.webp", contentHtml: A_AVVIKELSEHANTERING_BYGG_MALL_HTML,
  seoTitle: "Avvikelsehantering bygg – rutin & mall | ByggExp", seoDescription: "Så bygger du en avvikelserutin i fem steg och en rapportmall som fångar fel tidigt, klarar PBL och för lärdomen vidare till nästa projekt.",
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T13:00:00.000Z", createdAt: "2026-08-19T13:00:00.000Z", updatedAt: "2026-08-19T13:00:00.000Z",
};

const A_FOTODOKUMENTATION_BYGGPROJEKT_BEVIS_HTML = `
<p>När en entreprenad går i tvist avgör sällan minnet vem som hade rätt – det gör dokumentationen. Var beställningen skriftlig? Fanns felet i underlaget redan när ni tog över? Blev den inbyggda konstruktionen utförd fackmässigt innan den täcktes över? Svaren finns i det som fotograferades på plats, när det begav sig. Svensk rätt bygger på fri bevisprövning (rättegångsbalken 35:1): ingen bevistyp väger per automatik tyngre än en annan. Det betyder att ett foto väger exakt så mycket som dess trovärdighet – och trovärdigheten byggs medan projektet pågår, inte i efterhand.</p>

<p>Grunden för ett hållbart fotoflöde är en löpande, daterad dokumentation. Enklast bygger du den kring en strukturerad byggdagbok – använd gärna <a href="/sv/verktyg/byggdagbok-mall">vår gratis byggdagbok-mall -&gt;</a> som nav för bilder, händelser och avvikelser.</p>

<h2>Varför foton är avgörande – men bara om de görs rätt</h2>
<p>Fri bevisprövning innebär att domstolen värderar bevisningen fritt. För digital bevisning som foton bedöms äkthet och manipulationsrisk i det enskilda fallet. Ett löst mobilfoto utan sammanhang är svagt; ett foto med bevarad metadata, tidsstämpel, plats och koppling till dagbok och andra handlingar är starkt. Poängen är enkel: bevisvärdet står och faller med att bilden går att knyta till en tidpunkt, en plats och ett händelseförlopp.</p>
<p>Därför ska dokumentation tas löpande – inte rekonstrueras. Bilder som plötsligt dyker upp inför en förhandling, utan spårbarhet, inbjuder motparten att ifrågasätta äktheten. Bilder som tagits systematiskt varje dag, sparade i ett system med intakt historik, gör tvärtom motpartens invändningar tandlösa.</p>

<h2>ÄTA: fotot som backar upp den skriftliga underrättelsen</h2>
<p>ÄTA-arbeten enligt AB 04 (kap 2 §6) omfattas av ett skriftlighetskrav – beställarens beställning ska vara skriftlig. Entreprenören ska dessutom underrätta beställaren utan dröjsmål, i praktiken inom några dagar, om att ett arbete betraktas som ÄTA. Missas det riskeras rätten till ersättning. Är parterna oense om något överhuvudtaget är ÄTA avgörs frågan på bevisning.</p>
<p>Här är fotots roll tydlig: det ersätter aldrig skriftligheten, det kompletterar den. Ett foto på det avvikande underlaget eller den ändrade konstruktionen, taget samma dag som du skickar din skriftliga ÄTA-anmälan, binder ihop det du gör med det du säger. Tillsammans styrker bild och skriftlig anmälan att arbetet faktiskt var ändrat eller tillkommande – och att du underrättade i tid.</p>

<h2>Förseningar och hinder: dokumentera orsaken i realtid</h2>
<p>Vid hinder och försening (AB 04 och ABT 06 kap 4 §4) ska den part som inser att en omständighet kan rubba tidplanen underrätta motparten utan dröjsmål. Underlåts det får parten inte åberopa omständigheten. För entreprenören är konsekvensen kännbar: du förlorar rätten till tidsförlängning och riskerar att betala förseningsvite i stället för att slippa det.</p>
<p>Realtidsdokumentation av orsaken är din försäkring. Fotografera väderförhållanden som stoppar arbetet, uteblivna leveranser vid avtalad tidpunkt, felaktigt eller försenat underlag från beställaren – varje bild daterad på plats och noterad i dagboken samma dag. En serie daterade foton som visar när hindret uppstod och hur det påverkade framdriften är svårt att argumentera bort.</p>

<h2>Garanti- och ansvarstid: bilder som skyddar i upp till 10 år</h2>
<p>Garantitiden enligt AB 04 är normalt 5 år för entreprenörens arbetsprestation och 2 år för material och varor; enligt ABT 06 normalt 5 år för entreprenaden och 2 år för särskilt föreskrivet material. Garantitiden räknas från godkänd slutbesiktning. Utöver det löper entreprenörens ansvarstid i 10 år från godkännandet.</p>
<p>Skillnaden är avgörande för bevisbördan. Under garantitiden presumeras entreprenören ansvarig för fel. Efter garantitidens utgång, men inom ansvarstiden, svarar entreprenören bara för väsentliga fel som beror på vårdslöshet – och då är det beställaren som har bevisbördan. Din dokumentation av hur arbetet faktiskt utfördes är alltså det som avgör om du blir betalningsskyldig eller inte, i upp till tio år.</p>
<p>Fotografera därför alltid dolda och inbyggda konstruktioner innan de täcks över: armering före gjutning, tätskikt före plattsättning, installationer före inklädnad. När väggen är stängd finns bara bilden kvar. Kom också ihåg fristen: beställaren ska påkalla garantibesiktning senast 3 månader före garantitidens utgång enligt AB 04/ABT 06. Missas fristen finns risk att felansvaret förändras.</p>

<h2>Konsumentjobb – längre exponering</h2>
<p>Jobbar ni mot konsument gäller konsumenttjänstlagen. Reklamationstiden för arbete på fast egendom är 10 år från det att arbetet avslutades (3 år för övriga tjänster), och en reklamation inom 2 månader efter att felet upptäcktes anses alltid ha skett i rätt tid. Lagen ger ingen lagstadgad garanti utom vid småhusentreprenad – övrig garanti är frivillig, men reklamationsansvaret finns där ändå.</p>
<p>Konsekvensen är praktisk: dokumentationen behöver arkiveras lika länge som du kan bli reklamerad, alltså upp till tio år. En privat mobil som byts vartannat år är inget arkiv.</p>

<h2>Så bygger du ett fotoflöde som håller</h2>
<ul>
<li><strong>Tidsstämpel och plats.</strong> Se till att bilderna har intakt tidsstämpel och gärna GPS. Det är metadatan som gör bilden trovärdig.</li>
<li><strong>Koppla varje bild till ett sammanhang.</strong> Länka fotot till projekt, till specifik ÄTA och till dagboksnotering samma dag – en bild utan sammanhang är halv bevisning.</li>
<li><strong>Spara i systemet, inte i chattappen.</strong> Många meddelandeappar komprimerar bilder och stryper EXIF-metadata. Ladda upp originalen i ert projektsystem.</li>
<li><strong>Signera och lås historiken.</strong> Enligt PBL räknas fotografier uttryckligen upp som exempel på verifiering i kontrollplanen, och dokumentationen ska styrkas med underskrift av den som utfört kontrollen. Notera dock att kontrollplanen enligt PBL inte är samma sak som entreprenörens egenkontroll – det är två skilda kontrollsystem.</li>
<li><strong>Fotografera det som försvinner först.</strong> Inbyggda konstruktioner, underlag vid övertagande och skador ni inte orsakat.</li>
</ul>
<p>Bygg gärna in bilderna i er egenkontroll så att kontrollpunkt och foto hör ihop – <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a> ger en struktur att utgå från.</p>

<h2>GDPR och integritet på arbetsplatsen</h2>
<p>Att fotografera på arbetsplatsen är i huvudsak tillåtet, men lagring och spridning av bilder på identifierbara personer kräver laglig grund enligt GDPR – till exempel berättigat intresse eller samtycke. Samtycke måste vara dokumenterat, frivilligt och lika lätt att återkalla som att lämna. För intern byggdokumentation är berättigat intresse eller avtal därför ofta en stabilare grund än samtycke, som kan dras tillbaka när som helst. Rikta kameran mot arbetet, inte mot personerna, så långt det går, och ha en tydlig rutin för bilder där personal syns.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp samlar dagbok, egenkontroll och foton på ett ställe, kopplat till rätt projekt. När du lägger en bild i dagboken eller på en kontrollpunkt behåller systemet tidpunkt och koppling – bilden hamnar inte i en privat mobil utan i ett projektarkiv som ligger kvar. Du kan knyta foton till en ÄTA-anmälan och till en hinderanteckning, så att bild och skriftlig underrättelse hänger ihop den dag de skapas. Vi trollar inte bort juridiken – skriftlighetskravet och fristerna måste du fortfarande uppfylla – men vi gör det enkelt att bygga en spårbar, daterad dokumentation som håller när den behövs.</p>

<h2>Vanliga frågor</h2>
<h3>Räcker ett foto som bevis vid en entreprenadtvist?</h3>
<p>Sällan ensamt. Tack vare fri bevisprövning värderas foton fritt, och de blir starka först i kombination med tidsstämpel, metadata och koppling till dagbok, skriftlig ÄTA-anmälan eller besiktningsprotokoll. Ett foto styrker – det avgör tillsammans med annan bevisning.</p>
<h3>Ersätter foton den skriftliga ÄTA-anmälan?</h3>
<p>Nej. Skriftlighetskravet i AB 04 kap 2 §6 innebär att beställningen ska vara skriftlig, och du ska underrätta utan dröjsmål. Fotot kompletterar den skriftliga anmälan men kan aldrig ersätta den.</p>
<h3>Hur länge behöver jag spara byggfoton?</h3>
<p>Utgå från de längsta ansvarstiderna. I entreprenad löper ansvarstiden 10 år från godkännandet, och i konsumentjobb på fast egendom är reklamationstiden 10 år. Spara dokumentationen i minst tio år i ett system som överlever mobilbyten.</p>
<h3>Får jag fotografera personal på bygget?</h3>
<p>Att fotografera är i huvudsak tillåtet, men att lagra och sprida bilder på identifierbara personer kräver laglig grund enligt GDPR. För intern dokumentation är berättigat intresse ofta en stabilare grund än samtycke, eftersom samtycke fritt kan återkallas.</p>

<h2>Kom igång</h2>
<p>En enkel, konsekvent fotorutin är billig försäkring mot dyra tvister. Börja med att strukturera dokumentationen kring <a href="/sv/verktyg/byggdagbok-mall">byggdagbok-mallen</a> och koppla in <a href="/sv/verktyg/egenkontroll-mall">egenkontrollen</a>. Vill du se hur det fungerar i ett riktigt projekt? <a href="/sv/contact">Boka en demo -&gt;</a> så visar vi hur foton, dagbok och ÄTA hänger ihop.</p>

<p>Relaterat: <a href="/sv/blog/byggdagbok">Byggdagbok – så för du den rätt</a>, <a href="/sv/blog/entreprenadtvist-undvika-dokumentation">Undvik entreprenadtvist med rätt dokumentation</a>, <a href="/sv/blog/ata-hantering-mall">ÄTA-hantering med mall</a>.</p>
`;

const A_FOTODOKUMENTATION_BYGGPROJEKT_BEVIS: BlogPost = {
  _id: "code-"+"fotodokumentation-byggprojekt-bevis",
  title: "Fotodokumentation i byggprojekt – så bygger platschefen bevis som håller vid ÄTA, förseningar och garantitvister", slug: "fotodokumentation-byggprojekt-bevis", locale: "sv",
  excerpt: "När parterna är oense avgör dokumentationen – inte minnet. Så bygger du ett fotoflöde som håller hela vägen från ÄTA till garantitidens slut.", tag: "Dokumentation",
  coverImageUrl: "/landing/features/4foto.webp", contentHtml: A_FOTODOKUMENTATION_BYGGPROJEKT_BEVIS_HTML,
  seoTitle: "Fotodokumentation byggprojekt | ByggExp", seoDescription: "Så bygger platschefen en fotodokumentation som håller som bevis vid ÄTA-, försenings- och garantitvister. Checklista, metadata, GDPR och arkivering.",
  seoImageUrl: `${SITE_URL}/landing/features/4foto.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T08:03:00.000Z", createdAt: "2026-08-20T08:03:00.000Z", updatedAt: "2026-08-20T08:03:00.000Z",
};

const A_DOU_PARM_DRIFT_UNDERHALL_BYGG_HTML = `
<p>En drift- och underhållsinstruktion i bygg är inte pappersarbete du kastar ihop kvällen före överlämningen — det är en del av den färdiga byggnaden. DoU-pärmen samlar allt kunden och förvaltaren behöver för att sköta och underhålla huset så att det fortsätter uppfylla kraven under hela driftskedet. Är pärmen ofullständig kan slutbesiktningen dra ut på tiden, slutbeskedet hållas tillbaka och garantitiden skjutas fram. Är den komplett och välstrukturerad blir överlämningen ett kvitto på ett proffsigt utfört jobb — och en tydlig startpunkt för dina garantiåtaganden.</p>

<p>Behöver du ett strukturerat underlag att bygga vidare på? Samla flikar, egenkontroller och protokoll i ett dokument med hjälp av <a href="/sv/verktyg">våra gratis verktyg för bygg och överlämning →</a></p>

<h2>Vad kräver lagen 2026?</h2>
<p>Under 2025–2026 bytte det svenska byggregelverket skepnad. Boverkets nya funktionsbaserade byggregler ersatte BBR och EKS. Under övergångsperioden 1 juli 2025–30 juni 2026 fick byggherren välja mellan de gamla reglerna (BBR/EKS) och de nya — men inte blanda dem i samma projekt. Från 1 juli 2026 gäller enbart de nya reglerna för nya ärenden. En viktig detalj: om bygglovsbeslutet fattades före 1 juli 2026 enligt de gamla reglerna, så gäller de gamla reglerna även om startbeskedet kommer senare.</p>
<p>De nya brandskyddsreglerna (BFS 2024:7), som trädde i kraft 1 juli 2025, ställer ett uttryckligt krav: drift- och underhållsinstruktioner ska tas fram så att byggnaden kan fortsätta uppfylla brandskyddskraven under drift. Det handlar om instruktioner för återkommande kontroller i driftskedet och för hur och när underhåll utförs. Brandskyddsdokumentationen ses som en del av den färdiga byggnaden, och kommunen bör redan i byggprocessen kräva att relevanta, tydliga drift- och underhållsinstruktioner följer med.</p>
<p>Kopplingen till slutbeskedet är direkt. För slutbesked måste byggherren visa att alla krav enligt lovet, kontrollplanen, startbeskedet och eventuella kompletterande villkor är uppfyllda. Saknas DoU- eller brandskyddsdokumentation kan slutbeskedet hållas tillbaka — och då kan byggnaden inte tas i bruk.</p>

<h2>DoU kontra avtalet — vad AB 04 och ABT 06 säger</h2>
<p>Det är normalt entreprenören som tillhandahåller materialet till drift- och underhållsinstruktionerna. Du vidarebefordrar dokumentation från dina leverantörer och lägger till skötselscheman för de produkter du själv installerat. Relationshandlingar och DoU-instruktioner ska överlämnas till beställaren senast i samband med att slutbesiktningen påbörjas — inte veckor efteråt.</p>
<p>Timingen har avtalsrättslig tyngd. Enligt AB 04 kap 4 § 7 är garantitiden normalt fem år för entreprenörens arbetsprestation och två år för material och varor. Enligt ABT 06 kap 4 § 7 gäller normalt fem år för entreprenaden och två år för material eller fabrikat som beställaren särskilt föreskrivit. Den totala ansvarstiden är tio år räknat från godkänd entreprenad, och den inleds med garantitiden.</p>
<p>Poängen: garantitiden börjar löpa från den godkända slutbesiktningen — inte från när du fysiskt lade sista handen vid jobbet. En ofullständig DoU-pärm som försenar godkännandet försenar alltså också starten på din garantitid och därmed slutpunkten för ditt tioåriga ansvar. Vid totalentreprenad enligt ABT 06 väger detta extra tungt, eftersom egenkontroller, provningsprogram och samordnade funktionsprov utgör underlag för slutbesiktningen som avgör om entreprenaden godkänns.</p>

<h2>Vad ska in i pärmen? Checklista med flikar</h2>
<p>Strukturera pärmen med tydliga flikar så att förvaltaren hittar rätt. En fungerande grunduppsättning:</p>
<ul>
<li><strong>Relationshandlingar</strong> — ritningar och beskrivningar som visar byggnaden som den faktiskt utfördes.</li>
<li><strong>Brandskyddsdokumentation</strong> — byggnadens verkliga brandskydd plus DoU-instruktioner för återkommande kontroll och underhåll av brandskyddet.</li>
<li><strong>Produkt- och fabrikatblad</strong> — datablad för installerade produkter, med tillverkare och typbeteckning.</li>
<li><strong>Skötsel- och serviceintervall</strong> — hur och när varje system ska skötas, servas och bytas.</li>
<li><strong>Egenkontroller och provningsprotokoll</strong> — dokumenterat underlag från egenkontroller, provningar och driftgenomgångar.</li>
<li><strong>Garantibevis</strong> — garantihandlingar från dig och dina underleverantörer.</li>
<li><strong>Kontakt- och leverantörslista</strong> — vem förvaltaren ringer för varje system.</li>
<li><strong>Driftgenomgång och utbildningsprotokoll</strong> — bevis på att kunden fått genomgång av anläggningen.</li>
</ul>
<p>Fliken för egenkontroller är ofta den som saknar poster vid överlämning. Har du löpande dokumenterat under projektets gång blir sammanställningen enkel — se <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall →</a> för en struktur du kan återanvända projekt efter projekt.</p>

<h2>Digitalt är standard 2026 — format, struktur och namngivning</h2>
<p>Om inget annat avtalats ska DoU-instruktioner, relationshandlingar och övrig dokumentation numera levereras digitalt. Det höjer kraven på filernas format, kvalitet och struktur. Vanlig praxis är att samla PDF-utskrifter i en indexerad PDF namngiven efter pärmen — till exempel "DU-Bygg" — och att också leverera originalen.</p>
<p>Byggsektorn har en gemensam standard för hur DoU-leveranser struktureras och upphandlas. Offentliga beställare som Göteborgs Stad, Stockholms fastighetskontor och Luleå publicerar detaljerade kravspecifikationer och mallar för hur DU-pärmen ska indexeras och levereras. Även för en privat överlämning är dessa kravspecifikationer en användbar, återanvändbar checklista — de talar om exakt vilken metadata, mappstruktur och namngivning som förväntas. Strukturera per system, inte per leverantör, så att förvaltaren kan gå direkt till "ventilation" eller "el" utan att veta vilken underentreprenör som utförde arbetet.</p>

<h2>Så gör du överlämningen rätt</h2>
<p>Håll en driftgenomgång med kunden på plats — visa var avstängningar sitter, hur styr och regler fungerar och vilka intervall som gäller. Låt kunden kvittera mottagandet av pärmen skriftligt; det knyter samman leveransen med slutbesiktningens godkännande och därmed garantitidens start. Boka redan nu in en påminnelse för tvåårsbesiktningen, då materialgarantin på två år löper ut.</p>
<p>För dig som mindre entreprenör: börja bygga pärmen tidigt, samla leverantörsdokumentation löpande i stället för i en sista panikrunda, och återanvänd samma flikstruktur för varje projekt. Då blir varje överlämning snabbare än den förra.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig samla underlaget till DoU-pärmen medan projektet pågår i stället för på slutet. Du dokumenterar egenkontroller och avvikelser löpande, samlar produkt- och garantihandlingar per projekt och exporterar en strukturerad sammanställning som PDF att lägga in under rätt flik. Vi gör inte brandprojekteringen åt dig och ersätter inte beställarens kravspecifikation — men vi ser till att egenkontroller, protokoll och kontaktuppgifter finns samlade och sökbara när slutbesiktningen börjar, så att inget saknas när garantitiden ska starta.</p>

<h2>Vanliga frågor</h2>
<h3>Vem ansvarar för att ta fram drift- och underhållsinstruktionerna?</h3>
<p>Normalt entreprenören. Du vidarebefordrar dokumentation från dina leverantörer och lägger till skötselscheman för de produkter du själv installerat. Materialet ska överlämnas till beställaren senast i samband med att slutbesiktningen påbörjas.</p>
<h3>När börjar garantitiden löpa?</h3>
<p>Från den godkända slutbesiktningen, inte från när arbetet fysiskt avslutades. Enligt AB 04/ABT 06 kap 4 § 7 är garantitiden normalt fem år för arbetet och två år för material, och den inleder den totala ansvarstiden på tio år.</p>
<h3>Kan en ofullständig DoU-pärm stoppa slutbeskedet?</h3>
<p>Ja. För slutbesked måste byggherren visa att alla krav enligt lov, kontrollplan och startbesked är uppfyllda. Saknas DoU- eller brandskyddsdokumentation kan slutbeskedet hållas tillbaka, och byggnaden får då inte tas i bruk.</p>
<h3>Måste DoU-pärmen levereras digitalt?</h3>
<p>Om inget annat avtalats, ja. Dokumentationen levereras digitalt, i praktiken ofta som en indexerad PDF namngiven efter pärmen (till exempel "DU-Bygg") plus original. Följ beställarens eller branschens kravspecifikation för format och struktur.</p>

<h2>Kom igång</h2>
<p>Bygg din DoU-pärm på en struktur du kan återanvända. Börja med <a href="/sv/verktyg">våra gratis byggverktyg →</a> och <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen →</a>, eller <a href="/sv/contact">boka en demo →</a> så visar vi hur du samlar underlaget löpande fram till överlämningen.</p>

<p>Relaterat: <a href="/sv/blog/overlamning-relationshandlingar">Relationshandlingar vid överlämning</a>, <a href="/sv/blog/restlista-overlamning-bygg-mall">Restlista och mall för överlämning</a>, <a href="/sv/blog/slutbesiktning">Slutbesiktning steg för steg</a>.</p>
`;

const A_DOU_PARM_DRIFT_UNDERHALL_BYGG: BlogPost = {
  _id: "code-"+"dou-parm-drift-underhall-bygg",
  title: "Så sätter du ihop DoU-pärmen — entreprenörens guide till drift- och underhållsinstruktioner vid överlämning", slug: "dou-parm-drift-underhall-bygg", locale: "sv",
  excerpt: "En genomtänkt DoU-pärm avgör om slutbesiktningen godkänns, när garantitiden startar och om kunden blir nöjd — här är hela arbetsgången för entreprenören.", tag: "Överlämning",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_DOU_PARM_DRIFT_UNDERHALL_BYGG_HTML,
  seoTitle: "DoU-pärm drift & underhåll bygg | ByggExp", seoDescription: "Så bygger entreprenören en komplett DoU-pärm med drift- och underhållsinstruktioner. Checklista, lagkrav 2026, digital leverans och överlämning till kund.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T09:06:00.000Z", createdAt: "2026-08-20T09:06:00.000Z", updatedAt: "2026-08-20T09:06:00.000Z",
};

const A_EGENKONTROLL_EL_EGENKONTROLLPROGRAM_HTML = `
<p>&quot;Egenkontroll el&quot; kan betyda två saker som är lätta att blanda ihop: företagets lagstadgade <strong>egenkontrollprogram</strong> och den praktiska kontrollen av en enskild elinstallation. Här reder vi ut skillnaden, vad lagen kräver av elinstallationsföretag och hur du dokumenterar kontrollen av utfört arbete.</p>

<p><a href="/sv/verktyg/egenkontroll-mall">Skapa en egenkontroll för el med AI – eller ladda ner en gratis mall (PDF) →</a></p>

<h2>Två sorters egenkontroll inom el</h2>
<ul>
<li><strong>Egenkontrollprogram (EKP)</strong> – företagets övergripande system med rutiner för att elinstallationsarbete utförs rätt. Det är ett lagkrav för elinstallationsföretag.</li>
<li><strong>Kontroll av utförd installation</strong> – den praktiska kontrollen och mätningen innan anläggningen tas i bruk, som dokumenteras per arbete. Här passar en egenkontroll-mall/protokoll.</li>
</ul>

<h2>Egenkontrollprogram – lagkravet</h2>
<p>Alla <strong>elinstallationsföretag</strong> måste ha ett egenkontrollprogram. Kravet följer av <strong>elsäkerhetslagen (2016:732), 24 §</strong>, och preciseras i Elsäkerhetsverkets föreskrift <strong>ELSÄK-FS 2017:3</strong>. Programmet är företagets egna rutiner som säkerställer att elinstallationsarbete utförs av personer med rätt kompetens, på rätt sätt och kontrolleras tillräckligt.</p>
<p>För att få utföra elinstallationsarbete måste företaget dessutom:</p>
<ul>
<li>vara <strong>registrerat hos Elsäkerhetsverket</strong>, och</li>
<li>ha minst en <strong>elinstallatör för regelverket</strong> som är knuten till verksamheten.</li>
</ul>
<p>Även den som är <strong>underentreprenör</strong> och utför elinstallationsarbete åt ett annat företag måste ha ett eget egenkontrollprogram och en egen elinstallatör för regelverket – man &quot;lånar&quot; inte huvudentreprenörens. Elsäkerhetsverket tillhandahåller mallar och vägledning för själva egenkontrollprogrammet på sin webbplats.</p>

<h2>Vad ska kontrollen av installationen omfatta?</h2>
<p>Utöver programmet ska varje installation kontrolleras innan den tas i bruk. Typiska punkter som dokumenteras är:</p>
<ul>
<li>Okulär kontroll av utförande och märkning</li>
<li>Mätning och provning (t.ex. kontinuitet, isolationsresistans, jordfelsbrytarens funktion)</li>
<li>Att rätt komponenter och kabelareor använts</li>
<li>Vem som utfört och kontrollerat arbetet, med datum och signatur</li>
</ul>
<p>Det är den här kontrollen du samlar i ett protokoll. En <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mall</a> gör att du får med rätt uppgifter, kan lägga till foto och signatur och får ut en färdig PDF att arkivera.</p>

<h2>Skillnaden mot bygg-egenkontroll</h2>
<p>Egenkontroll inom el styrs av elsäkerhetslagstiftningen och Elsäkerhetsverket. Den allmänna <a href="/sv/blog/egenkontroll">egenkontrollen i bygg</a> handlar i stället om att styrka att bygg­åtgärder uppfyller kraven, ofta kopplat till en <a href="/sv/verktyg/kontrollplan-mall">kontrollplan</a> enligt PBL. Principen är densamma – dokumentera att arbetet är rätt utfört – men regelverket och kraven skiljer sig åt.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Tro att EKP räcker som installationskontroll.</strong> Programmet är rutinerna; varje arbete ska ändå kontrolleras och dokumenteras.</li>
<li><strong>Underentreprenör utan eget EKP.</strong> Varje elinstallationsföretag behöver ett eget program och egen elinstallatör för regelverket.</li>
<li><strong>Ingen dokumentation.</strong> Utan protokoll är det svårt att visa att kontrollen faktiskt gjorts om något ifrågasätts.</li>
</ul>

<p>Har du koll på både delarna – ett aktuellt egenkontrollprogram och en dokumenterad kontroll av varje installation – uppfyller du både lagkravet och kundens förväntan på ett spårbart, säkert elarbete.</p>
`;

const A_EGENKONTROLL_EL_EGENKONTROLLPROGRAM: BlogPost = {
  _id: "code-"+"egenkontroll-el-egenkontrollprogram",
  title: "Egenkontroll el – egenkontrollprogram och kontroll av installationen", slug: "egenkontroll-el-egenkontrollprogram", locale: "sv",
  excerpt: "Skillnaden mellan elinstallationsföretagets lagstadgade egenkontrollprogram (elsäkerhetslagen 24 §, ELSÄK-FS 2017:3) och den praktiska kontrollen av en installation. Med gratis mall.", tag: "Egenkontroll",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_EGENKONTROLL_EL_EGENKONTROLLPROGRAM_HTML,
  seoTitle: "Egenkontroll el – egenkontrollprogram & kontroll | ByggExp", seoDescription: "Egenkontroll el: elföretag måste ha egenkontrollprogram och registrering hos Elsäkerhetsverket (elsäkerhetslagen, ELSÄK-FS 2017:3). Så dokumenterar du. Gratis mall.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T15:00:00.000Z", createdAt: "2026-08-20T15:00:00.000Z", updatedAt: "2026-08-20T15:00:00.000Z",
};

const A_EGENKONTROLL_ENTREPRENAD_HTML = `
<p>I en entreprenad är egenkontrollen både ett kvalitetsverktyg och ett bevis. Den visar att du har byggt enligt handlingar och gällande krav – och blir din bästa försäkring om beställaren eller besiktningsmannen ifrågasätter kvaliteten. Här går vi igenom hur egenkontroll fungerar i entreprenadsammanhang, hur den kopplas till kontrollplan och besiktning, och vad den ska innehålla.</p>

<p><a href="/sv/verktyg/egenkontroll-mall">Ladda ner en gratis egenkontroll-mall (PDF) →</a></p>

<figure class="article-diagram"><img src="/landing/diagrams/egenkontroll-cykel.webp" alt="Egenkontroll i entreprenad – planera, kontrollera, dokumentera och åtgärda avvikelse" width="720" height="380" loading="lazy"><figcaption>Egenkontrollen i entreprenaden är en cykel: planera kontrollpunkterna, kontrollera, dokumentera med foto och signatur, åtgärda avvikelser.</figcaption></figure>

<h2>Varför egenkontroll i entreprenad?</h2>
<p>Egenkontroll i en entreprenad har oftast tre drivkrafter samtidigt:</p>
<ul>
<li><strong>Kontraktshandlingarna</strong> – beställaren kräver ofta dokumenterad egenkontroll som en del av kvalitetskraven, t.ex. via en KMA- eller kvalitetsplan.</li>
<li><strong>Kontrollplan enligt PBL</strong> – för åtgärder som kräver kontrollplan är egenkontroll normalt den metod som anges för att styrka att kraven uppfylls.</li>
<li><strong>Ditt eget skydd</strong> – vid en tvist är en löpande, signerad egenkontroll ofta det som avgör vem som har rätt.</li>
</ul>

<h2>Kopplingen till kontrollplan och besiktning</h2>
<p>Kontrollplanen anger <em>vad</em> som ska kontrolleras och hur (ofta &quot;egenkontroll&quot; som metod). Egenkontrollen är <em>utförandet</em> av de kontrollerna – den ifyllda, signerade dokumentationen. Vid <strong>slutbesiktningen</strong> är egenkontrollerna en del av underlaget som visar att entreprenaden är utförd enligt handlingarna. Saknas de blir det svårare att få arbetet godkänt utan anmärkning. Se även guiderna om <a href="/sv/blog/slutbesiktning">slutbesiktning</a> och <a href="/sv/verktyg/kontrollplan-mall">kontrollplan</a>.</p>

<h2>Vad ska egenkontrollen innehålla?</h2>
<ul>
<li><strong>Projekt och plats</strong> samt vilket moment/arbete kontrollen gäller</li>
<li><strong>Vad som kontrollerats</strong> – mot ritning, beskrivning, AMA eller tillverkarens anvisning</li>
<li><strong>Resultat</strong> – godkänt eller avvikelse, gärna med mätvärden</li>
<li><strong>Åtgärd</strong> vid avvikelse och när den stängts</li>
<li><strong>Datum, utförare och signatur</strong> – och gärna foto som styrker läget</li>
</ul>
<p>Avvikelser är inget att dölja – tvärtom visar en hanterad avvikelse att systemet fungerar. Läs mer om <a href="/sv/blog/avvikelsehantering-bygg-mall">avvikelsehantering</a>.</p>

<h2>Egenkontroll, KMA och kvalitetsplan</h2>
<p>I större entreprenader ingår egenkontrollen i ett bredare kvalitets-, miljö- och arbetsmiljöarbete (KMA). Kvalitetsplanen beskriver vilka kontroller som ska göras, och egenkontrollerna är beviset på att de gjorts. En generell <a href="/sv/blog/egenkontroll">egenkontroll i bygg</a> förklarar grunderna, medan den här guiden fokuserar på entreprenadsammanhanget. Se även <a href="/sv/verktyg/kvalitetsplan-mall">kvalitetsplan-mallen</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Fylla i allt i efterhand.</strong> Egenkontrollen ska göras löpande, när arbetet utförs – inte kvällen före besiktning.</li>
<li><strong>Bara &quot;godkänt&quot;.</strong> En kontroll utan mätvärden eller foto är svag som bevis.</li>
<li><strong>Ingen koppling till kontrollplanen.</strong> Kontrollerna ska matcha det kontrollplanen kräver, annars uppstår luckor.</li>
</ul>

<p>Gör egenkontrollen löpande, koppla den till kontrollplanen och spara den med foto och signatur. Då blir den både ett kvalitetsverktyg under bygget och ett starkt bevis vid besiktning och eventuell tvist.</p>

<h2>Färdiga egenkontroll-mallar per yrke</h2>
<p>Kontrollpunkterna skiljer sig mellan moment i entreprenaden. Välj en färdig mall som öppnar ifylld med rätt punkter:</p>
<ul>
<li><strong><a href="/sv/verktyg/egenkontroll-el-mall">Egenkontroll el</a></strong> – jordfelsbrytare, isolationsmätning, märkning och skyddsledare.</li>
<li><strong><a href="/sv/verktyg/egenkontroll-bygg-mall">Egenkontroll bygg / stomme</a></strong> – måttkontroll mot ritning, infästningar, fukt och brandtätning.</li>
<li><strong><a href="/sv/verktyg/egenkontroll-vvs-mall">Egenkontroll VVS</a></strong> – täthetsprovning, ventiler, rörisolering och avloppsfall.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Är egenkontroll obligatorisk i en entreprenad?</h3>
<p>Beställaren kräver ofta dokumenterad egenkontroll i kontraktshandlingarna (t.ex. via en KMA- eller kvalitetsplan), och för åtgärder som kräver kontrollplan enligt PBL är egenkontroll normalt den metod som anges för att styrka kraven. Oavsett är den ditt bästa bevis vid besiktning och tvist.</p>
<h3>Hur hänger egenkontrollen ihop med slutbesiktningen?</h3>
<p>Egenkontrollerna är en del av underlaget som visar att entreprenaden är utförd enligt handlingarna. Saknas de blir det svårare att få arbetet godkänt utan anmärkning vid <a href="/sv/blog/slutbesiktning">slutbesiktningen</a>.</p>
<h3>Vem ansvarar för egenkontrollen i en entreprenad?</h3>
<p>Den som utför arbetet ansvarar för sin egenkontroll, och en ansvarig signerar. Egenkontrollerna styrker ofta punkterna i byggherrens kontrollplan.</p>
`;

const A_EGENKONTROLL_ENTREPRENAD: BlogPost = {
  _id: "code-"+"egenkontroll-entreprenad",
  title: "Egenkontroll i entreprenad – kontrollplan, besiktning och innehåll", slug: "egenkontroll-entreprenad", locale: "sv",
  excerpt: "Hur egenkontroll fungerar i entreprenad: kopplingen till kontraktshandlingar, kontrollplan enligt PBL och slutbesiktning – och vad den ska innehålla. Med gratis mall.", tag: "Egenkontroll",
  coverImageUrl: "/landing/verktyg/kontrollplan-preview.webp", contentHtml: A_EGENKONTROLL_ENTREPRENAD_HTML,
  seoTitle: "Egenkontroll i entreprenad – kontrollplan & besiktning | ByggExp", seoDescription: "Egenkontroll i entreprenad: koppling till kontraktshandlingar, kontrollplan enligt PBL och slutbesiktning, plus vad kontrollen ska innehålla. Gratis egenkontroll-mall.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/kontrollplan-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T15:05:00.000Z", createdAt: "2026-08-20T15:05:00.000Z", updatedAt: "2026-08-20T15:05:00.000Z",
};

const A_TIDREDOVISNING_BYGGFORETAG_HTML = `
<p>Tidredovisning – att löpande registrera vem som jobbat, när och på vilket projekt – är grunden för både korrekt lön, rätt fakturering och kontroll på lönsamheten. I byggbranschen hänger det dessutom ihop med lagkrav på personalliggare. Här går vi igenom vad tidredovisning omfattar, vad som är lagkrav och hur du gör det enkelt i praktiken.</p>

<p><a href="/sv/verktyg/tidrapport-mall">Ladda ner en gratis tidrapport-mall (PDF) →</a></p>

<h2>Vad är tidredovisning?</h2>
<p>Tidredovisning (eller tidrapportering) är den löpande registreringen av arbetad tid. För ett byggföretag används den till flera saker samtidigt:</p>
<ul>
<li><strong>Löneunderlag</strong> – timmar, OB, övertid och restid ligger till grund för lönen.</li>
<li><strong>Fakturering</strong> – vid löpande räkning faktureras nedlagd tid mot kund.</li>
<li><strong>Projektuppföljning</strong> – jämför nedlagd tid mot kalkyl för att se marginalen i realtid.</li>
<li><strong>ROT-underlag</strong> – arbetskostnaden måste kunna särskiljas för ROT-avdraget.</li>
</ul>

<h2>Tidredovisning och personalliggare – två olika saker</h2>
<p>Det är lätt att blanda ihop tidredovisning med personalliggare, men de fyller olika syften:</p>
<ul>
<li><strong>Personalliggare</strong> är ett <em>lagkrav</em> på de flesta byggarbetsplatser: en elektronisk närvaroregistrering (vem är på plats just nu) som Skatteverket kan kontrollera. Läs mer om <a href="/sv/blog/personalliggare">personalliggare och reglerna</a>.</li>
<li><strong>Tidredovisning</strong> är företagets egen registrering av arbetad tid för lön, fakturering och uppföljning – den styrs inte av samma lag, utan av kollektivavtal, anställningsavtal och dina interna behov.</li>
</ul>
<p>Många löser båda i samma system (ofta via <a href="/sv/blog/id06">ID06</a>-incheckning), men kraven är alltså olika: personalliggaren är en myndighetskontroll, tidredovisningen ett internt verktyg.</p>
<div class="article-table"><table>
<thead><tr><th>&nbsp;</th><th>Personalliggare</th><th>Tidredovisning</th></tr></thead>
<tbody>
<tr><td><strong>Vad det är</strong></td><td>Närvaro just nu på arbetsplatsen</td><td>Arbetad tid per projekt</td></tr>
<tr><td><strong>Styrs av</strong></td><td>Lagkrav (Skatteverket)</td><td>Kollektiv-/anställningsavtal + interna behov</td></tr>
<tr><td><strong>Används till</strong></td><td>Myndighetskontroll</td><td>Lön, faktura, uppföljning</td></tr>
<tr><td><strong>Vid brist</strong></td><td>Kontrollavgift</td><td>Fel lön/faktura, sämre marginal</td></tr>
</tbody>
</table></div>

<h2>Vad ska en tidredovisning innehålla?</h2>
<ul>
<li><strong>Datum</strong> och vilken anställd det gäller</li>
<li><strong>Projekt/arbetsplats</strong> tiden ska bokföras på</li>
<li><strong>Start- och sluttid</strong> eller antal timmar</li>
<li><strong>Typ av tid</strong> – normaltid, <a href="/sv/blog/ob-overtid-byggavtalet-rakna">OB och övertid</a>, <a href="/sv/blog/restidsersattning-byggavtalet">restid</a></li>
<li><strong>Ev. frånvaro</strong> (sjuk, VAB, semester)</li>
<li><strong>Signering</strong> – att uppgifterna stämmer</li>
</ul>

<h2>Så gör du det enkelt</h2>
<p>Papperslappar och lösa Excel-filer skapar merjobb och fel vid lönekörningen. Poängen är att registrera tiden <strong>där arbetet sker</strong> – helst digitalt i mobilen – och att den direkt kan bli både löneunderlag och fakturaunderlag. Vill du börja enkelt kan du <a href="/sv/verktyg/tidrapport-mall">ladda ner vår gratis tidrapport-mall</a> och fylla i den online. Se även den mer grundläggande guiden om <a href="/sv/blog/tidrapportering">tidrapportering</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Rapportera i efterhand.</strong> Tid som fylls i en vecka senare blir gissningar – registrera löpande.</li>
<li><strong>Ingen projektkod.</strong> Utan koppling till projekt går det inte att följa upp marginalen eller fakturera rätt.</li>
<li><strong>Blanda ihop med personalliggaren.</strong> Personalliggaren uppfyller inte kravet på löneunderlag, och tidredovisningen uppfyller inte lagkravet på närvaroregistrering.</li>
</ul>

<p>Med en löpande, projektkopplad tidredovisning får du rätt lön, rätt faktura och koll på lönsamheten – och slipper pusslet vid varje lönekörning.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan tidredovisning och personalliggare?</h3>
<p>Personalliggaren är ett lagkrav om närvaro på arbetsplatsen som Skatteverket kontrollerar. Tidredovisningen är företagets egen registrering av arbetad tid för lön, fakturering och uppföljning. De fyller olika syften men kan matas av samma incheckning.</p>
<h3>Är tidredovisning ett lagkrav?</h3>
<p>Själva tidredovisningen styrs inte av samma lag som personalliggaren, utan av kollektivavtal, anställningsavtal och företagets egna behov. Däremot krävs korrekt underlag för lön och för att kunna särskilja arbetskostnad vid ROT.</p>
<h3>Vad ska en tidredovisning innehålla?</h3>
<p>Datum och anställd, projekt eller arbetsplats, start- och sluttid eller antal timmar, typ av tid (normaltid, OB, övertid, restid), eventuell frånvaro och en signering av att uppgifterna stämmer.</p>
<h3>Hur gör man tidredovisning enkelt i ett byggföretag?</h3>
<p>Genom att registrera tiden där arbetet sker, digitalt i mobilen, så att den direkt blir både löneunderlag och fakturaunderlag. Då slipper du renskrivning och fel vid lönekörningen.</p>
`;

const A_TIDREDOVISNING_BYGGFORETAG: BlogPost = {
  _id: "code-"+"tidredovisning-byggforetag",
  title: "Tidredovisning i byggföretag – lön, fakturering och personalliggare", slug: "tidredovisning-byggforetag", locale: "sv",
  excerpt: "Vad tidredovisning omfattar (löneunderlag, fakturering, projektuppföljning, ROT), hur den skiljer sig från personalliggaren och vad den ska innehålla. Med gratis tidrapport-mall.", tag: "Tidrapportering",
  coverImageUrl: "/landing/verktyg/tidrapport-preview.webp", contentHtml: A_TIDREDOVISNING_BYGGFORETAG_HTML,
  seoTitle: "Tidredovisning i byggföretag – lön, faktura & liggare | ByggExp", seoDescription: "Tidredovisning för byggföretag: löneunderlag, fakturering vid löpande räkning, projektuppföljning och ROT – och hur den skiljer sig från personalliggaren. Gratis mall.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/tidrapport-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T16:00:00.000Z", createdAt: "2026-08-20T16:00:00.000Z", updatedAt: "2026-08-20T16:00:00.000Z",
};

export const KVALITET_ARTICLES: BlogPost[] = [
  BYGGDAGBOK,
  EGENKONTROLL,
  TIDRAPPORTERING,
  VATRUM,
  KONTRAVG,
  A_BYGGMOTESPROTOKOLL_MALL,
  A_GANTT_SCHEMA_MALL_BYGG,
  A_BBV_ELLER_GVK_VATRUM,
  A_MOTTAGNINGSKONTROLL_MATERIAL_BYGG,
  A_STARTMOTE_BYGGPROJEKT_CHECKLISTA,
  A_RESURSPLANERING_BYGG,
  A_FUKTSAKERHETSPLAN_BYGGAF,
  A_NYA_BYGGREGLER_2026_ENERGI_ISOLERING,
  A_AVVIKELSEHANTERING_BYGG_MALL,
  A_FOTODOKUMENTATION_BYGGPROJEKT_BEVIS,
  A_DOU_PARM_DRIFT_UNDERHALL_BYGG,
  A_EGENKONTROLL_EL_EGENKONTROLLPROGRAM,
  A_EGENKONTROLL_ENTREPRENAD,
  A_TIDREDOVISNING_BYGGFORETAG,
];
