import MainContent from "./MainContent";
import Navbar from "../shared/Navbar";
import SideButtons from "./SideButtons";
import TopBar from "./TopBar";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <MainContent />
      {/* <SideButtons /> */}
    </div>
  );
};

export default HomePage;
