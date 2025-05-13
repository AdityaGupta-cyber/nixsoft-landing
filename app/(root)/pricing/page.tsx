"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { TechnologiesSection, technologyPrices } from "./sections/tech";
import { ServicesSection, servicePrices } from "./sections/services";
import { ContactFormSection } from "./sections/contact";

interface FormData {
  email: string;
  name: string;
  company: string;
  jobTitle: string;
  phone: string;
  country: string;
  privacyPolicy: boolean;
  message: string;
}

interface SubmissionData {
  technologies: string[];
  services: string[];
  pricing: {
    technologies: { name: string; price: number }[];
    services: { name: string; price: number }[];
    totalCost: number;
  };
  email: string;
  name: string;
  company: string;
  jobTitle: string;
  phone: string;
  country: string;
  message: string;
}

const PricingInquiryForm: React.FC = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    company: "",
    jobTitle: "",
    phone: "",
    country: "",
    privacyPolicy: false,
    message: ""
  });
  const [submittedData, setSubmittedData] = useState<SubmissionData | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

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

  const calculateTotalCost = () => {
    const techCost = selectedTechnologies.reduce((total, tech) => {
      const techPrice = technologyPrices.find((t) => t.name === tech)?.price || 0;
      return total + techPrice;
    }, 0);

    const serviceCost = selectedServices.reduce((total, service) => {
      const servicePrice =
        servicePrices.find((s) => s.name === service)?.price || 0;
      return total + servicePrice;
    }, 0);

    return techCost + serviceCost;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset validation error
    setValidationError(null);
    
    // Form validation
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
      setValidationError(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return;
    }

    if (!formData.privacyPolicy) {
      setValidationError("Please acknowledge the privacy policy");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setValidationError("Please enter a valid email address");
      return;
    }

    const totalCost = calculateTotalCost();

    // Just store the data in an object
    const submissionData = {
      ...formData,
      technologies: selectedTechnologies,
      services: selectedServices,
      pricing: {
        technologies: selectedTechnologies.map((tech) => ({
          name: tech,
          price: technologyPrices.find((t) => t.name === tech)?.price || 0,
        })),
        services: selectedServices.map((service) => ({
          name: service,
          price: servicePrices.find((s) => s.name === service)?.price || 0,
        })),
        totalCost,
      },
    };

    // Store the submission data in state and log it
    setSubmittedData(submissionData);
    console.log("Form Data Stored:", submissionData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-[120px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pricing & Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the technologies and services that fit your needs. Get an instant estimate for your custom solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Form Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#4A7EFF] to-[#3A6EDF] text-white p-8">
              <h2 className="text-3xl font-bold">Configure Your Solution</h2>
              <p className="text-blue-100 mt-2">Select technologies and services to get started</p>
            </div>

            {validationError && (
              <div className="mx-6 mt-6">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {validationError}
                </div>
              </div>
            )}

            {submittedData && !validationError && (
              <div className="mx-6 mt-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Form data has been stored successfully!
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-6 space-y-8">
              <TechnologiesSection
                selectedTechnologies={selectedTechnologies}
                onTechnologyToggle={handleTechnologyToggle}
              />
              <div className="border-t border-gray-200 pt-8">
                <ServicesSection
                  selectedServices={selectedServices}
                  onServiceToggle={handleServiceToggle}
                />
              </div>
              <div className="border-t border-gray-200 pt-8">
                <ContactFormSection
                  formData={{...formData, inquiry: ''}} 
                  onInputChange={handleInputChange}
                />
              </div>              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#4A7EFF] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-[#3A6EDF] hover:shadow-lg focus:ring-4 focus:ring-blue-200"
                >
                  Get Your Custom Quote
                </button>
              </div>
            </form>
          </div>

          {/* Side Panel */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sticky top-24">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Expert Consultation</h4>
                  <p className="text-gray-600 text-sm">Get personalized solutions from our technology experts</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Fast Implementation</h4>
                  <p className="text-gray-600 text-sm">Quick deployment with our experienced team</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Enterprise Security</h4>
                  <p className="text-gray-600 text-sm">Top-tier security measures for your peace of mind</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">24/7 Support</h4>
                  <p className="text-gray-600 text-sm">Round-the-clock technical support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingInquiryForm;