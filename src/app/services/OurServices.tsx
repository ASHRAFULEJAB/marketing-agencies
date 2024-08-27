import React from "react";
import ourServiceHeroImage from '../../assets/images/ourservicesbanner.jpg'
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[75vh]">
      {/* Background Image */}
      <Image
        src={ourServiceHeroImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="z-[-1]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4">
          <h2 className="text-sm text-white uppercase tracking-widest mb-2">
            What We Offer
          </h2>
          <h1 className="text-4xl lg:text-4xl font-bold text-white leading-tight">
            We provide new identities, develop brands and <br /> launch websites for
            businesses
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
