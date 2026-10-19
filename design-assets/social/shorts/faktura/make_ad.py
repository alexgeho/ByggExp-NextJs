"""15s ad from the faktura recording: sped-up beats, big captions, tap ripples, end card.
Run: python3 make_ad.py <src.mp4> <out.mp4>"""
import json
import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).resolve().parent
SRC, OUT = sys.argv[1], sys.argv[2]
AD = HERE / "ad_sv"
W, H, FPS = 1920, 1080, 30
FF = imageio_ffmpeg.get_ffmpeg_exe()
BG = Path.home() / "Documents/ByggExp/logos-banners/background.png"
LOGO = HERE.parents[3] / "public/icon-512.png"

# (voice beat, orig start, orig end, output seconds) — None = end card
BEATS = [("v1", 16.6, 18.8, 2.0), ("v2", 140.5, 154.5, 3.6), ("v3", 163.0, 183.0, 3.5),
         ("v4", 204.6, 209.6, 2.4), ("v5", None, None, 3.0)]
taps_all = json.load(open(HERE / "analysis.json"))["taps"]


def font(size, idx=2):  # Avenir Next Demi Bold
    return ImageFont.truetype("/System/Library/Fonts/Avenir Next.ttc", size, index=idx)


BIG = font(72)


def caption(img, text, t_in):
    """big two-tone caption right of the phone, pops in during first 0.25s"""
    d = ImageDraw.Draw(img)
    lines, cur = [], ""
    for w in text.split():
        s = (cur + " " + w).strip()
        if d.textlength(s, font=BIG) <= 600:
            cur = s
        else:
            lines.append(cur); cur = w
    lines.append(cur)
    k = min(1, t_in / 0.25)
    y0 = 540 - len(lines) * 44 + int((1 - k) * 30)
    # soft navy shadow so white text reads on the light part of the waves
    sh = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ds = ImageDraw.Draw(sh)
    for i, l in enumerate(lines):
        ds.text((1231, y0 + i * 88 + 3), l, font=BIG, fill=(8, 30, 70, int(150 * k)))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(8)))
    for i, l in enumerate(lines):
        d.text((1231, y0 + i * 88), l, font=BIG, fill=(255, 255, 255, int(255 * k)))


def taps_draw(img, taps):
    d = ImageDraw.Draw(img)
    for k, x, y in taps:
        r = 11 + 11 * k
        a = int(225 * (1 - k))
        d.ellipse((x - r - 3, y - r - 3, x + r + 3, y + r + 3), fill=(10, 30, 60, a // 4))
        d.ellipse((x - r, y - r, x + r, y + r), fill=(255, 255, 255, a), outline=(120, 130, 145, a), width=2)


def end_card(n):
    bg = Image.open(BG).convert("RGB").resize((W, H), Image.LANCZOS)
    logo = Image.open(LOGO).convert("RGBA")
    frames = []
    for i in range(n):
        k = min(1, i / (0.4 * FPS))
        e = k * k * (3 - 2 * k)
        im = bg.copy().convert("RGBA")
        sz = int(260 * (0.85 + 0.15 * e))
        lg = logo.resize((sz, sz), Image.LANCZOS)
        lg.putalpha(lg.split()[3].point(lambda v: int(v * e)))
        im.alpha_composite(lg, ((W - sz) // 2, 250 + (260 - sz) // 2))
        d = ImageDraw.Draw(im)
        for txt, f, y, col in (("Testa gratis i 14 dagar", font(84), 590, (10, 24, 40)),
                               ("byggexp.se", font(64, 5), 700, (19, 120, 224))):
            w = d.textlength(txt, font=f)
            d.text(((W - w) / 2, y + int((1 - e) * 20)), txt, font=f, fill=col + (int(255 * e),))
        frames.append(np.asarray(im.convert("RGB")))
    return frames


enc = subprocess.Popen([FF, "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                        "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-crf", "16", "-preset", "slow",
                        "-pix_fmt", "yuv420p", str(HERE / "ad_video.mp4")], stdin=subprocess.PIPE)
t_out, starts = 0.0, []
for vid, a, b, dur in BEATS:
    beat = json.load(open(AD / f"{vid}.json"))
    starts.append(t_out)
    n = int(round(dur * FPS))
    if a is None:
        frames = end_card(n)
        for fr in frames:
            enc.stdin.write(fr.tobytes())
        t_out += dur
        continue
    speed = (b - a) / dur
    dec = subprocess.Popen([FF, "-loglevel", "error", "-ss", str(a), "-t", str(b - a), "-i", SRC, "-vf",
                            f"setpts=PTS/{speed:.4f},fps={FPS},scale={W}:{H}:flags=lanczos",
                            "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
    last = None
    for i in range(n):
        buf = dec.stdout.read(W * H * 3)
        if len(buf) == W * H * 3:
            last = np.frombuffer(buf, np.uint8).reshape(H, W, 3)
        t = i / FPS
        orig_t = a + t * speed
        im = Image.fromarray(last).convert("RGBA")
        layer = Image.new("RGBA", im.size, (0, 0, 0, 0))
        # ripple life 0.4s in OUTPUT time so fast-forwarded taps stay visible
        act = [((orig_t - tp["t"]) / (0.4 * speed), tp["x"], tp["y"]) for tp in taps_all
               if 0 <= (orig_t - tp["t"]) / (0.4 * speed) <= 1]
        taps_draw(layer, act)
        caption(layer, beat["text"], t)
        enc.stdin.write(np.asarray(Image.alpha_composite(im, layer).convert("RGB")).tobytes())
    dec.kill()
    t_out += dur
enc.stdin.close()
enc.wait()

ins, filt = [], []
for i, ((vid, *_), st) in enumerate(zip(BEATS, starts)):
    ins += ["-i", str(AD / f"{vid}.mp3")]
    ms = int((st + 0.12) * 1000)
    filt.append(f"[{i + 1}:a]adelay={ms}|{ms}[a{i}]")
mix = ";".join(filt) + ";" + "".join(f"[a{i}]" for i in range(len(BEATS))) + \
      f"amix=inputs={len(BEATS)}:normalize=0,apad,atrim=0:{t_out:.2f}[a]"
subprocess.run([FF, "-y", "-loglevel", "error", "-i", str(HERE / "ad_video.mp4"), *ins, "-filter_complex", mix,
                "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", OUT], check=True)
print(OUT, f"{t_out:.1f}s")
