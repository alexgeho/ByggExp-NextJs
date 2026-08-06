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
