import TopBar from "@/components/home/TopBar";
import FooterSection from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import HeroSection from "./OurServices";
import OurServicesSection from "./OurServicesSection";
import ProductSection from "./ProductSection";
import BusinessSection from "./BusinessSection";
import SubscribeSection from "./SubscribeSection";

const Services = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroSection />
      <OurServicesSection />
      <ProductSection />
      <BusinessSection />
      <SubscribeSection />
      <FooterSection />
    </div>
  );
};

export default Services;
