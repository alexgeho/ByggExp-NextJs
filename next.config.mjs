import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// The site is kept OUT of search engines by default (pre-launch review).
// Set SITE_ALLOW_INDEX=true at build time to allow indexing.
const allowIndex = process.env.SITE_ALLOW_INDEX === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: dirname,
  },
  // Clean, extensionless URLs for the store-required legal pages that live as
  // static HTML in /public.
  async rewrites() {
    return [
      { source: "/privacy", destination: "/privacy.html" },
      { source: "/terms", destination: "/terms.html" },
    ];
  },
  // Retired calculators merged into a flagship tool. 301 so Google replaces the
  // old (indexed) URL with the target instead of hitting a 404.
  async redirects() {
    return [
      { source: "/sv/verktyg/skruv-kalkylator", destination: "/sv/verktyg/gips-kalkylator", permanent: true },
      { source: "/sv/verktyg/armering-kalkylator", destination: "/sv/verktyg/betong-kalkylator", permanent: true },
      { source: "/sv/verktyg/kakelfix-kalkylator", destination: "/sv/verktyg/golv-kalkylator", permanent: true },
      { source: "/sv/verktyg/murbruk-kalkylator", destination: "/sv/verktyg", permanent: true },
    ];
  },
  async headers() {
    if (allowIndex) return [];
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
