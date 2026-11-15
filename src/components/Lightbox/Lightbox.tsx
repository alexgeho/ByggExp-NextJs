import { useEffect } from "react";

// Full-screen image viewer — ONE component for every page that opens a
// screenshot on click (R38): home features, feature pages, landing pages and
// blog articles. Closed (`src` null) it renders nothing. Open: Esc or a click
// on the backdrop / close button closes it, page scroll is locked.
// Styles: `.image-lightbox*` in components/Features/Features.scss.

type Props = {
  /** Image to show; null = closed. */
  src: string | null;
  onClose: () => void;
  /** aria-label of the close button. */
  closeLabel?: string;
};

export default function Lightbox({ src, onClose, closeLabel = "Stäng" }: Props) {
  useEffect(() => {
    if (!src) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // onClose is a state setter wrapper; the effect follows the image only,
    // exactly like the page-level effects this component replaced.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  if (!src) return null;

  return (
    <div className="image-lightbox" onClick={onClose}>
      <button
        type="button"
        className="image-lightbox-close"
        onClick={onClose}
        aria-label={closeLabel}
      >
        <svg viewBox="0 0 24 24" fill="none">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="m5 5 14 14M19 5 5 19"
          />
        </svg>
      </button>

      <img
        src={src}
        alt=""
        className="image-lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
