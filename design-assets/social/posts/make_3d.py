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
# Colours only from the site tokens (src/styles/globals.scss) — never typed by eye (owner 2026-10-31)
GREEN, GREEN_BG = (0x45, 0xB3, 0x6B), (0xE5, 0xF6, 0xE8)  # --green, --green-1

# id, headline (2 lines), 3D file, how it works in 3 steps (S26), store badges (S16)
POSTS = [  # first 10, benefit first; no price on the picture (S26)
    ("01-tid", ("Tid med *GPS* eller *manuellt*", "*lön och faktura* utan lappar"), "tid-1.png",
     ("Stämpla in med GPS eller skriv in timmarna", "Timmarna hamnar på projektet", "Lön och faktura direkt från timmarna"), True),
    ("s02-uppgifter", ("Inga *glömda* uppgifter", "*påminnelser* tills det är klart"), "uppgifter-3.png",
     ("Klicka på Skapa uppgift", "Lägg till mottagare", "Sätt deadline och påminnelse"), True),
    ("s03-live", ("Vem är på *bygget nu*?", "se det *utan att ringa runt*"), "live-3.png",
     ("Arbetaren stämplar in i appen", "Statusen syns direkt på kontoret", "Frånvarande syns direkt"), True),
    ("s04-foto", ("Bilderna på *rätt projekt*", "per *dag och person*"), "foto-1.png",
     ("Ta bilder direkt i appen", "Bilderna kopplas till arbetspasset", "Hela historiken finns alltid tillgänglig"), True),
    ("s05-planering", ("Hela *veckan* bemannad", "varnar vid *överbokning*"), "planering-2.png",
     ("Skapa ett projekt och ange tidsplan", "Tilldela medarbetare till projektet", "Få kontroll över beläggningen"), True),
    ("s06-verktyg", ("Vem har *borrmaskinen*?", "skanna *QR* och se direkt"), "verktyg-1.png",
     ("Lägg till verktyg och utrustning", "Koppla till projekt eller arbetare", "Följ plats och ansvar"), True),
    ("s07-offerter", ("*Offerten* klar", "på *några klick*"), "offerter-3.png",
     ("Skapa en offert från projektet", "Projektdata fylls i automatiskt", "Skicka offerten med några klick"), False),
    ("s08-fakturor", ("*Timmarna* blir faktura", "*ROT och moms* uträknade"), "fakturor-2.png",
     ("Välj projekt och period", "Timmarna blir underlag", "Skicka fakturan till kunden"), False),
    ("s09-ekonomi", ("Se *vinsten* per projekt", "*medan* jobbet pågår"), "ekonomi-1-gold.png",
     ("Sätt en budget på projektet", "Timmar och kostnader räknas automatiskt", "Se marginalen i realtid"), False),
    ("s10-utlagg", ("Inga *tappade kvitton*", "fota kvittot *direkt i appen*"), "utlagg-1.png",
     ("Fota kvittot i appen", "Koppla till rätt projekt", "Se kostnaderna i realtid"), True),
    ("s11-loner", ("Timmarna blir *lön*", "timmar och *OB* per person"), "ekonomi-2.png",
     ("Personalen registrerar timmarna i appen", "Underlaget skapas för varje anställd", "Exportera löneunderlaget med ett klick"), False),
    ("s12-integrationer", ("Fungerar med *Fortnox*", "*Visma* och *grossisterna*"), "ekonomi-3.png",
     ("Fortnox: fakturor och leverantörsfakturor", "Visma: SIE4-fil och löneunderlag till Visma Lön", "Grossister: beställ material i appen"), True),
    ("02-offert", ("*Offert* med din logga", "klar att skicka *samma dag*"), "offerter-3.png",
     ("Välj artiklar ur katalogen", "Summor och moms räknas ut", "Skicka PDF med din logga"), False),
    ("03-lon", ("Timmarna blir *lön*", "timmar och *OB* per person"), "ekonomi-2.png",
     ("Laget rapporterar tid i appen", "Timmar och OB summeras", "Brutto och skatt räknas"), False),
    ("04-ekonomi", ("Se *vinsten* per projekt", "*medan* jobbet pågår"), "ekonomi-1-gold.png",
     ("Lägg budget för projektet", "Kostnader bokförs på projektet", "Se lönsamheten direkt"), False),
    ("05-utlagg", ("Inga *tappade kvitton*", "fota kvittot *direkt i appen*"), "utlagg-1.png",
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
        d.ellipse((cx - 24, top, cx + 24, top + 48), fill=GREEN_BG)
        n = str(i + 1)
        d.text((cx - d.textlength(n, font=fn) / 2, top + 7), n, font=fn, fill=GREEN)
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
        lx = 64  # footer always on the same place (left), with or without store badges
    f.alpha_composite(logo, (int(lx), 1234))
    d.text((lx + 82, 1240), u, font=fu, fill=NAVY)


def main():
    OUT.mkdir(exist_ok=True)
    size = headline_size()
    for pid, lines, art, items, badges in POSTS:
        post(lines, art, items, badges, size).convert("RGB").save(OUT / f"{pid}.jpg", quality=95, subsampling=0)
        print(pid)


if __name__ == "__main__":
    main()


# ---- Carousel (owner 2026-10-31: one post, 3 pictures) ----
APP_SHOTS = HERE / "src/app-shots"  # fresh simulator screenshots, full height (in git, works on any computer)
SHOTS = {  # one or two phones; label under each when two
    "01-tid": [("GPS", APP_SHOTS / "01-arbetspass-gps-incheckad.png"),
               ("Manuellt", APP_SHOTS / "03-arbetspass-manuell-topp.png")],
}



# Slides 2 and 3: two-line headlines like the cover (navy + blue), per post
HEADS = {
    "s12-integrationer": (("Så fungerar det", "från *appen* till *bokföringen*"),
                          ("Ett system", "*kopplat* till resten")),
    "s05-planering": (("Så fungerar det", "från *kontoret* till *bygget*"),
                      ("I *mobilen* och i *datorn*", "*samma plan* för alla")),
    "s06-verktyg": (("Så fungerar det", "från *bygget* till *kontoret*"),
                    ("I *mobilen* och i *datorn*", "*varje verktyg* på sin plats")),
    "s07-offerter": (("Så fungerar det", "från *kontoret* till *kunden*"),
                     ("I *mobilen* och i *datorn*", "*offerten* med några klick")),
    "s08-fakturor": (("Så fungerar det", "från *kontoret* till *kunden*"),
                     ("I *mobilen* och i *datorn*", "*fakturan* från timmarna")),
    "s09-ekonomi": (("Så fungerar det", "från *bygget* till *kontoret*"),
                    ("Allt i *adminpanelen*", "*marginalen* i realtid")),
    "s10-utlagg": (("Så fungerar det", "från *bygget* till *kontoret*"),
                   ("I *mobilen* och i *datorn*", "*kostnaderna* i realtid")),
    "s11-loner": (("Så fungerar det", "från *bygget* till *kontoret*"),
                  ("Allt i *adminpanelen*", "*löneunderlaget* med ett klick")),
    "s04-foto": (("Så fungerar det", "från *bygget* till *kontoret*"),
                 ("I *mobilen* och i *datorn*", "*hela historiken* sparad")),
    "s03-live": (("Så fungerar det", "från *bygget* till *kontoret*"),
                 ("I *mobilen* och i *datorn*", "*hela laget* i realtid")),
    "s02-uppgifter": (("Så fungerar det", "från *kontoret* till *bygget*"),
                      ("I *mobilen* och i *datorn*", "*alla* ser samma uppgifter")),
    "01-tid": (("Så fungerar det", "från *bygget* till *kontoret*"),
               ("I *mobilen* och i *datorn*", "*samma timmar* överallt")),
}


def art(name, side):
    # 3D picture whose pale floor shadow is faded out at the file edges: a shadow cut by the edge
    # shows as a straight "box" line on the white slide (owner 2026-10-31). Only pale grey pixels
    # in the lower part near the edges are touched, never the figure itself.
    import numpy as np
    im = Image.open(ART / name).convert("RGB").resize((side, side), Image.LANCZOS)
    a = np.asarray(im).astype(float)
    lum = a.mean(2)
    sat = a.max(2) - a.min(2)
    pale = np.clip((lum - 150) / 50, 0, 1) * (sat < 22)  # light-to-mid grey, colourless = floor shadow
    f = side / 6  # soft fade, narrow enough to stay off the figures
    yy, xx = np.mgrid[0:side, 0:side]
    d = np.minimum.reduce([xx, side - 1 - xx, side - 1 - yy]).astype(float)
    t = np.clip(1 - d / f, 0, 1)
    edge = t * t * (3 - 2 * t) * (yy > side * 0.6)  # smoothstep; lower part, where floor shadows are
    k = (pale * edge)[..., None]
    out = a * (1 - k) + 255 * k
    return Image.fromarray(out.astype("uint8")).convert("RGBA")


def ink(layer):
    # Visible box of a layer (ignores pure white and near-white soft shadows)
    a = layer.split()[3].point(lambda v: 255 if v > 24 else 0)
    g = layer.convert("L").point(lambda v: 255 if v < 246 else 0)
    from PIL import ImageChops
    return ImageChops.multiply(a, g).getbbox()


def headline_bottom(d, size, lines):
    # real ink bottom of the last headline line (with or without descenders)
    return TOP + 92 * (len(lines) - 1) + d.textbbox((0, 0), plain(lines[-1]), font=font(size))[3]


G_MIN = 120  # minimum air above/below an illustration
BOTTOM = 1297  # lowest ink on the cover (footer); slides 2-3 end on the same line
FOOTER_TOP = 1234


def place(f, d, size, lines, illus, text=None):
    # Equal air above and below the illustration (owner 2026-10-31):
    # headline -> g -> illustration -> g -> text (or the footer on the cover)
    ib = ink(illus)
    illus = illus.crop(ib)
    hb = headline_bottom(d, size, lines)
    bottom = FOOTER_TOP if text is None else BOTTOM
    if text is not None:
        text = text.crop(ink(text))
    th = 0 if text is None else text.height
    # never less air than on the approved post 1 (owner 2026-10-31): shrink a tall picture instead
    room = bottom - hb - th - 2 * G_MIN
    if illus.height > room:
        k = room / illus.height
        illus = illus.resize((round(illus.width * k), round(illus.height * k)), Image.LANCZOS)
    g = (bottom - hb - illus.height - th) / 2
    y = round(hb + g)
    f.alpha_composite(illus, ((W - illus.width) // 2, y))
    if text is not None:
        f.alpha_composite(text, ((W - text.width) // 2, round(y + illus.height + g)))


def layer(h=H):
    l = Image.new("RGBA", (W, h), (255, 255, 255, 0))
    return l, ImageDraw.Draw(l)


def slide_cover(lines, art_name, size):
    f = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    d = ImageDraw.Draw(f)
    headline(d, lines, size)
    l, _ = layer(900)
    l.alpha_composite(art(art_name, 820), ((W - 820) // 2, 0))
    place(f, d, size, lines, l)
    return f, d


FLOW = {  # slide 2: left 3D → right 3D, with labels; direction follows the feature
    "01-tid": ("tid-2.png", "tid-3.png", "På bygget", "På kontoret"),
    "s02-uppgifter": ("uppgifter-1.png", "uppgifter-2.png", "På kontoret", "På bygget"),
    "s03-live": ("tid-2.png", "live-2.png", "På bygget", "På kontoret"),
    "s04-foto": ("foto-2.png", "foto-3.png", "På bygget", "På kontoret"),
    "s05-planering": ("planering-1.png", "tid-2.png", "På kontoret", "På bygget"),
    "s06-verktyg": ("verktyg-2.png", "verktyg-3.png", "På bygget", "På kontoret"),
    "s07-offerter": ("offerter-1.png", "offerter-2.png", "På kontoret", "Hos kunden"),
    "s08-fakturor": ("tid-3.png", "fakturor-3.png", "På kontoret", "Hos kunden"),
    "s09-ekonomi": ("tid-2.png", "ekonomi-3.png", "På bygget", "På kontoret"),
    "s10-utlagg": ("utlagg-4.png", "utlagg-3.png", "På bygget", "På kontoret"),  # receipt from the phone into the folder
    "s11-loner": ("tid-2.png", "tid-3.png", "På bygget", "På kontoret"),
    "s12-integrationer": ("tid-3.png", "ekonomi-3.png", "ByggExp", "Bokföringen"),
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
    left, right, l_label, r_label = FLOW[pid]
    side = 380
    il, ild = layer(side + 80)
    edges = []
    for name, x in ((left, 64), (right, W - 64 - side)):
        im = art(name, side)
        il.alpha_composite(im, (x, 0))
        b = ink(im)  # whole figure, for centring the label
        band = im.crop((0, side // 2 - 120, side, side // 2 + 120))  # what the eye compares: the figure at arrow height
        g = band.convert("L").point(lambda v: 255 if v < 225 else 0)  # real figure, not the pale floor shadow
        a = band.split()[3].point(lambda v: 255 if v > 24 else 0)
        from PIL import ImageChops
        nb = ImageChops.multiply(g, a).getbbox() or b
        edges.append((x + b[0], x + b[2], x + nb[0], x + nb[2]))
    fl = font(34, "Bold")
    for label, (e0, e1, _, _) in ((l_label, edges[0]), (r_label, edges[1])):  # label centred under the figure itself
        ild.text(((e0 + e1) / 2 - ild.textlength(label, font=fl) / 2, side + 10), label, font=fl, fill=GREY)
    # Arrow exactly in the middle between the visible figures: equal air left and right (owner 2026-10-31)
    l_edge, r_edge = edges[0][3], edges[1][2]
    m = max(24, (r_edge - l_edge) // 5)
    arrow(ild, l_edge + m, r_edge - m, side // 2)
    tl, td = layer(700)
    ft, fn = font(44, "Medium"), font(34, "Bold")
    y = 0
    for i, text in enumerate(items):
        td.ellipse((96, y, 164, y + 68), fill=GREEN_BG)
        n = str(i + 1)
        td.text((130 - td.textlength(n, font=fn) / 2, y + 12), n, font=fn, fill=GREEN)
        rows = wrap(td, text, ft, W - 200 - 96)
        for j, line in enumerate(rows):
            td.text((200, y + 8 + j * 56), line, font=ft, fill=NAVY)
        y += max(68, 56 * len(rows)) + 56
    place(f, d, size, lines, il, tl)
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
    "s02-uppgifter": (ROOT / "public/landing/features/2uppgift.webp",
                      APP_SHOTS / "07-paminnelse-lasskarm.png", (1893, 268, 1044)),  # owner: Swedish push
    "s03-live": (ROOT / "public/landing/features/3personal.webp", None, None),
    "s04-foto": (ROOT / "public/landing/features/4foto.webp", None, None),
    "s05-planering": (ROOT / "public/landing/features/5planering.webp", None, None),
    "s06-verktyg": (ROOT / "public/landing/features/6verktyg.webp", None, None),
    "s07-offerter": (ROOT / "public/landing/features/7offerter.webp", None, None),
    "s08-fakturor": (ROOT / "public/landing/features/8fakturor.webp", None, None),
    "s09-ekonomi": (HERE / "src/9ekonomi-sv.png", None, None),  # site mockup, English task rows → Swedish
    "s10-utlagg": (ROOT / "public/landing/features/11costs.webp", None, None),
    "s11-loner": (ROOT / "public/landing/features/12salary.webp", None, None),
}


def slide_feature(spec, lines, size):
    # Laptop from the site + our real iPhone with the current week screen on top of the old phone.
    path, screen, box = spec
    f = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    d = ImageDraw.Draw(f)
    im = Image.open(path).convert("RGBA")
    if screen:
        px, py, ph = box
        p = phone(screen)
        p = p.resize((round(p.width * ph / p.height), ph), Image.LANCZOS)
        im.alpha_composite(p.crop((0, 0, min(p.width, im.width - px), min(p.height, im.height - py))), (px, py))
    im = im.crop(im.getbbox())
    w = W - 40
    im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    headline(d, lines, size)
    il, _ = layer(im.height + 4)
    il.alpha_composite(im, (20, 0))
    tl, td = layer(300)
    checks(td, 0)
    place(f, d, size, lines, il, tl)
    return f, d


MEETS = ("14 dagar gratis", "Ingen bindningstid", "Gratis flytt av data")  # src/locales/heroV2.ts meta


def checks(d, y):
    ft = font(44, "Medium")
    w = max(d.textlength(t, font=ft) for t in MEETS) + 76
    x = (W - w) / 2
    for i, t in enumerate(MEETS):
        yy = y + i * 76
        d.ellipse((x, yy + 4, x + 48, yy + 52), fill=GREEN_BG)
        d.line((x + 13, yy + 29, x + 21, yy + 37), fill=GREEN, width=6)
        d.line((x + 21, yy + 37, x + 36, yy + 19), fill=GREEN, width=6)
        d.text((x + 76, yy), t, font=ft, fill=NAVY)


PARTNERS = {  # last slide without a site mockup: who ByggExp works with (names, not logos)
    "s12-integrationer": ["Fortnox", "Visma", "Ahlsell", "Beijer", "Dahl", "Optimera", "Lundagrossisten", "SIE4"],
}


def cards(names):
    # white cards r32, line #E1EAF3 (deck/site cards), name in navy; 2 columns
    cw, ch, gap = 440, 120, 28
    rows = (len(names) + 1) // 2
    l, d = layer(rows * (ch + gap))
    x0 = (W - 2 * cw - gap) // 2
    ft = font(46)
    for i, n in enumerate(names):
        x, y = x0 + (i % 2) * (cw + gap), (i // 2) * (ch + gap)
        d.rounded_rectangle((x, y, x + cw, y + ch), 32, fill=(255, 255, 255, 255), outline=(0xE1, 0xEA, 0xF3), width=3)
        logo = HERE / "src/logos" / f"{n.lower()}.png"  # the partner's real logo (from its own site)
        if logo.exists():
            lg = Image.open(logo).convert("RGBA")
            lg.thumbnail((cw - 120, ch - 56), Image.LANCZOS)
            l.alpha_composite(lg, (x + (cw - lg.width) // 2, y + (ch - lg.height) // 2))
        else:
            d.text((x + (cw - d.textlength(n, font=ft)) / 2, y + (ch - 46) / 2 - 6), n, font=ft, fill=NAVY)
    return l


def slide_partners(names, lines, size):
    f = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    d = ImageDraw.Draw(f)
    headline(d, lines, size)
    tl, td = layer(300)
    checks(td, 0)
    place(f, d, size, lines, cards(names), tl)
    return f, d


def carousel(pid):
    p = next(p for p in POSTS if p[0] == pid)
    _, lines, art, items, badges = p
    size = headline_size()
    out = []
    # 3 pictures (owner 2026-10-31): the site's laptop + new phone replaces the separate phone slide
    h2, h3 = HEADS[pid]
    if pid in FEATURE:
        last = slide_feature(FEATURE[pid], h3, size)
    elif pid in PARTNERS:
        last = slide_partners(PARTNERS[pid], h3, size)
    else:
        last = slide_shot(SHOTS[pid], "Så ser det ut i appen")
    slides = [slide_cover(lines, art, size), slide_steps(items, pid, h2, size), last]
    for i, (f, d) in enumerate(slides):
        if i == 0:  # footer only on the first picture; store badges on every post (owner 2026-10-31)
            footer(f, d, True)
        out.append(f.convert("RGB"))
    for i, im in enumerate(out, 1):
        im.save(OUT / f"{pid}-k{i}.jpg", quality=95, subsampling=0)
    return out
