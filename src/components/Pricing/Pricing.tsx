import { useState } from "react";
import type { PluralForms, PricingProps } from "../../types/pricing";

/* Price model (SEK excl. VAT). Yearly = pay 10 months, get 12. */
const FAKTURA_PRICE = 299;
const FAKTURA_MAX_USERS = 2;
const INCLUDED_USERS = 10;
const PROJEKT = { base: 690, extra: 69 };
const KOMPLETT = { base: 990, extra: 119 };
const ADDON_PRICE = 199;

const MIN_USERS = 1;
const MAX_USERS = 40;
const DEFAULT_USERS = 10;

type Accent = "green" | "orange" | "blue";

function CheckIcon() {
  return (
    <svg viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m1 5 4 4 8-8"
      />
    </svg>
  );
}

function CheckList({ items, accent }: { items: readonly string[]; accent: Accent }) {
  return (
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
  );
}

function Pricing({ pricingT, lang }: PricingProps) {
  const [isYearly, setYearly] = useState(false);
  const [users, setUsers] = useState(DEFAULT_USERS);

  const numberFormat = new Intl.NumberFormat(lang, { maximumFractionDigits: 0 });
  const pluralRules = new Intl.PluralRules(lang);

  const perMonth = (monthly: number) => (isYearly ? (monthly * 10) / 12 : monthly);
  const fmt = (n: number) => numberFormat.format(Math.round(n));
  const total = (plan: { base: number; extra: number }) =>
    perMonth(plan.base + Math.max(0, users - INCLUDED_USERS) * plan.extra);

  const plural = (forms: PluralForms, n: number) =>
    (forms[pluralRules.select(n)] ?? forms.other).replace("{n}", fmt(n));

  const withYearNote = (text: string) =>
    isYearly ? `${text} · ${pricingT.yearlyNote}` : text;

  const includedDetail = (extra: number) =>
    withYearNote(
      pricingT.includedDetail
        .replace("{included}", String(INCLUDED_USERS))
        .replace("{extra}", fmt(perMonth(extra))),
    );

  const plans = [
    {
      key: "faktura",
      name: pricingT.planFaktura,
      accent: "green" as Accent,
      price: fmt(perMonth(FAKTURA_PRICE)),
      usersLine:
        users <= FAKTURA_MAX_USERS ? pricingT.fakturaUsers : pricingT.fakturaMaxUsers,
      detail: withYearNote(pricingT.fixedPrice),
      groups: [{ title: pricingT.groupFinance, items: pricingT.financeItems }],
      popular: false,
    },
    {
      key: "projekt",
      name: pricingT.planProjekt,
      accent: "orange" as Accent,
      price: fmt(total(PROJEKT)),
      usersLine: plural(pricingT.usersCount, users),
      detail: includedDetail(PROJEKT.extra),
      groups: [{ title: pricingT.groupProject, items: pricingT.projectItems }],
      popular: false,
    },
    {
      key: "komplett",
      name: pricingT.planKomplett,
      accent: "blue" as Accent,
      price: fmt(total(KOMPLETT)),
      usersLine: plural(pricingT.usersCount, users),
      detail: includedDetail(KOMPLETT.extra),
      groups: [
        { title: pricingT.groupProject, items: pricingT.projectItems },
        { title: pricingT.groupFinance, items: pricingT.financeItems },
      ],
      popular: true,
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{pricingT.pricingTitle}</span>

          <h2>{pricingT.pricingHeading}</h2>

          <p className="section-sub">{pricingT.pricingSub}</p>
        </div>

        {/* CONTROLS: billing period + number of users */}
        <div className="pricing-controls-row">
          <div
            className="toggleMonthYearPrice"
            role="group"
            aria-label={pricingT.periodLabel}
          >
            <button
              type="button"
              onClick={() => setYearly(false)}
              aria-pressed={!isYearly}
              className={!isYearly ? "toggleButtonActive" : "toggleButton"}
            >
              {pricingT.pricingMonthly}
            </button>

            <button
              type="button"
              onClick={() => setYearly(true)}
              aria-pressed={isYearly}
              className={isYearly ? "toggleButtonActive" : "toggleButton"}
            >
              {pricingT.pricingYearly}
            </button>
          </div>

          <div className="pricing-users">
            <span id="pricing-users-label" className="pricing-users-label">
              {pricingT.usersLabel}
            </span>
            <div
              className="pricing-stepper"
              role="group"
              aria-labelledby="pricing-users-label"
            >
              <button
                type="button"
                onClick={() => setUsers((n) => Math.max(MIN_USERS, n - 1))}
                disabled={users <= MIN_USERS}
                aria-label={pricingT.usersDecrease}
              >
                −
              </button>
              <span className="pricing-stepper-value" aria-live="polite">
                {users}
              </span>
              <button
                type="button"
                onClick={() => setUsers((n) => Math.min(MAX_USERS, n + 1))}
                disabled={users >= MAX_USERS}
                aria-label={pricingT.usersIncrease}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="pricingOptions">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`pricing-card${plan.popular ? " pricing-card-popular" : ""}`}
            >
              <div className="pricing-card-top">
                <span className={`pricing-tag pricing-tag-${plan.accent}`}>
                  {plan.name}
                </span>
                {plan.popular ? (
                  <span className="pricing-popular">{pricingT.popular}</span>
                ) : null}
              </div>

              <div className="pricing-price">
                <span className="num">{plan.price}</span>

                <span className="per">{pricingT.pricingPer}</span>
              </div>

              <p className="pricing-sub">{plan.usersLine}</p>
              <p className="pricing-detail">{plan.detail}</p>

              <div className="pricing-groups">
                {plan.groups.map((group) => (
                  <div className="pricing-group" key={group.title}>
                    <div className="pricing-group-title">{group.title}</div>
                    <CheckList items={group.items} accent={plan.accent} />
                  </div>
                ))}
              </div>

              <a href="#cta" className="btn-primary">
                {pricingT.pricingButton}
              </a>

              <span className="pricing-trial">{pricingT.pricingTrial}</span>
            </div>
          ))}
        </div>

        {/* SPECIAL OFFER: 40+ users */}
        <div className="pricing-banner pricing-offer">
          <span className="pricing-banner-badge pricing-banner-badge-purple">
            {pricingT.offerBadge}
          </span>
          <div className="pricing-offer-text">
            <h3>{pricingT.offerTitle}</h3>
            <p>{pricingT.offerText}</p>
          </div>
          <a href="#cta" className="pricing-offer-btn">
            {pricingT.offerButton}
          </a>
        </div>

        {/* ADD-ON: integrations */}
        <div className="pricing-banner pricing-addon">
          <span className="pricing-banner-badge pricing-banner-badge-blue">
            {pricingT.addonBadge}
          </span>
          <div className="pricing-addon-info">
            <h3>{pricingT.addonTitle}</h3>
            <div className="pricing-price pricing-addon-price">
              <span className="num">{fmt(ADDON_PRICE)}</span>
              <span className="per">{pricingT.addonPer}</span>
            </div>
            <p>{pricingT.addonNote}</p>
          </div>
          <CheckList items={pricingT.addonItems} accent="green" />
        </div>

        <p className="pricing-footnote">{pricingT.footnote}</p>
      </div>
    </section>
  );
}

export default Pricing;
