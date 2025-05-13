"use client";
import { motion } from "framer-motion";

import { 
 
  Clock,
  DollarSign,
  Shield,
  Zap,
  TrendingUp
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Reduced MTTR",
      description: "Significantly reduce Mean Time To Resolution with AI-powered root cause analysis.",
      stat: "60%",
      statText: "faster incident resolution"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Optimization",
      description: "Optimize resource utilization and reduce operational costs through predictive insights.",
      stat: "40%",
      statText: "reduction in operational costs"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Improved Reliability",
      description: "Enhance system reliability with proactive issue detection and automated remediation.",
      stat: "99.9%",
      statText: "system uptime"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Enhanced Performance",
      description: "Optimize application and infrastructure performance with real-time monitoring.",
      stat: "45%",
      statText: "performance improvement"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Better Scalability",
      description: "Scale your infrastructure efficiently with AI-driven capacity planning.",
      stat: "3x",
      statText: "faster scaling decisions"
    }
  ];

  return (
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your IT Operations
          </h2>
          <p className="text-xl text-gray-300">
            Experience the benefits of AI-driven observability and monitoring
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors"
            >
              <div className="text-indigo-400 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {benefit.description}
              </p>
              <div className="border-t border-gray-700 pt-6">
                <div className="text-3xl font-bold text-indigo-400 mb-2">
                  {benefit.stat}
                </div>
                <div className="text-gray-400">
                  {benefit.statText}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Optimizing Your IT Infrastructure Today
              </h3>
              <p className="text-indigo-100 mb-6">
                Join hundreds of organizations that have transformed their IT operations with our AI-driven platform
              </p>              <button 
                onClick={() => window.location.href = "/contact-us"}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Get Started Now
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Active Users", value: "500+" },
                { label: "Issues Prevented", value: "10k+" },
                { label: "Time Saved", value: "1000h+" },
                { label: "Cost Saved", value: "$2M+" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-indigo-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
