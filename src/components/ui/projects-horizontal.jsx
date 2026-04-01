"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "ChatLaw AI",
        time: "Completed",
        description:
            "Led development of a multi-agent legal AI system using HuggingFace, FAISS, Sentence-BERT, and 4-bit Mistral-7B RAG for fact extraction, retrieval, reasoning, and structured legal report generation over a 50k+ Indian legal corpus.",
        outcome:
            "Designed modular agents for classification, NER, question generation, retrieval, and reasoning, connected by a custom knowledge-graph memory to drive dynamic interviews and end-to-end legal analysis.",
        stack: ["Python", "LangChain", "RAG", "AI", "ML", "FAISS", "Graph DB"],
        github: "https://github.com/Arnav-Agarwal-01/ChatLawAI",
        live: "",
    },
    {
        title: "BlogGenie",
        time: "Completed",
        description:
            "Built a full-stack blogging platform for creating, publishing, and managing blogs with integrated AI tools for content generation and enhancement.",
        outcome:
            "Improved workflow speed and content quality by 30% through a robust MERN architecture with reliable AI-assisted publishing flows.",
        stack: ["React", "Node.js", "Express", "PostgreSQL", "AI Tools"],
        github: "",
        live: "",
    },
    {
        title: "Webby",
        time: "July 2024 - Present",
        description:
            "Created an AI-powered content generation tool for marketers and creators focused on faster ideation and reusable campaign assets.",
        outcome:
            "Shaped the product around practical generation workflows, quick iteration, and cleaner authoring loops.",
        stack: ["Python", "FastAPI", "OpenAI API", "React"],
        github: "",
        live: "",
    },
    {
        title: "Asset Management System",
        time: "Oct 2023 - Dec 2023",
        description:
            "Developed an internal system to manage organizational assets, allocation flows, and audit visibility across teams.",
        outcome:
            "Reduced manual tracking and improved accountability with clearer lifecycle records and role-based workflows.",
        stack: ["Vue", "Firebase", "Tailwind"],
        github: "",
        live: "",
    },
    {
        title: "My Portfolio",
        time: "Sep 2023",
        description:
            "Designed and built a personal portfolio focused on expressive typography, clean motion, and strong content hierarchy.",
        outcome:
            "Used the site as a flexible surface to showcase projects, experience, and front-end taste without clutter.",
        stack: ["Next.js", "Tailwind", "GSAP"],
        github: "",
        live: "",
    },
    {
        title: "Alertify",
        time: "Sep 2023",
        description:
            "Built a notification-driven product concept centered on timely updates, lightweight interactions, and a clean interface.",
        outcome:
            "Focused on interface clarity and event-driven user flows to keep the experience responsive and simple.",
        stack: ["JavaScript", "CSS", "UI Design"],
        github: "",
        live: "",
    },
    {
        title: "AruCode",
        time: "Sep 2023",
        description:
            "Created a developer-facing build with a minimal aesthetic and straightforward interaction model.",
        outcome:
            "Prioritized readable structure and fast navigation to keep the product useful rather than ornamental.",
        stack: ["HTML", "SCSS", "JavaScript"],
        github: "",
        live: "",
    },
    {
        title: "HolidayME",
        time: "Sep 2023",
        description:
            "Explored a travel-focused experience with streamlined browsing, destination storytelling, and simple booking-oriented journeys.",
        outcome:
            "Balanced aspirational visuals with a more structured browsing flow to keep discovery practical.",
        stack: ["Frontend", "UX", "JavaScript"],
        github: "",
        live: "",
    },
];

function ProjectCard({ project, index }) {
    return (
        <Card className="group relative flex h-auto min-h-[380px] w-[85vw] shrink-0 flex-col overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-black/10 bg-[#f4ede3] text-black shadow-[0_18px_60px_rgba(0,0,0,0.08)] md:min-h-[450px] md:w-[560px] lg:w-[620px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_38%)]" />
            <div className="absolute -right-8 top-2 text-[112px] font-semibold tracking-[-0.08em] text-black/[0.05] md:text-[150px]">
                {String(index + 1).padStart(2, "0")}
            </div>

            <CardHeader className="relative z-10 flex flex-row items-start justify-between gap-6 border-b border-black/10 pb-4">
                <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-black/55">
                        <span>{project.time}</span>
                        <span className="h-1 w-1 rounded-full bg-black/25" />
                        <span>Featured build</span>
                    </div>
                    <h2 className="max-w-[12ch] text-3xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-5xl">
                        {project.title}
                    </h2>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight className="h-4 w-4" />
                </div>
            </CardHeader>

            <CardContent className="relative z-10 flex min-h-0 flex-1 flex-col justify-between gap-4 py-5">
                <div className="grid min-h-0 grow gap-4 overflow-y-auto pr-2 md:grid-cols-[1.2fr_0.9fr] md:gap-6">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-black/45">Overview</p>
                        <p className="mt-2 text-[15px] leading-7 text-black/72 md:text-base">
                            {project.description}
                        </p>
                    </div>
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-black/45">Impact</p>
                        <p className="mt-2 text-sm leading-7 text-black/68 md:text-[15px]">
                            {project.outcome}
                        </p>
                    </div>
                </div>

                <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-black/45">Stack</p>
                    <div className="mt-2 flex flex-wrap gap-2.5">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-black/72"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="relative z-10 mt-auto flex-wrap gap-3 border-t border-black/10 pt-4 md:flex-nowrap">
                {project.github ? (
                    <Button
                        variant="outline"
                        size="lg"
                        className="h-11 rounded-full border-black/15 bg-transparent text-black hover:bg-black hover:text-white"
                        asChild
                    >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                    </Button>
                ) : (
                    <span className="inline-flex h-11 items-center rounded-full border border-dashed border-black/15 px-5 text-sm font-medium text-black/40">
                        Code private
                    </span>
                )}

                {project.live ? (
                    <Button size="lg" className="h-11 rounded-full bg-black text-white hover:bg-black/85" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                    </Button>
                ) : (
                    <span className="inline-flex h-11 items-center rounded-full bg-black px-5 text-sm font-medium text-white/88">
                        No public demo
                    </span>
                )}
            </CardFooter>
        </Card>
    );
}

export default function ProjectsHorizontal() {
    const sectionRef = useRef(null);
    const stickyRef = useRef(null);
    const trackRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const sticky = stickyRef.current;
        const track = trackRef.current;

        if (!section || !sticky || !track) return undefined;

        const ctx = gsap.context(() => {
            const getDistance = () =>
                Math.max(track.scrollWidth - sticky.clientWidth, 0);

            // Set section height = 100vh + horizontal scroll distance
            const setHeight = () => {
                const d = getDistance();
                section.style.height = `${window.innerHeight + d}px`;
            };

            setHeight();

            gsap.to(track, {
                x: () => -getDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${getDistance()}`,
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                    onRefresh: setHeight,
                },
            });

            // Recalculate on resize
            const onResize = () => {
                setHeight();
                ScrollTrigger.refresh();
            };
            window.addEventListener("resize", onResize);

            return () => window.removeEventListener("resize", onResize);
        }, section);

        return () => {
            section.style.height = "";
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative"
            style={{ backgroundColor: "#fafaf8" }}
        >
            {/* Sticky container – locks to viewport while we scroll through the section */}
            <div
                ref={stickyRef}
                className="sticky top-0 mx-auto flex h-screen max-w-[1500px] flex-col justify-center overflow-hidden px-5 md:px-10 lg:px-14"
            >
                <div className="mb-10 flex items-end justify-between gap-8 md:mb-12">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-black/45">
                            Selected Projects
                        </p>
                        <h1 className="max-w-[12ch] text-2xl font-semibold leading-[0.92] tracking-[-0.06em] text-black sm:text-3xl md:text-4xl lg:text-6xl">
                            A horizontal reel of products I have built.
                        </h1>
                    </div>
                    <p className="hidden max-w-sm text-sm leading-7 text-black/55 lg:block">
                        Scroll to browse through the projects. Each card highlights the stack, impact, and links.
                    </p>
                </div>

                <div className="overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex gap-5 will-change-transform md:gap-7"
                    >
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
