import React, { useRef } from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';
import Button from '../ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BestSellers: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Get top 8 best-selling products based on reviews count
  const bestSellers = [...products]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 8);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const currentScroll = scrollRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Best Sellers</h2>
            <p className="text-lg text-gray-600">
              Our most popular furniture pieces loved by thousands of customers
            </p>
          </div>
          
          <div className="hidden sm:flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scroll('left')}
              className="p-2"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scroll('right')}
              className="p-2"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {bestSellers.map((product) => (
              <div key={product.id} className="flex-none w-80">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            View All Best Sellers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;