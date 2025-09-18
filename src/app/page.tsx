import TopBar from "./components/TopBar"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import Hero from "./components/Hero";
import StorageContainer from "./components/StorageContainer";
import ModularContainers from "./components/ModularContainers";
import TrustedCompanies from "./components/TrustedCompanies";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <Whatsapp /> 
      <TopBar />
      <Header />
      <Hero />
      <AboutUs />
      <StorageContainer />
      <ModularContainers />
      <TrustedCompanies />
      <Footer />
    </div>
  );
}
