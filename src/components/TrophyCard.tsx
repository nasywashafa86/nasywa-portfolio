"use client";
import { motion } from "framer-motion";
import { Trophy, Download, PlayCircle } from "lucide-react";

interface TrophyCardProps {
  title: string;
  category: string;
  year: string;
  description: string;
  badge: string;
  badgeType: "national" | "international" | "regional" | "community" | "university";
  delay?: number;
}

export function TrophyCard({
  title,
  category,
  year,
  description,
  badge,
  badgeType,
  delay = 0,
}: TrophyCardProps) {
  const badgeStyles = {
    national: "bg-gray-50 text-gray-500 border-gray-200",
    international: "bg-pink-50 text-pink-500 border-pink-200",
    regional: "bg-gray-50 text-gray-500 border-gray-200",
    community: "bg-gray-50 text-gray-500 border-gray-200",
    university: "bg-gray-50 text-gray-500 border-gray-200",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:shadow-pink-500/5 sm:p-8"
    >
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400">
            <Trophy className="h-5 w-5" />
          </div>
          <span
            className={`rounded-md border px-2 py-1 text-[10px] font-mono tracking-widest uppercase ${badgeStyles[badgeType]}`}
          >
            {badge}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-bold tracking-tight text-[#111111]">{title}</h3>
        <p className="mb-4 text-[11px] font-mono tracking-widest text-gray-400 uppercase">
          <span className="text-gray-400">{category}</span> · {year}
        </p>
        <p className="mb-8 text-sm leading-relaxed text-gray-500">{description}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-black transition-colors hover:bg-gray-50">
          <Download className="h-3.5 w-3.5" /> Certificate
        </button>
        <button className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-black transition-colors hover:bg-gray-50">
          <PlayCircle className="h-3.5 w-3.5" /> Video
        </button>
      </div>
    </motion.div>
  );
}
