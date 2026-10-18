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
  Clock,
  AlertCircle,
  Inbox,
  ArrowRight,
} from "lucide-react";

import {
  sendContactEmail,
  createGmailComposeUrl,
  createMailtoUrl,
  EmailSendResult,
} from "../utils/emailService";

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
  const [submissionResult, setSubmissionResult] = useState<EmailSendResult | null>(null);

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

  // Quick Test Data filler for effortless testing
  const fillTestData = () => {
    setFormData({
      name: isAr ? "م. كريم الشناوي (Tech Lead)" : "Alex Turner (Engineering Lead)",
      email: "recruiter.alex@company.tech",
      subject: isAr ? "فرصة عمل كمهندس واجهات أمامية (Full-Time)" : "Full-Time Frontend Engineer Role",
      message: isAr
        ? "مرحباً باسم، تفقدنا معرض أعمالك المتميز وخبرتك في معمارية Angular والذكاء الاصطناعي، ونرغب في تحديد مقابلة تقنية لمنصب Senior Frontend Developer."
        : "Hi Bassem, we reviewed your impressive Angular portfolio and AI systems. We'd love to schedule an interview for our Senior Frontend Engineer position.",
    });
  };

  // WhatsApp Pre-filled message generator
  const getWhatsAppUrl = (customText?: string) => {
    const text =
      customText ||
      (isAr
        ? `مرحباً مهندس باسم،\nالاسم: ${formData.name || "زائر"}\nالموضوع: ${formData.subject || "فرصة عمل"}\nالرسالة: ${formData.message || "أرغب في مناقشة فرصة عمل معك."}`
        : `Hello Bassem,\nFrom: ${formData.name || "Visitor"}\nSubject: ${formData.subject || "Frontend Role"}\nMessage: ${formData.message || "I reviewed your portfolio and would like to discuss an opportunity."}`);
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  // Direct Gmail Web Composer URL
  const getGmailComposerUrl = () => {
    return createGmailComposeUrl({
      recipientEmail: personalInfo.email,
      name: formData.name,
      senderEmail: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
  };

  // Native mailto URL
  const getMailtoUrl = () => {
    return createMailtoUrl({
      recipientEmail: personalInfo.email,
      name: formData.name,
      senderEmail: formData.email,
      subject: formData.subject,
      message: formData.message,
    });
  };

  // Direct Form Handler via FormSubmit AJAX / EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const result = await sendContactEmail(
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          recipientEmail: personalInfo.email,
        },
        isAr
      );

      setSubmissionResult(result);
    } catch (err: any) {
      setSubmissionResult({
        success: false,
        provider: "client_fallback",
        message: isAr
          ? "تعذر الإرسال التلقائي، يمكنك الإرسال مباشرة بضغطة واحدة عبر Gmail أو WhatsApp أدناه."
          : "Automated delivery encountered an issue. Please click below to send directly via Gmail or WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Direct 1-Click Send via Gmail Action
  const handleOpenInGmail = () => {
    window.open(getGmailComposerUrl(), "_blank", "noopener,noreferrer");
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

          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenInGmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs shadow-xs transition-all whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              <span>{isAr ? "إرسال عبر Gmail" : "Compose in Gmail"}</span>
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-xs transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isAr ? "واتساب فوري" : "WhatsApp"}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Direct Fast Channels */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          {/* 1. Official Gmail Direct Card */}
          <SpotlightCard
            spotlightColor="rgba(239, 68, 68, 0.18)"
            className="p-5 sm:p-6 border-red-500/20"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/40 flex items-center justify-center text-red-600 dark:text-red-400 shadow-2xs">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-mono uppercase text-red-600 dark:text-red-400 font-bold">
                      {isAr ? "Gmail المباشر (استلام فوري)" : "Direct Gmail Inbox"}
                    </p>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors break-all"
                    dir="ltr"
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

            <div className="mt-4 pt-3 border-t border-neutral-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs text-neutral-500 font-mono">
                {isAr ? "صندوق بريد المهندس باسم الشخصي" : "Bassem's Personal Hiring Inbox"}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleOpenInGmail}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:underline cursor-pointer"
                >
                  <span>{isAr ? "فتح Gmail Web" : "Open in Gmail"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {copiedEmail && (
              <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-2 font-semibold">
                ✓ {t("copiedEmailToast")}
              </p>
            )}
          </SpotlightCard>

          {/* 2. Official WhatsApp Direct Card */}
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

          {/* 4. Professional Social Profiles */}
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

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={fillTestData}
                  title={isAr ? "ملء بيانات تجريبية سريعة لاختبار الإرسال" : "Fill test recruiter data to test form"}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/40 border border-blue-200 dark:border-blue-800/40 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-blue-500" />
                  <span>{isAr ? "تجربة سريعة (Test)" : "Quick Test Fill"}</span>
                </button>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/40 text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold">
                  <Clock className="w-3 h-3" />
                  <span>{isAr ? "رد خلال ساعات" : "< 12h Response"}</span>
                </div>
              </div>
            </div>

            {/* Email destination indicator badge */}
            <div className="mt-4 px-3.5 py-2 rounded-xl bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Inbox className="w-4 h-4 text-red-500" />
                <span className="text-neutral-600 dark:text-neutral-300 font-mono text-[11px]">
                  {isAr ? "المستلم المباشر:" : "Direct Destination:"}
                </span>
                <span className="font-mono font-bold text-neutral-900 dark:text-white" dir="ltr">
                  {personalInfo.email}
                </span>
              </div>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {isAr ? "نشط ومراقب" : "Active & Monitored"}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
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
                      <option value="بناء نظام مخصص أو تطبيق Full Stack / AI">بناء نظام مخصص أو تطبيق Full Stack / AI</option>
                      <option value="فرصة عمل في دول الخليج / دولياً">فرصة عمل في دول الخليج أو دولياً</option>
                      <option value="استفسار أو تعاون عام">استفسار أو تعاون عام</option>
                    </>
                  ) : (
                    <>
                      <option value="Full-Time Frontend Engineer Role">Full-Time Frontend Engineer Role</option>
                      <option value="Remote Frontend Engineering Opportunity">Remote Frontend Engineering Opportunity</option>
                      <option value="Angular 17+ Enterprise Consulting">Angular 17+ Enterprise Consulting</option>
                      <option value="Custom System / Full Stack & AI Project">Custom System / Full Stack & AI Project</option>
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
                      ? "اكتب تفاصيل الفرصة الوظيفية، متطلبات النظام، أو طبيعة المشروع البرمجي..."
                      : "Tell me about the engineering challenges, tech stack, or role expectations..."
                  }
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-[#121520] text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                  <span>{isAr ? "يتم التوجيه مباشرة لبريد باسم bassemh594@gmail.com" : "Delivered to bassemh594@gmail.com"}</span>
                </span>

                <div className="flex items-center gap-2 flex-wrap">
                  {/* Primary Option 1: Open in Gmail Directly (Guaranteed 100%) */}
                  <button
                    type="button"
                    onClick={handleOpenInGmail}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all w-full sm:w-auto cursor-pointer"
                    title={isAr ? "فتح Gmail Web بالرسالة الجاهزة والإرسال الفوري" : "Open Gmail composer with prefilled message"}
                  >
                    <Mail className="w-4 h-4" />
                    <span>{isAr ? "إرسال عبر Gmail المباشر" : "Send via Gmail (Web)"}</span>
                  </button>

                  {/* Primary Option 2: Automatic Form Submission */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all w-full sm:w-auto disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t("dispatching") : isAr ? "إرسال عبر النموذج" : "Submit Form"}</span>
                  </button>
                </div>
              </div>

              {/* Quick Launch Direct Alternative Channels */}
              <div className="pt-2 border-t border-neutral-200/80 dark:border-white/10 flex flex-wrap items-center gap-2.5 text-xs">
                <span className="text-neutral-500 font-mono text-[11px]">
                  {isAr ? "قنوات بديلة فورية:" : "Instant Channels:"}
                </span>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-500/20 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleOpenInGmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-700 dark:text-red-400 font-semibold border border-red-500/20 transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Gmail Web</span>
                </button>

                <a
                  href={getMailtoUrl()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-200/60 dark:bg-white/10 hover:bg-neutral-200 text-neutral-700 dark:text-neutral-300 font-semibold border border-neutral-300 dark:border-white/10 transition-colors"
                >
                  <span>{isAr ? "تطبيق البريد (Mail App)" : "Default Mail App"}</span>
                </a>
              </div>

              {/* Submission Result Banner */}
              {submissionResult && (
                <div
                  className={`p-4 rounded-xl border text-xs font-mono space-y-2 animate-in fade-in ${
                    submissionResult.success
                      ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-800 dark:text-emerald-300"
                      : submissionResult.needsActivation
                      ? "bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-200"
                      : "bg-blue-500/10 border-blue-500/25 text-blue-900 dark:text-blue-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 font-bold text-sm">
                      {submissionResult.success ? (
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      ) : submissionResult.needsActivation ? (
                        <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      ) : (
                        <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      )}
                      <span>{submissionResult.message}</span>
                    </div>

                    <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border">
                      {submissionResult.provider === "formsubmit"
                        ? "FormSubmit API"
                        : submissionResult.provider === "emailjs"
                        ? "@emailjs/browser"
                        : "Direct Gmail"}
                    </span>
                  </div>

                  {submissionResult.details && (
                    <p className="text-[11px] opacity-90 leading-relaxed">
                      {submissionResult.details}
                    </p>
                  )}

                  {/* Immediate Action Buttons inside the result banner */}
                  <div className="flex items-center gap-2 pt-2 flex-wrap">
                    <button
                      type="button"
                      onClick={handleOpenInGmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white font-semibold text-xs shadow-2xs hover:bg-red-500 transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{isAr ? "إرسال الآن عبر Gmail المباشر" : "Send Now via Gmail"}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs shadow-2xs hover:bg-emerald-500 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{isAr ? "إرسال عبر WhatsApp" : "Send via WhatsApp"}</span>
                    </a>

                    {submissionResult.needsActivation && (
                      <a
                        href="https://mail.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 text-white font-semibold text-xs shadow-2xs hover:bg-amber-500 transition-colors"
                      >
                        <Inbox className="w-3.5 h-3.5" />
                        <span>{isAr ? "فتح صندوق Gmail لتأكيد التفعيل" : "Open Gmail to Activate Form"}</span>
                      </a>
                    )}
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
