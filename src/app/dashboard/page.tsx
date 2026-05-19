"use client";
import { useState } from "react";

export default function Dashboard() {
  const [email, setEmail] = useState("");

  const briefs = [
    {
      date: "2026-05-19",
      sections: [
        { label: "World Models", color: "indigo", content: "DeepMind's Gemini-2.0 World Model — new paper on autonomous drone navigation using learned world models. Key insight: 40% fewer training samples vs prior art." },
        { label: "AI Safety", color: "red", content: "Anthropic's Constitutional AI v2 — updated framework with better harmlessness transfers across RLHF iterations." },
        { label: "Tech Signals", color: "amber", content: "HN Top: Elon Musk vs OpenAI — court dismissal signals stronger Big Tech AI enforcement. 829 points." },
      ],
    },
    {
      date: "2026-05-18",
      sections: [
        { label: "World Models", color: "indigo", content: "Google JAX + Pathways: new 100B world model trained on 32 TPU pods. 3x throughput vs prior architecture." },
        { label: "AI Safety", color: "red", content: "MIRIX's new interpretability paper: superposition hypothesis confirmed in transformer MLP layers." },
        { label: "Tech Signals", color: "amber", content: "OpenAI GPT-5 leaked benchmarks: 94.7% on MMLU, new reasoning benchmark exceeds human expert average." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between px-8 py-5 max-w-4xl mx-auto border-b border-slate-800">
        <div className="text-xl font-bold tracking-tight">
          <span className="text-indigo-400">Brief</span><span className="text-white">AI</span>
        </div>
        <div className="text-sm text-slate-400">Dashboard</div>
      </nav>

      <main className="max-w-3xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-2">Your Daily Briefs</h1>
        <p className="text-slate-400 mb-10">7-day free trial · $9/month</p>

        <div className="space-y-8">
          {briefs.map((brief) => (
            <div key={brief.date} className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 flex items-center gap-3">
                <span className="text-sm font-mono text-slate-500">{brief.date}</span>
                <span className="bg-green-900 text-green-300 text-xs px-2 py-0.5 rounded">Delivered 08:00 AM</span>
              </div>
              <div className="p-6 space-y-4">
                {brief.sections.map(({ label, color, content }) => (
                  <div key={label}>
                    <div className={`text-${color}-400 text-xs font-semibold uppercase tracking-wider mb-2`}>{label}</div>
                    <div className="text-slate-300 text-sm leading-relaxed">{content}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-950/40 border border-indigo-900 rounded-xl p-6 text-center">
          <div className="text-indigo-300 font-semibold mb-2">Unlock full archive + search</div>
          <div className="text-slate-400 text-sm mb-4">Subscribe to access all historical briefs and search past content</div>
          <a href="/subscribe" className="inline-block bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 rounded-lg font-medium transition text-sm">
            Subscribe — $9/month
          </a>
        </div>
      </main>
    </div>
  );
}
