import { useEffect, useRef, useState } from "react";
const shiftsExport = "/landing/features/1arbetspass.webp";
const tasks = "/landing/features/2uppgift.webp";
const live = "/landing/features/3personal.webp";
const photo = "/landing/features/4foto.webp";
const planing = "/landing/features/5planering.webp";
const tools = "/landing/features/6verktyg.webp";
const offert = "/landing/features/7offerter.webp";
const invoice = "/landing/features/8fakturor.webp";
const project = "/landing/features/9ekonomi.webp";
const costs = "/landing/features/11costs.webp";
const salary = "/landing/features/12salary.webp";

import type { FeaturesProps } from "../../types/features";

// Each homepage feature card links to its dedicated feature landing page.
// Order matches featureCards below. The pages are sv-only, so the link is only
// rendered on the Swedish homepage (see lang check in render).
const FEATURE_LINKS = [
  "automatisk-tidrapportering-och-export", // 1 Automatisk insamling av arbetstid
  "hantera-uppgifter-i-byggprojekt", // 2 Uppgifter med automatisk uppföljning
  "narvaro-och-incheckning-pa-bygget", // 3 Live-översikt över arbetslagen
  "dokumentera-med-foton-pa-bygget", // 4 Fotodokumentation
  "dagsplanering-och-planeringsmoten", // 5 Projekt- och personalplanering
  "hantera-verktyg-och-utrustning", // 6 Hantering av verktyg och utrustning
  "skapa-offert-i-byggexp", // 7 Skapa offerter
  "fakturera-fran-byggexp", // 8 Skapa fakturor
  "projektekonomi-och-lonsamhet", // 9 Projektöversikt / ekonomi
  "fota-kvitton-och-hantera-utlagg", // 10 Utlägg och kostnader
  "loneunderlag-for-byggforetag", // 11 Löner från samma timmar
];

function Features({
  lang,
  featuresT1_3,
  featuresT4_6,
  featuresT7_9,
  featuresT10_11,
}: FeaturesProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // The 9 cards live as flat keys across three translation objects; normalize
  // them into a single array so the carousel can map over them.
  const featureCards = [
    {
      title: featuresT1_3.featuresCard1Title,
      text: featuresT1_3.featuresCard1Text,
      steps: [
        featuresT1_3.featuresCard1Step1,
        featuresT1_3.featuresCard1Step2,
        featuresT1_3.featuresCard1Step3,
      ],
      image: shiftsExport,
    },
    {
      title: featuresT1_3.featuresCard2Title,
      text: featuresT1_3.featuresCard2Text,
      steps: [
        featuresT1_3.featuresCard2Step1,
        featuresT1_3.featuresCard2Step2,
        featuresT1_3.featuresCard2Step3,
      ],
      image: tasks,
    },
    {
      title: featuresT1_3.featuresCard3Title,
      text: featuresT1_3.featuresCard3Text,
      steps: [
        featuresT1_3.featuresCard3Step1,
        featuresT1_3.featuresCard3Step2,
        featuresT1_3.featuresCard3Step3,
      ],
      image: live,
    },
    {
      title: featuresT4_6.featuresCard4Title,
      text: featuresT4_6.featuresCard4Text,
      steps: [
        featuresT4_6.featuresCard4Step1,
        featuresT4_6.featuresCard4Step2,
        featuresT4_6.featuresCard4Step3,
      ],
      image: photo,
    },
    {
      title: featuresT4_6.featuresCard5Title,
      text: featuresT4_6.featuresCard5Text,
      steps: [
        featuresT4_6.featuresCard5Step1,
        featuresT4_6.featuresCard5Step2,
        featuresT4_6.featuresCard5Step3,
      ],
      image: planing,
    },
    {
      title: featuresT4_6.featuresCard6Title,
      text: featuresT4_6.featuresCard6Text,
      steps: [
        featuresT4_6.featuresCard6Step1,
        featuresT4_6.featuresCard6Step2,
        featuresT4_6.featuresCard6Step3,
      ],
      image: tools,
    },
    {
      title: featuresT7_9.featuresCard7Title,
      text: featuresT7_9.featuresCard7Text,
      steps: [
        featuresT7_9.featuresCard7Step1,
        featuresT7_9.featuresCard7Step2,
        featuresT7_9.featuresCard7Step3,
      ],
      image: offert,
    },
    {
      title: featuresT7_9.featuresCard8Title,
      text: featuresT7_9.featuresCard8Text,
      steps: [
        featuresT7_9.featuresCard8Step1,
        featuresT7_9.featuresCard8Step2,
        featuresT7_9.featuresCard8Step3,
      ],
      image: invoice,
    },
    {
      title: featuresT7_9.featuresCard9Title,
      text: featuresT7_9.featuresCard9Text,
      steps: [
        featuresT7_9.featuresCard9Step1,
        featuresT7_9.featuresCard9Step2,
        featuresT7_9.featuresCard9Step3,
      ],
      image: project,
    },
    {
      title: featuresT10_11.featuresCard10Title,
      text: featuresT10_11.featuresCard10Text,
      steps: [
        featuresT10_11.featuresCard10Step1,
        featuresT10_11.featuresCard10Step2,
        featuresT10_11.featuresCard10Step3,
      ],
      image: costs,
    },
    {
      title: featuresT10_11.featuresCard11Title,
      text: featuresT10_11.featuresCard11Text,
      steps: [
        featuresT10_11.featuresCard11Step1,
        featuresT10_11.featuresCard11Step2,
        featuresT10_11.featuresCard11Step3,
      ],
      image: salary,
    },
  ];

  // --- Carousel (same scroll-snap slider pattern as the Pricing section) ---
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const lastIndex = featureCards.length - 1;
  const gap = 24; // keep in sync with .featuresOptions gap in Features.scss

  function scrollToSlide(index: number) {
    if (!sliderRef.current) return;

    const firstCard = sliderRef.current.querySelector<HTMLElement>(".step");

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + gap;

    // Scroll the track directly (scrollIntoView is unreliable on a nested
    // horizontal scroller and can also nudge the page's vertical scroll).
    sliderRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });

    setActiveSlide(index);
  }

  function showPreviousSlide() {
    if (activeSlide === 0) return;
    scrollToSlide(activeSlide - 1);
  }

  function showNextSlide() {
    if (activeSlide === lastIndex) return;
    scrollToSlide(activeSlide + 1);
  }

  function handleSliderScroll() {
    if (!sliderRef.current) return;

    const firstCard = sliderRef.current.querySelector<HTMLElement>(".step");

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + gap;

    const index = Math.round(sliderRef.current.scrollLeft / cardWidth);

    setActiveSlide(index);
  }

  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxImage]);

  return (
    <section className="features" id="features">
      <div className="container">
        {/* HEADER */}
        <div className="section-head">
          <span className="eyebrow">{featuresT1_3.featuresTitle}</span>

          <h2>
            {featuresT1_3.featuresHeading1}{" "}
            <em>{featuresT1_3.featuresHeadingAccent}</em>{" "}
            {featuresT1_3.featuresHeading2}
          </h2>

          <p className="section-sub">{featuresT1_3.featuresSub}</p>
        </div>

        {/* CAROUSEL */}
        <div className="features-slider">
          {/* ARROW LEFT */}
          <button
            type="button"
            className="features-arrow features-arrow-left"
            onClick={showPreviousSlide}
            disabled={activeSlide === 0}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* TRACK */}
          <div
            className="featuresOptions"
            ref={sliderRef}
            onScroll={handleSliderScroll}
          >
            {featureCards.map((card, index) => (
              <div className="step" key={index}>
                <div className="step-text-block">
                  <h3>{card.title}</h3>

                  <p className="step-text">{card.text}</p>

                  <ul className="step-bullets">
                    {card.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>
                        <span className="number">{stepIndex + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ul>

                  {lang === "sv" && FEATURE_LINKS[index] ? (
                    <a
                      className="step-link"
                      href={`/sv/blog/${FEATURE_LINKS[index]}`}
                    >
                      Läs mer om funktionen →
                    </a>
                  ) : null}
                </div>

                <div className="step-visual">
                  <div className="phone-shell">
                    <button
                      type="button"
                      className="image-zoom-trigger"
                      onClick={() => setLightboxImage(card.image)}
                      aria-label="Enlarge image"
                    >
                      <img src={card.image} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ARROW RIGHT */}
          <button
            type="button"
            className="features-arrow features-arrow-right"
            onClick={showNextSlide}
            disabled={activeSlide === lastIndex}
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* DOTS */}
        <div className="features-controls">
          <div className="features-dots">
            {featureCards.map((_, index) => (
              <span
                key={index}
                className={activeSlide === index ? "active" : ""}
                onClick={() => scrollToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="image-lightbox"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Stäng"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="m5 5 14 14M19 5 5 19"
              />
            </svg>
          </button>

          <img
            src={lightboxImage}
            alt=""
            className="image-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Features;
