"use client";
import { useState } from "react";
import Link from "next/link";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // 保存到 localStorage 作临时订阅列表
    const list = JSON.parse(localStorage.getItem("brief_subscribers") || "[]");
    if (!list.includes(email)) list.push(email);
    localStorage.setItem("brief_subscribers", JSON.stringify(list));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-indigo-400">Brief</span><span className="text-white">AI</span>
          </Link>
          <p className="text-slate-400 text-sm mt-2">AI 每日简报，认知领先一步</p>
        </div>

        <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-8">
          {submitted ? (
            <div className="text-center space-y-4 py-4">
              <div className="text-4xl">✉️</div>
              <h2 className="text-xl font-semibold">订阅意向已收到！</h2>
              <p className="text-slate-400 text-sm">
                我们会尽快联系你开通。<br />
                也可以直接联系我们：
              </p>
              <div className="space-y-2 pt-2">
                <a href="https://t.me/patricklzeng" target="_blank" rel="noopener"
                  className="flex items-center justify-center gap-2 w-full border border-indigo-600 hover:border-indigo-400 rounded-xl p-3 text-indigo-300 transition">
                  <span>Telegram</span>
                </a>
                <a href="mailto:brief@ briefai.com" 
                  className="flex items-center justify-center gap-2 w-full border border-slate-600 hover:border-slate-400 rounded-xl p-3 text-slate-300 transition">
                  <span>Email</span>
                </a>
              </div>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-slate-400 mb-1 block">订阅邮箱</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg font-semibold transition disabled:opacity-50"
                >
                  {loading ? "提交中..." : "预约订阅 →"}
                </button>
              </form>

              <div className="space-y-3 mt-6 pt-6 border-t border-slate-700">
                <div className="text-center text-slate-400 text-sm mb-3">订阅方案</div>
                <div className="border border-slate-600 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">月度订阅</div>
                      <div className="text-slate-400 text-sm">$9/月</div>
                    </div>
                    <div className="text-indigo-400 text-sm">每月 $9</div>
                  </div>
                </div>
                <div className="border border-indigo-800 rounded-xl p-4 bg-indigo-950/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">年度订阅 <span className="text-xs bg-amber-600 text-white px-1.5 py-0.5 rounded ml-1">省 17%</span></div>
                      <div className="text-slate-400 text-sm">$89/年（约 $7.4/月）</div>
                    </div>
                    <div className="text-indigo-400 text-sm">每年 $89</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="text-center text-slate-600 text-xs mt-6 space-y-1">
          <p>订阅包含：World Model · AI Safety · Hacker News · 基金追踪 · 星座 · Science</p>
          <p>联系开通 · 支付宝/微信支付</p>
        </div>
      </div>
    </div>
  );
}
