"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Zap } from "lucide-react";

const stats = [
  { icon: Code, value: "50+", label: "Projects" },
  { icon: Zap, value: "5+", label: "Years" },
  { icon: Coffee, value: "∞", label: "Coffee" },
];

export default function QuickStats() {
  return (
    <motion.div
      className="flex gap-8 mt-12 justify-start"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 + index * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center">
            <stat.icon className="w-6 h-6 text-black/60" />
          </div>
          <div className="text-2xl font-bold text-black/80">{stat.value}</div>
          <div className="text-sm text-black/50">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
