"use client";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Benefits from "./sections/Benefits";


export default function AIOpsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16 bg-gray-900 text-white">
      <Hero />
      <Services />
      <Features />
      <HowItWorks />
      <Benefits />
    
    </div>
  );
}
