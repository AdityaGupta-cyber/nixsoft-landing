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
    <div className="min-h-screen pt-[170px] bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="bg-[#4A7EFF] text-white p-6">
          <h2 className="text-2xl font-bold text-center">
            Transform with Confidence
          </h2>
          <p className="text-center text-white/80 mt-2">
            Accelerate Agility and Innovation
          </p>
        </div>

        {validationError && (
          <div className="p-4 bg-red-100 text-red-800">
            {validationError}
          </div>
        )}
        
        {submittedData && !validationError && (
          <div className="p-4 bg-green-100 text-green-800">
            Form data has been stored successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <TechnologiesSection
            selectedTechnologies={selectedTechnologies}
            onTechnologyToggle={handleTechnologyToggle}
          />
          <ServicesSection
            selectedServices={selectedServices}
            onServiceToggle={handleServiceToggle}
          />
          <ContactFormSection
            formData={{...formData, inquiry: ''}} 
            onInputChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full bg-[#4A7EFF] text-white py-3 rounded-md transition-all hover:bg-[#3A6EDF]"
          >
            Submit Request
          </button>
          
          {calculateTotalCost() > 0 && (
            <div className="text-right font-semibold text-lg">
              Estimated Cost: ${calculateTotalCost().toLocaleString()}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PricingInquiryForm;