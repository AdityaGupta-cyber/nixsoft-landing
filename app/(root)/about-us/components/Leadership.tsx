import React from "react";
import ProfileCard from "./ProfileCard";
const LeadershipTeamSection = () => {
  // Sample team data - this could come from props or an API
  const teamMembers = [
    {
      id: 1,
      profilePicture: "/api/placeholder/400/500",
      name: "David Mitchell",
      position: "CEO & Founder",
      bio: "With 15+ years of technology leadership experience, David leads our vision and strategy.",
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      profilePicture: "/api/placeholder/400/500",
      name: "Sarah Johnson",
      position: "CTO",
      bio: "A technical innovator with expertise in emerging technologies and solution architecture.",
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      profilePicture: "/api/placeholder/400/500",
      name: "Michael Chen",
      position: "Head of Operations",
      bio: "Drives operational excellence and ensures seamless project delivery.",
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Leadership Team
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <ProfileCard
              key={member.id}
              profilePicture={member.profilePicture}
              name={member.name}
              position={member.position}
              bio={member.bio}
              linkedinUrl={member.linkedinUrl}
              twitterUrl={member.twitterUrl}
              githubUrl={member.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeamSection;
