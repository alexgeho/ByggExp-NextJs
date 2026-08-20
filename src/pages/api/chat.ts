import Anthropic from '@anthropic-ai/sdk';
import type { NextApiRequest, NextApiResponse } from 'next';

import { retrieveArticles } from '../../lib/blog-retrieval';
import { landingLanguageCodes, type LandingLanguageCode } from '../../locales/languages';

// AI assistant for site visitors. Answers grounded in ByggExp's own articles
// (retrieved server-side) and streams the reply back as plain text. The model
// is a single constant so it is trivial to swap; claude-opus-4-8 is the default
// (highest quality) — switch to claude-haiku-4-5 for ~5x lower cost per token.
const CHAT_MODEL = 'claude-opus-4-8';
const MAX_HISTORY = 8; // last N turns kept for context

type ChatMessage = { role: 'user' | 'assistant'; content: string };

// Small in-memory rate limiter (per IP) so a cheap public endpoint can't be
// hammered into a large bill. Resets on cold start — fine for a first version.
const RATE_LIMIT = 20; // requests
const RATE_WINDOW_MS = 60_000; // per minute
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

function buildSystemPrompt(
  articles: { title: string; url: string; text: string }[],
  lang: string,
): string {
  const langName =
    { sv: 'svenska', nb: 'norsk', en: 'English', ru: 'русском' }[lang] || 'svenska';

  const context =
    articles.length > 0
      ? articles
          .map((a, i) => `[${i + 1}] ${a.title} (${a.url})\n${a.text}`)
          .join('\n\n')
      : '(inga relevanta artiklar hittades)';

  return `Du är ByggExp:s hjälpsamma assistent för svenska byggföretag och hantverkare. Du svarar på ${langName}.

Använd i första hand innehållet i UTDRAGEN nedan (från ByggExp:s egna artiklar) för att svara. Reglerna:
- Svara kort, konkret och praktiskt. Hellre 2–5 meningar än en uppsats.
- Grunda svaret på utdragen. Hittar du inte svaret där, säg det ärligt och föreslå att läsaren kontaktar en expert – hitta inte på siffror, lagrum eller regler.
- När ett svar bygger på en artikel, länka till den med markdown, t.ex. [Läs mer](${'/sv/blog/...'}). Använd de exakta URL:erna från utdragen.
- Ge inte bindande juridisk eller skatterättslig rådgivning; hänvisa till att läsaren bör dubbelkolla mot gällande regler.
- Svara bara med det slutliga svaret till användaren, utan att beskriva din egen process.

UTDRAG:
${context}`;
}

export const config = { api: { responseLimit: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    res.status(503).json({ error: 'AI assistant is not configured.' });
    return;
  }

  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    'unknown';
  if (rateLimited(ip)) {
    res.status(429).json({ error: 'För många frågor just nu. Försök igen om en stund.' });
    return;
  }

  const body = req.body as { messages?: ChatMessage[]; lang?: string };
  const rawMessages = Array.isArray(body?.messages) ? body.messages : [];
  const lang = (landingLanguageCodes.includes(body?.lang as LandingLanguageCode)
    ? body?.lang
    : 'sv') as LandingLanguageCode;

  const messages = rawMessages
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }))
    .slice(-MAX_HISTORY);

  const lastUser = [...messages].reverse().find((m) => m.role === 'user');
  if (!lastUser) {
    res.status(400).json({ error: 'No user message.' });
    return;
  }

  const articles = await retrieveArticles(lang, lastUser.content, 4);
  const system = buildSystemPrompt(articles, lang);

  const client = new Anthropic();

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');

  try {
    const stream = client.messages.stream({
      model: CHAT_MODEL,
      max_tokens: 1024,
      thinking: { type: 'disabled' },
      system,
      messages,
    });

    stream.on('text', (delta) => {
      res.write(delta);
    });

    await stream.finalMessage();
    res.end();
  } catch (err) {
    // If the stream hasn't written yet we can still send a clean error.
    if (!res.headersSent || !res.writableEnded) {
      try {
        res.write('\n\n[Tyvärr gick något fel. Försök igen om en stund.]');
      } catch {
        /* ignore */
      }
    }
    res.end();
  }
}
