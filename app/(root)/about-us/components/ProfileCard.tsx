import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

interface ProfileCardProps {
  profilePicture?: string;
  name: string;
  position: string;
  bio: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  githubUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  profilePicture,
  name,
  position,
  bio,
  linkedinUrl,
  twitterUrl,
  githubUrl,
}) => {
  return (
    <div className="max-w-md rounded-[10px] overflow-hidden shadow-lg bg-white p-6">
      <div className="flex flex-col">
        {/* Profile Picture */}
        <img
          src={profilePicture || "/api/placeholder/400/400"}
          alt={`${name}'s profile`}
          className="w-full h-80 object-cover object-center rounded-lg mb-4"
        />

        {/* Name */}
        <h1 className="text-4xl font-bold text-gray-800 mt-4">{name}</h1>

        {/* Position */}
        <h2 className="text-2xl font-semibold text-blue-600 mt-2">
          {position}
        </h2>

        {/* Bio */}
        <p className="text-xl text-gray-600 mt-4 mb-6">{bio}</p>

        {/* Social Media Links with Lucide Icons */}
        <div className="flex space-x-4 mt-2">
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 text-gray-400 hover:text-blue-600 transition-colors" />
            </a>
          )}

          {twitterUrl && (
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="w-8 h-8 text-gray-400 hover:text-blue-500 transition-colors" />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8 text-gray-400 hover:text-gray-800 transition-colors" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
