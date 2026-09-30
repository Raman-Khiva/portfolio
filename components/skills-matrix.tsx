"use client"

import React from "react"
import { Code2, Server, Cpu, Cloud, CheckCircle2, Trophy } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ElementType
  color: string
  skills: { name: string; level: string; description: string }[]
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Full-Stack & Web Engineering",
    icon: Code2,
    color: "text-amber-400",
    skills: [
      { name: "MERN Stack & Next.js 16", level: "Expert", description: "MongoDB, Express, React, Node.js, Next.js App Router" },
      { name: "JavaScript & TypeScript", level: "Expert", description: "ES6+, Async programming, Strict typing & Interfaces" },
      { name: "Redux & Redux Toolkit (RTK)", level: "Expert", description: "Centralized state management, RTK Query, Slices" },
      { name: "Tailwind CSS & Modern UI", level: "Expert", description: "Custom design systems, pitch-dark themes, micro-animations" },
    ],
  },
  {
    title: "Backend, Databases & Cloud",
    icon: Server,
    color: "text-cyan-400",
    skills: [
      { name: "Node.js & Express APIs", level: "Expert", description: "RESTful architecture, Middleware, JWT Auth" },
      { name: "PostgreSQL & Prisma ORM", level: "Expert", description: "Database ERD, Connection pooling, Query optimization" },
      { name: "Redis Caching & Pub/Sub", level: "Expert", description: "Sliding window rate limiters, Session caching, Message queues" },
      { name: "AWS & Docker Deployment", level: "Advanced", description: "Containerized builds, ECS cloud services, Automated CI/CD" },
    ],
  },
  {
    title: "C++, OOPs & Competitive Programming",
    icon: Trophy,
    color: "text-amber-400",
    skills: [
      { name: "C++ Programming & STL", level: "Expert", description: "Standard Template Library, Pointers, Memory management" },
      { name: "Object-Oriented Programming (OOPs)", level: "Expert", description: "Inheritance, Polymorphism, Encapsulation, Abstraction" },
      { name: "1000+ Solved LeetCode Problems", level: "Expert", description: "Data Structures, Algorithms, Graph & DP techniques" },
      { name: "1912 Max CP Rating (LeetCode)", level: "Competitive", description: "High-rank contest performance & algorithmic optimization" },
    ],
  },
  {
    title: "AI / ML & Python Development",
    icon: Cpu,
    color: "text-emerald-400",
    skills: [
      { name: "Python Engineering", level: "Expert", description: "Clean Python code, Data processing, Async IO scripts" },
      { name: "FastAPI Backend Framework", level: "Expert", description: "Pydantic validation, Async endpoints, OpenAPI specs" },
      { name: "ML & RAG Building", level: "Advanced", description: "Retrieval-Augmented Generation, Vector embeddings, LLM context" },
      { name: "Production System Deployment", level: "Expert", description: "6+ Shipped production applications over 2+ years" },
    ],
  },
]

export function SkillsMatrix() {
  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto w-full">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
          Technical Capabilities & Stack
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
          Skills & Core Competencies
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2">
          Engineered for high performance, sub-second response times, and production rigor across 2+ years of software building.
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
