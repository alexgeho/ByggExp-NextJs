import Anthropic from '@anthropic-ai/sdk';
import type { NextApiRequest, NextApiResponse } from 'next';

import { retrieveArticles } from '../../lib/blog-retrieval';
import { landingLanguageCodes, type LandingLanguageCode } from '../../locales/languages';

// AI assistant for site visitors. Answers grounded in ByggExp's own articles
// (retrieved server-side) and streams the reply back as plain text. The model
// is a single constant so it is trivial to swap. Sonnet 5: accurate grounded
// answers at ~2.5x lower cost than Opus (~$0.9 per 100 messages); Haiku was
// cheaper but invented details in testing (2026-09-23).
const CHAT_MODEL = 'claude-sonnet-5';
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

  return `Du är ByggExp:s hjälpsamma assistent för svenska byggföretag och hantverkare. Svara alltid på samma språk som användarens senaste meddelande (skriver hen på ryska, svara på ryska; på engelska, svara på engelska osv.). Går språket inte att avgöra, svara på ${langName}. Svenska facktermer (t.ex. ROT, personalliggare, ÄTA) får stå kvar med en kort förklaring.

OM BYGGEXP (använd för frågor om produkten, priser och demo):
- ByggExp är ett system för byggföretag: webbpanel för kontoret + mobilapp för personalen.
- Funktioner: tidrapportering/stämpelklocka med GPS (OB och övertid, export till lön och faktura), projekt med budget och uppföljning, uppgifter med påminnelser, planering (Gantt) och bemanning, frånvaro, byggdagbok, egenkontroller/KMA, verktygsregister med QR-koder, offerter, fakturor, utlägg, löneunderlag och lönsamhet per projekt.
- Priser (SEK/månad exkl. moms, obegränsat antal projekt), tre paket:
  - Faktura: 299 kr/mån fast pris, 1–2 användare. Ingår: offerter och fakturor, påminnelser för obetalda fakturor, löner/lönespecifikationer/AGI, projektekonomi (budget, kalkyl, lönsamhet), skanna kvitton och fakturor (bokförs automatiskt på projektet), inköpsfakturor och utlägg. Personlig ekonomi kommer snart.
  - Projekt: 690 kr/mån inkl. 10 användare, +69 kr per extra användare. Ingår: projekt, uppgifter och foton, stämpling med GPS, dagbok och egenkontroller, planering och bemanning, frånvaro, verktyg med QR-kod, mobilapp + adminpanel.
  - Komplett (mest valt): 990 kr/mån inkl. 10 användare, +119 kr per extra användare. Allt i Projekt + allt i Faktura.
  - Fler än 40 användare: anpassat pris, kontakta oss.
  - Tillägg Integrationer: 199 kr per företag och månad, kan läggas till i alla paket (SIE4-export till Fortnox, Visma och BL, inköpsfakturor direkt via e-post; anpassade integrationer mot tilläggsavgift).
  - Årsbetalning: 15 % rabatt jämfört med månadsbetalning. 2 veckor gratis provperiod med alla funktioner, ingen startavgift, ingen bindningstid. Medarbetare som bara använder mobilappen räknas bara när de har stämplat in de senaste 30 dagarna.
- Gratis demo på 15 minuter via video: boka på [kontaktsidan](/${lang}/contact). Kontakt: sales@byggexp.se, support@byggexp.se, telefon +46 70 757 75 75 (vardagar 08–17).
- Lova inget utöver listan ovan. Är du osäker på om en funktion finns, hänvisa till en demo.
- Räkna inte ut egna belopp (t.ex. årspris i kronor) – ange priserna och reglerna ovan och hänvisa till [prisavsnittet på startsidan](/${lang}#pricing), där priset räknas fram för valt antal användare.

Använd i övrigt innehållet i UTDRAGEN nedan (från ByggExp:s egna artiklar) för att svara. Reglerna:
- Svara kort, konkret och praktiskt. Hellre 2–5 meningar än en uppsats.
- Grunda svaret på utdragen och återge bara det som faktiskt står där – lägg inte till egna detaljer om regler, belopp eller vem som gör vad. Hittar du inte svaret där, säg det ärligt och föreslå att läsaren kontaktar en expert.
- När ett svar bygger på en artikel, länka till den med markdown, t.ex. [Läs mer](${'/sv/blog/...'}). Använd de exakta URL:erna från utdragen.
- Ge inte bindande juridisk eller skatterättslig rådgivning; hänvisa till att läsaren bör dubbelkolla mot gällande regler.
- Svara bara med det slutliga svaret till användaren, utan att beskriva din egen process.
- Skriv vanlig text: ingen fetstil, inga rubriker eller tabeller. Enda tillåtna markdown är länkar [text](url) och enkla listor med "- ".

UTDRAG:
${context}`;
}

export const config = { api: { responseLimit: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Lets the site widget pick AI chat vs. the WhatsApp fallback without
  // spending a model call: the AI bubble only shows once the key is live.
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', 'no-store');
    // A placeholder like "sk-ant-..." must not switch the site to a broken chat.
    const key = process.env.ANTHROPIC_API_KEY ?? '';
    res.status(200).json({ enabled: key.startsWith('sk-ant-') && key.length > 40 });
    return;
  }

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
