import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { NB_LIVE } from './lib/locale';

// Host → locale routing for the ccTLD setup:
//   byggexp.no  → Norwegian (nb) only
//   byggexp.se  → sv / en / ru
// Each locale lives on exactly one domain so Google gets a clean ccTLD signal
// and never sees the same content on two hosts. Until NB_LIVE is true this is a
// no-op, so it is safe to ship ahead of the go-live flip.

const NO_HOST = 'byggexp.no';
const SE_HOST = 'byggexp.se';
const NON_NB_LOCALES = new Set(['sv', 'en', 'ru']);

function bare(host: string): string {
  return host.toLowerCase().split(':')[0].replace(/^www\./, '');
}

// A crawler normally sends `[` and `]` percent-encoded, so the literal route id
// arrives as `/%5Blang%5D/...`. Compare on the decoded path or the redirect below
// never fires (it 404s instead — and 500s on the pages that read the segment).
function decodePath(pathname: string): string {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname; // malformed escape — leave as-is
  }
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;
  const decodedPath = decodePath(pathname);
  const firstSeg = decodedPath.split('/')[1] || '';

  // www.byggexp.se / www.byggexp.no served the full site with 200 (only the
  // canonical saved us). 301 to the bare host so links and crawl budget
  // consolidate on one origin.
  const rawHost = (req.headers.get('host') || '').toLowerCase().split(':')[0];
  if (rawHost === `www.${SE_HOST}` || rawHost === `www.${NO_HOST}`) {
    const to = new URL(url);
    to.protocol = 'https:';
    to.host = bare(rawHost);
    to.port = '';
    return NextResponse.redirect(to, 301);
  }

  // Googlebot scraped the literal Next.js route id `/[lang]/...` out of the
  // __NEXT_DATA__ blob and crawled it, producing a batch of bogus 404s in Search
  // Console. Those paths are never real links; 301 them onto the sv equivalent so
  // the errors clear and any stray equity lands on the live page. Runs before the
  // NB_LIVE guard so it applies regardless of the Norway rollout flag.
  if (firstSeg === '[lang]') {
    // Drop any further unresolved segments (`/[lang]/blog/[slug]` → `/sv/blog`)
    // so the target is a real page instead of another 404.
    const rest = decodedPath
      .split('/')
      .slice(2)
      .filter((seg) => !seg.startsWith('['));
    // `/[lang]/embed/[slug]` strips down to `/sv/embed`, which has no index page
    // — point it at the tools hub the widgets belong to instead.
    if (rest.length === 1 && rest[0] === 'embed') rest[0] = 'verktyg';
    const to = new URL(url);
    to.pathname = `/sv${rest.length ? `/${rest.join('/')}` : ''}`;
    return NextResponse.redirect(to, 301);
  }

  if (!NB_LIVE) return NextResponse.next();

  const host = bare(req.headers.get('host') || '');

  // Skip Next internals, API routes and files (anything with an extension).
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next();
  }

  // --- byggexp.no: serve only Norwegian ------------------------------------
  if (host === NO_HOST) {
    if (firstSeg === 'nb') return NextResponse.next();
    // sv/en/ru belong on byggexp.se — send them there.
    if (NON_NB_LOCALES.has(firstSeg)) {
      const to = new URL(url);
      to.protocol = 'https:';
      to.host = SE_HOST;
      to.port = '';
      return NextResponse.redirect(to, 301);
    }
    // Locale-less path (or root) → serve the nb version.
    const to = new URL(url);
    to.pathname = pathname === '/' ? '/nb' : `/nb${pathname}`;
    return NextResponse.rewrite(to);
  }

  // --- byggexp.se: nb belongs on byggexp.no --------------------------------
  if (host === SE_HOST && firstSeg === 'nb') {
    const to = new URL(url);
    to.protocol = 'https:';
    to.host = NO_HOST;
    to.port = '';
    return NextResponse.redirect(to, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Run on everything except static assets; the handler itself skips files.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt).*)'],
};
