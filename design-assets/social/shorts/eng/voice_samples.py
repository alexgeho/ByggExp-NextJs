"""Short English samples of several ElevenLabs voices, so the owner can pick one → samples/<name>.mp3"""
import json
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[3]
TEXT = ("Welcome to ByggExp. In this video we'll set up the app step by step. "
        "First, choose the project you'll be working on. Then tap Add hours, enter your working hours, "
        "and confirm with the check mark. That's it – your time is saved.")
VOICES = {
    "Aria_US_female": "9BWtsMINqrJLrRacOk9x",
    "River_US_neutral": "SAz9YHcvj6GT2YYXdXww",
    "Roger_US_male": "CwhRBWXzGAHq8TQ4Fs17",
    "Liam_US_male": "TX3LPaxmHKxFdv7VOQHJ",
    "Will_US_male": "bIHbv24MWmeRgasZH58o",
    "Bill_US_male": "pqHfZKP75CvOlQylNhV4",
    "Callum_UK_male": "N2lVS1w4EtoT3dr4eOWO",
    "Charlie_AU_male": "IKne3meq5aSn9XLyUdCD",
    "Rachel_US_female": "21m00Tcm4TlvDq8ikWAM",
    "Domi_US_female": "AZnzlk1XvdvUeBnXmlld",
    "Elli_US_female": "MF3mGyEYCl7XYWbV9V3O",
    "Grace_US_female": "oWAxZDx7w5VEj9dCyTzz",
    "Freya_US_female": "jsCqWAovK2LkecY7zXl4",
    "Serena_US_female": "pMsXgVXv3BLzUgSXRplE",
}
raw = (ROOT / ".env.admin").read_bytes()
text = raw.decode("utf-16") if raw[:2] in (b"\xff\xfe", b"\xfe\xff") else raw.decode("utf-8-sig")
KEY = next(l.split("=", 1)[1].strip().strip('"') for l in text.splitlines() if l.startswith("ELEVENLABS_API_KEY="))
out = HERE / "samples2"
out.mkdir(exist_ok=True)
for name, vid in VOICES.items():
    if (out / f"{name}.mp3").exists():
        continue
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{vid}",
        data=json.dumps({"text": TEXT, "model_id": "eleven_multilingual_v2"}).encode(),
        headers={"xi-api-key": KEY, "Content-Type": "application/json"})
    try:
        (out / f"{name}.mp3").write_bytes(urllib.request.urlopen(req).read())
        print(name, "ok")
    except Exception as e:
        print(name, "FAIL", e)
