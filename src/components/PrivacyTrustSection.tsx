import React from 'react';
import { ShieldCheck, DownloadCloud, UserCheck, FileCheck2, Lock, EyeOff } from 'lucide-react';

export const PrivacyTrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#e4eae6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-wider uppercase text-[#1f5a45] mb-2 font-mono">
            07. Privacy &amp; Trust Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131a16] tracking-tight leading-tight">
            Built on honest engineering principles.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3b4640] leading-relaxed">
            We don&apos;t make up marketing badges or claim unverified enterprise audits. We build software that treats your personal career data with genuine respect and engineering restraint.
          </p>
        </div>

        {/* 5 Real Principles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 bg-[#fcfbf9] rounded-lg border border-[#e4eae6]">
            <div className="w-9 h-9 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-4">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-[#131a16]">
              No Automatic Submissions
            </h3>
            <p className="mt-2 text-xs text-[#3b4640] leading-relaxed">
              The Chrome Extension has no logic to trigger form submission handlers. You personally review all values before clicking Submit.
            </p>
          </div>

          <div className="p-6 bg-[#fcfbf9] rounded-lg border border-[#e4eae6]">
            <div className="w-9 h-9 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-4">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-[#131a16]">
              No Fabricated Experience
            </h3>
            <p className="mt-2 text-xs text-[#3b4640] leading-relaxed">
              We never use generative AI to invent fake past job titles, exaggerated metrics, or fictional skills. What you write in your profile is what is used.
            </p>
          </div>

          <div className="p-6 bg-[#fcfbf9] rounded-lg border border-[#e4eae6]">
            <div className="w-9 h-9 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-4">
              <EyeOff className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-[#131a16]">
              Protected Questions Stay Local
            </h3>
            <p className="mt-2 text-xs text-[#3b4640] leading-relaxed">
              Demographics, visa status, salary expectations, and security background fields are strictly bypassed by autofill.
            </p>
          </div>

          <div className="p-6 bg-[#fcfbf9] rounded-lg border border-[#e4eae6]">
            <div className="w-9 h-9 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-4">
              <DownloadCloud className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-[#131a16]">
              Full Data Portability
            </h3>
            <p className="mt-2 text-xs text-[#3b4640] leading-relaxed">
              Your application data is yours. Export your complete tracker, interview notes, and profiles at any time in standard JSON or CSV formats.
            </p>
          </div>

          <div className="p-6 bg-[#fcfbf9] rounded-lg border border-[#e4eae6]">
            <div className="w-9 h-9 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-4">
              <UserCheck className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-[#131a16]">
              Candidate-Controlled Profiles
            </h3>
            <p className="mt-2 text-xs text-[#3b4640] leading-relaxed">
              Create and manage multiple targeted resumes and profiles. You decide which profile is active for each specific opportunity.
            </p>
          </div>

          <div className="p-6 bg-[#f0f5f2] rounded-lg border border-[#c5dbcf] flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-[#1f5a45] font-mono uppercase tracking-wider mb-2">
                Quinnverse Studio Manifesto
              </div>
              <p className="text-xs text-[#3b4640] leading-relaxed italic">
                &ldquo;Find better tools. Build what&apos;s missing.&rdquo;
              </p>
              <p className="mt-2 text-xs text-[#3b4640] leading-relaxed">
                As an independent product studio, we build tools that empower the user rather than creating dependency or false promises.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#c5dbcf] text-[11px] font-mono text-[#1f5a45]">
              jobs.quinnverse.tech
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
