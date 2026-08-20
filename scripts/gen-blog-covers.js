/**
 * Generate unique, on-brand blog cover cards for code articles.
 *
 * Articles in src/content/code-articles.ts that share a stock cover image get a
 * generated 1000x548 webp card at public/landing/blog/<slug>.webp (brand header,
 * category-coloured tag pill, wrapped title, category watermark). Articles that
 * already have a unique cover (e.g. a matching tool preview) are left untouched.
 *
 * Emits src/content/generated-blog-covers.ts (the slug set consumed by
 * getCodeArticles) so no per-article edits are needed.
 *
 * Run:  node scripts/gen-blog-covers.js
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src/content/code-articles.ts');
const OUT = path.join(ROOT, 'public/landing/blog');
const MANIFEST = path.join(ROOT, 'src/content/generated-blog-covers.ts');

function parseArticles() {
  const src = fs.readFileSync(SRC, 'utf8');
  const blocks = src.split(/: BlogPost = \{/);
  const arts = [];
  for (let i = 1; i < blocks.length; i++) {
    const b = blocks[i].split(/\n\};/)[0];
    const g = (re) => { const m = b.match(re); return m ? m[1] : null; };
    const slug = g(/slug:\s*["']([^"']+)["']/);
    const tag = g(/tag:\s*["']([^"']+)["']/);
    const cover = g(/coverImageUrl:\s*["']([^"']+)["']/);
    const title = g(/title:\s*["']([^"']+)["']/);
    if (slug && title) arts.push({ slug, tag, cover, title });
  }
  return arts;
}

const FAM = {
  ekonomi:     { c: '#1f9d6b', label: 'EKONOMI' },
  kalkyl:      { c: '#2563c9', label: 'KALKYL' },
  arbetsmiljo: { c: '#e08512', label: 'ARBETSMILJÖ' },
  juridik:     { c: '#5a52d9', label: 'JURIDIK' },
  regelverk:   { c: '#8a3afd', label: 'REGELVERK' },
  personal:    { c: '#c8447a', label: 'PERSONAL' },
  kvalitet:    { c: '#0e9bb0', label: 'KVALITET' },
  tillvaxt:    { c: '#d09a1a', label: 'TILLVÄXT' },
};

function fam(tag) {
  const t = (tag || '').toLowerCase();
  if (/(ekonomi|skatt|rot|avdrag|företagande|likvid|moms|faktur)/.test(t)) return FAM.ekonomi;
  if (/(kalkyl|beräkn|material)/.test(t)) return FAM.kalkyl;
  if (/(arbetsmilj)/.test(t)) return FAM.arbetsmiljo;
  if (/(juridik|entreprenad|avtal|äta|besiktning|tvist)/.test(t)) return FAM.juridik;
  if (/(regel|bygglov|id06|personalliggare|behörighet|kompetens)/.test(t)) return FAM.regelverk;
  if (/(personal|anställ|lön|arbetsrätt|bemanning|arbetsgivare)/.test(t)) return FAM.personal;
  if (/(marknad|seo|digitali)/.test(t)) return FAM.tillvaxt;
  return FAM.kvalitet;
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function wrap(title, fontSize, maxWidth) {
  const maxChars = Math.max(8, Math.floor(maxWidth / (fontSize * 0.54)));
  const words = title.split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if (!cur) { cur = w; continue; }
    if ((cur + ' ' + w).length <= maxChars) cur += ' ' + w;
    else { lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  return lines;
}

function svg(art) {
  const f = fam(art.tag);
  const W = 1000, H = 548, pad = 60;
  let fs = 56;
  let lines = wrap(art.title, fs, W - pad * 2);
  while (lines.length > 4 && fs > 34) { fs -= 4; lines = wrap(art.title, fs, W - pad * 2); }
  if (lines.length > 4) lines = lines.slice(0, 4);
  const lh = Math.round(fs * 1.18);
  const titleTop = 250 - (lines.length * lh) / 2 + fs;
  const tagText = esc((art.tag || 'ByggExp').toUpperCase());
  const tagW = 40 + tagText.length * (14 * 0.62);
  const tspans = lines.map((ln, i) => `<tspan x="${pad}" y="${titleTop + i * lh}">${esc(ln)}</tspan>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eef2f8"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="10" fill="${f.c}"/>
  <text x="${W - pad}" y="500" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="120" font-weight="800" fill="${f.c}" opacity="0.07">${esc(f.label)}</text>
  <text x="${pad}" y="80" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="800" fill="#0f2350" letter-spacing="1">BYGGEXP</text>
  <text x="${W - pad}" y="80" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="500" fill="#6b7a90">byggexp.se</text>
  <rect x="${pad}" y="118" rx="18" ry="18" width="${Math.round(tagW)}" height="38" fill="${f.c}" opacity="0.12"/>
  <text x="${pad + 20}" y="143" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="700" fill="${f.c}" letter-spacing="1">${tagText}</text>
  <text font-family="Arial, Helvetica, sans-serif" font-size="${fs}" font-weight="800" fill="#0f2350">${tspans}</text>
  <line x1="${pad}" y1="486" x2="${W - pad}" y2="486" stroke="#d7deea" stroke-width="1"/>
  <text x="${pad}" y="512" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="600" fill="#6b7a90">Skapad med ByggExp — gratis guide</text>
</svg>`;
}

async function main() {
  const arts = parseArticles();
  const cnt = {};
  arts.forEach((a) => { cnt[a.cover] = (cnt[a.cover] || 0) + 1; });
  const targets = arts.filter((a) => cnt[a.cover] >= 2);
  fs.mkdirSync(OUT, { recursive: true });
  for (const a of targets) {
    await sharp(Buffer.from(svg(a))).webp({ quality: 88 }).toFile(path.join(OUT, a.slug + '.webp'));
  }
  const slugs = targets.map((a) => a.slug).sort();
  const ts = `// AUTO-GENERATED by scripts/gen-blog-covers.js — do not edit by hand.\n`
    + `// Slugs whose blog cover is a generated branded card at /landing/blog/<slug>.webp.\n`
    + `export const GENERATED_BLOG_COVER_SLUGS = new Set<string>([\n`
    + slugs.map((s) => `  '${s}',`).join('\n') + `\n]);\n`;
  fs.writeFileSync(MANIFEST, ts);
  console.log(`generated ${targets.length} covers -> ${path.relative(ROOT, OUT)}`);
  console.log(`wrote ${path.relative(ROOT, MANIFEST)}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
