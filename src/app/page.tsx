'use client'

import Image from "next/image";
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import TechnologySection from '../components/TechnologySection';
import TeamSection from '../components/TeamSection';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <NavBar />
      </header>
      <main className="flex-grow">
        <HeroSection />
        <MissionSection />
        <TechnologySection />
        <TeamSection />
        <FAQ />
      </main>
      <footer className="py-8 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-8 md:px-20">
          <p className="text-center text-gray-500 text-sm">© 2025 Faith Stack AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
