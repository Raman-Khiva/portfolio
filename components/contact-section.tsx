"use client"

import React, { useState } from "react"
import { Mail, Copy, Check, Calendar, Send, Sparkles, MessageSquare, Globe, Trophy } from "lucide-react"
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/icons"

interface ContactSectionProps {
  initialTopic?: string
}

export function ContactSection({ initialTopic = "" }: ContactSectionProps) {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "Full-Stack Web App (MERN / Next.js)",
    message: initialTopic ? `Hi Raman, I'm interested in: ${initialTopic}` : "",
  })

  const email = "ramandeep01167@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", scope: "Full-Stack Web App (MERN / Next.js)", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 max-w-5xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Column: Direct Info & Social Cards */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4" /> Let&apos;s Connect
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              Get in Touch with Raman Singh
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Whether you need a full-stack MERN/Next.js web application, an AI ML RAG pipeline, or algorithmic problem solving — feel free to reach out directly.
            </p>
          </div>

          {/* Email Quick Action Card */}
          <div className="p-5 rounded-2xl bg-[#121215] border border-[#222228] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 card-glow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1a1a22] border border-[#2a2a38] flex items-center justify-center text-amber-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-400 font-mono">Direct Email</div>
                <div className="text-xs sm:text-sm font-bold text-white font-mono break-all">{email}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
              {/* Copy Button */}
              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-xl bg-[#1a1a22] hover:bg-[#252532] border border-[#2a2a38] text-zinc-300 hover:text-white transition flex items-center gap-1.5 text-xs font-medium"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy
                  </>
                )}
              </button>

              {/* Redirect to Mail Client Button */}
              <a
                href={`mailto:${email}`}
                className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-semibold transition flex items-center gap-1.5 shadow-md shadow-amber-400/10"
                title="Open in Email App"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Portfolio Domain Card */}
          <div className="p-5 rounded-2xl bg-[#121215] border border-[#222228] flex items-center justify-between gap-4 card-glow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1a1a22] border border-[#2a2a38] flex items-center justify-center text-cyan-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-400 font-mono">Official Portfolio</div>
                <div className="text-sm font-bold text-white font-mono">ramansingh.me</div>
              </div>
            </div>
            <a
              href="https://ramansingh.me"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition shadow"
            >
              Visit
            </a>
          </div>

          {/* Social Profiles */}
          <div className="pt-2">
            <div className="text-xs text-zinc-500 font-mono mb-3">Connect & Follow Profiles</div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Raman-Khiva"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#121215] hover:bg-[#1a1a22] border border-[#222228] text-zinc-300 hover:text-white transition flex items-center gap-2 text-xs font-mono"
                title="GitHub (Raman Khiva)"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Raman Khiva</span>
              </a>

              <a
                href="https://leetcode.com/u/Raman_Khiva/"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#121215] hover:bg-[#1a1a22] border border-[#222228] text-zinc-300 hover:text-amber-400 transition flex items-center gap-2 text-xs font-mono"
                title="LeetCode (1912 Rating)"
              >
                <LeetCodeIcon className="w-4 h-4 text-amber-500" />
                <span>Raman_Khiva (1912 CP)</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ramandeep-singh-503077200/"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#121215] hover:bg-[#1a1a22] border border-[#222228] text-zinc-300 hover:text-cyan-400 transition flex items-center gap-2 text-xs font-mono"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-[#222228] card-glow">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> Send Message
            </h3>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-2 animate-in fade-in">
                <Check className="w-4 h-4 shrink-0" /> Your message has been sent! Raman will respond shortly.
              </div>
            )}

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-[#18181f] border border-[#262632] focus:border-amber-500/50 focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#18181f] border border-[#262632] focus:border-amber-500/50 focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Project Scope / Category</label>
              <select
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#18181f] border border-[#262632] focus:border-amber-500/50 focus:outline-none text-xs sm:text-sm text-white transition"
              >
                <option value="Full-Stack Web App (MERN / Next.js)">Full-Stack Web App (MERN / Next.js)</option>
                <option value="AI ML RAG Engine Development">AI ML RAG Engine Development</option>
                <option value="FastAPI / Node.js Backend Microservices">FastAPI / Node.js Backend Microservices</option>
                <option value="Competitive Programming & Algorithmic Design">Competitive Programming & Algorithmic Design</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Message & Project Goals</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project target, tech preferences, or scope..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#18181f] border border-[#262632] focus:border-amber-500/50 focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-white/5 active:scale-95"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
