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
      "Assisted in building internal tooling and small features in collaboration with the team.",
      "Helped automate parts of the workflow; wrote clean, maintainable code.",
      "Learned fast in a production environment and shipped on time.",
    ],
    imageSrc: "/Salesforcepic.jpeg",
  },
  {
    company: "Company Two",
    role: "Role Title",
    period: "2024 – 2025",
    highlights: [
      "Short bullet about your impact.",
      "Another bullet with a measurable outcome if possible.",
    ],
    imageSrc: "/experience/company-two.jpg",
  },
  {
    company: "Company Three",
    role: "Role Title",
    period: "2023 – 2024",
    highlights: [
      "Describe a key project or responsibility.",
    ],
    imageSrc: "/experience/company-three.jpg",
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