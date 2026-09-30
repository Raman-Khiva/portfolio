"use client"

import React from "react"
import { Code2, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-[#1c1c24] bg-[#09090c] py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left identity & availability indicator */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#141419] border border-[#22222d] flex items-center justify-center text-amber-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white tracking-tight flex items-center gap-2">
              Ramandeep Singh (Raman Singh)
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available for Opportunities
              </span>
            </div>
            <div className="text-[11px] font-mono text-zinc-500 mt-0.5">
              Full-Stack & AI Engineer • ramansingh.me
            </div>
          </div>
        </div>

        {/* Right copyright & Back to top button */}
        <div className="flex items-center gap-6">
          <span className="text-xs text-zinc-400 font-mono">
            © {new Date().getFullYear()} Ramandeep Singh. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#141419] hover:bg-[#1f1f28] border border-[#22222d] text-zinc-400 hover:text-white transition"
            title="Back to Top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  )
}
