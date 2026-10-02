import React from 'react';
import { X, HelpCircle, Mail, BookOpen, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ProductMark } from './ProductMark';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-xl border border-[#d0dbd4] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6b7770] hover:text-[#131a16] hover:bg-slate-100 rounded-md transition-colors"
          aria-label="Close help modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#e4eae6]">
          <ProductMark size="md" variant="mark" />
          <div>
            <h2 className="text-xl font-bold text-[#131a16] tracking-tight">
              Help &amp; Knowledge Base
            </h2>
            <div className="text-xs text-[#6b7770] font-mono">
              Job Application Copilot · Support &amp; Guides
            </div>
          </div>
        </div>

        {/* Guides */}
        <div className="mt-6 space-y-4 text-xs text-[#3b4640] leading-relaxed">
          <div className="p-4 bg-[#fcfbf9] rounded border border-[#e4eae6]">
            <h3 className="text-sm font-bold text-[#131a16] mb-1 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#1f5a45]" />
              Quick Start Workflow
            </h3>
            <p>
              1. Install Chrome Extension v0.9.3.<br />
              2. Open your Web Workspace at <a href="https://jobs.quinnverse.tech" target="_blank" rel="noreferrer" className="text-[#1f5a45] underline font-medium">jobs.quinnverse.tech</a> and configure your candidate profiles (Basics, Experience, Education, Projects).<br />
              3. Navigate to any job posting (e.g. Greenhouse, Lever, Ashby) and click the extension icon to Save or Autofill.
            </p>
          </div>

          <div className="p-4 bg-[#fcfbf9] rounded border border-[#e4eae6]">
            <h3 className="text-sm font-bold text-[#131a16] mb-1 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-[#1f5a45]" />
              What if a field does not autofill?
            </h3>
            <p>
              Some custom application forms use dynamic iframe sandboxes or non-standard HTML classes. If a field is not matched by the deterministic parser, simply fill it manually. You can also report custom field formats to improve our parser library.
            </p>
          </div>

          <div className="p-4 bg-[#f0f5f2] rounded border border-[#c5dbcf]">
            <h3 className="text-sm font-bold text-[#1f5a45] mb-1 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#1f5a45]" />
              Engineering &amp; Studio Support
            </h3>
            <p className="text-[#3b4640]">
              Have questions, encounter a parsing bug, or want to share feedback? Contact the Quinnverse product engineering team directly:
            </p>
            <div className="mt-2 font-mono text-xs text-[#1f5a45] font-bold">
              support@quinnverse.tech
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#e4eae6] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#131a16] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
