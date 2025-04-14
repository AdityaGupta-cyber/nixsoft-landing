import React from "react";

interface ServicesSectionProps {
  selectedServices: string[];
  onServiceToggle: (service: string) => void;
}

const services = [
  { name: "Consulting", price: 1000 },
  { name: "Technical", price: 800 },
  { name: "Migration", price: 1200 },
  { name: "Managed", price: 1500 },
  { name: "Training", price: 600 },
  { name: "Flexi Pack (Consulting + Services + Support)", price: 2000 },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedServices,
  onServiceToggle,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3 text-gray-700">Services</h3>
      <div className="grid grid-cols-3 gap-2">
        {services.map((service) => (
          <label
            key={service.name}
            className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer 
              ${
                selectedServices.includes(service.name)
                  ? "bg-[#4A7EFF]/10 border border-[#4A7EFF] text-[#4A7EFF]"
                  : "hover:bg-gray-50"
              }`}
          >
            <input
              type="checkbox"
              checked={selectedServices.includes(service.name)}
              onChange={() => onServiceToggle(service.name)}
              className="form-checkbox text-[#4A7EFF]"
            />
            <span className="text-sm">{service.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

// Export services for price calculations
export const servicePrices = services;