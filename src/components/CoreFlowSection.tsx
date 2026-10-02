import React, { useState } from 'react';
import { BookmarkPlus, Kanban, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const CoreFlowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Save',
      tagline: 'Capture job postings in one click',
      icon: BookmarkPlus,
      description: 'Adapters are implemented for common ATS workflows including Greenhouse, Lever, and Ashby. Real-world compatibility is being verified progressively.',
      details: [
        'DOM parser extracts role and company metadata',
        'Local persistence protects your active draft',
        'Sync queue connects instantly to Web Workspace'
      ],
      mockupLabel: 'Browser → Extension Parser'
    },
    {
      num: '02',
      title: 'Track',
      tagline: 'Organize applications across clear stages',
      icon: Kanban,
      description: 'All saved opportunities populate your central Application Tracker. Update statuses through Saved, Applied, Interview, Offer, Rejected, and Withdrawn with automated timeline logs.',
      details: [
        'Real statuses: SAVED, APPLIED, INTERVIEW, OFFER, REJECTED, WITHDRAWN',
        'Attach interview notes and recruiter contact details',
        'Set deadline and follow-up reminders'
      ],
      mockupLabel: 'Web Workspace Pipeline'
    },
    {
      num: '03',
      title: 'Autofill',
      tagline: 'Deterministic preview & safe-fill',
      icon: FileCheck,
      description: 'When opening the application form, the extension matches input fields against your active candidate profile. Inspect field-by-field before applying. Safe fields fill deterministically.',
      details: [
        'Preview safe fields before any DOM mutation',
        'Deterministic rule matching eliminates hallucination',
        'Sensitive & protected questions remain untouched'
      ],
      mockupLabel: 'Deterministic Safe Field Injection'
    },
    {
      num: '04',
      title: 'Confirm',
      tagline: 'You inspect and submit personally',
      icon: CheckCircle2,
      description: 'You answer demographic questions, visa sponsorship, and custom essay prompts with your own human discretion. You personally click submit. Never automated, never out of your hands.',
      details: [
        'No automatic form submission',
        'Zero chance of submitting unintended answers',
        'You maintain 100% human control'
      ],
      mockupLabel: 'Human Inspection & Direct Submission'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#fcfbf9] border-b border-[#e4eae6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-wider uppercase text-[#1f5a45] mb-2 font-mono">
            02. The Core Flow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131a16] tracking-tight leading-tight">
            Save. Track. Autofill. Stay in control.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3b4640] leading-relaxed">
            A cohesive workflow engineered between your browser and your central workspace. Every step is predictable, verifiable, and transparent.
          </p>
        </div>

        {/* Interactive Steps Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Step Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#1f5a45] shadow-sm'
                      : 'bg-[#f8faf9] border-[#e4eae6] hover:border-[#d0dbd4] hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isSelected ? 'text-[#1f5a45]' : 'text-[#6b7770]'
                      }`}
                    >
                      {step.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-[#131a16]">
                          {step.title}
                        </h3>
                        {isSelected && (
                          <span className="text-[11px] font-medium text-[#1f5a45] flex items-center gap-1 font-mono">
                            Active Step
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#3b4640] mt-1">
                        {step.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Step Visual Breakdown (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#d0dbd4] rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#e4eae6]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#1f5a45] bg-[#f0f5f2] px-2 py-0.5 rounded">
                  Step {steps[activeStep].num}
                </span>
                <span className="text-sm font-bold text-[#131a16]">
                  {steps[activeStep].title} Workflow
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#6b7770]">
                {steps[activeStep].mockupLabel}
              </div>
            </div>

            <div className="mt-5">
              <h4 className="text-xl font-bold text-[#131a16] tracking-tight">
                {steps[activeStep].tagline}
              </h4>
              <p className="mt-2 text-sm text-[#3b4640] leading-relaxed">
                {steps[activeStep].description}
              </p>

              {/* Concrete Capabilities checklist */}
              <div className="mt-6 pt-5 border-t border-[#e4eae6]">
                <div className="text-xs font-bold text-[#131a16] mb-3">
                  System Behavior & Guarantees:
                </div>
                <div className="space-y-2">
                  {steps[activeStep].details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#3b4640]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1f5a45] shrink-0 mt-1.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive preview illustration box */}
              <div className="mt-6 p-4 bg-[#fcfbf9] rounded border border-[#e4eae6]">
                {activeStep === 0 && (
                  <div className="font-mono text-[11px] text-[#3b4640] space-y-1">
                    <div className="text-[#6b7770]">// DOM Extraction Event</div>
                    <div className="text-[#1f5a45]">DETECT: &quot;Senior Software Engineer&quot; · Ashby Portal</div>
                    <div>PAYLOAD: &#123; title, company: &quot;Linear&quot;, url, timestamp &#125;</div>
                    <div className="text-emerald-700 font-semibold">STATUS: Saved to Local Cache & Cloud Sync Queue</div>
                  </div>
                )}
                {activeStep === 1 && (
                  <div className="font-mono text-[11px] text-[#3b4640] space-y-1">
                    <div className="text-[#6b7770]">// Workspace State Matrix</div>
                    <div className="grid grid-cols-3 gap-2 text-[10px] text-center mt-2">
                      <div className="bg-white border p-1 rounded">SAVED (2)</div>
                      <div className="bg-white border p-1 rounded border-[#1f5a45] text-[#1f5a45] font-bold">APPLIED (1)</div>
                      <div className="bg-white border p-1 rounded text-emerald-700 font-bold">OFFER (1)</div>
                    </div>
                  </div>
                )}
                {activeStep === 2 && (
                  <div className="font-mono text-[11px] text-[#3b4640] space-y-1">
                    <div className="text-[#6b7770]">// Form Field Detection</div>
                    <div className="flex justify-between text-xs py-1 border-b border-[#e4eae6]">
                      <span>First & Last Name</span>
                      <span className="text-[#1f5a45] font-semibold">Matched &rarr; Alex Vance</span>
                    </div>
                    <div className="flex justify-between text-xs py-1 border-b border-[#e4eae6]">
                      <span>Email & Phone</span>
                      <span className="text-[#1f5a45] font-semibold">Matched &rarr; alex.vance@quinnverse.dev</span>
                    </div>
                    <div className="flex justify-between text-xs py-1">
                      <span>Visa Sponsorship</span>
                      <span className="text-amber-800 font-semibold">SKIPPED (Protected Field)</span>
                    </div>
                  </div>
                )}
                {activeStep === 3 && (
                  <div className="font-mono text-[11px] text-[#3b4640] space-y-1">
                    <div className="text-[#6b7770]">// Submission Safeguard Protocol</div>
                    <div className="text-emerald-800 font-semibold">&bull; Autofill complete. Form remains unsubmitted.</div>
                    <div className="text-[#3b4640]">&bull; Candidate reviews pre-filled inputs and custom answers.</div>
                    <div className="text-[#131a16] font-bold">&bull; Action required: Applicant manually clicks &quot;Submit Application&quot; button.</div>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
