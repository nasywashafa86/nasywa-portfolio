"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const techStack = [
  "CNN",
  "GPT-4o mini",
  "FastAPI",
  "GitHub",
  "scikit-learn",
  "Python",
  "LangChain",
  "Docker",
  "PostgreSQL",
];

export default function Marquee() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex overflow-x-hidden border-y border-gray-100 bg-[#FAFAFA] py-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: isHovered ? undefined : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        style={{ animationPlayState: isHovered ? "paused" : "running" }}
      >
        {[...techStack, ...techStack, ...techStack].map((tech, i) => (
          <div
            key={i}
            className="mx-6 flex items-center gap-3 text-sm font-mono text-gray-500"
          >
            <span className="text-pink-400 font-bold">&gt;</span>
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
