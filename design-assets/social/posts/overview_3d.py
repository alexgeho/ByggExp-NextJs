"""Pinned overview post «Allt i ByggExp»: every feature at a glance (owner 2026-10-31:
"a visitor must see all features at once, or he leaves").
python3 overview_3d.py -> ~/Desktop/SMM/poster/00-oversikt/1..N.jpg + contact sheet"""
from pathlib import Path

from PIL import Image

import make_3d as m

ORDER = [  # same order as the feature block on byggexp.se
    ("01-tid", "Tidrapport"), ("s02-uppgifter", "Uppgifter"), ("s03-live", "Närvaro"),
    ("s04-foto", "Foto"), ("s05-planering", "Planering"), ("s06-verktyg", "Verktyg"),
    ("s07-offerter", "Offerter"), ("s08-fakturor", "Fakturor"), ("s09-ekonomi", "Ekonomi"),
    ("s10-utlagg", "Utlägg"), ("s11-loner", "Löner"), ("s12-integrationer", "Integrationer"),
]
POSTS = {p[0]: p for p in m.POSTS}
OUT = Path.home() / "Desktop/SMM/poster/00-oversikt"


def mosaic():
    # 4 x 3 grid: small 3D + name, the whole product in one picture
    side, cols, gx, gy, lab = 200, 4, 36, 26, 40
    rows = (len(ORDER) + cols - 1) // cols
    l, d = m.layer(rows * (side + lab + gy))
    x0 = (m.W - cols * side - (cols - 1) * gx) // 2
    ft = m.font(30)
    for i, (pid, name) in enumerate(ORDER):
        x, y = x0 + (i % cols) * (side + gx), (i // cols) * (side + lab + gy)
        l.alpha_composite(m.art(POSTS[pid][2], side), (x, y))
        d.text((x + (side - d.textlength(name, font=ft)) / 2, y + side + 2), name, font=ft, fill=m.NAVY)
    return l


def slide(lines, size, illus, text=None):
    f = Image.new("RGBA", (m.W, m.H), (255, 255, 255, 255))
    d = m.ImageDraw.Draw(f)
    m.headline(d, lines, size)
    m.place(f, d, size, lines, illus, text)
    return f, d


def main():
    size = m.headline_size()
    OUT.mkdir(parents=True, exist_ok=True)
    slides = []
    f, d = slide(("Hela *byggföretaget*", "på *ett ställe*"), size, mosaic())
    m.footer(f, d, True)
    slides.append(f)
    for pid, _ in ORDER:  # each feature's cover, without footer (footer only on the first picture)
        _, lines, art, _, _ = POSTS[pid]
        slides.append(m.slide_cover(lines, art, size)[0])
    phone = Image.open(m.ROOT / "public/landing/hero/phone-3d.webp").convert("RGBA")
    phone.thumbnail((620, 620))
    il, _ = m.layer(phone.height + 4)
    il.alpha_composite(phone, ((m.W - phone.width) // 2, 0))
    tl, td = m.layer(300)
    m.checks(td, 0)
    f, d = slide(("Testa *gratis*", "i *14 dagar*"), size, il, tl)
    slides.append(f)
    for old in OUT.glob("*.jpg"):
        old.unlink()
    for k, im in enumerate(slides, 1):
        im.convert("RGB").save(OUT / f"{k:02d}.jpg", quality=95, subsampling=0)
    # contact sheet: all slides in a grid, for a quick look
    t = [im.convert("RGB").resize((360, 450)) for im in slides]
    cols = 7
    sheet = Image.new("RGB", (cols * 372, ((len(t) + cols - 1) // cols) * 462), (225, 229, 235))
    for i, im in enumerate(t):
        sheet.paste(im, ((i % cols) * 372, (i // cols) * 462))
    sheet.save(OUT.parent / "00-oversikt – alla.jpg", quality=92)
    print(len(slides), "slides")


if __name__ == "__main__":
    main()
