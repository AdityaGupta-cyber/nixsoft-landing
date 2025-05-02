"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { TechnologiesSection, technologyPrices } from "./sections/tech";
import { ServicesSection, servicePrices } from "./sections/services";
import { ContactFormSection } from "./sections/contact";

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

interface PricingItem {
  name: string;
  price: number;
}

interface SubmissionData {
  inquiry: string;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  country: string;
  privacyPolicy: boolean;
  technologies: string[];
  services: string[];
  pricing: {
    technologies: PricingItem[];
    services: PricingItem[];
    totalCost: number;
  };
}

const PricingInquiryForm: React.FC = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
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

  // Send data to a serverless function or API route that will handle the email sending
  const sendFormData = async (submissionData: SubmissionData) => {
    try {
      // Here we'll create a server-side API route to handle the MailerLite integration
      const response = await fetch("/api/submit-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit inquiry");
      }
      
      return true;
    } catch (error) {
      console.error("Form submission error:", error);
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

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
      setIsSubmitting(false);
      setSubmitStatus({
        success: false,
        message: `Please fill in the following fields: ${missingFields.join(", ")}`
      });
      return;
    }

    if (!formData.privacyPolicy) {
      setIsSubmitting(false);
      setSubmitStatus({
        success: false,
        message: "Please acknowledge the privacy policy"
      });
      return;
    }

    const totalCost = calculateTotalCost();

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

    console.log("Form Submitted", submissionData);
    
    // Send data to our API route
    const emailSent = await sendFormData(submissionData);
    
    setIsSubmitting(false);
    if (emailSent) {
      setSubmitStatus({
        success: true,
        message: "Your inquiry has been submitted successfully! We'll be in touch soon."
      });
      // Reset form after successful submission
      setSelectedTechnologies([]);
      setSelectedServices([]);
      setFormData({
        inquiry: "",
        name: "",
        email: "",
        company: "",
        jobTitle: "",
        phone: "",
        country: "",
        privacyPolicy: false,
      });
    } else {
      setSubmitStatus({
        success: false,
        message: "Something went wrong submitting your inquiry. Please try again or contact us directly."
      });
    }
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

        {submitStatus && (
          <div 
            className={`p-4 ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
          >
            {submitStatus.message}
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
            formData={formData}
            onInputChange={handleInputChange}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#4A7EFF] text-white py-3 rounded-md transition-all ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#3A6EDF]'
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
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