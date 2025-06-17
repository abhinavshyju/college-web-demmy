import React from "react";

interface QuickLinksSectionProps {
  onNavigate: (section: string) => void;
}

const QuickLinksSection: React.FC<QuickLinksSectionProps> = ({
  onNavigate,
}) => {
  const quickLinks = [
    {
      title: "Admissions",
      desc: "Apply for various programs",
      section: "admissions",
    },
    {
      title: "Academics",
      desc: "Course details & curriculum",
      section: "academics",
    },
    {
      title: "Student Life",
      desc: "Campus activities & facilities",
      section: "student-life",
    },
    {
      title: "Research",
      desc: "Research opportunities",
      section: "research",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((item, index) => (
            <div
              key={index}
              onClick={() => onNavigate(item.section)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer border-l-4 border-blue-600"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <div className="text-blue-600 font-medium">Learn More →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinksSection;
