"""Single-frame flashes in the source (Screen Studio export: the blurred backdrop briefly turns lighter/purple) -> flash.json:
indexes of 30 fps source frames that differ from both neighbours while the neighbours match each other. make_video shows the previous frame instead."""
import json, subprocess, sys
import imageio_ffmpeg, numpy as np
W, H = 320, 180
p = subprocess.Popen([imageio_ffmpeg.get_ffmpeg_exe(), "-loglevel", "error", "-i", sys.argv[1], "-vf",
                      f"fps=30,scale={W}:{H}", "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
fr = []
while True:
    b = p.stdout.read(W * H * 3)
    if len(b) < W * H * 3:
        break
    fr.append(np.frombuffer(b, np.uint8).reshape(H, W, 3).astype(np.int16))
bad = []
for i in range(1, len(fr) - 2):
    for k in (1, 2):  # a flash of 1 or 2 frames
        if i + k >= len(fr):
            continue
        d_in = np.abs(fr[i] - fr[i - 1]).mean()
        d_back = np.abs(fr[i + k] - fr[i - 1]).mean()
        if d_in > 3 and d_back < d_in * 0.25:
            bad += list(range(i, i + k))
            break
bad = sorted(set(bad))
json.dump(bad, open("flash.json", "w"))
print(len(fr), "frames,", len(bad), "flash frames:", [round(i / 30, 2) for i in bad])
