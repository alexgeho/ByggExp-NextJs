# ByggExp — product feature inventory (admin.byggexp.se)

Live inventory of the admin app modules, read from admin.byggexp.se (logged in as companyAdmin), 2026-08-30.
Purpose: map real product features → SEO keyword clusters (see `docs/seo/keywords-master.md`) so content
is built on features we actually have. ✅ = has landing/blog page · ❌ = feature exists, NO dedicated page (gap).

## Navigation / modules

### Top
- **Översikt** (`/company`) — dashboard: KPIs (aktiva projekt, på jobbet, öppna uppgifter, arbetstimmar idag),
  personalöversikt (who's on the job + hours today + project), kommande deadlines.
- **Mitt arbete** (`/company/my-work`) — personal work view.

### PRODUKTION
- **Projekt** (`/company/projects`) — project management. Statuses: Planering / Pågår / Avslutat / Pausat.
  List: projektledare, plats, budget, start/slut, kund. Project detail tabs:
  **Allmänt** (projektöversikt, betalningsplan, team, uppgifter & deadlines, foton) ·
  **Ekonomi** (budget, betalningsplan, kostnader, marginal) · **Tid & personal** (timmar, team) ·
  **Filer** (dokument/foton) · **Inställningar**. → maps: projektledning/projekthantering bygg, projektuppföljning.
- **Uppgifter** (`/company/tasks`) — task management, prioritet (low/normal/high), deadlines, "Snabb uppgift".
- **Dagbok** (`/company/dagbok`) — construction diary (byggdagbok). → maps: byggdagbok / digital byggdagbok.
- **KMA** (`/company/kma`) — KMA & egenkontroller: egenkontroller + Mallar (templates), kategori, punkter, status.
  → maps: egenkontroll, KMA, riskanalys app.
- **Bemanning** (`/company/bemanning`) — weekly staffing grid (anställd × weekday), assign to projects per day,
  absence pulled from Frånvaro-modul, överbokad = red. → maps: bemanning / bemanningsplanering / bemanningssystem.
- **Verktyg** (`/company/tools`) — tool/equipment inventory with **QR-codes**. Statuses: Tillgänglig / Används /
  På reparation / Trasig; innehas av (person), projekt, anteckningar. → maps: verktygshantering / verktyg QR (NEW cluster to research).
- **Personal** (`/company/users`) — staff/user management, roles (companyAdmin, projektledare, worker/snickare…).

### TID & PERSONAL
- **Arbetspass** (`/company/shifts`) — work shifts / time clock. Check-in/out (mobile app + GPS), hours as
  Planned / GPS / Manual, OB & övertid enligt byggavtalet, export → lön & faktura. → maps: tidrapportering/system, stämpelklocka.
- **Planering** (`/company/schedule`) — **Gantt-style planner**. Plan by **Personal** or **Projekt**, views
  2 veckor / Månad / Anpassad, drag-assign to timeline, **Ändringslogg**. → maps: schemaläggning(ssystem), tidplan/tidsplan, resursplanering.
- **Frånvaro** (`/company/leave`) — absence/leave management (feeds Bemanning). → maps: frånvaro (research).

### EKONOMI
- **Offerter** (`/company/invoicing/offers`) — quotes/offers. → maps: offert bygg, mall offert bygg.
- **Fakturor** (`/company/invoicing/invoices`) — invoices, incl. löpande räkning from logged hours. → maps: faktura, fakturamall.
- **Inköpsfakturor** (`/company/invoicing/supplier-invoices`) — supplier invoices.

### Platform / cross-cutting
- **Mobile app** — worker check-in, GPS, stämpla in/ut (seen in video scripts + shifts flow).
- Multi-language (SV/EN/NB toggle), dark mode (Mörkt läge), global search, notifications, "Att göra" todo, QR printing.

## Feature → keyword-cluster coverage (what to build)

| Module | Keyword cluster | Volym (top) | Page? |
|---|---|---|---|
| Arbetspass / Projekt-tid | Tidrapportering / system | tidrapporteringssystem bygg 5400 | ✅ blog exists |
| Planering + Bemanning | **Planering pillar** (schema/resurs/tidplan/bemanning) | schemaläggningssystem 2400, resursplaneringsverktyg 1600 | ❌ no pillar |
| Projekt | Projektledning/projekthantering | projekthantering bygg 2900 | ❌ new vertical |
| KMA | Egenkontroll / KMA / riskanalys | (have GSC signal) | ✅ partial |
| Dagbok | Byggdagbok | digital byggdagbok (volym pending) | ❌ no page |
| Verktyg (QR) | Verktygshantering / QR | (research) | ❌ no page |
| Offerter / Fakturor | Offert / faktura / kalkyl | mall offert bygg, fakturamall (pending) | ✅ tools exist |
| Uppgifter | (task mgmt, low search) | — | — |
| Personalliggare | 🛠️ shipping soon (not live yet, 2026-08-30) | personalliggare 1000 | ✅ content live (intentional) |

🛠️ **Personalliggare — not shipped yet but coming soon** (owner decision 2026-08-30). The module isn't live
in admin nav today, BUT existing published content already promises it (article `personalliggare-bygg-app`
+ links from pillar, stampelklocka-gps, regelverk, features). Owner chose to **keep that content live** since
the feature ships soon — don't rewrite/unpublish it. ⚠️ Action item: when the module ships, re-verify the
published claims match the real feature. [[competitor-eliggare]]

## Biggest gaps (feature exists, no content)
1. **Planering pillar** — Gantt planner + Bemanning are strong features, no landing. Highest-value gap.
2. **Projektledning/projekthantering** — full project module, no B2B landing.
3. **Byggdagbok** — Dagbok module, no page.
4. **Verktyg/QR** — unique feature, no page (also a fresh keyword cluster to research).
