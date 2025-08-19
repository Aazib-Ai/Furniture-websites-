import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/helpers/cn';
import Badge from '../ui/Badge';

interface CartIconProps {
  itemCount?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const CartIcon: React.FC<CartIconProps> = ({
  itemCount = 0,
  className,
  size = 'md',
  showLabel = false,
  label = 'Cart',
  animated = true,
  position = 'top-right',
}) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const badgeSize = {
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'lg' as const,
  };

  const badgePositions = {
    'top-right': 'top-0 right-0 transform translate-x-1/2 -translate-y-1/2',
    'top-left': 'top-0 left-0 transform -translate-x-1/2 -translate-y-1/2',
    'bottom-right': 'bottom-0 right-0 transform translate-x-1/2 translate-y-1/2',
    'bottom-left': 'bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2',
  };

  return (
    <Link
      to="/cart"
      className={cn(
        'relative inline-flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors',
        className
      )}
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <div className="relative">
        <ShoppingCart className={sizeClasses[size]} />
        
        <AnimatePresence>
          {itemCount > 0 && (
            <motion.div
              initial={animated ? { scale: 0 } : false}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={cn('absolute', badgePositions[position])}
            >
              <Badge
                variant="primary"
                size={badgeSize[size]}
                className="min-w-[1.25rem] h-[1.25rem] flex items-center justify-center"
              >
                {itemCount > 99 ? '99+' : itemCount}
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className={cn(
          'font-medium',
          size === 'sm' ? 'text-sm' : 'text-base'
        )}>
          {label}
        </span>
      )}
    </Link>
  );
};

// Floating cart button for mobile
interface FloatingCartButtonProps extends Omit<CartIconProps, 'showLabel' | 'label'> {
  position?: 'bottom-right' | 'bottom-left';
  onClick?: () => void;
}

export const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({
  position = 'bottom-right',
  onClick,
  ...props
}) => {
  const positions = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'fixed z-50 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors',
        positions[position]
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Open shopping cart"
    >
      <CartIcon {...props} size="lg" />
    </motion.button>
  );
};

// Cart summary component
interface CartSummaryProps {
  itemCount: number;
  totalAmount: number;
  className?: string;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  itemCount,
  totalAmount,
  className,
}) => {
  return (
    <div className={cn('flex items-center space-x-4', className)}>
      <CartIcon itemCount={itemCount} showLabel />
      <div className="text-right">
        <p className="text-sm text-gray-600">{itemCount} items</p>
        <p className="text-lg font-semibold">${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

// Mini cart preview
interface MiniCartProps {
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
  }>;
  onRemoveItem?: (id: string) => void;
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onCheckout?: () => void;
}

export const MiniCart: React.FC<MiniCartProps> = ({
  items,
  onRemoveItem,
  onUpdateQuantity,
  onCheckout,
}) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-80 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Shopping Cart</h3>
        <p className="text-sm text-gray-600">{totalItems} items</p>
      </div>

      <div className="max-h-64 overflow-y-auto">
        {items.length === 0 ? (
          <p className="p-4 text-center text-gray-500">Your cart is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="p-4 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                )}
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onUpdateQuantity?.(item.id, item.quantity - 1)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemoveItem?.(item.id)}
                    className="ml-2 text-red-500 hover:text-red-700"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-lg">${totalAmount.toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartIcon;