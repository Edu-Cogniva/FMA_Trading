import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
// import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
// import ProductsSection from "../components/ProductsSection";
import ContactSection from "../components/ContactSection";
import CertificationsSection from "../components/CertificationsSection";
import GlobalPresenceSection from "../components/GlobalPresenceSection";
// import Footer from "../components/Footer";
import PackagingOptions from "../components/PackagingOptions";
import Reasons from "../components/Reasons";
const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      {/* <AboutSection /> */}
      <ServicesSection />
      {/* <ProductsSection /> */}
      <PackagingOptions />
      <Reasons />
      <ContactSection />
      <CertificationsSection />
      <GlobalPresenceSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
