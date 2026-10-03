import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { SkillsSection } from "./components/SkillsSection";
import { FeaturedProjectSection } from "./components/FeaturedProjectSection";
import { LeadershipSection } from "./components/LeadershipSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300 relative selection:bg-[#8B7FFF]/30 selection:text-[#00E5FF]">
        {/* Custom cursor with trailing physics */}
        <CustomCursor />

          {/* Strict 3-Zone Top Bar Contract Navbar */}
          <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

          {/* Main Content Sections */}
          <main className="relative">
            {/* 1. Hero Section with Mouse Parallax & 3D Tilt */}
            <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

            {/* Hairline subtle divider */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <div className="h-px w-full bg-neutral-200/80 dark:bg-white/[0.06]" />
            </div>

            {/* 2. About Section & Live Interactive Angular Architecture Sandbox */}
            <AboutSection />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <div className="h-px w-full bg-neutral-200/80 dark:bg-white/[0.06]" />
            </div>

            {/* 3. Work Experience Interactive Timeline */}
            <ExperienceTimeline />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <div className="h-px w-full bg-neutral-200/80 dark:bg-white/[0.06]" />
            </div>

            {/* 4. Technical Skills 3D Grid */}
            <SkillsSection />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <div className="h-px w-full bg-neutral-200/80 dark:bg-white/[0.06]" />
            </div>

            {/* 5. Featured Project Showcase (HealthAI Egypt & Live Triage Simulator) */}
            <FeaturedProjectSection />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <div className="h-px w-full bg-neutral-200/80 dark:bg-white/[0.06]" />
            </div>

            {/* 6. Leadership & Community (GDSC & Microsoft) */}
            <LeadershipSection />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <div className="h-px w-full bg-neutral-200/80 dark:bg-white/[0.06]" />
            </div>

            {/* 7. Education & Certifications */}
            <EducationSection />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <div className="h-px w-full bg-neutral-200/80 dark:bg-white/[0.06]" />
            </div>

            {/* 8. Contact Section & Direct Form */}
            <ContactSection />
          </main>

          {/* 9. Minimalist Footer */}
          <Footer />

          {/* Interactive Printable Curriculum Vitae Modal */}
          <ResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        </div>
    </ThemeProvider>
  );
}
