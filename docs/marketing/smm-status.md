# ByggExp SMM — статус и следующий шаг (handoff для агента)

Обновлено: 2026-10-19 (вечер). Копия: OneDrive-Personal/ByggExp-SMM/smm-status.md
Агент: прочитай этот файл целиком и design-assets/social/DESIGN-SYSTEM-SMM.md (правила визуала: правка → правило → дизайн), потом делай «▶ СЛЕДУЮЩИЙ ШАГ».

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
