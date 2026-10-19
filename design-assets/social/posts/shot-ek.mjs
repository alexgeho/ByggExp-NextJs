import puppeteer from 'puppeteer-core';
const OUT='/private/tmp/claude-501/-Users-alexandergerhard/6241b552-2912-4c16-a7ca-842a899b1d18/scratchpad/';
const b = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new'});
async function shot(url, name, prep, w=430, dsf=3) {
  const p = await b.newPage(); await p.setViewport({width:w,height:2400,deviceScaleFactor:dsf});
  await p.goto('https://byggexp.se/sv/verktyg/'+url,{waitUntil:'networkidle2',timeout:60000});
  await p.addStyleTag({content:'[class*=cookie],[class*=Cookie],[aria-label="Öppna AI-assistenten"],[aria-label="Kopiera länk"],[aria-label="Fler val"]{display:none!important}'});
  await p.evaluate(prep);
  await new Promise(r=>setTimeout(r,800));
  const el = await p.$('.lead-magnet-tool');
  await el.screenshot({path:OUT+name});
  console.log(name, await el.boundingBox());
  await p.close();
}
const setv = `window.setv=(el,v)=>{const proto=el.tagName==='SELECT'?HTMLSelectElement.prototype:el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(proto,'value').set.call(el,v);el.dispatchEvent(new Event(el.tagName==='SELECT'?'change':'input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));}`;
if(0) await shot('ob-overtid-kalkylator','m-ob.png', new Function(setv+`;
  document.querySelectorAll('.lead-magnet-tool p').forEach(p=>{if(p.innerText.length>80)p.style.display='none'});
  setv(document.querySelector('input[type=number]'),'230');`), 620, 2);
await shot('egenkontroll-vatrum-mall','m-ek.png', new Function(setv+`;
  document.querySelectorAll('input[aria-label=Kontrollpunkt]').forEach(i=>setv(i,i.placeholder));`), 430, 3);
if(0) await shot('faktura-mall','m-fk.png', new Function(setv+`;
  const t=[...document.querySelectorAll('.lead-magnet-tool input')];
  setv(t.find(i=>i.placeholder==='Företagsnamn'),'Byggfirman AB');
  setv(t.find(i=>i.placeholder==='Kundens namn'),'Anna Karlsson');
  const d=t.filter(i=>i.placeholder==='T.ex. Arbete'), n=t.filter(i=>i.type==='number');
  setv(d[0],'ÄTA 4: Extra eluttag i garage');setv(n[0],'3');setv(n[1],'850');
  document.querySelectorAll('[aria-label="Ta bort rad"]')[1].click();`), 1280, 2);
await b.close();
