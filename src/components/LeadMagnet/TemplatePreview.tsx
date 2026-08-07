// A lightweight, self-contained SVG "what the template looks like" preview.
// Gives the page a real image (with a keyword-rich caption/aria-label) without
// depending on an external asset — the designer can later swap it for a polished
// screenshot. Two variants: a form (label + value lines) or a checklist (rows
// with a status box).

type Variant = 'form' | 'checklist';

type TemplatePreviewProps = {
  title: string;
  lines: string[];
  caption: string;
  variant?: Variant;
};

const PAPER = '#ffffff';
const INK = '#0a2236';
const MUTED = '#93a1b0';
const LINE = '#e4e9f0';
const ACCENT = '#2394ff';

export default function TemplatePreview({
  title,
  lines,
  caption,
  variant = 'form',
}: TemplatePreviewProps) {
  const rowStart = 96;
  const rowGap = variant === 'checklist' ? 46 : 54;
  const height = rowStart + lines.length * rowGap + 24;

  return (
    <figure className="lm-preview">
      <svg
        className="lm-preview-svg"
        viewBox={`0 0 440 ${height}`}
        role="img"
        aria-label={caption}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="8" width="424" height={height - 16} rx="16" fill={PAPER} stroke={LINE} />
        <rect x="8" y="8" width="424" height="8" rx="4" fill={ACCENT} />
        <text x="32" y="52" fill={INK} fontSize="22" fontWeight="700" fontFamily="sans-serif">
          {title}
        </text>
        <text x="32" y="72" fill={MUTED} fontSize="12" fontFamily="sans-serif">
          Skapad med ByggExp – byggexp.se
        </text>

        {lines.map((label, index) => {
          const y = rowStart + index * rowGap;
          if (variant === 'checklist') {
            return (
              <g key={label}>
                <rect x="32" y={y - 12} width="16" height="16" rx="3" fill="none" stroke={MUTED} />
                <text x="58" y={y + 1} fill={INK} fontSize="13" fontFamily="sans-serif">
                  {label}
                </text>
                <rect x="330" y={y - 11} width="78" height="15" rx="7" fill="#eef5ff" />
              </g>
            );
          }
          return (
            <g key={label}>
              <text x="32" y={y} fill={INK} fontSize="13" fontWeight="600" fontFamily="sans-serif">
                {label}
              </text>
              <rect x="32" y={y + 10} width="376" height="8" rx="4" fill={LINE} />
            </g>
          );
        })}
      </svg>
      <figcaption className="lm-preview-caption">{caption}</figcaption>
    </figure>
  );
}
