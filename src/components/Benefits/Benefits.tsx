import { useRef, useState } from "react";

import type { BenefitsProps } from "../../types/benefits";

type Card = { icon: string; title: string; text: string };

const GAP = 16; // keep in sync with .benefits-track gap in Benefits.scss

// One column of benefit cards as a slider — same scroll-snap pattern as the
// Pricing and Features carousels: one card per view, arrows and dots.
function BenefitSlider({ cards, iconClass }: { cards: Card[]; iconClass: string }) {
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
          onClick={() => scrollToSlide(active - 1)}
          disabled={active === 0}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="benefits-track" ref={trackRef} onScroll={handleScroll}>
          {cards.map((card) => (
            <div className="benefit-card" key={card.title}>
              <div className="benefit-head">
                <div className={iconClass}>
                  <img src={card.icon} alt="" />
                </div>
                <h3>{card.title}</h3>
              </div>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="benefits-arrow benefits-arrow-right"
          onClick={() => scrollToSlide(active + 1)}
          disabled={active === last}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <div className="benefits-dots">
        {cards.map((card, index) => (
          <span
            key={card.title}
            className={active === index ? "active" : ""}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

function Benefits({ benefitsT }: BenefitsProps) {
  const office = benefitsT.office;
  const site = benefitsT.site;

  const officeCards: Card[] = [
    { icon: "/landing/benefits/card1.svg", title: office.benefitsOfficeCard1Title, text: office.benefitsOfficeCard1Text },
    { icon: "/landing/benefits/card2.svg", title: office.benefitsOfficeCard2Title, text: office.benefitsOfficeCard2Text },
    { icon: "/landing/benefits/card3.svg", title: office.benefitsOfficeCard3Title, text: office.benefitsOfficeCard3Text },
    { icon: "/landing/benefits/card4.svg", title: office.benefitsOfficeCard4Title, text: office.benefitsOfficeCard4Text },
  ];

  const siteCards: Card[] = [
    { icon: "/landing/benefits/card5.svg", title: site.benefitsSiteCard1Title, text: site.benefitsSiteCard1Text },
    { icon: "/landing/benefits/card6.svg", title: site.benefitsSiteCard2Title, text: site.benefitsSiteCard2Text },
    { icon: "/landing/benefits/card7.svg", title: site.benefitsSiteCard3Title, text: site.benefitsSiteCard3Text },
    { icon: "/landing/benefits/card8.svg", title: site.benefitsSiteCard4Title, text: site.benefitsSiteCard4Text },
  ];

  return (
    <section className="benefits">
      <div className="container">
        {/* HEADER */}
        <div className="section-head section-head--dark">
          <span className="eyebrow">{office.benefitsOfficeTitle} </span>
          <h2>
            {office.benefitsOfficeHeading1}
            <em>{office.benefitsOfficeAccent}</em>
            {office.benefitsOfficeHeading2}
          </h2>
        </div>

        {/* BENEFITS-BOTH */}
        <div className="benefitsBoth">
          {/* FOR OFFICE */}
          <div className="benefits-office">
            <div className="solution-lead">{office.benefitsOfficeLead}</div>
            <BenefitSlider cards={officeCards} iconClass="benefit-icon" />
          </div>

          {/* DEVIDER */}
          <div className="divider"></div>

          {/* FOR TEAM */}
          <div className="benefits-office">
            <div className="solution-lead">{site.benefitsSiteLead}</div>
            <BenefitSlider cards={siteCards} iconClass="benefit-icon-blue" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
