import React from 'react';
import type { Product } from '../../types/product';
import { ProductImage } from './ProductImage';
import { Price } from './Price';
import { RatingStars } from './RatingStars';
import { QuickViewButton } from './QuickViewButton';
import { AddToCartButton } from './AddToCartButton';
import { cn } from '../../utils/helpers/cn';

interface ProductCardProps {
  product: Product;
  className?: string;
  showQuickView?: boolean;
  showAddToCart?: boolean;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => Promise<void>;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  showQuickView = true,
  showAddToCart = true,
  onQuickView,
  onAddToCart,
}) => {
  const handleQuickView = () => {
    onQuickView?.(product);
  };

  const handleAddToCart = async () => {
    if (onAddToCart) {
      await onAddToCart(product);
    }
  };

  return (
    <div className={cn('group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300', className)}>
      <div className="relative">
        <ProductImage
          src={product.image}
          alt={product.name}
          className="rounded-t-lg"
        />
        
        {/* Quick view and Add to Cart buttons overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-t-lg" />
        
        <div className="absolute top-4 left-4">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              NEW
            </span>
          )}
        </div>
        
        <div className="absolute top-4 right-4">
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              SALE
            </span>
          )}
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {showQuickView && (
            <QuickViewButton
              onClick={handleQuickView}
              className="flex-1"
              size="sm"
            />
          )}
          {showAddToCart && (
            <AddToCartButton
              onAddToCart={handleAddToCart}
              className="flex-1"
              size="sm"
            />
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-2">
          {product.category}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <Price
            price={product.price}
            originalPrice={product.originalPrice}
            size="md"
          />
          
          <RatingStars
            rating={product.rating}
            showText
            size="sm"
          />
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
};