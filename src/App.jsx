import { useEffect, useRef, useState } from 'react';
import { useAuth, useUser } from '@clerk/clerk-react';

function LegacyGuide({ userButton }) {
  const [src, setSrc] = useState('/legacy.html?embedded=1');
  const frameRef = useRef(null);
  const { getToken } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    const handleMessage = event => {
      if (event.data?.type === 'tvgeek-logout') setSrc('/legacy.html?embedded=1&session-ended=1');
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const sendGuideAuth = async () => {
    try {
      const token = await getToken({ template: 'convex' }).catch(() => getToken());
      frameRef.current?.contentWindow?.postMessage({
        type: 'tvgeek-auth',
        token,
        convexUrl: import.meta.env.VITE_CONVEX_URL,
        profile: user ? { id: user.id, displayName: user.fullName || user.username || user.primaryEmailAddress?.emailAddress?.split('@')[0], username: user.username ? `@${user.username}` : '', avatar: user.imageUrl || '' } : null,
      }, window.location.origin);
    } catch {
      frameRef.current?.contentWindow?.postMessage({ type: 'tvgeek-auth', token: null }, window.location.origin);
    }
  };

  return (
    <div className="guide-shell">
      <header className="provider-toolbar">
        <div className="provider-brand"><span className="provider-mark">T</span><span><strong>TVNerd</strong><small>Stream & TV Hub — Your Digital Nerd At Your Service</small></span></div>
        <div className="provider-account">{userButton}</div>
      </header>
      <iframe ref={frameRef} title="TVNerd guide" src={src} className="guide-frame" onLoad={sendGuideAuth} />
    </div>
  );
}

export default function App({ authConfigured, userButton }) {
  if (!authConfigured) {
    return (
      <main className="provider-setup-shell">
        <span className="auth-kicker">TVNerd BACKEND SETUP</span>
        <h1>Add your Clerk publishable key to activate login.</h1>
        <p>Copy <code>VITE_CLERK_PUBLISHABLE_KEY</code> into <code>.env.local</code>, then restart Vite. Google login is enabled from the Clerk Dashboard.</p>
        <a href="https://dashboard.clerk.com" target="_blank" rel="noreferrer">Open Clerk Dashboard</a>
      </main>
    );
  }

  return <LegacyGuide userButton={userButton} />;
}
