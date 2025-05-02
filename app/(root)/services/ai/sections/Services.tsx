"use client";
import React from "react";
import { 
  LineChart, 
  Bot, 
  Search, 
  AreaChart, 
  Shield, 
  Ticket, 
  Database, 
  GitMerge, 
  ChevronRight, 
  ArrowUp 
} from "lucide-react";

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
  // Data for all service sections based on the new AIOps content
  const servicesData: ServiceData[] = [
    {
      title: "Monitoring & Observability",
      description:
        "Nixsoft Technologies sets up intelligent monitoring tools that use AI to detect anomalies, patterns, and root causes in real time, enabling predictive analytics to foresee issues before they impact operations.",
      services: [
        "Advanced anomaly detection using machine learning algorithms",
        "Real-time pattern recognition across infrastructure metrics",
        "Predictive analytics to anticipate system failures and bottlenecks",
        "Comprehensive dashboards for enhanced visibility into IT operations",
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <LineChart size={28} />,
    },
    {
      title: "Automation of Routine Tasks",
      description:
        "We automate repetitive tasks such as system health checks, log analysis, patch management, and incident responses. Our AI-powered bots and workflows reduce human intervention for L1/L2 support tasks, freeing up IT staff to focus on strategic initiatives.",
      services: [
        "Intelligent workflow automation for repetitive IT processes",
        "AI-powered bots for L1/L2 support ticket resolution",
        "Automated patch management and system updates",
        "Self-healing systems that resolve common issues automatically",
        "Significant reduction in mean time to resolution (MTTR)",
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      icon: <Bot size={28} />,
    },
    {
      title: "Root Cause Analysis",
      description:
        "Our solutions apply machine learning to correlate data from multiple sources (logs, metrics, traces) to identify the root cause of issues faster. We reduce 'alert fatigue' by filtering noise and clustering related alerts, which is critical in hybrid/multi-cloud environments.",
      services: [
        "Multi-source data correlation for comprehensive analysis",
        "Intelligent alert clustering to reduce noise and fatigue",
        "Automated log analysis to pinpoint failure points quickly",
        "Visualization of problem propagation across systems",
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <Search size={28} />,
    },
    {
      title: "Capacity Planning & Optimization",
      description:
        "Nixsoft Technologies leverages AI to analyze trends in resource usage and predict future needs. We suggest cost optimizations such as rightsizing cloud resources and shutting down underused VMs, helping avoid over-provisioning or sudden capacity shortages.",
      services: [
        "AI-driven resource utilization trend analysis",
        "Predictive capacity forecasting based on historical patterns",
        "Automated recommendations for cloud resource optimization",
        "Cost reduction through intelligent resource allocation",
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <AreaChart size={28} />,
    },
    {
      title: "Security Enhancements",
      description:
        "We integrate with AI-driven security tools for threat detection and behavioral analysis. Our AIOps solutions identify security anomalies hidden in operational data, such as brute force attempts and unusual login patterns.",
      services: [
        "AI-powered behavioral analysis for threat detection",
        "Anomaly detection for identifying potential security breaches",
        "Automated security incident response workflows",
        "Integration with existing security infrastructure",
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      icon: <Shield size={28} />,
    },
    {
      title: "Incident Management",
      description:
        "Nixsoft implements AI for smart ticketing systems that categorize, prioritize, and route tickets intelligently. We integrate with ITSM tools like ServiceNow and Jira for automated incident resolution workflows.",
      services: [
        "Intelligent ticket classification and routing",
        "Priority-based handling of incidents based on business impact",
        "Automated escalation and notification workflows",
        "Integration with popular ITSM platforms",
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <Ticket size={28} />,
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "We help clients leverage operational data for strategic insights, such as identifying bottlenecks in application performance or infrastructure, enabling more informed business decisions based on real-time operational intelligence.",
      services: [
        "Business intelligence dashboards focused on IT operations",
        "Performance analytics to identify system bottlenecks",
        "Trend analysis for proactive capacity management",
        "Executive reporting on IT service performance metrics",
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <Database size={28} />,
    },
    {
      title: "Integration with DevOps & CI/CD",
      description:
        "Nixsoft Technologies uses AIOps tools to monitor application releases, identify regressions, and ensure reliability in continuous deployments, bridging the gap between development and operations for more effective delivery pipelines.",
      services: [
        "Automated quality gates for CI/CD pipelines",
        "Performance regression detection during deployments",
        "Rollback automation based on anomaly detection",
        "Feedback loops between operations and development teams",
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <GitMerge size={28} />,
    },
  ];

  const introText = "Nixsoft Technologies helps organizations transform their IT operations through AI-powered solutions (AIOps). By combining big data analytics, machine learning, and automation, we enhance monitoring capabilities, streamline routine tasks, and enable proactive problem-solving. Our AIOps services help clients reduce operational costs, improve system reliability, and accelerate digital transformation initiatives.";

  return (
    <div className="flex flex-col w-full">
      {/* Introduction Section */}
      <div className="w-full py-12 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <LineChart size={36} className="text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-indigo-900">AI-Powered IT Operations (AIOps)</h1>
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