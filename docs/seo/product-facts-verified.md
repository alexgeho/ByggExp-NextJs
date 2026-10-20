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
- NOT VERIFIED: faktura "direkt från loggad tid och material" — don't claim.

## Foto — code-checked 2026-10-14
- YES: foton i mobilappen kopplade till arbetspasset → projekt, datum (shiftDate), person; visas i projektets Foto-flik (ShiftPhotoFile: url, uploadedAt; admin ProjectPhotosTab.jsx). Dagbok-foton: photoUrls på dagens anteckning.
- NO: GPS-position eller EXIF-tidpunkt på arbetspass- och dagbokfoton (say "datum", not "tidsstämpel"/"GPS"); bilaga-foto på ÄTA i UI. Egenkontroll-foton sparar takenAt + lat/lng från EXIF i backend (checklists.service.ts), but UI not verified — don't claim yet.

## Planering / Bemanning
- YES: Gantt planner (Planering) by Personal or Projekt, views 2 veckor/Månad/Anpassad, Ändringslogg; Bemanning grid: click cell to assign people to projects per day, approved absence (Frånvaro) shown, overbooking warning (>8 h/day).
- NO: machines/equipment planning, subcontractors in plan, drag-and-drop, worker seeing his Bemanning plan in app (mobile shows a task/project Gantt).

## Pricing (SEK/mån exkl. moms) — from Pricing.tsx
- "Koll på pengarna" 299 kr (max 2 users) · "Koll på jobbet" 690 kr incl. 10 users (+69/extra) · "Full koll" 990 kr incl. 10 users (+119/extra) · integrations add-on 199 kr · yearly −15% · >40 users custom.
- 14 dagar gratis med alla funktioner, ingen startavgift, ingen bindningstid. Site CTA = "Boka demo" (/sv/contact). Don't link self-serve register.
- Apps: https://apps.apple.com/se/app/id6748280779 · https://play.google.com/store/apps/details?id=se.byggexp.app
- Personalliggare: module not fully shipped — don't present as live feature beyond "personalliggare-PDF".
- No customer reviews/quotes/customer counts available — never invent.

## Skanning (ägaren bekräftat 2026-10-20)
- YES: skanning av kvitton och inkommande fakturor (admin, e-post); arbetare skannar kvitton med mobilkameran i appen.
