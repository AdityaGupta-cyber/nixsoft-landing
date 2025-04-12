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
      title: "CI/CD Pipeline Implementation",
      description:
        "Accelerate your software delivery with our comprehensive CI/CD pipeline implementation services. We'll help you automate building, testing, and deployment for faster and more reliable releases.",
      services: [
        "Continuous Integration Setup",
        "Continuous Delivery & Deployment",
        "Pipeline Automation",
        "Jenkins, GitLab CI, GitHub Actions Integration",
        "Automated Testing Frameworks",
      ],
      imagePosition: "right",
      imageSrc:
        "https://imgs.search.brave.com/I4JkG1BcFO6xGFd0bFPACM_WtiwFiWF4cDvL9ZwoXOs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG91ZC13aXRo/LW1vZGVsLWNvbXB1/dGVyLXdpdGgtd29y/ZC1tYXJrZXQtaXRf/OTAxMDAzLTQ2OTMu/anBnP3NlbXQ9YWlz/X2h5YnJpZA",
    },
    {
      title: "Infrastructure as Code (IaC)",
      description:
        "Transform your infrastructure management with our IaC services. We'll help you define, deploy, and manage infrastructure using code and automation tools for greater efficiency and consistency.",
      services: [
        "Terraform Implementation",
        "CloudFormation & ARM Templates",
        "Ansible Configuration Management",
        "Pulumi & CDK Solutions",
        "Version-controlled Infrastructure",
      ],
      imagePosition: "left",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1677448831822-4251f31b9fd5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Kubernetes & Container Orchestration",
      description:
        "Leverage the power of container orchestration with our Kubernetes expertise. We provide deployment, management, and optimization services to ensure scalable and resilient containerized applications.",
      services: [
        "Kubernetes Cluster Setup & Management",
        "Docker Container Implementation",
        "Microservices Architecture",
        "Service Mesh Implementation",
        "Helm Charts & Package Management",
        "Pod Scaling & Self-healing Configuration",
      ],
      imagePosition: "right",
      imageSrc:
        "https://spacelift.io/_next/image?url=https%3A%2F%2Fspaceliftio.wpcomstaging.com%2Fwp-content%2Fuploads%2F2023%2F04%2F193.terraform-infrastructure-as-code.png&w=2048&q=100",
    },
    {
      title: "Monitoring & Performance Optimization",
      description:
        "Gain complete visibility into your systems with our comprehensive monitoring and performance optimization services. We help you identify bottlenecks, prevent issues, and ensure optimal application performance.",
      services: [
        "Prometheus & Grafana Implementation",
        "ELK Stack Deployment",
        "Performance Analysis & Tuning",
        "Real-time Alerting & Notifications",
        "Resource Utilization Optimization",
        "Log Aggregation & Analysis",
      ],
      imagePosition: "left",
      imageSrc:
        "https://www.mgt-commerce.com/astatic/assets/images/article/2023/155/hero.svg?v=1.0.4",
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
