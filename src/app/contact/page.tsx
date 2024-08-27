import TopBar from "@/components/home/TopBar";
import FooterSection from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import GetInTouchSection from "./GetInTouchSection";
import ContactSection from "./ContactSection";

const ContactPage = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <GetInTouchSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default ContactPage;
