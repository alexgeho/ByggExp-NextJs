import type { BlogLocale, BlogPost } from '../types/blog';

// Real, indexable SEO articles served from code (not the CMS). Used for
// Swedish-market articles we publish without the CMS. Unlike blog-mock.ts
// (noIndex demo content shown only when the CMS is empty), these are always
// live, indexable, listed in /blog and included in the sitemap.
//
// Currently Swedish-only. getCodeArticles(locale) returns [] for en/ru so no
// hreflang-to-404 is created (byggdagbok is also in SV_ONLY_ARTICLE_SLUGS).

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';

const BYGGDAGBOK_HTML = `
<p>En byggdagbok är ett av de enklaste sätten att skydda sig när något går snett i ett projekt. Ändå förs den ofta på lösa lappar eller inte alls. Här går vi igenom vad en byggdagbok är, vad den ska innehålla, vad AB 04 säger – och hur du för den på några minuter om dagen.</p>

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

<p><a href="/sv/verktyg/egenkontroll-mall">Ladda ner en gratis egenkontroll-mall (PDF) →</a></p>

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

const ATA_HTML = `
<p>ÄTA-arbeten är där byggföretag tappar mest pengar helt i onödan. Jobbet blir gjort – men utan rätt papper och rätt underrättelse i tid uteblir betalningen. Här går vi igenom vad ÄTA är, skillnaden mellan föreskriven och likställd ÄTA, vad AB 04 kräver för att du ska få betalt, och hur du dokumenterar det rätt.</p>

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

const PERSONALLIGGARE_HTML = `
<p>Personalliggare är ett lagkrav i byggbranschen – och att sköta den slarvigt kan bli dyrt. Ett oanmält besök från Skatteverket där personer saknas i liggaren kostar direkt i kontrollavgift. Här går vi igenom vem som måste ha personalliggare, vad som ska registreras, vad ett misstag kostar och hur du sköter den digitalt utan krångel.</p>

<h2>Vad är en personalliggare?</h2>
<p>En personalliggare är en förteckning över vilka som är och har varit verksamma på arbetsplatsen, och när. I byggbranschen ska den vara <strong>elektronisk</strong> och kunna visas för Skatteverket vid ett besök. Syftet är att motverka svartarbete – liggaren visar vem som faktiskt var på plats en viss dag och tid.</p>

<h2>Vem måste ha personalliggare?</h2>
<p>Kravet gäller flera branscher (bygg, fordonsservice, skönhet/kroppsvård, restaurang, livsmedels- och tobaksgrossist samt tvätteri). I <strong>byggbranschen</strong> krävs elektronisk personalliggare när byggverksamheten bedrivs yrkesmässigt och den totala kostnaden på byggarbetsplatsen kan antas <strong>överstiga fyra prisbasbelopp</strong>. För 2026 är prisbasbeloppet 59 200 kr, vilket ger en gräns på <strong>236 800 kr</strong>.</p>

<h2>Undantag</h2>
<ul>
<li>Bygge där den totala byggkostnaden på arbetsplatsen inte förväntas överstiga fyra prisbasbelopp.</li>
<li>När byggherren är en privatperson som inte bedriver bygg-, rivnings- eller markarbete yrkesmässigt.</li>
</ul>

<h2>Vem ansvarar – byggherre eller entreprenör?</h2>
<p><strong>Byggherren</strong> ansvarar för att anmäla till Skatteverket när och var byggarbetet påbörjas, att tillhandahålla utrustning så att en elektronisk personalliggare kan föras, och för att en samlad liggare finns på arbetsplatsen. <strong>Varje entreprenör</strong> ansvarar i sin tur för att föra och hålla sin del av liggaren tillgänglig – sina egna och sin inhyrda personal. Byggherren kan överlåta hela ansvaret till en självständig uppdragstagare, till exempel huvudentreprenören.</p>

<h2>Måste man ha ID06?</h2>
<p>Nej. Det finns inget lagkrav på att använda just ID06-kort. Kravet är att personalliggaren är elektronisk och visar vem som är och har varit på plats. ID06 är en vanlig teknisk lösning för att uppfylla kravet, men du kan använda andra system som gör samma sak.</p>

<h2>Vad ska registreras?</h2>
<ul>
<li>Identitetsuppgifter för var och en som är verksam på arbetsplatsen (namn och personnummer/samordningsnummer)</li>
<li>När varje person påbörjar och avslutar ett arbetspass</li>
<li>Uppgifterna ska registreras löpande och kunna visas för Skatteverket direkt vid ett besök</li>
</ul>

<h2>Vad kostar det att missa personalliggaren?</h2>
<p>Skatteverket får göra oannonserade kontrollbesök och ta ut <strong>kontrollavgift</strong>:</p>
<ul>
<li><strong>12 500 kr</strong> om personalliggare saknas eller inte kan visas.</li>
<li><strong>+ 2 500 kr</strong> för varje person som är verksam men inte är antecknad i liggaren.</li>
<li><strong>25 000 kr</strong> om byggherren inte har anmält byggstart och plats till Skatteverket.</li>
</ul>
<p>Avgifterna kan tas ut vid upprepade besök – slarv blir snabbt dyrt.</p>

<h2>Personalliggare och byggdagbok – inte samma sak</h2>
<p>Personalliggaren visar <em>vem</em> som var på plats (närvaro), medan <a href="/sv/blog/byggdagbok">byggdagboken</a> dokumenterar <em>vad</em> som gjordes (arbete, väder, avvikelser, ÄTA). Du behöver oftast båda – de fyller olika syften och ersätter inte varandra.</p>

<h2>Så sköter du personalliggare digitalt i ByggExp</h2>
<p>I ByggExp checkar medarbetarna in och ut på plats, kopplat till rätt projekt, så att närvaron registreras löpande och alltid kan visas upp. Du ser i realtid vilka som är på arbetsplatsen, slipper papperslistor och har underlaget redo om Skatteverket dyker upp. Eftersom närvaro, tid, dagbok och ekonomi ligger i samma app hänger allt ihop – <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">läs mer om närvaro och incheckning</a>.</p>

<h2>Vanliga frågor</h2>
<h3>När krävs personalliggare på ett bygge?</h3>
<p>När byggverksamheten bedrivs yrkesmässigt och den totala byggkostnaden på arbetsplatsen kan antas överstiga fyra prisbasbelopp (236 800 kr för 2026).</p>
<h3>Vem ansvarar för personalliggaren?</h3>
<p>Byggherren ansvarar för anmälan, utrustning och en samlad liggare, medan varje entreprenör för sin egen del. Byggherren kan överlåta ansvaret till huvudentreprenören.</p>
<h3>Måste jag använda ID06?</h3>
<p>Nej. Kravet är en elektronisk personalliggare som visar närvaro – ID06 är en vanlig lösning men inte ett lagkrav.</p>
<h3>Vad blir kontrollavgiften om liggaren saknas?</h3>
<p>12 500 kr, plus 2 500 kr för varje person som är verksam men inte antecknad. Saknas anmälan om byggstart är avgiften 25 000 kr.</p>

<h2>Kom igång</h2>
<p>Slipp papperslistor och kontrollavgifter. Registrera närvaron digitalt, kopplad till projektet, och ha allt redo för Skatteverket. <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">Se hur närvaro fungerar i ByggExp</a> eller <a href="/sv/contact">boka en demo</a>.</p>
`.trim();

const PERSONALLIGGARE: BlogPost = {
  _id: 'code-personalliggare',
  title: 'Personalliggare i byggbranschen – krav, ansvar och avgifter',
  slug: 'personalliggare',
  locale: 'sv',
  excerpt:
    'Vem måste ha personalliggare, vad ska registreras, vad kostar en kontrollavgift och behövs ID06? Allt om personalliggare i byggbranschen 2026 – och hur du sköter den digitalt.',
  tag: 'Personalliggare',
  coverImageUrl: '/landing/features/3personal.webp',
  contentHtml: PERSONALLIGGARE_HTML,
  seoTitle: 'Personalliggare bygg – krav, ansvar & avgifter 2026 | ByggExp',
  seoDescription:
    'Personalliggare i byggbranschen: vem måste ha den, beloppsgränsen (4 prisbasbelopp), ansvar byggherre/entreprenör, ID06 och kontrollavgift. Guide för 2026.',
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T12:00:00.000Z',
  createdAt: '2026-08-12T12:00:00.000Z',
  updatedAt: '2026-08-12T12:00:00.000Z',
};

const ROT_HTML = `
<p>ROT-avdraget är ett av de starkaste säljargumenten ett byggföretag har – kunden betalar mindre, du får jobbet. Men reglerna ändrades vid årsskiftet, och det är lätt att räkna fel. Här är vad som gäller för ROT-avdrag 2026, hur du räknar ut det och hur du fakturerar rätt.</p>

<p><a href="/sv/verktyg/rot-avdrag-kalkylator">Räkna ut ROT-avdraget direkt i vår gratis kalkylator →</a></p>

<h2>Vad är ROT-avdrag?</h2>
<p>ROT-avdrag är en skattereduktion för privatpersoner som anlitar hjälp för <strong>reparation, underhåll, om- och tillbyggnad</strong> av sin bostad. Avdraget gäller bara <strong>arbetskostnaden</strong> – inte material, resor eller maskiner. I praktiken drar företaget av ROT direkt på fakturan och begär sedan resten från Skatteverket.</p>

<h2>ROT-avdrag 2026 – procent och tak</h2>
<ul>
<li><strong>30 % av arbetskostnaden.</strong> Den tillfälliga höjningen till 50 % förlängdes inte – från 1 januari 2026 gäller åter 30 %.</li>
<li><strong>Max 50 000 kr per person och år.</strong> Äger två personer bostaden kan de dela på avdraget.</li>
<li><strong>Gemensamt tak med RUT: 75 000 kr per person och år</strong>, varav högst 50 000 kr får vara ROT.</li>
</ul>

<h2>Vem har rätt till ROT-avdrag?</h2>
<p>Den som söker avdraget ska <strong>äga och bo i</strong> bostaden och ha betalat tillräckligt med skatt att räkna av mot. Avdraget gäller inte nybyggnation – ett nybyggt småhus medges ROT först efter fem år. Det är kundens avdrag, men det är du som utförare som administrerar det på fakturan.</p>

<h2>Exempel: så räknas ROT ut</h2>
<ul>
<li><strong>Arbetskostnad:</strong> 40 000 kr</li>
<li><strong>ROT-avdrag (30 %):</strong> 12 000 kr</li>
<li><strong>Kunden betalar:</strong> arbetskostnad 28 000 kr + material</li>
<li><strong>Du begär</strong> resterande 12 000 kr från Skatteverket</li>
</ul>
<p>Vill du testa dina egna siffror? <a href="/sv/verktyg/rot-avdrag-kalkylator">Använd ROT-kalkylatorn</a> – den visar avdrag och vad kunden betalar direkt.</p>

<h2>Så fakturerar du med ROT</h2>
<ol>
<li>Dela upp fakturan i arbetskostnad och material – ROT gäller bara arbetet.</li>
<li>Dra av 30 % av arbetskostnaden (upp till kundens tak) direkt på fakturan.</li>
<li>Kunden betalar resten; du begär ROT-beloppet från Skatteverket.</li>
<li>Ange kundens personnummer och fastighets-/lägenhetsuppgifter i begäran.</li>
</ol>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Räkna ROT på hela fakturan.</strong> Endast arbetskostnaden ger avdrag – inte material.</li>
<li><strong>Glömma kundens tak.</strong> Har kunden redan använt ROT i år kan utrymmet vara slut.</li>
<li><strong>Blanda ihop ROT och RUT.</strong> De delar tak men gäller olika arbeten.</li>
<li><strong>Otydlig faktura.</strong> Separera arbete och material tydligt så avdraget håller.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Hur mycket är ROT-avdrag 2026?</h3>
<p>30 % av arbetskostnaden, max 50 000 kr per person och år. ROT och RUT delar ett gemensamt tak på 75 000 kr, varav högst 50 000 kr får vara ROT.</p>
<h3>Vad gäller ROT-avdraget för?</h3>
<p>Reparation, underhåll, om- och tillbyggnad av bostad du äger och bor i. Endast arbetskostnaden – inte material, resor eller maskiner.</p>
<h3>Gäller ROT vid nybyggnation?</h3>
<p>Nej. ROT gäller inte nybyggnad; för ett nybyggt småhus medges avdrag först efter fem år.</p>

<h2>Kom igång</h2>
<p>Räkna rätt varje gång och visa kunden vad de sparar. <a href="/sv/verktyg/rot-avdrag-kalkylator">Testa ROT-kalkylatorn</a>, skapa offert och faktura med ROT i ByggExp eller <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/verktyg/offert-mall">Offert-mall</a> · <a href="/sv/verktyg/faktura-mall">Faktura-mall</a> · <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylator</a></p>
`.trim();

const ROT: BlogPost = {
  _id: 'code-rot-avdrag',
  title: 'ROT-avdrag 2026 – regler, belopp och hur du räknar rätt',
  slug: 'rot-avdrag',
  locale: 'sv',
  excerpt:
    'ROT-avdrag 2026: 30 % av arbetskostnaden, max 50 000 kr och gemensamt tak med RUT. Så räknar du ut det, vem som har rätt och hur du fakturerar rätt – med gratis kalkylator.',
  tag: 'ROT-avdrag',
  coverImageUrl: '/landing/features/8fakturor.webp',
  contentHtml: ROT_HTML,
  seoTitle: 'ROT-avdrag 2026 – regler, belopp & kalkylator | ByggExp',
  seoDescription:
    'ROT-avdrag 2026: 30 % av arbetskostnaden, max 50 000 kr, gemensamt tak 75 000 kr med RUT. Räkna ut ROT, se vem som har rätt och hur du fakturerar – gratis kalkylator.',
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T13:00:00.000Z',
  createdAt: '2026-08-12T13:00:00.000Z',
  updatedAt: '2026-08-12T13:00:00.000Z',
};

const ID06_HTML = `
<p>Nästan alla på ett bygge har ett ID06-kort i fickan – men få vet exakt vad det är, vad det krävs för och om det ens är ett lagkrav. Här reder vi ut vad ID06 är, vad det används till och hur det hänger ihop med personalliggaren.</p>

<h2>Vad är ID06?</h2>
<p>ID06 är byggbranschens system för <strong>identifikation, närvaroregistrering och kompetens</strong>. Kortet knyter en person till rätt identitet och används bland annat för att registrera vem som är på arbetsplatsen och för att samla individens utbildningar och intyg i ID06 Kompetensdatabas. Syftet är en säkrare arbetsplats och sundare konkurrens – att alla som vistas på bygget är behöriga och identitetskontrollerade.</p>

<h2>Vad används ID06 till?</h2>
<ul>
<li><strong>Identitetskontroll</strong> – säkerställer vem personen är.</li>
<li><strong>Elektronisk personalliggare</strong> – registrerar närvaro (in- och utcheckning).</li>
<li><strong>Access</strong> – styr in- och utpassering, ofta via kortläsare eller vändkors.</li>
<li><strong>Kompetens</strong> – utbildningar och certifikat registreras på individen i ID06 Kompetensdatabas.</li>
</ul>

<h2>Är ID06 ett lagkrav?</h2>
<p>Nej – inte i sig. Sedan den 1 januari 2016 är <strong>elektronisk personalliggare</strong> obligatorisk på de flesta byggarbetsplatser (där byggherren inte är en privatperson). Lagen kräver att liggaren är elektronisk och visar vem som är och har varit på plats – men den kräver inte specifikt ID06. ID06 är den vanligaste tekniska lösningen för att uppfylla kravet, och många beställare ställer krav på ID06 i sina avtal. Läs mer om <a href="/sv/blog/personalliggare">personalliggare och reglerna</a>.</p>

<h2>ID06 och kompetensdatabasen</h2>
<p>I ID06 Kompetensdatabas registreras utbildningar och intyg – som heta arbeten, arbete på väg eller säkerhetsutbildningar – kopplat till individen. Det gör att arbetsledaren snabbt kan verifiera att rätt person har rätt behörighet, och att intygen finns samlade på ett ställe i stället för i pärmar.</p>

<h2>Så funkar det i praktiken</h2>
<ol>
<li>Medarbetaren har ett giltigt ID06-kort kopplat till sin identitet.</li>
<li>Vid in- och utcheckning registreras närvaron i personalliggaren.</li>
<li>Behörigheter och utbildningar finns tillgängliga via kompetensdatabasen.</li>
<li>Byggherren/entreprenören kan visa en samlad, aktuell liggare för Skatteverket.</li>
</ol>

<h2>Vanliga frågor</h2>
<h3>Är ID06 obligatoriskt?</h3>
<p>ID06 i sig är inte lagstadgat, men elektronisk personalliggare är obligatorisk på de flesta byggarbetsplatser sedan 2016. Många beställare kräver dessutom ID06 i avtal.</p>
<h3>Vad är skillnaden mellan ID06 och personalliggare?</h3>
<p>Personalliggaren är själva närvaroregistret (lagkravet). ID06 är ett system som bland annat sköter identitet och närvaro och ofta används för att föra liggaren.</p>
<h3>Vad är ID06 Kompetensdatabas?</h3>
<p>En databas där individens utbildningar och intyg registreras, så att behörigheter enkelt kan verifieras på arbetsplatsen.</p>

<h2>Kom igång</h2>
<p>Oavsett kortlösning behöver du en elektronisk närvaroregistrering som håller. I ByggExp checkar laget in och ut kopplat till projektet – du ser vilka som är på plats och har liggaren redo. <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">Se hur närvaro fungerar</a> eller <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/personalliggare">Guide: personalliggare</a> · <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">Närvaro och incheckning</a></p>
`.trim();

const ID06: BlogPost = {
  _id: 'code-id06',
  title: 'ID06 – vad det är, vad det krävs för och lagkraven',
  slug: 'id06',
  locale: 'sv',
  excerpt:
    'Vad är ID06, vad används kortet till och är det ett lagkrav? Så hänger ID06 ihop med elektronisk personalliggare, kompetensdatabasen och närvaro på bygget.',
  tag: 'ID06',
  coverImageUrl: '/landing/features/3personal.webp',
  contentHtml: ID06_HTML,
  seoTitle: 'ID06 – vad det är, krav och personalliggare | ByggExp',
  seoDescription:
    'Vad är ID06 och är det ett lagkrav? Så används ID06 för identitet, elektronisk personalliggare, access och kompetens i byggbranschen – och skillnaden mot personalliggaren.',
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T13:30:00.000Z',
  createdAt: '2026-08-12T13:30:00.000Z',
  updatedAt: '2026-08-12T13:30:00.000Z',
};

const BEMANNING_HTML = `
<p>Rätt person, på rätt plats, vid rätt tid – låter enkelt, men bemanning är ofta det som gör eller stjälper marginalen i ett byggföretag. En sjukanmälan på fel dag eller en dubbelbokad snickare kan välta hela veckans plan. Här går vi igenom hur du planerar bemanningen så att projekten flyter.</p>

<h2>Vad är bemanning och personalplanering i bygg?</h2>
<p>Bemanning handlar om att fördela rätt personal och kompetens över projekt och dagar. Personalplanering är den löpande pusslet: vem jobbar var, vilka pass gäller, vem är ledig eller sjuk, och räcker kompetensen för det som ska göras. Målet är hög beläggning utan att någon blir överbelastad – och utan luckor som kostar tid.</p>

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

<p>Relaterat: <a href="/sv/blog/dagsplanering-och-planeringsmoten">Dagsplanering och planeringsmöten</a> · <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">Närvaro och incheckning</a></p>
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

const AB04_HTML = `
<p>AB 04 och ABT 06 är de standardavtal som styr de flesta byggprojekt i Sverige. Väljer du fel – eller missar hur ansvaret fördelas – kan det bli dyrt. Här är skillnaden mellan avtalen, vad de reglerar och det du behöver ha koll på om ÄTA, dagbok, garantitid och besiktning.</p>

<h2>Vad är AB 04 och ABT 06?</h2>
<p>Det är <strong>allmänna bestämmelser</strong> – färdiga avtalsvillkor framtagna av bygg- och installationsbranschen – som parterna hänvisar till i entreprenadkontraktet. De reglerar rättigheter och skyldigheter mellan beställare och entreprenör: pris, tid, ändringar (ÄTA), ansvar, besiktning och garantier.</p>

<h2>Skillnaden mellan AB 04 och ABT 06</h2>
<p>Den avgörande skillnaden är <strong>vem som ansvarar för projekteringen</strong>:</p>
<ul>
<li><strong>AB 04 – utförandeentreprenad.</strong> Beställaren projekterar och tar fram handlingarna; entreprenören utför enligt dem.</li>
<li><strong>ABT 06 – totalentreprenad.</strong> Entreprenören ansvarar för både projektering och utförande. Beställaren sätter funktionskrav och entreprenören levererar en färdig lösning som uppfyller dem.</li>
</ul>
<p>Kort sagt: med AB 04 följer entreprenören beställarens ritningar, med ABT 06 tar entreprenören helhetsansvaret.</p>

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

<h2>Kom igång</h2>
<p>Håll koll på kontrakt, ÄTA, dagbok och ekonomi på ett ställe. <a href="/sv/blog/ata-arbeten">Läs om ÄTA</a>, skapa offert och faktura i ByggExp eller <a href="/sv/contact">boka en demo</a>.</p>

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

const AMP_HTML = `
<p>En arbetsmiljöplan (AMP) är inte bara en pärm som ska finnas – den är ofta ett lagkrav, och saknas den när Arbetsmiljöverket kommer på besök kan det bli sanktionsavgift. Här är när en AMP krävs, vad den ska innehålla och vem som ansvarar (byggherre, BAS-P och BAS-U).</p>

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

const ATTESTERING_HTML = `
<p>Attestering låter byråkratiskt, men det är i praktiken din kontroll över vad företaget betalar och betalar ut. Utan ett tydligt attestflöde smyger sig fel fakturor och felaktiga timmar igenom – rakt in i resultatet. Här är hur du sätter upp attestering för fakturor och tid i ett byggföretag.</p>

<h2>Vad är attestering?</h2>
<p>Attestering är att någon behörig <strong>godkänner</strong> en kostnad eller ett underlag innan det betalas eller förs vidare – till exempel en leverantörsfaktura innan betalning, eller rapporterade timmar innan de blir löneunderlag. Attesten är beviset på att någon kontrollerat att uppgiften stämmer och hör till rätt projekt.</p>

<h2>Vad attesteras i ett byggföretag?</h2>
<ul>
<li><strong>Leverantörsfakturor</strong> – stämmer beloppet, är varan levererad, rätt projekt?</li>
<li><strong>Rapporterad tid</strong> – innan den blir <a href="/sv/blog/loneunderlag-for-byggforetag">löneunderlag</a>.</li>
<li><strong>Utlägg och kvitton</strong> – rätt kostnad, rätt projekt.</li>
<li><strong>ÄTA och tilläggsarbeten</strong> – godkända innan de faktureras vidare.</li>
</ul>

<h2>Så sätter du upp ett attestflöde</h2>
<ol>
<li>Bestäm <strong>attestordning</strong> – vem får godkänna vad och upp till vilka belopp.</li>
<li>Koppla varje faktura och tidpost till <strong>rätt projekt</strong> så kostnaden hamnar rätt.</li>
<li>Låt rätt person granska och attestera – gärna enligt tvåhandsprincipen för större belopp.</li>
<li>Betala/för vidare först efter attest – och spara vem som godkände och när.</li>
</ol>

<h2>Varför det är värt besväret</h2>
<p>Ett tydligt attestflöde ger <strong>kostnadskontroll per projekt</strong>, mindre risk för fel och dubbelbetalningar, och ett spårbart underlag om något ifrågasätts. Framför allt ser du marginalen i realtid i stället för först vid bokslutet – se <a href="/sv/blog/projektekonomi-och-lonsamhet">projektekonomi och lönsamhet</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Ingen tydlig attestordning.</strong> Otydligt vem som får godkänna vad leder till flaskhalsar eller slarv.</li>
<li><strong>Fakturor utan projekt.</strong> Kostnader som inte kopplas till projekt gör lönsamheten omöjlig att följa.</li>
<li><strong>Attestera på autopilot.</strong> Poängen är kontrollen – granska innan du godkänner.</li>
<li><strong>Papper och mejl.</strong> Spårbarheten försvinner; håll attesten digitalt och kopplad till underlaget.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Vad betyder att attestera en faktura?</h3>
<p>Att en behörig person godkänner att fakturan är korrekt och hör till rätt projekt innan den betalas.</p>
<h3>Vad är en attestordning?</h3>
<p>En regel för vem som får godkänna vilka kostnader och upp till vilka belopp – grunden i ett attestflöde.</p>
<h3>Varför koppla attest till projekt?</h3>
<p>För att få kostnadskontroll och kunna följa lönsamheten per projekt i realtid.</p>

<h2>Kom igång</h2>
<p>Få kontroll på vad som betalas – och se marginalen medan projektet pågår. <a href="/sv/blog/projektekonomi-och-lonsamhet">Läs om projektekonomi</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/projektekonomi-och-lonsamhet">Projektekonomi och lönsamhet</a> · <a href="/sv/blog/fota-kvitton-och-hantera-utlagg">Fota kvitton och hantera utlägg</a> · <a href="/sv/blog/loneunderlag-for-byggforetag">Löneunderlag</a></p>
`.trim();

const ATTESTERING: BlogPost = {
  _id: 'code-attestering',
  title: 'Attestering i byggföretag – attestflöde för fakturor och tid',
  slug: 'attestering',
  locale: 'sv',
  excerpt:
    'Vad attestering är och hur du sätter upp ett attestflöde för leverantörsfakturor, tid och utlägg – med attestordning, projektkoppling och kostnadskontroll.',
  tag: 'Ekonomi',
  coverImageUrl: '/landing/features/11costs.webp',
  contentHtml: ATTESTERING_HTML,
  seoTitle: 'Attestering i byggföretag – attestflöde & kontroll | ByggExp',
  seoDescription:
    'Så sätter du upp attestering för leverantörsfakturor och tid i ett byggföretag: attestordning, projektkoppling, tvåhandsprincip och kostnadskontroll per projekt.',
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T16:00:00.000Z',
  createdAt: '2026-08-12T16:00:00.000Z',
  updatedAt: '2026-08-12T16:00:00.000Z',
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

<p>Relaterat: <a href="/sv/blog/bemanning-och-personalplanering">Bemanning och personalplanering</a> · <a href="/sv/blog/loneunderlag-for-byggforetag">Löneunderlag</a></p>
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

const HETA_ARBETEN_HTML = `
<p>Heta arbeten är en av de vanligaste orsakerna till bränder på arbetsplatser – och ett moment där försäkringsbolagen ställer hårda krav. Saknas rätt certifikat eller brandvakt kan försäkringen sättas ur spel. Här är vad heta arbeten är, vilka roller som krävs och vad som gäller kring certifikat och tillstånd.</p>

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
<p>Håll koll på behörigheter, tillstånd och arbetsmiljö på ett ställe. <a href="/sv/blog/arbetsmiljoplan">Läs om arbetsmiljöplan</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

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

const SLUTBESIKTNING_HTML = `
<p>Slutbesiktningen är målsnöret i ett byggprojekt – det är här entreprenaden godkänns, ansvaret går över och garantitiden börjar ticka. Går den fel kan betalning hållas inne och tvister uppstå. Här är hur en slutbesiktning enligt AB 04 går till och vad du behöver ha ordning på.</p>

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

const TIMPRIS_HTML = `
<p>&quot;Vad ska jag ta betalt i timmen?&quot; är en av de vanligaste – och dyraste – frågorna en hantverkare kan svara fel på. Sätter du priset för lågt jobbar du gratis åt kunden; sätter du det för högt utan att kunna motivera det tappar du jobb. Här går vi igenom marknadsläget 2026, hur du räknar fram <em>ditt</em> timpris utifrån dina egna kostnader, och varför debiteringsgraden ofta är det som avgör om det går ihop.</p>

<p><a href="/sv/verktyg/timpris-kalkylator">Räkna ut ditt timpris direkt i vår gratis timpris-kalkylator →</a></p>

<h2>Marknadspriser för hantverkare 2026</h2>
<p>Timpriset varierar kraftigt mellan yrkesgrupper, erfarenhet och region. Som riktvärden ligger marknaden 2026 ungefär så här, <strong>inklusive moms och före ROT-avdrag</strong>:</p>
<ul>
<li><strong>Snickare:</strong> ca 450–850 kr/timme</li>
<li><strong>Målare:</strong> ca 400–650 kr/timme</li>
<li><strong>Elektriker:</strong> ca 550–1 100 kr/timme</li>
<li><strong>Rörmokare (VVS):</strong> ca 550–1 100 kr/timme</li>
<li><strong>Plattsättare:</strong> ca 500–800 kr/timme</li>
</ul>
<p>I Stockholm och övriga storstäder ligger priserna ofta 15–25 % över riksgenomsnittet. Men marknadspriset säger bara vad andra tar – inte vad <em>du</em> behöver ta för att gå med vinst.</p>

<h2>Marknadspris ≠ ditt timpris</h2>
<p>Det vanligaste misstaget är att sätta timpriset efter vad grannfirman tar. Problemet är att du inte känner deras kostnader, deras debiteringsgrad eller deras marginal. Ett timpris som fungerar för en enmansfirma med billig verkstad kan gå back för dig med anställda, bil och lokal. Räkna alltid nerifrån och upp – från dina egna kostnader.</p>

<h2>Så räknar du fram ditt timpris</h2>
<p>Grunden är enkel: alla dina kostnader ska täckas av de timmar du faktiskt kan fakturera, plus en vinst. Formeln ser ut så här:</p>
<p><strong>Timpris (exkl. moms) = (arbetsgivarkostnad + omkostnader) ÷ debiterbara timmar × (1 + vinstpåslag)</strong></p>
<p>De fyra delarna:</p>
<ul>
<li><strong>Arbetsgivarkostnad</strong> – inte bara lönen. Lägg på arbetsgivaravgifter (ca 31,42 %), semester, pension och försäkringar. En bruttolön på 35 000 kr/mån kostar dig ofta runt 52 000 kr/mån.</li>
<li><strong>Omkostnader</strong> – bil och drivmedel, verktyg och maskiner, försäkringar, telefon, admin, bokföring, eventuell lokal och marknadsföring. Slå ut dem per debiterbar timme.</li>
<li><strong>Debiterbara timmar</strong> – nyckeltalet de flesta missar. Av en 8-timmars dag blir sällan mer än 5–6 timmar fakturerbara. Restid, offerter, inköp, admin och ställtid går inte att debitera.</li>
<li><strong>Vinstpåslag</strong> – företaget ska tjäna pengar utöver din lön. 10–20 % är vanligt.</li>
</ul>

<h2>Exempel: från lön till timpris</h2>
<p>Säg att du har en anställd snickare:</p>
<ul>
<li>Arbetsgivarkostnad: <strong>52 000 kr/mån</strong></li>
<li>Omkostnader (bil, verktyg, försäkring, admin): <strong>+ 14 000 kr/mån</strong> → 66 000 kr totalt</li>
<li>Debiterbara timmar: 6 h/dag × 20 dagar = <strong>120 h/mån</strong> (debiteringsgrad 75 %)</li>
<li>Självkostnad per timme: 66 000 ÷ 120 = <strong>550 kr</strong></li>
<li>Vinstpåslag 15 %: 550 × 1,15 ≈ <strong>630 kr/timme exkl. moms</strong></li>
<li>Med 25 % moms: ≈ <strong>790 kr/timme</strong> som kunden ser</li>
</ul>
<p>Sänker du debiteringsgraden till 60 % (bara 4,8 debiterbara timmar/dag) stiger självkostnaden till ca 690 kr – nästan 25 % högre för exakt samma lön. Det är därför debiteringsgraden är så avgörande. <a href="/sv/verktyg/timpris-kalkylator">Testa dina egna siffror i timpris-kalkylatorn</a>.</p>

<h2>Glöm inte påslaget på material</h2>
<p>Timpriset täcker arbetet – men hanterar du material åt kunden ska du ta betalt för inköp, spill, transport och risk. Ett påslag på 10–20 % på materialet är rimligt. <a href="/sv/verktyg/paslag-marginal-kalkylator">Räkna påslag vs marginal här</a> så att du inte blandar ihop de två (ett påslag på 20 % ger inte 20 % marginal).</p>

<h2>ROT och moms – så påverkar de priset kunden ser</h2>
<p>För privatkunder dras <strong>ROT-avdrag på 30 % av arbetskostnaden</strong> (2026, max 50 000 kr per person och år). Du fakturerar hela arbetskostnaden inkl. moms och drar av ROT direkt på fakturan – kunden betalar mindre på en gång och du begär tillbaka resten från Skatteverket. Momsen på hantverkartjänster är 25 %. Se hur det slår i <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdrag kalkylatorn</a> och <a href="/sv/verktyg/moms-kalkylator">moms-kalkylatorn</a>.</p>

<h2>Så håller du koll på debiteringsgraden i ByggExp</h2>
<p>Du kan bara prissätta rätt om du vet hur många timmar som faktiskt blir fakturerbara. I ByggExp registrerar teamet tid direkt i mobilen, kopplad till rätt projekt:</p>
<ol>
<li>Alla stämplar tid per projekt och moment – arbete, restid och ställtid.</li>
<li>Du ser i efterhand hur stor andel av tiden som gick att debitera – din verkliga debiteringsgrad.</li>
<li>Med rätt siffra kan du sätta ett timpris som håller, i stället för att gissa.</li>
<li>Tiden blir direkt underlag för offert och faktura, med ROT uträknat automatiskt.</li>
</ol>
<p>Vill du börja enkelt? <a href="/sv/verktyg/tidrapport-mall">Ladda ner en gratis tidrapport-mall</a> och börja mät din tid redan i veckan.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är ett normalt timpris för en hantverkare 2026?</h3>
<p>Som riktvärde ligger snickare på ca 450–850 kr/timme, målare 400–650 kr, och elektriker och rörmokare ofta 550–1 100 kr – allt inklusive moms och före ROT-avdrag. I storstäder är priserna 15–25 % högre. Ditt eget timpris bör dock alltid räknas fram från dina kostnader, inte från marknadsgenomsnittet.</p>
<h3>Vad är debiteringsgrad och varför är den viktig?</h3>
<p>Debiteringsgrad är andelen av arbetstiden som du faktiskt kan fakturera. Restid, offerter, inköp och admin är sällan debiterbara, så av en 8-timmars dag blir ofta bara 5–6 timmar fakturerbara. Ju lägre debiteringsgrad, desto högre måste timpriset vara för att täcka kostnaderna.</p>
<h3>Hur mycket vinstpåslag ska jag lägga på?</h3>
<p>Utöver att din lön ska täckas ska företaget gå med vinst. Ett vinstpåslag på 10–20 % på självkostnaden är vanligt. Under det riskerar företaget att inte klara oförutsedda kostnader eller investeringar.</p>
<h3>Ska jag ta betalt för restid?</h3>
<p>Restid är en kostnad oavsett om du debiterar den separat eller inte. Antingen fakturerar du restiden explicit, eller så måste den räknas in i timpriset via en lägre debiteringsgrad. Det viktiga är att den inte &quot;försvinner&quot;.</p>

<h2>Kom igång</h2>
<p>Sätt timpriset utifrån dina egna kostnader – inte grannens. <a href="/sv/verktyg/timpris-kalkylator">Räkna ut ditt timpris gratis</a>, eller <a href="/sv/contact">boka en demo av ByggExp</a> och se hur tidrapporteringen ger dig den debiteringsgrad du behöver för att prissätta rätt.</p>

<p>Relaterade verktyg: <a href="/sv/verktyg/timpris-kalkylator">Timpris-kalkylator</a> · <a href="/sv/verktyg/paslag-marginal-kalkylator">Påslag &amp; marginal</a> · <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdrag</a> · <a href="/sv/verktyg/tidrapport-mall">Tidrapport-mall</a></p>
`.trim();

const TIMPRIS: BlogPost = {
  _id: 'code-timpris',
  title: 'Vad ska du ta betalt per timme? Räkna ut ditt timpris 2026',
  slug: 'timpris-hantverkare',
  locale: 'sv',
  excerpt:
    'Marknadspriser 2026 och hur du räknar fram ditt eget timpris utifrån arbetsgivarkostnad, omkostnader, debiteringsgrad och vinst – med ett räkneexempel och gratis kalkylator.',
  tag: 'Ekonomi',
  coverImageUrl: '/landing/features/2uppgift.webp',
  contentHtml: TIMPRIS_HTML,
  seoTitle: 'Timpris hantverkare 2026 – så räknar du ut vad du ska ta betalt | ByggExp',
  seoDescription:
    'Vad ska du ta betalt i timmen? Marknadspriser 2026 och hur du räknar fram ditt timpris från kostnader, debiteringsgrad och vinst. Gratis timpris-kalkylator.',
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-17T09:00:00.000Z',
  createdAt: '2026-08-17T09:00:00.000Z',
  updatedAt: '2026-08-17T09:00:00.000Z',
};

const OFFERT_HTML = `
<p>Offerten är det första kunden ser av ditt hantverk – och det dokument som avgör vem som får jobbet och vad som gäller om något blir dyrare. En tydlig offert vinner fler affärer och skyddar dig när diskussionen kommer. Här går vi igenom vad en offert måste innehålla, skillnaden mellan fast pris och löpande räkning, hur du hanterar ändringar (ÄTA) – och hur du gör en proffsig offert på minuter.</p>

<p><a href="/sv/verktyg/offert-mall">Skapa en gratis offert (PDF) direkt i vår offertmall →</a></p>

<h2>Vad en offert ska innehålla</h2>
<p>En offert är i praktiken ett anbud – accepterar kunden den blir den bindande. Ta därför med allt som behövs för att undvika oklarheter:</p>
<ul>
<li><strong>Ditt företag</strong> – namn, org.nr, kontakt och F-skatt</li>
<li><strong>Kund</strong> – namn och adress där arbetet ska utföras</li>
<li><strong>Vad som ingår</strong> – specificerade rader för arbete och material</li>
<li><strong>Pris</strong> – belopp exkl. och inkl. moms, samt arbetskostnad separat (viktigt för ROT)</li>
<li><strong>Pristyp</strong> – fast pris eller löpande räkning (à-pris)</li>
<li><strong>Vad som INTE ingår</strong> – lika viktigt som det som ingår</li>
<li><strong>Tidplan</strong> – ungefärlig start och tid för arbetet</li>
<li><strong>Betalningsvillkor</strong> – delbetalningar, förskott, betaltid</li>
<li><strong>Giltighetstid</strong> – hur länge offerten gäller</li>
<li><strong>Villkor</strong> – vilket standardavtal som gäller (t.ex. Hantverkarformuläret 17 för konsument)</li>
</ul>

<h2>Fast pris eller löpande räkning?</h2>
<p>De två vanligaste prismodellerna har olika risk:</p>
<ul>
<li><strong>Fast pris</strong> ger kunden trygghet men lägger risken på dig – blir jobbet krångligare än väntat får du stå för det. Kräver att du kan bedöma omfattningen väl, och att offerten tydligt anger vad som ingår.</li>
<li><strong>Löpande räkning</strong> (à-pris per timme + material) flyttar risken till kunden och passar när omfattningen är svår att förutse. Ange då timpris, ungefärlig tidsåtgång och hur material debiteras.</li>
</ul>
<p>Osäker på ditt timpris? Läs <a href="/sv/blog/timpris-hantverkare">guiden om vad du ska ta betalt per timme</a> och räkna i <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylatorn</a>.</p>

<h2>ÄTA – skydda dig mot ändringar</h2>
<p>Nästan alla projekt ändras under vägen. Ändrings- och tilläggsarbeten (ÄTA) som beställs muntligt men aldrig dokumenteras är en av de vanligaste orsakerna till tvist. Skriv i offerten att ändringar hanteras som skriftliga ÄTA, och bekräfta varje ÄTA innan du utför den. Läs mer i <a href="/sv/blog/ata-arbeten">guiden om ÄTA-arbeten</a> och använd en <a href="/sv/verktyg/ata-mall">ÄTA-mall</a>.</p>

<h2>ROT på offerten</h2>
<p>Ska privatkunden få ROT-avdrag måste <strong>arbetskostnaden vara tydligt specificerad</strong> – avdraget gäller bara arbete, inte material, resor eller maskiner. Visa gärna både pris före och efter ROT så att kunden ser vad hen faktiskt betalar. ROT är 30 % av arbetskostnaden 2026 (max 50 000 kr/person/år). Räkna i <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdrag kalkylatorn</a>.</p>

<h2>Så skriver du en offert som vinner</h2>
<ul>
<li><strong>Var snabb.</strong> Den som svarar först har ett övertag – många kunder tar den offert som kommer först och känns seriös.</li>
<li><strong>Var konkret.</strong> Specificera arbete och material på egna rader i stället för en klumpsumma. Det bygger förtroende och gör ROT rätt.</li>
<li><strong>Sätt en giltighetstid.</strong> Priser på material rör sig – bind dig inte för länge.</li>
<li><strong>Gör den snygg.</strong> En ren, tydlig PDF med ditt företagsnamn signalerar proffs.</li>
</ul>

<h2>Skapa offert gratis</h2>
<p>Med vår <a href="/sv/verktyg/offert-mall">offertmall</a> fyller du i rader, moms och ROT och laddar ner en färdig offert som PDF – direkt i webbläsaren, utan konto. Har du redan räknat material i någon av våra kalkylatorer kan du föra över raderna till offerten med ett klick.</p>

<h2>Från offert till faktura i ByggExp</h2>
<p>I ByggExp håller du ihop hela kedjan: offert, ÄTA, tidrapportering och faktura i samma system, kopplat till projektet.</p>
<ol>
<li>Skapa offerten med specificerat arbete och material, ROT uträknat automatiskt.</li>
<li>Bekräftade ändringar läggs till som ÄTA – inget faller mellan stolarna.</li>
<li>Nedlagd tid och material följer med från projektet till fakturan.</li>
<li>Fakturera med rätt ROT och moms utan att räkna om för hand.</li>
</ol>
<p>Vill du testa på papper först? <a href="/sv/verktyg/offert-mall">Skapa en gratis offert</a> eller <a href="/sv/verktyg/faktura-mall">faktura</a> som PDF.</p>

<h2>Vanliga frågor</h2>
<h3>Är en offert bindande?</h3>
<p>Ja. En offert är ett anbud, och när kunden accepterar den inom giltighetstiden uppstår ett bindande avtal enligt avtalslagen. Därför är det viktigt att offerten tydligt anger vad som ingår, priset och villkoren.</p>
<h3>Vad är skillnaden mellan offert och kostnadsförslag?</h3>
<p>En offert med fast pris är bindande. Ett kostnadsförslag (ungefärligt pris) är en uppskattning som får överskridas – men enligt konsumenttjänstlagen normalt med högst 15 % om inget annat avtalats. Var tydlig med vilket du lämnar.</p>
<h3>Måste arbetskostnaden specificeras för ROT?</h3>
<p>Ja. ROT-avdraget gäller bara arbetskostnaden, så den måste vara tydligt angiven och skild från material. Annars kan kunden inte få avdraget och du riskerar en jobbig efterhandsdiskussion.</p>
<h3>Hur länge ska en offert gälla?</h3>
<p>Det bestämmer du, men 14–30 dagar är vanligt. Sätt alltid en giltighetstid så att du inte är bunden till ett pris när materialkostnaderna hunnit ändras.</p>

<h2>Kom igång</h2>
<p>En tydlig offert vinner jobbet och skyddar dig. <a href="/sv/verktyg/offert-mall">Skapa en gratis offert (PDF)</a>, eller <a href="/sv/contact">boka en demo av ByggExp</a> och håll ihop offert, ÄTA och faktura i ett flöde.</p>

<p>Relaterat: <a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a> · <a href="/sv/blog/timpris-hantverkare">Timpris</a> · <a href="/sv/verktyg/offert-mall">Offertmall</a> · <a href="/sv/verktyg/faktura-mall">Fakturamall</a></p>
`.trim();

const OFFERT: BlogPost = {
  _id: 'code-offert',
  title: 'Så skriver du en offert som hantverkare – krav, tips och gratis mall',
  slug: 'skriva-offert',
  locale: 'sv',
  excerpt:
    'Vad en offert måste innehålla, fast pris vs löpande räkning, ÄTA och ROT – plus en gratis offertmall som ger dig en färdig PDF.',
  tag: 'Ekonomi',
  coverImageUrl: '/landing/verktyg/offert-preview.webp',
  contentHtml: OFFERT_HTML,
  seoTitle: 'Skriva offert som hantverkare – krav, mall & tips 2026 | ByggExp',
  seoDescription:
    'Vad ska en offert innehålla? Fast pris vs löpande räkning, ÄTA, ROT och betalningsvillkor – plus en gratis offertmall (PDF). Guide för hantverkare.',
  seoImageUrl: `${SITE_URL}/landing/verktyg/offert-preview.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-17T10:00:00.000Z',
  createdAt: '2026-08-17T10:00:00.000Z',
  updatedAt: '2026-08-17T10:00:00.000Z',
};

const MOMS_HTML = `
<p>Moms är enkelt – ända tills du jobbar mellan byggföretag. Då gäller <strong>omvänd byggmoms</strong>, och plötsligt ska du fakturera utan moms och märka fakturan på rätt sätt. Fakturerar du fel riskerar du att stå för moms du aldrig fått betalt för. Här går vi igenom momssatsen för byggtjänster, hur omvänd skattskyldighet fungerar, moms på ROT-fakturor och vad du behöver ha koll på i redovisningen.</p>

<p><a href="/sv/verktyg/moms-kalkylator">Räkna ut moms fram och baklänges i vår gratis moms-kalkylator →</a></p>

<h2>Momssats på byggtjänster</h2>
<p>På de flesta byggtjänster är momsen <strong>25 %</strong>. Några varor och tjänster har lägre sats (12 % eller 6 %), men för vanligt snickeri, måleri, el och VVS gäller 25 %. Ska du lägga på eller räkna baklänges från ett pris inklusive moms hjälper <a href="/sv/verktyg/moms-kalkylator">moms-kalkylatorn</a> – vid 25 % multiplicerar du med 1,25 för att lägga på, och med 0,8 för att räkna bort.</p>

<h2>Omvänd byggmoms – det här måste du kunna</h2>
<p>Omvänd skattskyldighet (omvänd byggmoms) innebär att det är <strong>köparen, inte säljaren, som redovisar och betalar momsen</strong>. Det är alltså inte momsfri försäljning – ansvaret för momsredovisningen flyttas bara till köparen. Reglerna finns för att motverka momsfusk i byggkedjan.</p>
<p><strong>När gäller det?</strong> Du ska använda omvänd byggmoms när du säljer <strong>byggtjänster i Sverige till ett annat företag som självt säljer byggtjänster</strong> (mer än tillfälligt). Är villkoren uppfyllda är det <strong>inte valfritt</strong> – du måste fakturera med omvänd moms.</p>
<p><strong>När gäller det INTE?</strong> Säljer du till en privatperson eller till ett företag som inte är verksamt inom byggsektorn fakturerar du som vanligt, med 25 % moms.</p>

<h2>Så fakturerar du med omvänd byggmoms</h2>
<p>När omvänd skattskyldighet gäller ska du:</p>
<ul>
<li><strong>Inte lägga på någon moms</strong> på fakturan.</li>
<li><strong>Märka fakturan</strong> tydligt med texten &quot;Omvänd skattskyldighet för byggtjänster gäller&quot;.</li>
<li><strong>Ange köparens momsregistreringsnummer.</strong></li>
</ul>
<p>Det räcker alltså inte att bara låta bli att lägga på moms – märkningen måste finnas med. Köparen redovisar sedan både utgående och ingående moms i sin momsdeklaration.</p>

<h2>Moms på ROT-fakturor</h2>
<p>Vid arbete åt privatperson med ROT gäller vanlig moms på 25 %. ROT-avdraget (30 % av arbetskostnaden 2026, max 50 000 kr/person och år) räknas på arbetskostnaden <strong>inklusive moms</strong>, och dras av direkt på fakturan. Du fakturerar alltså full arbetskostnad med moms, drar av ROT och begär tillbaka det från Skatteverket. Se hur det slår i <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdrag kalkylatorn</a>.</p>

<h2>Redovisning och underlag</h2>
<p>Moms redovisas månadsvis, kvartalsvis eller årsvis beroende på företagets omsättning och val. Enligt bokföringslagen ska du spara allt underlag – fakturor, avtal, tidrapporter och ROT-underlag – i <strong>sju år</strong>. Ordning i underlaget gör både momsredovisning och en eventuell kontroll enkel.</p>

<h2>Så håller ByggExp koll på moms och ROT</h2>
<p>I ByggExp skapar du offert och faktura där moms och ROT räknas ut automatiskt, och du markerar enkelt när omvänd byggmoms gäller:</p>
<ol>
<li>Lägg upp arbete och material på specificerade rader.</li>
<li>Välj momssats – eller omvänd skattskyldighet för bygguppdrag mellan företag.</li>
<li>Markera ROT på arbetsraderna så räknas kundens del ut automatiskt.</li>
<li>Fakturan blir rätt märkt och underlaget stämmer mot Skatteverket.</li>
</ol>
<p>Vill du börja enkelt? <a href="/sv/verktyg/faktura-mall">Skapa en gratis faktura</a> eller <a href="/sv/verktyg/offert-mall">offert</a> som PDF.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är omvänd byggmoms?</h3>
<p>Det är när köparen i stället för säljaren redovisar och betalar momsen. Det gäller när du säljer byggtjänster till ett annat företag som självt säljer byggtjänster. Säljaren fakturerar då utan moms men måste märka fakturan med &quot;Omvänd skattskyldighet för byggtjänster gäller&quot; och ange köparens momsnummer.</p>
<h3>Är omvänd skattskyldighet valfri?</h3>
<p>Nej. Om villkoren är uppfyllda – du säljer byggtjänster till ett byggföretag i Sverige – måste omvänd skattskyldighet användas. Det är inte något du kan välja bort.</p>
<h3>Vilken momssats gäller för hantverkartjänster?</h3>
<p>25 % för de flesta byggtjänster. Vissa varor och tjänster har 12 % eller 6 %, men det är ovanligt inom vanligt bygg- och hantverksarbete.</p>
<h3>Hur länge ska jag spara momsunderlaget?</h3>
<p>Sju år enligt bokföringslagen. Det gäller fakturor, avtal, tidrapporter och ROT-underlag.</p>

<h2>Kom igång</h2>
<p>Fakturera med rätt moms – varje gång. <a href="/sv/verktyg/moms-kalkylator">Räkna moms gratis</a>, eller <a href="/sv/contact">boka en demo av ByggExp</a> och låt systemet hålla koll på moms, omvänd byggmoms och ROT åt dig.</p>

<p>Relaterat: <a href="/sv/blog/skriva-offert">Skriva offert</a> · <a href="/sv/verktyg/moms-kalkylator">Moms-kalkylator</a> · <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdrag</a> · <a href="/sv/verktyg/faktura-mall">Fakturamall</a></p>
`.trim();

const MOMS: BlogPost = {
  _id: 'code-moms-hantverkare',
  title: 'Moms för hantverkare – omvänd byggmoms, ROT och 25 %',
  slug: 'moms-hantverkare',
  locale: 'sv',
  excerpt:
    'Momssatsen på byggtjänster, hur omvänd byggmoms (omvänd skattskyldighet) fungerar och ska märkas, moms på ROT-fakturor och hur länge du sparar underlaget.',
  tag: 'Ekonomi',
  coverImageUrl: '/landing/verktyg/moms-preview.webp',
  contentHtml: MOMS_HTML,
  seoTitle: 'Moms för hantverkare 2026 – omvänd byggmoms & ROT | ByggExp',
  seoDescription:
    'Moms på byggtjänster: 25 %, omvänd byggmoms (när den gäller och hur fakturan märks), moms på ROT-fakturor och redovisning. Guide för hantverkare + gratis kalkylator.',
  seoImageUrl: `${SITE_URL}/landing/verktyg/moms-preview.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-17T11:00:00.000Z',
  createdAt: '2026-08-17T11:00:00.000Z',
  updatedAt: '2026-08-17T11:00:00.000Z',
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
  seoTitle: 'Tidrapportering i byggföretag – guide, mall & debiteringsgrad | ByggExp',
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


const FAKTURA_HTML = `
<p>En slarvig faktura kostar mer än du tror. Saknas en obligatorisk uppgift kan Skatteverket underkänna din bokföring, och otydliga betalningsvillkor gör att pengarna dröjer långt efter att jobbet är klart. Som hantverkare eller byggföretag är fakturan både ditt betalningsanspråk och en bokföringsverifikation – den måste hålla på båda planen. Här går vi igenom exakt vad som krävs enligt lag 2026, och du får en checklista att bocka av före varje faktura.</p>

<p>Vill du komma igång direkt kan du skapa en korrekt faktura med rätt uppgifter från start i vår <a href="/sv/verktyg/faktura-mall">gratis fakturamall</a>.</p>

<h2>Vad en faktura MÅSTE innehålla enligt lag</h2>

<p>Enligt mervärdesskattelagen ska en fullständig faktura (belopp över 4 000 kr inklusive moms) innehålla samtliga följande uppgifter:</p>

<ul>
<li><strong>Fakturanummer</strong> – unikt och hämtat ur en obruten nummerserie</li>
<li><strong>Fakturadatum</strong></li>
<li><strong>Säljarens namn och adress</strong> samt <strong>momsregistreringsnummer</strong></li>
<li><strong>Köparens namn och adress</strong></li>
<li><strong>Leveransdatum</strong> – när tjänsten utfördes eller varan levererades</li>
<li><strong>Specificerad beskrivning</strong> av tjänsten eller varan med mängd och omfattning</li>
<li><strong>Pris per rad exklusive moms</strong></li>
<li><strong>Momssats och momsbelopp i kronor</strong>, samt beskattningsunderlaget per skattesats</li>
</ul>

<p>Var noga med beskrivningen. Att bara skriva <em>"byggtjänster"</em> räcker inte – fakturan ska vara detaljerad nog att fungera som bokföringsverifikation. Ange vad som gjorts, var och i vilken omfattning, till exempel "Rivning och montering av kök, arbete 24 tim" plus materialrader. En luddig faktura är den vanligaste orsaken till att både kund och revisor ställer frågor i efterhand.</p>

<h3>Fullständig vs förenklad faktura</h3>

<p>Ligger fakturabeloppet på högst 4 000 kr inklusive moms får du använda en <strong>förenklad faktura</strong>. Den behöver bara innehålla fakturadatum, säljarens namn och momsnummer, vad som sålts samt momsbeloppet (eller uppgifter för att räkna ut det). Över den gränsen gäller alltid den fullständiga listan ovan.</p>

<p>Är ditt företag godkänt för F-skatt bör du ange <strong>"Godkänd för F-skatt"</strong> på fakturan. Uppgiften har rättslig verkan: köparen kan då lita på den och behöver inte göra skatteavdrag eller betala arbetsgivaravgifter för dig. Privatkunder och byggföretag förväntar sig att se den.</p>

<h2>Omvänd byggmoms – när du INTE ska lägga på moms</h2>

<p>Säljer du en byggtjänst i Sverige till ett annat företag som självt säljer eller vidareförsäljer byggtjänster gäller <strong>omvänd skattskyldighet</strong>. Då fakturerar du <strong>0 kr moms</strong> och köparen redovisar momsen i stället. Fakturan måste märkas tydligt, till exempel <em>"Omvänd skattskyldighet för byggtjänster gäller"</em>, och den <strong>måste innehålla köparens momsregistreringsnummer</strong>.</p>

<p>Regeln gäller bara mellan byggföretag. Säljer du till en privatperson eller till ett företag som inte är verksamt inom byggsektorn lägger du på vanlig moms (25 % på byggtjänster). Är du osäker på beräkningen kan du dubbelkolla i vår <a href="/sv/verktyg/moms-kalkylator">moms-kalkylator</a> innan du skickar fakturan.</p>

<h2>ROT-faktura 2026 – fakturamodellen steg för steg</h2>

<p>Fakturerar du en privatperson kan kunden ha rätt till ROT-avdrag. För 2026 är avdraget <strong>30 % av arbetskostnaden</strong>, med ett tak på <strong>50 000 kr per person och år</strong>. Notera att nivån var tillfälligt höjd till 50 % under delar av 2025 men sänktes tillbaka till 30 % från 1 januari 2026 – räkna alltid på 30 %. Avdraget gäller <strong>enbart arbete</strong>, aldrig material, maskiner eller framkörning, och du som utförare måste vara godkänd för F-skatt.</p>

<p>Så här fungerar fakturamodellen:</p>

<ol>
<li>Dela upp fakturan så att <strong>arbetskostnaden tydligt skiljs</strong> från material och övriga kostnader.</li>
<li>Kunden betalar arbetskostnaden <strong>minus ROT-avdraget (30 %)</strong> plus fullt pris för material.</li>
<li>Du begär sedan ut det återstående ROT-beloppet <strong>från Skatteverket</strong>.</li>
</ol>

<p>Exempel: arbetskostnad 20 000 kr, material 8 000 kr. ROT-avdraget blir 30 % av 20 000 = 6 000 kr. Kunden betalar 14 000 kr för arbetet plus 8 000 kr för material, alltså 22 000 kr, och du får de resterande 6 000 kr utbetalda från Skatteverket. Räkna snabbt på kundens avdrag i vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdrag-kalkylator</a>.</p>

<h2>Betalningsvillkor och dröjsmålsränta</h2>

<p>Om inget annat avtalas är betalningstiden <strong>30 dagar</strong> enligt räntelagen. Mellan företag är villkoren fritt förhandlingsbara, men en betalningstid som överstiger <strong>60 dagar</strong> gäller bara om borgenären uttryckligen godtagit den – längre tider kan annars anses oskäliga. Skriv därför alltid ut förfallodatumet på fakturan.</p>

<p>Betalar kunden för sent har du rätt till <strong>dröjsmålsränta</strong>. Den är Riksbankens referensränta plus 8 procentenheter. För perioden 1 januari–30 juni 2026 är referensräntan 2 %, vilket ger en lagstadgad dröjsmålsränta på <strong>10 %</strong>. Rätten till dröjsmålsränta mellan företag följer direkt av räntelagen – du behöver inget särskilt avtal – och löper i regel från 30 dagar efter faktura eller påminnelse, om ni inte avtalat en tidigare förfallodag.</p>

<h2>När kunden inte betalar – påminnelse och inkasso</h2>

<p>Uteblir betalningen finns en tydlig trappa. Utöver dröjsmålsräntan får du ta ut lagstadgade avgifter:</p>

<ul>
<li><strong>Påminnelseavgift:</strong> 60 kr</li>
<li><strong>Inkassoavgift:</strong> 180 kr</li>
<li><strong>Förseningsersättning:</strong> 450 kr vid B2B- och offentliga fordringar – får tas ut direkt när fakturan förfaller, utan föregående påminnelse (och täcker in 60+180 kr om inte de faktiska indrivningskostnaderna är högre)</li>
</ul>

<p>Ordningen är: skicka en <strong>betalningspåminnelse</strong>, därefter ett <strong>inkassokrav</strong>, och om det inte hjälper ansöker du om <strong>betalningsföreläggande hos Kronofogden</strong>. Att fakturan från början uppfyller alla lagkrav är avgörande – en formellt korrekt faktura är mycket svårare att bestrida.</p>

<h2>Spara fakturan i 7 år</h2>

<p>Räkenskapsinformation – fakturor, kvitton, avtal med mera – ska enligt bokföringslagen arkiveras i <strong>7 år efter utgången av det kalenderår då räkenskapsåret avslutades</strong>, i ordnat och betryggande skick i Sverige. Sedan 1 juli 2024 får pappersunderlag <strong>slängas efter korrekt överföring till digital form</strong>; den tidigare regeln om att spara originalet i 3–4 år är borttagen. Digitalt fakturaflöde är alltså både tillåtet och praktiskt.</p>

<h2>Så gör du i ByggExp</h2>

<p>I ByggExp bygger du fakturan på jobbet i stället för att börja från ett tomt blad. Registrerad tid och material följer med in på fakturan, arbetskostnad och material hamnar på egna rader så att ROT-uppdelningen blir rätt, och fakturanumren löper i obruten serie automatiskt. Du kan märka fakturan för omvänd byggmoms när det behövs och lägga in förfallodatum och villkor från start. Underlagen sparas digitalt, vilket täcker arkiveringskravet. ByggExp lämnar däremot inte in din momsdeklaration eller ROT-ansökan åt dig – det gör du eller din redovisningskonsult, men underlaget blir korrekt och lätt att exportera.</p>

<h2>Vanliga frågor</h2>

<h3>Ska det framgå att jag har F-skatt?</h3>
<p>Ja, ange "Godkänd för F-skatt" på fakturan om företaget är godkänt. Uppgiften har rättslig verkan – köparen kan lita på den och behöver då inte göra skatteavdrag eller betala sociala avgifter för det arbete du utför.</p>

<h3>När ska jag använda omvänd byggmoms?</h3>
<p>När du säljer en byggtjänst i Sverige till ett annat företag som självt säljer eller vidareförsäljer byggtjänster. Då fakturerar du 0 kr moms, märker fakturan "Omvänd skattskyldighet för byggtjänster gäller" och anger köparens momsnummer. Till privatpersoner och företag utanför byggsektorn lägger du på vanlig moms.</p>

<h3>Hur mycket är ROT-avdraget 2026?</h3>
<p>ROT-avdraget är 30 % av arbetskostnaden, med ett tak på 50 000 kr per person och år. Det gäller bara arbete – aldrig material, maskiner eller framkörning – och du måste vara godkänd för F-skatt. Nivån sänktes från de tillfälliga 50 % under 2025 till 30 % från 1 januari 2026.</p>

<h3>Vad blir dröjsmålsräntan om kunden betalar sent?</h3>
<p>Dröjsmålsräntan är Riksbankens referensränta plus 8 procentenheter. Med referensräntan 2 % för första halvåret 2026 blir den 10 %. Rätten gäller automatiskt mellan företag enligt räntelagen och löper normalt från 30 dagar efter faktura eller påminnelse.</p>

<h2>Kom igång</h2>

<p>Skapa din nästa faktura med rätt uppgifter från start i vår <a href="/sv/verktyg/faktura-mall">gratis fakturamall</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du fakturerar hela jobbet – tid, material och ROT – utan att missa en lagkrävd uppgift.</p>

<p>Checklista före varje faktura: fakturanummer i obruten serie, faktura- och leveransdatum, säljarens momsnr, köparens uppgifter, specificerad tjänst, pris ex moms, rätt momssats (eller omvänd byggmoms-märkning), ROT-uppdelning vid privatkund, "Godkänd för F-skatt", samt förfallodatum och villkor.</p>

<p>Relaterat: <a href="/sv/blog/skriva-offert">Skriva offert som hantverkare</a> och <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a>.</p>
`.trim();

const FAKTURA: BlogPost = {
  _id: "code-fakturera-som-hantverkare",
  title: "Fakturera som hantverkare – så gör du rätt enligt lag 2026",
  slug: "fakturera-som-hantverkare",
  locale: "sv",
  excerpt: "En komplett guide till hur du som hantverkare fakturerar rätt enligt lag 2026 – fakturakrav, ROT, omvänd byggmoms, betalningsvillkor och arkivering.",
  tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/faktura-preview.webp",
  contentHtml: FAKTURA_HTML,
  seoTitle: "Fakturera som hantverkare 2026 | ByggExp",
  seoDescription: "Vad en faktura måste innehålla enligt lag, ROT-faktura, omvänd byggmoms, betalningsvillkor och dröjsmålsränta. Komplett checklista för hantverkare 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/faktura-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-17T13:00:00.000Z",
  createdAt: "2026-08-17T13:00:00.000Z",
  updatedAt: "2026-08-17T13:00:00.000Z",
};


const MATERIALKALKYL_HTML = `
<p>Materialsvinn och returresor äter marginalen på varje projekt. Köper du för lite blir det stopp, extra frakt och en färgnyans som inte matchar; köper du för mycket binder du likviditet och slänger virke. En sak är värd att slå fast direkt: materialkalkylen är helt separat från ROT. ROT-avdraget täcker bara arbetskostnaden (30 % från 1 januari 2026, max 50 000 kr per person och år; ROT och RUT delar ett gemensamt tak på 75 000 kr per person och år) – inte material, resor eller maskinhyra. All materialoptimering ligger alltså på dig, och den lönar sig alltid att räkna noggrant på. Här får du en praktisk metod, steg för steg.</p>

<p>Vill du hoppa direkt till räknandet hittar du alla kalkylatorer samlade i <a href="/sv/verktyg">vår gratis verktygslåda -&gt;</a> – en per materialtyp, så du slipper göra tumregler i huvudet.</p>

<h2>Steg 1 – Mät rätt och välj rätt enhet</h2>
<p>Den vanligaste felkällan i en byggkalkyl är inte matematiken, utan att man blandar ihop enheter. Materialåtgång måste räknas i rätt enhet per materialtyp:</p>
<ul>
<li><strong>m² (kvadratmeter)</strong> för ytor: gips- och byggskivor, kakel, klinker, färg och isolering.</li>
<li><strong>lpm (löpmeter)</strong> för längdgods: reglar, list, trall och golvsockel.</li>
<li><strong>styck</strong> för enskilda enheter: skruv, fästen och enskilda plattor.</li>
</ul>
<p>Fällan är att tro att m² går att översätta direkt till löpmeter. Det gör det inte – du måste först känna till bredd och centrumavstånd. Exempel: ett trädäck på 20 m² lagt med 28×120 mm trall kräver cirka 8,0 löpmeter trall per m², alltså runt 160 lpm. Räknar du i m² rakt av köper du fel mängd. Mät därför ytan noga och bestäm enhet innan du går vidare.</p>

<h2>Steg 2 – c/c avgör materialåtgången</h2>
<p>Centrumavståndet (c/c) mellan reglar styr hur mycket virke och skruv som går åt, och det är inte fritt valt – det styrs av skivmåtten. För 900 mm breda gipsskivor används 450 mm c/c, för 1200 mm breda skivor 600 mm c/c. 600 mm ger en materialeffektiv vägg med mindre virke; 450 mm ger en styvare vägg som klarar tunga ytskikt som kakel.</p>
<p>Skillnaden syns direkt i kalkylen: går du från 600 till 450 mm c/c ökar antalet stående reglar per meter vägg med ungefär en tredjedel – och därmed både virkeslängden och skruvåtgången. För trall är cc 60 (600 mm) ett vanligt utgångsläge för bärande reglar. Bestäm c/c först, räkna sedan antal reglar. Använd <a href="/sv/verktyg/gips-kalkylator">gips- och regelväggskalkylatorn</a> så får du både skivor och reglar i ett svep.</p>

<h2>Steg 3 – Lägg på rätt spill (inte en schablon för allt)</h2>
<p>Spill uppstår för att material säljs i fasta längder och format och måste rundas upp – du kan inte köpa en halv skiva. Men att slå på samma påslag på allt är fel. Här är riktvärden per materialtyp:</p>
<ul>
<li><strong>Virke och skivor:</strong> 5–10 % extra på de flesta jobb.</li>
<li><strong>Kakel/klinker, rak läggning:</strong> cirka 10 %.</li>
<li><strong>Kakel/klinker, diagonal eller mönsterlagt:</strong> 10–15 % (vissa fall upp mot 20 %).</li>
<li><strong>Komplicerade rum</strong> med många hörn, rör och golvbrunn: lägg i övre delen av intervallet.</li>
</ul>
<p>Anledningen till att kakel drar mer är kapningen runt hörn, rör och brunn – varje kap ger en bit som ofta inte kan återanvändas. Räkna spillet på huvudmaterialet separat, inte som en klumpsumma på hela beställningen.</p>

<h2>Steg 4 – Räkna tillbehör och förbrukning som glöms bort</h2>
<p>Det är sällan huvudmaterialet som spräcker budgeten, utan de "osynliga" posterna. Missa inte:</p>
<ul>
<li><strong>Skruv och fästen:</strong> ett trädäck drar cirka 28–32 trallskruv per m² (två skruv per bräda och bärande regel).</li>
<li><strong>Lim, fog och fästmassa</strong> vid kakel och klinker.</li>
<li><strong>Spackel och primer</strong> före målning och plattsättning.</li>
<li><strong>Färgåtgång per strykning</strong> – räkna minst två strykningar, inte en.</li>
<li><strong>Golvbrunn, brunnsmanschett och kapmaterial</strong> i våtrum.</li>
</ul>
<p>Dessa poster är små var för sig men summerar snabbt, och de glöms oftast bort i en snabb offert. Ta med dem från början så håller kalkylen.</p>

<h2>Steg 5 – Rätt mängd = rätt ekonomi</h2>
<p>För lite material innebär arbetsstopp, en extra returresa, ny frakt och risken att efterbeställt kakel eller färg kommer från ett annat parti med avvikande nyans. För mycket innebär bundet kapital och svinn som du sällan får igen. Sikta på rätt mängd – och spara medvetet en referens: en hel extra platta eller en burk från samma parti gör att ett framtida byte matchar. Notera partinumret på materiallistan.</p>

<h2>Materialkalkylatorer per materialtyp</h2>
<p>Använd rätt kalkylator för rätt material – varje verktyg är gratis och räknar spill och enhet åt dig:</p>
<ul>
<li><a href="/sv/verktyg/gips-kalkylator">Gips- och regelväggskalkylator</a> – när du sätter innervägg och behöver skivor, reglar och skruv utifrån c/c.</li>
<li><a href="/sv/verktyg/golv-kalkylator">Golvkalkylator</a> – när du lägger golv och behöver m² plus spill och list.</li>
<li><a href="/sv/verktyg/tak-kalkylator">Takkalkylator</a> – när du beräknar takyta, material och åtgång.</li>
<li><a href="/sv/verktyg/betong-kalkylator">Betongkalkylator</a> – när du ska gjuta platta eller plintar och behöver rätt kubikmeter.</li>
<li><a href="/sv/verktyg">Alla verktyg</a> – för trall/altan, färg, isolering och övriga materialtyper.</li>
</ul>

<h2>Snabb checklista innan du beställer</h2>
<ol>
<li>Mät ytan två gånger.</li>
<li>Välj rätt enhet – m², lpm eller styck.</li>
<li>Sätt c/c efter skivmått eller bärverk.</li>
<li>Addera materialspecifikt spill (inte en schablon för allt).</li>
<li>Addera tillbehör: skruv, lim, fog, spackel, primer, färg.</li>
<li>Avrunda upp till hela förpackningar och längder.</li>
<li>Spara ett referensparti och notera partinummer.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp samlar du projektets materiallista, kalkyl och offert på ett ställe. Du räknar åtgången med verktygen, för in mängderna på projektet och kopplar dem till offerten – så att kunden ser en tydlig uppdelning mellan arbete (ROT-grundande) och material (inte ROT-grundande). När projektet är klart bokför du den faktiska åtgången mot den kalkylerade. Över tid bygger du på så vis upp dina egna åtgångstal per materialtyp, vilket gör nästa kalkyl mer träffsäker. ByggExp räknar inte jobbet åt dig, men det gör det enkelt att hålla ordning och att kalibrera dina egna schabloner projekt för projekt.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket spill ska jag räkna med?</h3>
<p>Som tumregel 5–10 % extra på virke och skivor. För kakel och klinker cirka 10 % vid rak läggning och 10–15 % vid diagonal eller mönsterlagd läggning, mer i rum med många hörn, rör och golvbrunn. Lägg spillet på huvudmaterialet, inte som en klumpsumma på hela beställningen.</p>
<h3>Kan jag räkna om kvadratmeter till löpmeter?</h3>
<p>Inte direkt. m² blir löpmeter först när du känner till bredd och centrumavstånd. En trallyta på 20 m² med 28×120 mm trall motsvarar till exempel cirka 8,0 lpm per m². Bestäm alltid enhet och c/c innan du räknar.</p>
<h3>Ingår material i ROT-avdraget?</h3>
<p>Nej. ROT gäller endast arbetskostnaden, som 2026 ger 30 % avdrag, max 50 000 kr per person och år. Material, resor, maskin- och verktygshyra samt administrativa avgifter ger inte rätt till avdrag. Därför är materialkalkylen helt separat och något du behöver optimera själv.</p>
<h3>Vilket c/c ska jag använda på en innervägg?</h3>
<p>Det styrs av skivbredden: 450 mm c/c för 900 mm breda gipsskivor och 600 mm c/c för 1200 mm breda skivor. 600 mm ger en materialeffektiv vägg, medan 450 mm ger en styvare vägg som lämpar sig för tunga ytskikt som kakel.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna ditt nästa projekt i <a href="/sv/verktyg">våra gratis kalkylatorer</a> – välj verktyget som matchar materialet så får du åtgång och spill direkt. Vill du se hur material, kalkyl och offert hänger ihop i ett flöde? <a href="/sv/contact">Boka en demo</a> så visar vi upplägget.</p>

<p>Relaterat: <a href="/sv/blog/timpris-hantverkare">Timpris för hantverkare – så sätter du rätt pris</a>, <a href="/sv/verktyg/gips-kalkylator">Gips- och regelväggskalkylator</a>, <a href="/sv/verktyg/betong-kalkylator">Betongkalkylator</a>.</p>
`.trim();

const MATERIALKALKYL: BlogPost = {
  _id: "code-rakna-material-till-bygget",
  title: "Räkna material till bygget – byggkalkyl som håller",
  slug: "rakna-material-till-bygget",
  locale: "sv",
  excerpt: "Praktisk metod för att kalkylera materialåtgång – rätt enhet, c/c, spill och tillbehör – så du slipper returresor och bundet kapital.",
  tag: "Byggkalkyl",
  coverImageUrl: "/landing/verktyg/gips-preview.webp",
  contentHtml: MATERIALKALKYL_HTML,
  seoTitle: "Räkna material till bygget | ByggExp",
  seoDescription: "Så gör du en byggkalkyl som håller: rätt enhet (m² vs lpm), c/c, spillpåslag per materialtyp och glömda tillbehör. Gratis kalkylatorer per material.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/gips-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-17T14:00:00.000Z",
  createdAt: "2026-08-17T14:00:00.000Z",
  updatedAt: "2026-08-17T14:00:00.000Z",
};


const PASLAG_HTML = `
<p>Att lägga påslag på materialet du köper in är inte fusk eller girighet — det är en av de viktigaste marginalerna du har som hantverkare, och det är fullt lagligt. Ändå tvekar många att ta betalt för det, delvis på grund av en seglivad myt om en påhittad &quot;15 %-regel&quot;. Efter den här artikeln vet du vilka påslagsnivåer som håller i praktiken, hur du räknar momsen rätt, vad ROT betyder för materialet och hur du dokumenterar påslaget så att en kund inte kan hålla inne pengarna i efterhand.</p>

<p>Vill du snabbt räkna fram rätt utpris och se skillnaden mellan påslag och marginal? Testa <a href="/sv/verktyg/paslag-marginal-kalkylator">vår gratis påslags- och marginalkalkylator &rarr;</a> medan du läser.</p>

<h2>Är materialpåslag ens lagligt?</h2>
<p>Ja. Den som tillhandahåller materialet — alltså du som köper in det, bär det hem, garanterar funktionen och hanterar eventuella reklamationer — har rätt att ta ett procentpåslag på inköpspriset. Påslaget ska täcka hantering, administration, garanti- och funktionsansvar, spill, kapitalbindning och den prisrisk du tar när du ligger ute med pengarna.</p>
<p>Det finns dock en nyans du måste ha koll på. Vid <strong>konsumentjobb</strong> är prissättningen inte helt fri: priset, inklusive påslaget, ska vara <em>skäligt</em> enligt konsumenttjänstlagen 36 §. Vid <strong>entreprenad mellan företag</strong> styr istället avtalet och eventuella standardvillkor som AB 04. Skälighetskravet betyder inte att du ska hålla igen — det betyder att du ska kunna motivera din nivå. Och det är enklare än många tror.</p>

<h2>Myten om &quot;15 %-regeln&quot;</h2>
<p>Här reder vi ut den vanligaste missuppfattningen i hela branschen. Många tror att materialpåslaget &quot;får vara max 15 %&quot; enligt konsumenttjänstlagen. Det är fel. 15 %-regeln i lagen handlar inte om påslag alls — den handlar om <strong>ungefärliga prisuppgifter</strong>.</p>
<p>Regeln säger att om du lämnat en ungefärlig prisuppgift till en konsument, får slutpriset inte överstiga det uppgivna priset med mer än 15 % (om ni inte avtalat ett annat pristak). Ett exempel:</p>
<ul>
<li>Du lämnar ungefärligt pris: <strong>4 500 kr</strong></li>
<li>Tak enligt 15 %-regeln: 4 500 &times; 1,15 = <strong>5 175 kr</strong></li>
</ul>
<p>Det här är alltså ett tak för hur mycket din <em>slutnota</em> får glida från en ungefärlig uppskattning — det säger ingenting om hur stort ditt materialpåslag får vara. Blanda inte ihop pristak med marginal. De är två helt olika saker.</p>

<h2>Vilka nivåer håller?</h2>
<p>Branschpraxis för materialpåslag ligger typiskt på <strong>5–20 % på inköpspriset</strong>. El- och VVS-installatörer ligger ofta högre, runt 20–30 %, eftersom deras material bär mer ansvar och risk. Så här kan du tänka kring nivåerna:</p>
<ul>
<li><strong>Självkostnad + 10–15 %:</strong> tryggt, vanligt och lätt att försvara i vilken diskussion som helst.</li>
<li><strong>20–25 %:</strong> vanligt förekommande och sällan ifrågasatt, särskilt för installatörsjobb.</li>
<li><strong>30–40 %:</strong> förekommer, men kräver en tydlig förklaring och helst ett skriftligt avtal med kunden.</li>
</ul>
<p>Koppla nivån till verkligheten: större risk, längre garanti och mer hantering motiverar högre påslag. Ett dyrt specialbeställt material du får ligga ute med i veckor och ansvara för i flera år tål ett annat påslag än en påse skruv. Linjen som installatörsbranschen själv driver är transparens — våga sätta din nivå, men var beredd att förklara den.</p>

<h2>Räkna rätt — moms och marginal</h2>
<p>Här tappar många pengar av ren slarv. Räkna alltid påslaget på <strong>nettopriset</strong>, alltså inköpspriset exklusive moms, och lägg på moms (25 %) allra sist. Så här ser rätt väg ut för ett material som kostar 1 000 kr exkl. moms med 15 % påslag:</p>
<ul>
<li>Nettopris: 1 000 kr</li>
<li>Påslag 15 %: +150 kr &rarr; 1 150 kr</li>
<li>Moms 25 %: +287,50 kr &rarr; <strong>1 437,50 kr att fakturera</strong></li>
</ul>
<p>Det vanligaste felet är att lägga moms på inköpet, sedan påslag, sedan moms igen — det blir dubbel moms och en faktura som inte håller. Rent matematiskt spelar ordningen ingen roll (1 000 &times; 1,15 &times; 1,25 blir samma som 1 000 &times; 1,25 &times; 1,15), men fakturan måste tydligt visa nettopris, påslag och moms var för sig.</p>
<p>En annan sak att hålla isär: <strong>påslag</strong> räknas på inköpspriset, <strong>marginal</strong> räknas på utpriset. 20 % påslag är inte samma sak som 20 % marginal. Räknar du fel här luras du själv på lönsamhet. Kalkylatorn ovan visar båda samtidigt så du ser vad du faktiskt tjänar.</p>

<h2>ROT 2026 och materialet — vad du MÅSTE veta</h2>
<p>ROT-avdraget är 2026 tillbaka på <strong>30 % av arbetskostnaden</strong>. Den tillfälliga höjningen till 50 % gällde bara 12 maj–31 december 2025 och är borta. Taket är 50 000 kr per person och år, och ROT och RUT tillsammans max 75 000 kr per år. Avgörande är betalningsdatumet — betalas fakturan 2026 gäller 30 %, oavsett när jobbet utfördes.</p>
<p>Det viktigaste för din prissättning: <strong>ROT gäller aldrig material</strong>, bara arbetskostnad. Ditt materialpåslag ger alltså aldrig något ROT-avdrag för kunden. På fakturan ska arbetskostnad och materialkostnad redovisas separat.</p>
<p>Frestelsen att &quot;flytta&quot; arbetskostnad in i materialpriset — eller tvärtom — för att pynta ROT-underlaget är otillåten och felaktig. Håll de två posterna rena. Ditt materialpåslag lönar sig helt på din sida av kalkylen ändå; det behöver inte gömmas.</p>

<h2>Skriftligt avtal = ditt viktigaste skydd</h2>
<p>Om en konsument bestrider ditt påslag som oskäligt får hen betala den skäliga delen och hålla inne resten tills saken är utredd. Skäligheten bedöms då mot vad materialet och tjänsten normalt kostar — jämförelseofferter blir bevis. Det enskilt viktigaste skyddet mot att hamna i den situationen är att <strong>avtala påslagets storlek skriftligt innan arbetet startar</strong>. Utan avtal hamnar du i en skälighetsdiskussion; med avtal har ni redan kommit överens.</p>
<p>Se till att din offert innehåller:</p>
<ul>
<li>Påslagets storlek i procent, tydligt angivet.</li>
<li>Om priset är <strong>fast</strong> eller en <strong>ungefärlig uppgift</strong> (kom ihåg 15 %-taket på det senare).</li>
<li>En prisjusteringsklausul om materialpriser stiger under jobbet — vid fast pris bär du annars risken själv och får inte ta mer betalt utan ett sådant förbehåll.</li>
<li>Separata rader för arbete och material inför ROT.</li>
</ul>
<p>En genomarbetad offert löser det mesta i förväg. Läs mer i vår guide om att <a href="/sv/blog/skriva-offert">skriva offert</a>.</p>

<h2>Entreprenad och B2B — kort om självkostnadsprincipen</h2>
<p>Jobbar du mot andra företag på löpande räkning enligt självkostnadsprincipen (AB 04 / ABT 06 kap 6 § 9) fungerar det annorlunda. Då ersätts dina faktiska kostnader — material, arbete, underentreprenörsfakturor — plus ett <strong>entreprenörarvode</strong>, ett procentpåslag för central administration och vinst. Storleken är inte fastslagen i AB 04 utan ska avtalas mellan parterna, och både huvud- och underentreprenör får lägga sitt eget påslag. Principen är densamma som i konsumentledet: påslaget är legitimt, men skriv ner nivån.</p>

<h2>Vanligaste misstagen</h2>
<ul>
<li>Att tro att påslaget &quot;måste vara 15 %&quot; — det är en myt.</li>
<li>Att räkna påslag på bruttopris och råka dubbelmomsa fakturan.</li>
<li>Att förväxla påslag med marginal och underprissätta sig själv.</li>
<li>Att lämna fast pris utan prisjusteringsklausul när materialpriserna rör sig.</li>
<li>Att inte skriva ner påslaget innan start — och sedan fastna i en skälighetstvist.</li>
<li>Att blanda arbete och material på fakturan och krångla till ROT.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du offerten med separata rader för arbete och material, så att påslag, moms och ROT-underlag hamnar rätt från början. Du sätter din påslagsnivå en gång och återanvänder den, skriver in prisjusteringsklausulen som standardtext och tar med kundens godkännande skriftligt — precis det som skyddar dig om ett pris ifrågasätts senare. När jobbet är klart går offerten vidare till faktura utan att du behöver räkna om något. Verktyget sätter inte din prisstrategi åt dig, men det ser till att siffrorna du bestämt faktiskt hamnar rätt hela vägen.</p>

<h2>Vanliga frågor</h2>
<h3>Hur stort materialpåslag får jag ta?</h3>
<p>Det finns ingen fast lagstadgad gräns. Branschpraxis ligger på 5–20 %, installatörer ofta 20–30 %. Vid konsumentjobb ska priset vara skäligt, men påslag upp mot 20–25 % är i praktiken mycket svårt att få underkänt. Högre nivåer kräver tydlig motivering och helst avtal.</p>
<h3>Betyder 15 %-regeln att påslaget måste vara max 15 %?</h3>
<p>Nej. 15 %-regeln i konsumenttjänstlagen handlar om att ett slutpris inte får överstiga en <em>ungefärlig prisuppgift</em> med mer än 15 %. Den säger ingenting om hur stort materialpåslaget får vara.</p>
<h3>Ger materialpåslaget kunden ROT-avdrag?</h3>
<p>Nej. ROT gäller bara arbetskostnaden — 30 % 2026, max 50 000 kr per person och år. Material ger aldrig ROT, oavsett påslag. Redovisa alltid arbete och material separat på fakturan.</p>
<h3>Kan kunden vägra betala mitt påslag?</h3>
<p>En konsument kan hålla inne den del av priset som bedöms oskälig, men måste betala den skäliga delen. Har ni avtalat påslagets storlek skriftligt före start står du mycket starkare — då är nivån redan överenskommen.</p>

<h2>Kom igång</h2>
<p>Sätt rätt påslag och se din faktiska marginal med <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylatorn</a>, och skriv in nivån direkt i <a href="/sv/verktyg/offert-mall">vår offertmall</a>. Vill du se hur hela flödet från offert till faktura fungerar i praktiken? <a href="/sv/contact">Boka en demo &rarr;</a></p>

<p>Relaterat: <a href="/sv/blog/skriva-offert">Så skriver du en offert som håller</a> &middot; <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a></p>
`.trim();

const PASLAG: BlogPost = {
  _id: "code-paslag-pa-material",
  title: "Materialpåslag för hantverkare — så sätter du ett lagligt och lönsamt påslag (2026)",
  slug: "paslag-pa-material",
  locale: "sv",
  excerpt: "Materialpåslag är din rätt och en av dina viktigaste marginaler — här är nivåerna som håller, momsen rätt räknad och avtalet som skyddar dig.",
  tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/paslag-preview.webp",
  contentHtml: PASLAG_HTML,
  seoTitle: "Materialpåslag hantverkare 2026 | ByggExp",
  seoDescription: "Så sätter du ett lagligt och lönsamt materialpåslag som hantverkare: branschnivåer 5–20 %, momsen rätt, ROT-fällan och avtalet som skyddar dig.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/paslag-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-18T09:00:00.000Z",
  createdAt: "2026-08-18T09:00:00.000Z",
  updatedAt: "2026-08-18T09:00:00.000Z",
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
<p>Egenkontroller kan idag göras direkt i en mobilapp och kvalitetsdokumentet signeras elektroniskt av ansvarig våtrumsledare, med namn på den behörige plattsättare som utfört tätskiktsarbetet. Det är den här kedjan – rätt utförande plus spårbar dokumentation – som håller vid en skadereglering.</p>
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


const EFAKTURA_HTML = `
<p>Du har säkert läst rubriker om att e-faktura blir obligatorisk och undrar om det gäller ditt lilla byggföretag redan nu. Kort svar: för de flesta hantverkare är det <strong>inte</strong> ett krav idag att skicka e-faktura till andra företag eller privatpersoner. Men reglerna är på väg att förändras, och det finns ett viktigt undantag du redan måste följa. Den här guiden reder ut vad som faktiskt gäller, vad Peppol och ViDA betyder, och hur tidslinjen 2026-2030 ser ut för dig som är hantverkare eller driver byggföretag.</p>

<p>Vill du bara ha ordning på faktureringen här och nu? Börja med vår gratis <a href="/sv/verktyg/faktura-mall">fakturamall för hantverkare -&gt;</a> så har du en korrekt faktura klar på minuter.</p>

<h2>Vad gäller idag - måste jag skicka e-faktura?</h2>
<p>Per augusti 2026 finns det <strong>ingen generell skyldighet</strong> för ett svenskt byggföretag att skicka e-faktura till andra företag (B2B) eller till privatkunder. Du kan alltså fortsätta fakturera precis som vanligt mot din vanliga kundkrets - inklusive med PDF eller papper - utan att bryta mot någon lag.</p>
<p>Det enda existerande lagkravet på e-faktura riktar sig mot den offentliga sektorn. Sedan den 1 april 2019 måste alla leverantörer till stat, kommun och region skicka strukturerade e-fakturor enligt den europeiska standarden EN 16931 (lag 2018:1277 om elektroniska fakturor till följd av offentlig upphandling). Om du utför jobb åt en kommun, en region eller en statlig myndighet omfattas du alltså redan idag - oavsett hur litet ditt företag är.</p>

<h2>En PDF är inte en e-faktura</h2>
<p>Här faller många hantverkare i en fälla. En PDF som du mejlar är <em>inte</em> en e-faktura i lagens mening, även om den ser prydlig ut. En riktig e-faktura är strukturerad, maskinläsbar data - oftast XML - i ett standardiserat format som mottagarens system läser in och bokför automatiskt. En skannad bild eller ett PDF-dokument räknas inte, eftersom en människa fortfarande måste tolka det.</p>
<p>Det format som rekommenderas i Sverige heter <strong>Peppol BIS Billing 3</strong>. Tekniskt är det en anpassning (CIUS) av EN 16931-standarden. Peppol är samtidigt själva nätverket - infrastrukturen med accesspunkter - som fakturorna skickas genom mellan olika affärssystem. SFTI (SKR) rekommenderar Peppol BIS Billing 3 för att uppfylla lagkravet mot offentlig sektor.</p>

<h2>ViDA - EU-reformen som ändrar spelplanen</h2>
<p>Det som driver på utvecklingen är EU:s momspaket ViDA (VAT in the Digital Age), som formellt antogs av EU:s ministerråd den 11 mars 2025. ViDA innebär att e-faktura successivt blir standard för handel inom EU. För dig som hantverkare är två datum värda att känna till:</p>
<ul>
<li><strong>1 juli 2030:</strong> Gränsöverskridande B2B-handel mellan företag i olika EU-länder måste ske med strukturerad e-faktura enligt EN 16931, och rapporteras digitalt i nära realtid av både köpare och säljare. Kravet gäller alla momsregistrerade företag oavsett storlek - men bara vid handel över landsgränserna inom EU.</li>
<li><strong>1 januari 2035:</strong> De medlemsländer som redan har ett inhemskt realtidsrapporteringssystem måste harmonisera det med EU:s gränsöverskridande system. Den deadlinen låg ursprungligen på 2028 men har flyttats fram till 2035.</li>
</ul>
<p>Notera skillnaden: 2030-kravet handlar om <em>gränsöverskridande</em> handel. Om du bygger altaner i Skövde och aldrig fakturerar en utländsk kund berörs du inte automatiskt av 2030-datumet.</p>

<h2>Vad händer med rent svenska affärer?</h2>
<p>Frågan de flesta byggföretag ställer är: kommer jag tvingas skicka e-faktura även för helt inhemska jobb, hantverkare till hantverkare i Sverige? Det är ännu inte lag. Trycket började med en gemensam hemställan 2023 från Skatteverket, Bolagsverket och Digg till regeringen. Skatteverket är officiellt positivt till obligatorisk transaktionsbaserad rapportering mellan företag, med motiveringen att det motverkar momskarusellbedrägerier, organiserad brottslighet och penningtvätt.</p>
<p>Den 5 februari 2026 tillsatte regeringen en särskild utredare som ska analysera dels hur ViDA ska införas i svensk lag, dels <strong>om</strong> obligatorisk e-faktura och digital rapportering också ska gälla rent inhemska B2B-affärer. Utredningen ska lämna sitt betänkande senast den 30 november 2027. Ett eventuellt inhemskt krav skulle alltså komma först efter det - realistiskt sett i slutet av 2020-talet eller senare.</p>

<h2>Tidslinjen för en hantverkare - en snabböversikt</h2>
<ol>
<li><strong>Idag (2026):</strong> E-faktura krävs bara när du fakturerar offentlig sektor. Övrig fakturering är fri.</li>
<li><strong>1 juli 2030:</strong> E-faktura blir obligatorisk vid gränsöverskridande B2B-handel inom EU.</li>
<li><strong>Efter 2027 års utredning:</strong> Ett eventuellt krav på e-faktura även för rent svenska B2B-affärer - inte beslutat ännu.</li>
<li><strong>1 januari 2035:</strong> Full harmonisering av inhemska realtidssystem mot EU-systemet.</li>
</ol>
<p>Slutsats för de flesta små byggföretag: du behöver inte agera i panik, men det är klokt att lägga grunden nu så att övergången blir smärtfri när kravet kommer.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att hålla faktureringen strukturerad och korrekt oavsett vilket format kunden vill ha. Du skapar fakturor med rätt uppgifter - moms, ROT-avdrag på arbetskostnaden och, vid B2B mellan byggföretag, texten om omvänd byggmoms - och samlar all fakturahistorik på ett ställe. Eftersom svensk bokföringslag kräver att du sparar underlaget i sju år lagras dina fakturor ordnat och sökbart, vilket gör det enkelt att både följa reglerna idag och ställa om när e-fakturakrav träder i kraft. Vi lovar inte att lösa framtidens Peppol-krav åt dig i förväg, men vi ser till att din grunddata är i ordning den dagen det blir skarpt.</p>

<h2>Vanliga frågor</h2>
<h3>Måste mitt lilla byggföretag skicka e-faktura 2026?</h3>
<p>Nej, inte generellt. Det enda kravet idag är att du måste skicka strukturerad e-faktura när du fakturerar en kommun, region eller statlig myndighet. Fakturerar du bara andra företag och privatpersoner finns inget lagkrav i augusti 2026.</p>

<h3>Räcker det att jag mejlar en PDF-faktura?</h3>
<p>Mot vanliga privat- och företagskunder, ja. Men en PDF räknas inte som e-faktura enligt lagen. Fakturerar du offentlig sektor måste du använda ett strukturerat format som Peppol BIS Billing 3 - en mejlad PDF uppfyller inte kravet.</p>

<h3>Vad betyder ViDA för mig som hantverkare?</h3>
<p>ViDA är EU:s momsreform. Den viktigaste konsekvensen för dig kommer 1 juli 2030, då e-faktura blir obligatorisk vid gränsöverskridande B2B-handel inom EU. Gör du bara jobb åt svenska kunder berörs du inte direkt av det datumet.</p>

<h3>När blir e-faktura obligatorisk för svenska B2B-affärer?</h3>
<p>Det är inte beslutat. En statlig utredning ska lämna sitt förslag senast 30 november 2027, och först därefter kan ett inhemskt krav bli aktuellt. Räkna med slutet av 2020-talet som tidigast.</p>

<h2>Kom igång</h2>
<p>Vänta inte tills kravet är skarpt - se till att din fakturering är korrekt och strukturerad redan nu. Skapa en professionell faktura med vår gratis <a href="/sv/verktyg/faktura-mall">fakturamall</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur ByggExp håller ordning på hela fakturaflödet åt dig.</p>

<p>Relaterat: <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare - komplett guide</a> och <a href="/sv/blog/moms-hantverkare">Moms för hantverkare: så gör du rätt</a>.</p>
`.trim();

const EFAKTURA: BlogPost = {
  _id: "code-e-faktura-obligatorisk-byggforetag",
  title: "E-faktura obligatorisk 2026? Så gäller reglerna för ditt byggföretag",
  slug: "e-faktura-obligatorisk-byggforetag",
  locale: "sv",
  excerpt: "Rubrikerna säger att e-faktura blir obligatorisk, men vad gäller egentligen för en liten hantverkare 2026? Här är läget, tidslinjen och vad du bör göra nu.",
  tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/faktura-preview.webp",
  contentHtml: EFAKTURA_HTML,
  seoTitle: "E-faktura obligatorisk 2026? | ByggExp",
  seoDescription: "Måste ditt lilla byggföretag skicka e-faktura 2026? Vi reder ut Peppol, ViDA och tidslinjen 2026-2030 för hantverkare - och vad som faktiskt gäller idag.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/faktura-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-18T10:00:00.000Z",
  createdAt: "2026-08-18T10:00:00.000Z",
  updatedAt: "2026-08-18T10:00:00.000Z",
};


const UVARDE_HTML = `
<p>U-värdet avgör två saker på en gång: om konstruktionen godkänns i bygglovet och hur mycket isolering du behöver lägga in. Offererar du för tunt underkänns bygget mot BBR – offererar du för tjockt äter du upp din egen marginal. Att kunna räkna U-värde och baklänges bestämma isolertjocklek är därför ren yrkeskunskap, inte teori.</p>

<p>Vill du hoppa över handräkningen kan du testa dig fram direkt i <a href="/sv/verktyg/isolering-kalkylator">vår gratis isolerkalkylator –&gt;</a> och se hur tjockleken påverkar U-värdet innan du skriver offerten.</p>

<h2>Vad U-värde och lambda faktiskt betyder</h2>
<p>Tre storheter styr allt. <strong>Lambda (λ, W/mK)</strong> är materialets värmekonduktivitet – ju lägre, desto bättre isolerar det. Mineralull ligger på 0,033–0,037, EPS-cellplast 0,031–0,038, PIR/PUR så lågt som 0,022–0,024. En träregel leder däremot värme betydligt sämre bort, med λ runt 0,14, vilket är själva anledningen till att reglar blir köldbryggor.</p>
<p><strong>R (värmemotstånd, m²K/W)</strong> är hur mycket ett skikt bromsar värmen: R = d / λ, alltså tjocklek i meter delat med lambda. <strong>U-värdet (W/m²K)</strong> är slutligen U = 1 / R_tot. Lägre U-värde betyder bättre isolering. Den enda regel du aldrig får bryta: du adderar värmemotstånd (R) för skikt i serie – aldrig lambda-värden och aldrig U-värden.</p>

<h2>Formeln steg för steg</h2>
<p>Det totala värmemotståndet är summan av det inre värmeövergångsmotståndet, alla materialskikt och det yttre värmeövergångsmotståndet:</p>
<p><strong>R_tot = Rsi + ΣR_skikt + Rse</strong></p>
<p>Övergångsmotstånden är standardiserade i SS-EN ISO 6946 och beror på byggnadsdelens läge:</p>
<ul>
<li><strong>Yttervägg:</strong> Rsi = 0,13 och Rse = 0,04</li>
<li><strong>Tak:</strong> Rsi = 0,10 och Rse = 0,04</li>
<li><strong>Golv:</strong> Rsi = 0,17 och Rse = 0,04</li>
</ul>
<p>En viktig detalj: vid en väl ventilerad luftspalt sätts Rse till 0,13, och luftspalten samt fasadskiktet utanför räknas inte med alls – luften bakom en ventilerad fasad hjälper inte till att isolera.</p>

<h2>Räkneexempel från verkligheten</h2>
<p>Ta ett tak med 400 mm mineralull, λ = 0,037. Skiktets värmemotstånd blir R = 0,40 / 0,037 ≈ 10,8. Lägg till övergångsmotstånden så blir R_tot ≈ 11,0, och U = 1 / 11,0 ≈ <strong>0,091 W/m²K</strong>. Det klarar med god marginal riktvärdet för tak.</p>
<p>Oftast vill du räkna åt andra hållet: <em>hur tjock isolering krävs för att nå ett mål-U?</em> Då löser du ut tjockleken:</p>
<p><strong>d = λ × (1/U_mål − R_övrigt)</strong></p>
<p>Säg att du siktar på U = 0,13 för samma takkonstruktion, med λ = 0,037 och övriga motstånd (Rsi + Rse + tunna skikt) på ca 0,14. Då blir d = 0,037 × (1/0,13 − 0,14) = 0,037 × (7,69 − 0,14) ≈ 0,279 m, alltså cirka <strong>280 mm mineralull</strong>. Där har du siffran som ska stå i offerten – inte en gissning, utan en beräkning du kan försvara.</p>

<h2>BBR-kraven du måste klara 2026</h2>
<p>Energikraven ligger på tre nivåer som gäller parallellt. Du behöver klara alla tre.</p>
<ol>
<li><strong>Primärenergital (BBR 30, tabell 9:2a):</strong> högst 90 kWh/m² Atemp och år för småhus, 75 för flerbostadshus och 70 för lokaler.</li>
<li><strong>Genomsnittlig värmegenomgångskoefficient Um:</strong> det viktade medelvärdet för hela klimatskärmen får som mest vara 0,30 W/m²K för småhus (golvyta över 50 m²), 0,40 för flerbostadshus och 0,60 för lokaler. Um är den formella isoleringsgränsen – inte enskilda delars U-värde.</li>
<li><strong>Riktvärden per byggnadsdel:</strong> vanligt citerade högsta U-värden för bostäder är yttervägg ≤ 0,18, tak ≤ 0,13, golv ≤ 0,15 och fönster/dörrar/portar ≤ 1,2 W/m²K. Detta är riktvärden för att nå Um-kravet, inte separata tvingande gränser.</li>
</ol>
<p>Kravet på primärenergital ersätter alltså inte U-värdeskraven – de gäller vid sidan av varandra.</p>

<h2>Nya reglerna 1 juli 2026 – vad gäller?</h2>
<p>Boverkets nya bygg- och konstruktionsregler gäller sedan 1 juli 2025. Under en övergångsperiod fram till 30 juni 2026 får byggherren välja mellan gamla BBR/EKS och det nya regelverket – men du får inte blanda dem i samma projekt. Från 1 juli 2026 kan BBR/EKS inte längre tillämpas i nya ärenden.</p>
<p>Här finns en nyans som är lätt att missa: Boverket har ännu <strong>inte</strong> gett ut nya energihushållningsföreskrifter. Kraven på primärenergital, Um och U-värden regleras därför fortsatt i BBR även efter 1 juli 2026, tills nya energiföreskrifter träder i kraft – ett datum som ännu inte är fastställt. De aviserade skärpningarna innebär cirka 15–25 % lägre primärenergital jämfört med BBR 30 plus krav på lokal förnybar energiproduktion, men exakta sifferkrav var inte publicerade i föreskriftsform när detta skrevs. Kort sagt: räkna mot BBR idag, men lägg in marginal om projektet ska stå färdigt en bit in i framtiden.</p>

<h2>Från U-värde till offert</h2>
<p>Så här går du från beräkning till en tjocklek du kan sälja:</p>
<ul>
<li><strong>Utgå från U-målet</strong>, inte från en tjocklek du är van vid. Välj konstruktion efter kravet, inte tvärtom.</li>
<li><strong>Räkna in köldbryggorna.</strong> Reglar med λ ≈ 0,14 sänker prestandan i en regelvägg – ett U-värde räknat på enbart isoleringen blir för optimistiskt.</li>
<li><strong>Ta höjd för marginal.</strong> Lägg dig tydligt under riktvärdet så att en detaljändring på plats inte välter godkännandet.</li>
<li><strong>Skriv U-värdet i offerten.</strong> Ett dokumenterat U-värde är ett säljargument mot kunden och ett bevis mot kontrollansvarig – använd det.</li>
</ul>

<h2>Vanliga misstag (checklista)</h2>
<ul>
<li>Glömda övergångsmotstånd Rsi och Rse – ger ett för lågt (för bra) U-värde på pappret.</li>
<li>Att räkna på deklarerat lambda i stället för dimensionerande värde för fukt och montage.</li>
<li>Köldbryggor via reglar och infästningar som aldrig kommer med i kalkylen.</li>
<li>Att förväxla Um (medelvärdet för hela klimatskärmen) med en enskild byggnadsdels U-värde.</li>
<li>Att blanda gamla BBR/EKS och de nya reglerna i samma projekt under övergångsperioden.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp kan du räkna isolertjocklek och U-värde med isolerkalkylatorn och sedan ta beräkningen vidare in i offerten, där materialåtgången landar i samma underlag. Du får ett spårbart U-värde att bifoga och en materiallista som följer med prissättningen – i stället för att räkna i ett löst kalkylark vid sidan om. Verktyget hjälper dig att jämföra tjocklekar snabbt, men det ersätter inte en fullständig energiberäkning för bygglovet; den delen står fortfarande projektörens beräkning för.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är ett bra U-värde för yttervägg och tak?</h3>
<p>Som riktvärden för bostäder brukar man sikta på yttervägg ≤ 0,18 och tak ≤ 0,13 W/m²K. Det är riktvärden för att klara BBR:s krav på genomsnittligt Um, inte enskilda tvingande gränser – det formella kravet gäller hela klimatskärmens medelvärde.</p>
<h3>Hur räknar jag ut hur tjock isolering jag behöver?</h3>
<p>Lös ut tjockleken ur formeln: d = λ × (1/U_mål − R_övrigt). Sätt in lambda för materialet, ditt mål-U och summan av övriga värmemotstånd (övergångsmotstånd och tunna skikt). Resultatet är tjockleken i meter.</p>
<h3>Kan jag lägga ihop U-värden för olika skikt?</h3>
<p>Nej. Du adderar alltid värmemotstånd (R) för skikt i serie och räknar sedan U = 1/R_tot på slutet. Att addera U-värden eller lambda-värden ger fel resultat.</p>
<h3>Gäller BBR:s energikrav fortfarande 2026?</h3>
<p>Ja. Även om Boverkets nya byggregler gäller sedan 1 juli 2025 har inga nya energihushållningsföreskrifter getts ut ännu. Krav på primärenergital, Um och U-värden regleras därför fortsatt i BBR tills nya energiföreskrifter träder i kraft.</p>

<h2>Kom igång</h2>
<p>Räkna igenom din konstruktion i <a href="/sv/verktyg/isolering-kalkylator">isolerkalkylatorn</a> och ta fram en tjocklek du kan stå för. Vill du se hur beräkning, materiallista och offert hänger ihop i praktiken kan du <a href="/sv/contact">boka en demo</a> så visar vi flödet från U-värde till färdig offert.</p>

<p>Relaterat: <a href="/sv/blog/rakna-material-till-bygget">Räkna material till bygget – så får du åtgången rätt</a>.</p>
`.trim();

const UVARDE: BlogPost = {
  _id: "code-berakna-u-varde-isolering",
  title: "Beräkna U-värde och isolertjocklek – så klarar du BBR-kraven och offererar rätt",
  slug: "berakna-u-varde-isolering",
  locale: "sv",
  excerpt: "Lär dig räkna U-värde och isolertjocklek steg för steg – så klarar konstruktionen BBR-kraven utan att du överisolerar bort marginalen i offerten.",
  tag: "Byggkalkyl",
  coverImageUrl: "/landing/verktyg/isolering-preview.webp",
  contentHtml: UVARDE_HTML,
  seoTitle: "Beräkna U-värde isolering | ByggExp",
  seoDescription: "Så räknar du ut U-värde och isolertjocklek för att klara BBR-kraven. Formel, räkneexempel och riktvärden för vägg, tak och golv 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/isolering-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-18T10:30:00.000Z",
  createdAt: "2026-08-18T10:30:00.000Z",
  updatedAt: "2026-08-18T10:30:00.000Z",
};

// Keyed by locale — Swedish-market articles only exist on sv.
const CODE_ARTICLES: Record<BlogLocale, BlogPost[]> = {
  sv: [
    PASLAG,
    VATRUM,
    EFAKTURA,
    UVARDE,
    MATERIALKALKYL,
    FAKTURA,
    TIDRAPPORTERING,
    MOMS,
    TIMPRIS,
    OFFERT,
    BYGGDAGBOK,
    EGENKONTROLL,
    ATA,
    PERSONALLIGGARE,
    ROT,
    ID06,
    BEMANNING,
    AB04,
    AMP,
    ATTESTERING,
    FRANVARO,
    HETA_ARBETEN,
    SLUTBESIKTNING,
  ],
  en: [],
  ru: [],
};

export function getCodeArticles(locale: BlogLocale): BlogPost[] {
  return CODE_ARTICLES[locale] ?? [];
}

export function getCodeArticle(
  locale: BlogLocale,
  slug: string,
): BlogPost | null {
  return getCodeArticles(locale).find((post) => post.slug === slug) ?? null;
}

export function isCodeArticleSlug(slug: string): boolean {
  return Object.values(CODE_ARTICLES).some((posts) =>
    posts.some((post) => post.slug === slug),
  );
}
