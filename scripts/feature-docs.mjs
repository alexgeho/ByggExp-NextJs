// Draft "Så gör du i webbadmin" + "Så gör du i appen" content for the 12 feature
// pages (CMS articles). Grounded in each page's existing "Så kommer du igång"
// steps — reorganised into a clear admin/app split and lightly expanded.
//
// DRAFT — the site owner reviews/corrects wording against the real UI. Edit the
// arrays below, then re-run scripts/push-feature-docs.mjs to publish.
//
// Each entry: slug -> { webbadmin: string[], appen: string[] }.
// The push script wraps these in <h2>+<ol> and injects them between
// <!-- FEATDOCS:START --> / <!-- FEATDOCS:END --> markers (idempotent).

export const FEATURE_DOCS = {
  'skapa-offert-i-byggexp': {
    webbadmin: [
      'Gå till <strong>Offerter</strong> och klicka på <strong>Ny offert</strong>.',
      'Välj kund och koppla offerten till rätt projekt.',
      'Lägg till rader – arbete, material och maskiner – med beskrivning, antal, á-pris och enhet.',
      'Ange momssats (vanligtvis 25 %) och markera om ROT-avdrag ska gälla. ByggExp räknar automatiskt ut kundens del.',
      'Skriv en tydlig introtext med giltighetstid, betalningsvillkor och vad som ingår.',
      'Förhandsgranska och tryck <strong>Skicka</strong> – kunden får offerten via e-post med er logotyp.',
    ],
    appen: [
      'I mobilappen ser du dina skickade offerter och deras status.',
      'Följ upp direkt från bygget och påminn kunden vid behov.',
    ],
    images: [
      { src: '/features-content/skapa-offert-1.webp', alt: 'ByggExp-appen: skapa en ny offert med kund, titel, rader och pris' },
      { src: '/features-content/skapa-offert-2.webp', alt: 'ByggExp-appen: lista över offerter med status, t.ex. utkast' },
    ],
    imagesCaption: 'Så ser det ut i appen: skapa offerten och följ dess status direkt i mobilen.',
  },
  'fakturera-fran-byggexp': {
    webbadmin: [
      'Öppna projektet och gå till fliken <strong>Faktura</strong>, klicka på <strong>Ny faktura</strong>.',
      'Välj underlag som ska med – loggad tid, material och ÄTA-rader. ByggExp föreslår automatiskt det som inte fakturerats.',
      'Justera rader vid behov, sätt moms och eventuellt ROT-avdrag och kontrollera totalen.',
      'Ange förfallodatum och betalningsvillkor, till exempel 30 dagar.',
      'Förhandsgranska och tryck <strong>Skicka</strong> – fakturan går till kunden med era uppgifter och OCR-nummer.',
    ],
    appen: [
      'I mobilappen ser du direkt vilka fakturor som är obetalda och betalda.',
      'Följ upp betalningar löpande, även när du är ute på bygget.',
    ],
  },
  'loneunderlag-for-byggforetag': {
    webbadmin: [
      'Gå till <strong>Löneunderlag</strong> och välj löneperiod, till exempel en månad.',
      'Systemet summerar timmar per medarbetare och räknar ut OB och övertid enligt era regler.',
      'Granska raderna, justera vid behov och godkänn eventuella avvikelser.',
      'Lås perioden när allt stämmer så att inga fler ändringar smyger sig in.',
      'Exportera underlaget som fil till ert lönesystem eller er lönebyrå.',
    ],
    appen: [
      'Teamet stämplar in och ut i appen så att timmarna registreras automatiskt under perioden.',
      'Var och en ser sina egna registrerade timmar i mobilen.',
    ],
  },
  'projektekonomi-och-lonsamhet': {
    webbadmin: [
      'Öppna projektet och lägg in en budget – som totalsumma eller uppdelat på arbete och material.',
      'Gå till fliken <strong>Ekonomi</strong> och se budget mot utfall och hur mycket som återstår.',
      'Granska kostnaden för timmar och material samt den beräknade marginalen i kronor och procent.',
      'Agera på projekt som närmar sig budgettaket – justera bemanning, ÄTA-fakturera eller stäm av med kunden.',
    ],
    appen: [
      'Teamet loggar tid och registrerar material och kvitton löpande så att siffrorna alltid är färska.',
      'Som ledare får du en snabb ekonomisk överblick per projekt i mobilen.',
    ],
  },
  'automatisk-tidrapportering-och-export': {
    webbadmin: [
      'Skapa projektet och lägg till de medarbetare som ska arbeta där.',
      'Gå till <strong>Tider</strong>, välj period och projekt och granska de registrerade passen.',
      'Klicka på <strong>Exportera</strong> för att ladda ner en färdig tidsredovisning till lön eller faktura.',
    ],
    appen: [
      'Teamet laddar ner ByggExp-appen och loggar in på sina konton.',
      'På bygget checkar var och en in – GPS-positionen bekräftar att de är på plats och tiden börjar räknas.',
      'Vid arbetsdagens slut checkar de ut så att passet stängs och timmarna bokförs på projektet.',
    ],
  },
  'narvaro-och-incheckning-pa-bygget': {
    webbadmin: [
      'Lägg till medarbetarna på projektet så de får tillgång till bygget.',
      'Öppna närvaroöversikten och se vilka som är på plats i realtid.',
      'Använd översikten som underlag till personalliggaren och uppföljning.',
    ],
    appen: [
      'Medarbetaren öppnar appen vid ankomst och trycker <strong>Checka in</strong> – GPS bekräftar arbetsplatsen.',
      'När arbetsdagen är slut checkar var och en ut i appen.',
    ],
  },
  'hantera-uppgifter-i-byggprojekt': {
    webbadmin: [
      'Öppna projektet och gå till fliken <strong>Uppgifter</strong>, klicka på <strong>Ny uppgift</strong>.',
      'Skriv en tydlig titel och en kort beskrivning.',
      'Välj ansvarig medarbetare och sätt en deadline.',
      'Följ hela projektets uppgiftslista och se vad som återstår.',
    ],
    appen: [
      'Den ansvarige ser uppgiften direkt i appen på sin telefon.',
      'Ute på bygget uppdaterar medarbetaren status till pågående eller klar.',
    ],
  },
  'paminnelser-uppgifter-och-deadlines': {
    webbadmin: [
      'Följ projektets uppgifter och deadlines i sitt sammanhang och stäm av vad som är gjort.',
    ],
    appen: [
      'Gå till <strong>Påminnelser</strong> eller <strong>Att göra</strong> och tryck på <strong>Ny påminnelse</strong>.',
      'Skriv vad det gäller, till exempel "Beställ gips till lägenhet 4".',
      'Välj datum och tid för när du vill bli påmind och sätt vid behov en deadline.',
      'Koppla påminnelsen till ett projekt så hittar du den i sitt sammanhang.',
      'Ställ in upprepning om det är återkommande, som en månadsfaktura.',
      'Spara – du får en notis i mobilen när det är dags och bockar av när det är klart.',
    ],
  },
  'dagsplanering-och-planeringsmoten': {
    webbadmin: [
      'Öppna planeringsvyn för den vecka du vill planera.',
      'Skapa en post per uppgift: välj projekt, plats och vilka personer som ska dit.',
      'Lägg till en kort instruktion, till exempel "börja med rivning i kök, material ligger på lastkajen".',
      'Dela planen så den blir synlig i appen för alla berörda.',
      'Kör planeringsmötet: gå igenom dagen på skärmen, stäm av frågor och justera direkt.',
    ],
    appen: [
      'Under dagen ser teamet sin plan i appen.',
      'Ändrar du något i webbadmin uppdateras planen direkt i mobilen.',
    ],
  },
  'dokumentera-med-foton-pa-bygget': {
    webbadmin: [
      'Följ upp fotoflödet per projekt.',
      'Ladda ner eller dela bilderna med kund.',
    ],
    appen: [
      'Öppna appen och gå in på det projekt du jobbar med.',
      'Tryck på kameraknappen och ta bilden direkt, eller välj en bild från kamerarullen.',
      'Bilden taggas automatiskt till projektet – lägg gärna till en kort kommentar, till exempel "fuktspärr innan gjutning".',
      'Spara – fotot laddas upp och blir synligt för alla i teamet med rätt behörighet.',
    ],
  },
  'fota-kvitton-och-hantera-utlagg': {
    webbadmin: [
      'Granska samlade utlägg per projekt eller period.',
      'Exportera utläggen till bokföringen.',
    ],
    appen: [
      'Öppna appen och gå till <strong>Kvitton</strong> eller <strong>Utlägg</strong>, tryck på <strong>Nytt kvitto</strong> och fota kvittot så att belopp och datum syns tydligt.',
      'Välj vilket projekt utlägget gäller och en kategori (material, drivmedel, verktyg m.m.).',
      'Fyll i belopp och moms och lägg till en kort notering om vad inköpet avser.',
      'Spara – kvittot laddas upp och blir synligt för administratören i webbadmin.',
    ],
  },
  'hantera-verktyg-och-utrustning': {
    webbadmin: [
      'Öppna verktygsregistret och lägg till ett verktyg: namn, kategori, eventuellt serienummer och ett foto.',
      'Ange var det hör hemma – förråd, servicebil eller ett specifikt projekt.',
      'Koppla verktyget till den person eller plats som har det just nu.',
      'När en maskin flyttas uppdaterar du platsen så att registret alltid stämmer.',
    ],
    appen: [
      'Personalen öppnar appen på bygget och ser vilka verktyg som finns och vem som ansvarar.',
      'Alla med behörighet ser aktuell plats och ansvarig direkt i mobilen.',
    ],
  },
};
