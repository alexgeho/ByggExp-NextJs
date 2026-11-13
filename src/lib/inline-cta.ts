// R20 (2026-11-13): feature pages repeat the consultation button inside the
// long text, after every third <h2> section (and at the end of the text when
// the last section closes a group of three). The button itself is the page's
// existing CTA — the caller passes its HTML.
import { topLevelBlocks } from './illu-rows';

export const INLINE_CTA_EVERY = 3;

export function inlineCtas(html: string, ctaHtml: string, every = INLINE_CTA_EVERY): string {
  if (!html) return html;
  const h2 = topLevelBlocks(html).filter((b) => b.tag === 'h2');
  const points: number[] = [];
  for (let k = every; k < h2.length; k += every) points.push(h2[k].start);
  if (h2.length && h2.length % every === 0) points.push(html.length);
  let out = html;
  for (let i = points.length - 1; i >= 0; i -= 1) {
    out = out.slice(0, points[i]) + ctaHtml + out.slice(points[i]);
  }
  return out;
}
