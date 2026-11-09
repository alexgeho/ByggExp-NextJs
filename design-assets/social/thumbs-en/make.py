import sys
from PIL import Image, ImageDraw, ImageFont
import numpy as np
D='C:/Users/Hadjie/Downloads/'
FONT='C:/Users/Hadjie/ByggExp-NextJs/design-assets/social/shorts/fonts/montserrat/Montserrat.ttf'
NAVY=(11,43,79); BLUE=(7,133,244); BG=(247,242,237)
def font(sz,w):
    f=ImageFont.truetype(FONT,sz); f.set_variation_by_name(w); return f
SZ=int(sys.argv[1]) if len(sys.argv)>1 else 62
W=sys.argv[2] if len(sys.argv)>2 else 'Bold'
LH=int(sys.argv[3]) if len(sys.argv)>3 else 60
BSZ=int(sys.argv[4]) if len(sys.argv)>4 else 24
JOBS=[('Frame 6039.png',['Kom igång','med appen','1 av 2, admin'],'Officiell guide','test_sv.png')] if 'test' in sys.argv else [
 ('Frame 6039.png',['Get started','with the app','1 of 2, admin'],'Official guide','Frame 6039 EN.png'),
 ('Frame 6040.png',['Get started','with the app','2 of 2, admin'],'Official guide','Frame 6040 EN.png'),
 ('Frame 6041 (1).png',['Get started','with the app','for workers'],'Official guide','Frame 6041 EN.png')]
for src,lines,btn,out in JOBS:
    im=Image.open(D+src).convert('RGBA')
    d=ImageDraw.Draw(im)
    if 'test' not in sys.argv or 'clear' in sys.argv:
        d.rectangle([40,212,500,500],fill=BG)
    f=font(SZ,W); y0=int(sys.argv[5]) if len(sys.argv)>5 and sys.argv[5].isdigit() else 228
    for i,t in enumerate(lines):
        # align cap top: offset by bbox top of 'K'
        top=f.getbbox('K')[1]
        d.text((52-f.getbbox(t)[0], y0+i*LH-top), t, font=f, fill=NAVY)
    bf=font(BSZ,'Bold')
    tb=bf.getbbox(btn); tw=tb[2]-tb[0]
    x0,y0b,h=52,438,52; pad=(270-52-(bf.getbbox('Officiell guide')[2]-bf.getbbox('Officiell guide')[0]))//2
    x1=x0+tw+2*pad
    d.rounded_rectangle([x0,y0b,x1,y0b+h-1],radius=7,outline=BLUE,width=3,fill=BG)
    ct=bf.getbbox('O')
    d.text((x0+pad-tb[0], y0b+(h-(ct[3]-ct[1]))/2-ct[1]), btn, font=bf, fill=BLUE)
    im.save(out if 'test' in sys.argv else D+out)
    print('saved',out)
