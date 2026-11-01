# ByggExp — verified product facts (code-checked 2026-10-06). Copy may ONLY claim YES items.

## Dagbok (byggdagbok)
- YES: web (admin) dagbok entries per project/day with photos, weather + temperature (typed manually), crewCount/personnel, work performed, deviations, materials, notes.
- NO: GPS/timestamp on dagbok photos, automatic weather, sign/lock day, PDF export of dagbok, customer/beställare access, ÄTA link inside dagbok, dagbok in mobile app (mobile has only a one-line day note on the shift).

## Tidrapportering / Arbetspass
- YES: mobile app (iPhone + Android) check-in/out with GPS; geofence auto-pause when leaving project area; hours per project; hour type normal/övertid/OB chosen per pass; restid (km + minutes); traktamente (none/half/full); ÄTA tagged on the shift (ataId) → billable later; attest/approval (one level, by admin/project admin); exports: time report PDF + Excel (xlsx), payroll CSV, AGI-underlag CSV, SIE4 export (for Fortnox/Visma/BL; integrations add-on 199 kr/mån); personalliggare PDF; certificates incl. ID06 with expiry date on the user.
- NO: Fortnox/Visma API integration (say "SIE4-fil / CSV-export"), offline mode, multi-level or UE attest, OB/övertid auto-calculated per Byggavtalet (worker picks hour type; don't claim automatic Byggavtalet calc), ID06 card/register integration, subcontractor role.

## Lön (Löner, webbadmin) — code-checked 2026-10-14
- YES: lönekörning per period; timmar per medarbetare och timtyp (normal/övertid/OB enligt passets timtyp); bruttolön = timmar × timlön × faktor för OB/övertid som ni själva anger (1 = normal); skatteavdrag per rad. Source: ByggExp-BackEnd/src/payroll/payroll-math.ts (computeLineAmounts), payroll/schemas/payroll-run.schema.ts (multiplier).
- NO: faktorer/satser hämtas inte ur Byggavtalet automatiskt — say "faktorer som ni anger", never "räknas enligt Byggavtalet".

## Fakturering (webbadmin) — code-checked 2026-10-14
- YES: faktura med företagets logotyp (invoices.service.ts), moms per rad (default 25 %) och omvänd byggmoms, ROT-avdrag 30 % av arbetskostnaden (invoice-math.ts ROT_RATE/ROT_MAX), faktura förifylld från godkänd ÄTA (byggexp-admin ProjectAtaTab.jsx createInvoiceFromAta).
- YES (owner + code 2026-10-31): faktura från timmarna — Timmar-tabellen (byggexp-admin HoursPage.jsx) lämnar över timmar per projekt/period till en faktura. Material på fakturan automatiskt: fortfarande ej verifierat.

## Foto — code-checked 2026-10-14
- YES: foton i mobilappen kopplade till arbetspasset → projekt, datum (shiftDate), person; visas i projektets Foto-flik (ShiftPhotoFile: url, uploadedAt; admin ProjectPhotosTab.jsx). Dagbok-foton: photoUrls på dagens anteckning.
- NO: GPS-position eller EXIF-tidpunkt på arbetspass- och dagbokfoton (say "datum", not "tidsstämpel"/"GPS"); bilaga-foto på ÄTA i UI. Egenkontroll-foton sparar takenAt + lat/lng från EXIF i backend (checklists.service.ts), but UI not verified — don't claim yet.

## Planering / Bemanning
- YES: Gantt planner (Planering) by Personal or Projekt, views 2 veckor/Månad/Anpassad, Ändringslogg; Bemanning grid: click cell to assign people to projects per day, approved absence (Frånvaro) shown, overbooking warning (>8 h/day).
- NO: machines/equipment planning, subcontractors in plan, drag-and-drop, worker seeing his Bemanning plan in app (mobile shows a task/project Gantt).

## Pricing (SEK/mån exkl. moms) — from Pricing.tsx
- byggexp.no (nb): samma siffror i NOK (ägaren 2026-11-01). Stripe tar fortfarande SEK.
- "Koll på pengarna" 299 kr (max 2 users) · "Koll på jobbet" 690 kr incl. 10 users (+69/extra) · "Full koll" 990 kr incl. 10 users (+69/extra) · integrations add-on 199 kr · yearly −15% · >40 users custom.
- 14 dagar gratis med alla funktioner, ingen startavgift, ingen bindningstid. Site CTA = "Boka demo" (/sv/contact). Don't link self-serve register.
- Apps: https://apps.apple.com/se/app/id6748280779 · https://play.google.com/store/apps/details?id=se.byggexp.app
- Personalliggare: module not fully shipped — don't present as live feature beyond "personalliggare-PDF".
- No customer reviews/quotes/customer counts available — never invent.

## Skanning (ägaren bekräftat 2026-10-20)
- YES: skanning av kvitton och inkommande fakturor (admin, e-post); arbetare skannar kvitton med mobilkameran i appen.

## Flytt (ägaren bekräftat 2026-10-20)
- YES: vi hjälper kunden att flytta över (data från gamla systemet) gratis.

## Verified for NO feature pages (2026-11-01)
Code-checked read-only for /nb/funksjoner/* (BE = ByggExp-BackEnd, AD = byggexp-admin, MO = tot-bygghub-mobile-app-ios). Claims beyond the sections above:

### Egenkontroll / sjekklister (KMA module, in Kontroll på jobben + Full kontroll)
- YES: own checklist templates with control points (text + reference) — AD src/features/kma/components/TemplateForm.jsx:58-77; category kvalitet/miljø/arbeidsmiljø/annet — AD src/features/kma/categories.js:1-28.
- YES: per-point result Godkjent / Anmerkning / Ikke aktuelt / Ikke besvart — BE src/checklists/schemas/checklist.enums.ts:16-21; web picker AD src/features/kma/components/ChecklistFillForm.jsx:11; app MO src/screens/Egenkontroll/EgenkontrollScreen.jsx:68 (nb labels MO src/i18n/locales/no.json "egenkontroll.result").
- YES: photos per point — app capture MO EgenkontrollScreen.jsx:83-100, shown MO :528-530 and AD ChecklistFillForm.jsx:212-214.
- YES (app): method, requirement, measured value + unit, checked by + date, anmerkning → tiltak with done date; anmerkning without done date = open — MO EgenkontrollScreen.jsx:348-404; BE src/checklists/schemas/checklist.schema.ts:93-114.
- YES (web): date + comment per point — AD ChecklistFillForm.jsx:205,209.
- YES: signing with typed name + date (admin/company admin/project admin), only when every point is answered — AD src/features/kma/KmaPage.jsx:26-31,160-168; BE checklist.schema.ts:190-197; signed = locked — BE src/checklists/checklists.service.ts:181-183,230-231,313-314,387-390; app sign MO EgenkontrollScreen.jsx:262.
- YES: Norwegian UI — AD src/i18n/LanguageProvider.jsx:25,35 + messages/nb.js; MO src/i18n/index.js:39 + locales/no.json.
- YES: project documents upload (web + app) — AD src/features/projects/components/tabs/ProjectDocumentsTab.jsx:26-28; BE src/projects/projects.controller.ts:290; MO Main/Project/ProjectScreen.jsx:186.
- NO (don't claim on nb): checklist PDF in Norwegian (template is Swedish, BE src/checklists/templates/checklist-pdf.template.ts:124,166); sending a checklist to the customer (no send/public endpoint); EXIF time/GPS shown in UI; starter templates (Swedish texts, AD kma/starterTemplates.js); AI draft from contract on nb (Swedish rules, BE checklists/egenkontroll-ai.logic.ts:40-55).

### HMS / avvik
- PARTIAL: avvik only as (a) anmerkning + tiltak in egenkontroll (above), (b) free-text deviations field in dagbok — BE src/dagbok/schemas/dagbok.schema.ts:38-40.
- NO: standalone avviksmelding/avvikssystem with assignee/status/closure, tillbud/incident reporting, risikovurdering/SJA module, KMA plan, HMS-kort reader, mannskapsliste (searched avvik|tillbud|incident|deviation|risk|hms-kort|nfc in all three repos). → /nb/funksjoner/hms-system NOT built.

### Oppgaver
- YES: due date, priority, recurrence (daily/weekdays/…), reminders until done, overdue reminders escalate to the boss — BE src/tasks/schemas/task.schema.ts:17,70-99; AD src/features/tasks/components/TaskCreateForm.jsx:18-26,105-118; app MO Main/TasksScreen.jsx.

### Prosjektøkonomi / kalkyle (Kontroll på pengene + Full kontroll)
- YES: project finance tab — cost and bill rate per hour, hours × rate, labour margin, materials, ordered material, purchase invoices, expenses, ÄTA, total cost, invoiced, margin % — AD src/features/projects/components/tabs/ProjectFinanceTab.jsx:126-186; money in company currency (NOK possible) — AD utils/formatCurrency.js:2,48, BE company/schemas/company.schema.ts:112-115.
- YES: Lønnsomhet per project — AD src/features/reports/ProfitabilityPage.jsx:20-22,119-183; Budsjett plan vs actual per month — AD src/features/budget/BudgetPage.jsx:28-43.
- YES: prosjektkalkyle linked to a project pulls the project's real invoices (sent/overdue/paid), supplier invoices, expenses and payroll = etterkalkyle — AD src/features/projektkalkyl/ProjektkalkylDetailPage.jsx:107-125; save as template :485; Excel export :490; Excel import :275; read-only share link :170-175; currency per kalkyle :485.
- Packages — BE src/company/modules.ts: Kontroll på pengene :50-64 (offers, invoices, budget, profitability, projektkalkyl, expenses, payroll — no shifts/schedule); Kontroll på jobben :68-81 (tasks, dagbok, kma, shifts, schedule, bemanning, leave, tools — no economy); Full kontroll :87 (all).

### Tilbud / faktura on nb
- NO (blocks the nb page): offer PDF Swedish-only with "kr" — BE src/offers/templates/offer-pdf.template.ts:217-219,262-282; invoice PDF Swedish labels, Bankgiro, currency defaults to SEK because toPdfData sets none — BE src/invoices/templates/invoice-pdf.template.ts:333,540,684; BE invoices.service.ts:716. → /nb/funksjoner/tilbudsprogram NOT built until PDFs are localised (nb labels, NOK, Norwegian account/KID).
- NO: customer accepts the offer online; offer → project. Offer statuses set manually — BE src/offers/schemas/offer.schema.ts:6-11.

### Planlegging (re-confirmed)
- Planering Gantt — AD src/features/schedule/SchedulePage.jsx:51,486,501-503, endringslogg :475; Bemanning click-to-assign :285, approved leave :109,165, >8 h red :421 (AD src/features/bemanning/BemanningPage.jsx). Worker does NOT see Bemanning in the app — MO hooks/useScheduleData.js:16-20.
