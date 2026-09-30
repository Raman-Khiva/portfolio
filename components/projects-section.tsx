"use client"

import React, { useState } from "react"
import { ExternalLink, Sparkles, Code2, Cpu, ArrowUpRight } from "lucide-react"
import {
  GithubIcon,
  ReactIcon,
  NextIcon,
  NodeIcon,
  PythonIcon,
  DockerIcon,
  PostgresIcon,
  TypeScriptIcon,
  TailwindIcon,
  RedisIcon,
  WebSocketsIcon,
  LeetCodeIcon,
  CppIcon,
} from "@/components/icons"
import { ProjectPlanData } from "./project-plan-modal"
import { PRESET_PLANS } from "./hero-section"

interface ProjectsSectionProps {
  onInspectPlan: (plan: ProjectPlanData) => void
}

interface ProjectItem {
  id: string
  title: string
  description: string
  category: "AI/ML" | "Full-Stack" | "Interactive App" | "Cloud Systems"
  tags: string[]
  metrics: string
  demoUrl?: string
  githubUrl?: string
  presetKey?: string
}

const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "project-oasian",
    title: "Oasian — Startup Full-Stack Platform",
    description: "High-scale full-stack platform built for a startup. Engineered using MERN stack, Next.js 16, Redux Toolkit, Redis caching, and PostgreSQL schema indexing.",
    category: "Full-Stack",
    tags: ["MERN", "Next.js 16", "TypeScript", "Redux", "Redis", "Postgres"],
    metrics: "2+ Years • Sub-40ms Response Time",
    githubUrl: "https://github.com/Raman-Khiva",
    demoUrl: "https://oasian.in",
    presetKey: "oasian",
  },
  {
    id: "project-velor",
    title: "Velor — Developer Project & Workflow Engine",
    description: "Automated developer project management platform evolution. Built with Next.js 16, Prisma ORM, GitHub commit webhooks, and live project status cards.",
    category: "Full-Stack",
    tags: ["Next.js 16", "TypeScript", "Prisma", "Postgres", "Docker"],
    metrics: "Automated Sync • 99.95% Target SLA",
    githubUrl: "https://github.com/Raman-Khiva",
    demoUrl: "https://velor-web-rho.vercel.app/",
    presetKey: "velor",
  },
  {
    id: "project-weavit",
    title: "Weavit — Interactive Workspace Canvas",
    description: "Interactive canvas workflow application built with React, Redux Toolkit, WebSockets state synchronization, and custom UI primitives.",
    category: "Interactive App",
    tags: ["React", "Redux", "WebSockets", "Node.js", "Redis"],
    metrics: "60 FPS Canvas • Sub-15ms Latency",
    githubUrl: "https://github.com/Raman-Khiva",
    demoUrl: "https://weavit.tech",
    presetKey: "weavit",
  },
  {
    id: "project-rag-ml",
    title: "AI ML RAG Knowledge Engine",
    description: "Retrieval-Augmented Generation pipeline built with Python, FastAPI async routes, vector context embeddings, and streaming LLM responses.",
    category: "AI/ML",
    tags: ["Python", "FastAPI", "ML RAG", "Redis", "Docker"],
    metrics: "Semantic Context • <110ms Stream",
    githubUrl: "https://github.com/Raman-Khiva",
    demoUrl: "https://ramansingh.me",
    presetKey: "rag-ml",
  },
]

function renderTechBadge(tag: string, idx: number) {
  const tagLower = tag.toLowerCase()
  let IconComp: React.ComponentType<React.SVGProps<SVGSVGElement>> = Code2
  let iconColor = "text-zinc-400"

  if (tagLower.includes("next")) {
    IconComp = NextIcon
    iconColor = "text-white"
  } else if (tagLower.includes("react") || tagLower.includes("mern")) {
    IconComp = ReactIcon
    iconColor = "text-amber-400"
  } else if (tagLower.includes("python")) {
    IconComp = PythonIcon
    iconColor = "text-amber-400"
  } else if (tagLower.includes("node")) {
    IconComp = NodeIcon
    iconColor = "text-emerald-400"
  } else if (tagLower.includes("docker")) {
    IconComp = DockerIcon
    iconColor = "text-cyan-400"
  } else if (tagLower.includes("postgres")) {
    IconComp = PostgresIcon
    iconColor = "text-cyan-400"
  } else if (tagLower.includes("typescript")) {
    IconComp = TypeScriptIcon
    iconColor = "text-amber-400"
  } else if (tagLower.includes("tailwind")) {
    IconComp = TailwindIcon
    iconColor = "text-cyan-400"
  } else if (tagLower.includes("redis")) {
    IconComp = RedisIcon
    iconColor = "text-red-400"
  } else if (tagLower.includes("websocket")) {
    IconComp = WebSocketsIcon
    iconColor = "text-emerald-400"
  } else if (tagLower.includes("fastapi") || tagLower.includes("rag") || tagLower.includes("ml")) {
    IconComp = Cpu
    iconColor = "text-emerald-400"
  } else if (tagLower.includes("c++") || tagLower.includes("cpp")) {
    IconComp = CppIcon
    iconColor = "text-cyan-400"
  } else if (tagLower.includes("leetcode")) {
    IconComp = LeetCodeIcon
    iconColor = "text-amber-400"
  }

  return (
    <span
      key={idx}
      className="text-[11px] px-2.5 py-1 rounded-lg bg-[#181820] border border-[#262632] text-zinc-200 font-mono flex items-center gap-1.5 hover:border-zinc-500 transition-colors shadow-sm"
    >
      <IconComp className={`w-3.5 h-3.5 ${iconColor}`} />
      {tag}
    </span>
  )
}

export function ProjectsSection({ onInspectPlan }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<string>("All")

  const filteredProjects = filter === "All" 
    ? PROJECTS_LIST 
    : PROJECTS_LIST.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4" /> Top Projects Showcase
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Featured Systems & Applications
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-lg">
            Production-grade systems built by Raman Singh — spanning full-stack startups, developer tools, and AI RAG pipelines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {["All", "Full-Stack", "Interactive App", "AI/ML"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === cat
                  ? "bg-white text-black font-semibold shadow"
                  : "bg-[#121216] border border-[#22222a] text-zinc-400 hover:text-white hover:bg-[#1c1c24]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group p-6 rounded-2xl bg-[#121215] border border-[#222228] hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between card-glow relative"
          >
            <div>
              {/* Category & Metrics bar */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#1a1a22] border border-[#2a2a38] text-amber-400">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  {project.metrics}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors tracking-tight mb-2 flex items-center justify-between">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Badges with Tool Icons */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag, idx) => renderTechBadge(tag, idx))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#1c1c24] flex items-center justify-between">
              {project.presetKey && PRESET_PLANS[project.presetKey] && (
                <button
                  onClick={() => onInspectPlan(PRESET_PLANS[project.presetKey!])}
                  className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 transition"
                >
                  <Sparkles className="w-3.5 h-3.5" /> View Architecture Plan
                </button>
              )}

              <div className="flex items-center gap-3 ml-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-[#1a1a22] border border-[#2a2a35] text-zinc-400 hover:text-white transition"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-[#1c1c24] hover:bg-[#262632] border border-[#2a2a38] text-xs font-semibold text-white flex items-center gap-1.5 transition"
                  >
                    Live Demo <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
