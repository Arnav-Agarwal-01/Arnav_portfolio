"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {title: "Scroll to view :) ",
        time: "Completed",
        description:
            "Scroll to view my projects / products",
        stack: [""],
    },
    {
        title: "ChatLaw AI",
        time: "Completed",
        description:
            "Multi-Agentic (Mixture Of Experts (MOE)) Legal AI system which mirrors SOP's of real life law firms. Legal Assistant -> Legal Researcheer -> Senior Lawer -> Legal Writer. Used HuggingFace, Mixtral-7B, Knowledge graphs, reasoning and RAG. Designed modular agents for classification, NER, question generation, retrieval, and reasoning, connected by a custom knowledge-graph memory to drive dynamic interviews and end-to-end legal analysis.",
        stack: ["Python", "LangChain", "RAG", "AI", "ML", "FAISS", "Graph DB", "Knowledge graph" , "LLM" , "Agentic AI" , "Mixture-Of-Experts"],
        github: "https://github.com/Arnav-Agarwal-01/ChatLawAI",
        live: "",
    },
    {
        title: "BlogGenie",
        time: "Completed",
        description:
            "Built a full-stack blogging platform for creating, publishing, and managing blogs with integrated AI tools for content generation and enhancement. You can write blogs, get them analysed by AI , publish them, view your blogs, view others blogs, edit delete and write them with AI all in one platform.",
        stack: ["React", "Node.js", "Express", "MongoDB", "AI Tools" , "API" , "OPENAI API" , "Gemini"],
        github: "https://github.com/blog-genie/BlogGenie-ps-proj-",
        live: "",
    },
    {
        title: "Webby",
        time: "July 2024 - Present",
        description:
            "Webby the web scraper. Created for personal use. This web scraper scrapes mutliple sites paralelly and extracts relevant information, cleans and displays them all at a glance and In one single click. This was made to solve a personal problem I was facing.",
        stack: ["Python", "Selenium", "Beautiful Soup", "Web Scraping"],
        github: "https://github.com/Arnav-Agarwal-01/Webby",
        live: "",
    },
    {
        title: "Asset Management System",
        time: "Oct 2023 - Dec 2023",
        description:
            "Developed an internal system to manage organizational assets, allocation flows, and audit visibility across teams.",
        stack: ["MERN STACK", "MongoDB", "React" , "NodeMailer" , "Express" , "JavaScript"],
        github: "https://github.com/Arnav-Agarwal-01/AMS-1",
        live: "",
    },
    {
        title: "My Portfolio",
        time: "Sep 2023",
        description:
            "Designed and built a personal portfolio to showcase my skills and projects. You're currently seeing it here :)",
        stack: ["Next.js", "Tailwind", "GSAP" , "JavaScript"],
        github: "https://github.com/Arnav-Agarwal-01/Arnav_portfolio",
        live: "https://arnavagarwal.me",
    },
    {
        title: "Alertify",
        time: "Sep 2023",
        description:
            "This is something exciting in progress :) Wont reveal much here but check out for early access :)",
        
        stack: ["JavaScript", "CSS", "UI Design"],
        github: "",
        live: "https://alertify-navy.vercel.app",
    },
    {
        title: "AruCode",
        time: "Sep 2023",
        description:
            "In Progress : Replicating claude code , learning about tool calling , agentic infrastructure , llms and low level access. Hoping to release it soon",
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
            "Helps you find the best vacation time provided you have limited leaves. Gets you a list of all the possible long weekends you can take off on based on your leaves and your country. Takes into account all the possibilities and gives you the best slots and windows for you to maximise your travel experience. Cached and optimised for a user-friendly and smooth experience.",
        
        stack: ["Caching", "System Design", "JavaScript" , "MERN STACK"],
        github: "https://github.com/Arnav-Agarwal-01/HolidayMe",
        live: "https://vacamax.arnavagarwal.me",
    },
];

function ProjectCard({ project, index }) {
    return (
        <Card className="group relative flex h-auto min-h-[380px] w-[85vw] shrink-0 flex-col overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-zinc-900 text-zinc-50 shadow-[0_18px_60px_rgba(0,0,0,0.4)] md:min-h-[450px] md:w-[560px] lg:w-[620px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_38%)]" />
            <div className="absolute -right-8 top-2 text-[112px] font-semibold tracking-[-0.08em] text-white/[0.03] md:text-[150px]">
                {String(index + 1).padStart(2, "0")}
            </div>

            <CardHeader className="relative z-10 flex flex-row items-start justify-between gap-6 border-b border-white/10 pb-4">
                <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                        <span>{project.time}</span>
                        <span className="h-1 w-1 rounded-full bg-white/20" />
                        <span>Featured build</span>
                    </div>
                    <h2 className="max-w-[12ch] text-3xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-5xl">
                        {project.title}
                    </h2>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white text-black transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 hover:bg-zinc-200">
                    <ArrowUpRight className="h-4 w-4" />
                </div>
            </CardHeader>

            <CardContent className="relative z-10 flex min-h-0 flex-1 flex-col justify-between gap-4 py-5">
                <div className="min-h-0 grow overflow-y-auto pr-2">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Overview</p>
                    <p className="mt-2 text-[15px] leading-7 text-zinc-300 md:text-base">
                        {project.description}
                    </p>
                </div>

                <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">Stack</p>
                    <div className="mt-2 flex flex-wrap gap-2.5">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="relative z-10 mt-auto flex-wrap gap-3 border-t border-white/10 pt-4 md:flex-nowrap">
                {project.github ? (
                    <Button
                        variant="outline"
                        size="lg"
                        className="h-11 rounded-full border-white/20 bg-transparent text-zinc-50 hover:bg-white hover:text-black"
                        asChild
                    >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code
                        </a>
                    </Button>
                ) : (
                    <span className="inline-flex h-11 items-center rounded-full border border-dashed border-white/20 px-5 text-sm font-medium text-zinc-500">
                        Code private
                    </span>
                )}

                {project.live ? (
                    <Button size="lg" className="h-11 rounded-full bg-white text-black hover:bg-zinc-200" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                    </Button>
                ) : (
                    <span className="inline-flex h-11 items-center rounded-full bg-zinc-800 px-5 text-sm font-medium text-zinc-400">
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
            className="relative bg-zinc-950"
        >
            {/* Sticky container – locks to viewport while we scroll through the section */}
            <div
                ref={stickyRef}
                className="sticky top-0 mx-auto flex h-screen max-w-[1500px] flex-col justify-center overflow-hidden px-5 md:px-10 lg:px-14"
            >
                <div className="mb-10 flex items-end justify-between gap-8 md:mb-12">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-zinc-400">
                            Selected Projects
                        </p>
                        <h1 className="max-w-[12ch] text-2xl font-semibold leading-[0.92] tracking-[-0.06em] text-zinc-50 sm:text-3xl md:text-4xl lg:text-6xl">
                            Products i've built
                        </h1>
                    </div>
                    <p className="hidden max-w-sm text-sm leading-7 text-zinc-400 lg:block">
                        Scroll to browse through the projects. Each card highlights the project overview, stack, and links.
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
