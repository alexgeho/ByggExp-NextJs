# Ревизия скачиваемых документов (mallar) — 2026-09-22

Цель: страницы, куда УЖЕ приходят люди, должны отдавать реально профессиональный документ, а не пустышку.
Шаг 2 (после этого): трекинг скачиваний (GA4 event `file_download` по кнопкам PDF/Excel).

Трафик: GSC 90 дней (22.06–20.09.2026), `.gsc/top_pages.py`. Нормы: deep-research, 25 утверждений
подтверждены по первоисточникам (Boverket, Elsäkerhetsverket, Säker Vatten, riksdagen.se).

## Вердикт по страницам (по убыванию кликов)

| Страница | Клики | Вердикт | Что не так |
|---|---|---|---|
| verktyg/egenkontroll-mall | 90 | 🔴 пересобрать | пресеты по 5 общих пунктов; нет колонок «hur / mot vilket krav / vem / när», нет датированной подписи на каждый пункт (требование Boverket) |
| blog/arbetsberedning-mall-bygg | 39 | 🟠 ссылка | статья НЕ ссылается на существующий инструмент `/sv/verktyg/arbetsberedning-mall` (ведёт на egenkontroll) |
| blog/entreprenadkontrakt-mall → verktyg | 26 | 🔴 факт-ошибка | пример «Hantverkarformuläret 17 (konsument)» + «ansvarstid 10 år» (понятие AB 04) — смешаны режимы; опечатка «Commode» |
| verktyg/egenkontroll-vvs-mall | 16 | 🔴 пересобрать | 5 пунктов, нет поля давления/времени опрессовки, нет версии Säker Vatten **2026:1** (действует с 01.01.2026) и отметки о цифровом intyg ≤4 нед. |
| verktyg/egenkontroll-el-mall | 15 | 🔴 пересобрать | 5 пунктов, нет замеров (кontinuitet Ω, isolation MΩ, JFB mA/ms, fasföljd); нет 2 этапов подписи: «före ibruktagning» + «vid överlämning» (Elsäkerhetsverket); ссылка на ELSÄK-FS 2017:3 отсутствует |
| blog/skyddsrond-bygg-checklista → skyddsrond-mall | 14 | 🟡 ок-ish | 9 разумных зон; AFS 2023 не верифицирован — не трогать без проверки |
| blog/byggmotesprotokoll-mall | 11 | 🟠 обещание не выполнено | тайтл «gratis mall & dagordning», а шаблона нет (404 на `/sv/verktyg/byggmotesprotokoll-mall`), ссылка на byggdagbok |
| verktyg/gantt-schema-mall | 10 | — | не проверялось (не регуляторный) |
| verktyg/kontrollplan-mall | — | 🟡 доработать | 6 свободных textarea вместо таблицы; нет поля «egenkontroll / certifierad sakkunnig» (PBL 10:8) и подписи/даты по пункту; по PBL 2026 (Lag 2026:712) добавить «anmälningar till nämnden» и «arbetsplatsbesök» |

Тексты статей по регуляторике корректны (egenkontroll-el ссылается на ELSÄK-FS 2017:3 — верно).

## Что требуют нормы (подтверждено)

- **Kontrollplan / egenkontroll (PBL 10:6, Boverket):** по каждому пункту — vad, hur, mot vilket krav, vem,
  när, egenkontroll vs certifierad sakkunnig, datum utförd utan anmärkning, **signatur kontrollanten**.
  План также: anmälningar till nämnden + arbetsplatsbesök. Смена контролёра = avvikelse.
- **EL (ELSÄK-FS 2017:3, 3 kap. 10–13 §§):** контроль в 2 шага — (a) före ibruktagning: skyddsjord,
  kapslingar/beröringsskydd; (b) vid överlämning: kontinuitet (skyddsledare till jordskena), isolationsresistans,
  skyddsanordningar, spänning/spänningsfall, fasföljd, JFB, överströmsskydd, märkning skyddsledare.
  Предельные значения — в SS 436 40 00 utg. 4 del 6 (не верифицированы → в мастер-шаблоне оставить поле
  «mätvärde / gränsvärde» пустым для заполнения, не выдумывать числа). Официальная мalla Elsäkerhetsverket есть.
- **VVS (Säker Vatten 2026:1, с 01.01.2026):** intyg цифровой, ≤4 нед., с указанием версии правил;
  2021:2 допустим, если bygglov/handlingar до 01.01.2026. Давление/время опрессовки — не верифицированы.

## Не покрыто исследованием (нужен 2-й прогон перед правкой)
- AB 04 / ABT 06 / ABS 18 / HF 17: garanti-/ansvars-/reklamationstid, vite.
- AFS 2023:1/2023:3: arbetsberedning, skyddsrond, BAS-U.
- Точные лимиты: SS 436 40 00 (mA/ms/MΩ), Säker Vatten провтряк/время.

## План работ (по приоритету)
1. ✅ (22–23.09) egenkontroll-mall + el + vvs: таблица с колонками по Boverket, 12–20 пунктов на профессию, поля замеров,
   этапы подписи (el), версия Säker Vatten 2026:1 (vvs). Сделано: el = протокол 22 п. (`59c4c8d`); инструмент получил
   поле «Metod» + колонку «Krav / underlag» для всех пресетов с требованиями; VVS = 16 п. в 3 этапа (провтряк/время/
   падение давления — пустые поля «enligt provningsmetod», числа не выдуманы; 2026:1 в шапке и сноске); Bygg/stomme =
   13 п. с metod/krav (PBL 10:6). 23.09 добиты остальные: vatrum 10 п. (RF %, скикт мм, intyg), betong 12 (täckskikt мм,
   SS-EN 13670, RF), tak 11 (läkt мм), ventilation 12 (flöden l/s, OVK före ibruktagning), skyddsrond 15 п. в 6 зонах.
2. ✅ (23.09) Быстрые: ссылка arbetsberedning-статья → инструмент; удалить «Commode» и развести пример договора
   (пример теперь целиком AB 04 между компаниями: гарантия 5/2 года, ansvarstid 10 лет).
3. ✅ (23.09) Шаблон `/sv/verktyg/byggmotesprotokoll-mall` сделан (дагордning из статьи, beslut–ansvarig–datum),
   статья ссылается на него, добавлен в verktyg-list/хаб/sitemap.
4. ✅ (23.09) kontrollplan-mall → таблица: vad / hur / mot vilket underlag / vem / egenkontroll-sakkunnig-KA + datum/sign;
   блоки anmälningar till nämnden, arbetsplatsbesök, avfall, slutbesked; 2 подписи (byggherre, KA). Отдельный компонент.
5. ✅ (23.09) 2-й deep-research по договорам + AFS: AB 04/ABT 06 действуют (преемники AB 25/ABPU 25 — не раньше
   2027, BKK = foreningenbkk.se, апдейт осенью 2026 → перепроверить). Исправлено: ABS 18 только ny-/tillbyggnad
   småhus, HF 17 — reparation/ombyggnad; Bas-P/Bas-U обязательны для всех проектов (не «på större byggen»);
   «besiktning» убрано из списка содержимого; «vanligaste orsaken» смягчено; кнопка «Word / Excel» → «Excel»
   (на деле CSV). Arbetsberedning: юридических утверждений нет, практика подтверждена. Garantitid AB 04 5/2 + 10 — ОК.
6. Шаг 2: GA4-события скачиваний, смотреть через 2–4 недели.
