"""Tutorial cut: remove idle pauses, add YouTube-style white tap circles, voice-over + right-side captions.
Run: python3 make_video.py <src.mp4> <lang sv|en> <out.mp4>"""
import json
import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg
import numpy as np
from PIL import Image, ImageDraw, ImageFont

HERE = Path(__file__).resolve().parent
SRC, LANG, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
W, H, FPS = 1920, 1080, 30
IDLE_MIN, IDLE_KEEP = 0.5, 0.3       # idle longer than this is cut down to IDLE_KEEP
VOICE_LEAD, VOICE_TAIL = 0.15, 0.45  # voice starts 0.15s into a step; step lasts ≥ voice + tail
TAP_LIFE = 0.5
FF = imageio_ffmpeg.get_ffmpeg_exe()

ana = json.load(open(HERE / "analysis.json"))
segs = json.load(open(HERE / f"script_{LANG}.json"))
mfps, motion = ana["fps"], ana["motion"]

# idle ranges in original time
idle, s = [], None
for i, v in enumerate(motion + [1]):
    if v <= 0.002:
        s = i if s is None else s
    else:
        if s is not None and (i - s) / mfps > IDLE_MIN:
            idle.append((s / mfps, i / mfps))
        s = None


def kept(a, b):
    """orig [a,b) minus idle (each idle shrunk to IDLE_KEEP, centred) → list of ranges"""
    out, cur = [], a
    for i0, i1 in idle:
        if i1 <= a or i0 >= b:
            continue
        i0, i1 = max(i0, a), min(i1, b)
        cut0 = i0 + IDLE_KEEP / 2
        cut1 = i1 - IDLE_KEEP / 2
        if cut1 > cut0:
            if cut0 > cur:
                out.append((cur, cut0))
            cur = cut1
    if b > cur:
        out.append((cur, b))
    return out


# timeline: list of ("play", a, b) or ("hold", orig_t, dur); per step voice placement
timeline, voice, out_t = [], [], 0.0
for sg in segs:
    al = json.load(open(HERE / f"voice_{LANG}" / f"{sg['id']}.json"))
    vdur = al["character_end_times_seconds"][-1]
    rng = kept(*sg["orig"])
    L = sum(b - a for a, b in rng)
    voice.append({"id": sg["id"], "t": out_t + VOICE_LEAD, "al": al, "text": sg["text"]})
    for a, b in rng:
        timeline.append(("play", a, b))
    need = VOICE_LEAD + vdur + VOICE_TAIL - L
    if need > 0:
        timeline.append(("hold", rng[-1][1] - 1 / FPS, need))
    out_t += L + max(0, need)
total = out_t

# map original time -> output time (for taps)
def to_out(t):
    o = 0.0
    for kind, a, b in timeline:
        if kind == "play":
            if a <= t < b:
                return o + (t - a)
            o += b - a
        else:
            o += b
    return None

taps = [(to_out(tp["t"]), tp["x"], tp["y"]) for tp in ana["taps"]]
taps = [t for t in taps if t[0] is not None]

# captions: sentence chunks with output times from the TTS alignment
def font(size):
    return ImageFont.truetype("/System/Library/Fonts/Avenir Next.ttc", size, index=5)

FONT = font(50)
caps = []
for v in voice:
    ch, st, en = v["al"]["characters"], v["al"]["character_start_times_seconds"], v["al"]["character_end_times_seconds"]
    buf, t0 = "", None
    for c, a, b in zip(ch, st, en):
        if t0 is None and not c.isspace():
            t0 = a
        buf += c
        if c in ".!?" and buf.strip():
            caps.append([v["t"] + t0, v["t"] + b, buf.strip()])
            buf, t0 = "", None
    if buf.strip():
        caps.append([v["t"] + t0, v["t"] + en[-1], buf.strip()])
for i in range(len(caps)):  # caption stays 1.2s after its sentence, never past the next one
    nxt = caps[i + 1][0] - 0.01 if i + 1 < len(caps) else total
    caps[i][1] = min(caps[i][1] + 1.2, nxt) if i + 1 < len(caps) else total


def wrap(d, text):
    lines, cur = [], ""
    for w in text.split():
        t = (cur + " " + w).strip()
        if d.textlength(t, font=FONT) <= 590:
            cur = t
        else:
            lines.append(cur)
            cur = w
    return lines + [cur]


def overlay(frame, t):
    img = Image.fromarray(frame).convert("RGBA")
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    for tt, x, y in taps:  # white tap ripple: grows and fades
        k = (t - tt) / TAP_LIFE
        if 0 <= k <= 1:
            r = 11 + 11 * k
            a = int(225 * (1 - k))
            # soft dark halo + grey ring so the white dot also reads on white UI
            d.ellipse((x - r - 3, y - r - 3, x + r + 3, y + r + 3), fill=(10, 30, 60, a // 4))
            d.ellipse((x - r, y - r, x + r, y + r), fill=(255, 255, 255, a), outline=(120, 130, 145, a), width=2)
    for c0, c1, text in caps:
        if c0 <= t < c1:
            lines = wrap(d, text)
            y = 1019 - len(lines) * 53
            for i, l in enumerate(lines):
                d.text((1231, y + i * 53), l, font=FONT, fill=(255, 255, 255, 255))
            break
    return np.asarray(Image.alpha_composite(img, layer).convert("RGB"))


# voice track: place each clip at its output time
amix_in, filt = [], []
for i, v in enumerate(voice):
    amix_in += ["-i", str(HERE / f"voice_{LANG}" / f"{v['id']}.mp3")]
    filt.append(f"[{i}:a]adelay={int(v['t'] * 1000)}|{int(v['t'] * 1000)}[a{i}]")
mix = ";".join(filt) + ";" + "".join(f"[a{i}]" for i in range(len(voice))) + f"amix=inputs={len(voice)}:normalize=0,apad,atrim=0:{total:.2f}[a]"
voice_wav = HERE / f"voice_{LANG}.wav"
subprocess.run([FF, "-y", "-loglevel", "error", *amix_in, "-filter_complex", mix, "-map", "[a]", str(voice_wav)], check=True)

dec = subprocess.Popen([FF, "-loglevel", "error", "-i", SRC, "-vf", f"fps={FPS},scale={W}:{H}:flags=lanczos",
                        "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
enc = subprocess.Popen([FF, "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                        "-r", str(FPS), "-i", "-", "-i", str(voice_wav), "-c:v", "libx264", "-crf", "17",
                        "-preset", "medium", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-shortest", OUT],
                       stdin=subprocess.PIPE)
fsize, src_i, out_i, last = W * H * 3, 0, 0, None


def read():
    global src_i
    b = dec.stdout.read(fsize)
    src_i += 1
    return None if len(b) < fsize else np.frombuffer(b, np.uint8).reshape(H, W, 3)


for kind, a, b in timeline:
    if kind == "play":
        while (src_i) / FPS < a:  # skip cut frames
            last = read()
        while src_i / FPS < b:
            fr = read()
            if fr is None:
                break
            last = fr
            enc.stdin.write(overlay(fr, out_i / FPS).tobytes())
            out_i += 1
    else:
        for _ in range(int(round(b * FPS))):
            enc.stdin.write(overlay(last, out_i / FPS).tobytes())
            out_i += 1
enc.stdin.close()
enc.wait()
dec.kill()
print(OUT, f"{total:.1f}s", len(taps), "taps")
