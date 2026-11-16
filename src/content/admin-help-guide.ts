// Help guide of the admin panel (Hjälp page), Swedish. Source of truth:
// byggexp-admin src/features/help/HelpPage.jsx — regenerate when that page changes.
export const ADMIN_HELP_GUIDE = `KONTORET (webbpanelen admin.byggexp.se):

Ställ in ditt företag (skärm: /company/profile)
- Öppna Profil och fyll i företagsnamn, org.nummer och adress — de visas på varje offert och faktura.
- Lägg till din logotyp och ange moms- och ROT-standarder så att dokumenten blir rätt från början.

Lägg till ditt team & roller (skärm: /company/users)
- Under Användare bjuder du in varje anställd med namn och e-post. De loggar in i mobilappen med den e-posten.
- Välj en roll: Hantverkare (registrerar pass och foton), Projektadmin (driver ett projekt) eller Företagsadmin (full åtkomst).
- Du kan uppgradera någon till Företagsadmin senare från deras profil.

Skapa och driv projekt (skärm: /company/projects)
- Skapa ett projekt och tilldela sedan de hantverkare som hör till det.
- Ange arbetsplatsens läge och arbetstider — pass registreras mot detta och timmar jämförs med planen.
- Allt kopplas till projektet: pass, uppgifter, foton, ritningar, dagbok och kostnader.

Tid & arbetspass (skärm: /company/shifts)
- Hantverkare startar och avslutar pass i mobilappen; platsen bekräftar att de är på arbetsplatsen.
- Öppna Arbetspass för att se vem som jobbar just nu, och timrutnätet för att jämföra planerade mot faktiska timmar.
- Justera eller korrigera timmar i rutnätet innan du exporterar dem till lön.

Uppgifter & påminnelser (skärm: /company/my-work)
- Tilldela en uppgift till ett projekt eller en person, med förfallodatum och prioritet.
- Ställ in en påminnelse så att mottagaren puffas — upprepa tills den bekräftas klar.
- Använd Upprepa för återkommande jobb (veckostädning, månadskontroller). Mitt arbete är din dagliga att-göra-vy.

Offerter & fakturor (skärm: /company/invoicing/offers)
- Lägg till en kund och skapa sedan en offert — AI:n kan skapa prissatta rader från en kort beskrivning.
- Omvandla en accepterad offert till en faktura. Tillämpa ROT-avdrag för privatkunder.
- Skicka som PDF via e-post. Rättelser görs som kreditfaktura — skickade fakturor ändras inte.

Inköp, utlägg & lön (skärm: /company/invoicing/supplier-invoices)
- Registrera inköpsfakturor och fotografera kvitton — skanningen läser av beloppen åt dig.
- Godkänn det ditt team skickar in från Mitt arbete-inkorgen.
- Kör lön från registrerade timmar: brutto → skatt → netto, med lönespecifikationer per anställd.

PERSONALEN (mobilappen):

Logga in i appen
- Ladda ner ByggExp-appen och logga in med den e-post ditt företag bjöd in dig med.
- Om du inte kan logga in, be din admin kontrollera att ditt konto är tillagt och godkänt.

Starta & avsluta ett pass
- På plats, öppna projektet och starta ditt pass. Tillåt plats så registreras du som närvarande.
- Avsluta passet när du går. Dina timmar skickas till kontoret automatiskt.

Ladda upp foton
- Under ett pass, ta eller ladda upp foton av arbetet — de kopplas till projektet så kontoret ser dem.

Dina uppgifter
- Se uppgifterna som tilldelats dig och bocka av dem när de är klara.
- Om du får en påminnelse, bekräfta att uppgiften är klar så slutar den puffa dig.

Ansök om frånvaro
- Skicka en frånvaroansökan (semester, sjuk) från appen — din admin godkänner den.
`;
