"use client"

import React, { useState } from "react"
import {
  X,
  Zap,
  CheckCircle2,
  Cpu,
  Layers,
  GitBranch,
  ArrowRight,
  Sparkles,
  Calendar,
  Send,
  Terminal,
} from "lucide-react"

export interface ProjectPlanData {
  title: string
  prompt: string
  category: string
  stack: string[]
  timeline: string
  architecture: {
    frontend: string
    backend: string
    database: string
    cloud: string
  }
  phases: {
    title: string
    description: string
    tasks: string[]
  }[]
  stats: {
    latency: string
    uptime: string
    throughput: string
  }
}

interface ProjectPlanModalProps {
  isOpen: boolean
  onClose: () => void
  planData: ProjectPlanData | null
  onBookConsultation: (topic: string) => void
}

export function ProjectPlanModal({
  isOpen,
  onClose,
  planData,
  onBookConsultation,
}: ProjectPlanModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "roadmap">("overview")

  if (!isOpen || !planData) return null

  const handleDiscussProject = () => {
    onBookConsultation(`Inquiry regarding built project: ${planData.title}`)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#101014] border border-[#22222a] rounded-2xl shadow-2xl text-zinc-100 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#101014]/90 backdrop-blur-md border-b border-[#22222a]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1a1a22] border border-[#2e2e3a] flex items-center justify-center text-amber-400 badge-glow">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono">
                  {planData.category}
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Production Live
                </span>
              </div>
              <h2 className="text-lg font-bold text-white tracking-tight mt-0.5">{planData.title}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1a1a22] border border-[#2a2a35] text-zinc-400 hover:text-white hover:bg-[#252532] transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-[#1c1c24] bg-[#121216]">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === "overview"
                ? "border-amber-400 text-white"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Project Case Study
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === "architecture"
                ? "border-amber-400 text-white"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Technical Architecture
          </button>
          <button
            onClick={() => setActiveTab("roadmap")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === "roadmap"
                ? "border-amber-400 text-white"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Development Highlights
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* System Purpose & Scope */}
          <div className="p-4 rounded-xl bg-[#141419] border border-[#22222d] flex items-start gap-3">
            <Terminal className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">System Objective & Scope</div>
              <p className="text-sm font-mono text-zinc-300">&quot;{planData.prompt}&quot;</p>
            </div>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stack Used */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Technologies & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {planData.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#1a1a22] border border-[#2a2a38] text-sm text-zinc-200 font-medium flex items-center gap-1.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Performance & Reliability Benchmarks */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#141419] border border-[#22222c] text-center">
                  <div className="text-xs text-zinc-500 font-mono">Response Speed</div>
                  <div className="text-xl font-bold text-white mt-1">{planData.stats.latency}</div>
                </div>
                <div className="p-4 rounded-xl bg-[#141419] border border-[#22222c] text-center">
                  <div className="text-xs text-zinc-500 font-mono">System Availability</div>
                  <div className="text-xl font-bold text-white mt-1">{planData.stats.uptime}</div>
                </div>
                <div className="p-4 rounded-xl bg-[#141419] border border-[#22222c] text-center">
                  <div className="text-xs text-zinc-500 font-mono">Throughput</div>
                  <div className="text-xl font-bold text-white mt-1">{planData.stats.throughput}</div>
                </div>
              </div>

              {/* Key Features Built */}
              <div>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Engineering Deliverables & Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#15151b] border border-[#22222c] flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm text-zinc-300">Production-ready CI/CD Docker setup</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#15151b] border border-[#22222c] flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm text-zinc-300">Type-safe End-to-End Architecture</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#15151b] border border-[#22222c] flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm text-zinc-300">Scalable Database & Caching layer</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#15151b] border border-[#22222c] flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm text-zinc-300">Automated Monitoring & Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#141419] border border-[#22222d] space-y-2">
                <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
                  <Layers className="w-4 h-4" /> Frontend & User Interface Architecture
                </div>
                <p className="text-sm text-zinc-300 font-mono leading-relaxed">{planData.architecture.frontend}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#141419] border border-[#22222d] space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                  <Cpu className="w-4 h-4" /> Backend API & Service Layer
                </div>
                <p className="text-sm text-zinc-300 font-mono leading-relaxed">{planData.architecture.backend}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#141419] border border-[#22222d] space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                  <Zap className="w-4 h-4" /> Database Schema & Caching Engine
                </div>
                <p className="text-sm text-zinc-300 font-mono leading-relaxed">{planData.architecture.database}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#141419] border border-[#22222d] space-y-2">
                <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
                  <GitBranch className="w-4 h-4" /> Cloud Deployment & DevOps Infrastructure
                </div>
                <p className="text-sm text-zinc-300 font-mono leading-relaxed">{planData.architecture.cloud}</p>
              </div>
            </div>
          )}

          {activeTab === "roadmap" && (
            <div className="space-y-4">
              {planData.phases.map((phase, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#141419] border border-[#22222d] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Phase 0{idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-white">{phase.title}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{phase.description}</p>
                  <ul className="space-y-1.5 pt-1">
                    {phase.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="text-xs text-zinc-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 z-10 flex items-center justify-between px-6 py-4 bg-[#101014]/95 backdrop-blur-md border-t border-[#22222a]">
          <div className="text-xs text-zinc-400 flex items-center gap-1.5 font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Built & Deployed by Raman Singh
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition"
            >
              Close
            </button>
            <button
              onClick={handleDiscussProject}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm flex items-center gap-2 transition shadow-lg shadow-amber-400/10 active:scale-95"
            >
              Discuss This Architecture <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
