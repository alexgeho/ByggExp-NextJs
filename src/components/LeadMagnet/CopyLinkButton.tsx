import { useEffect, useRef, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { flushUrlState, type UrlScope } from '../../lib/useUrlState';

// Icon-only "copy link" next to a calculator result: the URL carries the inputs
// (see useUrlState), so the link saves/shares the calculation.

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to the legacy path */
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export default function CopyLinkButton({ scope, tool, en = false }: { scope: UrlScope; tool: string; en?: boolean }) {
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);
  if (scope.off) return null;

  const label = en ? 'Copy link' : 'Kopiera länk';
  const doneLabel = en ? 'Link copied' : 'Länk kopierad';

  const onClick = async () => {
    flushUrlState();
    const ok = await copyText(window.location.href);
    if (!ok) return;
    gaEvent('copy_link', { tool });
    setDone(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setDone(false), 1800);
  };

  return (
    <button
      type="button"
      className={`lm-copy-link${done ? ' is-done' : ''}`}
      aria-label={done ? doneLabel : label}
      title={label}
      onClick={() => void onClick()}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {done ? (
          <path d="M20 6 9 17l-5-5" />
        ) : (
          <>
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </>
        )}
      </svg>
      {done ? <span className="lm-copy-link-tip" role="status">{doneLabel}</span> : null}
    </button>
  );
}
