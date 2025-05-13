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
  
  ArrowRight
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  imageUrl, 
  link,
  index 
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  link: string;
  index: number;
}) => {
  const router = useRouter();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
      onClick={() => router.push(link)}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={imageUrl} 
          alt={title}
          width={1050}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          priority={index < 4}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              {icon}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow z-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">{description}</p>
        <button 
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium mt-2 group/btn"
          onClick={(e) => {
            e.stopPropagation();
            router.push(link);
          }}
        >
          <span>Explore More</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
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
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:16px_16px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            >
              Comprehensive IT solutions designed to transform and optimize your business operations
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
              link={service.link}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="relative mt-24 mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl" />
        <div className="relative container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to transform your IT infrastructure?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Contact our team of experts to discuss your specific requirements and how NixSoft can help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Pricing
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white dark:bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};



export default ServicesPage;