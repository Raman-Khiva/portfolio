"use client"

import React from "react"
import { Briefcase, Calendar, CheckCircle2, GitCommit, Sparkles } from "lucide-react"

interface Milestone {
  period: string
  role: string
  company: string
  location: string
  description: string
  highlights: string[]
  tags: string[]
}

const MILESTONES: Milestone[] = [
  {
    period: "2024 — Present",
    role: "Full-Stack & AI Systems Engineer",
    company: "Oasian & Independent Systems",
    location: "Remote",
    description: "Built Oasian full-stack startup application alongside AI ML RAG retrieval engines, high-concurrency Node.js APIs, and Next.js 16 platforms.",
    highlights: [
      "Engineered Oasian startup full-stack web application with MERN stack & Next.js 16 App Router",
      "Developed Python FastAPI RAG retrieval pipeline with Redis caching & vector search",
      "Achieved sub-40ms response latency across production backend services",
    ],
    tags: ["MERN Stack", "PERN Stack", "Python Stack", "ML Stack", "FastAPI", "Redis", "PostgreSQL"],
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack Engineer & Product Builder",
    company: "Velor Engine & Weavit Canvas",
    location: "Remote",
    description: "Built Velor automated developer project management platform and Weavit real-time collaborative workspace canvas.",
    highlights: [
      "Engineered Velor project management engine with Prisma ORM and GitHub commit webhook synchronization",
      "Created Weavit real-time interactive workspace canvas using React, Redux Toolkit & WebSockets",
      "Shipped 10+ full-stack production projects over 2+ years of active development",
    ],
    tags: ["Next.js", "React", "Redux/RTK", "Prisma", "PostgreSQL", "Docker", "WebSockets"],
  },
  {
    period: "2+ Years Active",
    role: "Competitive Programmer & Algorithmic Specialist",
    company: "LeetCode & Global Platforms",
    location: "Global Platforms",
    description: "Architected high-performance systems in C++ with OOP principles and achieved a peak rating of 1912 on LeetCode.",
    highlights: [
      "Solved algorithmic challenges across Dynamic Programming, Graphs, Trees, and System Architecture",
      "Achieved peak Competitive Programming rating of 1912 on LeetCode (Raman_Khiva)",
      "Mastered C++, OOP principles, memory management, and time/space complexity optimization",
    ],
    tags: ["C++", "OOPs", "1912 Max CP Rating", "MERN Stack", "PERN Stack", "ML Stack", "Python Stack"],
  },
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto w-full">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
          <GitCommit className="w-4 h-4" /> Track Record & Milestones
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
          Experience & Key Achievements
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2">
          A proven history of building scalable web apps, AI pipelines, and solving complex algorithmic challenges.
        </p>
      </div>

      <div className="relative border-l border-[#22222d] ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
        {MILESTONES.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#121215] border-2 border-amber-400 group-hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20" />

            {/* Experience Card */}
            <div className="p-6 rounded-2xl bg-[#121215] border border-[#222228] hover:border-zinc-600 transition-all duration-300 card-glow space-y-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1c1c24] pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{item.role}</h3>
                  <div className="text-xs font-medium text-amber-400 mt-0.5">
                    {item.company} <span className="text-zinc-500">• {item.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-[#1a1a22] border border-[#2a2a38] px-3 py-1 rounded-full shrink-0 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {item.period}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tags.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#181820] border border-[#262632] text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
