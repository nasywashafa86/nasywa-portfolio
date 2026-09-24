import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProjectsSection from "@/components/ProjectsSection";
import AboutContactSection from "@/components/AboutContactSection";
import FloatingMenu from "@/components/FloatingMenu";
import { client } from "@/sanity/lib/client";
import { trophyCountQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Home() {
  const trophyCount = await client.fetch<number>(trophyCountQuery);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
        <div className="text-sm font-semibold tracking-tight text-black">
          <span className="text-gray-400">~/</span> nasywa.dev
        </div>
        <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-3 py-1.5 text-xs font-mono text-gray-500 shadow-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
          open to IT Business Analyst roles
        </div>
      </header>

      {/* Sections */}
      <Hero trophyCount={trophyCount} />
      <Marquee />
      <ProjectsSection trophyCount={trophyCount} />
      <AboutContactSection />

      {/* Floating Menu overlay */}
      <FloatingMenu />
    </main>
  );
}
