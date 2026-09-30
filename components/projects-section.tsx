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
  FastApiIcon,
  MongoIcon,
  PrismaIcon,
  ReduxIcon,
  ExpressIcon,
  OpenAiIcon,
  LangChainIcon,
  LinuxIcon,
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
    id: "oasian",
    title: "Oasian — Full-Stack SaaS Application Platform",
    description: "Production web application engineered with MERN stack, Next.js 16 App Router, TypeScript, Redux Toolkit, PostgreSQL & Redis caching. Features high-speed server response SLA, JWT auth, and animated responsive dashboards.",
    category: "Full-Stack",
    tags: ["Next.js 16", "React 19", "Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Redux", "Tailwind CSS"],
    metrics: "Sub-40ms Response Time",
    githubUrl: "https://github.com/Raman-Khiva/oasian",
    demoUrl: "https://oasian.me",
    presetKey: "oasian",
  },
  {
    id: "velor",
    title: "Velor — Cloud Infrastructure & Execution Engine",
    description: "High-throughput cloud management console and project engine powered by Express microservices, Prisma ORM, Redis rate limiters, Docker containerization, and automated CI/CD pipeline automation.",
    category: "Cloud Systems",
    tags: ["Express.js", "Node.js", "Docker", "PostgreSQL", "Prisma", "Redis", "TypeScript", "Tailwind CSS"],
    metrics: "99.9% Uptime SLA",
    githubUrl: "https://github.com/Raman-Khiva/velor-cloud",
    demoUrl: "https://velor.me",
    presetKey: "velor",
  },
  {
    id: "weavit",
    title: "Weavit — Real-Time Interactive Canvas & Workspace",
    description: "Collaborative interactive web workspace built with React 19, HTML5 Canvas, WebSockets pub/sub, custom state synchronization, and sub-16ms fluid canvas frame rates.",
    category: "Interactive App",
    tags: ["React 19", "TypeScript", "WebSockets", "HTML5 Canvas", "Redux", "Tailwind CSS"],
    metrics: "60 FPS Fluid Canvas",
    githubUrl: "https://github.com/Raman-Khiva/weavit",
    demoUrl: "https://weavit.me",
    presetKey: "weavit",
  },
  {
    id: "rag-ml",
    title: "Vector ML & Autonomous RAG Intelligence Engine",
    description: "Production AI microservice platform using Python FastAPI, Vector Embeddings (ChromaDB), LangChain LLM context pipelines, and Pydantic async validation for enterprise data retrieval.",
    category: "AI/ML",
    tags: ["Python", "FastAPI", "RAG Engine", "Vector DB", "OpenAI API", "LangChain", "Docker", "Linux"],
    metrics: "< 500ms Vector Search",
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
  } else if (tagLower.includes("react")) {
    IconComp = ReactIcon
    iconColor = "text-cyan-400"
  } else if (tagLower.includes("fastapi")) {
    IconComp = FastApiIcon
    iconColor = "text-teal-400"
  } else if (tagLower.includes("python")) {
    IconComp = PythonIcon
    iconColor = "text-amber-400"
  } else if (tagLower.includes("node")) {
    IconComp = NodeIcon
    iconColor = "text-emerald-400"
  } else if (tagLower.includes("express")) {
    IconComp = ExpressIcon
    iconColor = "text-zinc-300"
  } else if (tagLower.includes("docker")) {
    IconComp = DockerIcon
    iconColor = "text-cyan-400"
  } else if (tagLower.includes("postgres")) {
    IconComp = PostgresIcon
    iconColor = "text-blue-400"
  } else if (tagLower.includes("mongo")) {
    IconComp = MongoIcon
    iconColor = "text-emerald-500"
  } else if (tagLower.includes("prisma")) {
    IconComp = PrismaIcon
    iconColor = "text-indigo-400"
  } else if (tagLower.includes("typescript")) {
    IconComp = TypeScriptIcon
    iconColor = "text-blue-400"
  } else if (tagLower.includes("tailwind")) {
    IconComp = TailwindIcon
    iconColor = "text-cyan-400"
  } else if (tagLower.includes("redis")) {
    IconComp = RedisIcon
    iconColor = "text-red-400"
  } else if (tagLower.includes("redux")) {
    IconComp = ReduxIcon
    iconColor = "text-purple-400"
  } else if (tagLower.includes("websocket")) {
    IconComp = WebSocketsIcon
    iconColor = "text-emerald-400"
  } else if (tagLower.includes("openai")) {
    IconComp = OpenAiIcon
    iconColor = "text-purple-400"
  } else if (tagLower.includes("langchain")) {
    IconComp = LangChainIcon
    iconColor = "text-amber-400"
  } else if (tagLower.includes("linux")) {
    IconComp = LinuxIcon
    iconColor = "text-amber-400"
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
            onClick={() => {
              if (project.presetKey && PRESET_PLANS[project.presetKey]) {
                onInspectPlan(PRESET_PLANS[project.presetKey])
              }
            }}
            className="group p-6 rounded-2xl bg-[#121215] border border-[#222228] hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between card-glow relative cursor-pointer"
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
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onInspectPlan(PRESET_PLANS[project.presetKey!])
                  }}
                  className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 transition"
                >
                  <Sparkles className="w-3.5 h-3.5" /> View Architecture Plan & Details
                </button>
              )}

              <div className="flex items-center gap-3 ml-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
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
