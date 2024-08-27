// components/SideButtons.js
import React from "react";

const SideButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4">
      <a
        href="#"
        className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition-colors"
      >
        Related
      </a>
      <a
        href="#"
        className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-orange-500 transition-colors"
      >
        Buy Now
      </a>
    </div>
  );
};

export default SideButtons;
