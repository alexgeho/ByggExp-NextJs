import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type SliderCard = {
  id: string;
  icon: ReactNode;
  iconClass: string;
  audience?: string;
  title?: string;
  text: string;
};

const COPIES = 3; // render the deck 3× and keep the user in the middle copy

// Card carousel for the Benefits section. The active card sits in the centre
// with the previous/next cards peeking in dimmed on both sides, and it loops
// endlessly: the deck is rendered three times and, once scrolling settles in
// an outer copy, we jump (without animation) to the same card in the middle
// copy — so swiping or clicking never hits an end.
export default function BenefitSlider({ cards }: { cards: SliderCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const n = cards.length;
  const [pos, setPos] = useState(n); // absolute index in the tripled list
  const settleTimer = useRef<number | undefined>(undefined);

  // Distance between two neighbouring cards, measured (the gap differs on phones).
  const step = useCallback(() => {
    const [a, b] = trackRef.current?.querySelectorAll<HTMLElement>(".benefit-card") ?? [];
    return a && b ? b.offsetLeft - a.offsetLeft : 0;
  }, []);

  // Side padding so the first/last card can also sit in the centre.
  const layout = useCallback(() => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(".benefit-card");
    if (!track || !card) return;
    const side = Math.max(0, (track.clientWidth - card.offsetWidth) / 2);
    track.style.paddingLeft = `${side}px`;
    track.style.paddingRight = `${side}px`;
  }, []);

  const jumpTo = useCallback((index: number, smooth: boolean) => {
    const track = trackRef.current;
    const width = step();
    if (!track || !width) return;
    track.scrollTo({ left: index * width, behavior: smooth ? "smooth" : "auto" });
    setPos(index);
  }, [step]);

  useEffect(() => {
    layout();
    jumpTo(n, false);
    const onResize = () => {
      layout();
      const track = trackRef.current;
      const width = step();
      if (track && width) track.scrollLeft = Math.round(track.scrollLeft / width) * width;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [layout, jumpTo, step, n]);

  function handleScroll() {
    const track = trackRef.current;
    const width = step();
    if (!track || !width) return;
    const index = Math.round(track.scrollLeft / width);
    setPos(index);
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      // Left the middle copy → hop back to the same card inside it.
      if (index < n || index >= 2 * n) jumpTo(((index % n) + n) % n + n, false);
    }, 140);
  }

  const active = ((pos % n) + n) % n;
  const deck = Array.from({ length: COPIES }, (_, copy) =>
    cards.map((card, i) => ({ card, key: `${copy}-${card.id}`, abs: copy * n + i, clone: copy !== 1 })),
  ).flat();

  return (
    <div className="benefits-slider benefits-slider--peek">
      <div className="benefits-slider-frame">
        <button
          type="button"
          className="benefits-arrow benefits-arrow-left"
          onClick={() => jumpTo(pos - 1, true)}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="benefits-track" ref={trackRef} onScroll={handleScroll}>
          {deck.map(({ card, key, abs, clone }) => (
            <div
              className={`benefit-card${abs === pos ? " is-active" : ""}`}
              key={key}
              aria-hidden={clone || undefined}
              onClick={abs !== pos ? () => jumpTo(abs, true) : undefined}
            >
              {card.audience && (
                <span className="benefit-audience">{card.audience.replace(/:\s*$/, "")}</span>
              )}
              <div className={card.iconClass}>{card.icon}</div>
              {card.title && <h3>{card.title}</h3>}
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="benefits-arrow benefits-arrow-right"
          onClick={() => jumpTo(pos + 1, true)}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <div className="benefits-dots">
        {cards.map((card, index) => (
          <span
            key={card.id}
            className={active === index ? "active" : ""}
            onClick={() => jumpTo(n + index, true)}
          />
        ))}
      </div>
    </div>
  );
}
