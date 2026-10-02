import React from 'react';
import { Download, ArrowRight, ShieldCheck } from 'lucide-react';
import { ProductMark } from './ProductMark';

interface FinalCtaSectionProps {
  onGetExtension: () => void;
  onOpenApp: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onGetExtension,
  onOpenApp
}) => {
  return (
    <section className="py-20 bg-white border-b border-[#e4eae6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="flex justify-center mb-6">
          <ProductMark size="lg" variant="mark" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#131a16] tracking-tight text-balance leading-tight">
          Spend less time repeating yourself.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#3b4640] max-w-xl mx-auto leading-relaxed">
          Bring calm precision to your job search. Save opportunities in one click, track your pipeline without messy spreadsheets, and autofill safe fields with full oversight.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={onGetExtension}
            className="px-6 py-3.5 text-sm font-semibold text-white bg-[#1f5a45] hover:bg-[#174837] rounded-lg transition-all shadow-sm hover:shadow active:scale-[0.99] flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Extension beta</span>
          </button>
          
          <button
            onClick={onOpenApp}
            className="px-5 py-3.5 text-sm font-semibold text-[#131a16] bg-[#fcfbf9] hover:bg-slate-50 border border-[#d0dbd4] rounded-lg transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Open Job OS Workspace</span>
            <ArrowRight className="w-4 h-4 text-[#6b7770]" />
          </button>
        </div>

        {/* Studio attribution footer note */}
        <div className="mt-8 pt-8 border-t border-[#e4eae6] flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#6b7770]">
          <span className="font-bold text-[#1f5a45]">Built by Quinnverse</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Find better tools. Build what&apos;s missing.</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Reviewable, deterministic workflow</span>
        </div>

      </div>
    </section>
  );
};
