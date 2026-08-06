import { Head, Html, Main, NextScript } from "next/document";

const noindex = process.env.SITE_NOINDEX === "true";

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        {noindex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : null}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
