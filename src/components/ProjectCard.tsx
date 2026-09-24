"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { urlForImage } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

interface ProjectCardProps {
  category: string;
  year: string;
  title: string;
  description: string;
  technologies?: string[];
  image?: SanityImageSource;
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

export const ProjectCard = ({
  category,
  year,
  title,
  description,
  technologies = [],
  image,
  githubUrl,
  liveUrl,
  delay = 0,
}: ProjectCardProps) => {
  const imageUrl = image ? urlForImage(image)?.width(800).height(500).url() : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-pink-500/5"
    >
      {/* Project Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs font-mono text-gray-300">
            no image
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 uppercase">
          <span className="text-pink-400">{category}</span>
          <span className="text-gray-300">·</span>
          <span>{year}</span>
        </div>
        <h3 className="mb-3 text-xl font-bold tracking-tight text-[#111111]">
          {title}
        </h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
          {description}
        </p>

        {/* Tech Tags */}
        {technologies.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-gray-100 bg-gray-50 px-2 py-1 text-[11px] font-mono text-gray-500"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-black transition-colors hover:bg-gray-50"
            >
              <FaGithub className="h-3.5 w-3.5" /> GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-black transition-colors hover:bg-gray-50"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
