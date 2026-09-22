// Ready-made egenkontroll checklists — the "pick a trade and the checklist
// fills itself" feature. Content mirrors the ByggExp KMA starter templates
// (starterTemplates.js) so the free tool offers the same professional,
// standard-referenced control points the product ships with. sv-only.

export type PresetItem = {
  point: string;
  reference?: string;
  /** Group heading the point belongs to (rendered as a section row). */
  section?: string;
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
    description: 'Kontroll av VVS-installation.',
    items: [
      { point: 'Täthetsprovning av rör utförd' },
      { point: 'Avstängningsventiler monterade och märkta' },
      { point: 'Isolering av rör komplett' },
      { point: 'Fall på avloppsledningar kontrollerat' },
      { point: 'Vattentryck kontrollerat' },
    ],
  },
  {
    id: 'bygg',
    name: 'Egenkontroll Bygg / Stomme',
    category: 'Kvalitet',
    description: 'Kontroll av byggkonstruktion.',
    items: [
      { point: 'Måttkontroll mot ritning' },
      { point: 'Infästningar och förankringar kontrollerade' },
      { point: 'Fuktkontroll utförd' },
      { point: 'Brandtätning genomförd', reference: 'BBR' },
      { point: 'Avvikelser dokumenterade' },
    ],
  },
  {
    id: 'skyddsrond',
    name: 'Skyddsrond (Arbetsmiljö)',
    category: 'Arbetsmiljö',
    description: 'Kontroll av arbetsmiljön på arbetsplatsen.',
    items: [
      { point: 'Fallskydd på plats där det behövs' },
      { point: 'Ordning och reda på arbetsplatsen' },
      { point: 'Personlig skyddsutrustning används' },
      { point: 'Ställningar besiktigade och märkta' },
      { point: 'Första hjälpen och brandsläckare tillgängliga' },
    ],
  },
  {
    id: 'vatrum',
    name: 'Egenkontroll Våtrum / Tätskikt',
    category: 'Kvalitet',
    description: 'Kontroll av tätskikt och våtrum enligt branschregler.',
    items: [
      { point: 'Fuktmätning i underlag utförd före tätskikt' },
      { point: 'Tätskikt applicerat enligt tillverkarens anvisning', reference: 'BBV / GVK' },
      { point: 'Fall mot golvbrunn kontrollerat' },
      { point: 'Golvbrunn rätt monterad och i nivå med tätskikt' },
      { point: 'Genomföringar och rörgenomföringar täta', reference: 'BBR' },
    ],
  },
  {
    id: 'betong',
    name: 'Egenkontroll Betong / Gjutning',
    category: 'Kvalitet',
    description: 'Kontroll av form, armering och gjutning.',
    items: [
      { point: 'Form kontrollerad mot ritning (mått och läge)' },
      { point: 'Armering enligt konstruktionsritning' },
      { point: 'Täckskikt kontrollerat', reference: 'EKS / EN 1992' },
      { point: 'Betongkvalitet och gjutning enligt recept' },
      { point: 'Härdning och uttorkning dokumenterad' },
    ],
  },
  {
    id: 'tak',
    name: 'Egenkontroll Tak',
    category: 'Kvalitet',
    description: 'Kontroll av takarbete och tätning.',
    items: [
      { point: 'Underlagstäckning hel och rätt lagd' },
      { point: 'Infästning enligt vindlastkrav', reference: 'BBR / EKS' },
      { point: 'Genomföringar och anslutningar täta' },
      { point: 'Fall och avvattning kontrollerat' },
      { point: 'Taksäkerhet (snörasskydd, fästen) monterad', reference: 'BBR' },
    ],
  },
  {
    id: 'ventilation',
    name: 'Egenkontroll Ventilation',
    category: 'Kvalitet',
    description: 'Kontroll av ventilationsinstallation.',
    items: [
      { point: 'Kanaler rensade och täta' },
      { point: 'Don injusterade mot projekterade flöden' },
      { point: 'Brandspjäll funktionstestade', reference: 'BBR' },
      { point: 'Isolering av kanaler komplett' },
      { point: 'Injusteringsprotokoll upprättat' },
    ],
  },
];
