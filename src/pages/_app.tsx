import type { AppProps } from "next/app";
import { useEffect } from "react";

import SiteChat from "../components/ChatAssistant/SiteChat";
import CookieConsent from "../components/CookieConsent/CookieConsent";
import { installDownloadTracking } from "../lib/downloadTracking";
import 'quill/dist/quill.snow.css';
import "../styles/globals.scss";
import "../styles/blog.scss";
import "../styles/funktioner.scss";
import "../styles/blog-admin.scss";
import "../styles/lead-magnet.scss";
import "../components/Header/Header.scss";
import "../components/SiteSearch/SiteSearch.scss";
import "../components/Hero/Hero.scss";
import "../components/Pain/Pain.scss";
import "../components/Benefits/Benefits.scss";
import "../components/Features/Features.scss";
import "../components/FinalBenefits/FinalBenefits.scss";
import "../components/Pricing/Pricing.scss";
import "../components/CTA/CTA.scss";
import "../components/Footer/Footer.scss";
import "../components/Contact/Contact.scss";
import "../components/ChatAssistant/ChatAssistant.scss";

// GA4 tag lives in _document (<Head>); consent + custom events are handled by
// CookieConsent.
export default function App({ Component, pageProps }: AppProps) {
  // Count every tool download (PDF/Excel/…) site-wide — see lib/downloadTracking.
  useEffect(() => {
    installDownloadTracking();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <CookieConsent />
      <SiteChat />
    </>
  );
}
