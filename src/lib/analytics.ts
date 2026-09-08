// Thin wrappers around gtag. Safe to call anywhere — no-op if gtag isn't loaded
// (e.g. local dev, or before consent). GA itself is injected in _app.tsx.

type GtagArgs = unknown[];

function gtag(...args: GtagArgs) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...a: GtagArgs) => void };
  if (typeof w.gtag === "function") w.gtag(...args);
}

// Fire a GA4 event. Also forwards to Meta Pixel (fbq) as a custom event when the
// pixel is loaded, so retargeting audiences are built from the SAME funnel events
// (tool_view / cta_click / tool_lead_submit …) with zero extra call-site wiring.
// fbq is a no-op until loadMetaPixel() runs (after ad-storage consent).
export function gaEvent(name: string, params: Record<string, unknown> = {}) {
  gtag("event", name, params);
  if (typeof window !== "undefined") {
    const w = window as unknown as { fbq?: (...a: unknown[]) => void };
    if (typeof w.fbq === "function") w.fbq("trackCustom", name, params);
  }
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

// Retargeting pixels — Meta (fbq) + optional GTM/LinkedIn. Loaded ONLY after the
// visitor grants consent (ad_storage), and only on the live host — same pattern as
// Clarity. Each is gated by its own env id, so nothing loads until the owner sets
// it (see docs/seo/retargeting-plan.md [OWNER]: pixel/partner ids).
const AD_HOST = "byggexp.se";

// Meta Pixel — base code + PageView. Audiences are then built from the funnel
// events forwarded by gaEvent() (trackCustom). No-op until NEXT_PUBLIC_META_PIXEL_ID
// is set and consent granted.
export function loadMetaPixel() {
  if (typeof window === "undefined") return;
  const id = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!id) return;
  if (window.location.hostname !== AD_HOST) return;

  const w = window as unknown as {
    __fbpLoaded?: boolean;
    fbq?: ((...a: unknown[]) => void) & {
      callMethod?: (...a: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: unknown;
    };
    _fbq?: unknown;
  };
  if (w.__fbpLoaded) return;
  w.__fbpLoaded = true;

  const n: NonNullable<typeof w.fbq> = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args);
    else (n.queue = n.queue || []).push(args);
  } as NonNullable<typeof w.fbq>;
  if (!w._fbq) w._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  w.fbq = n;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  const first = document.getElementsByTagName("script")[0];
  first?.parentNode?.insertBefore(script, first);

  w.fbq("init", id);
  w.fbq("track", "PageView");
}

// Optional GTM container — for teams that manage LinkedIn/other tags via GTM.
// No-op until NEXT_PUBLIC_GTM_ID is set + consent granted.
export function loadGtm() {
  if (typeof window === "undefined") return;
  const id = process.env.NEXT_PUBLIC_GTM_ID;
  if (!id) return;
  if (window.location.hostname !== AD_HOST) return;
  const w = window as unknown as { __gtmLoaded?: boolean; dataLayer?: unknown[] };
  if (w.__gtmLoaded) return;
  w.__gtmLoaded = true;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": Number(new Date()), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  const first = document.getElementsByTagName("script")[0];
  first?.parentNode?.insertBefore(script, first);
}

// Load all consent-gated retargeting pixels. Call after ad_storage is granted.
export function loadRetargeting() {
  loadMetaPixel();
  loadGtm();
}

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
