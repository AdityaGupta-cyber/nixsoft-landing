import React from "react";
import ProfileCard from "./ProfileCard";

const LeadershipTeamSection = () => {
  // Sample team data - this could come from props or an API
  const teamMembers = [
    {
      id: 1,
      profilePicture: "wajid.jpg", //add profile picture from public folder
      name: "Wajid Shaikh",
      position: "Director",
      bio: "Shaikh Abdul Wajid has More than 20 years of experience in IT, Management and Consulting.",
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      profilePicture: "pravin.jpg", //add profile picture from public folder
      name: "Pravin Kore",
      position: "Director",
      bio: "Pravin is strategic and result oriented professional offering 15 plus years of experience with Open Source Technologies.",
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
      githubUrl: "https://github.com",
    }
  ];

  return (
    <div className="min-h-screen px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Leadership Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`flex justify-center ${
                teamMembers.length % 2 !== 0 && index === teamMembers.length - 1 
                  ? 'md:col-span-2' 
                  : ''
              }`}
            >
              <ProfileCard
                profilePicture={member.profilePicture}
                name={member.name}
                position={member.position}
                bio={member.bio}
                linkedinUrl={member.linkedinUrl}
                twitterUrl={member.twitterUrl}
                githubUrl={member.githubUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeamSection;