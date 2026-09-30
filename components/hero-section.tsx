"use client"

import React, { useState } from "react"
import Image from "next/image"
import {
  Briefcase,
  Layers,
  GitCommit,
  Zap,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Search,
  FileText,
  Mail,
  Globe,
  Trophy,
  Cpu,
} from "lucide-react"
import {
  GithubIcon,
  LinkedinIcon,
  ReactIcon,
  NextIcon,
  NodeIcon,
  PythonIcon,
  DockerIcon,
  PostgresIcon,
  LeetCodeIcon,
  CppIcon,
} from "./icons"
import { ProjectPlanData } from "./project-plan-modal"

interface HeroSectionProps {
  onSelectPrompt?: (plan: ProjectPlanData) => void
}

export const PRESET_PLANS: Record<string, ProjectPlanData> = {
  "oasian": {
    title: "Oasian — Full-Stack Startup Application",
    prompt: "A high-performance startup platform built with MERN stack, Next.js, Redis & PostgreSQL",
    category: "Full-Stack SaaS",
    stack: ["MERN", "Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Redis"],
    timeline: "3 Weeks",
    architecture: {
      frontend: "Next.js 16 App Router with responsive dark glassmorphic interface and Redux Toolkit state.",
      backend: "Type-safe Node.js & Express REST API with JWT auth and Redis caching layer.",
      database: "PostgreSQL with Prisma ORM schema indexing & connection pooling.",
      cloud: "Docker containers deployed on AWS cloud with automated CI/CD pipeline.",
    },
    phases: [
      {
        title: "Platform Core Architecture",
        description: "Set up multi-tenant system structure and authentication flow.",
        tasks: ["Database ERD & Prisma schema", "JWT & OAuth authorization", "API contract setup"],
      },
      {
        title: "Frontend Dashboard & Integration",
        description: "Develop responsive Next.js components with RTK state management.",
        tasks: ["Real-time data feeds", "Redux Toolkit store", "UI design tokens"],
      },
      {
        title: "Performance & Cloud Release",
        description: "Redis caching integration and automated Docker release.",
        tasks: ["Redis sliding window caching", "AWS Docker containerization", "End-to-end audit"],
      },
    ],
    stats: {
      latency: "<40ms",
      uptime: "99.99%",
      throughput: "2,000 req/s",
    },
  },
  "velor": {
    title: "Velor — Developer Workflow & Project Engine",
    prompt: "Automated project management platform with commit/PR webhooks and task automation",
    category: "Developer Tooling",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Docker"],
    timeline: "3 Weeks",
    architecture: {
      frontend: "React Server Components with dynamic interactive project pipelines and status indicators.",
      backend: "Node.js & Next.js Server Actions with GitHub Webhook event listeners.",
      database: "PostgreSQL on Supabase with Prisma schema migrations.",
      cloud: "Dockerized microservices deployed on AWS with automated testing.",
    },
    phases: [
      {
        title: "Engine Schema & Webhook Hooks",
        description: "Implement Prisma models for GitHub sync and task automation.",
        tasks: ["GitHub commit webhook controller", "Status transition engine", "Prisma migrations"],
      },
      {
        title: "Pipeline Dashboard UI",
        description: "Build split view layout with live project status cards and metrics.",
        tasks: ["OpenRouter-inspired Hero section", "Interactive milestone modal", "Dynamic filters"],
      },
      {
        title: "Deployment & Verification",
        description: "Zero-downtime release with TypeScript typecheck validation.",
        tasks: ["Docker build optimization", "Lighthouse audit", "Vercel edge deployment"],
      },
    ],
    stats: {
      latency: "<30ms",
      uptime: "99.95%",
      throughput: "1,500 webhook/min",
    },
  },
  "weavit": {
    title: "Weavit — Interactive Workspace Canvas",
    prompt: "Real-time canvas engine with WebSockets, Redux Toolkit & state synchronization",
    category: "Interactive App",
    stack: ["React", "TypeScript", "Redux Toolkit", "WebSockets", "Node.js", "Redis"],
    timeline: "2.5 Weeks",
    architecture: {
      frontend: "High-FPS HTML5 Canvas / WebGL rendering layer with custom event handling.",
      backend: "Node.js WebSocket server managing room state broadcast.",
      database: "Redis Pub/Sub channel for multi-node messaging + PostgreSQL persistent storage.",
      cloud: "Containerized deployment with WebSocket sticky session routing.",
    },
    phases: [
      {
        title: "Canvas Renderer Engine",
        description: "Build viewport transformation and node manipulation tools.",
        tasks: ["Transform matrix calculations", "Undo/redo undo stack", "Redux RTK state slice"],
      },
      {
        title: "Real-Time Sync Protocol",
        description: "WebSocket sync for multi-user position updates.",
        tasks: ["Socket.io channel handler", "State conflict resolution", "User cursor indicators"],
      },
      {
        title: "Export & Persistence",
        description: "Save workspace state to PostgreSQL with PNG/SVG export.",
        tasks: ["SVG string exporter", "Workspace snapshot API", "Export modal"],
      },
    ],
    stats: {
      latency: "<15ms",
      uptime: "99.9%",
      throughput: "60 FPS rendering",
    },
  },
  "rag-ml": {
    title: "AI ML RAG Retrieval & Knowledge Engine",
    prompt: "FastAPI Python backend with vector context indexing, RAG pipeline & LLM workflows",
    category: "AI & ML System",
    stack: ["Python", "FastAPI", "ML RAG", "Redis", "Vector DB", "Docker"],
    timeline: "3 Weeks",
    architecture: {
      frontend: "Streaming React UI rendering real-time RAG response chunks.",
      backend: "FastAPI Python async server orchestrating vector embedding & prompt chains.",
      database: "Vector Database for document chunks + Redis session cache.",
      cloud: "Dockerized FastAPI image deployed to AWS Cloud.",
    },
    phases: [
      {
        title: "RAG Pipeline & Embeddings",
        description: "Build document parser, chunker, and vector embedding generator.",
        tasks: ["Document chunking strategy", "Vector DB index creation", "Similarity search API"],
      },
      {
        title: "FastAPI LLM Orchestration",
        description: "Implement streaming endpoints with prompt safety guardrails.",
        tasks: ["AsyncIO FastAPI router", "Context retrieval filter", "Streaming SSE responses"],
      },
      {
        title: "Docker Cloud Release",
        description: "Containerization and cloud deployment with security checks.",
        tasks: ["Multi-stage Dockerfile", "API key management", "Performance benchmarking"],
      },
    ],
    stats: {
      latency: "<110ms",
      uptime: "99.9%",
      throughput: "800 req/s",
    },
  },
}

export function HeroSection({ onSelectPrompt }: HeroSectionProps = {}) {
  return (
    <section id="overview" className="relative pt-32 pb-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center gap-8">
        
        {/* Developer Profile Badge */}
        <div className="relative group">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-[#121215] border-2 border-[#262632] p-1.5 shadow-2xl shadow-black badge-glow transition-all duration-300 group-hover:border-amber-400 group-hover:scale-105 overflow-hidden">
            <Image
              src="/portfolio-pic.png"
              alt="Ramandeep Singh (Raman Singh) Profile Picture"
              width={200}
              height={200}
              priority
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Status Dot */}
          <div className="absolute bottom-1 right-1 flex items-center justify-center">
            <span className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-[#08080a]"></span>
            </span>
          </div>
        </div>

        {/* Main Headline & Identity */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
            <Sparkles className="w-3.5 h-3.5" /> Full-Stack & AI Systems Engineer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Hi! I&apos;m Raman Singh — Software Engineer & Builder
          </h1>

          {/* Bio / Summary */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal max-w-xl mx-auto">
            Building high-performance applications across MERN, PERN, Python & ML stacks. 2+ years engineering 10+ production projects with a 1912 LeetCode CP rating.
          </p>
        </div>

        {/* Quick Social & Contact Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://ramansingh.me"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-amber-400 text-xs text-zinc-300 font-medium transition flex items-center gap-2 group shadow-sm"
          >
            <Globe className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition" />
            <span>ramansingh.me</span>
          </a>

          <a
            href="https://github.com/Raman-Khiva"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-zinc-500 text-xs text-zinc-300 font-medium transition flex items-center gap-2 group shadow-sm"
          >
            <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition" />
            <span>GitHub (Raman Khiva)</span>
          </a>

          <a
            href="https://leetcode.com/u/Raman_Khiva/"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-amber-400 text-xs text-zinc-300 font-medium transition flex items-center gap-2 group shadow-sm"
          >
            <LeetCodeIcon className="w-4 h-4 text-amber-500 group-hover:text-amber-400 transition" />
            <span>LeetCode (1912 Rating)</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ramandeep-singh-503077200/"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-cyan-400 text-xs text-zinc-300 font-medium transition flex items-center gap-2 group shadow-sm"
          >
            <LinkedinIcon className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition" />
            <span>LinkedIn</span>
          </a>

          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-emerald-400 text-xs text-zinc-300 font-medium transition flex items-center gap-2 group shadow-sm"
          >
            <Mail className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition" />
            <span>Contact</span>
          </a>
        </div>

        {/* Developer Stats Banner */}
        <div className="w-full max-w-3xl bg-[#121215] border border-[#222228] rounded-2xl py-4 px-6 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#222228] mt-2">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center py-2 md:py-0 px-2 text-center">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium mb-1">
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">2+ Years</div>
            <div className="text-[11px] text-zinc-400 font-normal">Building Software</div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center py-2 md:py-0 px-2 text-center">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium mb-1">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">10+ Projects</div>
            <div className="text-[11px] text-zinc-400 font-normal">Built & Shipped</div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center py-2 md:py-0 px-2 text-center">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium mb-1">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">MERN • PERN • ML</div>
            <div className="text-[11px] text-zinc-400 font-normal">MERN, PERN & Python Stacks</div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center py-2 md:py-0 px-2 text-center">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium mb-1">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-amber-400 tracking-tight">1912</div>
            <div className="text-[11px] text-zinc-400 font-normal">LeetCode CP Max Rating</div>
          </div>
        </div>

        {/* 4 Tech & Capability Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-2">
          
          {/* Card 1: Full-Stack & MERN */}
          <div
            onClick={() => {
              const el = document.getElementById("tech-stack")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="group p-5 rounded-2xl bg-[#131316] hover:bg-[#18181d] border border-[#222228] hover:border-amber-500/50 transition-all duration-300 cursor-pointer text-left flex flex-col gap-3 card-glow justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-amber-400">
                  <ReactIcon className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-white">
                  <NextIcon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-tight mb-1 flex items-center gap-1.5">
                  Full-Stack & MERN Engine
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  MERN Stack, Next.js 16, TypeScript, Redux & RTK — reactive, sub-second web applications.
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-2 pt-2 border-t border-[#1c1c24]">
              <div className="flex flex-wrap gap-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                  Next.js 16
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                  Redux / RTK
                </span>
              </div>
              <a
                href="#tech-stack"
                onClick={(e) => {
                  e.stopPropagation()
                  const el = document.getElementById("tech-stack")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="flex items-center justify-between text-xs text-amber-400 hover:text-amber-300 font-medium group/btn pt-1"
              >
                <span>View More Tools</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: Backend, DBs & Cloud */}
          <div
            onClick={() => {
              const el = document.getElementById("tech-stack")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="group p-5 rounded-2xl bg-[#131316] hover:bg-[#18181d] border border-[#222228] hover:border-cyan-500/50 transition-all duration-300 cursor-pointer text-left flex flex-col gap-3 card-glow justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-emerald-400">
                  <NodeIcon className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-cyan-400">
                  <PostgresIcon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-tight mb-1">
                  Backend, PERN DBs & Cloud
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  PERN Stack, PostgreSQL, Prisma, Redis, AWS & Docker — high-concurrency microservices.
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-2 pt-2 border-t border-[#1c1c24]">
              <div className="flex flex-wrap gap-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                  PERN Stack
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                  Docker & AWS
                </span>
              </div>
              <a
                href="#tech-stack"
                onClick={(e) => {
                  e.stopPropagation()
                  const el = document.getElementById("tech-stack")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="flex items-center justify-between text-xs text-cyan-400 hover:text-cyan-300 font-medium group/btn pt-1"
              >
                <span>View More Tools</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3: C++, OOPs & CP */}
          <div
            onClick={() => {
              const el = document.getElementById("tech-stack")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="group p-5 rounded-2xl bg-[#131316] hover:bg-[#18181d] border border-[#222228] hover:border-purple-500/50 transition-all duration-300 cursor-pointer text-left flex flex-col gap-3 card-glow justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-cyan-400">
                  <CppIcon className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-amber-400">
                  <LeetCodeIcon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-tight mb-1">
                  C++, OOPs & Competitive Prog.
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  C++, Object-Oriented Design, Data Structures & Algorithms — peak rating of 1912 on LeetCode.
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-2 pt-2 border-t border-[#1c1c24]">
              <div className="flex flex-wrap gap-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                  C++ / OOPs
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-amber-400 font-bold">
                  1912 CP Rating
                </span>
              </div>
              <a
                href="#tech-stack"
                onClick={(e) => {
                  e.stopPropagation()
                  const el = document.getElementById("tech-stack")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="flex items-center justify-between text-xs text-purple-400 hover:text-purple-300 font-medium group/btn pt-1"
              >
                <span>View More Tools</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 4: AI ML & RAG Systems */}
          <div
            onClick={() => {
              const el = document.getElementById("tech-stack")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="group p-5 rounded-2xl bg-[#131316] hover:bg-[#18181d] border border-[#222228] hover:border-emerald-500/50 transition-all duration-300 cursor-pointer text-left flex flex-col gap-3 card-glow justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-amber-400">
                  <PythonIcon className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-tight mb-1">
                  AI / ML & RAG Pipelines
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Python, FastAPI, RAG building & Vector DBs — context retrieval & autonomous workflows.
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-2 pt-2 border-t border-[#1c1c24]">
              <div className="flex flex-wrap gap-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                  FastAPI
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                  ML (RAG)
                </span>
              </div>
              <a
                href="#tech-stack"
                onClick={(e) => {
                  e.stopPropagation()
                  const el = document.getElementById("tech-stack")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="flex items-center justify-between text-xs text-emerald-400 hover:text-emerald-300 font-medium group/btn pt-1"
              >
                <span>View More Tools</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* View All Tech Stacks & Capabilities Scroll Button */}
        <div className="flex justify-center mt-3">
          <a
            href="#tech-stack"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById("tech-stack")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-4.5 py-2 rounded-xl bg-[#141418] hover:bg-[#1a1a22] border border-[#2a2a35] hover:border-amber-400/50 text-xs text-zinc-300 hover:text-white font-medium transition flex items-center gap-2 group cursor-pointer"
          >
            <span>View All Tools & Technologies</span>
            <ChevronDown className="w-3.5 h-3.5 text-amber-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Recruiter & Client Direct Call-To-Action Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm flex items-center gap-2 transition shadow-lg shadow-white/5 active:scale-95"
          >
            <Layers className="w-4 h-4 text-amber-600" /> Explore Featured Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-[#131317] hover:bg-[#1c1c24] border border-[#262632] hover:border-amber-400/50 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition active:scale-95"
          >
            <Mail className="w-4 h-4 text-amber-400" /> Get in Touch
          </a>
        </div>

      </div>
    </section>
  )
}
