import React from "react";
import Image from 'next/image';

interface ServiceSectionProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 py-12">
      <div className="w-full lg:w-1/2 p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="w-full lg:w-1/2 p-6">
        <Image 
          src={imageSrc || "/api/placeholder/600/400"} 
          alt="Service illustration" 
          width={400} 
          height={300} 
          className="w-full h-full object-cover rounded-lg shadow-md" 
        />
      </div>
    </div>
  );
};

export default ServiceSection; 