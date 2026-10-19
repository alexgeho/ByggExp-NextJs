import puppeteer from 'puppeteer-core';
const OUT='/private/tmp/claude-501/-Users-alexandergerhard/6241b552-2912-4c16-a7ca-842a899b1d18/scratchpad/';
const b = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new'});
const p = await b.newPage(); await p.setViewport({width:430,height:1000,deviceScaleFactor:3});
await p.goto('https://byggexp.se/sv/verktyg',{waitUntil:'networkidle2',timeout:60000});
await p.addStyleTag({content:'[class*=cookie],[class*=Cookie],[aria-label="Öppna AI-assistenten"],header,nav{display:none!important}'});
for (const [slug,name] of [['moms-kalkylator','c1'],['betong-kalkylator','c2'],['ata-mall','c3'],['offert-mall','c4']]) {
  const a = await p.$(`a[href$="/verktyg/${slug}"]`); await a.screenshot({path:OUT+name+'.png'}); }
await b.close();
