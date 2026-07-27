import { useState } from "react";
import type { PricingProps } from "../../types/pricing";
import { useRef } from "react";

/* BUTTONS */
function Pricing({ pricingT }: PricingProps) {
  const [isYearly, setYearly] = useState(false);

  function togglePeriod() {
    setYearly(!isYearly);
  }

  const basePrice50 = 499;

  const basePrice90 = 899;

  const basePrice180 = 1799;

  const sliderRef = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  function scrollToSlide(index: number) {
    if (!sliderRef.current) {
      return;
    }

    const cards =
      sliderRef.current.querySelectorAll<HTMLElement>(".pricing-card");

    if (!cards[index]) {
      return;
    }

    cards[index].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });

    setActiveSlide(index);
  }

  function showPreviousSlide() {
    if (activeSlide === 0) {
      return;
    }

    scrollToSlide(activeSlide - 1);
  }

  function showNextSlide() {
    if (activeSlide === 3) {
      return;
    }

    scrollToSlide(activeSlide + 1);
  }

  function handleSliderScroll() {
    if (!sliderRef.current) {
      return;
    }

    const firstCard =
      sliderRef.current.querySelector<HTMLElement>(".pricing-card");

    if (!firstCard) {
      return;
    }

    const gap = 16;
    const cardWidth = firstCard.offsetWidth + gap;

    const index = Math.round(sliderRef.current.scrollLeft / cardWidth);

    setActiveSlide(index);
  }

  function priceDeducter(price: number) {
    return (!isYearly ? price : price * 0.9).toFixed(0);
  }

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{pricingT.pricingTitle}</span>

          <h2>{pricingT.pricingHeading}</h2>

          <p className="section-sub">{pricingT.pricingSub}</p>
        </div>

        {/* CARDs */}
        {/* BUTTONS */}
        <div className="toggleMonthYearPrice">
          <button
            onClick={togglePeriod}
            className={!isYearly ? "toggleButtonActive" : "toggleButton"}
          >
            {pricingT.pricingMonthly}
          </button>

          <button
            onClick={togglePeriod}
            className={isYearly ? "toggleButtonActive" : "toggleButton"}
          >
            {pricingT.pricingYearly} - 10% off
          </button>
        </div>

        <div className="pricing-slider">
          {/* BUTTON ARROW LEFT */}
          <button
            type="button"
            className="pricing-arrow pricing-arrow-left"
            onClick={showPreviousSlide}
            disabled={activeSlide === 0}
          >
            ‹
          </button>

          {/* PRICING OPTIONS */}
          <div
            className="pricingOptions"
            ref={sliderRef}
            onScroll={handleSliderScroll}
          >
            {/* CARD 1 */}
            <div className="pricing-card">
              <span className="pricing-tag pricing-tag-starter">
                {pricingT.pricingPer1}
              </span>

              <div className="pricing-price">
                <span className="num">{priceDeducter(basePrice50)}</span>

                <span className="per">{pricingT.pricingPer}</span>
              </div>

              <p className="pricing-sub">{pricingT.priceDescription1}</p>

              <ul className="pricing-list">
                <li>
                  <span className="check check-green">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem1}
                </li>

                <li>
                  <span className="check check-green">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem2}
                </li>

                <li>
                  <span className="check check-green">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem3}
                </li>

                <li>
                  <span className="check check-green">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem4}
                </li>
              </ul>

              <a href="#cta" className="btn-primary">
                {pricingT.pricingButton}
              </a>

              <span className="pricing-trial">{pricingT.pricingTrial}</span>
            </div>

            {/* CARD 2 */}
            <div className="pricing-card">
              <span className="pricing-tag pricing-tag-orange">
                {pricingT.pricingPer10}
              </span>

              <div className="pricing-price">
                <span className="num">{priceDeducter(basePrice90)}</span>

                <span className="per">{pricingT.pricingPer}</span>
              </div>

              <p className="pricing-sub">{pricingT.priceDescription2}</p>

              <ul className="pricing-list">
                <li>
                  <span className="check check-orange">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem1}
                </li>

                <li>
                  <span className="check check-orange">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem2}
                </li>

                <li>
                  <span className="check check-orange">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem3}
                </li>

                <li>
                  <span className="check check-orange">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem4}
                </li>
              </ul>

              <a href="#cta" className="btn-primary">
                {pricingT.pricingButton}
              </a>

              <span className="pricing-trial">{pricingT.pricingTrial}</span>
            </div>

            {/* CARD 3 */}
            <div className="pricing-card">
              <span className="pricing-tag pricing-tag-proffesional">
                {pricingT.pricingPer20}
              </span>

              <div className="pricing-price">
                <span className="num">{priceDeducter(basePrice180)}</span>

                <span className="per">{pricingT.pricingPer}</span>
              </div>

              <p className="pricing-sub">{pricingT.priceDescription3}</p>

              <ul className="pricing-list">
                <li>
                  <span className="check check-blue">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem1}
                </li>

                <li>
                  <span className="check check-blue">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem2}
                </li>

                <li>
                  <span className="check check-blue">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem3}
                </li>

                <li>
                  <span className="check check-blue">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem4}
                </li>
              </ul>

              <a href="#cta" className="btn-primary">
                {pricingT.pricingButton}
              </a>

              <span className="pricing-trial">{pricingT.pricingTrial}</span>
            </div>

            {/* CARD 4 */}
            <div className="pricing-card">
              <span className="pricing-tag pricing-tag-purple">
                {pricingT.pricingPer40}
              </span>

              <div className="pricing-price">
                <span className="num">{pricingT.pricingCustom}</span>
              </div>

              <p className="pricing-sub">{pricingT.priceDescription4}</p>

              <ul className="pricing-list">
                <li>
                  <span className="check check-purple">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem1}
                </li>

                <li>
                  <span className="check check-purple">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem2}
                </li>

                <li>
                  <span className="check check-purple">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem3}
                </li>

                <li>
                  <span className="check check-purple">
                    <svg viewBox="0 0 14 10" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m1 5 4 4 8-8"
                      />
                    </svg>
                  </span>
                  {pricingT.pricingItem4}
                </li>
              </ul>

              <a href="#cta" className="btn-primary">
                {pricingT.pricingButton}
              </a>

              <span className="pricing-trial">{pricingT.pricingTrial}</span>
            </div>
          </div>

          {/* BUTTON ARROW RIGHT */}
          <button
            type="button"
            className="pricing-arrow pricing-arrow-right"
            onClick={showNextSlide}
            disabled={activeSlide === 3}
          >
            ›
          </button>
        </div>
        {/*  */}
        {/* Mobile controls */}
        <div className="pricing-controls">
          <div className="pricing-dots">
            {[0, 1, 2, 3].map((index) => (
              <span
                key={index}
                className={activeSlide === index ? "active" : ""}
                onClick={() => scrollToSlide(index)}
              />
            ))}
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  );
}

export default Pricing;
