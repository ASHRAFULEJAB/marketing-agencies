import React from "react";
import TeamSection from "./TeamSection";
import TopBar from "@/components/home/TopBar";
import Navbar from "@/components/shared/Navbar";
import FooterSection from "@/components/shared/Footer";
import TeamGridSection from "./TeamGridSection";

const OurTeam = () => {
  return (
    <div>
      {" "}
      <TopBar />
      <Navbar />
      <TeamSection />
      <TeamGridSection />
      <FooterSection />
    </div>
  );
};

export default OurTeam;
