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

  // Phone: the round button sat over the right edge of tool fields/results
  // (e.g. "PDF", "750,00 kr"). While a free tool is on screen it steps aside;
  // it is back as soon as the visitor scrolls past the tool.
  const [toolInView, setToolInView] = useState(false);
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const vh = window.innerHeight;
      const inView = Array.from(document.querySelectorAll('.lm-tool')).some((el) => {
        const r = el.getBoundingClientRect();
        return r.bottom > 80 && r.top < vh - 80;
      });
      setToolInView(inView);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  if (isChatFree(pathname)) return null;
  const chat = mode === 'ai' ? <ChatAssistant /> : mode === 'whatsapp' ? <WhatsAppChat /> : null;
  if (!chat) return null;
  return <div className={`site-chat${toolInView ? ' site-chat--tool' : ''}`}>{chat}</div>;
}
