"use client";
import { motion } from "framer-motion";
import { TrophyCard } from "@/components/TrophyCard";
import { TrainingCard } from "@/components/TrainingCard";
import { PublicationCard } from "@/components/PublicationCard";
import { SkillsAndLanguages } from "@/components/SkillsAndLanguages";
import Image from "next/image";
import type {
  SanityExperience,
  SanityTrophy,
  SanityTraining,
  SanityPublication,
  SanitySkill,
  SanityLanguage,
} from "@/sanity/lib/queries";

export default function JourneyPageClient({
  experiences,
  trophies,
  trainings,
  publications,
  skills,
  languages,
}: {
  experiences: SanityExperience[];
  trophies: SanityTrophy[];
  trainings: SanityTraining[];
  publications: SanityPublication[];
  skills: SanitySkill[];
  languages: SanityLanguage[];
}) {
  const nationalCount = trophies.filter((t) => t.badgeType === "national").length;
  const internationalCount = trophies.filter((t) => t.badgeType === "international").length;

  return (
    <>
      {/* Stats (award counts are computed from Trophy data in Sanity) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-4"
      >
        <StatBox number={String(trophies.length)} label="Competition awards" />
        <StatBox number={String(nationalCount)} label="National" />
        <StatBox number={String(internationalCount)} label="International" />
        <StatBox number="3.69" label="Cumlaude GPA" />
      </motion.div>

      {/* Timeline Section */}
      <section className="bg-[#FAFAFA] px-4 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-md">
              <p className="mb-4 text-xs font-mono tracking-widest text-gray-400 uppercase">
                <span className="text-pink-400">01 / </span> EXPERIENCE
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
                Experience & learning
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              A vertical look at the education, work and venture work that built my perspective.
            </p>
          </div>

          {experiences.length === 0 ? (
            <p className="py-12 text-sm text-gray-400">
              No experience entries yet — add some from the Sanity Studio at /admin.
            </p>
          ) : (
            <div className="relative border-l border-gray-200 pl-8 ml-4 md:ml-0 md:pl-12">
              {experiences.map((exp, i) => (
                <TimelineItem
                  key={exp._id}
                  category={exp.category}
                  year={exp.year}
                  title={exp.title}
                  subtitle={exp.subtitle}
                  bullets={exp.bullets ?? []}
                  delay={i * 0.1}
                  isLast={i === experiences.length - 1}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trophy Room Section */}
      <section className="bg-white px-4 py-32 md:px-8 border-y border-gray-50">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-md">
              <p className="mb-4 text-xs font-mono tracking-widest text-gray-400 uppercase">
                <span className="text-pink-400">02 / </span> TROPHY ROOM
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
                Recognition that<br />pushed me further
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              A curated grid of competitions and awards. Tap each to download a certificate or watch the highlight.
            </p>
          </div>

          {trophies.length === 0 ? (
            <p className="py-12 text-sm text-gray-400">
              No trophies yet — add some from the Sanity Studio at /admin.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {trophies.map((trophy, i) => (
                <TrophyCard key={trophy._id} {...trophy} delay={i * 0.05} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trainings & Certifications Section */}
      <section className="bg-[#FAFAFA] px-4 py-32 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-md">
              <p className="mb-4 text-xs font-mono tracking-widest text-gray-400 uppercase">
                <span className="text-pink-400">03 / </span> TRAININGS & CERTIFICATIONS
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
                Always adding<br />to the toolkit
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              Courses, bootcamps and certifications picked up along the way.
            </p>
          </div>

          {trainings.length === 0 ? (
            <p className="py-12 text-sm text-gray-400">
              No trainings yet — add some from the Sanity Studio at /admin.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {trainings.map((training, i) => (
                <TrainingCard key={training._id} {...training} delay={i * 0.05} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Publications & IP Section */}
      {publications.length > 0 && (
        <section className="bg-white px-4 py-32 md:px-8 border-t border-gray-50">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-md">
                <p className="mb-4 text-xs font-mono tracking-widest text-gray-400 uppercase">
                  <span className="text-pink-400">04 / </span> PUBLICATIONS & IP
                </p>
                <h2 className="text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
                  Ideas put into<br />writing and code
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                Journal publications, registered intellectual property, and conference presentations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {publications.map((pub, i) => (
                <PublicationCard key={pub._id} {...pub} delay={i * 0.05} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills & Languages Section */}
      <SkillsAndLanguages skills={skills} languages={languages} />

      {/* Moments Section */}
      <section className="bg-[#FAFAFA] px-4 py-32 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-md">
              <p className="mb-4 text-xs font-mono tracking-widest text-gray-400 uppercase">
                <span className="text-pink-400">06 / </span> ON STAGE
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">
                Moments behind the medals
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              A few snapshots from pitches, hackathons and ceremonies along the way.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-24">
            <MomentCard image="/images/presentation.png" label="National Business Plan Finals" />
            <MomentCard image="/images/hackathon.png" label="Hackathon Build Session" />
            <MomentCard image="/images/award.png" label="Award Ceremony" />
            <MomentCard image="/images/startup.png" label="Startup Weekend Pitch" />
          </div>
        </div>
      </section>
    </>
  );
}

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
      <span className="text-3xl font-bold tracking-tight text-[#111111]">{number}</span>
      <span className="text-xs font-mono text-gray-500 uppercase">{label}</span>
    </div>
  );
}

function TimelineItem({
  category,
  year,
  title,
  subtitle,
  bullets,
  isLast,
  delay = 0,
}: {
  category: string;
  year: string;
  title: string;
  subtitle: string;
  bullets: string[];
  isLast?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`relative ${isLast ? "" : "mb-16"}`}
    >
      <div className="absolute -left-10 md:-left-14 flex h-4 w-4 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm mt-1">
        <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
      </div>

      <div className="mb-2 flex items-center gap-3 text-[10px] font-mono tracking-widest text-gray-400 uppercase">
        <span className="rounded bg-gray-100 px-2 py-0.5 text-gray-500">{category}</span>
        <span>{year}</span>
      </div>

      <h3 className="mb-1 text-xl font-bold tracking-tight text-[#111111]">{title}</h3>
      <p className="mb-4 text-sm text-gray-500">{subtitle}</p>

      <ul className="space-y-2 text-sm leading-relaxed text-gray-500">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 text-pink-300">→</span>
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function MomentCard({ image, label }: { image: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-pink-500/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between p-4">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">EVENT</span>
      </div>
    </motion.div>
  );
}
