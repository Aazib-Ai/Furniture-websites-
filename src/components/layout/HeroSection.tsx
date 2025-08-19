import React from 'react';
import { motion } from 'framer-motion';
import InteractiveCard from '../ui/InteractiveCard';

const HeroSection: React.FC = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80';

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 text-center">
        <motion.h1
          className="text-8xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nature in your home
        </motion.h1>
        <motion.p
          className="text-xl mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore a premium collection perfect for adding a natural touch to your home
        </motion.p>
      </div>

      {/* Interactive Cards */}
      <InteractiveCard
        type="product"
        title="Solid wood table"
        description="Crafted from sustainably sourced oak."
        imageUrl="https://images.unsplash.com/photo-1542349332-93cde7269235?w=200"
        position="top-1/2 left-32 transform -translate-y-1/2"
        connector={true}
      />
      <InteractiveCard
        type="wishlist"
        title="Warm and cozy tone"
        imageUrl="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=200"
        position="bottom-32 right-32"
      />
      <InteractiveCard
        type="video"
        title="Your home, your style"
        imageUrl="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=200"
        position="bottom-48 left-1/4"
      />

    </section>
  );
};

export default HeroSection;