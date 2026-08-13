import type { AppProps } from "next/app";
import Script from "next/script";

import 'quill/dist/quill.snow.css';
import "../styles/globals.scss";
import "../styles/blog.scss";
import "../styles/blog-admin.scss";
import "../styles/lead-magnet.scss";
import "../components/Header/Header.scss";
import "../components/Hero/Hero.scss";
import "../components/Pain/Pain.scss";
import "../components/Benefits/Benefits.scss";
import "../components/Features/Features.scss";
import "../components/FinalBenefits/FinalBenefits.scss";
import "../components/Pricing/Pricing.scss";
import "../components/CTA/CTA.scss";
import "../components/Footer/Footer.scss";
import "../components/Contact/Contact.scss";

// GA4 Measurement ID for byggexp.se. Loaded only in production so local dev
// traffic doesn't pollute the analytics data.
const GA_ID = "G-551T40R4WV";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NODE_ENV === "production" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      ) : null}
      <Component {...pageProps} />
    </>
  );
}
