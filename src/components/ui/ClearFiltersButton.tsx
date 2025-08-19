import React from 'react';
import { useFilterStore } from '../../stores/filterStore';

const ClearFiltersButton: React.FC = () => {
  const { clearFilters } = useFilterStore();

  return (
    <button
      onClick={clearFilters}
      className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Clear All Filters
    </button>
  );
};

export default ClearFiltersButton;