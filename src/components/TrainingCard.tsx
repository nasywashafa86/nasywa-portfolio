"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface TrainingCardProps {
  title: string;
  provider: string;
  category?: string;
  period: string;
  description?: string;
  delay?: number;
}

export function TrainingCard({
  title,
  provider,
  category,
  period,
  description,
  delay = 0,
}: TrainingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:shadow-pink-500/5"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400">
        <GraduationCap className="h-5 w-5" />
      </div>

      <h3 className="mb-1 text-base font-bold tracking-tight text-[#111111]">{title}</h3>
      <p className="mb-3 text-xs font-mono tracking-widest text-gray-400 uppercase">
        {provider} · {period}
      </p>
      {category && (
        <span className="mb-3 inline-block w-fit rounded bg-gray-50 px-2 py-1 text-[10px] font-mono tracking-widest text-gray-500 uppercase">
          {category}
        </span>
      )}
      {description && (
        <p className="text-sm leading-relaxed text-gray-500">{description}</p>
      )}
    </motion.div>
  );
}
