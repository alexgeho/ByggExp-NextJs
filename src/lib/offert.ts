// Bridge from a calculator's result to the offert (quote) generator: encode the
// material rows into a URL that /sv/verktyg/offert-mall reads and pre-fills.
// Quantities carry over; prices are left blank for the user to fill in.

export type OffertSeedRow = { desc: string; qty: number | string; labour?: boolean };

export type OffertRow = { desc: string; qty: string; price: string; labour: boolean };

// Compact shape kept short so the URL stays reasonable: d=desc, q=qty, l=labour.
type Packed = { d: string; q: string; l: 0 | 1 };

function seedQuery(rows: OffertSeedRow[]): string {
  const packed: Packed[] = rows
    .filter((r) => r.desc && Number(r.qty) > 0)
    .map((r) => ({ d: r.desc, q: String(r.qty), l: r.labour ? 1 : 0 }));
  return encodeURIComponent(JSON.stringify(packed));
}

export function offertHref(rows: OffertSeedRow[]): string {
  return `/sv/verktyg/offert-mall?rows=${seedQuery(rows)}`;
}

export function fakturaHref(rows: OffertSeedRow[]): string {
  return `/sv/verktyg/faktura-mall?rows=${seedQuery(rows)}`;
}

export function parseOffertRows(param: string | string[] | undefined): OffertRow[] | null {
  if (typeof param !== 'string' || !param) return null;
  try {
    const packed = JSON.parse(param) as Packed[];
    if (!Array.isArray(packed) || packed.length === 0) return null;
    return packed
      .filter((p) => p && typeof p.d === 'string')
      .map((p) => ({
        desc: String(p.d),
        qty: String(p.q ?? '1'),
        price: '',
        labour: p.l === 1,
      }));
  } catch {
    return null;
  }
}
