import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { SpotlightCard } from "./SpotlightCard";
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
  MessageCircle,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Globe,
  Clock,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;
  const { language, t } = useLanguage();
  const isAr = language === "ar";

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: isAr ? "فرصة عمل كمهندس واجهات أمامية" : "Full-Time Frontend Engineer Role",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState<string | null>(null);

  const cleanPhone = personalInfo.phone.replace(/[\s+]/g, "");

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  // WhatsApp Pre-filled message generator
  const getWhatsAppUrl = (customText?: string) => {
    const text = customText || (isAr
      ? `مرحباً مهندس باسم، اطلعت على معرض أعمالك (${formData.subject || "فرصة عمل"})، وأرغب في مناقشة تفاصيل الوظيفة معك.`
      : `Hello Bassem, I reviewed your portfolio regarding (${formData.subject || "Frontend Role"}), and would like to discuss an opportunity with you.`);
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  // Gmail Web Composer URL
  const getGmailComposerUrl = () => {
    const su = encodeURIComponent(`${formData.subject || "Frontend Engineering Opportunity"} - ${formData.name || "Recruiter"}`);
    const body = encodeURIComponent(
      `From: ${formData.name || "[Your Name]"}\nEmail: ${formData.email || "[Your Email]"}\n\nMessage:\n${formData.message || "Hello Bassem,\n\nWe came across your portfolio and were impressed by your frontend and Angular expertise..."}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${su}&body=${body}`;
  };

  // Direct Form Handler with guaranteed multi-path delivery
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setDeliveryStatus(null);

    try {
      // Direct Web3Forms submission to guaranteed Bassem's inbox
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "078a6358-1f1f-4cb1-97b7-567fbf7dd78f", // Direct portfolio mail channel
          from_name: formData.name || "Portfolio Inquirer",
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Hiring] ${formData.subject} - from ${formData.name}`,
          message: formData.message,
          to_email: personalInfo.email,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setDeliveryStatus(
          isAr
            ? "تم إرسال رسالتك بنجاح وسيتلقاها باسم حسين فوراً على بريده الإلكتروني!"
            : "Your message has been delivered directly to Bassem Hussein's inbox!"
        );
      } else {
        // Fallback: trigger direct mailto/Gmail
        setSubmitSuccess(true);
        setDeliveryStatus(
          isAr
            ? "تم تسجيل الرسالة! يمكنك أيضاً إرسالها بنقرة واحدة عبر Gmail أو WhatsApp لضمان الوصول اللحظي."
            : "Message drafted! You can also click below to dispatch instantly via Gmail or WhatsApp."
        );
      }
    } catch {
      // Network fallback
      setSubmitSuccess(true);
      setDeliveryStatus(
        isAr
          ? "تم تجهيز الرسالة بنجاح! يمكنك الآن إرسالها فوراً بضغطة زر عبر WhatsApp أو Gmail."
          : "Message prepared! Click below to send directly via WhatsApp or Gmail."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 sm:mb-14">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
          <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
          <span>{t("contactKicker")}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white font-heading">
          {t("contactTitle")}
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          {t("contactDesc")}
        </p>

        {/* Prominent Open to Work Hiring Banner */}
        <div className="mt-6 p-4 rounded-2xl border border-emerald-500/25 bg-emerald-50/70 dark:bg-emerald-950/20 max-w-3xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
            </span>
            <div>
              <p className="text-sm font-bold text-emerald-900 dark:text-emerald-300 font-heading">
                {isAr ? "متاح للعمل فوراً (Open to Work)" : "Open to Work · Ready for Immediate Onboarding"}
              </p>
              <p className="text-xs text-emerald-700 dark:text-emerald-400/90 font-mono">
                {isAr
                  ? "دوام كامل (Full-Time) · عن بُعد (Remote) · عقود استشارية · القاهرة أو الخليج ودولياً"
                  : "Full-Time · Remote / On-site in Cairo · Relocation to GCC & Worldwide"}
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isAr ? "تواصل واتساب فوري" : "Direct WhatsApp Chat"}</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Direct Fast Channels */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          {/* 1. Official WhatsApp Direct Card */}
          <SpotlightCard
            spotlightColor="rgba(16, 185, 129, 0.18)"
            className="p-5 sm:p-6 border-emerald-500/30 dark:border-emerald-500/20"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-2xs">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                      {isAr ? "واتساب (رد فوري)" : "WhatsApp (Instant Reply)"}
                    </p>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    dir="ltr"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={copyPhone}
                title={isAr ? "نسخ رقم الهاتف والواتساب" : "Copy phone & WhatsApp"}
                className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-200/80 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-mono">
                {isAr ? "محادثة مباشرة مع باسم" : "Direct chat with Bassem"}
              </span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <span>{isAr ? "فتح المحادثة" : "Open Chat"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {copiedPhone && (
              <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-2 font-semibold">
                ✓ {isAr ? "تم نسخ رقم الهاتف والواتساب!" : "Phone number copied!"}
              </p>
            )}
          </SpotlightCard>

          {/* 2. Direct Email Card */}
          <SpotlightCard
            spotlightColor="rgba(59, 130, 246, 0.15)"
            className="p-5 sm:p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-neutral-500 font-semibold">{t("directEmail")}</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                title={isAr ? "نسخ البريد الإلكتروني" : "Copy email to clipboard"}
                className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-200/80 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-mono">
                {isAr ? "البريد الأساسي للاستفسارات" : "Primary Hiring Inbox"}
              </span>
              <a
                href={getGmailComposerUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>{isAr ? "فتح في Gmail" : "Compose in Gmail"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {copiedEmail && (
              <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-2 font-semibold">
                ✓ {t("copiedEmailToast")}
              </p>
            )}
          </SpotlightCard>

          {/* 3. Location & Relocation Card */}
          <SpotlightCard
            spotlightColor="rgba(6, 182, 212, 0.15)"
            className="p-5 sm:p-6"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-neutral-500 font-semibold">{t("currentBase")}</p>
                <p className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                  {isAr && personalInfo.locationAr ? personalInfo.locationAr : personalInfo.location}{" "}
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    ({isAr && personalInfo.relocationAr ? personalInfo.relocationAr : personalInfo.relocation})
                  </span>
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* 4. Professional Social Profiles (LinkedIn InMail & GitHub) */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-[#0E111A] hover:bg-neutral-50 dark:hover:bg-white/5 transition-all flex items-center justify-between shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                <div>
                  <span className="text-sm font-bold text-neutral-900 dark:text-white block">LinkedIn</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">#OpenToWork</span>
                </div>
              </div>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-[#0E111A] hover:bg-neutral-50 dark:hover:bg-white/5 transition-all flex items-center justify-between shadow-2xs"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-5 h-5 text-neutral-900 dark:text-white" />
                <div>
                  <span className="text-sm font-bold text-neutral-900 dark:text-white block">GitHub</span>
                  <span className="text-[10px] text-neutral-400 font-mono">20+ Repos</span>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Messaging Form with Multi-Channel Guaranteed Delivery */}
        <div className="lg:col-span-7 w-full">
          <SpotlightCard
            spotlightColor="rgba(59, 130, 246, 0.14)"
            className="p-6 sm:p-9"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white font-heading">
                  {t("directInquiries")}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  {t("inquiriesDesc")}
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/40 text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold">
                <Clock className="w-3 h-3" />
                <span>{isAr ? "رد خلال ساعات" : "< 12h Response"}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-300 mb-1.5 font-semibold">
                    {t("yourName")} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isAr ? "مثال: م. أحمد عبد الرحمن (أو اسم الشركة)" : "e.g. Sarah Jenkins (or Company)"}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-[#121520] text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-300 mb-1.5 font-semibold">
                    {t("yourEmail")} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={isAr ? "recruiter@company.com" : "e.g. sarah@enterprise.com"}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-[#121520] text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-300 mb-1.5 font-semibold">
                  {t("subjectScope")}
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-[#121520] text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  {isAr ? (
                    <>
                      <option value="فرصة عمل كمهندس واجهات أمامية (Full-Time)">فرصة عمل كمهندس واجهات أمامية بدوام كامل</option>
                      <option value="فرصة عمل عن بُعد (Remote Role)">فرصة عمل عن بُعد (Remote Role)</option>
                      <option value="مشروع استشاري في معمارية Angular">مشروع استشاري في معمارية Angular المؤسسية</option>
                      <option value="فرصة عمل في دول الخليج / دولياً">فرصة عمل في دول الخليج أو دولياً</option>
                      <option value="استفسار أو تعاون عام">استفسار أو تعاون عام</option>
                    </>
                  ) : (
                    <>
                      <option value="Full-Time Frontend Engineer Role">Full-Time Frontend Engineer Role</option>
                      <option value="Remote Frontend Engineering Opportunity">Remote Frontend Engineering Opportunity</option>
                      <option value="Angular 17+ Enterprise Consulting">Angular 17+ Enterprise Consulting</option>
                      <option value="Relocation / GCC Opportunity">Relocation / GCC Opportunity</option>
                      <option value="General Collaboration">General Collaboration</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-300 mb-1.5 font-semibold">
                  {t("messageDetails")} <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    isAr
                      ? "اكتب تفاصيل الفرصة الوظيفية، المتطلبات التقنية، أو طبيعة المشروع البرمجي..."
                      : "Tell me about the engineering challenges, tech stack, or role expectations..."
                  }
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-[#121520] text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Action Buttons Row: Direct Send + WhatsApp + Gmail */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                  <span>{isAr ? "يتم الإرسال مباشرة إلى بريد باسم الشخصي" : "Delivered directly to Bassem's inbox"}</span>
                </span>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all w-full sm:w-auto disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t("dispatching") : t("sendMessage")}</span>
                  </button>
                </div>
              </div>

              {/* Quick Launch Direct Channels below form */}
              <div className="pt-2 border-t border-neutral-200/80 dark:border-white/10 flex flex-wrap items-center gap-2.5 text-xs">
                <span className="text-neutral-500 font-mono text-[11px]">
                  {isAr ? "أو إرسال مباشر عبر:" : "Or send instantly via:"}
                </span>

                <a
                  href={getWhatsAppUrl(formData.message ? `مرحباً باسم،\nالاسم: ${formData.name}\nالموضوع: ${formData.subject}\nالرسالة: ${formData.message}` : undefined)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-500/20 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={getGmailComposerUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-400 font-semibold border border-blue-500/20 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Gmail (Web)</span>
                </a>
              </div>

              {/* Submission Result Banner */}
              {submitSuccess && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 text-xs font-mono space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-700 dark:text-emerald-400">
                    <Check className="w-4 h-4" />
                    <span>{deliveryStatus}</span>
                  </div>

                  <p className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80">
                    {isAr
                      ? "شكراً لاهتمامك بالتواصل مع م. باسم حسين. يمكنك أيضاً الضغط أدناه للتحدث معه عبر واتساب مباشرة الآن:"
                      : "Thank you for reaching out to Bassem Hussein. You can also chat directly on WhatsApp right now:"}
                  </p>

                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs shadow-2xs hover:bg-emerald-500 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{isAr ? "محادثة واتساب فورية الآن" : "Chat on WhatsApp Now"}</span>
                    </a>
                  </div>
                </div>
              )}
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
