import puppeteer from 'puppeteer-core';
const OUT='/private/tmp/claude-501/-Users-alexandergerhard/6241b552-2912-4c16-a7ca-842a899b1d18/scratchpad/w45/';
const DL='/private/tmp/claude-501/-Users-alexandergerhard/6241b552-2912-4c16-a7ca-842a899b1d18/scratchpad/dl5';
const b = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new'});
const CSS='[class*=cookie],[class*=Cookie],[aria-label="Öppna AI-assistenten"],[aria-label="Kopiera länk"],[aria-label="Fler val"],header,nav{display:none!important}';
async function page(u,w,dsf){const p=await b.newPage();await p.setViewport({width:w,height:2400,deviceScaleFactor:dsf});await p.goto('https://byggexp.se/sv/verktyg/'+u,{waitUntil:'networkidle2',timeout:60000});await p.addStyleTag({content:CSS});return p;}
const setv=`window.setv=(el,v)=>{const proto=el.tagName==='SELECT'?HTMLSelectElement.prototype:el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(proto,'value').set.call(el,v);el.dispatchEvent(new Event(el.tagName==='SELECT'?'change':'input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));};`;
async function clip(p,box,name){await p.screenshot({path:OUT+name,clip:{x:box.x,y:box.y,width:box.w,height:box.h},captureBeyondViewport:true});}
// egenkontroll series
for (const s of ['egenkontroll-el-mall','egenkontroll-vvs-mall','egenkontroll-bygg-mall']) {
  const p=await page(s,430,3); await p.evaluate(new Function(setv+`document.querySelectorAll('input[aria-label=Kontrollpunkt]').forEach(i=>setv(i,i.placeholder));`)); await new Promise(r=>setTimeout(r,500));
  const boxes=await p.evaluate(()=>{const out=[];const ins=[...document.querySelectorAll('input[aria-label=Kontrollpunkt]')];
    const fit=ins.filter(i=>i.scrollWidth<=i.clientWidth+1).slice(0,2);
    for(const i of fit){const sel=i.closest('div').parentElement.querySelector('select')||i.parentElement.parentElement.querySelector('select');const a=i.getBoundingClientRect(),c=(sel||i).getBoundingClientRect();out.push({x:a.left-8,y:a.top+scrollY-8,w:a.width+16,h:c.bottom-a.top+16,t:i.value});}
    const btn=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='PDF');const r=btn.getBoundingClientRect();
    const lab=[...document.querySelectorAll('.lead-magnet-tool *')].find(e=>/^A\. /.test(e.innerText||'')&&e.children.length===0);
    return out;});
  console.log(s, JSON.stringify(boxes.map(b=>b.t)));
  let k=0; for(const bx of boxes) await clip(p,bx,`${s}-${k++}.png`);
  await p.close();
}
// takstolar
{const p=await page('takstolar-kalkylator',430,3);await p.evaluate(new Function(setv+`setv(document.querySelector('.lead-magnet-tool input'),'12');`));await new Promise(r=>setTimeout(r,600));const el=await p.$('.lead-magnet-tool');await el.screenshot({path:OUT+'takstolar.png'});const bx=await p.evaluate(()=>{const e=[...document.querySelectorAll('.lead-magnet-tool p, .lead-magnet-tool div')].find(x=>x.children.length===0&&(x.innerText||'').startsWith('En uppskattning'));const r=e.getBoundingClientRect();return {x:r.left-4,y:r.top+scrollY-6,w:r.width+8,h:r.height+12};});await p.screenshot({path:OUT+'takstolar-fine.png',clip:{x:bx.x,y:bx.y,width:bx.w,height:bx.h},captureBeyondViewport:true});await p.close();}
// entreprenadkontrakt PDF
if(0){const p=await page('entreprenadkontrakt-mall',1280,1);const c=await p.createCDPSession();await c.send('Browser.setDownloadBehavior',{behavior:'allow',downloadPath:DL});
 await p.evaluate(()=>{[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='Fyll i exempel').click();});await new Promise(r=>setTimeout(r,800));
 await p.evaluate(()=>{[...document.querySelectorAll('button')].find(x=>x.innerText.replace(/\s+/g,' ').trim()==='PDF').click();});await new Promise(r=>setTimeout(r,5000));await p.close();}
await b.close();

// entreprenadkontrakt form fields (mobile, example filled)
{const b2=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new'});
 const p=await b2.newPage();await p.setViewport({width:430,height:2400,deviceScaleFactor:3});
 await p.goto('https://byggexp.se/sv/verktyg/entreprenadkontrakt-mall',{waitUntil:'networkidle2',timeout:60000});await p.addStyleTag({content:CSS});
 await p.evaluate(()=>{[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='Fyll i exempel').click();});await new Promise(r=>setTimeout(r,800));
 const boxes=await p.evaluate(()=>['Avtalstyp','Prismodell','Betalplan'].map(t=>{const l=[...document.querySelectorAll('.lead-magnet-tool label')].find(x=>x.innerText.trim().startsWith(t));const r=l.getBoundingClientRect();return {x:r.left-6,y:r.top+scrollY-6,w:r.width+12,h:r.height+12,t};}));
 console.log(JSON.stringify(boxes.map(b=>[b.t,Math.round(b.h)])));
 let k=0;for(const bx of boxes) await p.screenshot({path:OUT+'kontrakt-'+(k++)+'.png',clip:{x:bx.x,y:bx.y,width:bx.w,height:bx.h},captureBeyondViewport:true});
 await b2.close();}
