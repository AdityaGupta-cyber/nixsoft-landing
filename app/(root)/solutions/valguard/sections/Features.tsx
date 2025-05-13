"use client";
import { motion } from "framer-motion";
import { 
  Shield, 
  FileCheck,
  Terminal,
  AlertTriangle,
  RefreshCw,
  Archive,
  BarChart2,
  Settings
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Linux-Native Scanning",
      description: "Purpose-built for Linux systems with deep integration into package managers and system services."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Vulnerability Detection",
      description: "Real-time identification of CVEs, security patches, and system misconfigurations."
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Compliance Monitoring",
      description: "Automated checks against CIS benchmarks, HIPAA, PCI DSS, and custom compliance frameworks."
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Instant Alerts",
      description: "Real-time notifications for security issues with severity-based prioritization."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Continuous Assessment",
      description: "24/7 monitoring with automated scanning and immediate vulnerability detection."
    },
    {
      icon: <Archive className="h-6 w-6" />,
      title: "Patch Management",
      description: "Automated patch recommendations and integration with deployment workflows."
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Security Analytics",
      description: "Comprehensive reporting and analytics dashboard for security trends and compliance status."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Custom Policies",
      description: "Define and enforce custom security policies and compliance requirements."
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Complete Linux Security Platform
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive vulnerability assessment and compliance monitoring for your Linux infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-green-600 bg-green-50 p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <button 
            onClick={() => window.location.href = "/about-us"}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Learn More About Our Technology
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
