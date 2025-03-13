// src/components/BenefitsSection.tsx
import React from "react";
import { ShieldCheck, FileIcon, BookOpenCheck, Trophy } from "lucide-react";
import { benefitsData } from "@/lib/data";

// Mapping icons to Lucide React icons
const IconMap = {
  medical: ShieldCheck,
  "flexible-work": FileIcon,
  training: BookOpenCheck,
  reward: Trophy,
};

const BenefitCard: React.FC<{
  icon: keyof typeof IconMap;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  const Icon = IconMap[icon];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-green-600" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Join Nixsoft
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon as keyof typeof IconMap}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
