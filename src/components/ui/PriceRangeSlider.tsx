import React, { useState, useEffect } from 'react';
import { useFilterStore } from '../../stores/filterStore';

interface PriceRangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min = 0,
  max = 10000,
  step = 100,
}) => {
  const { priceRange, setPriceRange } = useFilterStore();
  const [localMin, setLocalMin] = useState(priceRange[0] || min);
  const [localMax, setLocalMax] = useState(priceRange[1] || max);

  useEffect(() => {
    setLocalMin(priceRange[0] || min);
    setLocalMax(priceRange[1] || max);
  }, [priceRange, min, max]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), localMax - step);
    setLocalMin(value);
    setPriceRange([value, localMax]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), localMin + step);
    setLocalMax(value);
    setPriceRange([localMin, value]);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Price Range</h3>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{formatPrice(localMin)}</span>
          <span>{formatPrice(localMax)}</span>
        </div>
      </div>

      <div className="relative">
        <div className="h-2 bg-gray-200 rounded-full relative">
          <div
            className="absolute h-2 bg-blue-500 rounded-full"
            style={{
              left: `${((localMin - min) / (max - min)) * 100}%`,
              right: `${100 - ((localMax - min) / (max - min)) * 100}%`,
            }}
          />
        </div>

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localMin}
          onChange={handleMinChange}
          className="absolute w-full -top-1 h-4 bg-transparent appearance-none cursor-pointer"
          style={{
            pointerEvents: 'auto',
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localMax}
          onChange={handleMaxChange}
          className="absolute w-full -top-1 h-4 bg-transparent appearance-none cursor-pointer"
          style={{
            pointerEvents: 'auto',
          }}
        />
      </div>

      <style>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: #3b82f6;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        input[type='range']::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #3b82f6;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default PriceRangeSlider;