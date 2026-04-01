"use client";

import React from "react";

export default function Background({ children, className = "" }) {
  return (
    <div
      className={`min-h-screen w-full relative overflow-x-clip ${className}`}
      style={{ backgroundColor: "#fafaf8" }}
    >
      {/* ── Animated gradient blobs (fixed to viewport) ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Blob 1 – warm peach, top-left drift */}
        <div
          className="absolute rounded-full blur-[100px]"
          style={{
            width: "min(50vw, 700px)",
            height: "min(50vw, 700px)",
            background:
              "radial-gradient(circle, #f9d4b0 0%, #f5c89a 40%, transparent 70%)",
            top: "-15%",
            left: "-10%",
            opacity: 0.4,
            animation: "blob-drift-1 18s ease-in-out infinite",
          }}
        />

        {/* Blob 2 – lavender, top-right hover */}
        <div
          className="absolute rounded-full blur-[120px]"
          style={{
            width: "min(45vw, 650px)",
            height: "min(45vw, 650px)",
            background:
              "radial-gradient(circle, #d4c5f9 0%, #c9b8f0 40%, transparent 70%)",
            top: "0%",
            right: "-8%",
            opacity: 0.35,
            animation: "blob-drift-2 22s ease-in-out infinite",
          }}
        />

        {/* Blob 3 – soft mint, center-left */}
        <div
          className="absolute rounded-full blur-[110px]"
          style={{
            width: "min(40vw, 550px)",
            height: "min(40vw, 550px)",
            background:
              "radial-gradient(circle, #b5e8d5 0%, #a0dcc5 40%, transparent 70%)",
            top: "35%",
            left: "0%",
            opacity: 0.3,
            animation: "blob-drift-3 20s ease-in-out infinite",
          }}
        />

        {/* Blob 4 – pale gold, bottom-right */}
        <div
          className="absolute rounded-full blur-[100px]"
          style={{
            width: "min(42vw, 600px)",
            height: "min(42vw, 600px)",
            background:
              "radial-gradient(circle, #f5e6b8 0%, #eedda3 40%, transparent 70%)",
            bottom: "-5%",
            right: "5%",
            opacity: 0.35,
            animation: "blob-drift-4 24s ease-in-out infinite",
          }}
        />

        {/* Blob 5 – rose, bottom-left accent */}
        <div
          className="absolute rounded-full blur-[90px]"
          style={{
            width: "min(35vw, 480px)",
            height: "min(35vw, 480px)",
            background:
              "radial-gradient(circle, #f0c4c8 0%, #e8b0b5 40%, transparent 70%)",
            bottom: "10%",
            left: "-5%",
            opacity: 0.25,
            animation: "blob-drift-5 19s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Noise / grain texture overlay (fixed to viewport) ── */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10">{children}</div>

      {/* ── Keyframes ── */}
      <style jsx global>{`
        @keyframes blob-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(6vw, 4vh) scale(1.08); }
          66% { transform: translate(-3vw, 8vh) scale(0.95); }
        }
        @keyframes blob-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-5vw, 6vh) scale(1.05); }
          50% { transform: translate(-8vw, -2vh) scale(0.92); }
          75% { transform: translate(2vw, 5vh) scale(1.1); }
        }
        @keyframes blob-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(8vw, -5vh) scale(1.06); }
          70% { transform: translate(3vw, 6vh) scale(0.94); }
        }
        @keyframes blob-drift-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(-6vw, -4vh) scale(1.04); }
          60% { transform: translate(4vw, -8vh) scale(0.96); }
        }
        @keyframes blob-drift-5 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          35% { transform: translate(5vw, -3vh) scale(1.07); }
          65% { transform: translate(-2vw, 7vh) scale(0.93); }
        }
      `}</style>
    </div>
  );
}