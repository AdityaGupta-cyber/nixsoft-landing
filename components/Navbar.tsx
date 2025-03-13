"use client";
import { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Search, MenuIcon, X } from "lucide-react";
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

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

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

          {/* All navigation items and buttons aligned to the right */}
          <div className="hidden md:flex items-center space-x-4">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Services">
                <div
                  className="text-sm grid grid-cols-2 gap-6 p-4 max-h-96 overflow-y-auto scrollbar-hide"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div>
                    <h3 className="font-bold mb-2">Cloud & Virtualization 🌩</h3>
                    <ul className="space-y-1">
                      <li>
                        <HoveredLink href="/services/cloud/aws">
                          AWS, Azure, & Google Cloud Solutions
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/cloud/virtualization">
                          Virtualization (VMware, Hyper-V, Proxmox)
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/cloud/hybrid">
                          Hybrid Cloud Implementations
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/cloud/optimization">
                          Cloud Cost Optimization
                        </HoveredLink>
                      </li>
                    </ul>

                    <h3 className="font-bold mt-4 mb-2">
                      DevOps & Automation ⚙️
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <HoveredLink href="/services/devops/cicd">
                          CI/CD Pipeline Implementation
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/devops/iac">
                          Infrastructure as Code (IaC)
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/devops/kubernetes">
                          Kubernetes & Container Orchestration
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/devops/monitoring">
                          Monitoring & Performance Optimization
                        </HoveredLink>
                      </li>
                    </ul>

                    <h3 className="font-bold mt-4 mb-2">
                      Cybersecurity Solutions 🔒
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <HoveredLink href="/services/security/pentesting">
                          Vulnerability Assessments & Penetration Testing
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/security/siem">
                          SIEM & Log Management
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/security/compliance">
                          Security Policy & Compliance Audits
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/security/endpoint">
                          Endpoint & Network Security
                        </HoveredLink>
                      </li>
                    </ul>

                    <h3 className="font-bold mt-4 mb-2">
                      IT Infrastructure Management 🏗
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <HoveredLink href="/services/infrastructure/server">
                          Server & Network Administration
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/infrastructure/cloud">
                          Cloud & On-Prem Infrastructure
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/infrastructure/security">
                          IT Security & Compliance
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/infrastructure/backup">
                          Data Backup & Disaster Recovery
                        </HoveredLink>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2">Managed Services 🖥</h3>
                    <ul className="space-y-1">
                      <li>
                        <HoveredLink href="/services/managed/support">
                          24/7 IT Support & Monitoring
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/managed/database">
                          Database Management
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/managed/patch">
                          Patch Management & System Hardening
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/managed/outsourcing">
                          End-to-End IT Outsourcing
                        </HoveredLink>
                      </li>
                    </ul>

                    <h3 className="font-bold mt-4 mb-2">AI & Analytics 🤖📊</h3>
                    <ul className="space-y-1">
                      <li>
                        <HoveredLink href="/services/ai/aiops">
                          AI-Powered IT Operations (AIOps)
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/ai/analytics">
                          Data Analytics & Visualization
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/ai/predictive">
                          Predictive Maintenance for IT Systems
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/ai/bi">
                          Business Intelligence Solutions
                        </HoveredLink>
                      </li>
                    </ul>

                    <h3 className="font-bold mt-4 mb-2">
                      Software Development & Integration 💻
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <HoveredLink href="/services/development/custom">
                          Custom Application Development
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/development/api">
                          API Development & Integration
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/development/web">
                          Web & Mobile App Development
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/development/legacy">
                          Legacy System Modernization
                        </HoveredLink>
                      </li>
                    </ul>

                    <h3 className="font-bold mt-4 mb-2">
                      IT Consulting & Strategy 🧠
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <HoveredLink href="/services/consulting/transformation">
                          Digital Transformation Consulting
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/consulting/roadmap">
                          Technology Roadmap Planning
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/consulting/governance">
                          IT Governance & Compliance Advisory
                        </HoveredLink>
                      </li>
                      <li>
                        <HoveredLink href="/services/consulting/cost">
                          Cost Optimization & Vendor Management
                        </HoveredLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Solutions">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-4xl">
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
              <MenuItem setActive={setActive} active={active} item="Tech Stack">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Cloud Solutions"
                    href="/tech/cloud"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="AWS, Azure, & Google Cloud Solutions"
                  />
                  <ProductItem
                    title="DevOps"
                    href="/tech/devops"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="CI/CD Pipeline Implementation"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="About Us">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/about-us">Our Company</HoveredLink>
                  <HoveredLink href="/careers">Careers</HoveredLink>
                  <HoveredLink href="/about/values">Our Values</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Insights">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/insights/blog">Blog</HoveredLink>
                  <HoveredLink href="/insights/case-studies">
                    Case Studies
                  </HoveredLink>
                  <HoveredLink href="/insights/whitepapers">
                    Whitepapers
                  </HoveredLink>
                  <HoveredLink href="/insights/webinars">Webinars</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
            <Button
              variant="default"
              className="bg-[#1E90FF] text-white hover:bg-blue-600 rounded-md font-semibold"
            >
              Get Pricing
            </Button>
            <button className="p-2">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="p-2">
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Solutions
            </Link>
            <Link
              href="/tech-stack"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Tech Stack
            </Link>
            <Link
              href="/about-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About Us
            </Link>
            <Link
              href="/insights"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Insights
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button
                variant="default"
                className="w-full bg-[#1E90FF] text-white hover:bg-blue-600 rounded-md"
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
