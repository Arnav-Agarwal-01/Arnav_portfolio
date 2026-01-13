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
      <p className="max-w-2xl text-black/60 text-lg md:text-xl lg:text-2xl font-light tracking-wide md:-translate-y-38 md:translate-x-5">
      <br></br>
        A developer with interest and experience in Full Stack Developement, Artificial Intelligence and Machine Learning, along with DevOps.<br></br><br></br>
        I am from India and love to create systems that scale.<br></br> I was also an Intern at Salesforce and built sites that handled more than 45,000+ visits.
      </p>
    </motion.div>
  );
}
