import React, { useState } from 'react';
import { ArrowRight, Download, Check, ShieldAlert, Sparkles, Building2, MapPin, ExternalLink, RefreshCw } from 'lucide-react';
import { ProductMark } from './ProductMark';

interface HeroSectionProps {
  onGetExtension: () => void;
  onOpenApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onGetExtension,
  onOpenApp
}) => {
  const [activeProfileTab, setActiveProfileTab] = useState<'fullstack' | 'product'>('fullstack');
  const [fillState, setFillState] = useState<'idle' | 'previewing' | 'filled'>('idle');

  const handleSimulateAutofill = () => {
    setFillState('previewing');
    setTimeout(() => {
      setFillState('filled');
    }, 700);
  };

  const handleReset = () => {
    setFillState('idle');
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-18 md:pb-28 overflow-hidden border-b border-[#e4eae6]">
      {/* Background subtle architectural grid */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#1f5a45_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Studio Kicker: Clean typographic proof (no pill enclosure) */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#1f5a45] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1f5a45]" />
          <span>BUILT BY QUINNVERSE</span>
          <span className="text-[#6b7770]" aria-hidden="true">·</span>
          <span className="text-[#6b7770] font-normal">Independent Product Studio</span>
          <span className="text-[#6b7770]" aria-hidden="true">·</span>
          <span className="font-mono text-[11px] text-[#6b7770]">v0.9.3 beta</span>
        </div>

        {/* Hero Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#131a16] leading-[1.08] text-balance">
            Save jobs.<br />
            Track applications.<br />
            <span className="text-[#1f5a45]">Fill repetitive forms faster.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#3b4640] max-w-2xl leading-relaxed">
            Keep your job search organized without handing control over to an auto-apply bot.
            Job Application Copilot brings structure to scattered tabs, multiple profiles, and modern ATS forms.
          </p>

          {/* Principle Lockup */}
          <div className="mt-4 flex items-center gap-3 text-xs sm:text-sm font-medium text-[#1f5a45]">
            <span>Automate repetition, not judgment.</span>
            <span className="text-[#6b7770]">·</span>
            <span className="text-[#3b4640]">You stay in control.</span>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              onClick={onGetExtension}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-[#1f5a45] hover:bg-[#174837] rounded-lg transition-all shadow-sm hover:shadow-md active:scale-[0.99] flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Extension beta</span>
            </button>
            <button
              onClick={onOpenApp}
              className="px-5 py-3.5 text-sm font-semibold text-[#131a16] bg-white hover:bg-slate-50 border border-[#d0dbd4] rounded-lg transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Open Web App</span>
              <ArrowRight className="w-4 h-4 text-[#6b7770]" />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-4 text-xs text-[#6b7770]">
            <span>Chrome Extension + Web Workspace</span>
            <span aria-hidden="true">·</span>
            <span>No automatic submission</span>
            <span aria-hidden="true">·</span>
            <span>Preview before filling</span>
          </div>
        </div>

        {/* DOMINANT FOCAL HERO VISUAL: Dual Product Showcase (Extension + Web Workspace) */}
        <div className="mt-14 relative rounded-xl border border-[#e4eae6] bg-gradient-to-b from-[#f8faf9] to-[#ffffff] p-3 sm:p-5 shadow-xl">
          {/* Top Browser bar mock */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#e4eae6] text-xs text-[#6b7770]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
              </div>
              <div className="hidden sm:flex items-center gap-1.5 ml-2 px-3 py-1 bg-white border border-[#e4eae6] rounded-md text-[11px] font-mono text-[#3b4640]">
                <span className="text-[#1f5a45]">https://</span>stripe.com/jobs/staff-frontend-systems
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono bg-[#f0f5f2] text-[#1f5a45] px-2 py-0.5 rounded">
                ATS: Greenhouse Detected
              </span>
              <ProductMark size="sm" variant="mark" />
            </div>
          </div>

          {/* Dual Product Grid: Job Page Form on Left with Extension Popover, Workspace on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            {/* LEFT / EXTENSION CARD (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-[#d0dbd4] rounded-lg shadow-md p-4 relative">
              {/* Extension Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#e4eae6]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#1f5a45] flex items-center justify-center text-white text-[11px] font-bold">
                    J
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-[#131a16]">Job Copilot</span>
                      <span className="text-[10px] font-mono text-[#6b7770]">0.9.3</span>
                    </div>
                    <div className="text-[10px] text-[#1f5a45] font-medium">Ready on Application Page</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-700 font-medium">Sync: Connected</span>
                </div>
              </div>

              {/* Active Detected Job Info */}
              <div className="mt-3 p-2.5 bg-[#f8faf9] rounded border border-[#e4eae6]">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[11px] font-medium text-[#6b7770]">Detected Posting</div>
                    <div className="text-xs font-bold text-[#131a16]">Staff Frontend Engineer</div>
                    <div className="text-[11px] text-[#3b4640] flex items-center gap-2 mt-0.5">
                      <span>Stripe</span>
                      <span>·</span>
                      <span>Remote (US)</span>
                      <span>·</span>
                      <span className="font-mono">$210k - $265k</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-white border border-[#d0dbd4] text-[#1f5a45] font-medium px-2 py-0.5 rounded">
                    Status: SAVED
                  </span>
                </div>
              </div>

              {/* Profile Selector */}
              <div className="mt-3">
                <div className="flex items-center justify-between text-[11px] text-[#6b7770] mb-1.5">
                  <span className="font-medium text-[#131a16]">Active Profile:</span>
                  <span className="text-[10px]">Configured in Web Workspace</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => setActiveProfileTab('fullstack')}
                    className={`text-left p-2 rounded border text-xs transition-colors cursor-pointer ${
                      activeProfileTab === 'fullstack'
                        ? 'border-[#1f5a45] bg-[#f0f5f2] text-[#131a16]'
                        : 'border-[#e4eae6] bg-white text-[#6b7770] hover:border-[#d0dbd4]'
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between">
                      <span>Full-Stack & Systems</span>
                      {activeProfileTab === 'fullstack' && <Check className="w-3 h-3 text-[#1f5a45]" />}
                    </div>
                    <div className="text-[10px] text-[#6b7770] mt-0.5">Primary (Alex Vance)</div>
                  </button>

                  <button
                    onClick={() => setActiveProfileTab('product')}
                    className={`text-left p-2 rounded border text-xs transition-colors cursor-pointer ${
                      activeProfileTab === 'product'
                        ? 'border-[#1f5a45] bg-[#f0f5f2] text-[#131a16]'
                        : 'border-[#e4eae6] bg-white text-[#6b7770] hover:border-[#d0dbd4]'
                    }`}
                  >
                    <div className="font-bold flex items-center justify-between">
                      <span>Product Engineer</span>
                      {activeProfileTab === 'product' && <Check className="w-3 h-3 text-[#1f5a45]" />}
                    </div>
                    <div className="text-[10px] text-[#6b7770] mt-0.5">Frontend Focus</div>
                  </button>
                </div>
              </div>

              {/* Autofill Inspection Preview */}
              <div className="mt-3 border-t border-[#e4eae6] pt-3">
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="font-bold text-[#131a16]">Deterministic Match Preview</span>
                  <span className="text-[10px] font-mono text-[#1f5a45]">8 safe fields</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between p-1.5 bg-[#f8faf9] rounded border border-[#e4eae6]">
                    <span className="text-[#6b7770] text-[11px]">Legal Name</span>
                    <span className="font-medium text-[#131a16] font-mono text-[11px]">Alex Vance</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-[#f8faf9] rounded border border-[#e4eae6]">
                    <span className="text-[#6b7770] text-[11px]">Email</span>
                    <span className="font-medium text-[#131a16] font-mono text-[11px]">alex.vance@quinnverse.dev</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-[#f8faf9] rounded border border-[#e4eae6]">
                    <span className="text-[#6b7770] text-[11px]">LinkedIn & Portfolio</span>
                    <span className="font-medium text-[#1f5a45] font-mono text-[11px]">Matched</span>
                  </div>
                </div>

                {/* Safety Guarantee Callout inside Extension */}
                <div className="mt-2.5 p-2 bg-[#fcfbf9] rounded border border-amber-200/80 flex items-start gap-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-[10px] text-amber-900 leading-tight">
                    <span className="font-semibold">Protected fields untouched:</span> Demographic survey, visa sponsorship, & salary expectations require manual candidate answer.
                  </div>
                </div>

                {/* Extension Action Button */}
                <div className="mt-3 flex items-center gap-2">
                  {fillState === 'filled' ? (
                    <div className="w-full flex items-center justify-between px-3 py-2 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-900">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        8 safe fields populated in page
                      </span>
                      <button
                        onClick={handleReset}
                        className="text-[10px] text-emerald-700 underline font-medium cursor-pointer"
                      >
                        Reset
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={handleSimulateAutofill}
                      disabled={fillState === 'previewing'}
                      className="w-full py-2 px-3 text-xs font-semibold text-white bg-[#1f5a45] hover:bg-[#174837] rounded transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      {fillState === 'previewing' ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Matching Greenhouse form DOM...</span>
                        </>
                      ) : (
                        <>
                          <span>Fill Safe Fields</span>
                          <span className="text-[10px] font-mono text-emerald-200">(Preview First)</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                <div className="mt-2 text-center text-[10px] text-[#6b7770]">
                  Extension will never automatically submit applications.
                </div>
              </div>
            </div>

            {/* RIGHT / WEB WORKSPACE PIPELINE (7 cols) */}
            <div className="lg:col-span-7 bg-[#fcfbf9] border border-[#d0dbd4] rounded-lg p-4 shadow-sm flex flex-col justify-between">
              <div>
                {/* Workspace Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#e4eae6]">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#6b7770]">
                      Web Workspace · jobs.quinnverse.tech
                    </div>
                    <div className="text-sm font-bold text-[#131a16]">Application Tracker</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#6b7770]">6 Active Applications</span>
                    <button
                      onClick={onOpenApp}
                      className="text-xs font-medium text-[#1f5a45] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Open Workspace</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Pipeline Stages Mini-Board */}
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {/* SAVED */}
                  <div className="bg-white rounded border border-[#e4eae6] p-2.5">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-[#3b4640] mb-2 pb-1 border-b border-[#f0f2f0]">
                      <span>SAVED</span>
                      <span className="font-mono text-[10px] text-[#6b7770]">2</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="p-2 bg-[#f8faf9] rounded border border-[#e4eae6] text-left">
                        <div className="text-xs font-bold text-[#131a16]">Linear</div>
                        <div className="text-[10px] text-[#6b7770]">Desktop Engineer</div>
                        <div className="mt-1 text-[9px] font-mono text-[#1f5a45]">Generic Parser</div>
                      </div>
                      <div className="p-2 bg-[#f0f5f2] rounded border border-[#1f5a45]/30 text-left">
                        <div className="text-xs font-bold text-[#131a16]">Stripe</div>
                        <div className="text-[10px] text-[#6b7770]">Staff Frontend</div>
                        <div className="mt-1 text-[9px] font-mono text-[#1f5a45]">Active Tab</div>
                      </div>
                    </div>
                  </div>

                  {/* APPLIED */}
                  <div className="bg-white rounded border border-[#e4eae6] p-2.5">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-[#3b4640] mb-2 pb-1 border-b border-[#f0f2f0]">
                      <span>APPLIED</span>
                      <span className="font-mono text-[10px] text-[#6b7770]">1</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="p-2 bg-[#f8faf9] rounded border border-[#e4eae6] text-left">
                        <div className="text-xs font-bold text-[#131a16]">Figma</div>
                        <div className="text-[10px] text-[#6b7770]">Sr Product Eng</div>
                        <div className="mt-1 text-[9px] text-[#6b7770]">Sep 24 · Ashby</div>
                      </div>
                    </div>
                  </div>

                  {/* INTERVIEW */}
                  <div className="bg-white rounded border border-[#e4eae6] p-2.5">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-[#1f5a45] mb-2 pb-1 border-b border-[#f0f2f0]">
                      <span>INTERVIEW</span>
                      <span className="font-mono text-[10px] text-[#1f5a45]">1</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="p-2 bg-[#f0f5f2] rounded border border-[#1f5a45]/40 text-left">
                        <div className="text-xs font-bold text-[#131a16]">Stripe</div>
                        <div className="text-[10px] text-[#3b4640]">Arch Round 2</div>
                        <div className="mt-1 text-[9px] text-[#1f5a45] font-semibold">Tomorrow 10 AM</div>
                      </div>
                    </div>
                  </div>

                  {/* OFFER */}
                  <div className="bg-white rounded border border-[#e4eae6] p-2.5">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-800 mb-2 pb-1 border-b border-[#f0f2f0]">
                      <span>OFFER</span>
                      <span className="font-mono text-[10px] text-emerald-700">1</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-left">
                        <div className="text-xs font-bold text-emerald-950">Vercel</div>
                        <div className="text-[10px] text-emerald-800">Next.js Framework</div>
                        <div className="mt-1 text-[9px] font-mono text-emerald-700">$200k-$250k</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reminders snippet row */}
              <div className="mt-4 pt-3 border-t border-[#e4eae6] flex items-center justify-between text-xs text-[#3b4640]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="font-medium text-[#131a16]">Next Reminder:</span>
                  <span className="text-[#6b7770]">Follow up on Figma application in 2 days</span>
                </div>
                <div className="text-[11px] text-[#6b7770]">
                  Cloud Sync: Active
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
