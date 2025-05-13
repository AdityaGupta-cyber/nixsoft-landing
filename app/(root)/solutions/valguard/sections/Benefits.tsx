"use client";
import { motion } from "framer-motion";
import { Shield, Clock, DollarSign, FileCheck, Lock, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enhanced Security",
      description: "Continuous vulnerability scanning and real-time threat detection for your Linux infrastructure",
      stat: "99.9%",
      statLabel: "Threat Detection Rate"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Savings",
      description: "Automate security assessments and compliance checks that would take days to perform manually",
      stat: "85%",
      statLabel: "Time Saved"
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Compliance Ready",
      description: "Meet regulatory requirements with automated compliance monitoring and reporting",
      stat: "100%",
      statLabel: "Compliance Coverage"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Reduction",
      description: "Reduce security incident costs and prevent expensive breaches before they happen",
      stat: "60%",
      statLabel: "Cost Reduction"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Risk Mitigation",
      description: "Proactively identify and address security vulnerabilities before they're exploited",
      stat: "95%",
      statLabel: "Risk Reduction"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Operational Efficiency",
      description: "Streamline security operations with automated scanning and remediation",
      stat: "3x",
      statLabel: "Efficiency Gain"
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
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Benefits</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Secure Your Linux Infrastructure
          </h2>
          <p className="text-xl text-gray-600">
            Experience the advantages of automated vulnerability assessment and compliance monitoring
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
                <div className="text-green-600 bg-green-50 p-3 rounded-lg group-hover:scale-110 transition-transform">
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
                    <span className="text-3xl font-bold text-green-600">
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
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Secure Your Linux Systems?
                </h3>
                <p className="text-green-100 mb-6">
                  Join hundreds of organizations that trust Nix-ValGuard for their Linux security
                </p>
                <button 
                  onClick={() => window.location.href = "/contact-us"}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
                >
                  Get Started Today
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Systems Protected", value: "10k+" },
                  { label: "Vulnerabilities Found", value: "1M+" },
                  { label: "Security Teams", value: "500+" },
                  { label: "Compliance Rate", value: "99%" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-green-200">
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
