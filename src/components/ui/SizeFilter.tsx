import React from 'react';
import { useFilterStore } from '../../stores/filterStore';

interface SizeFilterProps {
  className?: string;
}

const sizes = [
  { name: 'Small', value: 'small', count: 89 },
  { name: 'Medium', value: 'medium', count: 156 },
  { name: 'Large', value: 'large', count: 78 },
  { name: 'Extra Large', value: 'xl', count: 45 },
  { name: 'Compact', value: 'compact', count: 34 },
  { name: 'Standard', value: 'standard', count: 123 },
  { name: 'Oversized', value: 'oversized', count: 23 },
];

const SizeFilter: React.FC<SizeFilterProps> = ({ className = '' }) => {
  const { sizes: selectedSizes, setSizes } = useFilterStore();

  const handleSizeToggle = (sizeValue: string) => {
    const newSizes = selectedSizes.includes(sizeValue)
      ? selectedSizes.filter(size => size !== sizeValue)
      : [...selectedSizes, sizeValue];
    
    setSizes(newSizes);
  };

  const handleSelectAll = () => {
    setSizes(sizes.map(size => size.value));
  };

  const handleClearAll = () => {
    setSizes([]);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Size</h3>
        <div className="flex gap-2">
          <button
            onClick={handleSelectAll}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            All
          </button>
          <button
            onClick={handleClearAll}
            className="text-xs text-gray-600 hover:text-gray-800"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto">
        {sizes.map((size) => (
          <label
            key={size.value}
            className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded"
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedSizes.includes(size.value)}
                onChange={() => handleSizeToggle(size.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{size.name}</span>
            </div>
            <span className="text-xs text-gray-500">({size.count})</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;