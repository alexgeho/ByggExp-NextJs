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
    "12salary": [("fill", (640, 662, 2095, 1215), (900, 750)), ("fill", (2095, 662, 2145, 1130), (900, 750)),
                 ("fill", (1080, 345, 1140, 388), (1160, 366))],  # loose 'GPS' tag next to UTKAST (critic v6)
    "11costs": [("fill", (252, 30, 538, 62), (400, 66))],  # half-visible sidebar item above Dagbok (critic v6 r2)
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
    for args in TEXT.get("*", []) + TEXT.get(name, []):
        rep(im, *args)
    for box in TOGGLE_ON.get(name, []):
        toggle_on(im, box)
    if name == "5planering":
        planering(im)
    if name == "8fakturor":
        faktura(im)
    if name == "6verktyg":
        verktyg(im)
    if name == "11costs":  # ELGIGANTEN receipt photo → plain document icon like the other rows
        icon = im.crop((662, 678, 702, 716))
        ImageDraw.Draw(im).rectangle((650, 582, 738, 655), fill=im.getpixel((1000, 600)))
        im.paste(icon, (662, 600))
    return im


# ---- critic v6: English/dev strings and junk demo data on the site photos → Swedish, clean demo data ----
FONTS = HERE / "src/fonts"  # Inter = web UI, DM Sans = mobile app
INTER, INTER_M, DMS = FONTS / "inter_semibold.ttf", FONTS / "inter_medium.ttf", FONTS / "DMSans-Regular.ttf"
BLUE = (0, 123, 246)


def rep(im, box, old, new, ff, size, thr=140, center=False, colour=None):
    """Replace text `old` found inside `box` (dark pixels < thr) by `new`, same font size, colour and top line."""
    from PIL import ImageFont
    b = im.convert("L").crop(box).point(lambda v: 255 if v < thr else 0).getbbox()
    if not b:
        raise ValueError(f"no text in {box} for {old!r}")
    x0, y0, x1, y1 = b[0] + box[0], b[1] + box[1], b[2] + box[0], b[3] + box[1]
    if size is None:  # auto: font size whose rendering of `old` is as wide as the found text
        size = 8
        while ImageFont.truetype(str(ff), size + 1).getbbox(old)[2] - ImageFont.truetype(str(ff), size + 1).getbbox(old)[0] <= x1 - x0:
            size += 1
    f = ImageFont.truetype(str(ff), size)
    col = colour or min((im.getpixel((x, y)) for x in range(x0, x1) for y in range(y0, y1)), key=lambda p: sum(p[:3]))
    bgc = im.getpixel((x0 - 4, y0 - 2))
    d = ImageDraw.Draw(im)
    d.rectangle((x0 - 2, y0 - 2, x1 + 2, y1 + 2), fill=bgc)
    ob, nb = f.getbbox(old), f.getbbox(new)
    if center == "r":  # right-aligned column (amounts)
        x = x1 - nb[2]
    else:
        x = (x0 + x1) / 2 - (nb[0] + nb[2]) / 2 if center else x0 - nb[0]
    d.text((x, y0 - ob[1]), new, font=f, fill=col)


def toggle_on(im, box):
    x0, y0, x1, y1 = box
    d = ImageDraw.Draw(im)
    d.rectangle((x0 - 6, y0 - 6, x1 + 6, y1 + 6), fill=im.getpixel((x0 - 8, y0 - 8)))
    d.rounded_rectangle(box, (y1 - y0) // 2, fill=BLUE)
    r = (y1 - y0) // 2 - 3
    cx, cy = x1 - r - 3, (y0 + y1) // 2
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(255, 255, 255))


ROLES = ["projectAdmin", "worker", "worker", "worker", "worker", "projectAdmin", "worker", "companyAdmin", "projectAdmin"]
SV_ROLE = {"projectAdmin": "Projektadmin", "worker": "Arbetare", "companyAdmin": "Admin"}
WEEK = ["Lör", "Sön", "Mån", "Tis", "Ons", "Tor", "Fre"]  # 1 Aug 2026 = Saturday
INTER_R = FONTS / "inter_regular.ttf"
DMS_M = FONTS / "DMSans-Medium.ttf"
TEXT = {
    "*": [((1900, 89, 2020, 104), "companyAdmin", "Admin", INTER_R, 13, 200)],  # top bar under "Roger"
    "3personal": [((1460, 280, 1600, 320), "Waiting 2", "Väntar 2", INTER_M, 17, 200)]
    + [((1395, 457 + 86 * i, 1580, min(497 + 86 * i, 1175)), r, SV_ROLE[r], INTER, 16) for i, r in enumerate(ROLES)],
    "12salary": [((640, 345, 960, 385), "Löner · 20.07.2026 – 24.08.2026", "Löner · 2026-08-01 – 2026-08-31", INTER, 19)],
    "11costs": [
        ((740, 450, 1010, 490), "M.A. Bygg AB", "Optimera", INTER, None),
        ((1020, 450, 1200, 490), "Underentreprenör", "Material", INTER, None),
        ((1765, 450, 1892, 490), "100 880,0...", "4 880,00 SEK", INTER, None, 140, "r"),
        ((740, 522, 1010, 562), "FCK En AB", "Derome", INTER, None),
        ((1020, 522, 1200, 562), "Underentreprenör", "Material", INTER, None),
        ((1765, 522, 1892, 562), "52 700,00 ...", "2 700,00 SEK", INTER, None, 140, "r"),
        ((740, 598, 1010, 638), "ELGIGANTEN", "XL-Bygg", INTER, None),
        ((1765, 598, 1892, 638), "3 539,00 S...", "3 539,00 SEK", INTER, None, 140, "r"),
        ((740, 676, 1010, 716), "Dina Försäkringar", "Hornbach", INTER, None),
        ((1020, 676, 1200, 716), "Försäkringar", "Verktyg", INTER, None),
        ((740, 750, 1010, 790), "HHAOS Survaae AB", "Ahlsell", INTER, 16),
        ((740, 822, 1010, 860), "HHAOS Sunkväge AB", "Beijer Byggmaterial", INTER, 16),
        ((1020, 822, 1200, 860), "Mat och dryck", "Verktyg", INTER, 16),
        ((740, 893, 1010, 932), "Happy Lamb Hot Pot", "Bauhaus", INTER, 16),
        ((1020, 893, 1200, 932), "Mat och dryck", "Material", INTER, 16),
        ((740, 965, 1010, 1003), "HHAOS Surwave AB", "Byggmax", INTER, 16),
        ((1020, 965, 1200, 1003), "Mat och dryck", "Material", INTER, 16),
        ((1940, 870, 2150, 910), "HHAO sun AB", "Beijer Byggmaterial", DMS, 18),
        ((1940, 968, 2130, 1008), "150.1", "150,10", DMS, 18),
        ((2165, 968, 2350, 1008), "23.62", "30,02", DMS, 18),
    ],
    "8fakturor": [((1945, 452, 2260, 490), "Svensson Fastigheter AB", "Anna Svensson", DMS_M, 19),
                  ((1935, 1118, 2300, 1142), "30% av arbetskostnad, max 50 000 kr", "30 % av arbetskostnad, max 50 000 kr", DMS, None, 170)],
    "7offerter": [((615, 678, 1000, 710), "FDK Bygg AB", "Nordisk Bygg & Anläggning AB", INTER_R, None),
                  ((1325, 678, 1600, 710), "customer@example.com", "namn@foretag.se", INTER_R, None, 225)],
    "6verktyg": [((722, 623 + 87 * k, 960, min(663 + 87 * k, 1174)), o, n, INTER, None) for k, (o, n) in
                 {0: ("laser", "Laser"), 1: ("laser", "Laser"), 2: ("makita skruvdragare", "Makita skruvdragare"),
                  3: ("skruvdragare", "Skruvdragare"), 5: ("cirkelsåg", "Cirkelsåg"), 6: ("gersåg", "Gersåg")}.items()]
                + [((2000, y - 25, 2200, y + 25), o, n, DMS, None) for y, o, n in
                   [(721, "cirkelsåg", "Cirkelsåg"), (887, "gersåg", "Gersåg"), (1051, "laser", "Laser")]],
    "5planering": [
        ((975, 410, 1170, 440), "1 Aug – 31 Aug 2026", "1 aug – 31 aug 2026", INTER, 17),
        ((668, 665, 800, 690), "worker", "Arbetare", INTER_M, 15, 170),
        ((668, 810, 800, 835), "worker", "Arbetare", INTER_M, 15, 170),
        ((668, 1030, 800, 1055), "projectAdmin", "Projektadmin", INTER_M, 15, 170),
    ]
    + [((1080 + 243 * i, 478, min(1170 + 243 * i, 1888), 498), f"Week {31 + i}", f"Vecka {31 + i}", INTER_M, 14, 200, True)
       for i in range(4) if 1170 + 243 * i < 1900]
    + [((1936, round(791 + 77.6 * i), 2035, round(814 + 77.6 * i)), s, sv, DMS, 15, 200)
       for i, (s, sv) in enumerate([("in_progress", "Pågår")] * 3 + [("on_hold", "Pausad"), ("completed", "Klar"), ("in_progress", "Pågår")])],
}
# critic v6 r3: Utlägg dates newest first (were 25.05, 18.05, 15.06, 04.06 …)
TEXT["11costs"] += [((1490, y - 20, 1600, y + 20), o, n, INTER, None) for y, o, n in zip(
    (469, 541, 618, 696, 768, 840, 911, 983),
    ("25.05.2026", "18.05.2026", "15.06.2026", "04.06.2026", "26.06.2026", "23.06.2026", "28.06.2025", "26.06.2026"),
    ("28.06.2026", "26.06.2026", "26.06.2026", "23.06.2026", "15.06.2026", "04.06.2026", "25.05.2026", "18.05.2026"))]
G08_TEXT = [((1940, 570, 2100, 602), "9 sep. 2026", "20 nov. 2026", DMS_M, None),
            # critic v6 r5: ROT counts labour only → the row is labour hours, not a lump sum
            ((1960, 733, 2200, 764), "Badrumsrenovering", "Arbete badrum", DMS, None, 225, False, (17, 24, 39)),
            ((2000, 845, 2062, 876), "1", "20", DMS_M, 22, 140, "r"),
            ((2140, 845, 2202, 876), "st", "tim", DMS_M, 22, 140, "r"),
            ((2240, 845, 2350, 876), "10 000", "550", DMS_M, 22, 140, "r"),
            ((2200, 905, 2360, 934), "10 000,00 kr", "11 000,00 kr", DMS_M, None, 140, "r"),
            ]


def a_pris(im):
    """'Á-pris' → 'à-pris', same size and cap line as the 'Enhet' label next to it."""
    from PIL import ImageFont
    g = lambda box: im.convert("L").crop(box).point(lambda v: 255 if v < 140 else 0).getbbox()
    eb, ab = g((2070, 795, 2200, 828)), g((2215, 790, 2330, 828))
    ex0, ey0, ex1 = eb[0] + 2070, eb[1] + 795, eb[2] + 2070
    size = 8
    while ImageFont.truetype(str(DMS_M), size + 1).getlength("Enhet") <= ex1 - ex0 + 1:
        size += 1
    f = ImageFont.truetype(str(DMS_M), size)
    x0 = ab[0] + 2215
    col = min((im.getpixel((x, y)) for x in range(ex0, ex1) for y in range(ey0, ey0 + 12)), key=lambda p: sum(p[:3]))
    d = ImageDraw.Draw(im)
    d.rectangle((x0 - 2, ab[1] + 788, ab[2] + 2217, ab[3] + 792), fill=im.getpixel((x0 - 6, ey0 + 4)))
    d.text((x0 - f.getbbox("à")[0], ey0 - f.getbbox("E")[1]), "à-pris", font=f, fill=col)


TOGGLE_ON = {"8fakturor": [(2285, 1097, 2349, 1137)]}
# critic v6 r2: neutral Swedish demo names instead of internal/test users (same people in every mockup)
NAMES = {"Hadjie Angela Gepanaga": "Sara Lindqvist", "Alexander Ljungström": "Mikael Berg", "Tino Gerhard": "Lars Holm"}
DARK = (17, 24, 39)
NAME_C = (14, 38, 66)  # navy of the other names
TEXT["5planering"] += [((660, 856, 960, 884), "Hadjie Angela Gepanaga", NAMES["Hadjie Angela Gepanaga"], INTER, 19, 200, False, NAME_C),
                       ((660, 929, 900, 955), "Alexander Ljungström", NAMES["Alexander Ljungström"], INTER, 19, 200, False, NAME_C),
                       ((660, 1002, 900, 1028), "Tino Gerhard", NAMES["Tino Gerhard"], INTER, 19, 200, False, NAME_C)]
TEXT["3personal"] += [((720, 460, 900, 486), "Tino Gerhard", NAMES["Tino Gerhard"], INTER, None, 200, False, NAME_C),
                      ((720, 546, 930, 572), "Alexander Ljungström", NAMES["Alexander Ljungström"], INTER, None, 200, False, NAME_C),
                      ((720, 890, 935, 914), "Hadjie Angela Gepanaga", NAMES["Hadjie Angela Gepanaga"], INTER, None, 200, False, NAME_C),
                      ((1940, 708, 2230, 742), "Hadjie Angela Gepanaga", NAMES["Hadjie Angela Gepanaga"], DMS_M, None, 200, False, NAME_C)]
FIXES["3personal"].append(("fill", (922, 915, 945, 932), (950, 925)))  # '..' under the long name
# 8fakturor: filled invoice, same customer and due date (30 days) on laptop and phone, plausible amount
TEXT["8fakturor"] += [
    ((618, 446, 900, 474), "Välj kund", "Anna Svensson", INTER_R, None, 225, False, DARK),
    ((1330, 565, 1500, 592), "10.08.2026", "09.09.2026", INTER_R, None),
    ((1940, 570, 2100, 602), "7 sep. 2026", "9 sep. 2026", DMS_M, None),
    ((1960, 733, 2200, 764), "t.ex. Rivning kök, 25 m²", "Badrumsrenovering", DMS, None, 225, False, DARK),
    ((2300, 845, 2345, 872), "0", "10 000", DMS_M, 22, 140, "r"),
    ((2260, 905, 2355, 934), "0,00 kr", "10 000,00 kr", DMS_M, None, 140, "r"),
]


def faktura(im):
    """Totals bar: 10 000 + 25 % moms = 12 500 kr (was 123,00 / 154,00)."""
    from PIL import ImageFont
    d = ImageDraw.Draw(im)
    size = 8
    while ImageFont.truetype(str(INTER), size + 1).getlength("Exkl. moms: 123,00") <= 180:
        size += 1
    f = ImageFont.truetype(str(INTER), size)
    items = ["Exkl. moms: 10 000,00", "Moms: 2 500,00", "Totalt: 12 500,00", "Öresavrundning: 0,00", "Att betala: 12 500,00"]
    gap = 34
    while sum(f.getlength(t) for t in items) + gap * (len(items) - 1) > 975 and gap > 22:
        gap -= 1
    if sum(f.getlength(t) for t in items) + gap * (len(items) - 1) > 975:
        items.remove("Öresavrundning: 0,00")
        gap = 34
    col = min((im.getpixel((x, y)) for x in range(632, 800) for y in range(1127, 1148)), key=lambda p: sum(p[:3]))
    d.rectangle((626, 1118, 1612, 1158), fill=im.getpixel((620, 1137)))
    x = 632
    for t in items:
        d.text((x, 1137), t, font=f, fill=col, anchor="lm")
        x += f.getlength(t) + gap


def verktyg(im):
    """6verktyg: status chips were truncated ('PÅ REPARATIO', 'UPPTAGEN ..') → widen the status column by
    shifting QR…Anteckningar 50 px right and redraw whole chips; phone: icon on the Laser card, no half card under the tab bar."""
    from PIL import ImageFont
    orig = im.copy()
    sx, ex, dx, y0, y1 = 1100, 1840, 50, 340, 1178  # y1 = laptop screen bottom
    im.paste(orig.crop((sx, y0, ex, y1)), (sx + dx, y0))
    filler = orig.crop((1700, y0, 1701, y1)).resize((dx, y1 - y0))
    im.paste(filler, (sx, y0))
    d = ImageDraw.Draw(im)
    f = ImageFont.truetype(str(INTER), 17)
    runs, cur = [], None
    for y in range(380, y1 + 1):
        p = orig.getpixel((962, y))
        c = max(p[:3]) - min(p[:3]) > 8 and sum(p[:3]) < 740 and y < y1
        if c and cur is None:
            cur = y
        if not c and cur is not None:
            runs.append([cur, y])
            cur = None
    merged = []
    for r in runs:  # the dot splits one chip into two runs
        if merged and r[0] - merged[-1][1] < 8:
            merged[-1][1] = r[1]
        else:
            merged.append(r)
    for a, b in merged:
        cy = (a + b) // 2 if b - a > 25 else a + 15  # last chip is cut by the screen edge
        bgc = orig.getpixel((960, cy))
        txt = min((orig.getpixel((x, y)) for x in range(965, 1080) for y in range(cy - 8, cy + 8)), key=lambda p: sum(p[:3]))
        r_, g_, b_ = txt[:3]
        label = "TILLGÄNGLIG" if g_ > r_ and g_ > b_ else "PÅ REPARATION" if r_ > b_ else "UPPTAGEN"
        d.rectangle((950, cy - 20, sx + dx - 2, cy + 20), fill=orig.getpixel((940, cy)))
        w = 30 + f.getlength(label) + 14
        d.rounded_rectangle((955, cy - 15, 955 + w, cy + 15), 15, fill=bgc)
        d.ellipse((966, cy - 3, 972, cy + 3), fill=txt)
        d.text((982, cy), label, font=f, fill=txt, anchor="lm")
    im.paste(orig.crop((900, y1, 1910, 1312)), (900, y1))  # keep laptop bezel below the screen
    # phone: laser thumbnail as icon on the 'Laser' card
    icon = rounded(orig.crop((672, 622, 717, 668)).resize((34, 34), Image.LANCZOS).convert("RGBA"), 7)
    im.alpha_composite(icon, (1949, 1036))
    # phone: half card under the tab bar → plain card (no cut text, no cut status chip)
    px = im.load()
    icons = [(2022, 1205, 2075, 1260), (2128, 1205, 2185, 1260)]  # home, menu
    for x in range(1936, 2380):
        for y in range(1185, 1300):
            p = px[x, y]
            if x < 2225 and not (y > 1286 and sum(p[:3]) < (90 if 1950 < x < 2220 else 450)):  # not the bezel edge
                in_icon = any(a <= x <= c and b <= y <= e for a, b, c, e in icons)
                if sum(p[:3]) > (600 if in_icon else 150):
                    px[x, y] = (255, 255, 255, p[3])
            elif x >= 2200 and 200 < p[0] < 250 and p[2] > 235 and p[2] - p[0] > 6:
                px[x, y] = (255, 255, 255, p[3])





def planering(im):
    """5planering: '+ Assign' button → '+ Tilldela'; English weekday row (Sat Sun Mon…) → Swedish."""
    from PIL import ImageFont
    d = ImageDraw.Draw(im)
    bg_btn = im.getpixel((925, 361))
    d.rectangle((929, 336, 1036, 386), fill=bg_btn)
    fb = ImageFont.truetype(str(INTER), 16)
    t = "+ Tilldela"
    w = d.textlength(t, font=fb) + 36
    d.rounded_rectangle((931, 338, 931 + w, 384), 8, fill=BLUE)
    d.text((931 + w / 2, 361), t, font=fb, fill=(255, 255, 255), anchor="mm")
    # critic v6 r3: stray 1-day purple bar in front of Denis Hok's orange booking → full-width bar, same as
    # Antony Hartman's identical 'Stambyte BRF Solrosen' booking one row below
    im.paste(im.crop((950, 784, 1700, 835)), (950, 712))
    strip = im.crop((960, 531, 1895, 551)).convert("RGB")
    bgc = max(strip.get_flattened_data(), key=lambda p: sum(p))
    cols = [p for p in strip.get_flattened_data() if sum(p) < 600]
    col = min(cols, key=lambda p: sum(p)) if cols else (150, 160, 175)
    d.rectangle((960, 531, 1895, 551), fill=bgc)
    f = ImageFont.truetype(str(INTER_M), 14)
    for day in range(1, 28):
        cx = 971 + (day - 1) * 34.7
        if cx > 1880:
            break
        d.text((cx, 541), WEEK[(day - 1) % 7], font=f, fill=col, anchor="mm")


def calm_personal(im):
    """g09 (critic v6 r3): calm Anställda phone — roles instead of 'Ingen yrkesroll', no red 'Inte på jobbet',
    no half card under the tab bar (screen ends after Antony Hartman; tab bar + FAB redrawn on a clean background)."""
    ox, oy = PHONE[:2]
    rep(im, (ox + 40, oy + 318, ox + 300, oy + 348), "Ingen yrkesroll", "Byggnadsingenjör", DMS, 19, 200, False, (39, 140, 249))
    rep(im, (ox + 40, oy + 806, ox + 300, oy + 836), "Ingen yrkesroll", "Arbetare", DMS, 19, 200, False, (39, 140, 249))
    orig = im.copy()
    d = ImageDraw.Draw(im)
    d.rectangle((ox + 285, oy + 272, ox + 446, oy + 320), fill=(255, 255, 255))  # red badge → green one from Denis Hok
    im.paste(orig.crop((ox + 325, oy + 598, ox + 446, oy + 644)), (ox + 325, oy + 598 - 324))
    page = (241, 240, 247, 255)
    px, op = im.load(), orig.load()
    fab, fr = (ox + 388, oy + 963), 52
    y0 = oy + 897
    for y in range(y0, oy + 1040):
        xs = [x for x in range(ox, ox + 492) if sum(op[x, y][:3]) > 300]
        if not xs:
            continue
        for x in range(xs[0], xs[-1] + 1):
            if (x - fab[0]) ** 2 + (y - fab[1]) ** 2 > fr ** 2:
                px[x, y] = page
    # tab bar pill with the original home + menu icons
    sh = Image.new("RGBA", im.size, (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle((ox + 58, oy + 924, ox + 330, oy + 1004), 40, fill=(20, 30, 60, 40))
    im.alpha_composite(sh.crop((ox, oy + 880, ox + 492, oy + 1040)).filter(ImageFilter.GaussianBlur(10)), (ox, oy + 880))
    d.rounded_rectangle((ox + 58, oy + 920, ox + 330, oy + 1000), 40, fill=(255, 255, 255))
    for bx in ((ox + 112, oy + 938, ox + 170, oy + 992), (ox + 222, oy + 936, ox + 278, oy + 992)):
        c = orig.crop(bx)
        m = c.convert("L").point(lambda v: 255 if v < 150 else 0).filter(ImageFilter.MaxFilter(3))
        im.paste(c, bx[:2], m)
    # FAB back on top (keep its own pixels inside the circle)
    m = Image.new("L", (2 * fr, 2 * fr), 0)
    ImageDraw.Draw(m).ellipse((2, 2, 2 * fr - 2, 2 * fr - 2), fill=255)
    box = (fab[0] - fr, fab[1] - fr, fab[0] + fr, fab[1] + fr)
    im.paste(orig.crop(box), box[:2], m)
    return im


# ---- critic v6 r4: per-post demo data (only for that post, other posts keep their images) ----
G07_PROJ = ["Stambyte BRF Solrosen", "Badrum Villa Ekbacken", "Takbyte BRF Linden", "Stambyte BRF Solrosen",
            "Kök Radhus Tallbacken", "Badrum Villa Ekbacken", "Takbyte BRF Linden", "Kök Radhus Tallbacken"]
G09_PROJ = "Takbyte BRF Linden"


def g07_costs(im):
    """11costs: varied project names (row 6 = phone receipt), whole 'Kvitto' header, no half 'Händelselogg' item."""
    for y, n in zip((469, 541, 618, 696, 768, 840, 911, 983), G07_PROJ):
        rep(im, (1205, y - 20, 1480, y + 20), "Byggnation av BRF Peter", n, INTER, None)
    rep(im, (660, 355, 740, 390), "Kvi...", "Kvitto", INTER, None)
    ImageDraw.Draw(im).rectangle((252, 1148, 540, 1176), fill=im.getpixel((400, 1140)))
    rep(im, (1945, 1160, 2300, 1205), "Byggnation av BRF Peter", G07_PROJ[5], DMS_M, None)
    # critic v6 r5: Byggmax had the same amount as Ahlsell; receipts dated Sep–Oct 2026 (post goes out in October)
    rep(im, (1740, 963, 1892, 1003), "279,30 SEK", "642,50 SEK", INTER, None, 140, "r")
    for y, o, n in zip((469, 541, 618, 696, 768, 840, 911, 983), G07_OLD_DATES, G07_DATES):
        rep(im, (1490, y - 20, 1600, y + 20), o, n, INTER, None)
    return g07_shift(im)


G07_OLD_DATES = ("28.06.2026", "26.06.2026", "26.06.2026", "23.06.2026", "15.06.2026", "04.06.2026", "25.05.2026", "18.05.2026")
G07_DATES = ("16.10.2026", "14.10.2026", "13.10.2026", "08.10.2026", "02.10.2026", "29.09.2026", "22.09.2026", "17.09.2026")


def g07_shift(im):
    """critic v6 r5+r6: the phone covered the Totalt column and the Sok field, and 'Betalat av' ran into 'Totalt'
    -> take slack out of Leverantor|Kategori|Projekt|Datum, keep a wide gap before Totalt, table + Sok end at x 1790."""
    o = im.copy()
    y0, y1, end = 345, 1040, 1893  # table rows (header..scrollbar); x = 1893 is the last laptop pixel left of the phone
    blank = o.crop((1475, y0, 1476, y1))  # empty gap column (row lines + scrollbar) as filler
    segs = ((1010, 1200, 60), (1200, 1480, 110), (1480, 1620, 145), (1620, 1755, 145), (1755, end, 105))
    im.paste(blank.resize((end - 950, y1 - y0)), (950, y0))
    for x0, x1, dx in segs:
        im.paste(o.crop((x0, y0, x1, y1)), (x0 - dx, y0))
    im.paste(blank.crop((0, 1005 - y0, 1, y1 - y0)).resize((end - 950, y1 - 1005)), (950, 1005))  # scrollbar unbroken
    right = end - segs[-1][2]  # new right edge of the Totalt column
    # Sok field: rebuilt whole, right-aligned with the table (its right end used to sit under the phone)
    fy0, fy1, fw = 268, 328, 140
    d = ImageDraw.Draw(im)
    d.rectangle((1700, fy0 - 4, end, fy1 + 4), fill=o.getpixel((1700, 300)))
    left = right - fw
    im.paste(o.crop((1798, fy0, 1895, fy1)), (left, fy0))  # edge + icon + 'Sok'
    im.paste(o.crop((1894, fy0, 1895, fy1)).resize((fw - 97 - 16, fy1 - fy0)), (left + 97, fy0))
    im.paste(o.crop((1798, fy0, 1814, fy1)).transpose(Image.FLIP_LEFT_RIGHT), (right - 16, fy0))
    return im


def bar_text(im, x0, x1, y0, y1, text, colour):
    """Purple planning bar redrawn from x0 to x1 with a white label (no truncation)."""
    from PIL import ImageFont
    sh = Image.new("RGBA", (x1 - x0 + 60, y1 - y0 + 60), (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle((30, 34, 30 + x1 - x0, 34 + y1 - y0), 10, fill=(40, 40, 80, 22))
    im.alpha_composite(sh.filter(ImageFilter.GaussianBlur(5)), (x0 - 30, y0 - 30))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((x0, y0, x1, y1), 10, fill=colour)
    d.text((x0 + 15, (y0 + y1) / 2), text, font=ImageFont.truetype(str(INTER), 14), fill=(255, 255, 255), anchor="lm")


# critic v6 r5: one consistent October 2026 schedule — the phone (Anställda on Takbyte BRF Linden, all 'På jobbet')
# lists exactly the people the laptop has on Takbyte today; whole month fits left of the phone (no cut columns)
PURPLE, ORANGE = (141, 0, 234), (229, 98, 0)
G09_BARS = [(1, 23, G09_PROJ, PURPLE), (1, 30, "Nybyggnation Villa Ekbacken", ORANGE), (5, 23, G09_PROJ, PURPLE),
            (5, 23, G09_PROJ, PURPLE), (12, 18, G09_PROJ, PURPLE), (1, 16, "Nybyggnation Villa Ekbacken", ORANGE),
            (19, 30, "Nybyggnation Villa Ekbacken", ORANGE)]  # rows: Roger, Tomas, Denis, Antony, Sara, Mikael, Lars
G09_TODAY = 14  # Wed 14 Oct
OKT_WD = ["Tor", "Fre", "Lör", "Sön", "Mån", "Tis", "Ons"]  # 1 Oct 2026 = Thursday


def g09_planering(im):
    from PIL import ImageFont
    o = im.copy()
    gx0, gx1, top, hb, bot = 960, 1880, 466, 553, 1066  # grid: left, right border, header top/bottom, bottom
    dw = (gx1 - gx0) / 31
    col = o.crop((1745, top, 1746, bot)).resize((1905 - gx0, bot - top))  # clean cell column (row bands + lines)
    im.paste(o.crop((945, hb + 2, 946, bot - 3)).resize((12, bot - hb - 5)), (945, hb + 2))  # orange glow left of the grid
    im.paste(col.resize((1905 - gx0 + 3, bot - top)), (gx0 - 3, top))  # also the old bars' left edges at 957–959
    d = ImageDraw.Draw(im)
    d.rectangle((gx0 - 3, 470, 1904, 550), fill=(255, 255, 255))
    d.line((gx0 - 2, top, gx0 - 2, bot - 3), fill=(226, 231, 239))  # names | grid border
    d.rectangle((gx1 + 1, top, 1904, bot + 2), fill=o.getpixel((1500, 1085)))
    line, sep = (234, 238, 244), (232, 235, 238)
    for n in range(1, 31):
        x = round(gx0 + n * dw)
        d.line((x, hb, x, bot - 3), fill=line)
    d.line((gx1, top, gx1, bot - 3), fill=(226, 231, 239))
    fn, fw = ImageFont.truetype(str(INTER), 13), ImageFont.truetype(str(INTER_M), 13)
    weeks = [(40, 1, 4), (41, 5, 11), (42, 12, 18), (43, 19, 25), (44, 26, 31)]
    for wk, a, b in weeks:
        xa, xb = gx0 + (a - 1) * dw, gx0 + b * dw
        if a > 1:
            d.line((round(xa), 468, round(xa), hb - 1), fill=sep, width=2)
        d.text(((xa + xb) / 2, 488), f"Vecka {wk}", font=ImageFont.truetype(str(INTER_M), 14), fill=(120, 126, 131), anchor="mm")
    for day in range(1, 32):
        cx = gx0 + (day - 0.5) * dw
        d.text((cx, 519), f"{day:02d}", font=fn, fill=(152, 160, 172), anchor="mm")
        d.text((cx, 541), OKT_WD[(day - 1) % 7], font=fw, fill=(120, 126, 131), anchor="mm")
    for i, (a, b, name, c) in enumerate(G09_BARS):
        cy = 590 + 73 * i
        bar_text(im, round(gx0 + (a - 1) * dw) + 1, round(gx0 + b * dw) - 2, cy - 20, cy + 20, name, c)
    tx = round(gx0 + (G09_TODAY - 0.5) * dw)
    d = ImageDraw.Draw(im)
    d.line((tx - 1, hb, tx - 1, bot - 3), fill=(77, 81, 86))
    d.line((tx, hb, tx, bot - 3), fill=(0, 1, 6))
    d.line((tx + 1, hb, tx + 1, bot - 3), fill=(80, 86, 91))
    rep(im, (975, 405, 1145, 445), "1 aug – 31 aug 2026", "1 okt – 31 okt 2026", INTER, None)
    # footer links: whole 'Underbiträdesavtal', right-aligned to the grid
    d.rectangle((1600, 1112, 1904, 1158), fill=o.getpixel((1600, 1135)))
    ff = ImageFont.truetype(str(INTER_R), 8)
    size = 8
    while ImageFont.truetype(str(INTER_R), size + 1).getlength("Integritetspolicy") <= 109:
        size += 1
    ff = ImageFont.truetype(str(INTER_R), size)
    x = gx1
    for t in ("Underbiträdesavtal", "Villkor", "Integritetspolicy"):
        x -= ff.getlength(t)
        d.text((x, 1135), t, font=ff, fill=(133, 132, 137), anchor="lm")
        x -= 24
    # half sidebar item under Inköpsfakturor
    d.rectangle((252, 1160, 525, 1178), fill=o.getpixel((400, 1150)))
    return im


def g09_phone(im):
    """Anställda phone: same project as the laptop, no cut-off subtitles."""
    ox, oy = PHONE[:2]
    rep(im, (ox + 30, oy + 190, ox + 320, oy + 225), "Byggnation av BRF Peter", G09_PROJ, DMS_M, None)
    rep(im, (ox + 40, oy + 276, ox + 300, oy + 312), "Erik Olsson", "Roger Eriksson", DMS_M, None)  # as on the laptop
    for y, old in ((365, "Byggnation av BRF Peter, Centralvägen 38,..."), (527, "Byggnation av BRF Peter, Nybyggnation Vill..."),
                   (690, "Byggnation av BRF Peter, Byggmästarvägen..."), (852, "Byggnation av BRF Peter, Stambyte BRF Sol...")):
        rep(im, (ox + 40, oy + y - 16, ox + 445, oy + y + 16), old, G09_PROJ + ", Lindvägen 14", DMS, 19, 200)
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


if __name__ == "__main__" and __import__("sys").argv[1:2] != ["v6"]:
    main()


# ---------- v6: FB-group posts (S21 tone) · run: python3 make_features.py v6 → v6-grupper/gNN.jpg ----------
# Price rows (S18): equal-width SKY pills + what is included (#cfe3f7), left edges on one line, inside the square (S15).
CFE = (207, 227, 247)
ROWS = [("299 kr/mån", "offert, faktura, lön, projektekonomi m.m."),
        ("+69 kr/arbetare", "tidrapport, närvaro, egenkontroll m.m.")]
HERO_PHOTO = ROOT / "public/landing/hero"
# 8fakturor phone: filled rows only (customer + date, ROT switch) — the line form above is empty (S5)
# r2: the invoice row is filled too (Badrumsrenovering 10 000) → customer + date + row, ROT; shown at native size (sharp)
FAKTURA_ROT = [(1928, 440, 2368, 945), (1928, 1035, 2368, 1160)]
# 12salary close-up (r2): only Anställd/Timmar/Brutto/Netto + the title line, so the text stays readable on a phone
LON_TITLE = (630, 340, 1100, 395)
LON_COLS = [(646, 900), (1060, 1160), (1330, 1480), (1690, 1860)]
LON_ROWS = (430, 662)
# id, headline, price rows, visual: ("hero"|"feature" mockup|"photo" file+crop|"stack" crops), store badges
V6 = [
    ("g01", ["Vad kostar ert system?", "Vi räknar åt er"],
     ROWS + [("989 kr/mån", "10 arbetare + 2 på kontoret")], ("feature", "8fakturor"), True),
    ("g02", ["Nystartat byggföretag?", "Testa 14 dagar gratis"], ROWS, ("feature", "7offerter"), True),
    ("g03", ["Bygget och kontoret", "Allt i ett system"], ROWS, ("feature", "6verktyg"), True),
    ("g04", ["Byta system?", "Vi flyttar era data gratis"], ROWS, ("feature", "3personal"), False),
    ("g05", ["Löner och AGI-underlag", "Ingår i grundpriset"],
     [("299 kr/mån", "löner, lönespec, AGI, faktura m.m."), ROWS[1]], ("cols", "12salary"), False),
    ("g06", ["Hur väljer ni system?", "Pris, app eller allt i ett?"], ROWS, ("photo", "bygget.webp", (0, 0, 1527, 1700)), True),
    # 'Hantverkare sökes' = customers' group: no price pills, no store badges (critic v6 r2, as g10)
    ("g07", ["Kvitton från bygghandeln?", "Hur gör ni i dag?"], [], ("feature", "11costs"), False),
    # 'Bygg och Renovering' = mostly homeowners: no price pill, no 'exkl. moms' (critic v6 r3, as g07/g09/g10)
    ("g08", ["Faktura med ROT-avdrag?", "Vad är viktigast för er?"], [], ("stack", "8fakturor", FAKTURA_ROT), False),
    # phone in 5planering is cluttered (critic v6) → calm Anställda screen from 3personal
    # homeowner group: no pills, no badges (critic v6 r2)
    ("g09", ["Byggfirma i Stockholm?", "Vi söker testföretag"], [], ("feature", "5planering", "3personal", "calm"), False),
    # homeowner group: no price pills (critic v6)
    # the helmet is cut by the photo's own top edge → crop to hands + phone, no head at all (never crop heads)
    ("g10", ["Saknas en funktion?", "Vi bygger den gärna"], [], ("photo", "bygget.webp", (600, 620, 1527, 1800)), False),
]

# bygget.webp: the worker's phone shows English home buttons → Swedish app labels (sv.json home.buttons, a11y)
PHOTO_SV = {"bygget.webp": [((1050, 1195, 1135, 1232), "Camera", "Kamera"), ((1205, 1205, 1270, 1242), "Chat", "Chattar"),
                            ((1035, 1312, 1145, 1352), "Shift history", "Arbetspass"), ((1192, 1322, 1280, 1362), "Projects", "Projekt"),
                            ((1080, 1422, 1135, 1452), "Home", "Hem"), ((1205, 1432, 1262, 1464), "Menu", "Meny")]}


def photo_sv(name, im):
    from PIL import ImageFont
    d = ImageDraw.Draw(im)
    for box, old, new in PHOTO_SV.get(name, []):
        c = im.crop(box).convert("L")
        b = c.point(lambda v: 255 if v > 95 else 0).getbbox()
        if not b:
            raise ValueError(f"no light text in {box} for {old!r}")
        x0, y0, x1, y1 = b[0] + box[0], b[1] + box[1], b[2] + box[0], b[3] + box[1]
        col = max((im.getpixel((x, y)) for x in range(x0, x1) for y in range(y0, y1)), key=lambda p: sum(p[:3]))
        bgc = sorted((im.getpixel((x, y)) for x in range(x0 - 4, x1 + 4) for y in (y0 - 5, y1 + 5)), key=lambda p: sum(p[:3]))
        bgc = bgc[len(bgc) // 2]
        size = 8
        while ImageFont.truetype(str(DMS), size + 1).getbbox(old)[2] - ImageFont.truetype(str(DMS), size + 1).getbbox(old)[0] <= x1 - x0:
            size += 1
        f = ImageFont.truetype(str(DMS), size)
        d.rectangle((x0 - 3, y0 - 3, x1 + 3, y1 + 4), fill=bgc)
        ob, nb = f.getbbox(old), f.getbbox(new)
        cx = (x0 + x1) / 2 if old in ("Home", "Menu") else None  # tab labels are centred under their icons
        x = cx - (nb[0] + nb[2]) / 2 if cx else x0 - nb[0]
        d.text((x, y0 - ob[1]), new, font=f, fill=col)
    return im


def fit(d, t, size, maxw, weight="Heavy"):
    while d.textlength(t, font=font(size, weight)) > maxw:
        size -= 2
    return font(size, weight)


def head6(lines, rows):
    frame = bg()
    d = ImageDraw.Draw(frame)
    f = min((fit(d, t, 92, W - 2 * 64) for t in lines), key=lambda x: x.size)  # same size for both lines
    for i, t in enumerate(lines):
        d.text(((W - d.textlength(t, font=f)) / 2, 150 + i * 104), t, font=f, fill=WHITE if i == 0 else SKY)
    if not rows:
        return frame, 430
    fp, ft = font(34, "Bold"), font(31, "Semibold")
    pw = max(d.textlength(p, font=fp) for p, _ in rows) + 44
    tw = max(d.textlength(t, font=ft) for _, t in rows)
    while pw + 20 + tw > W - 2 * 64:  # shrink explanations until the block fits the margins
        ft = font(ft.size - 1, "Semibold")
        tw = max(d.textlength(t, font=ft) for _, t in rows)
    x = (W - (pw + 20 + tw)) / 2
    y = 385
    for p, t in rows:
        d.rounded_rectangle((x, y, x + pw, y + 54), 27, fill=SKY)
        d.text((x + (pw - d.textlength(p, font=fp)) / 2, y + 27), p, font=fp, fill=NAVY, anchor="lm")
        d.text((x + pw + 20, y + 27), t, font=ft, fill=CFE, anchor="lm")
        y += 66
    fn = font(26, "Semibold")  # prices are excl. VAT (critic v6): small note under the pill column
    d.text((x + pw / 2, y + 2), "exkl. moms", font=fn, fill=CFE, anchor="mt")
    return frame, y + 50


def place6(frame, im, top, maxw, card=False):
    global TOP
    TOP, old = top, TOP
    place(frame, im, maxw, card)
    TOP = old


def main6(only=()):
    out = HERE / "v6-grupper"
    for gid, lines, rows, vis, badges in V6:
        if only and gid not in only:
            continue
        f, top = head6(lines, rows)
        kind = vis[0]
        if kind == "hero":  # collage carries its own store badges
            place6(f, Image.open(HERE / "src/hero.png").convert("RGBA"), top, 1000)
        elif kind == "photo":
            im = photo_sv(vis[1], Image.open(HERO_PHOTO / vis[1]).convert("RGBA"))
            place6(f, im.crop(vis[2]) if vis[2] else im, top, W - 2 * 64, card=True)
        elif kind == "feature":
            im = fix(vis[1], Image.open(FEAT / f"{vis[1]}.webp").convert("RGBA"))
            im = {"g07": g07_costs, "g09": g09_planering}.get(gid, lambda x: x)(im)
            if len(vis) > 2:  # phone screen from another mockup (same PHONE box in every mockup)
                ph = fix(vis[2], Image.open(FEAT / f"{vis[2]}.webp").convert("RGBA"))
                if vis[3:] == ("calm",):
                    ph = calm_personal(ph)
                if gid == "g09":
                    ph = g09_phone(ph)
                im.alpha_composite(phone(ph), PHONE[:2])
            place6(f, im, top, W - 40)
        elif kind == "card":  # laptop close-up on a white card, as v4 slide 2 (S5: no empty lower half)
            crop = fix(vis[1], Image.open(FEAT / f"{vis[1]}.webp").convert("RGBA")).crop(vis[2])
            card = Image.new("RGBA", (crop.width + 80, crop.height + 80), WHITE)
            card.alpha_composite(crop, (40, 40))
            place6(f, card, top, W - 2 * 64, card=True)
        elif kind == "cols":  # title line + chosen table columns side by side, max 1.1x so it stays sharp
            src = fix(vis[1], Image.open(FEAT / f"{vis[1]}.webp").convert("RGBA"))
            title = src.crop(LON_TITLE)
            cols = [src.crop((a, LON_ROWS[0], b, LON_ROWS[1])) for a, b in LON_COLS]
            tw = sum(c.width for c in cols)
            card = Image.new("RGBA", (tw + 80, title.height + 12 + cols[0].height + 80), WHITE)
            card.alpha_composite(title, (40, 40))
            x = 40
            for c in cols:
                card.alpha_composite(c, (x, 40 + title.height + 12))
                x += c.width
            place6(f, card, top, min(W - 2 * 64, card.width * 1.1), card=True)
        else:  # stack of crops from one phone screen on its own light card
            src = fix(vis[1], Image.open(FEAT / f"{vis[1]}.webp").convert("RGBA"))
            if gid == "g08":
                for args in G08_TEXT:
                    rep(src, *args)
                a_pris(src)
            parts = [src.crop(b) for b in vis[2]]
            gap, pad = 18, 22
            cw = max(p.width for p in parts) + 2 * pad
            ch = sum(p.height for p in parts) + gap * (len(parts) - 1) + 2 * pad
            card = Image.new("RGBA", (cw, ch), src.getpixel((1930, 445)))
            y = pad
            for p in parts:
                card.alpha_composite(p, (pad, y))
                y += p.height + gap
            place6(f, card, top, card.width, card=True)  # never upscale (critic v6 r2: soft text)
        footer(f, badges)
        out.mkdir(exist_ok=True)
        f.convert("RGB").save(out / f"{gid}.jpg", quality=92)
        print(gid)


if __name__ == "__main__":
    import sys as _s
    if _s.argv[1:2] == ["v6"]:
        main6(_s.argv[2:])
