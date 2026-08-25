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
| offert | ✅ 2026-08-25 | ✅ | 14 rader; `offertmall bygg` = 500/mån (störst hittills) |
| lön / löneunderlag | ✅ 2026-08-25 | ✅ | 6 rader, nästan allt blankt — dött för nytt innehåll |
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

## 1b. Databatch: OFFERT (2026-08-25)

Nyckelinsikt: **efterfrågan sitter i "offertmall bygg" (mall-intent), och den är
redan täckt av lead-magnet-verktyget.** Program/app-termer = noll volym igen.

### Hög-signal
- **`offertmall bygg` = 500/mån** och **`bygg offertmall` = 500/mån** — störst i
  hela klustret hittills. Bud 6–15 kr → mycket kommersiellt.
- Varianter (10–100): `offert mall bygg`, `mall offert bygg`, `offertmallar bygg`,
  `gratis offertmall bygg`, `offertmall bygg gratis`.
- `offertprogram bygg` = 10–100 men bud 3.5–15.3 kr (högt värde).

### Noll-signal (bygg inte)
- `offert app bygg`, `skapa offert bygg`, `anbud bygg program`,
  `offert hantverkare app`, `byggoffert program`, `kalkyl och offert bygg` → blank.

### Befintlig täckning — REDAN BRA
- Verktyg `/sv/verktyg/offert-mall`: `<title>` = "Offertmall bygg – gör offert med
  ROT gratis | ByggExp" → **taktar redan huvudtermen "offertmall bygg"** (500/mån).
  Lead-magnet (mall → PDF), matchar mall-intenten perfekt.
- Artikel `offertprogram-byggforetag` täcker program-intenten.
- Artikel `offert-till-betald-faktura-flode`, `kalkylera-fonsterbyte-offert`.

### GAP / åtgärd (litet)
- Verktygets synliga **h1** saknar "bygg" ("Offertmall – skapa offert med ROT…").
  `<title>` har det (viktigast), men h1 kunde inkludera "bygg" för extra relevans.
- Ev. kort stödartikel `offertmall-bygg` som funnlar till verktyget + folds
  gratis/mallar-varianter — **låg prio**, verktyget rankar redan för huvudtermen.
- Slutsats: **offert-klustret är i stort täckt. Ingen ny pillar behövs.**

---

## 1c. Databatch: LÖN / LÖNEUNDERLAG (2026-08-25)

**Nästan helt tomt.** Bekräftar mönstret för tredje gången: "program/app/system +
bygg" har ingen volym i SE.
- `löneprogram bygg` = 10–100. Resten (`lönesystem byggföretag`, `löneunderlag app`,
  `lön bygg app`, `byggavtalet lön program`, `ackordslön program bygg`) = **blank**.
- Befintligt räcker: artikel `loneprogram-bygg`, feature `loneunderlag-for-byggforetag`,
  `ackordslon-bygg`. Den riktiga lön-efterfrågan ligger i byggavtals-/regeltermer
  (semesterlön, OB, traktamente, sjuklön) som redan är väl täckta i regelverk/personal.
- **Slutsats: lön = INGEN ny sida. Dött för kommersiellt SEO-innehåll.**

---

## 2. Framväxande stridsplan (uppdateras allt eftersom batcher kommer)

### Beslutade byggen
1. **PILLAR: `faktura-med-rotavdrag`** (ny artikel) — folds: faktura med rotavdrag /
   exempel / mall / fakturera med rot / skatteverket rot faktura / rut-faktura.
   Innehåll: så räknas ROT på fakturan, konkret exempel (räkneexempel + fält),
   länk till gratis `faktura-mall` + `rot-avdrag-kalkylator`, FAQ (schema).
   Status: **ej påbörjad.**

### Beslutade (offert)
- **Offert: INGEN ny pillar.** Huvudterm `offertmall bygg` (500/mån) täcks redan av
  verktyget `/sv/verktyg/offert-mall`. Valfritt: lägg "bygg" i verktygets h1 (låg prio).

### Beslutade (lön)
- **Lön: INGEN ny sida.** Batch nästan tom; befintligt räcker.

### Att besluta när fler batcher kommit
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
