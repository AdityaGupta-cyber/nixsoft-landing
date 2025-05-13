"use client";
import { motion } from "framer-motion";
import { Brain, LineChart, Shield, AlertCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-900 to-indigo-800 text-white">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              AI-Driven Observability & IT Infrastructure Monitoring
            </h1>
            <p className="text-xl text-indigo-100">
              Transform your IT operations with intelligent monitoring and predictive analytics. Detect anomalies before they become problems.
            </p>            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => window.location.href = "/contact-us"}
                className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Get Started
              </button>
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "AI-Powered Analytics",
                desc: "Machine learning for predictive insights"
              },
              {
                icon: <LineChart className="h-8 w-8" />,
                title: "Real-time Monitoring",
                desc: "Instant visibility into system health"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Proactive Defense",
                desc: "Early warning system for issues"
              },
              {
                icon: <AlertCircle className="h-8 w-8" />,
                title: "Smart Alerts",
                desc: "Contextual notifications that matter"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <div className="text-indigo-400 mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-indigo-100">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
