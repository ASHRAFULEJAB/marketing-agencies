import React from "react";
import Image from "next/image";
import ProductImage from "../../assets/images/betterProducts.jpg"; // Update with your actual image path

const ProductSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-16 py-12 bg-white">
      {/* Image Section */}
      <div className="lg:w-1/2 w-full">
        <Image
          src={ProductImage}
          alt="Product Development"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2 w-full lg:pl-16 mt-8 lg:mt-0">
        <h2 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
          We Make Digital
        </h2>
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Make better products <br /> make products better
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Etiam hendrerit tortor blandit quam varius vitae.
        </p>
        <ul className="list-none space-y-4 mb-6">
          <li className="flex items-start">
            <span className="text-orange-500 font-bold mr-2">✓</span>
            <p>
              Donec quis et egestas sapien in placerat nam tristique metus
              facilisis viverra tortor nec ligula.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 font-bold mr-2">✓</span>
            <p>
              Dolor sed maecenas quis faucibus justo, nibh ultricies praesent
              justo dolor, dignissim cursus.
            </p>
          </li>
        </ul>
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

export default ProductSection;
