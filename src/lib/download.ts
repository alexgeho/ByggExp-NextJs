// Trigger a client-side download of raw bytes (e.g. a generated PDF).
export function downloadBytes(
  bytes: Uint8Array,
  filename: string,
  mime = 'application/pdf',
) {
  const blob = new Blob([bytes as unknown as BlobPart], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

// Trigger a client-side download of a Blob.
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

// Download a table of rows as CSV that opens directly in Excel / Google Sheets.
// Uses ';' as separator (Swedish Excel treats ',' as a decimal sign) and a BOM
// so åäö stay correct. Empty inner arrays render as blank spacer rows.
export function downloadCsvRows(
  rows: (string | number)[][],
  filename: string,
) {
  const csv = rows
    .map((cols) =>
      cols.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(';'),
    )
    .join('\r\n');
  downloadBlob(
    new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }),
    filename,
  );
}

// Parse a page spec like "1,3,5-7" into 0-based indices within [0,total).
export function parsePageSpec(input: string, total: number): number[] {
  const out: number[] = [];
  for (const part of input.split(',').map((p) => p.trim()).filter(Boolean)) {
    if (part.includes('-')) {
      const [a, b] = part.split('-').map((n) => parseInt(n.trim(), 10) - 1);
      for (let i = a; i <= b && i < total; i++) if (i >= 0) out.push(i);
    } else {
      const p = parseInt(part, 10) - 1;
      if (p >= 0 && p < total) out.push(p);
    }
  }
  return [...new Set(out)];
}
