"""Voice-over for each line of script_<lang>.json: ElevenLabs Malin, /with-timestamps → voice_<lang>/<id>.mp3 + .json.
Key: ELEVENLABS_API_KEY in the environment or in .env.admin at the repo root (not in git).
Run: python gen_voice.py sv [id ...]   (no ids = every line that has no mp3 yet)"""
import base64
import json
import os
import sys
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[3]
VOICE, MODEL = "21m00Tcm4TlvDq8ikWAM", "eleven_multilingual_v2"  # Rachel (owner chose 2026-10-30; Malin and Matilda rejected)
LANG, ONLY = sys.argv[1], set(sys.argv[2:])


def api_key():
    if os.environ.get("ELEVENLABS_API_KEY"):
        return os.environ["ELEVENLABS_API_KEY"]
    env = ROOT / ".env.admin"
    if env.exists():
        raw = env.read_bytes()  # Notepad/PowerShell on Windows may save UTF-16 or with a BOM
        text = raw.decode("utf-16") if raw[:2] in (b"\xff\xfe", b"\xfe\xff") else raw.decode("utf-8-sig")
        for line in text.splitlines():
            if line.startswith("ELEVENLABS_API_KEY="):
                return line.split("=", 1)[1].strip().strip('"')
    sys.exit("ELEVENLABS_API_KEY not found (env or .env.admin)")


KEY = api_key()
out = HERE / f"voice_{LANG}"
out.mkdir(exist_ok=True)
for sg in json.load(open(HERE / f"script_{LANG}.json", encoding="utf-8")):
    mp3 = out / f"{sg['id']}.mp3"
    if (ONLY and sg["id"] not in ONLY) or (not ONLY and mp3.exists()):
        continue
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE}/with-timestamps",
        data=json.dumps({"text": sg["text"], "model_id": MODEL}).encode(),
        headers={"xi-api-key": KEY, "Content-Type": "application/json"})
    r = json.load(urllib.request.urlopen(req))
    mp3.write_bytes(base64.b64decode(r["audio_base64"]))
    json.dump(r["alignment"], open(out / f"{sg['id']}.json", "w"))
    print(sg["id"], f"{r['alignment']['character_end_times_seconds'][-1]:.1f}s")
