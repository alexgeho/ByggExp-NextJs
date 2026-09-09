import { Head, Html, Main, NextScript } from "next/document";

// Default: block indexing. Set SITE_ALLOW_INDEX=true to allow search engines.
const allowIndex = process.env.SITE_ALLOW_INDEX === "true";

// GA4 — one property per market. Placed in <Head> (Google's recommended spot) so
// it's in the served HTML on every page. Consent Mode defaults to denied until the
// visitor accepts; gtag('config') only runs on the matching live host so local/
// preview traffic isn't tracked and SE/NO traffic lands in separate properties.
const GA_SE_ID = "G-551T40R4WV"; // byggexp.se property
const GA_NO_ID = "G-GGT1EWGRCR"; // byggexp.no property (ByggExp NO)
// The gtag.js loader tag can carry any one id; both configs are fired below and GA
// routes each hit to whichever property the gtag('config') call names.
const GA_LOADER_ID = GA_SE_ID;
const GA_INLINE = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
gtag('js', new Date());
if (location.hostname === 'byggexp.se') { gtag('config', '${GA_SE_ID}'); }
if (location.hostname === 'byggexp.no') { gtag('config', '${GA_NO_ID}'); }`;

// Site-wide Organization schema — helps Google build a knowledge entity for the
// brand (name, logo, site). Emitted on every page.
const ORG_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ByggExp",
  url: "https://byggexp.se",
  logo: "https://byggexp.se/logo.png",
  description:
    "Bygglednings- och projektstyrningsprogram för byggföretag: tidrapportering, projektekonomi, offert, faktura och personalliggare.",
});

// Site-wide WebSite schema — declares the site entity + its name for Google
// (helps sitelinks and brand SERP). No SearchAction/potentialAction: the site
// search is a header dropdown that navigates straight to result URLs, so there's
// no `?q=` results page to bind a Sitelinks Searchbox to. Add SearchAction here
// only once a `/sv/sok?q={search_term_string}` results page exists.
const WEBSITE_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ByggExp",
  url: "https://byggexp.se",
  inLanguage: "sv-SE",
  publisher: { "@type": "Organization", name: "ByggExp", url: "https://byggexp.se" },
});

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        {allowIndex ? null : (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_LOADER_ID}`}
        />
        <script dangerouslySetInnerHTML={{ __html: GA_INLINE }} />
        {allowIndex ? (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: ORG_SCHEMA }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: WEBSITE_SCHEMA }}
            />
          </>
        ) : null}
        {/* Global social defaults — page-level Head tags override these. Ensures
            every page (incl. the 61 calculators that only set og:title) has an
            og:image + twitter card so shares render with a preview. */}
        <meta property="og:site_name" content="ByggExp" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://byggexp.se/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://byggexp.se/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
