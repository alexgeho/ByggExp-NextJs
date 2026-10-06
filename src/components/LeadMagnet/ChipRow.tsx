import { useEffect, useRef, type ReactNode } from 'react';

// Horizontally scrollable row of template chips. Starts with the active chip
// fully in view; the edge fades only appear on a side that has more chips to
// scroll to (no left fade at the start), so no chip is ever half hidden.
// Native overflow scrolling — works with touch, trackpad and keyboard.
export default function ChipRow({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = ref.current;
    if (!box) return;
    const update = () => {
      const max = box.scrollWidth - box.clientWidth;
      box.classList.toggle('has-fade-left', box.scrollLeft > 2);
      box.classList.toggle('has-fade-right', box.scrollLeft < max - 2);
    };
    // Bring the active chip into view (only scrolls when it starts off-screen).
    const active = box.querySelector<HTMLElement>('.is-active');
    if (active) {
      const b = box.getBoundingClientRect();
      const a = active.getBoundingClientRect();
      // Land it past the 40px left fade.
      if (a.right > b.right) box.scrollLeft += a.left - b.left - 48;
    }
    update();
    box.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      box.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div ref={ref} className={`lm-tool-presets-buttons${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}
