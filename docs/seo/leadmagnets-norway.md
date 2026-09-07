# Лид-магниты для Норвегии (byggexp.no) — ресёрч + план

Дата: 2026-09-07. Вопрос: какие лид-магниты сделать для NO-аудитории (byggefirma-владельцы, håndverkere) и как быть ценнее.

## Главный вывод ресёрча (Keyword Planner, гео Norway)
- **Базовые термины = 100-1K** (уже покрыты статьями): `sha plan`, `timepris snekker`, `faktura mal`, `timeliste mal`, а `hms kort` = **1K-10K**.
- **Узкие «mal/kalkulator»-варианты = 10-100** (мелкие): sha plan mal, tilbudsmal, kontrakt mal, byggedagbok mal, avviksmelding mal, hms mal, mva kalkulator, feriepenger kalkulator, timepris kalkulator.

**Стратегия:** НЕ плодить десятки тонких «-mal»-страниц под 10-100. Вместо этого **вешать скачиваемый лид-магнит на уже-трафиковые pillar-страницы** (100-1K…1K-10K) — трафик там уже есть, магнит его конвертит. Магнит = ценность + захват (email/аккаунт) + воронка в продукт.

## Приоритет лид-магнитов (магнит → на какую страницу вешать)
1. **SHA-plan mal + sjekkliste (PDF/Word)** → `sha-plan` (100-1K). Byggherre обязан иметь SHA-plan; шаблон+чек-лист = высокая ценность. Топ-приоритет.
2. **Timeliste Excel-mal (.xlsx с формулами)** → `timeliste-mal`. Сейчас там только HTML-таблица — дать реальный файл (авто-сумма часов).
3. **Fakturamal (Excel/PDF)** → `fakturamal`. Реальный шаблон с полями/mva-расчётом.
4. **Timepris-kalkulator (интерактив «hva bør jeg ta per time»)** → `timepris-snekker` (100-1K). Считает timepris из ønsket lønn + påslag + kostnader. Сильный commercial-intent.
5. **HMS-kort sjekkliste / «er kortet gyldig»** → HMS-kort кластер (1K-10K трафик!). Интент информационный (слабый product-fit), но огромный трафик → узнаваемость + soft-CTA.
6. **Tilbudsmal / kontraktsjekkliste** → `byggekontrakt`. Шаблон tilbud + чек-лист NS-контракта (юридически осторожно).
7. **Feriepenger-kalkulator (10,2%/12%)** → новая мелкая страница или виджет. Универсальный спрос, но 10-100.

## Инфраструктура (что нужно построить)
- **Механизм скачивания**: SE-сторона уже имеет verktyg-инструменты (mall→PDF). Для NO нужно портировать/сделать простой download (статический .xlsx/.pdf в `/public` или генератор). Самый дешёвый MVP: положить готовые .xlsx/.pdf в `/public/nb/maler/` и линковать с pillar-страниц.
- **Захват лида**: (а) email-gate перед скачиванием → лид; или (б) «скачай + начни gratis i appen» (аккаунт-signup). Решить с владельцем: чистый lead-magnet (email) vs product-led (signup).
- **Калькуляторы**: интерактивные (timepris, feriepenger, mva) — как SE-калькуляторы; переиспользовать инфру verktyg (nb уже имеет 26 калькуляторов), добавить timepris/feriepenger.

## Как быть ЦЕННЕЕ для NO-аудитории (не только магниты)
- **Интерактивные калькуляторы** вместо статики (timepris, feriepenger, mva, dekningsbidrag/påslag) — поведенческий SEO + польза.
- **Актуальность регуляторики**: SHA-plan, HMS-kort, byggherreforskriften § 15, NS-контракты — держать факты свежими (Arbeidstilsynet/Skatteetaten), это доверие + E-E-A-T.
- **Готовые к использованию файлы** с нашим брендингом (timeliste, faktura, SHA-plan, tilbud) — люди делятся → ссылки.
- **Сравнения/чек-листы**: «NS 8405 vs 8407», «SHA vs HMS», «mal vs app» — уже частично есть, расширять.
- **Отраслевые timepris-страницы** (rørlegger/elektriker/maler) — если объём подтвердится (проверить в Planner).

## Owner-решения (нужны ответы)
1. Lead-magnet модель: **email-gate** (чистый лид) или **product-led** (signup «gratis i appen»)?
2. byggexp.no в GSC как property (без этого не видно NO-трафика).
3. Юр-проверка шаблонов контрактов/tilbud перед публикацией.

## Быстрые победы (можно сделать в репо сейчас)
- Timeliste .xlsx + Faktura .xlsx в `/public/nb/maler/` + кнопки скачивания на `timeliste-mal`/`fakturamal`.
- SHA-plan sjekkliste (PDF) на `sha-plan`.
- Timepris-kalkulator (nb verktyg) на `timepris-snekker`.
