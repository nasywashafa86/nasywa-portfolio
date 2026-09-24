"use client";
import { motion } from "framer-motion";
import { FileText, ExternalLink, BookOpen, Mic2 } from "lucide-react";

interface PublicationCardProps {
  title: string;
  type: "journal" | "ip" | "presentation";
  venue: string;
  date: string;
  description?: string;
  url?: string;
  delay?: number;
}

const typeMeta = {
  journal: { label: "JOURNAL", icon: BookOpen },
  ip: { label: "INTELLECTUAL PROPERTY", icon: FileText },
  presentation: { label: "PRESENTATION", icon: Mic2 },
};

export function PublicationCard({
  title,
  type,
  venue,
  date,
  description,
  url,
  delay = 0,
}: PublicationCardProps) {
  const meta = typeMeta[type];
  const Icon = meta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:shadow-pink-500/5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-[10px] font-mono tracking-widest text-gray-500 uppercase">
          {meta.label}
        </span>
      </div>

      <h3 className="mb-2 text-base font-bold tracking-tight text-[#111111]">{title}</h3>
      <p className="mb-3 text-xs font-mono tracking-widest text-gray-400 uppercase">
        {venue} · {date}
      </p>
      {description && (
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500">{description}</p>
      )}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex w-fit items-center gap-2 text-xs font-medium text-[#111111] transition-transform hover:-translate-y-0.5"
        >
          <ExternalLink className="h-3.5 w-3.5" /> View
        </a>
      )}
    </motion.div>
  );
}
