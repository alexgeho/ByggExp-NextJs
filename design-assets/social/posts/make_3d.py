"""Feed posts in the feature-deck 3D style (S23): white 4:5, headline, 3D scene, price row, footer.

python3 make_3d.py            -> out-3d/<id>.jpg
"""
from functools import lru_cache
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

HERE = Path(__file__).parent
ROOT = HERE.parents[2]
ART = ROOT.parent / "byggexp-admin/docs/presentations/design-system/assets/3d"
FONTS = HERE / "src/fonts"
OUT = HERE / "out-3d-first10"

W, H = 1080, 1350
TOP = 90  # carousel: headline higher (owner 2026-10-31)
CONTENT = 400  # first content line under the headline, same air as under the cover headline
NAVY, BLUE, GREY = (10, 24, 40), (35, 148, 255), (91, 117, 145)

# id, headline (2 lines), 3D file, how it works in 3 steps (S26), store badges (S16)
POSTS = [  # first 10, benefit first; no price on the picture (S26)
    ("01-tid", ("Tid med *GPS* eller *manuellt*", "*lön och faktura* utan lappar"), "tid-1.png",
     ("Stämpla in med GPS eller skriv in timmarna", "Timmarna hamnar på projektet", "Lön och faktura direkt från timmarna"), True),
    ("02-offert", ("*Offert* med din logga", "klar att skicka *samma dag*"), "offerter-3.png",
     ("Välj artiklar ur katalogen", "Summor och moms räknas ut", "Skicka PDF med din logga"), False),
    ("03-lon", ("Timmarna blir *lön*", "timmar och *OB* per person"), "ekonomi-2.png",
     ("Laget rapporterar tid i appen", "Timmar och OB summeras", "Brutto och skatt räknas"), False),
    ("04-ekonomi", ("Se *vinsten* per projekt", "*medan* jobbet pågår"), "ekonomi-1-gold.png",
     ("Lägg budget för projektet", "Kostnader bokförs på projektet", "Se lönsamheten direkt"), False),
    ("05-utlagg", ("Inga *tappade kvitton*", "fota det *direkt i appen*"), "utlagg-1.png",
     ("Fota kvittot i butiken", "Det skannas automatiskt", "Hamnar på projektet"), True),
    ("06-planering", ("Hela *veckan* bemannad", "varnar vid *överbokning*"), "planering-2.png",
     ("Klicka på en dag", "Välj vem som jobbar var", "Varning vid över 8 h"), True),
    ("07-faktura", ("*ROT och moms* uträknade", "fakturan klar med *din logga*"), "offerter-1.png",
     ("Lägg in raderna", "ROT och moms räknas ut", "Skicka PDF med din logga"), False),
    ("08-foto", ("Bilderna på *rätt projekt*", "per *dag och person*"), "foto-1.png",
     ("Fota i appen", "Kopplas till arbetspasset", "Sorteras per dag och person"), True),
    ("09-live", ("Vem är på bygget *nu*?", "se det *utan att ringa runt*"), "live-3.png",
     ("Arbetaren stämplar in", "Syns direkt hos kontoret", "Hela laget i en lista"), True),
    ("10-verktyg", ("Vem har *borrmaskinen*?", "skanna *QR* och se direkt"), "verktyg-1.png",
     ("QR-kod på verktyget", "Skanna när du tar det", "Alla ser vem som har det"), True),
]


SF = "/System/Library/Fonts/SFNS.ttf"  # the site sets DM Sans but never loads it -> visitors see SF Pro
WEIGHTS = {"Bold": 600, "Medium": 500, "Regular": 400}  # site: headings 600, text 400/500


@lru_cache(maxsize=None)
def font(size, weight="Bold"):
    f = ImageFont.truetype(SF, size)
    # axes: Width, Optical Size, GRAD, Weight; large text uses the Display optical size
    f.set_variation_by_axes([100, 96 if size >= 40 else 28, 400, WEIGHTS[weight]])
    return f


def plain(t):
    return t.replace("*", "")


def headline(d, lines, size, top=TOP):
    # Every slide: 2 lines, navy; the words that carry the meaning in *stars* are blue (owner 2026-10-31)
    ft = font(size)
    for i, t in enumerate(lines):
        x = (W - d.textlength(plain(t), font=ft)) / 2
        for j, part in enumerate(t.split("*")):
            d.text((x, top + i * 92), part, font=ft, fill=BLUE if j % 2 else NAVY)
            x += d.textlength(part, font=ft)


def fit(d, text, size, maxw, weight="Bold"):
    while d.textlength(text, font=font(size, weight)) > maxw:
        size -= 2
    return font(size, weight)


def headline_size():
    # One size for every headline line in the series, so posts look alike in the feed.
    d = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    return min(fit(d, plain(t), 76, W - 128).size for p in POSTS for t in p[1])


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
    headline(d, lines, size, 160)  # S15: headline inside the 1080 square (y 135-1215)
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
               ("Manuellt", APP_SHOTS / "03-arbetspass-manuell-topp.png")],
}



# Slides 2 and 3: two-line headlines like the cover (navy + blue), per post
HEADS = {
    "01-tid": (("Så fungerar det", "från *bygget* till *kontoret*"),
               ("I *mobilen* och i *datorn*", "*samma timmar* överallt")),
}


def slide_cover(lines, art, size):
    f = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    d = ImageDraw.Draw(f)
    headline(d, lines, size)
    im = Image.open(ART / art).convert("RGBA").resize((820, 820), Image.LANCZOS)
    f.alpha_composite(im, ((W - 820) // 2, 300))
    return f, d


FLOW = {  # slide 2: who enters it on site → where it shows up in the office
    "01-tid": ("tid-2.png", "tid-3.png"),
}


def arrow(d, x0, x1, y):
    # dashed blue arrow, site → office
    for x in range(x0, x1 - 30, 26):
        d.line((x, y, min(x + 14, x1 - 30), y), fill=BLUE, width=6)
    d.polygon([(x1, y), (x1 - 30, y - 18), (x1 - 30, y + 18)], fill=BLUE)


def slide_steps(items, pid, lines, size):
    f = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    d = ImageDraw.Draw(f)
    headline(d, lines, size)
    site, office = FLOW[pid]
    side = 380
    for art, x in ((site, 64), (office, W - 64 - side)):
        im = Image.open(ART / art).convert("RGBA").resize((side, side), Image.LANCZOS)
        f.alpha_composite(im, (x, CONTENT))
    fl = font(34, "Bold")
    for label, x in (("På bygget", 64), ("På kontoret", W - 64 - side)):
        d.text((x + (side - d.textlength(label, font=fl)) / 2, CONTENT + side + 10), label, font=fl, fill=GREY)
    arrow(d, 64 + side - 10, W - 64 - side + 10, CONTENT + side // 2)
    ft, fn = font(44, "Medium"), font(34, "Bold")
    y = CONTENT + side + 140  # more air under the pictures, text sits low like the cover footer
    for i, text in enumerate(items):
        d.ellipse((96, y, 164, y + 68), fill=(218, 240, 225))
        n = str(i + 1)
        d.text((130 - d.textlength(n, font=fn) / 2, y + 12), n, font=fn, fill=(69, 179, 107))
        rows = wrap(d, text, ft, W - 200 - 96)
        for j, line in enumerate(rows):
            d.text((200, y + 8 + j * 56), line, font=ft, fill=NAVY)
        y += max(68, 56 * len(rows)) + 56
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
    f = Image.new("RGBA", (W, H), (255, 255, 255, 255))  # all slides white (owner 2026-10-31)
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


FEATURE = {  # last slide: the site's laptop + phone picture; the old phone is covered by the new app screen
    # id: (site picture, new screen, phone box on the site picture: x, y_top, height)
    "01-tid": (ROOT / "public/landing/features/1arbetspass.webp",
               APP_SHOTS / "03-arbetspass-manuell-topp.png", (1893, 268, 1044)),
}


def slide_feature(spec, lines, size):
    # Laptop from the site + our real iPhone with the current week screen on top of the old phone.
    path, screen, (px, py, ph) = spec
    f = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    d = ImageDraw.Draw(f)
    im = Image.open(path).convert("RGBA")
    p = phone(screen)
    p = p.resize((round(p.width * ph / p.height), ph), Image.LANCZOS)
    im.alpha_composite(p.crop((0, 0, min(p.width, im.width - px), min(p.height, im.height - py))), (px, py))
    im = im.crop(im.getbbox())
    w = W - 40
    im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    # Headline at the same height as on the other slides; under the picture the site's hero promises.
    headline(d, lines, size)
    y = CONTENT
    f.alpha_composite(im, (20, y))
    checks(d, y + im.height + 120)
    return f, d


MEETS = ("14 dagar gratis", "Ingen bindningstid", "Gratis flytt av data")  # src/locales/heroV2.ts meta


def checks(d, y):
    ft = font(44, "Medium")
    w = max(d.textlength(t, font=ft) for t in MEETS) + 76
    x = (W - w) / 2
    for i, t in enumerate(MEETS):
        yy = y + i * 76
        d.ellipse((x, yy + 4, x + 48, yy + 52), fill=(218, 240, 225))
        d.line((x + 13, yy + 29, x + 21, yy + 37), fill=(69, 179, 107), width=6)
        d.line((x + 21, yy + 37, x + 36, yy + 19), fill=(69, 179, 107), width=6)
        d.text((x + 76, yy), t, font=ft, fill=NAVY)


def carousel(pid):
    p = next(p for p in POSTS if p[0] == pid)
    _, lines, art, items, badges = p
    size = headline_size()
    out = []
    # 3 pictures (owner 2026-10-31): the site's laptop + new phone replaces the separate phone slide
    h2, h3 = HEADS[pid]
    last = slide_feature(FEATURE[pid], h3, size) if pid in FEATURE else slide_shot(SHOTS[pid], "Så ser det ut i appen")
    slides = [slide_cover(lines, art, size), slide_steps(items, pid, h2, size), last]
    for i, (f, d) in enumerate(slides):
        if i == 0:  # footer only on the first picture (owner 2026-10-31)
            footer(f, d, badges)
        out.append(f.convert("RGB"))
    for i, im in enumerate(out, 1):
        im.save(OUT / f"{pid}-k{i}.jpg", quality=92)
    return out
