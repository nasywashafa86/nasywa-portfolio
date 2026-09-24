"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function AboutContactSection() {
  return (
    <>
      {/* About Section */}
      <section className="relative flex flex-col items-center justify-center bg-white px-4 py-32 overflow-hidden">
        {/* Background Grid */}
        <div className="bg-grid-pattern absolute inset-0 pointer-events-none opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <p className="mb-6 text-xs font-mono tracking-widest text-gray-400 uppercase">
            <span className="text-pink-400">03 / </span> ABOUT
          </p>
          <h2 className="mb-10 text-3xl font-medium leading-tight text-gray-600 md:text-5xl">
            An engineer who thinks like a <span className="font-bold text-[#111111]">builder</span>, and a builder who thinks like an <span className="font-bold text-[#111111]">engineer</span>. I turn raw data into products people actually use and trust.
          </h2>
          <Link href="/journey" className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] transition-transform hover:-translate-y-0.5">
            Read Full Story <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col items-center justify-center bg-[#FAFAFA] px-4 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white p-12 shadow-sm sm:p-20 text-center"
        >
          {/* subtle pink glow top center */}
          <div className="absolute -top-10 left-1/2 h-20 w-32 -translate-x-1/2 rounded-full bg-pink-400/20 blur-2xl" />
          
          <div className="relative z-10">
            <p className="mb-6 text-xs font-mono tracking-widest text-gray-400 uppercase">
              <span className="text-pink-400">04 / </span> CONTACT
            </p>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#111111] md:text-6xl">
              Let&apos;s build intelligent solutions together.
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-gray-500">
              I&apos;m actively looking for IT Business Analyst, data analyst and AI/ML roles — and always up for a good collaboration.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#111315] px-8 py-3.5 text-sm font-medium text-white shadow-md transition-transform hover:scale-105 active:scale-95">
                <Mail className="h-4 w-4" /> Say Hello
              </button>
              <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:border-gray-300 hover:bg-gray-50 active:scale-95">
                <FaLinkedin className="h-4 w-4 text-[#0A66C2]" /> LinkedIn
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 bg-[#FAFAFA] px-8 py-8 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="font-semibold text-[#111111]">~/nasywa.dev</span>
          <span>© 2026 Nasywa Shafa Salsabila</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-500 sm:pr-20">
          <a href="#" className="flex items-center gap-2 transition-colors hover:text-[#111111]">
            <FaGithub className="h-4 w-4" /> GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
