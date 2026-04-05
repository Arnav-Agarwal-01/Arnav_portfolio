"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "SQL", "C", "C++"],
  },
  {
    title: "Frameworks & Stack",
    skills: ["React.js", "Node.js", "Next.js", "Express.js", "MERN Stack"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Deep Learning", "AIML", "Generative AI (GenAI)", "NLP", "Computer Vision (CV)", "TensorFlow", "Keras", "PyTorch", "HuggingFace", "LangChain", "LangGraph", "scikit-learn", "RAG", "Agentic AI"],
  },
  {
    title: "Tech & Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "MongoDB", "Git", "GitHub", "Selenium", "Web Scraping", "Model Context Protocol (MCP)", "Cloud Technologies"],
  },
  {
    title: "Core Coursework",
    skills: ["Data Structures and Algorithms (DSA)", "Operating Systems (OS)", "DBMS", "System Design", "Computer Networks (CN)", "Software Engineering"],
  },
  {
    title: "Achievements & CP",
    skills: ["Stanford Code In Place (Full Marks & Distinction)", "Competitive Programming", "Codeforces Pupil", "450+ LeetCode Problems", "Contest Rating 1550"],
  },
];

export default function SkillsSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="skills" className="relative bg-zinc-950 py-16 md:py-24 px-5 md:px-10 lg:px-14 flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_50%)]" />
      
      <div className="mx-auto w-full max-w-[1200px] relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col items-start gap-4">
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[11px] font-semibold uppercase tracking-[0.32em] text-zinc-400"
            >
                Technical Arsenal
            </motion.p>
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-semibold leading-[0.92] tracking-[-0.03em] text-zinc-50 md:text-4xl lg:text-5xl"
            >
                Expertise
            </motion.h2>
        </div>

        <div className="flex flex-col border-t border-white/[0.05]">
            {skillCategories.map((category, idx) => {
                const isOpen = openIndex === idx;

                return (
                    <div key={category.title} className="border-b border-white/[0.05]">
                        <button
                            onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                            className="w-full py-5 md:py-8 flex items-center justify-between group"
                        >
                            <span className={`text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-left transition-colors duration-500 ${isOpen ? "text-white" : "text-white/20 group-hover:text-white/60"}`}>
                                {category.title}
                            </span>
                            <span className="relative flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-transform duration-500 shrink-0">
                                <span className="absolute h-[1.5px] w-3 md:w-4 bg-current" />
                                <span className={`absolute h-3 md:h-4 w-[1.5px] bg-current transition-transform duration-500 ${isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
                            </span>
                        </button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-8 md:pb-10 flex flex-wrap gap-3 md:gap-4 pt-2">
                                        {category.skills.map((skill, sIdx) => (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: sIdx * 0.03, duration: 0.3 }}
                                                className="text-[15px] md:text-lg font-light text-zinc-300 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02]"
                                            >
                                                {skill}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
}
