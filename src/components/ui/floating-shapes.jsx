"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top right diagonal accent */}
      <motion.div
        className="absolute w-96 h-1 bg-gradient-to-r from-black/0 via-black/10 to-black/0"
        style={{ top: "20%", right: "10%", transform: "rotate(25deg)" }}
        animate={{
          scaleX: [0.5, 1, 0.5],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center accent */}
      <motion.div
        className="absolute w-48 h-0.5 bg-gradient-to-r from-black/0 via-black/10 to-black/0"
        style={{ top: "50%", left: "20%", transform: "rotate(-15deg)" }}
        animate={{
          scaleX: [0.7, 1, 0.7],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Minimal dot accent - top right */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-black/20"
        style={{ top: "25%", right: "25%" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Minimal dot accent - bottom left */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-black/15"
        style={{ bottom: "30%", left: "15%" }}
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Subtle horizontal line - bottom */}
      <motion.div
        className="absolute w-64 h-0.5 bg-gradient-to-r from-black/0 via-black/10 to-black/0"
        style={{ bottom: "20%", right: "15%" }}
        animate={{
          scaleX: [0.6, 1, 0.6],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  );
}
