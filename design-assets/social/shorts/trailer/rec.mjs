// live recording of byggexp.se tools via CDP screencast; frames + timestamps + click points
import puppeteer from 'puppeteer-core';
import fs from 'fs';
const OUT = process.argv[2], ONLY = process.argv[3];
const CHROME = process.platform === 'win32' ? 'C:/Program Files/Google/Chrome/Application/chrome.exe' : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const b = await puppeteer.launch({executablePath:CHROME, headless:'new'});
const CSS='[class*=cookie],[class*=Cookie],[aria-label="Öppna AI-assistenten"],[aria-label="Kopiera länk"],[aria-label="Fler val"],header,nav{display:none!important} html{scroll-behavior:auto!important;zoom:2}';
const sleep = ms => new Promise(r=>setTimeout(r,ms));
async function rec(name, url, vw, vh, top, act, tail) {
  if (ONLY && ONLY !== name) return;
  const dir = `${OUT}/${name}`; fs.rmSync(dir,{recursive:true,force:true}); fs.mkdirSync(dir,{recursive:true});
  const p = await b.newPage(); await p.setViewport({width:vw*2,height:vh*2,deviceScaleFactor:1});
  await p.goto('https://byggexp.se'+url,{waitUntil:'networkidle2',timeout:60000});
  await p.addStyleTag({content:CSS});
  await p.evaluate(top=>{const t=document.querySelector('.lead-magnet-tool');const h=[...document.querySelectorAll('h2,h3')].find(e=>e.innerText.trim()==='Kalkylatorer');scrollTo(0,t?t.getBoundingClientRect().top+scrollY+top*2:(h?h.getBoundingClientRect().top+scrollY-40:0))}, top);
  await p.evaluate(()=>document.querySelectorAll('.lead-magnet-tool p').forEach(e=>{if(e.innerText.length>80)e.style.display='none'}));
  if (url.includes('faktura')) await p.evaluate(()=>{const setv=(el,v)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));};
    setv(document.querySelector('input[placeholder="Företagsnamn"]'),'Byggfirman AB');setv(document.querySelector('input[placeholder="Kundens namn"]'),'Anna Karlsson');setv(document.querySelector('input[placeholder="t.ex. Bankgiro 123-4567"]'),'Bankgiro 123-4567');
    document.querySelectorAll('[aria-label="Ta bort rad"]')[1]?.click();});
  await sleep(800);
  const c = await p.createCDPSession(); await c.send('Browser.setDownloadBehavior',{behavior:'deny'}).catch(()=>{}); const meta=[]; let n=0; const t0=Date.now(); const taps=[];
  c.on('Page.screencastFrame', async f => { const i=n++; fs.writeFileSync(`${dir}/${String(i).padStart(5,'0')}.jpg`, Buffer.from(f.data,'base64')); meta.push([i,(Date.now()-t0)/1000]); c.send('Page.screencastFrameAck',{sessionId:f.sessionId}).catch(()=>{}); });
  await c.send('Page.startScreencast',{format:'jpeg',quality:92,everyNthFrame:1,maxWidth:vw*2,maxHeight:vh*2});
  const sel = async el => { await tap(el); await el.click({clickCount:3}); };
  const tap = async el => { const r = await el.boundingBox(); const x=r.x+Math.min(r.width/2,120), y=r.y+r.height/2; taps.push([(Date.now()-t0)/1000,x,y]); await p.mouse.click(x,y); };
  await sleep(700);
  await act(p, tap, sleep, sel);
  await sleep(tail);
  await c.send('Page.stopScreencast');
  fs.writeFileSync(`${dir}/meta.json`, JSON.stringify({vw,vh,dur:(Date.now()-t0)/1000,frames:meta,taps}));
  console.log(name, n, 'frames', ((Date.now()-t0)/1000).toFixed(1)+'s');
  await p.close();
}
const D = 110; // human typing speed, real time
const q = (p,s) => p.$(s);
const byPh = (p,ph,i=0) => p.$$(`.lead-magnet-tool input[placeholder="${ph}"]`).then(a=>a[i]);
await rec('rot','/sv/verktyg/rot-avdrag-kalkylator',1280,720,-40, async (p,tap,sleep)=>{
  await tap(await byPh(p,'t.ex. 40000')); await p.keyboard.type('48000',{delay:D}); await sleep(900);
  await tap(await byPh(p,'valfritt')); await p.keyboard.type('15000',{delay:D});
}, 2600);
await rec('betong','/sv/verktyg/betong-kalkylator',1280,800,-24, async (p,tap,sleep,sel)=>{
  await sel(await byPh(p,'t.ex. 10')); await p.keyboard.type('6',{delay:D}); await sleep(900);
  await sel(await byPh(p,'t.ex. 8')); await p.keyboard.type('4',{delay:D});
}, 3000);
await rec('faktura','/sv/verktyg/faktura-mall',1280,900,-24, async (p,tap,sleep,sel)=>{
  await tap(await byPh(p,'T.ex. Arbete',0)); await p.keyboard.type('Badrum, arbete',{delay:80});
  const nums = await p.$$('.lead-magnet-tool input[type=number]');
  await sel(nums[0]); await p.keyboard.type('40',{delay:D});
  await tap(nums[1]); await p.keyboard.type('650',{delay:D}); await sleep(1600);
  const pdf = await p.evaluateHandle(()=>[...document.querySelectorAll('.lead-magnet-tool button')].find(b=>b.innerText.includes('PDF')));
  await tap(pdf);
}, 1800);
await rec('hub','/sv/verktyg',900,506,0, async (p,tap,sleep)=>{
  for (let i=0;i<150;i++){ await p.evaluate(()=>scrollBy(0,2)); await sleep(16);}
}, 1500);
await b.close();
