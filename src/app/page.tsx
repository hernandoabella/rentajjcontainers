import TopBar from "./components/TopBar"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import Hero from "./components/Hero";
import StorageContainer from "./components/StorageContainer";
import ModularContainers from "./components/ModularContainers";
import AboutUs from "./components/AboutUs";
import WhatWeProvide from "./components/WhatWeProvide";

export default function Home() {
  return (
    <div>
      <Whatsapp /> 
      <TopBar />
      <Header />
      <Hero />
      <AboutUs />
      <WhatWeProvide />
      <StorageContainer />
      <ModularContainers />
      <Footer />
    </div>
  );
}
