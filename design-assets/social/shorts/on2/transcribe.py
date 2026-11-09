"""Transcribe the author's spoken notes in a screen recording (local faster-whisper) → transcript.json"""
import json, subprocess, sys

import imageio_ffmpeg
import numpy as np
from faster_whisper import WhisperModel
m = WhisperModel("small", device="cpu", compute_type="int8")
# decode with our ffmpeg: the installed PyAV is too old for faster-whisper
pcm = subprocess.run([imageio_ffmpeg.get_ffmpeg_exe(), "-loglevel", "error", "-i", sys.argv[1], "-ac", "1", "-ar", "16000", "-f", "s16le", "-"], capture_output=True, check=True).stdout
audio = np.frombuffer(pcm, np.int16).astype(np.float32) / 32768
segs, info = m.transcribe(audio, vad_filter=True)
out = [{"t0": round(s.start, 2), "t1": round(s.end, 2), "text": s.text.strip()} for s in segs]
json.dump(out, open("transcript.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(info.language)
for s in out: print(f'{s["t0"]:7.2f}-{s["t1"]:7.2f} {s["text"]}')
