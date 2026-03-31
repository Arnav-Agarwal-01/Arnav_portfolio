"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";

const githubUsername = "Arnav-Agarwal-01";
const leetcodeUsername = "Arnav_Agarwal_01";
const codolioProfileUrl = "https://codolio.com/profile/ArnavAgarwal";

const githubHeatmapUrl = `https://ghchart.rshah.org/${encodeURIComponent(githubUsername)}`;
const leetcodeHeatmapUrl = `https://leetcard.jacoblin.cool/${encodeURIComponent(leetcodeUsername)}?theme=light&ext=heatmap`;

export default function CodingFootprint() {
  return (
    <section id="coding-footprint" className="bg-background py-20 md:py-24">
      <div className="mx-4 md:ml-[4rem] md:mr-8 lg:ml-[6rem] overflow-hidden">
        <div className="mb-10 md:mb-12">
          <p className="text-xs uppercase tracking-[0.26em] text-black/50">Profiles</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-5xl">Coding Footprint</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-black/65 md:text-lg">
            Live snapshots from GitHub and LeetCode, plus quick access to the Codolio profile.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-black md:text-2xl">GitHub Contributions</h3>
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-black/70 transition-colors hover:bg-black hover:text-white"
              >
                View GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="overflow-x-auto rounded-xl border border-black/10 bg-[#fafaf8] p-4">
              <img
                src={githubHeatmapUrl}
                alt="GitHub contribution heatmap"
                className="min-w-[760px]"
                loading="lazy"
              />
            </div>
          </article>

          <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-black md:text-2xl">LeetCode Heatmap</h3>
              <a
                href={`https://leetcode.com/${leetcodeUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-black/70 transition-colors hover:bg-black hover:text-white"
              >
                View LeetCode <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-xl border border-black/10 bg-[#fafaf8] p-4">
              <img
                src={leetcodeHeatmapUrl}
                alt="LeetCode activity heatmap"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </article>
        </div>

        <article className="mt-6 rounded-2xl border border-black/10 bg-[#f4ede3] p-6 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-black/45">Portfolio Profile</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black md:text-3xl">Codolio</h3>
              <p className="mt-2 max-w-3xl text-black/65">
                Explore projects, coding stats, and profile highlights on Codolio.
              </p>
            </div>

            <a
              href={codolioProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black/85"
            >
              Open Codolio Profile <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
