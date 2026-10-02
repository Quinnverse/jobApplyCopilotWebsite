import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProductMark } from './ProductMark';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenHelp: () => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenHelp,
  onOpenDownload
}) => {
  return (
    <footer className="bg-[#fcfbf9] text-[#131a16] border-t border-[#e4eae6] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <ProductMark size="md" variant="full" />
            <p className="text-xs text-[#3b4640] max-w-sm leading-relaxed mt-2">
              A calm, deterministic job application assistant and application tracker. Automate repetitive form fields while maintaining complete control over your career decisions.
            </p>
            <div className="text-xs text-[#6b7770] font-mono pt-1">
              Extension v0.9.3 · Web Workspace v1.0
            </div>
          </div>

          {/* Links Column 1: Product (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-[#131a16] uppercase tracking-wider font-mono">
              Product
            </div>
            <ul className="space-y-1.5 text-xs text-[#3b4640]">
              <li>
                <a href="#features" className="hover:text-[#1f5a45] transition-colors">
                  Features Overview
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#1f5a45] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-[#1f5a45] transition-colors">
                  Safety &amp; User Control
                </a>
              </li>
              <li>
                <a href="#workspace" className="hover:text-[#1f5a45] transition-colors">
                  Web Workspace
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDownload}
                  className="text-left hover:text-[#1f5a45] transition-colors cursor-pointer"
                >
                  Download Extension (v0.9.3)
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Legal & Trust (2 cols) */}
          <div className="md:col-span-2 space-y-2">
            <div className="text-xs font-bold text-[#131a16] uppercase tracking-wider font-mono">
              Trust &amp; Legal
            </div>
            <ul className="space-y-1.5 text-xs text-[#3b4640]">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="text-left hover:text-[#1f5a45] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="text-left hover:text-[#1f5a45] transition-colors cursor-pointer"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenHelp}
                  className="text-left hover:text-[#1f5a45] transition-colors cursor-pointer"
                >
                  Help &amp; FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Studio (2 cols) */}
          <div className="md:col-span-2 space-y-2">
            <div className="text-xs font-bold text-[#131a16] uppercase tracking-wider font-mono">
              Studio
            </div>
            <ul className="space-y-1.5 text-xs text-[#3b4640]">
              <li>
                <a
                  href="https://quinnverse.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1f5a45] transition-colors flex items-center gap-1 group"
                >
                  <span>Quinnverse</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6b7770] group-hover:text-[#1f5a45]" />
                </a>
              </li>
              <li className="text-[11px] text-[#6b7770] leading-tight pt-1">
                &ldquo;Find better tools. Build what&apos;s missing.&rdquo;
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#e4eae6] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6b7770]">
          <div>
            &copy; {new Date().getFullYear()} Quinnverse. All rights reserved. Job Application Copilot is an independent productivity tool.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Deterministic Engine</span>
            <span>·</span>
            <span>No Auto-Submit</span>
            <span>·</span>
            <span>Local-First</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
