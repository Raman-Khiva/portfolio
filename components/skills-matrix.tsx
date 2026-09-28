"use client"

import React from "react"
import { Code2, Server, Cpu, Cloud, CheckCircle2 } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ElementType
  color: string
  skills: { name: string; level: string; description: string }[]
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Frontend & UI Engineering",
    icon: Code2,
    color: "text-amber-400",
    skills: [
      { name: "Next.js 16 (App Router)", level: "Expert", description: "RSC, Server Actions, Streaming SSR, ISR" },
      { name: "React 19 & TypeScript", level: "Expert", description: "Hooks, Strict Typing, State Machines, Suspense" },
      { name: "Tailwind CSS & Animation", level: "Expert", description: "Custom Design Tokens, Micro-interactions" },
      { name: "HTML5 Canvas & WebGL", level: "Advanced", description: "Hardware-accelerated 2D/3D rendering" },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    color: "text-cyan-400",
    skills: [
      { name: "Node.js & Express / NestJS", level: "Expert", description: "High-throughput asynchronous APIs" },
      { name: "Python & FastAPI", level: "Expert", description: "AsyncIO, Pydantic, Microservices" },
      { name: "Golang Backend Services", level: "Advanced", description: "Goroutines, Channel concurrency" },
      { name: "GraphQL & RESTful APIs", level: "Expert", description: "Federated Subgraphs, OpenAPI specs" },
    ],
  },
  {
    title: "AI, Data & Vector DBs",
    icon: Cpu,
    color: "text-purple-400",
    skills: [
      { name: "LLM Orchestration (LangChain)", level: "Expert", description: "RAG pipelines, Autonomous Agent Loops" },
      { name: "Pinecone / Qdrant Vector DB", level: "Expert", description: "Semantic Search & Context Indexing" },
      { name: "PostgreSQL & Prisma / Drizzle", level: "Expert", description: "Complex Queries, ERDs, Index tuning" },
      { name: "Redis Caching & Pub/Sub", level: "Expert", description: "Sliding window rate limiters, Session store" },
    ],
  },
  {
    title: "Cloud & DevOps Infrastructure",
    icon: Cloud,
    color: "text-emerald-400",
    skills: [
      { name: "Docker & Kubernetes", level: "Advanced", description: "Multi-stage builds, Container orchestration" },
      { name: "AWS Services (ECS, S3, Lambda)", level: "Advanced", description: "Serverless architectures & IAM policies" },
      { name: "GitHub Actions CI/CD", level: "Expert", description: "Automated test suites & deployment pipelines" },
      { name: "Performance & Security Audit", level: "Expert", description: "Sub-50ms TTFB, OWASP Top 10 mitigation" },
    ],
  },
]

export function SkillsMatrix() {
  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto w-full">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
          Technical Stack & Capabilities
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
          Architectural Expertise
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2">
          Engineered for sub-second latency, zero downtime, and production maintainability.
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
                    className="p-3 rounded-xl bg-[#16161b] border border-[#22222d] flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-white">{skill.name}</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 font-mono mt-0.5 pl-6">{skill.description}</p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1f1f28] border border-[#2e2e3a] text-zinc-300 shrink-0">
                      {skill.level}
                    </span>
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
