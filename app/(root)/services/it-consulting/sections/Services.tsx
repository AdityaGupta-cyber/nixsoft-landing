"use client";
import React from "react";
import { 
  Laptop, 
  Map, 
  FileCode, 
  DollarSign,
  ShieldCheck,
  Briefcase,
  Sliders,
  Compass,
  PiggyBank,
  ChevronUp
} from 'lucide-react';
import Image from 'next/image';

// Content configuration - easy to update when needed
const servicesContent = [
  {
    id: "digital-transformation",
    title: "Digital Transformation Consulting",
    description: "Empower your organization with cutting-edge digital capabilities:",
    icon: <Laptop className="w-8 h-8" />,
    bulletPoints: [
      "Comprehensive digital transformation strategies aligned with your business vision.",
      "Process reengineering, automation, and technology enablement to boost agility and innovation.",
      "Change management support to ensure smooth organizational transition and adoption."
    ],
    imagePosition: "right",
    imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "technology-roadmap",
    title: "Technology Roadmap Planning",
    description: "Build a clear, actionable path toward technology excellence:",
    icon: <Map className="w-8 h-8" />,
    bulletPoints: [
      "Detailed assessment of current infrastructure, applications, and business goals.",
      "Creation of phased, scalable technology roadmaps to support long-term growth.",
      "Strategic alignment of IT investments with evolving business needs and market dynamics."
    ],
    imagePosition: "left",
    imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "it-governance",
    title: "IT Governance & Compliance Advisory",
    description: "Strengthen accountability and ensure compliance across IT operations:",
    icon: <FileCode className="w-8 h-8" />,
    bulletPoints: [
      "Frameworks and policy design to improve IT governance and regulatory adherence.",
      "Risk management strategies aligned with ISO, NIST, GDPR, and other global standards.",
      "Audit support and continuous compliance monitoring for enterprise-grade assurance."
    ],
    imagePosition: "right",
    imageSrc: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "cost-optimization",
    title: "Cost Optimization & Vendor Management",
    description: "Maximize ROI and streamline IT expenditures:",
    icon: <DollarSign className="w-8 h-8" />,
    bulletPoints: [
      "Strategic cost analysis to identify savings opportunities across infrastructure and services.",
      "Vendor evaluation, negotiation, and management to ensure value-driven partnerships.",
      "Ongoing assessment of technology spend to eliminate waste and improve efficiency."
    ],
    imagePosition: "left",
    imageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
  }
];

const whyChooseContent = [
  {
    icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
    title: "Strategic Insight",
    description: "Deep domain knowledge combined with business-oriented thinking to guide IT decisions."
  },
  {
    icon: <Sliders className="w-6 h-6 text-indigo-600" />,
    title: "Tailored Consulting",
    description: "Customized strategies that align with your organization's goals, structure, and market."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    title: "Proven Frameworks",
    description: "Best-practice approaches rooted in global standards and real-world success."
  },
  {
    icon: <Compass className="w-6 h-6 text-indigo-600" />,
    title: "End-to-End Guidance",
    description: "From advisory to execution, we walk with you throughout your transformation journey."
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-indigo-600" />,
    title: "Cost-Efficient Outcomes",
    description: "Results-driven consulting focused on long-term value, savings, and operational excellence."
  }
];

// Define interfaces for your props
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
            <Image src={imageSrc || "/api/placeholder/600/400"} alt={title} width={400} height={300} className="w-full h-full object-cover" />
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="bg-indigo-100 p-2 rounded-full">{item.icon}</div>
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
      {/* Service Sections - mapped from the content array */}
      {servicesContent.map((service) => (
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