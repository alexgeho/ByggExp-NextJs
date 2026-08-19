import MallToPdfTool, { type MallConfig } from './MallToPdfTool';

// Free employment-contract template for construction companies. Covers the
// written information an employer must give under LAS/EU directive (parties,
// role, start, form of employment, pay, working hours, collective agreement).
const CONFIG: MallConfig = {
  pdfHeading: 'Anställningsavtal',
  subtitle:
    'Fyll i uppgifterna och ladda ner ett färdigt anställningsavtal för byggföretag som PDF eller Excel. Klicka på "Fyll i exempel" för att se hur det fylls i. Anpassa alltid till ert kollektivavtal.',
  filePrefix: 'anstallningsavtal',
  stampField: 'employee',
  signatures: ['Arbetsgivarens underskrift', 'Arbetstagarens underskrift'],
  fields: [
    { name: 'employer', label: 'Arbetsgivare (namn / org.nr)', placeholder: 'Företag, org.nr och adress' },
    { name: 'employee', label: 'Arbetstagare (namn / person.nr)', placeholder: 'Namn, personnummer och adress' },
    { name: 'role', label: 'Befattning / yrkesroll', placeholder: 'T.ex. Snickare' },
    { name: 'start', label: 'Anställningens startdatum', type: 'date' },
    { name: 'form', label: 'Anställningsform', placeholder: 'Tillsvidare / särskild visstidsanställning (SÄVA) / provanställning' },
    { name: 'probation', label: 'Provanställning (om tillämpligt)', placeholder: 'T.ex. 6 månader, t.o.m. 2026-12-31' },
    { name: 'workplace', label: 'Arbetsplats / arbetsområde', placeholder: 'T.ex. Företagets projekt i Stockholmsområdet' },
    { name: 'hours', label: 'Arbetstid (sysselsättningsgrad)', placeholder: 'T.ex. Heltid 40 h/vecka' },
    { name: 'pay', label: 'Lön och löneform', placeholder: 'T.ex. Månadslön 34 000 kr / timlön 210 kr' },
    { name: 'payday', label: 'Löneutbetalning', placeholder: 'T.ex. den 25:e varje månad' },
    { name: 'collective', label: 'Kollektivavtal', placeholder: 'T.ex. Byggavtalet (Byggnads / Byggföretagen)' },
    { name: 'vacation', label: 'Semester', placeholder: 'T.ex. 25 dagar enligt semesterlagen / kollektivavtal' },
    { name: 'noticePeriod', label: 'Uppsägningstid', placeholder: 'Enligt LAS / kollektivavtal' },
    { name: 'other', label: 'Övriga villkor', type: 'textarea', placeholder: 'T.ex. tjänstebil, förmåner, sekretess' },
  ],
  example: {
    employer: 'Ditt Bygg AB, 559000-0000, Storgatan 1',
    employee: 'Erik Eriksson, 900101-0000, Bäckvägen 5',
    role: 'Snickare',
    form: 'Tillsvidareanställning med inledande provanställning',
    probation: '6 månader',
    workplace: 'Företagets projekt i Stockholmsområdet',
    hours: 'Heltid, 40 timmar per vecka',
    pay: 'Timlön 215 kr enligt Byggavtalet',
    payday: 'Den 25:e varje månad',
    collective: 'Byggavtalet (Byggnads / Byggföretagen)',
    vacation: '25 semesterdagar enligt semesterlagen och kollektivavtal',
    noticePeriod: 'Enligt LAS och kollektivavtal',
    other: 'ID06-kort tillhandahålls av arbetsgivaren. Arbetskläder och skyddsutrustning ingår.',
  },
};

export default function AnstallningsavtalMallTool() {
  return <MallToPdfTool config={CONFIG} />;
}
