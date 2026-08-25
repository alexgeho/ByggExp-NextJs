# SEO-kluster: faktura / offert / lön / ROT / kalkyl — arbetsdokument

> Levande stridsplan. Fylls på för varje Keyword Planner-CSV som kommer in.
> Metod = samma som tidrapportering-klustret: pillar + spokes + hub-and-spoke +
> FAQ-schema + lead-magnet-verktyg. sv-only, code-artiklar i `src/content/articles/*.ts`.
> Se [[tidrapportering-keyword-funnels]] för metod/precedent.

Senast uppdaterad: 2026-08-25.

---

## 0. Status på KW-batcherna (Keyword Planner)

| Batch | CSV mottagen | Analyserad | Kommentar |
|---|---|---|---|
| faktura | ✅ 2026-08-25 | ✅ | 28 rader, bucketade volymer (10–100) |
| offert | ⏳ väntar | – | |
| lön / löneunderlag | ⏳ väntar | – | |
| kalkyl / anbud | ⏳ väntar | – | |
| ROT (rent) | ⏳ väntar | – | delvis täckt av faktura-batchen |

**VIKTIG DATAVARNING:** kontot saknar aktiv annonsspend (Basic-access) → Planner
returnerar volymspann ("10–100", visas som `50`) och `Unknown` competition, inte
exakta tal. Riktning OK, absoluta volymer ej. För exakta tal krävs en aktiv
kampanj (~1 €/dag) eller godkänd Standard-access. Se [[google-ads-api]].

---

## 1. Databatch: FAKTURA (2026-08-25)

Alla rader låg i bucket 10–100/mån. Nyckelinsikt: **efterfrågan sitter i
ROT-faktura-intent, INTE i "program/app"-intent.**

### Hög-signal (ROT-faktura — många varianter, samma intent, kommersiella bud)
- **Hur man gör:** `faktura med rotavdrag`, `rotavdrag faktura`, `fakturera med rot`, `fakturera med rotavdrag`, `fakturera rot`, `fakturering rotavdrag`
- **Exempel:** `faktura rotavdrag exempel`, `exempel faktura rotavdrag`, `exempel på faktura med rot avdrag`
- **Mall:** `faktura rotavdrag mall`, `faktura med rot avdrag mall`, `fakturamall med rotavdrag`
- **Skatteverket/RUT:** `skatteverket rot faktura`, `skatteverket rotavdrag faktura`, `rut avdrag faktura`, `faktura rutavdrag`, `rut faktura exempel`
- Bud upp till 5.15 kr (`faktura rutavdrag`) → konverterande intent.

### Noll-signal (bygg tomt = bygg inte)
- `fakturaprogram bygg`, `faktura app bygg`, `fakturering app hantverkare`,
  `skapa faktura bygg`, `rot faktura program`, `a conto faktura bygg`,
  `byggfaktura program` → **blank volym**. Bygg INTE dedikerade sidor för dessa.

### Befintlig täckning (redan byggt)
- Artiklar: `byggfaktura-checklista-rot`, `fakturera-som-hantverkare`,
  `vad-ska-faktura-innehalla-bygg`, `betalningsvillkor-faktura-bygg`,
  `a-conto-fakturering-bygg`, `faktureringsprogram-bygg`, `rot-fakturering-program`,
  `kontrollera-kundens-rotutrymme`, `skatteverket-nekar-rotavdrag-forbehall`,
  `rotavdrag-2026-nya-regler-foretag`, `rot-fordela-makar-tak-2026`,
  `bestriden-faktura-bygg-tvist`, `kunden-betalar-inte-fakturan`,
  `preskription-faktura-bygg-slutfaktura`, `e-faktura-obligatorisk-byggforetag`,
  `debitera-servicebil-rot`, `faktureringsavgift-hantverkare-tillaten`
- Verktyg: `/sv/verktyg/faktura-mall`, `/sv/verktyg/rot-avdrag-kalkylator`,
  `/sv/verktyg/offert-mall`

### GAP (bygg detta)
- ❌ **Ingen dedikerad "Faktura med rotavdrag – så gör du + exempel + mall".**
  Hit pekar hela efterfrågan. → PILLAR-kandidat #1 för detta kluster.
  Funnlar till `faktura-mall` + `rot-avdrag-kalkylator`.

---

## 2. Framväxande stridsplan (uppdateras allt eftersom batcher kommer)

### Beslutade byggen
1. **PILLAR: `faktura-med-rotavdrag`** (ny artikel) — folds: faktura med rotavdrag /
   exempel / mall / fakturera med rot / skatteverket rot faktura / rut-faktura.
   Innehåll: så räknas ROT på fakturan, konkret exempel (räkneexempel + fält),
   länk till gratis `faktura-mall` + `rot-avdrag-kalkylator`, FAQ (schema).
   Status: **ej påbörjad.**

### Att besluta när fler batcher kommit
- Offert-pillar? (avvaktar offert-CSV)
- Lön/löneunderlag-pillar? (avvaktar lön-CSV — obs `loneunderlag-for-byggforetag`
  finns redan som feature-artikel)
- Kalkyl/anbud-pillar? (avvaktar kalkyl-CSV — `kalkylprogram-bygg`,
  `efterkalkyl-bygg-kalkyluppfoljning` finns)

### Regler för klustret (lärdomar)
- "program/app + bygg" har oftast noll volym i SE → bygg inte för dem.
- Volymen sitter i **task/intent-frågor** (exempel, mall, "så gör du", Skatteverket).
- Varje ny sida: unik vinkel (ingen kannibalisering), FAQ-sektion (h2 "Vanliga
  frågor" + h3/p → schema via `lib/faq.ts`), länk upp till pillar + till relevant
  gratisverktyg, in i sitemap automatiskt (code-artikel).

---

## 3. TODO / nästa steg
- [ ] Få offert / lön / kalkyl-batcher som CSV.
- [ ] Bygg pillar `faktura-med-rotavdrag`.
- [ ] Efter varje batch: fyll i sektion under "Databatch:" + uppdatera stridsplanen.
