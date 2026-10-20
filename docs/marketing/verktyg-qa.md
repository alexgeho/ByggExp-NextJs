# QA бесплатных инструментов /verktyg (2026-10-20)

Проверка: чтение формул в `src/components/LeadMagnet/*Tool.tsx` + ручной пересчёт; live byggexp.se/sv/verktyg/... отдаёт тот же контент, что в репо (HEAD def0524).
Источник по Byggavtalet: полный текст Byggavtalet 2025–2027 (Byggföretagen/Byggnads, digital utgåva 1), § 2 p5, p6.1; § 3 p9.2; § 6 p1.
Код не менялся.

## 1. Продвигаемые инструменты

| Инструмент | Статус | Доказательство (вход → ожидаемо / факт, файл:строка) | Что исправить |
|---|---|---|---|
| takstolar-kalkylator | OK | `TakstolarKalkylatorTool.tsx:116` antal = ceil(L·1000/cc)+1. 10 м/1200 → 9+1 = 10 ✔; 10 м/600 → 17+1 = 18 ✔; 7,3 м/1200 → 7+1 = 8 ✔. Геометрия `:128–131`: 8 м, 27°, 500 мм → nockhöjd 4·tan27 = 2,04 м ✔, överram 4,5/cos27 = 5,05 м ✔, takyta 2·5,05·(10+1) = 111,1 м² ✔ (совпадает с примером на странице). | — (мелочь: input max=75°, код пускает до 80° — не влияет) |
| ob-overtid-kalkylator | OK | `ObOvertidKalkylatorTool.tsx:17–25`. Сверено с Byggavtalet 2025–2027 § 2 p5: OB1 20 % (05–06), OB2 40 % (18–22), OB3 70 % (22–05 + lör/sön/helg) ✔; § 2 p6.1: ÖT A 30 % (06–17), B 50 % (05–06, 17–19), C 70 % (19–22), D 100 % (22–05 + helg) ✔. «OB не платится при övertid» ✔, база = utgående lön ✔, формула månadslön→timlön ✔. 220 кр × 2 ч × 30 % = 132 кр ✔. В hängavtal 2025 изменений OB/ÖT нет. | — |
| moms-kalkylator (расчёт) | OK | `MomsKalkylatorTool.tsx:46–53`. 1000 exkl, 25 % → moms 250 / inkl 1250 ✔; 1250 inkl → 1000 / 250 ✔; 1120 inkl 12 % → 1000 ✔; 1060 inkl 6 % → 1000 ✔. | — |
| moms-kalkylator (текст) | BUG (контент) | `pages/[lang]/verktyg/moms-kalkylator.tsx:90` и `:191` (en): «12 % – t.ex. livsmedel». С 1 апреля 2026 по 31 дек 2027 matmoms временно 6 % (решение риксдага). 12 % остаётся для ресторанов/отелей. | «12 % – t.ex. hotell och restaurang» / «6 % – t.ex. livsmedel (tillfälligt 1 apr 2026–31 dec 2027), böcker, persontransport». |
| betong-kalkylator (объём/мешки) | OK | `BetongKalkylatorTool.tsx:205–236`. 10×8 м, 10 см, kantbalk 30×35 см, spill 5 %: 8 + 36·0,3·0,25 = 10,7 → 11,24 м³ ✔. Säck 25 кг = 12,5 л → 80 säckar/м³ ✔. Plint Ø30×60 см ×4 = 0,170 м³ ✔. Вес сеток (5/6/7/8 мм s150 ≈ 2,1/3,0/4,0/5,3 кг/м²) ✔. | Мелочи: углы kantbalk считаются дважды (+4·b²·h ≈ 0,09 м³, в запас); «storsäck» = liters/520 жёстко, не зависит от «liter per säck» (`:237`). |
| betong-kalkylator (вода) | UNSURE | `:238` вода = 3,5 л на 25 кг мешок; на странице «3–4 л». У многих производителей торрбетона указано ~2–3 л/25 кг. | Проверить по паспорту Weber/Finja; вероятно снизить до ~2,5–3 л. |
| betong-kalkylator (ROT в кост-блоке) | BUG | `:256–259`: ROT = 0,30 × cLabour, где cLabour = часы × timpris **без moms** («Summa exkl. moms»), и вычитается из суммы exkl. moms. ROT считается от труда **inkl. moms**, нет потолка 50 000. Пример: труд 10 000 кр exkl → ожидаемо ROT 3 750 (10 000·1,25·0,3) / факт 3 000; «Att betala efter ROT» смешивает exkl-сумму и вычет. | rotAvdrag = min(cLabour·1,25·0,30, 50 000); показать «Summa inkl. moms» и «Att betala» = cTotal·1,25 − rotAvdrag (как в FakturaGeneratorTool). |
| ROT в faktura-mall | OK (расчёт) | `FakturaGeneratorTool.tsx:72`: ROT = min(труд_netto·(1+moms)·0,30; 50 000) — правила 2026 ✔ (30 %, от труда inkl. moms, потолок 50 000/чел.). Пример: труд 40 000 exkl + материал 10 000, 25 % → gross 62 500, ROT 15 000, att betala 47 500 ✔. То же в OffertGeneratorTool `:76` и rot-avdrag-kalkylator (30 %, 2 владельца = 100 000, общий ROT+RUT 75 000) ✔. Текст «под конец 2025 временно 50 %» ✔. | — |
| ROT в faktura-mall (реквизиты) | BUG (контент/юр.) | `FakturaGeneratorTool.tsx:172–200`, PDF `:96–160`: нет полей personnummer покупателя и fastighetsbeteckning / BRF org.nr + lägenhetsnr — без них Skatteverket не примет ROT-заявку; также нет momsregistreringsnummer продавца, адресов, «Godkänd för F-skatt» (обязательные/ожидаемые реквизиты по ML 17 kap. 24 §). | При включённом ROT показывать поля «Kundens personnummer» и «Fastighetsbeteckning / BRF + lgh-nr»; добавить «Momsreg.nr», адреса, чекбокс «Godkänd för F-skatt» и печатать их в PDF. |
| egenkontroll-el-mall | OK | `egenkontrollPresets.ts:38–80`: ELSÄK-FS 2017:3 3 kap. 10–13 §§ ✔; SS 436 40 00 utg. 4 del 6 ✔; изоляция ≥ 1 MΩ при 500 V DC ✔; УЗО ≤ 300 мс при IΔn, ≤ 40 мс при 5·IΔn ✔. | — |
| egenkontroll-vvs-mall | OK | `:81–117`: Säker Vatteninstallation 2026:1 действует с 1 янв 2026 ✔ (подтверждено sakervatten.se); varmvatten ≥ 50 °C ✔; SS-EN 1717 ✔; давление/время испытания не захардкожены (правильно). | — |
| egenkontroll-bygg-mall | OK | `:118–144`: PBL 10 kap. 6 § (контрольный план) ✔; BFS 2024:6/2024:7/2024:8 с 1 июля 2025, BBR допустим для заявок до 1 июля 2026 ✔. | Мелочь: на странице «BFS 2024:6–2024:13» — диапазон не перепроверял, лучше «bl.a. BFS 2024:6–2024:9». |
| egenkontroll-vatrum-mall | OK | `:170–193`: BBV (Byggkeramikrådet) / GVK ✔, предельные значения отсылают к инструкции системы ✔. | — |
| entreprenadkontrakt-mall | OK | `EntreprenadkontraktMallTool.tsx:42–55`: AB 04 garantitid 5 лет на работу / 2 года на материалы и товары, ansvarstid 10 лет ✔ (AB 04 kap 4). Konsument → Hantverkarformuläret 17 / ABS 18 (nybyggnad/tillbyggnad småhus) ✔; B2B → AB 04 / ABT 06 ✔. | Мелочь: «från godkänd slutbesiktning» → точнее «från godkännandet av entreprenaden». Пример vite 1 %/неделя — это пример, не норма AB 04 (ок). |
| ata-mall | OK | `ata-mall.tsx:24–34`, `:112–128`: ÄTA в AB 04 kap 2; föreskriven ÄTA kap 2 §3, likställd kap 2 §4 ✔; поля (тип, мера/à-pris, кто/когда заказал, влияние на сроки) ✔. | — |

## 2. Остальные калькуляторы /verktyg (беглая проверка)

| Инструмент | Статус | Доказательство | Что исправить |
|---|---|---|---|
| reglar-kalkylator | BUG | `ReglarKalkylatorTool.tsx:75` antal = **floor**(L/cc)+1. 5 м / 600 → ожидаемо 10 стоек (последняя на торце), факт 9; 4 м → 8, факт 7. Дефолт 6 м совпадает случайно. | `Math.ceil((l*1000)/c) + 1` (как в takstolar). |
| gips-kalkylator | BUG | `GipsKalkylatorTool.tsx:120` та же ошибка floor: 4 м, c600 → ожидаемо 8, факт 7; 3,1 м → 7, факт 6. | `Math.ceil(...) + 1`. |
| anstalld-kostnad-kalkylator | BUG | `AnstalldKostnadKalkylatorTool.tsx:49–51`: arbetsgivaravgift считается только от lön, не от semesterlön. 34 000 кр, 31,42 %, 12 % → ожидаемо 34 000·1,12·1,3142 = 50 045 кр/мес; факт 48 763 (−1 282 кр, −2,6 %). timpris-kalkylator (`:55`) считает правильно — инструменты расходятся. | `agaBelopp = (lon + holidayBelopp) * agaP/100`. |
| timpris-kalkylator | BUG (мелкий) | `TimprisKalkylatorTool.tsx:57`: поле «Vinstmarginal (%)», но применяется как påslag: costs×1,10. 50 000 кр, 10 % → при марже 10 % ожидаемо 55 556, факт 55 000 (это маржа 9,1 %). | Либо `/(1−m)`, либо переименовать в «Vinstpåslag (%)». |
| restidsersattning-kalkylator | BUG (мелкий) | `RestidsersattningKalkylatorTool.tsx:48–53`: нет потолка 120 км enkel resväg (Byggavtalet § 6 p1, для egen bil). 150 км, 2,50 кр → ожидаемо 120·2·2,5 = 600 кр/день, факт 750. Порог `enkel > 2` vs «minsta avstånd 2 km» (ровно 2 км — спорно). Ставки 2,50/0,85 кр/км и grundlön 203 кр (år 2) ✔. | `Math.min(enkel,120)` для режимов bil/förare (samåkning — без потолка, по договору). |
| ackord-kalkylator | UNSURE | `AckordKalkylatorTool.tsx:24` granskningsarvode 1,5 % — в тексте Byggavtalet 2025–2027 цифры нет (это из правил Byggnads). Формулы overskott/делёж ✔. | Сверить актуальный % с Byggnads. |
| drojsmalsranta-kalkylator | OK / UNSURE | Простые проценты belopp·(ref+8)·дни/365 ✔; påminnelse 60, inkasso 180 ✔. Дефолт referensränta 2 % — проверить на riksbank.se для 2-го полугодия 2026. Для B2B нет förseningsersättning 450 кр. | Обновлять ref-ставку 1 янв/1 июл; опционально чекбокс 450 кр. |
| forseningsvite-kalkylator | OK | Vite = сумма·%·ceil(недели), потолок ✔. 4 Mkr, 1 %, 2 нед → 80 000 ✔. | — |
| paslag-marginal-kalkylator | OK | påslag c·(1+p), marginal c/(1−p) ✔. 1000, 30 % → 1300 / 1428,57 ✔. | — |
| tak-kalkylator | OK / UNSURE | Takyta = (L+2u)(B+2u)/cos α ✔. Ströläkt = yta/0,6 (`:111`) — при takstolar c/c 1200 это ~в 2 раза больше. | Проверить, или брать c/c из ввода. |
| u-varde-kalkylator | OK | U = 1/(Rsi+ΣR+Rse); Rsi/Rse стена 0,13/0,04, крыша 0,10/0,04, пол 0,17/0,04 ✔ (ISO 6946). | — |
| isolering-kalkylator | OK | U = λ/d только слой (подписано) ✔. | — |
| trappa-kalkylator | OK | 2h+g = 630 ✔; 2700/175 → 16 ступеней, 168,75 мм, going 292 мм ✔. | — |
| fall, golv, farg, tapet, grus, trall, staket, kvadratmeter, spillprocent, golvvarme | OK | Формулы проверены: единицы и округления вверх корректны (напр. tapet: floor(10,05/2,5)=4 полосы/рулон; staket: ceil(L/cc)+1 стоек). | — |
| gips / reglar (шурупы) | UNSURE | 20 шт/м² на слой (`Gips:126`, `Reglar:21`) — по Gyproc (c200 кромка / c300 поле, c600) выходит ближе к ~10–12 шт/м². Завышение в запас. | Сверить с Gyproc Handbok. |

## Приоритет исправлений
1. Betong: ROT от труда inkl. moms + потолок (опубликованная цифра неверна).
2. Reglar/Gips: floor → ceil (не хватает 1 стойки).
3. Faktura: поля для ROT (personnummer, fastighetsbeteckning) и реквизиты.
4. Anställd kostnad: AGA на semesterlön.
5. Moms: текст про 12 % livsmedel.
6. Мелочи: timpris (маржа/наценка), restid (120 км), вода в бетоне.
