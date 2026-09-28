"use client"

import React, { useState } from "react"
import Image from "next/image"
import {
  Briefcase,
  Layers,
  GitCommit,
  Zap,
  ChevronRight,
  Sparkles,
  Search,
  FileText,
  Mail,
} from "lucide-react"
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  ReactIcon,
  NextIcon,
  NodeIcon,
  PythonIcon,
  DockerIcon,
  PostgresIcon,
} from "./icons"
import { ProjectPlanData } from "./project-plan-modal"

interface HeroSectionProps {
  onSelectPrompt: (plan: ProjectPlanData) => void
}

export const PRESET_PLANS: Record<string, ProjectPlanData> = {
  "ai-agent": {
    title: "AI Autonomous Coding Agent",
    prompt: "A Python & TypeScript AI Agent that autonomously plans, executes, and tests codebase changes",
    category: "AI & ML System",
    stack: ["Python", "LangChain", "Next.js 16", "FastAPI", "Pinecone Vector DB"],
    timeline: "3 Weeks",
    architecture: {
      frontend: "Next.js 16 App Router with streaming UI SSE & real-time log rendering.",
      backend: "FastAPI Python backend with AsyncIO task queues and vector context retrieval.",
      database: "Pinecone Vector DB for code indexing + PostgreSQL for user session storage.",
      cloud: "Dockerized containers on AWS ECS with automated GitHub Actions CI/CD.",
    },
    phases: [
      {
        title: "Agent Loop & Context Memory",
        description: "Set up vector embeddings and LLM reasoning chain.",
        tasks: ["AST parsing & code chunking", "RAG pipeline implementation", "Prompt safety guardrails"],
      },
      {
        title: "Execution Sandbox",
        description: "Isolated Docker execution environment for code testing.",
        tasks: ["Container orchestration", "Execution timeout safety", "Diff preview renderer"],
      },
      {
        title: "Streaming UI & Verification",
        description: "Real-time user feedback UI with interactive approval steps.",
        tasks: ["Server-Sent Events integration", "Interactive diff viewer", "Performance benchmarks"],
      },
    ],
    stats: {
      latency: "<120ms",
      uptime: "99.9%",
      throughput: "500 req/s",
    },
  },
  "ecommerce-saas": {
    title: "Full-Stack Next.js 16 E-Commerce Engine",
    prompt: "High-performance multi-tenant e-commerce platform with Stripe sub-second checkout",
    category: "Full Stack SaaS",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe API"],
    timeline: "4 Weeks",
    architecture: {
      frontend: "React Server Components with dynamic ISR (Incremental Static Regeneration).",
      backend: "Next.js Server Actions with Edge middleware for geo-routing.",
      database: "PostgreSQL on Supabase with Prisma ORM & Redis caching layer.",
      cloud: "Vercel Enterprise Edge Network with Cloudflare DDoS protection.",
    },
    phases: [
      {
        title: "Catalog & Multi-Tenant Engine",
        description: "Implement catalog indexing and dynamic tenant branding.",
        tasks: ["Product search & filter index", "Multi-currency support", "Inventory webhook handler"],
      },
      {
        title: "Sub-Second Checkout Flow",
        description: "Integrate Stripe PaymentIntents with guest and customer accounts.",
        tasks: ["Stripe webhook processing", "Cart synchronization", "Receipt PDF generator"],
      },
      {
        title: "Merchant Analytics Dashboard",
        description: "Real-time sales revenue, inventory alerts, and user cohorts.",
        tasks: ["Analytics charts with Recharts", "Export CSV reports", "Admin RBAC permissions"],
      },
    ],
    stats: {
      latency: "<45ms",
      uptime: "99.99%",
      throughput: "2,500 checkout/min",
    },
  },
  "microservice-api": {
    title: "High-Throughput Microservice API Gateway",
    prompt: "Distributed REST & GraphQL API Gateway with rate limiting & Redis cache",
    category: "Cloud Backend",
    stack: ["Node.js", "Go", "GraphQL", "Redis", "Docker", "Kubernetes"],
    timeline: "2.5 Weeks",
    architecture: {
      frontend: "GraphQL Playground & Interactive OpenAPI Swagger documentation.",
      backend: "Golang API Gateway handling rate limiting, JWT authentication & request routing.",
      database: "Redis cluster for token buckets + MongoDB for unstructured logs.",
      cloud: "Kubernetes cluster with horizontal pod autoscaling on AWS EKS.",
    },
    phases: [
      {
        title: "API Gateway Core & Token Auth",
        description: "Build reverse proxy router with distributed rate limiting.",
        tasks: ["JWT verification middleware", "Redis sliding window rate limiter", "CORS & Security headers"],
      },
      {
        title: "GraphQL Subgraph Aggregation",
        description: "Federated GraphQL schema combining microservices into single endpoint.",
        tasks: ["Apollo Federation setup", "N+1 query resolution optimization", "Cache control headers"],
      },
      {
        title: "Observability & Metrics",
        description: "Prometheus metrics export with Grafana dashboards.",
        tasks: ["Distributed tracing with OpenTelemetry", "Health check probes", "Zero-downtime rolling deploys"],
      },
    ],
    stats: {
      latency: "<15ms",
      uptime: "99.99%",
      throughput: "10,000 req/s",
    },
  },
  "realtime-canvas": {
    title: "Real-Time Collaborative Workspace Canvas",
    prompt: "Figma-style vector graphics canvas with WebSockets & CRDT state sync",
    category: "Interactive App",
    stack: ["React", "HTML5 Canvas / HTML5 WebGL", "WebSockets", "Node.js", "Yjs CRDT"],
    timeline: "3.5 Weeks",
    architecture: {
      frontend: "Custom WebGL / Canvas 2D engine with hardware-accelerated rendering.",
      backend: "Node.js WebSocket server managing CRDT (Conflict-Free Replicated Data Types) room channels.",
      database: "Redis Pub/Sub for cross-server WebSocket messaging + S3 bucket for asset export.",
      cloud: "Distributed WebSocket server fleet with sticky sessions on AWS Elastic Beanstalk.",
    },
    phases: [
      {
        title: "Infinite Canvas Renderer",
        description: "High-FPS pan, zoom, and multi-element shape rendering engine.",
        tasks: ["Viewport transformation matrix", "Spatial indexing (R-Tree) for selection", "Undo/Redo stack"],
      },
      {
        title: "Real-Time CRDT State Sync",
        description: "Multi-user cursor sync & simultaneous shape editing without lock contention.",
        tasks: ["Yjs CRDT integration", "WebSocket reconnection protocol", "Live presence indicators"],
      },
      {
        title: "Asset Export & Collaboration",
        description: "Export selection to PNG, SVG, JSON with granular invite links.",
        tasks: ["SVG generator", "Shareable room tokens", "Comment thread pins"],
      },
    ],
    stats: {
      latency: "<10ms",
      uptime: "99.95%",
      throughput: "60 FPS rendering",
    },
  },
}

export function HeroSection({ onSelectPrompt }: HeroSectionProps) {
  const [customPrompt, setCustomPrompt] = useState("")

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customPrompt.trim()) return

    const customPlan: ProjectPlanData = {
      title: customPrompt.trim().length > 40 ? customPrompt.trim().substring(0, 40) + "..." : customPrompt.trim(),
      prompt: customPrompt,
      category: "Custom Architecture",
      stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Node.js API", "PostgreSQL"],
      timeline: "2-3 Weeks",
      architecture: {
        frontend: "Modern Next.js 16 App Router with responsive dark glassmorphic interface.",
        backend: "Type-safe Node.js REST API with input validation & rate limiting.",
        database: "PostgreSQL database schema with indexed queries & migration safety.",
        cloud: "Containerized Docker setup ready for Vercel, AWS, or Railway deployment.",
      },
      phases: [
        {
          title: "System Design & Data Schema",
          description: "Define architecture components and database entity relations.",
          tasks: ["Technical specification doc", "Database ERD diagram", "API contract definition"],
        },
        {
          title: "Core Implementation Sprint",
          description: "Build frontend components and connect backend service layer.",
          tasks: ["UI component library", "State management & caching", "Error boundary handling"],
        },
        {
          title: "Testing & Deployment",
          description: "Automated end-to-end testing and production pipeline configuration.",
          tasks: ["E2E integration test suite", "Lighthouse speed audit", "CI/CD automated release"],
        },
      ],
      stats: {
        latency: "<35ms",
        uptime: "99.9%",
        throughput: "1,200 req/s",
      },
    }

    onSelectPrompt(customPlan)
    setCustomPrompt("")
  }

  return (
    <section id="overview" className="relative pt-32 pb-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center gap-8">
        
        {/* Developer Profile Avatar Badge (Top center element matching reference layout) */}
        <div className="relative group cursor-pointer" onClick={() => onSelectPrompt(PRESET_PLANS["ai-agent"])}>
          <div className="w-20 h-20 rounded-2xl bg-[#121215] border border-[#222228] p-1 shadow-2xl shadow-black badge-glow transition-all duration-300 group-hover:border-zinc-400 group-hover:scale-105 overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="Alex Chen Developer Avatar"
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {/* Status Dot */}
          <div className="absolute -bottom-1 -right-1 flex items-center justify-center">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#08080a]"></span>
            </span>
          </div>
        </div>

        {/* Main Developer Headline & Name */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
            <Sparkles className="w-3.5 h-3.5" /> Full-Stack & AI Systems Architect
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Hi! I&apos;m Alex Chen — Software Engineer & Architect
          </h1>

          {/* Bio / About Subtitle */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal max-w-xl mx-auto">
            Building high-throughput web applications, autonomous LLM agents, scalable backend microservices, and interactive developer tooling with production rigor.
          </p>
        </div>

        {/* Developer Quick Social Links & Resume Pill Row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-zinc-500 text-xs text-zinc-300 font-medium transition flex items-center gap-2 group shadow-sm"
          >
            <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-zinc-500 text-xs text-zinc-300 font-medium transition flex items-center gap-2 group shadow-sm"
          >
            <LinkedinIcon className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-zinc-500 text-xs text-zinc-300 font-medium transition flex items-center gap-2 group shadow-sm"
          >
            <TwitterIcon className="w-4 h-4 text-zinc-400 group-hover:text-amber-400 transition" />
            <span>Twitter/X</span>
          </a>

          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-zinc-500 text-xs text-zinc-300 font-medium transition flex items-center gap-2 group shadow-sm"
          >
            <Mail className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition" />
            <span>Contact</span>
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              alert("Resume PDF Download requested!")
            }}
            className="px-3.5 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition flex items-center gap-1.5 shadow"
          >
            <FileText className="w-3.5 h-3.5" /> Resume CV
          </a>
        </div>

        {/* 4 Tech & Capability Cards Grid (With Tech Stack Icons & Tool Names) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-2">
          
          {/* Card 1: Frontend Tech */}
          <div
            onClick={() => onSelectPrompt(PRESET_PLANS["ecommerce-saas"])}
            className="group p-5 rounded-2xl bg-[#131316] hover:bg-[#18181d] border border-[#222228] hover:border-zinc-600 transition-all duration-300 cursor-pointer text-left flex flex-col gap-3 card-glow"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-amber-400">
                <ReactIcon className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-white">
                <NextIcon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-tight mb-1 flex items-center gap-1.5">
                Frontend Engineering
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Next.js 16, React 19, TypeScript & Tailwind CSS — sub-second rendering & SSR
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-auto pt-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                Next.js 16
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                React 19
              </span>
            </div>
          </div>

          {/* Card 2: Backend Tech */}
          <div
            onClick={() => onSelectPrompt(PRESET_PLANS["microservice-api"])}
            className="group p-5 rounded-2xl bg-[#131316] hover:bg-[#18181d] border border-[#222228] hover:border-zinc-600 transition-all duration-300 cursor-pointer text-left flex flex-col gap-3 card-glow"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-emerald-400">
                <NodeIcon className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-cyan-400">
                <PostgresIcon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-tight mb-1">
                Backend & Systems
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Node.js, Golang, GraphQL & PostgreSQL — high-concurrency microservices & APIs
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-auto pt-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                Node.js
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                PostgreSQL
              </span>
            </div>
          </div>

          {/* Card 3: AI & Agentic Systems Tech */}
          <div
            onClick={() => onSelectPrompt(PRESET_PLANS["ai-agent"])}
            className="group p-5 rounded-2xl bg-[#131316] hover:bg-[#18181d] border border-[#222228] hover:border-zinc-600 transition-all duration-300 cursor-pointer text-left flex flex-col gap-3 card-glow"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-amber-400">
                <PythonIcon className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-purple-400">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-tight mb-1">
                AI & Agentic Systems
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Python, LangChain, RAG Pipelines & Vector DBs — autonomous LLM execution loops
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-auto pt-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                Python
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                LangChain
              </span>
            </div>
          </div>

          {/* Card 4: DevOps & Cloud */}
          <div
            onClick={() => onSelectPrompt(PRESET_PLANS["realtime-canvas"])}
            className="group p-5 rounded-2xl bg-[#131316] hover:bg-[#18181d] border border-[#222228] hover:border-zinc-600 transition-all duration-300 cursor-pointer text-left flex flex-col gap-3 card-glow"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-cyan-400">
                <DockerIcon className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-xl bg-[#1c1c21] border border-[#2a2a32] flex items-center justify-center text-emerald-400">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-tight mb-1">
                DevOps & Infrastructure
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Docker, Kubernetes, AWS & CI/CD — 99.99% uptime SLA & automated releases
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-auto pt-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                Docker
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1c24] border border-[#2a2a35] text-zinc-300">
                AWS
              </span>
            </div>
          </div>
        </div>

        {/* Developer Stats Banner (Horizontally divided wide card) */}
        <div className="w-full max-w-3xl bg-[#121215] border border-[#222228] rounded-2xl py-4 px-6 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#222228] mt-2">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center py-2 md:py-0 px-2 text-center">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium mb-1">
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">8+ Years</div>
            <div className="text-[11px] text-zinc-400 font-normal">Full-Stack Experience</div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center py-2 md:py-0 px-2 text-center">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium mb-1">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">35+ Apps</div>
            <div className="text-[11px] text-zinc-400 font-normal">Shipped to Production</div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center py-2 md:py-0 px-2 text-center">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium mb-1">
              <GitCommit className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">50+ Repos</div>
            <div className="text-[11px] text-zinc-400 font-normal">Open Source Contributions</div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center py-2 md:py-0 px-2 text-center">
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium mb-1">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">99.99%</div>
            <div className="text-[11px] text-zinc-400 font-normal">Target Uptime SLA</div>
          </div>
        </div>

        {/* Interactive Custom Architecture Prompt Input */}
        <form onSubmit={handleCustomSubmit} className="w-full max-w-xl mt-4">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-zinc-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Ask Alex to plan a custom system (e.g. Next.js SaaS with Stripe)..."
              className="w-full py-3.5 pl-11 pr-28 rounded-2xl bg-[#131317] border border-[#262630] focus:border-zinc-500 focus:outline-none text-xs sm:text-sm text-white placeholder-zinc-500 transition shadow-inner"
            />
            <button
              type="submit"
              className="absolute right-2 px-3 py-1.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-medium text-xs flex items-center gap-1 transition shadow"
            >
              Plan System <Sparkles className="w-3 h-3" />
            </button>
          </div>
        </form>

        {/* Quick Example Architecture Actions Pills */}
        <div className="flex flex-col items-center gap-3 mt-2 w-full">
          <div className="text-xs text-zinc-400 font-normal tracking-wide">
            Inspect interactive architectural plans
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl">
            {/* Pill 1 */}
            <button
              onClick={() => onSelectPrompt(PRESET_PLANS["ai-agent"])}
              className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-zinc-500 text-xs text-zinc-300 font-normal transition flex items-center gap-1.5 group cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition" />
              <span>Inspect AI Autonomous Agent Plan</span>
            </button>

            {/* Pill 2 */}
            <button
              onClick={() => onSelectPrompt(PRESET_PLANS["ecommerce-saas"])}
              className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-zinc-500 text-xs text-zinc-300 font-normal transition flex items-center gap-1.5 group cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition" />
              <span>Explore Full-Stack Next.js 16 SaaS Store</span>
            </button>

            {/* Pill 3 */}
            <button
              onClick={() => onSelectPrompt(PRESET_PLANS["microservice-api"])}
              className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-zinc-500 text-xs text-zinc-300 font-normal transition flex items-center gap-1.5 group cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition" />
              <span>Inspect Microservices API Gateway</span>
            </button>

            {/* Pill 4 */}
            <button
              onClick={() => onSelectPrompt(PRESET_PLANS["realtime-canvas"])}
              className="px-3.5 py-1.5 rounded-full bg-[#121216] hover:bg-[#1c1c24] border border-[#22222a] hover:border-zinc-500 text-xs text-zinc-300 font-normal transition flex items-center gap-1.5 group cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition" />
              <span>View Real-Time Collaborative Canvas Plan</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
