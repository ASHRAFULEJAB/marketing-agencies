// components/MainContent.js
import React from "react";
import HomeBanner from "../../assets/images/homeBannner.png";
import Image from "next/image";

const MainContent = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-16 py-12
     bg-white">
      {/* Background Shape */}
      <div className="absolute inset-y-0 right-0 lg:w-1/2 w-full lg:h-full
       h-1/2 bg-gradient-to-l from-transparent via-white to-gray-100 
       transform translate-x-1/4 lg:translate-x-0 lg:skew-x-12 skew-x-6"></div>

      {/* Illustration */}
      <div className="relative lg:w-1/2 w-full flex justify-center lg:justify-start">
        <Image
          src={HomeBanner}
          alt="Illustration"
          className="w-full max-w-md lg:max-w-none lg:w-auto"
          height={400}
          width={500}
        />
      </div>

      {/* Text Content */}
      <div className="relative lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-16 z-10">
        <h2 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
          Methodology
        </h2>
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Everything  <br />about <span className="text-orange-500">Seo.</span>
        </h1>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          Morbi dictum est volutpat massa faucibus accumsan <br /> amet felis eget sem
          porttitor placerat quis rutrum.
        </p>
        <a
          href="#"
          className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded hover:bg-black transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default MainContent;
