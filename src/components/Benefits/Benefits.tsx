import type { BenefitsProps } from "../../types/benefits";
const card1 = "/landing/benefits/card1.svg";
const card2 = "/landing/benefits/card2.svg";
const card3 = "/landing/benefits/card3.svg";
const card4 = "/landing/benefits/card4.svg";
const card5 = "/landing/benefits/card5.svg";
const card6 = "/landing/benefits/card6.svg";
const card7 = "/landing/benefits/card7.svg";
const card8 = "/landing/benefits/card8.svg";

function Benefits({ benefitsT }: BenefitsProps) {
  return (
    <section className="benefits">
      <div className="container">
        {/* HEADER */}
        <div className="section-head section-head--dark">
          <span className="eyebrow">
            {benefitsT.office.benefitsOfficeTitle}{" "}
          </span>
          <h2>
            {benefitsT.office.benefitsOfficeHeading1}
            <em>{benefitsT.office.benefitsOfficeAccent}</em>
            {benefitsT.office.benefitsOfficeHeading2}
          </h2>
        </div>

        {/* BENEFITS-BOTH */}
        <div className="benefitsBoth">
          {/* FOR OFFICE */}

          <div className="benefits-office">
            <div className="solution-lead">
              {benefitsT.office.benefitsOfficeLead}
            </div>

            <div className="benefits-grid">
              {/* 1 CARD */}
              <div className="benefit-card">
                <div className="benefit-head">
                  <div className="benefit-icon">
                    <img src={card1} alt="" />
                  </div>
                  <h3>{benefitsT.office.benefitsOfficeCard1Title}</h3>
                </div>
                <p>{benefitsT.office.benefitsOfficeCard1Text}</p>
              </div>

              {/* 2 CARD */}
              <div className="benefit-card">
                <div className="benefit-head">
                  <div className="benefit-icon">
                    <img src={card2} alt="" />
                  </div>
                  <h3>{benefitsT.office.benefitsOfficeCard2Title}</h3>
                </div>
                <p>{benefitsT.office.benefitsOfficeCard2Text}</p>
              </div>

              {/* 3 CARD */}
              <div className="benefit-card">
                <div className="benefit-head">
                  <div className="benefit-icon">
                    <img src={card3} alt="" />
                  </div>
                  <h3>{benefitsT.office.benefitsOfficeCard3Title}</h3>
                </div>
                <p>{benefitsT.office.benefitsOfficeCard3Text}</p>
              </div>

              {/* 4 CARD */}
              <div className="benefit-card">
                <div className="benefit-head">
                  <div className="benefit-icon">
                    <img src={card4} alt="" />
                  </div>
                  <h3>{benefitsT.office.benefitsOfficeCard4Title}</h3>
                </div>
                <p>{benefitsT.office.benefitsOfficeCard4Text}</p>
              </div>
            </div>
          </div>

          {/* DEVIDER */}

          <div className="divider"></div>

          {/* FOR TEAM */}

          <div className="benefits-office">
            <div className="solution-lead">
              {benefitsT.site.benefitsSiteLead}
            </div>
            <div className="benefits-grid">
              {/* 5 CARD */}
              <div className="benefit-card">
                <div className="benefit-head">
                  <div className="benefit-icon-blue">
                    <img src={card5} alt="" />
                  </div>
                  <h3>{benefitsT.site.benefitsSiteCard1Title}</h3>
                </div>
                <p>{benefitsT.site.benefitsSiteCard1Text}</p>
              </div>

              {/* 6 CARD */}
              <div className="benefit-card">
                <div className="benefit-head">
                  <div className="benefit-icon-blue">
                    <img src={card6} alt="" />
                  </div>
                  <h3>{benefitsT.site.benefitsSiteCard2Title}</h3>
                </div>
                <p>{benefitsT.site.benefitsSiteCard2Text}</p>
              </div>

              {/* 7 CARD */}
              <div className="benefit-card">
                <div className="benefit-head">
                  <div className="benefit-icon-blue">
                    <img src={card7} alt="" />
                  </div>
                  <h3>{benefitsT.site.benefitsSiteCard3Title}</h3>
                </div>
                <p>{benefitsT.site.benefitsSiteCard3Text}</p>
              </div>

              {/* 8 CARD */}
              <div className="benefit-card">
                <div className="benefit-head">
                  <div className="benefit-icon-blue">
                    <img src={card8} alt="" />
                  </div>

                  <h3>{benefitsT.site.benefitsSiteCard4Title}</h3>
                </div>
                <p>{benefitsT.site.benefitsSiteCard4Text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
