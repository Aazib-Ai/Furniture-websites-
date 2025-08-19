import React from 'react';
import { useFilterStore } from '../../stores/filterStore';

interface ColorPickerProps {
  className?: string;
}

const furnitureColors = [
  { name: 'Natural Wood', value: '#8B4513', hex: '#8B4513' },
  { name: 'Dark Walnut', value: '#5D4E37', hex: '#5D4E37' },
  { name: 'Oak', value: '#C19A6B', hex: '#C19A6B' },
  { name: 'Cherry', value: '#A0522D', hex: '#A0522D' },
  { name: 'Mahogany', value: '#C04000', hex: '#C04000' },
  { name: 'White', value: '#FFFFFF', hex: '#FFFFFF' },
  { name: 'Black', value: '#000000', hex: '#000000' },
  { name: 'Gray', value: '#808080', hex: '#808080' },
  { name: 'Navy Blue', value: '#000080', hex: '#000080' },
  { name: 'Forest Green', value: '#228B22', hex: '#228B22' },
  { name: 'Burgundy', value: '#800020', hex: '#800020' },
  { name: 'Beige', value: '#F5F5DC', hex: '#F5F5DC' },
  { name: 'Cream', value: '#FFFDD0', hex: '#FFFDD0' },
  { name: 'Tan', value: '#D2B48C', hex: '#D2B48C' },
  { name: 'Espresso', value: '#3C2414', hex: '#3C2414' },
];

const ColorPicker: React.FC<ColorPickerProps> = ({ className = '' }) => {
  const { colors: selectedColors, setColors } = useFilterStore();

  const handleColorToggle = (colorValue: string) => {
    const newColors = selectedColors.includes(colorValue)
      ? selectedColors.filter(color => color !== colorValue)
      : [...selectedColors, colorValue];
    
    setColors(newColors);
  };

  const handleClearColors = () => {
    setColors([]);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Colors</h3>
        <button
          onClick={handleClearColors}
          className="text-xs text-gray-600 hover:text-gray-800"
        >
          Clear
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {furnitureColors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorToggle(color.value)}
            className={`relative group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg overflow-hidden transition-all duration-200 ${
              selectedColors.includes(color.value)
                ? 'ring-2 ring-blue-500 ring-offset-2'
                : 'hover:ring-1 hover:ring-gray-300'
            }`}
            title={color.name}
          >
            <div
              className="w-full h-12 rounded-lg border border-gray-200"
              style={{ backgroundColor: color.hex }}
            />
            {selectedColors.includes(color.value) && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white drop-shadow-lg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {color.name}
            </div>
          </button>
        ))}
      </div>

      {selectedColors.length > 0 && (
        <div className="mt-4">
          <p className="text-xs text-gray-600">
            Selected: {selectedColors.length} color{selectedColors.length > 1 ? 's' : ''}
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {selectedColors.map((color) => {
              const colorObj = furnitureColors.find(c => c.value === color);
              return (
                <span
                  key={color}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {colorObj?.name || color}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;