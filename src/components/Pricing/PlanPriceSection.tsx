import type { ReactNode } from "react";

import type { PricingT } from "../../types/pricing";
import {
  CheckIcon,
  PlanCard,
  PlanUsers,
  type Accent,
  type PlanKey,
} from "./Pricing";

// Price block of ONE package (heading on the left, the package card on the
// right) — ONE component (R38) for feature pages (FunktionPageView),
// /sv/tidrapportering-app and /sv/enmansforetag. The card is the same
// PlanCard as in the pricing block of the home page and /sv/priser.
// Styles: `.em-price*` in styles/enmansforetag.scss, `.pricing-*` in
// components/Pricing/Pricing.scss.

const PLAN_ACCENT: Record<PlanKey, Accent> = {
  komplett: "green",
  faktura: "blue",
  projekt: "purple",
};

export const planName = (pricingT: PricingT, plan: PlanKey): string =>
  plan === "komplett"
    ? pricingT.planKomplett
    : plan === "faktura"
      ? pricingT.planFaktura
      : pricingT.planProjekt;

const planSub = (pricingT: PricingT, plan: PlanKey): string =>
  plan === "komplett"
    ? pricingT.planKomplettSub
    : plan === "faktura"
      ? pricingT.planFakturaSub
      : pricingT.planProjektSub;

type Props = {
  plan: PlanKey;
  lang: string;
  pricingT: PricingT;
  /** Small line above the H2 (to be removed in stage 3, R5). */
  eyebrow?: string;
  /** Content of the H2. */
  heading: ReactNode;
  /** Line under the H2. */
  lead: string;
  /** Monthly price of the package. */
  price: number;
  /** Lines of the card's list. */
  items: readonly string[];
  /** Show the trial line under the card button. */
  trial?: boolean;
  /** Check marks under the card. */
  checks?: readonly string[];
  /** Small print under the card (`pricing-limit-note`), one paragraph each. */
  notes?: readonly string[];
};

export default function PlanPriceSection({
  plan,
  lang,
  pricingT,
  eyebrow,
  heading,
  lead,
  price,
  items,
  trial = false,
  checks,
  notes = [],
}: Props) {
  const accent = PLAN_ACCENT[plan];

  return (
    <section className="em-price">
      <div className="container em-price-inner">
        <div className="em-price-head">
          {eyebrow ? <p className="em-eyebrow">{eyebrow}</p> : null}
          <h2>{heading}</h2>
          <p className="em-lead">{lead}</p>
        </div>
        <div className="em-price-card">
          <PlanCard
            name={planName(pricingT, plan)}
            accent={accent}
            price={price}
            per={pricingT.pricingPer}
            users={<PlanUsers pricingT={pricingT} plan={plan} lang={lang} />}
            buttonLabel={pricingT.pricingButton}
            trial={trial ? pricingT.pricingTrial : undefined}
          >
            <div className="pricing-group">
              <h3 className="pricing-group-title">{planSub(pricingT, plan)}</h3>
              <ul className="pricing-list">
                {items.map((item) => (
                  <li key={item}>
                    <span className={`check check-${accent}`}>
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </PlanCard>
          {checks ? (
            <ul className="em-checks">
              {checks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
          ) : null}
          {notes.map((note) => (
            <p className="pricing-limit-note" key={note}>
              {note}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
