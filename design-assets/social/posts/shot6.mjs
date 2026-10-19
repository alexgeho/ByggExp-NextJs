import puppeteer from 'puppeteer-core';
const OUT='/private/tmp/claude-501/-Users-alexandergerhard/6241b552-2912-4c16-a7ca-842a899b1d18/scratchpad/';
const b = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new'});
const setv = `window.setv=(el,v)=>{const proto=el.tagName==='SELECT'?HTMLSelectElement.prototype:el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(proto,'value').set.call(el,v);el.dispatchEvent(new Event(el.tagName==='SELECT'?'change':'input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));};window.btn=t=>[...document.querySelectorAll('button')].find(x=>x.innerText.trim()===t);`;
async function shot(url, name, js) {
  const p = await b.newPage(); await p.setViewport({width:430,height:2400,deviceScaleFactor:3});
  await p.goto('https://byggexp.se/sv/verktyg/'+url,{waitUntil:'networkidle2',timeout:60000});
  await p.addStyleTag({content:'[class*=cookie],[class*=Cookie],[aria-label="Öppna AI-assistenten"]{display:none!important}'});
  await p.evaluate(new Function(setv+js)); await new Promise(r=>setTimeout(r,1200));
  const el = await p.$('.lead-magnet-tool'); await el.screenshot({path:OUT+name});
  const boxes = await p.evaluate(()=>{const top=document.querySelector('.lead-magnet-tool').getBoundingClientRect().top;return [...document.querySelectorAll('.lead-magnet-tool label, .lead-magnet-tool .lm-result-row')].map(e=>{const r=e.getBoundingClientRect();return (e.innerText||'').split('\n')[0].slice(0,30)+' y='+Math.round(r.top-top)+'-'+Math.round(r.bottom-top)})});
  console.log(name+'\n'+boxes.join('\n')); await p.close();
}
await shot('ata-mall','m-ata.png',`btn('Fyll i exempel').click();`);
await shot('faktura-mall','m-fk2.png',`const t=[...document.querySelectorAll('input')];
  const d=t.filter(i=>i.placeholder==='T.ex. Arbete'), n=t.filter(i=>i.type==='number');
  setv(d[0],'ÄTA 4: Extra eluttag');setv(n[0],'3');setv(n[1],'850');
  document.querySelectorAll('[aria-label="Ta bort rad"]')[1].click();`);
await b.close();
