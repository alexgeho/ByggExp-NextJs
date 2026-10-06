import { useEffect, type RefObject } from 'react';

// Pill rows are one scrollable line (never a wall of chips): keep the active
// chip centred in its row. Scrolls only the row, never the page.
export function useCenterActiveChip(ref: RefObject<HTMLElement | null>, active: unknown) {
  useEffect(() => {
    const box = ref.current;
    const chip = box?.querySelector<HTMLElement>('.is-active');
    if (!box || !chip || box.scrollWidth <= box.clientWidth) return;
    box.scrollTo({
      left: chip.offsetLeft - box.offsetLeft - (box.clientWidth - chip.offsetWidth) / 2,
      behavior: 'smooth',
    });
  }, [ref, active]);
}
