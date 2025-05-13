"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Brain,
  Zap,
  Bell,
  TrendingUp,
  Settings,
  Share2
} from "lucide-react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Anomaly Detection",
      description: "AI-powered detection of unusual patterns and potential issues before they impact your systems.",
      image: "/aiops-anomaly.jpg"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automated Root Cause Analysis",
      description: "Quickly identify the source of problems with intelligent correlation and analysis.",
      image: "/aiops-analysis.jpg"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Smart Alerting",
      description: "Reduce alert fatigue with AI-filtered, contextual notifications that matter.",
      image: "/aiops-alerts.jpg"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "Forecast potential issues and capacity needs before they become critical.",
      image: "/aiops-analytics.jpg"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Automated Remediation",
      description: "Automate responses to common issues with predefined workflows and playbooks.",
      image: "/aiops-automation.jpg"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Integration Hub",
      description: "Connect with your existing tools and workflows for seamless operations.",
      image: "/aiops-integration.jpg"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Intelligent Features for Modern IT Operations
          </h2>
          <p className="text-xl text-gray-600">
            Harness the power of artificial intelligence to transform your IT monitoring and operations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl cursor-pointer transition-all ${
                  activeFeature === index 
                    ? "bg-indigo-600 text-white" 
                    : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`${
                    activeFeature === index 
                      ? "text-white" 
                      : "text-indigo-600"
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className={`${
                      activeFeature === index 
                        ? "text-indigo-100" 
                        : "text-gray-600"
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px] bg-gray-900 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20" />
            <div className="absolute inset-0 p-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4">
                  {/* Mock visualization content */}
                  <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg animate-pulse" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/5 rounded-lg" />
                    <div className="h-24 bg-white/5 rounded-lg" />
                  </div>
                  <div className="h-32 bg-white/5 rounded-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
