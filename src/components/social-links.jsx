"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Arnav-Agarwal-01", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/arnavagarwal05", label: "LinkedIn" },
  { icon: Mail, href: "arnav22agarwal@gmail.com", label: "Email" },
];

export default function SocialLinks() {
  return (
    <motion.div
      className="flex gap-4 mt-8 justify-start md:-translate-y-45 md:translate-x-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="w-12 h-12 rounded-full border-2 border-black/20 flex items-center justify-center hover:bg-black/5 hover:border-black/40 transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <social.icon className="w-5 h-5 text-black/70" />
        </motion.a>
      ))}
    </motion.div>
  );
}
