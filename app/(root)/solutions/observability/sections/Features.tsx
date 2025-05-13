"use client";
import { motion } from "framer-motion";
import { 
  Search, 
  Activity,
  Bell, 
  Cpu, 
  BarChart2,
  Zap,
  Settings,
  Shield
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "AI-Powered Anomaly Detection",
      description: "Automatically identify unusual patterns and potential issues before they impact your systems using advanced machine learning algorithms."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Real-time Monitoring",
      description: "Get instant visibility into your entire IT infrastructure with comprehensive real-time monitoring and analytics."
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Smart Alerting",
      description: "Receive contextual alerts with automated priority assignment and noise reduction using AI-driven filtering."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Infrastructure Analytics",
      description: "Deep insights into server performance, resource utilization, and capacity planning with predictive analytics."
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Performance Metrics",
      description: "Track and analyze key performance indicators across your applications and infrastructure in real-time."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Auto-Resolution",
      description: "Automatically resolve common issues with predefined playbooks and AI-driven remediation workflows."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Custom Dashboards",
      description: "Create personalized dashboards with drag-and-drop widgets for monitoring metrics that matter to you."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Integration",
      description: "Built-in security monitoring and threat detection capabilities integrated with your observability data."
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
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Complete Observability Platform
          </h2>
          <p className="text-xl text-gray-600">
            Experience comprehensive monitoring and analysis with our AI-powered observability tools
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
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-indigo-600 bg-indigo-50 p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
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
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Learn More About Our Technology
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
