import Link from "next/link";
import FloatingMenu from "@/components/FloatingMenu";
import ProjectsPageClient from "@/components/ProjectsPageClient";
import { client } from "@/sanity/lib/client";
import { projectsQuery, type SanityProject } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await client.fetch<SanityProject[]>(projectsQuery);

  return (
    <main className="min-h-screen bg-white">
      {/* Header Navigation Area (Simple layout for inner pages) */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight text-black transition-colors hover:text-gray-500">
          <span className="text-gray-400">~/</span> nasywa.dev
        </Link>
        <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-3 py-1.5 text-xs font-mono text-gray-500 shadow-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
          open to IT Business Analyst roles
        </div>
      </header>

      {/* Main Content */}
      <section className="relative px-4 pt-32 pb-24 md:pt-40 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header Title */}
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-mono tracking-widest text-gray-400 uppercase">
              <span className="text-pink-400">~/ </span> PROJECTS
            </p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#111111] md:text-7xl">
              Built to solve<br />real problems.
            </h1>
            <p className="text-base leading-relaxed text-gray-500 md:text-lg">
              A selection of projects spanning <span className="font-semibold text-[#111111]">AI/ML</span>, <span className="font-semibold text-[#111111]">data science</span> and <span className="font-semibold text-[#111111]">full-stack</span> engineering — each one shipped with an eye for both craft and impact.
            </p>
          </div>

          <ProjectsPageClient projects={projects} />
        </div>
      </section>

      <FloatingMenu />
    </main>
  );
}
