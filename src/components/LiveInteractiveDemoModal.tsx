import React, { useState } from 'react';
import { X, ExternalLink, Check, Briefcase, UserCheck, Bell, RefreshCw, MapPin, Building2, ShieldAlert } from 'lucide-react';
import { INITIAL_APPLICATIONS, MOCK_PROFILES, MOCK_REMINDERS } from '../data/mock-data';
import { ApplicationStatus, JobApplication } from '../types/job-os';
import { ProductMark } from './ProductMark';

interface LiveInteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDownload: () => void;
}

export const LiveInteractiveDemoModal: React.FC<LiveInteractiveDemoModalProps> = ({
  isOpen,
  onClose,
  onOpenDownload,
}) => {
  const [applications, setApplications] = useState<JobApplication[]>(INITIAL_APPLICATIONS);
  const [selectedApp, setSelectedApp] = useState<JobApplication>(INITIAL_APPLICATIONS[0]);
  const [activeProfileTab, setActiveProfileTab] = useState<'fullstack' | 'product'>('fullstack');
  const [simulatedAutofillDone, setSimulatedAutofillDone] = useState(false);

  if (!isOpen) return null;

  const handleUpdateStatus = (appId: string, newStatus: ApplicationStatus) => {
    setApplications(prev =>
      prev.map(item =>
        item.id === appId ? { ...item, status: newStatus, updatedDate: 'Today' } : item
      )
    );
    if (selectedApp.id === appId) {
      setSelectedApp(prev => ({ ...prev, status: newStatus, updatedDate: 'Today' }));
    }
  };

  const currentProfile = activeProfileTab === 'fullstack' ? MOCK_PROFILES[0] : MOCK_PROFILES[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-xl border border-[#d0dbd4] max-w-5xl w-full p-4 sm:p-6 shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e4eae6]">
          <div className="flex items-center gap-3">
            <ProductMark size="sm" variant="mark" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold text-[#131a16]">
                  Job OS · Live Interactive Workspace Sandbox
                </span>
                <span className="text-[10px] font-mono bg-[#f0f5f2] text-[#1f5a45] px-2 py-0.5 rounded font-semibold">
                  Preview Mode
                </span>
              </div>
              <div className="text-xs text-[#6b7770]">
                Simulating the real production experience at <span className="font-mono text-[#1f5a45]">jobs.quinnverse.tech</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://jobs.quinnverse.tech"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1f5a45] hover:bg-[#f0f5f2] rounded border border-[#1f5a45]/30 transition-colors"
            >
              <span>Production App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6b7770] hover:text-[#131a16] hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sandbox Body: Split Pane */}
        <div className="mt-4 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 overflow-y-auto pr-1">
          
          {/* Left Column: Applications Tracker Pipeline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#131a16] font-mono">
                1. Click to Inspect or Move Application Stage
              </span>
              <span className="text-[11px] text-[#6b7770]">
                {applications.length} Active Records
              </span>
            </div>

            <div className="space-y-2 overflow-y-auto max-h-[380px] pr-1">
              {applications.map(app => {
                const isSelected = selectedApp.id === app.id;
                return (
                  <div
                    key={app.id}
                    onClick={() => setSelectedApp(app)}
                    className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#1f5a45] bg-[#f0f5f2]/60 shadow-sm'
                        : 'border-[#e4eae6] bg-white hover:border-[#d0dbd4]'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-bold text-[#131a16] text-sm flex items-center gap-1.5">
                          <span>{app.role}</span>
                          <span className="text-xs text-[#6b7770] font-normal">· {app.company}</span>
                        </div>
                        <div className="text-[11px] text-[#6b7770] flex items-center gap-2 mt-0.5">
                          <span>{app.location}</span>
                          {app.salaryRange && <span>· <span className="font-mono text-[#1f5a45]">{app.salaryRange}</span></span>}
                        </div>
                      </div>

                      <span className="font-mono text-[10px] px-2 py-0.5 rounded font-bold bg-white border border-[#d0dbd4] text-[#131a16]">
                        {app.status}
                      </span>
                    </div>

                    {/* Interactive quick stage switcher */}
                    {isSelected && (
                      <div className="mt-3 pt-2.5 border-t border-[#e4eae6]/80 flex flex-wrap items-center gap-1">
                        <span className="text-[10px] text-[#6b7770] font-mono mr-1">Move stage:</span>
                        {(['SAVED', 'APPLIED', 'INTERVIEW', 'OFFER', 'REJECTED', 'WITHDRAWN'] as ApplicationStatus[]).map(st => (
                          <button
                            key={st}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleUpdateStatus(app.id, st);
                            }}
                            className={`px-2 py-0.5 text-[10px] font-mono rounded border transition-colors cursor-pointer ${
                              app.status === st
                                ? 'bg-[#1f5a45] text-white border-[#1f5a45]'
                                : 'bg-white text-[#3b4640] border-[#e4eae6] hover:bg-slate-50'
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Chrome Extension Autofill Simulator for selected app (5 cols) */}
          <div className="lg:col-span-5 bg-[#fcfbf9] rounded-lg border border-[#d0dbd4] p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#e4eae6]">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-[#1f5a45] text-white flex items-center justify-center text-[10px] font-bold">
                    0.9
                  </div>
                  <span className="text-xs font-bold text-[#131a16]">
                    Autofill Preview on {selectedApp.company}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#1f5a45]">
                  Deterministic Match
                </span>
              </div>

              {/* Profile Selector */}
              <div className="mt-3">
                <div className="text-[11px] font-bold text-[#131a16] mb-1">
                  Active Candidate Profile:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => {
                      setActiveProfileTab('fullstack');
                      setSimulatedAutofillDone(false);
                    }}
                    className={`p-2 rounded border text-left cursor-pointer transition-colors ${
                      activeProfileTab === 'fullstack'
                        ? 'border-[#1f5a45] bg-white font-bold text-[#1f5a45]'
                        : 'border-[#e4eae6] text-[#6b7770]'
                    }`}
                  >
                    <div>Full-Stack</div>
                    <div className="text-[10px] font-normal text-[#6b7770]">Systems Focus</div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveProfileTab('product');
                      setSimulatedAutofillDone(false);
                    }}
                    className={`p-2 rounded border text-left cursor-pointer transition-colors ${
                      activeProfileTab === 'product'
                        ? 'border-[#1f5a45] bg-white font-bold text-[#1f5a45]'
                        : 'border-[#e4eae6] text-[#6b7770]'
                    }`}
                  >
                    <div>Product Eng</div>
                    <div className="text-[10px] font-normal text-[#6b7770]">Frontend Craft</div>
                  </button>
                </div>
              </div>

              {/* Simulated Form Fields Preview */}
              <div className="mt-3 space-y-1.5 text-xs">
                <div className="text-[11px] font-bold text-[#131a16]">
                  Candidate Details to Inject:
                </div>
                <div className="p-2 bg-white rounded border border-[#e4eae6] flex justify-between">
                  <span className="text-[#6b7770]">Full Name:</span>
                  <span className="font-mono text-[#131a16] font-semibold">{currentProfile.basics.fullName}</span>
                </div>
                <div className="p-2 bg-white rounded border border-[#e4eae6] flex justify-between">
                  <span className="text-[#6b7770]">Email:</span>
                  <span className="font-mono text-[#131a16]">{currentProfile.basics.email}</span>
                </div>
                <div className="p-2 bg-white rounded border border-[#e4eae6] flex justify-between">
                  <span className="text-[#6b7770]">Portfolio:</span>
                  <span className="font-mono text-[#1f5a45]">{currentProfile.basics.website}</span>
                </div>
              </div>

              {/* Shield Warning */}
              <div className="mt-3 p-2 bg-amber-50 rounded border border-amber-200 flex items-start gap-1.5 text-[10px] text-amber-900">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span>Protected fields (Visa, Demographics, Salary) are bypassed and remain for candidate review.</span>
              </div>
            </div>

            {/* Test Autofill Action */}
            <div className="mt-4 pt-3 border-t border-[#e4eae6]">
              {simulatedAutofillDone ? (
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-center text-xs text-emerald-900 font-semibold flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>Safe fields injected successfully! Ready for your review.</span>
                </div>
              ) : (
                <button
                  onClick={() => setSimulatedAutofillDone(true)}
                  className="w-full py-2 px-3 text-xs font-bold text-white bg-[#1f5a45] hover:bg-[#174837] rounded transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Simulate Deterministic Autofill</span>
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-[#e4eae6] flex flex-wrap items-center justify-between gap-3 text-xs text-[#6b7770]">
          <div>
            Data is held in browser local state for this interactive test session.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenDownload();
              }}
              className="px-3 py-1.5 bg-[#1f5a45] text-white rounded text-xs font-semibold hover:bg-[#174837] cursor-pointer"
            >
              Get Extension v0.9.3
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-[#131a16] rounded text-xs font-semibold cursor-pointer"
            >
              Close Sandbox
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
