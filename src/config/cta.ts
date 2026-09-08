// Single source of truth for the primary product CTA used across all free-tool
// pages (ToolAppCta). Today it points at the demo/contact route, which is the
// real conversion entry point.
//
// When a direct trial/signup URL exists (e.g. https://app.byggexp.se/register),
// change APP_CTA here ONCE and every tool CTA site-wide switches to it. Use an
// absolute URL for an external app host.
export const APP_CTA = {
  href: '/sv/contact',
  label: 'Boka demo',
} as const;

// Self-serve trial CTA — the primary, higher-intent action on tool/pillar pages.
// Points at the public register/trial URL when one exists. Set it ONCE via the
// env var NEXT_PUBLIC_TRIAL_URL (e.g. https://app.byggexp.se/register) and the
// "Testa gratis" primary button activates site-wide. Until the register host is
// live it falls back to the demo/contact route, so there are never dead links.
// NOTE (2026-09-08): app.byggexp.se does NOT resolve yet (NXDOMAIN) → owner must
// provide the real public trial URL. See docs/seo/next-level-worklog.md [OWNER].
export const TRIAL_CTA = {
  href: process.env.NEXT_PUBLIC_TRIAL_URL || APP_CTA.href,
  label: 'Testa gratis',
} as const;

// True only when a real external trial URL is configured. Used to decide whether
// the trial button opens in a new tab (external app) and to keep analytics honest.
export const HAS_TRIAL_URL = Boolean(process.env.NEXT_PUBLIC_TRIAL_URL);
