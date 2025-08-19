import React from 'react';
import HeroSection from '../../components/layout/HeroSection';
import {
  FeaturedCollections,
  BestSellers,
  NewArrivals,
  BrandStory,
  CustomerTestimonials,
  NewsletterSignup,
} from '../../components/sections';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-primary">
      <HeroSection />
      <FeaturedCollections />
      <BestSellers />
      <NewArrivals />
      <BrandStory />
      <CustomerTestimonials />
      <NewsletterSignup />
    </div>
  );
};

export default Home;