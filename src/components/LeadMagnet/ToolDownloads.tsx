import type { RefObject } from 'react';

import StickyDownloadBar from './StickyDownloadBar';

// Shared Excel/PDF download row (top + bottom of a template form) and the
// sticky bar that replaces the site header while scrolling — same pattern as
// EgenkontrollTool / HindersanmalanMallTool.

export function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

type Actions = { onExcel: () => void; onPdf: () => void; busy?: boolean };

export function DownloadRow({ onExcel, onPdf, busy, bottom }: Actions & { bottom?: boolean }) {
  return (
    <div className={`lm-tool-actions lm-tool-download${bottom ? ' lm-tool-download--bottom' : ''}`}>
      <button type="button" className="lm-tool-button lm-tool-button--icon" onClick={onExcel}>
        <DownloadIcon />
        <span className="lm-hide-sm">Ladda ner </span>Excel
      </button>
      <button type="button" className="lm-tool-button lm-tool-button--icon" disabled={busy} onClick={onPdf}>
        <DownloadIcon />
        {busy ? 'Skapar PDF…' : <><span className="lm-hide-sm">Ladda ner </span>PDF</>}
      </button>
    </div>
  );
}

export function DownloadSticky({ scope, onExcel, onPdf, busy }: Actions & { scope: RefObject<HTMLElement | null> }) {
  return (
    <StickyDownloadBar scope={scope}>
      <button type="button" className="lm-tool-button lm-tool-button--icon" onClick={onExcel}>
        <DownloadIcon />
        Excel
      </button>
      <button type="button" className="lm-tool-button lm-tool-button--icon" disabled={busy} onClick={onPdf}>
        <DownloadIcon />
        {busy ? 'Skapar PDF…' : 'PDF'}
      </button>
    </StickyDownloadBar>
  );
}

/** Local YYYY-MM-DD (toISOString alone is UTC and can be off by a day). */
export const todayIso = () => {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};
