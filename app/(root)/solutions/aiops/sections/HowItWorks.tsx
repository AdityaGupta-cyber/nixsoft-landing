"use client";
import { motion } from "framer-motion";
import { 
  Radio, 
  ArrowRight,
 
  Brain,
  Bell,
  Wrench
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Radio className="h-6 w-6" />,
      title: "Data Collection",
      description: "Collect metrics, logs, and traces from your entire IT infrastructure in real-time."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Processing",
      description: "Process data through our advanced AI models for pattern recognition and anomaly detection."
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Smart Alerting",
      description: "Receive intelligent alerts with context and suggested remediation steps."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Automated Response",
      description: "Automatically execute predefined playbooks to resolve common issues."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Our AI-driven platform streamlines IT operations through an intelligent monitoring and response system
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg relative z-10"
              >
                <div className="bg-indigo-600 text-white p-3 rounded-lg inline-block mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="h-8 w-8 text-indigo-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 bg-indigo-50 rounded-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
              Ready to Transform Your IT Operations?
            </h3>            <p className="text-indigo-700 mb-8">
              Get started with our AI-driven observability platform today
            </p>
            <button  
              onClick={() => window.location.href = "/pricing"}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
