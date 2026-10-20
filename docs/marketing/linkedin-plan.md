# LinkedIn-план ByggExp: сначала продукт (2026-10-20)

Источник фактов: `docs/seo/product-facts-verified.md`. Цены и триал сверены с `src/locales/pricing.ts` (14 dagar gratis med alla funktioner, ingen startavgift, ingen bindningstid; 299 / 690 / 990 kr/mån exkl. moms).
Ссылки на функции: страницы `src/content/articles/features.ts` (рендер `/sv/blog/<slug>`), проверены на запрещённые утверждения (Fortnox API, offline, авто-Byggavtalet, drag-and-drop): чисто. Исключение: `/sv/blog/fakturera-fran-byggexp` обещает «faktura från loggad tid», а это НЕ проверено. На неё не ссылаемся, пока не исправят.

---

## 1. Диагноз

**Кто заходит на страницу.** Владелец строительной фирмы на 2–30 человек. Ему не нужен ещё один калькулятор. За 5 секунд он хочет понять три вещи: что это за система, решает ли она его пятничную боль (часы → зарплата → счёт) и сколько стоит. Сейчас страница отвечает «60+ бесплатных инструментов», и это выглядит как сайт-справочник, а не как поставщик ПО. Подписываться на такое незачем, демо бронировать тоже.

**Что нужно странице:**
1. Слоган и обложка о продукте: что делает система и для кого. Бесплатные инструменты остаются, но вторым планом (описание + 1 пост в месяц).
2. Первые 6–8 постов о платных функциях, каждый на реальном экране (S1): GPS-тидрапорт, аттест/экспорт, ÄTA → faktura, löner, planering, foto. Так визитёр, листая ленту, видит продукт целиком.
3. Закреплённый пост — обзор продукта + «14 dagar gratis» (не «60+ verktyg»).
4. Кнопка страницы: «Besök webbplats» → `https://byggexp.se/sv?utm_source=linkedin&utm_medium=social&utm_campaign=page-button`. Когда появится выбор, лучше «Kontakta oss» → `/sv/contact` (там «Boka demo»).
5. Раздел «Om»: первые 2 строки о продукте, третья — «Dessutom 60+ gratis kalkylatorer och mallar på byggexp.se/sv/verktyg».
6. Ни отзывов, ни числа клиентов, ни кейсов, пока их нет (нельзя выдумывать). Доверие строим через реальные экраны, цену и «ingen bindningstid».

**Менять ли слоган и обложку: да.** Это противоречит правилу S13 («польза для подписчика первой = бесплатные инструменты»). Предлагаю правило S14 (вписать в `DESIGN-SYSTEM-SMM.md` после «ок» владельца): «LinkedIn = B2B-витрина продукта: обложка, слоган, закреп и первые посты показывают платные функции на реальных экранах; бесплатные инструменты вторым планом». Для FB S13 можно оставить: там аудитория — рабочие, а не владельцы.

**Слоган (≤120 знаков, 102):**
```text
Tidrapport med GPS, projekt, ÄTA, faktura och löneunderlag – ett system för bygg- och hantverksföretag
```

**Обложка, заголовок 2 строки (белая / голубая):**
```text
Från incheckning till lön och faktura
Ett system för hela byggföretaget
```
Визуал: реальный экран `public/landing/features/shiftsExport.webp` (Arbetspass на ноутбуке + телефон с GPS). Генератор `covers/make_covers.py`, JPG 1584×268 (PNG LinkedIn не принимает). Перед загрузкой прогнать агента-критика (S9).

---

## 2. Первые 8 постов страницы (по порядку)

Общее: картинка 4:5 через `posts/make_posts.py`, заголовок 2 строки (S4), реальный скрин 2x (S1, S5), числа реалистичные и объяснимые (S8, S11), агент-критик до публикации (S9). Ритм: 2 поста в неделю (вт + чт) в течение 4 недель. Пост 1 закрепить.
Охват: у страницы 0 подписчиков, поэтому ссылку оставляем в тексте. Личный профиль Alexander делает репост с 1 своей строкой.

### Пост 1 — Обзор продукта (ЗАКРЕПИТЬ)
**Цель:** визитёр за 5 секунд понимает, что ByggExp — это система, и видит цену/триал.
**Скрин:** `public/landing/features/shiftsExport.webp` (Arbetspass: GPS-часы по людям + телефон). Заголовок картинки: «Timmar, ÄTA, faktura, lön» / «I ett system för bygget».
```text
Fredag eftermiddag. Lappar, sms och Excel ska bli tidrapport, lön och faktura.

ByggExp samlar det i ett system för byggföretag:
• Tidrapport med GPS i mobilappen
• Projekt, ÄTA och planering
• Faktura med ROT-avdrag och omvänd byggmoms
• Löneunderlag och export till lön och bokföring

Testa gratis i 14 dagar. Ingen startavgift, ingen bindningstid.
👉 https://byggexp.se/sv?utm_source=linkedin&utm_medium=social&utm_campaign=page-product
```

### Пост 2 — GPS-incheckning + geofence
**Цель:** главная фича, у которой самый понятный «вау»-эффект: часы считаются на месте.
**Скрин:** готовый `design-assets/social/posts/03-gps.jpg` (если по S4/S5 проходит) или телефонная часть `shiftsExport.webp` (вкладка GPS, календарь часов). Заголовок: «Vem var på bygget?» / «Appen vet – med GPS».
```text
Vem var på bygget i går – och hur länge?

I ByggExp checkar laget in och ut i mobilappen med GPS. Lämnar någon projektområdet pausas passet automatiskt. Timmarna hamnar på rätt projekt, med timtyp, restid och traktamente. I kalendern ser du timmarna för hela laget, dag för dag.

Appen finns för iPhone och Android.
👉 https://byggexp.se/sv/blog/automatisk-tidrapportering-och-export?utm_source=linkedin&utm_medium=social&utm_campaign=page-product
```

### Пост 3 — Attest + export
**Цель:** боль руководителя «собрать недели часов». Показать, что на выходе файлы для зарплаты и бухгалтерии.
**Скрин:** админка Arbetspass (`public/landing/features/1arbetspass-1200.webp`), вырезать таблицу часов + открытое меню Export (снять заново через `posts/shot-tools.mjs`, если меню не видно). Заголовок: «Veckans timmar» / «Attesterade på 5 minuter».
```text
Måndag morgon. Förra veckans timmar ska attesteras.

I ByggExp ser du varje pass per person och projekt: planerat, GPS och manuellt sida vid sida. Du godkänner på webben och tar ut tidrapporten som PDF eller Excel, löne-CSV eller SIE4-fil till bokföringen.

Inget att knappa in igen.
👉 https://byggexp.se/sv/blog/automatisk-tidrapportering-och-export?utm_source=linkedin&utm_medium=social&utm_campaign=page-product
```
Заголовок картинки «på 5 minuter» — это не проверенный факт. Если критик спросит «откуда 5 минут?», заменить на «Attesterade och exporterade».

### Пост 4 — ÄTA → faktura
**Цель:** деньги. Неоплаченные доп. работы — самая острая боль владельца.
**Скрин:** готовый `design-assets/social/posts/06-faktura.jpg` (ÄTA → счёт, одна история по S11). Перед публикацией сверить ROT: на `faktura-preview.webp` найдена ошибка (ROT посчитан без moms), в 06-faktura такой ошибки быть не должно.
```text
Extrajobbet gjordes i mars. Blev det fakturerat?

I ByggExp kopplas ÄTA:n till arbetspasset, så timmarna syns som ÄTA-tid. När ÄTA:n är godkänd blir den en förifylld faktura med er logotyp. Moms, ROT-avdrag eller omvänd byggmoms räknas ut.

Ett steg i stället för två.
👉 https://byggexp.se/sv?utm_source=linkedin&utm_medium=social&utm_campaign=page-product
```

### Пост 5 — Löner / löneunderlag
**Цель:** вторая денежная боль: зарплата из часов без ручного подсчёта.
**Скрин:** `public/landing/features/12salary-1200.webp` (Löner: Timmar × Timlön = Brutto, кнопки Exportera CSV / AGI-underlag). **Переснять:** сейчас у 6 из 8 строк timlön 0,00 (нарушение S5/S11). Нужно 3–4 строки с timlön ≈ 230 kr; Brutto = timmar × 230, это видно на картинке (S8). Заголовок: «Lönen den 25:e?» / «Timmarna finns redan».
```text
Lönen ska vara klar den 25:e. Timmarna ligger på lappar hos fem personer.

I ByggExp summeras timmarna per medarbetare och timtyp: normal, övertid och OB enligt passet. Bruttolönen räknas med de faktorer ni själva anger. Exportera CSV till lönesystemet och ta ut AGI-underlaget.
👉 https://byggexp.se/sv/blog/loneunderlag-for-byggforetag?utm_source=linkedin&utm_medium=social&utm_campaign=page-product
```

### Пост 6 — Planering + Bemanning
**Цель:** показать, что это не только учёт времени, а управление людьми на объектах.
**Скрин:** `public/landing/features/5planering-1200.webp` (Gantt по Personal, месяц). Для Bemanning, если будет второй кадр, снять сетку с красной ячейкой «överbokad» (стопка по S8). Заголовок: «Vem jobbar var i morgon?» / «Allt på en skärm».
```text
Vem jobbar var i morgon?

I Planering ser du personal eller projekt på en tidslinje: 2 veckor, månad eller egen period. I Bemanning sätter du folk på projekt dag för dag. Godkänd frånvaro syns direkt, och den som får mer än 8 timmar på en dag markeras som överbokad.
👉 https://byggexp.se/sv/blog/dagsplanering-och-planeringsmoten?utm_source=linkedin&utm_medium=social&utm_campaign=page-product
```

### Пост 7 — Foto och dagbok
**Цель:** документирование: споры с заказчиком, «что было за стеной».
**Скрин:** `public/landing/features/4foto-1200.webp` (вкладка Foto проекта). В тексте пишем «datum», НЕ «GPS»/«tidsstämpel» (у фото их нет). Заголовок: «Var är bilden från i mars?» / «På projektet, med datum».
```text
”Hur såg det ut innan ni stängde väggen?”

I ByggExp tas fotot i appen och kopplas till arbetspasset: rätt projekt, datum och person. Alla bilder samlas i projektets Foto-flik. I dagboken skriver ni väder, bemanning, utfört arbete och avvikelser per dag.
👉 https://byggexp.se/sv/blog/dokumentera-med-foton-pa-bygget?utm_source=linkedin&utm_medium=social&utm_campaign=page-product
```

### Пост 8 — Цена + демо
**Цель:** конверсия. Снять вопрос «сколько стоит» и дать один шаг: демо.
**Скрин:** скрин блока цен с сайта (`src/components/Pricing`, 3 карточки, 2x headless Chrome, без cookie-баннера). Заголовок: «Vad kostar det?» / «Från 299 kr i månaden».
```text
Vad kostar ett system för tid, ÄTA, faktura och lön?

Tre paket per företag och månad, exkl. moms:
• 299 kr – faktura och ekonomi
• 690 kr – tidrapport och projekt, 10 användare ingår
• 990 kr – allt i ett

14 dagar gratis med alla funktioner. Ingen startavgift, ingen bindningstid.

Boka en demo så visar vi hur det ser ut för ert företag.
👉 https://byggexp.se/sv/contact?utm_source=linkedin&utm_medium=social&utm_campaign=page-product
```

---

## 3. Постоянный микс и ритм (после первых 8)

**Страница: 2 поста в неделю (вт, чт).** В месяц 8 постов:
| Рубрика | Доля | Пример |
|---|---|---|
| Продукт (1 функция = 1 боль, реальный экран) | 4/мес (50 %) | ID06 med utgångsdatum, personalliggare-PDF, Uppgifter med påminnelser, Utlägg, Lönsamhet (последние два — сначала сверить с кодом и внести в product-facts) |
| Экспертиза (правило/цифра из отрасли, без продажи) | 2/мес | omvänd byggmoms: när gäller den; vad ska en ÄTA innehålla; AGI varje månad |
| Proof / прозрачность | 1/мес | «Nytt i ByggExp denna månad» (changelog с экраном). Отзывы и кейсы — только когда будут реальные, с разрешением клиента |
| Behind the scenes | 1/мес | Alexander + разработка, фото с объекта Agry Entreprenad, «varför vi byggde geofence-pausen» |
| Бесплатный инструмент | 0–1/мес | только из списка, прошедшего QA (`docs/marketing/verktyg-qa.md`) |

Форматы: изображение 4:5 по умолчанию. Раз в 2 недели — PDF-карусель (5–7 слайдов: «Från incheckning till faktura i 5 steg», реальные экраны). Короткое видео (GPS-ролик 16:9, когда владелец даст «ок») загружать нативно, не ссылкой на YouTube.

**Личный профиль Alexander Gerhard — главный канал LinkedIn.** Личные профили набирают больше охвата, чем страницы компаний. Точные множители в исследовании не подтвердились, но направление единое во всех источниках.
- 3 поста в неделю (пн / ср / пт, 07:30): история основателя («я сам из стройки, Agry Entreprenad»), ошибки и правила отрасли, один продуктовый момент в неделю. Ссылки — в первый комментарий.
- Каждый пост страницы — репост с 1–2 своими строками в день выхода.
- Ежедневно 15 минут: содержательные комментарии под постами шведских строителей и владельцев фирм. Вручную: автоматизация запрещена правилами LinkedIn.
- Приглашения на страницу (кредиты «Bjud in kontakter», фильтр Sverige): владелец делает руками после поста 4, когда в ленте уже есть продукт.
- В заголовке профиля: «Grundare ByggExp – tidrapport, ÄTA och lön för byggföretag». Ссылка на `/sv/contact`.

KPI раз в неделю: подписчики страницы, клики по UTM `page-product` (GA4), заявки на демо с `/sv/contact`.

---

## 4. Опубликованные посты о калькуляторах: риск, если инструменты неточны

| Пост (где) | Риск | Почему | Что делать |
|---|---|---|---|
| OB/övertid-kalkylator «enligt Byggavtalet» (FB 04, запланирован LinkedIn личный 1) | **Высокий** | Деньги и коллективный договор. Ошибка = неправильная зарплата и удар по доверию к модулю Löner. Сам продукт по Byggavtalet НЕ считает, а пост это смешивает | LinkedIn-пост не публиковать до QA. FB — проверить первым, при ошибке удалить |
| Takstolar-kalkylator (LI-sida 1 + FB) | **Средне-высокий** | Конструктивная тема. Пост обещает nockhöjd и takyta; формула кол-ва (längd ÷ c/c + 1) простая, но размеры влияют на безопасность | Проверить nockhöjd/takyta; при сомнении отредактировать пост, оставить только «antal takstolar» |
| Entreprenadkontrakt-mall «enligt AB 04 eller ABT 06» (LI-sida 2 + FB) | **Средний** | Юридический документ. Страница инструмента обещает «digital signering i ByggExp», а этого нет в product-facts | Проверить мall и убрать с сайта обещание подписи; в посте формулировка «på ett ställe» допустима |
| Egenkontroll bygg / VVS (LI-sida 3, 4 + FB) | **Низкий-средний** | Не расчёт, а чек-лист. Риск — неполные или неточные пункты (fuktkvot, täthetsprovning); на мобильном длинные пункты обрезаны | Сверить пункты, починить мобильную вёрстку |
| Egenkontroll el (черновик LI + FB) | **Средний** | Электробезопасность (isolationsresistans, skyddsjord) | Черновик на LinkedIn не публиковать до QA |
| Gips-kalkylator, 00-verktyg «60+», ÄTA-mall (FB) | Низкий / средний | Gips — простая площадь. «60+» обещает все инструменты сразу | «60+» снять с закрепа LinkedIn (если стоит), закреп = пост 1 этого плана |

Общий вывод: 4 поста на LinkedIn-странице оставить, но не закреплять и новых про инструменты не добавлять, пока `verktyg-qa.md` не закрыт. После поста 1 этого плана ленту страницы открывает продукт.
