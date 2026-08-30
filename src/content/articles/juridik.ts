import type { BlogPost } from '../../types/blog';
import { SITE_URL } from './site-url';

const ATA_HTML = `
<p>ÄTA-arbeten är där byggföretag tappar mest pengar helt i onödan. Jobbet blir gjort – men utan rätt papper och rätt underrättelse i tid uteblir betalningen. Här går vi igenom vad ÄTA är, skillnaden mellan föreskriven och likställd ÄTA, vad AB 04 kräver för att du ska få betalt, och hur du dokumenterar det rätt.</p>
<figure class="article-diagram"><img src="/landing/diagrams/ata-flode.webp" alt="Diagram: ÄTA från ändring/tillägg till skriftlig beställning, prisöverenskommelse och faktura" width="720" height="380" loading="lazy"><figcaption>Vägen till betalt: beställ ÄTA skriftligt, kom överens om pris och fakturera – muntliga ÄTA blir svåra att driva.</figcaption></figure>

<p><a href="/sv/verktyg/ata-mall">Skapa en ÄTA gratis med vår ÄTA-mall (PDF/Excel) →</a></p>

<h2>Vad är ÄTA-arbeten?</h2>
<p>ÄTA står för <strong>Ändrings-, Tilläggs- och Avgående arbeten</strong> – arbeten som tillkommer, ändras eller utgår jämfört med det ursprungliga kontraktet. De regleras i <strong>AB 04 kap 2</strong> (och motsvarande i ABT 06). Eftersom ÄTA påverkar både pris och tid är det just här de flesta tvister uppstår.</p>

<h2>Föreskriven och likställd ÄTA</h2>
<ul>
<li><strong>Föreskriven ÄTA (AB 04 kap 2 §3).</strong> Beställaren har rätt att beställa ändringar och tillägg. Det är en uttrycklig beställning – &quot;gör även detta&quot;.</li>
<li><strong>Likställd ÄTA (AB 04 kap 2 §4).</strong> Arbete som inte beställts uttryckligen men som <em>jämställs</em> med ÄTA, till exempel för att förhållandena på arbetsplatsen avviker från vad handlingarna angav. Det är ofta här pengar går förlorade.</li>
</ul>

<h2>Så får du betalt – underrättelse i tid</h2>
<p>Nyckeln till att få betalt för likställd ÄTA är att <strong>underrätta beställaren utan dröjsmål</strong>:</p>
<ul>
<li>Bedömer du att kostnaden överstiger <strong>gränsbeloppet</strong> (som utgångspunkt ett halvt prisbasbelopp om inget annat avtalats) ska du inhämta beställarens syn <em>innan</em> du utför arbetet.</li>
<li>Ligger kostnaden under gränsbeloppet får du påbörja arbetet direkt, men måste underrätta beställaren utan dröjsmål efteråt.</li>
<li><strong>Uteblir underrättelsen kan du förlora rätten till ersättning</strong> – även om arbetet faktiskt utförts.</li>
</ul>
<p>Viktigt: en signerad dagbok bevisar i sig inte att ett ÄTA-arbete är beställt och godkänt. Dagboken är ett bra stöd, men ÄTA behöver en tydlig underrättelse/beställning för sig.</p>

<h2>Vad en ÄTA ska innehålla</h2>
<ul>
<li><strong>Projekt och datum</strong></li>
<li><strong>Beskrivning</strong> av arbetet – vad, var och varför</li>
<li><strong>Typ</strong> – ändring, tillägg eller avgående, föreskriven eller likställd</li>
<li><strong>Mängd och à-pris</strong> eller uppskattad kostnad</li>
<li><strong>Påverkan på tidplanen</strong> (begär tidsförlängning när det behövs)</li>
<li><strong>Vem som beställt / underrättats</strong> och när</li>
<li><strong>Foton</strong> som styrker behovet</li>
</ul>

<h2>Exempel: en ifylld ÄTA</h2>
<ul>
<li><strong>Projekt:</strong> Nybyggnad villa, Bäckvägen 12 · 2026-05-14</li>
<li><strong>Typ:</strong> Tilläggsarbete (föreskriven ÄTA)</li>
<li><strong>Beskrivning:</strong> Extra eluttag i garage, 3 st, på beställarens begäran</li>
<li><strong>Mängd / à-pris:</strong> 3 st × 850 kr = 2 550 kr exkl. moms</li>
<li><strong>Tid:</strong> Ingen påverkan på tidplan</li>
<li><strong>Beställd av:</strong> beställaren via mejl 2026-05-14, ÄTA nr 4</li>
</ul>

<h2>Vanliga misstag som kostar pengar</h2>
<ul>
<li><strong>Muntliga beställningar.</strong> &quot;Fixa det där också&quot; räcker inte – få det skriftligt.</li>
<li><strong>Ingen underrättelse i tid.</strong> Vid likställd ÄTA är det just den uteblivna underrättelsen som fäller dig.</li>
<li><strong>Förlita sig på dagbokssignering.</strong> En signerad dagbok bevisar inte att ÄTA är godkänt.</li>
<li><strong>Glömma tidsförlängning.</strong> Kräv tid samtidigt som pengar när arbetet påverkar tidplanen.</li>
<li><strong>Fakturera ÄTA otydligt.</strong> Redovisa varje ÄTA som en egen, spårbar post.</li>
</ul>

<h2>Så hanterar du ÄTA i ByggExp</h2>
<ol>
<li>Notera ÄTA direkt i projektet när den uppstår – med beskrivning, mängd och pris.</li>
<li>Koppla foton och beställarens mejl/underrättelse som underlag.</li>
<li>För in det löpande i byggdagboken så du har en tidsstämplad historik.</li>
<li>Ta med godkända ÄTA på fakturan som tydliga, separata rader.</li>
</ol>
<p>Vill du börja enkelt? <a href="/sv/verktyg/ata-mall">Skapa en ÄTA med vår gratis ÄTA-mall</a> och ladda ner den som PDF eller Excel.</p>

<h2>Vanliga frågor</h2>
<h3>Vad betyder ÄTA?</h3>
<p>Ändrings-, Tilläggs- och Avgående arbeten – arbeten som ändras, tillkommer eller utgår jämfört med kontraktet. De regleras i AB 04 kap 2.</p>
<h3>Måste en ÄTA vara skriftlig?</h3>
<p>För din egen säkerhet: ja. Även om arbete avtalas under resans gång bör beställningen och underrättelsen dokumenteras skriftligt, annars blir det svårt att få betalt vid en tvist.</p>
<h3>Vad är skillnaden mellan föreskriven och likställd ÄTA?</h3>
<p>Föreskriven ÄTA (kap 2 §3) är en uttrycklig beställning från beställaren. Likställd ÄTA (kap 2 §4) är arbete som jämställs med ÄTA på grund av avvikande förhållanden, utan uttrycklig beställning.</p>
<h3>Kan jag förlora rätten till betalning för ÄTA?</h3>
<p>Ja. Vid likställd ÄTA kan utebliven underrättelse &quot;utan dröjsmål&quot; leda till att rätten till ersättning går förlorad – även om arbetet utförts.</p>

<h2>Kom igång</h2>
<p>Sluta jobba gratis. Dokumentera varje ÄTA skriftligt, underrätta i tid och ta med den på fakturan. <a href="/sv/verktyg/ata-mall">Ladda ner gratis ÄTA-mall</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/verktyg/ata-mall">ÄTA-mall</a> · <a href="/sv/blog/byggdagbok">Guide: byggdagbok</a> · <a href="/sv/verktyg/faktura-mall">Faktura-mall</a></p>
`.trim();

const ATA: BlogPost = {
  _id: 'code-ata-arbeten',
  title: 'ÄTA-arbeten – regler, exempel och hur du får betalt',
  slug: 'ata-arbeten',
  locale: 'sv',
  excerpt:
    'Vad ÄTA-arbeten är, skillnaden mellan föreskriven och likställd ÄTA enligt AB 04, hur du underrättar i tid för att få betalt – plus ifyllt exempel och vanliga misstag.',
  tag: 'ÄTA',
  coverImageUrl: '/landing/features/9ekonomi.webp',
  contentHtml: ATA_HTML,
  seoTitle: 'ÄTA-arbeten enligt AB 04 – regler, exempel & mall | ByggExp',
  seoDescription:
    'ÄTA-arbeten enligt AB 04 kap 2: föreskriven vs likställd ÄTA, underrättelse utan dröjsmål och hur du får betalt. Ifyllt exempel och vanliga misstag.',
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T11:00:00.000Z',
  createdAt: '2026-08-12T11:00:00.000Z',
  updatedAt: '2026-08-12T11:00:00.000Z',
};

const AB04_HTML = `
<p>AB 04 och ABT 06 är de standardavtal som styr de flesta byggprojekt i Sverige. Väljer du fel – eller missar hur ansvaret fördelas – kan det bli dyrt. Här är skillnaden mellan avtalen, vad de reglerar och det du behöver ha koll på om ÄTA, dagbok, garantitid och besiktning.</p>
<figure class="article-diagram"><img src="/landing/diagrams/ab-kontrakt.webp" alt="Diagram: AB 04 (utförandeentreprenad) vs ABT 06 (totalentreprenad) – vem som projekterar och bär ritningsrisken" width="720" height="380" loading="lazy"><figcaption>Skillnaden i korthet: i AB 04 projekterar beställaren, i ABT 06 projekterar entreprenören – och bär då även ritningsrisken.</figcaption></figure>

<h2>Vad är AB 04 och ABT 06?</h2>
<p>Det är <strong>allmänna bestämmelser</strong> – färdiga avtalsvillkor framtagna av bygg- och installationsbranschen – som parterna hänvisar till i entreprenadkontraktet. De reglerar rättigheter och skyldigheter mellan beställare och entreprenör: pris, tid, ändringar (ÄTA), ansvar, besiktning och garantier.</p>

<h2>Skillnaden mellan AB 04 och ABT 06</h2>
<p>Den avgörande skillnaden är <strong>vem som ansvarar för projekteringen</strong>:</p>
<ul>
<li><strong>AB 04 – utförandeentreprenad.</strong> Beställaren projekterar och tar fram handlingarna; entreprenören utför enligt dem.</li>
<li><strong>ABT 06 – totalentreprenad.</strong> Entreprenören ansvarar för både projektering och utförande. Beställaren sätter funktionskrav och entreprenören levererar en färdig lösning som uppfyller dem.</li>
</ul>
<p>Kort sagt: med AB 04 följer entreprenören beställarens ritningar, med ABT 06 tar entreprenören helhetsansvaret.</p>
<div class="article-table"><table>
<thead><tr><th>&nbsp;</th><th>AB 04</th><th>ABT 06</th></tr></thead>
<tbody>
<tr><td><strong>Entreprenadform</strong></td><td>Utförandeentreprenad</td><td>Totalentreprenad</td></tr>
<tr><td><strong>Vem projekterar</strong></td><td>Beställaren</td><td>Entreprenören</td></tr>
<tr><td><strong>Ritningsrisk</strong></td><td>Beställaren</td><td>Entreprenören</td></tr>
<tr><td><strong>Beställaren anger</strong></td><td>Färdiga handlingar</td><td>Funktionskrav</td></tr>
<tr><td><strong>Garantitid</strong></td><td>5 år arbete / 2 år material</td><td>5 år för entreprenaden</td></tr>
<tr><td><strong>Ansvarstid</strong></td><td colspan="2">10 år från godkänd entreprenad (inleds med garantitiden)</td></tr>
<tr><td><strong>Typiskt projekt</strong></td><td>Detaljprojekterat bygge</td><td>Nyckelfärdig lösning</td></tr>
</tbody>
</table></div>

<h2>När använder du AB 04 respektive ABT 06?</h2>
<p>Valet styrs av vem som ska ta fram lösningen. Vill beställaren ha kontroll över utformningen och redan har (eller köper) färdig projektering passar <strong>AB 04</strong> – entreprenören bygger enligt handlingarna. Vill beställaren i stället köpa ett resultat och lägga över ansvaret för att lösningen fungerar passar <strong>ABT 06</strong> – entreprenören projekterar och bär ritningsrisken. Samma jobb kan alltså upphandlas på båda sätten; det är ansvarsfördelningen, inte byggets storlek, som avgör. För underentreprenader finns dessutom back-to-back-varianter, se <a href="/sv/blog/ab-u-underentreprenor-avtal">AB-U och ABT-U för underentreprenörer</a>.</p>

<h2>Exempel: samma projekt under AB 04 respektive ABT 06</h2>
<p>Tänk dig att en beställare vill bygga en ny industrihall.</p>
<ul>
<li><strong>AB 04-upplägget:</strong> beställaren (eller dennes konsult) tar fram kompletta bygghandlingar och ritningar. Entreprenören räknar på och bygger exakt enligt dem. Visar det sig att en ritning är fel bär beställaren den kostnaden – felet ligger i handlingarna som beställaren ansvarar för.</li>
<li><strong>ABT 06-upplägget:</strong> beställaren anger funktionskrav ("en hall på 800 m² som klarar X ton taklast, klar till Q3"). Entreprenören projekterar själv lösningen och bygger den. Håller inte konstruktionen är det entreprenörens ansvar – hen bär både projekterings- och utförandefelet.</li>
</ul>
<p>Samma hall, samma pris kanske – men helt olika riskfördelning. Det är därför valet av standardavtal ska göras medvetet redan i upphandlingen, inte klistras på i efterhand.</p>

<h2>ÄTA-arbeten</h2>
<p>Ändrings-, tilläggs- och avgående arbeten (ÄTA) regleras i kap 2. Det är här mest pengar tvistas om – rätt hantering och underrättelse i tid avgör om du får betalt. Läs mer i vår <a href="/sv/blog/ata-arbeten">guide om ÄTA-arbeten</a>.</p>

<h2>Dagbok och dokumentation</h2>
<p>Enligt AB 04 kap 3 §13 ska entreprenören föra dagbok och löpande delge beställaren innehållet. En väl förd <a href="/sv/blog/byggdagbok">byggdagbok</a> blir ett viktigt bevisunderlag om tidplan, ÄTA eller ansvar ifrågasätts.</p>

<h2>Garantitid och ansvarstid</h2>
<ul>
<li><strong>AB 04:</strong> garantitid 5 år för entreprenörens arbetsprestation och 2 år för material och varor.</li>
<li><strong>ABT 06:</strong> garantitid 5 år för entreprenaden.</li>
<li><strong>Ansvarstid:</strong> 10 år från det att entreprenaden godkänts, och inleds med garantitiden. Under ansvarstiden kan entreprenören bli ansvarig för väsentliga fel som beror på vårdslöshet.</li>
</ul>
<p>Vill du gå djupare? Läs <a href="/sv/blog/garantitid-ansvarstid-ab-04">garantitid och ansvarstid i AB 04</a>.</p>

<h2>Var får du tag på AB 04 och ABT 06?</h2>
<p>Till skillnad från konsumentavtalen (som Hantverkarformuläret 17) är AB 04 och ABT 06 inte gratis blanketter. De ges ut av Byggandets Kontraktskommitté (BKK) och säljs som tryck och PDF via Svensk Byggtjänst. Du "laddar alltså inte ner" dem fritt – du hänvisar till dem i ditt entreprenadkontrakt och tillämpar villkoren. Själva kontraktet och underlaget bygger du enkelt med en gratis <a href="/sv/verktyg/entreprenadkontrakt-mall">entreprenadkontrakt-mall</a>, där du väljer om AB 04 eller ABT 06 ska gälla.</p>

<h2>Fördjupning: AB 04 och ABT 06 i detalj</h2>
<p>Den här guiden är översikten. För enskilda moment finns djupare genomgångar:</p>
<ul>
<li><a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a> – ändringar och tillägg, och hur du får betalt.</li>
<li><a href="/sv/blog/slutbesiktning">Slutbesiktning enligt AB 04</a> – när ansvaret går över.</li>
<li><a href="/sv/blog/garantitid-ansvarstid-ab-04">Garantitid och ansvarstid</a> – 5 och 10 år.</li>
<li><a href="/sv/blog/garantibesiktning-2-ar-entreprenad">Garantibesiktning efter 2 år</a>.</li>
<li><a href="/sv/blog/hindersanmalan-tidsforlangning-ab04">Hindersanmälan och tidsförlängning</a> – undvik vite.</li>
<li><a href="/sv/blog/entreprenadgaranti-sakerhet-ab04">Entreprenadgaranti och säkerhet</a>.</li>
<li><a href="/sv/blog/nya-ab-04-abt-06-revidering-2027">Kommande revidering av AB 04 och ABT 06</a> – status för de nya bestämmelserna.</li>
</ul>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Otydligt kontrakt.</strong> Hänvisa uttryckligen till AB 04 eller ABT 06 – annars gäller dispositiv rätt.</li>
<li><strong>Slarv med ÄTA.</strong> Muntliga beställningar och utebliven underrättelse kostar pengar.</li>
<li><strong>Ingen dagbok.</strong> Utan löpande dokumentation står du svagt vid en tvist.</li>
<li><strong>Missa besiktning och tider.</strong> Håll koll på slutbesiktning och när garantitiden börjar löpa.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan AB 04 och ABT 06?</h3>
<p>AB 04 gäller utförandeentreprenad där beställaren projekterar. ABT 06 gäller totalentreprenad där entreprenören ansvarar för både projektering och utförande.</p>
<h3>Hur lång är garantitiden?</h3>
<p>Fem år för entreprenörens arbete (två år för material enligt AB 04). Ansvarstiden är tio år från godkänd entreprenad.</p>
<h3>Var regleras ÄTA?</h3>
<p>I kap 2 i AB 04 och ABT 06. Se vår <a href="/sv/blog/ata-arbeten">ÄTA-guide</a> för hur du får betalt.</p>
<h3>Vad betyder "allmänna bestämmelser"?</h3>
<p>Det är färdiga, branschgemensamma avtalsvillkor. AB 04 heter i sin helhet "Allmänna bestämmelser för byggnads-, anläggnings- och installationsentreprenader" och ABT 06 motsvarande för totalentreprenader. Du hänvisar till dem i kontraktet i stället för att skriva alla villkor själv.</p>
<h3>Kan man ladda ner AB 04 och ABT 06 gratis?</h3>
<p>Nej. De ges ut av BKK och säljs via Svensk Byggtjänst (tryck/PDF). De är alltså inte fria blanketter som konsumentavtalen – du köper dokumentet och hänvisar till det i ditt kontrakt.</p>
<h3>Ska jag välja AB 04 eller ABT 06?</h3>
<p>Välj AB 04 om beställaren projekterar och entreprenören bygger enligt handlingarna. Välj ABT 06 om entreprenören ska ansvara för både projektering och utförande utifrån funktionskrav.</p>

<h2>Kom igång</h2>
<p>Håll koll på kontrakt, ÄTA, dagbok och ekonomi på ett ställe. Ladda ner en gratis <a href="/sv/verktyg/entreprenadkontrakt-mall">entreprenadkontrakt-mall</a>, <a href="/sv/blog/ata-arbeten">läs om ÄTA</a>, skapa offert och faktura i ByggExp eller <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a> · <a href="/sv/blog/byggdagbok">Byggdagbok</a> · <a href="/sv/blog/egenkontroll">Egenkontroll</a></p>
`.trim();

const AB04: BlogPost = {
  _id: 'code-ab-04-abt-06',
  title: 'AB 04 och ABT 06 – skillnaden och vad du behöver veta',
  slug: 'ab-04-och-abt-06',
  locale: 'sv',
  excerpt:
    'Skillnaden mellan AB 04 (utförandeentreprenad) och ABT 06 (totalentreprenad), samt vad avtalen säger om ÄTA, dagbok, garantitid och ansvarstid.',
  tag: 'Entreprenadjuridik',
  coverImageUrl: '/landing/features/7offerter.webp',
  contentHtml: AB04_HTML,
  seoTitle: 'AB 04 och ABT 06 – skillnad, garantitid & ÄTA | ByggExp',
  seoDescription:
    'AB 04 vs ABT 06: utförande- eller totalentreprenad, vem projekterar, ÄTA (kap 2), dagbok (kap 3 §13), garantitid 5 år och ansvarstid 10 år. Komplett guide.',
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T15:00:00.000Z',
  createdAt: '2026-08-12T15:00:00.000Z',
  updatedAt: '2026-08-12T15:00:00.000Z',
};

const SLUTBESIKTNING_HTML = `
<p>Slutbesiktningen är målsnöret i ett byggprojekt – det är här entreprenaden godkänns, ansvaret går över och garantitiden börjar ticka. Går den fel kan betalning hållas inne och tvister uppstå. Här är hur en slutbesiktning enligt AB 04 går till och vad du behöver ha ordning på.</p>
<figure class="article-diagram"><img src="/landing/diagrams/slutbesiktning.webp" alt="Diagram: slutbesiktningens steg – kallelse, besiktning, utlåtande och efterbesiktning" width="720" height="380" loading="lazy"><figcaption>Slutbesiktningens gång: kallelse, besiktning, utlåtande och eventuell efterbesiktning – vid godkänt börjar garantitiden löpa.</figcaption></figure>

<h2>Vad är en slutbesiktning?</h2>
<p>En slutbesiktning är en oberoende kontroll av att entreprenaden är utförd enligt kontraktet. Den utförs av en <strong>besiktningsman</strong> som ska vara oberoende i förhållande till båda parter och ha dokumenterad sakkunskap om entreprenadjuridik och byggteknik. Besiktningen regleras i <strong>AB 04 kap 7</strong> (och motsvarande i ABT 06).</p>

<h2>Godkänd eller inte?</h2>
<p>Enligt <strong>AB 04 kap 7 §12</strong> ska entreprenaden godkännas vid slutbesiktning om det inte föreligger fel. <strong>Fel av mindre betydelse som förekommer i begränsad omfattning hindrar dock inte godkännande</strong> – de noteras i stället för åtgärd. Vid slutsammanträdet meddelar besiktningsmannen om entreprenaden är godkänd eller inte.</p>

<h2>Vad händer när entreprenaden godkänns?</h2>
<ul>
<li>Entreprenaden anses <strong>avlämnad</strong> och ansvaret går i huvudsak över till beställaren.</li>
<li><strong>Garantitiden börjar löpa</strong> – fem år för entreprenörens arbetsprestation och två år för material och varor enligt AB 04.</li>
<li><strong>Ansvarstiden</strong> är tio år från godkännandet och inleds med garantitiden.</li>
<li>Noterade fel ska åtgärdas inom överenskommen tid.</li>
</ul>

<h2>Så förbereder du dig inför slutbesiktningen</h2>
<ol>
<li>Se till att egenkontroller är gjorda och dokumenterade – <a href="/sv/blog/egenkontroll">egenkontroll</a> är ofta det som styrker kvaliteten.</li>
<li>Ha <a href="/sv/blog/byggdagbok">byggdagboken</a> och ÄTA-underlag i ordning.</li>
<li>Åtgärda kända brister innan besiktningen.</li>
<li>Samla ritningar, intyg och provningsprotokoll som ska visas.</li>
</ol>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Bristfällig dokumentation.</strong> Utan egenkontroller och dagbok blir det svårt att styrka utförandet.</li>
<li><strong>Oåtgärdade brister.</strong> Många små fel kan sänka intrycket även om de inte hindrar godkännande.</li>
<li><strong>Otydligt om garantitiden.</strong> Ha koll på när den börjar och vad som gäller vid garantibesiktning.</li>
<li><strong>Glömma ÄTA.</strong> Se till att godkända ÄTA är dokumenterade och fakturerade.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Vem utför slutbesiktningen?</h3>
<p>En oberoende besiktningsman med sakkunskap om entreprenadjuridik och byggteknik.</p>
<h3>Vad händer om det finns fel?</h3>
<p>Fel av mindre betydelse i begränsad omfattning hindrar inte godkännande – de noteras för åtgärd. Väsentliga fel kan leda till att entreprenaden inte godkänns.</p>
<h3>När börjar garantitiden?</h3>
<p>När entreprenaden godkänns vid slutbesiktningen. Enligt AB 04 är den fem år för arbetet och två år för material; ansvarstiden är tio år.</p>

<h2>Kom igång</h2>
<p>Gå in i slutbesiktningen med ordning på dokumentationen. <a href="/sv/blog/egenkontroll">Läs om egenkontroll</a>, för <a href="/sv/blog/byggdagbok">byggdagbok</a> i ByggExp eller <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06</a> · <a href="/sv/blog/egenkontroll">Egenkontroll</a> · <a href="/sv/blog/byggdagbok">Byggdagbok</a></p>
`.trim();

const SLUTBESIKTNING: BlogPost = {
  _id: 'code-slutbesiktning',
  title: 'Slutbesiktning enligt AB 04 – så går den till',
  slug: 'slutbesiktning',
  locale: 'sv',
  excerpt:
    'Hur en slutbesiktning enligt AB 04 kap 7 går till: besiktningsmannens roll, när entreprenaden godkänns, när garantitiden börjar och hur du förbereder dig.',
  tag: 'Entreprenadjuridik',
  coverImageUrl: '/landing/features/2uppgift.webp',
  contentHtml: SLUTBESIKTNING_HTML,
  seoTitle: 'Slutbesiktning enligt AB 04 – godkännande & garantitid | ByggExp',
  seoDescription:
    'Slutbesiktning enligt AB 04 kap 7: besiktningsman, godkännande (fel av mindre betydelse hindrar inte), när garantitiden börjar och hur du förbereder dig.',
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T18:00:00.000Z',
  createdAt: '2026-08-12T18:00:00.000Z',
  updatedAt: '2026-08-12T18:00:00.000Z',
};

const MUNTLIGT_HTML = `
<p>Du tog jobbet på ett handslag, priset nickades igenom över en kaffe och ändringarna löste ni på plats. Allt fungerade – ända tills fakturan bestreds. Muntliga avtal är fullt bindande i Sverige, men den som litar på minnet i stället för på papper har oftast redan förlorat innan tvisten börjat. Problemet är sällan att avtalet inte gäller. Problemet är att du inte kan bevisa vad ni kom överens om.</p>

<p>Den här artikeln ger dig en konkret metod för att göra dig till den part som faktiskt kan bevisa sin sak: en spårbar offert och en skriftlig ÄTA-hantering. Börja med att bygga jobbets grund i <a href="/sv/verktyg/offert-mall">vår gratis offertmall &rarr;</a>.</p>

<h2>Vad lagen faktiskt säger om muntliga avtal</h2>
<p>Avtalslagen (1915:218) 1 § ställer inget krav på skriftlig form. Ett avtal uppstår när ett anbud möter en accept – muntligt, skriftligt eller genom konkludent handlande, det vill säga att parterna agerar som om ett avtal finns. Formfrihet är huvudregel. Ett handslag på en byggarbetsplats är alltså lika juridiskt giltigt som ett femtiosidigt kontrakt.</p>
<p>Det betyder att giltigheten nästan aldrig är stridsfrågan i en tvist. Ingen motpart kommer långt med att hävda att ett muntligt avtal "inte räknas". Slaget står om något helt annat: vad som faktiskt sades.</p>

<h2>Bevisbördan – den verkliga fällan</h2>
<p>Den part som påstår att ett avtal har ingåtts, eller att ett visst pris eller villkor gäller, har bevisbördan för det. Utan skriftlig dokumentation står ord mot ord, och då måste beviset byggas av vittnen, efterföljande sms och mejl, samt parternas faktiska agerande. Utgången i en tvist avgörs i praktiken av vad som kan bevisas – inte av vad som är sant.</p>
<p>I B2B är läget kärvare än många tror. Mellan näringsidkare finns inget konsumentskydd att luta sig mot. Domstolen förutsätter att två företag har jämbördig kunskap och resurser, och tolkar därför inte automatiskt oklarheter till den svagares fördel så som sker i konsumentförhållanden. Är du hantverkare eller underentreprenör och tvistar mot en beställare får du ingen rabatt för att du hade bråttom och litade på ett muntligt löfte.</p>

<h2>ÄTA-arbeten och skriftlighetskravet</h2>
<p>Arbetar du under AB 04 eller ABT 06 skärps kraven ytterligare. Enligt kap 2 § 6 ska föreskrivna ÄTA-arbeten – ändrings-, tilläggs- och avgående arbeten – beställas skriftligen. Kravet anses uppfyllt om beställaren överlämnar en ritning eller annan handling som innefattar ÄTA-arbetet. Utan uppfyllt formkrav får du som entreprenör i princip ingen ersättning, oavsett hur uppenbart det är att arbetet utfördes och beställdes muntligt.</p>
<p>Likställda ÄTA-arbeten regleras i kap 2 § 7. Här krävs ingen skriftlig förhandsbeställning, men du måste utan dröjsmål underrätta beställaren och inhämta dennes syn – annars riskerar du ersättningsrätten. Underrättelsen sker enligt avtal ofta skriftligen, vilket i praktiken återför dig till papperet.</p>
<p>Det finns ett undantag: du förlorar inte rätten till betalt om påföljden skulle vara oskälig. Det kan gälla när beställaren gav muntlig order, deltog i planeringen eller lämnade synpunkter på utförandet, eller när ni över tid konsekvent hanterat ändringar informellt så att skriftkravet anses avtalat bort. Men detta är osäker mark. Att medvetet strunta i skriftlig ÄTA och hoppas på oskälighetsundantaget är en strategi för att förlora, inte för att få betalt. Läs mer i vår genomgång av <a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a>.</p>

<h2>Konsumentjobb kräver ännu mer</h2>
<p>Utför du arbete åt en privatperson gäller konsumenttjänstlagen (1985:716). Tilläggsarbete regleras i 8 §: du måste underrätta konsumenten och begära anvisningar innan du utför tilläggsarbetet. Går kunden inte att nå inom rimlig tid ska arbetet i regel avbrytas. Har du lämnat ett ungefärligt pris får det överskridas med högst 15 %; är fast pris avtalat gäller det priset punkt.</p>
<p>Vid småhusentreprenad – ny- och tillbyggnad – vänds dessutom bevisbördan de första två åren (fel som visar sig inom två år antas ha funnits från början). Uppstår fel är det du som entreprenör som måste visa att felet inte beror på dig. Konsumentverket rekommenderar skriftligt avtal som dokumenterar pris, arbetets omfattning och färdigställandetid, just för att undvika den situation där ord står mot ord.</p>

<h2>Tidsgränsen du glömmer – preskription</h2>
<p>En obetald fordran efter ett muntligt avtal preskriberas normalt tio år efter tillkomsten enligt preskriptionslagen (1981:130) 2 §. Mot en konsument är tiden tre år. Preskriptionen kan avbrytas genom att gäldenären erkänner skulden eller genom ett krav från dig som borgenär – men ett muntligt krav är svårt att bevisa i efterhand. Skickar du en betalningspåminnelse per mejl har du både avbrutit preskriptionen och skapat ett spårbart bevis på att du gjort det. Ännu en anledning att hålla allt skriftligt.</p>

<h2>Så säkrar du skriftligt och spårbart bevis</h2>
<p>Metoden är inte krånglig – den är en vana. Gör så här på varje jobb:</p>
<ol>
<li><strong>Skriftlig offert först.</strong> Ange omfattning, pris eller prismodell och tidplan innan arbetet börjar. En signerad offert är ditt grundbevis. Se vår guide för att <a href="/sv/blog/skriva-offert">skriva offert</a>.</li>
<li><strong>Bekräfta muntliga överenskommelser direkt.</strong> Kom ni överens på plats? Skicka ett sms eller mejl samma dag: "Bekräftar att vi kom överens om X till priset Y." Tystnad från motparten blir då ett bevis i sig.</li>
<li><strong>ÄTA alltid skriftligt innan arbetet påbörjas.</strong> Med tydlig benämning, mängd och á-pris. Bygg dem i <a href="/sv/verktyg/ata-mall">vår ÄTA-mall</a> så att inget faller mellan stolarna.</li>
<li><strong>Tidsstämpla och spåra.</strong> Signerad offert, daterade ändringar och en löpande ändringslogg visar inte bara vad ni kom överens om, utan även när.</li>
<li><strong>Spara all korrespondens.</strong> Mejl, sms och bilder samlade på ett ställe. Behåll underlaget i minst sju år.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp bygger den här disciplinen in i själva flödet. Du skapar en offert med omfattning, pris och tidplan, skickar den för digital signering och får en tidsstämplad bekräftelse på vad kunden godkänt. När ändringar dyker upp registrerar du dem som ÄTA innan arbetet startar, med benämning, mängd och á-pris kopplat till projektet. All korrespondens och alla versioner samlas på ett ställe, så att du vid en eventuell tvist inte behöver leta i mejlkorgen – beviset finns redan där, spårbart och daterat. Verktyget avgör förstås inte tvisten åt dig, men det gör dig till den part som faktiskt kan visa vad som avtalats.</p>

<h2>Vanliga frågor</h2>
<h3>Är ett muntligt avtal bindande i Sverige?</h3>
<p>Ja. Avtalslagen (1915:218) 1 § kräver ingen skriftlig form – ett avtal uppstår när anbud möter accept. Ett muntligt avtal är alltså lika bindande som ett skriftligt. Problemet är inte giltigheten utan att bevisa vad som avtalades om det blir tvist.</p>
<h3>Vem har bevisbördan om vi bara kom överens muntligt?</h3>
<p>Den som påstår att ett avtal eller ett visst villkor gäller måste bevisa det. Utan skriftlig dokumentation byggs beviset av vittnen, sms, mejl och parternas faktiska agerande. I B2B finns inget konsumentskydd som väger till din fördel, vilket gör dokumentationen avgörande.</p>
<h3>Måste ÄTA-arbeten beställas skriftligt?</h3>
<p>Under AB 04 och ABT 06 kap 2 § 6 ska föreskrivna ÄTA beställas skriftligen, annars får du i princip ingen ersättning. Likställda ÄTA enligt kap 2 § 7 kräver ingen förhandsbeställning, men du måste underrätta beställaren utan dröjsmål. Håll allt skriftligt för säkerhets skull.</p>
<h3>Hur länge kan jag kräva betalt efter ett muntligt avtal?</h3>
<p>En fordran preskriberas normalt tio år efter tillkomsten enligt preskriptionslagen (1981:130) 2 §, men mot en konsument är tiden tre år. Preskriptionen kan avbrytas med ett krav – skicka det skriftligt, eftersom ett muntligt krav är svårt att bevisa.</p>

<h2>Kom igång</h2>
<p>Sluta lita på minnet och börja bygga bevis. Skapa jobbets grund i <a href="/sv/verktyg/offert-mall">offertmallen</a> och håll ändringar i ordning med <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a>. Vill du se hur hela flödet hänger ihop i praktiken? <a href="/sv/contact">Boka en demo</a> så visar vi hur du får spårbart bevis på köpet.</p>

<p>Relaterat: <a href="/sv/blog/ata-arbeten">ÄTA-arbeten – så hanterar du ändringar rätt</a> och <a href="/sv/blog/skriva-offert">Så skriver du en offert som håller</a>.</p>
`.trim();

const MUNTLIGT: BlogPost = {
  _id: "code-"+"muntligt-avtal-sakra-bevis",
  title: "Muntligt avtal gäller – men det kan bli din dyraste tvist",
  slug: "muntligt-avtal-sakra-bevis",
  locale: "sv",
  excerpt: "Handslaget håller juridiskt, men i en tvist förlorar den som inte kan bevisa vad som sades – så säkrar du spårbart bevis med offert och ÄTA.",
  tag: "Avtal",
  coverImageUrl: "/landing/verktyg/offert-preview.webp",
  contentHtml: MUNTLIGT_HTML,
  seoTitle: "Muntligt avtal & tvist | ByggExp",
  seoDescription: "Muntligt avtal med hantverkare är bindande – men bevisbördan sänker dig i tvist. Så säkrar du spårbart skriftligt bevis med offert och ÄTA.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/offert-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-18T12:00:00.000Z",
  createdAt: "2026-08-18T12:00:00.000Z",
  updatedAt: "2026-08-18T12:00:00.000Z",
};

const GARANTI_HTML = `
<p>Många entreprenörer tror att ansvaret tar slut när garantitiden gått ut. Det är fel. AB 04 binder dig i tio år räknat från godkänd slutbesiktning, och det som ändras efter garantin är inte om du ansvarar - utan vad du ansvarar för och vem som ska bevisa vad. Här reder vi ut skillnaden mellan garantitid och ansvarstid, och vad väsentlighets- och vårdslöshetskravet betyder när garantin väl har löpt ut.</p>

<p>Ordning och dokumentation är din bästa försäkring hela vägen - använd <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a> för att visa att arbetet utförts fackmässigt om ett fel skulle dyka upp flera år senare.</p>

<h2>Två tidsbegrepp som blandas ihop - garantitid ligger inuti ansvarstiden</h2>
<p>Det första du behöver ha klart för dig är att garantitid och ansvarstid inte är två alternativ. Garantitiden är den första delen av ansvarstiden.</p>
<p>Ansvarstiden enligt AB 04 är tio år, räknat från entreprenadens godkännande vid slutbesiktningen. De tio åren motsvarar den allmänna preskriptionstiden. Ansvarstiden inleds med garantitiden och löper sedan vidare fram till år tio. När de tio åren har gått är du helt fri från ansvar - även för väsentliga fel som orsakats av vårdslöshet.</p>

<h2>Garantitiden: 5 år för arbetet, 2 år för material</h2>
<p>Som huvudregel är garantitiden i AB 04 fem år för entreprenörens arbetsprestation och två år för material och varor (kap. 4 § 7). Att materialet har kortare garanti beror på att leverantörernas garantier ofta är kortare - det är alltså en medveten uppdelning.</p>
<p>Under garantitiden gäller ett så kallat presumtionsansvar med omvänd bevisbörda (kap. 5 § 5). Framträder ett fel förutsätts det bero på dig. Vill du slippa avhjälpa måste du bevisa att felet inte har orsakats av dig - exempelvis genom beställarens felaktiga skötsel, normalt slitage eller olyckshändelse. Det är en tung börda, och det är därför garantitiden är den period då du oftast får stå för avhjälpandet.</p>

<h2>Efter garantin - men inom ansvarstiden</h2>
<p>När garantitiden löpt ut vänder allt. Nu ansvarar du enligt kap. 5 § 6 bara för fel som är <strong>väsentliga</strong> och som dessutom visas ha sin grund i din <strong>vårdslöshet</strong>. Bevisbördan flyttas dessutom över till beställaren - det är alltså beställaren som måste visa både att felet är väsentligt och att det beror på att du varit vårdslös.</p>
<p>Den kvarvarande ansvarstiden är resten av tioårsperioden: ytterligare fem år för arbetsprestationen (5 + 5 = 10) och ytterligare åtta år för material och varor (2 + 8 = 10). Ett materialfel som visar sig år sju kan alltså fortfarande vara ditt ansvar - men bara om det är väsentligt och beror på vårdslöshet.</p>

<h2>När är felet "väsentligt"?</h2>
<p>Begreppet väsentligt fel är inte definierat i själva kontraktstexten, men kommentaren till kap. 5 § 6 ger vägledning. Ett fel kan bedömas som väsentligt om det:</p>
<ul>
<li>medför stora kostnader att avhjälpa,</li>
<li>hindrar den avsedda användningen av byggnaden,</li>
<li>påverkar byggnadens goda bestånd,</li>
<li>innebär avbrott i tekniska system - dock inte kortvariga eller återkommande avbrott,</li>
<li>är av stor omfattning,</li>
<li>utgörs av återkommande likartade smärre fel, eller</li>
<li>medför fara för hälsa eller säkerhet.</li>
</ul>
<p>Motsatsvis faller smärre fel och rena utseendefel normalt utanför ansvaret efter garantitiden - särskilt sådant som kan åtgärdas med relativt enkla medel och utan att din fackkunskap krävs.</p>

<h2>När är du "vårdslös"?</h2>
<p>Vårdslöshet bedöms mot kravet på fackmässighet. Har du frångått beställarens anvisningar eller avvikit från vad som är fackmässigt utförande? Då måste du kunna visa godtagbara skäl för avvikelsen för att undgå ansvar. Kan du inte det, riskerar avvikelsen att bedömas som vårdslös.</p>
<p>Vägledande praxis från Högsta domstolen är NJA 1992 s. 130 (ett nedrasat innertak) samt de uppmärksammade fallen om enstegstätade fasader, NJA 2015 s. 110 och NJA 2015 s. 1040. Fasadfallen visar hur en metod som var vanlig i branschen ändå kunde bedömas som ett fel när den ledde till fuktskador - en påminnelse om att "alla gjorde så" inte automatiskt friar dig.</p>

<h2>AB 04 vs ABT 06 - kort jämförelse</h2>
<p>Vid totalentreprenad enligt ABT 06 gäller samma tioåriga ansvarstid och samma väsentlighets- och vårdslöshetskrav i kap. 5 § 6. Skillnaden ligger i materialgarantin: här är garantitiden fem år för entreprenaden och två år för material eller vara som beställaren särskilt har föreskrivit, alltså ett bestämt fabrikat. Vill du gå djupare i skillnaderna mellan avtalen, läs <a href="/sv/blog/ab-04-och-abt-06">vår genomgång av AB 04 och ABT 06</a>.</p>

<h2>Praktiska råd</h2>
<ul>
<li>Genomför garantibesiktningen i tid - det är där fel enklast fångas medan omvänd bevisbörda fortfarande gäller till beställarens fördel.</li>
<li>Vid fel som beställaren påtalar efter garantitiden bör en särskild besiktning begäras, och du som entreprenör ska kallas så att du kan delta.</li>
<li>Dokumentera fackmässighet och de anvisningar du fått löpande under projektet. Det är detta underlag som avgör vårdslöshetsfrågan år senare.</li>
<li>Överväg att särreglera väsentlighetskravet i kontraktet - till exempel att ett fel anses väsentligt först om avhjälpandekostnaden överstiger ett bestämt belopp, och att flera likartade fel räknas som ett.</li>
<li>Notera att beställaren i vissa fall kan hålla inne del av entreprenadsumman som säkerhet enligt kap. 6 § 16, med skriftligt redovisade skäl.</li>
</ul>
<p>Förväxla inte heller AB 04 med konsumentreglerna. Arbetar du mot en privatperson gäller konsumenttjänstlagen, inte den här ansvarstrappan.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp löser inte juridiken åt dig, men det ger dig underlaget du behöver den dag ett fel ifrågasätts. I plattformen samlar du egenkontroller och byggdagbok knutna till rätt projekt, så att dokumentationen finns kvar långt efter slutbesiktningen - hela ansvarstiden ut.</p>
<p>Med <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> visar du att arbetet utförts fackmässigt, och med <a href="/sv/verktyg/byggdagbok-mall">byggdagboks-mallen</a> fångar du löpande vilka anvisningar du fått och vilka val som gjordes på plats. Just den kombinationen - fackmässighet plus dokumenterade anvisningar - är avgörande om beställaren efter garantin försöker visa att ett fel beror på din vårdslöshet.</p>

<h2>Vanliga frågor</h2>
<h3>Slutar mitt ansvar när garantitiden gått ut?</h3>
<p>Nej. Garantitiden är bara den första delen av ansvarstiden. Efter garantin ansvarar du fortfarande fram till år tio, men enbart för väsentliga fel som beror på din vårdslöshet - och då är det beställaren som har bevisbördan.</p>

<h3>Vad är skillnaden i bevisbörda före och efter garantitiden?</h3>
<p>Under garantitiden gäller omvänd bevisbörda: felet förutsätts bero på dig och du måste bevisa motsatsen för att slippa avhjälpa. Efter garantitiden vänder det - beställaren måste bevisa både att felet är väsentligt och att det orsakats av din vårdslöshet.</p>

<h3>Varför har material bara två års garanti men arbetet fem?</h3>
<p>Uppdelningen följer AB 04 kap. 4 § 7 och speglar att leverantörernas materialgarantier ofta är kortare. Men ansvarstiden är densamma - tio år totalt. Efter garantin kvarstår ansvaret i åtta år för material och fem år för arbetsprestationen, om felet är väsentligt och vårdslöst.</p>

<h3>Kan vi bestämma själva vad som räknas som väsentligt fel?</h3>
<p>Ja, parterna kan särreglera väsentlighetskravet i kontraktet. Ni kan till exempel avtala att ett fel anses väsentligt först när avhjälpandekostnaden överstiger ett visst belopp, och att flera likartade fel ska räknas som ett. Det ger tydligare spelregler för tiden efter garantin.</p>

<h2>Kom igång</h2>
<p>Bygg upp dokumentationen som håller hela ansvarstiden ut - börja med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a> och komplettera med <a href="/sv/verktyg/byggdagbok-mall">byggdagboks-mallen</a>. Vill du se hur allt hänger ihop projekt för projekt, <a href="/sv/contact">boka en demo</a> så visar vi dig.</p>

<p>Relaterat: <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06 - skillnaderna</a> och <a href="/sv/blog/slutbesiktning">slutbesiktning steg för steg</a>.</p>
`.trim();

const GARANTI: BlogPost = {
  _id: "code-"+"garantitid-ansvarstid-ab-04",
  title: "Garantitid och ansvarstid i AB 04 - vad du ansvarar för i 5 och 10 år",
  slug: "garantitid-ansvarstid-ab-04",
  locale: "sv",
  excerpt: "Många tror att ansvaret slutar när garantin gått ut - men AB 04 binder dig i tio år. Så skiljer sig garantitid och ansvarstid i praktiken.",
  tag: "Entreprenadjuridik",
  coverImageUrl: "/landing/verktyg/byggdagbok-preview.webp",
  contentHtml: GARANTI_HTML,
  seoTitle: "Garantitid & ansvarstid AB 04 | ByggExp",
  seoDescription: "Skillnaden mellan garantitid och ansvarstid i AB 04: 5 år arbete, 2 år material och 10 års ansvar. Så funkar väsentlighets- och vårdslöshetskravet.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/byggdagbok-preview.webp`,
  canonicalUrl: "",
  noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T14:30:00.000Z", createdAt: "2026-08-18T14:30:00.000Z", updatedAt: "2026-08-18T14:30:00.000Z",
};

const ABS18_HTML = `
<p>ABS 18 och Hantverkarformuläret 17 är två standardavtal som ofta blandas ihop. Båda är framtagna gemensamt av Byggföretagen (tidigare Sveriges Byggindustrier), Villaägarnas Riksförbund och Konsumentverket, och båda används när du som näringsidkare arbetar åt en konsument. Men de täcker olika typer av jobb. Väljer du fel blankett riskerar du ett svagare bevisläge, sämre skydd och otydliga regler om besiktning och betalning. Tesen är enkel: det är <strong>arbetets art</strong> som avgör valet, inte jobbets storlek eller pris. En dyr köksrenovering är fortfarande en renovering, och en liten tillbyggnad är fortfarande en småhusentreprenad.</p>

<p>Oavsett vilket avtal som gäller behöver du en tydlig offert som grund. Börja med <a href="/sv/verktyg/offert-mall">vår gratis offertmall -&gt;</a> och bygg vidare på rätt standardblankett därifrån.</p>
<figure class="article-diagram"><img src="/landing/diagrams/abs-hantverkarformularet.webp" alt="Diagram: ABS 18 för nybyggnad/tillbyggnad av småhus (med slutbesiktning och färdigställandeskydd) vs Hantverkarformuläret 17 för reparation/ombyggnad av befintligt hus" width="720" height="380" loading="lazy"><figcaption>Arbetets art avgör: nybyggnad eller tillbyggnad → ABS 18; reparation eller ombyggnad → Hantverkarformuläret 17.</figcaption></figure>

<h2>Grundregeln på 30 sekunder</h2>
<p>Ställ dig en enda fråga innan du skriver avtal: bygger jag nytt eller bygger jag om något som redan finns?</p>
<ul>
<li><strong>Uppför eller bygger till</strong> ett en- eller tvåbostadshus -&gt; ABS 18 tillsammans med Entreprenadkontrakt (ABS 18).</li>
<li><strong>Reparerar eller bygger om</strong> något befintligt (badrum, kök, tak, fönster, dränering) -&gt; Hantverkarformuläret 17.</li>
</ul>
<p>Det är hela beslutsregeln. Allt annat i den här artikeln är förklaringar till varför gränsen ligger just där och vad den får för konsekvenser.</p>

<h2>Konsumenttjänstlagen styr allt</h2>
<p>Båda avtalen vilar på konsumenttjänstlagen (1985:716). Lagen är tvingande till konsumentens fördel. Enligt § 3 är avtalsvillkor som är sämre för konsumenten än lagen helt enkelt utan verkan. Varken ABS 18 eller Hantverkarformuläret 17 kan avtala bort detta, de bygger vidare på lagen och fyller ut den med praktiska rutiner.</p>
<p>Skillnaden mellan avtalen speglar en skillnad i själva lagen. Paragraferna §§ 51–61 innehåller särskilda tvingande regler för <em>småhusentreprenad</em>, definierat som uppförande eller tillbyggnad av en- eller tvåbostadshus. Det är exakt det område ABS 18 täcker. Dessa extra regler gäller <strong>inte</strong> för rena reparations- och ombyggnadsjobb på ett befintligt hus. Därför behövs två olika avtal: ett för det tyngre regelverket, ett för det enklare.</p>

<h2>När du ska använda ABS 18</h2>
<p>Använd ABS 18 när du uppför ett nytt småhus eller bygger till ett befintligt en- eller tvåbostadshus. Avtalet fungerar tillsammans med blanketten Entreprenadkontrakt (ABS 18) och drar med sig hela småhusregimen i §§ 51–61. Det innebär bland annat:</p>
<ul>
<li><strong>Slutbesiktning.</strong> Regleras i §§ 53–57 och kan begäras av båda parter. Den är en formell del av entreprenaden, inte en frivillig kontroll.</li>
<li><strong>Innehållen betalning.</strong> Konsumenten får hålla inne upp till 10 % av det avtalade priset tills en godkänd slutbesiktning har genomförts (§ 52). Planera din likviditet efter det.</li>
<li><strong>Tvåårspresumtion.</strong> Ett fel som visar sig inom två år efter godkänd slutbesiktning presumeras vara ditt ansvar. Bevisbördan ligger alltså på dig som entreprenör.</li>
<li><strong>Ändrings- och tilläggsarbeten.</strong> ABS 18 har en egen ÄTA-blankett. Dokumentera varje avvikelse skriftligt löpande, inte i efterhand.</li>
</ul>

<h2>När du ska använda Hantverkarformuläret 17</h2>
<p>Använd Hantverkarformuläret 17 för reparations- och ombyggnadsarbeten på ett befintligt hus. Typiska exempel är badrumsrenovering, köksbyte, takomläggning, fönsterbyte, dränering och installation av värmepump. Formuläret är enklare än ABS 18: du kan avtala om löpande räkning eller fast pris, och det finns en separat ÄTA-blankett för tilläggen.</p>
<p>Att avtalet är enklare betyder inte att skyddet försvinner. Det finns ingen obligatorisk slutbesiktning, men konsumenttjänstlagens allmänna regler gäller ändå fullt ut, inklusive reklamationsreglerna. Konsumenten måste reklamera inom skälig tid, alltid minst två månader efter att felet upptäckts. Den yttre gränsen är tre år, men för arbete på fast egendom (byggnader och anläggningar) gäller tio år. Spara därför din dokumentation länge, oavsett vilket avtal du använt.</p>

<h2>Färdigställandeskydd – den missade pusselbiten</h2>
<p>Vid ABS 18-jobb finns ett krav som lätt glöms bort: färdigställandeskydd enligt lag (2014:227). Det är en bankgaranti eller försäkring som är <strong>obligatorisk vid nybyggnad</strong> av ett en- eller tvåbostadshus åt en konsument. Vid tillbyggnad och andra bygglovs- eller anmälningspliktiga arbeten krävs det om byggnadsnämnden bedömer att det behövs. Är arbetet varken bygglovs- eller anmälningspliktigt krävs det normalt inte, vilket är fallet vid de flesta rena reparationer under Hantverkarformuläret 17.</p>
<p>Skyddet ska täcka rimlig extra kostnad för att färdigställa arbetet om konsumenten häver på grund av din försening, plus kostnad för att avhjälpa fel som noterats vid slutbesiktning och skador av sådana fel. Beloppet uppgår vanligtvis till minst 10 % av kontraktssumman, och ingen orimlig självrisk får läggas på konsumenten. I praktiken krävs skyddet ofta för att få startbesked, så lös det tidigt.</p>

<h2>Jämförelse: ABS 18 vs Hantverkarformuläret 17</h2>
<div class="article-table"><table>
<thead><tr><th>&nbsp;</th><th>ABS 18</th><th>Hantverkarformuläret 17</th></tr></thead>
<tbody>
<tr><td><strong>Arbetets art</strong></td><td>Nybyggnad/tillbyggnad av småhus</td><td>Reparation/ombyggnad av befintligt</td></tr>
<tr><td><strong>Lagstöd</strong></td><td>KtjL §§ 51–61 utöver allmänna reglerna</td><td>KtjL:s allmänna regler</td></tr>
<tr><td><strong>Kontraktsblankett</strong></td><td>Entreprenadkontrakt (ABS 18)</td><td>Formuläret självt</td></tr>
<tr><td><strong>Slutbesiktning</strong></td><td>Reglerad, kan krävas av båda parter</td><td>Ingen obligatorisk</td></tr>
<tr><td><strong>Innehållen betalning</strong></td><td>Upp till 10 % till godkänd besiktning</td><td>Allmänna regler vid fel</td></tr>
<tr><td><strong>Färdigställandeskydd</strong></td><td>Obligatoriskt vid nybyggnad</td><td>Normalt inte</td></tr>
<tr><td><strong>ÄTA</strong></td><td colspan="2">Båda har egen ÄTA-blankett</td></tr>
</tbody>
</table></div>

<h2>Vilken version gäller – 14, 17, 18 eller något annat?</h2>
<p>Formulären revideras då och då, och gamla versionsnummer lever kvar i sökningar och gamla pärmar. Så här ligger det till:</p>
<ul>
<li><strong>Hantverkarformuläret 17</strong> är den aktuella versionen (utgiven 2017) och ersatte Hantverkarformuläret 14. Söker du på "Hantverkarformuläret 14", "19", "2021" eller "2022" är det i praktiken 17 du ska använda – någon nyare officiell utgåva har inte ersatt den.</li>
<li><strong>ABS 18</strong> är den aktuella versionen för småhusentreprenad och ersatte ABS 09.</li>
<li>Använd alltid den senaste utgåvan. Ett gammalt formulär kan sakna dagens hänvisningar till konsumenttjänstlagen och ge ett svagare avtal.</li>
</ul>
<p>Kontrollera alltid att du har den senaste blanketten hos utgivaren innan du skriver avtal – utgåvor kan uppdateras.</p>

<h2>Var hittar du formuläret (PDF)?</h2>
<p>Hantverkarformuläret 17 och ABS 18 är framtagna gemensamt av Konsumentverket, Byggföretagen och Villaägarnas Riksförbund. Du hämtar den officiella blanketten (PDF) hos någon av utgivarna – i första hand Konsumentverket eller Villaägarna. Ladda inte ner en gammal kopia från en slumpmässig sida; versionen och villkoren kan vara inaktuella.</p>
<p>Själva standardblanketten fyller du i som den är – men <strong>underlaget runt avtalet</strong> gör du enklare digitalt: offert, ÄTA och dokumentation. Bygg offerten i <a href="/sv/verktyg/offert-mall">offertmallen</a> och håll ordning på tilläggen med <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a>, så att allt är spårbart om något ifrågasätts.</p>

<h2>5 vanliga misstag och hur du undviker dem</h2>
<ol>
<li><strong>Väljer avtal efter pris i stället för arbetets art.</strong> En stor renovering är inte en småhusentreprenad. Följ beslutsregeln.</li>
<li><strong>Glömmer Entreprenadkontrakt (ABS 18).</strong> ABS 18 är allmänna bestämmelser och ska kombineras med kontraktsblanketten.</li>
<li><strong>Hoppar över färdigställandeskyddet.</strong> Det kan stoppa startbeskedet vid nybyggnad.</li>
<li><strong>Muntliga ÄTA.</strong> Dokumentera alla ändrings- och tilläggsarbeten skriftligt på ÄTA-blanketten direkt.</li>
<li><strong>Ignorerar slutbesiktningen.</strong> Vid ABS 18 startar tvåårspresumtionen först vid godkänd besiktning, och de sista 10 % kan hållas inne tills dess.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte standardblanketterna från Konsumentverket, Byggföretagen och Villaägarna, men gör underlaget runt dem enkelt och spårbart. Du bygger offerten i <a href="/sv/verktyg/offert-mall">offertmallen</a> och håller sedan ordning på alla ändrings- och tilläggsarbeten med <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a>, så att varje avvikelse finns dokumenterad skriftligt när slutbesiktningen närmar sig. Allt samlas på ett ställe, vilket gör det lättare att visa vad som avtalats om en tvist skulle uppstå. Du fyller fortfarande i rätt standardavtal utifrån arbetets art, men slipper leta i lösa papper.</p>

<h2>Vanliga frågor</h2>
<h3>Kan jag använda Hantverkarformuläret 17 för en tillbyggnad?</h3>
<p>Nej. Tillbyggnad av ett en- eller tvåbostadshus räknas som småhusentreprenad och ska hanteras med ABS 18 tillsammans med Entreprenadkontrakt (ABS 18). Då gäller reglerna i konsumenttjänstlagen §§ 51–61, som inte omfattas av Hantverkarformuläret 17.</p>
<h3>Måste jag ha slutbesiktning vid en badrumsrenovering?</h3>
<p>Nej, det finns ingen lagstadgad slutbesiktning för rena reparations- och ombyggnadsjobb under Hantverkarformuläret 17. Konsumenttjänstlagens allmänna regler om fel och reklamation gäller ändå, så en dokumenterad slutgenomgång med kunden är alltid klok.</p>
<h3>Behöver jag färdigställandeskydd för en köksrenovering?</h3>
<p>Normalt inte. Färdigställandeskydd är obligatoriskt vid nybyggnad av småhus och kan krävas vid tillbyggnad eller anmälningspliktiga arbeten om byggnadsnämnden bedömer det. En vanlig köksrenovering som varken är bygglovs- eller anmälningspliktig omfattas inte.</p>
<h3>Kan avtalet ge kunden sämre villkor än lagen?</h3>
<p>Nej. Konsumenttjänstlagen är tvingande till konsumentens fördel. Enligt § 3 är villkor som är sämre för konsumenten än lagen utan verkan. Både ABS 18 och Hantverkarformuläret 17 bygger på lagen och kan aldrig ge kunden ett svagare skydd än den.</p>
<h3>Vilken är den senaste versionen av Hantverkarformuläret?</h3>
<p>Hantverkarformuläret 17 (från 2017) är den aktuella versionen och ersatte Hantverkarformuläret 14. Söker du på 19, 2021 eller 2022 är det fortfarande 17 som gäller – kontrollera alltid senaste utgåvan hos utgivaren.</p>
<h3>Var laddar jag ner Hantverkarformuläret 17 som PDF?</h3>
<p>Hos utgivarna – Konsumentverket, Byggföretagen eller Villaägarnas Riksförbund. Undvik gamla kopior från slumpmässiga sidor, eftersom versionen och villkoren kan vara inaktuella.</p>
<h3>Är formuläret gratis att använda?</h3>
<p>Ja, standardblanketterna är framtagna för att användas av näringsidkare mot konsument. Du hämtar dem hos utgivarna och fyller i dem för ditt jobb.</p>

<h2>Kom igång</h2>
<p>Välj avtal efter arbetets art, hämta rätt standardblankett från Konsumentverket, Byggföretagen eller Villaägarna, och bygg ditt underlag i <a href="/sv/verktyg/offert-mall">offertmallen</a>. Vill du se hur offert, ÄTA och dokumentation hänger ihop i praktiken? <a href="/sv/contact">Boka en demo här -&gt;</a></p>
<p>Relaterat: <a href="/sv/blog/skriva-offert">Så skriver du en offert som håller</a> och <a href="/sv/blog/muntligt-avtal-sakra-bevis">Muntligt avtal – så säkrar du bevis</a>.</p>
`.trim();

const ABS18: BlogPost = {
  _id: "code-"+"abs-18-hantverkarformularet-17",
  title: "ABS 18 eller Hantverkarformuläret 17? Så väljer du rätt konsumentavtal",
  slug: "abs-18-hantverkarformularet-17",
  locale: "sv",
  excerpt: "Fel konsumentavtal ger dig svagare bevisläge och sämre skydd. Så avgör arbetets art om du ska använda ABS 18 eller Hantverkarformuläret 17.",
  tag: "Avtal",
  coverImageUrl: "/landing/verktyg/offert-preview.webp",
  contentHtml: ABS18_HTML,
  seoTitle: "ABS 18 vs Hantverkarformuläret 17 | ByggExp",
  seoDescription: "ABS 18 eller Hantverkarformuläret 17? Bygger du nytt eller reparerar befintligt avgör vilket konsumentavtal du ska använda mot privatkund. Så väljer du rätt.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/offert-preview.webp`,
  canonicalUrl: "",
  noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T15:00:00.000Z", createdAt: "2026-08-18T15:00:00.000Z", updatedAt: "2026-08-18T15:00:00.000Z",
};

const A_REKLAMATION_HANTVERKSTJANST_FRISTER_HTML = `
<p>Varje firma får förr eller senare en reklamation. Skillnaden mellan en billig eftermiddags omjobb och en dyr, utdragen tvist ligger nästan alltid i om du kan reglerna eller inte. En kund som ringer och är missnöjd är inte automatiskt ett förlorat ärende – tvärtom har du starkare rättigheter än de flesta hantverkare tror. Efter den här artikeln kan du de tre fristerna kunden är bunden av, och exakt hur du behåller rätten att själv rätta felet i stället för att betala för en annan firmas arbete.</p>

<p>Ett tydligt underlag för det avtalade arbetet gör reklamationer lättare att bemöta – börja med <a href="/sv/verktyg/ata-mall">vår gratis ÄTA-mall &rarr;</a> så att det alltid går att visa vad som faktiskt beställts och utförts.</p>

<h2>Rätt lag: konsumenttjänstlagen, inte konsumentköplagen</h2>
<p>För arbete åt privatpersoner är det <strong>konsumenttjänstlagen (1985:716)</strong>, KtjL, som gäller – inte den nya konsumentköplagen (2022:260). Många blandar ihop dem eftersom köplagen fick nya regler 2022, men den styr varor och köp. Reglerna för tjänster är oförändrade. Reklamerar en kund din snickeri-, måleri- eller installationstjänst är det alltså KtjL:s fristregler som avgör, precis som tidigare.</p>
<p>Ett fel i lagens mening föreligger när arbetet inte är fackmässigt utfört, avviker från vad ni avtalat eller från vad kunden med fog kunnat förvänta sig. Först när ett sådant fel finns – och kunden reklamerar det i rätt tid – aktualiseras påföljder.</p>

<h2>De tre fristerna kunden har på sig</h2>
<p>Kunden är inte fri att klaga hur länge som helst. Tre frister styr, och de arbetar delvis parallellt:</p>
<ul>
<li><strong>Tvåmånadersregeln:</strong> reklamerar kunden inom två månader efter att hen <em>märkt</em> felet, ska reklamationen alltid anses ha skett i rätt tid. Observera att fristen räknas från upptäckt – inte från när arbetet utfördes.</li>
<li><strong>Den absoluta treårsfristen:</strong> reklamation får inte ske senare än tre år efter att uppdraget avslutades, oavsett när felet upptäcks.</li>
<li><strong>Tioårsfristen:</strong> för arbete på mark, byggnader eller annan fast egendom är den yttersta fristen i stället tio år efter avslutat uppdrag. Har du dessutom handlat grovt vårdslöst eller i strid mot tro och heder gäller tio år oavsett tjänsttyp.</li>
</ul>
<p>Alla ytterfrister räknas från <strong>avslutat uppdrag</strong>. Därför är det avgörande att du kan bevisa när arbetet faktiskt slutfördes och överlämnades. En dokumenterad slutbesiktning eller ett kvitterat överlämningsprotokoll är det som senare avgör om en reklamation kom in innan klockan gått ut eller inte.</p>

<h2>18 §: din starkaste sköld är sen reklamation</h2>
<p>Om kunden hör av sig efter att fristen löpt ut förlorar hen rätten att åberopa felet. Det kallas preklusion och regleras i 18 § KtjL. En reklamation som kommer fyra år efter ett avslutat badrumsjobb på fast egendom kan fortfarande gå igenom (tioårsfristen), men ett omålat staket som klagas på efter fyra år gör det inte (treårsfristen har passerat).</p>
<p>Det här är firmans mest värdefulla försvar mot sena krav – men det står och faller med bevisning. Kan du inte visa när uppdraget avslutades kan du heller inte visa att fristen gått ut. Dokumentationen är alltså inte byråkrati, den är din rättssäkerhet.</p>

<h2>Avhjälpanderätten: din rätt att själv rätta felet</h2>
<p>Kommer reklamationen in i rätt tid är nästa fråga vem som ska åtgärda felet. Här ger 20 § KtjL dig en rättighet många missar: <strong>du har rätt att avhjälpa felet själv</strong>, även om kunden inte kräver det. Det är nästan alltid det billigaste alternativet – du använder eget arbete och egna material i stället för att betala en konkurrents faktura plus prisavdrag.</p>
<p>Villkoret är att du, efter att reklamationen kommit fram, <strong>utan uppskov</strong> erbjuder dig att åtgärda felet – och att kunden inte har särskilt skäl att avvisa erbjudandet. &quot;Utan uppskov&quot; tolkas i praktiken som i princip genast. Du får en kort, skälig tid att undersöka vad klagomålet gäller, men ett par veckors tystnad eller ett vagt besked som &quot;vi kommer nog om tre veckor&quot; utan ett konkret erbjudande kan innebära att du tappar rätten att avhjälpa. Då står du plötsligt inför prisavdrag i stället.</p>

<h2>Så skriver du erbjudandet så att det håller</h2>
<p>Snabbhet och skriftlighet är allt. Gör så här när en reklamation kommer in:</p>
<ol>
<li>Bekräfta reklamationen skriftligt samma eller nästa dag – e-post eller sms räcker, men det ska finnas svart på vitt.</li>
<li>Erbjud <strong>uttryckligen</strong> att åtgärda felet. Skriv rakt ut att ni vill komma och rätta det, inte bara att ni &quot;ska titta på det&quot;.</li>
<li>Föreslå en konkret tid inom skälig tid. Avhjälpandet ska ske utan kostnad för kunden.</li>
<li>Spara all korrespondens tillsammans med avtal, ÄTA och slutdokumentation.</li>
</ol>
<p>Undvik samtidigt sådant som ger kunden &quot;särskilt skäl&quot; att neka dig avhjälpandet. Har du visat allvarlig inkompetens, varit störande eller ohederlig, eller på annat sätt åsidosatt kundens intressen så att förtroendet rimligen brustit, kan kunden med rätta säga nej och anlita någon annan. Ett professionellt, snabbt och sakligt bemötande är alltså i sig en del av ditt rättsskydd.</p>

<h2>Vad händer om du missar avhjälpandet – påföljdstrappan</h2>
<p>Påföljderna i KtjL är hierarkiska och kommer i ordning. Kunden kan inte hoppa direkt till prisavdrag eller hävning om du har och utövar din avhjälpanderätt. Ordningen är:</p>
<ol>
<li><strong>Avhjälpande</strong> (20 §) – du rättar felet.</li>
<li><strong>Prisavdrag</strong> (21 §) – om avhjälpande inte sker. Avdraget motsvarar vad det kostar kunden att få felet åtgärdat.</li>
<li><strong>Hävning</strong> (21 § 2 st) – om syftet med tjänsten i huvudsak är förfelat och du insett eller bort inse det. Vid hävning har du inte rätt till betalning för tjänsten.</li>
<li><strong>Skadestånd</strong> – för kundens övriga förluster.</li>
</ol>
<p>Räkna på skillnaden. Att åtgärda en felmonterad list på en timme med eget material kostar dig kanske några hundralappar. Missar du avhjälpandet betalar du i stället en annan firmas fullpris <em>plus</em> ett prisavdrag – lätt tio gånger mer för samma fel.</p>

<h2>Om kunden anlitar någon annan direkt</h2>
<p>Låter kunden en annan firma rätta felet innan du fått chansen, riskerar hen att förlora rätten till ersättning för den kostnaden. Men – och det är viktigt – detta skyddar bara dig om du faktiskt erbjöd avhjälpande utan uppskov. Sitter du tyst i tre veckor och kunden under tiden tröttnar och ringer en konkurrent, står du svagt. Vänd därför regeln till en fast rutin: svara snabbt, alltid, skriftligt. Då är det kunden som tar risken om hen går förbi dig.</p>

<h2>ARN och tvist</h2>
<p>Blir ni oense prövas ärendet i första hand av Allmänna reklamationsnämnden (ARN). Det är gratis för kunden, och besluten är rekommendationer. Seriösa företag följer dem – gör man inte det riskerar man publicering och renomméskada. I ARN, precis som i domstol, avgör dokumentationen. Den som kan visa avtal, avslutsdatum, reklamationsdatum och ett snabbt avhjälpandeerbjudande har övertaget.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att bygga just den dokumentationskedja som fristerna kräver. Du håller avtal, ÄTA-tillägg och överlämning samlade per projekt, med tidsstämplar som visar när uppdraget avslutades – underlaget du behöver för att räkna frister och bevisa preklusion. När en reklamation kommer in har du hela historiken på ett ställe i stället för utspridd i mejl och sms. ByggExp fattar inga juridiska beslut åt dig, men gör det enkelt att svara snabbt och underbyggt – vilket i praktiken är det som skyddar avhjälpanderätten.</p>

<h2>Vanliga frågor</h2>
<h3>Från vilken tidpunkt räknas tvåmånadersfristen?</h3>
<p>Från när kunden märkte, alltså upptäckte, felet – inte från när arbetet utfördes. En reklamation inom två månader från upptäckten anses alltid ha skett i rätt tid, så länge den yttersta fristen (3 eller 10 år) inte passerats.</p>
<h3>Kan kunden kräva prisavdrag direkt utan att låta mig åtgärda?</h3>
<p>Nej, inte om du utnyttjar din avhjälpanderätt. Erbjuder du dig att rätta felet utan uppskov och kunden saknar särskilt skäl att neka, ska avhjälpande ske först. Prisavdrag blir aktuellt först om avhjälpande inte kommer till stånd.</p>
<h3>Vad betyder &quot;utan uppskov&quot; i praktiken?</h3>
<p>I princip genast. Du får en kort, skälig tid att undersöka klagomålet, men bör bekräfta och erbjuda avhjälpande inom dagar, inte veckor. Passivitet eller vaga besked kan göra att du förlorar rätten att själv rätta felet.</p>
<h3>Hur länge kan en kund reklamera arbete på ett hus?</h3>
<p>För arbete på mark, byggnader eller annan fast egendom gäller en yttersta frist på tio år efter avslutat uppdrag. Samma tioårsfrist gäller alla tjänster om du handlat grovt vårdslöst eller i strid mot tro och heder.</p>

<h2>Kom igång</h2>
<p>Börja med att säkra ditt underlag. Med <a href="/sv/verktyg/ata-mall">vår gratis ÄTA-mall</a> dokumenterar du vad som beställts och utförts, vilket gör varje framtida reklamation lättare att bemöta. Vill du se hur ByggExp håller ihop avtal, ÄTA och avslut per projekt? <a href="/sv/contact">Boka en demo &rarr;</a> så visar vi upplägget.</p>

<p>Relaterat: <a href="/sv/blog/slutbesiktning">Slutbesiktning – så dokumenterar du avslutat uppdrag</a>, <a href="/sv/blog/abs-18-hantverkarformularet-17">ABS 18 och Hantverkarformuläret 17</a>, <a href="/sv/blog/garantitid-ansvarstid-ab-04">Garantitid och ansvarstid enligt AB 04</a>.</p>
`;

const A_REKLAMATION_HANTVERKSTJANST_FRISTER: BlogPost = {
  _id: "code-"+"reklamation-hantverkstjanst-frister",
  title: "Reklamation av hantverkstjänst: fristerna din firma måste kunna – och hur du skyddar avhjälpanderätten", slug: "reklamation-hantverkstjanst-frister", locale: "sv",
  excerpt: "Så fungerar reklamationsfristerna i konsumenttjänstlagen och hur du säkrar din rätt att själv rätta felet innan kunden anlitar någon annan.", tag: "Juridik",
  coverImageUrl: "/landing/features/2uppgift.webp", contentHtml: A_REKLAMATION_HANTVERKSTJANST_FRISTER_HTML,
  seoTitle: "Reklamation hantverkstjänst | ByggExp", seoDescription: "Lär dig de tre reklamationsfristerna (2 mån/3 år/10 år) enligt konsumenttjänstlagen och hur du behåller rätten att själv avhjälpa felet.",
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:15:00.000Z", createdAt: "2026-08-18T18:15:00.000Z", updatedAt: "2026-08-18T18:15:00.000Z",
};

const A_OVERLAMNING_RELATIONSHANDLINGAR_HTML = `
<p>Projektet är i mål. Sista skruven är dragen, slutbesiktningen är avklarad och slutfakturan ligger klar. Men är projektet verkligen avslutat? Alltför ofta godkänns slutbesiktningen samtidigt som relationshandlingarna saknas, restpunkterna hänger löst i en oläslig anteckning och drift- och underhållsinstruktionerna aldrig blir levererade. Det är då problemen börjar – för det är just överlämningen som avgör om du får betalt i tid och hur du står dig under de tio år av ansvar som följer. En strukturerad överlämning med en tydlig <strong>överlämning relationshandlingar checklista</strong> är inte pappersexercis, utan ett affärsskydd. Här går vi igenom vad som gäller enligt AB 04 och ABT 06, och hur du håller ordning på restpunkter och procent klart genom hela slutfasen.</p>
<p><a href="/sv/verktyg/restlista-mall">Skapa en restlista/punchlista med vår gratis mall (PDF & Excel) -&gt;</a></p>

<p>Vill du samla handlingar, restpunkter och etappuppföljning på ett ställe? Se hur du strukturerar slutfasen med <a href="/sv/funktioner">funktionerna i ByggExp -&gt;</a>.</p>

<h2>Vad är relationshandlingar – och varför är de din skyldighet?</h2>
<p>Relationshandlingar är den dokumentation som beskriver byggnadsverket <em>som det faktiskt blev byggt</em> – inte som det ritades. Begreppet omfattar flera delar som byggherren och den framtida förvaltningen behöver:</p>
<ul>
<li><strong>Relationsritningar och relationsunderlag</strong> – uppdaterade ritningar som visar utfört arbete. Underlag som entreprenören lämnar märks "Relationsunderlag".</li>
<li><strong>Drift- och underhållsinstruktioner (DoU)</strong> – hur installationer och byggdelar ska skötas.</li>
<li><strong>Produkt- och materialdatablad</strong> för inbyggda produkter.</li>
<li><strong>Egenkontroller och provningsprotokoll</strong> som styrker att arbetet utförts enligt kontrakt.</li>
<li><strong>Utbildningsprotokoll</strong> när förvaltningen ska utbildas i systemen.</li>
</ul>
<p>Enligt AB 04 och ABT 06 ingår relationshandlingar, DoU-instruktioner och utbildning i kontraktsarbetena <strong>när de är föreskrivna</strong> – och de ska levereras till byggherren senast vid slutbesiktningen. Det är alltså inget frivilligt extra du gör om du hinner, utan en del av det du har åtagit dig att prestera.</p>

<h2>AB 04 vs ABT 06 – vem ansvarar för handlingarna?</h2>
<p>Ansvarsfördelningen skiljer sig beroende på entreprenadform, och det påverkar vem som tar fram vad:</p>
<ul>
<li><strong>ABT 06 (totalentreprenad):</strong> Entreprenören ansvarar för projekteringen och därmed ofta för att ta fram fullständiga relationshandlingar. Du äger både lösningen och dokumentationen av den.</li>
<li><strong>AB 04 (utförandeentreprenad):</strong> Byggherren tillhandahåller projekteringen. Entreprenören levererar relationsunderlag för det arbete som faktiskt utförts – alltså avvikelser och justeringar jämfört med de ritningar du fick.</li>
</ul>
<p>Oavsett form är principen densamma: det du byggt ska gå att förstå, drifta och underhålla utifrån de handlingar du lämnar. Läs i kontraktshandlingarna exakt vad som är föreskrivet – där avgörs omfattningen.</p>

<h2>Restlista och slutbesiktning – vad händer med restpunkterna?</h2>
<p>Grundregeln i AB 04 och ABT 06 är att entreprenaden ska godkännas vid slutbesiktningen om den inte har väsentliga fel. Fel av mindre betydelse eller begränsad omfattning får inte hindra godkännande – de noteras i stället på en <strong>restlista</strong> i besiktningsutlåtandet och ska avhjälpas därefter.</p>
<p>Saknade relationshandlingar hindrar därför normalt inte godkännandet i sig – de behandlas oftast som en restpunkt. Men det finns ett viktigt undantag: om de saknade handlingarna gör att byggherren inte kan få slutbesked från kommunen – till exempel handlingar som krävs enligt kontrollplanen och PBL – då kan besiktningsmannen vägra godkännande. Att slarva med dokumentationen kan alltså i värsta fall stoppa hela övertagandet.</p>
<p>Godkänd slutbesiktning är den avgörande juridiska händelsen. Den markerar övertagandet, då byggherren tar över entreprenaden. Från den punkten startar garantitiden och ansvarstiden, din rätt till indexreglering och löpande ersättning upphör, och risken går över på byggherren. Ett godkännandeintyg med bifogad restpunktslista utfärdas.</p>

<h2>Garantitid, ansvarstid och garantibesiktning – därför påverkar överlämningen tio år framåt</h2>
<p>Överlämningen är inte slutet på ditt ansvar – den är starten på det. Med utgångspunkt från godkänd slutbesiktning gäller enligt AB 04 som standard:</p>
<ul>
<li><strong>Garantitid 5 år</strong> för entreprenörens arbetsprestation.</li>
<li><strong>Garantitid 2 år</strong> för material och varor som entreprenören tillhandahållit. (I ABT 06 gäller som standard 5 år för hela entreprenaden inklusive material.)</li>
<li><strong>Ansvarstid 10 år</strong> från godkänd slutbesiktning.</li>
</ul>
<p>Under garantitiden ansvarar du för fel som framträder, med omvänd bevisbörda – det är du som ska visa att felet inte är ditt. Efter garantitiden men inom ansvarstiden ansvarar du bara för väsentliga fel som beror på vårdslöshet, och då är det byggherren som ska bevisa det. En garantibesiktning ska verkställas före garantitidens utgång, alltså strax innan 2 respektive 5 år passerat, och begärs normalt av byggherren. Fel som noteras där ska du avhjälpa utan kostnad. Ordning i handlingarna vid överlämningen är din bästa försäkring i just dessa lägen.</p>

<h2>Kopplingen till PBL och slutbesked</h2>
<p>Byggherren får normalt inte ta byggnadsverket i bruk förrän byggnadsnämnden gett slutbesked. Slutbesked kräver att kontrollplanen följts och redovisats, och den kontrollansvarige (KA) lämnar ett utlåtande som underlag. Relationshandlingar och intyg efterfrågas ofta som del av detta underlag. Din leverans av dokumentation är därför inte bara en fråga mellan dig och byggherren – den är en förutsättning för att byggnaden lagligt ska kunna tas i bruk.</p>

<h2>Checklista för överlämning av relationshandlingar</h2>
<p>Gå igenom listan innan du kallar överlämningen klar. Komplettera den med de handlingar som är föreskrivna i just ditt kontrakt:</p>
<ol>
<li><strong>Relationsritningar / relationsunderlag</strong> – uppdaterade och märkta.</li>
<li><strong>Drift- och underhållsinstruktioner (DoU)</strong> för installationer och byggdelar.</li>
<li><strong>Produkt- och materialdatablad</strong> för inbyggda produkter.</li>
<li><strong>Egenkontroller</strong> – ifyllda och signerade för respektive moment.</li>
<li><strong>Provningsprotokoll</strong> – täthet, el, ventilation, tryck m.m.</li>
<li><strong>Garantisedlar</strong> för material och produkter med separata garantier.</li>
<li><strong>Utbildning av förvaltningen</strong> med utbildningsprotokoll.</li>
<li><strong>Digital leverans</strong> – samlat i ett system som stöttar framtida förvaltning.</li>
</ol>
<p>Behöver du en mall för egenkontrollerna som ska ingå? Använd vår <a href="/sv/verktyg/egenkontroll-mall">gratis egenkontroll-mall</a> och bocka av momenten löpande under projektet i stället för i slutrusningen.</p>

<h2>Så håller du ordning på restpunkter och % klart i ByggExp</h2>
<p>Slutfasen faller ofta på att restpunkterna lever i mejl och lösa anteckningar. I ByggExp lägger du i stället upp varje restpunkt som en uppgift med ansvarig och status, så att inget faller mellan stolarna fram till avhjälpandet. Projektets Mål och etapper visar procent klart, vilket ger dig och byggherren en gemensam bild av vad som återstår inför övertagandet. Relationshandlingar, egenkontroller och protokoll kan samlas digitalt kopplat till projektet, så att hela överlämningspaketet finns på ett ställe när slutbesiktningen närmar sig. Målet är enkelt: färre lösa trådar, snabbare godkännande och en dokumentation som håller även vid garantibesiktningen om flera år.</p>

<h2>Vanliga frågor</h2>
<h3>Kan slutbesiktningen underkännas om relationshandlingarna saknas?</h3>
<p>Oftast inte – saknade handlingar behandlas normalt som en restpunkt. Men om de saknade handlingarna gör att byggherren inte kan få slutbesked från kommunen kan besiktningsmannen vägra godkännande. Då blir dokumentationen ett hinder för hela övertagandet.</p>
<h3>När ska relationshandlingarna senast levereras?</h3>
<p>Enligt AB 04 och ABT 06 ska de levereras till byggherren senast vid slutbesiktningen, när de är föreskrivna i kontraktshandlingarna. Planera leveransen i god tid – inte som en sista åtgärd samma dag som besiktningen.</p>
<h3>Vem tar fram relationshandlingarna – vi eller byggherren?</h3>
<p>Det beror på entreprenadform. I ABT 06 (totalentreprenad) ansvarar entreprenören för projekteringen och tar därmed ofta fram handlingarna. I AB 04 (utförandeentreprenad) projekterar byggherren, och entreprenören levererar relationsunderlag för det arbete som faktiskt utförts.</p>
<h3>Varför spelar överlämningen roll så långt efter avslutat projekt?</h3>
<p>För att godkänd slutbesiktning startar garantitiden – 5 år för arbete och 2 år för material enligt AB 04 – och en ansvarstid på 10 år. Under garantitiden har du omvänd bevisbörda. Komplett dokumentation är då ditt bästa underlag om ett fel ifrågasätts vid garantibesiktningen.</p>

<h2>Kom igång</h2>
<p>En strukturerad överlämning betyder betalning i tid, godkänd besiktning och färre garantitvister. Börja med att lägga restpunkterna som uppgifter och följ procent klart via Mål och etapper i <a href="/sv/funktioner">ByggExps funktioner</a>, och komplettera med vår <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mall</a> under projektets gång. Vill du se hur restlista, etappuppföljning och digital dokumentsamling hänger ihop i praktiken? <a href="/sv/contact">Boka en demo</a> så visar vi upplägget för din verksamhet.</p>

<p>Relaterat: <a href="/sv/blog/slutbesiktning">Slutbesiktning – så går den till</a> och <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a>.</p>
`;

const A_OVERLAMNING_RELATIONSHANDLINGAR: BlogPost = {
  _id: "code-"+"overlamning-relationshandlingar",
  title: "Överlämning och relationshandlingar – checklista för avslutade byggprojekt", slug: "overlamning-relationshandlingar", locale: "sv",
  excerpt: "En strukturerad överlämning av relationshandlingar skyddar både din slutbetalning och de tio åren av ansvar som följer efter godkänd slutbesiktning.", tag: "Entreprenadjuridik",
  coverImageUrl: "/landing/features/project.webp", contentHtml: A_OVERLAMNING_RELATIONSHANDLINGAR_HTML,
  seoTitle: "Relationshandlingar checklista | ByggExp", seoDescription: "Checklista för överlämning av relationshandlingar vid avslutade byggprojekt. Restlista, slutbesiktning, garantitid och 10 års ansvar – enligt AB 04 och ABT 06.",
  seoImageUrl: `${SITE_URL}/landing/features/project.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:24:00.000Z", createdAt: "2026-08-18T18:24:00.000Z", updatedAt: "2026-08-18T18:24:00.000Z",
};

const A_ENTREPRENADKONTRAKT_MALL_HTML = `
<p>Varje år förlorar byggföretag pengar på arbeten de faktiskt utfört – inte för att jobbet var dåligt, utan för att avtalet var svagt eller muntligt. När beställaren bestrider en faktura eller påstår att något var fel är det avtalstexten som avgör, inte vad ni kom överens om över telefon. Ett muntligt avtal är giltigt, men i praktiken näst intill omöjligt att bevisa. Den här guiden går igenom vad ett entreprenadkontrakt måste innehålla för att hålla vid tvist – och ger dig en <strong>entreprenadkontrakt mall gratis</strong> som du kan fylla i och skicka samma dag. (Kärt barn har många namn – entreprenadkontrakt, entreprenadavtal och byggkontrakt syftar på samma sak: det skriftliga avtalet mellan dig och beställaren. Förväxla det inte med <em>Byggavtalet</em>, som är kollektivavtalet mellan Byggföretagen och Byggnads om löner och villkor.)</p>

<p>Vill du komma igång direkt kan du bygga ett bindande avtal från offert till underskrift med <a href="/sv/verktyg/offert-mall">vår gratis offert- och avtalsmall -&gt;</a>.</p>
<p><a href="/sv/verktyg/entreprenadkontrakt-mall">Fyll i och ladda ner ett färdigt entreprenadkontrakt (PDF & Excel) med vår gratis mall -&gt;</a></p>

<h2>Vad är ett entreprenadkontrakt – och varför räcker inte offerten?</h2>
<p>Många hantverkare blandar ihop offert, beställning och kontrakt. En offert är ett anbud – ett erbjudande om pris och omfattning. Först när beställaren accepterar uppstår ett bindande avtal, men en accepterad offert reglerar sällan tidplan, betalning, ÄTA eller garanti. Det är där kontraktet kommer in: det samlar alla villkor på ett ställe och blir det dokument en domstol eller besiktningsman läser om det uppstår en konflikt.</p>
<p>Ett skriftligt avtal är alltid att föredra av bevisskäl. Vid tvist är det avtalstexten och uppdragsbeskrivningen som avgör vad som räknas som fel eller avtalsbrott. Muntliga avtal gäller juridiskt, men ord mot ord vinner sällan i en förhandling. Skriv ner det, låt båda parter signera, och du har flyttat övertaget till din sida.</p>

<h2>Utförandeentreprenad (AB 04) eller totalentreprenad (ABT 06)?</h2>
<p>De svenska standardavtalen inom entreprenad ges ut av BKK, Byggandets Kontraktskommitté. De är väl förankrade och används i princip uteslutande mellan näringsidkare i både offentliga och privata projekt. Vilket avtal du hänvisar till i kontraktet styr vem som bär risken.</p>
<p><strong>AB 04</strong> används vid utförandeentreprenad: beställaren står för projekteringen och du som entreprenör utför arbetet enligt beställarens handlingar. <strong>ABT 06</strong> används vid totalentreprenad: du ansvarar för både projektering – helt eller till väsentlig del – och utförande. Det ger beställaren en enda kontaktpunkt och ett samlat funktionsansvar, men lägger också mer risk på dig. Vid sidan av dessa finns ABK 09 för konsultuppdrag och ABM 07 för materialleveranser. Poängen: skriv uttryckligen i kontraktet vilket standardavtal som gäller, annars uppstår osäkerhet om vad som avtalats. Läs mer i vår guide om <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06</a>.</p>

<h2>Konsument eller näringsidkare – helt olika spelregler</h2>
<p>Innan du väljer mall måste du veta vem du bygger åt. Mellan näringsidkare råder avtalsfrihet, och AB 04 eller ABT 06 gäller det ni skriver. Men vid entreprenad åt konsument gäller konsumenttjänstlagen tvingande till konsumentens förmån. Avtalsvillkor som ger konsumenten sämre skydd än lagen är utan verkan – de blir helt enkelt ogiltiga, oavsett vad ni skrivit under.</p>
<p>Använder du fel mall kan alltså dina klausuler bli verkningslösa i efterhand. För konsumententreprenad finns färdiga standardformulär framtagna gemensamt av bland andra Konsumentverket och byggbranschen: <strong>ABS 18</strong> för ny- och tillbyggnad av småhus, och <strong>Hantverkarformuläret 17</strong> för mindre arbeten och ombyggnad. Vi har en separat genomgång av <a href="/sv/blog/abs-18-hantverkarformularet-17">ABS 18 och Hantverkarformuläret 17</a>. Ta reda på vem motparten är först – det avgör vilket dokument som faktiskt håller.</p>

<h2>Det här måste kontraktet innehålla för att hålla vid tvist</h2>
<p>Ett giltigt skriftligt entreprenadkontrakt bör alltid täcka följande punkter. Saknas någon av dem är det oftast just den luckan motparten utnyttjar:</p>
<ul>
<li><strong>Parter och org.nr</strong> – vem beställer och vem utför, med fullständiga uppgifter.</li>
<li><strong>Arbetsomfattning</strong> – vad som ingår och, minst lika viktigt, vad som uttryckligen exkluderas.</li>
<li><strong>Prismodell</strong> – fast pris, löpande räkning eller takpris. Ange vilket, och vad som händer om ramen överskrids.</li>
<li><strong>Betalplan</strong> – delbetalningar kopplade till avstämda etapper i stället för en klumpsumma på slutet.</li>
<li><strong>Tidplan och vite</strong> – start- och sluttider samt vilket vite som utgår vid försening.</li>
<li><strong>ÄTA-hantering</strong> – att ändrings-, tilläggs- och avgående arbeten ska beställas skriftligt innan de utförs.</li>
<li><strong>Besiktning</strong> – hur och när slutbesiktning sker.</li>
<li><strong>Garanti- och ansvarstid</strong> – vad som gäller efter godkänd besiktning.</li>
<li><strong>Försäkring</strong> – att entreprenören har giltig ansvarsförsäkring.</li>
<li><strong>Hävning</strong> – under vilka förutsättningar avtalet får hävas.</li>
</ul>

<h2>Garantitid, ansvarstid och besiktning – siffrorna du inte får missa</h2>
<p>I AB 04 och ABT 06 är garantitiden 5 år för entreprenörens arbetsprestation och 2 år för material och varor som beställaren föreskrivit. Ansvarstiden är totalt 10 år från godkänd slutbesiktning (garantitiden ingår i den – den läggs inte till utöver de 10 åren) – under den tiden svarar du för väsentliga fel som orsakats av vårdslöshet. Slutbesiktningen är alltså startpunkten som räknar ner alla frister, vilket gör den till en av de viktigaste händelserna i projektet att dokumentera.</p>
<p>För konsumententreprenader gäller andra frister. Reklamationstiden enligt konsumenttjänstlagen är skälig tid, dock senast 3 år efter att uppdraget avslutats – men hela 10 år för arbete på mark, byggnader eller andra fasta anläggningar. Ett kontrakt som inte speglar rätt frister för rätt motpart ger dig falsk trygghet.</p>

<h2>ÄTA-arbeten: vanligaste orsaken till att du inte får betalt</h2>
<p>ÄTA-arbeten – ändrings-, tilläggs- och avgående arbeten – är en av de absolut vanligaste tvistefrågorna i branschen. Enligt AB och ABT ska ÄTA beställas och regleras skriftligt. Gör du merarbete på muntlig begäran riskerar du att stå utan betalt när fakturan bestrids. Regeln är enkel: kräv skriftlig beställning innan du utför tilläggsarbetet, och dokumentera löpande. En rad i ett mejl räcker långt jämfört med ett handslag. Fördjupa dig i <a href="/sv/blog/ata-arbeten">ÄTA-arbeten och hur du säkrar betalt</a>.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du kontraktet direkt ur offerten så att omfattning, pris och villkor följer med hela vägen till underskrift – du behöver inte skriva av samma uppgifter tre gånger. Mallen är anpassad för svenska förhållanden 2026 och innehåller fälten för parter, prismodell, tidplan, ÄTA och garanti som guiden ovan går igenom. Du fyller i formuläret och får ut en färdig PDF att signera. ByggExp ger dig strukturen och dokumentet – vid en verklig tvist bör du alltid stämma av det specifika ärendet med en jurist.</p>

<h2>Vanliga frågor</h2>
<h3>Är en muntlig entreprenad giltig?</h3>
<p>Ja, ett muntligt avtal är juridiskt bindande. Problemet är bevisningen: vid tvist är det avtalstexten som avgör vad som gäller, och muntliga överenskommelser är mycket svåra att styrka. Skriv därför alltid ner avtalet.</p>
<h3>Måste jag använda AB 04 eller ABT 06?</h3>
<p>Nej, det finns ingen lag som tvingar fram dem, men mellan näringsidkare används de i princip uteslutande eftersom de är väl förankrade och förutsägbara. Ange tydligt i kontraktet vilket standardavtal som gäller. Åt konsument använder du i stället ABS 18 eller Hantverkarformuläret 17.</p>
<h3>Vad kostar det att inte ha skriftligt avtal?</h3>
<p>Ofta hela merarbetet. Utan skriftlig ÄTA-beställning eller tydlig omfattning riskerar du att inte få betalt för utfört arbete, och en tvist tar tid och resurser oavsett utgång. Ett par minuter på ett kontrakt är billig försäkring.</p>
<h3>Vilken prismodell bör jag välja?</h3>
<p>Det beror på projektet. Fast pris ger beställaren förutsägbarhet men lägger risken på dig, löpande räkning flyttar risken till beställaren, och takpris är en kompromiss. Oavsett vilket ska modellen framgå uttryckligen i kontraktet.</p>

<h2>Kom igång</h2>
<p>Skapa ett bindande entreprenadkontrakt på några minuter med <a href="/sv/verktyg/offert-mall">vår gratis offert- och avtalsmall</a>, eller utforska alla <a href="/sv/verktyg">gratis verktyg för byggföretag</a>. Vill du se hur kontrakt, offert och fakturering hänger ihop i ett flöde kan du <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06</a>, <a href="/sv/blog/abs-18-hantverkarformularet-17">ABS 18 och Hantverkarformuläret 17</a>, <a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a>.</p>
`;

const A_ENTREPRENADKONTRAKT_MALL: BlogPost = {
  _id: "code-"+"entreprenadkontrakt-mall",
  title: "Entreprenadkontrakt mall gratis – så håller avtalet vid tvist", slug: "entreprenadkontrakt-mall", locale: "sv",
  excerpt: "En färdig entreprenadkontrakt-mall och en genomgång av vad avtalet måste innehålla för att hålla vid tvist – från prismodell och ÄTA till garanti- och ansvarstid.", tag: "Juridik",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_ENTREPRENADKONTRAKT_MALL_HTML,
  seoTitle: "Entreprenadkontrakt mall gratis | ByggExp", seoDescription: "Ladda ner en gratis entreprenadkontrakt-mall som håller vid tvist. Se skillnaden på AB 04 och ABT 06, garantitider och vad kontraktet måste innehålla 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:30:00.000Z", createdAt: "2026-08-18T18:30:00.000Z", updatedAt: "2026-08-18T18:30:00.000Z",
};

const A_UPPSAGNING_ARBETSBRIST_BYGG_HTML = `
<p>Arbetsbrist är den vanligaste och juridiskt mest accepterade grunden för att säga upp anställda i ett byggföretag. Ändå är det just här flest arbetsgivare gör fel. Problemet är sällan själva beslutet att minska personalstyrkan — orderstopp, ett avslutat projekt eller ett tufft kostnadsläge är fullt giltiga skäl. Problemet är formalian. Missar du ett steg i processen blir uppsägningen utan sakliga skäl, och då riskerar företaget både ogiltigförklaring och skadestånd.</p>

<p>Innan du fattar beslut: samla dokumentationen och checklistor på ett ställe med hjälp av <a href="/sv/verktyg">våra gratis verktyg för byggföretag -&gt;</a>. En strukturerad process är din bästa försäkring mot en tvist i Arbetsdomstolen.</p>

<h2>Vad räknas som arbetsbrist?</h2>
<p>Arbetsbrist är ett samlingsbegrepp för alla uppsägningsskäl som inte är hänförliga till den enskilde anställde personligen. Det handlar om organisatoriska eller ekonomiska skäl: färre projekt, dålig orderingång, omorganisation eller behov av att sänka kostnader. Du behöver alltså inte peka ut något fel hos individen — tvärtom, gör du det är det inte längre arbetsbrist utan personliga skäl, vilket är en helt annan och betydligt svårare process.</p>
<p>Enligt 7 § LAS krävs sakliga skäl för uppsägning, och arbetsbrist utgör sakliga skäl. Men lagen ställer ett tydligt villkor: uppsägningen är bara sakligt grundad om arbetsgivaren först har fullgjort sin omplaceringsskyldighet. Det är den kopplingen många byggföretag underskattar.</p>

<h2>Steg 1 — MBL-förhandling först</h2>
<p>Innan du beslutar om arbetsbrist och innan turordningen fastställs har du primär förhandlingsskyldighet enligt 11 § MBL. Du måste förhandla med den kollektivavtalsbärande fackföreningen, i byggbranschen normalt Byggnads. Förhandlingen ska ske i god tid innan beslutet fattas — inte i efterhand som en formalitet.</p>
<p>Ett beslut som fattas innan förhandlingen är avslutad kan angripas. Kalla till förhandling skriftligt, för protokoll och dokumentera vad parterna kommit fram till. Detta protokoll är ofta det första en motpart begär ut om det blir tvist.</p>

<h2>Steg 2 — Omplaceringsutredning</h2>
<p>Enligt 7 § LAS måste du utreda om den som riskerar uppsägning kan omplaceras till en annan ledig tjänst någonstans i hela företaget — inte bara på den aktuella arbetsplatsen. Kravet är att den anställde har tillräckliga kvalifikationer för tjänsten, alltså kan lära sig arbetet inom rimlig upplärningstid.</p>
<p>Utredningen ska göras skriftligt och innan uppsägningen. Finns det en ledig tjänst som personen klarar, ska den erbjudas. Hoppar du över detta steg, eller kan du inte visa att det gjorts, blir uppsägningen utan sakliga skäl oavsett hur reell arbetsbristen är. Dokumentera vilka tjänster som fanns, vilka som var lediga och varför en omplacering inte var möjlig.</p>

<h2>Steg 3 — Turordning per byggyrke</h2>
<p>När omplacering inte är möjlig avgör turordningen vem som får gå. Huvudregeln i 22 § LAS är "sist in, först ut": längre sammanlagd anställningstid ger högre plats på listan. Listorna upprättas per driftsenhet — i praktiken per arbetsplats eller etablering — och per kollektivavtalsområde.</p>
<p>Här blir yrkeskompetensen avgörande i byggbranschen. En lägre placerad arbetstagare får bara tränga undan (bumpa) en högre placerad om han eller hon har tillräckliga kvalifikationer för det jobb som blir kvar. En snickare kan alltså inte automatiskt tränga undan en plattsättare, murare eller betongarbetare — yrkena är inte utbytbara utan vidare. Det innebär att turordningen ofta måste hanteras separat per yrkeskategori.</p>
<p>Observera att kollektivavtal, till exempel Byggavtalet mellan Byggföretagen och Byggnads, kan ersätta lagens turordningsregler genom en avtalsturlista. LAS turordning är semidispositiv, vilket betyder att kollektivavtalet gäller före lagens huvudregel. Kontrollera alltid vilket avtal som gäller för ert företag innan ni fastställer listan.</p>

<h2>Steg 4 — Undantagsregeln: högst tre arbetstagare</h2>
<p>Sedan LAS-reformen 2022 (i kraft 1 oktober 2022) får varje arbetsgivare, oavsett antal anställda, undanta högst tre arbetstagare från turordningen innan listan fastställs. Detta ersatte den gamla regeln där bara arbetsgivare med max tio anställda fick undanta två.</p>
<p>Undantaget används strategiskt för att behålla nyckelpersoner som annars skulle åkt ut på "sist in, först ut". Men var uppmärksam: har du använt undantaget får du inte göra ett nytt undantag för samma driftsenhet inom tre månader. Planera därför alla neddragningar samlat i stället för att dra ned i omgångar.</p>

<h2>Steg 5 — Varsel till Arbetsförmedlingen</h2>
<p>Enligt främjandelagen (1974:13) måste du varsla Arbetsförmedlingen när minst fem arbetstagare berörs av driftsinskränkningen — eller minst 20 under en 90-dagarsperiod. Tidsfristerna beror på omfattningen:</p>
<ul>
<li>Minst 2 månader i förväg om högst 25 berörs.</li>
<li>Minst 4 månader om 26–100 berörs.</li>
<li>Minst 6 månader om fler än 100 berörs.</li>
</ul>
<p>Vid oförutsedda omständigheter ska varsel lämnas så snart som möjligt, dock senast en månad före. Slarvar du med varselplikten kan företaget påföras varselavgift.</p>

<h2>Steg 6 — Uppsägningstider och lön</h2>
<p>Uppsägningstiden regleras i 11 § LAS och är minst en månad för båda parter. Den anställde har rätt till längre tid utifrån anställningstid: 2 månader vid 2–4 år, 3 månader vid 4–6 år, 4 månader vid 6–8 år, 5 månader vid 8–10 år och 6 månader vid minst 10 års anställning.</p>
<p>Under uppsägningstiden behåller den anställde full lön och förmåner även om det inte finns något arbete att utföra. Du kan arbetsbefria personen, men lönen löper på. Ta med den kostnaden i kalkylen redan när du planerar neddragningen.</p>

<h2>Steg 7 — Företrädesrätt till återanställning</h2>
<p>Enligt 25 § LAS har en anställd som sagts upp på grund av arbetsbrist företrädesrätt till återanställning om han eller hon varit anställd sammanlagt mer än tolv månader under de senaste tre åren. Företrädesrätten löper från uppsägningen och i nio månader efter att anställningen upphörde.</p>
<p>Viktigt: den anställde måste själv anmäla anspråk på företrädesrätten för att behålla den. Och för dig som arbetsgivare gäller — behöver du åter arbetskraft inom den perioden och samma driftsenhet och avtalsområde, måste du erbjuda jobbet till den företrädesberättigade innan du nyanställer. Att i stället ta in bemanningspersonal eller underentreprenör för samma arbete kan i praktiken kringgå företrädesrätten och leda till tvist. Håll ordning på vilka som har företräde och hur länge.</p>

<h2>Omställningsstöd och trygghet</h2>
<p>Många kollektivavtal ger omställningsstöd via omställningsorganisationer, och sedan 2022 års omställningsreform finns även offentligt omställningsstudiestöd. Det är inte din uppgift att administrera det, men hänvisa gärna den uppsagde vidare — det underlättar processen och relationen, inte minst om ni senare vill återanställa via företrädesrätten.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte juridisk rådgivning, men verktygen hjälper dig att hålla ordning på det som avgör en arbetsbristprocess: dokumentation och tidslinjer. I <a href="/sv/verktyg">våra verktyg</a> samlar du underlag som anställningstider och projektstatus på ett ställe, så att du har fakta till hands inför MBL-förhandling, omplaceringsutredning och turordningslista. Ju bättre din dokumentation är innan besluten fattas, desto mindre är risken att en uppsägning kan angripas i efterhand.</p>

<h2>Vanliga frågor</h2>
<h3>Räcker det med att projektet är slut för att säga upp?</h3>
<p>Ett avslutat projekt kan vara reell arbetsbrist, men det räcker inte i sig. Du måste först förhandla enligt MBL, göra en omplaceringsutredning och tillämpa turordningen. Utan de stegen saknar uppsägningen sakliga skäl.</p>

<h3>Kan en snickare tränga undan en plattsättare i turordningen?</h3>
<p>Bara om snickaren har tillräckliga kvalifikationer för plattsättarjobbet. Yrkena är inte automatiskt utbytbara, så i praktiken hanteras turordningen ofta separat per yrkeskategori inom driftsenheten.</p>

<h3>Hur många får jag undanta från turordningen?</h3>
<p>Sedan 2022 får varje arbetsgivare undanta högst tre arbetstagare, oavsett företagets storlek. Efter att du använt undantaget får du inte göra ett nytt för samma driftsenhet inom tre månader.</p>

<h3>Måste jag varsla Arbetsförmedlingen?</h3>
<p>Ja, om minst fem arbetstagare berörs av driftsinskränkningen. Tidsfristen är 2, 4 eller 6 månader beroende på antalet berörda. Uteblivet varsel kan ge varselavgift.</p>

<h2>Kom igång</h2>
<p>Bygg en tydlig tidslinje och samla underlaget innan du fattar beslut. Börja i <a href="/sv/verktyg">våra gratis verktyg</a> och kontrollera alltid det kollektivavtal som gäller för ert företag innan turordningen fastställs. Vill du se hur ByggExp håller ordning på anställningsdata inför en neddragning? <a href="/sv/contact">Boka en demo -&gt;</a>.</p>

<p>Relaterat: <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag — så gör du rätt från start</a>.</p>
`;

const A_UPPSAGNING_ARBETSBRIST_BYGG: BlogPost = {
  _id: "code-"+"uppsagning-arbetsbrist-bygg",
  title: "Uppsägning vid arbetsbrist i byggföretag — så följer du LAS rätt (2026)", slug: "uppsagning-arbetsbrist-bygg", locale: "sv",
  excerpt: "Arbetsbrist är laglig grund för uppsägning — men det är den formella processen som fäller byggföretag. Här är stegen enligt LAS för 2026.", tag: "Juridik",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_UPPSAGNING_ARBETSBRIST_BYGG_HTML,
  seoTitle: "Uppsägning arbetsbrist bygg | ByggExp", seoDescription: "Så säger du upp pga arbetsbrist i byggföretag utan att bli skadeståndsskyldig: MBL, omplacering, turordning per yrke, undantag och återanställning enligt LAS.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:15:00.000Z", createdAt: "2026-08-18T19:15:00.000Z", updatedAt: "2026-08-18T19:15:00.000Z",
};

const A_HAVNING_AV_ENTREPRENAD_HTML = `
<p>Beställaren betalar inte. Fakturorna växer, likviditeten sinar och du står inför frestelsen att bara lägga ner verktygen och lämna bygget. Men hävning av entreprenad är ett av de skarpaste vapnen du har – och drar du i nödbromsen på fel grund blir din hävning i stället ett väsentligt avtalsbrott som du själv får betala för. Här går vi igenom när du som entreprenör faktiskt får häva vid utebliven betalning, vilka steg som måste komma först, och varför en obefogad hävning kan bli din dyraste faktura någonsin.</p>

<p>Innan det går så långt: dokumentera dina ändringar och tilläggsarbeten löpande, så att det underliggande betalningskravet är solklart. Använd gärna <a href="/sv/verktyg/ata-mall">vår gratis ÄTA-mall för att dokumentera arbetet -&gt;</a> så att du har ordning på vad som faktiskt är beställt och obetalt.</p>

<h2>Två spår: AB 04/ABT 06 eller konsumenttjänstlagen</h2>
<p>Det första du måste veta är vilket regelverk som gäller för jobbet, för svaret på om och hur du får häva skiljer sig helt beroende på vem beställaren är.</p>
<ul>
<li><strong>Näringsidkare som beställare</strong> – är motparten ett byggföretag, en fastighetsägare eller annan näringsidkare, och ni har avtalat om AB 04 (utförandeentreprenad) eller ABT 06 (totalentreprenad), gäller standardavtalets regler om hävning. Det är detta spår artikeln främst handlar om.</li>
<li><strong>Privatperson som beställare</strong> – är beställaren konsument gäller i stället konsumenttjänstlagen (1985:716), som är tvingande till konsumentens fördel. AB 04 gäller då inte, och du har inte samma fria rätt att lägga ner arbetet. Mer om det längre ner.</li>
</ul>

<h2>Entreprenörens hävningsrätt vid utebliven betalning</h2>
<p>Under AB 04 och ABT 06 regleras din rätt att häva vid utebliven betalning i kapitel 8 § 2 punkt 1. Tre rekvisit måste vara uppfyllda samtidigt – det räcker inte att ett av dem stämmer.</p>
<ol>
<li><strong>Beställaren har inte betalat i rätt tid.</strong> Det ska föreligga ett faktiskt betalningsdröjsmål enligt kontraktets betalningsvillkor.</li>
<li><strong>Rättelse sker inte utan dröjsmål efter erinran.</strong> Du måste först skicka en påminnelse (erinran) och ge beställaren en möjlighet att betala. Häver du utan att ha påmint är hävningen formellt fel.</li>
<li><strong>Underlåtenheten är av väsentlig betydelse.</strong> Detta är den avgörande tröskeln. Ett litet obetalt belopp i förhållande till entreprenadens totala värde räcker inte – din fordran får inte vara alltför obetydlig till beloppet.</li>
</ol>
<p>Väsentlighetskravet är den vanligaste fällan. Om beställaren har betalat 95 procent av en stor entreprenad och tvistar om en enstaka mindre ÄTA, så är den obetalda delen sannolikt inte väsentlig – och då har du ingen hävningsrätt. Att göra en nykter bedömning av <em>proportionen</em> mellan det obetalda beloppet och kontraktssumman är helt centralt innan du går vidare.</p>

<h2>Trappan innan hävning: stoppningsrätten</h2>
<p>Hävning ska nästan alltid vara sista utvägen. AB 04/ABT 06 kap 8 § 3 ger dig ett mildare påtryckningsmedel: stoppningsrätten, det vill säga rätten att tillfälligt avbryta arbetet för att pressa fram betalning. Det är ofta ett klokare första steg än den definitiva hävningen.</p>
<p>Men avbrytandet är tidsbegränsat. Det får pågå i <strong>högst en månad</strong>. Därefter måste du välja: antingen återuppta arbetet eller häva entreprenaden. Väljer du att återuppta har du rätt till tidsförlängning för den tid stoppet varat, och rätt till ersättning för de kostnader som avbrytandet orsakat. Stoppningsrätten är alltså ett verktyg som ofta löser problemet utan att relationen och kontraktet sprängs.</p>

<h2>Så häver du formellt rätt</h2>
<p>Bestämmer du dig ändå för att häva – gör det formellt korrekt. En slarvig hävning kan bli ogiltig även om du hade sakligt fog.</p>
<ul>
<li><strong>Skriftlig hävningsförklaring.</strong> Det är själva hävningsförklaringen som måste vara skriftlig. Muntligt eller "underförstått" duger inte.</li>
<li><strong>Ange grunden tydligt.</strong> Hänvisa till kap 8 § 2 p.1 och den obetalda, väsentliga fordran. Notera att hävningsgrunderna i kap 8 inte är uttömmande – även allmänna kontraktsrättsliga grunder kan åberopas, men de kräver på samma sätt väsentlighet.</li>
<li><strong>Säkra bevisningen.</strong> Samla fakturor, den skriftliga påminnelsen, mejlkorrespondens och dagboksanteckningar. Vid en tvist är det du som måste kunna visa att rekvisiten var uppfyllda.</li>
</ul>
<p>Vid en befogad hävning görs en ekonomisk slutavräkning enligt kap 8 § 5, och garantitiden räknas från dagen för hävningen enligt reglerna i AB 04 kap 8. Att ha ett tydligt underlag för utfört och obetalt arbete – inklusive ÄTA – är avgörande för att slutavräkningen ska landa rätt.</p>

<h2>Risken vid obefogad hävning</h2>
<p>Här ligger den verkliga faran. Om du häver utan att alla tre rekvisiten är uppfyllda är hävningen <strong>obefogad</strong> – och en obefogad hävning betraktas i sig som ett väsentligt avtalsbrott från din sida. Rollerna kastas då om: beställaren kan häva mot <em>dig</em> och kräva skadestånd för sina merkostnader, till exempel vad det kostar att ta in en annan entreprenör för att färdigställa jobbet, plus förseningsskador.</p>
<p>Två saker är värda att förstå om skadeståndet. För det första klassas ersättningskravet efter en obefogad hävning som ett skadeståndskrav – slutavräkningsregeln i kap 8 § 5 är inte direkt tillämplig. För det andra har den skadelidande parten bevisbördan för sin påstådda skada. Kan skadan inte styrkas utgår ingen ersättning, oavsett att hävningen var obefogad. Det skär åt båda håll: kan du inte bevisa din skada får du inget, och kan motparten inte bevisa sin slipper du betala. Poängen är att en felaktig hävning är en dyr och osäker historia – väg alltid in den risken innan du agerar.</p>

<h2>Konsumentjobb: särskilda regler</h2>
<p>Är beställaren privatperson gäller konsumenttjänstlagen. Du får inställa (avbryta) arbetet vid utebliven betalning, och du får även häva den återstående delen av tjänsten när du redan på förhand har starka skäl att tro att kunden inte kommer att betala. Men villkoren är strängare:</p>
<ul>
<li>Att bara <strong>inställa (avbryta) arbetet</strong> vid utebliven betalning kräver ingen lagstadgad skriftlig förhandsvarning (45 §). Men vill du <strong>häva</strong> den återstående delen av tjänsten måste du först påminna kunden om att betala och ge skälig tid för rättelse (46 §). Skicka den påminnelsen skriftligt – det är starkt att rekommendera för bevisningens skull, även om lagen inte kräver en viss form.</li>
<li>Du är ändå skyldig att utföra arbete som inte kan skjutas upp utan risk för allvarlig skada för konsumenten.</li>
<li>På den obetalda fakturan får du ta ut dröjsmålsränta enligt räntelagen: referensränta plus 8 procentenheter. Riksbankens referensränta är fastställd till 2,00 procent för både första och andra halvåret 2026, vilket ger en dröjsmålsränta på <strong>10,00 procent</strong> under 2026.</li>
</ul>

<h2>Checklista innan du häver</h2>
<ol>
<li>Skicka alltid en påminnelse (erinran) först, och gör det skriftligt för bevisningens skull. Utan att beställaren fått en chans att rätta dröjsmålet efter erinran saknar du hävningsgrund.</li>
<li>Bedöm väsentligheten: hur stort är det obetalda beloppet i förhållande till kontraktssumman?</li>
<li>Överväg stoppningsrätten (kap 8 § 3) som ett mildare steg – max en månad.</li>
<li>Gör allt skriftligt: både påminnelse, avbrytande och en eventuell hävningsförklaring. Den skriftliga formen är ett krav för själva hävningsförklaringen.</li>
<li>Säkra bevisningen: fakturor, ÄTA-underlag, dagbok och korrespondens.</li>
<li>Ta juridisk hjälp innan du häver – risken vid en obefogad hävning är för stor för att gissa.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>Hävning står och faller med underlaget. ByggExp hjälper dig att hålla ordning på det som ofta blir tvistigt: vilka ÄTA-arbeten som är beställda, vad som är fakturerat och vad som är obetalt. Med tydlig dokumentation av tilläggsarbeten och offerter blir det enklare att visa att din fordran är verklig och väsentlig – och att påminnelser faktiskt har skickats. ByggExp ersätter inte juridisk rådgivning, men ger dig det spårbara underlag du behöver för att stå stadigt om en betalningstvist eskalerar.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag skicka påminnelse innan jag häver?</h3>
<p>Ja. Enligt AB 04/ABT 06 kap 8 § 2 p.1 förutsätter hävningsrätten att du har skickat en erinran (påminnelse) och att beställaren inte rättat dröjsmålet utan dröjsmål efter den. Häver du utan påminnelse är hävningen formellt felaktig.</p>
<h3>Hur stort måste det obetalda beloppet vara?</h3>
<p>Det finns ingen fast gräns, men underlåtenheten måste vara av väsentlig betydelse. Ett litet belopp i förhållande till entreprenadens totala värde räcker inte. Bedöm alltid proportionen mellan det obetalda och kontraktssumman innan du agerar.</p>
<h3>Vad händer om jag häver på fel grund?</h3>
<p>Då blir din hävning obefogad och betraktas som ett väsentligt avtalsbrott. Beställaren kan häva mot dig och kräva skadestånd, till exempel merkostnaden för att färdigställa med en annan entreprenör. Ersättningen behandlas som ett skadeståndskrav, och den som kräver skadestånd måste kunna bevisa sin skada.</p>
<h3>Gäller samma regler mot en privatperson?</h3>
<p>Nej. Mot konsument gäller konsumenttjänstlagen, inte AB 04. Du får inställa (avbryta) arbetet vid utebliven betalning utan något lagstadgat krav på skriftlig förhandsvarning. Vill du däremot häva den återstående delen av tjänsten måste du först påminna kunden och ge skälig tid för rättelse (46 §). Oavsett vilket är du skyldig att utföra arbete som inte kan skjutas upp utan risk för allvarlig skada för kunden.</p>

<h2>Kom igång</h2>
<p>Bygg ett vattentätt underlag redan från start. Dokumentera tilläggen med <a href="/sv/verktyg/ata-mall">vår ÄTA-mall</a> och håll offerterna spårbara med <a href="/sv/verktyg/offert-mall">offertmallen</a>. Vill du se hur ByggExp håller ihop beställningar, ÄTA och fakturaunderlag i ett flöde? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06 – skillnaderna förklarade</a> och <a href="/sv/blog/ata-arbeten">ÄTA-arbeten: så dokumenterar du rätt</a>.</p>
`;

const A_HAVNING_AV_ENTREPRENAD: BlogPost = {
  _id: "code-"+"havning-av-entreprenad",
  title: "Hävning av entreprenad vid utebliven betalning", slug: "havning-av-entreprenad", locale: "sv",
  excerpt: "När får du som entreprenör häva vid utebliven betalning – och varför blir en obefogad hävning din dyraste faktura? Rekvisiten i AB 04/ABT 06, stoppningsrätten och reglerna mot konsument.", tag: "Entreprenadjuridik",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_HAVNING_AV_ENTREPRENAD_HTML,
  seoTitle: "Hävning av entreprenad | ByggExp", seoDescription: "När får du som entreprenör häva vid utebliven betalning? Så uppfyller du rekvisiten i AB 04/ABT 06, använder stoppningsrätten rätt och undviker en dyr, obefogad hävning.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:00:00.000Z", createdAt: "2026-08-19T05:00:00.000Z", updatedAt: "2026-08-19T05:00:00.000Z",
};

const A_FORSENINGSVITE_ENTREPRENAD_HTML = `
<p>När ett bygge drar över sluttiden är den avgörande frågan enkel: vem betalar för förseningen? Svaret står i kontraktet. Förseningsvite är den avtalade summa entreprenören betalar per vecka som färdigställandet blir försenat, och den bestämmer i praktiken vem som bär kostnaden. Ett räkneexempel gör poängen tydlig: på en kontraktssumma om 4 Mkr innebär ett vite på 1 % att det kostar 40 000 kr för varje påbörjad vecka. Löper förseningen över fem veckor blir det 200 000 kr. Vite finns dock inte automatiskt i lagen — det gäller bara om det är inskrivet i avtalet, och bara om klausulen är skriven på rätt sätt.</p>

<p>Vitesbeloppet regleras i ÄTA- och kontraktshandlingarna, så börja med att strukturera ändringar och tillägg korrekt med <a href="/sv/verktyg/ata-mall">vår gratis ÄTA-mall -&gt;</a> så att sluttiden och rätten till tidsförlängning är dokumenterad från dag ett.</p>
<p><a href="/sv/verktyg/forseningsvite-kalkylator">Räkna ut förseningsvitet med vår gratis kalkylator -&gt;</a></p>

<h2>Så räknar du ut förseningsvitet</h2>
<p>Formeln är rak: <strong>vite = avtalad procentsats × kontraktssumman, per påbörjad vecka</strong>. Ta en kontraktssumma på 4 000 000 kr och jämför tre vanliga nivåer:</p>
<ul>
<li><strong>0,5 %</strong> per vecka = 20 000 kr/vecka</li>
<li><strong>1 %</strong> per vecka (branschpraxis) = 40 000 kr/vecka</li>
<li><strong>2 %</strong> per vecka = 80 000 kr/vecka</li>
</ul>
<p>Det viktigaste räknetekniska draget är att vitet tas ut per <em>påbörjad</em> vecka. Det innebär att en enda dag in i en ny vecka utlöser en full veckas vite — det avrundas alltid uppåt, aldrig proportionellt per dag. Är entreprenören åtta dagar sen blir det alltså två veckors vite, inte en vecka plus en dag. På exemplet ovan med 1 % betyder det 80 000 kr, inte 45 000 kr. Skriv därför alltid ut om beräkningsbasen är kontraktssumman exklusive eller inklusive moms; i kommersiella avtal räknas den normalt på beloppet exklusive moms.</p>

<h2>AB 04, ABT 06 och konsumentfallet</h2>
<p>I kommersiella entreprenader regleras förseningsvite i standardavtalen AB 04 (utförandeentreprenad) och ABT 06 (totalentreprenad), båda i <strong>kap 5 § 3</strong>. En central detalj: standardformulären lämnar själva vitesbeloppet <strong>blankt</strong>. Parterna måste fylla i procentsats eller krontal i kontraktsformuläret. Är rutan tom finns inget <em>vite</em> att kräva — men det betyder inte att förseningen är påföljdsfri. Enligt kap 5 § 3 har beställaren då i stället rätt till ersättning för den skada som förseningen medför, alltså allmänt skadestånd. Skillnaden är att beställaren måste bevisa sin faktiska förlust i stället för att luta sig mot ett avtalat schablonbelopp. Branschkutymen är 1 % av kontraktssumman per påbörjad vecka, medan avtal i praktiken rör sig mellan cirka 0,5 och 2 % per vecka.</p>
<p>För privatkund gäller andra regler. Konsumenttjänstlagen (1985:716) innehåller <strong>ingen lagstadgad vitesnivå</strong>. Vid dröjsmål kan konsumenten hålla inne betalning, kräva att tjänsten utförs, häva om dröjsmålet är av väsentlig betydelse och kräva skadestånd under kontrollansvar — men skadestånd förutsätter att en faktisk förlust bevisas, det finns ingen fast procentsats. Standardavtalen för konsument, <strong>ABS 18</strong> (nybyggnad av småhus) och <strong>Hantverkarformuläret 17</strong> (om- och tillbyggnad), lägger ändå till en vitesklausul, typiskt runt 1 % per påbörjad vecka med ett tak. Kontrollera alltid aktuell nivå och tak i den gällande blanketten innan du citerar den.</p>

<h2>Så måste klausulen skrivas för att gälla</h2>
<p>En vitesklausul biter bara om fyra saker är på plats. Saknas någon av dem riskerar hela vitet att falla:</p>
<ol>
<li><strong>Tydlig, bindande färdigställandetid.</strong> Det måste finnas ett bestämt datum eller en definierad kontraktstid att mäta förseningen mot. Formuleringar som "arbetet ska utföras skyndsamt" räcker inte.</li>
<li><strong>Ifyllt vitesbelopp och beräkningsbas.</strong> Ange procentsats eller krontal, per påbörjad vecka, samt om det räknas på kontraktssumman exklusive moms.</li>
<li><strong>Exklusivitet.</strong> Skriv ut att vitet är den enda påföljden för förseningen. När vite är avtalat är det som huvudregel den enda påföljden — beställaren har normalt inte rätt till ytterligare skadestånd (t.ex. förlorad hyra) för samma försening utöver vitet. Undantag kan förekomma, bland annat vid grov vårdslöshet enligt allmänna avtalsrättsliga principer.</li>
<li><strong>Eventuellt tak.</strong> Ett takbelopp (ofta uttryckt som ett maximalt antal veckor) ger båda parter förutsägbarhet och minskar risken för jämkning.</li>
</ol>
<p>Ett orimligt högt vite kan jämkas nedåt av domstol enligt avtalslagen 36 § (generalklausulen). Ett mycket lågt avtalat vite fungerar däremot i regel som ett tak för vad beställaren över huvud taget kan få ut för förseningen — vilket kan slå åt bägge håll beroende på vilken sida du står.</p>

<h2>När entreprenören slipper vite</h2>
<p>Vite löper bara om förseningen beror på entreprenören. Enligt AB 04 och ABT 06 kap 4 §§ 2–3 har entreprenören rätt till <strong>tidsförlängning</strong> — och alltså en framflyttad sluttid — vid hinder utanför sin kontroll:</p>
<ul>
<li>ÄTA-arbeten som beställaren beställt</li>
<li>Beställarens egna förhållanden (t.ex. försenat underlag eller sen tillgång till arbetsplatsen)</li>
<li>Hinder som entreprenören inte råder över</li>
<li>Exceptionellt väder utöver det normala</li>
</ul>
<p>Vitet börjar löpa först efter den förlängda färdigställandetiden. Men rätten till tidsförlängning är inte gratis: entreprenören måste <strong>anmäla hindret och ÄTA-arbetena i tid</strong>. Missas anmälan står den ursprungliga sluttiden kvar — och då träffar vitet fullt ut. Här är dokumentationen avgörande, för det är den som visar att förseningen inte var entreprenörens fel.</p>

<h2>Vanliga misstag som gör vitesklausulen värdelös</h2>
<ul>
<li><strong>Blank vitesruta.</strong> Standardformuläret lämnas ofta ifyllt i övrigt men med tom vitesrad — resultatet är noll vite (beställaren är då hänvisad till att bevisa faktisk skada i stället).</li>
<li><strong>Vag sluttid.</strong> Utan ett bindande datum finns inget att räkna försening från.</li>
<li><strong>Stapling av vite och skadestånd.</strong> Att kräva både vite och ytterligare skadestånd för samma försening håller normalt inte; vitet är exklusivt.</li>
<li><strong>Missad reklamationsfrist.</strong> Vite dras inte av automatiskt — beställaren måste aktivt göra kravet gällande inom avtalets frist (se reklamations- och preskriptionsreglerna i kap 6). Görs det för sent kan rätten till vite gå förlorad.</li>
<li><strong>Orimligt högt vite.</strong> Ett vite som ligger långt över branschpraxis riskerar att jämkas enligt avtalslagen 36 §.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte det juridiska kontraktet, men gör det du behöver för att kunna hävda — eller freda dig mot — ett vite: hålla ordning på tider och underlag. I plattformen dokumenterar du ÄTA-arbeten, hinder och tidsförlängningar löpande, med datum och koppling till rätt projekt. När en diskussion om försening uppstår har du då en spårbar historik som visar när hinder anmäldes och vilka ändringar som påverkade sluttiden. Det är precis den bevisning som avgör om vitet löper eller inte. Du får också struktur på kontraktssumma och projektstatus, så att en eventuell vitesberäkning bygger på rätt siffror från början.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket är förseningsvite normalt?</h3>
<p>Branschpraxis i kommersiell entreprenad är 1 % av kontraktssumman per påbörjad vecka. I praktiken varierar avtalen mellan ungefär 0,5 och 2 % per vecka. Nivån är alltid en förhandlingsfråga och måste fyllas in manuellt i kontraktsformuläret enligt AB 04 eller ABT 06 kap 5 § 3.</p>
<h3>Kan beställaren kräva skadestånd utöver vitet?</h3>
<p>Normalt inte. När förseningsvite är avtalat är det som huvudregel den exklusiva påföljden för förseningen, och beställaren har inte rätt till ytterligare skadestånd för samma dröjsmål — undantag kan gälla bland annat vid grov vårdslöshet. Det är därför exklusiviteten bör skrivas ut tydligt i klausulen. Har vite däremot inte avtalats har beställaren i stället rätt till ersättning för den skada förseningen bevisligen medför.</p>
<h3>Räknas vite på summan med eller utan moms?</h3>
<p>Vitet räknas på kontraktssumman, i kommersiella avtal normalt exklusive moms. Själva vitet är i regel utanför momsens tillämpningsområde eftersom det är en ersättning och inte betalning för en levererad tjänst. Bekräfta momsbehandlingen mot Skatteverkets aktuella vägledning innan du fakturerar.</p>
<h3>Vad händer om jag glömmer att kräva vitet i tid?</h3>
<p>Vite dras inte av automatiskt. Beställaren måste aktivt göra kravet gällande inom avtalets reklamationsfrist enligt kap 6. Görs det för sent kan rätten till vite förfalla helt, även om förseningen är obestridd.</p>

<h2>Kom igång</h2>
<p>Se till att sluttid, ÄTA-arbeten och tidsförlängningar är dokumenterade innan förseningen blir en tvist. Börja med <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a> och de övriga gratisverktygen på <a href="/sv/verktyg">/sv/verktyg</a>. Vill du se hur ByggExp håller ihop tider, ÄTA och kontraktssummor i skarpa projekt? <a href="/sv/contact">Boka en demo -&gt;</a></p>
<p>Relaterat: <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06 — vad skiljer standardavtalen</a> och <a href="/sv/blog/ata-arbeten">ÄTA-arbeten: så hanterar du ändringar och tillägg</a>.</p>
`;

const A_FORSENINGSVITE_ENTREPRENAD: BlogPost = {
  _id: "code-"+"forseningsvite-entreprenad",
  title: "Förseningsvite i entreprenad: så räknar och skriver du klausulen", slug: "forseningsvite-entreprenad", locale: "sv",
  excerpt: "Förseningsvite avgör vem som betalar när bygget drar över sluttiden. Så räknar du ut det, så skriver du klausulen rätt och så gäller kap 5 § 3 i AB 04 och ABT 06.", tag: "Entreprenadjuridik",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_FORSENINGSVITE_ENTREPRENAD_HTML,
  seoTitle: "Förseningsvite i entreprenad | ByggExp", seoDescription: "Så fungerar förseningsvite i AB 04 och ABT 06: räkna ut vitet per påbörjad vecka, skriv klausulen rätt och vet vad som gäller om vitesrutan är tom.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:06:00.000Z", createdAt: "2026-08-19T05:06:00.000Z", updatedAt: "2026-08-19T05:06:00.000Z",
};

const A_HINDERSANMALAN_TIDSFORLANGNING_AB04_HTML = `
<p>Ett sent leveransbesked, en oväntad tjälvinter eller markförhållanden som ingen räknat med – allt kan skjuta din tidplan i sank. Enligt AB 04 har du som entreprenör ofta rätt till tidsförlängning när du hindras av något som inte är ditt fel. Men rätten är villkorad: den gäller bara om du anmäler hindret i tid och skriftligt. Missar du hindersanmälan förlorar du rätten att åberopa hindret – och då börjar förseningsvitet löpa vecka för vecka. Den här guiden reder ut vad som ger rätt till tidsförlängning, hur du anmäler hinder korrekt och vad det kostar att göra fel.</p>

<p>Ett strukturerat sätt att dokumentera hinder, ÄTA och avvikelser från tidplanen är halva jobbet – testa vår <a href="/sv/verktyg/ata-mall">gratis ÄTA- och hindersanmälningsmall -&gt;</a> för att få med rätt uppgifter från början.</p>

<h2>Vad är ett hinder enligt AB 04?</h2>
<p>Ett hinder är en omständighet som gör att du inte kan färdigställa kontraktsarbetena inom kontraktstiden – och som inte beror på dig själv. Det ska skiljas från en <em>egen försening</em>, alltså sådant du själv orsakat genom bristande bemanning, planering eller resurser. Egen försening ger ingen rätt till mer tid.</p>
<p>Regelverket ligger på tre ställen i AB 04 som hänger ihop. <strong>Kap 4 § 3</strong> ger rätten till "erforderlig förlängning av kontraktstiden" när du hindras av någon av de uppräknade grunderna. <strong>Kap 4 § 4</strong> reglerar underrättelseskyldigheten – själva hindersanmälan. Och <strong>kap 5 § 3</strong> reglerar förseningsvitet som slår till om kontraktstiden överskrids utan att du fått tidsförlängning. Poängen är att § 3 och § 4 måste läsas tillsammans: rätten till mer tid finns, men den aktiveras först när du fullgör din anmälningsplikt.</p>

<h2>De fem grunderna för tidsförlängning (kap 4 § 3)</h2>
<p>AB 04 kap 4 § 3 räknar upp fem grunder som ger rätt till tidsförlängning:</p>
<ol>
<li><strong>Omständighet på beställarens sida</strong> – t.ex. att ritningar, beslut eller tillträde till arbetsområdet levereras för sent.</li>
<li><strong>Myndighetsbeslut eller allmän brist</strong> på hjälpmedel, material eller vara som inte kunnat förutses.</li>
<li><strong>Krig, försvarsberedskap, epidemi, strejk, blockad eller lockout</strong> – en arbetskonflikt som du själv inte är part i.</li>
<li><strong>Väderleks- eller vattenståndsförhållanden</strong> som är osedvanliga för byggnadsorten och som inverkar särskilt ogynnsamt på arbetena – alltså inte "vanlig" vinter, utan avvikande förhållanden.</li>
<li><strong>Generalklausulen</strong> – annat förhållande som du inte vållat, inte bort räkna med och vars menliga inverkan du inte rimligen kunnat undanröja. Hit hör t.ex. oförutsedda markförhållanden.</li>
</ol>
<p>En avgörande skillnad många missar: <strong>bara grund 1 ger både tidsförlängning OCH rätt till ersättning</strong> (kap 5 § 4), eftersom hindret ligger på beställaren. Grund 2–5 är neutrala eller force majeure-liknande och ger enbart mer tid – ingen ersättning för dina merkostnader. Sen ritning betalar alltså beställaren för; ett osedvanligt oväder gör det inte.</p>

<h2>Hindersanmälan: så anmäler du i tid (kap 4 § 4)</h2>
<p>Kap 4 § 4 säger att den part som inser eller bör inse att en omständighet kan rubba tidplanen eller medföra försening ska underrätta motparten <strong>utan dröjsmål</strong>. "Utan dröjsmål" betyder så snart det praktiskt är möjligt – inte "på nästa byggmöte" och inte "när förseningen redan är ett faktum". Så fort du ser att ett hinder är på väg att påverka tidplanen ska anmälan ut.</p>
<p>En hindersanmälan bör innehålla:</p>
<ul>
<li>Vilket hinder det gäller och vilken grund i kap 4 § 3 du åberopar.</li>
<li>Orsaken och när hindret uppstod eller upptäcktes.</li>
<li>Förväntad påverkan på tidplanen – hur många dagar eller veckor.</li>
<li>Eventuell kostnad, om du åberopar grund 1 och kräver ersättning.</li>
<li>Datum och att den skickas till <strong>rätt behörig person</strong> enligt kontraktet, inte bara en kontakt på plats.</li>
</ul>
<p>Gör anmälan <strong>skriftlig</strong>. Ett muntligt påpekande på byggmötet är svårt att bevisa i efterhand. Notera gärna hindret i dagboken och byggmötesprotokollet <em>och</em> skicka en separat skriftlig hindersanmälan – dubbel dokumentation är din trygghet om det blir tvist.</p>

<h2>Konsekvensen om du missar anmälan</h2>
<p>Sanktionen är hård: uteblir underrättelsen enligt kap 4 § 4 förlorar du rätten att åberopa omständigheten. Ingen anmälan – ingen tidsförlängning (om inte beställaren ändå insett eller bort inse hindret). Och utan tidsförlängning löper förseningsvitet enligt kap 5 § 3.</p>
<p>Räkneexempel: en kontraktssumma på 4 000 000 kr med avtalat vite på 1 % per påbörjad förseningsvecka ger 40 000 kr i veckan. Fyra veckors försening som du hade kunnat få tidsförlängd – men inte anmälde – kostar dig 160 000 kr. Notera att vitet räknas per <strong>påbörjad</strong> vecka: en dag in på vecka fem är hela vecka fem utlöst.</p>

<h2>Förseningsvite i praktiken (kap 5 § 3)</h2>
<p>Förseningsvitet är inte bestämt i standarden. Parterna måste ange procentsats eller fast belopp i kontraktshandlingarna. Anges inget belopp anses inget vite avtalat – då kan beställaren inte kräva vite, men är i stället hänvisad till att bevisa sin faktiska skada, vilket är svårare men inte omöjligt. Vanlig marknadsnivå på avtalat vite ligger typiskt runt <strong>0,5–2 % av kontraktssumman per påbörjad förseningsvecka</strong>. Har vite avtalats kan beställaren normalt inte kräva skadestånd utöver vitet för samma försening – vitet är taket. Kontrollera alltid vilken procentsats och vilken bas som står i just ditt kontrakt innan du bedömer risken.</p>

<h2>Forcering som alternativ (kap 4 § 2)</h2>
<p>Ibland är det bättre att pressa tillbaka tiden än att ta emot vite. AB 04 kap 4 § 2 skiljer på två fall. <strong>Beställd forcering</strong>: beställaren beordrar dig att forcera och står för kostnaden. <strong>Egen forcering</strong>: om beställaren felaktigt nekar dig en tidsförlängning du har rätt till, får du forcera på beställarens bekostnad – men bara om du i förväg lämnat skriftlig underrättelse med en kostnadsuppskattning och forceringskostnaden inte är oskälig. Egen forcering utan föregående skriftlig underrättelse är en risk du själv får bära, så formkravet är inte förhandlingsbart.</p>
<p>Efter en giltig hindersanmälan ska parterna dessutom försöka enas om en ny tidplan. Du är skyldig att använda dina resurser rationellt för att begränsa förseningen, och beställaren ska hålla tidsförlängningen så kort som möjligt. Lojalitetsplikten gäller åt båda håll.</p>

<h2>Vanliga misstag – checklista</h2>
<ul>
<li>Väntar med anmälan till nästa byggmöte i stället för "utan dröjsmål".</li>
<li>Anmäler muntligt utan att dokumentera skriftligt.</li>
<li>Skickar till fel person – inte behörigt ombud enligt kontraktet.</li>
<li>Anger inte vilken grund i kap 4 § 3 som åberopas.</li>
<li>Tror att alla hinder ger ersättning – bara grund 1 gör det.</li>
<li>Forcerar på egen hand utan skriftlig underrättelse med kostnadsuppskattning.</li>
<li>Följer inte upp om beställaren accepterat den nya tidplanen.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig fånga hindret i det ögonblick det uppstår. I <a href="/sv/verktyg/ata-mall">ÄTA- och hindersanmälningsmallen</a> fyller du i grund, orsak, tidpåverkan och behörig mottagare – så att anmälan blir komplett och tidsstämplad från start. Kopplar du hindret till en tidplan i vår <a href="/sv/verktyg/gantt-schema-mall">Gantt-schema-mall</a> ser du direkt hur många veckor som påverkas, vilket underlättar både din begäran om tidsförlängning och en eventuell forceringskalkyl. ByggExp fattar inga juridiska beslut åt dig – kontraktshandlingarna styr alltid – men verktygen gör att du dokumenterar rätt, i tid och på ett spårbart sätt.</p>

<h2>Vanliga frågor</h2>
<h3>Vad betyder "utan dröjsmål" i kap 4 § 4?</h3>
<p>Det betyder så snart det praktiskt är möjligt efter att du insett eller bort inse att hindret kan påverka tidplanen. Det finns ingen fast frist i dagar, men praxis är sträng – vänta inte till nästa byggmöte, skicka anmälan så fort du kan.</p>
<h3>Får jag ersättning för alla hinder som ger tidsförlängning?</h3>
<p>Nej. Bara grund 1 i kap 4 § 3 – omständighet på beställarens sida – ger både tidsförlängning och rätt till ersättning enligt kap 5 § 4. Grund 2–5 ger enbart mer tid, inte ersättning för dina merkostnader.</p>
<h3>Vad händer om det inte står något vite i kontraktet?</h3>
<p>Anges ingen procentsats eller inget belopp anses inget vite avtalat. Beställaren kan då inte kräva vite, men kan i stället försöka bevisa sin faktiska skada av förseningen. Kontrollera alltid vad kontraktshandlingarna säger.</p>
<h3>Kan jag forcera i stället för att betala vite?</h3>
<p>Ja. Nekar beställaren felaktigt en tidsförlängning du har rätt till, får du forcera på beställarens bekostnad enligt kap 4 § 2 – men bara om du i förväg lämnat skriftlig underrättelse med kostnadsuppskattning och kostnaden inte är oskälig.</p>

<h2>Kom igång</h2>
<p>Dokumentera hindret, anmäl utan dröjsmål och hänvisa till rätt kapitel och paragraf – så skyddar du din rätt till tidsförlängning och håller vitet borta. Börja med vår <a href="/sv/verktyg/ata-mall">ÄTA- och hindersanmälningsmall</a>, koppla den till <a href="/sv/verktyg/gantt-schema-mall">Gantt-schema-mallen</a> för att visa tidpåverkan, och <a href="/sv/contact">boka en demo</a> om du vill se hur ByggExp håller ordning på hinder och ÄTA i skarpa projekt. Observera att kontraktshandlingarna och eventuella avvikelser i ditt kontrakt alltid går före standardtextens huvudregler.</p>

<p>Relaterat: <a href="/sv/blog/forseningsvite-entreprenad">Förseningsvite i entreprenad</a>, <a href="/sv/blog/gantt-schema-mall-bygg">Gantt-schema för byggprojekt</a>, <a href="/sv/blog/garantitid-ansvarstid-ab-04">Garantitid och ansvarstid enligt AB 04</a>.</p>
`;

const A_HINDERSANMALAN_TIDSFORLANGNING_AB04: BlogPost = {
  _id: "code-"+"hindersanmalan-tidsforlangning-ab04",
  title: "Hindersanmälan och tidsförlängning enligt AB 04 – så undviker du vite", slug: "hindersanmalan-tidsforlangning-ab04", locale: "sv",
  excerpt: "Du har rätt till tidsförlängning enligt AB 04 – men bara om du anmäler hindret utan dröjsmål och skriftligt, annars börjar förseningsvitet löpa.", tag: "Entreprenadjuridik",
  coverImageUrl: "/landing/features/5planering.webp", contentHtml: A_HINDERSANMALAN_TIDSFORLANGNING_AB04_HTML,
  seoTitle: "Hindersanmälan & tidsförlängning AB 04 | ByggExp", seoDescription: "Rätt till tidsförlängning enligt AB 04 kräver att du anmäler hindret i tid och skriftligt. Missar du hindersanmälan löper förseningsvitet. Så gör du rätt.",
  seoImageUrl: `${SITE_URL}/landing/features/5planering.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T07:18:00.000Z", createdAt: "2026-08-19T07:18:00.000Z", updatedAt: "2026-08-19T07:18:00.000Z",
};

const A_REKLAMATION_BEMOTA_FELKRAV_ENTREPRENAD_HTML = `
<p>En kund hör av sig och påstår att jobbet är felaktigt. Kanske sprickor i putsen, en dörr som kärvar eller ett golv som knarrar. Hur du som byggföretag bemöter det första felkravet avgör ofta både ekonomin och relationen. Ett hastigt medgivande kan kosta dig en dyr faktura från en annan entreprenör, medan tystnad eller en muntlig undanmanöver kan förvandla en småsak till en tvist. Den goda nyheten: lagen ger dig fler verktyg än du tror. Men de ser olika ut beroende på om kunden är privatperson eller näringsidkare. Första steget är därför alltid att slå fast vilket regelverk som gäller – innan du tar ställning i sak.</p>

<p>Dokumentation är din bästa vän när ett felkrav dyker upp. Har du fört löpande kvalitetskontroll står du starkare direkt – använd gärna <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a> för att fånga upp underlaget redan under projektet.</p>

<h2>Steg 1: Vilket regelverk gäller?</h2>
<p>Två regelverk styr felkrav i byggbranschen, och de behandlar felansvaret på helt olika sätt.</p>
<p><strong>Konsumenttjänstlagen (KtjL, 1985:716)</strong> gäller när kunden är privatperson. Lagen är tvingande – du kan inte avtala bort den till kundens nackdel, oavsett vad som står i din offert. För småhusentreprenader kompletteras KtjL ofta av standardavtalen ABS 18 och hantverkarformuläret, men lagens miniminivå gäller alltid.</p>
<p><strong>AB 04 och ABT 06</strong> är branschens standardavtal mellan näringsidkare (B2B). De gäller bara om ert kontrakt uttryckligen hänvisar till dem. Gör det inte det, faller ni tillbaka på köplagens och avtalsrättens allmänna regler i stället.</p>
<p>Poängen är enkel: svaret på ett felkrav ser olika ut beroende på regelverk. Frister, bevisbörda och påföljder skiljer sig åt. Reder du inte ut detta först riskerar du att åberopa fel argument.</p>

<h2>Vad räknas egentligen som ett fel?</h2>
<p>Alla klagomål är inte fel i juridisk mening. Under KtjL (§§9–12) är tjänsten felaktig om resultatet avviker från <strong>fackmässigt utförande</strong>, från vad ni avtalat, från gällande säkerhetsföreskrifter eller från information du lämnat i marknadsföringen. Även utebliven upplysning om väsentliga förhållanden kan vara fel. Avgörande är hur arbetet såg ut när uppdraget avslutades (§12) – ett fel som fanns då men visar sig först senare räknas ändå.</p>
<p>Under AB 04 är fel en avvikelse från kontraktshandlingarna, och felet fastställs normalt genom besiktning. Det som noteras i ett besiktningsutlåtande är etablerat; det som inte noterats kan du ofta bestrida.</p>
<p>Lika viktigt är vad som <em>inte</em> är fel, och detta är ofta din bästa grund för att bemöta kravet:</p>
<ul>
<li>Normalt slitage och åldrande av material.</li>
<li>Skador orsakade av kundens egen felaktiga användning eller bristande skötsel.</li>
<li>Ändrade önskemål efter beställning – det är en ÄTA-fråga, inte ett fel.</li>
<li>Estetiska detaljer inom ramen för fackmässigt utförande.</li>
</ul>

<h2>Reklamationsfristen – kom kravet i tid?</h2>
<p>Det första du bör kontrollera är datum. En för sen reklamation kan innebära att kunden helt förlorar rätten att åberopa felet.</p>
<p><strong>Under KtjL (§17)</strong> ska konsumenten reklamera inom skälig tid efter att felet upptäckts. En reklamation inom två månader från upptäckten är alltid i rätt tid. Den yttersta reklamationsfristen är tre år från att uppdraget avslutades – men hela <strong>tio år</strong> för arbete på byggnad eller fast egendom. Missar konsumenten fristen förlorar hen enligt §18 rätten att åberopa felet. Det är en central invändning mot ett sent felkrav.</p>
<p><strong>Under AB 04</strong> ska reklamation ske <strong>skriftligt och utan dröjsmål</strong> efter att felet upptäckts. Muntliga klagomål behöver du inte beakta. Garantitiden är fem år för entreprenadens utförande och normalt två år för material och varor, räknat från godkänd slutbesiktning. Ansvarstiden är tio år. Under ABT 06 är garantitiden fem år för båda delarna. Kommer reklamationen för sent kan beställaren bli ansvarig för de merkostnader dröjsmålet orsakat – och vid orimligt sen reklamation förta kravet helt. I kommersiella entreprenader kan även ett par månaders dröjsmål vara för sent – bedömningen görs från fall till fall.</p>

<h2>Bevisbördan under och efter garantitiden (AB 04)</h2>
<p>Var i tiden kravet ligger avgör vem som måste bevisa vad – ett argument du bör använda aktivt i ditt svar.</p>
<p><strong>Under garantitiden</strong> presumeras entreprenören ansvara för fel som visar sig. I praktiken är bevisbördan omvänd: det är du som byggföretag som måste visa att felet beror på beställarens användning eller bristande skötsel, inte på ditt arbete. Ligger kravet här bör du snabbt samla underlag som pekar mot kundens hantering.</p>
<p><strong>Efter garantitiden</strong>, det vill säga år sex till tio inom ansvarstiden, vänder det. Nu måste beställaren bevisa både att felet är <strong>väsentligt</strong> och att det beror på din <strong>vårdslöshet</strong>. Det är en betydligt tyngre börda för kunden, och ofta din starkaste position i ett sent krav.</p>

<h2>Din starkaste rättighet: avhjälpanderätten</h2>
<p>Detta är den enskilt viktigaste rättigheten att känna till. Både KtjL (§20) och AB 04 ger dig rätt att <strong>själv åtgärda felet</strong>, på egen bekostnad, i stället för att betala prisavdrag eller skadestånd.</p>
<p>Under KtjL har du rätt att avhjälpa felet inom skälig tid efter reklamationen, förutsatt att det inte medför oskälig kostnad eller olägenhet för kunden. Avhjälpande är den primära påföljden i lagens trappa – den kommer före prisavdrag och hävning. Under AB 04 ska felet avhjälpas utan dröjsmål och senast <strong>två månader</strong> från det att beställarens skriftliga underrättelse skickades.</p>
<p>Varför är detta så värdefullt? Åtgärdar du själv slipper du betala en annan entreprenörs faktura, som nästan alltid är dyrare än din egen kostnad, och du undviker ett prisavdrag som du inte kontrollerar. Erbjud därför alltid avhjälpande skriftligt och boka in en tid snabbt. Vägrar kunden ta emot avhjälpande och anlitar någon annan, kan hen förlora rätten till ersättning.</p>

<h2>Så skriver du svaret på felkravet</h2>
<p>Ett bra svar är sakligt, snabbt och skriftligt. Följ den här checklistan:</p>
<ol>
<li>Bekräfta att du mottagit klagomålet och tacka för informationen.</li>
<li>Be om en skriftlig felbeskrivning med bilder och uppgift om när felet upptäcktes.</li>
<li>Hänvisa till rätt regelverk (KtjL eller AB 04) och relevant frist.</li>
<li>Ta ställning i sak: medge, bestrid eller medge delvis – med kort motivering.</li>
<li>Åberopa uttryckligen din avhjälpanderätt och föreslå en konkret tid eller besiktning.</li>
<li>Håll en professionell ton och spara all korrespondens.</li>
</ol>

<h2>Vanliga misstag att undvika</h2>
<ul>
<li>Att ignorera kravet – tystnad kan tolkas som medgivande och driver kunden till annan entreprenör.</li>
<li>Att medge fel för snabbt innan du utrett orsak och frist.</li>
<li>Att missa att åberopa avhjälpanderätten och i stället gå direkt på prisavdrag.</li>
<li>Att nöja sig med muntliga överenskommelser – utan skriftlig dokumentation står du svagt om det blir tvist.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att stå starkt när ett felkrav kommer, framför allt genom dokumentation. Med en genomförd egenkontroll och en löpande byggdagbok kan du visa vad som faktiskt utfördes, när och hur – underlag som ofta avgör bevisfrågan under garantitiden. Fyll i <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> vid varje moment och för projektets historik i <a href="/sv/verktyg/byggdagbok-mall">byggdagbok-mallen</a>. Då har du datum, åtgärder och avvikelser samlade den dag du behöver bemöta ett krav. ByggExp fattar inga juridiska beslut åt dig, men gör det enkelt att ha ordning på bevisen och att svara sakligt i tid.</p>

<h2>Vanliga frågor</h2>
<h3>Måste kunden reklamera skriftligt?</h3>
<p>Under AB 04 ja – reklamation ska ske skriftligt och utan dröjsmål, och muntliga klagomål behöver du inte beakta. Under Konsumenttjänstlagen finns inget formkrav, men en skriftlig reklamation underlättar för båda parter att visa när och hur felet påtalades.</p>
<h3>Kan kunden anlita en annan firma och skicka mig fakturan?</h3>
<p>Normalt inte, om du erbjudit avhjälpande. Både KtjL §20 och AB 04 ger dig rätt att åtgärda felet själv inom fristen. Anlitar kunden någon annan utan att ge dig den möjligheten kan hen förlora rätten till ersättning. Erbjud därför alltid avhjälpande skriftligt och snabbt.</p>
<h3>Hur länge kan en privatkund reklamera arbete på ett hus?</h3>
<p>För arbete på byggnad eller fast egendom gäller en yttre frist på tio år från att uppdraget avslutades. Kunden måste ändå reklamera inom skälig tid efter upptäckt – två månader är alltid i rätt tid. För sent innebär enligt §18 att rätten att åberopa felet går förlorad.</p>
<h3>Vad gäller om felet dyker upp efter garantitiden i AB 04?</h3>
<p>Då förskjuts bevisbördan till beställaren. Under år sex till tio inom ansvarstiden måste beställaren bevisa både att felet är väsentligt och att det orsakats av din vårdslöshet. Det är en tung börda och ofta din starkaste invändning mot ett sent krav.</p>

<h2>Kom igång</h2>
<p>Rätt bemött blir ett felkrav sällan en tvist. Nyckeln är att avgöra regelverket, kontrollera fristen och åberopa din avhjälpanderätt – med dokumentationen i ordning. Börja med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a> och för löpande anteckningar i <a href="/sv/verktyg/byggdagbok-mall">byggdagbok-mallen</a>. Vill du se hur ByggExp samlar egenkontroll, dagbok och projekthistorik på ett ställe? <a href="/sv/contact">Boka en demo här -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/reklamation-hantverkstjanst-frister">Reklamation av hantverkstjänst – frister och regler</a>, <a href="/sv/blog/slutbesiktning">Slutbesiktning steg för steg</a> och <a href="/sv/blog/garantitid-ansvarstid-ab-04">Garantitid och ansvarstid enligt AB 04</a>.</p>
`;

const A_REKLAMATION_BEMOTA_FELKRAV_ENTREPRENAD: BlogPost = {
  _id: "code-"+"reklamation-bemota-felkrav-entreprenad",
  title: "Så bemöter byggföretaget ett felkrav – reklamationsfrist och avhjälpanderätt", slug: "reklamation-bemota-felkrav-entreprenad", locale: "sv",
  excerpt: "En steg-för-steg-guide för hantverkare och små byggföretag som fått ett felkrav – från reklamationsfrist och bevisbörda till din starkaste rättighet: avhjälpanderätten.", tag: "Juridik",
  coverImageUrl: "/landing/features/2uppgift.webp", contentHtml: A_REKLAMATION_BEMOTA_FELKRAV_ENTREPRENAD_HTML,
  seoTitle: "Bemöta felkrav i entreprenad | ByggExp", seoDescription: "Så svarar byggföretaget rätt på ett felkrav: vilket regelverk gäller, reklamationsfristen, bevisbördan och din rätt att åtgärda felet själv.",
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:06:00.000Z", createdAt: "2026-08-19T08:06:00.000Z", updatedAt: "2026-08-19T08:06:00.000Z",
};

const A_SAGA_UPP_ANSTALLD_PERSONLIGA_SKAL_BYGG_HTML = `
<p>Att säga upp en anställd är en av de vanligaste juridiska fallgroparna för mindre byggföretag. Gör du fel — dokumenterar för dåligt, missar ett varsel eller kallar en person för arbetsbrist när det egentligen handlar om misskötsamhet — kan en enda felaktig uppsägning sluta i skadestånd på hundratusentals kronor. Sedan LAS ändrades den 1 oktober 2022 har dessutom flera av spelreglerna skrivits om, och det är lätt att gå på gammal information. Den här guiden går igenom vad som gäller 2026 för dig som driver byggverksamhet.</p>

<p>Ett korrekt och tydligt anställningsavtal är grunden i varje uppsägningsärende. Börja med att skapa ett med vår gratis <a href="/sv/verktyg/anstallningsavtal-mall">anställningsavtal-mall för bygg -&gt;</a>.</p>

<h2>Två skilda grunder — arbetsbrist och personliga skäl</h2>
<p>LAS känner två lagliga grunder för att säga upp en tillsvidareanställd. <strong>Arbetsbrist</strong> är verksamhetsskäl: order minskar, ett projekt tar slut, företaget omorganiserar. Det har ingenting med individen att göra och är den vanligaste grunden. <strong>Personliga skäl</strong> är kopplat till den enskilde arbetstagaren — misskötsamhet, samarbetsproblem, olovlig frånvaro eller upprepad arbetsvägran.</p>
<p>Utöver dessa finns <strong>avsked</strong> enligt 18 § LAS, en tredje och betydligt striktare väg som kräver att den anställde grovt åsidosatt sina skyldigheter, till exempel stöld eller allvarlig arbetsmiljöfara. Ett avsked ger ingen uppsägningstid och anställningen upphör omedelbart.</p>
<p>En avgörande princip: du får aldrig maskera personliga skäl som arbetsbrist för att slippa den strängare processen. Det kallas <em>fingerad arbetsbrist</em>, och om en domstol ser igenom det blir uppsägningen ogiltig. Vill du fördjupa dig i den andra grunden, läs vår guide om <a href="/sv/blog/uppsagning-arbetsbrist-bygg">uppsägning på grund av arbetsbrist</a>.</p>

<h2>Vad reformen 2022 ändrade — "saklig grund" blev "sakliga skäl"</h2>
<p>Den 1 oktober 2022 byttes begreppet i 7 § LAS från "saklig grund" till <strong>"sakliga skäl"</strong>. Det är mer än en språklig detalj. Reglerna gäller uppsägningsärenden som inletts från detta datum och innebär i praktiken:</p>
<ul>
<li>Arbetsgivaren ska <strong>inte längre göra en framtidsprognos</strong> om den anställdes beteende. Bedömningen fokuserar på om skälen i sig är sakliga.</li>
<li>Ingen <strong>intresseavvägning</strong> mot den anställdes intresse av att behålla jobbet ska göras.</li>
<li>Omplaceringsskyldigheten är begränsad — som huvudregel räcker <strong>en</strong> omplaceringsutredning per process, inte upprepade erbjudanden.</li>
<li>Under en pågående tvist om uppsägningens giltighet <strong>kvarstår anställningen inte längre</strong>. Den upphör vid uppsägningstidens slut även om beslutet bestrids. Tidigare fick den anställde vara kvar med lön tills tvisten var avgjord.</li>
</ul>
<p>Syftet var ökad förutsägbarhet för arbetsgivaren. Notera samtidigt att 7 § numera är semidispositiv på central nivå — parterna kan i centrala kollektivavtal, som Byggavtalet, komma överens om vad som utgör sakliga skäl på ett sätt som avviker från lagens huvudregler.</p>

<h2>Uppsägningstid enligt 11 § LAS</h2>
<p>Grundregeln i 11 § LAS är att den minsta uppsägningstiden är <strong>en månad</strong> för både arbetsgivare och arbetstagare. När det är <strong>arbetsgivaren som säger upp</strong> förlängs tiden efter sammanlagd anställningstid enligt en trappa:</p>
<ul>
<li>Mindre än 2 år: <strong>1 månad</strong></li>
<li>2 till under 4 år: <strong>2 månader</strong></li>
<li>4 till under 6 år: <strong>3 månader</strong></li>
<li>6 till under 8 år: <strong>4 månader</strong></li>
<li>8 till under 10 år: <strong>5 månader</strong></li>
<li>Minst 10 år: <strong>6 månader</strong></li>
</ul>
<p>Byggavtalet kan ge längre eller andra uppsägningstider, men ett kollektivavtal får aldrig inskränka de rättigheter LAS ger den anställde. Kontrollera alltid vad ert avtal säger innan du lämnar besked.</p>

<h2>Rätt process vid personliga skäl — steg för steg</h2>
<p>Det är processen, inte känslan av att någon "borde sluta", som avgör om uppsägningen håller. Följ ordningen:</p>
<ol>
<li><strong>Dokumentera misskötsamheten.</strong> Datum, händelse, konsekvens. Utan dokumentation står ord mot ord.</li>
<li><strong>Ge en skriftlig erinran (varning).</strong> Detta är inte en disciplinär bestraffning utan en påpekan om att beteendet inte accepteras och vad som händer om det upprepas. Som huvudregel krävs att du först tydliggjort misskötsamheten innan uppsägning blir aktuell.</li>
<li><strong>Gör en omplaceringsutredning.</strong> Finns annat ledigt arbete den anställde kan omplaceras till? En utredning räcker efter reformen.</li>
<li><strong>Underrätta den anställde och varsla facket.</strong> Enligt 30 § LAS ska skriftlig underrättelse lämnas till arbetstagaren minst två veckor i förväg, och samtidigt ska den lokala fackliga organisationen varslas om den anställde är organiserad.</li>
<li><strong>Ge rätt till överläggning.</strong> Den anställde eller facket kan begära överläggning inom en vecka. Uppsägningsbeskedet får inte lämnas förrän överläggningen är avslutad.</li>
<li><strong>Lämna en skriftlig uppsägning.</strong> Den ska innehålla besvärshänvisning — information om hur den anställde bestrider eller väcker talan — och överlämnas personligen.</li>
</ol>

<h2>Turordning vid arbetsbrist — och byggbranschens särregel</h2>
<p>Handlar det om arbetsbrist styr turordningen vem som får gå. Huvudprincipen i 22 § LAS är "sist in, först ut" inom turordningskretsen, baserat på sammanlagd anställningstid hos arbetsgivaren. Vid lika anställningstid går den yngre först.</p>
<p>Sedan 1 oktober 2022 får <strong>alla</strong> arbetsgivare, oavsett storlek, undanta upp till <strong>tre</strong> anställda från turordningen om de har särskild betydelse för verksamheten. Undantaget får bara göras en gång var sjätte månad.</p>
<p>Men här kommer den viktigaste bygg-specifika poängen: <strong>företag som är bundna av Byggavtalet får inte använda LAS tre-undantag.</strong> Arbetsdomstolen har slagit fast att undantagsrätten i stället följer en bilaga i kollektivavtalet — endast arbetsgivare med högst tio anställda får undanta högst två personer. Använder du fel regel riskerar hela turordningen att kullkastas. Byggavtalet, som gäller mellan Byggföretagen och Byggnads, löper i avtalsperioden 2025-05-01 till 2027-04-30 och är alltså i kraft under hela 2026.</p>

<h2>Vanliga misstag som kostar pengar</h2>
<ul>
<li>Att kalla personliga skäl för arbetsbrist (fingerad arbetsbrist).</li>
<li>Att säga upp utan att först ha gett en skriftlig erinran och dokumenterat misskötsamheten.</li>
<li>Att glömma varsla facket eller att lämna beskedet innan överläggningen avslutats.</li>
<li>En uppsägning utan besvärshänvisning eller som inte överlämnats skriftligt och personligen.</li>
<li>Att som byggföretag använda LAS tre-undantag i stället för Byggavtalets två-regel.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte juridisk rådgivning, men ger dig strukturen som gör att en uppsägning håller. Med vår <a href="/sv/verktyg/anstallningsavtal-mall">anställningsavtal-mall</a> lägger du grunden med tydliga villkor från dag ett — vilket underlättar hela vägen om ett ärende senare uppstår. I plattformen samlar du tidrapporter, närvaro och avvikelser per anställd, vilket ger dig den löpande dokumentation som en erinran och en eventuell uppsägning måste vila på. När allt finns samlat på ett ställe slipper du leta i mejl och sms den dag det verkligen gäller.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan sakliga skäl och saklig grund?</h3>
<p>"Saklig grund" var det gamla begreppet i 7 § LAS. Sedan 1 oktober 2022 heter det "sakliga skäl". Skillnaden är inte bara språklig: arbetsgivaren gör inte längre någon framtidsprognos eller intresseavvägning, och bedömningen fokuserar på om själva skälen är sakliga.</p>
<h3>Hur lång uppsägningstid har en anställd i byggbranschen?</h3>
<p>Minst en månad enligt 11 § LAS. När arbetsgivaren säger upp förlängs tiden stegvis efter anställningstid upp till sex månader vid minst tio års anställning. Byggavtalet kan ge längre tider — kontrollera ert kollektivavtal.</p>
<h3>Kan jag som byggföretag undanta tre personer från turordningen?</h3>
<p>Nej, inte om ni är bundna av Byggavtalet. Då gäller kollektivavtalets bilaga i stället för LAS tre-undantag: endast arbetsgivare med högst tio anställda får undanta högst två personer.</p>
<h3>Måste den anställde vara kvar med lön under en tvist?</h3>
<p>Nej, inte längre. Efter reformen 2022 upphör anställningen vid uppsägningstidens slut även om uppsägningen bestrids. Tidigare fick den anställde vara kvar med lön tills tvisten var avgjord.</p>

<h2>Kom igång</h2>
<p>Dokumentera tidigt, kontrollera alltid vad ert kollektivavtal säger och ta juridisk hjälp vid minsta tveksamhet — kostnaden för rådgivning är liten jämfört med ett skadestånd. Börja med att sätta villkoren rätt med vår <a href="/sv/verktyg/anstallningsavtal-mall">anställningsavtal-mall för bygg</a>, och vill du se hur ByggExp samlar tidrapporter och dokumentation per anställd kan du <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/uppsagning-arbetsbrist-bygg">Uppsägning på grund av arbetsbrist i byggbranschen</a>, <a href="/sv/blog/anstallningsavtal-mall-bygg">Anställningsavtal-mall för byggföretag</a>, <a href="/sv/blog/arbetstidslagen-bygg">Arbetstidslagen i byggbranschen</a>.</p>
`;

const A_SAGA_UPP_ANSTALLD_PERSONLIGA_SKAL_BYGG: BlogPost = {
  _id: "code-"+"saga-upp-anstalld-personliga-skal-bygg",
  title: "Säga upp en anställd av personliga skäl i byggbranschen — så gör du rätt enligt LAS (2026)", slug: "saga-upp-anstalld-personliga-skal-bygg", locale: "sv",
  excerpt: "Så säger du upp en anställd av personliga skäl korrekt enligt LAS — uppsägningstid, rätt process steg för steg och byggbranschens särregel vid turordning.", tag: "Juridik",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_SAGA_UPP_ANSTALLD_PERSONLIGA_SKAL_BYGG_HTML,
  seoTitle: "Säga upp anställd personliga skäl | ByggExp", seoDescription: "Uppsägningstid, sakliga skäl och skillnaden mot arbetsbrist enligt LAS efter reformen 2022 — plus byggbranschens egen turordningsregel. Guide för byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:12:00.000Z", createdAt: "2026-08-19T08:12:00.000Z", updatedAt: "2026-08-19T08:12:00.000Z",
};

const A_OB_OVERTID_BYGGAVTALET_RAKNA_HTML = `
<p>Fel på OB och övertid blir dyrt. Ett systematiskt räknefel som ligger kvar månad efter månad ger efterkrav, retroaktiva lönejusteringar och i värsta fall en tvist med MB-gruppen eller Byggnads region. Den här guiden går igenom hur OB-tillägg och övertidsersättning faktiskt fungerar i Byggavtalet mellan Byggföretagen och Byggnads, som löper 1 maj 2025 till 30 april 2027.</p>

<p>Vill du snabbt räkna ut ett tillägg? Använd vår gratis <a href="/sv/verktyg/ob-overtid-kalkylator">OB- och övertidskalkylator</a> – fyll i timlön och nivå så får du tillägget direkt. Vill du logga arbetad tid, OB och övertid direkt på arbetsplatsen? Testa vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a>.</p>

<h2>OB och övertid är två helt olika saker</h2>
<p>Den vanligaste källan till fel är att blanda ihop begreppen. Principen är enkel när man väl slagit fast den:</p>
<ul>
<li><strong>OB-ersättning</strong> handlar om <strong>när</strong> du jobbar. Den utgår när ordinarie arbetstid ligger på obekväm tid – tidig morgon, kväll, natt eller helg.</li>
<li><strong>Övertidsersättning</strong> handlar om att du jobbar <strong>utöver</strong> ditt ordinarie veckoarbetstidsmått. Det är själva merarbetet som ersätts, inte klockslaget i sig.</li>
</ul>
<p>Båda regleras i § 2 Arbetstid i Byggavtalet: OB i punkt 5 och övertid i punkt 6. Att hålla isär dem är förutsättningen för att räkna rätt.</p>

<h2>Nyckelregeln de flesta missar: aldrig samtidigt</h2>
<p>Detta är den enskilt viktigaste regeln, och den som oftast leder till felaktiga löneutbetalningar. Byggavtalet är uttryckligt: <em>OB-ersättning utges inte vid övertidsarbete</em>, och <em>när övertidsersättning utges ska inte OB-ersättning utges</em>.</p>
<p>Med andra ord: OB och övertid betalas <strong>aldrig samtidigt</strong>. Jobbar den anställde övertid en lördagkväll är det övertidsprocenten som gäller – inte övertid <em>plus</em> OB ovanpå. Det är antingen eller. Bygger man sitt lönesystem på att lägga OB och övertid på varandra betalar man ut för mycket, och gör man tvärtom betalar man ut för lite. Båda skapar problem.</p>

<h2>OB-ersättningens tre nivåer (§ 2 p5)</h2>
<p>OB räknas som en procentsats på den anställdes utgående lön (se nedan om vad det innebär). Byggavtalet har tre nivåer:</p>
<ul>
<li><strong>OB 1 = 20 %</strong></li>
<li><strong>OB 2 = 40 %</strong></li>
<li><strong>OB 3 = 70 %</strong></li>
</ul>
<p>Vilken nivå som gäller styrs av klockslag och veckodag. Tidig morgon kl 05–06 ligger på den lägsta nivån (<strong>OB 1 = 20 %</strong>), medan kväll kl 18–22 ligger på mellannivån (<strong>OB 2 = 40 %</strong>). Natt kl 22–05 samt hela lördag, söndag och helgdag ger den högsta satsen (<strong>OB 3 = 70 %</strong>). Vardagstid kl 06–18 är ordinarie tid utan OB. Stäm alltid av mot avtalstexten i § 2 p5 innan du bygger in gränserna i lönerutinen, eftersom det är just klockslagen som avgör vilken procent som ska användas.</p>

<h2>Övertidens fyra nivåer (§ 2 p6.1)</h2>
<p>Övertid har fyra nivåer, också beräknade i procent på utgående lön. Man skiljer på enkel och kvalificerad övertid:</p>
<ul>
<li><strong>Övertid A = 30 %</strong> – enkel övertid, vardag ungefär kl 06–17</li>
<li><strong>Övertid B = 50 %</strong> – kl 05–06 och 17–19</li>
<li><strong>Övertid C = 70 %</strong> – kl 19–22</li>
<li><strong>Övertid D = 100 %</strong> – kvalificerad övertid: natt kl 22–05 samt hela lördag, söndag och helgdag</li>
</ul>
<p>Det är tidpunkten för arbetet som avgör nivån. Ett övertidspass som sträcker sig över flera intervall kan alltså träffa flera satser under samma kväll.</p>

<h2>Vad är "utgående lön" – räkna på rätt underlag (§ 3 p6.2)</h2>
<p>Både OB och övertid är procent på <strong>utgående lön</strong>, inte på grundtimlönen. Det är en viktig skillnad. Utgående lön är den anställdes fastställda tim- eller månadslön <strong>inklusive</strong> utfall av rörlig lönedel, alltså prestationslön eller tidlön. Det är bruttolön exklusive sociala avgifter och exklusive tillägg enligt lag och avtal.</p>
<p>Räknar du OB och övertid enbart på grundtimlönen, och den anställde har rörlig lönedel, blir underlaget för lågt och ersättningen fel.</p>
<p>För månadsavlönade måste månadslönen först räknas om till timlön. Byggavtalet anger en specifik formel för både OB och övertid – inte den generiska divisorn 173,3:</p>
<p><strong>(månadslönen × 12) / (52 × genomsnittlig veckoarbetstid)</strong></p>

<h2>Räkneexempel steg för steg</h2>
<p>Satserna nedan är procent enligt avtalet. Kronorna beror helt på den anställdes egen utgående lön – här använder vi en påhittad timlön på <strong>220 kr/tim</strong> enbart för att visa metoden.</p>
<p><strong>Exempel 1 – enkel övertid (A, 30 %):</strong> Två timmar övertid en vardag på dagtid.<br>Övertidstillägg: 220 × 0,30 = 66 kr/tim. Utöver detta utgår ersättning för själva den arbetade tiden enligt avtalets systematik. Tillägget för två timmar blir 2 × 66 = 132 kr.</p>
<p><strong>Exempel 2 – kvalificerad övertid (D, 100 %):</strong> Tre timmars arbete en söndag.<br>Övertidstillägg: 220 × 1,00 = 220 kr/tim. För tre timmar blir tillägget 3 × 220 = 660 kr. Notera att här gäller <strong>inte</strong> något OB ovanpå – det är övertid D som är hela ersättningen för det obekväma läget.</p>
<p>Behöver du ett grepp om vad timmen faktiskt kostar företaget när tillägg räknas in, testa vår <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylator</a>.</p>

<h2>Kompensationsledighet istället för pengar</h2>
<p>Övertid kan ersättas med ledig tid istället för kontanter, om arbetsgivare och arbetstagare kommer överens. Omräkningen följer nivåerna:</p>
<ul>
<li><strong>Övertid A → 1,3 tim</strong> kompledigt per övertidstimme</li>
<li><strong>Övertid B → 1,5 tim</strong></li>
<li><strong>Övertid C → 1,7 tim</strong></li>
<li><strong>Övertid D → 2,0 tim</strong></li>
</ul>
<p>De timmar som kompenseras med ledighet återförs till övertidsutrymmet – det vill säga de belastar inte det årliga övertidstaket på samma sätt som utbetald övertid.</p>

<h2>Övertidstak och övertidsjournal (§ 2 p6.2–6.3)</h2>
<p>Allmän övertid är begränsad: högst 48 timmar per fyra veckor eller 50 timmar per kalendermånad, dock högst 200 timmar per år. Arbetsgivaren och Byggnads region kan avtala om ytterligare högst 150 timmar per år, förutsatt max 13 timmars arbetstid per dygn och minst 11 timmars dygnsvila.</p>
<p>Arbetsgivaren är skyldig att föra <strong>övertidsjournal</strong> där varje arbetstagares övertidsutrymme framgår. Huvudregeln är att övertidsperioden löper 1 januari–31 december, alltså kalenderåret. Om arbetsgivaren istället vill tillämpa perioden 1 april–31 mars (semesteråret) ska MB-gruppen, facklig förtroendeman eller – om sådan saknas – berörd Byggnads region informeras. Övertid förutsätter dessutom att en överenskommelse träffas mellan arbetsledning och arbetstagare innan arbetet utförs – undantaget är kortvarigt övertidsarbete av tillfällig natur på arbetsgivarens begäran.</p>

<h2>Vanliga fel som kostar pengar</h2>
<ul>
<li>Lägga OB och övertid på varandra – de utgår aldrig samtidigt.</li>
<li>Räkna på grundtimlön istället för utgående lön inklusive rörlig lönedel.</li>
<li>Använda 173,3 som divisor för månadsavlönade istället för avtalets formel.</li>
<li>Missa att övertid kräver överenskommelse innan arbetet påbörjas.</li>
<li>Sakna övertidsjournal och tappa kontrollen på det årliga taket.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att fånga rätt underlag från början. I tidrapporten loggar den anställde faktiska start- och sluttider, vilket gör att OB-läge och övertid går att härleda till klockslag och veckodag i efterhand – inte gissas fram vid lönekörningen. Du får ett spårbart tidsunderlag per person och projekt som förenklar avstämning mot övertidsjournalen och underlättar dialogen med MB-grupp och lönekontor.</p>
<p>ByggExp räknar inte automatiskt ut kollektivavtalets exakta OB- och övertidsprocent åt dig – de satserna och tidsgränserna måste alltid verifieras mot Byggavtalet § 2 (och definitionen av utgående lön i § 3 p6.2). Verktyget ser till att grunddatat är korrekt och komplett, så att själva beräkningen vilar på rätt siffror.</p>

<h2>Vanliga frågor</h2>
<h3>Kan OB och övertid betalas ut samtidigt?</h3>
<p>Nej. Byggavtalet är tydligt: OB-ersättning utges inte vid övertidsarbete, och när övertidsersättning utges ska inte OB utges. Vid övertid gäller övertidsprocenten som hela ersättningen för det obekväma läget.</p>
<h3>Räknas OB och övertid på grundlönen eller på utgående lön?</h3>
<p>På utgående lön, som är den fastställda tim- eller månadslönen inklusive utfall av rörlig lönedel (prestationslön/tidlön). Grundtimlön ensam ger fel underlag om den anställde har rörlig lönedel.</p>
<h3>Hur räknar jag om månadslön till timlön för OB och övertid?</h3>
<p>Enligt Byggavtalets formel: (månadslönen × 12) / (52 × genomsnittlig veckoarbetstid). Använd inte den generiska divisorn 173,3 – avtalet anvisar den här beräkningen för både OB och övertid.</p>
<h3>Hur mycket övertid får en anställd arbeta?</h3>
<p>Allmän övertid är högst 48 timmar per fyra veckor eller 50 timmar per kalendermånad, dock högst 200 timmar per år. Efter överenskommelse med Byggnads region kan ytterligare högst 150 timmar per år tillkomma, med max 13 timmars dygn och minst 11 timmars dygnsvila.</p>

<h2>Kom igång</h2>
<p>Bygg rutinen på ett korrekt tidsunderlag. Kom igång med vår <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> och boka en demo via <a href="/sv/contact">/sv/contact</a> om du vill se hur ByggExp håller ordning på tid, OB och övertid per projekt. Stäm alltid av satser och gränser mot Byggavtalet § 2 och kontrollera med MB-grupp eller Byggnads region vid minsta tvekan.</p>

<p>Relaterat: <a href="/sv/blog/arbetstidslagen-bygg">Arbetstidslagen i byggbranschen</a> och <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag</a>.</p>
`;

const A_OB_OVERTID_BYGGAVTALET_RAKNA: BlogPost = {
  _id: "code-"+"ob-overtid-byggavtalet-rakna",
  title: "OB och övertid i Byggavtalet – så räknar du rätt", slug: "ob-overtid-byggavtalet-rakna", locale: "sv",
  excerpt: "OB och övertid betalas aldrig samtidigt och räknas på utgående lön, inte grundtimlön. Så fungerar nivåerna, taket och journalen i Byggavtalet § 2.", tag: "Lön & avtal",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_OB_OVERTID_BYGGAVTALET_RAKNA_HTML,
  seoTitle: "OB och övertid i Byggavtalet | ByggExp", seoDescription: "Så räknar du OB-tillägg och övertidsersättning rätt enligt Byggavtalet § 2: nivåer, utgående lön, övertidstak och de vanligaste felen som kostar pengar.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T09:43:00.000Z", createdAt: "2026-08-19T09:43:00.000Z", updatedAt: "2026-08-19T09:43:00.000Z",
};

const A_KONSUMENTTJANSTLAGEN_HANTVERKARE_15_PROCENT_HTML = `
<p>Prisfrågan är den vanligaste tvistefrågan mellan hantverkare och privatkund. Jobbet drar ut på tiden, väggen visar sig vara rutten bakom kaklet, och slutfakturan landar långt över det pris du muntligt kastade fram vid första besöket. Kunden vägrar betala, och du står med en fordran du kanske inte kan driva in. Konsumenttjänstlagen (KtjL) styr exakt hur mycket du får överskrida ett lämnat pris — och det berömda 15 %-taket i 36 § är både snävare och mer villkorat än många i branschen tror. Här går vi igenom regelverket paragraf för paragraf, så att du kan avisera merkostnader på ett sätt som håller juridiskt.</p>

<p>Grunden för allt är en tydlig offert där prismodellen framgår svart på vitt. Sätt upp den med <a href="/sv/verktyg/offert-mall">vår gratis offertmall &rarr;</a> så slipper du efterhandsdiskussioner om vad ni egentligen kom överens om.</p>

<h2>Tre prismodeller — och bara en utlöser 15 %-regeln</h2>
<p>KtjL är tvingande till konsumentens förmån: avtalsvillkor som är sämre för kunden än lagen är utan verkan. Det första du måste ha klart för dig är vilken prismodell du faktiskt har lämnat, för det avgör hur mycket utrymme du har.</p>
<ul>
<li><strong>Fast pris</strong> får inte ändras alls. Har du lämnat ett fast pris är du bunden vid det, punkt slut — merkostnader får du bära själv om inget annat följer av lagen.</li>
<li><strong>Takpris (högsta pris)</strong> får inte överskridas. Du kan fakturera mindre om jobbet gick fortare, men aldrig mer än taket.</li>
<li><strong>Ungefärligt pris</strong> är den enda modellen där 15 %-regeln i 36 § gäller: det uppgivna priset får inte överskridas med mer än 15 %.</li>
</ul>
<p>Har inget pris avtalats alls ska konsumenten betala ett <em>skäligt</em> pris enligt 36 §. Det låter fritt, men i praktiken hamnar du i en bevissituation där du måste kunna motivera varje krona — betydligt sämre läge än en tydlig offert.</p>

<h2>Vad 15 %-taket i 36 § faktiskt innebär</h2>
<p>Enligt 36 § konsumenttjänstlagen (1985:716) gäller: har näringsidkaren lämnat en ungefärlig prisuppgift får det uppgivna priset inte överskridas med mer än 15 procent — om inte annan prisgräns har avtalats eller näringsidkaren har rätt till pristillägg enligt 38 §. Allmänna reklamationsnämnden (ARN) tillämpar samma tröskel i sin praxis.</p>
<p>Två saker missförstås ofta. För det första räknas taket på <strong>hela</strong> den ungefärliga prisuppgiften, inte per post. Lämnade du 100 000 kr ungefärligt får slutsumman bli högst 115 000 kr — även om en enskild delpost sprack med 40 %. För det andra måste priset verkligen ha lämnats som ungefärligt. Ett vagt formulerat "ca-pris" som kunden rimligen uppfattar som fast blir bindande som fast pris, och då finns inget 15 %-utrymme överhuvudtaget. Oklarhet tolkas till konsumentens fördel. Skriv därför uttryckligen "ungefärlig prisuppgift" i offerten — inte bara ett cirkatecken framför siffran.</p>

<h2>De två lagliga vägarna över 15 % (38 §)</h2>
<p>38 § KtjL anger uttömmande när du får ta betalt utöver det ungefärliga priset och dess 15 %-tak. Det finns exakt två vägar:</p>
<ol>
<li><strong>Tilläggsarbete enligt 8 §</strong> — arbete utöver det avtalade uppdraget som du och kunden kommit överens om att utföra.</li>
<li><strong>Kostnadsökningar hänförliga till konsumenten</strong> som du inte bort förutse — exempelvis att kunden lämnat felaktiga uppgifter om underlaget eller vägrat ge dig tillträde så att arbetet fördröjts.</li>
</ol>
<p>Allt annat får du inte fakturera över taket. Blev virket dyrare på grund av allmänna prisökningar? Underskattade du din egen tidsåtgång? Sådant faller på dig, inte kunden. Det är just den här begränsningen som gör att ordet "oförutsett" måste kunna knytas till konsumentens förhållanden — inte till din egen kalkyl.</p>

<h2>Aviseringsplikten steg för steg (8 § och 4 §)</h2>
<p>4 § KtjL kräver att du utför tjänsten fackmässigt och med tillbörlig omsorg tar till vara kundens intressen samt <em>samråder</em> med kunden i den utsträckning som behövs. 8 § konkretiserar detta för tilläggsarbete: uppkommer behov av arbete som lämpligen bör utföras samtidigt ska du underrätta konsumenten och begära anvisningar. I praktiken innebär det en tydlig kedja:</p>
<ol>
<li>Upptäck avvikelsen — den rutna reglen, det extra skiktet, den felaktiga befintliga installationen.</li>
<li>Stoppa och underrätta kunden innan du fortsätter.</li>
<li>Begär anvisningar <strong>skriftligt</strong>, med beskrivning av arbetet och vad merkostnaden blir.</li>
<li>Vänta på OK innan du utför tilläggsarbetet.</li>
</ol>
<p>Når du inte kunden får du enligt 8 § ändå utföra tilläggsarbetet om priset är obetydligt eller lågt i förhållande till avtalet, eller om det finns särskild anledning att anta att kunden vill ha det utfört. Men luta dig inte mot det undantaget i onödan — konsekvensen av utebliven avisering är att rätten att ta betalt för merkostnaden kan gå helt förlorad. Underlåter du att underrätta kunden riskerar du att inte kunna driva in beloppet alls.</p>

<h2>Fackmässighet och avrådandeplikt (4 § och 6 §)</h2>
<p>Merkostnader som beror på ditt eget slarv eller ofackmässigt utförande får aldrig vältras över på kunden — brister fackmässigheten anses tjänsten felaktig enligt 4 §. Om du måste göra om ett moment för att första försöket inte höll fackmässig standard är det din kostnad.</p>
<p>6 § lägger till en avrådandeplikt: är tjänsten inte till rimlig nytta för konsumenten, eller blir priset oproportionerligt högt i förhållande till nyttan, ska du avråda. Upptäcker du halvvägs in att renoveringen blir dyrare än vad huset tål värdemässigt, säg det. Följer du inte avrådandeplikten kan din rätt till betalning begränsas — även för arbete du faktiskt utfört.</p>

<h2>Reklamationsrätten du måste räkna med (17 §)</h2>
<p>Prishanteringen slutar inte när fakturan är betald. Enligt 17 § KtjL får kunden reklamera fel inom skälig tid efter att felet märkts eller borde ha märkts — och en underrättelse inom <strong>två månader</strong> anses alltid ha skett i rätt tid. Den yttersta fristen är normalt tre år efter att uppdraget avslutades, men för arbete på mark, byggnader eller andra anläggningar på mark eller i vatten, samt fasta saker, gäller <strong>tio år</strong>. Har du handlat grovt vårdslöst eller i strid mot tro och heder gäller alltid tio år.</p>
<p>För dig som bygg- eller anläggningsföretag betyder det i praktiken en tioårig exponering på merparten av dina jobb. Din dokumentation — offert, ÄTA-underlag, aviseringar och signaturer — måste därför kunna plockas fram långt efter avslutat uppdrag.</p>

<h2>Praktisk checklista och mallformuleringar</h2>
<ul>
<li><strong>Ange prismodellen explicit i offerten.</strong> Skriv "fast pris", "takpris (högsta pris)" eller "ungefärlig prisuppgift" — inte ett ensamt cirkatecken som kan tolkas emot dig.</li>
<li><strong>Använd en ÄTA-lapp med signatur.</strong> Varje tilläggs- och ändringsarbete dokumenteras, prissätts och signeras innan det utförs. Sätt upp den med <a href="/sv/verktyg/ata-mall">vår gratis ÄTA-mall &rarr;</a>.</li>
<li><strong>Avisera merkostnad skriftligt</strong> — sms, mejl eller signerad lapp — med belopp och orsak, och invänta OK.</li>
<li><strong>Spara all dokumentation i tio år</strong> för arbete på byggnader, mark och fasta saker.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp bygger inte bort juridiken åt dig, men verktygen gör det enkelt att göra rätt. I offertmallen anger du prismodell direkt, så att "ungefärlig prisuppgift" står tydligt utskrivet och 15 %-utrymmet faktiskt gäller. ÄTA-mallen ger dig ett spårbart underlag för varje tilläggsarbete med plats för beskrivning, pris och kundens godkännande — precis det som 8 § kräver. Och eftersom offerter, ÄTA och godkännanden samlas per projekt har du kvar aviseringskedjan om en reklamation dyker upp flera år senare. Målet är att din merkostnad ska vara aviserad, godkänd och dokumenterad — inte en tvist i efterhand.</p>

<h2>Vanliga frågor</h2>
<h3>Gäller 15 %-taket alltid när jag lämnat ett pris?</h3>
<p>Nej. 36 § KtjL:s 15 %-tak gäller enbart när du lämnat en <em>ungefärlig</em> prisuppgift. Fast pris får inte ändras alls och takpris får inte överskridas. Har du lämnat ett vagt "ca-pris" som kunden uppfattat som fast, kan det bli bindande som fast pris — då finns inget 15 %-utrymme.</p>
<h3>Hur kan jag ta betalt mer än 15 % över det ungefärliga priset?</h3>
<p>Bara på de två vägar som 38 § anger: tilläggsarbete enligt 8 § som du och kunden kommit överens om, eller kostnadsökningar som beror på omständigheter hänförliga till konsumenten och som du inte bort förutse. Allt annat, som egna felkalkyler eller allmänna prisökningar, får du inte lägga ovanpå taket.</p>
<h3>Vad händer om jag glömmer avisera merkostnaden?</h3>
<p>Underlåter du att underrätta kunden om förändrade förhållanden eller merkostnad kan din rätt att ta betalt för det beloppet gå förlorad. Merkostnaden riskerar då att inte kunna drivas in alls, även om arbetet var nödvändigt. Avisera därför alltid skriftligt och invänta kundens anvisning.</p>
<h3>Hur länge kan kunden reklamera mitt arbete?</h3>
<p>Kunden ska reklamera inom skälig tid, och en reklamation inom två månader räknas alltid som i rätt tid. Yttersta fristen är tre år, men tio år för arbete på byggnader, mark och andra anläggningar samt fasta saker — och alltid tio år vid grov vårdslöshet. Spara därför din dokumentation i minst tio år.</p>

<h2>Kom igång</h2>
<p>Rätt prishantering börjar i offerten och fortsätter i varje ÄTA. Ange prismodellen tydligt med <a href="/sv/verktyg/offert-mall">offertmallen</a>, dokumentera tilläggsarbeten med <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a> och avisera merkostnader skriftligt innan du utför dem. Vill du se hur ByggExp samlar offerter, ÄTA och godkännanden per projekt så att aviseringskedjan finns kvar även efter tio år — <a href="/sv/contact">boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/ata-arbeten">ÄTA-arbeten — så hanterar du ändringar och tillägg</a>, <a href="/sv/blog/reklamation-hantverkstjanst-frister">Reklamation av hantverkstjänst — frister att hålla koll på</a> och <a href="/sv/blog/muntligt-avtal-sakra-bevis">Muntligt avtal — så säkrar du bevis</a>.</p>
`;

const A_KONSUMENTTJANSTLAGEN_HANTVERKARE_15_PROCENT: BlogPost = {
  _id: "code-"+"konsumenttjanstlagen-hantverkare-15-procent",
  title: "Konsumenttjänstlagens 15 %-tak: så aviserar du merkostnader utan att bryta mot KtjL", slug: "konsumenttjanstlagen-hantverkare-15-procent", locale: "sv",
  excerpt: "Ungefärligt pris får enligt 36 § konsumenttjänstlagen överskridas med max 15 % — här är de två lagliga vägarna över taket och hur du aviserar merkostnader så att du behåller rätten att ta betalt.", tag: "Juridik",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_KONSUMENTTJANSTLAGEN_HANTVERKARE_15_PROCENT_HTML,
  seoTitle: "15 %-taket i KtjL för hantverkare | ByggExp", seoDescription: "Ungefärligt pris får överskridas med max 15 % enligt 36 § KtjL. Så aviserar du tilläggsarbete och merkostnader korrekt — och behåller rätten att fakturera.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T10:00:00.000Z", createdAt: "2026-08-19T10:00:00.000Z", updatedAt: "2026-08-19T10:00:00.000Z",
};

const A_ENTREPRENADTVIST_UNDVIKA_DOKUMENTATION_HTML = `
<p>En entreprenadtvist kostar tid, pengar och kundrelationer – och de flesta går att undvika långt innan de hamnar hos en jurist eller i domstol. Det avgörande sker inte i efterhand, utan under projektets gång. Den hantverkare eller det byggföretag som dokumenterar löpande står med bevisen i handen när det väl blir oenigt, medan motparten sitter kvar med sina minnesbilder. De fyra vanligaste tvistorsakerna är fel i utförandet, försening, ÄTA-arbeten och utebliven betalning – och samtliga avgörs ytterst av vem som kan visa vad som faktiskt hände.</p>

<p>Ett bra ställe att börja är en byggdagbok som förs samma dag som arbetet utförs – testa vår <a href="/sv/verktyg/byggdagbok-mall">gratis byggdagboksmall -&gt;</a> och gör den samtida dokumentationen till en rutin i stället för en efterhandskonstruktion.</p>

<h2>De fyra vanligaste tvistorsakerna</h2>
<p>Nästan alla entreprenadtvister kan sorteras under fyra rubriker, och gemensamt för dem alla är att de handlar om bevisning – vem sa vad, när, och till vilket pris.</p>
<ul>
<li><strong>Fel i utförandet.</strong> Beställaren menar att arbetet inte håller avtalad kvalitet. Frågan blir då vad som var avtalat och vad som faktiskt levererades.</li>
<li><strong>Försening.</strong> Vem orsakade dröjsmålet? Beror det på entreprenören, på beställarens hinder, eller på tillkommande arbeten som förskjutit tidplanen?</li>
<li><strong>ÄTA-arbeten.</strong> Oenighet om beställning, omfattning och pris. ÄTA lyfts genomgående fram som den enskilt vanligaste tvistefrågan i entreprenader.</li>
<li><strong>Betalning.</strong> Obetalda fakturor och ÄTA där beställaren bestrider att arbetet var beställt eller att priset är rimligt.</li>
</ul>
<p>Poängen är enkel: den som har skriftliga spår vinner, den som förlitar sig på minnet förlorar.</p>

<h2>ÄTA: den vanligaste fällan</h2>
<p>ÄTA står för ändrings-, tilläggs- och avgående arbeten och regleras i AB 04 och ABT 06 kap 2 §§ 3–9. Skillnaden mellan avtalen är viktig. Enligt AB 04 (kap 2 § 6) ska en beställning av ÄTA ske skriftligen innan arbetet påbörjas – och en ritning eller ett PM räknas som skriftlig beställning. Enligt ABT 06, som gäller totalentreprenad där entreprenören själv projekterar, finns inget formellt krav på skriftlig beställning; muntligt räcker rent juridiskt.</p>
<p>Låt dig inte luras av det. Även på en totalentreprenad ska du alltid dokumentera. En muntlig beställning som ingen kommer ihåg är värdelös när fakturan ifrågasätts sex månader senare.</p>
<p>Glöm inte heller underrättelseskyldigheten: förhållanden som ger rätt till ÄTA – exempelvis likställda ÄTA – ska anmälas till beställaren <em>utan dröjsmål</em>. Utebliven eller för sen underrättelse kan innebära att du förlorar rätten till både ersättning och tidsförlängning. Praktiskt betyder det en ÄTA-lapp per ändring, med omfattning, tids- och kostnadspåverkan, koppling till rätt ritning eller version, samt kvittens från beställaren.</p>

<h2>Byggdagboken som räddar dig</h2>
<p>En byggdagbok eller platsdagbok är inte ett generellt lagkrav, men den blir ofta bindande genom AB 04/ABT 06. Den ska föras löpande och innehålla datum, väder och temperatur, närvarande personal och underentreprenörer, utfört arbete, materialleveranser, avvikelser, hinder, fattade beslut och utförda ÄTA.</p>
<p>Kärnbudskapet är att en anteckning skriven samma dag väger betydligt tyngre som bevis än en minnesbild flera månader senare. Det är just samtidigheten som gör dagboken till ett så starkt verktyg vid tvist om försening och ansvar – den visar dag för dag vad som stod i vägen och vem som orsakade det. En dagbok som fylls i i efterhand, inför en tvist, har långt sämre bevisvärde.</p>

<h2>Egenkontroll och kontrollplan – två system, inte ett</h2>
<p>Här blandar många ihop två skilda saker. Byggherrens kontrollplan och egenkontroll enligt PBL är ett myndighetskrav vid lov- och anmälningspliktiga åtgärder. Entreprenörens avtalade egenkontroll enligt AB 04/ABT 06 är någonting annat. Kontrollplanen enligt PBL är normalt mindre omfattande än byggherrens samlade egenkontroll och ersätter den inte.</p>
<p>För dig som utförare är den dokumenterade egenkontrollen – med foton och mätvärden – ditt främsta skydd mot felpåståenden. Kan du visa att du kontrollmätte fuktkvot, dokumenterade fallet i våtrummet eller fotograferade tätskiktet före kakelsättning, blir det svårt för beställaren att i efterhand hävda att arbetet inte höll måttet.</p>

<h2>Fristerna som avgör om du får betalt</h2>
<p>Många byggföretag förlorar pengar inte på grund av dåligt arbete, utan för att de missar en tidsfrist. I AB 04/ABT 06 gäller följande:</p>
<ul>
<li><strong>Entreprenörens fordringar</strong> – till exempel obetalda ÄTA – preskriberas 6 månader efter entreprenadens godkännande (kap 6 § 19).</li>
<li><strong>Beställarens anspråk på förseningsvite</strong> preskriberas 3 månader efter godkännandet (kap 5 § 3).</li>
</ul>
<p>Missar du fristen förlorar du rätten att kräva betalning. Slutbesiktningen och godkännandet startar alltså klockan – slarva inte med den. Kom också ihåg garantiansvaret: garantitiden är som huvudregel 5 år för entreprenörens arbetsprestation och 2 år för material och varor, medan ansvarstiden är 10 år från godkännandet. Under garantitiden gäller omvänd bevisbörda – <strong>du</strong> måste bevisa att felet inte beror på dig. Efter garantitiden är det beställaren som måste bevisa att du orsakat felet, och då krävs ansvar bara för väsentliga fel som beror på vårdslöshet.</p>

<h2>När kunden är konsument</h2>
<p>Arbetar du mot privatpersoner gäller konsumenttjänstlagen (1985:716) i stället. Enligt 17 § ska reklamation ske inom skälig tid, och en reklamation inom 2 månader efter att felet upptäckts anses alltid ha skett i rätt tid. Den yttersta reklamationsfristen är 3 år, men 10 år för arbete på mark, byggnader och andra fasta anläggningar. Vid grov vårdslöshet eller handlande i strid mot tro och heder gäller alltid 10 år.</p>
<p>Använd rätt standardavtal: ABS 18 för ny- och tillbyggnad av en- eller tvåbostadshus, och Hantverkarformuläret 17 för mindre projekt som målning, golv och snickeri. Båda är framtagna av Konsumentverket tillsammans med byggbranschen och är tvingande till konsumentens förmån där konsumenttjänstlagen ger starkare skydd. Skriv alltid tydligt avtal med pris och tidplan. Blir det ändå tvist kan konsumenten vända sig till ARN (Allmänna reklamationsnämnden), som lämnar en rekommendation till beslut. Sedan 1 augusti 2025 är lägsta värdegräns 3 000 kr för bostadstvister, anmälningsavgiften är 150 kr och handläggningstiden runt 6 månader.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp samlar den löpande dokumentationen på ett ställe, så att bevisningen byggs upp automatiskt medan projektet pågår – inte i panik efteråt. Du för byggdagbok samma dag från mobilen på bygget, registrerar varje ÄTA med omfattning, pris och kvittens kopplat till rätt projekt, och sparar egenkontroller med foton och mätvärden. Allt hamnar tidsstämplat och sökbart per projekt, vilket gör att du snabbt kan ta fram exakt vad som skedde ett visst datum om en fråga uppstår. Verktyget avgör inte en tvist åt dig, men det gör det enkelt att faktiskt ha den samtida dokumentation som väger tyngst när det gäller.</p>

<h2>Vanliga frågor</h2>
<h3>Måste ÄTA-arbeten alltid beställas skriftligt?</h3>
<p>Enligt AB 04 (kap 2 § 6) ska beställning ske skriftligen innan arbetet påbörjas, och en ritning eller ett PM räknas som skriftlig beställning. I ABT 06 finns inget formellt skriftlighetskrav – muntligt räcker. Oavsett avtal bör du alltid dokumentera skriftligt, eftersom det är dokumentationen som avgör en eventuell tvist.</p>
<h3>Hur länge kan jag kräva betalt för utförda ÄTA?</h3>
<p>Enligt AB 04/ABT 06 kap 6 § 19 preskriberas entreprenörens fordringar 6 månader efter entreprenadens godkännande. Missar du den fristen förlorar du rätten att kräva betalning, så bevaka den noga efter slutbesiktning.</p>
<h3>Är byggdagbok ett lagkrav?</h3>
<p>Nej, det finns inget generellt lagkrav på byggdagbok. Men den blir ofta bindande genom AB 04/ABT 06, och framför allt är den ditt starkaste bevismedel. Anteckningar som skrivs samma dag väger betydligt tyngre än minnesbilder i efterhand.</p>
<h3>Vad gäller för reklamation när kunden är privatperson?</h3>
<p>Konsumenttjänstlagen (1985:716) gäller. Reklamation inom 2 månader efter att felet upptäckts anses alltid ha skett i rätt tid. Yttersta frist är 3 år, men 10 år för arbete på byggnader och andra fasta anläggningar.</p>

<h2>Kom igång</h2>
<p>Bygg upp bevisningen medan projektet pågår. Börja med en samtida byggdagbok via vår <a href="/sv/verktyg/byggdagbok-mall">byggdagboksmall</a>, håll ordning på ändringar med <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a> och dokumentera kvaliteten med <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmallen</a>. Vill du se hur allt hänger ihop i praktiken? <a href="/sv/contact">Boka en demo</a> så visar vi hur du får dokumentationen på plats utan extra pappersarbete.</p>

<p>Relaterat: <a href="/sv/blog/ata-arbeten">ÄTA-arbeten – så hanterar du dem rätt</a>, <a href="/sv/blog/byggdagbok">Byggdagbok: krav, innehåll och rutiner</a>, <a href="/sv/blog/havning-av-entreprenad">Hävning av entreprenad</a>.</p>
`;

const A_ENTREPRENADTVIST_UNDVIKA_DOKUMENTATION: BlogPost = {
  _id: "code-"+"entreprenadtvist-undvika-dokumentation",
  title: "Undvik entreprenadtvist: dokumentationen som räddar dig i efterhand", slug: "entreprenadtvist-undvika-dokumentation", locale: "sv",
  excerpt: "Nästan alla entreprenadtvister handlar ytterst om bevisning – den som dokumenterar löpande vinner i efterhand.", tag: "Entreprenadjuridik",
  coverImageUrl: "/landing/features/2uppgift.webp", contentHtml: A_ENTREPRENADTVIST_UNDVIKA_DOKUMENTATION_HTML,
  seoTitle: "Undvik entreprenadtvist | ByggExp", seoDescription: "De fyra vanligaste tvistorsakerna i entreprenader – och vilken dokumentation (dagbok, ÄTA, egenkontroll) som avgör tvisten i efterhand.",
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T10:09:00.000Z", createdAt: "2026-08-19T10:09:00.000Z", updatedAt: "2026-08-19T10:09:00.000Z",
};

const A_INDEXREGLERING_ENTREPRENAD_KOSTNADSOKNING_HTML = `
<p>Du lämnar en offert idag, men bygget startar om åtta månader och pågår i ett år. Under tiden rör sig materialpriserna – trä, stål, isolering, VVS. Har du satt ett fast pris utan skydd är det du som byggföretag, inte beställaren, som tar hela smällen när fakturorna landar högre än kalkylen. En indexklausul löser det: den flyttar en del av prisrisken till beställaren på ett förutsägbart sätt, redan i offerten.</p>

<p>Enklast bygger du in klausulen direkt när du skriver anbudet – använd gärna vår gratis <a href="/sv/verktyg/offert-mall">offertmall</a> som utgångspunkt så att index, littera och regleringsvillkor kommer med från början.</p>

<h2>Fast pris utan skydd = din risk</h2>
<p>Ett fast pris är en prognos om framtiden. På ett kort projekt på några veckor är risken hanterbar – dina inköpspriser hinner sällan röra sig dramatiskt. Men ju längre projektet är, desto mer glider verkligheten från kalkylen. En prisuppgång på några procent på materialdelen kan äta upp hela marginalen, och eftersom materialet ofta köps in i skarven mellan projektstart och slutfas slår det direkt på både resultat och kassaflöde.</p>
<p>Utan klausul finns bara två utfall: antingen har du lagt på en rejäl riskpremie (och riskerar att förlora affären på pris), eller så har du tagit risken själv och hoppas att priserna står stilla. Indexreglering ger ett tredje, mer professionellt alternativ – du prissätter tight men lägger in en mekanism som justerar automatiskt om priserna faktiskt rör sig.</p>

<h2>Två vägar att ta betalt – kap 6 § 3 vs indexklausul</h2>
<p>Har du inte skrivit in någon indexklausul är du hänvisad till AB 04/ABT 06 kap 6 § 3. Den regeln tillåter att avtalat pris ändras endast i tre fall: (1) myndighets åtgärd, (2) krig eller krisförhållande med liknande effekt, eller (3) onormala prisförändringar på material som ingår i entreprenaden. Och det räcker inte med att ett av fallen inträffar – kostnadsändringen måste dessutom ha varit <strong>oförutsebar</strong> och <strong>väsentligt</strong> påverka hela entreprenadens kostnad.</p>
<p>Vad som är "väsentligt" har ingen fast procentgräns i regeln. I praxis har kostnadsändringar på omkring 3,6 % respektive 4,8 % av kontraktssumman bedömts som väsentliga, och branschvägledning brukar peka på cirka 3 % som riktmärke – men med osäkerhet. Dessutom måste du som entreprenör bevisa kostnadsökningen med underlag, till exempel leverantörsfakturor eller prisindex. I praktiken betyder det tröskel, bevisbörda och ofta tvist. Kap 6 § 3 är en undantagsregel för extremfall, inte en pålitlig huvudplan för vardagens prisrörelser.</p>
<p>Indexklausulen fungerar tvärtom: den justerar automatiskt och förutsägbart utan att du behöver bevisa oförutsebarhet eller nå någon väsentlighetströskel. Därför rekommenderar Byggföretagen index som det primära verktyget mot materialprisökningar – skriv in redan i offerten vilket index som gäller, hur ofta det regleras och hur beloppet räknas.</p>

<h2>Så fungerar Entreprenadindex 2026</h2>
<p>Från 1 januari 2026 har Entreprenadindex bytt producent. SCB producerade indexet till och med december 2025, därefter tog SBI Svenska Branschindex AB över (helägt av Sydsvenska Industri- och Handelskammaren). Indexet publiceras numera den 20:e varje månad, med data för föregående månad.</p>
<p>Viktigt att förstå: Entreprenadindex är inte ett enda tal. Det innehåller drygt 200 olika indexserier – så kallade littera – för olika entreprenadtyper. Ni <strong>måste</strong> ange i kontraktet eller offerten exakt vilket eller vilka littera som ska gälla. Saknas den uppgiften blir klausulen svår, ibland omöjlig, att tillämpa i efterhand.</p>
<p>Regleringen omfattar inte heller hela summan. Vid huvud- och undergruppsreglering reduceras enligt tillämpningsföreskrifterna värdet av utfört arbete en viss månad till 90 % (faktor 0,9) innan det multipliceras med indexförändringen mot bastidpunkten. De återstående 10 % är en icke-reglerbar baskostnad som medvetet lämnas oindexerad, för att dämpa inflationsdrivande helindexering. I den vanliga tillämpningen indexreglerar du alltså inte hela kontraktssumman – räkna med 90 %.</p>

<h2>Så skriver du in indexklausulen i offerten</h2>
<p>Checklista för en klausul som håller:</p>
<ol>
<li><strong>Index och exakt littera</strong> – ange "Entreprenadindex" samt vilken littera/serie som gäller för din entreprenadtyp.</li>
<li><strong>Bastidpunkt</strong> – vilken basmånad indexförändringen ska räknas mot (ofta anbudsmånaden).</li>
<li><strong>Regleringsfrekvens</strong> – vanligen månadsvis på värdet av det arbete som utförts respektive månad.</li>
<li><strong>Beräkningsmetod</strong> – hänvisa till Entreprenadindex tillämpningsföreskrifter inklusive 0,9-faktorn.</li>
<li><strong>Ev. materialspecifik referens</strong> – för enskilda material kan du hänvisa till SCB:s Byggkostnadsindex (BKI), som tidigare hette Faktorprisindex för byggnader (FPI) och mäter prisutveckling på produktionsfaktorer som byggmaterial, VVS, el, löner, maskiner och transport.</li>
<li><strong>En tydlig mening i offerten</strong> – skriv rakt ut att priset indexregleras, så att beställaren inte blir överraskad av tillägg senare.</li>
</ol>

<h2>Exempel: räkna på regleringen</h2>
<p>Anta att du under en månad utför arbete och material till ett värde av 500 000 kr som omfattas av det valda litterat. Indexet har stigit 2,3 % sedan bastidpunkten (samma storleksordning som BKI för flerbostadshus rörde sig maj 2026 mot maj 2025).</p>
<ul>
<li>Reglerbar del: 500 000 × 0,9 = <strong>450 000 kr</strong></li>
<li>Indextillägg: 450 000 × 2,3 % = <strong>10 350 kr</strong></li>
<li>De 10 % baskostnad (50 000 kr) lämnas oindexerad.</li>
</ul>
<p>Du fakturerar alltså 10 350 kr extra för den månaden – automatiskt, transparent och utan att behöva bevisa att prisuppgången var "oförutsebar". Över ett långt projekt med stigande priser blir summan snabbt skillnaden mellan planerad och urholkad marginal. Vill du se hur ett sådant tillägg påverkar täckningsbidraget kan du testa i vår <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylator</a>.</p>

<h2>Vanliga fallgropar</h2>
<ul>
<li><strong>Glömt att ange littera</strong> – "index gäller" utan serie är i praktiken oanvändbart.</li>
<li><strong>Ingen bastidpunkt</strong> – utan basmånad finns inget att mäta förändringen mot.</li>
<li><strong>Tro att hela summan regleras</strong> – vid huvud-/undergruppsreglering lämnas 10 % som oindexerad baskostnad.</li>
<li><strong>Fel publiceringsdatum i rutinen</strong> – kom ihåg att indexet numera kommer den 20:e, inte den 15:e.</li>
<li><strong>Klausulen kommer först i kontraktet</strong> – ta med den redan i offerten så priset inte förhandlas ner utan skyddet.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du offerten från en mall där du kan lägga in en fast textrad om indexreglering, valt littera och bastidpunkt – så att den följer med på varje anbud automatiskt och du slipper glömma den under tidspress. Rader och belopp räknas ihop åt dig, och när projektet fortlöper har du underlaget samlat för att fakturera indextillägg månad för månad. ByggExp räknar inte fram indextalet åt dig – de hämtar du från Entreprenadindex – men verktyget ser till att klausulen finns med, att kalkylen hänger ihop och att dokumentationen bevaras i den ordning som gör efterfaktureringen enkel.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag ha en indexklausul, eller räcker kap 6 § 3?</h3>
<p>Kap 6 § 3 gäller alltid som en sista utväg, men den kräver att prisändringen var oförutsebar och väsentlig (i praxis runt 3,6–4,8 % av kontraktssumman) och att du bevisar den med underlag. Det leder ofta till tvist. En indexklausul justerar automatiskt och förutsägbart och rekommenderas som huvudverktyg.</p>
<h3>Kan jag indexreglera hela kontraktssumman?</h3>
<p>Nej. Vid huvud- och undergruppsreglering regleras enligt tillämpningsföreskrifterna bara 90 % av värdet av utfört arbete; de återstående 10 % är en icke-reglerbar baskostnad som medvetet lämnas oindexerad.</p>
<h3>Vilket littera ska jag välja?</h3>
<p>Entreprenadindex innehåller drygt 200 littera för olika entreprenadtyper. Du väljer den serie som motsvarar din entreprenad och anger den uttryckligen i offerten. Utan angivet littera är klausulen svår att tillämpa.</p>
<h3>Vad är skillnaden mellan Entreprenadindex och BKI?</h3>
<p>Entreprenadindex (från 2026 producerat av SBI) används för att reglera entreprenadpriser via littera. BKI – SCB:s Byggkostnadsindex, som tidigare hette Faktorprisindex för byggnader (FPI) – mäter prisutvecklingen på produktionsfaktorer och kan användas som referens för enskilda material.</p>

<h2>Kom igång</h2>
<p>Lägg in indexklausulen redan i nästa anbud. Börja i vår <a href="/sv/verktyg/offert-mall">offertmall</a>, testa marginaleffekten i <a href="/sv/verktyg/paslag-marginal-kalkylator">påslagskalkylatorn</a>, och vill du se hela flödet i ByggExp – boka en <a href="/sv/contact">demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/fast-pris-eller-lopande-rakning">Fast pris eller löpande räkning</a>, <a href="/sv/blog/entreprenadkontrakt-mall">Entreprenadkontrakt – mall</a>, <a href="/sv/blog/skriva-offert">Så skriver du en offert</a>.</p>
`;

const A_INDEXREGLERING_ENTREPRENAD_KOSTNADSOKNING: BlogPost = {
  _id: "code-"+"indexreglering-entreprenad-kostnadsokning",
  title: "Indexreglering i entreprenad – skydda din marginal", slug: "indexreglering-entreprenad-kostnadsokning", locale: "sv",
  excerpt: "Ett fast pris utan skydd lägger hela prisrisken på dig. Så skriver du in en indexklausul med Entreprenadindex och littera redan i offerten.", tag: "Entreprenad",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_INDEXREGLERING_ENTREPRENAD_KOSTNADSOKNING_HTML,
  seoTitle: "Indexreglering entreprenad | ByggExp", seoDescription: "Så bygger du in en indexklausul i offerten med Entreprenadindex 2026, rätt littera och 0,9-faktorn – och skyddar marginalen mot stigande materialpriser.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T10:36:00.000Z", createdAt: "2026-08-19T10:36:00.000Z", updatedAt: "2026-08-19T10:36:00.000Z",
};

const A_BESIKTNINGSANMARKNING_ATGARDA_BEMOTA_HTML = `
<p>Slutbesiktningen är dagen då allt avgörs. Här bestäms om entreprenaden godkänns eller inte, garantitiden börjar löpa och felansvaret ritas om. En rad anmärkningar i protokollet betyder inte att jobbet är underkänt – men om du bemöter dem fel kan det kosta dig både pengar och slutbetalning. Den här artikeln går igenom, enligt AB 04 kap 7, hur du som entreprenör bemöter, prioriterar och åtgärdar en besiktningsanmärkning på rätt sätt.</p>

<p>Ett strukturerat besiktnings- och åtgärdsarbete börjar redan under produktionen. Dokumentera arbetet löpande med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a> så står du starkare när besiktningsmannen kommer.</p>

<h2>Vad godkänd slutbesiktning faktiskt betyder</h2>
<p>Godkänd slutbesiktning är den centrala rättshändelsen i ett AB 04-kontrakt. När besiktningsmannen godkänner entreprenaden inträffar flera saker samtidigt: entreprenaden anses avlämnad, kontraktstiden upphör, garantitiden börjar löpa, ditt ansvar för vård av och skada på entreprenaden upphör och du kan kräva slutbetalning.</p>
<p>Slutbesiktning ska normalt ske vid kontraktstidens utgång eller utan dröjsmål efter att entreprenaden anmälts färdigställd. Poängen som många missar: en anmärkning i utlåtandet innebär inte automatiskt att jobbet underkänns. Tvärtom kan entreprenaden godkännas trots antecknade fel. Skillnaden mellan att bli godkänd med anmärkningar och att bli underkänd är avgörande – i det ena fallet startar garantitiden och du får betalt, i det andra rullar kontraktstiden vidare med allt vad det innebär av kostnader och risk.</p>

<h2>Fel av väsentlig betydelse vs. fel av mindre betydelse</h2>
<p>Huvudregeln i AB 04 är tydlig: entreprenaden ska godkännas vid slutbesiktning om den inte innehåller fel av väsentlig betydelse. Fel av mindre betydelse som förekommer i begränsad omfattning hindrar alltså inte godkännande – de antecknas som anmärkningar, men entreprenaden godkänns ändå. Det är först när felen begränsar beställarens möjlighet att använda entreprenaden för avsett ändamål, eller äventyrar säkerheten, som besiktningsmannen ska underkänna.</p>
<p>Så skiljer du grovt:</p>
<ul>
<li><strong>Godkänns (med anmärkning):</strong> mindre ytfel, enstaka justeringar, kompletteringar som inte hindrar användning – rättas men stoppar inte godkännandet.</li>
<li><strong>Godkänns inte:</strong> fel som gör att lokalen inte kan användas som avsett, brister som äventyrar säkerheten eller väsentliga fel i stor omfattning.</li>
</ul>
<p>Oavsett vilket kvarstår din skyldighet att avhjälpa de antecknade felen. Godkännande betyder att garantitiden startar – inte att anmärkningarna försvinner. De ska ändå rättas.</p>

<h2>Fel eller bara estetik?</h2>
<p>En vanlig konflikt vid besiktning gäller estetik. Här är det viktigt att hålla isär två saker. Ett fel i AB 04:s mening föreligger när resultatet avviker från kontraktshandlingarna, från fackmässig standard eller från avtalad kvalitet. Besiktningsmannen ska bedöma avvikelse mot avtalet – inte personlig smak.</p>
<p>Att beställaren tycker att en kulör eller en fog ser tråkig ut är inte per automatik ett fel. Är utförandet fackmässigt och i enlighet med handlingarna har du levererat rätt, även om resultatet inte matchar beställarens subjektiva förväntan. När du bemöter en estetisk anmärkning: be besiktningsmannen ange exakt vilken kontraktshandling eller vilket toleranskrav utförandet avviker från. Kan ingen sådan avvikelse pekas ut är det svårt att hävda fel.</p>
<p>Den bästa försäkringen tar du dock i förväg. Oklara estetiska krav bör preciseras i beskrivning och toleranskrav redan i kontraktshandlingarna. Då slipper du diskutera smak vid besiktningen och kan hänvisa till svart på vitt vad som är avtalat.</p>

<h2>Så bemöter du anmärkningarna på plats och i protokollet</h2>
<p>Var alltid med vid besiktningen. Det är din enda chans att i realtid bemöta bedömningar och få dina invändningar antecknade. Accepterar du inte en anmärkning – begär att din avvikande mening förs in i utlåtandet, och be besiktningsmannen precisera vilken avvikelse mot avtalet felet grundas på.</p>
<p>Delar du inte besiktningsmannens bedömning finns ett formellt verktyg: <strong>överbesiktning</strong>. Både entreprenör och beställare kan påkalla överbesiktning, men det måste ske skriftligen inom tre veckor efter att parten fått del av utlåtandet. En överbesiktningsnämnd består av tre personer – parterna utser var sin ledamot, och dessa två utser tillsammans ordföranden. Överbesiktningen ersätter det ordinarie utlåtandet. Missar du treveckorsfristen står den ursprungliga bedömningen fast, så ha koll på datumet från den dag du fick handlingen.</p>

<h2>Åtgärda i rätt tid – och efterbesiktning</h2>
<p>Antecknade fel ska du avhjälpa på egen bekostnad. Gör du inte det inom rätt tid har beställaren rätt att låta någon annan utföra arbetet – på din räkning. Det är en dyr väg att hamna på, både i kronor och i förtroende, så prioritera avhjälpandet direkt efter besiktningen.</p>
<p>När felen är åtgärdade sker en efterbesiktning för att kontrollera och stänga anmärkningarna. Dokumentera avhjälpandet skriftligt – vad som gjordes, när och av vem – så att du kan visa att felet är rättat. Rör det sig om ändrings- eller tilläggsarbeten som uppstår i samband med avhjälpandet, håll ordning på det ekonomiska underlaget med <a href="/sv/verktyg/ata-mall">vår ÄTA-mall</a> så att inget arbete utförs oreglerat.</p>

<h2>Garantitid och felansvar – tidslinjen du måste hålla koll på</h2>
<p>Efter godkänd slutbesiktning löper garantitiden. Enligt AB 04 kap 4 § 7 är den som huvudregel fem år för din arbetsprestation och två år för material och varor. Får du längre garanti av din leverantör gäller den längre tiden även mot beställaren.</p>
<p>Mot slutet av garantitiden ska beställaren påkalla garantibesiktning – i praktiken senast omkring tre månader före garantitidens utgång. Under garantitiden gäller omvänd bevisbörda: fel som antecknas presumeras vara ditt ansvar, och det är du som får visa att felet beror på något annat. Efter garantitidens utgång vänder det – då bär beställaren bevisbördan, och du ansvarar bara för väsentliga fel som visas ha sin grund i din vårdslöshet. Den totala ansvarstiden är tio år från godkännandet.</p>
<p>Kom också ihåg reklamationsfristerna: beställaren får som huvudregel bara åberopa fel som antecknats i utlåtandet, men kan skriftligen påtala fel inom sex månader efter entreprenadtidens utgång – eller inom arton månader för väsentliga fel. Läs mer i vår artikel om <a href="/sv/blog/garantitid-ansvarstid-ab-04">garantitid och ansvarstid enligt AB 04</a>.</p>

<h2>Checklista: från anmärkning till stängt ärende</h2>
<ol>
<li>Var med vid besiktningen och läs utlåtandet noga.</li>
<li>Skilj väsentliga fel från mindre – och fel från subjektiv estetik.</li>
<li>Begär att avvikande mening antecknas direkt.</li>
<li>Överväg överbesiktning inom tre veckor om du inte accepterar bedömningen.</li>
<li>Avhjälp antecknade fel på egen bekostnad, i tid.</li>
<li>Dokumentera avhjälpandet skriftligt och kalla till efterbesiktning.</li>
<li>Bevaka garantibesiktningen inför garantitidens slut.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ihop hela kedjan från produktion till stängd anmärkning. Med egenkontroller kopplade till projektet bygger du löpande upp den dokumentation som visar fackmässigt utförande – underlaget du behöver om en anmärkning eller ett estetikkrav ifrågasätts. När fel ska åtgärdas samlar du beslut, ÄTA och skriftlig bekräftelse på avhjälpandet på ett ställe, så att inget faller mellan stolarna inför efterbesiktningen. Vi hävdar inte att systemet ersätter juridisk rådgivning i en tvist, men det gör det enkelt att ha rätt papper på rätt plats när det gäller.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag åtgärda anmärkningar även om entreprenaden godkändes?</h3>
<p>Ja. Att entreprenaden godkänns betyder att garantitiden startar och att du kan kräva slutbetalning – men de fel som antecknats i utlåtandet ska ändå avhjälpas på din bekostnad.</p>
<h3>När startar garantitiden efter slutbesiktning?</h3>
<p>Garantitiden börjar löpa vid godkänd slutbesiktning. Enligt AB 04 är den som huvudregel fem år för arbetsprestationen och två år för material och varor.</p>
<h3>Vad gör jag om jag inte håller med besiktningsmannen?</h3>
<p>Begär att din avvikande mening antecknas i utlåtandet. Accepterar du ändå inte bedömningen kan du påkalla överbesiktning skriftligen inom tre veckor efter att du fått del av utlåtandet.</p>
<h3>Räknas en estetisk anmärkning som fel?</h3>
<p>Inte automatiskt. Ett fel föreligger när resultatet avviker från kontraktshandlingar, fackmässig standard eller avtalad kvalitet. Ren smak är inte ett fel – be besiktningsmannen peka ut avvikelsen mot avtalet.</p>

<h2>Kom igång</h2>
<p>Bygg upp dokumentationen redan under produktionen med <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a>, och håll ordning på tillkommande arbeten med <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a>. Vill du se hur ByggExp knyter ihop egenkontroll, ÄTA och åtgärder i ett flöde? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/slutbesiktning">Slutbesiktning – så förbereder du dig</a>, <a href="/sv/blog/garantitid-ansvarstid-ab-04">Garantitid och ansvarstid enligt AB 04</a> och <a href="/sv/blog/reklamation-bemota-felkrav-entreprenad">Så bemöter du reklamationer och felkrav i entreprenad</a>.</p>
`;

const A_BESIKTNINGSANMARKNING_ATGARDA_BEMOTA: BlogPost = {
  _id: "code-"+"besiktningsanmarkning-atgarda-bemota",
  title: "Besiktningsanmärkning efter slutbesiktning – så bemöter och åtgärdar du felen utan att förlora pengar", slug: "besiktningsanmarkning-atgarda-bemota", locale: "sv",
  excerpt: "En praktisk genomgång enligt AB 04 kap 7 av hur du som entreprenör bemöter, prioriterar och åtgärdar besiktningsanmärkningar rätt.", tag: "Entreprenadjuridik",
  coverImageUrl: "/landing/features/2uppgift.webp", contentHtml: A_BESIKTNINGSANMARKNING_ATGARDA_BEMOTA_HTML,
  seoTitle: "Besiktningsanmärkning åtgärda | ByggExp", seoDescription: "Så bemöter och åtgärdar du besiktningsanmärkningar efter slutbesiktning enligt AB 04 kap 7 – fel vs estetik, efterbesiktning och när garantitiden startar.",
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T11:09:00.000Z", createdAt: "2026-08-19T11:09:00.000Z", updatedAt: "2026-08-19T11:09:00.000Z",
};

const A_RETENTIONSRATT_HANTVERKARE_INNEHALLA_ARBETE_HTML = `
<p>Kunden hämtar inte prylen, svarar inte på fakturan och du sitter med hans egendom i verkstaden. Får du hålla kvar den tills du fått betalt? Ofta ja, men bara om tre villkor är uppfyllda, och om du gör fel kan du själv bli anmäld för självtäkt. Här går vi igenom hur du använder retentionsrätten lagligt, var gränsen mot brott går och varför den inte fungerar på ett husbygge.</p>

<p>När det väl gått så här långt är grunden alltid en tydlig faktura och en dokumenterad påminnelsekedja. Bygg din faktura med <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall</a> så att förfallodag, belopp och betalningsvillkor är svart på vitt, det är den fordran retentionsrätten vilar på.</p>

<h2>Vad retentionsrätt faktiskt är</h2>
<p>Retentionsrätt är rätten att hålla kvar (behålla besittningen av) någon annans lösa egendom som säkerhet tills en förfallen fordran betalats. Den är inte samlad i en enda lag utan erkänd i rättspraxis och i vissa speciallagar. Viktigast av allt: rätten ger dig bara rätt att <strong>hålla kvar</strong> saken, inte att sälja eller förfoga över den. Kvarhållandet är ett påtryckningsmedel, inte en betalning i sig.</p>
<p>Blanda inte ihop retentionsrätt med detentionsrätt. Detentionsrätt är rätten att hålla inne din egen prestation tills motparten presterar, alltså att inte lämna ifrån dig arbetet förrän du fått betalt. Retentionsrätt gäller att hålla kvar någon annans sak. Det är olika rättsfigurer, och som du ser längre ner är detentionsrätten framför allt kundens verktyg.</p>

<h2>De tre kraven som måste vara uppfyllda</h2>
<p>Innan du håller kvar något måste samtliga tre grundkrav vara på plats:</p>
<ul>
<li><strong>Laglig besittning.</strong> Du ska ha fått saken i din vård på laglig väg, till exempel att kunden lämnat in den för reparation. Har du tagit den med list eller våld gäller ingen retentionsrätt.</li>
<li><strong>Konnexitet.</strong> Fordran måste ha samband med just den sak du håller kvar. Du får hålla kvar bilen för den obetalda reparationen av just den bilen, inte för en gammal orelaterad skuld kunden har hos dig.</li>
<li><strong>Klar och förfallen fordran.</strong> Kravet ska vara ostridigt och ha passerat förfallodagen. En fordran kunden bestrider på goda grunder räknas inte som klar.</li>
</ul>
<p>Exempel: en kund lämnar in en maskin för service. Arbetet är utfört, fakturan har förfallit och kunden vägrar betala. Då har du laglig besittning, konnexitet mellan skulden och maskinen och en förfallen fordran, och du får hålla kvar maskinen tills betalning sker.</p>

<h2>Den stora begränsningen: bara lös egendom</h2>
<p>Retentionsrätt förutsätter att du har besittning av lös egendom. Vid byggnadsentreprenad arbetar du på kundens fasta egendom, huset eller tomten, och den kan du inte hålla kvar. Entreprenören har ingen retentionsrätt eller motsvarande förmånsrätt i den uppförda byggnaden. Du kan inte hålla huset som gisslan för en obetald slutfaktura.</p>
<p>Det du har i stället vid entreprenad är avtalsmässiga verktyg: betalningsplan med tydliga betalningsstationer, à conto-fakturering under arbetets gång och rätten att ställa in fortsatt arbete vid utebliven betalning. Poängen är att inte ligga ute med hela din prestation, utan att fakturera i takt med att jobbet fortskrider så att din exponering aldrig blir större än nödvändigt.</p>

<h2>Du får hålla, men inte sälja hur som helst</h2>
<p>Att du får hålla kvar saken betyder inte att du får sälja den för att få betalt. Försäljning kräver stöd i Lag (1985:982) om näringsidkares rätt att sälja saker som inte har hämtats. Processen ser ut så här:</p>
<ol>
<li>Arbetet ska vara slutfört eller avtalet ha upphört.</li>
<li>Kunden ska anmanas att hämta saken genom rekommenderat brev, där du anger skulden och upplyser om att saken får säljas om den inte hämtas.</li>
<li>Minst <strong>tre månader</strong> ska ha förflutit efter anmaningen innan försäljning får ske.</li>
</ol>
<p>Det finns ett snabbspår: om sakens försäljningsvärde uppenbart understiger en hundradel av prisbasbeloppet får du sälja eller kassera den efter ett år utan anmaning. Prisbasbeloppet 2026 är 59 200 kr, så tröskeln ligger på cirka 592 kr. Överskott efter avdrag för dina kostnader ska betalas till kunden, utom belopp under 50 kr. Är fordran tvistig får försäljning inte ske förrän tvisten är slutligt avgjord.</p>

<h2>Gränsen mot brott, här går det snett</h2>
<p>Två straffbestämmelser är centrala. Om kunden med våld eller hot tar tillbaka den sak du lagligt håller kvar begår <strong>kunden</strong> egenmäktigt förfarande enligt Brottsbalken 8 kap. 8 §, med böter eller fängelse i högst ett år (grovt brott upp till fyra år). Bestämmelsen träffar uttryckligen den som med våld eller hot hindrar någon att utöva sin rätt att kvarhålla något.</p>
<p>Men risken går åt båda håll. Tar du dig rätt på egen hand kan <strong>du</strong> dömas för självtäkt enligt Brottsbalken 8 kap. 9 §, böter eller fängelse i högst sex månader. Det gäller den som med olovligt tillgrepp tar sig rätt fastän han tror sig ha rätt till saken. Att bryta dig in och ta tillbaka en pryl, eller att behålla eller sälja utöver din faktiska rätt, riskerar självtäkt eller olovligt förfogande. Att på egen hand ta tillbaka egendom är lagligt bara på färsk gärning, alltså i princip direkt i stunden, inte flera dagar senare.</p>

<h2>När kunden håller inne mot dig</h2>
<p>Är kunden en konsument har hen ett eget lagligt motvapen. Enligt konsumenttjänstlagen (1985:716) 19 § får konsumenten hålla inne så mycket av betalningen att det ger säkerhet för hans krav på grund av fel i tjänsten, och 27 § ger samma rätt vid dröjsmål. Detta är kundens detentionsrätt.</p>
<p>Det viktiga för dig: innehållet ska motsvara felets eller kravets värde, inte mer. Men om kunden håller inne på en rimlig grund blir din fordran inte längre klar, och då vacklar själva förutsättningen för din retentionsrätt. Därför lönar det sig att först reda ut en eventuell reklamation, gärna med besiktning, innan du lutar dig mot rätten att hålla kvar.</p>

<h2>Så gör du i ByggExp</h2>
<p>Retentionsrätten hänger på att fordran är klar, förfallen och dokumenterad. I ByggExp skapar du fakturor med tydlig förfallodag och betalningsvillkor, och du ser direkt vilka fakturor som passerat förfallodagen. Behöver du trappa upp trycket innan du håller kvar något skickar du strukturerade betalningspåminnelser med <a href="/sv/verktyg/betalningspaminnelse-mall">vår mall för betalningspåminnelse</a>, så att du har en spårbar kedja att hänvisa till om ärendet går vidare till Kronofogden.</p>
<p>ByggExp ger dig inte juridisk rådgivning och avgör inte om ett enskilt kvarhållande är lagligt, det beror på omständigheterna. Men verktyget ger dig underlaget: avtal, fakturor, förfallodatum och påminnelsehistorik samlat, vilket är precis den dokumentation du behöver för att visa att fordran är klar och förfallen.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag hålla inne kundens grej tills fakturan är betald?</h3>
<p>Ja, om du har den lösa egendomen i laglig besittning, fordran hör ihop med just den saken och fordran är klar och förfallen. Då får du hålla kvar den som säkerhet. Du får däremot inte sälja den utan att följa Lag (1985:982).</p>
<h3>Kan jag hålla inne ett husbygge tills jag fått betalt?</h3>
<p>Nej. Retentionsrätt gäller bara lös egendom i din besittning. På fast egendom, som kundens hus eller tomt, har du ingen retentionsrätt. Vid entreprenad använder du i stället betalningsplan, à conto-fakturering och rätten att ställa in fortsatt arbete.</p>
<h3>Får jag åka hem till kunden och ta tillbaka det jag levererat?</h3>
<p>Var mycket försiktig. Att på egen hand ta tillbaka egendom är lagligt bara på färsk gärning, alltså i stunden. Bryter du dig in eller tar saken i efterhand riskerar du att dömas för självtäkt enligt Brottsbalken 8 kap. 9 §. Använd hellre betalningsföreläggande hos Kronofogden.</p>
<h3>Vad händer om kunden med våld tar tillbaka saken jag håller kvar?</h3>
<p>Då är det kunden som begår brott, egenmäktigt förfarande enligt Brottsbalken 8 kap. 8 §, som ger böter eller fängelse i högst ett år. Bestämmelsen skyddar uttryckligen din rätt att kvarhålla saken.</p>

<h2>Kom igång</h2>
<p>Retentionsrätten är ett verkligt påtryckningsmedel, men bara på lös egendom, bara vid en konnex och förfallen fordran, och aldrig med våld eller egenmäktig försäljning. Se till att grunden är i ordning: skapa tydliga fakturor med <a href="/sv/verktyg/faktura-mall">fakturamallen</a> och trappa upp med <a href="/sv/verktyg/betalningspaminnelse-mall">betalningspåminnelser</a> innan du håller något kvar. Vill du se hur ByggExp samlar avtal, fakturor och påminnelser på ett ställe, <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a>, <a href="/sv/blog/drojsmalsranta-2026">Dröjsmålsränta 2026</a> och <a href="/sv/blog/betalningsvillkor-faktura-bygg">Betalningsvillkor på byggfakturor</a>.</p>
`;

const A_RETENTIONSRATT_HANTVERKARE_INNEHALLA_ARBETE: BlogPost = {
  _id: "code-"+"retentionsratt-hantverkare-innehalla-arbete",
  title: "Retentionsrätt för hantverkare: när får du hålla inne arbetet tills kunden betalat?", slug: "retentionsratt-hantverkare-innehalla-arbete", locale: "sv",
  excerpt: "Retentionsrätten låter dig hålla kvar kundens lösa egendom som säkerhet för en förfallen faktura, men bara under tre villkor och aldrig med våld eller egenmäktig försäljning.", tag: "Juridik",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_RETENTIONSRATT_HANTVERKARE_INNEHALLA_ARBETE_HTML,
  seoTitle: "Retentionsrätt hantverkare | ByggExp", seoDescription: "Får du hålla kvar kundens sak tills fakturan är betald? Så använder du retentionsrätten lagligt och undviker att själv anmälas för självtäkt.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T12:33:00.000Z", createdAt: "2026-08-19T12:33:00.000Z", updatedAt: "2026-08-19T12:33:00.000Z",
};

const A_RESTLISTA_OVERLAMNING_BYGG_MALL_HTML = `
<p>Slutbesiktningen är sällan slutet. Nästan alltid finns kvarstående arbeten och anmärkningar kvar när besiktningsmannen lämnar platsen, och det är här projekt antingen stängs snyggt eller drar ut i veckor av mejl, oklara ansvar och innehållna pengar. En strukturerad <strong>restlista</strong> — punchlist — är det praktiska verktyget som håller ordning på varje anmärkning tills den är åtgärdad och kvitterad. Den här artikeln ger dig en färdig <strong>restlista bygg mall</strong>, de obligatoriska kolumnerna och en rutin som säkrar att listan faktiskt stängs före godkänd överlämning.</p>

<p>Vill du börja direkt? Bygg din restlista och koppla den till egenkontrollen med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a>.</p>

<h2>Vad är en restlista — och hur skiljer den sig från besiktningsutlåtandet?</h2>
<p>Vid slutbesiktningen dokumenterar besiktningsmannen resultatet i ett <strong>besiktningsutlåtande</strong>. Det är den juridiska handlingen: den listar fel, brister och kvarstående arbeten, anger vem som ansvarar för att åtgärda varje punkt och sätter frister för åtgärd. Utlåtandet är facit för vad som gäller mellan parterna.</p>
<p>Restlistan är något annat — ditt praktiska arbetsverktyg. Den speglar anmärkningarna i utlåtandet men är byggd för att arbetas i: tilldela ansvarig, sätta datum, bocka av och bifoga foto. Kort sagt är utlåtandet vad som ska göras, och restlistan hur du får det gjort. Håller du dem synkroniserade — varje rad på restlistan pekar tillbaka på en punkt i utlåtandet — undviker du diskussioner om vad som egentligen påtalats.</p>
<p>Det är värt att skilja på begreppen: <strong>fel</strong> är avvikelser från kontraktet, <strong>brister</strong> är kvalitetsavvikelser och <strong>kvarstående arbeten</strong> är moment som helt enkelt inte hunnit färdigställas. Alla tre hör hemma på restlistan, men de hanteras olika och bör kategoriseras därefter.</p>

<h2>Från slutbesiktning till godkänt — det juridiska ramverket kort</h2>
<p>En viktig sak att förstå: en entreprenad kan bli <strong>godkänd trots att anmärkningar kvarstår</strong>. Besiktningsmannen får bara underkänna om entreprenaden innehåller fel eller brister av väsentlig betydelse — sådant som orsakar stora kostnader, hindrar avsedd användning, påverkar sammankopplade tekniska system som el och VA, eller är omfattande i sin natur. Mindre restlistepunkter blockerar alltså inte godkännandet enligt AB 04 kap 7.</p>
<p>Godkännandet är däremot en juridisk vändpunkt. Vid godkänd slutbesiktning inträffar tre saker samtidigt: <strong>garantitiden börjar löpa</strong>, ansvaret för skador och risk på entreprenaden går över från entreprenören till beställaren, och den <strong>ekonomiska regleringen</strong> aktualiseras — slutfakturan kan ställas ut. Enligt AB 04 kap 4 §7 är garantitiden 5 år för entreprenörens arbetsprestation och 2 år för material och varor. Därutöver löper en ansvarstid på 10 år från godkänd slutbesiktning, och för dolda fel — sådant som varken beställaren eller besiktningsmannen rimligen kunnat upptäcka — ansvarar entreprenören hela ansvarstiden ut. Att stänga restlistan handlar därför inte bara om kvalitet, utan om när klockan börjar ticka på ditt ansvar och när du får betalt.</p>

<h2>Konsument vs kommersiell entreprenad — olika spelregler</h2>
<p>Reglerna för restlista och besiktning skiljer sig åt beroende på avtal. I kommersiella entreprenader gäller normalt AB 04 eller ABT 06. Betalar entreprenören inte åtgärd inom skälig tid har beställaren rätt att låta åtgärda på entreprenörens bekostnad och bör innehålla tillräckligt av betalningen för att täcka det tills alla anmärkningar är stängda (AB 04 kap 5 och 7). Notera också att det är beställaren som betalar besiktningsmannens arvode vid slutbesiktningen, medan entreprenören betalar efterbesiktningen enligt AB 04 kap 7 §15 andra stycket.</p>
<p>För konsument gäller andra standardavtal. <strong>ABS 18</strong> är standardavtalet för småhusentreprenad, framtaget av bland andra Konsumentverket, Villaägarnas Riksförbund, Byggföretagen, Gar-Bo och TMF. För mindre jobb används det enklare <strong>Hantverkarformuläret 17</strong>, kompletterat av konsumenttjänstlagen. Enligt KtjL 53 § har vardera parten rätt till slutbesiktning på begäran, och enligt 52 § andra stycket får konsumenten innehålla 10 % av priset tills entreprenaden godkänts vid slutbesiktning — ett starkt incitament för dig som entreprenör att rensa restlistan snabbt.</p>
<p>Efter godkänd småhusentreprenad får konsumenten som regel bara åberopa fel som antecknats i besiktningsutlåtandet. Undantagen är fel konsumenten påtalat men besiktningsmannen avvisat, dolda fel, samt fel som konsumenten skriftligen reklamerar till entreprenören inom 6 månader från slutbesiktningen. Den allmänna reklamationsrätten sträcker sig upp till 10 år från godkänd slutbesiktning. Slutsatsen är enkel: en noggrant förd restlista och ett korrekt utlåtande avgör vad som över huvud taget kan krävas senare.</p>

<h2>Så bygger du en restlista-mall som håller — de obligatoriska kolumnerna</h2>
<p>En restlista som spricker beror nästan alltid på att den saknar en kolumn. Dessa fält bör alltid finnas med:</p>
<ul>
<li><strong>Löpnummer</strong> — unik referens per punkt, så inget faller mellan stolarna.</li>
<li><strong>Plats/rum</strong> — var anmärkningen finns, gärna med planritningsreferens.</li>
<li><strong>Beskrivning</strong> — konkret vad som är fel eller kvarstår.</li>
<li><strong>Kategori</strong> — fel, brist, kvarstående arbete eller garantiärende.</li>
<li><strong>Ansvarig</strong> — entreprenör eller namngiven underentreprenör (UE).</li>
<li><strong>Åtgärdsfrist</strong> — datum, hämtat från fristen i utlåtandet.</li>
<li><strong>Status</strong> — öppen, pågår, åtgärdad, kvitterad.</li>
<li><strong>Foto/bilaga</strong> — bild före och efter åtgärd.</li>
<li><strong>Referens</strong> — punktnummer i besiktningsutlåtandet.</li>
</ul>

<h3>Tabellexempel</h3>
<ul>
<li><strong>1</strong> | Kök | Fog vid diskbänk ofullständig | Brist | UE Rör AB | 2026-09-05 | Öppen | foto_1.jpg | Utl. p. 4</li>
<li><strong>2</strong> | Hall | Dörrfoder saknas monterat | Kvarstående | Entreprenör | 2026-09-01 | Pågår | foto_2.jpg | Utl. p. 7</li>
<li><strong>3</strong> | Bad | Golvbrunn ej fastsatt enligt monteringsanvisning | Fel | UE Plattsättning | 2026-09-08 | Öppen | foto_3.jpg | Utl. p. 11</li>
</ul>

<h2>Rutinen som stänger listan i tid</h2>
<p>Mallen är bara halva jobbet — rutinen runt den avgör om listan stängs. Så här ser en fungerande process ut:</p>
<ol>
<li>Kör <strong>egenkontroll före besiktningen</strong> så att de flesta punkter redan är åtgärdade när besiktningsmannen kommer — det minskar restlistan och risken för underkänt.</li>
<li>Koppla varje anmärkning i utlåtandet till en rad, en ansvarig och en frist.</li>
<li>Åtgärda inom skälig tid. Dröjer entreprenören har beställaren rätt att åtgärda på entreprenörens bekostnad.</li>
<li>Kalla till <strong>efterbesiktning</strong> när punkterna är klara. Den prövar bara om de specifikt antecknade felen är tillräckligt avhjälpta — inga nya fel tas upp där.</li>
<li>Innehåll betalning tills allt är kvitterat, och dokumentera stängningen skriftligt.</li>
</ol>

<h2>Vanliga misstag som gör att listan spricker</h2>
<ul>
<li><strong>Ingen referens till utlåtandet</strong> — då uppstår tvist om vad som egentligen påtalats.</li>
<li><strong>Otydlig ansvarig</strong> — "byggaren" räcker inte när tre UE varit på plats.</li>
<li><strong>Frist saknas</strong> — utan datum blir "snart" aldrig.</li>
<li><strong>Ingen fotodokumentation</strong> — svårt att bevisa att en punkt faktiskt är åtgärdad.</li>
<li><strong>Muntliga kvittenser</strong> — stängningen måste vara skriftlig för att hålla juridiskt.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du restlistan digitalt och kopplar den direkt till projektets egenkontroll, så att punkter du redan checkat av inte hamnar på besiktningen i onödan. Varje anmärkning får ansvarig, frist och status, och du kan bifoga foto före och efter åtgärd på raden. När en punkt kvitteras syns det i projektet, och du får en samlad överblick över vad som återstår innan överlämning. Det ersätter inte besiktningsutlåtandet — den juridiska handlingen kommer alltid från besiktningsmannen — men det ger dig arbetsverktyget som säkrar att inget faller mellan stolarna fram till godkänt.</p>

<h2>Vanliga frågor</h2>
<h3>Kan en entreprenad godkännas trots att restlistan inte är tom?</h3>
<p>Ja. Besiktningsmannen får bara underkänna vid fel eller brister av väsentlig betydelse — sådant som hindrar avsedd användning eller påverkar tekniska system. Mindre restlistepunkter blockerar inte godkännandet enligt AB 04 kap 7, men de ska ändå åtgärdas inom satt frist.</p>
<h3>Vem betalar efterbesiktningen?</h3>
<p>Enligt AB 04 kap 7 §15 andra stycket betalar entreprenören besiktningsmannens arvode vid efterbesiktningen. Efterbesiktningen prövar om de antecknade felen är avhjälpta. Åtgärdar entreprenören inte inom skälig tid får beställaren låta åtgärda på entreprenörens bekostnad.</p>
<h3>Hur länge kan fel åberopas efter godkänd besiktning?</h3>
<p>Nya fel som inte antecknats kan reklameras skriftligen inom 6 månader från slutbesiktningen. Den allmänna reklamationsrätten löper upp till 10 år från godkänd slutbesiktning, och för dolda fel ansvarar entreprenören hela ansvarstiden ut.</p>
<h3>Får konsumenten hålla inne pengar tills restlistan är klar?</h3>
<p>Vid småhusentreprenad får konsumenten enligt konsumenttjänstlagen 52 § andra stycket innehålla 10 % av priset tills entreprenaden godkänts vid slutbesiktning. Det är ett starkt skäl att stänga restlistan snabbt.</p>

<h2>Kom igång</h2>
<p>Sätt upp restlistan innan besiktningen, inte efter. Börja med <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a> för att rensa listan i förväg, eller utforska fler verktyg i <a href="/sv/verktyg">ByggExps verktygslåda</a>. Vill du se hur restlista, egenkontroll och överlämning hänger ihop digitalt, <a href="/sv/contact">boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/slutbesiktning">Slutbesiktning steg för steg</a>, <a href="/sv/blog/egenkontroll">Egenkontroll i bygg</a> och <a href="/sv/blog/overlamning-relationshandlingar">Överlämning och relationshandlingar</a>.</p>
`;

const A_RESTLISTA_OVERLAMNING_BYGG_MALL: BlogPost = {
  _id: "code-"+"restlista-overlamning-bygg-mall",
  title: "Restlista bygg: mall och rutin för snygg överlämning", slug: "restlista-overlamning-bygg-mall", locale: "sv",
  excerpt: "Slutbesiktningen är sällan slutet. En strukturerad restlista håller ordning på varje anmärkning tills den är åtgärdad och kvitterad. Här är mallen, kolumnerna och rutinen.", tag: "Besiktning",
  coverImageUrl: "/landing/features/2uppgift.webp", contentHtml: A_RESTLISTA_OVERLAMNING_BYGG_MALL_HTML,
  seoTitle: "Restlista bygg – mall och rutin | ByggExp", seoDescription: "Färdig restlista bygg-mall med obligatoriska kolumner och en rutin som stänger anmärkningarna före godkänd överlämning. Plus det juridiska ramverket kort.",
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T16:00:00.000Z", createdAt: "2026-08-19T16:00:00.000Z", updatedAt: "2026-08-19T16:00:00.000Z",
};

const A_GARANTIBESIKTNING_2_AR_ENTREPRENAD_HTML = `
<p>Garantibesiktningen efter 2 år är inte en formalitet — det är den punkt där ansvaret för fel avgörs. Under garantitiden gäller omvänd bevisbörda: framträder ett fel presumeras det vara entreprenörens och ni får avhjälpa det på egen bekostnad. Missar beställaren att påkalla besiktningen i tid, eller släpper ni fel förbi 2-årsgränsen, ändras hela läget. Den här artikeln reder ut vad som kontrolleras, vem som kallar och vilka fel som faktiskt hamnar på beställaren.</p>

<p>Dokumentera egenkontrollerna löpande under garantitiden så att du kan bemöta anmärkningar med underlag — använd <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -></a> för att hålla ordning på vad som utförts och när.</p>

<h2>Garantitid enligt AB 04 — 5 år och 2 år</h2>
<p>Grunden finns i AB 04 kap 4 § 7. Garantitiden är <strong>5 år för entreprenörens arbetsprestation</strong> och <strong>2 år för material och varor</strong>. Det är den så kallade 5/2-regeln: den längre tiden träffar själva utförandet, medan material och varor bär den kortare tvåårstiden. Båda tiderna räknas från godkänd slutbesiktning, inte från när arbetet fysiskt avslutades.</p>
<p>I totalentreprenad enligt ABT 06 ser det annorlunda ut. Där gäller <strong>5 år för hela entreprenaden — både arbete och material</strong>, eftersom entreprenören själv projekterar och väljer material. Undantaget är av <strong>beställaren föreskrivet särskilt material eller fabrikat</strong>, där garantitiden i stället är 2 år. Skillnaden mellan entreprenadformerna är alltså kopplad till vem som bär ansvaret för materialvalet.</p>

<h2>Varför just 2 år? Materialgarantin och 2-årsbesiktningen</h2>
<p>Den korta 2-åriga garantitiden för material och varor är själva anledningen till att en tidig garantibesiktning behövs. Fel i en vara — en pump, ett tätskikt, en beslagning — måste fångas innan tvåårsgränsen passeras, annars försvinner den korta materialgarantin. I praktiken görs därför ofta <strong>två garantibesiktningar</strong>:</p>
<ul>
<li>En <strong>2-årsbesiktning</strong> strax innan tvåårsgränsen, som fångar fel i material och varor med kort garantitid.</li>
<li>En <strong>5-årsbesiktning</strong> innan femårsgränsen, som tar sikte på entreprenörens arbetsprestation.</li>
</ul>
<p>Poängen är att inte klumpa ihop allt till en enda besiktning år fem. Då är den korta materialgarantin redan borta.</p>

<h2>Vem kallar till garantibesiktning — och tidsfristen som avgör allt</h2>
<p>Garantibesiktningen påkallas och verkställs av <strong>beställaren</strong>, och den måste ske <strong>före garantitidens utgång</strong>. Det är här många snubblar. Missar beställaren att påkalla besiktningen i tid går rätten till felet inte automatiskt förlorad — fel kan fortfarande reklameras skriftligen under garantitiden enligt AB 04 kap 5 § 15 — men beställaren förlorar det praktiska bevisläge som ett besiktningsprotokoll ger.</p>
<p>Enligt AB 04 kap 7 § 12 ska besiktningen påkallas <strong>senast tre månader före garantitidens utgång</strong>, så att den hinner genomföras och protokollföras innan gränsen passeras. Det är alltså en regel, inte bara en tumregel. För dig som entreprenör är det värt att hålla koll på dina egna garantitider även om ansvaret att kalla ligger på beställaren, eftersom det påverkar vilka anmärkningar du behöver hantera.</p>

<h2>Vad kontrolleras vid besiktningen</h2>
<p>Garantibesiktningen omfattar fel som har <strong>framträtt sedan slutbesiktningen</strong>. Det handlar alltså inte om att göra om slutbesiktningen, utan om att fånga sådant som visat sig under garantitidens gång — sättningar, sprickor, otätheter, funktionsfel i material.</p>
<p>Besiktningsmannen upprättar ett protokoll där varje anmärkning noteras. Skillnaden mellan besiktningarna ligger i vad som är i fokus: 2-årsbesiktningen riktar in sig på material och varor, medan 5-årsbesiktningen tar sikte på arbetsprestationen. Anmärkningar som förs in i protokollet är det som entreprenören ska ta ställning till och i förekommande fall avhjälpa.</p>

<h2>Vem betalar? Omvänd bevisbörda under garantitiden</h2>
<p>Under garantitiden gäller en presumtion till beställarens fördel enligt AB 04 kap 5 § 5. Ett fel som framträder under garantitiden <strong>antas vara entreprenörens ansvar</strong>. Det är entreprenören som har bevisbördan och som måste göra sannolikt att felet i stället beror på beställaren — exempelvis normalt slitage eller felaktig skötsel — för att slippa ansvar.</p>
<p>Är felet ett garantifel ska det avhjälpas av entreprenören <strong>på egen bekostnad</strong>. Avhjälpandet ska ske utan dröjsmål och i rätt tid enligt reglerna om avhjälpande i AB 04 kap 5 §§ 17–20. Att dra ut på tiden är i sig ett avtalsbrott, oavsett att grundfelet ska rättas kostnadsfritt.</p>

<h2>Fel du inte ansvarar för – beställarens sak</h2>
<p>Presumtionen är inte total. Entreprenören ansvarar <strong>inte</strong> för allt som dyker upp under garantitiden — vissa fel står beställaren själv för. Det gäller:</p>
<ul>
<li><strong>Normalt och onormalt slitage</strong> — förslitning som följer av brukandet, inte av ett utförandefel.</li>
<li><strong>Bristande underhåll och skötsel</strong> — komponenter som inte servats eller underhållits enligt anvisning.</li>
<li><strong>Felaktig användning och hantering</strong> från beställarens sida.</li>
</ul>
<p>Det är just dessa punkter entreprenören åberopar för att bryta presumtionen. Kan du visa att en skada beror på utebliven skötsel eller felaktig användning, flyttas kostnaden tillbaka till beställaren. Här blir din löpande dokumentation avgörande.</p>

<h2>Efter garantitiden — ansvarstiden på 10 år</h2>
<p>Att garantitiden löper ut betyder inte att ansvaret upphör. <strong>Ansvarstiden är 10 år</strong> från godkänd slutbesiktning i både AB 04 och ABT 06. Men läget vänder helt. Efter garantitidens utgång ansvarar entreprenören endast för <strong>väsentligt fel</strong> som visas ha sin grund i entreprenörens vårdslöshet, enligt AB 04 kap 5 § 6 — och nu är det <strong>beställaren som har bevisbördan</strong>.</p>
<p>Det är därför garantibesiktningen är så viktig för beställaren: den är sista chansen att fånga fel medan bevisbördan fortfarande ligger på entreprenören. Efter garantitiden krävs både väsentlighet och bevisad vårdslöshet.</p>

<h2>Checklista inför garantibesiktningen</h2>
<ol>
<li>Håll reda på datum för godkänd slutbesiktning — hela 5/2-räkningen utgår därifrån.</li>
<li>Bevaka 2-årsgränsen separat så att fel i material och varor inte faller mellan stolarna.</li>
<li>Beställaren påkallar besiktningen senast tre månader före utgång enligt AB 04 kap 7 § 12.</li>
<li>Samla underlag: slutbesiktningsprotokoll, egenkontroller, drift- och skötselanvisningar.</li>
<li>Gå igenom kända anmärkningar innan besiktningsmannen kommer.</li>
<li>Notera vad som kan hänföras till slitage, skötsel eller användning — det avgör vem som betalar.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ordning på det som avgör en garantibesiktning: dokumentationen. Med egenkontroller kopplade till projektet får du en löpande logg över vad som utförts, av vem och när — underlag som gör det möjligt att bemöta anmärkningar och peka på skötsel eller slitage när det är berättigat. Handlingar och protokoll samlas på ett ställe så att slutbesiktningsdatum och garantitider går att spåra utan att leta i pärmar. ByggExp avgör inte juridiken åt dig, men gör att du har rätt underlag framme när frågan om vem som betalar ställs.</p>

<h2>Vanliga frågor</h2>
<h3>Vem kallar till garantibesiktning enligt AB 04?</h3>
<p>Beställaren påkallar och verkställer garantibesiktningen, och den ska enligt AB 04 kap 7 § 12 påkallas senast tre månader före garantitidens utgång. Missar beställaren att kalla i tid går rätten till felet inte automatiskt förlorad — fel kan även reklameras skriftligen under garantitiden — men besiktningsprotokollet ger ett starkare bevisläge.</p>
<h3>Vad är skillnaden mellan 2 år och 5 år i garantitiden?</h3>
<p>Enligt AB 04 kap 4 § 7 är garantitiden 5 år för entreprenörens arbetsprestation och 2 år för material och varor. Därför görs ofta en tidig 2-årsbesiktning som fångar fel i material och varor, och en senare 5-årsbesiktning som tar sikte på arbetsprestationen. I ABT 06 gäller i stället 5 år för både arbete och material, med undantag för sådant särskilt material eller fabrikat som beställaren föreskrivit, där 2 år tillämpas.</p>
<h3>Vem betalar för att åtgärda ett garantifel?</h3>
<p>Garantifel avhjälps av entreprenören på egen bekostnad, utan dröjsmål. Under garantitiden presumeras felet vara entreprenörens och entreprenören har bevisbördan för att felet i stället beror på beställaren.</p>
<h3>Vilka fel står beställaren själv för?</h3>
<p>Beställaren står för normalt och onormalt slitage, bristande underhåll och skötsel samt fel som beror på felaktig användning eller hantering. Kan entreprenören göra en sådan orsak sannolik bryts presumtionen.</p>

<h2>Kom igång</h2>
<p>Börja med att sätta system på egenkontrollerna så att du har underlag inför garantibesiktningen — utgå från <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a>. Vill du se hur dokumentation, protokoll och garantitidsbevakning hänger ihop i ett projekt? <a href="/sv/contact">Boka en demo av ByggExp</a> så visar vi upplägget.</p>

<p>Relaterat: <a href="/sv/blog/garantitid-ansvarstid-ab-04">Garantitid och ansvarstid i AB 04</a>, <a href="/sv/blog/slutbesiktning">Slutbesiktning — så fungerar den</a>, <a href="/sv/blog/reklamation-hantverkstjanst-frister">Reklamation av hantverkstjänst och frister</a>.</p>
`;

const A_GARANTIBESIKTNING_2_AR_ENTREPRENAD: BlogPost = {
  _id: "code-"+"garantibesiktning-2-ar-entreprenad",
  title: "Garantibesiktning efter 2 år — AB 04 och entreprenörens ansvar", slug: "garantibesiktning-2-ar-entreprenad", locale: "sv",
  excerpt: "Garantitiden i AB 04 är 5 år för arbetsprestationen och 2 år för material och varor. Så fungerar 2-årsbesiktningen, omvänd bevisbörda och ansvarstiden.", tag: "Entreprenadjuridik",
  coverImageUrl: "/landing/features/2uppgift.webp", contentHtml: A_GARANTIBESIKTNING_2_AR_ENTREPRENAD_HTML,
  seoTitle: "Garantibesiktning 2 år i AB 04 | ByggExp", seoDescription: "Garantibesiktningen efter 2 år avgör vem som betalar för fel. Så fungerar 5/2-regeln i AB 04, omvänd bevisbörda och tidsfristerna — för dig som entreprenör.",
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T19:00:00.000Z", createdAt: "2026-08-19T19:00:00.000Z", updatedAt: "2026-08-19T19:00:00.000Z",
};

const A_SEMESTERLON_SEMESTERERSATTNING_BYGGAVTALET_HTML = `
<p>Ett byggföretag som räknar semesterlön efter semesterlagens 12 procent räknar fel. Byggavtalet ger en högre semesterlön – 13,0 procent av den intjänade lönen – och bygger på procentregeln, inte på semesterlagens sammalöneregel. Skillnaden märks särskilt när dina anställda har ackord, ob, övertid och oregelbunden arbetstid. Missar du procentsatsen eller väljer fel beräkningsmetod blir det både reklamationer och rättelser i efterhand. Här går vi igenom hur du som arbetsgivare räknar rätt på semesterlön och semesterersättning enligt Byggavtalet 2025–2027.</p>

<p>Ett bra underlag är förutsättningen för rätt semesterlön, eftersom procenten läggs på hela den intjänade bruttolönen. Har du ordning på timmar, ackord och tillägg blir semesterkörningen enkel – börja med vår <a href="/sv/verktyg/tidrapport-mall">gratis tidrapport-mall -&gt;</a>.</p>

<h2>Semesterlagen som golv – sammalöneregeln vs procentregeln</h2>
<p>Semesterlagen ger varje anställd rätt till 25 semesterdagar per semesterår. Semesteråret och intjänandeåret löper 1 april–31 mars. De betalda dagarna tjänas in året innan. Antalet räknas ut som antal anställningsdagar under intjänandeåret, minus de dagar den anställde haft frånvaro som inte är semesterlönegrundande, gånger 25 delat med 365 – och resultatet avrundas alltid uppåt. Minst 20 betalda dagar ska tas ut varje år och upp till 5 får sparas.</p>
<p>Lagen anger två sätt att räkna semesterlön:</p>
<ul>
<li><strong>Sammalöneregeln</strong> – den anställde behåller sin månadslön under ledigheten och får dessutom ett semestertillägg på 0,43 procent av månadslönen per betald semesterdag. Detta är huvudregeln för fast månadslön.</li>
<li><strong>Procentregeln</strong> – semesterlönen är 12 procent av den lön som tjänats in under intjänandeåret.</li>
</ul>
<p>Semesterlagens 12 procent och 0,43 procent är minimiregler – ett golv. Kollektivavtal får ge mer, och det är precis vad Byggavtalet gör.</p>

<h2>Så avviker Byggavtalet – 13 % enligt procentregeln</h2>
<p>Byggnadsarbetare har sällan en jämn, fast månadslön. Ackord, ob-tillägg, övertid och varierande timmar gör att sammalöneregeln inte speglar den faktiska intjäningen. Därför tillämpar Byggavtalet procentregeln, men med en högre sats än lagens 12 procent.</p>
<p>Procentsatsen skiljer sig mellan avtalsområdena, och du måste använda rätt sats för ditt – stäm alltid av mot ditt avtalsområdes aktuella procentsats:</p>
<ul>
<li><strong>Byggavtalet: 13,0 procent</strong> av intjänad lön.</li>
<li><strong>Entreprenadmaskinavtalet: 13,1 procent</strong>.</li>
<li><strong>Plåt- och ventilationsavtalet: 13,2 procent</strong>.</li>
</ul>
<p>Procenten beräknas på hela den intjänade bruttolönen under intjänandeåret – alltså inte bara grundlönen, utan även ackord, ob, övertid och vissa tillägg. Det är en vanlig felkälla: lägger du bara 13 procent på grundlönen underbetalar du semesterlönen på alla rörliga delar.</p>
<p>För en renodlat timavlönad eller ackordsavlönad arbetare läggs hela semesterlönen på med procentregeln. För en månadsavlönad byggnadsarbetare betalas månadslönen jämte semestertillägg, och därutöver läggs 13 procent på de rörliga lönedelarna och övertiden som tjänats in under året. Gällande avtalstext är Byggavtalet 2025–2027 (avtalsperiod 1 maj 2025–30 april 2027) – det är det avtal du ska tillämpa 2026.</p>

<h2>Räkneexempel – timavlönad och månadsavlönad</h2>
<p><strong>Timavlönad byggnadsarbetare.</strong> Anta att den intjänade bruttolönen under intjänandeåret (grundlön + ackord + ob + övertid) uppgår till 420 000 kr. Med Byggavtalets 13,0 procent blir semesterlönen då:</p>
<ul>
<li>420 000 kr × 13,0 % = <strong>54 600 kr</strong> i total semesterlön för 25 dagar.</li>
<li>Per betald semesterdag: 54 600 / 25 = <strong>2 184 kr</strong>.</li>
</ul>
<p>Med semesterlagens 12 procent hade beloppet stannat på 50 400 kr – en skillnad på 4 200 kr som den anställde har rätt till enligt avtalet.</p>
<p><strong>Månadsavlönad byggnadsarbetare.</strong> Anta en fast månadslön på 34 000 kr och rörliga lönedelar (ob och övertid) på 60 000 kr under intjänandeåret. Vid uttag av semester:</p>
<ul>
<li>Månadslönen betalas som vanligt under ledigheten.</li>
<li>Semestertillägg enligt avtal läggs på den fasta lönen.</li>
<li>På de rörliga 60 000 kr läggs 13,0 %: 60 000 × 0,13 = <strong>7 800 kr</strong> i semesterlön på rörliga delar.</li>
</ul>
<p>Den exakta mekaniken för hur semestertillägget på den fasta lönen ska beräknas per betald dag framgår av Byggavtalets semesterkapitel – kontrollera den mot din avtalstext. Poängen är att de rörliga delarna aldrig får glömmas bort: kontrollera att lönesystemet verkligen samlar ackord, ob och övertid i det semesterlönegrundande underlaget – inte bara grundlönen.</p>

<h2>Semesterersättning vid avslutad anställning</h2>
<p>Semesterersättning är den intjänade men inte uttagna semesterlönen som betalas ut när anställningen upphör. För byggnadsarbetare beräknas den med samma procentsats som semesterlönen, alltså 13,0 procent (respektive 13,1 eller 13,2 procent beroende på avtalsområde) av den intjänade lönen.</p>
<p>Enligt semesterlagen ska semesterersättningen betalas ut senast en månad efter att anställningen har upphört. Det är särskilt viktigt att ha koll på i byggbranschen, där projektanställningar och säsongsvariation gör att anställningar ofta avslutas. En felaktig eller sen utbetalning kan snabbt bli en tvistefråga.</p>
<p>Räkna alltså ut all intjänad, ej uttagen semesterlön på hela bruttolönen fram till sista anställningsdagen, multiplicera med rätt procentsats och betala ut inom en månad. Har den anställde sparade dagar från tidigare år ska även dessa lösas ut.</p>

<h2>När sammalöneregeln inte får användas</h2>
<p>Även utanför bygg finns en viktig tvingande regel: sammalöneregeln får inte användas om den anställde under intjänandeåret haft frånvaro som inte är semesterlönegrundande, eller ändrat sysselsättningsgrad. Då är arbetsgivaren skyldig att gå över till procentregeln.</p>
<p>Just dessa situationer är extra vanliga i byggföretag – permittering, sjukfrånvaro utöver de semesterlönegrundande dagarna och varierande tjänstgöringsgrad. Har en anställd exempelvis varit permitterad eller gått från heltid till deltid under året, ska semesterlönen räknas med procentregeln oavsett vad du normalt använder. Eftersom Byggavtalet redan bygger på procentregeln blir detta sällan ett problem för kollektivanställda, men det är centralt för tjänstemän och månadsavlönade med semesterlön enligt sammalöneregeln.</p>

<h2>Vanliga fel och checklista</h2>
<ul>
<li>Använd 13,0 % (Byggavtalet), 13,1 % (Entreprenadmaskin) eller 13,2 % (Plåt &amp; vent) – aldrig lagens 12 % för kollektivanställda.</li>
<li>Räkna procenten på hela den intjänade bruttolönen, inte bara grundlönen.</li>
<li>Kontrollera att ackord, ob och övertid ligger i det semesterlönegrundande underlaget.</li>
<li>Betala semesterersättning senast en månad efter avslutad anställning.</li>
<li>Byt till procentregeln vid ej semesterlönegrundande frånvaro eller ändrad sysselsättningsgrad.</li>
<li>Håll koll på intjänandeåret 1 april–31 mars och antalet betalda dagar.</li>
<li>Spara lönespecifikationer och underlag i 7 år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att få ordning på underlaget som semesterlönen vilar på. Tidrapporteringen samlar timmar, ob och övertid per anställd och projekt, så att du har ett komplett och kontrollerbart underlag när det är dags för löne- och semesterkörning. Det gör det enklare att se hela den intjänade bruttolönen i stället för att jaga siffror i efterhand.</p>
<p>ByggExp räknar inte automatiskt ut din semesterlön eller ersätter ditt lönesystem – men ett städat, spårbart tidsunderlag är förutsättningen för att procentregeln ska bli rätt. Du hittar tidrapporteringen och våra övriga <a href="/sv/verktyg">gratis verktyg för byggföretag</a> samlade på ett ställe.</p>

<h2>Vanliga frågor</h2>
<h3>Är semesterlönen 12 eller 13 procent i bygg?</h3>
<p>Semesterlagens minimum är 12 procent, men Byggavtalet ger en högre semesterlön på 13,0 procent av den intjänade lönen. Näraliggande avtal ligger något högre: Entreprenadmaskinavtalet 13,1 procent och Plåt- och ventilationsavtalet 13,2 procent. Stäm alltid av mot ditt avtalsområdes aktuella procentsats.</p>
<h3>Räknas ob och övertid med i semesterlönen?</h3>
<p>Ja. Procenten läggs på hela den intjänade bruttolönen under intjänandeåret, inklusive ackord, ob, övertid och vissa tillägg – inte bara grundlönen. Missar du de rörliga delarna underbetalar du semesterlönen.</p>
<h3>När ska semesterersättning betalas ut?</h3>
<p>Semesterersättningen – intjänad men inte uttagen semesterlön – ska enligt semesterlagen betalas ut senast en månad efter att anställningen upphört. Den beräknas med samma procentsats som semesterlönen, alltså 13 procent för byggnadsarbetare på Byggavtalet.</p>
<h3>När måste jag använda procentregeln i stället för sammalöneregeln?</h3>
<p>När den anställde under intjänandeåret haft frånvaro som inte är semesterlönegrundande eller ändrat sysselsättningsgrad. Då är procentregeln tvingande. I bygg är detta vanligt vid permittering, sjukfrånvaro och varierande tjänstgöringsgrad.</p>

<h2>Kom igång</h2>
<p>Rätt semesterlön börjar med rätt underlag. Samla timmar, ob och övertid löpande med vår <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> och stäm alltid av procentsats och beräkningsmetod mot gällande Byggavtal 2025–2027 och Byggnads egen semesterbroschyr. Vill du se hur ByggExp kan strukturera tidrapportering och löneunderlag för ditt företag, <a href="/sv/contact">boka en demo</a>.</p>
<p>Relaterat: <a href="/sv/blog/maste-ha-kollektivavtal-bygg">Kollektivavtal i byggbranschen</a>, <a href="/sv/blog/franvaro-i-byggforetag">Frånvaro i byggföretag</a>, <a href="/sv/blog/ob-overtid-byggavtalet-rakna">Räkna ob och övertid i Byggavtalet</a>.</p>
`;

const A_SEMESTERLON_SEMESTERERSATTNING_BYGGAVTALET: BlogPost = {
  _id: "code-"+"semesterlon-semesterersattning-byggavtalet",
  title: "Semesterlön och semesterersättning enligt Byggavtalet 2025–2027", slug: "semesterlon-semesterersattning-byggavtalet", locale: "sv",
  excerpt: "Byggavtalet ger 13 % semesterlön enligt procentregeln – inte lagens 12 %. Så räknar du rätt på hela den intjänade bruttolönen, med ob, ackord och övertid.", tag: "Lön & avtal",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_SEMESTERLON_SEMESTERERSATTNING_BYGGAVTALET_HTML,
  seoTitle: "Semesterlön Byggavtalet 2026 | ByggExp", seoDescription: "Så räknar du rätt på semesterlön och semesterersättning enligt Byggavtalet 2025–2027: 13 % procentregel, ob, ackord och övertid – med räkneexempel för byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T19:03:00.000Z", createdAt: "2026-08-19T19:03:00.000Z", updatedAt: "2026-08-19T19:03:00.000Z",
};

const A_TJANSTEPENSION_BYGGAVTALET_BAO_HTML = `
<p>Har du anställda på Byggavtalet är tjänstepensionen inte något du väljer själv – den följer av kollektivavtalet. Byggnadsarbetare omfattas av <strong>Avtalspension SAF-LO</strong>, med en grundavsättning på 4,5 % av lönen upp till en brytpunkt och 30 % på lönedelar däröver. För 2026 finns dessutom en tillfälligt sänkt premie som är lätt att missförstå. Den här guiden reder ut vad pensionen kostar dig som arbetsgivare, vem som omfattas och hur den skiljer sig från en egen tjänstepensionslösning.</p>

<p>Innan du bygger in pensionskostnaden i dina anbud och timpriser: lägg in rätt påslag från början med <a href="/sv/verktyg/timpris-kalkylator">vår gratis timpris-kalkylator –&gt;</a> så att pension, sociala avgifter och särskild löneskatt syns i debiteringsgraden.</p>

<h2>Vad är Avtalspension SAF-LO och vem omfattas?</h2>
<p>Avtalspension SAF-LO är den kollektivavtalade tjänstepensionen för privatanställda arbetare. Den förhandlas fram gemensamt av Svenskt Näringsliv och LO och gäller alltså för hela LO-området, inte bara bygg. För dina medarbetare på Byggavtalet mellan Byggnads och Byggföretagen är den obligatorisk – du kan inte välja bort den och du behöver inte förhandla fram den.</p>
<p>Inbetalningarna börjar den månad den anställde fyller 22 år och upphör vid 65 år. Intjänandeåldern sänktes stegvis av Svenskt Näringsliv och LO – från 25 till 24 år 2021, till 23 år 2022 och till 22 år 2023. <strong>Fora</strong> är valcentral och administratör: du som arbetsgivare betalar in premien till Fora varje månad, och Fora fördelar pengarna till den anställdes pensionskonto. Den anställde väljer själv förvaltare – traditionell försäkring eller fondförsäkring – och kan lägga till återbetalningsskydd eller familjeskydd via valblanketten.</p>

<h2>Vad kostar den 2026 – avsättningsnivåerna i kronor och procent</h2>
<p>Grundavsättningen är <strong>4,5 % av den pensionsmedförande lönen upp till 7,5 inkomstbasbelopp och 30 % på lönedelar däröver</strong>. Inkomstbasbeloppet för 2026 är 83 400 kr, vilket gör att brytpunkten 7,5 IBB motsvarar 625 500 kr per år eller <strong>52 125 kr per månad</strong>. De flesta byggnadsarbetare ligger under den gränsen, så i praktiken handlar det om 4,5 % på hela månadslönen.</p>
<p>Räkneexempel på en snittlön på 39 775 kr per månad:</p>
<ul>
<li>Månadslön: 39 775 kr</li>
<li>Grundavsättning 4,5 %: cirka <strong>1 790 kr per månad</strong></li>
<li>På årsbasis: cirka 21 480 kr till pensionen</li>
</ul>
<p><strong>Nytt för 2026:</strong> premien är tillfälligt sänkt. Du som arbetsgivare betalar in 4,400 % på lönedelar under 7,5 IBB, men den anställdes pensionskonto tillförs ändå fulla 4,5 %. Mellanskillnaden tas från överskott i kapitalet för den äldre STP-lösningen. Sänkningen gäller från 1 januari 2026 och beslutades av Svenskt Näringsliv och LO gemensamt. Med andra ord: din faktiska inbetalning blir något lägre 2026, medan den anställde inte förlorar något.</p>

<h2>Det nya Byggavtalet 2025–2027 – höjd pensionsavsättning</h2>
<p>Byggavtalet 2025–2027 gäller från 1 maj 2025 till 30 april 2027 och följer märket på totalt 6,4 %: löneökning med 3,4 % från 1 maj 2025 och 3,0 % från 1 maj 2026. Utöver det höjs pensionsavsättningen:</p>
<ul>
<li>+0,1 procentenhet år ett</li>
<li>+0,1 procentenhet år två</li>
</ul>
<p>Det är en kompletterande avsättning utöver grundpremien – samma princip som deltids- och livsarbetstidspension i andra branscher. På en snittlön på 39 775 kr per månad motsvarar de två stegen tillsammans en ökad pensionsavsättning på cirka <strong>40 kr per månad år ett och cirka 80 kr per månad</strong> när båda stegen slagit igenom. (Blanda inte ihop det med den totala lönehöjningen från märket, cirka 2 504 kr per månad över perioden – den handlar om lönen, inte pensionsavsättningen.) Det låter marginellt per anställd, men multiplicerat med hela arbetsstyrkan blir det en post du bör räkna in i kostnadskalkylen.</p>

<h2>Deltidspension och livsarbetstidspension – den extra pusselbiten</h2>
<p>Deltidspension (även kallad livsarbetstidspension, flexpension eller arbetstidspension) är extra inbetalningar till Avtalspension SAF-LO som avtalats i vissa branscher. Den finns främst i andra avtalsområden – bland annat på tjänstemannasidan – och ingår inte tydligt i Byggavtalet, så utgå inte från att den är en självklar bygg-kostnad. Den viktiga skillnaden mot grundpremien i de avtal där den finns: dessa inbetalningar görs <strong>oavsett ålder</strong>. Det betyder att avsättning kan ske även på lön för anställda som ännu inte fyllt 22 år – till skillnad från grundpremien som startar först vid 22.</p>
<p>Har du unga medarbetare eller lärlingar i staben är det här lätt att missa i de avtal som omfattas. Grundpremien syns inte för dem förrän de fyllt 22, men kompletterande avsättningar kan i vissa fall ändå gälla. Kontrollera hur ditt avtal är formulerat innan du antar något – åt något håll.</p>

<h2>Byggavtalets pension vs. egen tjänstepensionslösning</h2>
<p>En vanlig fråga är om man kan ersätta den kollektivavtalade pensionen med en egen, kanske billigare eller mer flexibel, lösning. För arbetare på Byggavtalet är svaret nej. Avtalspension SAF-LO är obligatorisk och standardiserad – du kan inte förhandla bort den eller byta ut den mot en egen försäkring. En egen lösning ersätter alltså inte SAF-LO för dina kollektivanställda arbetare.</p>
<p>Egna tjänstepensionslösningar hör hemma i andra sammanhang, till exempel för tjänstemän eller för dig som ägare. Skattemässigt får en arbetsgivare dra av pensionspremier med upp till <strong>35 % av den anställdes lön, dock högst 10 prisbasbelopp = 592 000 kr år 2026</strong> (prisbasbeloppet 2026 är 59 200 kr). Observera att detta är gränsen för avdragsrätt – inte vad kollektivavtalet kräver. Kollektivavtalets nivå (4,5 %/30 %) ligger långt under avdragstaket.</p>
<ul>
<li><strong>Kollektivavtalad (SAF-LO):</strong> obligatorisk, standardiserad, ingen förhandling, administreras via Fora.</li>
<li><strong>Egen lösning:</strong> mer flexibel, avdrag upp till 35 %/10 PBB – men företaget måste ändå leva upp till kollektivavtalet för arbetarna.</li>
</ul>

<h2>Skatt och avdrag – särskild löneskatt 24,26 %</h2>
<p>På pensionskostnader betalar du inte vanliga arbetsgivaravgifter utan <strong>särskild löneskatt på 24,26 %</strong>. Den gäller lika oavsett om pensionen kommer via Byggavtalet och Fora eller via en egen lösning. Räknar du på den fulla kostnaden för en anställd måste löneskatten in – annars underskattar du priset.</p>
<p>Kort kostnadsbild för grundavsättningen på snittlönen 39 775 kr/mån:</p>
<ul>
<li>Pensionsavsättning 4,5 %: cirka 1 790 kr/mån</li>
<li>Särskild löneskatt 24,26 % på avsättningen: cirka 434 kr/mån</li>
<li>Total pensionsrelaterad kostnad: cirka <strong>2 224 kr/mån</strong> utöver bruttolön och sociala avgifter</li>
</ul>
<p>Vill du se hela kostnadsbilden per anställd har vi räknat igenom den i <a href="/sv/blog/vad-kostar-en-anstalld-byggforetag">vad en anställd kostar i ett byggföretag</a>.</p>

<h2>Vanliga misstag och hur du gör rätt</h2>
<ul>
<li><strong>Glömmer löneskatten.</strong> Pensionen är billigare i procent än sociala avgifter, men särskild löneskatt 24,26 % tillkommer alltid.</li>
<li><strong>Tror att egen lösning ersätter SAF-LO.</strong> För arbetare gör den inte det – du måste följa kollektivavtalet.</li>
<li><strong>Missar 22-årsgränsen.</strong> Grundpremien startar vid 22; i avtal med kompletterande avsättningar kan sådana i vissa fall gälla oavsett ålder.</li>
<li><strong>Rapporterar fel lönebelopp till Fora.</strong> Pensionsmedförande lön styr avsättningen – felaktig rapportering ger fel premie.</li>
<li><strong>Räknar inte in Foras avgift.</strong> Fora tar ut en förmedlingsavgift på cirka 1,5 % inkl. moms per år, som dras från premien. Själva kapitalförvaltningen ligger utanför – den avgiften tar den förvaltare den anställde valt (ofta cirka 0,03–0,25 %).</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp betalar inte in dina Fora-premier – det gör du via Fora – men vi hjälper dig att få kostnaden rätt från början. I timpris- och kalkylverktygen kan du lägga in pensionsavsättning och särskild löneskatt som påslag, så att debiteringsgraden speglar den verkliga kostnaden per anställd. Med korrekt tidrapportering får du dessutom ett tydligt underlag för vilken pensionsmedförande lön varje medarbetare tjänat in, vilket gör det enklare att stämma av mot det du rapporterar till Fora. Vi gör inte pensionsberäkningen åt dig, men vi ser till att den inte försvinner i kalkylen.</p>

<h2>Vanliga frågor</h2>
<h3>Är Avtalspension SAF-LO obligatorisk för byggföretag?</h3>
<p>Ja. För arbetare på Byggavtalet mellan Byggnads och Byggföretagen är Avtalspension SAF-LO en del av kollektivavtalet. Den är inte något företaget väljer själv, och den kan inte ersättas med en egen lösning för de kollektivanställda arbetarna.</p>
<h3>Hur mycket ska jag betala in 2026?</h3>
<p>Grundavsättningen är 4,5 % av lönen upp till 52 125 kr/mån (7,5 IBB) och 30 % på lönedelar däröver. För 2026 gäller en tillfälligt sänkt premie: du betalar 4,400 % under brytpunkten, men den anställdes konto tillförs ändå 4,5 % – mellanskillnaden tas från överskott i den äldre STP-lösningen.</p>
<h3>Vad kostar pensionen mig utöver själva avsättningen?</h3>
<p>På pensionskostnaden betalar du särskild löneskatt på 24,26 % i stället för vanliga arbetsgivaravgifter. Dessutom tar Fora ut en förmedlingsavgift på cirka 1,5 % inkl. moms per år, som dras från premien. Kapitalförvaltningen ingår inte i den avgiften – den debiteras separat av den förvaltare den anställde valt.</p>
<h3>Kan jag byta ut kollektivavtalspensionen mot en egen lösning?</h3>
<p>Inte för arbetare på Byggavtalet. En egen tjänstepension kan komplettera i andra sammanhang, och avdragsrätten går upp till 35 % av lönen (max 10 PBB = 592 000 kr år 2026), men den ersätter inte SAF-LO för dina kollektivanställda.</p>

<h2>Kom igång</h2>
<p>Bygg in pensionskostnaden i dina priser innan nästa anbud går ut. Testa <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylatorn</a> eller bläddra bland alla <a href="/sv/verktyg">gratis byggverktyg</a>. Vill du se hur ByggExp håller ihop tidrapportering, kalkyl och kostnadsuppföljning – <a href="/sv/contact">boka en demo</a>.</p>
<p>Relaterat: <a href="/sv/blog/maste-ha-kollektivavtal-bygg">Kollektivavtal i byggbranschen</a>, <a href="/sv/blog/vad-kostar-en-anstalld-byggforetag">vad kostar en anställd i ett byggföretag</a>, <a href="/sv/blog/anstalla-personal-byggforetag">anställa personal i byggföretag</a>.</p>
`;

const A_TJANSTEPENSION_BYGGAVTALET_BAO: BlogPost = {
  _id: "code-"+"tjanstepension-byggavtalet-bao",
  title: "Tjänstepension på Byggavtalet – vad den kostar dig 2026", slug: "tjanstepension-byggavtalet-bao", locale: "sv",
  excerpt: "Tjänstepensionen på Byggavtalet följer av kollektivavtalet. Guiden reder ut vad Avtalspension SAF-LO kostar dig som arbetsgivare 2026, vem som omfattas och hur den skiljer sig från en egen lösning.", tag: "Lön & avtal",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_TJANSTEPENSION_BYGGAVTALET_BAO_HTML,
  seoTitle: "Tjänstepension Byggavtalet 2026 | ByggExp", seoDescription: "Så fungerar Avtalspension SAF-LO på Byggavtalet: avsättning 4,5 %/30 %, tillfälligt sänkt premie 2026, särskild löneskatt och Foras förmedlingsavgift.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T19:09:00.000Z", createdAt: "2026-08-19T19:09:00.000Z", updatedAt: "2026-08-19T19:09:00.000Z",
};

const A_EFTERBESIKTNING_VEM_BETALAR_ENTREPRENAD_HTML = `
<p>När fel har antecknats vid en slutbesiktning uppstår snabbt frågan om vem som ska betala för att kontrollera att felen faktiskt är åtgärdade. Kort svar enligt AB 04 kap 7 § 15 andra stycket: vid en efterbesiktning är det normalt <strong>entreprenören</strong> som betalar arvodet till besiktningsmannen – även om det är beställaren som utsett honom. Men huvudregeln har viktiga undantag, och kostnadsansvaret är partsberoende. Här reder vi ut när efterbesiktning krävs, vem som kallar och hur notan fördelas.</p>

<p>Grunden för en kontrollerad avhjälpandeprocess läggs redan under produktionen. Med löpande, dokumenterade egenkontroller minskar du både antalet antecknade fel och risken för dyra efterbesiktningar – ladda ner <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall &rarr;</a> och bygg in kontrollen i arbetsflödet från start.</p>

<h2>Vad är en efterbesiktning?</h2>
<p>Efterbesiktning definieras i AB 04 (och likalydande ABT 06) kap 7 § 5. Den verkställs för att konstatera om fel som antecknats vid en tidigare besiktning – oftast slutbesiktningen – har avhjälpts. Det är alltså en uppföljande kontroll av redan noterade fel, inte en ny fullständig genomgång av hela entreprenaden.</p>
<p>Blanda inte ihop efterbesiktningen med andra besiktningsformer:</p>
<ul>
<li><strong>Slutbesiktning</strong> – den fullständiga besiktningen vid entreprenadtidens slut, där fel antecknas.</li>
<li><strong>Särskild besiktning</strong> – riktad kontroll av en avgränsad fråga som någon part påkallar.</li>
<li><strong>Garantibesiktning</strong> – utförs mot slutet av garantitiden för att fånga fel som visat sig under tiden.</li>
<li><strong>Överbesiktning</strong> – en omprövning av ett besiktningsutlåtande, med egna kostnadsregler. Här bärs kostnaden normalt av den part vars ståndpunkt inte vinner gehör. Detta är inte samma sak som efterbesiktning.</li>
</ul>
<p>Vill du fördjupa dig i slutbesiktningens roll och vad som gäller kring garanti- och ansvarstider, se våra artiklar om <a href="/sv/blog/slutbesiktning">slutbesiktning</a> och <a href="/sv/blog/garantitid-ansvarstid-ab-04">garantitid och ansvarstid enligt AB 04</a>.</p>

<h2>När krävs efterbesiktning?</h2>
<p>Efterbesiktning är inte obligatorisk, men blir i praktiken vanlig så snart fel antecknats vid slutbesiktningen. Behovet uppstår typiskt när:</p>
<ul>
<li>entreprenören meddelat att de antecknade felen är åtgärdade och vill få det bekräftat, eller</li>
<li>beställaren vill få avhjälpandet kontrollerat innan slutlikvid betalas ut.</li>
</ul>
<p>Poängen är att någon av parterna behöver ett neutralt konstaterande av att felen verkligen är borta – det är den bekräftelsen som frigör innehållna belopp och avslutar ärendet.</p>

<h2>Vem kallar eller påkallar efterbesiktningen?</h2>
<p>Både beställare och entreprenör kan påkalla en efterbesiktning. I det typiska förloppet anmäler entreprenören att antecknade fel är avhjälpta, varefter beställaren (eller en gemensamt utsedd besiktningsman) verkställer kontrollen.</p>
<p>En praktisk regel är värd att känna till: har <strong>entreprenören</strong> påkallat efterbesiktning och den inte kommer till stånd på grund av beställarens förhållande, ska de fel som besiktningen skulle ha avsett anses avhjälpta. Beställaren kan alltså inte fördröja kontrollen och samtidigt hålla kvar felansvaret – underlåtenheten går ut över beställaren.</p>

<h2>Vem betalar? Huvudregeln och efterbesiktningsundantaget</h2>
<p>Utgångspunkten för besiktningsarvode framgår av AB 04 kap 7 § 15 första stycket: <strong>den part som utsett besiktningsmannen betalar arvodet</strong>. Har parterna utsett besiktningsmannen gemensamt delar de kostnaden.</p>
<p>För efterbesiktning gäller ett uttryckligt undantag i andra stycket. Där ska <strong>entreprenören</strong> betala ersättningen till besiktningsmannen – även om det är beställaren som anlitat och utsett honom. Logiken är enkel: entreprenören har lämnat ifrån sig en entreprenad behäftad med fel och har därigenom gjort efterbesiktningen nödvändig. Den som orsakat behovet av kontrollen får också stå för den.</p>

<h2>Partsberoendet – när hamnar kostnaden på beställaren?</h2>
<p>Att entreprenören betalar förutsätter att efterbesiktningen avsåg fel som entreprenören faktiskt ansvarar för. Här ligger den viktiga nyansen som ofta missförstås.</p>
<p>Besiktningsmannen kan bestämma att kostnaden för bland annat efterbesiktning, fortsatt eller avbruten slutbesiktning och särskild besiktning helt eller delvis ska bäras av entreprenören &quot;om det finns skäl till det&quot;. Visar efterbesiktningen däremot inget fel som entreprenören svarar för – exempelvis att det påstådda felet inte förelåg, eller att det inte är entreprenörens ansvar – finns skäl att kostnaden i stället bärs av <strong>beställaren</strong>, som påkallade kontrollen.</p>
<p>Rättspraxis skiljer på kostnad som orsakats av ett fel och kostnad som bara följer av avtalets föreskrivna besiktningsordning. Bedömningen är alltså skälighetsbaserad och beror på utfallet: konstateras ett verkligt entreprenörsfel bär entreprenören notan, uteblir felet lutar det mot beställaren.</p>

<h2>Efterbesiktning, reklamation och innehållen betalning</h2>
<p>Fel som antecknats i slutbesiktnings- respektive efterbesiktningsutlåtande får göras gällande utan särskild reklamation utöver själva anteckningen. Övriga fel måste däremot reklameras skriftligen inom sex månader – eller 18 månader för väsentliga fel – från entreprenadtidens utgång.</p>
<p>Beställaren får hålla inne ett &quot;betryggande belopp&quot; som väl täcker de förväntade avhjälpandekostnaderna tills felet är åtgärdat och efterbesiktigat. Beloppet får dock inte vara högre än skäligt och nödvändigt, och det ska kunna dokumenteras. Ett godtyckligt eller överdrivet innehållande kan i sig utgöra avtalsbrott. Om du står på entreprenörssidan och behöver bemöta ett felkrav, se vår genomgång av <a href="/sv/blog/reklamation-bemota-felkrav-entreprenad">hur du bemöter reklamation och felkrav i entreprenad</a>.</p>

<h2>Så skriver du in det i kontraktet</h2>
<p>De flesta tvister om efterbesiktning bottnar i otydliga förutsättningar. Reglera därför uttryckligen i avtalet:</p>
<ul>
<li>vem som utser besiktningsman, och om det ska ske gemensamt,</li>
<li>tidsfrister för entreprenörens anmälan om avhjälpande,</li>
<li>hur kostnadsansvaret fördelas när efterbesiktningen inte visar entreprenörsfel,</li>
<li>rutin för innehållen betalning och när beloppet frigörs.</li>
</ul>
<p>Ju mer som är nedskrivet innan felen uppstår, desto mindre utrymme för diskussion när de gör det.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte AB 04:s regler, men gör det enklare att stå stark när kostnadsfrågan ska avgöras. Med strukturerade egenkontroller och samlad dokumentation kan du visa vad som utförts, när och av vem – underlag som väger tungt både vid slutbesiktning och när en besiktningsman ska bedöma vem som ska bära efterbesiktningens kostnad.</p>
<ul>
<li>Dokumentera egenkontroller löpande med <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> så att avhjälpandet är spårbart.</li>
<li>Samla foto, noteringar och tidpunkter kopplade till varje åtgärdat fel.</li>
<li>Håll ordning på reklamationsfrister och innehållna belopp per projekt.</li>
</ul>
<p>Målet är enkelt: när efterbesiktningen väl äger rum ska det redan vara dokumenterat att felen är åtgärdade.</p>

<h2>Vanliga frågor</h2>
<h3>Vem betalar efterbesiktningen enligt AB 04?</h3>
<p>Huvudregeln är att den part som utsett besiktningsmannen betalar arvodet. Vid efterbesiktning gäller dock ett undantag i kap 7 § 15 andra stycket: entreprenören betalar normalt, eftersom felet gjort besiktningen nödvändig – även om beställaren utsett besiktningsmannen.</p>
<h3>Kan beställaren tvingas betala efterbesiktningen?</h3>
<p>Ja. Om efterbesiktningen inte visar något fel som entreprenören svarar för – felet förelåg inte eller är inte entreprenörens ansvar – finns skäl att kostnaden i stället bärs av beställaren som påkallade kontrollen. Besiktningsmannen gör en skälighetsbedömning utifrån utfallet.</p>
<h3>Vad händer om efterbesiktningen uteblir på grund av beställaren?</h3>
<p>Har entreprenören påkallat efterbesiktning och den inte kommer till stånd på grund av beställarens förhållande, ska de fel som besiktningen skulle ha avsett anses avhjälpta. Beställaren kan alltså inte fördröja kontrollen och samtidigt behålla felansvaret.</p>
<h3>Är efterbesiktning samma sak som överbesiktning?</h3>
<p>Nej. Efterbesiktning enligt kap 7 § 5 är en uppföljande kontroll av om antecknade fel avhjälpts. Överbesiktning är en omprövning av ett besiktningsutlåtande och har egna kostnadsregler, där den part vars ståndpunkt inte vinner gehör normalt bär kostnaden.</p>

<h2>Kom igång</h2>
<p>Bygg in kontrollen där felen faktiskt uppstår – på arbetsplatsen. Börja med <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> och utforska fler kostnadsfria hjälpmedel bland <a href="/sv/verktyg">våra verktyg</a>. Vill du se hur dokumentationen hänger ihop över hela projektet? <a href="/sv/contact">Boka en demo &rarr;</a></p>
<p>Relaterat: <a href="/sv/blog/slutbesiktning">Slutbesiktning – så fungerar den</a>, <a href="/sv/blog/garantitid-ansvarstid-ab-04">Garantitid och ansvarstid enligt AB 04</a>, <a href="/sv/blog/reklamation-bemota-felkrav-entreprenad">Bemöta reklamation och felkrav i entreprenad</a>.</p>
`;

const A_EFTERBESIKTNING_VEM_BETALAR_ENTREPRENAD: BlogPost = {
  _id: "code-"+"efterbesiktning-vem-betalar-entreprenad",
  title: "Efterbesiktning – vem betalar enligt AB 04?", slug: "efterbesiktning-vem-betalar-entreprenad", locale: "sv",
  excerpt: "Vid efterbesiktning betalar normalt entreprenören besiktningsarvodet – men huvudregeln har undantag. Så fördelas notan enligt AB 04.", tag: "Entreprenadjuridik",
  coverImageUrl: "/landing/features/2uppgift.webp", contentHtml: A_EFTERBESIKTNING_VEM_BETALAR_ENTREPRENAD_HTML,
  seoTitle: "Efterbesiktning: vem betalar? | ByggExp", seoDescription: "Vem betalar efterbesiktningen enligt AB 04? Huvudregeln, undantaget i kap 7 § 15, partsberoendet och när kostnaden hamnar på beställaren. Praktisk guide för byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T19:15:00.000Z", createdAt: "2026-08-19T19:15:00.000Z", updatedAt: "2026-08-19T19:15:00.000Z",
};

const A_FARDIGSTALLANDESKYDD_SMAHUS_HTML = `
<p>Du har fått bygglovet, kunden är taggad och byggstart är inbokad. Men utan bevis om färdigställandeskydd får byggnadsnämnden inte lämna startbesked — och då står projektet stilla oavsett hur redo ni är. För entreprenörer som bygger småhus åt konsumenter är det här en av de vanligaste anledningarna till att en byggstart skjuts upp, ofta för att skyddet ordnas för sent eller missförstås som något man visar upp först vid bygglovet.</p>

<p>Ta höjd för färdigställandeskyddets kostnad redan i anbudsläget och skriv in det tydligt i offerten med <a href="/sv/verktyg/offert-mall">vår gratis offertmall &rarr;</a> så slipper du diskussioner med kunden om vem som betalar.</p>

<h2>Vad är färdigställandeskydd?</h2>
<p>Färdigställandeskydd regleras av lagen (2014:227) om färdigställandeskydd. Det är antingen en försäkring eller en bankgaranti som skyddar byggherren om entreprenören går i konkurs eller på annat sätt inte kan fullgöra sina åtaganden. Skyddet gäller när en näringsidkare utför arbete åt en konsument på ett en- eller tvåbostadshus — alltså i den klassiska konsument-hantverkarrelationen, inte mellan två byggföretag.</p>
<p>Det är lätt att blanda ihop färdigställandeskyddet med den gamla byggfelsförsäkringen. Kravet på obligatorisk byggfelsförsäkring togs bort den 1 juni 2014, samma dag som färdigställandeskyddet infördes. En separat nybyggnads- eller dolda-fel-försäkring finns fortfarande men är helt frivillig. Färdigställandeskyddet handlar om att bygget faktiskt blir klart och att fel avhjälps — inte om dolda fel som dyker upp flera år senare.</p>

<h2>När krävs det?</h2>
<p>Huvudregeln är enkel: vid nybyggnad av ett småhus åt en konsument krävs alltid färdigställandeskydd. Vid tillbyggnad eller anmälningspliktig åtgärd gör byggnadsnämnden i stället en behovsprövning i varje enskilt fall.</p>
<ul>
<li><strong>Nybyggnad:</strong> skydd krävs som huvudregel.</li>
<li><strong>Tillbyggnad och anmälningspliktig åtgärd:</strong> skydd krävs om byggnadsnämnden bedömer att behov finns. Nämnden ska särskilt väga de beräknade kostnaderna för entreprenörens åtaganden mot vad själva skyddet kostar.</li>
<li><strong>Undantag:</strong> skydd krävs inte om åtgärden inte omfattas av krav på bygglov enligt plan- och bygglagen. Nämnden kan också besluta att skydd inte behövs, till exempel för en byggnad som inte ska användas för permanent bruk, som ett fritidshus.</li>
</ul>
<p>Att kravet bara gäller konsumentförhållanden är värt att understryka. Bygger ni åt ett annat byggföretag eller en fastighetsutvecklare gäller andra regler, och där hanteras riskerna i entreprenadkontraktet i stället.</p>

<h2>Bygglov eller startbesked — den kritiska tidpunkten</h2>
<p>Den vanligaste missuppfattningen är att beviset ska visas upp när bygglovet söks. Så är det inte. Bevis om färdigställandeskydd ska visas för byggnadsnämnden innan startbesked lämnas. Enligt PBL 10 kap. 23 § får nämnden inte ge startbesked om skydd krävs men saknas — och utan startbesked får arbetet inte lagligen påbörjas.</p>
<p>I praktiken betyder det att du kan ha ett godkänt bygglov men ändå inte få börja bygga. Glappet mellan lov och startbesked är precis där projekt fastnar. Behandla därför färdigställandeskyddet som en del av det tekniska samrådet och startbeskedsansökan, inte som något du ordnar "sen". Läs gärna mer om hur hela kedjan hänger ihop i vår genomgång av <a href="/sv/blog/startbesked-bygglov-process-2026">startbesked och bygglovsprocessen 2026</a>.</p>

<h2>Vad skyddet måste omfatta</h2>
<p>Lagen ställer krav på vad skyddet ska täcka. Ersättningen ska omfatta skälig ersättning för:</p>
<ol>
<li>Extra kostnader för att slutföra arbetena om entreprenören inte kan fullfölja.</li>
<li>Kostnader för att avhjälpa fel som en besiktningsman anmärkt på vid slutbesiktningen.</li>
<li>Kostnader för att avhjälpa skador på byggnaden som orsakats av fel.</li>
</ol>
<p>Ersättningen ska uppgå till minst tio procent av det avtalade priset. På ett nybygge med ett avtalat pris på 3 000 000 kr innebär det ett skydd på minst 300 000 kr. Den nivån speglar vad det typiskt kostar en konsument att ta in en ny entreprenör och slutföra ett halvfärdigt hus, och det är därför konsumentskyddet inte får urholkas av villkor som i praktiken gör beloppet oåtkomligt.</p>

<h2>Vem ansvarar och vem betalar?</h2>
<p>Formellt är det konsumenten, alltså byggherren, som ansvarar för att skyddet finns. I praktiken är det nästan alltid entreprenören som tecknar det, av en enkel anledning: det är entreprenörens ekonomi och konkursrisk som prövas av försäkringsgivaren eller banken. Kostnaden bärs däremot oftast av konsumenten, via entreprenadpriset.</p>
<p>Just därför bör kostnaden aldrig ligga dold. Skriv in färdigställandeskyddet som en egen post eller en tydligt angiven del av priset i offerten, och referera till det i entreprenadkontraktet. Använder ni ABS 18 eller Hantverkarformuläret 17 är det naturligt att koppla skyddet till avtalets bestämmelser om säkerhet och betalning — se vår genomgång av <a href="/sv/blog/abs-18-hantverkarformularet-17">ABS 18 och Hantverkarformuläret 17</a> för hur det hänger ihop.</p>

<h2>Vad det kostar 2026</h2>
<p>Premien ligger typiskt runt 1–1,5 % av entreprenadsumman, och vissa aktörer anger ett spann på 0,5–1,5 %. Det finns oftast ett golv på ungefär 5 000 kr. På en entreprenad om 3 000 000 kr landar du alltså grovt räknat på 15 000–45 000 kr.</p>
<p>Priset är dock inte statiskt. För mindre företag med svag ekonomi eller förhöjd konkursrisk kan premien bli väsentligt högre, ibland över 20 000 kr även på mindre projekt, och i vissa fall kan bolaget nekas skydd helt. Eftersom det bygger på en kreditprövning tar ansökan tid — räkna med ledtid, särskilt om din senaste årsredovisning inte är stark. Att lämna in ansökan i samma veva som du bokar byggstart är att be om problem.</p>

<h2>Så ordnar entreprenören det rätt</h2>
<ul>
<li><strong>Teckna tidigt.</strong> Starta ansökan så snart bygglovet är på gång, inte när startbeskedet ska sökas.</li>
<li><strong>Säkra kreditvärdigheten.</strong> Ha aktuell årsredovisning och kontroll på likviditeten redo — det är den som avgör premien och om du överhuvudtaget får skydd.</li>
<li><strong>Bifoga beviset till startbeskedsansökan.</strong> Se till att intyget finns hos byggnadsnämnden i god tid före tekniskt samråd.</li>
<li><strong>Kommunicera kostnaden till kunden.</strong> Lyft posten i offerten så att den inte kommer som en överraskning i slutfakturan.</li>
<li><strong>Dokumentera.</strong> Spara intyg, offert och avtal ihop — bevaringstiden för underlag är sju år.</li>
</ul>

<h2>Nyheter från 1 juli 2026</h2>
<p>Den 1 juli 2026 träder en större PBL-reform i kraft (prop. 2025/26:172, "Effektiv och säker byggprocess"). Reformen inför bland annat rollen byggbedömare och ändrar byggnadsnämndens prövning i lov, startbesked och slutbesked. För dig som bygger småhus är huvudbudskapet lugnande: reglerna om färdigställandeskydd och behovsprövningen finns kvar. Däremot går det inte att tillämpa äldre regler efter den 1 juli 2026, så håll koll på hur din kommun hanterar övergången i pågående ärenden.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp tecknar inte färdigställandeskyddet åt dig — det är alltid försäkringsgivaren eller banken som prövar din ekonomi. Men verktygen hjälper dig att få in kostnaden och kravet på rätt ställe i affären. I offertmallen lägger du in färdigställandeskyddet som en tydlig post, kopplar den till entreprenadkontraktet och håller ihop underlaget så att du snabbt kan visa vad som ingår. Då blir det enkelt att förklara för kunden varför posten finns, och du har dokumentationen samlad när startbeskedet ska sökas och när bevaringstiden på sju år räknas.</p>

<h2>Vanliga frågor</h2>
<h3>Måste färdigställandeskyddet finnas innan bygglovet?</h3>
<p>Nej. Beviset ska visas för byggnadsnämnden innan startbesked lämnas, inte innan bygglov. Du kan alltså ha bygglov men ändå inte få börja bygga förrän skyddet är på plats, eftersom nämnden enligt PBL 10 kap. 23 § inte får ge startbesked utan det.</p>
<h3>Krävs skydd vid tillbyggnad?</h3>
<p>Inte automatiskt. Vid tillbyggnad och anmälningspliktiga åtgärder gör byggnadsnämnden en behovsprövning och väger kostnaden för dina åtaganden mot kostnaden för själva skyddet. Nämnden kan besluta att skydd inte behövs, exempelvis för byggnader som inte ska användas permanent, som fritidshus. Krävs inte bygglov alls krävs heller inget färdigställandeskydd.</p>
<h3>Vad kostar färdigställandeskydd 2026?</h3>
<p>Typiskt runt 1–1,5 % av entreprenadsumman, med ett golv på ungefär 5 000 kr. För bolag med svag ekonomi eller konkursrisk kan premien bli klart högre, ibland över 20 000 kr, och i vissa fall kan företaget nekas skydd. Eftersom det bygger på en kreditprövning bör du räkna med ledtid.</p>
<h3>Är färdigställandeskydd samma sak som byggfelsförsäkring?</h3>
<p>Nej. Kravet på obligatorisk byggfelsförsäkring togs bort den 1 juni 2014, samtidigt som färdigställandeskyddet infördes. Skyddet säkrar att bygget blir färdigt och att fel avhjälps om entreprenören inte kan fullfölja. En separat nybyggnads- eller dolda-fel-försäkring är frivillig och något annat.</p>

<h2>Kom igång</h2>
<p>Bygg in färdigställandeskyddet i affären från början. Sätt upp priset och posten i <a href="/sv/verktyg/offert-mall">vår offertmall</a>, eller bläddra bland fler kalkyler och mallar i <a href="/sv/verktyg">verktygslådan</a>. Vill du se hur ByggExp håller ihop offert, avtal och dokumentation i samma flöde — <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/startbesked-bygglov-process-2026">Startbesked och bygglovsprocessen 2026</a>, <a href="/sv/blog/abs-18-hantverkarformularet-17">ABS 18 och Hantverkarformuläret 17</a>, <a href="/sv/blog/entreprenadkontrakt-mall">Entreprenadkontrakt — mall och guide</a>.</p>
`;

const A_FARDIGSTALLANDESKYDD_SMAHUS: BlogPost = {
  _id: "code-"+"fardigstallandeskydd-smahus",
  title: "Färdigställandeskydd för småhus: vad entreprenören måste ordna innan bygget får starta", slug: "fardigstallandeskydd-smahus", locale: "sv",
  excerpt: "Utan bevis om färdigställandeskydd får byggnadsnämnden inte ge startbesked — här är reglerna, kostnaden 2026 och checklistan för entreprenören.", tag: "Juridik",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_FARDIGSTALLANDESKYDD_SMAHUS_HTML,
  seoTitle: "Färdigställandeskydd småhus | ByggExp", seoDescription: "Färdigställandeskydd för småhus krävs innan startbesked, inte bygglov. Så fungerar lag 2014:227, vad det kostar 2026 och hur du ordnar det rätt.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T20:27:00.000Z", createdAt: "2026-08-19T20:27:00.000Z", updatedAt: "2026-08-19T20:27:00.000Z",
};

const A_OVERBESIKTNING_ENTREPRENAD_HTML = `
<p>Slutbesiktningen underkände entreprenaden — trots att du anser den fullbordad. Eller så antecknade besiktningsmannen fel som du bestrider, eller lade ansvaret för ett fel på dig utan grund. Ett besiktningsutlåtande är inte sista ordet. AB 04 har ett inbyggt verktyg för att få en felaktig besiktning omprövad: överbesiktning enligt kapitel 7. Den här guiden riktar sig till entreprenörer och underentreprenörer och går igenom när du kan påkalla överbesiktning, hur processen ser ut och — det som avgör om det är värt risken — vem som betalar.</p>

<p>Samla dokumentationen som styrker din uppfattning innan du agerar. I <a href="/sv/verktyg">vår verktygslåda med gratis mallar och kalkylatorer för byggföretag →</a> hittar du underlag som håller ordning på egenkontroller och besiktningsunderlag inför en tvist.</p>

<h2>Vad är överbesiktning?</h2>
<p>Överbesiktning är en formell omprövning av en tidigare besiktning — typiskt en slutbesiktning eller garantibesiktning — enligt AB 04 kap 7 § 6. Det är inte en helt ny besiktning från grunden, utan en prövning av just de frågor som föranlett den. I praktiken handlar det om tre saker: frågan om entreprenadens godkännande, förekomsten av ett visst fel och ansvaret för det felet.</p>
<p>Poängen är att överbesiktningen ersätter den ursprungliga besiktningen i de delar den avser. Kommer överbesiktningen fram till en annan slutsats är det den som gäller — den tidigare bedömningen omprövas. Både beställaren och entreprenören har lika rätt att påkalla överbesiktning av varje form av besiktning.</p>

<h2>När kan entreprenören begära överbesiktning?</h2>
<p>Tre situationer är vanligast i entreprenörsledet:</p>
<ul>
<li><strong>Entreprenaden underkändes.</strong> Besiktningsmannen godkände inte entreprenaden trots att du anser den kontraktsenligt fullbordad.</li>
<li><strong>Fel du bestrider.</strong> Utlåtandet noterar anmärkningar som du menar inte är fel — utförandet är avtalsenligt, eller så ligger avvikelsen utanför ditt åtagande.</li>
<li><strong>Tvist om ansvar.</strong> Felet finns, men frågan är vem som bär ansvaret och kostnaden för att åtgärda det.</li>
</ul>
<p>Rätten är symmetrisk: beställaren kan påkalla överbesiktning på precis samma grunder. Att du som entreprenör har verktyget betyder alltså också att motparten har det.</p>

<h2>Fristen — tre veckor, med viktiga avvikelser</h2>
<p>Överbesiktning ska påkallas <strong>skriftligen</strong>. Enligt AB 04 gäller tre (3) veckor från det att parten fått del av besiktningsutlåtandet. Missar du fristen är rätten till överbesiktning förlorad — då återstår domstol eller skiljeförfarande, som är dyrare och långsammare.</p>
<p>Två fallgropar att känna till:</p>
<ul>
<li><strong>Underentreprenad (AB-U 04) har andra frister.</strong> Där ska entreprenören påkalla inom två (2) veckor och beställaren inom fyra (4) veckor — inte den symmetriska treveckorsregeln. Arbetar du som UE måste du alltså agera snabbare än i ett AB 04-förhållande.</li>
<li><strong>"Fått del av" är avgörande.</strong> Fristen börjar löpa när parten fått del av utlåtandet, och just den tidpunkten är en vanlig tvistefråga som prövats rättsligt. Notera och spara datum för när utlåtandet faktiskt nådde dig.</li>
</ul>
<p>Motsvarande bestämmelser finns i ABT 06 kap 7 för totalentreprenad, med samma systematik för påkallande och kostnad. Kontrollera alltid vilket standardavtal som gäller i just ditt kontrakt innan du räknar dagar.</p>

<h2>Så går processen till — steg för steg</h2>
<ol>
<li><strong>Skriftligt påkallande</strong> inom fristen, med angivande av vilka frågor du vill ompröva.</li>
<li><strong>Utse besiktningsman.</strong> Parterna kan gemensamt utse en ensam överbesiktningsman. Alternativt bildas en överbesiktningsnämnd: vardera parten utser var sin besiktningsman, och dessa två utser i sin tur en ordförande.</li>
<li><strong>Vid oenighet</strong> kan en branschorganisation, till exempel Byggföretagen, utse besiktningsmannen så att processen inte fastnar.</li>
<li><strong>Förrättning</strong> där de omtvistade frågorna prövas.</li>
<li><strong>Nytt utlåtande</strong> som omprövar den tidigare besiktningen i de aktuella delarna.</li>
</ol>

<h2>Vad kostar det och vem betalar?</h2>
<p>Det här är kärnfrågan, och den avgör om det är värt att påkalla. Överbesiktning har ingen fast taxa i standardvillkoren — kostnaden varierar med projektets omfattning och besiktningsmannens arvode och ligger generellt i samma storleksordning som den ursprungliga slutbesiktningen, ibland högre (fler förrättare i en nämnd, mer omtvistade frågor). Några fasta kronbelopp anges inte i AB 04.</p>
<p>Partsfördelningen regleras i AB 04 kap 7 § 16, och huvudregeln är enkel: <strong>den part vars uppfattning inte vinner betalar</strong> för överbesiktningen.</p>
<ul>
<li><strong>Entreprenören vinner</strong> (överbesiktningen ger dig rätt) → beställaren bär kostnaden.</li>
<li><strong>Entreprenören förlorar</strong> (den ursprungliga besiktningen står sig) → du som påkallade och förlorade betalar.</li>
</ul>
<p>Lägg märke till att detta är ett undantag från hur vanlig besiktning bekostas. Vid en ordinär besiktning betalar beställaren besiktningsmannens arvode om beställaren utsett honom, eller så delas kostnaden om parterna utsett honom gemensamt. Överbesiktningens "förlorar-betalar"-regel bryter mot det mönstret — det är därför du måste väga risken innan du påkallar.</p>
<p>Parterna kan avtala om en annan fördelning, och det görs lämpligen redan i entreprenadavtalet. Att i förväg reglera kostnadsansvaret vid överbesiktning tar bort en osäkerhet i ett läge där tonläget ofta redan är högt.</p>

<h2>Är utlåtandet bindande?</h2>
<p>Nej — inte slutligt. Varken en slutbesiktning eller en överbesiktning binder parterna definitivt. Frågan om godkännande och fel kan prövas vidare i domstol eller skiljeförfarande även efter en överbesiktning. Skillnaden ligger i bevisvärdet: ett utlåtande från en gemensamt utsedd besiktningsman eller en överbesiktningsnämnd väger tyngre än ett från en ensidigt utsedd besiktningsman. I praktiken är överbesiktning därför ofta både billigare och snabbare än en full process — och kan lösa tvisten innan den blir en rättssak.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp avgör inte en besiktningstvist åt dig, men systemet ger dig underlaget som avgör den. Löpande egenkontroller, dokumenterat utförande och spårbara underlag är exakt det som styrker din uppfattning när en anmärkning ska omprövas. Med <a href="/sv/verktyg/egenkontroll-mall">vår mall för egenkontroll →</a> bygger du dokumentationen redan under projektets gång, så att du inte står tomhänt när slutbesiktningen kommer. Har du ordning på egenkontroller, datum och kommunikation blir bedömningen av om det är värt att påkalla överbesiktning — och risken enligt § 16 — betydligt lättare att göra.</p>

<h2>Vanliga frågor</h2>
<h3>Hur lång tid har jag på mig att påkalla överbesiktning?</h3>
<p>Enligt AB 04 tre veckor från att du fått del av besiktningsutlåtandet, och påkallandet ska vara skriftligt. Vid underentreprenad enligt AB-U 04 gäller två veckor för entreprenören och fyra veckor för beställaren. Missad frist innebär att rätten går förlorad.</p>
<h3>Vem betalar om jag förlorar överbesiktningen?</h3>
<p>Då gör du det. Huvudregeln i AB 04 kap 7 § 16 är att den part vars uppfattning inte vinner bär kostnaden. Vinner du betalar beställaren; står den ursprungliga besiktningen sig betalar du som påkallade. Parterna kan avtala om annan fördelning i förväg.</p>
<h3>Vad kostar en överbesiktning?</h3>
<p>Det finns inget fast belopp i AB 04. Kostnaden följer projektets omfattning och besiktningsmannens taxa och ligger generellt i nivå med den ursprungliga slutbesiktningen, ibland högre om en nämnd med flera förrättare krävs.</p>
<h3>Kan jag driva frågan vidare om jag inte är nöjd med överbesiktningen?</h3>
<p>Ja. Utlåtandet är inte slutligt bindande — frågan kan prövas i domstol eller skiljeförfarande. Ett utlåtande från en gemensamt utsedd besiktningsman eller nämnd har dock högre bevisvärde än ett ensidigt.</p>

<h2>Kom igång</h2>
<p>Bygg dokumentationen som håller i en tvist redan under projektet. Börja med <a href="/sv/verktyg/egenkontroll-mall">mallen för egenkontroll →</a> och utforska fler underlag i <a href="/sv/verktyg">verktygslådan</a>. Vill du se hur ByggExp samlar egenkontroller, besiktningsunderlag och projektdokumentation på ett ställe? <a href="/sv/contact">Boka en demo →</a>. Vid större belopp — ta alltid juridisk hjälp innan du påkallar.</p>

<p>Relaterat: <a href="/sv/blog/slutbesiktning">Slutbesiktning entreprenad — så fungerar den</a>, <a href="/sv/blog/efterbesiktning-vem-betalar-entreprenad">Efterbesiktning — vem betalar?</a> och <a href="/sv/blog/besiktningsanmarkning-atgarda-bemota">Besiktningsanmärkning — åtgärda eller bemöta</a>.</p>
`;

const A_OVERBESIKTNING_ENTREPRENAD: BlogPost = {
  _id: "code-"+"overbesiktning-entreprenad",
  title: "Överbesiktning i entreprenad — så begär entreprenören omprövning av slutbesiktningen (AB 04 kap 7)", slug: "overbesiktning-entreprenad", locale: "sv",
  excerpt: "Anser du som entreprenör att slutbesiktningen underkänt entreprenaden eller antecknat fel felaktigt? Överbesiktning enligt AB 04 kap 7 är verktyget för att få utlåtandet omprövat.", tag: "Juridik",
  coverImageUrl: "/landing/features/2uppgift.webp", contentHtml: A_OVERBESIKTNING_ENTREPRENAD_HTML,
  seoTitle: "Överbesiktning entreprenad | ByggExp", seoDescription: "Så begär entreprenören överbesiktning enligt AB 04 kap 7 — frist på 3 veckor, process steg för steg och vem som betalar enligt § 16.",
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T22:15:00.000Z", createdAt: "2026-08-19T22:15:00.000Z", updatedAt: "2026-08-19T22:15:00.000Z",
};

const A_AB_U_UNDERENTREPRENOR_AVTAL_HTML = `
<p>Som general- eller totalentreprenör sitter du med hela risken mot din beställare – tider, viten, garantitider och besiktning. Ändå glömmer många att föra ner exakt samma villkor till sina underentreprenörer. Blir din UE försenad, men du inte har speglat vitesbestämmelsen nedåt, fastnar kostnaden hos dig. Standardavtalen för <strong>AB-U ABT-U underentreprenör avtal</strong> är byggda just för att lösa detta: de speglar (back-to-back) huvudavtalet så att risken vandrar vidare i entreprenadkedjan i stället för att stanna på ditt bord.</p>

<p>Innan du skriver nästa UE-kontrakt – samla dina underlag och mallar i <a href="/sv/verktyg">vår kostnadsfria verktygssamling för byggföretag &rarr;</a> så att avtal, offert och kalkyl hänger ihop.</p>

<h2>Vad är AB-U 07 och ABT-U 07?</h2>
<p>Både AB-U 07 och ABT-U 07 är Byggföretagens (dåvarande Sveriges Byggindustriers) standardavtal för underentreprenad, antagna i maj 2007. De är fortfarande de gällande versionerna 2026 – ingen ny revidering har ersatt dem, även om huvudavtalet AB 04 diskuteras för revidering.</p>
<p><strong>AB-U 07</strong> används vid utförandeunderentreprenad, alltså när hela eller en väsentlig del av projekteringen ligger hos beställaren eller dennes uppdragsgivare. Uppåt i kedjan gäller AB 04, och UE bär utförandeansvar mot beställarens handlingar. <strong>ABT-U 07</strong> används vid totalunderentreprenad, där UE svarar för både projektering och utförande och där ABT 06 gäller mellan totalentreprenören och dennes beställare. Här bär UE funktionsansvar – ansvar för att avtalad funktion faktiskt uppnås. Båda avtalen gäller enbart näring till näring och får aldrig användas mot konsument; då gäller i stället konsumenttjänstlagen och exempelvis Hantverkarformuläret.</p>

<h2>Back-to-back-principen – varför avtalen finns</h2>
<p>AB-U 07 och ABT-U 07 är inte fristående avtal. De bygger på AB 04 respektive ABT 06 med ett antal <em>ändringar</em> och <em>tillägg</em>: en ändring ersätter en bestämmelse i huvudavtalet, ett tillägg kompletterar den. Poängen är att tider, garantitider, viten, betalning, besiktning och hävning ska matcha huvudavtalet uppåt. Uppnår du inte den speglingen riskerar du att sitta emellan – bunden hårt mot din beställare men löst mot din UE. Det är precis den glipan som äter marginalen.</p>

<h2>De viktigaste speglingsklausulerna</h2>
<p>Det här är de bestämmelser som gör AB-U 07 till ett back-to-back-avtal. Kontrollera dem mot ditt huvudavtal innan du signerar:</p>
<ul>
<li><strong>Garantitid (punkt 6, tillägg till AB 04 kap 4 §7):</strong> UE:s garantitid får aldrig vara längre än den som avtalats mellan dig och din uppdragsgivare. Huvudavtalets garantitid speglas nedåt.</li>
<li><strong>Förseningsvite (punkt 7, ändring av kap 5 §3):</strong> vite utgår med 1 % av kontraktssumman, dock lägst 5 000 kr, för varje påbörjad vecka som kontraktstiden överskrids – om inget annat avtalats.</li>
<li><strong>Betalning och preskription (punkt 11–12):</strong> UE har rätt till betalning i den mån du har rätt till betalning av din uppdragsgivare. Preskriptionstiderna kortas till 4 månader respektive 22 månader (punkt 11) och 8 månader (punkt 12).</li>
<li><strong>Säkerhet (punkt 13, ändring av kap 6 §21):</strong> din säkerhet mot UE ska gälla 10 % av kontraktssumman och begränsas fortlöpande till obetald del av kontraktssumman.</li>
<li><strong>Besiktning och godkännande (punkt 14, 19, 20):</strong> slutbesiktning av UE-entreprenaden verkställs genom motsvarande besiktning av din entreprenad, och godkännandet följer godkännandet uppåt. Du får åberopa fel som din uppdragsgivare påtalat, men måste påtala felet mot UE inom 2 månader från mottaget krav.</li>
<li><strong>Hävning (punkt 23, 25):</strong> du får häva mot UE om du avtalsenligt hävt kontraktet med din uppdragsgivare, och om UE inte betalar skatter eller sociala avgifter enligt lag eller kollektivavtal. Vid uppdragsgivarens kontraktsbrott får du beordra UE att avbryta arbeten under motsvarande tid, dock längst sammanlagt en månad.</li>
</ul>
<p>Exempel: ditt kontrakt mot beställaren har 5 års garantitid och ett förseningsvite på 1 % per vecka. Skriver du AB-U 07 utan avvikelser får UE samma tak på garantitiden och samma viteskonstruktion – risken speglas automatiskt. Hade du i stället skrivit ett eget kortavtal utan speglingsklausuler hade du fått förhandla varje punkt manuellt, med risk för luckor.</p>

<h2>Dokumentrangordning vid motstridiga uppgifter</h2>
<p>Punkt 2 (ändring av AB 04 kap 1 §3) sätter tolkningsordningen när handlingarna säger emot varandra: 1) kontrakt, 2) ändringar i AB 04/AB-U 07 som tagits upp i de administrativa föreskrifterna (AF), 3) AB-U 07, 4) AB 04, därefter beställning, anbud och så vidare. AB-U 07 går alltså före AB 04 men efter kontraktet och avtalade AF-ändringar. Den praktiska slutsatsen: vill du avvika från standardtexten måste avvikelsen skrivas in i kontraktet eller AF – annars vinner standardtexten. Att muntligt "komma överens om något annat" håller inte om det inte står i rätt handling.</p>

<h2>2026-reglerna du inte får missa</h2>
<p>Utöver själva speglingen finns regler som avgör om affären hanteras korrekt skattemässigt och arbetsrättsligt:</p>
<ul>
<li><strong>Omvänd byggmoms:</strong> säljer du eller din UE byggtjänster till en köpare som bedriver byggverksamhet mer än tillfälligt gäller omvänd skattskyldighet. UE fakturerar utan moms och köparen redovisar momsen. Fakturan ska ange köparens momsregistreringsnummer och att omvänd skattskyldighet gäller för byggtjänster. AB-U 07 punkt 10 reglerar korrigering om momsen hanterats fel.</li>
<li><strong>Legitimation och namnbricka:</strong> alla på arbetsplatsen ska bära namnbricka med namn och arbetsgivare samt ha giltig legitimation tillgänglig (punkt 5). Bryts det utgår vite om 500 kr per person och dag (punkt 8). Detta hänger ihop med kravet på elektronisk personalliggare, som är lagkrav när projektets sammanlagda kostnad överstiger 4 prisbasbelopp – med prisbasbeloppet 59 200 kr för 2026 innebär det en gräns runt 236 800 kr. Byggherren ansvarar, men ansvaret kan skriftligen överlåtas till entreprenör.</li>
<li><strong>Entreprenörsansvar för lönefordringar (lag i kraft 1 januari 2019):</strong> kan en UE inte betala sin arbetstagares lön blir UE:s uppdragsgivare betalningsansvarig och i sista hand huvudentreprenören. Lagen gäller inte för entreprenörer som är bundna av kollektivavtal med likvärdigt skydd – vilket förklarar varför punkt 23 ger hävningsrätt vid UE:s obetalda skatter och avgifter.</li>
</ul>

<h2>Checklista innan du skriver på</h2>
<ol>
<li>Välj rätt avtal – AB-U 07 vid utförande, ABT-U 07 när UE också projekterar.</li>
<li>Bifoga rätt huvudavtal (AB 04 eller ABT 06) och relevanta handlingar.</li>
<li>Spegla tider, förseningsvite och garantitid mot ditt kontrakt uppåt.</li>
<li>Skriv in alla avvikelser i kontraktet eller AF – inte i lösa mejl.</li>
<li>Kontrollera momshanteringen (omvänd byggmoms) och köparens momsnummer.</li>
<li>Ta kreditupplysning och kontrollera UE:s kollektivavtalstillhörighet.</li>
<li>Reglera personalliggare och legitimationskrav skriftligt.</li>
<li>Använd aldrig AB-U/ABT-U mot konsument.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte standardavtalen – AB-U 07 och ABT-U 07 hämtar du hos Byggföretagen – men vi hjälper dig hålla ihop dokumentationen runt dem. I <a href="/sv/verktyg/offert-mall">vår offertmall</a> bygger du ett tydligt underlag där kontraktssumma, omfattning och villkor framgår, vilket blir grunden när du sätter UE-kontraktets belopp och speglar viten och säkerhet. Samlar du offert, kalkyl och avtalsunderlag på ett ställe blir det enklare att kontrollera att villkoren stämmer uppåt och nedåt i kedjan – och att du kan visa vad som avtalats om en tvist uppstår.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan AB-U 07 och ABT-U 07?</h3>
<p>AB-U 07 används vid utförandeunderentreprenad, där projekteringen ligger hos beställaren och AB 04 gäller uppåt – UE har utförandeansvar. ABT-U 07 används vid totalunderentreprenad, där UE både projekterar och utför, ABT 06 gäller uppåt och UE bär funktionsansvar.</p>
<h3>Är AB-U 07 fortfarande giltigt 2026?</h3>
<p>Ja. AB-U 07 och ABT-U 07 antogs i maj 2007 och är fortfarande de gällande versionerna 2026. Ingen ny revidering har ersatt dem, även om huvudavtalet AB 04 diskuteras för revidering.</p>
<h3>Kan jag använda AB-U 07 mot en privatperson?</h3>
<p>Nej. Varken AB-U 07 eller ABT-U 07 får användas för arbeten åt konsument – de gäller enbart näring till näring. För konsumententreprenad gäller konsumenttjänstlagen och exempelvis Hantverkarformuläret eller ABS.</p>
<h3>Hur speglas förseningsvitet mot min UE?</h3>
<p>Enligt punkt 7 utgår vite med 1 % av kontraktssumman, dock lägst 5 000 kr, för varje påbörjad vecka som kontraktstiden överskrids – om inget annat avtalats. Vill du ha ett annat vite måste du skriva in det i kontraktet eller AF.</p>

<h2>Kom igång</h2>
<p>Ett korrekt speglat UE-avtal är det som skyddar din marginal när tider och besiktningar väl sätts på prov. Börja med att bygga ett tydligt underlag i <a href="/sv/verktyg/offert-mall">offertmallen</a> och utforska fler verktyg i <a href="/sv/verktyg">verktygssamlingen</a>. Vill du se hur ByggExp håller ihop offert, kalkyl och dokumentation? <a href="/sv/contact">Boka en demo &rarr;</a></p>

<p>Relaterat: <a href="/sv/blog/anlita-underentreprenor">Anlita underentreprenör – vad du måste kontrollera</a>, <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06 – skillnaderna förklarade</a>, <a href="/sv/blog/entreprenadtvist-undvika-dokumentation">Undvik entreprenadtvist med rätt dokumentation</a>.</p>
`;

const A_AB_U_UNDERENTREPRENOR_AVTAL: BlogPost = {
  _id: "code-"+"ab-u-underentreprenor-avtal",
  title: "AB-U 07 och ABT-U 07 – så speglar du huvudavtalet mot din underentreprenör", slug: "ab-u-underentreprenor-avtal", locale: "sv",
  excerpt: "Praktisk genomgång av hur AB-U 07 och ABT-U 07 speglar huvudavtalet mot din underentreprenör – klausul för klausul.", tag: "Avtal",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_AB_U_UNDERENTREPRENOR_AVTAL_HTML,
  seoTitle: "AB-U 07 & ABT-U 07 underentreprenör | ByggExp", seoDescription: "Så använder du AB-U 07 och ABT-U 07 för att spegla huvudavtalets villkor mot din UE: garantitid, viten, betalning, besiktning och hävning back-to-back.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T08:00:00.000Z", createdAt: "2026-08-20T08:00:00.000Z", updatedAt: "2026-08-20T08:00:00.000Z",
};

const A_NYA_AB_04_ABT_06_REVIDERING_2027_HTML = `
<p>Revideringen av AB 04 och ABT 06 pågår - men inget är beslutat. Om du söker efter status på den <strong>nya AB 04 ABT 06 revidering</strong> som Byggandets Kontraktskommitté (BKK) driver, är den korta versionen att nya standardavtal väntas tidigast under senare delen av 2027, och att den här texten är en lägesrapport, inte en regelbok. Fram tills nya avtal är formellt antagna gäller fortfarande AB 04 och ABT 06 fullt ut.</p>

<p>Behöver du hålla ordning på offerter, ÄTA och dokumentation redan idag - oavsett vilket standardavtal som gäller - hittar du praktiska verktyg i <a href="/sv/verktyg">vår gratis verktygslåda -&gt;</a>.</p>

<h2>Vad är AB 04 och ABT 06?</h2>
<p>AB 04 och ABT 06 är de två dominerande standardavtalen (Allmänna Bestämmelser) för svenska byggentreprenader. AB 04 reglerar utförandeentreprenader, där beställaren står för projekteringen och entreprenören utför arbetet. ABT 06 reglerar totalentreprenader, där entreprenören ansvarar för både projektering och utförande.</p>
<p>Namnen speglar årtalen de kom - 2004 respektive 2006. De ligger till grund för en mycket stor del av alla byggavtal i Sverige och åberopas rutinmässigt i allt från AF-delar till underentreprenörskontrakt. Att de nu ses över är knappast förvånande: mycket har hänt inom digitalisering, arbetsmiljö och hållbarhet sedan mitten av 2000-talet, och en modernisering har efterlysts länge. Vill du repetera grunderna har vi en separat genomgång av <a href="/sv/blog/ab-04-och-abt-06">skillnaderna mellan AB 04 och ABT 06</a>.</p>

<h2>Vad är på gång? AB 25 och ABPU 25</h2>
<p>BKK genomför en omfattande revidering av båda avtalen. Enligt förslaget ska AB 04 ersättas av <strong>AB 25</strong> (utförandeentreprenader) och ABT 06 av <strong>ABPU 25</strong> (projekterings- och utförandeentreprenader, alltså det vi idag kallar totalentreprenad).</p>
<p>Observera att detta är föreslagna arbetsnamn. Ingenting är ännu antaget, och både namn och innehåll kan komma att ändras innan avtalen publiceras. Det är BKK som äger och driver processen, och det är också BKK:s besked du bör följa - inte enskilda spekulationer i branschen.</p>

<h2>Tidslinje och nuvarande status</h2>
<p>Förslagen skickades ut på remiss den 15 oktober 2024, med remisstiden löpande till den 28 februari 2025. När remissen stängde hade BKK fått in ungefär 4 000 synpunkter från cirka 200 remissinstanser. Det materialet bearbetar BKK fortfarande.</p>
<p>Den nuvarande officiella uppskattningen är att de nya avtalen kommer tidigast under senare delen av 2027. Nästa formella besked väntas från BKK under hösten 2026. En viktig sak att notera: tidplanen har glidit flera gånger - tidigare talades det om sommaren 2025, sedan 2026, och nu 2027. Planera därför inte din verksamhet kring ett fast datum. Betrakta 2027 som en tidigast-uppskattning, inte ett löfte.</p>

<h2>Vad väntas ändras?</h2>
<p>Revideringen omarbetar avtalens grundstruktur och utökar flera områden. Formulera det för dig själv som "föreslås" och "förväntas" - inte "kommer att" - eftersom slutresultatet inte är fastställt. Bland de flaggade fokusområdena finns:</p>
<ul>
<li><strong>Större tydlighet och färre tvister</strong> - det uttalade övergripande målet är att minska antalet onödiga konflikter genom klarare regler.</li>
<li><strong>Digitalisering</strong> - anpassning till digitala arbetssätt och dokumentation.</li>
<li><strong>Miljö- och arbetsmiljöfrågor</strong> - utökad reglering av hållbarhet och säkerhet.</li>
<li><strong>Kvalitetsstyrning och löpande dokumentation</strong> - tydligare krav under projektets gång.</li>
<li><strong>Kalkylregler</strong> - översyn av reglerna för kalkyl och ersättning.</li>
<li><strong>Tvistelösning</strong> - moderniserade regler för hur oenigheter hanteras.</li>
<li><strong>Borttagna paragrafkommentarer</strong> - AB 25 väntas inte innehålla de paragrafvisa kommentarer som AB 04 har idag. Istället planerar BKK att publicera separata motiv och förarbeten utanför själva avtalstexten.</li>
</ul>
<p>Den sista punkten är värd att stanna vid. De kommentarer som många idag använder för att tolka enskilda paragrafer väntas alltså flyttas ut ur avtalet. Om det blir så, kommer tolkningen framöver att bygga på ett separat motivmaterial - något som byggföretag och deras jurister behöver vänja sig vid.</p>

<h2>Vad väntas inte förändras</h2>
<p>Det är lika viktigt att dämpa överdrivna förväntningar. BKK behåller det befintliga ramverket snarare än att uppfinna nya avtalstyper. Uppdelningen mellan utförandeentreprenad (AB) och totalentreprenad (ABT/ABPU) finns kvar. Det skapas inte heller något separat, dedikerat standardavtal för partnering eller samverkan. Den som hoppats på en helt ny avtalsstruktur för samverkansentreprenader lär bli besviken - grundlogiken består.</p>

<h2>Vad bör byggföretag göra nu?</h2>
<p>Även om avtalen dröjer finns det konkreta saker att göra i god tid:</p>
<ol>
<li><strong>Fortsätt använda AB 04 och ABT 06.</strong> De är fortfarande de gällande standardavtalen. Skriv dina kontrakt på dem som vanligt.</li>
<li><strong>Följ BKK:s besked.</strong> Håll koll på nästa uppdatering hösten 2026 istället för att agera på rykten.</li>
<li><strong>Planera intern kompetensutveckling.</strong> När nya avtal väl kommer behöver projektledare, kalkylatorer och inköp uppdatera sina kunskaper. Lägg in det i utbildningsplanen tidigt.</li>
<li><strong>Se över mallar och rutiner.</strong> Gå igenom offertmallar, AF-delar och rutiner för dokumentation och digitalisering, så att övergången blir mindre av en chock.</li>
<li><strong>Budgetera för följdändringar.</strong> När avtalen publiceras väntas Svensk Byggtjänst revidera AMA AF, som är knuten till standardavtalen. Även dina underlagsdokument kommer alltså att påverkas.</li>
<li><strong>Skriv inte in "framtida AB 25" i dagens kontrakt.</strong> Att åberopa ett avtal som inte finns skapar bara osäkerhet. Håll dig till gällande versioner.</li>
</ol>
<p>Ett bra ställe att börja är att strama upp dina egna underlag redan nu. Testa till exempel <a href="/sv/verktyg/offert-mall">vår offertmall -&gt;</a> för att få struktur på det som gäller oavsett vilket standardavtal som ligger i botten.</p>

<h2>Vanliga missförstånd</h2>
<p>Ett par felaktiga föreställningar är värda att rätta. Det första är tron att AB 25 eller ABPU 25 redan gäller - det gör de inte, och de kan tidigast komma senare delen av 2027. Det andra är att förväxla ABPU 25 med dagens ABT 06; ABPU 25 är det föreslagna namnet på efterföljaren, inget separat parallellt avtal. Det tredje är att låsa sin planering vid ett bestämt lanseringsdatum, trots att tidplanen redan glidit från 2025 till 2026 till 2027.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp löser inte entreprenadjuridiken åt dig - och lovar inte heller att göra det. Men mycket av det revideringen vill komma åt handlar om struktur, dokumentation och digitalisering, och där gör verktyget skillnad redan idag. Du kan skapa offerter och kontraktsunderlag från mallar, dokumentera ÄTA-arbeten löpande och samla projektunderlag på ett ställe. Oavsett om ditt projekt vilar på AB 04, ABT 06 eller framtidens AB 25 är ordning och reda på papperen samma vinst - och en förutsättning för att slippa onödiga tvister, precis det revideringen säger sig vilja minska. Läs gärna mer om hur du hanterar <a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a> i praktiken.</p>

<h2>Vanliga frågor</h2>
<h3>När kommer AB 25?</h3>
<p>Den nuvarande uppskattningen från BKK är tidigast under senare delen av 2027. Något exakt datum är inte bekräftat, och tidplanen har skjutits fram flera gånger. Nästa besked väntas hösten 2026.</p>
<h3>Ersätter AB 25 AB 04?</h3>
<p>Enligt förslaget ska AB 25 ersätta AB 04 för utförandeentreprenader. Namnet är dock ett arbetsnamn och inget är formellt antaget ännu.</p>
<h3>Gäller AB 04 fortfarande?</h3>
<p>Ja. AB 04 och ABT 06 är fortfarande de gällande standardavtalen och bör användas i dagens kontrakt tills nya avtal är antagna och publicerade.</p>
<h3>Vad är ABPU 25?</h3>
<p>ABPU 25 är det föreslagna namnet på efterföljaren till ABT 06, det vill säga standardavtalet för projekterings- och utförandeentreprenader (totalentreprenader). Även detta är ett förslag som inte är beslutat.</p>

<h2>Kom igång</h2>
<p>Revideringen är en process att följa, inte att agera på ännu. Under tiden kan du stärka den struktur och dokumentation som lönar sig oavsett avtal - börja med <a href="/sv/verktyg">våra gratis verktyg</a> eller <a href="/sv/contact">boka en demo</a> så visar vi hur ByggExp håller ordning på offerter, ÄTA och underlag i dina projekt.</p>

<p>Relaterat: <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06 - skillnaderna</a>, <a href="/sv/blog/ata-arbeten">Så hanterar du ÄTA-arbeten</a>, <a href="/sv/blog/garantitid-ansvarstid-ab-04">Garantitid och ansvarstid i AB 04</a>.</p>
`;

const A_NYA_AB_04_ABT_06_REVIDERING_2027: BlogPost = {
  _id: "code-"+"nya-ab-04-abt-06-revidering-2027",
  title: "Nya AB 04 och ABT 06: status för revideringen mot AB 25 och ABPU 25", slug: "nya-ab-04-abt-06-revidering-2027", locale: "sv",
  excerpt: "En statusuppdatering om BKK:s revidering av AB 04 och ABT 06 - vad som föreslås ändras, den osäkra tidslinjen och vad ditt byggföretag bör göra i väntan på nya standardavtal.", tag: "Entreprenadjuridik",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_NYA_AB_04_ABT_06_REVIDERING_2027_HTML,
  seoTitle: "Nya AB 04 ABT 06 revidering | ByggExp", seoDescription: "Lägesrapport om revideringen av AB 04 och ABT 06 mot AB 25 och ABPU 25 - vad som föreslås ändras, tidslinjen och vad byggföretag bör förbereda nu.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T09:15:00.000Z", createdAt: "2026-08-20T09:15:00.000Z", updatedAt: "2026-08-20T09:15:00.000Z",
};

export const JURIDIK_ARTICLES: BlogPost[] = [
  ATA,
  AB04,
  SLUTBESIKTNING,
  MUNTLIGT,
  GARANTI,
  ABS18,
  A_REKLAMATION_HANTVERKSTJANST_FRISTER,
  A_OVERLAMNING_RELATIONSHANDLINGAR,
  A_ENTREPRENADKONTRAKT_MALL,
  A_UPPSAGNING_ARBETSBRIST_BYGG,
  A_HAVNING_AV_ENTREPRENAD,
  A_FORSENINGSVITE_ENTREPRENAD,
  A_HINDERSANMALAN_TIDSFORLANGNING_AB04,
  A_REKLAMATION_BEMOTA_FELKRAV_ENTREPRENAD,
  A_SAGA_UPP_ANSTALLD_PERSONLIGA_SKAL_BYGG,
  A_OB_OVERTID_BYGGAVTALET_RAKNA,
  A_KONSUMENTTJANSTLAGEN_HANTVERKARE_15_PROCENT,
  A_ENTREPRENADTVIST_UNDVIKA_DOKUMENTATION,
  A_INDEXREGLERING_ENTREPRENAD_KOSTNADSOKNING,
  A_BESIKTNINGSANMARKNING_ATGARDA_BEMOTA,
  A_RETENTIONSRATT_HANTVERKARE_INNEHALLA_ARBETE,
  A_RESTLISTA_OVERLAMNING_BYGG_MALL,
  A_GARANTIBESIKTNING_2_AR_ENTREPRENAD,
  A_SEMESTERLON_SEMESTERERSATTNING_BYGGAVTALET,
  A_TJANSTEPENSION_BYGGAVTALET_BAO,
  A_EFTERBESIKTNING_VEM_BETALAR_ENTREPRENAD,
  A_FARDIGSTALLANDESKYDD_SMAHUS,
  A_OVERBESIKTNING_ENTREPRENAD,
  A_AB_U_UNDERENTREPRENOR_AVTAL,
  A_NYA_AB_04_ABT_06_REVIDERING_2027,
];
