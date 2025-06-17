import React from "react";
import HeroSection from "./HeroSection";
import AnnouncementBar from "./AnnouncementBar";
import WelcomeSection from "./WelcomeSection";
import PrincipalSection from "./PrincipalSection";
import FacilitiesSection from "./FacilitiesSection";
import StudentPlacementsCarousel from "./StudentPlacementsCarousel";
import EventsSection from "./EventsSection";
import QuickLinksSection from "./QuickLinksSection";
import ContactSection from "./ContactSection";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative">
      <HeroSection onNavigate={onNavigate} />
      <AnnouncementBar />
      <WelcomeSection />
      <PrincipalSection />
      <FacilitiesSection />
      <StudentPlacementsCarousel />
      <EventsSection />
      <QuickLinksSection onNavigate={onNavigate} />
      <ContactSection />
    </div>
  );
};

export default Hero;
