"use client";
import React from "react";
import { 
  GitBranch, 
  Code, 
  Container, 
  LineChart, 
  ShieldCheck, 
  Workflow, 
  Award, 
  Users,
  Clock,
  ChevronUp,
  Lightbulb,
  Laptop,
  Map,
  FileCode,
  DollarSign,
  Briefcase,
  Compass,
  PiggyBank,
  Sliders,
  Server,
  Cloud,
  Lock,
  Database
} from 'lucide-react';

// Content configuration - easy to update when needed
const servicesContent = [
  {
    id: "server-network-administration",
    title: "Server & Network Administration",
    description: "Ensure optimal performance, availability, and security of your servers and network infrastructure:",
    icon: <Server className="w-8 h-8" />,
    bulletPoints: [
      "Comprehensive management and proactive monitoring of server environments across Linux, Windows, and UNIX platforms.",
      "Effective network infrastructure design, deployment, and management to minimize downtime and maximize reliability.",
      "Regular performance tuning, updates, and patches to ensure continuous, secure, and efficient operations."
    ],
    imagePosition: "right",
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "cloud-onprem-infrastructure",
    title: "Cloud & On-Prem Infrastructure",
    description: "Optimize your hybrid IT environment with seamless integration and effective management:",
    icon: <Cloud className="w-8 h-8" />,
    bulletPoints: [
      "Efficient management of hybrid cloud setups, integrating cloud and on-premises infrastructure flawlessly.",
      "Scalable solutions tailored to your specific operational demands, offering flexibility and cost-effectiveness.",
      "Comprehensive cloud orchestration and on-premises infrastructure management, ensuring optimal resource utilization."
    ],
    imagePosition: "left",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "it-security-compliance",
    title: "IT Security & Compliance",
    description: "Protect your critical infrastructure and comply with evolving security standards:",
    icon: <Lock className="w-8 h-8" />,
    bulletPoints: [
      "Robust IT security implementations and continuous threat monitoring to safeguard your data and systems.",
      "Regular compliance checks and audits aligned with global standards such as CIS, NIST, ISO, and GDPR.",
      "Customized policy development and implementation, enhancing overall IT governance and compliance posture."
    ],
    imagePosition: "right",
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "data-backup-recovery",
    title: "Data Backup & Disaster Recovery",
    description: "Minimize downtime and secure critical business data through proactive backup and recovery solutions:",
    icon: <Database className="w-8 h-8" />,
    bulletPoints: [
      "Reliable, automated, and secure data backup solutions tailored for cloud, hybrid, and on-premises environments.",
      "Robust disaster recovery planning and management to rapidly restore business continuity in the event of disruptions.",
      "Regular testing and validation of backup and recovery strategies, ensuring swift and effective responses."
    ],
    imagePosition: "left",
    imageSrc: "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const whyChooseContent = [
  {
    icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
    title: "Proven Expertise",
    description: "Highly skilled professionals experienced in managing complex IT infrastructure across diverse industries."
  },
  {
    icon: <Sliders className="w-6 h-6 text-indigo-600" />,
    title: "Customized Solutions",
    description: "Infrastructure management tailored specifically to meet your unique business requirements and objectives."
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-600" />,
    title: "24/7 Proactive Support",
    description: "Continuous monitoring, rapid issue detection, and prompt response to maintain maximum uptime."
  },
  {
    icon: <DollarSign className="w-6 h-6 text-indigo-600" />,
    title: "Cost-Efficient Management",
    description: "Effective infrastructure strategies designed to reduce operational expenses while enhancing performance."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    title: "Reliable & Secure",
    description: "Strong emphasis on security and compliance, ensuring your business is protected and resilient against evolving threats."
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
            Choose Nixsoft Technologies to elevate your infrastructure reliability, security, and operational excellence.
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