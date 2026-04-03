import React from 'react';

export default function Background({ children, className = "" }) {
  return (
    <div className={`min-h-screen w-full bg-background relative overflow-x-clip ${className}`}>
      {/* Subtle grid lines */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
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