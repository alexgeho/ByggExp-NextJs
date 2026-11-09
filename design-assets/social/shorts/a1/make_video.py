"""Desktop tutorial cut (admin web, as the Swedish 0910 video): voice-over + bottom-centred captions, no tap circles.
Run: python3 make_video.py <src.mp4> <lang sv|en> <out.mp4>"""
import json
import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg
import numpy as np
from PIL import Image, ImageDraw, ImageFont

import taps as tap_markers

HERE = Path(__file__).resolve().parent
SRC, LANG, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
W, H, FPS = 1920, 1080, 30
FF = imageio_ffmpeg.get_ffmpeg_exe()

# timeline: ("play", a, b, speed) or ("hold", orig_t, dur, 1); one place for the cut rules (taps.py)
timeline, voice, total = tap_markers.timeline(LANG, FPS)

taps = tap_markers.out_taps(timeline)  # S39: hand-checked list (taps_manual.json) or the detector

# S42: a voice hold must never sit between a tap and the screen's reaction (~0.25 s later)
for m in [m for m in json.load(open(HERE / "taps_manual.json", encoding="utf-8")) if not m.get("at_cut")]:  # "at_cut": circle placed on a cut, no live reaction
    a, b = tap_markers.to_out(timeline, m["t"]), tap_markers.to_out(timeline, m["t"] + 0.25)
    if a is not None and (b is None or b - a > 0.5):
        sys.exit(f"S42: hold between tap {m['t']} ({m['what']}) and its reaction — move the script boundary before the tap")

# captions (S53): as the Swedish web video — one line at a time, the sentence shown in short phrases timed by the voice,
# white Montserrat with a soft shadow, no plate, centred at the bottom
from PIL import ImageFilter


def font(size):
    f = ImageFont.truetype(str(HERE.parent / "fonts" / "montserrat" / "Montserrat.ttf"), size)
    f.set_variation_by_axes([560])  # between Medium and SemiBold, matched to the Swedish captions
    return f


FONT, TRACK, MAXW = font(50), 1, 1150  # tracking 1 px; a phrase is at most ~1150 px wide like the Swedish ones
_d = ImageDraw.Draw(Image.new("RGB", (1, 1)))


def text_w(t):
    return sum(_d.textlength(c, font=FONT) for c in t) + TRACK * max(0, len(t) - 1)


caps = []
for v in voice:
    ch, st, en = v["al"]["characters"], v["al"]["character_start_times_seconds"], v["al"]["character_end_times_seconds"]
    words, cur = [], None  # [text, t0, t1]
    for c, a0, b0 in zip(ch, st, en):
        if c.isspace():
            cur = None
            continue
        if cur is None:
            cur = [c, a0, b0]
            words.append(cur)
        else:
            cur[0] += c
            cur[2] = b0
    # clauses end at punctuation; short clauses are joined, a long one is cut into even one-line phrases
    clauses, cl = [], []
    for w in words:
        cl.append(w)
        if w[0][-1] in ",.:;!?–":
            clauses.append(cl)
            cl = []
    if cl:
        clauses.append(cl)
    joined = []
    for cl in clauses:
        pw = text_w(" ".join(x[0] for x in joined[-1])) if joined else 0
        if joined and (text_w(" ".join(x[0] for x in joined[-1] + cl)) <= MAXW * 0.75 or pw < 350):  # "Next," / "Done –" never stand alone
            joined[-1] = joined[-1] + cl
        else:
            joined.append(cl)
    for cl in joined:
        n = int(text_w(" ".join(x[0] for x in cl)) // MAXW) + 1
        best = {len(cl): (0, [])}  # balanced split of cl into lines that fit, as few as possible
        for i in range(len(cl) - 1, -1, -1):
            opts = []
            for j in range(i + 1, len(cl) + 1):
                wd = text_w(" ".join(x[0] for x in cl[i:j]))
                if wd > MAXW and j > i + 1:
                    break
                c, br = best[j]
                opts.append((c + 10 ** 9 + (MAXW - wd) ** 2, [j] + br))
            best[i] = min(opts)
        i = 0
        for j in best[0][1]:
            caps.append([v["t"] + cl[i][1], v["t"] + cl[j - 1][2], " ".join(x[0] for x in cl[i:j])])
            i = j
# a dash alone at the start of a phrase belongs to the phrase before
for i in range(1, len(caps)):
    if caps[i][2].startswith("– "):
        caps[i][2] = caps[i][2][2:]
        caps[i - 1][2] += " –"
for i in range(len(caps)):  # a phrase stays until the next one starts (max 2.5 s after it was spoken)
    caps[i][1] = min(caps[i][1] + 2.5, caps[i + 1][0] - 0.01) if i + 1 < len(caps) else total


def draw_caption(img, text, y):
    w = text_w(text)
    x0 = (W - w) / 2
    txt = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(txt)
    x = x0
    for c in text:
        d.text((x, y), c, font=FONT, fill=(255, 255, 255, 255))
        x += d.textlength(c, font=FONT) + TRACK
    box = (int(x0) - 20, int(y) - 20, int(x0 + w) + 20, int(y) + 90)
    alpha = txt.crop(box).getchannel("A")
    sh = Image.new("RGBA", alpha.size, (0, 0, 0, 0))
    sh.putalpha(alpha.point(lambda v: v * 0.55).filter(ImageFilter.GaussianBlur(4)))
    img.alpha_composite(sh, (box[0], box[1] + 2))
    img.alpha_composite(txt)


# "cap": "top" in the script: that line's captions sit at the top (an open dropdown is at the bottom)
script = {sg["id"]: sg for sg in json.load(open(HERE / f"script_{LANG}.json", encoding="utf-8"))}
TOP = [(v["t"] - 0.2, voice[i + 1]["t"] if i + 1 < len(voice) else total) for i, v in enumerate(voice) if script[v["id"]].get("cap") == "top"]


def overlay(frame, t):
    img = Image.fromarray(frame).convert("RGBA")
    for c0, c1, text in caps:
        if c0 <= t < c1:
            draw_caption(img, text, 70 if any(a <= c0 < b for a, b in TOP) else 985)
            break
    return np.asarray(img.convert("RGB"))


# voice track: place each clip at its output time
amix_in, filt = [], []
for i, v in enumerate(voice):
    amix_in += ["-i", str(HERE / f"voice_{LANG}" / f"{v['id']}.mp3")]
    filt.append(f"[{i}:a]adelay={int(v['t'] * 1000)}|{int(v['t'] * 1000)}[a{i}]")
mix = ";".join(filt) + ";" + "".join(f"[a{i}]" for i in range(len(voice))) + f"amix=inputs={len(voice)}:normalize=0,apad,atrim=0:{total:.2f}[a]"
voice_wav = HERE / f"voice_{LANG}.wav"
subprocess.run([FF, "-y", "-loglevel", "error", *amix_in, "-filter_complex", mix, "-map", "[a]", str(voice_wav)], check=True)

# background music (music.mp3 next to this script, if present): quiet bed, ducked further under the voice, faded at both ends
MUSIC, MUSIC_VOL = HERE / "music.mp3", 0.025  # S49
if MUSIC.exists():
    mixed = HERE / f"voice_music_{LANG}.wav"
    subprocess.run([FF, "-y", "-loglevel", "error", "-i", str(voice_wav), "-stream_loop", "-1", "-i", str(MUSIC), "-filter_complex",
                    f"[1:a]atrim=0:{total:.2f},volume={MUSIC_VOL},afade=t=in:d=1,afade=t=out:st={total - 3:.2f}:d=3[m];"
                    "[0:a]asplit[v][key];[m][key]sidechaincompress=threshold=0.02:ratio=4:attack=80:release=600[duck];"
                    "[v][duck]amix=inputs=2:normalize=0[a]", "-map", "[a]", "-ac", "2", str(mixed)], check=True)
    voice_wav = mixed

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


# every output frame takes the source frame at its own recording time: no rounding drift across cuts and holds
for out_i in range(int(round(total * FPS))):
    want = int(tap_markers.to_orig(timeline, min((out_i + 0.5) / FPS, total - 1e-6)) * FPS)
    while src_i <= want:
        fr = read()
        if fr is None:
            break
        last = fr
    enc.stdin.write(overlay(last, out_i / FPS).tobytes())
enc.stdin.close()
enc.wait()
dec.kill()
print(OUT, f"{total:.1f}s", len(taps), "taps")
