# ByggExp — verified product facts (code-checked 2026-10-06). Copy may ONLY claim YES items.

## Dagbok (byggdagbok)
- YES: web (admin) dagbok entries per project/day with photos, weather + temperature (typed manually), crewCount/personnel, work performed, deviations, materials, notes.
- NO: GPS/timestamp on dagbok photos, automatic weather, sign/lock day, PDF export of dagbok, customer/beställare access, ÄTA link inside dagbok, dagbok in mobile app (mobile has only a one-line day note on the shift).

## Tidrapportering / Arbetspass
- YES: mobile app (iPhone + Android) check-in/out with GPS; geofence auto-pause when leaving project area; hours per project; hour type normal/övertid/OB chosen per pass; restid (km + minutes); traktamente (none/half/full); ÄTA tagged on the shift (ataId) → billable later; attest/approval (one level, by admin/project admin); exports: time report PDF + Excel (xlsx), payroll CSV, AGI-underlag CSV, SIE4 export (for Fortnox/Visma/BL; integrations add-on 199 kr/mån); personalliggare PDF; certificates incl. ID06 with expiry date on the user.
- NO: offline mode, multi-level or UE attest, OB/övertid auto-calculated per Byggavtalet (worker picks hour type; don't claim automatic Byggavtalet calc), ID06 card/register integration, subcontractor role.

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
- SUPERSEDED 2026-11-01 by «Avvik (live)» below. Old note: avvik only as (a) anmerkning + tiltak in egenkontroll (above), (b) free-text deviations field in dagbok — BE src/dagbok/schemas/dagbok.schema.ts:38-40.
- NO: standalone avviksmelding/avvikssystem with assignee/status/closure, tillbud/incident reporting, risikovurdering/SJA module, KMA plan, HMS-kort reader, mannskapsliste (searched avvik|tillbud|incident|deviation|risk|hms-kort|nfc in all three repos). → /nb/funksjoner/hms-system NOT built (then).

### Avvik (live) — code-checked 2026-11-01 (BE aed1724, AD 5c83e96, MO e5dc8ed0) → /nb/funksjoner/hms-system
- YES: avvik per project, running number per company («Avvik #12»), title, description, category HMS/Kvalitet/Miljø, severity lav/middels/høy, place, photos, reported by/at, responsible, frist, årsak, tiltak, status open/in_progress/closed, closed by/at + closing comment, source (checklist/dagbok), change log — BE src/deviations/schemas/deviation.schema.ts:8-26,59-91,94-194.
- YES: created in WEBADMIN — routes AD app/admin/avvik/page.jsx, app/company/avvik/page.jsx; project tab AD src/features/projects/ProjectDetailPage.jsx:49,161-164; form fields AD src/features/avvik/components/DeviationForm.jsx:121-168, photos :171-180; API BE src/deviations/deviations.controller.ts:130-133, photos :167-182 (images, max 10 per upload).
- YES: from an egenkontroll remark («Opprett avvik» on a point with result Anmerkning) — AD src/features/kma/components/ChecklistFillForm.jsx:45-51,231-240; prefill point text/category/tiltak BE deviations.service.ts:352-373, category map deviation.logic.ts:484-488.
- YES: from a dagbok entry with text in «Avvik / hindringer» — AD src/features/dagbok/DagbokListPage.jsx:36-37,100-106; prefill first line = title, category HMS — BE deviations.service.ts:375-393.
- YES: responsible = project members + company admins — BE deviations.service.ts:315-330; assign/frist/close/reopen only admin or project manager — BE deviation.logic.ts:75-77,88-106; responsible may edit årsak/tiltak/status open⇄in_progress — :116-127,146-165.
- YES: close requires a comment — BE dto/deviation.dto.ts:135-139; AD components/CloseDeviationModal.jsx:8,49; reopen with optional comment — BE deviations.service.ts:650-680, dto :147-152; history in drawer — AD components/DeviationDrawer.jsx:135-148.
- YES: push to the responsible on assignment (create + reassignment) — BE deviations.service.ts:499-503,603; due soon (due today/tomorrow) and overdue, 07:00 Europe/Stockholm (= Oslo), once per due date, reset when frist/responsible changes, overdue without responsible → project managers — BE deviations.service.ts:839-850,887-949, reset :570-575; nb push texts «Avvik #N er tildelt deg / fristen nærmer seg / har passert fristen» — BE deviation.logic.ts:491-506; sent as Expo push to devices — BE src/notifications/notifications.service.ts:198-220. «Nytt avvik» to managers is OFF (env flag) — deviations.service.ts:504-511.
- YES: Avviksrapport PDF + CSV, bokmål for NO companies, follows project + category filter (not status) — BE deviations.controller.ts:99-128; lang deviation.logic.ts:275-276, nb labels :281-314; PDF counts total/open/in progress/closed/overdue + årsak/tiltak/closing comment per row — BE templates/deviation-report.template.ts:37-60,124-130; AD DeviationsView.jsx:92,204-205; status pills incl. Forfalt :41,76-87.
- YES: Norwegian UI strings — AD src/i18n/messages/nb.js:2473-2500.
- Package: «avvik» in Kontroll på jobben (PROJEKT) — BE src/company/modules.ts:68-76; Full kontroll = all :19-25,90; not in Kontroll på pengene :50-64.
- NO: reporting avvik in the mobile app (MO has only the egenkontroll «open deviation» label, MO src/screens/Egenkontroll/EgenkontrollScreen.jsx:404-431; no deviation screen) — «Meld avvik» comes via app update (docs/TASKS.md); switch-off of avvik push in app Aviseringar not shipped.
- NO (grep BE/AD/MO src+app, excl. i18n/tests, 2026-11-01): risikovurdering/SJA (risikovurd|riskbed|risk_assess|SJA → 0 hits); HMS-kort reader (hms-kort|hmskort|hms_card|nfc → 0); mannskapsliste (0; only Swedish «Personalliggare» tab AD ProjectDetailPage.jsx:177-179, not a Norwegian mannskapsliste); stoffkartotek/sikkerhetsdatablad (0); HMS-håndbok generator (håndbok|handbook → 0); vernerunde module (only a Swedish starter checklist «Skyddsrond», AD src/features/kma/starterTemplates.js:41 — a vernerunde can be an own checklist).
- Legal (lovdata, opened 2026-11-01): aml § 3-1 (1) + (2) e «iverksette rutiner for å avdekke, rette opp og forebygge overtredelser av krav fastsatt i eller i medhold av denne lov»; internkontrollforskriften § 5 annet ledd nr. 7 (same wording, «… helse-, miljø- og sikkerhetslovgivningen»), nr. 4–8 skriftlig.

### Oppgaver
- YES: due date, priority, recurrence (daily/weekdays/…), reminders until done, overdue reminders escalate to the boss — BE src/tasks/schemas/task.schema.ts:17,70-99; AD src/features/tasks/components/TaskCreateForm.jsx:18-26,105-118; app MO Main/TasksScreen.jsx.

### Prosjektøkonomi / kalkyle (Kontroll på pengene + Full kontroll)
- YES: project finance tab — cost and bill rate per hour, hours × rate, labour margin, materials, ordered material, purchase invoices, expenses, ÄTA, total cost, invoiced, margin % — AD src/features/projects/components/tabs/ProjectFinanceTab.jsx:126-186; money in company currency (NOK possible) — AD utils/formatCurrency.js:2,48, BE company/schemas/company.schema.ts:112-115.
- YES: Lønnsomhet per project — AD src/features/reports/ProfitabilityPage.jsx:20-22,119-183; Budsjett plan vs actual per month — AD src/features/budget/BudgetPage.jsx:28-43.
- YES: prosjektkalkyle linked to a project pulls the project's real invoices (sent/overdue/paid), supplier invoices, expenses and payroll = etterkalkyle — AD src/features/projektkalkyl/ProjektkalkylDetailPage.jsx:107-125; save as template :485; Excel export :490; Excel import :275; read-only share link :170-175; currency per kalkyle :485.
- Packages — BE src/company/modules.ts: Kontroll på pengene :50-64 (offers, invoices, budget, profitability, projektkalkyl, expenses, payroll — no shifts/schedule); Kontroll på jobben :68-81 (tasks, dagbok, kma, shifts, schedule, bemanning, leave, tools — no economy); Full kontroll :87 (all).

### Tilbud / faktura on nb
- SUPERSEDED 2026-11-01 (see next section): offer/invoice PDFs were Swedish-only; Norwegian PDFs are now live.
- NO: customer accepts the offer online; offer → project. Offer statuses set manually — BE src/offers/schemas/offer.schema.ts:6-11.

### Tilbud / faktura on nb (live) — code-checked 2026-11-01 (BE 4e2b56f, AD 2fd7f7b)
- YES: Norwegian quote PDF (bokmål: Tilbud, Tilbudsnr., Gyldig til, Forbehold og avklaringer, Kontaktpersoner, Sum eks. mva / Mva / Totalt inkl. mva, kr in nb-NO) — BE src/offers/templates/offer-pdf.template.ts:189-208,263-265,338.
- YES: Norwegian invoice PDF (bokmål labels, Kreditnota, Fakturadato, Forfallsdato, Forsinkelsesrente), legal basis bokføringsforskriften kap. 5-1 cited in code — BE src/invoices/templates/invoice-pdf.template.ts:362-410; ROT/omvänd/QR stripped for NO :965-973.
- YES: NOK always for NO — BE src/invoices/invoices.service.ts:391-410; ROT/omvänd forced off :393-397.
- YES: mva 25/15/12/0 (6 % never) — BE src/invoices/norway.ts:12-17; AD src/config/markets.js:23-28; per-rate VAT line «Mva 25 % …» summed per rate — BE invoice-pdf.template.ts:739-750.
- YES: org.nr with «MVA» suffix when VAT-registered — BE norway.ts:120-135; footer with «Foretaksregisteret» when set — BE invoice-pdf.template.ts:933-955; settings checkboxes — AD src/features/profile/CompanyDetailsForm.jsx:79-82.
- YES: kontonummer 11 digits with MOD11 check — BE norway.ts:60-68; validated in settings — AD CompanyDetailsForm.jsx:265-268; printed «Kontonr.» — BE invoice-pdf.template.ts:755-763.
- YES: KID from invoice number, MOD10 (default) or MOD11, or none — BE norway.ts:5-10,77-92; invoices.service.ts:322; no KID on credit notes :637,693-694.
- YES: Leveringssted (invoice → project → buyer) + Leveringsdato — BE invoices.service.ts:274-275,695; template :464-477,581; AD src/features/invoicing/components/InvoiceForm.jsx:449,596-597.
- YES: credit note (Kreditnota), whole or partial amount excl. VAT, never above what is left — BE invoices.service.ts:566-657; AD src/features/invoicing/InvoiceListPage.jsx:242-248,350-369.
- YES: e-mail with PDF attached, bokmål e-mail for NO; draft → sent — invoice BE invoices.service.ts:95-119, offer BE src/offers/offers.service.ts:178-205; attachment BE src/mail/mail.service.ts:695-755 (subject «Faktura/Tilbud <nr>»).
- YES: offer → invoice draft with the same rows, customer and offer number as order reference — AD src/features/offers/offerToInvoice.js:17-37; button AD OfferEditPage.jsx:57-58,93; list AD OfferListPage.jsx:39-40,163. (Product nit: reference text is «Offert <nr>» also for NO.)
- YES (Full kontroll only — hours module «shifts» is not in Kontroll på pengene, BE src/company/modules.ts:50-64 vs :68-81,87): invoice from hours — selected hours summed to one line (project + period), unit h, rate typed on the invoice, project's client prefilled when one project, «Intern tid» excluded — AD src/features/shifts/HoursPage.jsx:606-675.
- YES: customer register (company/private, customer no., address, e-mail, phone, org.nr) — BE src/clients/schemas/client.schema.ts:19-59; picker on invoice AD InvoiceForm.jsx:27,83-96,533 and offer AD src/features/offers/components/OfferForm.jsx:96-117; articles fill text/price/unit/VAT — OfferForm.jsx:85-91,142-150.
- YES: offer statuses draft/sent/accepted/rejected set manually — AD OfferForm.jsx:15-20; offer valid-until + clarifications — OfferForm.jsx:299,408-409.
- YES: PDF preview + download of offer and invoice — AD src/features/offers/offerPdf.js:17,35; src/features/invoicing/invoicePdf.js:17,35.
- Package: offers, invoices, clients, articles in Kontroll på pengene — BE modules.ts:50-64; Full kontroll = all :87.
- NO: payment reminders/purring for NO — BE invoices.service.ts:140-142; AD src/config/markets.js isPaymentReminderAvailable (commit 020c685). «Påminnelser om kommende betalinger» removed from the nb pricing locale (and «betalingspåminnelser» from nb heroV2).
- NO: Norwegian accounting integration or export file (only SIE = Swedish, BE src/accounting); EHF/Peppol (no match in BE/AD invoices); digital offer acceptance; mobile-app invoicing adapted for NO (docs/TASKS.md open item).

### Planlegging (re-confirmed)
- Planering Gantt — AD src/features/schedule/SchedulePage.jsx:51,486,501-503, endringslogg :475; Bemanning click-to-assign :285, approved leave :109,165, >8 h red :421 (AD src/features/bemanning/BemanningPage.jsx). Worker does NOT see Bemanning in the app — MO hooks/useScheduleData.js:16-20.

## Integrationer — bekräftat av ägaren 2026-11-14 (ersätter tidigare «NO: Fortnox/Visma API integration»)
- YES: Fortnox – integration (API): fakturor och leverantörsfakturor går mellan ByggExp och Fortnox.
- YES: Visma – SIE4-fil och löneunderlag till Visma Lön (export, inte API).
- YES: Grossister – materialbeställning i appen till Ahlsell, Beijer, Dahl, Optimera och Lundagrossisten (beställning, inte EDI).
- Formulering i text: «Fungerar med Fortnox, Visma och grossisterna» (SMM-regel S32). Källa: ägaren («Fortnox, Visma och grossister – integration finns») + karusell 12; inte kodgranskat i denna omgång.
- NO: påstå inte «Visma API» eller «EDI med grossister».
