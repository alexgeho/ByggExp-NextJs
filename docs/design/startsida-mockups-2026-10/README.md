# Startsida byggexp.se — mockups (2026-10-10/11)

Canvas (claude.ai): https://claude.ai/artifact/T1i1XP5UuNfLrD8W9nFe8S
Varför: utskicket gav 0 registreringar (se docs/worklog.md 2026-10-10 Analys) → ny startsida: folk + «Kom igång gratis» + «från 299 kr/mån för hela företaget».

## Hela sidor
- A-foto-hero — mörk fotohero → 80 % → priser → kalkylator → 3 funktioner → omdömen → slut-CTA
- B-ljus — ljus split (foto + app) → 80 %-band → priser med användarräknare → funktioner i rader
- C-pris-forst — kalkylator i hero (fungerar i HTML), 80 % + 60 % kvar. Agentens rekommendation.

## Bara hero (dator + mobil + folk)
- **Hero-2 = ÄGARENS VAL (2026-10-11)**: ljus centrerad, enheter helt synliga, prisrad (ägarens val, en rad): «299 kr/mån – offerter, fakturor, löner, kvitton, … + 69 kr per arbetare – tidrapport, planering, närvaro, egenkontroll, …». OBS: stäm av mot /priser (idag 69 kr bara i 690-paketet, egenkontroll = eget paket) före live
- Hero-1 mörk, foto höger + enheter över · Hero-3 fotobakgrund · Hero-4 delad 50/50

## Filer
- *.html öppnas direkt i webbläsaren (bilder i img/), *.webp = skärmdumpar
- canvas-src/ = källfiler för canvasen (.dc.html + canvas.json)

## Regler
- Ägarens siffror 80 % och 60 % ska vara kvar. Inga konkurrentnamn. Omdömen = platshållare tills riktiga citat finns.
- Priser från src/components/Pricing/Pricing.tsx (299 / 690+69 / 990+119 per användare över 10).

## Nästa
1. Hero = Hero-2 (vald). Helsida under hero: inte vald än (A/B/C).
2. Bygg på stage → ägarens «ok» → live. Kräver riktig registrering (knapp → konto), generate_lead på demoformuläret, en GA-tagg.

## Status 2026-10-11 kväll
Byggd i koden på grenen `ny-startsida` (testsida /sv/ny-startsida, ?v=dark | ?v=dark-center). Ägaren behåller variant 3 (dark) och 4 (dark-center). Se docs/worklog.md.
