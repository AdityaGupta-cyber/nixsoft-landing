"use client";
import React from "react";

// Define interfaces for your props
interface ServiceItem {
  name: string;
  description?: string;
  subItems?: string[];
}

interface ServiceSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  services: ServiceItem[];
  imagePosition?: "right" | "left";
  imageSrc?: string;
  index?: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  icon,
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
            <div className="flex items-center mb-4">
              <span className="text-3xl text-indigo-500 mr-3">{icon}</span>
              <h2 className="text-3xl font-bold text-indigo-900">{title}</h2>
            </div>
            <p className="text-gray-700 mb-6 font-semibold">{description}</p>

            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <div className="flex items-start">
                    <span className="text-indigo-500 mr-2">—</span>
                    <span className="font-medium">{service.name}</span>
                  </div>
                  {service.description && (
                    <p className="ml-6 text-gray-600 text-sm">
                      {service.description}
                    </p>
                  )}
                  {service.subItems && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {service.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          <span className="text-gray-700">{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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

const ServicesPage: React.FC = () => {
  // Icons for each section
  const icons = {
    magnifyingGlass: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
      </svg>
    ),
    cloud: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clipRule="evenodd" />
      </svg>
    ),
    desktop: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v9.75c0 .83.67 1.5 1.5 1.5h13.5c.83 0 1.5-.67 1.5-1.5V5.25c0-.83-.67-1.5-1.5-1.5H5.25c-.83 0-1.5.67-1.5 1.5z" clipRule="evenodd" />
      </svg>
    ),
    lock: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
      </svg>
    ),
    chart: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
      </svg>
    ),
    handshake: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.384 1.029.768 1.53 1.152a.75.75 0 11-.944 1.17c-1.142-.918-2.3-1.719-3.338-2.22v.471a1.125 1.125 0 11-2.25 0V1.875zM5.85 9.035a.75.75 0 00-.05 1.06l5.5 6.25a.75.75 0 001.11.05l8.5-8.5a.75.75 0 10-1.06-1.06l-7.97 7.97-4.97-5.65a.75.75 0 00-1.06-.05z" clipRule="evenodd" />
      </svg>
    ),
  };

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <div className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Cloud & Virtualization: AWS, Azure, & Google Cloud Solutions</h1>
          <p className="text-xl max-w-3xl">
            <strong>Nixsoft Technologies</strong> helps its clients with <strong>Cloud & Virtualization</strong> by understanding their current IT environment, business goals, and pain points, then aligning the right technologies and strategies to optimize performance, scalability, and cost-efficiency.
          </p>
        </div>
      </div>

      {/* 1. Assessment & Strategy */}
      <ServiceSection
        title="Assessment & Strategy"
        description="Understand their current infrastructure and business needs."
        icon={icons.magnifyingGlass}
        services={[
          {
            name: "IT Infrastructure Audit",
            description: "Evaluate on-prem systems, applications, storage, and network."
          },
          {
            name: "Workload Analysis",
            description: "Identify which workloads are suitable for cloud migration."
          },
          {
            name: "Business Goals Alignment",
            description: "Understand goals (e.g., scalability, cost savings, disaster recovery)."
          },
          {
            name: "Cloud Readiness Assessment",
            description: "Identify gaps in skills, tools, and processes."
          }
        ]}
        imagePosition="right"
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 2. Cloud Services Guidance */}
      <ServiceSection
        title="Cloud Services Guidance"
        description="Help choose and implement the right cloud solutions."
        icon={icons.cloud}
        services={[
          {
            name: "Cloud Models:",
            subItems: [
              "Public Cloud (e.g., AWS, Azure, GCP)",
              "Private Cloud (e.g., VMware vSphere, OpenStack)",
              "Hybrid Cloud (best of both)"
            ]
          },
          {
            name: "Cloud Services:",
            subItems: [
              "IaaS (Infrastructure as a Service)",
              "PaaS (Platform as a Service)",
              "SaaS (Software as a Service)"
            ]
          },
          {
            name: "Migration Planning:",
            subItems: [
              "Lift & Shift vs. Refactoring vs. Replatforming"
            ]
          }
        ]}
        imagePosition="left"
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 3. Virtualization Services */}
      <ServiceSection
        title="Virtualization Services"
        description="Improve resource utilization, agility, and manageability."
        icon={icons.desktop}
        services={[
          {
            name: "Server Virtualization:",
            description: "Using Hypervisors (VMware, Hyper-V, KVM)"
          },
          {
            name: "Desktop Virtualization:",
            description: "VDI solutions (Citrix, VMware Horizon)"
          },
          {
            name: "Storage & Network Virtualization"
          },
          {
            name: "Automation & Orchestration:",
            description: "Tools like vRealize, Terraform, Ansible"
          }
        ]}
        imagePosition="right"
        imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
      />

      {/* 4. Security & Compliance */}
      <ServiceSection
        title="Security & Compliance"
        description="Ensure a secure and compliant environment."
        icon={icons.lock}
        services={[
          {
            name: "Data Protection:",
            description: "Backup, DR, and encryption"
          },
          {
            name: "Access Control:",
            description: "IAM, Zero Trust models"
          },
          {
            name: "Compliance:",
            description: "HIPAA, GDPR, ISO, etc."
          },
          {
            name: "Cloud-native Security:",
            description: "Security groups, WAFs, logging/monitoring"
          }
        ]}
        imagePosition="left"
        imageSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
      />

      {/* 5. Optimization & Cost Management */}
      <ServiceSection
        title="Optimization & Cost Management"
        description="Optimize performance and control costs."
        icon={icons.chart}
        services={[
          {
            name: "Right-Sizing Resources:",
            description: "Identify under/overutilized resources"
          },
          {
            name: "Cost Management Tools:",
            description: "AWS Cost Explorer, Azure Cost Management"
          },
          {
            name: "Automation:",
            description: "Auto-scaling, scheduled resource shutdowns"
          },
          {
            name: "Performance Monitoring:",
            description: "CloudWatch, Azure Monitor, Datadog"
          }
        ]}
        imagePosition="right"
        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 6. Managed Services & Support */}
      <ServiceSection
        title="Managed Services & Support"
        description="Provide ongoing support and improvements."
        icon={icons.handshake}
        services={[
          {
            name: "24/7 Monitoring and Incident Response"
          },
          {
            name: "Patching, Updates, and Upgrades"
          },
          {
            name: "Service Desk & Technical Support"
          },
          {
            name: "Training & Enablement for Client Teams"
          }
        ]}
        imagePosition="left"
        imageSrc="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1374&auto=format&fit=crop"
      />

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