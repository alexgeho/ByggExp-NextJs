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
| kalkyl / anbud | ✅ 2026-08-25 | ✅ | 11 rader; levande kommersiellt, "gratis"-varianter höga bud |
| ROT (rent) | ✅ 2026-08-25 | ✅ | rent-ROT-batch (rot avdrag program / rot faktura app / rot hantering bygg / rotavdrag företag program) = allt blankt; task-ROT täckt via faktura-pillar |

**ALLA BATCHER INNE 2026-08-25. Insamling klar → se slutlig stridsplan §2.**

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

## 1d. Databatch: KALKYL / ANBUD (2026-08-25)

Till skillnad från lön: **levande kommersiellt kluster.** Alla program-varianter
har volym (10–100 var), och "gratis"-varianterna har höga bud.

### Hög-signal
- `kalkylprogram bygg`, `kalkylprogram för bygg`, `byggkalkyl program` (10–100,
  Medium/High comp, bud 2.1–9.4 kr).
- `bästa kalkylprogram bygg` (10–100, bud upp till 10.4 kr) — jämförelse-intent.
- `kalkylprogram bygg gratis` / `gratis kalkylprogram bygg` (10–100, **bud upp till
  13.7 kr** — högst i hela klustret). ByggExp-vinkel: de gratis `/sv/verktyg`-kalkylatorerna.
- `anbudskalkyl bygg` (10–100).

### Noll-signal
- `efterkalkyl bygg`, `kalkyl app bygg`, `prissättning bygg program` → blank.

### Befintlig täckning — REDAN BRA
- Artikel `kalkylprogram-bygg`: `<title>` "Kalkylprogram för bygg – kalkyl till
  offert", seoDesc nämner "Kom igång gratis med kalkylatorerna" → taktar huvudtermen
  + gratis-vinkeln. Även `basta-byggprogram-2026`, `efterkalkyl-bygg-kalkyluppfoljning`.
- Många gratis kalkylatorer under `/sv/verktyg` (perfekt landning för "gratis
  kalkylprogram").

### GAP / åtgärd
- Stärk `kalkylprogram-bygg`: lägg in **"gratis"**- och **"bästa"**-vinklar
  (sektion + FAQ) och länka till gratis-kalkylatorhubben `/sv/verktyg`. Ingen ny
  sida (undvik kannibalisering). Prio: medel.

---

## 2. SLUTLIG STRIDSPLAN (alla batcher inne 2026-08-25)

**Övergripande lärdom:** i detta kluster har "program/app/system + bygg" nästan
ingen volym UTOM för **kalkylprogram** (som lever). Volymen sitter annars i
**mall/exempel/task-intent**. Bygg för det, funnla till gratisverktygen.

| Delkluster | Beslut | Åtgärd |
|---|---|---|
| **faktura (ROT)** | 🔨 BYGG | Ny pillar `faktura-med-rotavdrag` (exempel+mall+skatteverket), funnlar till `faktura-mall` + `rot-avdrag-kalkylator` |
| **offert** | ✅ täckt | Valfritt: lägg "bygg" i h1 på verktyget `offert-mall` (låg prio) |
| **lön** | ⛔ hoppa | Dött, befintligt räcker |
| **kalkyl** | ✏️ stärk | Bygg ut `kalkylprogram-bygg` med gratis/bästa-vinkel + länk till `/sv/verktyg` |

### Byggordning — UTFÖRT 2026-08-25
1. ✅ **Pillar `faktura-med-rotavdrag`** byggd (ekonomi.ts, 629 ord, räkneexempel-tabell,
   FAQ-schema, länkar till `faktura-mall` + `rot-avdrag-kalkylator` +
   `byggfaktura-checklista-rot` + `kontrollera-kundens-rotutrymme`). ROT = 30 % av
   arbetskostnad inkl. moms, max 50 000 kr/person/år (konsistent med site-fakta).
2. ✅ **`kalkylprogram-bygg` stärkt** (201 → 549 ord): gratis-sektion, "bästa"-sektion
   med kriterietabell, FAQ-schema, seoTitle nu med "gratis". Länkar till `/sv/verktyg`.
3. ✅ **`offert-mall` h1** nu "Offertmall för bygg …".

Not: batch-CSV 09_10_40 var en dubblett av kalkyl-batchen (inga nya data).
**Klustret klart. Nästa lever = backlinks (owner).**

### Beslutade byggen
1. **PILLAR: `faktura-med-rotavdrag`** (ny artikel) — folds: faktura med rotavdrag /
   exempel / mall / fakturera med rot / skatteverket rot faktura / rut-faktura.
   Innehåll: så räknas ROT på fakturan, konkret exempel (räkneexempel + fält),
   länk till gratis `faktura-mall` + `rot-avdrag-kalkylator`, FAQ (schema).
   Status: **ej påbörjad.**

### Beslutade (offert)
- **Offert: INGEN ny pillar.** Huvudterm `offertmall bygg` (500/mån) täcks redan av
  verktyget `/sv/verktyg/offert-mall`. Valfritt: lägg "bygg" i verktygets h1 (låg prio).

### Beslutade (lön + kalkyl)
- **Lön: INGEN ny sida.** Batch nästan tom; befintligt räcker.
- **Kalkyl: ingen ny sida — stärk `kalkylprogram-bygg`** (gratis/bästa + verktygslänkar).

### Regler för klustret (lärdomar)
- "program/app + bygg" har oftast noll volym i SE → bygg inte för dem.
- Volymen sitter i **task/intent-frågor** (exempel, mall, "så gör du", Skatteverket).
- Varje ny sida: unik vinkel (ingen kannibalisering), FAQ-sektion (h2 "Vanliga
  frågor" + h3/p → schema via `lib/faq.ts`), länk upp till pillar + till relevant
  gratisverktyg, in i sitemap automatiskt (code-artikel).

---

## 3. TODO / nästa steg
- [x] Samla alla batcher (faktura, offert, lön, kalkyl) — KLART 2026-08-25.
- [ ] Bygg pillar `faktura-med-rotavdrag`.
- [ ] Stärk `kalkylprogram-bygg` (gratis/bästa + verktygslänkar).
- [ ] Mini: lägg "bygg" i h1 på verktyget `offert-mall`.
- [ ] (Owner) exakta volymer kräver aktiv Google Ads-kampanj — nuvarande tal är buckets.
