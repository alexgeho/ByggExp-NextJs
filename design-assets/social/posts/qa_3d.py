"""Check rendered carousel slides before showing them (owner 2026-10-31: no more small slips).
python3 qa_3d.py <post folder>...   (folder with 1.jpg 2.jpg 3.jpg)
Prints every problem; exit 1 if any. Each new kind of slip gets a check here (S31)."""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

from make_3d import BLUE, GREEN_BG

TOL = 4  # px


def load(p):
    return np.asarray(Image.open(p).convert("RGB")).astype(int)


def colours(a, name, out):
    # pale-green circles must be exactly the site token
    pale = (a[:, :, 1] - a[:, :, 0] > 12) & (a[:, :, 1] - a[:, :, 2] > 8) & (a[:, :, 1] > 225)  # green-dominant only
    if pale.sum() > 200:
        med = np.median(a[pale], axis=0)
        if np.abs(med - np.array(GREEN_BG)).max() > 3:
            out.append(f"{name}: green circles {tuple(int(v) for v in med)} != token {GREEN_BG}")


def headline_top(a):
    ink = (a.mean(2) < 200).any(1)
    return int(np.argmax(ink))


def gaps(a):
    # empty horizontal bands (> 90 px) between content blocks, top to bottom
    rows = np.where((a.mean(2) < 246).sum(1) > 2)[0]
    out, prev = [], rows[0]
    for r in rows[1:]:
        if r - prev > 90:
            out.append(int(r - prev))
        prev = r
    return out


def arrow(a, name, out):
    blue = (np.abs(a - np.array(BLUE)).max(2) < 40)
    best = None
    for y in range(300, 950):
        xs = np.where(blue[y, 250:830])[0]
        if len(xs) > 40 and (best is None or len(xs) > best[1]):
            best = (y, len(xs), xs.min() + 250, xs.max() + 250)
    if not best:
        out.append(f"{name}: arrow not found")
        return
    y, _, x0, x1 = best
    band = (a[y - 120:y + 120].mean(2) < 225) & ~blue[y - 120:y + 120]
    cols = band.any(0)
    left = [x for x in range(x0) if cols[x]]
    right = [x for x in range(x1 + 1, a.shape[1]) if cols[x]]
    if left and right:
        gl, gr = x0 - left[-1], right[0] - x1
        if abs(gl - gr) > TOL:
            out.append(f"{name}: arrow not centred (left {gl} px, right {gr} px)")


def shadow_edges(out):
    # The cause of the "box" line: a shadow still non-white at the file edge after art().
    # Check every 3D picture the posts use, at the sizes they are drawn.
    import make_3d as m
    names = {(p[2], 820) for p in m.POSTS} | {(n, 380) for v in m.FLOW.values() for n in v[:2]}
    for name, side in sorted(names):
        g = np.asarray(m.art(name, side).convert("L")).astype(int)
        low = g[int(side * 0.6):]
        edge = np.concatenate([low[:, :2].ravel(), low[:, -2:].ravel(), g[-2:].ravel()])
        if edge.min() < 240:
            out.append(f"3D {name} @{side}: shadow reaches the edge (darkest {edge.min()})")


def main(folders):
    out = []
    for f in map(Path, folders):
        slides = [load(f / f"{k}.jpg") for k in (1, 2, 3)]
        tops = [headline_top(a) for a in slides]
        if max(tops) - min(tops) > TOL:
            out.append(f"{f.name}: headlines not level {tops}")
        for k, a in enumerate(slides, 1):
            nm = f"{f.name}/{k}"
            colours(a, nm, out)
            gp = gaps(a)
            if len(gp) >= 2 and abs(gp[0] - gp[1]) > TOL:
                out.append(f"{nm}: air above/below illustration differs {gp[:2]}")
            if gp and min(gp[:2]) < 115:
                out.append(f"{nm}: too little air around the illustration {gp[:2]} (min 120)")
        arrow(slides[1], f"{f.name}/2", out)
    shadow_edges(out)
    print("\n".join(out) if out else "QA ok")
    return 1 if out else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
