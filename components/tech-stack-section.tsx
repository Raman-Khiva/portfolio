"use client"

import React from "react"
import {
  Code2,
  Server,
  Database,
  Cloud,
  Terminal,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  GitBranch,
  Box,
  Globe,
  Lock,
} from "lucide-react"
import {
  ReactIcon,
  NextIcon,
  NodeIcon,
  PostgresIcon,
  PythonIcon,
  DockerIcon,
  TypeScriptIcon,
  TailwindIcon,
  RedisIcon,
  LeetCodeIcon,
  CppIcon,
  ReduxIcon,
  ExpressIcon,
  FastApiIcon,
  MongoIcon,
  PrismaIcon,
  AwsIcon,
  VercelIcon,
  NginxIcon,
  GitIcon,
  LinuxIcon,
  OpenAiIcon,
  LangChainIcon,
  SwaggerIcon,
  PydanticIcon,
} from "@/components/icons"

interface TechBadge {
  name: string
  icon?: React.ElementType
  iconColor?: string
  tag?: string
}

interface TechCategory {
  title: string
  icon: React.ElementType
  color: string
  badgeColor: string
  tools: TechBadge[]
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frontend & UI",
    icon: Code2,
    color: "text-amber-400",
    badgeColor: "border-amber-500/20 hover:border-amber-400/50",
    tools: [
      { name: "React 19", icon: ReactIcon, iconColor: "text-cyan-400" },
      { name: "Next.js 16 (App Router)", icon: NextIcon, iconColor: "text-white" },
      { name: "TypeScript", icon: TypeScriptIcon, iconColor: "text-blue-400" },
      { name: "Redux & RTK Query", icon: ReduxIcon, iconColor: "text-purple-400" },
      { name: "Tailwind CSS v4", icon: TailwindIcon, iconColor: "text-teal-400" },
      { name: "HTML5 Canvas", icon: Box, iconColor: "text-amber-400" },
      { name: "WebSockets Client", icon: Globe, iconColor: "text-emerald-400" },
      { name: "JavaScript (ES6+)", icon: Code2, iconColor: "text-yellow-400" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "text-cyan-400",
    badgeColor: "border-cyan-500/20 hover:border-cyan-400/50",
    tools: [
      { name: "Node.js", icon: NodeIcon, iconColor: "text-emerald-400" },
      { name: "Express.js", icon: ExpressIcon, iconColor: "text-zinc-300" },
      { name: "FastAPI (Python)", icon: FastApiIcon, iconColor: "text-teal-400" },
      { name: "RESTful Microservices", icon: Server, iconColor: "text-blue-400" },
      { name: "AuthN / AuthZ (JWT & OAuth)", icon: Lock, iconColor: "text-red-400" },
      { name: "WebSockets & Pub/Sub", icon: Globe, iconColor: "text-cyan-400" },
      { name: "Role-Based Access (RBAC)", icon: ShieldCheck, iconColor: "text-purple-400" },
      { name: "OpenAPI / Swagger", icon: SwaggerIcon, iconColor: "text-emerald-400" },
    ],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    color: "text-emerald-400",
    badgeColor: "border-emerald-500/20 hover:border-emerald-400/50",
    tools: [
      { name: "PostgreSQL", icon: PostgresIcon, iconColor: "text-blue-400" },
      { name: "MongoDB", icon: MongoIcon, iconColor: "text-emerald-500" },
      { name: "Prisma ORM", icon: PrismaIcon, iconColor: "text-indigo-400" },
      { name: "Redis (Cache & Rate Limiter)", icon: RedisIcon, iconColor: "text-red-500" },
      { name: "Vector DBs (Chroma/FAISS)", icon: Cpu, iconColor: "text-amber-400" },
      { name: "B-Tree Index Tuning", icon: Database, iconColor: "text-cyan-400" },
      { name: "SQL Query Optimization", icon: Database, iconColor: "text-blue-300" },
    ],
  },
  {
    title: "DevOps, Linux & Remote Admin",
    icon: Cloud,
    color: "text-purple-400",
    badgeColor: "border-purple-500/20 hover:border-purple-400/50",
    tools: [
      { name: "Linux Systems & Administration", icon: LinuxIcon, iconColor: "text-amber-400" },
      { name: "Remote Machine Admin (SSH)", icon: Terminal, iconColor: "text-cyan-400" },
      { name: "Headless Server & Systemd", icon: Server, iconColor: "text-emerald-400" },
      { name: "Docker & Compose", icon: DockerIcon, iconColor: "text-cyan-400" },
      { name: "AWS (EC2, ECS, S3)", icon: AwsIcon, iconColor: "text-amber-500" },
      { name: "Git & GitHub Actions", icon: GitIcon, iconColor: "text-orange-400" },
      { name: "Vercel Edge Deployments", icon: VercelIcon, iconColor: "text-white" },
      { name: "Nginx Reverse Proxy", icon: NginxIcon, iconColor: "text-emerald-400" },
      { name: "CI/CD Automations", icon: Zap, iconColor: "text-blue-400" },
    ],
  },
  {
    title: "Languages & Core Systems",
    icon: Terminal,
    color: "text-yellow-400",
    badgeColor: "border-yellow-500/20 hover:border-yellow-400/50",
    tools: [
      { name: "C++ (C++17/20 & STL)", icon: CppIcon, iconColor: "text-cyan-400" },
      { name: "Python 3", icon: PythonIcon, iconColor: "text-amber-400" },
      { name: "TypeScript", icon: TypeScriptIcon, iconColor: "text-blue-400" },
      { name: "JavaScript", icon: Code2, iconColor: "text-yellow-400" },
      { name: "SQL", icon: Database, iconColor: "text-indigo-400" },
      { name: "LeetCode CP", icon: LeetCodeIcon, iconColor: "text-amber-400" },
      { name: "Object-Oriented Design (OOPs)", icon: Terminal, iconColor: "text-purple-400" },
    ],
  },
  {
    title: "AI & ML Systems",
    icon: Sparkles,
    color: "text-emerald-400",
    badgeColor: "border-emerald-500/20 hover:border-emerald-400/50",
    tools: [
      { name: "RAG Architecture", icon: Sparkles, iconColor: "text-emerald-400" },
      { name: "Vector Embeddings & Search", icon: Cpu, iconColor: "text-cyan-400" },
      { name: "LangChain / LLM Chains", icon: LangChainIcon, iconColor: "text-amber-400" },
      { name: "OpenAI & OpenRouter APIs", icon: OpenAiIcon, iconColor: "text-purple-400" },
      { name: "Pydantic Async Schemas", icon: PydanticIcon, iconColor: "text-blue-400" },
      { name: "Document Context Retrieval", icon: Layers, iconColor: "text-emerald-400" },
    ],
  },
]

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-16 px-4 max-w-5xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
          Tech Stack & Tooling
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
          Technologies & Tools I Know
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2">
          Categorized inventory of tools, languages, databases, and frameworks used across 10+ shipped production projects.
        </p>
      </div>

      {/* Categorized Tech Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECH_CATEGORIES.map((cat, idx) => {
          const CatIcon = cat.icon
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#121215] border border-[#222228] hover:border-zinc-700 transition-all duration-300 card-glow flex flex-col gap-4"
            >
              {/* Category Title */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#1c1c24]">
                <div className="w-8 h-8 rounded-xl bg-[#1a1a22] border border-[#2a2a38] flex items-center justify-center shrink-0">
                  <CatIcon className={`w-4 h-4 ${cat.color}`} />
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight">{cat.title}</h3>
              </div>

              {/* Tools Flex Wrap */}
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool, tIdx) => {
                  const ToolIcon = tool.icon || Code2
                  return (
                    <div
                      key={tIdx}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#16161b] hover:bg-[#1e1e26] border ${cat.badgeColor} transition-all duration-200 group cursor-default`}
                    >
                      <ToolIcon className={`w-3.5 h-3.5 ${tool.iconColor || "text-zinc-300"} group-hover:scale-110 transition-transform shrink-0`} />
                      <span className="text-xs font-medium text-zinc-200 group-hover:text-white">
                        {tool.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
