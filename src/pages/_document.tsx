import { Head, Html, Main, NextScript, type DocumentProps } from "next/document";

import { landingLanguageCodes, type LandingLanguageCode } from "../locales/languages";

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
  legalName: "RealMar AB",
  url: "https://byggexp.se",
  logo: "https://byggexp.se/icon-512.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bromma",
    addressRegion: "Stockholm",
    addressCountry: "SE",
  },
  sameAs: ["https://www.youtube.com/@byggexp"],
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

// <html lang> follows the /[lang]/ route segment so en/ru/pl… pages aren't
// declared Swedish; anything without a locale segment falls back to sv.
function htmlLang(props: DocumentProps): LandingLanguageCode {
  const lang = props.__NEXT_DATA__?.query?.lang;
  return typeof lang === "string" && landingLanguageCodes.includes(lang as LandingLanguageCode)
    ? (lang as LandingLanguageCode)
    : "sv";
}

export default function Document(props: DocumentProps) {
  return (
    <Html lang={htmlLang(props)}>
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
        {/* Favicon = the ByggExp app icon (from byggexp-app/src/assets/icon.png). */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Global social defaults — page-level Head tags override these. Ensures
            every page (incl. the 61 calculators that only set og:title) has an
            og:image + twitter card so shares render with a preview. */}
        <meta property="og:site_name" content="ByggExp" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://byggexp.se/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://byggexp.se/og-default.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
