"use client";
import { motion } from "framer-motion";
import { 
  Brain, 
  Shield, 
  
  Eye
} from "lucide-react";
import Link from "next/link";

const SolutionsPage = () => {
  const solutions = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AIOps Platform",
      description: "AI-driven IT operations with intelligent monitoring and automated incident resolution",
      category: "Automation",
      link: "/solutions/aiops",
      gradient: "from-indigo-500 to-purple-500",
      features: [
        "Anomaly Detection",
        "Automated Response",
        "Performance Analytics",
        "Smart Alerting"
      ]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "IT Infrastructure Observability",
      description: "Complete visibility into your IT infrastructure with advanced monitoring and analytics",
      category: "Monitoring",
      link: "/solutions/observability",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Real-time Monitoring",
        "Metrics & Logs",
        "System Analytics",
        "Performance Tracking"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Nix-ValGuard",
      description: "Continuous Linux vulnerability assessment and compliance monitoring",
      category: "Security",
      link: "/solutions/valguard",
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Vulnerability Scanning",
        "Compliance Monitoring",
        "Automated Assessment",
        "Security Reporting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >            <div className="inline-block px-4 py-2 bg-indigo-500/20 rounded-full backdrop-blur-sm mb-6">
              <span className="text-indigo-200 font-medium">Enterprise-Grade Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-white mb-6">
              Transformative Solutions for Modern Enterprise
            </h1>
            <p className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto">
              Comprehensive suite of solutions designed to transform, secure, and optimize your IT infrastructure for the digital age
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "/contact-us"}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all shadow-lg"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "/about-us"}
                className="bg-indigo-500/20 backdrop-blur-sm text-white border border-indigo-400/30 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500/30 transition-all"
              >
                Explore Our Approach
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          
        </div>
      </div>

      {/* Solutions Grid */}      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Enterprise Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our suite of enterprise-grade solutions designed to meet your specific business needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${solution.gradient} p-6`}>
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    {solution.icon}
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                    {solution.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {solution.link && (
                  <Link href={solution.link} className="inline-flex items-center">
                    <span className={`bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent font-semibold group-hover:underline`}>
                      Learn More
                    </span>
                    <svg
                      className={`w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-24 mb-24">
          {[
            { label: "Enterprise Clients", value: "500+", suffix: "" },
            { label: "Success Rate", value: "99.9", suffix: "%" },
            { label: "Team Experts", value: "50+", suffix: "" },
            { label: "Years Experience", value: "15+", suffix: "" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-24 bg-gradient-to-br from-indigo-900 to-gray-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto">
              Let us discuss how our enterprise solutions can help you achieve your business goals and drive innovation
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "/contact-us"}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all shadow-lg"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "/pricing"}
                className="bg-indigo-500/20 backdrop-blur-sm text-white border border-indigo-400/30 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500/30 transition-all"
              >
                View Enterprise Pricing
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionsPage;
