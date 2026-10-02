import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProductMark } from './ProductMark';

export const Footer: React.FC<{ onOpenDownload: () => void }> = ({ onOpenDownload }) => (
  <footer className="bg-[#fcfbf9] text-[#131a16] border-t border-[#e4eae6] py-14">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div><ProductMark size="md" variant="full" /><p className="text-xs text-[#3b4640] max-w-sm leading-relaxed mt-3">A deterministic job application assistant and tracker. Automate repetitive form fields while maintaining control over career decisions.</p></div>
      <div><div className="text-xs font-bold uppercase tracking-wider font-mono mb-3">Product</div><ul className="space-y-2 text-xs"><li><a href="https://jobs.quinnverse.tech" className="hover:text-[#1f5a45]">Open Web Workspace</a></li><li><button onClick={onOpenDownload} className="hover:text-[#1f5a45] text-left">Extension beta status</button></li></ul></div>
      <div><div className="text-xs font-bold uppercase tracking-wider font-mono mb-3">Trust &amp; legal</div><ul className="space-y-2 text-xs"><li><a href="/privacy/" className="hover:text-[#1f5a45]">Privacy information</a></li><li><a href="/terms/" className="hover:text-[#1f5a45]">Terms of use</a></li><li><a href="/help/" className="hover:text-[#1f5a45]">Help</a></li><li><a href="https://quinnverse.tech" target="_blank" rel="noreferrer" className="hover:text-[#1f5a45] inline-flex items-center gap-1">Quinnverse <ArrowUpRight className="w-3 h-3" /></a></li></ul></div>
    </div>
  </footer>
);
