import { useRef, useState, type ReactNode } from "react";

// Step slider (text + numbered bullets on the left, screenshot on the right) —
// ONE component for every page that shows it (R38): the home page "features"
// block, feature pages (FunktionPageView), /sv/tidrapportering-app and
// /sv/enmansforetag. Differences between the pages are props, not copies.
// Styles: `.features*`, `.step*` in components/Features/Features.scss.

export type CarouselStep = {
  title: string;
  text: string;
  /** Numbered points under the text. */
  bullets?: readonly string[];
  /** Link under the bullets ("Läs mer om funktionen →"). */
  link?: { href: string; label: string };
  img: string;
  alt: string;
  /** Intrinsic size of `img`, when known. */
  width?: number;
  height?: number;
  /** Full-size image: the screenshot becomes a button that calls `onZoom`. */
  zoomSrc?: string;
};

type Props = {
  /** id of the section (anchor target). */
  id?: string;
  eyebrow?: string;
  /** Content of the H2. */
  heading: ReactNode;
  /** Line under the H2. */
  sub?: string;
  /** Class of the sub line: "fn-section-sub" (pages) or "section-sub" (home). */
  subClassName?: string;
  steps: readonly CarouselStep[];
  /** aria-labels of the arrows. */
  prevLabel: string;
  nextLabel: string;
  /** aria-label of the zoom button (steps with `zoomSrc`). */
  zoomLabel?: string;
  onZoom?: (src: string) => void;
  /** Rendered inside the section after the container (e.g. the Lightbox). */
  children?: ReactNode;
};

const GAP = 24; // keep in sync with .featuresOptions gap in Features.scss

export default function StepsCarousel({
  id,
  eyebrow,
  heading,
  sub,
  subClassName = "fn-section-sub",
  steps,
  prevLabel,
  nextLabel,
  zoomLabel = "Enlarge image",
  onZoom,
  children,
}: Props) {
  // Same scroll-snap slider pattern as the Pricing section.
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const cardStep = () => {
    const card = sliderRef.current?.querySelector<HTMLElement>(".step");
    return card ? card.offsetWidth + GAP : 0;
  };

  const scrollToSlide = (n: number) => {
    const step = cardStep();
    if (!step || n < 0 || n >= steps.length) return;
    // Scroll the track directly (scrollIntoView is unreliable on a nested
    // horizontal scroller and can also nudge the page's vertical scroll).
    sliderRef.current?.scrollTo({ left: n * step, behavior: "smooth" });
    setActiveSlide(n);
  };

  const handleSliderScroll = () => {
    const step = cardStep();
    if (step && sliderRef.current)
      setActiveSlide(Math.round(sliderRef.current.scrollLeft / step));
  };

  // A single step needs no arrows and no dots.
  const multiStep = steps.length > 1;

  return (
    <section className="features" id={id}>
      <div className="container">
        <div className="section-head">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{heading}</h2>
          {sub ? <p className={subClassName}>{sub}</p> : null}
        </div>

        <div className="features-slider">
          {multiStep && (
            <button
              type="button"
              className="features-arrow features-arrow-left"
              onClick={() => scrollToSlide(activeSlide - 1)}
              disabled={activeSlide === 0}
              aria-label={prevLabel}
            >
              ‹
            </button>
          )}

          <div
            className="featuresOptions"
            ref={sliderRef}
            onScroll={handleSliderScroll}
          >
            {steps.map((step, index) => {
              const image = (
                <img
                  src={step.img}
                  alt={step.alt}
                  width={step.width}
                  height={step.height}
                  loading="lazy"
                  decoding="async"
                />
              );
              const zoomSrc = step.zoomSrc;

              return (
                <div className="step" key={index}>
                  <div className="step-text-block">
                    <h3>{step.title}</h3>
                    <p className="step-text">{step.text}</p>
                    {step.bullets ? (
                      <ul className="step-bullets">
                        {step.bullets.map((bullet, n) => (
                          <li key={n}>
                            <span className="number">{n + 1}</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {step.link ? (
                      <a className="step-link" href={step.link.href}>
                        {step.link.label}
                      </a>
                    ) : null}
                  </div>

                  <div className="step-visual">
                    <div className="phone-shell">
                      {zoomSrc ? (
                        <button
                          type="button"
                          className="image-zoom-trigger"
                          onClick={() => onZoom?.(zoomSrc)}
                          aria-label={zoomLabel}
                        >
                          {image}
                        </button>
                      ) : (
                        image
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {multiStep && (
            <button
              type="button"
              className="features-arrow features-arrow-right"
              onClick={() => scrollToSlide(activeSlide + 1)}
              disabled={activeSlide === steps.length - 1}
              aria-label={nextLabel}
            >
              ›
            </button>
          )}
        </div>

        {multiStep && (
          <div className="features-controls">
            <div className="features-dots">
              {steps.map((_, n) => (
                <span
                  key={n}
                  className={activeSlide === n ? "active" : ""}
                  onClick={() => scrollToSlide(n)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {children}
    </section>
  );
}
