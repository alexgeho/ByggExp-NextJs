# GSC near-miss + индексация — 2026-09-10

Источник: **Search Console API** (headless, `.gsc/near_miss.py` + `.gsc/index_status.py`, память `gsc-api-setup`).
Property `sc-domain:byggexp.se`, период 2026-06-10 → 2026-09-08 (90 дней).

## Итог по индексации (URL Inspection API, 377 sv-URL)
- GSC Overview: 418 indexed / 149 not-indexed. НО per-URL аудит по **sv** показал:
  **359 Submitted and indexed (95%)** · 13 unknown-to-Google · 4 discovered-not-indexed · 1 crawled-not-indexed (om-oss).
- **Вывод: «стены индексации» для sv НЕТ.** 149 not-indexed из Overview — это в основном 9 других языков
  (pl/uk/fi/et/lt/lv/en/nb/ru, блог пустой). Новый sv-контент индексируется нормально → рычаг роста = бэклинки + near-miss on-page, НЕ индексация.
- 13 unknown = сегодняшние новые статьи (ещё не докраулены, в sitemap есть) → само придёт / Request indexing.
- 4 discovered-not-indexed: `egenkontroll-ventilation-mall`, `egenkontroll-vatrum-mall`, `app-for-byggprojekt`,
  `projektledning-byggforetag` → внутр. перелинковка + Request indexing.
- 767 кликов из поиска за период; кривая растёт с ~08.08.2026.
- Полный per-URL аудит (coverageState) → `.gsc/index_status.csv`.

## Near-miss: 437 запросов поз. 5–20 (показы ≥10)
Полный дамп 3711 запросов → `.gsc/near_miss.csv`. Топ-кластеры:

### 🎯 Takstolar (весь кластер на стр. 2, поз. 15–19) — самый жирный
`beräkna takstolar` (179), `beräkning av takstolar` (139), `beräkna takstolar online` (109),
`beräkning takstol` (89), `beräkna takstol` (88), `dimensionering takstolar` (79),
`takstol dimensionering` (75), `räkna på takstolar` (69), `beräkningsprogram takstolar` (62),
`räkna ut takstol` (62), `beräkning takstol` (89). → калькулятор/pillar + перелинковка.

### 🎯 Egenkontroll (часть уже у стр. 1)
`egenkontroll bygg mall pdf` (96, **поз. 5.9**), `egenkontroll mall gratis` (111, поз. 16, 6 кликов),
`egenkontroll el mall gratis` (130), `arbetsberedning mall` (77, поз. 6), `egenkontroll bygg gratis` (58).
**NB: по `egenkontroll bygg mall pdf` мы #1 органика + в AI-översikt (скрин 2026-09-10).**

### 🎯 B2B försäkring + AB-avtal
`entreprenadförsäkring` (275, поз. 13 — статья есть, нужен буст), `abt 06` (173),
`ab-u 07`/`abt-u 07`/`abt u 07` (145/139/70), `garantitid ab04` (75), `ab 04 garantitid` (58),
`ansvarsförsäkring byggföretag` (73), `försäkring byggföretag` (68).

### 🎯 Product-category (прямой продукт)
`projekthantering bygg` (184), `arbetsorder bygg` (164), `offertprogram bygg` (143),
`affärssystem byggföretag` (131), `schemaläggningssystem` (107), `dokumenthantering bygg` (94),
`resursplanering bygg` (69), `faktureringsprogram bygg` (64), `attestflöde` (71).

### 🎯 Tidrapportering-варианты
`tidrapportering entreprenad` (128), `tidrapportering i mobilen` (101), `mobil tidrapportering` (99),
`tidredovisning bygg` (77), `tidsregistrering bygg` (69), `stämpelklocka app` (90),
`stämpelklocka i mobilen` (59), `personalliggare app` (78), `personalliggare bygg` (147).

## ⚡ CTR-проблемы (уже стр. 1, поз ≤10, но ~0 кликов = плохой seoTitle)
Самые быстрые победы — правка тайтла даёт клики без нового контента:
| Запрос | Поз | Показы | Клики |
|---|---|---|---|
| våtrumscertifikat | 8.1 | 151 | 0 |
| ackordslön | 9.6 | 116 | 1 |
| schemaläggningssystem | 9.4 | 107 | 0 |
| projektuppföljning bygg | 7.7 | 89 | 0 |
| traktamente byggnads 2026 | 7.2 | 89 | 0 |
| dröjsmålsränta 2026 | 7.5 | 88 | 0 |
| fotodokumentation | 7.8 | 57 | 0 |
| läktavstånd plåttak | 8.6 | 53 | 0 |
| uppgiftshantering bygg | 7.4 | 52 | 0 |
| läktavstånd betongpannor | 9.4 | 51 | 0 |

## Предлагаемый приоритет
1. ⚡ CTR-тайтлы (полчаса, мгновенный эффект на кликах).
2. 🎯 Takstolar-буст (самый большой кластер, известная жила из [[gsc-traffic-signals]]).
3. 🏆 UX/UI страницы-инструмента `egenkontroll-mall` (#1 + AI-översikt) — сделать «сохраняемой» (поведенческий SEO + лиды).
4. После аудита индексации — разобраться с ~149 not-indexed.
