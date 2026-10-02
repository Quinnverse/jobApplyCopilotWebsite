import React from 'react';
import { Terminal, Check, Cpu, Sparkles, FileSearch, ArrowRight } from 'lucide-react';

export const DeterministicSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#e4eae6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-wider uppercase text-[#1f5a45] mb-2 font-mono">
            05. Deterministic Engine Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131a16] tracking-tight leading-tight text-balance">
            Predictable where predictability matters.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3b4640] leading-relaxed">
            When you apply for a job, hallucination is a disaster. If an AI invents a company you never worked at or changes your graduation year, your application is disqualified. Job Application Copilot is built on deterministic rules.
          </p>
        </div>

        {/* 3 Pillars of Deterministic Philosophy */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-[#fcfbf9] rounded-lg border border-[#e4eae6]">
            <div className="w-10 h-10 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#131a16]">
              Zero Hallucinations
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#3b4640] leading-relaxed">
              Every value written into a form comes strictly from the active candidate profile you reviewed and saved. The system will never embellish, hallucinate dates, or fabricate experiences.
            </p>
            <div className="mt-4 text-[11px] font-mono text-[#1f5a45]">
              Invariant: 100% source-attributed data
            </div>
          </div>

          <div className="p-6 bg-[#fcfbf9] rounded-lg border border-[#e4eae6]">
            <div className="w-10 h-10 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-4">
              <FileSearch className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#131a16]">
              Transparent Field Matching
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#3b4640] leading-relaxed">
              You always know exactly why a field matched. Standard HTML attributes, labels, ARIA tags, and form structures are inspected via deterministic pattern rules with an instant preview inspector.
            </p>
            <div className="mt-4 text-[11px] font-mono text-[#1f5a45]">
              Audit trail: Inspect matches before fill
            </div>
          </div>

          <div className="p-6 bg-[#fcfbf9] rounded-lg border border-[#e4eae6]">
            <div className="w-10 h-10 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#131a16]">
              Modern ATS Grounding
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#3b4640] leading-relaxed">
              Designed around common application systems including Greenhouse, Lever, and Ashby, alongside standard web form fallbacks.
            </p>
            <div className="mt-4 text-[11px] font-mono text-[#6b7770]">
              Status: Cross-layer browser E2E verification underway
            </div>
          </div>

        </div>

        {/* ATS Support Truth Box (Strict adherence to Section 4: DO NOT OVERCLAIM) */}
        <div className="mt-10 p-5 rounded-lg bg-[#f0f5f2]/70 border border-[#c5dbcf] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#1f5a45] flex items-center gap-1.5 font-mono uppercase">
              <span className="w-2 h-2 rounded-full bg-[#1f5a45]" />
              Engineering Transparency Note on ATS Compatibility
            </div>
            <p className="text-xs text-[#3b4640] max-w-3xl leading-relaxed">
              The engine includes dedicated parsers engineered for Greenhouse, Lever, Ashby, and general web applications. We do not claim &ldquo;universal or 100% flawless support&rdquo; because every enterprise portal customizes its DOM fields. Our deterministic preview lets you verify matches on every unique page.
            </p>
          </div>
          <span className="text-[11px] font-mono text-[#1f5a45] bg-white border border-[#1f5a45]/20 px-3 py-1 rounded shrink-0">
            Parsers: Greenhouse · Lever · Ashby · Generic
          </span>
        </div>

      </div>
    </section>
  );
};
