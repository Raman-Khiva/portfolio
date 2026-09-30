"use client"

import React, { useState, useEffect } from "react"
import { Code2, Sparkles, Menu, X, ArrowUpRight, Mail } from "lucide-react"

interface HeaderNavProps {
  onPlanProjectClick?: () => void
}

export function HeaderNav({ onPlanProjectClick }: HeaderNavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-2xl transition-all duration-300 border ${
          scrolled
            ? "bg-[#0d0d11]/90 backdrop-blur-md border-[#22222c] shadow-2xl py-2.5 px-5"
            : "bg-[#121216]/60 backdrop-blur-sm border-[#1e1e26] py-3 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-[#1a1a22] border border-[#2a2a38] flex items-center justify-center text-zinc-100 group-hover:border-neutral-500 transition-all badge-glow">
              <Code2 className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                Raman Singh
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[11px] font-mono text-zinc-400">Full-Stack & AI Engineer</span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
            <a href="#overview" className="hover:text-white transition">
              Overview
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition">
              Tech Stack
            </a>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-xs md:text-sm font-semibold text-black flex items-center gap-2 transition active:scale-95 shadow-md"
            >
              <Mail className="w-3.5 h-3.5 text-black" />
              <span>Contact Now</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[#1a1a22] border border-[#2a2a38] text-zinc-300"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-[#22222d] mt-3 flex flex-col gap-3 text-sm font-medium text-zinc-300">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1a1a22] hover:text-white transition"
            >
              Overview
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1a1a22] hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1a1a22] hover:text-white transition"
            >
              Tech Stack
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1a1a22] hover:text-white transition"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1a1a22] hover:text-white transition"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
