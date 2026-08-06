import { Head, Html, Main, NextScript } from "next/document";

// Default: block indexing. Set SITE_ALLOW_INDEX=true to allow search engines.
const allowIndex = process.env.SITE_ALLOW_INDEX === "true";

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        {allowIndex ? null : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
