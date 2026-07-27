import type { FinalBenefitsProps } from "../../types/finalbenefits";

function FinalBenefits({ finalBenefitsT }: FinalBenefitsProps) {
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
        
        <div className="finalBenefits-grid">
          
          <div className="final-benefit-card">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>

            <p>{finalBenefitsT.finalBenefitsItem1}</p>
          </div>

          <div className="final-benefit-card">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>

            <p>{finalBenefitsT.finalBenefitsItem2}</p>
          </div>

          <div className="final-benefit-card">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>

            <p>{finalBenefitsT.finalBenefitsItem3}</p>
          </div>

          <div className="final-benefit-card">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>

            <p>{finalBenefitsT.finalBenefitsItem4}</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default FinalBenefits;
