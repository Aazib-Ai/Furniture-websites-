import React from 'react';
import { cn } from '../../utils/helpers/cn';
import { Icon } from '../common/Icon';

interface QuickViewButtonProps {
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const QuickViewButton: React.FC<QuickViewButtonProps> = ({
  onClick,
  className,
  size = 'md',
  variant = 'secondary',
}) => {
  const sizeClasses = {
    sm: 'p-2 text-sm',
    md: 'p-2.5 text-sm',
    lg: 'p-3 text-base',
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-300',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 rounded-lg font-medium transition-colors duration-200',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      aria-label="Quick view"
    >
      <Icon name="Eye" size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
      <span>Quick View</span>
    </button>
  );
};