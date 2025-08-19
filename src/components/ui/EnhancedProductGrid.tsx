import React, { useState, useEffect, useCallback } from 'react';
import { EnhancedProductCard } from './EnhancedProductCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import type { Product } from '../../types/product';
import Spinner from './Spinner';

interface EnhancedProductGridProps {
  products: Product[];
  itemsPerPage?: number;
  onProductClick?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  onToggleCompare?: (productId: string) => void;
  comparedProducts?: string[];
  wishlist?: string[];
}

export const EnhancedProductGrid: React.FC<EnhancedProductGridProps> = ({
  products,
  itemsPerPage = 12,
  onProductClick,
  onAddToCart,
  onToggleWishlist,
  onToggleCompare,
  comparedProducts = [],
  wishlist = [],
}) => {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Load initial products
  useEffect(() => {
    const initialProducts = products.slice(0, itemsPerPage);
    setDisplayedProducts(initialProducts);
    setHasMore(products.length > itemsPerPage);
    setCurrentPage(1);
  }, [products, itemsPerPage]);

  // Load more products
  const loadMoreProducts = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const nextPage = currentPage + 1;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newProducts = products.slice(0, endIndex);

    setTimeout(() => {
      setDisplayedProducts(newProducts);
      setCurrentPage(nextPage);
      setHasMore(endIndex < products.length);
      setIsLoading(false);
    }, 500);
  }, [currentPage, hasMore, isLoading, itemsPerPage, products]);

  // Setup infinite scroll
  const [setLastElement] = useInfiniteScroll({
    loading: isLoading,
    hasMore,
    onLoadMore: loadMoreProducts,
    threshold: 0.5,
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((product, index) => (
          <div
            key={product.id}
            ref={index === displayedProducts.length - 1 ? setLastElement : null}
            className="transform transition-all duration-300 hover:scale-105"
          >
            <EnhancedProductCard
              product={product}
              onClick={() => onProductClick?.(product)}
              onAddToCart={() => onAddToCart?.(product)}
              onToggleWishlist={() => onToggleWishlist?.(String(product.id))}
              onToggleCompare={() => onToggleCompare?.(String(product.id))}
              isCompared={comparedProducts.includes(String(product.id))}
              isWishlisted={wishlist.includes(String(product.id))}
              showQuickActions
              showHoverEffects
            />
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="flex justify-center py-8">
          <Spinner size="lg" />
        </div>
      )}

      {!hasMore && displayedProducts.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No more products to load</p>
        </div>
      )}

      {displayedProducts.length === 0 && !isLoading && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found</p>
        </div>
      )}
    </div>
  );
};