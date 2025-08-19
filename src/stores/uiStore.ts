import { create } from 'zustand';

export interface ModalState {
    isOpen: boolean;
    data?: any;
}

export interface UIStore {
    // Sidebar states
    sidebarOpen: boolean;
    mobileMenuOpen: boolean;
    filterSidebarOpen: boolean;

    // Modal states
    loginModal: ModalState;
    registerModal: ModalState;
    quickViewModal: ModalState;
    cartModal: ModalState;
    wishlistModal: ModalState;
    productModal: ModalState;
    newsletterModal: ModalState;

    // Toast notifications
    toasts: Array<{
        id: string;
        message: string;
        type: 'success' | 'error' | 'warning' | 'info';
        duration?: number;
    }>;

    // Loading states
    globalLoading: boolean;
    pageLoading: boolean;

    // Scroll states
    scrollY: number;
    isScrolled: boolean;

    // Sidebar actions
    toggleSidebar: () => void;
    openSidebar: () => void;
    closeSidebar: () => void;

    toggleMobileMenu: () => void;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;

    toggleFilterSidebar: () => void;
    openFilterSidebar: () => void;
    closeFilterSidebar: () => void;

    // Modal actions - specific for each modal
    openLoginModal: (data?: any) => void;
    closeLoginModal: () => void;
    toggleLoginModal: () => void;

    openRegisterModal: (data?: any) => void;
    closeRegisterModal: () => void;
    toggleRegisterModal: () => void;

    openQuickViewModal: (data?: any) => void;
    closeQuickViewModal: () => void;
    toggleQuickViewModal: () => void;

    openCartModal: (data?: any) => void;
    closeCartModal: () => void;
    toggleCartModal: () => void;

    openWishlistModal: (data?: any) => void;
    closeWishlistModal: () => void;
    toggleWishlistModal: () => void;

    openProductModal: (data?: any) => void;
    closeProductModal: () => void;
    toggleProductModal: () => void;

    openNewsletterModal: (data?: any) => void;
    closeNewsletterModal: () => void;
    toggleNewsletterModal: () => void;

    // Toast actions
    addToast: (message: string, type: 'success' | 'error' | 'warning' | 'info', duration?: number) => void;
    removeToast: (id: string) => void;
    clearToasts: () => void;

    // Loading actions
    setGlobalLoading: (loading: boolean) => void;
    setPageLoading: (loading: boolean) => void;

    // Scroll actions
    setScrollY: (scrollY: number) => void;
    setIsScrolled: (isScrolled: boolean) => void;

    // Utility actions
    closeAllModals: () => void;
    resetUI: () => void;
}

const initialModalState: ModalState = {
    isOpen: false,
    data: undefined,
};

export const useUIStore = create<UIStore>((set) => ({
    // Initial states
    sidebarOpen: false,
    mobileMenuOpen: false,
    filterSidebarOpen: false,

    loginModal: { ...initialModalState },
    registerModal: { ...initialModalState },
    quickViewModal: { ...initialModalState },
    cartModal: { ...initialModalState },
    wishlistModal: { ...initialModalState },
    productModal: { ...initialModalState },
    newsletterModal: { ...initialModalState },

    toasts: [],
    globalLoading: false,
    pageLoading: false,
    scrollY: 0,
    isScrolled: false,

    // Sidebar actions
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    openSidebar: () => set({ sidebarOpen: true }),
    closeSidebar: () => set({ sidebarOpen: false }),

    toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
    openMobileMenu: () => set({ mobileMenuOpen: true }),
    closeMobileMenu: () => set({ mobileMenuOpen: false }),

    toggleFilterSidebar: () => set((state) => ({ filterSidebarOpen: !state.filterSidebarOpen })),
    openFilterSidebar: () => set({ filterSidebarOpen: true }),
    closeFilterSidebar: () => set({ filterSidebarOpen: false }),

    // Modal actions - specific implementations
    openLoginModal: (data) => set({ loginModal: { isOpen: true, data } }),
    closeLoginModal: () => set({ loginModal: { isOpen: false, data: undefined } }),
    toggleLoginModal: () => set((state) => ({ loginModal: { ...state.loginModal, isOpen: !state.loginModal.isOpen } })),

    openRegisterModal: (data) => set({ registerModal: { isOpen: true, data } }),
    closeRegisterModal: () => set({ registerModal: { isOpen: false, data: undefined } }),
    toggleRegisterModal: () => set((state) => ({ registerModal: { ...state.registerModal, isOpen: !state.registerModal.isOpen } })),

    openQuickViewModal: (data) => set({ quickViewModal: { isOpen: true, data } }),
    closeQuickViewModal: () => set({ quickViewModal: { isOpen: false, data: undefined } }),
    toggleQuickViewModal: () => set((state) => ({ quickViewModal: { ...state.quickViewModal, isOpen: !state.quickViewModal.isOpen } })),

    openCartModal: (data) => set({ cartModal: { isOpen: true, data } }),
    closeCartModal: () => set({ cartModal: { isOpen: false, data: undefined } }),
    toggleCartModal: () => set((state) => ({ cartModal: { ...state.cartModal, isOpen: !state.cartModal.isOpen } })),

    openWishlistModal: (data) => set({ wishlistModal: { isOpen: true, data } }),
    closeWishlistModal: () => set({ wishlistModal: { isOpen: false, data: undefined } }),
    toggleWishlistModal: () => set((state) => ({ wishlistModal: { ...state.wishlistModal, isOpen: !state.wishlistModal.isOpen } })),

    openProductModal: (data) => set({ productModal: { isOpen: true, data } }),
    closeProductModal: () => set({ productModal: { isOpen: false, data: undefined } }),
    toggleProductModal: () => set((state) => ({ productModal: { ...state.productModal, isOpen: !state.productModal.isOpen } })),

    openNewsletterModal: (data) => set({ newsletterModal: { isOpen: true, data } }),
    closeNewsletterModal: () => set({ newsletterModal: { isOpen: false, data: undefined } }),
    toggleNewsletterModal: () => set((state) => ({ newsletterModal: { ...state.newsletterModal, isOpen: !state.newsletterModal.isOpen } })),

    // Toast actions
    addToast: (message, type, duration = 3000) => set((state) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = { id, message, type, duration };

        // Auto-remove toast after duration
        setTimeout(() => {
            set((state) => ({
                toasts: state.toasts.filter(toast => toast.id !== id)
            }));
        }, duration);

        return { toasts: [...state.toasts, newToast] };
    }),

    removeToast: (id) => set((state) => ({
        toasts: state.toasts.filter(toast => toast.id !== id)
    })),

    clearToasts: () => set({ toasts: [] }),

    // Loading actions
    setGlobalLoading: (globalLoading) => set({ globalLoading }),
    setPageLoading: (pageLoading) => set({ pageLoading }),

    // Scroll actions
    setScrollY: (scrollY) => set({ scrollY }),
    setIsScrolled: (isScrolled) => set({ isScrolled }),

    // Utility actions
    closeAllModals: () => set({
        loginModal: { ...initialModalState },
        registerModal: { ...initialModalState },
        quickViewModal: { ...initialModalState },
        cartModal: { ...initialModalState },
        wishlistModal: { ...initialModalState },
        productModal: { ...initialModalState },
        newsletterModal: { ...initialModalState },
    }),

    resetUI: () => set({
        sidebarOpen: false,
        mobileMenuOpen: false,
        filterSidebarOpen: false,
        toasts: [],
        globalLoading: false,
        pageLoading: false,
    })
}));