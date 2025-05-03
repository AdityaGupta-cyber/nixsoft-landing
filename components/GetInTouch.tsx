"use client";
import { Button } from "./ui/button";

export default function GetInTouch() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="space-y-8 max-w-xl mx-auto md:mx-0 w-full">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                Have a question or want to learn more? Send us a message and
                we&apos;ll get back to you.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <Button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start justify-start space-y-6 max-w-xl mx-auto md:mx-0 w-full">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center space-x-3 text-gray-600">
                  <span>🌍</span>
                  <span>804, 8th Floor, Ijmima Complex, 2, Malad West, Mumbai,
                    Maharashtra 400064</span>
                </p>
                <p className="flex items-center space-x-3 text-gray-600">
                  <span>📞</span>
                  <span>+91 9769888498</span>
                </p>
                <p className="flex items-center space-x-3 text-gray-600">
                  <span>✉️</span>
                  <span>sales@nixsoftech.in</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}