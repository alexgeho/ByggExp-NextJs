"""Put S39 tap markers on an already cut tutorial (when the Screen Studio source is not at hand).
Times come from analysis.json + script/voice, the same cut as make_video.py; audio is copied as is.
Run: python make_video.py-output.mp4 → python add_taps.py <in.mp4> <lang sv|en> <out.mp4> [from_s to_s]"""
import subprocess
import sys

import imageio_ffmpeg
import numpy as np
from PIL import Image

import taps as tp

SRC, LANG, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
T0, T1 = (float(sys.argv[4]), float(sys.argv[5])) if len(sys.argv) > 5 else (0.0, None)
W, H, FPS = 1920, 1080, 30
FF = imageio_ffmpeg.get_ffmpeg_exe()

tl, _, total = tp.timeline(LANG, FPS)
taps = tp.out_taps(tl)
cut = ["-ss", f"{T0}"] + (["-t", f"{T1 - T0}"] if T1 else [])
dec = subprocess.Popen([FF, "-loglevel", "error", *cut, "-i", SRC, "-vf", f"fps={FPS}", "-f", "rawvideo",
                        "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
enc = subprocess.Popen([FF, "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                        "-r", str(FPS), "-i", "-", *cut, "-i", SRC, "-map", "0:v", "-map", "1:a", "-c:v", "libx264",
                        "-crf", "17", "-preset", "medium", "-pix_fmt", "yuv420p", "-c:a", "copy", "-shortest", OUT],
                       stdin=subprocess.PIPE)
i, size = 0, W * H * 3
while True:
    b = dec.stdout.read(size)
    if len(b) < size:
        break
    img = Image.frombytes("RGB", (W, H), b).convert("RGBA")
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    tp.draw(layer, taps, T0 + i / FPS)
    enc.stdin.write(np.asarray(Image.alpha_composite(img, layer).convert("RGB")).tobytes())
    i += 1
enc.stdin.close()
enc.wait()
print(OUT, f"{i / FPS:.1f}s of {total:.1f}s,", len(taps), "taps")
