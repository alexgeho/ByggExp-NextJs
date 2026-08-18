// Single go-live switch for the Norwegian (nb) site on byggexp.no.
//
// Norwegian translations live in the code (locale files + per-tool CONTENT), but
// nb pages must NOT be served publicly until byggexp.no is actually live with its
// own DNS + nginx + hreflang — otherwise Google would index Norwegian content on
// the byggexp.se domain (wrong ccTLD) or see canonicals pointing at a domain that
// doesn't resolve yet. Flip NB_LIVE to true in this one place at go-live.
export const NB_LIVE = false;

export const TOOL_LOCALES = ['sv', 'nb'] as const;
export type ToolLocale = (typeof TOOL_LOCALES)[number];

// True for locales a tool page may currently serve. sv is always on; nb only once
// the Norwegian site goes live. Use in getServerSideProps to 404 nb until then.
export function toolLocaleEnabled(lang: unknown): lang is ToolLocale {
  if (lang === 'sv') return true;
  if (lang === 'nb') return NB_LIVE;
  return false;
}
