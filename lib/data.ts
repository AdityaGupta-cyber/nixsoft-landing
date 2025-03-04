// src/data/companyData.ts
export interface JobListing {
  location: string;
  title: string;
  description: string;
}

export const aboutContent = `Nixsoft Technologies: Pioneering Digital Transformation through Open Source Innovation. At the heart of our mission lies a commitment to empowering organizations with cutting-edge technological solutions that transcend traditional boundaries. Our expertise spans a comprehensive ecosystem of technologies, strategically positioned to deliver transformative outcomes through innovation, collaborative problem-solving, and deep technical mastery.
  
  We specialize in crafting bespoke digital strategies that address the unique challenges of modern enterprises. Our service portfolio encompasses Technology Integration, Cloud Architecture, Advanced DevOps Methodologies, Intelligent Data Center Management, Comprehensive Application Lifecycle Solutions, and Strategic IT Talent Augmentation. Each engagement is underpinned by our core open-source philosophy, ensuring flexible, scalable, and cost-effective implementations.
  
  Leveraging partnerships with leading open-source technology providers, we architect solutions using state-of-the-art frameworks like PostgreSQL, Elastic, Kubernetes, Kafka, MongoDB, and Ansible. Our approach integrates emerging technologies such as Machine Learning and Artificial Intelligence, enabling us to deliver sophisticated, future-ready solutions that drive operational excellence and sustainable enterprise growth.
  
  By bridging advanced technological capabilities with strategic insight, Nixsoft doesn't just provide services—we become catalysts for digital transformation, helping organizations navigate complex technological landscapes with confidence, agility, and innovation.`;

export const jobListings: JobListing[] = [
  {
    location: "Mumbai, India",
    title: "Manager Finance and Accounts",
    description:
      "We are seeking an experienced and detail-oriented Accounts Manager to lead our financial operations, ensuring robust financial planning, reporting, and strategic financial management.",
  },
  {
    location: "Mumbai, India",
    title: "L1 Kafka Administrator",
    description:
      "We are seeking a dedicated L1 Kafka Administrator to join our 24×7 managed services team. The ideal candidate will have strong expertise in Kafka cluster management and monitoring.",
  },
  {
    location: "Mumbai, India",
    title: "L2 Kafka Administrator",
    description:
      "We are looking for an experienced L2 Kafka Administrator to join our 24×7 managed services team, focusing on advanced Kafka cluster optimization and troubleshooting.",
  },
  {
    location: "Mumbai, India",
    title: "Senior Java Developer – Kafka Project",
    description:
      "We are seeking an experienced Senior Java Developer to join our team and lead the development of custom Kafka-based distributed streaming applications and microservices.",
  },
  {
    location: "Mumbai, India",
    title: "Elastic Solution Consultant",
    description:
      "Nixsoft is looking for talented and passionate professionals to be part of our Presales team, specializing in Elastic stack solutions and enterprise search technologies.",
  },
  {
    location: "Mumbai, India",
    title: "Enterprise Accounts Manager",
    description:
      "Inviting dynamic, smart, experienced software sales professionals to sell open-source software and services to large enterprise accounts with complex technological needs.",
  },
];

export const benefitsData = [
  {
    icon: "medical",
    title: "Comprehensive Medical Insurance",
    description:
      "We provide comprehensive medical insurance, ensuring you and your family receive top-notch healthcare and peace of mind, with extensive coverage and support.",
  },
  {
    icon: "flexible-work",
    title: "Flexible Working Options",
    description:
      "We promote work-life balance with flexible working options, allowing you to manage your professional and personal commitments effectively, including remote and hybrid work models.",
  },
  {
    icon: "training",
    title: "Continuous Learning & Development",
    description:
      "We offer continuous training and development opportunities, empowering you to advance your skills through workshops, certifications, conference sponsorships, and internal knowledge-sharing programs.",
  },
  {
    icon: "reward",
    title: "Performance Recognition Program",
    description:
      "We have a dynamic reward and recognition program that celebrates your successes, provides competitive compensation, performance bonuses, and clear career progression paths.",
  },
];

export const companyServices = [
  {
    title: "Technology Integration",
    description:
      "Seamless integration of cutting-edge technologies to enhance your existing infrastructure and business processes.",
    icon: "settings",
  },
  {
    title: "Cloud Consulting",
    description:
      "Strategic cloud adoption and migration services to optimize your digital transformation journey.",
    icon: "cloud",
  },
  {
    title: "DevOps Solutions",
    description:
      "Implementing advanced DevOps methodologies to improve efficiency, collaboration, and continuous delivery.",
    icon: "server",
  },
  {
    title: "Data Center Management",
    description:
      "Comprehensive management and optimization of data center infrastructure for maximum performance and reliability.",
    icon: "database",
  },
];

export const technologyPartners = [
  "PostgreSQL",
  "Elastic",
  "Kubernetes",
  "Kafka",
  "MongoDB",
  "Ansible",
];
