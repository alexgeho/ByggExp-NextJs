// Thin wrappers around gtag. Safe to call anywhere — no-op if gtag isn't loaded
// (e.g. local dev, or before consent). GA itself is injected in _app.tsx.

type GtagArgs = unknown[];

function gtag(...args: GtagArgs) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...a: GtagArgs) => void };
  if (typeof w.gtag === "function") w.gtag(...args);
}

// Fire a GA4 event.
export function gaEvent(name: string, params: Record<string, unknown> = {}) {
  gtag("event", name, params);
}

// Google Consent Mode v2 — flip analytics/ads storage on accept.
export function gaConsentGrant() {
  gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
}

export function gaConsentDeny() {
  gtag("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}
