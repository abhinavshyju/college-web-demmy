import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import AdministrationSection from "./components/AdministrationSection";
import AcademicsSection from "./components/AcademicsSection";
import AdmissionsSection from "./components/AdmissionsSection";
import ResearchSection from "./components/ResearchSection";
import StudentLifeSection from "./components/StudentLifeSection";
import AlumniSection from "./components/AlumniSection";
import InformationSection from "./components/InformationSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "administration":
        return <AdministrationSection />;
      case "academics":
        return <AcademicsSection />;
      case "admissions":
        return <AdmissionsSection />;
      case "research":
        return <ResearchSection />;
      case "student-life":
        return <StudentLifeSection />;
      case "alumni":
        return <AlumniSection />;
      case "information":
        return <InformationSection />;
      case "gallery":
        return <GallerySection />;
      case "contact":
        return <ContactSection />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main>{renderSection()}</main>
      <Footer onNavigate={setActiveSection} />
    </div>
  );
}

export default App;
