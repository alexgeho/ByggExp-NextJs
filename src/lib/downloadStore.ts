// Server-side store for the download counter (see downloadTracking.ts).
// Append-only JSONL: one small line per download, safe with several PM2
// workers appending at once. Lives in the deploy's shared/ dir so it survives
// releases (APP_DIR/releases/<ts> → APP_DIR/shared); locally falls back to .data/.
import fs from 'fs';
import path from 'path';

export type DownloadEvent = { t: string; path: string; format: string; prior: string };

function dataDir(): string {
  if (process.env.DOWNLOAD_STATS_DIR) return process.env.DOWNLOAD_STATS_DIR;
  const shared = path.resolve(process.cwd(), '../../shared');
  if (fs.existsSync(shared)) return shared;
  return path.join(process.cwd(), '.data');
}

export const statsFile = () => path.join(dataDir(), 'downloads.jsonl');

export function appendDownload(e: DownloadEvent) {
  const file = statsFile();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.appendFileSync(file, JSON.stringify(e) + '\n');
}

export function readDownloads(): DownloadEvent[] {
  try {
    return fs
      .readFileSync(statsFile(), 'utf8')
      .split('\n')
      .filter(Boolean)
      .map((l) => {
        try {
          return JSON.parse(l) as DownloadEvent;
        } catch {
          return null;
        }
      })
      .filter((e): e is DownloadEvent => !!e);
  } catch {
    return [];
  }
}
