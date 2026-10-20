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
      "tidrapport automatiskt och manuellt, närvaro i realtid, planering av projekt och personal, egenkontroll, uppgifter med påminnelser, dokument, foton och ritningar, fotorapporter från arbetspasset, verktyg via QR-kod",
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
            <li>✓ iPhone &amp; Android</li>
          </ul>
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
