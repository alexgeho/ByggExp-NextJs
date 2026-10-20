"""Feature posts 4:5 (S16, S17): headline + price pill + the site's own feature photo (laptop + phone mockup).
Slide 1 = whole mockup from public/landing/features, slide 2 = close-up of the main spot (phone screen or laptop crop).
Pinned post = hero collage (src/hero.png) from the live home page. Store badges: src/stores.png (shot-hero.mjs).
Run: python3 make_features.py   → v4/*.jpg"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

from make_posts import NAVY, ROOT, SKY, WHITE, W, H, bg, font, rounded

HERE = Path(__file__).resolve().parent
FEAT = ROOT / "public/landing/features"
OUT = HERE / "v4"
PHONE = (1905, 270, 2395, 1310)  # phone in every laptop+phone mockup (2400 px wide)

# prices from src/components/HeroV2/HeroV2.tsx (S17)
PRICE = {
    "hero": "299 kr/mån · +69 kr/arbetare · 14 dagar gratis",
    "kontoret": "299 kr/mån · 14 dagar gratis",
    "bygget": "299 kr/mån + 69 kr/arbetare",
    "lon": "299 kr/mån + 69 kr/arbetare",  # hours come from the app, so the full price (critic)
}
BADGES = {"bygget"}

# critic fixes on the site photos: Cyrillic placeholder, real e-mails, empty demo payroll rows
FIXES = {
    "7offerter": [("fill", (1326, 566, 1445, 594), (1450, 580))],
    "3personal": [("blur", (1200, 440, 1395, 1178))],
    "12salary": [("fill", (640, 662, 2095, 1215), (900, 750)), ("fill", (2095, 662, 2145, 1130), (900, 750))],
}

# out, headline (second line SKY), rubric, mockup, slide-2 crop box (PHONE = phone screen with bezel)
FEATURES = [
    ("01-tidrapport", ["Timmar på lappar?", "Tidrapport med GPS"], "bygget", "1arbetspass", PHONE),
    ("02-lon", ["Lönen den 25:e?", "Timmarna finns redan"], "lon", "12salary", (620, 170, 1880, 700)),
    ("03-faktura", ["Faktura med ROT?", "Ett klick i fakturan"], "kontoret", "8fakturor", PHONE),
    ("04-offert", ["Offert till kunden?", "Skapa och dela"], "kontoret", "7offerter", PHONE),
    ("05-planering", ["Vem jobbar var?", "Planera per person"], "bygget", "5planering", (580, 470, 1500, 1080)),
    ("06-foto", ["Hur såg det ut?", "Foton per projekt"], "bygget", "4foto", PHONE),
    ("07-kvitton", ["Kvitton i fickan?", "Fota dem i appen"], "bygget", "11costs", PHONE),
    ("08-ekonomi", ["Går projektet plus?", "Se marginalen direkt"], "kontoret", "9ekonomi", (1380, 180, 2110, 600)),
    ("09-narvaro", ["Vem är på bygget?", "Närvaro i realtid"], "bygget", "3personal", PHONE),
    ("10-verktyg", ["Var är verktygen?", "Koll med QR-kod"], "bygget", "6verktyg", PHONE),  # laptop status column is truncated
    # 11-uppgifter dropped: the site photo shows English notifications (critic)
]
TOP, BOTTOM = 480, 1185  # visual area under the price pill, inside the square grid crop (S15)


def fix(name, im):
    d = ImageDraw.Draw(im)
    for op, box, *ref in FIXES.get(name, []):
        if op == "fill":
            d.rectangle(box, fill=im.getpixel(ref[0]))
        else:
            im.paste(im.crop(box).filter(ImageFilter.GaussianBlur(14)), box[:2])
    return im


def phone(im):
    """Phone screen with bezel only: round mask so the laptop behind does not stick out (critic)."""
    c = im.crop(PHONE)
    m = Image.new("L", c.size, 0)
    ImageDraw.Draw(m).rounded_rectangle((-6, 2, c.width - 3, c.height - 1), 88, fill=255)
    c.putalpha(Image.composite(c.split()[3], m, m))
    return c


def head(lines, price):
    frame = bg()
    d = ImageDraw.Draw(frame)
    f = font(92)
    for i, t in enumerate(lines):
        w = d.textlength(t, font=f)
        d.text(((W - w) / 2, 150 + i * 104), t, font=f, fill=WHITE if i == 0 else SKY)
    fp = font(36, "Bold")  # price pill (S17): SKY fill, navy text, always visible
    tw = d.textlength(price, font=fp)
    x0, y0 = (W - tw) / 2 - 30, 385
    d.rounded_rectangle((x0, y0, x0 + tw + 60, y0 + 64), 32, fill=SKY)
    d.text((x0 + 30, y0 + 11), price, font=fp, fill=NAVY)
    return frame


def place(frame, im, maxw, card=False):
    k = min(maxw / im.width, (BOTTOM - TOP) / im.height)
    im = im.resize((round(im.width * k), round(im.height * k)), Image.LANCZOS)
    if card:
        im = rounded(im.convert("RGBA"), 24)
    x, y = (W - im.width) // 2, TOP + (BOTTOM - TOP - im.height) // 2
    sh = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    sh.paste((0, 0, 0, 150 if card else 90), (x, y + 20, x + im.width, y + 20 + im.height), im.split()[3])
    frame.alpha_composite(sh.filter(ImageFilter.GaussianBlur(28)))
    frame.alpha_composite(im, (x, y))


def footer(frame, badges):
    d = ImageDraw.Draw(frame)
    logo = Image.open(ROOT / "public/icon-512.png").convert("RGBA").resize((72, 72))
    fu, u = font(48), "byggexp.se"
    uw = d.textlength(u, font=fu)
    if not badges:  # S10 "row", centred
        lx = (W - (72 + 20 + uw)) / 2
    else:  # logo + url left, App Store + Google Play right (S16)
        lx = 64
        s = Image.open(HERE / "src/stores.png").convert("RGBA").crop((313, 64, 931, 151))
        s.putalpha(s.split()[3].point(lambda a: 255 if a > 200 else 0))  # drop the page scrim around the badges
        s = s.resize((round(s.width * 64 / s.height), 64), Image.LANCZOS)
        frame.alpha_composite(s, (W - 64 - s.width, 1229))
    frame.alpha_composite(logo, (int(lx), 1225))
    d.text((lx + 92, 1232), u, font=fu, fill=WHITE)


def save(frame, name):
    OUT.mkdir(exist_ok=True)
    frame.convert("RGB").save(OUT / f"{name}.jpg", quality=92)
    print(name)


def main():
    f = head(["Hela byggföretaget", "på ett ställe"], PRICE["hero"])
    place(f, Image.open(HERE / "src/hero.png").convert("RGBA"), 1000)  # collage carries its own store badges
    footer(f, False)
    save(f, "00-hero")
    for name, lines, rubric, mock, box in FEATURES:
        src = fix(mock, Image.open(FEAT / f"{mock}.webp").convert("RGBA"))
        badges = rubric in BADGES
        f = head(lines, PRICE[rubric])
        place(f, src, W - 40)
        footer(f, badges)
        save(f, f"{name}-1")
        f = head(lines, PRICE[rubric])
        crop = src.crop(box)
        if box == PHONE:
            place(f, phone(src), W)
        else:  # laptop close-up on a white card with equal margin (S5)
            card = Image.new("RGBA", (crop.width + 80, crop.height + 80), WHITE)
            card.alpha_composite(crop, (40, 40))
            place(f, card, W - 2 * 64, card=True)
        footer(f, badges)
        save(f, f"{name}-2")


if __name__ == "__main__":
    main()
