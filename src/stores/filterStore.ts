import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FilterState {
    // Filter criteria
    categories: string[];
    priceRange: [number, number];
    colors: string[];
    materials: string[];
    brands: string[];
    ratings: number[];
    sizes: string[];
    inStockOnly: boolean;
    onSaleOnly: boolean;

    // Sorting
    sortBy: 'name' | 'price' | 'rating' | 'newest' | 'popularity';
    sortOrder: 'asc' | 'desc';

    // Actions
    setCategories: (categories: string[]) => void;
    setPriceRange: (range: [number, number]) => void;
    setColors: (colors: string[]) => void;
    setMaterials: (materials: string[]) => void;
    setBrands: (brands: string[]) => void;
    setRatings: (ratings: number[]) => void;
    setSizes: (sizes: string[]) => void;
    setInStockOnly: (inStock: boolean) => void;
    setOnSaleOnly: (onSale: boolean) => void;
    setSortBy: (sortBy: FilterState['sortBy']) => void;
    setSortOrder: (sortOrder: 'asc' | 'desc') => void;

    // Utility actions
    clearFilters: () => void;
    resetSort: () => void;
    hasActiveFilters: () => boolean;
}

const defaultFilters = {
    categories: [],
    priceRange: [0, 10000] as [number, number],
    colors: [],
    materials: [],
    brands: [],
    ratings: [],
    sizes: [],
    inStockOnly: false,
    onSaleOnly: false,
    sortBy: 'popularity' as const,
    sortOrder: 'desc' as const,
};

export const useFilterStore = create<FilterState>()(
    persist(
        (set, get) => ({
            ...defaultFilters,

            setCategories: (categories) => set({ categories }),
            setPriceRange: (priceRange) => set({ priceRange }),
            setColors: (colors) => set({ colors }),
            setMaterials: (materials) => set({ materials }),
            setBrands: (brands) => set({ brands }),
            setRatings: (ratings) => set({ ratings }),
            setSizes: (sizes) => set({ sizes }),
            setInStockOnly: (inStockOnly) => set({ inStockOnly }),
            setOnSaleOnly: (onSaleOnly) => set({ onSaleOnly }),
            setSortBy: (sortBy) => set({ sortBy }),
            setSortOrder: (sortOrder) => set({ sortOrder }),

            clearFilters: () => set({
                categories: [],
                priceRange: [0, 10000],
                colors: [],
                materials: [],
                brands: [],
                ratings: [],
                inStockOnly: false,
                onSaleOnly: false,
            }),

            resetSort: () => set({
                sortBy: 'popularity',
                sortOrder: 'desc',
            }),

            hasActiveFilters: () => {
                const state = get();
                return (
                    state.categories.length > 0 ||
                    state.priceRange[0] > 0 ||
                    state.priceRange[1] < 10000 ||
                    state.colors.length > 0 ||
                    state.materials.length > 0 ||
                    state.brands.length > 0 ||
                    state.ratings.length > 0 ||
                    state.sizes.length > 0 ||
                    state.inStockOnly ||
                    state.onSaleOnly
                );
            }
        }),
        {
            name: 'filter-storage',
            partialize: (state) => ({
                categories: state.categories,
                priceRange: state.priceRange,
                colors: state.colors,
                materials: state.materials,
                brands: state.brands,
                ratings: state.ratings,
                sizes: state.sizes,
                inStockOnly: state.inStockOnly,
                onSaleOnly: state.onSaleOnly,
                sortBy: state.sortBy,
                sortOrder: state.sortOrder,
            })
        }
    )
);