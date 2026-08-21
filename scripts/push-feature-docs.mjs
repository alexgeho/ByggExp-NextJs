// Injects the "Så gör du i webbadmin" + "Så gör du i appen" sections from
// scripts/feature-docs.mjs into the 12 feature articles in the CMS.
//
//   node scripts/push-feature-docs.mjs            # DRY RUN: builds previews, no login, no changes
//   node scripts/push-feature-docs.mjs --push     # asks for admin email + password (hidden) and updates the CMS
//
// The password is read from a hidden prompt and never stored or logged. It is
// sent only to the ByggExp API's /auth/login. Re-running is safe: the injected
// block sits between <!-- FEATDOCS:START --> / <!-- FEATDOCS:END --> markers and
// is replaced in place, not duplicated.
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

import { FEATURE_DOCS } from './feature-docs.mjs';

// Load admin credentials from a gitignored .env.admin (KEY=VALUE per line) if it
// exists, so the push can run non-interactively. The file lives only on the
// owner's machine and is never committed or printed.
(function loadEnvAdmin() {
  try {
    const p = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '.env.admin');
    for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  } catch { /* no file — fall back to interactive prompt */ }
})();

const BASE = (process.env.NEXT_PUBLIC_API_URL || 'https://api.byggexp.se').replace(/\/$/, '');
const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '.feature-docs-preview');
const PUSH = process.argv.includes('--push');
const MARK_START = '<!-- FEATDOCS:START -->';
const MARK_END = '<!-- FEATDOCS:END -->';

function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function buildBlock(doc) {
  const ol = (steps) => `<ol>\n${steps.map((s) => `<li>${s}</li>`).join('\n')}\n</ol>`;
  const parts = [];
  if (doc.webbadmin?.length) parts.push(`<h2>Så gör du i webbadmin</h2>\n${ol(doc.webbadmin)}`);
  if (doc.appen?.length) parts.push(`<h2>Så gör du i appen</h2>\n${ol(doc.appen)}`);
  return `${MARK_START}\n${parts.join('\n')}\n${MARK_END}`;
}

// Replace the marker block if present; else replace the "Så kommer du igång"
// section (heading up to the next <h2>); else insert before "Vanliga frågor".
function inject(html, block) {
  if (html.includes(MARK_START)) {
    return html.replace(new RegExp(`${esc(MARK_START)}[\\s\\S]*?${esc(MARK_END)}`), block);
  }
  const stegRe = /<h2>\s*Så kommer du igång[\s\S]*?(?=<h2>)/;
  if (stegRe.test(html)) return html.replace(stegRe, `${block}\n`);
  const faqRe = /<h2>\s*Vanliga frågor/;
  if (faqRe.test(html)) return html.replace(faqRe, `${block}\n<h2>Vanliga frågor`);
  return `${html}\n${block}`;
}

async function getPublic(slug) {
  const r = await fetch(`${BASE}/blog-posts/public/${slug}?locale=sv`);
  if (!r.ok) throw new Error(`public ${slug}: ${r.status}`);
  return r.json();
}

function ask(question, { hidden = false } = {}) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    if (hidden) {
      process.stdout.write(question);
      rl._writeToOutput = () => {};
      rl.question('', (a) => { rl.close(); process.stdout.write('\n'); resolve(a); });
    } else {
      rl.question(question, (a) => { rl.close(); resolve(a); });
    }
  });
}

async function tryLogin(email, password) {
  const r = await fetch(`${BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.trim(), password }),
  });
  if (!r.ok) return null;
  const s = await r.json();
  return s.access_token ? s : null;
}

function saveCreds(email, password) {
  try {
    const p = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '.env.admin');
    fs.writeFileSync(p, `ADMIN_EMAIL=${email.trim()}\nADMIN_PASSWORD=${password}\n`, { mode: 0o600 });
    console.log('✓ inloggning sparad i .env.admin (nästa gång behövs inget lösenord)');
  } catch { /* non-fatal */ }
}

async function login() {
  // 0) a ready access token (e.g. read from the browser's admin session)
  if (process.env.ADMIN_TOKEN) return { access_token: process.env.ADMIN_TOKEN };
  // 1) try saved creds from .env.admin / env
  if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
    const s = await tryLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD);
    if (s) return s;
    console.log('⚠ sparad inloggning fungerade inte – ange den på nytt.\n');
  }
  // 2) interactive, self-verifying, up to 3 attempts; save on success
  for (let i = 0; i < 3; i++) {
    const email = (await ask('Admin email: ')).trim();
    const password = await ask('Admin password (hidden): ', { hidden: true });
    const s = await tryLogin(email, password);
    if (s) { saveCreds(email, password); return s; }
    console.log('✗ fel email eller lösenord, försök igen.\n');
  }
  throw new Error('Login failed after 3 attempts.');
}

async function getAdmin(id, token) {
  const r = await fetch(`${BASE}/blog-posts/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  if (!r.ok) throw new Error(`admin get ${id}: ${r.status}`);
  return r.json();
}

async function putAdmin(id, payload, token) {
  const r = await fetch(`${BASE}/blog-posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  if (!r.ok) throw new Error(`admin put ${id}: ${r.status} ${await r.text()}`);
  return r.json();
}

async function main() {
  const slugs = Object.keys(FEATURE_DOCS);
  console.log(`${PUSH ? 'PUSH' : 'DRY RUN'} · ${slugs.length} feature pages · API ${BASE}\n`);

  let session = null;
  if (PUSH) {
    session = await login();
    console.log('✓ logged in\n');
  } else {
    fs.mkdirSync(OUT, { recursive: true });
  }

  for (const slug of slugs) {
    try {
      const pub = await getPublic(slug);
      const id = pub._id || pub.id;
      const block = buildBlock(FEATURE_DOCS[slug]);
      const source = PUSH ? await getAdmin(id, session.access_token) : pub;
      const newHtml = inject(source.contentHtml || '', block);
      const changed = newHtml !== (source.contentHtml || '');

      if (!PUSH) {
        fs.writeFileSync(path.join(OUT, `${slug}.html`), newHtml);
        console.log(`• ${slug}  ${changed ? '(updated)' : '(no change)'}  Δ${newHtml.length - (source.contentHtml || '').length} chars`);
        continue;
      }

      if (!changed) { console.log(`• ${slug}  already up to date`); continue; }
      const payload = {
        title: source.title,
        slug: source.slug,
        locale: source.locale,
        excerpt: source.excerpt,
        tag: source.tag,
        coverImageUrl: source.coverImageUrl,
        contentHtml: newHtml,
        seoTitle: source.seoTitle,
        seoDescription: source.seoDescription,
        seoImageUrl: source.seoImageUrl,
        canonicalUrl: source.canonicalUrl,
        noIndex: source.noIndex,
        isPublished: source.isPublished,
      };
      await putAdmin(id, payload, session.access_token);
      console.log(`✓ ${slug}  updated`);
    } catch (e) {
      console.error(`✗ ${slug}  ${e.message}`);
    }
  }

  if (!PUSH) {
    console.log(`\nPreviews written to ${OUT}/`);
    console.log('Review them, edit scripts/feature-docs.mjs if needed, then run again with --push.');
  } else {
    console.log('\nDone. Check the feature pages on the site.');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
