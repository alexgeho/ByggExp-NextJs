"""Vertical Short (1080x1920) from a tool preview + Swedish TTS. Run: python3 -I make_short.py gips"""
import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
W, H = 1080, 1920
NAVY, NAVY2, SKY, WHITE, BLUE = (11, 26, 46), (15, 39, 71), (111, 208, 248), (255, 255, 255), (35, 148, 255)

SHORTS = {
    "gips": {
        "image": "public/landing/verktyg/gips-preview.webp",
        "scenes": [
            (["Hur många", "gipsskivor", "behöver du?"], None),
            (["Skriv in ytan"], "image"),
            (["30 m² =", "11 skivor", "inkl. spill"], None),
            (["Gratis kalkylator"], "cta"),
        ],
        "voice": "Hur många gipsskivor behöver du till rummet? "
                 "Skriv in ytan och antal lager. Kalkylatorn räknar ut skivorna, med spill. "
                 "Trettio kvadratmeter blir elva skivor. "
                 "Gratis kalkylator på bygg exp punkt se.",
    },
}


def font(size, weight="Heavy"):
    f = ImageFont.truetype("/System/Library/Fonts/SFNS.ttf", size)
    try:
        f.set_variation_by_name(weight)
    except Exception:
        pass
    return f


def background():
    img = Image.new("RGB", (W, H), NAVY)
    grad = Image.linear_gradient("L").resize((W, H))
    img = Image.composite(Image.new("RGB", (W, H), NAVY2), img, grad)
    glow = Image.new("L", (W, H), 0)
    ImageDraw.Draw(glow).ellipse((-200, 900, W + 200, 2300), fill=110)
    glow = glow.filter(ImageFilter.GaussianBlur(220))
    img = Image.composite(Image.new("RGB", (W, H), BLUE), img, glow)
    d = ImageDraw.Draw(img, "RGBA")
    for x in range(0, W, 60):
        d.line((x, 0, x, H), fill=(255, 255, 255, 12))
    for y in range(0, H, 60):
        d.line((0, y, W, y), fill=(255, 255, 255, 12))
    return img


def centered(d, lines, y, size, colors):
    f = font(size)
    lh = int(size * 1.12)
    for i, t in enumerate(lines):
        w = d.textlength(t, font=f)
        d.text(((W - w) / 2, y + i * lh), t, font=f, fill=colors[i % len(colors)])
    return y + len(lines) * lh


def scene(lines, kind, image):
    img = background()
    d = ImageDraw.Draw(img)
    logo = Image.open(ROOT / "public/icon-512.png").convert("RGBA").resize((120, 120))
    img.paste(logo, ((W - 120) // 2, 140), logo)
    if kind == "image":
        centered(d, lines, 420, 96, [WHITE])
        shot = Image.open(ROOT / image).convert("RGBA")
        shot.thumbnail((W - 120, 1100))
        x, y = (W - shot.width) // 2, 700
        shadow = Image.new("RGBA", img.size, (0, 0, 0, 0))
        shadow.paste((0, 0, 0, 140), (x, y + 30, x + shot.width, y + 30 + shot.height))
        img = Image.alpha_composite(img.convert("RGBA"), shadow.filter(ImageFilter.GaussianBlur(40)))
        img.alpha_composite(shot, (x, y))
    elif kind == "cta":
        y = centered(d, lines, 780, 104, [WHITE])
        centered(d, ["byggexp.se"], y + 40, 120, [SKY])
    else:
        n = len(lines)
        centered(d, lines, (H - n * 140) // 2, 128, [WHITE, SKY, WHITE] if n == 3 else [WHITE])
    return img.convert("RGB")


def main(key):
    cfg = SHORTS[key]
    out = HERE / key
    out.mkdir(exist_ok=True)
    voice = out / "voice.aiff"
    subprocess.run(["say", "-v", "Alva", "-r", "175", "-o", str(voice), cfg["voice"]], check=True)
    probe = subprocess.run([FFMPEG, "-i", str(voice)], capture_output=True, text=True).stderr
    dur = [l for l in probe.splitlines() if "Duration" in l][0].split("Duration: ")[1].split(",")[0]
    h, m, s = dur.split(":")
    total = float(h) * 3600 + float(m) * 60 + float(s) + 1.2
    weights = [0.22, 0.34, 0.24, 0.20]
    inputs, filters = [], []
    for i, ((lines, kind), wgt) in enumerate(zip(cfg["scenes"], weights)):
        p = out / f"scene{i}.png"
        scene(lines, kind, cfg["image"]).save(p)
        d = total * wgt
        # single still in; zoompan emits exactly `frames` frames for it
        inputs += ["-i", str(p)]
        # slow push-in so stills feel alive
        frames = int(d * 30)
        filters.append(f"[{i}:v]scale=1188:2112,zoompan=z='min(zoom+0.0006,1.06)':d={frames}:s={W}x{H}:fps=30,setsar=1[v{i}]")
    concat = "".join(f"[v{i}]" for i in range(len(cfg["scenes"])))
    fc = ";".join(filters) + f";{concat}concat=n={len(cfg['scenes'])}:v=1:a=0[v]"
    mp4 = out / f"short-{key}.mp4"
    subprocess.run([FFMPEG, "-y", *inputs, "-i", str(voice), "-filter_complex", fc,
                    "-map", "[v]", "-map", f"{len(cfg['scenes'])}:a", "-c:v", "libx264", "-pix_fmt", "yuv420p",
                    "-c:a", "aac", "-b:a", "160k", "-shortest", str(mp4)], check=True, capture_output=True)
    print(mp4, f"{total:.1f}s")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "gips")
