import React from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider, SignIn, SignUp, SignedIn, SignedOut, UserButton, useAuth } from '@clerk/clerk-react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ConvexReactClient } from 'convex/react';
import App from './App.jsx';
import './index.css';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const convexUrl = import.meta.env.VITE_CONVEX_URL;

function AuthShell() {
  if (!publishableKey || !convexUrl) {
    return <App authConfigured={false} />;
  }

  const convex = new ConvexReactClient(convexUrl);
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <SignedOut>
          <main className="provider-auth-shell">
            <div className="provider-atmosphere" aria-hidden="true"><span className="auth-poster poster-one"></span><span className="auth-poster poster-two"></span><span className="auth-poster poster-three"></span><span className="auth-poster poster-four"></span><span className="auth-poster poster-five"></span><span className="auth-poster poster-six"></span><span className="auth-poster poster-seven"></span><span className="auth-poster poster-eight"></span><span className="auth-poster poster-nine"></span><span className="auth-poster poster-ten"></span><span className="provider-atmosphere-shade"></span></div>
            <div className="provider-auth-copy">
              <div className="hero-brand-lockup"><span className="hero-brand-mark">T</span><span className="hero-brand-name">TVNerd</span></div>
              <span className="auth-kicker">STREAM & TV HUB · YOUR DIGITAL NERD AT YOUR SERVICE</span>
              <h1>Sign in to your watch life.</h1>
              <p>Google login, account sessions, and cloud sync are handled securely by Clerk.</p>
              <div className="partner-strip" aria-label="TVNerd integrations"><span className="partner imdb-brand">IMDb</span><span className="partner psa-brand">PSA</span><span className="partner ext-brand">EXT</span><span className="partner google-brand"><b>G</b> Google</span><span className="partner youtube-brand"><b>▶</b> YouTube</span><span className="partner discord-brand"><b>◌</b> Discord</span></div>
            </div>
            {window.location.pathname === '/sign-up' ? <SignUp routing="path" path="/sign-up" signInUrl="/" fallbackRedirectUrl="/" /> : <SignIn routing="path" path="/" signUpUrl="/sign-up" fallbackRedirectUrl="/" signUpFallbackRedirectUrl="/" />}
          </main>
        </SignedOut>
        <SignedIn>
          <App authConfigured userButton={<UserButton />} />
        </SignedIn>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthShell />
  </React.StrictMode>
);
