import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { PRICE_LINES } from "../HeroV2/HeroV2";
import { gaEvent } from "../../lib/analytics";
import { isFeatureArticle } from "../../content/feature-articles";

// Owner 2026-10-20: visitors from Google land on blog/tools and never see the
// home hero. Show the same hero, small, at the bottom: it can be collapsed to a
// one-line bar and closed (then hidden for 7 days). Swedish pages only, not on
// the home page itself. Owner 2026-10-21: we sell through a consultation, so
// the button goes to the lead form, not to admin registration.
const CLOSED_KEY = "bx-promo-closed";
const MIN_KEY = "bx-promo-min";
const WEEK = 7 * 24 * 3600 * 1000;

function read(key: string) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}
function write(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage blocked – banner just shows again next time */
  }
}

export default function PromoBanner() {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0].replace(/\/$/, "");
  // Owner 2026-10-21: only SEO blog articles (R11); tools sell via their own card (ToolAppCta).
  // R14 (owner 2026-10-28): never on pages about the service itself — feature articles included.
  const blogSlug = path.match(/^\/sv\/blog\/([^/]+)$/)?.[1];
  const eligible = !!blogSlug && !isFeatureArticle(blogSlug);

  const [show, setShow] = useState(false);
  const [min, setMin] = useState(false);
  const [open, setOpen] = useState([false, false]);

  useEffect(() => {
    if (!eligible) return;
    const closedAt = Number(read(CLOSED_KEY) || 0);
    if (Date.now() - closedAt < WEEK) return;
    // phones start as the one-line bar (less in the way); desktop opens the card
    const saved = read(MIN_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- restore the visitor's collapsed choice after hydration
    setMin(saved ? saved === "1" : window.innerWidth <= 600);

    let done = false;
    const reveal = () => {
      // wait until the cookie banner is answered so the two never stack
      if (done || !read("byggexp-consent")) return;
      done = true;
      setShow(true);
      gaEvent("promo_view", { page: path });
      cleanup();
    };
    const onScroll = () => {
      const h = document.documentElement;
      if (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) > 0.4) reveal();
    };
    const timer = window.setInterval(() => {
      if (performance.now() > 20000) reveal();
    }, 1000);
    window.addEventListener("scroll", onScroll, { passive: true });
    const cleanup = () => {
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(timer);
    };
    return cleanup;
  }, [eligible, path]);

  if (!eligible || !show) return null;

  const close = () => {
    write(CLOSED_KEY, String(Date.now()));
    setShow(false);
    gaEvent("promo_close", { page: path });
  };
  const toggleMin = () => {
    write(MIN_KEY, min ? "0" : "1");
    setMin(!min);
  };

  return (
    <aside className={`promo${min ? " is-min" : ""}`} aria-label="ByggExp">
      <div className="promo-bar">
        <button type="button" className="promo-title" onClick={toggleMin} aria-expanded={!min}>
          {min ? (
            <>
              ByggExp<span className="promo-from"> · från 299 kr/mån</span>
            </>
          ) : (
            "Hela byggföretaget på ett ställe"
          )}
        </button>
        <button type="button" className="promo-icon" onClick={toggleMin} aria-label={min ? "Visa" : "Minimera"}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{ transform: min ? "rotate(180deg)" : undefined }}>
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" className="promo-icon" onClick={close} aria-label="Stäng">
          ×
        </button>
      </div>

      {!min && (
        <div className="promo-body">
          <div className="promo-photos" aria-hidden="true">
            <img src="/landing/hero/kontor-promo.webp" alt="" className="promo-office" width={360} height={256} />
            <img src="/landing/hero/bygget-promo.webp" alt="" className="promo-site" width={160} height={220} />
          </div>
          <div className="promo-price">
            {PRICE_LINES.map((line, i) => (
              <p key={line.price} className={`promo-line${open[i] ? " is-open" : ""}`}>
                <span className="promo-line-text">
                  <strong>{line.price}</strong> – {line.items}
                </span>
                <button
                  type="button"
                  className="promo-more"
                  aria-expanded={open[i]}
                  onClick={() => setOpen(open.map((v, j) => (j === i ? !v : v)))}
                >
                  {open[i] ? "visa mindre" : "läs mer"}
                </button>
              </p>
            ))}
          </div>
          <a
            href="/sv#cta"
            className="promo-btn"
            onClick={() => gaEvent("promo_click", { page: path })}
          >
            Boka gratis konsultation
          </a>
          <ul className="promo-meta">
            <li>✓ 14 dagar gratis</li>
            <li>✓ Ingen bindningstid</li>
            <li>✓ Gratis flytt av data</li>
          </ul>
        </div>
      )}
    </aside>
  );
}
