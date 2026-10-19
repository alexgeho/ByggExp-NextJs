import puppeteer from 'puppeteer-core';
const OUT='/private/tmp/claude-501/-Users-alexandergerhard/6241b552-2912-4c16-a7ca-842a899b1d18/scratchpad/dl3';
const b = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new'});
const setv = `window.setv=(el,v)=>{const proto=el.tagName==='SELECT'?HTMLSelectElement.prototype:el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(proto,'value').set.call(el,v);el.dispatchEvent(new Event(el.tagName==='SELECT'?'change':'input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));};window.btn=t=>[...document.querySelectorAll('button')].find(x=>x.innerText.trim()===t);`;
async function run(url, js) {
  const p = await b.newPage(); await p.setViewport({width:1280,height:2000});
  const c = await p.createCDPSession(); await c.send('Browser.setDownloadBehavior',{behavior:'allow',downloadPath:OUT});
  await p.goto('https://byggexp.se/sv/verktyg/'+url,{waitUntil:'networkidle2',timeout:60000});
  await p.evaluate(new Function(setv+js)); await new Promise(r=>setTimeout(r,4000)); await p.close();
}
await run('ata-mall', `btn('Fyll i exempel').click();
  setTimeout(()=>{const i=[...document.querySelectorAll('input')].find(x=>x.placeholder==='Ja / Nej'); setv(i,'Nej'); const dt=document.querySelector('input[type=date]'); setv(dt,'2026-10-12'); btn('Ladda ner PDF').click();},500);`);
await run('faktura-mall', `const t=[...document.querySelectorAll('input')];
  setv(t.find(i=>i.placeholder==='Företagsnamn'),'Ditt Bygg AB');
  setv(t.find(i=>i.placeholder==='Kundens namn'),'Beställaren AB'); setv(t.find(i=>i.placeholder==='t.ex. Bankgiro 123-4567'),'Bankgiro 123-4567');
  const d=t.filter(i=>i.placeholder==='T.ex. Arbete'), n=t.filter(i=>i.type==='number');
  setv(d[0],'ÄTA 4: Extra eluttag i garage, 3 st');setv(n[0],'3');setv(n[1],'850');
  document.querySelectorAll('[aria-label="Ta bort rad"]')[1].click();
  setTimeout(()=>btn('Ladda ner faktura (PDF)').click(),500);`);
await b.close();
