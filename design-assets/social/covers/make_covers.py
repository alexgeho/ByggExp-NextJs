"""Render brand covers (FB / LinkedIn / YouTube) for ByggExp. Run: python3 -I make_covers.py"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
SHOT = ROOT / "public/landing/features/1arbetspass.webp"
NAVY, NAVY2, SKY, WHITE = (11, 26, 46), (15, 39, 71), (111, 208, 248), (255, 255, 255)


def font(size, weight):
    f = ImageFont.truetype("/System/Library/Fonts/SFNS.ttf", size)
    try:
        f.set_variation_by_name(weight)
    except Exception:
        pass
    return f


def background(w, h, cell):
    img = Image.new("RGB", (w, h), NAVY)
    grad = Image.linear_gradient("L").rotate(-45, expand=True).resize((w, h))
    img = Image.composite(Image.new("RGB", (w, h), NAVY2), img, grad)
    glow = Image.new("L", (w, h), 0)
    ImageDraw.Draw(glow).ellipse((int(w * .5), int(-h * .2), int(w * 1.05), int(h * 1.2)), fill=120)
    glow = glow.filter(ImageFilter.GaussianBlur(max(w, h) // 10))
    img = Image.composite(Image.new("RGB", (w, h), (35, 148, 255)), img, glow)
    grid = ImageDraw.Draw(img, "RGBA")
    for x in range(0, w, cell):
        grid.line((x, 0, x, h), fill=(255, 255, 255, 14))
    for y in range(0, h, cell):
        grid.line((0, y, w, y), fill=(255, 255, 255, 14))
    return img


def wrap(d, text, f, width):
    out, cur = [], ""
    for word in text.split():
        t = (cur + " " + word).strip()
        if d.textlength(t, font=f) <= width:
            cur = t
        else:
            out.append(cur); cur = word
    return out + [cur]


def cover(name, w, h, safe, lines, fs, cell, sub=None, tw=None):
    sl, st, sw, sh = safe
    img = background(w, h, cell)
    d = ImageDraw.Draw(img)
    big, small = font(fs, "Heavy"), font(int(fs * .42), "Medium")
    lh, slh = int(fs * 1.08), int(fs * .42 * 1.4)
    sub_lines = wrap(d, sub, small, tw) if sub else []
    block_h = lh * len(lines) + (int(fs * .4) + slh * len(sub_lines) if sub_lines else 0)
    y = st + (sh - block_h) // 2
    text_w = 0
    for text, color in lines:
        d.text((sl, y), text, font=big, fill=color)
        text_w = max(text_w, d.textlength(text, font=big))
        y += lh
    y += int(fs * .4)
    for t in sub_lines:
        d.text((sl, y), t, font=small, fill=(200, 214, 232))
        text_w = max(text_w, d.textlength(t, font=small))
        y += slh
    # product screenshot fills the rest of the safe area
    gap = int(fs * .8)
    box_w, box_h = int(sl + sw - (sl + text_w + gap)), sh
    shot = Image.open(SHOT).convert("RGBA")
    shot.thumbnail((box_w, box_h), Image.LANCZOS)
    sx = int(sl + text_w + gap + (box_w - shot.width) // 2)
    sy = st + (box_h - shot.height) // 2
    shadow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    shadow.paste((0, 0, 0, 110), (sx, sy + fs // 4, sx + shot.width, sy + fs // 4 + shot.height), shot.split()[3])
    shadow = shadow.filter(ImageFilter.GaussianBlur(fs // 3))
    img = Image.alpha_composite(img.convert("RGBA"), shadow)
    img.alpha_composite(shot, (sx, sy))
    img.convert("RGB").save(HERE / f"{name}.png", optimize=True)


SUB = "Snabbare fakturering och lönehantering, automatiska påminnelser i uppgifter, kontroll av arbetspass i realtid, planering."
TITLE = [("Automatisk och manuell", WHITE), ("tidrapportering och", WHITE), ("projekthantering", WHITE), ("för byggföretag", SKY)]
SHORT = [("Tidrapportering och projekthantering", WHITE), ("för byggföretag", SKY)]

# Facebook: 1640x624, keep inside centre ~1180px (mobile crops the sides)
cover("facebook-cover", 1640, 624, (230, 40, 1180, 544), TITLE, 50, 48, SUB, 560)
# LinkedIn company: 1128x191, logo overlaps bottom-left -> start content at x=300
cover("linkedin-cover", 1128, 191, (300, 20, 800, 151), SHORT, 26, 24)
# YouTube: 2560x1440, safe area 1546x423 in the centre
cover("youtube-banner", 2560, 1440, (507, 509, 1546, 423), TITLE, 62, 64, SUB, 720)
print("ok")
