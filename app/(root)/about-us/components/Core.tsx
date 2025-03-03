import React from "react";
import { LightbulbIcon, HandshakeIcon, RocketIcon } from "lucide-react";
import Card from "./Card";

const CoreValuesSection = () => {
  const values = [
    {
      icon: <LightbulbIcon className="h-8 w-8 text-blue-500" />,
      heading: "Innovation",
      paragraphText:
        "We constantly push boundaries to deliver cutting-edge solutions that drive business growth.",
    },
    {
      icon: <HandshakeIcon className="h-8 w-8 text-blue-500" />,
      heading: "Partnership",
      paragraphText:
        "We build lasting relationships with our clients, working together to achieve shared success.",
    },
    {
      icon: <RocketIcon className="h-8 w-8 text-blue-500" />,
      heading: "Excellence",
      paragraphText:
        "We maintain the highest standards in everything we do, from code quality to client service.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Our Core Values
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              icon={value.icon}
              heading={value.heading}
              paragraphText={value.paragraphText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
