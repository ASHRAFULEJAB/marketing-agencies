import React from "react";
import Image from "next/image";
import BusinessImage from "../../assets/images/makebusiness.jpg"; // Update with your actual image path

const BusinessSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-16 py-12 bg-white">
      {/* Text Content */}
      <div className="lg:w-1/2 w-full lg:pr-16">
        <h2 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
          Find Out More
        </h2>
        <h1 className="text-5xl font-bold leading-tight mb-4">
          What we can do for <br /> your business
        </h1>
        <p className="text-gray-600 italic text-lg leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          <strong>Et ullum iisque</strong> conclusionemque eam,
          <strong>mel ad erat</strong> vitae accumsan noluisse, nostrum accumsan
          movet salutandi. Fugit expetenda interesset no his, nec eloquentiam
          proin eu. Sea id malorum dolores sapientem, saepe.
        </p>
        <a
          href="#"
          className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded hover:bg-black transition-colors"
        >
          Contact Us
        </a>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
        <Image
          src={BusinessImage}
          alt="Business Discussion"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default BusinessSection;
