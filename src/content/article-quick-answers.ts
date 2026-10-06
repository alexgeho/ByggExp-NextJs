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
<tr><td>Egen bil (över 2 km enkel väg)</td><td>2,50&nbsp;kr/km, max 120&nbsp;km enkel väg</td></tr>
<tr><td>Samåkning, föraren</td><td>+0,85&nbsp;kr/km per passagerare</td></tr>
<tr><td>Restid till förrättning</td><td>Grundlön, max 12&nbsp;tim/dygn inkl. arbetstid</td></tr>
<tr><td>Traktamente</td><td>435&nbsp;kr/dag vid övernattning</td></tr>
</tbody>
</table>
<p>Grundlön för yrkesarbetare: 203 kr/tim från 1 maj 2026. Förrättning = minst 70 km från bostaden. Skattefritt traktamente 2026: 300 kr/heldag – resten beskattas som lön.</p>`,
    source: { label: 'Byggavtalet 2025–2027, § 6', href: BYGGAVTALET_PDF },
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
};

export function getArticleQuickAnswer(slug: string): QuickAnswer | null {
  return ARTICLE_QUICK_ANSWERS[slug] ?? null;
}
