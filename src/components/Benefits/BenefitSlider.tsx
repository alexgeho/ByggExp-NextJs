import { useRef, useState, type ReactNode } from "react";

export type SliderCard = {
  id: string;
  icon: ReactNode;
  iconClass: string;
  audience?: string;
  title?: string;
  text: string;
};

const GAP = 16; // keep in sync with .benefits-track gap in Benefits.scss

// Card slider used by the Benefits and FinalBenefits sections — same scroll-snap
// pattern as the Pricing and Features carousels: one card per view, arrows and dots. The
// arrows loop: past the last card they wrap to the first and vice versa.
export default function BenefitSlider({ cards }: { cards: SliderCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const last = cards.length - 1;

  function cardWidth() {
    const first = trackRef.current?.querySelector<HTMLElement>(".benefit-card");
    return first ? first.offsetWidth + GAP : 0;
  }

  function scrollToSlide(index: number) {
    const width = cardWidth();
    if (!trackRef.current || !width) return;
    // Scroll the track itself (scrollIntoView can nudge the page vertically).
    trackRef.current.scrollTo({ left: index * width, behavior: "smooth" });
    setActive(index);
  }

  function handleScroll() {
    const width = cardWidth();
    if (!trackRef.current || !width) return;
    setActive(Math.round(trackRef.current.scrollLeft / width));
  }

  return (
    <div className="benefits-slider">
      <div className="benefits-slider-frame">
        <button
          type="button"
          className="benefits-arrow benefits-arrow-left"
          onClick={() => scrollToSlide(active === 0 ? last : active - 1)}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="benefits-track" ref={trackRef} onScroll={handleScroll}>
          {cards.map((card) => (
            <div className="benefit-card" key={card.id}>
              {card.audience && (
                <span className="benefit-audience">{card.audience.replace(/:\s*$/, "")}</span>
              )}
              <div className="benefit-head">
                <div className={card.iconClass}>{card.icon}</div>
                {card.title && <h3>{card.title}</h3>}
              </div>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="benefits-arrow benefits-arrow-right"
          onClick={() => scrollToSlide(active === last ? 0 : active + 1)}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <div className="benefits-dots">
        {cards.map((card, index) => (
          <span
            key={card.id}
            className={active === index ? "active" : ""}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
