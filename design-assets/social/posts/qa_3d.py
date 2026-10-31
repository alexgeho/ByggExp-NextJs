"""Check rendered slides before showing them (owner 2026-10-31: no more small slips).
python3 qa_3d.py <slide.jpg>...  -> prints problems; exit 1 if any.
Checks: pale-green shapes use exactly the GREEN_BG token; blue = token."""
import sys
import numpy as np
from PIL import Image
from make_3d import GREEN_BG

bad = 0
for f in sys.argv[1:]:
    a = np.asarray(Image.open(f).convert("RGB")).astype(int)
    pale = (a[:, :, 1] - a[:, :, 0] > 12) & (a[:, :, 1] > 225) & (a[:, :, 2] < 245)
    if pale.sum() < 200:
        continue
    vals = a[pale]
    med = np.median(vals, axis=0)
    off = np.abs(med - np.array(GREEN_BG)).max()
    if off > 3:
        print(f"{f}: green circles {tuple(int(v) for v in med)} != token {GREEN_BG}")
        bad += 1
print("QA ok" if not bad else f"QA: {bad} problem(s)")
sys.exit(1 if bad else 0)
