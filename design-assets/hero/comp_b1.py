import sys
sys.argv=['x']
exec(open('comp3.py').read().split('o,qo=comp')[0])  # reuse helpers + Arbetspass screen (pl)
from PIL import Image
o,_=comp(Image.open('../ph/office-b1-2x.png'),pl,(1700,600),200,22,4,
         [(1007,284.6),(2311,229.3),(2311,1067.2),(1007,987.2)])
o.save('office-b1-3x.png')
c=o.crop(tuple(int(v*S) for v in (60,0,2401,1664)))
print(c.size)
c.save(R+'public/landing/hero/kontor.webp',quality=93,method=6)
o.crop((1400,250,3600,1700)).resize((1100,725)).save('chk-b1.jpg')
