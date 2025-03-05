"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    organization: "",
    jobTitle: "",
    country: "",
    inquiry: "",
  });

  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isPrivacyChecked) {
      alert("Please acknowledge the privacy policy");
      return;
    }
    // Add form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen pt-[150px] bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Location Information */}
          <div className="bg-indigo-700 text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">NixSoft</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-sm">
                    804, 8th Floor, Ijmima Complex, 2, Off Link Rd, behind
                    Infiniti Mall, Malad, Mindspace, Malad West, Mumbai,
                    Maharashtra 400064
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+919769888498" className="hover:text-indigo-200">
                    +91 9769888498
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5" />
                  <a
                    href="mailto:sales@nixsoftech.in"
                    className="hover:text-indigo-200"
                  >
                    sales@nixsoftech.in
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="w-5 h-5" />
                  <a
                    href="https://www.nixsoftech.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-200"
                  >
                    www.nixsoftech.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email*"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile*"
                  required
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization*"
                  required
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title*"
                  required
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <select
                name="country"
                required
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-500"
              >
                <option value="">Select Country*</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                {/* Add more countries as needed */}
              </select>
              <textarea
                name="inquiry"
                placeholder="Inquiry Details*"
                required
                value={formData.inquiry}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
              ></textarea>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  checked={isPrivacyChecked}
                  onChange={() => setIsPrivacyChecked(!isPrivacyChecked)}
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <label
                  htmlFor="privacyPolicy"
                  className="text-sm text-gray-700"
                >
                  I understand and acknowledge the Nix Softech Privacy Policy
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
