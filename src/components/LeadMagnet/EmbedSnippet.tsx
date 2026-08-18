import { useState } from 'react';

// Copy-paste embed snippet shown on a tool page. The snippet is an <iframe> of
// the bare /sv/embed/<slug> page PLUS an attribution <a> that lives in the host
// page's DOM — that link is the white-hat backlink back to byggexp.se.
const SITE = 'https://byggexp.se';

export default function EmbedSnippet({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const embedUrl = `${SITE}/sv/embed/${slug}`;
  const toolUrl = `${SITE}/sv/verktyg/${slug}`;
  const snippet =
    `<iframe src="${embedUrl}" width="100%" height="560" ` +
    `style="border:1px solid #e6eaf1;border-radius:12px;max-width:560px" ` +
    `title="${title}" loading="lazy"></iframe>\n` +
    `<p style="font:13px sans-serif;margin:8px 0">Kalkylator av ` +
    `<a href="${toolUrl}">ByggExp</a></p>`;

  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked – the textarea is selectable as fallback */
    }
  };

  return (
    <>
      <p>
        Har du en egen sajt, blogg eller kundportal? Bädda in den här kalkylatorn
        gratis – kopiera koden nedan och klistra in där du vill ha den. En liten
        länk tillbaka till ByggExp följer med.
      </p>
      <textarea
        readOnly
        value={snippet}
        rows={4}
        className="embed-snippet-box"
        onFocus={(e) => e.currentTarget.select()}
        aria-label="Inbäddningskod"
      />
      <div className="lm-tool-actions" style={{ marginTop: 10 }}>
        <button type="button" className="lm-tool-button" onClick={copy}>
          {copied ? 'Kopierat!' : 'Kopiera inbäddningskod'}
        </button>
      </div>
      <style jsx>{`
        .embed-snippet-box {
          width: 100%;
          font: 12px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
          padding: 12px 14px;
          border: 1px solid rgba(10, 40, 90, 0.18);
          border-radius: 10px;
          background: #fff;
          color: #24344d;
          resize: vertical;
        }
      `}</style>
    </>
  );
}
