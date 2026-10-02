import React from 'react';
import { Chrome, Monitor, ArrowRight, Layers, ShieldCheck, Sparkles, Check, Download } from 'lucide-react';
import { ProductMark } from './ProductMark';

interface DualProductSectionProps {
  onGetExtension: () => void;
  onOpenApp: () => void;
}

export const DualProductSection: React.FC<DualProductSectionProps> = ({
  onGetExtension,
  onOpenApp
}) => {
  return (
    <section className="py-20 bg-[#fcfbf9] border-b border-[#e4eae6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-wider uppercase text-[#1f5a45] mb-2 font-mono">
            06. The Dual Interface System
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131a16] tracking-tight leading-tight text-balance">
            Work where jobs live.<br />
            <span className="text-[#1f5a45]">Organize everything in one place.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3b4640] leading-relaxed">
            A standalone extension lacks long-term context. A standalone web dashboard forces painful manual data entry. Job OS marries the two into one seamless feedback loop.
          </p>
        </div>

        {/* Side-by-Side Dual Product Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Extension Card */}
          <div className="p-7 bg-white rounded-xl border border-[#d0dbd4] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e4eae6]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#1f5a45] text-white flex items-center justify-center font-bold text-xs">
                    0.9.3
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#131a16]">
                      Chrome Extension
                    </h3>
                    <div className="text-xs text-[#6b7770]">Browser Execution Layer</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#1f5a45] bg-[#f0f5f2] px-2 py-0.5 rounded">
                  In-Browser Overlay
                </span>
              </div>

              <p className="mt-4 text-sm text-[#3b4640] leading-relaxed">
                Lives in your browser toolbar. Detects postings as you browse, extracts metadata without copy-pasting, and injects safe autofill matches with full user preview.
              </p>

              {/* Responsibilities list */}
              <div className="mt-6 space-y-2.5 text-xs text-[#3b4640]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1f5a45] shrink-0" />
                  <span><strong>1-Click Job Capture:</strong> Extract role, company, URL, and salary</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1f5a45] shrink-0" />
                  <span><strong>Deterministic Safe-Fill:</strong> Populate repetitive personal and career fields</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1f5a45] shrink-0" />
                  <span><strong>Protected Field Shield:</strong> Never answers sensitive questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1f5a45] shrink-0" />
                  <span><strong>Offline Cache &amp; Queue:</strong> Works reliably even on intermittent networks</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#e4eae6] flex items-center justify-between">
              <span className="text-xs text-[#6b7770] font-mono">Manifest V3 · Local First</span>
              <button
                onClick={onGetExtension}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#1f5a45] hover:bg-[#174837] rounded-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get Extension</span>
              </button>
            </div>
          </div>

          {/* Web Workspace Card */}
          <div className="p-7 bg-white rounded-xl border border-[#d0dbd4] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e4eae6]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#f0f5f2] border border-[#e4eae6] text-[#1f5a45] flex items-center justify-center font-bold text-xs">
                    OS
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#131a16]">
                      Web Workspace
                    </h3>
                    <div className="text-xs text-[#6b7770]">Command &amp; Organizing Layer</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#1f5a45] bg-[#f0f5f2] px-2 py-0.5 rounded">
                  jobs.quinnverse.tech
                </span>
              </div>

              <p className="mt-4 text-sm text-[#3b4640] leading-relaxed">
                Your permanent home base for your search. Manage multiple tailored profiles, track pipeline stages, schedule follow-ups, and review past interview timelines.
              </p>

              {/* Responsibilities list */}
              <div className="mt-6 space-y-2.5 text-xs text-[#3b4640]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1f5a45] shrink-0" />
                  <span><strong>Application Tracker:</strong> 6 standardized stages from Saved to Offer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1f5a45] shrink-0" />
                  <span><strong>Multiple Profiles:</strong> Tailor basics, highlights, and links per role</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1f5a45] shrink-0" />
                  <span><strong>Milestone Reminders:</strong> Never miss application deadlines or follow-ups</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1f5a45] shrink-0" />
                  <span><strong>Full Data Portability:</strong> Export your complete search data as JSON or CSV</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#e4eae6] flex items-center justify-between">
              <span className="text-xs text-[#6b7770] font-mono">Instant Cloud Sync</span>
              <button
                onClick={onOpenApp}
                className="px-4 py-2 text-xs font-semibold text-[#1f5a45] hover:text-[#174837] bg-[#f0f5f2] hover:bg-[#e3ede7] rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Open Workspace</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
