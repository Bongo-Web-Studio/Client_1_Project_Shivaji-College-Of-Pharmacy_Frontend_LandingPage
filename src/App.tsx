import CarouselComponent from "./Landing/Components/CarouselComponent";

import AboutUsSection from "./Landing/Secttion/AboutUsSection";
import CircularSection from "./Landing/Secttion/CircularSection";
import ContactSection from "./Landing/Secttion/ContactSection";
import EventsSection from "./Landing/Secttion/EventsSection";
import FooterSection from "./Landing/Secttion/FooterSection";
import HeroSection from "./Landing/Secttion/HeroSection";
import MarqueeSection from "./Landing/Secttion/MarqueeSection";
import NavbarSection from "./Landing/Secttion/NavbarSection";
import NewsSection from "./Landing/Secttion/NewsSection";
import NoticeSection from "./Landing/Secttion/NoticeSection";
import OurFacilitiesSection from "./Landing/Secttion/OurFacilitiesSection";
import OurProgramsSection from "./Landing/Secttion/OurProgramsSection";
import WhyChooseUsSection from "./Landing/Secttion/WhyChooseUsSection";

export default function App() {
  return (
    <div className="w-full h-full overflow-hidden  relative">
      <NavbarSection />
      <HeroSection />
      <CarouselComponent />
      <MarqueeSection />
      <AboutUsSection />
      <CircularSection />
      <NewsSection />
      <NoticeSection />
      <OurFacilitiesSection/>
      <OurProgramsSection/>
      <WhyChooseUsSection/>
      <EventsSection/>
      <ContactSection/>
      <FooterSection />
    </div>
  );
}
