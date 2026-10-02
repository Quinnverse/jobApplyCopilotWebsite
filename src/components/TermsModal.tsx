import React from 'react';
import { X, Scale, CheckCircle2 } from 'lucide-react';
import { ProductMark } from './ProductMark';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-xl border border-[#d0dbd4] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6b7770] hover:text-[#131a16] hover:bg-slate-100 rounded-md transition-colors"
          aria-label="Close terms modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#e4eae6]">
          <ProductMark size="md" variant="mark" />
          <div>
            <h2 className="text-xl font-bold text-[#131a16] tracking-tight">
              Terms of Use &amp; Platform Boundaries
            </h2>
            <div className="text-xs text-[#6b7770] font-mono">
              Job Application Copilot · Quinnverse Product Studio
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-5 text-xs text-[#3b4640] leading-relaxed">
          <div>
            <h3 className="text-sm font-bold text-[#131a16] mb-1">
              1. Candidate Responsibility for Submissions
            </h3>
            <p>
              Job Application Copilot is an assistive productivity tool designed to reduce repetitive keystrokes. You, as the candidate, are solely responsible for reviewing all pre-filled information, verifying its accuracy, and executing the final submission button.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#131a16] mb-1">
              2. No Guarantee of Employment or ATS Acceptance
            </h3>
            <p>
              Job OS does not represent or guarantee interviews, job offers, or ATS ranking outcomes. Employers configure external ATS platforms (Greenhouse, Lever, Ashby, etc.) independently, and web page DOM structures may evolve.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#131a16] mb-1">
              3. Prohibition on Bot Abuse &amp; Mass Scraping
            </h3>
            <p>
              This product is intended exclusively for individual professionals managing their legitimate career applications. Any attempt to repurpose the software for unauthorized automated web crawling, spamming, or fraudulent candidate spoofing is strictly prohibited.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#131a16] mb-1">
              4. Service Availability &amp; Beta Status
            </h3>
            <p>
              The Chrome Extension (v0.9.3) and Web Workspace are actively maintained and refined by Quinnverse. Features are provided &quot;as is&quot; with active continuous engineering.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#e4eae6] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1f5a45] hover:bg-[#174837] rounded-md transition-colors cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>

      </div>
    </div>
  );
};
