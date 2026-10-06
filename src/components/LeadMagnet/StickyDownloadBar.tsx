import { useEffect, useState, type ReactNode, type RefObject } from 'react';

// Scrolling DOWN through a template → a bar with the download buttons slides
// over the site header; scrolling UP → the normal header is back (owner,
// 2026-10-06). Only while the tool is on screen and neither of its own
// download rows (top / bottom of the form) is visible.
export default function StickyDownloadBar({
  scope,
  children,
}: {
  scope: RefObject<HTMLElement | null>;
  children: ReactNode;
}) {
  const [shown, setShown] = useState(false);
  // Cover the site header exactly (its height differs desktop / phone).
  const [height, setHeight] = useState<number | undefined>();

  useEffect(() => {
    const header = document.querySelector('header');
    // eslint-disable-next-line react-hooks/set-state-in-effect -- header height is only measurable after mount.
    if (header) setHeight(header.getBoundingClientRect().height);
    let lastY = window.scrollY;
    const visible = (el: Element | null | undefined) => {
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return r.bottom > 0 && r.top < window.innerHeight;
    };
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) < 6) return;
      lastY = y;
      const root = scope.current;
      if (!root || delta < 0) {
        setShown(false);
        return;
      }
      const rows = root.querySelectorAll('.lm-tool-download');
      const inTool = visible(root);
      const rowVisible = Array.from(rows).some((r) => visible(r));
      setShown(inTool && !rowVisible);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scope]);

  return (
    <div
      className={`lm-sticky-dl${shown ? ' is-shown' : ''}`}
      aria-hidden={!shown}
      style={height ? { minHeight: height } : undefined}
    >
      <div className="lm-sticky-dl-inner">{children}</div>
    </div>
  );
}
