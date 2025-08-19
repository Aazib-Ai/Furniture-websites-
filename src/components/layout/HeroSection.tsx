import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  // Simple fade-in animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-background-primary via-primary-50 to-background-secondary flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236e4424' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-8"
        >
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Nature in Your
            <span className="block text-primary-700">Home</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            Transform your living space with our curated collection of natural, sustainable furniture
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              variant="primary"
              className="min-w-[200px] bg-primary-700 hover:bg-primary-800 text-white font-semibold shadow-lg transform transition-transform hover:scale-105"
            >
              Explore Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] border-2 border-primary-700 text-primary-700 hover:bg-primary-50 font-semibold"
            >
              Watch Demo
            </Button>
          </div>

          {/* Feature Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">100%</div>
              <p className="text-gray-600">Sustainable Materials</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">50K+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700 mb-2">8+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-300 rounded-full opacity-20 animate-pulse animation-delay-2000" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent-warm rounded-full opacity-20 animate-pulse animation-delay-4000" />
    </section>
  );
};

export default HeroSection;