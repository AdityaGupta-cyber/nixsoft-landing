import React from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 overflow-clip">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Coming Soon"
                className="h-10"
              />
            </div>
            <p className="mb-4">
              Empowering businesses with innovative technology solutions for
              digital success.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fnixsoftech.in%2Fcontact-us%2F" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/intent/tweet?text=About%20Us&url=https%3A%2F%2Fnixsoftech.in%2Fabout-us%2F" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnixsoftech.in%2Fabout-us%2F" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="about-us"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="contact-us"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2024 NixSoftech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
