"use client";

import { motion } from "framer-motion";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export default function RoleTagline() {
  return (
    <motion.div
      className={`${opensans.className} -mt-4 mb-2`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <p className="text-black/60 text-lg md:text-xl lg:text-2xl font-light tracking-wide">
        Full Stack Developer & Creative Technologist
      </p>
    </motion.div>
  );
}
