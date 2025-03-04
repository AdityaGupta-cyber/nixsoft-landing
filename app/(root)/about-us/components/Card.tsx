import React from "react";

interface CardProps {
  icon: React.ReactNode;
  heading: string;
  paragraphText: string;
}

const Card: React.FC<CardProps> = ({ icon, heading, paragraphText }) => {
  return (
    <div className="max-w-md bg-white rounded-lg shadow-lg p-8 m-4">
      <div className="flex flex-col items-start">
        <div className="bg-blue-100 p-4 rounded-full mb-6">{icon}</div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">{heading}</h2>

        <p className="text-lg text-gray-600">{paragraphText}</p>
      </div>
    </div>
  );
};

export default Card;
