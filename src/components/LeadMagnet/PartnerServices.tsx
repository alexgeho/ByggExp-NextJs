import { gaEvent } from '../../lib/analytics';
import type { PartnerService } from '../../content/partner-services';

// Renders a "related services" block on high-intent tool pages. Internal guides
// render as normal links; external partner/affiliate entries get a visible
// "Partner" tag and rel="sponsored nofollow" for honest disclosure and SEO.
export default function PartnerServices({
  items,
  context,
}: {
  items: PartnerService[];
  /** For analytics: which tool page the click came from. */
  context: string;
}) {
  if (!items.length) return null;
  return (
    <ul className="lm-partner-list">
      {items.map((item) => (
        <li key={item.href} className="lm-partner-item">
          <a
            className="lm-partner-link"
            href={item.href}
            {...(item.external
              ? { rel: 'sponsored nofollow', target: '_blank' }
              : {})}
            onClick={() =>
              gaEvent('partner_service_click', {
                context,
                href: item.href,
                external: item.external ? 1 : 0,
              })
            }
          >
            <span className="lm-partner-label">
              {item.label}
              {item.external && <span className="lm-partner-tag">Partner</span>}
            </span>
            <span className="lm-partner-desc">{item.description}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
