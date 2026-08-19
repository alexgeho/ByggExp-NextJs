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


const KUNDEN_HTML = `
<p>Obetalda fakturor är ett av de vanligaste kassaflödesproblemen för hantverkare och byggföretag. Du har gjort jobbet, materialet är betalt – men pengarna kommer inte in. Den goda nyheten är att det finns en tydlig trappa att gå uppför: från en vänlig påminnelse, via dröjsmålsränta och förseningsersättning, till Kronofogden och i sista hand tingsrätt. Reglerna skiljer sig beroende på om kunden är privatperson (konsument) eller företag, och det påverkar både vilka avgifter du får ta ut och hur en tvist prövas.</p>

<p>Grunden för att kunna driva in en fordran är att fakturan är rätt från början – med tydlig förfallodag, specifikation och korrekta uppgifter. Använd gärna <a href="/sv/verktyg/faktura-mall">vår gratis faktura-mall -&gt;</a> så att varje faktura innehåller det som krävs för att du ska kunna ta nästa steg om betalningen uteblir.</p>

<h2>Steg 1 – Betalningspåminnelse och dröjsmålsränta</h2>
<p>Första steget när förfallodagen passerat är en skriftlig betalningspåminnelse. Mot en konsument får du ta ut en lagstadgad påminnelseavgift på högst 60 kr per påminnelse – men bara om avgiften faktiskt uppstått och om det avtalats eller framgår tydligt. Avgiften är momsfri.</p>
<p>Du har också rätt till dröjsmålsränta. Enligt räntelagen är den lagstadgade dröjsmålsräntan Riksbankens referensränta plus 8 procentenheter. För första halvåret 2026 är referensräntan 2 %, vilket ger en dröjsmålsränta på 10 % per år. Referensräntan sätts om av Riksbanken den 1 januari och 1 juli varje år, så räntesatsen kan ändras mitt under ett projekt.</p>
<p>En viktig tidsregel: du får inte ta ut dröjsmålsränta förrän 30 dagar har gått från att fakturan skickades – om du inte har avtalat en förfallodag i förväg. Sätter du en tydlig förfallodag på fakturan börjar räntan löpa från den dagen. På fakturor till konsumenter måste det dessutom framgå tydligt att dröjsmålsränta tas ut. Passa på att sätta rätt betalvillkor redan i din <a href="/sv/verktyg/offert-mall">offert-mall</a>.</p>
<p>Ett ofta förbisett skäl att skicka en skriftlig påminnelse: den bryter preskriptionen. Ett skriftligt krav till gäldenären är ett preskriptionsavbrott som startar om preskriptionstiden.</p>

<h2>Steg 2 – Förseningsersättning och inkasso</h2>
<p>Är kunden ett företag (näringsidkare till näringsidkare, eller mot myndighet) har du en automatisk rätt till förseningsersättning på 450 kr per faktura i samma sekund som den förfaller. Det krävs inget avtal, ingen påminnelse och inget separat krav – förutsatt att fakturan hade minst 30 dagars betalningsvillkor. De 450 kronorna täcker dina påminnelse- och indrivningskostnader upp till det beloppet.</p>
<p>Hjälper inte påminnelserna kan du lämna ärendet till ett inkassobolag. Då tillkommer en lagstadgad inkassoavgift på 180 kr, och 170 kr om ni lägger upp en amorterings- eller avbetalningsplan. Även dessa avgifter är tak och momsfria – du får bara ta ut dem om de faktiskt uppstått. Inkasso lönar sig ofta eftersom ett inkassokrav har större tyngd än en vanlig påminnelse och signalerar att nästa steg är Kronofogden.</p>

<h2>Steg 3 – Betalningsföreläggande hos Kronofogden</h2>
<p>Betalar kunden fortfarande inte, och saknar en reell invändning, är betalningsföreläggande hos Kronofogden den enklaste vägen. Ansökningsavgiften är 300 kr och kan läggas på skulden. Om gäldenären inte bestrider inom fristen – vanligtvis omkring två veckor – meddelar Kronofogden ett utslag, som är ett verkställbart beslut du kan driva in med.</p>
<p>Tänk på att Kronofogden inte är en domstol och inte prövar om ditt krav är riktigt. Myndigheten kontrollerar bara om kunden invänder eller inte. Betalningsföreläggande passar därför bäst när kunden inte har någon egentlig invändning utan helt enkelt inte betalar.</p>

<h2>Steg 4 – När kunden bestrider fakturan</h2>
<p>Bestrider kunden betalningsföreläggandet måste Kronofogden släppa ärendet – de kan inte avgöra vem som har rätt. Ärendet stängs, eller så begär du överlämnande till tingsrätt för en vanlig civilprocess. Så länge gäldenären bestrider hela kravet får hen ingen betalningsanmärkning från Kronofogdens process.</p>
<p>Vanliga invändningar är fel i arbetet, att priset är för högt eller att arbetet inte var beställt – ofta gäller det tilläggsarbeten. Här avgör din dokumentation. En konsument har rätt att kräva en specificerad faktura som visar hur priset fördelar sig på timmar och material, vilket blir centralt när kunden bestrider på prisgrund. Löpande dokumentation, godkända ÄTA-arbeten och en tydlig specifikation är det som gör att du står stark i en tvist. Läs mer i vår guide om <a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a>.</p>

<h2>Steg 5 – ARN och tingsrätt</h2>
<p>Här är en missuppfattning värd att räta ut: du som hantverkare kan inte anmäla en kund till ARN (Allmänna reklamationsnämnden) för att få betalt. ARN prövar bara ärenden där konsumenten är den som klagar mot ett företag. ARN är alltså kundens väg mot dig, inte tvärtom – och besluten är icke-bindande rekommendationer. Din väg är i stället domstol.</p>
<p>Storleken på tvisten avgör kostnadsrisken. Är det omtvistade beloppet högst ett halvt prisbasbelopp – 29 600 kr år 2026 – hanteras det som ett förenklat tvistemål (FT-mål). Ansökningsavgiften vid tingsrätten är 900 kr och de ersättningsgilla rättegångskostnaderna är starkt begränsade, i praktiken avgiften plus ungefär en timmes juridisk rådgivning. Förlorarens kostnadsrisk är alltså liten.</p>
<p>Överstiger beloppet 29 600 kr blir det ett ordinärt tvistemål med fullt rättegångskostnadsansvar – den som förlorar betalar motpartens rättegångskostnader, som kan bli betydligt större än själva fakturan. Det är huvudskälet att hålla omtvistade summor väl dokumenterade och att överväga en förlikning när risken är stor.</p>

<h2>Förebygg problemet</h2>
<ul>
<li><strong>Tydligt avtal och offert.</strong> Skriftlig offert med pris, omfattning och betalvillkor minskar utrymmet för tvister.</li>
<li><strong>Delfakturering och a conto.</strong> Fakturera i etapper så att du aldrig ligger ute med hela beloppet.</li>
<li><strong>Kreditupplysning på nya kunder.</strong> Särskilt inför större jobb mot företag.</li>
<li><strong>Korta betalvillkor och tydlig förfallodag.</strong> Då börjar dröjsmålsräntan löpa direkt.</li>
<li><strong>Fakturera i tid.</strong> En fordran mot en konsument preskriberas efter 3 år, mot ett företag efter 10 år. Ett skriftligt krav bryter preskriptionen.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att bygga fakturaunderlaget som håller hela vägen. Tidrapportering och material knyts till projektet så att timmar och kostnader finns dokumenterade om kunden bestrider. Du skapar specificerade fakturor med förfallodag och betalvillkor direkt från underlaget, och ÄTA-arbeten kan godkännas löpande så att tilläggen inte blir en tvist i efterhand. ByggExp är inget inkasso- eller juristbolag – men ju bättre din dokumentation är, desto enklare blir varje steg i trappan ovan.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket dröjsmålsränta får jag ta ut?</h3>
<p>Den lagstadgade dröjsmålsräntan är Riksbankens referensränta plus 8 procentenheter. Under första halvåret 2026 är referensräntan 2 %, alltså 10 % per år. Räntan får normalt tas ut först 30 dagar efter att fakturan skickats, om ingen förfallodag avtalats i förväg.</p>
<h3>Kan jag anmäla en kund som inte betalar till ARN?</h3>
<p>Nej. ARN prövar bara ärenden där en konsument klagar på ett företag. Som hantverkare kan du inte använda ARN för att få betalt – din väg är betalningsföreläggande hos Kronofogden och därefter tingsrätt om kunden bestrider.</p>
<h3>Vad händer om kunden bestrider betalningsföreläggandet?</h3>
<p>Då måste Kronofogden släppa ärendet, eftersom myndigheten inte prövar om kravet är riktigt. Vill du driva saken vidare begär du överlämnande till tingsrätt för en civilprocess. Så länge kunden bestrider hela kravet får hen ingen betalningsanmärkning från processen.</p>
<h3>Har jag som företag rätt till ersättning direkt när fakturan förfaller?</h3>
<p>Ja. Mot ett annat företag eller en myndighet har du automatisk rätt till 450 kr i förseningsersättning så snart fakturan förfaller, förutsatt att den hade minst 30 dagars betalningsvillkor. Det krävs varken avtal, påminnelse eller separat krav.</p>

<h2>Kom igång</h2>
<p>Börja med grunden: en korrekt faktura med förfallodag och specifikation. Skapa din med <a href="/sv/verktyg/faktura-mall">vår gratis faktura-mall</a>, och sätt rätt betalvillkor redan i offerten med <a href="/sv/verktyg/offert-mall">offert-mallen</a>. Vill du se hur ByggExp knyter tid, material och ÄTA till ett fakturaunderlag som håller i en tvist? <a href="/sv/contact">Boka en demo här</a>.</p>
<p>Relaterat: <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a> och <a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a>.</p>
`.trim();

const KUNDEN: BlogPost = {
  _id: "code-"+"kunden-betalar-inte-fakturan",
  title: "Kunden betalar inte fakturan – så driver du in pengarna som hantverkare",
  slug: "kunden-betalar-inte-fakturan",
  locale: "sv",
  excerpt: "En steg-för-steg-trappa från vänlig påminnelse till betalningsföreläggande och tingsrätt när kunden inte betalar din faktura.",
  tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/faktura-preview.webp",
  contentHtml: KUNDEN_HTML,
  seoTitle: "Kunden betalar inte fakturan | ByggExp",
  seoDescription: "Obetald eller bestriden faktura? Så går du från påminnelse och dröjsmålsränta till Kronofogden och tingsrätt – konkret handlingsplan för hantverkare.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/faktura-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-18T11:00:00.000Z",
  createdAt: "2026-08-18T11:00:00.000Z",
  updatedAt: "2026-08-18T11:00:00.000Z",
};


const MANGD_HTML = `
<p>Ett anbud vinns eller förloras på hur väl mängderna är beräknade och prissatta. En slarvig mängdförteckning gör att du antingen räknar bort dig och förlorar jobbet, eller vinner det men blöder pengar under hela projektet. En noggrann förteckning gör tvärtom: den ger dig kontroll på varje post, skyddar dig när mängderna ändras och gör anbudet jämförbart med konkurrenternas. Den här guiden går igenom vad en mängdförteckning är, skillnaden mellan oprissatt och prissatt, hur den byggs upp kolumn för kolumn och hur du tar den vidare till kalkyl och offert.</p>
<p><a href="/sv/verktyg/mangdforteckning-mall">Skapa en mängdförteckning med vår gratis mall (PDF & Excel) -&gt;</a></p>

<p>Vill du komma igång direkt? Använd <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a> för att strukturera posterna och ta din prissatta mängdförteckning hela vägen till ett färdigt anbud.</p>

<h2>Vad är en mängdförteckning?</h2>
<p>En mängdförteckning (MF) är en handling där de arbeten som ingår i ett projekt förtecknas post för post, oftast med mängder och med hänvisning till AMA-koder eller teknisk beskrivning. Det är ett centralt anbuds- och kontraktsdokument som används av beställare, konsulter och entreprenörer genom hela byggprocessen. Poster refererar till standardiserade koder och rubriker i AMA (Allmän material- och arbetsbeskrivning), medan MER (Mät- och ersättningsregler, till exempel MER Anläggning) styr hur arbeten ska mätas och ersättas och hur parterna ska skriva i förteckningen.</p>
<p>Metoden passar bäst för färdigprojekterade utförandeentreprenader enligt AB 04, där omfattningen är känd. Vid totalentreprenad enligt ABT 06 är den slutliga utformningen ofta oklar, och för ramavtal leder metoden lätt till fiktiva mängder och tvister.</p>

<h2>Oprissatt vs prissatt mängdförteckning</h2>
<p>Skillnaden avgör vem som räknar. Den <strong>oprissatta</strong> mängdförteckningen tas normalt fram av beställaren eller konsulten. Den innehåller poster och mängder men inga priser – det är ditt underlag. Den <strong>prissatta</strong> mängdförteckningen är exakt samma dokument, men med dina à-priser, delsummor och totalsumma ifyllda. Den utgör i praktiken ditt anbud.</p>
<p>Lämna aldrig tomma poster. En post utan angiven prissättning betraktas i regel som en nollpost utan värde om den inte uttryckligen hanteras – vilket betyder att du bundit dig att utföra arbetet gratis. Möter du en post du inte kan prissätta säkert, ta upp det som en fråga under anbudstiden i stället för att gissa eller lämna den blank.</p>

<h2>Så är en mängdförteckning uppbyggd</h2>
<p>En korrekt mängdförteckning enligt MER byggs upp med minst fyra kolumner: enhet, mängd, à-pris och summa. Varje post kopplas till mät- och ersättningsregler på lägsta möjliga kodnivå – ersättning ska begäras på lägsta möjliga kodnivå. En praktisk radstruktur ser ut så här:</p>
<ul>
<li><strong>Post / AMA-kod</strong> – referens till teknisk beskrivning eller AMA-rubrik.</li>
<li><strong>Beskrivning</strong> – kort text om vad posten omfattar.</li>
<li><strong>Enhet</strong> – m, m², m³, st, kg, tim.</li>
<li><strong>Mängd</strong> – uppmätt eller beräknad kvantitet.</li>
<li><strong>À-pris</strong> – allt inkluderat: inköp, leverans, montage, arbete, påslag och vinst.</li>
<li><strong>Summa</strong> – mängd × à-pris.</li>
</ul>
<p>Exempel: posten "Rivning innervägg, gips på regel" med enhet m², mängd 42, à-pris 185 kr ger summa 7 770 kr. Nästa post "Ny gipsvägg, dubbel skiva" med enhet m², mängd 42, à-pris 640 kr ger 26 880 kr. Delsummorna adderas till en totalsumma längst ner – det är den siffra beställaren jämför mot övriga anbud.</p>

<h2>Från mängdförteckning till kalkyl och offert</h2>
<p>Arbetsflödet är sig ganska likt oavsett projektstorlek:</p>
<ol>
<li>Ta fram mängder ur ritning, beskrivning eller BIM-modell. Behöver du snabbt räkna ytor för golv, väggar eller tak använder du <a href="/sv/verktyg/kvadratmeter-kalkylator">vår kvadratmeterkalkylator</a>.</li>
<li>Sätt à-priser per post: material, arbetstimmar, underentreprenörer och påslag.</li>
<li>Summera delsummor till totalsumma och kontrollera mot din interna kalkyl.</li>
<li>Överför posterna till offert eller anbud i den form beställaren begärt.</li>
</ol>
<p>Poängen är att mängdförteckningen och kalkylen hänger ihop: samma poster som du räknar internt ska kunna spåras rakt igenom till det du lämnar in. Då blir efterkalkylen enkel och du ser var pengarna faktiskt hamnade.</p>

<h2>Fast pris, löpande räkning, à-pris eller mängdkontrakt?</h2>
<p>Ersättningsformen avgör vad mängdförteckningen betyder i praktiken:</p>
<ul>
<li><strong>Fast pris</strong> – en förutbestämd totalsumma. Mängdförteckningen ligger bakom priset men slutsumman ändras inte med mängden.</li>
<li><strong>Löpande räkning</strong> – à-priser eller timpris utan förutbestämt totalpris.</li>
<li><strong>Takpris</strong> – löpande räkning men med ett avtalat tak.</li>
<li><strong>Mängdkontrakt</strong> – en mellanform med fasta à-priser men rörlig slutsumma efter uppmätt mängd. Här är mängdförteckningen kärnan i avtalet.</li>
</ul>
<p>Ett à-pris ska alltid räknas allt inkluderat: inköp, leverans, montage, arbete och vinst. Det är den formen som gör mängdkontraktet rättvist för båda parter.</p>

<h2>Mängdreglering och ÄTA</h2>
<p>Vad händer när mängderna ändras? Här är den avgörande skillnaden: ökning eller minskning av mängder inom förteckningens ramar räknas <strong>inte</strong> som ÄTA-arbete. Det regleras i stället som mängdreglering och ersätts efter faktiskt uppmätt mängd. Helt nytt, ej kontrakterat arbete beställs och ersätts däremot som ÄTA.</p>
<p>À-priserna i mängdförteckningen gäller inom en mängdavvikelse på ±25 %, förutsatt att avvikelsen påverkar kontraktssumman med minst 0,5 %. Vid större avvikelse kan endera parten begära att à-priset omförhandlas utifrån jämförbara prestationer (AB 04 kap. 6 § 6). Det här skyddar dig: ett väl satt à-pris håller även om mängden justeras, så länge avvikelsen ligger inom ramen.</p>

<h2>2026: AB 04/ABT 06 gäller fortfarande</h2>
<p>AB 04 och ABT 06 är fortfarande gällande standardavtal 2026. De aviserade nya avtalen AB 25/ABPU 25 – som förtydligar och stärker mängdkontraktets ställning och ersätter ÄTA-begreppet med "ändring av entreprenaden" (inklusive avvikande eller utelämnad mängd) – är försenade. Per juni 2026 anger BKK preliminär lansering under senare delen av 2027, och namnen kan bli AB 27/ABPU 27. Slutsats: bygg din mängdförteckning på AB 04 i dag, men håll koll på hur mängdregleringen förändras när det nya regelverket väl kommer.</p>

<h2>Vanliga misstag som kostar dig jobbet</h2>
<ul>
<li><strong>Streckposter på för hög kodnivå.</strong> Beställare som anger otillåtna streckposter (tre eller fyra streck) tvingar anbudsgivare till spekulativ prissättning. Begär förtydligande i stället för att chansa.</li>
<li><strong>Tomma poster.</strong> Poster utan pris blir nollposter – du riskerar att utföra arbetet utan ersättning.</li>
<li><strong>À-priser som inte täcker allt.</strong> Glömmer du leverans, montage eller påslag urholkas marginalen på varje enhet.</li>
<li><strong>Ingen koppling mellan mängdförteckning och kalkyl.</strong> Utan spårbarhet vet du inte var jobbet gick plus eller minus.</li>
<li><strong>Fel avtalsform.</strong> Mängdkontrakt på en totalentreprenad med oklar utformning skapar tvister om fiktiva mängder.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du din prissatta mängdförteckning post för post och tar den vidare till ett färdigt anbud utan att skriva om allt på nytt. Du sätter enhet, mängd, à-pris och summa per rad, och totalsumman räknas automatiskt. Ytor och mängder kan du ta fram med kalkylverktygen och föra in direkt, så att samma poster följer med hela vägen från kalkyl till offert. Det ersätter inte din branschkunskap om AMA och MER – men det tar bort dubbelarbetet och räknefelen mellan underlag, kalkyl och anbud.</p>

<h2>Vanliga frågor</h2>
<h3>Vad kostar det att göra en mängdförteckning?</h3>
<p>Själva mallen kostar ingenting – du kan använda vår offertmall gratis. Kostnaden ligger i den tid det tar att mäta mängder och sätta korrekta à-priser. Ju bättre underlag och verktyg, desto snabbare går det och desto mindre risk för dyra räknefel.</p>
<h3>Måste jag följa AMA och MER?</h3>
<p>Det beror på förfrågan. När beställaren hänvisar till AMA och MER i handlingarna gäller de reglerna för hur poster kodas, mäts och ersätts, och då ska din prissatta förteckning följa samma struktur. Även utan formell koppling är AMA-rubriker en bra ordning att bygga posterna efter.</p>
<h3>Vad är skillnaden mellan mängdförteckning och kalkyl?</h3>
<p>Kalkylen är din interna beräkning av vad jobbet kostar dig – material, timmar, UE och påslag. Mängdförteckningen är det formaliserade dokumentet, ofta enligt beställarens mall, med poster och à-priser som lämnas in som anbud. De ska hänga ihop, men mängdförteckningen är den utåtriktade handlingen.</p>
<h3>Vem ansvarar för felaktiga mängder?</h3>
<p>I en oprissatt förteckning som beställaren tagit fram är det beställaren som svarar för de angivna mängderna, och avvikelser hanteras som mängdreglering efter faktiskt uppmätt mängd. Därför är à-priset så viktigt: det håller inom ±25 %-ramen även om den verkliga mängden skiljer sig från den angivna.</p>

<h2>Kom igång</h2>
<p>Sätt upp din prissatta mängdförteckning i <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a> och räkna fram ytorna med <a href="/sv/verktyg/kvadratmeter-kalkylator">kvadratmeterkalkylatorn</a>. Vill du se hela flödet från mängder till färdigt anbud i ett verktyg? <a href="/sv/contact">Boka en demo</a> så visar vi hur det fungerar för just din verksamhet.</p>
<p>Relaterat: <a href="/sv/blog/skriva-offert">Skriva offert – så gör du</a> och <a href="/sv/blog/rakna-material-till-bygget">Räkna material till bygget</a>.</p>
`.trim();

const MANGD: BlogPost = {
  _id: "code-"+"mangdforteckning-bygg",
  title: "Mängdförteckning bygg – så gör du en mall som vinner jobbet",
  slug: "mangdforteckning-bygg",
  locale: "sv",
  excerpt: "En praktisk genomgång av mängdförteckningen – från oprissatt underlag till prissatt anbud, med mall, kolumnstruktur och kopplingen till kalkyl och offert.",
  tag: "Byggkalkyl",
  coverImageUrl: "/landing/verktyg/offert-preview.webp",
  contentHtml: MANGD_HTML,
  seoTitle: "Mängdförteckning mall bygg | ByggExp",
  seoDescription: "Så gör du en oprissatt och prissatt mängdförteckning post för post – med mall, kolumner, à-priser och kopplingen till kalkyl och offert.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/offert-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-18T11:30:00.000Z",
  createdAt: "2026-08-18T11:30:00.000Z",
  updatedAt: "2026-08-18T11:30:00.000Z",
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


const BETVILLK_HTML = `
<p>De flesta byggföretag som får likviditetsproblem har inte för få jobb — de har för lång kredittid. Varje faktura med 30, 60 eller 90 dagars betalningstid är en räntefri lånefinansiering du ger din beställare, samtidigt som löner, material och underentreprenörer ska betalas i tid. Rätt betalningsvillkor är därför inte administrativt pyssel, det är kassaflödesskydd. Här går vi igenom vad lagen faktiskt kräver 2026 och hur du sätter villkor som håller pengarna i rörelse — mot både professionella beställare och privatpersoner.</p>

<p>Ett tydligt underlag börjar med rätt uppsatt faktura. Sätt villkoren en gång i <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall &rarr;</a> så att förfallodatum, dröjsmålsränta och avgifter finns med på varje utskick.</p>

<h2>Vad lagen faktiskt kräver 2026</h2>
<p>Botten under alla avtal är räntelagen (1975:635). Den ger dig rätt till <strong>dröjsmålsränta</strong> även om du inte skrivit ett ord om det på fakturan. Räntan är <strong>referensräntan + 8 procentenheter</strong> per år och gäller lika mot företag som mot privatpersoner. Under 2026 ligger referensräntan runt 2 procent, vilket ger en dröjsmålsränta på ungefär 10 procent per år.</p>
<p>När räntan börjar löpa beror på om ni avtalat ett förfallodatum. Har ni satt ett datum i förväg löper räntan automatiskt från förfallodagen — ingen påminnelse behövs (§ 3). Har ni inte avtalat något datum får du kräva ränta först 30 dagar efter att du skickat fakturan (§ 4), och gäldenären är inte skyldig ränta innan fakturan nått fram. Poängen: villkoren du glömmer skriva ut ger dig ändå lagens skydd — men de villkor du skriver ut ger dig kontrollen.</p>

<h2>B2B: beställare, generalentreprenör och offentlig köpare</h2>
<p>Mellan näringsidkare förfaller en faktura senast 30 dagar efter krav (§ 2 a). Det viktiga: en längre kredittid gäller bara om <strong>du som säljare uttryckligen har godkänt den</strong>. Villkor som ensidigt tvingar dig att vänta längre är ogiltiga. Det betyder att en generalentreprenör inte kan pressa in 60 eller 90 dagar i sina inköpsvillkor och göra det bindande utan att du aktivt accepterat — och du bör tänka två gånger innan du gör det.</p>
<p>Mot offentlig beställare — kommun, region eller stat — är taket ännu hårdare: <strong>max 30 dagars betalningstid</strong>, och den går inte att förlänga genom avtal. Ränta löper efter 30 dagar oavsett vad som står i upphandlingsunderlaget.</p>
<p>Långa kredittider är särskilt farliga i entreprenader där du ligger ute med material och lön i månader. Två motmedel: håll kredittiden kort (10–20 dagar där du kan) och fakturera löpande i stället för allt på slutet. <strong>A conto-fakturering eller delfakturering</strong> mot uppnådda etapper flyttar in pengarna i takt med att kostnaderna uppstår, i stället för att samla all risk i en slutfaktura.</p>

<h2>Privatperson: konsumentjobbet</h2>
<p>Jobb åt privatpersoner styrs av konsumenttjänstlagen (1985:716). Här finns ingen 30-dagarsspärr som i B2B — betalningsvillkoren är fritt avtalbara. Utnyttja det: sätt en <strong>kort kredittid på 10–15 dagar</strong>. Samma dröjsmålsränta (referensränta + 8 procentenheter) gäller mot konsument, men den lagstadgade <strong>förseningsersättningen på 450 kr kan du inte ta ut av en privatperson</strong> — den är bara för B2B och offentliga köpare.</p>
<p>Tänk också på att ROT-avdraget bara påverkar arbetskostnaden. ROT-avdrag är 30 procent av arbetskostnaden, max 50 000 kr per person och år — men material och den andra halvan av arbetet ska in på ditt konto snabbt, oavsett hur länge Skatteverket dröjer med utbetalningen. Räkna ut kundens del rätt direkt med <a href="/sv/verktyg/rot-avdrag-kalkylator">vår ROT-avdragskalkylator &rarr;</a>. Fakturera dessutom <strong>direkt vid slutbesiktning eller godkänt arbete</strong> — inte en vecka senare när minnet av jobbet börjat blekna.</p>

<h2>Avgifter du får ta ut när betalning uteblir</h2>
<p>När kunden inte betalar finns flera lagstadgade avgifter att luta sig mot. Beloppen är tak — du kan inte avtala om högre, och klausuler som försöker ta bort gäldenärens ränteskyldighet eller höja avgifterna är ogiltiga i affärsförhållanden.</p>
<ul>
<li><strong>Förseningsersättning 450 kr</strong> — endast B2B och offentlig köpare. Får tas ut automatiskt, ingen påminnelse krävs. Gäller inte mot konsument.</li>
<li><strong>Påminnelseavgift 60 kr</strong> — får bara tas ut om det avtalades när skulden uppstod. Skriv därför in villkoret på fakturan.</li>
<li><strong>Inkassokrav 180 kr</strong> — den lagstadgade ersättningen för ett formellt inkassokrav.</li>
<li><strong>Amorteringsplan 170 kr</strong> — om ni kommer överens om avbetalning.</li>
</ul>

<h2>Påminnelserutin som skyddar kassan</h2>
<p>En förutsägbar rutin gör att du agerar innan skulden hinner bli gammal. Konkret tidslinje:</p>
<ol>
<li><strong>Dag 0:</strong> Faktura med tydligt förfallodatum, angiven kredittid och dröjsmålsränta.</li>
<li><strong>Dag +1 efter förfallodag:</strong> Vänlig påminnelse. Ofta räcker det — många missar bara datumet.</li>
<li><strong>Dag +8:</strong> Formellt inkassokrav med påminnelseavgift (60 kr om avtalat), inkassokostnad (180 kr) och upplupen dröjsmålsränta.</li>
<li><strong>Dag +15:</strong> Skicka till inkasso eller ansök om betalningsföreläggande hos Kronofogden.</li>
</ol>
<p>Det avgörande är att rutinen körs automatiskt, inte när du råkar komma ihåg det. Automatisera påminnelserna i faktureringssystemet och skriv villkoren direkt på fakturan — då blir varje steg juridiskt vattentätt utan extra arbete. Läs mer om nästa steg i <a href="/sv/blog/kunden-betalar-inte-fakturan">kunden betalar inte fakturan</a>.</p>

<h2>Checklista: villkor som hör hemma på varje faktura</h2>
<ul>
<li>Förfallodatum (ett faktiskt datum, inte bara "30 dagar")</li>
<li>Kredittid i antal dagar</li>
<li>Dröjsmålsränta: referensränta + 8 procentenheter</li>
<li>Påminnelseavgift 60 kr — avtalad redan här</li>
<li>Referens eller ordernummer från beställaren</li>
<li>ROT-uppdelning: arbetskostnad, kundens del efter avdrag, material</li>
<li>Organisationsnummer eller personnummer, momsnummer</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp sätter du upp dina standardvillkor en gång — kredittid, förfallodatum, dröjsmålsränta och påminnelseavgift — och de följer med på varje faktura du skapar. Systemet räknar ut ROT-uppdelningen åt dig och håller isär arbetskostnad och material så att kundens del blir rätt. Uteblir betalningen ligger påminnelserutinen redo att skickas i tur och ordning, och underlaget sparas i de sju år bokföringen kräver. Ingen magi — bara att villkoren blir konsekventa och att du slipper glömma stegen som faktiskt hämtar in pengarna.</p>

<h2>Vanliga frågor</h2>
<h3>Hur hög är dröjsmålsräntan 2026?</h3>
<p>Dröjsmålsräntan är referensräntan plus 8 procentenheter per år. Referensräntan ligger runt 2 procent under 2026, vilket ger en dröjsmålsränta på ungefär 10 procent per år. Samma nivå gäller mot både företag och privatpersoner.</p>
<h3>Kan en stor beställare tvinga på mig 60 dagars betalningstid?</h3>
<p>Nej, inte utan ditt samtycke. Mellan näringsidkare förfaller fakturan senast 30 dagar efter krav, och en längre kredittid gäller bara om du som säljare uttryckligen godkänt den. Mot kommun, region och stat är taket 30 dagar och kan inte förlängas alls.</p>
<h3>Får jag ta ut förseningsersättning av en privatperson?</h3>
<p>Nej. Den lagstadgade förseningsersättningen på 450 kr gäller bara i affärsförhållanden och mot offentliga köpare. Mot en privatperson får du ta ut dröjsmålsränta och lagstadgade påminnelse- och inkassoavgifter, men inte de 450 kronorna.</p>
<h3>Måste jag skicka en påminnelse innan räntan börjar löpa?</h3>
<p>Inte om ni avtalat ett förfallodatum i förväg — då löper räntan automatiskt från förfallodagen. Har ni inte avtalat något datum får du kräva ränta först 30 dagar efter att fakturan skickats.</p>

<h2>Kom igång</h2>
<p>Standardisera dina betalningsvillkor en gång så sparar du dagar av kredittid på varje jobb. Bygg din faktura med rätt villkor i <a href="/sv/verktyg/faktura-mall">vår fakturamall</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur automatisk fakturering och påminnelserutin fungerar i praktiken.</p>

<p>Relaterat: <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a> &middot; <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a></p>
`.trim();

const BETVILLK: BlogPost = {
  _id: "code-"+"betalningsvillkor-faktura-bygg",
  title: "Betalningsvillkor på fakturan: så skyddar du kassan mot beställare och privatperson",
  slug: "betalningsvillkor-faktura-bygg",
  locale: "sv",
  excerpt: "Så sätter du betalningsvillkor som håller pengarna i rörelse — kredittid, dröjsmålsränta och en påminnelserutin som fungerar mot både B2B-beställare och privatkunder.",
  tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/faktura-preview.webp",
  contentHtml: BETVILLK_HTML,
  seoTitle: "Betalningsvillkor faktura bygg | ByggExp",
  seoDescription: "Rätt betalningsvillkor för hantverkare: kortare kredittid, dröjsmålsränta och påminnelserutin som skyddar likviditeten mot både beställare och privatperson.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/faktura-preview.webp`,
  canonicalUrl: "",
  noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T13:00:00.000Z", createdAt: "2026-08-18T13:00:00.000Z", updatedAt: "2026-08-18T13:00:00.000Z",
};


const KONTRAVG_HTML = `
<p>Skatteverket gör oanmälda kontrollbesök på byggarbetsplatser, och de dyker upp utan förvarning. På några minuter jämför inspektören vilka som faktiskt arbetar på plats mot vad personalliggaren visar. Stämmer det inte – eller om liggaren inte ens finns tillgänglig – börjar avgifterna ticka direkt, per person. Det mesta av detta är fullt undvikbart. En digital liggare som alltid är uppdaterad och kan visas på sekunden gör skillnaden mellan en normal arbetsdag och en oväntad räkning på tiotusentals kronor. I den här artikeln går vi igenom exakt vad en miss kostar 2026 och hur du bygger bort risken.</p>

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
<ul>
<li><strong>Arbetets art:</strong> ABS 18 = nybyggnad/tillbyggnad av småhus. Hantverkarformuläret 17 = reparation/ombyggnad av befintligt.</li>
<li><strong>Lagstöd:</strong> ABS 18 = KtjL §§ 51–61 (småhusregler) utöver de allmänna reglerna. Hantverkarformuläret 17 = KtjL:s allmänna regler.</li>
<li><strong>Kontraktsblankett:</strong> ABS 18 = Entreprenadkontrakt (ABS 18). Hantverkarformuläret 17 = formuläret självt.</li>
<li><strong>Slutbesiktning:</strong> ABS 18 = reglerad, kan krävas av båda parter. Hantverkarformuläret 17 = ingen obligatorisk.</li>
<li><strong>Innehållande av betalning:</strong> ABS 18 = upp till 10 % till godkänd slutbesiktning. Hantverkarformuläret 17 = allmänna regler om innehållande vid fel.</li>
<li><strong>Färdigställandeskydd:</strong> ABS 18 = obligatoriskt vid nybyggnad, annars efter byggnadsnämndens bedömning. Hantverkarformuläret 17 = normalt inte.</li>
<li><strong>ÄTA:</strong> Båda har egen ÄTA-blankett.</li>
</ul>

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


const VADKOST_HTML = `
<p>Vad kostar en anställd i ett byggföretag egentligen? Om du bara ser till månadslönen räknar du fel – och lägger anbud som äter upp din marginal. Den lön du betalar ut är toppen av ett isberg. Under ytan ligger arbetsgivaravgift, semester, tjänstepension, försäkringar och en rad byggspecifika kostnader som tillsammans kan mer än fördubbla siffran. Den här guiden visar hur du bygger upp den verkliga timkostnaden för en byggnadsarbetare 2026, så att du sätter rätt pris från början.</p>
<p><a href="/sv/verktyg/anstalld-kostnad-kalkylator">Räkna ut vad en anställd kostar med vår gratis kalkylator -&gt;</a></p>

<p>Vill du testa dina egna siffror direkt? Räkna fram din faktiska kostnad med vår gratis <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylator &rarr;</a></p>

<h2>Lönen är bara startpunkten</h2>
<p>En byggnads- eller anläggningsarbetare tjänar i snitt runt 38 000–40 000 kr i månaden, eller ungefär 215–235 kr i timmen (SCB:s lönestrukturstatistik). Använd alltid din egen faktiska lön i kalkylen, inte snittet – men som exempel utgår vi från en grundlön på 215 kr/h. Det är den siffran många instinktivt lägger till grund för anbud. Problemet är att den bara beskriver vad den anställde får, inte vad hen kostar. Skillnaden mellan lön och full arbetskraftskostnad är hela poängen i det här räknandet.</p>

<h2>Arbetsgivaravgift 2026: 31,42 %</h2>
<p>Ovanpå bruttolönen betalar du arbetsgivaravgift. För 2026 är den fulla avgiften <strong>31,42 %</strong> på lön och förmåner för anställda födda 1959 eller senare. Den består av flera delar:</p>
<ul>
<li>Ålderspensionsavgift 10,21 %</li>
<li>Sjukförsäkringsavgift 3,55 %</li>
<li>Föräldraförsäkringsavgift 2,00 %</li>
<li>Efterlevandepensionsavgift 0,30 %</li>
<li>Arbetsmarknadsavgift 2,64 %</li>
<li>Arbetsskadeavgift 0,10 %</li>
<li>Allmän löneavgift 12,62 %</li>
</ul>
<p>Det finns undantag. För unga 19–23 år (födda 2003–2007) gäller en tillfälligt sänkt avgift på <strong>20,81 %</strong> på månadslön upp till 25 000 kr, och full avgift på beloppet däröver – reglerna är tidsbegränsade – kontrollera aktuell period och belopp hos Skatteverket. Anställda som fyllt 67 (födda 1938–1958) betalar bara ålderspensionsavgiften 10,21 %, och för födda 1937 eller tidigare är avgiften 0 %.</p>
<p>Räkneexempel på en månadslön om 40 000 kr: 40 000 &times; 31,42 % = <strong>12 568 kr</strong> i arbetsgivaravgift per månad. Redan här har du gått från 40 000 till 52 568 kr.</p>

<h2>Semester och arbetstidsförkortning</h2>
<p>Semesterlagen ger 25 semesterdagar per år. För arbetare tillämpas normalt procentregeln, där semesterlönen är minst 12 % av den intjänade lönen. Byggavtalet lägger historiskt på lite mer via semestertillägg, så att den effektiva kostnaden hamnar runt 12–13 % på den arbetade lönen.</p>
<p>Utöver det innehåller Byggavtalet ett arbetstidskonto (arbetstidsförkortning, ATF), där en del av lönesumman avsätts varje år – motsvarande drygt en veckas betald ledighet, ofta angivet kring 35–40 timmar per år. Poängen är dubbel: dessa poster kostar pengar <em>och</em> minskar antalet timmar den anställde faktiskt är på plats och kan debiteras. Tillsammans lägger semester och ATF på i storleksordningen 12–14 %.</p>

<h2>Tjänstepension och Fora-försäkringar</h2>
<p>Kollektivavtalet kräver tjänstepension. Avtalspension SAF-LO betalas av arbetsgivaren med <strong>4,5 %</strong> av bruttolönen upp till 7,5 inkomstbasbelopp och 30 % på lönedelar över den gränsen, administrerat via Fora. Detta är inte frivilligt – det är ett avtalskrav.</p>
<p>Ovanpå pensionen ingår Foras försäkringspaket för arbetare: AGS (sjukförsäkring), TFA (arbetsskada), TGL (livförsäkring), omställningsförsäkring, premiebefrielse och föräldrapenningtillägg. Dessa lägger på ungefär 1–1,5 % av lönesumman. Den totala Fora-kostnaden – pension plus försäkringar – landar vanligen kring <strong>6 %</strong> av lönesumman. Premierna sätts årsvis, så stäm av mot din aktuella Fora-faktura.</p>

<h2>Byggspecifika påslag som ofta glöms bort</h2>
<p>Här skiljer sig bygg från ett kontorsjobb. En hantverkare bär med sig utrustning och kringkostnader som måste in i timpriset:</p>
<ul>
<li>Verktyg och maskiner – inköp, slitage och underhåll</li>
<li>Servicebil eller skåpbil, drivmedel, försäkring och service</li>
<li>Arbetskläder och skyddsutrustning</li>
<li>ID06 och administration kring det</li>
<li>Yrkes- och ansvarsförsäkring</li>
<li>Utbildning och certifikat: heta arbeten, ställning, lift, fallskydd</li>
<li>Företagshälsovård och arbetsmiljöarbete</li>
</ul>
<p>Som tumregel motsvarar detta ofta <strong>40–80 kr per debiterbar timme</strong> eller mer, beroende på hur maskin- och fordonstung verksamheten är. Lägg också till sjuklön: du betalar cirka 80 % av lönen under sjuklöneperioden dag 1–14 (med karensavdrag), vilket både kostar och tar bort debiterbar tid.</p>

<h2>Från lön till verklig timkostnad – räkneexempel</h2>
<p>Nu bygger vi upp hela kedjan på vår exempellön 215 kr/h:</p>
<ol>
<li><strong>Grundlön:</strong> 215 kr/h</li>
<li><strong>+ arbetsgivaravgift 31,42 %:</strong> +68 kr &rarr; 283 kr/h</li>
<li><strong>+ semester och ATF ca 13 %:</strong> +28 kr &rarr; 311 kr/h</li>
<li><strong>+ pension och Fora-försäkringar ca 6 %:</strong> +13 kr &rarr; 324 kr/h</li>
<li><strong>+ byggpåslag ca 50 kr/h:</strong> +50 kr &rarr; <strong>374 kr/h laddad kostnad</strong></li>
</ol>
<p>Men 374 kr är din kostnad per <em>betald</em> timme, inte per <em>debiterbar</em> timme. En byggnadsarbetare har en debiteringsgrad på typiskt 60–75 % – resten av tiden går till semester, ATF, sjukdom, restid, väder, ställtid och administration. Den icke-debiterbara tiden måste bäras av de timmar du faktiskt fakturerar.</p>
<p>Räknar vi med 70 % debiteringsgrad: 374 / 0,70 = <strong>534 kr/h</strong> i ren självkostnad att ta ut i anbud. Vid 60 % blir det över 620 kr/h. Så blir en lön på 215 kr/h till 400–500+ kr/h innan du ens lagt på vinst och risk. Ovanpå självkostnaden behöver du ett påslag för vinstmarginal och för att bära risken i fastprisjobb – annars arbetar du utan buffert.</p>

<h2>2026: räkna om efter nytt avtal</h2>
<p>En viktig varning: Byggavtalet är inne i en aktiv avtalsrörelse under 2026. Det nuvarande avtalet löper ut och nya löner och villkor förhandlas fram. Det betyder att lönenivåer och avsättningar kan ändras mitt under året. Lägg du långa anbud nu – räkna om självkostnaden när det nya avtalet är klart, så att du inte låser fast dig vid siffror som inte längre gäller.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp samlar du lön, arbetade timmar och projekttid på ett ställe, så att du ser skillnaden mellan betald och debiterbar tid i praktiken. Med tidrapporteringen får du fram din faktiska debiteringsgrad per person och projekt i stället för att gissa – och det är den siffran som avgör om ett anbud håller. Kombinerat med kalkylverktygen kan du bygga upp timpriset lager för lager och lägga anbud på verkliga tal, inte på magkänsla. ByggExp räknar inte åt Skatteverket eller Fora åt dig, men det ger dig underlaget du behöver för att sätta rätt pris.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket dyrare än lönen blir en anställd totalt?</h3>
<p>Räkna med att den fulla arbetskraftskostnaden ligger kring 50–60 % över bruttolönen när du lagt på arbetsgivaravgift, semester, pension och försäkringar. Med byggspecifika påslag och låg debiteringsgrad kan den timme du fakturerar behöva vara mer än dubbelt så hög som grundlönen.</p>
<h3>Vad är arbetsgivaravgiften för bygg 2026?</h3>
<p>Den fulla arbetsgivaravgiften är 31,42 % för anställda födda 1959 eller senare. För unga 19–23 år gäller tillfälligt 20,81 % på månadslön upp till 25 000 kr under perioden april 2026 till september 2027, och för anställda som fyllt 67 är avgiften 10,21 %.</p>
<h3>Måste jag betala tjänstepension till mina byggarbetare?</h3>
<p>Ja, om du har kollektivavtal. Avtalspension SAF-LO med 4,5 % (30 % över 7,5 IBB) och Foras försäkringspaket är avtalskrav, inte frivilliga förmåner. Totalt landar Fora-kostnaden ofta kring 6 % av lönesumman.</p>
<h3>Varför räcker det inte att fakturera lönen plus arbetsgivaravgift?</h3>
<p>För att en byggnadsarbetare bara debiterar 60–75 % av sin arbetstid. All icke-fakturerbar tid samt fordon, verktyg, försäkringar och certifikat måste bäras av de timmar du faktiskt tar betalt för, vilket pressar upp anbudspriset rejält.</p>

<h2>Kom igång</h2>
<p>Sätt rätt siffra för ditt nästa anbud genom att räkna igenom din egen kostnad i vår <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylator</a>. Vill du se hur ByggExp hjälper dig fånga verklig debiteringsgrad och kalkylera anbud på riktiga tal? <a href="/sv/contact">Boka en demo &rarr;</a></p>

<p>Relaterat: <a href="/sv/blog/timpris-hantverkare">Så sätter du rätt timpris som hantverkare</a>, <a href="/sv/blog/tidrapportering">Tidrapportering i byggföretaget</a> och <a href="/sv/blog/bemanning-och-personalplanering">Bemanning och personalplanering</a>.</p>
`.trim();

const VADKOST: BlogPost = {
  _id: "code-"+"vad-kostar-en-anstalld-byggforetag",
  title: "Vad kostar en anställd i ett byggföretag? Verklig timkostnad 2026", slug: "vad-kostar-en-anstalld-byggforetag", locale: "sv",
  excerpt: "Så räknar du ut den verkliga timkostnaden för en byggnadsarbetare 2026 – från grundlön till den siffra du måste ta betalt för i anbudet.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/timpris-preview.webp", contentHtml: VADKOST_HTML,
  seoTitle: "Vad kostar en anställd? Bygg 2026 | ByggExp", seoDescription: "Lön är bara toppen. Se hur arbetsgivaravgift, semester, tjänstepension och byggpåslag gör 215 kr/h till 400–500+ kr/h i anbud. Räkneexempel för 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/timpris-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T15:30:00.000Z", createdAt: "2026-08-18T15:30:00.000Z", updatedAt: "2026-08-18T15:30:00.000Z",
};


const LIKVID_HTML = `
<p>Många byggföretag är lönsamma på pappret men får ändå slut på pengar på kontot. Orderboken är full, marginalen ser bra ut i bokslutet – men mitt i månaden räcker inte kassan till löner, skatt och materialinköp. Orsaken är sällan dålig lönsamhet. Det är timing. Pengarna kommer in för sent och betalas ut för tidigt. Tesen i den här artikeln är enkel: fakturera direkt vid avslut, håll korta betalningsvillkor och bevaka varje förfallodag.</p>

<p>Ett vanligt likviditetshål börjar redan i offerten, för ett ROT-jobb delar kundens betalning i två strömmar. Räkna på din del innan du lämnar pris med <a href="/sv/verktyg/rot-avdrag-kalkylator">vår gratis ROT-avdragskalkylator -&gt;</a> så vet du exakt hur mycket kunden betalar direkt och hur mycket du måste vänta på från Skatteverket.</p>

<h2>ROT-fällan för din kassa</h2>
<p>ROT-avdrag ger kunden skattereduktion på 30 % av arbetskostnaden – aldrig på material, resor eller utrustning. Med fakturamodellen drar du av ROT-beloppet direkt på fakturan. Kunden betalar den reducerade summan, och först när kunden har betalat kan du begära resterande belopp från Skatteverket via e-tjänsten Rot och rut. Det innebär att ROT-delen i praktiken är en kredit du ger kunden – och en väntan på myndighet.</p>
<p>Ett konkret exempel: ett badrumsjobb med 80 000 kr i arbetskostnad och 40 000 kr i material, plus 25 % moms.</p>
<ul>
<li>Arbetskostnad inkl. moms: 100 000 kr</li>
<li>ROT-avdrag 30 % av arbetskostnaden: 30 000 kr</li>
<li>Material inkl. moms: 50 000 kr</li>
<li>Kunden betalar dig direkt: 120 000 kr</li>
<li>Du begär från Skatteverket efteråt: 30 000 kr</li>
</ul>
<p>Trots att du redan lagt ut för allt material och betalat lön för arbetstimmarna sitter 30 000 kr fast tills kunden betalat och Skatteverket hunnit behandla din begäran. På flera parallella projekt växer det gapet snabbt. Kom också ihåg taket: ROT är max 50 000 kr per person och år, och ROT plus RUT ryms i ett gemensamt tak på 75 000 kr per person och år (2026). Är kundens utrymme redan förbrukat får du ingen utbetalning – då står du för hela beloppet.</p>

<h2>Fakturera direkt vid avslut</h2>
<p>Varje dag ett färdigt jobb ligger som osänd faktura är en dag längre till pengar. Gör en fast rutin: slutbesiktning eller avslut samma dag som fakturan går ut, senast inom 48 timmar. En vecka i fakturasläp plus 30 dagars betalningstid betyder att pengar du tjänade i mars inte når kontot förrän i maj.</p>
<p>På längre projekt binder materialinköp och löner kassan i veckor innan du får betalt. Lösningen är delfakturering, a-conto. Fakturera etappvis mot uppnådda milstolpar i stället för allt på slutet. Då matchar inbetalningarna dina utlägg och du slipper finansiera bygget ur egen ficka. Skriv a-conto-planen redan i avtalet så kunden vet vad som kommer.</p>

<h2>Begär ROT-utbetalning snabbt och rätt</h2>
<p>När kunden har betalat: begär utbetalningen samma vecka i e-tjänsten Rot och rut. Skatteverket betalar normalt ut inom cirka en vecka när begäran är komplett och korrekt. Men utbetalning förutsätter att kunden har ROT-utrymme kvar och att person- och fastighetsuppgifter stämmer – annars avslås eller fördröjs den, och du står för hela beloppet.</p>
<p>Minska risken med tre kontroller:</p>
<ol>
<li>Stäm av kundens ROT-utrymme <strong>innan</strong> du lämnar offert, inte efteråt.</li>
<li>Säkra rätt personnummer och fastighetsbeteckning (eller lägenhetsnummer för bostadsrätt).</li>
<li>Bekräfta att jobbet ger ROT: det gäller bara arbete på bostad kunden själv äger – nybyggnation och arbete åt annat företag eller en förenings gemensamma delar ger normalt inte ROT.</li>
</ol>
<p>Det datum kunden betalar styr dessutom vilket beskattningsår avdraget hör till, så håll koll på betaldatum nära årsskiftet.</p>

<h2>Korta betalningsvillkor är din rätt</h2>
<p>Mellan företag är den lagstadgade maximala betalningstiden 30 dagar. Längre kredit gäller bara om du som säljare uttryckligen har godkänt det – en beställare kan alltså inte ensidigt trycka på 60 dagar. Mot privatkund kan du sätta ännu kortare, förslagsvis 10–15 dagar. Skriv villkoren i avtalet och offerten, inte bara på fakturan, så finns de överenskomna innan jobbet ens börjat.</p>

<h2>Bevaka förfallet</h2>
<p>En faktura som passerar förfallodagen utan åtgärd är ränta du skänker bort. Vid sen betalning har du rätt till dröjsmålsränta enligt räntelagen – referensräntan plus 8 procentenheter – från förfallodagen. Är kunden ett företag har du dessutom laglig rätt till en förseningsersättning på 450 kr, utöver räntan och skäliga inkassokostnader. (Referensräntan sätts av Riksbanken 1 januari och 1 juli; kontrollera aktuellt värde på riksbanken.se.)</p>
<p>Bygg en fast rutin: automatisk påminnelse dagen efter förfall, sedan inkasso efter en bestämd tidsgräns. Automatisera bevakningen så att ingen faktura faller mellan stolarna när det är fullt på bygget.</p>

<h2>Glöm inte omvänd byggmoms</h2>
<p>När du säljer en byggtjänst till en köpare som själv, mer än tillfälligt, säljer byggtjänster gäller omvänd skattskyldighet. Då fakturerar du <strong>utan</strong> moms, märker fakturan med att omvänd skattskyldighet för byggtjänster gäller och anger köparens momsnummer – köparen redovisar momsen. Det påverkar kassaflödet direkt: du har ingen kundmoms att tillfälligt förfoga över. Vanligt fel är att fakturera med moms ändå, vilket ger felaktiga fakturor, tvister och betalningsdröjsmål. Ha koll på om varje kund är byggföretag eller inte redan i offertskedet.</p>

<h2>Bygg en buffert och enkla rutiner</h2>
<ul>
<li>Håll en rullande kassaprognos som visar in- och utbetalningar de kommande veckorna.</li>
<li>Sikta på en buffert som täcker löner, skatt och material 1–2 månader framåt.</li>
<li>Ge kunden kortare kredit än du själv får av dina leverantörer – då jobbar tiden för din kassa.</li>
<li>Följ upp ROT-utrymme per kund och begär utbetalning direkt efter betalning.</li>
<li>Spara underlag och fakturor i 7 år enligt bokföringsreglerna.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du offerten med rätt ROT-avdrag från början och gör om den till faktura när jobbet är klart – samma dag, utan att räkna om beloppen för hand. På längre projekt lägger du upp a-conto-fakturor mot etapper så inbetalningarna följer utläggen. Fakturorna får förfallodatum och betalningsstatus samlat, så du ser vilka som närmar sig förfall och vilka som passerat. Verktyget trollar inte fram pengar snabbare från Skatteverket eller kunden, men det tar bort fakturasläpet och gör att inget jobb blir liggande osänt.</p>

<h2>Vanliga frågor</h2>
<h3>Varför är mitt byggföretag lönsamt men har ändå tom kassa?</h3>
<p>Nästan alltid handlar det om timing, inte marginal. Du betalar löner och material innan kunden betalar dig, och på ROT-jobb väntar du dessutom på ROT-delen från Skatteverket. Fakturera direkt vid avslut, korta betalningsvillkoren och delfakturera längre projekt så matchar inbetalningarna dina utgifter bättre.</p>
<h3>När kan jag begära ROT-utbetalningen från Skatteverket?</h3>
<p>Först efter att kunden har betalat sin del av fakturan. Då begär du resterande ROT-belopp i e-tjänsten Rot och rut. Är begäran komplett och korrekt betalar Skatteverket normalt ut inom cirka en vecka, förutsatt att kunden har ROT-utrymme kvar och att uppgifterna stämmer.</p>
<h3>Hur långa betalningsvillkor får ett annat företag kräva?</h3>
<p>Mellan företag är max 30 dagar enligt lag. Längre kredittid gäller bara om du som säljare uttryckligen godkänner den. Du behöver alltså inte acceptera 60 dagar bara för att beställaren skriver så i sin beställning.</p>
<h3>Vad har jag rätt till om kunden betalar för sent?</h3>
<p>Dröjsmålsränta enligt räntelagen (referensräntan plus 8 procentenheter) från förfallodagen. Är kunden ett företag har du dessutom rätt till 450 kr i förseningsersättning samt skäliga inkassokostnader, utöver räntan.</p>

<h2>Kom igång</h2>
<p>Räkna ut ROT-delen och kundens faktiska betalning innan du lämnar pris med <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylatorn</a>, och skapa en korrekt faktura med rätt villkor i <a href="/sv/verktyg/faktura-mall">vår fakturamall</a>. Vill du se hur offert, ROT och fakturabevakning hänger ihop i ett flöde? <a href="/sv/contact">Boka en demo</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/rot-avdrag">ROT-avdrag – så fungerar fakturamodellen</a>, <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a> och <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a>.</p>
`.trim();

const LIKVID: BlogPost = {
  _id: "code-"+"likviditet-byggforetag",
  title: "Likviditet i byggföretag: undvik att ROT och långa betalningsvillkor sänker kassan", slug: "likviditet-byggforetag", locale: "sv",
  excerpt: "Så undviker du att ROT-förskott och långa betalningsvillkor tömmer kassan – fakturera direkt vid avslut, korta villkoren och bevaka förfallodagen.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/rot-avdrag-preview.webp", contentHtml: LIKVID_HTML,
  seoTitle: "Likviditet byggföretag | ByggExp", seoDescription: "Lönsam på pappret men tom kassa? Så undviker du att ROT-förskott och långa betalningsvillkor sänker likviditeten – fakturera direkt och bevaka förfallet.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/rot-avdrag-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T16:00:00.000Z", createdAt: "2026-08-18T16:00:00.000Z", updatedAt: "2026-08-18T16:00:00.000Z",
};


const ANSTALLA_HTML = `
<p>Orderböckerna är fulla men du hinner inte med själv. Att gå från ensam hantverkare till arbetsgivare är ett av de största stegen du tar som byggföretagare — men det är fullt hanterbart om du vet vad som gäller. Många drar sig för det första anställningsstället för att det känns dyrt och byråkratiskt. Sanningen är att kostnaden ofta är lägre än du tror tack vare Växa-stödet, förutsatt att formalian sitter rätt.</p>

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


const ENSKILD_HTML = `
<p>Att gå från anställd till eget är ett av de vanligaste stegen i byggbranschen — och en av de första frågorna som dyker upp är om du ska driva verksamheten som <strong>enskild firma</strong> eller <strong>aktiebolag</strong>. Valet handlar om tre saker: hur mycket personligt ansvar du tar, hur du beskattas och hur du får ut pengarna. För en hantverkare med dyra materialinköp, garantiåtaganden och kanske anställda får skillnaderna verkliga konsekvenser.</p>

<p>Innan du bestämmer dig: räkna på hur mycket du faktiskt behöver ta betalt för att gå runt i respektive form med vår gratis <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylator →</a>. Ett realistiskt timpris avgör mer än bolagsformen om verksamheten bär sig.</p>

<h2>Snabbversionen</h2>
<ul>
<li><strong>Enskild firma:</strong> inget kapitalkrav, enkel att starta och sköta — men du är personligt ansvarig för alla skulder med din privata ekonomi.</li>
<li><strong>Aktiebolag:</strong> kräver 25 000 kr i aktiekapital, ger i princip begränsat ansvar och mer flexibelt uttag (lön + utdelning) — men mer administration och krav.</li>
<li><strong>Bytet lönar sig oftast</strong> när överskottet blir stabilt högt, när risken växer (större projekt, banklån, anställda) och när du vill kunna ta ut vinst som utdelning.</li>
<li>Oavsett form: konsultera en revisor för just din situation — brytpunkter och 3:12-regler ändras.</li>
</ul>

<h2>Ansvar och risk i byggbranschen</h2>
<p>Den största principiella skillnaden är juridisk. I en enskild firma finns ingen gräns mellan dig och företaget — du svarar personligt för alla företagets skulder med dina privata tillgångar. Går ett projekt snett, en kund inte betalar eller ett stort materialparti måste förskotteras, är det din privatekonomi som står som säkerhet.</p>
<p>Ett aktiebolag är en egen juridisk person. Din ekonomiska risk är i princip begränsad till det aktiekapital du satt in. Just i byggbranschen väger det tungt: du hanterar stora inköp, dyra maskiner, garanti- och felansvar för utfört arbete och ofta anställda. Ett enda tvistigt projekt kan bli dyrt, och då är skillnaden mellan begränsat och personligt ansvar avgörande.</p>
<p>Men skölden är inte total. Som företrädare för ett AB kan du drabbas av <strong>personligt betalningsansvar (företrädaransvar)</strong> för obetalda skatter och avgifter. Och när mer än halva det registrerade aktiekapitalet är förbrukat måste styrelsen agera på kapitalbrist och upprätta en kontrollbalansräkning — annars riskerar du personligt ansvar även i AB. Begränsat ansvar förutsätter alltså att du sköter bolaget korrekt.</p>

<h2>Skatten — så beskattas de olika</h2>
<p>Här skiljer sig formerna fundamentalt.</p>
<p>I en <strong>enskild firma</strong> beskattas du på <em>hela överskottet</em> som inkomst av näringsverksamhet — oavsett om du tar ut pengarna eller låter dem stå kvar. Du betalar kommunal och eventuell statlig inkomstskatt plus <strong>egenavgifter på cirka 28,97 %</strong> av överskottet. Ett schablonavdrag på 25 % görs i deklarationen innan slutlig skatt och egenavgifter beräknas. Du kan jämna ut resultatet mellan år med periodiseringsfond och expansionsfond, och balansera lön mot vinst med räntefördelning.</p>
<p>I ett <strong>aktiebolag</strong> betalar bolaget bolagsskatt på vinsten. Du som ägare tar ut en lön — på lönen betalar bolaget <strong>arbetsgivaravgifter på 31,42 % (2026, för anställda födda 1960 eller senare)</strong> — och/eller utdelning enligt 3:12-reglerna.</p>
<p>Den statliga skatten sätter ofta gränsen. För 2026 är skiktgränsen 643 000 kr och <strong>brytpunkten 660 400 kr</strong> (för dig under 66). Över brytpunkten tas 20 % statlig skatt ut på den beskattningsbara förvärvsinkomsten. En enskild firma-ägare beskattas för hela överskottet som förvärvsinkomst — passerar överskottet brytpunkten slår den statliga skatten till på överskjutande del. En AB-ägare kan i stället lägga lönen nära brytpunkten och ta ut ytterligare vinst som lägre beskattad utdelning.</p>

<h2>Uttag och 3:12 — så får du ut pengarna</h2>
<p>I en enskild firma finns ingen lön och inget separat beskattat uttag. Du gör ett <em>eget uttag</em> när du flyttar pengar till dig själv, men det påverkar inte skatten — du är redan beskattad på hela överskottet.</p>
<p>I ett AB är det här den stora fördelen vid högre vinster. Utdelning inom det årliga gränsbeloppet beskattas med <strong>20 %</strong> i kapital (2/3 av 30 %), medan belopp däröver beskattas som förvärvsinkomst. Med förenklingsregeln (schablonbeloppet) får du ett gränsbelopp motsvarande 2,75 × inkomstbasbeloppet året före — vilket för inkomståret 2026 landar på cirka <strong>221 650 kr</strong>. Det innebär att en betydande del av vinsten kan tas ut till 20 % skatt i stället för full förvärvsinkomstbeskattning.</p>
<p>Observera att 3:12-reglerna har varit under reform. Kontrollera aktuellt schablonbelopp och regelverk med din revisor innan du planerar uttag — siffrorna kan ha ändrats.</p>

<h2>När lönar det sig att byta från enskild firma till AB</h2>
<p>Det finns ingen exakt gräns, men tumreglerna brukar knytas till dessa faktorer:</p>
<ul>
<li><strong>Vinstnivå:</strong> när överskottet blir stabilt högt — och särskilt när det passerar brytpunkten — börjar kombinationen lön + utdelning i AB slå full förvärvsinkomstbeskattning i enskild firma.</li>
<li><strong>Riskexponering:</strong> tar du in anställda, större projekt eller banklån växer nyttan av begränsat ansvar snabbt.</li>
<li><strong>Uttagsvilja:</strong> vill du kunna spara vinst i bolaget och ta ut den som utdelning över tid talar det för AB.</li>
</ul>
<p>Verksamheten kan överlåtas eller ombildas till AB, men det finns skatteregler kring hur inkråm och inventarier överförs — ta hjälp av revisor så att bytet inte utlöser onödig beskattning.</p>

<h2>Så går bytet till i praktiken</h2>
<ol>
<li>Registrera aktiebolaget hos Bolagsverket och sätt in aktiekapitalet på 25 000 kr (e-tjänst via verksamt.se).</li>
<li>Ansök om ny F-skatt och momsregistrering för bolaget hos Skatteverket.</li>
<li>Se över och skriv om avtal, försäkringar och eventuella ramavtal så att de gäller bolaget.</li>
<li>Överlåt inkråm, inventarier och pågående uppdrag enligt gällande skatteregler.</li>
<li>Avregistrera den enskilda firman när allt är överfört.</li>
</ol>
<p>Har du anställda följer kollektivavtalsförpliktelser (Byggnads/Byggföretagen) av att du är arbetsgivare — de gäller oavsett bolagsform.</p>

<h2>Så gör du i ByggExp</h2>
<p>Oavsett om du kör enskild firma eller AB samlar ByggExp tidrapportering, projekt och fakturaunderlag på ett ställe. Du fakturerar med rätt moms — inklusive omvänd byggmoms mot andra byggföretag, där fakturan ställs utan moms och märks med att omvänd skattskyldighet gäller — och du sparar underlagen i minst 7 år som lagen kräver. Timmarna dina anställda rapporterar blir direkt till fakturaunderlag, så att du får ut rätt intäkt oavsett bolagsform. ByggExp ger däremot inte skatterådgivning — själva val av bolagsform tar du med din revisor.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag ha aktiekapital för att starta byggföretag?</h3>
<p>Nej, inte om du väljer enskild firma — där finns inget kapitalkrav. Vill du driva aktiebolag krävs minst 25 000 kr i aktiekapital för ett privat AB, en gräns som gällt sedan 2020.</p>
<h3>Vilken form ger lägst skatt?</h3>
<p>Det beror på vinstnivån. Vid lägre överskott är enskild firma ofta enklare och likvärdig, medan AB vid högre och stabila vinster kan sänka den samlade skatten genom lön upp mot brytpunkten och utdelning till 20 % inom gränsbeloppet. Räkna på ditt eget fall med en revisor.</p>
<h3>Behöver jag F-skatt oavsett form?</h3>
<p>Ja. Både enskild firma och AB behöver godkänd F-skatt för att fakturera som företag — i praktiken ett krav för att ta uppdrag som underentreprenör i bygg. Har du samtidigt anställning kan du som enskild näringsidkare ha FA-skatt.</p>
<h3>Kan jag byta form senare?</h3>
<p>Ja, du kan ombilda en enskild firma till aktiebolag när verksamheten växer. Det finns skatteregler för hur tillgångar överförs, så gör bytet tillsammans med revisor för att undvika onödig beskattning.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna hem ekonomin oavsett form: testa vår <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylator →</a> och kontrollera momsen med <a href="/sv/verktyg/moms-kalkylator">moms-kalkylatorn →</a>. Vill du se hur tidrapportering och fakturering hänger ihop i praktiken, <a href="/sv/contact">boka en demo →</a> så visar vi upplägget för just ditt byggföretag.</p>

<p>Relaterat: <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a> och <a href="/sv/blog/fakturera-som-hantverkare">Så fakturerar du som hantverkare</a>.</p>
`.trim();

const ENSKILD: BlogPost = {
  _id: "code-"+"enskild-firma-eller-aktiebolag-bygg",
  title: "Enskild firma eller aktiebolag för byggföretagaren? Så väljer du rätt 2026", slug: "enskild-firma-eller-aktiebolag-bygg", locale: "sv",
  excerpt: "Ansvar, skatt och uttag skiljer sig helt mellan enskild firma och aktiebolag — här är vad byggföretagaren behöver väga in 2026.", tag: "Företagande",
  coverImageUrl: "/landing/verktyg/moms-preview.webp", contentHtml: ENSKILD_HTML,
  seoTitle: "Enskild firma eller AB för bygg | ByggExp", seoDescription: "Enskild firma eller aktiebolag för ditt byggföretag? Jämför ansvar, skatt, uttag och 3:12 — och se när det lönar sig att byta 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/moms-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T17:00:00.000Z", createdAt: "2026-08-18T17:00:00.000Z", updatedAt: "2026-08-18T17:00:00.000Z",
};

const A_ANLITA_UNDERENTREPRENOR_HTML = `
<p>Att anlita en underentreprenör (UE) är vardag för de flesta byggföretag, men det är också ett av de moment där mest pengar kan gå förlorade om du slarvar. Fel avtalstyp, en UE utan F-skatt eller en dåligt formulerad faktura kan snabbt bli din kostnad – och sedan 2019 kan du dessutom bli betalningsansvarig för UE:ns anställdas löner. Här går vi igenom hela kedjan: skillnaden mot bemanning, kontrollerna du måste göra, vad UE-avtalet ska innehålla, entreprenörsansvaret och skattereglerna som gäller 2026.</p>

<p>Ett tydligt avtal är grunden för hela affären. Börja med ett komplett och strukturerat offertunderlag så att omfattning och pris är låsta redan innan arbetet startar – använd gärna vår gratis <a href="/sv/verktyg/offert-mall">offertmall &rarr;</a> som utgångspunkt.</p>

<h2>UE eller bemanning – vad är skillnaden?</h2>
<p>Skillnaden är avgörande och styr både arbetsmiljöansvar, moms och vilket avtal du ska skriva. En <strong>underentreprenör</strong> utför ett väl avskilt arbete med egen arbetsledning, eget material och egna maskiner – du köper ett resultat. <strong>Bemanning</strong> eller inhyrd personal är ren arbetskraft som hyrs in per timme, där du själv står för arbetsledning och utrustning – du köper arbetstid.</p>
<p>Konsekvenserna är konkreta: vid inhyrd personal bär du som inhyrare i princip hela arbetsmiljöansvaret, medan en UE ansvarar för sina egna medarbetare. Beslutsguiden är enkel – leder och utrustar leverantören själv sitt arbete och levererar ett avgränsat resultat är det en UE. Sitter deras folk under din arbetsledning med din utrustning är det bemanning, oavsett vad avtalet kallas.</p>

<h2>Kontrollera UE:n innan du skriver avtal</h2>
<p>Seriositetskontrollen är inte en formalitet – den skyddar dig mot både ekonomisk risk och dålig publicitet. Gå igenom följande både vid avtalstecknandet och löpande under uppdraget:</p>
<ul>
<li><strong>Godkänd för F-skatt</strong> – kontrollera i Skatteverkets tjänst "Hämta företagsinformation".</li>
<li><strong>Moms- och arbetsgivarregistrering</strong> samt beslutade arbetsgivaravgifter – visas i samma tjänst.</li>
<li><strong>Skatteskulder</strong> – kontrollera hos Kronofogden.</li>
<li><strong>Kollektivavtal eller hängavtal</strong> med Byggnads.</li>
<li><strong>Försäkringar</strong>, ID06-anslutning och referenser från tidigare uppdrag.</li>
</ul>
<p>En UE som inte är godkänd för F-skatt eller som har skatteskulder är en tydlig varningssignal. Dokumentera kontrollerna så att du kan visa att du gjort din del om något ifrågasätts i efterhand.</p>

<h2>UE-avtalet – vad ska stå i det?</h2>
<p>För underentreprenader finns färdiga standardavtal som "back-to-backar" huvudavtalets villkor nedåt i kedjan: <strong>AB-U 07</strong> används tillsammans med AB 04 i utförandeentreprenad, och <strong>ABT-U 07</strong> tillsammans med ABT 06 i totalentreprenad. Poängen är att UE:n binds till samma krav som du själv har mot din beställare, så att inte ett glapp uppstår i mitten. Läs mer om skillnaden mellan huvudavtalen i vår guide om <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06</a>.</p>
<p>Oavsett standardavtal ska följande vara reglerat i UE-kontraktet:</p>
<ul>
<li>Omfattning och tydlig gränsdragning mot andra entreprenörer.</li>
<li>Pris eller à-pris, betalningsplan och fakturavillkor.</li>
<li>Tider, delmål och eventuella viten vid försening.</li>
<li>Hantering av ÄTA-arbeten (ändrings-, tilläggs- och avgående arbeten).</li>
<li>Ansvar, försäkring och eventuell säkerhet.</li>
<li>Villkor för hävning.</li>
</ul>
<p>ÄTA är en av de vanligaste källorna till tvist. Fastställ redan i avtalet hur ändringar ska beställas och prissättas skriftligt – vår <a href="/sv/verktyg/ata-mall">ÄTA-mall &rarr;</a> ger dig ett spårbart underlag som håller genom hela kedjan.</p>

<h2>Entreprenörsansvar för lönefordringar – den dolda risken</h2>
<p>Detta är den risk många missar. Enligt <strong>Lag (2018:1472) om entreprenörsansvar för lönefordringar</strong>, i kraft sedan 1 januari 2019, kan du tvingas betala en UE-anställds lön om UE:n inte gör det. Lagen gäller bygg- och anläggningsverksamhet (uppförande, ombyggnad, underhåll, rivning) och ansvaret är subsidiärt i kedjan: kravet riktas först mot uppdragsgivaren – den entreprenör som anlitat arbetsgivaren – och därefter mot huvudentreprenören.</p>
<p>Fristerna är korta och värda att kunna:</p>
<ul>
<li>Betalningsansvaret inträder <strong>sju helgfria vardagar</strong> efter att entreprenören fått en skriftlig underrättelse om lönefordran (§10).</li>
<li>Uppdragsgivaren har <strong>fjorton helgfria vardagar</strong> på sig att betala; betalar den inte eller kan inte nås träder huvudentreprenörens ansvar in (§7–8).</li>
<li>Ansvaret omfattar inte fordringar som förfallit mer än <strong>tre månader</strong> före underrättelsen (§14).</li>
<li>En huvudentreprenör som fått krav måste inom <strong>sju helgfria vardagar</strong> skriftligen underrätta uppdragsgivaren för att behålla sin regressrätt (§17).</li>
</ul>
<p>Den som betalat har regressrätt mot arbetsgivaren, alltså UE:n – men du får ligga ute med pengarna och driva in dem själv. Skydda dig genom noggrann seriositetskontroll, korta betalningskedjor och avtalsvillkor som ger dig rätt att hålla inne betalning eller kräva ersättning om entreprenörsansvaret utlöses.</p>

<h2>Omvänd byggmoms mellan dig och UE:n</h2>
<p>Vid försäljning av byggtjänster mellan två byggföretag i Sverige gäller <strong>omvänd byggmoms</strong> när köparen mer än tillfälligt säljer byggtjänster (eller är s.k. mellanman). Typfallet är just en UE som fakturerar en huvudentreprenör. Då ska fakturan <strong>sakna moms</strong> och tydligt ange att omvänd skattskyldighet gäller, till exempel "Omvänd betalningsskyldighet gäller". Köparen redovisar och betalar momsen: inköpet tas upp i ruta 24 och den beräknade utgående momsen i ruta 30 i momsdeklarationen (säljaren/UE:n redovisar sin försäljning i ruta 41).</p>
<p>Vanliga fel är att UE:n felaktigt lägger på 25 % moms, eller att formuleringen om omvänd skattskyldighet saknas på fakturan. Kontrollera detta redan när du granskar UE:ns första faktura – rättar du det direkt slipper du krångliga korrigeringar senare.</p>

<h2>Anmälningsskyldighet, kollektivavtal och personalliggare</h2>
<p><strong>UE 2021</strong> är Byggföretagens och Byggnads avtalsvillkor för underentreprenörer och bemanningsföretag. Är UE:n bunden av Byggavtalet ska anlitandet anmälas till Byggnads via blankett UE2021. Är UE:n inte medlem i Byggföretagen, saknar hängavtal, inte är enmansföretag eller inte tillhör Maskinentreprenörerna, ska anlitandet i stället förhandlas med Byggnads enligt MBL §38–40.</p>
<p>På byggarbetsplatser krävs dessutom <strong>elektronisk personalliggare (ID06)</strong>. Varje entreprenör för sin egen del – egna anställda och egen inhyrd personal. Bristerna kostar: kontrollavgiften är 12 500 kr i grundavgift plus 2 500 kr per person som är verksam men saknas i liggaren. Har byggherren inte anmält byggstart och plats till Skatteverket blir avgiften 25 000 kr, och 12 500 kr om byggherren inte tillhandahållit utrustning för personalliggaren.</p>

<h2>Sammanfattning – 6 steg innan du anlitar en UE</h2>
<ol>
<li>Avgör om du behöver en UE eller bemanning – det styr avtal, moms och arbetsmiljöansvar.</li>
<li>Kontrollera F-skatt, moms- och arbetsgivarregistrering, skatteskulder och kollektivavtal.</li>
<li>Skriv UE-avtal (AB-U 07 eller ABT-U 07) som back-to-backar dina egna villkor.</li>
<li>Reglera ÄTA, betalningsplan, viten, försäkring och hävning skriftligt.</li>
<li>Ha koll på entreprenörsansvaret och bygg in skydd i avtalet.</li>
<li>Säkra rätt fakturering med omvänd byggmoms och sköt personalliggaren.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att strukturera UE-affären från offert till slutfaktura. Du skapar tydliga offertunderlag och UE-kontrakt med rätt omfattning, priser och tider, och håller ÄTA-arbeten spårbara så att inget faller mellan stolarna i kedjan. Alla underlag samlas per projekt, vilket gör det enkelt att dokumentera dina seriositetskontroller och behålla ordning på fakturor och avtal i minst sju år. ByggExp fattar inga beslut åt dig om F-skatt eller entreprenörsansvar – men ger dig strukturen som gör att du hinner göra kontrollerna rätt.</p>

<h2>Vanliga frågor</h2>
<h3>Måste en underentreprenör vara godkänd för F-skatt?</h3>
<p>Ja, du bör alltid kontrollera att UE:n är godkänd för F-skatt innan du skriver avtal. Det gör du i Skatteverkets tjänst "Hämta företagsinformation", som även visar moms- och arbetsgivarregistrering. Skatteskulder kontrollerar du hos Kronofogden. Gör kontrollen både vid start och löpande under uppdraget.</p>
<h3>Kan jag bli betalningsskyldig för underentreprenörens anställdas löner?</h3>
<p>Ja. Enligt Lag (2018:1472) om entreprenörsansvar för lönefordringar kan du som uppdragsgivare eller huvudentreprenör bli betalningsskyldig om UE:n inte betalar lön till sina anställda. Ansvaret inträder sju helgfria vardagar efter skriftlig underrättelse. Du har sedan regressrätt mot UE:n.</p>
<h3>Ska underentreprenören fakturera med moms?</h3>
<p>Nej, inte när omvänd byggmoms gäller. När en UE fakturerar en huvudentreprenör för byggtjänster och köparen mer än tillfälligt säljer byggtjänster ska fakturan sakna moms och ange att omvänd skattskyldighet gäller. Köparen redovisar inköpet i ruta 24 och den beräknade utgående momsen i ruta 30 (ruta 41 används av säljaren).</p>
<h3>Vad är skillnaden mellan underentreprenör och bemanning?</h3>
<p>En underentreprenör utför ett avgränsat arbete med egen arbetsledning, eget material och egna maskiner. Bemanning är inhyrd arbetskraft per timme där du själv leder arbetet och står för utrustningen. Vid inhyrd personal bär du i princip hela arbetsmiljöansvaret.</p>

<h2>Kom igång</h2>
<p>Lägg grunden för en trygg UE-affär redan i offertskedet med vår <a href="/sv/verktyg/offert-mall">offertmall &rarr;</a>, och håll ändringar spårbara med <a href="/sv/verktyg/ata-mall">ÄTA-mallen &rarr;</a>. Vill du se hur ByggExp håller ihop offerter, UE-avtal och fakturor per projekt? <a href="/sv/contact">Boka en demo &rarr;</a> så visar vi upplägget.</p>

<p>Relaterat: <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06 – skillnaden mellan utförande- och totalentreprenad</a> och <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag – så gör du</a>.</p>
`;

const A_ANLITA_UNDERENTREPRENOR: BlogPost = {
  _id: "code-"+"anlita-underentreprenor",
  title: "Anlita underentreprenör – så gör du rätt (UE-avtal, entreprenörsansvar och skatteregler 2026)", slug: "anlita-underentreprenor", locale: "sv",
  excerpt: "Komplett guide för byggföretag som ska anlita underentreprenör – avtal, kontroller, entreprenörsansvar för lönefordringar och skatteregler enligt 2026 års regelverk.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_ANLITA_UNDERENTREPRENOR_HTML,
  seoTitle: "Anlita underentreprenör 2026 | ByggExp", seoDescription: "Så anlitar du underentreprenör rätt: UE-avtal, entreprenörsansvar för lönefordringar, omvänd byggmoms och skillnaden UE vs bemanning. Checklista 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:00:00.000Z", createdAt: "2026-08-18T18:00:00.000Z", updatedAt: "2026-08-18T18:00:00.000Z",
};

const A_A_CONTO_FAKTURERING_BYGG_HTML = `
<p>Du betalar löner och material innan projektet ens är halvvägs, men din kund har 60 dagar på sig att betala en enda slutfaktura. Det är klassiska likviditetsfällan i entreprenad: pengarna ut i förskott, pengarna in långt senare. Lösningen heter à conto-fakturering — att fakturera löpande mot en betalningsplan under projektets gång i stället för att vänta på en stor slutfaktura. Rätt upplagd förvandlar den 60 dagars betaltid från ett kassaflödesproblem till ett förutsägbart intäktsflöde varje månad.</p>

<p>Vill du komma igång direkt kan du använda <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall -&gt;</a> och sätta upp dina à conto-poster med separata rader för arbete och material.</p>

<h2>Vad är à conto-fakturering?</h2>
<p>À conto betyder att kontraktssumman betalas i delbetalningar allt eftersom arbetet fortskrider, fakturerat mot avtalade delmål, med en slutavräkning vid godkänd slutbesiktning. Det är inte samma sak som förskott, där kunden betalar för arbete som ännu inte utförts. Vid à conto fakturerar du en del av det redan utförda arbetet, och den sista avstämningen görs när projektet är klart och besiktat.</p>
<p>Skillnaden mot en enda slutfaktura är enkel: i stället för att lägga ut hela kostnaden för arbete och material själv under hela byggtiden får du in betalning löpande. Det vanligaste upplägget i entreprenad är just en betalningsplan med delbetalning efter utförd del och slutavräkning vid godkänd slutbesiktning. À conto är alltså inte ett kryphål — det är standardpraxis i branschen.</p>

<h2>Varför à conto frigör kapital vid 60 dagars betaltid</h2>
<p>Ta ett projekt på tre månader. Med en enda slutfaktura plus 60 dagars betaltid får du in pengarna först ungefär fyra till fem månader efter att du började betala löner och leverantörer. Under hela den tiden binder du eget kapital — eller lånar dyrt — för att täcka kostnaderna.</p>
<p>Fakturerar du i stället à conto varje månad kommer pengar in med jämna mellanrum genom hela projektet. Även med 60 dagars betaltid på varje delfaktura krymper glappet mellan utlägg och inbetalning dramatiskt, eftersom du hela tiden har fakturor på väg in. Mellan näringsidkare är den lagstadgade betaltiden max 60 dagar om inget annat uttryckligen avtalats och det inte är grovt oskäligt mot borgenären. Grundregeln i räntelagen är annars 30 dagar. Entreprenad kör ofta 60–90 dagars villkor, vilket gör den löpande faktureringen ännu viktigare — ju längre betaltid, desto mer tjänar du på att fakturera tidigt och ofta.</p>

<h2>Reglerna i AB 04/ABT 06</h2>
<p>AB 04 och ABT 06 är standardavtalen i byggsektorn, och kapitel 6 styr betalningarna. En grundprincip är att arbete som anges på en faktura ska ha utförts, och en faktura ska betalas inom 30 dagar om inget annat avtalats.</p>
<p>Viktigt att känna till är reglerna om innehållen ersättning. Enligt AB 04 kap 6 §12 får beställaren hålla inne 10 % av värdet på utförda kontraktsarbeten som säkerhet — men bara när det <strong>inte</strong> finns någon betalningsplan. Det innehållna beloppet får aldrig överstiga 5 % av den totala kontraktssumman. Efter godkänd slutbesiktning får beställaren hålla inne 5 % av kontraktssumman till dess att fel är avhjälpta.</p>
<p>Den praktiska slutsatsen: avtala en skriftlig betalningsplan. Då slipper du huvudregeln om 10 % innehållande, och båda parter vet exakt när varje delbetalning ska ske. Håller beställaren inne betalning utan att ange skäl är denne dessutom skyldig att betala ränta på det innehållna beloppet från den dag det rätteligen skulle ha betalats.</p>

<h2>Moms: à conto vs fakturadatummetoden</h2>
<p>Bygg- och installationstjänster använder normalt fakturadatummetoden: den utgående momsen redovisas i den period fakturan utfärdas. Har tjänsten betalats innan den fakturerats redovisas momsen när betalning skedde, och har den varken fakturerats eller betalats senast andra kalendermånaden efter att tjänsten utfördes redovisas den då. En tjänst räknas som utförd när kunden godkänner den, vanligtvis vid godkänd slutbesiktning.</p>
<p>För à conto och förskott gäller en viktig avvikelse: säljaren ska redovisa utgående moms för den period då betalningen tas emot, även om à conto-fakturan utfärdats ett annat beskattningsår än när betalningen kommer in.</p>
<p>Säljer du byggtjänster till ett annat företag i byggsektorn gäller omvänd byggmoms — du lägger <strong>ingen</strong> moms på fakturan, utan köparen redovisar och betalar momsen. Normal momssats för byggtjänster är annars 25 %. En vanlig miss är att felaktigt lägga på 25 % moms på en à conto-faktura som omfattas av omvänd skattskyldighet. Kontrollera alltid vem köparen är innan du fakturerar. Omvänd byggmoms gäller inte vid försäljning till privatperson eller icke momsregistrerad köpare.</p>

<h2>ROT på à conto-fakturor för privatkunder</h2>
<p>Fakturerar du privatpersoner à conto kan ROT-avdraget appliceras redan på delfakturorna. Från 1 januari 2026 är ROT-avdraget 30 % av arbetskostnaden inklusive moms, tillbaka på ordinarie nivå efter den tillfälliga höjningen i maj 2025. Bara arbete kvalificerar — inte material, resor eller maskiner. Taket är 50 000 kr ROT per person och år, och ROT och RUT tillsammans max 75 000 kr per person och år.</p>
<p>På en ROT à conto-faktura måste kundens personnummer anges, och du begär ROT-utbetalningen från Skatteverket via e-tjänsten, normalt efter att fakturan är betald. Momsen beräknas på hela beloppet — själva skattereduktionen är en sak mellan kunden och staten, inte något du drar av på fakturans momsunderlag.</p>

<h2>Praktiska tips för din betalningsplan</h2>
<ul>
<li>Sätt realistiska delmål som matchar när dina faktiska kostnader uppstår — inte jämna klumpsummor, utan poster kopplade till utförda moment.</li>
<li>Skriv in betalningsplanen i avtalet, så att den ersätter huvudregeln om 10 % innehållande.</li>
<li>Håll separata rader för arbete och material på fakturan — särskilt viktigt vid ROT, där bara arbetskostnaden ger avdrag.</li>
<li>Fakturera direkt när ett delmål är klart. Varje dags fördröjning i din egen fakturering förlänger betaltiden i praktiken.</li>
<li>Använd dröjsmålsränta som påtryckningsmedel mot sena betalare. Enligt räntelagen är den referensräntan plus 8 procentenheter. Referensräntan för andra halvåret 2026 är 2,00 %, vilket ger 10,00 % i dröjsmålsränta.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>Med ByggExp bygger du fakturaunderlagen från det arbete som faktiskt utförts. Vår <a href="/sv/verktyg/faktura-mall">fakturamall</a> hjälper dig att lägga upp à conto-poster med separata rader för arbete och material, ange personnummer för ROT-kunder och markera omvänd skattskyldighet vid B2B-försäljning i byggsektorn. Poängen är enkel: gör det snabbt och korrekt att fakturera löpande genom projektet, så att betalningsplanen faktiskt följs i stället för att glömmas bort. ByggExp beslutar inte om skatt eller ROT åt dig — det gör Skatteverket — men verktyget minskar risken för de vanliga felen på à conto-fakturor.</p>

<h2>Vanliga frågor</h2>
<h3>Får man fakturera à conto i entreprenad?</h3>
<p>Ja. Det vanligaste upplägget i entreprenad är en betalningsplan med delbetalning efter utfört arbete och slutavräkning vid godkänd slutbesiktning. Enligt AB 04/ABT 06 kap 6 ska arbete som anges på en faktura vara utfört, och betalning ska ske inom 30 dagar om inget annat avtalats. Finns en skriftlig betalningsplan slipper du dessutom huvudregeln om 10 % innehållen ersättning.</p>
<h3>När redovisas momsen på à conto?</h3>
<p>För à conto och förskott ska den utgående momsen redovisas för den period då betalningen tas emot — även om fakturan utfärdats ett annat beskattningsår. Det skiljer sig från fakturadatummetoden som annars gäller för byggtjänster. Säljer du till ett annat byggföretag gäller omvänd byggmoms, och då lägger du ingen moms alls på fakturan.</p>
<h3>Kan man kombinera à conto med ROT-avdrag?</h3>
<p>Ja. ROT-avdraget kan appliceras på à conto-fakturor till privatpersoner. 2026 är avdraget 30 % av arbetskostnaden, med tak på 50 000 kr per person och år. Ange kundens personnummer på fakturan och begär utbetalningen från Skatteverket, normalt efter att fakturan är betald. Bara arbetskostnaden ger avdrag — inte material.</p>

<h2>Kom igång</h2>
<p>À conto-fakturering vänder 60 dagars betaltid från en likviditetsrisk till ett förutsägbart kassaflöde — förutsatt att du sätter en genomtänkt betalningsplan och fakturerar löpande. Börja med <a href="/sv/verktyg/faktura-mall">vår fakturamall</a> och sätt upp dina delposter redan i dag. Vill du se hur ByggExp kan effektivisera hela flödet från tidrapport till faktura? <a href="/sv/contact">Boka en demo här.</a></p>

<p>Relaterat: <a href="/sv/blog/likviditet-byggforetag">Likviditet i byggföretag</a>, <a href="/sv/blog/betalningsvillkor-faktura-bygg">Betalningsvillkor på fakturor i bygg</a> och <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a>.</p>
`;

const A_A_CONTO_FAKTURERING_BYGG: BlogPost = {
  _id: "code-"+"a-conto-fakturering-bygg",
  title: "À conto-fakturering i bygg: så frigör du kapital när betaltiden är 60 dagar", slug: "a-conto-fakturering-bygg", locale: "sv",
  excerpt: "À conto-fakturering vänder 60 dagars betaltid från en likviditetsrisk till förutsägbart kassaflöde — så gör du i praktiken med rätt betalningsplan, moms och ROT.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/8fakturor.webp", contentHtml: A_A_CONTO_FAKTURERING_BYGG_HTML,
  seoTitle: "À conto-fakturering i bygg | ByggExp", seoDescription: "Så använder du à conto och betalningsplan för att frigöra kapital när B2B-betaltiden är 60 dagar. Regler i AB 04/ABT 06, moms och ROT förklarat.",
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:03:00.000Z", createdAt: "2026-08-18T18:03:00.000Z", updatedAt: "2026-08-18T18:03:00.000Z",
};

const A_ENTREPRENORSANSVAR_LON_HTML = `
<p>Du har handlat upp en underentreprenör i god tro, jobbet är utfört och fakturan betald. Sedan går UE:et i konkurs – eller struntar helt enkelt i att betala sina anställda. Plötsligt står montörernas löner obetalda, och kravet landar inte hos deras arbetsgivare utan hos <em>dig</em>, som anlitat kedjan. Det är kärnan i entreprenörsansvaret för lönefordringar. I den här guiden går vi igenom hur lagen fungerar, hur ansvaret vandrar uppåt i entreprenörskedjan och den avgörande 7-dagarsfristen som avgör om du blir betalningsskyldig.</p>

<p>Har du ordning på avtal och ÄTA-hantering i UE-ledet står du starkare den dag ett krav dyker upp – börja med vår gratis <a href="/sv/verktyg/ata-mall">ÄTA-mall</a> för att hålla dokumentationen på plats.</p>

<h2>Vad är entreprenörsansvar för lönefordringar?</h2>
<p>Reglerna finns i <strong>Lag (2018:1472) om entreprenörsansvar för lönefordringar</strong>, som trädde i kraft den 1 januari 2019. Bakgrunden är EU:s utstationeringsdirektiv från 2014, som ålägger medlemsstaterna att skydda arbetstagare i byggsektorn mot oseriösa arbetsgivare längre ner i kedjan.</p>
<p>Lagen gäller <strong>bygg- och anläggningsverksamhet</strong> i Sverige – uppförande, iståndsättning, underhåll, ombyggnad eller rivning. Poängen är enkel: en arbetstagare som inte får sin lön av sin egen arbetsgivare ska kunna vända sig uppåt i entreprenörskedjan och få betalt av någon som är solvent. För dig som huvudentreprenör betyder det att du kan tvingas betala för löner du aldrig avtalat om, till personer du kanske aldrig träffat.</p>

<h2>Kedjan – vem ansvarar för vad?</h2>
<p>Ansvaret är uppbyggt i två steg och följer entreprenörskedjan uppåt:</p>
<ol>
<li><strong>Arbetsgivaren</strong> – den som anställt arbetstagaren och i första hand ska betala lönen.</li>
<li><strong>Uppdragsgivaren</strong> – den entreprenör som anlitat arbetsgivaren som underentreprenör (§3). Hit vänder sig arbetstagaren i första hand om lönen uteblir.</li>
<li><strong>Huvudentreprenören</strong> – entreprenören närmast byggherren/beställaren. Denne har ett subsidiärt ansvar i andra hand om uppdragsgivaren inte betalar.</li>
</ol>
<p>Ett konkret exempel: Byggherren anlitar <strong>Huvud Bygg AB</strong> (huvudentreprenör). Huvud Bygg anlitar <strong>Mellan Montage AB</strong> (uppdragsgivare), som i sin tur anlitar <strong>Golv &amp; Spackel AB</strong> (arbetsgivare). Golvarna på Golv &amp; Spackel får ingen lön. De vänder sig först till Mellan Montage. Betalar inte Mellan Montage kan kravet gå vidare till Huvud Bygg – längst upp i kedjan. Ansvaret hoppar alltså inte över mellanledet direkt, men det landar till slut hos den som toppar kedjan.</p>

<h2>7-dagarsfristen och de andra tidsgränserna</h2>
<p>Hela systemet styrs av tidsfrister räknade i <strong>helgfria vardagar</strong> – inte kalenderdagar. Det är viktigt att hålla isär:</p>
<ul>
<li><strong>7 helgfria vardagar (§10):</strong> Uppdragsgivarens betalningsansvar inträder sju helgfria vardagar efter att uppdragsgivaren fått en skriftlig underrättelse om lönefordran. Detta är den centrala 7-dagarsfristen.</li>
<li><strong>14 helgfria vardagar (§8):</strong> Huvudentreprenörens subsidiära ansvar inträder om uppdragsgivaren inte betalat inom fjorton helgfria vardagar från det att uppdragsgivaren fått underrättelsen.</li>
<li><strong>5 helgfria vardagar (§18):</strong> Informationsplikten. En entreprenör måste senast fem helgfria vardagar efter en skriftlig begäran lämna ut kontaktuppgifter m.m. till en arbetstagare eller arbetstagarorganisation som efterfrågar dem.</li>
<li><strong>Tremånadersgränsen (§14):</strong> Ansvaret omfattar inte lönefordringar som förfallit till betalning mer än tre månader före det att den ansvarige fick underrättelsen. Gamla lönekrav faller alltså utanför.</li>
</ul>
<p>Att fristerna räknas i helgfria vardagar gör att en verklig ledtid ofta blir längre än siffran antyder – men det innebär också att du måste agera direkt när en underrättelse dyker upp. Ligg inte på den.</p>

<h2>Så går ett krav till i praktiken</h2>
<p>Kravet inleds med en <strong>skriftlig underrättelse</strong> om lönefordran. Den ska enligt §11–12 innehålla:</p>
<ul>
<li>Arbetstagarens namn</li>
<li>Lönebeloppet</li>
<li>Arbetsperioden fordran avser</li>
<li>Betalningsuppgifter</li>
</ul>
<p>Underrättelsens innehåll sätter ramen för vad du kan bli skyldig att betala – ansvaret styrs av vad som faktiskt står i den. Du är inte rättslös: du får framställa <strong>samma invändningar mot kravet som arbetsgivaren själv hade kunnat göra</strong>. Är lönen redan betald, är beloppet fel eller avser fordran en period utanför tremånadersgränsen, kan du invända mot det. Tvister prövas enligt reglerna om arbetstvister (lag 1974:371), §20.</p>

<h2>Regressrätt – kan du få tillbaka pengarna?</h2>
<p>Betalar du som huvudentreprenör en annans lön har du <strong>regressrätt</strong> mot både arbetsgivaren och uppdragsgivaren. Du kan alltså kräva tillbaka det utlagda beloppet. Problemet i praktiken är förstås att den som inte betalade lönen ofta är på obestånd – regressrätten är bara värd något om det finns pengar att hämta.</p>
<p>Ett handgripligt råd: en huvudentreprenör som blivit underrättad bör inom <strong>sju helgfria vardagar</strong> skriftligen meddela uppdragsgivaren om kravet, för att behålla regressmöjligheten mot denne. Missar du det steget kan du gå miste om rätten att kräva tillbaka pengarna från mellanledet. Ha en fast rutin för det.</p>

<h2>Byggavtalet gäller före lagen</h2>
<p>Är ditt företag bundet av <strong>Byggavtalet</strong> (Byggföretagen–Byggnads) gäller kollektivavtalets huvudentreprenörsansvar enligt <strong>Bilaga D</strong> i stället för lagen. Byggavtalets modell fredades när lagen infördes, och kan sträcka sig längre eller vara striktare än lagens tvåstegsmodell. Med andra ord: för många seriösa byggföretag är det kollektivavtalet – inte lagen – som styr det faktiska ansvaret. Kontrollera därför alltid vilket regelverk som gäller för just ert projekt innan ni bedömer er exponering.</p>

<h2>Så skyddar du dig som huvudentreprenör</h2>
<p>Ansvaret går inte att avtala bort, men risken går att minska rejält genom kontroll i UE-ledet. Checklista innan och under uppdraget:</p>
<ul>
<li>Kontrollera underentreprenören <strong>innan avtal</strong>: kollektivavtal, giltig F-skatt, registrering för moms och arbetsgivaravgifter.</li>
<li>Kräv <strong>ID06</strong> och håll koll på vilka som faktiskt jobbar på arbetsplatsen.</li>
<li>Teckna <strong>skriftliga avtal</strong> med varje led och dokumentera hela kedjan – vem har anlitat vem.</li>
<li>Håll <strong>kedjan kort</strong>. Ju fler led under dig, desto större risk att en oseriös aktör smyger in.</li>
<li>Ha en <strong>rutin för underrättelser</strong> så att en inkommen skriftlig begäran hanteras inom fristen och inte blir liggande.</li>
<li>Dokumentera ÄTA, tidrapporter och avtal löpande så att du snabbt kan bemöta ett krav med rätt underlag.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte juridisk rådgivning, men gör grundarbetet enklare. Med <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a> håller du ordning på ändrings- och tilläggsarbeten mot varje UE, så att avtalskedjan är dokumenterad och spårbar. Samlad projekt- och tidrapporteringsdata gör att du snabbt kan ta fram underlag om ett lönekrav skulle dyka upp – och veta vilka som faktiskt arbetat, när och åt vem. Kort sagt: bättre dokumentation i UE-ledet gör dig snabbare och tryggare den dag en underrättelse landar på bordet.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag betala även om jag redan betalat UE:et fullt ut?</h3>
<p>Ja, entreprenörsansvaret är fristående från din betalning till underentreprenören. Att du betalat fakturan skyddar dig inte mot arbetstagarens lönekrav. Däremot har du regressrätt och kan kräva tillbaka beloppet av arbetsgivaren och uppdragsgivaren – förutsatt att det finns pengar att hämta.</p>
<h3>Vad räknas som helgfria vardagar?</h3>
<p>Helgfria vardagar är måndag till fredag exklusive helgdagar. Lördagar, söndagar och röda dagar räknas inte in i fristerna på 5, 7 och 14 dagar. Det innebär att den faktiska kalendertiden ofta blir längre än siffran, men du bör ändå agera omgående när en underrättelse kommer in.</p>
<h3>Kan jag bli ansvarig för gamla lönekrav?</h3>
<p>Nej. Enligt tremånadersgränsen (§14) omfattar ansvaret inte lönefordringar som förfallit till betalning mer än tre månader innan du fick underrättelsen. Krav som avser äldre perioder faller utanför ditt ansvar.</p>
<h3>Gäller lagen eller kollektivavtalet för mitt företag?</h3>
<p>Är ni bundna av Byggavtalet gäller kollektivavtalets huvudentreprenörsansvar (Bilaga D) i stället för Lag (2018:1472), och det kan vara striktare. Är ni inte kollektivavtalsbundna gäller lagens tvåstegsmodell. Kontrollera vilket regelverk som styr innan ni bedömer er risk i ett projekt.</p>

<h2>Kom igång</h2>
<p>Ansvaret följer med den som toppar entreprenörskedjan – och koll på UE-ledet är alltid billigare än att betala andras löner. Börja med att strukturera avtal och ändringsarbeten med vår <a href="/sv/verktyg/ata-mall">ÄTA-mall</a>, och boka en <a href="/sv/contact">demo</a> så visar vi hur du får ordning på dokumentationen i hela kedjan.</p>

<p>Relaterat: <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag</a> och <a href="/sv/blog/bemanning-och-personalplanering">Bemanning och personalplanering</a>.</p>
`;

const A_ENTREPRENORSANSVAR_LON: BlogPost = {
  _id: "code-"+"entreprenorsansvar-lon",
  title: "Entreprenörsansvar för lön – när huvudentreprenören betalar UE:s löner", slug: "entreprenorsansvar-lon", locale: "sv",
  excerpt: "När en underentreprenör struntar i lönerna kan kravet landa hos dig som toppar kedjan – så fungerar entreprenörsansvaret och den avgörande 7-dagarsfristen.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_ENTREPRENORSANSVAR_LON_HTML,
  seoTitle: "Entreprenörsansvar lön | ByggExp", seoDescription: "Går din underentreprenör i konkurs kan lönekravet landa hos dig. Så fungerar kedjan, 7-dagarsfristen och hur du skyddar dig som huvudentreprenör.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:06:00.000Z", createdAt: "2026-08-18T18:06:00.000Z", updatedAt: "2026-08-18T18:06:00.000Z",
};

const A_FAST_PRIS_ELLER_LOPANDE_RAKNING_HTML = `
<p>Valet mellan fast pris och löpande räkning är inte en fråga om smak – det avgör vem som bär risken när jobbet drar iväg, och hur lätt du får betalt för det som tillkommer. Väljer du fel modell för fel projekt sitter du antingen med en fördyring du inte får ersättning för, eller en faktura kunden bestrider. Den här guiden ger dig ett konkret sätt att välja, och en rutin för att fakturera ÄTA separat utan att hamna i tvist.</p>

<p>Grunden i allt är ett tydligt avtal och en offert som anger prismodellen svart på vitt. Börja där – bygg din offert i <a href="/sv/verktyg/offert-mall">vår gratis offertmall →</a> så att ersättningsform, arvode och à-priser står skrivna redan innan spaden är i marken.</p>

<h2>De två prismodellerna i praktiken</h2>

<p><strong>Fast pris</strong> innebär att du lämnar ett förutbestämt totalbelopp för ett avtalat arbete. Blir det dyrare än du räknat bär du fördyringsrisken själv – kunden får förutsägbarhet, du får risken. Det passar när omfattningen är tydlig och du kan kalkylera mängder och tid med säkerhet.</p>

<p><strong>Löpande räkning</strong> innebär att du får betalt för verifierade självkostnader plus ett avtalat entreprenörarvode – ett procentuellt påslag. Här bär beställaren mängd- och tidsrisken. Du får betalt för det arbete som faktiskt utförs, förutsatt att du kan styrka kostnaderna.</p>

<p>Skillnaden i praktiken:</p>

<ul>
<li><strong>Risk:</strong> Fast pris – du bär fördyringen. Löpande räkning – kunden bär mängdrisken.</li>
<li><strong>Kassaflöde:</strong> Fast pris ger ofta betalning mot betalplan/etapper. Löpande räkning faktureras efterhand mot redovisad tid och material.</li>
<li><strong>Dokumentation:</strong> Fast pris kräver mindre löpande verifiering. Löpande räkning kräver att varje krona kan styrkas.</li>
</ul>

<h2>Självkostnadsprincipen som default</h2>

<p>Vid osäker omfattning är löpande räkning nästan alltid tryggast för dig som utförare. Modellen vilar på självkostnadsprincipen enligt AB 04 kap 6 §9 (motsvarande i ABT 06): du ersätts för verifierade självkostnader plus ett entreprenörarvode enligt 6:9 p. 8. Vad du får betalt för är i huvudsak arbetstid, material, underentreprenörer och maskiner – och ovanpå det ett procentuellt arvode. Det finns ingen lagstadgad procentsats; nivån avtalas och varierar med projektets komplexitet och risk. Skriv den siffran i offerten.</p>

<p>Baksidan av tryggheten är dokumentationsskyldigheten. Vid löpande räkning ska samtliga självkostnader kunna styrkas – tid, material och UE. Undantaget är det som täcks av det avtalade procentuella arvodet. Bristande redovisning är en av de vanligaste grunderna för att en beställare bestrider fakturan eller kräver pengar tillbaka. Regeln är enkel: ingen redovisning, ingen betalning. Logga tid löpande, spara underlag och specificera – varje dag, inte i efterhand.</p>

<p>Behöver du sätta en trovärdig timkostnad som täcker dina verkliga kostnader kan du räkna baklänges i <a href="/sv/verktyg/timpris-kalkylator">vår timpris-kalkylator →</a> innan du avtalar arvode och à-priser.</p>

<h2>Så väljer du prismodell – beslutsguide</h2>

<ul>
<li><strong>Välj fast pris</strong> när omfattningen är väl definierad, ritningar och mängder är klara, och kunden efterfrågar förutsägbarhet. Se bara till att din kalkyl har marginal – fördyringen är din.</li>
<li><strong>Välj löpande räkning</strong> när omfattningen är osäker: rivning, äldre hus, badrum där du inte vet vad som göms bakom kaklet, eller arbeten där dolda fel är sannolika.</li>
<li><strong>Mellanläge:</strong> takpris (löpande räkning med ett tak) eller en ungefärlig prisuppgift. Här lurar 15 %-fällan mot konsument – mer om den nedan.</li>
</ul>

<h2>Regelverket du inte får missa mot konsument</h2>

<p>Jobbar du mot privatperson gäller konsumenttjänstlagen (1985:716), och den sätter ramar du måste känna till.</p>

<p><strong>§36 – skäligt pris och 15 %-regeln.</strong> Har ni inte avtalat pris ska konsumenten betala vad som är skäligt med hänsyn till arbetets art och gängse pris. Har du lämnat en <em>ungefärlig prisuppgift</em> får den inte överskridas med mer än 15 %, om ni inte avtalat en annan gräns eller du har rätt till pristillägg enligt §38. Räkneexempel: en ungefärlig prisuppgift på 100 000 kr får sluta på högst 115 000 kr. Vill du ta mer måste merkostnaden ha stöd i tilläggsarbete eller ÄTA enligt §38.</p>

<p><strong>§40 – specificerad räkning.</strong> På konsumentens begäran ska du ställa ut en specificerad, kostnadsfri räkning. Är arbetet inte utfört till fast pris <em>måste</em> räkningen visa hur priset beräknats – timmar, à-pris och material. Vid fast pris behöver du inte visa kalkylen, men kunden har ändå rätt att se att avtalat arbete utförts.</p>

<p><strong>§8 och §38 – tilläggsarbete.</strong> Innan du utför tilläggsarbete ska du underrätta konsumenten och begära anvisningar. Utan kontakt får du utföra det bara om priset är obetydligt i förhållande till det avtalade, eller om särskilda skäl talar för att kunden ändå vill ha det gjort.</p>

<p>För konsumententreprenader använder du i praktiken Hantverkarformuläret 17 för mindre arbeten och ABS 18 för ny- och tillbyggnad av småhus. Det är branschgemensamma standardavtal framtagna av bland andra Konsumentverket, Villaägarna och Byggföretagen, och de reglerar pris, ÄTA och betalning på ett sätt som minskar tvistrisken.</p>

<h2>ÄTA – fakturera ändringar separat utan tvist</h2>

<p>ÄTA-arbeten (ändrings-, tilläggs- och avgående arbeten) förekommer även vid löpande räkning. Ersättningsformen anger bara <em>hur</em> entreprenaden ersätts, inte dess <em>omfattning</em>. ÄTA är ett av de vanligaste tvisteämnena i svensk entreprenadjuridik – under AB 04/ABT 06 ska ÄTA anmälas skriftligen utan dröjsmål, annars riskerar rätten till ersättning att falla bort och beställaren att bestrida fakturan. En muntligt godkänd ÄTA som inte dokumenterats räknas i praktiken som tvistig.</p>

<p>Checklista som håller ÄTA tvistfri:</p>

<ol>
<li>Anmäl skriftligt utan dröjsmål – innan arbetet startar.</li>
<li>Få skriftligt godkännande av kunden innan du sätter igång.</li>
<li>Fakturera ÄTA på egen orderrad eller separat faktura, med hänvisning till aktuell beställning.</li>
<li>Ange ersättningsform för just den posten: à-pris, löpande räkning eller fast pris.</li>
</ol>

<h2>ROT och fakturering 2026</h2>

<p>ROT-avdraget är 2026 tillbaka på 30 % av arbetskostnaden, max 50 000 kr per person och år. Den tillfälliga höjningen till 50 % gällde bara 12 maj–31 december 2025 och förlängdes inte. Rot och rut delar ett gemensamt tak på 75 000 kr per person och år, varav rot får utgöra högst 50 000 kr.</p>

<p>Praktiskt betyder det: håll koll på kundens årstak, särskilt vid löpande räkning där slutsumman inte är känd på förhand. Separera alltid arbetskostnad från material på fakturan – ROT beräknas bara på arbetet. En separat ÄTA-faktura gör dessutom ROT-administrationen enklare eftersom arbetskostnaden hålls isär.</p>

<h2>Så gör du i ByggExp</h2>

<p>ByggExp hjälper dig sätta upp rutinen en gång och sedan följa den. Du skriver offert med vald prismodell, avtalat arvode och à-priser i <a href="/sv/verktyg/offert-mall">offertmallen</a>, räknar fram en hållbar timkostnad i <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylatorn</a>, och dokumenterar varje ändring i <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a> så att godkännandet finns skriftligt innan arbetet börjar. Verktygen ersätter inte juridisk rådgivning eller standardavtalen, men de gör det enkelt att göra rätt: prismodell i avtalet, tid loggad löpande och ÄTA separerad från grunduppdraget.</p>

<h2>Vanliga frågor</h2>

<h3>Är löpande räkning dyrare för kunden?</h3>
<p>Inte nödvändigtvis. Vid fast pris lägger du in en riskmarginal för att täcka fördyringar du inte kan förutse. Vid löpande räkning betalar kunden bara för det som faktiskt utförs plus ditt arvode. Vid osäker omfattning blir löpande ofta rättvisare för båda parter – men kräver att du redovisar varje kostnad.</p>

<h3>Måste jag lämna fast pris om kunden kräver det?</h3>
<p>Nej. Prismodellen är en avtalsfråga ni kommer överens om. Är omfattningen osäker kan du föreslå löpande räkning med ett takpris, så får kunden ett tak att förhålla sig till utan att du tvingas bära hela fördyringsrisken.</p>

<h3>Vad händer om jag glömmer anmäla en ÄTA?</h3>
<p>Under AB 04/ABT 06 ska ÄTA anmälas skriftligen utan dröjsmål. Anmäler du för sent riskerar rätten till ersättning att falla bort eller preskriberas, och beställaren kan bestrida fakturan. En muntlig överenskommelse som inte dokumenterats räknas i praktiken som tvistig – därför ska godkännandet alltid vara skriftligt före start.</p>

<h3>Får jag överskrida offerten?</h3>
<p>Mot konsument får en ungefärlig prisuppgift överskridas med högst 15 % om ni inte avtalat annat, enligt konsumenttjänstlagen §36. Utöver det krävs stöd i tilläggsarbete eller pristillägg enligt §38. Ett avtalat fast pris ligger fast om det inte handlar om godkänd ÄTA.</p>

<h2>Kom igång</h2>

<p>Sammanfattningen är enkel: välj löpande räkning som default när omfattningen är osäker, dokumentera allt löpande och håll ÄTA separat och skriftligt. Sätt upp rutinen med <a href="/sv/verktyg/offert-mall">offertmallen</a> och <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a>, eller <a href="/sv/contact">boka en demo →</a> så visar vi hur du får hela flödet från offert till ÄTA-faktura på plats.</p>

<p>Relaterat: <a href="/sv/blog/ata-arbeten">ÄTA-arbeten – så anmäler och fakturerar du rätt</a> och <a href="/sv/blog/skriva-offert">Så skriver du en offert som håller</a>.</p>
`;

const A_FAST_PRIS_ELLER_LOPANDE_RAKNING: BlogPost = {
  _id: "code-"+"fast-pris-eller-lopande-rakning",
  title: "Fast pris eller löpande räkning – så väljer du rätt prismodell (och slipper ÄTA-tvisten)", slug: "fast-pris-eller-lopande-rakning", locale: "sv",
  excerpt: "Prismodellen avgör vem som bär risken och hur lätt du får betalt för ändringar – här är beslutsguiden och rutinen som håller ÄTA separat och tvistfri.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_FAST_PRIS_ELLER_LOPANDE_RAKNING_HTML,
  seoTitle: "Fast pris eller löpande räkning | ByggExp", seoDescription: "Så väljer du prismodell, fakturerar ÄTA separat utan tvist och använder självkostnadsprincipen som default. Beslutsguide för hantverkare och byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:09:00.000Z", createdAt: "2026-08-18T18:09:00.000Z", updatedAt: "2026-08-18T18:09:00.000Z",
};

const A_TACKNINGSBIDRAG_BYGGFORETAG_HTML = `
<p>Du har fullbokat i veckor, säger nej till jobb och kör kvällar för att hinna klart. Ändå är det tunt på kontot när momsen och lönerna dragits. För de allra flesta byggföretag är det inte ett arbetsfel – det är ett prissättningsfel. Och nästan alltid handlar det om samma sak: att påslag och marginal blandas ihop. Två procenttal som mäter samma vinst, men mot helt olika baser.</p>

<p>Vill du sluta gissa och se skillnaden i kronor på ditt eget jobb? Räkna om påslag till marginal och baklänges med <a href="/sv/verktyg/paslag-marginal-kalkylator">vår gratis påslag- och marginalkalkylator -></a></p>

<h2>Två procenttal, en vinst – vad påslag och marginal faktiskt mäter</h2>
<p>Påslag och marginal beskriver samma vinst, men de räknas mot olika tal. <strong>Påslag (pålägg)</strong> räknas på inköps- eller självkostnaden: vinst delat på kostnad. Det är hur mycket du lägger ovanpå det du betalade. <strong>Marginal</strong> räknas på försäljningspriset: vinst delat på priset. Det är hur stor andel av det kunden betalar som faktiskt blir vinst.</p>
<p>Eftersom priset alltid är högre än kostnaden delar de två talen med olika stora nämnare. Följden är enkel men viktig: <strong>marginalprocenten är alltid lägre än påläggsprocenten</strong> för samma affär. Tror du att ett påslag på 25 procent betyder 25 procent i vinst av priset, har du redan räknat fel.</p>

<h2>Exakt felet: att blanda ihop baserna</h2>
<p>Ta ett konkret exempel. Du köper material för 400 kr och säljer det för 1 000 kr. Påslaget är 150 procent (600 kr vinst på 400 kr inköp), men marginalen är bara 60 procent (600 kr av 1 000 kr). Samma affär, två helt olika procenttal.</p>
<p>Ett mindre men vanligare fall: du köper för 200 kr och \\"lägger på 50 procent\\". Priset blir 300 kr, vinsten 100 kr. Det är 50 procent i påslag – men bara 33,3 procent i marginal. Den som säger \\"jag lägger på 20 procent\\" och tror att 20 procent av fakturan är vinst har i själva verket cirka 17 procent marginal. På ett enskilt jobb känns skillnaden liten. På ett år, över hundratals fakturor, är det där pengarna försvinner.</p>

<h2>Formlerna du behöver (och en snabbtabell)</h2>
<p>Du behöver egentligen bara två formler för att aldrig råka fel igen:</p>
<ul>
<li><strong>Marginal = påslag ÷ (1 + påslag)</strong></li>
<li><strong>Påslag = marginal ÷ (1 − marginal)</strong></li>
</ul>
<p>Och den viktigaste av alla när du sätter timpris: <strong>Timpris = självkostnad ÷ (1 − önskad marginal)</strong>. Att dividera med (1 − marginal) ger rätt pris. Att i stället multiplicera med (1 + marginal) ger ett för lågt pris – det är själva kärnfelet i tusentals offerter.</p>
<p>En omvandlingstabell att fästa på väggen:</p>
<ul>
<li>15 % påslag = 13 % marginal</li>
<li>20 % påslag = 17 % marginal</li>
<li>25 % påslag = 20 % marginal</li>
<li>30 % påslag = 23 % marginal</li>
<li>50 % påslag = 33 % marginal</li>
</ul>
<p>Och åt andra hållet: vill du ha 40 procent marginal krävs 66,7 procent påslag. Marginalmålet är alltid brantare att nå än det ser ut.</p>

<h2>Från påslag till täckningsbidrag – kopplingen som ger lönsamhet</h2>
<p>Påslaget är verktyget. <strong>Täckningsbidraget (TB)</strong> är resultatet du är ute efter. TB är försäljningspriset minus de rörliga kostnaderna (särkostnaderna) för jobbet, uttryckt i kronor. <strong>Täckningsgraden (TG)</strong> är samma sak i procent: TB delat på försäljningspriset.</p>
<p>Poängen är att TB inte är din vinst. Täckningsbidraget ska först betala företagets fasta, gemensamma kostnader – lokal, bil, försäkringar, admin, all icke debiterbar tid – och det som blir kvar därefter är vinst. Sätter du påslaget för lågt räcker TB inte ens till samkostnaderna, och då jobbar du med förlust på fullbokad kalender. Att räkna i marginal och TG i stället för i löst tyckta påslag är det som gör lönsamheten synlig innan du skickar offerten.</p>

<h2>Byggföretagets självkostnad 2026 – räkna på rätt siffror</h2>
<p>Rätt marginal på fel självkostnad ger ändå fel pris. Bygg självkostnaden underifrån med 2026 års siffror:</p>
<ul>
<li><strong>Grundlön yrkesarbetare:</strong> 203 kr/tim enligt Byggavtalet från 1 maj 2026, motsvarande 35 322 kr/månad. Det är golvet.</li>
<li><strong>Arbetsgivaravgift:</strong> full avgift 31,42 procent ovanpå bruttolönen. Den är obligatorisk och måste ligga i självkostnaden innan du gör något påslag.</li>
<li><strong>Övriga omkostnader:</strong> försäkring, verktyg, transport, arbetskläder, admin.</li>
</ul>
<p>Det avgörande steget är att dela på <strong>debiterbara timmar</strong>, inte alla arbetstimmar. Restid, offertskrivning, inköp och garantibesök betalar ingen kund direkt. Just därför landar ett rimligt timpris ofta på 3–4 gånger yrkesarbetarens bruttolön, och marknaden 2026 ligger runt 560–1 200 kr/tim beroende på yrke. Trots det höga timpriset är den verkliga vinstmarginalen i praktiken ofta bara 10–15 procent – vilket visar hur lite utrymme det finns att räkna slarvigt.</p>

<h2>Material vs arbete – när påslag är rätt och när marginal är rätt</h2>
<p>Här sker en av branschens vanligaste sammanblandningar. De två delarna av en offert ska prissättas mot olika baser:</p>
<ul>
<li><strong>Material:</strong> ett påslag på 10–15 procent på inköpspriset är branschstandard och rätt bas. Det ska täcka tid för inköp, logistik, lagerhållning och garantiansvar. Påslag på inköp är helt korrekt här.</li>
<li><strong>Arbete:</strong> prissätts mot marginal av priset, eftersom timpriset ska bära en känd självkostnad plus vinst.</li>
</ul>
<p>Använder du samma logik rakt av på båda – till exempel \\"20 procent på allt\\" och tror det ger 20 procent vinst – underprissätter du systematiskt arbetet, som är den största posten i de flesta byggjobb.</p>

<h2>Så sätter du priset baklänges från önskad marginal</h2>
<p>Räkna alltid framåt från kostnaden och kontrollera i marginal. Ett exempel: självkostnaden för ett jobb är 60 000 kr (lön, avgifter, omkostnader, material). Du vill ha 25 procent marginal.</p>
<ol>
<li>Bestäm självkostnaden: 60 000 kr.</li>
<li>Bestäm mål-marginalen: 25 procent.</li>
<li>Dela med (1 − marginal): 60 000 ÷ 0,75 = <strong>80 000 kr</strong>.</li>
</ol>
<p>Hade du i stället multiplicerat 60 000 × 1,25 hade priset blivit 75 000 kr – och marginalen bara 20 procent, inte 25. En skillnad på 5 000 kr på ett enda jobb, i fel riktning. Kontrollräkna därför alltid den färdiga offerten i marginal (vinst ÷ pris), inte i påslag.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp tar inte bort räknandet – men gör det svårt att råka räkna fel. I offertmallen bygger du upp jobbet post för post med arbete och material var för sig, så att arbetet kan prissättas mot marginal och materialet mot påslag utan att baserna blandas ihop. Du ser täckningsbidraget i kronor och täckningsgraden i procent innan offerten går iväg, vilket gör det tydligt om ett jobb faktiskt bär sina kostnader. Kombinera det med kalkylatorn för att snabbt växla mellan påslag och marginal, så vet du att siffran i offerten betyder det du tror att den betyder.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan påslag och marginal?</h3>
<p>Påslag räknas på inköps- eller självkostnaden (vinst ÷ kostnad) och marginal räknas på försäljningspriset (vinst ÷ pris). De beskriver samma vinst men mot olika baser, och eftersom priset alltid är högre än kostnaden är marginalen alltid lägre än påslaget. 25 procent påslag motsvarar till exempel 20 procent marginal.</p>
<h3>Vad är täckningsbidrag för ett byggföretag?</h3>
<p>Täckningsbidrag (TB) är försäljningspriset minus de rörliga kostnaderna för jobbet, uttryckt i kronor. TB ska först täcka företagets fasta kostnader – lokal, bil, försäkring, admin och icke debiterbar tid – och det som blir kvar därefter är vinst. Täckningsgrad (TG) är samma sak i procent av priset.</p>
<h3>Hur räknar jag ut rätt timpris?</h3>
<p>Bygg först självkostnaden: lön (203 kr/tim enligt Byggavtalet 2026), plus 31,42 procent arbetsgivaravgift, plus omkostnader, delat på antalet debiterbara timmar. Sätt sedan priset med formeln självkostnad ÷ (1 − önskad marginal). Dividera – multiplicera inte med (1 + marginal), då blir priset för lågt.</p>
<h3>Vilket materialpåslag är rimligt?</h3>
<p>Ett påslag på 10–15 procent på inköpspriset är branschstandard och ska täcka tid för inköp, logistik, lager och garantiansvar. Materialet prissätts alltså mot inköp (påslag), medan arbetet prissätts mot pris (marginal) – två olika baser som inte bör blandas ihop.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna om dina egna påslag till verkliga marginaler i <a href="/sv/verktyg/paslag-marginal-kalkylator">påslag- och marginalkalkylatorn</a>, och bygg nästa jobb i <a href="/sv/verktyg/offert-mall">offertmallen</a> med arbete och material var för sig. Vill du se hur täckningsbidraget räknas ut automatiskt på dina offerter, <a href="/sv/contact">boka en demo</a> så visar vi.</p>
<p>Relaterat: <a href="/sv/blog/timpris-hantverkare">Så sätter du rätt timpris som hantverkare</a> och <a href="/sv/blog/paslag-pa-material">Påslag på material – vad som är rimligt och varför</a>.</p>
`;

const A_TACKNINGSBIDRAG_BYGGFORETAG: BlogPost = {
  _id: "code-"+"tackningsbidrag-byggforetag",
  title: "Täckningsbidrag för byggföretag: därför gör påslag/marginal-felet dig fattig på fullbokade dagar", slug: "tackningsbidrag-byggforetag", locale: "sv",
  excerpt: "Hantverkaren med fullbokad kalender och tomt konto har nästan alltid ett prissättningsfel – inte ett arbetsfel – och det bottnar i skillnaden mellan påslag och marginal.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_TACKNINGSBIDRAG_BYGGFORETAG_HTML,
  seoTitle: "Täckningsbidrag byggföretag | ByggExp", seoDescription: "Påslag på inköp, marginal på pris – blandar du ihop dem tappar du pengar på varje offert. Så räknar byggföretag rätt på täckningsbidrag 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:12:00.000Z", createdAt: "2026-08-18T18:12:00.000Z", updatedAt: "2026-08-18T18:12:00.000Z",
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

const A_KONTROLLANSVARIG_NAR_BEHOVS_HTML = `
<p>En av de första frågorna som dyker upp när ett bygglovsprojekt drar igång är om det behövs en kontrollansvarig (KA) – och vad det i så fall landar på i kostnad. Kort svar: KA krävs vid de flesta lov- och anmälningspliktiga åtgärder, och att anlita en kostar oftast mellan 10 000 och 50 000 kr beroende på projektets storlek. Som hantverkare eller byggföretag är det du som får förklara detta för kunden, så det lönar sig att ha svaren klara redan i offertskedet.</p>

<p>Ett bra sätt att lägga grunden är att strukturera kontrollerna tidigt. Använd gärna <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a> för att dokumentera de kontroller som KA sedan ska följa upp mot kontrollplanen.</p>

<h2>Vad är en kontrollansvarig (KA)?</h2>
<p>En kontrollansvarig är en certifierad person som biträder byggherren under byggprocessen. Rollen regleras i plan- och bygglagen (PBL 10 kap. 9 §) och innebär att KA ska se till att bygget uppfyller gällande krav och att kontrollplanen följs. KA är alltså inte samma sak som en besiktningsman eller en projektledare – det är en oberoende funktion med lagstadgade uppgifter.</p>
<p>Enligt PBL 10 kap. 11 § ska KA bland annat:</p>
<ul>
<li>biträda byggherren med förslag till kontrollplan,</li>
<li>se till att kontrollplanen och gällande bestämmelser följs och att nödvändiga kontroller utförs,</li>
<li>meddela byggherren, och vid behov byggnadsnämnden, om avvikelser upptäcks,</li>
<li>närvara vid tekniskt samråd, besiktningar och slutsamråd,</li>
<li>lämna ett utlåtande till byggherren och nämnden inför slutbeskedet.</li>
</ul>
<p>Ett krav som ofta missas: KA måste ha en <strong>självständig ställning</strong> i förhållande till den som utför åtgärden (PBL 10 kap. 9 §). En KA kan alltså inte vara anställd hos entreprenören som bygger. Bygger ditt företag huset kan ni inte samtidigt vara kontrollansvariga för det – kunden måste anlita en oberoende KA.</p>

<h2>När behövs en kontrollansvarig?</h2>
<p>Huvudregeln är enkel att komma ihåg: kräver åtgärden en kontrollplan, så krävs det en kontrollansvarig. I praktiken innebär det att KA behövs vid de flesta lov- och anmälningspliktiga åtgärder. Konkret handlar det ofta om:</p>
<ul>
<li>nybyggnad,</li>
<li>större tillbyggnad,</li>
<li>ändring av bärande konstruktion,</li>
<li>väsentlig ändring av VA eller ventilation,</li>
<li>installation av eldstad eller rökkanal (i vissa fall),</li>
<li>rivning som kräver lov eller anmälan.</li>
</ul>
<p>Det är byggnadsnämnden i kommunen som avgör i varje enskilt fall om KA behövs. Utgångspunkten är dock tydlig: när ett projekt är så pass omfattande att det behöver följas upp mot en kontrollplan, ska en KA vara utsedd.</p>

<h2>När behövs INGEN kontrollansvarig?</h2>
<p>Det finns tydliga undantag. Grunden för dem finns i plan- och byggförordningen (PBF 2011:338, 7 kap. 5 §). KA krävs normalt inte för:</p>
<ul>
<li>åtgärder som varken kräver lov eller anmälan, till exempel en friggebod,</li>
<li>små ändringar av en- eller tvåbostadshus, om byggnadsnämnden inte beslutar annat.</li>
</ul>
<p>En vanlig missuppfattning gäller Attefallsåtgärder, som ett komplementbostadshus på max 30 kvm. Dessa är <strong>inte automatiskt undantagna</strong> – byggnadsnämnden kan besluta att KA ändå krävs. Utgå därför aldrig från att en Attefallsåtgärd är befriad från KA-kravet utan att ha stämt av med kommunen. Betona för kunden att det alltid är nämnden som gör bedömningen i det enskilda fallet.</p>
<p>Notera också att Boverkets nya byggregler gäller fullt ut från 1 juli 2026. Att lovplikten slopats för vissa åtgärder betyder inte att de tekniska kraven försvinner – även åtgärder utan bygglovsplikt måste uppfylla de nya reglerna, och ett eventuellt KA-krav påverkas inte av att lovplikten tagits bort.</p>

<h2>Vad kostar en kontrollansvarig 2026?</h2>
<p>Priset styrs framför allt av projektets komplexitet, antalet arbetsplatsbesök och restid. Som riktvärden för 2026 (exklusive moms) gäller:</p>
<ul>
<li><strong>Mindre projekt</strong> (garage, mindre tillbyggnad): ca 10 000–20 000 kr.</li>
<li><strong>Villa / medelstort projekt:</strong> ca 15 000–30 000 kr.</li>
<li><strong>Större eller kommersiella projekt:</strong> från ca 30 000 kr och uppåt – för riktigt stora byggen 50 000–200 000 kr eller mer.</li>
</ul>
<p>För en normal villa hamnar alltså kostnaden vanligen i intervallet 15 000–30 000 kr. Ett litet garagebygge kan klaras för runt 10 000–15 000 kr, medan ett flerbostadshus snabbt passerar 50 000 kr. Att KA behöver göra fler platsbesök, eller att objektet ligger långt bort, driver upp priset – be alltid om en offert som specificerar antal besök.</p>
<p>En sak att inte blanda ihop: att <em>själv</em> bli certifierad KA kostar ca 8 500–14 500 kr för utbildning plus ca 8 000–15 000 kr i certifieringsavgift (beroende på organ och nivå), samt ca 495 kr exkl. moms för ID-kort. Det är kostnaden för att bli KA – inte för att anlita en.</p>

<h2>N- eller K-behörighet – vilken KA behöver ditt projekt?</h2>
<p>Certifierade kontrollansvariga finns i två behörighetsnivåer, och det spelar roll att välja rätt:</p>
<ul>
<li><strong>N – normal art:</strong> täcker ny-, till- och ombyggnad samt rivning av en- och tvåbostadshus, och mindre projekt i övrigt. Det räcker för de allra flesta villaprojekt.</li>
<li><strong>K – komplicerad art:</strong> krävs för byggnader med fler än två våningar samt större och mer komplexa projekt.</li>
</ul>
<p>Att anlita en KA med fel behörighetsnivå kan försena bygglovet, eftersom nämnden inte godkänner en KA som saknar rätt behörighet för objektet. Kontrollera nivån innan avtal skrivs. Certifieringen utförs av ackrediterade certifieringsorgan – RISE, Kiwa och DNV – och gäller normalt i fem år. För förnyelse krävs dokumenterade KA-uppdrag och fortbildning, vilket är en indikation på att KA:n är aktiv i yrket.</p>

<h2>KA i bygglovsflödet steg för steg</h2>
<p>För att kunden ska förstå var KA kommer in, hjälper det att beskriva flödet:</p>
<ol>
<li>KA utses redan i samband med ansökan eller anmälan.</li>
<li>Tekniskt samråd hålls med byggnadsnämnden, där KA närvarar.</li>
<li>Nämnden ger startbesked – bygget får påbörjas.</li>
<li>Kontroller utförs löpande under bygget enligt kontrollplanen.</li>
<li>Slutsamråd hålls när bygget är klart.</li>
<li>KA lämnar sitt utlåtande till byggherren och nämnden.</li>
<li>Nämnden utfärdar slutbesked – då får byggnaden tas i bruk.</li>
</ol>
<p>KA:n är alltså med genom hela processen, från ansökan till slutbesked. Ju bättre de löpande kontrollerna dokumenteras, desto smidigare blir slutsamrådet.</p>

<h2>Så väljer du rätt KA</h2>
<ul>
<li><strong>Certifiering:</strong> kontrollera att personen är certifierad – kommunen har ofta listor att stämma av mot.</li>
<li><strong>Rätt behörighetsnivå:</strong> N eller K beroende på projektet.</li>
<li><strong>Oberoende:</strong> KA får inte vara knuten till entreprenören som utför åtgärden.</li>
<li><strong>Referenser:</strong> be om liknande genomförda projekt.</li>
<li><strong>Tydlig offert:</strong> antal platsbesök, restid och vad som ingår ska framgå.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte den kontrollansvariga – KA är en lagstadgad, oberoende roll. Men verktygen hjälper dig och kunden att hålla ordning på det som KA sedan följer upp. Med en strukturerad egenkontroll dokumenteras varje moment löpande, vilket ger KA ett bättre underlag inför tekniskt samråd och slutsamråd. Du kan samla foton, checklistor och avvikelser på ett ställe, så att kontrollplanens punkter blir enkla att bocka av. Det minskar risken för att kontroller saknas när slutbeskedet ska utfärdas – och gör att projektet flyter på utan onödiga förseningar.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag som byggföretag anlita en egen kontrollansvarig?</h3>
<p>Nej. Det är byggherren (oftast din kund) som ansvarar för att utse KA. Eftersom KA måste vara oberoende av den som utför bygget, kan ditt företag inte vara KA för ett projekt ni själva bygger. Däremot är det bra att kunna vägleda kunden om när KA behövs.</p>
<h3>Vad kostar det att anlita en kontrollansvarig 2026?</h3>
<p>För ett mindre projekt ca 10 000–20 000 kr, för en villa ca 15 000–30 000 kr och för större projekt från ca 30 000 kr och uppåt (exkl. moms). Priset styrs av antal arbetsplatsbesök och projektets komplexitet.</p>
<h3>Behövs KA för en Attefallsåtgärd?</h3>
<p>Inte automatiskt, men byggnadsnämnden kan besluta att KA ändå krävs. Attefallsåtgärder är inte undantagna på samma sätt som åtgärder helt utan lov eller anmälan. Stäm alltid av med kommunen i det enskilda fallet.</p>
<h3>Vad är skillnaden mellan N- och K-behörighet?</h3>
<p>N (normal art) täcker en- och tvåbostadshus samt mindre projekt. K (komplicerad art) krävs för byggnader med fler än två våningar och större, mer komplexa projekt. Fel behörighet kan försena bygglovet.</p>

<h2>Kom igång</h2>
<p>Lägg grunden för en smidig kontrollprocess redan från start. Använd <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a> för att dokumentera kontrollerna löpande, så att KA har allt underlag som behövs inför slutbeskedet. Vill du se hur ByggExp kan hålla ihop dokumentationen i dina projekt? <a href="/sv/contact">Boka en demo</a> så visar vi hur det fungerar i praktiken.</p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a> och <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan – när och hur</a>.</p>
`;

const A_KONTROLLANSVARIG_NAR_BEHOVS: BlogPost = {
  _id: "code-"+"kontrollansvarig-nar-behovs",
  title: "Kontrollansvarig – när behövs det och vad kostar det?", slug: "kontrollansvarig-nar-behovs", locale: "sv",
  excerpt: "En genomgång av när kontrollansvarig krävs, vad en KA kostar 2026 och skillnaden mellan N- och K-behörighet i bygglovsflödet.", tag: "Bygglov",
  coverImageUrl: "/landing/features/5planering.webp", contentHtml: A_KONTROLLANSVARIG_NAR_BEHOVS_HTML,
  seoTitle: "Kontrollansvarig när & kostnad | ByggExp", seoDescription: "När krävs kontrollansvarig, vad kostar en KA 2026 (10 000–50 000 kr) och skillnaden mellan N- och K-behörighet. Guide för hantverkare och byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/5planering.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:18:00.000Z", createdAt: "2026-08-18T18:18:00.000Z", updatedAt: "2026-08-18T18:18:00.000Z",
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

const A_OVERLAMNING_RELATIONSHANDLINGAR_HTML = `
<p>Projektet är i mål. Sista skruven är dragen, slutbesiktningen är avklarad och slutfakturan ligger klar. Men är projektet verkligen avslutat? Alltför ofta godkänns slutbesiktningen samtidigt som relationshandlingarna saknas, restpunkterna hänger löst i en oläslig anteckning och drift- och underhållsinstruktionerna aldrig blir levererade. Det är då problemen börjar – för det är just överlämningen som avgör om du får betalt i tid och hur du står dig under de tio år av ansvar som följer. En strukturerad överlämning med en tydlig <strong>överlämning relationshandlingar checklista</strong> är inte pappersexercis, utan ett affärsskydd. Här går vi igenom vad som gäller enligt AB 04 och ABT 06, och hur du håller ordning på restpunkter och procent klart genom hela slutfasen.</p>

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

const A_ENTREPRENADKONTRAKT_MALL_HTML = `
<p>Varje år förlorar byggföretag pengar på arbeten de faktiskt utfört – inte för att jobbet var dåligt, utan för att avtalet var svagt eller muntligt. När beställaren bestrider en faktura eller påstår att något var fel är det avtalstexten som avgör, inte vad ni kom överens om över telefon. Ett muntligt avtal är giltigt, men i praktiken näst intill omöjligt att bevisa. Den här guiden går igenom vad ett entreprenadkontrakt måste innehålla för att hålla vid tvist – och ger dig en <strong>entreprenadkontrakt mall gratis</strong> som du kan fylla i och skicka samma dag.</p>

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

const A_KONTROLLPLAN_MALL_BYGGLOV_HTML = `
<p>De flesta åtgärder som kräver bygglov eller anmälan kräver också en kontrollplan – nybyggnad, tillbyggnad, fasadändring, rivning och installation av eldstad, för att nämna några. Det är byggherren (fastighetsägaren) som enligt lag ansvarar för att en kontrollplan finns, inte kommunen. Den goda nyheten för dig som hantverkare: för enkla ärenden krävs ingen kontrollansvarig, och då kan du skriva kontrollplanen själv åt kunden. Det sparar KA-arvode och gör dig till en mer komplett leverantör. Utmaningen är att många mallar på nätet är gamla och vaga – och en generisk plan blir underkänd av byggnadsnämnden.</p>

<p>Med <a href="/sv/verktyg/egenkontroll-mall">vår gratis mall för egenkontroll och kontrollplan →</a> fyller du i uppgifterna och får en PBL-korrekt kontrollplan som PDF på minuter – klar att lämna in med bygglovsansökan.</p>
<p><a href="/sv/verktyg/kontrollplan-mall">Skapa en kontrollplan enligt PBL med vår gratis mall (PDF & Excel) -&gt;</a></p>

<h2>Vad är en kontrollplan – och vad kräver PBL?</h2>
<p>En kontrollplan är en kvalitetssäkrings-checklista för bygget. Den beskriver vad som ska kontrolleras, hur det ska ske och vem som ansvarar. Enligt plan- och bygglagen (PBL 10 kap.) ska en kontrollplan innehålla fyra saker:</p>
<ul>
<li><strong>Vilka kontroller som ska göras</strong> och mot vilka krav de kontrolleras (till exempel Boverkets byggregler, Eurokoderna, det beviljade bygglovet och ritningarna).</li>
<li><strong>Vem som utför varje kontroll och hur</strong> den genomförs.</li>
<li><strong>Vilka anmälningar</strong> som ska göras till byggnadsnämnden under arbetets gång.</li>
<li><strong>Vilka arbetsplatsbesök</strong> byggnadsnämnden bör göra och när.</li>
</ul>
<p>Varje kontroll ska dessutom dokumenteras och signeras. Godtagbar dokumentation är till exempel besiktningsprotokoll, kontrollintyg, provningsintyg, mätprotokoll och foton – och den ska verifieras med en signatur av den person som kontrollerat att kravet är uppfyllt. Kontrollplanen ska också ange i vilken omfattning varje kontroll görs som byggherrens dokumenterade egenkontroll eller av en sakkunnig.</p>

<h2>När behöver du INTE en kontrollansvarig?</h2>
<p>En kontrollansvarig (KA) krävs inte för enklare åtgärder. Det gäller exempelvis mindre tillbyggnader, attefallshus och byte av takbeklädnad. I dessa enkla ärenden skriver byggherren – eller den anlitade hantverkaren – kontrollplanen själv. Kommunerna kallar det ofta en <strong>enkel kontrollplan enligt PBL 10 kap. 6–8 §§</strong>.</p>
<p>För dig som hantverkare betyder det en konkret möjlighet. I stället för att kunden ska anlita en KA för ett enkelt jobb kan du leverera en korrekt kontrollplan som en del av uppdraget. Det höjer värdet på din offert och gör hela processen smidigare mot kommunen. Kravet är att planen faktiskt är anpassad till projektet – inte en tom standardmall. Fyll i <a href="/sv/verktyg/egenkontroll-mall">mallen och ladda ner planen som PDF →</a> med kontrollpunkter som passar just den åtgärd du utför.</p>

<h2>Nytt 2026: kontrollplan och avfallshanteringsplan är nu två dokument</h2>
<p>Från och med 1 juli 2026 har reglerna ändrats på en viktig punkt. Den gamla kontrollplanen har delats upp i två separata dokument: en <strong>kontrollplan</strong> och en fristående <strong>avfallshanteringsplan</strong>. Avfallshantering är alltså inte längre en sektion inuti kontrollplanen, utan ett eget dokument.</p>
<p>Reformen 2026 innebär också att vissa åtgärder får <strong>obligatorisk sakkunnigkontroll</strong>, och att byggnadsnämnden får ett nytt verktyg – <strong>kontrollföreläggande</strong> – för att kunna förelägga att kontroller genomförs. Det här är själva anledningen till att äldre mallar på nätet är föråldrade: de har fortfarande avfallshanteringen inbakad i kontrollplanen. Använd en uppdaterad mall så att du inte lämnar in en plan enligt gammalt regelverk.</p>

<h2>Så fyller du i kontrollplanen steg för steg</h2>
<p>En bra kontrollplan är byggd som en tabell med tydliga kolumner. För varje rad anger du:</p>
<ol>
<li><strong>Kontrollpunkt</strong> – vad som kontrolleras (till exempel grundläggning, fuktskydd, bärande konstruktion, brandskydd).</li>
<li><strong>Hur kontrolleras</strong> – metod, exempelvis okulär kontroll, mätning eller provning.</li>
<li><strong>Mot vilket krav</strong> – BBR, EKS/Eurokod, bygglovet eller ritningen.</li>
<li><strong>Vem</strong> – egenkontroll av byggherren/entreprenören eller sakkunnigkontroll.</li>
<li><strong>Resultat och signatur</strong> – utfallet och underskrift av den som kontrollerat.</li>
</ol>
<p>Så här kan några rader se ut för en typisk tillbyggnad:</p>
<ul>
<li><strong>Grundläggning</strong> – okulär kontroll och mätning mot konstruktionsritning (EKS) – egenkontroll – signatur.</li>
<li><strong>Fuktskydd mot mark</strong> – okulär kontroll mot BBR och ritning – egenkontroll – signatur.</li>
<li><strong>Bärande stomme</strong> – kontroll mot konstruktionsritning och EKS – egenkontroll eller sakkunnig beroende på risk – signatur.</li>
<li><strong>Lufttäthet och isolering</strong> – kontroll mot BBR – egenkontroll – signatur.</li>
</ul>
<p>Riskbedömningen avgör om en punkt kräver sakkunnigkontroll i stället för egenkontroll. Särskild hänsyn tas till risken för allvarlig personskada eller störning för samhälle och miljö om kravet inte uppfylls. Ta bara med kontrollpunkter som är relevanta för det aktuella projektet – vaga och generiska planer är den vanligaste orsaken till kompletteringskrav.</p>

<h2>Från ansökan till slutbesked – processen</h2>
<p>Ett förslag till kontrollplan ska lämnas in redan tillsammans med bygglovsansökan eller anmälan. Byggnadsnämnden fastställer sedan kontrollplanen i startbeskedet. Arbetet får inte påbörjas innan startbesked har utfärdats – att börja bygga för tidigt kan utlösa en byggsanktionsavgift.</p>
<p>När bygget är klart lämnar du in de dokumenterade och signerade kontrollerna till byggnadsnämnden. Slutbesked – tillståndet att ta byggnaden i bruk – förutsätter att den fastställda kontrollplanen har följts och att dokumentationen är komplett. Att flytta in eller ta byggnaden i bruk utan slutbesked kan också leda till sanktionsavgift.</p>

<h2>Vanliga misstag hantverkare gör</h2>
<ul>
<li>Använder en generisk mall med kontrollpunkter som inte passar projektet.</li>
<li>Skriver vaga punkter där det inte framgår vad, hur eller mot vilket krav.</li>
<li>Glömmer att signera och dokumentera varje utförd kontroll.</li>
<li>Lägger avfallshanteringen i kontrollplanen i stället för i den separata avfallshanteringsplanen (nytt krav 2026).</li>
<li>Påbörjar arbetet innan startbesked – och riskerar byggsanktionsavgift.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp fyller du i uppgifterna om åtgärden och får en strukturerad kontrollplan med rätt kolumner – kontrollpunkt, metod, krav, ansvarig och signatur. Mallen är uppdaterad efter 2026 års regler, så avfallshanteringen hålls som ett eget dokument och du slipper föråldrade nätmallar. Resultatet blir en färdig PDF som du kan lämna till kunden eller kommunen. Verktyget ersätter inte en kontrollansvarig där en KA krävs, men för enkla ärenden ger det dig en korrekt grund att utgå från. Du hittar det tillsammans med våra övriga <a href="/sv/verktyg">gratis verktyg för hantverkare</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag anlita en kontrollansvarig?</h3>
<p>Nej, inte för enkla åtgärder som mindre tillbyggnader, attefallshus och byte av takbeklädnad. Då kan byggherren eller den anlitade hantverkaren skriva en enkel kontrollplan själv enligt PBL 10 kap. 6–8 §§. För större och mer komplexa projekt krävs en KA.</p>
<h3>När ska kontrollplanen lämnas in?</h3>
<p>Ett förslag till kontrollplan ska lämnas in redan med bygglovsansökan eller anmälan. Byggnadsnämnden fastställer planen i startbeskedet, och arbetet får inte påbörjas innan startbesked har utfärdats.</p>
<h3>Vad är skillnaden efter regeländringen 2026?</h3>
<p>Sedan 1 juli 2026 delas den gamla kontrollplanen upp i två dokument: en kontrollplan och en separat avfallshanteringsplan. Dessutom införs obligatorisk sakkunnigkontroll för vissa åtgärder och ett nytt kontrollföreläggande för byggnadsnämnden.</p>
<h3>Vad händer om jag saknar kontrollplan eller startbesked?</h3>
<p>Slutbesked förutsätter att den fastställda kontrollplanen följts och att dokumenterade, signerade kontroller lämnats in. Att påbörja bygget utan startbesked eller ta byggnaden i bruk utan slutbesked kan utlösa en byggsanktionsavgift.</p>

<h2>Kom igång</h2>
<p>Skapa en PBL-korrekt kontrollplan direkt: den är anpassad efter 2026 års regler, kräver ingen kontrollansvarig för enkla ärenden och du får en färdig PDF att lämna till kommunen. Testa <a href="/sv/verktyg/egenkontroll-mall">vår mall för egenkontroll och kontrollplan →</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du får med kontrolldokumentationen i hela projektflödet.</p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt – så dokumenterar du rätt</a> och <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan – när krävs den och vad ska ingå</a>.</p>
`;

const A_KONTROLLPLAN_MALL_BYGGLOV: BlogPost = {
  _id: "code-"+"kontrollplan-mall-bygglov",
  title: "Kontrollplan för bygglov – så gör du den själv (mall + PDF)", slug: "kontrollplan-mall-bygglov", locale: "sv",
  excerpt: "De flesta bygglov och anmälningar kräver en kontrollplan enligt PBL – för enkla ärenden kan du som hantverkare skriva den själv och lämna en färdig PDF till kommunen.", tag: "Bygglov",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_KONTROLLPLAN_MALL_BYGGLOV_HTML,
  seoTitle: "Kontrollplan mall bygglov | ByggExp", seoDescription: "De flesta bygglov kräver en kontrollplan enligt PBL. För enkla ärenden skriver du den själv – utan kontrollansvarig. Mall som ger en klar PDF till kommunen.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:33:00.000Z", createdAt: "2026-08-18T18:33:00.000Z", updatedAt: "2026-08-18T18:33:00.000Z",
};

const A_DROJSMALSRANTA_2026_HTML = `
<p>En obetald faktura är inget du bara ska vänta ut. Som byggföretag har du enligt räntelagen rätt att ta ut dröjsmålsränta på sena betalningar – och för 2026 är den lagstadgade räntan 10,00 % per år. Räknat på ett par större byggfakturor blir det snabbt tusenlappar som du har rätt till, plus fasta avgifter för besväret. Här går vi igenom exakt hur du räknar, när du får ta ut räntan och hur du driver in pengarna.</p>

<p>Vill du komma igång direkt lägger du in korrekta betalningsvillkor och förfallodag redan när fakturan skapas – testa vår gratis <a href="/sv/verktyg/faktura-mall">fakturamall för byggföretag -&gt;</a> så att räntan börjar löpa automatiskt när kunden är sen.</p>
<p><a href="/sv/verktyg/drojsmalsranta-kalkylator">Räkna ut exakt dröjsmålsränta på en obetald faktura med vår gratis kalkylator -&gt;</a></p>

<h2>Snabbsvar: dröjsmålsränta 2026</h2>
<p><strong>Dröjsmålsräntan 2026 är 10,00 % per år.</strong> Den består av referensräntan 2,00 % plus 8 procentenheter enligt räntelagen (1975:635) 6 §. Siffran gäller hela 2026 – både första och andra halvåret – eftersom referensräntan ligger kvar på 2,00 % vid båda fastställelsetillfällena.</p>

<h2>Vad är dröjsmålsränta och referensränta?</h2>
<p>Dröjsmålsränta är den ränta du får ta ut när en kund betalar för sent. Grunden finns i räntelagen (1975:635). Enligt 6 § är den lagstadgade dröjsmålsräntan referensräntan enligt 9 § plus åtta procentenheter, om inget annat har avtalats.</p>
<p>Referensräntan sätts av Riksbanken två gånger per år, den 1 januari och den 1 juli. Den motsvarar styrräntan vid utgången av föregående halvår, avrundad uppåt till närmast högre halva procentenhet. Just nu har styrräntan legat på 1,75 % sedan oktober 2025, vilket avrundas upp till en referensränta på 2,00 % för hela 2026.</p>
<p>Blanda inte ihop dröjsmålsräntan med avkastningsränta. Avkastningsränta enligt 5 § (ränta innan en fordran förfallit) är referensräntan plus 2 procentenheter, alltså 4,00 % för 2026. Det är dröjsmålsräntan på 10,00 % du använder mot en sen kund.</p>

<h2>Dröjsmålsränta 2026 – och de senaste årens siffror</h2>
<p>Referensräntan har fallit de senaste åren, vilket också sänkt dröjsmålsräntan. Så här ser utvecklingen ut:</p>
<ul>
<li><strong>2024:</strong> referensränta 4,00 % → dröjsmålsränta 12,00 %</li>
<li><strong>H1 2025:</strong> referensränta 3,00 % → dröjsmålsränta 11,00 %</li>
<li><strong>H2 2025 och hela 2026:</strong> referensränta 2,00 % → dröjsmålsränta 10,00 %</li>
</ul>
<p>Att räntan är oförändrad båda halvåren 2026 gör din administration enklare: du använder samma räntesats, 10,00 %, oavsett om kunden blir sen i mars eller i november.</p>

<h2>När får du som byggföretag ta ut dröjsmålsränta?</h2>
<p>Mellan näringsidkare (B2B) gäller tydliga regler:</p>
<ul>
<li><strong>Avtalad förfallodag:</strong> har ni kommit överens om en förfallodag i förväg löper dröjsmålsräntan från den dagen (3 §).</li>
<li><strong>Ingen avtalad förfallodag:</strong> då får du ta ut ränta från 30 dagar efter att fakturan eller kravet skickades (4 §).</li>
<li><strong>Behöver inte stå på fakturan:</strong> mellan företag har du rätt till dröjsmålsränta även om det inte uttryckligen står angivet på fakturan att ränta tas ut.</li>
</ul>
<p>En vara eller tjänst ska enligt 2 a § betalas senast 30 dagar efter krav. Längre betalningstid mellan företag gäller bara om du som borgenär uttryckligen har godkänt det – avtalsvillkor som inskränker den rätten är utan verkan. Har du en myndighet eller offentlig aktör som kund gäller alltid 30 dagar.</p>

<h2>Så räknar du ut dröjsmålsräntan</h2>
<p>Formeln är enkel ränta, inte ränta-på-ränta:</p>
<p><strong>Dröjsmålsränta (kr) = fakturabelopp × (räntesats / 100) × (förseningsdagar / 365)</strong></p>
<p>Räntan beräknas på hela fakturabeloppet inklusive moms. Ett konkret exempel för 2026:</p>
<ul>
<li>Byggfaktura: 50 000 kr inkl. moms</li>
<li>Försening: 30 dagar</li>
<li>Räntesats: 10,00 %</li>
<li>Beräkning: 50 000 × 0,10 × 30/365 ≈ <strong>411 kr</strong></li>
</ul>
<p>Till detta lägger du 450 kr i förseningsersättning (se nedan). Kunden ska alltså betala cirka 861 kr utöver själva fakturabeloppet – och räntan fortsätter att ticka för varje dag betalningen dröjer.</p>

<h2>Utöver räntan – ta betalt för besväret</h2>
<p>Vid B2B-dröjsmål har du enligt lagen om ersättning för inkassokostnader (1981:739) automatiskt rätt till ersättning, helt utan påminnelse:</p>
<ul>
<li><strong>Förseningsersättning: 450 kr</strong> – automatiskt vid näringsidkares dröjsmål, ingen påminnelse krävs.</li>
<li>Betalningspåminnelse: högst 60 kr</li>
<li>Inkassokrav: 180 kr</li>
<li>Upprättande av amorteringsplan: 170 kr</li>
</ul>
<p>De 450 kronorna är särskilt värda att komma ihåg – många hantverkare missar dem helt trots att de utgår automatiskt.</p>

<h2>Kan du avtala om en högre ränta?</h2>
<p>Räntelagen är dispositiv mellan företag (1 §). Det betyder att du och din B2B-kund får avtala om en högre eller annan dröjsmålsränta än den lagstadgade. Standardavtal som AB 04 och ABT 06 hänvisar ofta till räntelagen och har egna betalningsvillkor – läs kontraktet innan du fakturerar så att du använder rätt sats.</p>
<p>Mot en privatperson gäller andra regler. Mot konsument är räntelagen tvingande till konsumentens förmån (8 §), och villkor som är till konsumentens nackdel är utan verkan. Du kan alltså inte avtala bort konsumentens skydd på samma sätt som mellan företag.</p>

<h2>Driva in en obetald faktura – steg för steg</h2>
<p>När en kund inte betalar i tid följer du en tydlig trappa:</p>
<ol>
<li><strong>Tydlig faktura:</strong> se till att förfallodag, betalningsvillkor och att dröjsmålsränta tas ut framgår redan från början.</li>
<li><strong>Betalningspåminnelse:</strong> skicka en påminnelse när förfallodagen passerats, med den upplupna räntan och påminnelseavgiften.</li>
<li><strong>Inkassokrav:</strong> går det fortfarande inte att få betalt skickar du (eller ett inkassobolag) ett inkassokrav.</li>
<li><strong>Betalningsföreläggande:</strong> som sista steg ansöker du om betalningsföreläggande hos Kronofogden.</li>
</ol>
<p>Tips: dokumentera allt. Med rätt underlag – avtal, faktura, förfallodag och tidsstämplade påminnelser – står du starkt hela vägen till Kronofogden.</p>

<h2>Vanliga misstag</h2>
<ul>
<li>Att glömma de 450 kronorna i förseningsersättning som utgår automatiskt.</li>
<li>Att tro att räntan bara får tas ut om den står tryckt på fakturan – mellan företag gäller den ändå.</li>
<li>Att räkna ränta-på-ränta – dröjsmålsränta är enkel ränta.</li>
<li>Att räkna på beloppet exklusive moms – räntan beräknas på hela summan inkl. moms.</li>
<li>Att acceptera 60 eller 90 dagars betalningstid utan att uttryckligen ha godkänt det.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du fakturan med förfallodag och betalningsvillkor direkt, så att underlaget för dröjsmålsränta finns på plats från dag ett. Du har koll på vilka fakturor som passerat förfallodagen och kan agera i tid i stället för att upptäcka det månader senare. Systemet ersätter inte ett inkassobolag eller juridisk rådgivning – men det ger dig ordning på fakturor, förfallodagar och dokumentation, vilket är precis det du behöver för att kunna kräva rätt ränta och driva in obetalda pengar.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är dröjsmålsräntan 2026?</h3>
<p>Den lagstadgade dröjsmålsräntan för 2026 är 10,00 % per år. Den utgörs av referensräntan 2,00 % plus 8 procentenheter enligt räntelagen 6 §, och gäller hela året.</p>
<h3>Måste dröjsmålsränta stå på fakturan?</h3>
<p>Nej. Mellan företag (B2B) har du rätt till dröjsmålsränta även om det inte står angivet på fakturan att ränta tas ut. Räntan löper från avtalad förfallodag, eller annars 30 dagar efter att kravet skickats.</p>
<h3>Hur räknar man ut dröjsmålsränta?</h3>
<p>Använd formeln fakturabelopp × (räntesats / 100) × (förseningsdagar / 365). Det är enkel ränta och beräknas på hela beloppet inklusive moms. Exempel: 50 000 kr, 30 dagar sent, 10 % ≈ 411 kr.</p>
<h3>Får jag ta ut 450 kr förseningsersättning?</h3>
<p>Ja. Vid dröjsmål mellan företag har du automatiskt rätt till 450 kr i förseningsersättning enligt lagen om ersättning för inkassokostnader (1981:739), utan att först behöva skicka en påminnelse.</p>

<h2>Kom igång</h2>
<p>Skapa fakturor med rätt förfallodag och betalningsvillkor från start med vår <a href="/sv/verktyg/faktura-mall">gratis fakturamall</a>, och utforska fler <a href="/sv/verktyg">gratis verktyg för byggföretag</a>. Vill du se hur ByggExp hjälper dig hålla koll på förfallna fakturor? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a> och <a href="/sv/blog/betalningsvillkor-faktura-bygg">Betalningsvillkor på byggfakturor</a>.</p>
`;

const A_DROJSMALSRANTA_2026: BlogPost = {
  _id: "code-"+"drojsmalsranta-2026",
  title: "Dröjsmålsränta 2026 för byggföretag – räkna rätt och få betalt", slug: "drojsmalsranta-2026", locale: "sv",
  excerpt: "Dröjsmålsräntan 2026 är 10,00 % – så räknar du rätt enligt räntelagen, lägger på förseningsersättning och driver in obetalda byggfakturor.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/8fakturor.webp", contentHtml: A_DROJSMALSRANTA_2026_HTML,
  seoTitle: "Dröjsmålsränta 2026 för bygg | ByggExp", seoDescription: "Dröjsmålsränta 2026 är 10,00 % (referensränta 2,00 % + 8 p.e.). Så räknar byggföretag rätt, tar ut 450 kr förseningsersättning och driver in obetalda fakturor.",
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:36:00.000Z", createdAt: "2026-08-18T18:36:00.000Z", updatedAt: "2026-08-18T18:36:00.000Z",
};

const A_SPILLPROCENT_BYGG_MATERIAL_HTML = `
<p>En materialkalkyl som utgår från den nettomängd du mäter upp på ritningen blir nästan alltid för låg. Verkligheten kapar, spräcker och slösar — och glömmer du spillet i offerten ser jobbet billigare ut på papperet än det blir på bygget. Skillnaden hamnar rakt i din marginal, eller som en tråkig efterbeställning mitt i etappen. Rätt spillprocent per material är därför ingen gissning, utan en kalkylpost du ska ha koll på innan du prissätter.</p>

<p>Vill du räkna snabbt och rätt kan du använda <a href="/sv/verktyg/betong-kalkylator">vår gratis betongkalkylator</a>, som redan har ett spillpåslag inbyggt så att du får inköpsmängden — inte bara den teoretiska nettovolymen.</p>
<p><a href="/sv/verktyg/spillprocent-kalkylator">Räkna ut materialåtgång med spill i vår gratis spillkalkylator -&gt;</a></p>

<h2>Spillprocent och spillfaktor — grundformeln</h2>
<p>Spillprocent är den mängd material du beställer <em>utöver</em> den uppmätta nettomängden för att täcka kapspill, kantspill, brott och rena misstag. Den uttrycks antingen som en procent (10 %) eller som en spillfaktor — en multiplikator (1,10). Grundformeln i all byggkalkyl är enkel:</p>
<p><strong>nettomängd × spillfaktor = inköpsmängd</strong></p>
<p>Ett konkret exempel: du ska skivbeklä 100 m² vägg med gips. Med ett spillpåslag på 12 % blir det 100 m² × 1,12 = 112 m² att beställa. Räknar du i stället med 5 % får du 105 m² — och de sju kvadratmeter som saknas blir en akut extraresa till grossisten när jobbet redan är i gång.</p>

<h2>Vad är spillprocent — och varför är det inte "slöseri"?</h2>
<p>Det är lätt att blanda ihop två helt olika saker. Å ena sidan finns det <em>oundvikliga</em> spillet: den bit gips du kapar bort runt ett fönster, kanten på kakelplattan som måste passas mot en nisch, resten i betongbilen. Det spillet uppstår oavsett hur skickligt du jobbar och ska vara med i kalkylen. Å andra sidan finns verkligt materialsvinn — skivor som lagras fel och böjer sig, plattor som tappas, felkap som kunde undvikits. Det är kostnader du kan pressa med planering.</p>
<p>Poängen: rätt spillpåslag är en kalkylpost, inte en säkerhetsmarginal du chansar dig till. Ett för lågt påslag straffar dig ekonomiskt, ett för högt binder kapital och skapar avfall. Målet är att träffa rätt schablon för materialet och projektet.</p>

<h2>Spillprocent per material — schablontabell</h2>
<p>Följande är branschens tumregler för vanliga material. Se dem som utgångspunkt, inte facit — geometri och läggningsmönster kan flytta siffran rejält.</p>
<ul>
<li><strong>Konstruktionsvirke, reglar, syll:</strong> ca 5–10 %. Långa raka rundgångar ligger runt 5 %; korta bitar, många kap och komplex stommbyggnad drar mot 10–15 %.</li>
<li><strong>Gipsskivor:</strong> ca 10–15 % — ett av de högsta spillen bland vanliga material, på grund av kap runt dörrar, fönster och installationer samt kantbrott.</li>
<li><strong>Mineralull och isolering:</strong> ca 5–10 %. Materialet är komprimerbart vilket sänker spillet, men kap till c/c-avstånd och runt installationer adderar svinn.</li>
<li><strong>Kakel och klinker:</strong> ca 10 % vid rak läggning, ca 15 % diagonalt och 15–20 % för mönster, små rum eller storformat. Nischer och fönster ökar ytterligare.</li>
<li><strong>Golv (laminat, parkett, vinyl):</strong> ca 5 % rakt, 8–10 % diagonalt och mer för fiskben.</li>
<li><strong>Platsgjuten betong:</strong> ca 5–8 % (överfyllnad av form, spill, rest i bil). Fabriksbetong beställs i hela m³, vilket förstärker effektivt spill på små gjutningar.</li>
<li><strong>Fasad- och murtegel samt takpannor:</strong> ca 5 %.</li>
<li><strong>Tapet:</strong> ca 10–15 % på grund av mönsterpassning.</li>
<li><strong>Färg:</strong> räknas på täckförmåga (m²/liter) plus ca 5 %.</li>
</ul>
<p>Att gips och kakel ligger högt beror på samma sak: mycket kap per kvadratmeter. Varje öppning, hörn och installation tvingar fram en avkapad bit där resten ofta inte kan återanvändas, och sprött material ökar brottrisken vid hantering.</p>

<h2>Vad styr spillet i det enskilda projektet?</h2>
<p>Schablonen är en start — men fem faktorer avgör om du landar i nedre eller övre delen av intervallet:</p>
<ul>
<li><strong>Rummets geometri:</strong> många hörn, nischer och vinklar ger fler kap och mer spill.</li>
<li><strong>Läggningsmönster:</strong> diagonalt och fiskben spiller markant mer än rak läggning.</li>
<li><strong>Formatstorlek:</strong> storformatsplattor ger mer spill per kvadratmeter — en avkapad bit representerar en större yta.</li>
<li><strong>Materialets sprödhet:</strong> ju ömtåligare material, desto mer kant- och transportbrott.</li>
<li><strong>Leveransenhet:</strong> helpall virke eller hel m³ betong tvingar fram avrundning uppåt, särskilt på små volymer.</li>
</ul>

<h2>Schablonen 12 % och kopplingen till byggavfall</h2>
<p>En vanlig generell spillfaktor som cirkulerar i branschen är 1,12, alltså 12 %. Använd den gärna som en rimlig medelnivå när du saknar bättre underlag för ett blandat material — men behandla den som just en schablon, inte som en officiell myndighetssiffra. Vill du ha en exakt regel per material bör du utgå från leverantörens monteringsanvisning.</p>
<p>Att hålla nere spillet har mer än en ekonomisk sida. Bygg- och rivningsavfall är en av Sveriges största avfallsströmmar, och mindre materialspill betyder både lägre inköpskostnad och mindre avfall att hantera och dokumentera. Rätt kalkyl är alltså bra för både marginalen och miljöredovisningen.</p>

<h2>Ekonomin — spill, offert och ROT</h2>
<p>Vem som bär spill-risken avgörs av avtalsformen. Vid <strong>fast pris</strong> bär du som entreprenör risken: blir spillet större än du kalkylerat äter det din marginal. Vid <strong>löpande räkning</strong> bär kunden materialkostnaden, men en underspecad offert underskattar ändå slutnotan och skadar förtroendet.</p>
<p>Och glöm inte skatten: ROT-avdraget gäller <strong>endast arbetskostnad, aldrig material</strong>. ROT ligger på 30 % av arbetskostnaden, max 50 000 kr per person och år — men överbeställt material subventioneras aldrig. Hela merkostnaden för spillet bärs av kund eller entreprenör.</p>
<p>Räkneexempel: ett gipsjobb med 100 m² netto och ett gipspris på 60 kr/m². Räknar du 5 % spill beställer du för 6 300 kr. Det verkliga spillet blir 12 %, alltså 6 720 kr. De 420 kronorna som saknas i offerten är ren förlust på ett litet jobb — skala upp till ett flerbostadshus med tusentals kvadratmeter och ett par procents felräkning blir snabbt en betydande post.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp materialkalkylatorer räknar med spillpåslag redan inbyggt, så att du får inköpsmängden och inte bara den teoretiska nettomängden. Du mäter upp ytan eller volymen, väljer material och får en beställningsbar mängd direkt. Kalkylerna bygger på branschens schabloner — men eftersom geometri och läggningsmönster varierar bör du alltid dubbelkolla spillfaktorn mot det enskilda projektet innan du lägger den i offerten. Verktygen tar bort räknearbetet och risken för slarvfel; bedömningen av just ditt rum gör du fortfarande själv.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket spill ska jag räkna med på gips?</h3>
<p>Räkna med cirka 10–15 % för gipsskivor. Det är ett av de högsta spillen bland vanliga material eftersom du kapar runt dörrar, fönster och installationer, och skivkanter är känsliga för brott. Många hörn och öppningar drar mot övre delen av intervallet.</p>
<h3>Är spillprocent samma som svinn?</h3>
<p>Inte riktigt. Spillprocent täcker det oundvikliga kap- och kantspillet som alltid uppstår när material anpassas till bygget. Svinn är den del som beror på misstag, brott vid hantering och felaktig lagring — den kan du minska med bättre planering, medan grundspillet alltid finns där.</p>
<h3>Får jag ROT-avdrag på spillmaterialet?</h3>
<p>Nej. ROT-avdraget gäller bara arbetskostnad, aldrig material — och alltså inte det material som blir spill. Överbeställt material subventioneras inte skattemässigt, så kostnaden bärs helt av kund eller entreprenör beroende på avtalsform.</p>
<h3>Vilken spillfaktor ska jag använda om jag är osäker?</h3>
<p>Saknar du bättre underlag är 1,12 (12 %) en rimlig generell schablon för ett blandat material. Men gå alltid till materialets specifika intervall när du kan — virke 5–10 %, gips 10–15 %, kakel upp till 15–20 % vid mönster — och justera för rummets geometri och läggningsmönster.</p>

<h2>Kom igång</h2>
<p>Börja med att lägga in dina mått i <a href="/sv/verktyg/kvadratmeter-kalkylator">kvadratmeter-kalkylatorn</a> och räkna sedan skivmängd i <a href="/sv/verktyg/gips-kalkylator">gips-kalkylatorn</a> eller volym i <a href="/sv/verktyg/betong-kalkylator">betong-kalkylatorn</a> — alla med spillpåslag inbyggt. Vill du se hur ByggExp kan effektivisera hela din kalkyl- och offertprocess? <a href="/sv/contact">Boka en demo</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/rakna-material-till-bygget">Räkna material till bygget — så gör du rätt från början</a>.</p>
`;

const A_SPILLPROCENT_BYGG_MATERIAL: BlogPost = {
  _id: "code-"+"spillprocent-bygg-material",
  title: "Spillprocent per material — så undviker du en underspecad byggkalkyl", slug: "spillprocent-bygg-material", locale: "sv",
  excerpt: "En offert som glömmer spillet ser billig ut på papperet men äter marginalen på bygget — här är rätt spillprocent per material och hur du räknar med den.", tag: "Kalkyl",
  coverImageUrl: "/landing/verktyg/betong-preview.webp", contentHtml: A_SPILLPROCENT_BYGG_MATERIAL_HTML,
  seoTitle: "Spillprocent bygg material | ByggExp", seoDescription: "Rätt spillprocent per material — virke, gips, kakel, betong. Så räknar du nettomängd × spillfaktor och slipper en underspecad offert. Guide för hantverkare.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/betong-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:39:00.000Z", createdAt: "2026-08-18T18:39:00.000Z", updatedAt: "2026-08-18T18:39:00.000Z",
};

const A_BOKFORING_ENSKILD_FIRMA_BYGG_HTML = `
<p>Byggbranschen är en av de mest granskade av Skatteverket, och som hantverkare med enskild firma sitter du mitt i det: kontanthantering, personalliggare på arbetsplatsen och en momskedja där en enda felfakturerad byggtjänst kan dra igång en revision. Det handlar sällan om fusk – oftare om att omvänd byggmoms hamnat på fel faktura, eller att ROT-avdraget begärts trots att köparen inte ägde bostaden. Den här guiden går igenom grundkraven, momsen 2026 och den omvända byggmomsen så att du slipper strulet.</p>

<p>Ett tips på vägen: räkna ut och stäm av moms rätt varje gång med <a href="/sv/verktyg/moms-kalkylator">vår gratis moms-kalkylator -&gt;</a> innan du skickar fakturan.</p>

<h2>Grundkraven – från dag ett</h2>

<p>Det finns ingen omsättningsgräns som befriar dig från bokföring. Enligt bokföringslagen är alla enskilda firmor bokföringsskyldiga från och med registreringsdagen. Missförstå inte momsgränsen (mer om den nedan) som en bokföringsgräns – de har inget med varandra att göra.</p>

<ul>
<li><strong>F-skatt innan första fakturan.</strong> Utan godkänd F-skatt (eller FA-skatt om du också är anställd) måste din kund dra 30 % preliminär A-skatt på arbetsdelen av fakturan. I praktiken blockerar det normalt entreprenadarbete.</li>
<li><strong>Spara underlag i minst 7 år.</strong> Räknat från utgången av räkenskapsåret. Ett kvitto från januari 2026 ska alltså finnas kvar till och med 31 december 2033.</li>
<li><strong>Förenklat årsbokslut (K1) under 3 miljoner kr.</strong> Har firman en nettoomsättning på högst 3 000 000 kr får du använda de förenklade K1-reglerna och upprätta ett förenklat årsbokslut. Det sparas tillsammans med bokföringen men lämnas inte in till någon myndighet. Över 3 miljoner kr krävs ett fullständigt årsbokslut (K2/K3).</li>
</ul>

<p>Vinsten i en enskild firma beskattas som din egen inkomst. Du betalar debiterad preliminärskatt (F-skatt) månadsvis och egenavgifter på runt 29 % av nettovinsten, som stäms av i NE-bilagan i inkomstdeklarationen.</p>

<h2>Moms 101 för enskild firma 2026</h2>

<p>Sedan 1 januari 2025 behöver du inte momsregistrera dig om årsomsättningen (exklusive moms) är högst 120 000 kr – förutsatt att du även höll dig under gränsen de två föregående åren och är etablerad i Sverige. Passerar du 120 000 kr måste du registrera dig och ta ut 25 % moms på byggtjänster.</p>

<p>Hur ofta du deklarerar moms styrs av omsättningen:</p>

<ul>
<li><strong>Upp till 1 miljon kr:</strong> helår.</li>
<li><strong>1–40 miljoner kr:</strong> kvartal.</li>
<li><strong>Över 40 miljoner kr:</strong> månad.</li>
</ul>

<p>Du får frivilligt välja en kortare period. För många byggare är det smart att välja kvartal även med låg omsättning: ingående moms på material överstiger ofta utgående moms på fakturerad arbetstid, och då får du tillbaka pengar snabbare istället för att binda upp likviditet ett helt år. Helårsdeklarationen 2026 ska in senast 12 maj (utan EU-handel) eller 26 februari (med EU-handel); kvartalsdeklaration lämnas den 12:e i andra månaden efter kvartalets slut.</p>

<h2>Omvänd byggmoms utan strul</h2>

<p>Omvänd byggmoms (omvänd skattskyldighet) är inte momsfrihet – det är en förskjutning av <em>vem</em> som redovisar de 25 procenten, byggd för att stoppa momsfusk i entreprenadkedjor. Reglerna avgör om du som säljare ska fakturera med eller utan moms.</p>

<p><strong>Omvänd byggmoms gäller</strong> när du säljer en byggtjänst (eller hyr ut arbetskraft för sådan) till en köpare som är ett företag som själv säljer eller säljer vidare byggtjänster mer än tillfälligt. Då fakturerar du <strong>utan moms</strong>, och köparen redovisar både utgående och ingående moms.</p>

<p><strong>Omvänd byggmoms gäller INTE</strong> när du fakturerar en privatperson, eller en fastighetsägare/förvaltare som inte själv säljer byggtjänster vidare – då tar du ut normal 25 % moms. Den gäller inte heller ren varuförsäljning (till exempel att leverera och koppla in vitvaror) eller arbete på fordon och maskiner.</p>

<p>Fakturachecklista vid omvänd byggmoms:</p>

<ul>
<li>Ingen moms angiven på fakturan.</li>
<li>Köparens momsregistreringsnummer (VAT-nummer) ska finnas på fakturan.</li>
<li>Texten <strong>&quot;Omvänd betalningsskyldighet&quot;</strong> (eller &quot;Omvänd skattskyldighet för byggtjänster gäller&quot;) ska stå med.</li>
</ul>

<h2>Så bokför du det praktiskt</h2>

<p>Ett konkret exempel: du är underentreprenör och fakturerar en huvudentreprenör 40 000 kr för byggarbete med omvänd byggmoms.</p>

<ul>
<li><strong>Du som säljare</strong> bokför intäkten på konto 3231 (Försäljning byggsektorn, omvänd byggmoms) – ingen utgående moms.</li>
<li><strong>Köparen</strong> bokför 40 000 kr på 4610 (Byggtjänster), och beräknar 25 % moms i två poster: 2614 (Utgående moms omvänd skattskyldighet) och 2644 (Ingående moms omvänd skattskyldighet), här 10 000 kr på vardera. Är momsen fullt avdragsgill tar 2614 och 2644 ut varandra och kassaflödeseffekten blir noll.</li>
</ul>

<p>Har du en mall med rätt uppgifter förhandsifyllda blir det svårt att glömma momsnummer eller märkningstext. Använd gärna <a href="/sv/verktyg/faktura-mall">vår faktura-mall</a> som utgångspunkt.</p>

<h2>ROT-avdrag i praktiken</h2>

<p>ROT-avdraget är 30 % av <strong>arbetskostnaden</strong> – aldrig på material eller resor. Köparen måste dessutom äga och bo i (eller använda) bostaden som arbetet utförs på. Du drar av köparens del direkt på fakturan och begär sedan utbetalning av mellanskillnaden från Skatteverket via deras e-tjänst.</p>

<p>Takbeloppet per person och år har ändrats genom tillfälliga reformer under 2024–2025. <strong>Kontrollera aktuellt takbelopp direkt på skatteverket.se innan du utlovar en siffra till kunden</strong> – ett fel här ger avslag på utbetalningen och en missnöjd kund.</p>

<p>Notera samspelet: ROT gäller bara mot privatperson. Och mot en privatperson är det aldrig omvänd byggmoms – du tar alltid ut 25 % moms och drar av ROT på arbetsdelen. Blandar du ihop dessa två uppstår exakt den typ av fel som Skatteverket letar efter.</p>

<h2>Skatteverkets granskningsflaggor för bygg</h2>

<p>Det som oftast utlöser en fördjupad granskning eller revision i byggbranschen:</p>

<ul>
<li>Fel momshantering i entreprenadkedjan – moms utan omvänd skattskyldighet där den skulle gällt, eller tvärtom.</li>
<li>Saknad eller felaktig personalliggare på byggarbetsplatsen.</li>
<li>Kontantförsäljning som inte stämmer med redovisad omsättning.</li>
<li>Blandade privat- och företagsinköp där avdrag tagits för sådant som inte hör till verksamheten.</li>
</ul>

<h2>Så gör du i ByggExp</h2>

<p>ByggExp hjälper dig hålla ordning på det löpande: du dokumenterar utfört arbete och timmar per projekt, skapar fakturaunderlag och skiljer arbetskostnad från material – vilket är precis den uppdelning både ROT och omvänd byggmoms bygger på. Det ersätter inte din bokföring eller en redovisningskonsult, men det gör att underlaget som går vidare till bokföringen redan är rätt uppdelat, så att momsen och ROT-avdraget blir enklare att få korrekt från början.</p>

<h2>Vanliga frågor</h2>

<h3>Måste jag momsregistrera min enskilda firma direkt?</h3>
<p>Nej, inte om årsomsättningen exklusive moms är högst 120 000 kr och du höll dig under gränsen de två föregående åren. Bokföringsskyldig är du däremot från dag ett, oavsett omsättning.</p>

<h3>När ska jag fakturera med omvänd byggmoms istället för 25 %?</h3>
<p>När köparen är ett företag som själv säljer byggtjänster mer än tillfälligt. Då fakturerar du utan moms, anger köparens momsnummer och skriver &quot;Omvänd betalningsskyldighet&quot;. Fakturerar du en privatperson eller en fastighetsägare som inte säljer byggtjänster vidare tar du ut normal 25 % moms.</p>

<h3>Kan jag använda ROT och omvänd byggmoms på samma faktura?</h3>
<p>Nej. ROT gäller bara arbete åt privatpersoner, och mot privatpersoner är det aldrig omvänd byggmoms. De två utesluter alltså varandra på samma jobb.</p>

<h3>Hur länge måste jag spara bokföringen?</h3>
<p>I minst 7 år räknat från utgången av räkenskapsåret. Ett underlag från 2026 ska alltså finnas kvar till och med 2033.</p>

<h2>Kom igång</h2>

<p>Bygg in en enkel månadsrutin: fakturera med rätt moms varje gång, spara kvitton digitalt löpande och stäm av ingående mot utgående moms innan deklarationen. Räkna momsen rätt med <a href="/sv/verktyg/moms-kalkylator">moms-kalkylatorn</a> och sätt upp fakturorna med <a href="/sv/verktyg/faktura-mall">faktura-mallen</a>. Vill du se hur ByggExp håller projekt, timmar och underlag på plats? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/moms-hantverkare">Moms för hantverkare – så gör du rätt</a> och <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag?</a></p>
`;

const A_BOKFORING_ENSKILD_FIRMA_BYGG: BlogPost = {
  _id: "code-"+"bokforing-enskild-firma-bygg",
  title: "Bokföring för hantverkare med enskild firma: moms, ROT och omvänd byggmoms utan strul", slug: "bokforing-enskild-firma-bygg", locale: "sv",
  excerpt: "En felfakturerad byggmoms kan räcka för att dra igång en granskning – så håller du bokföringen, momsen och ROT rätt i enskild firma.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/moms-preview.webp", contentHtml: A_BOKFORING_ENSKILD_FIRMA_BYGG_HTML,
  seoTitle: "Bokföring enskild firma bygg | ByggExp", seoDescription: "Moms, ROT och omvänd byggmoms för hantverkare med enskild firma. Trösklar, fakturakrav och Skatteverkets granskningsflaggor – konkret guide för 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/moms-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:42:00.000Z", createdAt: "2026-08-18T18:42:00.000Z", updatedAt: "2026-08-18T18:42:00.000Z",
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

const A_TRAKTAMENTE_BYGGNADSARBETARE_2026_HTML = `
<p>Många byggföretag betalar ut traktamente varje månad utan att veta att en stor del av det faktiskt är skattepliktig lön. Kollektivavtalets traktamente och Skatteverkets skattefria schablon är två helt olika saker – och när de inte överlappar hamnar mellanskillnaden som lön med arbetsgivaravgifter. För inkomstår 2026 är de skattefria beloppen 300 kr för hel dag, 150 kr för halv dag och 150 kr för natt, förutsatt att två grundvillkor är uppfyllda.</p>

<p>Ett korrekt traktamente bygger på korrekta underlag. Har du inte tidrapporter och reseuppgifter som visar övernattning och avstånd blir det omöjligt att styrka skattefriheten – börja därför med vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall -></a> för att få dokumentationen på plats.</p>

<h2>Skatteverkets skattefria belopp 2026 (inrikes)</h2>
<p>För tjänsteresor inom Sverige gäller följande schablonbelopp för inkomstår 2026, fastställda i Skatteverkets rättsliga vägledning:</p>
<ul>
<li><strong>Hel dag (helt maximibelopp): 300 kr.</strong></li>
<li><strong>Halv dag (halvt maximibelopp): 150 kr.</strong> Gäller avresedag om resan börjar efter kl 12 och hemkomstdag om du kommer hem före kl 19.</li>
<li><strong>Nattraktamente (schablon när arbetsgivaren inte betalar logi): 150 kr.</strong></li>
</ul>
<p>Vid längre förrättning på samma ort trappas det skattefria beloppet ned. Efter tre månader sänks det till <strong>210 kr per hel dag</strong> (70 % av maximibeloppet). Efter två år på samma ort sänks det ytterligare till <strong>150 kr per hel dag</strong> (50 % av maximibeloppet). Betalar företaget ut mer än så blir det överskjutande beloppet skattepliktigt.</p>

<h2>De två grundvillkoren – övernattning och 50-kmregeln</h2>
<p>För att traktamentet överhuvudtaget ska kunna betalas ut skattefritt måste båda dessa villkor vara uppfyllda:</p>
<ol>
<li><strong>Övernattning.</strong> Skatteverket är tydliga: "Du måste alltid övernatta minst en natt för att arbetsgivaren ska kunna betala ut ett skattefritt traktamente." En endagsförrättning kan alltså aldrig ge skattefritt traktamente.</li>
<li><strong>50-kmregeln.</strong> Tjänsteresan måste gå till en plats som ligger mer än 50 km från både bostaden och den vanliga arbetsplatsen (tjänstestället). Ligger arbetsplatsen närmare än så är villkoret inte uppfyllt.</li>
</ol>
<p>Detta är exakt där byggbranschen ofta faller. Mycket arbete sker på dagpendlingsavstånd och utan övernattning – och då finns ingen skattefri traktamentesgrund, oavsett vad kollektivavtalet säger.</p>

<h2>Vad är "tjänstestället" för en byggnadsarbetare?</h2>
<p>Tjänstestället avgör var en tjänsteresa börjar. För många yrken är tjänstestället kontoret, men för en byggnadsarbetare är det ofta själva byggarbetsplatsen där man utför arbetet under en period. Det får två konsekvenser:</p>
<ul>
<li>Resor <em>till och från</em> den arbetsplats som är tjänsteställe räknas som vanliga arbetsresor, inte tjänsteresor – och ger inte traktamente.</li>
<li>Först när arbetet sker på en annan plats, mer än 50 km bort och med övernattning, uppstår en tjänsteresa som kan ge skattefritt traktamente.</li>
</ul>
<p>Att fastställa tjänstestället rätt är alltså avgörande. Bedömer företaget det fel riskerar man att betala ut "skattefritt" traktamente som i själva verket är skattepliktigt.</p>

<h2>Byggavtalet vs Skatteverket – varför avtalstraktamentet ofta beskattas</h2>
<p>Byggnads kollektivavtal reglerar traktamente och reseersättning enligt avtalets egna villkor. De villkoren följer inte automatiskt Skatteverkets regler. Avtalet kan ge rätt till traktamente även vid endagsförrättning eller vid resor under 50 km – ersättningar som helt enkelt inte uppfyller Skatteverkets krav på övernattning och avstånd.</p>
<p>Skattemekanismen är enkel: traktamente som betalas utan övernattning eller för resa under 50 km uppfyller inte villkoren för skattefrihet och är då <strong>skattepliktig lön</strong>. Företaget ska ta upp beloppet som ersättning, dra skatt och betala arbetsgivaravgifter. Att kalla utbetalningen "traktamente" i avtalet ändrar inte den skattemässiga hanteringen.</p>

<h2>Räkneexempel: endagsförrättning respektive övernattning</h2>
<p><strong>Fall A – endagsförrättning, 40 km bort.</strong> Byggföretaget betalar 200 kr i avtalstraktamente. Ingen övernattning och under 50 km betyder att inget villkor är uppfyllt. Hela beloppet är skattepliktig lön: den anställde betalar inkomstskatt på 200 kr och företaget betalar arbetsgivaravgifter ovanpå. Nettot i handen blir klart lägre än 200 kr.</p>
<p><strong>Fall B – förrättning 90 km bort med övernattning.</strong> Företaget betalar 300 kr per hel dag. Båda villkoren är uppfyllda och betalar arbetsgivaren inte logi kan även 150 kr nattraktamente betalas skattefritt. Här går ersättningen ut skattefritt, utan skatteavdrag och utan arbetsgivaravgifter på schablonbeloppet – förutsatt att underlagen finns.</p>
<p>Skillnaden mellan fallen är inte beloppet på pappret, utan om övernattning och avstånd är dokumenterade.</p>

<h2>Måltidsavdrag och kostförmån</h2>
<p>Det skattefria traktamentet förutsätter att arbetsgivaren inte redan har betalat måltiderna. Ingår fri frukost, lunch eller middag – till exempel på arbetsplatsen eller via hotellet – ska ett måltidsavdrag göras som minskar det skattefria beloppet, och den fria måltiden kan dessutom bli en kostförmån. Betalar företaget ut fullt traktamente <em>och</em> bjuder på måltider utan avdrag betalas för mycket ut skattefritt, vilket kan slå tillbaka vid en granskning.</p>

<h2>Checklista för arbetsgivare och anställd 2026</h2>
<ul>
<li>Fastställ tjänstestället för varje anställd – är byggarbetsplatsen tjänsteställe eller inte?</li>
<li>Kontrollera att resan går mer än 50 km från både bostad och tjänsteställe.</li>
<li>Säkerställ och dokumentera minst en övernattning.</li>
<li>Upprätta reseräkning med datum, tider, ort och syfte.</li>
<li>Gör måltidsavdrag för fria måltider.</li>
<li>Håll isär avtalstraktamente och skattefritt schablonbelopp – hantera mellanskillnaden som lön.</li>
<li>Spara underlagen i sju år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte lönesystemet, men ger dig underlagen som avgör om ett traktamente kan betalas skattefritt eller inte. Med tidrapporteringen registrerar dina medarbetare arbetsplats, dagar och tider, vilket gör det enkelt att se när en förrättning faktiskt innehåller övernattning och sträcker sig utanför tjänstestället. Underlagen samlas per anställd och projekt, så att du eller din redovisningskonsult snabbt kan avgöra vilken del av avtalstraktamentet som är skattefri och vilken del som ska hanteras som lön. Beloppen och den skattemässiga bedömningen måste du alltid stämma av mot Skatteverket och ditt kollektivavtal – ByggExp levererar spårbarheten, inte skatterådgivningen.</p>

<h2>Vanliga frågor</h2>
<h3>Är Byggnads avtalstraktamente alltid skattefritt?</h3>
<p>Nej. Avtalstraktamente betalas enligt kollektivavtalet oavsett skattereglerna. Är det utbetalat utan övernattning eller för en resa under 50 km uppfyller det inte Skatteverkets villkor och är då skattepliktig lön med arbetsgivaravgifter.</p>
<h3>Hur mycket är skattefritt traktamente 2026?</h3>
<p>För inrikes tjänsteresor 2026 är hel dag 300 kr, halv dag 150 kr och natt 150 kr. Efter tre månader på samma ort sänks helt dagsbelopp till 210 kr och efter två år till 150 kr.</p>
<h3>Kan jag få traktamente utan att övernatta?</h3>
<p>Inte skattefritt. Skatteverket kräver minst en övernattning för att ett skattefritt traktamente ska kunna betalas ut. Endagsförrättningar ger inget skattefritt traktamente.</p>
<h3>Vad händer om vi bjuder på lunch under resan?</h3>
<p>Fria måltider ger ett måltidsavdrag som minskar det skattefria beloppet och kan innebära kostförmån. Betalar ni fullt traktamente utan avdrag blir för mycket utbetalt skattefritt.</p>

<h2>Kom igång</h2>
<p>Bygg rätt underlag från början med vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a>, och se fler verktyg för byggföretag i vår <a href="/sv/verktyg">verktygslåda</a>. Vill du se hur spårbarheten fungerar i praktiken? <a href="/sv/contact">Boka en demo -></a></p>

<p>Relaterat: <a href="/sv/blog/franvaro-i-byggforetag">Så hanterar du frånvaro i byggföretag</a> och fler <a href="/sv/verktyg">gratis verktyg för hantverkare</a>.</p>
`;

const A_TRAKTAMENTE_BYGGNADSARBETARE_2026: BlogPost = {
  _id: "code-"+"traktamente-byggnadsarbetare-2026",
  title: "Traktamente för byggnadsarbetare 2026 – så mycket är skattefritt (och varför avtalstraktamentet ofta beskattas)", slug: "traktamente-byggnadsarbetare-2026", locale: "sv",
  excerpt: "Så mycket traktamente är skattefritt för byggnadsarbetare 2026 – och varför kollektivavtalets traktamente ofta blir skattepliktig lön.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_TRAKTAMENTE_BYGGNADSARBETARE_2026_HTML,
  seoTitle: "Traktamente byggnadsarbetare 2026 | ByggExp", seoDescription: "Skattefria traktamentsbelopp 2026 för byggnadsarbetare: 300/150/150 kr, 50-kmregeln och varför Byggnads avtalstraktamente ofta beskattas.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:48:00.000Z", createdAt: "2026-08-18T18:48:00.000Z", updatedAt: "2026-08-18T18:48:00.000Z",
};

const A_PERIODISERINGSFOND_BYGGBOLAG_HTML = `
<p>Byggbranschen är konjunkturkänslig på ett sätt som få andra branscher är. Ett år med fulla orderböcker och stora projektvinster följs ofta av ett magrare år där anbuden dröjer och marginalerna krymper. Ändå betalar många byggaktiebolag full bolagsskatt på toppåret och sitter sedan med tömd kassa när det vänder. Med en <strong>periodiseringsfond</strong> kan ditt aktiebolag flytta upp till 25 % av vinsten framåt och jämna ut skatten över konjunkturcykeln. Det här är en av de mest konkreta skatteplaneringsåtgärderna för ett byggbolag – men den kostar numera lite att använda, och reglerna kring återföring är strikta.</p>

<p>Vill du räkna på avsättning, återföring och schablonintäkt för ditt eget bolag hittar du fler kalkyler och underlag i <a href="/sv/verktyg">vår samling av gratis verktyg för byggföretag -&gt;</a>.</p>

<h2>Vad är en periodiseringsfond – kort och konkret</h2>
<p>En periodiseringsfond är skattemässig resultatutjämning. Du sätter av en del av årets vinst innan skatt och skjuter på beskattningen till ett senare år. I balansräkningen redovisas fonden som en <strong>obeskattad reserv</strong> och avsättningen bokas som en bokslutsdisposition i resultaträkningen. Det är viktigt att förstå vad det inte är: det är inte en avsättning i vanlig mening och det är inte skattefrihet. Det är <strong>uppskjuten skatt</strong>. Skatten på det avsatta beloppet betalas när fonden återförs. För aktiebolag och andra juridiska personer är maxbeloppet 25 % av den skattemässiga vinsten före avsättning. En vanlig förväxling är gränsen 30 % – den gäller enskild firma och delägare i handelsbolag, inte aktiebolag.</p>

<h2>Reglerna 2026 i siffror</h2>
<p>Så här ser ramverket ut för ett byggaktiebolag beskattningsåret 2026:</p>
<ul>
<li><strong>Avsättning:</strong> högst 25 % av den skattemässiga vinsten (resultatet före avsättning).</li>
<li><strong>Återföring:</strong> varje års avsättning måste tas upp till beskattning senast det sjätte beskattningsåret efter avsättningsåret. Ett bolag kan därför ha upp till sex fonder samtidigt.</li>
<li><strong>Bolagsskatt:</strong> 20,6 %. Avsättningen skjuter upp – inte eliminerar – skatt på 20,6 % av det avsatta beloppet.</li>
<li><strong>Schablonintäkt:</strong> juridiska personer betalar en årlig schablonintäkt på fonderna. Den beräknas som statslåneräntan den 30 november året före beskattningsåret gånger summan av fonderna vid beskattningsårets ingång. Räntan anses vara lägst 0,5 %.</li>
</ul>
<p>Statslåneräntan den 30 november 2025 var 2,55 %. Det är den ränta som styr schablonintäkten för beskattningsår 2026, och eftersom 2,55 % ligger över golvet på 0,5 % är det den procentsatsen som gäller. <strong>Ett räkneexempel:</strong> har ditt bolag 1 000 000 kr i fonder vid årets ingång blir schablonintäkten 25 500 kr. Den läggs till den skattepliktiga inkomsten och beskattas med 20,6 %, vilket ger en faktisk skattekostnad på ungefär 5 253 kr – alltså cirka 0,53 % av fondbeloppet det året. Kontrollera alltid aktuell statslåneränta mot Skatteverket innan du räknar skarpt, den ändras varje år.</p>

<h2>Så jämnar byggbolaget ut vinsten</h2>
<p>Poängen blir tydligast i ett praktiskt scenario. Säg att ditt bolag har ett starkt 2026 med flera stora ROT-projekt och en skattemässig vinst på 2 000 000 kr. Du sätter av 25 %, alltså 500 000 kr, till periodiseringsfond. Skatten på det beloppet – drygt 103 000 kr – skjuts upp, och pengarna stannar i bolaget som likviditet.</p>
<p>Kommer sedan ett mellanår där ett par upphandlingar går till konkurrenter och bolaget landar på nollresultat eller till och med förlust, kan du återföra fonden mot det svaga året. Återföringen höjer resultatet, men eftersom den möter en förlust eller ett lågt resultat blir skatten på den återförda fonden låg eller noll. Då har du inte bara skjutit upp skatten – du har jämnat ut den så att den totala skatten över de två åren blir lägre än om du betalat full skatt på toppåret. Det är i den här matchningen mellan ett fett år och ett magert år som den verkliga besparingen ligger.</p>
<p>Utöver skatten finns en effekt som byggföretagare ofta underskattar: en jämnare resultatkurva. Banker som ska bevilja projektfinansiering och beställare som granskar din ekonomiska ställning i en upphandling ser hellre stabila siffror än ett bolag som svänger vilt mellan rekordvinst och förlust. Att hålla likviditet och ett jämnt resultat stärker din position både i kreditförhandlingar och i anbud. Vill du fördjupa dig i själva kassaflödet har vi skrivit mer i <a href="/sv/blog/likviditet-byggforetag">vår guide om likviditet för byggföretag</a>.</p>

<h2>Kostnaden: schablonintäkten och räntemiljön</h2>
<p>Under de år då statslåneräntan låg nära noll var periodiseringsfonden i praktiken en gratis skattekredit. Så är det inte längre. Med schablonräntan 2,55 % för 2026 kostar det ungefär 0,53 % av fondbeloppet per år i faktisk skatt att sitta på fonderna. På 1 000 000 kr är det drygt 5 000 kr per år – fortfarande billigt jämfört med den uppskjutna skatten på över 100 000 kr, men inte gratis.</p>
<p>Riktningen är dessutom uppåt. Statslåneräntan hade den 14 augusti 2026 stigit till 2,87 %, vilket innebär att schablonintäkten för beskattningsår 2027 sannolikt blir högre än för 2026. Ju större fonder du håller och ju högre räntan blir, desto dyrare blir det att skjuta skatten framför sig. Tumregeln: fonden är lönsam när du har ett konkret återföringsår i sikte – en planerad investering eller ett förväntat svagt år – men blir en onödig löpande kostnad om du bara låter fonderna ligga utan plan.</p>

<h2>Bokföring, deklaration och tvingande återföring</h2>
<p>Periodiseringsfonden hanteras helt i bokslutet, inte hos Bolagsverket. Avsättningen bokförs som en bokslutsdisposition och fonden redovisas som obeskattad reserv i årsredovisningen. I inkomstdeklarationen (INK2) redovisas avsättningar och återföringar på avsedd bilaga. Det finns ingen registrering att göra externt – men det ställer krav på att bokslutet blir rätt och att du har koll på vilka fonder som närmar sig sexårsgränsen.</p>
<p>En sak att verkligen planera för är <strong>tvingande återföring</strong>. Om bolaget upphör med näringsverksamheten, träder i likvidation, går i konkurs eller ingår i vissa ombildningar och fusioner måste samtliga fonder återföras på en gång. Då kan hela den uppskjutna vinsten tas upp till beskattning ett enda år, med en oväntat hög skattesmäll som följd. Det gör att periodiseringsfonder måste vägas in när du planerar ägarskiften, exit eller en omstrukturering av bolaget.</p>

<h2>Checklista för byggföretagaren</h2>
<ul>
<li>Tajma avsättningarna till dina verkliga toppår – sätt av mest när vinsten är hög.</li>
<li>Håll ordning på sexårsgränsen så att ingen fond återförs oplanerat och tvingar upp skatten.</li>
<li>Matcha återföringar mot förlustår eller större investeringar för att maximera utjämningseffekten.</li>
<li>Väg den löpande schablonkostnaden mot nyttan – låt inte fonder ligga kvar utan plan när räntan stiger.</li>
<li>Ta höjd för tvingande återföring vid ägarskifte, likvidation eller ombildning.</li>
<li>Stäm alltid av strategin och aktuell statslåneränta med din redovisningskonsult före bokslutet.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp är byggföretagets system för projekt, tid och fakturering – inte en skattedeklaration. Men ett välskött löpande underlag är förutsättningen för att kunna fatta rätt beslut om periodiseringsfond. När tidrapporter, projektkostnader och fakturor är samlade och uppdaterade får du en tydlig bild av årets resultat i god tid före bokslutet, i stället för en överraskning i mars. Det ger dig och din redovisningskonsult ett bättre beslutsunderlag för hur mycket som bör sättas av och vilka fonder som bör återföras. Underlagen från ByggExp ersätter inte rådgivningen, men de gör den snabbare och mer träffsäker.</p>

<h2>Vanliga frågor</h2>
<h3>Får mitt aktiebolag sätta av 30 % till periodiseringsfond?</h3>
<p>Nej. Aktiebolag och andra juridiska personer får sätta av högst 25 % av den skattemässiga vinsten. Gränsen 30 % gäller enskild firma och delägare i handelsbolag – det är en vanlig förväxling.</p>
<h3>Måste jag betala schablonintäkt på fonderna?</h3>
<p>Ja, som aktiebolag betalar du en årlig schablonintäkt. För beskattningsår 2026 är den 2,55 % av fondernas ingående saldo, vilket med bolagsskatt 20,6 % motsvarar ungefär 0,53 % av fondbeloppet i faktisk skatt. Enskild firma betalar däremot ingen schablonintäkt.</p>
<h3>Vad händer om jag inte återför fonden i tid?</h3>
<p>Varje avsättning måste återföras senast det sjätte beskattningsåret efter avsättningsåret. Sker det inte frivilligt återförs den äldsta fonden ändå automatiskt vid tidsgränsen och tas upp till beskattning. Håll därför koll på vilket år varje fond förfaller.</p>
<h3>Kan jag lösa upp fonden i förtid?</h3>
<p>Ja, du kan återföra en fond helt eller delvis tidigare än sexårsgränsen, till exempel för att möta en förlust eller en stor investering. Vid likvidation, konkurs eller att verksamheten upphör sker återföringen dock tvingande och all fond tas upp på en gång.</p>

<h2>Kom igång</h2>
<p>Börja med att skaffa dig en tydlig bild av bolagets resultat i god tid före bokslutet – då blir beslutet om periodiseringsfond en strategi och inte en gissning. Utforska <a href="/sv/verktyg">våra gratis verktyg för byggföretag</a> för att räkna på siffrorna, och <a href="/sv/contact">boka en demo av ByggExp</a> om du vill se hur samlade projekt- och ekonomiunderlag underlättar planeringen.</p>

<p>Relaterat: <a href="/sv/blog/likviditet-byggforetag">Likviditet i byggföretag</a> och <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggverksamhet</a>.</p>
`;

const A_PERIODISERINGSFOND_BYGGBOLAG: BlogPost = {
  _id: "code-"+"periodiseringsfond-byggbolag",
  title: "Periodiseringsfond för byggbolag: jämna ut vinsten mellan goda och magra år", slug: "periodiseringsfond-byggbolag", locale: "sv",
  excerpt: "Byggbranschen är cyklisk – periodiseringsfond låter ditt aktiebolag skjuta upp skatt på toppåren och möta de magra åren med jämnare resultat.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_PERIODISERINGSFOND_BYGGBOLAG_HTML,
  seoTitle: "Periodiseringsfond aktiebolag | ByggExp", seoDescription: "Så använder byggaktiebolag periodiseringsfond för att jämna ut vinsten: 25 % avsättning, återföring inom 6 år och schablonintäkt på 2,55 % för 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:00:00.000Z", createdAt: "2026-08-18T19:00:00.000Z", updatedAt: "2026-08-18T19:00:00.000Z",
};

const A_BERAKNA_BETONGATGANG_PLATTA_HTML = `
<p>En felräknad betongåtgång kostar dig antingen pengar i onödan – en halv pall torrbetong som blir stående – eller något värre: att bruket tar slut mitt i gjutningen och du får en kall fog rakt genom plattan. Bägge är onödiga. Med rätt formel och en rimlig spillmarginal räknar du fram exakt hur mycket betong platta, kantbalk och plintar drar innan du beställer en enda säck.</p>

<p>Vill du hoppa över handräkningen tar <a href="/sv/verktyg/betong-kalkylator">vår gratis betongkalkylator</a> fram kubik, vikt, antal säckar och spill åt dig direkt – men det lönar sig att förstå vad den räknar på.</p>

<h2>Grundformeln – volym i kubikmeter</h2>
<p>All betongåtgång utgår från volym, och volym räknas i kubikmeter (m³). Formeln för en platta är enkel:</p>
<p><strong>Längd × Bredd × Tjocklek = volym i m³</strong> – med alla tre måtten i meter.</p>
<p>Exempel: en platta på 5,0 × 4,0 meter med 10 cm tjocklek. Tjockleken måste räknas om från centimeter till meter, alltså 10 cm = 0,10 m. Då blir det:</p>
<p>5,0 × 4,0 × 0,10 = <strong>2,0 m³</strong>.</p>
<p>Den vanligaste och dyraste tabben här är att blanda cm och meter. Skriver du in 10 istället för 0,10 blir svaret 100 gånger för stort. Kontrollera alltid att tjockleken står i meter innan du multiplicerar.</p>

<h2>Räkna för platta, kantbalk och plint</h2>
<p>De flesta grunder består av flera delar. Räkna varje del för sig och summera på slutet.</p>
<ul>
<li><strong>Platta:</strong> Längd × Bredd × Tjocklek. Typisk plattjocklek för garage, uterum och carport är 100 mm (0,10 m), armerad med armeringsnät.</li>
<li><strong>Kantbalk:</strong> Bredd × Höjd × Längd, där längden är hela plattans omkrets. En kantbalk 0,20 × 0,30 m runt en platta med omkretsen 18 m ger 0,20 × 0,30 × 18 = 1,08 m³. Den volymen läggs till plattan.</li>
<li><strong>Fyrkantig plint:</strong> Sida × Sida × Höjd. En plint 0,3 × 0,3 × 0,8 m = 0,072 m³.</li>
<li><strong>Rund plint:</strong> π × radie² × höjd. En rund plint med diameter 0,3 m (radie 0,15 m) och höjd 0,8 m ger 3,14 × 0,15² × 0,8 ≈ 0,057 m³.</li>
</ul>
<p>Har du flera plintar multiplicerar du med antalet och lägger till summan. Slutresultatet är den totala betongvolymen innan spill.</p>

<h2>Från kubik till vikt och hantering</h2>
<p>Volym är en sak – vikt är en annan, och det är vikten som avgör hur du får betongen på plats. Normal armerad betong väger cirka 2 400 kg/m³ (intervallet ligger på 2 300–2 500). Alltså:</p>
<ul>
<li>1 m³ ≈ 2,4 ton</li>
<li>Plattan på 2,0 m³ ovan väger runt 4,8 ton</li>
</ul>
<p>Det säger direkt att handbärning i hink är uteslutet vid större gjutningar. Det påverkar också bärighet: ska du gjuta på ett bjälklag måste konstruktionen klara lasten. Och det förklarar varför fabriksbetong pumpas eller töms med ränna – ingen orkar bära flera ton för hand.</p>

<h2>Säck eller fabriksbetong?</h2>
<p>En 25 kg-säck torrbetong ger ungefär 12–12,5 liter färdig betong. Det betyder att det går cirka <strong>80 säckar på 1 m³</strong> (1000 liter delat på 12,5). Exakt utbyte står på säcken och varierar mellan produkter, så kontrollera alltid mot tillverkarens datablad.</p>
<p>Vid handblandning behövs cirka 2–2,5 liter vatten per 25 kg-säck (runt 2,25 liter). Här ligger en klassisk fälla: för mycket vatten känns lättare att jobba med men höjer vattencementtalet (vct) och sänker hållfastheten kraftigt. Blöt betong är svag betong.</p>
<p>Brytpunkten går någonstans runt 0,5–1 m³. Under det är säck praktiskt. Över det blir fabriksbetong oftast både billigare och bättre – den levereras per m³ med jämn kvalitet. En betongbil rymmer normalt 7–8 m³, och små beställningar kan få småmängdstillägg, så väg in det i kalkylen. För plattan på 2,0 m³ i exemplet skulle det krävas cirka 160 säckar – då är betongbil nästan alltid rätt val.</p>

<h2>Lägg alltid på spill – 10 %-regeln</h2>
<p>Räkna aldrig på exakt teoretisk volym. Underlaget är sällan helt plant, formen kan läcka, och lite svinn är oundvikligt. Lägg på <strong>5–10 % spill</strong>; 10 % är en rimlig marginal för platta på mark.</p>
<p>Plattan på 2,0 m³ blir alltså 2,0 × 1,10 = 2,2 m³ att beställa. Skälet är enkelt: om betongen tar slut och du måste gjuta i två omgångar får du en kall fog – en svaghetszon där de två gjutningarna aldrig binder ihop ordentligt. Hellre en skottkärra över än en fog mitt i plattan.</p>

<h2>Rätt betongkvalitet och grundläggning</h2>
<p>Mängden är bara halva jobbet – kvaliteten måste också stämma:</p>
<ul>
<li><strong>Standard:</strong> C25/30 är normalhållfasthet för platta på mark och grund.</li>
<li><strong>Frostutsatta delar:</strong> Kantbalk och plintar utomhus kräver frostbeständig betong med luftinblandning, exponeringsklass XF3.</li>
<li><strong>Grundläggning:</strong> Plintar och kantbalk ska grundläggas på tjälfritt djup eller frostskyddas med markisolering. Tjälfritt djup varierar geografiskt – cirka 0,4–0,6 m i södra Sverige, upp mot 1,5–2,0 m i norr.</li>
<li><strong>Armering:</strong> En 100 mm platta armeras normalt med armeringsnät. Fribärande eller tyngre laster kräver tjockare platta och grövre armering – stäm alltid av med konstruktör för bärande konstruktioner.</li>
</ul>
<p>En sak att hålla isär i offerten: ROT-avdrag gäller enbart arbetskostnaden, inte betongen eller annat material. Hur många säckar det går åt påverkar alltså inte avdraget – bara din materialkostnad.</p>

<h2>Snabb checklista och vanliga misstag</h2>
<ul>
<li>Räkna tjockleken i meter (10 cm = 0,10 m), inte cm.</li>
<li>Summera platta, kantbalk och plintar var för sig.</li>
<li>Lägg på 10 % spill innan du beställer.</li>
<li>1 m³ ≈ 2,4 ton – planera transport och lyft.</li>
<li>Cirka 80 säckar (25 kg) per m³; över 0,5–1 m³ – överväg fabriksbetong.</li>
<li>Håll nere vattenmängden vid handblandning – för blött = svagt.</li>
<li>Välj XF3 för frostutsatta delar, grundlägg på tjälfritt djup.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>Betongkalkylatorn i ByggExp låter dig mata in längd, bredd och tjocklek för platta, kantbalk och plint och räknar automatiskt fram total volym i m³, ungefärlig vikt, antal 25 kg-säckar och spillpåslag. Du slipper både omräkningen från cm till meter och risken att multiplicera fel. Resultatet ger dig ett konkret underlag för materialbeställning och för att avgöra om säck eller betongbil lönar sig. Kalkylatorn ersätter inte en konstruktörs dimensionering av bärande delar – den hjälper dig räkna rätt på mängden.</p>

<h2>Vanliga frågor</h2>
<h3>Hur många säckar betong går det på en kubikmeter?</h3>
<p>Ungefär 80 säckar à 25 kg, eftersom en säck ger cirka 12–12,5 liter färdig betong och en kubikmeter är 1000 liter. Exakt utbyte står på säcken och varierar per produkt, så kontrollera datablad innan du beställer.</p>
<h3>Hur mycket väger en betongplatta?</h3>
<p>Normal armerad betong väger cirka 2 400 kg/m³, alltså runt 2,4 ton per kubikmeter. En platta på 2,0 m³ väger därmed omkring 4,8 ton. Det påverkar både transport och bärighet på bjälklag.</p>
<h3>Hur mycket spill ska jag räkna med?</h3>
<p>Lägg på 5–10 %, och 10 % är en rimlig marginal för platta på mark på grund av ojämnt underlag, läckande form och svinn. Underdimensionering tvingar fram en andra gjutning och därmed en kall fog, som är en svaghetszon.</p>
<h3>Ska jag använda säck eller fabriksbetong?</h3>
<p>Under cirka 0,5–1 m³ är säckblandning oftast praktiskt. Över det blir fabriksbetong per m³ vanligen både billigare och jämnare i kvalitet. En betongbil rymmer normalt 7–8 m³, men små beställningar kan få småmängdstillägg.</p>

<h2>Kom igång</h2>
<p>Mata in dina mått i <a href="/sv/verktyg/betong-kalkylator">betongkalkylatorn</a> så får du volym, vikt, antal säckar och spill på några sekunder. Vill du se hur materialberäkning och offert hänger ihop i ett flöde kan du <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/rakna-material-till-bygget">Räkna material till bygget – så undviker du både brist och överbeställning</a>.</p>
`;

const A_BERAKNA_BETONGATGANG_PLATTA: BlogPost = {
  _id: "code-"+"berakna-betongatgang-platta",
  title: "Beräkna betongåtgång för platta, plint och kantbalk – så räknar du rätt", slug: "berakna-betongatgang-platta", locale: "sv",
  excerpt: "Så räknar du fram rätt mängd betong för platta, kantbalk och plint – volym, vikt, antal säckar och spillmarginal utan gjutfog mitt i plattan.", tag: "Kalkyl",
  coverImageUrl: "/landing/verktyg/betong-preview.webp", contentHtml: A_BERAKNA_BETONGATGANG_PLATTA_HTML,
  seoTitle: "Beräkna betongåtgång platta | ByggExp", seoDescription: "Räkna kubik, vikt och antal säckar för platta, plint och kantbalk – med 10 % spill. Formel, exempel och gratis betongkalkylator för hantverkare.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/betong-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:03:00.000Z", createdAt: "2026-08-18T19:03:00.000Z", updatedAt: "2026-08-18T19:03:00.000Z",
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
<p>Den kritiska linjen är den längsta sammanhängande kedjan av beroende aktiviteter – den som styr projektets slutdatum. En försening på den kritiska linjen skjuter hela projektet framåt, medan en aktivitet med slack kan glida utan att det märks på slutdatum. När du vet var den kritiska linjen går vet du också var du ska lägga din uppmärksamhet, var förseningar är dyrast och var det är värt att sätta in extra resurser. Lägg in realistiska buffertar där osäkerheten är störst, hellre än en enda stor slutmarginal som frestar till att slösas bort tidigt.</p>

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

const A_ATA_HANTERING_MALL_HTML = `
<p>Varje år tappar svenska byggföretag stora belopp på extraarbeten som aldrig blir fakturerade – eller som faktureras men underkänns för att underlaget saknas. Fråga dig själv: har du verkligen fått betalt för allt extra du gjort i dina senaste projekt? Om svaret är osäkert är det nästan alltid ÄTA-hanteringen som brister. Det handlar sällan om att kunden vägrar betala av illvilja, utan om att beställningen var muntlig, dokumentationen tunn eller fakturan kom för sent.</p>

<p>Med en fast rutin och en enkel blankett stänger du de flesta läckorna. Använd gärna <a href="/sv/verktyg/ata-mall">vår gratis ÄTA-mall -&gt;</a> som utgångspunkt så har du fälten på plats redan från början.</p>

<h2>Vad är ÄTA-arbeten?</h2>
<p>ÄTA står för Ändrings-, Tilläggs- och Avgående arbeten – alltså arbete som tillkommer, ändras eller faller bort jämfört med det ursprungliga kontraktet. I praktiken uppstår extra jobb i så gott som varje projekt: en vägg visar sig vara rutten, marken bär inte, beställaren vill flytta ett uttag. Poängen är inte att undvika ÄTA, utan att hantera det rätt.</p>
<p>Man skiljer på två former. <strong>Beställd ÄTA</strong> är arbete som beställaren uttryckligen ber dig utföra. <strong>Likställd ÄTA</strong> är arbete som blir nödvändigt för att verkligheten avviker från kontraktshandlingarna – till exempel fel i beställarens uppgifter eller oförutsedda förhållanden. Båda ger i princip rätt till extra ersättning, men de kräver olika hantering, och det är just på den likställda ÄTA:n som flest pengar går förlorade.</p>

<h2>Vilka regler gäller 2026?</h2>
<p>Vilka regler som styr beror helt på vem beställaren är.</p>
<p>Vid <strong>näringsjobb</strong>, alltså mellan företag, gäller standardavtalen AB 04 (utförandeentreprenad) och ABT 06 (totalentreprenad), båda i kapitel 2. Det är oförändrat gällande branschstandard 2026 – dessa avtal ändras inte löpande. Ersättningen regleras i kapitel 6.</p>
<p>Vid <strong>konsumentjobb</strong>, där beställaren är privatperson, gäller i stället konsumenttjänstlagen (1985:716). Enligt 8 § måste du underrätta konsumenten och begära anvisningar innan du utför tilläggsarbete, med snäva undantag för arbete av mindre omfattning eller när det finns särskild anledning att anta att kunden vill ha det utfört. Har du lämnat en ungefärlig prisuppgift får den enligt 36 § inte överskridas med mer än 15 procent – den så kallade 15-procentsregeln – om inte annat avtalats. Att köra över takpriset utan att stämma av är en klassisk anledning till att hantverkare inte får betalt.</p>

<h2>Kravet som får dig att förlora pengarna – underrättelseskyldigheten</h2>
<p>Det här är den viktigaste punkten i hela artikeln. Vid likställd ÄTA måste du enligt AB 04/ABT 06 kap 2 <strong>utan dröjsmål</strong> underrätta beställaren så snart du inser, eller borde ha insett, att ett förhållande avviker från kontraktet. Missar du det kan rätten till ersättning gå helt förlorad – även om arbetet faktiskt var nödvändigt och korrekt utfört.</p>
<p>Vänta alltså inte tills nästa byggmöte eller till slutfakturan. Ser du att marken avviker, att en ritning inte stämmer eller att något oförutsett dyker upp: hör av dig samma dag, skriftligt. På konsumentsidan är logiken densamma – informera kunden och begär anvisningar innan du kör, inte efteråt.</p>

<h2>Skriftligt före utförande – varför muntliga ÄTA är en förlustaffär</h2>
<p>AB 04/ABT 06 kap 2 säger att ÄTA-arbeten ska beställas skriftligen. I praktiken kan även muntliga och underförstådda beställningar bli bindande, men då ligger bevisbördan på dig som entreprenör. Står ord mot ord vid slutbesiktningen är det du som ska bevisa att arbetet beställdes och till vilket pris – och den bevisningen är svår att föra utan papper.</p>
<p>Slutsatsen är enkel: skaffa beställarens skriftliga godkännande innan spaden går i marken. En signerad ÄTA-blankett eller ett bekräftande mejl räcker långt. Det tar fem minuter och är skillnaden mellan en betald ÄTA och en tvist.</p>

<h2>Din ÄTA-rutin steg för steg</h2>
<ol>
<li><strong>Upptäck avvikelsen</strong> – notera direkt när något avviker från kontraktet eller när beställaren vill ändra.</li>
<li><strong>Underrätta beställaren utan dröjsmål</strong> – skriftligt, samma dag.</li>
<li><strong>Prissätt arbetet</strong> – enligt à-pris, fast pris eller löpande räkning.</li>
<li><strong>Få skriftligt godkännande</strong> – innan du börjar utföra.</li>
<li><strong>Utför arbetet</strong>.</li>
<li><strong>Dokumentera löpande</strong> – i ÄTA-journal, dagbok och byggmötesprotokoll.</li>
<li><strong>Fakturera löpande</strong> – med tidsedlar, materialkvitton och specifikationer som underlag.</li>
</ol>

<h2>Så bör ÄTA-mallen se ut</h2>
<p>En användbar ÄTA-blankett behöver inte vara komplicerad, men följande fält bör alltid finnas med:</p>
<ul>
<li>Projekt/objekt och beställare</li>
<li>ÄTA-nummer och datum</li>
<li>Beskrivning av arbetet</li>
<li>Orsak och hänvisning till kontraktshandling eller ritning</li>
<li>Typ – beställd eller likställd ÄTA</li>
<li>Pris och prismodell (à-pris/fast/löpande)</li>
<li>Påverkan på tidplanen</li>
<li>Beställarens underskrift och datum</li>
</ul>
<p>Med underskriften på plats före utförandet har du säkrat både beställningen, priset och den eventuella tidsförskjutningen i ett enda dokument.</p>

<h2>Fakturera rätt</h2>
<p>Har inget à-pris eller fast pris avtalats ersätts ÄTA på näringssidan enligt självkostnadsprincipen, det vill säga löpande räkning. Det kräver verifierbara underlag – tidsedlar, materialkvitton och specifikationer. Utan dem blir det svårt att stå fast vid beloppet om beställaren ifrågasätter.</p>
<p>Lika viktigt: fakturera ÄTA löpande, inte i en klump vid projektets slut. Enligt AB 04/ABT 06 kap 6 ska ersättningskrav framställas i god tid, och krav som inte tagits med i slutfakturan efter godkänd slutbesiktning kan gå förlorade. Ta med alla ÄTA-krav <em>innan</em> slutbesiktning och slutfaktura. På konsumentjobb: håll dig inom prisuppgiften eller informera i tid om att den behöver överskridas.</p>

<h2>Vanliga misstag och hur du undviker dem</h2>
<ul>
<li><strong>Muntliga överenskommelser</strong> – begär alltid skriftligt godkännande före utförande.</li>
<li><strong>Sen underrättelse vid likställd ÄTA</strong> – hör av dig samma dag du upptäcker avvikelsen.</li>
<li><strong>Tunt underlag</strong> – spara tidsedlar och kvitton löpande, inte i efterhand.</li>
<li><strong>Allt faktureras vid slutet</strong> – fakturera ÄTA löpande så inget faller bort vid slutbesiktning.</li>
<li><strong>Bortglömd 15-procentsregel</strong> på konsumentjobb – stäm av innan du passerar takpriset.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp skapar du en ÄTA direkt i projektet med alla fält ifyllda enligt mallen ovan – nummer, typ, orsak, pris och tidspåverkan. Underlaget samlas på projektet så att du snabbt kan skicka det för beställarens godkännande och sedan koppla tidsedlar och kvitton till just den ÄTA:n. När det är dags att fakturera har du underlaget samlat, vilket gör det lättare att fakturera löpande i stället för att jaga papper vid slutbesiktningen. Systemet ersätter inte det juridiska ansvaret enligt AB 04 eller konsumenttjänstlagen, men det gör rutinen enkel nog att faktiskt följa varje gång.</p>

<h2>Vanliga frågor</h2>
<h3>Måste en ÄTA vara skriftlig för att gälla?</h3>
<p>Enligt AB 04/ABT 06 kap 2 ska ÄTA beställas skriftligen. Muntliga och underförstådda beställningar kan bli bindande, men då ligger bevisbördan på dig som entreprenör. Skriftligt godkännande före utförande är därför i praktiken avgörande.</p>
<h3>Vad händer om jag inte underrättar beställaren i tid?</h3>
<p>Vid likställd ÄTA gäller att du utan dröjsmål ska underrätta beställaren när du inser att verkligheten avviker från kontraktet. Underlåter du det kan rätten till ersättning gå helt förlorad, även om arbetet var nödvändigt.</p>
<h3>Hur ersätts ÄTA om vi inte avtalat något pris?</h3>
<p>På näringssidan ersätts ÄTA då enligt självkostnadsprincipen, alltså löpande räkning enligt AB 04/ABT 06 kap 6. Det kräver verifierbara underlag som tidsedlar, materialkvitton och specifikationer.</p>
<h3>Vad gäller för extraarbete åt en privatperson?</h3>
<p>Då styr konsumenttjänstlagen. Enligt 8 § ska du underrätta konsumenten och begära anvisningar innan tilläggsarbete utförs, och enligt 15-procentsregeln i 36 § får en ungefärlig prisuppgift inte överskridas med mer än 15 procent utan att annat avtalats.</p>

<h2>Kom igång</h2>
<p>Sätt en fast rutin och använd samma blankett i varje projekt. Ladda ner <a href="/sv/verktyg/ata-mall">vår gratis ÄTA-mall</a> och börja dokumentera redan i nästa avvikelse. Vill du se hur ÄTA-hanteringen fungerar samlat i ett projekt kan du <a href="/sv/contact">boka en demo</a> så visar vi hur rutinen ser ut i praktiken.</p>

<p>Relaterat: <a href="/sv/blog/ata-arbeten">ÄTA-arbeten – grunderna du behöver kunna</a> och <a href="/sv/blog/kunden-betalar-inte-fakturan">Kunden betalar inte fakturan – så gör du</a>.</p>
`;

const A_ATA_HANTERING_MALL: BlogPost = {
  _id: "code-"+"ata-hantering-mall",
  title: "ÄTA-hantering mall – så dokumenterar och fakturerar du ÄTA utan att förlora ersättningen", slug: "ata-hantering-mall", locale: "sv",
  excerpt: "En konkret rutin och mall för att dokumentera och fakturera ÄTA-arbeten så att du får betalt för allt extra du gör – utan tvist vid slutbesiktningen.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/ata-mall-preview.webp", contentHtml: A_ATA_HANTERING_MALL_HTML,
  seoTitle: "ÄTA-hantering mall & rutin | ByggExp", seoDescription: "Så dokumenterar och fakturerar du ÄTA i praktiken – rutin, mall och vanliga misstag som gör att hantverkare tappar ersättning. Ladda ner gratis ÄTA-mall.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/ata-mall-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:09:00.000Z", createdAt: "2026-08-18T19:09:00.000Z", updatedAt: "2026-08-18T19:09:00.000Z",
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

const A_SJUKLON_KARENSAVDRAG_VAB_BYGGFORETAG_HTML = `
<p>När en yrkesarbetare blir sjuk eller behöver vabba uppstår genast en praktisk fråga på kontoret: vem betalar vad, och vilken dag? Kort svar för dig som driver byggföretag – du som arbetsgivare betalar <strong>sjuklön under de första 14 kalenderdagarna</strong>, Försäkringskassan tar över med <strong>sjukpenning från dag 15</strong>, och <strong>VAB (vård av barn) betalas alltid av Försäkringskassan</strong>, aldrig av dig. Däremellan finns ett karensavdrag, ett par rapporteringskrav och en kostnadsersättning som många mindre byggföretag missar.</p>

<p>Har du koll på frånvaron från dag ett blir både lönekörning och likviditetsplanering enklare – börja med att strukturera tid och frånvaro i vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall för byggföretag →</a>.</p>

<h2>Sjuklöneperioden dag 1–14: arbetsgivarens ansvar</h2>
<p>De första 14 kalenderdagarna av en sjukperiod kallas sjuklöneperioden. Under den betalar du som byggföretag <strong>sjuklön motsvarande 80 % av den lön och de anställningsförmåner</strong> som den anställde skulle ha fått om hen arbetat. Perioden räknas i kalenderdagar, inte arbetsdagar, men sjuklön betalas för de dagar den anställde faktiskt skulle ha jobbat. Den anställde ska sjukanmäla sig <strong>redan första dagen</strong> och lämna en skriftlig försäkran om att hen varit sjuk.</p>
<p>Räkneexempel: en byggnadsarbetare med timlön 230 kr och 40-timmarsvecka har en veckolön på 9 200 kr. Sjuklönen för en full sjukvecka blir 80 % av 9 200 = <strong>7 360 kr</strong>. Per sjuk arbetsdag (8 timmar) betalar du 8 × 230 × 0,8 = <strong>1 472 kr</strong> i sjuklön, före karensavdrag.</p>

<h2>Karensavdraget – inte längre en "karensdag"</h2>
<p>Sedan 2019 har karensdagen ersatts av ett <strong>karensavdrag</strong>. Avdraget är <strong>20 % av en genomsnittlig veckas sjuklön</strong> och är ett fast belopp. Poängen med reformen är att avdraget blir lika stort oavsett när på dagen den anställde insjuknar. Blir yrkesarbetaren sjuk mitt i ett arbetspass och går hem, dras ändå hela karensavdraget – men aldrig mer än 20 % av en veckas sjuklön även om personen är borta flera dagar.</p>
<p>Fortsätter vi exemplet ovan: veckans sjuklön är 7 360 kr, alltså blir karensavdraget 20 % × 7 360 = <strong>1 472 kr</strong>. Samma avdrag gäller vid deltidssjukskrivning. Ett vanligt lönekörningsfel är att dra ett helt dagsbelopp för varje ny sjukperiod utan att räkna på veckogenomsnittet, eller att ta karensavdrag två gånger vid återinsjuknande inom fem dagar (då ska ingen ny karens tas). Kontrollera alltid mot den anställdes faktiska schema.</p>

<h2>Från dag 15: Försäkringskassans sjukpenning</h2>
<p>Håller sjukskrivningen i sig tar Försäkringskassan över från och med dag 15 med <strong>sjukpenning</strong>. Den ligger på cirka 80 % av den sjukpenninggrundande inkomsten (SGI), men beräknas kalenderdagsvis med en faktor 0,97, vilket i praktiken ger runt <strong>77,6 % av SGI</strong>. Sjukpenning kan betalas på <strong>25, 50, 75 eller 100 procent</strong> beroende på hur mycket arbetsförmågan är nedsatt.</p>
<p>Det finns ett tak: SGI för sjukpenning beräknas på högst <strong>8 prisbasbelopp</strong>. Prisbasbeloppet fastställs årligen (2025 var det 58 800 kr) – stäm av aktuellt belopp hos Försäkringskassan innan du räknar på en specifik lön. Efter 364 dagar kan sjukpenningen övergå till fortsättningsnivå på <strong>75 %</strong>. Din uppgift som arbetsgivare är att rapportera sjukfrånvaron och lämna uppgifter till Försäkringskassan, samt att redovisa sjuklönekostnaden (se nedan).</p>

<h2>VAB: Försäkringskassan betalar – inte du</h2>
<p>Vård av sjukt barn (VAB) är <strong>tillfällig föräldrapenning</strong> och betalas i sin helhet av Försäkringskassan. Som arbetsgivare betalar du varken ersättningen eller ansöker om den – den anställde anmäler VAB själv till Försäkringskassan och ansöker i efterhand. Din enda praktiska uppgift är att registrera frånvaron och dra av lön för de dagar personen vabbar.</p>
<ul>
<li>Ersättning cirka <strong>80 % av SGI</strong> (kalenderdagsberäknad, faktor 0,97), utan karens.</li>
<li>Lägre inkomsttak än sjukpenning: SGI för VAB beräknas på högst <strong>7,5 prisbasbelopp</strong>.</li>
<li>Gäller normalt barn mellan <strong>8 månader och 12 år</strong> (till dagen före 12-årsdagen), och upp till 16 år om barnet behöver mer tillsyn än normalt.</li>
<li>Max <strong>120 dagar per barn och år</strong>.</li>
</ul>

<h2>Extra skydd via Byggavtalet och AGS</h2>
<p>Lagen anger golvet, men de flesta byggföretag omfattas av kollektivavtal (Byggavtalet mellan Byggnads och Byggföretagen med flera). Avtalet ger normalt påslag utöver den lagstadgade ersättningen – dels <strong>kompletterande sjuklön</strong> för lönedelar över SGI-taket, dels <strong>AGS (Avtalsgruppsjukförsäkring via Afa Försäkring)</strong> som betalar en dagsersättning som toppar upp sjukpenningen från ungefär dag 15. Exakt startdag, procentsats och maxantal dagar styrs av ditt specifika avtal, så kontrollera villkoren i gällande Byggavtal och hos Afa Försäkring innan du lovar en anställd en viss nivå.</p>

<h2>Så sänker byggföretaget sjuklönekostnaden</h2>
<p>Ett skydd som särskilt gynnar mindre byggföretag är <strong>ersättning för höga sjuklönekostnader</strong>. Du rapporterar sjuklönekostnaden i arbetsgivardeklarationen (AGI) varje månad, och Försäkringskassan ersätter automatiskt den del av kostnaden som överstiger en viss andel av din totala lönekostnad. Tröskeln följer en glidande skala efter lönesummans storlek, och ersättningen är maximerad till <strong>250 000 kr per år</strong>. Har du få anställda och en tung sjukperiod kan det här betyda mycket för likviditeten – men du får bara ersättning för kostnader du faktiskt redovisat korrekt i AGI.</p>

<h2>Vanliga misstag och en enkel checklista</h2>
<ul>
<li>Att räkna karensavdrag som en hel dag i stället för 20 % av en veckas sjuklön.</li>
<li>Att ta nytt karensavdrag vid återinsjuknande inom fem kalenderdagar.</li>
<li>Att glömma allmänt högriskskydd – en anställd kan få högst <strong>10 karensavdrag under en rullande tolvmånadersperiod</strong>, därefter tas inget nytt.</li>
<li>Att missa att redovisa sjuklönekostnaden i AGI och därmed gå miste om ersättning.</li>
<li>Att tro att arbetsgivaren betalar VAB – det gör Försäkringskassan.</li>
</ul>
<p>Steg för steg: <strong>Dag 1</strong> – den anställde sjukanmäler sig, du registrerar frånvaron och lägger karensavdraget. <strong>Dag 8</strong> – läkarintyg krävs normalt från och med den åttonde dagen; vid särskilda skäl kan du begära förstadagsintyg. <strong>Dag 15</strong> – sjuklöneperioden slutar, Försäkringskassan tar över och du redovisar sjuklönekostnaden i AGI.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp löser inte lönekörningen åt dig, men systemet ger dig underlaget som gör den rätt. Med digital tidrapportering ser du exakt vilka dagar och timmar varje anställd skulle ha jobbat – vilket är precis vad du behöver för att räkna korrekt sjuklön och karensavdrag i stället för att gissa. Frånvaro registreras per person och projekt, så att sjuk- och VAB-dagar inte råkar faktureras på ett bygge. När månaden är slut har du ett spårbart underlag för både lön och AGI-redovisning, sparat i sju år enligt bokföringskraven.</p>

<h2>Vanliga frågor</h2>
<h3>Måste arbetsgivaren betala något vid VAB?</h3>
<p>Nej. VAB är tillfällig föräldrapenning och betalas helt av Försäkringskassan. Du registrerar frånvaron och drar av lön för de dagar den anställde vabbar, men du varken betalar eller ansöker om ersättningen – det gör den anställde själv.</p>
<h3>Hur stort är karensavdraget?</h3>
<p>Karensavdraget är 20 % av en genomsnittlig veckas sjuklön och är ett fast belopp oavsett när på dagen den anställde blir sjuk. Det görs på den första sjukdagen och blir aldrig större än så, även om sjukperioden pågår i flera dagar.</p>
<h3>När tar Försäkringskassan över betalningen?</h3>
<p>Från och med dag 15 i sjukperioden. Dag 1–14 är arbetsgivarens sjuklöneperiod, därefter kan Försäkringskassan betala sjukpenning på 25, 50, 75 eller 100 procent beroende på arbetsförmågans nedsättning.</p>
<h3>Kan små byggföretag få tillbaka höga sjuklönekostnader?</h3>
<p>Ja. Via ersättningen för höga sjuklönekostnader betalar Försäkringskassan automatiskt tillbaka den del av din sjuklönekostnad som överstiger en tröskel kopplad till din lönesumma, upp till 250 000 kr per år. Förutsättningen är att du redovisar kostnaden i arbetsgivardeklarationen varje månad.</p>

<h2>Kom igång</h2>
<p>Rätt sjuklön och karensavdrag börjar med rätt tidunderlag. Ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> och få ordning på arbetade timmar och frånvaro redan denna vecka. Vill du se hur digital tid- och frånvarohantering ser ut i praktiken? <a href="/sv/contact">Boka en demo →</a> så visar vi upplägget för ditt byggföretag.</p>

<p>Relaterat: <a href="/sv/blog/franvaro-i-byggforetag">Frånvaro i byggföretag – så håller du koll</a> och vår <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a>.</p>
`;

const A_SJUKLON_KARENSAVDRAG_VAB_BYGGFORETAG: BlogPost = {
  _id: "code-"+"sjuklon-karensavdrag-vab-byggforetag",
  title: "Vem betalar vid sjukdom och VAB? Guide för byggföretag", slug: "sjuklon-karensavdrag-vab-byggforetag", locale: "sv",
  excerpt: "Byggföretaget betalar sjuklön dag 1–14, Försäkringskassan tar över från dag 15 och VAB betalas alltid av Försäkringskassan – här är hela kedjan med räkneexempel.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_SJUKLON_KARENSAVDRAG_VAB_BYGGFORETAG_HTML,
  seoTitle: "Sjuklön, karensavdrag & VAB | ByggExp", seoDescription: "Vem betalar vid sjukdom och VAB i byggföretag? Sjuklön dag 1–14, karensavdrag, sjukpenning från dag 15 och VAB från Försäkringskassan – förklarat med exempel.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:18:00.000Z", createdAt: "2026-08-18T19:18:00.000Z", updatedAt: "2026-08-18T19:18:00.000Z",
};

const A_STARTA_BYGGFORETAG_2026_HTML = `
<p>Marknaden för bygg- och entreprenadtjänster fortsätter att efterfråga seriösa hantverkare, och tröskeln för att starta eget är låg – på pappret. I praktiken finns det däremot en enda sak som avgör om du överhuvudtaget kan ta ett entreprenaduppdrag: <strong>godkännande för F-skatt</strong>. Utan den kommer ingen professionell beställare eller generalentreprenör att anlita dig, oavsett hur skicklig du är. Den här guiden går igenom hela vägen från val av företagsform till fakturan på ditt första jobb, med fokus på de beslut som faktiskt kostar pengar om du gör fel.</p>

<p>Ett bra första steg innan du ens har org.nr är att öva på att sätta ihop ett proffsigt anbud – testa vår gratis <a href="/sv/verktyg/offert-mall">offertmall</a> så att du kan lämna ett trovärdigt pris redan från dag ett.</p>

<h2>Enskild firma eller aktiebolag för bygg?</h2>
<p>Valet av företagsform handlar om ansvar, kapital och trovärdighet. I en <strong>enskild firma</strong> (enskild näringsverksamhet) finns ingen gräns mellan dig och företaget – du är personligen och obegränsat ansvarig för alla skulder. Det krävs inget startkapital, och namnskyddet gäller bara inom länet. Det passar dig som startar ensam med begränsad risk och vill komma igång snabbt.</p>
<p>Ett <strong>aktiebolag</strong> kräver 25 000 kr i aktiekapital för privat AB, men begränsar ditt ansvar till det insatta kapitalet och ger namnskydd i hela landet. För bygg väger det tungt: entreprenaduppdrag innebär reklamationsrisk och garantiåtaganden i flera år, och ett fel kan bli dyrt. Många beställare uppfattar dessutom ett AB som mer stabilt, vilket underlättar när du konkurrerar om större jobb eller ska anställa.</p>
<p>Tumregeln: väljer du att ta på dig entreprenadrisk eller planerar att anställa, är AB oftast rätt. Startar du solo med små jobb kan enskild firma fungera i början – och du kan alltid ombilda senare. Vill du gräva djupare i skatt och ansvar, läs vår genomgång av <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">enskild firma eller aktiebolag för bygg</a>.</p>

<h2>F-skatt – i praktiken obligatoriskt för bygguppdrag</h2>
<p>F-skatt är ett godkännande från Skatteverket som visar att du själv sköter din preliminärskatt och dina socialavgifter. Formellt är det inte ett lagkrav för att driva företag – men för byggbranschen är det i realiteten obligatoriskt. Anledningen ligger i reglerna för den som betalar dig: om en beställare anlitar någon som <em>saknar</em> godkänd F-skatt, måste beställaren dra av 30 % preliminärskatt på ersättningen och dessutom betala arbetsgivaravgifter (cirka 31,42 %) ovanpå.</p>
<p>Ingen seriös byggkund eller generalentreprenör tar på sig det administrativa krånglet och den extra kostnaden. Konsekvensen är enkel: utan godkänd F-skatt får du inga entreprenaduppdrag. F-skatten är därför inte en formalitet du kan skjuta upp – den är förutsättningen för hela affären, och den krävs också för att du ska kunna erbjuda dina privatkunder ROT-avdrag.</p>
<p>Du ansöker om F-skatt via verksamt.se i samband med att du registrerar företaget. Har du samtidigt en anställning vid sidan av företaget ansöker du om <strong>FA-skatt</strong>, som kombinerar A-skatt på lönen med F-skatt på näringsverksamheten. Räkna med att godkännandet inte är omedelbart – ansök i god tid innan du planerar att fakturera ditt första jobb.</p>

<h2>Registrera företaget steg för steg</h2>
<p>Registreringen görs i praktiken hos två myndigheter: Bolagsverket och Skatteverket, samlat via e-tjänsten på verksamt.se.</p>
<ol>
<li><strong>Välj företagsform</strong> och registrera företaget. För AB upprättar du stiftelseurkund och bolagsordning, betalar in aktiekapitalet, får bankintyg, upprättar aktiebok och ansöker hos Bolagsverket. Ansökan måste lämnas inom sex månader från stiftelseurkunden.</li>
<li><strong>Ansök om F-skatt</strong> och registrera dig för <strong>moms</strong>. Standardmomsen är 25 %. Gränsen för momsbefrielse är 120 000 kr i omsättning per år, men de flesta byggföretag momsregistrerar sig ändå eftersom kunderna är företag.</li>
<li><strong>Registrera dig som arbetsgivare</strong> hos Skatteverket om du ska anställa.</li>
<li><strong>Anmäl verklig huvudman</strong> till Bolagsverket efter att AB:t fått organisationsnummer.</li>
</ol>
<p>Avgiften för att registrera ett nytt aktiebolag är 1 900 kr via e-tjänsten (2 200 kr på papper). Att registrera en enskild näringsidkares företagsnamn är frivilligt och kostar runt 1 200 kr. Kontrollera alltid aktuella avgifter hos Bolagsverket innan du betalar.</p>

<h2>ID06, personalliggare och kollektivavtal</h2>
<p><strong>ID06</strong> är byggbranschens system för legitimation och elektronisk närvaroregistrering. Kortet registrerar närvaro i den elektroniska personalliggaren, och nästan alla byggarbetsplatser och generalentreprenörer kräver ID06 av sina underentreprenörer. Du registrerar företaget via MittID06 genom en firmatecknare eller administratör och beställer sedan kort.</p>
<p>Elektronisk personalliggare är ett lagkrav på byggarbetsplatser där den totala kostnaden överstiger fyra prisbasbelopp exklusive moms – cirka 235 000 kr (prisbasbeloppet 2025 var 58 800 kr). Byggherren ska anmäla byggarbetsplatsen till Skatteverket innan arbetet påbörjas. Saknas eller är personalliggaren felaktig kan Skatteverket ta ut en kontrollavgift på 12 500 kr plus 2 500 kr per person som inte är registrerad. Verifiera aktuella belopp och 2026 års prisbasbelopp hos Skatteverket.</p>
<p><strong>Byggföretagen</strong> är branschens arbetsgivarorganisation med runt 4 000 medlemsföretag och part i Byggavtalet tillsammans med Byggnads. Kollektivavtal är inte lagstadgat, men krävs för medlemskap och efterfrågas ofta av stora offentliga och privata beställare. Medlemskapet ger dessutom juridisk rådgivning inom arbetsrätt, arbetsmiljö och entreprenadjuridik.</p>

<h2>Försäkringar du inte kan hoppa över</h2>
<p>Ingen generell företagsförsäkring är lagstadgad för ett litet byggföretag – men standardavtalen förutsätter att du har den. Kommersiella entreprenadavtal som <strong>AB 04</strong> och <strong>ABT 06</strong>, liksom konsumentavtalen <strong>ABS 18</strong> och hantverkarformuläret, utgår från att entreprenören håller en ansvars- och allriskförsäkring (entreprenadförsäkring). I praktiken kommer du inte igenom en avtalsförhandling utan den, och en oförsäkrad skada kan sänka hela företaget.</p>
<p>Så fort du anställer tillkommer avtalsförsäkringar via kollektivavtalet. Då blir arbetsskadeförsäkringen TFA och tjänstepensionen Avtalspension SAF-LO obligatoriska och tecknas via Fora. Se försäkringarna som en del av offertkalkylen, inte en frivillig utgift – de är ett faktiskt krav från både beställare och avtal.</p>

<h2>Ditt första uppdrag – offert, ROT och avtal</h2>
<p>Ditt första jobb avgör ditt rykte. Lämna en tydlig, specificerad offert där arbete och material redovisas var för sig, med giltighetstid och betalningsvillkor. Välj rätt standardavtal för uppdraget – AB 04/ABT 06 mot företag, ABS 18 eller hantverkarformuläret mot privatpersoner. Har du privatkunder kan du erbjuda <strong>ROT-avdrag</strong>: kunden får dra av 30 % av arbetskostnaden (inte materialet), och det förutsätter att ditt företag är godkänt för F-skatt. Räkna enkelt ut kundens nettopris med vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator</a> innan du skickar offerten. Kontrollera aktuellt maxbelopp per person hos Skatteverket, eftersom ROT-taket har ändrats de senaste åren.</p>

<h2>Vanligaste misstagen när du startar byggföretag</h2>
<ul>
<li>Att börja fakturera innan F-skatten är godkänd – då tvingas beställaren dra 30 % preliminärskatt.</li>
<li>Att välja enskild firma utan att förstå det personliga och obegränsade ansvaret för skulder.</li>
<li>Att sakna ansvars-/entreprenadförsäkring som standardavtalen kräver.</li>
<li>Att strunta i ID06 och personalliggare – med kontrollavgifter på 12 500 kr plus 2 500 kr per person som följd.</li>
<li>Att lämna luddiga offerter utan specificerat arbete, material och betalningsvillkor.</li>
<li>Att glömma momsregistrering trots att i princip alla kunder är företag.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp tar inte över myndighetsregistreringen – F-skatt, moms och Bolagsverket sköter du hos Skatteverket och verksamt.se. Det vi hjälper dig med är allt runt själva uppdragen: skapa specificerade offerter med korrekt uppdelning av arbete och material, räkna ut ROT-avdraget åt kunden och hålla ordning på fakturor och betalningsvillkor. När du väl har org.nr och godkänd F-skatt är det de dagliga rutinerna som avgör lönsamheten – och där sparar du tid genom att jobba i mallar och kalkyler istället för lösa kalkylark. Bokföring och personalliggare hanterar du i separata system, men underlaget du behöver för att prissätta rätt bygger du enkelt hos oss.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag ha F-skatt för att starta byggföretag?</h3>
<p>Formellt är F-skatt inte ett lagkrav för att driva företag. I praktiken är det obligatoriskt för bygg: utan godkänd F-skatt måste din beställare dra 30 % preliminärskatt och betala arbetsgivaravgifter på din ersättning, vilket gör att ingen seriös kund anlitar dig.</p>
<h3>Enskild firma eller aktiebolag – vad passar bäst för bygg?</h3>
<p>AB begränsar ditt ansvar till aktiekapitalet på 25 000 kr och ger namnskydd i hela landet, vilket passar den som tar entreprenadrisk eller ska anställa. Enskild firma kräver inget kapital men innebär personligt och obegränsat ansvar för alla skulder.</p>
<h3>Behöver jag ID06 och personalliggare?</h3>
<p>ID06 krävs i praktiken av nästan alla byggarbetsplatser och generalentreprenörer. Elektronisk personalliggare är lagkrav när projektets totala kostnad överstiger cirka 235 000 kr, och saknad liggare ger kontrollavgift på 12 500 kr plus 2 500 kr per oregistrerad person.</p>
<h3>Måste jag ha försäkring för att ta uppdrag?</h3>
<p>Ingen försäkring är lagstadgad för ett litet byggföretag, men standardavtalen AB 04, ABT 06 och ABS 18 förutsätter att du har en ansvars- och entreprenadförsäkring. Har du anställda tillkommer avtalsförsäkringarna TFA och tjänstepension via Fora.</p>

<h2>Kom igång</h2>
<p>Börja med det som ger effekt direkt: sätt upp en proffsig offert med vår <a href="/sv/verktyg/offert-mall">offertmall</a> och visa kunden nettopriset med <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylatorn</a>. Vill du se hur ByggExp hänger ihop offert, ROT och fakturering i ett flöde, <a href="/sv/contact">boka en demo</a> så går vi igenom det tillsammans.</p>
<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för bygg</a>, <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a> och <a href="/sv/blog/skriva-offert">Så skriver du en offert som vinner jobbet</a>.</p>
`;

const A_STARTA_BYGGFORETAG_2026: BlogPost = {
  _id: "code-"+"starta-byggforetag-2026",
  title: "Starta byggföretag 2026 – kompletta guiden från företagsform till första uppdraget", slug: "starta-byggforetag-2026", locale: "sv",
  excerpt: "Allt du behöver för att starta byggföretag 2026 – från val av företagsform och F-skatt till ID06, försäkring och ditt första entreprenaduppdrag.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_STARTA_BYGGFORETAG_2026_HTML,
  seoTitle: "Starta byggföretag 2026 | ByggExp", seoDescription: "Så startar du byggföretag 2026: enskild firma eller AB, F-skatt, ID06, försäkring och första uppdraget. Konkret guide för hantverkare och byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:21:00.000Z", createdAt: "2026-08-18T19:21:00.000Z", updatedAt: "2026-08-18T19:21:00.000Z",
};

const A_VATRUMSCERTIFIKAT_BEHORIGHET_GVK_HTML = `
<p>Många beställare hör av sig med samma önskemål: "jag vill anlita ett företag med våtrumscertifikat". Problemet är att något sådant enskilt certifikat inte existerar i Sverige. I stället driver tre olika branschorgan – BKR, GVK och Säker Vatten – varsitt parallellt behörighetssystem, uppdelat efter vilket hantverk du utför. Väljer du fel behörighet, eller ingen alls, riskerar din kund att bli utan försäkringsersättning efter en vattenskada. Den här artikeln vänder sig till dig som är hantverkare, VVS-företagare eller plattsättare och funderar på vilken behörighet som är värd att investera i – och hur du använder den som säljargument i offerten.</p>

<p>Ett tydligt underlag börjar med en proffsig offert. Använd gärna <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a> för att lyfta fram företagets behörigheter redan i anbudet.</p>

<h2>Varför det inte finns ETT våtrumscertifikat</h2>
<p>Ett våtrum byggs av flera yrkesgrupper med helt olika ansvar. Rörinstallationen – tappvatten, avlopp och anslutningar – hanteras av VVS-montörer. Tätskiktet och ytskiktet – membran, plastmatta, kakel och klinker – hanteras av plattsättare och tätskiktsmontörer. Eftersom kraven skiljer sig åt mellan dessa moment finns tre skilda branschsystem: Säker Vatten för rörinstallationer, GVK för tätskikt och plastmatta, samt BKR (Byggkeramikrådet) för keramik. En central princip går igen i alla tre: <strong>auktorisationen ligger på företaget</strong>, medan den enskilde hantverkaren har en personlig behörighet eller branschlegitimation som är knuten till det auktoriserade företaget. Säker Vatten uttrycker det som att "en branschlegitimation är alltid kopplad till ett auktoriserat företag" – legitimationen gäller inte för arbete som utförs utanför en auktoriserad firma.</p>

<h2>Säker Vatten – för VVS och rörinstallationer</h2>
<p>Säker Vatten är systemet för dig som gör rörarbeten. För att företaget ska bli auktoriserat krävs en skriftlig förbindelse att följa branschreglerna Säker Vatteninstallation, giltig ansvarsförsäkring, registrering hos Bolagsverket samt svensk F-skatt och momsregistrering. Kraven ser olika ut för VVS-företag och konsultföretag.</p>
<p>Varje VVS-montör och lärling på företaget måste dessutom ha en egen branschlegitimation. Den kräver att man genomgått utbildningen "Säker Vatteninstallation för VVS-företag" plus ett av följande: dokumenterad yrkesutbildning med branschcertifikat, godkänd validering eller en tidigare godkänd särskild prövning. Sedan 1 januari 2020 erbjuds inte längre särskild prövning till montörer som saknar svenskt branschcertifikat. Legitimationen är giltig i fem år efter godkänd utbildning och är numera digital – den nås via BankID i Säker Vattens app, medan äldre ID06-kombinerade bevis gäller tills de går ut.</p>
<p>De aktuella reglerna är "Branschregler Säker Vatteninstallation 2026:1". Projekt som startats efter 1 januari 2026 ska utföras enligt 2026:1-versionen. När jobbet är klart lämnar det auktoriserade företaget ett "intyg om Säker Vatteninstallation" till kunden – beskrivet som en värdehandling vid försäljning eller vid reglering av en eventuell skada. I dag finns runt 2 234 auktoriserade VVS-företag och cirka 13 978 personer med branschlegitimation.</p>

<h2>GVK – tätskikt, plastmatta och keramik</h2>
<p>GVK (AB Svensk Våtrumskontroll) täcker tätskikt, plastmattebeläggning och även keramik. Systemet har tre separata behörigheter: Plastmatta, Keramik och Tätskikt under keramik. Montörer måste ha giltig GVK-behörighet för sitt område, och företaget ska ha minst en arbetsledare per tio anställda som klarat behörighetskursen Arbetsledare. Alla GVK-behörigheter gäller i fem år och kräver därefter fortbildning för förnyelse.</p>
<p>De gällande branschreglerna heter "Säkra Våtrum 2026" och trädde i kraft 1 januari 2026. Reglerna används som måttstock av försäkringsbolag och beställare – de kan jämföra ett utfört arbete mot branschreglerna för att avgöra om det håller.</p>
<p>Kostnadsmässigt (2026, exkl. moms) ligger registreringsavgiften på cirka 12 490 kr. Årsavgiften är 8 400 kr för Plast eller Keramik, 9 400 kr för båda, plus 0,27 promille av föregående års omsättning (minst 1 500 kr). Behörighetskurserna Plastmatta och Keramik kostar 3 800 kr styck, och Arbetsledarkursen 4 000 kr. Räkna alltså med både en engångskostnad och en löpande årlig utgift.</p>

<h2>BKR / BBV – kakel och klinker</h2>
<p>BKR är plattsättarnas system. Ett behörigt plattsättningsföretag måste ha minst en behörig arbetsledare och minst en behörig plattsättare. Utbildningspaketet består av en tvådagars tätskikts- och materialkurs (teori), en endags arbetsledarkurs som täcker auktorisation och entreprenadjuridik, en tre timmars praktisk tätskiktskurs, samt ett kunskapsprov i plattsättning om yrkesbevis saknas. En ensamföretagare måste gå samtliga kurser själv.</p>
<p>De aktuella våtrumsreglerna är "BBV 26:1" (Byggkeramikrådets branschregler för våtrum). BKR har gett ut branschregler sedan slutet av 1980-talet. Ett behörigt företag ska lämna kunden ett kvalitetsdokument för det färdiga jobbet. Auktorisationen gäller tills vidare men kräver årlig förnyelse och en obligatorisk återkurs vart femte år.</p>
<p>Årsavgiften är trappad efter antal anställda plattsättare och inkluderar PER-medlemskap: 5 100 kr för 1–2 plattsättare, 6 700 kr för 3–5, 10 000 kr för 6–10, 13 200 kr för 11–20 och 16 500 kr för 21 eller fler. Notera att GVK och BKR överlappar på keramik – en plattsättare väljer ett av systemen, inte båda.</p>

<h2>Vem behöver vilket – och varför kunden kräver det</h2>
<p>En enkel tumregel efter yrke: är du VVS-montör eller rörläggare behöver du Säker Vatten. Är du plattsättare eller tätskiktsmontör behöver du BKR eller GVK. En hel badrumsrenovering kräver i praktiken båda hantverken auktoriserade – en Säker Vatten-auktoriserad rörläggare plus en BKR- eller GVK-behörig plattsättare eller tätskiktsmontör.</p>
<p>Den kommersiella drivkraften är tydlig. Försäkringsbolag villkorar ersättning vid vattenskada mot att installationen följt branschreglerna. Kan kunden inte visa upp kvalitetsdokumentet eller intyget efter en läcka riskerar hen nedsatt eller helt indragen ersättning. Våtrum och rörinstallationer är den ledande källan till kostsamma vattenskador i svenska bostäder, och därför screenar seriösa beställare, BRF:er och byggföretag aktivt efter behörighet redan i upphandlingen. Att synas i branschorganens "hitta företag"-register blir en direkt källa till förfrågningar. Behörigheten är alltså inte bara en kostnad – den är ett säljargument och en förutsättning för att komma med i seriösa upphandlingar.</p>

<h2>Vanliga misstag</h2>
<ul>
<li>Att tro att en behörighet täcker hela våtrummet – rör och tätskikt kräver olika system.</li>
<li>Att låta legitimationen gälla för svartjobb eller uppdrag utanför det auktoriserade företaget – den är knuten till firman.</li>
<li>Att missa femårsgränsen för förnyelse och plötsligt stå utan giltig behörighet mitt i en upphandling.</li>
<li>Att glömma lämna kvalitetsdokument eller intyg till kunden – utan det tappar dokumentationen sitt värde vid en skada.</li>
<li>Att inte räkna in årsavgifter och obligatoriska återkurser i kalkylen.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp utfärdar inga behörigheter – det gör branschorganen. Men vi hjälper dig att använda behörigheten i säljet och att sköta den dokumentation som kunden och försäkringsbolaget kräver. I <a href="/sv/verktyg/offert-mall">offertmallen</a> lyfter du fram vilka behörigheter företaget har direkt i anbudet, vilket sänker tröskeln för beställare som screenar. Med <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmallen</a> dokumenterar du utförandet löpande så att underlaget till kvalitetsdokument och intyg finns på plats när jobbet är klart. Målet är att göra det enkelt att bevisa att arbetet är fackmässigt – inte att ersätta branschreglerna.</p>

<h2>Vanliga frågor</h2>
<h3>Finns det ett gemensamt våtrumscertifikat i Sverige?</h3>
<p>Nej. Det finns tre separata system: Säker Vatten för rörinstallationer, GVK för tätskikt och plastmatta, samt BKR för keramik. Ett företag behöver det eller de system som matchar de hantverk det utför.</p>
<h3>Ligger behörigheten på företaget eller på personen?</h3>
<p>Auktorisationen ligger på företaget. Den enskilde hantverkaren har en personlig behörighet eller branschlegitimation som är knuten till det auktoriserade företaget och inte gäller för arbete utanför det.</p>
<h3>Hur länge gäller behörigheten?</h3>
<p>GVK-behörigheter och Säker Vattens branschlegitimation gäller i fem år och kräver därefter förnyelse. BKR-auktorisationen gäller tills vidare men kräver årlig förnyelse plus en obligatorisk återkurs vart femte år.</p>
<h3>Varför kräver kunden att jag är behörig?</h3>
<p>Försäkringsbolag villkorar ofta ersättning vid vattenskada mot att installationen följt branschreglerna. Utan behörigt utförande och rätt dokumentation riskerar kunden nedsatt eller indragen ersättning efter en läcka.</p>

<h2>Kom igång</h2>
<p>Rätt behörighet är en tillgång i säljet, inte bara en post i budgeten. Börja med att visa den tydligt i anbudet med <a href="/sv/verktyg/offert-mall">offertmallen</a> och dokumentera utförandet i <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmallen</a>. Vill du se hur ByggExp kan effektivisera din dokumentation från offert till färdigt intyg? Boka en <a href="/sv/contact">demo</a>. Verifiera alltid aktuella avgifter och kursdatum direkt hos BKR, GVK och Säker Vatten innan du budgeterar.</p>

<p>Relaterat: <a href="/sv/blog/nya-vatrumsregler-2026">Nya våtrumsregler 2026 – vad som ändras</a>.</p>
`;

const A_VATRUMSCERTIFIKAT_BEHORIGHET_GVK: BlogPost = {
  _id: "code-"+"vatrumscertifikat-behorighet-gvk",
  title: "Våtrumscertifikat och behörighet: BKR, GVK eller Säker Vatten?", slug: "vatrumscertifikat-behorighet-gvk", locale: "sv",
  excerpt: "Ingen myndighet utfärdar ett samlat våtrumscertifikat – här reder vi ut vad BKR, GVK och Säker Vatten faktiskt kräver och vilken behörighet ditt företag bör satsa på.", tag: "Behörighet",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_VATRUMSCERTIFIKAT_BEHORIGHET_GVK_HTML,
  seoTitle: "Våtrumscertifikat behörighet | ByggExp", seoDescription: "Det finns inget enda våtrumscertifikat. Så väljer ditt VVS- eller plattsättningsföretag rätt behörighet: BKR, GVK eller Säker Vatten – och varför kunden kräver det.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:30:00.000Z", createdAt: "2026-08-18T19:30:00.000Z", updatedAt: "2026-08-18T19:30:00.000Z",
};

const A_FACTORING_BYGGFORETAG_HTML = `
<p>Byggbranschen betalar nästan alltid ut pengar innan de kommer in. Material köps och löner betalas veckovis, underentreprenörer ska ha sitt – men beställaren betalar först 30, ibland 60 dagar efter fakturadatum. Den glappet i kassan är inte ett tecken på dålig ekonomi, det är hur branschen fungerar. Factoring är ett av verktygen för att överbrygga glappet, men säljsidorna berättar sällan hela kostnadsbilden. Här går vi igenom hur det faktiskt fungerar, oberoende och konkret.</p>

<p>Innan du ens funderar på factoring: se till att fakturorna är korrekta och går ut i tid. Fel förfallodatum, saknad momsmärkning eller otydliga rader gör att betalningen dröjer ännu längre. Använd gärna vår gratis <a href="/sv/verktyg/faktura-mall">fakturamall för byggföretag →</a> så att grunden sitter.</p>

<h2>Vad är factoring – och vad är skillnaden mot ett lån?</h2>
<p>Factoring betyder att du använder dina obetalda kundfakturor för att få loss pengar direkt istället för att vänta på förfallodagen. Det handlar inte om ett nytt banklån mot säkerhet i fastigheter eller maskiner, utan om att frigöra det kapital som redan är bundet i dina kundfordringar. För ett byggbolag i tillväxt, med stora materialutlägg och långa betaltider, är det ofta just kundfordringarna som binder mest pengar.</p>
<p>Det finns två huvudvarianter, och de är viktiga att hålla isär:</p>
<ul>
<li><strong>Fakturaköp</strong> – du säljer fakturan till factoringbolaget, som tar över hela kreditrisken. Hos exempelvis Svea får du pengarna på kontot 1–2 dagar efter köpet. Avgiften beror på fakturans storlek, kundens kreditvärdighet, betalningsvillkor och om fakturan är internationell.</li>
<li><strong>Fakturabelåning</strong> – du lånar mot fakturorna. Factoringbolaget betalar ut en förskottsandel direkt (Svea anger 80–85 %, andra källor omkring 70 %) och resten när kunden betalar. Du behåller kreditrisken tills betalningen kommit in.</li>
</ul>

<h2>Med regress eller utan regress – vem bär risken?</h2>
<p>Den enskilt viktigaste frågan i ett factoringavtal är vem som står risken om beställaren inte betalar.</p>
<ul>
<li><strong>Med regress:</strong> obetalda fakturor återgår till dig efter en viss tid. Du bär alltså kreditrisken – factoringbolaget har bara förskotterat pengar. Detta är i praktiken samma sak som fakturabelåning.</li>
<li><strong>Utan regress:</strong> factoringbolaget tar över hela kreditrisken. Om kunden inte betalar är det deras förlust, inte din. Detta motsvarar ett äkta fakturaköp.</li>
</ul>
<p>Haken är att factoring utan regress i praktiken bara erbjuds mot kreditvärdiga lågriskkunder. Har du en beställare med svag ekonomi eller en privatkund på ROT-jobb, kommer du sällan bli av med risken helt – och det är just då du hade behövt det mest.</p>

<h2>Vad kostar factoring egentligen?</h2>
<p>Här skiljer sig marknadsföringen från verkligheten. En typisk månadsavgift eller ränta ligger på 0,8–1,5 % av fakturabeloppet. Men uttryckt som effektiv årsränta – med alla avgifter inräknade – kan kostnaden spänna från runt 6 % upp mot 50 %. Utöver själva räntan tillkommer ofta:</p>
<ul>
<li>Uppläggningsavgift</li>
<li>Aviavgift per faktura</li>
<li>Minimiavgift eller krav på årsvolym</li>
<li>Påminnelse- och inkassoavgifter</li>
</ul>
<p>Förskottsandelen ligger vanligen på 70–90 % och utbetalning sker inom 1–10 dagar.</p>
<h3>Räkneexempel på en byggfaktura</h3>
<p>Anta en faktura på 200 000 kr med 30 dagars kredittid, fakturabelåning med 85 % förskott och 1,2 % månadsavgift:</p>
<ul>
<li>Direkt utbetalt: 85 % × 200 000 = <strong>170 000 kr</strong></li>
<li>Avgift för en månad: 1,2 % × 200 000 = <strong>2 400 kr</strong></li>
<li>När kunden betalat får du resterande 30 000 kr minus eventuella avi- och tilläggsavgifter.</li>
</ul>
<p>2 400 kr för att få loss 170 000 kr en månad tidigare motsvarar en betydligt högre effektiv årsränta än siffran "1,2 %" antyder. Räkna alltid på hela året och alla avgifter, inte på månadssiffran isolerat.</p>

<h2>För- och nackdelar för byggföretag</h2>
<p><strong>Fördelar:</strong></p>
<ul>
<li>Snabb likviditet – pengar på kontot inom dagar istället för veckor.</li>
<li>Vid factoring utan regress: minskad eller borttagen kreditrisk.</li>
<li>Utlagd reskontra – factoringbolaget kan sköta påminnelser och inkasso.</li>
<li>Frigör bundet kapital utan att belasta bolaget med nytt banklån.</li>
</ul>
<p><strong>Nackdelar:</strong></p>
<ul>
<li>Det kostar marginal – på projekt med redan tunn vinst kan avgiften äta upp lönsamheten.</li>
<li>Bindningstider och volymkrav som gör det svårt att kliva av.</li>
<li>Vid öppen factoring måste kunden notifieras om att fakturan överlåtits eller pantsatts, vilket kan påverka kundrelationen.</li>
</ul>

<h2>Factoring vs checkkredit och företagslån</h2>
<p>Factoring är inte det enda sättet att hantera säsong och projekttoppar. En <strong>checkkredit</strong> ger en flexibel buffert du drar på vid behov och betalar ränta bara på utnyttjat belopp – bra för oregelbundna svackor. Ett <strong>företagslån</strong> passar större, planerade investeringar som en ny maskinpark. Factoring är starkast när problemet specifikt är att kapital fastnar i kundfordringar med långa betaltider, och när fakturavolymen är jämn nog att motivera avgifterna. Många byggbolag kombinerar en checkkredit för löpande svängningar med factoring på de största projektfakturorna.</p>

<h2>Regler och bokföring att hålla koll på</h2>
<p>Ett par saker är värda att känna till innan du skriver på:</p>
<ul>
<li><strong>Räntelagen (1975:635):</strong> en fordran mellan näringsidkare förfaller senast 30 dagar efter att du framställt krav. Längre betaltid B2B är tillåten bara om du uttryckligen godkänt den – det är därför byggföretag ofta lever med 30–60 dagars kredittid.</li>
<li><strong>Dröjsmålsränta:</strong> vid sen betalning B2B är räntan referensräntan + 8 procentenheter (räntelagen 6 §). Referensräntan låg kring 2 % under 2025/2026, vilket ger cirka 10 % dröjsmålsränta. Avtalsvillkor som fråntar dig rätten till dröjsmålsränta är ogiltiga (4 a §).</li>
<li><strong>Öppen vs dold factoring:</strong> fakturabelåning innebär vanligen öppen factoring – kunden notifieras och betalar till factoringbolaget, som sköter reskontra och påminnelser.</li>
<li><strong>Överlåtelseförbud:</strong> vissa entreprenadavtal förbjuder överlåtelse av fordran. Kolla avtalet innan du säljer eller belånar fakturan.</li>
<li><strong>ROT och moms:</strong> alla factoringbolag köper inte ROT-fakturor eller fakturor på löpande räkning. Momsen på factoringavgifterna ska bokföras korrekt, och grundreglerna gäller fortfarande – ROT-avdrag är 30 % av arbetskostnaden, max 50 000 kr per person och år, och mellan byggföretag gäller omvänd byggmoms.</li>
</ul>

<h2>Så väljer du factoringbolag – checklista</h2>
<ol>
<li>Be om <strong>effektiv årskostnad</strong> med alla avgifter, inte bara månadsräntan.</li>
<li>Kontrollera bindningstid och eventuella volymkrav.</li>
<li>Läs regressvillkoren noga – med eller utan regress avgör vem som bär risken.</li>
<li>Fråga om de köper dina fakturatyper (ROT, löpande räkning, offentliga beställare).</li>
<li>Räkna på om marginalen på dina projekt tål avgiften.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp är inget factoringbolag och ger ingen finansiell rådgivning. Men mycket av likviditetsproblemet börjar i fakturaflödet – fakturor som går ut sent, saknar rätt uppgifter eller inte följs upp. I ByggExp skapar du korrekta byggfakturor med rätt momsmärkning och ROT-uppgifter, håller koll på förfallodatum och ser vilka fakturor som är obetalda. Ju stramare ditt eget fakturaflöde är, desto mindre behöver du luta dig på dyr extern finansiering – och desto bättre underlag har du om du väljer factoring. Behöver du bara komma igång snabbt hittar du fler verktyg i vår <a href="/sv/verktyg">samling av gratis byggverktyg →</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan fakturaköp och fakturabelåning?</h3>
<p>Vid fakturaköp säljer du fakturan och factoringbolaget tar över hela kreditrisken. Vid fakturabelåning lånar du mot fakturan, får ett förskott på 70–90 % och behåller kreditrisken tills kunden betalar.</p>
<h3>Vad kostar factoring för ett byggföretag?</h3>
<p>Månadsavgiften ligger typiskt på 0,8–1,5 % av fakturabeloppet, men effektiv årsränta med alla avgifter inräknade kan spänna från cirka 6 % till uppemot 50 %. Uppläggnings-, avi- och minimiavgifter tillkommer ofta.</p>
<h3>Kan jag använda factoring på ROT-fakturor?</h3>
<p>Ibland, men inte alla factoringbolag köper ROT-fakturor eller fakturor på löpande räkning. Fråga specifikt innan du tecknar avtal, och kontrollera att entreprenadavtalet inte förbjuder överlåtelse av fordran.</p>
<h3>Är factoring bättre än en checkkredit?</h3>
<p>Det beror på behovet. Factoring passar när kapital fastnar i kundfordringar med långa betaltider. En checkkredit är mer flexibel för oregelbundna svackor. Många byggbolag kombinerar båda.</p>

<h2>Kom igång</h2>
<p>Börja med att strama upp ditt eget fakturaflöde innan du betalar för extern finansiering. Skapa korrekta fakturor med vår <a href="/sv/verktyg/faktura-mall">gratis fakturamall →</a>, eller <a href="/sv/contact">boka en demo →</a> så visar vi hur ByggExp håller koll på förfallodatum och obetalda fakturor. Den här guiden är oberoende vägledning, inte finansiell rådgivning.</p>

<p>Relaterat: <a href="/sv/blog/likviditet-byggforetag">Likviditet i byggföretag</a> och <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a>.</p>
`;

const A_FACTORING_BYGGFORETAG: BlogPost = {
  _id: "code-"+"factoring-byggforetag",
  title: "Factoring för byggföretag – frigör kapital utan att vänta 30–60 dagar", slug: "factoring-byggforetag", locale: "sv",
  excerpt: "En oberoende guide till factoring för byggföretag: skillnaden mellan fakturaköp och fakturabelåning, vad det faktiskt kostar och när det passar.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/8fakturor.webp", contentHtml: A_FACTORING_BYGGFORETAG_HTML,
  seoTitle: "Factoring för byggföretag | ByggExp", seoDescription: "Oberoende guide till factoring för byggföretag 2026: fakturaköp vs belåning, för- och nackdelar, ungefärlig kostnad och räkneexempel.",
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:33:00.000Z", createdAt: "2026-08-18T19:33:00.000Z", updatedAt: "2026-08-18T19:33:00.000Z",
};

const A_ROTAVDRAG_2026_NYA_REGLER_FORETAG_HTML = `
<p>Den tillfälliga höjningen av rotavdraget till 50 % av arbetskostnaden gällde bara under 2025. Från och med 2026 är vi tillbaka på den ordinarie nivån: 30 % av arbetskostnaden. För dig som driver byggföretag betyder det att offerter, nettopriser och kassaflöde påverkas direkt – och att du inte får lova kunden fel siffra på ett jobb som betalas 2026.</p>

<p>Behöver du snabbt räkna ut kundens nettopris och företagets begäran om utbetalning? Testa vår gratis <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator -&gt;</a> innan du skickar offerten.</p>

<h2>Det här gäller 2026 – siffrorna klart och tydligt</h2>
<p>Utgå från dessa nivåer när du prissätter ett ROT-jobb under 2026:</p>
<ul>
<li><strong>ROT: 30 % av arbetskostnaden.</strong> Det är den ordinarie nivån, som gäller igen efter den tillfälliga höjningen 2025.</li>
<li><strong>Endast arbete ger avdrag.</strong> Material, resekostnader och utrustning omfattas aldrig – de måste redovisas separat.</li>
<li><strong>Tak: 50 000 kr per person och år för ROT.</strong> ROT och RUT räknas dessutom ihop till maximalt 75 000 kr per person och år, där ROT-delen alltså aldrig får överstiga 50 000 kr.</li>
<li><strong>RUT: 50 % av arbetskostnaden</strong> (oförändrad ordinarie nivå). Skillnaden mot ROT gör att rätt kategorisering av arbetet påverkar kundens avdrag.</li>
</ul>
<p>Verifiera alltid det aktuella taket och gällande regler mot Skatteverket innan du binder dig i en offert.</p>

<h2>2025 var ett undantag – 12 maj till 31 december</h2>
<p>Under en avgränsad period 2025 höjdes ROT tillfälligt till 50 % av arbetskostnaden. Höjningen gällde enbart arbete som <strong>betalades mellan 12 maj och 31 december 2025</strong>. Den perioden är slut. Risken nu är att en kund minns "50 %" från förra året och förväntar sig samma avdrag på ett jobb du utför i år. Så är det inte – på arbete som betalas 2026 gäller 30 %. Var tydlig med det redan i offertskedet, annars sitter du med en missnöjd kund när slutfakturan inte ger det avdrag hen räknat med.</p>

<h2>Betalningsdatumet styr allt</h2>
<p>Det är inte fakturadatumet och inte när arbetet utfördes som avgör – det är <strong>datumet då kunden betalar fakturan</strong>. Betalningsdatumet bestämmer både vilket beskattningsår avdraget hamnar på och vilka procentregler som gäller.</p>
<p>Det blir extra viktigt runt årsskiftet. Ett arbete som är utfört i december 2025 men där kunden betalar fakturan den 2 januari 2026 omfattas av 2026 års regler – alltså 30 %, inte 50 %. Utförandedatumet spelar ingen roll för procentsatsen. Planera därför fakturering och betalningspåminnelser med detta i åtanke, och skriv aldrig in en avdragsnivå i avtalet utan att koppla den till betalningstidpunkten.</p>

<h2>Så räknar du och sätter priset rätt</h2>
<p>Ett räkneexempel på ett badrumsjobb som betalas under 2026:</p>
<ul>
<li>Arbetskostnad: 80 000 kr inkl. moms</li>
<li>Material: 40 000 kr inkl. moms (ger inget avdrag)</li>
<li>ROT-avdrag: 30 % av 80 000 kr = <strong>24 000 kr</strong></li>
<li>Kunden betalar: 80 000 − 24 000 + 40 000 = <strong>96 000 kr</strong></li>
<li>Företaget begär utbetalning från Skatteverket: <strong>24 000 kr</strong></li>
</ul>
<p>Separera alltid arbete och material på fakturan – annars kan Skatteverket ifrågasätta hur du fördelat kostnaden. Kontrollera också att kundens 30 %-avdrag ryms under taket på 50 000 kr, särskilt om hen redan gjort andra ROT-jobb under året. En tydlig faktura där posterna är uppdelade skapar du enkelt med vår <a href="/sv/verktyg/faktura-mall">fakturamall</a>, och du lägger in avdraget redan i anbudet med vår <a href="/sv/verktyg/offert-mall">offertmall</a>.</p>

<h2>Fakturamodellen steg för steg för utföraren</h2>
<p>Fakturamodellen är det vanligaste sättet att hantera ROT, och det är du som utförare som sköter administrationen:</p>
<ol>
<li><strong>Ha F-skatt.</strong> Endast företag med godkänd F-skatt får tillämpa avdraget.</li>
<li><strong>Dra av kundens preliminära ROT direkt på fakturan.</strong> Kunden betalar bara sin nettodel.</li>
<li><strong>Se till att kunden betalar elektroniskt.</strong> Kort, BankID, Swish eller kontoöverföring krävs sedan 1 januari 2020 – kontant betalning godkänns inte.</li>
<li><strong>Begär utbetalning från Skatteverket</strong> för resterande belopp. Du behöver kundens personnummer, fastighets- eller lägenhetsuppgifter samt arbetskostnaden.</li>
</ol>
<p>Kontrollera också grundkraven: kunden ska äga och bo i (eller ha nära anknytning till) bostaden som renoveras, ROT gäller inte hyresrätter, och arbetet får inte utföras av kundens eget företag eller någon närstående.</p>

<h2>När Skatteverket nekar – och du sitter med Svarte Petter</h2>
<p>ROT är en skattereduktion, inte ett kostnadsavdrag. Reduktionen kan aldrig överstiga kundens sammanlagda skatt (inkomstskatt, fastighetsskatt med mera). Skatteverket kan neka utbetalning om kundens tak redan är fullt, om kunden har för låg skatt, eller om arbetet kategoriserats fel. Då riskerar du att stå utan den del du redan dragit av på fakturan.</p>
<p>Skydda dig genom att skriva in en klausul i avtalet: om ROT-avdraget helt eller delvis uteblir, oavsett orsak, betalar kunden mellanskillnaden. Det är en enkel mening som kan spara dig tusenlappar per jobb.</p>

<h2>Checklista inför varje ROT-jobb 2026</h2>
<ul>
<li>Kontrollera att kundens ROT-tak (max 50 000 kr) inte redan är förbrukat.</li>
<li>Räkna med 30 %, inte 50 % – och koppla nivån till betalningsdatumet.</li>
<li>Dela upp arbete och material tydligt på fakturan.</li>
<li>Se till att kunden betalar elektroniskt.</li>
<li>Kontrollera bostadsform och ägande (inte hyresrätt, inte närstående).</li>
<li>Lägg in avtalsklausulen om att kunden betalar mellanskillnaden om avdraget uteblir.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du offerten med separata poster för arbete och material, så att ROT-underlaget blir rätt från start. Du lägger in det preliminära avdraget på fakturan, håller koll på betalningsdatum och samlar de uppgifter du behöver för begäran om utbetalning – personnummer, fastighets- eller lägenhetsuppgifter och arbetskostnad. Verktygen hjälper dig att jobba strukturerat, men du ansvarar själv för att kontrollera aktuella belopp och regler mot Skatteverket för varje enskilt jobb.</p>

<h2>Vanliga frågor</h2>
<h3>Är rotavdraget 30 % eller 50 % 2026?</h3>
<p>30 % av arbetskostnaden. Den tillfälliga höjningen till 50 % gällde enbart arbete som betalades mellan 12 maj och 31 december 2025 och gäller inte längre.</p>
<h3>Vilket datum avgör vilken ROT-nivå som gäller?</h3>
<p>Betalningsdatumet på fakturan – inte fakturadatumet och inte när arbetet utfördes. Ett jobb som betalas 2 januari 2026 ger 30 %, även om arbetet utfördes 2025.</p>
<h3>Hur mycket ROT kan en kund få per år?</h3>
<p>Högst 50 000 kr per person och år för ROT. ROT och RUT räknas ihop till maximalt 75 000 kr per person och år, där ROT-delen aldrig får överstiga 50 000 kr.</p>
<h3>Vad händer om Skatteverket nekar utbetalningen?</h3>
<p>Då riskerar du att stå utan den avdragna delen. Skriv därför in i avtalet att kunden betalar mellanskillnaden om avdraget uteblir, exempelvis på grund av fullt tak eller för låg skatt.</p>

<h2>Kom igång</h2>
<p>Räkna ut kundens nettopris och företagets utbetalning på sekunder med vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator</a>. Vill du se hur ByggExp kan effektivisera hela flödet från offert till betald faktura? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/rot-avdrag">Rotavdrag – så fungerar det</a> och <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a>.</p>
`;

const A_ROTAVDRAG_2026_NYA_REGLER_FORETAG: BlogPost = {
  _id: "code-"+"rotavdrag-2026-nya-regler-foretag",
  title: "Rotavdrag 2026 för företag – så prissätter och fakturerar du rätt", slug: "rotavdrag-2026-nya-regler-foretag", locale: "sv",
  excerpt: "Den tillfälliga 50 %-höjningen är slut – 2026 gäller 30 % ROT igen, och betalningsdatumet avgör allt när du offererar och fakturerar.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/rot-avdrag-preview.webp", contentHtml: A_ROTAVDRAG_2026_NYA_REGLER_FORETAG_HTML,
  seoTitle: "Rotavdrag 2026 företag | ByggExp", seoDescription: "ROT är 30 % av arbetskostnaden 2026 – den tillfälliga 50 %-nivån gällde bara 2025. Så prissätter, fakturerar och begär du utbetalning rätt.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/rot-avdrag-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:36:00.000Z", createdAt: "2026-08-18T19:36:00.000Z", updatedAt: "2026-08-18T19:36:00.000Z",
};

const A_AVDRAG_ENSKILD_FIRMA_BYGG_HTML = `
<p>Som hantverkare i enskild firma sänker rätt avdrag skatten direkt på ditt överskott – det är beloppet du redovisar på NE-bilagan som beskattas, så varje avdragsgill krona du missar blir dyrare skatt. Många byggare drar av för lite på sådant de faktiskt har rätt till, och drar samtidigt av sådant Skatteverket underkänner vid kontroll. Här går vi igenom de vanligaste missarna med 2026 års regler och belopp.</p>

<p>Vill du räkna och dokumentera löpande i stället för att gissa i efterhand? Använd <a href="/sv/verktyg">våra gratis verktyg för byggföretagare -&gt;</a> för att hålla ordning på mil, offerter och underlag redan under året.</p>

<h2>Arbetsrum hemma – schablonavdraget de flesta glömmer</h2>
<p>Sköter du offerter, planering, beställningar och administration hemifrån kan du ha rätt till ett schablonavdrag för arbetsrum, även om rummet inte är särskilt inrättat. Beloppen för 2026 är:</p>
<ul>
<li><strong>2 000 kr/år</strong> om du bor i en fastighet som ägs av dig eller din make/maka, till exempel villa.</li>
<li><strong>4 000 kr/år</strong> om du bor i hyresrätt eller bostadsrätt.</li>
</ul>
<p>Förutsättningen är att du arbetar <strong>minst 800 timmar per år</strong> i bostaden för verksamheten. Offert- och planeringstid, materialbeställningar, bokföring och kundkontakt räknas – inte bara ren skrivbordstid. För en byggare som lägger kvällar på anbud och fakturering är 800 timmar ofta lättare att nå än man tror.</p>
<p>Är arbetsrummet i stället <em>särskilt inrättat</em> – klart avskilt och olämpligt för privat bruk – kan du i stället dra av faktisk merkostnad, som extra el, uppvärmning och städning. Kraven är dock stränga och uppfylls sällan i en vanlig bostad, så för de flesta är schablonen den realistiska vägen.</p>

<h2>Milersättning och körjournal – 25 kr/mil med egen bil</h2>
<p>Kör du din egen (eller privatleasade) bil i verksamheten får du ett schablonavdrag på <strong>25 kr/mil (2,50 kr/km)</strong> för både inkomstår 2025 och 2026. Det är ett schablonbelopp – du drar alltså inte av verkliga kostnader som drivmedel och service separat ovanpå det.</p>
<ul>
<li><strong>Egen/privatleasad bil:</strong> 25 kr/mil.</li>
<li><strong>Förmånsbil (diesel, bensin, hybrid):</strong> 12 kr/mil.</li>
<li><strong>Helt eldriven förmånsbil:</strong> 9,50 kr/mil.</li>
</ul>
<p>Den avgörande detaljen är <strong>körjournalen</strong>. Utan en löpande körjournal med datum, mätarställning, syfte och antal mil kan Skatteverket underkänna hela avdraget vid kontroll – och för byggare med många korta resor mellan hem, byggarbetsplatser och materialinköp blir det snabbt stora belopp. För journalen samma dag du kör, inte i efterhand vid deklarationen.</p>
<p><strong>Exempel:</strong> 3 500 affärsmil på ett år med egen bil ger 3 500 × 25 kr = <strong>87 500 kr</strong> i avdrag. Med bristfällig körjournal riskerar du att inte få dra av någonting alls.</p>

<h2>Verktyg och maskiner – direktavdrag eller avskrivning</h2>
<p>Inventarier av mindre värde får du dra av direkt året du köper dem om anskaffningsvärdet är mindre än ett halvt prisbasbelopp exklusive moms – <strong>29 600 kr för 2026</strong> (29 400 kr för 2025). Även <strong>korttidsinventarier</strong> med förväntad livslängd på högst tre år får dras av direkt, oavsett belopp.</p>
<p>Dyrare verktyg och maskiner över gränsen skrivs i stället av över tid genom värdeminskningsavdrag. För bygg innebär det i praktiken:</p>
<ul>
<li><strong>Direktavdrag:</strong> handverktyg, spikpistol, batteridrivna maskiner, mindre ställningsdelar och liknande som ligger under gränsen.</li>
<li><strong>Avskrivning:</strong> dyrare maskiner, komplett ställningssystem eller bilinredning som överstiger 29 600 kr och har längre livslängd.</li>
</ul>
<p>Tänk på att beloppsgränsen räknas <strong>exklusive moms</strong> – momsen hanterar du separat som ingående moms.</p>

<h2>Arbetskläder – skyddskläder ja, vanliga kläder nej</h2>
<p>Här missar många åt båda hållen. <strong>Skyddskläder och skyddsutrustning är avdragsgilla</strong>: skyddsskor, hjälm, hörselskydd, arbetshandskar, varselkläder och liknande skyddsutrustning. Det är kläder som skyddar dig i arbetet.</p>
<p>Däremot är <strong>vanliga kläder inte avdragsgilla</strong> – jeans, t-shirt, flanellskjorta, jacka eller byxor räknas som privat levnadskostnad även om du bara använder dem på jobbet. Gränsfallet är kläder med företagets logotyp: kan de rimligen inte bäras privat kan de vara avdragsgilla. En omärkt fritidsjacka du råkar ha på bygget är det alltså inte.</p>

<h2>Utbildning och certifieringar – fortbildning kontra ny kompetens</h2>
<p>Fortbildning som behåller eller uppdaterar kompetensen i din befintliga verksamhet är avdragsgill. För en byggare handlar det ofta om:</p>
<ul>
<li>Heta arbeten och certifikatförnyelser.</li>
<li>Ställningsbyggnad och fallskydd.</li>
<li>Lift- och truckkort.</li>
<li>Säkerhets- och regelverksuppdateringar.</li>
</ul>
<p>Grundutbildning som ger dig ett <strong>helt nytt yrke eller ny kompetens</strong> räknas däremot som privat levnadskostnad och är inte avdragsgill. Ett viktigt undantag: utbildningskostnader du haft under startåret och året innan kan under vissa förutsättningar dras av när du startar din enskilda näringsverksamhet.</p>

<h2>Snabb checklista – fler avdrag byggare ofta missar</h2>
<ul>
<li>Mobil och abonnemang – verksamhetsdelen.</li>
<li>Facklitteratur och branschtidningar.</li>
<li>Företagsförsäkringar.</li>
<li>Hemsida, domän och annonsering.</li>
<li>Ränta på företagslån.</li>
<li>Ingående moms på avdragsgilla inköp av verktyg och skyddskläder.</li>
</ul>

<h2>Så bokför och dokumenterar du rätt</h2>
<p>Avdragen står och faller med underlaget. Spara alla kvitton, för körjournalen löpande och håll en tydlig gräns mellan privat och verksamhet – blandar du ihop dem blir det svårt att styrka vid kontroll. Alla avdrag redovisas på NE-bilagan i deklarationen. Bokföring och underlag ska sparas i sju år. Är du osäker på om en kostnad är avdragsgill, stäm av mot Skatteverket eller din redovisningskonsult innan du drar av.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte din bokföring, men gör underlaget lättare att få rätt. Med offerter, tidrapporter och order samlade på ett ställe blir det enklare att skilja verksamhetens kostnader från privata och att ta fram siffror inför deklarationen. Våra <a href="/sv/verktyg">gratis verktyg</a> hjälper dig att räkna och dokumentera redan under året, så att avdragen är styrkta när det är dags att fylla i NE-bilagan – inte något du försöker rekonstruera i efterhand.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket är milersättningen i enskild firma 2026?</h3>
<p>25 kr/mil (2,50 kr/km) för egen eller privatleasad bil, vilket gäller både inkomstår 2025 och 2026. För förmånsbil är avdraget 12 kr/mil, och 9,50 kr/mil för helt eldriven förmånsbil. Det är ett schablonavdrag, så du drar inte av verkliga bilkostnader separat.</p>
<h3>Får jag dra av verktyg direkt eller måste jag skriva av dem?</h3>
<p>Inventarier av mindre värde upp till 29 600 kr exklusive moms (2026) får du dra av direkt året du köper dem, liksom korttidsinventarier med livslängd på högst tre år oavsett belopp. Dyrare verktyg och maskiner över gränsen skrivs av över tid.</p>
<h3>Är arbetskläder avdragsgilla för byggare?</h3>
<p>Skyddskläder och skyddsutrustning som skyddsskor, hjälm, hörselskydd och varselkläder är avdragsgilla. Vanliga kläder som jeans, t-shirt och jacka är inte avdragsgilla, även om du bara använder dem på jobbet. Logotypkläder som inte rimligen kan bäras privat kan vara ett undantag.</p>
<h3>Kan jag dra av arbetsrum hemma?</h3>
<p>Ja, med ett schablonavdrag på 2 000 kr/år om du bor i egen villa/fastighet och 4 000 kr/år i hyres- eller bostadsrätt, förutsatt att du arbetar minst 800 timmar per år i bostaden för verksamheten. Offert-, planerings- och administrationstid räknas in.</p>

<h2>Kom igång</h2>
<p>Håll ordning på mil, verktyg och offerter redan under året med <a href="/sv/verktyg">våra gratis verktyg för byggföretagare</a>, så är underlaget klart när du ska deklarera. Vill du se hur ByggExp samlar order, tid och fakturaunderlag på ett ställe? <a href="/sv/contact">Boka en demo här</a>. Kom ihåg att beloppen ovan gäller inkomstår 2026 – dubbelkolla alltid aktuella schablonbelopp mot Skatteverket.</p>

<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag</a> och <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a>.</p>
`;

const A_AVDRAG_ENSKILD_FIRMA_BYGG: BlogPost = {
  _id: "code-"+"avdrag-enskild-firma-bygg",
  title: "Avdrag i enskild firma för byggföretagare – de vanligaste missarna (2026)", slug: "avdrag-enskild-firma-bygg", locale: "sv",
  excerpt: "Rätt avdrag sänker skatten direkt på ditt överskott – här är avdragen byggföretagare i enskild firma oftast missar, med 2026 års belopp.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_AVDRAG_ENSKILD_FIRMA_BYGG_HTML,
  seoTitle: "Avdrag enskild firma bygg 2026 | ByggExp", seoDescription: "Avdragen byggare i enskild firma ofta missar: arbetsrum, milersättning, verktyg, arbetskläder och utbildning. 2026 års belopp och regler från Skatteverket.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:39:00.000Z", createdAt: "2026-08-18T19:39:00.000Z", updatedAt: "2026-08-18T19:39:00.000Z",
};

const A_AVDRAG_ARBETSKLADER_VERKTYG_HTML = `
<p>En vanlig missuppfattning bland hantverkare och byggföretag är att allt man använder på jobbet automatiskt är avdragsgillt. Så är det inte. Skatteverket drar en skarp gräns mellan skyddskläder, profilkläder med logga och vanliga kläder – och för verktyg avgör pris och livslängd om du får dra av hela kostnaden direkt eller måste skriva av den över flera år. Tar du fel riskerar du både uteblivet avdrag och förmånsbeskattning som utlöser arbetsgivaravgifter.</p>

<p>Vill du hålla ordning på inköp, kvitton och underlag för avdragen? Testa våra <a href="/sv/verktyg">gratis verktyg för byggföretag -></a> och samla dokumentationen på ett ställe.</p>

<h2>Skyddskläder och skyddsutrustning = fullt avdrag, ingen förmånsbeskattning</h2>
<p>Personlig skyddsutrustning är fullt avdragsgill för företaget och förmånsbeskattas inte hos den anställde. Skälet är enkelt: utrustningen är särskilt anpassad för arbetet och kan inte lämpligen användas privat. Hit hör bland annat:</p>
<ul>
<li>Hjälm och skyddsglasögon</li>
<li>Skyddsskor med tåhätta och spiktrampskydd</li>
<li>Hörselskydd och arbetshandskar</li>
<li>Väder- och kylskydd för utomhusarbete</li>
</ul>
<p>Det finns dessutom ett tydligt verksamhetssyfte som stärker avdragsrätten: enligt arbetsmiljöreglerna är arbetsgivaren skyldig att kostnadsfritt tillhandahålla den personliga skyddsutrustning som arbetet kräver. Reglerna återfinns i Arbetsmiljöverkets nya föreskriftsstruktur (AFS 2023-serien), som gäller från 1 januari 2025. Att du <em>måste</em> förse dina anställda med utrustningen gör kostnaden till en självklar driftkostnad.</p>

<h2>Profilkläder och uniform med logga – avdragsgillt om märkningen är tydlig och beständig</h2>
<p>Arbetskläder med arbetsgivarens namn eller logga är avdragsgilla för företaget och skattefria för den anställde, förutsatt att de bärs i tjänsten. Loggan gör plagget olämpligt för privat bruk, och det är precis den poängen som gör avdraget möjligt.</p>
<p>Två villkor måste vara uppfyllda:</p>
<ul>
<li>Företagsnamn eller logga ska vara <strong>tydligt och beständigt</strong> anbringat – tryckt, broderat eller på annat sätt fast på plagget.</li>
<li>Märkningen får <strong>inte vara löstagbar</strong>. Ett kardborreband eller en knäppbar patch som lätt tas bort räcker inte.</li>
</ul>
<p>Praktiskt tips: placera loggan väl synligt, till exempel på bröst och rygg, och använd tryck eller brodyr snarare än pins. Ju tydligare kopplingen till företaget är, desto svårare är det att ifrågasätta avdraget.</p>

<h2>Vanliga kläder = inget avdrag och risk för förmånsbeskattning</h2>
<p>Jeans, t-tröjor, jackor, kostymer och vanliga skor är inte avdragsgilla som arbetskläder – även om plaggen bara används på jobbet. Skatteverket ser dem som privata levnadskostnader.</p>
<p>Här skiljer sig konsekvensen mellan bolagsformerna:</p>
<ul>
<li><strong>Aktiebolag:</strong> betalar bolaget vanliga kläder åt en anställd uppstår en skattepliktig förmån. Det utlöser arbetsgivaravgifter och preliminärskatt – en dyr omväg.</li>
<li><strong>Enskild firma:</strong> det blir helt enkelt en privat levnadskostnad utan avdrag.</li>
</ul>
<p>Vill du fördjupa dig i hur bolagsformen påverkar just din situation, läs vår guide om <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">enskild firma eller aktiebolag för byggverksamhet</a>.</p>

<h2>Verktyg – direktavdrag eller inventarier?</h2>
<p>För verktyg finns det två vägar till direktavdrag, alltså att dra av hela kostnaden på inköpsåret:</p>
<ol>
<li><strong>Inventarier av mindre värde:</strong> anskaffningsvärdet exklusive moms understiger ett halvt prisbasbelopp. Prisbasbeloppet för 2026 är 59 200 kr, så gränsen ligger på <strong>29 600 kr exkl. moms</strong>.</li>
<li><strong>Korttidsinventarier:</strong> verktyg med en beräknad ekonomisk livslängd på högst 3 år får dras av direkt oavsett belopp. Detta är ett separat alternativ till mindre-värde-regeln.</li>
</ol>
<p>Uppfyller inköpet något av kriterierna bokför du det som förbrukningsinventarie och drar av hela summan direkt. De flesta handverktyg, mindre elverktyg och slitagedelar hamnar här.</p>

<h2>Dyra maskiner och verktyg – aktivera och skriv av</h2>
<p>Ett verktyg eller en maskin som både kostar över gränsen och har en nyttjandetid över 3 år ska aktiveras som inventarium och skrivas av över tid. Då fördelas kostnaden på flera år. Du har tre huvudmetoder:</p>
<ul>
<li><strong>Räkenskapsenlig avskrivning, huvudregeln:</strong> 30 % på restvärdet per år.</li>
<li><strong>Räkenskapsenlig avskrivning, kompletteringsregeln:</strong> 20 % linjärt, vilket ger full avskrivning på 5 år.</li>
<li><strong>Restvärdesavskrivning:</strong> 25 % per år – ett alternativ för enskild firma utan årsbokslut.</li>
</ul>
<p>Ett exempel: köper du en maskin för 60 000 kr och tillämpar huvudregeln drar du av 18 000 kr första året (30 % av 60 000), sedan 30 % av det kvarvarande restvärdet året därpå, och så vidare. Med kompletteringsregeln drar du istället av 12 000 kr per år i fem år.</p>

<h2>Moms och beloppsgränsen</h2>
<p>Momsregistrerade företag lyfter ingående moms på verktyg och skyddskläder separat. Därför bedöms beloppsgränsen för direktavdrag alltid mot beloppet <strong>exklusive moms</strong>. Ett verktyg som kostar 35 000 kr inkl. moms landar på 28 000 kr exkl. moms – alltså under 29 600 kr och därmed direktavdrag.</p>
<p>Var uppmärksam på inköp som hör ihop. Köper du flera inventarier med ett naturligt samband, till exempel en verktygssats eller flera delar som köps och används tillsammans, bedöms de som <strong>en enhet</strong> mot beloppsgränsen. Du får inte stycka upp fakturan för att pressa varje del under halvt prisbasbelopp.</p>

<h2>Snabb checklista för hantverksföretaget</h2>
<ul>
<li><strong>Dra av direkt:</strong> skyddsutrustning, profilkläder med fast logga, verktyg under 29 600 kr exkl. moms eller med livslängd högst 3 år.</li>
<li><strong>Måste märkas:</strong> profil- och arbetskläder – tydlig, beständig och icke löstagbar logga.</li>
<li><strong>Aldrig avdragsgillt:</strong> vanliga kläder utan logga (jeans, t-tröja, jacka, kostym, vanliga skor).</li>
<li><strong>Aktivera och skriv av:</strong> maskiner och verktyg över gränsen med livslängd över 3 år.</li>
<li><strong>Alltid:</strong> spara kvitton och dokumentera skyddsbehovet. Bokföring och underlag ska bevaras i 7 år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ordning på underlagen så att avdragen blir enkla att styrka. Du samlar kvitton, inköp och projektkostnader digitalt och slipper leta i pappershögar när det är dags för bokslut eller en eventuell fråga från Skatteverket. Vi gör inte din bokföring och ersätter inte din redovisningskonsult – men vi ser till att dokumentationen kring verktyg, skyddskläder och projekt finns samlad och sökbar. Det gör klassificeringen direktavdrag kontra inventarier lättare att göra rätt, och underlaget lättare att spara i de sju år som krävs.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag dra av arbetsskor?</h3>
<p>Ja, om det är skyddsskor med tåhätta eller spiktrampskydd. Då är de personlig skyddsutrustning och fullt avdragsgilla utan förmånsbeskattning. Vanliga skor utan skyddsfunktion är däremot inte avdragsgilla.</p>
<h3>Räcker en liten logga för att kläderna ska bli avdragsgilla?</h3>
<p>Det avgörande är att loggan är tydlig, beständig och fast anbringad, inte hur stor den är. En liten men väl synlig och icke löstagbar logga kan räcka. Använd tryck eller brodyr och placera märkningen synligt, exempelvis på bröst och rygg.</p>
<h3>Kan jag dra av arbetsbyxor utan logga?</h3>
<p>Nej. Vanliga arbetsbyxor utan skyddsfunktion och utan fast logga räknas som vanliga kläder och är inte avdragsgilla – även om de bara används på jobbet. Betalar bolaget dem blir det en skattepliktig förmån.</p>
<h3>Vad gäller för underställ och regnkläder?</h3>
<p>Väder- och kylskydd för utomhusarbete räknas som skyddsutrustning och är avdragsgilla när de behövs för arbetet. Regnkläder och funktionsunderställ som är avsedda för och används i utomhusarbetet faller normalt in under skyddskläder, medan plagg som lika gärna kan användas privat bedöms som vanliga kläder.</p>

<h2>Kom igång</h2>
<p>Samla kvitton, inköp och underlag för dina avdrag på ett ställe med våra <a href="/sv/verktyg">gratis verktyg för byggföretag</a>. Vill du se hur ByggExp fungerar i praktiken? <a href="/sv/contact">Boka en demo</a> så visar vi hur du håller ordning på dokumentationen.</p>

<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggverksamhet</a> · <a href="/sv/verktyg">Verktyg för byggföretag</a></p>
`;

const A_AVDRAG_ARBETSKLADER_VERKTYG: BlogPost = {
  _id: "code-"+"avdrag-arbetsklader-verktyg",
  title: "Avdrag för arbetskläder och verktyg 2026 – vad Skatteverket faktiskt godkänner", slug: "avdrag-arbetsklader-verktyg", locale: "sv",
  excerpt: "Skatteverket skiljer skarpt på skyddskläder, profilkläder med logga och vanliga kläder – och på verktyg som direktavdrag kontra avskrivning. Så gör byggföretaget rätt 2026.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_AVDRAG_ARBETSKLADER_VERKTYG_HTML,
  seoTitle: "Avdrag arbetskläder & verktyg | ByggExp", seoDescription: "Skyddskläder och profilkläder med logga = avdrag, vanliga kläder = inte. Verktyg: direktavdrag under 29 600 kr eller inventarier. Så gör byggföretaget rätt 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:42:00.000Z", createdAt: "2026-08-18T19:42:00.000Z", updatedAt: "2026-08-18T19:42:00.000Z",
};

const A_REPRESENTATIONSAVDRAG_2026_HTML = `
<p>Representation är ett av de mest missförstådda avdragen i byggbranschen. Många tror fortfarande att en kundlunch är avdragsgill fullt ut, andra vågar inte dra av ens momsen av rädsla för Skatteverket. Sanningen ligger någonstans mittemellan: sedan 2017 ger själva maten inget inkomstskatteavdrag alls, men du får fortfarande dra momsen på ett underlag om högst 300 kr per person. Här går vi igenom exakt vilka belopp som gäller 2026 och hur du räknar rätt.</p>

<p>Vill du hålla koll på avdrag, moms och kvitton löpande hittar du våra gratis verktyg samlade i <a href="/sv/verktyg">vår verktygslåda -&gt;</a>.</p>

<h2>Vad räknas som representation?</h2>
<p>Representation delas in i extern och intern. Extern representation riktas mot kunder, leverantörer eller andra affärskontakter, till exempel en lunch med beställaren för att inleda eller upprätthålla en affärsförbindelse. Intern representation riktas mot din egen personal, som en personalfest efter avslutat projekt eller ett internt planeringsmöte.</p>
<p>Grundkravet är detsamma oavsett typ: representationen ska ha ett <strong>omedelbart samband med verksamheten</strong>. En kundlunch i anslutning till ett avtalsmöte på bygget godkänns. En middag som mer handlar om personlig gästfrihet eller allmän trevnad gör det inte. Sällskapsdryck och privat värdskap ger aldrig avdrag.</p>

<h2>Måltidsavdraget som försvann 2017</h2>
<p>Den 1 januari 2017 togs det inkomstskattemässiga avdraget för representationsmåltider bort helt, både för extern och intern representation. Det innebär att lunch, middag och supé ger <strong>0 kr i avdrag mot resultatet</strong>. Reglerna är oförändrade 2026 och inga nya beloppsändringar har införts.</p>
<p>Det du fortfarande får göra är att dra av momsen. Avdragsunderlaget är högst 300 kr per person exklusive moms. På det beloppet drar du 12 % moms på mat och 25 % moms på alkohol som vin och sprit. Momsavdraget gäller oavsett hur mycket dyrare notan faktiskt blev, momsen beräknas bara på de första 300 kronorna per person, inte på hela beloppet.</p>

<h2>När notan överstiger 300 kr: schablonen på 46 kr</h2>
<p>Blir måltiden dyrare än 300 kr per person och innehåller både mat och alkohol får du använda ett schablonmässigt momsavdrag på <strong>högst 46 kr per person</strong>. Det är Skatteverkets schablon och den ligger fast 2026.</p>
<p>Ett exempel: du bjuder beställaren på middag för 600 kr per person, inklusive vin. Du får inget inkomstskatteavdrag för maten. Momsavdraget blir schablonens 46 kr per person, inte momsen på hela 600-kronorsnotan. Bjuder du fyra personer landar det avdragsgilla momsbeloppet på 4 x 46 = 184 kr.</p>

<h2>Enklare förtäring: 60 kr per person som faktiskt är avdragsgill</h2>
<p>Det finns ett undantag som är värt att känna till. Enklare förtäring som inte utgör en måltid, till exempel kaffe, te, bulle, smörgås, frukt eller kaka, är avdragsgill både inkomstskattemässigt och momsmässigt med <strong>högst 60 kr per person och tillfälle</strong>.</p>
<p>Det gör att fikat på byggmötet eller kaffet på uppstarten faktiskt ger fullt avdrag, till skillnad från lunchen. Gränsen går vid vad som är en måltid. Serverar du något som ersätter lunch eller middag räknas det som måltidsrepresentation igen, med bara momsavdrag på 300-kronorsunderlaget.</p>

<h2>Personalfest 2026: 180 kr i kringkostnader plus moms på maten</h2>
<p>Vid personalfest är kringkostnader som lokalhyra, musik, underhållning och transport avdragsgilla med <strong>högst 180 kr per person och tillfälle</strong>. Själva måltiden ger som vanligt bara momsavdrag på underlaget 300 kr per person. Avdrag medges normalt för högst två personalfester per år.</p>
<p>Ta en byggfirma med tio anställda som ordnar en sommarfest. Lokalhyra, band och busstransport på 180 kr per person ger 10 x 180 = 1 800 kr i avdragsgilla kringkostnader. Maten ger inget resultatavdrag men momsen på upp till 300 kr per person är avdragsgill.</p>

<h2>Representations- och reklamgåvor: 300 kr exklusive moms</h2>
<p>Både representationsgåvor och reklamgåvor är avdragsgilla med <strong>högst 300 kr exklusive moms per person</strong>. En julklapp till en trogen kund är en representationsgåva, medan en enklare artikel med ditt firmanamn som du delar ut brett är en reklamgåva. Håll dig under 300 kr exklusive moms så är gränsdragningen enklare och avdraget tryggt.</p>

<h2>Dokumentationskraven Skatteverket ställer</h2>
<p>Den vanligaste orsaken till underkänt representationsavdrag är bristande underlag. Kvittot i sig räcker inte. Underlaget måste visa:</p>
<ul>
<li><strong>Syftet</strong> med representationen (till exempel avtalsmöte eller uppstart av projekt)</li>
<li><strong>Datum</strong> för tillfället</li>
<li><strong>Deltagarnas namn</strong> och vilket företag var och en representerar</li>
</ul>
<p>Ett digitalt kvitto fungerar lika bra som ett papperskvitto så länge uppgifterna finns med. Notera deltagare och syfte direkt när det händer, i efterhand är det lätt att glömma vem som var med. Spara underlaget i sju år enligt bokföringsreglerna.</p>

<h2>Räkneexempel för en byggfirma</h2>
<p>Så här kan ett år se ut för en mindre byggfirma:</p>
<ul>
<li><strong>Kundlunch 250 kr per person, 2 personer:</strong> under 300 kr. Inget resultatavdrag på maten, men momsen (12 %) på hela beloppet är avdragsgill.</li>
<li><strong>Kundmiddag 600 kr per person med vin, 4 personer:</strong> över 300 kr med alkohol. Schablon 46 kr per person ger 184 kr i avdragsgill moms. Inget resultatavdrag.</li>
<li><strong>Personalfest, 10 anställda:</strong> 180 kr per person i kringkostnader = 1 800 kr i avdrag, plus momsavdrag på maten upp till 300 kr per person.</li>
<li><strong>Fika på byggmöte, 5 personer x 40 kr:</strong> enklare förtäring under 60 kr. Fullt avdrag både för resultat och moms.</li>
</ul>

<h2>Checklista och vanliga misstag att undvika</h2>
<ol>
<li>Räkna inte med resultatavdrag för lunch och middag, det försvann 2017.</li>
<li>Dra bara moms på högst 300 kr per person, inte på hela notan.</li>
<li>Använd schablonen 46 kr per person när dyra måltider innehåller alkohol.</li>
<li>Skilj på fika (60 kr, fullt avdrag) och måltid (bara moms).</li>
<li>Notera alltid syfte, datum och deltagare direkt på kvittot.</li>
<li>Håll dig till max två personalfester per år.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte din bokföring, men gör förarbetet enklare. Med kvitton och underlag samlade digitalt är det lätt att notera syfte och deltagare direkt vid utgiften, så att din redovisningsbyrå kan bedöma avdragsrätten korrekt. Du slipper leta efter lösa kvitton i slutet av året och minskar risken för underkända avdrag på grund av bristande dokumentation.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag dra av kundlunchen 2026?</h3>
<p>Inte inkomstskattemässigt. Sedan 2017 ger representationsmåltider inget resultatavdrag. Du får dock dra momsen på ett underlag om högst 300 kr per person exklusive moms.</p>
<h3>Hur mycket moms får jag dra på en dyr middag med vin?</h3>
<p>Om måltiden överstiger 300 kr per person och innehåller både mat och alkohol får du använda Skatteverkets schablon på högst 46 kr per person i momsavdrag.</p>
<h3>Är fika på byggmötet avdragsgillt?</h3>
<p>Ja. Enklare förtäring som kaffe, smörgås och bulle är avdragsgill både för resultat och moms med högst 60 kr per person och tillfälle, så länge det inte utgör en måltid.</p>
<h3>Hur många personalfester får jag dra av per år?</h3>
<p>Normalt medges avdrag för högst två personalfester per år, med 180 kr per person i kringkostnader plus momsavdrag på maten.</p>

<h2>Kom igång</h2>
<p>Samla kvitton, syfte och deltagare löpande så blir representationsavdraget rätt utan stress vid deklarationen. Utforska <a href="/sv/verktyg">våra gratis verktyg</a> eller <a href="/sv/contact">boka en demo</a> så visar vi hur du håller ordning på ekonomin i vardagen.</p>

<p>Relaterat: <a href="/sv/blog/moms-hantverkare">Moms för hantverkare: så funkar 25 %, omvänd byggmoms och ROT</a></p>
`;

const A_REPRESENTATIONSAVDRAG_2026: BlogPost = {
  _id: "code-"+"representationsavdrag-2026",
  title: "Representationsavdrag 2026: kundlunch, personalfest och moms för byggföretag", slug: "representationsavdrag-2026", locale: "sv",
  excerpt: "Så funkar representationsavdraget 2026 för byggföretag: vilka belopp som gäller för kundlunch, fika, personalfest och gåvor, och hur du räknar rätt momsavdrag.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_REPRESENTATIONSAVDRAG_2026_HTML,
  seoTitle: "Representationsavdrag 2026 | ByggExp", seoDescription: "Kundlunch, personalfest och momsavdrag på representation 2026. Exakta belopp (300/60/180 kr) och räkneexempel för dig i byggbranschen.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:45:00.000Z", createdAt: "2026-08-18T19:45:00.000Z", updatedAt: "2026-08-18T19:45:00.000Z",
};

const A_SERVICEBIL_ELLER_FORMANSBIL_HTML = `
<p>Snickaren tar servicebilen hem efter jobbet, svänger förbi bygghandeln på lördagen och hämtar barnen på vägen. Harmlöst? I Skatteverkets ögon kan just de resorna förvandla en skattefri servicebil till en fullt beskattad förmånsbil – för hela året. Frågan <strong>servicebil eller förmånsbil</strong> avgörs inte av vad du kallar bilen, utan av hur den faktiskt används. Här får du det konkreta svaret, den avgörande gränsen på högst 10 tillfällen och 100 mil privat körning per år, och en checklista för att hålla bilen på rätt sida.</p>

<p>Vill du räkna på vad valet betyder för just din firma? Använd <a href="/sv/verktyg">våra gratis verktyg för hantverkare och byggföretag -&gt;</a> som utgångspunkt innan du stämmer av de exakta 2026-talen med Skatteverket.</p>

<h2>Servicebil vs förmånsbil – vad är skillnaden?</h2>
<p>Juridiskt är detta två helt olika saker. En <strong>förmånsbil</strong> är en bil som företaget äger eller leasar och som den anställda får använda privat. Den privata dispositionen är en skattepliktig löneförmån. En <strong>tjänstebil eller servicebil</strong> används enbart i tjänsten – klassiska exempel är post-, polis- och ambulansfordon.</p>
<p>Det viktiga: det är den faktiska – och även den <em>möjliga</em> – privata användningen som styr. Redan rätten att köra bilen privat (dispositionsrätten) kan utlösa bilförmån. En skåpbil full av verktyg blir alltså inte automatiskt en skattefri servicebil bara för att den är utrustad för arbete. Om du kan använda den privat och inte kan bevisa motsatsen, kan förmånen tas ut.</p>

<h2>Skatteverkets gräns – ringa privat körning</h2>
<p>Det finns en säkerhetsventil: privat körning i <strong>ringa omfattning</strong> utlöser ingen bilförmån. Men gränsen är snäv och består av två villkor som båda måste hållas samtidigt:</p>
<ul>
<li>Högst <strong>10 tillfällen</strong> privat körning per år, <em>och</em></li>
<li>Högst <strong>100 mil</strong> (1 000 km) privat körning per år.</li>
</ul>
<p>Överskrids <em>något</em> av de två – till exempel 12 korta ärenden eller en enda längre semesterresa på 120 mil – beskattas hela förmånsvärdet för hela året. Det finns ingen proportionering. Regeln är väl etablerad praxis (med grund i RÅ 2001 ref. 22) och gäller oförändrat 2026. Kom ihåg att gränsen handlar om faktisk körning, men att själva dispositionsrätten är utgångspunkten – kan du inte visa att du håller dig under gränserna, presumerar Skatteverket förmån.</p>

<h2>Körjournal – din enda bevisning</h2>
<p>Bevisbördan ligger på dig och företaget, inte på Skatteverket. För att visa att den privata körningen stannade inom ringa omfattning – eller var noll – måste du föra en trovärdig <strong>körjournal</strong>. Den ska för varje resa ange:</p>
<ul>
<li>Datum</li>
<li>Syfte (tjänst eller privat, och vilken kund/uppdrag)</li>
<li>Från och till (adress eller plats)</li>
<li>Mätarställning vid start och slut</li>
</ul>
<p>Utan en löpande och detaljerad körjournal kan Skatteverket påföra full bilförmån även för en bil som i praktiken bara använts i tjänsten – helt enkelt för att den privata användningen inte kan uteslutas. En digital körjournal som loggar automatiskt via GPS sparar tid och ger starkare bevisning än handskrivna anteckningar i efterhand.</p>

<h2>Så räknas förmånsvärdet om bilen blir förmånsbil</h2>
<p>Om bilen bedöms som förmånsbil beskattas du på ett schablonvärde – oavsett hur lite du faktiskt kört privat. För bilar registrerade från 1 juli 2021 byggs förmånsvärdet av fyra delar:</p>
<ul>
<li>Ett <strong>fast belopp</strong> (0,29 × prisbasbeloppet)</li>
<li>Ett <strong>ränterelaterat belopp</strong> (statslåneräntan 30 november året innan plus en procentenhet, som lägst 0,5 %, gånger nybilspriset)</li>
<li>Ett <strong>prisrelaterat belopp</strong> (13 % av nybilspriset)</li>
<li>Ett <strong>lyxbilstillägg</strong> på 20 % för den del av nybilspriset som överstiger 7,5 prisbasbelopp</li>
</ul>
<p>Två justeringar är särskilt viktiga för hantverkare med hög körsträcka: körs bilen minst <strong>3 000 mil (30 000 km) i tjänsten</strong> under året sätts förmånsvärdet ned till 75 %. Betalar arbetsgivaren dessutom drivmedel för din privata körning beskattas det som <strong>drivmedelsförmån</strong> med 1,2 × marknadsvärdet av det privat förbrukade bränslet – ovanpå bilförmånen. Exakta koefficienter, prisbasbelopp och statslåneränta för 2026 hämtar du hos Skatteverket innan du räknar i kronor.</p>

<h2>Vanlig fälla – resan hem räknas som privat</h2>
<p>En klassisk missuppfattning: arbetsresor mellan bostad och arbetsplats är <strong>privat körning</strong>, inte tjänstekörning. Kör du firmabilen hem varje kväll räknas det alltså in i den privata omfattningen och äter snabbt upp både tillfällena och milen.</p>
<p>Undantaget räddar många hantverkare: om din <strong>tjänsteställe är bostaden</strong> – vilket är vanligt när arbetsplatsen växlar dagligen mellan olika kunder och byggen – kan resan hemifrån till dagens första arbetsplats räknas som en tjänsteresa. Om bostaden verkligen är tjänsteställe avgörs från fall till fall, så dokumentera hur ditt arbete ser ut.</p>

<h2>Servicebil eller förmånsbil – vad lönar sig?</h2>
<p>Det finns tre huvudspår, och rätt val beror på hur mycket du kör privat kontra i tjänsten:</p>
<ol>
<li><strong>Ren servicebil / lätt lastbil.</strong> Ingen förmånsskatt så länge du håller dig inom ringa privat körning. Företaget drar av driftskostnader och – för lätt lastbil – momsen. Nackdel: du behöver en egen privatbil vid sidan om.</li>
<li><strong>Förmånsbil.</strong> Alla bilkostnader samlas hos arbetsgivaren och du slipper äga privat. Nackdel: du inkomstbeskattas på hela förmånsvärdet (marginalskatt cirka 32–52 %) oavsett hur lite du kör privat. För en personbil får företaget dessutom inte lyfta momsen på inköpet.</li>
<li><strong>Egen bil plus milersättning.</strong> Kör du bara ibland i tjänsten kan skattefri bilersättning för egen bil, 25 kr/mil (2,50 kr/km), vara både enklast och billigast. Ingen förmån att bevaka.</li>
</ol>
<p>Tumregeln: mycket tjänstekörning och lite privat talar för servicebil eller lätt lastbil; mycket blandad körning talar för förmånsbil; sällan i tjänsten talar för egen bil med milersättning.</p>

<h2>Checklista – håll servicebilen skattefri</h2>
<ul>
<li>Skriv en tydlig policy om förbud mot eller starkt begränsat privat nyttjande.</li>
<li>För körjournal varje dag – datum, syfte, från/till och mätarställning.</li>
<li>Håll dig under både 10 tillfällen och 100 mil privat per år.</li>
<li>Parkera bilen vid arbetsplatsen, inte hemma, när det går.</li>
<li>Dokumentera om bostaden är ditt tjänsteställe.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte Skatteverkets bedömning, men gör underlaget enklare. När du registrerar var dagens jobb utförs och kopplar resor till rätt kund och projekt får du en tydlig historik över var bilen faktiskt varit – ett stöd när du ska visa att körningen var i tjänsten. Tid, uppdrag och adresser samlas på ett ställe, så att din redovisningskonsult snabbt kan bedöma om bilen håller sig inom ringa omfattning. Notera att appen inte är en godkänd körjournal i sig – för bevisning behöver du fortfarande en körjournal som loggar mätarställning per resa.</p>

<h2>Vanliga frågor</h2>
<h3>När blir en servicebil en förmånsbil?</h3>
<p>När den privata körningen överstiger ringa omfattning, alltså mer än 10 tillfällen eller mer än 100 mil per år. Redan möjligheten att köra privat kan utlösa förmån om du inte kan bevisa motsatsen med körjournal.</p>
<h3>Räknas resan mellan hemmet och jobbet som privat?</h3>
<p>Ja, arbetsresor bostad–arbetsplats är privat körning. Undantag gäller om bostaden är ditt tjänsteställe, vilket är vanligt för hantverkare med växlande arbetsplatser – då kan första resan bli en tjänsteresa.</p>
<h3>Måste jag föra körjournal för en servicebil?</h3>
<p>I praktiken ja. Bevisbördan ligger på dig, och utan trovärdig körjournal kan Skatteverket påföra full bilförmån även om bilen bara använts i tjänsten.</p>
<h3>Sänks förmånsvärdet om jag kör mycket i tjänsten?</h3>
<p>Ja. Kör du minst 3 000 mil i tjänsten under året sätts förmånsvärdet ned till 75 %. Det gör förmånsbil mer intressant för hantverkare med hög årlig körsträcka.</p>

<h2>Kom igång</h2>
<p>Bestäm dig utifrån din körning: mycket tjänst och lite privat pekar mot servicebil, blandat mot förmånsbil, sällan mot egen bil och milersättning. Räkna på alternativen med <a href="/sv/verktyg">våra gratis verktyg</a> och stäm av de exakta 2026-talen med Skatteverket eller din redovisningskonsult. Vill du se hur ByggExp håller ordning på tid, uppdrag och resor? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag – vad ska du välja?</a></p>
`;

const A_SERVICEBIL_ELLER_FORMANSBIL: BlogPost = {
  _id: "code-"+"servicebil-eller-formansbil",
  title: "Servicebil eller förmånsbil? Så avgör du vad som lönar sig 2026", slug: "servicebil-eller-formansbil", locale: "sv",
  excerpt: "Kör du firmabilen hem eller till bygghandeln kan servicebilen bli en skattepliktig förmånsbil – här är gränsen och vad som lönar sig 2026.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_SERVICEBIL_ELLER_FORMANSBIL_HTML,
  seoTitle: "Servicebil eller förmånsbil 2026 | ByggExp", seoDescription: "Servicebil eller förmånsbil? Så håller du firmabilen skattefri – Skatteverkets gräns 10 tillfällen och 100 mil privat körning per år förklarad.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:48:00.000Z", createdAt: "2026-08-18T19:48:00.000Z", updatedAt: "2026-08-18T19:48:00.000Z",
};

const A_DEBITERA_SERVICEBIL_ROT_HTML = `
<p>Frågan dyker upp hos i stort sett varje servicebolag och hantverkare som jobbar med ROT-berättigade uppdrag: kan jag lägga in kostnaden för servicebilen, framkörningen och restiden i mitt ROT-timpris så att kunden får dra av mer? Lockelsen är förståelig – ju högre arbetskostnad, desto större ROT-avdrag för kunden och desto lättare att stänga affären. Men svaret är nej, och att göra fel kan bli dyrt för dig som utförare. Här går vi igenom regelverket 2026 och hur du särredovisar fordons- och materialkostnad korrekt på fakturan.</p>

<p>Vill du snabbt räkna på hur mycket ROT som faktiskt landar på arbetskostnaden i ett uppdrag? Testa vår gratis <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator -&gt;</a> innan du sätter ihop offerten.</p>

<h2>Så funkar ROT-avdraget 2026 – snabbfakta</h2>
<p>ROT-avdraget 2026 är 30 % av arbetskostnaden (inklusive moms), med ett tak på 50 000 kr per person och år. Den tillfälliga förstärkningen under 2025, då avdraget höjdes till 50 % från mitten av maj till årsskiftet 2025, har upphört. Från 2026 gäller alltså återigen den ordinarie nivån på 30 % – räkna aldrig med 50 % i dina offerter.</p>
<p>Avdraget hanteras via fakturamodellen. Det innebär att du som utförare drar av kundens ROT-del direkt på fakturan och sedan begär utbetalning av mellanskillnaden från Skatteverket. Kunden betalar bara sin reducerade del. Det här är viktigt att förstå, för det är också du som bär ansvaret om något blir fel.</p>

<h2>Grundregeln: ROT ges bara på arbetskostnaden</h2>
<p>ROT-avdraget ges enbart på arbetskostnaden för arbete som utförs i eller i nära anslutning till bostaden. Allt annat faller utanför. Följande kostnader är uttryckligen <strong>inte</strong> ROT-grundande:</p>
<ul>
<li><strong>Material</strong> – virke, spik, färg, komponenter och förbrukningsvaror.</li>
<li><strong>Maskinhyra och utrustning</strong> – hyrd lift, ställning, verktyg och maskiner.</li>
<li><strong>Resor och transport</strong> – till och från arbetsplatsen.</li>
<li><strong>Framkörning och leverans</strong> – utkörningsavgift, framkörningsavgift.</li>
<li><strong>Restid och körtid</strong> – tid du tillbringar i bilen på väg till kunden.</li>
<li><strong>Arkitektarbete</strong> – ritning och projektering.</li>
</ul>
<p>Eftersom bara faktiskt arbete på plats är avdragsgillt är det här listan du måste hålla i huvudet varje gång du prissätter ett ROT-uppdrag.</p>

<h2>Därför kan du inte baka in servicebilen i ROT-timmen</h2>
<p>ROT-timmen ska spegla verkligt arbete som utförts hos kunden – ingenting annat. När du lägger på ett dolt påslag för servicebil, framkörning eller material i timpriset blåser du artificiellt upp arbetskostnaden. Den delen av timpriset motsvarar inget faktiskt arbete på plats och är därmed inte avdragsgill. Konsekvensen blir att du redovisat ett för högt ROT-underlag, och Skatteverket granskar just den här typen av oproportionerlig fördelning mellan arbete och material. Att dölja bil- eller materialkostnad i timpriset för att öka avdraget accepteras inte.</p>
<p>Det handlar alltså inte om en gråzon där man kan tänja lite. Fordons- och servicebilskostnad, framkörning och körtid till kunden ska särredovisas och är inte avdragsgilla för kunden – oavsett hur du väljer att formulera raden på fakturan.</p>

<h2>Så särredovisar du rätt på fakturan</h2>
<p>Lösningen är enkel: dela upp fakturan i tydliga rader så att ROT-grundande arbete står för sig självt. Så här kan en korrekt uppdelning se ut:</p>
<ol>
<li><strong>Arbetskostnad på plats</strong> – ROT-grundande. Endast tid som lagts på faktiskt arbete i bostaden.</li>
<li><strong>Framkörning / körtid</strong> – egen rad, ej ROT.</li>
<li><strong>Material</strong> – egen rad, ej ROT.</li>
<li><strong>Maskinhyra</strong> – egen rad, ej ROT.</li>
</ol>
<p>Ett räkneexempel. Anta att du utfört 20 timmars arbete på plats à 700 kr inkl. moms, tagit ut en framkörningsavgift på 800 kr, förbrukat material för 4 000 kr och hyrt en maskin för 1 200 kr:</p>
<ul>
<li>Arbetskostnad på plats: 20 × 700 = 14 000 kr (ROT-grundande).</li>
<li>ROT-avdrag: 30 % × 14 000 = 4 200 kr som dras av på fakturan.</li>
<li>Framkörning 800 kr + material 4 000 kr + maskinhyra 1 200 kr = 6 000 kr utan avdrag.</li>
</ul>
<p>Kunden betalar då 14 000 − 4 200 + 6 000 = 15 800 kr, och du begär de 4 200 kronorna från Skatteverket. Hade du i stället gömt de 6 000 kronorna i timpriset hade underlaget blivit felaktigt uppblåst – och avdraget stått på lös grund.</p>

<h2>Vem bär risken? Du som utförare</h2>
<p>Det här är kärnan i varför frestelsen inte är värd det. Skatteverket betalar ut ROT-beloppet till dig som utförare, inte till kunden. Om villkoren inte är uppfyllda – till exempel för att arbetskostnaden blåsts upp med dolda bil- eller materialpåslag – återkräver Skatteverket beloppet av företaget. Kunden går fri, men du sitter med återbetalningskravet och den administrativa smällen. Ett par tusenlappar i extra ROT per uppdrag väger lätt mot risken att behöva betala tillbaka i efterhand.</p>

<h2>Praktiska tips för servicebolag</h2>
<ul>
<li>Sätt ett korrekt timpris som speglar det faktiska arbetet på plats – inte dina fasta kostnader.</li>
<li>Prissätt framkörning och utkörning separat och öppet, som en egen rad.</li>
<li>Var transparent mot kunden om vad som är avdragsgillt och inte. Det bygger förtroende och undviker efterdiskussioner.</li>
<li>Dokumentera arbetstiden på plats noggrant, så att du kan visa vad ROT-underlaget bygger på om det granskas.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp kan du bygga fakturor där arbetskostnad, material, framkörning och maskinhyra ligger på separata rader från start, så att bara det ROT-grundande arbetet räknas in i avdraget. ROT-delen beräknas på arbetsraderna och du slipper räkna manuellt. Vill du testa uppdelningen först kan du använda vår enkla <a href="/sv/verktyg/faktura-mall">fakturamall</a> och vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator</a>. Verktygen ersätter inte din egen bedömning av vad som är avdragsgillt, men de gör det svårare att råka blanda ihop raderna.</p>

<h2>Vanliga frågor</h2>
<h3>Får restid räknas som ROT-arbete?</h3>
<p>Nej. Restid och körtid till och från kunden är inte arbete som utförts i bostaden och är därför inte ROT-grundande. Den tiden ska hållas utanför ROT-timmarna.</p>
<h3>Får jag ta ut en framkörningsavgift?</h3>
<p>Ja, du får självklart debitera framkörning. Men den ska ligga på en egen rad utan ROT-avdrag – den kan inte gömmas i arbetskostnaden.</p>
<h3>Vad händer om jag redovisat ROT felaktigt?</h3>
<p>Skatteverket återkräver det utbetalda beloppet av företaget, inte av kunden. Du som utförare bär hela risken, plus den administrativa hanteringen.</p>
<h3>Räknas maskinhyra som ROT?</h3>
<p>Nej. Maskinhyra och utrustning är uttryckligen undantaget och ska särredovisas som en egen rad utan avdrag.</p>

<h2>Kom igång</h2>
<p>Grundprincipen är enkel att följa när du väl har raderna på plats: särredovisa alltid arbete, material, framkörning och maskinhyra – och låt bara arbetet bära ROT. Räkna på ditt nästa uppdrag med vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du sätter upp korrekta ROT-fakturor från början.</p>

<p>Relaterat: <a href="/sv/blog/rot-avdrag">Så fungerar ROT-avdraget för hantverkare</a> och <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare – guide</a>.</p>
`;

const A_DEBITERA_SERVICEBIL_ROT: BlogPost = {
  _id: "code-"+"debitera-servicebil-rot",
  title: "Får du baka in bilkostnaden i ROT-timdebiteringen?", slug: "debitera-servicebil-rot", locale: "sv",
  excerpt: "Att gömma servicebil, framkörning och restid i ROT-timpriset lockar – men det är inte avdragsgillt och kan leda till återkrav. Så gör du rätt 2026.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/rot-avdrag-preview.webp", contentHtml: A_DEBITERA_SERVICEBIL_ROT_HTML,
  seoTitle: "Debitera servicebil i ROT? | ByggExp", seoDescription: "Får du baka in servicebil, framkörning och restid i ROT-timpriset? Kort svar: nej. Så särredovisar du fordons- och materialkostnad rätt på ROT-fakturan 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/rot-avdrag-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:51:00.000Z", createdAt: "2026-08-18T19:51:00.000Z", updatedAt: "2026-08-18T19:51:00.000Z",
};

const A_LEVERANTORSFAKTURA_BYGG_PROJEKT_HTML = `
<p>De pengar ett byggföretag tappar syns sällan i bokslutet — de försvinner en leverantörsfaktura i taget. Ett materialinköp som aldrig knyts till ett projekt, en maskinhyra som ingen kommer ihåg att vidarefakturera, en underentreprenörsfaktura som bokförs på fel jobb. Var för sig är beloppen små. Sammantaget är det skillnaden mellan svart och rött på projektet. Lösningen är en enkel rutin utan luckor: faktura in → konteras per projekt → attesteras → kommer med på kundens faktura.</p>

<p>Ett bra sätt att räkna hem varje inköp med rätt påslag är att använda <a href="/sv/verktyg/paslag-marginal-kalkylator">vår gratis påslags- och marginalkalkylator →</a> innan du sätter priset på kundfakturan.</p>

<h2>Vad är en leverantörsfaktura i ett byggprojekt?</h2>
<p>En leverantörsfaktura är en kostnad som kommer in till ditt företag: material från grossisten, en underentreprenör, maskinhyra, transport eller container. Det är motsatsen till kundfakturan, som är det du skickar ut. Poängen i projektredovisning är att varje krona som kommer in måste ha ett projekt-ID redan från beställningen. Utan projektmärkning vet du inte vad jobbet faktiskt kostade — och då kan du varken fakturera rätt på löpande räkning eller mäta täckningsgraden på ett fastprisjobb.</p>

<h2>Obligatoriska uppgifter på fakturan du tar emot</h2>
<p>Innan du bokför bör du kontrollera att leverantörsfakturan uppfyller kraven i 17 kap. mervärdesskattelagen (2023:200). En felaktig faktura kan sänka din avdragsrätt för moms. Kontrollera att den innehåller:</p>
<ul>
<li>Fakturadatum</li>
<li>Ett unikt löpnummer</li>
<li>Säljarens organisations-/momsregistreringsnummer</li>
<li>Köparens momsnummer när omvänd betalningsskyldighet eller EU-handel gäller</li>
<li>Säljarens och köparens namn och adress</li>
<li>Mängd och art på varorna eller omfattningen av tjänsten</li>
<li>Leveransdatum</li>
<li>Beskattningsunderlaget per momssats</li>
<li>Momssatsen och momsbeloppet</li>
</ul>
<p>För småbelopp upp till 4 000 kr inklusive moms räcker en förenklad faktura med färre uppgifter — bra att veta för kvitton på skruv och förbrukningsmaterial från bygghandeln.</p>

<h2>Omvänd byggmoms — den vanligaste fällan på leverantörsfakturan</h2>
<p>Omvänd betalningsskyldighet (omvänd byggmoms) betyder att det är du som köpare, inte säljaren, som redovisar momsen. Reglerna finns i 16 kap. mervärdesskattelagen. Det gäller när tjänsten är en byggtjänst och köparen är en näringsidkare som själv säljer byggtjänster mer än tillfälligt. Då fakturerar säljaren <strong>utan moms</strong>.</p>
<p>En sådan faktura ska ange köparens momsnummer, texten <em>omvänd betalningsskyldighet</em> och 0 kr i moms. Kommer det in en faktura från en underentreprenör med 25 % moms påslagen fast omvänd moms borde gällt — då är den fel och du bör begära en rättad faktura. I bokföringen redovisar du själv både utgående och ingående moms på samma 25-procentiga underlag. När inköpet är fullt avdragsgillt nettar det till noll, men det måste ändå redovisas i momsdeklarationen. Att få projektets material- och underentreprenörskostnad rätt hänger alltså ihop med att bokföra den omvända momsen korrekt — inte bara nettobeloppet.</p>

<h2>Kontering per projekt — koppla kostnaden dit den hör hemma</h2>
<p>Att kontera betyder att du kodar kostnaden på rätt konto <strong>och</strong> rätt projekt eller kostnadsställe. Det andra ledet är det som avgör din vinst. På löpande räkning är projektkonteringen direkt grunden för vad du får fakturera vidare. På fast pris är den grunden för att mäta täckningsgraden — ligger de verkliga inköpen över kalkylen äter de upp marginalen utan att du ser det förrän jobbet är klart.</p>
<p>I ByggExp konteras varje inköp direkt på projektet så det syns i projektets självkostnad medan jobbet pågår, inte i efterhand. Då kan du fånga en avvikelse medan du fortfarande kan göra något åt den.</p>

<h2>Attest — vem godkänner vad, och varför det inte bara är byråkrati</h2>
<p>Ett attestflöde delas ofta i två steg: sakattest (stämmer inköpet — har vi fått varan, är priset rätt?) och beslutsattest (får kostnaden belasta det här projektet?). Det handlar inte om pappersflytt. Bokföringslagen (1999:1078) kräver att varje affärshändelse stöds av en verifikation (5 kap.) och att det finns en verifieringskedja — en spårbar väg från faktura till bokföring. Ett attestflöde är den interna kontrollen som gör att inget bokförs på projektet utan att någon faktiskt sett och godkänt det. Digitalt går det på minuter; i pärm blir det den bunt som ligger kvar tills momsdeklarationen närmar sig.</p>

<h2>Från leverantörsfaktura till kundfaktura — så kommer alla kostnader med</h2>
<p>Hela poängen är att inget inköp ska falla mellan stolarna på vägen till kundfakturan. Rutinen ser ut så här:</p>
<ol>
<li>Inköpet märks med projekt redan vid beställningen.</li>
<li>Fakturan konteras per projekt och attesteras.</li>
<li>Kostnaden vidarefaktureras med påslag (löpande räkning) eller ingår i fastpriskalkylen.</li>
<li>Utfallet stäms av mot budget.</li>
</ol>
<p>Ett exempel: du köper material för 40 000 kr netto till ett löpanderäkningsjobb. Med 15 % påslag blir det du fakturerar kunden 46 000 kr netto, och mellanskillnaden på 6 000 kr täcker hantering och risk. Missar du bara ett enda materialinköp på 8 000 kr i konteringen faktureras det aldrig vidare — du tappar både inköpet och påslaget, alltså 9 200 kr, rakt av. Det är därför projektmärkningen måste ske vid beställningen och inte när fakturan väl ligger i högen.</p>

<h2>Digital hantering och arkivering (2026-reglerna)</h2>
<p>Leverantörsfakturor är räkenskapsinformation och verifikationer. Enligt 7 kap. 2 § bokföringslagen ska de arkiveras till utgången av det sjunde året efter det kalenderår då räkenskapsåret avslutades. Nytt sedan 1 juli 2024 (SFS 2024:342) är att kravet på att spara pappersoriginalet i ursprungligt skick har tagits bort. Du får skanna eller fotografera en pappersfaktura och kasta originalet direkt — förutsatt att den digitala räkenskapsinformationen bevaras hela arkiveringstiden på sju år. Det är precis det som gör en app-baserad rutin ute på bygget möjlig: montören fotar kvittot, det konteras på projektet, papperet slängs.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp fångar du leverantörsfakturan digitalt, konterar den per projekt och skickar den vidare i attestflödet. Eftersom varje inköp ligger på sitt projekt syns den samlade självkostnaden löpande, och kostnaderna finns kvar att vidarefakturera när det är dags att skicka kundfakturan. Systemet ersätter inte din bokföring eller ditt ansvar för momsredovisningen — men det gör att inga inköp ramlar bort mellan bygget och kontoret, och att du ser täckningsgraden medan projektet pågår.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag spara pappersfakturan i original?</h3>
<p>Nej. Sedan 1 juli 2024 (SFS 2024:342) får du digitalisera en pappersfaktura och slänga originalet direkt, så länge den digitala kopian bevaras hela arkiveringstiden på sju år enligt 7 kap. 2 § bokföringslagen.</p>
<h3>När gäller omvänd byggmoms på en leverantörsfaktura?</h3>
<p>När tjänsten är en byggtjänst och du som köpare själv säljer byggtjänster mer än tillfälligt. Då fakturerar leverantören utan moms, anger ditt momsnummer och texten omvänd betalningsskyldighet, och du redovisar momsen själv i deklarationen (16 kap. mervärdesskattelagen).</p>
<h3>Hur vet jag att alla kostnader kommit med på kundfakturan?</h3>
<p>Genom projektredovisning. När varje inköp är konterat på projektet kan du stämma av projektets samlade självkostnad mot det du fakturerat. Ligger något okonterat är det inte vidarefakturerat — och det är där pengarna läcker.</p>
<h3>Hur länge måste jag spara leverantörsfakturorna?</h3>
<p>Till utgången av det sjunde året efter det kalenderår då räkenskapsåret avslutades. De är verifikationer som ska ingå i en spårbar verifieringskedja enligt bokföringslagen.</p>

<h2>Kom igång</h2>
<p>Sätt rätt pris på det du vidarefakturerar med <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylatorn →</a>, och vill du se hur kontering och attest per projekt fungerar i praktiken kan du <a href="/sv/contact">boka en demo</a> så visar vi flödet på ett riktigt projekt.</p>

<p>Relaterat: <a href="/sv/blog/attestering">Attestering av fakturor i byggföretag</a> och <a href="/sv/blog/likviditet-byggforetag">Likviditet i byggföretag</a>.</p>
`;

const A_LEVERANTORSFAKTURA_BYGG_PROJEKT: BlogPost = {
  _id: "code-"+"leverantorsfaktura-bygg-projekt",
  title: "Så kopplar du leverantörsfakturor och materialinköp till rätt byggprojekt", slug: "leverantorsfaktura-bygg-projekt", locale: "sv",
  excerpt: "Okonterade leverantörsfakturor är där byggföretag läcker pengar — så bygger du en rutin där varje inköp märks med projekt, attesteras och kommer med på kundens faktura.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_LEVERANTORSFAKTURA_BYGG_PROJEKT_HTML,
  seoTitle: "Leverantörsfaktura per projekt | ByggExp", seoDescription: "Kontera leverantörsfakturor och materialinköp per byggprojekt så alla kostnader kommer med på kundfakturan. Rutin, omvänd byggmoms och attest förklarat.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:54:00.000Z", createdAt: "2026-08-18T19:54:00.000Z", updatedAt: "2026-08-18T19:54:00.000Z",
};

const A_BERAKNA_MATERIALATGANG_TAK_HTML = `
<p>Fel materialåtgång på ett tak kostar alltid pengar. Underskattar du åtgången står laget stilla mitt i läggningen och väntar på en efterbeställning som kanske inte ens finns i samma bränning eller kulör. Överskattar du grovt binder du kapital i pannor som blir liggande. Den vanligaste tabben är enkel: man räknar på husets grundyta i stället för den faktiska takytan. Takyta är inte samma sak som byggnadens fotavtryck — den växer med lutningen. Ska du <strong>beräkna materialåtgång tak</strong> på ett sätt som håller ända fram till sista pannraden behöver du fyra steg: yta, åtgång per kvm, spillpåslag och kringmaterial.</p>

<p>Vill du hoppa över trigonometrin? Slå in mått och lutning i vår gratis <a href="/sv/verktyg/tak-kalkylator">tak-kalkylator</a> så räknar den takyta, antal pannor och spill åt dig. Ska du samtidigt dimensionera bärverket har vi även en <a href="/sv/verktyg/takstolar-kalkylator">takstolskalkylator</a>.</p>

<h2>Steg 1: Räkna ut takytan utifrån taklutning</h2>
<p>Takytan är den horisontella projektionen (grundytan) multiplicerad med en lutningsfaktor. Faktorn är 1/cos(lutningsvinkeln) och den beskriver hur mycket taket "reser sig" jämfört med marken. Ett brant tak har betydligt mer yta att täcka än ett flackt, trots samma grundyta.</p>
<ul>
<li>14° lutning: faktor 1,03</li>
<li>22° lutning: faktor 1,08</li>
<li>27° (ca 1:2): faktor 1,12</li>
<li>30° lutning: faktor 1,155</li>
<li>35° lutning: faktor 1,22</li>
<li>38° lutning: faktor 1,27</li>
<li>45° lutning: faktor 1,414</li>
</ul>
<p>Exempel: ett sadeltak med grundyta 120 m² och 35° lutning ger 120 × 1,22 = 146 m² takyta — nästan 26 m² mer än vad ritningens grundyta antyder. I fält är den snabbaste metoden ändå att mäta direkt: <strong>takfallets längd (takfot till nock, längs lutningen) × takbredd × antal takfall</strong>. Då slipper du faktortabellen helt. Glöm inte takutsprånget vid takfot — normalt 0,3–0,5 m per sida — och räkna aldrig på planritningen.</p>

<h2>Steg 2: Materialåtgång per kvm för takpannor</h2>
<p>När ytan är klar översätter du den till antal pannor. Riktvärden per kvadratmeter:</p>
<ul>
<li>Betongpannor (falsade, t.ex. Palema, Carisma, Zanda): ca 9–10 st/m², ofta angivet runt 9,3 st/m².</li>
<li>Tvåkupigt lertegel: ca 14–15 st/m².</li>
<li>Falsat/enkupigt tegel: ca 12–14 st/m².</li>
<li>Nockpannor: ca 2,5–3 st per löpmeter nock.</li>
</ul>
<p>Det exakta antalet styrs av läktavståndet (bärläkt c/c ca 340–375 mm) och pannans överlapp, så använd alltid den valda modellens läggningsanvisning som facit — riktvärdena ovan är för överslag, inte för beställning. Läktavståndet måste dessutom jämkas så att pannraderna går jämnt ut mot både takfot och nock. En viktig gräns: betong- och tegelpannor kräver normalt minst 14° lutning, ofta 22° utan extra tätande åtgärder. Under ca 14° ska du välja plåt, tätskikt eller papp — fel material på för låg lutning ger läckage.</p>

<h2>Steg 3: Materialåtgång för plåttak</h2>
<p>Plåt beställs i kapade längder efter takfallslängden, inte i kvadratmeter från hyllan. Skilj på profilplåt (trapets), pannplåt (pannmönstrad) och bandtäckning (falsad slätplåt). Den avgörande detaljen är att du räknar på <strong>täckbredden</strong> — den effektiva bredden efter överlapp — och inte totalbredden. En plåt på 1100 mm kan ha ca 1050 mm täckbredd, och räknar du på totalmåttet får du för få plåtar. Vid längdskarvar överlappar plåtarna ca 150–200 mm, vilket äter av den effektiva längden. Tänk också på att plåt med många skärningar mot valmar, kupor och skorstenar ger mer spill än pannor, eftersom en avkapad plåtlängd sällan går att återanvända.</p>

<h2>Steg 4: Spill och skärningar — så mycket ska du lägga på</h2>
<p>Ingen läggning går utan kap. Lägg på spill efter takets komplexitet:</p>
<ul>
<li>Enkelt rektangulärt sadeltak: ca 5%.</li>
<li>Tak med kupor, valmar, takfönster eller skorsten: ca 10–15%.</li>
<li>Komplext valmat tak eller plåt med många skärningar: upp till 15–20%.</li>
</ul>
<p>Runda alltid upp till hel panna respektive hel plåt, och hellre en pall för mycket än ett produktionsstopp. En efterbeställning kostar inte bara material utan även frakt, väntetid och risken att kulör eller bränning skiljer sig från första leveransen. På vårt exempeltak (146 m² takyta, betongpanna) blir det ca 146 × 9,3 = 1 358 pannor, plus 10% spill för en skorsten och ett takfönster = ca 1 494 pannor att beställa.</p>

<h2>Glöm inte kringmaterialet</h2>
<p>Pannorna eller plåten är bara en del av åtgången. Räkna in hela kedjan:</p>
<ul>
<li>Bärläkt och ströläkt — bärläkt-åtgången är ungefär 1/läktavstånd per m² (t.ex. 0,37 m gauge ger ca 2,7 lpm/m²), plus ströläkt i takfallets riktning.</li>
<li>Underlagsduk med ca 10% överlapp.</li>
<li>Nockpannor eller nockband, fotplåt, vindskivor, fågelband.</li>
<li>Skruv eller klammer enligt anvisning.</li>
<li>Lagstadgad taksäkerhet: snörasskydd, glidskydd/takstege, fästöglor och nock-/takbrygga är krav enligt Boverkets regler och arbetsmiljöreglerna — inte tillval. Bekräfta gällande regelverk 2026 på boverket.se, eftersom Boverkets nya bygg- och konstruktionsregler ersätter BBR med en övergångsperiod.</li>
</ul>

<h2>Kostnad, ROT och kalkyl</h2>
<p>När materialåtgången är klar blir steget till offert kort: material + arbete, moms och eventuellt ROT-avdrag. Vid takomläggning på en befintlig byggnad äldre än fem år ger arbetskostnaden ROT — senast bekräftade nivå är 30% av arbetskostnaden, max 50 000 kr/person/år, där ROT och RUT räknas ihop till högst 75 000 kr per person och år (varav ROT högst 50 000 kr). Materialkostnaden ger aldrig ROT. Kontrollera årets procentsats och takbelopp på skatteverket.se innan du lämnar pris. På tjänsten gäller 25% byggmoms, och i B2B-led mellan byggföretag tillämpas ofta omvänd byggmoms — du fakturerar då utan moms, märker fakturan med att omvänd skattskyldighet för byggtjänster gäller och anger köparens momsnummer. Spara underlaget i sju år.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp matar du in takmått och lutning i <a href="/sv/verktyg/tak-kalkylator">tak-kalkylatorn</a> och får takyta, antal pannor eller plåtlängder och ett spillpåslag i ett svep — samma fyrastegsmetod som ovan, men utan handräkning. Behöver du dimensionera bärverket kompletterar du med <a href="/sv/verktyg/takstolar-kalkylator">takstolskalkylatorn</a>. Därifrån för du över materiallistan till en <a href="/sv/verktyg/offert-mall">offertmall</a> där du lägger på arbete, moms och ROT. Verktygen räknar åt dig, men de ersätter inte tillverkarens läggningsanvisning — stäm alltid av exakt antal per kvm och läktavstånd mot databladet för den panna eller plåt du valt.</p>

<h2>Vanliga frågor</h2>
<h3>Varför blir takytan större än husets grundyta?</h3>
<p>För att taket lutar. Takytan är grundytan gånger en lutningsfaktor (1/cos av vinkeln). Vid 35° är faktorn 1,22, så ett tak med 120 m² grundyta har 146 m² faktisk yta att täcka. Räknar du på grundytan får du för lite material.</p>
<h3>Hur många takpannor går det på en kvadratmeter?</h3>
<p>Riktvärden: betongpanna ca 9–10 st/m², tvåkupigt tegel ca 14–15 st/m² och falsat tegel ca 12–14 st/m². Det exakta antalet beror på läktavstånd och överlapp, så följ alltid den valda modellens läggningsanvisning för beställning.</p>
<h3>Hur mycket spill ska jag lägga på?</h3>
<p>Ungefär 5% på ett enkelt rektangulärt sadeltak, 10–15% med kupor, valmar eller takfönster och upp till 20% på komplexa valmade tak eller plåt med många skärningar. Runda alltid upp till hela pannor eller plåtar.</p>
<h3>Räknar man plåttak på total- eller täckbredd?</h3>
<p>På täckbredden, alltså den effektiva bredden efter överlapp. En 1100 mm plåt kan ha ca 1050 mm täckbredd. Räknar du på totalbredden får du för få plåtar, och längdskarvar överlappar dessutom ca 150–200 mm.</p>

<h2>Kom igång</h2>
<p>Testa <a href="/sv/verktyg/tak-kalkylator">tak-kalkylatorn</a> och räkna kvm, antal pannor och spill på nästa jobb — och komplettera med <a href="/sv/verktyg/takstolar-kalkylator">takstolskalkylatorn</a> när bärverket ska dimensioneras. Vill du se hur materiallistan blir en färdig offert? <a href="/sv/contact">Boka en demo</a> så visar vi flödet från kalkyl till kund.</p>

<p>Relaterat: <a href="/sv/blog/rakna-material-till-bygget">Räkna material till bygget</a> och <a href="/sv/blog/skriva-offert">Skriva offert</a>.</p>
`;

const A_BERAKNA_MATERIALATGANG_TAK: BlogPost = {
  _id: "code-"+"berakna-materialatgang-tak",
  title: "Beräkna materialåtgång tak: takpannor och plåt per kvm", slug: "berakna-materialatgang-tak", locale: "sv",
  excerpt: "En konkret fyrastegsmetod för att beräkna materialåtgång på tak — från takyta och lutningsfaktor till antal pannor, plåtlängder, spill och kringmaterial.", tag: "Kalkyl",
  coverImageUrl: "/landing/verktyg/tak-preview.webp", contentHtml: A_BERAKNA_MATERIALATGANG_TAK_HTML,
  seoTitle: "Beräkna materialåtgång tak | ByggExp", seoDescription: "Räkna ut takyta, takpannor och plåt per kvm utifrån taklutning, spill och skärningar. Steg-för-steg-metod för korrekt materialåtgång på taket.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/tak-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T20:00:00.000Z", createdAt: "2026-08-18T20:00:00.000Z", updatedAt: "2026-08-18T20:00:00.000Z",
};

const A_FONSTER_U_VARDE_2026_HTML = `
<p>Ett fönsterbyte står och faller med en enda siffra – u-värdet. Problemet är att de flesta offerter du får in jämför fel siffra, och att kunden ofta tror att det finns ett bestämt "BBR-krav för fönster" som avgör saken. Båda missförstånden kostar pengar och trovärdighet. Här går vi igenom Uw-mot-Ug-fällan, vad Boverket faktiskt kräver 2026 och hur du räknar hem ett fönsterbyte utan att lova orimlig återbetalningstid.</p>

<p>Vill du snabbt uppskatta värmeförlust och besparing på ett projekt kan du börja i vår <a href="/sv/verktyg/isolering-kalkylator">gratis isolerings- och u-värdeskalkylator -&gt;</a> och sedan lägga siffrorna i en offert.</p>

<h2>Uw vs Ug: vad siffran faktiskt mäter</h2>
<p>Det finns två helt olika u-värden på ett fönster, och de mäter inte samma sak:</p>
<ul>
<li><strong>Ug</strong> (g = glas) mäter <em>bara</em> mitten av glaset – centre-of-glass. Det är den snällaste siffran.</li>
<li><strong>Uw</strong> (w = window) mäter <em>hela fönstret</em>: glas + karm/båge + distanslist i glaskanten, enligt EN 14351-1 / EN ISO 10077.</li>
</ul>
<p>Uw är alltid lika med eller högre (sämre) än Ug. Anledningen är att karm, båge och glaskant isolerar sämre än själva glaspaketet – de blir köldbryggor. Ett fönster kan ha ett lysande Ug och ändå ett medelmåttigt Uw om karmen är klen. Regeln är enkel: <strong>jämför bara Uw mot Uw</strong>. Allt annat är att jämföra äpplen med päron.</p>

<h2>Fällan i offerten: när säljaren visar Ug</h2>
<p>En annons som skriker "U-värde 0,5" avser nästan alltid Ug – glaset, inte fönstret. Samma fönster kan mycket väl landa på ett Uw runt 1,0 W/m²K när karm och kant räknas in. Det är ingen bluff i teknisk mening, men det är den bättre siffran som marknadsförs medan det är den sämre siffran som styr värmeförlusten och energiberäkningen.</p>
<p>Två saker att alltid begära av leverantören innan du prissätter:</p>
<ul>
<li><strong>Uw enligt EN 14351-1</strong> – uttryckligen hela fönstret, inte Ug.</li>
<li><strong>Karmyttermått</strong> för den aktuella storleken. Uw varierar med fönsterstorlek: ett litet fönster har proportionellt mer karm och därmed ofta sämre Uw än ett stort med samma konstruktion.</li>
</ul>

<h2>Vad kräver BBR/Boverket egentligen 2026?</h2>
<p>Här sitter myten djupt: det finns <strong>inget krav på ett visst Uw per fönster</strong> i de svenska byggreglerna. Den nationella regleringen ligger på hela byggnaden:</p>
<ul>
<li><strong>Primärenergital (EP_pet)</strong> – riktvärdet är cirka 90 kWh/m²·år för bostäder och 70 kWh/m²·år för lokaler, sedan justerat per kommun med en geografisk justeringsfaktor. Justerade småhusvärden hamnar i praktiken ofta runt 95–130 beroende på klimatzon.</li>
<li><strong>Genomsnittligt Um</strong> för hela klimatskalet får inte överstiga 0,40 W/m²K för en ny bostad.</li>
</ul>
<p>Fönstren regleras alltså bara indirekt, via de här två talen. Um är det närmaste man kommer en fönstergräns – men det är ett medelvärde över hela skalet, inte en siffra per fönster. Vid ändring/renovering handlar det om vad som är skäligt att energieffektivisera, inte om ett fast Uw-tak. Boverket är dessutom på väg in i nya, funktionsbaserade byggregler, men energikravet uttrycks fortfarande som primärenergital och genomsnittligt Um – ingen föreskriven per-fönster-siffra tillkommer. Så när en kund frågar "klarar fönstret BBR?" är det korrekta svaret att räkna på hela huset, inte att peka på ett enskilt Uw.</p>

<h2>U-värden i praktiken: gammalt vs nytt</h2>
<p>Typiska Uw-intervall för hela fönstret:</p>
<ul>
<li><strong>Enkelglas:</strong> ca 4,5–5,8 W/m²K</li>
<li><strong>Äldre kopplat 2-glas:</strong> ca 2,7–3,0</li>
<li><strong>Äldre 3-glas:</strong> ca 1,8–2,0</li>
<li><strong>Moderna energifönster (3-glas):</strong> ca 0,7–1,0</li>
</ul>
<p>Att byta ett 2,8-fönster mot ett på ca 0,9 tredubblar i grova drag fönstrets isolerförmåga. Den gamla frivilliga energiklassningen satte Uw ≤ 1,2 W/m²K som gräns för "energieffektivt" – men dagens bättre fönster når 0,7–0,9. Se därför 1,2 som en golvnivå för dugligt, inte som ett mål för en ny investering.</p>
<p>Glöm inte andra halvan av ekvationen: <strong>g-värdet (solvärmefaktorn)</strong>. Ett mycket lågt g släpper in mindre gratis solvärme på vintern och kan höja uppvärmningsbehovet, medan ett högt g ökar risken för övertemperatur på sommaren. Paybackkalkyl enbart på Uw är ofullständig.</p>

<h2>Räkna hem fönsterbytet: en enkel modell</h2>
<p>Värmeförlusten genom ett fönster kan uppskattas som:</p>
<p><strong>kWh/år ≈ U × area × gradtimmar / 1000</strong></p>
<p>Gradtimmar (Kh/år) beror på ort och innetemperatur; ett riktvärde för svenskt klimat ligger runt 100 000 Kh/år. Exempel för 12 m² fönster:</p>
<ul>
<li>Före (Uw 2,8): 2,8 × 12 × 100 000 / 1000 ≈ <strong>3 360 kWh/år</strong></li>
<li>Efter (Uw 0,9): 0,9 × 12 × 100 000 / 1000 ≈ <strong>1 080 kWh/år</strong></li>
<li>Besparing: ca <strong>2 280 kWh/år</strong> → vid elpris 2 kr/kWh ungefär <strong>4 560 kr/år</strong></li>
</ul>
<p>Var ärlig i kalkylen: fönster står typiskt för 15–20 % av husets totala värmeförlust, och gradtimmarna varierar med ort. Sälj inte in en orimlig återbetalningstid – en trovärdig siffra bygger förtroende och skyddar dig mot missnöje i efterhand.</p>

<h2>ROT-avdrag 2026 på fönsterbyte</h2>
<p>För 2026 gäller ROT-avdrag på <strong>30 % av arbetskostnaden</strong>, max 50 000 kr/person/år, inom ett gemensamt ROT+RUT-tak på 75 000 kr/person/år. Viktigt: avdraget gäller <strong>endast montage/arbete</strong> – fönstren och glaset är inte avdragsgilla. Den tillfälliga höjningen till 50 % gällde bara betalningar 12 maj–31 december 2025 och upphörde vid årsskiftet. Att offerera 50 % på ett fönsterjobb 2026 är alltså fel.</p>
<p>Dela därför upp fakturan korrekt: specificera arbetskostnad separat från material, så att ROT beräknas på rätt underlag och kunden inte överskattar avdraget. Ett tydligt underlag gör också att Skatteverkets begäran om ROT går smidigare.</p>

<h2>Checklista innan du skriver på</h2>
<ul>
<li>Begär <strong>Uw enligt EN 14351-1</strong> för den faktiska storleken – inte Ug.</li>
<li>Kontrollera <strong>karmyttermått</strong>, eftersom Uw varierar med format.</li>
<li>Fråga efter <strong>g-värde (solvärmefaktor)</strong> – väg vinter mot sommar.</li>
<li>Klargör <strong>montage/drevning</strong> och att köldbryggan vid infästning hanteras.</li>
<li>Kontrollera <strong>emissivitet och kondensrisk</strong> på glaset.</li>
<li>Läs <strong>garantivillkoren</strong> på både produkt och montage.</li>
<li>Dela <strong>arbete och material</strong> rätt på fakturan för ROT 2026.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig ta siffrorna hela vägen från beräkning till kund. Med <a href="/sv/verktyg/isolering-kalkylator">u-värdeskalkylatorn</a> uppskattar du värmeförlust och besparing per fönsterparti, och i <a href="/sv/verktyg/offert-mall">offertmallen</a> lägger du in Uw, storlek och en korrekt uppdelning av arbete och material så att ROT-avdraget räknas på rätt underlag. Vi lovar ingen exakt payback – klimat, elpris och husets övriga skal påverkar – men du får ett tydligt, spårbart underlag som håller vid en kundfråga.</p>

<h2>Vanliga frågor</h2>
<h3>Finns det ett BBR-krav på u-värde för fönster 2026?</h3>
<p>Nej. Byggreglerna ställer inget krav på ett visst Uw per fönster. Kravet ligger på hela byggnadens primärenergital (riktvärde ca 90 kWh/m²·år för bostäder, geografiskt justerat) och på ett genomsnittligt Um ≤ 0,40 W/m²K för klimatskalet. Fönstren regleras bara indirekt via de talen.</p>
<h3>Vad är skillnaden mellan Uw och Ug?</h3>
<p>Ug mäter bara mitten av glaset, medan Uw mäter hela fönstret – glas, karm/båge och glaskant enligt EN 14351-1. Uw är alltid lika med eller sämre än Ug. Det är Uw som styr värmeförlust och energiberäkning, så jämför alltid Uw mot Uw.</p>
<h3>Hur mycket är ROT-avdraget på fönsterbyte 2026?</h3>
<p>30 % av arbetskostnaden, max 50 000 kr per person och år, inom ett gemensamt ROT+RUT-tak på 75 000 kr. Bara montage/arbete är avdragsgillt – inte fönstren. Den tillfälliga 50 %-nivån gällde enbart 2025 och gäller inte längre.</p>
<h3>Vilket u-värde bör jag sikta på vid nyinvestering?</h3>
<p>Den gamla energiklassningens gräns på Uw ≤ 1,2 är idag ett golv för dugligt. Moderna energifönster når 0,7–1,0 W/m²K, så vid en ny investering är det rimligt att sikta lägre än 1,2. Väg samtidigt in g-värdet så att du inte tappar för mycket gratis solvärme på vintern.</p>

<h2>Kom igång</h2>
<p>Räkna på ditt nästa fönsterbyte i <a href="/sv/verktyg/isolering-kalkylator">u-värdeskalkylatorn</a> och skapa ett tydligt underlag i <a href="/sv/verktyg/offert-mall">offertmallen</a>. Vill du se hur det fungerar i praktiken? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/berakna-u-varde-isolering">Beräkna u-värde för isolering</a></p>
`;

const A_FONSTER_U_VARDE_2026: BlogPost = {
  _id: "code-"+"fonster-u-varde-2026",
  title: "Fönster u-värde 2026: Uw eller Ug – siffran som avgör om bytet lönar sig", slug: "fonster-u-varde-2026", locale: "sv",
  excerpt: "De flesta fönsteroffdter jämför fel siffra – så skiljer du Uw från Ug, tolkar BBR-kravet 2026 och räknar hem bytet på riktigt.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/isolering-preview.webp", contentHtml: A_FONSTER_U_VARDE_2026_HTML,
  seoTitle: "Fönster u-värde 2026: Uw vs Ug | ByggExp", seoDescription: "Uw eller Ug? Så läser du fönsteroffertens u-värde rätt 2026, vad BBR faktiskt kräver och hur du räknar hem fönsterbytet med ROT.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/isolering-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T20:03:00.000Z", createdAt: "2026-08-18T20:03:00.000Z", updatedAt: "2026-08-18T20:03:00.000Z",
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

const A_HAVNING_AV_ENTREPRENAD_HTML = `
<p>Beställaren betalar inte. Fakturorna växer, likviditeten tryggnar och du står inför frestelsen att bara lägga ner verktygen och lämna bygget. Men hävning av entreprenad är ett av de skarpaste vapnen du har – och drar du i nödbromsen på fel grund blir din hävning i stället ett väsentligt avtalsbrott som du själv får betala för. Här går vi igenom när du som entreprenör faktiskt får häva vid utebliven betalning, vilka steg som måste komma först, och varför en obefogad hävning kan bli din dyraste faktura någonsin.</p>

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

const A_MILERSATTNING_2026_HTML = `
<p>Hantverkare kör ofta flera mil om dagen mellan byggen, materialleverantörer och kontoret – men många byggföretag tar inte ut den milersättning de har rätt till, eller betalar ut den på ett sätt som utlöser onödig skatt. Rätt hanterad är milersättningen skattefri för både företag och anställd. Fel hanterad blir den skattepliktig lön med arbetsgivaravgifter ovanpå. Här går vi igenom vad som gäller för 2026, inklusive reglerna för reseavdrag och beloppsgränsen (golvet).</p>

<p>För att räkna på ersättning, avstånd och underlag samlat kan du använda <a href="/sv/verktyg">våra gratis verktyg för byggföretag -&gt;</a> och slippa räkna för hand vid varje löneutbetalning.</p>

<h2>Skattefri milersättning 2026 – beloppen du ska hålla dig till</h2>
<p>Schablonbeloppen för skattefri bilersättning är oförändrade 2026 jämfört med de senaste åren – de höjdes senast 2023 från 18,50 kr/mil till dagens nivå. Betalar du ut inom schablonen redovisas ersättningen inte som lön, det utgår ingen moms och inga arbetsgivaravgifter.</p>
<ul>
<li><strong>Egen bil i tjänsten:</strong> 25 kr/mil (2,50 kr/km).</li>
<li><strong>Förmånsbil, diesel/bensin/laddhybrid:</strong> 12 kr/mil.</li>
<li><strong>Förmånsbil som drivs helt på el:</strong> 9,50 kr/mil.</li>
</ul>
<p>Skillnaden beror på att den som kör egen bil själv står för slitage och löpande kostnader, medan förmånsbilsföraren bara ersätts för drivmedlet – bilen betalas ju redan av arbetsgivaren.</p>

<h2>Tjänsteresa eller arbetsresa? Skillnaden som avgör vad du får ersättning för</h2>
<p>Det här är den vanligaste källan till fel i byggbranschen. Reglerna skiljer på två typer av resor:</p>
<ul>
<li><strong>Tjänsteresa:</strong> resor mellan olika arbetsplatser under arbetsdagen – till exempel från ett bygge till nästa. Här får den anställde skattefri milersättning.</li>
<li><strong>Arbetsresa:</strong> resan hemifrån till den första eller fasta arbetsplatsen och tillbaka hem. Det hanteras som reseavdrag i deklarationen, med ett golv (se nedan), inte som milersättning från arbetsgivaren.</li>
</ul>
<p>Typexempel: en snickare kör hemifrån direkt till bygge A på morgonen. Den resan är en arbetsresa. Mitt på dagen kör hen vidare till bygge B och senare till materialbutiken – de resorna är tjänsteresor med skattefri milersättning. Har företaget ingen fast arbetsplats och den anställde åker till växlande byggen kan även den första resan räknas som tjänsteresa, men bedömningen görs från fall till fall.</p>

<h2>Vad händer om företaget betalar mer än 25 kr/mil?</h2>
<p>Ni får betala mer internt – till exempel om ett kollektivavtal reglerar en högre ersättning – men allt över schablonbeloppet är skattepliktigt. Den överskjutande delen behandlas som lön: den anställde betalar inkomstskatt och företaget betalar arbetsgivaravgifter på den.</p>
<p>Räkneexempel: en anställd kör 200 mil i tjänsten på ett år och får 30 kr/mil, alltså 6 000 kr. Av det är 25 kr/mil (5 000 kr) skattefritt. De återstående 5 kr/mil, totalt 1 000 kr, är skattepliktig lön som ska tas upp och beläggas med arbetsgivaravgifter. Att betala mer är alltså inte olagligt – men det ökar kostnaden och kräver att lönesystemet hanterar delningen rätt.</p>

<h2>Körjournalen – ditt viktigaste bevis vid en granskning</h2>
<p>Det finns inget lagstadgat krav på körjournal, men den är det starkaste bevismedlet du har om Skatteverket ifrågasätter tjänstekörningen eller förmånsbilen. Vid bristande dokumentation är det vanligt att utbetald ersättning underkänns och beskattas i efterhand. En användbar körjournal bör innehålla:</p>
<ul>
<li>Datum för resan.</li>
<li>Mätarställning vid start och slut.</li>
<li>Antal kilometer/mil.</li>
<li>Resans syfte.</li>
<li>Start- och slutdestination.</li>
<li>Markering om resan var privat eller i tjänsten.</li>
</ul>
<p>En digital körjournal som loggar automatiskt sparar tid och gör underlaget svårare att ifrågasätta än handskrivna lappar. Poängen är att varje utbetald mil ska kunna kopplas till en dokumenterad resa.</p>

<h2>Förmånsbil och &quot;ringa omfattning&quot; – så undviker du att beskattas för privat körning</h2>
<p>Har en anställd tillgång till företagets bil uppstår bilförmån om bilen används privat i mer än ringa omfattning. Ringa omfattning är definierat som <strong>högst 10 tillfällen och högst 100 mil (1 000 km) privat körning per år</strong>. Överskrids någon av gränserna beskattas full bilförmån – det räcker alltså inte att hålla sig under milgränsen om antalet tillfällen blir för många.</p>
<p>Här är körjournalen avgörande: den är beviset för att den privata körningen håller sig inom gränserna och att resten är tjänstekörning. Utan journal blir det svårt att freda sig mot en förmånsbeskattning.</p>

<h2>Reseavdrag 2026 – beloppsgränsen (golvet) du måste komma över</h2>
<p>För pendlande byggarbetare finns en beloppsgräns att hålla koll på. Reseavdraget för resor till och från arbetet med egen bil är 25 kr/mil, men bara den del av kostnaderna som överstiger en beloppsgräns (ett golv) är avdragsgill. Golvet har sedan länge legat på 11 000 kr, och någon höjning för inkomstår 2026 är inte bekräftad – utgå därför från 11 000 kr tills Skatteverket meddelar annat. I praktiken innebär golvet att det främst är den som pendlar långt som kommer över gränsen och får avdrag.</p>
<p>Dessutom krävs för bilavdraget att avståndet mellan bostad och arbetsplats är <strong>minst 5 km</strong> och att bilen ger en tidsvinst på <strong>minst 2 timmar per dag</strong> jämfört med kollektivtrafik. Reseavdraget är den anställdes avdrag i deklarationen och ska inte blandas ihop med milersättning som företaget betalar för tjänstekörning.</p>

<h2>Egenföretagare och enskild firma: så drar du av bilkörningen</h2>
<p>Driver du enskild näringsverksamhet gäller egna regler. Kör du i verksamheten med en privatägd bil får du göra avdrag med 25 kr/mil – samma schablon som anställda. Är bilen däremot en tillgång i firman drar du i stället av de faktiska kostnaderna för bilen. Oavsett vilket krävs dokumentation, och en körjournal som skiljer närings- från privatkörning är även här det underlag som håller vid en granskning.</p>

<h2>Checklista: så gör du milersättningen rätt 2026</h2>
<ul>
<li>Betala ut inom schablonen: 25 kr/mil för egen bil, 12 respektive 9,50 kr/mil för förmånsbil.</li>
<li>För körjournal för varje resa – datum, mätarställning, mil, syfte och destination.</li>
<li>Separera tjänsteresor från arbetsresor och privat körning.</li>
<li>Spara underlag i minst 7 år.</li>
<li>Betalar ni över schablon: se till att lönesystemet hanterar den skattepliktiga delen.</li>
<li>Stäm av er interna policy mot eventuellt kollektivavtal.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp registrerar dina medarbetare tid och resor kopplat till rätt projekt, så att underlaget för milersättning byggs upp löpande i stället för att pusslas ihop i efterhand. Du får en samlad bild av vem som kört vad, på vilket bygge och när – vilket gör lönehanteringen enklare och underlaget lättare att stå för vid en granskning. ByggExp ersätter inte en juridisk bedömning av vad som är tjänste- respektive arbetsresa, men det ger dig ett spårbart underlag att grunda besluten på.</p>

<h2>Vanliga frågor</h2>
<h3>Höjs milersättningen 2026?</h3>
<p>Nej. Den skattefria milersättningen för egen bil ligger kvar på 25 kr/mil 2026, oförändrad sedan höjningen 2023. Reseavdraget har fortsatt sin beloppsgräns (golv) på 11 000 kr, där bara kostnader däröver är avdragsgilla.</p>
<h3>Måste jag ha körjournal?</h3>
<p>Det finns inget lagkrav på körjournal, men den är det starkaste beviset vid tjänstekörning och förmånsbil. Utan journal riskerar utbetald ersättning att underkännas och beskattas i efterhand, så i praktiken bör du alltid föra en.</p>
<h3>Får jag milersättning hemifrån till bygget?</h3>
<p>Resan hemifrån till den första eller fasta arbetsplatsen räknas normalt som en arbetsresa, som hanteras med reseavdrag och golv – inte som skattefri milersättning. Resor mellan olika arbetsplatser under dagen är däremot tjänsteresor med skattefri milersättning.</p>
<h3>Kan företaget betala 30 kr/mil?</h3>
<p>Ja, men bara 25 kr/mil är skattefritt. De 5 kr/mil som överstiger schablonen blir skattepliktig lön, med inkomstskatt för den anställde och arbetsgivaravgifter för företaget.</p>

<h2>Kom igång</h2>
<p>Börja med att samla resor och underlag på ett ställe med <a href="/sv/verktyg">våra gratis verktyg för byggföretag</a>. Vill du se hur tid, projekt och reseunderlag hänger ihop i praktiken kan du <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/franvaro-i-byggforetag">Frånvaro i byggföretag – så håller du koll på tid och ledighet</a>.</p>
`;

const A_MILERSATTNING_2026: BlogPost = {
  _id: "code-"+"milersattning-2026",
  title: "Milersättning 2026: skattefri bilersättning, körjournal och reseavdrag", slug: "milersattning-2026", locale: "sv",
  excerpt: "Betala ut milersättning rätt 2026 – skattefria schablonbelopp, körjournal, skillnaden mellan tjänste- och arbetsresa samt reseavdragets golv.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_MILERSATTNING_2026_HTML,
  seoTitle: "Milersättning 2026 – skattefritt & reseavdrag | ByggExp", seoDescription: "Så håller du milersättningen skattefri 2026: 25 kr/mil för egen bil, körjournal, tjänste- vs arbetsresa och reseavdragets beloppsgräns för byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:18:00.000Z", createdAt: "2026-08-19T05:18:00.000Z", updatedAt: "2026-08-19T05:18:00.000Z",
};

const A_YRKESBEVIS_BYGG_LARLING_HTML = `
<p>Kompetensbristen i byggbranschen löser sig inte med annonser – den löser sig genom att företag utbildar sina egna. Att handleda en lärling fram till yrkesbevis ger dig en fullärd yrkesarbetare med bekräftad kompetens i ID06 kompetensdatabas, och samtidigt en person som redan kan era rutiner, kunder och arbetsplatser. Men reglerna för vägen dit har ändrats, och många företag jobbar fortfarande efter en gammal modell. Här går vi igenom vad som faktiskt gäller 2026, styrt av Byggbranschens Yrkesnämnd (BYN) och Yrkesutbildningsavtalet YUA 2020.</p>

<p>Under lärlingstiden behöver du dokumentera arbetad tid och uppföljning löpande – ladda ner vår <a href="/sv/verktyg/tidrapport-mall">gratis tidrapport-mall</a> för att hålla ordning på lärlingens timmar och arbetsmoment från dag ett.</p>

<h2>Timmar eller månader? Så fungerar kravet idag</h2>
<p>Först en viktig korrigering av en vanlig missuppfattning: den gamla pappersbaserade utbildningsboken där lärlingen loggade utbildningstimmar är utbytt. I dagens YUA 2020-modell mäts lärlingstiden som <strong>kvalificeringstid i månader</strong>, inte i antal loggade utbildningstimmar. Godkännandet sker på uppnådda praktiska läranderesultat – alltså vad lärlingen faktiskt kan – och rapporteringen görs digitalt i BYN:s Mina sidor (e-boken).</p>
<p>Notera också att BYN har bytt webbadress. Den gamla adressen byn.se leder numera vidare via en permanent omdirigering (301) – rätt sida är <strong>byggbranschensyrkesnamnd.se</strong>. Verifiera alltid aktuella krav och regler direkt hos BYN innan ni registrerar en lärling, eftersom detaljerna kan skilja mellan yrken.</p>

<h2>Kvalificeringstid per yrke</h2>
<p>Kvalificeringstiden varierar beroende på yrke. Huvudspåren ser ut så här:</p>
<ul>
<li><strong>36 månader:</strong> Bergarbetare, Beläggningsarbetare, Betongarbetare, Golvläggare, Murare, Träarbetare samt Väg- &amp; anläggningsarbetare.</li>
<li><strong>30 månader:</strong> Håltagare, Plattsättare, Takmontör, Undertaksmontör, Ställningsbyggare och Stenmontör.</li>
<li><strong>24 månader:</strong> Maskinförare – Anläggningsmaskiner, Grundläggning och Kranar.</li>
</ul>
<p>Kvalificeringstiden kan kortas beroende på tidigare skolgång eller validerad kompetens. Har lärlingen redan gått gymnasiets bygg- och anläggningsprogram eller genomfört vuxenutbildning hos en BYN-godkänd anordnare, räknas det av. Ett par yrken behåller fortfarande timkrav som undantag – anläggningsdykare har till exempel totalt 5 800 timmars utbildning, varav 3 200 timmar grundutbildning och minst 800 loggade dyktimmar, plus godkänd läkarundersökning enligt <strong>AFS 2023:15</strong> (Arbetsmiljöverkets föreskrifter om medicinska kontroller, gällande sedan 1 januari 2025). Det visar att enstaka specialyrken avviker även om huvudmodellen är månadsbaserad.</p>

<h2>Grundutbildning och distansutbildning</h2>
<p>Innan lärlingen går över i kvalificeringstid ska grundutbildningen – både teori och praktik – vara klar. Som företagslärling måste den delen vara avklarad inom <strong>max 12 månader</strong> (6 månader för maskinförare). Det är företaget som beställer och betalar den yrkesteoretiska distansutbildningen.</p>
<p>För en träarbetare kombineras den yrkesteoretiska distansutbildningen med en kvalificeringstid på 36 månader hos ett företag med kollektivavtal innan yrkesbeviset utfärdas. Kontrollera det exakta antalet teoritimmar och aktuell kursanordnare direkt hos BYN. Planera in distansstudierna tidigt – ligger teorin efter blir hela vägen till yrkesbevis försenad.</p>

<h2>Krav på företaget</h2>
<p>För att ni överhuvudtaget ska få utbilda lärlingar mot byggbranschens yrkesbevis krävs följande:</p>
<ul>
<li><strong>Kollektivavtal</strong> för bygg/anläggning är ett absolut krav – utan det kan företaget inte registrera lärlingar hos BYN.</li>
<li>Lärlingen är normalt <strong>minst 18 år</strong>. Dispens kan sökas hos BYN.</li>
<li>Ett <strong>skriftligt anställningsavtal</strong> (provanställning eller tillsvidare) måste finnas.</li>
<li>Registrering sker i <strong>Mina sidor</strong> med företagets organisationsnummer.</li>
</ul>
<p>Vid registreringen anger ni handledare, bifogar anställningsavtalet och dokumenterar lärlingens tidigare kvalifikationer med betyg, intyg eller valideringsintyg. Handledaren bekräftar handledarinstruktionerna i systemet.</p>

<h2>Handledarens roll</h2>
<p>Handledaren är den som gör att lärlingssystemet fungerar i praktiken. Kraven är tydliga:</p>
<ul>
<li>Handledaren måste ha <strong>yrkesbevis i samma yrke</strong> som lärlingen, eller motsvarande dokumenterad kompetens.</li>
<li>En handledare får ha <strong>högst tre lärlingar</strong> totalt. För ställningsbyggare gäller särskild regel: 1 lärling under grundutbildning och 3 under kvalificeringstid.</li>
<li>Handledaren godkänner och bekräftar läranderesultat och rapporter i e-boken (Mina sidor).</li>
</ul>
<p>Handledarutbildning rekommenderas starkt – det gör att bedömningen av läranderesultaten blir korrekt och att godkännandena i systemet inte fastnar. En handledare som förstår kraven undviker att lärlingen når slutet av kvalificeringstiden med luckor som borde ha åtgärdats i tid.</p>

<h2>Steg för steg – från anställning till yrkesbevis</h2>
<ol>
<li>Kontrollera att företaget har kollektivavtal och teckna skriftligt anställningsavtal med lärlingen.</li>
<li>Registrera lärlingen i Mina sidor med org.nr och tilldela en behörig handledare.</li>
<li>Dokumentera tidigare kvalifikationer så att eventuell avkortning av kvalificeringstiden räknas av.</li>
<li>Beställ och betala den yrkesteoretiska distansutbildningen – klar inom 12 månader (maskinförare 6).</li>
<li>Följ upp arbetsmoment och godkänn läranderesultat löpande i e-boken under kvalificeringstiden.</li>
<li>När kvalificeringstiden är genomförd och godkänd utfärdas yrkesbeviset digitalt via Mina sidor, registreras i ID06 kompetensdatabas och lärlingen får ett fysiskt plastkort plus certifieringsdokument.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp utfärdar inte yrkesbevis – det gör bara BYN. Men den löpande dokumentationen som handledningen kräver kan du sköta i ByggExp. Lägg upp lärlingens arbetade tid per projekt och arbetsmoment, så har du underlag när handledaren ska bekräfta läranderesultat i Mina sidor och överblick över hur kvalificeringstiden fortskrider. Samma tidrapportering ger dig dessutom korrekt underlag för lön och fakturering. Kort sagt: BYN äger vägen till yrkesbeviset, ByggExp håller ordning på timmarna och uppföljningen längs vägen.</p>

<h2>Vanliga frågor</h2>
<h3>Behöver lärlingen fortfarande fylla i en lärlingsbok med utbildningstimmar?</h3>
<p>Nej. Den gamla pappersbaserade utbildningsboken med timloggar är utbytt. I YUA 2020-modellen mäts tiden som kvalificeringstid i månader och godkännandet sker på uppnådda praktiska läranderesultat, som dokumenteras digitalt i BYN:s Mina sidor.</p>
<h3>Kan vårt företag utbilda lärlingar utan kollektivavtal?</h3>
<p>Nej. Kollektivavtal för bygg/anläggning är ett krav för att företaget ska få registrera och utbilda lärlingar mot byggbranschens yrkesbevis. Utan avtal kan ni inte gå vidare med registrering hos BYN.</p>
<h3>Hur lång är kvalificeringstiden?</h3>
<p>Den beror på yrket: 36 månader för bland annat träarbetare, betong, murare och golv, 30 månader för exempelvis platt-, sten-, tak- och undertaksmontör samt ställningsbyggare, och 24 månader för maskinförare. Tidigare skolgång eller validerad kompetens kan korta tiden.</p>
<h3>Hur många lärlingar får en handledare ha?</h3>
<p>Maximalt tre lärlingar totalt. För ställningsbyggare gäller en särskild regel med 1 lärling under grundutbildning och 3 under kvalificeringstid. Handledaren måste ha yrkesbevis i samma yrke som lärlingen.</p>

<h2>Kom igång</h2>
<p>Börja med att sätta rutinen för tidsdokumentation – ladda ner vår <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> och koppla lärlingens timmar till rätt projekt och arbetsmoment. Vill du se hur ByggExp håller ihop tidrapportering, uppföljning och fakturering i ett flöde? <a href="/sv/contact">Boka en demo</a> så visar vi upplägget för ditt företag.</p>

<p>Relaterat: <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag</a> och <a href="/sv/blog/tidrapportering">Tidrapportering för byggföretag</a>.</p>
`;

const A_YRKESBEVIS_BYGG_LARLING: BlogPost = {
  _id: "code-"+"yrkesbevis-bygg-larling",
  title: "Yrkesbevis i bygg: så handleder du en lärling 2026", slug: "yrkesbevis-bygg-larling", locale: "sv",
  excerpt: "Vad som faktiskt gäller 2026 när du utbildar en lärling till yrkesbevis – kvalificeringstid i månader, krav på företag och handledare, och vägen via BYN:s Mina sidor.", tag: "Kompetens",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_YRKESBEVIS_BYGG_LARLING_HTML,
  seoTitle: "Yrkesbevis och lärling i bygg 2026 | ByggExp", seoDescription: "Så handleder du en lärling till yrkesbevis 2026 enligt BYN och YUA 2020: kvalificeringstid i månader, krav på företag och handledare, steg för steg.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:21:00.000Z", createdAt: "2026-08-19T05:21:00.000Z", updatedAt: "2026-08-19T05:21:00.000Z",
};

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

const A_BYGGFAKTURA_CHECKLISTA_ROT_HTML = `
<p>Fel på ROT-fakturan kostar dig pengar direkt. Om arbetskostnaden inte är särskild, personnumret saknas eller fastighetsbeteckningen är fel, stoppas utbetalningen från Skatteverket – och du sitter med en kund som redan bara betalat 70 procent. Den här artikeln ger dig en komplett checklista för vad en faktura ska innehålla för att ge ROT enligt 2026 års regler, så att du får rätt betalt utan att jaga någon.</p>

<p>Vill du slippa hålla ordning på alla obligatoriska fält själv? Skapa korrekta underlag direkt i <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall &rarr;</a> som redan har fälten för ROT på plats.</p>

<h2>ROT-avdraget 2026 i korthet</h2>
<p>För 2026 gäller åter standardnivån: ROT-avdraget är 30 procent av arbetskostnaden (inklusive moms), med ett tak på 50 000 kr per person och år. Den tillfälligt förhöjda ROT-nivån (50 procent) som gällde under delar av 2025 löpte ut vid årsskiftet och förlängdes inte. ROT tillämpas via fakturamodellen – du drar av 30 procent direkt på fakturan, kunden betalar 70 procent av arbetskostnaden, och du begär resten som utbetalning från Skatteverket när arbetet är klart och betalt.</p>
<p>ROT och RUT delar ett gemensamt tak på 75 000 kr per person och år. ROT-delen kan vara högst 50 000 kr av detta.</p>
<ul>
<li><strong>ROT:</strong> 30 % av arbetskostnaden, max 50 000 kr/person/år.</li>
<li><strong>RUT:</strong> 50 % av arbetskostnaden, kan ensamt nå upp till 75 000 kr/person/år.</li>
<li><strong>Gemensamt tak:</strong> 75 000 kr – du kan alltså inte få 50 000 kr ROT och 75 000 kr RUT samtidigt.</li>
</ul>

<h2>Grundläggande fakturauppgifter</h2>
<p>Innan vi kommer till det ROT-specifika måste fakturan uppfylla de vanliga kraven i bokförings- och mervärdesskattelagen. Utan dessa är fakturan inte giltig oavsett ROT:</p>
<ul>
<li>Unikt fakturanummer och fakturadatum.</li>
<li>Ditt företagsnamn, adress och organisationsnummer.</li>
<li>Uppgift om att du är godkänd för <strong>F-skatt</strong> – ett grundkrav för att arbetet överhuvudtaget ska ge ROT.</li>
<li>Köparens namn och adress.</li>
<li>Momsuppgifter: momssats (25 % för byggtjänster till privatperson) och momsbelopp.</li>
</ul>
<p>Observera att omvänd byggmoms bara gäller mellan byggföretag (B2B). En ROT-faktura går till en privatperson, så här debiterar du vanlig moms. Spara fakturaunderlaget i minst sju år.</p>

<h2>Separera arbetskostnad från material</h2>
<p>Detta är den vanligaste felkällan. Endast arbetskostnaden ger ROT-avdrag. Följande poster är inte avdragsgilla och måste redovisas separat på fakturan:</p>
<ul>
<li>Material och förbrukningsvaror</li>
<li>Rese- och transportkostnader</li>
<li>Maskin- och utrustningshyra</li>
<li>Frakt</li>
<li>Administration och projektering</li>
</ul>
<p>Ange antal arbetstimmar och timpris så att arbetskostnaden går att följa. Skatteverket kan begära underlag, och en klumpsumma där arbete och material blandas ihop riskerar att underkännas.</p>

<h2>Rätt identitetsuppgifter</h2>
<p>För att kunna begära utbetalning måste du redovisa köparens personnummer till Skatteverket. Utnyttjar flera delägare avdraget – till exempel två makar som äger bostaden tillsammans – ska personnumret för var och en som tar del av avdraget framgå, tillsammans med hur beloppet fördelas. Arbetet får inte utföras av köparen själv eller närstående, och en kund kan inte köpa ROT-arbete av sitt eget bolag.</p>

<h2>Villa eller bostadsrätt – olika krav</h2>
<p>Vilka fastighetsuppgifter du behöver beror på bostadstypen:</p>
<ul>
<li><strong>Villa/småhus:</strong> ange <strong>fastighetsbeteckningen</strong> (t.ex. Kommun Del 1:23).</li>
<li><strong>Bostadsrätt:</strong> ange i stället bostadsrättsföreningens <strong>organisationsnummer</strong> samt lägenhetens beteckning (lägenhetsnummer).</li>
</ul>
<p>ROT gäller bara reparation, underhåll samt om- och tillbyggnad av befintlig bostad som köparen äger och bor i eller använder som fritidsbostad. Nyproduktion och hyresrätt ger inte ROT – kontrollera detta innan du lämnar offert.</p>

<h2>Så räknar du ut ROT-beloppet på fakturan</h2>
<p>Ett konkret exempel. Arbetskostnaden är 20 000 kr inklusive moms:</p>
<ol>
<li>ROT-avdrag: 30 % av 20 000 kr = <strong>6 000 kr</strong>.</li>
<li>Kunden betalar: 20 000 − 6 000 = <strong>14 000 kr</strong> för arbetet.</li>
<li>Lägg till material (ej ROT), t.ex. 8 000 kr inkl. moms.</li>
<li>Kundens totala fakturabelopp: 14 000 + 8 000 = <strong>22 000 kr</strong>.</li>
<li>Du begär de resterande <strong>6 000 kr</strong> från Skatteverket.</li>
</ol>
<p>Vill du testa siffrorna för ett specifikt jobb, använd <a href="/sv/verktyg/rot-avdrag-kalkylator">vår ROT-avdragskalkylator &rarr;</a> så ser du direkt vad kunden ska betala och vad du får tillbaka.</p>

<h2>Betalning och begäran om utbetalning</h2>
<p>Betalningen måste ske elektroniskt och spårbart – kort, banköverföring, BankID eller Swish. Sedan 1 januari 2020 ger kontant betalning inte rätt till ROT. Du kan först begära utbetalning från Skatteverket när arbetet är klart och kunden har betalat sin del. Skattereduktionen är preliminär och stäms slutligen av i kundens deklaration, så kontrollera att kunden faktiskt har avdragsutrymme kvar innan du gör avdrag på fakturan.</p>

<h2>Färdig checklista att bocka av</h2>
<ul>
<li>Fakturanummer, datum och dina företagsuppgifter</li>
<li>Uppgift om godkänd F-skatt</li>
<li>Köparens namn, adress och personnummer (alla som utnyttjar avdraget)</li>
<li>Arbetskostnad separerad från material och övriga poster</li>
<li>Antal timmar och timpris</li>
<li>ROT-avdrag angivet (30 %, max 50 000 kr/person)</li>
<li>Fastighetsbeteckning (villa) eller BRF-org.nr + lägenhetsnummer (bostadsrätt)</li>
<li>Momssats och momsbelopp</li>
<li>Belopp kunden ska betala efter ROT-avdrag</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du ROT-fakturan från tidrapporterna, så att arbetstimmarna följer med automatiskt och hålls åtskilda från material. Mallen har färdiga fält för personnummer, fastighetsbeteckning respektive BRF-organisationsnummer, och ROT-avdraget räknas ut på arbetskostnaden. Du får ett komplett underlag att stämma av mot checklistan ovan – men den slutliga kontrollen av kundens avdragsutrymme och att uppgifterna stämmer ligger alltid hos dig.</p>

<h2>Vanliga frågor</h2>
<h3>Vad ska en faktura innehålla för att ge ROT?</h3>
<p>Utöver de vanliga fakturauppgifterna krävs: köparens personnummer, en särskild redovisad arbetskostnad, ROT-avdragets storlek (30 %) samt fastighetsbeteckning för villa eller BRF-organisationsnummer och lägenhetsnummer för bostadsrätt.</p>
<h3>Hur mycket är ROT-avdraget 2026?</h3>
<p>30 procent av arbetskostnaden inklusive moms, med ett tak på 50 000 kr per person och år. ROT delar ett gemensamt tak på 75 000 kr per person och år med RUT.</p>
<h3>Vad händer om kundens ROT-utrymme är slut?</h3>
<p>Då nekar Skatteverket utbetalningen och kunden blir betalningsskyldig för hela arbetskostnaden. Eftersom reduktionen är preliminär bör du be kunden bekräfta att utrymme finns innan du drar av ROT på fakturan.</p>
<h3>Kan två personer dela på samma ROT-faktura?</h3>
<p>Ja, om flera äger bostaden kan avdraget fördelas mellan dem. Ange då varje persons personnummer och hur beloppet fördelas – var och en har sitt eget tak på 50 000 kr per år.</p>

<h2>Kom igång</h2>
<p>Skapa en korrekt ROT-faktura direkt i <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall &rarr;</a>, eller räkna på avdraget med <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylatorn</a>. Vill du se hur hela flödet från tidrapport till ROT-faktura fungerar i praktiken? <a href="/sv/contact">Boka en demo &rarr;</a></p>

<p>Relaterat: <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a>, <a href="/sv/blog/rot-avdrag">Allt om ROT-avdraget</a> och <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a>.</p>
`;

const A_BYGGFAKTURA_CHECKLISTA_ROT: BlogPost = {
  _id: "code-"+"byggfaktura-checklista-rot",
  title: "Byggfaktura med ROT: komplett checklista för 2026", slug: "byggfaktura-checklista-rot", locale: "sv",
  excerpt: "En komplett checklista för vad en faktura måste innehålla för att ge ROT enligt 2026 års regler – så att utbetalningen från Skatteverket inte stoppas.", tag: "ROT-avdrag",
  coverImageUrl: "/landing/verktyg/faktura-preview.webp", contentHtml: A_BYGGFAKTURA_CHECKLISTA_ROT_HTML,
  seoTitle: "ROT-faktura checklista 2026 | ByggExp", seoDescription: "Så skriver du en korrekt ROT-faktura 2026: alla obligatoriska fält, hur du separerar arbetskostnad och räknar ut avdraget. Färdig checklista att bocka av.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/faktura-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:27:00.000Z", createdAt: "2026-08-19T05:27:00.000Z", updatedAt: "2026-08-19T05:27:00.000Z",
};

const A_JUSTERAT_FORMANSVARDE_SERVICEBIL_HTML = `
<p>Har du en fast inredd skåpbil som står på firman men beskattas som en vanlig förmånsbil? Då betalar du och företaget nästan säkert mer i skatt och arbetsgivaravgifter än ni behöver. Schablonvärdet är byggt för en personbil, inte för en lätt lastbil full av verkstadsinredning – och för den typiska servicebilen finns det tre separata, lagliga vägar att sänka värdet eller slippa förmånen helt.</p>

<p>I den här guiden reder vi ut begreppen och visar hur du räknar. Behöver du hålla ordning på körjournal, tjänstekörning och underlag inför en jämkning använder du <a href="/sv/verktyg">våra gratis verktyg för byggföretag -&gt;</a>.</p>

<h2>Servicebil, förmånsbil eller arbetsredskap? Reda ut begreppen</h2>
<p>Först det viktigaste: <strong>"servicebil" är inget skattebegrepp</strong>. Skatteverket bryr sig inte om att bilen är registrerad som lätt lastbil (totalvikt högst 3 500 kg). En lätt lastbil beskattas som bilförmån så snart den är <em>tillgänglig för privat bruk</em> – oavsett skåp, dekaler eller att det står "service" på dörren. Att bilen är en lastbil sänker alltså inte automatiskt något.</p>
<p>Det som faktiskt påverkar skatten är bilens lämplighet för privat körning och hur den faktiskt används. Bedömningen görs i tre steg, i tur och ordning:</p>
<ul>
<li><strong>Test 1 – Finns en förmån alls?</strong> Är bilen tillgänglig för privat bruk uppstår förmån (61 kap. inkomstskattelagen).</li>
<li><strong>Test 2 – Är den ett arbetsredskap?</strong> Är bilen så inredd att privat användning är olämplig kan värdet jämkas eller falla bort.</li>
<li><strong>Test 3 – Körs den minst 3 000 mil i tjänsten?</strong> Då sätts värdet till 75 procent.</li>
</ul>
<p>Vägarna kan staplas. En arbetsredskaps-jämkning behöver till exempel inte vila på 3 000-mil-regeln.</p>

<h2>Väg 1 – Slipp förmånen helt: ringa omfattning</h2>
<p>Den starkaste vägen är att ingen förmån alls beskattas. Det gäller om bilen körs privat bara "vid ett fåtal tillfällen och i ringa omfattning". Skatteverkets etablerade tolkning sätter två gränser:</p>
<ul>
<li>Högst <strong>10 tillfällen</strong> per år, <strong>och</strong></li>
<li>Högst <strong>100 mil</strong> (1 000 km) privat körning per år.</li>
</ul>
<p>Observera ordet <strong>och</strong>. Båda gränserna måste hållas samtidigt. Kör du privat vid 8 tillfällen men sammanlagt 120 mil är undantaget borta – då beskattas <em>hela årets</em> fulla förmånsvärde, inte bara det som ligger över gränsen. En enda längre privattur kan alltså välta hela året.</p>
<p>Detta är en smal nålsögon och passar företag där servicebilen i praktiken bara används i jobbet. För att över huvud taget kunna åberopa undantaget krävs en <strong>körjournal</strong> som visar att både antal tillfällen och antal mil ligger under gränserna. Utan dokumentation faller invändningen direkt vid en granskning.</p>

<h2>Väg 2 – Arbetsredskap: nedsatt förmånsvärde för fast inredning</h2>
<p>Den vanligaste vägen för en hantverkare är att bilen är ett <em>arbetsredskap</em>. Skatteverket får enligt lagen "under synnerliga skäl" sätta ett annat värde än schablonen (61 kap. 18–19 §§ inkomstskattelagen). Är lastutrymmet fyllt av fast inredning som gör privat användning opraktisk, kan förmånsvärdet jämkas nedåt.</p>
<p>Det finns ingen fast procentsats här – nedsättningen bedöms individuellt utifrån hur mycket den privata nyttan faktiskt är begränsad. Följande stärker ditt fall:</p>
<ul>
<li><strong>Fast monterad hyll- och verkstadsinredning</strong> som upptar lastutrymmet och inte enkelt kan tas bort.</li>
<li><strong>Smutsig eller skrymmande utrustning</strong> permanent i bilen – ställningsdelar, kablar, oljor, maskiner.</li>
<li><strong>Avsaknad av baksäte</strong> och att bilen bara har plats för föraren och en passagerare.</li>
<li><strong>Dekaler och firmalogotyp</strong> – stödjande, men aldrig ensamt avgörande.</li>
</ul>
<p>Ju mer bilen liknar en rullande verkstad och ju sämre den lämpar sig för familjeutflykter, desto större blir nedsättningen. Fotografera inredningen och spara kvitton på ombyggnaden – det är den bevisningen Skatteverket vill se.</p>

<h2>Väg 3 – 3 000-mil-regeln: 25 procent lägre värde</h2>
<p>Den här vägen står tydligt i lagen och kräver ingen skönsmässig bedömning. Körs bilen minst <strong>3 000 mil (30 000 km) i tjänsten</strong> under beskattningsåret sätts förmånsvärdet till 75 procent av det värde som annars skulle gälla – en säker rabatt på 25 procent (61 kap. 18–19 §§ inkomstskattelagen).</p>
<p>Viktigt: det är <em>tjänstekörning</em> som räknas, inte pendling mellan hem och den vanliga arbetsplatsen. Kör du mellan arbetsplatser, till kunder och byggen under dagen räknas det – men den dagliga rutten hemifrån till fasta kontoret gör det normalt inte. För en montör eller servicetekniker som är ute på uppdrag hela dagarna är 3 000 mil ofta lätt att nå.</p>
<p>Beviset är återigen <strong>körjournalen</strong>. Kan du inte visa att minst 3 000 mil kördes i tjänsten faller rabatten. Skatteverket underkänner rutinmässigt nedsättningar där tjänste- och privatkörning inte kan styrkas.</p>

<h2>Så ansöker du om jämkning hos Skatteverket</h2>
<p>Nedsättningen sker inte automatiskt. För att det lägre värdet ska slå igenom redan under året ansöker <strong>arbetsgivaren</strong> om justering (jämkning) hos Skatteverket. Då beräknas arbetsgivaravgifter och preliminärskatt på det lägre värdet direkt i lönekörningen.</p>
<p>Rutinen ser ut så här:</p>
<ol>
<li>Arbetsgivaren fyller i Skatteverkets blankett/e-tjänst för justering av förmånsvärde.</li>
<li>Bifoga underlag: körjournal, bilder på inredningen, beskrivning av användningen.</li>
<li>Vänta på <strong>beslut</strong> – utan ett beslut måste arbetsgivaren rapportera det ordinarie schablonvärdet.</li>
</ol>
<p>Missar ni att ansöka i tid kan den anställde i stället yrka justeringen i efterhand i sin inkomstdeklaration, men då har för mycket redan dragits under året. Ansök alltså före lönekörningen. Kontrollera aktuellt blankettnummer och e-tjänst på skatteverket.se innan ni skickar in – Skatteverket uppdaterar formulären löpande.</p>

<h2>Räkneexempel: skåpbil med verkstadsinredning</h2>
<p>Tänk dig en dieseldriven skåpbil med fast hyllinredning som en snickare kör i tjänsten hela året. Anta att schablonens förmånsvärde landar på 60 000 kr för året (den exakta siffran byggs av en ränterelaterad del knuten till statslåneräntan, en prisrelaterad del av nybilspriset, ett prisbasbeloppsbelopp och full fordonsskatt – hämta 2026 års tal från Skatteverkets kalkyl).</p>
<ul>
<li><strong>3 000-mil-regeln:</strong> värdet sätts till 75 procent, alltså 45 000 kr. Det är 15 000 kr lägre beskattat värde.</li>
<li><strong>Arbetsredskaps-jämkning:</strong> antas Skatteverket sätta ned värdet med exempelvis hälften blir det beskattade värdet 30 000 kr.</li>
</ul>
<p>På 30 000 kr lägre förmånsvärde sparar företaget arbetsgivaravgifter och den anställde inkomstskatt på hela mellanskillnaden – flera tusenlappar per år. Notera att en miljöbilsnedsättning är en helt annan regel och inte gäller en diesel- eller bensinskåpbil; för den typiska servicebilen är det 3 000-mil-regeln och arbetsredskaps-jämkningen som är hävstängerna. Räkna alltid på det faktiska schablonvärdet med Skatteverkets verktyg "Räkna ut bilförmånsvärde".</p>

<h2>Vanliga misstag som kostar hantverkare pengar</h2>
<p>Det dyraste felet är att <strong>anta att en lastbil är skattefri</strong> – den är den inte. Det näst dyraste är att köra utan körjournal och sedan hävda nedsättning i efterhand; utan underlag underkänns yrkandet. Andra klassiker: att blanda ihop pendling med tjänstekörning i 3 000-milsräkningen, att tro att ringa omfattning gäller trots en enda längre privattur (den välter hela året), och att skjuta upp jämkningsansökan så att fullt värde dras under hela året. Att inte fotografera inredningen innan bilen byggs om gör dessutom arbetsredskapsargumentet svagare.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp löser inte din skattedeklaration åt dig, men verktygen ger dig underlaget som en jämkning står och faller med. Du håller ordning på tjänstekörning och kan följa dina mil mot 3 000-milsgränsen, samla dokumentation om servicebilen och hålla kvitton och underlag samlade i sju år som bokföringen kräver. Med spårbara uppgifter blir det enkelt att fylla i Skatteverkets blankett och att stå stadigt om en granskning kommer. Själva beslutet om nedsatt förmånsvärde fattar dock alltid Skatteverket.</p>

<h2>Vanliga frågor</h2>
<h3>Är en lätt lastbil automatiskt befriad från förmånsvärde?</h3>
<p>Nej. En lätt lastbil (totalvikt högst 3 500 kg) beskattas som bilförmån om den är tillgänglig för privat bruk. Det som sänker eller tar bort värdet är att bilen är olämplig för privat användning eller körmönstret – inte att den är registrerad som lastbil.</p>
<h3>Hur mycket sänks förmånsvärdet för en inredd servicebil?</h3>
<p>3 000-mil-regeln ger en fast nedsättning till 75 procent av värdet. Arbetsredskaps-jämkningen har ingen fast procentsats utan bedöms individuellt av Skatteverket utifrån hur mycket den fasta inredningen begränsar privat nytta.</p>
<h3>Måste jag ha körjournal?</h3>
<p>I praktiken ja. För att åberopa ringa omfattning, styrka 3 000 mil i tjänsten eller försvara en arbetsredskaps-jämkning behöver du en körjournal. Skatteverket underkänner rutinmässigt nedsättningar där körningen inte kan dokumenteras.</p>
<h3>Vem ansöker om jämkningen – jag eller arbetsgivaren?</h3>
<p>Arbetsgivaren ansöker hos Skatteverket så att avgifter och preliminärskatt beräknas på det lägre värdet redan under året. Saknas beslut måste ordinarie schablonvärde rapporteras, och den anställde får i stället begära justeringen i sin inkomstdeklaration.</p>

<h2>Kom igång</h2>
<p>Börja med att föra körjournal och samla underlag redan i dag – det avgör vad du kan få igenom. Använd <a href="/sv/verktyg">våra gratis verktyg för byggföretag</a> för att hålla ordning på tjänstekörning och dokumentation, och kontrollera alltid aktuella siffror och blanketter på skatteverket.se. Vill du se hur ByggExp stöttar hela ekonomiflödet i firman? <a href="/sv/contact">Boka en demo här</a>.</p>

<p><em>Relaterat:</em> <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag?</a></p>
`;

const A_JUSTERAT_FORMANSVARDE_SERVICEBIL: BlogPost = {
  _id: "code-"+"justerat-formansvarde-servicebil",
  title: "Justerat förmånsvärde för servicebil: tre lagliga vägar att sänka skatten", slug: "justerat-formansvarde-servicebil", locale: "sv",
  excerpt: "En fast inredd skåpbil beskattas ofta som en vanlig förmånsbil. Här är de tre lagliga vägarna att sänka förmånsvärdet – och hur du ansöker om jämkning hos Skatteverket.", tag: "Skatt",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_JUSTERAT_FORMANSVARDE_SERVICEBIL_HTML,
  seoTitle: "Justerat förmånsvärde servicebil | ByggExp", seoDescription: "Din inredda servicebil beskattas ofta som personbil. Så sänker du förmånsvärdet lagligt via ringa omfattning, arbetsredskap och 3 000-mil-regeln.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:30:00.000Z", createdAt: "2026-08-19T05:30:00.000Z", updatedAt: "2026-08-19T05:30:00.000Z",
};

const A_KMA_PLAN_MALL_HTML = `
<p>KMA står för <strong>Kvalitet, Miljö och Arbetsmiljö</strong> – de tre områden en KMA-plan (ibland kallad kvalitetsplan) binder ihop till ett dokument. För många mindre byggföretag dyker kravet upp först när en beställare begär en KMA-plan i upphandlingen, och då gäller det att ha något att visa. Den goda nyheten: planen behöver inte vara tjock. Den ska vara konkret, spegla hur ni faktiskt jobbar och gå att uppdatera per projekt. Här går vi igenom vad den måste innehålla enligt PBL, Miljöbalken och Arbetsmiljölagen – och hur du bygger en nedbantad variant som håller.</p>

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

const A_BOVERKETS_NYA_BYGGREGLER_2026_KONTROLLPLAN_HTML = `
<p>Den 1 juli 2025 ersatte Boverkets nya bygg- och konstruktionsregler de gamla byggreglerna (BBR) och konstruktionsreglerna (EKS). Reformen beskrivs ofta som den största förändringen av regelverket på 30 år. För dig som är entreprenör eller driver byggföretag är det inte bara ett nytt regelverk att läsa – det är en övergångsperiod som stängs 30 juni 2026, och en förskjutning av ansvar som direkt träffar hur du dokumenterar din egenkontroll.</p>

<p>Vill du komma igång direkt med att uppdatera dina rutiner mot funktionskraven? Börja i vår gratis egenkontrollmall -&gt; <a href="/sv/verktyg/egenkontroll-mall">/sv/verktyg/egenkontroll-mall</a>.</p>

<h2>Vad har egentligen ändrats?</h2>
<p>De gamla reglerna var detaljstyrda: BBR angav ofta konkreta värden och hänvisade till standarder som du kunde följa rakt av. De nya reglerna är i stället funktions- och kravbaserade. Boverket anger vilka funktioner och egenskaper en byggnad ska uppnå – men inte längre hur du ska uppfylla dem. Stora delar av de allmänna råden och hänvisningarna till standarder har tagits bort.</p>
<p>I praktiken flyttar det ansvaret nedåt i kedjan. Byggherren och entreprenören måste själva välja en lösning och kunna visa att den uppfyller funktionskravet. Det gäller att kunna verifiera och dokumentera varje val, i stället för att luta sig mot en tabell i en föreskrift. Reformen är dessutom uppdelad i flera separata författningar i BFS 2024-serien i stället för det gamla samlade BBR/EKS – kontrollera de exakta BFS-numren direkt i Boverkets författningssamling innan du hänvisar till dem i ett projekt.</p>

<h2>Övergångsperioden och slutdatumet 30 juni 2026</h2>
<p>Mellan 1 juli 2025 och 30 juni 2026 gäller en ettårig övergångsperiod. Under den får byggherren välja att följa antingen de gamla reglerna (BBR/EKS) i sin helhet eller de nya reglerna i sin helhet. Det du absolut inte får göra är att blanda regelverken i samma projekt – välj ett spår och håll dig till det hela vägen.</p>
<p>Det avgörande för vilket regelverk som gäller är i praktiken vilket datum ansökan om lov eller anmälan kom in (inkom) till byggnadsnämnden. Kort sammanfattat:</p>
<ul>
<li><strong>Inkom före 1 juli 2025:</strong> gamla BBR/EKS gäller.</li>
<li><strong>Inkom 1 juli 2025–30 juni 2026:</strong> byggherren väljer gammalt eller nytt – men inte en blandning.</li>
<li><strong>Inkom efter 30 juni 2026:</strong> enbart Boverkets nya bygg- och konstruktionsregler gäller.</li>
</ul>
<p>Pågående projekt som startats under övergångsperioden enligt äldre regler kan omfattas av övergångsbestämmelser. Den exakta lydelsen bör du dubbelkolla mot Boverkets övergångsbestämmelser för just ditt ärende. En separat tidpunkt som rapporterats är att energikraven flyttas ut ur BBR till en egen energiregel, uppgivet omkring 1 oktober 2026 – det datumet är ännu obekräftat och bör verifieras separat mot Boverket.</p>

<h2>Myten om en ny kontrollplan – så ligger det till</h2>
<p>En vanlig missuppfattning är att den nya regelreformen tvingar fram en helt ny sorts kontrollplan. Det stämmer inte. Kontrollplan och egenkontroll regleras av plan- och bygglagen (PBL, 10 kap.), inte av BBR eller byggreglerna. Själva reformen ändrar alltså inte de formella PBL-kraven på kontrollplanen.</p>
<p>Kraven i sig står kvar: en kontrollplan krävs för de flesta lov- och anmälningspliktiga bygg-, rivnings- och markåtgärder, och för de flesta sådana projekt krävs en certifierad kontrollansvarig (KA). Byggherren är fortsatt ansvarig för att kraven uppfylls och för att det finns en kontrollplan. Kontrollerna kan utföras som byggherrens egenkontroll eller av certifierad sakkunnig. Det som ändras är inte formen – utan innehållet du måste fylla den med.</p>

<h2>Så påverkas din egenkontroll i praktiken</h2>
<p>När detaljvärden och standardhänvisningar försvinner räcker det inte längre att bocka av att en kontroll är utförd. Din egenkontroll måste tydligare visa <em>hur</em> den valda lösningen uppfyller funktionskravet – alltså själva verifieringen. Det höjer i praktiken kraven på dokumentation som knyts till kontrollplanen, även om kontrollplanens PBL-krav i sig är oförändrade.</p>
<p>Konkret betyder det att varje kontrollpunkt bör kopplas till tre saker: vilket funktionskrav den svarar mot, vilken metod eller lösning du valt, och vilket underlag som styrker att kravet är uppfyllt (mätning, provning, produktdokumentation eller motsvarande). Kopplingen mellan egenkontroll, kontrollplan och startbesked blir viktigare – kontrollansvarig ska kunna följa hur du kommit fram till att ett krav är uppfyllt, inte bara att någon skrivit sina initialer i en ruta.</p>
<p>Rollfördelningen är densamma men skärps i praktiken: byggherren äger ansvaret, KA granskar och följer kontrollplanen, och du som entreprenör levererar verifieringen. Ju svagare din dokumentation är, desto mer sårbar blir hela kedjan vid slutbesked.</p>

<h2>Checklista: förbered dig innan 30 juni 2026</h2>
<ul>
<li><strong>Bestäm regelval per projekt.</strong> Avgör tidigt om projektet ska följa gamla eller nya reglerna, och notera datumet då ansökan/anmälan inkom.</li>
<li><strong>Uppdatera egenkontrollmallarna mot funktionskraven.</strong> Byt ut avbockningar mot punkter som beskriver vald lösning och verifiering.</li>
<li><strong>Dokumentera verifieringsmetoden.</strong> Bestäm i förväg hur varje funktionskrav ska styrkas – mätning, provning eller produktunderlag.</li>
<li><strong>Stäm av med kontrollansvarig.</strong> Säkerställ att kontrollplan och egenkontroll hänger ihop mot startbesked.</li>
<li><strong>Bevaka energiregeln.</strong> Håll koll på den separata energiregelns ikraftträdande och kontrollera BFS-numren mot Boverkets författningssamling.</li>
<li><strong>Spara underlagen under hela ansvarstiden.</strong> Verifieringsdokumentationen är ditt skydd om ett projekt ifrågasätts i efterhand – för arbete på byggnader kan fel enligt konsumenttjänstlagen reklameras i upp till tio år, och entreprenadavtalens ansvarstid enligt AB 04/ABT 06 är normalt tio år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att strukturera egenkontrollen så att den håller för det funktionsbaserade regelverket. I stället för lösa pappersblanketter samlar du kontrollpunkter, valda lösningar och verifieringsunderlag på ett ställe – med foton och noteringar kopplade till rätt moment. Det gör det enklare att visa <em>hur</em> ett krav uppfyllts och att ta fram dokumentationen när kontrollansvarig eller byggnadsnämnden frågar. ByggExp ersätter inte kontrollansvarig eller kontrollplanen enligt PBL, och tar inte över byggherrens ansvar – men det gör det betydligt lättare att hålla ordning på underlaget och att spara det under den tid det kan behövas, till exempel under den tioåriga reklamations- och ansvarstiden.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag använda de nya reglerna redan nu?</h3>
<p>Nej. Under övergångsperioden 1 juli 2025–30 juni 2026 får byggherren välja gamla eller nya reglerna, så länge du inte blandar dem i samma projekt. För ärenden där ansökan eller anmälan inkommer efter 30 juni 2026 gäller enbart de nya reglerna.</p>
<h3>Vad händer med pågående bygglov?</h3>
<p>Vilket regelverk som gäller styrs i praktiken av datumet då ansökan eller anmälan inkom till byggnadsnämnden. Projekt som startats under övergångsperioden enligt äldre regler kan omfattas av övergångsbestämmelser – kontrollera lydelsen för ditt specifika ärende mot Boverket.</p>
<h3>Ändras kontrollplanen av de nya byggreglerna?</h3>
<p>De formella kraven på kontrollplan och egenkontroll styrs av PBL (10 kap.) och ändras inte av regelreformen. Men eftersom funktionskrav ersätter detaljvärden behöver innehållet i din egenkontroll bli mer verifierande och bättre dokumenterat.</p>
<h3>Hur länge bör jag spara egenkontroll och verifieringsunderlag?</h3>
<p>Det finns ingen särskild lagstadgad arkiveringstid för egenkontroll i PBL, men underlaget kan behövas långt efter slutbesked. Fel i arbete på byggnader kan enligt konsumenttjänstlagen reklameras i upp till tio år, och ansvarstiden i AB 04/ABT 06 är normalt tio år efter godkänd slutbesiktning – spara därför verifieringsdokumentationen så länge den kan bli aktuell.</p>
<h3>Vad gäller efter 30 juni 2026?</h3>
<p>Då är valfriheten borta. Ärenden som påbörjas eller ansöks efter det datumet ska följa Boverkets nya bygg- och konstruktionsregler fullt ut. Se därför över mallar och rutiner i god tid före sommaren 2026.</p>

<h2>Kom igång</h2>
<p>Börja med att se över dina egenkontrollrutiner mot funktionskraven med vår gratis <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmall</a>. Vill du se hur ByggExp samlar egenkontroll och verifieringsunderlag i ett flöde? Boka en demo via <a href="/sv/contact">/sv/contact</a>.</p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a> och <a href="/sv/blog/nya-vatrumsregler-2026">Nya våtrumsregler 2026</a>.</p>
`;

const A_BOVERKETS_NYA_BYGGREGLER_2026_KONTROLLPLAN: BlogPost = {
  _id: "code-"+"boverkets-nya-byggregler-2026-kontrollplan",
  title: "Boverkets nya byggregler 2026: så påverkas din kontrollplan och egenkontroll", slug: "boverkets-nya-byggregler-2026-kontrollplan", locale: "sv",
  excerpt: "Boverkets funktionsbaserade byggregler flyttar ansvaret till dig som entreprenör. Så påverkas egenkontroll och kontrollplan – och så förbereder du dig före 30 juni 2026.", tag: "Regelverk",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_BOVERKETS_NYA_BYGGREGLER_2026_KONTROLLPLAN_HTML,
  seoTitle: "Nya byggregler 2026: kontrollplan | ByggExp", seoDescription: "Boverkets nya bygg- och konstruktionsregler ändrar hur du dokumenterar egenkontroll. Så förbereder du dig och kontrollplanen före 30 juni 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:39:00.000Z", createdAt: "2026-08-19T05:39:00.000Z", updatedAt: "2026-08-19T05:39:00.000Z",
};

const A_NYA_BYGGREGLER_2026_ENTREPRENAD_HTML = `
<p>2026 är ett skarpt år för dig som driver byggföretag eller arbetar som hantverkare. Boverkets nya byggregler blir det enda gällande regelverket för nya projekt, konstruktionsreglerna har helt ersatt EKS, och Arbetsmiljöverkets nya struktur har satt sig. Samtidigt ligger fokus i PBL på att tillämpa kontrollsystemet rätt. Den här artikeln ger dig överblicken – men den ersätter inte primärkällorna. Kontrollera alltid exakta datum och paragrafer hos Boverket och Arbetsmiljöverket innan du binder dig i avtal eller kontrollplan.</p>

<p>Ett konkret första steg är att se över de dokument du skickar ut i varje projekt. Uppdatera dina avtalsmallar så att de hänvisar till rätt regelverk – börja med <a href="/sv/verktyg/offert-mall">vår gratis offertmall -&gt;</a> och byt ut föråldrade referenser till BBR och EKS.</p>

<h2>Boverkets nya bygg- och konstruktionsregler – övergångsperioden är slut</h2>
<p>Boverkets nya byggregler är inte en enda författning, utan nio nya grundförfattningar: BFS 2024:4 (aktsamhet vid bygg-, rivnings- och markåtgärder), 2024:6 (bärförmåga, stadga och beständighet – konstruktionsreglerna), 2024:7 (brand), 2024:8 (hygien, hälsa och miljö), 2024:9 (säkerhet vid användning), 2024:10 (buller), 2024:11 (bostäders lämplighet), 2024:12 (tillgänglighet) och 2024:13 (tomter). De har ersatt motsvarande regler i BBR och EKS.</p>
<p>Författningarna trädde i kraft under 2025. Under en övergångsperiod gick det att fortsätta tillämpa de äldre reglerna i BBR och EKS, men den möjligheten upphörde den 1 juli 2026. Från och med då gäller de nya reglerna för nya projekt. EKS (BFS 2011:10, eurokoderna) är upphävt i sin helhet genom BFS 2024:6, eftersom konstruktionsreglerna fullt ut ersatte EKS.</p>
<p>En viktig nyansering: BBR (BFS 2011:6) är inte helt upphävt ännu. Reglerna om energihushållning ligger kvar i BBR 31 (senaste ändring BFS 2024:14). En ny grundförfattning om energihushållning, samordnad med EU:s direktiv om byggnaders energiprestanda (EPBD), träder i kraft den 1 oktober 2026. Först då är samtliga BBR-regler ersatta.</p>

<h2>Från detaljregler till funktionskrav – vad det betyder i praktiken</h2>
<p>Den största principiella förändringen är att de nya reglerna bygger på funktionskrav. De innehåller i huvudsak inte längre några allmänna råd eller hänvisningar till specifika standarder. Boverket anger vad som ska uppnås, inte hur. Byggherren väljer lösning, men ska på vetenskaplig grund kunna visa att kraven uppfylls – med fackmässighet i projektering, utförande och kontroll.</p>
<p>För dig som entreprenör innebär det större frihet men också ett tydligare ansvar. Du kan inte längre luta dig mot att en viss standard automatiskt uppfyller kraven. Dokumentation, kompetens och spårbarhet blir avgörande. Kan du inte visa hur och varför en lösning uppfyller funktionskravet, står du svagt om något ifrågasätts.</p>

<h2>Kontroll enligt de nya reglerna</h2>
<p>Konstruktionsreglerna (BFS 2024:6) skärper synen på kontroll. Kontroll får inte göras i färdig byggnad – den måste ske under projektering och utförande. För byggnader i säkerhetsklass 2 eller 3 krävs dimensioneringskontroll: någon annan än den som gjort dimensioneringen ska kontrollera den, för att eliminera grova fel.</p>
<p>Det här hänger ihop med PBL-nivån. Kontrollplanen ska bygga på en projektspecifik riskbedömning med tydliga riskmoment – inte en lång lista generella kontrollpunkter som klickas av på slutet. Egenkontroller och kontrollplan behöver alltså vara riskbaserade och kopplade till det enskilda projektet.</p>

<h2>PBL, kontrollplan och kontrollansvarig – vad gäller 2026</h2>
<p>På PBL-nivå ligger tyngdpunkten 2025–2026 på korrekt tillämpning av det befintliga kontrollsystemet. Boverket driver stödet ”Förebygg fel, brister och skador / Korrekt tillämpning av kontrollsystemet i PBL” (publicerat 10 oktober 2025). Budskapet är att kontrollplanen ska vara riskbaserad och projektspecifik, och att kontrollansvarig (KA) faktiskt ska fylla sin roll.</p>
<p>En bredare reform av byggkontrollen och kontrollansvarig-rollen – samt arbetet mot en ny plan- och bygglag – pågår. Men den saknar bekräftat ikraftträdande 2026. Slå inte fast osäkra datum i offerter eller planering. Bevaka status hos Boverket och regeringen.</p>

<h2>Arbetsmiljöverkets nya regelstruktur</h2>
<p>Arbetsmiljöverket har omstrukturerat hela sitt regelverk. Cirka 2 700 regler har omarbetats och samlats i en ny struktur med ett femtontal nya föreskriftshäften i AFS 2023-serien. Den nya regelstrukturen trädde i kraft den 1 januari 2025 – kontrollera exakt tillämpning hos Arbetsmiljöverket.</p>
<p>För bygg är den centrala nya föreskriften AFS 2023:3 Projektering och byggarbetsmiljösamordning – grundläggande skyldigheter, som reglerar byggherrens, projektörernas och byggarbetsmiljösamordnarnas (Bas-P och Bas-U) ansvar. Angränsande föreskrifter är AFS 2023:1 (systematiskt arbetsmiljöarbete), 2023:2 (planering och organisering) och 2023:12 (utformning av arbetsplatser). Innehållskraven är i stort desamma som tidigare, men numrering, struktur och hänvisningar är nya. Uppdatera därför interna rutiner och mallar så att de pekar på rätt AFS-nummer.</p>

<h2>Checklista: så förbereder sig entreprenören 2026</h2>
<ul>
<li>Uppdatera mallar och egenkontroller mot rätt BFS- och AFS-nummer.</li>
<li>Säkerställ dokumentation och fackmässighet – kunna visa hur funktionskrav uppfylls.</li>
<li>Se över behovet av dimensioneringskontroll i säkerhetsklass 2 och 3.</li>
<li>Gör om kontrollplansmallar till ett riskbaserat, projektspecifikt upplägg.</li>
<li>Utbilda personal i den nya strukturen och principskiftet till funktionskrav.</li>
<li>Byt ut referenser i avtal och AMA-hänvisningar från BBR/EKS till nya författningar.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ändrar inte reglerna åt dig, men verktygen gör det enklare att hålla dokumentationen aktuell och konsekvent. Med våra mallar för offert och ÄTA får du ett gemensamt underlag där du själv styr vilka regelhänvisningar och kontrollpunkter som ska med. När du uppdaterar en formulering behöver du bara göra det på ett ställe, i stället för i lösa Word-dokument per projekt. Se <a href="/sv/verktyg/ata-mall">vår ÄTA-mall</a> för att hålla ordning på ändrings- och tilläggsarbeten, och samla alla verktyg via <a href="/sv/verktyg">våra gratis verktyg</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Gäller gamla BBR fortfarande?</h3>
<p>Möjligheten att tillämpa äldre BBR och EKS på nya projekt upphörde den 1 juli 2026. Reglerna om energihushållning ligger dock kvar i BBR 31 tills den nya energiförfattningen träder i kraft den 1 oktober 2026. Kontrollera aktuellt läge hos Boverket.</p>
<h3>Måste jag följa svensk standard?</h3>
<p>De nya reglerna är funktionskrav och innehåller i huvudsak inte längre hänvisningar till specifika standarder. Du väljer lösning, men ska på vetenskaplig grund kunna visa att kraven uppfylls. En standard kan fortfarande vara ett bra sätt att visa det.</p>
<h3>Vad hände med EKS?</h3>
<p>EKS (BFS 2011:10) är upphävt i sin helhet genom de nya konstruktionsreglerna i BFS 2024:6, som fullt ut ersätter EKS.</p>
<h3>När kommer de nya energireglerna?</h3>
<p>En ny grundförfattning om energihushållning, samordnad med EU:s EPBD-direktiv, träder i kraft den 1 oktober 2026. Först då är samtliga BBR-regler ersatta. Bekräfta datum hos Boverket.</p>

<h2>Kom igång</h2>
<p>Börja med att uppdatera dina projektdokument så att de speglar 2026 års regelverk. Skapa ett rent underlag med <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a>, och boka en <a href="/sv/contact">demo</a> om du vill se hur ByggExp kan hålla mallar och dokumentation samlade. Kom ihåg: exakta datum och paragrafer kan ändras – bevaka alltid Boverkets och Arbetsmiljöverkets sidor.</p>

<p>Relaterat: <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06 – så väljer du rätt standardavtal</a> och <a href="/sv/blog/ata-arbeten">ÄTA-arbeten – så hanterar du ändringar och tillägg</a>.</p>
`;

const A_NYA_BYGGREGLER_2026_ENTREPRENAD: BlogPost = {
  _id: "code-"+"nya-byggregler-2026-entreprenad",
  title: "Nya byggregler 2026 för entreprenörer – detta ändras och vad du bör göra nu", slug: "nya-byggregler-2026-entreprenad", locale: "sv",
  excerpt: "En översikt av vad som ändras för entreprenörer 2026: Boverkets nya byggregler, riskbaserade kontrollplaner och Arbetsmiljöverkets omstrukturerade föreskrifter.", tag: "Regelverk",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_NYA_BYGGREGLER_2026_ENTREPRENAD_HTML,
  seoTitle: "Nya byggregler 2026 entreprenad | ByggExp", seoDescription: "Boverkets nya byggregler, PBL-kontrollplan och Arbetsmiljöverkets nya AFS 2023-serie – en översikt för entreprenörer 2026, med checklista och primärkällor.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:42:00.000Z", createdAt: "2026-08-19T05:42:00.000Z", updatedAt: "2026-08-19T05:42:00.000Z",
};

const A_NYA_3_12_REGLER_2026_HTML = `
<p>En ny, gemensam 3:12-modell för dig som äger ett byggföretag i aktiebolagsform har utretts och föreslagits. Reformen är dock <strong>ännu inte beslutad av riksdagen</strong> och föreslås träda i kraft 1 januari 2026, men är ännu inte beslutad av riksdagen. Enligt förslaget höjs grundbeloppet kraftigt, det tidigare kravet på eget löneuttag slopas och den så kallade 4-procentsspärren försvinner – men det tillkommer också nya begränsningar. Nedan går vi igenom de föreslagna beloppen och räknar på vad de skulle betyda för en typisk byggfirma. Observera att parametrarna kan ändras innan reformen antas.</p>

<p>Vill du snabbt kalkylera lön och utdelning för ditt bolag? Använd verktygen i <a href="/sv/verktyg">vår kostnadsfria verktygslåda för byggföretag -&gt;</a> som stöd innan du stämmer av med din redovisningskonsult.</p>

<h2>Vad är 3:12-reglerna – snabbrepetition för byggföretagaren</h2>
<p>3:12-reglerna styr hur du som delägare i ett fåmansföretag beskattas när du tar utdelning eller säljer dina aktier. Kärnan är ett <strong>gränsbelopp</strong>: den del av utdelningen som ryms inom gränsbeloppet beskattas med 20 procent i inkomstslaget kapital, medan överskjutande belopp beskattas som lön (tjänst) upp till ett tak. Skillnaden är stor – tjänstebeskattning kan landa på över 50 procent på marginalen. För en byggfirma som gått med bra vinst är det därför helt centralt att veta hur stort gränsbelopp du kan bygga upp varje år.</p>

<h2>Det stora skiftet – en modell istället för två</h2>
<p>I dag får du välja mellan förenklingsregeln (ett schablonbelopp) och huvudregeln (löneunderlagsberäkning). Enligt förslaget slås dessa ihop till <strong>en gemensam beräkning</strong>: gränsbeloppet skulle bestå av ett grundbelopp plus ett lönebaserat utrymme. Du skulle alltså inte längre behöva välja metod – alla räknar på samma sätt.</p>
<p>Reformen är ännu inte antagen. Den planeras träda i kraft 1 januari 2026 och gälla för beskattningsår som påbörjas efter den 31 december 2025. Det innebär att de nya reglerna – om de antas – skulle synas första gången på den K10 du lämnar våren 2027, tillsammans med inkomstdeklarationen 2027.</p>

<h2>Höjt grundbelopp – cirka 333 600 kr (4 IBB)</h2>
<p>Grundbeloppet föreslås höjas från 2,75 till 4 inkomstbasbelopp. Med inkomstbasbeloppet (IBB) för 2026 på 83 400 kr motsvarar det <strong>cirka 333 600 kr</strong> (4 × 83 400). Exakt belopp beror på vilket inkomstbasbelopp som gäller det år reglerna börjar tillämpas.</p>
<p>Viktigt att förstå: beloppet gäller <em>samtliga aktier i företaget</em> och fördelas efter ägarandel. Är du ensam ägare får du hela grundbeloppet. Äger du och en kompanjon 50 procent var får ni cirka 166 800 kr var. Detta är en tydlig förändring jämfört med dagens schablon och skulle gynna särskilt ensamägare och mindre byggbolag.</p>

<h2>Slopat löneuttagskrav och slopad 4-procentsspärr</h2>
<p>Det nuvarande kravet på eget löneuttag (6 IBB plus 5 procent av totala löner, alternativt 9,6 IBB) föreslås slopas. Du skulle alltså inte längre behöva ta ut en viss minimilön för att få räkna med det lönebaserade utrymmet. Även 4-procentsspärren – kravet att äga minst 4 procent av kapitalet – föreslås försvinna.</p>
<p>För hantverkaren som historiskt tagit låg lön låter detta som en ren förenkling. Men som vi ser nedan skulle det fortfarande finnas starka skäl att köra lön genom bolaget.</p>

<h2>Nytt lönebaserat utrymme – 50 % över 8 IBB</h2>
<p>Det lönebaserade utrymmet föreslås beräknas som <strong>50 procent av den del av din andel av lönesumman som överstiger 8 IBB</strong> (8 × 83 400 = 667 200 kr räknat på IBB för 2026). Formeln blir:</p>
<ul>
<li>Lönebaserat utrymme = 50 % × (din andel av bolagets kontanta löner − 667 200 kr)</li>
</ul>
<p>Ett tak kvarstår i förslaget: det lönebaserade utrymmet får aldrig överstiga <strong>50 gånger din egen (eller en närståendes) kontanta lön</strong>. Tar du själv ut för låg lön begränsar det alltså hur mycket löneutrymme du kan bygga, oavsett hur stora de totala lönerna är.</p>

<h2>Räkneexempel: så mycket skulle en byggföretagare kunna ta i lågbeskattad utdelning</h2>
<p><strong>Exempel 1 – enmansföretag utan anställda.</strong> Du äger 100 procent och har inga anställda utöver dig själv. Ditt gränsbelopp blir grundbeloppet: cirka 333 600 kr. Utdelning upp till det beloppet beskattas med 20 procent, det vill säga 66 720 kr i skatt. Enkelt och förutsägbart.</p>
<p><strong>Exempel 2 – byggbolag med anställda.</strong> Du äger 100 procent av ett bolag med fem anställda och en total kontant lönesumma på 3 500 000 kr. Lönebaserat utrymme = 50 % × (3 500 000 − 667 200) = 50 % × 2 832 800 = <strong>1 416 400 kr</strong>. Lägg till grundbeloppet cirka 333 600 kr så blir det totala gränsbeloppet omkring <strong>1 750 000 kr</strong>.</p>
<p>Kontrollera bara 50×-taket: tar du själv ut exempelvis 700 000 kr i lön är taket 35 000 000 kr, alltså inget hinder här. Tar du däremot bara 20 000 kr i lön blir taket 1 000 000 kr och begränsar då ditt lönebaserade utrymme. Det är just därför lönenivån fortfarande skulle spela roll.</p>

<h2>Skattenivåerna: 20 %, tjänst och 30 % över taket</h2>
<p>Utdelning eller kapitalvinst inom gränsbeloppet beskattas med 20 procent (tekniskt sett tas två tredjedelar upp och beskattas med 30 procent i kapital). Belopp <em>över</em> gränsbeloppet beskattas som tjänst upp till ett takbelopp. Enligt förslaget skulle takbeloppet vara 90 IBB för utdelning och 100 IBB för kapitalvinst – överstigande belopp beskattas med platt 30 procent i kapital i stället för som tjänst. Dessa parametrar kan ändras innan reformen är beslutad.</p>
<p>Har du sedan tidigare ett sparat utdelningsutrymme är avsikten att det ska följa med in i det nya systemet och fortsätta att räknas upp. Du skulle alltså inte förlora tidigare uppbyggt utrymme vid övergången.</p>

<h2>Detta bör du hålla koll på inför en möjlig reform</h2>
<ul>
<li>Se över din egen lönenivå – 8 IBB-avdraget i formeln och 50×-taket gör att lön fortfarande skulle vara relevant trots slopat löneuttagskrav.</li>
<li>Planera utdelningen utifrån bolagets resultat och ditt totala gränsbelopp.</li>
<li>Håll underlaget till din K10 uppdaterat så att du har rätt siffror när reglerna väl börjar gälla.</li>
<li>Följ riksdagens beslut – reformen är ännu inte antagen och beloppen kan justeras.</li>
<li>Stäm av med din redovisningskonsult innan du fastställer lön och utdelning.</li>
</ul>

<h2>Vanliga misstag att undvika</h2>
<ul>
<li>Att tro att lön blivit ointressant. Löneuttagskravet föreslås slopas, men 50×-taket och 8 IBB-avdraget gör att en rimlig egen lön ofta lönar sig ändå.</li>
<li>Att räkna grundbeloppet per person i stället för per bolag – grundbeloppet (cirka 333 600 kr) fördelas efter ägarandel.</li>
<li>Att utgå från att reglerna redan gäller – reformen är ännu inte beslutad och föreslås träda i kraft 1 januari 2026.</li>
<li>Att glömma bort sparat utdelningsutrymme från tidigare år.</li>
<li>Att fatta stora utdelningsbeslut utan att först kontrollera bolagets utdelningsbara medel och likviditet.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte din redovisningskonsult, men ger dig ordning på underlaget som besluten vilar på. I verktygslådan kan du räkna på lön kontra utdelning, och genom att hålla tidrapportering, projekt och fakturering samlade får du ett tydligare grepp om lönesumma och resultat – de siffror som direkt påverkar ditt gränsbelopp, både enligt dagens 3:12-regler och enligt de föreslagna. Bättre löpande koll gör det enklare att planera uttag i tid i stället för i efterhand.</p>

<h2>Vanliga frågor</h2>
<h3>Vad blir grundbeloppet enligt de nya 3:12-reglerna?</h3>
<p>Grundbeloppet föreslås höjas till 4 inkomstbasbelopp, vilket med IBB för 2026 (83 400 kr) motsvarar cirka 333 600 kr. Beloppet gäller samtliga aktier i bolaget och fördelas efter ägarandel. Exakt belopp beror på vilket år reglerna börjar tillämpas och vilket inkomstbasbelopp som då används.</p>
<h3>Måste jag ta ut lön för att använda det lönebaserade utrymmet?</h3>
<p>Nej, det formella löneuttagskravet föreslås slopas. Men eftersom det lönebaserade utrymmet enligt förslaget begränsas till 50 gånger din egen lön finns det i praktiken fortfarande skäl att ta ut en rimlig lön.</p>
<h3>När börjar de nya 3:12-reglerna gälla?</h3>
<p>Reformen är ännu inte beslutad av riksdagen. Den planeras träda i kraft 1 januari 2026 och gälla beskattningsår som påbörjas efter 31 december 2025, vilket innebär att den – om den antas – skulle synas första gången på K10 våren 2027. Fram till dess gäller nuvarande 3:12-regler.</p>
<h3>Vilken skatt betalar jag på utdelning inom gränsbeloppet?</h3>
<p>Utdelning inom gränsbeloppet beskattas med 20 procent. Belopp över gränsbeloppet beskattas som tjänst upp till takbeloppet, och däröver med 30 procent i kapital.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna på lön och utdelning i <a href="/sv/verktyg">ByggExps kostnadsfria verktygslåda</a>, och <a href="/sv/contact">boka en demo</a> om du vill se hur du får bättre koll på lönesumma och resultat i ett samlat system. Observera att detta är generell information om ett ännu ej beslutat förslag och inte skatterådgivning – stäm alltid av dina egna siffror med en redovisningskonsult.</p>

<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag – vad lönar sig?</a></p>
`;

const A_NYA_3_12_REGLER_2026: BlogPost = {
  _id: "code-"+"nya-3-12-regler-2026",
  title: "Nya 3:12-reglerna för byggföretag – förslaget inför 2026", slug: "nya-3-12-regler-2026", locale: "sv",
  excerpt: "En gemensam 3:12-modell har föreslagits men är ännu inte beslutad av riksdagen. Reformen planeras träda i kraft 1 januari 2027. Så skulle de föreslagna reglerna påverka en byggfirma.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_NYA_3_12_REGLER_2026_HTML,
  seoTitle: "Nya 3:12-reglerna för byggföretag | ByggExp", seoDescription: "De nya 3:12-reglerna för fåmansföretag är ännu inte beslutade och planeras träda i kraft 2027. Så skulle det föreslagna grundbeloppet och löneutrymmet påverka din byggfirma.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T06:00:00.000Z", createdAt: "2026-08-19T06:00:00.000Z", updatedAt: "2026-08-19T06:00:00.000Z",
};

const A_K10_BLANKETT_2026_HTML = `
<p>Driver du bygg genom ett eget aktiebolag är K10 en av de viktigaste blanketterna du lämnar – det är här du räknar ut hur mycket du kan ta ut som lågbeskattad utdelning. En sak förvirrar många direkt: <strong>K10-blanketten som lämnas i inkomstdeklarationen 2026 avser utdelning under inkomstår 2025</strong>. Planerar du i stället utdelning under 2026 kan helt nya 3:12-regler gälla – en reform har föreslagits träda i kraft 1 januari 2026 – och den K10:an lämnar du våren 2027. Den här guiden reder ut begreppen och tar dig igenom blanketten steg för steg.</p>

<p>Vill du snabbt räkna på lön, moms och marginaler i bolaget hittar du fler kalkylatorer och mallar i <a href="/sv/verktyg">vår gratis verktygslåda för byggföretag →</a>.</p>

<h2>Vad är K10 och när måste du lämna den?</h2>
<p>K10 lämnas av dig som äger <strong>kvalificerade andelar</strong> i ett fåmansföretag. Andelarna är kvalificerade om du eller någon närstående är <em>verksam i betydande omfattning</em> i bolaget – vilket i praktiken alltid gäller en hantverkare som jobbar i sitt eget AB. Blanketten styr fördelningen mellan kapitalbeskattad utdelning (20 %) och tjänstebeskattad utdelning enligt de så kallade 3:12-reglerna.</p>
<p>Är du en helt passiv ägare, utan att vara aktiv i verksamheten, är andelarna i stället okvalificerade. Då redovisar du på K12 och beskattas med 25 % (5/6 av 30 %). För den aktiva byggföretagaren är det alltså K10 som gäller.</p>
<p>Viktigt: lämna K10 <strong>även de år du inte tar någon utdelning</strong>. Annars förlorar du möjligheten att spara outnyttjat utrymme till kommande år – mer om det längre ner.</p>

<h2>Gränsbeloppet – hjärtat i K10</h2>
<p>Gränsbeloppet är det belopp du kan dela ut till bara 20 % skatt (kvoterat till 2/3 av den vanliga kapitalskatten på 30 %). Utdelning över gränsbeloppet beskattas i inkomstslaget tjänst upp till takbeloppet på 90 inkomstbasbelopp, och därutöver som kapital med 30 %. Kapitalvinst vid en framtida försäljning har ett eget tak på 100 inkomstbasbelopp.</p>
<p>Gränsbeloppet beräknas <strong>vid ingången av beskattningsåret (1 januari)</strong> och tillgodoräknas den som äger aktierna då. Köper du ett bolag under året får du inget gränsbelopp för det året – något att tänka på vid ägarskiften. För den K10 du lämnar 2026 räknar du fram gränsbeloppet på ett av två sätt: förenklingsregeln eller huvudregeln.</p>

<h2>Förenklingsregeln steg för steg</h2>
<p>Förenklingsregeln ger ett schablonbelopp på <strong>2,75 × inkomstbasbeloppet för året före beskattningsåret</strong>. För den K10 du lämnar 2026 – alltså utdelning under inkomstår 2025 – blir schablonbeloppet <strong>209 550 kr</strong> (2,75 × inkomstbasbeloppet för 2024).</p>
<p><strong>Viktigt inför 2026:</strong> Regeringen har i en lagrådsremiss (22 maj 2025) föreslagit helt nya 3:12-regler som föreslås träda i kraft 1 januari 2026. Förslaget slopar uppdelningen i förenklings- och huvudregel och ersätter schablonen med en enhetlig grundnivå på cirka fyra inkomstbasbelopp. Är reformen i kraft för inkomstår 2026 gäller andra belopp och en annan modell än beskrivningen nedan – kontrollera därför alltid vad som faktiskt gäller för ditt utdelningsår direkt hos Skatteverket innan du räknar på 2026.</p>
<p>Två regler är avgörande: du får bara använda förenklingsregeln i <strong>ett</strong> bolag per år, och beloppet fördelas efter din ägda andel av aktierna. Äger du halva bolaget får du halva schablonbeloppet. Regeln passar särskilt soloföretagaren med låg lön, eftersom du får ett rejält gränsbelopp utan att behöva uppfylla något löneuttagskrav.</p>

<h2>Huvudregeln steg för steg</h2>
<p>Huvudregeln kan ge betydligt högre gränsbelopp om bolaget har anställda och betalar ut löner. Gränsbeloppet består av två delar:</p>
<ol>
<li><strong>Omkostnadsbelopp × (statslåneräntan 30 nov året före + 9 procentenheter)</strong> – en avkastning på ditt satsade kapital.</li>
<li><strong>Lönebaserat utrymme</strong> = 50 % av samtliga kontanta löner i bolaget (och dotterbolag) året före. Observera: bara kontant ersättning räknas, inte förmåner.</li>
</ol>
<p>För att få använda det lönebaserade utrymmet måste du eller en närstående ha tagit ut tillräcklig lön året före – det så kallade <strong>löneuttagskravet</strong>. Kravlönen är det lägsta av 6 IBB + 5 % av totala kontanta löner, eller 9,6 IBB. För den K10 du lämnar 2026 (utdelning inkomstår 2025, baserat på löner 2024) gäller:</p>
<ul>
<li><strong>Utdelning inkomstår 2025</strong> (löner 2024): lägst av 457 200 kr + 5 % av totala kontanta löner, eller 731 520 kr.</li>
</ul>
<p>Missar du kravlönen med en enda krona faller hela det lönebaserade utrymmet – kolla därför ditt eget löneuttag i god tid före årsskiftet. Planerar du utdelning för inkomstår 2026 kan den aviserade reformen ändra både kravlönen och det lönebaserade utrymmet – utgå inte från siffrorna ovan för 2026 utan att stämma av med Skatteverket.</p>

<h2>Förenkling vs huvudregel – vilken väljer du?</h2>
<p>Du får inte kombinera reglerna samma år för samma bolag – du väljer den som ger högst gränsbelopp. En enkel tumregel:</p>
<ul>
<li><strong>Ensam hantverkare med låg lön</strong> → förenklingsregeln ger oftast mest.</li>
<li><strong>Bolag med anställda där du tar ut kravlön</strong> → huvudregeln lönar sig ofta, eftersom det lönebaserade utrymmet kan bli stort.</li>
</ul>
<p><strong>Räkneexempel (inkomstår 2025):</strong> Ett hantverkar-AB betalade under 2024 ut totalt 2 000 000 kr i kontanta löner. Ägaren tog själv ut 700 000 kr och klarar därmed kravlönen (lägst av 457 200 + 5 % av 2 000 000 = 557 200 kr, eller 731 520 kr → kravet är 557 200 kr). Det lönebaserade utrymmet blir 50 % × 2 000 000 = 1 000 000 kr, långt över förenklingsregelns 209 550 kr. Här vinner huvudregeln stort. En ensam ägare utan anställda och med 300 000 kr i lön klarar inte kravlönen alls – då är förenklingsregeln rätt val. Observera att denna två-regel-modell kan ersättas av en enhetlig beräkning om den aviserade 3:12-reformen är i kraft för ditt utdelningsår.</p>

<h2>Sparat utdelningsutrymme</h2>
<p>Utnyttjar du inte hela gränsbeloppet ett år sparas resten som <strong>sparat utdelningsutrymme</strong>. Det rullar vidare och räknas årligen upp med statslåneräntan (30 nov året före) + 3 procentenheter. Utrymmet är knutet till aktierna och följer med vid till exempel arv eller gåva. Det är precis därför du ska lämna K10 varje år, även utan utdelning – annars byggs inget utrymme upp och du kan gå miste om lågbeskattad utdelning längre fram.</p>

<h2>Vanliga fallgropar och checklista</h2>
<ul>
<li>Blanda ihop utdelningsår och deklarationsår – dubbelkolla vilket inkomstår din utdelning avser.</li>
<li>Räkna schablonbeloppet på fel inkomstbasbelopp (det ska vara året <em>före</em> beskattningsåret).</li>
<li>Missa kravlönen och tappa hela det lönebaserade utrymmet.</li>
<li>Ta med förmåner i löneunderlaget – bara kontant lön räknas.</li>
<li>Hoppa över K10 ett år utan utdelning och därmed slarva bort sparat utrymme.</li>
<li>Utgå från 2025 års regler och belopp för utdelning under 2026 – nya 3:12-regler har föreslagits träda i kraft 1 januari 2026.</li>
</ul>
<p><strong>Checklista innan du fyller i:</strong> fastställ ägarandel per 1 januari, samla ihop bolagets kontanta löner året före, kontrollera ditt eget löneuttag mot kravlönen, hämta rätt statslåneränta och räkna båda reglerna – välj sedan den som ger högst gränsbelopp.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp är byggd för att hålla ordning på det underlag K10 vilar på: bolagets löneutbetalningar, ditt eget uttag och resultatet över tid. När du fakturerar, tidrapporterar och följer marginalerna löpande i systemet har du siffrorna framme när det är dags att räkna gränsbelopp och stämma av kravlönen – i stället för att leta i pärmar vid deklarationen. Vår <a href="/sv/verktyg">verktygslåda</a> hjälper dig räkna på lön och moms, men själva K10-blanketten fyller du i via Skatteverket och tar din revisor eller redovisningskonsult till hjälp när det behövs.</p>

<h2>Vanliga frågor</h2>
<h3>Avser K10 blankett 2026 utdelning 2025 eller 2026?</h3>
<p>K10 som lämnas i inkomstdeklarationen 2026 avser utdelning under inkomstår 2025, med ett schablonbelopp på 209 550 kr enligt förenklingsregeln. Utdelning som beslutas under 2026 redovisas i stället på K10 våren 2027 – men observera att nya 3:12-regler har föreslagits träda i kraft 1 januari 2026 och kan ändra beräkningen. Verifiera alltid vad som gäller för 2026 hos Skatteverket.</p>
<h3>Måste jag lämna K10 om jag inte tar någon utdelning?</h3>
<p>Ja, det bör du. Lämnar du K10 även utan utdelning byggs och bevaras ditt sparade utdelningsutrymme, som räknas upp varje år. Hoppar du över blanketten riskerar du att förlora lågbeskattat utrymme som du kunnat använda senare.</p>
<h3>Vilken regel ger högst gränsbelopp – förenkling eller huvudregeln?</h3>
<p>Under nuvarande regler beror det på bolaget. En ensam hantverkare med låg lön får oftast mest genom förenklingsregeln. Har bolaget anställda och du tar ut kravlön kan huvudregelns lönebaserade utrymme (50 % av kontanta löner) ge betydligt mer. Räkna alltid båda och välj den högre. Tänk på att uppdelningen i två regler kan ersättas av en enhetlig beräkning om den aviserade 3:12-reformen är i kraft för ditt utdelningsår.</p>
<h3>Vad händer med utdelning över gränsbeloppet?</h3>
<p>Inom gränsbeloppet beskattas utdelningen med 20 %. Belopp däröver beskattas i tjänst upp till takbeloppet på 90 inkomstbasbelopp, och därutöver som kapital med 30 %.</p>

<h2>Kom igång</h2>
<p>Börja med att samla underlaget och räkna igenom båda reglerna – och verifiera alltid årets exakta belopp och statslåneränta direkt hos Skatteverket. Håll särskilt koll på den aviserade 3:12-reformen, som regeringen föreslagit ska träda i kraft 1 januari 2026 och som slopar uppdelningen i förenklings- och huvudregel till förmån för en enhetlig grundnivå. Räkna på lön och marginaler i <a href="/sv/verktyg">vår verktygslåda</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du håller bolagets siffror i ordning inför deklarationen.</p>
<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag?</a></p>
`;

const A_K10_BLANKETT_2026: BlogPost = {
  _id: "code-"+"k10-blankett-2026",
  title: "K10-blanketten 2026 – gränsbelopp och utdelning i byggbolaget", slug: "k10-blankett-2026", locale: "sv",
  excerpt: "K10-blanketten 2026 avser utdelning under inkomstår 2025. Så räknar du gränsbeloppet med förenklings- och huvudregeln – plus den aviserade 3:12-reformen.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/moms-preview.webp", contentHtml: A_K10_BLANKETT_2026_HTML,
  seoTitle: "K10 blankett 2026 – gränsbelopp för byggföretag | ByggExp", seoDescription: "Så fyller du i K10-blanketten 2026 (inkomstår 2025): gränsbelopp, förenklingsregeln 209 550 kr, huvudregeln och kravlön – guide för byggföretagare.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/moms-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T06:03:00.000Z", createdAt: "2026-08-19T06:03:00.000Z", updatedAt: "2026-08-19T06:03:00.000Z",
};

// Keyed by locale — Swedish-market articles only exist on sv.
const CODE_ARTICLES: Record<BlogLocale, BlogPost[]> = {
  sv: [
    A_NYA_3_12_REGLER_2026,
    A_K10_BLANKETT_2026,
    A_HAVNING_AV_ENTREPRENAD,
    A_ARBETSTIDSLAGEN_BYGG,
    A_FORSENINGSVITE_ENTREPRENAD,
    A_NYA_ASBESTREGLER_2026,
    A_FALLSKYDD_KRAV_BYGG,
    A_ANSTALLNINGSAVTAL_MALL_BYGG,
    A_MILERSATTNING_2026,
    A_YRKESBEVIS_BYGG_LARLING,
    A_HITTA_KUNDER_BYGGFIRMA,
    A_BYGGFAKTURA_CHECKLISTA_ROT,
    A_JUSTERAT_FORMANSVARDE_SERVICEBIL,
    A_KMA_PLAN_MALL,
    A_NYA_GRANSVARDEN_2026_DIISOCYANATER,
    A_BOVERKETS_NYA_BYGGREGLER_2026_KONTROLLPLAN,
    A_NYA_BYGGREGLER_2026_ENTREPRENAD,
    A_BERAKNA_MATERIALATGANG_TAK,
    A_FONSTER_U_VARDE_2026,
    A_ARBETSMILJOVERKET_NYA_REGLER_2026_BYGG,
    A_VATRUMSCERTIFIKAT_BEHORIGHET_GVK,
    A_FACTORING_BYGGFORETAG,
    A_ROTAVDRAG_2026_NYA_REGLER_FORETAG,
    A_AVDRAG_ENSKILD_FIRMA_BYGG,
    A_AVDRAG_ARBETSKLADER_VERKTYG,
    A_REPRESENTATIONSAVDRAG_2026,
    A_SERVICEBIL_ELLER_FORMANSBIL,
    A_DEBITERA_SERVICEBIL_ROT,
    A_LEVERANTORSFAKTURA_BYGG_PROJEKT,
    A_PERIODISERINGSFOND_BYGGBOLAG,
    A_BERAKNA_BETONGATGANG_PLATTA,
    A_GANTT_SCHEMA_MALL_BYGG,
    A_ATA_HANTERING_MALL,
    A_INHYRD_PERSONAL_REGLER,
    A_UPPSAGNING_ARBETSBRIST_BYGG,
    A_SJUKLON_KARENSAVDRAG_VAB_BYGGFORETAG,
    A_STARTA_BYGGFORETAG_2026,
    A_ENTREPRENADKONTRAKT_MALL,
    A_KONTROLLPLAN_MALL_BYGGLOV,
    A_DROJSMALSRANTA_2026,
    A_SPILLPROCENT_BYGG_MATERIAL,
    A_BOKFORING_ENSKILD_FIRMA_BYGG,
    A_BYGGSTALLNING_REGLER_KRAV,
    A_TRAKTAMENTE_BYGGNADSARBETARE_2026,
    A_ANLITA_UNDERENTREPRENOR,
    A_A_CONTO_FAKTURERING_BYGG,
    A_ENTREPRENORSANSVAR_LON,
    A_FAST_PRIS_ELLER_LOPANDE_RAKNING,
    A_TACKNINGSBIDRAG_BYGGFORETAG,
    A_REKLAMATION_HANTVERKSTJANST_FRISTER,
    A_KONTROLLANSVARIG_NAR_BEHOVS,
    A_BYGGMOTESPROTOKOLL_MALL,
    A_OVERLAMNING_RELATIONSHANDLINGAR,
    A_KVARTSDAMM_REGLER_BYGG,
    VADKOST,
    LIKVID,
    ANSTALLA,
    ENSKILD,
    BETVILLK,
    KONTRAVG,
    BASPBASU,
    GARANTI,
    ABS18,
    KUNDEN,
    MANGD,
    MUNTLIGT,
    ARBMILJO,
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
