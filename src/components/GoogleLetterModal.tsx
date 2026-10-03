import React, { useState } from "react";
import { Download, ExternalLink, ShieldCheck, X, CheckCircle2, FileText } from "lucide-react";

interface GoogleLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleLetterModal: React.FC<GoogleLetterModalProps> = ({ isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch("./Google_Recommendation_Letter_Bassem_Hussein.pdf");
      if (response.ok) {
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = "Google_Recommendation_Letter_Bassem_Hussein.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
      } else {
        const a = document.createElement("a");
        a.href = "./Google_Recommendation_Letter_Bassem_Hussein.pdf";
        a.download = "Google_Recommendation_Letter_Bassem_Hussein.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } catch {
      const a = document.createElement("a");
      a.href = "./Google_Recommendation_Letter_Bassem_Hussein.pdf";
      a.download = "Google_Recommendation_Letter_Bassem_Hussein.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } finally {
      setTimeout(() => setIsDownloading(false), 600);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-100 dark:bg-[#0E0E17] rounded-2xl border border-slate-300 dark:border-white/15 shadow-2xl overflow-hidden max-h-[94vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#141420] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600">
              <ShieldCheck className="w-4 h-4 text-[#4285F4]" />
            </span>
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-heading">
                Official Google Recommendation & Confirmation Letter
              </h2>
              <p className="text-[11px] text-slate-500 font-mono">
                Verified by Google Developer Ecosystem · MENA Region
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#4285F4] hover:bg-[#3367d6] text-white shadow-xs transition-all disabled:opacity-75"
              title="Download official PDF document"
            >
              <Download className={`w-3.5 h-3.5 ${isDownloading ? "animate-bounce" : ""}`} />
              <span>{isDownloading ? "Downloading..." : "Download PDF"}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close letter modal"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Letter Body (Authentic Google Letterhead Design) */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-slate-200/70 dark:bg-[#0A0A0F] flex justify-center">
          <div
            className="w-full max-w-[680px] bg-white text-slate-900 p-6 sm:p-12 shadow-xl border border-slate-300 rounded-sm font-sans relative"
            style={{
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              lineHeight: "1.6",
            }}
          >
            {/* Google Logo Header */}
            <div className="text-center pb-8 pt-2">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight inline-block select-none" style={{ fontFamily: "'Product Sans', system-ui, sans-serif" }}>
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </div>

            {/* Date */}
            <div className="text-sm text-slate-800 font-medium mb-6">
              July 20th, 2022
            </div>

            {/* Salutation */}
            <div className="text-sm text-slate-900 font-medium mb-5">
              To whom it may concern,
            </div>

            {/* Confirmation Paragraph */}
            <div className="text-sm text-slate-800 leading-relaxed mb-5 text-justify">
              Please accept this letter to confirm that{" "}
              <strong>Cairo University - Faculty of Computers and Artificial Intelligence</strong>, is one
              of the Google Developer Students Club in our Google approved communities network. This group
              was approved in July 2022 with the current lead listed below.
            </div>

            {/* Lead Callout Banner */}
            <div className="my-6 p-4 rounded-lg bg-blue-50/80 border-l-4 border-[#4285F4] flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#4285F4] font-bold tracking-wider">
                  Confirmed GDSC Lead
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Basim Husain (Bassem Hussein)
                </h4>
                <p className="text-xs text-slate-600">
                  Google Developer Student Clubs — Cairo University Chapter
                </p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Verified
              </span>
            </div>

            {/* Description of GDSC Program */}
            <div className="text-sm text-slate-800 leading-relaxed mb-5 text-justify">
              Google Developer Student Clubs focus on helping students bridge the gap between theory and
              practice. GDSCs are university based community groups for students interested in Google
              developer technologies. Students from all undergraduate or graduate programs with an interest in
              growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a
              peer-to-peer learning environment and build solutions for local businesses and their community.
              Further info can be found here:
            </div>

            <div className="mb-6">
              <a
                href="https://developers.google.com/community/dsc"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[#1a73e8] hover:underline inline-flex items-center gap-1.5"
              >
                <span>https://developers.google.com/community/dsc</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Closing text */}
            <div className="text-sm text-slate-800 mb-2">
              We thank you for your support to the student communities.
            </div>
            <div className="text-sm text-slate-800 mb-8">
              Please contact me if you have any questions.
            </div>

            <div className="text-sm text-slate-900 font-medium mb-3">
              Very truly yours,
            </div>

            {/* Handwritten Signature Script */}
            <div className="my-2 py-1">
              <span
                className="text-3xl text-slate-900 inline-block italic"
                style={{
                  fontFamily: "'Brush Script MT', 'Dancing Script', 'Segoe Script', cursive",
                  letterSpacing: "1px",
                }}
              >
                Salim Abid
              </span>
            </div>

            {/* Signer Details */}
            <div className="mt-4 pt-1 text-sm text-slate-900">
              <p className="font-bold">Salim Abid</p>
              <p className="text-xs text-slate-700">
                Google Developer EcoSystem Region Lead - Middle East and North Africa
              </p>
              <a
                href="mailto:SalimAbid@google.com"
                className="text-xs text-[#1a73e8] hover:underline font-medium mt-0.5 inline-block"
              >
                SalimAbid@google.com
              </a>
            </div>

            {/* Document Watermark Footer */}
            <div className="mt-12 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Google Approved Community Network</span>
              <span>Official Reference ID: GDSC-CU-2022</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#141420] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-neutral-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Official credential verified by Google Developers MENA
          </span>

          <div className="flex items-center gap-2">
            <a
              href="https://developers.google.com/community/dsc"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 font-semibold text-slate-700 dark:text-neutral-200"
            >
              <span>Verify at Google</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4285F4] hover:bg-[#3367d6] text-white font-semibold shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
