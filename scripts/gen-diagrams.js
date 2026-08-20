const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUT = require('path').resolve(__dirname, '..', 'public/landing/diagrams');
const W = 720, H = 380;
const INK = '#0f2350', BLUE = '#2563c9', GREEN = '#1f9d6b', MUT = '#6b7a90';
const font = 'font-family="Arial, Helvetica, sans-serif"';

function frame(inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#f7f9fc"/>
  <rect x="1" y="1" width="${W - 2}" height="${H - 2}" fill="none" stroke="#e3e9f2" rx="14"/>
  ${inner}
</svg>`;
}

// 1. Trappa – steghöjd / stegdjup
const trappa = frame(`
  <text x="40" y="46" ${font} font-size="20" font-weight="800" fill="${INK}">Trappa – steghöjd &amp; stegdjup</text>
  ${(() => {
    let s = '';
    const x0 = 90, y0 = 300, rise = 44, going = 70, steps = 4;
    let x = x0, y = y0;
    for (let i = 0; i < steps; i++) {
      s += `<path d="M ${x} ${y} v ${-rise} h ${going}" fill="none" stroke="${INK}" stroke-width="3"/>`;
      x += going; y -= rise;
    }
    // rise arrow on first step
    s += `<line x1="${x0 - 18}" y1="${y0}" x2="${x0 - 18}" y2="${y0 - rise}" stroke="${GREEN}" stroke-width="2" marker-start="url(#a)" marker-end="url(#a)"/>`;
    s += `<text x="${x0 - 26}" y="${y0 - rise / 2 + 4}" ${font} font-size="14" fill="${GREEN}" text-anchor="end">Steghöjd</text>`;
    // going arrow on top step
    const gx = x0 + going, gy = y0 - rise;
    s += `<line x1="${gx}" y1="${gy + 16}" x2="${gx + going}" y2="${gy + 16}" stroke="${BLUE}" stroke-width="2" marker-start="url(#b)" marker-end="url(#b)"/>`;
    s += `<text x="${gx + going / 2}" y="${gy + 34}" ${font} font-size="14" fill="${BLUE}" text-anchor="middle">Stegdjup</text>`;
    return s;
  })()}
  <text x="360" y="120" ${font} font-size="17" font-weight="700" fill="${INK}">2 × steghöjd + stegdjup ≈ 630 mm</text>
  <text x="360" y="150" ${font} font-size="14" fill="${MUT}">BBR: steghöjd ≤ ~180 mm, stegdjup ≥ 250 mm</text>
  <defs>
    <marker id="a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M4 0v8" stroke="${GREEN}" stroke-width="2"/></marker>
    <marker id="b" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M4 0v8" stroke="${BLUE}" stroke-width="2"/></marker>
  </defs>
`);

// 2. Fall / lutning
const fall = frame(`
  <text x="40" y="46" ${font} font-size="20" font-weight="800" fill="${INK}">Fall &amp; lutning</text>
  <polygon points="90,300 560,300 560,180" fill="rgba(37,99,201,0.06)" stroke="${INK}" stroke-width="2.5"/>
  <line x1="90" y1="320" x2="560" y2="320" stroke="${BLUE}" stroke-width="2" marker-start="url(#b)" marker-end="url(#b)"/>
  <text x="325" y="340" ${font} font-size="14" fill="${BLUE}" text-anchor="middle">Längd</text>
  <line x1="582" y1="300" x2="582" y2="180" stroke="${GREEN}" stroke-width="2" marker-start="url(#a)" marker-end="url(#a)"/>
  <text x="596" y="244" ${font} font-size="14" fill="${GREEN}">Höjdskillnad</text>
  <text x="250" y="235" ${font} font-size="15" fill="${INK}" transform="rotate(-14 250 235)">Fall (mm/m)</text>
  <text x="360" y="120" ${font} font-size="16" font-weight="700" fill="${INK}">20 mm/m = 2 % = 1:50</text>
  <text x="360" y="148" ${font} font-size="13" fill="${MUT}">Höjdskillnad = längd × fall</text>
  <defs>
    <marker id="a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M4 0v8" stroke="${GREEN}" stroke-width="2"/></marker>
    <marker id="b" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M4 0v8" stroke="${BLUE}" stroke-width="2"/></marker>
  </defs>
`);

// 3. Takstolar – c/c
const takstolar = frame(`
  <text x="40" y="46" ${font} font-size="20" font-weight="800" fill="${INK}">Takstolar – centrumavstånd (c/c)</text>
  <line x1="70" y1="300" x2="650" y2="300" stroke="${MUT}" stroke-width="2"/>
  ${[70, 165, 260, 355, 450, 545, 640].map((x) =>
    `<path d="M ${x} 300 L ${x + 45} 150 L ${x + 90} 300" fill="none" stroke="${INK}" stroke-width="2.5" transform="translate(-45,0)"/>`
  ).join('')}
  <line x1="70" y1="330" x2="165" y2="330" stroke="${GREEN}" stroke-width="2" marker-start="url(#a)" marker-end="url(#a)"/>
  <text x="117" y="348" ${font} font-size="13" fill="${GREEN}" text-anchor="middle">c/c</text>
  <text x="360" y="110" ${font} font-size="16" font-weight="700" fill="${INK}">Antal = taklängd ÷ c/c + 1</text>
  <text x="360" y="136" ${font} font-size="13" fill="${MUT}">Standard c/c 1200 mm (C24)</text>
  <defs><marker id="a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M4 0v8" stroke="${GREEN}" stroke-width="2"/></marker></defs>
`);

// 4. Reglar + gips
const reglar = frame(`
  <text x="40" y="46" ${font} font-size="20" font-weight="800" fill="${INK}">Reglar &amp; gips – c/c</text>
  ${[90, 180, 270, 360, 450].map((x) =>
    `<rect x="${x}" y="110" width="14" height="200" fill="${INK}"/>`
  ).join('')}
  <rect x="500" y="110" width="150" height="200" fill="rgba(37,99,201,0.10)" stroke="${BLUE}" stroke-width="2"/>
  <text x="575" y="215" ${font} font-size="14" fill="${BLUE}" text-anchor="middle">Gipsskiva</text>
  <line x1="97" y1="335" x2="187" y2="335" stroke="${GREEN}" stroke-width="2" marker-start="url(#a)" marker-end="url(#a)"/>
  <text x="142" y="353" ${font} font-size="13" fill="${GREEN}" text-anchor="middle">c/c</text>
  <text x="90" y="90" ${font} font-size="14" fill="${MUT}">Reglar</text>
  <text x="120" y="378" ${font} font-size="13" fill="${MUT}">900 mm skiva → c/c 450 · 1200 mm → c/c 600</text>
  <defs><marker id="a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M4 0v8" stroke="${GREEN}" stroke-width="2"/></marker></defs>
`);

// 5. Fall mot golvbrunn (våtrum)
const golvbrunn = frame(`
  <text x="40" y="46" ${font} font-size="20" font-weight="800" fill="${INK}">Fall mot golvbrunn (våtrum)</text>
  <path d="M 70 150 L 350 250 L 630 150" fill="none" stroke="${INK}" stroke-width="3"/>
  <circle cx="350" cy="255" r="14" fill="none" stroke="${BLUE}" stroke-width="3"/>
  <line x1="336" y1="255" x2="364" y2="255" stroke="${BLUE}" stroke-width="2"/>
  <text x="350" y="295" ${font} font-size="14" fill="${BLUE}" text-anchor="middle">Golvbrunn</text>
  <text x="180" y="185" ${font} font-size="14" fill="${GREEN}" transform="rotate(20 180 185)">Fall 1:150–1:50</text>
  <text x="470" y="185" ${font} font-size="14" fill="${GREEN}" transform="rotate(-20 470 185)">Fall 1:150–1:50</text>
  <text x="360" y="110" ${font} font-size="14" fill="${MUT}" text-anchor="middle">Dusch: 1:150 (7 mm/m) – 1:50 (20 mm/m) · inget bakfall</text>
`);

const diagrams = { trappa, fall, takstolar, reglar, golvbrunn };

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [name, svg] of Object.entries(diagrams)) {
    await sharp(Buffer.from(svg)).webp({ quality: 92 }).toFile(path.join(OUT, `${name}.webp`));
    console.log('wrote', name + '.webp');
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
