import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const SubscribeSection = () => {
  return (
    <div className="bg-pink-100 py-16 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Want to write a new story?
        </h2>
        <div className="flex justify-center items-center space-x-2">
          <input
            type="email"
            placeholder="Add mail and Subscribe"
            className="border-b-2 border-black bg-transparent py-2 px-4 text-lg outline-none"
          />
          <button className="flex items-center space-x-2 text-black hover:text-gray-700">
            <FaPaperPlane className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
