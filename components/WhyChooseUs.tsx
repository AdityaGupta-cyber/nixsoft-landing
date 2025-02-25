'use client';
import React, { useState, useEffect } from 'react';

export default function WhyChooseUs() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "1000+", label: "Projects Completed" },
    { number: "50+", label: "Expert Team" },
  ];

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const target = parseInt(stat.number);
      const duration = 2000;
      const step = target / (duration / 10);

      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < target) {
            newCounts[index] = Math.min(target, newCounts[index] + step);
          }
          return newCounts;
        });
      }, 10);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="w-full py-16 bg-gray-50 flex ">
      <div className="w-[80vw] flex flex-col items-center justify-center mx-auto px-4  space-y-12">
        {/* <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2> */}


      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-16 w-full h-full gap-12 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-blue-600 mb-2 max-w-48 mx-auto">
                {Math.floor(counts[idx])}{stat.number.includes('+') && '+'}
              </div>
              <div className="text-zinc-600 text-sm font-semibold md:text-base ">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
} 