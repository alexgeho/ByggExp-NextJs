import { APP_CTA } from '../../config/cta';
import { gaEvent } from '../../lib/analytics';

// Conversion block shown right where a free tool delivers its result: the visitor
// just made an egenkontroll / kontrakt / arbetsberedning, so this is the highest-
// intent moment to pull them into the product. sv-only, matches the lead-magnet
// look. Keep it honest: the primary action points at the real conversion route
// (/sv/contact – boka demo), not a fake checkout.
export type ToolAppCtaAction = { href: string; label: string };

export default function ToolAppCta({
  tool,
  heading,
  text,
  bullets,
  primary = APP_CTA,
  secondary,
}: {
  /** Tool slug, for analytics (which tool the CTA converted from). */
  tool: string;
  heading: string;
  text: string;
  bullets?: string[];
  primary?: ToolAppCtaAction;
  secondary?: ToolAppCtaAction;
}) {
  const track = (action: string) => () =>
    gaEvent('tool_app_cta_click', { tool, action });

  return (
    <aside className="lm-appcta" aria-label="Fortsätt i ByggExp">
      <h3 className="lm-appcta-heading">{heading}</h3>
      <p className="lm-appcta-text">{text}</p>
      {bullets && bullets.length > 0 && (
        <ul className="lm-appcta-list">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      <div className="lm-appcta-actions">
        <a className="lm-appcta-button" href={primary.href} onClick={track('primary')}>
          {primary.label}
        </a>
        {secondary && (
          <a className="lm-appcta-link" href={secondary.href} onClick={track('secondary')}>
            {secondary.label}
          </a>
        )}
      </div>
    </aside>
  );
}
