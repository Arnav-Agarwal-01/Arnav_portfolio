"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Send } from "lucide-react";

const contactLinks = [
    {
        icon: Mail,
        label: "Email",
        value: "arnav22agarwal@gmail.com",
        href: "mailto:arnav22agarwal@gmail.com",
        cta: "Send email",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "Arnav-Agarwal-01",
        href: "https://github.com/Arnav-Agarwal-01",
        cta: "View profile",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "arnavagarwal05",
        href: "https://linkedin.com/in/arnavagarwal05",
        cta: "Connect",
    },
];

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Hey Arnav! From ${form.name}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        );
        window.location.href = `mailto:arnav22agarwal@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section
            id="contact"
            className="relative py-24 md:py-32"
            style={{ backgroundColor: "#fafaf8" }}
        >
            <div className="mx-auto max-w-[1500px] px-5 md:px-10 lg:px-14">
                {/* Header */}
                <div className="mb-16 md:mb-20 max-w-3xl">
                    <motion.p
                        className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-black/45"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Get in Touch
                    </motion.p>
                    <motion.h2
                        className="text-3xl font-semibold leading-[0.92] tracking-[-0.06em] text-black sm:text-4xl md:text-5xl lg:text-6xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Have a project in mind?
                        <br />
                        <span className="text-black/40">Let's talk.</span>
                    </motion.h2>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
                    {contactLinks.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/60 p-7 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-white/80 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:p-8 min-h-[200px]"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.15 * index,
                            }}
                        >
                            {/* Icon */}
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-background transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                                <link.icon className="h-5 w-5" />
                            </div>

                            {/* Content */}
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.24em] text-black/40 mb-2">
                                    {link.label}
                                </p>
                                <p className="text-lg font-medium text-black/80 md:text-xl break-all">
                                    {link.value}
                                </p>
                            </div>

                            {/* CTA Arrow */}
                            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-black/50 transition-colors duration-300 group-hover:text-black">
                                {link.cta}
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Location badge */}
                <motion.div
                    className="mt-12 flex items-center gap-3 text-sm text-black/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <MapPin className="h-4 w-4" />
                    <span>Based in India · Open to remote opportunities worldwide</span>
                </motion.div>

                {/* ── Direct Contact Form ── */}
                <motion.div
                    className="mt-20 md:mt-28"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl md:text-4xl">
                            Wanna reach out directly?
                        </h3>
                        <p className="mt-3 text-base text-black/50 md:text-lg">
                            Fill in the box below — it goes straight to my inbox.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 grid grid-cols-1 gap-5 max-w-2xl mx-auto md:grid-cols-2 md:gap-6"
                    >
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="contact-name"
                                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45"
                            >
                                Your Name
                            </label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Jane Doe"
                                className="rounded-xl border border-black/10 bg-white/70 px-5 py-4 text-base text-black placeholder:text-black/30 outline-none transition-all duration-200 focus:border-black/30 focus:bg-white focus:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="contact-email"
                                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45"
                            >
                                Your Email
                            </label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                placeholder="jane@example.com"
                                className="rounded-xl border border-black/10 bg-white/70 px-5 py-4 text-base text-black placeholder:text-black/30 outline-none transition-all duration-200 focus:border-black/30 focus:bg-white focus:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label
                                htmlFor="contact-message"
                                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45"
                            >
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                required
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project, idea, or just say hi..."
                                className="resize-none rounded-xl border border-black/10 bg-white/70 px-5 py-4 text-base text-black placeholder:text-black/30 outline-none transition-all duration-200 focus:border-black/30 focus:bg-white focus:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                            />
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="group inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-black/85 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] active:scale-[0.98]"
                            >
                                Send Message
                                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
