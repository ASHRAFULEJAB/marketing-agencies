// components/FeatureSection.js
import React from "react";
import Image from "next/image";
import IllustrationImage from "../../assets/images/featureBanner.png"; // Adjust the path to your actual image
const FeatureSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-12 bg-white overflow-hidden">
      {/* Illustration */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-start overflow-hidden">
        <Image
          src={IllustrationImage}
          alt="Illustration"
          className="w-full max-w-md lg:max-w-none lg:w-auto lg:ml-16"
          height={500}
          width={500}
          priority={true} // Load this image with higher priority
        />
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-16">
        <h2 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
          Functional
        </h2>
        <h1 className="text-5xl font-bold leading-tight mb-4">
          New <span className="text-orange-500">features</span> that enhance
          businesses
        </h1>
        <p className="italic text-gray-600 mb-6">
          Etiam hendrerit tortor blandit quam varius vitae.
        </p>
        <ul className="list-none space-y-4 text-gray-600">
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">✔</span>
            Donec quis et egestas sapien in placerat nam tristique metus facilisis viverra tortor nec ligula.
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">✔</span>
            Imperdiet eget tellus, ut pulvinar dui. Sed nec pretium purus fusce pharetra nibh.
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">✔</span>
            Dolor sed maecenas quis faucibus justo, nibh ultricies praesent justo dolor, dignissim cursus.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FeatureSection;
