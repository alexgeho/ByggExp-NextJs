// Generates branded SVG→webp diagrams for the top pillar articles (process/legal
// topics that GSC shows getting impressions but few clicks). One clear visual per
// article lifts dwell time, shareability and CTR — the gap vs competitors whose
// articles all carry a diagram. Output: public/landing/diagrams/<name>.webp
//
// Run: node scripts/gen-article-diagrams.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUT = path.resolve(__dirname, '..', 'public/landing/diagrams');
const W = 720, H = 380;
const INK = '#0f2350', BLUE = '#2563c9', GREEN = '#1f9d6b', MUT = '#6b7a90', AMBER = '#e08512';
const font = 'font-family="Arial, Helvetica, sans-serif"';

function frame(inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#f7f9fc"/>
  <rect x="1" y="1" width="${W - 2}" height="${H - 2}" fill="none" stroke="#e3e9f2" rx="14"/>
  ${inner}
</svg>`;
}

function title(t) {
  return `<text x="40" y="46" ${font} font-size="20" font-weight="800" fill="${INK}">${t}</text>`;
}
function note(t, color = MUT, y = 352) {
  return `<text x="40" y="${y}" ${font} font-size="13.5" fill="${color}">${t}</text>`;
}
// Rounded card with header and body lines.
function card(x, y, w, h, header, headerColor, lines) {
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#ffffff" stroke="#e3e9f2"/>`;
  s += `<rect x="${x}" y="${y}" width="${w}" height="42" rx="12" fill="${headerColor}"/>`;
  s += `<rect x="${x}" y="${y + 24}" width="${w}" height="18" fill="${headerColor}"/>`;
  s += `<text x="${x + w / 2}" y="${y + 27}" ${font} font-size="16" font-weight="800" fill="#fff" text-anchor="middle">${header}</text>`;
  lines.forEach((ln, i) => {
    const ly = y + 68 + i * 30;
    s += `<circle cx="${x + 20}" cy="${ly - 4}" r="3.5" fill="${headerColor}"/>`;
    s += `<text x="${x + 34}" y="${ly}" ${font} font-size="14" fill="${INK}">${ln}</text>`;
  });
  return s;
}
// Right-pointing arrow between step boxes.
function arrow(x1, x2, y) {
  return `<line x1="${x1}" y1="${y}" x2="${x2 - 8}" y2="${y}" stroke="${MUT}" stroke-width="2.5" marker-end="url(#arr)"/>`;
}
const ARR_DEF = `<defs><marker id="arr" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M0 1 L8 5 L0 9" fill="none" stroke="${MUT}" stroke-width="2"/></marker></defs>`;
// Small step box with wrapped label (up to 2 lines).
function stepBox(x, y, w, h, l1, l2, accent) {
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="#fff" stroke="${accent}" stroke-width="2"/>`;
  s += `<text x="${x + w / 2}" y="${y + (l2 ? h / 2 - 4 : h / 2 + 5)}" ${font} font-size="13.5" font-weight="700" fill="${INK}" text-anchor="middle">${l1}</text>`;
  if (l2) s += `<text x="${x + w / 2}" y="${y + h / 2 + 16}" ${font} font-size="13.5" font-weight="700" fill="${INK}" text-anchor="middle">${l2}</text>`;
  return s;
}

// 1. AB 04 vs ABT 06 — entreprenadformer jämförelse
const abKontrakt = frame(`
  ${title('AB 04 vs ABT 06 – vem projekterar?')}
  ${card(40, 74, 300, 200, 'AB 04', BLUE, ['Utförandeentreprenad', 'Beställaren projekterar', 'Entreprenören utför', 'Beställaren bär ritningsrisk'])}
  ${card(380, 74, 300, 200, 'ABT 06', GREEN, ['Totalentreprenad', 'Entreprenören projekterar', 'Entreprenören utför', 'Entreprenören bär ritningsrisk'])}
  ${note('Garantitid: 5 år på arbetet, 2 år på material – i båda formerna.', INK)}
`);

// 2. ÄTA – från ändring till betalt
const ata = frame(`
  ${title('ÄTA – ändring, tillägg, avgående')}
  ${stepBox(36, 96, 128, 74, 'Ändring /', 'tillägg', AMBER)}
  ${arrow(164, 200, 133)}
  ${stepBox(200, 96, 128, 74, 'Beställ', 'skriftligt', BLUE)}
  ${arrow(328, 364, 133)}
  ${stepBox(364, 96, 128, 74, 'Pris: à-pris', 'el. självkostnad', BLUE)}
  ${arrow(492, 528, 133)}
  ${stepBox(528, 96, 128, 74, 'Fakturera', 'löpande', GREEN)}
  <text x="40" y="232" ${font} font-size="15" font-weight="700" fill="${INK}">Muntlig ÄTA = svårt att få betalt.</text>
  <text x="40" y="258" ${font} font-size="14" fill="${MUT}">Dokumentera beställning och pris innan arbetet utförs.</text>
  ${note('Rätt till tidsförlängning kan följa med ÄTA – anmäl hinder i tid.', INK)}
  ${ARR_DEF}
`);

// 3. Personalliggare – krav och avgifter
const personalliggare = frame(`
  ${title('Personalliggare – krav &amp; kontrollavgift')}
  ${stepBox(40, 84, 250, 66, 'Elektronisk personalliggare', 'på arbetsplatsen', BLUE)}
  ${card(40, 172, 320, 150, 'Registreras', BLUE, ['Alla som arbetar – även UE, inhyrda', 'Namn och tid, dagligen', 'Finns tillgänglig för Skatteverket'])}
  ${card(390, 172, 290, 150, 'Kontrollavgift', AMBER, ['12 500 kr – saknad/bristande liggare', '2 500 kr per oregistrerad person', 'Skatteverket kontrollerar oanmält'])}
  <text x="390" y="120" ${font} font-size="14.5" font-weight="700" fill="${INK}">Krävs vid bygg där kostnaden</text>
  <text x="390" y="142" ${font} font-size="14.5" font-weight="700" fill="${INK}">överstiger 4 prisbasbelopp.</text>
`);

// 4. Heta arbeten – tre roller
const hetaArbeten = frame(`
  ${title('Heta arbeten – tre roller med behörighet')}
  ${card(40, 84, 205, 210, 'Tillståndsansvarig', BLUE, ['Bedömer risken', 'Utfärdar tillstånd', 'Får delegeras'])}
  ${card(258, 84, 205, 210, 'Hetarbetare', GREEN, ['Giltigt certifikat', 'Utför svetsning,', 'kapning, torkning'])}
  ${card(476, 84, 204, 210, 'Brandvakt', AMBER, ['Bevakar under', 'arbetet', 'och minst 1 tim efter'])}
  ${note('Alla tre ska ha giltig behörighet (Heta Arbeten®) – annars utgår försäkringen.', INK)}
`);

// 5. Egenkontroll – cykeln
const egenkontroll = frame(`
  ${title('Egenkontroll – så håller du cykeln')}
  ${stepBox(36, 150, 128, 74, 'Planera', 'kontrollpunkter', BLUE)}
  ${arrow(164, 200, 187)}
  ${stepBox(200, 150, 128, 74, 'Utför &amp;', 'kontrollera', BLUE)}
  ${arrow(328, 364, 187)}
  ${stepBox(364, 150, 128, 74, 'Dokumentera', 'sign. + datum', GREEN)}
  ${arrow(492, 528, 187)}
  ${stepBox(528, 150, 128, 74, 'Åtgärda', 'avvikelse', AMBER)}
  <text x="40" y="110" ${font} font-size="14.5" font-weight="700" fill="${INK}">Del av kontrollplanen enligt PBL – visar att arbetet uppfyller kraven.</text>
  ${note('Spara egenkontrollen – den efterfrågas vid slutsamråd och besiktning.', INK)}
  ${ARR_DEF}
`);

// 6. Byggdagbok – vad som förs in
const byggdagbok = frame(`
  ${title('Byggdagbok – vad du för in varje dag')}
  ${card(40, 74, 320, 220, 'Daglig notering', BLUE, ['Datum och väder', 'Personal på plats (antal, UE)', 'Utfört arbete', 'Leveranser och maskiner', 'ÄTA, avvikelser och hinder'])}
  <text x="392" y="120" ${font} font-size="15" font-weight="700" fill="${INK}">Förs löpande – inte i efterhand.</text>
  <text x="392" y="150" ${font} font-size="14" fill="${MUT}">En ifylld dagbok blir ditt</text>
  <text x="392" y="172" ${font} font-size="14" fill="${MUT}">starkaste bevis vid en tvist om</text>
  <text x="392" y="194" ${font} font-size="14" fill="${MUT}">tid, ÄTA eller förseningar.</text>
  <rect x="392" y="220" width="288" height="60" rx="10" fill="#eef4ff" stroke="#d5e2fb"/>
  <text x="408" y="245" ${font} font-size="13.5" fill="${INK}">Tips: fota arbetet och koppla</text>
  <text x="408" y="265" ${font} font-size="13.5" fill="${INK}">bilderna till dagens anteckning.</text>
`);

// 7. Betong – platta med kantbalk
const betong = frame(`
  ${title('Betong – volym för platta med kantbalk')}
  <rect x="60" y="150" width="380" height="70" fill="rgba(37,99,201,0.10)" stroke="${INK}" stroke-width="2.5"/>
  <rect x="60" y="150" width="40" height="130" fill="rgba(37,99,201,0.18)" stroke="${INK}" stroke-width="2.5"/>
  <rect x="400" y="150" width="40" height="130" fill="rgba(37,99,201,0.18)" stroke="${INK}" stroke-width="2.5"/>
  <line x1="60" y1="300" x2="440" y2="300" stroke="${BLUE}" stroke-width="2" marker-start="url(#b)" marker-end="url(#b)"/>
  <text x="250" y="320" ${font} font-size="13" fill="${BLUE}" text-anchor="middle">Längd × bredd</text>
  <text x="120" y="255" ${font} font-size="13" fill="${INK}">Kantbalk</text>
  <text x="200" y="192" ${font} font-size="13" fill="${INK}">Platta (tjocklek)</text>
  <text x="480" y="150" ${font} font-size="16" font-weight="700" fill="${INK}">Volym = L × B × tjocklek</text>
  <text x="480" y="178" ${font} font-size="14" fill="${MUT}">+ kantbalk runt omkretsen</text>
  <text x="480" y="214" ${font} font-size="15" font-weight="700" fill="${INK}">1 m³ ≈ 80 säckar 25 kg</text>
  <text x="480" y="240" ${font} font-size="14" fill="${MUT}">Storsäck 1000 kg ≈ 520 l</text>
  ${note('Från 1–2 m³ blir fabriksbetong ofta billigare än att blanda säck för hand.', INK)}
  <defs><marker id="b" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M4 0v8" stroke="${BLUE}" stroke-width="2"/></marker></defs>
`);

// 8. Grus / bärlager – yta × tjocklek + packning
const grus = frame(`
  ${title('Grus – volym, packning och ton')}
  ${stepBox(40, 110, 150, 74, 'Yta (m²)', '× tjocklek (m)', BLUE)}
  ${arrow(190, 236, 147)}
  ${stepBox(236, 110, 170, 74, '+ packnings-', 'påslag ~15–20%', AMBER)}
  ${arrow(406, 452, 147)}
  ${stepBox(452, 110, 150, 74, 'Volym', 'i m³', GREEN)}
  <text x="40" y="232" ${font} font-size="15" font-weight="700" fill="${INK}">1 m³ grus ≈ 1,5–1,8 ton.</text>
  <text x="40" y="258" ${font} font-size="14" fill="${MUT}">Bärlager packas – beställ därför något mer än teoretisk volym.</text>
  ${note('Tumregel: 10 cm bärlager på 100 m² ≈ 10 m³ löst grus före packning.', INK)}
  ${ARR_DEF}
`);

// 9. Kvadratmeter – yta av rum
const kvadratmeter = frame(`
  ${title('Kvadratmeter – räkna ut ytan')}
  <rect x="60" y="90" width="240" height="150" fill="rgba(37,99,201,0.08)" stroke="${INK}" stroke-width="2.5"/>
  <line x1="60" y1="260" x2="300" y2="260" stroke="${BLUE}" stroke-width="2" marker-start="url(#b)" marker-end="url(#b)"/>
  <text x="180" y="280" ${font} font-size="14" fill="${BLUE}" text-anchor="middle">Längd</text>
  <line x1="40" y1="90" x2="40" y2="240" stroke="${GREEN}" stroke-width="2" marker-start="url(#a)" marker-end="url(#a)"/>
  <text x="30" y="170" ${font} font-size="14" fill="${GREEN}" text-anchor="middle" transform="rotate(-90 30 170)">Bredd</text>
  <text x="180" y="170" ${font} font-size="17" font-weight="800" fill="${INK}" text-anchor="middle">Yta = L × B</text>
  <text x="360" y="120" ${font} font-size="15" font-weight="700" fill="${INK}">Fler rum? Summera</text>
  <text x="360" y="144" ${font} font-size="15" font-weight="700" fill="${INK}">delytorna.</text>
  <text x="360" y="178" ${font} font-size="14" fill="${MUT}">L-format rum: dela upp i</text>
  <text x="360" y="200" ${font} font-size="14" fill="${MUT}">rektanglar och lägg ihop.</text>
  <text x="360" y="236" ${font} font-size="14" fill="${INK}">Material: lägg på spill 5–10 %.</text>
  <defs>
    <marker id="a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M4 0v8" stroke="${GREEN}" stroke-width="2"/></marker>
    <marker id="b" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M4 0v8" stroke="${BLUE}" stroke-width="2"/></marker>
  </defs>
`);

// 10. Moms – netto, moms, brutto
const moms = frame(`
  ${title('Moms – från netto till brutto')}
  ${stepBox(50, 120, 150, 74, 'Netto', '(exkl. moms)', BLUE)}
  ${arrow(200, 250, 157)}
  <text x="225" y="150" ${font} font-size="13" fill="${MUT}" text-anchor="middle">× 1,25</text>
  ${stepBox(250, 120, 150, 74, '+ 25% moms', '', AMBER)}
  ${arrow(400, 460, 157)}
  ${stepBox(460, 120, 150, 74, 'Brutto', '(inkl. moms)', GREEN)}
  <text x="50" y="245" ${font} font-size="14" fill="${INK}">Vanligast i bygg: <tspan font-weight="700">25 %</tspan>. Vissa tjänster 12 % eller 6 %.</text>
  <text x="50" y="272" ${font} font-size="14" fill="${MUT}">Baklänges: brutto ÷ 1,25 = netto. Momsen = brutto − netto.</text>
  ${note('Omvänd byggmoms: köparen redovisar momsen – du fakturerar utan moms.', INK)}
  ${ARR_DEF}
`);

const DIAGRAMS = {
  'ab-kontrakt': abKontrakt,
  'ata-flode': ata,
  'personalliggare': personalliggare,
  'heta-arbeten': hetaArbeten,
  'egenkontroll-cykel': egenkontroll,
  'byggdagbok': byggdagbok,
  'betong': betong,
  'grus': grus,
  'kvadratmeter': kvadratmeter,
  'moms': moms,
};

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [name, svg] of Object.entries(DIAGRAMS)) {
    const out = path.join(OUT, `${name}.webp`);
    await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(out);
    console.log('wrote', out);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
