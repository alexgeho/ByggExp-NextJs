import type { BlogPost } from '../../types/blog';
import { SITE_URL } from './site-url';

const PERSONALLIGGARE_HTML = `
<p>Personalliggare är ett lagkrav i byggbranschen – och att sköta den slarvigt kan bli dyrt. Ett oanmält besök från Skatteverket där personer saknas i liggaren kostar direkt i kontrollavgift. Här går vi igenom vem som måste ha personalliggare, vad som ska registreras, vad ett misstag kostar och hur du sköter den digitalt utan krångel.</p>
<figure class="article-diagram"><img src="/landing/diagrams/personalliggare.webp" alt="Diagram: personalliggare – vilka som ska registreras och Skatteverkets kontrollavgifter" width="720" height="380" loading="lazy"><figcaption>Alla på plats registreras – även UE och inhyrda. Vid brist: 12 500 kr plus 2 500 kr per oregistrerad person.</figcaption></figure>

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
<p>Slipp papperslistor och kontrollavgifter. Registrera närvaron digitalt, kopplad till projektet, och ha allt redo för Skatteverket. Läs om <a href="/sv/blog/personalliggare-bygg-app">personalliggare som app</a>, <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">se hur närvaro fungerar i ByggExp</a> eller <a href="/sv/contact">boka en demo</a>.</p>
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

const ID06_HTML = `
<p>Nästan alla på ett bygge har ett ID06-kort i fickan – men få vet exakt vad det är, vad det krävs för och om det ens är ett lagkrav. Här reder vi ut vad ID06 är, vad det används till och hur det hänger ihop med personalliggaren.</p>
<figure class="article-diagram"><img src="/landing/diagrams/id06.webp" alt="Diagram: ID06 används för identitet, närvaroregistrering, kompetens och access" width="720" height="380" loading="lazy"><figcaption>ID06 används för identitet, närvaro (personalliggare), kompetens och access – men är inte ett lagkrav i sig.</figcaption></figure>

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

const A_KONTROLLANSVARIG_NAR_BEHOVS_HTML = `
<p>Kontrollansvarig (KA) krävs i praktiken för åtgärder som behöver bygglov, rivningslov eller marklov – men inte för anmälningspliktiga åtgärder, attefallshus och komplementbyggnader. Sedan 1 december 2025 räknar <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-byggforordning-2011338_sfs-2011-338/" target="_blank" rel="noopener noreferrer">plan- och byggförordningen 7 kap. 5 §</a> upp elva undantag. Nämnden kan ändå kräva KA i de flesta av dem, och vem som är KA fastställs i <a href="/sv/blog/startbesked-bygglov-process-2026">startbeskedet</a>.</p>

<h2>Huvudregeln: KA följer kontrollplanen</h2>
<p>Enligt <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/" target="_blank" rel="noopener noreferrer">plan- och bygglagen (PBL) 10 kap. 9 §</a> ska det finnas en eller flera kontrollansvariga för den kontroll som omfattas av en kontrollplan eller avfallshanteringsplan. Kontrollplan krävs i sin tur för åtgärder som behöver startbesked, alltså lov- eller anmälningspliktiga åtgärder (10 kap. 3 och 6 §§). Undantagen ligger på två ställen:</p>
<ul>
<li><strong>PBL 10 kap. 10 §</strong> – små ändringar av en- eller tvåbostadshus, om byggnadsnämnden inte beslutar annat.</li>
<li><strong>PBF 7 kap. 5 §</strong> – en lista med andra åtgärder där KA inte krävs.</li>
</ul>
<p>Formuleringen ”för den kontroll som omfattas av … avfallshanteringsplan” kom in i lagen den 1 juli 2026 (SFS 2026:712). Samtidigt fick KA nya uppgifter kring avfall och återanvändbara byggprodukter.</p>

<h2>Åtgärd för åtgärd: krävs KA?</h2>
<div class="article-table"><table>
<thead><tr><th>Åtgärd</th><th>KA krävs?</th><th>Grund</th></tr></thead>
<tbody>
<tr><td>Nytt en- eller tvåbostadshus, även fritidshus</td><td>Ja</td><td>Bygglov (PBL 9 kap. 3 §) → kontrollplan → 10 kap. 9 §</td></tr>
<tr><td>Flerbostadshus, lokaler, byggnad med fler än två våningar</td><td>Ja, och ofta behörighet K</td><td>10 kap. 9 §</td></tr>
<tr><td>Tillbyggnad av villa som kräver bygglov</td><td>Ja, om den inte räknas som liten ändring</td><td>10 kap. 9–10 §§</td></tr>
<tr><td>Tillbyggnad högst 30 m² brutto, under taknocken</td><td>Nej – bygglovsfri</td><td>PBL 9 kap. 10 §, PBF 7 kap. 5 § p. 1</td></tr>
<tr><td>Ändrad användning som kräver bygglov</td><td>Ja, som huvudregel</td><td>PBL 9 kap. 15 §, 10 kap. 9 §</td></tr>
<tr><td>Rivning av byggnad i detaljplan som kräver rivningslov</td><td>Ja, som huvudregel</td><td>PBL 9 kap. 43 §</td></tr>
<tr><td>Anmälningspliktig åtgärd: bärande konstruktion, brandskydd, eldstad, ventilation, VA, hiss</td><td>Nej, om nämnden inte beslutar annat</td><td>PBF 6 kap. 1 §, 7 kap. 5 § p. 2</td></tr>
<tr><td>Attefallshus, garage, förråd (komplementbyggnad eller komplementbostadshus)</td><td>Nej, om nämnden inte beslutar annat</td><td>PBF 7 kap. 5 § p. 3</td></tr>
<tr><td>Inreda ytterligare en bostad i ett enbostadshus</td><td>Nej, om nämnden inte beslutar annat</td><td>PBF 7 kap. 5 § p. 4</td></tr>
<tr><td>Mur, plank eller altan</td><td>Nej, om nämnden inte beslutar annat</td><td>PBF 7 kap. 5 § p. 6</td></tr>
<tr><td>Skylt eller ljusanordning</td><td>Nej, om nämnden inte beslutar annat</td><td>PBF 7 kap. 5 § p. 5</td></tr>
<tr><td>Åtgärd utan krav på lov eller anmälan</td><td>Nej – nämnden kan inte heller kräva det</td><td>PBF 7 kap. 5 § p. 1</td></tr>
</tbody>
</table></div>
<p>Boverket skriver i <a href="https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollansvariga-och-deras-uppgifter/" target="_blank" rel="noopener noreferrer">PBL kunskapsbanken</a> att nämnden bara bör kräva KA för en anmälningspliktig åtgärd om den är komplicerad och byggherren inte bedöms klara sitt ansvar utan stöd. Nämndens bedömning av om KA ska krävas får inte överklagas.</p>
<p>Raderna om lovfria åtgärder gäller inte överallt. Enligt PBL 9 kap. 34–37 §§ kan bygglov krävas ändå, till exempel genom områdesbestämmelser eller i särskilt värdefulla miljöer. Då följer KA-frågan lovet.</p>

<h2>Vem kan vara KA – och vem kan inte</h2>
<p>En KA är enligt PBL 1 kap. 8 § en fysisk person med certifikat och ”en självständig ställning i förhållande till den som utför den åtgärd som ska kontrolleras”. Boverket preciserar vad det innebär:</p>
<ul>
<li>KA och de som utför arbetet <strong>kan inte arbeta i samma företag</strong>. Samma koncern eller företagsgrupp går däremot.</li>
<li>KA bör inte vara nära släkt med, eller anställd av, den som utför åtgärden (make, maka, sambo, förälder, barn eller syskon räknas som nära släkt).</li>
<li>Byggherren själv, projektören eller en anställd hos byggherren <strong>kan</strong> vara KA – så länge de inte själva utför det som kontrolleras.</li>
<li>Om åtgärden omfattas av obligatorisk sakkunnigkontroll får KA inte tidigare ha varit delaktig i projektet (10 kap. 11 a §, ny från 1 juli 2026).</li>
</ul>
<p>För ett byggföretag betyder det konkret: bygger ni villan kan ingen hos er vara KA för den. Kunden behöver en extern KA, och det lönar sig att säga det redan i offerten.</p>

<h2>Behörighet N eller K</h2>
<p>Certifiering sker enligt Boverkets föreskrifter BFS 2011:14 och gäller i fem år. Det finns två behörigheter:</p>
<div class="article-table"><table>
<thead><tr><th>Behörighet</th><th>Typiska projekt enligt Boverket</th></tr></thead>
<tbody>
<tr><td>N – normal art</td><td>Nybyggnad, tillbyggnad, ombyggnad eller rivning av en- eller tvåbostadshus</td></tr>
<tr><td>K – komplicerad art</td><td>Byggnader med fler än två våningar, kabinbanor, radio- och telemaster, vindkraftverk</td></tr>
</tbody>
</table></div>
<p>Två organ certifierar kontrollansvariga i dag: RISE och Kiwa. På deras webbplatser går det att söka fram en KA och se behörighet och hur länge certifikatet gäller. Kontrollera giltighetstiden mot projektets längd – byggnadsnämnden måste kunna godta en KA med giltigt certifikat både vid lov och startbesked.</p>

<h2>Vad KA gör, steg för steg</h2>
<p>Uppgifterna står i PBL 10 kap. 11 § och gäller sedan 1 juli 2026 i denna lydelse:</p>
<ol>
<li>Biträda byggherren med förslag till kontrollplan och med att identifiera avfall och återanvändbara byggprodukter.</li>
<li>Se till att kontrollplanen, bestämmelserna och villkoren följs och att kontrollerna blir gjorda.</li>
<li>Informera byggherren om avvikelser och vid behov meddela byggnadsnämnden.</li>
<li>Närvara vid tekniskt samråd, besiktningar, andra kontroller och nämndens arbetsplatsbesök.</li>
<li>Lämna protokoll från arbetsplatsbesök till eventuella sakkunniga.</li>
<li>Dokumentera egna byggplatsbesök och notera iakttagelser inför slutbeskedet.</li>
<li>Lämna ett utlåtande, med eventuella sakkunnigutlåtanden, till byggherren och nämnden som underlag för slutbesked.</li>
<li>Meddela nämnden om uppdraget lämnas.</li>
</ol>
<p>KA behöver alltså inte själv utföra kontrollerna. Egenkontrollerna görs av er som utför arbetet (se <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a>) och redovisas mot kontrollplanen – den <a href="/sv/verktyg/kontrollplan-mall">kontrollplan-mallen</a> visar hur punkterna brukar ställas upp, och <a href="/sv/blog/kontrollplan-mall-bygglov">guiden om kontrollplan för bygglov</a> går igenom innehållet.</p>

<h2>Vad kostar en kontrollansvarig?</h2>
<p>Det finns inget reglerat pris – KA är ett civilrättsligt uppdrag mellan byggherren och KA. Offerten styrs av hur många av momenten ovan som ingår och hur långt bort bygget ligger. Be om ett pris per moment, så går offerter att jämföra:</p>
<div class="article-table"><table>
<thead><tr><th>Moment i offerten</th><th>Antal</th><th>Timmar (exempel)</th></tr></thead>
<tbody>
<tr><td>Förslag till kontrollplan och avfallsinventering</td><td>1</td><td>4</td></tr>
<tr><td>Tekniskt samråd</td><td>1</td><td>2</td></tr>
<tr><td>Arbetsplatsbesök inkl. dokumentation</td><td>4</td><td>3 per besök = 12</td></tr>
<tr><td>Slutsamråd</td><td>1</td><td>2</td></tr>
<tr><td>Utlåtande inför slutbesked</td><td>1</td><td>3</td></tr>
<tr><td><strong>Summa</strong></td><td></td><td><strong>23 timmar + resor</strong></td></tr>
</tbody>
</table></div>
<p>Med ett antaget timpris på 1 000 kr exkl. moms blir det 23 000 kr plus restid. Byt ut timpriset mot offertens. Det som oftast skiljer offerter åt är antalet arbetsplatsbesök – fråga hur många som ingår och vad ett extra besök kostar. Är priset fast, se till att det står vad som gäller om tidplanen drar ut.</p>

<h2>Byta kontrollansvarig</h2>
<p>En KA som lämnar uppdraget ska meddela byggnadsnämnden. Byggherren föreslår då en ny KA och nämnden utser den (10 kap. 11 c §). Om KA inte sköter uppgifterna ska byggherren omedelbart meddela nämnden (11 b §), som kan entlediga KA och underrätta certifieringsorganet (11 kap. 35 §). Föreslår byggherren ingen ny KA kan nämnden enligt Boverket förbjuda att arbetet fortsätter.</p>

<h2>Byggbedömare – ny aktör, inte i bruk ännu</h2>
<p>Från 1 juli 2026 finns byggbedömare i PBL: certifierade företag som ska kunna kontrollera både projektering och utförande av vissa nybyggnader. Kontrollplan krävs inte för utförande som omfattas av en byggbedömares kontroll. Enligt <a href="https://www.boverket.se/sv/om-boverket/boverkets-uppdrag-och-styrning/aktuella-uppdrag/effektiv-och-saker-byggprocess/" target="_blank" rel="noopener noreferrer">Boverkets tidplan</a> beslutas föreskrifterna tidigast hösten 2027, och därefter tar ackrediteringen av certifieringsorgan strax under ett år. För projekt som startar nu gäller KA-systemet.</p>

<h2>Vanliga frågor</h2>
<h3>När behövs en kontrollansvarig?</h3>
<p>När åtgärden kräver bygglov, rivningslov eller marklov och inte finns bland undantagen i PBF 7 kap. 5 §. Typexemplet är ett nytt bostadshus. Anmälningspliktiga åtgärder, attefallshus och komplementbyggnader kräver normalt ingen KA.</p>
<h3>Behövs kontrollansvarig för fritidshus?</h3>
<p>Ja, om fritidshuset är en ny huvudbyggnad som kräver bygglov. Ett fritidshus är normalt ett en- eller tvåbostadshus, och då räcker behörighet N.</p>
<h3>Kan vårt byggföretag vara kontrollansvarig för huset vi bygger?</h3>
<p>Nej. KA och de som utför arbetet får inte arbeta i samma företag. Byggherren själv eller en anställd hos byggherren kan däremot vara KA, om de är certifierade och inte utför det som kontrolleras.</p>
<h3>Vad kostar en kontrollansvarig?</h3>
<p>Priset är inte reglerat utan sätts i offerten. Det beror på antal arbetsplatsbesök, samråd, restid och om KA tar fram förslaget till kontrollplan. Jämför offerter per moment, inte bara totalsumma.</p>
<h3>Hur byter man kontrollansvarig?</h3>
<p>Byggherren föreslår en ny KA till byggnadsnämnden, som fattar beslut. Den gamla KA ska själv meddela nämnden när uppdraget lämnas.</p>
<h3>Vad är skillnaden mellan N- och K-behörighet?</h3>
<p>N gäller projekt av normal art, till exempel en- och tvåbostadshus. K gäller komplicerad art, till exempel byggnader med fler än två våningar, master och vindkraftverk.</p>
`;

const A_KONTROLLANSVARIG_NAR_BEHOVS: BlogPost = {
  _id: "code-"+"kontrollansvarig-nar-behovs",
  title: "Kontrollansvarig – när behövs det och vad kostar det?", slug: "kontrollansvarig-nar-behovs", locale: "sv",
  excerpt: "När PBL kräver kontrollansvarig efter ändringarna 1 december 2025 och 1 juli 2026, vem som får vara KA, N- eller K-behörighet och hur en KA-offert byggs upp.", tag: "Bygglov",
  coverImageUrl: "/landing/features/5planering.webp", contentHtml: A_KONTROLLANSVARIG_NAR_BEHOVS_HTML,
  seoTitle: "Kontrollansvarig – när krävs KA och vad kostar det? | ByggExp", seoDescription: "Tabell över vilka åtgärder som kräver KA enligt PBL 10 kap. 9 § och PBF 7 kap. 5 §, vem som får vara KA, N/K-behörighet, uppgifter och offert.",
  seoImageUrl: `${SITE_URL}/landing/features/5planering.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:18:00.000Z", createdAt: "2026-08-18T18:18:00.000Z", updatedAt: "2026-10-14T12:00:00.000Z",
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
<p>En kontrollansvarig (KA) krävs inte för enklare åtgärder. Det gäller exempelvis anmälningspliktiga åtgärder (som VA eller eldstad), komplementbyggnader och komplementbostadshus (tidigare attefallshus) samt små ändringar av småhus (PBF 7 kap. 5 §). I dessa enkla ärenden skriver byggherren – eller den anlitade hantverkaren – kontrollplanen själv. Kommunerna kallar det ofta en <strong>enkel kontrollplan enligt PBL 10 kap. 6–8 §§</strong>.</p>
<p>För dig som hantverkare betyder det en konkret möjlighet. I stället för att kunden ska anlita en KA för ett enkelt jobb kan du leverera en korrekt kontrollplan som en del av uppdraget. Det höjer värdet på din offert och gör hela processen smidigare mot kommunen. Kravet är att planen faktiskt är anpassad till projektet – inte en tom standardmall. Fyll i <a href="/sv/verktyg/egenkontroll-mall">mallen och ladda ner planen som PDF →</a> med kontrollpunkter som passar just den åtgärd du utför.</p>

<h2>Nytt 2026: kontrollplan och avfallshanteringsplan är nu två dokument</h2>
<p>Från och med 1 juli 2026 har reglerna ändrats på en viktig punkt. Den gamla kontrollplanen har delats upp i två separata dokument: en <strong>kontrollplan</strong> och en fristående <strong>avfallshanteringsplan</strong>. Avfallshantering är alltså inte längre en sektion inuti kontrollplanen, utan ett eget dokument.</p>
<p>Reformen 2026 innebär också att vissa åtgärder får <strong>obligatorisk sakkunnigkontroll</strong>, och att byggnadsnämnden får ett nytt verktyg – <strong>kontrollföreläggande</strong> – för att kunna förelägga att kontroller genomförs. Det här är själva anledningen till att äldre mallar på nätet är föråldrade: de har fortfarande avfallshanteringen inbakad i kontrollplanen. Använd en uppdaterad mall så att du inte lämnar in en plan enligt gammalt regelverk.</p>

<h2>Så fyller du i kontrollplanen steg för steg</h2>
<p>En bra kontrollplan är byggd som en tabell med tydliga kolumner. För varje rad anger du:</p>
<ol>
<li><strong>Kontrollpunkt</strong> – vad som kontrolleras (till exempel grundläggning, fuktskydd, bärande konstruktion, brandskydd).</li>
<li><strong>Hur kontrolleras</strong> – metod, exempelvis okulär kontroll, mätning eller provning.</li>
<li><strong>Mot vilket krav</strong> – Boverkets byggregler (t.ex. BFS 2024:7 om brand och BFS 2024:8 om fukt och hygien, som ersatte BBR 1 juli 2025), Boverkets konstruktionsregler BFS 2024:6 (som ersatte EKS)/Eurokod, energikraven i BBR, bygglovet eller ritningen.</li>
<li><strong>Vem</strong> – egenkontroll av byggherren/entreprenören eller sakkunnigkontroll.</li>
<li><strong>Resultat och signatur</strong> – utfallet och underskrift av den som kontrollerat.</li>
</ol>
<p>Så här kan några rader se ut för en typisk tillbyggnad:</p>
<ul>
<li><strong>Grundläggning</strong> – okulär kontroll och mätning mot konstruktionsritning (BFS 2024:6) – egenkontroll – signatur.</li>
<li><strong>Fuktskydd mot mark</strong> – okulär kontroll mot BFS 2024:8 (fuktsäkerhet) och ritning – egenkontroll – signatur.</li>
<li><strong>Bärande stomme</strong> – kontroll mot konstruktionsritning och BFS 2024:6 – egenkontroll eller sakkunnig beroende på risk – signatur.</li>
<li><strong>Lufttäthet och isolering</strong> – kontroll mot energikraven i BBR avsnitt 9 (ersätts 1 oktober 2026 av BFS 2026:9) och ritning – egenkontroll – signatur.</li>
</ul>
<p>Har bygglovsansökan eller anmälan kommit in före 1 juli 2026 får de äldre reglerna (BBR/EKS) fortfarande tillämpas – men gamla och nya regler får inte blandas i samma projekt, så hänvisa konsekvent till ett regelverk i kontrollplanen.</p>
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
<p>Nej, inte för enkla åtgärder som anmälningspliktiga installationer, komplementbyggnader och komplementbostadshus (tidigare attefallshus) och små ändringar av småhus. Då kan byggherren eller den anlitade hantverkaren skriva en enkel kontrollplan själv enligt PBL 10 kap. 6–8 §§. För större och mer komplexa projekt krävs en KA.</p>
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
  publishedAt: "2026-08-18T18:33:00.000Z", createdAt: "2026-08-18T18:33:00.000Z", updatedAt: '2026-10-08T09:00:00.000Z',
};

const A_VATRUMSCERTIFIKAT_BEHORIGHET_GVK_HTML = `
<p>Inget våtrumscertifikat är lagkrav. Boverkets fuktregler – i dag <a href="https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf" target="_blank" rel="noopener noreferrer">BFS 2024:8, 7 kap. 7–8 §§</a>, som ersatte BBR avsnitt 6:5 när övergångstiden gick ut 30 juni 2026 – ställer funktionskrav på tätskiktet: det ska vara vattentätt, tätt i skarvar och genomföringar, ha rätt ånggenomgångsmotstånd och vara åldersbeständigt. Vem som utför arbetet säger föreskrifterna ingenting om. Kravet på behörighet kommer i stället från försäkringsbolagen, beställarna och branschorganisationerna – och där är det i praktiken svårt att klara sig utan.</p>

<h2>Varför försäkringen styr</h2>
<p>Enligt <a href="https://www.konsumenternas.se/forsakringar/boendeforsakringar/villaforsakringar/vattenskador/" target="_blank" rel="noopener noreferrer">Konsumenternas</a> kräver försäkringsbolagen normalt att de branschregler som gällde när våtrummet byggdes eller renoverades har följts för att en vattenskada ska ersättas, och kunden kan behöva visa ett våtrumsintyg från en behörig hantverkare. Villkoren skiljer sig mellan bolagen – vissa ersätter ändå, men ofta med högre självrisk. För dig som hantverkare betyder det att kunden i praktiken köper dokumentationen lika mycket som arbetet.</p>

<h2>Tre system för tre moment</h2>
<p>Ett badrum består av rörinstallation, tätskikt och ytskikt, och varje del har sitt eget branschsystem. Gemensamt för alla tre är att det är <strong>företaget</strong> som auktoriseras eller blir behörigt, medan personerna har behörighetsbevis eller legitimation som är knutna till ett sådant företag.</p>

<div class="article-table"><table>
<thead><tr><th></th><th>GVK</th><th>BKR</th><th>Säker Vatten</th></tr></thead>
<tbody>
<tr><td>Område</td><td>Tätskikt: plastmatta och tätskikt under keramik</td><td>Plattsättning med tätskikt (kakel och klinker)</td><td>Rör- och VVS-installationer</td></tr>
<tr><td>Branschregler</td><td>Säkra Våtrum 2026:1, från 1 jan 2026</td><td>Byggkeramikrådets branschregler för våtrum (BBV)</td><td>Säker Vatteninstallation 2026:1, från 1 jan 2026</td></tr>
<tr><td>Krav på personal</td><td>Montörer: behörighet Plast eller Tätskikt under keramik. Minst en arbetsledare per 10 anställda med behörighet</td><td>Minst en behörig arbetsledare och en behörig plattsättare</td><td>Alla montörer, arbetsledare och lärlingar ska ha branschlegitimation</td></tr>
<tr><td>Giltighet</td><td>5 år, sedan fortbildningskurs</td><td>Tills vidare, förnyas per kalenderår. Återkurs vart femte år</td><td>Legitimationen gäller 5 år efter godkänd utbildning</td></tr>
<tr><td>Dokument till kunden</td><td>Kopia av våtrumsanmälan, våtrumsintyg (obligatoriskt mot konsument)</td><td>Kvalitetsdokument</td><td>Digitalt intyg inom fyra veckor</td></tr>
<tr><td>Avgifter 2026 (exkl. moms)</td><td>8 400 kr (Plast eller Keramik), 9 400 kr (båda) + 0,27 promille av omsättningen</td><td>5 100–16 500 kr efter antal plattsättare</td><td>Serviceavgift 5 600 kr + 170 kr per montör, arbetsledare och lärling (lägre för medlemmar i Installatörsföretagen), plus medlemsavgift. Inträde 7 500 kr</td></tr>
</tbody>
</table></div>

<h2>GVK-behörighet – krav och kostnad</h2>
<p>För att <a href="https://www.gvk.se/kvalitetsarbete/bli-auktoriserad/" target="_blank" rel="noopener noreferrer">bli GVK-auktoriserat</a> ska företaget huvudsakligen arbeta med våtrum, ha F-skatt och vara momsregistrerat i Sverige, och bifoga kopia av yrkesbevis med ansökan. Efter godkännande ska minst en arbetsledare per tio anställda klara GVK:s arbetsledarkurs med prov, och montörerna ska ha giltig behörighet för plastmatta respektive tätskikt under keramik. Behörighetskurserna är bara öppna för anställda i ett auktoriserat företag, eller ett som håller på att auktoriseras, och montören behöver ett <a href="/sv/blog/yrkesbevis-bygg-larling">yrkesbevis</a>. Var femte år krävs fortbildning för att behörigheten ska gälla fem år till.</p>
<p>Enligt <a href="https://www.gvk.se/siteassets/gvk/dokument/sakra-vatrum-2026.pdf" target="_blank" rel="noopener noreferrer">Säkra Våtrum 2026</a> är det bara GVK-auktoriserade företag som får utfärda våtrumsintyg och kvalitetsdokument enligt GVK. Varje jobb ska anmälas till GVK med en våtrumsanmälan, som kan leda till stickprovskontroll, och kunden ska få en kopia.</p>
<p><strong>Räkneexempel (hypotetiskt, priser exkl. moms 2026):</strong> ett plattsättningsföretag med 6 anställda, varav 4 montörer, söker GVK-auktorisation för keramik. Omsättningen förra året var 8 miljoner kr.</p>
<div class="article-table"><table>
<thead><tr><th>Post</th><th>Belopp</th></tr></thead>
<tbody>
<tr><td>Registreringsavgift (engång)</td><td>12 490 kr</td></tr>
<tr><td>Årsavgift Keramik</td><td>8 400 kr</td></tr>
<tr><td>Rörlig avgift: 8 000 000 × 0,27 ‰</td><td>2 160 kr</td></tr>
<tr><td>Behörighetskurs Keramik, 4 × 3 800 kr</td><td>15 200 kr</td></tr>
<tr><td>Arbetsledarkurs, 1 person</td><td>4 000 kr</td></tr>
<tr><td><strong>Första året</strong></td><td><strong>42 250 kr</strong></td></tr>
</tbody>
</table></div>
<p>Året därpå återstår årsavgiften plus den rörliga delen – i exemplet 10 560 kr – tills fortbildningen blir aktuell efter fem år. Lägg till lönekostnaden för kursdagarna.</p>

<h2>BKR-behörighet för plattsättare</h2>
<p>Enligt <a href="https://www.bkr.se/om-behorighet/bli-behorig-guide" target="_blank" rel="noopener noreferrer">Byggkeramikrådets guide</a> ska plattsättning vara en etablerad verksamhet med egna anställda plattsättare. Minst en ska ha yrkesbevis eller motsvarande erfarenhet, vilket BKR anger som tre år med heltid i plattsättning – saknas yrkesbevis görs ett kunskapstest. Företaget kreditupplyses, och den som fått behörighet återkallad i ett tidigare bolag får inte sitta i ledningen.</p>
<ul>
<li><strong>Kurs 1</strong>, grundkurs i tätskikt och material: två dagar teori.</li>
<li><strong>Kurs 2</strong>, arbetsledarkurs med entreprenadjuridik: en dag.</li>
<li><strong>Kurs 3</strong>, praktisk tätskiktskurs: tre timmar.</li>
</ul>
<p>Arbetsledaren går kurs 1 och 2, plattsättaren kurs 1 och 3. En enmansföretagare går alla tre. Årsavgiften inkluderar medlemskap i PER och är 5 100 kr för 1–2 plattsättare, 6 700 kr för 3–5, 10 000 kr för 6–10, 13 200 kr för 11–20 och 16 500 kr för 21 eller fler. Skillnaderna mot GVK i själva utförandet går vi igenom i <a href="/sv/blog/bbv-eller-gvk-vatrum">BBV eller GVK i våtrum</a>.</p>

<h2>Säker Vatten för VVS-företag</h2>
<p>För att ett VVS-företag ska <a href="https://sakervatten.se/auktorisation/krav-for-auktorisation/vvs-foretag/" target="_blank" rel="noopener noreferrer">auktoriseras</a> krävs bland annat ansvarsförsäkring med en ansvarsdel på minst 10 miljoner kronor, F-skatt och momsregistrering, minst en heltidsanställd VVS-montör med branschcertifikat eller godkänd validering, och att minst hälften av VVS-montörerna uppfyller utbildningskraven. All personal ska ha <a href="https://sakervatten.se/auktorisation/branschlegitimation/" target="_blank" rel="noopener noreferrer">branschlegitimation</a> inom sex månader från att auktorisationen godkänts. Legitimationen kräver utbildningen Säker Vatteninstallation för VVS-företag, gäller fem år och är digital via BankID i Säker Vattens app.</p>
<p><a href="https://sakervatten.se/branschregler/branschregler-saker-vatteninstallation-20261/" target="_blank" rel="noopener noreferrer">Branschregler Säker Vatteninstallation 2026:1</a> gäller sedan 1 januari 2026, med en övergångsregel för rör-i-rörsystem och fördelarskåp fram till 1 januari 2027. Efter avslutat arbete ska beställaren få ett digitalt intyg inom fyra veckor.</p>

<h2>Måste man ha certifierad plattsättare?</h2>
<p>Inte enligt lag. En privatperson eller en snickare utan behörighet får bygga ett badrum, så länge det uppfyller Boverkets krav. Men utan intyg från ett behörigt företag är det svårare att visa att branschreglerna följts om något läcker, och det kan påverka försäkringsersättningen. GVK kallar själva våtrumsanmälan för en värdehandling.</p>
<p>Oavsett behörighet behöver du dokumentera förkontroll av underlaget och egenkontroll av tätskiktet. Vår <a href="/sv/verktyg/egenkontroll-vatrum-mall">egenkontroll för våtrum</a> täcker de vanligaste kontrollpunkterna, och vad som ändrades i branschreglerna inför 2026 står i <a href="/sv/blog/nya-vatrumsregler-2026">nya våtrumsregler 2026</a>.</p>

<h2>Våtrumscertifikat som privatperson</h2>
<p>Det går inte. Alla tre systemen certifierar företag, och personliga behörigheter kräver anställning i ett auktoriserat eller behörigt företag – hos GVK är det ett uttryckligt villkor för att få gå behörighetskursen. GVK erbjuder en webbutbildning, Säkra Våtrum för beställare, men den ger ingen behörighet. Det en privatperson kan göra är att anlita ett auktoriserat företag, kräva rätt intyg efter jobbet och, för GVK-jobb, själv beställa en särskild kontroll av det utförda arbetet.</p>

<h2>Vanliga frågor</h2>
<h3>Är våtrumscertifikat ett lagkrav?</h3>
<p>Nej. Boverkets föreskrifter ställer funktionskrav på tätskiktet men inga krav på att den som utför arbetet ska vara certifierad. Kravet kommer från försäkringsvillkor, beställare och branschregler.</p>
<h3>Kan en privatperson ta våtrumscertifikat?</h3>
<p>Nej. GVK, BKR och Säker Vatten auktoriserar företag, och personliga behörigheter är knutna till anställning i ett sådant företag. En privatperson kan däremot gå GVK:s webbutbildning för beställare, som inte ger behörighet.</p>
<h3>Hur länge gäller GVK-behörighet?</h3>
<p>Fem år. Därefter krävs en fortbildningskurs för att behörigheten ska gälla i fem år till. Säker Vattens branschlegitimation gäller också fem år, medan BKR-behörigheten förnyas varje kalenderår med återkurs vart femte år.</p>
<h3>Vad kostar det att bli GVK-auktoriserad?</h3>
<p>Registreringsavgiften är 12 490 kr och årsavgiften 8 400 kr för plast eller keramik (9 400 kr för båda) plus 0,27 promille av förra årets omsättning, minst 1 500 kr. Behörighetskurserna kostar 3 800 kr och arbetsledarkursen 4 000 kr, allt exklusive moms.</p>
<h3>Vilken behörighet behövs för en hel badrumsrenovering?</h3>
<p>Rördragningen görs av ett Säker Vatten-auktoriserat VVS-företag och tätskikt och plattsättning av ett GVK-auktoriserat eller BKR-behörigt företag. Kunden bör få ett intyg från varje företag.</p>
<h3>Påverkar behörigheten försäkringen?</h3>
<p>Ofta. De flesta försäkringsbolag kräver att gällande branschregler följts för att ersätta en vattenskada i våtrum, och ett våtrumsintyg från behörig hantverkare är det enklaste beviset. Villkoren varierar mellan bolagen.</p>
`;

const A_VATRUMSCERTIFIKAT_BEHORIGHET_GVK: BlogPost = {
  _id: "code-"+"vatrumscertifikat-behorighet-gvk",
  title: "Våtrumscertifikat och behörighet: GVK, BKR eller Säker Vatten?", slug: "vatrumscertifikat-behorighet-gvk", locale: "sv",
  excerpt: "Inget våtrumscertifikat är lagkrav – men försäkringen styr. Så fungerar GVK, BKR och Säker Vatten, vad behörigheten kostar och varför en privatperson inte kan certifiera sig.", tag: "Behörighet",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_VATRUMSCERTIFIKAT_BEHORIGHET_GVK_HTML,
  seoTitle: "Våtrumscertifikat: GVK, BKR eller Säker Vatten? | ByggExp", seoDescription: "Våtrumscertifikat är inget lagkrav, men försäkringen kräver branschregler. Jämför GVK, BKR och Säker Vatten: krav, giltighet, avgifter 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:30:00.000Z", createdAt: "2026-08-18T19:30:00.000Z", updatedAt: "2026-10-14T12:00:00.000Z",
};

const A_YRKESBEVIS_BYGG_LARLING_HTML = `
<p>Kvalificeringstiden räknas i kalendermånader, inte i loggade timmar – och semester, arbetstidsförkortning, helglönedagar och fridagar ingår i tiden enligt <a href="https://www.byggnads.se/49ec78/siteassets/kollektivavtal/byggavtalet-2025-digital-utgava-1.pdf" target="_blank" rel="noopener noreferrer">Yrkesutbildningsavtalet (bilaga H i Byggavtalet 2025–2027), § 7 b</a>. Det som förlänger tiden är annan frånvaro: arbetsgivaren korrigerar den i BYN:s Mina sidor inför varje löneuppflyttning, och yrkesbeviset flyttas fram motsvarande. En träarbetare som börjar kvalificeringstiden 1 september 2026 och inte har någon sådan frånvaro kan alltså få sitt yrkesbevis efter 36 månader, i september 2029.</p>

<p>Systemet sköts av <a href="https://www.byggbranschensyrkesnamnd.se/larling/ny-som-larling/hur-nar-jag-mitt-yrkesbevis/" target="_blank" rel="noopener noreferrer">Byggbranschens Yrkesnämnd (BYN)</a>, där arbetsgivar- och arbetstagarparterna i bygg- och anläggningsbranschen samarbetar. Adressen byn.se leder i dag vidare till byggbranschensyrkesnamnd.se.</p>

<h2>Tre vägar till yrkesbevis</h2>
<ol>
<li><strong>Gymnasiets bygg- och anläggningsprogram</strong> – med yrkesexamen och godkänt i yrkets kravkurser går eleven direkt till kvalificeringstid.</li>
<li><strong>Vuxenutbildning</strong> hos en av BYN godkänd utbildningsgivare (GUG), till exempel via komvux eller arbetsmarknadsutbildning.</li>
<li><strong>Företagslärling</strong> – personen anställs utan grundutbildning, läser BYN:s yrkesteori på distans och gör den praktiska grundutbildningen i företaget.</li>
</ol>
<p>Oavsett väg ska lärlingen registreras med en lärlingsanmälan i Mina sidor. Saknar en gymnasieelev godkänt i någon kravkurs blir det en anpassad period som företagslärling innan kvalificeringstiden kan börja.</p>

<h2>Kvalificeringstid och lärlingslön per yrke</h2>
<p>Lärlingslönen är en procentsats av yrkesarbetarens grundlön, uttryckt som fördelningstal. Den första tabellen visar hur länge varje steg gäller, den andra vad stegen ger i grundlön från 1 maj 2026 till 30 april 2027 enligt Byggavtalet § 3 punkt 9.2–9.3.</p>

<div class="article-table"><table>
<thead><tr><th>Kvalificeringstid</th><th>Yrken</th><th>70 %</th><th>80 %</th><th>90 %</th></tr></thead>
<tbody>
<tr><td>36 månader</td><td>Träarbetare, betongarbetare, murare, golvläggare, bergarbetare, beläggningsarbetare, väg- och anläggningsarbetare</td><td>mån 0–12</td><td>mån 13–24</td><td>mån 25–36</td></tr>
<tr><td>30 månader</td><td>Plattsättare, håltagare, stenmontör, ställningsbyggare, tak- och tätskiktsmontör, undertaksmontör</td><td>mån 0–12</td><td>mån 13–24</td><td>mån 25–30</td></tr>
<tr><td>24 månader</td><td>Maskinförare, kranförare</td><td>mån 0–6</td><td>mån 7–12</td><td>mån 13–24</td></tr>
</tbody>
</table></div>

<div class="article-table"><table>
<thead><tr><th>Lönesteg</th><th>Fördelningstal</th><th>kr/tim</th><th>kr/mån</th></tr></thead>
<tbody>
<tr><td>Företagslärling under grundutbildning</td><td>0,70</td><td>142,10</td><td>24 725</td></tr>
<tr><td>Lärling 70 %</td><td>0,70</td><td>142,10</td><td>24 725</td></tr>
<tr><td>Lärling 80 %</td><td>0,80</td><td>162,40</td><td>28 258</td></tr>
<tr><td>Lärling 90 %</td><td>0,90</td><td>182,70</td><td>31 790</td></tr>
<tr><td>Yrkesarbetare</td><td>1,00</td><td>203,00</td><td>35 322</td></tr>
</tbody>
</table></div>
<p>Anläggningsdykare har en egen trappa: kvalificeringstiden är 800 dyktimmar enligt loggbok, inte månader.</p>

<h3>Räkneexempel: lärlingslön i ackord</h3>
<p>Fördelningstalet styr också lärlingens andel när laget jobbar på prestationslön. Enligt Byggavtalet § 3 punkt 3.1.11 multipliceras arbetade timmar med fördelningstalet. För lärlingar läggs dessutom ett belopp till premielönesumman: skillnaden mellan arbetade timmar och fördelningstimmar gånger 23 kr (10 kr vid ren resultatlön).</p>
<p>Exempel (hypotetiskt): en snickarlärling i månad 15 (fördelningstal 0,80) arbetar 160 timmar under avstämningsperioden. Fördelningstimmar: 160 × 0,80 = 128. Skillnad: 32 timmar × 23 kr = 736 kr som tillförs lagets premielönesumma. Lärlingen kostar alltså laget mindre i fördelning, och laget kompenseras för handledningstiden. Mer om hur ackordet räknas finns i guiden om <a href="/sv/blog/ackordslon-bygg">ackordslön i bygg</a>.</p>

<h2>Krav på företaget och handledaren</h2>
<ul>
<li><strong>Kollektivavtal.</strong> Företaget måste vara bundet av kollektivavtal genom medlemskap i Byggföretagen eller Maskinentreprenörerna, eller ha hängavtal med Byggnads eller Seko. Läs mer om vad det innebär i <a href="/sv/blog/maste-ha-kollektivavtal-bygg">måste man ha kollektivavtal i bygg</a>.</li>
<li><strong>Ålder.</strong> Normalt 18 år. För yngre lärlingar krävs undantag från BYN.</li>
<li><strong>Handledare</strong> med yrkesbevis i samma yrke, eller motsvarande kompetens. En handledare får ha högst tre lärlingar. För ställningsbyggare gäller högst en under grundutbildning eller tre under kvalificeringstid, enligt BYN:s <a href="https://www.byggbranschensyrkesnamnd.se/foretag/foretagsroller/att-vara-handledare/" target="_blank" rel="noopener noreferrer">regler för handledare</a>.</li>
<li><strong>Bredd.</strong> Företaget ska kunna ge alla praktiska moment i yrkets kvalifikationskrav. Har ni smal inriktning kan BYN-regionen godkänna samverkan med ett annat företag.</li>
</ul>

<h2>Anställningen: provanställning och distansutbildning</h2>
<p>En <strong>företagslärling</strong> kan provanställas i högst 12 månader (maskinförare 6), och grundutbildningen ska vara klar inom samma tid. Företaget beställer och betalar den yrkesteoretiska distansutbildningen. Vill arbetsgivaren avbryta efter sex månader måste lärlingen underrättas skriftligt och BYN-regionen informeras minst två månader i förväg.</p>
<p>En <strong>lärling under kvalificeringstid</strong> kan provanställas i högst 6 månader enligt Byggavtalet. Den som gjort sin grundutbildning som företagslärling hos samma arbetsgivare kan inte provanställas igen. Mer om reglerna finns i <a href="/sv/blog/provanstallning-bygg-regler">provanställning i bygg</a>.</p>
<p>För maskinförare är distansutbildningen hos ME-skolan prissatt per del: inriktning inklusive hjullastare 8 500 kr, fördjupning 4 250 kr och 2 125 kr per ytterligare maskinslag, allt exklusive moms enligt <a href="https://www.byggbranschensyrkesnamnd.se/utbildning/foretagslarling/distansutbildning-for-maskinforare/" target="_blank" rel="noopener noreferrer">BYN</a>. Lärlingen får inte köra maskin på arbetsplatsen förrän introduktionskursen är godkänd.</p>

<h2>Lärlingsbok, e-bok och timmar – vad gäller nu?</h2>
<p>Den gamla lärlingsboken där timmar loggades hörde till Yrkesutbildningsavtalet 2006, som upphörde 31 december 2023. Timmarna registrerades i systemet BYN 2.0, som nu är på väg ut – för den som använt det finns funktionen registerutdrag. Därför cirkulerar fortfarande äldre instruktioner om att registrera timmar, även för maskinförare.</p>
<p>I dag finns två lägen:</p>
<ul>
<li><strong>Under grundutbildning</strong> (företagslärling) har lärlingen en e-bok i Mina sidor. Lärlingen rapporterar praktiska läranderesultat, handledaren godkänner dem och distansleverantören rapporterar teorin. När allt är godkänt godkänner handledaren hela e-boken och BYN-regionen startar kvalificeringstiden.</li>
<li><strong>Under kvalificeringstid</strong> finns ingen e-bok och inga timmar att logga. I stället tar företaget fram en utvecklingsplan som visar vilka arbeten lärlingen ska få pröva, och följer upp den i samtal.</li>
</ul>
<p>Lön, frånvaro och arbetad tid behöver ändå dokumenteras som för alla anställda – frånvaron är det som avgör när lärlingen flyttas upp i lönetrappan.</p>

<h2>När tiden är klar – så utfärdas yrkesbeviset</h2>
<ol>
<li>Företaget får ett meddelande i Mina sidor när kvalificeringstiden är fullgjord.</li>
<li>Företaget ger klartecken och registrerar att tiden följt utvecklingsplanen.</li>
<li>Företaget skriver ett intyg till lärlingen med arbetsgivarens namn, organisationsnummer, handledare, anställningstid och de huvudsakliga arbetsuppgifterna (YUA § 6 d).</li>
<li>BYN-regionen utfärdar yrkesbeviset. Det blir tillgängligt digitalt i Mina sidor, registreras i ID06 kompetensdatabas och skickas hem som plastkort.</li>
</ol>
<p>Ett borttappat kort kan ersättas via Mina sidor för 450 kr inklusive moms. Hittar en maskinförare inte sitt yrkesbevis hos BYN kan det vara utfärdat av TYA, som BYN samverkar med.</p>

<h2>Validering för vuxna och utländska yrkesarbetare</h2>
<p>Den som redan kan yrket men saknar svensk utbildning har två vägar:</p>
<ul>
<li><strong>Validering</strong> hos en godkänd valideringsutförare. Enligt <a href="https://www.byggbranschensyrkesnamnd.se/yrkesarbetare/validering/vad-innebar-validering/" target="_blank" rel="noopener noreferrer">BYN</a> tar den 3–5 dagar beroende på yrke. Visar valideringen att allt finns kan yrkesbevis utfärdas om personen har arbetserfarenhet som motsvarar kvalificeringstiden (YUA § 8). Annars blir resultatet en plan för komplettering, och validerade delar kan korta kvalificeringstiden (§ 9 b).</li>
<li><strong>Erkännandeintyg</strong> (Letter of Acknowledgement) för den som har formell yrkesutbildning från ett annat land plus minst två års erfarenhet i yrket. Intyget motsvarar ett svenskt yrkesbevis. Ansökningsavgiften är 5 500 kr och betalas även om ansökan avslås, enligt <a href="https://www.byggbranschensyrkesnamnd.se/acknowledgement/letter-of-acknowledgement/" target="_blank" rel="noopener noreferrer">BYN</a>.</li>
</ul>
<p>Planerar du att anställa och vill veta vad en lärling kostar totalt med arbetsgivaravgifter och avtalsförsäkringar, räkna i <a href="/sv/verktyg/anstalld-kostnad-kalkylator">kalkylatorn för personalkostnad</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Hur länge är man lärling som snickare?</h3>
<p>En träarbetare har 36 månaders kvalificeringstid efter godkänd grundutbildning. Som företagslärling utan gymnasieutbildning kommer grundutbildningen, högst 12 månader, före det.</p>
<h3>Vad tjänar en snickarlärling 2026?</h3>
<p>Från 1 maj 2026 är grundlönen 142,10 kr/tim första året, 162,40 kr/tim andra året och 182,70 kr/tim tredje året av kvalificeringstiden, det vill säga 70, 80 och 90 procent av yrkesarbetarens 203 kr/tim.</p>
<h3>Behöver lärlingen fortfarande en lärlingsbok?</h3>
<p>Nej. Lärlingsboken med timmar hörde till det gamla avtalet som upphörde vid utgången av 2023. Företagslärlingar under grundutbildning har en digital e-bok med läranderesultat, medan lärlingar under kvalificeringstid har en utvecklingsplan.</p>
<h3>Kan företaget ha lärlingar utan kollektivavtal?</h3>
<p>Nej. Företaget måste vara bundet av kollektivavtal inom bygg och anläggning, genom medlemskap i en arbetsgivarorganisation eller hängavtal. Företag inom närliggande avtalsområden kan i vissa fall träffa avtal för enskilda lärlingar via BYN-regionen.</p>
<h3>Finns det ett prov för yrkesbevis som snickare?</h3>
<p>Inte för den som går den vanliga vägen – yrkesbeviset utfärdas när grundutbildning och kvalificeringstid är godkända. Den som saknar utbildning men har erfarenhet kan i stället valideras genom frågor och praktiska övningar hos en godkänd valideringsutförare.</p>
<h3>Hur många lärlingar får en handledare ha?</h3>
<p>Högst tre totalt. För ställningsbyggare gäller högst en under grundutbildning eller tre under kvalificeringstid. BYN-regionen kan ge undantag.</p>
`;

const A_YRKESBEVIS_BYGG_LARLING: BlogPost = {
  _id: "code-"+"yrkesbevis-bygg-larling",
  title: "Yrkesbevis i bygg: lärlingstid, lärlingslön och handledning 2026", slug: "yrkesbevis-bygg-larling", locale: "sv",
  excerpt: "Hur lång kvalificeringstiden är per yrke, vad lärlingen tjänar enligt Byggavtalet 2025–2027 och hur vägen till yrkesbevis går via BYN – även för vuxna och utländska yrkesarbetare.", tag: "Kompetens",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_YRKESBEVIS_BYGG_LARLING_HTML,
  seoTitle: "Yrkesbevis och lärling i bygg: tid och lön 2026 | ByggExp", seoDescription: "Lärlingstid 24–36 månader beroende på yrke, lärlingslön 70–90 % av 203 kr/tim och vägen till yrkesbevis via BYN. Med lönetabell och räkneexempel.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:21:00.000Z", createdAt: "2026-08-19T05:21:00.000Z", updatedAt: "2026-10-14T12:00:00.000Z",
};

const A_BOVERKETS_NYA_BYGGREGLER_2026_KONTROLLPLAN_HTML = `
<p>Den 1 juli 2025 ersatte Boverkets nya bygg- och konstruktionsregler de gamla byggreglerna (BBR) och konstruktionsreglerna (EKS, ersatt av BFS 2024:6). Reformen beskrivs ofta som den största förändringen av regelverket på 30 år. För dig som är entreprenör eller driver byggföretag är det inte bara ett nytt regelverk att läsa – det är en övergångsperiod som stängdes 30 juni 2026, och en förskjutning av ansvar som direkt träffar hur du dokumenterar din egenkontroll.</p>

<p>Vill du komma igång direkt med att uppdatera dina rutiner mot funktionskraven? Börja i vår gratis egenkontrollmall -&gt; <a href="/sv/verktyg/egenkontroll-mall">/sv/verktyg/egenkontroll-mall</a>.</p>

<h2>Vad har egentligen ändrats?</h2>
<p>De gamla reglerna var detaljstyrda: BBR angav ofta konkreta värden och hänvisade till standarder som du kunde följa rakt av. De nya reglerna är i stället funktions- och kravbaserade. Boverket anger vilka funktioner och egenskaper en byggnad ska uppnå – men inte längre hur du ska uppfylla dem. Stora delar av de allmänna råden och hänvisningarna till standarder har tagits bort.</p>
<p>I praktiken flyttar det ansvaret nedåt i kedjan. Byggherren och entreprenören måste själva välja en lösning och kunna visa att den uppfyller funktionskravet. Det gäller att kunna verifiera och dokumentera varje val, i stället för att luta sig mot en tabell i en föreskrift. Reformen är dessutom uppdelad i flera separata författningar i BFS 2024-serien i stället för det gamla samlade BBR/EKS – kontrollera de exakta BFS-numren direkt i Boverkets författningssamling innan du hänvisar till dem i ett projekt.</p>

<h2>Övergångsperioden och slutdatumet 30 juni 2026</h2>
<p>Mellan 1 juli 2025 och 30 juni 2026 gällde en ettårig övergångsperiod. Under den fick byggherren välja att följa antingen de gamla reglerna (BBR/EKS) i sin helhet eller de nya reglerna i sin helhet. Det du absolut inte får göra är att blanda regelverken i samma projekt – välj ett spår och håll dig till det hela vägen.</p>
<p>Det avgörande för vilket regelverk som gäller är i praktiken vilket datum ansökan om lov eller anmälan kom in (inkom) till byggnadsnämnden. Kort sammanfattat:</p>
<ul>
<li><strong>Inkom före 1 juli 2025:</strong> gamla BBR/EKS gäller.</li>
<li><strong>Inkom 1 juli 2025–30 juni 2026:</strong> byggherren väljer gammalt eller nytt – men inte en blandning.</li>
<li><strong>Inkom efter 30 juni 2026:</strong> enbart Boverkets nya bygg- och konstruktionsregler gäller.</li>
</ul>
<p>Pågående projekt som startats under övergångsperioden enligt äldre regler kan omfattas av övergångsbestämmelser. Den exakta lydelsen bör du dubbelkolla mot Boverkets övergångsbestämmelser för just ditt ärende. Energikraven har flyttats ut ur BBR till en egen författning (BFS 2026:9), och den 1 oktober 2026 upphävdes BBR helt. Under en begränsad tid får äldre energiregler i BBR 31 fortfarande tillämpas under vissa förutsättningar.</p>

<h2>Myten om en ny kontrollplan – så ligger det till</h2>
<p>En vanlig missuppfattning är att den nya regelreformen tvingar fram en helt ny sorts kontrollplan. Det stämmer inte. Kontrollplan och egenkontroll regleras av plan- och bygglagen (PBL, 10 kap.), inte av BBR eller byggreglerna. Själva reformen ändrar alltså inte de formella PBL-kraven på kontrollplanen.</p>
<p>Kraven i sig står kvar: en kontrollplan krävs för de flesta lov- och anmälningspliktiga bygg-, rivnings- och markåtgärder, och för de flesta sådana projekt krävs en certifierad kontrollansvarig (KA). Byggherren är fortsatt ansvarig för att kraven uppfylls och för att det finns en kontrollplan. Kontrollerna kan utföras som byggherrens egenkontroll eller av certifierad sakkunnig. Det som ändras är inte formen – utan innehållet du måste fylla den med.</p>

<h2>Så påverkas din egenkontroll i praktiken</h2>
<p>När detaljvärden och standardhänvisningar försvinner räcker det inte längre att bocka av att en kontroll är utförd. Din egenkontroll måste tydligare visa <em>hur</em> den valda lösningen uppfyller funktionskravet – alltså själva verifieringen. Det höjer i praktiken kraven på dokumentation som knyts till kontrollplanen, även om kontrollplanens PBL-krav i sig är oförändrade.</p>
<p>Konkret betyder det att varje kontrollpunkt bör kopplas till tre saker: vilket funktionskrav den svarar mot, vilken metod eller lösning du valt, och vilket underlag som styrker att kravet är uppfyllt (mätning, provning, produktdokumentation eller motsvarande). Kopplingen mellan egenkontroll, kontrollplan och startbesked blir viktigare – kontrollansvarig ska kunna följa hur du kommit fram till att ett krav är uppfyllt, inte bara att någon skrivit sina initialer i en ruta.</p>
<p>Rollfördelningen är densamma men skärps i praktiken: byggherren äger ansvaret, KA granskar och följer kontrollplanen, och du som entreprenör levererar verifieringen. Ju svagare din dokumentation är, desto mer sårbar blir hela kedjan vid slutbesked.</p>

<h2>Checklista: så ställer du om rutinerna</h2>
<ul>
<li><strong>Notera regelverket per projekt.</strong> Projekt där ansökan/anmälan inkom under övergångsperioden kan följa gamla regler – skriv in vilket regelverk som gäller och datumet då ansökan/anmälan inkom.</li>
<li><strong>Uppdatera egenkontrollmallarna mot funktionskraven.</strong> Byt ut avbockningar mot punkter som beskriver vald lösning och verifiering.</li>
<li><strong>Dokumentera verifieringsmetoden.</strong> Bestäm i förväg hur varje funktionskrav ska styrkas – mätning, provning eller produktunderlag.</li>
<li><strong>Stäm av med kontrollansvarig.</strong> Säkerställ att kontrollplan och egenkontroll hänger ihop mot startbesked.</li>
<li><strong>Kolla energireglerna.</strong> Energikraven står nu i BFS 2026:9 – kontrollera vilken version som gäller för ditt ärende.</li>
<li><strong>Spara underlagen under hela ansvarstiden.</strong> Verifieringsdokumentationen är ditt skydd om ett projekt ifrågasätts i efterhand – för arbete på byggnader kan fel enligt konsumenttjänstlagen reklameras i upp till tio år, och entreprenadavtalens ansvarstid enligt AB 04/ABT 06 är normalt tio år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att strukturera egenkontrollen så att den håller för det funktionsbaserade regelverket. I stället för lösa pappersblanketter samlar du kontrollpunkter, valda lösningar och verifieringsunderlag på ett ställe – med foton och noteringar kopplade till rätt moment. Det gör det enklare att visa <em>hur</em> ett krav uppfyllts och att ta fram dokumentationen när kontrollansvarig eller byggnadsnämnden frågar. ByggExp ersätter inte kontrollansvarig eller kontrollplanen enligt PBL, och tar inte över byggherrens ansvar – men det gör det betydligt lättare att hålla ordning på underlaget och att spara det under den tid det kan behövas, till exempel under den tioåriga reklamations- och ansvarstiden.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag använda de nya reglerna nu?</h3>
<p>Ja, för nya ärenden. Övergångsperioden 1 juli 2025–30 juni 2026, då byggherren fick välja gamla eller nya regler (utan att blanda), är slut. Valde du äldre regler och fick lov före 1 juli 2026 gäller de äldre reglerna även vid startbeskedet.</p>
<h3>Vad händer med pågående bygglov?</h3>
<p>Vilket regelverk som gäller styrs i praktiken av datumet då ansökan eller anmälan inkom till byggnadsnämnden. Projekt som startats under övergångsperioden enligt äldre regler kan omfattas av övergångsbestämmelser – kontrollera lydelsen för ditt specifika ärende mot Boverket.</p>
<h3>Ändras kontrollplanen av de nya byggreglerna?</h3>
<p>De formella kraven på kontrollplan och egenkontroll styrs av PBL (10 kap.) och ändras inte av regelreformen. Men eftersom funktionskrav ersätter detaljvärden behöver innehållet i din egenkontroll bli mer verifierande och bättre dokumenterat.</p>
<h3>Hur länge bör jag spara egenkontroll och verifieringsunderlag?</h3>
<p>Det finns ingen särskild lagstadgad arkiveringstid för egenkontroll i PBL, men underlaget kan behövas långt efter slutbesked. Fel i arbete på byggnader kan enligt konsumenttjänstlagen reklameras i upp till tio år, och ansvarstiden i AB 04/ABT 06 är normalt tio år efter godkänd slutbesiktning – spara därför verifieringsdokumentationen så länge den kan bli aktuell.</p>
<h3>Vad gäller efter 30 juni 2026?</h3>
<p>Då är valfriheten borta. Från 1 juli 2026 gäller Boverkets nya byggregler fullt ut för alla nya ärenden. Har du inte redan gjort det: uppdatera mallar och rutiner nu.</p>

<h2>Kom igång</h2>
<p>Börja med att se över dina egenkontrollrutiner mot funktionskraven med vår gratis <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmall</a>. Vill du se hur ByggExp samlar egenkontroll och verifieringsunderlag i ett flöde? Boka en demo via <a href="/sv/contact">/sv/contact</a>.</p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a> och <a href="/sv/blog/nya-vatrumsregler-2026">Nya våtrumsregler 2026</a>.</p>
`;

const A_BOVERKETS_NYA_BYGGREGLER_2026_KONTROLLPLAN: BlogPost = {
  _id: "code-"+"boverkets-nya-byggregler-2026-kontrollplan",
  title: "Boverkets nya byggregler fullt ut 2026 – kontrollplan och egenkontroll", slug: "boverkets-nya-byggregler-2026-kontrollplan", locale: "sv",
  excerpt: "Boverkets funktionsbaserade byggregler flyttar ansvaret till dig som entreprenör. Så påverkas egenkontroll och kontrollplan – och vad som gäller nu när övergångsperioden är slut.", tag: "Regelverk",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_BOVERKETS_NYA_BYGGREGLER_2026_KONTROLLPLAN_HTML,
  seoTitle: "Nya byggregler 2026: kontrollplan | ByggExp", seoDescription: "Boverkets nya bygg- och konstruktionsregler ändrar hur du dokumenterar egenkontroll. Gäller fullt ut sedan 1 juli 2026 – så påverkas kontrollplanen.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:39:00.000Z", createdAt: "2026-08-19T05:39:00.000Z", updatedAt: "2026-08-19T05:39:00.000Z",
};

const A_NYA_BYGGREGLER_2026_ENTREPRENAD_HTML = `
<p>2026 är ett skarpt år för dig som driver byggföretag eller arbetar som hantverkare. Boverkets nya byggregler blir det enda gällande regelverket för nya projekt, konstruktionsreglerna har helt ersatt EKS, och Arbetsmiljöverkets nya struktur har satt sig. Samtidigt ligger fokus i PBL på att tillämpa kontrollsystemet rätt. Den här artikeln ger dig överblicken – men den ersätter inte primärkällorna. Kontrollera alltid exakta datum och paragrafer hos Boverket och Arbetsmiljöverket innan du binder dig i avtal eller kontrollplan.</p>

<p>Ett konkret första steg är att se över de dokument du skickar ut i varje projekt. Uppdatera dina avtalsmallar så att de hänvisar till rätt regelverk – börja med <a href="/sv/verktyg/offert-mall">vår gratis offertmall -&gt;</a> och byt ut föråldrade referenser till BBR och EKS.</p>

<h2>Boverkets nya bygg- och konstruktionsregler – övergångsperioden är slut</h2>
<p>Boverkets nya byggregler är inte en enda författning, utan nio nya grundförfattningar: BFS 2024:4 (aktsamhet vid bygg-, rivnings- och markåtgärder), 2024:6 (bärförmåga, stadga och beständighet – konstruktionsreglerna), 2024:7 (brand), 2024:8 (hygien, hälsa och miljö), 2024:9 (säkerhet vid användning), 2024:10 (buller), 2024:11 (bostäders lämplighet), 2024:12 (tillgänglighet) och 2024:13 (tomter). De har ersatt motsvarande regler i BBR och EKS.</p>
<p>Författningarna trädde i kraft under 2025. Under en övergångsperiod gick det att fortsätta tillämpa de äldre reglerna i BBR och EKS, men den möjligheten gäller bara ärenden där bygglovsansökan eller anmälan kom in före 1 juli 2026. För senare ärenden gäller de nya reglerna. EKS (BFS 2011:10, Boverkets tillämpning av eurokoderna) upphävdes 1 juli 2025 och ersattes av BFS 2024:6 om bärförmåga, stadga och beständighet.</p>
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
<p>Äldre BBR och EKS får bara tillämpas om bygglovsansökan eller anmälan kom in före 1 juli 2026 – och då utan att blandas med de nya reglerna. Reglerna om energihushållning ligger dock kvar i BBR 31 tills den nya energiförfattningen träder i kraft den 1 oktober 2026. Kontrollera aktuellt läge hos Boverket.</p>
<h3>Måste jag följa svensk standard?</h3>
<p>De nya reglerna är funktionskrav och innehåller i huvudsak inte längre hänvisningar till specifika standarder. Du väljer lösning, men ska på vetenskaplig grund kunna visa att kraven uppfylls. En standard kan fortfarande vara ett bra sätt att visa det.</p>
<h3>Vad hände med EKS?</h3>
<p>EKS (BFS 2011:10) upphävdes 1 juli 2025 och ersattes av BFS 2024:6 (Boverkets föreskrifter och allmänna råd om bärförmåga, stadga och beständighet). Eurokoderna (SS-EN 1990–1999) används fortfarande – de anvisas i de allmänna råden som ett sätt att uppfylla kraven.</p>
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

const A_BEHORIGHETER_CERTIFIERINGAR_LONAR_SIG_HTML = `
<p>I Sverige är förvånansvärt få hantverksbehörigheter faktiskt lagkrav. Det betyder inte att de är valfria. Beställare, försäkringsbolag och offentlig upphandling avgör i praktiken vilka behörigheter som krävs för att du ens ska få lämna anbud – och utan rätt dokumentation kan ett vattenskadejobb sluta med att försäkringen inte betalar en krona. Den här artikeln är en checklista över de behörigheter som faktiskt vinner jobb 2026, och vilka du kan lägga mindre krut på.</p>

<p>Oavsett behörighet är dokumenterad egenkontroll det som knyter ihop kvalitet och försäkringsersättning – ladda ner <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a> och koppla den till varje uppdrag.</p>

<h2>Våtrumsbehörighet – GVK, BKR, Säker Vatten och MVK</h2>
<p>Till skillnad från el och VVS finns det inget lagkrav på att vara certifierad för att renovera ett våtrum. I praktiken är det ändå avgörande. GVK, Byggkeramikrådet (BKR) och Säker Vatten har blivit de facto-standard, och det är just dessa branschregler som försäkringsbolag och beställare kräver. Utan behörigt utfört tätskikt och tillhörande kvalitetsdokument kan försäkringsersättningen vid en vattenskada helt utebli.</p>
<p>Behörigheterna delar upp arbetet efter moment:</p>
<ul>
<li><strong>GVK</strong> – tätskikt, golv och plastmatta.</li>
<li><strong>BKR</strong> – kakel och klinker (byggkeramik).</li>
<li><strong>Säker Vatten</strong> – rör och VVS-installationer.</li>
<li><strong>MVK</strong> – måleri i våtrum.</li>
</ul>
<p>Poängen: ett vanligt badrumsjobb kräver ofta flera behörigheter samtidigt. En komplett badrumsrenovering rör tätskikt, kakel och rör – tre olika regelverk. En sak som ofta blandas ihop: auktorisationerna (GVK, BKR, Säker Vatten) gäller företaget, medan branschlegitimation och personcertifikat gäller den enskilde montören. Du behöver alltså både ett auktoriserat företag och behörig personal på plats.</p>
<p>BKR-behörighet kräver till exempel att företaget alltid har minst en behörig arbetsledare och en behörig plattsättare anställd, klarar en kreditkontroll och omcertifierar vart femte år. Saknar plattsättaren yrkesbevis måste kompetensen valideras via ett anvisat utbildningsföretag.</p>

<h2>Nyheterna 2026 – Säkra Våtrum 2026 och Säker Vatten 2026:1</h2>
<p>De uppdaterade branschreglerna <strong>Säkra Våtrum 2026</strong> är samordnade mellan GVK, BKR, MVK och Säker Vatten och tillämpas på installationer som startar efter 1 januari 2026. Övergångsregel: tätskikt får utföras enligt de äldre reglerna (2021:1) om bygglov beviljats före 1 januari 2026.</p>
<p>Konkreta ändringar att ha koll på:</p>
<ul>
<li>Tillåten golvlutning mot golvbrunn i duschplats ändras till <strong>minst 7 mm/m och max 30 mm/m</strong> (tidigare 7–20 mm/m).</li>
<li>Minsta avstånd mellan rörgenomföring och tak sänks från 100 mm till <strong>60 mm</strong>.</li>
<li>Förtydliganden kring dörröppning och våtzoner.</li>
</ul>
<p>Parallellt gäller <strong>Säker Vatteninstallation 2026:1</strong> från 1 januari 2026. Ett auktoriserat VVS-företag ska ha minst en heltidsanställd montör med certifikat eller validering, personalen ska ha branschlegitimation, och ett digitalt intyg ska lämnas till beställaren inom fyra veckor efter avslutat arbete. Det digitala intyget är inte byråkrati för sakens skull – det är beviset beställaren behöver om något går fel.</p>

<h2>Heta Arbeten – behörigheten som avgör om försäkringen betalar</h2>
<p>Heta Arbeten är inte ett lagkrav, utan ett försäkringskrav – och det gör den minst lika viktig. Försäkringsbolagens villkor kräver giltigt certifikat för alla som utför brandfarliga heta arbeten på tillfällig arbetsplats: svetsning, skärande bearbetning, lödning, torkning, uppvärmning och rondellarbete. Kravet gäller även brandvakten och den tillståndsansvarige.</p>
<p>Utbildningen är en endagsutbildning i Brandskyddsföreningens säkerhetsregler och kostar typiskt runt 2 500–2 900 kr per person. Certifikatet är giltigt i 5 år och går ut sista dagen i angiven månad. Saknas giltigt certifikat vid en brand minskas försäkringsersättningen markant. Med tanke på kostnaden – runt 2 500 kr mot potentiellt hela ersättningen vid en brand – är detta en av de mest lönsamma behörigheterna att hålla aktuell.</p>

<h2>Kontrollansvarig (KA) enligt PBL – N och K</h2>
<p>Kontrollansvarig krävs enligt plan- och bygglagen främst för större lovpliktiga åtgärder. Anmälningspliktiga åtgärder, komplementbyggnader och små ändringar av småhus är normalt undantagna (PBF 7 kap. 5 §), men byggnadsnämnden kan besluta annat. En KA måste vara certifierad av ett ackrediterat organ – RISE eller Kiwa, båda ackrediterade av Swedac – och certifieringen är giltig i 5 år förutsatt att en årlig rapport lämnas in.</p>
<p>Det finns två behörighetsnivåer:</p>
<ul>
<li><strong>N (normal art)</strong> – bland annat en- och tvåbostadshus och byggnader med högst två våningar. Kräver minst 3 års erfarenhet av projektering, arbetsledning eller besiktning samt teknisk utbildning, till exempel högskoleingenjörsexamen (120 hp) eller motsvarande äldre utbildning.</li>
<li><strong>K (komplicerad art)</strong> – flerbostadshus, industri och avancerade tekniska lösningar.</li>
</ul>
<p>Viktigt: en KA ska vara självständig gentemot den som utför arbetet. Du kan alltså inte vara kontrollansvarig för ditt eget bygge – rollen bygger på oberoende.</p>

<h2>Checklista – välj rätt behörighet för uppdraget</h2>
<p>Matcha behörighet mot uppdragstyp:</p>
<ol>
<li><strong>Badrumsrenovering</strong> – GVK och/eller BKR för tätskikt och kakel, Säker Vatten för rör.</li>
<li><strong>Stambyte / VVS</strong> – Säker Vatten (företag) plus branschlegitimation (montör).</li>
<li><strong>Svets, tak eller tätskikt med låga</strong> – Heta Arbeten för utförare, brandvakt och tillståndsansvarig.</li>
<li><strong>Nybyggnad / tillbyggnad med bygglov</strong> – kontrollansvarig, nivå N eller K beroende på projekt.</li>
<li><strong>Grundkrav på i princip varje bygge</strong> – ID06 och F-skatt. Utan dem kommer du varken in på arbetsplatsen eller vinner offentliga anbud.</li>
</ol>

<h2>Vanliga misstag som kostar jobb och pengar</h2>
<p>Tre återkommande misstag är värda att undvika. Det första är att blanda ihop företagsauktorisation och personcertifikat – du behöver båda, inte det ena eller det andra. Det andra är att missa 5-årscyklerna: både Heta Arbeten, KA-certifiering och BKR-omcertifiering löper ut efter fem år, och ett utgånget certifikat är lika illa som inget alls den dag försäkringsbolaget frågar. Det tredje är att utföra tätskikt utan att dokumentera egenkontrollen – arbetet kan vara korrekt utfört, men utan papper på det står du svag när ersättningen ska prövas.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte själva behörigheten – den utfärdas alltid av branschorganet eller certifieringsorganet. Det ByggExp gör är att hålla ihop dokumentationen som behörigheten kräver. Du kopplar egenkontroll till varje uppdrag, samlar foton och intyg på ett ställe och kan visa beställaren och försäkringsbolaget att arbetet är utfört enligt gällande branschregler. På så sätt blir behörigheten värd något även efteråt, när ersättningsfrågan avgörs, i stället för att kvitton och kontrollpunkter ligger utspridda i telefonen och mejlkorgen.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag vara certifierad för att renovera våtrum?</h3>
<p>Nej, det finns inget lagkrav – till skillnad från el och VVS. Men GVK, BKR och Säker Vatten är de facto-standard som försäkringsbolag och beställare kräver. Utan behörigt utfört och dokumenterat tätskikt kan ersättningen vid vattenskada helt utebli.</p>
<h3>Hur länge gäller ett Heta Arbeten-certifikat?</h3>
<p>Certifikatet är giltigt i 5 år från godkänd certifiering och går ut sista dagen i angiven månad. Utbildningen är en endagskurs i Brandskyddsföreningens säkerhetsregler och kostar typiskt runt 2 500–2 900 kr per person.</p>
<h3>Vad är skillnaden mellan behörighet N och K för kontrollansvarig?</h3>
<p>N (normal art) gäller bland annat en- och tvåbostadshus och byggnader med högst två våningar och kräver minst 3 års erfarenhet plus teknisk utbildning. K (komplicerad art) gäller flerbostadshus, industri och avancerade tekniska lösningar. Certifieringen görs av RISE eller Kiwa och gäller i 5 år.</p>
<h3>Gäller behörigheten företaget eller personen?</h3>
<p>Båda delar finns. Auktorisationerna GVK, BKR och Säker Vatten gäller företaget, medan branschlegitimation och personcertifikat gäller den enskilde montören. Det är två separata saker som ofta blandas ihop – och du behöver oftast båda.</p>

<h2>Kom igång</h2>
<p>Behörighet är både en konkurrensfördel och en förutsättning för att försäkringen ska betala. Håll koll på 5-årscyklerna och se till att dokumentationen finns när den efterfrågas. Börja med att strukturera din egenkontroll i <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a>, eller boka en <a href="/sv/contact">demo</a> så visar vi hur du kopplar behörighet och dokumentation till varje uppdrag.</p>
<p>Relaterat: <a href="/sv/blog/vatrumscertifikat-behorighet-gvk">Våtrumscertifikat och GVK-behörighet</a>, <a href="/sv/blog/heta-arbeten">Heta Arbeten – så funkar det</a>, <a href="/sv/blog/kontrollansvarig-nar-behovs">Kontrollansvarig – när behövs det?</a></p>
`;

const A_BEHORIGHETER_CERTIFIERINGAR_LONAR_SIG: BlogPost = {
  _id: "code-"+"behorigheter-certifieringar-lonar-sig",
  title: "Behörigheter och certifieringar som faktiskt vinner jobb 2026 – och vilka du kan skippa", slug: "behorigheter-certifieringar-lonar-sig", locale: "sv",
  excerpt: "Få hantverksbehörigheter är lagkrav i Sverige – men beställare och försäkringsbolag styr vilka som vinner anbud. Här är checklistan för 2026.", tag: "Behörigheter",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_BEHORIGHETER_CERTIFIERINGAR_LONAR_SIG_HTML,
  seoTitle: "Behörigheter som vinner jobb 2026 | ByggExp", seoDescription: "Våtrumsbehörighet, Heta Arbeten och kontrollansvarig – vilka behörigheter beställare och försäkringsbolag faktiskt kräver 2026. Checklista för hantverkare.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:03:00.000Z", createdAt: "2026-08-19T08:03:00.000Z", updatedAt: '2026-10-08T09:00:00.000Z',
};

const A_ID06_BESTALLA_KORT_STEG_FOR_STEG_HTML = `
<p>Ska ditt företag ta sitt första uppdrag som underentreprenör hos en generalentreprenör (GE)? Då kommer ID06-kort och giltig arbetsmiljöutbildning att vara en förutsättning för att du och dina anställda överhuvudtaget ska släppas in på arbetsplatsen. GE:n behöver kunna registrera alla som arbetar på plats i den elektroniska personalliggaren, och ID06-kortet är det praktiska verktyget för det. Den här guiden går igenom hela flödet steg för steg – förutsättningarna för företaget, det viktiga nya identifieringskravet som gäller från 28 januari 2026, hur du beställer och validerar kortet, samt vad kompetensdatabasen faktiskt kräver.</p>

<p>Innan ni är igång med kort och närvaroregistrering underlättar det att ha rutiner för tid och närvaro på plats – ladda ner vår <a href="/sv/verktyg/tidrapport-mall">gratis tidrapport-mall -&gt;</a> och koppla ihop den med personalliggaren från dag ett.</p>

<h2>Vad är ID06 och varför krävs det på byggarbetsplatsen</h2>
<p>ID06 är ett branschgemensamt system för att styrka identitet och närvaro på byggarbetsplatser. Kravet hänger ihop med den elektroniska personalliggaren, som är obligatorisk på de flesta byggarbetsplatser sedan 1 januari 2016 enligt skatteförfarandelagen. För 2026 är prisbasbeloppet 59 200 kr, vilket ger tröskeln 4 × pbb = 236 800 kr i sammanlagd byggkostnad. Överstiger projektet det beloppet krävs personalliggare redan från första arbetsdagen.</p>
<p>Skatteverket gör oanmälda kontroller och tar ut kontrollavgifter om liggaren inte sköts. Avgiften är 12 500 kr om personalliggaren inte förs korrekt, plus 2 500 kr per person som är på plats men inte registrerad. Har byggherren dessutom missat att anmäla till Skatteverket var och när byggarbetet startar blir avgiften 25 000 kr. Det handlar alltså inte bara om formalia – utan om sund konkurrens och om att undvika kännbara avgifter som ofta hamnar hos GE:n och därmed på deras krav mot dig.</p>

<h2>Innan du beställer – förutsättningar för företaget</h2>
<p>Kort beställs alltid via företaget, inte av privatpersonen. Innan du kan ansluta och beställa behöver ditt bolag uppfylla följande:</p>
<ul>
<li>Företaget har <strong>F-skatt</strong>.</li>
<li>Företaget är <strong>registrerat som arbetsgivare</strong> hos Skatteverket.</li>
<li>Företaget är <strong>inte på obestånd</strong> (ekonomiska svårigheter).</li>
<li>Företaget är <strong>anslutet till ID06-systemet</strong> via en kortutgivare.</li>
</ul>
<p>En viktig begränsning: du får bara beställa och registrera ID06-kort till <strong>egen lönesatt personal</strong> – anställda som företaget betalar lön och lagstadgade arbetsgivaravgifter för. Det är så systemet verifierar anställningsförhållandet. Du kan alltså inte lösa kort åt en inhyrd konsult eller en annan UE:s personal.</p>

<h2>Nya identifieringskravet från 28 januari 2026</h2>
<p>Detta är den enskilt viktigaste förändringen att känna till just nu. Från och med 28 januari 2026 gäller ett skärpt säkerhetskrav: kortinnehavaren måste identifiera sig och godkänna beställningen med ett <strong>giltigt pass eller nationellt ID-kort</strong> som godtas som resehandling inom EU.</p>
<p>Det innebär att <strong>BankID/e-legitimation, körkort och personbevis inte längre räcker</strong> för att godkänna en kortbeställning. Identiteten valideras genom att pass eller nationellt ID-kort skannas via ID06:s mobilapp eller hos en auktoriserad skanningspartner. Tredjelandsmedborgare (utanför EU/EES) ska dessutom, precis som tidigare, skanna sitt <strong>uppehållstillståndskort</strong>.</p>
<p>Rådet från ID06 är att inventera de anställdas ID-handlingar i god tid. Även omregistreringar och förnyelser kommer att omfattas, så säkerställ att varje medarbetare – både ny och befintlig – har en giltig handling innan ni behöver beställa eller förnya kort.</p>

<h2>Beställa ID06-kort steg för steg</h2>
<ol>
<li><strong>Anslut företaget till ID06.</strong> Administratören tecknar anslutning via en kortutgivare. Anslutningen förutsätter F-skatt, arbetsgivarregistrering och att bolaget inte är på obestånd.</li>
<li><strong>Skapa kortbeställningen.</strong> Företagets administratör lägger en beställning för den anställde hos kortutgivaren.</li>
<li><strong>Validera identiteten.</strong> Den anställde skannar sitt pass eller nationella ID-kort i ID06-appen eller hos en skanningspartner. Tredjelandsmedborgare skannar även uppehållstillståndskortet.</li>
<li><strong>Godkänn beställningen.</strong> Innehavaren godkänner ordern i samband med skanningen – från 28 januari 2026 med pass/nationellt ID, inte BankID.</li>
<li><strong>Kortet tillverkas och skickas.</strong> Kortet produceras och skickas till angiven adress (inrikes frakt ingår).</li>
<li><strong>Aktivera kortet.</strong> När kortet kommit aktiveras det med tillhörande PIN-kod, varefter det kan användas för in- och utcheckning i personalliggaren.</li>
</ol>

<h2>Kompetensdatabasen och Safe Construction Training</h2>
<p>Ett giltigt kort är sällan tillräckligt – de flesta svenska generalentreprenörer kräver att UE:ns personal har genomfört <strong>Safe Construction Training</strong>, Byggföretagens obligatoriska och kostnadsfria arbetsmiljöutbildning som krävts på medlemmarnas arbetsplatser sedan 1 juli 2021. Ett godkänt resultat är giltigt i 5 år och registreras gratis i <strong>ID06 Kompetensdatabas</strong>.</p>
<p>Sedan 30 september 2025 hanteras kompetensdatabasen utan individens samtycke – den rättsliga grunden är numera en intresseavvägning, så utbildningsleverantörer registrerar intyg direkt. Undantag gäller för utbildningar kopplade till fackligt uppdrag eller skyddsombud, där individens godkännande fortfarande krävs för att intyget ska visas för arbetsgivare. Utöver Safe Construction Training kan uppdraget kräva andra behörigheter som Heta arbeten eller ställningsbyggnad – kontrollera GE:ns leverantörskrav i förväg.</p>

<h2>Kostnader och giltighetstid</h2>
<ul>
<li><strong>Kortpris:</strong> 280 kr/st vid köp, vilket inkluderar anslutningsavgiften och inrikes frakt. Från år två tillkommer en årlig kortavgift på 80 kr/st så länge kortet är aktivt.</li>
<li><strong>Anslutningsavgift (företag):</strong> trappas efter antal kort per år – 500 kr (0–10 kort), 1 000 kr (11–50), 2 000 kr (51–100), 3 000 kr (101–250), 5 000 kr (251–1 000) och 10 000 kr (fler än 1 000).</li>
<li><strong>Giltighetstid:</strong> max 5 år, anpassad till personens rätt att arbeta i Sverige. Svenska medborgare får som regel upp till 5 år, EU/EES-medborgare som betalar skatt i hemlandet ofta 6 månader, och tredjelandsmedborgare typiskt 3 månader kopplat till uppehålls- och arbetstillstånd.</li>
</ul>

<h2>Vanliga misstag att undvika</h2>
<ul>
<li>Att vänta med att kontrollera pass/nationellt ID – utan giltig handling går beställningen inte igenom efter 28 januari 2026.</li>
<li>Att tro att BankID räcker för att godkänna ordern. Det gör det inte längre.</li>
<li>Att beställa kort till personal du inte betalar lön och arbetsgivaravgifter för.</li>
<li>Att missa Safe Construction Training – kortet i sig öppnar inte grinden om utbildningen saknas i kompetensdatabasen.</li>
<li>Att inte planera för korta giltighetstider för utländsk arbetskraft, vilket kan stoppa personal mitt i ett projekt.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp beställer inte ID06-kort åt dig – det gör du via en kortutgivare. Men när korten väl finns på plats hjälper ByggExp dig att hålla ordning på det som händer runt kortet: tidrapportering, närvaro och underlag som stämmer överens med personalliggaren. Med strukturerad tidrapportering blir det enklare att stämma av att alla som varit på plats också är registrerade, vilket minskar risken för kontrollavgifter och missförstånd med generalentreprenören. Du samlar timmar, projekt och personal på ett ställe och får ett rent underlag för fakturering och uppföljning.</p>

<h2>Vanliga frågor</h2>
<h3>Vad kostar ett ID06-kort?</h3>
<p>Ett kort kostar 280 kr/st vid köp, inklusive anslutningsavgift och inrikes frakt. Från och med år två tillkommer en årlig avgift på 80 kr/st så länge kortet är aktivt. Företaget betalar dessutom en anslutningsavgift som trappas efter antal beställda kort per år, från 500 kr till 10 000 kr.</p>
<h3>Räcker BankID för att beställa ID06 2026?</h3>
<p>Nej. Från 28 januari 2026 måste innehavaren identifiera sig och godkänna beställningen med giltigt pass eller nationellt ID-kort som godtas som resehandling inom EU. BankID, körkort och personbevis accepteras inte längre för att godkänna ordern.</p>
<h3>Hur lång giltighetstid har kortet?</h3>
<p>Högst 5 år, men tiden anpassas efter personens rätt att arbeta i Sverige. Svenska medborgare får ofta upp till 5 år, EU/EES-medborgare som betalar skatt i hemlandet typiskt 6 månader och tredjelandsmedborgare omkring 3 månader, kopplat till uppehålls- och arbetstillstånd.</p>
<h3>Måste jag ha Safe Construction Training?</h3>
<p>De flesta generalentreprenörer kräver det. Utbildningen är gratis, giltig i 5 år och registreras kostnadsfritt i ID06 Kompetensdatabas. Kontrollera alltid GE:ns leverantörskrav i förväg, eftersom även andra behörigheter kan krävas.</p>

<h2>Kom igång</h2>
<p>Beställ ID06-kort via din kortutgivare, säkerställ att alla har giltigt pass eller nationellt ID och att Safe Construction Training finns registrerad i kompetensdatabasen. När korten är på plats håller du enkelt ordning på tid och närvaro med vår <a href="/sv/verktyg/tidrapport-mall">gratis tidrapport-mall</a>. Vill du se hur ByggExp knyter ihop tidrapportering med personalliggaren inför uppdraget? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/id06">ID06 – så fungerar systemet</a>, <a href="/sv/blog/personalliggare">Personalliggare i byggbranschen</a> och <a href="/sv/blog/kontrollavgift-personalliggare">Kontrollavgift för personalliggare</a>.</p>
`;

const A_ID06_BESTALLA_KORT_STEG_FOR_STEG: BlogPost = {
  _id: "code-"+"id06-bestalla-kort-steg-for-steg",
  title: "Så beställer du ID06-kort steg för steg inför ditt första uppdrag hos en generalentreprenör", slug: "id06-bestalla-kort-steg-for-steg", locale: "sv",
  excerpt: "Komplett guide för hantverkare och byggföretag: från företagets förutsättningar och det nya identifieringskravet 2026 till validering, kostnader och Safe Construction Training.", tag: "Personalliggare",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_ID06_BESTALLA_KORT_STEG_FOR_STEG_HTML,
  seoTitle: "ID06-kort 2026: vad kostar det, beställa & förnya | ByggExp", seoDescription: "ID06-kort kostar 280 kr/st och 80 kr/år från år två. Så beställer du kortet steg för steg, när det ska förnyas (max 5 år) och pass-kravet från 28 januari.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:24:00.000Z", createdAt: "2026-08-19T08:24:00.000Z", updatedAt: "2026-10-14T12:00:00.000Z",
};

const A_STARTBESKED_BYGGLOV_PROCESS_2026_HTML = `
<p>Att ha bygglovet i handen är inte samma sak som att få börja bygga. Den missuppfattningen är dyr: startar du byggnadsarbetet utan ett separat <strong>startbesked</strong> väntar en byggsanktionsavgift som kan landa på miljonbelopp. Bygglov och startbesked är två helt olika beslut – och som byggföretag, entreprenör eller byggherre behöver du hålla ordningen på plats innan spaden går i marken. Här går vi igenom den lagstadgade processen enligt plan- och bygglagen (PBL), steg för steg, med de regler som gäller under 2026.</p>

<p>En fastställd kontrollplan är en av grundstenarna för att över huvud taget få startbesked – börja med att strukturera din i vår <a href="/sv/verktyg/kontrollplan-mall">gratis kontrollplansmall -></a>.</p>

<h2>Den lagstadgade ordningen steg för steg</h2>
<p>Byggprocessen enligt PBL följer en fast ordning som byggnadsnämnden håller i. Den ser ut så här:</p>
<ol>
<li>Ansökan om bygglov</li>
<li>Beslut om bygglov</li>
<li>Tekniskt samråd (vid behov)</li>
<li>Startbesked</li>
<li>Byggstart</li>
<li>Arbetsplatsbesök</li>
<li>Slutsamråd</li>
<li>Slutbesked</li>
</ol>
<p>Notera att <strong>bygglov (steg 2)</strong> och <strong>startbesked (steg 4)</strong> är två separata beslut med olika syften. Det ena avgör om du får bygga något över huvud taget; det andra avgör om du får börja bygga just nu. Att förväxla dem är det vanligaste – och kostsammaste – felet i hela processen.</p>

<h2>Bygglov ≠ startbesked – den dyra missuppfattningen</h2>
<p>Bygglovet prövar <em>lokaliseringen och utformningen</em>: passar byggnaden på tomten, stämmer den med detaljplanen, är den lämplig för sitt ändamål? Startbeskedet prövar i stället de <em>tekniska egenskapskraven</em> – konstruktion, brand, energi, fukt – och ger själva klartecknet att sätta i gång.</p>
<p>Lagen är uttrycklig: enligt 10 kap. 3 § PBL får en åtgärd som kräver bygglov, rivningslov, marklov eller anmälan inte påbörjas innan byggnadsnämnden har gett startbesked. Ett bygglov är alltså inte grönt ljus. Först när startbeskedet ligger på bordet – och lovet har börjat gälla, mer om det nedan – får arbetet börja.</p>

<h2>Tekniskt samråd – vad händer på mötet</h2>
<p>Om ärendet kräver en kontrollansvarig (KA) ska byggnadsnämnden utan dröjsmål kalla till tekniskt samråd, om det inte är uppenbart obehövligt eller byggherren själv begär det. Detta regleras i 10 kap. 14 § PBL. Kravet på KA gäller i ärenden som kräver lov eller anmälan och där tekniskt samråd ska hållas (10 kap. 9 §).</p>
<p>På samrådet går nämnden, byggherren och den kontrollansvarige tillsammans igenom bland annat:</p>
<ul>
<li>kontrollplanen och hur kontrollerna ska genomföras</li>
<li>den kontrollansvariges roll och uppgifter</li>
<li>arbetets planering och organisation</li>
<li>behovet av eventuell riskbedömning och tekniskt underlag</li>
</ul>
<p>Behövs inget tekniskt samråd ska nämnden i stället ge startbesked i samband med lovbeslutet eller snarast därefter. Osäker på om ditt projekt kräver en KA? Läs vår genomgång av <a href="/sv/blog/kontrollansvarig-nar-behovs">när kontrollansvarig behövs</a>.</p>

<h2>Vad krävs för att få startbesked</h2>
<p>För att få startbesked måste byggherren visa att åtgärden kan antas uppfylla kraven i PBL med föreskrifter (10 kap. 23 §). I praktiken handlar det om:</p>
<ul>
<li>en fastställd kontrollplan</li>
<li>utsedd kontrollansvarig där sådan krävs</li>
<li>tekniskt underlag – konstruktionshandlingar, brandskydd, energiberäkning där det är relevant</li>
</ul>
<p>Innan startbeskedet får du göra vissa förberedelser: sätta upp byggstängsel, ansöka om schakttillstånd, göra enklare markmätning. Men själva byggnadsarbetet får inte påbörjas. Gränsen går vid det som faktiskt förändrar byggnaden eller marken enligt lovet. En tydlig egenkontroll underlättar dokumentationen – strukturera den i vår <a href="/sv/verktyg/egenkontroll-mall">egenkontrollsmall</a>.</p>

<h2>När lovet börjar gälla och den nya kungörelsen från 1 december 2025</h2>
<p>Här kommer den stora nyheten för 2026. Genom Lag 2025:974, som trädde i kraft den 1 december 2025, gäller ett nytt regelverk för bygglov. För ärenden som kommit in från och med den 1 december 2025 gäller ett beslut om bygglov, rivningslov eller marklov <strong>omedelbart</strong>, även om det inte har fått laga kraft (9 kap. 114 § PBL). Den tidigare regeln – att bygget normalt inte fick påbörjas förrän fyra veckor efter att lovbeslutet kungjorts – är alltså borttagen för nya ärenden.</p>
<p>Det finns ett viktigt undantag: byggnadsnämnden ska bestämma att lovet gäller först när det har fått laga kraft om det finns risk för att åtgärden medför skador som inte kan återställas på natur- eller kulturvärden, eller på totalförsvarets intressen. I de fallen måste du vänta på laga kraft innan bygget får starta – även om du har startbesked. För äldre ärenden, inkomna före den 1 december 2025, gäller fortfarande de tidigare bestämmelserna.</p>
<p>Samtidigt har kravet att kungöra lovbeslut i Post- och Inrikes Tidningar (PoIT) tagits bort. För ärenden som kommit in från 1 december 2025 kungörs grannehörande och lovbeslut i stället på kommunens digitala anslagstavla. Det är där lovet tillkännages, vilket styr när överklagandetiden löper och när beslutet kan få laga kraft. Äldre ärenden kungörs fortfarande via PoIT. Praktisk konsekvens: håll koll på kommunens anslagstavla, inte PoIT.</p>

<h2>Vad det kostar att börja för tidigt – byggsanktionsavgift 2026</h2>
<p>Startar du byggnadsarbete utan startbesked tar nämnden ut en byggsanktionsavgift. Avgifterna beräknas som andelar av prisbasbeloppet utifrån åtgärdens art och area (formeln finns i plan- och byggförordningen, PBF 9 kap.) och kan maximalt uppgå till 50 prisbasbelopp.</p>
<p>Prisbasbeloppet för 2026 är fastställt till <strong>59 200 kr</strong> (en höjning med 0,7 % jämfört med 2025). Taket blir därmed 50 × 59 200 = <strong>2 960 000 kr</strong>. Avgiften tas ut även om felet var oavsiktligt, och nämnden har begränsat utrymme att sätta ned den. Att "bara gräva lite" innan pappren är klara kan alltså bli mycket dyrt.</p>

<h2>Tidslinje och avgiftsreduktion – vad du kan kräva av kommunen</h2>
<p>Processen är inte enkelriktad – nämnden har tidsfrister att hålla. Byggnadsnämnden ska handlägga bygglov skyndsamt och besluta inom tio veckor från komplett ansökan (9 kap. 99 § PBL), med möjlighet till förlängning en gång med högst tio veckor (9 kap. 99 § andra stycket).</p>
<p>Överskrids fristen reduceras handläggningsavgiften med en femtedel per påbörjad vecka. Avgiftsreduktionen finns i 12 kap. 8 a § PBL; genom Lag 2025:974 uppdaterades bestämmelsens hänvisning så att den nu utgår från tidsfristen i 9 kap. 99 §. Tänk också på giltighetstiden: bygglovet upphör att gälla om åtgärden inte påbörjats inom två år och avslutats inom fem år från det att beslutet vann laga kraft (9 kap. 115 §). Ett startbesked för en anmälningspliktig åtgärd gäller i två år.</p>

<h2>Vanliga misstag som stoppar bygget</h2>
<ul>
<li>Att tolka bygglovet som klartecken och börja bygga innan startbesked getts.</li>
<li>Att börja bygga trots att nämnden bestämt att lovet gäller först vid laga kraft (undantaget för natur-, kultur- eller totalförsvarsvärden).</li>
<li>Att leta kungörelse i PoIT för nya ärenden i stället för på kommunens digitala anslagstavla.</li>
<li>Att komma till tekniskt samråd utan fastställd kontrollplan – vilket försenar startbeskedet.</li>
<li>Att låta lovet förfalla genom att inte påbörja inom två år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte byggnadsnämnden, men vi hjälper dig att komma dit med rätt underlag. I plattformen bygger du kontrollplaner och egenkontroller efter mall, samlar dokumentationen per projekt och håller den tillgänglig för den kontrollansvarige inför tekniskt samråd. Med allt strukturerat på ett ställe minskar risken att startbeskedet fastnar på en ofullständig kontrollplan – och du har ordning på handlingarna om nämnden gör arbetsplatsbesök. All dokumentation håller du samlad enligt kravet att spara underlag i sju år.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag börja bygga så fort jag fått bygglov?</h3>
<p>Nej. Bygglov och startbesked är två separata beslut. Enligt 10 kap. 3 § PBL får du inte påbörja en lov- eller anmälningspliktig åtgärd innan byggnadsnämnden gett startbesked. Bygglovet prövar lokalisering och utformning; startbeskedet ger klartecknet att börja bygga.</p>
<h3>Måste jag alltid ha ett tekniskt samråd innan startbesked?</h3>
<p>Nej. Tekniskt samråd hålls om ärendet kräver kontrollansvarig, om det inte är uppenbart obehövligt eller om byggherren begär det (10 kap. 14 § PBL). Behövs inget samråd ska nämnden ge startbesked i samband med lovbeslutet eller snarast därefter.</p>
<h3>Vad händer om jag börjar bygga utan startbesked?</h3>
<p>Då tas en byggsanktionsavgift ut. Den beräknas som andelar av prisbasbeloppet utifrån åtgärd och area och kan för 2026 maximalt uppgå till 50 prisbasbelopp, det vill säga 2 960 000 kr. Avgiften tas ut även om överträdelsen var oavsiktlig.</p>
<h3>Räcker startbeskedet, eller måste jag vänta ytterligare?</h3>
<p>För ärenden inkomna från 1 december 2025 gäller lovet omedelbart, även utan laga kraft (9 kap. 114 § PBL) – den tidigare fyraveckorsfristen efter kungörelse är borttagen. Har nämnden däremot bedömt att åtgärden kan medföra skador som inte kan återställas på natur-, kultur- eller totalförsvarsvärden, ska den bestämma att lovet gäller först vid laga kraft, och då måste du vänta. Kungörelsen sker numera på kommunens digitala anslagstavla.</p>

<h2>Kom igång</h2>
<p>Lägg grunden för ett smidigt startbesked genom att ha kontrollplanen klar i god tid inför det tekniska samrådet. Kom i gång direkt med vår <a href="/sv/verktyg/kontrollplan-mall">kontrollplansmall</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du håller dokumentationen samlad genom hela byggprocessen.</p>

<p>Relaterat: <a href="/sv/blog/boverkets-nya-byggregler-2026-kontrollplan">Boverkets nya byggregler 2026 och kontrollplanen</a>, <a href="/sv/blog/kontrollplan-mall-bygglov">Kontrollplan och mall för bygglov</a>, <a href="/sv/blog/kontrollansvarig-nar-behovs">Kontrollansvarig – när behövs det?</a></p>
`;

const A_STARTBESKED_BYGGLOV_PROCESS_2026: BlogPost = {
  _id: "code-"+"startbesked-bygglov-process-2026",
  title: "Startbesked och bygglov: PBL-processen steg för steg 2026", slug: "startbesked-bygglov-process-2026", locale: "sv",
  excerpt: "Bygglov och startbesked är två olika beslut. Här är hela PBL-processen 2026 – med de nya reglerna om när ett lov börjar gälla efter Lag 2025:974.", tag: "Bygglov",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_STARTBESKED_BYGGLOV_PROCESS_2026_HTML,
  seoTitle: "Startbesked & bygglov 2026 | ByggExp", seoDescription: "Bygglov är inte startbesked. Så fungerar PBL-processen 2026: startbesked, tekniskt samråd, nya verkställbarhetsregler (Lag 2025:974) och byggsanktionsavgifter.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T09:40:00.000Z", createdAt: "2026-08-19T09:40:00.000Z", updatedAt: "2026-08-19T09:40:00.000Z",
};

const A_UTSTATIONERING_UTLANDSK_ARBETSKRAFT_BYGG_HTML = `
<p>Bristen på yrkesarbetare gör det frestande att ta in utländsk arbetskraft eller en utländsk underentreprenör när kalendern är full. Problemet är att utstationering hör till det hårdast reglerade i branschen, och missar kostar snabbt tiotusentals kronor i sanktionsavgifter – utöver risken att åka ur en offentlig upphandling. Den här guiden är en konkret B2B-checklista för att göra det lagligt under 2026. Redan i inledningen är det viktigt att skilja på tre olika vägar: (a) utstationering från ett EU/EES-företag som skickar sin egen personal hit, (b) att anställa en enskild tredjelandsmedborgare på arbetstillstånd, och (c) att köpa en tjänst av en utländsk underentreprenör. Reglerna skiljer sig mellan spåren, och att blanda ihop dem är själva grundfelet.</p>

<p>Ett bra sätt att hålla ordning på arbetsmiljö- och kontrolldokumentationen är att strukturera den från start med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a>, så att anmälningsbevis, A1-intyg och ID06-loggning samlas på ett ställe.</p>

<h2>Vad räknas som utstationering?</h2>
<p>Utstationering innebär att en utländsk arbetsgivare tillfälligt skickar sina egna anställda för att arbeta i Sverige, medan anställningen fortsatt ligger kvar i hemlandet. Det är alltså inte samma sak som att du själv anställer en person, och inte heller samma sak som att du köper en färdig tjänst av ett utländskt bolag. För arbetstagare från EU/EES gäller fri rörlighet – de behöver inget arbetstillstånd. För tredjelandsmedborgare krävs däremot arbetstillstånd från Migrationsverket, oavsett om de kommer via utstationering eller anställs direkt. Vilken kategori arbetet faller in under är avgörande, eftersom det styr vilka anmälningar, intyg och skatteregler som blir aktuella. Fastnar du i fel spår riskerar du både fel dokumentation och fel skattehantering.</p>

<h2>Utstationeringsanmälan till Arbetsmiljöverket</h2>
<p>Kärnplikten ligger hos den utländska arbetsgivaren. Företaget måste registrera utstationeringen och en kontaktperson i Sverige i Arbetsmiljöverkets e-tjänst "Anmäl utstationering" senast den dag arbetet påbörjas i Sverige. Missas det är sanktionsavgiften 20 000 kr, plus upp till ytterligare 20 000 kr om obligatoriska uppgifter saknas. Anmälan ska uppdateras vid tolv månader, och arbetsgivaren kan förlänga tröskeln till 18 månader genom att anmäla en motivering till Arbetsmiljöverket före tolvmånadersgränsen.</p>
<p>Men glöm inte din egen spegelplikt som tjänstemottagare. Du ska ha fått dokumentation på att anmälan gjorts senast den dag arbetet börjar. Får du inte det måste du själv anmäla till Arbetsmiljöverket inom tre dagar från arbetsstart – annars riskerar du en egen sanktionsavgift på 20 000 kr. Undantaget gäller bara privatpersoner som anlitar för eget bruk, inte företag. Praktiskt tips: skriv in att anmälningsbeviset ska lämnas som villkor för första betalningen i kontraktet, så tvingar du fram dokumentationen i rätt tid.</p>

<h2>A1-intyg och socialförsäkring</h2>
<p>A1-intyget avgör vilket lands sociala avgifter som ska betalas. Ett giltigt A1 visar att den utstationerade arbetstagaren fortsatt omfattas av – och betalar avgifter i – hemlandets socialförsäkringssystem, så att avgifterna inte ska betalas två gånger. Intyget utfärdas av hemlandets socialförsäkringsmyndighet, motsvarigheten till Försäkringskassan. Saknas ett giltigt A1 kan svenska arbetsgivaravgifter komma att krävas. Samla därför alltid in ett A1 för varje utstationerad arbetstagare innan arbetet startar, och kontrollera att intygets giltighetstid täcker hela utstationeringsperioden. Ett intyg som löper ut mitt i projektet är en risk du inte vill upptäcka i efterhand.</p>

<h2>Skatt: ekonomisk arbetsgivare, F-skatt och omvänd byggmoms</h2>
<p>Här finns tre skattefällor som lätt förbises. Den första är reglerna om ekonomisk arbetsgivare, som gäller sedan 1 januari 2021. Vid uthyrning av personal gäller inte längre 183-dagarsregeln: en utländsk arbetstagare som hyrs ut till en svensk uppdragsgivare som leder arbetet beskattas i Sverige från dag ett. Det finns ett smalt undantag för arbete på högst 15 sammanhängande dagar och högst 45 dagar totalt per kalenderår – räkna med beskattningen i din kalkyl.</p>
<p>Den andra fällan är F-skatt. Kontrollera att en utländsk underentreprenör har svensk F-skatt och är momsregistrerad där det krävs. Ett utländskt bolag utan F-skatt kan göra dig som betalare skyldig att innehålla preliminärskatt på fakturan. Den tredje är omvänd byggmoms: mellan byggföretag är det du som köpare som redovisar och betalar momsen. Fakturan ska ställas ut utan moms, ange ditt momsnummer och en text i stil med "Omvänd skattskyldighet för byggtjänster gäller". Regeln förutsätter att du som köpare är momsregistrerad.</p>

<h2>Arbetsmiljöansvar och personalliggare på bygget</h2>
<p>Oavsett vem som är formell arbetsgivare behåller det svenska arbetsstället – via byggarbetsmiljösamordnaren och arbetsgivaren på plats – arbetsmiljöansvaret för alla som arbetar på bygget. Det ställer krav på att skyddsinstruktioner faktiskt förstås, vilket i praktiken betyder att språkfrågan måste hanteras aktivt när personalen kommer utifrån.</p>
<p>Elektronisk personalliggare via ID06 är obligatorisk på byggarbetsplatser, och varje person ska loggas – inklusive utländska underentreprenörers anställda. Skatteverkets kontrollavgift är 12 500 kr plus 2 500 kr per person som är på plats men inte registrerad, och 25 000 kr om byggherren inte har anmält byggstart och plats. Från och med första kvartalet 2026 skärps dessutom ID06: den som godkänner en kortbeställning måste legitimera sig med pass eller ett EU-godkänt nationellt id-kort. Se till att era rutiner klarar det innan korten ska förnyas.</p>

<h2>Entreprenörsansvar – din risk för underleverantörens löner</h2>
<p>Sedan 1 januari 2019 finns ett entreprenörsansvar för lönefordringar i bygg- och anläggningsbranschen. Det innebär att du kan bli ansvarig för en underleverantörs obetalda löner. Arbetstagarens direkta uppdragsgivare är ansvarig i första hand; betalar den inte inom 14 helgfria vardagar eller inte går att nå, kan huvudentreprenören hållas ansvarig. Arbetstagaren måste anmäla sitt krav inom sex månader, och ansvaret omfattar även utstationerade arbetstagare. Skydda dig med skriftliga garantier om lön på kollektivavtalsnivå, innehållandeklausuler och löpande dokumentation av att UE faktiskt betalar sina anställda.</p>

<h2>Tredjelandsmedborgare: arbetstillstånd 2026</h2>
<p>Är arbetstagaren medborgare utanför EU/EES krävs arbetstillstånd från Migrationsverket. Från 1 juni 2026 måste lönen vara minst 90 procent av svensk medianlön (75 procent för vissa undantagna grupper), och lönen ska dessutom motsvara kollektivavtal eller praxis i branschen. En sexmånaders övergång fram till 1 december 2026 håller kvar den tidigare nivån på 80 procent av medianlönen för förlängningar som beviljas enligt gamla regler. Att anlita personal utan giltigt tillstånd kan leda till sanktioner mot arbetsgivaren – kontrollera tillståndet innan arbetet börjar.</p>

<h2>Checklista: så gör du lagligt</h2>
<ul>
<li>Verifiera att utstationeringsanmälan är gjord – begär in beviset.</li>
<li>Samla in giltigt A1-intyg för varje arbetstagare, med rätt giltighetstid.</li>
<li>Kontrollera UE:s F-skatt och momsregistrering.</li>
<li>Logga alla på bygget i ID06 – även UE:s personal.</li>
<li>Säkra entreprenörsansvaret med löne- och innehållandeklausuler.</li>
<li>Bekräfta arbetstillstånd om arbetstagaren är tredjelandsmedborgare.</li>
<li>Kontrollera att lönen ligger på kollektivavtalsnivå.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte en anmälan till Arbetsmiljöverket eller ett A1-intyg, men vi hjälper dig att hålla ordning på dokumentationen som gör kontrollerna smärtfria. Samla anmälningsbevis, A1-intyg, F-skattekontroll och kollektivavtalsvillkor per projekt och underentreprenör, så att allt går att ta fram vid en granskning. Med strukturerad egenkontroll och tydliga rutiner för vilka handlingar som ska finnas innan arbetet startar minskar du risken för sanktionsavgifter och för att fastna på entreprenörsansvaret. Verktygen ger dig spårbarhet – inte juridisk rådgivning – men det är ofta just spårbarheten som saknas när det brister.</p>

<h2>Vanliga frågor</h2>
<h3>Vem ansvarar för utstationeringsanmälan?</h3>
<p>Den utländska arbetsgivaren gör själva anmälan senast den dag arbetet börjar. Du som svensk tjänstemottagare ska ta emot dokumentation på att den gjorts, och om du inte får det måste du själv anmäla till Arbetsmiljöverket inom tre dagar för att undvika en egen sanktionsavgift på 20 000 kr.</p>
<h3>Måste alla utstationerade ha A1-intyg?</h3>
<p>Ja. A1-intyget visar att arbetstagaren omfattas av hemlandets socialförsäkring, så att sociala avgifter inte betalas dubbelt. Utan ett giltigt A1 kan svenska arbetsgivaravgifter krävas, så samla in intyget innan arbetet startar och kontrollera att giltighetstiden täcker hela perioden.</p>
<h3>Kan jag bli ansvarig för en utländsk UE:s obetalda löner?</h3>
<p>Ja. Entreprenörsansvaret för lönefordringar omfattar även utstationerade arbetstagare. Uppdragsgivaren är ansvarig först, men betalar den inte inom 14 helgfria vardagar kan huvudentreprenören hållas ansvarig. Arbetstagaren har sex månader på sig att anmäla kravet.</p>
<h3>Gäller 183-dagarsregeln för inhyrd utländsk personal?</h3>
<p>Nej. Sedan reglerna om ekonomisk arbetsgivare infördes 2021 beskattas uthyrd personal i Sverige från dag ett när den svenska uppdragsgivaren leder arbetet. Undantaget gäller bara arbete på högst 15 sammanhängande dagar och högst 45 dagar totalt per kalenderår.</p>

<h2>Kom igång</h2>
<p>Att göra rätt skyddar dig mot sanktionsavgifter, löneansvar och att svartlistas i offentlig upphandling. Börja med att strukturera dokumentationen i <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a>, och vill du se hur ByggExp samlar projekt, UE-handlingar och kontroller på ett ställe kan du <a href="/sv/contact">boka en demo här</a>. Reglerna ändras – stäm alltid av aktuella krav med Arbetsmiljöverket, Skatteverket och Migrationsverket innan du sätter igång.</p>

<p>Relaterat: <a href="/sv/blog/inhyrd-personal-regler">Regler för inhyrd personal</a>, <a href="/sv/blog/anlita-underentreprenor">Anlita underentreprenör – så gör du rätt</a>, <a href="/sv/blog/entreprenorsansvar-lon">Entreprenörsansvar för löner</a>.</p>
`;

const A_UTSTATIONERING_UTLANDSK_ARBETSKRAFT_BYGG: BlogPost = {
  _id: "code-"+"utstationering-utlandsk-arbetskraft-bygg",
  title: "Utstationering och utländsk arbetskraft i bygg – så anlitar du lagligt 2026", slug: "utstationering-utlandsk-arbetskraft-bygg", locale: "sv",
  excerpt: "En steg-för-steg-guide för byggföretag som anlitar utstationerad eller utländsk arbetskraft lagligt – från anmälan och A1-intyg till skatt, personalliggare och entreprenörsansvar.", tag: "Regelverk",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_UTSTATIONERING_UTLANDSK_ARBETSKRAFT_BYGG_HTML,
  seoTitle: "Utstationering utländsk arbetskraft | ByggExp", seoDescription: "Anlita utländsk arbetskraft eller UE lagligt: utstationeringsanmälan, A1-intyg, F-skatt, personalliggare och entreprenörsansvar. B2B-checklista för 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T11:18:00.000Z", createdAt: "2026-08-19T11:18:00.000Z", updatedAt: "2026-08-19T11:18:00.000Z",
};

const A_KLIMATDEKLARATION_BYGGNAD_KRAV_HTML = `
<p>Sedan 2022 måste de flesta nya byggnader i Sverige klimatdeklareras innan projektet kan avslutas. För byggföretag är detta inte en frivillig hållbarhetsövning utan ett hårt myndighetskrav som är kopplat direkt till slutbesked. Och kraven skärps: fram mot 2028 och 2030 breddas deklarationen till hela livscykeln och binds till gränsvärden som avgör vad du över huvud taget får bygga. Här går vi igenom vad som gäller idag och hur du förbereder företaget för det som kommer.</p>

<p>Bygg in klimatdeklarationen som en rutin i varje projekt redan från bygglov. Samla dina mallar och checklistor bland <a href="/sv/verktyg">våra gratis verktyg för byggföretag →</a> så att inget faller mellan stolarna när slutbeskedet ska ut.</p>

<h2>Vad är en klimatdeklaration och varför den finns</h2>
<p>En klimatdeklaration redovisar en byggnads klimatpåverkan från byggskedet. Kravet är obligatoriskt sedan den 1 januari 2022 enligt Lag (2021:787) om klimatdeklaration för byggnader och gäller byggnader där bygglovsansökan lämnades in till byggnadsnämnden den 1 januari 2022 eller senare. Syftet är att synliggöra byggandets utsläpp och skapa ett underlag för att styra branschen mot lägre klimatpåverkan.</p>
<p>Poängen att ta med sig är att detta är ett compliance-krav, inte en marknadsföringsfråga. Klimatdeklarationen lämnas till Boverket, som också är tillsynsmyndighet, och den knyter ihop bygglovet med slutbeskedet.</p>

<h2>Vem ansvarar? Byggherrens ansvar i praktiken</h2>
<p>Det är byggherren som enligt lag ansvarar för att ta fram och lämna in klimatdeklarationen. Byggherren registrerar och skickar in deklarationen till Boverket, och det är också Boverket som utövar tillsyn.</p>
<p>I praktiken utför ofta en entreprenör eller konsult själva LCA-beräkningen, men det juridiska ansvaret stannar hos byggherren. Är du totalentreprenör och samtidigt byggherre bär du hela ansvaret. Är du underentreprenör bör du ändå säkra att materialdata och produktinformation levereras i tid, eftersom byggherren är beroende av dina underlag för att kunna deklarera korrekt.</p>

<h2>Vilka byggnader omfattas – och undantagen</h2>
<p>Huvudregeln är enkel: omfattas gör nya byggnader där bygglov söktes den 1 januari 2022 eller senare. Men ett antal byggnadstyper är undantagna. Kontrollera alltid mot Boverkets aktuella lista, men i korthet slipper följande krav idag:</p>
<ul>
<li>Byggnader med högst 100 m² bruttoarea (BTA).</li>
<li>Tillfälliga byggnader som ska användas i högst 2 år.</li>
<li>Byggnader som inte kräver bygglov.</li>
<li>Byggnader för industri- eller verkstadsändamål.</li>
<li>Ekonomibyggnader för jord- och skogsbruk.</li>
<li>Byggnader för försvar och nationell säkerhet.</li>
<li>Privatpersoner som bygger utanför näringsverksamhet.</li>
</ul>
<p>För dig som bygger åt privatperson är detta viktigt: bygger denne utanför näringsverksamhet finns inget krav, men i de allra flesta yrkesmässiga nybyggnadsprojekt gäller kravet fullt ut.</p>

<h2>Vad ska redovisas idag</h2>
<p>Dagens klimatdeklaration omfattar enbart byggskedet, det vill säga modulerna A1–A5 enligt EN 15978. A1–A3 är produktskedet (råvaror, transport och tillverkning), A4 är transport till byggarbetsplatsen och A5 är själva bygg- och installationsprocessen.</p>
<p>De byggdelar som ska redovisas är bärande konstruktion, klimatskärm och innerväggar. Tillsammans fångar de ungefär 80–90 procent av klimatpåverkan i A1–A3, vilket är skälet till att just dessa delar valts ut. Byggnadens driftenergi under användningstiden ingår däremot inte i dagens krav.</p>
<p>Som dataunderlag används miljövarudeklarationer (EPD) för produkterna samt Boverkets klimatdatabas med generiska värden när specifik produktdata saknas. Ju mer specifik EPD-data du samlar in tidigt, desto mer rättvisande blir resultatet.</p>

<h2>Kopplingen till slutbesked och påföljder</h2>
<p>Här ligger den skarpa spärren. Byggnadsnämnden får inte utfärda slutbesked förrän byggherren har visat att en klimatdeklaration har lämnats in, eller gjort sannolikt att någon skyldighet att deklarera inte finns. Det är den primära kontrollmekanismen.</p>
<p>Någon direkt byggsanktionsavgift för en utebliven eller försenad klimatdeklaration finns däremot inte i dagens regelverk – den sanktionsavgift som klimatdeklarationslagen innehåller träffar enbart oriktiga uppgifter i en redan inlämnad deklaration. En byggsanktionsavgift enligt plan- och bygglagen kan dock bli aktuell indirekt, om byggnaden tas i bruk utan slutbesked. Den praktiska risken är minst lika allvarlig: projektet kan helt enkelt inte avslutas. Ett saknat eller försenat underlag betyder utebliven slutbesiktning, försenad inflyttning och bundet kapital. Behandla klimatdeklarationen som en leverabel med samma dignitet som kontrollplanen, inte som en efterhandsformalitet.</p>

<h2>Det stora skiftet: EPBD, utökad deklaration och gränsvärden 2028–2030</h2>
<p>Nu kommer förändringen. En EU-delegerad förordning som ändrar bilaga III i det omarbetade energiprestandadirektivet (EPBD) antogs av EU-kommissionen den 16 december 2025 och väntas träda i kraft under 2026 efter granskningsperioden i rådet och Europaparlamentet. Den anger hur en byggnads livscykel-GWP ska beräknas.</p>
<p>Enligt det omarbetade EPBD ska livscykel-GWP beräknas och redovisas i byggnadens energideklaration från den 1 januari 2028 för alla nya byggnader större än 1 000 m², och från den 1 januari 2030 för samtliga nya byggnader. Efter ett regeringsuppdrag från december 2024 levererade Boverket sina lagförslag i Rapport 2026:16 till deadline den 1 juni 2026. Förslaget innebär en utökad klimatdeklaration i kraft från januari 2028 och bindande gränsvärden från januari 2030.</p>
<p>Regelverket föreslås flyttas in i plan- och bygglagen. Den nuvarande fristående Lag (2021:787) om klimatdeklaration föreslås upphävas i slutet av mars 2027, då de nya PBL-baserade reglerna är tänkta att träda i kraft den 1 april 2027, och ersättas av det EPBD-baserade systemet. Den utökade deklarationen breddar dessutom omfattningen till hela livscykeln, med både användnings- och slutskede samt fler byggdelar som installationer och tekniska system, jämfört med dagens byggskede A1–A5.</p>

<h2>Gränsvärdena som skärps – vad byggföretaget bör räkna med</h2>
<p>Det som verkligen förändrar spelplanen är att gränsvärden blir bindande. Boverkets rapport 2026 föreslår gränsvärden på ungefär 150–250 kg CO2e/m² BTA för byggnadskategorier som har referensvärden, och omkring 295 kg CO2e/m² BTA för kategorin övriga byggnader utan referensvärden. Detta är förslag, ännu inte antagen lag.</p>
<p>Som jämförelse föreslog det tidigare, nu pausade, 2023-förslaget ett gränsvärde på 375 kg CO2e/m² BTA (modulerna A1–A5) för flerbostadshus, med start 2025/2027 och successiva skärpningar mot Sveriges nettonollmål 2045. Den tidplanen sköts upp och har ersatts av EPBD-schemat 2028/2030. Referensvärdena som Boverket publicerar är den grund som de kommande gränsvärdena kalibreras mot, och de används redan i klimatkriterier vid offentlig upphandling. Bygger du åt offentlig beställare möter du alltså klimatkraven redan idag i anbudsskedet.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte en LCA-beräkning eller Boverkets inlämningstjänst, men verktyget hjälper dig att inte tappa kravet på vägen. I ByggExp bygger du in klimatdeklarationen som ett obligatoriskt steg i projektets gång, från bygglov till slutbesked, med ansvarig person och deadline kopplad till varje projekt.</p>
<p>Du samlar EPD:er, produktdata och underlag på ett ställe så att den som gör beräkningen har allt tillgängligt, och du dokumenterar egenkontrollen med en tydlig struktur. Använd <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a> för att koppla klimatdeklarationens moment till din övriga kvalitetsdokumentation, så att inget krav hamnar mellan bygglov och slutbesiktning.</p>

<h2>Vanliga frågor</h2>
<h3>Vem ansvarar för klimatdeklarationen?</h3>
<p>Byggherren ansvarar enligt lag för att ta fram och lämna in klimatdeklarationen till Boverket. En entreprenör eller konsult kan utföra beräkningen, men det juridiska ansvaret stannar hos byggherren.</p>
<h3>Vad händer om klimatdeklarationen inte lämnas in?</h3>
<p>Byggnadsnämnden får inte utfärda slutbesked förrän byggherren visat att deklarationen är inlämnad, eller gjort sannolikt att skyldighet saknas. Det är den huvudsakliga påföljden – någon direkt byggsanktionsavgift för en utebliven deklaration finns inte, men en sådan kan bli aktuell indirekt om byggnaden tas i bruk utan slutbesked.</p>
<h3>Vad ska redovisas i dagens klimatdeklaration?</h3>
<p>Idag redovisas byggskedet, modulerna A1–A5, för bärande konstruktion, klimatskärm och innerväggar. Driftenergi under användningstiden ingår inte. Underlaget bygger på EPD-data och Boverkets klimatdatabas.</p>
<h3>När börjar gränsvärden och livscykel-GWP gälla?</h3>
<p>Enligt EPBD ska livscykel-GWP redovisas från 1 januari 2028 för byggnader över 1 000 m² och från 1 januari 2030 för alla nya byggnader. Boverket föreslår bindande gränsvärden från 2030. Beloppen är fortfarande förslag.</p>

<h2>Kom igång</h2>
<p>Kravet på klimatdeklaration gäller redan idag och spärrar slutbeskedet om det missas, samtidigt som skiftet mot livscykel-GWP och gränsvärden 2028–2030 kräver att du börjar planera för låg klimatpåverkan nu. Bygg in rutinen i varje projekt, samla underlagen tidigt och följ remissarbetet genom 2026–2027. Börja med <a href="/sv/verktyg">våra gratis verktyg</a> eller <a href="/sv/contact">boka en demo</a> så visar vi hur du håller ordning på kravet från bygglov till slutbesked.</p>

<p>Relaterat: <a href="/sv/blog/nya-byggregler-2026-energi-isolering">Nya byggregler 2026 – energi och isolering</a>, <a href="/sv/blog/boverkets-nya-byggregler-2026-kontrollplan">Boverkets nya byggregler 2026 och kontrollplanen</a>, <a href="/sv/blog/startbesked-bygglov-process-2026">Startbesked och bygglovsprocessen 2026</a>.</p>
`;

const A_KLIMATDEKLARATION_BYGGNAD_KRAV: BlogPost = {
  _id: "code-"+"klimatdeklaration-byggnad-krav",
  title: "Klimatdeklaration för byggnader – krav och regler 2026", slug: "klimatdeklaration-byggnad-krav", locale: "sv",
  excerpt: "Klimatdeklarationen är kopplad direkt till slutbeskedet – och kraven breddas mot livscykel-GWP och bindande gränsvärden 2028–2030. Så förbereder du företaget.", tag: "Regelverk",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_KLIMATDEKLARATION_BYGGNAD_KRAV_HTML,
  seoTitle: "Klimatdeklaration byggnad – krav 2026 | ByggExp", seoDescription: "Klimatdeklaration är obligatorisk för nya byggnader och spärrar slutbeskedet. Se vem som ansvarar, vad som redovisas och hur kraven skärps mot 2028–2030.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T16:03:00.000Z", createdAt: "2026-08-19T16:03:00.000Z", updatedAt: "2026-08-19T16:03:00.000Z",
};

const A_RIVNINGSAVFALL_SORTERINGSKRAV_BYGG_HTML = `
<p>Sedan 1 augusti 2020 måste alla som producerar bygg- och rivningsavfall sortera ut minst sex materialslag redan på arbetsplatsen. Kraven i avfallsförordningen (2020:614) gäller 2026, och den kommunala tillsynen har skärpts. Observera att 3 kap. i förordningen omnumrerades den 1 oktober 2025 – paragrafhänvisningarna nedan följer den gällande lydelsen. Blandar du fraktionerna utan giltigt undantag riskerar du föreläggande, vite och i grova fall åtal. Den här guiden går igenom vad som ska sorteras, hur du dokumenterar det och var ansvaret ligger.</p>

<p>Bygg in avfallshanteringen i din egenkontroll från start – börja med vår <a href="/sv/verktyg/egenkontroll-mall">gratis mall för egenkontroll -&gt;</a> och lägg till sorteringspunkterna nedan i den.</p>

<h2>De sex fraktionerna du måste sortera ut på plats</h2>
<p>Enligt avfallsförordningen 3 kap. 19 § ska följande sex materialslag sorteras ut var för sig och förvaras åtskilda från varandra och från övrigt avfall:</p>
<ul>
<li><strong>Trä</strong> – rent virke, reglar, formmaterial (obehandlat).</li>
<li><strong>Mineral</strong> – betong, tegel, klinker, keramik eller sten i en fraktion.</li>
<li><strong>Metall</strong> – armering, plåt, rör, beslag.</li>
<li><strong>Glas</strong> – planglas, rutor.</li>
<li><strong>Plast</strong> – emballage, rör, profiler.</li>
<li><strong>Gips</strong> – gipsskivor och gipsrester.</li>
</ul>
<p>Det avgörande är att sorteringen sker <strong>vid källan</strong> – på den plats där avfallet uppstår, alltså din bygg- eller rivningsplats. Du får alltså inte samla allt blandat i en container och skicka det vidare till en central sorteringsanläggning. Den som samlar in de utsorterade fraktionerna måste dessutom hålla dem åtskilda genom hela insamlingen så att materialet kan återanvändas eller materialåtervinnas (3 kap. 25 §). Syftet är kopplat till etappmålet att 70 viktprocent av det icke-farliga bygg- och rivningsavfallet ska förberedas för återanvändning eller materialåtervinnas.</p>

<h2>Utöver de sex – farligt avfall och brännbart</h2>
<p>Sex fraktioner är golvet, inte taket. Farligt avfall ska alltid sorteras ut och hållas separat (3 kap. 2 §), och olika slag av farligt avfall får aldrig blandas med varandra. I rivning handlar det typiskt om:</p>
<ul>
<li><strong>Asbest</strong> – eternit, rörisolering, mattlim.</li>
<li><strong>PCB</strong> – fogmassor och isolerrutor i byggnader från 1956–1973.</li>
<li><strong>Tryckimpregnerat trä</strong> och andra behandlade träslag.</li>
<li><strong>Förorenade massor</strong> och avfall med farliga ämnen.</li>
</ul>
<p>Dessutom ska brännbart avfall sorteras ut enligt avfallsförordningen 3 kap. Ordningen är alltså: farligt avfall först, sedan de sex materialslagen, därefter brännbart – och först det som blir kvar kan hanteras som blandat restavfall.</p>

<h2>Dokumentation och rapportering – vad tillsynen frågar efter</h2>
<p>För farligt avfall gäller anteckningsskyldighet: du ska föra anteckningar om avfallets typ, mängd, ursprung och mottagare. Sedan 1 november 2020 ska uppgifterna också rapporteras till Naturvårdsverkets avfallsregister, senast två arbetsdagar efter att anteckningen ska göras (enligt avfallsförordningen). Själva anteckningsskyldighetens innehåll regleras i Naturvårdsverkets föreskrifter NFS 2020:5. Missad rapportering är en av de vanligaste bristerna vid tillsyn.</p>
<p>En central fråga i rivning är <strong>vem som är avfallsproducent</strong> och därmed bär anteckning- och rapporteringsskyldigheten – rivningsentreprenören eller fastighetsägaren/beställaren. Enligt Naturvårdsverkets vägledning är det vid större arbeten som underhåll, ROT, byggande och rivning normalt den anlitade entreprenören som betraktas som avfallsproducent, eftersom entreprenören har mest rådighet över avfallet. Ett undantag är om avtalet fråntar entreprenören rådigheten över avfallet – då kan byggherren eller huvudentreprenören i stället vara producent. Reglera ansvaret tydligt i entreprenadavtalet så att ingen part utgår från att den andra rapporterar.</p>
<p>Lutar du dig mot ett undantag från sorteringskravet ska du dokumentera din bedömning och kunna visa upp den för miljöförvaltningen på begäran. Det är i praktiken ditt bevis på att du följer reglerna.</p>

<h2>Undantag och dispens – när får du blanda?</h2>
<p>Det finns två generella undantag som inte kräver någon ansökan. Sedan omregleringen den 1 oktober 2025 finns de direkt i avfallsförordningen 3 kap. 19 § (tidigare i Naturvårdsverkets föreskrifter NFS 2020:7, som upphävts):</p>
<ul>
<li>Material är så sammanfogat i konstruktionen att det inte är tekniskt genomförbart att separera det.</li>
<li>Avfallet är så förorenat att en separering skulle försämra kvaliteten på behandlingen eller återvinningen.</li>
</ul>
<p>Vill du samla avfallet blandat utan att omfattas av ett generellt undantag måste du söka <strong>dispens</strong> hos tillsynsmyndigheten i förväg (3 kap. 33 §) – i praktiken oftast den kommunala miljönämnden. Dispens kan ges om separat insamling inte är tekniskt genomförbar, inte ger någon miljönytta som överväger nackdelarna, eller medför orimliga kostnader. Räkna med handläggningstid – planera dispensfrågan innan rivningen startar, inte när containern redan står full.</p>

<h2>Sanktioner om du blandar – föreläggande, vite och miljöbrott</h2>
<p>Tillsynen sköts av den kommunala miljönämnden. Vid brister kan nämnden utfärda ett föreläggande om rättelse, ofta förenat med vite – ett förutbestämt belopp du tvingas betala om du inte åtgärdar felet. Allvarliga överträdelser kan bedömas som otillåten avfallshantering eller nedskräpning enligt miljöbalken 29 kap., vilket är straffsanktionerat.</p>
<p>En viktig nyansering: det finns <strong>ingen fast schablon-miljösanktionsavgift med ett bestämt kronbelopp</strong> specifikt för att låta bli att sortera de sex fraktionerna. Sprids påståenden om exakta bötesbelopp bör du vara skeptisk – kontrollera alltid mot avfallsförordningen och din lokala miljöförvaltning innan du citerar en siffra.</p>

<h2>Checklista för din arbetsplats</h2>
<ul>
<li>En container eller behållare per fraktion – trä, mineral, metall, glas, plast, gips.</li>
<li>Tydlig skyltning vid varje kärl så att alla på plats sorterar rätt.</li>
<li>Materialinventering före rivning som identifierar farligt avfall.</li>
<li>Kvitton och mottagningsbevis från godkänd mottagare. Anteckningar om farligt avfall ska enligt NFS 2020:5 sparas i minst 3 år (transportörer minst 12 månader); tänk på att bokföringslagen kräver 7 år för kvitton och verifikationer.</li>
<li>Dokumenterad bedömning om du åberopar ett undantag.</li>
<li>Registrering av farligt avfall i avfallsregistret inom två arbetsdagar.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte myndighetsrapporteringen till avfallsregistret, men gör det enkelt att bevisa att rutinen finns och följs. Du bygger in sorteringspunkterna i din egenkontroll så att varje projekt får en spårbar avstämning – vem som ansvarar, vilka fraktioner som hanteras och var mottagningsbevisen finns. Undantagsbedömningar och foton kan sparas på projektet, så att du snabbt kan visa upp underlaget om miljöförvaltningen gör tillsyn. Fler mallar och kalkylatorer hittar du samlat i <a href="/sv/verktyg">våra gratis verktyg</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vilka fraktioner måste sorteras ut på byggarbetsplatsen?</h3>
<p>Minst sex: trä, mineral (betong, tegel, klinker, keramik eller sten), metall, glas, plast och gips. Dessutom ska farligt avfall och brännbart avfall sorteras ut separat enligt avfallsförordningen 3 kap.</p>
<h3>Kan jag samla allt blandat och sortera på en central anläggning?</h3>
<p>Nej. Sorteringen ska ske vid källan, alltså på platsen där avfallet uppstår. Undantag kräver antingen ett av de två generella undantagen i avfallsförordningen 3 kap. 19 § eller en dispens som du söker i förväg hos tillsynsmyndigheten – i praktiken oftast den kommunala miljönämnden.</p>
<h3>Vem ansvarar för att rapportera farligt avfall vid rivning?</h3>
<p>Ansvaret ligger på den som är avfallsproducent. Vid större arbeten som underhåll, ROT, byggande och rivning betraktar Naturvårdsverket normalt den anlitade entreprenören som avfallsproducent, eftersom entreprenören har mest rådighet över avfallet. Om avtalet fråntar entreprenören rådigheten kan byggherren eller huvudentreprenören i stället vara producent. Reglera ansvaret i avtalet och rapportera till avfallsregistret inom två arbetsdagar.</p>
<h3>Hur stor blir böterna om jag inte sorterar?</h3>
<p>Det finns ingen fast miljösanktionsavgift med ett bestämt belopp för själva sorteringsbrottet. Miljönämnden kan i stället utfärda föreläggande förenat med vite, och grova fall kan bli otillåten avfallshantering enligt miljöbalken 29 kap.</p>

<h2>Kom igång</h2>
<p>Lägg avfallssorteringen i din projektrutin redan idag med vår <a href="/sv/verktyg/egenkontroll-mall">mall för egenkontroll</a>, och stäm alltid av mot avfallsförordningen och din lokala miljöförvaltning. Vill du se hur ByggExp håller ihop egenkontroll och dokumentation i skarpa projekt? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/boverkets-nya-byggregler-2026-kontrollplan">Boverkets nya byggregler 2026 och kontrollplanen</a>, <a href="/sv/blog/kontrollplan-mall-bygglov">Kontrollplan-mall för bygglov</a>, <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a>.</p>
`;

const A_RIVNINGSAVFALL_SORTERINGSKRAV_BYGG: BlogPost = {
  _id: "code-"+"rivningsavfall-sorteringskrav-bygg",
  title: "Sorteringskrav för bygg- och rivningsavfall 2026", slug: "rivningsavfall-sorteringskrav-bygg", locale: "sv",
  excerpt: "Sedan 2020 måste bygg- och rivningsavfall sorteras i minst sex fraktioner vid källan. Guiden går igenom kraven i avfallsförordningen 2026, dokumentation, undantag och sanktioner.", tag: "Regelverk",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_RIVNINGSAVFALL_SORTERINGSKRAV_BYGG_HTML,
  seoTitle: "Sorteringskrav rivningsavfall 2026 | ByggExp", seoDescription: "Så sorterar du bygg- och rivningsavfall i sex fraktioner enligt avfallsförordningen 2026: dokumentation, farligt avfall, undantag, dispens och sanktioner.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T19:06:00.000Z", createdAt: "2026-08-19T19:06:00.000Z", updatedAt: "2026-08-19T19:06:00.000Z",
};

const A_ID06_NYA_KRAV_2026_LEGITIMERING_HTML = `
<p>Den 28 januari 2026 skärps kraven för att beställa och förnya ID06-kort. Från den dagen räcker det inte längre med BankID eller körkort – den som ska ha ett kort måste styrka både sin identitet och sitt medborgarskap med pass eller nationellt ID-kort. För varje byggföretag som håller elektronisk personalliggare betyder det en konkret sak: personal utan giltigt ID06-kort kan inte checka in, och då riskerar ni kontrollavgift vid Skatteverkets oanmälda besök. Verifiera alltid det senaste mot ID06.se, men här är vad som gäller och hur ni förbereder er.</p>

<p>Rätt rutiner för in- och utcheckning börjar med rätt underlag. I <a href="/sv/verktyg">vår samling av gratis verktyg för byggföretag</a> hittar du bland annat en tidrapportmall som hjälper dig hålla ordning på arbetad tid parallellt med den lagstadgade personalliggaren.</p>

<h2>Vad ändras den 28 januari 2026?</h2>
<p>Kärnan i förändringen är att ID06 inför ett nytt säkerhetskrav vid kortbeställning och förnyelse. Den som beställer ett kort måste identifiera sig och godkänna beställningen med ett pass eller ett nationellt ID-kort som gäller som resehandling inom EU/EES. Syftet är att verifiera varje persons identitet <strong>och</strong> medborgarskap, så att rätt person kopplas till kortet och så att den som saknar rätt att arbeta i Sverige inte kan få ett.</p>
<p>Det innebär att BankID, körkort och e-legitimation inte längre godtas vid beställning eller förnyelse, eftersom de inte styrker medborgarskap. Bakgrunden är omfattande: det finns cirka 700 000 aktiva ID06-kort, 1 500–2 000 nya beställs varje dag och korten innehas av personer från 129 länder. Skärpningen ska göra det svårare att missbruka systemet.</p>

<h2>Så identifierar sig personalen</h2>
<p>Identifieringen kan göras på två sätt. Det kostnadsfria alternativet är den nya mobilappen ID06 Identify, där personen skannar sitt pass eller nationella ID-kort direkt i telefonen. Alternativt görs identifieringen manuellt på ett skanningscenter mot en avgift.</p>
<p>Vid en ny beställning eller förnyelse blir flödet i praktiken:</p>
<ol>
<li>Ladda ner ID06 Identify och skanna pass eller nationellt ID-kort i appen – eller boka tid på ett skanningscenter.</li>
<li>Godkänn kortbeställningen med den verifierade identiteten.</li>
<li>Arbetsgivaren kopplar kortet till anställningen som vanligt i ID06-portalen.</li>
</ol>
<p>Eftersom appen är gratis och görs på telefonen är den det snabbaste sättet för de flesta. Planera ändå för att en del i personalen behöver hjälp första gången.</p>

<h2>Olika regler för olika grupper</h2>
<p>Kraven slår lite olika beroende på personens status:</p>
<ul>
<li><strong>Svenska medborgare och EU/EES-medborgare</strong> identifierar sig med pass eller nationellt ID-kort som gäller som resehandling. EU-medborgare med svenskt personnummer kan få kort med fem års giltighet.</li>
<li><strong>Tredjelandsmedborgare</strong> (utanför EU/EES) ska dessutom skanna sitt EU-uppehållstillståndskort på samma sätt som tidigare, utöver identitetshandlingen.</li>
</ul>
<p>Poängen är densamma för alla grupper: både vem personen är och rätten att arbeta ska kunna verifieras innan kortet utfärdas.</p>

<h2>Vad händer med befintliga kort?</h2>
<p>Redan giltiga ID06-kort fortsätter att gälla. Det nya kravet slår till först när kortet ska förnyas efter att giltighetstiden löpt ut. Ni behöver alltså inte förnya allt på en gång den 28 januari – men ni bör ha koll på när korten går ut. Ett kort som löper ut mitt i ett projekt kan i värsta fall lämna en medarbetare utan möjlighet att checka in tills det nya kortet är på plats. Planera förnyelser i god tid för att undvika sådana glapp.</p>

<h2>Kopplingen till personalliggaren</h2>
<p>Elektronisk personalliggare krävs enligt skatteförfarandelagen på byggarbetsplatser där den sammanlagda byggkostnaden överstiger fyra prisbasbelopp. Prisbasbeloppet 2026 är 59 200 kr, vilket ger en gräns på 236 800 kr. Privatpersoner som bygger för eget bruk omfattas inte.</p>
<p>Byggherren ska anmäla till Skatteverket när och var byggverksamheten påbörjas, samt tillhandahålla utrustning för elektronisk personalliggare. Uppgifterna – namn, personnummer och tider för in- och utcheckning – ska registreras dagligen, kunna visas vid oanmält kontrollbesök och sparas i två år. Värt att veta: Skatteverket kräver elektronisk registrering, men kräver inte ID06 specifikt – även andra system som uppfyller lagkraven godtas. I praktiken bygger dock de flesta byggarbetsplatser sin incheckning på just ID06-kort, och därför blir de nya identifieringskraven direkt relevanta för att liggaren ska fungera.</p>

<h2>Kontrollavgifter och risker</h2>
<p>Brister i personalliggaren kostar. Kontrollavgiften är 12 500 kr i grundavgift plus 2 500 kr per person som påträffas arbetande men inte finns i liggaren. Har byggherren inte anmält byggstart och plats till Skatteverket är avgiften 25 000 kr. Kopplingen till de nya ID06-reglerna är tydlig: om en medarbetare inte hinner förnya sitt kort och därför inte kan checka in, men ändå arbetar på platsen, är risken att personen saknas i liggaren vid ett kontrollbesök – med avgift som följd.</p>

<h2>Checklista – så förbereder firman sig före 28 januari 2026</h2>
<ul>
<li>Inventera samtliga ID06-korts giltighetstid och notera vilka som löper ut de närmaste månaderna.</li>
<li>Informera personalen om de nya kraven i god tid – att BankID och körkort inte längre räcker.</li>
<li>Säkerställ att alla har ett giltigt pass eller nationellt ID-kort; tredjelandsmedborgare även EU-uppehållstillståndskort.</li>
<li>Be personalen ladda ner ID06 Identify och testa skanningen innan de behöver förnya.</li>
<li>Boka skanningscenter för dem som inte kan använda appen.</li>
<li>Kontrollera att er rutin för anmälan till Skatteverket och daglig incheckning är på plats.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp håller ordning på tid och underlag runt personalliggaren – inte på själva ID06-beställningen, som sköts hos ID06. Med ByggExp samlar du arbetad tid per medarbetare och projekt, så att uppgifterna är enkla att stämma av mot liggaren och spara i föreskrivna två år. När ni har koll på vilka som är på plats och hur länge blir det både lättare att fakturera rätt och tryggare att möta ett oanmält kontrollbesök. Vill du komma igång med tidsdelen kan du börja med <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapportmall</a> och sedan digitalisera flödet.</p>

<h2>Vanliga frågor</h2>
<h3>Måste alla förnya sina ID06-kort den 28 januari 2026?</h3>
<p>Nej. Redan giltiga kort fortsätter att gälla. De nya kraven med pass eller nationellt ID gäller vid ny beställning och vid förnyelse efter att kortets giltighetstid har löpt ut. Ha ändå koll på utgångsdatum så att ingen blir utan kort mitt i ett projekt.</p>
<h3>Duger BankID eller körkort för att beställa ID06-kort efter 28 januari 2026?</h3>
<p>Nej. Från och med den 28 januari 2026 godtas inte längre BankID, körkort eller e-legitimation vid beställning eller förnyelse, eftersom de inte styrker medborgarskap. Det krävs pass eller nationellt ID-kort som gäller som resehandling inom EU/EES.</p>
<h3>Kostar den nya identifieringen något?</h3>
<p>Identifieringen är kostnadsfri om den görs i mobilappen ID06 Identify, där man skannar sitt pass eller nationella ID direkt i telefonen. Görs identifieringen i stället manuellt på ett skanningscenter tillkommer en avgift.</p>
<h3>Vad gäller för anställda som inte är EU-medborgare?</h3>
<p>Tredjelandsmedborgare, alltså personer från länder utanför EU/EES, ska utöver pass eller nationellt ID även skanna sitt EU-uppehållstillståndskort på samma sätt som tidigare. Både identitet och rätten att arbeta i Sverige verifieras.</p>

<h2>Kom igång</h2>
<p>Börja med att inventera kortens giltighet och trimma rutinen kring personalliggaren. Ladda ner <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapportmall</a> eller utforska <a href="/sv/verktyg">alla verktyg för byggföretag</a>. Vill du se hur ByggExp håller ihop tid, projekt och underlag? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/id06">ID06 – vad det är och varför det krävs</a>, <a href="/sv/blog/id06-bestalla-kort-steg-for-steg">Beställa ID06-kort steg för steg</a> och <a href="/sv/blog/personalliggare">Personalliggare på byggarbetsplatsen</a>.</p>
`;

const A_ID06_NYA_KRAV_2026_LEGITIMERING: BlogPost = {
  _id: "code-"+"id06-nya-krav-2026-legitimering",
  title: "ID06 – nya krav 2026: pass och medborgarskapsverifiering vid kortbeställning", slug: "id06-nya-krav-2026-legitimering", locale: "sv",
  excerpt: "Från 28 januari 2026 måste den som beställer eller förnyar ett ID06-kort styrka både identitet och medborgarskap med pass eller nationellt ID – så förbereder firman personalliggaren.", tag: "Personalliggare",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_ID06_NYA_KRAV_2026_LEGITIMERING_HTML,
  seoTitle: "ID06 nya krav 2026: legitimering | ByggExp", seoDescription: "Från 28 januari 2026 krävs pass eller nationellt ID vid ID06-beställning. Så förbereder du firman och personalliggaren – checklista och regler per grupp.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T20:18:00.000Z", createdAt: "2026-08-19T20:18:00.000Z", updatedAt: "2026-08-19T20:18:00.000Z",
};

const A_RIVNINGSLOV_RIVNINGSANMALAN_BYGG_HTML = `
<p>Rivning är sällan &quot;bara att köra igång&quot;. I nästan alla fall krävs antingen rivningslov eller rivningsanmälan – och oavsett vilket får spaden inte sättas i väggen förrän byggnadsnämnden har gett startbesked. Ovanpå det skärptes asbestreglerna den 19 december 2025, vilket flyttar ännu mer ansvar på det byggföretag som utför rivningen. Missar du ett steg riskerar du byggsanktionsavgift och stoppad arbetsplats. Här går vi igenom vad som faktiskt gäller innan rivningen påbörjas.</p>

<p>Grunden för en trygg rivning är dokumentation – kontrollplan, materialinventering och egenkontroll. Bygg upp den strukturerat med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontrollmall -&gt;</a>.</p>

<h2>Rivningslov – när det krävs (PBL 9 kap. 10 §)</h2>
<p>Inom detaljplan krävs som huvudregel rivningslov för att riva en byggnad eller en del av en byggnad. Det gäller även anläggningar och byggnader som omfattas av rivningsförbud i detaljplanen, samt sådant som är särskilt värdefullt.</p>
<p>Utanför detaljplan är utgångspunkten den motsatta: rivningslov krävs bara i särskilda fall.</p>
<ul>
<li>Inom detaljplan: rivningslov för byggnad eller del av byggnad, samt vid rivningsförbud.</li>
<li>Utanför detaljplan: endast om områdesbestämmelser kräver det.</li>
<li>Alltid extra försiktighet vid byggnader med historiskt, kulturhistoriskt, miljömässigt eller konstnärligt värde, eller i särskilt värdefulla bebyggelseområden.</li>
</ul>
<p>Är du osäker på vilken kategori objektet hamnar i, kontrollera detaljplan och eventuella områdesbestämmelser hos kommunen innan du lämnar anbud – det påverkar både tidplan och kostnad.</p>

<h2>Rivningsanmälan – gränsen vid 50 m² (PBF 6 kap.)</h2>
<p>Även när rivningslov inte krävs kan du behöva göra en rivningsanmälan till byggnadsnämnden. Anmälningsplikt gäller när du river en byggnad eller byggnadsdel med en byggnadsarea över 50,0 m². Anmälningsplikten följer av plan- och bygglagen 9 kap. 16 §, och åtgärderna räknas upp i plan- och byggförordningen 6 kap. 1 §.</p>
<p>Vissa åtgärder är undantagna, exempelvis rivning av vissa komplementbyggnader och ekonomibyggnader för jord- och skogsbruk. Skillnaden mellan lov och anmälan i praktiken är att lovet innebär en formell prövning mot planbestämmelser, medan anmälan i första hand handlar om att nämnden ska kunna säkra att rivningen sker kontrollerat och att avfallet tas om hand rätt. Oavsett vilket spår gäller samma sak i nästa steg: du behöver startbesked.</p>

<h2>Ingen rivning utan startbesked (PBL 10 kap.)</h2>
<p>Rivning får inte påbörjas förrän byggnadsnämnden har gett startbesked. I startbeskedet fastställs kontrollplanen. Det gäller både lovpliktig och anmälningspliktig rivning – att lov eller anmälan är inlämnad räcker alltså inte.</p>
<p>Byggnadsnämnden har enligt PBL 9 kap. 27 § tio veckor på sig att handlägga rivningslov. Överskrids tiden ska avgiften reduceras med en femtedel per påbörjad vecka. Tänk också på att avgifterna för lov och anmälan sätts av varje kommun i en egen bygglovstaxa som revideras vid olika tidpunkter – kontrollera därför aktuell taxa hos berörd kommun innan du lämnar anbud. Kontrollansvarig krävs normalt inte vid anmälningspliktig rivning, men nämnden kan besluta att KA behövs om åtgärden är komplicerad (PBL 10 kap. 9–10 §).</p>

<h2>Rivningsplan och kontrollplan – vad dokumentet måste innehålla</h2>
<p>Kontrollplanen är navet i rivningen. Den ska bland annat redovisa hur farligt avfall och övrigt rivningsavfall tas om hand. En genomtänkt plan innehåller:</p>
<ul>
<li>Kontrollpunkter kopplade till varje kritiskt moment i rivningen.</li>
<li>Vem som är ansvarig för respektive kontroll.</li>
<li>Hur farligt avfall identifieras, separeras och transporteras.</li>
<li>Principer för selektiv rivning så att material kan sorteras för återbruk och återvinning.</li>
<li>Materialinventeringen som bilaga, som underlag för avfallsflödena.</li>
</ul>
<p>Selektiv rivning är inte bara en miljöfråga utan direkt kopplad till <a href="/sv/blog/rivningsavfall-sorteringskrav-bygg">sorteringskraven för rivningsavfall</a> – planera för det redan i kontrollplanen.</p>

<h2>Materialinventering och miljöinventering före rivning</h2>
<p>Innan rivning bör en material- och miljöinventering göras. Syftet är att kartlägga farliga ämnen med mängd och läge så att de kan hanteras rätt. Typiska poster:</p>
<ul>
<li>Asbest (isolering, eternit, fix och fog, ventilationskanaler).</li>
<li>PCB (fogmassor, isolerglas, golv).</li>
<li>Bly och kvicksilver.</li>
<li>Impregnerat trä.</li>
<li>Elavfall och andra farliga fraktioner.</li>
</ul>
<p>Inventeringen är särskilt viktig i byggnader uppförda före 1982, eftersom asbestförbudet infördes i Sverige det året. Själva inventeringen och kontrollplanen bör bevaras i minst fem år som underlag för avfallsflödena. Observera dock att register över asbestexponerade arbetstagare och tillhörande medicinska kontroller omfattas av särskilda regler och ska sparas betydligt längre – minst 40 år efter att exponeringen upphört enligt Arbetsmiljöverkets föreskrifter. Blanda alltså inte ihop dessa arkiveringstider. En slarvig inventering är den vanligaste orsaken till dyra stopp mitt i rivningen.</p>

<h2>Nya asbestregler från 19 december 2025 – detta gäller byggföretaget</h2>
<p>Den 19 december 2025 trädde skärpta, EU-drivna asbestregler i kraft. Det hygieniska gränsvärdet sänktes från 0,1 till 0,01 fibrer per kubikcentimeter luft – en tiofaldig skärpning. Reglerna finns numera i Arbetsmiljöverkets omstrukturerade regelverk (AFS 2023-serien i kraft 1 januari 2025), ändrade genom bland annat AFS 2025:6.</p>
<p>Utbildningskravet har utökats till fler yrkesgrupper som kan exponeras, exempelvis fastighetsskötare, rörläggare, elektriker, byggarbetare och arbetsledare. Undantaget från läkarundersökning under viss exponeringstid har tagits bort. Rivning och sanering av asbest kräver tillstånd från Arbetsmiljöverket och får bara utföras av behöriga – och asbestarbete ska anmälas till Arbetsmiljöverket i förväg. Tillstånd som beslutats före 19 december 2025 fortsätter gälla. Läs mer i vår genomgång av <a href="/sv/blog/nya-asbestregler-2026">de nya asbestreglerna 2026</a>.</p>

<h2>Vad kostar det att strunta i reglerna</h2>
<p>Att påbörja rivning utan startbesked eller lov ger byggsanktionsavgift. Som exempel landar rivning av ett enbostadshus på 160 m² BTA utan startbesked på ungefär 76 368 kr, räknat på 2026 års prisbasbelopp om 59 200 kr. Maxtaket för en byggsanktionsavgift är 50 prisbasbelopp, vilket för 2026 motsvarar 2 960 000 kr. Utöver det kan nämnden besluta om rivningsföreläggande. Ansvaret ligger på byggherren och entreprenören – det är alltså sällan lönt att chansa.</p>

<h2>Checklista innan byggföretaget river</h2>
<ol>
<li>Kontrollera detaljplan, områdesbestämmelser och eventuellt kulturvärde.</li>
<li>Sök rivningslov eller lämna rivningsanmälan (gränsen 50 m²).</li>
<li>Gör material- och miljöinventering, särskilt för hus byggda före 1982.</li>
<li>Utred asbest och beställ tillstånd/förhandsanmälan till Arbetsmiljöverket vid behov.</li>
<li>Upprätta kontrollplan med avfallshantering och selektiv rivning.</li>
<li>Invänta startbesked innan rivningen påbörjas.</li>
<li>Anlita behörig, utbildad personal för asbestsanering.</li>
<li>Hantera avfall och farligt avfall enligt sorteringskraven.</li>
<li>Begär slutbesked när rivningen är klar.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ihop rivningens dokumentation. Med egenkontrollmallen bygger du kontrollpunkter för varje moment, kopplar ansvarig person och dokumenterar avvikelser – underlag som passar rakt in i kontrollplanen och som du enkelt kan arkivera i minst fem år. Material- och miljöinventeringen kan struktureras på samma sätt, med mängd och läge per fraktion. ByggExp fattar inga myndighetsbeslut och ersätter inte kommunens prövning eller Arbetsmiljöverkets tillstånd – men verktyget ser till att din egen dokumentation är komplett, spårbar och lätt att visa upp vid tillsyn.</p>

<h2>Vanliga frågor</h2>
<h3>Krävs alltid rivningslov för att riva en byggnad?</h3>
<p>Nej. Inom detaljplan krävs oftast rivningslov, men utanför detaljplan krävs det bara om områdesbestämmelser säger det eller om byggnaden är särskilt värdefull. När lov inte krävs kan rivningsanmälan ändå behövas om byggnadsarean överstiger 50 m².</p>
<h3>Kan vi börja riva så snart anmälan är inlämnad?</h3>
<p>Nej. Rivning får inte påbörjas förrän byggnadsnämnden har gett startbesked, oavsett om åtgärden är lov- eller anmälningspliktig. I startbeskedet fastställs kontrollplanen.</p>
<h3>Behövs kontrollansvarig vid rivning?</h3>
<p>Vid anmälningspliktig rivning krävs normalt ingen kontrollansvarig. Byggnadsnämnden kan dock besluta att KA behövs om åtgärden bedöms som komplicerad (PBL 10 kap. 9–10 §).</p>
<h3>Vad innebär de nya asbestreglerna för rivningen?</h3>
<p>Från 19 december 2025 är det hygieniska gränsvärdet sänkt till 0,01 fibrer per kubikcentimeter, utbildningskravet omfattar fler yrkesgrupper och undantaget från läkarundersökning har tagits bort. Asbestsanering kräver tillstånd och förhandsanmälan till Arbetsmiljöverket.</p>

<h2>Kom igång</h2>
<p>Planera lov eller anmälan och inventeringen tidigt – det är där tid och pengar vinns. Sätt upp din dokumentation med <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmallen</a> eller utforska fler <a href="/sv/verktyg">gratis verktyg för byggföretag</a>. Vill du se hur ByggExp fungerar i skarpt läge? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/rivningsavfall-sorteringskrav-bygg">Sorteringskrav för rivningsavfall</a>, <a href="/sv/blog/nya-asbestregler-2026">Nya asbestregler 2026</a>, <a href="/sv/blog/startbesked-bygglov-process-2026">Startbesked och bygglovsprocessen 2026</a>.</p>
`;

const A_RIVNINGSLOV_RIVNINGSANMALAN_BYGG: BlogPost = {
  _id: "code-"+"rivningslov-rivningsanmalan-bygg",
  title: "Rivningslov och rivningsanmälan – så gör byggföretaget rätt", slug: "rivningslov-rivningsanmalan-bygg", locale: "sv",
  excerpt: "Rivningslov eller rivningsanmälan – och alltid startbesked innan spaden sätts i väggen. Så håller byggföretaget ihop lov, kontrollplan och asbestkrav.", tag: "Regelverk",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_RIVNINGSLOV_RIVNINGSANMALAN_BYGG_HTML,
  seoTitle: "Rivningslov och rivningsanmälan | ByggExp", seoDescription: "Rivningslov eller rivningsanmälan? Så vet byggföretaget vad som gäller vid 50 m²-gränsen, startbesked, kontrollplan och de nya asbestreglerna 2025/2026.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T23:12:00.000Z", createdAt: "2026-08-19T23:12:00.000Z", updatedAt: "2026-08-19T23:12:00.000Z",
};

const A_FARLIGT_AVFALL_ANTECKNINGSSKYLDIGHET_BYGG_HTML = `
<p>En målare river ut en gammal fasadpanel, kapar impregnerat virke och slänger färgburkar i en container. Ingen stor rivning, ingen fabrik – bara ett vanligt jobb. Ändå har firman i samma stund blivit skyldig att anteckna det farliga avfallet och rapportera det till Naturvårdsverkets avfallsregister. Anteckningsskyldigheten har ingen nedre gräns, och det är just den detaljen som gör att många hantverksfirmor missar den.</p>

<p>Ett strukturerat sätt att fånga de farliga fraktionerna redan på plats är att lägga in dem i din löpande dokumentation – använd gärna <a href="/sv/verktyg/egenkontroll-mall">vår gratis mall för egenkontroll -&gt;</a> för att koppla varje hämtning till rätt avfallskod och rapport.</p>

<h2>Vad är anteckningsskyldighet – och vem omfattas?</h2>

<p>Anteckningsskyldigheten gäller alla som yrkesmässigt producerar, transporterar, samlar in, mäklar, handlar med eller behandlar farligt avfall. Det finns ingen nedre gräns i mängd eller omsättning. En enmansfirma som byter ut ett tryckimpregnerat trädäck likställs juridiskt med en stor totalentreprenör – båda producerar farligt avfall och båda ska anteckna det.</p>

<p>På byggarbetsplatsen är det ofta fler fraktioner än man tror. Mineraliskt bygg- och rivningsavfall är en av de största farligt-avfall-strömmarna i Sverige, cirka 261 000 ton per år. Typiska farliga fraktioner du stöter på:</p>

<ul>
<li><strong>Asbest</strong> – i eternitplattor, kitt, isolering och äldre golvmattor.</li>
<li><strong>Impregnerat och tryckimpregnerat virke</strong> – altaner, syllar, staket.</li>
<li><strong>Färg-, lack- och oljerester</strong> – burkar, trasor, spillolja.</li>
<li><strong>PCB-haltigt material</strong> – fogmassor och isolerrutor i hus byggda ca 1956–1973.</li>
<li><strong>Förorenade massor</strong> – jord och fyllnadsmaterial vid mark- och saneringsarbete.</li>
</ul>

<p>Var och en av dessa har sin egen avfallskod och ska hanteras var för sig – det går inte att slå ihop dem i en post.</p>

<h2>Anteckna innan avfallet lämnar bygget</h2>

<p>Tidpunkten är avgörande. Anteckningen ska föras <em>innan</em> avfallet transporteras bort eller behandlas – alltså i god tid före hämtning, inte i efterhand när containern redan är körd. Det tvingar dig att klassificera avfallet medan det fortfarande finns på plats.</p>

<p>För varje typ av farligt avfall ska en avfallsproducent anteckna:</p>

<ul>
<li><strong>Avfallskod</strong> – den sexställiga EWC-koden enligt klassificeringen i avfallsförordningens bilaga.</li>
<li><strong>Var avfallet producerats</strong> – adress eller plats, till exempel byggarbetsplatsens CFAR-nummer.</li>
<li><strong>Vikt i kilogram.</strong></li>
<li><strong>Datum</strong> för transporten.</li>
<li><strong>Transportsätt</strong> och <strong>vem som ska transportera</strong> avfallet.</li>
<li><strong>Mottagare</strong> och den plats där avfallet ska hanteras.</li>
</ul>

<p>De detaljerade kraven finns i avfallsförordningen (2020:614) och i Naturvårdsverkets föreskrifter NFS 2020:5. En viktig varning: avfallsförordningen ändrades den 1 oktober 2025, då bland annat 3 och 4 kap. ersattes och paragrafer numrerades om. Slå därför inte fast exakta paragrafnummer i era rutiner – hänvisa hellre till förordningen och NFS 2020:5 som helhet, så slipper ni bygga in hänvisningar som redan är inaktuella.</p>

<h2>Rapportera till Naturvårdsverkets avfallsregister</h2>

<p>Är avfallet farligt räcker det inte att anteckna internt – uppgifterna ska även rapporteras elektroniskt till Naturvårdsverkets nationella avfallsregister. Registret är en del av Sveriges spårbarhetssystem och underlag för tillsyn, statistik och EU-rapportering.</p>

<p>Fristen är snäv: rapporteringen ska ske <strong>senast två arbetsdagar</strong> från det datum då anteckningen ska vara förd. Rapporteringen görs i Naturvårdsverkets e-tjänst med inloggning via e-legitimation (BankID eller eIDAS-ansluten lösning). Verksamheter som rapporterar ofta kan i stället ansluta sina administrativa system till Naturvårdsverkets API och slippa manuell inmatning vid varje hämtning.</p>

<p>Anteckningarna ska sparas i minst tre år. För den som antecknar i egenskap av transportör är kravet ett år.</p>

<h2>Vem gör vad i kedjan – producent, transportör, mottagare</h2>

<p>Varje aktör i avfallskedjan har sin egen antecknings- och rapporteringsskyldighet. Ta ett konkret fall: en byggfirma river asbest, anlitar en åkare som kör materialet till en godkänd mottagningsanläggning.</p>

<ol>
<li><strong>Byggfirman (producent)</strong> antecknar och rapporterar att avfallet uppstått, med kod, vikt och plats.</li>
<li><strong>Åkaren (transportör)</strong> rapporterar sin del av transporten.</li>
<li><strong>Mottagningsanläggningen</strong> rapporterar mottagandet.</li>
</ol>

<p>Alla tre rapporterar var för sig sina egna uppgifter. Att en underentreprenör eller åkare ordnar bortforslingen befriar alltså inte byggfirman från sin egen producentrapportering. Se också till att transporten utförs av en transportör med rätt tillstånd och att transportdokumentet stämmer med det ni antecknat.</p>

<h2>Vad kostar det att missa?</h2>

<p>Att lämna uppgifter för sent till avfallsregistret ger en miljösanktionsavgift på 5 000 kr, enligt förordningen (2012:259) om miljösanktionsavgifter. Avgiften har gällt sedan 1 januari 2022 och tas ut per försummelse, oavsett om förseningen var avsiktlig eller inte.</p>

<p>Utöver avgiften ökar kostnaden på andra sätt: kommunernas miljötillsyn genomför riktade tillsynskampanjer mot just farligt avfall, och bristande avfallsdokumentation kan slå igenom vid entreprenadbesiktning och i upphandlingar där beställaren ställer spårbarhetskrav. En obruten dokumentationskedja är alltså både en regelfråga och ett konkurrensargument.</p>

<h2>Så bygger du en rutin som håller</h2>

<ol>
<li><strong>Identifiera</strong> de farliga fraktionerna tidigt – i rivnings- eller miljöinventeringen, innan arbetet startar.</li>
<li><strong>Tilldela avfallskod</strong> (EWC) per fraktion redan i planeringen.</li>
<li><strong>Väg och dokumentera</strong> vid varje hämtning – kod, vikt, plats, datum, transportör, mottagare.</li>
<li><strong>Rapportera inom två arbetsdagar</strong> i avfallsregistret.</li>
<li><strong>Arkivera</strong> anteckningarna i minst tre år.</li>
<li><strong>Utse en ansvarig</strong> per projekt så att inget faller mellan stolarna.</li>
<li><strong>Överväg API- eller systemstöd</strong> om ni har många hämtningar.</li>
</ol>

<h2>Så gör du i ByggExp</h2>

<p>ByggExp ersätter inte Naturvårdsverkets e-tjänst – rapporteringen sker fortfarande där. Men verktygen hjälper dig att ha ordning på underlaget som rapporteringen bygger på. Med <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> kopplar du varje hämtning till projekt, avfallskod och ansvarig person, så att uppgifterna finns samlade när tvådagarsfristen börjar ticka. Fler stöd för byggdokumentation hittar du bland <a href="/sv/verktyg">våra gratis verktyg</a>.</p>

<h2>Vanliga frågor</h2>

<h3>Gäller anteckningsplikten även små jobb?</h3>
<p>Ja. Det finns ingen nedre gräns. Så snart din firma yrkesmässigt producerar farligt avfall – oavsett mängd – gäller både anteckningsskyldighet och rapportering till avfallsregistret.</p>

<h3>Räcker transportdokumentet som dokumentation?</h3>
<p>Nej. Transportdokumentet är en del av kedjan, men det ersätter varken din egen anteckning eller den elektroniska rapporteringen till avfallsregistret. De är separata krav.</p>

<h3>Vem rapporterar om entreprenören ordnar allt?</h3>
<p>Varje aktör rapporterar sina egna uppgifter. Att en entreprenör eller åkare sköter bortforslingen tar inte bort din skyldighet som producent att anteckna och rapportera att avfallet uppstått hos dig.</p>

<h3>Vad ändrades den 1 oktober 2025?</h3>
<p>Avfallsförordningen ändrades då bland annat 3 och 4 kap. ersattes och paragrafer numrerades om. Själva skyldigheten att anteckna och rapportera farligt avfall består – men undvik att låsa era rutiner till gamla paragrafnummer.</p>

<h2>Kom igång</h2>

<p>Börja med att lägga in de farliga fraktionerna i <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a> och bygg en rutin som håller hela vägen till avfallsregistret. Vill du se hur det fungerar i ett skarpt projekt? <a href="/sv/contact">Boka en demo</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/rivningsavfall-sorteringskrav-bygg">Rivningsavfall och sorteringskrav</a>, <a href="/sv/blog/nya-asbestregler-2026">Nya asbestregler 2026</a>, <a href="/sv/blog/klimatdeklaration-byggnad-krav">Klimatdeklaration för byggnad – krav</a>.</p>
`;

const A_FARLIGT_AVFALL_ANTECKNINGSSKYLDIGHET_BYGG: BlogPost = {
  _id: "code-"+"farligt-avfall-anteckningsskyldighet-bygg",
  title: "Farligt avfall och anteckningsskyldighet – vad byggföretaget måste göra 2026", slug: "farligt-avfall-anteckningsskyldighet-bygg", locale: "sv",
  excerpt: "Så uppfyller byggföretaget anteckningsplikten och rapporteringen av farligt avfall till Naturvårdsverkets avfallsregister – från EWC-kod till tvådagarsfristen.", tag: "Regelverk",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_FARLIGT_AVFALL_ANTECKNINGSSKYLDIGHET_BYGG_HTML,
  seoTitle: "Farligt avfall: anteckningsplikt | ByggExp", seoDescription: "Anteckna och rapportera farligt avfall till avfallsregistret – krav, tidsfrister och rutin för byggföretag 2026. Undvik miljösanktionsavgift på 5 000 kr.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T08:15:00.000Z", createdAt: "2026-08-20T08:15:00.000Z", updatedAt: "2026-08-20T08:15:00.000Z",
};

// --- Bygglov cluster (high-volume consumer/regulatory; funnels to kontrollplan-mall + /fa-offert) ---

const B_BEHOVER_JAG_BYGGLOV_HTML = `
<p>Behöver du bygglov? Sedan 1 december 2025 gäller ett nytt 9 kap. i plan- och bygglagen (PBL) som gör betydligt fler åtgärder lovfria. Friggebod och attefallshus har ersatts av en samlad regel om komplementbyggnader, och många fasadändringar på småhus kräver inte längre lov. Här är vad som gäller 2026.</p>
<p>Planerar du att anlita någon för jobbet? <a href="/sv/fa-offert">Få 3 offerter från byggföretag</a> – gratis och utan förpliktelser.</p>

<h2>När krävs bygglov?</h2>
<p>Bygglov krävs som huvudregel för nybyggnad och tillbyggnad. För småhus finns dock stora undantag – och detaljplanen kan i sin tur kräva lov även för sådant som annars är lovfritt.</p>

<h2>Vanliga åtgärder 2026 – lov, anmälan eller inget?</h2>
<ul>
<li><strong>Nytt hus:</strong> bygglov.</li>
<li><strong>Komplementbyggnad eller komplementbostadshus (tidigare friggebod/attefallshus):</strong> inget lov och ingen anmälan inom detaljplan upp till 30 m² och 4,0 m nockhöjd (sammanlagt 45 m² på tomten), utanför detaljplan upp till 50 m² och 4,5 m (sammanlagt 65 m²).</li>
<li><strong>Tillbyggnad av bostadshuset:</strong> lovfri upp till 30 m² bruttoarea (sammanlagt) om den inte går över husets taknock.</li>
<li><strong>Fasadändring på en- eller tvåbostadshus</strong> (färg, material, takbeläggning): i regel lovfri – men varsamhetskrav och förvanskningsförbud gäller.</li>
<li><strong>Mur, plank och altan inom detaljplan:</strong> lov om de blir högre än 1,8 m inom 3,6 m från en byggnad, eller högre än 1,2 m längre bort.</li>
</ul>

<h2>När krävs lov ändå?</h2>
<ul>
<li>Närmare tomtgräns än 4,5 m – om inte alla berörda grannar har gett skriftligt medgivande.</li>
<li>För särskilt värdefulla byggnader och områden (kulturvärden) eller när detaljplanen kräver det.</li>
<li>Strandskyddet gäller oavsett lovplikt – där kan dispens behövas.</li>
</ul>

<h2>Anmälan och startbesked</h2>
<p>Anmälan krävs i stället för vissa tekniska åtgärder, även när bygglov inte behövs: installation av vatten och avlopp, ventilation, eldstad eller rökkanal, väsentlig påverkan på bärande konstruktion eller brandskydd samt rivning av byggnader över 50 m². Då får arbetet inte påbörjas förrän du fått ett <a href="/sv/blog/startbesked-bygglov-process-2026">startbesked</a>, och till anmälan hör en <a href="/sv/verktyg/kontrollplan-mall">kontrollplan</a>.</p>
<p>Lovfrihet är inte regelfrihet: byggnaden ska fortfarande uppfylla de tekniska kraven. Är du osäker – fråga kommunens bygglovsavdelning.</p>

<h2>Vanliga frågor</h2>
<h3>Hur vet jag om jag behöver bygglov?</h3>
<p>Det beror på åtgärd, storlek och placering. Nybyggnad av hus kräver bygglov; komplementbyggnader och mindre tillbyggnader på småhus är i regel lovfria inom måtten ovan. Kontrollera detaljplanen och fråga kommunen.</p>
<h3>Vad händer om jag bygger utan bygglov?</h3>
<p>Att bygga utan lov (svartbygge) kan leda till byggsanktionsavgift och krav på rättelse. Sök lov eller gör anmälan innan du börjar.</p>
<h3>Vad är skillnaden mellan bygglov och anmälan?</h3>
<p>Bygglov prövar placering och utformning mot detaljplanen. Anmälan gäller tekniska åtgärder som VA, ventilation och eldstad – där prövas bara de tekniska kraven, och du behöver startbesked innan du börjar.</p>
<p><em>Källor: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/" target="_blank" rel="noopener">plan- och bygglagen (PBL) 9 kap.</a>, <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-byggforordning-2011338_sfs-2011-338/" target="_blank" rel="noopener">plan- och byggförordningen (PBF) 6 kap. 1 § och 7 kap. 5 §</a> och <a href="https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/byggnader/nybyggnad/komplementbostadshus/" target="_blank" rel="noopener">Boverkets PBL kunskapsbank</a>. Uppdaterad 8 oktober 2026 enligt reglerna som gäller sedan 1 december 2025.</em></p>
`.trim();

const B_BEHOVER_JAG_BYGGLOV: BlogPost = {
  _id: 'code-behover-jag-bygglov', title: 'Behöver du bygglov? Guide 2026', slug: 'behover-jag-bygglov', locale: 'sv',
  excerpt: 'Nya PBL sedan 1 december 2025: komplementbyggnader upp till 30 m² och tillbyggnader upp till 30 m² är i regel lovfria. Guide till när bygglov krävs, när anmälan behövs och vad du får göra utan lov.', tag: 'Regelverk',
  coverImageUrl: '/landing/features/6verktyg.webp', contentHtml: B_BEHOVER_JAG_BYGGLOV_HTML,
  seoTitle: 'Behöver du bygglov? Nya regler 2026 | ByggExp', seoDescription: 'Nya bygglovsregler sedan 1 dec 2025: komplementbyggnad 30 m² (45 m² totalt) utan lov och anmälan, tillbyggnad 30 m², 4,5 m till tomtgräns. När krävs anmälan?',
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: '', noIndex: false, isPublished: true,
  publishedAt: '2026-08-22T14:00:00.000Z', createdAt: '2026-08-22T14:00:00.000Z', updatedAt: '2026-10-08T09:00:00.000Z',
};

const B_ATTEFALLSHUS_REGLER_HTML = `
<p>Sedan 1 december 2025 finns inga särskilda attefallsregler längre. Attefallshus och friggebodar har ersatts av en samlad regel om <strong>komplementbyggnader</strong> och <strong>komplementbostadshus</strong> i 9 kap. plan- och bygglagen (PBL). Den stora nyheten: inom måtten krävs varken bygglov, anmälan eller startbesked – så länge du inte installerar vatten, avlopp, ventilation eller eldstad.</p>
<p>Vill du ta in offerter på ett attefallshus? <a href="/sv/fa-offert">Få 3 offerter från byggföretag</a> – gratis.</p>

<h2>Hur stort får ett attefallshus vara 2026?</h2>
<ul>
<li><strong>Inom detaljplan:</strong> högst 30 m² byggnadsarea, taknockshöjd högst 4,0 m och sammanlagt högst 45 m² för alla lovfria komplementbyggnader och komplementbostadshus på tomten.</li>
<li><strong>Utanför detaljplan:</strong> högst 50 m², taknockshöjd högst 4,5 m och sammanlagt högst 65 m².</li>
</ul>
<p>Byggnaden ska också vara mindre än det bostadshus den kompletterar och placeras inom tomten. Befintliga attefallshus och friggebodar räknas in i den sammanlagda arean. Samma mått gäller om du bygger till en befintlig komplementbyggnad.</p>

<h2>Avstånd till tomtgräns</h2>
<p>Närmare tomtgräns än <strong>4,5 meter</strong> krävs bygglov, om inte alla berörda grannar skriftligen har medgett placeringen. Samma sak gäller närmare än 30 meter från ett järnvägsspår (9 kap. 34–35 §§ PBL).</p>

<h2>Anmälan och startbesked – när behövs det?</h2>
<p>Själva byggnaden kräver ingen anmälan. Men enligt plan- och byggförordningen (6 kap. 1 §) krävs anmälan – och startbesked innan du gör den delen – om du:</p>
<ul>
<li>installerar vatten eller avlopp,</li>
<li>installerar ventilation, eldstad eller rökkanal,</li>
<li>påverkar bärande konstruktion eller brandskydd väsentligt i en befintlig byggnad.</li>
</ul>
<p>Ett komplementbostadshus med kök och badrum kräver alltså i praktiken en anmälan för VA och ventilation, med en enkel <a href="/sv/verktyg/kontrollplan-mall">kontrollplan</a>. Kontrollansvarig krävs normalt inte (PBF 7 kap. 5 §), men byggnadsnämnden kan besluta annat.</p>

<h2>När krävs bygglov ändå?</h2>
<ul>
<li>Närmare tomtgräns än 4,5 m utan grannarnas skriftliga medgivande.</li>
<li>För särskilt värdefulla byggnader eller områden, eller där detaljplanen skyddar kulturvärden (9 kap. 37 §).</li>
<li>Komplementbostadshus i vissa områden för totalförsvaret, till exempel nära flygplatser och skjutfält.</li>
<li>Om detaljplanen eller områdesbestämmelserna kräver lov.</li>
</ul>
<p>Strandskyddet gäller oavsett – inom strandskyddat område behövs dispens. Och lovfrihet är inte regelfrihet: byggnaden ska uppfylla de tekniska kraven, och ett komplementbostadshus ska uppfylla kraven på en bostad. Är du osäker – fråga kommunen innan du bygger.</p>

<h2>Vad har ändrats jämfört med de gamla attefallsreglerna?</h2>
<ul>
<li>Förut krävdes alltid anmälan och startbesked för attefallshus. Nu krävs det bara för installationer som VA, ventilation och eldstad.</li>
<li>Friggebod och attefallshus är nu samma regel, med ett gemensamt tak på 45 m² inom detaljplan.</li>
<li>Utanför detaljplan får byggnaden vara 50 m² och 4,5 m hög.</li>
<li>Attefallstillbyggnaden på 15 m² är ersatt av en lovfri tillbyggnad på upp till 30 m² bruttoarea som inte går över husets taknock.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Hur stort får ett attefallshus vara 2026?</h3>
<p>Inom detaljplan högst 30 m² och 4,0 m nockhöjd (sammanlagt 45 m² på tomten). Utanför detaljplan högst 50 m² och 4,5 m (sammanlagt 65 m²).</p>
<h3>Hur nära tomtgräns får attefallshuset stå?</h3>
<p>Närmare än 4,5 meter krävs bygglov, om inte alla berörda grannar skriftligen har medgett placeringen.</p>
<h3>Behöver jag anmälan och startbesked för attefallshus?</h3>
<p>Inte för själva byggnaden sedan 1 december 2025. Installerar du vatten, avlopp, ventilation eller eldstad krävs anmälan och startbesked för den delen.</p>
<p><em>Källor: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/" target="_blank" rel="noopener">plan- och bygglagen (PBL) 9 kap.</a>, <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-byggforordning-2011338_sfs-2011-338/" target="_blank" rel="noopener">plan- och byggförordningen (PBF) 6 kap. 1 § och 7 kap. 5 §</a> och <a href="https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/byggnader/nybyggnad/komplementbostadshus/" target="_blank" rel="noopener">Boverkets PBL kunskapsbank</a>. Uppdaterad 8 oktober 2026 enligt reglerna som gäller sedan 1 december 2025.</em></p>
`.trim();

const B_ATTEFALLSHUS_REGLER: BlogPost = {
  _id: 'code-attefallshus-regler', title: 'Attefallshus 2026 – nya regler, storlek och anmälan', slug: 'attefallshus-regler', locale: 'sv',
  excerpt: 'Nya regler sedan 1 dec 2025: attefallshus heter nu komplementbostadshus – upp till 30 m² och 4,0 m inom detaljplan (45 m² totalt), utan bygglov och anmälan. Anmälan bara för VA, ventilation och eldstad.', tag: 'Regelverk',
  coverImageUrl: '/landing/features/6verktyg.webp', contentHtml: B_ATTEFALLSHUS_REGLER_HTML,
  seoTitle: 'Attefallshus regler 2026 – nya PBL, 30 m² | ByggExp', seoDescription: 'Attefallshus 2026: inget bygglov, ingen anmälan upp till 30 m² och 4,0 m nock (45 m² totalt). Utanför detaljplan 50 m². Anmälan krävs för VA, ventilation, eldstad.',
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: '', noIndex: false, isPublished: true,
  publishedAt: '2026-08-22T14:05:00.000Z', createdAt: '2026-08-22T14:05:00.000Z', updatedAt: '2026-10-08T09:00:00.000Z',
};

const B_FRIGGEBOD_REGLER_HTML = `
<p>Friggeboden finns inte längre som egen regel. Sedan 1 december 2025 ingår den i den samlade regeln om <strong>komplementbyggnader</strong> i 9 kap. plan- och bygglagen (PBL) – samma regel som för attefallshus. För dig betyder det att du får bygga större än förut, utan bygglov och utan anmälan.</p>
<p>Vill du ha hjälp att bygga? <a href="/sv/fa-offert">Få 3 offerter från byggföretag</a>.</p>

<h2>Hur stor får en friggebod vara 2026?</h2>
<ul>
<li><strong>Inom detaljplan:</strong> högst 30 m² byggnadsarea och 4,0 m taknockshöjd. Alla lovfria komplementbyggnader och komplementbostadshus på tomten får tillsammans vara högst 45 m².</li>
<li><strong>Utanför detaljplan:</strong> högst 50 m² och 4,5 m, sammanlagt högst 65 m².</li>
</ul>
<p>Byggnaden ska vara mindre än bostadshuset och stå inom tomten. Befintliga friggebodar och attefallshus räknas in i den sammanlagda arean.</p>

<h2>Avstånd till tomtgräns</h2>
<p>Närmare tomtgräns än <strong>4,5 meter</strong> krävs bygglov, om inte alla berörda grannar skriftligen har medgett placeringen.</p>

<h2>Behövs anmälan?</h2>
<p>Nej, inte för ett förråd eller en gäststuga utan installationer. Drar du in vatten, avlopp, ventilation eller en eldstad krävs anmälan och startbesked för den delen. Bygglov krävs ändå för särskilt värdefulla byggnader och områden, och strandskyddet gäller oavsett.</p>

<h2>Friggebod eller attefallshus?</h2>
<p>I dag är det samma regel. Skillnaden är användningen: en komplementbyggnad är t.ex. förråd, garage eller gäststuga, medan ett komplementbostadshus är en självständig bostad. Läs mer om <a href="/sv/blog/attefallshus-regler">attefallshus 2026</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Hur stor får en friggebod vara?</h3>
<p>Inom detaljplan högst 30 m² och 4,0 m nockhöjd (sammanlagt 45 m² på tomten), utanför detaljplan högst 50 m² och 4,5 m.</p>
<h3>Behöver jag bygglov för en friggebod?</h3>
<p>Nej, inom måtten krävs varken bygglov eller anmälan. Närmare tomtgräns än 4,5 m krävs grannarnas skriftliga medgivande.</p>
<h3>Gäller 15 m²-gränsen fortfarande?</h3>
<p>Nej. Den gamla friggebodsregeln (15 m², 3 m) togs bort 1 december 2025 och ersattes av regeln om komplementbyggnader.</p>
<p><em>Källor: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/" target="_blank" rel="noopener">plan- och bygglagen (PBL) 9 kap.</a>, <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-byggforordning-2011338_sfs-2011-338/" target="_blank" rel="noopener">plan- och byggförordningen (PBF) 6 kap. 1 § och 7 kap. 5 §</a> och <a href="https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/byggnader/nybyggnad/komplementbostadshus/" target="_blank" rel="noopener">Boverkets PBL kunskapsbank</a>. Uppdaterad 8 oktober 2026 enligt reglerna som gäller sedan 1 december 2025.</em></p>
`.trim();

const B_FRIGGEBOD_REGLER: BlogPost = {
  _id: 'code-friggebod-regler', title: 'Friggebod 2026 – nya regler, storlek och höjd', slug: 'friggebod-regler', locale: 'sv',
  excerpt: 'Friggeboden ersattes 1 dec 2025 av regeln om komplementbyggnad: inom detaljplan upp till 30 m² och 4,0 m nockhöjd (45 m² totalt), utan bygglov och anmälan. 4,5 m till tomtgräns.', tag: 'Regelverk',
  coverImageUrl: '/landing/features/6verktyg.webp', contentHtml: B_FRIGGEBOD_REGLER_HTML,
  seoTitle: 'Friggebod regler 2026 – nu 30 m² | ByggExp', seoDescription: 'Friggebod 2026: gamla 15 m²-regeln är borta. Nu gäller komplementbyggnad upp till 30 m² och 4,0 m nock inom detaljplan, 45 m² totalt, utan lov och anmälan.',
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: '', noIndex: false, isPublished: true,
  publishedAt: '2026-08-22T14:10:00.000Z', createdAt: '2026-08-22T14:10:00.000Z', updatedAt: '2026-10-08T09:00:00.000Z',
};

const B_STAKET_BYGGLOV_HTML = `
<p>Behöver du bygglov för staket eller plank? Sedan 1 december 2025 är reglerna för murar och plank samma i hela landet (9 kap. plan- och bygglagen). Vanliga, genomsiktliga staket kräver normalt inget lov. Här är vad som gäller för plank, murar och tomtgräns.</p>
<p>Ska du sätta upp staket? Räkna material i vår gratis <a href="/sv/verktyg/staket-kalkylator">staket-kalkylator</a>, eller <a href="/sv/fa-offert">få offerter från byggföretag</a>.</p>

<h2>Staket, plank eller mur – vad kräver bygglov?</h2>
<ul>
<li><strong>Staket</strong> (luftigt, genomsiktligt) – normalt inget bygglov.</li>
<li><strong>Plank och mur inom detaljplan</strong> – bygglov om de blir högre än 1,8 m inom 3,6 m från en byggnad, eller högre än 1,2 m längre bort.</li>
<li><strong>Närmare tomtgräns än 4,5 m</strong> – bygglov för plank och mur över 1,2 m, om inte berörda grannar skriftligen har medgett det.</li>
</ul>
<p>Detaljplanen kan ha egna bestämmelser – kontrollera den och fråga kommunen om du är osäker.</p>

<h2>Staket vid tomtgräns</h2>
<p>Du får normalt sätta staket i din egen tomt. Vid själva tomtgränsen är det klokt att komma överens med grannen, eftersom ett gränsstaket ofta berör båda.</p>

<h2>Vanliga frågor</h2>
<h3>Behöver jag bygglov för staket?</h3>
<p>För vanliga, genomsiktliga staket krävs normalt inget bygglov. Plank och murar kan kräva lov beroende på höjd och avstånd till byggnad och tomtgräns.</p>
<h3>Hur högt plank får jag ha utan bygglov?</h3>
<p>Inom detaljplan upp till 1,8 m inom 3,6 m från en byggnad och upp till 1,2 m längre bort. Närmare tomtgräns än 4,5 m behövs grannarnas medgivande för plank över 1,2 m.</p>
<h3>Får jag sätta staket vid tomtgränsen?</h3>
<p>Ja, inom din tomt. Vid själva gränsen bör du komma överens med grannen, och följa detaljplanen.</p>
<p><em>Källa: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/" target="_blank" rel="noopener">plan- och bygglagen 9 kap. 19 och 34–35 §§</a>. Uppdaterad 8 oktober 2026.</em></p>
`.trim();

const B_STAKET_BYGGLOV: BlogPost = {
  _id: 'code-staket-bygglov', title: 'Staket och bygglov – regler, plank och tomtgräns', slug: 'staket-bygglov', locale: 'sv',
  excerpt: 'Behöver du bygglov för staket? Vanliga staket kräver oftast inget. Plank och murar inom detaljplan kräver lov över 1,8 m nära huset och 1,2 m längre bort – regler sedan 1 dec 2025.', tag: 'Regelverk',
  coverImageUrl: '/landing/features/6verktyg.webp', contentHtml: B_STAKET_BYGGLOV_HTML,
  seoTitle: 'Staket och bygglov – regler, plank & tomtgräns | ByggExp', seoDescription: 'Staket kräver normalt inget bygglov. Plank och mur: lov över 1,8 m inom 3,6 m från byggnad, annars över 1,2 m. Närmare tomtgräns än 4,5 m krävs grannens medgivande.',
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: '', noIndex: false, isPublished: true,
  publishedAt: '2026-08-22T14:15:00.000Z', createdAt: '2026-08-22T14:15:00.000Z', updatedAt: '2026-10-08T09:00:00.000Z',
};

const B_UTERUM_BYGGLOV_HTML = `
<p>Ett uterum eller en inglasad altan som byggs ihop med huset räknas som en tillbyggnad. Sedan 1 december 2025 är mindre tillbyggnader lovfria – så många uterum kräver i dag varken bygglov eller anmälan. Här är vad som gäller 2026.</p>
<p>Planerar du ett uterum? <a href="/sv/fa-offert">Få 3 offerter från byggföretag</a>.</p>

<h2>Kräver uterum bygglov?</h2>
<p>Nej, inte om tillbyggnaden:</p>
<ul>
<li>får högst <strong>30 m²</strong> bruttoarea eller öppenarea,</li>
<li>inte går över husets taknock, och</li>
<li>tillsammans med andra lovfria tillbyggnader på huset håller sig inom 30 m².</li>
</ul>
<p>Den gamla attefallstillbyggnaden på 15 m² finns inte längre – den ersattes av den här regeln (9 kap. 10 § PBL).</p>

<h2>När krävs lov ändå?</h2>
<ul>
<li>Närmare tomtgräns än 4,5 m, om inte berörda grannar skriftligen har medgett det.</li>
<li>För särskilt värdefulla byggnader och områden, eller om detaljplanen kräver det.</li>
<li>Om uterummet blir större än 30 m² eller högre än taknocken.</li>
</ul>
<p>Påverkar bygget husets bärande konstruktion eller brandskydd väsentligt, eller installerar du ventilation eller värme med eldstad, krävs anmälan och startbesked. Lovfrihet är inte regelfrihet – de tekniska kraven gäller. Fråga kommunen om du är osäker.</p>

<h2>Vanliga frågor</h2>
<h3>Behöver jag bygglov för uterum?</h3>
<p>Inte om uterummet är högst 30 m², inte går över husets taknock och placeras minst 4,5 m från tomtgräns (eller med grannarnas medgivande).</p>
<h3>Kräver inglasad altan bygglov?</h3>
<p>En inglasning som ökar husets volym räknas som tillbyggnad och följer samma regel: lovfri upp till 30 m² under taknocken. Kontrollera detaljplanen och eventuella kulturvärden.</p>
<p><em>Källor: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/" target="_blank" rel="noopener">plan- och bygglagen (PBL) 9 kap.</a>, <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-byggforordning-2011338_sfs-2011-338/" target="_blank" rel="noopener">plan- och byggförordningen (PBF) 6 kap. 1 § och 7 kap. 5 §</a> och <a href="https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/anmalningsplikt/byggnader/nybyggnad/komplementbostadshus/" target="_blank" rel="noopener">Boverkets PBL kunskapsbank</a>. Uppdaterad 8 oktober 2026 enligt reglerna som gäller sedan 1 december 2025.</em></p>
`.trim();

const B_UTERUM_BYGGLOV: BlogPost = {
  _id: 'code-uterum-bygglov', title: 'Uterum och bygglov – när krävs det?', slug: 'uterum-bygglov', locale: 'sv',
  excerpt: 'Kräver uterum bygglov? Sedan 1 dec 2025 är tillbyggnader upp till 30 m² som inte går över taknocken lovfria. Så gäller det för uterum och inglasad altan 2026.', tag: 'Regelverk',
  coverImageUrl: '/landing/features/6verktyg.webp', contentHtml: B_UTERUM_BYGGLOV_HTML,
  seoTitle: 'Uterum och bygglov 2026 – 30 m²-regeln | ByggExp', seoDescription: 'Uterum 2026: tillbyggnad upp till 30 m² under taknocken kräver inget bygglov. Närmare tomtgräns än 4,5 m krävs grannens medgivande. Inglasad altan samma regel.',
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: '', noIndex: false, isPublished: true,
  publishedAt: '2026-08-22T14:20:00.000Z', createdAt: '2026-08-22T14:20:00.000Z', updatedAt: '2026-10-08T09:00:00.000Z',
};

export const REGELVERK_ARTICLES: BlogPost[] = [
  B_BEHOVER_JAG_BYGGLOV,
  B_ATTEFALLSHUS_REGLER,
  B_FRIGGEBOD_REGLER,
  B_STAKET_BYGGLOV,
  B_UTERUM_BYGGLOV,
  PERSONALLIGGARE,
  ID06,
  A_KONTROLLANSVARIG_NAR_BEHOVS,
  A_KONTROLLPLAN_MALL_BYGGLOV,
  A_VATRUMSCERTIFIKAT_BEHORIGHET_GVK,
  A_YRKESBEVIS_BYGG_LARLING,
  A_BOVERKETS_NYA_BYGGREGLER_2026_KONTROLLPLAN,
  A_NYA_BYGGREGLER_2026_ENTREPRENAD,
  A_BEHORIGHETER_CERTIFIERINGAR_LONAR_SIG,
  A_ID06_BESTALLA_KORT_STEG_FOR_STEG,
  A_STARTBESKED_BYGGLOV_PROCESS_2026,
  A_UTSTATIONERING_UTLANDSK_ARBETSKRAFT_BYGG,
  A_KLIMATDEKLARATION_BYGGNAD_KRAV,
  A_RIVNINGSAVFALL_SORTERINGSKRAV_BYGG,
  A_ID06_NYA_KRAV_2026_LEGITIMERING,
  A_RIVNINGSLOV_RIVNINGSANMALAN_BYGG,
  A_FARLIGT_AVFALL_ANTECKNINGSSKYLDIGHET_BYGG,
];
