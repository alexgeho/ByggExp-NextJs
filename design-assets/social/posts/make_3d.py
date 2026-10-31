"""Feed posts in the feature-deck 3D style (S23): white 4:5, headline, 3D scene, price row, footer.

python3 make_3d.py            -> out-3d/<id>.jpg
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

HERE = Path(__file__).parent
ROOT = HERE.parents[2]
ART = ROOT.parent / "byggexp-admin/docs/presentations/design-system/assets/3d"
FONTS = HERE / "src/fonts"
OUT = HERE / "out-3d-first10"

W, H = 1080, 1350
NAVY, BLUE, GREY = (10, 24, 40), (35, 148, 255), (91, 117, 145)

# id, headline (2 lines), 3D file, how it works in 3 steps (S26), store badges (S16)
POSTS = [  # first 10, benefit first; no price on the picture (S26)
    ("01-tid", ("Tid med GPS eller manuellt", "löneunderlaget utan lappar"), "tid-1.png",
     ("Stämpla in med GPS eller skriv in timmarna", "Timmarna hamnar på projektet", "Exportera löneunderlaget"), True),
    ("02-ata", ("Varje ÄTA blir en faktura", "ett klick från godkänd ÄTA"), "fakturor-3.png",
     ("Skriv ÄTA:n i projektet", "ÄTA:n godkänns", "Fakturan fylls i åt dig"), False),
    ("03-lon", ("Timmarna blir lön", "timmar och OB per person"), "ekonomi-2.png",
     ("Laget rapporterar tid i appen", "Timmar och OB summeras", "Brutto och skatt räknas"), False),
    ("04-ekonomi", ("Se vinsten per projekt", "medan jobbet pågår"), "ekonomi-1-gold.png",
     ("Lägg budget för projektet", "Kostnader bokförs på projektet", "Se lönsamheten direkt"), False),
    ("05-utlagg", ("Inga tappade kvitton", "fota det direkt i appen"), "utlagg-1.png",
     ("Fota kvittot i butiken", "Det skannas automatiskt", "Hamnar på projektet"), True),
    ("06-planering", ("Hela veckan bemannad", "varnar vid överbokning"), "planering-2.png",
     ("Klicka på en dag", "Välj vem som jobbar var", "Varning vid över 8 h"), True),
    ("07-faktura", ("ROT och moms uträknade", "fakturan klar med din logga"), "offerter-1.png",
     ("Lägg in raderna", "ROT och moms räknas ut", "Skicka PDF med din logga"), False),
    ("08-foto", ("Bilderna på rätt projekt", "per dag och person"), "foto-1.png",
     ("Fota i appen", "Kopplas till arbetspasset", "Sorteras per dag och person"), True),
    ("09-live", ("Vem är på bygget nu?", "se det utan att ringa runt"), "live-3.png",
     ("Arbetaren stämplar in", "Syns direkt hos kontoret", "Hela laget i en lista"), True),
    ("10-verktyg", ("Vem har borrmaskinen?", "skanna QR och se direkt"), "verktyg-1.png",
     ("QR-kod på verktyget", "Skanna när du tar det", "Alla ser vem som har det"), True),
]


def font(size, weight="Bold"):
    return ImageFont.truetype(str(FONTS / f"DMSans-{weight}.ttf"), size)


def fit(d, text, size, maxw, weight="Bold"):
    while d.textlength(text, font=font(size, weight)) > maxw:
        size -= 2
    return font(size, weight)


def headline_size():
    # One size for every headline line in the series, so posts look alike in the feed.
    d = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    return min(fit(d, t, 76, W - 128).size for p in POSTS for t in p[1])


def wrap(d, text, ft, maxw):
    # One line if it fits, else two balanced lines (no lone last word).
    if d.textlength(text, font=ft) <= maxw:
        return [text]
    w = text.split()
    cuts = [(" ".join(w[:i]), " ".join(w[i:])) for i in range(1, len(w))]
    return list(min(cuts, key=lambda c: max(d.textlength(x, font=ft) for x in c)))


def steps(f, d, items):
    # S26: how it works, 3 steps with green number balls (as in the feature decks)
    col, top = (W - 128) // 3, 985
    ft, fn = font(30, "Medium"), font(28, "Bold")
    for i, text in enumerate(items):
        cx = 64 + col * i + col // 2
        d.ellipse((cx - 24, top, cx + 24, top + 48), fill=(218, 240, 225))
        n = str(i + 1)
        d.text((cx - d.textlength(n, font=fn) / 2, top + 7), n, font=fn, fill=(69, 179, 107))
        for j, line in enumerate(wrap(d, text, ft, col - 24)):
            d.text((cx - d.textlength(line, font=ft) / 2, top + 66 + j * 40), line, font=ft, fill=NAVY)


def post(lines, art, items, badges, size=76):
    f = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    d = ImageDraw.Draw(f)
    for i, t in enumerate(lines):  # S15: headline inside the 1080 square (y 135-1215)
        ft = font(size)
        d.text(((W - d.textlength(t, font=ft)) / 2, 160 + i * 92), t, font=ft, fill=NAVY if i == 0 else BLUE)
    im = Image.open(ART / art).convert("RGBA")
    side = 620
    im = im.resize((side, side), Image.LANCZOS)
    f.alpha_composite(im, ((W - side) // 2, 345))
    steps(f, d, items)
    footer(f, d, badges)
    return f


def footer(f, d, badges):
    logo = Image.open(ROOT / "public/icon-512.png").convert("RGBA").resize((64, 64))
    fu, u = font(42, "Medium"), "byggexp.se"
    uw = d.textlength(u, font=fu)
    if badges:
        lx = 64
        s = Image.open(HERE / "src/stores.png").convert("RGBA").crop((313, 64, 931, 151))
        s.putalpha(s.split()[3].point(lambda a: 255 if a > 200 else 0))
        s = s.resize((round(s.width * 56 / s.height), 56), Image.LANCZOS)
        f.alpha_composite(s, (W - 64 - s.width, 1238))
    else:
        lx = (W - (64 + 18 + uw)) / 2
    f.alpha_composite(logo, (int(lx), 1234))
    d.text((lx + 82, 1240), u, font=fu, fill=NAVY)


def main():
    OUT.mkdir(exist_ok=True)
    size = headline_size()
    for pid, lines, art, items, badges in POSTS:
        post(lines, art, items, badges, size).convert("RGB").save(OUT / f"{pid}.jpg", quality=92)
        print(pid)


if __name__ == "__main__":
    main()


# ---- Carousel (owner 2026-10-31: one post, 3 pictures) ----
APP_SHOTS = Path.home() / "Desktop/SMM/app-shots"  # fresh simulator screenshots, full height
SHOTS = {  # one or two phones; label under each when two
    "01-tid": [("GPS", APP_SHOTS / "01-arbetspass-gps-incheckad.png"),
               ("Manuellt", APP_SHOTS / "02-arbetspass-dagkort-restid-bil-traktamente.png")],
}


TOP = 90  # carousel: headline higher (owner 2026-10-31)


def slide_cover(lines, art, size):
    f = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    d = ImageDraw.Draw(f)
    for i, t in enumerate(lines):
        d.text(((W - d.textlength(t, font=font(size))) / 2, TOP + i * 92), t, font=font(size), fill=NAVY if i == 0 else BLUE)
    im = Image.open(ART / art).convert("RGBA").resize((820, 820), Image.LANCZOS)
    f.alpha_composite(im, ((W - 820) // 2, 300))
    return f, d


def slide_steps(items, art):
    f = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    d = ImageDraw.Draw(f)
    t = "Så fungerar det"
    d.text(((W - d.textlength(t, font=font(72))) / 2, TOP), t, font=font(72), fill=NAVY)
    ft, fn = font(52, "Medium"), font(40, "Bold")
    for i, text in enumerate(items):
        y = 360 + i * 300
        d.ellipse((96, y, 176, y + 80), fill=(218, 240, 225))
        n = str(i + 1)
        d.text((136 - d.textlength(n, font=fn) / 2, y + 14), n, font=fn, fill=(69, 179, 107))
        d.text((216, y + 8), text, font=ft, fill=NAVY)
        if i < 2:
            d.line((136, y + 100, 136, y + 280), fill=(225, 234, 243), width=4)
    return f, d


PHONE = ART.parent / "screens/foto-phone.png"  # real iPhone frame from the decks (phone-frame.py)
SCREEN, ISLAND, R_SCREEN = (46, 36, 874, 1836), (333, 66, 588, 138), 112


def phone(path):
    # The app screenshot inside the real iPhone frame; a short screenshot gets the app background below.
    frame = Image.open(PHONE).convert("RGBA")
    x0, y0, x1, y1 = SCREEN
    sw, sh = x1 - x0, y1 - y0
    shot = Image.open(path).convert("RGBA")
    shot = shot.resize((sw, round(shot.height * sw / shot.width)), Image.LANCZOS)
    scr = Image.new("RGBA", (sw, sh), shot.getpixel((4, shot.height - 4)))
    scr.paste(shot.crop((0, 0, sw, min(sh, shot.height))), (0, 0))
    k = 4
    m = Image.new("L", (sw * k, sh * k), 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, sw * k - 1, sh * k - 1), R_SCREEN * k, fill=255)
    frame.paste(scr, (x0, y0), m.resize((sw, sh), Image.LANCZOS))
    i = ISLAND
    ImageDraw.Draw(frame).rounded_rectangle(i, (i[3] - i[1]) // 2, fill=(0, 0, 0, 255))
    return frame


def slide_shot(shots, caption):
    f = Image.new("RGBA", (W, H), (241, 246, 251, 255))
    d = ImageDraw.Draw(f)
    d.text(((W - d.textlength(caption, font=font(72))) / 2, TOP), caption, font=font(72), fill=NAVY)
    from PIL import ImageFilter
    h = 1090 if len(shots) == 1 else 960
    phones = [phone(path) for _, path in shots]
    phones = [ph.resize((round(ph.width * h / ph.height), h), Image.LANCZOS) for ph in phones]
    gap = 40
    x = (W - sum(ph.width for ph in phones) - gap * (len(phones) - 1)) // 2
    y = 230
    for (label, _), ph in zip(shots, phones):
        sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ImageDraw.Draw(sh).rounded_rectangle((x + 10, y + 30, x + ph.width - 10, y + h), 60, fill=(10, 24, 40, 55))
        f.alpha_composite(sh.filter(ImageFilter.GaussianBlur(30)))
        f.alpha_composite(ph, (x, y))
        if len(shots) > 1:
            fl = font(44, "Bold")
            d.text((x + (ph.width - d.textlength(label, font=fl)) / 2, y + h + 24), label, font=fl, fill=BLUE)
        x += ph.width + gap
    return f, d


def carousel(pid):
    p = next(p for p in POSTS if p[0] == pid)
    _, lines, art, items, badges = p
    size = headline_size()
    out = []
    slides = (slide_cover(lines, art, size), slide_steps(items, art), slide_shot(SHOTS[pid], "Så ser det ut i appen"))
    for i, (f, d) in enumerate(slides):
        if i == 0:  # footer only on the first picture (owner 2026-10-31)
            footer(f, d, badges)
        out.append(f.convert("RGB"))
    for i, im in enumerate(out, 1):
        im.save(OUT / f"{pid}-k{i}.jpg", quality=92)
    return out
