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

// 11. ID06 – vad kortet används till
const id06 = frame(`
  ${title('ID06 – vad kortet används till')}
  ${stepBox(36, 120, 128, 74, 'Identitet', 'vem personen är', BLUE)}
  ${stepBox(200, 120, 128, 74, 'Närvaro', 'personalliggare', GREEN)}
  ${stepBox(364, 120, 128, 74, 'Kompetens', 'utbildningar', AMBER)}
  ${stepBox(528, 120, 128, 74, 'Access', 'in-/utpassering', BLUE)}
  <text x="40" y="238" ${font} font-size="15" font-weight="700" fill="${INK}">ID06 är inte ett lagkrav i sig.</text>
  <text x="40" y="264" ${font} font-size="14" fill="${MUT}">Men det är vanligaste sättet att uppfylla kravet på elektronisk personalliggare.</text>
`);

// 12. Offert – vad den ska innehålla
const offert = frame(`
  ${title('Offert – vad den ska innehålla')}
  ${card(40, 74, 330, 250, 'Offertens innehåll', BLUE, ['Parter och org.nr', 'Omfattning – vad som ingår', 'Pris: fast eller löpande', 'ÄTA – hur ändringar hanteras', 'Giltighetstid', 'Betalningsvillkor och ROT'])}
  <text x="402" y="120" ${font} font-size="15" font-weight="700" fill="${INK}">Fast pris eller löpande?</text>
  <text x="402" y="150" ${font} font-size="14" fill="${MUT}">Fast pris = förutsägbart för</text>
  <text x="402" y="172" ${font} font-size="14" fill="${MUT}">kunden. Löpande = du tar</text>
  <text x="402" y="194" ${font} font-size="14" fill="${MUT}">mindre risk vid osäkert jobb.</text>
  <rect x="402" y="222" width="278" height="72" rx="10" fill="#eef4ff" stroke="#d5e2fb"/>
  <text x="418" y="248" ${font} font-size="13.5" fill="${INK}">Ange tydligt vilket som gäller</text>
  <text x="418" y="268" ${font} font-size="13.5" fill="${INK}">– det är här tvister uppstår.</text>
`);

// 13. Timpris – så byggs det upp
const timpris = frame(`
  ${title('Timpris – så byggs det upp')}
  ${stepBox(36, 120, 128, 74, 'Lön', 'till dig', BLUE)}
  ${arrow(164, 200, 157)}
  ${stepBox(200, 120, 128, 74, '+ sociala avg.', '&amp; omkostnader', AMBER)}
  ${arrow(328, 364, 157)}
  ${stepBox(364, 120, 128, 74, '+ påslag', '/ vinst', AMBER)}
  ${arrow(492, 528, 157)}
  ${stepBox(528, 120, 128, 74, 'Timpris', 'till kund', GREEN)}
  <text x="40" y="240" ${font} font-size="15" font-weight="700" fill="${INK}">Debiteringsgraden avgör ofta om det går ihop.</text>
  <text x="40" y="266" ${font} font-size="14" fill="${MUT}">Bara en del av arbetstiden är fakturerbar – res, offert och admin är det inte.</text>
  ${ARR_DEF}
`);

// 14. Slutbesiktning – så går den till
const slutbesiktning = frame(`
  ${title('Slutbesiktning – så går den till')}
  ${stepBox(36, 120, 128, 74, 'Kallelse', 'i tid', BLUE)}
  ${arrow(164, 200, 157)}
  ${stepBox(200, 120, 128, 74, 'Besiktning', 'på plats', BLUE)}
  ${arrow(328, 364, 157)}
  ${stepBox(364, 120, 128, 74, 'Utlåtande', 'godkänd?', AMBER)}
  ${arrow(492, 528, 157)}
  ${stepBox(528, 120, 128, 74, 'Efter-', 'besiktning', GREEN)}
  <text x="40" y="240" ${font} font-size="15" font-weight="700" fill="${INK}">Vid godkänd entreprenad:</text>
  <text x="40" y="266" ${font} font-size="14" fill="${MUT}">ansvaret går över till beställaren och garantitiden börjar löpa.</text>
  ${ARR_DEF}
`);

// 15. Tidrapportering – flöde in-/utcheckning → lön & faktura
const tidflode = frame(`
  ${title('Digital tidrapportering – flödet')}
  ${stepBox(36, 120, 130, 74, 'Checka in', 'på bygget', BLUE)}
  ${arrow(166, 202, 157)}
  ${stepBox(202, 120, 130, 74, 'Timmar på', 'rätt projekt', BLUE)}
  ${arrow(332, 368, 157)}
  ${stepBox(368, 120, 130, 74, 'Granska', 'i webbadmin', AMBER)}
  ${arrow(498, 534, 157)}
  ${stepBox(534, 120, 128, 74, 'Export', 'lön &amp; faktura', GREEN)}
  <text x="40" y="240" ${font} font-size="15" font-weight="700" fill="${INK}">Registrera en gång – använd överallt.</text>
  <text x="40" y="266" ${font} font-size="14" fill="${MUT}">Samma timmar blir löneunderlag, fakturarader och projektekonomi.</text>
  ${ARR_DEF}
`);

// 16. Stämpelklocka app med GPS
const stampelklocka = frame(`
  ${title('Stämpelklocka app med GPS')}
  ${stepBox(40, 110, 150, 74, 'Checka in', 'i mobilen', BLUE)}
  ${arrow(190, 236, 147)}
  ${stepBox(236, 110, 170, 74, 'GPS bekräftar', 'arbetsplatsen', GREEN)}
  ${arrow(406, 452, 147)}
  ${stepBox(452, 110, 150, 74, 'Närvaro', 'registrerad', BLUE)}
  <text x="40" y="232" ${font} font-size="15" font-weight="700" fill="${INK}">Fungerar på Android och iPhone.</text>
  <text x="40" y="258" ${font} font-size="14" fill="${MUT}">Ersätter väggklockan – incheckning knyts till plats, inte till en terminal.</text>
  ${note('GPS gör mobilstämpling pålitlig – mindre diskussion om timmar i efterhand.', INK)}
  ${ARR_DEF}
`);

// 17. Tidrapporteringssystem – tre steg
const tidsystem = frame(`
  ${title('Tidsregistrering → rapportering → redovisning')}
  ${card(36, 84, 200, 210, 'Tidsregistrering', BLUE, ['Stämpla in/ut', 'i mobilen', '(gärna med GPS)'])}
  ${card(258, 84, 200, 210, 'Tidrapportering', GREEN, ['Timmar kopplas', 'till projekt', 'och aktivitet'])}
  ${card(480, 84, 200, 210, 'Tidredovisning', AMBER, ['Sammanställt', 'underlag till lön,', 'faktura, uppföljning'])}
  ${note('Ett tidrapporteringssystem tar dig genom alla tre steg utan dubbelinmatning.', INK)}
`);

// 18. Projektuppföljning – budget vs utfall → marginal
const projektuppfoljning = frame(`
  ${title('Projektuppföljning – utfall mot budget')}
  ${card(36, 84, 300, 200, 'Följ löpande', BLUE, ['Timmar mot budget', 'Kostnader mot budget', 'Fakturerat mot kontrakt', 'Marginal (kr och %)'])}
  <text x="372" y="120" ${font} font-size="15" font-weight="700" fill="${INK}">Se avvikelsen i tid.</text>
  <text x="372" y="150" ${font} font-size="14" fill="${MUT}">Siffrorna uppdateras av det</text>
  <text x="372" y="172" ${font} font-size="14" fill="${MUT}">laget redan gör – tid, material,</text>
  <text x="372" y="194" ${font} font-size="14" fill="${MUT}">kvitton – i realtid.</text>
  <rect x="372" y="220" width="308" height="64" rx="10" fill="#eef4ff" stroke="#d5e2fb"/>
  <text x="388" y="246" ${font} font-size="13.5" fill="${INK}">Agera innan budgettaket: bemanning,</text>
  <text x="388" y="266" ${font} font-size="13.5" fill="${INK}">ÄTA-fakturera eller stäm av med kund.</text>
`);

// --- Norwegian (nb) diagrams for byggexp.no ---------------------------------
// 19. Timeregistrering – flyt (nb)
const nbTimeflyt = frame(`
  ${title('Digital timeregistrering – slik fungerer det')}
  ${stepBox(36, 120, 132, 74, 'Stemple inn', 'på bygget', BLUE)}
  ${arrow(168, 204, 157)}
  ${stepBox(204, 120, 132, 74, 'Timer på', 'riktig prosjekt', BLUE)}
  ${arrow(336, 372, 157)}
  ${stepBox(372, 120, 132, 74, 'Gjennomgå', 'i webadmin', AMBER)}
  ${arrow(504, 540, 157)}
  ${stepBox(540, 120, 128, 74, 'Eksport', 'lønn &amp; faktura', GREEN)}
  <text x="40" y="240" ${font} font-size="15" font-weight="700" fill="${INK}">Registrer én gang – bruk overalt.</text>
  <text x="40" y="266" ${font} font-size="14" fill="${MUT}">De samme timene blir lønnsunderlag, fakturalinjer og prosjektøkonomi.</text>
  ${ARR_DEF}
`);

// 20. Stemplingsur med GPS (nb)
const nbStemplingsur = frame(`
  ${title('Stemplingsur-app med GPS')}
  ${stepBox(40, 110, 150, 74, 'Stemple inn', 'i mobilen', BLUE)}
  ${arrow(190, 236, 147)}
  ${stepBox(236, 110, 176, 74, 'GPS bekrefter', 'arbeidsplassen', GREEN)}
  ${arrow(412, 458, 147)}
  ${stepBox(458, 110, 150, 74, 'Oppmøte', 'registrert', BLUE)}
  <text x="40" y="232" ${font} font-size="15" font-weight="700" fill="${INK}">Fungerer på Android og iPhone.</text>
  <text x="40" y="258" ${font} font-size="14" fill="${MUT}">Erstatter vegguret – innstempling knyttes til sted, ikke til en terminal.</text>
  ${note('GPS gjør mobilstempling pålitelig – mindre diskusjon om timer i etterkant.', INK)}
  ${ARR_DEF}
`);

// 21. Affärssystem – allt i ett (hub)
const affarssystem = frame(`
  ${title('Affärssystem – allt i ett')}
  <circle cx="360" cy="200" r="52" fill="${BLUE}"/>
  <text x="360" y="196" ${font} font-size="15" font-weight="800" fill="#fff" text-anchor="middle">ByggExp</text>
  <text x="360" y="214" ${font} font-size="12" fill="#fff" text-anchor="middle">en plattform</text>
  ${(() => {
    const mods = ['Tid', 'Projekt', 'Offert', 'Faktura', 'Lön', 'Ekonomi'];
    const cx = 360, cy = 200, r = 132;
    return mods.map((m, i) => {
      const a = (Math.PI * 2 * i) / mods.length - Math.PI / 2;
      const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
      return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#c7d3e6" stroke-width="2"/>`
        + `<rect x="${x - 52}" y="${y - 19}" width="104" height="38" rx="10" fill="#fff" stroke="${GREEN}" stroke-width="1.5"/>`
        + `<text x="${x}" y="${y + 5}" ${font} font-size="14" font-weight="700" fill="${INK}" text-anchor="middle">${m}</text>`;
    }).join('');
  })()}
  ${note('En registrering delas av alla moduler – ingen dubbelinmatning.', INK)}
`);

// 22. CRM – förfrågan → vunnet projekt
const crm = frame(`
  ${title('CRM – från förfrågan till vunnet projekt')}
  ${stepBox(36, 120, 138, 74, 'Förfrågan', 'kommer in', BLUE)}
  ${arrow(174, 210, 157)}
  ${stepBox(210, 120, 138, 74, 'Offert', 'skickad', BLUE)}
  ${arrow(348, 384, 157)}
  ${stepBox(384, 120, 138, 74, 'Uppföljning', 'påminnelse', AMBER)}
  ${arrow(522, 558, 157)}
  ${stepBox(558, 120, 120, 74, 'Vunnet', 'projekt', GREEN)}
  <text x="40" y="240" ${font} font-size="15" font-weight="700" fill="${INK}">Inget tappas – heta förfrågningar kallnar inte.</text>
  <text x="40" y="266" ${font} font-size="14" fill="${MUT}">Vunnen offert blir projekt med tid, material och faktura.</text>
  ${ARR_DEF}
`);

// 23. Servicehantering – order → faktura
const service = frame(`
  ${title('Servicehantering – order till faktura')}
  ${stepBox(36, 120, 138, 74, 'Arbetsorder', 'skapas', BLUE)}
  ${arrow(174, 210, 157)}
  ${stepBox(210, 120, 138, 74, 'Tid + material', 'på plats', BLUE)}
  ${arrow(348, 384, 157)}
  ${stepBox(384, 120, 138, 74, 'Foto &amp;', 'dokumentation', AMBER)}
  ${arrow(522, 558, 157)}
  ${stepBox(558, 120, 120, 74, 'Fakturera', 'snabbt', GREEN)}
  <text x="40" y="240" ${font} font-size="15" font-weight="700" fill="${INK}">Många korta uppdrag – inget faller mellan stolarna.</text>
  <text x="40" y="266" ${font} font-size="14" fill="${MUT}">Teknikern ser ordern i appen och registrerar allt på plats.</text>
  ${ARR_DEF}
`);

// 24. Schemaläggning – vem, var, när
const schema = frame(`
  ${title('Schemaläggning – hela laget i en vy')}
  ${(() => {
    let s = '';
    const x0 = 60, y0 = 96, cw = 92, rh = 40, cols = 5, rows = 3;
    const days = ['Mån', 'Tis', 'Ons', 'Tor', 'Fre'];
    days.forEach((d, i) => { s += `<text x="${x0 + 90 + i * cw + cw / 2}" y="${y0 - 6}" ${font} font-size="12" fill="${MUT}" text-anchor="middle">${d}</text>`; });
    const names = ['Erik', 'Anna', 'Sam'];
    for (let r = 0; r < rows; r++) {
      const y = y0 + r * rh;
      s += `<text x="${x0}" y="${y + 26}" ${font} font-size="13" font-weight="700" fill="${INK}">${names[r]}</text>`;
      for (let c = 0; c < cols; c++) {
        const x = x0 + 90 + c * cw;
        s += `<rect x="${x}" y="${y + 6}" width="${cw - 8}" height="${rh - 12}" rx="6" fill="#f2f6fc" stroke="#e0e8f4"/>`;
      }
    }
    // some assignment bars
    s += `<rect x="${x0 + 90}" y="${y0 + 12}" width="${cw * 3 - 8}" height="16" rx="8" fill="${BLUE}"/>`;
    s += `<rect x="${x0 + 90 + cw}" y="${y0 + rh + 12}" width="${cw * 2 - 8}" height="16" rx="8" fill="${GREEN}"/>`;
    s += `<rect x="${x0 + 90 + cw * 3}" y="${y0 + rh * 2 + 12}" width="${cw * 2 - 8}" height="16" rx="8" fill="${AMBER}"/>`;
    return s;
  })()}
  ${note('Planera per person eller projekt – frånvaro och överbokning syns direkt.', INK)}
`);

// Faktura med rotavdrag – hur betalningen fördelas (räkneexempel)
const fakturaRotavdrag = frame(`
  ${title('Faktura med rotavdrag – så fördelas betalningen')}
  ${card(40, 78, 268, 208, 'Fakturan', BLUE, ['Arbetskostnad: 25 000 kr', 'Material: 10 000 kr', 'Totalt: 35 000 kr', 'ROT (30% av arbetet): −7 500 kr'])}
  ${arrow(308, 372, 150)}
  ${card(372, 78, 308, 92, 'Kunden betalar', GREEN, ['27 500 kr (totalt − ROT)'])}
  ${card(372, 194, 308, 92, 'Skatteverket betalar dig', AMBER, ['7 500 kr (ROT-avdraget)'])}
  ${note('ROT = 30% av arbetskostnaden inkl. moms, max 50 000 kr/person/år. Material ger inget avdrag.', INK)}
  ${ARR_DEF}
`);

// Kalkyl → offert → efterkalkyl (kalkylprogram-flödet)
const kalkylFlode = frame(`
  ${title('Från materialkalkyl till lönsam offert')}
  ${stepBox(28, 150, 150, 78, 'Materialåtgång', '(inkl. spill)', BLUE)}
  ${arrow(178, 214, 189)}
  ${stepBox(214, 150, 150, 78, 'Påslag &amp;', 'marginal', BLUE)}
  ${arrow(364, 400, 189)}
  ${stepBox(400, 150, 150, 78, 'Offert', 'med ROT', GREEN)}
  ${arrow(550, 586, 189)}
  ${stepBox(586, 150, 106, 78, 'Efter-', 'kalkyl', AMBER)}
  <text x="40" y="108" ${font} font-size="14.5" font-weight="700" fill="${INK}">Räkna en gång – underlaget följer med hela vägen.</text>
  ${note('Efterkalkylen jämför kalkyl mot utfall, så nästa offert prissätts rätt.', INK)}
  ${ARR_DEF}
`);

const DIAGRAMS = {
  'kalkyl-flode': kalkylFlode,
  'faktura-rotavdrag': fakturaRotavdrag,
  'affarssystem': affarssystem,
  'crm-bygg': crm,
  'servicehantering': service,
  'schemalaggning': schema,
  'nb-timeregistrering-flyt': nbTimeflyt,
  'nb-stemplingsur-gps': nbStemplingsur,
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
  'id06': id06,
  'offert': offert,
  'timpris': timpris,
  'slutbesiktning': slutbesiktning,
  'tidrapportering-flode': tidflode,
  'stampelklocka-gps': stampelklocka,
  'tidrapporteringssystem': tidsystem,
  'projektuppfoljning': projektuppfoljning,
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
