import type { HeroProps } from "../../types/hero";
import { useState, type FormEvent } from "react";
import { API_URL } from "../../config/api";
import {
  NO_LEAD_FORM_ERRORS,
  buildContactLeadPayload,
  hasLeadFormErrors,
  isValidContact,
  validateContactLeadForm,
} from "../../lib/leadForm";

// Bygglet-mönstret: boka demo direkt i hero, utan att scrolla till formuläret längst ner.
// Samma regel som alla leadformulär: "Namn / företag" + "Telefon / e-post".
function HeroLeadForm({ ctaT, id }: { ctaT: NonNullable<HeroProps["ctaT"]>; id: string }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState(NO_LEAD_FORM_ERRORS);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validateContactLeadForm(name, contact);
    setErrors(next);
    if (hasLeadFormErrors(next)) return;
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch(`${API_URL}/mail/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildContactLeadPayload(name, contact, "hero")),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="hero-form-done" role="status">
        <strong>{ctaT.ctaSuccessTitle}</strong>
        <span>{ctaT.ctaSuccessText}</span>
      </div>
    );
  }

  return (
    <form className="hero-form" onSubmit={onSubmit} noValidate>
      <label htmlFor={`${id}-name`} className="sr-only">{ctaT.ctaNameLabel}</label>
      <input
        id={`${id}-name`}
        type="text"
        autoComplete="organization"
        placeholder={ctaT.ctaNameLabel}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          if (errors.name && e.target.value.trim()) setErrors((p) => ({ ...p, name: false }));
        }}
        aria-invalid={errors.name}
        className={errors.name ? "error" : undefined}
      />
      <label htmlFor={`${id}-contact`} className="sr-only">{ctaT.ctaEmailError}</label>
      <input
        id={`${id}-contact`}
        type="text"
        inputMode="email"
        autoComplete="email"
        placeholder="Telefon / e-post"
        value={contact}
        onChange={(e) => {
          setContact(e.target.value);
          if (errors.email && isValidContact(e.target.value)) setErrors((p) => ({ ...p, email: false }));
        }}
        aria-invalid={errors.email}
        className={errors.email ? "error" : undefined}
      />
      <button type="submit" className="btn-primary" disabled={sending}>
        {sending ? ctaT.ctaButtonSending : ctaT.ctaButton}
      </button>
      {(errors.name || errors.email || failed) && (
        <p className="hero-form-error" role="alert">
          {failed ? ctaT.ctaSubmitError : errors.name ? ctaT.ctaNameError : ctaT.ctaEmailError}
        </p>
      )}
    </form>
  );
}

const phone = "/landing/hero/phone-3d.webp";
const laptop = "/landing/features/9ekonomi-1200.webp";

function Hero({ heroT, ctaT }: HeroProps) {
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
              {ctaT ? (
                <>
                  <HeroLeadForm ctaT={ctaT} id="hero-d" />
                  <a href="#features" className="hero-how-link">{heroT.heroHow} →</a>
                </>
              ) : (
                <div className="hero-ctas">
                  <a href="#cta" className="btn-primary">{heroT.heroDemo}</a>
                  <a href="#features" className="btn-ghost">{heroT.heroHow}</a>
                </div>
              )}
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
            <img
              src={laptop}
              srcSet={`${laptop} 1200w, /landing/features/9ekonomi.webp 2400w`}
              sizes="(max-width: 900px) 90vw, 720px"
              alt="ByggExp på webben – projektekonomi"
              className="hero-laptop"
              width={1200}
              height={688}
              fetchPriority="high"
            />
            <img
              src={phone}
              alt="ByggExp-appen i mobilen"
              className="hero-phone"
              width={1200}
              height={1504}
              fetchPriority="high"
            />
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
          {ctaT ? (
                <>
                  <HeroLeadForm ctaT={ctaT} id="hero-m" />
                  <a href="#features" className="hero-how-link">{heroT.heroHow} →</a>
                </>
              ) : (
                <div className="hero-ctas">
                  <a href="#cta" className="btn-primary">{heroT.heroDemo}</a>
                  <a href="#features" className="btn-ghost">{heroT.heroHow}</a>
                </div>
              )}
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
