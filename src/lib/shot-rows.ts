// R16 (owner 2026-10-28): a phone screenshot and a desktop (web admin)
// screenshot that stand one under the other go in ONE row:
//   <figure class="shot-row">
//     <div class="shot-row__imgs"><div class="shot-row__phone"><img…></div><div class="shot-row__web"><img…></div></div>
//     <figcaption>one shared caption</figcaption>
//   </figure>
// Phone first (narrow column, ~30 %), desktop second (~70 %), bottom-aligned.
// A figure is a phone shot if it is `app-shots` with one image, or its image
// is portrait (height > 1.4 × width); a desktop shot if it is `web-shot`, or
// its image is landscape (width > 1.4 × height). Content should give only one
// of the two figures a caption (the merged one); if both have one, they are
// joined.
import { topLevelBlocks } from './illu-rows';

type Kind = 'phone' | 'web' | null;

const IMG_RE = /<img\b[^>]*>/g;
const CAPTION_RE = /<figcaption[^>]*>([\s\S]*?)<\/figcaption>/;

function kindOf(figure: string): Kind {
  const imgs = figure.match(IMG_RE) || [];
  if (imgs.length !== 1) return null;
  const cls = (figure.match(/^<figure[^>]*class="([^"]*)"/) || [])[1] || '';
  if (/\b(fn-illu|doc-shot|article-diagram|video-embed)\b/.test(cls)) return null;
  if (/\bapp-shots\b/.test(cls)) return 'phone';
  if (/\bweb-shot\b/.test(cls)) return 'web';
  const w = Number((imgs[0].match(/\bwidth="(\d+)"/) || [])[1]);
  const h = Number((imgs[0].match(/\bheight="(\d+)"/) || [])[1]);
  if (!w || !h) return null;
  if (h > w * 1.4) return 'phone';
  if (w > h * 1.4) return 'web';
  return null;
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
    const ka = kindOf(fa);
    const kb = kindOf(fb);
    if (!ka || !kb || ka === kb) continue;
    const [phone, web] = ka === 'phone' ? [fa, fb] : [fb, fa];
    const captions = [fa, fb]
      .map((f) => (f.match(CAPTION_RE) || [])[1]?.trim())
      .filter(Boolean);
    const caption = captions.length ? `<figcaption>${captions.join(' ')}</figcaption>` : '';
    const img = (f: string) => (f.match(IMG_RE) as RegExpMatchArray)[0];
    edits.push({
      start: a.start,
      end: b.end,
      text:
        `<figure class="shot-row"><div class="shot-row__imgs">` +
        `<div class="shot-row__phone">${img(phone)}</div>` +
        `<div class="shot-row__web">${img(web)}</div>` +
        `</div>${caption}</figure>`,
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
