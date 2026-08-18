import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { gaConsentDeny, gaConsentGrant, gaEvent, loadClarity } from "../../lib/analytics";

const KEY = "byggexp-consent";

type Lang = "sv" | "en" | "ru";

const COPY: Record<Lang, { text: string; accept: string; decline: string; policy: string }> = {
  sv: {
    text: "Vi använder cookies för webbanalys (Google Analytics, Microsoft Clarity) för att förbättra sajten. Du väljer själv.",
    accept: "Acceptera",
    decline: "Neka",
    policy: "Integritetspolicy",
  },
  en: {
    text: "We use cookies for web analytics (Google Analytics, Microsoft Clarity) to improve the site. Your choice.",
    accept: "Accept",
    decline: "Decline",
    policy: "Privacy policy",
  },
  ru: {
    text: "Мы используем cookie для веб-аналитики (Google Analytics, Microsoft Clarity), чтобы улучшать сайт. Решать вам.",
    accept: "Принять",
    decline: "Отклонить",
    policy: "Политика конфиденциальности",
  },
};

export default function CookieConsent() {
  const router = useRouter();
  const seg = router.asPath.split("/")[1];
  const lang: Lang = seg === "en" || seg === "ru" ? seg : "sv";
  const copy = COPY[lang];

  const [open, setOpen] = useState(false);

  // Show the banner only if no prior choice; re-grant consent for returning
  // visitors who already accepted.
  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved === "granted") {
      gaConsentGrant();
      loadClarity();
    } else if (!saved) setOpen(true);
  }, []);

  // Delegated click tracking — one listener for "Boka demo" and tool downloads,
  // so no per-component wiring. No-ops until consent grants gtag storage.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement)?.closest?.("a,button") as HTMLElement | null;
      if (!el) return;
      const txt = (el.textContent || "").trim().toLowerCase();
      const href = el.getAttribute?.("href") || "";
      const cls = typeof el.className === "string" ? el.className : "";

      if (cls.includes("nav-cta") || href.includes("#cta") || href.includes("/contact") || /boka demo|book a demo|демо/.test(txt)) {
        gaEvent("book_demo", { location: href || cls });
        return;
      }
      if ((cls.includes("lm-tool-button") || cls.includes("lm-tool-secondary")) && /ladda ner|pdf|excel/.test(txt)) {
        gaEvent("file_download", { file: window.location.pathname, label: txt });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function choose(granted: boolean) {
    localStorage.setItem(KEY, granted ? "granted" : "denied");
    if (granted) {
      gaConsentGrant();
      loadClarity();
    } else gaConsentDeny();
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite">
      <p className="cookie-consent__text">
        {copy.text}{" "}
        <Link href={`/${lang}/integritetspolicy`}>{copy.policy}</Link>
      </p>
      <div className="cookie-consent__actions">
        <button type="button" className="cookie-consent__decline" onClick={() => choose(false)}>
          {copy.decline}
        </button>
        <button type="button" className="cookie-consent__accept" onClick={() => choose(true)}>
          {copy.accept}
        </button>
      </div>

      <style jsx>{`
        .cookie-consent {
          position: fixed;
          left: 16px;
          right: 16px;
          bottom: 16px;
          z-index: 9999;
          max-width: 560px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px 16px;
          padding: 16px 18px;
          background: #0b2545;
          color: #fff;
          border-radius: 14px;
          box-shadow: 0 18px 50px -18px rgba(0, 0, 0, 0.5);
          font-size: 14px;
          line-height: 1.5;
        }
        .cookie-consent__text {
          flex: 1 1 260px;
          margin: 0;
        }
        .cookie-consent :global(a) {
          color: #7db4ff;
          text-decoration: underline;
        }
        .cookie-consent__actions {
          display: flex;
          gap: 8px;
          margin-left: auto;
        }
        .cookie-consent button {
          border: 0;
          border-radius: 10px;
          padding: 9px 16px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .cookie-consent__decline {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
        }
        .cookie-consent__accept {
          background: #2394ff;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
