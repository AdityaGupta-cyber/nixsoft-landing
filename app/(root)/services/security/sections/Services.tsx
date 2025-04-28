"use client";
import React from "react";
import { Shield, Search, Target, AlertTriangle,  RefreshCw, ChevronRight, ArrowUp } from "lucide-react";

// Define interfaces for your props
interface ServiceItem {
  name: string;
  description?: string;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  services: ServiceItem[] | string[];
  imagePosition?: "right" | "left";
  imageSrc?: string;
  icon?: React.ReactNode;
  index?: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  services,
  imagePosition = "right",
  imageSrc,
  icon,
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
              {icon && <div className="text-indigo-600 mr-3">{icon}</div>}
              <h2 className="text-3xl font-bold text-indigo-900">{title}</h2>
            </div>
            <p className="text-gray-700 mb-6">{description}</p>

            <div className="space-y-3 mb-8">
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
              <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 p-6">
            <img
              src={imageSrc || "/api/placeholder/600/400"}
              alt="Service illustration"
              className="rounded-lg shadow-md w-full object-cover h-64"
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
  icon: React.ReactNode;
}

const ServicesPage: React.FC = () => {
  // Data for all service sections based on the new content
  const servicesData: ServiceData[] = [
    {
      title: "Vulnerability Assessment",
      description:
        "A vulnerability assessment helps your organization identify potential weaknesses in its IT infrastructure before cybercriminals can exploit them. Nixsoft Technologies provides comprehensive vulnerability assessment services to protect your systems.",
      services: [
        "Network Scanning & Assessment of vulnerabilities and misconfigurations",
        "Risk Prioritization based on severity, exploitability, and business impact",
        "Comprehensive Reports with clear remediation recommendations",
        "Continuous Monitoring for newly emerging threats",
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1610986603166-f78428624e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <Search size={28} />,
    },
    {
      title: "Penetration Testing (Pen Testing)",
      description:
        "Penetration testing simulates an actual cyberattack to identify how vulnerable your organization's systems and networks are to exploitation. Our expert team conducts comprehensive penetration tests to uncover security weaknesses.",
      services: [
        "Scoping & Planning based on your specific goals and assets",
        "External & Internal Penetration Testing of systems and networks",
        "Social Engineering simulations to test human security awareness",
        "Exploit Vulnerabilities to demonstrate real attack impacts",
        "Reporting & Recommendations with actionable defense improvements",
        "Follow-up & Retesting after remediation implementation",
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      icon: <Target size={28} />,
    },
    {
      title: "Comprehensive Cybersecurity Strategy",
      description:
        "Beyond testing, we help organizations build and implement comprehensive cybersecurity strategies that address all aspects of security, from human factors to technical controls and regulatory compliance.",
      services: [
        "Security Awareness Training for staff and leadership",
        "Incident Response Planning and preparation",
        "Compliance and Regulatory Support for GDPR, HIPAA, PCI-DSS",
        "Security Tool Recommendations tailored to your needs",
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <AlertTriangle size={28} />,
    },
    {
      title: "Proactive Measures & Continuous Improvement",
      description:
        "Cybersecurity requires ongoing vigilance and improvement. Our continuous security services help you stay ahead of threats through proactive measures, routine audits, and continuous improvement practices.",
      services: [
        "Patch Management to fix known vulnerabilities",
        "Red Teaming and Threat Simulation beyond standard pen testing",
        "Security Audits to evaluate effectiveness of security measures",
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <RefreshCw size={28} />,
    },
  ];

  const introText = "Nixsoft Technologies can assist its clients with cybersecurity solutions like Vulnerability Assessments and Penetration Testing through several strategic approaches. By offering a combination of vulnerability assessments and penetration testing along with continuous support and education, Nixsoft Technologies can help its clients build a strong defense against cyber threats, reduce risk, and maintain ongoing security vigilance.";

  return (
    <div className="flex flex-col w-full">
      {/* Introduction Section */}
      <div className="w-full py-12 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <Shield size={36} className="text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-indigo-900">Cybersecurity Solutions</h1>
          </div>
          <p className="text-gray-700 text-center max-w-4xl mx-auto">{introText}</p>
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
          icon={service.icon}
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
          <ArrowUp size={24} />
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;