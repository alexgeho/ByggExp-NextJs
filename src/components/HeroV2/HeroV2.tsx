import { useState } from "react";

// New home hero (owner-picked mockup "Hero 2", 2026-10-11): laptop + phone
// with people. Swedish only for now — shown on the preview page
// /sv/ny-startsida until the owner approves it. Layout variants are compared
// there via ?v=<variant>:
//   center      – light, text centred, devices with people on both sides
//   split       – light, text left, devices + people right
//   split-scenes – light, text left, office + site photos with real screens right
//   dark        – darkened photo background, text left, devices right
//   dark-center – darkened photo background, text centred, devices below

export const HERO_V2_VARIANTS = ["center", "split", "split-scenes", "dark", "dark-center"] as const;
export type HeroV2Variant = (typeof HERO_V2_VARIANTS)[number];

const REGISTER_URL = "https://admin.byggexp.se/register";
const APP_STORE_URL = "https://apps.apple.com/se/app/id6748280779";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=se.byggexp.app";

// Store badges in the empty corner of the photo collage (owner 2026-10-20: social proof)
function StoreBadges({ place }: { place: "collage" | "content" }) {
  return (
    <div className={`hero-v2-stores hero-v2-stores--${place}`}>
      <a href={APP_STORE_URL} className="hero-v2-store" target="_blank" rel="noopener noreferrer" aria-label="Hämta i App Store">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
        </svg>
        <span><small>Hämta i</small>App Store</span>
      </a>
      <a href={GOOGLE_PLAY_URL} className="hero-v2-store" target="_blank" rel="noopener noreferrer" aria-label="Ladda ned på Google Play">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#2196f3" d="M3.6 1.8 13.4 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1z" />
          <path fill="#4caf50" d="M3.6 1.8c.3-.2.8-.2 1.2 0l11.8 7.1L13.4 12z" />
          <path fill="#f44336" d="M3.6 22.2 13.4 12l3.2 3.1-11.8 7.1c-.4.2-.9.2-1.2 0z" />
          <path fill="#ffc107" d="m16.6 8.9 3.9 2.3c.6.4.6 1.2 0 1.6l-3.9 2.3-3.2-3.1z" />
        </svg>
        <span><small>Ladda ned på</small>Google Play</span>
      </a>
    </div>
  );
}

const device = "/landing/features/1arbetspass-1200.webp";
const deviceLarge = "/landing/features/1arbetspass.webp";
const peopleLeft = "/landing/hero/bygget.webp";
const peopleRight = "/landing/hero/kontor.webp";
// dark: site photo behind the text; real ByggExp screens inside the photos (R6)
const darkBg = "/landing/hero/bg-bygge.webp";

// full package contents (src/locales/pricing.ts: financeItems / projectItems), one line until "Läs mer"
const PRICE_LINES = [
  {
    price: "299 kr/mån",
    items:
      "offerter och fakturor, skanning av kvitton och fakturor, inkommande fakturor via e‑post, betalningspåminnelser, löner, lönespecifikationer och AGI, projektekonomi med budget, kalkyl och lönsamhet, kvitton som bokförs på projektet",
  },
  {
    price: "+69 kr/arbetare",
    items:
      "tidrapport automatiskt och manuellt, närvaro i realtid, planering av projekt och personal, egenkontroll, uppgifter med påminnelser, dokument, foton och ritningar, fotorapporter från arbetspasset, skanning av kvitton med mobilkameran, verktyg via QR-kod",
  },
];

type HeroV2Props = {
  variant?: HeroV2Variant;
};

function HeroV2({ variant = "center" }: HeroV2Props) {
  const isDark = variant === "dark" || variant === "dark-center";
  const showScenes = isDark || variant === "split-scenes";
  const [open, setOpen] = useState([false, false]);

  return (
    <section className={`hero-v2 hero-v2--${variant}`}>
      {isDark && (
        <>
          <img src={darkBg} alt="" className="hero-v2-bg" aria-hidden="true" />
          <span className="hero-v2-scrim" aria-hidden="true" />
        </>
      )}

      <div className="hero-v2-inner">
        <div className="hero-v2-content">
          <span className="hero-v2-pill">
            <span className="hero-v2-pill-dot" aria-hidden="true" />
            Byggledning
          </span>

          <h1>Hela byggföretaget på ett ställe</h1>

          <div className="hero-v2-price">
            {PRICE_LINES.map((line, i) => (
              <p key={line.price} className={`hero-v2-price-line${open[i] ? " is-open" : ""}`}>
                <span className="hero-v2-price-text">
                  <strong>{line.price}</strong> – {line.items}
                </span>
                <button
                  type="button"
                  className="hero-v2-more"
                  aria-expanded={open[i]}
                  onClick={() => setOpen((o) => o.map((v, j) => (j === i ? !v : v)))}
                >
                  {open[i] ? "visa mindre" : "läs mer"}
                </button>
              </p>
            ))}
          </div>

          <div className="hero-v2-ctas">
            <a href={REGISTER_URL} className="hero-v2-btn hero-v2-btn--primary">
              Kom igång gratis
            </a>
          </div>

          <ul className="hero-v2-meta">
            <li>✓ 14 dagar gratis</li>
            <li>✓ Ingen startavgift</li>
            <li>✓ Ingen bindningstid</li>
          </ul>

          {showScenes && <StoreBadges place="content" />}
        </div>

        <div className="hero-v2-visual">
          {showScenes ? (
            <>
              <img
                src={peopleRight}
                alt="Projektledare på kontoret ser arbetspassen i ByggExp"
                className="hero-v2-scene hero-v2-scene--office"
                width={2628}
                height={1867}
                fetchPriority="high"
              />
              <img
                src={peopleLeft}
                alt="Hantverkare stämplar in på bygget i ByggExp-appen"
                className="hero-v2-scene hero-v2-scene--site"
                width={1527}
                height={2103}
              />
              <StoreBadges place="collage" />
            </>
          ) : (
            <>
              <img
                src={peopleLeft}
                alt="Hantverkare stämplar in på bygget i ByggExp-appen"
                className="hero-v2-photo hero-v2-photo--left"
                width={600}
                height={340}
              />
              <img
                src={peopleRight}
                alt="Projektledare på kontoret ser arbetspassen i ByggExp"
                className="hero-v2-photo hero-v2-photo--right"
                width={600}
                height={340}
              />
              <img
                src={device}
                srcSet={`${device} 1200w, ${deviceLarge} 2400w`}
                sizes="(max-width: 900px) 92vw, 760px"
                alt="ByggExp på dator och mobil – arbetspass"
                className="hero-v2-device"
                width={1200}
                height={656}
                fetchPriority="high"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroV2;
