"use client";
import React from "react";
import { 
  
  Search, 
  PenTool, 
  Server, 
  FileCode, 
  RefreshCw, 
  Rocket, 
  TrendingUp, 
  ChevronRight, 
  ArrowUp 
} from "lucide-react";

// Define interfaces for your props
interface ServiceItem {
  name: string;
  icon: React.ReactNode;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  services: ServiceItem[];
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

            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-indigo-500 mr-3 mt-1">{service.icon}</div>
                  <span className="text-gray-800">{service.name}</span>
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
              className="rounded-lg shadow-md w-full object-cover h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DigitalTransformationPage: React.FC = () => {
  // Data for all service sections with the digital transformation content
  const servicesData = [
    {
      title: "Assessment & Strategy Development",
      description:
        "We conduct a comprehensive analysis of your organization's current technology infrastructure, processes, and business models to develop a strategic roadmap aligned with your long-term goals and vision.",
      services: [
        { name: "Current State Assessment", icon: <Search size={20} /> },
        { name: "Technology Roadmap Development", icon: <Rocket size={20} /> },
        { name: "Change Management Planning", icon: <ChevronRight size={20} /> },
        { name: "Digital Maturity Evaluation", icon: <TrendingUp size={20} /> },
        { name: "ROI Analysis & Business Case Development", icon: <ArrowUp size={20} /> },
        { name: "Competitive Technology Benchmarking", icon: <PenTool size={20} /> }
      ],
      imagePosition: "right" as const,
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Process Optimization & Automation",
      description:
        "We identify inefficiencies in your business processes and redesign them using digital tools to increase efficiency and reduce costs. Our automation expertise helps streamline operations and eliminate manual tasks.",
      services: [
        { name: "Process Reengineering & Workflow Optimization", icon: <PenTool size={20} /> },
        { name: "Robotic Process Automation (RPA)", icon: <PenTool size={20} /> },
        { name: "AI-Powered Task Automation", icon: <Server size={20} /> },
        { name: "Legacy System Modernization", icon: <RefreshCw size={20} /> },
        { name: "Process Documentation & Training", icon: <FileCode size={20} /> },
        { name: "Digital Process Monitoring & Analytics", icon: <PenTool size={20} /> }
      ],
      imagePosition: "left" as const,
      imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Technology Implementation",
      description:
        "We help businesses move to modern infrastructure solutions for flexibility, scalability, and cost-efficiency. Our experts integrate disparate systems into unified platforms while ensuring robust cybersecurity measures.",
      services: [
        { name: "Cloud Migration & Optimization", icon: <Rocket size={20} /> },
        { name: "System Integration Services", icon: <Search size={20} /> },
        { name: "Cybersecurity Framework Implementation", icon: <PenTool size={20} /> },
        { name: "SaaS & Enterprise Platform Selection", icon: <Server size={20} /> },
        { name: "IoT & Edge Computing Solutions", icon: <PenTool size={20} /> },
        { name: "Secure API Development & Management", icon: <PenTool size={20} /> }
      ],
      imagePosition: "right" as const,
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
    },
    {
      title: "Data Strategy & Analytics",
      description:
        "We establish comprehensive data governance policies and frameworks to manage data across your organization, enabling advanced analytics, AI, and machine learning to drive insights and inform decision-making.",
      services: [
        { name: "Data Governance Framework Development", icon: <PenTool size={20} /> },
        { name: "Advanced Analytics Implementation", icon: <TrendingUp size={20} /> },
        { name: "Business Intelligence Solutions", icon: <ArrowUp size={20} /> },
        { name: "Data Warehouse & Lake Architecture", icon: <Server size={20} /> },
        { name: "Predictive Analytics & AI Integration", icon: <PenTool size={20} /> },
        { name: "Real-time Data Processing Solutions", icon: <RefreshCw size={20} /> }
      ],
      imagePosition: "left" as const,
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "DevOps Transformation",
      description:
        "We implement DevOps practices to improve collaboration between development and operations teams, enhancing software delivery processes and reducing time to market for new features or services.",
      services: [
        { name: "CI/CD Pipeline Implementation", icon: <RefreshCw size={20} /> },
        { name: "Infrastructure as Code Adoption", icon: <FileCode size={20} /> },
        { name: "Microservices Architecture Design", icon: <PenTool size={20} /> },
        { name: "Container Orchestration (Kubernetes, Docker)", icon: <Search size={20} /> },
        { name: "DevSecOps Integration", icon: <PenTool size={20} /> },
        { name: "Automated Testing Frameworks", icon: <PenTool size={20} /> }
      ],
      imagePosition: "right" as const,
      imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Measurement & Continuous Improvement",
      description:
        "We establish key performance indicators to measure the success of digital initiatives and foster a culture of continuous learning and improvement by refining strategies and processes based on performance data.",
      services: [
        { name: "KPI Framework Development", icon: <TrendingUp size={20} /> },
        { name: "Digital Transformation Success Metrics", icon: <PenTool size={20} /> },
        { name: "Performance Monitoring Systems", icon: <ArrowUp size={20} /> },
        { name: "Continuous Improvement Programs", icon: <RefreshCw size={20} /> },
        { name: "Technology Value Stream Mapping", icon: <Search size={20} /> },
        { name: "Digital Innovation Workshops", icon: <ChevronRight size={20} /> }
      ],
      imagePosition: "left" as const,
      imageSrc: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Benefits Banner Section */}
      <div className="w-full py-12 bg-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
            Benefits of Digital Transformation Consulting
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <PenTool size={40} className="text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Increased Efficiency</h3>
              <p className="text-gray-600">Streamlined processes and automation reduce manual effort and errors</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Rocket size={40} className="text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalability</h3>
              <p className="text-gray-600">Technology allows businesses to scale operations more easily</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <ChevronRight size={40} className="text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Improved Experience</h3>
              <p className="text-gray-600">Personalized, real-time services that engage customers effectively</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp size={40} className="text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-600">Enhanced decision-making with analytics and insights</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Search size={40} className="text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Edge</h3>
              <p className="text-gray-600">Staying ahead by leveraging the latest technologies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Sections */}
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

export default DigitalTransformationPage;