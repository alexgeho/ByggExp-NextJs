import type { HeroProps } from "../../types/hero";
import { useState } from "react";

const phone = "/landing/hero/phone-3d.webp";

function Hero({ heroT }: HeroProps) {
  const [wholeText, setWholeText] = useState(false);

  return (
    <section className="hero">
      <div className="container">
        {/* PILL MOBILE */}
        <span className="pill-mobile">
          <span className="pill-dot-mobile">●</span>
          {heroT.heroPill}
        </span>

        <div className="hero-inner">
          {/* HERO CONTENT */}
          <div className="hero-content">
            {/* PILL-DESKTOP */}
            <span className="pill-desktop">
              <span className="pill-dot"></span>
              {heroT.heroPill}
            </span>

            {/* TITLE */}
            <h1>
              {heroT.heroTitle}
              <em> {heroT.heroTitleAccent}</em>
            </h1>

            {/* FOOTER - DESKTOP */}
            <div className="footer-desktop">
              {/* SUB */}
              <div className="hero-sub">
                <span>
                  {wholeText ? heroT.heroSubtitle : heroT.heroSubtitleShort}
                </span>

                <button
                  type="button"
                  className="hero-sub-toggle"
                  onClick={() => setWholeText(!wholeText)}
                >
                  {wholeText
                    ? heroT.heroSubtitleBtnLess
                    : heroT.heroSubtitleBtnMore}
                </button>
              </div>

              {/* CTAs */}
              <div className="hero-ctas">
                <a href="#cta" className="btn-primary">
                  {heroT.heroDemo}
                </a>
                <a href="#features" className="btn-ghost">
                  {heroT.heroHow}
                </a>
              </div>
              {/* META */}
              <div className="hero-meta">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {heroT.heroFeature1}
                </span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {heroT.heroFeature2}
                </span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {heroT.heroFeature3}
                </span>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">
            <img src={phone} alt="Byggexp mobile" className="hero-phone" />
          </div>
        </div>

        {/* FOOTER - MOBILE */}
        <div className="footer-mobile">
          {" "}
          <div className="hero-sub">
            <span>
              {wholeText ? heroT.heroSubtitle : heroT.heroSubtitleShort}
            </span>

            <button
              type="button"
              className="hero-sub-toggle"
              onClick={() => setWholeText(!wholeText)}
            >
              {wholeText
                ? heroT.heroSubtitleBtnLess
                : heroT.heroSubtitleBtnMore}
            </button>
          </div>
          <div className="hero-ctas">
            <a href="#cta" className="btn-primary">
              {heroT.heroDemo}
            </a>
            <a href="#features" className="btn-ghost">
              {heroT.heroHow}
            </a>
          </div>
          {/* META */}
          <div className="hero-meta">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {heroT.heroFeature1}
            </span>
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {heroT.heroFeature2}
            </span>
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {heroT.heroFeature3}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
