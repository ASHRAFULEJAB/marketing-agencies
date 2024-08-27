// components/FooterSection.js
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
// import { Link } from "react-router-dom"; // Remove if not using react-router
import Logo from "../../assets/images/lock.png"; // Replace with your logo path
import Link from "next/link";
import Image from "next/image";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3">
              <div className="bg-black rounded-full p-2 flex items-center justify-center w-8 h-8">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div className="text-2xl font-serif">Rising Phoenix</div>
            </div>
            <p className="text-gray-400">
              Leading provider of innovative solutions, delivering excellence
              and value to our customers worldwide.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Resources</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/support"
                  className="hover:text-white transition-colors duration-200"
                >
                  Support
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Contact Us
            </h3>
            <ul>
              <li className="mb-2">
                <span className="hover:text-white transition-colors duration-200">
                  1234 Street Name, City, Country
                </span>
              </li>
              <li className="mb-2">
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="mailto:info@company.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@Rising-Phoenix.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Rising Phoenix. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
