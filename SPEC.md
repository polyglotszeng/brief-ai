# BriefAI — Product Spec

## Overview
**BriefAI** is a personalized AI daily brief subscription product.
$9/month or $89/year. Delivered every morning at 8am via email + Telegram.

## Stack
- **Frontend**: Next.js 16 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Stripe Checkout, SQLite (better-sqlite3)
- **Delivery**: Hermes cron jobs → content generation → email/Telegram webhook

## Pages
- `/` — Landing page: hero, sample brief preview, features, pricing
- `/subscribe` — Email → plan selection → Stripe Checkout
- `/dashboard` — Subscriber archive (stub, real auth after Stripe)
- `/api/checkout` — Creates Stripe Checkout session

## Core Value (6 modules)
1. **World Model Tracker** — arXiv world model papers, annotated
2. **AI Safety Monitor** — alignment, governance, existential risk news
3. **Tech Signals** — Hacker News Top 5 + trend analysis
4. **Fund Watch** — AI fund performance, weekly
5. **Weekly Horoscope** — lighthearted life guidance
6. **Science Digest** — physics, biotech, space highlights

## Pricing
- Monthly: $9/mo (7-day free trial)
- Yearly: $89/yr (~$7.4/mo, 17% off)

## Business Model
- Target: 111K ARR → 1M users at $9/month? No.
- Realistic: 1,000 subscribers × $9/mo = $9K/mo = $108K/yr
- 1M ARR requires 9,259 subscribers at $9/mo
- Key levers: content quality → retention, referral program, annual plan conversion

## Next Steps (MVP)
1. Set up Stripe account + product/price IDs
2. Deploy to Vercel
3. Wire Hermes → email delivery webhook
4. Add Telegram bot for instant delivery
5. Create sample page (/sample) with realistic content

## Project Path
`/Users/patrick/brief-app/`
