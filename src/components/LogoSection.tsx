import React from "react";
import Image from "next/image";

// Import your logo images
import Logo1 from "../assets/images/lock.png";
import Logo2 from "../assets/images/forest.png";
import Logo3 from "../assets/images/king.png";
import Logo4 from "../assets/images/roster.png";
import Logo5 from "../assets/images/mot.png";

const LogoSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex justify-center items-center lg:space-x-20">
          {/* Repeat for each logo */}
          <div className="flex-shrink-0">
            <Image src={Logo1} alt="Logo 1" height={80} width={150} />
          </div>
          <div className="flex-shrink-0">
            <Image src={Logo2} alt="Logo 2" height={80} width={150} />
          </div>
          <div className="flex-shrink-0">
            <Image src={Logo3} alt="Logo 3" height={80} width={150} />
          </div>
          <div className="flex-shrink-0">
            <Image src={Logo4} alt="Logo 4" height={80} width={150} />
          </div>
          <div className="flex-shrink-0">
            <Image src={Logo5} alt="Logo 5" height={80} width={150} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
