import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../../data/categories';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const FeaturedCollections: React.FC = () => {
  const featuredCategories = categories.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked collections of premium furniture, carefully curated to transform your living spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredCategories.map((category) => (
            <motion.div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-3xl font-bold text-primary-700">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-primary-800">{category.name}</h3>
                  </div>
                </div>
              </div>
               
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">
                  Explore our premium {category.name.toLowerCase()} collection
                </p>
                <Link to={`/shop?category=${category.name.toLowerCase()}`}>
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold"
                  >
                    Shop {category.name}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link to="/shop">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold px-8 py-3 rounded-lg"
            >
              View All Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;