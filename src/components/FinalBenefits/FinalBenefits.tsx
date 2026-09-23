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

const pulse = <Icon><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></Icon>;
const shield = <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></Icon>;

function FinalBenefits({ finalBenefitsT }: FinalBenefitsProps) {
  const cards: SliderCard[] = [
    { id: "f1", icon: pulse, iconClass: "benefit-icon", text: finalBenefitsT.finalBenefitsItem1 },
    { id: "f2", icon: shield, iconClass: "benefit-icon", text: finalBenefitsT.finalBenefitsItem2 },
    { id: "f3", icon: shield, iconClass: "benefit-icon", text: finalBenefitsT.finalBenefitsItem3 },
    { id: "f4", icon: shield, iconClass: "benefit-icon", text: finalBenefitsT.finalBenefitsItem4 },
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
