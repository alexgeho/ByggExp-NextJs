import type { NextApiRequest, NextApiResponse } from 'next';

import { readDownloads, type DownloadEvent } from '../../lib/downloadStore';

// Owner dashboard for the download counter — a plain, phone-friendly HTML page.
// Aggregates only. If DOWNLOAD_STATS_KEY is set in the env, ?key=… is required.
const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string);

const DAY = 86_400_000;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const key = process.env.DOWNLOAD_STATS_KEY;
  if (key && req.query.key !== key) return res.status(404).end();

  const days = Math.min(Math.max(Number(req.query.days) || 30, 1), 365);
  const all = readDownloads();
  const now = Date.now();
  const since = (d: number) => all.filter((e) => now - Date.parse(e.t) < d * DAY);
  const period = since(days);

  const byPage = new Map<string, DownloadEvent[]>();
  period.forEach((e) => byPage.set(e.path, [...(byPage.get(e.path) || []), e]));
  const pages = [...byPage.entries()].sort((a, b) => b[1].length - a[1].length);

  const returning = (list: DownloadEvent[]) => list.filter((e) => e.prior !== '0').length;
  const pct = (a: number, b: number) => (b ? `${Math.round((a / b) * 100)} %` : '–');
  const fmtCount = (list: DownloadEvent[]) => {
    const m = new Map<string, number>();
    list.forEach((e) => m.set(e.format, (m.get(e.format) || 0) + 1));
    return [...m.entries()].sort((a, b) => b[1] - a[1]).map(([f, n]) => `${f.toUpperCase()} ${n}`).join(' · ');
  };

  // Daily series, last 14 days (UTC dates).
  const daily: { d: string; n: number }[] = [];
  for (let i = 13; i >= 0; i -= 1) {
    const d = new Date(now - i * DAY).toISOString().slice(0, 10);
    daily.push({ d, n: all.filter((e) => e.t.startsWith(d)).length });
  }
  const max = Math.max(1, ...daily.map((x) => x.n));

  const prior = ['0', '1', '2-4', '5+'].map((b) => ({ b, n: period.filter((e) => e.prior === b).length }));
  const priorLabel: Record<string, string> = { '0': 'Первое скачивание', '1': '2-е', '2-4': '3–5-е', '5+': '6-е и больше' };

  const html = `<!doctype html><html lang="ru"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow">
<title>Скачивания · ByggExp</title>
<style>
body{font:15px/1.45 -apple-system,system-ui,sans-serif;margin:0;padding:16px;background:#f6f7f9;color:#111}
h1{font-size:20px;margin:0 0 4px}h2{font-size:16px;margin:24px 0 8px}.m{color:#667}
.k{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.c{background:#fff;border-radius:12px;padding:12px}
.c b{display:block;font-size:24px}table{width:100%;border-collapse:collapse;background:#fff;border-radius:12px;overflow:hidden}
td,th{padding:8px 10px;border-bottom:1px solid #eef;text-align:left;font-size:14px;vertical-align:top}th{font-size:12px;color:#667}
td.n{text-align:right;white-space:nowrap}.bar{display:flex;align-items:end;gap:3px;height:90px;background:#fff;border-radius:12px;padding:10px}
.bar div{flex:1;background:#2f7cf6;border-radius:3px 3px 0 0;min-height:2px}.days{display:flex;justify-content:space-between;font-size:11px;color:#667;margin-top:4px}
a{color:#2f7cf6}
</style></head><body>
<h1>Скачивания шаблонов</h1><div class="m">Период: ${days} дн. · <a href="?days=7${key ? `&key=${esc(key)}` : ''}">7</a> · <a href="?days=30${key ? `&key=${esc(key)}` : ''}">30</a> · <a href="?days=90${key ? `&key=${esc(key)}` : ''}">90</a></div>
<h2>Итого</h2><div class="k">
<div class="c"><span class="m">Сегодня</span><b>${since(1).length}</b></div>
<div class="c"><span class="m">7 дней</span><b>${since(7).length}</b></div>
<div class="c"><span class="m">30 дней</span><b>${since(30).length}</b></div>
<div class="c"><span class="m">Повторные (${days} дн.)</span><b>${pct(returning(period), period.length)}</b></div>
</div>
<h2>По дням (14 дн.)</h2><div class="bar">${daily.map((x) => `<div title="${x.d}: ${x.n}" style="height:${(x.n / max) * 100}%"></div>`).join('')}</div>
<div class="days"><span>${daily[0].d.slice(5)}</span><span>${daily[13].d.slice(5)}</span></div>
<h2>Возвращаются ли люди</h2><table><tr><th>Скачивание на устройстве</th><th class="n">Кол-во</th></tr>
${prior.map((p) => `<tr><td>${priorLabel[p.b]}</td><td class="n">${p.n}</td></tr>`).join('')}</table>
<h2>По страницам (${days} дн.)</h2><table><tr><th>Страница</th><th class="n">Всего</th><th class="n">Повт.</th></tr>
${pages.length ? pages.map(([p, list]) => `<tr><td><a href="${esc(p)}">${esc(p.replace(/^\/sv\/(verktyg|blog)\//, ''))}</a><div class="m">${esc(fmtCount(list))}</div></td><td class="n">${list.length}</td><td class="n">${pct(returning(list), list.length)}</td></tr>`).join('') : '<tr><td colspan="3" class="m">Пока нет скачиваний</td></tr>'}
</table>
<p class="m">Считается каждое скачивание PDF/Excel/CSV/JPG с сайта. Без cookies и без идентификаторов: «повторные» — браузер, который уже скачивал раньше.</p>
</body></html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).send(html);
}
