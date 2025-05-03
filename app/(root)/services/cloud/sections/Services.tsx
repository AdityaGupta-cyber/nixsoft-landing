"use client";
import React from "react";
import { Cloud, Monitor, Database, BarChart3, Award, Users, Clock, DollarSign, Lightbulb, ChevronUp } from 'lucide-react';

// Content configuration - easy to update when needed
const servicesContent = [
  {
    id: "cloud-solutions",
    title: "AWS, Azure, & Google Cloud Solutions",
    description: "Harness the full potential of the cloud with our robust offerings across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Our certified cloud experts provide:",
    icon: <Cloud className="w-8 h-8" />,
    bulletPoints: [
      "Custom cloud strategy and architecture design tailored to your unique business needs.",
      "Seamless cloud migration and deployment services, minimizing downtime and disruption.",
      "Reliable cloud operations management, security implementation, and continuous optimization."
    ],
    imagePosition: "right",
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "virtualization",
    title: "Virtualization (VMware, Hyper-V, Proxmox)",
    description: "Boost your infrastructure performance and efficiency with state-of-the-art virtualization solutions:",
    icon: <Monitor className="w-8 h-8" />,
    bulletPoints: [
      "End-to-end virtualization services including implementation, configuration, and management for VMware, Microsoft Hyper-V, and Proxmox.",
      "Optimized utilization of hardware resources, enabling cost savings and improved operational flexibility.",
      "Enhanced disaster recovery strategies through advanced virtualization technologies."
    ],
    imagePosition: "left",
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  },
  {
    id: "hybrid-cloud",
    title: "Hybrid Cloud Implementations",
    description: "Combine the best of both worlds—public cloud flexibility and private cloud control—through Nixsoft's hybrid cloud solutions:",
    icon: <Database className="w-8 h-8" />,
    bulletPoints: [
      "Strategic hybrid cloud infrastructure planning and deployment.",
      "Secure and seamless integration between private and public cloud environments.",
      "Enhanced compliance, security, and performance tailored to your enterprise requirements."
    ],
    imagePosition: "right",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "cost-optimization",
    title: "Cloud Cost Optimization",
    description: "Control cloud expenses effectively while enhancing productivity and operational efficiency:",
    icon: <BarChart3 className="w-8 h-8" />,
    bulletPoints: [
      "Detailed cloud expenditure analysis and proactive cost optimization strategies.",
      "Identification and elimination of resource wastage through comprehensive audits.",
      "Automated recommendations and insights driven by intelligent analytics."
    ],
    imagePosition: "left",
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
  }
];

const whyChooseContent = [
  {
    icon: <Award className="w-6 h-6 text-indigo-500" />,
    title: "Experienced Specialists",
    description: "Certified cloud architects and virtualization experts dedicated to your success."
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    title: "Tailored Solutions",
    description: "Personalized strategies and implementations customized to your specific business objectives."
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-500" />,
    title: "24/7 Support & Reliability",
    description: "Unmatched commitment to continuous support, reliability, and proactive infrastructure management."
  },
  {
    icon: <DollarSign className="w-6 h-6 text-indigo-500" />,
    title: "Cost-Effective",
    description: "Proven methods to reduce your overall IT expenses while maximizing performance and productivity."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-indigo-500" />,
    title: "Innovation-Driven",
    description: "Leveraging cutting-edge technology and industry best practices to keep you ahead in a rapidly evolving digital landscape."
  }
];

// Define interfaces for your props
interface ServiceItem {
  name: string;
  description?: string;
  bulletPoints?: string[];
}

interface ServiceSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bulletPoints?: string[];
  imagePosition?: "right" | "left";
  imageSrc?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  icon,
  bulletPoints,
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
            <div className="flex items-center mb-4">
              <span className="text-3xl text-indigo-500 mr-3">{icon}</span>
              <h2 className="text-3xl font-bold text-indigo-900">{title}</h2>
            </div>
            <p className="text-gray-700 mb-6 font-semibold">{description}</p>

            {bulletPoints && bulletPoints.length > 0 && (
              <ul className="space-y-2 mb-8">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <button
              className="text-blue-500 font-medium flex items-center hover:text-blue-700 transition-colors"
              onClick={() => (window.location.href = "/about-us")}
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

const WhyChooseSection: React.FC = () => {
  return (
    <div className="w-full py-12 border-b border-gray-200 bg-indigo-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">Why Choose Nixsoft?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseContent.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                {item.icon}
                <h3 className="text-xl font-bold text-indigo-800 ml-2">{item.title}</h3>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-800 font-medium">
            Choose Nixsoft to seamlessly modernize your infrastructure and confidently drive your digital transformation forward.
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
    

      {/* Service Sections - mapped from the content array */}
      {servicesContent.map((service, index) => (
        <ServiceSection
          key={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
          bulletPoints={service.bulletPoints}
          imagePosition={service.imagePosition as "left" | "right"}
          imageSrc={service.imageSrc}
        />
      ))}

      {/* Why Choose Nixsoft Section */}
      <WhyChooseSection />

      {/* Back to top button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;