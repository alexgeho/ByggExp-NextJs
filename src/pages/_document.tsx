import { Head, Html, Main, NextScript } from "next/document";

// Default: block indexing. Set SITE_ALLOW_INDEX=true to allow search engines.
const allowIndex = process.env.SITE_ALLOW_INDEX === "true";

// GA4 for byggexp.se. Placed in <Head> (Google's recommended spot) so it's in
// the served HTML on every page. Consent Mode defaults to denied until the
// visitor accepts; gtag('config') only runs on the live host so local/preview
// traffic isn't tracked.
const GA_ID = "G-551T40R4WV";
const GA_HOST = "byggexp.se";
const GA_INLINE = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
gtag('js', new Date());
if (location.hostname === '${GA_HOST}') { gtag('config', '${GA_ID}'); }`;

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

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        {allowIndex ? null : (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script dangerouslySetInnerHTML={{ __html: GA_INLINE }} />
        {allowIndex ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: ORG_SCHEMA }}
          />
        ) : null}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
