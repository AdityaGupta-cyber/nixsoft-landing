"use client";
import React from "react";

// Define interfaces for your props
interface ServiceItem {
  name: string;
  description?: string;
  subItems?: string[];
}

interface ServiceSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  services: ServiceItem[];
  imagePosition?: "right" | "left";
  imageSrc?: string;
  index?: number;
}

interface ServiceData {
  title: string;
  description: string;
  icon: React.ReactNode;
  services: ServiceItem[];
  imagePosition: "right" | "left";
  imageSrc: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  icon,
  services,
  imagePosition = "right",
  imageSrc,
}) => {
  const isImageRight = imagePosition === "right";

  return (
    <div className="w-full py-12 border-b border-gray-200">
      <div className="container mx-auto">
        <div
          className={`flex flex-col lg:flex-row items-center ${
            isImageRight ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Content Section */}
          <div className="w-full lg:w-1/2 px-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl text-indigo-500 mr-3">{icon}</span>
              <h2 className="text-3xl font-bold text-indigo-900">{title}</h2>
            </div>
            <p className="text-gray-700 mb-6 font-semibold">{description}</p>

            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <div className="flex items-start">
                    <span className="text-indigo-500 mr-2">—</span>
                    <span className="font-medium">{service.name}</span>
                  </div>
                  {service.description && (
                    <p className="ml-6 text-gray-600 text-sm">
                      {service.description}
                    </p>
                  )}
                  {service.subItems && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {service.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex items-start">
                          <span className="text-indigo-400 mr-2">•</span>
                          <span className="text-gray-700">{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <button
              className="text-blue-500 font-medium flex items-center hover:text-blue-700 transition-colors"
              onClick={() => (window.location.href = "/learn-more")}
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 p-6">
            <img
              src={imageSrc || "/api/placeholder/600/400"}
              alt="Service illustration"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  // Icons for each section
  const icons = {
    analysis: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v9.75c0 .83.67 1.5 1.5 1.5h13.5c.83 0 1.5-.67 1.5-1.5V5.25c0-.83-.67-1.5-1.5-1.5H5.25c-.83 0-1.5.67-1.5 1.5z" clipRule="evenodd" />
      </svg>
    ),
    pipeline: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
        <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clipRule="evenodd" />
      </svg>
    ),
    tools: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
      </svg>
    ),
    build: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
        <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
        <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
      </svg>
    ),
    test: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 9.375v-4.5zM4.875 4.5a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 01-1.875-1.875v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75A.75.75 0 016 7.5v-.75zm9.75 0A.75.75 0 0116.5 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 19.125v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 01-1.875-1.875v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zM6 16.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm9.75 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z" clipRule="evenodd" />
      </svg>
    ),
    monitor: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
      </svg>
    ),
    optimize: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
      </svg>
    ),
    training: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
        <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
      </svg>
    ),
    improve: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clipRule="evenodd" />
      </svg>
    ),
    cost: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991-.256.193-.574.336-.921.421z" />
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
      </svg>
    ),
  };

  const servicesData: ServiceData[] = [
    {
      title: "Understanding Client Needs and Goals",
      description:
        "We start by deeply understanding your business objectives and technical environment.",
      icon: icons.analysis,
      services: [
        {
          name: "Initial Consultation",
          description: "We understand your business goals, challenges, and existing development processes, identifying pain points such as slow deployment cycles, manual processes, lack of testing, or communication gaps between development and operations teams."
        },
        {
          name: "Assess Current Infrastructure",
          description: "We conduct a thorough assessment of your existing infrastructure, development workflows, version control systems, and test environments."
        }
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Designing the CI/CD Pipeline",
      description:
        "We create a tailored strategy aligned with your specific needs and goals.",
      icon: icons.pipeline,
      services: [
        {
          name: "CI/CD Strategy Development",
          description: "We design a tailored Continuous Integration (CI) and Continuous Deployment (CD) strategy aligned with your needs.",
          subItems: [
            "Defining the stages of the pipeline (e.g., code commit, build, testing, deployment)",
            "Identifying appropriate tools and platforms (e.g., Jenkins, GitLab CI, CircleCI, Travis CI, Azure DevOps)",
            "Considering integration with version control systems (e.g., GitHub, GitLab, Bitbucket)"
          ]
        }
      ],
      imagePosition: "left",
      imageSrc: "https://plus.unsplash.com/premium_photo-1677448831822-4251f31b9fd5?q=80&w=1932&auto=format&fit=crop",
    },
    {
      title: "Tool Selection and Integration",
      description:
        "We help select and integrate the right tools for your environment.",
      icon: icons.tools,
      services: [
        {
          name: "Choosing the Right Tools",
          description: "We help you select the appropriate tools for your specific environment:",
          subItems: [
            "CI Tools: Jenkins, CircleCI, Travis CI, GitLab CI, Azure DevOps, etc.",
            "Source Control: GitHub, GitLab, Bitbucket, etc.",
            "Automation/Configuration Management: Ansible, Chef, Puppet, Terraform, etc.",
            "Testing Frameworks: Selenium, JUnit, TestNG, etc.",
            "Deployment Tools: Kubernetes, Docker, Helm, AWS CodePipeline, etc."
          ]
        },
        {
          name: "Integration",
          description: "We integrate the selected tools seamlessly into your workflow to ensure that every step, from code commit to production deployment, is automated."
        }
      ],
      imagePosition: "right",
      imageSrc: "https://spacelift.io/_next/image?url=https%3A%2F%2Fspaceliftio.wpcomstaging.com%2Fwp-content%2Fuploads%2F2023%2F04%2F193.terraform-infrastructure-as-code.png&w=2048&q=100",
    },
    {
      title: "Building the CI/CD Pipeline",
      description:
        "We implement a complete pipeline from version control to deployment.",
      icon: icons.build,
      services: [
        {
          name: "Version Control Integration",
          description: "We ensure the pipeline is connected to your version control system (e.g., Git), triggering the pipeline when new code is committed or merged."
        },
        {
          name: "Automated Build and Testing",
          description: "We set up the pipeline to automatically compile and build the project, run tests (unit, integration, security), and provide immediate feedback to developers about code quality and functionality."
        },
        {
          name: "Continuous Deployment/Delivery",
          description: "We automate the deployment process to different environments (staging, production) based on successful builds and tests, implementing rolling deployments, blue-green deployment strategies, or canary releases for zero-downtime delivery."
        }
      ],
      imagePosition: "left",
      imageSrc: "https://www.mgt-commerce.com/astatic/assets/images/article/2023/155/hero.svg?v=1.0.4",
    },
    {
      title: "Implementing Automated Testing",
      description:
        "We establish comprehensive testing throughout your pipeline.",
      icon: icons.test,
      services: [
        {
          name: "Unit Testing",
          description: "We set up unit tests to be automatically run whenever code is committed or merged into the repository."
        },
        {
          name: "Integration Testing",
          description: "We automate integration tests to ensure that the components work well together."
        },
        {
          name: "Performance and Load Testing",
          description: "We automate performance tests to ensure that the application can handle production-like traffic."
        },
        {
          name: "Security Testing",
          description: "We include automated security checks such as static code analysis and vulnerability scanning."
        }
      ],
      imagePosition: "right",
      imageSrc: "https://imgs.search.brave.com/I4JkG1BcFO6xGFd0bFPACM_WtiwFiWF4cDvL9ZwoXOs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG91ZC13aXRo/LW1vZGVsLWNvbXB1/dGVyLXdpdGgtd29y/ZC1tYXJrZXQtaXRf/OTAxMDAzLTQ2OTMu/anBnP3NlbXQ9YWlz/X2h5YnJpZA",
    },
    {
      title: "Monitoring and Reporting",
      description:
        "We provide visibility and insights into your pipeline performance.",
      icon: icons.monitor,
      services: [
        {
          name: "Build and Test Results",
          description: "We configure the pipeline to provide developers and stakeholders with real-time feedback on build successes, failures, and test results."
        },
        {
          name: "Pipeline Monitoring",
          description: "We set up monitoring and alerts to notify the team if any stage of the pipeline fails or experiences issues, ensuring quick remediation."
        },
        {
          name: "Dashboards",
          description: "We provide real-time dashboards to monitor key metrics such as build success rate, deployment frequency, and lead time for changes."
        }
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Optimizing the CI/CD Pipeline",
      description:
        "We ensure your pipeline is efficient, fast, and reliable.",
      icon: icons.optimize,
      services: [
        {
          name: "Pipeline Efficiency",
          description: "We continuously optimize the pipeline to ensure that build times and testing times are as fast as possible, removing any bottlenecks."
        },
        {
          name: "Parallelism",
          description: "We implement parallel testing and deployment processes to speed up the pipeline."
        },
        {
          name: "Versioning and Rollbacks",
          description: "We ensure version control and rollback capabilities are in place to manage code releases efficiently."
        }
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    },
    {
      title: "Training and Knowledge Transfer",
      description:
        "We empower your team to own and operate the CI/CD pipeline.",
      icon: icons.training,
      services: [
        {
          name: "Documentation",
          description: "We provide detailed documentation of the implemented CI/CD pipeline for your development and operations teams."
        },
        {
          name: "Training Sessions",
          description: "We train your developers and operations teams on how to use the CI/CD pipeline, manage deployments, troubleshoot issues, and optimize processes."
        },
        {
          name: "Best Practices",
          description: "We educate the team on DevOps best practices, such as versioning, environment consistency, and error handling."
        }
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1374&auto=format&fit=crop",
    },
    {
      title: "Continuous Improvement",
      description:
        "We help you continuously evolve and enhance your pipeline.",
      icon: icons.improve,
      services: [
        {
          name: "Feedback Loops",
          description: "We establish a feedback loop to continuously improve the pipeline, monitoring deployment performance and addressing issues."
        },
        {
          name: "Agile Iterations",
          description: "We implement an iterative approach to continuously refine and enhance the pipeline as your needs evolve."
        }
      ],
      imagePosition: "right",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Cost Optimization",
      description:
        "We help you optimize your infrastructure and cloud costs.",
      icon: icons.cost,
      services: [
        {
          name: "Infrastructure as Code (IaC)",
          description: "We help reduce costs by implementing Infrastructure as Code using tools like Terraform, AWS CloudFormation, or Azure Resource Manager."
        },
        {
          name: "Cloud Cost Management",
          description: "We help optimize cloud resources, ensuring you only pay for what you need and avoid over-provisioning."
        }
      ],
      imagePosition: "left",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <div className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">DevOps & Automation: CI/CD Pipeline Implementation</h1>
          <p className="text-xl max-w-3xl">
            <strong>Nixsoft Technologies</strong> helps its clients with DevOps and automation, specifically focusing on implementing CI/CD pipelines, by offering a structured approach that ensures efficiency, collaboration, and faster software delivery.
          </p>
        </div>
      </div>

      {/* Service Sections */}
      {servicesData.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          services={service.services}
          imagePosition={service.imagePosition}
          imageSrc={service.imageSrc}
        />
      ))}

      {/* Back to top button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;