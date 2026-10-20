"""Render brand covers (FB / LinkedIn / YouTube) for ByggExp. Run: python3 -I make_covers.py"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
SHOT = ROOT / "public/landing/features/1arbetspass.webp"
TILES = HERE.parent / "posts/src"
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


def tiles(names, gap=36, r=48):
    """S13: real tool tiles from the /verktyg hub, stacked like cards."""
    ims = [Image.open(TILES / n).convert("RGBA") for n in names]
    w, h = ims[0].size
    out = Image.new("RGBA", (w, h * len(ims) + gap * (len(ims) - 1)), (0, 0, 0, 0))
    for i, im in enumerate(ims):
        mask = Image.new("L", im.size, 0)
        ImageDraw.Draw(mask).rounded_rectangle((0, 0, w - 1, h - 1), r, fill=255)
        out.paste(im, (0, i * (h + gap)), mask)
    return out


def cover(name, w, h, safe, lines, fs, cell, sub=None, tw=None, shot=None, url=None, price=None, stores=False):
    sl, st, sw, sh = safe
    img = background(w, h, cell)
    d = ImageDraw.Draw(img)
    big, small = font(fs, "Heavy"), font(int(fs * .42), "Medium")
    lh, slh = int(fs * 1.08), int(fs * .42 * 1.4)
    sub_lines = wrap(d, sub, small, tw) if sub else []
    if url:
        sub_lines = sub_lines + [url]
    ph = int(fs * .9)  # S17 price pill, S16 store badges under it
    extra = (int(fs * .4) + ph if price else 0) + (int(fs * .3) + ph if stores else 0)
    block_h = lh * len(lines) + (int(fs * .4) + slh * len(sub_lines) if sub_lines else 0) + extra
    y = st + (sh - block_h) // 2
    text_w = 0
    for text, color in lines:
        d.text((sl, y), text, font=big, fill=color)
        text_w = max(text_w, d.textlength(text, font=big))
        y += lh
    y += int(fs * .4)
    for t in sub_lines:
        d.text((sl, y), t, font=font(int(fs * .42), "Heavy") if t == url else small, fill=SKY if t == url else (200, 214, 232))
        text_w = max(text_w, d.textlength(t, font=small))
        y += slh
    if price:
        y += int(fs * .4) - (int(fs * .4) if sub_lines else 0)
        fp = font(int(ph * .52), "Bold")
        pw = d.textlength(price, font=fp) + ph
        d.rounded_rectangle((sl, y, sl + pw, y + ph), ph // 2, fill=SKY)
        d.text((sl + ph / 2, y + ph * .2), price, font=fp, fill=NAVY)
        text_w = max(text_w, pw)
        y += ph
    if stores:
        y += int(fs * .3)
        b = Image.open(TILES / "stores.png").convert("RGBA").crop((313, 64, 931, 151))
        b.putalpha(b.split()[3].point(lambda a: 255 if a > 200 else 0))
        b = b.resize((round(b.width * ph / b.height), ph), Image.LANCZOS)
        img = img.convert("RGBA")
        img.alpha_composite(b, (sl, y))
        d = ImageDraw.Draw(img)
        text_w = max(text_w, b.width)
    # product screenshot fills the rest of the safe area
    gap = int(fs * .8)
    box_w, box_h = int(sl + sw - (sl + text_w + gap)), sh
    shot = (shot or Image.open(SHOT)).convert("RGBA").copy()
    shot.thumbnail((box_w, box_h), Image.LANCZOS)
    if shot.getextrema()[3][0] == 255:  # opaque crop -> round the card corners (S4 card style)
        m = Image.new("L", shot.size, 0)
        ImageDraw.Draw(m).rounded_rectangle((0, 0, shot.width - 1, shot.height - 1), max(8, shot.width // 40), fill=255)
        shot.putalpha(m)
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

# S13 value covers: what a follower gets, product second
VALUE = [("60+ gratis verktyg", WHITE), ("för byggare", SKY)]
VSUB = "Kalkylatorer och mallar för lön, moms, betong, ÄTA och egenkontroll – utan konto."
OB = Image.open(TILES / "m-ob.png").crop((36, 36, 1076, 948))  # real calculator: input + result (S8)
cover("facebook-cover-value", 1640, 624, (290, 60, 1060, 504), VALUE, 72, 48, VSUB, 560, OB, "byggexp.se")
cover("linkedin-cover-value", 2256, 382, (700, 30, 1300, 322), VALUE, 64, 48, "Kalkylatorer och mallar – utan konto", 900, OB, "byggexp.se")
# YouTube safe area 1546x423 (507, 509), inset 40px so nothing touches the mobile crop
cover("youtube-banner-value", 2560, 1440, (547, 529, 1466, 383), VALUE, 84, 64, VSUB, 700, OB, "byggexp.se")

# S14 LinkedIn = product showcase
PRODUCT = [("Från incheckning", WHITE), ("till lön och faktura", SKY)]
cover("linkedin-cover-product", 2256, 382, (700, 30, 1300, 322), PRODUCT, 60, 48, "Ett system för hela byggföretaget", 900, None, "byggexp.se")

# Facebook: 1640x624, keep inside centre ~1180px (mobile crops the sides)
cover("facebook-cover", 1640, 624, (230, 40, 1180, 544), TITLE, 50, 48, SUB, 560)
# LinkedIn company: 1128x191, logo overlaps bottom-left -> start content at x=300
cover("linkedin-cover", 1128, 191, (300, 20, 800, 151), SHORT, 26, 24)
# YouTube: 2560x1440, safe area 1546x423 in the centre
cover("youtube-banner", 2560, 1440, (507, 509, 1546, 423), TITLE, 62, 64, SUB, 720)
for n in ("linkedin-cover-value", "linkedin-cover-product"):  # LinkedIn rejects the 2x PNG; upload this JPG
    Image.open(HERE / f"{n}.png").convert("RGB").resize((1584, 268), Image.LANCZOS).save(HERE / f"{n}.jpg", quality=92)
# S16/S17: hero collage from the home page + price + store badges
HERO = Image.open(TILES / "hero-nostores.png")  # badges sit next to the price instead
HEAD = [("Hela byggföretaget", WHITE), ("på ett ställe", SKY)]
PRICE = "299 kr/mån + 69 kr/arbetare"
cover("facebook-cover-v4", 1640, 624, (230, 40, 1180, 544), HEAD, 64, 48, shot=HERO, price=PRICE, stores=True)
cover("linkedin-cover-v4", 2256, 382, (700, 24, 1300, 334), HEAD, 60, 48, shot=HERO, price=PRICE, stores=True)
Image.open(HERE / "linkedin-cover-v4.png").convert("RGB").resize((1584, 268), Image.LANCZOS).save(HERE / "linkedin-cover-v4.jpg", quality=92)
print("ok")
