"""Cursor-sensitive stillness map → still.json: for each 1/10 s, the pixel change to the previous frame at 960x540
(the cursor and its motion blur register here, unlike analysis.json). Holds freeze on a still frame (no smeared cursor)."""
import json, subprocess, sys
import imageio_ffmpeg, numpy as np
FPS, W, H = 10, 960, 540
p = subprocess.Popen([imageio_ffmpeg.get_ffmpeg_exe(), "-loglevel", "error", "-i", sys.argv[1], "-vf",
                      f"fps={FPS},scale={W}:{H},format=gray", "-f", "rawvideo", "-"], stdout=subprocess.PIPE)
prev, diff = None, []
while True:
    b = p.stdout.read(W * H)
    if len(b) < W * H:
        break
    f = np.frombuffer(b, np.uint8).astype(np.int16)
    diff.append(0 if prev is None else int((np.abs(f - prev) > 6).sum()))
    prev = f
json.dump({"fps": FPS, "diff": diff}, open("still.json", "w"))
print(len(diff))
