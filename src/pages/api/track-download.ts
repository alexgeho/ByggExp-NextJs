import type { NextApiRequest, NextApiResponse } from 'next';

import { appendDownload } from '../../lib/downloadStore';

// Receives one beacon per tool download (see lib/downloadTracking.ts).
// Aggregate only: page path, file format and a "previous downloads" bucket —
// no IP, no user agent, no identifier is stored.
const BOT = /bot|crawl|spider|slurp|headless|lighthouse|preview/i;
const PRIOR = new Set(['0', '1', '2-4', '5+']);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }
  if (BOT.test(req.headers['user-agent'] || '')) return res.status(204).end();

  let body = req.body as unknown;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).end();
    }
  }
  const b = (body || {}) as Record<string, unknown>;
  const pagePath = typeof b.path === 'string' ? b.path : '';
  const format = typeof b.format === 'string' ? b.format.toLowerCase() : '';
  const prior = typeof b.prior === 'string' && PRIOR.has(b.prior) ? b.prior : '0';
  // Only our own pages; keep the stored strings short and boring.
  if (!/^\/[a-z0-9/_-]{1,120}$/i.test(pagePath) || !/^[a-z0-9]{1,8}$/.test(format)) {
    return res.status(400).end();
  }

  try {
    appendDownload({ t: new Date().toISOString(), path: pagePath, format, prior });
  } catch {
    // Disk issue must not surface to the visitor.
  }
  return res.status(204).end();
}
