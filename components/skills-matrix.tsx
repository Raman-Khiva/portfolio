"use client"

import React from "react"
import { Code2, Server, Cpu, Cloud, CheckCircle2, Trophy } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ElementType
  color: string
  skills: { name: string; description: string }[]
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Full-Stack & Frontend Development",
    icon: Code2,
    color: "text-amber-400",
    skills: [
      { name: "Responsive Design & Modern UI", description: "Pixel-perfect responsive layouts, dark glassmorphic themes, mobile optimization & micro-animations" },
      { name: "Fully Functional Web Apps", description: "End-to-end MERN/PERN platforms, Next.js 16 App Router, dynamic routing & client-side state handling" },
      { name: "State Management (Redux / RTK)", description: "Centralized store architecture, Redux Toolkit slices, RTK Query automated caching & optimistic updates" },
      { name: "SEO & Web Performance SLA", description: "Technical SEO meta strategy, SSR/SSG rendering, OpenGraph tags, Lighthouse 95+ audit & sub-second LCP" },
    ],
  },
  {
    title: "Backend, Security & Database Engineering",
    icon: Server,
    color: "text-cyan-400",
    skills: [
      { name: "Authentication & Authorization", description: "JWT session management, OAuth 2.0 logins, Role-Based Access Control (RBAC), bcrypt & secure HTTP cookies" },
      { name: "RESTful APIs & Microservices", description: "High-throughput Express/Node.js architecture, custom middleware pipelines & OpenAPI specs" },
      { name: "Database Indexing & Query Tuning", description: "PostgreSQL B-Tree indexing, schema ERDs, Prisma ORM relation mapping, query optimization & pooling" },
      { name: "Caching, Rate Limiting & Security", description: "Redis sliding-window rate limiters, session caching, DDoS mitigation, CORS & headers security" },
    ],
  },
  {
    title: "System Architecture & Algorithmic Rigor",
    icon: Trophy,
    color: "text-amber-400",
    skills: [
      { name: "Object-Oriented Programming (OOPs)", description: "SOLID design principles, inheritance, polymorphism, encapsulation, abstraction & design patterns" },
      { name: "Data Structures & Algorithms", description: "Advanced Graph algorithms, Dynamic Programming, Trees, Heap management & time/space optimization" },
      { name: "Competitive Problem Solving", description: "1912 Peak CP contest rating on LeetCode (Raman_Khiva) with top-rank timed problem solving" },
      { name: "C++ Memory & System Performance", description: "Modern C++ (C++17/20), Standard Template Library (STL), memory management pointers & sub-40ms execution" },
    ],
  },
  {
    title: "AI / ML, Linux & Infrastructure",
    icon: Cpu,
    color: "text-emerald-400",
    skills: [
      { name: "Linux System & Remote Machine Admin", description: "Power user in Ubuntu/Debian Linux, SSH remote machine administration, systemd processes, Bash scripting & firewall rules" },
      { name: "AI ML RAG & Vector Indexing", description: "Retrieval-Augmented Generation, vector similarity search, document chunking & LLM context injection" },
      { name: "Python & FastAPI Microservices", description: "Async Python pipelines, Pydantic validation, streaming token endpoints & background task queues" },
      { name: "Cloud Infrastructure & Containerization", description: "AWS EC2/ECS remote hosting, Docker builds, Nginx reverse proxy & SSL domain configs" },
    ],
  },
]

export function SkillsMatrix() {
  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto w-full">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
          Role Competencies & Practical Skillset
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
          What I Can Build & Deliver
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2">
          Production-proven competencies recruiters and clients look for across full-stack development, backend security, database indexing, and AI microservices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS_DATA.map((cat, idx) => {
          const IconComp = cat.icon
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121215] border border-[#222228] hover:border-zinc-600 transition-all duration-300 card-glow"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#1a1a22] border border-[#2a2a38] flex items-center justify-center">
                  <IconComp className={`w-5 h-5 ${cat.color}`} />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">{cat.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-[#16161b] border border-[#22222d] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-white">{skill.name}</span>
                      <p className="text-[11px] text-zinc-400 font-mono mt-0.5">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
