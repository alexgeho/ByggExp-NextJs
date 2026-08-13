import type { AppProps } from "next/app";

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

// GA4 tag lives in _document (<Head>); consent + custom events are handled by
// CookieConsent.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}
