import React from "react";
import Image from "next/image";
import SeoIcon from "../../assets/images/seoconsultancy.png";
import CompetitorIcon from "../../assets/images/competitor.png";
import SocialMarketingIcon from "../../assets/images/socialmarketing.png";
import ReportingIcon from "../../assets/images/reportying.png";
import GraphicDesignIcon from "../../assets/images/graphicDesign.png";
import WebDesignIcon from "../../assets/images/webdesign.png";
import DevelopmentIcon from "../../assets/images/webdevelopment.png";
import MotionGraphicsIcon from "../../assets/images/reportying.png";

const services = [
  {
    icon: SeoIcon,
    title: "SEO Consultancy",
    description:
      "Expert guidance to improve your search engine rankings and drive more traffic to your site.",
  },
  {
    icon: CompetitorIcon,
    title: "Competitor Analysis",
    description:
      "In-depth analysis of your competitors to help you stay ahead in the market.",
  },
  {
    icon: SocialMarketingIcon,
    title: "Social Marketing",
    description:
      "Strategic social media campaigns to enhance your brand presence and engage with your audience.",
  },
  {
    icon: ReportingIcon,
    title: "Reporting & Analysis",
    description:
      "Detailed reports and analytics to measure performance and optimize your marketing strategies.",
  },
  {
    icon: GraphicDesignIcon,
    title: "Graphic Design",
    description:
      "Creative and visually appealing designs that represent your brand effectively.",
  },
  {
    icon: WebDesignIcon,
    title: "Web Design",
    description:
      "Responsive and user-friendly website designs that provide an excellent user experience.",
  },
  {
    icon: DevelopmentIcon,
    title: "Development",
    description:
      "Custom web and app development solutions tailored to your business needs.",
  },
  {
    icon: MotionGraphicsIcon,
    title: "Motion Graphics",
    description:
      "Engaging motion graphics to capture your audience's attention and convey your message effectively.",
  },
];


const OurServicesSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="rounded-full  p-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
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

export default OurServicesSection;
