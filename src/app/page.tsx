'use client'

import Image from "next/image";
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <HeroSection />
      <FAQ />
    </div>
  );
}
