'use client'

import React, { useState } from 'react'
import { ChevronRight, Lock, Shield, Zap, ArrowRight } from 'lucide-react'

export default function AmariAI() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(148, 163, 184, 0.05) 25%, rgba(148, 163, 184, 0.05) 26%, transparent 27%, transparent 74%, rgba(148, 163, 184, 0.05) 75%, rgba(148, 163, 184, 0.05) 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, rgba(148, 163, 184, 0.05) 25%, rgba(148, 163, 184, 0.05) 26%, transparent 27%, transparent 74%, rgba(148, 163, 184, 0.05) 75%, rgba(148, 163, 184, 0.05) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-12 py-6">
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-white">Amari</span>
          <span className="text-blue-400"> AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#patents" className="hover:text-white transition">Patents</a>
          <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
          <a href="#enterprise" className="hover:text-white transition">For Enterprise</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-20">
        <div className="animate-fade-in space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Data Sovereignty,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                By Design
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
              Amari AI enables secure, auditable, user-controlled data sharing. 
              Privacy-first infrastructure for enterprises that respect human dignity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 w-fit"
            >
              Explore <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 border border-slate-600 hover:border-slate-400 rounded-lg font-semibold transition-all duration-300">
              View Patents
            </button>
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section id="patents" className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold mb-16">Patented Technology</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 p-6 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
            <div className="text-blue-400 font-mono text-sm">USP 11,042,641</div>
            <h3 className="text-xl font-semibold">Deployment & Communications Gateway</h3>
            <p className="text-slate-300">Trusted Execution Environment infrastructure enabling secure, auditable data flow between individuals and enterprises.</p>
          </div>
          <div className="space-y-4 p-6 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
            <div className="text-blue-400 font-mono text-sm">USP 11,151,254</div>
            <h3 className="text-xl font-semibold">Secure Identity Gateway</h3>
            <p className="text-slate-300">End-to-end encryption and granular consent controls for personal data. The infrastructure layer for privacy-first AI.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold mb-16">How Amari Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30">
              <Lock size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold">User-Controlled Access</h3>
            <p className="text-slate-400">Individuals grant, revoke, or time-limit data access in real time. Your data, your rules.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
              <Shield size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold">Encrypted & Auditable</h3>
            <p className="text-slate-400">End-to-end encryption with complete audit logs. No hidden transfers. Transparent by default.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <Zap size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold">Compliance Ready</h3>
            <p className="text-slate-400">Built for GDPR, CCPA, CPA, and emerging privacy regulations. Compliance by design.</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold mb-16">Who Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Financial Services', desc: 'Secure PII handling, compliance-first AI' },
            { label: 'CPG & Retail', desc: 'Privacy-preserved customer analytics' },
            { label: 'Real Estate', desc: 'Privacy Act compliance for brokers' },
            { label: 'AdTech', desc: 'Cookieless targeting with consent' },
          ].map((use, i) => (
            <div key={i} className="p-6 rounded-lg border border-slate-800 hover:border-slate-700 transition-all hover:bg-slate-900/50">
              <h4 className="font-semibold text-lg mb-2">{use.label}</h4>
              <p className="text-slate-400 text-sm">{use.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Section */}
      <section id="enterprise" className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 border-t border-slate-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Built for Enterprise Scale</h2>
            <p className="text-lg text-slate-300">
              Amari AI gives enterprises a compliant, privacy-first infrastructure for AI-driven insights without regulatory risk, brand damage, or loss of customer trust.
            </p>
            <ul className="space-y-4">
              {['Hyperledger-based TEE architecture', 'End-to-end encrypted data flows', 'Real-time audit logs', 'Granular consent management'].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-300">
                  <ChevronRight size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-10 blur-3xl" />
            <div className="relative p-8 rounded-lg border border-slate-800 bg-slate-900/50">
              <div className="space-y-4 font-mono text-sm text-slate-300">
                <div><span className="text-emerald-400">✓</span> Data Sovereignty</div>
                <div><span className="text-emerald-400">✓</span> Privacy by Design</div>
                <div><span className="text-emerald-400">✓</span> Regulatory Compliance</div>
                <div><span className="text-emerald-400">✓</span> AI-Ready Infrastructure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 border-t border-slate-800">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Ready to Explore?</h2>
            <p className="text-lg text-slate-300">
              Whether you're an investor, enterprise, or strategic partner, let's talk about the future of data sovereignty.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-4 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              {submitted ? '✓ Sent' : 'Get in Touch'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 mt-20 px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <div>© 2026 Amari AI. All rights reserved.</div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Legal</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
