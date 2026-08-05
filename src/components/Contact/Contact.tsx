import { useState, type FormEvent, type ChangeEvent } from "react";
import { API_URL } from "../../config/api";
import type { ContactProps } from "../../types/contact";
import type { CTAProps } from "../../types/cta";
import { CalendlyInlineWidget } from "../CalendlyInlineWidget";

const CALENDLY_URL = "https://calendly.com/870717ag/30min";

const EMAIL_SUPPORT = "support@byggexp.se";
const EMAIL_SALES = "sales@byggexp.se";
const EMAIL_PRESS = "press@byggexp.se";
const PHONE_1 = "+46 70 757 75 75";
const PHONE_2 = "+46 81 241 02 76";
const WHATSAPP_NUMBER = "+46 70 757 75 75";
const ADDRESS = "Byggmästarvägen 18, 168 32 Bromma, Sweden";

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;
const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

function Contact({ contactT, ctaT, lang = "sv" }: ContactProps & CTAProps) {
  /* ON SUBMIT/SUCCESS */
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  /* INPUTS */
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [accepted, setAccepted] = useState(false);

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }
  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(event.currentTarget.value);
  }
  function handleMessageChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.currentTarget.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !phone.trim() || !accepted) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch(`${API_URL}/mail/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "f-name": email.split("@")[0] || "Website",
          "f-email": email,
          "f-phone": phone,
          "f-message": message,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setIsSuccess(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="cx">
      {/* HERO */}
      <div className="cx-hero">
        <div className="container">
          <span className="cx-badge">{contactT.contactBadge}</span>
          <h1>{contactT.contactTitle}</h1>
          <p className="cx-hero-sub">{contactT.contactSubtitle}</p>
        </div>
      </div>

      {/* BODY */}
      <div className="cx-body">
        <div className="container">
          <div className="cx-grid">
            {/* LEFT — blue info card */}
            <div className="cx-info">
              <div className="cx-info-head">
                <span className="cx-info-pill">{contactT.contactGetInTouch}</span>
                <h2>{contactT.contactDetailsHeading}</h2>
                <p className="cx-info-sub">{contactT.contactManagers}</p>
              </div>

              <div className="cx-info-groups">
                {/* EMAIL */}
                <div className="cx-info-group">
                  <span className="cx-info-label">
                    <span className="cx-info-ic"><MailIcon /></span>
                    {contactT.contactEmailLabel}
                  </span>
                  <ul>
                    <li>
                      <span className="cx-info-key">{contactT.contactEmailSupport}</span>
                      <a href={`mailto:${EMAIL_SUPPORT}`}>{EMAIL_SUPPORT}</a>
                    </li>
                    <li>
                      <span className="cx-info-key">{contactT.contactEmailConsult}</span>
                      <a href={`mailto:${EMAIL_SALES}`}>{EMAIL_SALES}</a>
                    </li>
                    <li>
                      <span className="cx-info-key">{contactT.contactEmailPress}</span>
                      <a href={`mailto:${EMAIL_PRESS}`}>{EMAIL_PRESS}</a>
                    </li>
                  </ul>
                </div>

                {/* PHONE */}
                <div className="cx-info-group">
                  <span className="cx-info-label">
                    <span className="cx-info-ic"><PhoneIcon /></span>
                    {contactT.contactPhoneLabel}
                  </span>
                  <ul>
                    <li>
                      <span className="cx-info-key">{contactT.contactPhoneSupport}</span>
                      <a href={`tel:${PHONE_1.replace(/\s/g, "")}`}>{PHONE_1}</a>
                    </li>
                    <li>
                      <span className="cx-info-key">{contactT.contactPhoneOffice}</span>
                      <a href={`tel:${PHONE_2.replace(/\s/g, "")}`}>{PHONE_2}</a>
                    </li>
                    <li>
                      <span className="cx-info-key">{contactT.contactHoursLabel}</span>
                      <span className="cx-info-val">{contactT.contactHours}</span>
                    </li>
                  </ul>
                </div>

                {/* ADDRESS */}
                <div className="cx-info-group">
                  <span className="cx-info-label">
                    <span className="cx-info-ic"><PinIcon /></span>
                    {contactT.contactAddressLabel}
                  </span>
                  <p className="cx-info-address">{ADDRESS}</p>
                </div>
              </div>

              {/* CHAT */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="cx-info-chat"
              >
                <ChatIcon />
                <span className="cx-info-chat-label">
                  {contactT.contactChatLabel} · WhatsApp
                </span>
                <svg className="cx-info-chat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            {/* RIGHT — form card */}
            <div className="cx-form-card">
              {!isSuccess && (
                <>
                  <h2>{contactT.contactFormHeading}</h2>

                  <form noValidate onSubmit={handleSubmit} className="cx-form">
                    <div className="cx-form-row">
                      <input
                        id="cx-email"
                        name="email"
                        type="email"
                        placeholder={contactT.contactEmailPlaceholder}
                        autoComplete="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <input
                        id="cx-phone"
                        name="phone"
                        type="tel"
                        placeholder={contactT.contactPhonePlaceholder}
                        autoComplete="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>

                    <textarea
                      id="cx-message"
                      name="message"
                      rows={6}
                      placeholder={contactT.contactMessagePlaceholder}
                      value={message}
                      onChange={handleMessageChange}
                    />

                    <label className="cx-checkbox">
                      <input
                        type="checkbox"
                        checked={accepted}
                        onChange={(e) => setAccepted(e.currentTarget.checked)}
                      />
                      <span>
                        {contactT.contactPrivacyText}{" "}
                        <a href={`/${lang}/integritetspolicy`}>
                          {contactT.contactPrivacyLink}
                        </a>
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="cx-submit"
                      disabled={isSubmitting || !accepted}
                    >
                      {isSubmitting
                        ? ctaT.ctaButtonSending
                        : contactT.contactSendButton}
                    </button>

                    {submitError && (
                      <p className="cx-form-error">{ctaT.ctaSubmitError}</p>
                    )}
                  </form>

                  <p className="cx-form-note">{contactT.contactFormNote}</p>
                </>
              )}

              {isSuccess && (
                <div className="cx-success">
                  <div className="cx-success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3>{ctaT.ctaSuccessTitle}</h3>
                  <p>{ctaT.ctaSuccessText}</p>
                  <p className="cx-success-hint">{ctaT.ctaSuccessCalendlyHint}</p>

                  <div className="cx-calendly">
                    <CalendlyInlineWidget
                      url={CALENDLY_URL}
                      prefill={{
                        email,
                        customAnswers: { a1: phone },
                      }}
                      styles={{ height: "650px" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* MAP */}
          <div className="cx-map">
            <iframe
              title={contactT.contactMapLabel}
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
