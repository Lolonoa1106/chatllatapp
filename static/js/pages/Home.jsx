import { useEffect } from "react";
import SeoMeta from "../component/SeoMeta";
import ChainProtectionSection from "../sections/ChainProtectionSection";
import ClientBenefitsSection from "../sections/ClientBenefitsSection";
import FaqsSection from "../sections/FaqsSection";
import FeaturesSection from "../sections/FeaturesSection";
import FreelancerBenefitsSection from "../sections/FreelancerBenefitsSection";
import HeroSection from "../sections/HeroSection";
import IntegritySection from "../sections/IntegritySection";
import SolutionSection from "../sections/SolutionSection";
import TestimonialSection from "../sections/TestimonialSection";
import WordProcessSection from "../sections/WordProcessSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import chatllat from './../assets/images/general/chatllat.png'
import { useLocation } from "react-router-dom";

const Home = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const elementId = location.state.scrollTo;

      const scrollToElement = () => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Retry if element not yet mounted
          setTimeout(scrollToElement, 100);
        }
      };

      scrollToElement();
    }
  }, [location.state]);

  return(
    <>
        <SeoMeta
          title="Home | Chatllat Landing Page"
          description="Welcome to Chatllat, the secure Web3 freelance platform."
          image={chatllat}
        />
        <HeroSection />
        <SolutionSection />
        <ChainProtectionSection />
        <FeaturesSection />
        <WordProcessSection />
        <FreelancerBenefitsSection />
        <IntegritySection />
        <ClientBenefitsSection />
        <TestimonialSection />
        <FaqsSection />
    </>
  );
};

export default Home;
