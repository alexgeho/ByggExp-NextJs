export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "https://api.byggexp.se";

export const PUBLISH_API_URL =
  process.env.NEXT_PUBLIC_PUBLISH_API_URL?.replace(/\/$/, "") ||
  "https://publish-core.onrender.com";

export const PUBLISH_SITE_ID =
  process.env.NEXT_PUBLIC_PUBLISH_SITE_ID || "byggexp-next";

export const ADMIN_URL =
  process.env.NEXT_PUBLIC_ADMIN_URL?.replace(/\/$/, "") ||
  "https://admin.byggexp.se";
