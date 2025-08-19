import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../types/product';

export interface RecentlyViewedStore {
    // Recently viewed products
    items: Product[];
    maxItems: number;

    // Actions
    addRecentlyViewed: (product: Product) => void;
    removeRecentlyViewed: (productId: number) => void;
    clearRecentlyViewed: () => void;
    getRecentlyViewed: () => Product[];
}

export const useRecentlyViewedStore = create<RecentlyViewedStore>()(
    persist(
        (set, get) => ({
            items: [],
            maxItems: 20,

            addRecentlyViewed: (product) => set((state) => {
                // Remove existing item if present
                const filteredItems = state.items.filter(item => item.id !== product.id);

                // Add new item at the beginning
                const newItems = [product, ...filteredItems];

                // Limit to max items
                return { items: newItems.slice(0, state.maxItems) };
            }),

            removeRecentlyViewed: (productId) => set((state) => ({
                items: state.items.filter(item => item.id !== productId)
            })),

            clearRecentlyViewed: () => set({ items: [] }),

            getRecentlyViewed: () => get().items
        }),
        {
            name: 'recently-viewed-storage',
            partialize: (state) => ({ items: state.items, maxItems: state.maxItems })
        }
    )
);