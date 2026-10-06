import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import type { PluralForms, PricingProps } from "../../types/pricing";

/* Price model (SEK excl. VAT). Yearly = 12 months minus YEARLY_DISCOUNT. */
// Exported: the home page's SoftwareApplication schema quotes it as the entry price.
export const FAKTURA_PRICE = 299;
const INCLUDED_USERS = 10;
// Exported: feature pages' SoftwareApplication schema quotes "Koll på jobbet".
export const PROJEKT_PRICE = 690;
const PROJEKT = { base: PROJEKT_PRICE, extra: 69 };
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

/* Feature lines link to the page that explains them (Clarity showed visitors
   clicking the lines and getting nothing). Targets are keyed by item index so
   every language links to the same page. The feature articles exist only in
   these languages; elsewhere the lines stay plain text. */
const FEATURE_LINK_LANGS: readonly string[] = ["sv", "en", "pl", "ru", "nb"];

const PROJECT_LINKS: readonly (string | null)[] = [
  "funktioner", // Mobilapp + adminpanel
  "blog/automatisk-tidrapportering-och-export", // Tidrapportering
  "blog/narvaro-och-incheckning-pa-bygget", // Närvarokoll i realtid
  "blog/hantera-uppgifter-i-byggprojekt", // Uppgifter med påminnelser
  "blog/dokumentera-med-foton-pa-bygget", // Dokument, foton och ritningar
  "blog/dagsplanering-och-planeringsmoten", // Planering
  "blog/dokumentera-med-foton-pa-bygget", // Fotorapporter
  "blog/hantera-verktyg-och-utrustning", // Verktyg via QR-kod
];

const FINANCE_LINKS: readonly (string | null)[] = [
  "funktioner", // Mobilapp + adminpanel
  "blog/skapa-offert-i-byggexp", // Offerter och fakturor*
  null, // E-postadress för inkommande fakturor* (note only)
  null, // Påminnelser om betalningar
  "blog/loneunderlag-for-byggforetag", // Löner, lönespec och AGI
  "blog/projektekonomi-och-lonsamhet", // Projektekonomi
  "blog/fota-kvitton-och-hantera-utlagg", // Skanna kvitton*
  null, // Personlig ekonomi (kommer snart)
];

// Komplett (after the highlight is split off): items 0/1 jump to the card they
// name, 2/3 link like the plan cards.
const KOMPLETT_LINKS: readonly (string | null)[] = [
  null, // Allt i Koll på jobbet  -> jump to that card
  null, // Allt i Koll på pengarna -> jump to that card
  "blog/loneunderlag-for-byggforetag", // Timmar blir faktura eller lön
  "blog/projektekonomi-och-lonsamhet", // Kvitton/fakturor in i projektekonomin
];
const KOMPLETT_JUMPS: readonly (number | null)[] = [1, 0, null, null];

type ListItem = {
  text: string;
  href?: string;
  /** Item ends with "*": tapping it shows the fair-use note. */
  note?: boolean;
  /** Index of the plan card this item names ("Allt i …"). */
  jump?: number;
};

function toItems(
  items: readonly string[],
  lang: string,
  links: readonly (string | null)[] = [],
  jumps: readonly (number | null)[] = [],
): ListItem[] {
  const linked = FEATURE_LINK_LANGS.includes(lang);
  return items.map((raw, i) => {
    const note = raw.endsWith("*");
    const link = linked ? links[i] : null;
    return {
      text: note ? raw.slice(0, -1) : raw,
      href: link ? `/${lang}/${link}` : undefined,
      note,
      jump: jumps[i] ?? undefined,
    };
  });
}

/** Restart a one-shot CSS animation class on an element. */
function flash(el: HTMLElement | null | undefined, className: string) {
  if (!el) return;
  el.classList.remove(className);
  void el.offsetWidth;
  el.classList.add(className);
  window.setTimeout(() => el.classList.remove(className), 1200);
}

function CheckList({
  items,
  accent,
  idPrefix,
  note,
  openNote,
  onToggleNote,
  onJump,
}: {
  items: readonly ListItem[];
  accent: Accent;
  idPrefix?: string;
  note?: string;
  openNote?: string | null;
  onToggleNote?: (id: string) => void;
  onJump?: (card: number) => void;
}) {
  return (
    <ul className="pricing-list">
      {items.map((item, i) => {
        const noteId = `${idPrefix}-note-${i}`;
        const hasNote = Boolean(item.note && note && onToggleNote);
        const open = hasNote && openNote === noteId;
        const toggle = () => onToggleNote?.(noteId);

        let body: ReactNode = item.text;
        if (item.href) {
          body = (
            <a className="pricing-item-link" href={item.href} draggable={false}>
              {item.text}
            </a>
          );
        } else if (hasNote) {
          body = (
            <button
              type="button"
              className="pricing-item-btn pricing-note-toggle"
              aria-expanded={open}
              aria-controls={noteId}
              onClick={toggle}
            >
              {item.text}*
            </button>
          );
        } else if (item.jump !== undefined && onJump) {
          const card = item.jump;
          body = (
            <button
              type="button"
              className="pricing-item-btn pricing-item-jump"
              onClick={() => onJump(card)}
            >
              {item.text}
            </button>
          );
        }

        return (
          <li key={item.text} data-note-item={hasNote ? noteId : undefined}>
            <span className={`check check-${accent}`}>
              <CheckIcon />
            </span>
            <span className="pricing-item">
              {body}
              {item.href && hasNote ? (
                <button
                  type="button"
                  className="pricing-star-btn pricing-note-toggle"
                  aria-expanded={open}
                  aria-controls={noteId}
                  aria-label={note}
                  onClick={toggle}
                >
                  *
                </button>
              ) : null}
              {item.note && !hasNote ? "*" : null}
              {hasNote ? (
                <span className="pricing-note" id={noteId} hidden={!open}>
                  {note}
                </span>
              ) : null}
            </span>
          </li>
        );
      })}
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

  // Fair-use note for the "*" items: one open at a time; Esc or a tap
  // outside the item closes it.
  const [openNote, setOpenNote] = useState<string | null>(null);
  const noteText = pricingT.fakturaLimitNote.replace(/^\*\s*/, "");

  useEffect(() => {
    if (!openNote) return;
    const item = () =>
      document.querySelector<HTMLElement>(`[data-note-item="${openNote}"]`);
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      item()?.querySelector<HTMLElement>(".pricing-note-toggle")?.focus();
      setOpenNote(null);
    };
    const onPointer = (e: PointerEvent) => {
      if (!item()?.contains(e.target as Node)) setOpenNote(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openNote]);

  const toggleNote = (id: string) =>
    setOpenNote((cur) => (cur === id ? null : id));

  const cardAt = (index: number) =>
    sliderRef.current?.querySelectorAll<HTMLElement>(".pricing-card")[index];

  // "Allt i ..." in Full koll: bring the named card into view and mark it.
  const jumpToCard = (index: number) => {
    const slider = sliderRef.current;
    if (slider && slider.scrollWidth > slider.clientWidth) scrollToSlide(index);
    flash(cardAt(index), "pricing-card-flash");
  };

  // Price or empty card area: the card's own CTA is the next step. The price
  // follows it; anywhere else it is highlighted so the eye lands on it.
  const onCardClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a, button, .pricing-note")) return;
    if (window.getSelection()?.toString()) return;
    const cta = e.currentTarget.querySelector<HTMLAnchorElement>(".btn-primary");
    if (target.closest(".pricing-price")) cta?.click();
    else flash(cta, "pricing-cta-flash");
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
        {
          title: pricingT.planFakturaSub,
          items: toItems(pricingT.financeItems, lang, FINANCE_LINKS),
        },
      ],
      popular: false,
    },
    {
      key: "projekt",
      name: pricingT.planProjekt,
      accent: "purple" as Accent,
      price: fmt(total(PROJEKT)),
      groups: [
        {
          title: pricingT.planProjektSub,
          items: toItems(pricingT.projectItems, lang, PROJECT_LINKS),
        },
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
          items: toItems(
            pricingT.komplettItems
              .slice(0, -1)
              .map((item) =>
                item
                  .replace("{projekt}", pricingT.planProjekt)
                  .replace("{faktura}", pricingT.planFaktura),
              ),
            lang,
            KOMPLETT_LINKS,
            KOMPLETT_JUMPS,
          ),
        },
      ],
      popular: true,
    },
  ];

  return (
    <section className="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{pricingT.pricingTitle}</span>

          <h2>{pricingT.pricingHeading}</h2>

          <p className="section-sub">{pricingT.pricingSub}</p>
        </div>

        {/* CONTROLS: billing period + number of users. The #pricing anchor
            (menu "Priser") sits here so the jump lands on the plans, not
            on the section heading. */}
        <div className="pricing-controls-row" id="pricing">
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
                onClick={onCardClick}
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
                      <CheckList
                        items={group.items}
                        accent={plan.accent}
                        idPrefix={`pricing-${plan.key}`}
                        note={noteText}
                        openNote={openNote}
                        onToggleNote={toggleNote}
                        onJump={jumpToCard}
                      />
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

        {/* Fair-use limits for the "*" items in Koll på pengarna. */}
        <p className="pricing-limit-note">{pricingT.fakturaLimitNote}</p>

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
          <CheckList
            items={toItems(pricingT.addonItems, lang)}
            accent="green"
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
