// components/ServicesSection.js
import React from "react";
import Image from "next/image";
import SeoImage from "../../assets/images/seoconsultancy.png";
import CompetitorAnalysisImage from "../../assets/images/competitor.png";
import SocialMarketingImage from "../../assets/images/socialmarketing.png";
import ReportingAnalysisImage from "../../assets/images/reportying.png";

const services = [
  {
    icon: SeoImage,
    title: "SEO Consultancy",
    description: "Etiam vel placerat enim dapibus varius massa sodales lacinia",
  },
  {
    icon: CompetitorAnalysisImage,
    title: "Competitor Analysis",
    description: "Etiam vel placerat enim dapibus varius massa sodales lacinia",
  },
  {
    icon: SocialMarketingImage,
    title: "Social Marketing",
    description: "Etiam vel placerat enim dapibus varius massa sodales lacinia",
  },
  {
    icon: ReportingAnalysisImage,
    title: "Reporting & Analysis",
    description: "Etiam vel placerat enim dapibus varius massa sodales lacinia",
  },
];

const ServicesSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="rounded-full   p-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={70}
                    height={50}
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
