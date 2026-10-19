"""GPS → hours → export Short (1080x1920, 30fps). Real UI shots + Malin voice + word captions.
Run: python3 make_gps_short.py   (needs imageio-ffmpeg; voice.mp3 + alignment.json from ElevenLabs)"""
import json
import subprocess
from pathlib import Path

import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[3]
W, H, FPS = 1920, 1080, 30
NAVY, SKY, WHITE = (11, 26, 46), (111, 208, 248), (255, 255, 255)


def font(size, weight="Heavy"):
    f = ImageFont.truetype("/System/Library/Fonts/SFNS.ttf", size)
    try:
        f.set_variation_by_name(weight)
    except Exception:
        pass
    return f


def ease(t):
    return t * t * (3 - 2 * t)


def lerp_rect(a, b, t):
    return tuple(a[i] + (b[i] - a[i]) * t for i in range(4))


def bg():
    img = Image.new("RGB", (W, H), NAVY)
    glow = Image.new("L", (W, H), 0)
    ImageDraw.Draw(glow).ellipse((-200, 500, W + 200, 1700), fill=120)
    glow = glow.filter(ImageFilter.GaussianBlur(240))
    return Image.composite(Image.new("RGB", (W, H), (35, 148, 255)), img, glow)


BG = bg()
LOGO = Image.open(ROOT / "public/icon-512.png").convert("RGBA").resize((96, 96))
SRC = {
    "phone": Image.open(ROOT / "public/landing/screen-shift.png").convert("RGBA"),
    "shifts": Image.open(HERE / "src/admin-shifts.jpg").convert("RGBA"),
    "export": Image.open(HERE / "src/admin-export.jpg").convert("RGBA"),
}

# scene: (start, end, kind, source, card (w,h,y), rect_from, rect_to)
SCENES = [
    (0.0, 2.73, "hook"),
    (2.73, 8.15, "shot", "phone", (900, 820, 470), 1.0, 1.05),
    (8.15, 10.76, "shot", "shifts", (1640, 802, 470), 1.0, 1.05),
    (10.76, 17.09, "shot", "export", (1640, 802, 470), 1.0, 1.05),
    (17.09, None, "cta"),
]


def card(frame, src, mw, mh, cyc, zoom):
    # whole image, never cropped: fit into (mw, mh), then scale by zoom around centre
    k = min(mw / src.width, mh / src.height) * zoom
    img = src.resize((int(src.width * k), int(src.height * k)), Image.LANCZOS)
    x, y = (W - img.width) // 2, cyc - img.height // 2
    sh = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    sh.paste((0, 0, 0, 140), (x, y + 18, x + img.width, y + 18 + img.height), img.split()[3])
    frame.alpha_composite(sh.filter(ImageFilter.GaussianBlur(24)))
    frame.alpha_composite(img, (x, y))


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
    frame = BG.copy().convert("RGBA")
    d = ImageDraw.Draw(frame)
    scene = next(s for s in SCENES if s[0] <= t and (s[1] is None or t < s[1]))
    kind = scene[2]
    if kind == "hook":
        blur = SRC["shifts"].convert("RGB").resize((W, H)).filter(ImageFilter.GaussianBlur(18))
        frame.paste(Image.blend(blur.crop((0, 0, W, H)) if blur.width >= W else blur.resize((W, H)), Image.new("RGB", (W, H), NAVY), 0.6), (0, 0))
        frame.alpha_composite(LOGO, ((W - 96) // 2, 90))
        pop = min(1, t / 0.35)
        f = font(int(118 * (0.85 + 0.15 * ease(pop))))
        centered_lines(d, ["Jagar du fortfarande", "tidlappar?"], 330, f, [WHITE, SKY, WHITE], stroke=0)
    elif kind == "shot":
        s0, s1, _, src, (mw, mh, cyc), z0, z1 = scene
        p = ease(min(1, (t - s0) / (s1 - s0)))
        card(frame, SRC[src], mw, mh, cyc, z0 + (z1 - z0) * p)
    else:
        p = ease(min(1, (t - scene[0]) / 0.5))
        big = LOGO.resize((int(220 * (0.8 + 0.2 * p)),) * 2)
        frame.alpha_composite(big, ((W - big.width) // 2, 170))
        centered_lines(d, ["Testa gratis i 14 dagar"], 470, font(104), [WHITE])
        centered_lines(d, ["byggexp.se"], 630, font(92), [SKY])
    if kind == "shot":
        for text, cs, ce in chunks:
            if cs <= t <= ce + 0.15:
                f = font(72)
                w = d.textlength(text, font=f)
                stroked(d, ((W - w) / 2, 930), text, f, WHITE)
                break
    return frame.convert("RGB")


def main():
    al = json.load(open(HERE / "alignment.json"))
    total = al["character_end_times_seconds"][-1] + 1.0
    chunks = caption_chunks(al)
    out = HERE / "video-gps-16x9.mp4"
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
    main()
