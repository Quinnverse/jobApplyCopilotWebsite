import React, { useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, AlertTriangle, Eye, ShieldAlert, FileText } from 'lucide-react';
import { SAFE_FIELDS, PROTECTED_FIELDS } from '../data/mock-data';

export const AutofillControlSection: React.FC = () => {
  const [filterView, setFilterView] = useState<'all' | 'safe' | 'protected'>('all');

  return (
    <section id="safety" className="py-20 bg-white border-b border-[#e4eae6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-wider uppercase text-[#1f5a45] mb-2 font-mono flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1f5a45]" />
            <span>03. Safety &amp; User Control · Core Differentiator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131a16] tracking-tight leading-tight text-balance">
            Autofill the repetitive stuff.<br />
            <span className="text-[#1f5a45]">You answer what matters.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3b4640] leading-relaxed">
            Most &quot;AI auto-apply&quot; tools spray applications blindly, invent qualifications, and get candidates banned. Job Application Copilot is fundamentally different: we automate repetition, not judgment.
          </p>
        </div>

        {/* 4 Architectural Guarantees */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-5 rounded-lg bg-[#fcfbf9] border border-[#e4eae6]">
            <div className="w-9 h-9 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-3.5">
              <Eye className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#131a16]">Preview Before Fill</h3>
            <p className="mt-1.5 text-xs text-[#3b4640] leading-relaxed">
              Every field match is calculated and presented in the extension popup before any DOM injection occurs. You inspect exactly what will be filled.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#fcfbf9] border border-[#e4eae6]">
            <div className="w-9 h-9 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-3.5">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#131a16]">No Automatic Submission</h3>
            <p className="mt-1.5 text-xs text-[#3b4640] leading-relaxed">
              The extension has zero auto-submit capabilities in its codebase. Only you click &quot;Submit Application&quot; after reviewing every answer.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#fcfbf9] border border-[#e4eae6]">
            <div className="w-9 h-9 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-3.5">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#131a16]">Protected Fields Untouched</h3>
            <p className="mt-1.5 text-xs text-[#3b4640] leading-relaxed">
              Demographic questions, visa sponsorship, salary expectations, and security questions are strictly bypassed and left for your personal input.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#fcfbf9] border border-[#e4eae6]">
            <div className="w-9 h-9 rounded bg-[#f0f5f2] text-[#1f5a45] flex items-center justify-center mb-3.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#131a16]">Deterministic Integrity</h3>
            <p className="mt-1.5 text-xs text-[#3b4640] leading-relaxed">
              Values come strictly from your verified candidate profiles. No hallucinated experience, no fabricated skills, and no phantom bullet points.
            </p>
          </div>

        </div>

        {/* Detailed Safe vs Protected Interactive Table */}
        <div className="mt-12 bg-[#fcfbf9] rounded-xl border border-[#d0dbd4] p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#e4eae6] gap-3">
            <div>
              <h3 className="text-lg font-bold text-[#131a16]">
                Form Field Classification Policy
              </h3>
              <p className="text-xs text-[#6b7770] mt-0.5">
                Exact behavioral breakdown of how the autofill engine handles application inputs.
              </p>
            </div>

            {/* Segmented Filter Control */}
            <div className="flex items-center gap-1 p-1 bg-white border border-[#e4eae6] rounded-md self-start sm:self-auto">
              <button
                onClick={() => setFilterView('all')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  filterView === 'all'
                    ? 'bg-[#1f5a45] text-white'
                    : 'text-[#3b4640] hover:text-[#131a16]'
                }`}
              >
                All Fields ({SAFE_FIELDS.length + PROTECTED_FIELDS.length})
              </button>
              <button
                onClick={() => setFilterView('safe')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  filterView === 'safe'
                    ? 'bg-[#1f5a45] text-white'
                    : 'text-[#3b4640] hover:text-[#131a16]'
                }`}
              >
                Safe to Autofill ({SAFE_FIELDS.length})
              </button>
              <button
                onClick={() => setFilterView('protected')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  filterView === 'protected'
                    ? 'bg-[#1f5a45] text-white'
                    : 'text-[#3b4640] hover:text-[#131a16]'
                }`}
              >
                Protected / Shielded ({PROTECTED_FIELDS.length})
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* SAFE FIELDS COLUMN */}
            {(filterView === 'all' || filterView === 'safe') && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#1f5a45] pb-2 border-b border-[#e4eae6]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Safe Fields (Autofilled via Deterministic Rules)
                  </span>
                  <span className="text-[11px] font-mono text-[#6b7770]">Source: Active Profile</span>
                </div>

                <div className="space-y-2">
                  {SAFE_FIELDS.map((field, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-white rounded border border-[#e4eae6] flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-semibold text-[#131a16]">{field.label}</div>
                        <div className="text-[10px] text-[#6b7770] font-mono">{field.source}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-mono text-[#1f5a45] bg-[#f0f5f2] px-2 py-0.5 rounded">
                          {field.example}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PROTECTED FIELDS COLUMN */}
            {(filterView === 'all' || filterView === 'protected') && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-amber-900 pb-2 border-b border-amber-200">
                  <span className="flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    Protected Fields (Intentionally Bypassed for Human Judgment)
                  </span>
                  <span className="text-[11px] font-mono text-amber-800">Never Guessed</span>
                </div>

                <div className="space-y-2">
                  {PROTECTED_FIELDS.map((field, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-amber-50/50 rounded border border-amber-200/80 text-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-bold text-[#131a16]">{field.name}</div>
                        <span className="font-mono text-[10px] uppercase text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded whitespace-nowrap">
                          Manual Only
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-[#3b4640] leading-relaxed">
                        {field.reason}
                      </p>
                      <div className="mt-1.5 text-[10px] font-medium text-amber-900/90 font-mono">
                        Engine Policy: {field.action}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          <div className="mt-6 pt-4 border-t border-[#e4eae6] text-xs text-[#6b7770] flex flex-wrap items-center justify-between gap-2">
            <span>Built around standard application inputs across modern career sites.</span>
            <span className="font-mono text-[11px] text-[#1f5a45]">
              Guaranteed: 0% automated form submissions
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
