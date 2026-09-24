"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
export default function ProjectsSection({ trophyCount = 0 }: { trophyCount?: number }) {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative flex flex-col items-center justify-center bg-[#FAFAFA] px-4 py-32">
      <div className="w-full max-w-5xl">
        {/* Header section */}
        <motion.div
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-md">
            <motion.p variants={itemVariants} className="mb-4 text-xs font-mono tracking-widest text-gray-400 uppercase">
              <span className="text-pink-400">01 / </span> FEATURED
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
              Proof of work,
              <br />
              proof of impact
            </motion.h2>
          </div>
          <motion.p variants={itemVariants} className="max-w-sm text-sm leading-relaxed text-gray-500">
            A first look at my proudest build and the recognition behind it. Dive deeper on the full projects page.
          </motion.p>
        </motion.div>

        {/* Cards container */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Card 1 - Logic.AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-pink-500/5"
          >
            {/* Code Snippet Window */}
            <div className="h-48 w-full bg-[#111315] p-5 font-mono text-sm sm:h-56">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-gray-600" />
                  <div className="h-2.5 w-2.5 rounded-full bg-gray-600" />
                  <div className="h-2.5 w-2.5 rounded-full bg-gray-600" />
                </div>
                <div className="text-xs text-gray-500">logic_ai.py</div>
                <div className="rounded border border-gray-700 px-2 py-0.5 text-[10px] text-gray-400">
                  © REGISTERED IP
                </div>
              </div>
              <div className="text-gray-300">
                <p className="text-purple-400">from <span className="text-gray-300">logic_ai</span> import <span className="text-blue-300">Assistant</span></p>
                <br />
                <p className="text-gray-500"># RAG over a curated logic corpus</p>
                <p>
                  <span className="text-blue-300">assistant</span> = Assistant(
                </p>
                <p className="pl-4 text-orange-300">retriever<span className="text-gray-300">=ChromaDB(),</span></p>
                <p className="pl-4 text-orange-300">llm<span className="text-gray-300">=GPT4oMini(),</span></p>
                <p className="pl-4 text-orange-300">rag<span className="text-gray-300">=True,</span></p>
                <p>)</p>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="mb-3 text-xs font-mono tracking-widest text-gray-400 uppercase">
                <span className="text-pink-400"># </span> BEST PROJECT · LOGIC.AI
              </p>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#111111]">
                A RAG chatbot that makes logic education feel intuitive
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
                An AI teaching assistant that helps computer science students grasp logic concepts step by step — grounded answers, sourced citations, and an interface that explains rather than just replies.
              </p>
              
              {/* Tech Tags */}
              <div className="mb-8 flex flex-wrap gap-2">
                {["Flask", "LangChain", "ChromaDB", "PostgreSQL", "GPT-4o mini"].map((tech) => (
                  <span key={tech} className="rounded border border-gray-100 bg-gray-50 px-2 py-1 text-xs font-mono text-gray-500">
                    {tech}
                  </span>
                ))}
              </div>

              <Link href="/projects" className="flex items-center gap-2 text-sm font-semibold text-[#111111] transition-transform group-hover:translate-x-1">
                View Full Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2 - 15+ wins */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:shadow-pink-500/5 sm:p-8"
          >
            <div>
              <p className="mb-6 text-xs font-mono tracking-widest text-gray-400 uppercase">
                <span className="text-pink-400">02 / </span> BEST ACHIEVEMENT
              </p>
              <div className="mb-4 flex items-baseline gap-2">
                <h3 className="text-7xl font-bold tracking-tight text-[#111111]">{trophyCount}</h3>
                <span className="font-mono text-sm text-pink-400">+ wins</span>
              </div>
              <p className="mb-8 text-sm leading-relaxed text-gray-500">
                <span className="font-semibold text-[#111111]">National & international awards across business, AI and data competitions</span> — a track record of turning ideas into results, not just code.
              </p>
              
              <ul className="mb-8 space-y-4 text-sm text-gray-500">
                <li className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-50">🎓</div>
                  Cumlaude graduate - GPA 3.69
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-50">🏢</div>
                  Founded & led student ventures
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-50">🏅</div>
                  BNSP certified professional
                </li>
              </ul>
            </div>

            <Link href="/journey" className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-gray-50">
              Read Full Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
