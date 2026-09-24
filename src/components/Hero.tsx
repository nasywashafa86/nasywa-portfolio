"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function Hero({ trophyCount = 0 }: { trophyCount?: number }) {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background Grid Pattern */}
      <div className="bg-grid-pattern absolute inset-0 pointer-events-none opacity-50" />

      {/* Scattered Tags */}
      <div className="absolute inset-0 hidden md:block pointer-events-none z-0">
        <ScatteredTag label="Python" top="20%" left="15%" delay={0} />
        <ScatteredTag label="LangChain" top="15%" right="15%" delay={0.5} />
        <ScatteredTag label="Power BI" bottom="30%" left="10%" delay={1} />
        <ScatteredTag label="Django" bottom="25%" right="12%" delay={1.5} />
      </div>

      <motion.div
        className="relative z-10 flex max-w-4xl flex-col items-center text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Top Badge */}
        <motion.div
          variants={fadeUp}
          className="mb-8 flex items-center gap-2 rounded-full border border-gray-100 bg-white/80 px-4 py-1.5 text-xs font-mono tracking-widest text-gray-500 uppercase shadow-sm backdrop-blur-sm"
        >
          <span className="text-pink-400">#</span> ASPIRING IT BUSINESS ANALYST
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="mb-6 text-5xl font-bold tracking-tight text-[#111111] md:text-7xl lg:text-[5rem]"
        >
          Nasywa Shafa Salsabila
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          variants={fadeUp}
          className="mb-6 flex flex-wrap items-center justify-center gap-3 text-lg font-medium text-gray-500 md:text-xl"
        >
          <span className="text-[#111111]">IT Business Analyst</span>
          <span className="text-gray-300">/</span>
          <span className="text-[#111111]">Data Analyst</span>
          <span className="text-gray-300">/</span>
          <span className="text-[#111111]">Data Scientist</span>
          <span className="text-gray-300">/</span>
          <span className="text-[#111111]">AI-ML Engineer</span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mb-10 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg"
        >
          Software Engineering graduate
          <br />
          who turns business problems into data-driven, AI-powered solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="mb-16 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link href="/projects" className="flex items-center gap-2 rounded-md bg-[#111315] px-6 py-3 text-sm font-medium text-white shadow-md transition-transform hover:scale-105 active:scale-95">
            View All Projects <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="/journey" className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:border-gray-300 hover:bg-gray-50 active:scale-95">
            Read Full Journey <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          <StatBadge bold="3.69" text="GPA · Cumlaude" />
          {trophyCount > 0 && <StatBadge bold={`${trophyCount}+`} text="Competition wins" />}
          <StatBadge bold="BNSP" text="Certified Professional" />
          <StatBadge bold="IPB" text="University Graduate" />
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2 text-xs font-mono tracking-widest text-gray-400 uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        SCROLL
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatBadge({ bold, text }: { bold: string; text: string }) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white/80 px-4 py-2 text-xs text-gray-500 shadow-sm backdrop-blur-sm md:text-sm">
      <strong className="mr-1 font-semibold text-black">{bold}</strong>
      {text}
    </div>
  );
}

function ScatteredTag({
  label,
  top,
  bottom,
  left,
  right,
  delay = 0,
}: {
  label: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="absolute flex items-center gap-2 rounded-md border border-gray-100 bg-white/80 px-3 py-1.5 text-xs font-mono text-gray-500 shadow-sm backdrop-blur-sm"
      style={{ top, bottom, left, right }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + delay, duration: 0.5 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay: delay,
        }}
        className="flex items-center gap-2"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-pink-400" />
        {label}
      </motion.div>
    </motion.div>
  );
}
