import React, { useState } from 'react';
import { cn } from '../../utils/helpers/cn';
import { Icon } from '../common/Icon';
import Spinner from './Spinner';

interface AddToCartButtonProps {
  onAddToCart?: () => Promise<void>;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  quantity?: number;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  onAddToCart,
  className,
  size = 'md',
  variant = 'primary',
  disabled = false,
  quantity = 1,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (!onAddToCart) return;
    
    setIsLoading(true);
    try {
      await onAddToCart();
    } finally {
      setIsLoading(false);
    }
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800 disabled:bg-gray-400',
    outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white disabled:border-gray-400 disabled:text-gray-400',
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={cn(
        'flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 disabled:cursor-not-allowed',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      aria-label={`Add ${quantity} item${quantity > 1 ? 's' : ''} to cart`}
    >
      {isLoading ? (
        <>
          <Spinner size="sm" className="text-white" />
          <span>Adding...</span>
        </>
      ) : (
        <>
          <Icon name="ShoppingCart" size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
          <span>Add to Cart</span>
        </>
      )}
    </button>
  );
};