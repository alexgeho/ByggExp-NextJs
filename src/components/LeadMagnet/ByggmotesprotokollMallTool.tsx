import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free construction-meeting minutes (byggmötesprotokoll) template. Follows the
// fixed agenda from the blog article "byggmotesprotokoll-mall": formalia,
// närvaro, föregående protokoll, ekonomi, tidplan, ÄTA, hinder, KMA, kvalitet,
// beslut med ansvarig och nästa möte. Header + agenda fields → PDF/Excel.
const CONFIG: MallConfig = {
  pdfHeading: 'Byggmötesprotokoll',
  subtitle:
    'Fyll i protokollet enligt en fast dagordning – ekonomi, tidplan, ÄTA, hinder, KMA och kvalitet – med beslut och ansvarig per punkt, och ladda ner som PDF eller Excel. Klicka på "Fyll i exempel" för att se ett ifyllt protokoll.',
  filePrefix: 'byggmotesprotokoll',
  stampField: 'meetingNo',
  signatures: ['Protokollförare', 'Justeras av'],
  instantDownload: {
    label: 'Ladda ner tom byggmötesprotokoll-mall',
    note: 'Tom mall med dagordningen – skriv ut eller fyll i digitalt.',
  },
  fields: [
    { name: 'project', label: 'Projekt', placeholder: 'T.ex. Nybyggnad flerbostadshus, Bäckvägen 12' },
    { name: 'meetingNo', label: 'Mötesnummer', placeholder: 'T.ex. BM 4' },
    { name: 'date', label: 'Datum', type: 'date' },
    { name: 'place', label: 'Tid och plats', placeholder: 'T.ex. kl. 09.00, byggbodens mötesrum' },
    { name: 'attendees', label: 'Närvarande (namn, part, roll)', type: 'textarea', placeholder: 'Byggherre, entreprenör, projektledare, UE …' },
    { name: 'previous', label: 'Föregående protokoll', type: 'textarea', placeholder: 'Justering och eventuella invändningar mot förra protokollet' },
    { name: 'economy', label: 'Ekonomi', type: 'textarea', placeholder: 'Fakturering, betalningar, prognos mot budget' },
    { name: 'schedule', label: 'Tidplan', type: 'textarea', placeholder: 'Status, avvikelser och åtgärder' },
    { name: 'ata', label: 'ÄTA-arbeten', type: 'textarea', placeholder: 'Beställda, pågående och begärda ändringar och tillägg' },
    { name: 'hinder', label: 'Hinder och förseningar', type: 'textarea', placeholder: 'Anmälda hinder och konsekvenser för tidplanen' },
    { name: 'kma', label: 'Arbetsmiljö och KMA', type: 'textarea', placeholder: 'Kvalitet, miljö och arbetsmiljö – skyddsrond, tillbud' },
    { name: 'quality', label: 'Kvalitet och besiktningar', type: 'textarea', placeholder: 'Egenkontroller, avvikelser, kommande besiktningar' },
    { name: 'decisions', label: 'Beslut och åtgärder (vad – ansvarig – klart till)', type: 'textarea', placeholder: 'En rad per beslut: vad som ska göras, vem, när' },
    { name: 'next', label: 'Nästa möte', placeholder: 'Datum, tid och plats' },
  ],
  example: {
    project: 'Nybyggnad flerbostadshus, Bäckvägen 12',
    meetingNo: 'BM 4',
    place: 'kl. 09.00, byggbodens mötesrum',
    attendees:
      'Anna Berg (byggherre, projektledare), Erik Lund (entreprenör, platschef), Sara Ek (UE el), Johan Holm (UE VVS).',
    previous: 'Protokoll BM 3 justerat utan invändningar.',
    economy: 'Faktura 3 enligt betalplan skickad. Prognos oförändrad mot budget.',
    schedule: 'Stomme plan 3 klar enligt tidplan. Fasadarbeten 1 vecka sena p.g.a. leverans – åtgärd: omdisponering av lag.',
    ata: 'ÄTA 5 (extra eluttag kök) beställd skriftligt. ÄTA 6 (byte golvmaterial) begärd – pris lämnas till BM 5.',
    hinder: 'Entreprenören har skriftligen anmält hinder 2026-09-10: bygghandlingar för trapphus ej levererade av beställaren.',
    kma: 'Skyddsrond utförd v. 37, två brister åtgärdade. Inga tillbud sedan förra mötet.',
    quality: 'Egenkontroller tätskikt klara för lgh 1101–1104. Förbesiktning planeras v. 42.',
    decisions:
      '1) Pris för ÄTA 6 – Erik Lund – till BM 5. 2) Reviderad tidplan fasad – Erik Lund – 2026-09-25. 3) Kallelse förbesiktning – Anna Berg – v. 40.',
    next: 'BM 5, två veckor senare, kl. 09.00, byggboden',
  },
};

export default function ByggmotesprotokollMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
