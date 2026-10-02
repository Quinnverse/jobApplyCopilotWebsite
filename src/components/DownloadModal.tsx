import React from 'react';
import { ArrowRight, ShieldCheck, X } from 'lucide-react';
import { ProductMark } from './ProductMark';

interface DownloadModalProps { isOpen: boolean; onClose: () => void; }

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="extension-beta-title">
      <div className="bg-white rounded-xl border border-[#d0dbd4] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-[#6b7770] hover:text-[#131a16] hover:bg-slate-100 rounded-md" aria-label="Close extension beta notice"><X className="w-5 h-5" /></button>
        <div className="flex items-center gap-3 pb-4 border-b border-[#e4eae6]"><ProductMark size="md" variant="mark" /><div><h2 id="extension-beta-title" className="text-xl font-bold text-[#131a16] tracking-tight">Chrome Extension beta</h2><p className="text-xs text-[#6b7770] font-mono">Public installation access is pending</p></div></div>
        <div className="mt-6 p-4 bg-[#f0f5f2] rounded-lg border border-[#c5dbcf]"><div className="text-xs font-bold text-[#1f5a45] uppercase font-mono tracking-wider">No public download yet</div><p className="mt-2 text-sm text-[#3b4640] leading-relaxed">A verified public extension archive and matching installation guide are not available yet. This site will link to the artifact only after both are ready.</p></div>
        <div className="mt-5 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-[#3b4640] leading-relaxed"><div className="font-bold text-[#131a16] flex items-center gap-1.5 mb-2"><ShieldCheck className="w-4 h-4 text-[#1f5a45]" />Product boundary</div>The extension is designed to assist with reviewable, repetitive fields. It never submits an application for you.</div>
        <div className="mt-6 pt-4 border-t border-[#e4eae6] flex items-center justify-between gap-3"><a href="https://jobs.quinnverse.tech" className="text-xs font-medium text-[#1f5a45] hover:underline flex items-center gap-1">Open Web Workspace <ArrowRight className="w-3.5 h-3.5" /></a><button onClick={onClose} className="px-4 py-2 text-xs font-semibold text-[#131a16] bg-slate-100 hover:bg-slate-200 rounded-md">Close</button></div>
      </div>
    </div>
  );
};
