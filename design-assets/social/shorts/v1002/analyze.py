"""Find idle stretches (to cut) and tap moments/positions in a Screen Studio phone recording.
Writes analysis.json: per-frame motion + detected taps (orig time, x, y in 1920x1080 space)."""
import json
import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg
import numpy as np

SRC = Path(sys.argv[1])
OUT = Path(__file__).resolve().parent / "analysis.json"
FPS = 15
# phone screen inside the 3840x2160 frame (measured: bezel x1454–2395, y86–2081)
CX, CY, CW, CH = 1474, 106, 901, 1955
SW, SH = 226, 490  # analysis resolution (1/4)

ff = imageio_ffmpeg.get_ffmpeg_exe()
p = subprocess.Popen([ff, "-loglevel", "error", "-i", str(SRC), "-vf",
                      f"fps={FPS},crop={CW}:{CH}:{CX}:{CY},scale={SW}:{SH},format=gray",
                      "-f", "rawvideo", "-"], stdout=subprocess.PIPE)
frames = []
while True:
    b = p.stdout.read(SW * SH)
    if len(b) < SW * SH:
        break
    frames.append(np.frombuffer(b, np.uint8).astype(np.int16).reshape(SH, SW))

motion, boxes = [0.0], [None]
for a, b in zip(frames, frames[1:]):
    d = np.abs(b - a) > 12
    motion.append(float(d.mean()))
    ys, xs = np.nonzero(d)
    boxes.append([int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())] if len(xs) else None)

# taps: onset of a change event (still -> moving). Use the first changed frame's box:
# a pressed button / focused field highlights first, the transition follows.
taps, last = [], -99
for i in range(1, len(motion)):
    if motion[i] > 0.002 and motion[i - 1] <= 0.002 and i - last >= FPS * 0.35:
        bx = boxes[i]
        if not bx:
            continue
        w, h = bx[2] - bx[0], bx[3] - bx[1]
        if w * h > SW * SH * 0.5:  # whole-screen change: no clear tap spot
            continue
        x = (bx[0] + bx[2]) / 2 / SW * CW + CX
        y = (bx[1] + bx[3]) / 2 / SH * CH + CY
        taps.append({"t": round(i / FPS, 3), "x": round(x / 2, 1), "y": round(y / 2, 1)})  # /2 → 1920x1080
        last = i

json.dump({"fps": FPS, "motion": motion, "taps": taps}, open(OUT, "w"))
print(len(frames), "frames,", len(taps), "taps ->", OUT)
