import React, { ChangeEvent } from "react";

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

interface ContactFormSectionProps {
  formData: FormData;
  onInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  formData,
  onInputChange,
}) => {
  return (
    <>
      {/* Inquiry Textarea */}
      <div>
        <label className="block text-gray-700 mb-2">Inquiry</label>
        <textarea
          name="inquiry"
          value={formData.inquiry}
          onChange={onInputChange}
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
          onChange={onInputChange}
          placeholder="Name*"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#4A7EFF]/50"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          placeholder="Work Email*"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#4A7EFF]/50"
          required
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={onInputChange}
          placeholder="Company*"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#4A7EFF]/50"
          required
        />
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={onInputChange}
          placeholder="Job Title/Designation*"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#4A7EFF]/50"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={onInputChange}
          placeholder="Phone*"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#4A7EFF]/50"
          required
        />
        <select
          name="country"
          value={formData.country}
          onChange={onInputChange}
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
          onChange={onInputChange}
          className="form-checkbox text-[#4A7EFF]"
          required
        />
        <span className="text-sm text-gray-600">
          I understand and acknowledge the Ashnik Privacy Policy
        </span>
      </div>
    </>
  );
};