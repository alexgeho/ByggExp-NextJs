# SEO-архитектура byggexp.se: сколько страниц нужно и каких (2026-10-27)

Два взгляда: SEO-инженер (индекс, интент, каннибализация) + маркетолог (заявки, off-page).
Источники: xlsx «keyWords for ByggExp» (95 ключей KP + вкладки конкурентов), GSC 28 дн. 14.09–11.10
(audits/2026-10-14/gsc, свежий API-токен истёк 14.10 → перевыпустить `.gsc/gen_gsc_token.py`), sitemap byggexp.se
(461 URL), sitemap-ы 9 строительных SaaS (скачаны 27.10), docs/seo/*, product-facts-verified.md, sites-hub/seo-arkitektura.md.

---

## 1. Вердикт

**100 страниц — нет. 12 новых + 2 усиленных — правильный порядок величины, но не тот состав и не главный рычаг.**
Цель — ~25 коммерческих страниц за 6–9 месяцев, выпуск волнами по 5–6, и параллельно сжатие блога с 290 до ~180 URL.
Топ-10 по главным ключам принесут не страницы, а **перенос веса с блога на продуктовые страницы + внешние упоминания/ссылки**.

### Почему не 100 (данные)
| Факт | Цифра | Вывод |
|---|---|---|
| Коммерческие запросы, по которым Google нас уже показывает (28 дн.) | **434 запроса, 18 871 показ, 12 кликов** | Спрос мы уже покрываем. Не хватает типа страницы и авторитета, а не количества URL |
| URL на один запрос | «tidredovisning bygg» — **24 URL**, «tidrapporteringssystem bygg» — 18, «tidrapportering byggföretag» — 17, «tidrapportering bygg» — 16 | Каннибализация. Ещё страницы её усилят |
| Блог | 290 sv-статей; **129 (44 %) <10 показов/28 дн.**; топ-30 статей = 59 % показов блога | Половина блога — балласт, который ест краулинг |
| Партия 18–19.08 | **~66 sv-статей обнулились по показам 9–13.09, хотя остались в индексе** | Прямое доказательство: массовый выпуск на этом домене = алгоритмическое понижение |
| Индексация | 16 URL из sitemap без показов за 90 дн. (9 «unknown to Google», 7 «Discovered») при наличии внутр. ссылок | Домену не хватает доверия, чтобы краулить даже то, что есть |
| Внешние ссылки | ~8, все с byggexp.no | Главный блокер. Против доменов с 5–20 летним возрастом страницы без ссылок не встанут в топ-3 |
| Существующий лендинг /sv/tidrapportering-app | 0 показов за 28 дн. | Новая страница без перевода веса (301 + ссылки) сама не взлетает |

### Сколько коммерческих страниц у тех, кто в топе (sitemap-ы, 27.10, только sv)
| Вендор | Функции | Отрасль/сегмент | Интеграции | Блог/ресурсы |
|---|---|---|---|---|
| Bygglet | 24 | 3 профессии (målare, vvs, elektriker) + 3 роли | 19 | ~300 |
| MyGizmo | 22 | 7 (bygg, entreprenad, måleri, plåt, plattsättare…) | 3 | 43 |
| Byggdagboken | ~19 | — | ~15 | 105 |
| Next | ~18 + ~40 «lösningar» | 6 (huvud-/underentreprenör, mark, installation…) | — | 245 |
| SevenTime | ~30 | 1 (vvs) | 2 | 160 |
| Blikk | 20 | 5 | 24 | 194 + 191 глоссарий |
| Projektportalen | 18 | — | — | 42 |
| Crewlog | 10 | 3 | 3 | 8 (+5 «jämför») |
| **byggexp.se** | **1 хаб + 1 лендинг** | **0** | **0** | **290 + 66 verktyg** |

Медиана: **~20 страниц функций, 3–7 отраслевых, 0–24 интеграции**. Ни у кого нет «профессия × функция» или городских страниц.
Отставание у нас — в коммерческом слое (2 против 25–45), а не в общем числе страниц (у нас 360+ sv URL, больше многих).

### Спрос по типам страниц
| Тип | Спрос (KP/мес) | Статус данных | Решение |
|---|---|---|---|
| Функции (tidrapport, planering, projekt, dagbok, stämpelklocka, offert, faktura) | кластеры 900–15 000 | есть (xlsx) | **Делать: 12–14 страниц** |
| Сегмент «hantverkare» | tidrapportering hantverkare 2 400 (+ «tidrapporteringssystem hantverkare» 229 показов/28д) | есть | **Делать: 1** |
| Сегмент «byggföretag/entreprenad» | tidrapportering byggföretag 170 (642 показа/28д); entreprenad — блог уже поз. 5,9 | есть | byggföretag → в главную страницу tidrapport; entreprenad — **оставить блог** (уже в топ-10, первый источник AIO) |
| Профессии (elektriker, målare, VVS, snickare, plåt, plattsättare, mark) | **неизвестно** — ни в одной вкладке нет | нет | Не делать, пока владелец не снимет KP (сиды ниже). Пилот макс. 3 |
| Интеграции | «visma tidrapportering» 170, «fortnox tid demo» 30; «visma lön» 2 400 — бренд | частично | **1 страница экспорта (SIE4/CSV)**. По-системные страницы — нельзя: API-интеграций нет (product-facts) |
| Города × функция | «digital tidrapport stockholm» 20 | есть, ничтожно | **Не делать.** SaaS без локального интента = doorway/thin |
| Сравнения/«alternativ» | бренды конкурентов 720–8 100, но правило: не называть конкурентов на сайте | — | Не делать vs-страниц. Вместо — 1 страница «Byt system — vi flyttar gratis» без имён |
| Цены | брендовый/AIO «vad kostar» | нет KP | **1 страница /sv/priser** (у всех конкурентов есть; конверсия + AIO) |
| Шаблоны/калькуляторы | schema mall 480, tomt schema mall 390, gantt schema 4 400 и др. | есть | Новые не нужны (66 уже есть, 16 на удаление). Встраивать в статьи и ссылаться на функции |

**Сиды для KP (владельцу одной пачкой, аккаунт 319-362-2543):**
tidrapportering elektriker · app för elektriker · elfirma program · tidrapportering målare · målerifirma program · app för målare ·
vvs program · affärssystem vvs · tidrapportering vvs · app för snickare · snickarfirma program · plåtslageri program ·
plattsättare app · mark och anläggning tidrapport · anläggning program · tidrapportering underentreprenör ·
enmansföretag bygg app · löneunderlag bygg · lön byggnads program · äta hantering · äta app · utlägg app · kvitto app företag ·
verktygshantering app · verktygsregister · fortnox tidrapportering · sie4 export · byta tidrapporteringssystem · byggexp pris.

**Оговорка по KP.** Объёмы в xlsx противоречат GSC: «tidrapportering bygg» KP 70, а показов 927 за 28 дн. на 2-й странице;
«tidrapportering entreprenad» KP 20 против 386 показов. KP отдаёт объём группы близких вариантов одному ключу. Поэтому
считать **спрос кластера**, а не отдельного ключа, и сверять с показами GSC.

### Где масштаб помогает и где вредит
- **Помогает:** шаблонный набор страниц функций (один компонент, 12–14 URL, у каждой своя функция, свои скриншоты и FAQ). Это не pSEO: каждая страница уникальна по сути.
- **Условно:** профессии — по 1 странице на профессию с реальным отличием (пресет egenkontroll-el/vvs уже есть, ÄTA/материал у VVS, ROT у målare). Только при KP ≥50/мес или GSC ≥100 показов/90 дн. Пилот 3 → 6 недель → решение.
- **Вредит:** профессия × функция (7 × 10 = 70 страниц), город × функция (20 × 5 = 100), массовые статьи. Тот же паттерн, что обнулил партию 18–19.08, плюс новая каннибализация с главными страницами функций.

---

## 2. Целевая архитектура

```
/sv  (главная: «byggprogram / system för byggföretag», цены, CTA)
├── /sv/funktioner  (хаб: все функции, ссылки вниз с точными анкорами)
│   ├── /sv/funktioner/tidrapportering        tidrapporteringssystem bygg · tidrapportering bygg · tidrapport bygg · tidrapportering byggföretag · tidredovisning bygg
│   ├── /sv/tidrapportering-app (есть)        app för tidrapportering · tidrapportering app · tidrapport app · tidrapporteringssystem app · mobil tidrapportering*
│   ├── /sv/funktioner/stampelklocka          stämpelklocka · stämpelklocka app (gps)
│   ├── /sv/funktioner/projekthantering       projekthantering bygg · projekthanteringssystem bygg · projektledningssystem (bygg) · app för byggprojekt
│   ├── /sv/funktioner/planering              tidplan program bygg · gantt schema (bygg) · schemaläggning bygg · planeringsprogram bygg
│   ├── /sv/funktioner/resursplanering        resursplaneringsverktyg · resursplanering bygg · bemanningsplanering
│   ├── /sv/funktioner/byggdagbok             digital byggdagbok · byggdagbok app
│   ├── /sv/funktioner/offert-kalkyl          offertprogram bygg · kalkylprogram bygg
│   ├── /sv/funktioner/fakturering            faktureringsprogram bygg (+ ROT, omvänd byggmoms, faktura från ÄTA)
│   ├── /sv/funktioner/ata                    äta hantering (KP)  — волна 3
│   ├── /sv/funktioner/lon-och-export         löneunderlag bygg · SIE4 · «Fortnox/Visma via fil» — волна 2
│   ├── /sv/funktioner/utlagg-kvitton         utlägg app · kvitto (KP) — волна 3
│   ├── /sv/funktioner/verktygshantering      verktygshantering app (KP) — волна 3
│   └── /sv/funktioner/personalliggare        только после запуска модуля
├── /sv/hantverkare                           tidrapportering hantverkare · tidrapporteringssystem hantverkare · affärssystem för hantverkare
├── /sv/branscher/<yrke>                      только пилот 3 после KP (хаб /sv/branscher — когда ≥3)
├── /sv/priser                                byggexp pris · vad kostar …
├── /sv/byt-system                            byta system (без имён конкурентов; бесплатный перенос)
├── /sv/verktyg/*  (66 → ~50)                 mall/kalkylator-интент; каждая — 1 CTA на свою функцию
└── /sv/blog/*  (290 → ~180)                  только инфо-интент: «hur, vad är, regler, belopp»
```
\* «mobil tidrapportering»: блог стоит 8,6 → держит, пока лендинг не обгонит (правило ниже).

**Владение ключами (одна страница = один кластер).** Уже существующие сильные инфо-страницы оставляем владельцами своих ключей:
blog/tidrapportering-entreprenad (5,9) — «tidrapportering entreprenad»; blog/byggdagbok (9,4) — «byggdagbok / vad ska ingå»;
verktyg/byggdagbok-mall — «byggdagbok mall»; verktyg/schema-mall и gantt-schema-mall — «schema mall / gantt mall»;
blog/ob-overtid-byggavtalet-rakna и lön-статьи — «Byggavtalet …».

### Правила перелинковки
1. Вниз: главная → 6–8 главных функций; /sv/funktioner → все функции; анкор = ключ страницы.
2. Вверх: каждая статья и инструмент кластера → **1 ссылка** на свою функцию с анкором ключа (первый экран или после ответа). Никаких ссылок с этим анкором на другие URL.
3. Функция → 2–3 лучшие статьи + 1–2 инструмента своего кластера («Läs mer», «Gratis mall»).
4. Соседи: tidrapportering ⇄ tidrapportering-app ⇄ stämpelklocka ⇄ lön-och-export; planering ⇄ resursplanering ⇄ projekthantering; offert ⇄ fakturering ⇄ ÄTA.
5. /sv/verktyg (350 внутр. ссылок) и главная (790) — главные доноры веса: из них ссылки на функции, не на блог.
6. Хлебные крошки + BreadcrumbList на всех коммерческих страницах.

### Что делать с 290 статьями блога
| Группа | Правило | Ориентир |
|---|---|---|
| A. Коммерческий интент = интент новой функции, позиция >10 | **301 на функцию в день её запуска** + обновить внутренние ссылки | ~15–25 URL: tidrapporteringssystem-bygg, app-for-tidrapportering-bygg (3 965 показов → на /sv/tidrapportering-app), tidrapportering-app-byggforetag, tidredovisning-byggforetag, automatisk-tidrapportering…, tidrapportering (pillar, поз. 41), resursplanering-bygg (10,7), tidrapportering-hantverkare → /sv/hantverkare, projekthantering-byggforetag, offertprogram-byggforetag, faktureringsprogram-bygg, bemanning-och-personalplanering (69) |
| B. Тот же кластер, но в топ-10 | **Не трогать URL.** Переписать первый экран под инфо-ответ + ссылка вверх. 301 — только если через 8 недель функция обгонит её в GSC по этому запросу | mobil-tidrapportering (8,6), tidrapportering-entreprenad (5,9), byggdagbok (9,4), stampelklocka-app-iphone/android (4,7/7,6) |
| C. Партия 18–19.08 (≈66) | После замера ~11.11: 15 переписанных — смотреть; остальные с <10 показов/28 дн. → 301 в ближайшую сильную статью; без близкой — noindex | −40…−50 URL |
| D. Прочие с <10 показов/28 дн. (из 129) | Слить дубли тем (301), остальное noindex,follow; удалить из sitemap | −20…−30 URL |
| E. Инфо-победители (avtal/juridik, Byggavtalet, материалы, топ-30) | Оставить; ответ под H1; 1 ссылка на функцию | ~120–150 URL |

Итог: блог 290 → ~180, коммерческий слой 2 → ~25. Общее число sv URL **падает**, вес концентрируется.
Отдельно: **/sv/fa-offert** («Få 3 offerter från byggföretag», B2C-заявки) — чужой интент для B2B SaaS. Решить владельцу: noindex или перенести на byggtorg.

---

## 3. Взгляд маркетолога: откуда регистрации и что нужно вне сайта

### Какие страницы дают пробные/демо
По интенту (данных о конверсии на byggexp пока нет — включить GA4-события до волны 1):
1. **/sv/priser, /sv/tidrapportering-app, /sv/funktioner/tidrapportering, /sv/hantverkare** — транзакционный интент, самый короткий путь к демо.
2. **Функции planering/resursplanering/projekthantering** — B2B-покупатель с бюджетом, длиннее цикл (демо, не самостоятельная регистрация).
3. **Инструменты (verktyg)** — 360 кликов/28 дн. (треть всех кликов). Не продают напрямую, но это главный вход для мелких фирм: шаблон → «gör det i appen» → регистрация.
4. Блог — бренд и ссылки, почти без заявок (12 кликов по всем 434 коммерческим запросам).

### Элементы конверсии на каждой коммерческой странице
- Hero: H1 = ключ, одна строка ценности, **реальный скриншот** (телефон + веб), кнопка «Boka demo» (CTA сайта по product-facts) + строка «14 dagar gratis · ingen bindningstid».
- Значки App Store / Google Play (реальные ссылки из product-facts).
- 3–5 блоков «что делает» — только подтверждённые функции (GPS-отметка, OB/övertid как тип часов, экспорт PDF/Excel/CSV/SIE4, Gantt, överbokning, ÄTA → faktura, ROT/omvänd moms).
- Видео 30–90 с с YouTube @ByggExp (VideoObject).
- Цены 299/690/990 kr прямо на странице + ссылка на /sv/priser.
- «Vi flyttar din data gratis» (подтверждено 20.10).
- FAQ 5–7 из PAA + FAQPage, SoftwareApplication, BreadcrumbList.
- Нельзя: выдуманные отзывы/цифры клиентов, «automatiskt enligt Byggavtalet», Fortnox/Visma-API, offline, personalliggare как функция.
- Учёт: GA4-события `demo_submit`, `store_click`, `signup_start` по каждой странице — без них гейт волн нельзя мерить по заявкам.

### Off-page по кластерам (страницы без этого не обгонят старые домены)
| Уровень | Что | Зачем | Объём |
|---|---|---|---|
| Домен (месяц 1) | Каталоги ПО: BusinessWith, Programguiden, Systemkompassen, Capterra/GetApp/G2; NAP: Proff, Allabolag, Hitta, Eniro, Google Business Profile | Первые ссылающиеся домены; эти каталоги сами стоят в топе по «schemaläggningsprogram» и т. п. и кормят AIO «Populära system» | 10–15 профилей |
| Домен (непрерывно) | Упоминания бренда: YouTube (корреляция с AI-видимостью ~0,74 — сильнее ссылок), подборки «bästa …» на сторонних сайтах | AIO/LLM видят нас как систему | 2–4/мес |
| Tidrapport / app / hantverkare | Подборки «bästa tidrapporteringssystem/app för hantverkare» на сторонних сайтах; партнёрство с redovisningsbyråer (страницы «verktyg vi rekommenderar»); отраслевые объединения (Byggföretagen, Måleriföretagen, Installatörsföretagen — страницы förmåner) | Самые конкурентные ключи (5 400 / 2 400) — без 10+ доменов топ-10 нереален | 2–3 ссылки/мес на 2 страницы |
| Planering / resursplanering / projekt | Каталожные подборки «schemaläggningsprogram / projektverktyg»; гостевая статья в отраслевом СМИ (svenskbyggtidning и т. п.) | Меньше всего строительной рекламы в выдаче — дешевле всего пробиться | 1–2/мес |
| Byggdagbok / ÄTA | Статья-эксперт про документацию по AB 04 и споры в отраслевом СМИ или у юристов строительного права | Самая низкая планка (конкуренты ~180–360 слов), ссылка быстро даёт эффект | 1/мес |
| Export / lön | Листинг у бухгалтерских партнёров только после реальной API-интеграции | Сейчас — нет оснований | 0 |
Покупка: только у шведских поставщиков (195–300 USD), без Fiverr/Upwork (стандарт).

---

## 4. Волны выпуска и гейты

| Волна | Срок | Новые индексируемые страницы | Что ещё | Гейт для следующей волны |
|---|---|---|---|---|
| **0. Сжатие** | нед. 0–2 | **0** | GSC-токен; GA4-события; хаб /sv/funktioner со ссылками; P0-правки (дубль byggdagbok, LCP обложки); каталоги 10–15; план 301 по группам A/C/D (без выполнения A до запуска целей) | Токен работает, каталоги поданы |
| **1. Ядро tidrapport + быстрые победы** | нед. 2–4 | **5**: funktioner/tidrapportering, funktioner/byggdagbok, funktioner/resursplanering, funktioner/stampelklocka, priser. **Усилить 2**: /sv/tidrapportering-app, /sv/funktioner | 301 группы A для этих кластеров (~8 URL), Request Indexing | Через 4 нед.: все 5 в индексе; у каждой ≥100 показов/28 дн. по своему кластеру; в связке запрос×страница Google выбирает новую страницу ≥50 % показов; общие показы сайта не упали; ≥5 новых ссылающихся доменов |
| **2. Проекты, планирование, деньги** | нед. 6–10 | **6**: funktioner/projekthantering, funktioner/planering, /sv/hantverkare, funktioner/offert-kalkyl, funktioner/fakturering, funktioner/lon-och-export | 301 группы A (~10 URL); партия C/D (−60…−80 URL) после замера 11.11 | Волна 1: средняя позиция по своим ключам ≤15 и ≥1 демо/регистрация из органики за 28 дн.; волна 2 в индексе, ≥50 показов/стр. |
| **3. Хвост функций + пилот профессий** | нед. 12–16 | **4–7**: ÄTA, utlägg-kvitton, verktygshantering, byt-system (если KP ≥50) + **пилот 3 профессии** (только с KP ≥50/мес или GSC ≥100/90 дн.) | KP по сидам выше | Пилот: за 6 нед. каждая профессия ≥100 показов и не забирает показы у /sv/hantverkare / функций |
| **4. Масштаб доказанного** | мес. 5–9 | **0–6**: остальные профессии по тому же шаблону, /sv/branscher-хаб; personalliggare — в день запуска модуля | Ссылки 2–3/мес на 3–4 лучшие страницы | Если пилот не прошёл гейт — профессии не масштабировать |

**Итого за 6–9 мес.:** 15–24 новых коммерческих страницы (+2 усиленных), блог −100…−110 URL.
Сроки: по ключам с позицией 10–15 (dagbok, resursplanering, entreprenad, stämpelklocka app) — 1–3 мес. после волны 1;
по 5 400 / 2 900 / 2 400 — 6–18 мес. и только при 10+ ссылающихся доменах.

### Сравнение со списком «12 новых + 2 усилить»
- Оставить: tidrapportering(-system), tidrapportering-app, hantverkare, byggdagbok, resursplanering, stämpelklocka, planering(+schemaläggning одной страницей, не двумя), projekthantering, offert, personalliggare (после запуска).
- Убрать как новую: **tidrapportering-entreprenad** (блог уже 5,9 и первый источник AIO — новая страница отнимет у него), **schemaläggning отдельно от planering** (две страницы на один кластер = каннибализация; хед «schemaläggningssystem» не строительный).
- Под условием: **arbetsorder** — модуль не подтверждён в product-facts.
- Добавить: **priser**, **fakturering**, **lön-och-export (SIE4/CSV)**, позже ÄTA / utlägg / verktyg / byt-system.
- Главное отличие от списка: **каждая новая страница забирает вес старых статей через 301** — без этого она повторит судьбу /sv/tidrapportering-app (0 показов).
