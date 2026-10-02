import React from 'react';

interface ProductMarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  variant?: 'mark' | 'full' | 'extension';
}

export const ProductMark: React.FC<ProductMarkProps> = ({
  size = 'md',
  className = '',
  variant = 'mark'
}) => {
  const pixelSizes = {
    sm: 20,
    md: 28,
    lg: 36,
    xl: 48,
  };

  const px = pixelSizes[size];

  const iconGraphic = (
    <div
      style={{ width: px, height: px }}
      className="relative flex items-center justify-center rounded-lg bg-[#1f5a45] text-white shadow-sm shrink-0 transition-transform group-hover:scale-105"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[62%] h-[62%]"
      >
        {/* Clean geometric frame representing application dossier + precision autofill notch */}
        <path
          d="M7 6C7 4.89543 7.89543 4 9 4H21C22.1046 4 23 4.89543 23 6V26C23 27.1046 22.1046 28 21 28H9C7.89543 28 7 27.1046 7 26V6Z"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Horizontal structure lines representing verified candidate records */}
        <path
          d="M11 10H19"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M11 15H17"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Deterministic check badge dot */}
        <circle cx="21" cy="21" r="3" fill="#a3e635" />
        <path
          d="M20 21L20.8 21.8L22.2 20.2"
          stroke="#1f5a45"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{iconGraphic}</div>;
  }

  if (variant === 'extension') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        {iconGraphic}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-xs text-[#131a16] tracking-tight">Job Copilot</span>
            <span className="font-mono text-[10px] text-[#6b7770] tracking-normal">v0.9.3</span>
          </div>
          <span className="text-[10px] text-[#1f5a45] font-medium tracking-tight">Extension Active</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {iconGraphic}
      <div className="flex flex-col text-left leading-none">
        <span className="font-bold text-[15px] text-[#131a16] tracking-tight">
          Job Application Copilot
        </span>
        <span className="text-[11px] text-[#6b7770] tracking-normal mt-0.5 font-medium">
          Job OS · Built by Quinnverse
        </span>
      </div>
    </div>
  );
};
