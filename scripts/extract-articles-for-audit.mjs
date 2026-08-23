import fs from 'node:fs';
import path from 'node:path';

// Extract every code article (slug + title + plain-text content) into individual
// files so an audit workflow can read one small file per article instead of
// grepping huge .ts sources. Content lives in template-literal consts referenced
// by `contentHtml: NAME_HTML` (or occasionally inline), so we resolve those.

const ARTICLES_DIR = 'src/content/articles';
const OUT_DIR = process.argv[2];
if (!OUT_DIR) {
  console.error('usage: node extract-articles-for-audit.mjs <outDir>');
  process.exit(1);
}
fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs
  .readdirSync(ARTICLES_DIR)
  .filter((f) => f.endsWith('.ts') && f !== 'site-url.ts');

function stripHtml(html) {
  return html
    .replace(/<figure[\s\S]*?<\/figure>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&auml;/g, 'ä').replace(/&aring;/g, 'å').replace(/&ouml;/g, 'ö')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const manifest = [];
let total = 0;

for (const file of files) {
  const src = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');

  // 1) map template-literal consts: const NAME = `...`(.trim())?;
  const constMap = {};
  const constRe = /const\s+([A-Za-z0-9_]+)\s*=\s*`([\s\S]*?)`\s*(?:\.trim\(\))?\s*;/g;
  let cm;
  while ((cm = constRe.exec(src))) constMap[cm[1]] = cm[2];

  // 2) for each article, locate slug + title + contentHtml. Iterate contentHtml
  // occurrences (one per article) and look backward for slug/title.
  const chRe = /contentHtml\s*:\s*([A-Za-z0-9_]+|`[\s\S]*?`|"(?:[^"\\]|\\.)*")/g;
  let ch;
  while ((ch = chRe.exec(src))) {
    const val = ch[1];
    const back = src.slice(Math.max(0, ch.index - 2000), ch.index);
    const slugM = [...back.matchAll(/["']?slug["']?\s*:\s*["']([a-z0-9-]+)["']/g)].pop();
    const titleM = [...back.matchAll(/["']?title["']?\s*:\s*["']([^"']+)["']|["']?title["']?\s*:\s*"((?:[^"\\]|\\.)*)"/g)].pop();
    if (!slugM) continue;
    const slug = slugM[1];
    const title = titleM ? (titleM[1] || titleM[2] || '').trim() : slug;

    let html = '';
    if (val.startsWith('`')) html = val.slice(1, -1);
    else if (val.startsWith('"')) html = val.slice(1, -1);
    else html = constMap[val] || '';
    const text = stripHtml(html);
    if (!text || text.length < 40) continue;

    const outPath = path.join(OUT_DIR, `${slug}.txt`);
    fs.writeFileSync(outPath, `SLUG: ${slug}\nTITLE: ${title}\nFILE: ${file}\n\n${text}\n`);
    manifest.push({ slug, title, file, path: outPath, chars: text.length });
    total += 1;
  }
}

fs.writeFileSync(path.join(OUT_DIR, '_manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`Extracted ${total} articles → ${OUT_DIR}`);
const short = manifest.filter((a) => a.chars < 300).length;
console.log(`(${short} articles under 300 chars — likely stubs)`);
