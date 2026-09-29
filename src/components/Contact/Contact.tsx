import Link from "next/link";
import type { ContactProps } from "../../types/contact";
import type { CTAProps } from "../../types/cta";

// Kontaktsidan i samma enkla upplägg som remato.com/contact: mörk sida,
// person med foto + "Boka ett möte", telefon/mejl och länkar till appen.
// Ingen formulär- eller säljtext här — besökaren har redan bestämt sig.

const CALENDLY_URL = "https://calendly.com/870717ag/30min";
const PHONE_OFFICE = "+46 8 446 821 58";
const PHONE_MOBILE = "+46 70 757 75 75";
const APP_STORE = "https://apps.apple.com/se/app/id6748280779";
const GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=se.byggexp.app";
const YOUTUBE = "https://www.youtube.com/@byggexp";

const tel = (n: string) => `tel:${n.replace(/\s/g, "")}`;

type Props = ContactProps & CTAProps & { lang: string };

function Contact({ contactT: t, lang }: Props) {
  return (
    <div className="kontakt kontakt--simple">
      <section className="kx">
        <div className="kx-container">
          <nav className="kontakt-breadcrumbs kx-crumbs" aria-label="Breadcrumb">
            <Link href={`/${lang}`}>{t.breadcrumbHome}</Link>
            <span aria-hidden="true">/</span>
            <span className="kontakt-breadcrumbs-current">{t.eyebrow}</span>
          </nav>

          <h1 className="kx-title">{t.eyebrow}</h1>

          <div className="kx-people">
            <article className="kx-person">
              <img
                className="kx-photo"
                src="/landing/contact/alexander.webp"
                width={480}
                height={632}
                alt="Alexander Gerhard"
              />
              <div className="kx-person-body">
                <h2>Alexander Gerhard</h2>
                <p className="kx-role">{t.personRole}</p>
                <a className="kx-line" href={tel(PHONE_MOBILE)}>{PHONE_MOBILE}</a>
                <a className="kx-line" href="mailto:sales@byggexp.se">sales@byggexp.se</a>
                <a className="kx-book" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  {t.bookMeeting}
                </a>
              </div>
            </article>
          </div>

          <div className="kx-info">
            <div>
              <span className="kx-label">{t.callLabel}</span>
              <a href={tel(PHONE_OFFICE)}>{PHONE_OFFICE}</a>
              <span className="kx-muted">{t.callText}</span>
            </div>
            <div>
              <span className="kx-label">{t.mailLabel}</span>
              <a href="mailto:sales@byggexp.se">sales@byggexp.se</a>
              <a href="mailto:support@byggexp.se">support@byggexp.se</a>
            </div>
            <div>
              <span className="kx-label">{t.appsLabel}</span>
              <div className="kx-apps">
                <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="kx-app">
                  <img src="/landing/contact/icons/apple.svg" width={18} height={18} alt="" />
                  App Store
                </a>
                <a href={GOOGLE_PLAY} target="_blank" rel="noopener noreferrer" className="kx-app">
                  <img src="/landing/contact/icons/googleplay.svg" width={18} height={18} alt="" />
                  Google Play
                </a>
                <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="kx-app">
                  <img src="/landing/contact/icons/youtube.svg" width={18} height={18} alt="" />
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
