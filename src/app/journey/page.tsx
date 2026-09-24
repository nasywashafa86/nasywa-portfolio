import FloatingMenu from "@/components/FloatingMenu";
import JourneyPageClient from "@/components/JourneyPageClient";
import Link from "next/link";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { client } from "@/sanity/lib/client";
import {
  experiencesQuery,
  trophiesQuery,
  trainingsQuery,
  publicationsQuery,
  skillsQuery,
  languagesQuery,
  type SanityExperience,
  type SanityTrophy,
  type SanityTraining,
  type SanityPublication,
  type SanitySkill,
  type SanityLanguage,
} from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function JourneyPage() {
  const [experiences, trophies, trainings, publications, skills, languages] = await Promise.all([
    client.fetch<SanityExperience[]>(experiencesQuery),
    client.fetch<SanityTrophy[]>(trophiesQuery),
    client.fetch<SanityTraining[]>(trainingsQuery),
    client.fetch<SanityPublication[]>(publicationsQuery),
    client.fetch<SanitySkill[]>(skillsQuery),
    client.fetch<SanityLanguage[]>(languagesQuery),
  ]);

  return (
    <main className="min-h-screen bg-white selection:bg-pink-100 selection:text-pink-900">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight text-black transition-colors hover:text-gray-500">
          <span className="text-gray-400">~/</span> nasywa.dev
        </Link>
        <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-3 py-1.5 text-xs font-mono text-gray-500 shadow-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
          open to IT Business Analyst roles
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-24 md:pt-40 md:px-8 bg-white border-b border-gray-50">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="mb-4 text-xs font-mono tracking-widest text-gray-400 uppercase">
              <span className="text-pink-400">~/ </span> JOURNEY & ACHIEVEMENTS
            </p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-[#111111] md:text-7xl">
              The road I&apos;ve<br />walked so far.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
              From engineering fundamentals to building ventures — a timeline of the work, learning and wins that shaped how I build.
            </p>
          </div>

          <JourneyPageClient
            experiences={experiences}
            trophies={trophies}
            trainings={trainings}
            publications={publications}
            skills={skills}
            languages={languages}
          />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#FAFAFA] px-4 pb-32 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative flex flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white p-12 text-center shadow-sm">
            <div className="absolute top-0 h-1 w-32 bg-pink-400/50 blur-sm" />

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
              Want to see the code behind it all?
            </h2>
            <p className="mb-10 max-w-md text-sm text-gray-500">
              Explore the full projects page, or jump back to the homepage to see the highlights.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link href="/projects" className="flex w-full items-center justify-center gap-2 rounded-md bg-[#111315] px-6 py-3 text-sm font-medium text-white shadow-md transition-transform hover:scale-105 active:scale-95 sm:w-auto">
                <LayoutGrid className="h-4 w-4" /> View All Projects
              </Link>
              <Link href="/" className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:border-gray-300 hover:bg-gray-50 active:scale-95 sm:w-auto">
                <ArrowRight className="h-4 w-4 rotate-180" /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FloatingMenu />
    </main>
  );
}
