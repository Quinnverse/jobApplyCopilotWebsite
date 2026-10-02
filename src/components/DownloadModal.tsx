import React from 'react';
import { X, Download, ShieldCheck, Check, Terminal, FolderArchive, ArrowRight } from 'lucide-react';
import { ProductMark } from './ProductMark';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  onOpenApp,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-xl border border-[#d0dbd4] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6b7770] hover:text-[#131a16] hover:bg-slate-100 rounded-md transition-colors"
          aria-label="Close download modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#e4eae6]">
          <ProductMark size="md" variant="mark" />
          <div>
            <h2 className="text-xl font-bold text-[#131a16] tracking-tight">
              Get Chrome Extension v0.9.3
            </h2>
            <div className="text-xs text-[#6b7770] font-mono">
              Job Application Copilot · Manifest V3
            </div>
          </div>
        </div>

        {/* Direct Download Action */}
        <div className="mt-6 p-4 bg-[#f0f5f2] rounded-lg border border-[#c5dbcf] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#1f5a45] uppercase font-mono tracking-wider">
              Release Bundle (0.9.3-beta)
            </div>
            <div className="text-sm font-bold text-[#131a16] mt-0.5">
              job-copilot-extension-v0.9.3.zip
            </div>
            <div className="text-xs text-[#3b4640] mt-0.5">
              Compatible with Google Chrome, Brave, Arc, Edge &amp; Chromium
            </div>
          </div>
          <button
            onClick={() => {
              alert('Downloading Chrome Extension v0.9.3 release package...');
            }}
            className="px-4 py-2.5 bg-[#1f5a45] hover:bg-[#174837] text-white text-xs font-bold rounded-md shadow-sm transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download .ZIP</span>
          </button>
        </div>

        {/* Two Installation Pathways */}
        <div className="mt-6 space-y-4">
          <div className="text-xs font-bold text-[#131a16] uppercase font-mono tracking-wider">
            Installation Guide (Developer / Unpacked Mode)
          </div>

          <ol className="space-y-3 text-xs text-[#3b4640] list-decimal list-inside bg-[#fcfbf9] p-4 rounded-lg border border-[#e4eae6]">
            <li className="leading-relaxed">
              <strong>Unpack Archive:</strong> Download and unzip <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">job-copilot-extension-v0.9.3.zip</code> to a folder on your computer.
            </li>
            <li className="leading-relaxed">
              <strong>Open Chrome Extensions:</strong> In your browser URL bar, navigate to <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">chrome://extensions</code>.
            </li>
            <li className="leading-relaxed">
              <strong>Enable Developer Mode:</strong> Toggle the <strong>Developer mode</strong> switch in the upper-right corner of the Extensions page.
            </li>
            <li className="leading-relaxed">
              <strong>Load Unpacked:</strong> Click <strong>Load unpacked</strong> in the top-left and select the unzipped directory.
            </li>
            <li className="leading-relaxed">
              <strong>Pin &amp; Authenticate:</strong> Pin the Job Copilot icon to your toolbar and sign in or link your Web Workspace at <a href="https://jobs.quinnverse.tech" target="_blank" rel="noreferrer" className="text-[#1f5a45] underline font-medium">jobs.quinnverse.tech</a>.
            </li>
          </ol>
        </div>

        {/* Manifest Permissions Transparency */}
        <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200">
          <div className="text-xs font-bold text-[#131a16] flex items-center gap-1.5 mb-2 font-mono">
            <ShieldCheck className="w-4 h-4 text-[#1f5a45]" />
            <span>Strict Permission Boundaries (Manifest V3)</span>
          </div>
          <div className="space-y-1.5 text-xs text-[#6b7770]">
            <div>
              <strong className="text-[#131a16]">storage:</strong> Used strictly to cache your active profile and application drafts locally on your machine.
            </div>
            <div>
              <strong className="text-[#131a16]">activeTab:</strong> Only activates when you click the extension on an application page. Zero background web traffic logging.
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-6 pt-4 border-t border-[#e4eae6] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenApp();
            }}
            className="text-xs font-medium text-[#1f5a45] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Don&apos;t have an account? Open Web Workspace</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#131a16] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
