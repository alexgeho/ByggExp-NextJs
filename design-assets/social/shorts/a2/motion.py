"""Per-frame motion of a desktop recording -> motion.json: t, changed fraction, bbox (1920x1080 space)."""
import json, subprocess, sys
import imageio_ffmpeg, numpy as np
FPS=10; W,H=480,270
ff=imageio_ffmpeg.get_ffmpeg_exe()
p=subprocess.Popen([ff,"-loglevel","error","-i",sys.argv[1],"-vf",f"fps={FPS},scale={W}:{H},format=gray","-f","rawvideo","-"],stdout=subprocess.PIPE)
prev=None; out=[]; i=0
while True:
    b=p.stdout.read(W*H)
    if len(b)<W*H: break
    f=np.frombuffer(b,np.uint8).astype(np.int16).reshape(H,W)
    if prev is not None:
        d=np.abs(f-prev)>10; ys,xs=np.nonzero(d)
        bb=[int(xs.min()*4),int(ys.min()*4),int(xs.max()*4+4),int(ys.max()*4+4)] if len(xs) else None
        out.append([round(i/FPS,1),round(float(d.mean()),5),bb])
    prev=f; i+=1
json.dump(out,open("motion.json","w"))
print(len(out))
