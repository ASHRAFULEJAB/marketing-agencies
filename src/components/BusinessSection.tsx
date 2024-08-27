import React from "react";
import Image from "next/image";
import IllustrationImage from "../assets/images/businessbanner.png"; // Replace with your actual image path

const BusinessSection = () => {
  const progressBars = [
    { label: "Successful Projects", value: 48 },
    { label: "Happy Quantum Users", value: 59 },
    { label: "Digital Products", value: 82 },
    { label: "SEO Analysis", value: 73 },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-16 lg:px-16 py-12 bg-white">
      {/* Text Content with Progress Bars */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
          Functional
        </h2>
        <h1 className="text-5xl font-bold leading-tight mb-4">
          What we can do for your{" "}
          <span className="text-orange-500">business</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Duis augue dolor sit amet metus auctor lacinia.
        </p>
        {progressBars.map((bar, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-lg">{bar.label}</span>
              <span className="font-semibold text-lg">{bar.value}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 relative">
              <div
                className="h-2 bg-orange-500 absolute left-0 top-0"
                style={{ width: `${bar.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Illustration */}
      <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <Image
          src={IllustrationImage}
          alt="Illustration"
          className="w-full max-w-md lg:max-w-none lg:w-auto"
          height={400}
          width={500}
        />
      </div>
    </div>
  );
};

export default BusinessSection;
