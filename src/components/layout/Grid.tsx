import React from 'react';
import { cn } from '../../utils/helpers/cn';

export interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
}

const Grid: React.FC<GridProps> = ({
  children,
  className,
  cols = 1,
  gap = 'md',
  responsive = true,
  ...props
}) => {
  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2 sm:gap-4',
    md: 'gap-4 sm:gap-6',
    lg: 'gap-6 sm:gap-8',
    xl: 'gap-8 sm:gap-10',
  };

  const gridClasses = responsive
    ? {
        1: 'grid-cols-1',
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
        6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
        7: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7',
        8: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8',
        9: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9',
        10: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-10',
        11: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-11',
        12: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12',
      }
    : {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
        9: 'grid-cols-9',
        10: 'grid-cols-10',
        11: 'grid-cols-11',
        12: 'grid-cols-12',
      };

  return (
    <div
      className={cn(
        'grid',
        gridClasses[cols],
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;