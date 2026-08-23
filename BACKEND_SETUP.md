# TVNerd Backend Setup

TVNerd — Stream & TV Hub — Your Digital Nerd At Your Service is scaffolded for:

- Clerk account sessions and Google OAuth
- Convex realtime profile, library, friends, activity, and reminder data
- Google Calendar event integration

## 1. Install and initialize

From the project root:

```bash
npm install
npx convex dev
```

The Convex command creates or connects a Convex deployment and generates `convex/_generated/` files. Do not commit generated credentials.

## 2. Create the Clerk application

1. Open the Clerk dashboard: https://dashboard.clerk.com
2. Create an application.
3. Enable Google under User & Authentication -> Social connections.
4. Add your local development URL if Clerk requests it:
   - `http://localhost:5173`
5. In User & Authentication -> Username, make username optional or disable it if you do not want Clerk to ask for a username during first login.
6. Copy the Clerk publishable key.
6. Copy the Clerk Frontend API URL. It looks like:
   - `https://verb-noun-00.clerk.accounts.dev`

## 3. Configure Clerk redirect behavior

The app uses normal path routing and sends both sign-in and sign-up completion back to:

```text
http://localhost:5173/
```

Do not configure `#/sign-up` or `#/sign-up/continue` as a Clerk redirect URL. If you have custom redirect URLs in the Clerk dashboard, remove the hash-based versions.

## 4. Configure Convex authentication

In the Convex dashboard, add this environment variable:

```text
CLERK_JWT_ISSUER_DOMAIN=https://your-clerk-frontend-api-url
```

The value must match the Clerk issuer domain exactly. `convex/auth.config.ts` uses this value to validate Clerk JWTs.

Copy `.env.example` to `.env.local` and set:

```text
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_CONVEX_URL=https://your-deployment.convex.cloud
```

The Convex URL is printed by `npx convex dev` or available in the Convex dashboard.

## 5. YouTube trailer lookup

Trailer discovery runs through the Convex backend. The YouTube key is never placed in the browser bundle.

In the Convex dashboard or with the CLI, set:

```bash
npx convex env set YOUTUBE_API_KEY your_restricted_key
```

The key should be restricted to **YouTube Data API v3** in Google Cloud Console. The guide calls the protected `/youtube/trailer` Convex HTTP endpoint when a title detail modal is opened and falls back to a title-specific YouTube search if no embeddable result is available.

## 6. Google Calendar access

The current app already supports:

- Add the next release through Google Calendar's event composer
- Export the guide as an `.ics` file

For automatic Calendar API writes, create a Google Cloud OAuth client and request the Calendar scope:

```text
https://www.googleapis.com/auth/calendar.events
```

Do not put a Google client secret in browser code. Automatic token exchange must happen through a trusted backend function.

## 7. Start the app

Use two terminals:

```bash
npx convex dev
```

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## Current boundary

The Clerk login gate and Convex provider are wired in the Vite shell. The existing guide remains embedded during migration so existing local data and UI are preserved. The next implementation step is replacing the guide's local profile/library writes with Convex queries and mutations.
