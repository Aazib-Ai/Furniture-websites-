import React from 'react';
import { cn } from '../../utils/helpers/cn';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

// Heading components
export const H1: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'h1',
  ...props
}) => (
  <Component
    className={cn(
      'text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl',
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const H2: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'h2',
  ...props
}) => (
  <Component
    className={cn(
      'text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl',
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const H3: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'h3',
  ...props
}) => (
  <Component
    className={cn(
      'text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl',
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const H4: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'h4',
  ...props
}) => (
  <Component
    className={cn(
      'text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl',
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const H5: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'h5',
  ...props
}) => (
  <Component
    className={cn(
      'text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl',
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const H6: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'h6',
  ...props
}) => (
  <Component
    className={cn(
      'text-base font-semibold tracking-tight text-neutral-900 sm:text-lg',
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

// Paragraph components
export const P: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'p',
  ...props
}) => (
  <Component
    className={cn('text-base text-neutral-700 leading-relaxed', className)}
    {...props}
  >
    {children}
  </Component>
);

export const Lead: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'p',
  ...props
}) => (
  <Component
    className={cn(
      'text-xl text-neutral-600 leading-relaxed',
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Small: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'small',
  ...props
}) => (
  <Component
    className={cn('text-sm text-neutral-600 leading-relaxed', className)}
    {...props}
  >
    {children}
  </Component>
);

export const Muted: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'p',
  ...props
}) => (
  <Component
    className={cn('text-sm text-neutral-500 leading-relaxed', className)}
    {...props}
  >
    {children}
  </Component>
);

// Blockquote
export const Blockquote: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'blockquote',
  ...props
}) => (
  <Component
    className={cn(
      'mt-6 border-l-2 border-neutral-300 pl-6 italic text-neutral-800',
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

// List components
export const Ul: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'ul',
  ...props
}) => (
  <Component
    className={cn('my-6 ml-6 list-disc text-neutral-700', className)}
    {...props}
  >
    {children}
  </Component>
);

export const Ol: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'ol',
  ...props
}) => (
  <Component
    className={cn('my-6 ml-6 list-decimal text-neutral-700', className)}
    {...props}
  >
    {children}
  </Component>
);

export const Li: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'li',
  ...props
}) => (
  <Component className={cn('mt-2', className)} {...props}>
    {children}
  </Component>
);