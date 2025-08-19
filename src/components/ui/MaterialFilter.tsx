import React from 'react';
import { useFilterStore } from '../../stores/filterStore';

interface MaterialFilterProps {
  className?: string;
}

const materials = [
  { name: 'Solid Wood', value: 'wood', count: 156 },
  { name: 'Metal', value: 'metal', count: 89 },
  { name: 'Fabric', value: 'fabric', count: 67 },
  { name: 'Leather', value: 'leather', count: 45 },
  { name: 'Glass', value: 'glass', count: 34 },
  { name: 'Marble', value: 'marble', count: 23 },
  { name: 'Rattan', value: 'rattan', count: 18 },
  { name: 'Velvet', value: 'velvet', count: 12 },
];

const MaterialFilter: React.FC<MaterialFilterProps> = ({ className = '' }) => {
  const { materials: selectedMaterials, setMaterials } = useFilterStore();

  const handleMaterialToggle = (materialValue: string) => {
    const newMaterials = selectedMaterials.includes(materialValue)
      ? selectedMaterials.filter(material => material !== materialValue)
      : [...selectedMaterials, materialValue];
    
    setMaterials(newMaterials);
  };

  const handleSelectAll = () => {
    setMaterials(materials.map(material => material.value));
  };

  const handleClearAll = () => {
    setMaterials([]);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Materials</h3>
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
        {materials.map((material) => (
          <label
            key={material.value}
            className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded"
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(material.value)}
                onChange={() => handleMaterialToggle(material.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{material.name}</span>
            </div>
            <span className="text-xs text-gray-500">({material.count})</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MaterialFilter;