exec(open('comp3.py').read().split('o,qo=comp')[0])  # helpers
from PIL import Image
# project economy screen, cropped ~1.7:1 to match the monitor's real proportions (no stretch)
ek=Image.open(R+'public/landing/features/9ekonomi.webp').convert('RGB').crop((255,45,2135,1151))
o,_=comp(Image.open('../ph/office-b1-2x.png'),ek,(1700,600),200,22,4,
         [(1007,284.6),(2311,229.3),(2311,1067.2),(1007,987.2)])
c=o.crop(tuple(int(v*S) for v in (680,140,2432,1385)))
c.save(R+'public/landing/hero/kontor.webp',quality=93,method=6)
o.crop((1400,250,3600,1700)).resize((1100,725)).save('chk-ek.jpg')
