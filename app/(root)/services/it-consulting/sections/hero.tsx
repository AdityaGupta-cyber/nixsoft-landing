"use client";
import React from "react";

const NixSoftHero = () => {
  return (
    <div className="relative w-full h-140 py-10 bg-indigo-900 overflow-hidden">
      {/* Network background effect */}
      <div className="absolute inset-0 opacity-30">
        {/* This would typically be an SVG or canvas animation for the network lines */}
        {/* For a static representation, we're using a div with background properties */}
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">
          Accelerate Your
          <br />
          Business Growth With
          <br />
          <span className="text-cyan-400">Strategic IT Consulting</span>
        </h1>
        
        <p className="text-white text-lg md:text-xl max-w-xl mb-8">
          Navigate your digital transformation journey with confidence. Our expert consultants help you leverage technology to drive innovation, enhance operational efficiency, and gain competitive advantage.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition-colors">
            Transformation Solutions
          </button>
          <button
            onClick={() => (window.location.href = "/consultation")}
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded hover:bg-white hover:bg-opacity-10 transition-colors"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default NixSoftHero;