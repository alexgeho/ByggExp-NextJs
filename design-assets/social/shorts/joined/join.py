"""Join part 1 (a2) and part 2 (a3) rendered with NO_MUSIC=1 into one video, then lay ONE music bed over the whole
(S49 recipe: 0.025, ducked under the voice, 1 s fade-in, 3 s fade-out) so it does not restart at the joint."""
import subprocess, sys
from pathlib import Path
import imageio_ffmpeg
FF = imageio_ffmpeg.get_ffmpeg_exe()
HERE = Path(__file__).resolve().parent
P1, P2, OUT = HERE.parent / "a2" / "part1.mp4", HERE.parent / "a3" / "part2.mp4", HERE / "admin-en.mp4"
MUSIC, VOL = HERE.parent / "a2" / "music.mp3", 0.025
dur = lambda p: float(subprocess.run([FF, "-i", str(p)], capture_output=True, text=True).stderr.split("Duration: ")[1].split(",")[0].split(":")[-1]) + \
    60 * int(subprocess.run([FF, "-i", str(p)], capture_output=True, text=True).stderr.split("Duration: ")[1].split(":")[1])
XF = 0.4  # the parts are separate recordings: the cursor sits elsewhere — a short dissolve instead of a jump
d1 = dur(P1)
total = d1 + dur(P2) - XF
subprocess.run([FF, "-y", "-loglevel", "error", "-i", str(P1), "-i", str(P2), "-stream_loop", "-1", "-i", str(MUSIC), "-filter_complex",
                f"[0:v][1:v]xfade=transition=fade:duration={XF}:offset={d1 - XF:.3f}[v];[0:a][1:a]acrossfade=d={XF}[voice];"
                f"[2:a]atrim=0:{total:.2f},volume={VOL},afade=t=in:d=1,afade=t=out:st={total - 3:.2f}:d=3[m];"
                "[voice]asplit[vo][key];[m][key]sidechaincompress=threshold=0.02:ratio=4:attack=80:release=600[duck];"
                "[vo][duck]amix=inputs=2:normalize=0[a]",
                "-map", "[v]", "-map", "[a]", "-c:v", "libx264", "-crf", "17", "-preset", "medium", "-pix_fmt", "yuv420p",
                "-c:a", "aac", "-b:a", "192k", "-ac", "2", str(OUT)], check=True)
print(OUT, f"{total:.1f}s")
