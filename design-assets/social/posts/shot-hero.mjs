// S16: hero collage (office + site photos with real screens) and store badges from the live home page, transparent bg
import puppeteer from 'puppeteer-core';
const OUT = new URL('src/', import.meta.url).pathname;
const b = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new'});
const p = await b.newPage(); await p.setViewport({width:1440,height:1000,deviceScaleFactor:2});
await p.goto('https://byggexp.se/sv',{waitUntil:'networkidle2',timeout:60000});
await p.addStyleTag({content:'[class*=cookie],[class*=Cookie],[aria-label="Öppna AI-assistenten"],.hero-v2-bg,.hero-v2-scrim{display:none!important} html,body,.hero-v2,.hero-v2-visual{background:transparent!important}'});
await new Promise(r=>setTimeout(r,1500));
for (const [sel, name] of [['.hero-v2-visual','hero.png'],['.hero-v2-stores','stores.png']]) {
  const el = await p.$(sel);
  if (!el) { console.log('missing', sel); continue; }
  await el.screenshot({path:OUT+name, omitBackground:true});
  console.log(name, await el.boundingBox());
}
await b.close();
