"use client";
import { motion } from "framer-motion";
import type { SanitySkill, SanityLanguage } from "@/sanity/lib/queries";

export function SkillsAndLanguages({
  skills,
  languages,
}: {
  skills: SanitySkill[];
  languages: SanityLanguage[];
}) {
  if (skills.length === 0 && languages.length === 0) return null;

  return (
    <section className="bg-white px-4 py-24 md:px-8 border-t border-gray-50">
      <div className="mx-auto max-w-5xl">
        <p className="mb-12 text-xs font-mono tracking-widest text-gray-400 uppercase">
          <span className="text-pink-400">05 / </span> SKILLS & LANGUAGES
        </p>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
        {/* Skills */}
        {skills.length > 0 && (
          <div className="md:col-span-2">
            <p className="mb-6 text-sm font-semibold text-[#111111]">Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill._id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="rounded-full border border-gray-100 bg-gray-50 px-3 py-1.5 text-xs font-mono text-gray-600"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <p className="mb-6 text-sm font-semibold text-[#111111]">Languages</p>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li key={lang._id} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-[#111111]">{lang.name}</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-400">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
