import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../types/product';

export interface CartItem {
    product: Product;
    quantity: number;
    selectedOptions?: {
        color?: string;
        size?: string;
        material?: string;
    };
}

interface CartStore {
    items: CartItem[];
    isOpen: boolean;

    // Actions
    addItem: (item: CartItem) => void;
    removeItem: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;

    // Getters
    getTotalPrice: () => number;
    getTotalItems: () => number;
    getItemById: (productId: number) => CartItem | undefined;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (newItem) => set((state) => {
                const existingItemIndex = state.items.findIndex(
                    item => item.product.id === newItem.product.id
                );

                if (existingItemIndex >= 0) {
                    const updatedItems = [...state.items];
                    updatedItems[existingItemIndex] = {
                        ...updatedItems[existingItemIndex],
                        quantity: updatedItems[existingItemIndex].quantity + newItem.quantity
                    };
                    return { items: updatedItems };
                }

                return { items: [...state.items, newItem] };
            }),

            removeItem: (productId) => set((state) => ({
                items: state.items.filter(item => item.product.id !== productId)
            })),

            updateQuantity: (productId, quantity) => set((state) => {
                if (quantity <= 0) {
                    return { items: state.items.filter(item => item.product.id !== productId) };
                }

                return {
                    items: state.items.map(item =>
                        item.product.id === productId
                            ? { ...item, quantity }
                            : item
                    )
                };
            }),

            clearCart: () => set({ items: [] }),

            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),

            getTotalPrice: () => {
                const state = get();
                return state.items.reduce(
                    (total, item) => total + (item.product.price * item.quantity),
                    0
                );
            },

            getTotalItems: () => {
                const state = get();
                return state.items.reduce((total, item) => total + item.quantity, 0);
            },

            getItemById: (productId) => {
                const state = get();
                return state.items.find(item => item.product.id === productId);
            }
        }),
        {
            name: 'cart-storage',
            partialize: (state) => ({
                items: state.items,
                isOpen: false // Don't persist cart open state
            })
        }
    )
);