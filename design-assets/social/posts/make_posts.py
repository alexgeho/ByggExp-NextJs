"""Brand post images 4:5 (1080x1350): headline + real site screenshot card + logo/url.
Run: python3 make_posts.py src   (screenshots in src/, made by shot-tools.mjs / shot6.mjs / pdfs.mjs with puppeteer-core)"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
W, H = 1080, 1350
NAVY, SKY, WHITE = (11, 26, 46), (111, 208, 248), (255, 255, 255)

# out, headline lines (second in SKY), parts stacked top→bottom: (screenshot, crop box px | None) or "ARROW"
# Screenshots: puppeteer, filled forms, 2x (S5, S8). See DESIGN-SYSTEM-SMM.md.
POSTS = [
    ("08-ek-el.jpg", ["Egenkontroll el", "Gratis mall – PDF"], [("egenkontroll-el-mall-0.png", None), ("egenkontroll-el-mall-1.png", None)]),
    ("09-ek-vvs.jpg", ["Egenkontroll VVS", "Gratis mall – PDF"], [("egenkontroll-vvs-mall-0.png", None), ("egenkontroll-vvs-mall-1.png", None)]),
    ("10-ek-bygg.jpg", ["Egenkontroll bygg", "Gratis mall – PDF"], [("egenkontroll-bygg-mall-0.png", None), ("egenkontroll-bygg-mall-1.png", None)]),
    ("11-kontrakt.jpg", ["Entreprenadkontrakt", "Gratis mall – AB 04"], [("kontrakt-0.png", None), ("kontrakt-1.png", None), ("kontrakt-2.png", None)]),
    ("12-takstolar.jpg", ["Hur många takstolar?", "Räkna direkt"], [("takstolar.png", (66, 66, 1032, 468)), ("takstolar.png", (66, 1404, 1032, 1572))]),
    ("00-verktyg.jpg", ["60+ gratis verktyg", "för byggare"], [("c1.png", None), "GAP", ("c2.png", None), "GAP", ("c3.png", None)]),
    ("04-ob.jpg", ["OB eller övertid?", "Räkna tillägget"], [("m-ob.png", (36, 36, 1076, 948))]),
    ("05-egenkontroll.jpg", ["Egenkontroll våtrum", "Klar på bygget"], [("m-ek.png", (30, 2900, 1068, 3365)), ("m-ek.png", (30, 3725, 1068, 4090)), ("m-ek.png", (30, 340, 1068, 500))]),
    ("07-ata-trigger.jpg", ["Kommentera ÄTA", "– få mallen gratis"], [("ata-pdf.png", (120, 105, 1545, 1450))]),
    ("06-faktura.jpg", ["Från ÄTA", "till faktura"], [("m-ata.png", (60, 940, 1038, 1180)), ("m-ata.png", (60, 3133, 1038, 3372)), "ARROW", ("m-fk2.png", (60, 652, 1038, 892)), ("m-fk2.png", (60, 2532, 1038, 3054))]),
    # S14 LinkedIn product posts: real app screens from public/landing/features (flattened to src/f-*.png)
    ("20-system.jpg", ["Tid, ÄTA, faktura, lön", "I ett system för bygget"], [("a-overview.png", (0, 0, 1040, 600))]),  # admin.byggexp.se, Chrome zoom capture
    ("21-gps.jpg", ["Vem var på bygget?", "Appen vet – med GPS"], [("f-shifts.png", (1926, 360, 2374, 1170))]),
    ("22-attest.jpg", ["Varje pass loggat", "Ut som Excel eller PDF"], [("a-pass.png", (480, 0, 1568, 290)), "ARROW", ("a-export.png", (0, 70, 496, 350))]),
    ("23-lon.jpg", ["Lönen den 25:e?", "Timmarna finns redan"], [("a-lon1.png", (0, 60, 1040, 545)), ("a-lon2.png", None)]),
    ("24-planering.jpg", ["Vem jobbar var?", "Allt på en skärm"], [("f-plan.png", (583, 468, 1488, 1062))]),
    ("25-foto.jpg", ["Hur såg det ut?", "Foton per arbetspass"], [("f-foto.png", (1919, 360, 2374, 900))]),
    ("26-pris.jpg", ["Vad kostar det?", "Från 299 kr i månaden"], [("pris.png", (0, 30, 770, 360)), "GAP", ("pris.png", (815, 30, 1585, 360)), "GAP", ("pris.png", (1630, 30, 2400, 360))]),
]
FOOTERS = ("row", "small", "stack", "right")  # S10: owner picks one; default below
FOOTER = "row"

def font(size, weight="Heavy"):
    f = ImageFont.truetype("/System/Library/Fonts/SFNS.ttf", size)
    try:
        f.set_variation_by_name(weight)
    except Exception:
        pass
    return f


def bg():
    img = Image.new("RGB", (W, H), NAVY)
    glow = Image.new("L", (W, H), 0)
    ImageDraw.Draw(glow).ellipse((-200, 650, W + 200, 1900), fill=130)
    glow = glow.filter(ImageFilter.GaussianBlur(220))
    return Image.composite(Image.new("RGB", (W, H), (35, 148, 255)), img, glow).convert("RGBA")


def rounded(img, r):
    m = Image.new("L", img.size, 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, img.width - 1, img.height - 1), r, fill=255)
    img.putalpha(m)
    return img


def make(out, lines, parts, src_dir, footer=FOOTER):
    frame = bg()
    d = ImageDraw.Draw(frame)
    f = font(92)
    for i, t in enumerate(lines):
        w = d.textlength(t, font=f)
        d.text(((W - w) / 2, 150 + i * 104), t, font=f, fill=WHITE if i == 0 else SKY)
    cw = 1700
    blocks = []
    for p in parts:
        if p in ("ARROW", "GAP"):
            blocks.append(p)
            continue
        im = Image.open(Path(src_dir) / p[0]).convert("RGB")
        im = im.crop(p[1]) if p[1] else im
        blocks.append(im)
    k = cw / max(b.width for b in blocks if not isinstance(b, str))  # one scale for all parts, left-aligned
    blocks = [b if isinstance(b, str) else b.resize((round(b.width * k), round(b.height * k)), Image.LANCZOS) for b in blocks]
    gap = 140
    pad = 0 if parts[0][0] in ("m-ob.png", "takstolar.png") else 70  # whole tool card has its own frame; crops get equal white margin (S5)
    sgap = 40  # between stacked cards
    first = next(b for b in blocks if not isinstance(b, str))
    fill = first.getpixel((2, 2))  # page background of the screenshot, so tiles sit on their own surface
    card = Image.new("RGB", (cw + 2 * pad, sum(gap if b == "ARROW" else sgap if b == "GAP" else b.height for b in blocks) + 2 * pad), fill if "GAP" in blocks else WHITE)
    cd, yy = ImageDraw.Draw(card), pad
    for b in blocks:
        if b == "GAP":
            yy += sgap
            continue
        if b == "ARROW":
            cx, cy = pad + cw // 2, yy + gap // 2
            cd.polygon([(cx - 44, cy - 24), (cx + 44, cy - 24), (cx, cy + 30)], fill=(35, 148, 255))
            yy += gap
            continue
        card.paste(b, (pad, yy))
        yy += b.height
    mw, mh, top, bottom = W - 2 * 64, 0, 400, 1185
    k = min(mw / card.width, (bottom - top) / card.height)
    card = rounded(card.resize((round(card.width * k), round(card.height * k)), Image.LANCZOS).convert("RGBA"), 24)
    x, y = (W - card.width) // 2, top + (bottom - top - card.height) // 2
    sh = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    sh.paste((0, 0, 0, 150), (x, y + 20, x + card.width, y + 20 + card.height), card.split()[3])
    frame.alpha_composite(sh.filter(ImageFilter.GaussianBlur(28)))
    frame.alpha_composite(card, (x, y))
    logo = Image.open(ROOT / "public/icon-512.png").convert("RGBA")
    u = "byggexp.se"
    if footer == "row":  # logo + url on one line, centred
        fu, ls = font(48), 72
        uw = d.textlength(u, font=fu)
        lx = (W - (ls + 20 + uw)) / 2
        frame.alpha_composite(logo.resize((ls, ls)), (int(lx), 1225))
        d.text((lx + ls + 20, 1232), u, font=fu, fill=WHITE)
    elif footer == "small":  # no logo, small url
        fu = font(34, "Semibold")
        uw = d.textlength(u, font=fu)
        d.text(((W - uw) / 2, 1250), u, font=fu, fill=(255, 255, 255, 200))
    elif footer == "stack":  # logo, url under it
        ls, fu = 64, font(30, "Semibold")
        frame.alpha_composite(logo.resize((ls, ls)), ((W - ls) // 2, 1205))
        uw = d.textlength(u, font=fu)
        d.text(((W - uw) / 2, 1280), u, font=fu, fill=WHITE)
    else:  # "right": url bottom-right in SKY
        fu = font(38, "Bold")
        uw = d.textlength(u, font=fu)
        d.text((W - 64 - uw, 1260), u, font=fu, fill=SKY)
    frame.convert("RGB").save(HERE / out, quality=92)
    print(out)


if __name__ == "__main__":
    for p in POSTS:
        make(*p, sys.argv[1])
    if "--footers" in sys.argv:  # comparison set for owner
        for f in FOOTERS:
            make(f"04-ob-{f}.jpg", POSTS[6][1], POSTS[6][2], sys.argv[1], f)
