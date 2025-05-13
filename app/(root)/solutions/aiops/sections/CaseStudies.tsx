"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "Global Tech Solutions",
      industry: "E-commerce",
      description: "Reduced system downtime by 75% and improved customer experience with AI-driven monitoring",
      results: [
        "Decreased MTTR by 60%",
        "Improved system reliability to 99.99%",
        "Saved $500K annually in operational costs"
      ],
      logo: "/case-study-1.jpg"
    },
    {
      company: "FinServ Corporation",
      industry: "Financial Services",
      description: "Implemented predictive analytics to prevent critical system failures and enhance security",
      results: [
        "Zero critical incidents in 12 months",
        "90% reduction in false positives",
        "Enhanced regulatory compliance"
      ],
      logo: "/case-study-2.jpg"
    },
    {
      company: "HealthTech Innovations",
      industry: "Healthcare",
      description: "Automated IT operations and improved patient care systems reliability",
      results: [
        "100% uptime for critical systems",
        "45% reduction in IT operational costs",
        "Improved patient data security"
      ],
      logo: "/case-study-3.jpg"
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            See how leading organizations have transformed their IT operations with our AI-driven platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {study.company}
                  </h3>
                  <p className="text-indigo-600">
                    {study.industry}
                  </p>
                </div>
                <div className="w-16 h-16 relative">
                  <Image
                    src={study.logo}
                    alt={study.company}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                {study.description}
              </p>
              
              <div className="space-y-3">
                {study.results.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 text-indigo-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Read Full Case Study
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >          <button 
            onClick={() => window.location.href = "/pricing"}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;
