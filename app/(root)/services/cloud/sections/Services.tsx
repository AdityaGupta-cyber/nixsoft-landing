"use client";
import React from "react";

// Define interfaces for your props
interface ServiceItem {
  name: string;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  services: ServiceItem[] | string[];
  imagePosition?: "right" | "left";
  imageSrc?: string;
  index?: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  services,
  imagePosition = "right",
  imageSrc,
}) => {
  const isImageRight = imagePosition === "right";

  return (
    <div className="w-full py-12 border-b border-gray-200">
      <div className="container mx-auto">
        <div
          className={`flex flex-col lg:flex-row items-center ${
            isImageRight ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Content Section */}
          <div className="w-full lg:w-1/2 px-6">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">{title}</h2>
            <p className="text-gray-700 mb-6">{description}</p>

            <div className="space-y-2 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-indigo-500 mr-2">—</span>
                  <span>
                    {typeof service === "string" ? service : service.name}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="text-blue-500 font-medium flex items-center hover:text-blue-700 transition-colors"
              onClick={() => (window.location.href = "/learn-more")}
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 p-6">
            <img
              src={imageSrc || "/api/placeholder/600/400"}
              alt="Service illustration"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ServiceData {
  title: string;
  description: string;
  services: string[];
  imagePosition: "right" | "left";
  imageSrc: string;
}

const ServicesPage: React.FC = () => {
  // Data for all service sections
  const servicesData: ServiceData[] = [
    {
      title: "AWS, Azure, & Google Cloud Solutions",
      description:
        "Get expert guidance on cloud platform selection, migration strategies, and optimization to ensure your business leverages the best cloud technologies.",
      services: [
        "Cloud Platform Selection",
        "Cloud Migration Strategies",
        "Cloud Cost Optimization",
        "Multi-Cloud Management",
        "Performance Tuning & Scaling",
      ],
      imagePosition: "right",
      imageSrc:
        "https://imgs.search.brave.com/I4JkG1BcFO6xGFd0bFPACM_WtiwFiWF4cDvL9ZwoXOs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG91ZC13aXRo/LW1vZGVsLWNvbXB1/dGVyLXdpdGgtd29y/ZC1tYXJrZXQtaXRf/OTAxMDAzLTQ2OTMu/anBnP3NlbXQ9YWlz/X2h5YnJpZA",
    },
    {
      title: "Virtualization (VMware, Hyper-V, Proxmox)",
      description:
        "Get consulting, design, and deployment insights on enterprise-grade virtualization solutions tailored to your business needs.",
      services: [
        "VMware vSphere Deployment",
        "Hyper-V Virtualization",
        "Proxmox VE Management",
        "Virtual Machine Migration",
        "Resource Optimization",
      ],
      imagePosition: "left",
      imageSrc:
        "https://files.oaiusercontent.com/file-4eV64N9R3c4EzZKq3J6pAM?se=2025-03-18T07%3A02%3A44Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6d8629d8-7ff7-4659-a422-7215ade09fec.webp&sig=BaSD0P8vfeK6cQ%2BspPp6f%2BVeUgWwZ52jwIRdh4duqFY%3D",
    },
    {
      title: "Hybrid Cloud Implementations",
      description:
        "Get our specialists to handle open source migration, installation, configuration, capacity planning, and more. Run your open-source software with ease.",
      services: [
        "Hybrid Cloud Strategy",
        "PostgreSQL Database Management",
        "MongoDB Implementation",
        "Kubernetes Orchestration",
        "ELK Stack Deployment",
        "NGINX & Kafka Configuration",
        "Terraform Infrastructure",
      ],
      imagePosition: "right",
      imageSrc:
        "https://files.oaiusercontent.com/file-Pm9gkKc54EM4rZx91TRjdx?se=2025-03-18T07%3A04%3A20Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6cb7468b-63d4-48b6-9a0d-a5db3c0c9d1c.webp&sig=jThTFSzBvI2ChjFgTHCbW5F9lZGkVGTI8Yn1ygTXg0k%3D",
    },
    {
      title: "Cloud Cost Optimization",
      description:
        "Optimize cloud spending while maintaining high performance and security. Our experts help you reduce unnecessary costs and improve efficiency.",
      services: [
        "Cost Analysis & Optimization",
        "Rightsizing & Autoscaling",
        "Reserved Instances & Savings Plans",
        "Billing & Budgeting Strategies",
        "FinOps Best Practices",
      ],
      imagePosition: "left",
      imageSrc:
        "https://files.oaiusercontent.com/file-KrDyv7h6xkxhTM9dV3UZg5?se=2025-03-18T07%3A05%3A12Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd87eac7f-74c1-4e45-bb3b-ca86d050f8a7.webp&sig=BXzOEl5KaIqoIKjrc69XG8rd7tMbpH3GkKgm1NSrW5A%3D",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {servicesData.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          description={service.description}
          services={service.services}
          imagePosition={service.imagePosition}
          imageSrc={service.imageSrc}
          index={index}
        />
      ))}

      {/* Back to top button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
