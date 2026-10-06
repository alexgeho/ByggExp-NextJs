import { useCallback, useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';

// Calculator inputs mirrored in the URL query (?l=10&b=8), so a calculation can
// be bookmarked, shared and comes back on reload.
//
// SSR-safe: the server (static page) always renders the default example; the
// query is applied after mount. A page with more than one calculator (e.g. a
// blog article) turns the sync off for all of them, so params can't collide.
//
// Usage inside a tool:
//   const u = useUrlScope();
//   const [length, setLength] = useUrlParam(u, 'l', '10');

export type UrlScope = { active: boolean; off: boolean };

const registry = new Set<object>();
let pending: Record<string, string | null> = {};
// Path the pending writes belong to: a client-side navigation inside the
// debounce window must not carry them onto the next page.
let pendingPath = '';
let timer: ReturnType<typeof setTimeout> | null = null;

function dropPending() {
  if (timer) clearTimeout(timer);
  timer = null;
  pending = {};
}

export function flushUrlState() {
  if (timer) clearTimeout(timer);
  timer = null;
  if (typeof window === 'undefined' || !Object.keys(pending).length) return;
  if (window.location.pathname !== pendingPath) {
    pending = {};
    return;
  }
  try {
    const url = new URL(window.location.href);
    for (const [k, v] of Object.entries(pending)) {
      if (v == null) url.searchParams.delete(k);
      else url.searchParams.set(k, v);
    }
    pending = {};
    const next = `${url.pathname}${url.search}${url.hash}`;
    const cur = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (next === cur) return;
    // Keep Next's router state (pages router) consistent; no new history entry, no scroll.
    const state = window.history.state && typeof window.history.state === 'object'
      ? { ...window.history.state, as: next }
      : window.history.state;
    window.history.replaceState(state, '', next);
  } catch {
    pending = {};
  }
}

function queueWrite(key: string, value: string | null) {
  if (window.location.pathname !== pendingPath) {
    pending = {};
    pendingPath = window.location.pathname;
  }
  pending[key] = value;
  if (timer) clearTimeout(timer);
  timer = setTimeout(flushUrlState, 300);
}

/** One per calculator. Active only once mounted and when it is the only calculator on the page. */
export function useUrlScope(): UrlScope {
  const [mode, setMode] = useState<'pending' | 'active' | 'off'>('pending');
  useEffect(() => {
    const id = {};
    registry.add(id);
    // Embedded in an iframe (/embed on a partner site): the URL is not the visitor's to share.
    let framed = false;
    try {
      framed = window.self !== window.top;
    } catch {
      framed = true;
    }
    // Wait for every calculator in the same commit to register.
    const t = setTimeout(() => setMode(!framed && registry.size === 1 ? 'active' : 'off'), 0);
    return () => {
      clearTimeout(t);
      registry.delete(id);
      if (!registry.size) dropPending();
    };
  }, []);
  return { active: mode === 'active', off: mode === 'off' };
}

type Codec<T> = { parse: (raw: string) => T | undefined; format: (v: T) => string };

// Upper bound for any number read from the URL (keeps results finite and sane).
const MAX_ABS = 1e9;

// Free string params are number fields (incl. '' = cleared) or ISO dates; anything
// else in the URL is ignored. Selects/unions must pass their allowed values.
const NUMERIC_RE = /^-?\d{0,10}(?:[.,]\d{0,6})?$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const stringCodec: Codec<string> = {
  parse: (r) => {
    if (DATE_RE.test(r)) return r;
    if (!NUMERIC_RE.test(r)) return undefined;
    const n = parseFloat(r.replace(',', '.'));
    return Number.isNaN(n) || Math.abs(n) <= MAX_ABS ? r : undefined;
  },
  format: (v) => v,
};
const numberCodec: Codec<number> = {
  parse: (r) => {
    const n = Number(r);
    return r.trim() !== '' && Number.isFinite(n) && Math.abs(n) <= MAX_ABS ? n : undefined;
  },
  format: (v) => String(v),
};
const boolCodec: Codec<boolean> = {
  parse: (r) => (r === '1' ? true : r === '0' ? false : undefined),
  format: (v) => (v ? '1' : '0'),
};

/** True for a string the default codec would accept (number field value). */
export function isNumericText(v: unknown): v is string {
  return typeof v === 'string' && stringCodec.parse(v) === v;
}

/** JSON codec for small arrays/records (rows, layers). `valid` is mandatory: URL input is untrusted. */
export function jsonCodec<T>(valid: (v: unknown) => v is T): Codec<T> {
  return {
    parse: (r) => {
      if (r.length > 2000) return undefined;
      try {
        const v = JSON.parse(r) as unknown;
        return valid(v) ? v : undefined;
      } catch {
        return undefined;
      }
    },
    format: (v) => JSON.stringify(v),
  };
}

function defaultCodec<T>(def: T): Codec<T> {
  if (typeof def === 'number') return numberCodec as unknown as Codec<T>;
  if (typeof def === 'boolean') return boolCodec as unknown as Codec<T>;
  return stringCodec as unknown as Codec<T>;
}

/**
 * useState that mirrors its value into the query param `key`.
 * `opts` narrows a union (allowed values) or supplies a codec for non-scalars.
 */
export function useUrlParam<T>(
  scope: UrlScope,
  key: string,
  def: T,
  opts?: readonly T[] | Codec<T>,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(def);
  const touched = useRef(false);
  // Codec/allowed list are fixed per call site (only their behaviour matters, not identity).
  const codec: Codec<T> = opts && !Array.isArray(opts) ? (opts as Codec<T>) : defaultCodec(def);
  const allowed: readonly T[] | null = Array.isArray(opts) ? (opts as readonly T[]) : null;
  const defStr = codec.format(def);
  const { active } = scope;

  // Apply the query once the scope is active (after mount → no hydration mismatch).
  useEffect(() => {
    if (!active) return;
    let raw: string | null = null;
    try {
      raw = new URLSearchParams(window.location.search).get(key);
    } catch {
      raw = null;
    }
    if (raw == null) return;
    const v = codec.parse(raw);
    if (v === undefined) return;
    if (allowed && !allowed.includes(v)) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- apply the URL query after mount (static page renders the default example).
    setValue(v);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, key]);

  const set = useCallback<Dispatch<SetStateAction<T>>>((a) => {
    touched.current = true;
    setValue(a);
  }, []);

  // Write user changes back (debounced, replaceState). Defaults are dropped from the URL.
  useEffect(() => {
    if (!active || !touched.current) return;
    const s = codec.format(value);
    queueWrite(key, s === defStr ? null : s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, key, value, defStr]);

  return [value, set];
}

/** Allowed values for the common ja/nej selects. */
export const YES_NO: readonly string[] = ['ja', 'nej'];
