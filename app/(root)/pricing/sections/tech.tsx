import React from "react";
import { Database,Lock, Server, ChartBar } from "lucide-react";

interface TechnologiesSectionProps {
  selectedTechnologies: string[];
  onTechnologyToggle: (tech: string) => void;
}

const technologies = [
  { 
    name: "PostgreSQL", 
    price: 500,
    icon: <Database className="w-5 h-5" />,
    description: "Enterprise-grade relational database"
  },
  { 
    name: "My Postgres Tool", 
    price: 300,
    icon: <Database className="w-5 h-5" />,
    description: "Advanced PostgreSQL management"
  },
  { 
    name: "MongoDB", 
    price: 400,
    icon: <Database className="w-5 h-5" />,
    description: "NoSQL database solution"
  },
  { 
    name: "Kubernetes", 
    price: 600,
    icon: <Server className="w-5 h-5" />,
    description: "Container orchestration platform"
  },
  { 
    name: "Kafka", 
    price: 450,
    icon: <Server className="w-5 h-5" />,
    description: "Real-time data streaming"
  },
  { 
    name: "ELK", 
    price: 350,
    icon: <ChartBar className="w-5 h-5" />,
    description: "Log management & analytics"
  },
  { 
    name: "NGINX", 
    price: 200,
    icon: <Server className="w-5 h-5" />,
    description: "High-performance web server"
  },
  { 
    name: "Grafana", 
    price: 250,
    icon: <ChartBar className="w-5 h-5" />,
    description: "Metrics visualization"
  },
  { 
    name: "Kong", 
    price: 300,
    icon: <Lock className="w-5 h-5" />,
    description: "API gateway & management"
  },
];

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({
  selectedTechnologies,
  onTechnologyToggle,
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Technologies</h3>
      <p className="text-gray-600 mb-6">Select the technologies you need for your solution</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {technologies.map((tech) => (
          <label
            key={tech.name}
            className={`relative flex flex-col p-4 border rounded-xl cursor-pointer transition-all
              ${
                selectedTechnologies.includes(tech.name)
                ? "border-[#4A7EFF] bg-blue-50 ring-2 ring-[#4A7EFF]/20"
                : "border-gray-200 hover:border-[#4A7EFF] hover:shadow-md"
              }`}
          >
            <div className="flex items-start">
              <input
                type="checkbox"
                checked={selectedTechnologies.includes(tech.name)}
                onChange={() => onTechnologyToggle(tech.name)}
                className="w-5 h-5 rounded border-gray-300 text-[#4A7EFF] focus:ring-[#4A7EFF] mt-1"
              />
              <div className="ml-3">
                <div className="flex items-center gap-2">
                  <div className="text-blue-600">
                    {tech.icon}
                  </div>
                  <span className="font-medium text-gray-900">{tech.name}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{tech.description}</p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export const technologyPrices = technologies;