// New home hero (owner-picked mockup "Hero 2", 2026-10-11): laptop + phone
// with people. Swedish only for now — shown on the preview page
// /sv/ny-startsida until the owner approves it. Layout variants are compared
// there via ?v=<variant>:
//   center      – light, text centred, devices with people on both sides
//   split       – light, text left, devices + people right
//   dark        – darkened photo background, text left, devices right
//   dark-center – darkened photo background, text centred, devices below

export const HERO_V2_VARIANTS = ["center", "split", "dark", "dark-center"] as const;
export type HeroV2Variant = (typeof HERO_V2_VARIANTS)[number];

const REGISTER_URL = "https://admin.byggexp.se/register";

const device = "/landing/features/1arbetspass-1200.webp";
const deviceLarge = "/landing/features/1arbetspass.webp";
const peopleLeft = "/landing/blog/anstalla-personal-byggforetag.webp";
const peopleRight = "/landing/blog/enkelt-tidrapporteringssystem.webp";

type HeroV2Props = {
  variant?: HeroV2Variant;
};

function HeroV2({ variant = "center" }: HeroV2Props) {
  const isDark = variant === "dark" || variant === "dark-center";

  return (
    <section className={`hero-v2 hero-v2--${variant}`}>
      {isDark && (
        <>
          <img src={peopleLeft} alt="" className="hero-v2-bg" aria-hidden="true" />
          <span className="hero-v2-scrim" aria-hidden="true" />
        </>
      )}

      <div className="hero-v2-inner">
        <div className="hero-v2-content">
          <h1>Hela byggföretaget på ett ställe</h1>

          <p className="hero-v2-price">
            <span>
              <strong>299 kr/mån</strong> – offerter, fakturor, löner, kvitton, …
            </span>
            <span>
              <strong>+ 69 kr</strong> per arbetare – tidrapport, planering, närvaro, egenkontroll, …
            </span>
          </p>

          <div className="hero-v2-ctas">
            <a href={REGISTER_URL} className="hero-v2-btn hero-v2-btn--primary">
              Kom igång gratis
            </a>
            <a href="#cta" className="hero-v2-btn hero-v2-btn--ghost">
              Boka demo
            </a>
          </div>

          <p className="hero-v2-meta">✓ Ingen bindningstid</p>
        </div>

        <div className="hero-v2-visual">
          {!isDark && (
            <>
              <img
                src={peopleLeft}
                alt="Hantverkare skakar hand på bygget"
                className="hero-v2-photo hero-v2-photo--left"
                width={600}
                height={340}
              />
              <img
                src={peopleRight}
                alt="Hantverkare rapporterar tid i mobilen"
                className="hero-v2-photo hero-v2-photo--right"
                width={600}
                height={340}
              />
            </>
          )}
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
        </div>
      </div>
    </section>
  );
}

export default HeroV2;
