import React from 'react';
import { Layers, RotateCcw, Compass } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white border-b border-[#e4eae6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-wider uppercase text-[#1f5a45] mb-2 font-mono">
            01. The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131a16] tracking-tight text-balance leading-tight">
            Applying for jobs shouldn't mean rebuilding the same application from scratch every time.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3b4640] leading-relaxed">
            The job search is plagued by mechanical friction. You spend high-focus energy on administrative copy-paste instead of preparing for technical interviews and company conversations.
          </p>
        </div>

        {/* 3 Concrete Frictions Grid (No fake stats, real engineering workflow frictions) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Friction 1 */}
          <div className="p-6 rounded-lg bg-[#fcfbf9] border border-[#e4eae6] flex flex-col justify-between hover:border-[#d0dbd4] transition-colors">
            <div>
              <div className="w-10 h-10 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#131a16] tracking-tight">
                Jobs scattered everywhere
              </h3>
              <p className="mt-2.5 text-sm text-[#3b4640] leading-relaxed">
                Roles live across LinkedIn, company career portals, Twitter links, and bookmarked tabs. Without a unified workspace, deadlines slip, follow-ups are forgotten, and context vanishes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e4eae6] text-xs font-mono text-[#6b7770]">
              Friction: Fragmented state across 20+ tabs
            </div>
          </div>

          {/* Friction 2 */}
          <div className="p-6 rounded-lg bg-[#fcfbf9] border border-[#e4eae6] flex flex-col justify-between hover:border-[#d0dbd4] transition-colors">
            <div>
              <div className="w-10 h-10 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-5">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#131a16] tracking-tight">
                Repeated forms and manual typing
              </h3>
              <p className="mt-2.5 text-sm text-[#3b4640] leading-relaxed">
                Every company portal asks for the exact same contact details, school graduation dates, employment titles, and portfolio links. Typing the same 12 fields manually is pure repetitive overhead.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e4eae6] text-xs font-mono text-[#6b7770]">
              Friction: Redundant input on every new ATS
            </div>
          </div>

          {/* Friction 3 */}
          <div className="p-6 rounded-lg bg-[#fcfbf9] border border-[#e4eae6] flex flex-col justify-between hover:border-[#d0dbd4] transition-colors">
            <div>
              <div className="w-10 h-10 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#131a16] tracking-tight">
                Lost application context
              </h3>
              <p className="mt-2.5 text-sm text-[#3b4640] leading-relaxed">
                When a recruiter reaches out three weeks later, it's hard to remember which profile variation you used, which project link you highlighted, or when you initially submitted.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e4eae6] text-xs font-mono text-[#6b7770]">
              Friction: Zero audit trail of past submissions
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
