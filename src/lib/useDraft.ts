import { useCallback, useEffect, useRef, useState } from 'react';

// Template draft autosave (localStorage, per tool). The visitor can start filling
// in a template, close the tab and continue later.
//
// - Restored after mount only (no SSR/hydration mismatch).
// - Nothing is stored until the user actually edits a field (input/change event
//   inside the tool, or an explicit `touch()`): the untouched page, a picked
//   template or the prefilled example never create a key.
// - `hasContent` decides what counts as real input; an empty draft removes the key.
// - Every storage access is wrapped (private mode / blocked storage / quota).

type Options<T> = {
  /** Apply a saved draft to the tool's state. */
  apply: (saved: T) => void;
  /** True when the value holds real user input (not blank / not a template default). */
  hasContent: (value: T) => boolean;
  /** Called after mount when there is nothing to restore (e.g. set today's date). */
  onFresh?: () => void;
  /** Turn a raw parsed draft into T (migrations); return null to discard it. */
  migrate?: (raw: unknown) => T | null;
};

/** True when any string (deep) is non-blank; keys in `skip` (e.g. the auto date) don't count. */
export function hasText(v: unknown, skip: readonly string[] = ['date']): boolean {
  if (typeof v === 'string') return v.trim() !== '';
  if (Array.isArray(v)) return v.some((x) => hasText(x, skip));
  if (v && typeof v === 'object') {
    return Object.entries(v).some(([k, x]) => !skip.includes(k) && hasText(x, skip));
  }
  return false;
}

function read(key: string): unknown {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as unknown) : null;
  } catch {
    return null;
  }
}

function remove(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* blocked storage */
  }
}

export function useDraft<T>(key: string, value: T, opts: Options<T>) {
  const [restored, setRestored] = useState(false);
  // The initial state object: never saved as-is (it's the untouched form).
  const [initial] = useState(value);
  const touched = useRef(false);
  const optsRef = useRef(opts);
  useEffect(() => {
    optsRef.current = opts;
  });

  useEffect(() => {
    const { apply, hasContent, onFresh, migrate } = optsRef.current;
    const raw = read(key);
    const saved = raw == null ? null : migrate ? migrate(raw) : (raw as T);
    if (saved != null && hasContent(saved)) {
      touched.current = true;
      apply(saved);
      setRestored(true);
      return;
    }
    if (raw != null) remove(key); // blank/stale draft
    onFresh?.();
  }, [key]);

  useEffect(() => {
    if (!touched.current || value === initial) return;
    try {
      if (optsRef.current.hasContent(value)) window.localStorage.setItem(key, JSON.stringify(value));
      else window.localStorage.removeItem(key);
    } catch {
      /* quota / blocked storage */
    }
  }, [key, value, initial]);

  const touch = useCallback(() => {
    touched.current = true;
  }, []);

  /** Rensa / Börja om: drop the draft; later edits start a new one. */
  const clear = useCallback(() => {
    touched.current = false;
    remove(key);
    setRestored(false);
  }, [key]);

  // Spread on the tool's root element: any typed/changed field marks the form as edited.
  const bind = { onInputCapture: touch, onChangeCapture: touch };

  return { restored, touch, clear, bind };
}
