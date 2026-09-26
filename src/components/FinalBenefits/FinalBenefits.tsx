import type { FinalBenefitsProps } from "../../types/finalbenefits";

import BenefitSlider, { type SliderCard } from "../Benefits/BenefitSlider";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

// One icon per card, matching its message (time, speed, team, fewer errors).
const clock = <Icon><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></Icon>;
const zap = <Icon><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></Icon>;
const users = <Icon><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></Icon>;
const shieldCheck = <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></Icon>;

function FinalBenefits({ finalBenefitsT }: FinalBenefitsProps) {
  const cards: SliderCard[] = [
    { id: "f1", icon: clock, iconClass: "benefit-icon", text: finalBenefitsT.finalBenefitsItem1 },
    { id: "f2", icon: zap, iconClass: "benefit-icon", text: finalBenefitsT.finalBenefitsItem2 },
    { id: "f3", icon: users, iconClass: "benefit-icon", text: finalBenefitsT.finalBenefitsItem3 },
    { id: "f4", icon: shieldCheck, iconClass: "benefit-icon", text: finalBenefitsT.finalBenefitsItem4 },
  ];

  return (
    <section className="final-benefits">
      <div className="container final-benefits-inner">
        <div className="section-head section-head--dark">
          <span className="eyebrow">{finalBenefitsT.finalBenefitsTitle}</span>

          <h2>
            {finalBenefitsT.finalBenefitsHeading1}{" "}
            <em>{finalBenefitsT.finalBenefitsAccent}</em>
          </h2>
        </div>

        {/* Same slider as the Benefits section above */}
        <div className="benefits-single">
          <BenefitSlider cards={cards} />
        </div>
      </div>
    </section>
  );
}

export default FinalBenefits;
