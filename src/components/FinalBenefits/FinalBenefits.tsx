import type { FinalBenefitsProps } from "../../types/finalbenefits";


// One 3D glass icon per card, matching its message (time, speed, team, fewer errors).
function Icon({ name }: { name: string }) {
  return (
    <img
      src={`/landing/final-benefits/${name}.webp`}
      alt=""
      width={256}
      height={256}
      loading="lazy"
      decoding="async"
    />
  );
}

const clock = <Icon name="time" />;
const zap = <Icon name="speed" />;
const users = <Icon name="team" />;
const shieldCheck = <Icon name="shield" />;

// Short recap right before the prices: four outcomes shown at once (no
// carousel), so it reads in a glance and the visitor reaches pricing fast.
function FinalBenefits({ finalBenefitsT }: FinalBenefitsProps) {
  const items = [
    { id: "f1", icon: clock, text: finalBenefitsT.finalBenefitsItem1 },
    { id: "f2", icon: zap, text: finalBenefitsT.finalBenefitsItem2 },
    { id: "f3", icon: users, text: finalBenefitsT.finalBenefitsItem3 },
    { id: "f4", icon: shieldCheck, text: finalBenefitsT.finalBenefitsItem4 },
  ];

  return (
    <section className="final-benefits final-benefits--compact">
      <div className="container final-benefits-inner">
        <div className="section-head section-head--dark">
          <span className="eyebrow">{finalBenefitsT.finalBenefitsTitle}</span>

          <h2>
            {finalBenefitsT.finalBenefitsHeading1}{" "}
            <em>{finalBenefitsT.finalBenefitsAccent}</em>
          </h2>
        </div>

        <ul className="final-outcomes">
          {items.map((item) => (
            <li className="final-outcome" key={item.id}>
              <span className="final-outcome-icon">{item.icon}</span>
              <span className="final-outcome-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FinalBenefits;
