import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ChatAssistant from './ChatAssistant';
import WhatsAppChat from './WhatsAppChat';

// Site-wide chat bubble: the AI assistant when the server has an Anthropic key
// (GET /api/chat reports it), otherwise the WhatsApp widget. Adding the key on
// the VPS switches every page to AI chat without a redeploy.
// Not on embeddable widgets (iframed on other sites) or the internal admin.
function isChatFree(pathname: string) {
  return pathname.startsWith('/admin') || pathname.startsWith('/[lang]/embed');
}

export default function SiteChat() {
  const { pathname } = useRouter();
  const [mode, setMode] = useState<'ai' | 'whatsapp' | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/chat')
      .then((res) => (res.ok ? res.json() : { enabled: false }))
      .then((data: { enabled?: boolean }) => {
        if (!cancelled) setMode(data.enabled ? 'ai' : 'whatsapp');
      })
      .catch(() => {
        if (!cancelled) setMode('whatsapp');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (isChatFree(pathname)) return null;
  if (mode === 'ai') return <ChatAssistant />;
  if (mode === 'whatsapp') return <WhatsAppChat />;
  return null;
}
