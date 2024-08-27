import TopBar from "@/components/home/TopBar";
import PricingSection from "./PricingSection";
import Navbar from "@/components/shared/Navbar";
import FooterSection from "@/components/shared/Footer";
import AllPricesSection from "./AllPricesSection";

const PricingPlan = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <PricingSection />
      <AllPricesSection />
      <FooterSection />
    </div>
  );
};

export default PricingPlan;
