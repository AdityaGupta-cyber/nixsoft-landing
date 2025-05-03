"use client";
import React from "react";
import { Cloud, Server, Database, Network, ArrowRight } from "lucide-react";

// Content configuration - edit this object to change content
const heroContent = {
  badge: "Enterprise Solutions",
  title: "DevOps & Automation ",
  paragraph1: "At Nixsoft Technologies, we leverage DevOps methodologies and automation to transform your IT operations, accelerate software delivery, and enhance operational efficiency.",
  paragraph2: "Our expert team integrates industry-leading practices to ensure rapid, reliable, and scalable IT environments.",
  buttons: [
    {
      text: "Our Services",
      primary: true,
      href: "/services"
    },
    {
      text: "Get a Quote",
      primary: false,
      href: "/pricing"
    }
  ],
  serviceCards: [
    { icon: "Cloud", title: "CI/CD Pipelines" },
    { icon: "Server", title: "Infrastructure as Code" },
    { icon: "Database", title: "Monitoring & Logging" },
    { icon: "Network", title: "Automation Tools" }
  ]
};


const NixSoftHero = () => {
  const renderIcon = (iconName: string, className: string) => {
    const iconProps = { className };
    switch (iconName) {
      case "Cloud": return <Cloud {...iconProps} />;
      case "Server": return <Server {...iconProps} />;
      case "Database": return <Database {...iconProps} />;
      case "Network": return <Network {...iconProps} />;
      default: return <Cloud {...iconProps} />;
    }
  };

  return (
    <div className="relative w-full min-h-[600px] bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Glowing accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full py-20 flex items-center">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Content Column (3/5 width) */}
          <div className="md:col-span-3 space-y-6">
            {heroContent.badge && (
              <div className="inline-block px-3 py-1 bg-indigo-700 bg-opacity-30 backdrop-blur-sm rounded-full border border-indigo-500 border-opacity-30 mb-2">
                <span className="text-cyan-300 text-sm font-medium tracking-wide uppercase">{heroContent.badge}</span>
              </div>
            )}
            
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-cyan-400">{heroContent.title}</span>
            </h1>
            
            {heroContent.paragraph1 && (
              <p className="text-indigo-100 text-lg md:text-xl leading-relaxed">
                {heroContent.paragraph1}
              </p>
            )}
            
            {heroContent.paragraph2 && (
              <p className="text-indigo-200 text-lg leading-relaxed">
                {heroContent.paragraph2}
              </p>
            )}
            
            <div className="flex flex-wrap gap-4 pt-4">
              {heroContent.buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => button.href && (window.location.href = button.href)}
                  className={`group px-8 py-3 ${
                    button.primary 
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg hover:shadow-xl hover:translate-y-0.5 focus:ring-blue-400" 
                      : "bg-transparent border border-indigo-300 text-white hover:bg-indigo-800 hover:bg-opacity-40 focus:ring-indigo-400"
                  } font-medium rounded-lg transform transition-all duration-200 focus:ring-2 focus:ring-opacity-50 ${
                    button.primary ? "flex items-center gap-2" : ""
                  }`}
                >
                  {button.text}
                  {button.primary && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              ))}
            </div>
          </div>
          
          {/* Visual Column (2/5 width) */}
          <div className="hidden md:col-span-2 md:block">
            <div className="relative rounded-xl backdrop-blur-sm bg-indigo-900 bg-opacity-50 p-6 border border-indigo-600 border-opacity-20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-600/10 rounded-xl"></div>
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {heroContent.serviceCards.map((card, index) => (
                  <div key={index} className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg flex flex-col items-center text-center space-y-2">
                    {renderIcon(card.icon, "w-10 h-10 text-cyan-300 mb-2")}
                    <h3 className="text-white font-medium">{card.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NixSoftHero;