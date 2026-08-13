import type { AppProps } from "next/app";
import Script from "next/script";

import CookieConsent from "../components/CookieConsent/CookieConsent";
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

// GA4 Measurement ID for byggexp.se. Rendered unconditionally (so SSR and the
// client agree — a NODE_ENV gate broke on the VPS where runtime NODE_ENV isn't
// "production"). Dev traffic is kept out by only calling gtag('config') on the
// live host, and Consent Mode defaults to denied until the visitor accepts.
const GA_ID = "G-551T40R4WV";
const GA_HOST = "byggexp.se";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
if (location.hostname === '${GA_HOST}') {
  gtag('config', '${GA_ID}');
}`}
      </Script>
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}
