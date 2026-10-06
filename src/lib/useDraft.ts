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
// - Stored only in this browser (localStorage), never sent anywhere. Keys are
//   namespaced + versioned per tool (`bx-draft:v1:<name>`), so a draft can only
//   come back in the template it was written in; bump DRAFT_VERSION when a
//   draft shape changes incompatibly. The pre-v1 key (`<name>`) is migrated once.

const DRAFT_VERSION = 1;
const storageKey = (name: string) => `bx-draft:v${DRAFT_VERSION}:${name}`;

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

/** Saved draft → flat record of strings (the simple form tools); anything else is dropped. */
export function stringRecord(raw: unknown): Record<string, string> | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) if (typeof v === 'string') out[k] = v;
  return out;
}

/** Parsed draft (always a plain object) or null; corrupt JSON is removed. */
function read(key: string): Record<string, unknown> | null {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const v = JSON.parse(raw) as unknown;
    if (v && typeof v === 'object' && !Array.isArray(v)) return v as Record<string, unknown>;
  } catch {
    /* corrupt JSON / blocked storage */
  }
  remove(key);
  return null;
}

function remove(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* blocked storage */
  }
}

export function useDraft<T>(name: string, value: T, opts: Options<T>) {
  const key = storageKey(name);
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
    // A key change (another template in the same instance) starts clean.
    touched.current = false;
    let raw = read(key);
    if (raw == null) {
      // One-time move from the unversioned key used before v1.
      raw = read(name);
      if (raw != null) {
        remove(name);
        try {
          window.localStorage.setItem(key, JSON.stringify(raw));
        } catch {
          /* quota / blocked storage */
        }
      }
    }
    let saved: T | null = null;
    try {
      saved = raw == null ? null : migrate ? migrate(raw) : (raw as T);
      if (saved != null && !hasContent(saved)) saved = null;
    } catch {
      saved = null; // unexpected shape: treat as no draft
    }
    if (saved != null) {
      touched.current = true;
      apply(saved);
      setRestored(true);
      return;
    }
    if (raw != null) remove(key); // blank/stale/broken draft
    onFresh?.();
  }, [key, name]);

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

  /** Rensa / Börja om / Fyll i exempel: drop the draft; only later edits start a new one. */
  const clear = useCallback(() => {
    touched.current = false;
    remove(key);
    setRestored(false);
  }, [key]);

  // Spread on the tool's root element: any typed/changed field marks the form as edited.
  const bind = { onInputCapture: touch, onChangeCapture: touch };

  return { restored, touch, clear, bind };
}
