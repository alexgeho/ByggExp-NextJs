# ByggExp SMM — статус и следующий шаг (handoff для агента)

Обновлено: 2026-10-21 (Windows-компьютер, см. раздел ⏳ 21.10). Копия: OneDrive-Personal/ByggExp-SMM/smm-status.md
Агент: прочитай этот файл целиком и design-assets/social/DESIGN-SYSTEM-SMM.md (правила визуала: правка → правило → дизайн), потом делай «▶ СЛЕДУЮЩИЙ ШАГ».

## ⏳ 21.10 Видео на Windows-компьютере — ждёт ответа владельца
ТЗ: docs/marketing/video-handoff.md. Первая задача — трейлер с админкой (45–60 с). На этом компьютере (Windows) работа стоит.

**Сделано агентом 21.10:** Python 3.12 (winget, user scope: `%LOCALAPPDATA%\Programs\Python\Python312\python.exe`) + Pillow, numpy, imageio-ffmpeg (ffmpeg 7.1). puppeteer-core установлен во временной папке. `trailer/rec.mjs` выбирает путь к Chrome по ОС. `trailer/make_trailer.py`: если SF Pro нет, берёт Segoe UI Black/Semibold (только для черновиков на Windows). Проверка: клипы записаны, старый трейлер собран (35,5 с, рендер ~3 мин), кадры в порядке.

**Чего не хватает:**
- **`.env.admin`** с ELEVENLABS_API_KEY в корне репо нет. Ключ стоит перевыпустить: он светился в чате.
- **Исходники OneDrive ByggExp-SMM/video (src, out):** локальная папка OneDrive пустая (подключён другой аккаунт). Нужна ссылка.
- **Шрифт SF Pro** (`/System/Library/Fonts/SFNS.ttf` в make_trailer.py и др.) — только для Mac. Ставить на Windows нельзя (лицензия Apple).
- **Чистая демо-компания** не создана. Создаёт владелец, агент наполняет (S11: timlön ≈230, будни, шведские имена и проекты) и записывает.
- Запись на Windows возможна через `trailer/rec.mjs` (CDP screencast). Нужно поменять executablePath на Chrome для Windows; в админку в окне записи входит владелец.

**Вопросы владельцу:**
1. ✅ Python поставлен агентом (21.10).
2. SF Pro (рендер на Mac) или Inter (тогда новое правило S-N, нужно «да» владельца)?
3. Ссылка на OneDrive ByggExp-SMM/video и файл `.env.admin` с новым ключом.
4. Демо-компания: сообщить, когда создана. Наполнение и запись делает агент.

**Черновик текста трейлера с админкой** (голос Malin; факты из product-facts-verified.md; ещё не утверждён):
| Сцена | Текст |
|---|---|
| Обещание | Planera, tidrapportera och fakturera – i ett system byggt för byggföretag. |
| Översikt | I översikten ser du läget direkt: aktiva projekt, vem som är på jobbet och kommande deadlines. |
| Planering / Bemanning | Planera personalen per projekt och dag – och se direkt om någon är överbokad. |
| Arbetspass → attest | Personalen stämplar in med GPS i appen. Du attesterar timmarna och exporterar löneunderlag. |
| Fakturor | Fakturan får din logotyp, och moms och ROT-avdrag räknas ut automatiskt. |
| Калькуляторы | På byggexp.se finns också gratis kalkylatorer – utan konto. |
| CTA | Prenumerera på kanalen för fler guider som sparar tid på pappersjobbet. |

Проверить до записи: маржа на Översikt (в ТЗ «Översikt: ekonomi/marginal») и «faktura → PDF» в product-facts-verified.md не подтверждены. В текст не включены. Маржу можно показать во вкладке Ekonomi у проекта.

## ▶ СЛЕДУЮЩИЙ ШАГ
0. 20.10 YouTube-упаковка (docs/marketing/youtube-upakovka.md): трейлер ~/Desktop/SMM/youtube/trailer-16x9.mp4 (генератор shorts/trailer/), баннер covers/youtube-banner-value.png, описание канала, план Home tab. Ждёт «да» владельца → загрузить трейлер, поставить баннер/описание/секции в Studio.
1. iOS-приложение в симуляторе: собрано и запущено, висит на «Open in "ByggExp"?» — владелец жмёт Open в Device Hub (у агента нет Accessibility для клика). Дальше (см. «Видео → симулятор»), установить, открыть. Владелец входит в demo@byggexp.se сам (пароль агенту вводить нельзя).
2. Записать живой экран (нужно: Системные настройки → Запись экрана → Visual Studio Code ВКЛ; проверка: `screencapture -x /tmp/t.png` без ошибки). Если нет доступа — монтировать из скриншотов (как сейчас).
3. ✅ 19.10 вечер: видео GPS перемонтировано — камера наезд→держит→отъезд (smootherstep, subpixel через resize(box) на 2x-сцене), субтитры на плашке, 16:9 + 9:16 (video-gps-16x9.mp4 / video-gps-9x16.mp4, копии в OneDrive и ~/Desktop/SMM). Ждёт «ок» владельца. Запись экрана VS Code теперь разрешена (screencapture OK).
4. ⏸ Видео отложено владельцем (19.10). Не трогать, пока не скажет.
4c. НАЙДЕНО на сайте (не исправлено): särskrivning «ROT-avdrag kalkylator» → «ROT-avdragskalkylator» (verktyg-list); faktura-preview.webp — ROT 7 800 kr посчитан без moms (верно 9 750); faktura-mall на мобильном — строка счёта обрезана; egenkontroll на мобильном — длинные пункты обрезаны; faktura-mall обещает «fakturera utifrån loggad tid» (не проверено в product-facts).
4a. ✅ 19.10 ~21:00 FB-страница: ОПУБЛИКОВАНЫ сразу (по слову владельца) 04 OB, 05 egenkontroll, 06 ÄTA→faktura. LinkedIn 1–3 из posts-v2 — НЕ опубликованы (ждут решения: 3 поста в день режут охват). Метод загрузки картинки в Meta Business Suite: JS-патч HTMLInputElement.click (file input в DOM) → file_upload.
4e. ✅ 19.10 21:44–21:47 FB: опубликованы 5 постов по спросу GSC (неделя 45): 11 kontrakt, 08 ek-el, 09 ek-vvs, 10 ek-bygg, 12 takstolar — все через критика (S9). Генератор: make_posts.py + w45.mjs (скрины). На сайте: entreprenadkontrakt-mall обещает «digital signering i ByggExp» — нет в product-facts, проверить. Takstolar на мобильном: «5,05 m» переносится (вёрстка).
4d. ✅ 19.10 21:31 закреплён пост 00-verktyg «60+ gratis verktyg» (pinned). 21:33 опубликован триггер 07 «Kommentera ÄTA». ⏳ ВЛАДЕЛЕЦ: автоматизация Comment to message (Inbox → Automations → Comment to message, пост «Extrajobb utan skriftlig ÄTA…», ключевые слова ÄTA/ata/mall, текст ответа — posts-v2.md «FB TRIGGER») — auto mode блокирует агенту (standing rule). Подписчиков у страницы 0 → владелец: «Пригласить друзей».
4b. Контент-микс: в плане только обучающий (Verktyg, Pappersjobbet) + продающий (ByggExp); развлекающего 0 — предложено добавить рубрику.
4a-old. Посты недели 44 (26–30.10) готовы: design-assets/social/posts/posts-v2.md + 04-ob/05-egenkontroll/06-faktura.jpg (копии OneDrive/Desktop posts-v2). После «ок» — поставить в отложенные (FB 07:00, LinkedIn 07:30).
4b. (бывш.) После «ок» владельца — выложить: YouTube (канал ByggExp), Reels на FB-странице.
5. Ежедневно: проверить отложенные посты вышли, ответить на комментарии, 3–5 полезных ответов в FB-группах.

## Аккаунты
| Канал | Ссылка / ID | Статус |
|---|---|---|
| Facebook-страница | https://www.facebook.com/profile.php?id=61595288321379 | обложка, лого, кнопка Learn more → /sv/verktyg, описание |
| LinkedIn company | https://www.linkedin.com/company/byggexp (id 145333070) | баннер, лого, описание (SV — править через Redigera sida → **Språk → Svenska**; вкладка Detaljer сохраняет в English) |
| LinkedIn личный | профиль Alexander Gerhard | постит владелец, агент планирует |
| YouTube | канал UC2cZ8gHpiZxVm5_vs8XkI6A (Google byggexp@gmail.com) | баннер, ссылки (сайт/FB/LI), e-mail kontakt@byggexp.se |
| Instagram | — | НЕ создан: владелец регистрирует (агент не создаёт аккаунты), потом связать с FB |
| Сайт | футер: иконки YouTube/FB/LinkedIn (коммит 4dfa8ca) | в main |

## Сделано 2026-10-19
- План 90 дней: docs/marketing/smm-plan-90d.md (+ docx в OneDrive). Ресёрч: FB главный (25+ в Швеции 78–85 %), YouTube/Reels, LinkedIn вторично, TikTok не сейчас; 0→1000 подписчиков за 3–6 мес.
- Обложки: design-assets/social/covers/ (make_covers.py — заголовок/подзаголовок с главной).
- Посты опубликованы: FB «гипс-калькулятор»; LinkedIn личный «Jag bygger ByggExp» (+ссылка 1-м комментарием); LinkedIn страница «Hej LinkedIn».
- Вступили в FB-группы (от личного профиля Alex): Bygg och renovering (168K), Driva Eget (43K), Hantverkare sökes (15K), Bygg och Renovering (13K), Marknadsför ditt Företag, Nya företag!, Reklam Är Tillåtet, Jag vill hitta en målare/snickare, Hitta Snickare Stockholm, Jag vill hitta en plattsättare… Заявка pending: Egenföretagare (55K). Driva Eget / Nya företag требуют ответить на вопросы/правила — это делает владелец.

## Запланировано (отложенные посты)
| Дата | Канал | Пост |
|---|---|---|
| вт 20.10 07:30 | LinkedIn личный | ÄTA (3 пункта + ссылка ata-mall) |
| ср 21.10 07:00 | FB-страница | ÄTA-мall + картинка 02-ata.jpg |
| ср 21.10 07:30 | LinkedIn личный | Fredag = tidrapporter (вопрос) |
| чт 22.10 07:30 | LinkedIn личный | Påslag vs marginal + калькулятор |
| пт 23.10 07:00 | FB-страница | GPS-тидрапорт + 03-gps.jpg |
| пт 23.10 07:30 | LinkedIn личный | Опрос «какое пейпер-работа дольше всего» |
Тексты: design-assets/social/posts/posts-v1.md, ~/Desktop/SMM/linkedin-posts-v1.md. Следующие посты — из smm-plan-90d.md §5 (№4–12).

## Заблокировано (делает владелец вручную)
- LinkedIn: 50 приглашений подписаться на страницу (окно «Bjud in kontakter», фильтр Sverige) — auto mode блокирует массовую отправку.
- LinkedIn: запросы в контакты — список ~/Desktop/SMM/linkedin-kontakter-v1.md.
- Instagram регистрация.
- Входы с паролем (demo@byggexp.se в приложении/админке).

## Видео
- Генераторы: design-assets/social/shorts/make_short.py (старый, слайды — владелец забраковал), design-assets/social/shorts/gps/make_gps_short.py (реальные экраны + голос + субтитры; сейчас 16:9 → video-gps-16x9.mp4).
- ffmpeg: `python3 -c "import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())"` (brew не работает).
- Голос: ElevenLabs, ключ в .env.admin (ELEVENLABS_API_KEY; права только TTS+STT, нет voices_read). Голос **Malin** voice_id `zyfJspwEDo0sxPeFmtsn`, model eleven_multilingual_v2, endpoint /with-timestamps → alignment.json для субтитров. Ключ светился в чате — владельцу стоит перевыпустить.
- Отзыв владельца: слайд-видео «не годится»; нужно: реальные экраны, не обрезать углы, 16:9, НЕ дёргаться, зум как камера (наезд/отъезд).
- Симулятор: в Xcode 27.1 вместо Simulator.app → **Device Hub** (/Applications/Xcode.app/Contents/Applications/DeviceHub.app). Expo `run:ios` его не видит → сборка напрямую:
  `cd ~/Bygg-exp-dev/tot-bygghub-mobile-app-ios/ios && xcodebuild -workspace ByggExp.xcworkspace -scheme ByggExp -configuration Debug -destination 'id=5904885A-ED7B-465B-A0AC-359665F69AAC' -derivedDataPath build/dd IPHONEOS_DEPLOYMENT_TARGET=15.1 build`
  затем `xcrun simctl install <UDID> build/dd/Build/Products/Debug-iphonesimulator/*.app` и `xcrun simctl launch`. Metro уже на :8081. Веб-версия приложения: `CI=1 npx expo start --web --port 8082`.
- Демо-данные: админ-аккаунт «Roger» (тот же, что на скринах сайта) — можно показывать.
- **Туториал-пайплайн (готов, 2026-10-19):** design-assets/social/shorts/faktura/ — `analyze.py` (паузы + тапы из записи Screen Studio) → `script_sv.json` (фразы с привязкой к моменту) → TTS Malin по фразам → `make_video.py <src> sv <out>` (вырезает паузы, белые круги на тапах, субтитры справа как в SV-ролике). Готово: ~/Desktop/SMM/onboarding/faktura-sv.mp4 (1:29 из 3:36, исходник ~/Downloads/faktura10.mp4). Далее: EN-версия (script_en.json + voice_en), по желанию 4K.
- Мокап-генератор: design-assets/social/shorts/onboarding-app/make_mockup.py — iPhone на фоне ~/Documents/ByggExp/logos-banners/background.png, геометрия снята с SV-ролика на YouTube (телефон y38–1039, текст x1231, шаг 53px). Оригиналы владелец делает в **Screen Studio** (пресет Wide 16:9, фон Image, padding 5%).

## 💡 Идеи на потом (обсуждение, НЕ делать без запроса)
**Видео со спецэффектами** (2026-10-19, владелец: «пока чисто для обсуждения»):
1. **Монтаж телефон + админка с переходами** (вылет телефона, ноутбук+телефон, наезды, фирменные шрифты) → **Remotion** (видео как React-страница, рендер командой, бесплатно до 3 человек). Новых сервисов не нужно. Рекомендация — начинать с этого.
2. **3D-телефон с пролётом камеры** → **Rotato** (~$59 навсегда / $7 в мес., Mac/веб; работает владелец) или упрощённо через Remotion.
3. **Человек достаёт телефон — экран включается, там наше приложение** → ИИ-видео (Veo 3.1, Kling, Runway, Seedance; ~$0.03–0.40 за секунду через API; ключ Replicate уже есть). Надёжный способ: ИИ генерирует сцену с пустым/зелёным экраном → вставляем НАСТОЯЩУЮ запись приложения с трекингом (ИИ сам мелкий UI-текст рисует «кашей»).

## Правила (не нарушать)
- Только проверенные факты продукта: docs/seo/product-facts-verified.md (нет Fortnox API, offline, авто-OB).
- Без выдуманных отзывов/кейсов/числа клиентов. Ссылки с UTM. Шведский язык.
- Публикация/рассылка от имени владельца — только по его «да».

## 4f. 20.10 LinkedIn-страница — упаковка (правило S13)
- Сделано: адрес (Ekbacksvägen 32, Bromma), слоган «60+ gratis kalkylatorer och mallar…», кнопка «Besök webbplats» → /sv/verktyg?utm…page-button, новая обложка linkedin-cover-value.jpg (критик «чисто»). FB-обложка facebook-cover-value.png готова, НЕ загружена.
- Опубликовано на странице: takstolar, entreprenadkontrakt, egenkontroll bygg, egenkontroll VVS. Egenkontroll el — в черновиках. Остальное остановлено по слову владельца: сначала посты о платных функциях, калькуляторы ещё не проверены.
- В работе: эксперт по маркетингу → docs/marketing/linkedin-plan.md; QA калькуляторов → docs/marketing/verktyg-qa.md.
- Загрузка обложки LinkedIn: PNG 2256x382 падает с ошибкой, JPG 1584x268 проходит.
- 20.10 LinkedIn-страница, посты о продукте (S14), опубликованы после проверки критиком: 26 цены, 25 фото, 06 ÄTA→faktura, 21 GPS (самый новый, сверху ленты).
- Не прошли критика, нужна пересъёмка в admin.byggexp.se (Roger, демо-компания) на чистых данных: 20 обзор (мелко), 22 аттест (нет меню Export), 23 löner (timlön 320/350 и 0,00, всего 2 строки), 24 planering (мелко, интерфейс по-английски). Баги в приложении: дни TUE/WED, «Week», роли worker/projectAdmin не переведены на шведский.
- verktyg-qa.md: инструменты, которые уже продвигали, считают правильно. Ошибки в других: ROT в betong, reglar/gips −1 стойка, в faktura-generator нет полей для ROT, персонал-кост, «12 % livsmedel».
- 20.10 LinkedIn: новая обложка linkedin-cover-product (критик: «чисто») и слоган о продукте (S14) — стоят. Пересняты в admin.byggexp.se (аккаунт Roger, через zoom в Chrome): 20 обзор, 22 журнал смен + экспорт, 23 löner. Критик их не принял, причина в демо-данных: даты в выходные, timlön 350/320, период выпадает на byggsemester, пустая планировка и бемманнинг. Нужны чистые демо-данные: решает владелец.
- 20.10 FB-страница: загружена обложка facebook-cover-value (S13, «60+ gratis verktyg för byggare»). Личный профиль владельца НЕ трогать (сказал владелец).
- 20.10 FB-обложка ВОЗВРАЩЕНА на старую продуктовую (владелец: бесплатные инструменты не в упаковку). S13 отменено, S14 на всех страницах. Открыто: LinkedIn-обложка сейчас продуктовая (ок), а закреплённый на FB пост «60+ gratis verktyg» противоречит S14.
- 20.10 FB перевыкладка (v3, S15): старые посты отправлены в архив (обратимо): takstolar, ek bygg, ek VVS, ek el, kontrakt. Пост с обложкой «60+» скрыт со страницы. Auto mode заблокировал остальное. Осталось архивировать: ÄTA trigger, закреп 60+ verktyg, OB, ÄTA→faktura, våtrum, gips. Тексты v3 лежат в posts-v2.md «# FB v3», картинки перерендерены, критик: чисто (после правок).
- 20.10 ~12:00 FB v3 ОПУБЛИКОВАНЫ 11 постов (takstolar, kontrakt, ek bygg/VVS/el, våtrum, OB, foto, pris, ÄTA→faktura, GPS), закреплён GPS. Все старые посты в архиве (обратимо, Manage posts → Archive).

## 2026-10-20 · v4: фото фич с сайта + цена + сторы (S16, S17)
- Генератор: `design-assets/social/posts/make_features.py` → `posts/v4/` (00-hero + 01–10, слайды -1/-2), тексты `posts/v4/texts.md`. Шапка сайта/значки сторов: `posts/shot-hero.mjs` → `src/hero*.png`, `src/stores.png`. Обложки: `covers/make_covers.py` → facebook-cover-v4.png, linkedin-cover-v4.jpg.
- Критик ×2. Исправлено: кириллица (офферта), e-mail размыты (närvaro), пустые строки лёнер убраны, телефон по контуру. Не публикуем: 03-faktura и 04-offert (на сайте пустые формы), 11-uppgifter (английские уведомления) — нужны новые фото фич на сайте.
- FB: 9 постов (по 1 слайду — FB режет 2 фото пополам), закреп = 00-hero, обложка v4. В архив: старые pris (299/690/990), foto, ÄTA→faktura, GPS.
- LinkedIn-страница: 9 постов (по 2 слайда), Utvalda = 00-hero, баннер v4. Старый пост с ценами 299/690/990 остаётся — удалить может только владелец.

## 2026-10-21 · Обложки в стиле шапки сайта (S20)
- FB: загружена covers/fb-site.png (без плашек, цвета/пропорции сайта, цены ×1.3, под мобильную обрезку и аватар). LinkedIn: li-site.jpg (1584x268), «поделиться в посте» — нет.
- Генератор: covers/make_fb_mobile.py (render + phone_preview, render_li). planering убран из строки +69 kr/arbetare.
- Instagram всё ещё не создан — регистрирует владелец.
- 21.10 Instagram: владелец создал @byggexp; агент: аватар, bio (Hela byggföretaget…/299+69 exkl. moms/14 dagar gratis), Business, категория Programvara, e-mail kontakt@byggexp.se. Имя профиля пока «Alexander Gerhard» (менять в Accounts Center), ссылка только из мобильного приложения, связь с FB-страницей — не сделана (вход в IG из Business Suite).
- 21.10 Новый посыл S21 (не боль, а выгода перехода). Владелец удалил пост-вопрос про tidlappar. Черновики v5: design-assets/social/posts/v5-erbjudande.md — ждут ok. Отложенные посты v1 (боль) — проверить и снять.
- 21.10 поздно: ÄTA убран из IG bio, LinkedIn-слогана и описаний (sv+en), FB bio. IG bio: «Hela byggföretaget på ett ställe. / Tidrapport med GPS, offert, faktura och lön m.m. / 299 kr/mån för hela ekonomin + 69 kr/arbetare (exkl. moms).»
- LinkedIn личный: новый пост v5 №1 с картинкой 00-hero — отложен на 22.10 08:00. Старые отложенные (22.10 07:30 påslag, переписан текстом v5, но с превью калькулятора; 23.10 07:30 «pappersjobb») — удалить владельцу (удаление агенту нельзя). ÄTA-пост 20.10 — удалить владельцу.

## 2026-10-22 ночь · v6 посты в FB-группах (S21), профиль Alexander
Тексты/картинки: design-assets/social/posts/v6-grupper/ (маркетолог → дизайнер → критик ×3 круга).
Опубликовано: g04 Reklam Är Tillåtet · g03 Marknadsför ditt Företag · g02 Nya företag! (на модерации; окно «согласен с правилами» не принимал — владелец) · g10 Jag vill hitta en målare, snickare · g06 Bygg och Renovering i Stockholm (на модерации) · g01 Jag vill hitta en plattsättare… 
Правила групп: Driva Eget — свои посты запрещены, только комментарий в маркетинг-треде по понедельникам (g01/g05 туда). Egenföretagare — реклама только в рекламном треде 1 раз в месяц (дата = номер месяца, напр. 11/11). Bygg och renovering 168K и Bygg och Renovering 13K — реклама запрещена.
