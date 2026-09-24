"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import type { SanityProject } from "@/sanity/lib/queries";

export default function ProjectsPageClient({ projects }: { projects: SanityProject[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(() => {
    const categories = Array.from(new Set(projects.map((p) => p.category).filter(Boolean)));
    return [
      { id: "All", label: "All", count: projects.length },
      ...categories.map((category) => ({
        id: category,
        label: category,
        count: projects.filter((p) => p.category === category).length,
      })),
    ];
  }, [projects]);

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <>
      {/* Filter Buttons */}
      {filters.length > 1 && (
        <div className="mb-12 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "border-transparent bg-[#111315] text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {filter.label}
              <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                activeFilter === filter.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <p className="py-24 text-center text-sm text-gray-400">
          No projects yet — add some from the Sanity Studio at /admin.
        </p>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  category={project.category}
                  year={project.year}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  delay={i * 0.1}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
