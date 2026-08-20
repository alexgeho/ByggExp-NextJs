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

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;
  const firstSeg = pathname.split('/')[1] || '';

  // Googlebot scraped the literal Next.js route id `/[lang]/...` out of the
  // __NEXT_DATA__ blob and crawled it, producing a batch of bogus 404s in Search
  // Console. Those paths are never real links; 301 them onto the sv equivalent so
  // the errors clear and any stray equity lands on the live page. Runs before the
  // NB_LIVE guard so it applies regardless of the Norway rollout flag.
  if (firstSeg === '[lang]') {
    const rest = pathname.slice('/[lang]'.length); // '' | '/verktyg' | '/verktyg/tak-kalkylator'
    const to = new URL(url);
    to.pathname = `/sv${rest}`;
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
