import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { SearchItem } from '../../pages/api/search';

type SiteSearchProps = {
  lang: string;
  placeholder: string;
  label: string;
  emptyHint: string;
  noResults: string;
};

// Global, always-available search shown in the header on every page (incl.
// articles and tools). Loads a merged index from /api/search once, then filters
// client-side. Open with the header button or Cmd/Ctrl+K, close with Esc.
export default function SiteSearch({
  lang,
  placeholder,
  label,
  emptyHint,
  noResults,
}: SiteSearchProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<SearchItem[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load the index the first time search is opened.
  useEffect(() => {
    if (!open || items) return;
    let cancelled = false;
    fetch(`/api/search?lang=${lang}`)
      .then((r) => r.json())
      .then((data: { items: SearchItem[] }) => {
        if (!cancelled) setItems(data.items || []);
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      });
    return () => {
      cancelled = true;
    };
  }, [open, items, lang]);

  // Focus the field when the modal opens.
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Cmd/Ctrl+K to open, Esc to close.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll while the modal is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const results = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (words.length === 0 || !items) return [];
    // Require every word to match somewhere in the item's text (AND), so a
    // multi-word query like "betong kalkylator" works.
    return items
      .filter((it) => {
        const hay = `${it.title} ${it.excerpt} ${it.tag}`.toLowerCase();
        return words.every((w) => hay.includes(w));
      })
      .slice(0, 12);
  }, [query, items]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
  }, []);

  return (
    <>
      <button
        type="button"
        className="site-search-trigger"
        onClick={() => setOpen(true)}
        aria-label={label}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open ? (
        <div className="site-search-overlay" role="dialog" aria-modal="true" aria-label={label}>
          <div className="site-search-backdrop" onClick={close} />
          <div className="site-search-panel">
            <div className="site-search-field">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                type="search"
                value={query}
                placeholder={placeholder}
                onChange={(e) => setQuery(e.target.value)}
                aria-label={placeholder}
              />
              <button type="button" className="site-search-close" onClick={close} aria-label="Stäng">
                Esc
              </button>
            </div>

            <div className="site-search-results">
              {query.trim() === '' ? (
                <p className="site-search-hint">{emptyHint}</p>
              ) : results.length === 0 ? (
                <p className="site-search-hint">{items ? noResults : '…'}</p>
              ) : (
                results.map((it) => (
                  <Link key={it.url} href={it.url} className="site-search-result" onClick={close}>
                    <span className={`site-search-badge site-search-badge--${it.type}`}>
                      {it.type === 'tool' ? 'Verktyg' : it.tag || 'Artikel'}
                    </span>
                    <span className="site-search-result-title">{it.title}</span>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
