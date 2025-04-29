"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { aboutContent } from "@/lib/data";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    developers: 0,
  });

  // Target values for counter animation
  const targets = { years: 7, projects: 200, developers: 50 };

  // First paragraph of about content for preview
  const previewText = aboutContent.split("\n\n")[0];

  // Counter animation using Intersection Observer
  useEffect(() => {
    const animateCounts = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);

              setCounts({
                years: Math.floor(progress * targets.years),
                projects: Math.floor(progress * targets.projects),
                developers: Math.floor(progress * targets.developers),
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
  }, [targets.years, targets.projects, targets.developers]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 pt-24  relative overflow-hidden">
        <div className=" absolute inset-0">
          <motion.div
            className="w-64 h-64 rounded-full bg-blue-500 opacity-50 absolute -top-20 -left-20"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="w-96 h-96 rounded-full bg-blue-500 opacity-40 absolute -bottom-40 -right-20"
            animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="w-80 h-80 rounded-full bg-blue-500 opacity-30 absolute top-1/2 right-1/4"
            animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="container mx-auto px-6 py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-4">
              Empowering Digital Innovation
            </h1>
            <p className="text-xl opacity-90">
              Transforming Businesses Through Technology Excellence Since 2016
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-8">
                Nixsoft is a leading technology solutions provider, dedicated to
                delivering innovative and scalable solutions that drive business
                growth. With over 7 years of experience, we&apos;ve helped
                numerous businesses achieve their digital transformation goals.
              </p>

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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative w-full" style={{ height: "400px", width: "512px", maxWidth: "100%" }}>
                <Image
                  src="/office.svg"
                  alt="Office Interior"
                  fill
                  className="object-cover rounded-lg shadow-md"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Improved About Us Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <div className="mt-2 w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed">{previewText}</p>

                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center shadow-sm"
                  >
                    <span>Read More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal for Read More */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-xl max-w-3xl max-h-[80vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                About Nixsoft Technologies
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-800 text-xl h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <div className="prose prose-blue max-w-none">
                {aboutContent.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
