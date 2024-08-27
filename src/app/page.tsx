import BusinessSection from "@/components/BusinessSection";
import CenteredVideoSection from "@/components/CenteredImageSection";
import FeatureSection from "@/components/feature/FeatureSection";
import HomePage from "@/components/home/HomePage";
import LogoSection from "@/components/LogoSection";
import ServicesSection from "@/components/services/ServicesSection";
import FooterSection from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <HomePage />
      <ServicesSection />
      <FeatureSection />
      <CenteredVideoSection />
      <BusinessSection />
      <LogoSection />
      <FooterSection/>
    </>
  );
}
