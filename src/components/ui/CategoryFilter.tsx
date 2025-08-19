import React from 'react';
import { useFilterStore } from '../../stores/filterStore';
import { categories } from '../../data/categories';

interface CategoryFilterProps {
  className?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ className = '' }) => {
  const { categories: selectedCategories, setCategories } = useFilterStore();

  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    
    setCategories(newCategories);
  };

  const handleSelectAll = () => {
    setCategories(categories.map(cat => cat.id.toString()));
  };

  const handleClearAll = () => {
    setCategories([]);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Categories</h3>
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
        {categories.map((category) => (
          <label
            key={category.id}
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.id.toString())}
              onChange={() => handleCategoryToggle(category.id.toString())}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;