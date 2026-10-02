import React, { useState } from 'react';
import { 
  Briefcase, 
  UserCheck, 
  Bell, 
  Database, 
  Calendar, 
  MapPin, 
  Building, 
  FileSpreadsheet, 
  Download,
  Copy,
  ExternalLink,
  Clock,
  CheckCircle,
  Filter
} from 'lucide-react';
import { INITIAL_APPLICATIONS, MOCK_PROFILES, MOCK_REMINDERS } from '../data/mock-data';
import { ApplicationStatus } from '../types/job-os';

interface WorkspaceSectionProps {
  onOpenPreview: () => void;
}

export const WorkspaceSection: React.FC<WorkspaceSectionProps> = ({
  onOpenPreview
}) => {
  const [activeTab, setActiveTab] = useState<'applications' | 'profiles' | 'reminders' | 'settings'>('applications');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedProfileId, setSelectedProfileId] = useState<string>('prof-1');

  const filteredApplications = statusFilter === 'ALL'
    ? INITIAL_APPLICATIONS
    : INITIAL_APPLICATIONS.filter(app => app.status === statusFilter);

  const selectedProfile = MOCK_PROFILES.find(p => p.id === selectedProfileId) || MOCK_PROFILES[0];

  const getStatusBadgeStyle = (status: ApplicationStatus) => {
    switch (status) {
      case 'SAVED':
        return 'text-[#3b4640] bg-slate-100 border-[#e2e8f0]';
      case 'APPLIED':
        return 'text-blue-800 bg-blue-50 border-blue-200';
      case 'INTERVIEW':
        return 'text-[#1f5a45] bg-[#f0f5f2] border-[#1f5a45]/30 font-semibold';
      case 'OFFER':
        return 'text-emerald-900 bg-emerald-100 border-emerald-300 font-bold';
      case 'REJECTED':
        return 'text-stone-700 bg-stone-100 border-stone-200';
      case 'WITHDRAWN':
        return 'text-amber-800 bg-amber-50 border-amber-200';
      default:
        return 'text-slate-600 bg-slate-100 border-slate-200';
    }
  };

  return (
    <section id="workspace" className="py-20 bg-[#fcfbf9] border-b border-[#e4eae6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-wider uppercase text-[#1f5a45] mb-2 font-mono">
              04. The Web Workspace · jobs.quinnverse.tech
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131a16] tracking-tight leading-tight">
              One central command center for every application.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#3b4640] leading-relaxed">
              Keep applications, profiles, and milestones organized in one workspace.
            </p>
          </div>

          <button
            onClick={onOpenPreview}
            className="self-start md:self-auto px-4 py-2 text-xs font-semibold text-[#1f5a45] bg-white border border-[#1f5a45]/30 hover:border-[#1f5a45] rounded-md transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer whitespace-nowrap"
          >
            <span>View Product Preview</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Feature Tabs (Functional Segmented Buttons) */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#e4eae6] pb-3">
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'applications'
                ? 'bg-[#1f5a45] text-white shadow-sm'
                : 'text-[#3b4640] hover:text-[#131a16] hover:bg-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Applications Tracker</span>
            <span className="font-mono text-[10px] opacity-80">({INITIAL_APPLICATIONS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('profiles')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'profiles'
                ? 'bg-[#1f5a45] text-white shadow-sm'
                : 'text-[#3b4640] hover:text-[#131a16] hover:bg-white'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Target Profiles</span>
            <span className="font-mono text-[10px] opacity-80">(Multiple)</span>
          </button>

          <button
            onClick={() => setActiveTab('reminders')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'reminders'
                ? 'bg-[#1f5a45] text-white shadow-sm'
                : 'text-[#3b4640] hover:text-[#131a16] hover:bg-white'
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>Reminders &amp; Deadlines</span>
            <span className="font-mono text-[10px] opacity-80">({MOCK_REMINDERS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-[#1f5a45] text-white shadow-sm'
                : 'text-[#3b4640] hover:text-[#131a16] hover:bg-white'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Sync &amp; Data Export</span>
          </button>
        </div>

        {/* Tab 1: Applications Tracker */}
        {activeTab === 'applications' && (
          <div className="mt-6 bg-white rounded-xl border border-[#d0dbd4] p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#e4eae6] gap-3">
              <div>
                <h3 className="text-base font-bold text-[#131a16]">
                  Active Application Pipeline
                </h3>
                <p className="text-xs text-[#6b7770]">
                  Track progress across 6 standardized lifecycle statuses.
                </p>
              </div>

              {/* Status Filters */}
              <div className="flex flex-wrap items-center gap-1">
                {['ALL', 'SAVED', 'APPLIED', 'INTERVIEW', 'OFFER', 'REJECTED', 'WITHDRAWN'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded border transition-colors cursor-pointer ${
                      statusFilter === st
                        ? 'bg-[#1f5a45] text-white border-[#1f5a45]'
                        : 'bg-[#fcfbf9] text-[#3b4640] border-[#e4eae6] hover:bg-slate-100'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Applications List View */}
            <div className="mt-4 divide-y divide-[#e4eae6]">
              {filteredApplications.map((app) => (
                <div
                  key={app.id}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#fcfbf9] px-2 rounded transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#f0f5f2] border border-[#e4eae6] flex items-center justify-center text-xs font-bold text-[#1f5a45] shrink-0">
                      {app.company[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#131a16]">{app.role}</span>
                        <span className="text-xs text-[#6b7770]">at</span>
                        <span className="text-xs font-bold text-[#131a16]">{app.company}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#6b7770] mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#6b7770]" />
                          {app.location}
                        </span>
                        {app.salaryRange && (
                          <span className="font-mono text-[11px] text-[#1f5a45]">
                            {app.salaryRange}
                          </span>
                        )}
                        <span className="font-mono text-[11px]">
                          Profile: {app.activeProfileUsed}
                        </span>
                        {app.atsType && (
                          <span className="font-mono text-[10px] text-[#6b7770]">
                            ATS: {app.atsType}
                          </span>
                        )}
                      </div>
                      {app.notes && (
                        <div className="text-xs text-[#3b4640] mt-1.5 italic bg-[#f8faf9] px-2 py-1 rounded border border-[#e4eae6]">
                          &ldquo;{app.notes}&rdquo;
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1.5 shrink-0">
                    <span
                      className={`text-xs px-2.5 py-1 rounded border font-mono ${getStatusBadgeStyle(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                    <span className="text-[10px] font-mono text-[#6b7770]">
                      Updated {app.updatedDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Target Profiles */}
        {activeTab === 'profiles' && (
          <div className="mt-6 bg-white rounded-xl border border-[#d0dbd4] p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#e4eae6] gap-3">
              <div>
                <h3 className="text-base font-bold text-[#131a16]">
                  Multiple Targeted Candidate Profiles
                </h3>
                <p className="text-xs text-[#6b7770]">
                  Tailor your autofill baseline for different job families (e.g. Full-Stack vs Product Engineer).
                </p>
              </div>

              {/* Profile selector buttons */}
              <div className="flex items-center gap-2">
                {MOCK_PROFILES.map((prof) => (
                  <button
                    key={prof.id}
                    onClick={() => setSelectedProfileId(prof.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded border transition-colors cursor-pointer ${
                      selectedProfileId === prof.id
                        ? 'bg-[#1f5a45] text-white border-[#1f5a45]'
                        : 'bg-[#fcfbf9] text-[#3b4640] border-[#e4eae6] hover:bg-slate-50'
                    }`}
                  >
                    <span>{prof.name}</span>
                    {prof.isDefault && (
                      <span className="ml-1.5 text-[10px] font-mono text-emerald-200">
                        (Default)
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Profile Content Breakdown */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Basics Column */}
              <div className="p-4 bg-[#fcfbf9] rounded border border-[#e4eae6] space-y-3">
                <div className="text-xs font-bold text-[#1f5a45] uppercase tracking-wider font-mono">
                  01. Basics &amp; Contact
                </div>
                <div className="space-y-1.5 text-xs">
                  <div>
                    <span className="text-[#6b7770]">Full Name:</span>{' '}
                    <span className="font-semibold text-[#131a16]">{selectedProfile.basics.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[#6b7770]">Email:</span>{' '}
                    <span className="font-mono text-[#131a16]">{selectedProfile.basics.email}</span>
                  </div>
                  <div>
                    <span className="text-[#6b7770]">Phone:</span>{' '}
                    <span className="font-mono text-[#131a16]">{selectedProfile.basics.phone}</span>
                  </div>
                  <div>
                    <span className="text-[#6b7770]">Location:</span>{' '}
                    <span className="text-[#131a16]">{selectedProfile.basics.location}</span>
                  </div>
                  <div>
                    <span className="text-[#6b7770]">Website:</span>{' '}
                    <span className="font-mono text-[#1f5a45]">{selectedProfile.basics.website}</span>
                  </div>
                  <div>
                    <span className="text-[#6b7770]">LinkedIn:</span>{' '}
                    <span className="font-mono text-[#1f5a45]">{selectedProfile.basics.linkedin}</span>
                  </div>
                </div>
              </div>

              {/* Experience Column */}
              <div className="p-4 bg-[#fcfbf9] rounded border border-[#e4eae6] space-y-3">
                <div className="text-xs font-bold text-[#1f5a45] uppercase tracking-wider font-mono">
                  02. Experience &amp; Highlights
                </div>
                <div className="space-y-3 text-xs">
                  {selectedProfile.experience.map((exp, idx) => (
                    <div key={idx} className="pb-2 border-b border-[#e4eae6] last:border-none last:pb-0">
                      <div className="font-bold text-[#131a16]">{exp.title}</div>
                      <div className="text-[#6b7770] font-mono text-[11px]">
                        {exp.company} · {exp.period}
                      </div>
                      <ul className="mt-1 space-y-1 text-[#3b4640] list-disc list-inside text-[11px]">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="leading-snug">{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Skills Column */}
              <div className="p-4 bg-[#fcfbf9] rounded border border-[#e4eae6] space-y-3">
                <div className="text-xs font-bold text-[#1f5a45] uppercase tracking-wider font-mono">
                  03. Education &amp; Skills
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#131a16]">
                    {selectedProfile.education[0].school}
                  </div>
                  <div className="text-[#3b4640]">
                    {selectedProfile.education[0].degree}
                  </div>
                  <div className="text-[11px] font-mono text-[#6b7770]">
                    Graduation: {selectedProfile.education[0].gradYear}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#e4eae6]">
                  <div className="text-xs font-bold text-[#131a16] mb-1.5">Skills Array:</div>
                  <div className="flex flex-wrap gap-1">
                    {selectedProfile.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono bg-white border border-[#e4eae6] text-[#131a16] px-1.5 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Reminders */}
        {activeTab === 'reminders' && (
          <div className="mt-6 bg-white rounded-xl border border-[#d0dbd4] p-5 shadow-sm">
            <div className="pb-4 border-b border-[#e4eae6]">
              <h3 className="text-base font-bold text-[#131a16]">
                Application Reminders &amp; Milestones
              </h3>
              <p className="text-xs text-[#6b7770]">
                Track follow-ups, application deadlines, and interview milestones in your workspace.
              </p>
            </div>

            <div className="mt-4 space-y-2.5">
              {MOCK_REMINDERS.map((rem) => (
                <div
                  key={rem.id}
                  className="p-3 bg-[#fcfbf9] rounded border border-[#e4eae6] flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold ${
                        rem.type === 'INTERVIEW'
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : rem.type === 'FOLLOW_UP'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-blue-100 text-blue-900 border border-blue-300'
                      }`}
                    >
                      {rem.type}
                    </span>
                    <div>
                      <div className="font-bold text-[#131a16]">
                        {rem.company} · {rem.role}
                      </div>
                      <div className="text-[11px] text-[#6b7770] flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-[#6b7770]" />
                        <span>Due: {rem.dueDate}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] text-[#1f5a45] font-semibold bg-[#f0f5f2] px-2.5 py-1 rounded">
                    Active Reminder
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Settings & Data Export */}
        {activeTab === 'settings' && (
          <div className="mt-6 bg-white rounded-xl border border-[#d0dbd4] p-5 shadow-sm">
            <div className="pb-4 border-b border-[#e4eae6]">
              <h3 className="text-base font-bold text-[#131a16]">
                Data Ownership &amp; Synchronization
              </h3>
              <p className="text-xs text-[#6b7770]">
                Local-first persistence with encrypted cloud backup and complete data exportability.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-[#fcfbf9] rounded border border-[#e4eae6] space-y-3">
                <div className="font-bold text-[#131a16] text-sm">Cloud Sync Status</div>
                <div className="space-y-1.5 text-[#3b4640]">
                  <div className="flex justify-between">
                    <span>Sync Direction:</span>
                    <span className="font-mono text-[#1f5a45]">Bidirectional (Push / Pull)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Sync:</span>
                    <span className="font-mono text-[#131a16]">Just now · 0 latency</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Extension Connection:</span>
                    <span className="font-mono text-emerald-700 font-semibold">Paired (v0.9.3)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#fcfbf9] rounded border border-[#e4eae6] space-y-3">
                <div className="font-bold text-[#131a16] text-sm">Workspace settings</div>
                <p className="text-xs text-[#3b4640]">This product preview illustrates organization features only. Public self-service data export is not available yet.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
