import React from 'react';
import { ProductMark } from './ProductMark';

type DocumentKind = 'privacy' | 'terms' | 'help';

const pages: Record<DocumentKind, { title: string; body: React.ReactNode }> = {
  privacy: { title: 'Privacy information', body: <><p>This marketing site does not ask for your job-application information. The Job Application Copilot workspace processes the account, profile, and application information you choose to provide so it can provide the workspace features you use.</p><p>Self-service JSON or CSV export and account deletion are not currently offered by this public marketing site. Do not treat them as available controls.</p></> },
  terms: { title: 'Terms of use', body: <><p>Job Application Copilot is an assistive productivity tool. You are responsible for reviewing all values and personally submitting every application.</p><p>The product does not guarantee interviews, job offers, or compatibility with an external ATS. It must not be used for automated submission, mass scraping, or misrepresenting qualifications.</p></> },
  help: { title: 'Help', body: <><p>Use the Web Workspace to manage profiles, applications, and milestone records. The public extension download is not available yet.</p><p>When an extension release is available, this page will publish the verified artifact and installation instructions.</p></> },
};

export const DocumentPage: React.FC<{ kind: DocumentKind }> = ({ kind }) => {
  const page = pages[kind];
  return <main className="min-h-screen bg-[#fcfbf9] text-[#131a16]"><div className="max-w-3xl mx-auto px-4 sm:px-6 py-12"><a href="/" className="inline-flex items-center gap-2 text-[#1f5a45] hover:underline"><ProductMark size="sm" variant="mark" />Job Application Copilot</a><article className="mt-10 bg-white border border-[#d0dbd4] rounded-xl p-6 sm:p-10 shadow-sm"><h1 className="text-3xl font-extrabold tracking-tight">{page.title}</h1><div className="mt-6 space-y-4 text-sm text-[#3b4640] leading-relaxed">{page.body}</div><p className="mt-8 text-xs text-[#6b7770]">Last updated: October 2026</p></article></div></main>;
};
