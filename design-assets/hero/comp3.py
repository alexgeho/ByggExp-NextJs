import numpy as np
from PIL import Image, ImageFilter
from fitq import region, fit_quad
R='/Users/alexandergerhard/Bygg-exp-dev/ByggExp-NextJs/'
S=1.5  # 2x photo -> 3x canvas, screens rendered natively at that size
def coeffs(dst, src):
    A=[];B=[]
    for (x,y),(u,v) in zip(dst,src):
        A+=[[x,y,1,0,0,0,-u*x,-u*y],[0,0,0,x,y,1,-v*x,-v*y]]; B+=[u,v]
    return np.linalg.solve(np.array(A,float),np.array(B,float)).tolist()
def comp(photo, shot, seed, thr, sat, grow, quad=None):
    a=np.asarray(photo.convert('RGB')).astype(int)
    seen=region(a,seed,thr,sat)
    q=quad or fit_quad(seen)
    W,H=photo.size; big=photo.convert('RGB').resize((int(W*S),int(H*S)),Image.LANCZOS)
    qs=[(x*S,y*S) for x,y in q]
    sw,sh=shot.size
    ss=2; canvas=(big.width*ss,big.height*ss)
    warped=shot.transform(canvas,Image.PERSPECTIVE,coeffs([(x*ss,y*ss) for x,y in qs],[(0,0),(sw,0),(sw,sh),(0,sh)]),Image.BICUBIC).resize(big.size,Image.LANCZOS)
    mk=Image.fromarray((seen*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(grow*2+1)).resize(big.size,Image.LANCZOS).filter(ImageFilter.GaussianBlur(1))
    big=big.filter(ImageFilter.UnsharpMask(2.2,70,2))  # soften the AI upscale look
    warped=warped.filter(ImageFilter.UnsharpMask(1.2,90,1))  # crisp UI text
    big.paste(warped,(0,0),mk); return big,q
ap=Image.open(R+'public/landing/features/1arbetspass.webp').convert('RGB').crop((250,40,1900,1200))
# drop the "Raderad användare" row (deleted user) and close the gap
pl=ap.copy(); pl.paste(ap.crop((305,862,ap.width,ap.height)),(305,789))  # content only, sidebar untouched
pl=pl.crop((0,0,1565,1072))
o,qo=comp(Image.open('o1-2x.png'),pl,(860,640),195,22,5)
print('office',[tuple(round(v) for v in p) for p in qo])
o.save('office-3x.png')
ph=Image.open(R+'public/landing/screen-shift.png').convert('RGB').crop((72,72,1248,2628)); ph=ph.crop((0,120,ph.width,ph.height))
w,qw=comp(Image.open("v2-2x.png"),ph,(1560,850),200,24,3,[(1516.2,599.7),(1738.9,597.9),(1684.9,1107.7),(1453.2,1085.5)])
print('worker',[tuple(round(v) for v in p) for p in qw])
w.save('worker-3x.png')
# same framing as A6 (crops were on the 2x canvas)
o.crop(tuple(int(v*S) for v in (318,186,2029,1402))).save(R+'public/landing/hero/kontor.webp',quality=93,method=6)
w.crop(tuple(int(v*S) for v in (791,104,1809,1506))).save(R+'public/landing/hero/bygget.webp',quality=93,method=6)
o.crop(tuple(int(v*S) for v in (300,180,1500,1150))).save('chk-o3.jpg',quality=90)
w.crop(tuple(int(v*S) for v in (1380,520,1820,1180))).save('chk-w3.jpg',quality=90)
