"use client";

import React from "react";
import { 
  Cloud, 
  Settings, 
  Shield, 
  Server, 
  Monitor, 
  Brain, 
  Code, 
  Briefcase,
  ChevronRight
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  imageUrl, 
  link 
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  link: string;
}) => {
  const router = useRouter();
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
      onClick={() => router.push(link)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-navy-900 bg-opacity-30"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <div className="p-2 rounded-full bg-navy-100 mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-navy-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <button 
          className="flex items-center text-blue-600 font-medium mt-2 hover:text-blue-800 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            router.push(link);
          }}
        >
          Explore More <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Cloud & Virtualization",
      description: "Comprehensive cloud solutions using AWS, Azure, and Google Cloud. We design, implement, and manage scalable cloud infrastructures tailored to your business needs.",
      icon: <Cloud className="h-6 w-6 text-blue-600" />,
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      link: "/services/cloud"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline your development processes with our CI/CD pipeline implementation, container orchestration, and infrastructure as code solutions.",
      icon: <Settings className="h-6 w-6 text-blue-600" />,
      imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      link: "/services/devops"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with our comprehensive security services including vulnerability assessments, penetration testing, and security compliance.",
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      link: "/services/security"
    },
    {
      title: "IT Infrastructure Management",
      description: "Optimize your IT infrastructure with our server and network administration services, ensuring reliability, performance, and scalability.",
      icon: <Server className="h-6 w-6 text-blue-600" />,
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      link: "/services/it-management"
    },
    {
      title: "Managed Services",
      description: "Get 24/7 IT support and monitoring for your critical systems. Our proactive approach ensures minimal downtime and maximum productivity.",
      icon: <Monitor className="h-6 w-6 text-blue-600" />,
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      link: "/services/managed"
    },
    {
      title: "AI & Analytics",
      description: "Leverage the power of AI-powered IT operations and data analytics to gain insights, automate processes, and drive business decisions.",
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      link: "/services/ai"
    },
    {
      title: "Software Development",
      description: "Custom application development tailored to your business requirements using modern technologies and best practices.",
      icon: <Code className="h-6 w-6 text-blue-600" />,
      imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      link: "/services/software"
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic digital transformation consulting to help your business navigate technological challenges and opportunities.",
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      link: "/services/it-consulting"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-navy-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Comprehensive IT solutions designed to transform and optimize your business operations
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
              link={service.link}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-navy-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your IT infrastructure?</h2>
            <p className="text-gray-300 mb-8">
              Contact our team of experts to discuss your specific requirements and how NixSoft can help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors">
                Get Pricing
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-6 py-3 rounded-md transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ServicesPage;