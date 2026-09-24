"use client";
import AboutContactSection from "@/components/AboutContactSection";
import FloatingMenu from "@/components/FloatingMenu";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Navigation Area */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight text-black transition-colors hover:text-gray-500">
          <span className="text-gray-400">~/</span> nasywa.dev
        </Link>
        <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-3 py-1.5 text-xs font-mono text-gray-500 shadow-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
          open to AI/ML roles
        </div>
      </header>

      {/* Reusing the About & Contact section from the home page */}
      <div className="pt-24">
        <AboutContactSection />
      </div>

      <FloatingMenu />
    </main>
  );
}
