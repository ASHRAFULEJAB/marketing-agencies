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
    description:
      "Expert guidance to improve your search engine visibility and drive organic traffic to your website.",
  },
  {
    icon: CompetitorAnalysisImage,
    title: "Competitor Analysis",
    description:
      "In-depth analysis of your competitors' strategies to help you stay ahead in the market.",
  },
  {
    icon: SocialMarketingImage,
    title: "Social Marketing",
    description:
      "Strategic social media campaigns designed to boost your brand presence and engagement.",
  },
  {
    icon: ReportingAnalysisImage,
    title: "Reporting & Analysis",
    description:
      "Comprehensive reports and analysis to measure the effectiveness of your marketing efforts.",
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
