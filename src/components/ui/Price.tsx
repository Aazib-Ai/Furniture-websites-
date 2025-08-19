import React from 'react';
import { cn } from '../../utils/helpers/cn';

interface PriceProps {
  price: number;
  originalPrice?: number;
  currency?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showDiscount?: boolean;
}

export const Price: React.FC<PriceProps> = ({
  price,
  originalPrice,
  currency = '$',
  className,
  size = 'md',
  showDiscount = true,
}) => {
  const hasDiscount = originalPrice && originalPrice > price;
  const discountPercentage = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const sizeClasses = {
    sm: {
      price: 'text-sm',
      original: 'text-xs',
      discount: 'text-xs px-1.5 py-0.5',
    },
    md: {
      price: 'text-base',
      original: 'text-sm',
      discount: 'text-xs px-2 py-1',
    },
    lg: {
      price: 'text-lg',
      original: 'text-base',
      discount: 'text-sm px-2 py-1',
    },
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className={cn('font-semibold text-gray-900', sizeClasses[size].price)}>
        {currency}{price.toFixed(2)}
      </span>
      
      {hasDiscount && showDiscount && (
        <>
          <span className={cn(
            'text-gray-500 line-through',
            sizeClasses[size].original
          )}>
            {currency}{originalPrice.toFixed(2)}
          </span>
          
          <span className={cn(
            'bg-red-100 text-red-800 rounded font-medium',
            sizeClasses[size].discount
          )}>
            -{discountPercentage}%
          </span>
        </>
      )}
    </div>
  );
};