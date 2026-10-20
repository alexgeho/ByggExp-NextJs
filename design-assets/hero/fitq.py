import numpy as np
from PIL import Image, ImageDraw
def region(a, seed, thr, sat):
    m=(a.min(2)>thr)&((a.max(2)-a.min(2))<sat)
    H,W=m.shape; seen=np.zeros_like(m,bool); st=[(seed[1],seed[0])]
    while st:
        y,x=st.pop()
        if y<0 or x<0 or y>=H or x>=W or seen[y,x] or not m[y,x]: continue
        seen[y,x]=1; st+=[(y+1,x),(y-1,x),(y,x+1),(y,x-1)]
    return seen
def fit_quad(seen, frac=0.6):
    ys,xs=np.nonzero(seen); y0,y1=ys.min(),ys.max(); x0,x1=xs.min(),xs.max()
    def band(lo,hi): c=(lo+hi)/2; h=(hi-lo)*frac/2; return int(c-h),int(c+h)
    L=[];R=[];T=[];B=[]
    for y in range(*band(y0,y1)):
        r=np.nonzero(seen[y])[0]
        if len(r): L.append((y,r.min())); R.append((y,r.max()))
    for x in range(*band(x0,x1)):
        c=np.nonzero(seen[:,x])[0]
        if len(c): T.append((x,c.min())); B.append((x,c.max()))
    def robust(pts):  # fit v=a*u+b, drop outliers once
        p=np.array(pts,float); a,b=np.polyfit(p[:,0],p[:,1],1)
        r=np.abs(p[:,1]-(a*p[:,0]+b)); k=r<np.percentile(r,70)+1
        return np.polyfit(p[k,0],p[k,1],1)
    l,r,t,b=robust(L),robust(R),robust(T),robust(B)   # l,r: x(y); t,b: y(x)
    def inter(v,h):  # x=v0*y+v1, y=h0*x+h1
        y=(h[0]*v[1]+h[1])/(1-h[0]*v[0]); return (v[0]*y+v[1], y)
    return [inter(l,t),inter(r,t),inter(r,b),inter(l,b)]
if __name__=='__main__':
    for f,seed,thr,sat,out in [('v2-2x.png',(1560,850),215,22,'qv.jpg'),('o1-2x.png',(860,640),195,22,'qo.jpg')]:
        a=np.asarray(Image.open(f).convert('RGB')).astype(int)
        q=fit_quad(region(a,seed,thr,sat)); print(f,[tuple(round(v) for v in p) for p in q])
        im=Image.open(f).convert('RGB'); d=ImageDraw.Draw(im); d.polygon(q,outline='red',width=3)
        xs=[p[0] for p in q]; ys=[p[1] for p in q]
        im.crop((min(xs)-60,min(ys)-60,max(xs)+60,max(ys)+60)).save(out)
