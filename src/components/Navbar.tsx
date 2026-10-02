import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Download } from 'lucide-react';
import { ProductMark } from './ProductMark';

interface NavbarProps {
  onOpenApp: () => void;
  onOpenDownload: () => void;
  onOpenHelp?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenApp,
  onOpenDownload,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#fcfbf9]/90 backdrop-blur-md border-b border-[#e4eae6] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single cohesive anchor) */}
        <a
          href="/"
          className="flex items-center gap-2.5 text-[#131a16] group transition-opacity hover:opacity-90"
        >
          <ProductMark size="sm" variant="mark" />
          <span className="text-[15px] font-bold tracking-tight text-[#131a16] whitespace-nowrap">
            Job Application Copilot
          </span>
        </a>

        {/* Zone 2: Clean text links (4-6 links, no pill styling, subtle hover underlines) */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#3b4640]">
          <a
            href="#features"
            className="hover:text-[#1f5a45] transition-colors py-1 hover:underline underline-offset-4"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#1f5a45] transition-colors py-1 hover:underline underline-offset-4"
          >
            How it works
          </a>
          <a
            href="#safety"
            className="hover:text-[#1f5a45] transition-colors py-1 hover:underline underline-offset-4 flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#1f5a45]" />
            Safety & Control
          </a>
          <a
            href="#workspace"
            className="hover:text-[#1f5a45] transition-colors py-1 hover:underline underline-offset-4"
          >
            Web Workspace
          </a>
          <a
            href="#faq"
            className="hover:text-[#1f5a45] transition-colors py-1 hover:underline underline-offset-4"
          >
            FAQ
          </a>
          <a
            href="https://quinnverse.tech"
            target="_blank"
            rel="noreferrer"
            className="text-[#6b7770] hover:text-[#131a16] transition-colors flex items-center gap-1 py-1 group/qv"
          >
            <span>Quinnverse</span>
            <ArrowUpRight className="w-3 h-3 text-[#6b7770] group-hover/qv:text-[#131a16] transition-transform group-hover/qv:-translate-y-0.5 group-hover/qv:translate-x-0.5" />
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenApp}
            className="px-3.5 py-1.5 text-xs font-semibold text-[#1f5a45] hover:text-[#174837] bg-transparent hover:bg-[#1f5a45]/5 rounded-md transition-colors whitespace-nowrap cursor-pointer"
          >
            Open Web App
          </button>
          <button
            onClick={onOpenDownload}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1f5a45] hover:bg-[#174837] rounded-md transition-all shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Extension beta</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenDownload}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#1f5a45] rounded-md"
          >
            Beta
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#3b4640] hover:text-[#131a16] rounded-md hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#e4eae6] bg-[#fcfbf9] px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#3b4640]">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#1f5a45]"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#1f5a45]"
            >
              How it works
            </a>
            <a
              href="#safety"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#1f5a45] flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-[#1f5a45]" />
              Safety & Control
            </a>
            <a
              href="#workspace"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#1f5a45]"
            >
              Web Workspace
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#1f5a45]"
            >
              FAQ
            </a>
            <a
              href="https://quinnverse.tech"
              target="_blank"
              rel="noreferrer"
              className="py-1.5 text-[#6b7770] flex items-center gap-1"
            >
              Quinnverse Studio <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>
          <div className="pt-2 border-t border-[#e4eae6] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApp();
              }}
              className="w-full text-center py-2 text-xs font-semibold text-[#1f5a45] border border-[#1f5a45]/30 rounded-md"
            >
              Open Web App (jobs.quinnverse.tech)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full text-center py-2 text-xs font-semibold text-white bg-[#1f5a45] rounded-md shadow-sm"
            >
              Extension beta status
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
