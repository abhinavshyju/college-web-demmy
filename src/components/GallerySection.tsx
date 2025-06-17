import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'events', label: 'Events' },
    { id: 'academics', label: 'Academics' },
    { id: 'sports', label: 'Sports' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'graduation', label: 'Graduation' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg',
      title: 'College Main Building',
      category: 'campus',
      description: 'The iconic main building of our college campus'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      title: 'National Conference NCAS 2024',
      category: 'events',
      description: 'Keynote session at the National Conference on Applied Sciences'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      title: 'College Library',
      category: 'academics',
      description: 'Students studying in our well-equipped library'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-trainer-163444.jpeg',
      title: 'Sports Complex',
      category: 'sports',
      description: 'Modern gymnasium and fitness facilities'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      title: 'Cultural Festival 2024',
      category: 'cultural',
      description: 'Students performing at the annual cultural festival'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      title: 'Computer Science Lab',
      category: 'academics',
      description: 'State-of-the-art computer laboratory'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
      title: 'Alumni Homecoming',
      category: 'events',
      description: 'Alumni gathering during homecoming celebration'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg',
      title: 'Campus Garden',
      category: 'campus',
      description: 'Beautiful landscaped gardens on campus'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      title: 'Industry Interface Program',
      category: 'events',
      description: 'Industry experts interacting with students'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg',
      title: 'Blood Donation Camp',
      category: 'events',
      description: 'NSS volunteers organizing blood donation drive'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg',
      title: 'Graduation Ceremony 2024',
      category: 'graduation',
      description: 'Proud graduates receiving their degrees'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/159775/library-books-education-literature-159775.jpeg',
      title: 'Study Groups',
      category: 'academics',
      description: 'Students collaborating in study groups'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage 
    ? filteredImages.find(img => img.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-8">
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Camera className="h-8 w-8 mr-3" />
              Picture Gallery
            </h1>
            <p className="text-blue-100">
              Explore moments and memories from our vibrant campus life
            </p>
          </div>

          {/* Category Filter */}
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => openLightbox(image.id)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-sm">{image.title}</h3>
                      <p className="text-xs text-gray-200 mt-1">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No images found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <img
              src={selectedImageData.src}
              alt={selectedImageData.title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                {selectedImageData.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {selectedImageData.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;