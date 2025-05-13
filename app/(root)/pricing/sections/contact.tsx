import React, { ChangeEvent } from "react";
import { User, Mail, Building2, Briefcase, Phone, Globe, Lock } from "lucide-react";

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

const countries = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "UK", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "IN", name: "India" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "SG", name: "Singapore" },
  { code: "AE", name: "United Arab Emirates" },
];

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  formData,
  onInputChange,
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Information</h3>
      <p className="text-gray-600 mb-6">Tell us about yourself and your requirements</p>

      <div className="space-y-6">
        {/* Inquiry Textarea */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Project Requirements</label>
          <div className="relative">
            <textarea
              name="inquiry"
              value={formData.inquiry}
              onChange={onInputChange}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A7EFF] focus:border-[#4A7EFF] transition-all resize-none"
              rows={4}
              placeholder="Please describe your project requirements and any specific needs..."
            />
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <User className="h-5 w-5" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onInputChange}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A7EFF] focus:border-[#4A7EFF] transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Work Email*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onInputChange}
                placeholder="john@company.com"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A7EFF] focus:border-[#4A7EFF] transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Building2 className="h-5 w-5" />
              </div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={onInputChange}
                placeholder="Company Name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A7EFF] focus:border-[#4A7EFF] transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Title*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Briefcase className="h-5 w-5" />
              </div>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={onInputChange}
                placeholder="Your Role"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A7EFF] focus:border-[#4A7EFF] transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Phone className="h-5 w-5" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={onInputChange}
                placeholder="+1 (555) 000-0000"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A7EFF] focus:border-[#4A7EFF] transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country*</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Globe className="h-5 w-5" />
              </div>
              <select
                name="country"
                value={formData.country}
                onChange={onInputChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A7EFF] focus:border-[#4A7EFF] transition-all appearance-none"
                required
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Privacy Policy Checkbox */}
        <div className="flex items-start space-x-3 mt-6">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={onInputChange}
              className="w-4 h-4 rounded border-gray-300 text-[#4A7EFF] focus:ring-[#4A7EFF]"
              required
            />
          </div>
          <div className="flex items-center">
            <Lock className="h-4 w-4 text-gray-400 mr-2" />
            <label className="text-sm text-gray-600">
              I understand and acknowledge the NixSoft Privacy Policy
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};