import React from "react";
import {
  FaQuestionCircle,
  FaMapMarkerAlt,
  FaCommentDots,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-black text-white text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        {/* Left Side - FAQ and Address */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <span className="flex items-center space-x-1">
            <FaQuestionCircle />
            <span>FAQ</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaMapMarkerAlt />
            <span>The Yard, 85 Delancey Street, New York</span>
          </span>
        </div>

        {/* Right Side - Email, Phone, and Social Icons */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <span className="flex items-center space-x-1">
            <FaCommentDots />
            <span>borgholm@qodeinteractive.com</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaPhoneAlt />
            <span>444 77 0000</span>
          </span>
          <div className="flex space-x-2">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
