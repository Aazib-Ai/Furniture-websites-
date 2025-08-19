import React, { useState } from 'react';
import { useProgressiveImage } from '../../hooks/useProgressiveImage';

interface ProductPreviewProps {
  images: string[];
  alt: string;
  className?: string;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({
  images,
  alt,
  className = '',
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { src, isLoading } = useProgressiveImage({
    src: images[currentImageIndex] || '',
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-300 ${
          isLoading ? 'blur-sm' : 'blur-0'
        } ${isHovered ? 'scale-105' : 'scale-100'}`}
      />
      
      {isHovered && images.length > 1 && (
        <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300" />
      )}
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default ProductPreview;