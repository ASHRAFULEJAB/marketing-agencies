"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-4 bg-white lg:px-16">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="bg-black rounded-full p-2 flex items-center justify-center w-8 h-8">
          <span className="text-white font-bold text-lg">R</span>
        </div>
        <div className="text-2xl font-serif">Rising Phoenix</div>
      </div>

      {/* Desktop Navigation Links */}
      <ul
        className={`hidden lg:flex space-x-8 text-sm font-semibold tracking-wide`}
      >
        <li>
          <a href="/" className="text-orange-500 flex items-center space-x-1">
            <span>HOME</span>
          </a>
        </li>
        <li>
          <a href="services" className="hover:text-gray-800">
            OUR SERVICES
          </a>
        </li>
        <li>
          <a href="team" className="hover:text-gray-800">
            OUR TEAM
          </a>
        </li>
        <li>
          <a href="prices" className="hover:text-gray-800">
            PRICING PLAN
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-800">
            CONTACT US
          </a>
        </li>
      </ul>

      {/* Mobile Navigation Icons */}
      <div className="lg:hidden flex space-x-6 text-xl">
        <FaSearch className="cursor-pointer hover:text-gray-800" />
        <div onClick={toggleMenu}>
          <HiOutlineMenuAlt3 className="cursor-pointer hover:text-gray-800" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-white shadow-md z-50">
          <div className="flex justify-between items-center px-4 py-4 bg-white">
            <div className="flex items-center space-x-3">
              <div className="bg-black rounded-full p-2 flex items-center justify-center w-8 h-8">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div className="text-2xl font-serif">Rising Phoenix</div>
            </div>
            <HiOutlineX
              className="cursor-pointer text-xl hover:text-gray-800"
              onClick={toggleMenu}
            />
          </div>
          <ul className="flex flex-col items-center space-y-4 py-6 text-sm font-semibold">
            <li>
              <a href="#" className="text-orange-500" onClick={toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800" onClick={toggleMenu}>
                OUR SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800" onClick={toggleMenu}>
                OUR TEAM
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800" onClick={toggleMenu}>
                PRICING PLAN
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800" onClick={toggleMenu}>
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
