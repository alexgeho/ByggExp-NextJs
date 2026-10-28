// R16 (revised 2026-10-28): a phone screenshot is NEVER put in a row with a
// desktop screenshot (the tall phone leaves empty space above the desktop).
// Desktop shots stay full-width blocks of their own.
// Two consecutive PHONE figures (each a single-image `app-shots`, or a single
// portrait image, height > 1.4 × width) are merged into one 2-phone row:
//   <figure class="app-shots"><img…><img…><figcaption>shared caption</figcaption></figure>
// Same width, centered, bottom-aligned (styles: `.app-shots` in blog.scss).
// If both figures have a caption, they are joined.
import { topLevelBlocks } from './illu-rows';

const IMG_RE = /<img\b[^>]*>/g;
const CAPTION_RE = /<figcaption[^>]*>([\s\S]*?)<\/figcaption>/;

function isPhone(figure: string): boolean {
  const imgs = figure.match(IMG_RE) || [];
  if (imgs.length !== 1) return false;
  const cls = (figure.match(/^<figure[^>]*class="([^"]*)"/) || [])[1] || '';
  if (/\b(fn-illu|doc-shot|article-diagram|video-embed|web-shot)\b/.test(cls)) return false;
  if (/\bapp-shots\b/.test(cls)) return true;
  const w = Number((imgs[0].match(/\bwidth="(\d+)"/) || [])[1]);
  const h = Number((imgs[0].match(/\bheight="(\d+)"/) || [])[1]);
  return !!w && !!h && h > w * 1.4;
}

export function shotRows(html: string): string {
  if (!html || !html.includes('<figure')) return html;
  const blocks = topLevelBlocks(html).filter((b) => b.tag === 'figure');
  const edits: { start: number; end: number; text: string }[] = [];

  for (let i = 0; i < blocks.length - 1; i += 1) {
    const a = blocks[i];
    const b = blocks[i + 1];
    if (html.slice(a.end, b.start).trim() !== '') continue;
    const fa = html.slice(a.start, a.end);
    const fb = html.slice(b.start, b.end);
    if (!isPhone(fa) || !isPhone(fb)) continue;
    const captions = [fa, fb]
      .map((f) => (f.match(CAPTION_RE) || [])[1]?.trim())
      .filter(Boolean);
    const caption = captions.length ? `<figcaption>${captions.join(' ')}</figcaption>` : '';
    const img = (f: string) => (f.match(IMG_RE) as RegExpMatchArray)[0];
    edits.push({
      start: a.start,
      end: b.end,
      text: `<figure class="app-shots">${img(fa)}${img(fb)}${caption}</figure>`,
    });
    i += 1; // both figures consumed
  }

  let out = html;
  for (let k = edits.length - 1; k >= 0; k -= 1) {
    const e = edits[k];
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }
  return out;
}
