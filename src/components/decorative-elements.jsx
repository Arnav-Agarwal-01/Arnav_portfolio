"use client";

import { motion } from "framer-motion";

export default function DecorativeElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Clean vertical accent - left */}
      <motion.div
        className="absolute w-0.5 h-48 bg-black/15"
        style={{ top: "30%", left: "8%" }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scaleY: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Clean vertical accent - right */}
      <motion.div
        className="absolute w-0.5 h-40 bg-black/12"
        style={{ top: "45%", right: "12%" }}
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scaleY: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />

      {/* Corner accent - top left */}
      <motion.div
        className="absolute"
        style={{ top: "5%", left: "5%" }}
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-20 h-20 border border-black/10" />
      </motion.div>

      {/* Corner accent - bottom right */}
      <motion.div
        className="absolute"
        style={{ bottom: "8%", right: "8%" }}
        animate={{
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-16 h-16 border border-black/8" />
      </motion.div>

      {/* Minimal dots grid */}
      {[...Array(3)].map((_, i) =>
        [...Array(2)].map((_, j) => (
          <motion.div
            key={`dot-${i}-${j}`}
            className="absolute w-1 h-1 rounded-full bg-black/15"
            style={{
              top: `${15 + i * 35}%`,
              right: `${18 + j * 15}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i + j) * 0.15,
            }}
          />
        ))
      )}
    </div>
  );
}
