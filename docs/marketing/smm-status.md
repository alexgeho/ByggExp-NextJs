# ByggExp SMM — статус и следующий шаг (handoff для агента)

Обновлено: 2026-10-19 (вечер). Копия: OneDrive-Personal/ByggExp-SMM/smm-status.md
Агент: прочитай этот файл целиком, потом делай «▶ СЛЕДУЮЩИЙ ШАГ».

## ▶ СЛЕДУЮЩИЙ ШАГ
1. iOS-приложение в симуляторе: дождаться/повторить сборку (см. «Видео → симулятор»), установить, открыть. Владелец входит в demo@byggexp.se сам (пароль агенту вводить нельзя).
2. Записать живой экран (нужно: Системные настройки → Запись экрана → Visual Studio Code ВКЛ; проверка: `screencapture -x /tmp/t.png` без ошибки). Если нет доступа — монтировать из скриншотов (как сейчас).
3. Перемонтировать видео GPS: плавный зум «как камера» (наезд к кнопке/колонке/меню → отъезд), без дёрганья (subpixel, Image.transform AFFINE вместо int-resize), 16:9 + 9:16, экраны целиком на общем плане.
4. После «ок» владельца — выложить: YouTube (канал ByggExp), Reels на FB-странице.
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

## Правила (не нарушать)
- Только проверенные факты продукта: docs/seo/product-facts-verified.md (нет Fortnox API, offline, авто-OB).
- Без выдуманных отзывов/кейсов/числа клиентов. Ссылки с UTM. Шведский язык.
- Публикация/рассылка от имени владельца — только по его «да».
