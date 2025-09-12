import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Organizations from "../components/Organizations";
import Footer from "../components/Footer";
import WhatWeDoSection from "../components/WhatWeDo";
import ImpactSection from "../components/ImpactSection";
import HowItWorks from "../components/HowItWorks";
import AgenticSection from "../components/AgenticSection";
import LLMsSection from "../components/LLMsSection";
import ArchitectureSection from "../components/ArchitectureSection";
import IntegrationsSection from "../components/IntegrationsSection";
import FeaturesSection from "../components/FeaturesSection";
import FaqSection from "../components/FaqSection";
import AboutUsSection from "../components/AboutUsSection";
import BlogsSection from "../components/BlogsSection";
import ContactUs from "../components/ContactUs";

const Home = () => {
 return (
  <>
   <Navbar />
   <Hero />
   <Organizations />
   <WhatWeDoSection />
   <ImpactSection />
   <HowItWorks />
   <AgenticSection />
   <LLMsSection />
   <ArchitectureSection />
   <IntegrationsSection />
   <FeaturesSection />
   <FaqSection />
   <AboutUsSection />
   <BlogsSection />
   <ContactUs />
   <Footer />
  </>
 );
};

export default Home;
