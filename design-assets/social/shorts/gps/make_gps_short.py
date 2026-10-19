"""GPS → hours → export video, 16:9 (1920x1080) + 9:16 (1080x1920), 30fps. Real UI shots + Malin voice + word captions.
Camera: each shot starts wide (whole screen), pushes in to the focus point, holds, pulls back out.
Subpixel moves via resize(box=float rect) on a 2x stage — no jitter.
Run: python3 make_gps_short.py   (needs imageio-ffmpeg; voice.mp3 + alignment.json from ElevenLabs)"""
import json
import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[3]
FPS, S = 30, 2  # S = stage supersampling for sharp zoom
FORMATS = {
    "16x9": dict(W=1920, H=1080, cards={"phone": (900, 820, 470), "admin": (1640, 802, 470)}, cap_y=930, hook=118, cta=104, zk={"phone": 1.0, "admin": 1.0}),
    "9x16": dict(W=1080, H=1920, cards={"phone": (1000, 1250, 860), "admin": (1000, 1250, 860)}, cap_y=1600, hook=96, cta=84, zk={"phone": 1.0, "admin": 1.35}),
}
W, H = 1920, 1080
NAVY, SKY, WHITE = (11, 26, 46), (111, 208, 248), (255, 255, 255)


def font(size, weight="Heavy"):
    f = ImageFont.truetype("/System/Library/Fonts/SFNS.ttf", size)
    try:
        f.set_variation_by_name(weight)
    except Exception:
        pass
    return f


def ease(t):
    t = max(0.0, min(1.0, t))
    return t * t * t * (t * (6 * t - 15) + 10)  # smootherstep: zero velocity + acceleration at ends


def lerp_rect(a, b, t):
    return tuple(a[i] + (b[i] - a[i]) * t for i in range(4))


def bg(w, h):
    img = Image.new("RGB", (w, h), NAVY)
    glow = Image.new("L", (w, h), 0)
    ImageDraw.Draw(glow).ellipse((-w * 0.1, h * 0.46, w * 1.1, h * 1.57), fill=120)
    glow = glow.filter(ImageFilter.GaussianBlur(w / 8))
    return Image.composite(Image.new("RGB", (w, h), (35, 148, 255)), img, glow)

LOGO = Image.open(ROOT / "public/icon-512.png").convert("RGBA").resize((96, 96))
SRC = {
    "phone": Image.open(ROOT / "public/landing/screen-shift.png").convert("RGBA"),
    "shifts": Image.open(HERE / "src/admin-shifts.jpg").convert("RGBA"),
    "export": Image.open(HERE / "src/admin-export.jpg").convert("RGBA"),
}

# scene: (start, end, kind, source, card layout, focus (fx, fy) in source fractions, zoom)
SCENES = [
    (0.0, 2.73, "hook"),
    (2.73, 8.15, "shot", "phone", "phone", (0.5, 0.30), 1.7),     # address (GPS) + check-in button
    (8.15, 10.76, "shot", "shifts", "admin", (0.50, 0.38), 1.8),  # Planerat/GPS toggle + project + hours
    (10.76, 17.09, "shot", "export", "admin", (0.87, 0.32), 2.2),  # Exportera menu: Excel / PDF / CSV
    (17.09, None, "cta"),
]
STAGES = {}


def stage(scene):
    """Static 2x canvas: background + whole screenshot card. Returns (image, focus point in 1x stage coords)."""
    if scene[3] not in STAGES:
        _, _, _, src_key, layout, (fx, fy), _ = scene
        src = SRC[src_key]
        mw, mh, cyc = (v * S for v in CFG["cards"][layout])
        frame = bg(W * S, H * S).convert("RGBA")
        k = min(mw / src.width, mh / src.height)
        img = src.resize((round(src.width * k), round(src.height * k)), Image.LANCZOS)
        x, y = (W * S - img.width) // 2, cyc - img.height // 2
        sh = Image.new("RGBA", frame.size, (0, 0, 0, 0))
        sh.paste((0, 0, 0, 140), (x, y + 18 * S, x + img.width, y + 18 * S + img.height), img.split()[3])
        frame.alpha_composite(sh.filter(ImageFilter.GaussianBlur(24 * S)))
        frame.alpha_composite(img, (x, y))
        STAGES[scene[3]] = (frame.convert("RGB"), ((x + fx * img.width) / S, (y + fy * img.height) / S))
    return STAGES[scene[3]]


def camera(scene, t):
    """Wide 0–12% → push in until 40% → hold → pull out from 78% → wide at end."""
    s0, s1, zmax = scene[0], scene[1], scene[6] * CFG["zk"][scene[4]]
    p = (t - s0) / (s1 - s0)
    k = ease((p - 0.12) / 0.28) if p < 0.78 else 1 - ease((p - 0.78) / 0.22)
    img, (fx, fy) = stage(scene)
    z = 1 + (zmax - 1) * k
    vw, vh = W / z, H / z
    cx = W / 2 + (fx - W / 2) * k
    cy = H / 2 + (fy - H / 2) * k
    x0 = min(max(cx - vw / 2, 0), W - vw)
    y0 = min(max(cy - vh / 2, 0), H - vh)
    box = (x0 * S, y0 * S, (x0 + vw) * S, (y0 + vh) * S)
    return img.resize((W, H), Image.LANCZOS, box=box).convert("RGBA")


def stroked(d, xy, text, f, fill, stroke=7):
    d.text(xy, text, font=f, fill=fill, stroke_width=stroke, stroke_fill=(0, 0, 0))


def centered_lines(d, lines, y, f, colors, stroke=0):
    lh = int(f.size * 1.12)
    for i, t in enumerate(lines):
        w = d.textlength(t, font=f)
        if stroke:
            stroked(d, ((W - w) / 2, y + i * lh), t, f, colors[i % len(colors)], stroke)
        else:
            d.text(((W - w) / 2, y + i * lh), t, font=f, fill=colors[i % len(colors)])


def caption_chunks(al):
    words, cur, start = [], "", None
    for c, s, e in zip(al["characters"], al["character_start_times_seconds"], al["character_end_times_seconds"]):
        if c.isspace():
            if cur:
                words.append((cur, start, end))
            cur, start = "", None
            continue
        if start is None:
            start = s
        cur += c
        end = e
    if cur:
        words.append((cur, start, end))
    chunks, buf = [], []
    for w in words:
        buf.append(w)
        if len(buf) == 3 or w[0][-1] in ".?:,–" or sum(len(x[0]) for x in buf) > 16:
            chunks.append((" ".join(x[0] for x in buf), buf[0][1], buf[-1][2]))
            buf = []
    if buf:
        chunks.append((" ".join(x[0] for x in buf), buf[0][1], buf[-1][2]))
    return chunks


def render(t, total, chunks):
    scene = next(s for s in SCENES if s[0] <= t and (s[1] is None or t < s[1]))
    kind = scene[2]
    frame = camera(scene, t) if kind == "shot" else BG.copy().convert("RGBA")
    d = ImageDraw.Draw(frame)
    if kind == "hook":
        blur = SRC["shifts"].convert("RGB").resize((W, H)).filter(ImageFilter.GaussianBlur(18))
        frame.paste(Image.blend(blur.crop((0, 0, W, H)) if blur.width >= W else blur.resize((W, H)), Image.new("RGB", (W, H), NAVY), 0.6), (0, 0))
        top = (H - 750) // 2
        frame.alpha_composite(LOGO, ((W - 96) // 2, top + 90))
        pop = min(1, t / 0.35)
        f = font(int(CFG["hook"] * (0.85 + 0.15 * ease(pop))))
        centered_lines(d, ["Jagar du fortfarande", "tidlappar?"], top + 330, f, [WHITE, SKY, WHITE], stroke=0)
    elif kind == "cta":
        top = (H - 750) // 2
        p = ease((t - scene[0]) / 0.5)
        big = LOGO.resize((int(220 * (0.8 + 0.2 * p)),) * 2)
        frame.alpha_composite(big, ((W - big.width) // 2, top + 170))
        centered_lines(d, ["Testa gratis i 14 dagar"], top + 470, font(CFG["cta"]), [WHITE])
        centered_lines(d, ["byggexp.se"], top + 630, font(92), [SKY])
    if kind == "shot":
        for text, cs, ce in chunks:
            if cs <= t <= ce + 0.15:
                f = font(72)
                w = d.textlength(text, font=f)
                y = CFG["cap_y"]
                pill = Image.new("RGBA", frame.size, (0, 0, 0, 0))
                ImageDraw.Draw(pill).rounded_rectangle(((W - w) / 2 - 36, y - 14, (W + w) / 2 + 36, y + 96), 28, fill=(11, 26, 46, 210))
                frame.alpha_composite(pill)
                d.text(((W - w) / 2, y), text, font=f, fill=WHITE)
                break
    return frame.convert("RGB")


def main(fmt):
    global CFG, W, H, BG
    CFG = FORMATS[fmt]
    W, H = CFG["W"], CFG["H"]
    BG = bg(W, H)
    STAGES.clear()
    al = json.load(open(HERE / "alignment.json"))
    total = al["character_end_times_seconds"][-1] + 1.0
    chunks = caption_chunks(al)
    out = HERE / f"video-gps-{fmt}.mp4"
    ff = imageio_ffmpeg.get_ffmpeg_exe()
    proc = subprocess.Popen([ff, "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                             "-r", str(FPS), "-i", "-", "-i", str(HERE / "voice.mp3"), "-c:v", "libx264", "-preset", "medium",
                             "-crf", "20", "-pix_fmt", "yuv420p", "-af", "apad", "-c:a", "aac", "-b:a", "192k", "-t", f"{total:.2f}", str(out)],
                            stdin=subprocess.PIPE)
    for i in range(int(total * FPS)):
        proc.stdin.write(render(i / FPS, total, chunks).tobytes())
    proc.stdin.close()
    proc.wait()
    print(out, f"{total:.1f}s")


if __name__ == "__main__":
    for fmt in sys.argv[1:] or FORMATS:
        main(fmt)
