import React from 'react';
import { cn } from '../../utils/helpers/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'borderless';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      variant = 'default',
      type = 'text',
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      default:
        'border border-neutral-300 bg-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500',
      filled:
        'border-0 bg-neutral-100 focus:bg-neutral-200 focus:ring-1 focus:ring-primary-500',
      borderless:
        'border-0 border-b-2 border-neutral-300 bg-transparent focus:border-primary-500 focus:ring-0',
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={cn(
              'block w-full rounded-md shadow-sm transition-colors duration-200 placeholder-neutral-400',
              'focus:outline-none disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-500',
              variantClasses[variant],
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p
            className={cn(
              'mt-1 text-sm',
              error ? 'text-red-600' : 'text-neutral-500'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;