'use client';
import React, { useState, useEffect } from 'react';

interface Stats {
  years: number;
  projects: number;
  developers: number;
}

const WhyChooseUs: React.FC = () => {
  const [counts, setCounts] = useState<Stats>({
    years: 0,
    projects: 0,
    developers: 0,
  });

  const stats: Stats = {
    years: 7,
    projects: 200,
    developers: 50,
  };

  useEffect(() => {
    const animateCounts = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);

              setCounts({
                years: Math.floor(progress * stats.years),
                projects: Math.floor(progress * stats.projects),
                developers: Math.floor(progress * stats.developers),
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        },
        { threshold: 0.5 }
      );

      const statsSection = document.querySelector(".stats-section");
      if (statsSection) observer.observe(statsSection);

      return () => {
        if (statsSection) observer.unobserve(statsSection);
      };
    };

    animateCounts();
  }, [stats.years, stats.projects, stats.developers]);

  return (
    <div className="stats-section grid grid-cols-3 gap-6 mt-10">
      <div className="text-center">
        <div className="text-blue-600 text-3xl font-bold flex justify-center items-baseline">
          <span>{counts.years}</span>
          <span>+</span>
        </div>
        <p className="text-gray-500">Years Experience</p>
      </div>
      <div className="text-center">
        <div className="text-blue-600 text-3xl font-bold flex justify-center items-baseline">
          <span>{counts.projects}</span>
          <span>+</span>
        </div>
        <p className="text-gray-500">Projects Delivered</p>
      </div>
      <div className="text-center">
        <div className="text-blue-600 text-3xl font-bold flex justify-center items-baseline">
          <span>{counts.developers}</span>
          <span>+</span>
        </div>
        <p className="text-gray-500">Expert Developers</p>
      </div>
    </div>
  );
};

export default WhyChooseUs; 