// Single source of truth for the primary product CTA used across all tool/pillar
// pages. There is NO self-serve trial: the trial (14 days) is granted MANUALLY
// after a demo call, so the only primary CTA everywhere is "Boka demo" → /sv/contact.
// "14 dagar gratis" is used only as a TEXT hook (microcopy), never as its own button.
export const APP_CTA = {
  href: '/sv/contact',
  label: 'Boka demo',
} as const;
