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
    ("01-tid", ("Timmarna in med GPS", "löneunderlaget utan lappar"), "tid-1.png",
     ("Stämpla in i appen", "Timmarna hamnar på projektet", "Exportera löneunderlaget"), True),
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
