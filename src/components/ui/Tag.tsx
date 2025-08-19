import React from 'react';
import { cn } from '../../utils/helpers/cn';
import { X } from 'lucide-react';

export interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'md',
  removable = false,
  onRemove,
  className,
}) => {
  const baseClasses = 'inline-flex items-center font-medium transition-colors';

  const variantClasses = {
    default: 'bg-neutral-100 text-neutral-800',
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-neutral-600 text-white',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        'rounded-full',
        className
      )}
    >
      {children}
      {removable && (
        <button
          type="button"
          className="ml-1.5 -mr-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-1"
          onClick={onRemove}
          aria-label="Remove tag"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  );
};

export default Tag;