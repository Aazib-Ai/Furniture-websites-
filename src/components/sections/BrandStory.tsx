import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';

const BrandStory: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className={`relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'} transition-all duration-1000`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-12">
                <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-4xl font-bold text-gray-800">FS</span>
                    </div>
                    <p className="text-gray-700 font-medium">FurniSpace</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-200 rounded-full opacity-50" />
            </div>
            
            {/* Floating cards */}
            <div className={`absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 transform rotate-12 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} transition-all duration-700 delay-300`}>
              <div className="w-12 h-12 bg-green-100 rounded-lg mb-2" />
              <p className="text-xs font-medium text-gray-600">Eco Friendly</p>
            </div>
            
            <div className={`absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 transform -rotate-12 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} transition-all duration-700 delay-500`}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-2" />
              <p className="text-xs font-medium text-gray-600">Handcrafted</p>
            </div>
          </div>

          {/* Content Section */}
          <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'} transition-all duration-1000 delay-200`}>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Crafting Spaces, Creating Memories
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015, FurniSpace began with a simple mission: to make beautiful, 
                sustainable furniture accessible to everyone. What started as a small workshop 
                has grown into a community of passionate designers and craftspeople.
              </p>
              <p className="text-gray-600 mb-8">
                Every piece we create tells a story - of skilled artisans pouring their 
                heart into each detail, of sustainable materials carefully sourced from 
                responsible forests, and of spaces transformed into homes where memories 
                are made.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Sustainable</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            <Button variant="primary" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;