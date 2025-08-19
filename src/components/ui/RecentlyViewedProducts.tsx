import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { useRecentlyViewedStore } from '../../stores/recentlyViewedStore';
import type { Product } from '../../types/product';

interface RecentlyViewedProductsProps {
  currentProductId?: number;
  maxItems?: number;
}

export const RecentlyViewedProducts: React.FC<RecentlyViewedProductsProps> = ({
  currentProductId,
  maxItems = 4
}) => {
  const items = useRecentlyViewedStore((state) => state.items);

  // Filter out current product and limit to max items
  const filteredProducts = items
    .filter((product: Product) => product.id !== currentProductId)
    .slice(0, maxItems);

  if (filteredProducts.length === 0) return null;

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Viewed</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product: Product, index: number) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};