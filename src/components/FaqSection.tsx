import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Does Job Application Copilot submit applications for me?',
      a: 'No. Job Application Copilot will never automatically submit an application. Our core philosophy is "Automate repetition, not judgment." The extension pre-fills repetitive fields, allows you to review and adjust every input, and leaves the final submission button entirely in your hands.'
    },
    {
      q: 'Does it answer demographic or sensitive questions?',
      a: 'No. The autofill engine explicitly shields sensitive and protected fields, including demographic diversity surveys, visa and immigration sponsorship declarations, desired compensation numbers, and background checks. These questions always require your conscious personal attention.'
    },
    {
      q: 'Can I review information before it is filled into the page?',
      a: 'Yes. When you open the extension on a job application page, it calculates deterministic matches against your active profile and displays a field preview before mutating the form DOM.'
    },
    {
      q: 'Which job sites and ATS platforms are supported?',
      a: 'The extension includes tailored parsers designed around common modern application systems including Greenhouse, Lever, and Ashby, as well as a generic form fallback for custom company portals. Please note that cross-layer browser E2E verification is actively underway across diverse career page configurations.'
    },
    {
      q: 'Does Job Application Copilot write my resume or generate cover letters?',
      a: 'No. We do not offer AI resume generation, cover letter hallucination, or fake experience generation. Job OS is designed to help professionals save, track, and streamline applications using their real, verified credentials.'
    },
    {
      q: 'Does it generate fake application answers or exaggerate qualifications?',
      a: 'Never. All autofill data originates directly from candidate profiles that you create, edit, and verify yourself in the Web Workspace.'
    },
    {
      q: 'What is the current pricing model?',
      a: 'Job Application Copilot is currently available as a free Beta release (Chrome Extension v0.9.3 and Web Workspace at jobs.quinnverse.tech). Official pricing plans and team features will be announced as the platform reaches general release.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#fcfbf9] border-b border-[#e4eae6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-[#1f5a45] mb-2 font-mono">
            08. Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131a16] tracking-tight leading-tight">
            Clear, honest answers about what the product does.
          </h2>
          <p className="mt-3 text-base text-[#3b4640] leading-relaxed">
            Everything you need to know about safety, automation boundaries, and platform compatibility.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-10 divide-y divide-[#e4eae6] border-y border-[#e4eae6]">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left py-2 text-base font-bold text-[#131a16] hover:text-[#1f5a45] transition-colors cursor-pointer group"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6b7770] group-hover:text-[#1f5a45] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#1f5a45]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="mt-2 text-sm text-[#3b4640] leading-relaxed pr-6 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
