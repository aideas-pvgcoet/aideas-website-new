'use client';

import Hero from "@/components/Hero";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
