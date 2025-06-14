import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import CertificationsSection from "../components/CertificationsSection";
import GlobalPresenceSection from "../components/GlobalPresenceSection";
import PackagingOptions from "../components/PackagingOptions";
import Reasons from "../components/Reasons";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <PackagingOptions />
      <Reasons />
      <ContactSection />
      <CertificationsSection />
      <GlobalPresenceSection />
    </div>
  );
};

export default Home;
