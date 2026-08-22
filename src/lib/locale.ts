// Single go-live switch for the Norwegian (nb) site on byggexp.no.
//
// Norwegian translations live in the code (locale files + per-tool CONTENT), but
// nb pages must NOT be served publicly until byggexp.no is actually live with its
// own DNS + nginx + hreflang — otherwise Google would index Norwegian content on
// the byggexp.se domain (wrong ccTLD) or see canonicals pointing at a domain that
// doesn't resolve yet. Flip NB_LIVE to true in this one place at go-live.
export const NB_LIVE = true;

// Separate from NB_LIVE: true only once byggexp.no DNS is delegated AND the host
// actually serves the nb site. Until then byggexp.no does not resolve, so we must
// NOT emit nb hreflang/canonical alternates anywhere — they would point Google at
// a dead host across the whole byggexp.se site. Flip to true once
// `dig byggexp.no A` resolves and https://byggexp.no serves. (2026-08-20: still
// pendingdelegation → kept false.)
export const NO_DOMAIN_LIVE = true;

export const TOOL_LOCALES = ['sv', 'nb'] as const;
export type ToolLocale = (typeof TOOL_LOCALES)[number];

// True for locales a tool page may currently serve. sv is always on; nb only once
// the Norwegian site goes live. Use in getServerSideProps to 404 nb until then.
export function toolLocaleEnabled(lang: unknown): lang is ToolLocale {
  if (lang === 'sv') return true;
  if (lang === 'nb') return NB_LIVE;
  return false;
}
