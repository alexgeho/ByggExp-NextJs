// Direct answer shown right under the H1 of a blog article — the number, rule
// or table the searcher came for, before any guide text (owner rule: every
// visitor gets what they searched for on the first screen). Keyed by slug,
// sv-only (Swedish copy). Keep it to 2–4 lines or one compact table, verified
// against the primary source named in `source`.

export type QuickAnswer = {
  /** Trusted, hand-written HTML (p / ul / table). */
  html: string;
  /** Where the facts come from, shown small under the answer. */
  source?: { label: string; href: string };
};

const BYGGAVTALET_PDF =
  'https://www.byggnads.se/49ec78/siteassets/kollektivavtal/byggavtalet-2025-digital-utgava-1.pdf';
const AB04_BYGGTJANST = 'https://byggtjanst.se/bokhandel/upphandling/ab-04';

// Facts verified 2026-10-06 against the linked sources (Byggavtalet 2025–2027
// digital utgåva 1, Skatteverket, Boverket, Byggföretagen, Svensk Byggtjänst, Gyproc).
export const ARTICLE_QUICK_ANSWERS: Record<string, QuickAnswer> = {
  'ob-overtid-byggavtalet-rakna': {
    html: `<table>
<thead><tr><th>Mån–fre</th><th>OB</th><th>Övertid</th></tr></thead>
<tbody>
<tr><td>05–06</td><td>OB&nbsp;1&nbsp;·&nbsp;20&nbsp;%</td><td>B&nbsp;·&nbsp;50&nbsp;%</td></tr>
<tr><td>06–17</td><td>–</td><td>A&nbsp;·&nbsp;30&nbsp;%</td></tr>
<tr><td>17–18</td><td>–</td><td>B&nbsp;·&nbsp;50&nbsp;%</td></tr>
<tr><td>18–19</td><td>OB&nbsp;2&nbsp;·&nbsp;40&nbsp;%</td><td>B&nbsp;·&nbsp;50&nbsp;%</td></tr>
<tr><td>19–22</td><td>OB&nbsp;2&nbsp;·&nbsp;40&nbsp;%</td><td>C&nbsp;·&nbsp;70&nbsp;%</td></tr>
<tr><td>22–05</td><td>OB&nbsp;3&nbsp;·&nbsp;70&nbsp;%</td><td>D&nbsp;·&nbsp;100&nbsp;%</td></tr>
<tr><td>Helg</td><td>OB&nbsp;3&nbsp;·&nbsp;70&nbsp;%</td><td>D&nbsp;·&nbsp;100&nbsp;%</td></tr>
</tbody>
</table>
<p>Procent av utgående lön. Under övertid betalas ingen OB.</p>`,
    source: { label: 'Byggavtalet 2025–2027, § 2 p. 5–6', href: BYGGAVTALET_PDF },
  },

  'ab-u-underentreprenor-avtal': {
    html: `<p><strong>AB-U 07</strong> – för utförandeunderentreprenad – beställaren står för projekteringen. AB 04 gäller, med AB-U 07:s ändringar och tillägg.</p>
<p><strong>ABT-U 07</strong> – samma för totalunderentreprenad: underentreprenören projekterar och utför. ABT 06 gäller.</p>
<p>Texterna och kontraktsformulären laddas ned gratis från Byggföretagen.</p>`,
    source: {
      label: 'Byggföretagen – AB-U 07 (pdf)',
      href: 'https://byggforetagen.se/app/uploads/2020/01/AB-U__07.pdf',
    },
  },

  'restidsersattning-byggavtalet': {
    html: `<table>
<tbody>
<tr><td>Egen bil, daglig resa (minst 2&nbsp;km enkel väg)</td><td>2,50&nbsp;kr/km, max 120&nbsp;km enkel väg</td></tr>
<tr><td>Samåkning, föraren</td><td>+0,85&nbsp;kr/km per passagerare</td></tr>
<tr><td>Restid till/från förrättning</td><td>Grundlön, max 12&nbsp;tim/dygn minus arbetade timmar</td></tr>
<tr><td>Traktamente</td><td>450&nbsp;kr/dag vid övernattning (från 1 jan 2026)</td></tr>
</tbody>
</table>
<p>Grundlön för yrkesarbetare: 203 kr/tim från 1 maj 2026. Förrättning = minst 70 km från bostaden. Skattefri bilersättning 2026: 25 kr/mil.</p>`,
    source: { label: "Byggavtalet 2025–2027, § 6", href: "https://www.byggnads.se/49ec78/siteassets/kollektivavtal/byggavtalet-2025-digital-utgava-1.pdf" },
  },

  'bygga-trappa-steghojd-stegdjup-berakning': {
    html: `<p><strong>2 × steghöjd + stegdjup = 600–650 mm</strong> (helst 620–630).</p>
<p>Exempel: steghöjd 175 mm → stegdjup 630 − 2 × 175 = 280 mm. Stegdjup minst 250 mm.</p>`,
    source: {
      label: 'Svensk Byggtjänst – Byggfakta om trappor',
      href: 'https://byggkatalogen.byggtjanst.se/byggfakta/trappor/481',
    },
  },

  'ackordslon-bygg': {
    html: `<p><strong>Ackord</strong> är prestationslön: laget får betalt för utförd mängd enligt ackordslista eller arbetsgivarens ackordsunderlag – inte per timme.</p>
<p>Grundlönen är garanterad: 203 kr/tim för yrkesarbetare från 1 maj 2026 (196 kr före). Listor: <a href="https://www.byggnads.se/stod-pa-jobbet/byggnads-kollektivavtal/ditt-kollektivavtal/" target="_blank" rel="noopener noreferrer">Byggnads tids- och prislistor</a>.</p>`,
    source: { label: 'Byggavtalet 2025–2027, § 3', href: BYGGAVTALET_PDF },
  },

  'semesterlon-semesterersattning-byggavtalet': {
    html: `<p><strong>Timavlönade: 13,0 %</strong> av semesterlöneunderlaget i semesterlön och semesterersättning (semesterlagen: 12 %).</p>
<p>Månadsavlönade: månadslön + semestertillägg 0,8 % per betald semesterdag, plus 13,0 % på övertid och andra lönetillägg. Semesterersättning när anställningen slutar: 4,6 % av månadslönen per ej uttagen dag + semestertillägg.</p>`,
    source: { label: 'Byggavtalet 2025–2027, bilaga I', href: BYGGAVTALET_PDF },
  },

  'ab-04-och-abt-06': {
    html: `<table>
<thead><tr><th></th><th>AB 04</th><th>ABT 06</th></tr></thead>
<tbody>
<tr><td>Entreprenad</td><td>Utförande</td><td>Total</td></tr>
<tr><td>Projekterar</td><td>Beställaren</td><td>Entreprenören</td></tr>
<tr><td>Garantitid</td><td>5 år, material och varor som entreprenören valt 2 år</td><td>5 år, material som beställaren föreskrivit 2 år</td></tr>
<tr><td>Ansvarstid</td><td colspan="2">10 år från godkännandet</td></tr>
</tbody>
</table>
<p>Avtalstexterna säljs av Svensk Byggtjänst, kontraktsformulären är gratis – eller använd vår <a href="/sv/verktyg/entreprenadkontrakt-mall">kontraktsmall</a>.</p>`,
    source: { label: 'Svensk Byggtjänst – AB 04', href: AB04_BYGGTJANST },
  },

  'reglar-dimensioner-c-avstand-vagg': {
    html: `<table>
<thead><tr><th>Regel</th><th>Används till</th></tr></thead>
<tbody>
<tr><td>45 × 45 mm</td><td>Lätta väggar, installationsskikt</td></tr>
<tr><td>45 × 70 mm</td><td>Vanlig innervägg</td></tr>
<tr><td>45 × 95 mm</td><td>Innervägg med mer isolering, upp till 4 m vägghöjd</td></tr>
</tbody>
</table>
<p>c 450 mm med 900 mm skivor, c 600 mm med 1&nbsp;200&nbsp;mm skivor. Bärande väggar och ytterväggar dimensioneras separat.</p>`,
    source: {
      label: 'Gyproc Handbok – Innerväggar GT (pdf)',
      href: 'https://www.gyproc.se/documents/handbok/hb10-gyproc-gt.pdf',
    },
  },

  'forseningsvite-entreprenad': {
    html: `<p><strong>Vite enligt kontraktet för varje påbörjad vecka</strong> som kontraktstiden överskrids (AB 04 kap 5 § 3).</p>
<p>Exempel: avtalat vite 1 % av 4 Mkr = 40&nbsp;000&nbsp;kr/vecka. 8 dagars försening = 2 påbörjade veckor = 80&nbsp;000&nbsp;kr.</p>
<p>Avtalat vite = inget skadestånd utöver vitet. Inget vite avtalat = beställaren får kräva ersättning för styrkt skada.</p>`,
    source: { label: 'AB 04 kap 5 § 3 – Svensk Byggtjänst', href: AB04_BYGGTJANST },
  },

  'momsavdrag-latt-lastbil-personbil-bygg': {
    html: `<table>
<thead><tr><th>Avdrag</th><th>Köp</th><th>Hyra</th><th>Drift</th></tr></thead>
<tbody>
<tr><td>Lätt lastbil, separat hytt</td><td>100&nbsp;%</td><td>100&nbsp;%</td><td>100&nbsp;%</td></tr>
<tr><td>Personbil / skåpbil utan separat hytt ≤ 3&nbsp;500&nbsp;kg</td><td>0&nbsp;%</td><td>50&nbsp;%</td><td>100&nbsp;%</td></tr>
</tbody>
</table>
<p>Gäller i momspliktig verksamhet. 50 % på hyra (leasing) förutsätter mer än 100 mil/år där.</p>`,
    source: {
      label: 'Skatteverket – Bilar och moms',
      href: 'https://www.skatteverket.se/foretag/moms/sarskildamomsregler/bilarochmoms.4.58d555751259e4d6616800010628.html',
    },
  },

  'hindersanmalan-tidsforlangning-ab04': {
    html: `<p><strong>AB 04 kap 4 § 4:</strong> underrätta beställaren utan dröjsmål när du inser – eller borde inse – att ett hinder försenar arbetet.</p>
<p>Gör du inte det får du inte åberopa hindret (om inte beställaren själv insett det), och förseningsvitet löper. Grunderna för tidsförlängning står i kap 4 § 3. Anmäl skriftligt – då kan du bevisa det.</p>`,
    source: { label: 'AB 04 kap 4 – Svensk Byggtjänst', href: AB04_BYGGTJANST },
  },

  'boverkets-nya-byggregler-2026-kontrollplan': {
    html: `<p>De nya byggreglerna gäller sedan <strong>1 juli 2025</strong>. Övergången, då man fick välja gamla BBR/EKS, slutade <strong>30 juni 2026</strong>. Nya ärenden följer nu bara de nya reglerna.</p>
<p>Kraven på kontrollplan står kvar i PBL 10 kap. Reglerna är nu funktionskrav utan anvisade lösningar – egenkontrollen behöver visa hur kraven verifieras.</p>`,
    source: {
      label: 'Boverket – Nu gäller nya byggregler fullt ut',
      href: 'https://www.boverket.se/sv/PBL-kunskapsbanken/nyheter-pa-pbl-kunskapsbanken/nya-byggregler-fullt-ut/',
    },
  },

  'bas-p-bas-u': {
    html: `<p><strong>BAS-P</strong> samordnar arbetsmiljön under planering och projektering och upprättar arbetsmiljöplanen. <strong>BAS-U</strong> samordnar på byggarbetsplatsen och håller planen aktuell.</p><p>Byggherren utser båda. Samma person eller företag får ha båda rollerna, men det får bara finnas en BAS-P och en BAS-U åt gången.</p>`,
    source: { label: "AFS 2023:3, 2 kap. 9–12 §§", href: "https://www.av.se/globalassets/filer/publikationer/foreskrifter/projektering-och-byggarbetsmiljosamordning-grundlaggande-skyldigheter-afs2023-3.pdf" },
  },

  'berakna-u-varde-isolering': {
    html: `<p><strong>U = 1 / (R<sub>si</sub> + d₁/λ₁ + d₂/λ₂ + … + R<sub>se</sub>)</strong>, med d i meter och λ i W/(m·K). Enhet: W/(m²·K).</p>
<p>R<sub>si</sub> = 0,13 för vägg, 0,10 för tak, 0,17 för golv. R<sub>se</sub> = 0,04.</p>`,
    source: { label: "SS-EN ISO 6946, återgiven i BRE BR 443", href: "https://www.cibse.org/media/wzrjrf3l/conventions-for-u-value-calculations.pdf" },
  },

  'byggmotesprotokoll-mall': {
    html: `<p><strong>Beställaren</strong> för protokoll vid byggmötet, <strong>entreprenören</strong> justerar det (AB 04/ABT 06 kap. 3 § 3).</p><p>En anteckning i byggmötesprotokollet uppfyller skriftlighetskravet mellan parterna – även för ÄTA-underrättelser och hinder.</p>`,
    source: { label: "AMA-nytt Anläggning 1/2005, Svensk Byggtjänst", href: "https://static.byggtjanst.se/amadocs/any_1_2005_4-11.pdf" },
  },

  'entreprenadforsakring-allrisk-vad-tacker': {
    html: `<p><strong>Allrisk</strong> – oförutsedd fysisk skada på det ni bygger (Arbeten) och era verktyg och maskiner (Hjälpmedel) på arbetsområdet.</p><p><strong>Ansvar</strong> – skadestånd för person- och sakskada på tredje man, minst 200 prisbasbelopp (11 840 000 kr 2026).</p><p>Självrisk högst 3 prisbasbelopp (177 600 kr). Kundens befintliga hus kräver tillägget befintlig egendom.</p>`,
    source: { label: "BKK:s basomfattning, bilaga 1 till AMA AF", href: "http://static.byggtjanst.se/SharepointImages/sites/af-12/SiteCollectionDocuments/Bilaga_1_Forsakring.pdf" },
  },

  'inhyrd-personal-regler': {
    html: `<ul>
<li><strong>Före start:</strong> bemanningsföretag i Byggföretagen – ingen primärförhandling; annars kontroll och anmälan till Byggnads region eller förhandling enligt 38&nbsp;§ MBL.</li>
<li><strong>På bygget:</strong> du är likställd med arbetsgivare i arbetsmiljön och ansvarar för att de inhyrda står i personalliggaren.</li>
<li><strong>Över 24 mån på samma driftsenhet (inom 36):</strong> erbjud tillsvidareanställning eller betala två månadslöner inom en månad.</li>
</ul>`,
    source: { label: "Lag (2012:854) och Byggavtalet Bilaga D", href: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2012854-om-uthyrning-av-arbetstagare_sfs-2012-854/" },
  },

  'kontrollansvarig-nar-behovs': {
    html: `<p><strong>KA krävs</strong> när en åtgärd behöver bygglov, rivningslov eller marklov – till exempel nytt bostadshus – och inte är undantagen.</p><p><strong>Ingen KA</strong> för anmälningspliktiga åtgärder, attefallshus, komplementbyggnader, mur, plank och altan – om inte byggnadsnämnden beslutar annat.</p>`,
    source: { label: "PBL 10 kap. 9–10 §§, PBF 7 kap. 5 §", href: "https://www.boverket.se/sv/PBL-kunskapsbanken/lov--byggande/byggprocessen/kontrollansvariga-och-deras-uppgifter/" },
  },

  'lakt-avstand-tak-berakning': {
    html: `<table>
<thead><tr><th>Taklutning</th><th>Läktavstånd betongpannor</th></tr></thead>
<tbody>
<tr><td>22° och brantare</td><td>310–375&nbsp;mm</td></tr>
<tr><td>18–21°</td><td>310–340&nbsp;mm</td></tr>
<tr><td>14–17°</td><td>310–320&nbsp;mm</td></tr>
</tbody>
</table>
<p>Mäts ovankant till ovankant bärläkt. Pannorna får läggas ned till 14° taklutning.</p>`,
    source: { label: "Benders monteringsanvisning Palema och Exklusiv, 2023-07", href: "https://www.benders.se/globalassets/c4-assets/document/Monteringsanvisning-BETONG-1o2kupig--2023-07-LU-2.pdf" },
  },

  'mangdforteckning-bygg': {
    html: `<p><strong>Mängdförteckning</strong> – förteckning över mängder av skilda slag, med eller utan beskrivning av utförande, funktion eller kvalitet (AB 04).</p><p>Prissatt = à-prislista, plats 7 i rangordningen. Ej prissatt = plats 10, före teknisk beskrivning (11) och ritningar (12).</p>`,
    source: { label: "Svensk Byggtjänst – Navigera rätt bland reglerna", href: "https://byggtjanstcms.byggtjanst.se/globalassets/kunskapsbank/guider/navigera-ratt-bland-reglerna/navigerarattblandreglerna251030.pdf" },
  },

  'paslag-pa-material': {
    html: `<p><strong>Påslag</strong> = (utpris − inköp) ÷ inköp. <strong>Marginal</strong> = (utpris − inköp) ÷ utpris.</p><table><thead><tr><th>Påslag</th><th>10&nbsp;%</th><th>15&nbsp;%</th><th>20&nbsp;%</th><th>25&nbsp;%</th><th>30&nbsp;%</th></tr></thead><tbody><tr><td>Marginal</td><td>9,1&nbsp;%</td><td>13,0&nbsp;%</td><td>16,7&nbsp;%</td><td>20,0&nbsp;%</td><td>23,1&nbsp;%</td></tr></tbody></table><p>Material ger aldrig rotavdrag och får inte säljas under inköpspris.</p>`,
    source: { label: "Skatteverket – Så fungerar rotavdraget", href: "https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html" },
  },

  'puts-murbruk-atgang-fasad': {
    html: `<table>
<thead><tr><th>Skikt</th><th>Åtgång torrbruk</th></tr></thead>
<tbody>
<tr><td>Grundning</td><td>ca 5&nbsp;kg/m²</td></tr>
<tr><td>Grovputs (sand 0–3&nbsp;mm)</td><td>ca 18–20&nbsp;kg/m² per 10&nbsp;mm</td></tr>
<tr><td>Filtning, 5&nbsp;mm</td><td>ca 9&nbsp;kg/m²</td></tr>
<tr><td>Ytputs/ädelputs</td><td>ca 4–25&nbsp;kg/m²</td></tr>
</tbody>
</table>`,
    source: { label: "Finja, Hjälp vid putsning (jan 2026)", href: "https://www.finja.se/hjalp-putsning-dok" },
  },

  'traktamente-byggnadsarbetare-2026': {
    html: `<table>
<tbody>
<tr><td>Byggavtalet, traktamente</td><td>450&nbsp;kr/dag vid övernattning, minst 70&nbsp;km från bostaden</td></tr>
<tr><td>Arbetsgivaren ordnar logi / kost</td><td>−35&nbsp;% / −55&nbsp;%</td></tr>
<tr><td>Förrättningstillägg (eget boende)</td><td>35&nbsp;% dag 1–90, sedan 20&nbsp;% – skattepliktigt</td></tr>
<tr><td>Skattefritt 2026</td><td>300&nbsp;kr heldag, 150&nbsp;kr halvdag, 150&nbsp;kr natt</td></tr>
</tbody>
</table>
<p>Efter 3 månader på samma ort är 210&nbsp;kr per heldag skattefritt, efter 2 år 150&nbsp;kr.</p>`,
    source: { label: "Byggavtalet 2025–2027 § 6 och Skatteverket SKV 353", href: "https://www.skatteverket.se/download/18.1522bf3f19aea8075ba3da6/1768986614741/traktamenten-mm-i-byggbranschen-skv353-utgava15.pdf" },
  },

  'bbv-eller-gvk-vatrum': {
    html: `<p>Det finns inget lagstadgat våtrumscertifikat. Boverket ställer bara krav på att tätskiktet fungerar.</p><p>Behörighet ges till <strong>företag</strong> av tre branschorgan: <strong>GVK</strong> (tätskikt och plastmatta), <strong>BKR</strong> (plattsättning) och <strong>Säker Vatten</strong> (rör och VVS). Personliga behörigheter gäller bara i ett sådant företag.</p>`,
    source: { label: "Boverket BFS 2024:8, 7 kap.", href: "https://rinfo.boverket.se/BFS2024-8/pdf/BFS2024-8.pdf" },
  },

  'virkesatgang-altan-tralldack': {
    html: `<table><thead><tr><th>Trall</th><th>Löpmeter per m²</th><th>Max cc regel</th></tr></thead><tbody><tr><td>28×95</td><td>10,00</td><td>600&nbsp;mm</td></tr><tr><td>28×120</td><td>7,94</td><td>600&nbsp;mm</td></tr><tr><td>28×145</td><td>6,58</td><td>600&nbsp;mm</td></tr><tr><td>34×145</td><td>6,58</td><td>800&nbsp;mm</td></tr></tbody></table><p>Exklusive spill. Regelvirke: 1,67 lm/m² vid cc 600, 2,50 lm/m² vid cc 400.</p>`,
    source: { label: "Svenskt Trä – Lathunden, utgåva 8:2021", href: "https://www.svenskttra.se/siteassets/5-publikationer/pdfer/st-lathunden-2021-med-utvik.pdf" },
  },

  // Added 2026-10-21 (GSC near-miss, question queries). Facts lifted from the
  // article body, which was checked earlier against the named sources.
  'staket-material-stolpar-atgang': {
    html: `<p><strong>Antal stolpar = staketlängd ÷ c/c + 1</strong>, avrundat uppåt. c/c är normalt 1,5–2,0&nbsp;m. Exempel: 20 löpmeter med c/c 2,0&nbsp;m ger 11 stolpar – plus extra stolpar för hörn och grindar.</p>
<p>Två spikreglar per sektion, en tredje vid höjd över 1&nbsp;600&nbsp;mm. Löpmeter (lpm) är längden i meter, oavsett virkets bredd.</p>`,
  },

  'apd-plan-arbetsplatsdisposition-bygg': {
    html: `<p><strong>APD-plan</strong> = arbetsplatsdispositionsplan: en ritning över byggarbetsplatsen som visar etablering (bodar, containrar, parkering), materialupplag, transportvägar, kran, in- och utfarter, brandredskap och första hjälpen samt el- och VA-ledningar.</p>
<p>Den är inget eget lagkrav, men fungerar som bilaga till arbetsmiljöplanen (AMP) som Bas-U håller uppdaterad.</p>`,
    source: { label: "AFS 2023:3", href: "https://www.av.se/globalassets/filer/publikationer/foreskrifter/projektering-och-byggarbetsmiljosamordning-grundlaggande-skyldigheter-afs2023-3.pdf" },
  },

  'rotavdrag-fritidshus': {
    html: `<p><strong>Ja.</strong> Ett fritidshus räknas som småhus. Du får ROT-avdrag om du äger huset, har skatt att dra av mot och inte hyr ut det som näringsverksamhet.</p>
<p>Avdraget är <strong>30&nbsp;% av arbetskostnaden</strong>, max <strong>50&nbsp;000&nbsp;kr per person och år</strong> – samma tak som för din permanentbostad.</p>`,
    source: { label: "Skatteverket – så fungerar rotavdraget", href: "https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete/safungerarrotavdraget.4.5947400c11f47f7f9dd80004014.html" },
  },

  'gipsskivor-matt-standardmatt-vikt': {
    html: `<table>
<thead><tr><th>Normalgips</th><th>Mått</th></tr></thead>
<tbody>
<tr><td>Tjocklek</td><td>13&nbsp;mm</td></tr>
<tr><td>Bredd</td><td>600, 900 eller 1&nbsp;200&nbsp;mm</td></tr>
<tr><td>Längd</td><td>2&nbsp;500, 2&nbsp;700 eller 3&nbsp;000&nbsp;mm</td></tr>
<tr><td>Vikt</td><td>ca 9&nbsp;kg/m² – en skiva 900×2&nbsp;500 väger drygt 20&nbsp;kg</td></tr>
</tbody>
</table>
<p>900&nbsp;mm skiva → reglar c 450&nbsp;mm, 1&nbsp;200&nbsp;mm skiva → c 600&nbsp;mm.</p>`,
  },

  'id06-bestalla-kort-steg-for-steg': {
    html: `<p>Ett ID06-kort kostar <strong>280&nbsp;kr</strong> (inkl. anslutning och frakt) och från år två <strong>80&nbsp;kr per år</strong>. Kortet gäller i max 5 år. Både beställning och förnyelse görs via företaget.</p>
<p>Sedan 28 januari 2026 godkänns beställningen med pass eller nationellt ID-kort – BankID räcker inte.</p>`,
    source: { label: "ID06", href: "https://id06.se" },
  },

  'yrkesbevis-bygg-larling': {
    html: `<p>Yrkesbevis utfärdas av BYN efter godkänd grundutbildning plus kvalificeringstid: <strong>36 månader</strong> för bland annat träarbetare och murare, <strong>30 månader</strong> för bland annat plattsättare och ställningsbyggare, <strong>24 månader</strong> för maskin- och kranförare.</p><p>Lärlingslönen är 70, 80 och 90 % av yrkesarbetarens grundlön (203 kr/tim från 1 maj 2026).</p>`,
    source: { label: "Byggavtalet 2025–2027, § 3 p. 9.3 och bilaga H § 7 b", href: "https://www.byggnads.se/49ec78/siteassets/kollektivavtal/byggavtalet-2025-digital-utgava-1.pdf" },
  },
};

export function getArticleQuickAnswer(slug: string): QuickAnswer | null {
  return ARTICLE_QUICK_ANSWERS[slug] ?? null;
}
