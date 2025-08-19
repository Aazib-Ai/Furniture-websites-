import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { Icon } from '../common/Icon';
import type { Product } from '../../types/product';

interface RelatedProductsCarouselProps {
  products: Product[];
  title?: string;
}

export const RelatedProductsCarousel: React.FC<RelatedProductsCarouselProps> = ({
  products,
  title = "Related Products"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (products.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {products.length > itemsPerView && (
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex gap-4"
          animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ width: `${(products.length / itemsPerView) * 100}%` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>

      {products.length > itemsPerView && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};