"use client";
import { useState, useEffect } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import {
  Menu as MenuIcon,
  X,
  Cloud,
  Settings,
  Shield,
  Server,
  Monitor,
  Brain,
  Code,
  Briefcase,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="w-full bg-[#1E90FF] text-white text-center py-2 text-sm md:text-md flex justify-center items-center md:tracking-wide">
        Watch Video: Simplyfying Kubernetes: The Rancher Way
      </div>
      <NavbarUtil />
    </div>
  );
}

function NavbarUtil({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  }, []);

 

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  return (
    <div
      className={cn("fixed inset-x-0 top-8 z-50 bg-white border-b", className)}
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold">nixsoft</h1>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="grid grid-cols-2 gap-8 p-6 max-w-4xl">
                  <div>
                    <div className="mb-6">
                      <h3 className="font-bold mb-2 flex items-center">
                        <Cloud className="h-4 w-4 mr-2 text-blue-600" />
                        Cloud & Virtualization
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        AWS, Azure, & Google Cloud Solutions
                      </p>
                      <HoveredLink
                        href="/services/cloud"
                        className="text-sm text-blue-600"
                      >
                        Read More →
                      </HoveredLink>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold mb-2 flex items-center">
                        <Settings className="h-4 w-4 mr-2 text-blue-600" />
                        DevOps & Automation
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        CI/CD Pipeline Implementation
                      </p>
                      <HoveredLink
                        href="/services/devops"
                        className="text-sm text-blue-600"
                      >
                        Read More →
                      </HoveredLink>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold mb-2 flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-blue-600" />
                        Cybersecurity Solutions
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        Vulnerability Assessments & Penetration Testing
                      </p>
                      <HoveredLink
                        href="/services/security"
                        className="text-sm text-blue-600"
                      >
                        Read More →
                      </HoveredLink>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2 flex items-center">
                        <Server className="h-4 w-4 mr-2 text-blue-600" />
                        IT Infrastructure Management
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        Server & Network Administration
                      </p>
                      <HoveredLink
                        href="/services/it-management"
                        className="text-sm text-blue-600"
                      >
                        Read More →
                      </HoveredLink>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h3 className="font-bold mb-2 flex items-center">
                        <Monitor className="h-4 w-4 mr-2 text-blue-600" />
                        Managed Services
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        24/7 IT Support & Monitoring
                      </p>
                      <HoveredLink
                        href="/services/managed"
                        className="text-sm text-blue-600"
                      >
                        Read More →
                      </HoveredLink>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold mb-2 flex items-center">
                        <Brain className="h-4 w-4 mr-2 text-blue-600" />
                        AI & Analytics
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        AI-Powered IT Operations (AIOps)
                      </p>
                      <HoveredLink
                        href="/services/ai"
                        className="text-sm text-blue-600"
                      >
                        Read More →
                      </HoveredLink>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold mb-2 flex items-center">
                        <Code className="h-4 w-4 mr-2 text-blue-600" />
                        Software Development
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        Custom Application Development
                      </p>
                      <HoveredLink
                        href="/services/software"
                        className="text-sm text-blue-600"
                      >
                        Read More →
                      </HoveredLink>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2 flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
                        IT Consulting & Strategy
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        Digital Transformation Consulting
                      </p>
                      <HoveredLink
                        href="/services/it-consulting"
                        className="text-sm text-blue-600"
                      >
                        Read More →
                      </HoveredLink>
                    </div>
                  </div>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Solutions">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl">
                  <ProductItem
                    title="AI-Driven Observability & IT Infrastructure Monitoring"
                    href="/solutions/observability"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Proactive monitoring using AI/ML for anomaly detection"
                  />
                  <ProductItem
                    title="Nix-ValGuard - Continuous Linux VA & Compliance Monitoring"
                    href="/solutions/valguard"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Automated vulnerability assessment for Linux systems"
                  />
                  <ProductItem
                    title="AI-Powered IT Operations (AIOps)"
                    href="/solutions/aiops"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Intelligent automation for IT processes & incident management"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="About Us">
                <div className="flex flex-col space-y-4 text-sm p-6">
                  <HoveredLink href="/about-us">Our Company</HoveredLink>
                  <HoveredLink href="/careers">Careers</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
            <Button
              variant="default"
              className="bg-[#1E90FF] text-white hover:bg-blue-600 rounded-md font-semibold px-4 py-2"
              onClick={() => (window.location.href = "/pricing")}
            >
              Get Pricing
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <MenuIcon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-red shadow-lg">
          {/* Services dropdown */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleMobileSubmenu("services")}
              className="flex justify-between items-center w-full px-4 py-3 text-left text-base font-medium text-gray-700"
            >
              <span>Services</span>
              {mobileSubmenu === "services" ? (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {mobileSubmenu === "services" && (
              <div className="px-4 py-2 space-y-3 bg-gray-50">
                <Link
                  href="/services/cloud"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  <div className="flex items-center">
                    <Cloud className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Cloud & Virtualization</span>
                  </div>
                </Link>
                <Link
                  href="/services/devops"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  <div className="flex items-center">
                    <Settings className="h-4 w-4 mr-2 text-blue-600" />
                    <span>DevOps & Automation</span>
                  </div>
                </Link>
                <Link
                  href="/services/security"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Cybersecurity Solutions</span>
                  </div>
                </Link>
                <Link
                  href="/services/it-management"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  <div className="flex items-center">
                    <Server className="h-4 w-4 mr-2 text-blue-600" />
                    <span>IT Infrastructure Management</span>
                  </div>
                </Link>
                <Link
                  href="/services/managed"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  <div className="flex items-center">
                    <Monitor className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Managed Services</span>
                  </div>
                </Link>
                <Link
                  href="/services/ai"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  <div className="flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-blue-600" />
                    <span>AI & Analytics</span>
                  </div>
                </Link>
                <Link
                  href="/services/software"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  <div className="flex items-center">
                    <Code className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Software Development</span>
                  </div>
                </Link>
                <Link
                  href="/services/it-consulting"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
                    <span>IT Consulting & Strategy</span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Solutions dropdown */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleMobileSubmenu("solutions")}
              className="flex justify-between items-center w-full px-4 py-3 text-left text-base font-medium text-gray-700"
            >
              <span>Solutions</span>
              {mobileSubmenu === "solutions" ? (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {mobileSubmenu === "solutions" && (
              <div className="px-4 py-2 space-y-3 bg-gray-50">
                <Link
                  href="/solutions/observability"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  AI-Driven Observability & IT Infrastructure Monitoring
                </Link>
                <Link
                  href="/solutions/valguard"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Nix-ValGuard - Continuous Linux VA & Compliance Monitoring
                </Link>
                <Link
                  href="/solutions/aiops"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  AI-Powered IT Operations (AIOps)
                </Link>
              </div>
            )}
          </div>

          {/* About Us dropdown */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleMobileSubmenu("about")}
              className="flex justify-between items-center w-full px-4 py-3 text-left text-base font-medium text-gray-700"
            >
              <span>About Us</span>
              {mobileSubmenu === "about" ? (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {mobileSubmenu === "about" && (
              <div className="px-4 py-2 space-y-3 bg-gray-50">
                <Link
                  href="/about-us"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Our Company
                </Link>
                <Link
                  href="/careers"
                  className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600 border-l-2 border-gray-200 hover:border-blue-600"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Careers
                </Link>
              </div>
            )}
          </div>

          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button
                variant="default"
                className="w-full bg-[#1E90FF] text-white hover:bg-blue-600 rounded-md"
                onClick={() => {
                  setMobileMenuOpen(false); // Close menu on click
                  window.location.href = "/pricing";
                }}
              >
                Get Pricing
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}