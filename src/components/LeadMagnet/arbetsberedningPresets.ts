// Ready-made arbetsberedningar per work task. Moments follow the AFS 2023:13
// categories that need special measures (schakt, lyft, rivning, arbete vid
// trafik) plus what crews ask for in practice (ställning, takarbete/fall,
// heta arbeten). Text is short, common site practice — not legal requirements
// beyond what the research verified (inventering av farliga ämnen före rivning,
// kompetent person vid schakt/rivning, ställningsplan, TA-plan).

export type RiskFlag = 'fall' | 'lyft' | 'brand' | 'kemi' | 'schakt' | 'trafik';

export const RISK_FLAGS: { id: RiskFlag; label: string }[] = [
  { id: 'fall', label: 'Fallrisk' },
  { id: 'lyft', label: 'Tunga lyft' },
  { id: 'brand', label: 'Brandfara / heta arbeten' },
  { id: 'kemi', label: 'Farliga ämnen' },
  { id: 'schakt', label: 'Schakt / ras' },
  { id: 'trafik', label: 'Trafik' },
];

export type ArbetsberedningPreset = {
  id: string;
  /** Chip label. */
  name: string;
  /** Arbetsmoment (title) placeholder. */
  moment: string;
  byggdel: string;
  krav: string;
  underlag: string;
  utforare: string;
  flags: RiskFlag[];
  steps: string[];
  risks: { risk: string; action: string }[];
  checks: string[];
};

export const ARBETSBEREDNING_PRESETS: ArbetsberedningPreset[] = [
  {
    id: 'stallning',
    name: 'Ställning',
    moment: 'Montage av fasadställning',
    byggdel: 'Fasad',
    krav: 'Ställningsplan, lastklass och förankring enligt leverantörens anvisning',
    underlag: 'Ställningsplan, fasadritning, monteringsanvisning',
    utforare: 'Ställningsbyggare med utbildning för ställningstypen',
    flags: ['fall', 'lyft'],
    steps: [
      'Gå igenom ställningsplan och monteringsanvisning med laget',
      'Kontrollera underlagets bärighet och avstånd till elledningar',
      'Spärra av arbetsområdet och planera materialtransporten',
      'Lägg ut bottenplattor och montera första bomlaget i våg',
      'Bygg lag för lag med förankring och skyddsräcke direkt',
      'Montera tillträdesled och sparkbräda',
      'Kontrollera ställningen och sätt upp skylt innan den används',
    ],
    risks: [
      { risk: 'Fall från höjd vid montage', action: 'Räcke monteras i förväg, personligt fallskydd där räcke saknas' },
      { risk: 'Fallande material', action: 'Avspärrning nedanför, sparkbräda, inga lösa föremål på bomlag' },
      { risk: 'Ställningen välter eller sjunker', action: 'Bärande underlag, bottenplattor, förankring enligt plan' },
      { risk: 'Tunga lyft av ställningsdelar', action: 'Hissa material, bär två och två' },
      { risk: 'Kontakt med elledning', action: 'Kontrollera avstånd, kontakta nätägaren vid behov' },
    ],
    checks: [
      'Underlag och bottenplattor',
      'Förankring enligt ställningsplan',
      'Skyddsräcke och sparkbräda på alla arbetsplan',
      'Tillträdesled monterad',
      'Skylt med lastklass och kontrolldatum',
    ],
  },
  {
    id: 'rivning',
    name: 'Rivning',
    moment: 'Rivning av innerväggar och undertak',
    byggdel: 'Invändigt',
    krav: 'Inventering av farliga ämnen före start, bärande delar enligt konstruktör',
    underlag: 'Miljöinventering, rivningsplan, ritning med bärande delar',
    utforare: 'Rivningslag, arbetet leds av kompetent person',
    flags: ['kemi', 'lyft'],
    steps: [
      'Gå igenom miljöinventering och rivningsplan med laget',
      'Koppla bort och märk el, vatten och ventilation',
      'Skydda kvarvarande ytor och spärra av området',
      'Låt behörig firma sanera farliga ämnen (t.ex. asbest, PCB) först',
      'Riv uppifrån och ner, icke bärande delar först',
      'Sortera rivningsavfallet direkt per fraktion',
      'Städa och kontrollera att inget bärande påverkats',
    ],
    risks: [
      { risk: 'Damm och kvartsdamm', action: 'Dammsugare med HEPA-filter, vattenbegjutning, andningsskydd' },
      { risk: 'Dolda installationer (el, rör)', action: 'Bortkoppling och kontroll före rivning' },
      { risk: 'Oväntade farliga ämnen', action: 'Stoppa arbetet, kontakta arbetsledningen, ta prov' },
      { risk: 'Ras av konstruktion', action: 'Följ rivningsordningen, stämpa vid behov' },
      { risk: 'Buller och vibrationer', action: 'Hörselskydd, vibrationsdämpade verktyg, byt arbetsuppgift' },
    ],
    checks: [
      'Miljöinventering genomgången',
      'Installationer bortkopplade',
      'Farliga ämnen sanerade',
      'Avfall sorterat per fraktion',
      'Kvarvarande konstruktion oskadd',
    ],
  },
  {
    id: 'takarbete',
    name: 'Takarbete',
    moment: 'Byte av takbeläggning',
    byggdel: 'Yttertak',
    krav: 'Skydd mot fall vid takfot och öppningar',
    underlag: 'Takritning, monteringsanvisning för takbeläggning',
    utforare: 'Taklag med utbildning i fallskydd',
    flags: ['fall', 'lyft'],
    steps: [
      'Gå igenom takets lutning, bärighet och skyddsanordningar',
      'Montera skyddsräcke vid takfot och skydd över öppningar',
      'Ordna säker tillträdesled och hissning av material',
      'Riv gammal beläggning i etapper, täck öppet tak vid regn',
      'Lägg ny beläggning enligt monteringsanvisningen',
      'Montera plåtdetaljer och tätningar vid genomföringar',
      'Städa taket, ta ner spill och kontrollera tätningen',
    ],
    risks: [
      { risk: 'Fall från takfot eller genom öppning', action: 'Skyddsräcke, täckta öppningar, sele med förankring där räcke saknas' },
      { risk: 'Halt tak (fukt, frost)', action: 'Inget arbete vid is eller frost, glidskydd' },
      { risk: 'Fallande material mot mark', action: 'Avspärrning, skyddstak vid entréer' },
      { risk: 'Tunga lyft upp på taket', action: 'Kran eller hiss för material' },
      { risk: 'Stark vind', action: 'Säkra lösa skivor, avbryt vid stark vind' },
    ],
    checks: [
      'Skyddsräcke och öppningsskydd monterade',
      'Underlaget torrt och rent före läggning',
      'Överlapp och infästning enligt anvisning',
      'Genomföringar tätade',
      'Takavvattning fungerar',
    ],
  },
  {
    id: 'schakt',
    name: 'Schakt',
    moment: 'Schakt för ledningsdragning',
    byggdel: 'Mark',
    krav: 'Släntlutning eller stödkonstruktion enligt geoteknisk bedömning',
    underlag: 'Ledningsanvisning, geoteknisk utredning, schaktplan',
    utforare: 'Maskinförare och rörläggare, arbetet leds av kompetent person',
    flags: ['schakt', 'lyft'],
    steps: [
      'Beställ ledningsanvisning och märk ut befintliga ledningar',
      'Spärra av schaktområdet och sätt räcke vid schaktkanten',
      'Handschakta nära ledningar',
      'Schakta med släntlutning eller stödkonstruktion enligt plan',
      'Lägg massor och ställ maskiner på säkert avstånd från kanten',
      'Ordna säker nedstigning med stege eller trappa',
      'Återfyll och packa lagervis, ta bort avspärrningen',
    ],
    risks: [
      { risk: 'Ras av schaktvägg', action: 'Släntlutning eller stödkonstruktion, ingen i schaktet utan skydd' },
      { risk: 'Skada på ledningar (el, gas)', action: 'Ledningsanvisning, handschakt nära ledning' },
      { risk: 'Fall ner i schaktet', action: 'Avspärrning och räcke vid schaktkanten' },
      { risk: 'Påkörning av maskin', action: 'Ögonkontakt med föraren, varselkläder, ingen inom svängradien' },
      { risk: 'Vatten i schaktet', action: 'Länspump, bevaka vädret' },
    ],
    checks: [
      'Ledningar utmärkta',
      'Släntlutning eller stöd enligt plan',
      'Avspärrning vid schaktkant',
      'Schaktbotten kontrollerad',
      'Återfyllning packad lagervis',
    ],
  },
  {
    id: 'lyft',
    name: 'Lyft / elementmontage',
    moment: 'Montage av betongelement med mobilkran',
    byggdel: 'Stomme',
    krav: 'Lyftplan och montageanvisning, kontrollerade lyftredskap',
    underlag: 'Montageritning, lyftplan, elementförteckning',
    utforare: 'Montagelag, kranförare med behörighet, utsedd signalman',
    flags: ['lyft', 'fall'],
    steps: [
      'Gå igenom lyftplan och montageordning med kranförare och lag',
      'Kontrollera kranens uppställning och markens bärighet',
      'Kontrollera leverans och elementmärkning mot montageplanen',
      'Spärra av lyftområdet',
      'Lyft med styrlinor, ingen under hängande last',
      'Rikta, stötta och säkra elementet innan lyftredskapet kopplas loss',
      'Kontrollera lod och infästning före nästa element',
    ],
    risks: [
      { risk: 'Fallande eller svängande last', action: 'Avspärrning, styrlinor, ingen under lasten' },
      { risk: 'Fall från bjälklagskant', action: 'Skyddsräcke eller personligt fallskydd' },
      { risk: 'Klämrisk vid inriktning', action: 'Handskar, tydliga signaler via signalman' },
      { risk: 'Kranen välter', action: 'Kontrollerad bärighet, stödben på plattor' },
      { risk: 'Stark vind', action: 'Montagestopp vid vind över lyftplanens gräns' },
    ],
    checks: [
      'Lyftredskap märkta och kontrollerade',
      'Element enligt montageplan',
      'Lod och läge kontrollerat',
      'Stämp och infästning enligt konstruktör',
      'Upplag och fogar rengjorda',
    ],
  },
  {
    id: 'heta-arbeten',
    name: 'Heta arbeten',
    moment: 'Heta arbeten – svetsning och skärning',
    byggdel: 'Yttertak',
    krav: 'Tillstånd för heta arbeten från tillståndsansvarig',
    underlag: 'Tillstånd för heta arbeten, försäkringsbolagets brandskyddsvillkor',
    utforare: 'Utförare med certifikat för heta arbeten, utsedd brandvakt',
    flags: ['brand'],
    steps: [
      'Gå igenom tillståndet med tillståndsansvarig, brandvakt och utförare',
      'Ta bort eller skydda brännbart material runt arbetsplatsen',
      'Täta öppningar och genomföringar mot dolda utrymmen',
      'Ställ fram släckutrustning och kontrollera att den fungerar',
      'Utför arbetet med brandvakt på plats',
      'Efterbevaka arbetsplatsen enligt tillståndet',
      'Rapportera avslutat arbete till tillståndsansvarig',
    ],
    risks: [
      { risk: 'Brand i brännbart material', action: 'Rensa eller skydda, brandvakt, släckutrustning nära' },
      { risk: 'Glöd in i dolda utrymmen', action: 'Täta öppningar, efterbevakning' },
      { risk: 'Brännskador', action: 'Skyddskläder, handskar, visir' },
      { risk: 'Rök och svetsgaser', action: 'Ventilation eller punktutsug, andningsskydd' },
      { risk: 'Gasflaskor', action: 'Förvaras stående och säkrade, stängs efter arbetet' },
    ],
    checks: [
      'Tillstånd utfärdat och signerat',
      'Brännbart material borttaget eller skyddat',
      'Släckutrustning på plats',
      'Brandvakt utsedd',
      'Efterbevakning genomförd',
    ],
  },
  {
    id: 'trafik',
    name: 'Trafik nära väg',
    moment: 'Ledningsarbete i körbana',
    byggdel: 'Gata',
    krav: 'Godkänd TA-plan (trafikanordningsplan)',
    underlag: 'TA-plan, ledningsanvisning, schaktplan',
    utforare: 'Arbetslag med utbildning för arbete på väg',
    flags: ['trafik', 'schakt'],
    steps: [
      'Gå igenom TA-planen med laget',
      'Ställ ut skyltar och avstängning i ordning enligt TA-planen',
      'Ordna skydd mot fordon, t.ex. TMA eller barriär',
      'Led gång- och cykeltrafik säkert förbi arbetsområdet',
      'Arbeta bara inom det avstängda området',
      'Kontrollera avstängningen under dagen',
      'Ta bort skyltar och avstängning i omvänd ordning',
    ],
    risks: [
      { risk: 'Påkörning av passerande fordon', action: 'Avstängning enligt TA-plan, TMA eller barriär, varselkläder' },
      { risk: 'Backande maskiner', action: 'Backvakt eller backkamera, ingen bakom maskinen' },
      { risk: 'Gående och cyklister i arbetsområdet', action: 'Tydlig och tillgänglig förbiledning' },
      { risk: 'Mörker och dålig sikt', action: 'Belysning, varselkläder' },
      { risk: 'Buller och avgaser', action: 'Hörselskydd, ingen tomgångskörning' },
    ],
    checks: [
      'TA-plan godkänd och på plats',
      'Skyltning enligt TA-plan',
      'Förbiledning för gående och cyklister',
      'Avstängning kontrollerad under dagen',
      'Skyltar borttagna efter arbetet',
    ],
  },
];
