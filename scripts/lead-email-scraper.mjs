import fs from 'node:fs';

const CSV = process.env.CSV || '/Users/alexandergerhard/Downloads/byggexp-leads-1646 - byggexp-leads-1646.csv';
const LIMIT = parseInt(process.env.LIMIT || '40', 10);
const OFFSET = parseInt(process.env.OFFSET || '0', 10);
const CONC = parseInt(process.env.CONC || '8', 10);
const OUT = process.env.OUT || '';

// --- CSV parse (RFC-ish, handles quotes/newlines) ---
function parseCSV(text) {
  const rows = []; let f = [], cur = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i+1] === '"') { cur += '"'; i++; } else q = false; } else cur += c; }
    else { if (c === '"') q = true; else if (c === ',') { f.push(cur); cur=''; } else if (c === '\n') { f.push(cur); rows.push(f); f=[]; cur=''; } else if (c === '\r') {} else cur += c; }
  }
  if (cur !== '' || f.length) { f.push(cur); rows.push(f); }
  return rows;
}

const raw = fs.readFileSync(CSV, 'utf8');
const rows = parseCSV(raw);
const header = rows[0].map(h => h.trim().toLowerCase());
const gi = (name) => header.indexOf(name);
const iNamn = gi('namn'), iWeb = gi('webbplats'), iEmail = gi('email');

const all = rows.slice(1).filter(r => r.length > 1).map(r => ({
  namn: (r[iNamn]||'').trim(),
  web: (r[iWeb]||'').trim(),
  email: (r[iEmail]||'').trim(),
}));

const todo = all.filter(r => r.namn && r.web && !r.email).slice(OFFSET, OFFSET + LIMIT);

function origin(w){ try { return new URL(/^https?:/.test(w) ? w : 'https://'+w).origin; } catch { return null; } }
const CONTACT_PATHS = ['', '/kontakt', '/kontakta-oss', '/kontakt-oss', '/contact', '/om-oss', '/kontakta'];
const EMAIL_RE = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi;
const JUNK = /(sentry|wixpress|example|@2x|\.png|\.jpg|\.gif|\.webp|\.svg|godaddy|placeholder|domain\.com|email\.com|yourname|@sentry|core-js|schema\.org|w3\.org)/i;
// website-builder / hosting platform mailboxes are NOT the company's real email
const PLATFORM = /@(minhemsida\.se|one\.com|loopia\.se|oderland\.se|hostinger|wix\.com|squarespace|websystem|surftown|binero\.se|websupport|sentry\.io|epostservice)/i;
const ROLE = /^(info|kontakt|hej|hello|mail|order|kundtjanst|kundtjänst|support|admin|kontor|reception)@/i;

function pickEmails(html, host){
  const found = new Set();
  // mailto links first
  for (const m of html.matchAll(/mailto:([^"'?>\s]+)/gi)) { const e = decodeURIComponent(m[1]).toLowerCase(); if (e.includes('@')) found.add(e); }
  for (const m of html.matchAll(EMAIL_RE)) { found.add(m[0].toLowerCase()); }
  let list = [...found].filter(e => !JUNK.test(e) && !PLATFORM.test(e) && e.length < 60 && !/\.(png|jpg|jpeg|gif|webp|svg|css|js)$/i.test(e));
  // prefer same-domain, then role addresses
  const dom = host.replace(/^www\./,'');
  list.sort((a,b) => {
    const sa = (a.endsWith('@'+dom)?2:0) + (ROLE.test(a)?1:0);
    const sb = (b.endsWith('@'+dom)?2:0) + (ROLE.test(b)?1:0);
    return sb - sa;
  });
  return list;
}

async function fetchText(url, ms=8000){
  const ctl = new AbortController(); const t = setTimeout(()=>ctl.abort(), ms);
  try {
    const r = await fetch(url, { redirect:'follow', signal: ctl.signal, headers:{'User-Agent':'Mozilla/5.0 (compatible; ByggExpLeadBot/1.0)'} });
    if (!r.ok) return '';
    const ct = r.headers.get('content-type')||''; if (!/text|html/i.test(ct)) return '';
    return (await r.text()).slice(0, 500000);
  } catch { return ''; } finally { clearTimeout(t); }
}

async function scrapeOne(row){
  const org = origin(row.web); if (!org) return { ...row, found:'', status:'bad-url' };
  const host = new URL(org).host;
  for (const p of CONTACT_PATHS) {
    const html = await fetchText(org + p);
    if (!html) continue;
    const emails = pickEmails(html, host);
    if (emails.length) return { ...row, found: emails[0], all: emails.slice(0,3).join('; '), status:'ok' };
  }
  return { ...row, found:'', status:'none' };
}

async function run(){
  const results = [];
  let idx = 0;
  async function worker(){
    while (idx < todo.length) {
      const my = idx++;
      const res = await scrapeOne(todo[my]);
      results[my] = res;
      process.stderr.write(res.found ? '.' : 'x');
    }
  }
  await Promise.all(Array.from({length: CONC}, worker));
  process.stderr.write('\n');
  const hit = results.filter(r => r.found).length;
  console.log(`\n=== PILOT: ${results.length} sites, ${hit} emails found (${Math.round(hit/results.length*100)}%) ===\n`);
  for (const r of results) console.log(`${r.found ? '✓' : '·'} ${r.namn}\t${r.found || '('+r.status+')'}`);
  if (OUT) {
    const csv = 'namn,webbplats,email\n' + results.filter(r=>r.found).map(r => `"${r.namn.replace(/"/g,'""')}","${r.web}","${r.found}"`).join('\n') + '\n';
    fs.writeFileSync(OUT, csv);
    console.log(`\nWrote ${results.filter(r=>r.found).length} rows -> ${OUT}`);
  }
  console.log(`\nTotal rows needing email in sheet: ${all.filter(r=>r.namn&&r.web&&!r.email).length}`);
}
run();
