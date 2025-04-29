"use client";
import React from "react";
import { 
  Code, 
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
              src={imageSrc}
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
  // Data for all service sections with Unsplash images
  const servicesData: ServiceData[] = [
    {
      title: "Discovery & Requirement Analysis",
      description:
        "At Nixsoft Technologies, we begin every project by meeting with stakeholders to deeply understand your business goals, user pain points, and workflow requirements. This crucial first step ensures we build applications that truly solve real problems.",
      services: [
        "Understand Business Needs: Meet with stakeholders to deeply understand business goals, user pain points, and workflow requirements",
        "Define Scope & Features: Help the client define what features and functionalities are essential vs. optional",
        "Competitive Benchmarking: Analyze market trends and competitor offerings to help shape the product vision",
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Search size={28} />,
    },
    {
      title: "Design & Prototyping",
      description:
        "We create intuitive, visually appealing designs that prioritize user experience while maintaining your brand identity. Our prototyping process lets you experience the application before development begins, saving time and resources.",
      services: [
        "UX/UI Design: Craft user-friendly, responsive designs that align with the client's brand and ensure a great user experience",
        "Wireframes & Prototypes: Create clickable prototypes to visualize how the app will function and gather early feedback",
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <PenTool size={28} />,
    },
    {
      title: "Development",
      description:
        "Our development team builds custom solutions using the most appropriate technologies for your specific needs. We follow agile methodologies to ensure flexibility and transparency throughout the development process.",
      services: [
        "Custom-Built Architecture: Develop a scalable, maintainable architecture tailored to the client's current and future needs",
        "Agile Development: Use iterative development to keep the client involved and able to pivot as needed",
        "Front-End & Back-End Development: Build both the user-facing side and the underlying logic/infrastructure",
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Code size={28} />,
    },
    {
      title: "Integration & Data Migration",
      description:
        "Nixsoft Technologies ensures your new application works seamlessly with your existing systems and data. We handle the complex process of integrating with third-party services and migrating data securely.",
      services: [
        "System Integration: Connect the custom app to existing CRMs, ERPs, payment gateways, or third-party APIs",
        "Data Migration: Safely and efficiently transfer existing data into the new application without loss or corruption",
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Server size={28} />,
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "We implement comprehensive testing strategies to ensure your application is robust, secure, and performs well under real-world conditions. Our QA process identifies potential issues before they impact your users.",
      services: [
        "Functional Testing: Ensure every feature works as expected",
        "Performance & Load Testing: Make sure the app can handle real-world traffic and usage",
        "Security Testing: Identify vulnerabilities and ensure data protection",
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <FileCode size={28} />,
    },
    {
      title: "Deployment & Support",
      description:
        "Nixsoft handles the deployment process with minimal disruption to your operations. We provide comprehensive training and ongoing support to ensure your team can effectively use and manage the new application.",
      services: [
        "Deployment: Roll out the application to production environments with minimal disruption",
        "Training: Educate client teams on how to use/administer the app",
        "Ongoing Support & Maintenance: Fix bugs, release updates, and scale features as the business evolves",
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Rocket size={28} />,
    },
    {
      title: "Post-Launch Optimization",
      description:
        "We help you monitor application performance and user behavior after launch, using data-driven insights to continuously improve your application as user needs and business requirements evolve.",
      services: [
        "Analytics Integration: Track user behavior and key metrics",
        "Continuous Improvement: Gather feedback and continuously update the app based on user input and business changes",
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <TrendingUp size={28} />,
    },
    {
      title: "Bonus Perks from Nixsoft Technologies",
      description:
        "Beyond our core development services, Nixsoft Technologies brings additional value to every project through our technical expertise, strategic guidance, risk management approach, and commitment to cost efficiency.",
      services: [
        "Technical Expertise: In-depth knowledge of programming languages, frameworks, and DevOps practices",
        "Strategic Guidance: Advising on the best tech stack or whether to build native, hybrid, or web apps",
        "Risk Mitigation: Anticipating and addressing risks early in the process",
        "Cost Efficiency: Delivering value without blowing the budget",
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <RefreshCw size={28} />,
    },
  ];

  const introText = "Nixsoft Technologies helps organizations transform their business challenges into powerful, scalable software solutions tailored specifically to their unique requirements and workflow. Our custom application development services cover the entire software development lifecycle, from initial concept to deployment and beyond, ensuring you receive high-quality solutions that drive business growth and efficiency.";

  return (
    <div className="flex flex-col w-full">
      {/* Introduction Section */}
      <div className="w-full py-12 bg-indigo-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <Code size={36} className="text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-indigo-900">Custom Application Development</h1>
          </div>
          <p className="text-gray-700 text-center max-w-4xl mx-auto">{introText}</p>
        </div>
      </div>

      {/* Hero image section */}
      <div className="w-full py-8">
        <div className="container mx-auto px-6">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Custom Application Development Team" 
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
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

      {/* CTA Section */}
      <div className="w-full py-16 bg-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your business with custom software?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">Let's discuss how Nixsoft Technologies can help you build a custom application that meets your unique business needs.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>

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