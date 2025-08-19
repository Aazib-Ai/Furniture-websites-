import React from 'react';
import { cn } from '../../utils/helpers/cn';

export interface FlexProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'row' | 'col';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: boolean;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  as?: React.ElementType;
}

const Flex: React.FC<FlexProps> = ({
  children,
  className,
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  wrap = false,
  gap = 'none',
  as: Component = 'div',
  ...props
}) => {
  const justifyClasses = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const alignClasses = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  };

  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  return (
    <Component
      className={cn(
        'flex',
        direction === 'col' ? 'flex-col' : 'flex-row',
        justifyClasses[justify],
        alignClasses[align],
        wrap && 'flex-wrap',
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Flex;