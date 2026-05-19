# BriefAI

**AI-powered daily newsletter subscription — 6 curated modules, every day.**

Stop drowning in AI news. BriefAI delivers 6 targeted newsletters in one daily digest:

- **World Model** — Latest papers on world models, video generation, multimodal AI
- **AI Safety** — Alignment research, governance, existential risk updates  
- **Hacker News** — Top stories from YC's tech news aggregator
- **Fund Tracker** — Daily AI/fund market moves and portfolio updates
- **Horoscope** — Weekly astrological patterns for the week ahead
- **Science** — Notable research across biology, physics, climate

## Live Demo

→ [https://brief-app-sand.vercel.app](https://brief-app-sand.vercel.app)

## Tech Stack

- **Next.js 16** (App Router, TypeScript, Tailwind CSS)
- **SQLite** (better-sqlite3, serverless-compatible)
- **Stripe** (checkout, webhooks — test mode)
- **Hermes Agent** (cron-powered content generation pipeline)

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Landing page
│   ├── subscribe/page.tsx # Email waitlist form
│   ├── dashboard/page.tsx # Subscriber archive
│   └── api/
│       ├── checkout/      # Stripe Checkout session
│       └── webhook/       # Stripe webhook handler
└── lib/
    └── db.ts              # SQLite schema (subscribers + briefs)
```

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build   # Production build
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
# Then fill in your Stripe keys and webhook secret
```

## Deployment

One-click deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/polyglotszeng/brief-ai)

## License

MIT
