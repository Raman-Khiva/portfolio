"use client"

import React, { useState } from "react"
import { HeaderNav } from "@/components/header-nav"
import { HeroSection, PRESET_PLANS } from "@/components/hero-section"
import { ProjectPlanModal, ProjectPlanData } from "@/components/project-plan-modal"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsMatrix } from "@/components/skills-matrix"
import { TechStackSection } from "@/components/tech-stack-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  const [selectedPlan, setSelectedPlan] = useState<ProjectPlanData | null>(null)
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false)
  const [consultationTopic, setConsultationTopic] = useState("")

  const handleOpenPlan = (plan: ProjectPlanData) => {
    setSelectedPlan(plan)
    setIsPlanModalOpen(true)
  }

  const handleClosePlan = () => {
    setIsPlanModalOpen(false)
  }

  const handleBookConsultation = (topic: string) => {
    setConsultationTopic(topic)
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 selection:bg-amber-400 selection:text-black font-sans relative overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header Navigation */}
      <HeaderNav />

      {/* Main Content */}
      <main className="flex flex-col gap-8 pb-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Projects Showcase — Only section that opens project details modal */}
        <ProjectsSection onInspectPlan={handleOpenPlan} />

        {/* Role Competencies & Capabilities */}
        <SkillsMatrix />

        {/* Dedicated Tech & Tools Inventory */}
        <TechStackSection />

        {/* Experience & Career Milestones */}
        <ExperienceTimeline />

        {/* Contact & Booking Section */}
        <ContactSection initialTopic={consultationTopic} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Plan Inspector Modal */}
      <ProjectPlanModal
        isOpen={isPlanModalOpen}
        onClose={handleClosePlan}
        planData={selectedPlan}
        onBookConsultation={handleBookConsultation}
      />
    </div>
  )
}
