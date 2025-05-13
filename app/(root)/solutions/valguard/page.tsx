"use client";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Benefits from "./sections/Benefits";
import HowItWorks from "./sections/HowItWorks";

export default function ValGuardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
    </div>
  );
}
