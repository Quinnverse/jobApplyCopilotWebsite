import React from 'react';
import { X, ShieldCheck, Lock, Download, Trash2 } from 'lucide-react';
import { ProductMark } from './ProductMark';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-xl border border-[#d0dbd4] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6b7770] hover:text-[#131a16] hover:bg-slate-100 rounded-md transition-colors"
          aria-label="Close privacy modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#e4eae6]">
          <ProductMark size="md" variant="mark" />
          <div>
            <h2 className="text-xl font-bold text-[#131a16] tracking-tight">
              Privacy &amp; Data Ownership Policy
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
              1. Our Data Philosophy: Automate Repetition, Never Sell Data
            </h3>
            <p>
              Job Application Copilot is an independent productivity utility. We do not monetize user data, sell recruitment leads to staffing agencies, or trade candidate information with advertising brokers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#131a16] mb-1">
              2. Local-First Browser Execution
            </h3>
            <p>
              The Chrome Extension executes field matching within your active browser tab using local client-side pattern rules. It reads the DOM only when you explicitly interact with the extension popup or trigger an autofill action.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#131a16] mb-1">
              3. Protected &amp; Sensitive Questions
            </h3>
            <p>
              We enforce hardcoded client shields against sensitive questions:
            </p>
            <ul className="mt-1.5 list-disc list-inside space-y-1 text-[#6b7770]">
              <li>Demographic survey data (gender, ethnicity, veteran status) is never automated.</li>
              <li>Immigration and visa sponsorship questions require conscious user selection.</li>
              <li>Salary expectations and compensation history are never auto-populated.</li>
              <li>Background check declarations remain untouched.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#131a16] mb-1">
              4. Data Export &amp; Permanent Deletion
            </h3>
            <p>
              This marketing site does not provide self-service data export or account deletion controls. Do not treat future product intentions as available data rights.
            </p>
          </div>

          <div className="p-4 bg-[#f0f5f2] rounded border border-[#c5dbcf]">
            <div className="font-bold text-[#1f5a45] mb-1 font-mono text-[11px] uppercase">
              Truthful Architecture Declaration
            </div>
            <p className="text-[11px] text-[#3b4640]">
              We do not invent unverified compliance acronyms. We operate transparent, inspectable code designed to protect your privacy and reduce repetitive administrative labor.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#e4eae6] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1f5a45] hover:bg-[#174837] rounded-md transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
