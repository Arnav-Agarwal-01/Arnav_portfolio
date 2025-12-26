"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight, Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Project Alpha",
        time: "Jan 2024 - Mar 2024",
        description: "A comprehensive dashboard for analytics with real-time data visualization.",
        stack: ["Next.js", "Tailwind CSS", "D3.js", "Supabase"],
        github: "#",
        live: "#",
    },
    {
        title: "Beta Commerce",
        time: "Apr 2024 - June 2024",
        description: "Full-stack e-commerce platform with stripe integration and inventory management.",
        stack: ["React", "Node.js", "Express", "PostgreSQL"],
        github: "#",
        live: "#",
    },
    {
        title: "Gamma AI Tool",
        time: "July 2024 - Present",
        description: "AI-powered content generation tool for marketers and creators.",
        stack: ["Python", "FastAPI", "OpenAI API", "React"],
        github: "#",
        live: "#",
    },
    {
        title: "Delta Social",
        time: "Oct 2023 - Dec 2023",
        description: "Social media app focusing on privacy and community-driven content moderation.",
        stack: ["Vue.js", "Firebase", "Tailwind"],
        github: "#",
        live: "#",
    },
    {
        title: "Epsilon Portfolio",
        time: "Sep 2023",
        description: "Minimalist portfolio template for developers.",
        stack: ["HTML", "SCSS", "JavaScript"],
        github: "#",
        live: "#",
    },
];

export default function ProjectsHorizontal() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const trigger = triggerRef.current;

        let ctx = gsap.context(() => {
            gsap.to(section, {
                x: () => -(section.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top top",
                    end: () => `+=${section.scrollWidth - window.innerWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, trigger);

        return () => ctx.revert();
    }, []);

    return (
        <section className="overflow-hidden bg-background" ref={triggerRef}>
            <div className="py-20 px-8 md:px-16 max-w-screen-xl mx-auto flex flex-col justify-center h-screen">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Here are some of the projects I've worked on. Scroll down to see more.
                    </p>
                </div>

                <div ref={sectionRef} className="flex gap-8 w-fit">
                    {projects.map((project, index) => (
                        <Card key={index} className="w-[85vw] md:w-[600px] h-[400px] md:h-[500px] flex flex-col justify-between shrink-0 border-primary/10 bg-secondary/5 hover:border-primary/30 transition-colors duration-300">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-2xl md:text-3xl mb-2">{project.title}</CardTitle>
                                        <CardDescription className="text-base">{project.time}</CardDescription>
                                    </div>
                                    <div className="p-2 bg-primary/10 rounded-full">
                                        <MoveRight className="w-6 h-6 text-primary" />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-background border rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-4">
                                <Button variant="outline" size="lg" className="gap-2" asChild>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                </Button>
                                <Button size="lg" className="gap-2" asChild>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
