"use client";
import { motion } from "framer-motion";

import {
  ActivitySquare,
  Cpu,
  Network,
  GitBranch,
  Database,
  BarChart3
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <ActivitySquare className="h-6 w-6" />,
      title: "Application Performance Monitoring",
      description: "Real-time insights into application behavior, performance metrics, and user experience."
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Network Monitoring",
      description: "Monitor network traffic, latency, and connectivity with AI-powered analytics."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Infrastructure Monitoring",
      description: "Track server health, resource utilization, and capacity planning with predictive insights."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Monitoring",
      description: "Monitor database performance, query optimization, and resource consumption."
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Distributed Tracing",
      description: "End-to-end visibility into distributed systems and microservices architecture."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Metrics & Analytics",
      description: "Advanced analytics and visualization for better decision-making."
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Monitoring Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Our AI-powered platform provides end-to-end visibility across your entire IT infrastructure
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-indigo-600 bg-indigo-50 p-3 rounded-lg inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >          <button 
            onClick={() => window.location.href = "/pricing"}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Explore All Features
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
