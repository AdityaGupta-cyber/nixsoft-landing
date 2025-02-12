"use client"
import { useState } from "react"
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { cn } from "@/lib/utils"
import { Search, MenuIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="w-full bg-[#1E90FF] text-white text-center py-2 text-sm md:text-md flex justify-center items-center md:tracking-wide">
        Watch Video: Simplyfying Kubernetes: The Rancher Way
      </div>
      <NavbarUtil />
    </div>
  )
}

function NavbarUtil({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <div className={cn("fixed inset-x-0 top-8 z-50 bg-white border-b", className)}>
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold">nixsoft</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                  <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Technologies">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Cloud Solutions"
                    href="/cloud"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Scale your infrastructure with our cloud expertise."
                  />
                  <ProductItem
                    title="DevOps"
                    href="/devops"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Streamline your development and operations."
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Solutions">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                  <HoveredLink href="/startup">Startup</HoveredLink>
                  <HoveredLink href="/business">Business</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="default" className="bg-[#1E90FF] text-white hover:bg-blue-600 rounded-md font-semibold">
              Get Pricing
            </Button>
            <button className="p-2">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ">
            <button onClick={toggleMobileMenu} className="p-2">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
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
              href="/technologies"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Technologies
            </Link>
            <Link
              href="/solutions"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Solutions
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Resources
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button variant="default" className="w-full bg-[#1E90FF] text-white hover:bg-blue-600 rounded-md">
                Get Pricing
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

