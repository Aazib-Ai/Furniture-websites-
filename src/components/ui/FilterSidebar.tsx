import React from 'react';
import { useFilterStore } from '../../stores/filterStore';
import PriceRangeSlider from './PriceRangeSlider';
import CategoryFilter from './CategoryFilter';
import ColorPicker from './ColorPicker';
import MaterialFilter from './MaterialFilter';
import SizeFilter from './SizeFilter';
import ClearFiltersButton from './ClearFiltersButton';

const FilterSidebar: React.FC = () => {
  const { hasActiveFilters } = useFilterStore();

  return (
    <div className="space-y-6">
      <PriceRangeSlider />
      <CategoryFilter />
      <ColorPicker />
      <MaterialFilter />
      <SizeFilter />
      {hasActiveFilters() && (
        <ClearFiltersButton />
      )}
    </div>
  );
};

export default FilterSidebar;