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

// Microsoft Clarity — session recordings + heatmaps. Unlike GA (which loads with
// consent denied by default), Clarity records sessions, so we inject it ONLY
// after the visitor grants consent, and only on the live host. The project id
// comes from NEXT_PUBLIC_CLARITY_ID; if it's unset this is a no-op.
const CLARITY_HOST = "byggexp.se";

export function loadClarity() {
  if (typeof window === "undefined") return;
  const id = process.env.NEXT_PUBLIC_CLARITY_ID;
  if (!id) return;
  if (window.location.hostname !== CLARITY_HOST) return;

  const w = window as unknown as {
    __clarityLoaded?: boolean;
    clarity?: ((...a: unknown[]) => void) & { q?: unknown[] };
  };
  if (w.__clarityLoaded) return;
  w.__clarityLoaded = true;

  w.clarity =
    w.clarity ||
    function (...a: unknown[]) {
      (w.clarity!.q = w.clarity!.q || []).push(a);
    };
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${id}`;
  const first = document.getElementsByTagName("script")[0];
  first?.parentNode?.insertBefore(script, first);
}
