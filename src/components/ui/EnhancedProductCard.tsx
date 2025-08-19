import React, { useState } from 'react';
import type { Product } from '../../types/product';
import { ProductImage } from './ProductImage';
import { Price } from './Price';
import { RatingStars } from './RatingStars';
import { QuickViewButton } from './QuickViewButton';
import { AddToCartButton } from './AddToCartButton';
import { Icon } from '../common/Icon';
import { cn } from '../../utils/helpers/cn';

interface EnhancedProductCardProps {
  product: Product;
  className?: string;
  showQuickView?: boolean;
  showAddToCart?: boolean;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => Promise<void>;
  onWishlistToggle?: (product: Product) => void;
  onCompareToggle?: (product: Product) => void;
  isWishlisted?: boolean;
  isCompared?: boolean;
}

export const EnhancedProductCard: React.FC<EnhancedProductCardProps> = ({
  product,
  className,
  showQuickView = true,
  showAddToCart = true,
  onQuickView,
  onAddToCart,
  onWishlistToggle,
  onCompareToggle,
  isWishlisted = false,
  isCompared = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleQuickView = () => {
    onQuickView?.(product);
  };

  const handleAddToCart = async () => {
    if (onAddToCart && !isAddingToCart) {
      setIsAddingToCart(true);
      try {
        await onAddToCart(product);
      } finally {
        setIsAddingToCart(false);
      }
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onWishlistToggle?.(product);
  };

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCompareToggle?.(product);
  };

  const discountPercentage = product.originalPrice && product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className={cn(
        'group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1',
        className,
        {
          'opacity-75': product.inStock === false,
        }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Out of Stock Overlay */}
      {product.inStock === false && (
        <div className="absolute inset-0 bg-white bg-opacity-90 z-10 flex items-center justify-center rounded-xl">
          <div className="text-center">
            <Icon name="PackageX" size={48} className="mx-auto mb-2 text-gray-400" />
            <p className="text-lg font-semibold text-gray-600">Out of Stock</p>
          </div>
        </div>
      )}

      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-t-xl">
        <div className="aspect-square relative">
          <ProductImage
            src={product.image}
            alt={product.name}
            className={cn(
              "w-full h-full object-cover transition-transform duration-300",
              isHovered && "scale-110"
            )}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
              NEW
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className={cn(
              "p-2 rounded-full shadow-md transition-all duration-200",
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white"
            )}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Icon
              name="Heart"
              size={16}
              className={cn(
                isWishlisted ? "fill-current" : "fill-none",
                "transition-colors"
              )}
            />
          </button>

          {/* Compare Button */}
          <button
            onClick={handleCompareToggle}
            className={cn(
              "p-2 rounded-full shadow-md transition-all duration-200",
              isCompared
                ? "bg-blue-500 text-white"
                : "bg-white/90 text-gray-600 hover:bg-blue-500 hover:text-white"
            )}
            aria-label={isCompared ? "Remove from comparison" : "Add to comparison"}
          >
            <Icon name="GitCompare" size={16} />
          </button>
        </div>

        {/* Quick Actions Overlay */}
        <div className={cn(
          "absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
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
              disabled={product.inStock === false}
            />
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
          <h3 className="text-lg font-semibold text-gray-900 mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between mb-3">
          <Price
            price={product.price}
            originalPrice={product.originalPrice}
            size="md"
          />
          
          <RatingStars
            rating={product.rating}
            showText={false}
            size="sm"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            {product.inStock !== false ? `${product.inStock ? 'In Stock' : 'Out of Stock'}` : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  );
};