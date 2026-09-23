import { useEffect, useState } from "react";

import type { BenefitsProps } from "../../types/benefits";

type Card = { icon: string; title: string; text: string };

const ROTATE_MS = 2800;

// Position of a card on the drum relative to the active one:
// 0 = front, -1 = above, 1 = below, 2 = behind (hidden).
function drumOffset(index: number, active: number, count: number) {
  const diff = (index - active + count) % count;
  return diff === count - 1 ? -1 : diff;
}

function BenefitDrum({
  cards,
  iconClass,
  delayMs,
}: {
  cards: Card[];
  iconClass: string;
  delayMs: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let interval: number | undefined;
    // Offset the second drum so the two columns don't turn in lockstep.
    const start = window.setTimeout(() => {
      setActive((a) => (a + 1) % cards.length);
      interval = window.setInterval(() => {
        setActive((a) => (a + 1) % cards.length);
      }, ROTATE_MS);
    }, ROTATE_MS + delayMs);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [paused, cards.length, delayMs]);

  return (
    <div
      className="benefit-drum"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="benefit-drum-stage">
        {cards.map((card, index) => {
          const offset = drumOffset(index, active, cards.length);
          return (
            <button
              type="button"
              key={card.title}
              className={`benefit-card benefit-drum-card is-pos-${offset < 0 ? "up" : offset}`}
              onClick={() => setActive(index)}
              aria-current={offset === 0}
              tabIndex={offset === 0 ? 0 : -1}
            >
              <div className="benefit-head">
                <div className={iconClass}>
                  <img src={card.icon} alt="" />
                </div>
                <h3>{card.title}</h3>
              </div>
              <p>{card.text}</p>
            </button>
          );
        })}
      </div>

      <div className="benefit-drum-dots">
        {cards.map((card, index) => (
          <button
            type="button"
            key={card.title}
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
            aria-label={card.title}
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
            <BenefitDrum cards={officeCards} iconClass="benefit-icon" delayMs={0} />
          </div>

          {/* DEVIDER */}
          <div className="divider"></div>

          {/* FOR TEAM */}
          <div className="benefits-office">
            <div className="solution-lead">{site.benefitsSiteLead}</div>
            <BenefitDrum cards={siteCards} iconClass="benefit-icon-blue" delayMs={ROTATE_MS / 2} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
