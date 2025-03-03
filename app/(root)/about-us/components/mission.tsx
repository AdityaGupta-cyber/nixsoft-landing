import React from "react";

const MissionVision = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          {/* Mission Section */}
          <div className="flex items-start space-x-6 md:w-1/2">
            <div className="bg-blue-100 p-4 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative technology solutions that
                drive growth and success in the digital age.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex items-start space-x-6 md:w-1/2">
            <div className="bg-blue-100 p-4 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading technology partner for businesses, known for
                excellence, innovation, and transformative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
