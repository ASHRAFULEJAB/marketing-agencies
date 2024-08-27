// components/GetInTouchSection.js
import React from "react";
import backgroundImage from "../../assets/images/contactheroImage.jpg"; // Ensure you import the background image
import Image from "next/image";

const GetInTouchSection = () => {
  return (
    <div className="relative h-[75vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Pricing Strategy"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h4 className="uppercase tracking-wide text-sm mb-2">Get in touch</h4>
        <h1 className="text-4xl font-bold leading-tight">
          We would like to meet you. Feel <br /> free to get in touch.
        </h1>
      </div>
    </div>
  );
};

export default GetInTouchSection;
