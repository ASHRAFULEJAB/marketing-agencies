import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// Sample images import; replace these with your actual images
import Image1 from "../../assets/images/teammember1.jpg";
import Image2 from "../../assets/images/teammember2.jpg";
import Image3 from "../../assets/images/teammember3.jpg";
import Image4 from "../../assets/images/teammember4.jpg";
import Image5 from "../../assets/images/teammember5.jpg";
import Image6 from "../../assets/images/teammember6.jpg";
import Image7 from "../../assets/images/teammember7.jpg";
import Image8 from "../../assets/images/ashraful.jpg";

const teamMembers = [
  { id: 1, src: Image1, name: "Robert Stowe", title: "Manager" },
  { id: 2, src: Image2, name: "Alice Johnson", title: "Designer" },
  { id: 3, src: Image3, name: "Mark Smith", title: "Developer" },
  { id: 4, src: Image4, name: "Susan Brown", title: "CEO" },
  { id: 5, src: Image5, name: "David Wilson", title: "Analyst" },
  { id: 6, src: Image6, name: "Emily Davis", title: "Marketing" },
  { id: 7, src: Image7, name: "Michael Scott", title: "Developer" },
  { id: 8, src: Image8, name: "Ashraful Islam", title: "Product Manager" },
];

const TeamGridSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="relative group">
              <Image
                src={member.src}
                alt={member.name}
                layout="responsive"
                objectFit="cover"
                quality={100}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-white bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg">
                <h3 className="text-xl font-serif">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.title}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl italic mb-6">
            Our team is committed to delivering excellence in every project we
            undertake, and we believe in the power <br /> of collaboration and
            innovation to drive success.
          </p>
          <a
            href="#"
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded hover:bg-black transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
      {/* Text and Button Section */}
    </div>
  );
};

export default TeamGridSection;
