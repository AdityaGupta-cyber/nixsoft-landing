"use client";
import { motion } from "framer-motion";
import { ChartBar, Clock, ShieldCheck, TrendingUp, LineChart, Brain } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Faster Issue Resolution",
      description: "Reduce Mean Time To Resolution (MTTR) by up to 75% with AI-powered root cause analysis",
      stat: "75%",
      statLabel: "Faster MTTR"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Enhanced Reliability",
      description: "Maintain high system availability with proactive issue detection and automated remediation",
      stat: "99.9%",
      statLabel: "System Uptime"
    },
    {
      icon: <ChartBar className="h-6 w-6" />,
      title: "Cost Optimization",
      description: "Reduce operational costs through efficient resource utilization and automated processes",
      stat: "40%",
      statLabel: "Cost Reduction"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "Anticipate and prevent issues before they impact your business with ML-driven insights",
      stat: "90%",
      statLabel: "Issue Prevention"
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Performance Boost",
      description: "Optimize application and infrastructure performance with real-time monitoring",
      stat: "3x",
      statLabel: "Performance Gain"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalability",
      description: "Easily scale your monitoring as your infrastructure grows with our flexible platform",
      stat: "∞",
      statLabel: "Scalability"
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Benefits</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Transform Your IT Operations
          </h2>
          <p className="text-xl text-gray-600">
            Experience the advantages of AI-driven observability and monitoring
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="text-indigo-600 bg-indigo-50 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-indigo-600">
                      {benefit.stat}
                    </span>
                    <span className="text-gray-500">
                      {benefit.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Optimize Your Infrastructure?
                </h3>
                <p className="text-indigo-100 mb-6">
                  Join hundreds of companies that have transformed their IT operations with our platform
                </p>
                <button 
                  onClick={() => window.location.href = "/contact-us"}
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                  Get Started Today
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Customers", value: "500+" },
                  { label: "Issues Prevented", value: "10k+" },
                  { label: "Time Saved", value: "1000h+" },
                  { label: "ROI", value: "300%" }
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
