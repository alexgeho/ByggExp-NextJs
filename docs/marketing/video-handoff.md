# ТЗ: видео ByggExp — продолжение на другом компьютере (2026-10-20)

Читать вместе с: design-assets/social/DESIGN-SYSTEM-SMM.md (правила S1–S14, обязательны), docs/marketing/smm-status.md, docs/marketing/youtube-upakovka.md, docs/seo/product-facts-verified.md.

## Цель
Видео для YouTube @ByggExp и соцсетей: подписчики → пользователи → клиенты. Сначала польза для зрителя (S13), продукт вторым.

## Что готово
| Видео | Файл (OneDrive ByggExp-SMM/video/out) | Генератор (репо design-assets/social/shorts/) |
|---|---|---|
| Трейлер канала 35 с (калькуляторы ROT, betong, faktura-mall → Prenumerera) | trailer-16x9.mp4 | trailer/rec.mjs (живая запись сайта, CDP screencast 2x) → trailer/make_trailer.py |
| Туториал «faktura в приложении» 1:42, SV | faktura-sv.mp4 | faktura/analyze.py → script_sv.json → voice_sv/ → make_video.py |
| Реклама 15 с | ad-faktura-15s.mp4 | faktura/make_ad.py |
| iPhone-мокап 16:9 | mockup-test.mp4 | onboarding-app/make_mockup.py |
Исходники: OneDrive ByggExp-SMM/video/src (faktura10.mp4 — запись Screen Studio из приложения, background.png — фон «волны»; на маке он лежал в ~/Documents/ByggExp/logos-banners/).

## Задачи (по порядку)
1. **Трейлер с админкой** (владелец: «в админке всё гораздо круче — показать её»). Структура 45–60 с: обещание → админка 4 сцены (Översikt: ekonomi/marginal · Planering/Bemanning · Arbetspass → attest · Fakturor: ny faktura med logotyp, moms, ROT → PDF) → коротко бесплатные калькуляторы (готовые клипы) → «Prenumerera». Голос Malin, субтитры на плашке, наезд камеры, 1x.
   - БЛОКЕР: данные демо-аккаунта Roger (admin.byggexp.se) грязные — пустые Planering/Bemanning, «Unknown», проект «20 euseфx», минусовые фактуры. Нужна чистая демо-компания: создаёт владелец (агент не создаёт аккаунты и не вводит пароли), затем агент наполняет её реалистичными данными (S11: timlön ≈230, будни, шведские имена/проекты) и записывает.
   - Запись: живой экран (screencapture -v -R по окну Chrome, нужна «Запись экрана» для терминала/VS Code) или Screen Studio владельцем по списку сцен. Скриншоты из Chrome-расширения слишком мелкие для наезда.
2. **EN-версия туториала faktura**: script_en.json + voice_en (Malin или EN-голос) → make_video.py <src> en <out>.
3. **Реклама 9:16** из faktura (make_ad.py, те же 1x-моменты).
4. **Музыка**: ключу ElevenLabs нужен доступ Music (сейчас только TTS+STT).
5. После «да» владельца — загрузка на YouTube: трейлер в Kanaltrailer, баннер covers/youtube-banner-value.png, описание и секции из youtube-upakovka.md.

## Правила (самое важное)
- Только реальные экраны; на общем плане экран целиком; камера без рывков (smootherstep, subpixel).
- Видео НИКОГДА не ускорять (S12): паузы вырезать, клипы 1x.
- Тапы — маленькие белые круги; субтитры на плашке navy и не поверх текста UI.
- Шведский без кириллицы; факты только из product-facts-verified.md; ссылки с UTM; никогда admin.byggexp.se в публичном тексте.
- Каждое число на экране объяснимо из видимых вводных (S8).
- Замечание владельца → сначала правило S-N в DESIGN-SYSTEM-SMM.md (сайт — R-N в DESIGN-SYSTEM.md), потом правка.
- Перед показом — агент-критик без контекста по кадрам (S9), показывать после «чисто».
- Публикация от имени владельца — только после его «да».

## Окружение на новом компьютере
- Репо: github ByggExp-NextJs, ветка main; коммитить и пушить готовое.
- Python 3 + Pillow + numpy + imageio-ffmpeg (`pip install pillow numpy imageio-ffmpeg`); ffmpeg: `python3 -c "import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())"`.
- Node + `npm i puppeteer-core` (в любой временной папке) для rec.mjs; Chrome по стандартному пути.
- ElevenLabs: ключ ELEVENLABS_API_KEY в .env.admin в корне репо (файл не в git — владелец копирует сам). Голос Malin voice_id zyfJspwEDo0sxPeFmtsn, model eleven_multilingual_v2, endpoint /v1/text-to-speech/{voice}/with-timestamps.
- Шрифты: SF Pro (/System/Library/Fonts/SFNS.ttf), Avenir Next — есть на любом Mac.
- Клипы трейлера (trailer/clips) не в git — пересоздать: `node trailer/rec.mjs <абс. путь>/design-assets/social/shorts/trailer/clips`.
- Пути в make_mockup.py / make_ad.py к background.png: положить файл в ~/Documents/ByggExp/logos-banners/ или поправить путь.
- Результаты: ~/Desktop/SMM и OneDrive ByggExp-SMM/video/out; статус — в docs/marketing/smm-status.md.
