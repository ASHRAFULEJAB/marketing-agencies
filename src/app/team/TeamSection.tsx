import React from "react";
import Image from "next/image";
import BackgroundImage from "../../assets/images/ourteamHero.jpg"; // Replace with your image path

const TeamSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={BackgroundImage}
        alt="Team Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h4 className="text-white text-sm uppercase tracking-wide mb-4">
          Our Awesome Team
        </h4>
        <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight">
          Since joining Borgholm, we’ve grown the division into a team that
          covers everything
        </h1>
      </div>
    </div>
  );
};

export default TeamSection;
