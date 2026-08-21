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
      { source: "/sv/verktyg/skruv-kalkylator", destination: "/sv/verktyg/gips-kalkylator", statusCode: 301 },
      { source: "/sv/verktyg/armering-kalkylator", destination: "/sv/verktyg/betong-kalkylator", statusCode: 301 },
      { source: "/sv/verktyg/kakelfix-kalkylator", destination: "/sv/verktyg/golv-kalkylator", statusCode: 301 },
      { source: "/sv/verktyg/murbruk-kalkylator", destination: "/sv/verktyg", statusCode: 301 },

      // Clean vanity short links for marketing (YouTube, ads, print). The user
      // shares the pretty /go/... URL; the redirect appends UTM so GA4 attributes
      // the visit. Temporary (307) so a link can be re-pointed later without a
      // cached 301. Add one row per campaign.
      { source: "/go/verktyg", destination: "/en?utm_source=youtube&utm_medium=video&utm_campaign=tool-tracking", permanent: false },
      { source: "/go/tid", destination: "/en?utm_source=youtube&utm_medium=video&utm_campaign=time-tracking", permanent: false },
    ];
  },
  async headers() {
    const rules = [
      // Embeddable calculator widgets must be framable by ANY site. The VPS
      // nginx sends a global `X-Frame-Options: SAMEORIGIN`; CSP frame-ancestors
      // obsoletes and overrides XFO in modern browsers. (If a browser still
      // blocks, drop XFO for `location /sv/embed/` in the nginx config.)
      {
        source: "/:lang/embed/:slug*",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors *" },
        ],
      },
    ];
    if (!allowIndex) {
      rules.push({
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      });
    }
    return rules;
  },
};

export default nextConfig;
