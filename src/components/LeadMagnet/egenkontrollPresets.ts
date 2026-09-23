// Ready-made egenkontroll checklists — the "pick a trade and the checklist
// fills itself" feature. Content mirrors the ByggExp KMA starter templates
// (starterTemplates.js) so the free tool offers the same professional,
// standard-referenced control points the product ships with. sv-only.

export type PresetItem = {
  point: string;
  reference?: string;
  /** Group heading the point belongs to (rendered as a section row). */
  section?: string;
  /** How the point is checked (Boverket: "hur"), e.g. "Mätning", "Okulär". */
  method?: string;
  /** Unit for a measured value, e.g. "MΩ" — shows a Mätvärde field. */
  unit?: string;
  /** Requirement / limit to compare against, e.g. "≥ 1 MΩ". */
  requirement?: string;
};

export type PresetMetaField = { name: string; label: string; placeholder?: string };

export type EgenkontrollPreset = {
  id: string;
  name: string;
  category: string; // matches EgenkontrollTool CATEGORIES
  description: string;
  items: PresetItem[];
  /** Extra header fields printed on the PDF (company, register no., etc.). */
  meta?: PresetMetaField[];
  /** Signature lines at the bottom of the PDF (default: one "Underskrift ansvarig"). */
  signatures?: string[];
  /** Short note printed under the table (regulatory basis, how to use). */
  footnote?: string;
};

export const EGENKONTROLL_PRESETS: EgenkontrollPreset[] = [
  {
    id: 'el',
    name: 'Egenkontroll El',
    category: 'Kvalitet',
    description:
      'Kontroll av elinstallation före ibruktagning och vid överlämning, med mätprotokoll (ELSÄK-FS 2017:3, SS 436 40 00 del 6).',
    meta: [
      { name: 'company', label: 'Elinstallationsföretag / org.nr', placeholder: 'T.ex. Ditt El AB, 559000-0000' },
      { name: 'installer', label: 'Elinstallatör (ansvarig för egenkontrollprogrammet)', placeholder: 'Namn' },
      { name: 'site', label: 'Anläggning / del som kontrolleras', placeholder: 'T.ex. Lgh 1102, grupp 1–8, central C1' },
      { name: 'instrument', label: 'Mätinstrument (fabrikat, serienr, kalibrerat)', placeholder: 'T.ex. Metrel MI 3152, sn 12345, kal. 2026-03' },
    ],
    items: [
      // A — ELSÄK-FS 2017:3 3 kap. 10–11 §§: anläggningen ska vara säker innan den tas i bruk.
      { section: 'A. Före ibruktagning', point: 'Skyddsjord ansluten och fungerande', reference: 'ELSÄK-FS 2017:3' },
      { section: 'A. Före ibruktagning', point: 'Apparatlock, kapslingar och beröringsskydd på plats' },
      { section: 'A. Före ibruktagning', point: 'Inga enkelisolerade eller oisolerade ledare åtkomliga' },
      { section: 'A. Före ibruktagning', point: 'Efterkontroll: utsatta delar är inte spänningsförande' },
      // B — okulärbesiktning
      { section: 'B. Okulär kontroll', point: 'Utfört enligt handling/ritning (omfattning, placering)' },
      { section: 'B. Okulär kontroll', point: 'Ledare rätt dimensionerade och förlagda, rätt kabeltyp för miljön' },
      { section: 'B. Okulär kontroll', point: 'Skyddsledare identifierbara (gröngul) och rätt anslutna' },
      { section: 'B. Okulär kontroll', point: 'Överströmsskydd: märkström och karakteristik enligt gruppförteckning' },
      { section: 'B. Okulär kontroll', point: 'Kapslingsklass (IP) rätt för utrymmet, t.ex. våtrum och utomhus' },
      { section: 'B. Okulär kontroll', point: 'Dosor, uttag och apparater fastsatta, täta och hela' },
      { section: 'B. Okulär kontroll', point: 'Genomföringar brandtätade där ledningar passerar brandcellsgräns', reference: 'BBR' },
      { section: 'B. Okulär kontroll', point: 'Central och grupper märkta, gruppförteckning uppdaterad' },
      // C — provning och mätning (metoder: SS 436 40 00 utg. 4, del 6)
      { section: 'C. Provning och mätning', point: 'Skyddsledarens kontinuitet till jordskena (högsta värde)', unit: 'Ω', requirement: 'Kontinuitet, jämför mot beräknat', reference: 'SS 436 40 00 del 6' },
      { section: 'C. Provning och mätning', point: 'Kontinuitet i ledare (fas/neutral)', unit: 'Ω', requirement: 'Kontinuitet' },
      { section: 'C. Provning och mätning', point: 'Isolationsresistans, provspänning 500 V DC (lägsta värde)', unit: 'MΩ', requirement: '≥ 1 MΩ', reference: 'SS 436 40 00 del 6' },
      { section: 'C. Provning och mätning', point: 'Polaritet och fasföljd', requirement: 'Rätt' },
      { section: 'C. Provning och mätning', point: 'Spänningsnivå i uttag/anslutningspunkt', unit: 'V' },
      { section: 'C. Provning och mätning', point: 'Jordfelsbrytare: utlösningstid vid IΔn', unit: 'ms', requirement: '≤ 300 ms (30 mA)' },
      { section: 'C. Provning och mätning', point: 'Jordfelsbrytare: utlösningstid vid 5 × IΔn', unit: 'ms', requirement: '≤ 40 ms' },
      { section: 'C. Provning och mätning', point: 'Jordfelsbrytare: funktion med testknapp', requirement: 'Löser ut' },
      // D — överlämning, avvikelser (ELSÄK-FS 2017:3 3 kap. 11–13 §§)
      { section: 'D. Överlämning', point: 'Avvikelser åtgärdade och efterkontrollerade', reference: 'ELSÄK-FS 2017:3' },
      { section: 'D. Överlämning', point: 'Gruppförteckning, mätvärden och skötselinstruktion lämnade till beställaren' },
    ],
    signatures: ['Kontroll före ibruktagning – namn, datum', 'Kontroll vid överlämning – namn, datum'],
    footnote:
      'Egenkontroll enligt företagets egenkontrollprogram (elsäkerhetslagen, ELSÄK-FS 2017:3 3 kap. 10–13 §§). Mätmetoder enligt SS 436 40 00 utg. 4 del 6. Kravvärdena är vanliga riktvärden – kontrollera alltid mot projektets handlingar, standarden och skyddsanordningens data.',
  },
  {
    id: 'vvs',
    name: 'Egenkontroll VVS',
    category: 'Kvalitet',
    description:
      'Kontroll av tappvatten- och avloppsinstallation med provningsprotokoll, enligt branschreglerna Säker Vatteninstallation 2026:1.',
    meta: [
      { name: 'company', label: 'VVS-företag / org.nr', placeholder: 'T.ex. Ditt VVS AB, 559000-0000' },
      { name: 'installer', label: 'Montör (behörighet Säker Vatten)', placeholder: 'Namn, behörighetsnr' },
      { name: 'site', label: 'Objekt / del som kontrolleras', placeholder: 'T.ex. Lgh 1102, badrum och kök' },
      { name: 'rules', label: 'Branschregler (version)', placeholder: 'Säker Vatteninstallation 2026:1' },
    ],
    items: [
      // A — före inbyggnad: det som blir dolt ska kontrolleras innan det byggs in.
      { section: 'A. Före inbyggnad', point: 'Handlingar och ritningar aktuella, ändringar dokumenterade', method: 'Granskning', requirement: 'Bygghandlingar' },
      { section: 'A. Före inbyggnad', point: 'Rör, kopplingar och komponenter godkända för ändamålet', method: 'Dokumentgranskning', requirement: 'Säker Vatten, tillverkarens anvisning' },
      { section: 'A. Före inbyggnad', point: 'Dolda ledningar förlagda så att läckage kan upptäckas', method: 'Okulär', requirement: 'Säker Vatten' },
      { section: 'A. Före inbyggnad', point: 'Fästavstånd och fixpunkter enligt tillverkaren', method: 'Okulär / mätning', requirement: 'Tillverkarens anvisning' },
      { section: 'A. Före inbyggnad', point: 'Rörgenomföringar i våtrum utförda enligt tätskiktssystemet', method: 'Okulär', requirement: 'Säker Vatten, tätskiktets anvisning' },
      // B — provning. Provtryck/provtid/tryckfall enligt branschreglernas metod — fylls i per installation.
      { section: 'B. Provning', point: 'Täthetsprovning tappvatten – provtryck', method: 'Tryckprovning', unit: 'bar', requirement: 'Enligt provningsmetod' },
      { section: 'B. Provning', point: 'Täthetsprovning tappvatten – provtid', method: 'Tryckprovning', unit: 'min', requirement: 'Enligt provningsmetod' },
      { section: 'B. Provning', point: 'Täthetsprovning tappvatten – tryckfall under provtiden', method: 'Tryckprovning', unit: 'bar', requirement: 'Inom godkänt värde' },
      { section: 'B. Provning', point: 'Avloppsledningar täta, fall kontrollerat', method: 'Provning / mätning', requirement: 'Fall enligt handling' },
      { section: 'B. Provning', point: 'Tappvarmvattentemperatur vid tappställe', method: 'Mätning', unit: '°C', requirement: '≥ 50 °C', reference: 'BBR' },
      { section: 'B. Provning', point: 'Avstängningsventiler funktionsprovade, åtkomliga och märkta', method: 'Funktionsprov', requirement: 'Handlingar' },
      { section: 'B. Provning', point: 'Återströmningsskydd monterat där det krävs', method: 'Okulär', requirement: 'SS-EN 1717' },
      { section: 'B. Provning', point: 'Isolering av rör komplett (kondens, värmeförlust)', method: 'Okulär', requirement: 'Handlingar' },
      // C — överlämning
      { section: 'C. Överlämning', point: 'Installationsintyg upprättat, med branschreglernas version angiven', method: 'Dokument', requirement: 'Säker Vatten 2026:1' },
      { section: 'C. Överlämning', point: 'Intyg och drift- och skötselinstruktioner lämnade till beställaren', method: 'Dokument', requirement: 'Säker Vatten' },
      { section: 'C. Överlämning', point: 'Avvikelser åtgärdade och efterkontrollerade', method: 'Granskning', requirement: 'Kontrollplan' },
    ],
    signatures: ['Montör – namn, behörighetsnr, datum', 'Arbetsledare / ansvarig – namn, datum'],
    footnote:
      'Egenkontroll av VVS-installation enligt branschreglerna Säker Vatteninstallation 2026:1, som gäller från 1 januari 2026 (2021:2 kan gälla om bygglov eller handlingar är från före 2026). Provtryck, provtid och godkänt tryckfall anges enligt branschreglernas provningsmetod och tillverkarens anvisning – fyll i värdena som gäller för installationen. Kontrollera alltid mot projektets handlingar.',
  },
  {
    id: 'bygg',
    name: 'Egenkontroll Bygg / Stomme',
    category: 'Kvalitet',
    description:
      'Kontroll av stomme och byggkonstruktion: vad, hur och mot vilket underlag – med datum och signatur per punkt.',
    meta: [
      { name: 'company', label: 'Företag / org.nr', placeholder: 'T.ex. Ditt Bygg AB, 559000-0000' },
      { name: 'site', label: 'Byggdel / etapp', placeholder: 'T.ex. Stomme plan 2, ytterväggar' },
    ],
    items: [
      { section: 'A. Förberedelser', point: 'Handlingar (K-ritningar, beskrivning) aktuella på arbetsplatsen', method: 'Granskning', requirement: 'Bygghandlingar' },
      { section: 'A. Förberedelser', point: 'Material enligt beskrivning, prestandadeklaration finns', method: 'Dokumentgranskning', requirement: 'Beskrivning, CE-märkning' },
      { section: 'A. Förberedelser', point: 'Fuktkvot i virke före inbyggnad', method: 'Mätning', unit: '%', requirement: 'Enligt fuktsäkerhetsprojektering' },
      { section: 'B. Utförande', point: 'Mått, läge och höjder mot ritning', method: 'Mätning', requirement: 'Ritning, toleranser' },
      { section: 'B. Utförande', point: 'Lod och rakhet på väggar och pelare', method: 'Mätning', requirement: 'Toleranser enligt beskrivning' },
      { section: 'B. Utförande', point: 'Reglar och bjälkar: dimension och c/c-avstånd', method: 'Mätning', requirement: 'Ritning' },
      { section: 'B. Utförande', point: 'Infästningar, förankringar och beslag enligt K-ritning', method: 'Okulär', requirement: 'Konstruktionshandling' },
      { section: 'B. Utförande', point: 'Spik- och skruvavstånd samt dimension', method: 'Stickprov', requirement: 'Konstruktionshandling' },
      { section: 'B. Utförande', point: 'Stomstabilisering (vindstag, skivverkan) utförd', method: 'Okulär', requirement: 'Konstruktionshandling' },
      { section: 'B. Utförande', point: 'Ång- och fuktspärr hel, skarvar och genomföringar tätade', method: 'Okulär', requirement: 'Fuktsäkerhetsprojektering' },
      { section: 'B. Utförande', point: 'Brandtätning av genomföringar i brandcellsgräns', method: 'Okulär', requirement: 'Brandskyddsdokumentation', reference: 'BBR' },
      { section: 'C. Avslut', point: 'Dolda konstruktioner fotodokumenterade före inbyggnad', method: 'Foto', requirement: 'Kontrollplan' },
      { section: 'C. Avslut', point: 'Avvikelser dokumenterade, åtgärdade och efterkontrollerade', method: 'Granskning', requirement: 'Kontrollplan' },
    ],
    signatures: ['Utförare – namn, datum', 'Arbetsledare / ansvarig – namn, datum'],
    footnote:
      'Egenkontroll som del av kontrollplanen enligt plan- och bygglagen (10 kap. 6 §): för varje kontroll anges vad som kontrolleras, hur, mot vilket underlag och vem som utför den – datera och signera varje punkt. Toleranser och kravvärden enligt projektets handlingar.',
  },
  {
    id: 'skyddsrond',
    name: 'Skyddsrond (Arbetsmiljö)',
    category: 'Arbetsmiljö',
    description: 'Genomgång av arbetsmiljön på arbetsplatsen, område för område – med åtgärd och ansvarig per brist.',
    meta: [
      { name: 'site', label: 'Arbetsplats / område', placeholder: 'T.ex. Hus B, plan 1–3 och upplag' },
      { name: 'participants', label: 'Deltagare (arbetsledning, skyddsombud)', placeholder: 'Namn' },
    ],
    items: [
      { section: 'A. Arbetsplatsen', point: 'Inhägnad, skyltning och tillträdeskontroll', method: 'Okulär', requirement: 'Arbetsmiljöplan' },
      { section: 'A. Arbetsplatsen', point: 'Ordning och reda, gångvägar och upplag fria', method: 'Okulär', requirement: 'Arbetsmiljöplan' },
      { section: 'A. Arbetsplatsen', point: 'Belysning tillräcklig i arbetsområden och gångvägar', method: 'Okulär', requirement: 'Arbetsmiljöplan' },
      { section: 'B. Fall och höjd', point: 'Fallskydd på plats där det behövs (räcken, öppningar täckta)', method: 'Okulär', requirement: 'Arbetsmiljöverkets föreskrifter' },
      { section: 'B. Fall och höjd', point: 'Ställningar besiktigade och märkta', method: 'Okulär / dokument', requirement: 'Arbetsmiljöverkets föreskrifter' },
      { section: 'B. Fall och höjd', point: 'Stegar och lyftanordningar hela och rätt använda', method: 'Okulär', requirement: 'Tillverkarens anvisning' },
      { section: 'C. Maskiner, el och verktyg', point: 'Maskiner och verktyg hela, skydd på plats', method: 'Okulär', requirement: 'Tillverkarens anvisning' },
      { section: 'C. Maskiner, el och verktyg', point: 'Byggström: centraler, kablar och skarvar hela och skyddade', method: 'Okulär', requirement: 'Elsäkerhet på arbetsplatsen' },
      { section: 'D. Hälsa och skydd', point: 'Personlig skyddsutrustning används', method: 'Okulär', requirement: 'Arbetsmiljöplan' },
      { section: 'D. Hälsa och skydd', point: 'Kemikalier märkta, säkerhetsdatablad tillgängliga', method: 'Okulär / dokument', requirement: 'Arbetsmiljöverkets föreskrifter' },
      { section: 'D. Hälsa och skydd', point: 'Buller och damm hanteras (utsug, dammsugare, hörselskydd)', method: 'Okulär', requirement: 'Arbetsmiljöplan' },
      { section: 'E. Brand och nödläge', point: 'Första hjälpen och brandsläckare tillgängliga', method: 'Okulär', requirement: 'Arbetsmiljöplan' },
      { section: 'E. Brand och nödläge', point: 'Heta arbeten: tillstånd och brandvakt där det krävs', method: 'Dokument', requirement: 'Försäkringsbolagets regler' },
      { section: 'E. Brand och nödläge', point: 'Nödnummer, adress och återsamlingsplats anslagna', method: 'Okulär', requirement: 'Arbetsmiljöplan' },
      { section: 'F. Personalutrymmen', point: 'Bod, toalett och tvätt tillgängliga och i ordning', method: 'Okulär', requirement: 'Arbetsmiljöverkets föreskrifter' },
    ],
    signatures: ['Arbetsledning – namn, datum', 'Skyddsombud – namn, datum'],
    footnote:
      'Skyddsronden är en del av det systematiska arbetsmiljöarbetet. Notera varje brist i kommentaren med åtgärd, vem som ansvarar och när den ska vara klar – och följ upp vid nästa rond.',
  },
  {
    id: 'vatrum',
    name: 'Egenkontroll Våtrum / Tätskikt',
    category: 'Kvalitet',
    description: 'Kontroll av underlag, tätskikt, golvbrunn och genomföringar i våtrum enligt branschregler.',
    meta: [
      { name: 'company', label: 'Företag / org.nr', placeholder: 'T.ex. Ditt Bygg AB, 559000-0000' },
      { name: 'installer', label: 'Montör (behörighet, t.ex. GVK eller BKR)', placeholder: 'Namn, behörighetsnr' },
      { name: 'site', label: 'Våtrum / lägenhet', placeholder: 'T.ex. Lgh 1102, badrum' },
      { name: 'system', label: 'Tätskiktssystem (fabrikat)', placeholder: 'T.ex. system och produktnamn' },
    ],
    items: [
      { section: 'A. Underlag', point: 'Fuktmätning i underlag före tätskikt', method: 'Mätning', unit: '% RF', requirement: 'Enligt tätskiktets anvisning' },
      { section: 'A. Underlag', point: 'Underlag plant, rent och primat enligt systemet', method: 'Okulär', requirement: 'Tätskiktets anvisning' },
      { section: 'A. Underlag', point: 'Fall mot golvbrunn kontrollerat', method: 'Mätning', requirement: 'Branschregler, handlingar' },
      { section: 'B. Tätskikt', point: 'Golvbrunn rätt monterad och i nivå med tätskikt', method: 'Okulär', requirement: 'Branschregler, brunnens anvisning' },
      { section: 'B. Tätskikt', point: 'Tätskikt applicerat enligt tillverkarens anvisning', method: 'Okulär', requirement: 'Tätskiktets anvisning', reference: 'BBV / GVK' },
      { section: 'B. Tätskikt', point: 'Skikttjocklek / åtgång', method: 'Mätning', unit: 'mm', requirement: 'Enligt tätskiktets anvisning' },
      { section: 'B. Tätskikt', point: 'Hörn, skarvar och anslutningar förstärkta', method: 'Okulär', requirement: 'Tätskiktets anvisning' },
      { section: 'B. Tätskikt', point: 'Genomföringar och rörgenomföringar täta', method: 'Okulär', requirement: 'Branschregler', reference: 'BBR' },
      { section: 'C. Avslut', point: 'Tätskikt fotodokumenterat före plattsättning', method: 'Foto', requirement: 'Kontrollplan' },
      { section: 'C. Avslut', point: 'Våtrumsintyg upprättat och lämnat till beställaren', method: 'Dokument', requirement: 'Branschregler' },
    ],
    signatures: ['Montör – namn, behörighetsnr, datum', 'Arbetsledare / ansvarig – namn, datum'],
    footnote:
      'Egenkontroll av våtrum enligt tätskiktssystemets anvisning och gällande branschregler (t.ex. GVK eller BKR). Gränsvärden för fukt i underlag och skikttjocklek anges i systemets anvisning – fyll i värdena som gäller för produkten.',
  },
  {
    id: 'betong',
    name: 'Egenkontroll Betong / Gjutning',
    category: 'Kvalitet',
    description: 'Kontroll av form, armering, gjutning och härdning enligt konstruktionshandlingar.',
    meta: [
      { name: 'company', label: 'Företag / org.nr', placeholder: 'T.ex. Ditt Bygg AB, 559000-0000' },
      { name: 'site', label: 'Konstruktionsdel', placeholder: 'T.ex. Grundplatta hus A' },
      { name: 'concrete', label: 'Betong (hållfasthetsklass, exponeringsklass)', placeholder: 'Enligt K-ritning / följesedel' },
    ],
    items: [
      { section: 'A. Form', point: 'Form kontrollerad mot ritning (mått och läge)', method: 'Mätning', requirement: 'K-ritning, toleranser' },
      { section: 'A. Form', point: 'Form stabil, tät och rengjord; ingjutningsgods på plats', method: 'Okulär', requirement: 'Handlingar' },
      { section: 'B. Armering', point: 'Armering enligt konstruktionsritning (dimension, antal, c/c)', method: 'Mätning / okulär', requirement: 'K-ritning' },
      { section: 'B. Armering', point: 'Skarvlängder och förankring', method: 'Mätning', requirement: 'K-ritning' },
      { section: 'B. Armering', point: 'Täckskikt kontrollerat', method: 'Mätning', unit: 'mm', requirement: 'Enligt K-ritning', reference: 'EKS / EN 1992' },
      { section: 'B. Armering', point: 'Distanser och stöd på plats, armering fast och ren', method: 'Okulär', requirement: 'K-ritning' },
      { section: 'C. Gjutning', point: 'Betongkvalitet enligt följesedel och recept', method: 'Dokument', requirement: 'K-ritning, beskrivning' },
      { section: 'C. Gjutning', point: 'Vibrering och gjutordning enligt plan', method: 'Okulär', requirement: 'Gjutplan' },
      { section: 'C. Gjutning', point: 'Luft-/betongtemperatur vid gjutning', method: 'Mätning', unit: '°C', requirement: 'Enligt gjutplan' },
      { section: 'D. Härdning', point: 'Härdning och skydd mot uttorkning och kyla', method: 'Okulär', requirement: 'Gjutplan', reference: 'SS-EN 13670' },
      { section: 'D. Härdning', point: 'Formrivning efter angiven tid', method: 'Dokument', requirement: 'Gjutplan' },
      { section: 'D. Härdning', point: 'Uttorkning dokumenterad (RF före mattläggning)', method: 'Mätning', unit: '% RF', requirement: 'Enligt golvmaterialets krav' },
    ],
    signatures: ['Utförare – namn, datum', 'Arbetsledare / ansvarig – namn, datum'],
    footnote:
      'Egenkontroll av betongarbete enligt konstruktionshandlingar och gjutplan (utförande enligt SS-EN 13670). Toleranser, täckskikt och fuktkrav anges i projektets handlingar och golvmaterialets anvisning.',
  },
  {
    id: 'tak',
    name: 'Egenkontroll Tak',
    category: 'Kvalitet',
    description: 'Kontroll av underlagstäckning, läkt, taktäckning, anslutningar, avvattning och taksäkerhet.',
    meta: [
      { name: 'company', label: 'Företag / org.nr', placeholder: 'T.ex. Ditt Tak AB, 559000-0000' },
      { name: 'site', label: 'Byggnad / takfall', placeholder: 'T.ex. Hus A, norra takfallet' },
      { name: 'material', label: 'Taktäckning (fabrikat, typ)', placeholder: 'T.ex. betongpannor, plåt, papp' },
    ],
    items: [
      { section: 'A. Underlag', point: 'Underlagstäckning hel och rätt lagd (omlott, infästning)', method: 'Okulär', requirement: 'Tillverkarens anvisning' },
      { section: 'A. Underlag', point: 'Ströläkt och bärläkt: dimension och avstånd', method: 'Mätning', unit: 'mm', requirement: 'Enligt tillverkarens läktavstånd' },
      { section: 'B. Taktäckning', point: 'Infästning enligt vindlastkrav', method: 'Okulär / stickprov', requirement: 'Tillverkarens anvisning', reference: 'BBR / EKS' },
      { section: 'B. Taktäckning', point: 'Taktäckning rätt lagd, raka rader, hela pannor/skivor', method: 'Okulär', requirement: 'Tillverkarens anvisning' },
      { section: 'B. Taktäckning', point: 'Nock, vindskivor och fotplåt monterade', method: 'Okulär', requirement: 'Handlingar' },
      { section: 'C. Anslutningar', point: 'Genomföringar och anslutningar täta (skorsten, ventilation)', method: 'Okulär', requirement: 'Tillverkarens anvisning' },
      { section: 'C. Anslutningar', point: 'Vinkelrännor och plåtdetaljer tätade', method: 'Okulär', requirement: 'Handlingar' },
      { section: 'D. Avvattning', point: 'Fall och avvattning kontrollerat (hängrännor, stuprör)', method: 'Okulär / mätning', requirement: 'Handlingar' },
      { section: 'E. Taksäkerhet', point: 'Taksäkerhet (snörasskydd, fästen) monterad', method: 'Okulär', requirement: 'Tillverkarens anvisning', reference: 'BBR' },
      { section: 'E. Taksäkerhet', point: 'Takstege och glidskydd för underhåll monterade där det krävs', method: 'Okulär', requirement: 'Handlingar', reference: 'BBR' },
      { section: 'F. Avslut', point: 'Takfall fotodokumenterade, avvikelser åtgärdade', method: 'Foto / granskning', requirement: 'Kontrollplan' },
    ],
    signatures: ['Utförare – namn, datum', 'Arbetsledare / ansvarig – namn, datum'],
    footnote:
      'Egenkontroll av takarbete enligt taktillverkarens anvisning och projektets handlingar. Läktavstånd och infästning bestäms av taktäckningen och vindlasten – fyll i värdena som gäller för produkten.',
  },
  {
    id: 'ventilation',
    name: 'Egenkontroll Ventilation',
    category: 'Kvalitet',
    description: 'Kontroll av kanaler, brandspjäll, injustering och överlämning – med flöden mot projekterade värden.',
    meta: [
      { name: 'company', label: 'Företag / org.nr', placeholder: 'T.ex. Ditt Vent AB, 559000-0000' },
      { name: 'site', label: 'System / aggregat', placeholder: 'T.ex. LB01, plan 1–4' },
      { name: 'instrument', label: 'Mätinstrument (fabrikat, kalibrerat)', placeholder: 'T.ex. flödesmätare, kal. 2026-03' },
    ],
    items: [
      { section: 'A. Montage', point: 'Kanaler monterade enligt ritning, rensade och täta', method: 'Okulär', requirement: 'Ritning, täthetsklass enligt handling' },
      { section: 'A. Montage', point: 'Isolering av kanaler komplett', method: 'Okulär', requirement: 'Handlingar' },
      { section: 'A. Montage', point: 'Brandspjäll och brandisolering vid brandcellsgräns', method: 'Okulär', requirement: 'Brandskyddsdokumentation', reference: 'BBR' },
      { section: 'A. Montage', point: 'Rensluckor åtkomliga, don och aggregat märkta', method: 'Okulär', requirement: 'Handlingar' },
      { section: 'B. Provning och injustering', point: 'Brandspjäll funktionstestade', method: 'Funktionsprov', requirement: 'Brandskyddsdokumentation', reference: 'BBR' },
      { section: 'B. Provning och injustering', point: 'Tilluftsflöde (summa) mot projekterat', method: 'Mätning', unit: 'l/s', requirement: 'Projekterat flöde' },
      { section: 'B. Provning och injustering', point: 'Frånluftsflöde (summa) mot projekterat', method: 'Mätning', unit: 'l/s', requirement: 'Projekterat flöde' },
      { section: 'B. Provning och injustering', point: 'Don injusterade mot projekterade flöden', method: 'Mätning', requirement: 'Injusteringsprotokoll' },
      { section: 'B. Provning och injustering', point: 'Filter rena och rätt klass', method: 'Okulär', requirement: 'Handlingar' },
      { section: 'C. Överlämning', point: 'Injusteringsprotokoll upprättat', method: 'Dokument', requirement: 'Handlingar' },
      { section: 'C. Överlämning', point: 'OVK före ibruktagning bokad / utförd', method: 'Dokument', requirement: 'OVK', reference: 'PBF' },
      { section: 'C. Överlämning', point: 'Drift- och skötselinstruktion lämnad', method: 'Dokument', requirement: 'Handlingar' },
    ],
    signatures: ['Montör / injusterare – namn, datum', 'Arbetsledare / ansvarig – namn, datum'],
    footnote:
      'Egenkontroll av ventilationsinstallation enligt projektets handlingar. Nya ventilationssystem ska ha en första obligatorisk ventilationskontroll (OVK) innan de tas i bruk. Flöden jämförs mot projekterade värden.',
  },
];
