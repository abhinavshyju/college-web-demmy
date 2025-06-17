import React, { useState } from 'react';
import { BookOpen, Calendar, Users, Library, Award, ExternalLink } from 'lucide-react';

const AcademicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('programs');

  const tabs = [
    { id: 'programs', label: 'Academic Programs' },
    { id: 'calendar', label: 'Academic Calendar' },
    { id: 'departments', label: 'Departments' },
    { id: 'courses', label: 'IHRD/Online Courses' },
    { id: 'iqac', label: 'IQAC' },
    { id: 'library', label: 'Library' },
    { id: 'collaborations', label: 'Collaborations' }
  ];

  const programs = [
    {
      level: 'Undergraduate Programs',
      courses: [
        { name: 'B.Sc. Computer Science', duration: '3 Years', seats: 60, affiliation: 'Calicut University' },
        { name: 'B.Sc. Electronics', duration: '3 Years', seats: 40, affiliation: 'Calicut University' },
        { name: 'B.Sc. Mathematics', duration: '3 Years', seats: 40, affiliation: 'Calicut University' },
        { name: 'B.Sc. Physics', duration: '3 Years', seats: 40, affiliation: 'Calicut University' },
        { name: 'B.Sc. Chemistry', duration: '3 Years', seats: 40, affiliation: 'Calicut University' }
      ]
    },
    {
      level: 'Postgraduate Programs',
      courses: [
        { name: 'M.Sc. Computer Science', duration: '2 Years', seats: 20, affiliation: 'Calicut University' },
        { name: 'M.Sc. Electronics', duration: '2 Years', seats: 15, affiliation: 'Calicut University' },
        { name: 'M.Sc. Applied Mathematics', duration: '2 Years', seats: 15, affiliation: 'Calicut University' }
      ]
    }
  ];

  const departments = [
    {
      name: 'Department of Computer Science',
      hod: 'Dr. Priya Nair',
      faculty: 8,
      labs: 4,
      specializations: ['Artificial Intelligence', 'Data Science', 'Cybersecurity', 'Software Engineering']
    },
    {
      name: 'Department of Electronics',
      hod: 'Dr. Suresh Menon',
      faculty: 6,
      labs: 3,
      specializations: ['VLSI Design', 'Embedded Systems', 'Signal Processing', 'Communication Systems']
    },
    {
      name: 'Department of Mathematics',
      hod: 'Dr. Anjali Sharma',
      faculty: 5,
      labs: 2,
      specializations: ['Applied Mathematics', 'Statistics', 'Operations Research', 'Mathematical Modeling']
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'programs':
        return (
          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.level}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-semibold text-blue-600 mb-3">{course.name}</h4>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">{course.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sanctioned Seats:</span>
                          <span className="font-medium">{course.seats}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Affiliation:</span>
                          <span className="font-medium">{course.affiliation}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'calendar':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Calendar 2024-25</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { event: 'Admission Process Begins', date: 'June 1, 2024', status: 'completed' },
                { event: 'First Semester Classes Begin', date: 'August 15, 2024', status: 'completed' },
                { event: 'Mid-Semester Examinations', date: 'October 15-25, 2024', status: 'completed' },
                { event: 'First Semester End Exams', date: 'December 10-20, 2024', status: 'upcoming' },
                { event: 'Winter Break', date: 'December 21, 2024 - January 5, 2025', status: 'upcoming' },
                { event: 'Second Semester Begins', date: 'January 6, 2025', status: 'upcoming' }
              ].map((item, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${
                  item.status === 'completed' ? 'border-green-500 bg-green-50' : 'border-blue-500 bg-blue-50'
                }`}>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.event}</h4>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'departments':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Departments</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">{dept.name}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Head of Department:</span>
                      <span className="font-medium">{dept.hod}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Faculty Members:</span>
                      <span className="font-medium">{dept.faculty}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Laboratories:</span>
                      <span className="font-medium">{dept.labs}</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-gray-600 block mb-2">Specializations:</span>
                      <div className="flex flex-wrap gap-2">
                        {dept.specializations.map((spec, specIndex) => (
                          <span key={specIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'library':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Library Information</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Collection</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>• Books: 15,000+</li>
                      <li>• Journals: 50+ (Print & Digital)</li>
                      <li>• E-Books: 5,000+</li>
                      <li>• Reference Materials: 2,000+</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Facilities</h4>
                    <ul className="text-green-800 space-y-1">
                      <li>• Reading Hall (100 seats)</li>
                      <li>• Digital Library</li>
                      <li>• Internet Access</li>
                      <li>• Photocopying Services</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Library Timings</h4>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-red-600">Closed</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <img
                    src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
                    alt="Library"
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Content for {activeTab} section will be available soon.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-8">
            <h1 className="text-3xl font-bold mb-2">Academics</h1>
            <p className="text-blue-100">
              Explore our academic programs, departments, and educational resources
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-gray-200">
            <div className="px-6">
              <div className="flex flex-wrap -mb-px">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsSection;