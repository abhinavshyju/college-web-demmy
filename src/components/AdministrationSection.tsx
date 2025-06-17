import React, { useState } from "react";
import { Mail, Phone, User, Award, GraduationCap } from "lucide-react";

const AdministrationSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("principal");

  const categories = [
    { id: "principal", label: "Principal" },
    { id: "hods", label: "Heads of Departments" },
    { id: "faculty", label: "Faculty Members" },
    { id: "support", label: "Support Staff" },
    { id: "admin", label: "Administrative Staff" },
  ];

  const staffData = {
    principal: [
      {
        name: "Dr. Radhika KM",
        position: "Principal",
        qualification: "Ph.D. English",
        experience: "25 years",
        email: "principal@casthamarassery.ac.in",
        phone: "+91-495-2244567",
        achievements: [
          "Published 45+ research papers in international journals",
          "Recipient of Best Teacher Award 2020",
          "Former Dean, Faculty of Science, Calicut University",
        ],
        image: "/princi.jpeg",
      },
    ],
    hods: [
      {
        name: "Dr. Priya Nair",
        position: "Head, Department of Computer Science",
        qualification: "Ph.D. Computer Science, M.Tech CSE",
        experience: "18 years",
        email: "hod.cs@casthamarassery.ac.in",
        phone: "+91-495-2244568",
        achievements: [
          "Expert in Machine Learning and AI",
          "30+ publications in IEEE journals",
          "Principal Investigator of 3 funded projects",
        ],
        image:
          "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      },
      {
        name: "Dr. Suresh Menon",
        position: "Head, Department of Electronics",
        qualification: "Ph.D. Electronics, M.Tech Electronics",
        experience: "20 years",
        email: "hod.ece@casthamarassery.ac.in",
        phone: "+91-495-2244569",
        achievements: [
          "Specialist in VLSI Design",
          "IEEE Senior Member",
          "Consultant for various industries",
        ],
        image:
          "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      },
    ],
    faculty: [
      {
        name: "Dr. Anjali Sharma",
        position: "Associate Professor, Mathematics",
        qualification: "Ph.D. Mathematics, M.Sc. Mathematics",
        experience: "15 years",
        email: "anjali.math@casthamarassery.ac.in",
        phone: "+91-495-2244570",
        achievements: [
          "Research in Applied Mathematics",
          "25+ research publications",
          "Member of Indian Mathematical Society",
        ],
        image:
          "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
      },
      {
        name: "Prof. Ravi Kumar",
        position: "Assistant Professor, Physics",
        qualification: "M.Phil. Physics, M.Sc. Physics",
        experience: "12 years",
        email: "ravi.physics@casthamarassery.ac.in",
        phone: "+91-495-2244571",
        achievements: [
          "Expert in Quantum Physics",
          "Published 15+ research papers",
          "Young Scientist Award recipient",
        ],
        image:
          "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg",
      },
    ],
  };

  const renderStaffCards = () => {
    const staff = staffData[selectedCategory as keyof typeof staffData] || [];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((person, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={person.image}
                alt={person.name}
                className="w-full object-cover object-top aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {person.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-3">
                {person.position}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span>{person.qualification}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <User className="h-4 w-4 mr-2" />
                  <span>Experience: {person.experience}</span>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center text-gray-600 text-sm">
                  <Mail className="h-4 w-4 mr-2" />
                  <a
                    href={`mailto:${person.email}`}
                    className="hover:text-blue-600"
                  >
                    {person.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{person.phone}</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  Key Achievements
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {person.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-8">
            <h1 className="text-3xl font-bold mb-2">Administration</h1>
            <p className="text-blue-100">
              Meet our dedicated team of administrators, faculty, and support
              staff
            </p>
          </div>

          {/* Category Navigation */}
          <div className="border-b border-gray-200">
            <div className="px-6">
              <div className="flex flex-wrap -mb-px">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                      selectedCategory === category.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Staff Content */}
          <div className="p-6">
            {selectedCategory === "support" || selectedCategory === "admin" ? (
              <div className="text-center py-12">
                <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {selectedCategory === "support"
                    ? "Support Staff"
                    : "Administrative Staff"}
                </h3>
                <p className="text-gray-600">
                  Staff details will be updated soon. Please contact the
                  administration office for specific inquiries.
                </p>
              </div>
            ) : (
              renderStaffCards()
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministrationSection;
