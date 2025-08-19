import React, { useEffect, useState } from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';
import Button from '../ui/Button';

const NewArrivals: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState<number[]>([]);
  
  // Get the 6 newest products (highest IDs)
  const newArrivals = [...products]
    .sort((a, b) => b.id - a.id)
    .slice(0, 6);

  useEffect(() => {
    // Animate products appearing one by one
    newArrivals.forEach((_, index) => {
      setTimeout(() => {
        setVisibleProducts(prev => [...prev, index]);
      }, index * 150);
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">New Arrivals</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh designs just landed! Be the first to discover our latest furniture pieces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product, index) => (
            <div
              key={product.id}
              className={`transform transition-all duration-700 ${
                visibleProducts.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <ProductCard 
                product={{
                  ...product,
                  isNew: true
                }} 
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            View All New Arrivals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;