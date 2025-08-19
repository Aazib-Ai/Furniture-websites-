import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCw, Maximize2, X } from 'lucide-react';
import { cn } from '../../utils/helpers/cn';

interface ProductImageGalleryProps {
  images: string[];
  alt?: string;
  className?: string;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images = [],
  alt = 'Product image',
  className,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [is360View, setIs360View] = useState(false);

  if (images.length === 0) {
    return (
      <div className={cn('bg-gray-100 rounded-lg flex items-center justify-center h-96', className)}>
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }

  const handlePrevious = () => {
    setSelectedIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const currentImage = images[selectedIndex];

  return (
    <div className={cn('space-y-4', className)}>
      {/* Main Image Container */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-lg bg-gray-100">
          <div className="relative aspect-square">
            <img
              src={currentImage}
              alt={`${alt} ${selectedIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-300"
            />

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Action Buttons */}
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={openModal}
                className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="View full screen"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
              {images.length > 4 && (
                <button
                  onClick={() => setIs360View(!is360View)}
                  className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  aria-label="360° view"
                >
                  <RotateCw className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 360° View Placeholder */}
        {is360View && (
          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 text-center">
              <RotateCw className="w-12 h-12 mx-auto mb-2 text-gray-600 animate-spin" />
              <p className="text-sm text-gray-600">360° View Coming Soon</p>
            </div>
          </div>
        )}
      </div>

      {/* Thumbnail Carousel */}
      {images.length > 1 && (
        <div className="relative">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={cn(
                  'relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                  index === selectedIndex
                    ? 'border-blue-500 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                )}
              >
                <img
                  src={image}
                  alt={`${alt} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Full-screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-4xl max-h-screen p-4">
            <img
              src={currentImage}
              alt={`${alt} full size`}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Modal Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};