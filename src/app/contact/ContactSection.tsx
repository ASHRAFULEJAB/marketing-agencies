// components/ContactSection.js
import React from "react";

const ContactSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div>
        <h3 className="text-sm uppercase text-gray-500 tracking-wide mb-4">
          Contact
        </h3>
        <h1 className="text-4xl font-bold mb-4">
          Excited about the project? <br /> Please{" "}
          <span className="text-orange-500">get in touch.</span>
        </h1>
        <p className="text-gray-500 mb-8">
          We are eager to discuss your project ideas, answer your questions, and
          explore potential collaborations.
        </p>

        <div className="mb-6">
          <h4 className="uppercase text-xs text-gray-500 mb-2">
            Contact Address
          </h4>
          <p>36 East 20th Street, 6th Floor</p>
        </div>

        <div className="mb-6">
          <h4 className="uppercase text-xs text-gray-500 mb-2">
            General Inquiries
          </h4>
          <p>info@Rising-Phoenix.com</p>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-orange-500">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full">
              <i className="fab fa-facebook-f">F</i>
            </div>
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full">
              <i className="fab fa-twitter">T</i>
            </div>
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full">
              <i className="fab fa-linkedin-in">L</i>
            </div>
          </a>
        </div>
      </div>

      {/* Right Section - Form */}
      <div>
        <h3 className="text-sm uppercase text-gray-500 tracking-wide mb-4">
          Top in Festival: Commercial Award
        </h3>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email*"
              required
              className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Phone*"
              required
              className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-orange-600 focus:bg-orange-700 focus:outline-none focus:ring-0 active:bg-orange-800 transition duration-150 ease-in-out"
          >
            Contact Us
            <span className="ml-2">
              <i className="fas fa-arrow-right">→</i>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
