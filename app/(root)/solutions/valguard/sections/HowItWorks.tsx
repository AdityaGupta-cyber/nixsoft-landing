"use client";
import { motion } from "framer-motion";
import { 
  Search,
  Shield,
  FileCheck,
  Bell,
  ArrowRight
} from "lucide-react";


const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "System Discovery",
      description: "Automatically identify and inventory all Linux systems and packages in your infrastructure",
      details: [
        "Automated system discovery",
        "Package inventory",
        "Configuration assessment"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Scanning",
      description: "Continuous vulnerability scanning and security assessment of your Linux environment",
      details: [
        "CVE detection",
        "Misconfigurations check",
        "Security baseline audit"
      ]
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Compliance Check",
      description: "Automated compliance monitoring against industry standards and custom policies",
      details: [
        "CIS benchmarks",
        "Custom policies",
        "Compliance reporting"
      ]
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Alert & Remediate",
      description: "Instant alerts and automated remediation for identified security issues",
      details: [
        "Real-time notifications",
        "Automated fixes",
        "Patch management"
      ]
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
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            How Nix-ValGuard Works
          </h2>
          <p className="text-xl text-gray-600">
            Continuous vulnerability assessment and compliance monitoring for your Linux infrastructure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg relative z-10 border border-gray-100 h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="bg-green-600 text-white p-3 rounded-lg inline-block mb-4 w-fit">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="h-8 w-8 text-green-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                See Nix-ValGuard in Action
              </h3>
              <p className="text-gray-600 mb-8">
                Watch how our platform secures your Linux infrastructure with continuous vulnerability assessment
              </p>
              <button 
                onClick={() => window.location.href = "/pricing"}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
              >
                Schedule a Demo
              </button>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
