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

# id, headline (2 lines), 3D file, what is included — S18 wording, rubric badges (S16)
FULL, BASE = "299 kr/mån + 69 kr/arbetare", "299 kr/mån"
POSTS = [  # id, headline, 3D, what is included, store badges, price — first 10, benefit first
    ("01-tid", ("Timmarna in med GPS", "löneunderlaget utan lappar"), "tid-1.png",
     "tidrapport, närvaro och planering", True, FULL),
    ("02-ata", ("Varje ÄTA blir en faktura", "ett klick från godkänd ÄTA"), "fakturor-3.png",
     "offert, faktura, lön och projektekonomi", False, BASE),
    ("03-lon", ("Timmarna blir lön", "timmar och OB per person"), "ekonomi-2.png",
     "offert, faktura, lön och projektekonomi", False, BASE),
    ("04-ekonomi", ("Se vinsten per projekt", "medan jobbet pågår"), "ekonomi-1-gold.png",
     "offert, faktura, lön och projektekonomi", False, BASE),
    ("05-utlagg", ("Inga tappade kvitton", "fota det direkt i appen"), "utlagg-1.png",
     "kvittoskanning, tidrapport och närvaro", True, FULL),
    ("06-planering", ("Hela veckan bemannad", "varnar vid överbokning"), "planering-2.png",
     "tidrapport, närvaro och planering", True, FULL),
    ("07-faktura", ("ROT och moms uträknade", "fakturan klar med din logga"), "offerter-1.png",
     "offert, faktura, lön och projektekonomi", False, BASE),
    ("08-foto", ("Bilderna på rätt projekt", "per dag och person"), "foto-1.png",
     "foton, tidrapport och närvaro", True, FULL),
    ("09-live", ("Vem är på bygget nu?", "se det utan att ringa runt"), "live-3.png",
     "närvaro i realtid och tidrapport", True, FULL),
    ("10-verktyg", ("Vem har borrmaskinen?", "skanna QR och se direkt"), "verktyg-1.png",
     "verktyg via QR, tidrapport och närvaro", True, FULL),
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


def post(lines, art, price, badges, total, size=76):
    f = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    d = ImageDraw.Draw(f)
    for i, t in enumerate(lines):  # S15: headline inside the 1080 square (y 135-1215)
        ft = font(size)
        d.text(((W - d.textlength(t, font=ft)) / 2, 160 + i * 92), t, font=ft, fill=NAVY if i == 0 else BLUE)
    im = Image.open(ART / art).convert("RGBA")
    side = 700
    im = im.resize((side, side), Image.LANCZOS)
    f.alpha_composite(im, ((W - side) // 2, 360))
    p = total  # S17/S18: price, then what is included; Kontoret-only posts show just 299
    fp = fit(d, p, 40, W - 128)
    d.text(((W - d.textlength(p, font=fp)) / 2, 1078), p, font=fp, fill=NAVY)
    sub = price + " · exkl. moms"
    fi = fit(d, sub, 36, W - 128, "Regular")
    d.text(((W - d.textlength(sub, font=fi)) / 2, 1134), sub, font=fi, fill=GREY)
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
    for pid, lines, art, price, badges, total in POSTS:
        post(lines, art, price, badges, total, size).convert("RGB").save(OUT / f"{pid}.jpg", quality=92)
        print(pid)


if __name__ == "__main__":
    main()
