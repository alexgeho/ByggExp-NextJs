import { useMemo, useState } from 'react';

import { gaEvent } from '../../lib/analytics';
import { downloadCsvRows } from '../../lib/download';
import type { CalcLocale } from '../../lib/locale';
import { downloadMaterialPdf, type MaterialRow } from '../../lib/materialPdf';
import { fakturaHref, offertHref } from '../../lib/offert';

// Full concrete-slab estimator ("platta på mark"). Beyond volume it models the
// real build-up and a cost estimate (à-pris = material + arbete), so it competes
// with paid kalkyl-programs on the "vad kostar platta på mark" intent while
// staying free. Sources: TräGuiden/Boverket build-up; rebar tie wire ~10 kg/ton
// and place+tie ~12 h/ton (industry norms); platta på mark ~1100–1800 kr/m² incl.
// labour (2026). All prices/norms are editable riktvärden. UI is bilingual
// (sv default, en for /en/verktyg); nb falls back to sv text.

function num(v: string): number {
  return Math.max(parseFloat(v.replace(',', '.')) || 0, 0);
}

type Shape = 'platta' | 'balk' | 'plint';
type Form = 'rekt' | 'egen';

const MESH_SHEET_M2 = 11.5; // armeringsnät 5,0 × 2,3 m
const EPS_BOARD_M2 = 0.72; // cellplastskiva 1200 × 600 mm
const EPS_BOARD_MM = 100;
// Rebar weight kg/m by diameter, and mesh weight kg/m² by type.
const BAR_KG_PER_M: Record<string, number> = { '10': 0.617, '12': 0.888, '16': 1.578 };
const MESH_KG_PER_M2: Record<string, number> = { '5': 2.2, '6': 3.05, '7': 4.3, '8': 5.5 };
// Load-bearing cellplast/EPS grades under a slab and a riktpris kr/m³ (editable).
const EPS_PRICE: Record<string, number> = { S80: 1200, S100: 1400, S150: 1800, S200: 2300 };

export default function BetongKalkylatorTool({ locale = 'sv' }: { locale?: CalcLocale | 'ru' }) {
  const en = locale === 'en';
  const ru = locale === 'ru';
  const loc = en ? 'en-GB' : ru ? 'ru-RU' : 'sv-SE';
  const nf = (v: number, d = 0) => v.toLocaleString(loc, { maximumFractionDigits: d });
  const kr = (v: number) => `${Math.round(v).toLocaleString(loc)} kr`;
  const t = ru
    ? {
        title: 'Калькулятор бетона — плита по грунту, армирование и стоимость',
        sub: 'Рассчитывает бетон, пенополистирол (EPS), армирование (сетка + краевые стержни + вязальная проволока) и подстилающий слой для плиты по грунту — с краевой балкой и поддержкой L-образных плит. Включите стоимость для ориентировочной цены (материал + работа + ROT). Экспорт в Excel или PDF.',
        shapeQ: 'Что заливаете?',
        oPlatta: 'Плита по грунту', oBalk: 'Фундамент / балка / основание', oPlint: 'Столбы / лунки (круглые)',
        formL: 'Форма', oRekt: 'Прямоугольная (длина × ширина)', oEgen: 'Своя форма / L-форма (площадь + периметр)',
        length: 'Длина (м)', width: 'Ширина (м)', area: 'Площадь (м²)', perim: 'Периметр (м)',
        thickness: 'Толщина бетона (см)',
        edgeQ: 'Краевая балка?', yes: 'Да', no: 'Нет',
        edgeW: 'Ширина краевой балки (см)', edgeH: 'Глубина краевой балки (см)', edgeBars: 'Стержни в кромке (шт)', barDiaL: 'Диаметр арматуры',
        meshQ: 'Арматурная сетка?', meshTypeL: 'Тип сетки',
        isoThick: 'Пенополистирол EPS — толщина (мм)', isoGrade: 'EPS — марка (нагрузка)',
        oS80: 'EPS S80 (лёгкая нагрузка)', oS100: 'EPS S100 (обычный дом)', oS150: 'EPS S150 (повышенная нагрузка)', oS200: 'EPS S200 (промышленная)',
        baseThick: 'Щебень / подстилающий слой (мм)',
        bLen: 'Длина (м)', bWidth: 'Ширина (см)', bHeight: 'Высота (см)',
        diam: 'Диаметр (см)', depth: 'Глубина (см)', count: 'Количество (шт)',
        concreteL: 'Бетон', oFabrik: 'Товарный бетон (м³)', oSack: 'Мешок 25 кг', litersPerBag: 'Литров на мешок', spill: 'Отходы (%)',
        rVolume: 'Объём бетона с отходами', rBags: 'Мешки сухой смеси (25 кг)', rBigBag: 'Эквивалент биг-бэгов (1000 кг)', rWater: 'Вода затворения (прибл.)',
        rMesh: 'Арматурная сетка', rEdge: 'Краевые стержни', rBind: 'Вязальная проволока', rIso: 'Пенополистирол EPS', rBase: 'Щебень / подстилающий слой',
        showCostQ: 'Показать стоимость (ориентир)?', costNo: 'Нет', costYes: 'Да — материал + работа',
        pSackL: 'Бетон (kr/мешок)', pBetongL: 'Товарный бетон (kr/м³)', pMeshL: 'Сетка (kr/шт)', pSteelL: 'Арматура (kr/кг)', pBindL: 'Проволока (kr/кг)',
        pIsoL: 'EPS (kr/м³)', pBaseL: 'Щебень (kr/м³)', timprisL: 'Ставка работы (kr/час)', hRebarL: 'Армирование: ч/тонна', hM2L: 'Прочая работа: ч/м²',
        walkL: 'Перемещения / ходьба (%)', bindTonL: 'Проволока (кг/тонна)', rotQ: 'ROT-вычет (частное лицо)?',
        cMaterial: 'Материал', cLabour: (h: string) => `Работа (${h} ч)`, cSum: 'Итого без НДС', cRot: 'ROT-вычет (30% от работы)', cAfter: 'К оплате после ROT', cPerM2: 'Ориентир. цена за м²',
        fine: 'Оценка с учётом отходов по типовой конструкции (щебень → EPS 200–300 мм → сетка + краевые стержни → бетон + краевая балка). L-образная плита имеет больший периметр, а значит больше краевой балки, краевой изоляции и стержней. Стоимость ориентировочная — готовая плита по грунту обычно ~1 100–1 800 kr/м² с работой. Цены и трудозатраты редактируются. Всегда сверяйте с чертежами и расчётом конструктора.',
        offert: 'Создать смету из этого', faktura: 'Создать счёт', excel: 'Экспорт в Excel', pdf: 'Экспорт в PDF',
        pcs: 'шт', litre: 'литров', boards: 'плит',
        slPlatta: 'Плита по грунту', slBalk: 'Фундамент / балка', slPlint: 'Столбы / лунки',
        mConcrete: 'Бетон с отходами', mBagsDry: 'Мешки сухой смеси (25 кг)', mReadymix: 'Товарный бетон', mWater: 'Вода затворения (прибл.)',
        mMesh: (k: string) => `Арматурная сетка K${k} (5,0×2,3 м)`, mEdge: (d: string) => `Краевые стержни Ø${d} мм`, mBind: 'Вязальная проволока',
        mIso: (g: string) => `Пенополистирол EPS ${g}`, mBase: 'Щебень / подстилающий слой',
        csvTitle: 'Бетон — расчёт', csvArea: 'Площадь', csvPerim: 'Периметр', csvMaterial: 'Материал', csvQty: 'Кол-во', csvCost: 'Стоимость (ориентир)',
        pdfTitle: 'Бетон — расчёт', pdfNote: 'Ориентировочные значения с учётом отходов. Цены и трудозатраты — редактируемые оценки; сверяйте с чертежами, расчётом конструктора и актуальными ценами.',
        costHdr: '— Стоимость (ориентир) —',
        soConcrete: 'Бетон, мешок 25 кг', soReadymix: 'Товарный бетон (м³)', soMesh: 'Арматурная сетка (шт)', soIso: 'Пенополистирол (плит)', soLabour: 'Работа заливка/армирование',
      }
    : en
    ? {
        title: 'Concrete calculator – slab on grade, reinforcement & cost',
        sub: 'Estimates concrete, EPS insulation, reinforcement (mesh + edge bars + tie wire) and sub-base for a slab on grade – with edge beam and support for L-shaped slabs. Turn on cost for a guide price (material + labour + ROT). Export to Excel or PDF.',
        shapeQ: 'What are you casting?',
        oPlatta: 'Slab on grade', oBalk: 'Footing / beam / foundation', oPlint: 'Piers / post holes (round)',
        formL: 'Shape', oRekt: 'Rectangular (length × width)', oEgen: 'Custom / L-shape (area + perimeter)',
        length: 'Length (m)', width: 'Width (m)', area: 'Area (m²)', perim: 'Perimeter (m)',
        thickness: 'Concrete thickness (cm)',
        edgeQ: 'Edge beam?', yes: 'Yes', no: 'No',
        edgeW: 'Edge beam width (cm)', edgeH: 'Edge beam depth (cm)', edgeBars: 'Edge bars (count)', barDiaL: 'Bar diameter',
        meshQ: 'Reinforcement mesh?', meshTypeL: 'Mesh type',
        isoThick: 'EPS insulation – thickness (mm)', isoGrade: 'EPS – grade (load)',
        oS80: 'EPS S80 (light load)', oS100: 'EPS S100 (normal house)', oS150: 'EPS S150 (heavier load)', oS200: 'EPS S200 (industrial)',
        baseThick: 'Crushed stone / sub-base (mm)',
        bLen: 'Length (m)', bWidth: 'Width (cm)', bHeight: 'Height (cm)',
        diam: 'Diameter (cm)', depth: 'Depth (cm)', count: 'Count (pcs)',
        concreteL: 'Concrete', oFabrik: 'Ready-mix (m³)', oSack: 'Bag 25 kg', litersPerBag: 'Litres per bag', spill: 'Waste (%)',
        rVolume: 'Concrete volume incl. waste', rBags: 'Dry-mix bags (25 kg)', rBigBag: 'Equivalent big bags (1000 kg)', rWater: 'Mixing water (approx.)',
        rMesh: 'Reinforcement mesh', rEdge: 'Edge bars', rBind: 'Tie wire', rIso: 'EPS insulation', rBase: 'Crushed stone / sub-base',
        showCostQ: 'Show cost (guide price)?', costNo: 'No', costYes: 'Yes – material + labour',
        pSackL: 'Concrete (kr/bag)', pBetongL: 'Ready-mix (kr/m³)', pMeshL: 'Mesh (kr/sheet)', pSteelL: 'Rebar (kr/kg)', pBindL: 'Tie wire (kr/kg)',
        pIsoL: 'EPS (kr/m³)', pBaseL: 'Crushed stone (kr/m³)', timprisL: 'Labour rate (kr/h)', hRebarL: 'Reinforcement: h/tonne', hM2L: 'Other labour: h/m²',
        walkL: 'Walking / moving time (%)', bindTonL: 'Tie wire (kg/tonne)', rotQ: 'ROT deduction (private person)?',
        cMaterial: 'Material', cLabour: (h: string) => `Labour (${h} h)`, cSum: 'Subtotal excl. VAT', cRot: 'ROT deduction (30% of labour)', cAfter: 'To pay after ROT', cPerM2: 'Guide price per m²',
        fine: 'Estimate incl. waste per a typical build-up (crushed stone → EPS 200–300 mm → mesh + edge bars → concrete + edge beam). An L-shaped slab has a larger perimeter and therefore more edge beam, edge insulation and edge bars. The cost is a guide price – a finished slab on grade is often ~1,100–1,800 kr/m² incl. labour. Prices and labour times are editable. Always check against drawings and the structural engineer’s dimensioning.',
        offert: 'Create quote from this', faktura: 'Create invoice', excel: 'Export Excel', pdf: 'Export PDF',
        pcs: 'pcs', litre: 'litres', boards: 'boards',
        slPlatta: 'Slab on grade', slBalk: 'Footing / beam', slPlint: 'Piers / post holes',
        mConcrete: 'Concrete incl. waste', mBagsDry: 'Dry-mix bags (25 kg)', mReadymix: 'Ready-mix concrete', mWater: 'Mixing water (approx.)',
        mMesh: (k: string) => `Reinforcement mesh K${k} (5.0×2.3 m)`, mEdge: (d: string) => `Edge bars Ø${d} mm`, mBind: 'Tie wire',
        mIso: (g: string) => `EPS insulation ${g}`, mBase: 'Crushed stone / sub-base',
        csvTitle: 'Concrete – estimate', csvArea: 'Area', csvPerim: 'Perimeter', csvMaterial: 'Material', csvQty: 'Quantity', csvCost: 'Cost (guide price)',
        pdfTitle: 'Concrete – estimate', pdfNote: 'Guide values incl. waste. Prices and labour times are editable estimates – check against drawings, the engineer’s dimensioning and current prices.',
        costHdr: '— Cost (guide price) —',
        soConcrete: 'Concrete, bag 25 kg', soReadymix: 'Ready-mix concrete (m³)', soMesh: 'Reinforcement mesh (pcs)', soIso: 'EPS insulation (boards)', soLabour: 'Labour casting/reinforcement',
      }
    : {
        title: 'Betongkalkylator – platta på mark, armering & kostnad',
        sub: 'Räknar betong, cellplast, armering (nät + kantjärn + bindtråd) och bärlager för en platta på mark – med kantbalk och stöd för L-formade plattor. Slå på kostnad för ett riktpris (material + arbete + ROT). Exportera till Excel eller PDF.',
        shapeQ: 'Vad gjuter du?',
        oPlatta: 'Platta på mark', oBalk: 'Grundmur / balk / fundament', oPlint: 'Plintar / stolphål (runda)',
        formL: 'Form', oRekt: 'Rektangulär (längd × bredd)', oEgen: 'Egen form / L-form (area + omkrets)',
        length: 'Längd (m)', width: 'Bredd (m)', area: 'Area (m²)', perim: 'Omkrets (m)',
        thickness: 'Betongtjocklek (cm)',
        edgeQ: 'Kantbalk?', yes: 'Ja', no: 'Nej',
        edgeW: 'Kantbalk bredd (cm)', edgeH: 'Kantbalk djup (cm)', edgeBars: 'Kamstål i kant (antal)', barDiaL: 'Kamstål diameter',
        meshQ: 'Armeringsnät?', meshTypeL: 'Nättyp',
        isoThick: 'Cellplast / EPS – tjocklek (mm)', isoGrade: 'Cellplast – kvalitet (bärighet)',
        oS80: 'EPS S80 (lätt last)', oS100: 'EPS S100 (normal villa)', oS150: 'EPS S150 (tyngre last)', oS200: 'EPS S200 (industri)',
        baseThick: 'Makadam / bärlager (mm)',
        bLen: 'Längd (m)', bWidth: 'Bredd (cm)', bHeight: 'Höjd (cm)',
        diam: 'Diameter (cm)', depth: 'Djup (cm)', count: 'Antal (st)',
        concreteL: 'Betong', oFabrik: 'Fabriksbetong (m³)', oSack: 'Säck 25 kg', litersPerBag: 'Liter per säck', spill: 'Spill (%)',
        rVolume: 'Betongvolym inkl. spill', rBags: 'Säckar torrbetong (25 kg)', rBigBag: 'Motsvarar storsäck (1000 kg)', rWater: 'Blandningsvatten (ca)',
        rMesh: 'Armeringsnät', rEdge: 'Kantjärn', rBind: 'Bindtråd', rIso: 'Cellplast / EPS', rBase: 'Makadam / bärlager',
        showCostQ: 'Visa kostnad (riktpris)?', costNo: 'Nej', costYes: 'Ja – material + arbete',
        pSackL: 'Betong (kr/säck)', pBetongL: 'Fabriksbetong (kr/m³)', pMeshL: 'Armeringsnät (kr/nät)', pSteelL: 'Kamstål (kr/kg)', pBindL: 'Bindtråd (kr/kg)',
        pIsoL: 'Cellplast (kr/m³)', pBaseL: 'Makadam (kr/m³)', timprisL: 'Timpris arbete (kr/tim)', hRebarL: 'Armering: tim/ton', hM2L: 'Övrigt arbete: tim/m²',
        walkL: 'Gångtid / förflyttning (%)', bindTonL: 'Bindtråd (kg/ton)', rotQ: 'ROT-avdrag (privatperson)?',
        cMaterial: 'Material', cLabour: (h: string) => `Arbete (${h} tim)`, cSum: 'Summa exkl. moms', cRot: 'ROT-avdrag (30 % av arbete)', cAfter: 'Att betala efter ROT', cPerM2: 'Riktpris per m²',
        fine: 'Uppskattning inkl. spill enligt vanlig uppbyggnad (makadam → cellplast 200–300 mm → armeringsnät + kantjärn → betong + kantbalk). En L-formad platta har större omkrets och därmed mer kantbalk, kantisolering och kantjärn. Kostnaden är ett riktpris – en färdig platta på mark ligger ofta ca 1 100–1 800 kr/m² inkl. arbete. Priser och arbetstider är redigerbara. Kontrollera alltid mot ritning och konstruktörens dimensionering.',
        offert: 'Skapa offert av det här', faktura: 'Skapa faktura', excel: 'Exportera Excel', pdf: 'Exportera PDF',
        pcs: 'st', litre: 'liter', boards: 'skivor',
        slPlatta: 'Platta på mark', slBalk: 'Grundmur / balk', slPlint: 'Plintar / stolphål',
        mConcrete: 'Betong inkl. spill', mBagsDry: 'Säckar torrbetong (25 kg)', mReadymix: 'Fabriksbetong', mWater: 'Blandningsvatten (ca)',
        mMesh: (k: string) => `Armeringsnät K${k} (5,0×2,3 m)`, mEdge: (d: string) => `Kantjärn Ø${d} mm`, mBind: 'Bindtråd',
        mIso: (g: string) => `Cellplast / EPS ${g}`, mBase: 'Makadam / bärlager',
        csvTitle: 'Betong – kalkyl', csvArea: 'Area', csvPerim: 'Omkrets', csvMaterial: 'Material', csvQty: 'Mängd', csvCost: 'Kostnad (riktpris)',
        pdfTitle: 'Betong – kalkyl', pdfNote: 'Riktvärden inkl. spill. Priser och arbetstider är redigerbara uppskattningar – kontrollera mot ritning, konstruktörens dimensionering och aktuella priser.',
        costHdr: '— Kostnad (riktpris) —',
        soConcrete: 'Betong, säck 25 kg', soReadymix: 'Fabriksbetong (m³)', soMesh: 'Armeringsnät (st)', soIso: 'Cellplast (skivor)', soLabour: 'Arbete gjutning/armering',
      };

  const [shape, setShape] = useState<Shape>('platta');
  const [form, setForm] = useState<Form>('rekt');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [area, setArea] = useState('');
  const [perim, setPerim] = useState('');
  const [thickness, setThickness] = useState('10');

  const [edge, setEdge] = useState('ja');
  const [edgeW, setEdgeW] = useState('30');
  const [edgeH, setEdgeH] = useState('35');
  const [edgeBars, setEdgeBars] = useState('3');
  const [barDia, setBarDia] = useState('12'); // kamstål diameter mm

  const [isoThick, setIsoThick] = useState('300');
  const [epsGrade, setEpsGrade] = useState('S100'); // cellplast-kvalitet (bärighet)
  const [baseThick, setBaseThick] = useState('150');
  const [mesh, setMesh] = useState('ja');
  const [meshType, setMeshType] = useState('6'); // K6/K8 → kg/m²
  const [bindPerTon, setBindPerTon] = useState('10'); // kg bindtråd per ton stål

  const [bLen, setBLen] = useState('');
  const [bWidth, setBWidth] = useState('20');
  const [bHeight, setBHeight] = useState('30');
  const [diam, setDiam] = useState('30');
  const [depth, setDepth] = useState('60');
  const [count, setCount] = useState('4');

  const [bagYield, setBagYield] = useState('12.5');
  const [spill, setSpill] = useState('5');
  const [concreteMode, setConcreteMode] = useState('fabrik'); // fabrik | sack

  // Cost layer (riktpriser 2026, editable)
  const [showCost, setShowCost] = useState(false);
  const [pBetong, setPBetong] = useState('1600'); // kr/m³ fabriksbetong
  const [pSack, setPSack] = useState('80'); // kr/säck 25 kg
  const [pMesh, setPMesh] = useState('300'); // kr/nät
  const [pSteel, setPSteel] = useState('18'); // kr/kg kamstål
  const [pBind, setPBind] = useState('45'); // kr/kg bindtråd
  const [pIso, setPIso] = useState('1400'); // kr/m³ cellplast
  const [pBase, setPBase] = useState('300'); // kr/m³ makadam
  const [timpris, setTimpris] = useState('500'); // kr/tim
  const [hRebarTon, setHRebarTon] = useState('12'); // arbetstimmar per ton armering
  const [hPerM2, setHPerM2] = useState('1.2'); // övrig arbetstid per m² (schakt/iso/gjutning)
  const [walkPct, setWalkPct] = useState('10'); // gångtid/förflyttning – påslag på arbetstid
  const [rot, setRot] = useState('nej');

  const r = useMemo(() => {
    let base = 0, A = 0, P = 0;
    let meshArea = 0, meshSheets = 0, meshKg = 0;
    let isoVol = 0, isoBoards = 0, baseVol = 0;
    let edgeBarsLen = 0, edgeBarKg = 0;

    if (shape === 'platta') {
      if (form === 'rekt') { const L = num(length), W = num(width); A = L * W; P = 2 * (L + W); }
      else { A = num(area); P = num(perim); }
      const t2 = num(thickness) / 100;
      base = A * t2;
      if (edge === 'ja') {
        const extraDepth = Math.max(num(edgeH) / 100 - t2, 0);
        base += P * (num(edgeW) / 100) * extraDepth;
        edgeBarsLen = P * num(edgeBars);
        edgeBarKg = edgeBarsLen * (BAR_KG_PER_M[barDia] || 0.888);
      }
      if (mesh === 'ja') {
        meshArea = A * 1.15;
        meshSheets = Math.ceil(meshArea / MESH_SHEET_M2);
        meshKg = A * (MESH_KG_PER_M2[meshType] || 3.05);
      }
      const tIso = num(isoThick) / 1000;
      isoVol = A * tIso;
      if (tIso > 0) isoBoards = Math.ceil(A / EPS_BOARD_M2) * Math.ceil(num(isoThick) / EPS_BOARD_MM);
      baseVol = A * (num(baseThick) / 1000);
    } else if (shape === 'balk') {
      base = num(bLen) * (num(bWidth) / 100) * (num(bHeight) / 100);
    } else {
      const rMeter = num(diam) / 100 / 2;
      base = Math.PI * rMeter * rMeter * (num(depth) / 100) * num(count);
    }

    const volume = base * (1 + num(spill) / 100);
    const liters = volume * 1000;
    const y = num(bagYield);
    const bags = y > 0 ? Math.ceil(liters / y) : 0;
    const bigBags = liters > 0 ? liters / 520 : 0;
    const water = bags * 3.5;

    const steelKg = meshKg + edgeBarKg;
    const steelTon = steelKg / 1000;
    const bindKg = steelTon * num(bindPerTon);
    const rebarHours = steelTon * num(hRebarTon);
    const otherHours = shape === 'platta' ? A * num(hPerM2) : 0;
    // Gångtid/förflyttning: non-productive walking/moving time added on top.
    const totalHours = (rebarHours + otherHours) * (1 + num(walkPct) / 100);

    // Costs
    const cConcrete = concreteMode === 'sack' ? bags * num(pSack) : volume * num(pBetong);
    const cMesh = meshSheets * num(pMesh);
    const cSteel = edgeBarKg * num(pSteel);
    const cBind = bindKg * num(pBind);
    const cIso = isoVol * num(pIso);
    const cBase = baseVol * num(pBase);
    const cMaterial = cConcrete + cMesh + cSteel + cBind + cIso + cBase;
    const cLabour = totalHours * num(timpris);
    const cTotal = cMaterial + cLabour;
    const rotAvdrag = rot === 'ja' ? cLabour * 0.30 : 0; // ROT: 30 % av arbetskostnaden
    const cAfterRot = cTotal - rotAvdrag;
    const perM2 = A > 0 ? cTotal / A : 0;

    return { volume, liters, bags, bigBags, water, A, P, meshArea, meshSheets, meshKg, isoVol, isoBoards, baseVol, edgeBarsLen, edgeBarKg, steelKg, bindKg, rebarHours, otherHours, totalHours, cConcrete, cMesh, cSteel, cBind, cIso, cBase, cMaterial, cLabour, cTotal, rotAvdrag, cAfterRot, perM2 };
  }, [shape, form, length, width, area, perim, thickness, edge, edgeW, edgeH, edgeBars, barDia, isoThick, baseThick, mesh, meshType, bindPerTon, bLen, bWidth, bHeight, diam, depth, count, bagYield, spill, concreteMode, pBetong, pSack, pMesh, pSteel, pBind, pIso, pBase, timpris, hRebarTon, hPerM2, walkPct, rot]);

  const shapeLabel = shape === 'platta' ? t.slPlatta : shape === 'balk' ? t.slBalk : t.slPlint;

  const materialRows = useMemo(() => {
    const rows: MaterialRow[] = [
      { desc: t.mConcrete, qty: `${nf(r.volume, 2)} m³ (${nf(r.liters)} l)` },
    ];
    if (concreteMode === 'sack') rows.push({ desc: t.mBagsDry, qty: `${nf(r.bags)} ${t.pcs}` });
    else rows.push({ desc: t.mReadymix, qty: `${nf(r.volume, 2)} m³` });
    rows.push({ desc: t.mWater, qty: `${nf(r.water)} ${t.litre}` });
    if (shape === 'platta') {
      if (r.meshSheets > 0) rows.push({ desc: t.mMesh(meshType), qty: `${nf(r.meshSheets)} ${t.pcs} · ${nf(r.meshKg)} kg` });
      if (r.edgeBarKg > 0) rows.push({ desc: t.mEdge(barDia), qty: `${nf(r.edgeBarsLen)} m · ${nf(r.edgeBarKg)} kg` });
      if (r.bindKg > 0) rows.push({ desc: t.mBind, qty: `${nf(r.bindKg, 1)} kg` });
      if (r.isoVol > 0) rows.push({ desc: t.mIso(epsGrade), qty: `${nf(r.isoVol, 2)} m³ (${nf(r.isoBoards)} ${t.boards})` });
      if (r.baseVol > 0) rows.push({ desc: t.mBase, qty: `${nf(r.baseVol, 2)} m³` });
    }
    return rows;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [r, shape, concreteMode, meshType, barDia, epsGrade]);

  const costRows = useMemo((): MaterialRow[] => ([
    { desc: t.cMaterial, qty: kr(r.cMaterial) },
    { desc: t.cLabour(nf(r.totalHours, 1)), qty: kr(r.cLabour) },
    { desc: t.cSum, qty: kr(r.cTotal) },
    ...(r.rotAvdrag > 0 ? [{ desc: t.cRot, qty: `−${kr(r.rotAvdrag)}` }] : []),
    ...(r.rotAvdrag > 0 ? [{ desc: t.cAfter, qty: kr(r.cAfterRot) }] : []),
    ...(r.perM2 > 0 ? [{ desc: t.cPerM2, qty: kr(r.perM2) }] : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ]), [r]);

  const exportCsv = () => {
    const rows: (string | number)[][] = [
      [t.csvTitle, 'byggexp.se'], [t.shapeQ, shapeLabel],
      ...(shape === 'platta' ? [[t.csvArea, `${nf(r.A, 1)} m²`], [t.csvPerim, `${nf(r.P, 1)} m`]] : []),
      [], [t.csvMaterial, t.csvQty], ...materialRows.map((m) => [m.desc, m.qty]),
      ...(showCost ? [[], [t.csvCost, ''], ...costRows.map((c) => [c.desc, c.qty])] : []),
    ];
    gaEvent('export_excel', { tool: 'betong-kalkylator' });
    downloadCsvRows(rows, 'betong-kalkyl.csv');
  };
  const exportPdf = () => void downloadMaterialPdf({
    title: t.pdfTitle,
    meta: `${shapeLabel}${shape === 'platta' ? ` · ${nf(r.A, 1)} m² · ${t.csvPerim} ${nf(r.P, 1)} m` : ''}`,
    rows: showCost ? [...materialRows, { desc: t.costHdr, qty: '' }, ...costRows] : materialRows,
    filename: 'betong-kalkyl.pdf', tool: 'betong-kalkylator',
    note: t.pdfNote,
  });

  const seedRows = [
    concreteMode === 'sack' ? { desc: t.soConcrete, qty: r.bags } : { desc: t.soReadymix, qty: Math.round(r.volume * 10) / 10 },
    ...(r.meshSheets > 0 ? [{ desc: t.soMesh, qty: r.meshSheets }] : []),
    ...(r.isoBoards > 0 ? [{ desc: t.soIso, qty: r.isoBoards }] : []),
    { desc: t.soLabour, qty: 1, labour: true },
  ];
  const offertUrl = offertHref(seedRows);
  const fakturaUrl = fakturaHref(seedRows);
  const fld = 'lm-tool-field';

  return (
    <div className="lm-tool">
      <div className="lm-tool-split">
      <div className="lm-tool-grid">
        <label className={fld}><span>{t.shapeQ}</span>
          <select value={shape} onChange={(e) => setShape(e.currentTarget.value as Shape)}>
            <option value="platta">{t.oPlatta}</option>
            <option value="balk">{t.oBalk}</option>
            <option value="plint">{t.oPlint}</option>
          </select></label>

        {shape === 'platta' ? (
          <>
            <label className={fld}><span>{t.formL}</span>
              <select value={form} onChange={(e) => setForm(e.currentTarget.value as Form)}>
                <option value="rekt">{t.oRekt}</option>
                <option value="egen">{t.oEgen}</option>
              </select></label>
            {form === 'rekt' ? (
              <>
                <label className={fld}><span>{t.length}</span><input type="number" min="0" inputMode="decimal" value={length} placeholder={en ? 'e.g. 10' : ru ? 'напр. 10' : 't.ex. 10'} onChange={(e) => setLength(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.width}</span><input type="number" min="0" inputMode="decimal" value={width} placeholder={en ? 'e.g. 8' : ru ? 'напр. 8' : 't.ex. 8'} onChange={(e) => setWidth(e.currentTarget.value)} /></label>
              </>
            ) : (
              <>
                <label className={fld}><span>{t.area}</span><input type="number" min="0" inputMode="decimal" value={area} placeholder={en ? 'e.g. 92' : ru ? 'напр. 92' : 't.ex. 92'} onChange={(e) => setArea(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.perim}</span><input type="number" min="0" inputMode="decimal" value={perim} placeholder={en ? 'e.g. 46' : ru ? 'напр. 46' : 't.ex. 46'} onChange={(e) => setPerim(e.currentTarget.value)} /></label>
              </>
            )}
            <label className={fld}><span>{t.thickness}</span><input type="number" min="0" inputMode="decimal" value={thickness} onChange={(e) => setThickness(e.currentTarget.value)} /></label>
            <label className={fld}><span>{t.edgeQ}</span>
              <select value={edge} onChange={(e) => setEdge(e.currentTarget.value)}><option value="ja">{t.yes}</option><option value="nej">{t.no}</option></select></label>
            {edge === 'ja' ? (
              <>
                <label className={fld}><span>{t.edgeW}</span><input type="number" min="0" inputMode="decimal" value={edgeW} onChange={(e) => setEdgeW(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.edgeH}</span><input type="number" min="0" inputMode="decimal" value={edgeH} onChange={(e) => setEdgeH(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.edgeBars}</span><input type="number" min="0" inputMode="numeric" value={edgeBars} onChange={(e) => setEdgeBars(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.barDiaL}</span>
                  <select value={barDia} onChange={(e) => setBarDia(e.currentTarget.value)}><option value="10">Ø10 mm</option><option value="12">Ø12 mm</option><option value="16">Ø16 mm</option></select></label>
              </>
            ) : null}
            <label className={fld}><span>{t.meshQ}</span>
              <select value={mesh} onChange={(e) => setMesh(e.currentTarget.value)}><option value="ja">{t.yes}</option><option value="nej">{t.no}</option></select></label>
            {mesh === 'ja' ? (
              <label className={fld}><span>{t.meshTypeL}</span>
                <select value={meshType} onChange={(e) => setMeshType(e.currentTarget.value)}>
                  <option value="5">K5 (Ø5)</option><option value="6">K6 (Ø6)</option><option value="7">K7 (Ø7)</option><option value="8">K8 (Ø8)</option>
                </select></label>
            ) : null}
            <label className={fld}><span>{t.isoThick}</span><input type="number" min="0" inputMode="decimal" value={isoThick} placeholder={en ? 'e.g. 300' : ru ? 'напр. 300' : 't.ex. 300'} onChange={(e) => setIsoThick(e.currentTarget.value)} /></label>
            <label className={fld}><span>{t.isoGrade}</span>
              <select value={epsGrade} onChange={(e) => { const g = e.currentTarget.value; setEpsGrade(g); setPIso(String(EPS_PRICE[g] || 1400)); }}>
                <option value="S80">{t.oS80}</option>
                <option value="S100">{t.oS100}</option>
                <option value="S150">{t.oS150}</option>
                <option value="S200">{t.oS200}</option>
              </select></label>
            <label className={fld}><span>{t.baseThick}</span><input type="number" min="0" inputMode="decimal" value={baseThick} onChange={(e) => setBaseThick(e.currentTarget.value)} /></label>
          </>
        ) : null}

        {shape === 'balk' ? (
          <>
            <label className={fld}><span>{t.bLen}</span><input type="number" min="0" inputMode="decimal" value={bLen} placeholder={en ? 'e.g. 12' : ru ? 'напр. 12' : 't.ex. 12'} onChange={(e) => setBLen(e.currentTarget.value)} /></label>
            <label className={fld}><span>{t.bWidth}</span><input type="number" min="0" inputMode="decimal" value={bWidth} onChange={(e) => setBWidth(e.currentTarget.value)} /></label>
            <label className={fld}><span>{t.bHeight}</span><input type="number" min="0" inputMode="decimal" value={bHeight} onChange={(e) => setBHeight(e.currentTarget.value)} /></label>
          </>
        ) : null}
        {shape === 'plint' ? (
          <>
            <label className={fld}><span>{t.diam}</span><input type="number" min="0" inputMode="decimal" value={diam} onChange={(e) => setDiam(e.currentTarget.value)} /></label>
            <label className={fld}><span>{t.depth}</span><input type="number" min="0" inputMode="decimal" value={depth} onChange={(e) => setDepth(e.currentTarget.value)} /></label>
            <label className={fld}><span>{t.count}</span><input type="number" min="0" inputMode="numeric" value={count} onChange={(e) => setCount(e.currentTarget.value)} /></label>
          </>
        ) : null}

        <label className={fld}><span>{t.concreteL}</span>
          <select value={concreteMode} onChange={(e) => setConcreteMode(e.currentTarget.value)}><option value="fabrik">{t.oFabrik}</option><option value="sack">{t.oSack}</option></select></label>
        {concreteMode === 'sack' ? <label className={fld}><span>{t.litersPerBag}</span><input type="number" min="0" inputMode="decimal" value={bagYield} onChange={(e) => setBagYield(e.currentTarget.value)} /></label> : null}
        <label className={fld}><span>{t.spill}</span><input type="number" min="0" inputMode="decimal" value={spill} onChange={(e) => setSpill(e.currentTarget.value)} /></label>
      </div>

      <div className="lm-tool-aside">
      <div className="lm-result">
        <div className="lm-result-row lm-result-highlight"><span>{t.rVolume}</span><strong>{nf(r.volume, 2)} m³</strong></div>
        {concreteMode === 'sack'
          ? <div className="lm-result-row lm-result-total"><span>{t.rBags}</span><strong>{nf(r.bags)} {t.pcs}</strong></div>
          : <div className="lm-result-row"><span>{t.rBigBag}</span><span>{nf(r.bigBags, 1)} {t.pcs}</span></div>}
        <div className="lm-result-row"><span>{t.rWater}</span><span>{nf(r.water)} {t.litre}</span></div>
        {shape === 'platta' ? (
          <>
            {r.meshSheets > 0 ? <div className="lm-result-row"><span>{t.rMesh} K{meshType}</span><span>{nf(r.meshSheets)} {t.pcs} · {nf(r.meshKg)} kg</span></div> : null}
            {r.edgeBarKg > 0 ? <div className="lm-result-row"><span>{t.rEdge} Ø{barDia}</span><span>{nf(r.edgeBarsLen)} m · {nf(r.edgeBarKg)} kg</span></div> : null}
            {r.bindKg > 0 ? <div className="lm-result-row"><span>{t.rBind}</span><span>{nf(r.bindKg, 1)} kg</span></div> : null}
            {r.isoVol > 0 ? <div className="lm-result-row"><span>{t.rIso} {epsGrade}</span><span>{nf(r.isoVol, 2)} m³ · {nf(r.isoBoards)} {t.boards}</span></div> : null}
            {r.baseVol > 0 ? <div className="lm-result-row"><span>{t.rBase}</span><span>{nf(r.baseVol, 2)} m³</span></div> : null}
          </>
        ) : null}
      </div>
      </div>
      </div>

      {shape === 'platta' ? (
        <div style={{ marginTop: 16 }}>
          <label className={fld} style={{ maxWidth: 260 }}>
            <span>{t.showCostQ}</span>
            <select value={showCost ? 'ja' : 'nej'} onChange={(e) => setShowCost(e.currentTarget.value === 'ja')}>
              <option value="nej">{t.costNo}</option><option value="ja">{t.costYes}</option>
            </select>
          </label>

          {showCost ? (
            <>
              <div className="lm-tool-grid" style={{ marginTop: 12 }}>
                {concreteMode === 'sack'
                  ? <label className={fld}><span>{t.pSackL}</span><input type="number" min="0" inputMode="decimal" value={pSack} onChange={(e) => setPSack(e.currentTarget.value)} /></label>
                  : <label className={fld}><span>{t.pBetongL}</span><input type="number" min="0" inputMode="decimal" value={pBetong} onChange={(e) => setPBetong(e.currentTarget.value)} /></label>}
                <label className={fld}><span>{t.pMeshL}</span><input type="number" min="0" inputMode="decimal" value={pMesh} onChange={(e) => setPMesh(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.pSteelL}</span><input type="number" min="0" inputMode="decimal" value={pSteel} onChange={(e) => setPSteel(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.pBindL}</span><input type="number" min="0" inputMode="decimal" value={pBind} onChange={(e) => setPBind(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.pIsoL}</span><input type="number" min="0" inputMode="decimal" value={pIso} onChange={(e) => setPIso(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.pBaseL}</span><input type="number" min="0" inputMode="decimal" value={pBase} onChange={(e) => setPBase(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.timprisL}</span><input type="number" min="0" inputMode="decimal" value={timpris} onChange={(e) => setTimpris(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.hRebarL}</span><input type="number" min="0" inputMode="decimal" value={hRebarTon} onChange={(e) => setHRebarTon(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.hM2L}</span><input type="number" min="0" inputMode="decimal" value={hPerM2} onChange={(e) => setHPerM2(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.walkL}</span><input type="number" min="0" inputMode="decimal" value={walkPct} onChange={(e) => setWalkPct(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.bindTonL}</span><input type="number" min="0" inputMode="decimal" value={bindPerTon} onChange={(e) => setBindPerTon(e.currentTarget.value)} /></label>
                <label className={fld}><span>{t.rotQ}</span>
                  <select value={rot} onChange={(e) => setRot(e.currentTarget.value)}><option value="nej">{t.no}</option><option value="ja">{t.yes}</option></select></label>
              </div>

              <div className="lm-result" style={{ marginTop: 12 }}>
                <div className="lm-result-row"><span>{t.cMaterial}</span><span>{kr(r.cMaterial)}</span></div>
                <div className="lm-result-row"><span>{t.cLabour(nf(r.totalHours, 1))}</span><span>{kr(r.cLabour)}</span></div>
                <div className="lm-result-row lm-result-highlight"><span>{t.cSum}</span><strong>{kr(r.cTotal)}</strong></div>
                {r.rotAvdrag > 0 ? <div className="lm-result-row"><span>{t.cRot}</span><span>−{kr(r.rotAvdrag)}</span></div> : null}
                {r.rotAvdrag > 0 ? <div className="lm-result-row lm-result-total"><span>{t.cAfter}</span><strong>{kr(r.cAfterRot)}</strong></div> : null}
                {r.perM2 > 0 ? <div className="lm-result-row"><span>{t.cPerM2}</span><span>{kr(r.perM2)}</span></div> : null}
              </div>
            </>
          ) : null}
        </div>
      ) : null}

      <p className="lm-result-fine">{t.fine}</p>
      <div className="lm-tool-actions" style={{ marginTop: 16 }}>
        <a className="lm-tool-button" href={r.volume > 0 ? offertUrl : undefined} aria-disabled={r.volume <= 0} onClick={() => gaEvent('offert_from_calculator', { tool: 'betong-kalkylator' })}>{t.offert}</a>
        <a className="lm-tool-secondary" href={r.volume > 0 ? fakturaUrl : undefined} aria-disabled={r.volume <= 0} onClick={() => gaEvent('faktura_from_calculator', { tool: 'betong-kalkylator' })}>{t.faktura}</a>
        <button type="button" className="lm-tool-secondary" onClick={exportCsv} disabled={r.volume <= 0}>{t.excel}</button>
        <button type="button" className="lm-tool-secondary" onClick={exportPdf} disabled={r.volume <= 0}>{t.pdf}</button>
      </div>
    </div>
  );
}
