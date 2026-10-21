"""S20: FB cover that survives the mobile crop. Run: python3 -I make_fb_mobile.py
Mobile app shows only x 380-1265, y ~100-568 of the 1640x624 cover; the avatar covers centre-bottom
(circle c=(822,509) r=188), back/share icons sit at y 190-255 on both edges."""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
sys.path.insert(0, str(Path(__file__).resolve().parent))
import make_covers as mc  # noqa: E402

HERE, TILES = mc.HERE, mc.TILES
W, H = 1640, 624
MX0, MX1, MY0 = 480, 1225, 88  # x from 480: FB back arrow sits at x 400-475  # mobile-safe zone
AV = (822, 509, 188)  # avatar circle on mobile
GREY = (207, 227, 247)  # site hero dark: .hero-v2-price #cfe3f7 (HeroV2.scss)
SKYB, BLUE, DARK = (35, 148, 255), (30, 111, 217), (11, 61, 145)  # голубой / синий / тёмно-голубой
PRICE = [("299 kr/mån", "offert, faktura, lön, projektekonomi, projektledning, fakturaskanning m.m."),
         ("+69 kr/arbetare", "tidrapport, närvaro, planering, egenkontroll, kvittoskanning m.m.")]


def badges(h):
    b = Image.open(TILES / "stores.png").convert("RGBA").crop((313, 64, 931, 151))
    b.putalpha(b.split()[3].point(lambda a: 255 if a > 200 else 0))
    out = [b.crop((0, 0, 296, 87)), b.crop((321, 0, 618, 87))]
    return [x.resize((round(x.width * h / x.height), h), Image.LANCZOS) for x in out]


def paste_shadow(img, im, x, y, blur=18):
    sh = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sh.paste((0, 0, 0, 110), (x, y + 10, x + im.width, y + 10 + im.height), im.split()[3])
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(blur)))
    img.alpha_composite(im, (x, y))


def render(name, price_col, align, k=.9):
    """S20: proportions of the site hero (HeroV2.scss) scaled by k: h1 60/1.05 in 2 lines,
    32 gap, price 19/1.5 with 4 between lines, 32 gap, store badges 48."""
    img = mc.background(W, H, 48).convert("RGBA")
    d = ImageDraw.Draw(img)
    big = mc.font(round(60 * k), "Semibold")  # site h1: weight 600, all white
    fp, fl = mc.font(round(19 * k), "Bold"), mc.font(round(19 * k), "Regular")
    lh1, lh2, gap, blk = 60 * k * 1.05, 19 * k * 1.5, 4 * k, 32 * k
    dash = d.textlength(" – ", font=fl)
    rows = []
    for p, l in PRICE:  # flows like a paragraph: first line after "price – ", the rest from the left edge
        first = 1080 - MX0 - d.textlength(p, font=fp) - dash  # end before the FB share/menu icons
        ws, ls = l.split(), [""]
        for w in ws:
            t = (ls[-1] + " " + w).strip()
            if d.textlength(t, font=fl) <= (first if len(ls) == 1 else 1080 - MX0):
                ls[-1] = t
            else:
                ls.append(w)
        if len(ls) > 1 and " " not in ls[-1]:  # no lone word ("m.m.") on the last line
            head, _, last = ls[-2].rpartition(" ")
            ls[-2], ls[-1] = head, last + " " + ls[-1]
        rows.append((p, ls))
    x0 = MX0
    y = MY0
    for line in ("Hela byggföretaget", "på ett ställe"):
        d.text((x0, y + lh1 * .8), line, font=big, fill=mc.WHITE, anchor="ls")
        y += lh1
    y += blk
    for p, ls in rows:
        d.text((x0, y + lh2 * .75), p, font=fp, fill=price_col, anchor="ls")
        d.text((x0 + d.textlength(p, font=fp), y + lh2 * .75), " – ", font=fl, fill=GREY, anchor="ls")
        for i, t in enumerate(ls):
            lx = x0 + d.textlength(p, font=fp) + dash if i == 0 else x0
            d.text((lx, y + i * lh2 + lh2 * .75), t, font=fl, fill=GREY, anchor="ls")
        y += lh2 * len(ls) + gap
    y += blk - gap
    # store badges left of the avatar, stacked
    bh = round(48 * k)
    bs = badges(bh)
    cx, cy, r = AV
    by = int(y)
    bx = x0  # badges on the same left line as the text
    for i, bd in enumerate(bs):
        img.alpha_composite(bd, (int(bx), by + i * (bh + round(12 * k))))
    # photo right of the avatar; desktop shows the rest up to 1600
    hero = Image.open(TILES / "hero-nostores.png").convert("RGBA")
    hero.thumbnail((620, 300), Image.LANCZOS)
    paste_shadow(img, hero, cx + r + 30, 260)  # bottom clear of the mobile white card (y 568)
    img.convert("RGB").save(HERE / f"{name}.png", optimize=True)
    return img


def phone_preview(img, name):
    """What the owner sees in the FB app (crop + avatar + icons), next to desktop."""
    s = .66
    crop = img.convert("RGB").crop((377, 27, 1267, 568)).resize((int(890 * s), int(541 * s)), Image.LANCZOS)
    ph = Image.new("RGB", (crop.width, crop.height + 60), (255, 255, 255))
    ph.paste(crop, (0, 0))
    dd = ImageDraw.Draw(ph, "RGBA")
    dd.rectangle((0, 0, crop.width, 50), fill=(0, 0, 0, 60))  # status bar
    for x in (40, 490, 545):
        dd.ellipse((x - 20, 110, x + 20, 150), fill=(0, 0, 0, 90))
    dd.rounded_rectangle((0, crop.height - 3, crop.width, crop.height + 60), 30, fill=(255, 255, 255))
    cx, cy, r = [(v - o) * s for v, o in zip(AV, (377, 27, 0))]
    dd.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(64, 156, 240), outline=(255, 255, 255), width=6)
    desk = img.convert("RGB").resize((820, 312), Image.LANCZOS)
    out = Image.new("RGB", (820 + 40 + ph.width, max(312, ph.height)), (240, 242, 245))
    out.paste(desk, (0, 0)); out.paste(ph, (860, 0))
    out.save(HERE / f"{name}-preview.png")


if __name__ == "__main__":
    phone_preview(render("fb-site", mc.WHITE, "left", .9), "fb-site")  # k=1 runs into the avatar
    print("ok")
