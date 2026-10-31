"""Pinned overview as cards (owner 2026-10-31, S33): one feature per card, "N / 13 · Name",
benefit headline, 3D, 2 value checks, footer on every card; last card = Testa gratis.
python3 overview_cards.py -> ~/Desktop/SMM/poster/00-oversikt-kort/01..13.jpg + sheet"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw
import make_3d as m, overview_3d as o
OUT = Path.home()/"Desktop/SMM/poster/00-oversikt-kort"; OUT.mkdir(parents=True, exist_ok=True)
VAL = {"Tidrapport":("Ingen jakt på tidlappar","Lönen klar på minuter"),
"Uppgifter":("Inget faller mellan stolarna","Du ser vad som är klart"),
"Närvaro":("Slipp ringa runt","Frånvaro syns direkt"),
"Foto":("Bevis om kunden klagar","Allt samlat per projekt"),
"Planering":("Ingen dubbelbokning","Alla ser sin vecka"),
"Verktyg":("Färre borttappade verktyg","Du vet vem som har vad"),
"Offerter":("Snabbare svar till kunden","Proffsig offert med din logga"),
"Fakturor":("Ingen timme glöms bort","Betalt snabbare"),
"Ekonomi":("Upptäck förlust i tid","Se vilka jobb som lönar sig"),
"Utlägg":("Ingen pärm i bilen","Kvittot direkt på projektet"),
"Löner":("OB räknas automatiskt","Färre fel i lönen"),
"Integrationer":("Ingen dubbelinmatning","Bokföringen klar i Fortnox")}
size = m.headline_size(); N = len(o.ORDER)+1
def checks(d, items, y):
    ft = m.font(44, "Medium"); w = max(d.textlength(t, font=ft) for t in items)+76; x=(m.W-w)/2
    for i,t in enumerate(items):
        yy=y+i*76
        d.ellipse((x,yy+4,x+48,yy+52), fill=m.GREEN_BG)
        d.line((x+13,yy+29,x+21,yy+37), fill=m.GREEN, width=6); d.line((x+21,yy+37,x+36,yy+19), fill=m.GREEN, width=6)
        d.text((x+76,yy), t, font=ft, fill=m.NAVY)
def card(k, name, lines, illus, vals):
    f = Image.new("RGBA",(m.W,m.H),(255,255,255,255)); d = ImageDraw.Draw(f)
    ft = m.font(34, "Medium"); lab = f"{k} / {N}" + (f"  ·  {name}" if name else "")
    d.text(((m.W-d.textlength(lab,font=ft))/2, 64), lab, font=ft, fill=(0x94,0xA8,0xBC))
    m.headline(d, lines, size, 150)
    hb = 150+92+d.textbbox((0,0), m.plain(lines[-1]), font=m.font(size))[3]
    illus = illus.crop(m.ink(illus)); top, bot = hb+70, 1060-70
    k_ = min(1, (bot-top)/illus.height, 860/illus.width)
    illus = illus.resize((round(illus.width*k_), round(illus.height*k_)), Image.LANCZOS)
    f.alpha_composite(illus, ((m.W-illus.width)//2, round(top+(bot-top-illus.height)/2)))
    checks(d, vals, 1060); m.footer(f, d, True)
    return f.convert("RGB")
out=[]
for k,(pid,name) in enumerate(o.ORDER,1):
    _, lines, art, _, _ = o.POSTS[pid]
    il,_ = m.layer(900); il.alpha_composite(m.art(art, 820), ((m.W-820)//2, 0))
    out.append(card(k, name, lines, il, VAL[name]))
phone = Image.open(m.ROOT/"public/landing/hero/phone-3d.webp").convert("RGBA")
out.append(card(N, "", ("Testa *gratis*","i *14 dagar*"), phone, ("Ingen bindningstid","Gratis flytt av data")))
for old in OUT.glob("*.jpg"): old.unlink()
for k,im in enumerate(out,1): im.save(OUT/f"{k:02d}.jpg", quality=95, subsampling=0)
t=[im.resize((360,450)) for im in out]; cols=7
sh=Image.new("RGB",(cols*372-12,2*462-12),(225,228,235))
for i,im in enumerate(t): sh.paste(im,((i%cols)*372,(i//cols)*462))
sh.save(OUT.parent/"00-oversikt-kort – alla.jpg", quality=92); 
