import type { BenefitsProps } from "../../types/benefits";

import BenefitSlider, { type SliderCard } from "./BenefitSlider";

function Benefits({ benefitsT }: BenefitsProps) {
  const office = benefitsT.office;
  const site = benefitsT.site;

  const officeCards: SliderCard[] = [
    { id: "b1", icon: <img src="/landing/benefits/card1.webp" alt="" width={256} height={256} loading="lazy" decoding="async" />, iconClass: "benefit-icon-3d", audience: office.benefitsOfficeLead, title: office.benefitsOfficeCard1Title, text: office.benefitsOfficeCard1Text },
    { id: "b2", icon: <img src="/landing/benefits/card2.webp" alt="" width={256} height={256} loading="lazy" decoding="async" />, iconClass: "benefit-icon-3d", audience: office.benefitsOfficeLead, title: office.benefitsOfficeCard2Title, text: office.benefitsOfficeCard2Text },
    { id: "b3", icon: <img src="/landing/benefits/card3.webp" alt="" width={256} height={256} loading="lazy" decoding="async" />, iconClass: "benefit-icon-3d", audience: office.benefitsOfficeLead, title: office.benefitsOfficeCard3Title, text: office.benefitsOfficeCard3Text },
    { id: "b4", icon: <img src="/landing/benefits/card4.webp" alt="" width={256} height={256} loading="lazy" decoding="async" />, iconClass: "benefit-icon-3d", audience: office.benefitsOfficeLead, title: office.benefitsOfficeCard4Title, text: office.benefitsOfficeCard4Text },
  ];

  const siteCards: SliderCard[] = [
    { id: "b5", icon: <img src="/landing/benefits/card5.webp" alt="" width={256} height={256} loading="lazy" decoding="async" />, iconClass: "benefit-icon-3d", audience: site.benefitsSiteLead, title: site.benefitsSiteCard1Title, text: site.benefitsSiteCard1Text },
    { id: "b6", icon: <img src="/landing/benefits/card6.webp" alt="" width={256} height={256} loading="lazy" decoding="async" />, iconClass: "benefit-icon-3d", audience: site.benefitsSiteLead, title: site.benefitsSiteCard2Title, text: site.benefitsSiteCard2Text },
    { id: "b7", icon: <img src="/landing/benefits/card7.webp" alt="" width={256} height={256} loading="lazy" decoding="async" />, iconClass: "benefit-icon-3d", audience: site.benefitsSiteLead, title: site.benefitsSiteCard3Title, text: site.benefitsSiteCard3Text },
    { id: "b8", icon: <img src="/landing/benefits/card8.webp" alt="" width={256} height={256} loading="lazy" decoding="async" />, iconClass: "benefit-icon-3d", audience: site.benefitsSiteLead, title: site.benefitsSiteCard4Title, text: site.benefitsSiteCard4Text },
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

        {/* OFFICE + SITE TEAM, ONE SLIDER */}
        <div className="benefits-single">
          <BenefitSlider cards={[...officeCards, ...siteCards]} />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
