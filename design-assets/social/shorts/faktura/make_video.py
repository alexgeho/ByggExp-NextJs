"""Tutorial cut: remove idle pauses, add YouTube-style white tap circles, voice-over + right-side captions.
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
IDLE_MIN, IDLE_KEEP = 0.5, 0.3       # idle longer than this is cut down to IDLE_KEEP
VOICE_LEAD, VOICE_TAIL = 0.15, 0.45  # voice starts 0.15s into a step; step lasts ≥ voice + tail
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

taps = tap_markers.out_taps(timeline)  # S39: hand-checked list (taps_manual.json) or the detector

# captions: sentence chunks with output times from the TTS alignment
def font(size):
    """S51: one caption font in every video, the same on Mac and Windows: Nunito Sans SemiBold (free Avenir Next look-alike, as in del 1)"""
    f = ImageFont.truetype(str(HERE.parent / "fonts" / "NunitoSans.ttf"), size)
    axes = [a["default"] for a in f.get_variation_axes()]
    axes[0] = 600  # weight: SemiBold
    f.set_variation_by_axes(axes)
    return f

FONT, LINE = font(47), 51
CAP_X0, CAP_X1 = 1330, 1860  # S46/S48/S51: caption zone ~140 px off the phone (right edge x 1187), 60 px off the frame edge, lines left-aligned
caps = []
for v in voice:
    ch, st, en = v["al"]["characters"], v["al"]["character_start_times_seconds"], v["al"]["character_end_times_seconds"]
    buf, t0 = "", None
    for j, (c, a, b) in enumerate(zip(ch, st, en)):
        if t0 is None and not c.isspace():
            t0 = a
        buf += c
        # a dot inside a word (byggexp.se) is not a sentence end
        end = j + 1 == len(ch) or ch[j + 1].isspace()
        # a long sentence is shown in phrases: also break after a dash once the chunk is long (never inside a list)
        if buf.strip() and end and (c in ".!?" or (c == "–" and len(buf.strip()) > 40 and len(ch) - j > 20)):
            caps.append([v["t"] + t0, v["t"] + b, buf.strip()])
            buf, t0 = "", None
    if buf.strip():
        caps.append([v["t"] + t0, v["t"] + en[-1], buf.strip()])
def wrap(d, text):
    """fewest lines that fit the zone, split as evenly as possible; a one-word line is avoided"""
    # split on plain spaces only: a no-break space in the script keeps a pair together ("obekväm tid");
    # a dash stays at the end of its line, never starts one
    words, width = [], CAP_X1 - CAP_X0
    for t in text.split(" "):
        if t == "–" and words:
            words[-1] += " –"
        elif t:
            words.append(t)
    w = lambda i, j: d.textlength(" ".join(words[i:j]), font=FONT)
    best = {len(words): (0, 0, [])}  # i -> (lines, cost, breaks) for words[i:]
    for i in range(len(words) - 1, -1, -1):
        opts = []
        for j in range(i + 1, len(words) + 1):
            if w(i, j) > width and j > i + 1:
                break
            n, cost, rest = best[j]
            opts.append((n + 1, cost + (width - w(i, j)) ** 2 + (10 ** 7 if j == i + 1 and len(words) > 1 else 0), [j] + rest))
        best[i] = min(opts)
    lines, i = [], 0
    for j in best[0][2]:
        lines.append(" ".join(words[i:j])); i = j
    return lines


def split_long(c0, c1, text, max_lines=3):
    """a sentence longer than max_lines is shown as two cards, split at the comma/colon/dash nearest the middle"""
    d = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    cuts = [i + 1 for i, c in enumerate(text) if c in ",:–" and i + 1 < len(text) and text[i + 1] == " "]
    if not cuts and len(wrap(d, text)) > max_lines + 1:  # no punctuation but 5+ lines: split at the space nearest the middle
        cuts = [i for i, c in enumerate(text) if c == " "]
    if len(wrap(d, text)) <= max_lines or not cuts:
        return [[c0, c1, text]]
    k = min(cuts, key=lambda i: abs(i - len(text) / 2))
    tm = c0 + (c1 - c0) * k / len(text)
    return [[c0, tm, text[:k].strip()], [tm, c1, text[k:].strip()]]


caps = [part for c in caps for part in split_long(*c)]
for i in range(len(caps)):  # caption stays up to 2.5 s after its sentence, never past the next one
    nxt = caps[i + 1][0] - 0.01 if i + 1 < len(caps) else total
    caps[i][1] = min(caps[i][1] + 2.5, nxt) if i + 1 < len(caps) else total  # no blank gap while the next line comes


def overlay(frame, t):
    img = Image.fromarray(frame).convert("RGBA")
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    tap_markers.draw(layer, taps, t)
    for c0, c1, text in caps:
        if c0 <= t < c1:
            lines = wrap(d, text)
            y = 1019 - len(lines) * LINE
            for i, l in enumerate(lines):
                d.text((CAP_X0, y + i * LINE), l, font=FONT, fill=(255, 255, 255, 255))
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
