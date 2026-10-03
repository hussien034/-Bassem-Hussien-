import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { TiltCard } from "./TiltCard";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  MessageSquare,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time Role Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject + " - " + formData.name
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 sm:mb-14">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-[#8B7FFF] tracking-wider uppercase mb-2">
          <MessageSquare className="w-3.5 h-3.5 text-sky-500 dark:text-[#00E5FF]" />
          <span>07. Connect & Collaboration</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          Let's Build Something Exceptional Together
        </h2>
        <p className="mt-4 text-slate-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Open to full-time Frontend Engineer roles, enterprise Angular consulting, and high-impact software initiatives globally (willing to relocate).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Direct Contacts & Channels */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          {/* Email 3D Card */}
          <TiltCard
            maxTilt={6}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-5 sm:p-6 shadow-xs hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-[#8B7FFF]/10 flex items-center justify-center text-indigo-600 dark:text-[#8B7FFF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-500 font-semibold">Direct Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-[#8B7FFF] transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                title="Copy email to clipboard"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copiedEmail && (
              <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-2 font-semibold">
                ✓ Copied to clipboard!
              </p>
            )}
          </TiltCard>

          {/* Phone Card */}
          <TiltCard
            maxTilt={6}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-5 sm:p-6 shadow-xs hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-[#00E5FF]/10 flex items-center justify-center text-sky-600 dark:text-[#00E5FF]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-500 font-semibold">Phone & WhatsApp</p>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-[#00E5FF] transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </TiltCard>

          {/* Location & Relocation Card */}
          <TiltCard
            maxTilt={6}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-5 sm:p-6 shadow-xs hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-slate-500 font-semibold">Current Base & Mobility</p>
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {personalInfo.location}{" "}
                  <span className="text-xs font-normal text-emerald-600 dark:text-emerald-400">
                    ({personalInfo.relocation})
                  </span>
                </p>
              </div>
            </div>
          </TiltCard>

          {/* Social Profiles */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] hover:bg-slate-50 dark:hover:bg-[#8B7FFF]/10 transition-all flex items-center justify-between shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                <span className="text-sm font-bold text-slate-900 dark:text-white">LinkedIn</span>
              </div>
              <span className="text-xs font-mono text-indigo-600 dark:text-[#8B7FFF] group-hover:translate-x-1 transition-transform">↗</span>
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex items-center justify-between shadow-xs"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-5 h-5 text-slate-900 dark:text-white" />
                <span className="text-sm font-bold text-slate-900 dark:text-white">GitHub</span>
              </div>
              <span className="text-xs font-mono text-sky-600 dark:text-[#00E5FF] group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7 w-full">
          <TiltCard
            maxTilt={4}
            className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12121A] p-6 sm:p-9 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
              Direct Inquiries & Opportunities
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 mt-1">
              Send a direct message or recruiter brief. All messages receive a response within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-neutral-300 mb-1.5 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#181824] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-neutral-300 mb-1.5 font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@enterprise.com"
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#181824] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 dark:text-neutral-300 mb-1.5 font-semibold">
                  Subject / Scope
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#181824] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="Full-Time Frontend Engineer Role">Full-Time Frontend Engineer Role</option>
                  <option value="Angular 17+ Enterprise Consulting">Angular 17+ Enterprise Consulting</option>
                  <option value="Technical Speaking / Community Mentorship">Technical Speaking / Community Mentorship</option>
                  <option value="Other Opportunity">Other Opportunity</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 dark:text-neutral-300 mb-1.5 font-semibold">
                  Project Details or Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the engineering challenges, tech stack, or role expectations..."
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#181824] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-slate-500">
                  ⚡ Typically replies in &lt; 12 hours
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-[#8B7FFF] dark:hover:bg-[#796bf0] text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.35)] disabled:opacity-50 transition-all w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Dispatching..." : "Send Message"}</span>
                </button>
              </div>

              {submitSuccess && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-semibold">
                  ✓ Message drafted! Opening your mail client to send directly to bassemh594@gmail.com.
                </div>
              )}
            </form>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
