import React from "react";
import { Briefcase, Code, Laptop, BookOpen, Settings, Package } from "lucide-react";

interface ServicesSectionProps {
  selectedServices: string[];
  onServiceToggle: (service: string) => void;
}

const services = [
  { 
    name: "Consulting", 
    price: 1000,
    icon: <Briefcase className="w-5 h-5" />,
    description: "Expert technical consulting and strategy"
  },
  { 
    name: "Technical", 
    price: 800,
    icon: <Code className="w-5 h-5" />,
    description: "Implementation and development services"
  },
  { 
    name: "Migration", 
    price: 1200,
    icon: <Settings className="w-5 h-5" />,
    description: "Seamless data and system migration"
  },
  { 
    name: "Managed", 
    price: 1500,
    icon: <Laptop className="w-5 h-5" />,
    description: "24/7 managed service support"
  },
  { 
    name: "Training", 
    price: 600,
    icon: <BookOpen className="w-5 h-5" />,
    description: "Comprehensive team training"
  },
  { 
    name: "Flexi Pack", 
    price: 2000,
    icon: <Package className="w-5 h-5" />,
    description: "Complete solution with consulting and support"
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedServices,
  onServiceToggle,
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Services</h3>
      <p className="text-gray-600 mb-6">Choose the services you need</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <label
            key={service.name}
            className={`relative flex flex-col p-4 border rounded-xl cursor-pointer transition-all
              ${
                selectedServices.includes(service.name)
                ? "border-[#4A7EFF] bg-blue-50 ring-2 ring-[#4A7EFF]/20"
                : "border-gray-200 hover:border-[#4A7EFF] hover:shadow-md"
              }`}
          >
            <div className="flex items-start">
              <input
                type="checkbox"
                checked={selectedServices.includes(service.name)}
                onChange={() => onServiceToggle(service.name)}
                className="w-5 h-5 rounded border-gray-300 text-[#4A7EFF] focus:ring-[#4A7EFF] mt-1"
              />
              <div className="ml-3">
                <div className="flex items-center gap-2">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                  <span className="font-medium text-gray-900">{service.name}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{service.description}</p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export const servicePrices = services;