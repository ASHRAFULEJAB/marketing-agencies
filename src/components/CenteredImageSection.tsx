// components/CenteredVideoSection.js
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const CenteredVideoSection = () => {
  return (
    <div className="relative bg-white">
      {/* Background Design */}
      {/* <div className="absolute inset-0 h-2/3 bg-pink-50 z-0" /> */}

      {/* Video Section */}
      <div className="relative max-w-7xl mx-auto text-center  z-10">
        <div className="relative inline-block">
          {/* Video Embed */}
          {/* <div className="overflow-hidden">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-full shadow-lg border border-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-4.23 2.3a.75.75 0 01-1.122-.65v-4.6a.75.75 0 011.122-.65l4.23 2.3a.75.75 0 010 1.3z"
                />
              </svg>
            </div>
          </div> */}
        </div>
      </div>

      {/* Text and Social Icons Section */}
      <div className="relative bg-pink-50 py-16 text-center z-10">
        <h3 className="text-xs uppercase text-gray-600 tracking-wider mb-2">
          Find Out More
        </h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Save <span className="text-red-500">Time & Effort</span> with the{" "}
          <br />
          Rising Phinix SEO team
        </h2>
        <p className="italic text-lg text-gray-600 mb-8">
          Come and see what we’re up to.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-900 hover:text-red-500">
            <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full">
              <FaFacebookF className="text-xl" />
            </div>
          </a>
          <a href="#" className="text-gray-900 hover:text-red-500">
            <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full">
              <FaTwitter className="text-xl" />
            </div>
          </a>
          <a href="#" className="text-gray-900 hover:text-red-500">
            <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full">
              <FaLinkedinIn className="text-xl" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CenteredVideoSection;
