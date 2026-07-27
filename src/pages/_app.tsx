import type { AppProps } from "next/app";

import "../styles/globals.scss";
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

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
