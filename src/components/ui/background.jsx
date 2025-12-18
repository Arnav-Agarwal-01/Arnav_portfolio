import React from 'react';

export default function Background({ children, className = "" }) {
  return (
    <div className={`min-h-screen w-full bg-[#fafaf8] relative overflow-hidden ${className}`}>
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(#999 1px, transparent 1px),
            linear-gradient(90deg, #999 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}