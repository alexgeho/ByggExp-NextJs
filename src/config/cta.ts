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
