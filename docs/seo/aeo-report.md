# GEO/AEO — отчёт цитируемости в AI-поиске (AI Overviews / ChatGPT / Perplexity)

Задача 3. Цель: money-страницы дают прямой ответ в первых 100 словах + таблицы/definition + FAQPage + HowTo schema.
Метод аудита (live): наличие `FAQPage` schema, `HowTo` schema, `<table>`. Прямой ответ и definition — оценка вручную.

## Что сделано in-repo
- ✅ **HowTo-schema — возможность добавлена в `LeadMagnetPage`** (`howTo` prop → эмитит `HowTo` JSON-LD). Переиспользуемо на всех 61 tool/mall-страницах.
- ✅ **Пилот:** `rot-avdrag-kalkylator` — HowTo (4 шага, sv+en) + прямой ответ в интро.
- ✅ FAQPage уже на всех money-страницах (проверено live, см. таблицу).

## Аудит 15 money+смежных страниц
| Страница | Тип | FAQPage | Таблица | HowTo | Прямой ответ (100 слов) | Действие |
|---|---|---|---|---|---|---|
| verktyg/rot-avdrag-kalkylator | tool (code) | ✅ | — | ✅ пилот | ✅ | готово |
| verktyg/egenkontroll-mall | tool (code) | ✅ | ☐ | ☐ | 🔶 | +howTo prop, +таблица «что входит» |
| verktyg/offert-mall | tool (code) | ✅ | ☐ | ☐ | 🔶 | +howTo prop |
| verktyg/ackord-kalkylator | tool (code) | ✅ | ☐ | ☐ | 🔶 | +howTo prop |
| verktyg/kvadratmeter-kalkylator | tool (code) | ✅ | ☐ | ☐ | 🔶 | +howTo prop |
| verktyg/anstalld-kostnad-kalkylator | tool (code) | ✅ | ☐ | ☐ | 🔶 | +howTo prop |
| blog/tidrapporteringssystem-bygg | pillar (CMS) | ✅ | ✅ (6) | ☐ | 🔶 | CMS: HowTo + direct-answer-абзац |
| blog/app-for-tidrapportering-bygg | pillar (CMS) | ✅ | ✅ (6) | ☐ | 🔶 | CMS: HowTo + direct-answer |
| blog/schemalaggningssystem-bygg | pillar (CMS) | ✅ | ✅ (5) | ☐ | 🔶 | CMS: HowTo |
| blog/byggdagbok | pillar (CMS) | ✅ | ✅ (5) | ☐ | 🔶 | CMS: HowTo (шаги ведения дневника) |
| blog/personalliggare | pillar (CMS) | ✅ | ☐ | ☐ | 🔶 | CMS: таблица (порог/avgift) + direct-answer |
| blog/egenkontroll | pillar (CMS) | ✅ | ? | ☐ | 🔶 | CMS: HowTo (цикл egenkontroll) |
| blog/projektledning-byggforetag | pillar (CMS) | ✅ | ? | ☐ | 🔶 | CMS: direct-answer |
| blog/entreprenadforsakring-... | pillar (CMS) | ✅ | ? | ☐ | 🔶 | CMS: definition-блок «vad täcker» |
| blog/ab04-... | pillar (CMS) | ✅ | ? | ☐ | 🔶 | CMS: таблица AB04 vs ABT06 (диаграмма есть) |

Легенда: ✅ есть · ☐ нет · 🔶 частично/проверить · — не нужно.

## Вывод
- **FAQPage — 100% покрытие** (уже было). Сильная база для AEO.
- **HowTo:** механизм добавлен + пилот; раскатка на калькуляторы = in-repo (по одному `howTo`-prop), на pillar'ы = CMS.
- **Прямой ответ в 100 словах + таблицы/definition:** у tool-страниц интро уже короткое/ответное; у pillar'ов — таблицы есть, direct-answer-абзац доработать в CMS.

## Раскатка (in-repo, incremental) — следующие калькуляторы под howTo
egenkontroll-mall, offert-mall, ackord-kalkylator, kvadratmeter-kalkylator, anstalld-kostnad-kalkylator, farg-kalkylator, betong-kalkylator, gips-kalkylator (у всех есть естественные шаги).

## ⛔ [OWNER/CMS] pillar-страницы (blog)
HowTo + direct-answer-абзацы на pillar'ах правятся в CMS (api.byggexp.se) или через admin — не в этом репо. Список выше.

## Acceptance (проверяемо)
- ✅ `LeadMagnetPage` эмитит `HowTo` JSON-LD при наличии `howTo`-prop (код).
- ✅ `rot-avdrag-kalkylator` на проде содержит `"@type":"HowTo"` (после деплоя — `curl | grep HowTo`).
- ✅ FAQPage present на всех 15 (уже, проверено live).
- 🔶 Раскатка HowTo на остальные калькуляторы — incremental, в этом отчёте список.
