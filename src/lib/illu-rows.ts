// R15 (owner 2026-10-28): 3D illustrations sit large, in a row with the text.
// Content places each <figure class="fn-illu"> at the end of a section, so the
// figure is paired with the paragraphs/lists right before it:
//   <div class="fn-row fn-row--left|right"><figure…/><div class="fn-row-text">…</div></div>
// Sides alternate per page. If there is no paragraph/list right before it
// (heading, table…), the figure gets `fn-illu--wide` (large, centered).

const VOID = new Set(['img', 'br', 'hr', 'input', 'source', 'meta', 'link', 'wbr', 'col', 'area']);
const TEXT_BLOCKS = new Set(['p', 'ul', 'ol']);
const MAX_BLOCKS = 3;
const ENOUGH_TEXT = 520; // chars of text that roughly match the image height
const MAX_TEXT = 900; // a longer block stays full width (row would be mostly empty image side)

type Block = { start: number; end: number; tag: string };

function topLevelBlocks(html: string): Block[] {
  const blocks: Block[] = [];
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b[^>]*?(\/?)>/g;
  let depth = 0;
  let open: { start: number; tag: string } | null = null;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const closing = m[1] === '/';
    const tag = m[2].toLowerCase();
    const selfClosing = m[3] === '/' || VOID.has(tag);
    if (closing) {
      depth -= 1;
      if (depth === 0 && open) {
        blocks.push({ start: open.start, end: re.lastIndex, tag: open.tag });
        open = null;
      }
      if (depth < 0) depth = 0;
    } else if (selfClosing) {
      if (depth === 0) blocks.push({ start: m.index, end: re.lastIndex, tag });
    } else {
      if (depth === 0) open = { start: m.index, tag };
      depth += 1;
    }
  }
  return blocks;
}

const textLength = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().length;
const isIllu = (html: string, b: Block) =>
  b.tag === 'figure' && /^<figure[^>]*class="[^"]*\bfn-illu\b/.test(html.slice(b.start, b.end));

export function illuRows(html: string): string {
  if (!html || !html.includes('fn-illu')) return html;
  const blocks = topLevelBlocks(html);
  const edits: { start: number; end: number; text: string }[] = [];
  let row = 0;
  let consumedUpTo = -1; // index of the last block already used by a row

  blocks.forEach((b, i) => {
    if (!isIllu(html, b)) return;
    const figure = html.slice(b.start, b.end);
    const take: Block[] = [];
    let chars = 0;
    for (let j = i - 1; j > consumedUpTo && take.length < MAX_BLOCKS; j -= 1) {
      const prev = blocks[j];
      if (!TEXT_BLOCKS.has(prev.tag)) break;
      const len = textLength(html.slice(prev.start, prev.end));
      if (take.length && chars + len > MAX_TEXT) break;
      take.unshift(prev);
      chars += len;
      if (chars >= ENOUGH_TEXT) break;
    }
    consumedUpTo = i;
    if (!take.length) {
      edits.push({ start: b.start, end: b.end, text: figure.replace('class="fn-illu', 'class="fn-illu fn-illu--wide') });
      return;
    }
    const side = row % 2 === 0 ? 'left' : 'right';
    row += 1;
    const text = html.slice(take[0].start, take[take.length - 1].end);
    edits.push({
      start: take[0].start,
      end: b.end,
      text: `<div class="fn-row fn-row--${side}">${figure}<div class="fn-row-text">${text}</div></div>`,
    });
  });

  let out = html;
  for (let k = edits.length - 1; k >= 0; k -= 1) {
    const e = edits[k];
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }
  return out;
}
