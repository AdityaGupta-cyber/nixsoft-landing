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
  DollarSign, 
  ChevronUp, 
  Lightbulb 
} from 'lucide-react';

// Content configuration - easy to update when needed
const servicesContent = [
  {
    id: "ci-cd-pipeline",
    title: "CI/CD Pipeline Implementation",
    description: "Streamline software delivery with robust Continuous Integration (CI) and Continuous Delivery (CD) pipelines:",
    icon: <GitBranch className="w-8 h-8" />,
    bulletPoints: [
      "Customized CI/CD pipeline development tailored to your business and technical requirements.",
      "Accelerated development cycles, automated testing, and reliable deployments.",
      "Improved code quality, faster issue resolution, and enhanced developer productivity."
    ],
    imagePosition: "right",
    imageSrc: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "infrastructure-as-code",
    title: "Infrastructure as Code (IaC)",
    description: "Automate infrastructure management with scalable, repeatable, and error-free deployments:",
    icon: <Code className="w-8 h-8" />,
    bulletPoints: [
      "Expertise in IaC technologies including Terraform, Ansible, Chef, and Puppet.",
      "Infrastructure provisioning and management automation, significantly reducing manual overhead.",
      "Enhanced consistency, security, and compliance through standardized configurations."
    ],
    imagePosition: "left",
    imageSrc: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "kubernetes-container",
    title: "Kubernetes & Container Orchestration",
    description: "Simplify and scale your containerized applications seamlessly:",
    icon: <Container className="w-8 h-8" />,
    bulletPoints: [
      "Comprehensive Kubernetes cluster setup, configuration, and management services.",
      "Reliable container orchestration for enhanced availability, scalability, and resource optimization.",
      "Expert support for Kubernetes distributions such as OpenShift, EKS, AKS, and GKE."
    ],
    imagePosition: "right",
    imageSrc: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "monitoring-performance",
    title: "Monitoring & Performance Optimization",
    description: "Ensure optimal application performance and proactive infrastructure health management:",
    icon: <LineChart className="w-8 h-8" />,
    bulletPoints: [
      "Advanced monitoring using tools like Prometheus, Grafana, ELK, and Nagios.",
      "Real-time performance tracking and anomaly detection to prevent issues before they impact your users.",
      "Proactive resource management to ensure maximum efficiency and cost-effectiveness."
    ],
    imagePosition: "left",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "cloud-security",
    title: "Cloud Security & Compliance",
    description: "Protect your infrastructure and applications with enterprise-grade security solutions:",
    icon: <ShieldCheck className="w-8 h-8" />,
    bulletPoints: [
      "Comprehensive security assessments and implementation of industry best practices.",
      "Automated compliance monitoring and reporting for regulatory requirements.",
      "Data protection strategies and secure infrastructure design patterns."
    ],
    imagePosition: "right",
    imageSrc: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "devops-automation",
    title: "DevOps Workflow Automation",
    description: "Streamline development processes with end-to-end automation:",
    icon: <Workflow className="w-8 h-8" />,
    bulletPoints: [
      "Custom automation scripts and tools for repetitive development tasks.",
      "Integration of development, testing, and deployment workflows.",
      "Reduced manual intervention and human error in your software delivery pipeline."
    ],
    imagePosition: "left",
    imageSrc: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1000&auto=format&fit=crop"
  }
];

const whyChooseContent = [
  {
    icon: <Award className="w-6 h-6 text-indigo-600" />,
    title: "Expertise & Experience",
    description: "Proven proficiency in DevOps practices, automation, and cloud-native technologies."
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    title: "Customized Solutions",
    description: "Tailored DevOps strategies aligning perfectly with your business goals and IT environments."
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-600" />,
    title: "Accelerated Delivery",
    description: "Faster deployments, quicker time-to-market, and increased competitive advantage."
  },
  {
    icon: <DollarSign className="w-6 h-6 text-indigo-600" />,
    title: "Operational Efficiency",
    description: "Automation-driven practices that reduce manual effort, downtime, and risk."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-indigo-600" />,
    title: "Continuous Improvement",
    description: "Dedicated to refining and optimizing your IT processes for sustained performance growth."
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