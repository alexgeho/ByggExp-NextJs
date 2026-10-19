"""iPhone mockup video 16:9 over the brand wave background.
Usage: python3 make_mockup.py <screen.mp4> <out.mp4> [start_s] [dur_s] ["Right side text"]"""
import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFont

HERE = Path(__file__).resolve().parent
BG = Path.home() / "Documents/ByggExp/logos-banners/background.png"
W, H = 1920, 1080
SCR_H = 972                      # screen height on canvas (phone ~ full height, as in the SV onboarding video)
SCR_W = round(SCR_H * 1206 / 2622)
BEZEL = 12                       # black bezel around the screen
R_SCR = 62                       # screen corner radius
PHONE_CX = 960                   # phone centred
FF = imageio_ffmpeg.get_ffmpeg_exe()


def font(size, weight="Semibold"):
    f = ImageFont.truetype("/System/Library/Fonts/SFNS.ttf", size)
    try:
        f.set_variation_by_name(weight)
    except Exception:
        pass
    return f


def layers(text):
    tmp = HERE / "build"
    tmp.mkdir(exist_ok=True)
    pw, ph = SCR_W + 2 * BEZEL, SCR_H + 2 * BEZEL
    px, py = PHONE_CX - pw // 2, (H - ph) // 2

    # background + soft phone shadow + right-side text
    bg = Image.open(BG).convert("RGB").resize((W, H), Image.LANCZOS)
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle((px + 10, py + 30, px + pw + 10, py + ph + 30), R_SCR + BEZEL, fill=(10, 40, 90, 90))
    from PIL import ImageFilter
    bg = Image.alpha_composite(bg.convert("RGBA"), shadow.filter(ImageFilter.GaussianBlur(40)))
    if text:
        d = ImageDraw.Draw(bg)
        f = font(54, "Regular")
        x, y = 1232, 0
        lines, cur = [], ""
        for w in text.split():
            t = (cur + " " + w).strip()
            if d.textlength(t, font=f) <= 640:
                cur = t
            else:
                lines.append(cur); cur = w
        lines.append(cur)
        y = 1012 - len(lines) * 58  # bottom-anchored, right of the phone
        for i, l in enumerate(lines):
            d.text((x, y + i * 58), l, font=f, fill=(255, 255, 255), stroke_width=0)
    bg.convert("RGB").save(tmp / "bg.png")

    # bezel frame with transparent screen hole (titanium edge + black bezel)
    frame = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(frame)
    d.rounded_rectangle((px - 4, py - 4, px + pw + 4, py + ph + 4), R_SCR + BEZEL + 4, fill=(196, 202, 212, 255))
    d.rounded_rectangle((px, py, px + pw, py + ph), R_SCR + BEZEL, fill=(12, 12, 14, 255))
    hole = Image.new("L", (W, H), 0)
    ImageDraw.Draw(hole).rounded_rectangle((px + BEZEL, py + BEZEL, px + BEZEL + SCR_W, py + BEZEL + SCR_H), R_SCR, fill=255)
    a = frame.split()[3].point(lambda v: v)
    a = Image.composite(Image.new("L", (W, H), 0), a, hole)
    frame.putalpha(a)
    # side buttons
    for y0, y1 in ((py + 190, py + 260), (py + 290, py + 380), (py + 400, py + 490)):
        d2 = ImageDraw.Draw(frame)
        d2.rounded_rectangle((px - 8, y0, px - 3, y1), 2, fill=(170, 176, 186, 255))
    d2.rounded_rectangle((px + pw + 3, py + 300, px + pw + 8, py + 440), 2, fill=(170, 176, 186, 255))
    frame.save(tmp / "frame.png")

    # rounded mask for the screen video
    m = Image.new("L", (SCR_W, SCR_H), 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, SCR_W - 1, SCR_H - 1), R_SCR, fill=255)
    m.save(tmp / "mask.png")
    return tmp, px + BEZEL, py + BEZEL


def main():
    src, out = sys.argv[1], sys.argv[2]
    start = float(sys.argv[3]) if len(sys.argv) > 3 else 0
    dur = float(sys.argv[4]) if len(sys.argv) > 4 else 0
    text = sys.argv[5] if len(sys.argv) > 5 else ""
    tmp, sx, sy = layers(text)
    cut = (["-ss", str(start)] if start else []) + (["-t", str(dur)] if dur else [])
    fc = (f"[1:v]fps=30,scale={SCR_W}:{SCR_H}:flags=lanczos,format=rgba[s];"
          f"[2:v]format=gray[m];[s][m]alphamerge=shortest=1[sm];"
          f"[0:v][sm]overlay={sx}:{sy}:shortest=1[b];[b][3:v]overlay=0:0:shortest=1,format=yuv420p[v]")
    subprocess.run([FF, "-y", "-loglevel", "error", "-loop", "1", "-i", str(tmp / "bg.png"), *cut, "-i", src,
                    "-loop", "1", "-i", str(tmp / "mask.png"), "-loop", "1", "-i", str(tmp / "frame.png"),
                    "-filter_complex", fc, "-map", "[v]", "-r", "30", "-c:v", "libx264", "-crf", "18",
                    "-preset", "medium", "-an", out], check=True)
    print(out)


if __name__ == "__main__":
    main()
