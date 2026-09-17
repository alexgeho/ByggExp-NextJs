/**
 * Generate an on-brand image via Replicate (FLUX) and save it as an optimized
 * webp under public/. Photoreal / illustration images to complement the branded
 * SVG diagrams (gen-article-diagrams.js) and cover cards (gen-blog-covers.js).
 *
 * Auth: put your Replicate token in a gitignored env file (.env.admin or .env):
 *   REPLICATE_API_TOKEN=r8_xxx
 * Get one at https://replicate.com/account/api-tokens
 *
 * Usage:
 *   node scripts/gen-image.js "a Swedish construction site, golden hour" \
 *     --out public/landing/blog/mycover --ar 16:9 --model dev --width 1000
 *
 * Flags:
 *   --out <path>     output path WITHOUT extension (default: public/landing/generated/<timestamp>)
 *   --ar <w:h>       aspect ratio: 1:1 3:2 16:9 4:3 9:16 ... (default 16:9)
 *   --model <name>   schnell | dev | pro   (default schnell — cheapest/fastest)
 *   --width <px>     resize final webp to this width (default: keep native)
 *   --quality <n>    webp quality 1-100 (default 82)
 *   --n <n>          number of images (schnell/dev only; suffixes -1 -2 ...) (default 1)
 *   --seed <n>       fixed seed for reproducibility
 *
 * Output: <out>.webp  (or <out>-1.webp, <out>-2.webp ... when --n > 1)
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');

// --- tiny .env loader (.env.admin wins, then .env) ---
function loadEnv() {
  for (const f of ['.env.admin', '.env']) {
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
      if (m && !(m[1] in process.env)) {
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
      }
    }
  }
}
loadEnv();

const MODELS = {
  schnell: 'black-forest-labs/flux-schnell',
  dev: 'black-forest-labs/flux-dev',
  pro: 'black-forest-labs/flux-1.1-pro',
};

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) args[a.slice(2)] = argv[++i];
    else args._.push(a);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const prompt = args._.join(' ').trim();
  if (!prompt) {
    console.error('✗ Missing prompt. Example:\n  node scripts/gen-image.js "..." --out public/landing/generated/foo --ar 16:9');
    process.exit(1);
  }
  const token = process.env.REPLICATE_API_TOKEN;
  if (!token) {
    console.error('✗ REPLICATE_API_TOKEN not set. Add it to .env.admin:\n    REPLICATE_API_TOKEN=r8_xxx\n  Token: https://replicate.com/account/api-tokens');
    process.exit(1);
  }

  const modelKey = (args.model || 'schnell').toLowerCase();
  const model = MODELS[modelKey];
  if (!model) {
    console.error(`✗ Unknown model "${modelKey}". Use: ${Object.keys(MODELS).join(' | ')}`);
    process.exit(1);
  }

  const n = Math.max(1, parseInt(args.n || '1', 10));
  const outBase = args.out
    ? path.resolve(ROOT, args.out)
    : path.join(ROOT, 'public/landing/generated', `img-${Date.now()}`);
  fs.mkdirSync(path.dirname(outBase), { recursive: true });

  const input = {
    prompt,
    aspect_ratio: args.ar || '16:9',
    output_format: 'png',
    output_quality: 100,
  };
  if (modelKey !== 'pro') {
    input.num_outputs = n;
    input.go_fast = modelKey === 'schnell';
  }
  if (args.seed) input.seed = parseInt(args.seed, 10);

  console.log(`→ ${model}  ar=${input.aspect_ratio}  n=${n}`);
  console.log(`  "${prompt}"`);

  const sleepMs = (ms) => new Promise((r) => setTimeout(r, ms));
  let res, data;
  for (let attempt = 0; attempt < 8; attempt++) {
    res = await fetch(`https://api.replicate.com/v1/models/${model}/predictions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Prefer: 'wait', // block until the prediction finishes
      },
      body: JSON.stringify({ input }),
    });
    if (res.status === 429) {
      // Low-credit accounts are throttled to a few req/min. Back off and retry.
      const wait = 12000;
      process.stdout.write(`\r  …rate-limited, retrying in ${wait / 1000}s   `);
      await sleepMs(wait);
      continue;
    }
    data = await res.json();
    break;
  }
  if (!data) {
    console.error('✗ Rate limited repeatedly — try again shortly or raise your Replicate credit above $5.');
    process.exit(1);
  }
  if (!res.ok || data.error) {
    console.error('✗ Replicate error:', data.error || `${res.status} ${res.statusText}`, data.detail || '');
    process.exit(1);
  }

  // `Prefer: wait` returns as soon as it can; larger models may still be
  // running. Poll the prediction until it reaches a terminal state.
  const getUrl = data.urls && data.urls.get;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  let waited = 0;
  while (['starting', 'processing'].includes(data.status) && getUrl) {
    await sleep(2000);
    waited += 2;
    process.stdout.write(`\r  …${data.status} (${waited}s)   `);
    const poll = await fetch(getUrl, { headers: { Authorization: `Bearer ${token}` } });
    data = await poll.json();
    if (waited > 300) break; // 5 min safety cap
  }
  if (waited) process.stdout.write('\n');

  if (data.status !== 'succeeded') {
    console.error(`✗ Prediction ${data.status}:`, data.error || JSON.stringify(data).slice(0, 300));
    process.exit(1);
  }

  const urls = Array.isArray(data.output) ? data.output : [data.output];
  const width = args.width ? parseInt(args.width, 10) : null;
  const quality = parseInt(args.quality || '82', 10);
  const multi = urls.length > 1;

  for (let i = 0; i < urls.length; i++) {
    const imgRes = await fetch(urls[i]);
    const buf = Buffer.from(await imgRes.arrayBuffer());
    let img = sharp(buf);
    if (width) img = img.resize({ width, withoutEnlargement: true });
    const outPath = `${outBase}${multi ? `-${i + 1}` : ''}.webp`;
    await img.webp({ quality }).toFile(outPath);
    const kb = (fs.statSync(outPath).size / 1024).toFixed(0);
    console.log(`✓ ${path.relative(ROOT, outPath)}  (${kb} KB)`);
  }
  console.log(`\nInsert with a leading slash from /public, e.g.  ${'`'}/${path.relative(path.join(ROOT, 'public'), outBase).replace(/\\/g, '/')}${multi ? '-1' : ''}.webp${'`'}`);
}

main().catch((e) => {
  console.error('✗', e.message || e);
  process.exit(1);
});
