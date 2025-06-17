import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <div className="relative md:h-screen">
      {/* Background Layer with Vintage Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{
          backgroundImage: 'url("/college.jpg")',
          zIndex: 0,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-white h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                College of Applied Science,
                <span className="block ">Thamarassery</span>
              </h1>
              <p className="text-xl mb-8 ">
                Affiliated to Calicut University | Under IHRD Kerala
              </p>
              <p className="text-lg mb-8 text-blue-50 leading-relaxed">
                Empowering students with quality education in applied sciences,
                fostering innovation, research, and holistic development for a
                brighter future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate("admissions")}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate("about")}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
