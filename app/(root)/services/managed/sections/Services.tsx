"use client";
import React from "react";
import { Shield, Database, Lock, Globe, Clock, AlertCircle } from "lucide-react";
import Image from "next/image";

// Define interfaces for your props
interface ServiceItem {
  name: string;
  icon?: React.ReactNode;
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
                  <div className="text-indigo-500 mr-3 mt-1">
                    {service.icon}
                  </div>
                  <span className="text-gray-700">{service.name}</span>
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
            <Image
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

const ServicesPage: React.FC = () => {
  // Updated data for all service sections based on the new content
  const servicesData = [
    {
      title: "24/7 IT Support & Monitoring",
      description:
        "Nixsoft Technologies provides comprehensive 24/7 IT support and monitoring that ensures continuous assistance and proactive management for all your critical systems.",
      services: [
        {
          name: "Tiered Support System (Tier 1, 2, 3) with dedicated 24/7 teams",
          icon: <Clock size={20} />
        },
        {
          name: "Proactive monitoring with real-time alerting and automation",
          icon: <AlertCircle size={20} />
        },
        {
          name: "Multiple communication channels: Phone, Email, Live Chat, Ticketing",
          icon: <Globe size={20} />
        },
        {
          name: "Regular system checks and security monitoring",
          icon: <Shield size={20} />
        },
        {
          name: "Knowledge base access and detailed incident logging",
          icon: <Database size={20} />
        }
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Preventive IT Management",
      description:
        "Our preventive maintenance services help you avoid costly downtime and ensure your systems are always performing at their best with scheduled maintenance and security scanning.",
      services: [
        {
          name: "Regular system checks and diagnostics",
          icon: <AlertCircle size={20} />
        },
        {
          name: "Comprehensive disaster recovery planning",
          icon: <Shield size={20} />
        },
        {
          name: "Advanced security monitoring and threat detection",
          icon: <Lock size={20} />
        },
        {
          name: "Scheduled maintenance and updates",
          icon: <Clock size={20} />
        },
        {
          name: "Performance optimization and tuning",
          icon: <Database size={20} />
        }
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Scalable Support Solutions",
      description:
        "Our cloud-based support scales with your business needs, providing flexible resources that can be rapidly deployed during high-demand periods or critical incidents.",
      services: [
        {
          name: "Cloud-based support infrastructure",
          icon: <Globe size={20} />
        },
        {
          name: "On-demand resource availability",
          icon: <Database size={20} />
        },
        {
          name: "Elastic capacity for peak demand periods",
          icon: <Clock size={20} />
        },
        {
          name: "Remote access and management capabilities",
          icon: <Shield size={20} />
        },
        {
          name: "Cost-effective scaling options",
          icon: <AlertCircle size={20} />
        }
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "24/7 Help Desk Services",
      description:
        "Our round-the-clock help desk ensures your issues are addressed immediately with standardized procedures and clear escalation protocols for urgent matters.",
      services: [
        {
          name: "Standard Operating Procedures for common issues",
          icon: <Database size={20} />
        },
        {
          name: "Clear escalation protocols for urgent matters",
          icon: <AlertCircle size={20} />
        },
        {
          name: "Advanced ticket management and tracking",
          icon: <Clock size={20} />
        },
        {
          name: "Multi-channel support access",
          icon: <Globe size={20} />
        },
        {
          name: "Continuous service improvement processes",
          icon: <Shield size={20} />
        }
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Professional Tools & Partnerships",
      description:
        "We leverage industry-leading tools and strategic partnerships to deliver comprehensive monitoring, management, and security services across your entire IT ecosystem.",
      services: [
        {
          name: "Remote Monitoring & Management (RMM) Tools",
          icon: <Globe size={20} />
        },
        {
          name: "IT Service Management (ITSM) Software",
          icon: <Database size={20} />
        },
        {
          name: "Advanced ticketing and collaboration platforms",
          icon: <Clock size={20} />
        },
        {
          name: "Enterprise-grade security solutions",
          icon: <Shield size={20} />
        },
        {
          name: "Specialized vendor partnerships",
          icon: <AlertCircle size={20} />
        }
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {servicesData.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          description={service.description}
          services={service.services}
          imagePosition={service.imagePosition as "left" | "right"}
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