import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SearchState {
    // Search query
    query: string;
    searchResults: any[];
    isSearching: boolean;

    // Filter criteria
    categories: string[];
    priceRange: [number, number];
    colors: string[];
    materials: string[];
    brands: string[];
    ratings: number[];
    inStockOnly: boolean;
    onSaleOnly: boolean;

    // Sorting
    sortBy: 'name' | 'price' | 'rating' | 'newest' | 'popularity';
    sortOrder: 'asc' | 'desc';

    // Actions
    setQuery: (query: string) => void;
    setSearchResults: (results: any[]) => void;
    setIsSearching: (isSearching: boolean) => void;

    setCategories: (categories: string[]) => void;
    setPriceRange: (range: [number, number]) => void;
    setColors: (colors: string[]) => void;
    setMaterials: (materials: string[]) => void;
    setBrands: (brands: string[]) => void;
    setRatings: (ratings: number[]) => void;
    setInStockOnly: (inStock: boolean) => void;
    setOnSaleOnly: (onSale: boolean) => void;

    setSortBy: (sortBy: SearchState['sortBy']) => void;
    setSortOrder: (sortOrder: 'asc' | 'desc') => void;

    clearFilters: () => void;
    resetSort: () => void;
}

const defaultFilters = {
    query: '',
    searchResults: [],
    isSearching: false,
    categories: [],
    priceRange: [0, 10000] as [number, number],
    colors: [],
    materials: [],
    brands: [],
    ratings: [],
    inStockOnly: false,
    onSaleOnly: false,
    sortBy: 'popularity' as const,
    sortOrder: 'desc' as const,
};

export const useSearchStore = create<SearchState>()(
    persist(
        (set) => ({
            ...defaultFilters,

            setQuery: (query) => set({ query }),
            setSearchResults: (results) => set({ searchResults: results }),
            setIsSearching: (isSearching) => set({ isSearching }),

            setCategories: (categories) => set({ categories }),
            setPriceRange: (range) => set({ priceRange: range }),
            setColors: (colors) => set({ colors }),
            setMaterials: (materials) => set({ materials }),
            setBrands: (brands) => set({ brands }),
            setRatings: (ratings) => set({ ratings }),
            setInStockOnly: (inStock) => set({ inStockOnly: inStock }),
            setOnSaleOnly: (onSale) => set({ onSaleOnly: onSale }),

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
        }),
        {
            name: 'search-storage',
            partialize: (state) => ({
                query: state.query,
                categories: state.categories,
                priceRange: state.priceRange,
                colors: state.colors,
                materials: state.materials,
                brands: state.brands,
                ratings: state.ratings,
                inStockOnly: state.inStockOnly,
                onSaleOnly: state.onSaleOnly,
                sortBy: state.sortBy,
                sortOrder: state.sortOrder,
            })
        }
    )
);