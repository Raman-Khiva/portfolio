"use client"

import React, { useState } from "react"
import { Mail, Copy, Check, Calendar, Send, Sparkles, MessageSquare } from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons"

interface ContactSectionProps {
  initialTopic?: string
}

export function ContactSection({ initialTopic = "" }: ContactSectionProps) {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "Full-Stack SaaS",
    message: initialTopic ? `Hi Alex, I'm interested in: ${initialTopic}` : "",
  })

  const email = "alex.chen@example.com"

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
      setFormData({ name: "", email: "", scope: "Full-Stack SaaS", message: "" })
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
              Start a Conversation or Plan a Project
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Whether you need an AI agent implementation, full-stack web application, or cloud architecture consultation — let&apos;s discuss how to bring your vision to life.
            </p>
          </div>

          {/* Email Quick Copy Card */}
          <div className="p-5 rounded-2xl bg-[#121215] border border-[#222228] flex items-center justify-between gap-4 card-glow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1a1a22] border border-[#2a2a38] flex items-center justify-center text-amber-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-400 font-mono">Direct Email</div>
                <div className="text-sm font-bold text-white font-mono">{email}</div>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2.5 rounded-xl bg-[#1a1a22] hover:bg-[#252532] border border-[#2a2a38] text-zinc-300 hover:text-white transition flex items-center gap-1.5 text-xs font-medium"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy
                </>
              )}
            </button>
          </div>

          {/* Booking Calendar Card */}
          <div className="p-5 rounded-2xl bg-[#121215] border border-[#222228] flex items-center justify-between gap-4 card-glow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1a1a22] border border-[#2a2a38] flex items-center justify-center text-cyan-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-400 font-mono">30-Min Architecture Call</div>
                <div className="text-sm font-bold text-white">Book a Technical Intro</div>
              </div>
            </div>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition shadow"
            >
              Schedule
            </a>
          </div>

          {/* Social Profiles */}
          <div className="pt-2">
            <div className="text-xs text-zinc-500 font-mono mb-3">Connect on Social</div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#121215] hover:bg-[#1a1a22] border border-[#222228] text-zinc-400 hover:text-white transition"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#121215] hover:bg-[#1a1a22] border border-[#222228] text-zinc-400 hover:text-white transition"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#121215] hover:bg-[#1a1a22] border border-[#222228] text-zinc-400 hover:text-white transition"
                title="Twitter/X"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-[#222228] card-glow">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> Send Inquiry
            </h3>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-2 animate-in fade-in">
                <Check className="w-4 h-4 shrink-0" /> Your message has been sent! I will respond within 24 hours.
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
                className="w-full px-4 py-2.5 rounded-xl bg-[#18181f] border border-[#262632] focus:border-zinc-500 focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-500 transition"
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
                className="w-full px-4 py-2.5 rounded-xl bg-[#18181f] border border-[#262632] focus:border-zinc-500 focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Project Scope / Category</label>
              <select
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#18181f] border border-[#262632] focus:border-zinc-500 focus:outline-none text-xs sm:text-sm text-white transition"
              >
                <option value="AI / LLM Agent Implementation">AI / LLM Agent Implementation</option>
                <option value="Full-Stack SaaS Development">Full-Stack SaaS Development</option>
                <option value="High-Throughput API Gateway">High-Throughput API Gateway</option>
                <option value="Performance Audit & Consulting">Performance Audit & Consulting</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1">Message & Target Goals</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project target timeline, tech preferences, or scope..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#18181f] border border-[#262632] focus:border-zinc-500 focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-500 transition"
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
