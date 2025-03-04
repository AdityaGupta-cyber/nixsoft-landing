"use client";

import React from "react";
import { Users, Target, Rocket } from "lucide-react";
import { BenefitsSection } from "./components/BenefitsSection";
import { JobListings } from "./components/JobListings";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Got Talent?</h1>
          <p className="text-xl mb-8">
            Meet Opportunity - Join the Future of Technology
          </p>
          <div className="flex justify-center space-x-8 items-center">
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6" />
              <span>Collaborate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-6 h-6" />
              <span>Innovate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Rocket className="w-6 h-6" />
              <span>Succeed</span>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Job Listings */}
      <JobListings />
    </div>
  );
};

export default Page;
