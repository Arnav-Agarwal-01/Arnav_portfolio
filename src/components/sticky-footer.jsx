"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Instagram, Twitter } from "lucide-react";

export default function StickyFooter() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: "https://github.com/Arnav-Agarwal-01", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/arnavagarwal05", label: "LinkedIn" },
        { icon: Mail, href: "mailto:arnav22agarwal@gmail.com", label: "Email" },
    ];

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/#projects" },
        { label: "About", href: "/#about" },
        { label: "Contact", href: "mailto:arnav22agarwal@gmail.com" },
    ];

    return (
        <div
            className="relative h-[400px] md:h-[500px] w-full"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="fixed bottom-0 h-[400px] md:h-[500px] w-full -z-10 bg-neutral-950 text-white border-t border-neutral-800">
                <div className="container mx-auto px-6 h-full flex flex-col justify-between py-12 md:py-16">

                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
                                Let's build something <br /> amazing together.
                            </h2>
                            <p className="text-neutral-400 text-lg md:text-xl font-light">
                                Always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 text-lg"
                                >
                                    {link.label}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-white/10 mt-auto">
                        <div className="flex flex-col gap-2">
                            <span className="text-[120px] md:text-[180px] leading-none font-bold tracking-tighter text-white/5 select-none pointer-events-none absolute bottom-0 left-0 -z-10 translate-y-[20%]">
                                ARNAV
                            </span>
                            <div className="text-sm text-neutral-500">
                                © {currentYear} Arnav Agarwal.
                            </div>
                            <div className="text-sm text-neutral-500">
                                Built with Next.js & Tailwind.
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6 md:mt-0">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
