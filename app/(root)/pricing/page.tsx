"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";

// Define interfaces for type safety
interface FormData {
  inquiry: string;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  country: string;
  privacyPolicy: boolean;
}

const PricingInquiryForm: React.FC = () => {
  // State management with explicit typing
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    inquiry: "",
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    country: "",
    privacyPolicy: false,
  });

  // Technology and service options
  const technologies = [
    "PostgreSQL",
    "My Postgres Tool",
    "MongoDB",
    "Kubernetes",
    "Kafka",
    "ELK",
    "NGINX",
    "Grafana",
    "Kong",
  ];

  const services = [
    "Consulting",
    "Technical",
    "Migration",
    "Managed",
    "Training",
    "Flexi Pack (Consulting + Services + Support)",
  ];

  // Toggle selection handlers
  const handleTechnologyToggle = (tech: string) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // Input change handler with broad type support
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Form submission handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Comprehensive form validation
    const requiredFields: (keyof FormData)[] = [
      "name",
      "email",
      "company",
      "jobTitle",
      "phone",
      "country",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return;
    }

    if (!formData.privacyPolicy) {
      alert("Please acknowledge the privacy policy");
      return;
    }

    const submissionData = {
      ...formData,
      technologies: selectedTechnologies,
      services: selectedServices,
    };

    console.log("Form Submitted", submissionData);
  };

  return (
    <div className="min-h-screen pt-[170px] bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#4A7EFF] text-white p-6">
          <h2 className="text-2xl font-bold text-center">
            Transform with Confidence
          </h2>
          <p className="text-center text-white/80 mt-2">
            Accelerate Agility and Innovation
          </p>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Technologies Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Technologies
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {technologies.map((tech) => (
                <label
                  key={tech}
                  className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer 
                    ${
                      selectedTechnologies.includes(tech)
                        ? "bg-[#4A7EFF]/10 border border-[#4A7EFF] text-[#4A7EFF]"
                        : "hover:bg-gray-50"
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedTechnologies.includes(tech)}
                    onChange={() => handleTechnologyToggle(tech)}
                    className="form-checkbox text-[#4A7EFF]"
                  />
                  <span className="text-sm">{tech}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Services
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {services.map((service) => (
                <label
                  key={service}
                  className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer 
                    ${
                      selectedServices.includes(service)
                        ? "bg-[#4A7EFF]/10 border border-[#4A7EFF] text-[#4A7EFF]"
                        : "hover:bg-gray-50"
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="form-checkbox text-[#4A7EFF]"
                  />
                  <span className="text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Inquiry Textarea */}
          <div>
            <label className="block text-gray-700 mb-2">Inquiry</label>
            <textarea
              name="inquiry"
              value={formData.inquiry}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#4A7EFF]/50 transition-all"
              rows={4}
              placeholder="Tell us about your requirements..."
            />
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name*"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#4A7EFF]/50"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Work Email*"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#4A7EFF]/50"
              required
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company*"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#4A7EFF]/50"
              required
            />
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              placeholder="Job Title/Designation*"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#4A7EFF]/50"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone*"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#4A7EFF]/50"
              required
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#4A7EFF]/50"
              required
            >
              <option value="">Select Country*</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="IN">India</option>
            </select>
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={handleInputChange}
              className="form-checkbox text-[#4A7EFF]"
              required
            />
            <span className="text-sm text-gray-600">
              I understand and acknowledge the Ashnik Privacy Policy
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#4A7EFF] text-white py-3 rounded-md hover:bg-[#3A6EDF] transition-all"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default PricingInquiryForm;
