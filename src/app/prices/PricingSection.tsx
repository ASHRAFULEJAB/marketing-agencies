import React from "react";
import Image from "next/image";
import BackgroundImage from "../../assets/images/pricingHeroBanner.jpg"; // Update with correct path

const PricingSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={BackgroundImage}
        alt="Pricing Strategy"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h4 className="uppercase tracking-wide text-sm mb-2">
          Make Your Pricing Plan
        </h4>
        <h1 className="text-4xl font-bold leading-tight">
          Specific pricing strategy in order to maximize profits in business
        </h1>
      </div>
    </div>
  );
};

export default PricingSection;
