import React, { useState } from 'react';
import { cn } from '../../utils/helpers/cn';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  zoomable?: boolean;
  onClick?: () => void;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className,
  aspectRatio = 'square',
  zoomable = true,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const aspectRatioClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-gray-100',
        aspectRatioClasses[aspectRatio],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-transform duration-300 ease-in-out',
          zoomable && isHovered && 'scale-110 cursor-pointer'
        )}
        loading="lazy"
      />
      
      {zoomable && isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300" />
      )}
    </div>
  );
};