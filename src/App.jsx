import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import NavBar from "./components/NavBar";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";
import CustomCursor from "./components/CustomCursor";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FAQSection from "./sections/FAQSection";
import FooterSection from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 0.5,
      effects: true,
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <main>
      <Preloader />
      <CustomCursor />
      <NavBar />
      <BackToTop />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <BenefitSection />
          <TestimonialSection />
          <FAQSection />
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
