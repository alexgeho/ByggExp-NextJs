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
      //
      // One per site feature page (/sv/funktioner). campaign = short feature slug.
      { source: "/go/offert", destination: "/sv/blog/skapa-offert-i-byggexp?utm_source=youtube&utm_medium=video&utm_campaign=offert", permanent: false },
      { source: "/go/faktura", destination: "/sv/blog/fakturera-fran-byggexp?utm_source=youtube&utm_medium=video&utm_campaign=faktura", permanent: false },
      { source: "/go/lon", destination: "/sv/blog/loneunderlag-for-byggforetag?utm_source=youtube&utm_medium=video&utm_campaign=lon", permanent: false },
      { source: "/go/ekonomi", destination: "/sv/blog/projektekonomi-och-lonsamhet?utm_source=youtube&utm_medium=video&utm_campaign=ekonomi", permanent: false },
      { source: "/go/tid", destination: "/sv/blog/automatisk-tidrapportering-och-export?utm_source=youtube&utm_medium=video&utm_campaign=tidrapportering", permanent: false },
      { source: "/go/narvaro", destination: "/sv/blog/narvaro-och-incheckning-pa-bygget?utm_source=youtube&utm_medium=video&utm_campaign=narvaro", permanent: false },
      { source: "/go/uppgifter", destination: "/sv/blog/hantera-uppgifter-i-byggprojekt?utm_source=youtube&utm_medium=video&utm_campaign=uppgifter", permanent: false },
      { source: "/go/paminnelser", destination: "/sv/blog/paminnelser-uppgifter-och-deadlines?utm_source=youtube&utm_medium=video&utm_campaign=paminnelser", permanent: false },
      { source: "/go/planering", destination: "/sv/blog/dagsplanering-och-planeringsmoten?utm_source=youtube&utm_medium=video&utm_campaign=planering", permanent: false },
      { source: "/go/foto", destination: "/sv/blog/dokumentera-med-foton-pa-bygget?utm_source=youtube&utm_medium=video&utm_campaign=foto", permanent: false },
      { source: "/go/kvitton", destination: "/sv/blog/fota-kvitton-och-hantera-utlagg?utm_source=youtube&utm_medium=video&utm_campaign=kvitton", permanent: false },
      { source: "/go/verktyg", destination: "/sv/blog/hantera-verktyg-och-utrustning?utm_source=youtube&utm_medium=video&utm_campaign=verktyg", permanent: false },
      // Video-only links without a dedicated feature page.
      { source: "/go/projekt", destination: "/en?utm_source=youtube&utm_medium=video&utm_campaign=create-project", permanent: false },
      { source: "/go/timmar", destination: "/sv/blog/automatisk-tidrapportering-och-export?utm_source=youtube&utm_medium=video&utm_campaign=manuell-tid", permanent: false },
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
