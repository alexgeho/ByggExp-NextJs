"""Tap markers for tutorials (rule S39): a finger-sized dot with a dark rim + an expanding ring.
Shared by make_video.py (full cut) and add_taps.py (markers on an already cut video)."""
import json
from pathlib import Path

from PIL import Image, ImageDraw

HERE = Path(__file__).resolve().parent
IDLE_MIN, IDLE_KEEP = 0.5, 0.3       # same cut rules as make_video.py
KEEP_BEFORE = 0.5
VOICE_LEAD, VOICE_TAIL = 0.15, 0.45
LEAD, LIFE = 0.1, 0.7                # marker shows 0.1 s before the screen reacts, lives 0.7 s
R, RING = 30, 56                     # dot radius, ring end radius (1920x1080 px)
RIM = (190, 196, 204)                # light grey rim + halo, not black (S43)
BURST_GAP, BURST_DIST = 0.9, 90      # taps closer than this in time and space = one marker
KEYBOARD_Y, TYPING_GAP = 590, 1.3    # taps below this line with another one there within TYPING_GAP s = typing
SCREEN_CHANGE, SCREEN_KEEP = 0.03, 0.2  # this recording slides screens in softly (motion ~0.05): lower threshold so markers end on time (S41)
IDLE_MOTION = 0.00005  # desktop: the cursor barely registers at analysis size, typing does — cursor-only stretches (jitter) are cut


_still = HERE / "still.json"  # still.py: per 1/10 s pixel change incl. the cursor (0 = nothing moved)
STILL_FPS, STILL = (json.load(open(_still))["fps"], json.load(open(_still))["diff"]) if _still.exists() else (10, None)


def timeline(lang, fps=30):
    """(timeline, voice, total) exactly as make_video.py cuts the recording"""
    ana = json.load(open(HERE / "analysis.json"))
    segs = json.load(open(HERE / f"script_{lang}.json"))
    mfps, motion = ana["fps"], ana["motion"]
    idle, s = [], None
    for i, v in enumerate(motion + [1]):
        if v <= IDLE_MOTION:
            s = i if s is None else s
        else:
            if s is not None and (i - s) / mfps > IDLE_MIN:
                idle.append((s / mfps, i / mfps))
            s = None

    def kept(a, b):
        out, cur = [], a
        for i0, i1 in idle:
            if i1 <= a or i0 >= b:
                continue
            i0, i1 = max(i0, a), min(i1, b)
            cut0, cut1 = i0 + IDLE_KEEP / 2, i1 - KEEP_BEFORE
            if cut1 > cut0:
                if cut0 > cur:
                    out.append((cur, cut0))
                cur = cut1
        if b > cur:
            out.append((cur, b))
        return out

    tl, voice, out_t = [], [], 0.0
    for sg in segs:
        al = json.load(open(HERE / f"voice_{lang}" / f"{sg['id']}.json"))
        vdur = al["character_end_times_seconds"][-1]
        # "orig": [a, b] or [[a, b], [c, d]] (a jump inside one step); "speed": play faster (long typing)
        parts = sg["orig"] if isinstance(sg["orig"][0], list) else [sg["orig"]]
        sp = sg.get("speed", 1)
        rng = parts if sg.get("raw") else [r for a, b in parts for r in kept(a, b)]  # "raw": keep every frame (tiny value changes look idle)
        need0 = VOICE_LEAD + vdur + VOICE_TAIL - sum(b - a for a, b in rng) / sp
        if need0 > 0 and STILL:  # the hold freezes a frame: end the segment on a still one, not on a smeared moving cursor
            a, b = rng[-1]
            for i in range(int(b * STILL_FPS) - 1, max(int((b - 1.5) * STILL_FPS), int(a * STILL_FPS)), -1):
                if i + 1 < len(STILL) and STILL[i] <= 2 and STILL[i + 1] <= 2:
                    rng = rng[:-1] + [(a, (i + 0.5) / STILL_FPS)]
                    break
        length = sum(b - a for a, b in rng) / sp
        voice.append({"id": sg["id"], "t": out_t + VOICE_LEAD, "al": al, "text": sg["text"]})
        tl += [("play", a, b, sp) for a, b in rng]
        need = VOICE_LEAD + vdur + VOICE_TAIL - length
        if need > 0:
            tl.append(("hold", rng[-1][1] - 1 / fps, need, 1))
        out_t += length + max(0, need)
    return tl, voice, out_t


def to_out(tl, t):
    """recording time → output time (None if that moment was cut)"""
    o = 0.0
    for kind, a, b, sp in tl:
        if kind == "play":
            if a <= t < b:
                return o + (t - a) / sp
            o += (b - a) / sp
        else:
            o += b
    return None


def to_orig(tl, t):
    """output time → recording time (a hold maps to the frozen frame's time)"""
    o = 0.0
    for kind, a, b, sp in tl:
        length = (b - a) / sp if kind == "play" else b
        if o <= t < o + length:
            return a + (t - o) * sp if kind == "play" else a
        o += length
    return None


MANUAL = HERE / "taps_manual.json"  # checked by eye: [{"t": recording s, "x", "y", "what", "show"?}], any language
# "show": false = tap on empty space only to dismiss the keyboard: no marker (S40)
# "life": s = marker lifetime by hand, when the next screen slides in too softly to be detected (S41)


def with_life(tl, taps):
    """(orig t, x, y[, life]) → (out t, x, y, life): the marker lives LIFE s (or the given life), but ends
    SCREEN_KEEP s after the screen changes, so it never hangs over the next screen (S41)"""
    ana = json.load(open(HERE / "analysis.json"))
    mfps, motion = ana["fps"], ana["motion"]
    out = []
    for t, x, y, *own in taps:
        ot = to_out(tl, t)
        if ot is None:
            continue
        life = own[0] if own and own[0] else LIFE  # a slow slide-in is not seen as a screen change: set "life" by hand
        i0, i1 = int(t * mfps) + 1, int((t + LIFE) * mfps) + 1
        change = next((i for i in range(i0, min(i1, len(motion))) if motion[i] > SCREEN_CHANGE), None)
        if change is not None:
            end = to_out(tl, change / mfps + SCREEN_KEEP)
            back = change / mfps + SCREEN_KEEP
            while end is None and back > t:  # the new screen was cut away: the marker ends at the cut
                back -= 1 / 30
                end = to_out(tl, back)
            if end is not None:
                life = min(life, end - ot + LEAD)
        out.append((ot, x, y, life))
    return out


def out_taps(tl):
    """taps in output time: the hand-checked list when present, else the detector
    (a typing run on the keyboard is dropped, a quick repeat in one spot = one tap)"""
    if MANUAL.exists():
        return with_life(tl, [(m["t"], m["x"], m["y"], m.get("life")) for m in json.load(open(MANUAL)) if m.get("show", True)])
    ana = json.load(open(HERE / "analysis.json"))
    raw = ana["taps"]
    low = [tp for tp in raw if tp["y"] > KEYBOARD_Y]
    # key presses while typing are not taps worth showing (S39): drop keyboard-zone taps that come in a run
    typing = {id(a) for a in low for b in low if a is not b and abs(a["t"] - b["t"]) < TYPING_GAP}
    taps, prev = [], None
    for tp in raw:
        if id(tp) in typing:
            continue
        if to_out(tl, tp["t"]) is None:
            continue
        if prev and tp["t"] - prev["t"] < BURST_GAP and abs(tp["x"] - prev["x"]) + abs(tp["y"] - prev["y"]) < BURST_DIST:
            prev = tp
            continue
        prev = tp
        taps.append((tp["t"], tp["x"], tp["y"]))
    return with_life(tl, taps)


def ease_out(k):
    return 1 - (1 - k) ** 3


SS = 4  # draw each marker 4x larger and scale down: smooth edges, no pixel steps (S44)


def draw(layer, taps, t):
    for tt, x, y, life in taps:
        k = (t - tt + LEAD) / life
        if not 0 <= k <= 1:
            continue
        fade = 1 if k < 0.45 else 1 - (k - 0.45) / 0.55
        half = RING + 8
        patch = Image.new("RGBA", (2 * half * SS, 2 * half * SS), (0, 0, 0, 0))
        d = ImageDraw.Draw(patch)
        c = half * SS

        def circle(r, **kw):
            d.ellipse((c - r * SS, c - r * SS, c + r * SS, c + r * SS), **kw)

        r_ring = R + (RING - R) * ease_out(k)
        circle(r_ring, outline=(255, 255, 255, int(200 * (1 - k))), width=4 * SS)
        r = R * (0.85 + 0.15 * ease_out(min(1, k * 3)))
        circle(r + 4, fill=(*RIM, int(110 * fade)))
        circle(r, fill=(255, 255, 255, int(150 * fade)), outline=(*RIM, int(235 * fade)), width=3 * SS)
        patch = patch.resize((2 * half, 2 * half), Image.LANCZOS)
        layer.alpha_composite(patch, (int(x) - half, int(y) - half))
