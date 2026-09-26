import { useRef, useState } from "react";
import type { PluralForms, PricingProps } from "../../types/pricing";

/* Price model (SEK excl. VAT). Yearly = 12 months minus YEARLY_DISCOUNT. */
const FAKTURA_PRICE = 299;
const INCLUDED_USERS = 10;
const PROJEKT = { base: 690, extra: 69 };
const KOMPLETT = { base: 990, extra: 119 };
const ADDON_PRICE = 199;
const YEARLY_DISCOUNT = 0.15;

const MIN_USERS = 1;
const MAX_USERS = 40;
const DEFAULT_USERS = 10;

type Accent = "green" | "purple" | "blue";

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

function CheckList({
  items,
  accent,
}: {
  items: readonly string[];
  accent: Accent;
}) {
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

  // Mobile/tablet: the cards are a swipeable carousel (arrows + dots).
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToSlide = (index: number) => {
    const cards =
      sliderRef.current?.querySelectorAll<HTMLElement>(".pricing-card");
    const card = cards?.[index];
    if (!card || !sliderRef.current) return;
    sliderRef.current.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setActiveSlide(index);
  };

  const handleSliderScroll = () => {
    const slider = sliderRef.current;
    const first = slider?.querySelector<HTMLElement>(".pricing-card");
    if (!slider || !first) return;
    const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;
    setActiveSlide(Math.round(slider.scrollLeft / (first.offsetWidth + gap)));
  };

  const numberFormat = new Intl.NumberFormat(lang, {
    maximumFractionDigits: 0,
  });
  const pluralRules = new Intl.PluralRules(lang);

  const perMonth = (monthly: number) =>
    isYearly ? monthly * (1 - YEARLY_DISCOUNT) : monthly;
  const fmt = (n: number) => numberFormat.format(Math.round(n));
  const total = (plan: { base: number; extra: number }) =>
    perMonth(plan.base + Math.max(0, users - INCLUDED_USERS) * plan.extra);

  const plural = (forms: PluralForms, n: number) =>
    (forms[pluralRules.select(n)] ?? forms.other).replace("{n}", fmt(n));

  const plans = [
    {
      key: "faktura",
      name: pricingT.planFaktura,
      accent: "blue" as Accent,
      price: fmt(perMonth(FAKTURA_PRICE)),
      groups: [
        { title: pricingT.planFakturaSub, items: pricingT.financeItems },
      ],
      popular: false,
    },
    {
      key: "projekt",
      name: pricingT.planProjekt,
      accent: "purple" as Accent,
      price: fmt(total(PROJEKT)),
      groups: [
        { title: pricingT.planProjektSub, items: pricingT.projectItems },
      ],
      popular: false,
    },
    {
      key: "komplett",
      highlight: pricingT.komplettItems[pricingT.komplettItems.length - 1],
      name: pricingT.planKomplett,
      accent: "green" as Accent,
      price: fmt(total(KOMPLETT)),
      groups: [
        {
          title: pricingT.planKomplettSub,
          items: pricingT.komplettItems
            .slice(0, -1)
            .map((item) =>
              item
                .replace("{projekt}", pricingT.planProjekt)
                .replace("{faktura}", pricingT.planFaktura),
            ),
        },
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
        <div className="pricing-slider">
          <button
            type="button"
            className="pricing-arrow pricing-arrow-left"
            onClick={() => scrollToSlide(activeSlide - 1)}
            disabled={activeSlide === 0}
            aria-label="‹"
          >
            ‹
          </button>

          <div
            className="pricingOptions"
            ref={sliderRef}
            onScroll={handleSliderScroll}
          >
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

                <div
                  className={`pricing-groups${plan.highlight ? " pricing-groups-fit" : ""}`}
                >
                  {plan.groups.map((group) => (
                    <div className="pricing-group" key={group.title}>
                      <h3 className="pricing-group-title">{group.title}</h3>
                      <CheckList items={group.items} accent={plan.accent} />
                    </div>
                  ))}
                </div>

                {plan.highlight ? (
                  <div className="pricing-highlight-wrap">
                    <div className="pricing-highlight">
                      <div className="pricing-highlight-title">
                        {plan.highlight.split(" – ")[0]}
                      </div>
                      <div className="pricing-highlight-note">
                        {plan.highlight.split(" – ")[1]}
                      </div>
                    </div>
                  </div>
                ) : null}

                <a href="#cta" className="btn-primary">
                  {pricingT.pricingButton}
                </a>

                <span className="pricing-trial">{pricingT.pricingTrial}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="pricing-arrow pricing-arrow-right"
            onClick={() => scrollToSlide(activeSlide + 1)}
            disabled={activeSlide === plans.length - 1}
            aria-label="›"
          >
            ›
          </button>
        </div>

        <div className="pricing-dots" aria-hidden="true">
          {plans.map((plan, i) => (
            <span
              key={plan.key}
              className={i === activeSlide ? "active" : ""}
            />
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

        <p className="pricing-footnote">
          {pricingT.usersNote
            .replace("{projekt}", pricingT.planProjekt)
            .replace("{komplett}", pricingT.planKomplett)
            .replace("{faktura}", pricingT.planFaktura)
            .replace("{included}", String(INCLUDED_USERS))
            .replace("{p}", fmt(PROJEKT.extra))
            .replace("{k}", fmt(KOMPLETT.extra))}{" "}
          {pricingT.footnote}
        </p>
      </div>
    </section>
  );
}

export default Pricing;
