"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const slides = [
  {
    background:
      "url('https://plus.unsplash.com/premium_photo-1712254285399-f5f181730830?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    title: "Achieve your CX goals with Unified Observability",
    description: "Get unparalleled visibility into your infrastructure.",
  },
  {
    background:
      "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
    title: "Real-time Analytics for Smart Decisions",
    description: "Instant insights powered by AI-driven analytics.",
  },
  {
    background:
      "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
    title: "Cloud-Native Solutions for Modern Businesses",
    description: "Scalable infrastructure for growing enterprises.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: slides[currentSlide].background,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative h-[500px] md:h-[600px] bg-cover bg-center">
            <div className="space-y-6">
              <h1 className="text-2xl md:text-5xl font-bold text-white leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-blue-300 text-xl">
                {slides[currentSlide].description}
              </p>
              <Button className="bg-[#1E90FF] text-white px-8 py-6 text-lg hover:bg-blue-600">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
