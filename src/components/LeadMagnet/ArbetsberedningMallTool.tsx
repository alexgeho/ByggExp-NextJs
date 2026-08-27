import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free work-preparation (arbetsberedning) template. Before a critical or risky
// work task, the crew plans it: work steps, risks + protective measures, quality
// requirements, resources and environment. Header + planning fields → PDF/Excel.
const CONFIG: MallConfig = {
  pdfHeading: 'Arbetsberedning',
  subtitle:
    'Planera ett arbetsmoment steg för steg – arbetsgång, risker och skyddsåtgärder, kvalitetskrav och resurser – och ladda ner en färdig arbetsberedning som PDF eller Excel. Görs innan kritiska eller riskfyllda moment. Klicka på "Fyll i exempel".',
  filePrefix: 'arbetsberedning',
  stampField: 'project',
  signatures: ['Upprättad av', 'Datum'],
  fields: [
    { name: 'project', label: 'Projekt / arbetsplats', placeholder: 'T.ex. Nybyggnad flerbostadshus, Bäckvägen 12' },
    { name: 'activity', label: 'Arbetsmoment', placeholder: 'T.ex. Montage av prefabricerade betongelement' },
    { name: 'date', label: 'Datum', type: 'date' },
    { name: 'author', label: 'Upprättad av', placeholder: 'Namn / roll' },
    { name: 'participants', label: 'Deltagare / utförare', placeholder: 'Vilka utför momentet – lag, roller, krav på behörighet' },
    { name: 'steps', label: 'Arbetsgång (steg för steg)', type: 'textarea', placeholder: 'Beskriv momentet i ordning: förberedelser, utförande, avslut' },
    { name: 'risks', label: 'Risker och skyddsåtgärder', type: 'textarea', placeholder: 'T.ex. Klämrisk vid lyft – avspärrning, styrlinor, ingen under hängande last' },
    { name: 'quality', label: 'Kvalitet och kontroll', type: 'textarea', placeholder: 'Krav, toleranser och egenkontroll – hur säkras rätt utförande?' },
    { name: 'resources', label: 'Resurser (material, maskiner, verktyg)', type: 'textarea', placeholder: 'Vad behövs på plats – material, lyftutrustning, verktyg' },
    { name: 'environment', label: 'Miljö', type: 'textarea', placeholder: 'Avfall, farliga ämnen, buller, damm – hur hanteras det?' },
    { name: 'note', label: 'Genomgång / uppföljning', type: 'textarea', placeholder: 'När gås beredningen igenom med laget och hur följs den upp?' },
  ],
  example: {
    project: 'Nybyggnad flerbostadshus, Bäckvägen 12',
    activity: 'Montage av prefabricerade betongelement (väggar) plan 3',
    author: 'Arbetsledare montage',
    participants: 'Montagelag om 3 pers + kranförare med giltigt lyftkort. Signalman utsedd.',
    steps:
      '1) Kontrollera leverans och elementmärkning mot montageplan. 2) Spärra av riskområdet under och runt lyftet. 3) Lyft med rätt lyftok och styrlinor – aldrig person under hängande last. 4) Rikta, stötta och säkra elementet innan lyftok kopplas loss. 5) Kontrollera lod och infästning innan nästa element.',
    risks:
      'Fallande/hängande last – avspärrning, styrlinor, ingen under lasten. Fall från kant plan 3 – räcke/personlig fallskyddsutrustning. Klämrisk vid inriktning – handskar, tydlig kommunikation med kranförare via signalman. Vind – montagestopp vid hård vind enligt lyftplan.',
    quality:
      'Element rätt enligt montageplan, lod kontrollerat, stämp och infästning enligt konstruktörens anvisning. Egenkontroll fylls i per element.',
    resources:
      'Kran, certifierat lyftok, styrlinor, stämp/stöttor, monteringsverktyg, fallskyddsutrustning. Montageritning och lyftplan på plats.',
    environment: 'Emballage och spill sorteras direkt i behållare. Damm vid kapning minimeras. Buller inom tillåtna tider.',
    note: 'Arbetsberedningen gås igenom med hela laget vid morgonmötet före start och uppdateras om förhållandena ändras.',
  },
};

export default function ArbetsberedningMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
