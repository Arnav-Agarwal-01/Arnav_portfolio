import React from 'react';

export default function Background({ children, className = "" }) {
  return (
    <div className={`min-h-screen w-full bg-black relative overflow-hidden ${className}`}>
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, white 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}