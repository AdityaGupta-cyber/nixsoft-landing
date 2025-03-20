// src/components/JobListings.tsx
import React from "react";
import { MapPin, Briefcase } from "lucide-react";
import { jobListings } from "@/lib/data";

export const JobListings: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Current Openings
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {jobListings.map((job, index) => (
            <div
              key={index}
              className="bg-white border rounded-[10px] p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                <span className="text-sm text-gray-500">{job.location}</span>
              </div>
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 mr-2 text-blue-500" />
                <h3 className="text-xl font-semibold">{job.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{job.description}</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
