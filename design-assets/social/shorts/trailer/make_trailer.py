"""YouTube channel trailer 16:9: promise → live tool recordings (1x) → subscribe.
Clips: node rec.mjs <abs path>/clips  (CDP screencast of byggexp.se tools, needs puppeteer-core)
Voice: voice/<id>.mp3 + .json (ElevenLabs Malin, /with-timestamps) for each line in script_sv.json.
Run: python3 make_trailer.py <out.mp4>"""
import json
import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[3]
OUT = sys.argv[1] if len(sys.argv) > 1 else str(HERE / "trailer-16x9.mp4")
W, H, FPS = 1920, 1080, 30
NAVY, SKY, WHITE = (11, 26, 46), (111, 208, 248), (255, 255, 255)
CARD_W, CARD_H, CARD_CY = 1640, 760, 470  # card fits above the caption plate (S6)
CAP_Y = 930
FF = imageio_ffmpeg.get_ffmpeg_exe()

# per clip: crop of the 2x recording (whole tool card) and push-in focus (fractions of crop) + zoom
CLIPS = {  # focus/zoom keep inputs and results in view together (S8)
    "rot": dict(crop=(170, 60, 2390, 680), focus=(0.5, 0.5), zoom=1.3),
    "betong": dict(crop=(170, 30, 2390, 1200), focus=(0.5, 0.42), zoom=1.25),
    "faktura": dict(crop=(350, 680, 2210, 1620), focus=(0.5, 0.55), zoom=1.3),
    "hub": dict(crop=(0, 0, 1800, 1012), focus=(0.5, 0.5), zoom=1.0),
}
LEAD, TAIL = 0.25, 0.7  # voice starts 0.25s into a scene; scene lasts ≥ voice + tail
TAP_LIFE = 0.5


def font(size, weight="Heavy"):
    f = ImageFont.truetype("/System/Library/Fonts/SFNS.ttf", size)
    try:
        f.set_variation_by_name(weight)
    except Exception:
        pass
    return f


def ease(t):
    t = max(0.0, min(1.0, t))
    return t * t * t * (t * (6 * t - 15) + 10)  # smootherstep


def bg():
    img = Image.new("RGB", (W, H), NAVY)
    glow = Image.new("L", (W, H), 0)
    ImageDraw.Draw(glow).ellipse((-W * 0.1, H * 0.46, W * 1.1, H * 1.57), fill=120)
    glow = glow.filter(ImageFilter.GaussianBlur(W / 8))
    return Image.composite(Image.new("RGB", (W, H), (35, 148, 255)), img, glow)


BG = bg()
BAND = BG.convert("RGBA")  # navy strip under the captions, soft top edge
_m = Image.new("L", (W, H), 0)
for _y in range(860, H):
    ImageDraw.Draw(_m).line((0, _y, W, _y), fill=min(255, (_y - 860) * 9))
BAND.putalpha(_m)
LOGO = Image.open(ROOT / "public/icon-512.png").convert("RGBA")
script = json.load(open(HERE / "script_sv.json"))

# scenes in output time
scenes, t = [], 0.0
for ln in script:
    al = json.load(open(HERE / "voice" / f"{ln['id']}.json"))
    vdur = al["character_end_times_seconds"][-1]
    sc = dict(ln, al=al, t0=t, vt=t + LEAD)
    if ln["scene"] in CLIPS:
        meta = json.load(open(HERE / "clips" / ln["scene"] / "meta.json"))
        sc["meta"] = meta
        dur = max(meta["dur"], LEAD + vdur + TAIL)
    else:
        dur = LEAD + vdur + (1.6 if ln["scene"] == "cta" else 0.5)
    sc["t1"] = t + dur
    scenes.append(sc)
    t += dur
TOTAL = t


def clip_frame(sc, ct):
    """recording frame at clip time ct (1x; after the clip ends the last frame holds)"""
    fr = sc["meta"]["frames"]
    i = max((f for f, ft in fr if ft <= ct), default=fr[0][0])
    return Image.open(HERE / "clips" / sc["scene"] / f"{i:05d}.jpg").convert("RGB")


BASES = {}


def card(sc, ct):
    """stage frame: navy bg + rounded recording card with taps; camera handled in render()"""
    cfg = CLIPS[sc["scene"]]
    x0, y0, x1, y1 = cfg["crop"]
    src = clip_frame(sc, ct)
    d = ImageDraw.Draw(src, "RGBA")
    for tt, x, y in sc["meta"]["taps"]:  # small white tap circles (same style as tutorials)
        k = (ct - tt) / TAP_LIFE
        if 0 <= k <= 1:
            r, a = 22 + 22 * k, int(225 * (1 - k))
            d.ellipse((x - r - 6, y - r - 6, x + r + 6, y + r + 6), fill=(10, 30, 60, a // 4))
            d.ellipse((x - r, y - r, x + r, y + r), fill=(255, 255, 255, a), outline=(120, 130, 145, a), width=4)
    src = src.crop((x0, y0, x1, y1))
    k = min(CARD_W * 2 / src.width, CARD_H * 2 / src.height)  # 2x stage
    img = src.resize((round(src.width * k), round(src.height * k)), Image.LANCZOS)
    if sc["id"] not in BASES:  # bg + shadow are static per scene
        mask = Image.new("L", img.size, 0)
        ImageDraw.Draw(mask).rounded_rectangle((0, 0, img.width - 1, img.height - 1), 48, fill=255)
        base = BG.resize((W * 2, H * 2)).convert("RGBA")
        x, y = (W * 2 - img.width) // 2, CARD_CY * 2 - img.height // 2
        sh = Image.new("RGBA", base.size, (0, 0, 0, 0))
        sh.paste((0, 0, 0, 140), (x, y + 36, x + img.width, y + 36 + img.height), mask)
        base.alpha_composite(sh.filter(ImageFilter.GaussianBlur(48)))
        BASES[sc["id"]] = (base.convert("RGB"), mask, x, y)
    base, mask, x, y = BASES[sc["id"]]
    stage = base.copy()
    stage.paste(img, (x, y), mask)
    fx, fy = cfg["focus"]
    return stage, ((x + fx * img.width) / 2, (y + fy * img.height) / 2)


def camera(sc, t, stage, focus):
    """wide while typing → push in after the last tap → hold → pull out before the cut (S3)"""
    zmax = CLIPS[sc["scene"]]["zoom"]
    taps = sc["meta"]["taps"]
    last = max([tp[0] for tp in taps] + [sc["meta"]["frames"][-1][1]])  # push in once the screen is final
    p0 = sc["t0"] + last + 0.4
    p1, out0 = p0 + 0.9, sc["t1"] - 0.8
    k = ease((t - p0) / (p1 - p0)) if t < out0 else 1 - ease((t - out0) / 0.8)
    if p0 >= out0 - 0.6:  # not enough room for a hold → stay wide
        k = 0
    z = 1 + (zmax - 1) * k
    vw, vh = W / z, H / z
    cx, cy = W / 2 + (focus[0] - W / 2) * k, H / 2 + (focus[1] - H / 2) * k
    x0, y0 = min(max(cx - vw / 2, 0), W - vw), min(max(cy - vh / 2, 0), H - vh)
    return stage.resize((W, H), Image.LANCZOS, box=(x0 * 2, y0 * 2, (x0 + vw) * 2, (y0 + vh) * 2)).convert("RGBA")


def chunks(sc):
    al, words, cur, st = sc["al"], [], "", None
    for c, s, e in zip(al["characters"], al["character_start_times_seconds"], al["character_end_times_seconds"]):
        if c.isspace():
            if cur:
                words.append((cur, st, en))
            cur, st = "", None
            continue
        st = s if st is None else st
        cur, en = cur + c, e
    if cur:
        words.append((cur, st, en))
    out, clause = [], []
    for i, w in enumerate(words):  # split at punctuation; long clauses split before och/så/på
        clause.append(w)
        if w[0][-1] in ".?:,–" or i == len(words) - 1:
            txt = " ".join(x[0] for x in clause)
            if len(txt) > 38:
                cut = next((j for j in range(len(clause) // 2, len(clause)) if clause[j][0] in ("och", "så", "på", "med")), len(clause) // 2)
                parts = [clause[:cut], clause[cut:]]
            else:
                parts = [clause]
            for pt in parts:
                out.append([" ".join(x[0] for x in pt), sc["vt"] + pt[0][1], sc["vt"] + pt[-1][2]])
            clause = []
    out = [o for o in out if o[0] != "–"]
    k = 0
    while k < len(out):  # no one-word captions: merge into the previous one
        if len(out[k][0].split()) == 1 and k > 0:
            out[k - 1][0] += " " + out[k][0]; out[k - 1][2] = out[k][2]; out.pop(k)
        else:
            k += 1
    return [(txt.replace(" –", ""), a, b) for txt, a, b in out if txt != "–"]


CAPS = [c for sc in scenes if sc["scene"] in CLIPS for c in chunks(sc)]


def centered(d, text, y, f, fill):
    d.text(((W - d.textlength(text, font=f)) / 2, y), text, font=f, fill=fill)




def render(t):
    sc = next(s for s in scenes if s["t0"] <= t < s["t1"] or s is scenes[-1])
    lt = t - sc["t0"]
    if sc["scene"] in CLIPS:
        stage, focus = card(sc, lt)
        frame = camera(sc, t, stage, focus)
        frame.alpha_composite(BAND)
    else:
        frame = BG.copy().convert("RGBA")
    d = ImageDraw.Draw(frame)
    p = ease(lt / 0.5)
    if sc["scene"] == "hook":
        lg = LOGO.resize((120, 120), Image.LANCZOS)
        frame.alpha_composite(lg, ((W - 120) // 2, 250))
        f = font(int(112 * (0.9 + 0.1 * p)))
        centered(d, "Räkna och fakturera", 440, f, WHITE)
        centered(d, "snabbare", 570, f, SKY)
        centered(d, "med gratis verktyg för hantverkare", 740, font(56, "Semibold"), WHITE)
    elif sc["scene"] == "cta":
        sz = int(200 * (0.85 + 0.15 * p))
        frame.alpha_composite(LOGO.resize((sz, sz), Image.LANCZOS), ((W - sz) // 2, 230 + (200 - sz) // 2))
        f = font(76)
        label = "Prenumerera"
        bw = d.textlength(label, font=f) + 120
        pill = Image.new("RGBA", frame.size, (0, 0, 0, 0))
        ImageDraw.Draw(pill).rounded_rectangle(((W - bw) / 2, 500, (W + bw) / 2, 620), 60, fill=(255, 0, 0, 255))
        frame.alpha_composite(pill)
        centered(d, label, 515, f, WHITE)
        centered(d, "Fler sätt att spara tid på pappersjobbet", 680, font(56, "Semibold"), WHITE)
        centered(d, "byggexp.se", 780, font(76), SKY)
    for text, c0, c1 in CAPS:  # captions on a navy plate (S6)
        if c0 <= t <= c1 + 0.15:
            f = font(64)
            w = d.textlength(text, font=f)
            plate = Image.new("RGBA", frame.size, (0, 0, 0, 0))
            ImageDraw.Draw(plate).rounded_rectangle(((W - w) / 2 - 36, CAP_Y - 14, (W + w) / 2 + 36, CAP_Y + 88), 28, fill=(11, 26, 46, 210))
            frame.alpha_composite(plate)
            d.text(((W - w) / 2, CAP_Y), text, font=f, fill=WHITE)
            break
    return frame.convert("RGB")


ins, filt = [], []
for i, sc in enumerate(scenes):
    ins += ["-i", str(HERE / "voice" / f"{sc['id']}.mp3")]
    ms = int(sc["vt"] * 1000)
    filt.append(f"[{i + 1}:a]adelay={ms}|{ms}[a{i}]")
mix = ";".join(filt) + ";" + "".join(f"[a{i}]" for i in range(len(scenes))) + \
      f"amix=inputs={len(scenes)}:normalize=0,apad,atrim=0:{TOTAL:.2f}[a]"
enc = subprocess.Popen([FF, "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                        "-r", str(FPS), "-i", "-", *ins, "-filter_complex", mix, "-map", "0:v", "-map", "[a]",
                        "-c:v", "libx264", "-crf", "17", "-preset", "medium", "-pix_fmt", "yuv420p",
                        "-c:a", "aac", "-b:a", "192k", OUT], stdin=subprocess.PIPE)
for i in range(int(TOTAL * FPS)):
    enc.stdin.write(render(i / FPS).tobytes())
enc.stdin.close()
enc.wait()
print(OUT, f"{TOTAL:.1f}s")
