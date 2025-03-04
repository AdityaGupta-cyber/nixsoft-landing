import React from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Server,
  Shield,
} from "lucide-react";

const TechnologiesSection = () => {
  const technologies = [
    {
      name: "Web Development",
      icon: <Code className="text-blue-600" size={48} />,
    },
    {
      name: "Mobile Apps",
      icon: <Smartphone className="text-blue-600" size={48} />,
    },
    {
      name: "Cloud Solutions",
      icon: <Cloud className="text-blue-600" size={48} />,
    },
    {
      name: "Database",
      icon: <Database className="text-blue-600" size={48} />,
    },
    { name: "DevOps", icon: <Server className="text-blue-600" size={48} /> },
    {
      name: "Cybersecurity",
      icon: <Shield className="text-blue-600" size={48} />,
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Technologies We Excel In
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-full mb-4 shadow-sm">
                {tech.icon}
              </div>
              <p className="text-center text-gray-700 font-medium">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
