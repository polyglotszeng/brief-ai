import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BriefAI — AI Daily Newsletter | World Model, AI Safety, HN & More",
  description: "Stop drowning in AI news. BriefAI delivers 6 curated AI newsletters daily: World Model research, AI Safety developments, Hacker News top stories, Fund tracking, Horoscope, and Science highlights. $9/mo.",
  keywords: "AI newsletter, daily AI brief, world model, AI safety, Hacker News, curated news, AI research summary",
  openGraph: {
    title: "BriefAI — AI Daily Newsletter",
    description: "6 curated AI newsletters daily. World Model · AI Safety · HN · Fund · Horoscope · Science. $9/mo.",
    url: "https://brief-app-sand.vercel.app",
    siteName: "BriefAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BriefAI — AI Daily Newsletter",
    description: "6 curated AI newsletters daily. $9/mo.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tight">
          <span className="text-indigo-400">Brief</span>
          <span className="text-white">AI</span>
        </div>
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="/dashboard" className="hover:text-white transition">Dashboard</a>
        </div>
        <Link href="/subscribe" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition">
          Start Free Trial
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-8 py-24 max-w-4xl mx-auto text-center">
        <div className="inline-block bg-indigo-950 border border-indigo-800 rounded-full px-4 py-1 text-sm text-indigo-300 mb-6">
          Now in Beta — 500 subscribers
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Your personalized<br />
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            AI daily brief
          </span>
          <br />
          every morning
        </h1>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          World model research, AI safety news, tech shifts, and market signals —
          curated for you, delivered at 8am. Built on Hermes × NotebookLM × Obsidian.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/subscribe" className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-xl font-semibold transition">
            Start 7-day free trial
          </Link>
          <a href="/sample" className="border border-slate-600 hover:border-slate-400 px-8 py-3 rounded-xl text-slate-300 transition">
            See sample brief
          </a>
        </div>
      </section>

      {/* Sample Preview */}
      <section className="px-8 py-16 max-w-3xl mx-auto">
        <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 text-left">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono text-slate-500">DELIVERED 2026-05-19 08:00</span>
            <span className="bg-green-900 text-green-300 text-xs px-2 py-0.5 rounded">Your brief today</span>
          </div>
          <div className="space-y-6">
            <div>
              <div className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">World Models</div>
              <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 text-sm leading-relaxed text-slate-300">
                <strong className="text-white">DeepMind's Gemini-2.0 World Model</strong> — new paper on autonomous drone navigation using learned world models. Key insight: 40% fewer training samples vs prior art. (<a href="#" className="text-indigo-400 hover:underline">arXiv</a>)
              </div>
            </div>
            <div>
              <div className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-2">AI Safety</div>
              <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 text-sm leading-relaxed text-slate-300">
                <strong className="text-white">Anthropic's Constitutional AI v2</strong> — updated framework with better harmlessness transfers. (<a href="#" className="text-red-400 hover:underline">Paper</a>)
              </div>
            </div>
            <div>
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">Tech Signals</div>
              <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 text-sm leading-relaxed text-slate-300">
                HN Top: <strong className="text-white">Elon Musk vs OpenAI</strong> — court dismissal signals stronger Big Tech AI enforcement. (<a href="#" className="text-amber-400 hover:underline">Full breakdown</a>)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What you get every morning</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "🌌", title: "World Model Tracker", desc: "arXiv world model papers, parsed and ranked by significance. Not just a list — annotated by AI.", color: "indigo" },
            { icon: "🛡️", title: "AI Safety Monitor", desc: "Alignment, governance, existential risk. The news that matters, filtered from the noise.", color: "red" },
            { icon: "🔥", title: "Tech Signals", desc: "Hacker News Top 5 + trend analysis. What matters in AI, crypto, and developer tools.", color: "amber" },
            { icon: "📊", title: "Fund Watch", desc: "AI-focused fund performance and sector rotation signals, weekly.", color: "green" },
            { icon: "📅", title: "Weekly Horoscope", desc: "Playful but surprisingly accurate life guidance. For the rationalist who secretly reads astrology.", color: "purple" },
            { icon: "🔬", title: "Science Digest", desc: "Weekly science highlights — physics, biotech, space. Written for curious adults.", color: "blue" },
          ].map(({ icon, title, desc, color }) => (
            <div key={title} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition">
              <div className="text-2xl mb-3">{icon}</div>
              <div className={`text-${color}-400 text-xs font-semibold uppercase tracking-wider mb-2`}>{title}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-8 py-20 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Simple pricing</h2>
        <p className="text-slate-400 text-center mb-12">Cancel anytime. No questions asked.</p>
        <div className="bg-slate-900/80 border-2 border-indigo-800 rounded-2xl p-10 text-center">
          <div className="text-slate-400 text-sm mb-2">7-day free trial, then</div>
          <div className="text-5xl font-bold mb-1">$9<span className="text-xl text-slate-400 font-normal">/mo</span></div>
          <div className="text-slate-500 text-sm mb-8">Billed monthly. $89/year if you prepay.</div>
          <ul className="text-sm text-slate-300 space-y-3 text-left max-w-xs mx-auto mb-8">
            {["Daily brief at 8am", "6 knowledge modules", "Email + Telegram delivery", "Archive + search", "Weekly deep-dive report"].map(f => (
              <li key={f} className="flex gap-2"><span className="text-green-400">✓</span>{f}</li>
            ))}
          </ul>
          <Link href="/subscribe" className="block bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-xl font-semibold transition">
            Start free trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 border-t border-slate-800 max-w-6xl mx-auto text-center text-slate-500 text-sm">
        © 2026 BriefAI. Built on Hermes × NotebookLM × Obsidian.
      </footer>
    </div>
  );
}
