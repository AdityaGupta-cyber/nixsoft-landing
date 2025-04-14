import React from "react";

interface TechnologiesSectionProps {
  selectedTechnologies: string[];
  onTechnologyToggle: (tech: string) => void;
}

const technologies = [
  { name: "PostgreSQL", price: 500 },
  { name: "My Postgres Tool", price: 300 },
  { name: "MongoDB", price: 400 },
  { name: "Kubernetes", price: 600 },
  { name: "Kafka", price: 450 },
  { name: "ELK", price: 350 },
  { name: "NGINX", price: 200 },
  { name: "Grafana", price: 250 },
  { name: "Kong", price: 300 },
];

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({
  selectedTechnologies,
  onTechnologyToggle,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3 text-gray-700">Technologies</h3>
      <div className="grid grid-cols-3 gap-2">
        {technologies.map((tech) => (
          <label
            key={tech.name}
            className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer 
              ${
                selectedTechnologies.includes(tech.name)
                  ? "bg-[#4A7EFF]/10 border border-[#4A7EFF] text-[#4A7EFF]"
                  : "hover:bg-gray-50"
              }`}
          >
            <input
              type="checkbox"
              checked={selectedTechnologies.includes(tech.name)}
              onChange={() => onTechnologyToggle(tech.name)}
              className="form-checkbox text-[#4A7EFF]"
            />
            <span className="text-sm">{tech.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export const technologyPrices = technologies;