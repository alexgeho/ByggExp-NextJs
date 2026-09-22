// Site-wide download counter for the free tools (PDF/Excel/CSV/JPG …).
//
// Every tool triggers its download the same way — an <a download> that is
// clicked programmatically (our own helpers, or jsPDF's doc.save via FileSaver,
// which dispatches a synthetic click on a detached anchor). Instead of wiring a
// call into ~30 tools we hook that single mechanism once, in _app.
//
// Each download is sent to /api/track-download (first-party, aggregate, no
// identifier) and to GA4 as `file_download`. "Returning" is measured without an
// id: a per-browser counter of previous downloads, bucketed (0 / 1 / 2–4 / 5+).
import { gaEvent } from './analytics';

const COUNT_KEY = 'bx-dl-n';

function priorBucket(): string {
  let n = 0;
  try {
    n = Number(window.localStorage.getItem(COUNT_KEY) || 0) || 0;
    window.localStorage.setItem(COUNT_KEY, String(n + 1));
  } catch {
    /* storage blocked – count as first-time */
  }
  if (n === 0) return '0';
  if (n === 1) return '1';
  if (n < 5) return '2-4';
  return '5+';
}

let last = { key: '', at: 0 };

function track(anchor: HTMLAnchorElement) {
  const name = anchor.download || '';
  const ext = (name.split('.').pop() || '').toLowerCase().slice(0, 8);
  const path = window.location.pathname;
  // Some helpers fire both click() and a dispatched event — count once.
  const key = `${path}|${name}`;
  const now = Date.now();
  if (key === last.key && now - last.at < 1500) return;
  last = { key, at: now };

  const payload = { path, format: ext, prior: priorBucket() };
  gaEvent('file_download', { tool_path: path, file_extension: ext, prior_downloads: payload.prior });
  try {
    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/track-download', new Blob([body], { type: 'application/json' }));
    } else {
      void fetch('/api/track-download', { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'application/json' } });
    }
  } catch {
    /* tracking must never break a download */
  }
}

const isDownloadAnchor = (el: unknown): el is HTMLAnchorElement =>
  el instanceof HTMLAnchorElement && el.hasAttribute('download');

export function installDownloadTracking() {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { __bxDlTracking?: boolean };
  if (w.__bxDlTracking) return;
  w.__bxDlTracking = true;

  const origClick = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function patchedClick(this: HTMLAnchorElement) {
    if (isDownloadAnchor(this)) track(this);
    return origClick.call(this);
  };

  const origDispatch = EventTarget.prototype.dispatchEvent;
  EventTarget.prototype.dispatchEvent = function patchedDispatch(this: EventTarget, event: Event) {
    if (event.type === 'click' && isDownloadAnchor(this)) track(this);
    return origDispatch.call(this, event);
  };

  // Real user clicks on static <a download> links (e.g. blank templates).
  document.addEventListener(
    'click',
    (e) => {
      const a = (e.target as Element | null)?.closest?.('a[download]');
      if (a && e.isTrusted) track(a as HTMLAnchorElement);
    },
    true,
  );
}
