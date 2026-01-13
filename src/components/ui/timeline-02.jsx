"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Salesforce India",
    role: "Software Development Intern",
    period: "7 Apr 2025 – 31 May 2025",
    highlights: [
      "Engineered intelligent workflow solutions using Salesforce Agentforce AI Agents and Data Cloud, increasing partner workflow efficiency by up to 65%.",
      "Optimized the Quarter-End Incentive Validation workflow, reducing manual effort by 75% (160+ hours a quarter to under 40 hours a quarter), delivering 480+ hours in annual savings.",
      "Supported architectural evaluations comparing API-based systems with MCP server–based event-driven architectures, identifying potential for up to 40% lower workflow latency.",
    ],
    imageSrc: "/Salesforcepic.jpeg",
  },
  {
    company: "Public Relations Team, KMIT",
    role: "Developer",
    period: "2024 – 2025",
    highlights: [
      "Developed scalable backend and frontend for the KMIT Public Relations website, handling 8,000+ visitors and 45,000+ total page views in one month, supporting 4,000+ concurrent users for pass bookings and event management.",
      "Created a mobile app for passes scanning and use authentication, reducing fake entries by 80% and was used concurrently by 20+ teams.",
    ],
    imageSrc: "prwebsite.jpeg",
  },
];

export default function Timeline_02() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-4 md:ml-[4rem] md:mr-8 lg:ml-[6rem]">
        <h1 className="text-foreground mb-8 md:mb-12 text-left text-3xl md:text-4xl font-bold tracking-tight lg:text-5xl">
          Relevant Experience
        </h1>

        <div className="relative max-w-5xl">
          {/* Vertical guide line - hidden on mobile */}
          <div className="hidden md:block absolute left-[8px] top-0 bottom-0 w-px bg-black/10" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative mb-12 md:mb-20 pl-0 md:pl-12"
            >
              {/* Timeline dot - hidden on mobile */}
              <div className="hidden md:block absolute left-[2px] top-6 h-3 w-3 rounded-full bg-black ring-4 ring-background" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
                {/* Text content */}
                <div className="md:col-span-7">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">{exp.company}</h3>
                  <p className="text-base text-black/70 mt-1">{exp.role}</p>
                  <p className="text-sm text-black/60 mt-1">{exp.period}</p>

                  <Card className="mt-4 border bg-card shadow-sm">
                    <CardContent className="px-4 md:px-5 py-4">
                      <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-muted-foreground">
                        {exp.highlights?.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Right image */}
                <div className="md:col-span-5">
                  {exp.imageSrc ? (
                    <div className="relative overflow-hidden rounded-lg border border-black/10 bg-white">
                      <img
                        src={exp.imageSrc}
                        alt={`${exp.company} photo`}
                        className="h-64 md:h-80 w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}